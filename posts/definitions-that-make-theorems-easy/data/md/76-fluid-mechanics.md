### Zero divergence preserves parcel volume

**Remember:** The flow derivative’s determinant measures local volume change.

*Makes the theorem clean to state or prove.* MSC 76A02 (Foundations of fluid mechanics). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A flow map sends each initial position to its position at time t. The local volume ratio is the determinant of its derivative in the initial position. It changes at a rate equal to itself times the divergence of velocity (our own).

**Problem.** A smooth flow preserves volume on every parcel if and only if its velocity has zero divergence.

**How the definition helps.** Integrating the ratio over an initial parcel gives its current volume, so every parcel keeps its volume exactly when the ratio stays one (our own). The ratio starts at one and grows at the rate given by the divergence, so it stays one exactly when the divergence vanishes (our own).

**Wikipedia:** [Incompressible flow](https://en.wikipedia.org/wiki/Incompressible_flow). It says: “Equivalently, the divergence of an incompressible flow velocity is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Single-valued potentials exclude circulating vortices

**Remember:** A single-valued potential returns to the same value on every closed loop.

*Rules out counterexamples.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A velocity potential is a scalar function whose gradient is the fluid velocity; require one single-valued potential on the whole fluid region. The circulation around a closed loop, the line integral of velocity, is then the change of the potential around the loop (our own).

**Problem.** Every closed loop in a flow with a single-valued velocity potential has zero circulation. Zero curl alone does not give this conclusion on an annulus.

**How the definition helps.** Going around a loop returns a single-valued potential to its start, so the circulation is zero (our own). Counterclockwise circular velocity 1/r on a planar annulus, with r the distance to the center, has zero curl but circulation 2π on centered circles (our own). So zero curl alone does not give a single-valued potential there.

**Wikipedia:** [Vortex](https://en.wikipedia.org/wiki/Vortex). It says: “For an irrotational vortex, the circulation is zero along any closed contour that does not enclose the vortex axis”

**Sources:** none listed. No primary source with a working link was found.

### Irrotational flow shares Bernoulli’s constant

**Remember:** Without rotation, Bernoulli’s constant is shared across streamlines.

*Rules out counterexamples.* MSC 76B99 (Incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** Irrotational flow means the velocity field has zero curl. For constant density, the Bernoulli quantity is half the squared speed plus pressure over density plus potential energy per unit mass. In steady inviscid flow its gradient equals the velocity crossed with the curl (our own).

**Problem.** In smooth steady inviscid flow of constant density in a connected region, with a conservative body force, zero curl makes the Bernoulli quantity constant throughout. Otherwise it can vary between streamlines, the curves tangent to the velocity.

**How the definition helps.** Zero curl makes the gradient vanish, and connectedness then makes the quantity constant (our own). In solid-body rotation without body force, speed and pressure both grow away from the axis, so different circular streamlines carry different values (our own).

**Wikipedia:** [Bernoulli's principle](https://en.wikipedia.org/wiki/Bernoulli%27s_principle). It says: “If the fluid flow is irrotational, the total pressure is uniform”

**Sources:** none listed. No primary source with a working link was found.

### Stream functions measure flux

**Remember:** ψ changes along a curve by exactly the flow crossing it.

*True by definition.* MSC 76B99 (Incompressible inviscid fluids). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** In a two-dimensional flow, the stream function ψ is the scalar whose rotated gradient is the velocity: u = (∂ψ/∂y, −∂ψ/∂x). So the derivative of ψ along any curve equals the velocity component crossing the curve toward its right (our own).

**Problem.** Flux is the volume per unit time and unit thickness that crosses an oriented planar curve toward its right. It equals the value of ψ at the end of the curve minus its value at the start.

**How the definition helps.** Flux is the integral of the derivative of ψ along the curve, so it is the endpoint difference. The real work is existence (our own): smooth incompressible planar flow on a simply connected region has a stream function.

**Wikipedia:** [Stream function](https://en.wikipedia.org/wiki/Stream_function). It says: “In words, the stream function ψ is the volumetric flux through the test surface per unit thickness”

**Sources:** none listed. No primary source with a working link was found.

### Creeping flow retraces reversed motion

**Remember:** No inertia: reverse the boundary motion and the whole flow reverses.

*Rules out counterexamples.* MSC 76D07 (Stokes and related (Oseen, etc.) flows). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** Creeping (Stokes) flow is incompressible Newtonian flow with inertia neglected: ∇·u = 0 and −∇p + μΔu + f = 0 at each instant. Here u is velocity, p pressure, μ constant viscosity and f body force per unit volume. The equations are linear with no time derivative, so each instant’s flow depends only on that instant’s boundary motion.

**Problem.** Consider smooth Stokes flow, steady at each instant, in a bounded vessel with prescribed velocity on the whole boundary and no body force. Reversing the complete boundary motion in time makes fluid particles retrace their paths.

**How the definition helps.** Reversing the boundary velocity turns the unique Stokes solution u into −u, so particles run backward along the same paths (our own). This uses uniqueness for the Stokes boundary-value problem and for particle paths. With inertia it fails: a decaying periodic shear mode under unforced Navier–Stokes flow would have to grow when replayed backward (our own).

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “a time-reversed Stokes flow solves the same equations as the original Stokes flow.”

**Sources:** none listed. No primary source with a working link was found.

### Density weighting cancels cross terms

**Remember:** Weight by density so the fluctuation carries no mean mass flux.

*True by definition.* MSC 76F50 (Compressibility effects in turbulence). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** For density ρ with positive mean E\[ρ\], the Favre mean velocity is the density-weighted mean U = E\[ρu\]/E\[ρ\], and the fluctuation is u′ = u − U. By construction the density-weighted fluctuation has zero mean: E\[ρu′\] = 0.

**Problem.** For every component pair i, j, E\[ρu<sub>i</sub> u<sub>j</sub>\] = E\[ρ\]U<sub>i</sub> U<sub>j</sub> + E\[ρu′<sub>i</sub> u′<sub>j</sub>\].

**How the definition helps.** Expanding u = U + u′ gives two mixed terms, each a constant times E\[ρu′\], which is zero (our own). With the ordinary mean only E\[u′\] vanishes, so E\[ρu′\] survives as an extra term.

**Wikipedia:** [Favre averaging](https://en.wikipedia.org/wiki/Favre_averaging). It says: “Favre averaging is the density-weighted averaging method”

**Sources:**

- [A. J. Favre, The Equations of Compressible Turbulent Gases (1965).](https://doi.org/10.21236/ad0622097)

### Matching Reynolds numbers matches equations

**Remember:** After rescaling, only inertia over viscosity remains in the equations.

*Makes the theorem clean to state or prove.* MSC 76M55 (Dimensional analysis and similarity applied to problems in fluid mechanics), 76D05. arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** The Reynolds number Re = ρUL/μ is the ratio of inertial to viscous forces, for constant density ρ, viscosity μ, speed scale U and length scale L. Measuring position, velocity, time and pressure in units of L, U, L/U and ρU² turns the Navier–Stokes equations without body force into ∂u/∂t + (u·∇)u = −∇p + (1/Re)Δu with ∇·u = 0 (our own).

**Problem.** For incompressible Newtonian fluids without body forces in geometrically similar domains, equal Reynolds numbers give identical scaled flow equations. Matching scaled boundary and initial data then give matching solutions wherever the scaled problem has a unique solution.

**How the definition helps.** Re is the only parameter left in the scaled equations, so equal Re gives the same equations (our own). Matching solutions also need matching scaled data and uniqueness of the scaled problem (our own).

**Wikipedia:** [Reynolds number](https://en.wikipedia.org/wiki/Reynolds_number). It says: “the ratio of inertial forces to viscous forces”

**Sources:**

- [O. Reynolds, An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous, and of the law of resistance in parallel channels (1883).](https://doi.org/10.1098/rstl.1883.0029)

### Barotropic pressure preserves circulation

**Remember:** If pressure follows density alone, pressure force is a pure gradient.

*Rules out counterexamples.* MSC 76N15 (Gas dynamics (general theory)), 76B47. arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** A fluid is barotropic when its pressure p is a differentiable function of density ρ alone. Then the pressure force per unit mass, −∇p/ρ, is the gradient of one function of ρ, with derivative −p′(ρ)/ρ, so it has no curl.

**Problem.** Consider a smooth inviscid flow with positive density and body forces per unit mass given by a potential. A barotropic pressure law preserves circulation, the line integral of velocity, around every loop carried by the fluid.

**How the definition helps.** The rate of change of circulation around a material loop is a loop integral of gradients, so it is zero (our own). For gas at rest near the origin with ρ = 1 + x and p = 2 + y, the pressure force has nonzero curl, so circulation around small horizontal loops starts to change (our own).

**Wikipedia:** [Kelvin's circulation theorem](https://en.wikipedia.org/wiki/Kelvin%27s_circulation_theorem). It says: “This theorem does not hold in cases with viscous stresses, nonconservative body forces (for example the Coriolis force) or non-barotropic pressure-density relations.”

**Sources:** none listed. No primary source with a working link was found.

### Hydraulic head accounts for gravity

**Remember:** Water flows down the head: elevation plus pressure height.

*True by definition.* MSC 76S05 (Flows in porous media; filtration; seepage). arXiv physics.flu-dyn. Level 2: later undergraduate.

**Definition.** For a liquid of constant density ρ under uniform gravity g, hydraulic head h = z + p/(ρg) adds elevation z and pressure height p/(ρg). Its gradient measures the combined push of pressure and gravity, so a liquid at rest has constant head (our own).

**Problem.** For positive scalar hydraulic conductivity K, Darcy’s law q = −K∇h makes the Darcy flux q (volume flow per unit total cross-section) point down the head gradient wherever it is nonzero. In a liquid at rest under gravity, head is constant and flux vanishes.

**How the definition helps.** In a liquid at rest, pressure height grows with depth exactly as elevation falls, so ∇h = 0 and q = 0 (our own). A law using pressure alone would wrongly predict upward flow, from the higher pressure below (our own).

**Wikipedia:** [Darcy's law](https://en.wikipedia.org/wiki/Darcy%27s_law). It says: “Note that the elevation head must be taken into account if the inlet and outlet are at different elevations.”

**Sources:** none listed. No primary source with a working link was found.

### Finite speed fixes airfoil circulation

**Remember:** Choose the one circulation that keeps trailing-edge speed finite.

*Rules out counterexamples.* MSC 76B10 (Jets and cavities, cavitation, free-streamline theory, water-entry problems, airfoil and hydrofoil theory, sloshing). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** The Kutta condition picks the circulation, the integral of tangential velocity around the wing section, that keeps the flow speed finite at its sharp rear tip. For every other circulation the steady two-dimensional potential flow has infinite speed there.

**Problem.** Consider incompressible irrotational flow past an impermeable Joukowski airfoil, the image of a circle under the Joukowski map, with one rear cusp and fixed uniform velocity at infinity. Exactly one circulation gives finite speed at the cusp.

**How the definition helps.** Airfoil velocity is circle velocity divided by the map derivative, which has a simple zero at the circle point sent to the cusp (our own). So finite speed forces the circle velocity to vanish there. That velocity depends linearly on circulation with nonzero slope, so exactly one circulation works.

**Wikipedia:** [Kutta condition](https://en.wikipedia.org/wiki/Kutta_condition). It says: “Mathematically, the Kutta condition enforces a specific choice among the infinite allowed values of circulation.”

**Sources:** none listed. No primary source with a working link was found.

### Flux coordinates preserve incompressibility

**Remember:** Carry flux, not velocity, so each region’s outflow survives.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction). arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Pull a fluid velocity back to a flat reference region as a flux field. Its flux through each reference surface then equals the fluid flux through the image surface (our own). For a smooth coordinate change F with det DF &gt; 0, this field at X is det DF(X) · DF(X)⁻¹ u(F(X)).

**Problem.** If the smooth fluid velocity has zero divergence, so does the reference flux field.

**How the definition helps.** Zero divergence means zero net outward flux from every small region, and this definition preserves flux region by region (our own). The divergence theorem then carries zero divergence from fluid to reference region. Transforming velocity by DF⁻¹ alone misses the change in area that the determinant supplies.

**Paper or page:** [Symmetric doubly periodic gravity-capillary waves with small vorticity](https://arxiv.org/abs/2204.13093v3). It says: “In particular, the property of being divergence free is conserved under flattening.”

**Sources:**

- [D. Svensson Seth, K. Varholm and E. Wahlén, Symmetric doubly periodic gravity-capillary waves with small vorticity (2024).](https://doi.org/10.1016/j.aim.2024.109683)

### Wave action survives energy exchange

**Remember:** Divide wave energy by the frequency felt in the moving current.

*Makes the theorem clean to state or prove.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Wave action density is wave energy density divided by the intrinsic angular frequency, the nonzero frequency seen by an observer moving with the local mean current. Wave energy alone changes as waves exchange energy with a varying current, and this ratio factors out that exchange (our own).

**Problem.** Consider a small wave train with one local frequency, away from zero in the moving frame, on a current that varies slowly over a wavelength and a wave period. Without forcing or damping, wave action obeys a local conservation law to leading order.

**How the definition helps.** Dividing by the intrinsic frequency cancels the leading energy exchange term between waves and current (our own). The work is deriving the averaged wave equations under the slow-variation assumption (our own).

**Wikipedia:** [Wave action (continuum mechanics)](https://en.wikipedia.org/wiki/Wave_action_%28continuum_mechanics%29). It says: “However, wave action is a quantity which is conserved for the wave-part of the motion.”

**Sources:**

- [F. P. Bretherton and C. J. R. Garrett, Wavetrains in inhomogeneous moving media (1968).](https://doi.org/10.1098/rspa.1968.0034)

### Distributional curl locates sheet vorticity

**Remember:** A tangential velocity jump puts vorticity on the sheet itself.

*True by definition.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** The distributional vorticity ω of a locally integrable velocity u is its curl taken against test fields: ⟨ω,φ⟩ = ∫u·curl φ dV for every smooth compactly supported φ. Unlike the pointwise curl, it keeps the boundary terms that integration by parts produces where u jumps.

**Problem.** Suppose a three-dimensional velocity is smooth up to each side of a smooth sheet, with unit normal n from the minus side to the plus side. Its curl contains a sheet term with density n × \[u\], where \[u\] is the plus trace minus the minus trace.

**How the definition helps.** Integrating by parts on each side leaves boundary integrals over the sheet with opposite outward normals (our own). Their sum is the sheet term n × \[u\].

**Wikipedia:** [Vortex sheet](https://en.wikipedia.org/wiki/Vortex_sheet). It says: “the normal component of the flow velocity is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Hodge splitting isolates harmonic flow

**Remember:** Harmonic fields are invisible to both divergence and vorticity.

*Makes the theorem clean to state or prove.* MSC 76B47 (Vortex flows for incompressible inviscid fluids), 58A14. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** On a compact oriented Riemannian surface without boundary, a smooth tangent field is harmonic if its divergence and curl both vanish. These are exactly the fields that can be added to a velocity without changing its divergence or its vorticity.

**Problem.** Two divergence-free velocities on the same such surface have the same vorticity exactly when their difference is harmonic. Thus vorticity determines the velocity on a sphere, but not on a flat torus.

**How the definition helps.** The difference of two divergence-free fields is divergence-free, and it has zero curl exactly when their vorticities agree (our own). Hodge theory gives no nonzero harmonic fields on the sphere. On a flat torus, nonzero constant fields are harmonic.

**Paper or page:** [On the interplay between vortices and harmonic flows: Hodge decomposition of Euler's equations in 2d](https://arxiv.org/abs/2309.12582v1). It says: “If v is divergence free, then in the Hodge decomposition of ν = v♭ there is no component df.”

**Sources:**

- [C. Grotta-Ragazzo, B. Gustafsson and J. Koiller, On the Interplay Between Vortices and Harmonic Flows: Hodge Decomposition of Euler’s Equations in 2d (2024).](https://doi.org/10.1134/s1560354724020011)

### Velocity one-forms transport vorticity

**Remember:** Differentiate the circulation form and the pressure term vanishes.

*True by definition.* MSC 76B47 (Vortex flows for incompressible inviscid fluids). arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Treat velocity as a one-form ν, whose integral along a curve is the circulation, and define vorticity as its exterior derivative dν. Euler’s equation says ν changes along the flow by an exact form db, and exterior differentiation kills exact forms.

**Problem.** For smooth constant-density Euler flow without nonconservative forces, the fluid flow preserves the vorticity two-form. Equivalently, vorticity flux through every material surface is constant.

**How the definition helps.** Applying d to Euler’s equation removes db, since d² = 0, and d commutes with the Lie derivative along the flow. So ∂(dν)/∂t + L<sub>u</sub>(dν) = 0, which says the flow carries the vorticity two-form unchanged. The work is rewriting the vector momentum equation in this one-form form (our own).

**Paper or page:** [On the interplay between vortices and harmonic flows: Hodge decomposition of Euler's equations in 2d](https://arxiv.org/abs/2309.12582v1). It says: “Euler's equations are given by ∂ν/∂t + Lν♯ ν = db”

**Sources:**

- [C. Grotta-Ragazzo, B. Gustafsson and J. Koiller, On the Interplay Between Vortices and Harmonic Flows: Hodge Decomposition of Euler’s Equations in 2d (2024).](https://doi.org/10.1134/s1560354724020011)

### Minimum dissipation gives unique Stokes velocity

**Remember:** Average two different minimizers and dissipation drops below both.

*True by definition.* MSC 76D07 (Stokes and related (Oseen, etc.) flows), 76M30. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** Among divergence-free velocities with given values on the whole boundary, the Stokes velocity minimizes viscous dissipation, the integral of the squared symmetric part of the velocity gradient (steady flow, constant positive viscosity, no body force). This dissipation is a strictly convex function of the symmetric gradient.

**Problem.** On a bounded connected region with sufficiently smooth boundary, the fixed-boundary Stokes dissipation problem has at most one minimizing velocity.

**How the definition helps.** Two distinct admissible velocities differ by a field vanishing on the boundary, so by Korn’s inequality their symmetric gradients differ (our own). Strict convexity then gives their average strictly less dissipation than the mean of their dissipations (our own). The average is admissible, so both cannot be minimizers.

**Wikipedia:** [Stokes flow](https://en.wikipedia.org/wiki/Stokes_flow). It says: “The Stokes solution dissipates less energy than any other solenoidal vector field with the same boundary velocities”

**Sources:** none listed. No primary source with a working link was found.

### Squire’s rescaling exposes two-dimensional instability

**Remember:** Turn the wave to face the flow and the Reynolds number drops.

*True by definition.* MSC 76E05 (Parallel shear flows in hydrodynamic stability). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Squire’s transformation replaces wave numbers (α, β), with α &gt; 0, by (k, 0), where k = √(α² + β²). It keeps the complex phase speed and multiplies the Reynolds number by α/k ≤ 1. This keeps k and α times the Reynolds number, the only parameters besides phase speed in the equation for velocity normal to the walls (our own).

**Problem.** Consider linear disturbances of a steady viscous incompressible parallel flow between fixed parallel walls. Every growing three-dimensional mode with α &gt; 0 gives a growing two-dimensional mode at a lower Reynolds number.

**How the definition helps.** The three- and two-dimensional modes solve the same equation for wall-normal velocity with the same wall conditions, so growth carries over at the lower Reynolds number (our own). The remaining work is deriving that equation and excluding growing modes with zero wall-normal velocity.

**Wikipedia:** [Squire's theorem](https://en.wikipedia.org/wiki/Squire%27s_theorem). It says: “If we want to decide whether a flow is unstable or not, it suffices to look at two-dimensional perturbations.”

**Sources:**

- [H. B. Squire, On the stability for three-dimensional disturbances of viscous fluid flow between parallel walls (1933).](https://doi.org/10.1098/rspa.1933.0193)

### Geostrophic velocity is constant along rotation axes

**Remember:** Rotation balanced by pressure freezes velocity along the spin axis.

*Makes the theorem clean to state or prove.* MSC 76U05 (General theory of rotating fluids). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** A velocity u is in geostrophic balance when the Coriolis force balances the pressure force. In symbols, 2Ω × u = −∇p/ρ at every point, for angular velocity Ω, pressure p and density ρ. At constant density this makes Ω × u a gradient, so its curl vanishes (our own).

**Problem.** Suppose a smooth divergence-free velocity satisfies geostrophic balance at constant density in a frame with constant nonzero angular velocity. Velocity is constant on each line segment in the fluid parallel to the rotation axis.

**How the definition helps.** For constant Ω and ∇·u = 0, curl(Ω × u) = −(Ω·∇)u, so the curl of the balance gives (Ω·∇)u = 0 (our own). Hence u does not change along the rotation axis. Applying this to a real flow requires justifying the neglect of inertia and viscosity.

**Wikipedia:** [Taylor–Proudman theorem](https://en.wikipedia.org/wiki/Taylor%E2%80%93Proudman_theorem). It says: “all three components of the velocity vector are uniform along any line parallel to the z-axis.”

**Sources:** none listed. No primary source with a working link was found.

### Ertel’s vorticity follows compressible air parcels

**Remember:** Dot vorticity with a conserved temperature gradient, then divide by density.

*Makes the theorem clean to state or prove.* MSC 76U60 (Geophysical flows). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Ertel’s potential vorticity is ω<sub>a</sub>·∇θ/ρ, where ω<sub>a</sub> is absolute vorticity (the curl of velocity plus twice the frame’s angular velocity), θ is potential temperature and ρ is density. Potential temperature is a function of pressure and density that each parcel keeps without heating, so ∇θ is perpendicular to the vorticity source ∇p × ∇ρ.

**Problem.** In smooth dry ideal-gas flow with conservative body forces and no friction or heating, Ertel’s potential vorticity stays constant along parcel paths.

**How the definition helps.** Dotting with ∇θ removes the pressure–density vorticity source, because ∇θ is perpendicular to it. The stretching terms of the vorticity and ∇θ transport equations cancel in the dot product, and dividing by density cancels compression (our own).

**Wikipedia:** [Potential vorticity](https://en.wikipedia.org/wiki/Potential_vorticity). It says: “its gradient is perpendicular to the cross product of ∇p and ∇ρ”

**Sources:**

- [Wayne Schubert and coauthors, English translations of twenty-one of Ertel’s papers on geophysical fluid dynamics (2004).](https://doi.org/10.1127/0941-2948/2004/0013-0527)

### Tangential fields make helicity gauge independent

**Remember:** If no field line crosses the boundary, gauge changes cannot alter helicity.

*Rules out counterexamples.* MSC 76W05 (Magnetohydrodynamics and electrohydrodynamics). arXiv physics.flu-dyn. Level 3: graduate.

**Definition.** Magnetic helicity is ∫A·B over the region, where A is any vector potential with curl A = B. For a field tangent to the boundary, B·n = 0 there. Changing A by a gradient ∇χ changes this integral only by the boundary integral of χ B·n, which is zero.

**Problem.** On a smooth bounded simply connected region, helicity is independent of the choice of vector potential for a field tangent to its boundary.

**How the definition helps.** On a simply connected region two potentials differ by a gradient ∇χ (our own). Since div B = 0, ∫∇χ·B equals the boundary integral of χ B·n, which tangency makes zero (our own). For a unit vertical field in a box, adding the gradient of height changes helicity by the volume.

**Wikipedia:** [Magnetic helicity](https://en.wikipedia.org/wiki/Magnetic_helicity). It says: “Since the magnetic vector potential is not gauge invariant, the magnetic helicity is also not gauge invariant in general.”

**Sources:**

- [Lodewijk Woltjer, A Theorem on Force-Free Magnetic Fields (1958).](https://doi.org/10.1073/pnas.44.6.489)

### Geodesics make pressure a constraint force

**Remember:** Pressure is the constraint force keeping a geodesic volume-preserving.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 76A02 (Foundations of fluid mechanics), 58D05. arXiv physics.flu-dyn. Level 4: research.

**Definition.** A geodesic of parcel maps is a path of smooth volume-preserving diffeomorphisms whose action is stationary under variations with fixed endpoints. The action is the time integral of the kinetic energy ½∫\|parcel speed\|². Stationarity means the parcel acceleration is perpendicular to every allowed variation, that is, to every divergence-free field (our own).

**Problem.** On a compact space with a smooth metric and no boundary, the velocity of a smooth geodesic of parcel maps satisfies the incompressible Euler equations.

**How the definition helps.** Volume preservation allows exactly the divergence-free infinitesimal displacements, and by the orthogonal (Helmholtz–Hodge) decomposition the fields perpendicular to all of them are gradients (our own). So acceleration equals −∇p for some p, which is the incompressible Euler equation.

**nLab:** [diffeomorphism group](https://ncatlab.org/nlab/show/diffeomorphism+group). It says: “one considers groups of diffeomorphisms which are automorphism preserving that extra structure.”

**Sources:**

- [Vladimir Arnold, Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l’hydrodynamique des fluides parfaits (1966).](https://doi.org/10.5802/aif.233)

### Wave variables separate propagation directions

**Remember:** Add height and velocity for one wave direction, subtract for the other.

*True by definition.* MSC 76B15 (Water waves, gravity waves; dispersion and scattering, nonlinear interaction), 76M45. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Combine scaled surface height ζ and v = Fμ\[∂ₓψ\], where ψ is the surface velocity potential and Fμ the model’s Fourier multiplier, into r = (ζ + v)/2 and s = (ζ − v)/2. Then ζ = r + s and v = r − s, so r and s are the two parts of the wave moving in opposite directions.

**Problem.** In the shallow-water model of Proposition 3.5, the quadratic part of the energy is the integral of r² + s². The linear equations propagate r and s independently in opposite directions.

**How the definition helps.** Substituting ζ = r + s and v = r − s into the quadratic energy cancels the mixed terms (our own). Proposition 3.5 supplies the transformed linear operator, which is diagonal with opposite signs, so r and s propagate independently.

**Paper or page:** [Rigorous derivation of the Whitham equations from the water waves equations in the shallow water regime](https://arxiv.org/abs/2101.02940v1). It says: “Let r and s be defined as r ≔ (ζ + Fμ\[∂ₓψ\])/2, s ≔ (ζ − Fμ\[∂ₓψ\])/2.”

**Sources:** none listed. No primary source with a working link was found.

### A weighted sum reveals turbulent decay

**Remember:** Weight energy so its viscous loss outpaces vorticity growth.

*Makes the theorem clean to state or prove.* MSC 76F05 (Isotropic turbulence; homogeneous turbulence). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The weighted sum is the mean vorticity magnitude plus the mean squared speed divided by √2 ν, where ν is the kinematic viscosity. The weight is chosen so the viscous loss of energy outpaces the fastest growth of mean vorticity magnitude that vortex stretching allows (our own).

**Problem.** Consider smooth unforced incompressible turbulence whose velocity statistics are unchanged by translations and rotations. The weighted sum cannot increase while the averages and their derivatives exist.

**How the definition helps.** The scaled energy loss covers the largest possible stretching growth of mean vorticity magnitude, so the sum cannot increase (our own). The bound uses an identity relating mean squared deformation to mean squared vorticity, together with the energy balance.

**Paper or page:** [The vortex dynamics in incompressible viscous turbulent flows](https://arxiv.org/abs/2101.00375v2). It says: “is monotonically decreasing.”

**Sources:**

- [Jiawei Li and Zhongmin Qian, The vortex dynamics in incompressible viscous turbulent flows.](https://arxiv.org/abs/2101.00375v2)

### Equilibrium variables preserve steady currents

**Remember:** Reconstruct discharge and head, which stay flat over a bumpy bed.

*Makes the theorem clean to state or prove.* MSC 76M12 (Finite volume methods applied to problems in fluid mechanics). arXiv math.NA, physics.flu-dyn. Level 4: research.

**Definition.** For one-dimensional shallow water, let h be depth, u velocity, b bed height and g gravity. Reconstruct discharge hu and total head b + h + u²/(2g) instead of depth and velocity. A frictionless steady current keeps both constant, even where depth changes with the bed (our own).

**Problem.** Consider the frictionless, one-dimensional shallow-water methods in Theorem 2.1. If discharge and head are each constant at all the discrete locations, both the cell averages and the point values stay fixed.

**How the definition helps.** Reconstructing constant data returns the same constants, so the scheme adds no spurious variation from the varying bed (our own). The proof still checks that transported momentum and the bed force cancel in both the cell-average and point-value updates.

**Paper or page:** [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809v4). It says: “If the discrete data are at a steady state”

**Sources:**

- [Rémi Abgrall and Yongle Liu, A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations.](https://arxiv.org/abs/2304.07809v4)

### Skew symmetry cancels interior transport

**Remember:** Pair each transport term with its transpose, and only boundary flux remains.

*True by definition.* MSC 76N06 (Compressible Navier-Stokes equations). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** In state variables U with quadratic energy, write each interior transport term in the paired form ∂ₓ(AU) + Aᵀ∂ₓU, for coefficient matrix A. Paired this way, its contribution to the energy rate, Uᵀ∂ₓ(AU) + Uᵀ Aᵀ∂ₓU = ∂ₓ(UᵀAU), is a pure derivative (our own).

**Problem.** For Nordström’s compressible flow equations, suppose diffusion dissipates energy and the boundary supplies at most the prescribed energy input. Assume the remaining interior matrix is skew-symmetric, meaning its transpose equals its negative. Then the initial state and external data bound the energy.

**How the definition helps.** Integration by parts turns the paired terms into boundary flux, and the skew-symmetric matrix C contributes UᵀCU = 0 (our own). Dissipative diffusion and the boundary condition then bound the energy by the data. The work is finding variables and coefficients that reproduce the original equations.

**Paper or page:** [A Skew-Symmetric Energy Stable Almost Dissipation Free Formulation of the Compressible Navier-Stokes Equations](https://arxiv.org/abs/2401.12038v2). It says: “C + Cᵀ = 0”

**Sources:**

- [Jan Nordström, A Skew-Symmetric Energy Stable Almost Dissipation Free Formulation of the Compressible Navier-Stokes Equations.](https://arxiv.org/abs/2401.12038v2)

### Relative energy blocks branching gas flows

**Remember:** Measure the gap from the tangent at the state you track.

*Makes the theorem clean to state or prove.* MSC 76N10 (Existence, uniqueness, and regularity theory for compressible fluids and gas dynamics). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The relative energy of density ρ and velocity u against a comparison r, v is ρ\|u − v\|²/2 + H(ρ) − H(r) − H′(r)(ρ − r), with H the internal energy per volume. It adds the kinetic energy of the velocity difference to the gap between H and its tangent line at r. For strictly convex H it vanishes exactly when density and momentum agree (our own).

**Problem.** Consider a gas whose pressure is proportional to a power of density with exponent greater than one. Suppose a comparison solution satisfies the regularity and vacuum conditions of Theorem 1.4. Every weak solution satisfying its energy inequality with the same initial data has the same density and momentum.

**How the definition helps.** Strict convexity makes the tangent gap zero only when ρ = r, and the kinetic term catches velocity errors where density is positive (our own). Theorem 1.4 controls growth near vacuum, so zero initial relative energy stays zero.

**Paper or page:** [Weak-Strong Uniqueness for the Isentropic Euler Equations with Possible Vacuum](https://arxiv.org/abs/2103.16560v1). It says: “ϱ = r and ϱu = rv in \[0, T\] × ℝᴺ.”

**Sources:**

- [Shyam Sundar Ghoshal, Animesh Jana and Emil Wiedemann, Weak-Strong Uniqueness for the Isentropic Euler Equations with Possible Vacuum.](https://arxiv.org/abs/2103.16560v1)

### Subtracting surface motion saves derivatives

**Remember:** Subtract the derivative that comes only from moving coordinates.

*True by definition.* MSC 76N30 (Waves in compressible fluids). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The good unknown G = Df − (∂zf)Dη corrects the fourth-order tangential derivative Df of a field f in flattened coordinates. It removes the part (∂zf)Dη that comes from differentiating the vertical coordinate map η, where ∂zf is the physical vertical derivative.

**Problem.** Assume the map’s vertical derivative stays above a positive constant. Then ‖Df‖₂² ≤ 2‖G‖₂² + 2‖∂zf‖∞²‖Dη‖₂².

**How the definition helps.** Since Df = G + (∂zf)Dη, the inequality (a + b)² ≤ 2a² + 2b² gives the bound (our own). The substantive estimates control G when the fluid equations differentiate it.

**Paper or page:** [Compressible Gravity-Capillary Water Waves with Vorticity: Local Well-Posedness, Incompressible and Zero-Surface-Tension Limits](https://arxiv.org/abs/2211.03600v5). It says: “be the Alinhac good unknowns associated with the smooth function f”

**Sources:**

- [Chenyun Luo and Junyan Zhang, Compressible Gravity-Capillary Water Waves with Vorticity: Local Well-Posedness, Incompressible and Zero-Surface-Tension Limits.](https://arxiv.org/abs/2211.03600v5)

### Pair coordinates isolate collision angles

**Remember:** At fixed center and speed, a collision only changes the angle.

*Makes the theorem clean to state or prove.* MSC 76P05 (Rarefied gas flows, Boltzmann equation in fluid mechanics). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** Describe a pair of distinct planar velocities v, w by their average (v + w)/2, their relative speed \|v − w\| and the angle θ of v − w. A collision keeps the average and relative speed, so it changes only θ (our own). Exchanging the particles shifts θ by π.

**Problem.** For a smooth positive symmetric pair density, the angular collision operator contributes a nonpositive rate of change to angular Fisher information. This information measures squared angular derivatives of log density, weighted by density and inverse squared relative speed.

**How the definition helps.** In these coordinates the collision operator acts on the angle alone (our own). Lemma 3.3 pairs each angle with an outgoing angle and turns the rate of change into minus a squared difference of angular derivatives with nonnegative weights.

**Paper or page:** [On the monotonicity of the Fisher information for the Boltzmann equation](https://arxiv.org/abs/2409.01183v1). It says: “where θ is an angular variable and F is π-periodic with respect to θ”

**Sources:**

- [Cyril Imbert, Luis Silvestre and Cédric Villani, On the monotonicity of the Fisher information for the Boltzmann equation.](https://arxiv.org/abs/2409.01183v1)

### Density sorting measures excess energy

**Remember:** Measure energy above the sorted, heaviest-at-bottom state.

*Makes the theorem clean to state or prove.* MSC 76S05 (Flows in porous media; filtration; seepage). arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The sorted density rearranges the fluid vertically, heaviest at the bottom, keeping the volume of each density range. Excess energy is the gravitational energy above that of the sorted state, the lowest energy any volume-preserving transport can reach (our own).

**Problem.** Consider incompressible porous flow near a linearly decreasing density under the hypotheses of Park’s Theorem 1.1. A constant times the excess energy bounds the integrated squared difference from the sorted density. Thus decay of excess energy to zero gives convergence to the sorted density.

**How the definition helps.** Transport preserves the volume of each density range, so the sorted state is one fixed reference for the whole motion. Proposition 2.5 bounds the integrated squared distance to it by a constant times excess energy for these small perturbations. So excess energy decaying to zero forces convergence (our own).

**Paper or page:** [Stability analysis of the incompressible porous media equation and the Stokes transport system via energy structure](https://arxiv.org/abs/2403.14187v2). It says: “the solution ρ(t) converges to the vertical rearrangement of the initial data”

**Sources:**

- [Jaemin Park, Stability analysis of the incompressible porous media equation and the Stokes transport system via energy structure.](https://arxiv.org/abs/2403.14187v2)

### Relative energy controls the incompressible limit

**Remember:** Compare two flows by charging for their difference, not their separate energies.

*Makes the theorem clean to state or prove.* MSC 76T06 (Liquid-liquid two component flows), 76D05. arXiv math.AP, physics.flu-dyn. Level 4: research.

**Definition.** The relative energy compares a solution with composition φ, density ρ and velocity u to a reference with composition ψ and velocity v, charging only for differences: ∫ ρ\|u − v\|²/2 + \|Λˢ(φ − ψ)\|²/2 + Φ(φ) − Φ(ψ) − Φ′(ψ)(φ − ψ). Here Λˢ multiplies each Fourier mode by its frequency magnitude to the power s, and Φ is the convex composition energy density.

**Problem.** On a periodic cube, compare the paper’s weak solutions with a smooth incompressible solution on a fixed interval of regularity. If initial compositions have equal means and converge in the norm of mean-square derivatives through order s, initial energies are uniformly bounded and initial velocities converge in mean square, then relative energy tends uniformly to zero as the density contrast vanishes.

**How the definition helps.** One quantity measures velocity and composition errors together, and convexity makes the tangent gap nonnegative (our own). The work is a stability bound: relative energy stays below a constant times the initial relative energy plus the density contrast.

**Paper or page:** [Weak solutions and incompressible limit of a quasi-incompressible Navier--Stokes/Cahn--Hilliard model for viscous two-phase flows](https://arxiv.org/abs/2508.08090v1). It says: “E(φα, uα \| φ, u)(τ) ≔ ∫𝕋³ ½ρα\|u − uα\|²(τ) dx + ∫𝕋³ ½\|Λˢφ − Λˢφα\|²(τ) dx + ∫𝕋³ (Φ(φα) − Φ′(φ)(φα − φ) − Φ(φ))(τ) dx”

**Sources:** none listed. No primary source with a working link was found.
