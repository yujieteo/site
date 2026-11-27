### The principal quadratic form keeps equation type fixed under coordinate changes

**Remember:** Count the lines through the origin where the principal form vanishes.

*Makes the theorem clean to state or prove.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** At each point, the principal form of a real linear second-order equation is aξ² + bξη + cη² for coefficients a,b,c of uₓₓ,uₓᵧ,uᵧᵧ. Count the lines through zero where this nonzero quadratic form vanishes identically. Zero, one and two such lines give elliptic, parabolic and hyperbolic type respectively.

**Problem.** A smooth coordinate change with smooth inverse preserves the type of a linear second-order equation at every point with nonzero principal form.

**How the definition helps.** An invertible linear substitution pairs the old zero directions with the new ones (our own). The chain rule gives precisely this substitution in the second-order terms (our own).

**Wikipedia:** [Partial differential equation](https://en.wikipedia.org/wiki/Partial_differential_equation). It says: “with the terms of the highest degree (a homogeneous polynomial, here a quadratic form) being most significant for the classification.”

**Sources:** none listed. No primary source with a working link was found.

### A nonpositive potential keeps the elliptic maximum principle valid

**Remember:** A nonpositive potential cannot help sustain a positive interior peak.

*Rules out counterexamples.* MSC 35B50 (Maximum principles in context of PDEs), 35J15. arXiv math.AP. Level 2: later undergraduate.

**Definition.** In the operator Δu + qu, the potential q is the coefficient that multiplies u without differentiating it. Restrict to bounded potentials q that are nonpositive at every point.

**Problem.** On a bounded domain, a twice differentiable function continuous to the boundary with Δu + qu ≥ 0 and nonpositive boundary values stays nonpositive.

**How the definition helps.** At a positive interior maximum, both the Laplacian and the potential term are nonpositive (our own). A small exponential perturbation makes the operator inequality strict without moving a positive maximum to the boundary (our own). With q = 1 instead, sin(x) on \[0, π\] is positive inside and zero at both endpoints (our own).

**Wikipedia:** [Maximum principle](https://en.wikipedia.org/wiki/Maximum_principle). It says: “the ordinary differential equation y″ + 2y = 0 has sinusoidal solutions, which certainly have interior maxima”

**Sources:** none listed. No primary source with a working link was found.

### Weak solutions let kinked traveling waves satisfy the transport equation

**Remember:** Move derivatives onto the test function and the traveling wave can have kinks.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35F10. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A test function φ is smooth and has compact support in the time and space variables. A locally integrable u weakly solves ∂ₜu + ∂ₓu = 0 if the integral of u(∂ₜφ + ∂ₓφ) is zero for every φ. A classical solution instead needs derivatives of u itself.

**Problem.** For every locally integrable g on ℝ, the traveling wave u(t, x) = g(x − t) is a weak solution. In particular, \|x − t\| is a solution even though it has a kink at x = t.

**How the definition helps.** The weak definition differentiates only the test function, so the profile needs only local integrability. In our own proof, set y = x − t and hold y fixed. The integrand becomes g(y) times the time derivative of φ(t,y + t). Integrating in time gives zero because φ has compact support.

**Wikipedia:** [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The key to the concept of weak solution is that there exist functions u that satisfy equation (2) for any φ, but such u may not be differentiable and so cannot satisfy equation (1).”

**Sources:** none listed. No primary source with a working link was found.

### Transverse data determine transport locally

**Remember:** Each nearby path must cross the data curve once.

*Rules out counterexamples.* MSC 35F05 (Linear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call an initial curve noncharacteristic if the velocity is nowhere tangent to it. Place the initial values on such a curve instead of an arbitrary curve.

**Problem.** For a smooth planar velocity b, prescribe smooth data for b · ∇u = 0 on a smooth noncharacteristic curve. A unique smooth solution exists locally near each interior point of the curve.

**How the definition helps.** The velocity crosses the curve, so each nearby path meets the curve once locally. In our own proof, the inverse function theorem gives coordinates from the starting point and travel time. Copy the given value along each path. For ∂u/∂y = 0 with zero data on x = 0, both zero and u(x,y) = x work in our own example.

**Wikipedia:** [Method of characteristics](https://en.wikipedia.org/wiki/Method_of_characteristics). It says: “Once the ODE is found, it can be solved along the characteristic curves and transformed into a solution for the original PDE.”

**Sources:** none listed. No primary source with a working link was found.

### A positive integrating factor preserves the sign of transported data

**Remember:** An exponential factor changes size but never changes sign.

*True by definition.* MSC 35F10 (Initial value problems for linear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For linear transport with reaction coefficient a, use a factor along each characteristic, the path that follows the given velocity. Define the factor at time t as the exponential of the integral of a along that path from time zero.

**Problem.** Consider a smooth solution of ∂ₜu + b·∇u + au = f with nonnegative initial data and forcing f. It stays nonnegative wherever a path leads back to the initial surface from a later time.

**How the definition helps.** The positive factor turns the forced equation along each path into an integral of a nonnegative function (our own). The work moves to solving the characteristic path equation and applying the chain rule there (our own).

**Wikipedia:** [Integrating factor](https://en.wikipedia.org/wiki/Integrating_factor). It says: “to bring the left-hand side under a common derivative”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiation turns nonlinear evolution into heat

**Remember:** Evolve the exponential by heat, then take the logarithm.

*True by definition.* MSC 35F21 (Hamilton-Jacobi equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For diffusivity ν &gt; 0 and initial potential f, let v be the Gaussian heat evolution of exp(−f/(2ν)) with diffusivity ν. Define the evolved potential by u = −2ν log v.

**Problem.** For smooth bounded initial potentials on the line, the evolved potential u solves ∂u/∂t + (∂u/∂x)²/2 = ν ∂²u/∂x².

**How the definition helps.** The exponential change of variable cancels the squared derivative term, leaving the linear heat equation. In our own calculation, differentiate u = −2ν log v and substitute the heat equation for v. The heat kernel averages positive initial values, so the logarithm exists. The work lies in finding the substitution and solving the linear heat equation.

**Wikipedia:** [Cole–Hopf transformation](https://en.wikipedia.org/wiki/Cole%E2%80%93Hopf_transformation). It says: “it provides an explicit formula for fairly general solutions of the PDE in terms of the initial datum and the heat kernel.”

**Sources:**

- [Julian D. Cole, On a quasi-linear parabolic equation occurring in aerodynamics (1951).](https://doi.org/10.1090/qam/42889)

### Nondecreasing Burgers data keep characteristics from crossing

**Remember:** If speeds increase from left to right, paths never overtake.

*Rules out counterexamples.* MSC 35F25 (Initial value problems for nonlinear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For the inviscid Burgers equation ∂ₜu + u∂ₓu = 0, the characteristic from a starts with the constant speed f(a). Restrict the initial profile f to bounded, nondecreasing, continuously differentiable functions.

**Problem.** For this class of initial data on the line, the inviscid Burgers equation has a continuously differentiable solution for every forward time.

**How the definition helps.** The characteristic map a ↦ a + tf(a) has derivative at least one (our own). It is onto and has a differentiable inverse, which recovers u from its initial values (our own). The work moves to the characteristic equations, which also show how decreasing data can fail (our own). For f(a) = −sin(a), the slope at x = 0 blows up at time one (our own).

**Wikipedia:** [Burgers' equation](https://en.wikipedia.org/wiki/Burgers%27_equation). It says: “This is an implicit relation that determines the solution of the inviscid Burgers' equation provided characteristics don't intersect.”

**Sources:** none listed. No primary source with a working link was found.

### Decay at infinity makes exterior harmonic boundary values unique

**Remember:** Treat infinity as another boundary with value zero.

*Rules out counterexamples.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation), 35J25. arXiv math.AP. Level 2: later undergraduate.

**Definition.** An exterior Dirichlet solution is harmonic outside a bounded obstacle and takes the prescribed values continuously on its boundary. Require also that it tend to zero as distance from the origin tends to infinity.

**Problem.** Outside a bounded obstacle in three dimensions, at most one harmonic function has the prescribed boundary values and tends to zero at infinity.

**How the definition helps.** Decay bounds the difference of two solutions on every sufficiently large outer sphere (our own). The maximum principle gives the same bound throughout the enclosed exterior region (our own). Without decay, both zero and 1 − 1/r solve the zero boundary problem outside the unit ball (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “the solution approaches 0 as r approaches infinity”

**Sources:** none listed. No primary source with a working link was found.

### Mean values make harmonic functions smooth

**Remember:** A smooth radial average leaves a harmonic function unchanged.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average on every sphere whose closed ball lies in the domain. The usual differential definition sets the sum of the pure second derivatives to zero.

**Problem.** A continuous function with the harmonic mean value property has derivatives of every order in the interior.

**How the definition helps.** A smooth radial weighted average is a mixture of sphere averages, so it returns the function itself (our own). Differentiate the smooth weight rather than the function (our own). The work moves to proving the mean value property for classical solutions (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “In other words, we can take the weighted average of u about a point and recover u(x).”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### The Poisson kernel makes harmonic functions locally equal power series

**Remember:** Expand the boundary weight to get a power series inside.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** In the unit ball, the Poisson kernel at x assigns a weight to each boundary point ζ. Divide the numerator 1 − \|x\|² by the distance \|x − ζ\| raised to the spatial dimension. Use surface area normalized to one.

**Problem.** Every harmonic function on a Euclidean domain is real analytic, meaning it equals a convergent power series near each interior point.

**How the definition helps.** The Poisson formula puts all dependence on the interior point into the boundary weight (our own). On a sufficiently small ball about the center, the binomial series for that weight converges absolutely and uniformly over the sphere (our own). Integrating its power series term by term gives the local expansion (our own).

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “P\[u\](x) = ∫ₛ u(ζ)P(x, ζ) dσ(ζ).”

**Sources:**

- [Sheldon Axler, Paul Bourdon and Wade Ramey, Harmonic Function Theory, Theorem 1.28](https://www.axler.net/HFT.pdf)

### The squared gradient turns the Dirichlet problem into minimization

**Remember:** A harmonic function is perpendicular in energy to zero-boundary changes.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation), 35J25. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Define Dirichlet energy as half the integral of the squared spatial gradient. Compare smooth functions with the same specified boundary values.

**Problem.** On a smooth bounded domain, a smooth function with the specified boundary values minimizes Dirichlet energy exactly when it is harmonic.

**How the definition helps.** For a harmonic function, expanding the squared gradient of a competitor leaves only a nonnegative energy difference (our own). Integration by parts cancels the cross term because the change vanishes on the boundary (our own). Conversely, varying a minimizer in each smooth direction of compact support gives zero first derivative, forcing its Laplacian to vanish (our own).

**Wikipedia:** [Dirichlet's principle](https://en.wikipedia.org/wiki/Dirichlet%27s_principle). It says: “then u can be obtained as the minimizer of the Dirichlet energy”

**Sources:** none listed. No primary source with a working link was found.

### Unit flux gives the planar Laplacian a point source

**Remember:** Unit outward flux means one unit of point source.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A planar point-source potential is harmonic away from the origin, where its Laplacian is zero. Normalize a radial potential by requiring its outward derivative to integrate to one around each centered circle.

**Problem.** The normalized potential ln(r)/(2π), at distance r from the origin, satisfies ∫(ln(r)/(2π))Δφ = φ(0) for every smooth test function φ of compact support.

**How the definition helps.** Unit flux turns the inner boundary integral into a circle average tending to φ(0) (our own). Green’s identity moves the Laplacian from φ to the potential outside that circle (our own). The remaining boundary term tends to zero because r ln(r) tends to zero (our own).

**Paper or page:** [Fundamental Solution to 2D Laplace's Equation](https://proofwiki.org/wiki/Fundamental_Solution_to_2D_Laplace's_Equation). It says: “Then in the distributional sense: Δ(ln r/(2π)) = δ₍₀,₀₎”

**Sources:** none listed. No primary source with a working link was found.

### Zero flux makes a harmonic sphere average constant

**Remember:** No outward flux means the sphere average cannot change with radius.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call a twice continuously differentiable function harmonic if its net outward flux through every closed ball inside the domain is zero. Flux here means the surface integral of the outward derivative. The usual definition sets the sum of the pure second derivatives to zero.

**Problem.** Each harmonic function equals its average on every sphere centered at the point, with the closed ball inside the domain.

**How the definition helps.** The derivative of the sphere average with respect to radius is the flux divided by the sphere area (our own). Zero flux makes the average independent of radius, and shrinking the sphere gives the center value (our own). The divergence theorem equates this flux definition with the differential definition (our own).

**Wikipedia:** [Laplace operator](https://en.wikipedia.org/wiki/Laplace_operator). It says: “the net flux of u through the boundary ∂V (also called S) of any smooth region V is zero”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.2](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### A weighted image through the sphere gives the ball Green function

**Remember:** Sphere inversion puts the image outside and fixes its weight.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a unit source at a nonzero point y inside the three-dimensional unit ball, set y\* = y/\|y\|². For −Δ, define the image potential by subtracting 1/(4π\|y\|\|x − y\*\|) from 1/(4π\|x − y\|).

**Problem.** The source and its weighted image together give the ball’s Dirichlet Green function. Their potential vanishes on the sphere and has exactly one unit source inside.

**How the definition helps.** On the unit sphere the distance to the image is the distance to y divided by \|y\|, so the weighted potentials cancel (our own). The work moves to the distance identity and the fact that the free-space potential varies as the reciprocal of distance (our own).

**Wikipedia:** [Kelvin transform](https://en.wikipedia.org/wiki/Kelvin_transform). It says: “the inversion of a point x in ℝⁿ is defined to be x\* = (R²/\|x\|²)x.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.4](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### An opposite mirror charge gives the half-space Green function

**Remember:** Equal distances and opposite signs cancel on the plane.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a point source above a plane, its image is an opposite point source at the mirror point below the plane. Their combined potential is the sum of their free-space potentials.

**Problem.** In three dimensions, the combined potential gives the decaying Dirichlet Green function for the upper half-space. It vanishes on the plane and has just the original unit source inside.

**How the definition helps.** The radial point-source values cancel on the plane, and the image introduces no source in the half-space (our own). The work moves to constructing the radial fundamental solution and proving uniqueness with decay at infinity (our own).

**Wikipedia:** [Method of images](https://en.wikipedia.org/wiki/Method_of_images). It says: “boundary conditions are satisfied by combining a solution not restricted by the boundary conditions with its possibly weighted mirror image.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.4](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Constant Green function flux leaves one unknown boundary average

**Remember:** A unit source needs unit outward flux.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** On a smooth bounded connected domain, choose a Green function with ΔG equal to a unit point source. Give G a constant outward derivative equal to one divided by the boundary area, rather than zero.

**Problem.** A smooth harmonic function’s value at the source equals its boundary average minus a boundary integral. The integrand is G times the function’s outward derivative.

**How the definition helps.** Constant flux turns the unknown boundary values into one average, and Green’s second identity gives the rest. The work moves to solving the compatible Neumann problem for the smooth correction to the point source (our own). Zero flux would contradict the divergence theorem because the point source has integral one.

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “A convenient choice is ∂G(y,η)/∂n = 1/𝒜”

**Sources:** none listed. No primary source with a working link was found.

### Zero boundary values leave only one Green boundary term

**Remember:** Set Green’s function to zero where the boundary data are known.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** At each interior point x, define the Dirichlet Green function G by subtracting a harmonic correction from the point-source solution. The correction matches the point-source solution on the boundary, so G vanishes there.

**Problem.** On a smooth bounded domain, suppose u is harmonic and smooth up to the boundary. Its value at x equals the boundary integral of u times the outward derivative of G, with ΔG a positive unit source.

**How the definition helps.** The zero boundary value of G kills the term that uses the unknown normal derivative of the harmonic function. The work moves to solving the correction’s boundary problem and applying Green’s second identity around the point source (our own).

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “vanishes on the boundary of U”

**Sources:** none listed. No primary source with a working link was found.

### Mean-zero normalization makes Neumann solutions unique

**Remember:** Normal derivatives miss constants, so fix the mean.

*Rules out counterexamples.* MSC 35J25 (Boundary value problems for second-order elliptic equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For prescribed boundary data g on a smooth bounded domain Ω, a mean-zero Neumann solution satisfies Δu = 0 in Ω. Its outward normal derivative equals g on the boundary, and ∫Ω u = 0.

**Problem.** On a smooth bounded connected domain, prescribe a smooth outward normal derivative whose integral over the boundary is zero. Exactly one function with zero Laplacian and mean zero has that derivative.

**How the definition helps.** The mean distinguishes constant shifts, including the solutions zero and one for zero boundary data (our own). Integration by parts gives zero gradient for the difference of two solutions (our own). Connectedness makes the difference constant, and its mean makes it zero. The Neumann existence theorem supplies a solution, from which we subtract its mean.

**Wikipedia:** [Laplace's equation](https://en.wikipedia.org/wiki/Laplace%27s_equation). It says: “For the Neumann problem, uniqueness holds only up to an additive constant.”

**Sources:** none listed. No primary source with a working link was found.

### A positive Gaussian spreads nonzero heat everywhere at once

**Remember:** The Gaussian gives positive weight even to distant heat.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For each t &gt; 0, the full-space heat kernel with diffusivity one is the centered Gaussian density with covariance matrix 2tI. Gaussian heat evolution averages the initial temperature against this density centered at the observation point.

**Problem.** For bounded continuous initial temperatures that are nonnegative and positive somewhere, Gaussian heat evolution is strictly positive everywhere at every positive time.

**How the definition helps.** Every point receives a strictly positive weighted integral from the region where the initial temperature is positive (our own). The work goes into proving the Gaussian integral formula for the heat solution (our own).

**Wikipedia:** [Heat kernel](https://en.wikipedia.org/wiki/Heat_kernel). It says: “which has the form of a time-varying Gaussian function”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### A unit mass heat kernel conserves total heat

**Remember:** Each point source gives back all its heat when integrated.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Use the full-space heat kernel with unit mass, so each point source contributes a Gaussian whose spatial integral is one. For general initial heat, add these Gaussians weighted by the initial temperature at each source point.

**Problem.** For bounded, continuous, integrable initial data on all of Euclidean space, the Gaussian heat solution has the same spatial integral at every positive time.

**How the definition helps.** Each translated Gaussian integrates to one, so a second integration returns the original total heat (our own). Absolute integrability lets us interchange the two integrals (our own). The Gaussian solution formula replaces a boundary flux estimate at infinity (our own).

**nLab:** [heat equation](https://ncatlab.org/nlab/show/heat+equation). It says: “Its fundamental solution is called the heat kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Concentrating Gaussian weights give back the initial temperature

**Remember:** A unit heat weight contracts onto its starting point.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** View the full-space heat kernel as an approximate identity, a family of nonnegative weights with total integral one. The integral outside any fixed neighborhood of the origin tends to zero as time tends to zero.

**Problem.** Heat evolution by Gaussian averaging converges to bounded continuous initial data, uniformly on each compact set, as time tends to zero.

**How the definition helps.** The concentrating weights give almost all their mass to points with temperatures close to the starting value (our own). Uniform continuity near each compact set controls nearby temperatures, and boundedness controls the Gaussian tail (our own). This argument replaces taking a time limit directly in the differential equation (our own).

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The fundamental solution of a heat equation is called the heat kernel.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Matching corner data let the half-line heat solution stay continuous

**Remember:** At a corner, the two prescribed temperatures must agree.

*Rules out counterexamples.* MSC 35K05 (Heat equation), 35K20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call initial and boundary values compatible at a corner when both give the same value there. For zero endpoint temperature on the half-line, compatibility is f(0) = 0.

**Problem.** On the closed half-line, take bounded continuous initial data and zero endpoint temperature. A continuous heat solution smooth in the interior exists exactly when the corner data agree.

**How the definition helps.** Agreement makes the sign-reversing reflection of the initial function continuous across zero (our own). Full-line Gaussian averaging then recovers the initial value, and reflection forces the endpoint value for positive time (our own). Initial temperature one and endpoint temperature zero give incompatible limits at the corner (our own).

**Wikipedia:** [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “and suitable initial data f(x) (e.g. for which f(0) = f(1) = 0)”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative Robin coefficients keep the heat norm from growing

**Remember:** A nonnegative Robin coefficient can only drain squared heat.

*Rules out counterexamples.* MSC 35K05 (Heat equation), 35K20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A homogeneous Robin condition requires the outward normal derivative plus α times the temperature to be zero. For a dissipative Robin condition, take α nonnegative. Measure size by half the integral of the squared temperature.

**Problem.** For classical heat flow on a smooth bounded region with a dissipative Robin condition, the integral of the squared temperature never increases.

**How the definition helps.** The sign of α makes the boundary contribution to the energy change nonpositive (our own). With diffusivity one, integration by parts gives the negative integral of \|∇u\|² minus the boundary integral of αu² (our own). On \[−1, 1\], α = −tanh(1) admits the growing solution exp(t) cosh(x) (our own).

**Wikipedia:** [Robin boundary condition](https://en.wikipedia.org/wiki/Robin_boundary_condition). It says: “a weighted combination of Dirichlet boundary conditions and Neumann boundary conditions”

**Sources:** none listed. No primary source with a working link was found.

### Projecting onto heat eigenfunctions separates even the forcing

**Remember:** Each sine receives only its own part of the forcing.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For an interval with zero endpoint values, use the sine eigenfunctions of minus the second spatial derivative. Each has zero endpoint values and returns a fixed multiple of itself under that operator. Define a mode coefficient by taking the integral against its normalized sine.

**Problem.** For a smooth solution of uₜ = κuₓₓ + f with zero endpoint values, each sine coefficient a satisfies a′ = −κλa + b. Here κ is the diffusivity, λ is the sine’s eigenvalue, and b is the corresponding coefficient of f.

**How the definition helps.** Testing against a sine replaces the spatial derivative operator by multiplication by −λ (our own). Two integrations by parts leave no boundary terms because the sine and the solution vanish at both endpoints (our own).

**Wikipedia:** [Separation of variables](https://en.wikipedia.org/wiki/Separation_of_variables). It says: “which are a sequence of linear differential equations that can be readily solved with, for instance, Laplace transform, or integrating factor.”

**Sources:** none listed. No primary source with a working link was found.

### Reflection builds both half-line heat boundary conditions

**Remember:** Odd reflection fixes the value at zero, and even reflection fixes the slope.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For bounded continuous temperature data f on the closed half-line, even reflection assigns f(\|x\|) on the line. Odd reflection uses f(x) for x &gt; 0, −f(−x) for x &lt; 0, and zero at the origin.

**Problem.** For positive time, full-line heat evolution of the odd reflection has value zero at the endpoint. Evolution of the even reflection has outward derivative zero there.

**How the definition helps.** The even Gaussian heat weight preserves either reflection symmetry (our own). Odd functions vanish at the mirror, and differentiable even functions have zero derivative there (our own). The work moves to the full-line heat formula and its smoothness for positive time (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “it satisfies the homogeneous Dirichlet boundary conditions u(0, t) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### The Gaussian integral smooths even bounded discontinuous heat data

**Remember:** Differentiate the Gaussian, not the starting temperature.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For t &gt; 0, full-space heat evolution averages the initial temperature against the Gaussian density centered at the observation point with covariance matrix 2tI.

**Problem.** The Gaussian heat evolution of any bounded measurable initial data has derivatives of every order in space and time at positive times.

**How the definition helps.** Only the Gaussian changes when the observation point or time changes (our own). The work moves to bounding each Gaussian derivative by an integrable weight near any fixed positive time (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “the jump is immediately smoothed out”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### The parabolic boundary leaves the final temperature free

**Remember:** For heat flow, check the initial slice and the sides.

*Makes the theorem clean to state or prove.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a closed space-time cylinder, the parabolic boundary consists of the initial slice and the spatial boundary at every time, including the final time.

**Problem.** A classical heat solution continuous on a closed bounded cylinder attains its maximum somewhere on the parabolic boundary. Its initial and side values therefore determine at most one solution.

**How the definition helps.** At a maximum away from this boundary the backward time derivative is nonnegative, even at the final time (our own). Subtract a small positive multiple of time to make the heat inequality strict and rule out such a maximum (our own). The work rests on the derivative test and the existence of a maximum on the closed bounded region (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “the maximum value that previously occurred in R”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Odd periodic extension gives a common period for fixed strings

**Remember:** Two fixed-end reflections give one full wave period.

*True by definition.* MSC 35L05 (Wave equation), 35L20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Extend the initial displacement and velocity by odd reflection about each endpoint. For a string of length L this produces functions of spatial period 2L, each with zero average over one period.

**Problem.** A classical wave on a string of length L with both ends fixed has time period 2L/c. Here c is the wave speed.

**How the definition helps.** After time 2L/c the translated displacement samples repeat, and the extra periods in the velocity integral have zero average (our own). The work moves to d’Alembert’s formula and verifying that the two odd reflections enforce the fixed ends (our own).

**Paper or page:** [D'Alembert's Formula](https://proofwiki.org/wiki/D'Alembert's_Formula). It says: “The above solution formula is called d'Alembert's formula.”

**Sources:**

- [Richard L. Herman, Introduction to Partial Differential Equations, §2.7](https://math.libretexts.org/Bookshelves/Differential_Equations/Introduction_to_Partial_Differential_Equations_%28Herman%29/02%3A_Second_Order_Partial_Differential_Equations/2.07%3A_dAlemberts_Solution_of_the_Wave_Equation)

### Shrinking energy balls prove that waves travel at finite speed

**Remember:** Shrink the ball at wave speed and its energy cannot grow.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a wave of speed c, its energy density is half the sum of uₜ² and c²\|∇u\|². Its local energy at time t is the integral over the ball of radius c(T−t) centered at the observation point.

**Problem.** Suppose two classical waves solve the same free wave equation throughout the shrinking balls until time T. Matching initial displacement and velocity on the starting ball gives equal displacement at its center at time T.

**How the definition helps.** The shrinking boundary removes at least as much energy as wave flux can bring in (our own). The work is the moving-boundary derivative and the elementary inequality 2ab ≤ a² + b² (our own). Zero initial difference energy leaves the difference frozen at its zero initial value throughout the shrinking ball (our own).

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The characteristics of the PDE are x ± ct = const”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Spherical averaging leaves no wave tail in three dimensions

**Remember:** In three dimensions, an impulse passes on a sphere without a tail.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The spherical mean at x and radius r is the integral over the sphere centered at x divided by its surface area.

**Problem.** In three dimensions, take a unit-speed wave with zero initial displacement and smooth initial velocity. At time t its value depends only on the initial velocity on the sphere of radius t around the observation point.

**How the definition helps.** A spherical mean uses only the values on its sphere (our own). Kirchhoff’s formula identifies displacement at positive time t with t times the spherical mean of the initial velocity at radius t (our own).

**Wikipedia:** [Wave equation](https://en.wikipedia.org/wiki/Wave_equation). It says: “It does not depend upon data on the interior of this sphere.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Starting each wave response with velocity handles a time-dependent force

**Remember:** Start a fresh velocity impulse for each moment of forcing.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Define the response to an impulse at time s as a free wave starting then with zero displacement. Use the force at time s as its initial velocity and integrate the responses over earlier times.

**Problem.** For smooth forcing on the line and zero initial displacement and velocity, the time integral of these responses solves the forced wave equation.

**How the definition helps.** The first time derivative has no endpoint term because each fresh wave has zero displacement (our own). The second time derivative brings down the initial velocity as the force (our own). The work moves to the free wave formula and the conditions for differentiating under the time integral (our own).

**Wikipedia:** [Duhamel's principle](https://en.wikipedia.org/wiki/Duhamel%27s_principle). It says: “That contribution comes from changing the velocity of the string by f(x, T) dT.”

**Sources:** none listed. No primary source with a working link was found.

### Wave coordinates split right and left

**Remember:** Zero mixed derivative leaves one function of each coordinate.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Fix a constant wave speed c &gt; 0. Use x + ct and x − ct as coordinates. Each stays constant along one family of lines traveled by waves.

**Problem.** Every twice continuously differentiable solution of ∂²u/∂t² = c² ∂²u/∂x² on the whole line has the form F(x + ct) + G(x − ct). This is a sum of two oppositely traveling profiles.

**How the definition helps.** In the moving coordinates, the wave equation says that one mixed derivative vanishes. Integrate once in each coordinate to obtain one profile for each direction. In our own explanation, the work lies in the chain rule that converts the original second derivatives into this mixed derivative.

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The general solution of this PDE is u(μ,η) = F(μ) + G(η)”

**Sources:** none listed. No primary source with a working link was found.

### Wave energy gives uniqueness from fixed boundary and initial data

**Remember:** Zero wave energy keeps the difference frozen at zero.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Define wave energy as half the integral of the squared time derivative plus c² times the squared spatial gradient. Here c is the wave speed and the gradient collects the spatial derivatives.

**Problem.** On a smooth bounded region, classical waves with the same fixed boundary values, initial displacement and initial velocity are equal.

**How the definition helps.** The chosen weights cancel the interior terms when we differentiate the energy of the difference between two waves (our own). Integration by parts leaves a boundary term that vanishes because the two boundary values agree for all times (our own). The energy stays zero, so the waves have equal time derivatives and keep their initial displacement difference of zero (our own).

**Wikipedia:** [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “The energy method is useful for establishing both uniqueness”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Weak wave solutions accept even discontinuous initial displacement

**Remember:** Test the equation without differentiating the displacement.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A weak wave solution of speed c &gt; 0 is locally integrable on ℝ × (0,∞). It satisfies ∫u(φₜₜ − c²φₓₓ) = 0 for every smooth test function φ compactly supported in that region.

**Problem.** For initial displacement f integrable on bounded intervals of the line, u(x,t) = (f(x+ct) + f(x−ct))/2 is a weak solution. Against each smooth spatial test of bounded support, its initial displacement is f and its initial velocity is zero.

**How the definition helps.** The weak identity lets smooth approximations pass to the limit under the integral (our own). The work moves to d’Alembert’s formula for smooth data and convergence of the approximations on bounded sets (our own).

**Paper or page:** [Locally Integrable (f(x+ct) + f(x-ct))/2 is Weak Solution to Wave Equation](https://proofwiki.org/wiki/Locally_Integrable_(f(x+ct)_+_f(x-ct))/2_is_Weak_Solution_to_Wave_Equation). It says: “Then it has a weak solution of the form: u(x, t) ≔ (f(x + ct) + f(x − ct))/2”

**Sources:** none listed. No primary source with a working link was found.

### Fundamental solutions solve forced equations by convolution

**Remember:** Solve once for a point source, then convolve with the data.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** Let P be a nonzero linear differential operator with constant coefficients. A fundamental solution is a distribution E with PE = δ, where δ evaluates a test function at zero. The classical Newtonian potential for the Laplacian instead starts with an explicit integral kernel.

**Problem.** If f is a distribution with compact support, the convolution u = E ∗ f satisfies Pu = f as distributions.

**How the definition helps.** The defining equation PE = δ gives the convolution identity P(E ∗ f) = (PE) ∗ f = f, in our own proof. Derivatives pass to the first factor, and δ is the identity for convolution. The work moves into proving these rules and into the Malgrange–Ehrenpreis theorem, which supplies E for every such P. Our own comparison is with proving Poisson’s equation by differentiating the Newtonian potential directly near its singularity.

**Wikipedia:** [Fundamental solution](https://en.wikipedia.org/wiki/Fundamental_solution). It says: “Once the fundamental solution is found, it is straightforward to find a solution of the original equation, through convolution of the fundamental solution and the desired right hand side.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting wave responses removes sources

**Remember:** Subtract two responses to the same source and the source disappears.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs), 53C50. arXiv math-ph, gr-qc. Level 3: graduate.

**Definition.** For a linear wave operator P, a Green operator G satisfies PGf = f and GPf = f for every smooth compactly supported f. The retarded operator supports Gf in the causal future of the source, and the advanced operator supports it in the causal past. Their difference, retarded minus advanced, is the causal propagator.

**Problem.** For a wave operator with both Green operators, the causal propagator sends every smooth compactly supported source to a solution with zero source.

**How the definition helps.** Taking the difference cancels the common source by linearity. Our own comparison starts with the equation Pu = 0 and asks how to construct solutions. The difference formula gives one immediately for each source. The work lies in constructing both Green operators with the stated support.

**nLab:** [causal propagator](https://ncatlab.org/nlab/show/causal+propagator). It says: “If the advanced/retarded Green functions Gₚ± exists, then the difference Gₚ ≔ Gₚ,₊ − Gₚ,₋ is called the causal Green function.”

**Sources:** none listed. No primary source with a working link was found.

### Normal form guarantees analytic existence

**Remember:** Solve for the top time derivative before counting power series coefficients.

*Rules out counterexamples.* MSC 35A10 (Cauchy-Kovalevskaya theorems). arXiv math.AP. Level 3: graduate.

**Definition.** Put an analytic equation of order k in normal form by solving for its pure time derivative of order k. Allow spatial and mixed derivatives of total order at most k, but only lower time orders on the right.

**Problem.** An analytic equation in this normal form has a unique local analytic solution for analytic initial time derivatives through order k minus one.

**How the definition helps.** Normal form determines each time coefficient from earlier ones, and the Cauchy–Kovalevskaya theorem proves convergence. The heat equation has lower time order than spatial order (our own). For initial profile 1/(1 − x), its time coefficient of degree j at zero is (2j)!/j!. The resulting series has zero convergence radius (our own).

**Wikipedia:** [Cauchy–Kovalevskaya theorem](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Kovalevskaya_theorem). It says: “However this formal power series does not converge for any non-zero values of t”

**Sources:** none listed. No primary source with a working link was found.

### Nehari minimizers solve the equation

**Remember:** Test a Nehari multiplier in the scaling direction.

*True by definition.* MSC 35A15 (Variational methods applied to PDEs), 35B38. arXiv math.AP. Level 3: graduate.

**Definition.** For a twice continuously differentiable energy J on a real Banach space, the Nehari set consists of nonzero u satisfying J′(u)\[u\] = 0. This requires stationarity only along the line through u.

**Problem.** Suppose u minimizes J locally on the Nehari set and the second derivative of t ↦ J(tu) at t = 1 is nonzero. Then J′(u) vanishes in every direction.

**How the definition helps.** The scaling direction makes the energy derivative zero while leaving the constraint derivative nonzero. In our own proof, the latter fact permits the Lagrange multiplier rule for one constraint. Evaluating that rule in the scaling direction forces the multiplier to vanish. The cited paper proves criticality for a particular minimizing problem.

**Wikipedia:** [Nehari manifold](https://en.wikipedia.org/wiki/Nehari_manifold). It says: “Solutions are precisely the critical points for the energy functional”

**Paper or page:** [Nehari-type ground state solutions for asymptotically periodic bi-harmonic Kirchhoff-type problems in ℝᴺ](https://arxiv.org/abs/2501.11693v3). It says: “then u₀ is a critical point of J.”

**Sources:** none listed. No primary source with a working link was found.

### Separating tests ensure weak solvability

**Remember:** One condition closes the range, and the other makes it dense.

*Rules out counterexamples.* MSC 35A15 (Variational methods applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Let B be a continuous bilinear form on real Hilbert spaces of trial vectors and tests. Some c &gt; 0 must satisfy sup{ \|B(u,v)\| : ‖v‖ = 1 } ≥ c‖u‖ for every trial vector u. Weak coercivity also requires that every nonzero test v satisfy B(u,v) ≠ 0 for some trial vector u.

**Problem.** For every continuous linear functional F on the test space, there is exactly one trial vector u satisfying B(u,v) = F(v) for every test v.

**How the definition helps.** The two conditions make the range of the pairing operator both closed and dense. The uniform lower bound gives injectivity and closed range, and the second condition gives density by Hilbert space duality (our own). Without the second condition it fails: pair the right shift of a square-summable sequence with a test sequence by the inner product (our own). The shift preserves norms, but its range misses the first coordinate vector.

**Wikipedia:** [Babuška–Lax–Milgram theorem](https://en.wikipedia.org/wiki/Babu%C5%A1ka%E2%80%93Lax%E2%80%93Milgram_theorem). It says: “Suppose also that B is weakly coercive”

**Sources:**

- [Ivo Babuška, Error-bounds for finite element method](https://doi.org/10.1007/BF02165003)

### A parametrix transfers smoothness to solutions

**Remember:** Apply the approximate inverse and the error is already smooth.

*True by definition.* MSC 35A17 (Parametrices in context of PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** A distribution is a generalized function that acts on smooth compactly supported tests. A local left parametrix Q for P preserves smooth functions, and QP differs from the identity by an operator that makes distributions smooth.

**Problem.** Let P be a linear differential operator with smooth coefficients whose highest-order polynomial in the derivative variables never vanishes in a nonzero real direction. If Pu is smooth in an open set, the distribution u is smooth there.

**How the definition helps.** The approximate inverse expresses u as the sum of a smooth response and a smooth error. In our own argument, work locally and write QP as the identity plus a smoothing operator R. Then u = Q(Pu) − Ru, and both terms are smooth. Constructing such a local inverse from the highest-order polynomial carries the work.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “and a is elliptic, then Tₐ has a parametrix.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis (2021).](https://arxiv.org/abs/2107.12839v1)

### Wave front sets say when two distributions can be multiplied

**Remember:** The wave front set records where a distribution is singular and in which directions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** A nonzero covector k at x is regular if some smooth compactly supported cutoff equal to one near x passes the following test. The Fourier transform of the localized distribution decays faster than every inverse power of frequency throughout some open cone containing k. The wave front set consists of all remaining pairs (x,k).

**Problem.** Hörmander’s criterion defines the product of two distributions whenever no point has opposite covectors in their respective wave front sets.

**How the definition helps.** Opposite covectors at the same point are precisely the pairs that sum to zero along the diagonal. Hörmander’s pullback theorem therefore permits restricting the tensor product to the diagonal under the stated condition (our own). This restriction defines the product (our own).

**nLab:** [product of distributions](https://ncatlab.org/nlab/show/product+of+distributions), [Hörmander's criterion](https://ncatlab.org/nlab/show/H%C3%B6rmander%27s+criterion). It says: “the condition that the product of two distributions is well defined is that for each wave vector direction in the wave front set of one of the two distributions, the opposite direction must not be an element”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I, Acta Mathematica 127 (1971) 79–183](https://doi.org/10.1007/BF02392052)

### Wave fronts project to singular support

**Remember:** No bad directions means no singular point.

*Makes the theorem clean to state or prove.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** The wave front set records singular frequency directions at each point of a distribution, a generalized function. A direction is regular if a smooth cutoff equal to one nearby gives faster-than-polynomial Fourier decay throughout a cone around it. The singular support consists of points with no smooth neighborhood.

**Problem.** Forgetting the directions in the wave front set gives exactly the singular support.

**How the definition helps.** The directional test recovers ordinary smoothness once every direction at a point passes. In our own argument, finitely many smaller cones cover the unit sphere, and a single smaller cutoff preserves decay on each. Fourier inversion then gives smoothness there. A smooth localization already has rapid decay in all directions.

**nLab:** [wavefront set](https://ncatlab.org/nlab/show/wavefront+set). It says: “The projection of the wave front set down to the base space is the singular support of the distribution.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Wave fronts pull back as covectors

**Remember:** Fourier directions pull back by the transpose derivative.

*Makes the theorem clean to state or prove.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** For nonzero k, (x,k) lies outside the wave front set if some smooth compactly supported cutoff equal to one near x passes this test. The localized Fourier transform decays faster than every inverse power of frequency on some open cone containing k. A smooth coordinate change pulls k back by composing this covector with the derivative.

**Problem.** Under a smooth invertible change of coordinates with smooth inverse, the wave front set of a distribution pulls back exactly as its covectors do.

**How the definition helps.** Recording covectors gives each singular direction a coordinate change rule. In our own explanation, the chain rule gives that rule for the phase in the Fourier integral. Integration by parts gives decay in the remaining directions. Applying the estimate to the inverse change gives equality.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(ψ\* u) = {(x, ᵗψ′\|ₓ η) ; (ψ(x), η) ∈ WF(u)}.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Principal symbols turn composition into multiplication

**Remember:** Every derivative that hits a coefficient lowers the order on the input.

*True by definition. Confidence: medium.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For a linear differential operator with smooth coefficients, write the coefficients to the left of the derivatives. Replace each coordinate derivative by a corresponding variable to form a polynomial, the full symbol. The sum of the terms of highest degree is the principal symbol.

**Problem.** For operators of orders m and n, the degree m + n part of the composition symbol equals the product of the principal symbols.

**How the definition helps.** Keeping only the specified degree discards every product-rule term in which a derivative hits a coefficient. In our own proof, only derivatives acting on the input contribute to degree m + n. The full symbols require extra terms for differentiated coefficients. A separate coordinate-change argument identifies the leading polynomial intrinsically.

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “the principal symbol is the highest degree homogeneous component of the symbol.”

**Sources:** none listed. No primary source with a working link was found.

### Two-scale averages recover weak limits

**Remember:** Ignore the fast coordinate in the test to average it in the limit.

*True by definition.* MSC 35B27 (Homogenization in context of PDEs; PDEs in media with periodic structure), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** Take Q = \[0,1\]ᵈ and u ∈ Lᵖ(Ω × Q). Two-scale convergence to u requires ∫Ω uε(x)φ(x,x/ε) dx → ∫Ω∫Q u(x,y)φ(x,y) dy dx as ε → 0. This holds for every smooth φ compactly supported in position and unit-periodic in each fast coordinate.

**Problem.** If a bounded sequence in Lᵖ converges in this two-scale sense, its ordinary weak limit is the cell average of u. Here 1 &lt; p &lt; ∞, and ordinary weak convergence tests integrals against fixed functions in the dual space.

**How the definition helps.** Tests independent of the fast coordinate read the cell average directly. In our own proof, boundedness and approximation extend the identity from smooth tests to all dual tests. The separate compactness theorem gives a two-scale limit along a subsequence of any bounded sequence.

**Paper or page:** [Homogenization of high-contrast composites under differential constraints](https://arxiv.org/abs/2104.11306v2). It says: “If $u\_\\varepsilon \\stackrel{2}{\\rightharpoonup}u$ weakly two-scale in $L<sup>p$</sup>, then $u\_\\varepsilon \\rightharpoonup \\int<sub>Q</sub> u(\\,\\cdot\\,,y)\\mathrm{d}y$ weakly in $L<sup>p</sup>(\\Omega;\\mathbb{R}<sup>N</sup>)$.”

**Sources:**

- [Elisa Davoli, Martin Kružík, Valerio Pagliari. Homogenization of high-contrast composites under differential constraints. 2104.11306v2](https://arxiv.org/abs/2104.11306v2)

### Positive eigenvalues prevent negative responses

**Remember:** Positive energy forces the negative part to vanish.

*Rules out counterexamples.* MSC 35B50 (Maximum principles in context of PDEs), 35J10. arXiv math.AP. Level 3: graduate.

**Definition.** For real bounded V on Ω, set E(v) = ∫Ω (\|∇v\|² + Vv²). The lowest Dirichlet eigenvalue is the infimum of E(v)/‖v‖₂² over all nonzero v ∈ H¹₀(Ω).

**Problem.** On a smooth bounded connected domain, suppose V is bounded and the lowest eigenvalue is positive. Any weak solution of −Δu + Vu = f with nonnegative square-integrable f and nonnegative boundary values is nonnegative almost everywhere.

**How the definition helps.** Positive energy for every nonzero competitor rules out a negative part (our own). Testing the integrated equation with max(−u,0), which vanishes at the boundary, shows that its energy is nonpositive, so it vanishes. At eigenvalue zero, the negative of a positive first eigenfunction is a counterexample with zero forcing and boundary values. Existence of that eigenfunction uses elliptic spectral theory.

**Paper or page:** [Positive solutions of quasilinear elliptic equations with Fuchsian potentials in Wolff class](https://arxiv.org/abs/2204.08061v1). It says: “The weak maximum principle for $Q<sub>p,A,V</sub>$ holds true in ω:”

**Sources:** none listed. No primary source with a working link was found.

### Closing the test space lets a harmonic function test itself

**Remember:** Close the test space to let the unknown test itself.

*True by definition.* MSC 35D30 (Weak solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Start with smooth real functions compactly supported in a bounded open set. Measure the squared norm by integrating the function’s square plus its gradient’s squared length. Completing this space defines the zero-boundary Sobolev space.

**Problem.** Suppose u belongs to this space and the integral of ∇u · ∇φ vanishes for each smooth compactly supported φ. Then u vanishes almost everywhere.

**How the definition helps.** Density supplies smooth compactly supported tests whose gradients converge to ∇u in L² (our own proof). Passing to the limit gives ∫\|∇u\|² = 0. Poincaré’s inequality now gives ‖u‖₂ = 0.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “trace-zero functions in W¹˒ᵖ(Ω) can be approximated by smooth functions with compact support.”

**Sources:** none listed. No primary source with a working link was found.

### Leray's weak solutions give global existence for the Navier–Stokes equations

**Remember:** Ask only what the energy controls, and solutions exist for all time.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35Q30, 35A01. arXiv math.AP. Level 3: graduate.

**Definition.** For unforced incompressible flow on ℝ³ with viscosity ν &gt; 0, a Leray solution satisfies u ∈ L∞ₜL²ₓ and ∇u ∈ L²ₜL²ₓ. It is divergence-free, solves Navier–Stokes distributionally against every smooth compactly supported divergence-free test field, and attains its initial velocity strongly in L². It satisfies ‖u(t)‖₂² + 2ν∫ₛᵗ‖∇u(τ)‖₂²dτ ≤ ‖u(s)‖₂² for s = 0 and almost every s &gt; 0, at every t ≥ s (our own).

**Problem.** Every divergence-free initial velocity in L²(ℝ³) admits a global Leray weak solution of the unforced three-dimensional Navier–Stokes equations.

**How the definition helps.** The weak formulation accommodates limits of approximate velocities with only the energy bounds (our own). Leray’s existence theorem uses compactness to pass to the nonlinear term.

**Wikipedia:** [Navier–Stokes existence and smoothness](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness). It says: “He also proved the existence of so-called weak solutions to the Navier–Stokes equations, which may not satisfy the equations pointwise but do satisfy them in mean value.”

**Sources:**

- [J. Leray, Sur le mouvement d'un liquide visqueux emplissant l'espace, Acta Mathematica 63 (1934) 193–248](https://doi.org/10.1007/BF02547354)

### The weak formulation lets Lax–Milgram solve Poisson's equation

**Remember:** Test against every v in the same space where you look for u.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J25, 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** On a bounded domain Ω, H¹₀(Ω) is the closure of smooth compactly supported functions in the H¹ norm. A weak Dirichlet solution of −Δu = f is a function u ∈ H¹₀(Ω) satisfying ∫Ω ∇u·∇v = ∫Ω fv for every v ∈ H¹₀(Ω).

**Problem.** On a bounded domain Ω and for f in L²(Ω), the weak formulation has exactly one solution u in H¹₀(Ω). Its norm is at most a constant times the norm of f.

**How the definition helps.** Lax–Milgram applies because the gradient form is bounded and coercive on H¹₀(Ω) by Poincaré’s inequality (our own). Cauchy–Schwarz bounds the forcing functional by a domain-dependent constant times ‖f‖₂, giving the stated estimate.

**Wikipedia:** [Weak formulation](https://en.wikipedia.org/wiki/Weak_formulation), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The appropriate space to satisfy these requirements is the Sobolev space H¹₀(Ω) of functions with weak derivatives in L²(Ω) and with zero boundary conditions”

**Sources:**

- [P. D. Lax and A. N. Milgram, Parabolic equations, in Contributions to the Theory of Partial Differential Equations, Annals of Mathematics Studies 33, Princeton University Press (1954), 167–190](https://doi.org/10.1515/9781400882182-010)

### Weak solutions and Weyl's lemma split existence from regularity

**Remember:** A weak solution satisfies the equation after the derivatives move onto test functions.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J05. arXiv math.AP. Level 3: graduate.

**Definition.** A weak solution of Lu = 0 is a locally integrable function u with ∫ u · L\*φ = 0 for every test function φ. A test function is a smooth function that is 0 outside a compact set. L\* is the formal adjoint of L, which you get by integrating by parts.

**Problem.** Weyl’s lemma: every weak solution of Laplace’s equation agrees almost everywhere with a smooth harmonic function.

**How the definition helps.** Weak solutions let you find a solution first and prove that it is smooth later. They are easier to find by Hilbert-space methods, because u needs no derivatives (our own remark). Weyl’s lemma then supplies the regularity step for Laplace’s equation. That step can fail: the wave equation has weak solutions that are not smooth, and operators where it works are called hypoelliptic.

**Wikipedia:** [Weyl's lemma (Laplace equation)](https://en.wikipedia.org/wiki/Weyl%27s_lemma_%28Laplace_equation%29), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution), [Hypoelliptic operator](https://en.wikipedia.org/wiki/Hypoelliptic_operator). It says: “Weyl's lemma, named after Hermann Weyl, states that every weak solution of Laplace's equation is a smooth solution.”

**Sources:**

- [Weyl, H. (1940). The method of orthogonal projection in potential theory. Duke Mathematical Journal 7, 411–444.](https://doi.org/10.1215/S0012-7094-40-00725-6)

### Moving-point limits preserve viscosity inequalities

**Remember:** Let the evaluation point move with the touching test.

*True by definition.* MSC 35D40 (Viscosity solutions to PDEs), 35B30. arXiv math.AP. Level 3: graduate.

**Definition.** For functions uε on Ω, the upper half-relaxed limit at x ∈ Ω is limsup uε(y) as (ε,y) → (0,x), with ε &gt; 0. The lower half-relaxed limit uses liminf instead.

**Problem.** Take locally uniformly bounded viscosity solutions on a common open domain, for continuous operators that are nonincreasing in the second-derivative matrix and converge locally uniformly. Then the upper half-relaxed limit is a viscosity subsolution of the limit equation, and the lower one is a supersolution.

**How the definition helps.** In our own proof, allowing the evaluation point to move captures nearby points where a smooth test touches an approximation. A strict local touch at the limit gives nearby extrema along a sequence realizing the limit. The inequalities at those extrema pass to the limit by operator convergence. Identifying both limits as one solution also requires comparison and compatible boundary bounds.

**Paper or page:** [On the homogenization of second order level set PDE in periodic media](https://arxiv.org/abs/2011.15062v3). It says: “are sub- and supersolution, respectively, of the following problems:”

**Sources:**

- [Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions. User’s guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society, 1992.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### Touching tests preserve maxima of subsolutions

**Remember:** A test above the maximum is above whichever branch it touches.

*True by definition.* MSC 35D40 (Viscosity solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Require that the value of u at each point bounds the upper limit of nearby values. Test u with twice continuously differentiable functions that equal it at the point and lie above it nearby. For a viscosity subsolution, each test must give a nonpositive value in the differential equation there.

**Problem.** Consider a second-order equation whose left side cannot increase when a positive semidefinite matrix is added to the matrix of second derivatives. The maximum of two viscosity subsolutions of this equation is again a viscosity subsolution.

**How the definition helps.** A test touching the maximum from above also touches a branch attaining that maximum, and that branch supplies the required inequality (our own). The maximum can have a corner even when both branches are smooth, and testing from above avoids differentiating that corner. The matrix condition makes the test definition agree with the pointwise inequality for smooth functions.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “if for any point x₀ ∈ Ω and any C² function φ such that φ(x₀) = u(x₀) and φ ≥ u in a neighborhood of x₀”

**Sources:** none listed. No primary source with a working link was found.

### Viscosity solutions make nonsmooth solutions unique

**Remember:** Test the equation only on smooth functions that touch u from above or from below.

*Rules out counterexamples.* MSC 35D40 (Viscosity solutions to PDEs), 35F21, 35J60. arXiv math.AP. Level 3: graduate.

**Definition.** A continuous u solves F(x,u,Du,D²u) = 0 in the viscosity sense if it passes two tests at every x. Each C² function φ touching u from above must satisfy F(x,u(x),Dφ(x),D²φ(x)) ≤ 0. Each C² function touching from below must satisfy the reverse inequality.

**Problem.** For a large class of Hamilton–Jacobi and fully nonlinear second-order equations, viscosity solutions exist, are unique, and are stable under uniform limits. For example, \|u′\| = 1 on (−1, 1) with u(±1) = 0 has exactly one viscosity solution, 1 − \|x\|.

**How the definition helps.** For \|u′\| = 1, a valley admits a constant test from below, whose zero slope violates the supersolution inequality (our own). The tent 1 − \|x\| passes both tests, including at its peak. For the general theory, comparison gives uniqueness, Perron’s method gives existence under suitable barriers, and the touching tests give stability (our own).

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The definition allows only for certain kind of singularities, so that existence, uniqueness, and stability under uniform limits, hold for a large class of equations.”

**Sources:**

- [Crandall, M. G.; Lions, P.-L. (1983). Viscosity solutions of Hamilton–Jacobi equations. Transactions of the American Mathematical Society 277(1), 1–42.](https://doi.org/10.1090/S0002-9947-1983-0690039-8)
- [Evans, L. C. (1980). On solving certain nonlinear partial differential equations by accretive operator methods. Israel Journal of Mathematics 36(3), 225–247.](https://doi.org/10.1007/BF02762047)
- [Crandall, M. G.; Ishii, H.; Lions, P.-L. (1992). User's guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society 27(1), 1–67.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### With distributions, every constant-coefficient operator has a fundamental solution

**Remember:** A fundamental solution produces a unit point source when the operator acts.

*Makes the theorem clean to state or prove.* MSC 35E05 (Fundamental solutions to PDEs and systems of PDEs with constant coefficients), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** A fundamental solution of P(∂) on ℝⁿ is a distribution E satisfying P(∂)E = δ₀. The point source δ₀ sends every smooth compactly supported test function φ to φ(0).

**Problem.** The Malgrange–Ehrenpreis theorem says that every nonzero linear differential operator with constant coefficients has a fundamental solution. So P(∂)u = f has a solution for every compactly supported distribution f.

**How the definition helps.** Distributions give the point-source equation a meaning, and the Malgrange–Ehrenpreis theorem supplies E. For compactly supported f, convolution gives P(∂)(E ∗ f) = (P(∂)E) ∗ f = δ₀ ∗ f = f (our own).

**Wikipedia:** [Malgrange–Ehrenpreis theorem](https://en.wikipedia.org/wiki/Malgrange%E2%80%93Ehrenpreis_theorem), [Lewy's example](https://en.wikipedia.org/wiki/Lewy%27s_example). It says: “It states that every non-zero linear differential operator with constant coefficients has a Green's function.”

**Sources:**

- [Ehrenpreis, L. (1954). Solution of some problems of division. Part I. Division by a polynomial of derivation. American Journal of Mathematics 76(4), 883–903.](https://doi.org/10.2307/2372662)
- [Malgrange, B. (1956). Existence et approximation des solutions des équations aux dérivées partielles et des équations de convolution. Annales de l'Institut Fourier 6, 271–355.](https://doi.org/10.5802/aif.65)
- [Lewy, H. (1957). An example of a smooth linear partial differential equation without solution. Annals of Mathematics 66(1), 155–158.](https://doi.org/10.2307/1970121)

### Transport along paths preserves every average

**Remember:** Keep the values and the volume, and every average stays fixed.

*True by definition.* MSC 35F05 (Linear first-order PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For an invertible volume-preserving flow Φₜ and initial scalar u₀, define the transported scalar by uₜ(Φₜ(x)) = u₀(x) for almost every starting point x.

**Problem.** On a periodic domain, the spatial integral of any measurable function of the transported scalar stays constant whenever its initial integral exists and is finite.

**How the definition helps.** Each particle keeps its scalar value, and the flow preserves volume. Changing variables to the starting positions proves conservation in our own argument. For a single shear on the two-dimensional torus, the paper identifies every space-time integrable weak solution on the shear interval with this path description.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “In particular, f is a renormalised weak solution”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi, Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation (2025).](https://arxiv.org/abs/2307.00809v4)

### Outgoing waves make Helmholtz solutions unique

**Remember:** Outgoing waves satisfy a derivative condition that standing waves fail.

*Rules out counterexamples.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 3: graduate.

**Definition.** In three dimensions, let k &gt; 0 be the wave number and r the distance from the origin. The Sommerfeld radiation condition requires r(∂u/∂r − iku) → 0 uniformly in direction as r → ∞.

**Problem.** Outside a bounded smooth obstacle with connected exterior, two radiating solutions of Δu + k²u = 0 with the same boundary values agree.

**How the definition helps.** The radiation condition rules out standing waves with zero boundary values, such as sin(k(r − a))/r outside a ball of radius a (our own). In our own proof, integrate by parts and use the radiation condition. Then the integral of the squared magnitude of the difference over distant spheres tends to zero, and Rellich’s uniqueness theorem forces the difference to vanish.

**Wikipedia:** [Sommerfeld radiation condition](https://en.wikipedia.org/wiki/Sommerfeld_radiation_condition). It says: “The Sommerfeld radiation condition is used to solve uniquely the Helmholtz equation.”

**Sources:** none listed. No primary source with a working link was found.

### Weak flux needs only traces

**Remember:** Two lifts differ by a zero-boundary test.

*True by definition. Confidence: medium.* MSC 35J67 (Boundary values of solutions to elliptic equations and elliptic systems), 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** A trace is the boundary value assigned to a function v whose value and weak first derivatives are square-integrable. To define outward flux on that trace, integrate F · ∇v + v div F over the domain.

**Problem.** On a bounded domain with locally Lipschitz boundary graphs, suppose the vector field F and its weak divergence are square-integrable. The integral defines a continuous functional on boundary traces, independent of the chosen extension v.

**How the definition helps.** Changing the extension adds a function with zero trace (our own). The trace theorem approximates it by smooth functions supported inside, and the definition of weak divergence makes the integral vanish for each of them. Cauchy–Schwarz passes this to the limit and bounds the functional by the least extension norm. For smooth fields, integration by parts recovers the classical outward component.

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “is essentially the higher dimensional equivalent of integration by parts”

**Sources:** none listed. No primary source with a working link was found.

### An obstacle minimizer is harmonic off contact

**Remember:** Where there is room to move both ways, the Laplacian vanishes.

*True by definition.* MSC 35J86 (Unilateral problems for linear elliptic equations and variational inequalities with linear elliptic operators). arXiv math.AP. Level 3: graduate.

**Definition.** Fix a domain Ω, boundary data represented by g ∈ H¹(Ω), and an obstacle ψ. A solution minimizes ∫Ω \|∇v\|² over all v ∈ g + H¹₀(Ω) satisfying v ≥ ψ almost everywhere.

**Problem.** Where a continuous minimizer lies strictly above a continuous obstacle, it is harmonic, meaning that its Laplacian vanishes.

**How the definition helps.** The positive gap on each compact test support permits variations of both signs (our own). Differentiating the energy gives ∫∇u·∇φ = 0 for every smooth test φ supported away from contact. Weyl’s lemma gives classical harmonicity there.

**Wikipedia:** [Obstacle problem](https://en.wikipedia.org/wiki/Obstacle_problem). It says: “A variational argument shows that, away from the contact set, the solution to the obstacle problem is harmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Sorting competitors orders obstacle solutions

**Remember:** Sort the competitors to sort the obstacle solutions.

*True by definition. Confidence: medium.* MSC 35J86 (Unilateral problems for linear elliptic equations and variational inequalities with linear elliptic operators), 35B51. arXiv math.AP. Level 3: graduate.

**Definition.** Fix boundary values and a lower bound called the obstacle. Among functions above the obstacle with those boundary values, minimize the integral of the squared gradient. Competitors and their weak first derivatives must be square-integrable.

**Problem.** On a bounded domain with locally Lipschitz boundary graphs, take two ordered obstacles whose problems both admit a competitor with the same boundary values. Then the two minimizers are ordered in the same way almost everywhere.

**How the definition helps.** Sorting the minimizers by taking their minimum and maximum gives two competitors with the same total energy (our own). The minimum clears the lower obstacle and the maximum clears the higher one, so minimality makes each a minimizer of its problem. Strict convexity with fixed boundary data gives uniqueness, hence the ordering. The minimization formula avoids comparing the two differential inequalities directly.

**Wikipedia:** [Obstacle problem](https://en.wikipedia.org/wiki/Obstacle_problem). It says: “A solution to the obstacle problem is a function u ∈ K which minimizes the energy integral”

**Sources:** none listed. No primary source with a working link was found.

### Absolute minimization rejects hidden slopes

**Remember:** A global slope can hide a bump that local tests see.

*Rules out counterexamples.* MSC 35J94 (Elliptic equations with infinity-Laplacian), 35D40. arXiv math.AP. Level 3: graduate.

**Definition.** Write Lip(u,S) for the supremum of \|u(x)−u(y)\|/\|x−y\| over distinct points of S. A Lipschitz extension u is absolutely minimizing if it passes the following test on every relatively compact interior open set V. Every Lipschitz competitor v agreeing with u on ∂V satisfies Lip(u,V) ≤ Lip(v,V).

**Problem.** For a bounded Euclidean domain with Lipschitz boundary data, absolute minimizers solve the infinity Laplace equation in the viscosity sense. A function that only minimizes the global Lipschitz constant can fail this equation.

**How the definition helps.** Local minimization excludes bumps invisible to the global Lipschitz constant (our own). On (−2,2)², add a nonzero smooth bump supported in a left-half disk to max(x,0), keeping the bump’s gradient magnitude below one. Boundary slopes force global constant one, but removing the bump lowers the disk’s constant to zero. The characterization of absolutely minimizing extensions as viscosity solutions gives the differential conclusion.

**Paper or page:** [Comparison Principles for the Finsler Infinity Laplacian with Applications to Minimal Lipschitz Extensions](https://arxiv.org/abs/2405.05684v1). It says: “In addition to the equivalences (i), (ii), and (iii) stated above, $\\varphi$-AMLE are characterized by the following condition: (iv) $u \\in \\mathrm{Sub}<sub>\\varphi</sub>(U) \\cap \\mathrm{Super}<sub>\\varphi</sub>(U)$.”

**Sources:**

- [Peter S. Morfe. Comparison Principles for the Finsler Infinity Laplacian with Applications to Minimal Lipschitz Extensions. 2405.05684v1](https://arxiv.org/abs/2405.05684v1)

### Convexity picks one Monge–Ampère branch

**Remember:** A positive determinant alone does not make a function convex.

*Rules out counterexamples.* MSC 35J96 (Monge-Ampère equations). arXiv math.AP. Level 3: graduate.

**Definition.** Prescribe the determinant of the matrix of second derivatives and the values on the boundary. Select the convex solutions, whose matrices of second derivatives are positive semidefinite.

**Problem.** On a bounded convex domain, suppose two convex solutions are twice continuously differentiable inside and continuous up to the boundary. They agree if their determinants equal the same positive function and their boundary values agree.

**How the definition helps.** Convexity and the positive determinant make both matrices of second derivatives positive definite, which allows a maximum principle. Differentiating the determinant along the segment between the two matrices gives a linear elliptic equation for the difference (our own). Its maximum principle gives uniqueness. Without convexity it fails: on the unit disk, both signs of (\|x\|² − 1)/2 give determinant one and zero boundary values (our own).

**Wikipedia:** [Monge–Ampère equation](https://en.wikipedia.org/wiki/Monge%E2%80%93Amp%C3%A8re_equation). It says: “this equation is elliptic if f is a positive function and solutions satisfy the constraint of being uniformly convex.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier heat multipliers make successive heating times add

**Remember:** Multiplying the heat multipliers adds the two times in their exponents.

*True by definition. Confidence: medium.* MSC 35K05 (Heat equation), 35K08, 47D06. arXiv math.AP. Level 3: graduate.

**Definition.** For time t ≥ 0, define heat flow on square-integrable functions on ℝⁿ by multiplying their Fourier transforms by exp(−t\|ξ\|²). Use the Fourier kernel exp(−ix·ξ). The usual integral description for t &gt; 0 convolves the initial data with a Gaussian, the explicit heat kernel.

**Problem.** Heat flow for time s ≥ 0 followed by heat flow for time t ≥ 0 equals heat flow for time s + t. This composition law and the identity at time zero make the family a semigroup.

**How the definition helps.** The multiplier definition turns successive heating into a product of two exponentials, in our own proof. Their exponents add to −(s + t)\|ξ\|². In our own comparison, proving the Gaussian kernel identity directly involves completing the square. The work moves into Fourier inversion of the Gaussian to match the two definitions and into verifying the heat equation from the multiplier.

**Wikipedia:** [Heat kernel](https://en.wikipedia.org/wiki/Heat_kernel). It says: “The most well-known heat kernel is the heat kernel of d-dimensional Euclidean space ℝᵈ, which has the form of a time-varying Gaussian function,”

**Sources:** none listed. No primary source with a working link was found.

### Growth bounds restore heat uniqueness

**Remember:** Control the growth at infinity to rule out heat from nowhere.

*Rules out counterexamples.* MSC 35K05 (Heat equation). arXiv math.AP. Level 3: graduate.

**Definition.** For each finite time T, require positive constants A and B with \|u(x,t)\| ≤ A exp(B\|x\|²) for all x and 0 ≤ t ≤ T. Consider solutions continuous through time zero, with continuous first time and second spatial derivatives at positive times.

**Problem.** Two such whole-space solutions of the heat equation agree if they have the same initial values.

**How the definition helps.** The growth bound lets a positive comparison solution dominate the difference far from the origin. In our own argument, the maximum principle on expanding balls gives uniqueness over a short interval. Repeating the comparison covers each finite interval. In our own comparison, Tychonoff’s example gives a nonzero smooth solution with zero initial data when arbitrary growth is allowed.

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “To determine uniqueness of solutions in the whole space it is necessary to assume additional conditions, for example an exponential bound on the growth of solutions”

**Sources:** none listed. No primary source with a working link was found.

### Path weights order heat solutions

**Remember:** More absorption gives less weight to every path.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 3: graduate.

**Definition.** Let B start at x and have independent Brownian coordinates of variance 2s at time s. For absorption V and initial data g, the Feynman–Kac formula gives u(x,t) = 𝔼\[g(Bₜ) exp(−∫₀ᵗ V(Bₛ) ds)\].

**Problem.** For smooth bounded nonnegative absorption rates depending on position and common bounded measurable nonnegative initial data, a larger rate gives a smaller or equal solution.

**How the definition helps.** Increasing absorption decreases each path’s weight. Our own comparison multiplies this inequality by the nonnegative initial value and averages over the same paths. The Feynman–Kac theorem identifies that average with the bounded heat solution.

**Wikipedia:** [Feynman–Kac formula](https://en.wikipedia.org/wiki/Feynman%E2%80%93Kac_formula). It says: “the Feynman–Kac formula expresses u(x,t) as a conditional expectation of a certain random variable”

**Sources:**

- [Mark Kac, On distributions of certain Wiener functionals (1949).](https://doi.org/10.1090/S0002-9947-1949-0027960-X)

### Self-adjoint heat kernels are symmetric

**Remember:** Taking the adjoint swaps the two positions in a real heat kernel.

*True by definition. Confidence: medium.* MSC 35K08 (Heat kernel), 35P05. arXiv math.AP. Level 3: graduate.

**Definition.** For an operator P acting in L²(M,μ), its heat kernel K represents the heat operator by integration against μ. For every smooth initial temperature f and t &gt; 0, (exp(−tP)f)(x) = ∫ K(t,x,y)f(y) dμ(y).

**Problem.** Take a real, nonnegative, self-adjoint scalar elliptic operator of order two with smooth coefficients on a compact manifold without boundary. For t &gt; 0 its heat kernel satisfies K(t,x,y) = K(t,y,x).

**How the definition helps.** In our own proof, taking the adjoint swaps the variables of a real integral kernel. The spectral theorem makes the heat operator self-adjoint when its generator is self-adjoint. Equality of operators gives equality of kernels almost everywhere. Elliptic heat theory supplies a smooth kernel for positive time, so symmetry holds everywhere.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator:”

**Sources:** none listed. No primary source with a working link was found.

### Minimizing steps pay for movement

**Remember:** Doing nothing is always a candidate and costs no movement.

*True by definition.* MSC 35K55 (Nonlinear parabolic equations). arXiv math.AP. Level 3: graduate.

**Definition.** Given a previous density ρ and time step τ &gt; 0, choose an admissible density σ minimizing E(σ) + W₂(ρ,σ)²/(2τ). Competitors have the same mass and finite second moment. W₂² is the infimum of ∫\|x − y\|² dπ over transport plans π with marginals ρ and σ.

**Problem.** In the paper’s aggregation and diffusion scheme, suppose the initial density has finite energy and each step attains its minimum. The sum of movement penalties cannot exceed the energy lost from the initial to the final density.

**How the definition helps.** The old density competes in the same minimization and pays zero movement penalty. Comparing the minimum with that candidate bounds each penalty by the energy lost in that step. Summing cancels all intermediate energies in our own derivation. The work lies in proving minimizers exist and their limit solves the evolution equation as the time step tends to zero.

**Paper or page:** [Nonlinear aggregation-diffusion equations with Riesz potentials](https://arxiv.org/abs/2205.13520v1). It says: “\\mathcal F<sub>s</sub>\[\\rho \_\\tau ^k\]+\\frac1{2\\tau }\\sum <sub>h=1</sub><sup>k</sup> W<sub>2</sub><sup>2</sup>(\\rho \_\\tau ^h,\\rho \_\\tau <sup>h-1</sup>)\\le \\mathcal F<sub>s</sub>\[\\rho ^0\]”

**Sources:**

- [Yanghong Huang, Edoardo Mainini, Juan Luis Vázquez, Bruno Volzone, Nonlinear aggregation-diffusion equations with Riesz potentials (2022).](https://arxiv.org/abs/2205.13520v1)

### Accretive time steps preserve contraction

**Remember:** Each step is nonexpansive, so their limit cannot expand.

*True by definition.* MSC 35K90 (Abstract parabolic equations), 35B30. arXiv math.AP. Level 3: graduate.

**Definition.** An operator A on a Banach space is accretive if ∥u−v∥ ≤ ∥u−v+h(Au−Av)∥ for every h &gt; 0 and all domain points. Maximal accretivity also requires that u+hAu can attain every value for each h. A mild solution at time t is the limit of n implicit steps of length t/n.

**Problem.** For a densely defined, single-valued, maximally accretive operator A, two mild solutions of u′ + Au = 0 stay within their initial distance.

**How the definition helps.** In our own proof, accretivity says that solving u+hAu = f cannot increase distances between inputs. Iterating the step and taking its limit preserves the bound, even when the solutions have no time derivative. The Crandall–Liggett theorem establishes existence of that limit.

**Paper or page:** [Lipschitz stability for Bayesian inference in porous medium tissue growth models](https://arxiv.org/abs/2506.04769v1). It says: “Moreover, the family of operators Sₜ(A), t &gt; 0, is a strongly continuous semigroup of contractive mappings”

**Sources:**

- [M. G. Crandall and T. M. Liggett. Generation of Semi-Groups of Nonlinear Transformations on General Banach Spaces. American Journal of Mathematics, 1971.](https://doi.org/10.2307/2373376)

### Relabeling curves preserves curvature motion

**Remember:** An increasing relabeling leaves the unit normal unchanged.

*True by definition.* MSC 35K93 (Quasilinear parabolic equations with mean curvature operator). arXiv math.AP. Level 3: graduate.

**Definition.** Describe the moving surface as the zero set of a smooth function u of position and time. Where ∇u is nonzero, its unit normal is n = ∇u/\|∇u\|. The mean curvature equation for u is ∂u/∂t = \|∇u\| div n, where divergence sums the coordinate derivatives of the corresponding components.

**Problem.** Where ∇u is nonzero, replacing u by h(u) preserves the equation for every smooth h with positive derivative. If h(0) = 0, it also preserves the moving surface.

**How the definition helps.** An increasing relabeling preserves the unit normal and multiplies both sides of the equation by the same positive derivative. This proves invariance by the chain rule in our own argument. The work lies in deriving the scalar equation from motion by curvature. Extending it through zero gradients requires a separate definition of solution.

**Wikipedia:** [Level-set method](https://en.wikipedia.org/wiki/Level-set_method). It says: “The boundary of the shape is then the zero-level set of φ”

**Sources:**

- [Stanley Osher and James A. Sethian, Fronts propagating with curvature-dependent speed: Algorithms based on Hamilton-Jacobi formulations (1988).](https://doi.org/10.1016/0021-9991(88)90002-2)

### Real wave speeds need independent modes

**Remember:** Real speeds alone do not separate the waves.

*Rules out counterexamples.* MSC 35L40 (First-order hyperbolic systems). arXiv math.AP. Level 3: graduate.

**Definition.** For a constant real matrix A in one spatial dimension, call the first-order system strongly hyperbolic when A has a real eigenbasis.

**Problem.** On the real line, consider ∂ₜu + A∂ₓu = 0 with square-integrable initial data. Strong hyperbolicity bounds the solution norm by a fixed multiple of the initial norm at every time.

**How the definition helps.** The eigenbasis separates the system into scalar equations that translate their data without changing norms (our own). Without it the bound fails. For the Jordan block with zero diagonal and upper-right entry 1, the first component contains −t times the derivative of the second initial component. That derivative is not bounded by the square-integral norm of the data (our own).

**Wikipedia:** [Hyperbolic partial differential equation](https://en.wikipedia.org/wiki/Hyperbolic_partial_differential_equation). It says: “has only real eigenvalues and is diagonalizable.”

**Sources:** none listed. No primary source with a working link was found.

### The entropy condition picks the one physical shock solution

**Remember:** Test the distance from every constant state to rule out expanding shocks.

*Rules out counterexamples.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 35L65, 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** For a scalar conservation law with flux f, a bounded weak solution u is a Kružkov entropy solution if it satisfies the following conditions. It attains its initial data in L¹ locally. For every real k, the inequality is ∂ₜ\|u−k\| + div(sgn(u−k)(f(u)−f(k))) ≤ 0 in distributions.

**Problem.** For a smooth scalar flux in any dimension, every bounded measurable initial state on ℝᵈ has exactly one Kružkov entropy solution. For Burgers’ equation with rising step data, both a rarefaction fan and a moving jump satisfy the weak equation (our own).

**How the definition helps.** For Burgers’ rising step, any k strictly between the states detects a violation at the moving jump (our own). The rarefaction fan satisfies every entropy inequality. Kružkov’s existence and contraction theorem gives the general result (our own).

**Wikipedia:** [Rankine–Hugoniot conditions](https://en.wikipedia.org/wiki/Rankine%E2%80%93Hugoniot_conditions). It says: “a requirement for a unique single-valued solution is that the solution should satisfy the admissibility condition or entropy condition.”

**Sources:**

- [P. D. Lax, Hyperbolic systems of conservation laws II, Communications on Pure and Applied Mathematics 10 (1957) 537–566](https://doi.org/10.1002/cpa.3160100406)
- [S. N. Kružkov, First order quasilinear equations in several independent variables, Mathematics of the USSR-Sbornik 10 (1970) 217–243](https://doi.org/10.1070/SM1970v010n02ABEH002156)

### Weak conservation determines shock speed

**Remember:** Across a shock, the flux jump pays for the moving state jump.

*True by definition.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 76L05. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** A locally bounded u solves uₜ + f(u)ₓ = 0 weakly if every smooth compactly supported test φ satisfies ∫∫(uφₜ + f(u)φₓ) dx dt = 0.

**Problem.** Suppose a bounded weak solution of a one-dimensional conservation law jumps across a smooth moving interface and is smooth up to each side. The interface speed times the state jump equals the flux jump.

**How the definition helps.** In our own proof, the weak equation puts the entire mismatch at the interface into one boundary term. Integration by parts on both sides gives the flux jump minus the interface speed times the state jump. Both jumps mean right value minus left value. The term vanishes for every test function, so its coefficient is zero.

**Paper or page:** [One Dimensional Hyperbolic Conservation Laws: Past and Future](https://arxiv.org/abs/2310.16707v1). It says: “Then the left and right states u⁻, u⁺ and the speed λ satisfy the Rankine-Hugoniot equations”

**Sources:**

- [Alberto Bressan, One Dimensional Hyperbolic Conservation Laws: Past and Future.](https://arxiv.org/abs/2310.16707v1)

### Variational Dirichlet eigenvalues cannot rise when the domain grows

**Remember:** A larger domain offers more trial functions and can only lower the eigenvalues.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** On bounded open Ω, H¹₀(Ω) is the closure of smooth compactly supported functions in H¹(Ω). For nonzero u in this space put R(u) = ∫Ω\|∇u\|²/∫Ω\|u\|². The k-th Dirichlet eigenvalue minimizes the largest R(u) on S over all k-dimensional subspaces S of H¹₀(Ω).

**Problem.** Let Ω ⊂ Ω′ be nonempty bounded open sets. For every k ≥ 1, the k-th Dirichlet eigenvalue on Ω′ is at most the k-th on Ω.

**How the definition helps.** The variational definition makes domain growth enlarge the set of trial subspaces (our own). Extending a function by zero takes H¹₀(Ω) into H¹₀(Ω′) and preserves both integrals in the quotient. The work moves into the min-max theorem, which identifies these minima with the eigenvalues. Its application uses the compact inclusion of H¹₀ into the square-integrable functions.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “the first eigenvalue λ₁ minimizes the Dirichlet energy.”

**Sources:** none listed. No primary source with a working link was found.

### Variational eigenvalues bound Neumann values by matching Dirichlet values

**Remember:** Free boundaries allow more trial functions, so the eigenvalues cannot go up.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** For nonzero u ∈ H¹(Ω) on a bounded Lipschitz domain, set R(u) = ∫Ω\|∇u\|²/∫Ω\|u\|². The k-th Neumann eigenvalue minimizes the largest R(u) over all k-dimensional subspaces of H¹(Ω). The Dirichlet formula uses subspaces of H¹₀(Ω), the H¹ closure of smooth compactly supported functions.

**Problem.** The k-th Neumann eigenvalue is at most the k-th Dirichlet eigenvalue for each k ≥ 1, counting multiplicities.

**How the definition helps.** Both definitions use the same quotient, and the Neumann problem has more trial subspaces (our own). Minimizing over more subspaces cannot increase the result. The work moves into the min-max theorem and the weak forms of the two boundary conditions. The Lipschitz assumption gives the compact inclusion of H¹ into the square-integrable functions that the eigenvalue characterization needs.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “Dirichlet eigenvalues are contrasted with Neumann eigenvalues: eigenvalues for the corresponding Neumann problem.”

**Sources:** none listed. No primary source with a working link was found.

### Variational Schrödinger eigenvalues cannot fall when the potential rises

**Remember:** Raising the potential raises each trial energy and cannot lower any eigenvalue.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35J10. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** For bounded real V on a nonempty bounded open set Ω, define Rᵥ(u) = ∫Ω(\|∇u\|² + V\|u\|²)/∫Ω\|u\|² for nonzero u ∈ H¹₀(Ω). The k-th eigenvalue is the minimum, over all k-dimensional subspaces S of H¹₀(Ω), of the maximum of Rᵥ on S excluding zero.

**Problem.** Let V and W be bounded real potentials with V ≤ W almost everywhere. Then each Dirichlet eigenvalue for V is at most the matching eigenvalue for W.

**How the definition helps.** The variational definition turns pointwise order of the potentials into order of every trial quotient, in our own proof. Taking the maximum on each subspace and then the minimum over subspaces preserves that order. The work moves into proving that these extrema give the differential operator’s eigenvalues. Unlike the matrix version, this uses compact inclusion of the trial space into the square-integrable functions to obtain a discrete list of eigenvalues.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The min-max theorem also applies to (possibly unbounded) self-adjoint operators.”

**Sources:** none listed. No primary source with a working link was found.

### The Leray projection removes pressure

**Remember:** Pressure is a gradient, so the incompressible projection erases it.

*True by definition.* MSC 35Q30 (Navier-Stokes equations), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** On a torus the Leray projection is the orthogonal projection onto square-integrable vector fields with zero divergence. Applying it to the momentum equation gives an equation for velocity alone.

**Problem.** For smooth periodic incompressible Navier–Stokes flow, adding a periodic gradient ∇φ to the force preserves the velocity when pressure changes from p to p+φ.

**How the definition helps.** The projection removes both the pressure gradient and the added gradient from the velocity equation. In our own proof, integration by parts makes every periodic gradient orthogonal to each divergence-free field. Recovering pressure from the projected equation uses the Helmholtz decomposition, which identifies the removed component as a gradient.

**Wikipedia:** [Leray projection](https://en.wikipedia.org/wiki/Leray_projection). It says: “The pressure and the divergence free condition are "projected away".”

**Sources:** none listed. No primary source with a working link was found.

### Weak transport conserves mass

**Remember:** A constant spatial test reads the total mass.

*True by definition.* MSC 35Q49 (Transport equations), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** For velocity b on the torus, a bounded density ρ with initial data ρ₀ solves the transport equation weakly when the following identity holds. Every smooth periodic test φ supported in time in \[0,T) satisfies ∫₀ᵀ∫ρ(∂ₜφ + b·∇φ) dx dt + ∫ρ₀φ(·,0) dx = 0.

**Problem.** On a torus, let an integrable, divergence-free velocity transport a bounded initial density. Every bounded weak solution preserves its initial mass for almost every time.

**How the definition helps.** A spatially constant test eliminates the transport term in our own proof. The remaining identity says that total mass has zero time derivative and takes its initial value. The paper constructs a solution whose integrals against spatial tests vary continuously, so its identity holds at every time.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “(Conservation of Mass) \\quad \\int\_{\\mathbb{T}<sup>d}</sup> f(\\cdot,t)\\,dx = \\int\_{\\mathbb{T}<sup>d}</sup> f<sub>0</sub>\\,dx .”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi. Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation. 2307.00809v4](https://arxiv.org/abs/2307.00809v4)

### The Hodge star makes vacuum Maxwell equations conformally invariant

**Remember:** In four dimensions the star on 2-forms ignores metric rescaling.

*True by definition. Confidence: medium.* MSC 35Q61 (Maxwell equations), 58A10, 78A25. arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** On an oriented four-dimensional spacetime, the Hodge star assigns each 2-form β the unique 2-form ⋆β satisfying α∧⋆β = ⟨α,β⟩g vol<sub>g</sub> for every 2-form α. The vacuum Maxwell equations for F are dF = 0 and d⋆F = 0.

**Problem.** If F solves the vacuum equations for a four-dimensional spacetime metric g, it also solves them for λ²g. Here λ is any smooth positive function.

**How the definition helps.** The Hodge star isolates the metric dependence and stays unchanged on 2-forms under rescaling. To see why, a metric rescaling by λ² scales the inner product on 2-forms by 1/λ⁴ (our own). It also scales the volume form by λ⁴, so the factors cancel in the definition of ⋆ (our own). The coordinate formulation instead requires tracking the metric factors component by component (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “the (dual) Hodge star operator ⋆ is a linear transformation from the space of 2-forms to the space of (4 − 2)-forms defined by the metric in Minkowski space (in four dimensions even by any metric conformal to this metric)”

**Sources:** none listed. No primary source with a working link was found.

### Extension energy gives fractional positivity

**Remember:** A boundary pairing becomes a weighted squared gradient upstairs.

*True by definition.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 3: graduate.

**Definition.** Fix 0 &lt; s &lt; 1 and let y denote height in the upper half-space. Extend a boundary function by minimizing the integral of the squared gradient with weight y to the power 1 − 2s. Define the fractional Laplacian as a positive constant times the limiting weighted outward derivative at y = 0.

**Problem.** For a real smooth compactly supported function on Euclidean space, the integral of its product with its fractional Laplacian is nonnegative. Only the zero function gives zero.

**How the definition helps.** In the extension definition, the boundary integral equals a positive multiple of the weighted gradient energy. Integration by parts gives this equality in our own proof. Zero energy forces a constant extension, whose compactly supported boundary value must vanish. Caffarelli and Silvestre identify the weighted derivative with the usual Fourier definition, which multiplies frequency ξ by \|ξ\| to the power 2s.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “The fractional Laplacian can also be defined through harmonic extensions.”

**Sources:**

- [Luis Caffarelli and Luis Silvestre, An Extension Problem Related to the Fractional Laplacian (2007).](https://doi.org/10.1080/03605300600987306)

### Exterior data fix fractional extensions

**Remember:** A nonlocal equation can see beyond the boundary.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations), 35J25. arXiv math.AP. Level 3: graduate.

**Definition.** For 0 &lt; s &lt; 1, define E(u) = ∫∫ \|u(x)−u(y)\|²/\|x−y\|¹⁺²ˢ dx dy over ℝ². The fractional Dirichlet problem minimizes E among finite-energy functions equal almost everywhere to the prescribed data outside the interval.

**Problem.** Smooth compactly supported exterior values on the complement of a bounded interval have a unique energy-minimizing extension, up to equality almost everywhere. Endpoint values alone do not determine the interior solution.

**How the definition helps.** Full exterior data fix the outside values in every pairwise comparison. Compare zero data with a nonnegative, nonzero smooth bump supported away from the interval, which also vanishes at the endpoints (our own). Extending the bump by zero inside gives a strictly negative fractional Laplacian there, so zero inside is not its solution. The cited existence and uniqueness theorem supplies the extension whose fractional Laplacian vanishes.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “and in particular Hg ≡ g outside Ω.”

**Sources:**

- [Anders Björn, Jana Björn, Minhyun Kim. Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems. 2406.05994v3](https://arxiv.org/abs/2406.05994v3)

### Fourier multipliers factor the half Laplacian through Riesz transforms

**Remember:** Summing the products of the Riesz and derivative multipliers gives \|ξ\|.

*True by definition.* MSC 35R11 (Fractional partial differential equations), 42B20. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Define the half Laplacian by multiplying the Fourier transform by \|ξ\|, using the kernel exp(−ix·ξ). The j-th Riesz transform Rⱼ multiplies the Fourier transform by −iξⱼ/\|ξ\| away from zero. An alternative defines the half Laplacian by integrating differences of function values against a kernel that is singular at zero.

**Problem.** For every smooth, rapidly decreasing f on ℝⁿ, the half Laplacian of f equals the sum of Rⱼ(∂ⱼf) over j.

**How the definition helps.** The multiplier definition turns the desired identity into a sum of scalars. The multiplier of Rⱼ∂ⱼ is ξⱼ²/\|ξ\|, so the sum is \|ξ\|. Our own comparison is with the integral definition, where the factorization is not visible in the kernel. The work moves into Kwaśnicki’s theorem that the Fourier and singular integral definitions agree on their stated domains.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “Summing over j recovers \|ξ\| f̂(ξ), hence the identity holds in the sense of tempered distributions.”

**Sources:**

- [M. Kwaśnicki (2017), Ten equivalent definitions of the fractional Laplace operator, Fractional Calculus and Applied Analysis 20, 7–51](https://doi.org/10.1515/fca-2017-0002)

### Fourier multipliers make fractional Laplacian orders add under composition

**Remember:** The multipliers multiply, so their powers add.

*True by definition. Confidence: medium.* MSC 35R11 (Fractional partial differential equations), 26A33. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, define the fractional Laplacian of order s by multiplying the Fourier transform by \|ξ\| to the power 2s. Its domain consists of square-integrable functions for which that product is also square-integrable. For 0 &lt; s &lt; 1, a usual alternative integrates differences f(x) − f(y) against a kernel singular at x = y.

**Problem.** For s, t &gt; 0, every f in the domain for order s + t is in the domain for order t. Applying order t and then order s gives the operator of order s + t on that domain.

**How the definition helps.** The Fourier definition reduces composition to the rule for multiplying powers, in our own proof. The product of \|ξ\| to the powers 2s and 2t is \|ξ\| to the power 2(s + t). Near ξ = 0 the order-t factor is bounded, and elsewhere the order-(s + t) bound controls it for \|ξ\| ≥ 1. The work moves into Kwaśnicki’s proof that the Fourier definition agrees with the singular integral for 0 &lt; s &lt; 1.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “In the literature, the definition of the fractional Laplacian often varies, but most of the time those definitions are equivalent.”

**Sources:**

- [M. Kwaśnicki (2017), Ten equivalent definitions of the fractional Laplace operator, Fractional Calculus and Applied Analysis 20, 7–51](https://doi.org/10.1515/fca-2017-0002)

### Minimum energy orders boundary currents

**Remember:** Raising every trial energy raises their minimum.

*True by definition.* MSC 35R30 (Inverse problems for PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For each boundary voltage admitting an extension of finite gradient energy, minimize the integral of conductivity times squared voltage gradient over such extensions. This gives the boundary quadratic form. Its usual definition pairs the voltage with the outward flux, using conductivity times the outward derivative of voltage.

**Problem.** Take two bounded scalar conductivities on a smooth bounded domain, each bounded below by a positive constant. If one conductivity is at least as large almost everywhere, its boundary quadratic form is at least as large for every admissible voltage.

**How the definition helps.** Increasing conductivity raises the energy of every candidate, so it also raises the minimum in our own comparison. The energy principle identifies the minimizing extension with the solution of the conductivity equation. Integration by parts identifies its energy with the boundary pairing, interpreted weakly when the conductivity is rough.

**Wikipedia:** [Poincaré–Steklov operator](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Steklov_operator). It says: “The mapping of the surface temperature to the surface heat flux is a Poincaré–Steklov operator.”

**Sources:**

- [Bastian Harrach and Marcel Ullrich, Monotonicity-Based Shape Reconstruction in Electrical Impedance Tomography.](https://doi.org/10.1137/120886984)

### A left and a right parametrix of an operator agree modulo smoothing

**Remember:** Modulo smoothing errors, a left inverse meets a right inverse.

*True by definition.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** In a pseudodifferential calculus with smoothing operators as a two-sided ideal, S is a left parametrix for T if ST − I is smoothing. A right parametrix R makes TR − I smoothing.

**Problem.** If a pseudodifferential operator has both a left and a right parametrix, each inverts on both sides up to smoothing errors.

**How the definition helps.** The definition turns the result into the ordinary identity for left and right inverses. In our own words, let S be a left parametrix and R a right parametrix. Then S(TR) = (ST)R gives S = R up to smoothing errors. The work is constructing the parametrices and checking that composition preserves the allowed errors.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “If S is a left (right) parametrix of T, and T has a right (left) parametrix, then S is also a right (left) parametrix of T.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis, arXiv:2107.12839v1 (2021)](https://arxiv.org/abs/2107.12839v1)

### Symbol sums need no convergence

**Remember:** Match each finite truncation and let the tail drop in order.

*Makes the theorem clean to state or prove.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** A standard symbol a of order m satisfies \|∂ₓᵅ∂ξᵝa\| ≤ C(1+\|ξ\|)ᵐ⁻ˡ for every derivative, where l = \|β\|. The constant may depend on the derivative and the compact position set. For terms aⱼ of decreasing orders mⱼ, an asymptotic sum differs from each partial sum by a symbol of the first omitted order.

**Problem.** Every sequence of standard symbols with orders strictly decreasing to minus infinity has an asymptotic sum, unique up to an error of every negative order.

**How the definition helps.** The symbol asymptotic summation theorem cuts off each successive term on a larger bounded frequency region to obtain convergence (our own). Any two sums differ by a symbol of every omitted order, and those orders tend to minus infinity.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “there exists a symbol (not unique) a ∈ Sᵐ”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Weyl quantization makes adjoints conjugate symbols

**Remember:** A midpoint stays put when input and output swap.

*True by definition.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** For a scalar symbol a on ℝⁿ, Weyl quantization assigns the operator with kernel K(x,y) = (2π)⁻ⁿ∫ exp(i(x−y)·ξ)a((x+y)/2,ξ) dξ. The integral has its oscillatory meaning when it does not converge absolutely.

**Problem.** For standard scalar symbols on Euclidean space, taking the formal adjoint in Weyl quantization conjugates the symbol.

**How the definition helps.** In our own explanation, exchanging input and output leaves the midpoint fixed. Conjugation reverses the Fourier phase, and exchanging the positions reverses it again. The remaining step justifies the integral identity on smooth, rapidly decreasing test functions.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “(aʷ(x, hD)u, v) = (u, āʷ(x, hD) v).”

**Sources:** none listed. No primary source with a working link was found.

### Projection gives Calderón identities

**Remember:** Take traces after reconstruction to get a projector.

*True by definition.* MSC 35S15 (Boundary value problems for PDEs with pseudodifferential operators). arXiv math.AP. Level 3: graduate.

**Definition.** For the Laplacian on a smooth bounded domain, let S and D denote the single- and double-layer potentials using the outward normal. The interior Calderón operator sends (g,h) to the interior boundary value and outward normal derivative of Sh − Dg.

**Problem.** Let V denote the single-layer boundary operator and K the average of the two double-layer traces. With K′ the adjoint of K, these operators satisfy KV = VK′.

**How the definition helps.** Green’s representation recovers each harmonic field from its traces, so tracing after reconstruction gives a projection (our own). The layer jump relations give diagonal blocks I/2 − K and I/2 + K′, with V above the diagonal. Squaring and comparing the upper-right blocks gives (I/2 − K)V + V(I/2 + K′) = V, hence KV = VK′.

**Wikipedia:** [Calderón projector](https://en.wikipedia.org/wiki/Calder%C3%B3n_projector). It says: “As the Calderón operator is a projector”

**Sources:** none listed. No primary source with a working link was found.

### Invertible mixed derivatives exclude unbounded traces

**Remember:** A full-rank phase cannot collapse a coordinate into a trace.

*Rules out counterexamples.* MSC 35S30 (Fourier integral operators applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For a Fourier integral operator, the phase Φ specifies how the input frequencies oscillate at each output position. In the position-frequency representation, the graph condition requires the matrix of mixed position and frequency derivatives to be invertible.

**Problem.** A real phase smooth away from zero and homogeneous of degree one defines a bounded operator on square-integrable functions under the graph condition. The amplitude must have standard order zero and compact position support, with the graph condition throughout its closed set of position and frequency directions.

**How the definition helps.** The graph condition prevents the phase from losing an entire frequency direction. In our own example, the phase x₁ξ₁ in two dimensions gives restriction to the line x₂ = 0, even after an output cutoff. This restriction is unbounded in square mean. The positive result uses oscillatory estimates for composition with the adjoint.

**Wikipedia:** [Fourier integral operator](https://en.wikipedia.org/wiki/Fourier_integral_operator). It says: “if a is of order zero, it is possible to show that T defines a bounded operator from L² to L².”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Causal support and adjoints force uniqueness

**Remember:** Pair a future-supported solution with a past-supported inverse.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A retarded Green operator G for P satisfies PGf = GPf = f for every smooth compactly supported test section f. The support of Gf lies in the causal future of the support of f. An advanced operator uses the causal past, and Green hyperbolicity requires both operators for P and its formal adjoint.

**Problem.** On a globally hyperbolic spacetime, which has no causal loops and has compact causal diamonds, a Green hyperbolic operator has unique advanced and retarded inverses.

**How the definition helps.** Requiring inverses for the adjoint gives a direct uniqueness test without an equation-specific energy estimate. The difference of two retarded responses to the same source solves the equation with zero source (our own). Pair it with the advanced adjoint inverse of any test function. The supports meet in a compact set, so integration by parts gives zero against the test, and reversing time gives advanced uniqueness.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “advanced and retarded Green functions of Green hyperbolic differential operator are unique”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes.](https://doi.org/10.1007/s00220-014-2097-7)

### Transverse wave fronts allow restriction

**Remember:** Control frequencies normal to the submanifold before restricting a distribution.

*Rules out counterexamples.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A nonzero covector (x,ξ) lies outside WFˢ(u) if some smooth compactly supported cutoff χ equals one near x and satisfies the following test. On some open cone around ξ, the Fourier transform of χu is square-integrable with weight (1+\|η\|²)ˢ. A conormal covector annihilates the tangent space at its base point.

**Problem.** Let a smooth embedded submanifold have positive dimension and codimension c, the number of missing dimensions. If s &gt; c/2 and the order-s wave front set avoids its conormal covectors, the distribution has a restriction. Its order-(s − c/2) wave front set lies among the tangential restrictions of the original singular covectors over the submanifold.

**How the definition helps.** Avoiding conormal singularities controls the frequencies integrated out by restriction (our own). The cited pullback theorem gives the stated bound for the inclusion map. Line measure in the plane has conormal singularities, and its smooth approximations can diverge on that line (our own).

**Paper or page:** [Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1). It says: “If f has constant rank l ≥ 1, then this is valid when r₂ − r₁ ≥ (n − l)/2 and r₂ &gt; (n − l)/2.”

**Sources:**

- [Stevan Pilipović and Bojan Prangoski, Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1)

### Viscosity solutions survive uniform limits, so monotone numerical schemes converge

**Remember:** Derivatives sit on test functions, so limits of solutions stay solutions.

*Makes the theorem clean to state or prove.* MSC 35D40 (Viscosity solutions to PDEs), 65N12. arXiv math.AP, math.NA. Level 4: research.

**Definition.** An upper semicontinuous u is a viscosity subsolution if every C² test φ touching it from above at x satisfies F(x,u(x),Dφ(x),D²φ(x)) ≤ 0. A lower semicontinuous supersolution uses lower tests and the reverse inequality. A continuous viscosity solution satisfies both conditions.

**Problem.** Barles–Souganidis theorem (1991): let the equation have a strong comparison principle. Then a monotone, stable and consistent scheme converges locally uniformly to the viscosity solution.

**How the definition helps.** Monotonicity and consistency transfer the upper and lower touching tests to the corresponding half-relaxed limits of stable approximations (our own). With the prescribed data, comparison orders the upper limit below the lower limit. They therefore coincide, which gives local uniform convergence by the Barles–Souganidis theorem.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “Based on their stability properties, Barles and Souganidis obtained a very simple and general proof of convergence of finite difference schemes.”

**Sources:**

- [G. Barles, P. E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations, Asymptotic Analysis 4 (1991) 271–283](https://doi.org/10.3233/ASY-1991-4305)

### Least-action updates cannot increase uniform errors

**Remember:** A minimum cannot amplify a uniform change in its inputs.

*True by definition.* MSC 35F21 (Hamilton-Jacobi equations). arXiv math.AP. Level 4: research.

**Definition.** On a network of joined edges, assign a cost to each path, including time spent at junctions. For continuous starting data, at each endpoint and time, minimize the starting value plus the path cost over paths arriving there.

**Problem.** For the paper’s network Hamilton–Jacobi evolution, the largest absolute difference between two solutions never exceeds that between their continuous starting values.

**How the definition helps.** Changing the starting values by at most ε changes each candidate cost by at most ε in our own argument. Taking the minimum preserves the same bound. The substantial theorem identifies this path formula with the differential equation on edges and its prescribed conditions at junctions.

**Paper or page:** [Large Time Behavior of Solutions to Hamilton-Jacobi Equations on Networks](https://arxiv.org/abs/2303.03872v3). It says: “for any φ ∈ C(Γ), t ∈ ℝ⁺ and a ∈ ℝ, S(t)(φ + a) = S(t)φ + a.”

**Sources:**

- [Marco Pozza, Large Time Behavior of Solutions to Hamilton-Jacobi Equations on Networks (2024).](https://arxiv.org/abs/2303.03872v3)

### Cordès coefficients restore Dirichlet uniqueness

**Remember:** Rescale toward the Laplacian until the error is a contraction.

*Rules out counterexamples.* MSC 35J15 (Second-order elliptic equations), 35D35. arXiv math.AP. Level 4: research.

**Definition.** Let A be a measurable symmetric matrix field whose eigenvalues stay between fixed positive bounds. The Cordès condition requires a positive scalar multiplier γ(x) with ∥γ(x)A(x)−I∥ ≤ k &lt; 1 almost everywhere. The matrix norm is the square root of the sum of squared entries.

**Problem.** On a smooth bounded convex domain, prescribe zero boundary values and square-integrable forcing f. Under the Cordès condition, the equation ∑ᵢⱼ Aᵢⱼ ∂ᵢ∂ⱼu = f holds almost everywhere and has a unique solution with square-integrable derivatives through order two.

**How the definition helps.** The rescaled equation gives a contraction by Dirichlet Laplacian invertibility and the Miranda–Talenti estimate ‖D²u‖₂ ≤ ‖Δu‖₂ (our own). On the three-dimensional unit ball, choose radial eigenvalue six and tangential eigenvalues one. No scalar multiple gets within Frobenius distance one of the identity. The nonzero homogeneous solution \|x\|²ᐟ³ − 1 has zero trace and square-integrable Hessian of size O(\|x\|⁻⁴ᐟ³) (our own).

**Paper or page:** [A least-squares Galerkin approach to gradient and Hessian recovery for nondivergence-form elliptic equations](https://arxiv.org/abs/1909.00491v2). It says: “satisfies the Cordes condition with λ = 0”

**Sources:**

- [Iain Smears and Endre Süli. Discontinuous Galerkin Finite Element Approximation of Nondivergence Form Elliptic Equations with Cordès Coefficients. 2013.](https://doi.org/10.1137/120899613)

### One distance tests boundary regularity

**Remember:** One distance profile tests every continuous datum.

*Makes the theorem clean to state or prove.* MSC 35J67 (Boundary values of solutions to elliptic equations and elliptic systems). arXiv math.AP. Level 4: research.

**Definition.** Consider a bounded open set and the fractional p-Laplace equation, with fractional order between zero and one and exponent p greater than one. Its Dirichlet problem prescribes values on the whole exterior. Call a boundary point regular if solutions approach its prescribed value for every bounded continuous exterior datum having a limit at infinity.

**Problem.** Let the test datum be distance to the boundary point, capped at one. Regularity is equivalent to its energy solution tending to zero as one approaches the point from inside.

**How the definition helps.** The capped distance controls exterior data away from the point (our own). Given ε &gt; 0, bound each datum above and below by its boundary value plus or minus ε and a sufficiently large distance multiple. Comparison transfers these bounds to the corresponding solutions, and the distance solution tends to zero. The cited regularity theorem identifies the energy and Perron criteria.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “where dₓ₀(x) := min {1, \|x − x₀\|}.”

**Sources:**

- [Anders Björn, Jana Björn, and Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3)

### Cone comparison permits disjoint sums

**Remember:** In the sum metric a distance cone splits into two cones.

*Makes the theorem clean to state or prove.* MSC 35J94 (Elliptic equations with infinity-Laplacian), 35D40. arXiv math.AP. Level 4: research.

**Definition.** A distance cone has the form a + b d(x,z), where z is its vertex. Two-sided cone comparison passes upper and lower cone bounds from the boundary of each relatively compact open test region to its interior. The vertex must lie outside the region.

**Problem.** Suppose both metric spaces have shortest paths and compact closed bounded sets, and give their product the sum of the two distances. If continuous u and v satisfy two-sided cone comparison on open domains in the two spaces, then u(x) + v(y) satisfies it on the product.

**How the definition helps.** Cone comparison states the product theorem using distances alone, even on spaces without derivatives. In our own reading, adding the distances splits every product cone into separate distance terms with the same slope. The cited theorem proves that comparison on the two factors passes to their disjoint sum. That passage requires an argument because the product vertex can project inside a test section.

**Paper or page:** [Superposition Property in Disjoint Variables for the Infinity Laplace Equation](https://arxiv.org/abs/2508.17106v2). It says: “Similar results for functions that satisfy comparison with cones from below and from both sides hold.”

**Sources:**

- [Qing Liu, Juan J. Manfredi, Xiaodan Zhou. Superposition Property in Disjoint Variables for the Infinity Laplace Equation. 2508.17106v2](https://arxiv.org/abs/2508.17106v2)

### Energy admissibility prevents spontaneous flow

**Remember:** Zero initial energy leaves no energy for motion.

*Rules out counterexamples.* MSC 35Q30 (Navier-Stokes equations), 35D30. arXiv math.AP. Level 4: research.

**Definition.** A weak flow satisfies the momentum equation after integration against smooth test fields. An energy-admissible flow also bounds its kinetic energy plus accumulated viscous loss by its initial energy when no force acts.

**Problem.** An unforced energy-admissible weak flow that starts from rest has zero velocity almost everywhere at almost every later time.

**How the definition helps.** The energy inequality bounds two nonnegative quantities by zero (our own). Zero kinetic energy forces the velocity to vanish almost everywhere. For strengthened viscosity on the three-dimensional torus, the cited theorem gives infinitely many weak flows starting from rest without this inequality.

**Paper or page:** [Non-uniqueness of weak solutions for a logarithmically supercritical hyperdissipative Navier-Stokes system](https://arxiv.org/abs/2406.05853v1). It says: “In particular, there are infinitely many weak solutions with zero initial condition.”

**Sources:**

- [Marco Romito, Francesco Triggiano. Non-uniqueness of weak solutions for a logarithmically supercritical hyperdissipative Navier-Stokes system. 2406.05853v1](https://arxiv.org/abs/2406.05853v1)

### Particle projection gives shared cluster velocity

**Remember:** Project onto cluster velocities to average the free speeds.

*True by definition.* MSC 35Q31 (Euler equations). arXiv math.AP. Level 4: research.

**Definition.** Label particles on a line by cumulative mass, so label length measures mass. For particles that stick after collisions, start with each initial velocity and add the accumulated force per unit mass. Project these velocities orthogonally, using mass as the integration measure, onto functions constant on each cluster of particles at the same position.

**Problem.** In the paper’s pressureless Euler flow, each cluster of positive mass moves at the mass average of its members’ velocities before the collision correction.

**How the definition helps.** Projection onto constants replaces all velocities in a cluster by their average. In our own argument, orthogonality to the cluster’s indicator says that the total velocity correction there is zero. The work lies in deriving the projection formula from the particle dynamics.

**Paper or page:** [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3), [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3). It says: “V(t) &amp; = \\Proj \_{\\mathscr {H}<sub>X(t)</sub>} U(t)”

**Sources:**

- [José Antonio Carrillo, Sondre Tesdal Galtung, Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems (2025).](https://arxiv.org/abs/2312.04932v3)

### Contractive Airy boundary maps dissipate energy

**Remember:** Compare incoming and outgoing boundary forms to check energy loss.

*True by definition.* MSC 35R02 (PDEs on graphs and networks (ramified or polygonal spaces)). arXiv math.AP. Level 4: research.

**Definition.** On a graph made of a loop and half-lines, the Airy operator takes three derivatives along each edge. Boundary conditions are given by a linear map ℒ from incoming to outgoing endpoint data, each carrying a quadratic form that can take either sign. ℒ is a contraction for these forms if the output form of ℒv never exceeds the input form of v.

**Problem.** The Airy operator A is dissipative exactly when its boundary map ℒ is a contraction for the two forms. Dissipativity means Re⟨Au,u⟩ ≤ 0 for every u in the domain of A.

**How the definition helps.** The contraction condition is the energy test written on the boundary data. In our own explanation, integration by parts gives the output form minus the input form, up to a positive factor. The converse uses the fact that functions on the edges can realize the allowed endpoint data.

**Paper or page:** [Airy and Schrödinger-type equations on looping-edge graphs](https://arxiv.org/abs/2410.11729v3). It says: “Aℒ is dissipative if and only if ℒ is a (𝒞₁,𝒞₀)-contraction.”

**Sources:**

- [Jaime Angulo Pava, Alexander Muñoz, Airy and Schrödinger-type equations on looping-edge graphs (2025).](https://arxiv.org/abs/2410.11729v3)

### Half-space positivity blocks false interior zeros

**Remember:** For a nonlocal equation, the sign outside the domain still counts.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** Fix 0 &lt; s &lt; 1 and let L be the fractional Laplacian of order s, which compares a function's value with its values everywhere. A function is antisymmetric across a plane if it takes opposite values at mirror points. The key condition is that u ≥ 0 on the whole half-space on one side, not only in the domain.

**Problem.** Let u be antisymmetric and nonnegative on the chosen half-space, and let Ω be open there. Suppose Lu exists pointwise and Lu + cu ≥ 0 in Ω for a real function c. Then u &gt; 0 throughout Ω or u vanishes almost everywhere.

**How the definition helps.** Nonnegativity on the whole half-space gives every reflected pair the same sign in our own proof. At an interior zero, a positive value contributes more than its more distant negative reflection. The integral is therefore negative unless u vanishes almost everywhere. Corollary 1.4 shows that requiring nonnegativity only inside the open subset permits an interior zero.

**Paper or page:** [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2), [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2). It says: “is equal to zero at a point in Ω, but is not identically zero in Ω.”

**Sources:**

- [Serena Dipierro, Giorgio Poggesi, Jack Thompson, Enrico Valdinoci, The role of antisymmetric functions in nonlocal equations (2023).](https://arxiv.org/abs/2203.11468v2)

### Perron envelopes preserve order

**Remember:** Higher data leave fewer upper candidates.

*True by definition.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** An upper Perron candidate is a bounded-below fractional p-superharmonic function in Ω that dominates the prescribed data off Ω. At every boundary point its lower limit from inside must also dominate the prescribed value. The upper Perron solution is the pointwise infimum over all candidates.

**Problem.** For bounded continuous exterior data on a bounded domain, increasing the data can only increase the upper Perron solution or leave it unchanged.

**How the definition helps.** Each candidate for the higher data also qualifies for the lower data, so the infimum for the higher data is at least as large. Requiring equality outside destroys this nesting (our own). The cited theorem identifies the two infima for bounded continuous data.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “g₁ ≤ g₂ in Ωᶜ, then Q̄ g₁ ≤ Q̄ g₂ in ℝⁿ.”

**Sources:**

- [Anders Björn, Jana Björn, and Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3)
