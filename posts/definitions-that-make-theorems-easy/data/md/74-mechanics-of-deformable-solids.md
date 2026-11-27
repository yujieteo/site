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

### Central bond forces cancel torque

**Remember:** Two opposite forces cancel their torque if they act along the same line.

*Rules out counterexamples.* MSC 74A70 (Peridynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** In a bond model of a solid, require opposite forces at a bond’s two ends. Also require both forces to lie along the line between the deformed ends.

**Problem.** For a bounded body containing both ends of every bond considered, the internal forces produce zero total torque if the pair forces are integrable.

**How the definition helps.** The two forces on each bond have zero combined torque because their common line contains both ends. Integrating these pair contributions gives the result. In our own counterexample, equal and opposite sideways forces at separate points cancel total force but leave a torque.

**Wikipedia:** [Peridynamics](https://en.wikipedia.org/wiki/Peridynamics). It says: “the pairwise force density vector has the same direction as the relative deformed ray-vector”

**Sources:**

- [S. A. Silling (2000), Reformulation of elasticity theory for discontinuities and long-range forces](https://doi.org/10.1016/S0022-5096(99)00029-0)

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

### Symmetry leaves twenty-one elastic constants

**Remember:** Six strain coordinates give twenty-one entries in a symmetric stiffness matrix.

*True by definition.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Define the elastic stiffness as the Hessian of stored energy on symmetric strain matrices. A Hessian is the matrix of second derivatives. This replaces counting entries of an unconstrained four-index array.

**Problem.** At a point in a three-dimensional linear elastic body, suppose stress is the derivative of a twice continuously differentiable strain energy. At most twenty-one independent constants determine the stiffness there.

**How the definition helps.** The energy Hessian is a symmetric matrix on the six-dimensional space of symmetric strains. In our own count, its upper triangle has six diagonal entries and fifteen others. The work lies in establishing an energy law on symmetric strains before counting constants.

**nLab:** [elasticity](https://ncatlab.org/nlab/show/elasticity). It says: “here the strain tensor is related by a linear equation to the stress tensor”

**Wikipedia:** [Elasticity tensor](https://en.wikipedia.org/wiki/Elasticity_tensor). It says: “This fact follows from the symmetry of the stress and strain tensors, together with the requirement that the stress derives from an elastic energy potential.”

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

### Parallel damping prevents instant creep

**Remember:** A bounded stress cannot jump the strain of a damper.

*Rules out counterexamples.* MSC 74D05 (Linear constitutive equations for materials with memory). arXiv cond-mat.mtrl-sci. Level 2: later undergraduate.

**Definition.** The Kelvin–Voigt model places a spring and a viscous damper in parallel. Their strains, or relative changes in length, are equal and their stresses add. The spring stress is proportional to strain and the damper stress to strain rate.

**Problem.** A bounded stress step cannot cause an instantaneous strain jump in a Kelvin–Voigt solid with positive viscosity.

**How the definition helps.** A strain jump would give the damper an impulse of stress that the spring’s finite stress cannot cancel, in our own proof. The parallel connection forces the whole element to share the damper’s continuous strain. In our own comparison, a spring in series with the damper jumps immediately under the same nonzero stress step.

**Wikipedia:** [Kelvin–Voigt material](https://en.wikipedia.org/wiki/Kelvin%E2%80%93Voigt_material). It says: “Since the two components of the model are arranged in parallel, the strains in each component are identical:”

**Sources:** none listed. No primary source with a working link was found.

### Effective length unifies buckling loads

**Remember:** Use the pinned formula after accounting for the ends.

*Makes the theorem clean to state or prove.* MSC 74G60 (Bifurcation and buckling). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For a straight, uniform Euler column under axial compression, define effective length as half the wavelength of the first buckling mode’s bending moment. This is the spacing between consecutive zeros of the sinusoidal moment, extending the sinusoid beyond the ends if needed.

**Problem.** For an ideal slender column, the first buckling load equals π² times bending stiffness divided by effective length squared. Clamping both ends gives four times the load for two pinned ends when all other properties agree.

**How the definition helps.** The half-wavelength puts the same buckling formula to work for different supports, in our own explanation. The column equation makes the bending moment sinusoidal. The work is to enforce the end conditions and find the first mode. Two pinned ends give an effective length equal to the column length. Two clamped ends give half that length.

**Wikipedia:** [Buckling](https://en.wikipedia.org/wiki/Buckling). It says: “the distance between inflection points on the displacement curve of the deflected column”

**Sources:** none listed. No primary source with a working link was found.

### Complementary energy gives displacement

**Remember:** Differentiate complementary energy with respect to load to get displacement.

*True by definition.* MSC 74G65 (Energy minimization in equilibrium problems in solid mechanics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let U(q) be the stored energy at displacement q, with force F = U′(q). Define complementary energy at load F as the maximum of Fq − U(q) over the chosen displacement interval.

**Problem.** Suppose U is twice continuously differentiable with U″ &gt; 0 on an open interval. For loads in the range of U′ there, the derivative of complementary energy equals the displacement.

**How the definition helps.** At the maximizing displacement, F = U′(q) cancels the terms containing the derivative of q, in our own calculation. Strict convexity makes that displacement the unique maximizer. In our own comparison, F = q³ for q &gt; 0 gives derivative q/3 if we express stored energy directly in F.

**Wikipedia:** [Castigliano's method](https://en.wikipedia.org/wiki/Castigliano%27s_method). It says: “If the force-displacement curve is nonlinear then the complementary strain energy needs to be used instead of strain energy.”

**Sources:** none listed. No primary source with a working link was found.

### Independent rotation reveals beam shear

**Remember:** Slope minus section rotation is the shear.

*Makes the theorem clean to state or prove.* MSC 74K10 (Rods (beams, columns, shafts, arches, rings, etc.)). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let the rotation of a beam’s cross-section vary independently of the slope of its centerline. Define shear strain as the slope minus that rotation. The Euler–Bernoulli model sets the two equal.

**Problem.** Consider a uniform linear Timoshenko beam clamped at one end under a transverse point load at its free end. Shear adds a tip displacement equal to the load times the length divided by the shear stiffness.

**How the definition helps.** The independent rotation leaves a shear term in the slope, so the tip displacement includes its integral. In our own derivation, force balance makes shear force constant along the beam. Dividing by shear stiffness gives the constant shear strain to integrate.

**Wikipedia:** [Timoshenko–Ehrenfest beam theory](https://en.wikipedia.org/wiki/Timoshenko%E2%80%93Ehrenfest_beam_theory). It says: “unlike the Euler–Bernoulli theory, the angular deflection is another variable and not approximated by the slope of the deflection.”

**Sources:** none listed. No primary source with a working link was found.

### Normal lines remove plate shear

**Remember:** A normal that stays normal has no transverse shear.

*True by definition.* MSC 74K20 (Plates). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** In the Kirchhoff–Love plate model, initially straight lines normal to the middle surface stay straight and normal as the plate bends. A model allowing shear lets those lines tilt relative to the surface normal.

**Problem.** In the linear Kirchhoff–Love plate model, both transverse shear strains vanish for every admissible displacement.

**How the definition helps.** Keeping the right angle rules out transverse shear, which measures the change in that angle. In our own calculation, sideways displacement through the thickness exactly cancels the contribution from the slope of the middle surface. The modeling work is to justify that constraint for a thin plate.

**Wikipedia:** [Kirchhoff–Love plate theory](https://en.wikipedia.org/wiki/Kirchhoff%E2%80%93Love_plate_theory). It says: “straight lines normal to the mid-surface remain normal to the mid-surface after deformation”

**Sources:**

- [A. E. H. Love (1888), The small free vibrations and deformation of a thin elastic shell](https://doi.org/10.1098/rsta.1888.0016)

### Simply connected solids admit compatible displacements

**Remember:** If every loop contracts, locally compatible strains fit together throughout the body.

*Rules out counterexamples.* MSC 74A05 (Kinematics of deformation), 74B05. arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** A planar strain is compatible if it equals the symmetric gradient of a single-valued displacement. Denote the horizontal, vertical and off-diagonal strain entries by a, b and c. The Saint-Venant condition says that the second y derivative of a plus the second x derivative of b equals twice the mixed derivative of c.

**Problem.** A smooth planar strain satisfying the Saint-Venant condition on a simply connected region comes from a single-valued displacement. The local condition is not sufficient on an annulus.

**How the definition helps.** In our own proof, when every loop contracts, integrating a curl-free field between two points gives a path-independent result. Apply this first to recover the local rotation and then to recover displacement. On an annulus, local displacements (θ, 0), with θ the polar angle, give the same smooth strain wherever their angle branches overlap. Continuing around the hole adds (2π, 0) to the displacement. Any other local displacement differs by an infinitesimal rigid motion, which cannot cancel that jump.

**Wikipedia:** [Compatibility (mechanics)](https://en.wikipedia.org/wiki/Compatibility_%28mechanics%29). It says: “Such an integration is possible if the Saint-Venant's tensor (or incompatibility tensor) R(ε) vanishes in a simply-connected body”

**Sources:**

- [C. Amrouche, P. G. Ciarlet, L. Gratie and S. Kesavan, On Saint Venant’s compatibility conditions and Poincaré’s lemma (2006).](https://doi.org/10.1016/j.crma.2006.03.026)

### Pullback keeps stress symmetric

**Remember:** Pull back both indices to keep stress symmetric.

*True by definition.* MSC 74A10 (Stress). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Let F be the invertible derivative matrix of a deformation that preserves orientation, and let σ be the current stress matrix. The first Piola–Kirchhoff stress is P = (det F)σF⁻ᵀ, where F⁻ᵀ is the transpose of the inverse. Define the second stress as S = F⁻¹P, so both indices refer to the original body.

**Problem.** Suppose the only torques on a classical solid come from forces. Then the second stress is symmetric even for large deformations.

**How the definition helps.** The second stress multiplies σ on opposite sides by a matrix and its transpose, which preserves symmetry. Angular momentum balance supplies the symmetry of σ. In our own comparison, a quarter turn under uniform nonzero pressure gives a first stress that is not symmetric.

**Wikipedia:** [Piola–Kirchhoff stress tensors](https://en.wikipedia.org/wiki/Piola%E2%80%93Kirchhoff_stress_tensors). It says: “This tensor, a one-point tensor, is symmetric.”

**Sources:** none listed. No primary source with a working link was found.

### Weak balance detects point loads

**Remember:** A test displacement can feel a point force.

*Rules out counterexamples.* MSC 74A10 (Stress). arXiv math.AP. Level 3: graduate.

**Definition.** A stress assigns a force per unit length to each cut through a plane body. Define equilibrium by requiring internal and applied forces to do equal work on every smooth test displacement supported inside the body.

**Problem.** Suppose the body is in equilibrium under one point force, and the stress is smooth elsewhere. Across any enclosing circle inside the body, the total outward stress force equals minus the applied force.

**How the definition helps.** A test displacement can take a nonzero value at the load, so weak balance detects it. In our own proof, choose a displacement constant inside the circle and zero near the outer boundary. Integration by parts outside the circle gives the stated force. Zero stress passes the pointwise balance away from the load but fails this test, as our own counterexample shows.

**Paper or page:** [Point Singularities in Incompatible Elasticity](https://arxiv.org/abs/2107.10755v1). It says: “∫∂Bε (σ\|Ω−O n) dl = −b⁽⁰˒⁰⁾”

**Sources:**

- [Point Singularities in Incompatible Elasticity, Lemma 3.2](https://arxiv.org/abs/2107.10755v1)

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

### Plane stress minimizes elastic energy

**Remember:** Free transverse strain can only lower elastic energy.

*True by definition. Confidence: medium.* MSC 74B05 (Classical linear elasticity). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Fix the strain components within a plane. Plane stress means that the force per unit area across that plane vanishes. Plane strain instead fixes all out-of-plane strain components at zero.

**Problem.** For a positive definite linear elastic energy, plane stress gives no more stored energy than plane strain at the same in-plane strain.

**How the definition helps.** Zero force across the plane makes every energy derivative in the free strain directions vanish, in our own proof. The work lies in identifying stress with the derivative of stored energy. Positive definiteness makes the stationary point a minimum, and the plane-strain choice is one competitor.

**Wikipedia:** [Plane stress](https://en.wikipedia.org/wiki/Plane_stress). It says: “a material is said to be under plane stress if the stress vector is zero across a particular plane.”

**Sources:** none listed. No primary source with a working link was found.

### Proper rotations rule out folds

**Remember:** A fold can preserve lengths and still reverse orientation.

*Rules out counterexamples.* MSC 74B20 (Nonlinear elasticity). arXiv math.AP. Level 3: graduate.

**Definition.** The deformation gradient is the matrix of first derivatives of the new position. Measure strain by its distance to the rotation matrices with determinant one. Allowing every orthogonal matrix would also give reflections zero strain.

**Problem.** On an open cube, suppose a deformation and its weak first derivatives are square-integrable. If its strain vanishes almost everywhere, it agrees almost everywhere with one rotation followed by a translation.

**How the definition helps.** The proper-rotation condition rules out a fold made of a rotation and a reflection, our own explanation. The geometric rigidity estimate does the work by bounding the distance to a single rotation. Our own counterexample for the broader definition is (x, y) ↦ (\|x\|, y), which folds a square across x = 0.

**Paper or page:** [Geometric rigidity in variable domains and derivation of linearized models for elastic materials with free surfaces](https://arxiv.org/abs/2107.10808v5). It says: “there exist R ∈ SO(d) and b ∈ ℝᵈ such that”

**Sources:**

- [Geometric rigidity in variable domains and derivation of linearized models for elastic materials with free surfaces, Proposition 2.9](https://arxiv.org/abs/2107.10808v5)

### Volume-only polyconvexity is scalar convexity

**Remember:** If only volume matters, test convexity in volume.

*True by definition.* MSC 74B20 (Nonlinear elasticity). arXiv math.AP, physics.class-ph. Level 3: graduate.

**Definition.** An elastic energy W(F) of the deformation gradient F is polyconvex if it is a convex function of the minors of F, the determinants of its square submatrices. It is rank-one convex if it is convex along every line whose direction matrix has rank one. A volume-only energy has the form W(F) = h(det F).

**Problem.** For W(F) = h(det F) on all real square matrices of a fixed size, polyconvexity, quasiconvexity and rank-one convexity of W are each equivalent to convexity of h.

**How the definition helps.** In our own proof, convexity of h gives polyconvexity immediately because the determinant itself is a minor. The usual implications then give quasiconvexity and rank-one convexity. Conversely, vary the first diagonal entry of the identity matrix. The resulting rank-one test is exactly scalar convexity of h.

**Paper or page:** [Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain](https://arxiv.org/abs/2409.20051v1). It says: “Then W polyconvex ⇔ W quasiconvex ⇔ W rank one convex ⇔ h convex.”

**Sources:**

- [P. Neff et al., Hypo-elasticity, Cauchy-elasticity, corotational stability and monotonicity in the logarithmic strain (2025).](https://doi.org/10.1016/j.jmps.2025.106074)

### Convex dissipation gives monotone flow

**Remember:** Supporting planes make the dissipation law monotone.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv math.AP. Level 3: graduate.

**Definition.** A convex dissipation potential assigns an energy cost to each rate of permanent deformation. Define the allowed driving forces at a rate as all slopes of planes supporting the potential there. This extends the derivative rule to rates where no single derivative exists.

**Problem.** Consider two solutions of the same flow law, with the same dissipation potential. At almost every time, the energy-gradient difference paired with the rate difference is nonpositive, taking both differences in the same order.

**How the definition helps.** The two supporting-plane inequalities add directly to the desired bound, in our own proof. The driving force is the negative gradient of stored energy, which accounts for the sign. The modeling step is to express the flow law through that common convex potential.

**Paper or page:** [Homogenization of rate-independent elastoplastic spring network models with non-local random fields](https://arxiv.org/abs/2509.09872v1). It says: “⟨Dℰ(t, y₁(t)) − Dℰ(t, y₂(t)), ẏ₁(t) − ẏ₂(t)⟩ ≤ 0.”

**Sources:**

- [Homogenization of rate-independent elastoplastic spring network models with non-local random fields, Lemma 5.10](https://arxiv.org/abs/2509.09872v1)

### Tresca’s stress range stays convex

**Remember:** A bound on stress spread defines a convex region.

*True by definition.* MSC 74C05 (Small-strain, rate-independent theories of plasticity (including rigid-plastic and elasto-plastic materials)). arXiv cond-mat.mtrl-sci. Level 3: graduate.

**Definition.** A stress matrix lies in the Tresca elastic region when its largest and smallest eigenvalues differ by at most a fixed threshold. This replaces checking shear, the sideways force per unit area, on every plane.

**Problem.** A weighted average of two stress matrices within the Tresca elastic region stays within it when the weights are nonnegative and sum to one.

**How the definition helps.** The eigenvalue bound gives linear inequalities with a convex common solution set, in our own proof. For all unit vectors u and v, require uᵀSu − vᵀSv ≤ T, where S is stress and T is the threshold. Maximizing over both vectors gives the eigenvalue difference. The mechanical calculation identifies half that difference with the largest shear on any plane.

**Wikipedia:** [Yield surface](https://en.wikipedia.org/wiki/Yield_surface). It says: “In terms of the principal stresses the Tresca criterion is expressed as ½ max(\|σ₁ − σ₂\|, \|σ₂ − σ₃\|, \|σ₃ − σ₁\|) = Sₛᵧ = ½ Sᵧ”

**Sources:** none listed. No primary source with a working link was found.

### Stiffer solids reduce boundary work

**Remember:** A stiffer body cannot deliver more work under the same load.

*True by definition.* MSC 74G65 (Energy minimization in equilibrium problems in solid mechanics). arXiv math.AP. Level 3: graduate.

**Definition.** For a fixed boundary force, define half its equilibrium work as the maximum of applied work minus stored energy over admissible displacements. Admissible displacements vanish on the clamped boundary.

**Problem.** Consider a bounded isotropic linear elastic body with a clamped boundary portion of positive area and no body force. Assume both elastic coefficients are bounded above and bounded away from zero. Increasing them pointwise cannot increase the work of a fixed boundary force.

**How the definition helps.** Increasing stored energy lowers each trial value and therefore cannot raise the maximum, in our own proof. The equilibrium equation identifies this maximum with half the work computed from the actual displacement.

**Paper or page:** [Resolution Guarantees for the Reconstruction of Inclusions in Linear Elasticity Based on Monotonicity Methods](https://arxiv.org/abs/2208.06865v1). It says: “λ₀ ≤ λ₁ and μ₀ ≤ μ₁ implies Λ(λ₀, μ₀) ≥ Λ(λ₁, μ₁).”

**Sources:** none listed. No primary source with a working link was found.

### Potentials separate elastic wave modes

**Remember:** One potential carries compression and the other carries shear.

*Makes the theorem clean to state or prove.* MSC 74J10 (Bulk waves in solid mechanics). arXiv math.AP. Level 3: graduate.

**Definition.** Represent the displacement in a plane by two scalar functions called potentials. Add the gradient of the first to the gradient of the second rotated through a right angle.

**Problem.** In a uniform, isotropic linear elastic solid with no body force, at a fixed nonzero frequency, let the first potential solve the scalar wave equation at the compression speed and the second at the shear speed. Then the resulting displacement solves the elastic wave equation in the interior, though boundary conditions can still couple the two.

**How the definition helps.** Each potential produces just one wave type, so each solves a scalar equation. In our own calculation, the gradient has zero curl and the rotated gradient has zero divergence. Their sum therefore solves the elastic wave equation. Recovering the potentials from a given displacement requires a decomposition theorem.

**Paper or page:** [A virtual element method for the solution of 2D time-harmonic elastic wave equations via scalar potentials](https://arxiv.org/abs/2303.10696v1). It says: “the decoupling of the elastic vector field into scalar Pressure (P-) and Shear (S-) waves via a suitable Helmholtz-Hodge decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Incompressible flows preserve plate volume

**Remember:** Follow a divergence-free velocity to preserve volume at every step.

*True by definition.* MSC 74K20 (Plates). arXiv math.AP. Level 3: graduate.

**Definition.** An incompressible deformation has a derivative matrix with determinant one almost everywhere. To vary it, move each deformed point along a smooth velocity field with zero divergence. Assume the field and its first derivatives are bounded.

**Problem.** Every such variation of an incompressible plate has deformation gradient of determinant one.

**How the definition helps.** Composition multiplies determinants, so a volume-preserving flow keeps the deformation incompressible. The flow lemma supplies the work by differentiating the determinant along each trajectory. In our own comparison, adding the velocity times a small step preserves the constraint only to first order in general.

**Paper or page:** [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime](https://arxiv.org/abs/1211.3942v1), [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime](https://arxiv.org/abs/1211.3942v1). It says: “Given a deformation uʰ ∈ W¹˒²(Ωʰ, ℝ³) with det ∇uʰ = 1”

**Sources:**

- [Convergence of Equilibria for Incompressible Elastic Plates in the von Kármán Regime, Lemma 2.1 and Theorem 2.3](https://arxiv.org/abs/1211.3942v1)

### Zero membrane strain forbids double curvature

**Remember:** The slope term ties stretching to curvature.

*Rules out counterexamples.* MSC 74K20 (Plates). arXiv math.AP. Level 3: graduate.

**Definition.** In a flat plate, let u denote displacement within the plane and w the height change. Start with the symmetric part of the derivative matrix of u. Add half the outer product of the gradient of w with itself to obtain membrane strain. Linear strain omits this height term.

**Problem.** Assume u has square-integrable weak derivatives through order one and w through order two on a planar open set. If membrane strain vanishes, the matrix of second derivatives of w has zero determinant almost everywhere.

**How the definition helps.** Including the slope term prevents a doubly curved height from satisfying zero strain, in our own explanation. A second-derivative compatibility identity cancels the symmetric derivative of u and leaves minus the determinant of the height Hessian. The work includes justifying this identity for weak derivatives. In our own counterexample on a disk, u = 0 and w = x² + y² give zero linear strain but determinant four.

**Paper or page:** [An improved existence theorem for rigid nonlinearly elastic plates](https://arxiv.org/abs/2511.14487v1). It says: “only if det(∂αβu₃) = 0 in ω.”

**Sources:**

- [An improved existence theorem for rigid nonlinearly elastic plates, Proposition 1](https://arxiv.org/abs/2511.14487v1)

### Crack energy flux is path independent

**Remember:** Subtract stress work from energy flux and the crack contour can move.

*True by definition.* MSC 74R10 (Brittle fracture), 74B20. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Choose x along a straight crack in a plane, and draw a contour from its lower face to its upper face around the tip. Rice’s J-integral integrates two terms along this contour in the undeformed body. Multiply stored energy per unit volume by the x component of the outward unit normal. Subtract the force per unit reference area on the contour dotted with the x derivative of displacement.

**Problem.** Assume the elastic energy depends smoothly on the deformation gradient alone, with the same law throughout the body. Assume equilibrium without body forces, zero force on both crack faces, and smooth fields away from the tip. Then contours enclosing the same tip give equal J-integrals if the region between them contains no other singularities.

**How the definition helps.** In our own proof, subtracting stress work from the energy term makes the divergence of their difference vanish away from the tip. Energy density alone would leave its x derivative. The chain rule cancels that derivative against part of the stress work, and force balance cancels the rest. The divergence theorem compares the contours. The straight faces contribute zero because both traction and the x component of the normal vanish.

**Wikipedia:** [J-integral](https://en.wikipedia.org/wiki/J-integral). It says: “If the faces of the crack do not have any surface tractions on them then the J-integral is also path independent.”

**Sources:**

- [J. R. Rice, A Path Independent Integral and the Approximate Analysis of Strain Concentration by Notches and Cracks (1968).](https://doi.org/10.1115/1.3601206)

### Crack size omits waiting time

**Remember:** The crack path does not record waiting time.

*Makes the theorem clean to state or prove.* MSC 74R10 (Brittle fracture). arXiv math.AP. Level 3: graduate.

**Definition.** Index the states of a continuous, growing crack by their length, or by their area in three dimensions. This replaces elapsed time as the index for the path itself.

**Problem.** Suppose a nested crack grows continuously in size and gains positive size whenever its state changes. It has a unique path indexed by size that recovers the crack at every time.

**How the definition helps.** Indexing by size gives a single crack state throughout each pause in growth. In our own explanation, nesting orders the states and strict size increase distinguishes any two different ones. Continuity of size fills the interval between the initial and final sizes.

**Paper or page:** [What is the physical origin of the gradient flow structure of variational fracture models?](https://arxiv.org/abs/2311.00730v1). It says: “Σ(t) = Σₚ(L(t)) for t ∈ \[t₀, t₁\]”

**Sources:**

- [What is the physical origin of the gradient flow structure of variational fracture models?, Proposition B.3](https://arxiv.org/abs/2311.00730v1)

### Stress intensities add under superposition

**Remember:** Add the singular coefficients, not the infinite tip stresses.

*True by definition. Confidence: medium.* MSC 74R10 (Brittle fracture). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Near a sharp crack tip, the leading stress can grow as the inverse square root of distance. For each basic pattern of crack opening or sliding, define its stress intensity as the coefficient of that pattern.

**Problem.** Consider a fixed straight crack with unloaded faces in a homogeneous isotropic linear elastic body. For loads with a crack-tip expansion, the intensity for each pattern adds when the stress fields add.

**How the definition helps.** Reading a coefficient from the common expansion is linear, so each intensity adds, in our own proof. Stress at the tip itself generally has no finite value. The work lies in deriving the crack-tip expansion and identifying its distinct angular patterns.

**Wikipedia:** [Stress intensity factor](https://en.wikipedia.org/wiki/Stress_intensity_factor). It says: “Theoretically, as r goes to 0, the stress σᵢⱼ goes to ∞ resulting in a stress singularity.”

**Sources:** none listed. No primary source with a working link was found.

### Pressure normalization permits stress bounds

**Remember:** An invisible constant pressure must be fixed before it can be bounded.

*Rules out counterexamples.* MSC 74A10 (Stress). arXiv math.AP. Level 4: research.

**Definition.** Pressure normalization restricts square-integrable stress fields on a bounded connected Lipschitz body to a closed linear subspace that excludes the constant identity matrix. The identity matrix is a constant pressure.

**Problem.** On this subspace, the square-integral norm of the trace of the stress is at most a constant times the sum of two norms. These are the square-integral norm of its deviatoric part, the stress minus its scalar part, and the norm of its divergence against test fields that vanish on the boundary and have gradient norm at most one.

**How the definition helps.** The subspace excludes constant pressure, which both norms on the right miss. The identity matrix illustrates this obstruction in our own example. The estimate still requires a bound on the variable part of the trace and control of its mean.

**Paper or page:** [Locking-free hybrid high-order method for linear elasticity](https://arxiv.org/abs/2404.02768v2). It says: “The subspace Σ₀ does not contain the identity matrix”

**Sources:**

- [Locking-free hybrid high-order method for linear elasticity, Lemma 3.7](https://arxiv.org/abs/2404.02768v2)

### A Dirichlet-to-Neumann boundary map reduces exterior elastic scattering to a bounded domain

**Remember:** Let the boundary answer as the outgoing wave outside would.

*True by definition.* MSC 74J20 (Wave scattering in solid mechanics), 65N30. arXiv math.NA, math.AP. Level 4: research.

**Definition.** Surround the obstacle by an artificial sphere. The Dirichlet-to-Neumann operator sends a displacement on the sphere to the traction, the surface force, of the outgoing elastic wave outside with that displacement. Imposing this relation on the sphere gives a transparent boundary condition for the region inside.

**Problem.** Take elastic scattering of an incident wave by a rigid obstacle in three dimensions. The problem on the unbounded exterior is equivalent to a boundary value problem in a bounded region, with the transparent condition on the sphere.

**How the definition helps.** The operator packs everything about the outgoing exterior wave into one boundary relation. So an interior solution that satisfies it extends to the whole exterior by the outgoing wave with the same boundary values (our own). Conversely, an exterior solution satisfies the relation on the sphere by definition (our own). Computation needs a cut-off series for the operator. The paper shows that this truncation error decays exponentially in the cut-off.

**Paper or page:** [An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions](https://arxiv.org/abs/2101.05835v1). It says: “By constructing a Dirichlet-to-Neumann (DtN) operator and introducing a transparent boundary condition, the scattering problem is reduced equivalently to a boundary value problem in a bounded domain.”

**Sources:**

- [Gang Bao, Peijun Li, Xiaokai Yuan, An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions, arXiv:2101.05835v1 (2021)](https://arxiv.org/abs/2101.05835v1)

### Affine boundary data allow gluing

**Remember:** The same boundary displacement lets cell trials join without a seam.

*True by definition.* MSC 74Q05 (Homogenization in equilibrium problems of solid mechanics). arXiv math.AP. Level 4: research.

**Definition.** Fix an affine displacement, a linear map plus a constant. Define a cell’s energy as the infimum of its bulk energy over displacements agreeing with this map near the boundary.

**Problem.** Partition a rectangular cell into finitely many rectangles and use the same local energy density and affine boundary values throughout. The whole cell’s energy is at most the sum of the smaller cell energies.

**How the definition helps.** The matching boundary values let trial displacements join without a jump, in our own proof. Choose trials arbitrarily close to each smaller infimum. Their energies add, and the joined trial bounds the whole cell’s infimum from above. Free boundary values would require a separate estimate for joining the trials.

**Paper or page:** [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation](https://arxiv.org/abs/2212.13759v1). It says: “defines a subadditive process on (Ω, 𝒯, P).”

**Sources:**

- [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation, Proposition 7.5](https://arxiv.org/abs/2212.13759v1)

### Fracture compactness allows drifting pieces

**Remember:** Crack energy need not bound how far a loose piece moves.

*Makes the theorem clean to state or prove.* MSC 74R10 (Brittle fracture). arXiv math.AP. Level 4: research.

**Definition.** A crack separates pieces of a body whose displacements may jump across their common boundary. Along a chosen subsequence, mark points where displacement magnitude tends to infinity. Require convergence in measure elsewhere, meaning that the volume with error above any fixed positive tolerance tends to zero.

**Problem.** Consider displacements in the paper’s brittle fracture space on a bounded open body. Assume uniformly bounded crack area and a uniform bound on the integral of the pth power of symmetric gradient magnitude, for fixed p &gt; 1. Some subsequence converges in measure outside its marked set, whose boundary has finite area in the measure-theoretic sense.

**How the definition helps.** Marking diverging points lets the theorem describe a finite limit on the rest of the body. The compactness theorem supplies the subsequence and the boundary bound. In our own example, a detached piece translates farther at each step without changing its strain or crack area.

**Paper or page:** [Non-local approximation of free-discontinuity problems in linear elasticity and application to stochastic homogenisation](https://arxiv.org/abs/2212.13759v1). It says: “the set U∞ := {x ∈ U : \|uⱼ\| → +∞} has finite perimeter”

**Sources:** none listed. No primary source with a working link was found.
