### Finite strain ignores rigid rotations

**Remember:** Measure change in squared length and the rotation drops out.

*True by definition.* MSC 74A05 (Kinematics of deformation). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let F be the derivative of the deformation map. Define the Green–Lagrange strain as E = ½(FᵀF − I), instead of just symmetrizing the displacement gradient.

**Problem.** Superposing a rigid motion does not change Green–Lagrange strain. In particular, this strain vanishes for a pure rigid motion.

**How the definition helps.** In our own argument, FᵀF measures squared lengths, which a rigid motion preserves. A translation leaves F unchanged, and a rotation R replaces it by RF. Since RᵀR = I, both give the same strain. The usual linear approximation keeps only the symmetric part of F − I. It gives nonzero strain for a planar half-turn because that approximation discards quadratic terms.

**nLab:** [strain tensor](https://ncatlab.org/nlab/show/strain+tensor). It says: “the corresponding strain tensor expresses the deformation of the body in reaction to these forces.”

**Wikipedia:** [Finite strain theory](https://en.wikipedia.org/wiki/Finite_strain_theory). It says: “Physically, the Cauchy–Green tensor gives us the square of local change in distances due to deformation”

**Sources:** none listed. No primary source with a working link was found.

### Reference density fixes parcel mass

**Remember:** Multiply current density by the parcel’s volume ratio to recover its reference density.

*True by definition.* MSC 74A05 (Kinematics of deformation). arXiv physics.class-ph, math.AP. Level 2: later undergraduate.

**Definition.** Label each parcel by its initial position X and let x(t, X) be its current position. Multiply the current density by the determinant of the derivative with respect to X. This gives mass density per unit reference volume instead of per unit current volume.

**Problem.** In a smooth motion that conserves mass and has an invertible, orientation-preserving deformation map, density per reference volume stays fixed. Conversely, fixing this density enforces mass conservation for every material subregion.

**How the definition helps.** In our own proof, using reference density turns conservation on moving regions into equality of integrals on fixed regions. The change-of-variables formula gives the volume determinant. If every parcel keeps its mass, the integrals agree on every reference region, so the continuous densities agree pointwise. Conversely, a time-independent reference density gives constant parcel mass by integration. The quoted paper illustrates the special case of constant reference density.

**Paper or page:** [Separable motions for self-gravitating hyperelastic matter](https://arxiv.org/abs/2506.02278v1). It says: “ρ(t, x(t, X)) det Dx(t, X) = ρ̄”

**Sources:**

- [J. Jang and T. M. Leslie, Separable motions for self-gravitating hyperelastic matter (2025).](https://doi.org/10.3934/cam.2025032)

### Airy’s function builds in equilibrium

**Remember:** Put stresses in crossed second derivatives and the force balance cancels.

*True by definition.* MSC 74B05 (Classical linear elasticity), 74G05. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Airy’s stress function φ replaces three stress components in a plane. Its second y derivative gives horizontal normal stress, and its second x derivative gives vertical normal stress. Its negative mixed derivative gives shear stress, the force parallel to a surface per unit area.

**Problem.** Any three-times continuously differentiable Airy stress function generates a symmetric planar stress in equilibrium when there are no body forces.

**How the definition helps.** In our own proof, Airy’s choice makes each force balance the difference of two equal mixed derivatives. Equilibrium requires zero net force on each small region. The converse requires integration. On a region where every loop contracts, the balance equations give a single-valued φ. A separate condition checks whether the resulting stress comes from an elastic displacement.

**Wikipedia:** [Stress functions](https://en.wikipedia.org/wiki/Stress_functions). It says: “σₓ = ∂²φ/∂y² ; σᵧ = ∂²φ/∂x² ; σₓᵧ = −∂²φ/(∂x ∂y) − (fₓy + fᵧx)”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric stiffness makes work reciprocal

**Remember:** Swap the displacements in the stiffness form and the work stays the same.

*True by definition.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For a linear elastic body with quadratic stored energy, let a be the symmetric bilinear form associated with that energy. Define equilibrium under load P by a(u,v) = P(v) for every allowed test displacement v. Here u is the actual displacement and P(v) is the work of the load through v.

**Problem.** For two loads on the same linear elastic body with the same fixed supports, each does equal work through the displacement produced by the other.

**How the definition helps.** In our own proof, the energy formulation expresses both works as values of the same symmetric form. Each displacement is an allowed test for the other equilibrium equation because both vanish on the supports. Swapping their order preserves the value. The work moves from the usual force balance to deriving the bilinear equilibrium equation from stored energy.

**Wikipedia:** [Betti's theorem](https://en.wikipedia.org/wiki/Betti%27s_theorem). It says: “the work done by the set P through the displacements produced by the set Q is equal to the work done by the set Q through the displacements produced by the set P.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperelastic cycles do zero work

**Remember:** If stress comes from stored energy, returning to the start gives zero work.

*True by definition.* MSC 74B20 (Nonlinear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A deformation map sends each material point to its current position, and F is its derivative. Nominal stress P measures force per unit reference area. A hyperelastic law gives P as the derivative of a single stored energy density W with respect to F. A general elastic law can specify P directly.

**Problem.** For continuously differentiable W, stress does zero net work per unit reference volume along any closed, piecewise smooth path of deformation gradients.

**How the definition helps.** In our own words, the definition makes stress work the integral of an exact derivative. The chain rule gives the time derivative of W(F), whose integral vanishes around a closed path. The work, in our own account, is finding a single-valued energy that generates the stress law.

**Wikipedia:** [Hyperelastic material](https://en.wikipedia.org/wiki/Hyperelastic_material). It says: “the stress–strain relationship derives from a strain energy density function.”

**Sources:** none listed. No primary source with a working link was found.

### Deviatoric stress removes pressure from yield

**Remember:** Subtract the mean stress and uniform pressure disappears.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Mean normal stress is one third of the trace of the three-dimensional stress matrix. Subtract this mean times the identity to get the deviatoric stress. The von Mises criterion predicts the onset of permanent deformation when the sum of squares of the deviatoric stress components reaches a material threshold.

**Problem.** Adding uniform pressure does not move a stress state toward or away from von Mises yield.

**How the definition helps.** Testing only the deviatoric stress removes uniform pressure from the yield criterion. In our own proof, adding qI increases the mean stress by q, so subtraction cancels the added term. The equivalent test using differences of principal stresses gives the same result because uniform pressure shifts all three eigenvalues equally. Experiments determine whether this criterion describes a given material.

**Wikipedia:** [Von Mises yield criterion](https://en.wikipedia.org/wiki/Von_Mises_yield_criterion). It says: “This implies that the yield condition is independent of hydrostatic stresses.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected solids admit compatible displacements

**Remember:** If every loop contracts, locally compatible strains fit together throughout the body.

*Rules out counterexamples.* MSC 74A05 (Kinematics of deformation), 74B05. arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** A planar strain is compatible if it equals the symmetric gradient of a single-valued displacement. Denote the horizontal, vertical and off-diagonal strain entries by a, b and c. The Saint-Venant condition says that the second y derivative of a plus the second x derivative of b equals twice the mixed derivative of c.

**Problem.** A smooth planar strain satisfying the Saint-Venant condition on a simply connected region comes from a single-valued displacement. The local condition is not sufficient on an annulus.

**How the definition helps.** In our own proof, when every loop contracts, integrating a curl-free field between two points gives a path-independent result. Apply this first to recover the local rotation and then to recover displacement. On an annulus, local displacements (θ, 0), with θ the polar angle, give the same smooth strain wherever their angle branches overlap. Continuing around the hole adds (2π, 0) to the displacement. Any other local displacement differs by an infinitesimal rigid motion, which cannot cancel that jump.

**Wikipedia:** [Compatibility (mechanics)](https://en.wikipedia.org/wiki/Compatibility_%28mechanics%29). It says: “Such an integration is possible if the Saint-Venant's tensor (or incompatibility tensor) R(ε) vanishes in a simply-connected body”

**Sources:**

- [C. Amrouche, P. G. Ciarlet, L. Gratie and S. Kesavan, On Saint Venant’s compatibility conditions and Poincaré’s lemma (2006).](https://doi.org/10.1016/j.crma.2006.03.026)

### Stretch represents objective elastic energy

**Remember:** Keep the stretch matrix and discard the superposed rotation.

*True by definition. Confidence: medium.* MSC 74A20 (Theory of constitutive functions in solid mechanics), 74B20. arXiv physics.class-ph. Level 3: graduate.

**Definition.** An objective elastic energy has W(RF) = W(F) for every proper rotation R. Here F is the derivative of the deformation map. Use the squared stretch matrix FᵀF as the energy’s argument instead of F directly.

**Problem.** Every objective stored energy on matrices of positive determinant is a function of FᵀF. Conversely, every function of FᵀF is objective.

**How the definition helps.** In our own proof, FᵀF removes the rotation because RᵀR equals the identity. This makes every energy written in terms of FᵀF objective. The converse uses polar decomposition, which factors F into a rotation times the positive square root of FᵀF. Objectivity lets us discard that rotation, leaving an energy determined entirely by FᵀF.

**Wikipedia:** [Walter Noll](https://en.wikipedia.org/wiki/Walter_Noll). It says: “the constitutive laws governing the internal conditions of a physical system and the interactions between its parts should not depend on whatever external frame of reference is used to describe them.”

**Sources:** none listed. No primary source with a working link was found.

### Clamping removes Korn’s free rotation

**Remember:** Clamp the edge so rigid rotation cannot hide from the strain.

*Rules out counterexamples.* MSC 74B05 (Classical linear elasticity), 74G45. arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** Infinitesimal strain is the symmetric part of the gradient of a displacement. Define clamped displacements by taking limits of smooth displacements supported strictly inside the body. Take these limits in mean square for both the fields and their first derivatives.

**Problem.** For clamped displacements in a bounded region, the integral of the squared gradient is at most twice the integral of the squared strain. Each squared matrix size means the sum of its squared entries.

**How the definition helps.** In our own proof, clamping removes the boundary term when we integrate by parts. Twice the squared strain integral equals the squared gradient integral plus the squared divergence integral. First prove this identity for smooth fields supported inside the body, then pass to the limit defining clamped displacements. Without clamping, an infinitesimal rigid rotation has nonzero gradient and zero strain.

**Wikipedia:** [Korn's inequality](https://en.wikipedia.org/wiki/Korn%27s_inequality). It says: “In (linear) elasticity theory, the symmetric part of the gradient is a measure of the deformation”

**Sources:** none listed. No primary source with a working link was found.

### Volume-only polyconvexity is scalar convexity

**Remember:** If only volume matters, test convexity in volume.

*True by definition.* MSC 74B20 (Nonlinear elasticity). arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** An elastic energy is polyconvex if it is a convex function of the minors of the deformation gradient. Minors are determinants of square submatrices. The deformation gradient F is the derivative of the deformation map. For a volume-only energy, write W(F) = h(det F).

**Problem.** For energies W(F) = h(det F) on all real square matrices of a fixed size, three convexity tests agree with scalar convexity of h. Quasiconvexity means that gradient perturbations fixing the boundary cannot lower the average energy of a constant gradient. Rank-one convexity tests lines whose direction matrix has rank one.

**How the definition helps.** In our own proof, convexity of h gives polyconvexity immediately because the determinant itself is a minor. The usual implications then give quasiconvexity and rank-one convexity. Conversely, vary the first diagonal entry of the identity matrix. The resulting rank-one test is exactly scalar convexity of h.

**Paper or page:** [Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain](https://arxiv.org/abs/2409.20051v1). It says: “Then W polyconvex ⇔ W quasiconvex ⇔ W rank one convex ⇔ h convex.”

**Sources:**

- [P. Neff et al., Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain (2025).](https://doi.org/10.1016/j.jmps.2025.106074)

### Crack energy flux is path independent

**Remember:** Subtract stress work from energy flux and the crack contour can move.

*True by definition.* MSC 74R10 (Brittle fracture), 74B20. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Choose x along a straight crack in a plane, and draw a contour from its lower face to its upper face around the tip. Rice’s J-integral integrates two terms along this contour in the undeformed body. Multiply stored energy per unit volume by the x component of the outward unit normal. Subtract the force per unit reference area on the contour dotted with the x derivative of displacement.

**Problem.** Assume the elastic energy depends smoothly on the deformation gradient alone, with the same law throughout the body. Assume equilibrium without body forces, zero force on both crack faces, and smooth fields away from the tip. Then contours enclosing the same tip give equal J-integrals if the region between them contains no other singularities.

**How the definition helps.** In our own proof, subtracting stress work from the energy term makes the divergence of their difference vanish away from the tip. Energy density alone would leave its x derivative. The chain rule cancels that derivative against part of the stress work, and force balance cancels the rest. The divergence theorem compares the contours. The straight faces contribute zero because both traction and the x component of the normal vanish.

**Wikipedia:** [J-integral](https://en.wikipedia.org/wiki/J-integral). It says: “If the faces of the crack do not have any surface tractions on them then the J-integral is also path independent.”

**Sources:**

- [J. R. Rice, A Path Independent Integral and the Approximate Analysis of Strain Concentration by Notches and Cracks (1968).](https://doi.org/10.1115/1.3601206)

### A Dirichlet-to-Neumann boundary map reduces exterior elastic scattering to a bounded domain

**Remember:** Let the boundary answer as the outgoing wave outside would.

*True by definition.* MSC 74J20 (Wave scattering in solid mechanics), 65N30. arXiv math.NA, math.AP. Level 4: research.

**Definition.** Surround the obstacle by an artificial sphere. The Dirichlet-to-Neumann operator sends a displacement on the sphere to the traction, the surface force, of the outgoing elastic wave outside with that displacement. Imposing this relation on the sphere gives a transparent boundary condition for the region inside.

**Problem.** Take elastic scattering of an incident wave by a rigid obstacle in three dimensions. The problem on the unbounded exterior is equivalent to a boundary value problem in a bounded region, with the transparent condition on the sphere.

**How the definition helps.** The operator packs everything about the outgoing exterior wave into one boundary relation. So an interior solution that satisfies it extends to the whole exterior by the outgoing wave with the same boundary values (our own). Conversely, an exterior solution satisfies the relation on the sphere by definition (our own). Computation needs a cut-off series for the operator. The paper shows that this truncation error decays exponentially in the cut-off.

**Paper or page:** [An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions](https://arxiv.org/abs/2101.05835v1). It says: “By constructing a Dirichlet-to-Neumann (DtN) operator and introducing a transparent boundary condition, the scattering problem is reduced equivalently to a boundary value problem in a bounded domain.”

**Sources:**

- [Gang Bao, Peijun Li, Xiaokai Yuan, An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions, arXiv:2101.05835v1 (2021)](https://arxiv.org/abs/2101.05835v1)
