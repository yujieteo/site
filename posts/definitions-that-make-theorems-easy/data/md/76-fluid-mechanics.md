### Single-valued potentials exclude circulating vortices

**Remember:** A single-valued potential returns to the same value on every closed loop.

*Rules out counterexamples.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A velocity potential is a scalar function whose gradient equals the fluid velocity. Require one single-valued potential throughout the fluid region. Circulation is the line integral of velocity around a closed curve.

**Problem.** Every closed loop in a flow with a single-valued velocity potential has zero circulation. Zero curl alone does not give this conclusion on an annulus.

**How the definition helps.** In our own proof, integrating the gradient gives the change in potential, which vanishes around a closed loop. A smooth velocity with zero curl has a local potential. Simple connectedness, meaning every loop can shrink to a point within the region, makes the potential global. On a planar annulus, take counterclockwise circular velocity of magnitude 1/r at distance r from the center. Its curl vanishes, but every centered counterclockwise circle has circulation 2π.

**Wikipedia:** [Vortex](https://en.wikipedia.org/wiki/Vortex). It says: “For an irrotational vortex, the circulation is zero along any closed contour that does not enclose the vortex axis”

**Sources:** none listed. No primary source with a working link was found.

### Irrotational flow shares Bernoulli’s constant

**Remember:** Without rotation, Bernoulli’s constant is shared across streamlines.

*Rules out counterexamples.* MSC 76B99 (Incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** Irrotational flow means that the velocity field has zero curl. For constant density, the Bernoulli quantity adds half the squared speed, pressure divided by density, and potential energy per unit mass.

**Problem.** Consider smooth, steady flow of an inviscid fluid of constant density in a connected region, with a body force derived from a potential. Zero curl makes the Bernoulli quantity constant throughout the region. Otherwise it can vary between streamlines, the curves tangent to the velocity.

**How the definition helps.** In our own words, the curl-free condition makes the velocity’s acceleration the gradient of half its squared speed. In our own words, the steady momentum equation then sets the gradient of the entire Bernoulli quantity to zero. The work, in our own account, goes into rewriting the acceleration by the product rule. In our own example, uniform solid-body rotation has pressure increasing away from the axis. Its speed also increases, so its Bernoulli quantity differs across concentric streamlines.

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

**Definition.** Use the steady Stokes equations at each instant, keeping viscous and pressure forces but omitting both acceleration terms. The velocity responds to the current boundary velocity, without a separate equation for its time evolution.

**Problem.** Consider smooth steady Stokes flow at each instant in a bounded vessel, with prescribed velocity on the whole boundary and no body force. Reversing the complete boundary motion in time makes fluid particles retrace their paths.

**How the definition helps.** The instantaneous linear equations give the negative velocity field when the driving velocities reverse. In our own words, uniqueness of the Stokes boundary-value problem and uniqueness of particle paths carry the work. In our own counterexample, a sinusoidal shear on a periodic region decays under time-dependent Navier–Stokes flow. Replaying it backward would make the mode grow, which the unforced equations do not permit.

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “a time-reversed Stokes flow solves the same equations as the original Stokes flow.”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** In our own proof, the pressure force per unit mass becomes the gradient of a scalar when pressure depends only on density. Its potential has derivative −p′(ρ)/ρ. Differentiating the circulation around a moving loop and using the momentum equation then leaves only integrals of gradients, which vanish. For a counterexample, take initially motionless gas with density 1 + x and pressure 2 + y near the origin. The pressure force has nonzero curl, so circulation starts changing around small horizontal loops.

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

### Flux coordinates preserve incompressibility

**Remember:** Move flux with the area it crosses.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction). arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Let F be a smooth change of coordinates from a flat reference region to the fluid, with positive derivative determinant. At each reference point, apply the inverse derivative to the velocity at its image. Multiply the result by the derivative determinant to obtain the reference flux field.

**Problem.** If the smooth fluid velocity has zero divergence, so does the reference flux field.

**How the definition helps.** In our own proof, this definition preserves the volume per unit time crossing each corresponding surface. Transforming velocity alone misses the change in oriented area. The surface change-of-variables formula supplies the determinant factor. The divergence theorem now transfers zero net outward flux from each fluid region to its reference region.

**Paper or page:** [Symmetric doubly periodic gravity-capillary waves with small vorticity](https://arxiv.org/abs/2204.13093v3). It says: “In particular, the property of being divergence free is conserved under flattening.”

**Sources:**

- [D. Svensson Seth, K. Varholm and E. Wahlén, Symmetric doubly periodic gravity-capillary waves with small vorticity (2024).](https://doi.org/10.1016/j.aim.2024.109683)

### Hodge splitting isolates harmonic flow

**Remember:** Vorticity finds the rotated gradient but cannot see the harmonic flow.

*Makes the theorem clean to state or prove.* MSC 76B47 (Vortex flows for incompressible inviscid fluids), 58A14. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Consider a smooth velocity on an oriented surface with a metric, compact and without boundary. Its velocity one-form takes a tangent vector to its inner product with velocity. Hodge decomposition splits velocity into a gradient, a gradient rotated by a right angle, and a harmonic field. A harmonic field has both zero divergence and zero curl.

**Problem.** Two divergence-free velocities on the same such surface have the same vorticity, or curl, exactly when their difference is harmonic. Thus vorticity determines the velocity on a sphere, but leaves an ambiguity on a flat torus.

**How the definition helps.** The harmonic part names exactly the freedom left when we specify vorticity and require zero divergence. In our own proof, subtract the velocities to obtain a field with zero curl and zero divergence. Adding any harmonic field preserves both quantities. Hodge theory supplies the topological result that the sphere has no nonzero harmonic fields. A nonzero constant field on a flat torus gives an explicit ambiguity.

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

**How the definition helps.** In our own proof, minimizing dissipation gives uniqueness by strict convexity. The difference of two allowed velocities vanishes on the boundary. Korn’s inequality bounds its squared gradient integral by twice its squared symmetric gradient integral. Thus distinct allowed velocities have distinct symmetric gradients, and averaging them strictly lowers their average dissipation. The separate task is to show that the minimizer solves the usual momentum equation, where pressure enforces zero divergence.

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “The Stokes solution dissipates less energy than any other solenoidal vector field with the same boundary velocities”

**Sources:** none listed. No primary source with a working link was found.

### Wave variables separate propagation directions

**Remember:** Add height and velocity for one wave direction, subtract for the other.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction), 76M45. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** In the one-dimensional surface model, ζ is the scaled water height and ψ is the velocity potential evaluated at the surface. The gradient of a velocity potential gives fluid velocity. Apply the paper’s wavelength-dependent filter to the horizontal derivative of ψ and call the result v. Replace height and filtered velocity by their half-sum r and half-difference s.

**Problem.** In the shallow-water model of Proposition 3.5, the quadratic part of the energy is the integral of r² + s². The linear equations propagate r and s independently in opposite directions.

**How the definition helps.** The sum and difference split both the quadratic energy and the operator that generates the linear motion. In our own calculation, the mixed terms cancel when the squared height and squared filtered velocity are added. The two diagonal entries of the motion operator differ only in sign. Deriving the filter and justifying the water-wave approximation take separate work. The cubic terms in the quoted proposition still couple the two directions.

**Paper or page:** [Rigorous derivation of the Whitham equations from the water waves equations in the shallow water regime](https://arxiv.org/abs/2101.02940v1). It says: “Let r and s be defined as r ≔ (ζ + Fμ\[∂ₓψ\])/2, s ≔ (ζ − Fμ\[∂ₓψ\])/2.”

**Sources:** none listed. No primary source with a working link was found.

### Relative energy controls the incompressible limit

**Remember:** Compare two flows by charging for their difference, not their separate energies.

*Makes the theorem clean to state or prove.* MSC 76T06 (Liquid-liquid two component flows), 76D05. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Relative energy measures how far a fluid state lies from a reference state. Integrate half the density times the squared velocity difference and half the squared difference of the order-s composition derivatives. These derivatives weight each spatial frequency by its magnitude to the power s. Add the integral of the convex composition energy above its tangent at the reference composition.

**Problem.** On a periodic cube, compare the paper’s weak solutions with a smooth incompressible solution on a fixed interval of regularity. Initial compositions have equal means and converge in the norm controlling their mean-square derivatives through order s. With uniformly bounded initial energies and initial velocities converging in mean square, relative energy tends uniformly to zero as the density contrast vanishes.

**How the definition helps.** Relative energy expresses convergence of velocity and composition through one estimate. Weak solutions satisfy the equations after integration against smooth test functions. In our own words, convexity makes the tangent subtraction nonnegative. The work goes into bounding relative energy by a constant times the initial relative energy plus the density contrast.

**Paper or page:** [Weak solutions and incompressible limit of a quasi-incompressible Navier--Stokes/Cahn--Hilliard model for viscous two-phase flows](https://arxiv.org/abs/2508.08090v1). It says: “E(φα, uα \| φ, u)(τ) ≔ ∫𝕋³ ½ρα\|u − uα\|²(τ) dx + ∫𝕋³ ½\|Λˢφ − Λˢφα\|²(τ) dx + ∫𝕋³ (Φ(φα) − Φ′(φ)(φα − φ) − Φ(φ))(τ) dx”

**Sources:** none listed. No primary source with a working link was found.
