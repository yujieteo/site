### Compatible charts give each atlas a unique completion

**Remember:** Take every chart that agrees smoothly with the given ones.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth atlas covers a manifold by charts whose coordinate changes are smooth in both directions. Its completion is the set of all charts that are smoothly compatible with every chart of the atlas.

**Problem.** Every smooth atlas extends to exactly one maximal smooth atlas.

**How the definition helps.** Any smooth atlas containing the original lies inside the completion, so the completion is the unique maximal atlas once it is an atlas (our own). Its charts are compatible with each other: near each point, the change between two new charts factors through an original chart, so it is smooth (our own).

**Wikipedia:** [Differentiable manifold](https://en.wikipedia.org/wiki/Differentiable_manifold). It says: “A differentiable atlas determines a maximal differentiable atlas, consisting of all charts which are differentiably compatible with the given atlas.”

**Sources:** none listed. No primary source with a working link was found.

### Curve velocities give tangent spaces their dimension

**Remember:** A tangent vector is a curve's velocity, read in a chart.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector at a point is a class of smooth curves through it, where two curves are equal when their velocities at time zero agree in a chart. So a chart sends each class to one velocity vector in ℝⁿ.

**Problem.** At each point of a smooth n-dimensional manifold, any chart identifies its tangent space linearly with ℝⁿ.

**How the definition helps.** In a chart, the map from a class to its velocity is injective by definition and surjective because a straight line realizes each velocity (our own). Addition and scaling are defined by moving velocities (our own). The chain rule makes chart changes act on velocities by invertible matrices, so this linear structure does not depend on the chart (our own).

**nLab:** [tangent bundle](https://ncatlab.org/nlab/show/tangent+bundle). It says: “to the set of tangent vectors at x”

**Paper or page:** [Tangent Space is Vector Space](https://proofwiki.org/wiki/Tangent_Space_is_Vector_Space). It says: “Then Tₘ M is a real vector space of dimension n”

**Sources:** none listed. No primary source with a working link was found.

### Defining cotangent vectors as I/I² makes the product rule automatic

**Remember:** A covector is a function modulo second-order terms.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 14A15. arXiv math.DG, math.AG. Level 2: later undergraduate.

**Definition.** The cotangent space at x is Iₓ/Iₓ², the smooth functions vanishing at x modulo sums of products of two such functions. The differential df is the class of f − f(x), so it keeps the first-order part of f and drops all second-order terms.

**Problem.** At x, the differential satisfies d(fg) = f(x) dg + g(x) df. In algebraic geometry, the analogous quotient of the maximal ideal of the local ring by its square gives the Zariski cotangent space.

**How the definition helps.** The product rule follows from fg − f(x)g(x) = f(x)(g − g(x)) + g(x)(f − f(x)) + (f − f(x))(g − g(x)) (our own). The last term lies in Iₓ², so it vanishes in the quotient (our own). The hard part is the isomorphism with the dual of the tangent space, which needs Hadamard's lemma (our own).

**Wikipedia:** [Cotangent space](https://en.wikipedia.org/wiki/Cotangent_space). It says: “the cotangent space can be defined as the quotient space T\*ₓM = Iₓ/Iₓ² by showing that the two spaces are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Half-space charts give the boundary its own smooth structure

**Remember:** Restrict each half-space chart to its flat face.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth manifold with boundary has charts onto open subsets of the closed half-space {last coordinate ≥ 0}, with chart changes that extend smoothly to open sets of ℝⁿ. Its boundary is the set of points that charts send to the flat face, where the last coordinate is zero.

**Problem.** The nonempty boundary of a smooth n-dimensional manifold with boundary is a smooth manifold of dimension n − 1 without boundary.

**How the definition helps.** Restricting each half-space chart to the flat face gives a chart of the boundary into ℝⁿ⁻¹ (our own). The inverse function theorem stops a chart change from sending an interior point to the face, so chart changes map the face to the face (our own). The restricted changes are restrictions of smooth maps, so they are smooth (our own).

**nLab:** [manifold with boundary](https://ncatlab.org/nlab/show/manifold+with+boundary). It says: “A manifold with boundary is a topological space that is locally isomorphic either to an ℝⁿ or to a half-space”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Hausdorff and paracompact manifolds have partitions of unity

**Remember:** Separate distinct points and refine every open cover locally finitely.

*Rules out counterexamples. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 54D20. arXiv math.DG, math.GT. Level 2: later undergraduate.

**Definition.** Here a manifold is a space locally homeomorphic to ℝⁿ with two extra conditions. It is Hausdorff, so distinct points have disjoint neighborhoods, and paracompact, so every open cover has a locally finite open refinement.

**Problem.** Every open cover of a smooth manifold admits a subordinate smooth partition of unity. Its nonnegative functions have locally finite supports, each inside a cover member, and sum to one.

**How the definition helps.** These two conditions give a locally finite refinement by coordinate balls whose shrunken versions still cover (our own summary). Put a smooth bump on each shrunken ball and divide by the sum, which is finite and positive everywhere. The line with two origins is not Hausdorff, and there the cover by its two copies of ℝ has no partition of unity (our own).

**nLab:** [topological manifold](https://ncatlab.org/nlab/show/topological+manifold), [partition of unity](https://ncatlab.org/nlab/show/partition+of+unity), [line with two origins](https://ncatlab.org/nlab/show/line+with+two+origins). It says: “Paracompact smooth manifolds admit locally finite smooth partitions of unity subordinate to any open cover”

**Sources:**

- [Ryszard Engelking, General Topology, Sigma Series in Pure Mathematics 6, Heldermann (1989), Chapter 5 (paracompact spaces)](https://www.heldermann.de/SSPM/SSPM06/sspm06.htm)

### Outward vectors give boundary orientations without choosing a metric

**Remember:** Place the outward vector first.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R19. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An orientation consistently picks out the positive ordered bases of each tangent space. An outward vector at a boundary point has negative last coordinate in a half-space chart. A boundary basis is positive when putting an outward vector in front of it gives a positive basis of the manifold.

**Problem.** An oriented smooth manifold of dimension at least two induces an orientation on its boundary. This orientation does not depend on a metric or on the choice of outward vector.

**How the definition helps.** Any two outward vectors differ by a positive scale and a boundary tangent vector, and neither changes the sign of the determinant (our own). So no metric or perpendicular unit vector is needed (our own). Half-space charts give smooth local outward vectors, so the signs fit together into an orientation (our own).

**nLab:** [orientation](https://ncatlab.org/nlab/show/orientation). It says: “two bases are considered equivalent if the transformation matrix from one to the other has positive determinant”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Product charts make smoothness a componentwise test

**Remember:** Check the two components in two charts.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The product of two smooth manifolds has the product topology, and its charts are pairs of charts that list the coordinates of the two factors side by side. So a map into the product, read in a product chart, is its two component maps read in charts.

**Problem.** A map into a product of smooth manifolds is smooth exactly when both component maps are smooth.

**How the definition helps.** In a product chart, the coordinate expression of a map is the pair of coordinate expressions of its components (our own). A map into Euclidean space is smooth exactly when each block of components is smooth (our own). The same fact shows that product charts are smoothly compatible (our own).

**nLab:** [product manifold](https://ncatlab.org/nlab/show/product+manifold). It says: “its underlying topological space is the product topological space and its charts are the Cartesian product of the given charts”

**Sources:** none listed. No primary source with a working link was found.

### Second countability lets smooth functions determine maps of manifolds (Milnor's exercise)

**Remember:** A countable base makes every real character a point evaluation.

*Rules out counterexamples.* MSC 58A05 (Differentiable manifolds, foundations), 54D70, 26E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Here a manifold is a finite-dimensional Hausdorff smooth manifold whose topology has a countable base. Then it has countably many components, and every unital algebra map C∞(M) → ℝ is evaluation at a point (our own).

**Problem.** For finite-dimensional Hausdorff second-countable smooth manifolds M and N, every unital ℝ-algebra map C∞(N) → C∞(M) is pullback along a unique smooth map M → N.

**How the definition helps.** A countable base rules out a discrete manifold of measurable cardinality, where a nonprincipal countably complete ultrafilter gives a real character that is not a point evaluation. By Milnor’s character theorem, each point evaluation after the given algebra map is evaluation at a unique point of N, which defines the map (our own). Coordinate functions localized by bump functions show that this map is smooth (our own).

**nLab:** [embedding of smooth manifolds into formal duals of R-algebras](https://ncatlab.org/nlab/show/embedding+of+smooth+manifolds+into+formal+duals+of+R-algebras), [topological manifold](https://ncatlab.org/nlab/show/topological+manifold). It says: “If one drops the second countability assumption on manifolds, allowing sets of connected components to have the cardinality of a measurable cardinal”

**Sources:**

- [John Milnor, James Stasheff, Characteristic Classes, Problem 1-C, Annals of Mathematics Studies 76, Princeton University Press (1974)](https://doi.org/10.1515/9781400881826)
- [Eduardo Dubuc, Sur les modèles de la géométrie différentielle synthétique, Cahiers de Topologie et Géométrie Différentielle Catégoriques 20 (1979) 231–279, Prop. 0.7](http://www.numdam.org/item?id=CTGDC_1979__20_3_231_0)

### Tangent vectors as derivations give the chain rule without charts

**Remember:** A tangent vector is whatever obeys the product rule at a point.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector at x is a derivation at x: an ℝ-linear map D: C∞(M) → ℝ that obeys the product rule D(fg) = g(x)D(f) + f(x)D(g).

**Problem.** Define the differential of a smooth map φ by dφₓ(D)(f) = D(f ∘ φ). Then the chain rule d(ψ ∘ φ)ₓ = dψ\_φ(x) ∘ dφₓ holds.

**How the definition helps.** Both sides, applied to D and tested on f, equal D(f ∘ ψ ∘ φ), by associativity of composition (our own).

**Wikipedia:** [Tangent space](https://en.wikipedia.org/wiki/Tangent_space). It says: “While the definition via the velocity of curves is intuitively the simplest, it is also the most cumbersome to work with.”

**Sources:** none listed. No primary source with a working link was found.

### Velocity coordinates make the tangent map smooth

**Remember:** Record the point and its velocity in the same chart.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The tangent bundle TM is the set of all tangent vectors, each paired with its base point. A chart on M gives a bundle chart on TM that records the base point's coordinates and the vector's velocity in those coordinates.

**Problem.** The derivative of a smooth map defines a smooth map between the tangent bundles.

**How the definition helps.** In bundle charts, the derivative sends (x, v) to (f(x), Df(x)v), where f is read in coordinates and Df is its matrix of first derivatives (our own). Both entries depend smoothly on (x, v) (our own). The chain rule shows that bundle charts are compatible, so this local smoothness is enough (our own).

**nLab:** [tangent bundle](https://ncatlab.org/nlab/show/tangent+bundle). It says: “and then gluing these local constructions together via transition functions”

**Sources:** none listed. No primary source with a working link was found.

### With tangent vectors as classes of curves, the chain rule is associativity

**Remember:** Push a curve forward by composing it with f.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector at x is a class \[γ\] of smooth curves with γ(0) = x, where two curves are equal when their velocities at zero agree in a chart. The differential of a smooth map f pushes a curve forward: df\[γ\] = \[f ∘ γ\].

**Problem.** For smooth maps f: X → Y and g: Y → Z, d(g ∘ f) = dg ∘ df. So differentiation is a functor on smooth manifolds.

**How the definition helps.** Both d(g ∘ f) and dg ∘ df send \[γ\] to \[g ∘ f ∘ γ\], so the chain rule is associativity of composition. The identity map fixes every class. The ordinary chain rule in coordinates shows that df does not depend on the chart or the representative curve (our own).

**nLab:** [chain rule](https://ncatlab.org/nlab/show/chain+rule). It says: “If one thinks of a tangent vector v ∈ T<sub>x</sub> X to be an equivalence class of a smooth path γ<sub>v</sub> : \[−ε,ε\] → X, for some ε &gt; 0, with γ(0) = x, then the chain rule is the associativity”

**Sources:** none listed. No primary source with a working link was found.

### A radial integral gives the Poincaré lemma on star-shaped sets

**Remember:** Pull back along radial segments, insert the time direction, and integrate.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** An open set is star-shaped about a if it contains the segment from a to each of its points. To get Kω, pull ω back along the shrinking map H(t,x) = a + t(x − a), insert the time direction first, and integrate over t from 0 to 1.

**Problem.** If a smooth form ω of positive degree on this set is closed, meaning dω = 0, then d(Kω) = ω.

**How the definition helps.** The homotopy formula gives dK + Kd = (pullback at time 1) − (pullback at time 0), by the fundamental theorem of calculus (our own). At time 1 the map is the identity, and at time 0 it is constant, which kills every form of positive degree (our own). So for closed ω, d(Kω) = ω, and Kω is an explicit primitive (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “an explicit formula for a form λ with dλ = ω is given by”

**Sources:** none listed. No primary source with a working link was found.

### Closed forms give the same line integral along deformed paths

**Remember:** Closed forms integrate to zero over the swept square.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A 1-form α is closed when its exterior derivative dα vanishes. A deformation with fixed endpoints is a smooth map from a square that moves one path to the other without moving the start or finish.

**Problem.** The integrals of a smooth closed 1-form along two paths agree if a smooth deformation connects the paths and keeps both endpoints fixed.

**How the definition helps.** By Stokes’s theorem, the change in the integral equals the integral of dα over the square swept by the deformation, since the endpoint edges stay fixed (our own). Closedness makes that integral zero (our own). Without it the claim fails: for α = x dy, the two unit semicircles from (1,0) to (−1,0) give integrals differing by π (our own).

**nLab:** [closed differential form](https://ncatlab.org/nlab/show/closed+differential+form). It says: “is called closed if the de Rham differential d ∶ Ωᵖ(X) → Ωᵖ⁺¹(X) sends it to zero”

**Sources:** none listed. No primary source with a working link was found.

### Defining cube boundaries as signed face sums makes ∂∂ = 0 automatic

**Remember:** Each face of a face occurs twice, with opposite signs.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 55N10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth k-cube is a smooth map from \[0,1\]ᵏ into the manifold. Its boundary is the signed sum of its 2k faces, where the face xᵢ = a gets sign (−1)ⁱ⁺ᵃ for a ∈ {0,1}. Extend this linearly to chains, finite integer sums of cubes.

**Problem.** For every chain c of smooth cubes, the boundary of the boundary of c is zero.

**How the definition helps.** In our own calculation, fixing two different coordinates in either order gives the same face. Removing the earlier coordinate lowers the later index by one. The two coefficients therefore have opposite signs and cancel.

**Paper or page:** [Theorem 5.5. (The boundary of the boundary is empty)](https://venhance.github.io/napkin/Napkin.pdf). It says: “∂² = 0, in the sense that for any k-chain c we have ∂²(c) = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin, Theorem 5.5 on Stokes’ theorem](https://venhance.github.io/napkin/Napkin.pdf)

### Differential forms turn the classical integral theorems into one theorem

**Remember:** Integrate the form on the boundary and its exterior derivative inside.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 26B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth differential k-form assigns to each tangent space an alternating k-linear function, with smooth coefficients in every chart. So it is something that can be integrated over oriented k-dimensional pieces, and functions, line elements, flux elements and volume elements are all forms.

**Problem.** Let Ω be an oriented n-manifold with boundary and ω a compactly supported (n−1)-form on Ω; then the integral of ω over ∂Ω equals the integral of dω over Ω. The fundamental theorem of calculus, Green's theorem, the Kelvin–Stokes theorem and the divergence theorem are its cases in dimensions 1, 2 and 3.

**How the definition helps.** Because all the classical integrands are forms, one statement covers them all. The generalized Stokes theorem pairs a boundary integral with an integral of the exterior derivative, and forms of the right degrees recover each classical formula (our own).

**Wikipedia:** [Generalized Stokes theorem](https://en.wikipedia.org/wiki/Generalized_Stokes_theorem). It says: “is a statement about the integration of differential forms on manifolds, which both simplifies and generalizes several theorems from vector calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero top forms give a global test for orientability

**Remember:** A top form gives every tangent basis a sign.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A volume form on an n-dimensional manifold is a smooth n-form that is nonzero at every point. Declare an ordered tangent basis positive when the form evaluates to a positive number on it.

**Problem.** A positive-dimensional smooth manifold is orientable exactly when it has a volume form. On a connected orientable manifold, the volume form and its negative give the two orientations.

**How the definition helps.** The volume form gives every ordered tangent basis a sign at once, so no chart-by-chart sign choices are needed (our own). Conversely, an orientation gives local positive volume forms, which smooth weights summing to one glue into a global one (our own). On a connected manifold, the ratio of two volume forms is continuous and never zero, so it has one sign (our own).

**nLab:** [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “A volume form defines an orientation on X, the one relative to which it is positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### One exterior derivative explains two zero identities

**Remember:** Gradient, curl, divergence are one d, and d twice is zero.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** In ℝ³, functions, dot-product forms v ↦ F · v, flux forms (u,v) ↦ det(F,u,v), and multiples f dx ∧ dy ∧ dz of the volume form are the forms of degrees 0 to 3. On them the exterior derivative d acts as gradient, then curl, then divergence.

**Problem.** In ℝ³, the curl of a smooth gradient is zero. The divergence of the curl of a smooth vector field is also zero.

**How the definition helps.** Both identities say that applying d twice gives zero (our own). That holds because equal mixed partial derivatives cancel in pairs (our own).

**Paper or page:** [Curl of Gradient is Zero](https://proofwiki.org/wiki/Curl_of_Gradient_is_Zero), [Divergence of Curl is Zero](https://proofwiki.org/wiki/Divergence_of_Curl_is_Zero). It says: “curl grad U = 𝟎”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Chapter 5, The Classical Theorems](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Signed volume shows why curl reverses sign under reflection

**Remember:** Reflection keeps dot products and reverses signed volumes.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** In oriented Euclidean three-space, let α(u) = F · u and define curl F by dα(u,v) = det(curl F,u,v). So curl is read off through the determinant, a signed volume that changes sign with the orientation.

**Problem.** Reversing the orientation negates the curl of a smooth field F. For a linear reflection R in a fixed orientation, the reflected field G satisfies G(Rx) = RF(x) and curl G(Rx) = −R(curl F(x)).

**How the definition helps.** Reversing the orientation negates the determinant but not the dot product, so the curl changes sign (our own). A reflection keeps dot products and reverses signed volume, which gives the minus sign in curl G(Rx) = −R(curl F(x)). The proof also uses that d commutes with pullback (our own).

**Wikipedia:** [Curl (mathematics)](https://en.wikipedia.org/wiki/Curl_%28mathematics%29). It says: “Although expressed in terms of coordinates, the result is invariant under proper rotations of the coordinate axes but the result inverts under reflection.”

**Sources:** none listed. No primary source with a working link was found.

### Star-shaped domains give divergence-free fields vector potentials

**Remember:** A closed flux form on a star-shaped set has a primitive.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vector potential for F is a field A with curl A = F. In forms, this says dα = β, where α(u) = A · u and β(u,v) = det(F,u,v) is the flux form of F, and zero divergence says dβ = 0 (our own). A star-shaped set contains every segment from one fixed point to its other points.

**Problem.** Every smooth field with zero divergence on a star-shaped open set in ℝ³ has a smooth vector potential.

**How the definition helps.** On a star-shaped set, the Poincaré lemma gives α with dα = β, and the field A of α has curl A = F (our own). The condition is needed: on ℝ³ minus the origin, x/\|x\|³ has zero divergence but outward flux 4π through the unit sphere (our own). Every curl has zero flux through that sphere by Stokes’s theorem (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “for ω any closed form on X in positive degree”

**Sources:** none listed. No primary source with a working link was found.

### The product rule makes exterior differentiation commute with pullback

**Remember:** Check functions and their differentials, then use the product rule.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The exterior derivative is the ℝ-linear operator of degree one on smooth forms that extends the differential of functions and satisfies d² = 0. It obeys d(α ∧ β) = dα ∧ β + (−1)ᵖα ∧ dβ for a p-form α. These rules fix d from its values on functions (our own).

**Problem.** For every smooth map and smooth form, taking the exterior derivative before or after pullback gives the same form.

**How the definition helps.** By these rules, it suffices to compare both sides on functions and on coordinate differentials (our own). On functions, pullback is composition, so the chain rule gives agreement (our own). A coordinate differential dx pulls back to the differential d(x ∘ φ), and both sides then give zero by d² = 0 (our own).

**nLab:** [pullback of a differential form](https://ncatlab.org/nlab/show/pullback+of+a+differential+form). It says: “Pullback of differential forms commutes with the de Rham differential”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 4-10](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Wedge products give the divergence rule for cross products

**Remember:** The wedge's sign rule gives the minus in div(A × B).

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Represent fields A and B by the forms α(u) = A · u and β(u) = B · u. Their wedge product, (α ∧ β)(u,v) = α(u)β(v) − α(v)β(u), is the flux form of A × B, that is, (u,v) ↦ det(A × B,u,v).

**Problem.** For smooth fields A and B in ℝ³, div(A × B) = B · curl A − A · curl B.

**How the definition helps.** The signed product rule d(α ∧ β) = dα ∧ β − α ∧ dβ is the identity, read in vector language (our own). The left side is div(A × B) times volume, and dα, dβ are the flux forms of curl A and curl B (our own). A flux form wedged with a dot-product form is their dot product times volume, which gives B · curl A − A · curl B (our own).

**Paper or page:** [Divergence of Vector Cross Product](https://proofwiki.org/wiki/Divergence_of_Vector_Cross_Product). It says: “div(A × B) = B · curl A − A · curl B”

**Sources:** none listed. No primary source with a working link was found.

### A continuous unit normal makes signed surface flux well defined

**Remember:** One continuous normal gives one sign for flux across the whole surface.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Orient a smooth surface in ℝ³ by choosing a unit normal n, a length-one vector perpendicular to the tangent plane, that varies continuously over the whole surface. The signed flux of a field F is the surface integral of F · n.

**Problem.** The signed flux of a continuous field on a compact oriented surface is unchanged by reparametrizations that use the chosen normal.

**How the definition helps.** Because n is chosen once on the surface, F · n has the same value in any two overlapping charts (our own). The change-of-variables formula for surface area then gives the same integral in each chart (our own). On a Möbius strip, a normal carried around the central loop returns reversed, so no continuous choice exists (our own).

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “For surfaces embedded in Euclidean space, an orientation is specified by the choice of a continuously varying surface normal n at every point.”

**Sources:** none listed. No primary source with a working link was found.

### Compactly supported primitives rule out boundary terms at infinity

**Remember:** The primitive, not just its derivative, must vanish outside a compact set.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth form α is a compactly supported primitive of ω if dα = ω and α vanishes outside a compact set.

**Problem.** On an oriented smooth manifold without boundary, a form of degree equal to the dimension integrates to zero if it has a compactly supported primitive.

**How the definition helps.** Stokes’s theorem applies because α has compact support (our own). It turns the integral of ω = dα into an integral of α over the empty boundary, which is zero (our own). Compact support of ω alone is not enough: on ℝ, a smooth step from 0 (left of 0) to 1 (right of 1) has derivative with integral one (our own).

**Paper or page:** [General Stokes' Theorem](https://proofwiki.org/wiki/General_Stokes'_Theorem). It says: “Let ω be a smooth (n − 1)-form with compact support on a smooth n-dimensional oriented manifold X.”

**Sources:** none listed. No primary source with a working link was found.

### Null sets on smooth manifolds are defined chart by chart

**Remember:** Smooth chart changes keep null sets null, so one atlas suffices.

*Rules out counterexamples. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 28A05. arXiv math.DG, math.CA. Level 2: later undergraduate.

**Definition.** In a smooth n-manifold, a set A is null if every chart sends its part in the chart domain to a Lebesgue-null set in ℝⁿ. A is full if its complement is null.

**Problem.** On a smooth manifold, a set that is null in the charts of one atlas covering it is null in every chart. So null and full sets, and 'almost everywhere', make sense without a chosen measure.

**How the definition helps.** Smooth coordinate changes are locally Lipschitz, so they send null sets to null sets. Each chart domain is second countable, so countably many atlas overlaps cover it, and a countable union of null sets is null (our own). Smoothness matters: a homeomorphism can send a null set to a set of positive measure.

**nLab:** [null subset](https://ncatlab.org/nlab/show/null+subset). It says: “If A is covered by an atlas (φᵢ: Uᵢ → X)ᵢ, then A is null or full as soon as φᵢ\*(A) is null/full in Uᵢ for every index i. … This fact depends on the smoothness and fails for topological manifolds.”

**Sources:**

- [John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Graduate Texts in Mathematics 218, Springer (2013), Chapter 6](https://doi.org/10.1007/978-1-4419-9982-5)

### Pseudoforms can be integrated on any manifold, with no orientation

**Remember:** A pseudoform transforms like a density, so its integral ignores orientation.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A top-degree pseudoform gives a coefficient ρₓ in each coordinate chart x. On overlaps with coordinates y it changes by the absolute Jacobian, ρᵧ(y) = ρₓ(x(y)) \|det(∂x/∂y)\|, which is exactly the factor in the change-of-variables formula.

**Problem.** On any smooth n-manifold, chart integration of an absolutely integrable continuous n-pseudoform is independent of the charts and partition of unity. The integral is linear.

**How the definition helps.** The absolute Jacobian is exactly the change-of-variables factor, even for a chart that reverses orientation, so the chart integrals agree (our own). A common refinement compares two partitions of unity, and linearity follows from linearity of ordinary integrals (our own).

**nLab:** [pseudoform](https://ncatlab.org/nlab/show/pseudoform), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms), [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “For a top-dimension pseudoform, this has the effect that at any given point, the form has a consistent sign regardless of the orientation of the coordinates.”

**Sources:**

- [Raoul Bott, Loring W. Tu, Differential Forms in Algebraic Topology, Graduate Texts in Mathematics 82, Springer (1982)](https://doi.org/10.1007/978-1-4757-3951-0)

### Pullback integrals ignore changes of parameter that preserve orientation

**Remember:** Evaluate the form on ordered parameter velocities to retain the orientation sign.

*True by definition.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The integral of a k-form α over a parametrization c is the ordinary integral of α evaluated on the ordered partial derivatives of c. Since α is alternating, a change of parameters multiplies this integrand by the signed Jacobian determinant (our own).

**Problem.** For a convergent form integral, a smooth change of parameters with smooth inverse preserves the integral if it preserves orientation. It negates the integral if it reverses orientation.

**How the definition helps.** Ordinary change of variables uses the absolute value of the Jacobian, so it cancels the magnitude and leaves only the sign (our own). A positive sign preserves the integral, and a negative sign negates it (our own).

**Paper or page:** [Diffgeo: Stokes](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let c be a k-cell, α a k-form, and φ a reparametrization.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorems 4-9 and 5-4](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Signed cube faces reduce Stokes to one variable at a time

**Remember:** Each missing coordinate gives one upper face and one lower face.

*True by definition.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The boundary of a k-cube is the signed sum of its faces, each parametrized by the other coordinates in order. In direction i, the upper face gets sign (−1)ⁱ⁻¹ and the lower face the opposite sign. The exterior derivative is written d(f dx<sub>I</sub>) = df ∧ dx<sub>I</sub>, with the differential in front.

**Problem.** Let c be a smooth parametrized cube of dimension k, and let α be a smooth form of degree k − 1. The integral of dα over c equals the integral of α over its signed boundary.

**How the definition helps.** In α, only the term missing dxᵢ survives on the two faces in direction i, since the others contain the fixed coordinate’s differential (our own). Fubini’s theorem and the fundamental theorem of calculus in xᵢ give the upper value minus the lower value, with sign (−1)ⁱ⁻¹ on both sides (our own). Pullback commutes with d, so the calculation carries over to a parametrized cube (our own).

**Paper or page:** [Diffgeo: Stokes](https://venhance.github.io/napkin/Napkin.pdf). It says: “∫₍c₎ dα = ∫₍∂c₎ α.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 4-13](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Manifolds with corners make products of manifolds with boundary smooth again

**Remember:** Allow corners, and products of manifolds with boundary stay manifolds.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R55. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth n-manifold with corners is a second-countable Hausdorff space with charts onto relatively open subsets of the models \[0,∞)ᵏ × ℝⁿ⁻ᵏ, for 0 ≤ k ≤ n. Chart changes extend smoothly near each point to open sets of ℝⁿ. A product of two such models is again such a model, after reordering coordinates.

**Problem.** The product of two smooth manifolds with corners is a manifold with corners. Examples are the square \[0,1\] × \[0,1\] and W × \[0,1\] for a cobordism W, a manifold whose boundary is two closed manifolds.

**How the definition helps.** Product charts land in products of corner models, which are corner models (our own). Products of smooth extensions extend the product chart changes smoothly (our own). This covers the four corner charts of the square, which are modelled on \[0,∞)².

**Wikipedia:** [Manifold](https://en.wikipedia.org/wiki/Manifold). It says: “If in addition we are considering differentiable manifolds, then a square with interior is not a manifold with boundary. The four vertices are neither locally diffeomorphic to Euclidean space nor to Euclidean half-space.”

**Sources:**

- [Dominic Joyce, On manifolds with corners, arXiv:0910.3518 (2009)](https://arxiv.org/abs/0910.3518)

### Connected fibers let forms descend

**Remember:** Basic forms forget both vertical directions and position along a connected fiber.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** A surjective submersion is a smooth map that looks locally like a coordinate projection and hits every point. A form upstairs is basic when it vanishes whenever one argument is tangent to a fiber and is unchanged by flows within fibers.

**Problem.** For a surjective submersion with connected fibers, every basic form is the pullback of a unique form downstairs.

**How the definition helps.** Vanishing on fiber directions leaves only base differentials, and invariance makes their coefficients locally constant along each fiber (our own). Connected fibers make them constant on each fiber, and local sections then give a unique smooth form downstairs (our own). On two disjoint copies of the base, a function equal to different constants on the copies is basic but does not descend (our own).

**nLab:** [basic differential form](https://ncatlab.org/nlab/show/basic+differential+form). It says: “If the fibers of p are connected (otherwise the characterization given below is valid only locally in E)”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lie derivatives by flows makes the wedge product rule immediate

**Remember:** Pullback respects wedges, so its derivative obeys the product rule.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 57R25. arXiv math.DG. Level 3: graduate.

**Definition.** The Lie derivative ℒₓω is the rate of change of ω as it is pulled back along the flow φₜ of the vector field X. Precisely, it is the derivative of φₜ\*ω at t = 0.

**Problem.** For a fixed smooth vector field X, ℒₓ(α ∧ β) = ℒₓα ∧ β + α ∧ ℒₓβ for all smooth forms α and β.

**How the definition helps.** Pullback respects wedge products, so φₜ\*(α ∧ β) = φₜ\*α ∧ φₜ\*β. Differentiating at t = 0 gives the rule by bilinearity of the wedge product (our own).

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “is the linearization of the pullback of ω along the flow”

**Sources:**

- [T. J. Willmore, The definition of Lie derivative, Proceedings of the Edinburgh Mathematical Society 12 (1960), 27–29](https://doi.org/10.1017/S0013091500025013)

### Divergence as volume change makes volume preservation immediate

**Remember:** Zero divergence stops the flow from changing volume at any time.

*True by definition.* MSC 58A10 (Differential forms in global analysis), 37C10. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** The divergence of a smooth vector field X relative to a nowhere-zero top form μ is the function div X with ℒₓμ = (div X)μ. Here ℒₓμ is the rate at which μ changes when pulled back along the flow, so divergence is the rate of change of volume.

**Problem.** A smooth vector field has zero divergence relative to μ exactly when its flow preserves μ wherever it is defined.

**How the definition helps.** Zero divergence means that the volume form has zero rate of change at time zero (our own). By the flow law, the rate at time t is the time-zero rate pulled back by the time-t map, so it is zero at every time. Conversely, a flow that preserves μ has zero derivative at time zero.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “This means that the divergence measures the rate of expansion of a unit of volume (a volume element) as it flows with the vector field.”

**Sources:** none listed. No primary source with a working link was found.

### Lie and exterior derivatives commute

**Remember:** d commutes with every flow pullback, so with its rate.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** The Lie derivative of a form along a smooth vector field is the derivative at time zero of the form's pullback along the field's local flow.

**Problem.** Taking a Lie derivative and taking an exterior derivative commute on smooth forms.

**How the definition helps.** In our own proof, exterior differentiation commutes with pullback by each local flow map. It also commutes with time differentiation of smooth coefficients. Differentiating the pullback identity at zero gives the claim.

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “the linearization of the pullback of ω along the flow exp(X −)”

**Sources:** none listed. No primary source with a working link was found.

### Closed twists square to zero

**Remember:** Closedness removes the derivative of the twist, and odd degree removes its square.

*Rules out counterexamples.* MSC 58A12 (de Rham theory in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** For a real three-form H with dH = 0, the twisted derivative on smooth real forms, graded by parity, is Dα = dα + H ∧ α.

**Problem.** The twisted exterior derivative has square zero and hence defines cohomology.

**How the definition helps.** Expanding gives D²α = dH ∧ α + H ∧ H ∧ α, since the two mixed terms cancel by the product rule with H odd. H ∧ H = 0 because H has odd degree, and dH = 0 by closedness. Without closedness the claim fails: for H = x₁ dx₂ ∧ dx₃ ∧ dx₄ on ℝ⁴, D²1 = dx₁ ∧ dx₂ ∧ dx₃ ∧ dx₄ (our own).

**nLab:** [twisted de Rham cohomology](https://ncatlab.org/nlab/show/twisted+de+Rham+cohomology). It says: “Notice that this is nilpotent, due to the odd degree of H, such that H ∧ H = 0, and the closure of H, d H = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Invariance makes Cartan differentials square to zero

**Remember:** D squared is minus u times the Lie derivative.

*Rules out counterexamples.* MSC 58A12 (de Rham theory in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** For a circle acting smoothly on a manifold, take polynomials in a degree-two variable u whose coefficients are differential forms fixed by the action. The Cartan differential on them is D = d − uι, where ι inserts the vector field generated by the rotation.

**Problem.** The Cartan differential has square zero on invariant forms, so its cohomology is defined.

**How the definition helps.** Cartan’s formula gives D² = −u(dι + ιd) = −uℒ, where ℒ is the Lie derivative along the rotation (our own). Invariant coefficients have ℒ = 0, so D² = 0. On the rotating circle, the function sin θ is not invariant and has D² sin θ = −u cos θ (our own).

**nLab:** [equivariant de Rham cohomology](https://ncatlab.org/nlab/show/equivariant+de+Rham+cohomology). It says: “Equip this graded vector space Ω•(G, 𝔥∗\[1\])ᴳ with a differential d by”

**Sources:** none listed. No primary source with a working link was found.

### Boundary Hodge spectra pair up

**Remember:** The star swaps tangential and normal parts.

*True by definition. Confidence: medium.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Absolute boundary conditions require the normal parts of α and dα to vanish on the boundary. Relative conditions require the tangential parts of α and d⁎α to vanish, where d⁎ is the formal adjoint of d. The Hodge star swaps normal and tangential parts, and swaps d with d⁎ up to sign.

**Problem.** On a compact oriented Riemannian n-manifold with smooth boundary, absolute k-forms and relative (n − k)-forms have identical Laplacian spectra, including multiplicities.

**How the definition helps.** So the star maps the absolute eigenvalue problem in degree k onto the relative one in degree n − k and commutes with the Laplacian (our own). Boundary elliptic theory gives the operator domains on which this holds.

**Paper or page:** [Well-Posedness of the Hodge Wave Equation on a Compact Manifold](https://arxiv.org/abs/2502.01514v2). It says: “Moreover, we have the following relations between the spaces of weakly differentiable forms: ⋆(HΩᵏ(M)) = H⋆Ωⁿ⁻ᵏ(M)”

**Sources:** none listed. No primary source with a working link was found.

### Defining harmonic as closed and coclosed shows the Hodge star preserves it

**Remember:** The Hodge star swaps the two first-order equations, up to signs.

*True by definition. Confidence: medium.* MSC 58A14 (Hodge theory in global analysis), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** On a closed oriented Riemannian manifold, a form ω is harmonic when dω = 0 and d\*ω = 0, where d\* is the formal adjoint of d. The nLab uses the kernel of the Hodge Laplacian instead, and the two definitions agree.

**Problem.** On a compact oriented Riemannian manifold without boundary, the Hodge star sends harmonic forms to harmonic forms of complementary degree.

**How the definition helps.** The Hodge star swaps d and d\* up to sign, so it swaps the two equations and keeps ω harmonic (our own). With the Laplacian definition, one must instead check that the star commutes with the Laplacian (our own comparison). The definitions agree because pairing the Laplacian of ω with ω gives the sum of the squared norms of dω and d\*ω (our own).

**nLab:** [harmonic differential form](https://ncatlab.org/nlab/show/harmonic+differential+form). It says: “if it is in the kernel of the Laplace operator”

**Sources:** none listed. No primary source with a working link was found.

### Form degrees preserve Hodge filtration

**Remember:** Pullback cannot lower the degree of a holomorphic form.

*True by definition.* MSC 58A14 (Hodge theory in global analysis), 32Q15. arXiv math.DG. Level 3: graduate.

**Definition.** Stage p of the Hodge filtration is the image in complex cohomology of the hypercohomology of the holomorphic de Rham complex with degrees below p removed. So it is built only from holomorphic forms of degree at least p.

**Problem.** Holomorphic pullback preserves every stage of the Hodge filtration.

**How the definition helps.** Pullback keeps form degrees and commutes with d, so it maps each truncated complex to the matching truncated complex (our own). Passing to cohomology, it maps each stage into the same stage (our own). On compact Kähler manifolds, Hodge theory matches these stages with harmonic forms having at least p holomorphic factors in every term.

**nLab:** [holomorphic de Rham complex](https://ncatlab.org/nlab/show/holomorphic+de+Rham+complex). It says: “If X happens to be a Kähler manifold then the Frölicher spectral sequence shows that this coincides with the more traditional definition via harmonic differential forms”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic representatives minimize the norm

**Remember:** A harmonic form is orthogonal to every exact correction.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.SP. Level 3: graduate.

**Definition.** On a closed Riemannian manifold, a form ω is harmonic when dω = 0 and d\*ω = 0. Here d\* is the adjoint of d for the L² inner product, so the second condition says that ω is L²-orthogonal to every exact form dα.

**Problem.** On a closed Riemannian manifold, each real cohomology class is a set of closed forms differing by exact forms. Its harmonic form uniquely minimizes the L² norm in that class.

**How the definition helps.** Since ⟨ω, dα⟩ = ⟨d\*ω, α⟩ = 0, ω is orthogonal to every exact form (our own). Any other representative is ω + dα with dα ≠ 0, so Pythagoras gives a strictly larger norm (our own). The Hodge theorem supplies the harmonic representative (our own).

**Wikipedia:** [Hodge theory](https://en.wikipedia.org/wiki/Hodge_theory). It says: “the harmonic representative is the unique closed form of minimum L² norm that represents a given cohomology class.”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic stars give the signature

**Remember:** The star splits the pairing into plus and minus norms.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Hodge star ⋆ is defined by α ∧ ⋆β = ⟨α,β⟩ vol, with vol the metric volume form. In middle degree on an oriented Riemannian 4m-manifold it squares to one, splitting forms into self-dual (⋆α = α) and anti-self-dual (⋆α = −α) ones. So the integral of α ∧ α is ‖α‖² on self-dual forms and −‖α‖² on anti-self-dual ones (our own).

**Problem.** On a closed oriented Riemannian 4m-manifold, the intersection signature equals the dimension of self-dual harmonic forms minus the dimension of anti-self-dual harmonic forms.

**How the definition helps.** So the intersection pairing is positive definite on self-dual harmonic forms and negative definite on anti-self-dual ones (our own). The two spaces are orthogonal for the pairing (our own), and the Hodge theorem identifies their sum with middle cohomology. So the signature is the difference of their dimensions, with no diagonalization needed.

**nLab:** [Hodge star operator](https://ncatlab.org/nlab/show/Hodge+star+operator). It says: “α ∧ ⋆β = (α ∣ β) vol₍g₎”

**Sources:** none listed. No primary source with a working link was found.

### Integrating heat gives Green operators

**Remember:** Integrating heat replaces each positive eigenvalue by its reciprocal.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Green operator G divides each eigenform of the Hodge Laplacian with positive eigenvalue λ by λ, and kills the harmonic forms. Heat evolution for time t multiplies an eigenform of eigenvalue λ by exp(−tλ).

**Problem.** On a closed Riemannian manifold, let ω be an L² form orthogonal to the harmonic forms. Then integrating its heat evolution exp(−tΔ)ω over all t &gt; 0 gives Gω.

**How the definition helps.** Since the integral of exp(−tλ) over t &gt; 0 is 1/λ for λ &gt; 0, the heat integral acts on each eigenform exactly as G does (our own). The spectral theorem gives an orthonormal basis of eigenforms and a positive lower bound on the positive eigenvalues, so the integral converges in L².

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “G<sub>k</sub>(\\omega )=\\int \_0<sup>\\infty </sup>e<sup>-t\\Delta </sup>\\omega \~  dt”

**Sources:** none listed. No primary source with a working link was found.

### Product Hodge Laplacians add

**Remember:** Opposite signs cancel all mixed derivatives.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** On a product M × N with the product metric, d + d⁎ splits as D<sub>M</sub> + εD<sub>N</sub>. Here D<sub>M</sub> = d<sub>M</sub> + d<sub>M</sub>⁎ and D<sub>N</sub> = d<sub>N</sub> + d<sub>N</sub>⁎ act on the two factors, and ε is (−1)ᵖ on forms of degree p in the M directions.

**Problem.** For closed Riemannian manifolds with the product metric, the Laplacian on forms is the sum of the two factor Laplacians.

**How the definition helps.** Squaring gives Δ<sub>M</sub> + Δ<sub>N</sub> plus the mixed terms D<sub>M</sub> εD<sub>N</sub> + εD<sub>N</sub> D<sub>M</sub> (our own). D<sub>M</sub> changes the parity of the M degree, so D<sub>M</sub> ε = −εD<sub>M</sub>, and the mixed terms cancel (our own).

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “Δ = Δₓ + Δᵧ”

**Sources:** none listed. No primary source with a working link was found.

### Reduced classes have harmonic representatives

**Remember:** Divide by the closure, and projection picks one harmonic form.

*Rules out counterexamples.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Reduced L² cohomology takes the closed square-integrable forms, a closed subspace because d is a closed operator, and divides by the closure of the derivatives. A harmonic form is a closed form orthogonal to every derivative, hence to that closure.

**Problem.** Every reduced L² cohomology class contains exactly one harmonic form.

**How the definition helps.** Closed forms split orthogonally into harmonic forms plus the closed subspace of norm limits of derivatives, so each class has exactly one harmonic member. Without the closure the result fails (our own example): on the real line, the indicator of (0,1) times dx is a limit of derivatives but not a derivative, so its unreduced class is nonzero and contains no harmonic form.

**Paper or page:** [Geometric singularities and Hodge theory](https://arxiv.org/abs/2407.01170v3). It says: “We have that $\\ker (\\Gamma ) = \\ker (\\Pi ) \\oplus \\overline{\\mathrm{ran}(\\Gamma )}$”

**Sources:** none listed. No primary source with a working link was found.

### Exterior closure detects integrable planes

**Remember:** Planes integrate when differentiating their vanishing forms stays in the ideal.

*Rules out counterexamples.* MSC 58A17 (Pfaffian systems). arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth distribution E of constant rank, its ideal consists of the differential forms generated locally by the one-forms vanishing on E. The ideal is closed under d when the derivative of each such one-form lies in the ideal again, that is, vanishes on pairs of vectors in E.

**Problem.** Through every point passes a local integral leaf, a submanifold whose tangent spaces are the planes of E, exactly when the ideal of E is closed under exterior differentiation.

**How the definition helps.** For vector fields X, Y in E and a one-form α vanishing on E, dα(X,Y) = −α(\[X,Y\]), so closure of the ideal is closure of E under brackets, and the Frobenius theorem gives the leaves. In our own counterexample, d(dz − x dy) = −dx∧dy is nonzero on the planes where dz − x dy vanishes.

**nLab:** [exterior differential system](https://ncatlab.org/nlab/show/exterior+differential+system). It says: “Frobenius systems are in bijection with involutive subbundles of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining current boundaries by duality makes pushforward commute with boundary

**Remember:** Boundary and pushforward both act by changing the test form.

*True by definition. Confidence: medium.* MSC 58A25 (Currents in global analysis), 49Q15. arXiv math.DG. Level 3: graduate.

**Definition.** A current is a continuous linear functional on compactly supported smooth forms, and both its boundary and its pushforward act by changing the test form. So ∂T(ω) = T(dω), and for a proper smooth map f, f♯T(η) = T(f\*η), where properness keeps f\*η compactly supported.

**Problem.** For a proper smooth map f and any current T, ∂(f♯T) = f♯(∂T).

**How the definition helps.** Both sides send ω to T applied to f\*(dω) = d(f\*ω), so they agree because pullback commutes with d (our own computation).

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Defining the boundary of a current by duality makes its square zero

**Remember:** Boundary moves d onto the test form, and d twice vanishes.

*True by definition.* MSC 58A25 (Currents in global analysis). arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** An m-current T is a continuous linear functional on compactly supported smooth m-forms. Its boundary ∂T applies T to the exterior derivative of the test form: (∂T)(ω) = T(dω) for each compactly supported smooth (m−1)-form ω.

**Problem.** For every current T of degree at least two, ∂∂T = 0.

**How the definition helps.** Applying the boundary twice applies T to d(dω), which is zero because d² = 0 (our own calculation).

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “In view of this formula we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Half-densities make pullbacks unitary

**Remember:** Two half-Jacobians give the full change-of-variables factor.

*True by definition.* MSC 58A32 (Natural bundles). arXiv math.DG. Level 3: graduate.

**Definition.** A half-density is a quantity that a coordinate change multiplies by the square root of the absolute Jacobian determinant. So the product of a half-density with the conjugate of another is a density, which one can integrate without choosing a measure.

**Problem.** A diffeomorphism gives a unitary pullback on square-integrable half-densities. The pullback by its inverse is the adjoint.

**How the definition helps.** In the inner product the two square roots supply exactly the change-of-variables factor, so pullback by a diffeomorphism preserves inner products. Pullback by the inverse map inverts it, so the pullback is unitary and its adjoint is the inverse pullback. Scalar functions would need a separately chosen measure (our own explanation).

**nLab:** [canonical Hilbert space of half-densities](https://ncatlab.org/nlab/show/canonical+Hilbert+space+of+half-densities). It says: “whose inner product is given by tensoring two half-densities to an actual density and then integrating that over X.”

**Sources:** none listed. No primary source with a working link was found.

### Diffeological spaces make spaces of smooth maps smooth again

**Remember:** A family of smooth maps is a plot when its evaluation is smooth.

*Makes the theorem clean to state or prove.* MSC 58A40 (Differential spaces), 18F15. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** A smooth map between diffeological spaces sends plots, the declared smooth parametrized families, to plots. The space C∞(X,Y) carries the functional diffeology: a family p:U → C∞(X,Y) is a plot exactly when (u,x) ↦ p(u)(x) is smooth.

**Problem.** Diffeological spaces form a cartesian closed category. The smooth maps X → Y form a diffeological space C∞(X, Y), and C∞(Z × X, Y) ≅ C∞(Z, C∞(X, Y)).

**How the definition helps.** By this rule a smooth map Z → C∞(X,Y) is the same as a smooth map Z × X → Y, which is the exponential law (our own argument). Products take componentwise plots, and the one-point space is terminal.

**nLab:** [diffeological space](https://ncatlab.org/nlab/show/diffeological+space), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of smooth manifolds is not cartesian closed, even when infinite-dimensional manifolds are allowed.”

**Sources:**

- [Jean-Marie Souriau, Groupes différentiels, Lecture Notes in Math. 836, Springer (1980) 91–128](https://doi.org/10.1007/BFb0089728)
- [Patrick Iglesias-Zemmour, Diffeology, Mathematical Surveys and Monographs 185, AMS (2013)](https://doi.org/10.1090/surv/185)

### Quotient plots detect smoothness

**Remember:** Test smoothness upstairs by lifting each plot locally.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 3: graduate.

**Definition.** On the quotient Q of a diffeological space X by a surjection π, a plot is a map p:U → Q that lifts locally to plots of X. That is, each point of U has a neighborhood V on which p equals π ∘ q for some plot q of X.

**Problem.** A map out of a diffeological quotient is smooth exactly when its composite with the quotient map is smooth.

**How the definition helps.** If fπ is smooth, then on each V the map f ∘ p equals (fπ) ∘ q, which is a plot, and plots glue, so f is smooth (our own argument). Conversely, π is smooth, so a smooth f gives a smooth fπ.

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “is smooth if and only if f π is”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Banach charts give unique local flows

**Remember:** One complete norm lets Picard iteration control all directions.

*Rules out counterexamples.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds). arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A smooth Banach manifold is a Hausdorff space covered by charts onto open subsets of Banach spaces, complete normed spaces, with transition maps whose Fréchet derivatives of every order are continuous. So in a chart a vector field is a smooth map into one complete normed space.

**Problem.** Every smooth vector field on a Banach manifold has a unique smooth local flow.

**How the definition helps.** In a chart a smooth vector field is locally Lipschitz in the norm, so completeness lets Picard's contraction argument give a unique local solution depending smoothly on the initial value. Without a norm the result fails (our own counterexample): the left shift on all real sequences, with the product topology, has the zero solution and also the solution whose entries are the successive derivatives of a smooth function that is flat at 0 and positive for positive times.

**nLab:** [Fréchet manifold](https://ncatlab.org/nlab/show/Fr%C3%A9chet+manifold). It says: “The existence and uniqueness theorems for ordinary differential equations fail in infinite dimensions”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Strong metrics give smooth gradients

**Remember:** A strong metric turns every differential into a tangent vector.

*Rules out counterexamples.* MSC 58B20 (Riemannian, Finsler and other geometric structures on infinite-dimensional manifolds), 58B10. arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A strong Riemannian metric on a Hilbert manifold is a smooth choice of inner products whose norms give each tangent space its own topology. So sending each tangent vector v to the functional ⟨v,·⟩ is a bundle isomorphism onto the cotangent bundle.

**Problem.** With a strong metric, every smooth real function has a unique smooth gradient. Its inner product with each tangent vector gives the derivative in that direction.

**How the definition helps.** The gradient is the tangent vector that this isomorphism assigns to the differential, so it exists, is unique and is smooth. Our own counterexample is the weak metric ∑ xₙyₙ/n on square-summable sequences. The continuous functional with coefficients 1/n would need the gradient (1, 1, 1, …), which is not square-summable.

**Paper or page:** [On Mañé's Critical Value for Tonelli Lagrangians on Half Lie-Groups](https://arxiv.org/abs/2511.13428). It says: “is a bundle isomorphism.”

**Sources:**

- [On Mañé's Critical Value for Tonelli Lagrangians on Half Lie-Groups](https://arxiv.org/abs/2511.13428)

### Dirac commutators recover geodesic distance

**Remember:** The Dirac operator measures the steepest slope of a function.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** On a closed Riemannian spin manifold, the spectral distance between points x and y is the supremum of \|f(x) − f(y)\| over smooth real functions f with ‖\[D,f\]‖ ≤ 1, where D is the Dirac operator. This bound says exactly that the gradient of f has length at most 1 everywhere (our own).

**Problem.** On a connected closed Riemannian spin manifold, spectral distance equals the infimum of the lengths of paths joining the points.

**How the definition helps.** \[D,f\] is Clifford multiplication by the gradient of f, so the tests are the smooth functions with slope at most one (our own explanation). Integrating along paths bounds each test by path length, and smooth approximations of the distance from x reach that bound.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “From the knowledge of these objects one is able to recover the original manifold as a metric space:”

**Sources:**

- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Disconnected spin components have infinite distance

**Remember:** Constants on separate components can differ without a Dirac commutator.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** On a finite disjoint union of closed Riemannian spin manifolds, D acts as the Dirac operator on each piece. Spectral distance is the supremum of \|f(x) − f(y)\| over smooth real functions f with ‖\[D,f\]‖ ≤ 1, and it may be infinite.

**Problem.** The spectral distance between points in different components is infinite.

**How the definition helps.** A function that is constant on each component commutes with D, so it passes the test at any size (our own argument). Multiples of the indicator of one component give arbitrarily large differences between points in different components.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “In general, the Connes metric can indeed take the value ∞”

**Sources:**

- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Invariant Dirac operators preserve distance

**Remember:** A unitary commuting with D permutes the distance tests.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** For a unital algebra of bounded operators on a Hilbert space with a self-adjoint operator D, the spectral distance between two states is the supremum of \|φ(a) − ψ(a)\| over the tests, the self-adjoint a with ‖\[D,a\]‖ ≤ 1. A unitary u that commutes with D sends tests to tests by a ↦ uau\*, because \[D,uau\*\] = u\[D,a\]u\*.

**Problem.** Suppose a group acts on the algebra by unitary conjugations and each implementing unitary commutes with D. Its induced action on states preserves spectral distance, including infinite distances.

**How the definition helps.** Conjugation by each implementing unitary is a bijection of the set of tests, so moving both states does not change the supremum (our own deduction from Lemma 3.11).

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “then the action is Lip-isometric in the sense that”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)
- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Local compactness admits Euclidean Dirac operators

**Remember:** Multiply by a compactly supported function before testing compactness.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** A locally compact spectral triple is a ∗-algebra represented faithfully on a Hilbert space with a self-adjoint operator D, where each a preserves the domain of D, \[D,a\] extends to a bounded operator, and a(D + i)⁻¹ is compact. Compactness is asked only after multiplying by an algebra element, not of (D + i)⁻¹ itself.

**Problem.** On positive-dimensional Euclidean space let smooth compactly supported functions multiply square-integrable differential forms, and let D equal exterior differentiation plus its adjoint. These data form a locally compact spectral triple although (D + i)⁻¹ is not compact.

**How the definition helps.** Multiplying by a compactly supported function confines the resolvent output to a bounded region, where compact Sobolev embedding gives compactness (our own explanation). The commutator differentiates only the multiplier, so it is bounded. Translates of a fixed nonzero form, moved off to infinity, have resolvent images with no convergent subsequence, so (D + i)⁻¹ is not compact.

**Paper or page:** [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551). It says: “is an even spectral triple satisfying”

**Sources:**

- [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551)

### The junk ideal lets differentiation descend

**Remember:** Kill every invisible form and its differential.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** For a spectral triple, represent each universal form a₀ da₁ ⋯ daₖ as the operator a₀\[D,a₁\] ⋯ \[D,aₖ\], and let K be the forms represented by zero. The represented calculus divides the universal differential algebra by K + dK, so the derivative of every discarded form is discarded too.

**Problem.** The quotient inherits multiplication and a differential satisfying the graded product rule and d² = 0.

**How the definition helps.** Because dK is discarded with K, the differential descends, and the graded product rule makes K + dK a two-sided ideal (our own explanation). Without dK it fails: for a smooth real function f on a closed spin manifold, f df − df f represents zero, but its derivative represents 2\[D,f\]², which is nonzero wherever df ≠ 0.

**Paper or page:** [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888). It says: “is a ∗-differential calculus.”

**Sources:**

- [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888)

### Total boundedness gives weak star convergence

**Remember:** Finitely many approximate tests control all tests at once.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** For a unital spectral triple, spectral distance is the supremum of \|φ(a) − ψ(a)\| over the tests, the self-adjoint algebra elements a with ‖\[D,a\]‖ ≤ 1. The condition asks that for one fixed state μ the centered tests a − μ(a)1 form a totally bounded set: for every ε &gt; 0, finitely many norm balls of radius ε cover them.

**Problem.** If the tests are totally bounded in this sense, spectral distance is a finite metric on states. It induces the weak star topology, pointwise convergence on the completed algebra.

**How the definition helps.** Centering does not change state differences and states have norm one, so a finite ε-net bounds the distance and turns pointwise convergence into uniform convergence over all tests (our own proof). Conversely, rescaled tests include every self-adjoint algebra element, which separates states and gives pointwise convergence on the dense algebra, hence on its completion. Without the condition, D = 0 on two points gives infinite distance between distinct states.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “topologizes the weak\* topology on the state space”

**Sources:**

- [Rieffel, Metrics on state spaces](https://doi.org/10.4171/DM/68)

### Absolute differential forms give the triangle inequality for integrals

**Remember:** Changing a frame scales an absolute form by the absolute determinant.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** An absolute p-form assigns a scalar to each ordered tangent p-frame, vanishes on dependent tuples, and changes by the factor \|det A\| when the frame changes by a matrix A. So it ignores orientation, and \|ω\|, the absolute value of an ordinary form ω taken on each frame, is an absolute form.

**Problem.** For an integrable p-form ω on an oriented p-dimensional submanifold R, \|∫<sub>R</sub> ω\| ≤ ∫\_\|R\| \|ω\|. Here \|R\| denotes the same submanifold with its orientation forgotten.

**How the definition helps.** An absolute form integrates over a submanifold without an orientation, so both sides of the inequality make sense. In each oriented chart the ordinary triangle inequality for integrals gives \|∫ ω\| ≤ ∫ \|ω\| (our own argument).

**nLab:** [absolute differential form](https://ncatlab.org/nlab/show/absolute+differential+form), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms). It says: “I call these absolute forms. The term 'absolute' suggests a lack of additional required structure, in this case some sort of orientation on the domain of integration.”

**Sources:**

- [Juan Carlos Álvarez Paiva, answer to 'Why do I need densities in order to integrate on a non-orientable manifold?', MathOverflow (2012)](https://mathoverflow.net/questions/90455/) (link not checked)

### Momentum classes conserve circulation

**Remember:** Follow the loop and ignore exact changes in momentum.

*True by definition. Confidence: medium.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** The momentum class of a fluid velocity is its metric dual one-form, the one-form that takes the inner product with each tangent vector, taken modulo differentials of functions. Differentials integrate to zero on closed loops, so loop integrals depend only on the class.

**Problem.** For smooth incompressible Euler flow on a closed Riemannian manifold, pulling the momentum class back along the particle flow keeps it constant. Thus the integral of velocity around each moving closed loop stays constant.

**How the definition helps.** Euler's equation says the time derivative of the pulled-back one-form is a differential, which the class ignores, so the class stays constant (our own derivation). Integrals around closed loops depend only on the class, so circulation is conserved.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “then we have the following conservation law:”

**Sources:**

- [Patrick Heslin, Two-Point Boundary Value Problems on Diffeomorphism Groups, Lemma 3.4](https://arxiv.org/abs/2110.12278)

### Smooth curves make inversion smooth

**Remember:** To invert a smooth family, solve a finite-dimensional equation with a parameter.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** In convenient calculus a map is smooth if it takes smooth curves to smooth curves. On the diffeomorphism group of a closed manifold, a curve of maps is smooth exactly when evaluation depends smoothly on time and position together.

**Problem.** Inversion is smooth on the Fréchet manifold of smooth diffeomorphisms of a closed manifold.

**How the definition helps.** So inversion is smooth if each jointly smooth family f(t,y) of diffeomorphisms has a jointly smooth inverse family g(t,x) (our own proof). The implicit function theorem gives this, since g solves f(t,g(t,x)) = x and each spatial derivative of f is invertible.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “inversion maps smooth curves to smooth curves”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Mapping tangents are pointwise fields

**Remember:** Vary each image point in its own tangent space.

*True by definition.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A local addition on N is a smooth map Σ from a neighborhood of the zero section of TN to N, with Σ(0ᵧ) = y, such that (π,Σ) maps that neighborhood diffeomorphically onto a neighborhood of the diagonal in N × N. It charts the mapping space near f by sending a small vector field ξ along f to the map Σ ∘ ξ.

**Problem.** For a closed manifold M and a finite-dimensional manifold N, the tangent bundle of the smooth mapping space C∞(M,N) is C∞(M,TN). Its fiber over f is the space of smooth vector fields along f.

**How the definition helps.** The charts are modelled on vector fields along f, so velocities of curves through f are such vector fields. Differentiating a curve of maps in time at each point gives the identification, and chart compatibility makes it a smooth bundle isomorphism (our own proof).

**nLab:** [tangent spaces of mapping spaces](https://ncatlab.org/nlab/show/tangent+spaces+of+mapping+spaces). It says: “The claim of this page is that this is a diffeomorphism, and further a vector bundle isomorphism”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Category bounds critical point counts

**Remember:** Count the fewest open sets covering the manifold that contract inside it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** The Lusternik–Schnirelmann category of a manifold is the least number of open sets covering it that can each contract to a point inside the manifold. Use infinity if no finite cover works.

**Problem.** Suppose a bounded-below, twice continuously differentiable function on a complete Riemannian Hilbert manifold satisfies Palais–Smale compactness. It has at least as many critical points as the category of the manifold.

**How the definition helps.** Palais–Smale compactness, a convergent subsequence whenever values stay bounded and derivative norms tend to zero, lets the gradient flow deform sublevel sets across intervals without critical values (our own). So the category of a sublevel set can grow only at critical values, and each critical point raises it by at most one, because a small ball around it contracts (our own).

**nLab:** [Lusternik-Schnirelmann category](https://ncatlab.org/nlab/show/Lusternik-Schnirelmann+category). It says: “A topological space X has Lusternik–Schnirelmann category ≤ n if there is an open cover of X by at most n sets for which the inclusion maps U ↪︎ X are nullhomotopic.”

**Sources:**

- [Mónica Clapp and Dieter Puppe, Invariants of the Lusternik-Schnirelmann type and the topology of critical sets (1986)](https://doi.org/10.1090/S0002-9947-1986-0860382-0)
- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)

### Compactness clears regular bands

**Remember:** Almost-critical sequences must converge, so regular bands stay steep.

*Rules out counterexamples. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** A differentiable function satisfies the Palais–Smale condition if its almost-critical sequences cannot escape: every sequence with bounded values and derivative norms tending to zero has a convergent subsequence.

**Problem.** Suppose a twice continuously differentiable Palais–Smale function on a complete Riemannian Hilbert manifold has no critical points with values in \[a,b\]. One can continuously deform {f ≤ b} onto {f ≤ a} while fixing {f ≤ a} throughout.

**How the definition helps.** On the band a ≤ f ≤ b, Palais–Smale bounds the gradient norm away from zero, since vanishing gradients would converge to a critical point there (our own proof). The flow of −∇f/‖∇f‖² then lowers f at unit rate, and completeness lets it run down to level a. Without the condition, exp(x) on ℝ has no critical points, yet {exp ≤ 1} is nonempty and {exp ≤ 0} is empty.

**Wikipedia:** [Palais–Smale compactness condition](https://en.wikipedia.org/wiki/Palais%E2%80%93Smale_compactness_condition). It says: “In the calculus of variations, where one is typically interested in infinite-dimensional function spaces, the condition is necessary because some extra notion of compactness beyond simple boundedness is needed.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)
- [Richard S. Palais and Stephen Smale, A generalized Morse theory (1964)](https://doi.org/10.1090/S0002-9904-1964-11062-4)

### Compactness prevents mountain-pass escape

**Remember:** At the pass height, vanishing derivatives force a convergent subsequence.

*Rules out counterexamples.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** A differentiable function f satisfies the Palais–Smale condition at height c if every sequence whose values tend to c and whose derivative norms tend to zero has a convergent subsequence.

**Problem.** For a continuously differentiable Hilbert space function, let c be the infimum of maximum heights along continuous paths between two given points. If c exceeds both endpoint values, Palais–Smale compactness at c gives a point with value c and derivative zero.

**How the definition helps.** The deformation argument gives such a sequence at the pass height c, since otherwise paths could be pushed below c, and compactness turns it into a critical point with value c (our own). Without the condition it fails: f(x,y) = (x² − 1)² + exp(−y) has pass value 1 between (−1,1) and (1,1), yet its y-derivative never vanishes (our own).

**Wikipedia:** [Mountain pass theorem](https://en.wikipedia.org/wiki/Mountain_pass_theorem). It says: “then the conclusion of the theorem is that c is a critical value of I.”

**Sources:**

- [Antonio Ambrosetti and Paul H. Rabinowitz, Dual variational methods in critical point theory and applications (1973)](https://doi.org/10.1016/0022-1236(73)90051-7)
- [Richard S. Palais and Stephen Smale, A generalized Morse theory (1964)](https://doi.org/10.1090/S0002-9904-1964-11062-4)

### Fixed directions suffice for criticality

**Remember:** Fixed directions survive every symmetry, and averaging produces a fixed direction.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** The fixed subspace of a group of linear symmetries consists of the vectors that every group element leaves unchanged. An invariant function takes the same value after any symmetry, so at a fixed point its derivative does not change when a symmetry moves the direction (our own).

**Problem.** Let a compact group act continuously and linearly on a Banach space and preserve a continuously differentiable function. A critical point of the function restricted to the fixed subspace is critical on the full space.

**How the definition helps.** Averaging a direction over the group, with the invariant probability measure that compactness provides, gives a fixed direction with the same derivative (our own). At a restricted critical point the derivative vanishes on fixed directions, so it vanishes on every direction (our own).

**Paper or page:** [Nonlocal problem with critical exponential nonlinearity of convolution type: A non-resonant case](https://arxiv.org/abs/2408.00654). It says: “If J : X → ℝ is an H-invariant, C¹ functional”

**Sources:**

- [Richard S. Palais, The principle of symmetric criticality (1979)](https://doi.org/10.1007/BF01941322)
- [Suman Kanungo, Pawan Kumar Mishra, Nonlocal problem with critical exponential nonlinearity of convolution type: A non-resonant case](https://arxiv.org/abs/2408.00654)

### Invertible Hessians give Morse coordinates

**Remember:** The Hessian must reach every covector with a bounded inverse.

*Rules out counterexamples. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** At a critical point the Hessian is the second derivative, a bounded bilinear form on the tangent space. On a Hilbert manifold it is strongly nondegenerate if it gives a bounded linear isomorphism from the tangent space onto its dual, so it has a bounded inverse and not only zero kernel.

**Problem.** Near a strongly nondegenerate critical point, a smooth function admits coordinates in which it equals its critical value plus ‖u‖² minus ‖v‖².

**How the definition helps.** A bounded inverse keeps the Hessian spectrum away from zero, which the Hilbert space Morse lemma needs (our own). The function ∑ xₙ²/n on square-summable sequences has a Hessian with zero kernel but no bounded inverse (our own). A smooth coordinate change keeps the Hessian invertible at a critical point, so this function has no Morse coordinates (our own).

**nLab:** [Morse theory](https://ncatlab.org/nlab/show/Morse+theory). It says: “Morse theory is the method of studying the topology of a smooth manifold M by the study of Morse functions M → ℝ and their associated gradient flows.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)

### Metric slopes find almost critical points

**Remember:** Strong slope is the steepest downhill rate, measured by distance alone.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** The strong slope of f at a point x with finite value is its steepest local rate of descent: the limit superior of max(f(x) − f(y), 0)/d(x,y) as y tends to x with y ≠ x. It is zero at an isolated point.

**Problem.** Let f be lower semicontinuous, bounded below, and finite somewhere on a complete metric space, allowing the value +∞. There are points whose values approach its infimum and whose strong slopes approach zero.

**How the definition helps.** Ekeland's variational principle gives, for each ε &gt; 0, a near-minimizer x with f(x) − f(y) ≤ ε d(x,y) for every y (our own). Dividing by d(x,y) bounds the strong slope at x by ε, while the values approach the infimum (our own).

**Paper or page:** [Slopes and Moreau-Rockafellar Theorem](https://arxiv.org/abs/2309.03505). It says: “Let (M, ρ) be a complete metric space and let f : M → ℝ ∪ {+∞} be a proper lower semicontinuous and bounded below function.”

**Sources:**

- [Milen Ivanov, Nadia Zlateva, Slopes and Moreau-Rockafellar Theorem](https://arxiv.org/abs/2309.03505)

### Palais–Smale compactness gives minimizers

**Remember:** A nearly stationary minimizing sequence needs somewhere to converge.

*Rules out counterexamples.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The Palais–Smale condition asks for compactness only along nearly stationary sequences: every sequence with bounded values and derivative norms tending to zero has a convergent subsequence.

**Problem.** Let f be a continuously differentiable real-valued function on a real Hilbert space. If f is bounded below and satisfies the Palais–Smale condition, it attains its infimum.

**How the definition helps.** Ekeland's variational principle gives a minimizing sequence that is also nearly stationary, so the condition gives a convergent subsequence, and continuity makes its limit a minimizer (our own). On the real line exp(−x) is bounded below but has no minimum, because its nearly stationary sequences escape to infinity (our own).

**Wikipedia:** [Palais–Smale compactness condition](https://en.wikipedia.org/wiki/Palais%E2%80%93Smale_compactness_condition). It says: “if every sequence {uₖ} ⊂ H such that: {I\[uₖ\]} is bounded, and I′\[uₖ\] → 0 in H has a convergent subsequence in H.”

**Sources:** none listed. No primary source with a working link was found.

### Ray maxima give Nehari minimax

**Remember:** Every ray reaches its energy peak on the Nehari set.

*True by definition.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** For f(u) = ‖u‖²/2 − B(u)/p on a nonzero real Banach space, with p &gt; 2 and B continuous, positive away from zero and with B(tu) = tᵖB(u) for t &gt; 0, the Nehari set is the set of nonzero u with ‖u‖² = B(u). Along each ray t ↦ tu the energy rises to one maximum and then falls without bound, and that maximum lies exactly on the Nehari set (our own).

**Problem.** Among continuous paths from zero to a nonzero point of nonpositive energy, the infimum of path maxima equals the infimum on the Nehari set.

**How the definition helps.** A ray continued past its peak to negative energy is an admissible path whose maximum is a Nehari value, which gives one inequality (our own). Conversely, homogeneity gives ‖u‖² &gt; B(u) for small nonzero u, while an endpoint of nonpositive energy has ‖u‖² &lt; B(u), so every admissible path crosses the Nehari set (our own).

**Paper or page:** [Entire Nodal Solutions with Prescribed Symmetry to Caffarelli-Kohn-Nirenberg Equations](https://arxiv.org/abs/2511.11543). It says: “beginning at 0 with non-trivial endpoint of non-positive energy”

**Sources:**

- [Edward Chernysh, Entire Nodal Solutions with Prescribed Symmetry to Caffarelli-Kohn-Nirenberg Equations](https://arxiv.org/abs/2511.11543)

### Broken geodesics retain sublevel topology

**Remember:** Keep the joints and shorten everything between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** For a fixed partition of time, a broken geodesic is a path that on each interval is the shortest geodesic, at constant speed, between its values at the two ends. Replacing each piece of a path by such a geodesic keeps the joints and does not raise energy (our own).

**Problem.** Fix endpoints and an energy bound E for H¹ paths on a compact Riemannian manifold without boundary, with energy the integral of squared speed. For a sufficiently fine partition, this sublevel deformation retracts onto its broken geodesics in the H¹ topology.

**How the definition helps.** Replacing a growing initial part of each piece gives a continuous deformation onto broken geodesics in the H¹ topology, the norm on the path and its first derivative (our own). The energy bound makes each piece short for a fine partition, so the shortest replacement is unique and depends smoothly on its endpoints (our own).

**nLab:** [geodesic](https://ncatlab.org/nlab/show/geodesic). It says: “A geodesic may not globally minimize the distance between its end points.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)
- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Bumpiness makes bounded geodesic counts finite

**Remember:** An isolated orbit cannot be the limit of other closed orbits.

*Rules out counterexamples. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A metric is bumpy if on every nonconstant closed geodesic each periodic Jacobi field, a periodic solution of the linearized geodesic equation, is a constant multiple of the velocity.

**Problem.** On a compact Riemannian manifold without boundary, a bumpy metric has finitely many closed unit-speed geodesics below each length bound, up to time shift.

**How the definition helps.** A family of nearby closed geodesics would give another periodic Jacobi field, so bumpiness isolates each closed geodesic up to time shift (our own). Periods are bounded below by the injectivity radius, so compactness makes infinitely many orbits of bounded length accumulate at a closed orbit, which contradicts isolation. On the round sphere the great circles vary continuously with their planes (our own counterexample).

**Paper or page:** [Morse Index bound of simple closed geodesics on 2-spheres and strong Morse Inequalities](https://arxiv.org/abs/2303.00644). It says: “This induces a nontrivial Jacobi field of w and contradicts to the fact that the metric is bumpy.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Dongyeong Ko, Morse Index bound of simple closed geodesics on 2-spheres and strong Morse Inequalities](https://arxiv.org/abs/2303.00644)

### Conjugate endpoints detect Hessian nullity

**Remember:** Count initial velocity variations that leave the endpoint fixed to first order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** The exponential map sends an initial velocity v to the point at time one on the geodesic with that velocity. The conjugate multiplicity at v is the dimension of the kernel of its derivative at v, the changes of initial velocity that leave the endpoint fixed to first order (our own).

**Problem.** Along a Riemannian geodesic with fixed endpoints, the dimension of the kernel of the energy Hessian equals the conjugate multiplicity at the final endpoint.

**How the definition helps.** Each such change of initial velocity differentiates to a Jacobi field, a solution of the linearized geodesic equation, that is zero at both ends (our own). The second variation formula shows that these Jacobi fields are exactly the kernel of the fixed-endpoint energy Hessian (our own).

**Paper or page:** [On the Cut Locus of Submanifolds of a Finsler Manifold](https://arxiv.org/abs/2307.11045). It says: “J is a Jacobi field along γ, satisfying J(0) = 0 = J(t).”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Aritra Bhowmick, Sachchidanand Prasad, On the Cut Locus of Submanifolds of a Finsler Manifold](https://arxiv.org/abs/2307.11045)

### Constant loops give Morse–Bott minima

**Remember:** Moving the base point does not bend a constant loop.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A submanifold C of minima is Morse–Bott if, at each x in C, the Hessian vanishes exactly on the directions along C and is nondegenerate across C. That is, it has kernel TₓC and gives a bounded isomorphism from the orthogonal complement of TₓC onto that complement's dual.

**Problem.** For loops of square integrable speed on a closed Riemannian manifold, the constant loops form a Morse–Bott submanifold of energy minima.

**How the definition helps.** Moving the base point keeps a loop constant and its energy zero, so these directions form the kernel (our own). Across C the Hessian is a positive multiple of the integral of the squared derivative of the variation field, and the periodic Poincaré inequality bounds every mean-zero field by it, which gives invertibility (our own).

**nLab:** [Morse theory](https://ncatlab.org/nlab/show/Morse+theory). It says: “Morse theory is the method of studying the topology of a smooth manifold M by the study of Morse functions M → ℝ and their associated gradient flows.”

**Sources:**

- [Wolfgang Ziller, The free loop space of globally symmetric spaces (1977)](https://doi.org/10.1007/BF01390161)
- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free homotopy prevents constant minimizers

**Remember:** A loop that cannot contract cannot minimize to a point.

*Rules out counterexamples.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** Two loops are freely homotopic if one deforms continuously into the other while the base point may move. A class is nontrivial if it contains no constant loop, so its loops cannot shrink to zero energy (our own).

**Problem.** Every nontrivial free homotopy class on a closed Riemannian manifold has an energy-minimizing closed geodesic.

**How the definition helps.** A minimizing sequence of bounded energy has a uniformly convergent subsequence by the Cauchy–Schwarz inequality and compactness, and the limit stays in the class because nearby loops are homotopic (our own). Lower semicontinuity of energy makes the limit a minimizer, and because variations may move the base point, the first variation makes it a smooth closed geodesic (our own).

**Paper or page:** [On the space of metrics with non-positive curvature](https://arxiv.org/abs/2506.19983). It says: “in particular there is a smooth closed geodesic γ₁ ∈ β.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free loop variations rule out corners

**Remember:** Moving the join tests whether the two velocities agree.

*Rules out counterexamples.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** Free loop energy is the integral of squared speed over one period of a loop with square-integrable speed on a Riemannian manifold. Its variations may move the join, the common starting and ending point, as well as the rest of the loop.

**Problem.** Every critical point of the free loop energy is a smooth periodic geodesic, possibly constant. A single geodesic arc meeting its starting point with a different velocity cannot be critical.

**How the definition helps.** Variations away from the join give the geodesic equation, so the loop is a smooth geodesic on the open interval (our own). Integration by parts pairs the difference of the outgoing and incoming velocities with the displacement of the join, so criticality for all displacements forces the velocities to agree (our own).

**Wikipedia:** [Closed geodesic](https://en.wikipedia.org/wiki/Closed_geodesic). It says: “closed geodesics of period 1 are precisely the critical points of the energy function E : ΛM → ℝ”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Jacobi interpolation gives a matrix index

**Remember:** Variation at the joints holds all the negative directions.

*True by definition.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A broken Jacobi field along a geodesic is a continuous variation field that solves the linearized geodesic equation on each interval of a partition and vanishes at both endpoints. For a fine partition it is determined by its values at the joints, so these fields form a finite-dimensional space (our own).

**Problem.** For a sufficiently fine partition, the fixed-endpoint energy Hessian along a Riemannian geodesic has the same index on broken Jacobi fields as on all variations.

**How the definition helps.** Every variation is its broken Jacobi interpolant plus a field vanishing at every joint, and integration by parts makes the two parts orthogonal for the Hessian (our own). On short segments with fixed ends the Hessian is positive, so the second part adds no negative directions and the index, the largest dimension on which the Hessian is negative definite, is unchanged (our own).

**Wikipedia:** [Jacobi field](https://en.wikipedia.org/wiki/Jacobi_field). It says: “values of J and D/dt J at one point of γ uniquely determine the Jacobi field.”

**Paper or page:** [The Morse index theorem in the case of two variable endpoints in conic Finsler manifolds](https://arxiv.org/abs/2302.00611). It says: “Equality holds only if u(t) = v(t) for all t ∈ \[a,b\].”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Guangcun Lu, The Morse index theorem in the case of two variable endpoints in conic Finsler manifolds](https://arxiv.org/abs/2302.00611)

### Relative sweepouts find nonconstant geodesics

**Remember:** Measure loop families relative to the constants, not against them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A relative sweepout is a continuous map, in the H¹ topology, from a disk into loops with square-integrable velocity that sends the boundary circle to constant loops. Its class allows deformations that keep the boundary in constant loops and fix one marked boundary value, and the width of a class is the infimum over its sweepouts of the largest energy reached.

**Problem.** On a compact Riemannian manifold without boundary, every nonzero relative sweepout class has positive width equal to the energy of a nonconstant closed geodesic.

**How the definition helps.** All loops of small enough energy retract continuously onto the constant loops, so a class whose sweepouts all stay low would deform into constants and be zero (our own). So every nonzero class has positive width, and Palais–Smale compactness with the deformation theorem gives a nonconstant closed geodesic at that height (our own).

**Wikipedia:** [Lyusternik–Fet theorem](https://en.wikipedia.org/wiki/Lyusternik%E2%80%93Fet_theorem). It says: “on every compact Riemannian manifold there exists a closed geodesic.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free boundary coordinates are Steklov eigenfunctions

**Remember:** The outward unit conormal is the position vector.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A free boundary minimal surface in the unit ball has zero mean curvature and meets the boundary sphere at right angles, so along its boundary the outward unit conormal is the position vector. A Steklov eigenfunction with eigenvalue σ is a harmonic function whose outward normal derivative equals σ times its boundary value.

**Problem.** Each nonzero coordinate function of a compact free boundary minimal surface in the Euclidean unit ball has Steklov eigenvalue one for the induced metric.

**How the definition helps.** Along the boundary the outward derivative of each coordinate is that coordinate of the conormal, which is the coordinate itself, so σ = 1 (our own explanation). Each coordinate is harmonic on the surface because the Laplacian of the position vector is the mean curvature vector, which is zero.

**Paper or page:** [Non planar free boundary minimal disks into ellipsoids](https://arxiv.org/abs/2304.12111v2). It says: “free boundary minimal immersion such that”

**Sources:**

- [A. Fraser and R. Schoen, Sharp eigenvalue bounds and minimal surfaces in the ball](https://doi.org/10.1007/s00222-015-0604-x)

### Positive curvature makes stable surfaces spherical

**Remember:** Test stability with constant speed, then count curvature.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A two-sided minimal surface, one with a continuous unit normal and zero first variation of area, is stable if every normal variation has nonnegative second derivative of area. On a closed surface the constant normal speed is allowed, and it removes the derivative term from that second derivative.

**Problem.** In an oriented three-manifold of positive scalar curvature, each component of a closed two-sided stable minimal surface is a sphere.

**How the definition helps.** With constant speed, stability and the Gauss equation give that twice the total Gauss curvature is at least the integral of the positive scalar curvature (our own explanation). Each component is orientable, so the Gauss–Bonnet theorem makes it a sphere.

**Paper or page:** [Minimal surfaces and comparison geometry](https://arxiv.org/abs/2510.04481v1). It says: “then each component of a closed two-sided stable minimal surface”

**Sources:**

- [R. Schoen and S.-T. Yau, Existence of Incompressible Minimal Surfaces and the Topology of Three Dimensional Manifolds with Non-Negative Scalar Curvature (1979)](https://doi.org/10.2307/1971247)

### Strict convexity makes minimal graphs unique

**Remember:** Strict convexity allows only one stationary graph with given boundary values.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A minimal graph is the graph of a function u that is stationary for the area ∫√(1 + \|∇u\|²): every smooth variation fixing the boundary values has zero first derivative of area. The area integrand is strictly convex in ∇u.

**Problem.** On a bounded connected planar domain with smooth boundary, two scalar minimal graphs smooth up to the boundary coincide if their boundary values agree.

**How the definition helps.** For two such graphs u, v with equal boundary values, area along u + t(v − u) is strictly convex in t unless ∇u = ∇v everywhere, so it cannot have zero derivative at both ends (our own explanation). Hence ∇u = ∇v, and equal boundary values on a connected domain force u = v.

**Paper or page:** [The Dirichlet problem for the minimal surface system on smooth domains](https://arxiv.org/abs/2506.23245v1). It says: “Then there exists a unique solution”

**Sources:**

- [H. Jenkins and J. Serrin, Variational problems of minimal surface type II. Boundary value problems for the minimal surface equation (1966)](https://doi.org/10.1007/bf00282252)

### Three boundary points prevent disk collapse

**Remember:** Fix three boundary points to stop the disk from drifting.

*Rules out counterexamples. Confidence: medium.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A normalized Plateau disk is the harmonic extension to the disk of a boundary map onto a simple closed curve Γ in Euclidean space, where the boundary map is a uniform limit of homeomorphisms that run around Γ in one direction. It sends three fixed points of the circle to three prescribed points of Γ in the same cyclic order, which stops conformal maps of the disk from sliding the boundary.

**Problem.** Every sequence of normalized Plateau disks spanning the same curve with uniformly bounded Dirichlet energy has a uniformly convergent subsequence on the closed disk.

**How the definition helps.** Without the three points, conformal maps of the disk can squeeze almost the whole boundary towards one point without changing the energy (our own explanation). With them, the Courant–Lebesgue estimate on short arcs and the monotone boundary maps give uniform continuity across the family, so the Arzelà–Ascoli theorem gives a uniformly convergent subsequence on the boundary. The maximum principle carries this convergence into the disk.

**Wikipedia:** [Plateau's problem](https://en.wikipedia.org/wiki/Plateau%27s_problem). It says: “Douglas minimized the now-named Douglas integral, while Radó minimized the "energy".”

**Sources:**

- [J. Douglas, Solution of the problem of Plateau (1931)](https://doi.org/10.1090/s0002-9947-1931-1501590-9)

### Finite energy removes punctures

**Remember:** Finite energy becomes small on disks shrinking to a puncture.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A harmonic map on a punctured disk is a critical point of the Dirichlet energy, half the integral of the squared derivative, under changes supported inside the domain. Finite energy near the puncture means this integral is finite, so the energy on disks shrinking to the puncture tends to zero.

**Problem.** A smooth harmonic map from a punctured disk to a closed Riemannian manifold extends smoothly across the puncture if its energy is finite.

**How the definition helps.** Small energy on small disks is what the small-energy regularity theorem needs, so the map extends with continuous first derivatives, and the harmonic map equation then gives smoothness (our own explanation). The circle map with angle log \|z\| winds endlessly near zero and has infinite energy (our own example).

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “then f can be extended to D in C¹.”

**Sources:**

- [J. Sacks and K. Uhlenbeck, The Existence of Minimal Immersions of 2-Spheres (1981)](https://doi.org/10.2307/1971131)

### Gradient flow dissipates map energy

**Remember:** Integrated squared speed gives the rate of energy loss.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Harmonic map heat flow moves a map along the negative gradient of the Dirichlet energy, half the integral of the squared derivative, for the inner product that integrates the pointwise inner products of two velocities.

**Problem.** Along a smooth harmonic map heat flow on a compact domain without boundary, the energy derivative equals minus the integral of squared speed.

**How the definition helps.** The velocity is minus the gradient, so the chain rule gives the energy derivative as minus the integrated squared speed (our own explanation). The first variation formula identifies the velocity with the tension field, the trace of the second derivative, which gives the usual heat equation.

**Wikipedia:** [Harmonic map](https://en.wikipedia.org/wiki/Harmonic_map). It says: “the Laplacian of f can be thought of as the gradient of the Dirichlet energy”

**Sources:**

- [J. Eells Jr. and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Harmonic forms classify harmonic circle maps

**Remember:** Integrate the harmonic form and take angles modulo 2π.

*Makes the theorem clean to state or prove.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** For a circle map, local choices of angle differ by constants in 2πℤ, so their derivatives form one global closed one-form. The map is harmonic exactly when this one-form also has zero divergence, that is, when it is a harmonic form.

**Problem.** Each homotopy class of maps from a connected closed Riemannian manifold to the unit circle contains exactly one harmonic map up to rotation.

**How the definition helps.** So harmonic maps match harmonic one-forms whose loop integrals, the angle changes, lie in 2πℤ and fix the homotopy class (our own explanation). The Hodge theorem gives exactly one harmonic form with those integrals, and integrating it modulo 2π recovers the map up to its starting angle.

**nLab:** [Hodge theorem](https://ncatlab.org/nlab/show/Hodge+theorem). It says: “has precisely one harmonic cocycle reprentative.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf differentials make harmonic spheres conformal

**Remember:** The sphere has no nonzero holomorphic quadratic differential to record distortion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Hopf differential of a surface map u is the dz² part of the pulled-back metric in a complex coordinate z. It vanishes exactly where the derivative scales all directions equally, possibly by zero, so it measures the failure of weak conformality (our own explanation).

**Problem.** Every smooth harmonic map from the Riemann sphere to a Riemannian manifold is weakly conformal, meaning its derivative is conformal or zero.

**How the definition helps.** The harmonic map equation makes the Hopf differential holomorphic. On the Riemann sphere every holomorphic quadratic differential is zero, so the map is weakly conformal.

**Paper or page:** [New examples of harmonic maps to the hyperbolic plane via Bäcklund transformation](https://arxiv.org/abs/2112.06601v3). It says: “the Hopf differential of u is holomorphic”

**Sources:** none listed. No primary source with a working link was found.

### Kähler splitting makes holomorphic maps minimize energy

**Remember:** The homotopy term stays fixed and the error vanishes for holomorphic maps.

*True by definition. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Let u map a Riemann surface with a compatible metric to a Kähler manifold with Kähler form ω(v,w) = g(Jv,w). Let a and b be the derivatives of u along a positively oriented orthonormal frame. The antiholomorphic energy ∫ ½\|b − Ja\|² measures exactly how far the Dirichlet energy exceeds the integral of the pulled-back Kähler form u\*ω.

**Problem.** A holomorphic map from a closed Riemann surface to a Kähler manifold minimizes Dirichlet energy among all smoothly homotopic maps.

**How the definition helps.** Expanding the square shows that energy equals ∫ u\*ω plus the antiholomorphic energy (our own explanation). By Stokes' theorem ∫ u\*ω depends only on the homotopy class, and a holomorphic map has b = Ja, so its excess is zero and it minimizes.

**Wikipedia:** [Calibrated geometry](https://en.wikipedia.org/wiki/Calibrated_geometry). It says: “the calibrated submanifolds are the complex submanifolds.”

**Sources:** none listed. No primary source with a working link was found.

### Product energy separates harmonic maps

**Remember:** Split the energy to read off the harmonic factors.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A harmonic map is a critical point of Dirichlet energy, half the integral of the squared derivative. Into a product with the sum metric, the energy of a map is the sum of the energies of its two components.

**Problem.** A smooth map from a closed Riemannian manifold into a Riemannian product is harmonic exactly when both component maps are harmonic.

**How the definition helps.** Varying one component at a time tests each energy derivative independently, so the map is critical exactly when each component is (our own explanation).

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “which is a critical point of the Dirichlet kinetic energy functional”

**Sources:**

- [J. Eells Jr. and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Subcritical energy preserves homotopy in limits

**Remember:** The higher power keeps limits in the same homotopy class.

*Rules out counterexamples. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** On a fixed closed Riemannian surface, the Sacks–Uhlenbeck energy of a map u is ∫ (1 + \|du\|²)ᵅ with α &gt; 1. A bound on it bounds the derivative in L²ᵅ, with exponent 2α above the surface dimension 2.

**Problem.** Fix α &gt; 1 and a closed Riemannian target. Consider Sobolev maps from the fixed surface with weak derivative in L²ᵅ, using continuous representatives. Every sequence with uniformly bounded Sacks–Uhlenbeck energy has a uniformly convergent subsequence, whose maps are eventually homotopic to its limit.

**How the definition helps.** The Sobolev embedding then makes the maps uniformly Hölder continuous, so the Arzelà–Ascoli theorem gives a uniformly convergent subsequence (our own explanation). Maps uniformly close to the limit are homotopic to it by joining values with short geodesics. At α = 1 this fails, because conformal automorphisms of the round sphere can concentrate at a point.

**Paper or page:** [Existence and Stability of α-harmonic Maps](https://arxiv.org/abs/2208.07995v1). It says: “it has a vanishing α-tension field.”

**Sources:**

- [J. Sacks and K. Uhlenbeck, The Existence of Minimal Immersions of 2-Spheres (1981)](https://doi.org/10.2307/1971131)

### Surface rescaling preserves harmonic morphisms

**Remember:** On a surface, changing scale does not change harmonic tests.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A harmonic morphism is a smooth map φ such that composing any local harmonic function on the target with φ gives a harmonic function on the source.

**Problem.** Multiplying the metric of a target surface by any smooth positive function preserves every harmonic morphism into that surface.

**How the definition helps.** On a surface, multiplying the metric by a positive function λ multiplies the Laplacian by 1/λ, so the harmonic functions stay the same (our own explanation). The definition tests only these functions, so every harmonic morphism stays one.

**Wikipedia:** [Harmonic morphism](https://en.wikipedia.org/wiki/Harmonic_morphism). It says: “This means that, at least for local studies, the codomain can be chosen to be the complex plane with its standard flat metric.”

**Sources:**

- [B. Fuglede, Harmonic morphisms between Riemannian manifolds (1978)](https://doi.org/10.5802/aif.691)
- [T. Ishihara, A mapping of Riemannian manifolds which preserves harmonic functions (1979)](https://doi.org/10.1215/kjm/1250522428)

### Clifford multiplication makes Dirac operators elliptic

**Remember:** A square equal to a nonzero scalar gives an inverse.

*True by definition. Confidence: medium.* MSC 58J05 (Elliptic equations on manifolds, general theory). arXiv math.DG. Level 3: graduate.

**Definition.** The principal symbol σ(ξ) of a first-order operator replaces its derivatives by a covector ξ, here without a factor of i. The operator is Dirac-type if σ(ξ)² = −\|ξ\|² times the identity for every covector ξ.

**Problem.** Every Riemannian Dirac-type operator is elliptic, meaning its symbol is invertible for every nonzero covector.

**How the definition helps.** For ξ ≠ 0, the map −σ(ξ)/\|ξ\|² is an inverse of σ(ξ), so the symbol is invertible. This Riemannian argument is our own generalization of the cited Euclidean example.

**nLab:** [Dirac operator](https://ncatlab.org/nlab/show/Dirac+operator). It says: “In Euclidean space the Dirac operator is elliptic, but not in Minkowski space.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Laplacian as d\*d makes it symmetric and nonnegative

**Remember:** Pairing the Laplacian with a function pairs their differentials.

*True by definition.* MSC 58J05 (Elliptic equations on manifolds, general theory), 35J05. arXiv math.DG. Level 3: graduate.

**Definition.** Define the nonnegative Laplacian as Δ = d\*d, where d sends a function to its differential and d\* is its formal adjoint. So ∫ (Δf) g = ∫ ⟨df, dg⟩ for compactly supported smooth f and g (our own).

**Problem.** On smooth compactly supported functions on a Riemannian manifold, the nonnegative Laplacian is symmetric, and its quadratic form is nonnegative.

**How the definition helps.** The pairing ⟨df, dg⟩ is symmetric in f and g and nonnegative when f = g, which proves both claims at once (our own argument). With the divergence definition each claim needs Green's formula (our own).

**Wikipedia:** [Laplace–Beltrami operator](https://en.wikipedia.org/wiki/Laplace%E2%80%93Beltrami_operator). It says: “are formal adjoints, in the sense that for a compactly supported function”

**Sources:** none listed. No primary source with a working link was found.

### The commutator definition makes first-order symbols independent of coordinates

**Remember:** A commutator with multiplication reads off the symbol without coordinates.

*True by definition. Confidence: medium.* MSC 58J05 (Elliptic equations on manifolds, general theory), 35S05. arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** The symbol of a first-order linear differential operator D on sections of a vector bundle E is its commutator with multiplication by a function. At a point x, for a covector ξ, choose f with dfₓ = ξ; then σ<sub>D</sub>(x,ξ)u(x) = D(fu)(x) − f(x)Du(x) for every smooth section u.

**Problem.** At each x, the commutator depends only on the differential df at x and acts linearly on the fiber Eₓ. So the first-order symbol does not depend on the choice of coordinates.

**How the definition helps.** The commutator uses no coordinates, so once it is well defined it is the same in every chart (our own argument). In local coordinates the product rule cancels every derivative of u and every term of order zero, so the result depends only on dfₓ and linearly on u(x).

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “where in the commutator on the right we regard multiplication by f as an endomorphism of Γ(E).”

**Sources:** none listed. No primary source with a working link was found.

### Compact graph domains give finiteness

**Remember:** Bounded in the graph norm means convergent in the ambient space.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** A Hilbert complex is a chain of Hilbert spaces linked by closed, densely defined maps d with d² = 0. It is compact when every sequence bounded together with its d and its adjoint d⁎ has a subsequence that converges in the ambient spaces.

**Problem.** A compact Hilbert complex with finitely many spaces has closed ranges of d and finite-dimensional cohomology.

**How the definition helps.** Compactness makes the unit ball of the harmonic space, the joint kernel of d and d⁎, compact, so that space is finite-dimensional. In our own argument, perpendicular unit vectors with ‖dx‖ + ‖d⁎x‖ → 0 would converge to a harmonic unit vector perpendicular to it. So ‖dx‖ + ‖d⁎x‖ ≥ c‖x‖ there, which closes the ranges and identifies cohomology with the harmonic space.

**Paper or page:** [Families of Annihilating Skew-Selfadjoint Operators and their Connection to Hilbert Complexes](https://arxiv.org/abs/2307.00946v2). It says: “compact if and only if the embedding dom(S) ↪︎ H is compact.”

**Sources:**

- [J. Brüning and M. Lesch, Hilbert complexes (1992)](https://doi.org/10.1016/0022-1236(92)90147-b)

### Completeness gives one derivative domain

**Remember:** Cutoffs with small gradients barely change the derivative.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** The maximal exterior derivative acts on every L² form whose weak derivative is also L². The minimal one acts only on L² limits of compactly supported smooth forms whose derivatives also converge in L². So the two agree when every form of the maximal domain can be cut off to compact support with little change in its derivative.

**Problem.** On a complete Riemannian manifold without boundary, the minimal and maximal exterior derivatives on L² forms coincide.

**How the definition helps.** On a complete manifold, distance cutoffs χ have \|∇χ\| ≤ 1/R, so χα → α and d(χα) = χdα + dχ∧α → dα in L². Our own proof then smooths the compactly supported forms. On the incomplete interval (0,1), the constant 1 lies in the maximal domain, but minimal-domain functions vanish at the ends.

**Paper or page:** [Lipschitz-homotopy invariants:L²-cohomology, Roe index and ρ-class](https://arxiv.org/abs/2109.07400v1). It says: “Then the maximal and the minimal domain of the exterior derivative coincide”

**Sources:**

- [M. P. Gaffney, The Heat Equation Method of Milgram and Rosenbloom for Open Riemannian Manifolds (1954)](https://doi.org/10.2307/1969846)

### Exact symbols make Laplacians elliptic

**Remember:** The symbol sequence is exact at every nonzero covector.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** A differential complex is elliptic when, at every nonzero covector ξ, its sequence of principal symbols, the top-order parts with each derivative replaced by ξ, is exact. That is, each symbol image equals the next symbol kernel.

**Problem.** In a first-order elliptic complex with bundle metrics, the Laplacian DD⁎ + D⁎D has invertible symbol at every nonzero covector. Here D is the differential and D⁎ its adjoint.

**How the definition helps.** The quadratic form of the Laplacian symbol is \|σv\|² + \|τ⁎v\|², where σ is the outgoing symbol and τ the incoming one. So a null vector v lies in ker σ, which exactness makes equal to im τ, and is perpendicular to im τ. Hence v = 0 (our own proof).

**Wikipedia:** [Elliptic complex](https://en.wikipedia.org/wiki/Elliptic_complex). It says: “Elliptic complexes isolate those features common to the de Rham complex and the Dolbeault complex which are essential for performing Hodge theory.”

**Sources:** none listed. No primary source with a working link was found.

### Eta phases forget the filling

**Remember:** Every filling pays the same fractional boundary correction.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** The reduced eta invariant of the boundary Dirac operator D is (η(0) + dim ker D)/2 modulo integers. Here η(s) = ∑ sign(λ)\|λ\|⁻ˢ over nonzero eigenvalues, continued analytically to s = 0, measures the spectral asymmetry of D. It depends only on boundary data and is the boundary correction in the Atiyah–Patodi–Singer index formula.

**Problem.** Take two compact spin fillings with the same oriented boundary metric, spin structure and Hermitian bundle with unitary connection, all of product form near the boundary. Their integrals of the index density, the top part of Â times the Chern character, agree modulo integers.

**How the definition helps.** The Atiyah–Patodi–Singer theorem says each integral equals an integer index plus the reduced eta invariant of the same boundary operator. So both integrals equal that invariant modulo integers (our own argument).

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Hodge–Dirac index counts Euler characteristic

**Remember:** Even harmonic forms count up and odd ones count down.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The even-to-odd Hodge–Dirac operator is d + d⁎ on even-degree forms, with values in odd-degree forms. Its kernel is the even harmonic forms, and the kernel of its adjoint is the odd harmonic forms.

**Problem.** On a closed oriented Riemannian manifold, the index of the even-to-odd Hodge–Dirac operator is the Euler characteristic.

**How the definition helps.** The index is the number of independent even harmonic forms minus the number of odd ones. The Hodge theorem gives one harmonic form per cohomology class, so this is ∑(−1)ᵏbₖ, the Euler characteristic (our own argument).

**nLab:** [Hodge theorem](https://ncatlab.org/nlab/show/Hodge+theorem). It says: “Harmonic forms are precisely those in the kernel of d + d\*, which are precisely those in the joint kernel of d and d\*.”

**Sources:** none listed. No primary source with a working link was found.

### Index characters vanish without fixed points

**Remember:** Away from fixed points, the character has nothing to count.

*Makes the theorem clean to state or prove.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** Let a compact Lie group act on a closed manifold and on an elliptic operator that commutes with the action. The index character at g is the trace of g on the kernel minus its trace on the cokernel. The equivariant index theorem writes it as a sum of contributions from the fixed-point components of g.

**Problem.** If g fixes no point of the manifold, the index character at g vanishes.

**How the definition helps.** With no fixed points the sum of contributions is empty, so it is zero. Our own example is the Euler operator on two points exchanged by an involution. Its index is two, but the exchange has trace zero.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “Moreover, one gets generalizations of the Lefschetz fixed-point theorem, with terms coming from fixed-point submanifolds of the group G.”

**Sources:**

- [Michael F. Atiyah and Graeme Segal, The Index of Elliptic Operators II (1968)](https://doi.org/10.2307/1970716)

### Positive scalar curvature kills the Dirac index

**Remember:** Positive scalar curvature leaves the Dirac operator no zero modes.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** On a closed even-dimensional spin manifold, the chiral Dirac operator D⁺ is the Dirac operator on positive spinors, and by the index theorem its index is the Â genus (our own argument). The Lichnerowicz formula D² = ∇⁎∇ + R/4 ties the square of the Dirac operator to the scalar curvature R.

**Problem.** A closed even-dimensional spin manifold that admits a metric of positive scalar curvature has zero Â genus.

**How the definition helps.** If R &gt; 0, then ‖Dψ‖² = ‖∇ψ‖² + ∫R\|ψ\|²/4 &gt; 0 for every nonzero spinor ψ. So D has no kernel, both chiral kernels vanish, and the Â genus is zero.

**nLab:** [Lichnerowicz formula](https://ncatlab.org/nlab/show/Lichnerowicz+formula). It says: “The crucial point of the formula is that it shows a scalar summand (i.e. 0th order derivative) proportional to the scalar curvature.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Quaternionic spinors force signature divisibility

**Remember:** Quaternionic kernels have even complex dimension.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** On a closed spin four-manifold, the spinor bundles carry quaternionic structures that the chiral Dirac operator respects. So its kernel and cokernel are quaternionic vector spaces, and its complex index is twice its quaternionic index.

**Problem.** On a closed smooth spin four-manifold, the signature of the intersection form on second cohomology is divisible by 16.

**How the definition helps.** The index and signature theorems give complex index = −σ/8, where σ is the signature. This index is even (our own explanation), so 16 divides σ.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “In dimension 4 this result implies Rochlin's theorem that the signature of a 4-dimensional spin manifold is divisible by 16”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Spin makes Â integral

**Remember:** Spin gives spinors, and spinors give an integer index.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A spin structure on an oriented Riemannian n-manifold lifts its oriented orthonormal frame bundle through the double cover Spin(n) → SO(n). The lift supplies spinor bundles and so a Dirac operator, whose index is an integer.

**Problem.** The Â genus of a closed spin manifold is an integer. The spin requirement excludes the complex projective plane, whose Â genus is −1/8.

**How the definition helps.** In even dimensions, the Atiyah–Singer theorem equates the Â genus with the chiral Dirac index, an integer (our own explanation). In odd dimensions the Â genus is zero, since Â has no term of odd degree. The plane ℂP² is not spin, since w₂ ≠ 0, and its Pontryagin number 3 gives Â = −3/24 = −1/8.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “The Â genus is a rational number defined for any manifold, but is in general not an integer.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Topological indices ignore the embedding

**Remember:** Push the symbol into Euclidean space, then read off Bott’s integer.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** Embed the closed manifold X in some ℝᴺ, so T⁎X sits in T⁎ℝᴺ = ℝ²ᴺ. The topological index pushes the compactly supported K-theory class of the elliptic symbol into ℝ²ᴺ, by the normal Thom map and extension by zero. Bott periodicity, K<sub>c</sub>(ℝ²ᴺ) ≅ ℤ, turns the result into an integer.

**Problem.** The topological index of a symbol on a closed manifold does not depend on the chosen Euclidean embedding.

**How the definition helps.** The pushforward respects composition and smooth deformation of embeddings, so it suffices to compare embeddings inside one larger space. In our own comparison, embeddings i and j give (i,0) ≃ (i,j) ≃ (0,j) in ℝᴺ⁺ᴹ by scaling one factor. Each deformation preserves the index, and (i,0) and (0,j) give the same integers as i and j.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “This map is independent of the embedding of X in Euclidean space.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Signed heat traces recover eta

**Remember:** Multiply the heat trace by D to keep each eigenvalue’s sign.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J35. arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For a self-adjoint elliptic differential operator D of positive order on a closed manifold, η(s) = ∑ sign(λ)\|λ\|⁻ˢ over the nonzero eigenvalues λ, continued analytically. It counts negative eigenvalues with a minus sign. The odd heat trace Tr(D exp(−tD²)) = ∑ λ exp(−tλ²) keeps the same signs.

**Problem.** For sufficiently large real part of s, Γ((s+1)/2)η(s) equals the integral over t &gt; 0 of t to the power (s−1)/2 times Tr(D exp(−tD²)).

**How the definition helps.** For each nonzero eigenvalue, ∫₀<sup>∞</sup> t<sup>((s−1)/2)</sup> λ exp(−tλ²) dt = Γ((s+1)/2) sign(λ)\|λ\|⁻ˢ (our own calculation). Summing over eigenvalues gives the identity. For large real part of s the sum converges absolutely, which permits termwise integration.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “The eta function is a kind of odd version of the Mellin transform of an odd version of the theta function”

**Sources:** none listed. No primary source with a working link was found.

### A ground state removes heat killing

**Remember:** Divide by the ground state so the generator kills constants.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** On a closed connected Riemannian manifold, take H = Δ + V with Δ the nonnegative Laplacian and V smooth and real. With a positive lowest eigenfunction h, Hh = λh, the ground state transform sends f to h⁻¹(H − λ)(hf), with volume weighted by h². It kills the constant 1, because h⁻¹(H − λ)h = 0.

**Problem.** The transformed operator is a weighted Laplacian, and its heat flow preserves the constant function one.

**How the definition helps.** Our own product calculation gives h⁻¹(H − λ)(hf) = −h⁻²div(h²∇f), a weighted Laplacian. It kills constants, so its heat flow fixes the function one. The ground state theorem gives h &gt; 0 everywhere, so division by h is valid.

**Wikipedia:** [Doob's h-transform](https://en.wikipedia.org/wiki/Doob%27s_h-transform). It says: “The key advantage of Doob's h-transform is that the transition probabilities of the transformed process are explicitly given as functions of h.”

**Sources:** none listed. No primary source with a working link was found.

### Conformal surfaces share heat recurrence

**Remember:** In two dimensions, conformal changes leave gradient energy unchanged.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.DG, math.SP. Level 3: graduate.

**Definition.** A surface is parabolic when every compact set K has zero capacity: smooth compactly supported functions that are at least 1 near K can have ∫\|∇u\|² arbitrarily small. In two dimensions this gradient energy does not change under a conformal change of metric.

**Problem.** On complete connected surfaces without boundary, conformally related metrics have the same Brownian recurrence behavior. Recurrence means Brownian motion returns to every open neighborhood of its starting point arbitrarily late with probability one.

**How the definition helps.** Under g′ = e²ᵘg on a surface, \|∇f\|² gains the factor e⁻²ᵘ and area gains e²ᵘ, so ∫\|∇f\|² dA is unchanged (our own calculation). Hence both metrics give the same capacities. The capacity criterion equates zero capacity of every compact set with Brownian recurrence.

**Paper or page:** [Parabolicity of invariant Surfaces](https://arxiv.org/abs/2312.02837). It says: “In dimension 2, parabolicity is preserved under conformal changes in the metric tensor.”

**Sources:**

- [Andrea Del Prete, Vicent Gimeno i Garcia, Parabolicity of invariant Surfaces](https://arxiv.org/abs/2312.02837)

### Diffusion distances use twice the heat time

**Remember:** Inner products of heat profiles let the two times add.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The heat profile Kₜ(x,·) is the temperature at time t from a unit point source at x. The diffusion distance between x and y is the L² distance between their profiles, and the inner product of two profiles is one more heat step, K₂ₜ(x,y).

**Problem.** On a closed Riemannian manifold, squared diffusion distance equals K₂ₜ(x,x)+K₂ₜ(y,y)−2K₂ₜ(x,y) for every t &gt; 0.

**How the definition helps.** Expanding the squared distance gives three inner products of profiles (our own calculation). Kernel symmetry and the semigroup law ∫Kₜ(x,z)Kₜ(z,y)dz = K₂ₜ(x,y) turn each one into a kernel value at time 2t.

**Wikipedia:** [Diffusion map](https://en.wikipedia.org/wiki/Diffusion_map). It says: “Dₜ(xᵢ,xⱼ)² = ∑ᵧ (p(y,t\|xᵢ)−p(y,t\|xⱼ))²/ϕ₀(y)”

**Sources:**

- [Ronald Coifman and Stéphane Lafon, Diffusion Maps (2006)](https://doi.org/10.1016/j.acha.2006.04.006)

### Heat traces multiply on products

**Remember:** Eigenvalues add on products, so their heat weights multiply.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The heat operator at time t multiplies each Laplace eigenfunction of eigenvalue λ by exp(−tλ). Its heat kernel is ∑ exp(−tλ)φ(x)φ(y) over an orthonormal eigenbasis φ.

**Problem.** On a product of closed Riemannian manifolds with the product metric, the scalar heat kernel equals the product of the two heat kernels. Their heat traces multiply as well.

**How the definition helps.** Products of eigenfunctions of the two factors form an eigenbasis of the product with eigenvalue λ + μ, since the product Laplacian is the sum of the factor Laplacians (our own calculation). Then exp(−t(λ+μ)) = exp(−tλ)exp(−tμ), so the series factors. Setting x = y and integrating gives the product of the traces.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator”

**Sources:** none listed. No primary source with a working link was found.

### Iterated energy controls heat gradients

**Remember:** The iterated energy is the derivative of a heat interpolation.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** Let Lf = div(∇f) − ⟨∇V,∇f⟩ generate the heat flow Pₜ on a closed Riemannian manifold with smooth weight V. The gradient energy is Γ(f) = \|∇f\|², and its iteration is Γ₂(f) = ½(LΓ(f) − 2⟨∇f,∇Lf⟩). It measures how heat flow changes gradient energy: d/ds PₛΓ(Pₜ₋ₛf) = 2PₛΓ₂(Pₜ₋ₛf) for 0 ≤ s ≤ t.

**Problem.** If Γ₂(f) ≥ KΓ(f) for all smooth f, then Γ(Pₜf) ≤ exp(−2Kt)PₜΓ(f) at every point and every time t ≥ 0.

**How the definition helps.** Put F(s) = PₛΓ(Pₜ₋ₛf). The hypothesis and positivity of heat flow give F′(s) ≥ 2KF(s), so F(0) ≤ exp(−2Kt)F(t) (our own calculation). This is the inequality Γ(Pₜf) ≤ exp(−2Kt)PₜΓ(f).

**Paper or page:** [A Bakry-Émery approach to Lipschitz transportation on manifolds](https://arxiv.org/abs/2310.02478). It says: “Γ(Pₜf) ≤ exp(−2ρt) Pₜ(Γ(f)).”

**Sources:** none listed. No primary source with a working link was found.

### Spectral gaps set heat decay

**Remember:** Energy beats mass by λ, so heat decays like exp(−tλ).

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** On a closed connected Riemannian manifold, the spectral gap λ is the largest constant with ∫\|∇f\|² ≥ λ∫\|f\|² for every smooth mean-zero function f. It equals the first positive Laplace eigenvalue.

**Problem.** On square-integrable mean-zero functions, the heat operator at time t ≥ 0 has norm exactly exp(−tλ).

**How the definition helps.** Along heat flow u, d/dt ‖u‖² = −2∫\|∇u\|² ≤ −2λ‖u‖², and the flow keeps the mean zero. Integrating gives ‖u(t)‖ ≤ exp(−tλ)‖u(0)‖ (our own proof). An eigenfunction of the first positive eigenvalue attains equality.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “\|θ(t) − 1\| ≤ Cγ exp(−γt), for any t ≥ 1”

**Sources:** none listed. No primary source with a working link was found.

### Wave propagation localizes heat

**Remember:** Only the Gaussian tail reaches past the wave front.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The wave formula writes heat flow as an average of waves: exp(−tΔ) is the average of cos(s√Δ) over s, weighted by a centered Gaussian of variance 2t. Here Δ is the nonnegative scalar Laplacian, and its waves travel at speed at most one.

**Problem.** Suppose square-integrable functions f and g on a closed Riemannian manifold have supports at distance r. At t &gt; 0, their heat pairing \|⟨exp(−tΔ)f,g⟩\| is at most exp(−r²/(4t)) times their L² norms multiplied together.

**How the definition helps.** A wave cos(s√Δ)f stays within distance \|s\| of the support of f, so it pairs to zero with g when \|s\| &lt; r. Each remaining wave has norm at most one (our own proof). The Gaussian weight of \|s\| ≥ r is at most exp(−r²/(4t)), which gives the bound.

**Paper or page:** [The Gromov-Lawson index and the Baum-Connes assembly map](https://arxiv.org/abs/2103.03495). It says: “Moreover, it has finite propagation ≤ t \|x\|.”

**Sources:** none listed. No primary source with a working link was found.

### Canonical relations track singular directions

**Remember:** Keep the output directions paired with singular input directions.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A Fourier integral operator with nondegenerate homogeneous phase φ(x,y,θ) has its stationary points where ∂θφ = 0 with θ ≠ 0. Its canonical relation C pairs the output covector (x,∂ₓφ) with the input covector (y,−∂ᵧφ) at those points. So C lists which input singularities can produce which output singularities.

**Problem.** Suppose both directions in every pair are nonzero. For compactly supported distributions, every output wave front direction pairs with an input wave front direction.

**How the definition helps.** The wave front set of the kernel lies in the twisted canonical relation, so the wave front calculus for kernels gives WF(Af) ⊂ C ∘ WF(f). The condition that neither covector is zero removes the extra terms where the kernel alone creates singularities (our own explanation).

**Paper or page:** [Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity](https://arxiv.org/abs/2212.00243v1). It says: “WF(Af) ⊂ C ∘ WF(f).”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Characteristic sets locate hidden singularities

**Remember:** An operator can hide a singularity only in a characteristic direction.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** The characteristic set of A is the set of nonzero covectors where its leading symbol, the top-order term in frequency, vanishes. Off this set one can divide by the symbol, so A has a local inverse up to a smoothing error.

**Problem.** For a properly supported scalar classical pseudodifferential operator A, a distribution u and its image Au have the same wave front set, the directions of singularity, outside the characteristic set.

**How the definition helps.** Off the characteristic set, a local inverse B gives BAu = u up to an error smooth in those directions, so A cannot hide a singularity there. Pseudolocality, WF(Au) ⊂ WF(u), gives the other inclusion. Proper support makes these compositions defined (our own explanation).

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(Au) ⊂ WF u ⊂ WF(Au) ∪ Char A.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Invertible symbols give Fredholm operators

**Remember:** Invert at high frequencies and leave only compact errors.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A classical pseudodifferential operator is elliptic when its leading symbol, the top-order term in frequency, is invertible at every nonzero covector. Then dividing by the symbol builds an inverse up to a smoothing error.

**Problem.** On a compact manifold without boundary, a classical operator of order m is Fredholm from Hˢ to Hˢ⁻ᵐ, with closed range and finite-dimensional kernel and cokernel, exactly when it is elliptic.

**How the definition helps.** On a compact manifold smoothing errors are compact, so the approximate inverse makes the operator Fredholm. Conversely, if the symbol is singular at some covector, high-frequency wave packets in that direction violate the Fredholm estimate (our own explanation).

**Paper or page:** [Analysis on noncompact manifolds and Index Theory: Fredholm conditions and Pseudodifferential operators](https://arxiv.org/abs/2308.06225v1). It says: “Then P : Hˢ(M; E) → Hˢ⁻ᵐ(M; F) is Fredholm if, and only if, it is elliptic.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf)

### Proper support preserves compact tests

**Remember:** The transpose must keep test functions compactly supported.

*Rules out counterexamples. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A kernel has proper support if restricting either variable to a compact set confines the other to a compact set. So the operator and its transpose both keep compact supports compact.

**Problem.** A properly supported pseudodifferential operator acts on all distributions, meaning generalized functions, and carries compactly supported distributions to compactly supported distributions.

**How the definition helps.** Au is defined by ⟨Au,φ⟩ = ⟨u,Aᵗφ⟩, which needs Aᵗφ to be a test function, and proper support gives this (our own argument). The other half of the condition keeps compact supports compact. On the real line the constant kernel fails, because Aᵗφ is the constant ∫φ, not a test function when ∫φ ≠ 0.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “Tσ₁ is properly supported”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Strong ellipticity bounds energy below

**Remember:** Require a positive real part on every unit covector.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A scalar classical operator of order 2m is strongly elliptic when the real part of its leading symbol is positive on every unit covector. Since unit covectors form a compact set, this real part is then at least some c &gt; 0 there.

**Problem.** On a compact manifold without boundary, strong ellipticity of order 2m &gt; 0 gives Re ⟨Au,u⟩ ≥ c‖u‖²ₘ − C‖u‖²₀ for every smooth u. Here c &gt; 0 and C ≥ 0 are fixed, and the norms measure square-integrable regularity of the indicated orders.

**How the definition helps.** The uniform bound on the leading symbol gives the main term of the energy estimate, and lower-order terms cost only C‖u‖²₀ (our own explanation). On the circle, d²/dθ² is elliptic but sends eⁱⁿᶿ to −n²eⁱⁿᶿ, so its energy is negative and violates the bound.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “and the symbol a ∈ S²ᵐ is strongly elliptic.”

**Sources:** none listed. No primary source with a working link was found.

### Causal subtraction gives skew adjoints

**Remember:** Taking the adjoint swaps future and past.

*True by definition.* MSC 58J45 (Hyperbolic equations on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A retarded Green operator G⁺ satisfies PG⁺f = G⁺Pf = f for compactly supported smooth f, and G⁺f is supported in the causal future of supp f. The advanced operator G⁻ does the same with the causal past. The causal propagator is G⁺ − G⁻.

**Problem.** For a formally self-adjoint Green-hyperbolic operator on a globally hyperbolic spacetime, its causal propagator is formally skew adjoint. The adjoint identity is tested by integrating against compactly supported smooth sections.

**How the definition helps.** For formally self-adjoint P, the formal adjoint of G⁺ is G⁻, so taking adjoints swaps the two terms and flips the sign. In our own explanation, ⟨G⁺f,g⟩ = ⟨f,G⁻g⟩ follows by integrating by parts in ⟨G⁺f,PG⁻g⟩. Global hyperbolicity makes J⁺(supp f) ∩ J⁻(supp g) compact, so no boundary terms appear.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “are formally adjoint differential operators, up to a sign”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Wave fronts follow Hamiltonian flows

**Remember:** Singular covectors follow the Hamiltonian flow on the zero set.

*Makes the theorem clean to state or prove.* MSC 58J47 (Propagation of singularities; initial value problems on manifolds), 58J40. arXiv math.AP. Level 3: graduate.

**Definition.** The wave front set of u lists the positions and directions where u is not smooth. A real leading symbol p generates the Hamiltonian flow with velocity (∂ξp, −∂ₓp), which keeps p constant. Real principal type asks that this velocity never point in the radial frequency direction where p = 0 at nonzero frequency.

**Problem.** Suppose a properly supported scalar classical pseudodifferential operator P has real principal type and Pu is smooth. The wave front set of u consists of entire Hamiltonian trajectories in the zero set of its leading symbol.

**How the definition helps.** Off the zero set of p, elliptic regularity makes u smooth wherever Pu is. On the zero set, the propagation estimate moves smoothness along each trajectory in both directions (our own explanation). So a singular point brings its whole trajectory with it.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(u) is made of null bicharacteristic curves”

**Sources:**

- [J. J. Duistermaat and Lars Hörmander, Fourier integral operators. II (1972)](https://doi.org/10.1007/BF02392165)

### Boundary-fixed conformal changes preserve Steklov spectra

**Remember:** Conformal changes keep harmonic functions, and a fixed boundary keeps normals.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The Dirichlet-to-Neumann operator extends boundary values to the harmonic function, one with zero Laplacian, that has those values. It returns the outward normal derivative of that function at the boundary. Its eigenvalues with multiplicities form the Steklov spectrum.

**Problem.** On a compact connected Riemannian surface with smooth nonempty boundary, a conformal change preserving the boundary metric preserves this operator and its Steklov spectrum.

**How the definition helps.** On a surface, a conformal change g′ = e²ᵘg multiplies the Laplacian by e⁻²ᵘ, so harmonic functions stay harmonic. Uniqueness gives the same extension, and the unit normal agrees because eᵘ = 1 on the boundary (our own proof).

**Wikipedia:** [Poincaré–Steklov operator](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Steklov_operator). It says: “to the normal derivative ∂u/∂n on the boundary of Ω.”

**Sources:** none listed. No primary source with a working link was found.

### Energy domains bracket eigenvalues

**Remember:** Smaller energy domains give larger eigenvalues.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** Define each Laplacian by the gradient energy ∫\|∇f\|² on a domain of functions. The Neumann domain is all square-integrable functions with square-integrable weak first derivatives; the Dirichlet domain keeps those with zero boundary trace.

**Problem.** Cut a closed Riemannian manifold along a smooth separating hypersurface and combine the spectra of the pieces with multiplicity. At each index the Neumann eigenvalue is at most the uncut eigenvalue, which is at most the Dirichlet eigenvalue.

**How the definition helps.** After cutting, Dirichlet functions on the pieces glue to uncut functions, and uncut functions restrict to Neumann functions on the pieces. The min-max formula raises eigenvalues when the energy domain shrinks, which gives both inequalities. The trace theorem identifies uncut functions with pairs whose traces match (our own proof).

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The min-max theorem also applies to (possibly unbounded) self-adjoint operators.”

**Sources:** none listed. No primary source with a working link was found.

### Gauge equivalence preserves magnetic spectra

**Remember:** Conjugating the derivative also conjugates its Laplacian.

*Rules out counterexamples. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** A unitary connection on a complex line bundle differentiates sections while preserving inner products. Two connections are gauge equivalent when a smooth unitary change of fiber, multiplication by some u with \|u\| = 1, carries one to the other: ∇′ = u∇u⁻¹.

**Problem.** On a closed Riemannian manifold, gauge-equivalent connections have the same connection Laplacian spectrum, including multiplicities. Connections with equal curvature can have different spectra.

**How the definition helps.** The same unitary change carries ∇ and its adjoint to ∇′ and its adjoint, so the two Laplacians are unitarily conjugate. Our own counterexample uses d and d + iα dθ on the circle of length 2π, both of zero curvature. Their eigenvalues are n² and (n+α)² over integers n, and only the first contains zero when α is not an integer.

**nLab:** [holonomy](https://ncatlab.org/nlab/show/holonomy). It says: “its parallel transport around some loop γ : \[0,1\] → X”

**Sources:** none listed. No primary source with a working link was found.

### Heat coefficients identify zeta poles

**Remember:** A heat term with power −a gives a pole at a.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For a strictly positive operator of Laplace type, the heat trace H(t) = ∑ exp(−tλ) and the zeta function ζ(s) = ∑ λ⁻ˢ sum over eigenvalues with multiplicity. They are linked by Γ(s)ζ(s) = ∫₀<sup>∞</sup> H(t)tˢ⁻¹ dt for large real part of s. This transform turns each small-time power of t into a pole in s.

**Problem.** On a closed manifold, a term c times t to the power −a in the small-time expansion of H gives Γ(s)ζ(s) residue c at a. The nonzero coefficients give precisely the poles, all simple.

**How the definition helps.** On (0,1) a heat term ct⁻ᵃ integrates to c/(s−a) (our own calculation). After subtracting enough terms, the remainder of the expansion gives an integral analytic near a. The integral over (1,∞) is entire, because H decays exponentially.

**nLab:** [zeta function of an elliptic differential operator](https://ncatlab.org/nlab/show/zeta+function+of+an+elliptic+differential+operator). It says: “The zeta function of H is the holomorphic function defined by the series”

**Sources:** none listed. No primary source with a working link was found.

### Heat content hears eigenfunctions

**Remember:** Heat content weights each mode by its overlap with uniform heat.

*Makes the theorem clean to state or prove.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** Dirichlet heat content Q(t) is the total heat in a region at time t, when it starts at temperature one and its boundary stays at zero. In an orthonormal Dirichlet eigenbasis φ, Q(t) = ∑ exp(−tλ)(∫φ)², so each mode is weighted by its overlap with the constant.

**Problem.** Two bounded planar sets can have the same Dirichlet eigenvalues, including multiplicities, and different heat contents.

**How the definition helps.** Heat content sees the integrals of the eigenfunctions, which the spectrum does not record (our own calculation). The cited Chapman sets have equal Dirichlet spectra but different heat contents.

**Paper or page:** [Torsional rigidity and isospectral planar sets](https://arxiv.org/abs/2105.07477). It says: “The Chapman domains C₁ and C₂ are distinguished by heat content.”

**Sources:**

- [Joseph Comer, Patrick McDonald, Torsional rigidity and isospectral planar sets](https://arxiv.org/abs/2105.07477)

### Heat traces recover area

**Remember:** At short times the heat trace first sees area.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds), 11F72. arXiv math.SP. Level 3: graduate.

**Definition.** On a closed oriented surface X of curvature −1, the heat trace is H(t) = ∑ exp(−tλ) over the eigenvalues λ of the nonnegative Laplacian, with multiplicity. The Selberg trace formula splits it into an identity term given by area and one Gaussian-damped term for each closed geodesic.

**Problem.** As t decreases to zero, tH(t) tends to area(X)/(4π).

**How the definition helps.** The identity term is asymptotic to area(X)/(4πt) as t decreases to zero. Each geodesic of length ℓ carries a factor exp(−ℓ²/(4t)) (our own derivation). A positive shortest length and at most exponential growth in geodesic counts make these terms negligible.

**Wikipedia:** [Selberg trace formula](https://en.wikipedia.org/wiki/Selberg_trace_formula). It says: “By suitable choices of the test function, the trace formula yields asymptotic information about eigenvalues of the Laplacian”

**Sources:**

- [Dennis A. Hejhal, The Selberg Trace Formula for PSL(2,ℝ), volume I (1976).](https://doi.org/10.1007/BFb0079608)

### Heat traces recover multiplicities

**Remember:** The slowest remaining exponential reveals the next eigenvalue.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The heat trace is the function ∑ m exp(−tλ) of t &gt; 0, summing over the distinct eigenvalues λ of the nonnegative Laplacian, each with its multiplicity m.

**Problem.** Two closed Riemannian manifolds have identical Laplace eigenvalues with multiplicity exactly when their heat traces agree at every positive time.

**How the definition helps.** Distinct exponentials are linearly independent, so the trace determines each λ and its m. In our own argument, the slowest term as t → ∞ gives the least eigenvalue and its multiplicity; subtract it and repeat. Convergence at each positive time justifies each limit.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “The function θ = θℛₘ defined by the heat trace: θ(t) := Tr(exp(−tℛₘ)), t &gt; 0, is positive valued, decreasing and smooth on (0,∞).”

**Sources:** none listed. No primary source with a working link was found.

### Heat constants control determinant scaling

**Remember:** The constant heat term, minus zero modes, is the scaling exponent.

*True by definition. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J35. arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The spectral zeta function ζ(s) continues ∑ λ⁻ˢ over the positive eigenvalues λ, counted with multiplicity, from the region where it converges. The zeta determinant is exp(−ζ′(0)). Scaling A by c multiplies ζ(s) by c⁻ˢ.

**Problem.** For a nonnegative operator A of Laplace type on a closed manifold, scaling A by c &gt; 0 multiplies its zeta determinant by cᵃ⁻ᵏ. Here a is the constant term of the heat trace expansion, and k counts zero eigenvalues with multiplicity.

**How the definition helps.** Differentiating c⁻ˢζ(s) at zero multiplies the determinant by c<sup>ζ</sup>(0) (our own calculation). The integral relating the heat trace to ζ gives ζ(0) = a − k, since zero eigenvalues appear in the heat trace but not in ζ.

**nLab:** [zeta function of an elliptic differential operator](https://ncatlab.org/nlab/show/zeta+function+of+an+elliptic+differential+operator). It says: “detᵣₑg H ≔ exp(−ζ′ₕ(0)).”

**Sources:** none listed. No primary source with a working link was found.

### Almost conjugate subgroups preserve spectra

**Remember:** Equal class counts give equal dimensions of fixed eigenfunctions.

*True by definition.* MSC 58J53 (Isospectrality). arXiv math.SP. Level 3: graduate.

**Definition.** Let a finite group G act freely by isometries on a closed hyperbolic surface X. Subgroups H and J are almost conjugate if they contain the same number of elements of each conjugacy class of G. Then H and J have fixed spaces of equal dimension in every representation of G.

**Problem.** If H and J are almost conjugate, the quotient surfaces X/H and X/J have the same Laplace eigenvalues, including multiplicities.

**How the definition helps.** The eigenfunctions on X/H are the H-fixed eigenfunctions on X, and the dimension of a fixed space is the average over H of the character (our own argument). That average depends only on class counts, so each eigenspace of X has H-fixed and J-fixed parts of equal dimension.

**Wikipedia:** [Isospectral](https://en.wikipedia.org/wiki/Isospectral). It says: “are subgroups of G meeting each conjugacy class of G in the same number of elements”

**Sources:**

- [Toshikazu Sunada, Riemannian Coverings and Isospectral Manifolds (1985).](https://doi.org/10.2307/1971195)

### Fiberwise nondegeneracy preserves parameters

**Remember:** Use the Hessian in the variables you can change.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A fiberwise nondegenerate critical point of a smooth real function F(u,x) is a critical point of x ↦ F(u,x) for fixed u whose Hessian in x alone is invertible.

**Problem.** Nearby fiber critical points form a smooth graph x = c(u). Coordinates fixing u express F as its value on the graph plus a fixed sum of signed squares.

**How the definition helps.** The invertible fiber Hessian lets the implicit function theorem solve ∂ₓF(u,x) = 0 as x = c(u) (our own argument). The Morse lemma with parameters, after centering on the graph and subtracting F(u,c(u)), gives the signed squares. For F(u,x) = ux the full Hessian is invertible, but ∂ₓF = u vanishes only on u = 0, not on a graph over u.

**nLab:** [Morse lemma](https://ncatlab.org/nlab/show/Morse+lemma). It says: “The Morse lemma states that for any nondegenerate critical point p of f there is a chart φ: U → ℝⁿ around p such that the function in these coordinates is quadratic”

**Paper or page:** [Local intersections of Lagrangian manifolds correspond to catastrophe theory](https://arxiv.org/abs/1811.10165v5). It says: “There exists a change of coordinates K on a neighbourhood of 0”

**Sources:** none listed. No primary source with a working link was found.

### Normal nondegeneracy excludes quartics

**Remember:** Allow flat tangent directions, but not flat normal directions.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth real function is Morse–Bott along a submanifold of critical points if its Hessian, the form of second derivatives, has kernel exactly the tangent space there. So the Hessian is nondegenerate in the normal directions.

**Problem.** Near each point of that submanifold, smooth coordinates express the function as its critical value plus signed squares of the normal coordinates.

**How the definition helps.** The Morse lemma with parameters, applied in the normal directions, gives coordinates that vary smoothly along the submanifold (our own explanation). For y⁴ the critical line y = 0 is smooth, but the normal Hessian vanishes and y⁴ is not a signed square.

**Paper or page:** [Gradient Flow in Morse and Analytic Settings](https://arxiv.org/abs/2311.09968v1). It says: “Let f: M → ℝ be Morse–Bott and N a l-dimensional critical submanifold of f with index λ.”

**Sources:**

- [Raoul Bott, Nondegenerate Critical Manifolds](https://doi.org/10.2307/1969631)

### Distinct critical values give stability

**Remember:** Give each critical point its own height.

*Rules out counterexamples. Confidence: medium.* MSC 58K25 (Stability theory for manifolds), 58K05. arXiv math.DG. Level 3: graduate.

**Definition.** An excellent Morse function has an invertible Hessian at every critical point and gives distinct critical points distinct values.

**Problem.** On a closed smooth manifold, every sufficiently small smooth perturbation of an excellent Morse function differs from it by source and target coordinate changes.

**How the definition helps.** Distinct values let one target coordinate change move each critical value independently (our own explanation). Morse coordinates handle the critical points, and integrating a vector field handles the rest. For cos(2θ) on the circle, raising one of the two equal maxima changes the number of critical values, which no coordinate change can undo.

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “two critical points are at the same height, which can be resolved by a slight perturbation of f.”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities](https://doi.org/10.1007/978-1-4615-7904-5)

### Multijets rule out quadruple points

**Remember:** Test coincidences only at distinct source points.

*Rules out counterexamples.* MSC 58K30 (Global theory of singularities), 57R35. arXiv math.GT. Level 3: graduate.

**Definition.** The four-point multijet of order zero records the values of a map at four distinct ordered source points. A quadruple point is where all four values agree, so the multijet lands in the diagonal of the fourth power of the target.

**Problem.** For a generic smooth map from a surface to a three-manifold, the four-point multijet is transverse to the diagonal and there are no quadruple points. Here generic means on a set containing a countable intersection of open dense sets in the smooth Whitney topology.

**How the definition helps.** The multijet transversality theorem makes the multijet of a generic map transverse to the diagonal. Four points on a surface give a space of dimension eight, and the diagonal has codimension nine, so transverse means disjoint. Distinct source points matter, because the tuple (x,x,x,x) would be a coincidence for every map (our own explanation).

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “Maps f: X → Z, g: Y → Z with dim(X)+dim(Y) &lt; dim(Z) are transversal iff their images are disjoint.”

**Sources:**

- [John N. Mather, Stability of C∞ Mappings V. Transversality](https://doi.org/10.1016/0001-8708(70)90028-9)

### Intrinsic Hessians recognize folds

**Remember:** Test the second derivative in the lost directions.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 3: graduate.

**Definition.** Let a smooth map go from dimension n to dimension p ≤ n, with derivative of rank p − 1 at a point. Its intrinsic second derivative is the second derivative on kernel directions, read modulo the image of the first derivative. The point is a fold if this quadratic form is nondegenerate.

**Problem.** Near a fold point, smooth source and target coordinates put the map in the form (u,x) ↦ (u,Q(x)) for a nondegenerate quadratic form Q.

**How the definition helps.** After straightening the first p − 1 outputs, the intrinsic second derivative becomes the Hessian of the last output in the remaining variables (our own argument). The Morse lemma with parameters makes that output quadratic after subtracting its critical value. At the origin of (u,x) ↦ (u,x³ + ux), the rank is p − 1, but the intrinsic second derivative vanishes.

**Paper or page:** [Local intersections of Lagrangian manifolds correspond to catastrophe theory](https://arxiv.org/abs/1811.10165v5). It says: “There exists a change of coordinates K on a neighbourhood of 0”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities](https://doi.org/10.1007/978-1-4615-7904-5)

### In smooth sets, every differential form comes from one universal form

**Remember:** A form on X is a map from X into the space of all forms.

*True by definition.* MSC 58A03 (Topos-theoretic approach to differentiable manifolds), 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** The sheaf Ωⁿ assigns to each Cartesian space U its smooth n-forms, with pullback along smooth maps. An n-form on a smooth set X is defined to be a morphism of sheaves X → Ωⁿ. So the identity of Ωⁿ is itself an n-form, the universal one.

**Problem.** For every smooth set X, each differential n-form on X is the pullback of one universal n-form along a map X → Ωⁿ. For n ≥ 1, Ωⁿ is a smooth set but not a diffeological space.

**How the definition helps.** Any form α: X → Ωⁿ is the pullback of the universal form along α, since id ∘ α = α (our own explanation). For n ≥ 1, Ωⁿ has one point but many plots, such as the zero and volume forms on ℝⁿ. A diffeological plot is determined by its point map, so Ωⁿ is not diffeological.

**nLab:** [geometry of physics -- smooth sets](https://ncatlab.org/nlab/show/geometry+of+physics+--+smooth+sets), [smooth set](https://ncatlab.org/nlab/show/smooth+set). It says: “This statement is of course in a way a big tautology. Nevertheless it is a very useful tautology to make explicit.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Covers with overlaps diffeomorphic to ℝⁿ make Čech nerves cofibrant

**Remember:** Every overlap is a copy of ℝⁿ, so every overlap is representable.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 18N40, 18F20. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A differentiably good open cover of a smooth manifold is one in which every nonempty finite intersection is diffeomorphic to ℝⁿ. So every piece of its Čech nerve is a representable presheaf, a Cartesian space.

**Problem.** The Čech nerve of a differentiably good open cover is cofibrant in the projective local model structure on simplicial presheaves on Cartesian spaces. So it is a cofibrant resolution of the manifold.

**How the definition helps.** The Čech nerve is then built by attaching representable simplices along their boundaries, one for each nondegenerate index tuple. Such cell attachments are cofibrant in the projective structure, and localizing keeps cofibrations (our own explanation). The cover condition makes the map to the manifold a local weak equivalence.

**nLab:** [good open cover](https://ncatlab.org/nlab/show/good+open+cover), [function algebras on infinity-stacks](https://ncatlab.org/nlab/show/function+algebras+on+infinity-stacks). It says: “The point is that with this definition, the Cech nerve C(U) ∈ \[ThCartSpᵒᵖ, sSet\]<sub>proj</sub> is cofibrant, by the characterization of cofibrant objects in the projective model structure.”

**Sources:**

- [Domenico Fiorenza, Urs Schreiber, Jim Stasheff, Čech cocycles for differential characteristic classes, Adv. Theor. Math. Phys. 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Diffeology gives orbit spaces a tangent space equal to the stratified one

**Remember:** Lift plots locally, then identify their tangent vectors under smooth reparametrization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57M60. arXiv math.DG. Level 4: research.

**Definition.** A plot of M/G is a map from an open subset of a Euclidean space that lifts locally to a smooth map into M. The internal tangent space at an orbit q is the direct sum of the tangent spaces at the basepoints of all plots through q. In it, v in the summand of r ∘ φ is identified with dφ(v) in the summand of r, for each smooth pointed reparametrization φ.

**Problem.** Let a Lie group act properly on M and give M/G the quotient diffeology. At each orbit, the internal tangent space is isomorphic to the tangent space of its orbit-type stratum.

**How the definition helps.** This quotient defines a tangent space at every orbit, even a singular one, using only plots (our own explanation). The cited comparison theorem for proper actions identifies it with the tangent space of the orbit-type stratum.

**Paper or page:** [The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action](https://arxiv.org/abs/2511.06415). It says: “the internal tangent space to \[x\]∈M/G viewed as a diffeological space with the quotient diffeology is isomorphic to the stratified tangent space to \[x\]∈M/G viewed as a stratified space with induced orbit-type stratification.”

**Sources:**

- [I. Cinzori, The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action, arXiv:2511.06415 (2025)](https://arxiv.org/abs/2511.06415)

### In derived manifolds, the cobordism cup product is always intersection

**Remember:** Intersect by homotopy pullback, even when the tangent spaces fail transversality.

*Makes the theorem clean to state or prove.* MSC 58A05 (Differentiable manifolds, foundations), 14A30, 55N22. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For embeddings A → X and B → X, their derived intersection A ×ʰ<sub>X</sub> B is the homotopy pullback in derived smooth manifolds. It always exists, and it is the ordinary intersection when A and B are transverse.

**Problem.** Let A and B be closed embedded submanifolds of X. In unoriented cobordism of X, their classes satisfy \[A\] ⌣ \[B\] = \[A ×ʰ<sub>X</sub> B\], even without transversality.

**How the definition helps.** Spivak’s theorem identifies the cobordism class of the derived intersection with the cup product \[A\] ⌣ \[B\] (our own explanation). No transversality is needed, because the homotopy pullback exists for every pair of embeddings.

**nLab:** [derived smooth manifold](https://ncatlab.org/nlab/show/derived+smooth+manifold). It says: “By using derived smooth manifolds instead of ordinary smooth manifolds here, the condition that f be transversal to B could be dropped.”

**Sources:**

- [David I. Spivak, Derived smooth manifolds, Duke Math. J. 153 (2010), arXiv:0810.5174](https://arxiv.org/abs/0810.5174)

### A curl defined by the target measure describes all measure-preserving diffusions

**Remember:** Use the target measure itself to turn stationary currents into derivatives.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 60J60, 53A45. arXiv math.PR, math.DG. Level 4: research.

**Definition.** Let P be a positive volume form on an oriented n-manifold. The P-divergence of a vector field Y is defined by d(ι<sub>Y</sub> P) = divᴾ(Y)P. The P-curl of a bivector field A is the vector field with ι<sub>curlᴾ(A)</sub>P = d(ι<sub>A</sub> P), so every P-curl has zero P-divergence.

**Problem.** Consider a smooth Stratonovich diffusion with drift X and noises Yᵢ on a closed oriented n-manifold, n ≥ 2, with volume form P. Then P is stationary exactly when X − ½∑ᵢ divᴾ(Yᵢ)Yᵢ is locally a P-curl, and globally a P-curl plus a field whose contraction with P represents its de Rham class.

**How the definition helps.** Stationarity says the corrected drift has zero P-divergence, so its contraction with P is a closed (n−1)-form (our own explanation). The Poincaré lemma makes that form locally exact, of the form d(ι<sub>A</sub> P), which is a P-curl. Globally, subtracting a representative of its cohomology class leaves an exact form.

**Paper or page:** [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1), [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1). It says: “there is no need to introduce other structures such as a Riemannian metric, local coordinates, or a reference measure.”

**Sources:**

- [Alessandro Barp, So Takao, Michael Betancourt, Alexis Arnaudon, Mark Girolami, A Unifying and Canonical Description of Measure-Preserving Diffusions, arXiv:2105.02845 (2021)](https://arxiv.org/abs/2105.02845v1)

### A second differential gives formality

**Remember:** Use forms closed under the second differential.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** On a complex manifold put dᶜ = i(∂̄ − ∂). The dᶜ-closed forms are an algebra with differential d, which maps into all forms by inclusion and onto dᶜ-cohomology by projection. An algebra is formal when maps like these, preserving products and inducing isomorphisms on cohomology, link it to its cohomology.

**Problem.** The real de Rham algebra of a compact Kähler manifold is formal.

**How the definition helps.** On a compact Kähler manifold the ddᶜ lemma says a form closed under d and dᶜ and exact for one of them is ddᶜ of a form. It makes d induce zero on dᶜ-cohomology and makes both maps isomorphisms on cohomology (our own explanation). So no multiplicative choice of harmonic representatives is needed.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “A related result is that every compact Kähler manifold is formal in the sense of rational homotopy theory.”

**Sources:**

- [P. Deligne, P. Griffiths, J. Morgan, and D. Sullivan, Real homotopy theory of Kähler manifolds (1975)](https://doi.org/10.1007/BF01389853)

### Equivalent metrics preserve reduced cohomology

**Remember:** Equivalent norms give the same closure of the exact forms.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** Reduced L² cohomology is the square-integrable closed forms modulo the L² closure of the exact forms. Two metrics are uniformly equivalent when each is at most a constant times the other at every point, so they give the same L² forms with equivalent norms.

**Problem.** For a fixed closed exterior derivative, uniformly equivalent metrics give the same reduced L² cohomology. Their harmonic spaces are canonically isomorphic.

**How the definition helps.** Equivalent norms have the same convergent sequences, so they give the same closure of the derivatives and the same quotient. For each metric, orthogonal projection picks the representative perpendicular to that closure, the harmonic form (our own argument). So the harmonic spaces are canonically isomorphic through the quotient.

**Paper or page:** [Geometric singularities and Hodge theory](https://arxiv.org/abs/2407.01170v3). It says: “also mutually bounded and yield equivalent L²-spaces which are equal as sets.”

**Sources:** none listed. No primary source with a working link was found.

### Green operators give current primitives

**Remember:** Invert the Laplacian, then apply the adjoint.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** Currents are differential forms with distribution coefficients. The Green operator G inverts the Hodge Laplacian Δ on the forms perpendicular to the harmonic forms and is zero on harmonic forms, so ΔG is the identity minus harmonic projection.

**Problem.** On a closed oriented Riemannian manifold, each exact current S satisfies S = d(d⁎GS), where d⁎ is the adjoint of d.

**How the definition helps.** An exact current has no harmonic part, so (dd⁎ + d⁎d)GS = S. Since G commutes with d and dS = 0, the term d⁎dGS = d⁎GdS vanishes, leaving S = d(d⁎GS). Elliptic theory extends these identities to currents (our own derivation).

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “Let S = dT be an exact current with S ∈ 𝒟′ₖ(M). Then in fact S = d(d\*G(S)).”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic duality reverses twists

**Remember:** The star reverses the sign of the twist.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** For a closed real one-form θ, the twisted derivative is d\_θα = dα + θ∧α. A θ-twisted harmonic form is killed by d\_θ and by its adjoint d⁎ + ι\_θ, where ι\_θ is contraction with the vector dual to θ.

**Problem.** On a closed oriented Riemannian n-manifold, the Hodge star bijects θ-twisted harmonic k-forms with (−θ)-twisted harmonic (n − k)-forms.

**How the definition helps.** In a local orthonormal frame, d = ∑eᵢ∧∇ᵢ has adjoint −∑ιᵢ∇ᵢ, while θ∧ has adjoint +ι\_θ, so only the derivative term gains a minus sign. The star turns each eᵢ∧ into ιᵢ with a sign depending only on degree. So it turns the two equations for θ into the two equations for −θ (our own calculation).

**Paper or page:** [Morse-Novikov cohomology on foliated manifolds](https://arxiv.org/abs/2202.04508v1). It says: “the Hodge star operator ⋆𝓕 satisfies ⋆𝓕 Δ𝓕,ω = Δ𝓕,−ω ⋆𝓕.”

**Sources:** none listed. No primary source with a working link was found.

### Lefschetz harmonic forms preserve symmetry

**Remember:** Choose the second equation so harmonics form an sl₂ representation.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** In a Lefschetz complex, raising and lowering operators L and Λ change degree by +2 and −2 and make the space a representation of sl₂, the traceless two-by-two matrices. A vector is Lefschetz harmonic when d and the commutator dΛ − Λd both kill it. When d commutes with L, this common kernel is itself an sl₂ representation.

**Problem.** Suppose d commutes with L in a Lefschetz complex centered at degree n. Then Lⁿ⁻ᵏ bijects harmonic vectors in degrees k and 2n − k for 0 ≤ k ≤ n.

**How the definition helps.** In our own argument, the commutator identities show that L and Λ preserve the common kernel. In a graded sl₂ representation centered at degree n, Lⁿ⁻ᵏ is a bijection from degree k to degree 2n − k. So no choice of cohomology representatives is needed.

**Paper or page:** [HKT manifolds: Hodge theory, formality and balanced metrics](https://arxiv.org/abs/2207.09168v2). It says: “the space of Lefschetz harmonic p-forms”

**Sources:** none listed. No primary source with a working link was found.

### Nonlinear classes have unique minimizers

**Remember:** Each closed class in uniformly convex Lᵖ has one shortest form.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** Reduced Lᵖ cohomology takes Lᵖ forms, whose length to the pth power is integrable, that are weakly closed against smooth test forms. It divides them by the Lᵖ closure of the derivatives dβ of Lᵖ forms β with Lᵖ derivative, so each class is a closed affine subspace.

**Problem.** On a complete Riemannian manifold, each reduced Lᵖ class has a unique form of least norm when 1 &lt; p &lt; ∞.

**How the definition helps.** For 1 &lt; p &lt; ∞, Lᵖ is uniformly convex, so each closed affine subspace has a unique point nearest zero (our own argument). Differentiating the pth power of the norm along exact forms gives the equation d⁎(\|h\|ᵖ⁻²h) = 0.

**Paper or page:** [Lp -cohomology and the geometry of p-harmonic forms](https://arxiv.org/abs/2403.19481v2). It says: “such that \[h\]ᵣₑ𝒹 = φ, and d\*(\|h\|ᵖ⁻²h) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Nonlinear stars swap conjugate exponents

**Remember:** Rescale by length, then star: closed and coclosed trade places.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** For 1 &lt; p &lt; ∞, the nonlinear Hodge star sends a k-form h to ⋆(\|h\|ᵖ⁻²h), the ordinary Hodge star of h rescaled by \|h\|ᵖ⁻². A p-harmonic form h is weakly closed, dh = 0, and weakly coclosed after rescaling, d⁎(\|h\|ᵖ⁻²h) = 0. The nonlinear star swaps these two conditions.

**Problem.** On a complete oriented Riemannian n-manifold, the nonlinear star bijects Lᵖ p-harmonic k-forms with Lᑫ q-harmonic (n − k)-forms. Here q = p/(p − 1).

**How the definition helps.** If ω = ⋆(\|h\|ᵖ⁻²h), then \|ω\|ᑫ⁻²ω = ±⋆h, because (p − 1)(q − 2) + (p − 2) = 0 (our own calculation). So dω = 0 is the rescaled coclosed equation for h, and the q-coclosed equation for ω is dh = 0. Also \|ω\|ᑫ = \|h\|ᵖ, so Lᵖ forms go to Lᑫ forms.

**Paper or page:** [Lp -cohomology and the geometry of p-harmonic forms](https://arxiv.org/abs/2403.19481v2). It says: “Then ⋆ₚ defines a bijective”

**Sources:** none listed. No primary source with a working link was found.

### Jet pullbacks classify formal solutions

**Remember:** A formal solution is a jet whose own jet stays in E.

*True by definition.* MSC 58A20 (Jets in global analysis). arXiv math.DG. Level 4: research.

**Definition.** The infinite prolongation of an equation E ⊆ J∞Y is the pullback of J∞E → J∞J∞Y along the jet comultiplication J∞Y → J∞J∞Y. Its points are the infinite jets whose own jet lies in J∞E, so the equation and all its derivatives hold at once.

**Problem.** Every parametrized family of formal solutions factors uniquely through the universal family over the infinite prolongation.

**How the definition helps.** A family of formal solutions is a family of jets whose own jets satisfy E, which is exactly a compatible pair of maps into the two factors (our own explanation). The universal property of the pullback then gives the unique factorization.

**Paper or page:** [Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1). It says: “Every parametrized family of formal solutions of this PDE factors uniquely through a universal one”

**Sources:**

- [Igor Khavkine and Urs Schreiber, Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1)

### Constant rank along flows makes involutive singular distributions integrable

**Remember:** Leaves have one dimension, so rank cannot jump along a flow.

*Rules out counterexamples. Confidence: medium.* MSC 58A30 (Vector distributions (subbundles of the tangent bundles)), 53C12. arXiv math.DG. Level 4: research.

**Definition.** A smooth singular distribution D, a tangent subspace at each point spanned locally by smooth vector fields, has constant rank along flows if dim D stays constant along each integral curve of each local section. Leaves of an integral foliation have this property, since D is their tangent space all along them.

**Problem.** Stefan–Sussmann theorem. A singular distribution D is integrable, with each point on an immersed submanifold whose tangent spaces equal D, exactly when D is involutive and has constant rank along the integral curves of its local sections.

**How the definition helps.** A section's integral curve stays in one leaf, and a leaf has constant dimension, so rank constancy is necessary; the Stefan–Sussmann theorem shows it suffices together with involutivity. Involutivity alone is not enough: on ℝ², take horizontal directions at x ≤ 0 and the whole plane at x &gt; 0 (our own example). Brackets close, but a horizontal flow crosses the rank jump.

**Paper or page:** [A Stefan-Sussmann theorem for normal distributions on manifolds with boundary](https://arxiv.org/abs/2109.04845). It says: “The following are equivalent. D is integrable. D is involutive and has constant rank along the integral curves of local D-sections.”

**Sources:**

- [D. Perrella, D. Pfefferlé and L. Stoyanov, A Stefan-Sussmann theorem for normal distributions on manifolds with boundary, arXiv:2109.04845 (2021)](https://arxiv.org/abs/2109.04845)

### Plotwise triviality survives pullback

**Remember:** Test triviality on plots; a pullback only composes the plots.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 4: research.

**Definition.** A diffeological principal G-bundle is a smooth surjection P → B with a fiber-preserving right action of a diffeological group G that is trivial over every plot. That is, for each smooth map U → B from an open subset of a Euclidean space, the pullback of P is G-equivariantly diffeomorphic to U × G over U. Also, the unique g with pg = q depends smoothly on each pair (p,q) in one fiber.

**Problem.** Pulling a diffeological principal bundle back along a smooth map gives another principal bundle. Pullback assigns to each new base point the fiber over its image.

**How the definition helps.** A plot of the new base composed with the base map is a plot of the old base, and pulling back twice equals pulling back along the composite, so the new bundle is trivial over every plot (our own proof). The smooth map giving the unique g restricts to the new fibers, which are copies of the old ones (our own).

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “the pullback p₀∗P is trivial”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Maps of graded manifolds are detected by probes with one ordinary point

**Remember:** Probe with one ordinary point plus formal graded coordinates.

*Makes the theorem clean to state or prove.* MSC 58A50 (Supermanifolds and graded manifolds), 18A22. arXiv math.DG, math.CT. Level 4: research.

**Definition.** The restricted functor of points of a ℤ₂ⁿ-manifold M probes it only with graded points, which have a single ordinary point and finitely many formal coordinates of nonzero degree. It assigns to each graded point S the set of morphisms S → M, and acts on morphisms of probes by precomposition.

**Problem.** Restrict to natural transformations whose components are smooth over each probe's degree-zero scalar algebra. Then the restricted functor of points of ℤ₂ⁿ-manifolds is fully faithful, so each such transformation comes from a unique morphism of graded manifolds.

**How the definition helps.** A morphism of graded manifolds is fixed by what it does to formal coordinates at each point, and graded points record exactly that data (our own explanation). The restricted functor-of-points theorem rebuilds the morphism from these values, using smoothness over the degree-zero scalars.

**Paper or page:** [The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds](https://arxiv.org/abs/1906.09834v2). It says: “We show that it is sufficient to consider ℤ₂ⁿ-points, i.e., trivial ℤ₂ⁿ-manifolds for which the reduced manifold is just a single point, as 'probes' when employing the functor of points.”

**Sources:**

- [Andrew James Bruce, Eduardo Ibarguengoytia, Norbert Poncin, The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds, arXiv:1906.09834v2 (2020), SIGMA 16 (2020), 002, 47 pages](https://arxiv.org/abs/1906.09834v2)

### On supermanifolds, integrate integral forms instead of top-degree forms

**Remember:** Integrate what transforms by the Berezinian, not top-degree forms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58C35. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a smooth supermanifold, a top integral form is a section of the Berezinian bundle: locally one coefficient, which changes by the Berezinian (the super-determinant) of each coordinate change. Berezin integration, which integrates the coefficient of the product of all odd coordinates over the even ones, changes by exactly this factor.

**Problem.** On an oriented smooth supermanifold of positive odd dimension, every compactly supported top integral form has a well-defined integral. Ordinary differential forms have no top degree.

**How the definition helps.** Since Berezin integration and top integral forms change by the same Berezinian, the local integrals agree in all oriented charts (our own explanation). Differential forms cannot serve: dθ for an odd coordinate θ is even, so its powers never vanish and there is no top degree.

**nLab:** [integration over supermanifolds](https://ncatlab.org/nlab/show/integration+over+supermanifolds). It says: “apparently for integration it is not really essential that a form is a top power, what is rather essential is that it is, locally, the wedge product of a basis of 1-forms.”

**Sources:**

- [Edward Witten, Notes On Supermanifolds and Integration (2012), arXiv:1209.2199](https://arxiv.org/abs/1209.2199)

### Symmetric multiple vector bundles are exactly the graded bundles, by full linearization

**Remember:** Split each weight into separate directions, and remember their permutations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58A32. arXiv math.DG. Level 4: research.

**Definition.** A degree-k graded bundle has fiber coordinates of weights 1 to k, which change by weight-preserving polynomials. Its full linearization is the k-fold vector bundle that splits each weight-j coordinate into components, one for each j-element subset of k separate linear directions, together with the action of permutations of those directions.

**Problem.** Full linearization and diagonalization give an equivalence of categories between graded bundles of degree k and symmetric k-fold vector bundles. The symmetry maps, indexed by the symmetric group, are part of the data.

**How the definition helps.** Diagonalization, which sets all k directions equal, returns the graded bundle, and the permutation maps record which linear components came from one coordinate (our own). For example, a weight-two coordinate becomes a component linear in each of two directions, symmetric under swapping them. The theorem's work is to show that these symmetry data also recover all morphisms.

**Paper or page:** [Polarisation of Graded Bundles](https://arxiv.org/abs/1512.02345v2). It says: “We fully characterise the image of the full linearisation functor and show that we obtain a subcategory of k-fold vector bundles consisting of symmetric k-fold vector bundles equipped with a family of morphisms indexed by the symmetric group Sₖ.”

**Sources:**

- [Andrew James Bruce, Janusz Grabowski, Mikolaj Rotkiewicz, Polarisation of Graded Bundles, arXiv:1512.02345v2 (2016), SIGMA 12 (2016), 106, 30 pages](https://arxiv.org/abs/1512.02345v2)

### A local addition makes the space of smooth maps a manifold

**Remember:** A point plus a small tangent vector gives a nearby point, smoothly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds), 46T05. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on M is a smooth rule η that moves each point p along a short tangent vector v at p to a nearby point η(v), with η(0ₚ) = p. It is defined on an open neighborhood U of the zero section in TM, and v ↦ (base point of v, η(v)) maps U diffeomorphically onto an open neighborhood of the diagonal in M × M.

**Problem.** Take a compact manifold N and a manifold M, possibly infinite-dimensional, that has a local addition. Then the space C∞(N, M) of smooth maps from N to M is a smooth manifold.

**How the definition helps.** A map near g: N → M is then the same as a small section s of g\*TM, through s ↦ η ∘ s, so spaces of sections give charts (our own explanation). Kriegl and Michor's mapping-space theorem shows, in convenient calculus, that the chart changes are smooth when N is compact.

**nLab:** [local addition](https://ncatlab.org/nlab/show/local+addition). It says: “if M is a manifold (possibly infinite dimensional) admitting a local addition, and if N is a compact manifold (possibly with boundary) then C<sup>∞</sup>(N,M) can be given the structure of a smooth manifold”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The Convenient Setting of Global Analysis, AMS Mathematical Surveys and Monographs 53, 1997 (§42)](https://doi.org/10.1090/surv/053)

### Curve tangents exclude higher derivations

**Remember:** Velocities see first derivatives; some derivations see only second ones.

*Rules out counterexamples.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds). arXiv math.DG, math.FA. Level 4: research.

**Definition.** A kinematic tangent vector at a point is the velocity of a smooth curve through it. An operational tangent vector is a derivation there: a bounded linear functional on germs of smooth functions at the point that obeys the product rule, and such a functional may see second derivatives, which no velocity can.

**Problem.** In an infinite-dimensional real Hilbert space, every velocity gives a distinct operational tangent vector, but some operational tangent vectors come from no velocity.

**How the definition helps.** A velocity acts by a first derivative, so linear functions tell velocities apart (our own). At the origin, apply to f''(0) a Hahn–Banach functional that is one on the identity and zero on compact operators; this is a derivation, since the product rule's extra terms have finite rank. It gives 2 on the squared norm, which every velocity sends to 0.

**nLab:** [operational tangent space](https://ncatlab.org/nlab/show/operational+tangent+space). It says: “For more general smooth spaces, these are no longer equivalent.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Dual evaluation is conveniently smooth

**Remember:** Smoothness needs bounded pairings on bounded sets, not joint continuity.

*Makes the theorem clean to state or prove.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds), 46A20. arXiv math.FA. Level 4: research.

**Definition.** A map is conveniently smooth if it sends smooth curves to smooth curves. Give the dual of a Fréchet space, a complete space whose topology comes from countably many seminorms, the topology of uniform convergence on bounded sets, so that evaluation is bounded on each product of bounded sets.

**Problem.** Evaluation, which sends a vector and a continuous linear functional to the functional’s value there, is conveniently smooth for every Fréchet space. For real sequences with the product topology, evaluation fails to be jointly continuous.

**How the definition helps.** Bounded bilinear maps are conveniently smooth, and this dual topology makes evaluation bounded on products of bounded sets. Joint continuity still fails for real sequences with the product topology (our own example): each basic neighborhood of zero leaves some coordinate free, and every dual neighborhood contains a nonzero multiple of evaluation at that coordinate. So the pairing is unbounded on every product of two neighborhoods.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “Multilinear mappings are smooth if and only if they are bounded”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Strong symplectic forms straighten locally

**Remember:** Invert the pairing to turn one-forms into vector fields.

*Rules out counterexamples.* MSC 58B20 (Riemannian, Finsler and other geometric structures on infinite-dimensional manifolds), 53D05. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A closed two-form ω on a Banach manifold is strongly symplectic if v ↦ ω(v, ·) is an isomorphism, with bounded inverse, from each tangent space onto its continuous dual. So every one-form α equals ω(X, ·) for exactly one vector field X.

**Problem.** Every strong symplectic form on a Banach manifold is constant in suitable local coordinates.

**How the definition helps.** Moser's argument must solve ω<sub>t</sub>(X<sub>t</sub>, ·) = −α for a vector field, and the invertible pairing allows this (our own account). Interpolate from ω to its constant value at a chart center; nearby pairings stay invertible, and the flow of X<sub>t</sub> gives the coordinates. For a weak form, whose pairing is only injective, Marsden gave an example with no such chart.

**nLab:** [Darboux's theorem](https://ncatlab.org/nlab/show/Darboux%27s+theorem). It says: “for (X, ω) a symplectic manifold there are local charts in which the symplectic form ω takes the form”

**Sources:**

- [Jerrold E. Marsden, Darboux’s Theorem Fails for Weak Symplectic Forms (1972)](https://doi.org/10.2307/2037864)

### Ellwood freeness equals the algebraic Galois condition on Peter–Weyl elements

**Remember:** Restrict to the algebraic part, and density becomes bijectivity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B32 (Geometry of quantum groups), 46L67, 46L55. arXiv math.QA, math.OA. Level 4: research.

**Definition.** The Peter–Weyl algebra P of a compact quantum group coaction δ on a unital C\*-algebra A is its algebraic part: the elements a with δ(a) in A ⊗ O(G), the algebraic tensor product with the Hopf algebra of matrix coefficients. The coaction is Peter–Weyl–Galois if the map P ⊗<sub>B</sub> P → P ⊗ O(G), p ⊗ q ↦ (p ⊗ 1)δ(q), is bijective, where B is the fixed algebra.

**Problem.** A coaction of a compact quantum group on a unital C\*-algebra satisfies the Ellwood condition exactly when it is Peter–Weyl–Galois. So free actions on C\*-algebras are the same as principal comodule algebras at the algebraic level.

**How the definition helps.** The Ellwood condition asks that the elements (a ⊗ 1)δ(b) span a dense subspace, and on the algebraic part this density becomes exact surjectivity of the Galois map (our own explanation). The Baum–De Commer–Hajac theorem proves that the two conditions are equivalent.

**Paper or page:** [Part III, Free Actions of Compact Quantum Groups on C\*-Algebras](https://arxiv.org/abs/1701.05895). It says: “has dense range or, equivalently, is surjective. (c) The C\*-dynamical system (𝒜,G,α) satisfies the Ellwood condition.”

**Sources:**

- [P. F. Baum, K. De Commer and P. M. Hajac, Free actions of compact quantum groups on unital C\*-algebras, Documenta Mathematica 22 (2017) 825–849](https://doi.org/10.4171/dm/579)
- [Part III, Free Actions of Compact Quantum Groups on C\*-Algebras (arXiv 1701.05895)](https://arxiv.org/abs/1701.05895)

### Strong connections make associated modules of quantum bundles projective

**Remember:** A strong connection hands you the idempotent of every associated bundle.

*True by definition. Confidence: medium.* MSC 58B32 (Geometry of quantum groups), 16T05, 16D40. arXiv math.QA. Level 4: research.

**Definition.** Let A be a right H-comodule algebra with coinvariants B, where the Hopf algebra H has bijective antipode. A strong connection is a unital map ℓ: H → A ⊗ A, colinear on both sides, that splits the translation map: (m ⊗ id)(id ⊗ δ)ℓ(h) = 1 ⊗ h for every h, where m is multiplication. Its components build a finite idempotent matrix over B for each finite-dimensional comodule (our own).

**Problem.** Let A be a principal right H-comodule algebra over B, where H has bijective antipode. For each finite-dimensional left H-comodule V, the associated left B-module A □ V is finitely generated projective.

**How the definition helps.** For a finite-dimensional comodule V, the strong connection gives an idempotent matrix over B whose image is A □ V (our own explanation). An idempotent image is a direct summand of a finite free module, so A □ V is finitely generated projective. Principality guarantees that a strong connection exists.

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860). It says: “A is a principal H-comodule algebra if and only if it admits a strong connection form, that is, if there exists a map ω: H → A⊗A such that ω(1)=1⊗1,”

**Sources:**

- [P. M. Hajac, Strong connections on quantum principal bundles, Communications in Mathematical Physics 182 (1996) 579–617](https://doi.org/10.1007/BF02506418)

### The Ellwood density condition is exactly freeness for commutative algebras

**Remember:** Free means the functions f(x)h(xg) separate the points of X × G.

*Makes the theorem clean to state or prove.* MSC 58B32 (Geometry of quantum groups), 46L55, 46L85. arXiv math.OA, math.QA. Level 4: research.

**Definition.** A coaction δ: A → A ⊗ C(G) of a compact quantum group on a unital C\*-algebra is free, or satisfies the Ellwood condition, when the products (a ⊗ 1)δ(b) span a dense subspace of A ⊗ C(G). For a group acting on a space X, these products are the functions (x,g) ↦ f(x)h(xg).

**Problem.** Let a compact group G act continuously on a compact Hausdorff space X. The action is free exactly when the induced coaction on C(X) satisfies the Ellwood condition.

**How the definition helps.** These functions form a unital self-adjoint subalgebra of C(X × G) that separates points exactly when (x,g) ↦ (x,xg) is injective, that is, when the action is free (our own argument). Stone–Weierstrass then turns point separation into density.

**Paper or page:** [Noncommutative numerable principal bundles from group actions on C\*-algebras](https://arxiv.org/abs/2203.14677). It says: “The G-action on X is free if and only if span{ f₁α₍·₎(f₂) : f₁,f₂∈C<sub>c</sub>(X) } is κ-dense in C(G,C(X)),”

**Sources:**

- [D. A. Ellwood, A new characterisation of principal actions, Journal of Functional Analysis 173 (2000) 49–60](https://doi.org/10.1006/jfan.2000.3561)

### A heat-trace condition removes the Fubini counterexample for Dixmier traces

**Remember:** Clean heat-trace leading terms multiply, so integrals of products multiply.

*Rules out counterexamples. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L51. arXiv math.OA. Level 4: research.

**Definition.** A (p,∞)-summable spectral triple (A,H,D) has a clean heat-trace expansion if, for every T in A, tᵖ Tr(T exp(−t²D²)) = c(T) + O(tᵋ) as t decreases to zero, for some constant c(T) and some ε &gt; 0. Heat traces of a product triple are products of heat traces, so these leading coefficients multiply (our own).

**Problem.** If two spectral triples meet the heat-trace condition, the integral of T₁ ⊗ T₂ on the product triple is the product of the integrals. This holds, with fixed Gamma-function constants, for every normalised trace on L¹'∞.

**How the definition helps.** On the product triple the heat traces multiply, so the leading coefficients c multiply (our own explanation). The heat-trace Fubini theorem turns each coefficient into the noncommutative integral times a fixed gamma-function factor, for every normalised trace. The cited unitary example breaks multiplicativity, so its factors cannot both have clean heat-trace expansions.

**Paper or page:** [Fubini theorem in noncommutative geometry](https://arxiv.org/abs/1612.04012), [Fubini theorem in noncommutative geometry](https://arxiv.org/abs/1612.04012). It says: “There exists a (1,∞)−summable spectral triple (𝒜,H,D) such that D has simple spectrum ℤ₊. 𝒜 is generated by a unitary operator U and is finite dimensional.”

**Sources:**

- [F. Sukochev and D. Zanin, Fubini theorem in noncommutative geometry, Journal of Functional Analysis 272 (2017)](https://doi.org/10.1016/j.jfa.2016.10.016)

### A trace valued in bounded sequences modulo null sequences removes the limit

**Remember:** Take the quotient first, choose the limit last.

*True by definition. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L51, 47B10. arXiv math.OA, math.FA. Level 4: research.

**Definition.** For T in the weak trace class ℒ₁,∞, list its eigenvalues by decreasing modulus with multiplicity, padding with zeros. τ(T) is the sequence of sums of the first N eigenvalues divided by log N, for N ≥ 2, taken modulo sequences tending to zero, so it lies in ℓ∞/ℓ₀ and no limit has been chosen yet.

**Problem.** τ is a positive continuous linear trace on L¹'∞ that vanishes on the operators whose singular values are o(1/n). Every Dixmier trace is a generalised limit applied to τ, so every Dixmier trace has the same properties.

**How the definition helps.** τ is linear, positive and a trace before any limit is chosen. A Dixmier trace applies a generalised limit to τ, and such a limit vanishes on null sequences, so it is well defined on the class and inherits these properties (our own). The main step is that eigenvalue sums are additive up to a bounded error, which division by log N removes (our own).

**Paper or page:** [Connes' integration and Weyl's laws](https://arxiv.org/abs/2107.01242). It says: “The map τ : ℒ₁,∞ → ℓ∞/ℓ₀ is a positive continuous linear trace. It is annihilated by operators in (ℒ₁,∞)₀, including infinitesimal operators of order &gt;1.”

**Sources:**

- [Raphaël Ponge, Connes' integration and Weyl's laws, Journal of Noncommutative Geometry (2023)](https://doi.org/10.4171/jncg/509)

### Connes' 2-cocycle gives integer Chern numbers on the noncommutative torus

**Remember:** The curvature cocycle counts an index, so it is an integer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87, 19D55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** On the smooth noncommutative torus, let τ take the constant Fourier coefficient and let δ₁, δ₂ multiply UᵐVⁿ by 2πim and 2πin. The Chern cocycle is φ(a,b,c) = τ(a(δ₁b δ₂c − δ₂b δ₁c))/(2πi), applied entrywise with the matrix trace on matrices. It is a curvature integral, and Connes showed that its pairing with K-theory is a Fredholm index (our own).

**Problem.** For every projection e in matrices over A(θ), the Chern number φ(e, e, e) is an integer. By contrast, the trace τ(e) can be irrational, since τ takes the values ℤ + θℤ on K₀.

**How the definition helps.** Connes' index theorem identifies φ(e,e,e) with the Fredholm index of an operator twisted by e, so it is an integer (our own explanation). The trace τ has no such index form: it takes the values ℤ + θℤ on K₀, so τ(e) can be irrational for irrational θ.

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “But as an ordered group, K₀ ≃ Z + θZ.”

**Paper or page:** [A combinatorial integration on the Cantor dust](https://arxiv.org/abs/2209.03537). It says: “the Connes’ pairing of the cyclic 2-cocycle \[φ\] with \[p\] is expressed as follows”

**Sources:** none listed. No primary source with a working link was found.

### Connes' trace theorem turns the Dixmier trace into a local integral

**Remember:** On a manifold, the Dixmier trace only sees the symbol of order −n.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 58J42, 46L51. arXiv math.OA, math.DG. Level 4: research.

**Definition.** The residue of a scalar classical pseudodifferential operator of order −n on a closed n-manifold integrates its degree −n homogeneous symbol term over the unit cosphere bundle, with the canonical density and no factor (2π)⁻ⁿ. It sees only that one symbol term, so it is a local integral.

**Problem.** On a closed n-manifold with n &gt; 0, each Dixmier trace of a classical scalar operator of order −n equals its unnormalized residue divided by n(2π)ⁿ. Thus the Dixmier trace of f(1 + Δ)⁻ⁿᐟ² is a constant times the integral of smooth f against Riemannian volume.

**How the definition helps.** Connes' trace theorem states that every Dixmier trace of such an operator equals this residue divided by n(2π)ⁿ, so the Dixmier trace becomes a local integral (our own explanation). For f(1 + Δ)⁻ⁿᐟ² the degree −n symbol on the unit cosphere is f, and integrating over each fiber gives a constant times the integral of f against Riemannian volume.

**Wikipedia:** [Singular trace](https://en.wikipedia.org/wiki/Singular_trace). It says: “Connes (1988) showed that Wodzicki's noncommutative residue (Wodzicki 1984) of a pseudodifferential operator on a manifold M of order -dim(M) is equal to its Dixmier trace.”

**Sources:**

- [Alain Connes, The action functional in noncommutative geometry, Communications in Mathematical Physics 117 (1988)](https://doi.org/10.1007/BF01218391)
- [Mariusz Wodzicki, Local invariants of spectral asymmetry, Inventiones Mathematicae 75 (1984)](https://doi.org/10.1007/BF01403095)

### Dimension spectrum makes the Connes–Moscovici index formula local

**Remember:** Residues ignore trace class errors, so the index becomes local.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K56, 58J20. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The dimension spectrum of a spectral triple (A,H,D) is the set of poles of the zeta functions z ↦ Tr(b\|D\|⁻ᶻ), with \|D\|⁻ᶻ taken off the kernel of D. Here b runs over the algebra generated by A, \[D,A\] and their iterated commutators with \|D\|. When it is simple and discrete, every residue of these zeta functions is defined and ignores trace-class errors, so it is local (our own).

**Problem.** For a regular finitely summable spectral triple with simple discrete dimension spectrum, the Connes–Moscovici local cocycle represents the periodic Chern character. Its components are residues of products of algebra elements, iterated commutators and powers of \|D\|, plus a finite-part term in degree zero.

**How the definition helps.** The Connes–Moscovici cocycle is built from residues of these zeta functions, and the dimension spectrum says where they can have poles (our own explanation). The Connes–Moscovici local index theorem proves that this residue cocycle represents the Chern character.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple), [Noncommutative geometry](https://en.wikipedia.org/wiki/Noncommutative_geometry). It says: “The local index formula of Connes and Moscovici gives a way to compute index pairings for suitable spectral triples using local expressions in cyclic cohomology.”

**Sources:**

- [A. Connes, H. Moscovici, The local index formula in noncommutative geometry, Geom. Funct. Anal. 5 (1995) 174–243](https://doi.org/10.1007/BF01895667)

### Dirac operators on matrix algebras make them converge to coadjoint orbits

**Remember:** Measure variation by the norm of the commutator with the Dirac operator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89, 81R60. arXiv math.OA, math.MP. Level 4: research.

**Definition.** The Dirac Lip-norm of an algebra with a Dirac operator D measures how much an element a varies by the norm of its commutator, Lᴰ(a) = ‖\[D,a\]‖. Rieffel builds such Dirac operators on the coadjoint orbit algebra and on the matrix algebras for highest weights mλ, which makes each of them a compact quantum metric space.

**Problem.** For an integral dominant weight λ of a compact connected semisimple Lie group, give the matrix algebras for highest weights mλ and the continuous functions on the coadjoint orbit Rieffel's Dirac Lip-norms. Then the matrix algebras converge to the orbit algebra in Latrémolière's propinquity, as fuzzy spheres converge to the two-sphere.

**How the definition helps.** The commutator seminorms make the matrices and the orbit algebra into quantum metric spaces, so a distance between them is defined (our own explanation). Rieffel proves convergence by building bridges between them whose lengths tend to zero.

**Paper or page:** [Dirac operators for matrix algebras converging to coadjoint orbits](https://arxiv.org/abs/2108.01136). It says: “Thus the sequence {(ℬᵐ, Lᴰᵐ)} of compact C\*-metric spaces converges to the compact C\*-metric space {(𝒜, Lᴰᴬ)} for Latrémolière's propinquity.”

**Sources:**

- [Marc A. Rieffel, Dirac operators for matrix algebras converging to coadjoint orbits, Communications in Mathematical Physics 401 (2023)](https://doi.org/10.1007/s00220-023-04682-0)
- [Marc A. Rieffel, Gromov–Hausdorff distance for quantum metric spaces; Matrix algebras converge to the sphere for quantum Gromov–Hausdorff distance, Memoirs of the AMS 168, no. 796 (2004)](https://doi.org/10.1090/memo/0796)

### Dirac weights detect polynomial growth

**Remember:** The Dirac eigenvalues are the group weights, with repetitions.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** On a discrete group G, let D multiply square-summable functions by a real weight ℓ with finite sets {\|ℓ\| ≤ R} and bounded change under each fixed left translation. D is diagonal with eigenvalues ℓ(g), so finite summability means that the sum of (1 + ℓ(g)²)⁻ˢ over all g converges for some s &gt; 0.

**Problem.** Finite summability holds exactly when the number of group elements with \|ℓ(g)\| ≤ R grows at most polynomially in R.

**How the definition helps.** The sum counts group elements by weight, so it converges exactly when the number N(R) of elements with \|ℓ(g)\| ≤ R grows polynomially (our own explanation). If the sum converges, it bounds N(R)(1 + R²)⁻ˢ. Conversely, group the weights between consecutive powers of two; when 2s exceeds the growth exponent, a geometric series dominates the sum.

**Paper or page:** [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345). It says: “is finitely summable iff G has polynomial growth w.r.t. the proper translation bounded function ℓ.”

**Sources:**

- [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345)

### Entire cyclic cohomology gives theta-summable spectral triples a Chern character

**Remember:** Require finite heat trace at every positive time.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19D55, 46L87. arXiv math.OA, math.KT. Level 4: research.

**Definition.** An even spectral triple is θ-summable if its heat trace Tr(exp(−tD²)) is finite for every t &gt; 0. This bounds the heat operators in the JLO cochain, but not well enough to stop it at a finite degree, so the cochain lives in entire cyclic cohomology (our own).

**Problem.** For a θ-summable even spectral triple, the JLO cocycle Φₜ, built from heat operators exp(−stD²) and commutators \[D, a\], is an entire cyclic cocycle. Its class does not depend on t, and its pairing with an idempotent e is the index of D twisted by e.

**How the definition helps.** Finite heat traces make each simplex integral in the JLO cochain converge, and the JLO estimates give the entire growth bound and the cocycle identity (our own explanation). Homotopy invariance gives independence of t &gt; 0, and the JLO index pairing gives the twisted index.

**Wikipedia:** [JLO cocycle](https://en.wikipedia.org/wiki/JLO_cocycle), [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “The cohomology class defined by Φt(D) is independent of the value of t”

**Sources:**

- [A. Jaffe, A. Lesniewski, K. Osterwalder, Quantum K-theory I. The Chern character, Comm. Math. Phys. 118 (1988) 1–14](https://doi.org/10.1007/BF01218474)
- [A. Connes, Entire cyclic cohomology of Banach algebras and characters of θ-summable Fredholm modules, K-Theory 1 (1988) 519–548](https://doi.org/10.1007/bf00533785)

### Finite summability lets a trace formula compute the index pairing

**Remember:** Enough commutators in Lᵖ multiply into trace class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K56, 19D55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A normalized even Fredholm module, with F an odd self-adjoint involution on a graded Hilbert space, is p-summable if each commutator \[F,a\] lies in the Schatten class Lᵖ, meaning its singular values have finite p-th power sum. Then, by Hölder's inequality, a product of p or more such commutators is trace class.

**Problem.** For even n ≥ p − 1, put τₙ(a₀,…,aₙ) = cₙ Tr(γF\[F,a₀\]⋯\[F,aₙ\]), using the grading γ and Connes’ normalization cₙ. Then τₙ is a cyclic cocycle whose pairing with an idempotent e equals the index of eFe from eH₊ to eH₋.

**How the definition helps.** Summability makes the product of n + 1 commutators trace class, so τₙ is a finite trace (our own). The index of eFe equals a trace of a power of its defect, and that trace is ⟨τₙ, e⟩ (our own summary of Connes). Without summability, F still gives a K-homology class but no such trace formula.

**nLab:** [Fredholm module](https://ncatlab.org/nlab/show/Fredholm+module). It says: “an odd Fredholm module over A is a representation π : A → B(H) of A on a Hilbert space H together with a Fredholm operator F on H such that \[F,π(a)\] ∈ K(H) for all a ∈ A.”

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “then any index pairing between a class in K⁰(A) and one in K₀(A) can be computed using Connes’ trace formulas for p-summable cycles.”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### First order forces additive weights

**Remember:** Translation differences must be constant, so the weight is additive.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let D multiply square-summable functions on a discrete group by a real weight ℓ, with finite sets {\|ℓ\| ≤ R} and bounded change under each fixed left translation. D meets the first-order condition when each commutator of D with a left translation commutes with every right translation. That commutator is the translation followed by multiplication by ℓ(x) − ℓ(g⁻¹x), so the condition asks that difference to be constant in x.

**Problem.** Assume complex conjugation followed by group inversion gives a real structure, so ℓ under inversion equals either ℓ everywhere or −ℓ everywhere. The first-order condition holds exactly when ℓ is constant or an additive homomorphism.

**How the definition helps.** A multiplication operator commutes with all right translations only if its function is constant, so each difference ℓ(x) − ℓ(g⁻¹x) is constant in x (our own calculation). Putting x = e shows that ℓ − ℓ(e) is additive, so evenness or oddness leaves only a constant or a homomorphism, and both pass. The even weight ℓ(n) = \|n\| on ℤ fails, since \|n\| − \|n − 1\| is not constant.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “satisfies the first order condition if and only if ℓ is either a constant or a homomorphism.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### KO-dimension defines dimension mod 8 from three signs

**Remember:** Three signs of J fix the dimension modulo eight.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K33, 46L87. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The KO-dimension of a real spectral triple is the number n mod 8 read from three signs of its real structure J, in Connes' Euclidean convention: J² = ε, JD = ε′DJ, and, in even degree, Jγ = ε″γJ. The sign rows for n = 0 to 7 are (+++), (+−), (−+−), (−+), (−++), (−−), (++−), (++).

**Problem.** For a closed spin manifold of dimension n with its charge conjugation J, the KO-dimension is n mod 8. The definition also applies where classical dimension fails: the finite space of the Standard Model has KO-dimension 6 but classical dimension 0.

**How the definition helps.** The three signs exist for every real spectral triple, even one with no points, so the dimension is always defined. On a spin manifold the signs come from the real Clifford algebras, which repeat with period 8, and they match the row for n mod 8 (our own).

**nLab:** [KO-dimension](https://ncatlab.org/nlab/show/KO-dimension). It says: “For classical Riemannian manifolds KO-dimension coincides with the traditional concept of dimension of manifolds, modulo 8.”

**Sources:**

- [Alain Connes, Noncommutative geometry and reality, Journal of Mathematical Physics 36 (1995)](https://doi.org/10.1063/1.531241)

### Operator systems let Peter–Weyl truncations converge to compact quantum groups

**Remember:** Cutting an algebra by a projection leaves an operator system.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89, 46L67. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An operator system is a self-adjoint space of operators that contains 1 but need not be closed under products. Compressing C(𝔾), for a compact quantum group 𝔾, by the projection P onto a finite set Λ of irreducible representations gives one: the Peter–Weyl truncation {PaP : a ∈ C(𝔾)}, which keeps adjoints and the unit but not products.

**Problem.** Take a coamenable compact quantum group with a bi-invariant regular Lip-norm. Its Peter–Weyl truncations converge to it in Kerr's complete Gromov–Hausdorff distance as Λ grows to include every representation.

**How the definition helps.** Truncations are operator systems, not algebras, so the theorem needs a distance between operator systems, and Kerr's complete Gromov–Hausdorff distance is one. The proof builds a state whose slice map nearly inverts compression in Lip-norm, using coamenability (our own explanation).

**Paper or page:** [Convergence of Peter--Weyl Truncations of Compact Quantum Groups](https://arxiv.org/abs/2409.16698). It says: “We prove convergence of such nets in terms of Kerr's complete Gromov–Hausdorff distance. An important tool is the choice of an appropriate state whose induced slice map gives an approximate inverse of the compression map C(𝔾) ∋ a ↦ PaP in Lip-norm.”

**Sources:**

- [Malte Leimbach, Convergence of Peter–Weyl truncations of compact quantum groups, Journal of Noncommutative Geometry (2025)](https://doi.org/10.4171/jncg/634)

### Product Dirac operators add summability exponents

**Remember:** The Pauli matrices cancel the mixed terms in the square.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** The product of self-adjoint operators D and E with compact resolvent is the closure of D ⊗ 1 ⊗ σ + 1 ⊗ E ⊗ τ, where σ and τ are self-adjoint 2 × 2 matrices that square to 1 and anticommute. Anticommutation cancels the mixed terms, so its square is D² ⊗ 1 + 1 ⊗ E², tensored with the identity matrix.

**Problem.** Call an operator p-summable when the eigenvalues of (1 + D²)⁻¹ raised to the power p/2 have finite sum. If D is p-summable and E is q-summable for positive p and q, their product operator is (p + q)-summable.

**How the definition helps.** The square shows that the product has eigenvalues ±√(x² + y²) for eigenvalues x of D and y of E (our own explanation). Since 1 + x² + y² is at least 1 + x² and at least 1 + y², its −(p+q)/2 power is at most (1 + x²)⁻ᵖᐟ²(1 + y²)⁻ᑫᐟ². So the double sum is at most twice the product of the two finite sums.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “is (p+q)-summable.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### Propinquity zero gives an isomorphism, unlike Rieffel's distance

**Remember:** A distance that sees products can tell an algebra from its opposite.

*Rules out counterexamples. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89. arXiv math.OA. Level 4: research.

**Definition.** Latrémolière's propinquity measures the distance between quantum metric spaces A and B by tunnels: a third quantum metric algebra with surjective \*-homomorphisms onto A and B whose Lip-norms are the quotient seminorms. The C-strongly Leibniz version uses only tunnels in that Leibniz class. Since tunnel maps are \*-homomorphisms, the distance sees products.

**Problem.** For each C ≥ 1, the C-strongly Leibniz propinquity is a metric on C-strongly Leibniz compact quantum metric spaces, up to full quantum isometry. So distance zero gives a \*-isomorphism that preserves the Lip-norms.

**How the definition helps.** Because tunnels use \*-homomorphisms, the full quantum isometry theorem recovers a multiplicative isomorphism at distance zero (our own explanation). Rieffel's order-unit distance sees only the ordered self-adjoint part with its seminorm, which is the same for an algebra and its opposite. So Phillips' algebra, which is not \*-isomorphic to its opposite, has Rieffel distance zero from it.

**Paper or page:** [The strongly Leibniz property and the Gromov--Hausdorff propinquity](https://arxiv.org/abs/2301.05692). It says: “For all C ≥ 1, the C-strongly Leibniz propinquity Λ\*SLC is a metric on 𝒮ℒC.”

**Sources:**

- [Konrad Aguilar, Stephan Ramon Garcia, Elena Kim and Frédéric Latrémolière, The strongly Leibniz property and the Gromov–Hausdorff propinquity, Journal of Mathematical Analysis and Applications 529 (2024)](https://doi.org/10.1016/j.jmaa.2023.127572)
- [Frédéric Latrémolière, The quantum Gromov–Hausdorff propinquity, Transactions of the AMS 368 (2016)](https://doi.org/10.1090/tran/6334)
- [N. Christopher Phillips, A simple separable C\*-algebra not isomorphic to its opposite algebra, Proceedings of the AMS 132 (2004)](https://doi.org/10.1090/s0002-9939-04-07330-7)

### Spectral action on a product space gives gravity plus Standard Model

**Remember:** Fluctuate the Dirac operator, and gauge fields come out of gravity.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 81T13, 81R60. arXiv math.MP, math.OA. Level 4: research.

**Definition.** An almost commutative geometry is the product of a spin manifold with a finite spectral triple. Its fluctuated spectral action is Tr f((D + A + JAJ⁻¹)/Λ), where gauge and Higgs fields enter as a self-adjoint one-form A, a finite sum of terms a\[D,b\], added to the Dirac operator. Here J is charge conjugation and Λ &gt; 0.

**Problem.** Take the Standard Model finite triple, with algebra ℂ ⊕ ℍ ⊕ M₃(ℂ), times a closed Riemannian spin four-manifold, and a smooth rapidly decreasing even cutoff f with nonzero relevant moments. As Λ grows, the fluctuated spectral action expands into the Einstein–Hilbert action, a cosmological term and the bosonic Standard Model Lagrangian with the Higgs potential.

**How the definition helps.** Gauge and Higgs fields are parts of the Dirac operator, so the one gravity functional Tr f(D/Λ) already contains their actions. The heat-kernel expansion of the trace extracts the terms, and the choice of the finite space fixes the particle content (our own).

**Wikipedia:** [Noncommutative standard model](https://en.wikipedia.org/wiki/Noncommutative_standard_model). It says: “The full Lagrangian (in Euclidean signature) of the Standard Model minimally coupled to gravity is obtained as pure gravity over that product space.”

**Sources:**

- [Ali H. Chamseddine and Alain Connes, The spectral action principle, Communications in Mathematical Physics 186 (1997)](https://doi.org/10.1007/s002200050126)

### Summability shows the free group C\*-algebra has no nontrivial projections

**Remember:** Tree commutators have finite rank, so the trace is an index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L80, 22D25. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The tree Fredholm module of a free group Fₙ comes from its action on its Cayley tree, and its commutators \[F,a\] have finite rank for a in the group algebra ℂFₙ. So it is 1-summable, meaning these commutators are trace class, and its index pairing is a trace formula, here the canonical trace τ (our own).

**Problem.** The reduced group C\*-algebra C\*ᵣ(Fₙ) of a free group has no projections other than 0 and 1 (Pimsner–Voiculescu). This follows because its canonical trace takes only integer values on K₀.

**How the definition helps.** 1-summability turns the index pairing into a trace formula, which for the tree module is τ, so τ(e) is a Fredholm index and an integer (our own summary of Connes). This passes from ℂFₙ to C\*ᵣ(Fₙ) through a smooth subalgebra with the same K-theory (our own). A projection has 0 ≤ τ(e) ≤ 1 and τ is faithful, so e = 0 or e = 1.

**Wikipedia:** [Kaplansky's conjectures](https://en.wikipedia.org/wiki/Kaplansky%27s_conjectures). It says: “The idempotent conjecture has a generalisation, the Kadison idempotent conjecture, also known as the Kadison–Kaplansky conjecture, for elements in the reduced group C\*-algebra.”

**Sources:** none listed. No primary source with a working link was found.

### The entropy of a free fermion state is a spectral action

**Remember:** Entropy adds over eigenvalues, so it is a spectral action.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 81T75, 82B10. arXiv math.MP, math.OA. Level 4: research.

**Definition.** A spectral action is a sum, over the eigenvalues of D with multiplicity, of one function evaluated at each eigenvalue, whenever the sum converges. Free fermion modes are independent, with occupation probability p(λ) = 1/(1 + exp(βλ)) at energy λ and inverse temperature β &gt; 0, so their entropy is such a sum of binary entropies.

**Problem.** A free fermion Gibbs state with finite entropy and zero chemical potential has entropy Tr h(βD), where h(x) = log(1 + e⁻ˣ) + x/(1 + eˣ). Under the heat-trace expansion and remainder bounds that allow termwise integration against the entropy kernel, this entropy has an expansion as β decreases to zero.

**How the definition helps.** Entropy adds over independent modes, so it is a sum of binary entropies, one per eigenvalue (our own zero-chemical-potential calculation). Substituting p(λ) into −p log p − (1−p) log(1−p) gives h(βλ). Writing h through the heat kernel then carries the heat expansion over to the entropy under the stated bounds.

**Paper or page:** [Second Quantization and the Spectral Action](https://arxiv.org/abs/1903.09624). It says: “For μ&lt;0 we then have the following expansion for the entropy: 𝒮(ρf) = Tr(hβμ(βD))”

**Sources:**

- [Ali H. Chamseddine, Alain Connes and Walter D. van Suijlekom, Entropy and the spectral action, Communications in Mathematical Physics 373 (2019)](https://doi.org/10.1007/s00220-019-03297-8)
- [Rui Dong, Masoud Khalkhali and Walter D. van Suijlekom, Second quantization and the spectral action, Journal of Geometry and Physics 167 (2021)](https://doi.org/10.1016/j.geomphys.2021.104285)

### The spectral action reduces to the Einstein–Hilbert action on manifolds

**Remember:** Sum a smooth cutoff over the rescaled Dirac eigenvalues.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 58J35, 81T75. arXiv math.MP, math.DG. Level 4: research.

**Definition.** The spectral action of a Dirac operator D is Tr f(D/Λ), for a positive even Schwartz function f and an energy scale Λ &gt; 0. It counts the eigenvalues of D up to about Λ with smooth weights, so it depends only on the spectrum.

**Problem.** For the Dirac operator of a closed spin 4-manifold, Tr f(D/Λ) has an expansion as Λ → ∞. Up to constants that depend on f, its Λ⁴ term is the volume and its Λ² term is the integral of the scalar curvature.

**How the definition helps.** Since f is even, Tr f(D/Λ) is a function of D², and its large-Λ expansion comes from the heat-kernel coefficients of D² (our own). The first coefficient gives the volume, and the Lichnerowicz formula D² = ∇\*∇ + R/4 puts the scalar curvature R into the second (our own).

**nLab:** [spectral action](https://ncatlab.org/nlab/show/spectral+action). It says: “And indeed, on spectral triples corresponding to ordinary Riemannian geometry the spectral action reduces to the Einstein-Hilbert action plus a series of integrals over higher curvature invariants.”

**Sources:**

- [Ali H. Chamseddine and Alain Connes, The spectral action principle, Communications in Mathematical Physics 186 (1997)](https://doi.org/10.1007/s002200050126)

### Tame estimates permit local inversion

**Remember:** Control the loss of derivatives before trying to invert the map.

*Makes the theorem clean to state or prove.* MSC 58C15 (Implicit function theorems; global Newton methods on manifolds), 58B10. arXiv math.FA, math.DG. Level 4: research.

**Definition.** On smooth periodic functions, let ‖f‖ₙ be the largest absolute value of f and its first n derivatives. A map P is tame if it loses at most a fixed number r of derivatives: locally ‖P(f)‖ₙ ≤ Cₙ(1 + ‖f‖ₙ₊ᵣ) for all large n. A smooth tame map has such bounds for itself and all its derivatives.

**Problem.** A smooth tame map between open sets of smooth periodic functions has smooth tame local inverses if its derivatives have smoothly tame inverses. This condition concerns the map sending a base function and a right-hand side to the solution of the linearized equation.

**How the definition helps.** Smooth tameness turns the loss of derivatives into a fixed shift r in the estimates (our own explanation). Hamilton's Nash–Moser inverse function theorem uses smoothing operators to make up this fixed loss at each Newton step, and gives the local inverse.

**Wikipedia:** [Nash–Moser theorem](https://en.wikipedia.org/wiki/Nash%E2%80%93Moser_theorem). It says: “Then P is locally invertible, and each local inverse P⁻¹ is a smooth tame map.”

**Sources:**

- [Richard S. Hamilton, The Inverse Function Theorem of Nash and Moser (1982)](https://www.ams.org/bull/1982-07-01/S0273-0979-1982-15004-2)

### Diffeomorphisms integrate time-dependent fields

**Remember:** Solve the flow one particle at a time.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** A Lie group is regular if each smooth curve X(t) in its Lie algebra, the tangent space at the identity, integrates: some curve g(t) from the identity has velocity X(t) after right translation back to the identity, and g(1) depends smoothly on X. For diffeomorphisms, X is a time-dependent vector field and g(t) is its flow.

**Problem.** The smooth diffeomorphism group of a closed finite-dimensional manifold is regular.

**How the definition helps.** For Diff(M), regularity asks for flows of time-dependent vector fields, which an ordinary differential equation gives one point at a time. Compactness of M makes the flow exist for all t in \[0,1\] (our own account). Smooth dependence of solutions on parameters gives smooth dependence of g(1) on X, which is the curve test for smoothness.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “For each compact manifold M, the diffeomorphism group Diff(M) is a regular Lie group.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Extra Sobolev derivatives permit smooth inversion

**Remember:** Spend one input derivative for each derivative of inversion.

*Rules out counterexamples.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** On a closed n-manifold, the group 𝒟ˢ consists of the diffeomorphisms that, with their inverses, have square-integrable weak derivatives through order s, for an integer s &gt; n/2 + 1. Differentiating φ⁻¹ in φ produces a factor D(φ⁻¹), so each derivative of inversion uses up one spatial derivative (our own).

**Problem.** For each nonnegative integer k, inversion from order s + k to order s is k times continuously differentiable.

**How the definition helps.** Each derivative of inversion contains a spatial derivative of the inverse, so the k extra input derivatives pay for k derivatives of inversion (our own). The loss is real: on the circle, rotating the output of φ translates the argument of φ⁻¹, and differentiating a translation in the order-s norm needs one more derivative. Sobolev estimates for composition prove the positive result.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “𝒟ˢ⁺ᵏ(M) → 𝒟ˢ(M) ; ϕ ↦ ϕ⁻¹ is Cᵏ-smooth.”

**Sources:**

- [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278)

### Fixed volume gives a retract

**Remember:** Diffeomorphisms map onto a convex set of volume forms.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** Send each orientation-preserving diffeomorphism φ to the pullback φ∗μ of a fixed positive volume form μ. The image is the convex set of positive forms with the same total volume as μ (by Moser's theorem, our own), and the μ-preserving subgroup is the part sent to μ.

**Problem.** On a closed connected oriented manifold, the orientation-preserving diffeomorphism group deforms continuously onto the μ-preserving subgroup while fixing that subgroup throughout.

**How the definition helps.** The positive forms of fixed total volume form a convex set, which contracts to μ along straight lines. Moser's construction picks, continuously in the form ν, a diffeomorphism ψ(ν) with ψ(ν)∗μ = ν and ψ(μ) the identity (our own proof). Then φ = (φ ∘ ψ⁻¹) ∘ ψ with ψ = ψ(φ∗μ) and φ ∘ ψ⁻¹ preserving μ, and moving the form to μ deforms ψ to the identity while the first factor stays fixed.

**nLab:** [volume preserving diffeomorphism](https://ncatlab.org/nlab/show/volume+preserving+diffeomorphism). It says: “This inclusion is a weak homotopy equivalence, in fact a deformation retract.”

**Sources:**

- [Jürgen Moser, On the Volume Elements on a Manifold (1965)](https://doi.org/10.1090/S0002-9947-1965-0182927-5)

### Invariant charts model bundle automorphisms

**Remember:** Equivariant coordinates turn a commuting map into an invariant field.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** A principal bundle automorphism is a diffeomorphism Φ of the total space that commutes with the group action: Φ(pg) = Φ(p)g for all points p and group elements g. In exponential charts of a G-invariant metric, Φ near the identity comes from a vector field, and Φ commutes with G exactly when that field is G-invariant (our own).

**Problem.** For a compact structure group and closed base, bundle automorphisms form a closed smooth subgroup of all diffeomorphisms of the total space. Its tangent vectors at the identity are exactly the smooth vector fields preserved by the structure group.

**How the definition helps.** A G-invariant metric, which averaging over the compact group supplies, makes G map geodesics to geodesics, so commuting with G becomes invariance of the vector field (our own proof). Averaging also projects onto invariant fields, which form a closed linear subspace, so the automorphisms form a closed smooth subgroup.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “is a closed tame Fréchet Lie subgroup of Diff(P)”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Orientation covers carry fluid geodesics

**Remember:** The fixed set of a symmetry is totally geodesic.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** The orientation cover of a manifold has two points over each point, one for each local orientation, exchanged by an involution σ. The lifted volume-preserving group consists of the volume-preserving diffeomorphisms of the cover that commute with σ, that is, the fixed points of conjugation by σ.

**Problem.** For a closed nonorientable Riemannian manifold, the lifted volume-preserving group is totally geodesic for the cover’s kinetic-energy metric. Every geodesic starting tangent to that subgroup stays in it while it exists.

**How the definition helps.** Conjugation by σ preserves the kinetic-energy metric, and its fixed set is the lifted group (our own proof). A geodesic starting tangent to that set and its conjugate share initial data, so uniqueness for the fluid equation makes them equal. So the geodesic stays in the lifted group.

**Paper or page:** [Curvature of Measure-Preserving Diffeomorphism Groups of Non-Orientable Surfaces](https://arxiv.org/abs/2501.06599). It says: “is a totally geodesic submanifold”

**Sources:**

- [Curvature of Measure-Preserving Diffeomorphism Groups of Non-Orientable Surfaces](https://arxiv.org/abs/2501.06599)

### Slices keep asymmetry open

**Remember:** On a slice, nearby symmetries can only come from old ones.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** A slice at a configuration is a local submanifold through it, preserved by its stabilizer (the transformations fixing it), whose translates fill a neighborhood, such that only stabilizer elements move the slice to meet itself. So every symmetry of a configuration on the slice already fixes the original configuration.

**Problem.** Consider a Riemannian metric and a principal bundle connection over a closed manifold, with compact structure group. Pairs fixed only by the identity bundle automorphism form an open set.

**How the definition helps.** If the original pair has trivial stabilizer, so does every pair on the slice, and so does every translate, whose stabilizer is a conjugate (our own proof). The slice theorem for metrics and connections supplies such a slice, and its translates form an open neighborhood.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “The subset of elements of Conf(P) with a trivial symmetry group is open in Conf(P).”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Smooth curves keep compact support

**Remember:** In compact-support charts, bounded families share one compact support.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds), 46A13. arXiv math.DG. Level 4: research.

**Definition.** A compactly supported diffeomorphism equals the identity outside some compact set. Its group is modeled on compactly supported vector fields with the inductive limit topology, the finest locally convex topology in which each space of fields supported in a fixed compact set includes continuously. In this topology every bounded set lies in one fixed-support space.

**Problem.** For a smooth curve of compactly supported diffeomorphisms on a second-countable finite-dimensional manifold, one compact set contains every support on a compact time interval.

**How the definition helps.** A smooth curve on a compact time interval has bounded image in each chart, so its chart vectors share one compact support (our own proof). Finitely many charts cover the interval, and the union of their supports with those of the chart centers is compact.

**nLab:** [compactly supported mapping space](https://ncatlab.org/nlab/show/compactly+supported+mapping+space). It says: “on those maps that have compact support.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Sobolev inverses restrict to smooth data

**Remember:** If the inverses agree on every level, they agree on the intersection.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** For each integer s &gt; 2, let Gˢ be the group of Hˢ volume-preserving diffeomorphisms of the flat two-torus. The smooth group is the intersection of all Gˢ, with the topology induced by all the inclusions, so inverses that agree on every Gˢ restrict to an inverse on it (our own).

**Problem.** For the kinetic-energy metric, the map taking a small initial velocity to its geodesic endpoint at time one has a local inverse. Both maps are continuously differentiable in the Fréchet sense on smooth data.

**How the definition helps.** The regularity theorem for the Euler exponential on the torus gives a local inverse on each Gˢ on one common neighborhood, and shows that it preserves higher regularity in both directions (our own explanation). These inverses agree, so they restrict to the intersection. The derivative estimates on every level give continuous differentiability in the smooth topology.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “admits a well-defined exponential map which is a local C¹ꜰ-diffeomorphism at the identity.”

**Sources:**

- [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278)

### Normal graphs chart unparametrized submanifolds

**Remember:** Keep the normal displacement and discard the change of labels.

*Makes the theorem clean to state or prove.* MSC 58D10 (Spaces of embeddings and immersions), 58D05. arXiv math.DG. Level 4: research.

**Definition.** Near a fixed compact embedded submanifold, a normal graph moves each point by a short normal vector, using a tubular neighborhood. Each nearby image, an unparametrized submanifold, is the graph of exactly one small normal field, and that field picks one parametrization of it.

**Problem.** Smooth embeddings of a closed manifold into a finite-dimensional manifold form a principal bundle over their images. Locally each embedding corresponds smoothly to an image and a diffeomorphism of the source.

**How the definition helps.** Each nearby image gets one chosen parametrization from its normal field, so any embedding with that image differs from it by a unique diffeomorphism of the source. Tubular coordinates and smooth inversion of diffeomorphisms make both factors depend smoothly on the embedding (our own account).

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “is a principal fiber bundle”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Local additions make spaces of smooth maps manifold-like

**Remember:** Each tangent vector v points to a nearby point η(v).

*True by definition. Confidence: medium.* MSC 58D15 (Manifolds of mappings), 46T10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on a smooth space X is a smooth map η: TX → X that moves each point x along each tangent vector v at x to η(v), with ηₓ(0) = x and identity derivative there. The map v ↦ (π(v), η(v)), with π the tangent projection, must identify TX diffeomorphically with an open neighborhood of the diagonal in X × X.

**Problem.** If X admits a local addition and S is smoothly compact, C∞(S,X) admits a local addition. Its tangent bundle identifies with C∞(S,TX).

**How the definition helps.** The local addition identifies the tangent bundle of C∞(S,X) with C∞(S,TX) (our own explanation). Applying C∞(S, −) to η and to the map v ↦ (π(v), η(v)) then gives a local addition on the mapping space. Smooth compactness of S, meaning C∞(S,U) is open in C∞(S,Y) for every smooth space Y and open U ⊆ Y, keeps the diagonal neighborhood open.

**nLab:** [locally additive space](https://ncatlab.org/nlab/show/locally+additive+space). It says: “Let X be a locally kinematic space and S a smoothly compact space. Then C∞(S,X) is again a locally kinematic space.”

**Sources:** none listed. No primary source with a working link was found.

### Postcomposition is smooth

**Remember:** Charts are vector fields along maps; composition acts pointwise.

*Makes the theorem clean to state or prove.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on M is a smooth map η from a neighborhood of the zero section in TM to M, sending each small tangent vector v at x to a nearby point η(v), with η(0ₓ) = x. The map v ↦ (base point of v, η(v)) must be a diffeomorphism onto a neighborhood of the diagonal. It gives charts on C∞(X,M) in which a map near g is a small vector field along g.

**Problem.** Let X be a closed manifold and let M and N be smooth manifolds with local additions. Each smooth map f from M to N induces a smooth map g ↦ f ∘ g on smooth maps from X.

**How the definition helps.** In these charts, g ↦ f ∘ g acts on a vector field along g one point at a time, by a smooth fiber map (our own explanation). A smooth fiber-preserving map acts smoothly on spaces of smooth sections over a closed manifold, so postcomposition is smooth.

**Paper or page:** [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587). It says: “If f : M → N is smooth, then the pushforward f∗ : C∞(X,M) → C∞(X,N), f∗(g) = f ∘ g, is smooth.”

**Sources:**

- [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587)

### Submersions lift to mapping spaces

**Remember:** Match the charts so projection acts one tangent vector at a time.

*Makes the theorem clean to state or prove.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** Local additions η on M and θ on N are compatible with p: M → N if p(η(v)) = θ(Tp(v)) near the zero section, so p carries η-charts to θ-charts. Each local addition sends a zero vector to its base point and, paired with the tangent projection, is a diffeomorphism onto a diagonal neighborhood.

**Problem.** Let p be a smooth surjective submersion between Banach manifolds admitting smooth partitions of unity. For every closed manifold X, composition g ↦ p ∘ g is a submersion on smooth maps from X.

**How the definition helps.** In compatible charts, g ↦ p ∘ g becomes the linear map that applies Tp to a vector field along g, and Tp is surjective at each point. The work is to build compatible additions and a smooth linear right inverse of this map (our own account).

**Paper or page:** [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587). It says: “If p : M → N is a smooth surjective submersion, then the pushforward p∗ : C∞(X,M) → C∞(X,N), p∗(f) = p ∘ f is a submersion.”

**Sources:**

- [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587)

### Coincident genus levels force critical pairs

**Remember:** Repeated levels concentrate genus on the critical set.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 4: research.

**Definition.** The genus of a symmetric set A not containing 0 is the least k such that a continuous odd map, h(−x) = −h(x), sends A into ℝᵏ minus 0; it is 0 for the empty set and infinite if no k works. Removing a set of genus r lowers the genus by at most r (our own). The kth genus level is the infimum, over compact symmetric sets avoiding 0 with genus at least k, of the maximum of f on the set.

**Problem.** For an even continuously differentiable Hilbert space function f, suppose genus levels k through k+r coincide at finite c &lt; f(0). If every sequence with values approaching c and derivatives approaching zero has a convergent subsequence, the critical set there has genus at least r+1.

**How the definition helps.** If levels k to k+r agree at c, take a test set of genus at least k+r whose maximum is near c (our own). If the critical set at c had genus at most r, removing a symmetric neighborhood of the same genus would leave genus at least k (our own). An odd deformation, available by the compactness condition, would then push the rest below c, contradicting the kth level (our own).

**Paper or page:** [Existence of Eigenvalues for Anisotropic and Fractional Anisotropic Problems via Ljusternik-Schnirelmann Theory](https://arxiv.org/abs/2309.14301). It says: “such that φ(u) = c has genus ≥ k + 1.”

**Sources:**

- [I. Ceresa Dussel, J. Fernandez Bonder, Existence of Eigenvalues for Anisotropic and Fractional Anisotropic Problems via Ljusternik-Schnirelmann Theory](https://arxiv.org/abs/2309.14301)
- [Charles V. Coffman, A minimum-maximum principle for a class of non-linear integral equations (1969)](https://doi.org/10.1007/BF02786802)

### Homotopy-stable families localize minimax sequences

**Remember:** Deformations keep tests in the family, so the barrier still catches them.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 4: research.

**Definition.** A homotopy-stable family with boundary B is a collection of nonempty compact test sets containing a closed set B, preserved by every continuous deformation that starts at the identity and fixes B. For a continuously differentiable f on a complete connected Riemannian Hilbert manifold, its minimax value c is the finite infimum over tests of the maximum of f.

**Problem.** Suppose a closed set F meets every test outside B and sup f(B) ≤ c ≤ inf f(F). For tests Aₙ with maxima approaching c, there are xₙ approaching F and Aₙ in distance, with f(xₙ) → c and ‖df(xₙ)‖ → 0.

**How the definition helps.** Deformations fixing B keep tests in the family, so every deformed test still meets F outside B (our own). If no points near F and a nearly optimal test had f near c and small derivative, the localized deformation lemma would push the test below c near F (our own). The deformed test still meets F, where f ≥ c, which is a contradiction (our own).

**Paper or page:** [Normalized solutions to a class of Kirchhoff equations with Sobolev critical exponent](https://arxiv.org/abs/2103.08106). It says: “Let φ be a C¹-functional on a complete connected C¹-Finsler manifold X and consider a homotopy-stable family ℱ with an extended closed boundary B.”

**Sources:**

- [Gongbao Li, Xiao Luo, Tao Yang, Normalized solutions to a class of Kirchhoff equations with Sobolev critical exponent](https://arxiv.org/abs/2103.08106)

### Morse–Bott perturbations add indices

**Remember:** Normal and tangent negative directions count separately.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 4: research.

**Definition.** A critical submanifold is Morse–Bott if the Hessian, the second derivative, has kernel exactly its tangent space and is invertible on normal directions. So the Hessian sees only normal directions, and its index, the largest dimension on which it is negative definite, is a normal index.

**Problem.** Near a compact Morse–Bott critical submanifold of finite index in Hilbert space, add a small positive multiple of a smooth function of nearest-point projection. At each nondegenerate critical point of the added function on the submanifold, the new index equals the normal index plus its tangent index.

**How the definition helps.** Nearest-point projection makes the added function's Hessian act only on tangent directions at its critical points, while the original Hessian acts only on normal directions, so the negative dimensions add (our own). The perturbation theorem gives a neighborhood where these are all the critical points, when the added function has nondegenerate critical points on the submanifold (our own).

**Paper or page:** [Morse theory for the Allen-Cahn functional](https://arxiv.org/abs/2310.17096). It says: “the Morse index of fδ at any x₀ ∈ C is ind(f,x₀) + ind(gᵢ,x₀)”

**Sources:**

- [Jingwen Chen, Pedro Gaspar, Morse theory for the Allen-Cahn functional](https://arxiv.org/abs/2310.17096)

### Bott twists split iteration indices

**Remember:** An iterate splits into one sector for each root of unity.

*True by definition.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 4: research.

**Definition.** For a unit complex number z, the z-twisted index of a closed geodesic counts the negative directions of the energy's second derivative on complex variation fields over one period with V(1) = zV(0). When zᵐ = 1, these fields are the variations of the m-fold iterate on which the shift by one period acts as multiplication by z (our own).

**Problem.** The index of a closed geodesic traversed m times equals the sum of its twisted indices over all mth roots of unity.

**How the definition helps.** The shift by one period has order m on the variations of the m-fold iterate, so they split into its eigenspaces, one for each mth root of unity z (our own). The energy Hessian commutes with the shift, and on the z-eigenspace it is a positive multiple of the z-twisted one-period form (our own). So the negative dimensions add over the roots of unity (our own).

**Wikipedia:** [Closed geodesic](https://en.wikipedia.org/wiki/Closed_geodesic). It says: “If γ is a critical point of E, so are the reparametrized curves γᵐ, for each m ∈ ℕ, defined by γᵐ(t) := γ(mt).”

**Sources:**

- [Raoul Bott, On the iteration of closed geodesics and the Sturm intersection theory (1956)](https://doi.org/10.1002/cpa.3160090204)

### Negative bundles describe sublevel crossings

**Remember:** One negative disk at each critical loop replaces one cell.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 4: research.

**Definition.** A Morse–Bott family of critical loops has energy Hessian whose kernel is exactly tangent to the family and which is invertible on normal directions. Its negative bundle assigns to each loop the normal directions where the Hessian is negative, a vector bundle of rank λ whose disks are attached when energy crosses the level (our own).

**Problem.** Suppose a single compact Morse–Bott component accounts for all critical loops at an isolated energy level on a closed Riemannian manifold. With coefficients modulo two, relative homology across that level in degree j equals the component’s homology in degree j−λ, where λ is the negative rank.

**How the definition helps.** Crossing the level attaches the disk bundle of the negative bundle along its sphere bundle, by the Morse–Bott attachment theorem (our own). So relative homology across the level is the homology of the disk bundle modulo its boundary (our own). The Thom isomorphism shifts this by λ, with no orientation needed for coefficients modulo two (our own).

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “the kernel of the Hessian at a critical point equals the tangent space to the critical submanifold.”

**Sources:**

- [Raoul Bott, Nondegenerate Critical Manifolds (1954)](https://doi.org/10.2307/1969631)
- [Wolfgang Ziller, The free loop space of globally symmetric spaces (1977)](https://doi.org/10.1007/BF01390161)

### Bubble trees restore compactness

**Remember:** Keep each rescaled sphere as part of the limit.

*Makes the theorem clean to state or prove.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A harmonic bubble tree is a harmonic map on the original surface, a critical point of Dirichlet energy, together with finitely many harmonic spheres attached at points. The maps agree at each attachment point, and the energy of the tree is the sum of their energies.

**Problem.** Take a sequence of harmonic maps from a fixed closed Riemannian surface to a closed Riemannian manifold with uniformly bounded energies. After rescaling, a subsequence converges to a harmonic bubble tree whose energy equals the limit of its energies.

**How the definition helps.** The tree has a place for every piece of energy: the limit on the surface and the energy that appears only after rescaling (our own explanation). The compactness theorem extracts the spheres at the right scales (our own explanation). It also shows that the neck regions between scales lose no energy and leave no gaps in the image (our own explanation).

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “to a smooth harmonic bubble tree map”

**Sources:**

- [T. H. Parker, Bubble tree convergence for harmonic maps (1996)](https://doi.org/10.4310/jdg/1214459224)

### Curvature comparison makes boundary minimizers unique

**Remember:** Thin triangles make the midpoint of two maps cheaper.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A CAT(0) space is a complete space with shortest paths whose triangles are no fatter than flat ones. Any two points on the sides of a triangle are at most as far apart as the matching points on the Euclidean triangle with the same side lengths.

**Problem.** Fix boundary values on a bounded connected Riemannian domain with nonempty boundary locally given by Lipschitz graphs. Any two finite-energy maps minimizing Dirichlet energy into a CAT(0) space with these boundary values agree almost everywhere.

**How the definition helps.** Thin triangles make the midpoint of two maps cost less energy than their average, by a term in the gradient of their distance (our own explanation; the Korevaar–Schoen inequality quantifies it). Two minimizers cannot save energy, so their distance has zero gradient and vanishes at the boundary. For a spherical target, even smooth boundary data can admit distinct minimizers.

**Paper or page:** [Harmonic maps in singular geometry and rigidity](https://arxiv.org/abs/2510.13708v1). It says: “Then there exists a unique”

**Sources:**

- [N. J. Korevaar and R. M. Schoen, Sobolev spaces and harmonic maps for metric space targets (1993)](https://doi.org/10.4310/cag.1993.v1.n4.a4)
- [A. Detaille and K. Mazowiecka, Generic non-uniqueness of minimizing harmonic maps from a ball to a sphere](https://arxiv.org/abs/2403.12662v1)

### Half-harmonic maps become free boundary equations

**Remember:** Half-energy is the full energy of the harmonic extension.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.AP, math.DG. Level 4: research.

**Definition.** The half-energy of a circle-valued map u on ℝ is the Dirichlet energy ½∫\|∇U\|² of its Poisson extension U, the harmonic function on the upper half-plane with boundary values u. A finite-half-energy map is half-harmonic when every smooth compactly supported variation through circle-valued maps has zero first variation of half-energy.

**Problem.** A smooth map with finite half-energy is half-harmonic exactly when its extension’s outward normal derivative is perpendicular to the circle at each boundary value.

**How the definition helps.** Since U is harmonic, integration by parts turns the first variation into a boundary integral of the outward normal derivative of U against the variation (our own explanation). This vanishes for every tangent variation exactly when the derivative is perpendicular to the circle. The Fourier transform identifies this boundary derivative with the square root of the positive Laplace operator.

**Paper or page:** [Non-degeneracy and quantitative stability of half-harmonic maps from ℝ to 𝕊](https://arxiv.org/abs/2107.08521v1). It says: “Let U be the harmonic extension of u”

**Sources:** none listed. No primary source with a working link was found.

### Small energy excludes harmonic sphere bubbles

**Remember:** A nonconstant bubble costs at least one sphere energy gap.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** The sphere energy gap of a closed Riemannian target is the infimum of the energies of nonconstant harmonic spheres, maps from the round sphere that are critical points of Dirichlet energy, or infinity if there are none. Every bubble that forms in a limit of harmonic maps is such a sphere, so it costs at least the gap (our own).

**Problem.** Consider harmonic maps from a fixed closed Riemannian surface into that target. If their energies share a finite upper bound strictly below the sphere energy gap, a subsequence converges smoothly.

**How the definition helps.** An energy bound strictly below the gap leaves no room for even one bubble (our own explanation). The bubble compactness theorem therefore gives smooth convergence everywhere along a subsequence. At energy equal to the gap, conformal automorphisms of the round sphere can concentrate at one point.

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “There is a constant ε′₀ &gt; 0 depending only on (X,h)”

**Sources:**

- [T. H. Parker, Bubble tree convergence for harmonic maps (1996)](https://doi.org/10.4310/jdg/1214459224)

### Asking nondegeneracy only across orbits makes Morse theory work on stacks

**Remember:** Invariant functions are flat along orbits, so test only across them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 57R70. arXiv math.DG. Level 4: research.

**Definition.** A Lie groupoid morphism to ℝ is a smooth function on the base that is constant on each orbit, so its Hessian always vanishes along the orbit. It is Morse when, at each critical point, the Hessian is nondegenerate across the orbit, that is, its kernel is exactly the tangent space to the orbit.

**Problem.** Being a Morse Lie groupoid morphism is invariant under Morita equivalence. So Morse functions on differentiable stacks are well defined.

**How the definition helps.** The Morse condition only sees the normal space to the orbit, and Morita equivalence identifies these normal spaces and their Hessian forms at corresponding critical points (our own explanation). So nondegeneracy passes between all presentations of the stack.

**Paper or page:** [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594), [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594). It says: “In this paper we introduce Morse Lie groupoid morphisms and study their main properties. We show that this notion is Morita invariant which gives rise to a well defined notion of Morse function on differentiable stacks.”

**Sources:**

- [C. Ortiz and F. Valencia, Morse theory on Lie groupoids, arXiv:2207.07594 (2022)](https://arxiv.org/abs/2207.07594)

### Differentiable stacks make Morita equivalence of Lie groupoids plain equivalence

**Remember:** A groupoid is known by its principal bundles, like an algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18F20. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A Lie groupoid G presents the stack that sends each manifold S to the groupoid of principal G-bundles over S and their isomorphisms, with pullback along smooth maps. A differentiable stack is a stack equivalent to one of this form, so it sees G only through its principal bundles.

**Problem.** Lie groupoids with isomorphism classes of right-principal bibundles form a category equivalent to differentiable stacks with morphisms up to natural isomorphism. Two Lie groupoids are therefore Morita equivalent exactly when they present equivalent stacks.

**How the definition helps.** A bibundle, a space with compatible actions of both groupoids, turns principal bundles of one groupoid into principal bundles of the other, so it is a map of stacks (our own explanation). The equivalence of categories is cited to Blohmann and Carchedi. In our reading, a statement made about the stack, such as an orbifold invariant, therefore needs no separate check of Morita invariance.

**nLab:** [differentiable stack](https://ncatlab.org/nlab/show/differentiable+stack), [Lie groupoid](https://ncatlab.org/nlab/show/Lie+groupoid). It says: “This means that looking at a Lie groupoid in terms of the stack it presents provides a direct way to recognizing the right notion of equivalence of these objects.”

**Sources:**

- [Kai Behrend, Ping Xu, Differentiable stacks and gerbes, J. Symplectic Geom. 9 (2011) 285–341, arXiv:math/0605694](https://arxiv.org/abs/math/0605694)

### Loop transport takes values in a quotient group

**Remember:** Labels joined by an arrow give the same transport class.

*True by definition.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A crossed module is a Lie group homomorphism ∂: H → G with a smooth action of G on H by automorphisms, such that ∂(g·h) = g∂(h)g⁻¹ and ∂(h)·k = hkh⁻¹. Its strict Lie 2-group has objects g ∈ G and an arrow labelled h from g to ∂(h)g, so two objects are isomorphic exactly when they lie in the same coset of ∂(H).

**Problem.** For a quasi-principal 2-bundle with strict connection over a Lie groupoid, choosing a fiber object identifies thin loop transport values with elements of G/∂(H).

**How the definition helps.** Two labels in G describe isomorphic transports exactly when an arrow joins them, so only their coset modulo ∂(H) matters. The transport theorem constructs these transports for paths in the groupoid, modulo deformations that sweep out no area.

**Paper or page:** [Parallel transport on a Lie 2-group bundle over a Lie groupoid along Haefliger paths](https://arxiv.org/abs/2309.05355v1). It says: “the group Aut̅(𝔼) is isomorphic to the quotient group G/τ(H).”

**Sources:**

- [Chatterjee and Chaudhuri, Parallel transport on a Lie 2-group bundle over a Lie groupoid along Haefliger paths, Proposition 5.17](https://arxiv.org/abs/2309.05355v1)

### Cone ellipticity excludes critical weights

**Remember:** Choose a weight line that misses every root of the tip model.

*Rules out counterexamples.* MSC 58J05 (Elliptic equations on manifolds, general theory), 58J40. arXiv math.AP. Level 4: research.

**Definition.** An operator on a cone is cone elliptic at weight γ when its leading frequency symbol is invertible in the interior and after radial rescaling at the tip, and its tip model has no root on the weight line. The tip model freezes coefficients at the tip and replaces the radial derivative −t∂ₜ by a complex number z; it must be invertible for every z with Re z = d/2 − γ, where d is the cone dimension.

**Problem.** On a compact manifold with isolated cone tips, cone ellipticity makes an order-m cone differential operator Fredholm between the weighted Sobolev spaces. Its target has regularity s − m and weight γ − m when its domain has regularity s and weight γ.

**How the definition helps.** Roots of the tip model are powers of t that live at the tip and escape interior estimates (our own explanation). Keeping them off the weight line lets the tip model be inverted there. The cone inverse construction then leaves compact errors, giving closed range and finite-dimensional kernel and cokernel.

**Paper or page:** [A Short Introduction to the Analysis on Manifolds with Conical Singularities](https://arxiv.org/abs/2311.07746v2). It says: “In particular, A then is a Fredholm operator.”

**Sources:** none listed. No primary source with a working link was found.

### Support control closes the range

**Remember:** A preimage cannot be supported far from its image.

*Makes the theorem clean to state or prove.* MSC 58J05 (Elliptic equations on manifolds, general theory). arXiv math.AP. Level 4: research.

**Definition.** The transpose P\* is support convex when its solutions cannot spread far from their sources. For each compact set K there is a compact set L such that every compactly supported distribution v with P\*v supported in K is itself supported in L.

**Problem.** A second-order elliptic differential operator P has closed range on smooth functions if its transpose satisfies support convexity. Convergence here means uniform convergence of every derivative on compact sets.

**How the definition helps.** Support convexity confines every relevant preimage under P\* to one compact region L for each test region K. Ellipticity gives local regularity estimates on L (our own explanation). The functional analytic closed-range theorem turns these estimates and the support bound into closed range.

**Paper or page:** [Elliptic operators on non-compact manifolds have closed range](https://arxiv.org/abs/2203.07534v1). It says: “we see that M is P\*-convex. By Petersen’s functional analytic argument, it follows that P has closed range.”

**Sources:** none listed. No primary source with a working link was found.

### Averaged pullback preserves square integrability

**Remember:** Average a submersion instead of evaluating on a thin image.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 4: research.

**Definition.** For a smooth map f between closed oriented Riemannian manifolds, the Hilsum–Skandalis pullback averages a form over a small tangent disk centred at each image point f(x), instead of evaluating it at f(x). It pulls the form back through the exponential map on these disks, multiplies by a smooth closed form supported in the disk bundle with integral one on each disk, and integrates over each disk.

**Problem.** The Hilsum–Skandalis pullback gives a bounded operator on square-integrable forms and commutes with the exterior derivative on smooth forms.

**How the definition helps.** Averaging avoids evaluating a square-integrable form only on the image of f, which may have measure zero. The exponential map from the disk bundle to the target has surjective derivative, so with compact support it bounds the integral (our own explanation). The averaging form is closed, so Stokes’ theorem makes the pullback commute with the exterior derivative.

**Paper or page:** [Stability of L²-invariants on stratified spaces](https://arxiv.org/abs/2310.05721v3). It says: “are well-defined and extend to bounded maps on the corresponding L² completions”

**Sources:** none listed. No primary source with a working link was found.

### Symbol exactness makes de Rham elliptic

**Remember:** Elliptic means the symbols form an exact sequence at every nonzero covector.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A differential complex is elliptic when its leading symbols form an exact sequence at every nonzero covector: each symbol image equals the next symbol kernel, including the zero spaces at the ends. The leading symbol keeps the highest-order derivatives and replaces differentiation in each coordinate by the corresponding covector component.

**Problem.** The de Rham complex, the sequence of exterior derivatives, is elliptic on any smooth manifold without boundary.

**How the definition helps.** The symbol of d at ξ is the exterior product ω ↦ ξ ∧ ω, so ellipticity means this product is exact for ξ ≠ 0 (our own). Choose a vector v with ξ(v) = 1 and let ι insert v into a form (our own). The identity ι(ξ ∧ ω) + ξ ∧ ιω = ω then writes every ω with ξ ∧ ω = 0 as ξ ∧ ιω (our own).

**nLab:** [elliptic chain complex](https://ncatlab.org/nlab/show/elliptic+chain+complex). It says: “Let X be a compact smooth manifold. Then the de Rham complex is an elliptic complex.”

**Sources:** none listed. No primary source with a working link was found.

### Witt links remove boundary modes

**Remember:** No middle link classes means no ambiguous boundary modes.

*Rules out counterexamples. Confidence: medium.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 4: research.

**Definition.** A cone tip satisfies the Witt condition when its link, the closed manifold forming the cross-section of the cone, has zero real cohomology in middle degree whenever the link is even-dimensional. Then the link has no middle-degree harmonic forms, the only ones that no shrinking of the link can free from needing boundary data at the tip (our own).

**Problem.** Consider a compact space with isolated exact cone tips and Witt links, with no other boundary. After sufficiently shrinking the link metrics, d + d⁎ on smooth forms supported away from the tips has a unique self-adjoint extension.

**How the definition helps.** Separation of variables on the cone shows that only middle-degree link harmonic forms and small link eigenvalues need boundary data at the tip (our own explanation). The Witt condition removes the first kind, and shrinking the links moves the nonzero eigenvalues out of that range. A torus link keeps its harmonic one-forms under every rescaling.

**Paper or page:** [Smooth atlas stratified spaces, K-Homology Orientations, and Gysin maps](https://arxiv.org/abs/2505.14952v1). It says: “satisfies the analytic Witt condition and therefore admits a closed self-adjoint extension”

**Sources:**

- [P. Albin, É. Leichtnam, R. Mazzeo, and P. Piazza, Hodge theory on Cheeger spaces (2018)](https://doi.org/10.1515/crelle-2015-0095)

### Witten deformation preserves de Rham cohomology

**Remember:** dₜ is d seen through the invertible weight exp(tf).

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.SP. Level 4: research.

**Definition.** The Witten differential is the exterior derivative d conjugated by multiplication by exp(tf): dₜω = exp(−tf)d(exp(tf)ω), for a smooth real function f and a real parameter t.

**Problem.** The Witten differential dₜ squares to zero. Its cohomology, the kernel modulo the preceding image, is isomorphic to de Rham cohomology.

**How the definition helps.** Since dₜ is a conjugate of d, its square is the conjugate of d² = 0 (our own). Multiplication by exp(−tf) is invertible and carries kernels and images of d to those of dₜ, so it gives the isomorphism (our own).

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “is a vector space isomorphism for all j = 0, ⋯, n.”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982)](https://doi.org/10.4310/jdg/1214437492)

### Boundary indices add by spectral flow

**Remember:** Counting crossings turns a cut in time into a sum.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J30, 58J32. arXiv math.SP. Level 4: research.

**Definition.** Spectral flow is the signed count of eigenvalues crossing zero along a continuous self-adjoint Fredholm path, computed as a sum over the pieces of a subdivision. Each piece has a cutoff a &gt; 0 that avoids the spectrum throughout it, with finite-rank spectral space for \[0,a\]. The piece contributes its final rank minus its initial rank of the spectral space for \[0,a).

**Problem.** For a continuously differentiable self-adjoint family A(t) with compact resolvent and common domain, let D = d/dt − iA(t) carry negative initial and nonnegative final spectral boundary conditions. If D is Fredholm on each subinterval, its index on \[r,t\] equals the sum of its indices on \[r,s\] and \[s,t\] for r ≤ s ≤ t.

**How the definition helps.** Spectral flow is a sum over pieces, so a subdivision containing s splits it into the flows on \[r,s\] and \[s,t\] (our own argument). Ronge proves that each boundary index equals the spectral flow under the stated hypothesis. This avoids gluing bases for the kernels and cokernels at the cut.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “ind((D\|\[r,t\])ₐₚₛ) = ind((D\|\[r,s\])ₐₚₛ) + ind((D\|\[s,t\])ₐₚₛ)”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Callias potentials restore Fredholmness

**Remember:** A potential dominating at infinity keeps zero off the essential spectrum.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J05. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let D be a Dirac operator on a Hermitian bundle over a complete Riemannian manifold, and Φ a self-adjoint potential whose commutator \[D, Φ\] is a bundle map. The Callias operator is the self-adjoint doubled operator with off-diagonal entries D + iΦ and D − iΦ, so its square is D² + Φ² ± i\[D, Φ\] on the diagonal (our own). Φ dominates at infinity if Φ² ≥ (‖\[D, Φ\]‖ + c)I outside a compact set, for some c &gt; 0.

**Problem.** If Φ dominates at infinity, the Callias operator is Fredholm. Domination everywhere makes it invertible, so in the odd symmetric case the parity index of its off-diagonal operator vanishes.

**How the definition helps.** Domination makes the square of the Callias operator at least c outside a compact set, so it is Fredholm (our own explanation; local compactness handles the compact set). Domination everywhere gives the bound globally and rules out a kernel for the operator and its adjoint (our own calculation). Our own counterexample is −i d/dx on ℝ, which is elliptic but has zero in its essential spectrum.

**Paper or page:** [On the Z<sub>2</sub>-valued index of elliptic odd symmetric operators on non-compact manifolds](https://arxiv.org/abs/2403.13999v3). It says: “If the essential support of F is empty, then indτ ℬ = 0.”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, On the ℤ₂-valued index of elliptic odd symmetric operators on non-compact manifolds (2024)](https://doi.org/10.1007/s40316-024-00228-5)

### Compact resolvent alone does not suffice

**Remember:** A lower bound makes the two negative spectral spaces finite.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J32. arXiv math.SP. Level 4: research.

**Definition.** Let A(t) be a continuously differentiable family of self-adjoint operators with compact resolvent and a common domain, on a compact interval. It is uniformly bounded below if A(t) ≥ cI for one real c and all t, so each A(t) has only finitely many negative eigenvalues (our own). The boundary operator D = d/dt − iA(t) takes initial values in the negative spectral space and final values in the nonnegative one.

**Problem.** If A is uniformly bounded below, the boundary operator D is Fredholm. Its index equals the spectral flow of A, the net number of eigenvalues crossing zero toward positive values.

**How the definition helps.** The lower bound makes each negative spectral space finite-dimensional (our own explanation). Ronge identifies the boundary index with the index of a map between these finite negative endpoint spaces and proves that it equals spectral flow. He also gives a compact-resolvent family without the lower bound whose boundary operator is not Fredholm.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “If A is uniformly bounded from below and sp(A) is discrete with only finite multiplicities, Dₐₚₛ is Fredholm”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Equivariant index forms pull back

**Remember:** One equivariant form gives the index form for every associated family.

*Makes the theorem clean to state or prove.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 19L10. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For an even graded geometric Dirac family with a compact Lie group G acting and preserving its data, the equivariant Chern character at scale t &gt; 0 is the even trace minus the odd trace of exp(−Bₜ²), where Bₜ is the equivariant Bismut superconnection. Being equivariant, it depends on a Lie algebra variable, for which the curvature of any connection can later be substituted (our own).

**Problem.** Every principal G-bundle with connection produces an associated family by twisting the original family by that bundle. The Chern–Weil map sends the equivariant Chern character at scale t to the associated family’s Bismut Chern character at the same scale.

**How the definition helps.** The Chern–Weil map substitutes a chosen connection and its curvature for the Lie algebra variable, so one equivariant form gives the index form of every associated family. Wedeen proves that this substitution gives the geometric superconnection of the associated family. Our own comparison uses that the construction respects the heat operator and graded trace.

**Paper or page:** [Equivariant Chern Weil Forms and The Families Index Theorem](https://arxiv.org/abs/2208.05521v1). It says: “f<sub>S</sub><sup>\\ast</sup> \\operatorname{ch}(\\mathbb B<sup>t<sub>G</sub></sup>) = \\operatorname{ch}(\\mathbb B<sup>t<sub>Q</sub></sup>)”

**Sources:**

- [Richard Wedeen, Equivariant Chern Weil Forms and The Families Index Theorem (2022)](https://arxiv.org/abs/2208.05521v1)

### Flat twists give bordism characters

**Remember:** Subtract equal ranks and the local index term disappears.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For two equal-rank flat Hermitian bundles on a closed odd-dimensional Riemannian spin manifold, the reduced eta difference is ξ(D₁) − ξ(D₂) in ℝ/ℤ, where D₁ and D₂ are the twisted spin Dirac operators and ξ(D) = (η(D) + dim ker D)/2. Equal rank and flatness give the two operators the same local index density, so the difference carries no curvature term (our own).

**Problem.** This difference defines a homomorphism from spin bordism with the two specified flat bundles to ℝ/ℤ. Here a bordism must extend the spin structure and both flat connections, and addition means disjoint union.

**How the definition helps.** On a spin bordism the two local index integrals cancel, so the Atiyah–Patodi–Singer theorem makes the total reduced eta difference on its oriented boundary an integer (our own argument). Bordant manifolds therefore have the same difference in ℝ/ℤ. Disjoint union adds spectra and hence adds the differences.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Heat supertraces give Lefschetz numbers

**Remember:** Positive heat modes form exact complexes and cancel in the supertrace.

*True by definition. Confidence: medium.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.AP, math.DG. Level 4: research.

**Definition.** The Lefschetz number of a map commuting with the differential of a complex is its alternating trace on cohomology. Its heat supertrace is the alternating trace on forms of heat evolution followed by the map, which weights each Laplacian eigenspace by exp(−tλ).

**Problem.** For a geometric lift commuting with a first-order elliptic complex on a closed manifold, the heat supertrace equals the Lefschetz number at every positive time.

**How the definition helps.** On each Laplacian eigenspace with λ &gt; 0, the identity dd⁎ + d⁎d = λ makes the complex exact, so the alternating trace of the lift, projected back onto that eigenspace, vanishes (our own proof). Only the harmonic forms remain, and they represent cohomology. Elliptic heat theory justifies summing these traces.

**Wikipedia:** [Atiyah–Bott fixed-point theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott_fixed-point_theorem). It says: “the alternating sum of its traces on each graded part of the homology of the elliptic complex.”

**Sources:**

- [M. F. Atiyah and R. Bott, A Lefschetz Fixed Point Formula for Elliptic Complexes: I (1967)](https://doi.org/10.2307/1970694)

### Nondegenerate points give finite weights

**Remember:** Require invertibility before dividing by the fixed-point determinant.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.AP, math.DG. Level 4: research.

**Definition.** A fixed point x of a smooth map f is nondegenerate when I − Df is invertible on the tangent space at x, so det(I − Df) is nonzero there.

**Problem.** Let a geometric lift of f, one that pulls sections back along f and applies a bundle map in each degree, commute with an elliptic complex on a closed manifold. If all fixed points are nondegenerate, its alternating cohomology trace equals the sum of alternating fiber traces divided by \|det(I − Df)\| at those points.

**How the definition helps.** Nondegeneracy makes each denominator nonzero and each fixed point isolated, so compactness makes the sum finite. Our own counterexample is the identity map on a circle, where every point is fixed and every denominator vanishes. The Atiyah–Bott theorem identifies the local sum with the trace on cohomology.

**Wikipedia:** [Atiyah–Bott fixed-point theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott_fixed-point_theorem). It says: “the non-vanishing of this is a consequence of transversality”

**Sources:**

- [M. F. Atiyah and R. Bott, A Lefschetz Fixed Point Formula for Elliptic Complexes: I (1967)](https://doi.org/10.2307/1970694)

### Spectral cutoffs handle jumping kernels

**Remember:** A cutoff avoids only its own level, not zero crossings.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J35. arXiv math-ph, math.AT. Level 4: research.

**Definition.** For a degree-zero 1\|1-dimensional Euclidean field theory with smooth index bundles in the sense of Berwick-Evans, and λ &gt; 0, the cutoff bundle collects the eigenspaces of the squared generator below λ wherever λ avoids the spectrum. It has locally constant rank even where eigenvalues cross zero, since it only asks λ to avoid the spectrum. The cutoff partition form is the partition form of the theory restricted to this bundle.

**Problem.** On this open set, Z minus the cutoff partition form equals the exterior derivative of a differential form. The two closed forms therefore represent the same de Rham cohomology class.

**How the definition helps.** Constant rank lets the cutoff bundle carry the low modes smoothly where the kernel jumps. Our own example is a two-state odd supercharge with off-diagonal entries t: its kernel jumps at t = 0, but near t = 0 its cutoff bundle is the whole two-state space. The cutoff theorem gives the discarded contribution as the exterior derivative of an eta form.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “The partition function of E and the partition function of the λ-cutoff theory are related by”

**Sources:**

- [Daniel Berwick-Evans, The families analytic index for 1∣1-dimensional Euclidean field theories (2023)](https://arxiv.org/abs/2303.09207v1)

### Spectral sections require zero index

**Remember:** Allow changes near zero, but keep the signs far from zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J30. arXiv math.DG. Level 4: research.

**Definition.** A spectral section of a self-adjoint family is a smooth family of orthogonal projections that agrees with the positive spectral projection far from zero. For some cutoff R &gt; 0 it keeps every eigenvector above R and discards every eigenvector below −R, and between −R and R it can vary.

**Problem.** Over a compact base, a smooth Dirac family on closed odd-dimensional spin fibers admits a spectral section exactly when its odd family index vanishes.

**How the definition helps.** A spectral section is one continuous global choice of the positive part of the spectrum, with freedom near zero (our own explanation). The Melrose–Piazza spectral section theorem shows that the odd family index is exactly the obstruction to that choice.

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Sources:**

- [Melrose and Piazza, Families of Dirac operators, boundaries and the b-calculus (1997)](https://math.mit.edu/~rbm/papers/fdobbc.abstract/fdobbc.abstract.html)

### The heat supertrace counts index

**Remember:** Subtract the odd trace and every positive eigenvalue cancels.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.SP. Level 4: research.

**Definition.** Split the space of sections into even and odd parts. For an operator that preserves both parts and has a trace on each, the supertrace is the even trace minus the odd trace, so any contribution shared equally by the two parts cancels (our own).

**Problem.** Let D be a self-adjoint Dirac operator exchanging even and odd sections on a closed Riemannian manifold. For every t &gt; 0, the supertrace of exp(−tD²) equals the index of the even-to-odd part of D, the number of even minus odd zero modes (vectors killed by D).

**How the definition helps.** D maps the even and odd sides of each positive eigenvalue of D² bijectively onto each other, because its square is a nonzero scalar there, so their heat contributions cancel (our own). The unmatched zero eigenspaces give the difference of kernel dimensions (our own).

**Paper or page:** [Some Modifications of Getzler's Grading technique](https://arxiv.org/abs/2201.00379v1). It says: “In particular, the supertrace of the heat kernel is constant in t.”

**Sources:**

- [H. P. McKean Jr. and I. M. Singer, Curvature and the eigenvalues of the Laplacian (1967)](https://doi.org/10.4310/jdg/1214427880)
- [Peter B. Gilkey, Curvature and the eigenvalues of the Laplacian for elliptic complexes (1973)](https://doi.org/10.1016/0001-8708(73)90119-9)

### Roe's partitioned index turns coarse index theory into curvature obstructions

**Remember:** Index the whole manifold once, then read off the hypersurface's index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J22 (Exotic index theories on manifolds), 19K56, 53C21. arXiv math.DG, math.KT. Level 4: research.

**Definition.** For a complete odd-dimensional Dirac manifold M split by a compact separating hypersurface N, the partitioned index sends the coarse index of D through the coarse Mayer–Vietoris boundary map. Because N is compact, the result is an integer.

**Problem.** With the induced Dirac operator and boundary orientation, the index of N equals the partitioned index of D. If N is closed, even-dimensional and spin, a complete metric on N × ℝ with uniformly positive scalar curvature forces the spin Dirac index of N to vanish.

**How the definition helps.** The partition only extracts a number from the coarse index of the whole manifold, so the hard analysis is done once. Uniformly positive scalar curvature makes D invertible, so its coarse index and hence the partitioned index vanish (our own). Cutting N × ℝ along N gives the stated obstruction (our own).

**Paper or page:** [A partitioned manifold index theorem for noncompact hypersurfaces](https://arxiv.org/abs/2507.16591v2), [A partitioned manifold index theorem for noncompact hypersurfaces](https://arxiv.org/abs/2507.16591v2). It says: “Then Ind(D<sub>N</sub>) = Ind(D;N) after identifying both K-theory groups with ℤ.”

**Sources:**

- [J. Roe, Partitioning non-compact manifolds and the dual Toeplitz problem, in Operator Algebras and Applications, Cambridge University Press (1989)](https://doi.org/10.1017/cbo9780511662270.012)
- [P. Hochs and T. de Kok, A partitioned manifold index theorem for noncompact hypersurfaces, arXiv:2507.16591](https://arxiv.org/abs/2507.16591v2)

### Von Neumann dimension gives a finite index on infinite coverings

**Remember:** Measure kernels per fundamental domain, and the covering's index equals the base's.

*Makes the theorem clean to state or prove.* MSC 58J22 (Exotic index theories on manifolds), 58J20. arXiv math.DG, math.OA. Level 4: research.

**Definition.** For a Galois cover with deck group Γ, the Γ-dimension of a closed Γ-invariant L² subspace measures its size per fundamental domain. It is the Γ-trace of the orthogonal projection, which for a smoothing projection integrates the diagonal fiber trace of its kernel over one fundamental domain.

**Problem.** Let D be an elliptic operator on a closed manifold M, and D̃ its lift to a Galois covering M̃ with group Γ. Then the Γ-dimension of the kernel of D̃ minus that of its adjoint equals the ordinary index of D (Atiyah's L²-index theorem).

**How the definition helps.** Measuring per fundamental domain makes the Γ-dimensions of the lifted kernels finite, even when the kernels are infinite-dimensional, so their difference is a covering index (our own explanation). Atiyah’s L²-index theorem identifies this difference with the index of D downstairs.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “it is possible to get a finite index using the dimension of a module over a von Neumann algebra; this index is in general real rather than integer valued.”

**Sources:**

- [M. F. Atiyah, Elliptic operators, discrete groups and von Neumann algebras, Astérisque 32–33 (1976) 43–72](https://mathscinet.ams.org/mathscinet-getitem?mr=0420729)

### Boundary eta varies covariantly

**Remember:** Differentiate the eta section with the connection on its boundary line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math-ph. Level 4: research.

**Definition.** For a compact odd-dimensional spin manifold with product metric near its boundary, each spectral boundary condition gives a phase exp(2πiξ), where ξ is half the sum of eta and the kernel dimension. Changing the condition rescales this phase like a change of frame, so the intrinsic phase τ is an element of the inverse determinant line of the boundary.

**Problem.** In a smooth geometric family, the covariant derivative of τ equals 2πiωτ. The one-form ω is the degree-one part of the fiber integral of Â, the curvature polynomial of the vertical tangent bundle.

**How the definition helps.** Since τ is a section of a line bundle, its derivative needs a connection that accounts for changes of frame (our own explanation). The Dai–Freed variation theorem computes that derivative for the natural Bismut–Freed connection.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “In fact, this is a smooth section of the determinant line bundle as X varies.”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)

### Boundary zero modes affect the index

**Remember:** The boundary projection excludes zero modes, so the correction counts them.

*Rules out counterexamples. Confidence: medium.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The reduced eta invariant of the self-adjoint boundary Dirac operator D is ξ = (η + dim ker D)/2. Here η is the regularized count of positive minus negative eigenvalues, the value at zero of the analytic continuation of ∑ sign(λ)\|λ\|⁻ˢ over nonzero eigenvalues with multiplicities, so the kernel term counts the zero modes that η leaves out.

**Problem.** On a compact even-dimensional spin manifold with product metric near the boundary, impose the boundary condition that excludes all nonnegative modes. The chiral Dirac index equals the integral of the Â curvature form minus ξ.

**How the definition helps.** The boundary condition excludes the zero modes, and the kernel term in ξ corrects for them (our own explanation). On a product cylinder the two signed eta contributions cancel, but together the kernel terms subtract one full cross-sectional kernel dimension. The Atiyah–Patodi–Singer index theorem proves the formula.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “regularized number of positive minus negative eigenvalues of D.”

**Sources:**

- [Atiyah, Patodi and Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Corrected eta forms compose

**Remember:** Correct the connection, then integrate the inner eta form.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The corrected eta class of a composite odd-dimensional spin family is its eta form minus the integral of the transgression form between the Â forms of its vertical connection and of the split connection. It is taken modulo exact forms and modulo forms representing the Chern character of a K⁰ class.

**Problem.** For closed odd inner and even outer spin fibers, assume the inner Dirac operators are invertible and the composite kernels form a bundle. The corrected untwisted composite eta class equals the outer fiber integral of the inner eta form times the outer Â form.

**How the definition helps.** Subtraction absorbs the connection change, and the quotient absorbs the index class (our own explanation). Liu’s composition theorem supplies both terms before these operations. Inner invertibility removes the kernel contribution.

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “such that modulo exact forms on B”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Determinants isolate secondary eta invariants

**Remember:** After rank correction, subtract the spectral contribution of the determinant line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 57R20. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The rank-corrected eta invariant of a flat unitary bundle is the reduced eta invariant of the spin Dirac operator twisted by it, minus its rank times the untwisted reduced eta invariant, so trivial bundles give zero. The reduced eta invariant is half the regularized imbalance of positive and negative eigenvalues plus half the kernel dimension.

**Problem.** Let the base be a closed oriented spin three-manifold with the rational homology of a sphere. Modulo integers, the second secondary Chern number equals the bundle’s rank-corrected invariant minus that of its determinant line.

**How the definition helps.** Rank correction cancels trivial summands, and subtracting the determinant line’s invariant cancels the first Chern class. Our own explanation applies the index comparison for this formal difference of bundles. The cited theorem identifies the remaining spectral difference with the second secondary Chern number in its sign convention.

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “ĉᵨ,₂(\[L\]) = ξ̃ᵨ(D) − ξ̃det(ρ)(D).”

**Sources:**

- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Eta measures the signature defect

**Remember:** Signed spectral asymmetry supplies the missing boundary term.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The eta invariant η of the odd signature operator on even-degree boundary forms measures how far its spectrum is from symmetric. It is the value at zero of the analytic continuation of ∑ sign(λ)/\|λ\|ˢ over nonzero eigenvalues, with multiplicities.

**Problem.** For a compact oriented Riemannian 4k-manifold with product metric near its boundary, the signature of its intersection form equals ∫ L − η. Here L is the Hirzebruch form computed from curvature.

**How the definition helps.** Eta packages the imbalance between positive and negative boundary eigenvalues into one number (our own explanation). The Atiyah–Patodi–Singer theorem identifies that number with the difference between the curvature integral and the signature.

**Wikipedia:** [Eta invariant](https://en.wikipedia.org/wiki/Eta_invariant). It says: “who used it to extend the Hirzebruch signature theorem to manifolds with boundary.”

**Sources:**

- [Atiyah, Patodi and Singer, Spectral asymmetry and Riemannian Geometry. I (1975), Theorem 4.14](https://doi.org/10.1017/S0305004100049410)

### Eta phases sew along determinant lines

**Remember:** On a manifold with boundary, the phase lives in a line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J52. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a compact odd-dimensional spin manifold with product collar, the Dai–Freed phase is not a number but an element of the dual determinant line of the boundary chiral Dirac operator. In the frame given by an admissible unitary spectral boundary choice T, its coordinate is exp(πi(η(Dₜ) + dim ker Dₜ)), where Dₜ is the self-adjoint realization for T and η its eta invariant.

**Problem.** Cut a closed odd-dimensional Riemannian spin manifold along a separating hypersurface with product metric near the cut. Pairing the two boundary line elements, using opposite orientations, gives the original phase.

**How the definition helps.** The two pieces give elements of dual lines, so they pair to a number without a choice of basis. Two scalar eta computations would instead need compatible boundary choices (our own comparison). Dai and Freed prove that the line element is independent of those choices and that the pairing gives the uncut phase.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “These sections, given by the exponentiated eta invariant, satisfy the sewing law.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Eta winding counts spectral flow

**Remember:** The phase hides each jump, but its winding remembers their sum.

*True by definition. Confidence: medium.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The eta phase of a self-adjoint Dirac operator is exp(2πiξ), where ξ is half the regularized signed eigenvalue count plus half the kernel dimension. An eigenvalue crossing zero changes ξ by an integer, so the phase stays continuous.

**Problem.** For a smooth loop of such operators on a closed odd-dimensional manifold with only simple transverse crossings, the phase winding equals minus the spectral flow. Spectral flow counts upward zero crossings positively and downward crossings negatively.

**How the definition helps.** Passing to the circle turns integer jumps into a winding count (our own explanation). Each upward crossing raises ξ by one, so a continuous real lift subtracts one there. The endpoint spectra agree, leaving minus the total signed crossing count as the change in the lift.

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “is the spectral flow between D₀ and D₁.”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Free symmetries simplify eta variation

**Remember:** No fixed points and no crossings mean no change in eta.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** The equivariant eta invariant at an isometry h weights the sign of each eigenvalue by the trace of h on its eigenspace. It is the value at zero of the analytic continuation of ∑ sign(λ)\|λ\|⁻ˢ tr(h\|Eλ) over distinct nonzero eigenvalues λ with eigenspaces Eλ. Here h acts through a spin lift commuting with the spin Dirac operator of a closed odd-dimensional Riemannian spin manifold.

**Problem.** Suppose a finite group acts freely with a chosen spin lift. For every nonidentity element h, its equivariant eta invariant stays constant along every smooth path of invariant metrics with positive scalar curvature.

**How the definition helps.** Inserting h restricts the local variation formula to the points fixed by h, and a free action leaves none. Our own argument uses the spinor square formula to exclude zero eigenvalues throughout the path, so there are no jumps. The analytic work lies in the equivariant variation formula.

**Paper or page:** [Equivariant Spectral Flow for Families of Dirac-type Operators](https://arxiv.org/abs/2403.00575v3). It says: “assume moreover that G acts freely on M and h ≠ e. Then, we have ηₕ(D₀) = ηₕ(D₁).”

**Sources:**

- [Peter Hochs and Aquerman Yanes, Equivariant spectral flow for families of Dirac-type operators (2025)](https://doi.org/10.2140/akt.2025.10.189)

### Grading makes eta forms subtract

**Remember:** Reversing the grading reverses the supertrace.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A graded twisting bundle E = E⁺ ⊕ E⁻ has a connection preserving both parts, and its eta form uses the signed trace, the trace on E⁺ minus the trace on E⁻. Reversing the grading swaps the parts and so changes the sign of every signed trace.

**Problem.** For closed even-dimensional Spinᶜ fibers with compatible metrics and connections, the graded eta form equals η(E⁺) − η(E⁻), modulo exact forms. The finite bundles representing the two indices combine with the second grading reversed.

**How the definition helps.** The graded eta form splits into the E⁺ term plus the E⁻ term with grading reversed, and reversal changes its sign (our own). Ho constructs compatible finite-dimensional representatives so the two terms split before integration.

**Paper or page:** [An extended variational formula for the Bismut-Cheeger eta form and its applications](https://arxiv.org/abs/2209.00502). It says: “denotes the ℤ₂-graded complex vector bundle with the opposite grading of”

**Sources:**

- [Man-Ho Ho, An extended variational formula for the Bismut-Cheeger eta form and its applications, Theorem 1.2](https://arxiv.org/abs/2209.00502)

### Odd indices over points record eta

**Remember:** Add the zero modes to eta, halve, and keep the fractional part.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** The reduced eta class of a self-adjoint Spinᶜ Dirac operator D on a closed odd-dimensional manifold is (η(D) + dim ker D)/2 modulo integers. Here η(D) is its eta invariant, the regularized number of positive minus negative eigenvalues.

**Problem.** For a closed odd-dimensional Riemannian Spinᶜ manifold, the index of a Hermitian bundle with unitary connection equals the reduced eta invariant modulo integers. The Dirac operator uses the chosen Spinᶜ connection, and the input has zero auxiliary form.

**How the definition helps.** The differential index has a target that keeps the fractional part of a spectral invariant, which is what the reduced eta class records (our own). Freed and Lott identify it by computing parallel transport around an extra circle and taking a limit that stretches the base metric.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Wikipedia:** [Eta invariant](https://en.wikipedia.org/wiki/Eta_invariant). It says: “the eta invariant of a self-adjoint elliptic differential operator on a compact manifold is formally the number of positive eigenvalues minus the number of negative eigenvalues.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Corollary 9.39](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Quotients remove eta perturbation dependence

**Remember:** The quotient absorbs the Chern character of higher spectral flow.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** An invertible smoothing perturbation adds an operator family with smooth kernel that removes the zero eigenvalues of a Dirac family, and it gives an eta form. The eta class identifies two such forms when their difference is closed and represents the odd Chern character of a K¹ class, such as a family of unitary matrices.

**Problem.** For a closed even-dimensional geometric Dirac family with fixed geometry and zero family index, every admissible invertible perturbation gives the same quotient class.

**How the definition helps.** Two perturbations differ by higher spectral flow, a K¹ class comparing them, and Liu’s variation formula gives the change of eta form modulo exact forms as its Chern character. The quotient discards exactly this change (our own explanation).

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “For any g ∈ G, modulo exact forms on B, we have”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Reduced eta stays smooth

**Remember:** The kernel term counts a zero mode like a positive one.

*Rules out counterexamples.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** The reduced eta invariant of the spin Dirac operator D on a closed odd-dimensional Riemannian spin manifold is ξ = (η + dim ker D)/2 in ℝ/ℤ, where η counts positive minus negative eigenvalues by analytic continuation. The kernel term makes a zero eigenvalue count as ½, like a positive one, so a crossing changes ξ only by an integer (our own).

**Problem.** For a smooth family of such Dirac operators, exp(2πiξ) is smooth even where the kernel changes dimension.

**How the definition helps.** Each small eigenmode contributes the factor −1 to the phase whether its eigenvalue is negative, zero or positive (our own calculation). Without the kernel term a zero mode would contribute 1 instead, as for the twisted circle operators −i d/dx + a. A local spectral cutoff separates these finitely many modes, and the cutoff eta smoothness theorem handles the rest.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “In fact, this is a smooth section of the determinant line bundle as X varies.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Reducing eta removes spectral flow

**Remember:** Reducing modulo integers erases the count of eigenvalues crossing zero.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The reduced eta invariant of a self-adjoint Dirac operator D is ξ = (η + dim ker D)/2 modulo integers, where η is the regularized count of positive minus negative eigenvalues. Working modulo integers forgets the integer jumps of ξ when eigenvalues cross zero (our own).

**Problem.** Along a smooth path of metrics and unitary connections on a closed odd-dimensional spin manifold, the change in ξ equals the cylinder integral modulo integers. The integrand is the product of the Â and Chern character forms computed from curvature, using product data near both ends.

**How the definition helps.** Reduction modulo integers discards spectral flow, the signed count of eigenvalues crossing zero (our own explanation). The Atiyah–Patodi–Singer variation formula identifies the remaining change with the curvature integral.

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “The difference of two reduced eta invariants”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Tamed families represent eta form classes

**Remember:** Pair the families only when their eta form accounts for the change.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A geometric cycle consists of a family of Dirac operators and a differential form modulo exact forms. A taming adds smoothing operators to make the family invertible, and its eta form measures the resulting spectral asymmetry. Two cycles pair when a taming of their difference has eta form equal to the difference of their forms.

**Problem.** A tamed family with zero auxiliary form equals the empty family with auxiliary form −η in differential K-theory. Here η denotes the chosen taming’s eta form.

**How the definition helps.** Apply the pairing rule to the tamed family and the empty family: the required difference of forms is exactly the eta form of the given taming (our own). The work lies in proving that the relation generated by pairing models differential K-theory.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Definitions 2.7 and 2.10 and equation (6)](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Half spectral flow retains parity

**Remember:** Counting only half the loop preserves crossing parity.

*Makes the theorem clean to state or prove.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Half spectral flow is the signed spectral flow of A(t) over half the loop, from t = 0 to t = π, reduced modulo two. Here A(t) is a 2π-periodic family of self-adjoint operators with compact resolvent, smooth from a common graph-norm domain to the Hilbert space, with A(0) and A(π) invertible. A domain-preserving antiunitary τ with τ² = −I satisfies τA(t)τ⁻¹ = A(−t), so the second half of the loop mirrors the first (our own).

**Problem.** The complex dimension of the kernel of d/dt + A(t) on periodic sections equals the half spectral flow modulo two.

**How the definition helps.** Each upward crossing on one half has a downward partner on the other half, so the full signed count vanishes but the first half keeps a parity (our own explanation). The index theorem identifies this parity with that of the periodic kernel.

**Paper or page:** [The Z<sub>2</sub>-valued spectral flow of a symmetric family of Toeplitz operators](https://arxiv.org/abs/2409.15534v3). It says: “is equal to the half-spectral flow”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, The ℤ₂-valued spectral flow of a symmetric family of Toeplitz operators (2026)](https://doi.org/10.4171/jst/605)

### Higher spectral flow telescopes

**Remember:** The common reference makes the middle endpoint cancel.

*True by definition.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Along a path of self-adjoint elliptic families over a compact base, higher spectral flow compares endpoint spectral sections Q₀, Q₁ with a continuous reference spectral section P. It is \[Q₁ − P₁\] − \[Q₀ − P₀\], using relative projection classes. A spectral section keeps every eigenvector above a common cutoff R &gt; 0 and kills every eigenvector below −R, so each bracket compares only finitely many low modes.

**Problem.** Suppose two paths share their middle endpoint section and a reference section along their concatenation. Then the higher spectral flow of the concatenation is the sum of their higher spectral flows.

**How the definition helps.** In the concatenation the middle bracket appears once with each sign, because both paths use the same endpoint and reference sections there, so it cancels (our own calculation). This replaces following individual eigenvalues across the parameter space. The work lies in constructing spectral sections and proving independence of the reference.

**Paper or page:** [Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary](https://arxiv.org/abs/2101.00193v3). It says: “The H-equivariant higher spectral flow of the pairs (D₀,Q₀) and (D₁,Q₁) can also be computed via an equivariant generalised total spectral section”

**Sources:**

- [Johnny Lim and Hang Wang, Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary (2022)](https://doi.org/10.1007/s00209-022-03091-8)

### Nonzero spectral flow prevents taming

**Remember:** An invertible loop has no eigenvalues crossing zero.

*Rules out counterexamples.* MSC 58J30 (Spectral flows), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A taming of a smooth self-adjoint Dirac family A is a smooth self-adjoint smoothing family Q such that every operator Aₓ + Qₓ is invertible, so the tamed family never has zero as an eigenvalue.

**Problem.** A smooth loop of Dirac operators on closed odd-dimensional fibers with nonzero spectral flow admits no taming.

**How the definition helps.** A tamed loop has no zero crossings, so its spectral flow is zero, and adding the perturbations continuously preserves spectral flow (our own). For example, the circle Dirac operators with eigenvalues n + t, for integers n, form a loop as t goes from 0 to 1 by shifting eigenvectors, with spectral flow one.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Section 2.2.2](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Spectral flow adds across joins

**Remember:** Add the local rank changes to count the net crossings.

*True by definition.* MSC 58J30 (Spectral flows). arXiv math.SP, math.FA. Level 4: research.

**Definition.** Spectral flow is the signed count of eigenvalues crossing zero along a norm-continuous path of bounded self-adjoint Fredholm operators, computed as a sum over the pieces of a subdivision. Each piece has a cutoff a &gt; 0 with ±a outside the spectrum and finite-rank spectral projection onto \[−a,a\] throughout. The piece contributes its final rank minus its initial rank of the projection onto \[0,a).

**Problem.** Spectral flow along two joined paths is the sum of their spectral flows.

**How the definition helps.** Spectral flow is already a sum over pieces, so a subdivision containing the join splits it into the two flows (our own). The work lies in proving that local cutoffs exist and that the sum does not depend on them (our own).

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “by spectral flow one refers to the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Sources:**

- [John Phillips, Self-Adjoint Fredholm Operators and Spectral Flow (1996)](https://doi.org/10.4153/CMB-1996-054-4)

### Heat kernels descend by periodization

**Remember:** Sum over the lifts to move heat downstairs.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** On a compact quotient of the group by a lattice, a discrete group of translations, heat flow downstairs lifts a function to the group, applies the heat operator there, and reads off the result. Because the lift is periodic, the downstairs kernel collects the group kernel from every lattice translate (our own).

**Problem.** On a graded nilpotent Lie group, a positive Rockland operator of positive degree, a left-invariant homogeneous operator injective in every nontrivial irreducible unitary representation, has a smooth heat kernel. On a compact lattice quotient, its heat kernel sums the covering kernel over all lifts of the source point.

**How the definition helps.** Heat-kernel theory for positive Rockland operators gives a smooth, rapidly decreasing kernel at each positive time. Our own derivation splits its convolution with the periodic lift into integrals over lattice translates of one fundamental domain. Rapid decay permits summation, and uniqueness identifies the resulting kernel downstairs.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “Kₜ(ẋ,ẏ) = ∑<sub>γ ∈ Γ</sub> pₜ(y⁻¹γx),”

**Sources:**

- [Veronique Fischer, Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246)

### Stochastic completeness rules out unprescribed heat

**Remember:** No lost heat means no unprescribed heat.

*Rules out counterexamples.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.DG. Level 4: research.

**Definition.** A Riemannian manifold is stochastically complete when no heat is lost to infinity. That is, the minimal heat evolution, the limit of heat flow on expanding bounded regions with boundary temperature zero, preserves the constant function one.

**Problem.** Take a smooth, connected, noncompact Riemannian manifold without boundary whose negative Laplacian is subcritical, meaning it admits a positive Green function. Stochastic completeness holds exactly when every bounded classical heat solution with zero initial data vanishes on every finite time interval.

**How the definition helps.** One minus the minimal evolution of one is the lost heat, a bounded solution with zero initial data. Conversely, comparison on bounded regions bounds any such solution by its supremum times this loss (our own explanation). On the open half-line the missing endpoint absorbs heat, with loss erfc(x/(2√t)), where erfc is the complementary error function (our own example).

**Paper or page:** [Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1). It says: “has a bounded solution in M × (0, T), then necessarily v = 0.”

**Sources:**

- [Debdip Ganguly, Yehuda Pinchover, and Prasun Roychowdhury, Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1)

### Twisted heat decays without fixed points

**Remember:** A fixed-point-free map keeps every sampled pair off the diagonal.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** The twisted heat trace of an isometry g is the trace of heat flow followed by composition with g. It integrates the heat kernel Kₜ(gx,x) over x, so it only samples the kernel at pairs of points that g joins.

**Problem.** For a fixed-point-free isometry of a closed Riemannian manifold, the twisted scalar heat trace decays faster than every positive power of time near zero.

**How the definition helps.** With no fixed points on a compact manifold, the distance from gx to x has a positive minimum. Our own argument applies the small-time Gaussian bound on the heat kernel at that distance. Integrating this bound gives decay faster than every power of t.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “the kernel of an integral operator representing the heat operator”

**Sources:**

- [Harold Donnelly, Spectrum and the Fixed Point Sets of Isometries. I (1976)](https://doi.org/10.1007/BF01436198)

### Bolker injectivity blocks mirror artifacts

**Remember:** Each data frequency comes from only one object frequency.

*Rules out counterexamples. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** A generalized Radon transform, which integrates over a smooth family of surfaces, satisfies the Bolker condition when each data frequency comes from only one object frequency. Precisely, the projection from its canonical relation, which pairs object frequencies with the data frequencies they produce, onto data frequencies is one-to-one with injective derivative.

**Problem.** For a smoothly localized, properly supported generalized Radon transform satisfying the Bolker condition, the transform followed by its adjoint is pseudodifferential.

**How the definition helps.** The adjoint sends each data frequency back to the object frequencies that produced it, so injectivity pairs each object frequency only with itself (our own argument). The derivative condition makes the composed relation smooth, and the Fourier integral composition theorem shows the operator is pseudodifferential. Circles centred on a line fail the condition, because reflected points produce identical measurements.

**Paper or page:** [Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity](https://arxiv.org/abs/2212.00243v1). It says: “is an FIO satisfying the Bolker condition if D is disjoint from every tangent plane to S.”

**Sources:**

- [James W. Webber, Sean Holman and Eric Todd Quinto, Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity (2023)](https://doi.org/10.1016/j.jfa.2023.110056)

### Eigenlines detect failed diagonalization

**Remember:** An eigenline can exist without a global eigenvector.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP, math.DG. Level 4: research.

**Definition.** For a Hermitian leading symbol, a matrix of highest-order frequency terms equal to its conjugate transpose, with an everywhere simple eigenvalue, the eigenline bundle collects the one-dimensional complex eigenspaces over all nonzero covectors. A smooth global unit eigenvector is then a nowhere-zero section of this bundle (our own).

**Problem.** A smooth global unit eigenvector exists exactly when the eigenline bundle has zero first Chern class, the integer cohomology class classifying complex line bundles.

**How the definition helps.** A nowhere-zero section makes a line bundle trivial, so a global unit eigenvector exists exactly when the eigenline bundle is trivial (our own explanation). The classification theorem for complex line bundles turns triviality into vanishing of the first Chern class.

**Paper or page:** [Topological obstructions to the diagonalisation of pseudodifferential systems](https://arxiv.org/abs/2203.16957v3). It says: “the Euler class e ∈ H²(ℂPᵐ⁻¹) of the circle bundle”

**Sources:**

- [Matteo Capoferri, Grigori Rozenblum, Nikolai Saveliev and Dmitri Vassiliev, Topological obstructions to the diagonalisation of pseudodifferential systems (2022)](https://doi.org/10.1090/bproc/147)

### Invertibility at infinity prevents escape

**Remember:** A cylinder needs an invertible model as well as an invertible symbol.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** An operator on a manifold with straight cylindrical ends is fully elliptic when two tests pass: its leading frequency symbol is invertible in every nonzero direction, and its limit operator is invertible between the corresponding regularity spaces. The limit operator is the model obtained by translating the operator back from far along each end.

**Problem.** Consider a classical operator invariant under translations far down each straight cylindrical end, up to a rapidly decaying smoothing remainder. With compact core and cross sections, it is Fredholm between the corresponding Sobolev spaces exactly when fully elliptic.

**How the definition helps.** The limit operator tests sequences that move down the cylinder and escape every compact set, which the symbol cannot see. In our own example, slowly varying functions along an infinite cylinder defeat the Laplacian despite its invertible leading symbol. The inverse construction uses both tests to obtain closed range and finite-dimensional kernel and cokernel.

**Paper or page:** [Layer potentials and essentially translation invariant pseudodifferential operators on manifolds with cylindrical ends](https://arxiv.org/abs/2308.06308v3). It says: “is Fredholm if, and only, if”

**Sources:**

- [Mirela Kohr, Victor Nistor and Wolfgang L. Wendland, Layer potentials and essentially translation invariant pseudodifferential operators on manifolds with cylindrical ends (2023)](https://arxiv.org/abs/2308.06308v3)

### Noninteger orders avoid trace ambiguity

**Remember:** No critical degree means no logarithmic ambiguity.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** The canonical trace density integrates the classical scalar symbol over a coordinate frequency ball, with the Fourier normalization, keeps the constant term as the radius grows, and multiplies by the coordinate volume density. Only a symbol term of degree minus the dimension disturbs this, because it adds a logarithm of the radius (our own).

**Problem.** For noninteger real order on a closed manifold, these local densities agree across coordinate charts. Below order minus the dimension, their integral equals the ordinary operator trace.

**How the definition helps.** Noninteger order excludes a homogeneous symbol term of degree minus the dimension, the only degree producing a logarithm. Such a logarithm would change the constant term under rescaling (our own explanation), and the coordinate-change theorem handles general chart changes. At sufficiently low order the frequency integral converges.

**Paper or page:** [A groupoid approach to the Wodzicki residue and the Kontsevich-Vishik trace](https://arxiv.org/abs/2312.10415v2). It says: “the Kontsevich-Vishik density of u₁ at x ∈ M is equal to Ψᵤ(x,1).”

**Sources:**

- [Maxim Kontsevich and Simeon Vishik, Determinants of elliptic pseudo-differential operators (1994)](https://www.ihes.fr/~maxim/TEXTS/determinants_elliptic_11.pdf)

### Spectral and heat-kernel fractional Laplacians differ only through lost heat mass

**Remember:** Lost heat is the only gap between the two formulas.

*True by definition. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds), 35R11, 58J35. arXiv math.AP, math.DG. Level 4: research.

**Definition.** A Riemannian manifold M is stochastically complete if its minimal heat kernel conserves heat: ∫<sub>M</sub> pₜ(x,y) dvol(y) = 1 for every x ∈ M and t &gt; 0. The mass loss at x and time t is the heat that has escaped, one minus this integral.

**Problem.** On a complete Riemannian manifold, the mass loss governs the difference between the spectral and heat-kernel formulas for the fractional and logarithmic Laplacians, wherever both converge. On a stochastically complete manifold the formulas agree.

**How the definition helps.** At each time t, f(x) − exp(tΔ)f(x) equals ∫<sub>M</sub> pₜ(x,y)(f(x) − f(y)) dvol(y) plus f(x) times the mass loss (our own calculation). Both formulas integrate these quantities against the same weight in t, so they differ by f(x) times the weighted integral of the mass loss. This is zero when heat is conserved.

**Paper or page:** [Logarithmic Laplacian on General Riemannian Manifolds](https://arxiv.org/abs/2506.19311v1). It says: “We further compare spectral versus heat kernel definitions of both fractional and logarithmic Laplacians, showing that their discrepancy is governed by the mass loss function and hence by stochastic completeness.”

**Sources:**

- [Rui Chen, Logarithmic Laplacian on General Riemannian Manifolds, arXiv:2506.19311v1 (2025)](https://arxiv.org/abs/2506.19311v1)

### The residue measures failed scaling

**Remember:** The scaling defect grows like log s; its slope is the residue.

*True by definition.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP, math.DG. Level 4: research.

**Definition.** Let 𝕜 be an essentially homogeneous tangent-groupoid kernel of order −d that extends a classical operator kernel on a d-dimensional manifold. Dilation by s &gt; 0 fixes 𝕜 up to a smooth density, the scaling defect sᵈ(αₛ)∗𝕜 − 𝕜, where (αₛ)∗ is pushforward by groupoid dilation.

**Problem.** At each zero tangent vector, the scaling defect divided by the logarithm of the positive dilation factor gives the Wodzicki residue density. The dilation factor must differ from one.

**How the definition helps.** At a fixed zero vector, the defects of successive dilations add (our own explanation). By continuity, the defect is then a constant multiple of log s. The identification theorem equates that constant with the usual frequency integral of the degree −d symbol.

**Paper or page:** [A groupoid approach to the Wodzicki residue](https://arxiv.org/abs/2303.15787v2). It says: “Resₓᵂ(P) = 1/log(s) (sᵈ αₛ\*𝕜 − 𝕜)\|(x,0,0)”

**Sources:**

- [Nathan Couchet and Robert Yuncken, A groupoid approach to the Wodzicki residue (2024)](https://doi.org/10.1016/j.jfa.2023.110268)

### Aperiodicity removes the sphere’s Weyl obstruction

**Remember:** If almost no geodesic closes, eigenvalues cannot pile up.

*Rules out counterexamples.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** A unit tangent vector is periodic if its geodesic returns to that same vector after some positive time. Periodic directions are negligible if they form a set of Liouville measure zero in the unit tangent bundle. Then almost no geodesic closes up, unlike on a round sphere.

**Problem.** On a closed n-dimensional Riemannian manifold M with negligible periodic directions, let N(λ) count Laplace eigenvalues at most λ with multiplicity. As λ → ∞, N(λ) = (2π)⁻ⁿ vol(M) vol(Bⁿ) λ<sup>(n/2)</sup> + o(λ<sup>((n−1)/2)</sup>), where Bⁿ is the Euclidean unit ball.

**How the definition helps.** The condition excludes round spheres, where every geodesic closes and large multiplicities make N(λ) jump by amounts of order λ<sup>((n−1)/2)</sup> (our own comparison). The Duistermaat–Guillemin theorem, which relates periodic geodesics to the wave trace, proves the sharper error under this condition.

**Wikipedia:** [Weyl law](https://en.wikipedia.org/wiki/Weyl_law). It says: “when the set of periodic bicharacteristics has measure 0.”

**Sources:**

- [Johannes Duistermaat and Victor Guillemin, The Spectrum of Positive Elliptic Operators and Periodic Bicharacteristics (1975)](https://doi.org/10.1007/BF01405172)

### Energy closure preserves cone dilation

**Remember:** Dilation only rescales the energy, so it keeps the energy completion.

*True by definition.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** On an infinite cone, the Friedrichs Laplacian is the nonnegative self-adjoint operator of the gradient energy. Its form domain is the completion of smooth functions supported away from the tip in the norm √(‖u‖² + ‖∇u‖²), with L² norms. A dilation that keeps ‖u‖ multiplies ‖∇u‖² by a constant, so it maps this completion onto itself (our own).

**Problem.** On an exact infinite cone, every radial dilation, normalized to preserve the L² norm, preserves the Friedrichs operator domain. For dilation U that evaluates functions at radius ρr, the Laplacian satisfies ΔU = ρ²UΔ.

**How the definition helps.** Dilation by ρ keeps the L² norm and multiplies the energy by ρ² (our own calculation). So it preserves the form domain and scales the form by ρ². The theorem that associates an operator with a closed form turns this into invariance of the operator domain and ΔU = ρ²UΔ.

**Paper or page:** [Extensions of symmetric operators that are invariant under scaling and applications to indicial operators](https://arxiv.org/abs/2107.01239). It says: “In particular, the Friedrichs extension Aꜰ = A\*\|𝒟ꜰ : 𝒟ꜰ ⊂ H → H, 𝒟ꜰ = 𝒟ₘₐₓ ∩ ℋꜰ is invariant.”

**Sources:**

- [Thomas Krainer, Extensions of symmetric operators that are invariant under scaling and applications to indicial operators](https://arxiv.org/abs/2107.01239)

### Energy excludes logarithmic cone modes

**Remember:** Finite energy forbids log r, which square integrability allows.

*Rules out counterexamples. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** At a flat cone tip, the Friedrichs Laplacian is built from the closure of smooth functions supported away from the tip. The closure uses the norm whose square is the gradient energy plus the squared L² norm. So every function in its domain has finite gradient energy near the tip.

**Problem.** On a compact flat cone surface, the angular average of a function in the Friedrichs operator domain has no logarithmic term at the tip.

**How the definition helps.** The function log r has radial derivative 1/r, so its energy near the tip is a multiple of the divergent integral ∫dr/r (our own calculation). Finite energy therefore excludes a logarithmic term. Square integrability alone would not, because a cutoff logarithm and its Laplacian on the punctured cone are both square integrable.

**Paper or page:** [Compact polyhedral surfaces of an arbitrary genus and determinants of Laplacians](https://arxiv.org/abs/0906.0717). It says: “Let Δ be the Friedrichs extension of the Laplacian defined on functions from C∞₀(𝒳 ∖ {P₁,…,Pₙ}).”

**Sources:** none listed. No primary source with a working link was found.

### Bounding spin removes holonomy signs

**Remember:** Antiperiodic spinors on the loop read holonomy with no extra sign.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** The bounding spin structure on a circle is the one that extends across a disk, so spinor fields change sign after one turn. Use it on the base circle when you pull a family of spin Dirac operators back around a loop.

**Problem.** For closed even-dimensional spin fibers, transport around the loop in the inverse determinant line equals the limiting phase exp(2πiξ) as the circle stretches. Here ξ is half the regularized signed eigenvalue count plus half the kernel dimension on the total space.

**How the definition helps.** The bounding spin structure supplies the sign that the parity of the fiber index would otherwise contribute (our own explanation). For a constant family whose fiber is one positive point, periodic spinors give phase −1 and antiperiodic spinors give the correct value 1. Dai and Freed identify the antiperiodic phase with holonomy.

**Wikipedia:** [Quillen metric](https://en.wikipedia.org/wiki/Quillen_metric). It says: “were used by Bismut and Freed to compute the holonomy of certain determinant line bundles of Dirac operators”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)
- [Bismut and Freed, The analysis of elliptic families II (1986), Theorem 3.16](https://doi.org/10.1007/BF01206955)

### Cusp subtraction regularizes analytic torsion

**Remember:** Subtract a model cusp, then add back its torsion.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** Finski’s torsion first regularizes the heat trace: remove zero modes and subtract, for each cusp, one third of the contribution of the thrice-punctured sphere, a model with three cusps. Let ζ be the gamma-normalized continued Mellin transform of this trace. The torsion is exp(−ζ′(0)/2) times one cube root of the model’s Takhtajan–Zograf torsion per cusp.

**Problem.** For the trivial line on a complete finite-area hyperbolic surface with cusps and scalar curvature −1, Finski’s torsion equals the Takhtajan–Zograf torsion from closed geodesics.

**How the definition helps.** Subtracting the model at each cusp removes the divergence that prevents an ordinary heat trace (our own explanation). Finski proves continuation of the resulting zeta function and identifies the normalized value with the geodesic formula.

**Paper or page:** [Quillen metric for singular families of Riemann surfaces with cusps and compact perturbation theorem](https://arxiv.org/abs/1911.09087v1). It says: “our definition of the analytic torsion is compatible with the definition of Takhtajan-Zograf.”

**Sources:**

- [Siarhei Finski, Quillen metric for singular families of Riemann surfaces with cusps and compact perturbation theorem](https://arxiv.org/abs/1911.09087v1)
- [Finski, Quillen metric theory for surfaces with cusps](https://proceedings.centre-mersenne.org/item/10.5802/tsg.372.pdf)

### Cylinder eta gives parallel transport

**Remember:** The cylinder phase maps the initial line to the final line.

*Makes the theorem clean to state or prove.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** Pull a spin family back along a path and form its cylinder. Reduced eta is half the regularized signed eigenvalue count plus half the kernel dimension. Its exponential, for this cylinder, is a linear map between the inverse determinant lines at the two ends.

**Problem.** For a smooth geometric family of closed even-dimensional spin manifolds, the cylinder map tends to Bismut–Freed parallel transport as the path metric stretches. The path is constant near its ends.

**How the definition helps.** A cylinder has two ends, so its eta invariant maps one end’s line to the other’s, like a parallel transport (our own explanation). Dai and Freed use gluing to compose these maps and variation formulas to identify their limiting connection.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “These sections, given by the exponentiated eta invariant, satisfy the sewing law.”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)

### Determinant sections detect noninvertibility

**Remember:** Locally a square matrix, whose determinant vanishes where inversion fails.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For an index-zero Cauchy–Riemann operator D on a closed Riemann surface, the determinant line is (det ker D)\* ⊗ det coker D, where det is the top exterior power. Locally a smooth family reduces to square matrices that are invertible exactly where D is (our own). The determinant section is the determinant of that matrix.

**Problem.** The determinant section vanishes precisely where an operator in the family is not invertible.

**How the definition helps.** A square matrix has nonzero determinant exactly when it is invertible, and the reduced matrix is invertible exactly where the operator is (our own argument). The finite-dimensional reduction and the determinant gluing theorem make these local sections agree on overlaps.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “Now one has a family ℒᴅ depending on D, which determines a holomorphic line bundle over 𝒜.”

**Sources:**

- [Daniel Quillen, Determinants of Cauchy-Riemann operators over a Riemann surface (1985)](https://doi.org/10.1007/BF01086022)

### Even-dimensional analytic torsion cancels

**Remember:** Dual degrees pair up, leaving an alternating sum that vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J50. arXiv math.SP, math.DG. Level 4: research.

**Definition.** Analytic torsion is the product over form degrees p of Dₚ<sup>(−(−1)ᵖp/2)</sup>. Here Dₚ = exp(−ζₚ′(0)) is the zeta-regularized determinant of the degree-p Laplacian on its positive eigenvalues. The Hodge star gives degrees p and n − p the same spectrum, so Dₚ = Dₙ₋ₚ (our own).

**Problem.** On a closed oriented Riemannian manifold of even dimension, the analytic torsion of the ordinary differential forms equals one.

**How the definition helps.** In even dimension n, pairing p with n − p replaces each weight (−1)ᵖp by its average (−1)ᵖn/2 (our own calculation). So log torsion is a multiple of ∑(−1)ᵖ log Dₚ. On each positive eigenvalue the eigenspaces form an exact sequence under exterior differentiation, so this alternating sum is zero.

**nLab:** [analytic torsion](https://ncatlab.org/nlab/show/analytic+torsion). It says: “given by a product of powers of the functional determinants”

**Sources:**

- [Daniel Ray and Isadore Singer, R-Torsion and the Laplacian on Riemannian Manifolds (1971)](https://doi.org/10.1016/0001-8708(71)90045-4)

### Odd genera give self-dual torsion

**Remember:** Self-dual torsion has an odd genus, with no even coefficients.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 14G40. arXiv math.AG. Level 4: research.

**Definition.** Each generalized analytic torsion theory has an additive genus, the formal real power series S that classifies it relative to homogeneous torsion. The genus is odd if S(−x) = −S(x), which means every even coefficient, the constant term included, is zero (our own).

**Problem.** A generalized analytic torsion theory agrees with its dual exactly when its additive genus is odd, including the requirement that its constant term vanish.

**How the definition helps.** Duality acts on genera by S(x) ↦ −S(−x), so a theory equals its dual exactly when its genus is odd (our own). The substantive steps are the classification of the theories and the computation of duality on their genera (our own).

**Paper or page:** [Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2). It says: “is self-dual if and only if aₙ = 0 for n even.”

**Sources:**

- [J. I. Burgos Gil, G. Freixas i Montplet and R. Litcanu, Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2)

### Pfaffian patching gives square roots

**Remember:** Glue with Pfaffians, the square roots of determinants.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** Below a positive gap in the squared Dirac spectrum, take the dual top exterior power of the positive-chirality spinor space. Join these local lines by the Pfaffian of each intervening skew block. The Pfaffian of a skew matrix squares to its determinant, so the joined line is a square root of the determinant line (our own).

**Problem.** For spin fibers of dimension 8k + 2 with real twisting bundle, the resulting Pfaffian line squares canonically to the determinant line. In index zero, its canonical section squares to the determinant section.

**How the definition helps.** Squaring each Pfaffian gives the determinant that joins the ordinary determinant lines (our own explanation). The real twisting bundle supplies the skew blocks, and Freed proves that the local identifications agree on overlaps.

**nLab:** [Pfaffian line bundle](https://ncatlab.org/nlab/show/Pfaffian+line+bundle). It says: “this has a canonical square root line bundle, the Pfaffian line bundle.”

**Sources:**

- [Freed, On determinant line bundles (1987), §3](https://abel.math.harvard.edu/~dafr/detsur.pdf)

### Quaternionic eta retains holonomy signs

**Remember:** Quaternionic eigenvalues come in pairs, so eta jumps by two.

*Makes the theorem clean to state or prove.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** A self-adjoint Dirac operator D has quaternionic symmetry if an antiunitary J commutes with D and J² = −I. Then every eigenspace has even complex dimension (our own). Its reduced eta modulo two is ξ = (η(D) + dimℂ ker D)/2 in ℝ/2ℤ.

**Problem.** For closed spin fibers of dimension 8k + 2 with real twisting bundle, transport around a loop in the Pfaffian line equals the limiting exp(−πiξ). Compute ξ on the total space as the base circle stretches, using the spin structure that extends across a disk.

**How the definition helps.** Eigenvalues cross zero in pairs, so ξ changes by even integers and exp(−πiξ) is well defined (our own explanation). Freed’s holonomy theorem identifies this phase with transport in the canonical square root of the determinant line.

**nLab:** [Pfaffian line bundle](https://ncatlab.org/nlab/show/Pfaffian+line+bundle). It says: “this has a canonical square root line bundle, the Pfaffian line bundle.”

**Sources:**

- [Freed, On determinant line bundles (1987), §3](https://abel.math.harvard.edu/~dafr/detsur.pdf)

### Quillen norms survive kernel jumps

**Remember:** Eigenvalues leaving the spectral product reappear in the kernel factor.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** The determinant line of D is the dual top exterior power of its kernel tensored with the top exterior power of its cokernel. The Quillen norm is the induced L² norm on this line times the square root of the zeta-regularized product of positive eigenvalues of D∗D.

**Problem.** For smoothly varying Dolbeault operators on a fixed compact Riemann surface with fixed Hermitian data, the Quillen norm stays smooth when the kernel dimension changes.

**How the definition helps.** When a positive eigenvalue tends to zero, it leaves the spectral product just as the kernel grows, and the two changes cancel (our own explanation). For multiplication by z on ℂ, the determinant section is z times a smooth frame of induced norm 1/\|z\|, and the spectral factor \|z\| cancels this. Quillen proves smoothness of the remaining spectral product.

**Wikipedia:** [Quillen metric](https://en.wikipedia.org/wiki/Quillen_metric). It says: “does not define a smooth Hermitian metric.”

**Sources:**

- [Quillen, Determinants of Cauchy-Riemann operators over a Riemann surface (1985)](https://doi.org/10.1007/BF01086022)

### String structures trivialize surface Pfaffians

**Remember:** Trivialize the class upstairs, integrate over the surface, trivialize the line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** A geometric string structure on a spin bundle trivializes its differential half Pontryagin class, the class p₁/2 refined to differential cohomology. Part of the data is a three-form H whose derivative is the curvature form representing that class.

**Problem.** Consider a geometric family of closed spin surfaces with a spin twisting bundle of rank at least three. A geometric string structure on that bundle gives a unit section of the relative Pfaffian line.

**How the definition helps.** Integrating the trivialization along each surface of the family gives a trivialization on the base (our own explanation). Bunke identifies the resulting line with the relative Pfaffian line, which compares the twisted Dirac family with the trivial twist of equal rank.

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “is the trivialization of this class refined to ordinary differential cohomology”

**Sources:**

- [Bunke, String Structures and Trivialisations of a Pfaffian Line Bundle (2011)](https://doi.org/10.1007/s00220-011-1348-0)

### Torsion corrects the harmonic norm

**Remember:** Divide the harmonic norm by torsion to cancel the metric.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** The cohomology determinant line tensors the top exterior powers of even cohomology groups with the duals of those in odd degrees. Its Ray–Singer norm is the harmonic norm divided by the analytic torsion T. Here log T = ½∑ₚ(−1)ᵖp ζₚ′(0), with ζₚ the zeta function of the positive degree-p Laplace eigenvalues.

**Problem.** For a closed oriented Riemannian manifold with unitary flat coefficients, the Ray–Singer norm equals the Reidemeister norm computed from cellular cochains.

**How the definition helps.** Analytic torsion cancels the metric dependence of the harmonic representatives (our own explanation). On a circle of length L, the integral basis has harmonic norm L and the torsion is L, so their ratio is the Reidemeister value 1. The Cheeger–Müller theorem proves the equality in general.

**Wikipedia:** [Analytic torsion](https://en.wikipedia.org/wiki/Analytic_torsion). It says: “This Cheeger–Müller theorem (that the two notions of torsion are equivalent)”

**Sources:**

- [Cheeger, Analytic Torsion and the Heat Equation (1979)](https://doi.org/10.2307/1971113)

### Zeta regularization defines the determinant of a Laplacian

**Remember:** Differentiate the eigenvalue zeta function at zero to get a determinant.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.SP, math.DG. Level 4: research.

**Definition.** Let A have discrete positive eigenvalues aₙ, counted with multiplicity, and let ζ(s) = ∑ aₙ⁻ˢ for large real s, continued meromorphically and regular at zero. The zeta-regularized determinant is exp(−ζ′(0)), which is the ordinary product when the list is finite. For a nonnegative Laplacian, omit the kernel.

**Problem.** Analytic torsion, built from zeta-regularized determinants of form Laplacians, is a well-defined number on every closed Riemannian manifold. For orthogonal flat coefficients, its norm on the cohomology determinant line equals the Reidemeister norm from a triangulation (our own).

**How the definition helps.** For finite matrices −ζ′(0) is the sum of the logarithms of the eigenvalues, so the definition extends the ordinary determinant (our own). It stays finite when the eigenvalue product diverges, so torsion exists. The comparison with Reidemeister torsion is the Cheeger–Müller theorem (our own).

**Wikipedia:** [Zeta function regularization](https://en.wikipedia.org/wiki/Zeta_function_regularization). It says: “Another method defines the possibly divergent infinite product a₁a₂.... to be exp(−ζ′A(0)).”

**Sources:**

- [D. B. Ray and I. M. Singer, R-Torsion and the Laplacian on Riemannian manifolds, Advances in Mathematics 7 (1971)](https://doi.org/10.1016/0001-8708(71)90045-4)

### Birth–death points connect Morse functions

**Remember:** Allow the cubic point x³, where critical pairs are born and die.

*Makes the theorem clean to state or prove.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.GT. Level 4: research.

**Definition.** A generalized Morse function allows two kinds of critical point. At a Morse point the Hessian is invertible. At a birth–death point the Hessian has a one-dimensional kernel along which the third derivative is nonzero, as for x³ at zero.

**Problem.** On a closed smooth manifold, every smooth path between Morse functions admits arbitrarily close smooth paths of generalized Morse functions with the same endpoints.

**How the definition helps.** A generic path of functions meets only these two kinds of critical point (our own explanation). Jet transversality lets a path avoid all worse degeneracies, which have codimension at least two (our own). In x³ + tx, two critical points merge and vanish as t passes zero.

**nLab:** [framed generalized Morse function](https://ncatlab.org/nlab/show/framed+generalized+Morse+function). It says: “whose critical points either have a nondegenerate Hessian or a Hessian with a 1-dimensional kernel K such that the third derivative of f along K is nonzero.”

**Sources:**

- [Kiyoshi Igusa, Higher Singularities of Smooth Functions are Unnecessary](https://doi.org/10.2307/2006962)

### Boardman strata give expected codimension

**Remember:** Transverse jets pull back each stratum with its codimension.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 4: research.

**Definition.** Boardman strata sort jets, a map’s values and derivatives through a fixed order, by the kernel dimensions of the derivative and its successive restrictions. A Thom–Boardman map has a jet extension that meets each stratum transversely, so its derivative supplies every direction normal to the stratum.

**Problem.** For a Thom–Boardman map, the set of source points whose jets lie in a given Boardman stratum is empty or a smooth submanifold. Its codimension equals that of the stratum.

**How the definition helps.** Transversality transfers the codimension from jet space to the source by the preimage theorem (our own explanation), and Boardman proves the strata are smooth. Without transversality this fails: a constant plane map has rank zero everywhere, though rank zero has codimension four among plane jets (our own example).

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “Assume that the k-jet extension jᵏf of the map f: M → N is transverse to the manifolds Σᴵ (we call these maps Thom-Boardman maps).”

**Sources:**

- [John M. Boardman, Singularities of differentiable maps](https://doi.org/10.1007/BF02684585)

### Divided differences keep colliding points

**Remember:** Divide before setting the two source points equal.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.AG, math.CV. Level 4: research.

**Definition.** Consider a finite holomorphic map germ (x,t) ↦ (x,h(x,t)), with t one variable. Its double point space has one equation per component of h: (hⱼ(x,t) − hⱼ(x,s))/(t − s) = 0. These divided differences stay holomorphic at s = t, where they equal the t derivative.

**Problem.** For a family in these coordinates, each member’s double point space equals the corresponding fiber of the family’s double point space.

**How the definition helps.** Because the equations are defined everywhere, they commute with substituting a parameter value, even where source points collide (our own explanation). For t ↦ (t², t³ + ut), distinct points with equal image merge at zero as u tends to zero. The central map has no distinct pair, yet its divided differences still vanish there.

**Paper or page:** [Cohomological connectivity of perturbations of map-germs](https://arxiv.org/abs/2103.14685v1). It says: “unlike 𝒟ᵏ(f), the spaces Dᵏ(f) behave well under deformations”

**Sources:**

- [Yongqiang Liu, Guillermo Peñafort Sanchis, Matthias Zach, Cohomological connectivity of perturbations of map-germs](https://arxiv.org/abs/2103.14685v1)

### Whitney A keeps transversality open

**Remember:** The lower tangent space must fit inside every limiting upper tangent space.

*True by definition.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 4: research.

**Definition.** A stratification divides a closed set into locally finitely many smooth strata, whose boundaries consist of lower strata. Whitney condition A requires that, at points of a higher stratum approaching a lower one, every limit of tangent planes contains the lower tangent space. So transversality to a lower stratum passes to nearby points of higher strata (our own).

**Problem.** For a compact source, smooth maps whose order-k jets meet every stratum transversely form an open set in the smooth topology. Here the stratified set lies in the space of jets, which record values and derivatives through order k, and satisfies Whitney condition A.

**How the definition helps.** Whitney condition A carries transversality across changes of stratum (our own explanation). If nearby maps failed transversality, compactness would give failure points converging to a point of the same or a lower stratum, with converging tangent planes. The limiting plane contains the tangent space of the stratum there, so the limit is transverse, and transversality near it contradicts the failures.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “the set of maps f: M → N whose k-jet is transversal to all strata of the stratification is open”

**Sources:**

- [David Trotman, Stability of transversality to a stratification implies Whitney (a)-regularity](https://doi.org/10.1007/BF01410081)

### Infinitesimal coordinate changes yield stability

**Remember:** Every first-order wiggle of f is absorbed by moving source and target.

*Makes the theorem clean to state or prove.* MSC 58K25 (Stability theory for manifolds). arXiv math.DG. Level 4: research.

**Definition.** A smooth map f is infinitesimally stable if first-order coordinate changes absorb every first-order change of f, a smooth vector field w along f. That is, w = df(X) + Y ∘ f for some vector field X on the source and Y on the target.

**Problem.** For smooth manifolds without boundary and compact source, infinitesimal stability is equivalent to stability. Stability means all sufficiently close smooth maps differ from f by smooth source and target coordinate changes.

**How the definition helps.** Infinitesimal stability replaces the search for coordinate changes with a linear equation for their velocities (our own explanation). Mather’s theorem turns these first-order solutions into actual coordinate changes when the source is compact.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “If f is stable then it is infinitesimally stable”

**Sources:**

- [John N. Mather, Stability of C∞ Mappings II. Infinitesimal Stability Implies Stability](https://doi.org/10.2307/1970668)

### Contact changes preserve local algebras

**Remember:** Changing generators leaves the quotient ring unchanged.

*Makes the theorem clean to state or prove.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.CV. Level 4: research.

**Definition.** The local algebra of a holomorphic map germ is the ring of holomorphic function germs at the source origin modulo the ideal generated by the map’s components. Contact equivalence changes source coordinates and multiplies the components by an invertible matrix of holomorphic functions. The matrix only changes the generators of the ideal.

**Problem.** For finitely determined germs with fixed source and target dimensions, contact equivalence is equivalent to isomorphism of their local complex algebras. Finite determinacy means derivatives through some finite order determine the contact class.

**How the definition helps.** A contact change keeps the ideal up to the coordinate change, so it induces an isomorphism of local algebras (our own explanation). Mather’s theorem supplies the converse, recovering the contact class from the algebra.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “Hence two finitely determined map germs are K-equivalent if and only if their local algebras (or equivalently, their quotient algebras) are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Finite determinacy makes equivalence smooth

**Remember:** Only finitely many terms of a formal coordinate change matter.

*Rules out counterexamples. Confidence: medium.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 4: research.

**Definition.** A smooth map germ is k-determined if every smooth germ with the same value and derivatives through order k is left–right equivalent to it. Left–right equivalent means that smooth source and target coordinate changes near zero carry one germ to the other.

**Problem.** For a finitely determined germ, equivalence by invertible formal power series implies smooth left–right equivalence.

**How the definition helps.** Only terms through order k matter, so we truncate the formal coordinate changes at an order at least k and at least one (our own proof). The polynomial truncations are invertible and give the transformed germ the right k-jet, hence smooth equivalence. Without determinacy, the zero germ and the flat germ exp(−1/x²) have identical series but different zero sets.

**nLab:** [jet bundle](https://ncatlab.org/nlab/show/jet+bundle). It says: “where two germs are considered equivalent if their first k partial derivatives at x coincide.”

**Sources:** none listed. No primary source with a working link was found.

### Immersed lifts distinguish cuspidal edges

**Remember:** Check both the surface and its normal lift.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 4: research.

**Definition.** A front is a surface map f into three-space with a smooth unit normal ν such that the lift (f,ν) is an immersion. So the normal still moves where f loses rank. A singular point is nondegenerate if the signed area density det(fₓ,fᵧ,ν) has nonzero derivative there.

**Problem.** At a nondegenerate singular point of a front, smooth coordinates give the cuspidal edge (x,y²,y³) exactly when the derivative kernel crosses the singular curve transversely.

**How the definition helps.** Because the lift is immersed, the normal turns along the kernel direction (our own explanation). The front recognition theorem then gives a cuspidal edge when that kernel crosses the singular curve. The map (x,y²,0) has the same kernel and singular line but a constant normal, and it is not a cuspidal edge.

**Paper or page:** [Null surfaces of pseudo-spherical spacelike framed curves in the anti-de Sitter 3-space](https://arxiv.org/abs/2305.04230v1). It says: “The germ of f at p is locally diffeomorphic to the cuspidal edge if and only if ξ(s₀) is transversal to c′(s₀)”

**Sources:** none listed. No primary source with a working link was found.

### Stable germs need only contact equivalence

**Remember:** For stable germs, the coarser contact class is enough.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.CV. Level 4: research.

**Definition.** A holomorphic map germ is stable if every unfolding, a family of maps through it, is trivial up to parameter-preserving coordinate changes. Contact equivalence is coarser than equivalence by coordinate changes: it changes source coordinates and multiplies the components by an invertible matrix of holomorphic functions.

**Problem.** For stable holomorphic germs with fixed source and target dimensions, contact equivalence implies equivalence by source and target coordinate changes.

**How the definition helps.** Mather’s classification of stable germs shows that the contact class determines a stable germ up to source and target coordinate changes. Without stability this fails (our own): (x,y³) and (x,y³ + xy) are contact equivalent, but their critical values form a line and a cusp.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “Two stable maps are 𝒜-equivalent iff they are 𝒦-equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Contact directions count stable parameters

**Remember:** Count the directions no coordinate change or translation can absorb.

*Makes the theorem clean to state or prove.* MSC 58K60 (Deformation of singularities), 58K25, 58K40. arXiv math.DG. Level 4: research.

**Definition.** For a smooth map germ f, take vector-valued germs along f and remove three kinds of variation: source derivatives df(X), vectors with entries in the ideal of the components of f, and constant target vectors. Call the resulting real vector space N. It lists the changes that neither coordinate changes nor target translations can absorb (our own).

**Problem.** If the quotient by the first two kinds of variations is finite-dimensional, dim N is the least parameter count for a stable unfolding. Such an unfolding includes its parameters among its outputs and absorbs small perturbations by source and target coordinate changes locally.

**How the definition helps.** By the stability criterion, the parameter derivatives of a stable unfolding must span N, so it needs at least dim N parameters (our own explanation). Adding basis representatives of N with independent coefficients attains that number.

**Paper or page:** [A note on 1-parameter stable unfoldings](https://arxiv.org/abs/2410.10321v1). It says: “is a minimal stable unfolding of f.”

**Sources:**

- [Ignacio Breva Ribes, Raúl Oset Sinha, A note on 1-parameter stable unfoldings](https://arxiv.org/abs/2410.10321v1)

### Infinitesimal versality counts parameters

**Remember:** Each parameter supplies at most one independent direction.

*Makes the theorem clean to state or prove.* MSC 58K60 (Deformation of singularities), 58K40. arXiv math.AG. Level 4: research.

**Definition.** For a formal map germ f at zero over ℂ, quotient the vector-valued series along f by all df(X) + Y ∘ f. Here X and Y are formal source and target vector fields, constants included. An unfolding is infinitesimally versal if its parameter derivatives at f span this quotient, the directions that coordinate changes cannot absorb.

**Problem.** If the quotient has finite dimension, its dimension is the minimum number of parameters for formal versality. Formal versality means every formal family of the map comes from parameter substitution and parameter-dependent source and target coordinate changes.

**How the definition helps.** Spanning a space of dimension d needs at least d parameter derivatives (our own explanation). Adding d independent parameters times basis representatives attains that count, by the formal versality theorem.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “is the minimal number of parameters in a 𝒢-versal unfolding.”

**Sources:**

- [Dmitry Kerner, Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1)

### Unfoldings preserve local algebras

**Remember:** Quotienting by the output parameters sets them to zero.

*True by definition.* MSC 58K60 (Deformation of singularities), 58K40. arXiv math.CV. Level 4: research.

**Definition.** An unfolding of a holomorphic germ f is a germ (x,u) ↦ (g(x,u),u) with g(x,0) = f(x), so the parameters u appear among its outputs. Its local algebra is the ring of source germs in (x,u) modulo the ideal of all output components, the u included.

**Problem.** Every unfolding has a local algebra isomorphic to that of its original map germ.

**How the definition helps.** Because the parameters are outputs, the quotient sets u = 0 and leaves functions of x modulo g(x,0) = f(x) (our own explanation). Dropping the parameter outputs can change the answer. For g(x,u) = x² + u alone the quotient still has a free variable, whereas including u gives the relation x² = 0.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “If Ψ̂ is an unfolding of Ψ”

**Sources:** none listed. No primary source with a working link was found.

### Universal jet classes pull back

**Remember:** Compute the class in the universal bundle, then pull it back.

*True by definition.* MSC 58K65 (Topological invariants on manifolds), 58K05. arXiv math.AG, math.AT. Level 4: research.

**Definition.** Take a closed complex algebraic locus of jets, the values and derivatives through a fixed order, of pure codimension and preserved by coordinate changes. Its Thom polynomial is the cohomology class dual to the locus in the universal bundle of jets.

**Problem.** For a holomorphic map whose jets meet every smooth stratum of the locus transversely, the Thom polynomial gives the class of its singularity locus. One pulls it back by the map classifying the jet coordinate bundle.

**How the definition helps.** Transverse inverse images preserve the class dual to a locus, so one universal computation serves every map (our own explanation). Computing the universal class itself requires a separate calculation.

**Paper or page:** [Thom polynomials for singularities of maps](https://arxiv.org/abs/2502.16727v2). It says: “where W(s):=s⁻¹(W(E)) and ρ: M → BG is the classifying map”

**Sources:** none listed. No primary source with a working link was found.
