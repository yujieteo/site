### Finite strain ignores rigid rotations

**Remember:** Measure change in squared length and the rotation drops out.

*True by definition.* MSC 74A05 (Kinematics of deformation). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The Green–Lagrange strain is E = ½(FᵀF − I), where F is the derivative of the deformation map. It measures half the change in squared length: a small material vector dX has squared length dX · (FᵀF)dX after deformation.

**Problem.** Superposing a rigid motion does not change Green–Lagrange strain. In particular, this strain vanishes for a pure rigid motion.

**How the definition helps.** Rigid motions preserve lengths: a rotation R turns F into RF with RᵀR = I, and a translation leaves F unchanged (our own). So FᵀF and the strain do not change, and a pure rigid motion has FᵀF = I and zero strain (our own).

**nLab:** [strain tensor](https://ncatlab.org/nlab/show/strain+tensor). It says: “the corresponding strain tensor expresses the deformation of the body in reaction to these forces.”

**Wikipedia:** [Finite strain theory](https://en.wikipedia.org/wiki/Finite_strain_theory). It says: “Physically, the Cauchy–Green tensor gives us the square of local change in distances due to deformation”

**Sources:** none listed. No primary source with a working link was found.

### Reference density fixes parcel mass

**Remember:** Count mass per starting volume, and it never changes.

*True by definition.* MSC 74A05 (Kinematics of deformation). arXiv physics.class-ph, math.AP. Level 2: later undergraduate.

**Definition.** Label each parcel by its initial position X, with current position x(t, X). The reference density is mass per unit reference volume: the current density times the volume ratio det Dx(t, X).

**Problem.** In a smooth motion that conserves mass and has an invertible, orientation-preserving deformation map, density per reference volume stays fixed. Conversely, fixing this density enforces mass conservation for every material subregion.

**How the definition helps.** By change of variables, the mass of a material region is the integral of reference density over its fixed reference region (our own). So mass is conserved on every material region exactly when reference density is constant in time, using continuity for the pointwise step (our own).

**Paper or page:** [Separable motions for self-gravitating hyperelastic matter](https://arxiv.org/abs/2506.02278v1). It says: “ρ(t, x(t, X)) det Dx(t, X) = ρ̄”

**Sources:**

- [J. Jang and T. M. Leslie, Separable motions for self-gravitating hyperelastic matter (2025).](https://doi.org/10.3934/cam.2025032)

### Central bond forces cancel torque

**Remember:** Opposite forces along one line cannot twist.

*Rules out counterexamples.* MSC 74A70 (Peridynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** In a bond model of a solid, the two end forces of a bond are equal and opposite. They act along the line joining the deformed ends, so the pair has no turning effect.

**Problem.** For a bounded body containing both ends of every bond considered, the internal forces produce zero total torque if the pair forces are integrable.

**How the definition helps.** Each bond’s two forces share a line through both ends, so their torques cancel, and integrating over bonds gives zero total torque. In our own counterexample, equal and opposite sideways forces at two different points cancel in total force but leave a torque.

**Wikipedia:** [Peridynamics](https://en.wikipedia.org/wiki/Peridynamics). It says: “the pairwise force density vector has the same direction as the relative deformed ray-vector”

**Sources:**

- [S. A. Silling (2000), Reformulation of elasticity theory for discontinuities and long-range forces](https://doi.org/10.1016/S0022-5096(99)00029-0)

### Airy’s function builds in equilibrium

**Remember:** Put stresses in crossed second derivatives and the force balance cancels.

*True by definition.* MSC 74B05 (Classical linear elasticity), 74G05. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Airy’s stress function φ gives planar stresses as second derivatives in crossed directions: σₓ = ∂²φ/∂y², σᵧ = ∂²φ/∂x², and shear σₓᵧ = −∂²φ/∂x∂y. Each force balance then compares two mixed third derivatives of φ (our own).

**Problem.** Any three-times continuously differentiable Airy stress function generates a symmetric planar stress in equilibrium when there are no body forces.

**How the definition helps.** The horizontal balance is ∂σₓ/∂x + ∂σₓᵧ/∂y = ∂³φ/∂x∂y² − ∂³φ/∂x∂y² = 0, and the vertical one cancels the same way (our own). The mixed derivatives agree because φ is three times continuously differentiable (our own). One formula gives both shear entries, so the stress is symmetric (our own).

**Wikipedia:** [Stress functions](https://en.wikipedia.org/wiki/Stress_functions). It says: “σₓ = ∂²φ/∂y² ; σᵧ = ∂²φ/∂x² ; σₓᵧ = −∂²φ/(∂x ∂y) − (fₓy + fᵧx)”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric stiffness makes work reciprocal

**Remember:** Write work as a symmetric form, then swap the two displacements.

*True by definition.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For a linear elastic body with quadratic stored energy, let a be its symmetric bilinear form. A displacement u is in equilibrium under load P if a(u,v) = P(v), the work of P through v, for every allowed test displacement v.

**Problem.** For two loads on the same linear elastic body with the same fixed supports, each does equal work through the displacement produced by the other.

**How the definition helps.** Allowed displacements vanish on the shared supports, so each equilibrium displacement tests the other: P(u<sub>Q</sub>) = a(u<sub>P</sub>,u<sub>Q</sub>) and Q(u<sub>P</sub>) = a(u<sub>Q</sub>,u<sub>P</sub>) (our own). Symmetry of a makes these two works equal (our own).

**Wikipedia:** [Betti's theorem](https://en.wikipedia.org/wiki/Betti%27s_theorem). It says: “the work done by the set P through the displacements produced by the set Q is equal to the work done by the set Q through the displacements produced by the set P.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetry leaves twenty-one elastic constants

**Remember:** Six strain coordinates give twenty-one entries in a symmetric stiffness matrix.

*True by definition.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The elastic stiffness is the matrix of second derivatives, or Hessian, of the stored energy, taken on the six-dimensional space of symmetric strains.

**Problem.** At a point in a three-dimensional linear elastic body, suppose stress is the derivative of a twice continuously differentiable strain energy. At most twenty-one independent constants determine the stiffness there.

**How the definition helps.** A Hessian is symmetric, and a symmetric 6 × 6 matrix has 6 diagonal and 15 off-diagonal free entries, 21 in all (our own). The work lies in showing that stress derives from an energy on symmetric strains.

**nLab:** [elasticity](https://ncatlab.org/nlab/show/elasticity). It says: “here the strain tensor is related by a linear equation to the stress tensor”

**Wikipedia:** [Elasticity tensor](https://en.wikipedia.org/wiki/Elasticity_tensor). It says: “This fact follows from the symmetry of the stress and strain tensors, together with the requirement that the stress derives from an elastic energy potential.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperelastic cycles do zero work

**Remember:** Stress is the slope of one energy, so loops return it.

*True by definition.* MSC 74B20 (Nonlinear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A nominal stress law P is hyperelastic if P(F) = ∂W/∂F for one single-valued stored energy density W, at every admissible deformation gradient F. Then the rate of stress work along any path of F equals the rate of change of W (our own).

**Problem.** For continuously differentiable W, stress does zero net work per unit reference volume along any closed, piecewise smooth path of deformation gradients.

**How the definition helps.** Along a path F(t), the chain rule gives the stress power as the time derivative of W(F(t)) (our own). Integrating around a closed path returns W to its start, so the net work is zero (our own).

**Wikipedia:** [Hyperelastic material](https://en.wikipedia.org/wiki/Hyperelastic_material). It says: “the stress–strain relationship derives from a strain energy density function.”

**Sources:** none listed. No primary source with a working link was found.

### Deviatoric stress removes pressure from yield

**Remember:** Subtract the mean stress and uniform pressure disappears.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The deviatoric stress is the stress minus its mean normal stress, one third of the trace, times the identity, so it ignores any uniform pressure. The von Mises criterion predicts the onset of permanent deformation when the sum of squares of the deviatoric entries reaches a material threshold.

**Problem.** Adding uniform pressure does not move a stress state toward or away from von Mises yield.

**How the definition helps.** Adding qI raises the mean stress by q, so the deviatoric stress and hence the criterion are unchanged (our own). Experiments decide whether the criterion fits a given material.

**Wikipedia:** [Von Mises yield criterion](https://en.wikipedia.org/wiki/Von_Mises_yield_criterion). It says: “This implies that the yield condition is independent of hydrostatic stresses.”

**Sources:** none listed. No primary source with a working link was found.

### Parallel damping prevents instant creep

**Remember:** A bounded stress cannot jump the strain of a damper.

*Rules out counterexamples.* MSC 74D05 (Linear constitutive equations for materials with memory). arXiv cond-mat.mtrl-sci. Level 2: later undergraduate.

**Definition.** The Kelvin–Voigt model puts a spring and a viscous damper in parallel, so both share one strain, a relative change in length. The total stress is the spring stress, proportional to strain, plus the damper stress, proportional to strain rate.

**Problem.** A bounded stress step cannot cause an instantaneous strain jump in a Kelvin–Voigt solid with positive viscosity.

**How the definition helps.** Viscosity times strain rate equals stress minus stiffness times strain, so bounded stress keeps the strain rate finite and the strain continuous (our own). A spring in series with the damper, by contrast, jumps at once under a nonzero stress step (our own).

**Wikipedia:** [Kelvin–Voigt material](https://en.wikipedia.org/wiki/Kelvin%E2%80%93Voigt_material). It says: “Since the two components of the model are arranged in parallel, the strains in each component are identical:”

**Sources:** none listed. No primary source with a working link was found.

### Effective length unifies buckling loads

**Remember:** Effective length is half a wave of the buckling moment.

*Makes the theorem clean to state or prove.* MSC 74G60 (Bifurcation and buckling). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For an ideal straight uniform column under axial compression, the first buckling mode has a sinusoidal bending moment. The effective length is half its wavelength, the gap between consecutive zeros, extending the sinusoid past the ends if needed.

**Problem.** For an ideal slender column, the first buckling load equals π² times bending stiffness divided by effective length squared. Clamping both ends gives four times the load for two pinned ends when all other properties agree.

**How the definition helps.** The column equation makes the moment a sinusoid with wave number √(load / bending stiffness), so a half-wavelength gives the stated formula (our own). Pinned ends give effective length equal to the column length and clamped ends give half of it, hence four times the load (our own).

**Wikipedia:** [Buckling](https://en.wikipedia.org/wiki/Buckling). It says: “the distance between inflection points on the displacement curve of the deflected column”

**Sources:** none listed. No primary source with a working link was found.

### Complementary energy gives displacement

**Remember:** Maximize load times displacement minus stored energy.

*True by definition.* MSC 74G65 (Energy minimization in equilibrium problems in solid mechanics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let U(q) be the stored energy at displacement q, with force F = U′(q). The complementary energy at load F is the maximum of Fq − U(q) over the chosen displacement interval, the Legendre transform of U.

**Problem.** Suppose U is twice continuously differentiable with U″ &gt; 0 on an open interval. For loads in the range of U′ there, the derivative of complementary energy equals the displacement.

**How the definition helps.** At the maximizing displacement F = U′(q), so the terms from the change of q cancel and the derivative in F is q (our own). Strict convexity makes the maximizer unique (our own). Writing stored energy directly in F instead gives the wrong answer: for F = q³ its derivative is q/3 (our own).

**Wikipedia:** [Castigliano's method](https://en.wikipedia.org/wiki/Castigliano%27s_method). It says: “If the force-displacement curve is nonlinear then the complementary strain energy needs to be used instead of strain energy.”

**Sources:** none listed. No primary source with a working link was found.

### Independent rotation reveals beam shear

**Remember:** Slope minus section rotation is the shear.

*Makes the theorem clean to state or prove.* MSC 74K10 (Rods (beams, columns, shafts, arches, rings, etc.)). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** In a Timoshenko beam, cross-section rotation varies independently of centerline slope, and shear strain is the slope minus that rotation. The Euler–Bernoulli model sets the two equal, which makes the shear strain zero.

**Problem.** Consider a uniform linear Timoshenko beam clamped at one end under a transverse point load at its free end. Shear adds a tip displacement equal to the load times the length divided by the shear stiffness.

**How the definition helps.** Since slope = rotation + shear strain, the tip displacement gains the integral of the shear strain. Force balance makes the shear force equal the load along the whole beam, so the shear strain is load over shear stiffness (our own).

**Wikipedia:** [Timoshenko–Ehrenfest beam theory](https://en.wikipedia.org/wiki/Timoshenko%E2%80%93Ehrenfest_beam_theory). It says: “unlike the Euler–Bernoulli theory, the angular deflection is another variable and not approximated by the slope of the deflection.”

**Sources:** none listed. No primary source with a working link was found.

### Normal lines remove plate shear

**Remember:** A normal that stays normal has no transverse shear.

*True by definition.* MSC 74K20 (Plates). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** In the Kirchhoff–Love plate model, lines that start straight and normal to the middle surface stay straight and normal as the plate bends. Transverse shear strain measures the change of that right angle, so the model holds it at zero.

**Problem.** In the linear Kirchhoff–Love plate model, both transverse shear strains vanish for every admissible displacement.

**How the definition helps.** Keeping the right angle fixes the in-plane displacement at height z as minus z times the slope of the middle surface (our own). In each transverse shear strain this term cancels the slope exactly (our own). The modeling work is justifying the constraint for a thin plate.

**Wikipedia:** [Kirchhoff–Love plate theory](https://en.wikipedia.org/wiki/Kirchhoff%E2%80%93Love_plate_theory). It says: “straight lines normal to the mid-surface remain normal to the mid-surface after deformation”

**Sources:**

- [A. E. H. Love (1888), The small free vibrations and deformation of a thin elastic shell](https://doi.org/10.1098/rsta.1888.0016)

### Simply connected solids admit compatible displacements

**Remember:** If every loop contracts, locally compatible strains fit together throughout the body.

*Rules out counterexamples.* MSC 74A05 (Kinematics of deformation), 74B05. arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** A planar strain is compatible if it is the symmetric gradient of one single-valued displacement on the whole region. The Saint-Venant condition ∂²a/∂y² + ∂²b/∂x² = 2∂²c/∂x∂y, on diagonal entries a, b and off-diagonal entry c, guarantees this only locally (our own).

**Problem.** A smooth planar strain satisfying the Saint-Venant condition on a simply connected region comes from a single-valued displacement. The local condition is not sufficient on an annulus.

**How the definition helps.** On a simply connected region curl-free fields have potentials, so integrate first for the rotation and then for both displacement components (our own). On an annulus, the local displacement (θ,0), with θ a polar-angle branch, has single-valued strain but gains (2π,0) around the hole (our own). Any other local displacement differs from it by an infinitesimal rigid motion, which is single-valued, so no single-valued displacement exists (our own).

**Wikipedia:** [Compatibility (mechanics)](https://en.wikipedia.org/wiki/Compatibility_%28mechanics%29). It says: “Such an integration is possible if the Saint-Venant's tensor (or incompatibility tensor) R(ε) vanishes in a simply-connected body”

**Sources:**

- [C. Amrouche, P. G. Ciarlet, L. Gratie and S. Kesavan, On Saint Venant’s compatibility conditions and Poincaré’s lemma (2006).](https://doi.org/10.1016/j.crma.2006.03.026)

### Pullback keeps stress symmetric

**Remember:** Pull back both indices to keep stress symmetric.

*True by definition.* MSC 74A10 (Stress). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Let F be the invertible, orientation-preserving derivative of a deformation and σ the current stress matrix. The second Piola–Kirchhoff stress S = (det F)F⁻¹σF⁻ᵀ pulls both indices of σ back, with F⁻¹ and its transpose on the two sides.

**Problem.** Suppose the only torques on a classical solid come from forces. Then the second stress is symmetric even for large deformations.

**How the definition helps.** A product AσAᵀ is symmetric whenever σ is, and angular momentum balance with only force torques makes σ symmetric. The first stress P = (det F)σF⁻ᵀ acts on one side only. In our own example, a quarter turn under uniform pressure makes it nonsymmetric.

**Wikipedia:** [Piola–Kirchhoff stress tensors](https://en.wikipedia.org/wiki/Piola%E2%80%93Kirchhoff_stress_tensors). It says: “This tensor, a one-point tensor, is symmetric.”

**Sources:** none listed. No primary source with a working link was found.

### Weak balance detects point loads

**Remember:** A test displacement can feel a point force.

*Rules out counterexamples.* MSC 74A10 (Stress). arXiv math.AP. Level 3: graduate.

**Definition.** A planar stress σ balances a point force b at x₀ weakly if ∫ σ:∇v dA = b·v(x₀) for every smooth compactly supported test displacement v. Here σ:∇v sums the products of matching entries, and the right side lets a test displacement feel the load through its value at x₀.

**Problem.** Suppose the body is in equilibrium under one point force, and the stress is smooth elsewhere. Across any enclosing circle inside the body, the total outward stress force equals minus the applied force.

**How the definition helps.** Take v equal to a constant vector e inside the circle and zero near the outer boundary, so the right side is b·e (our own). Integration by parts outside the circle, where the stress is smooth and balanced, turns the left side into the force across the circle (our own). Zero stress balances pointwise away from the load but fails this test, as our own counterexample shows.

**Paper or page:** [Point Singularities in Incompatible Elasticity](https://arxiv.org/abs/2107.10755v1). It says: “∫∂Bε (σ\|Ω−O n) dl = −b⁽⁰˒⁰⁾”

**Sources:**

- [Point Singularities in Incompatible Elasticity, Lemma 3.2](https://arxiv.org/abs/2107.10755v1)

### Stretch represents objective elastic energy

**Remember:** Keep the stretch matrix and discard the superposed rotation.

*True by definition. Confidence: medium.* MSC 74A20 (Theory of constitutive functions in solid mechanics), 74B20. arXiv physics.class-ph. Level 3: graduate.

**Definition.** An elastic energy W is objective if W(RF) = W(F) for every proper rotation R, where F is the derivative of the deformation map. The squared stretch matrix FᵀF records stretch and forgets any such rotation (our own).

**Problem.** Every objective stored energy on matrices of positive determinant is a function of FᵀF. Conversely, every function of FᵀF is objective.

**How the definition helps.** Since RᵀR = I, FᵀF is unchanged when F becomes RF, so every function of FᵀF is objective (our own). Conversely, polar decomposition writes F = RU with U the positive square root of FᵀF, and objectivity gives W(F) = W(U) (our own).

**Wikipedia:** [Walter Noll](https://en.wikipedia.org/wiki/Walter_Noll). It says: “the constitutive laws governing the internal conditions of a physical system and the interactions between its parts should not depend on whatever external frame of reference is used to describe them.”

**Sources:** none listed. No primary source with a working link was found.

### Clamping removes Korn’s free rotation

**Remember:** Clamp the edge so rigid rotation cannot hide from the strain.

*Rules out counterexamples.* MSC 74B05 (Classical linear elasticity), 74G45. arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** Infinitesimal strain is the symmetric part of the displacement gradient. A clamped displacement is a limit of smooth displacements that vanish near the boundary, in mean square for the field and its first derivatives. Clamping rules out infinitesimal rigid rotations, which have nonzero gradient but zero strain.

**Problem.** For clamped displacements in a bounded region, the integral of the squared gradient is at most twice the integral of the squared strain. Each squared matrix size means the sum of its squared entries.

**How the definition helps.** For smooth fields that vanish near the boundary, integration by parts has no boundary term (our own). It gives twice the squared strain integral as the squared gradient integral plus the squared divergence integral (our own). This bound passes to the limits that define clamped displacements (our own).

**Wikipedia:** [Korn's inequality](https://en.wikipedia.org/wiki/Korn%27s_inequality). It says: “In (linear) elasticity theory, the symmetric part of the gradient is a measure of the deformation”

**Sources:** none listed. No primary source with a working link was found.

### Plane stress minimizes elastic energy

**Remember:** Free transverse strain can only lower elastic energy.

*True by definition. Confidence: medium.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Fix the in-plane strain components and let the out-of-plane strain components vary. Plane stress chooses them so that the force per unit area across the plane vanishes, and plane strain sets them to zero.

**Problem.** For a positive definite linear elastic energy, plane stress gives no more stored energy than plane strain at the same in-plane strain.

**How the definition helps.** Stress is the derivative of stored energy, so zero stress across the plane means the energy is stationary in the free strain directions (our own). Positive definiteness makes that stationary point the minimum over those directions, and plane strain is one competitor (our own).

**Wikipedia:** [Plane stress](https://en.wikipedia.org/wiki/Plane_stress). It says: “a material is said to be under plane stress if the stress vector is zero across a particular plane.”

**Sources:** none listed. No primary source with a working link was found.

### Proper rotations rule out folds

**Remember:** Allow only proper rotations, and a fold always shows strain.

*Rules out counterexamples.* MSC 74B20 (Nonlinear elasticity). arXiv math.AP. Level 3: graduate.

**Definition.** Measure strain by the distance from the deformation gradient, the matrix of first derivatives of the new position, to the rotations with determinant one. Reflections lie at positive distance from these, so a fold that reflects part of the body has strain (our own).

**Problem.** On an open cube, suppose a deformation and its weak first derivatives are square-integrable. If its strain vanishes almost everywhere, it agrees almost everywhere with one rotation followed by a translation.

**How the definition helps.** The geometric rigidity estimate does the work by bounding the distance to a single rotation. In our own counterexample, allowing all orthogonal matrices gives the fold (x, y) ↦ (\|x\|, y) zero strain, though it is not rigid.

**Paper or page:** [Geometric rigidity in variable domains and derivation of linearized models for elastic materials with free surfaces](https://arxiv.org/abs/2107.10808v5). It says: “there exist R ∈ SO(d) and b ∈ ℝᵈ such that”

**Sources:**

- [Geometric rigidity in variable domains and derivation of linearized models for elastic materials with free surfaces, Proposition 2.9](https://arxiv.org/abs/2107.10808v5)

### Volume-only polyconvexity is scalar convexity

**Remember:** If only volume matters, test convexity in volume.

*True by definition.* MSC 74B20 (Nonlinear elasticity). arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** A volume-only energy has W(F) = h(det F) for every real square matrix F of a fixed size. Polyconvexity means W(F) = g(M(F)) for a convex g of the list M(F) of all minors, and det F is one of them. Rank-one convexity means convexity along every line with a rank-one direction, and det is affine on each such line (our own).

**Problem.** Suppose W(F) = h(det F) on all real square matrices of a fixed positive size. Polyconvexity, quasiconvexity and rank-one convexity of W are each equivalent to convexity of h.

**How the definition helps.** If h is convex, W is a convex function of the minor det F, hence polyconvex, and the usual chain gives the other two (our own). Conversely, varying the first diagonal entry of the identity is a rank-one line with det F = 1 + t (our own). Rank-one convexity of W on it makes h convex (our own).

**Paper or page:** [Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain](https://arxiv.org/abs/2409.20051v1). It says: “Then W polyconvex ⇔ W quasiconvex ⇔ W rank one convex ⇔ h convex.”

**Sources:**

- [P. Neff et al., Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain (2025).](https://doi.org/10.1016/j.jmps.2025.106074)

### Convex dissipation gives monotone flow

**Remember:** Supporting planes make the dissipation law monotone.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv math.AP. Level 3: graduate.

**Definition.** For a convex dissipation potential D, a force ξ is allowed at rate v if the plane through D(v) with slope ξ lies below D. In symbols, D(w) ≥ D(v) + ξ·(w − v) for every rate w. The flow law requires the negative stored-energy gradient to be an allowed force at the actual rate, at almost every time.

**Problem.** Consider two solutions of the same flow law, with the same dissipation potential. At almost every time, the energy-gradient difference paired with the rate difference is nonpositive, taking both differences in the same order.

**How the definition helps.** Write the supporting-plane inequality for each solution at the other solution’s rate and add the two (our own). The D terms cancel, leaving (ξ₁ − ξ₂)·(v₁ − v₂) ≥ 0, which is the stated bound since ξ is the negative energy gradient (our own).

**Paper or page:** [Homogenization of rate-independent elastoplastic spring network models with non-local random fields](https://arxiv.org/abs/2509.09872v1). It says: “⟨Dℰ(t, y₁(t)) − Dℰ(t, y₂(t)), ẏ₁(t) − ẏ₂(t)⟩ ≤ 0.”

**Sources:**

- [Homogenization of rate-independent elastoplastic spring network models with non-local random fields, Lemma 5.10](https://arxiv.org/abs/2509.09872v1)

### Tresca’s stress range stays convex

**Remember:** A cap on eigenvalue spread is a stack of half-spaces.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv cond-mat.mtrl-sci. Level 3: graduate.

**Definition.** A symmetric stress S is in the Tresca elastic region with threshold T ≥ 0 if its extreme eigenvalues differ by at most T. Equivalently, uᵀSu − vᵀSv ≤ T for all unit vectors u and v, a family of linear inequalities in S (our own).

**Problem.** A weighted average of two stress matrices within the Tresca elastic region stays within it when the weights are nonnegative and sum to one.

**How the definition helps.** Each inequality uᵀSu − vᵀSv ≤ T defines a half-space of stress matrices, and an intersection of half-spaces is convex (our own). The maximum of uᵀSu − vᵀSv over unit vectors is the eigenvalue difference, which gives the equivalence. Half this difference is the largest shear stress on any plane.

**Wikipedia:** [Yield surface](https://en.wikipedia.org/wiki/Yield_surface). It says: “In terms of the principal stresses the Tresca criterion is expressed as ½ max(\|σ₁ − σ₂\|, \|σ₂ − σ₃\|, \|σ₃ − σ₁\|) = Sₛᵧ = ½ Sᵧ”

**Sources:** none listed. No primary source with a working link was found.

### Stiffer solids reduce boundary work

**Remember:** Stiffer material lowers every trial, so the maximum cannot rise.

*True by definition.* MSC 74G65 (Energy minimization in equilibrium problems in solid mechanics). arXiv math.AP. Level 3: graduate.

**Definition.** For a fixed boundary force, half its equilibrium work is the maximum of applied work minus stored energy over displacements vanishing on the clamped boundary. Stored energy grows with the elastic coefficients, while applied work does not depend on them (our own).

**Problem.** Take a bounded isotropic linear elastic body without body force, clamped on a boundary part of positive area. If both elastic coefficients stay bounded above and away from zero, increasing them pointwise cannot increase the work of a fixed boundary force.

**How the definition helps.** Raising the coefficients raises the stored energy of each trial displacement, so every trial value and hence the maximum cannot rise (our own). The equilibrium equation shows that the maximum equals half the work through the actual displacement (our own).

**Paper or page:** [Resolution Guarantees for the Reconstruction of Inclusions in Linear Elasticity Based on Monotonicity Methods](https://arxiv.org/abs/2208.06865v1). It says: “λ₀ ≤ λ₁ and μ₀ ≤ μ₁ implies Λ(λ₀, μ₀) ≥ Λ(λ₁, μ₁).”

**Sources:** none listed. No primary source with a working link was found.

### Potentials separate elastic wave modes

**Remember:** One potential carries compression and the other carries shear.

*Makes the theorem clean to state or prove.* MSC 74J10 (Bulk waves in solid mechanics). arXiv math.AP. Level 3: graduate.

**Definition.** Write a planar displacement as the gradient of one scalar potential plus the gradient of a second potential rotated through a right angle. The first part has zero curl, so it moves only by compression, and the second has zero divergence, so it moves only by shear (our own).

**Problem.** In a uniform isotropic linear elastic solid without body force, let the potentials be time-harmonic at one nonzero frequency. If they solve the compression and shear wave equations respectively, their displacement solves the interior elastic wave equation, though boundary conditions can couple them.

**How the definition helps.** The elastic operator acts on a curl-free field with the compression speed and on a divergence-free field with the shear speed (our own). Derivatives commute with the constant-coefficient scalar wave operators, so each part solves the elastic equation, and so does their sum (our own).

**Paper or page:** [A virtual element method for the solution of 2D time-harmonic elastic wave equations via scalar potentials](https://arxiv.org/abs/2303.10696v1). It says: “the decoupling of the elastic vector field into scalar Pressure (P-) and Shear (S-) waves via a suitable Helmholtz-Hodge decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Incompressible flows preserve plate volume

**Remember:** Move deformed points along a divergence-free flow to keep volume exactly.

*True by definition.* MSC 74K20 (Plates). arXiv math.AP. Level 3: graduate.

**Definition.** An incompressible deformation has a derivative with determinant one almost everywhere. To vary it, move each deformed point along the flow of a smooth, bounded, divergence-free velocity field with bounded first derivatives. Such a flow preserves volume exactly.

**Problem.** Every such variation of an incompressible plate has deformation gradient of determinant one almost everywhere.

**How the definition helps.** The flow of a divergence-free field has derivative of determinant one, as differentiating the determinant along each trajectory shows. Composition multiplies determinants, so the varied deformation keeps determinant one almost everywhere. In our own comparison, adding the velocity times a small step keeps the constraint only to first order.

**Paper or page:** [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime](https://arxiv.org/abs/1211.3942v1), [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime](https://arxiv.org/abs/1211.3942v1). It says: “Given a deformation uʰ ∈ W¹˒²(Ωʰ, ℝ³) with det ∇uʰ = 1”

**Sources:**

- [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime, Lemma 2.1 and Theorem 2.3](https://arxiv.org/abs/1211.3942v1)

### Zero membrane strain forbids double curvature

**Remember:** The slope term ties stretching to curvature.

*Rules out counterexamples.* MSC 74K20 (Plates). arXiv math.AP. Level 3: graduate.

**Definition.** For a flat plate with in-plane displacement u and height w, membrane strain is the symmetric gradient of u plus ½∇w ⊗ ∇w, an outer product. The slope term records the stretching forced by bending the plate into the height w (our own).

**Problem.** Assume u has square-integrable weak derivatives through order one and w through order two on a planar open set. If membrane strain vanishes, the matrix of second derivatives of w has zero determinant almost everywhere.

**How the definition helps.** The planar compatibility operator removes every symmetric gradient and turns ½∇w ⊗ ∇w into minus the Hessian determinant of w (our own). So zero membrane strain makes that determinant vanish, once the identity is justified for weak derivatives. In our own counterexample on a disk, u = 0 and w = x² + y² give zero linear strain but determinant four.

**Paper or page:** [An improved existence theorem for rigid nonlinearly elastic plates](https://arxiv.org/abs/2511.14487v1). It says: “only if det(∂αβu₃) = 0 in ω.”

**Sources:**

- [An improved existence theorem for rigid nonlinearly elastic plates, Proposition 1](https://arxiv.org/abs/2511.14487v1)

### Crack energy flux is path independent

**Remember:** Subtract stress work from energy flux and the crack contour can move.

*True by definition.* MSC 74R10 (Brittle fracture), 74B20. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Rice’s J-integral is ∫\_Γ \[W nₓ − (Pn)·∂u/∂x\] ds over a contour Γ around a straight crack tip, from the lower to the upper face. Here W is stored energy density, P nominal stress, u displacement and n the outward unit normal, in reference coordinates with x along the crack. The integrand is the flux of a field with zero divergence wherever the body is smooth and in equilibrium (our own).

**Problem.** Assume the stored energy is one smooth function of the deformation gradient throughout the body, with equilibrium without body forces and force-free crack faces. If the fields are smooth away from the tip, contours enclosing the same tip give equal J-integrals when no other singularity lies between them.

**How the definition helps.** Equilibrium and the chain rule cancel all terms of the flux divergence away from the tip (our own). On the straight faces both nₓ and the traction Pn vanish (our own). The divergence theorem on the region between two contours then gives equal integrals (our own).

**Wikipedia:** [J-integral](https://en.wikipedia.org/wiki/J-integral). It says: “If the faces of the crack do not have any surface tractions on them then the J-integral is also path independent.”

**Sources:**

- [J. R. Rice, A Path Independent Integral and the Approximate Analysis of Strain Concentration by Notches and Cracks (1968).](https://doi.org/10.1115/1.3601206)

### Crack size omits waiting time

**Remember:** The crack path does not record waiting time.

*Makes the theorem clean to state or prove.* MSC 74R10 (Brittle fracture). arXiv math.AP. Level 3: graduate.

**Definition.** Let Σ(t) be the crack state and L(t) its size, its length in the plane or area in three dimensions. The size-indexed path assigns to each attained size s the state Σ(t) at any time t with L(t) = s.

**Problem.** Suppose a nested crack grows continuously in size and gains positive size whenever its state changes. It has a unique path indexed by size that recovers the crack at every time.

**How the definition helps.** The path is well defined because the state cannot change while the size stays fixed (our own). Nesting orders the states and strict size increase separates different ones, so Σ(t) = Σₚ(L(t)) (our own). Continuity of size makes the attained sizes an interval (our own).

**Paper or page:** [What is the physical origin of the gradient flow structure of variational fracture models?](https://arxiv.org/abs/2311.00730v1). It says: “Σ(t) = Σₚ(L(t)) for t ∈ \[t₀, t₁\]”

**Sources:**

- [What is the physical origin of the gradient flow structure of variational fracture models?, Proposition B.3](https://arxiv.org/abs/2311.00730v1)

### Stress intensities add under superposition

**Remember:** Add the singular coefficients, not the infinite tip stresses.

*True by definition. Confidence: medium.* MSC 74R10 (Brittle fracture). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Near a sharp crack tip, the leading stress term is a sum of a few fixed angular patterns of opening or sliding. Each pattern grows like one over the square root of distance, and its stress intensity is its coefficient in this sum.

**Problem.** Consider a fixed straight crack with unloaded faces in a homogeneous isotropic linear elastic body. For loads with a crack-tip expansion, the intensity for each pattern adds when the stress fields add.

**How the definition helps.** Reading a coefficient off a fixed expansion is linear, so intensities add when stress fields add (our own). The tip stresses themselves are generally infinite and cannot be added. The work lies in deriving the expansion and its distinct angular patterns.

**Wikipedia:** [Stress intensity factor](https://en.wikipedia.org/wiki/Stress_intensity_factor). It says: “Theoretically, as r goes to 0, the stress σᵢⱼ goes to ∞ resulting in a stress singularity.”

**Sources:** none listed. No primary source with a working link was found.

### Pressure normalization permits stress bounds

**Remember:** An invisible constant pressure must be fixed before it can be bounded.

*Rules out counterexamples.* MSC 74A10 (Stress). arXiv math.AP. Level 4: research.

**Definition.** Pressure normalization restricts square-integrable stress fields on a bounded connected Lipschitz body to a closed linear subspace excluding the identity matrix, a uniform pressure. That stress has nonzero trace but zero deviatoric part and zero divergence, so it would break the estimate (our own).

**Problem.** For some constant C, every stress σ in this subspace satisfies ‖tr σ‖₂ ≤ C(‖dev σ‖₂ + ‖div σ‖₋₁), with ‖·‖₂ the square-integral norm. Here dev σ removes the scalar part, and ‖·‖₋₁ takes the supremum over zero-boundary vector fields whose gradient has norm at most one.

**How the definition helps.** The negative-norm Poincaré inequality bounds the mean-zero part of tr σ by its gradient, which is d(div σ − div dev σ) in dimension d (our own). Closedness and exclusion of the identity give a positive distance from the identity to the subspace, which controls the constant part (our own).

**Paper or page:** [Locking-free hybrid high-order method for linear elasticity](https://arxiv.org/abs/2404.02768v2). It says: “The subspace Σ₀ does not contain the identity matrix”

**Sources:**

- [Locking-free hybrid high-order method for linear elasticity, Lemma 3.7](https://arxiv.org/abs/2404.02768v2)

### A Dirichlet-to-Neumann boundary map reduces exterior elastic scattering to a bounded domain

**Remember:** Let the boundary answer as the outgoing wave outside would.

*True by definition.* MSC 74J20 (Wave scattering in solid mechanics), 65N30. arXiv math.NA, math.AP. Level 4: research.

**Definition.** On an artificial sphere around the obstacle, the Dirichlet-to-Neumann operator takes a boundary displacement g. It returns the traction, for the normal out of the sphere, of the outgoing solution of the homogeneous elastic wave equation outside with trace g. So it answers on the sphere exactly as the exterior would (our own).

**Problem.** Take elastic scattering of an incident wave by a rigid obstacle in three dimensions. The problem on the unbounded exterior is equivalent to a boundary value problem in a bounded region, with the transparent condition on the sphere.

**How the definition helps.** The scattered field outside is the unique outgoing solution with its own trace, so its traction equals the operator applied to that trace (our own). Conversely, a bounded-domain solution satisfying this condition extends by that outgoing exterior solution, and the tractions match across the sphere (our own).

**Paper or page:** [An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions](https://arxiv.org/abs/2101.05835v1). It says: “By constructing a Dirichlet-to-Neumann (DtN) operator and introducing a transparent boundary condition, the scattering problem is reduced equivalently to a boundary value problem in a bounded domain.”

**Sources:**

- [Gang Bao, Peijun Li, Xiaokai Yuan, An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions, arXiv:2101.05835v1 (2021)](https://arxiv.org/abs/2101.05835v1)

### Affine boundary data allow gluing

**Remember:** The same boundary displacement lets cell trials join without a seam.

*True by definition.* MSC 74Q05 (Homogenization in equilibrium problems of solid mechanics). arXiv math.AP. Level 4: research.

**Definition.** Fix an affine displacement, a linear map plus a constant. A cell’s energy is the infimum of its bulk energy over displacements equal to this map near the cell’s boundary. Trial displacements on neighboring cells therefore agree where they meet (our own).

**Problem.** Partition a rectangular cell into finitely many rectangles and use the same local energy density and affine boundary values throughout. The whole cell’s energy is at most the sum of the smaller cell energies.

**How the definition helps.** Matching boundary values let near-optimal trials on the small rectangles join into one trial on the whole cell without a jump (our own). Its energy is the sum of theirs, so it bounds the whole cell’s infimum from above (our own). Free boundary values would need a separate estimate for this joining.

**Paper or page:** [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation](https://arxiv.org/abs/2212.13759v1). It says: “defines a subadditive process on (Ω, 𝒯, P).”

**Sources:**

- [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation, Proposition 7.5](https://arxiv.org/abs/2212.13759v1)

### Fracture compactness allows drifting pieces

**Remember:** Mark where displacement escapes to infinity, then test convergence on the remainder.

*Makes the theorem clean to state or prove.* MSC 74R10 (Brittle fracture). arXiv math.AP. Level 4: research.

**Definition.** For displacements uⱼ on U, mark as U∞ the set where \|uⱼ\| tends to infinity, as for a broken piece drifting away (our own). Convergence in measure to u outside U∞ means: for every ε &gt; 0, the volume outside U∞ where \|uⱼ − u\| &gt; ε tends to zero.

**Problem.** Let uⱼ lie in GSBDᵖ(U), the generalized special functions of bounded deformation, on a bounded open body U with p &gt; 1. If crack areas and pth-power integrals of the symmetric strain stay bounded, a subsequence converges in measure outside its divergence set, which has finite perimeter.

**How the definition helps.** A detached piece can translate farther at each step without changing its strain or crack area, so no bound stops it (our own). Marking such points in U∞ lets the theorem state a finite limit on the rest of the body. The compactness theorem supplies the subsequence and the perimeter bound.

**Paper or page:** [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation](https://arxiv.org/abs/2212.13759v1). It says: “the set U∞ := {x ∈ U : \|uⱼ\| → +∞} has finite perimeter”

**Sources:** none listed. No primary source with a working link was found.
