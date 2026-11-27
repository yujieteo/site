### Zero divergence preserves parcel volume

**Remember:** The flow derivative’s determinant measures local volume change.

*Makes the theorem clean to state or prove.* MSC 76A02 (Foundations of fluid mechanics). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A flow map sends each initial position to its position at time t. Define the local volume ratio as the determinant of its derivative with respect to initial position.

**Problem.** A smooth flow preserves volume on every parcel if and only if its velocity has zero divergence.

**How the definition helps.** In our own proof, the local volume ratio turns a condition on every parcel into a scalar equation along each path. Its derivative equals the ratio times the divergence of velocity. The ratio starts at one, so it stays one exactly when the divergence vanishes. Integrating the ratio over each initial parcel gives its current volume.

**Wikipedia:** [Incompressible flow](https://en.wikipedia.org/wiki/Incompressible_flow). It says: “Equivalently, the divergence of an incompressible flow velocity is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Single-valued potentials exclude circulating vortices

**Remember:** A single-valued potential returns to the same value on every closed loop.

*Rules out counterexamples.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A velocity potential is a scalar function whose gradient equals the fluid velocity. Require one single-valued potential throughout the fluid region. Circulation is the line integral of velocity around a closed curve.

**Problem.** Every closed loop in a flow with a single-valued velocity potential has zero circulation. Zero curl alone does not give this conclusion on an annulus.

**How the definition helps.** In our own proof, the integral of a gradient around a loop equals the change in potential, hence zero. On a planar annulus, counterclockwise circular velocity of magnitude 1/r has zero curl, where r is distance from the center. Its circulation around each centered counterclockwise circle is 2π, which excludes a single-valued potential.

**Wikipedia:** [Vortex](https://en.wikipedia.org/wiki/Vortex). It says: “For an irrotational vortex, the circulation is zero along any closed contour that does not enclose the vortex axis”

**Sources:** none listed. No primary source with a working link was found.

### Irrotational flow shares Bernoulli’s constant

**Remember:** Without rotation, Bernoulli’s constant is shared across streamlines.

*Rules out counterexamples.* MSC 76B99 (Incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** Irrotational flow means that the velocity field has zero curl. For constant density, the Bernoulli quantity adds half the squared speed, pressure divided by density, and potential energy per unit mass.

**Problem.** Consider smooth, steady flow of an inviscid fluid of constant density in a connected region, with a body force derived from a potential. Zero curl makes the Bernoulli quantity constant throughout the region. Otherwise it can vary between streamlines, the curves tangent to the velocity.

**How the definition helps.** In our own proof, zero curl makes the acceleration the gradient of half the squared speed. The steady momentum equation then gives a zero Bernoulli gradient, so connectedness gives constancy. In solid-body rotation without body forces, pressure and speed increase away from the axis, giving different values on different streamlines.

**Wikipedia:** [Bernoulli's principle](https://en.wikipedia.org/wiki/Bernoulli%27s_principle). It says: “If the fluid flow is irrotational, the total pressure is uniform”

**Sources:** none listed. No primary source with a working link was found.

### Stream functions measure flux

**Remember:** Read the stream function at the ends to get the flux across the curve.

*True by definition.* MSC 76B99 (Incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** In two dimensions write velocity as (∂ψ/∂y, −∂ψ/∂x). The scalar ψ is the stream function. This represents the flow by one function rather than two separately specified velocity components.

**Problem.** Flux is the volume per unit time and unit thickness that crosses an oriented planar curve. With the normal pointing right along the curve, flux equals the final stream function value minus the initial value.

**How the definition helps.** In our own words, the rotated gradient makes normal flow equal to the derivative of ψ along the curve. Its integral is the endpoint difference. The work, in our own account, is proving that smooth incompressible planar flow on a simply connected region admits such a function.

**Wikipedia:** [Stream function](https://en.wikipedia.org/wiki/Stream_function). It says: “In words, the stream function ψ is the volumetric flux through the test surface per unit thickness”

**Sources:** none listed. No primary source with a working link was found.

### Creeping flow retraces reversed motion

**Remember:** With no fluid inertia, reverse the drive and the particles retrace their paths.

*Rules out counterexamples.* MSC 76D07 (Stokes and related (Oseen, etc.) flows). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** At each instant, an incompressible Newtonian fluid in creeping flow satisfies ∇·u = 0 and −∇p + μΔu + f = 0. Here u is velocity, p is pressure, μ is constant viscosity, and f is body force per unit volume.

**Problem.** Consider smooth steady Stokes flow at each instant in a bounded vessel, with prescribed velocity on the whole boundary and no body force. Reversing the complete boundary motion in time makes fluid particles retrace their paths.

**How the definition helps.** The instantaneous linear equations give the negative velocity field when the driving velocities reverse. In our own words, uniqueness of the Stokes boundary-value problem and uniqueness of particle paths carry the work. In our own counterexample, a sinusoidal shear on a periodic region decays under time-dependent Navier–Stokes flow. Replaying it backward would make the mode grow, which the unforced equations do not permit.

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “a time-reversed Stokes flow solves the same equations as the original Stokes flow.”

**Sources:** none listed. No primary source with a working link was found.

### Density weighting cancels cross terms

**Remember:** Weight by density and the mean mass flux of the fluctuation is zero.

*True by definition.* MSC 76F50 (Compressibility effects in turbulence). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** For positive mean density, define the Favre mean velocity as mean momentum per unit volume divided by mean density. Subtract this velocity from each sample to get its fluctuation.

**Problem.** Write ρ for density, E for the mean, and U and u′ for Favre mean velocity and fluctuation. For every component pair i, j, E\[ρu<sub>i</sub> u<sub>j</sub>\] = E\[ρ\]U<sub>i</sub> U<sub>j</sub> + E\[ρu′<sub>i</sub> u′<sub>j</sub>\].

**How the definition helps.** In our own expansion, each mixed term contains the mean of density times a fluctuation, which vanishes by construction. Subtracting the ordinary mean would only make the unweighted fluctuation average vanish. The remaining fluctuation product still needs a model.

**Wikipedia:** [Favre averaging](https://en.wikipedia.org/wiki/Favre_averaging). It says: “Favre averaging is the density-weighted averaging method”

**Sources:**

- [A. J. Favre, The Equations of Compressible Turbulent Gases (1965).](https://doi.org/10.21236/ad0622097)

### Matching Reynolds numbers matches equations

**Remember:** Match the ratio of inertia to viscosity, not the separate speeds or sizes.

*Makes the theorem clean to state or prove.* MSC 76M55 (Dimensional analysis and similarity applied to problems in fluid mechanics), 76D05. arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** For a fluid with constant density ρ and constant viscosity μ, the Reynolds number is ρUL/μ. Here μ measures resistance to shear, U is a speed scale and L is a length scale. Measure position in units of L, velocity in units of U, time in units of L/U and pressure in units of ρU².

**Problem.** Consider geometrically similar domains containing incompressible Newtonian fluids, whose viscous stress is proportional to their rate of deformation. Without body forces, equal Reynolds numbers give identical scaled flow equations. Matching scaled boundary and initial data then give matching solutions wherever the scaled problem has a unique solution.

**How the definition helps.** In our own words, rescaling puts all material and scale parameters into the viscosity coefficient, the reciprocal Reynolds number. The remaining work, in our own account, is matching the full scaled data and establishing uniqueness for a claim about one flow.

**Wikipedia:** [Reynolds number](https://en.wikipedia.org/wiki/Reynolds_number). It says: “the ratio of inertial forces to viscous forces”

**Sources:**

- [O. Reynolds, An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous, and of the law of resistance in parallel channels (1883).](https://doi.org/10.1098/rstl.1883.0029)

### Barotropic pressure preserves circulation

**Remember:** When pressure follows density alone, pressure cannot create circulation.

*Rules out counterexamples.* MSC 76N15 (Gas dynamics (general theory)), 76B47. arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** In a barotropic fluid, pressure p is a differentiable function of density ρ alone. Circulation is the line integral of velocity around a closed curve.

**Problem.** Consider a smooth inviscid flow with positive density and body forces per unit mass given by a potential. A barotropic pressure law preserves circulation around every loop carried by the fluid.

**How the definition helps.** In our own proof, barotropic pressure makes the pressure force per unit mass a gradient with potential derivative −p′(ρ)/ρ. Differentiating circulation along a material loop then leaves only integrals of gradients, which vanish. For initially stationary gas with ρ = 1 + x and p = 2 + y near the origin, the pressure force has nonzero curl. Circulation therefore starts changing around small horizontal loops.

**Wikipedia:** [Kelvin's circulation theorem](https://en.wikipedia.org/wiki/Kelvin%27s_circulation_theorem). It says: “This theorem does not hold in cases with viscous stresses, nonconservative body forces (for example the Coriolis force) or non-barotropic pressure-density relations.”

**Sources:** none listed. No primary source with a working link was found.

### Hydraulic head accounts for gravity

**Remember:** Add elevation to pressure head before deciding where water will flow.

*True by definition.* MSC 76S05 (Flows in porous media; filtration; seepage). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** For a liquid of constant density ρ under uniform gravity, hydraulic head is h = z + p/(ρg). Here z is elevation, p is pressure and g is gravitational acceleration. Darcy flux measures volume flow per unit total cross-sectional area of a porous material.

**Problem.** For positive scalar hydraulic conductivity K, Darcy’s law reads q = −K∇h. Flow points downhill in head wherever its gradient is nonzero. In a liquid at rest under gravity, head is constant and flux vanishes.

**How the definition helps.** In our own explanation, using head combines the separate pressure and gravity forces into one gradient. In a vertical column at rest, pressure decreases with height exactly enough to cancel the elevation term. A rule based on pressure alone would predict flow. The physical work is establishing the proportionality between flux and total driving force for the porous material.

**Wikipedia:** [Darcy's law](https://en.wikipedia.org/wiki/Darcy%27s_law). It says: “Note that the elevation head must be taken into account if the inlet and outlet are at different elevations.”

**Sources:** none listed. No primary source with a working link was found.

### Finite speed fixes airfoil circulation

**Remember:** One circulation cancels the trailing edge singularity.

*Rules out counterexamples.* MSC 76B10 (Jets and cavities, cavitation, free-streamline theory, water-entry problems, airfoil and hydrofoil theory, sloshing). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** For steady two-dimensional flow, the Kutta condition requires finite speed at the sharp rear tip of a wing section. Circulation is the integral of tangential velocity around the section.

**Problem.** Consider incompressible, irrotational flow past an impermeable Joukowski airfoil, a wing section obtained by mapping a circle. Fix a uniform velocity at infinity and assume the section has a single rear cusp. Exactly one circulation gives finite speed there.

**How the definition helps.** In our own proof, finite speed forces the circle velocity to vanish at the point mapped to the cusp. The map derivative has a simple zero there and divides the circle velocity in the formula for airfoil velocity. At the circle wall the velocity is tangential. Its tangential component depends linearly on circulation with nonzero slope, so exactly one value cancels it.

**Wikipedia:** [Kutta condition](https://en.wikipedia.org/wiki/Kutta_condition). It says: “Mathematically, the Kutta condition enforces a specific choice among the infinite allowed values of circulation.”

**Sources:** none listed. No primary source with a working link was found.

### Flux coordinates preserve incompressibility

**Remember:** Move flux with the area it crosses.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction). arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Let F be a smooth change of coordinates from a flat reference region to the fluid, with positive derivative determinant. At each reference point, apply the inverse derivative to the velocity at its image. Multiply the result by the derivative determinant to obtain the reference flux field.

**Problem.** If the smooth fluid velocity has zero divergence, so does the reference flux field.

**How the definition helps.** In our own proof, this definition preserves the volume per unit time crossing each corresponding surface. Transforming velocity alone misses the change in oriented area. The surface change-of-variables formula supplies the determinant factor. The divergence theorem now transfers zero net outward flux from each fluid region to its reference region.

**Paper or page:** [Symmetric doubly periodic gravity-capillary waves with small vorticity](https://arxiv.org/abs/2204.13093v3). It says: “In particular, the property of being divergence free is conserved under flattening.”

**Sources:**

- [D. Svensson Seth, K. Varholm and E. Wahlén, Symmetric doubly periodic gravity-capillary waves with small vorticity (2024).](https://doi.org/10.1016/j.aim.2024.109683)

### Wave action survives energy exchange

**Remember:** Divide wave energy by the frequency measured in the moving fluid.

*Makes the theorem clean to state or prove.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Wave action density is wave energy density divided by nonzero angular frequency, both measured in the frame moving with the local mean current.

**Problem.** Consider a small wave train with a single local frequency, away from zero in the moving frame. Suppose the current varies slowly across a wavelength and a wave period. Without forcing or damping, wave action obeys a local conservation law to leading order.

**How the definition helps.** Our own reading is that dividing by the moving-frame frequency cancels the leading energy exchange term. Our own account puts the work in deriving the averaged wave equations under the slow variation assumption.

**Wikipedia:** [Wave action (continuum mechanics)](https://en.wikipedia.org/wiki/Wave_action_%28continuum_mechanics%29). It says: “However, wave action is a quantity which is conserved for the wave-part of the motion.”

**Sources:**

- [F. P. Bretherton and C. J. R. Garrett, Wavetrains in inhomogeneous moving media (1968).](https://doi.org/10.1098/rspa.1968.0034)

### Distributional curl locates sheet vorticity

**Remember:** The curl of a tangential jump lives on the sheet.

*True by definition.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** For a locally integrable three-dimensional velocity u, its distributional vorticity ω satisfies ⟨ω,φ⟩ = ∫u·curl φ dV for every smooth compactly supported test field φ. Orient the sheet normal from the minus side to the plus side and take the jump as the plus trace minus the minus trace.

**Problem.** Suppose a three-dimensional velocity field is smooth up to each side of a smooth sheet. Its curl contains a sheet term whose density is the unit normal crossed with the velocity jump.

**How the definition helps.** In our own proof, the definition retains the boundary terms that pointwise differentiation misses. Integration by parts on both sides gives opposite outward normals. Their contributions combine into the unit normal crossed with the change in limiting velocity when crossing in the direction of the normal.

**Wikipedia:** [Vortex sheet](https://en.wikipedia.org/wiki/Vortex_sheet). It says: “the normal component of the flow velocity is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Hodge splitting isolates harmonic flow

**Remember:** A harmonic field has zero divergence and zero curl.

*Makes the theorem clean to state or prove.* MSC 76B47 (Vortex flows for incompressible inviscid fluids), 58A14. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** On a compact oriented Riemannian surface without boundary, a smooth tangent field is harmonic if its divergence and curl both vanish.

**Problem.** Two divergence-free velocities on the same such surface have the same vorticity, or curl, exactly when their difference is harmonic. Thus vorticity determines the velocity on a sphere, but leaves an ambiguity on a flat torus.

**How the definition helps.** In our own proof, the difference of two divergence-free fields is divergence-free and has zero curl exactly when their vorticities agree. Hodge theory gives no nonzero harmonic fields on the sphere. On a flat torus, adding a nonzero constant field preserves vorticity and divergence.

**Paper or page:** [On the interplay between vortices and harmonic flows: Hodge decomposition of Euler's equations in 2d](https://arxiv.org/abs/2309.12582v1). It says: “If v is divergence free, then in the Hodge decomposition of ν = v♭ there is no component df.”

**Sources:**

- [C. Grotta-Ragazzo, B. Gustafsson and J. Koiller, On the Interplay Between Vortices and Harmonic Flows: Hodge Decomposition of Euler’s Equations in 2d (2024).](https://doi.org/10.1134/s1560354724020011)

### Velocity one-forms transport vorticity

**Remember:** Differentiate the circulation form and the pressure term vanishes.

*True by definition.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Represent velocity by a one-form, a linear function that takes a tangent vector to its inner product with velocity. Its integral along a curve measures circulation. Define vorticity as its exterior derivative, the oriented area density whose surface integral gives circulation around the boundary.

**Problem.** For smooth constant-density Euler flow without nonconservative forces, the fluid flow preserves the vorticity two-form. Equivalently, vorticity flux through every material surface is constant.

**How the definition helps.** In our own proof, defining vorticity by differentiation removes the pressure term in one step. The velocity equation for the one-form has a scalar derivative on its right. Applying the exterior derivative kills that term and commutes with transport by the flow. The work goes into converting the usual vector momentum equation into this form.

**Paper or page:** [On the interplay between vortices and harmonic flows: Hodge decomposition of Euler's equations in 2d](https://arxiv.org/abs/2309.12582v1). It says: “Euler's equations are given by ∂ν/∂t + Lν♯ ν = db”

**Sources:**

- [C. Grotta-Ragazzo, B. Gustafsson and J. Koiller, On the Interplay Between Vortices and Harmonic Flows: Hodge Decomposition of Euler’s Equations in 2d (2024).](https://doi.org/10.1134/s1560354724020011)

### Minimum dissipation gives unique Stokes velocity

**Remember:** Averaging distinct admissible velocities lowers their average dissipation.

*True by definition.* MSC 76D07 (Stokes and related (Oseen, etc.) flows), 76M30. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** For steady flow without body forces, define the Stokes velocity as the field minimizing viscous energy loss. For constant positive viscosity, this loss is proportional to the integral of the squared symmetric part of the velocity gradient. Compare divergence-free velocities with the same prescribed values on the whole boundary.

**Problem.** On a bounded connected region with sufficiently smooth boundary, the fixed-boundary Stokes dissipation problem has at most one minimizing velocity.

**How the definition helps.** In our own proof, two distinct admissible velocities have different symmetric gradients because their difference vanishes on the boundary and satisfies Korn’s inequality. Strict convexity of the squared norm then gives their midpoint less dissipation than their average. Since the midpoint is admissible, both velocities cannot minimize dissipation.

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “The Stokes solution dissipates less energy than any other solenoidal vector field with the same boundary velocities”

**Sources:** none listed. No primary source with a working link was found.

### Squire’s rescaling exposes two-dimensional instability

**Remember:** Keep the total wave number and the product of streamwise wave number and Reynolds number.

*True by definition.* MSC 76E05 (Parallel shear flows in hydrodynamic stability). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** For streamwise wave number α &gt; 0 and transverse wave number β, set k = √(α² + β²). Squire’s transformation replaces (α, β) by (k, 0), keeps complex phase speed fixed, and multiplies the Reynolds number by α/k.

**Problem.** Consider linear disturbances of a steady viscous incompressible parallel flow between fixed parallel walls. Every growing three-dimensional mode with α &gt; 0 gives a growing two-dimensional mode at a lower Reynolds number.

**How the definition helps.** In our own calculation, the rescaling keeps k and the product of streamwise wave number and Reynolds number fixed. Those quantities and the phase speed determine the equation for velocity normal to the walls. Its wall conditions also agree. The work lies in deriving this equation and excluding growing modes with zero normal velocity.

**Wikipedia:** [Squire's theorem](https://en.wikipedia.org/wiki/Squire%27s_theorem). It says: “If we want to decide whether a flow is unstable or not, it suffices to look at two-dimensional perturbations.”

**Sources:**

- [H. B. Squire, On the stability for three-dimensional disturbances of viscous fluid flow between parallel walls (1933).](https://doi.org/10.1098/rspa.1933.0193)

### Geostrophic velocity is constant along rotation axes

**Remember:** In geostrophic balance, the pressure gradient fixes the cross product of rotation and velocity.

*Makes the theorem clean to state or prove.* MSC 76U05 (General theory of rotating fluids). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Velocity u satisfies geostrophic balance at density ρ and angular velocity Ω if 2Ω × u = −∇p/ρ at every point, where p is pressure.

**Problem.** Suppose a smooth divergence-free velocity satisfies geostrophic balance at constant density in a frame with constant nonzero angular velocity. Velocity is constant on each line segment in the fluid parallel to the rotation axis.

**How the definition helps.** In our own calculation, geostrophic balance expresses the cross product of angular velocity and fluid velocity as a pressure gradient times a constant. Taking curl removes pressure. Because angular velocity is constant and fluid velocity has zero divergence, only the derivative along the rotation axis remains. Applying this balance to an actual flow also requires justifying the neglect of inertia and viscosity.

**Wikipedia:** [Taylor–Proudman theorem](https://en.wikipedia.org/wiki/Taylor%E2%80%93Proudman_theorem). It says: “all three components of the velocity vector are uniform along any line parallel to the z-axis.”

**Sources:** none listed. No primary source with a working link was found.

### Ertel’s vorticity follows compressible air parcels

**Remember:** Project absolute vorticity onto the potential temperature gradient by dot product, then divide by density.

*Makes the theorem clean to state or prove.* MSC 76U60 (Geophysical flows). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Absolute vorticity is the curl of fluid velocity plus twice the frame’s angular velocity. Potential temperature is the temperature a parcel would reach at a reference pressure under reversible compression or expansion without heat exchange. Define Ertel’s potential vorticity as absolute vorticity dotted with the potential temperature gradient, divided by density.

**Problem.** In smooth dry ideal-gas flow with conservative body forces and no friction or heating, Ertel’s potential vorticity stays constant along parcel paths.

**How the definition helps.** In our own proof, the potential temperature gradient kills the pressure-density vorticity source because potential temperature depends only on pressure and density. The vorticity and temperature-gradient transport equations give cancelling stretching terms in their dot product. Division by density cancels compression.

**Wikipedia:** [Potential vorticity](https://en.wikipedia.org/wiki/Potential_vorticity). It says: “its gradient is perpendicular to the cross product of ∇p and ∇ρ”

**Sources:**

- [Wayne Schubert and coauthors, English translations of twenty-one of Ertel’s papers on geophysical fluid dynamics (2004).](https://doi.org/10.1127/0941-2948/2004/0013-0527)

### Tangential fields make helicity gauge independent

**Remember:** A gradient changes helicity only through magnetic flux at the boundary.

*Rules out counterexamples.* MSC 76W05 (Magnetohydrodynamics and electrohydrodynamics). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** For a magnetic field B, choose a vector potential A whose curl is B. Define magnetic helicity as the integral of A · B. Restrict ordinary helicity to fields tangent to the boundary, so no field crosses it.

**Problem.** On a smooth bounded simply connected region, helicity is independent of the choice of vector potential for a field tangent to its boundary.

**How the definition helps.** In our own proof, the potentials differ by a gradient because their difference has zero curl on a simply connected region. Since B has zero divergence, integration by parts gives only a boundary integral proportional pointwise to the normal field component. Tangency makes that integral zero. For a uniform vertical field in a box, adding the gradient of height instead changes helicity.

**Wikipedia:** [Magnetic helicity](https://en.wikipedia.org/wiki/Magnetic_helicity). It says: “Since the magnetic vector potential is not gauge invariant, the magnetic helicity is also not gauge invariant in general.”

**Sources:**

- [Lodewijk Woltjer, A Theorem on Force-Free Magnetic Fields (1958).](https://doi.org/10.1073/pnas.44.6.489)

### Geodesics make pressure a constraint force

**Remember:** A parcel geodesic makes kinetic action stationary among volume-preserving paths with fixed endpoints.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 76A02 (Foundations of fluid mechanics), 58D05. arXiv physics.flu-dyn. Level 4: research.

**Definition.** Represent parcel motion by smooth invertible maps with smooth inverses that preserve volume. Measure a path’s kinetic energy by integrating half the squared parcel speed over initial positions. A geodesic makes the time integral of this energy stationary under small changes of path with fixed endpoints.

**Problem.** On a compact space with a smooth metric and no boundary, the velocity of a smooth geodesic of parcel maps satisfies the incompressible Euler equations.

**How the definition helps.** In our own account of Arnold’s result, the geodesic condition makes acceleration perpendicular to every allowed change of parcel position. Volume preservation permits precisely the infinitesimal parcel displacements with zero divergence at each fixed configuration. The orthogonal decomposition of vector fields identifies their perpendicular directions as gradients. This gives the pressure term in the acceleration equation.

**nLab:** [diffeomorphism group](https://ncatlab.org/nlab/show/diffeomorphism+group). It says: “one considers groups of diffeomorphisms which are automorphism preserving that extra structure.”

**Sources:**

- [Vladimir Arnold, Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l’hydrodynamique des fluides parfaits (1966).](https://doi.org/10.5802/aif.233)

### Wave variables separate propagation directions

**Remember:** Add height and velocity for one wave direction, subtract for the other.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction), 76M45. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Let ζ denote scaled surface height and ψ the surface velocity potential. For the model’s Fourier multiplier Fμ, set v = Fμ\[∂ₓψ\]. Define r = (ζ + v)/2 and s = (ζ − v)/2.

**Problem.** In the shallow-water model of Proposition 3.5, the quadratic part of the energy is the integral of r² + s². The linear equations propagate r and s independently in opposite directions.

**How the definition helps.** In our own calculation, substituting ζ = r + s and v = r − s into the quadratic energy cancels the mixed terms. Proposition 3.5 supplies the transformed motion operator, whose diagonal linear terms have opposite signs. Thus the linear motions separate.

**Paper or page:** [Rigorous derivation of the Whitham equations from the water waves equations in the shallow water regime](https://arxiv.org/abs/2101.02940v1). It says: “Let r and s be defined as r ≔ (ζ + Fμ\[∂ₓψ\])/2, s ≔ (ζ − Fμ\[∂ₓψ\])/2.”

**Sources:** none listed. No primary source with a working link was found.

### A weighted sum reveals turbulent decay

**Remember:** Weight the energy loss to pay for possible growth in vorticity.

*Makes the theorem clean to state or prove.* MSC 76F05 (Isotropic turbulence; homogeneous turbulence). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The weighted sum is the mean magnitude of vorticity, the curl of velocity, plus the mean squared speed divided by √2 ν. Here ν is the kinematic viscosity, the coefficient of velocity diffusion.

**Problem.** Consider smooth unforced incompressible turbulence whose velocity statistics are unchanged by translations and rotations. The weighted sum cannot increase while the averages and their derivatives exist.

**How the definition helps.** In our own derivation, the chosen weight lets the energy loss cover the maximum predicted growth of mean vorticity magnitude. Fluid stretching can increase that magnitude. The proof uses an identity relating average squared deformation to average squared vorticity, together with the energy balance.

**Paper or page:** [The vortex dynamics in incompressible viscous turbulent flows](https://arxiv.org/abs/2101.00375v2). It says: “is monotonically decreasing.”

**Sources:**

- [Jiawei Li and Zhongmin Qian, The vortex dynamics in incompressible viscous turbulent flows.](https://arxiv.org/abs/2101.00375v2)

### Equilibrium variables preserve steady currents

**Remember:** Reconstruct the quantities that are constant even when depth changes.

*Makes the theorem clean to state or prove.* MSC 76M12 (Finite volume methods applied to problems in fluid mechanics). arXiv math.NA, physics.flu-dyn. Level 4: research.

**Definition.** For one-dimensional shallow water, discharge is hu and total head is b + h + u²/(2g). Here h denotes depth, u velocity, b bed height, and g gravitational acceleration.

**Problem.** Consider the frictionless, one-dimensional shallow-water methods in Theorem 2.1. If discharge and head are each constant at all the discrete locations, both the cell averages and the point values stay fixed.

**How the definition helps.** In our own reading, a steady current becomes constant data when expressed in discharge and head. Reconstructing those constants avoids introducing variation from changes in bed height. The proof still checks cancellation between transported momentum and the force from the bed in both updates.

**Paper or page:** [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809v4). It says: “If the discrete data are at a steady state”

**Sources:**

- [Rémi Abgrall and Yongle Liu, A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations.](https://arxiv.org/abs/2304.07809v4)

### Skew symmetry cancels interior transport

**Remember:** Pair each interior transport term with its negative.

*True by definition.* MSC 76N06 (Compressible Navier-Stokes equations). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** For a state vector U and coefficient matrix A, the paired transport expression in direction x is ∂ₓ(AU) + Aᵀ∂ₓU. Use state variables whose energy is quadratic.

**Problem.** For Nordström’s compressible flow equations, suppose diffusion dissipates energy and the boundary supplies at most the prescribed energy input. Assume the remaining interior matrix is skew-symmetric, meaning its transpose equals its negative. Then the initial state and external data bound the energy.

**How the definition helps.** In our own proof, integration by parts cancels the paired interior derivative terms and leaves their boundary flux. The separate skew-symmetric matrix contributes zero to the quadratic energy balance. The work lies in finding variables and coefficients that reproduce the original equations and checking the diffusion and boundary inequalities.

**Paper or page:** [A Skew-Symmetric Energy Stable Almost Dissipation Free Formulation of the Compressible Navier-Stokes Equations](https://arxiv.org/abs/2401.12038v2). It says: “C + Cᵀ = 0”

**Sources:**

- [Jan Nordström, A Skew-Symmetric Energy Stable Almost Dissipation Free Formulation of the Compressible Navier-Stokes Equations.](https://arxiv.org/abs/2401.12038v2)

### Relative energy blocks branching gas flows

**Remember:** Compare to the tangent at the state you want to track.

*Makes the theorem clean to state or prove.* MSC 76N10 (Existence, uniqueness, and regularity theory for compressible fluids and gas dynamics). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** For density ρ and velocity u, compare with density r and velocity v using the internal energy per volume H. The relative energy density is ρ\|u − v\|²/2 + H(ρ) − H(r) − H′(r)(ρ − r).

**Problem.** Consider a gas whose pressure is proportional to a power of density with exponent greater than one. Suppose a comparison solution satisfies the regularity and vacuum conditions of Theorem 1.4. Every weak solution satisfying its energy inequality with the same initial data has the same density and momentum.

**How the definition helps.** In our own reading, relative energy vanishes exactly when density and momentum agree, including in vacuum. Strict convexity detects density errors, and the kinetic term detects velocity errors wherever density is positive. Theorem 1.4 controls growth near vacuum and forces initially zero relative energy to stay zero.

**Paper or page:** [Weak-Strong Uniqueness for the Isentropic Euler Equations with Possible Vacuum](https://arxiv.org/abs/2103.16560v1). It says: “ϱ = r and ϱu = rv in \[0, T\] × ℝᴺ.”

**Sources:**

- [Shyam Sundar Ghoshal, Animesh Jana and Emil Wiedemann, Weak-Strong Uniqueness for the Isentropic Euler Equations with Possible Vacuum.](https://arxiv.org/abs/2103.16560v1)

### Subtracting surface motion saves derivatives

**Remember:** Subtract what the moving coordinates contribute.

*True by definition.* MSC 76N30 (Waves in compressible fluids). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Let D denote a fourth-order tangential derivative, f the field in flattened coordinates, and η the vertical coordinate map. The good unknown is G = Df − (∂zf)Dη, where ∂zf denotes the physical vertical derivative in those coordinates.

**Problem.** Assume the map’s vertical derivative stays above a positive constant. The squared L² norm of Df is bounded by 2‖G‖₂² + 2‖∂zf‖∞²‖Dη‖₂².

**How the definition helps.** In our own calculation, the correction removes the fourth derivative caused by moving the coordinates. Adding the correction back gives the stated bound by the triangle inequality. The substantive estimates control the errors when the fluid equations differentiate this corrected quantity.

**Paper or page:** [Compressible Gravity-Capillary Water Waves with Vorticity: Local Well-Posedness, Incompressible and Zero-Surface-Tension Limits](https://arxiv.org/abs/2211.03600v5). It says: “be the Alinhac good unknowns associated with the smooth function f”

**Sources:**

- [Chenyun Luo and Junyan Zhang, Compressible Gravity-Capillary Water Waves with Vorticity: Local Well-Posedness, Incompressible and Zero-Surface-Tension Limits.](https://arxiv.org/abs/2211.03600v5)

### Pair coordinates isolate collision angles

**Remember:** At fixed center and speed, a collision only changes the angle.

*Makes the theorem clean to state or prove.* MSC 76P05 (Rarefied gas flows, Boltzmann equation in fluid mechanics). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** For distinct planar velocities v and w, use their average (v + w)/2, relative speed \|v − w\|, and direction angle of v − w. Exchanging the particles shifts the angle by π.

**Problem.** For a smooth positive symmetric pair density, the angular collision operator contributes a nonpositive rate of change to angular Fisher information. This information measures squared angular derivatives of log density, weighted by density and inverse squared relative speed.

**How the definition helps.** In our own reading, the coordinates reduce collisions at fixed average velocity and relative speed to changes in one angle. Lemma 3.3 pairs each angle with a possible outgoing angle. The resulting integral is minus a squared difference of angular derivatives with nonnegative weights. Deriving that identity supplies the sign.

**Paper or page:** [On the monotonicity of the Fisher information for the Boltzmann equation](https://arxiv.org/abs/2409.01183v1). It says: “where θ is an angular variable and F is π-periodic with respect to θ”

**Sources:**

- [Cyril Imbert, Luis Silvestre and Cédric Villani, On the monotonicity of the Fisher information for the Boltzmann equation.](https://arxiv.org/abs/2409.01183v1)

### Density sorting measures excess energy

**Remember:** Compare with the lowest energy that preserves the density distribution.

*Makes the theorem clean to state or prove.* MSC 76S05 (Flows in porous media; filtration; seepage). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Sort the density by height, with heavier fluid below lighter fluid. Keep the volume occupied by each density range unchanged. Define excess energy as the gravitational energy above that of the sorted density.

**Problem.** Consider incompressible porous flow near a linearly decreasing density under the hypotheses of Park’s Theorem 1.1. A constant times the excess energy bounds the integrated squared difference from the sorted density. Thus decay of excess energy to zero gives convergence to the sorted density.

**How the definition helps.** Sorting provides one reference state for the whole motion because transport preserves the volume of each density range. Proposition 2.5 bounds the integrated squared density difference by a constant times the excess energy for these small perturbations. In our own account, taking square roots converts energy decay into density convergence. Proving the comparison and the energy decay requires separate estimates.

**Paper or page:** [Stability analysis of the incompressible porous media equation and the Stokes transport system via energy structure](https://arxiv.org/abs/2403.14187v2). It says: “the solution ρ(t) converges to the vertical rearrangement of the initial data”

**Sources:**

- [Jaemin Park, Stability analysis of the incompressible porous media equation and the Stokes transport system via energy structure.](https://arxiv.org/abs/2403.14187v2)

### Relative energy controls the incompressible limit

**Remember:** Compare two flows by charging for their difference, not their separate energies.

*Makes the theorem clean to state or prove.* MSC 76T06 (Liquid-liquid two component flows), 76D05. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** For composition φ and reference ψ, let Λˢ multiply each Fourier mode by its frequency magnitude raised to s. Integrate ρ\|u − v\|²/2 + \|Λˢ(φ − ψ)\|²/2 + Φ(φ) − Φ(ψ) − Φ′(ψ)(φ − ψ). Here ρ is density, u and v are the respective velocities, and Φ is the convex composition energy density.

**Problem.** On a periodic cube, compare the paper’s weak solutions with a smooth incompressible solution on a fixed interval of regularity. Initial compositions have equal means and converge in the norm controlling their mean-square derivatives through order s. With uniformly bounded initial energies and initial velocities converging in mean square, relative energy tends uniformly to zero as the density contrast vanishes.

**How the definition helps.** Relative energy expresses convergence of velocity and composition through one estimate. Weak solutions satisfy the equations after integration against smooth test functions. In our own words, convexity makes the tangent subtraction nonnegative. The work goes into bounding relative energy by a constant times the initial relative energy plus the density contrast.

**Paper or page:** [Weak solutions and incompressible limit of a quasi-incompressible Navier--Stokes/Cahn--Hilliard model for viscous two-phase flows](https://arxiv.org/abs/2508.08090v1). It says: “E(φα, uα \| φ, u)(τ) ≔ ∫𝕋³ ½ρα\|u − uα\|²(τ) dx + ∫𝕋³ ½\|Λˢφ − Λˢφα\|²(τ) dx + ∫𝕋³ (Φ(φα) − Φ′(φ)(φα − φ) − Φ(φ))(τ) dx”

**Sources:** none listed. No primary source with a working link was found.
