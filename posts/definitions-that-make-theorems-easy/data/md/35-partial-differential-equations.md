### The principal quadratic form keeps equation type fixed under coordinate changes

**Remember:** Count the lines through the origin where the principal form vanishes.

*Makes the theorem clean to state or prove.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The type of a real linear second-order equation at a point counts the lines through the origin on which its nonzero principal form aξ² + bξη + cη² vanishes. Here a, b, c are the coefficients of uₓₓ, uₓᵧ, uᵧᵧ, and zero, one and two lines mean elliptic, parabolic and hyperbolic. No invertible linear change of ξ and η can alter this count.

**Problem.** A smooth coordinate change with smooth inverse preserves the type of a linear second-order equation at every point with nonzero principal form.

**How the definition helps.** The chain rule changes the principal form by an invertible linear substitution, given by the Jacobian of the coordinate change (our own). That substitution maps zero lines bijectively onto zero lines, so the count stays the same (our own).

**Wikipedia:** [Partial differential equation](https://en.wikipedia.org/wiki/Partial_differential_equation). It says: “with the terms of the highest degree (a homogeneous polynomial, here a quadratic form) being most significant for the classification.”

**Sources:** none listed. No primary source with a working link was found.

### A nonpositive potential keeps the elliptic maximum principle valid

**Remember:** A nonpositive potential cannot help sustain a positive interior peak.

*Rules out counterexamples.* MSC 35B50 (Maximum principles in context of PDEs), 35J15. arXiv math.AP. Level 2: later undergraduate.

**Definition.** In Δu + qu, the potential q is the coefficient of u itself; here q is bounded and nonpositive everywhere. Where u is positive, the term qu is then nonpositive, so it cannot help Δu + qu stay nonnegative at a peak.

**Problem.** On a bounded domain, a twice differentiable function continuous to the boundary with Δu + qu ≥ 0 and nonpositive boundary values stays nonpositive.

**How the definition helps.** At a positive interior maximum, Δu ≤ 0 and qu ≤ 0, which nearly contradicts Δu + qu ≥ 0 (our own). A small exponential perturbation makes the inequality strict and completes the contradiction (our own). With q = 1, sin(x) on \[0, π\] is positive inside and zero at both ends (our own).

**Wikipedia:** [Maximum principle](https://en.wikipedia.org/wiki/Maximum_principle). It says: “the ordinary differential equation y″ + 2y = 0 has sinusoidal solutions, which certainly have interior maxima”

**Sources:** none listed. No primary source with a working link was found.

### Weak solutions let kinked traveling waves satisfy the transport equation

**Remember:** Move derivatives onto the test function, and kinks are allowed.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35F10. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A locally integrable u weakly solves ∂ₜu + ∂ₓu = 0 if ∫u(∂ₜφ + ∂ₓφ) = 0 for every smooth test function φ with compact support. All derivatives fall on φ, so u itself never needs to be differentiable.

**Problem.** For every locally integrable g on ℝ, the traveling wave u(t, x) = g(x − t) is a weak solution. In particular, \|x − t\| is a solution even though it has a kink at x = t.

**How the definition helps.** The weak definition differentiates only φ, so the profile g needs only local integrability. In the coordinate y = x − t, the integrand is g(y) times the time derivative of φ(t, y + t) (our own). Integrating in t gives zero because φ has compact support (our own).

**Wikipedia:** [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The key to the concept of weak solution is that there exist functions u that satisfy equation (2) for any φ, but such u may not be differentiable and so cannot satisfy equation (1).”

**Sources:** none listed. No primary source with a working link was found.

### Transverse data determine transport locally

**Remember:** Each nearby path must cross the data curve once.

*Rules out counterexamples.* MSC 35F05 (Linear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** An initial curve is noncharacteristic for the velocity b if b is nowhere tangent to it. Then, near each point of the curve, every path of b crosses the curve exactly once.

**Problem.** For a smooth planar velocity b, prescribe smooth data for b · ∇u = 0 on a smooth noncharacteristic curve. A unique smooth solution exists locally near each interior point of the curve.

**How the definition helps.** The equation b · ∇u = 0 says that u is constant along paths of b, so copy each data value along the path that crosses there. The inverse function theorem makes start point and travel time into local coordinates, which gives smoothness and uniqueness (our own). For ∂u/∂y = 0 with zero data on the tangent line x = 0, both 0 and x are solutions (our own).

**Wikipedia:** [Method of characteristics](https://en.wikipedia.org/wiki/Method_of_characteristics). It says: “Once the ODE is found, it can be solved along the characteristic curves and transformed into a solution for the original PDE.”

**Sources:** none listed. No primary source with a working link was found.

### A positive integrating factor preserves the sign of transported data

**Remember:** An exponential factor changes size but never changes sign.

*True by definition.* MSC 35F10 (Initial value problems for linear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Along each characteristic, the path that follows the velocity b, multiply the solution by the exponential of the integral of the reaction coefficient a from time zero. This positive factor turns the equation into: the derivative of factor times u equals factor times f.

**Problem.** Consider a smooth solution of ∂ₜu + b·∇u + au = f with nonnegative initial data and forcing f. It stays nonnegative wherever a path leads back to the initial surface from a later time.

**How the definition helps.** Along each path, factor times u equals its initial value plus the integral of factor times f, and both are nonnegative (our own). Dividing by the positive factor keeps the sign (our own).

**Wikipedia:** [Integrating factor](https://en.wikipedia.org/wiki/Integrating_factor). It says: “to bring the left-hand side under a common derivative”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiation turns nonlinear evolution into heat

**Remember:** Evolve the exponential by heat, then take the logarithm.

*True by definition.* MSC 35F21 (Hamilton-Jacobi equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For diffusivity ν &gt; 0, evolve exp(−f/(2ν)) by the Gaussian heat flow with diffusivity ν to get v, and set u = −2ν log v. The second derivative of the logarithm produces a squared first derivative that cancels the equation’s nonlinear term.

**Problem.** For smooth bounded initial potentials on the line, the evolved potential u solves ∂u/∂t + (∂u/∂x)²/2 = ν ∂²u/∂x².

**How the definition helps.** Substituting u = −2ν log v gives ∂u/∂t + (∂u/∂x)²/2 − ν ∂²u/∂x² = −(2ν/v)(∂v/∂t − ν ∂²v/∂x²), which is zero when v solves the heat equation (our own). The heat kernel averages positive values, so v &gt; 0 and the logarithm exists.

**Wikipedia:** [Cole–Hopf transformation](https://en.wikipedia.org/wiki/Cole%E2%80%93Hopf_transformation). It says: “it provides an explicit formula for fairly general solutions of the PDE in terms of the initial datum and the heat kernel.”

**Sources:**

- [Julian D. Cole, On a quasi-linear parabolic equation occurring in aerodynamics (1951).](https://doi.org/10.1090/qam/42889)

### Nondecreasing Burgers data keep characteristics from crossing

**Remember:** If speeds increase from left to right, paths never overtake.

*Rules out counterexamples.* MSC 35F25 (Initial value problems for nonlinear first-order PDEs). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For ∂ₜu + u∂ₓu = 0, the characteristic from a is the line x = a + tf(a), along which u keeps its initial value f(a). Restrict f to bounded, nondecreasing, continuously differentiable functions, so faster paths start to the right and never overtake slower ones.

**Problem.** For this class of initial data on the line, the inviscid Burgers equation has a continuously differentiable solution for every forward time.

**How the definition helps.** The map a ↦ a + tf(a) has derivative at least one, so it is a differentiable bijection of the line (our own). Then u is f composed with its inverse (our own). Decreasing data can fail: for f(a) = −sin(a), the slope at x = 0 blows up at time one (our own).

**Wikipedia:** [Burgers' equation](https://en.wikipedia.org/wiki/Burgers%27_equation). It says: “This is an implicit relation that determines the solution of the inviscid Burgers' equation provided characteristics don't intersect.”

**Sources:** none listed. No primary source with a working link was found.

### Decay at infinity makes exterior harmonic boundary values unique

**Remember:** Treat infinity as another boundary with value zero.

*Rules out counterexamples.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation), 35J25. arXiv math.AP. Level 2: later undergraduate.

**Definition.** An exterior Dirichlet solution is harmonic outside a bounded obstacle, takes the prescribed boundary values continuously, and tends to zero at infinity. The decay acts as a zero boundary value on a sphere at infinity.

**Problem.** Outside a bounded obstacle in three dimensions, at most one harmonic function has the prescribed boundary values and tends to zero at infinity.

**How the definition helps.** The difference of two solutions is harmonic, zero on the obstacle, and below any ε in size on a large enough sphere (our own). The maximum principle between obstacle and sphere bounds it by ε, so it is zero (our own). Without decay, both 0 and 1 − 1/r solve the zero problem outside the unit ball (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “the solution approaches 0 as r approaches infinity”

**Sources:** none listed. No primary source with a working link was found.

### Mean values make harmonic functions smooth

**Remember:** A smooth radial average leaves a harmonic function unchanged.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average over every sphere centered there whose closed ball lies in the domain. Then it also equals every smooth radial weighted average of itself, since such an average mixes sphere averages (our own).

**Problem.** A continuous function with the harmonic mean value property has derivatives of every order in the interior.

**How the definition helps.** Convolving with a smooth radial weight of total mass one returns the function itself, so the function is as smooth as that convolution (our own). Every derivative falls on the smooth weight, not on the function (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “In other words, we can take the weighted average of u about a point and recover u(x).”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### The Poisson kernel makes harmonic functions locally equal power series

**Remember:** Expand the boundary weight to get a power series inside.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** In the unit ball of ℝⁿ, the Poisson kernel P(x,ζ) = (1 − \|x\|²)/\|x − ζ\|ⁿ weights each boundary point ζ, with surface area normalized to one. A harmonic function’s interior value is the integral of its boundary values against this weight, so all dependence on x sits in an explicit kernel.

**Problem.** Every harmonic function on a Euclidean domain is real analytic, meaning it equals a convergent power series near each interior point.

**How the definition helps.** Near the center, the kernel expands as a power series in x that converges uniformly in ζ (our own). Integrating term by term against the boundary values gives a convergent power series (our own). Translating and scaling a small ball reaches every interior point of any domain (our own).

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “P\[u\](x) = ∫ₛ u(ζ)P(x, ζ) dσ(ζ).”

**Sources:**

- [Sheldon Axler, Paul Bourdon and Wade Ramey, Harmonic Function Theory, Theorem 1.28](https://www.axler.net/HFT.pdf)

### The squared gradient turns the Dirichlet problem into minimization

**Remember:** A harmonic function is perpendicular in energy to zero-boundary changes.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation), 35J25. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Dirichlet energy is half the integral of \|∇u\|², compared among smooth functions with the same boundary values. For a competitor u + h, with h zero on the boundary, the energy changes by ∫∇u·∇h plus half of ∫\|∇h\|² (our own).

**Problem.** On a smooth bounded domain, a smooth function with the specified boundary values minimizes Dirichlet energy exactly when it is harmonic.

**How the definition helps.** Integration by parts turns ∫∇u·∇h into −∫hΔu, because h vanishes on the boundary (our own). So if Δu = 0 the change is ∫\|∇h\|²/2 ≥ 0 (our own). If u minimizes, the first-order term must vanish for every h, which forces Δu = 0 (our own).

**Wikipedia:** [Dirichlet's principle](https://en.wikipedia.org/wiki/Dirichlet%27s_principle). It says: “then u can be obtained as the minimizer of the Dirichlet energy”

**Sources:** none listed. No primary source with a working link was found.

### Unit flux gives the planar Laplacian a point source

**Remember:** Unit outward flux means one unit of point source.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A radial potential in the plane, harmonic away from the origin, is a unit point source when its outward derivative integrates to one around every centered circle.

**Problem.** The normalized potential ln(r)/(2π), at distance r from the origin, satisfies ∫(ln(r)/(2π))Δφ = φ(0) for every smooth test function φ of compact support.

**How the definition helps.** Green’s identity outside a small circle moves the Laplacian from φ to the harmonic potential, leaving only terms on the circle (our own). Unit flux turns one term into the circle average of φ, which tends to φ(0) (our own). The other term is at most a constant times r\|ln r\|, which tends to zero (our own).

**Paper or page:** [Fundamental Solution to 2D Laplace's Equation](https://proofwiki.org/wiki/Fundamental_Solution_to_2D_Laplace's_Equation). It says: “Then in the distributional sense: Δ(ln r/(2π)) = δ₍₀,₀₎”

**Sources:** none listed. No primary source with a working link was found.

### Zero flux makes a harmonic sphere average constant

**Remember:** No outward flux means the sphere average cannot change with radius.

*True by definition.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Call a twice continuously differentiable function harmonic if its net outward flux is zero through the boundary of every closed ball in the domain. Flux is the surface integral of the outward derivative, and it equals the area times the radial derivative of the sphere average.

**Problem.** Each harmonic function equals its average on every sphere centered at the point, with the closed ball inside the domain.

**How the definition helps.** Zero flux makes the sphere average independent of the radius (our own). As the radius shrinks, the average tends to the center value by continuity (our own). The divergence theorem matches this definition with the usual one, Δu = 0 (our own).

**Wikipedia:** [Laplace operator](https://en.wikipedia.org/wiki/Laplace_operator). It says: “the net flux of u through the boundary ∂V (also called S) of any smooth region V is zero”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.2](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### A weighted image through the sphere gives the ball Green function

**Remember:** Sphere inversion puts the image outside and fixes its weight.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a unit source at a nonzero point y in the unit ball of ℝ³, place an image of weight 1/\|y\| at the inverted point y\* = y/\|y\|², outside the ball. The potential for −Δ is 1/(4π\|x − y\|) minus 1/(4π\|y\|\|x − y\*\|). On the unit sphere \|x − y\*\| = \|x − y\|/\|y\|, so the two terms cancel.

**Problem.** The source and its weighted image together give the ball’s Dirichlet Green function. Their potential vanishes on the sphere and has exactly one unit source inside.

**How the definition helps.** The distance identity makes the two terms equal on the sphere, so the potential vanishes there (our own). The image lies outside the ball, so inside it adds a harmonic term and no new source (our own).

**Wikipedia:** [Kelvin transform](https://en.wikipedia.org/wiki/Kelvin_transform). It says: “the inversion of a point x in ℝⁿ is defined to be x\* = (R²/\|x\|²)x.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.4](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### An opposite mirror charge gives the half-space Green function

**Remember:** Equal distances and opposite signs cancel on the plane.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a unit point source above a plane, place an opposite unit source at its mirror point below the plane and add the two free-space potentials. Each point of the plane is equally far from both sources, so the two potentials cancel there.

**Problem.** In three dimensions, the combined potential gives the decaying Dirichlet Green function for the upper half-space. It vanishes on the plane and has just the original unit source inside.

**How the definition helps.** Equal distances make the sum vanish on the plane, and the image lies below the plane, so it adds no source in the upper half-space (our own). Both potentials decay at infinity, and uniqueness under decay makes this the Green function (our own).

**Wikipedia:** [Method of images](https://en.wikipedia.org/wiki/Method_of_images). It says: “boundary conditions are satisfied by combining a solution not restricted by the boundary conditions with its possibly weighted mirror image.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.2.4](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Constant Green function flux leaves one unknown boundary average

**Remember:** Spread the unit flux evenly, and only the average remains.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** On a smooth bounded connected domain, take G with ΔG a unit point source and constant outward derivative 1/A, where A is the boundary area. Zero outward derivative is impossible, because the divergence theorem forces total flux one.

**Problem.** A smooth harmonic function’s value at the source equals its boundary average minus a boundary integral. The integrand is G times the function’s outward derivative.

**How the definition helps.** Green’s second identity gives u at the source as the boundary integral of u ∂G/∂n minus G ∂u/∂n. Constant ∂G/∂n turns the first term into the boundary average of u. The work goes into solving the compatible Neumann problem for the smooth correction to the point source (our own).

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “A convenient choice is ∂G(y,η)/∂n = 1/𝒜”

**Sources:** none listed. No primary source with a working link was found.

### Zero boundary values leave only one Green boundary term

**Remember:** Set Green’s function to zero where the boundary data are known.

*True by definition.* MSC 35J08 (Green's functions for elliptic equations), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** For an interior point x, the Dirichlet Green function G is the point-source solution at x minus a harmonic correction. The correction has the same boundary values as the point-source solution, so G is zero on the boundary.

**Problem.** On a smooth bounded domain, suppose u is harmonic and smooth up to the boundary. Its value at x equals the boundary integral of u times the outward derivative of G, with ΔG a positive unit source.

**How the definition helps.** Green’s second identity writes u(x) with two boundary terms, u ∂G/∂n and G ∂u/∂n. G = 0 removes the second term, whose normal derivative of u is not given. The work goes into solving for the harmonic correction (our own).

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “vanishes on the boundary of U”

**Sources:** none listed. No primary source with a working link was found.

### Mean-zero normalization makes Neumann solutions unique

**Remember:** Normal derivatives miss constants, so fix the mean.

*Rules out counterexamples.* MSC 35J25 (Boundary value problems for second-order elliptic equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A mean-zero Neumann solution on a smooth bounded domain Ω is harmonic, has outward normal derivative g on the boundary, and has ∫Ω u = 0. The mean condition removes the additive constant that the normal derivative cannot see (our own).

**Problem.** On a smooth bounded connected domain, prescribe a smooth outward normal derivative whose integral over the boundary is zero. Exactly one function with zero Laplacian and mean zero has that derivative.

**How the definition helps.** The difference of two solutions has zero Laplacian and zero normal derivative, so integration by parts gives it zero gradient (our own). Connectedness makes it constant, and zero mean makes it zero. The Neumann existence theorem gives a solution, and subtracting its mean gives the normalized one.

**Wikipedia:** [Laplace's equation](https://en.wikipedia.org/wiki/Laplace%27s_equation). It says: “For the Neumann problem, uniqueness holds only up to an additive constant.”

**Sources:** none listed. No primary source with a working link was found.

### A positive Gaussian spreads nonzero heat everywhere at once

**Remember:** The Gaussian gives positive weight even to distant heat.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For t &gt; 0, Gaussian heat evolution averages the initial temperature against the Gaussian density with covariance 2tI centered at the observation point. This density is strictly positive everywhere, so every point gets positive weight from every other.

**Problem.** For bounded continuous initial temperatures that are nonnegative and positive somewhere, Gaussian heat evolution is strictly positive everywhere at every positive time.

**How the definition helps.** By continuity the initial data are positive on an open set, and the weight there is strictly positive (our own). The data are nonnegative elsewhere, so the average is strictly positive at every point and positive time (our own).

**Wikipedia:** [Heat kernel](https://en.wikipedia.org/wiki/Heat_kernel). It says: “which has the form of a time-varying Gaussian function”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### A unit mass heat kernel conserves total heat

**Remember:** Each point source gives back all its heat when integrated.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The Gaussian heat solution adds Gaussians centered at the source points, each weighted by the initial temperature there. Each Gaussian has total integral one, so it carries exactly its own unit of heat.

**Problem.** For bounded, continuous, integrable initial data on all of Euclidean space, the Gaussian heat solution has the same spatial integral at every positive time.

**How the definition helps.** Integrating in space first gives one for each Gaussian, which leaves the integral of the initial data (our own). Absolute integrability permits the swap of the two integrals by Fubini’s theorem (our own).

**nLab:** [heat equation](https://ncatlab.org/nlab/show/heat+equation). It says: “Its fundamental solution is called the heat kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Concentrating Gaussian weights give back the initial temperature

**Remember:** A unit heat weight contracts onto its starting point.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The full-space heat kernel is an approximate identity, a family of nonnegative weights with total integral one. As time tends to zero, its mass outside each fixed neighborhood of the origin tends to zero.

**Problem.** Heat evolution by Gaussian averaging converges to bounded continuous initial data, uniformly on each compact set, as time tends to zero.

**How the definition helps.** Nearly all the weight falls where the temperature is close to its value at the observation point (our own). Uniform continuity on a neighborhood of each compact set controls that part, and boundedness controls the small tail (our own).

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The fundamental solution of a heat equation is called the heat kernel.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Matching corner data let the half-line heat solution stay continuous

**Remember:** At a corner, the two prescribed temperatures must agree.

*Rules out counterexamples.* MSC 35K05 (Heat equation), 35K20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Initial and boundary values are compatible at a corner when they agree there; for zero endpoint temperature on the half-line this means f(0) = 0. Exactly then the odd reflection of f is continuous across zero (our own).

**Problem.** On the closed half-line, take bounded continuous initial data and zero endpoint temperature. A continuous heat solution smooth in the interior exists exactly when the corner data agree.

**How the definition helps.** With f(0) = 0, full-line Gaussian evolution of the continuous odd reflection takes the initial values continuously and stays odd, so it vanishes at the endpoint (our own). If f(0) ≠ 0, the initial and endpoint values give different limits at the corner, so no solution is continuous there (our own).

**Wikipedia:** [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “and suitable initial data f(x) (e.g. for which f(0) = f(1) = 0)”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative Robin coefficients keep the heat norm from growing

**Remember:** A nonnegative Robin coefficient can only drain squared heat.

*Rules out counterexamples.* MSC 35K05 (Heat equation), 35K20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A dissipative Robin condition sets the outward normal derivative plus αu to zero on the boundary, with α ≥ 0. Then the boundary flux term u ∂u/∂n equals −αu², which is never positive (our own).

**Problem.** For classical heat flow on a smooth bounded region with a dissipative Robin condition, the integral of the squared temperature never increases.

**How the definition helps.** With diffusivity one, the time derivative of half ∫u² is −∫\|∇u\|² minus the boundary integral of αu², and both terms are nonpositive (our own). For α = −tanh(1) on \[−1, 1\], the solution exp(t) cosh(x) grows (our own).

**Wikipedia:** [Robin boundary condition](https://en.wikipedia.org/wiki/Robin_boundary_condition). It says: “a weighted combination of Dirichlet boundary conditions and Neumann boundary conditions”

**Sources:** none listed. No primary source with a working link was found.

### Projecting onto heat eigenfunctions separates even the forcing

**Remember:** Each sine receives only its own part of the forcing.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** On an interval with zero endpoint values, a mode coefficient is the integral against a normalized sine eigenfunction of −∂²/∂x². Each sine vanishes at the endpoints and satisfies −s″ = λs, so testing against it turns ∂²/∂x² into multiplication by −λ.

**Problem.** For a smooth solution of uₜ = κuₓₓ + f with zero endpoint values, each sine coefficient a satisfies a′ = −κλa + b. Here κ is the diffusivity, λ is the sine’s eigenvalue, and b is the corresponding coefficient of f.

**How the definition helps.** Two integrations by parts move ∂²/∂x² onto the sine with no boundary terms, since both sine and solution vanish at the endpoints (our own). So each coefficient of uₜ = κuₓₓ + f obeys a′ = −κλa + b (our own).

**Wikipedia:** [Separation of variables](https://en.wikipedia.org/wiki/Separation_of_variables). It says: “which are a sequence of linear differential equations that can be readily solved with, for instance, Laplace transform, or integrating factor.”

**Sources:** none listed. No primary source with a working link was found.

### Reflection builds both half-line heat boundary conditions

**Remember:** Odd reflection zeroes the value; even reflection zeroes the slope.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For bounded continuous f on the closed half-line, the even reflection is f(\|x\|) on the line. The odd reflection is f(x) for x &gt; 0, −f(−x) for x &lt; 0 and zero at the origin. Heat evolution on the line keeps either symmetry, because the Gaussian weight is even (our own).

**Problem.** For positive time, full-line heat evolution of the odd reflection has value zero at the endpoint. Evolution of the even reflection has outward derivative zero there.

**How the definition helps.** An odd function vanishes at zero, and a differentiable even function has zero derivative there (our own). The work goes into the full-line heat formula and its smoothness for positive time (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “it satisfies the homogeneous Dirichlet boundary conditions u(0, t) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### The Gaussian integral smooths even bounded discontinuous heat data

**Remember:** Differentiate the Gaussian, not the starting temperature.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For t &gt; 0, heat evolution averages the initial temperature against a Gaussian density with covariance 2tI centered at the observation point. The observation point and time enter only through this smooth weight, never through the data.

**Problem.** The Gaussian heat evolution of any bounded measurable initial data has derivatives of every order in space and time at positive times.

**How the definition helps.** Differentiate under the integral, so every derivative falls on the Gaussian (our own). Near any fixed positive time each Gaussian derivative is bounded by an integrable weight, and the data are bounded, which justifies this (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “the jump is immediately smoothed out”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### The parabolic boundary leaves the final temperature free

**Remember:** For heat flow, check the initial slice and the sides.

*Makes the theorem clean to state or prove.* MSC 35K05 (Heat equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The parabolic boundary of a closed space-time cylinder is its initial slice plus its side, the spatial boundary at every time up to the final time. It leaves out the inside of the final slice, because a maximum there still has uₜ ≥ 0 and Δu ≤ 0 (our own).

**Problem.** A classical heat solution continuous on a closed bounded cylinder attains its maximum somewhere on the parabolic boundary. Its initial and side values therefore determine at most one solution.

**How the definition helps.** For v = u − εt, a maximum off the parabolic boundary would have vₜ ≥ 0 and Δv ≤ 0, contradicting vₜ − Δv = −ε (our own). A maximum exists because the cylinder is compact, and letting ε tend to zero gives the result for u (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “the maximum value that previously occurred in R”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.3.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Odd periodic extension gives a common period for fixed strings

**Remember:** Two fixed-end reflections give one full wave period.

*True by definition.* MSC 35L05 (Wave equation), 35L20. arXiv math.AP. Level 2: later undergraduate.

**Definition.** Extend the initial displacement and velocity of a string of length L by odd reflection about both ends. The result is odd, 2L-periodic, and has zero average over each period.

**Problem.** A classical wave on a string of length L with both ends fixed has time period 2L/c. Here c is the wave speed.

**How the definition helps.** In d’Alembert’s formula, after time 2L/c the displacement terms shift by a full period, and the velocity integral gains whole periods with zero average (our own). Odd reflection about each end keeps the ends fixed (our own).

**Paper or page:** [D'Alembert's Formula](https://proofwiki.org/wiki/D'Alembert's_Formula). It says: “The above solution formula is called d'Alembert's formula.”

**Sources:**

- [Richard L. Herman, Introduction to Partial Differential Equations, §2.7](https://math.libretexts.org/Bookshelves/Differential_Equations/Introduction_to_Partial_Differential_Equations_%28Herman%29/02%3A_Second_Order_Partial_Differential_Equations/2.07%3A_dAlemberts_Solution_of_the_Wave_Equation)

### Shrinking energy balls prove that waves travel at finite speed

**Remember:** Shrink the ball at wave speed and its energy cannot grow.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For a wave of speed c, local energy at time t is the integral of (uₜ² + c²\|∇u\|²)/2 over the ball of radius c(T − t) around the observation point. The ball shrinks at wave speed, so its moving edge loses at least as much energy as flux can carry in.

**Problem.** Suppose two classical waves solve the same free wave equation throughout the shrinking balls until time T. Matching initial displacement and velocity on the starting ball gives equal displacement at its center at time T.

**How the definition helps.** Differentiating gives the flux through the sphere minus the energy left behind by the shrinking edge, and 2ab ≤ a² + b² makes this nonpositive (our own). The difference of two waves starts with zero energy, so its energy stays zero and its derivatives vanish (our own). It keeps its zero initial value up to the center at time T (our own).

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The characteristics of the PDE are x ± ct = const”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Spherical averaging leaves no wave tail in three dimensions

**Remember:** A sphere’s average sees the sphere, not the ball inside.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** The spherical mean of a function at x and radius r is its average over the sphere of radius r centered at x. It uses only the values on that sphere, not those inside it.

**Problem.** In three dimensions, take a unit-speed wave with zero initial displacement and smooth initial velocity. At time t its value depends only on the initial velocity on the sphere of radius t around the observation point.

**How the definition helps.** Kirchhoff’s formula gives the displacement at time t as t times the spherical mean of the initial velocity at radius t (our own). A spherical mean sees only its sphere, so data inside it do not matter (our own).

**Wikipedia:** [Wave equation](https://en.wikipedia.org/wiki/Wave_equation). It says: “It does not depend upon data on the interior of this sphere.”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.1](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Starting each wave response with velocity handles a time-dependent force

**Remember:** Start a fresh velocity impulse for each moment of forcing.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For each earlier time s, start a free wave at time s with zero displacement and initial velocity equal to the force at time s. The forced solution is the integral of these waves over s from zero to t.

**Problem.** For smooth forcing on the line and zero initial displacement and velocity, the time integral of these responses solves the forced wave equation.

**How the definition helps.** The first time derivative has no endpoint term, because the newest wave has zero displacement (our own). The second time derivative picks up the newest wave’s initial velocity, which is the force (our own). Differentiating under the integral uses the free wave formula and smooth forcing (our own).

**Wikipedia:** [Duhamel's principle](https://en.wikipedia.org/wiki/Duhamel%27s_principle). It says: “That contribution comes from changing the velocity of the string by f(x, T) dT.”

**Sources:** none listed. No primary source with a working link was found.

### Wave coordinates split right and left

**Remember:** Zero mixed derivative leaves one function of each coordinate.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For wave speed c &gt; 0, use ξ = x + ct and η = x − ct as coordinates, each constant along one family of wave lines. In them the wave equation becomes ∂²u/∂ξ∂η = 0.

**Problem.** Every twice continuously differentiable solution of ∂²u/∂t² = c² ∂²u/∂x² on the whole line has the form F(x + ct) + G(x − ct). This is a sum of two oppositely traveling profiles.

**How the definition helps.** A zero mixed derivative means ∂u/∂ξ depends only on ξ, so u is a function of ξ plus a function of η. The chain rule converts the original second derivatives into this mixed derivative (our own).

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The general solution of this PDE is u(μ,η) = F(μ) + G(η)”

**Sources:** none listed. No primary source with a working link was found.

### Wave energy gives uniqueness from fixed boundary and initial data

**Remember:** Zero wave energy keeps the difference frozen at zero.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Wave energy is half the integral of uₜ² + c²\|∇u\|², with c the wave speed. Its time derivative is c² times the boundary integral of uₜ times the normal derivative, because the wave equation cancels the interior terms (our own).

**Problem.** On a smooth bounded region, classical waves with the same fixed boundary values, initial displacement and initial velocity are equal.

**How the definition helps.** For the difference of two waves, uₜ is zero on the boundary, because the boundary values agree for all time (our own). So the energy keeps its initial value zero (our own). Zero energy forces zero derivatives, so the difference keeps its zero initial displacement (our own).

**Wikipedia:** [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “The energy method is useful for establishing both uniqueness”

**Sources:**

- [Lawrence C. Evans, Partial Differential Equations, §2.4.3](https://moodle2.units.it/pluginfile.php/562772/mod_resource/content/1/Evans%20L.C.%20Ch2-b.pdf)

### Weak wave solutions accept even discontinuous initial displacement

**Remember:** Test the equation without differentiating the displacement.

*Makes the theorem clean to state or prove.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A weak wave solution of speed c &gt; 0 is a locally integrable u on ℝ × (0,∞) with ∫u(φₜₜ − c²φₓₓ) = 0 for each smooth φ of compact support there. All derivatives fall on φ, so u may jump.

**Problem.** For initial displacement f integrable on bounded intervals of the line, u(x,t) = (f(x+ct) + f(x−ct))/2 is a weak solution. Against each smooth spatial test of bounded support, its initial displacement is f and its initial velocity is zero.

**How the definition helps.** Approximate f by smooth data, for which d’Alembert’s formula gives classical solutions (our own). These converge to u in integral on bounded sets, so the weak identity passes to the limit (our own).

**Paper or page:** [Locally Integrable (f(x+ct) + f(x-ct))/2 is Weak Solution to Wave Equation](https://proofwiki.org/wiki/Locally_Integrable_(f(x+ct)_+_f(x-ct))/2_is_Weak_Solution_to_Wave_Equation). It says: “Then it has a weak solution of the form: u(x, t) ≔ (f(x + ct) + f(x − ct))/2”

**Sources:** none listed. No primary source with a working link was found.

### Fundamental solutions solve forced equations by convolution

**Remember:** Solve once for a point source, then convolve with the data.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** For a nonzero linear differential operator P with constant coefficients, a fundamental solution is a distribution E with PE = δ, the response to a unit point source. Derivatives of a convolution fall on one factor, so P(E ∗ f) = (PE) ∗ f.

**Problem.** If f is a distribution with compact support, the convolution u = E ∗ f satisfies Pu = f as distributions.

**How the definition helps.** P(E ∗ f) = (PE) ∗ f = δ ∗ f = f, because δ is the identity for convolution (our own). The Malgrange–Ehrenpreis theorem supplies E for every such P.

**Wikipedia:** [Fundamental solution](https://en.wikipedia.org/wiki/Fundamental_solution). It says: “Once the fundamental solution is found, it is straightforward to find a solution of the original equation, through convolution of the fundamental solution and the desired right hand side.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting wave responses removes sources

**Remember:** Subtract two responses to the same source and the source disappears.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs), 53C50. arXiv math-ph, gr-qc. Level 3: graduate.

**Definition.** For a linear wave operator P, a Green operator G satisfies PGf = f and GPf = f for smooth compactly supported f. The retarded one puts Gf in the causal future of the source, and the advanced one in its past. The causal propagator is retarded minus advanced, so P applied to it gives f − f = 0.

**Problem.** For a wave operator with both Green operators, the causal propagator sends every smooth compactly supported source to a solution with zero source.

**How the definition helps.** By linearity, P sends the difference of the two responses to f − f = 0. The work lies in constructing both Green operators with the stated supports.

**nLab:** [causal propagator](https://ncatlab.org/nlab/show/causal+propagator). It says: “If the advanced/retarded Green functions Gₚ± exists, then the difference Gₚ ≔ Gₚ,₊ − Gₚ,₋ is called the causal Green function.”

**Sources:** none listed. No primary source with a working link was found.

### Normal form guarantees analytic existence

**Remember:** Solve for the top time derivative before counting power series coefficients.

*Rules out counterexamples.* MSC 35A10 (Cauchy-Kovalevskaya theorems). arXiv math.AP. Level 3: graduate.

**Definition.** An analytic equation of order k is in normal form when it solves for the pure k-th time derivative. The right side may use derivatives of total order at most k but time order below k. So each time coefficient of a power series solution is fixed by earlier ones.

**Problem.** An analytic equation in this normal form has a unique local analytic solution for analytic initial time derivatives through order k minus one.

**How the definition helps.** Normal form fixes the coefficients, and the Cauchy–Kovalevskaya theorem proves that the series converges. The heat equation is not in normal form, since its time order is below its spatial order (our own). For initial profile 1/(1 − x), its j-th time coefficient at zero is (2j)!/j!, so the series diverges for every t ≠ 0 (our own).

**Wikipedia:** [Cauchy–Kovalevskaya theorem](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Kovalevskaya_theorem). It says: “However this formal power series does not converge for any non-zero values of t”

**Sources:** none listed. No primary source with a working link was found.

### Nehari minimizers solve the equation

**Remember:** Nehari points are stationary along their own ray.

*True by definition.* MSC 35A15 (Variational methods applied to PDEs), 35B38. arXiv math.AP. Level 3: graduate.

**Definition.** For a twice continuously differentiable energy J on a real Banach space, the Nehari set holds the nonzero u with J′(u)\[u\] = 0. These are the points where J is stationary along their own ray t ↦ tu at t = 1.

**Problem.** Suppose u minimizes J locally on the Nehari set and the second derivative of t ↦ J(tu) at t = 1 is nonzero. Then J′(u) vanishes in every direction.

**How the definition helps.** In the direction u, J′(u) vanishes, but the derivative of the constraint J′(u)\[u\] equals the nonzero second derivative of t ↦ J(tu) at 1 (our own). So the Lagrange multiplier rule applies, and testing it on u forces the multiplier to be zero (our own).

**Wikipedia:** [Nehari manifold](https://en.wikipedia.org/wiki/Nehari_manifold). It says: “Solutions are precisely the critical points for the energy functional”

**Paper or page:** [Nehari-type ground state solutions for asymptotically periodic bi-harmonic Kirchhoff-type problems in ℝᴺ](https://arxiv.org/abs/2501.11693v3). It says: “then u₀ is a critical point of J.”

**Sources:** none listed. No primary source with a working link was found.

### Separating tests ensure weak solvability

**Remember:** One condition closes the range, and the other makes it dense.

*Rules out counterexamples.* MSC 35A15 (Variational methods applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** A continuous bilinear form B on real Hilbert spaces of trial vectors and tests is weakly coercive when it passes two tests. First, some c &gt; 0 gives sup{ \|B(u,v)\| : ‖v‖ = 1 } ≥ c‖u‖ for every trial vector u, so the tests see every trial vector. Second, every nonzero test v has B(u,v) ≠ 0 for some trial vector u, so the trial vectors see every test.

**Problem.** For every continuous linear functional F on the test space, there is exactly one trial vector u satisfying B(u,v) = F(v) for every test v.

**How the definition helps.** The first test makes the map u ↦ B(u,·) injective with closed range, and the second makes that range dense, so the map is onto (our own). Without the second test it fails: B(u,v) = ⟨Su,v⟩ with S the right shift on square-summable sequences preserves norms, but its range misses the first coordinate vector (our own).

**Wikipedia:** [Babuška–Lax–Milgram theorem](https://en.wikipedia.org/wiki/Babu%C5%A1ka%E2%80%93Lax%E2%80%93Milgram_theorem). It says: “Suppose also that B is weakly coercive”

**Sources:**

- [Ivo Babuška, Error-bounds for finite element method](https://doi.org/10.1007/BF02165003)

### A parametrix transfers smoothness to solutions

**Remember:** Apply the approximate inverse and the error is already smooth.

*True by definition.* MSC 35A17 (Parametrices in context of PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** A local left parametrix for P is an operator Q that keeps smooth functions smooth and inverts P up to a smoothing error. That is, QP = I + R, where R turns every distribution (generalized function) into a smooth function.

**Problem.** Let P be a linear differential operator with smooth coefficients whose highest-order polynomial in the derivative variables never vanishes in a nonzero real direction. If Pu is smooth in an open set, the distribution u is smooth there.

**How the definition helps.** Locally, u = Q(Pu) − Ru, and both terms are smooth: the first because Q keeps Pu smooth, the second because R smooths (our own). The real work is building Q from the nonvanishing highest-order polynomial, which the quote calls ellipticity.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “and a is elliptic, then Tₐ has a parametrix.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis (2021).](https://arxiv.org/abs/2107.12839v1)

### Wave front sets say when two distributions can be multiplied

**Remember:** Record each singular point together with its bad directions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** The wave front set of a distribution lists the pairs (x,k), a point and a nonzero covector, where the distribution fails to be smooth near x in direction k. Precisely, (x,k) is left out when some smooth compactly supported cutoff equal to one near x makes the Fourier transform decay faster than every power of frequency in an open cone around k.

**Problem.** By Hörmander’s criterion, two distributions have a well-defined product when no point carries a covector k in one wave front set and −k in the other.

**How the definition helps.** The product is the restriction of the tensor product to the diagonal, and that restriction is blocked only by pairs of covectors (k, −k) that sum to zero (our own). Hörmander’s pullback theorem allows the restriction exactly when no such pair occurs (our own).

**nLab:** [product of distributions](https://ncatlab.org/nlab/show/product+of+distributions), [Hörmander's criterion](https://ncatlab.org/nlab/show/H%C3%B6rmander%27s+criterion). It says: “the condition that the product of two distributions is well defined is that for each wave vector direction in the wave front set of one of the two distributions, the opposite direction must not be an element”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I, Acta Mathematica 127 (1971) 79–183](https://doi.org/10.1007/BF02392052)

### Wave fronts project to singular support

**Remember:** No bad directions means no singular point.

*Makes the theorem clean to state or prove.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** A pair (x,k), a point and a nonzero direction, lies outside the wave front set when some smooth cutoff equal to one near x makes the localized Fourier transform decay faster than every power of frequency in a cone around k. The singular support is the set of points with no neighborhood on which the distribution is smooth.

**Problem.** Forgetting the directions in the wave front set gives exactly the singular support.

**How the definition helps.** A smooth localization decays rapidly in every direction, so a smooth point carries no wave front direction. Conversely, if every direction at x passes, finitely many cones cover the unit sphere, one smaller cutoff keeps rapid decay in all of them, and Fourier inversion gives smoothness (our own).

**nLab:** [wavefront set](https://ncatlab.org/nlab/show/wavefront+set). It says: “The projection of the wave front set down to the base space is the singular support of the distribution.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Wave fronts pull back as covectors

**Remember:** Fourier directions pull back by the transpose derivative.

*Makes the theorem clean to state or prove.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** A pair (x,k), with k a nonzero covector, lies outside the wave front set when some smooth compactly supported cutoff equal to one near x makes the localized Fourier transform decay faster than every power of frequency on an open cone around k. Because k is a covector, a smooth change of coordinates ψ moves it by the transpose of the derivative ψ′.

**Problem.** Under a smooth invertible change of coordinates with smooth inverse, the wave front set of a distribution pulls back exactly as its covectors do.

**How the definition helps.** Each singular direction is a covector, and the chain rule shows that the Fourier phase changes exactly as a covector does (our own). Integration by parts gives decay in the other directions. The same bound for the inverse change gives equality.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(ψ\* u) = {(x, ᵗψ′\|ₓ η) ; (ψ(x), η) ∈ WF(u)}.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Legendrian solutions are unions of characteristics

**Remember:** Solve the equation by finding Legendrians inside its hypersurface.

*True by definition.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs), 53D10, 35F20. arXiv math.AP, math.SG. Level 3: graduate.

**Definition.** A generalized solution of a first-order equation F(x, ∂z/∂x, z) = 0 is a Legendrian submanifold of the 1-jet space lying in {F = 0}. J¹ℝⁿ has coordinates (x, p, z) and contact form α = dz − Σ pᵢ dxᵢ, and Legendrian means n-dimensional with α vanishing on it. A classical solution u gives the Legendrian 1-jet graph {(x, du(x), u(x))}.

**Problem.** The contact vector field X with α(X) = F, whose flow preserves the contact planes, is tangent to every Legendrian inside {F = 0}. So generalized solutions are swept out by integral curves of X, the characteristics of Cauchy's method.

**How the definition helps.** A contact field is tangent to a Legendrian exactly when its contact Hamiltonian vanishes there, and F vanishes on Legendrians inside {F = 0} (our own). Classically one derives the characteristic equations by differentiating the equation along a solution, but here the lemma on contact Hamiltonians carries the work (our own). Legendrians that are not graphs also let a solution continue through caustics, where the classical solution stops being single-valued (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Sophus Lie's idea was to lift the equation to 1-jet space J¹(ℝⁿ, ℝ), in which the equation F(x, y, z) = 0 specifies a 2n-dimensional hypersurface, and the problem reduces to finding Legendrian submanifolds within this hypersurface.”

**Sources:**

- [V. I. Arnold, Mathematical Methods of Classical Mechanics, 2nd ed., Graduate Texts in Mathematics 60, Springer, 1989](https://doi.org/10.1007/978-1-4757-2063-1)

### Principal symbols turn composition into multiplication

**Remember:** Every derivative that hits a coefficient lowers the order on the input.

*True by definition. Confidence: medium.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** The principal symbol of a linear differential operator of order m with smooth coefficients is the top-degree part of the polynomial obtained by writing the coefficients on the left and replacing each derivative ∂ⱼ by a variable ξⱼ. It keeps only the terms in which all m derivatives act on the input.

**Problem.** For operators of orders m and n, the degree m + n part of the composition symbol equals the product of the principal symbols.

**How the definition helps.** In a composition, a product-rule term in which a derivative hits a coefficient has degree below m + n, so the top degree sees only the product of the leading terms (our own). The full symbols need extra terms for those differentiated coefficients.

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “the principal symbol is the highest degree homogeneous component of the symbol.”

**Sources:** none listed. No primary source with a working link was found.

### Two-scale averages recover weak limits

**Remember:** Ignore the fast coordinate in the test to average it in the limit.

*True by definition.* MSC 35B27 (Homogenization in context of PDEs; PDEs in media with periodic structure), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A sequence uε in Lᵖ(Ω) two-scale converges to u(x,y) on Ω × \[0,1\]ᵈ when ∫Ω uε(x)φ(x,x/ε) dx → ∫Ω∫ u(x,y)φ(x,y) dy dx as ε → 0. This must hold for every smooth φ compactly supported in x and unit-periodic in each fast coordinate y. A test that does not depend on y then reads only the cell average of u.

**Problem.** For 1 &lt; p &lt; ∞, if a bounded sequence in Lᵖ two-scale converges to u, then it converges weakly in Lᵖ to the cell average ∫u(·,y) dy.

**How the definition helps.** Tests independent of the fast coordinate give ∫uε φ → ∫(∫u dy)φ directly. Boundedness and density extend this from smooth tests to every test in the dual space (our own).

**Paper or page:** [Homogenization of high-contrast composites under differential constraints](https://arxiv.org/abs/2104.11306v2). It says: “If $u\_\\varepsilon \\stackrel{2}{\\rightharpoonup}u$ weakly two-scale in $L<sup>p$</sup>, then $u\_\\varepsilon \\rightharpoonup \\int<sub>Q</sub> u(\\,\\cdot\\,,y)\\mathrm{d}y$ weakly in $L<sup>p</sup>(\\Omega;\\mathbb{R}<sup>N</sup>)$.”

**Sources:**

- [Elisa Davoli, Martin Kružík, Valerio Pagliari. Homogenization of high-contrast composites under differential constraints. 2104.11306v2](https://arxiv.org/abs/2104.11306v2)

### Positive eigenvalues prevent negative responses

**Remember:** Positive energy forces the negative part to vanish.

*Rules out counterexamples.* MSC 35B50 (Maximum principles in context of PDEs), 35J10. arXiv math.AP. Level 3: graduate.

**Definition.** For real bounded V on Ω, the lowest Dirichlet eigenvalue is the infimum of the energy ∫Ω (\|∇v\|² + Vv²) divided by ∫Ω v², over nonzero v ∈ H¹₀(Ω). When it is positive, every nonzero v in H¹₀(Ω) has positive energy.

**Problem.** On a smooth bounded connected domain, suppose V is bounded and the lowest eigenvalue is positive. Any weak solution of −Δu + Vu = f with nonnegative square-integrable f and nonnegative boundary values is nonnegative almost everywhere.

**How the definition helps.** Testing the equation with the negative part w = max(−u,0), which lies in H¹₀(Ω), shows that the energy of w is at most zero, so w = 0 (our own). At eigenvalue zero it fails: minus a positive first eigenfunction solves the equation with zero forcing and zero boundary values.

**Paper or page:** [Positive solutions of quasilinear elliptic equations with Fuchsian potentials in Wolff class](https://arxiv.org/abs/2204.08061v1). It says: “The weak maximum principle for $Q<sub>p,A,V</sub>$ holds true in ω:”

**Sources:** none listed. No primary source with a working link was found.

### Closing the test space lets a harmonic function test itself

**Remember:** Close the test space to let the unknown test itself.

*True by definition.* MSC 35D30 (Weak solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** On a bounded open set, the zero-boundary Sobolev space H¹₀ is the completion of smooth compactly supported functions in the norm (∫u² + \|∇u\|²)<sup>½</sup>. So every u in it is a limit of test functions and can be used as its own test.

**Problem.** Suppose u belongs to this space and the integral of ∇u · ∇φ vanishes for each smooth compactly supported φ. Then u vanishes almost everywhere.

**How the definition helps.** Take tests φₙ with ∇φₙ → ∇u in L² and pass to the limit to get ∫\|∇u\|² = 0 (our own proof). Poincaré’s inequality then gives ‖u‖₂ = 0.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “trace-zero functions in W¹˒ᵖ(Ω) can be approximated by smooth functions with compact support.”

**Sources:** none listed. No primary source with a working link was found.

### Leray's weak solutions give global existence for the Navier–Stokes equations

**Remember:** Ask only what the energy controls, and solutions exist for all time.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35Q30, 35A01. arXiv math.AP. Level 3: graduate.

**Definition.** A Leray solution of unforced incompressible Navier–Stokes flow on ℝ³ with viscosity ν &gt; 0 asks only for what the energy controls: u ∈ L∞ₜL²ₓ and ∇u ∈ L²ₜL²ₓ. It is divergence-free, solves the equation against smooth compactly supported divergence-free test fields, and attains its initial velocity strongly in L². It obeys ‖u(t)‖₂² + 2ν∫ₛᵗ‖∇u(τ)‖₂²dτ ≤ ‖u(s)‖₂² for s = 0 and almost every s &gt; 0, at every t ≥ s (our own).

**Problem.** Every divergence-free initial velocity in L²(ℝ³) admits a global Leray weak solution of the unforced three-dimensional Navier–Stokes equations.

**How the definition helps.** Approximate solutions obey uniform energy bounds, and these bounds are all the definition asks for, so limits of approximations qualify (our own). Leray’s compactness argument passes to the limit in the nonlinear term.

**Wikipedia:** [Navier–Stokes existence and smoothness](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness). It says: “He also proved the existence of so-called weak solutions to the Navier–Stokes equations, which may not satisfy the equations pointwise but do satisfy them in mean value.”

**Sources:**

- [J. Leray, Sur le mouvement d'un liquide visqueux emplissant l'espace, Acta Mathematica 63 (1934) 193–248](https://doi.org/10.1007/BF02547354)

### The weak formulation lets Lax–Milgram solve Poisson's equation

**Remember:** Test against every v in the same space where you look for u.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J25, 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** A weak Dirichlet solution of −Δu = f on a bounded domain Ω is a u in H¹₀(Ω), the H¹ closure of smooth compactly supported functions, with ∫Ω ∇u·∇v = ∫Ω fv for every v in H¹₀(Ω). The unknown and the tests lie in one Hilbert space, where the left side is a bounded bilinear form.

**Problem.** On a bounded domain Ω and for f in L²(Ω), the weak formulation has exactly one solution u in H¹₀(Ω). Its norm is at most a constant times the norm of f.

**How the definition helps.** Poincaré’s inequality makes ∫∇u·∇v coercive on H¹₀(Ω), so Lax–Milgram gives exactly one solution (our own). Cauchy–Schwarz and Poincaré bound v ↦ ∫fv by a constant times ‖f‖₂, which gives the estimate.

**Wikipedia:** [Weak formulation](https://en.wikipedia.org/wiki/Weak_formulation), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The appropriate space to satisfy these requirements is the Sobolev space H¹₀(Ω) of functions with weak derivatives in L²(Ω) and with zero boundary conditions”

**Sources:**

- [P. D. Lax and A. N. Milgram, Parabolic equations, in Contributions to the Theory of Partial Differential Equations, Annals of Mathematics Studies 33, Princeton University Press (1954), 167–190](https://doi.org/10.1515/9781400882182-010)

### Weak solutions and Weyl's lemma split existence from regularity

**Remember:** Move every derivative onto the test, and ask nothing of u.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J05. arXiv math.AP. Level 3: graduate.

**Definition.** A weak solution of Lu = 0 is a locally integrable u with ∫u·L\*φ = 0 for every smooth compactly supported φ, where L\* is the formal adjoint obtained by integrating by parts. All derivatives sit on φ, so u needs none.

**Problem.** Weyl’s lemma: every weak solution of Laplace’s equation agrees almost everywhere with a smooth harmonic function.

**How the definition helps.** Weak solutions need no derivatives, so Hilbert-space methods find them easily, and smoothness becomes a separate question (our own remark). Weyl’s lemma answers it for Laplace’s equation. It can fail elsewhere: the wave equation has weak solutions that are not smooth.

**Wikipedia:** [Weyl's lemma (Laplace equation)](https://en.wikipedia.org/wiki/Weyl%27s_lemma_%28Laplace_equation%29), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution), [Hypoelliptic operator](https://en.wikipedia.org/wiki/Hypoelliptic_operator). It says: “Weyl's lemma, named after Hermann Weyl, states that every weak solution of Laplace's equation is a smooth solution.”

**Sources:**

- [Weyl, H. (1940). The method of orthogonal projection in potential theory. Duke Mathematical Journal 7, 411–444.](https://doi.org/10.1215/S0012-7094-40-00725-6)

### Moving-point limits preserve viscosity inequalities

**Remember:** Let the evaluation point move with the touching test.

*True by definition.* MSC 35D40 (Viscosity solutions to PDEs), 35B30. arXiv math.AP. Level 3: graduate.

**Definition.** For functions uε on Ω, the upper half-relaxed limit at x is limsup uε(y) as ε → 0 and y → x together, and the lower one uses liminf. Because the point y moves, a test touching the limit at x is matched by tests touching uε at nearby points.

**Problem.** Take locally uniformly bounded viscosity solutions on a common open domain, for continuous operators that are nonincreasing in the second-derivative matrix and converge locally uniformly. Then the upper half-relaxed limit is a viscosity subsolution of the limit equation, and the lower one is a supersolution.

**How the definition helps.** A strict local touch at x by a smooth test gives touches of uε at nearby points along a sequence that realizes the limit (our own proof). The viscosity inequalities at those points pass to the limit because the operators converge locally uniformly.

**Paper or page:** [On the homogenization of second order level set PDE in periodic media](https://arxiv.org/abs/2011.15062v3). It says: “are sub- and supersolution, respectively, of the following problems:”

**Sources:**

- [Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions. User’s guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society, 1992.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### Touching tests preserve maxima of subsolutions

**Remember:** A test above the maximum is above whichever branch it touches.

*True by definition.* MSC 35D40 (Viscosity solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** An upper semicontinuous u is a viscosity subsolution when every C² function that equals u at a point and lies above u nearby gives a nonpositive value in the equation at that point. Only these touching tests are differentiated, never u itself.

**Problem.** Consider a second-order equation whose left side cannot increase when a positive semidefinite matrix is added to the matrix of second derivatives. The maximum of two viscosity subsolutions of this equation is again a viscosity subsolution.

**How the definition helps.** A test touching max(u,v) from above at x also touches from above whichever branch equals the maximum at x, and that branch gives the inequality (our own). The maximum may have a corner, but testing from above never differentiates it.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “if for any point x₀ ∈ Ω and any C² function φ such that φ(x₀) = u(x₀) and φ ≥ u in a neighborhood of x₀”

**Sources:** none listed. No primary source with a working link was found.

### Viscosity solutions make nonsmooth solutions unique

**Remember:** Smooth functions touching u lend it their derivatives.

*Rules out counterexamples.* MSC 35D40 (Viscosity solutions to PDEs), 35F21, 35J60. arXiv math.AP. Level 3: graduate.

**Definition.** A continuous u is a viscosity solution of F(x,u,Du,D²u) = 0 when smooth functions touching it stand in for its derivatives. Each C² function φ touching u from above at x must give F(x,u(x),Dφ(x),D²φ(x)) ≤ 0, and each one touching from below must give the reverse inequality.

**Problem.** For a large class of Hamilton–Jacobi and fully nonlinear second-order equations, viscosity solutions exist, are unique, and are stable under uniform limits. For example, \|u′\| = 1 on (−1, 1) with u(±1) = 0 has exactly one viscosity solution, 1 − \|x\|.

**How the definition helps.** For \|u′\| = 1, a valley such as \|x\| − 1 is touched from below by a constant, whose zero slope breaks the supersolution inequality, while the tent 1 − \|x\| passes both tests (our own). In general, comparison gives uniqueness, Perron’s method gives existence under suitable barriers, and the touching tests give stability (our own).

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The definition allows only for certain kind of singularities, so that existence, uniqueness, and stability under uniform limits, hold for a large class of equations.”

**Sources:**

- [Crandall, M. G.; Lions, P.-L. (1983). Viscosity solutions of Hamilton–Jacobi equations. Transactions of the American Mathematical Society 277(1), 1–42.](https://doi.org/10.1090/S0002-9947-1983-0690039-8)
- [Evans, L. C. (1980). On solving certain nonlinear partial differential equations by accretive operator methods. Israel Journal of Mathematics 36(3), 225–247.](https://doi.org/10.1007/BF02762047)
- [Crandall, M. G.; Ishii, H.; Lions, P.-L. (1992). User's guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society 27(1), 1–67.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### With distributions, every constant-coefficient operator has a fundamental solution

**Remember:** A fundamental solution produces a unit point source when the operator acts.

*Makes the theorem clean to state or prove.* MSC 35E05 (Fundamental solutions to PDEs and systems of PDEs with constant coefficients), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** A fundamental solution of P(∂) on ℝⁿ is a distribution E with P(∂)E = δ₀, the point source that sends each smooth compactly supported test φ to φ(0). Convolving E with a compactly supported source f then solves P(∂)u = f.

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

**Definition.** Transport by an invertible volume-preserving flow Φₜ carries each value of the initial scalar u₀ along its path: uₜ(Φₜ(x)) = u₀(x) for almost every starting point x. Values and volumes are both kept, so the distribution of values never changes.

**Problem.** On a periodic domain, the spatial integral of any measurable function of the transported scalar stays constant whenever its initial integral exists and is finite.

**How the definition helps.** Changing variables to the starting positions, which keeps volume, gives ∫G(uₜ) = ∫G(u₀) for every measurable G with finite initial integral (our own). For a single shear on the two-dimensional torus, the paper shows that every space-time integrable weak solution has this path form.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “In particular, f is a renormalised weak solution”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi, Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation (2025).](https://arxiv.org/abs/2307.00809v4)

### Outgoing waves make Helmholtz solutions unique

**Remember:** Outgoing waves satisfy a derivative condition that standing waves fail.

*Rules out counterexamples.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 3: graduate.

**Definition.** A solution u of the Helmholtz equation in three dimensions, with wave number k &gt; 0, satisfies the Sommerfeld radiation condition when r(∂u/∂r − iku) → 0 uniformly in direction as r → ∞. It admits outgoing waves like exp(ikr)/r and excludes standing waves like sin(kr)/r.

**Problem.** Outside a bounded smooth obstacle with connected exterior, two radiating solutions of Δu + k²u = 0 with the same boundary values agree.

**How the definition helps.** The radiation condition rules out standing waves with zero boundary values, such as sin(k(r − a))/r outside a ball of radius a (our own). For the difference of two solutions, Green’s identity and the radiation condition make the integral of its squared magnitude over distant spheres tend to zero (our own proof). Rellich’s lemma then forces the difference to vanish.

**Wikipedia:** [Sommerfeld radiation condition](https://en.wikipedia.org/wiki/Sommerfeld_radiation_condition). It says: “The Sommerfeld radiation condition is used to solve uniquely the Helmholtz equation.”

**Sources:** none listed. No primary source with a working link was found.

### Weak flux needs only traces

**Remember:** Two lifts differ by a zero-boundary test.

*True by definition. Confidence: medium.* MSC 35J67 (Boundary values of solutions to elliptic equations and elliptic systems), 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** For a square-integrable field F with square-integrable weak divergence, the outward flux on a boundary trace is ∫(F·∇v + v div F), where v is any function with that trace whose value and weak first derivatives are square-integrable. By the definition of weak divergence, this integral vanishes when v is smooth with compact support inside.

**Problem.** On a bounded domain with locally Lipschitz boundary graphs, suppose the vector field F and its weak divergence are square-integrable. The integral defines a continuous functional on boundary traces, independent of the chosen extension v.

**How the definition helps.** Two extensions differ by a zero-trace function, which is a limit of smooth compactly supported ones, and the integral vanishes on each of them (our own). Cauchy–Schwarz passes this to the limit and bounds the functional by the smallest extension norm.

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “is essentially the higher dimensional equivalent of integration by parts”

**Sources:** none listed. No primary source with a working link was found.

### An obstacle minimizer is harmonic off contact

**Remember:** Where there is room to move both ways, the Laplacian vanishes.

*True by definition.* MSC 35J86 (Unilateral problems for linear elliptic equations and variational inequalities with linear elliptic operators). arXiv math.AP. Level 3: graduate.

**Definition.** A solution of the obstacle problem minimizes ∫Ω \|∇v\|² over all v with the given boundary values (v ∈ g + H¹₀(Ω)) that stay above the obstacle ψ almost everywhere. Where the solution lies strictly above ψ, small pushes both up and down keep it admissible.

**Problem.** Where a continuous minimizer lies strictly above a continuous obstacle, it is harmonic, meaning that its Laplacian vanishes.

**How the definition helps.** On a compact set where u − ψ has a positive lower bound, u ± εφ stays admissible for small ε, so the derivative of the energy vanishes and ∫∇u·∇φ = 0 (our own). Weyl’s lemma then makes u classically harmonic there.

**Wikipedia:** [Obstacle problem](https://en.wikipedia.org/wiki/Obstacle_problem). It says: “A variational argument shows that, away from the contact set, the solution to the obstacle problem is harmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Sorting competitors orders obstacle solutions

**Remember:** Sort the competitors to sort the obstacle solutions.

*True by definition. Confidence: medium.* MSC 35J86 (Unilateral problems for linear elliptic equations and variational inequalities with linear elliptic operators), 35B51. arXiv math.AP. Level 3: graduate.

**Definition.** The obstacle problem asks for the function above a given obstacle with given boundary values that minimizes ∫\|∇v\|² among competitors with square-integrable value and weak first derivatives. If u₁ clears ψ₁ ≤ ψ₂ and u₂ clears ψ₂, then min(u₁,u₂) clears ψ₁ and max(u₁,u₂) clears ψ₂.

**Problem.** On a bounded domain with locally Lipschitz boundary graphs, take two ordered obstacles whose problems both admit a competitor with the same boundary values. Then the two minimizers are ordered in the same way almost everywhere.

**How the definition helps.** The minimum and the maximum have the same total energy as u₁ and u₂, so each is a minimizer of its own problem (our own). Strict convexity with fixed boundary data makes minimizers unique, so min(u₁,u₂) = u₁, which is the ordering.

**Wikipedia:** [Obstacle problem](https://en.wikipedia.org/wiki/Obstacle_problem). It says: “A solution to the obstacle problem is a function u ∈ K which minimizes the energy integral”

**Sources:** none listed. No primary source with a working link was found.

### Absolute minimization rejects hidden slopes

**Remember:** A global slope can hide a bump that local tests see.

*Rules out counterexamples.* MSC 35J94 (Elliptic equations with infinity-Laplacian), 35D40. arXiv math.AP. Level 3: graduate.

**Definition.** A Lipschitz extension u is absolutely minimizing when it has the least Lipschitz constant on every piece, not only overall. That is, on every relatively compact open V inside the domain, no Lipschitz v equal to u on ∂V has a smaller Lipschitz constant on V.

**Problem.** For a bounded Euclidean domain with Lipschitz boundary data, absolute minimizers solve the infinity Laplace equation in the viscosity sense. A function that only minimizes the global Lipschitz constant can fail this equation.

**How the definition helps.** Local minimality catches bumps that the global Lipschitz constant cannot see (our own). On (−2,2)², max(x,0) plus a small smooth bump with gradient below one, in a disk in the left half, has global constant one, but removing the bump lowers the disk’s constant to zero. The characterization of absolute minimizers as viscosity solutions gives the equation.

**Paper or page:** [Comparison Principles for the Finsler Infinity Laplacian with Applications to Minimal Lipschitz Extensions](https://arxiv.org/abs/2405.05684v1). It says: “In addition to the equivalences (i), (ii), and (iii) stated above, $\\varphi$-AMLE are characterized by the following condition: (iv) $u \\in \\mathrm{Sub}<sub>\\varphi</sub>(U) \\cap \\mathrm{Super}<sub>\\varphi</sub>(U)$.”

**Sources:**

- [Peter S. Morfe. Comparison Principles for the Finsler Infinity Laplacian with Applications to Minimal Lipschitz Extensions. 2405.05684v1](https://arxiv.org/abs/2405.05684v1)

### Convexity picks one Monge–Ampère branch

**Remember:** A positive determinant alone does not make a function convex.

*Rules out counterexamples.* MSC 35J96 (Monge-Ampère equations). arXiv math.AP. Level 3: graduate.

**Definition.** Among solutions of the Monge–Ampère equation det D²u = f with given boundary values, keep only the convex ones, whose matrices of second derivatives are positive semidefinite. When f &gt; 0 these matrices are then positive definite, so the equation is elliptic on them.

**Problem.** On a bounded convex domain, suppose two convex solutions are twice continuously differentiable inside and continuous up to the boundary. They agree if their determinants equal the same positive function and their boundary values agree.

**How the definition helps.** Differentiating the determinant along the segment between the two matrices turns the difference of the equations into a linear elliptic equation for the difference, and its maximum principle gives uniqueness (our own). Without convexity it fails: on the unit disk, both signs of (\|x\|² − 1)/2 give determinant one and zero boundary values (our own).

**Wikipedia:** [Monge–Ampère equation](https://en.wikipedia.org/wiki/Monge%E2%80%93Amp%C3%A8re_equation). It says: “this equation is elliptic if f is a positive function and solutions satisfy the constraint of being uniformly convex.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier heat multipliers make successive heating times add

**Remember:** Multiplying the heat multipliers adds the two times in their exponents.

*True by definition. Confidence: medium.* MSC 35K05 (Heat equation), 35K08, 47D06. arXiv math.AP. Level 3: graduate.

**Definition.** Heat flow for time t ≥ 0 on square-integrable functions on ℝⁿ multiplies the Fourier transform by exp(−t\|ξ\|²), with the Fourier kernel exp(−ix·ξ). For t &gt; 0 this equals convolution with the Gaussian heat kernel.

**Problem.** Heat flow for time s ≥ 0 followed by heat flow for time t ≥ 0 equals heat flow for time s + t. This composition law and the identity at time zero make the family a semigroup.

**How the definition helps.** Successive heating multiplies by exp(−s\|ξ\|²) and then by exp(−t\|ξ\|²), and the product is exp(−(s + t)\|ξ\|²) (our own proof). With the Gaussian kernel the same law needs completing the square (our own comparison). Matching the two definitions uses the Fourier transform of a Gaussian.

**Wikipedia:** [Heat kernel](https://en.wikipedia.org/wiki/Heat_kernel). It says: “The most well-known heat kernel is the heat kernel of d-dimensional Euclidean space ℝᵈ, which has the form of a time-varying Gaussian function,”

**Sources:** none listed. No primary source with a working link was found.

### Growth bounds restore heat uniqueness

**Remember:** Control the growth at infinity to rule out heat from nowhere.

*Rules out counterexamples.* MSC 35K05 (Heat equation). arXiv math.AP. Level 3: graduate.

**Definition.** A heat solution has Gaussian-bounded growth if for each finite time T some constants A, B &gt; 0 give \|u(x,t)\| ≤ A exp(B\|x\|²) for all x and 0 ≤ t ≤ T. Here u is continuous through time zero, with continuous first time and second space derivatives at positive times.

**Problem.** Two such whole-space solutions of the heat equation agree if they have the same initial values.

**How the definition helps.** The growth bound lets an explicit positive comparison solution dominate the difference far out, so the maximum principle on large balls makes it zero on a short interval (our own). Repeating the step covers each finite interval. Without the bound, Tychonoff’s example is a nonzero solution with zero initial data (our own).

**Wikipedia:** [Heat equation](https://en.wikipedia.org/wiki/Heat_equation). It says: “To determine uniqueness of solutions in the whole space it is necessary to assume additional conditions, for example an exponential bound on the growth of solutions”

**Sources:** none listed. No primary source with a working link was found.

### Path weights order heat solutions

**Remember:** More absorption gives less weight to every path.

*True by definition.* MSC 35K05 (Heat equation). arXiv math.AP. Level 3: graduate.

**Definition.** The Feynman–Kac formula solves the heat equation with absorption V and initial data g by averaging over Brownian paths: u(x,t) = 𝔼\[g(Bₜ) exp(−∫₀ᵗ V(Bₛ) ds)\]. Here B starts at x and has independent coordinates of variance 2s at time s. Each path’s weight exp(−∫V) shrinks when V grows.

**Problem.** For smooth bounded nonnegative absorption rates depending on position and common bounded measurable nonnegative initial data, a larger rate gives a smaller or equal solution.

**How the definition helps.** For V ≤ W, each path’s weight under W is at most its weight under V, and multiplying by g ≥ 0 and averaging keeps the inequality (our own). The Feynman–Kac theorem identifies these averages with the bounded heat solutions.

**Wikipedia:** [Feynman–Kac formula](https://en.wikipedia.org/wiki/Feynman%E2%80%93Kac_formula). It says: “the Feynman–Kac formula expresses u(x,t) as a conditional expectation of a certain random variable”

**Sources:**

- [Mark Kac, On distributions of certain Wiener functionals (1949).](https://doi.org/10.1090/S0002-9947-1949-0027960-X)

### Self-adjoint heat kernels are symmetric

**Remember:** Taking the adjoint swaps the two positions in a real heat kernel.

*True by definition. Confidence: medium.* MSC 35K08 (Heat kernel), 35P05. arXiv math.AP. Level 3: graduate.

**Definition.** The heat kernel of an operator P in L²(M,μ) is the function K(t,x,y) that represents the heat operator: (exp(−tP)f)(x) = ∫ K(t,x,y)f(y) dμ(y) for t &gt; 0. The adjoint of an integral operator with a real kernel has the same kernel with x and y swapped (our own).

**Problem.** Take a real, nonnegative, self-adjoint scalar elliptic operator of order two with smooth coefficients on a compact manifold without boundary. For t &gt; 0 its heat kernel satisfies K(t,x,y) = K(t,y,x).

**How the definition helps.** A self-adjoint P gives a self-adjoint exp(−tP) by the spectral theorem, so K(t,x,y) = K(t,y,x) almost everywhere (our own). Elliptic heat theory makes K smooth for t &gt; 0, so the equality holds everywhere.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator:”

**Sources:** none listed. No primary source with a working link was found.

### Minimizing steps pay for movement

**Remember:** Doing nothing is always a candidate and costs no movement.

*True by definition.* MSC 35K55 (Nonlinear parabolic equations). arXiv math.AP. Level 3: graduate.

**Definition.** One minimizing-movement step from a density ρ with time step τ &gt; 0 picks a density σ of the same mass and finite second moment that minimizes E(σ) + W₂(ρ,σ)²/(2τ). Here W₂² is the least ∫\|x − y\|² dπ over transport plans π from ρ to σ. Staying at ρ is always a candidate, with zero movement cost.

**Problem.** In the paper’s aggregation and diffusion scheme, suppose the initial density has finite energy and each step attains its minimum. The sum of movement penalties cannot exceed the energy lost from the initial to the final density.

**How the definition helps.** Comparing each step with staying put bounds that step’s movement penalty by its energy loss. Summing over the steps cancels all intermediate energies (our own derivation).

**Paper or page:** [Nonlinear aggregation-diffusion equations with Riesz potentials](https://arxiv.org/abs/2205.13520v1). It says: “\\mathcal F<sub>s</sub>\[\\rho \_\\tau ^k\]+\\frac1{2\\tau }\\sum <sub>h=1</sub><sup>k</sup> W<sub>2</sub><sup>2</sup>(\\rho \_\\tau ^h,\\rho \_\\tau <sup>h-1</sup>)\\le \\mathcal F<sub>s</sub>\[\\rho ^0\]”

**Sources:**

- [Yanghong Huang, Edoardo Mainini, Juan Luis Vázquez, Bruno Volzone, Nonlinear aggregation-diffusion equations with Riesz potentials (2022).](https://arxiv.org/abs/2205.13520v1)

### Accretive time steps preserve contraction

**Remember:** Each step is nonexpansive, so their limit cannot expand.

*True by definition.* MSC 35K90 (Abstract parabolic equations), 35B30. arXiv math.AP. Level 3: graduate.

**Definition.** An operator A on a Banach space is accretive when each implicit step is nonexpansive: ‖u−v‖ ≤ ‖u−v+h(Au−Av)‖ for every h &gt; 0 and all domain points u, v. Maximal accretivity also requires u + hAu to reach every value for each h. A mild solution at time t is the limit of n implicit steps of length t/n.

**Problem.** For a densely defined, single-valued, maximally accretive operator A, two mild solutions of u′ + Au = 0 stay within their initial distance.

**How the definition helps.** Each implicit step of length t/n does not increase distances, so neither do n of them nor their limit, even when the solutions have no time derivative (our own). The Crandall–Liggett theorem shows that the limit exists.

**Paper or page:** [Lipschitz stability for Bayesian inference in porous medium tissue growth models](https://arxiv.org/abs/2506.04769v1). It says: “Moreover, the family of operators Sₜ(A), t &gt; 0, is a strongly continuous semigroup of contractive mappings”

**Sources:**

- [M. G. Crandall and T. M. Liggett. Generation of Semi-Groups of Nonlinear Transformations on General Banach Spaces. American Journal of Mathematics, 1971.](https://doi.org/10.2307/2373376)

### Relabeling curves preserves curvature motion

**Remember:** An increasing relabeling leaves the unit normal unchanged.

*True by definition.* MSC 35K93 (Quasilinear parabolic equations with mean curvature operator). arXiv math.AP. Level 3: graduate.

**Definition.** Level-set mean curvature flow evolves a smooth u(x,t) by ∂u/∂t = \|∇u\| div n, where n = ∇u/\|∇u\| is the unit normal and ∇u ≠ 0. Divided by \|∇u\|, it says that each level set moves with normal speed equal to its mean curvature, which only the level sets determine.

**Problem.** Where ∇u is nonzero, replacing u by h(u) preserves the equation for every smooth h with positive derivative. If h(0) = 0, it also preserves the moving surface.

**How the definition helps.** For h′ &gt; 0, h(u) has the same unit normal, and both ∂u/∂t and \|∇u\| pick up the same factor h′(u) by the chain rule (our own). Extending this through zero gradients requires a separate definition of solution.

**Wikipedia:** [Level-set method](https://en.wikipedia.org/wiki/Level-set_method). It says: “The boundary of the shape is then the zero-level set of φ”

**Sources:**

- [Stanley Osher and James A. Sethian, Fronts propagating with curvature-dependent speed: Algorithms based on Hamilton-Jacobi formulations (1988).](https://doi.org/10.1016/0021-9991(88)90002-2)

### Real wave speeds need independent modes

**Remember:** Real speeds alone do not separate the waves.

*Rules out counterexamples.* MSC 35L40 (First-order hyperbolic systems). arXiv math.AP. Level 3: graduate.

**Definition.** The system ∂ₜu + A∂ₓu = 0, with a constant real matrix A, is strongly hyperbolic when A has a real eigenbasis, not just real eigenvalues. In that basis the system splits into scalar equations, each translating its data at a real speed.

**Problem.** On the real line, consider ∂ₜu + A∂ₓu = 0 with square-integrable initial data. Strong hyperbolicity bounds the solution norm by a fixed multiple of the initial norm at every time.

**How the definition helps.** Translation keeps the square-integral norm of each mode, and changing back to the original basis costs a fixed factor (our own). For the Jordan block with zero diagonal and upper-right entry 1, the first component picks up −t times the derivative of the second initial component, which square-integrable data do not bound (our own).

**Wikipedia:** [Hyperbolic partial differential equation](https://en.wikipedia.org/wiki/Hyperbolic_partial_differential_equation). It says: “has only real eigenvalues and is diagonalizable.”

**Sources:** none listed. No primary source with a working link was found.

### The entropy condition picks the one physical shock solution

**Remember:** Test the distance from every constant state to rule out expanding shocks.

*Rules out counterexamples.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 35L65, 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A Kružkov entropy solution of a scalar conservation law with flux f is a bounded weak solution whose distance \|u − k\| to every constant state k can only be dissipated. That is, it attains its initial data locally in L¹, and ∂ₜ\|u−k\| + div(sgn(u−k)(f(u)−f(k))) ≤ 0 in distributions for every real k.

**Problem.** For a smooth scalar flux in any dimension, every bounded measurable initial state on ℝᵈ has exactly one Kružkov entropy solution. For Burgers’ equation with rising step data, both a rarefaction fan and a moving jump satisfy the weak equation (our own).

**How the definition helps.** For Burgers’ rising step, any k strictly between the two states detects a violation at the moving jump, while the rarefaction fan satisfies every entropy inequality (our own). Kružkov’s existence and contraction theorem gives the general result (our own).

**Wikipedia:** [Rankine–Hugoniot conditions](https://en.wikipedia.org/wiki/Rankine%E2%80%93Hugoniot_conditions). It says: “a requirement for a unique single-valued solution is that the solution should satisfy the admissibility condition or entropy condition.”

**Sources:**

- [P. D. Lax, Hyperbolic systems of conservation laws II, Communications on Pure and Applied Mathematics 10 (1957) 537–566](https://doi.org/10.1002/cpa.3160100406)
- [S. N. Kružkov, First order quasilinear equations in several independent variables, Mathematics of the USSR-Sbornik 10 (1970) 217–243](https://doi.org/10.1070/SM1970v010n02ABEH002156)

### Weak conservation determines shock speed

**Remember:** Across a shock, the flux jump pays for the moving state jump.

*True by definition.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 76L05. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** A locally bounded u solves uₜ + f(u)ₓ = 0 weakly if ∫∫(uφₜ + f(u)φₓ) dx dt = 0 for every smooth compactly supported test φ. Smooth pieces satisfy the equation classically, so any mismatch can only sit on a jump.

**Problem.** Suppose a bounded weak solution of a one-dimensional conservation law jumps across a smooth moving interface and is smooth up to each side. The interface speed times the state jump equals the flux jump.

**How the definition helps.** Integrating by parts on each side of the interface leaves only one boundary term against φ: the flux jump minus the speed times the state jump (our own proof). It vanishes for every φ, so that coefficient is zero, with jumps taken as right value minus left value.

**Paper or page:** [One Dimensional Hyperbolic Conservation Laws: Past and Future](https://arxiv.org/abs/2310.16707v1). It says: “Then the left and right states u⁻, u⁺ and the speed λ satisfy the Rankine-Hugoniot equations”

**Sources:**

- [Alberto Bressan, One Dimensional Hyperbolic Conservation Laws: Past and Future.](https://arxiv.org/abs/2310.16707v1)

### Variational Dirichlet eigenvalues cannot rise when the domain grows

**Remember:** A larger domain offers more trial functions, so eigenvalues only drop.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** On a bounded open set Ω, the k-th Dirichlet eigenvalue is the least, over k-dimensional subspaces S of H¹₀(Ω), of the largest value on S of the quotient ∫\|∇u\|²/∫\|u\|². H¹₀(Ω) is the H¹ closure of smooth compactly supported functions, so extension by zero puts it inside H¹₀(Ω′) for every larger Ω′.

**Problem.** Let Ω ⊂ Ω′ be nonempty bounded open sets. For every k ≥ 1, the k-th Dirichlet eigenvalue on Ω′ is at most the k-th on Ω.

**How the definition helps.** Extension by zero keeps both integrals, so every trial subspace for Ω is also one for Ω′, and the minimum can only drop (our own). The min-max theorem, with the compact inclusion of H¹₀ into the square-integrable functions, identifies these minima with the eigenvalues.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “the first eigenvalue λ₁ minimizes the Dirichlet energy.”

**Sources:** none listed. No primary source with a working link was found.

### Variational eigenvalues bound Neumann values by matching Dirichlet values

**Remember:** Free boundaries allow more trial functions, so the eigenvalues cannot go up.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** On a bounded Lipschitz domain Ω, the k-th Neumann eigenvalue is the least, over k-dimensional subspaces of H¹(Ω), of the largest value of ∫\|∇u\|²/∫\|u\|² on the subspace. The k-th Dirichlet eigenvalue uses the same quotient but only the subspaces of the smaller space H¹₀(Ω), the H¹ closure of smooth compactly supported functions.

**Problem.** On a bounded Lipschitz domain, the k-th Neumann eigenvalue is at most the k-th Dirichlet eigenvalue for each k ≥ 1, counting multiplicities.

**How the definition helps.** The Neumann minimum runs over more subspaces, so it cannot be larger (our own). The min-max theorem identifies both minima with eigenvalues, using the compact inclusion of H¹ into the square-integrable functions that the Lipschitz boundary provides.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “Dirichlet eigenvalues are contrasted with Neumann eigenvalues: eigenvalues for the corresponding Neumann problem.”

**Sources:** none listed. No primary source with a working link was found.

### Variational Schrödinger eigenvalues cannot fall when the potential rises

**Remember:** Raising the potential raises each trial energy and cannot lower any eigenvalue.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35J10. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** For bounded real V on a nonempty bounded open set Ω, the k-th Dirichlet eigenvalue is the least, over k-dimensional subspaces S of H¹₀(Ω), of the largest value on S of the energy quotient ∫(\|∇u\|² + V\|u\|²)/∫\|u\|². The potential enters each quotient with the positive weight \|u\|².

**Problem.** Let V and W be bounded real potentials with V ≤ W almost everywhere. Then each Dirichlet eigenvalue for V is at most the matching eigenvalue for W.

**How the definition helps.** V ≤ W makes every quotient for V at most the one for W, and taking a maximum and then a minimum keeps that order (our own proof). The min-max theorem, with the compact inclusion of H¹₀ into the square-integrable functions, identifies these values with the eigenvalues.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The min-max theorem also applies to (possibly unbounded) self-adjoint operators.”

**Sources:** none listed. No primary source with a working link was found.

### The Leray projection removes pressure

**Remember:** Pressure is a gradient, so the incompressible projection erases it.

*True by definition.* MSC 35Q30 (Navier-Stokes equations), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** On a torus, the Leray projection is the orthogonal projection of square-integrable vector fields onto the divergence-free ones. It removes every gradient, because integration by parts makes each periodic gradient orthogonal to each divergence-free field.

**Problem.** For smooth periodic incompressible Navier–Stokes flow, adding a periodic gradient ∇φ to the force preserves the velocity when pressure changes from p to p+φ.

**How the definition helps.** Applying the projection to the momentum equation removes both ∇p and the added ∇φ, so the velocity equation does not change (our own). The Helmholtz decomposition then recovers the new pressure p + φ from the removed gradient part.

**Wikipedia:** [Leray projection](https://en.wikipedia.org/wiki/Leray_projection). It says: “The pressure and the divergence free condition are "projected away".”

**Sources:** none listed. No primary source with a working link was found.

### Weak transport conserves mass

**Remember:** A constant spatial test reads the total mass.

*True by definition.* MSC 35Q49 (Transport equations), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A bounded density ρ solves the transport equation with velocity b on the torus weakly when ∫₀ᵀ∫ρ(∂ₜφ + b·∇φ) dx dt + ∫ρ₀φ(·,0) dx = 0 for every smooth periodic φ supported in time in \[0,T). A test that is constant in space has b·∇φ = 0, so it reads only the total mass.

**Problem.** On a torus, let an integrable, divergence-free velocity transport a bounded initial density. Every bounded weak solution preserves its initial mass for almost every time.

**How the definition helps.** With φ(x,t) = χ(t), the identity says that the total mass has zero time derivative in the distributional sense and starts at the initial mass (our own proof). So the mass is constant for almost every time.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “(Conservation of Mass) \\quad \\int\_{\\mathbb{T}<sup>d}</sup> f(\\cdot,t)\\,dx = \\int\_{\\mathbb{T}<sup>d}</sup> f<sub>0</sub>\\,dx .”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi. Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation. 2307.00809v4](https://arxiv.org/abs/2307.00809v4)

### The Hodge star makes vacuum Maxwell equations conformally invariant

**Remember:** In four dimensions the star on 2-forms ignores metric rescaling.

*True by definition. Confidence: medium.* MSC 35Q61 (Maxwell equations), 58A10, 78A25. arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** On an oriented four-dimensional spacetime, the Hodge star sends each 2-form β to the 2-form ⋆β with α∧⋆β = ⟨α,β⟩g vol<sub>g</sub> for every 2-form α. The vacuum Maxwell equations for F are dF = 0 and d⋆F = 0, so the metric enters only through ⋆.

**Problem.** If F solves the vacuum equations for a four-dimensional spacetime metric g, it also solves them for λ²g. Here λ is any smooth positive function.

**How the definition helps.** Rescaling g by λ² scales the inner product on 2-forms by 1/λ⁴ and the volume form by λ⁴, so ⋆ on 2-forms does not change (our own). The exterior derivative d uses no metric, so both equations are unchanged.

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “the (dual) Hodge star operator ⋆ is a linear transformation from the space of 2-forms to the space of (4 − 2)-forms defined by the metric in Minkowski space (in four dimensions even by any metric conformal to this metric)”

**Sources:** none listed. No primary source with a working link was found.

### Extension energy gives fractional positivity

**Remember:** A boundary pairing becomes a weighted squared gradient upstairs.

*True by definition.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 3: graduate.

**Definition.** For 0 &lt; s &lt; 1, extend a boundary function f to the upper half-space by minimizing the weighted energy ∫\|∇U\|² y¹⁻²ˢ, where y is height. The fractional Laplacian of f is a positive constant times the limiting weighted outward derivative at y = 0. So pairing f with its fractional Laplacian gives that minimal energy, up to a positive constant.

**Problem.** For a real smooth compactly supported function on Euclidean space, the integral of its product with its fractional Laplacian is nonnegative. Only the zero function gives zero.

**How the definition helps.** Integration by parts gives the boundary integral as a positive multiple of the weighted energy of U (our own proof). Zero energy forces U to be constant, and a compactly supported boundary value then vanishes. Caffarelli and Silvestre show that this matches the Fourier definition, which multiplies by \|ξ\|²ˢ.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “The fractional Laplacian can also be defined through harmonic extensions.”

**Sources:**

- [Luis Caffarelli and Luis Silvestre, An Extension Problem Related to the Fractional Laplacian (2007).](https://doi.org/10.1080/03605300600987306)

### Exterior data fix fractional extensions

**Remember:** A nonlocal equation can see beyond the boundary.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations), 35J25. arXiv math.AP. Level 3: graduate.

**Definition.** For 0 &lt; s &lt; 1, the fractional energy E(u) = ∫∫ \|u(x)−u(y)\|²/\|x−y\|¹⁺²ˢ dx dy over ℝ² compares the values at every pair of points, near or far. The fractional Dirichlet problem on an interval minimizes E among finite-energy u equal almost everywhere to prescribed data outside the interval.

**Problem.** Smooth compactly supported exterior values on the complement of a bounded interval have a unique energy-minimizing extension, up to equality almost everywhere. Endpoint values alone do not determine the interior solution.

**How the definition helps.** Each interior value is compared with every exterior value, so the whole exterior affects the solution. For a nonnegative, nonzero smooth bump outside the interval and away from its endpoints, zero inside is not the solution, because its fractional Laplacian there is strictly negative (our own). The cited existence and uniqueness theorem supplies the extension.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “and in particular Hg ≡ g outside Ω.”

**Sources:**

- [Anders Björn, Jana Björn, Minhyun Kim. Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems. 2406.05994v3](https://arxiv.org/abs/2406.05994v3)

### Fourier multipliers factor the half Laplacian through Riesz transforms

**Remember:** Summing the products of the Riesz and derivative multipliers gives \|ξ\|.

*True by definition.* MSC 35R11 (Fractional partial differential equations), 42B20. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Define the half Laplacian and the Riesz transforms as Fourier multipliers, with kernel exp(−ix·ξ): the half Laplacian multiplies by \|ξ\|, and Rⱼ multiplies by −iξⱼ/\|ξ\| away from zero. Each operator is then a function of ξ, and composition is multiplication.

**Problem.** For every smooth, rapidly decreasing f on ℝⁿ, the half Laplacian of f equals the sum of Rⱼ(∂ⱼf) over j.

**How the definition helps.** Rⱼ∂ⱼ has multiplier (−iξⱼ/\|ξ\|)(iξⱼ) = ξⱼ²/\|ξ\|, and summing over j gives \|ξ\| (our own). Kwaśnicki’s theorem shows that this Fourier definition agrees with the singular-integral one.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “Summing over j recovers \|ξ\| f̂(ξ), hence the identity holds in the sense of tempered distributions.”

**Sources:**

- [M. Kwaśnicki (2017), Ten equivalent definitions of the fractional Laplace operator, Fractional Calculus and Applied Analysis 20, 7–51](https://doi.org/10.1515/fca-2017-0002)

### Fourier multipliers make fractional Laplacian orders add under composition

**Remember:** The multipliers multiply, so their powers add.

*True by definition. Confidence: medium.* MSC 35R11 (Fractional partial differential equations), 26A33. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, the fractional Laplacian of order s multiplies the Fourier transform by \|ξ\|²ˢ. Its domain is the set of square-integrable f for which \|ξ\|²ˢ times the Fourier transform of f is also square-integrable.

**Problem.** For s, t &gt; 0, every f in the domain for order s + t is in the domain for order t. Applying order t and then order s gives the operator of order s + t on that domain.

**How the definition helps.** Composition multiplies the multipliers, and \|ξ\|²ˢ\|ξ\|²ᵗ = \|ξ\|²⁽ˢ⁺ᵗ⁾ (our own proof). For the domain, \|ξ\|²ᵗ is at most 1 where \|ξ\| ≤ 1 and at most \|ξ\|²⁽ˢ⁺ᵗ⁾ where \|ξ\| ≥ 1. Kwaśnicki’s theorem matches this with the singular-integral definition for 0 &lt; s &lt; 1.

**Wikipedia:** [Fractional Laplacian](https://en.wikipedia.org/wiki/Fractional_Laplacian). It says: “In the literature, the definition of the fractional Laplacian often varies, but most of the time those definitions are equivalent.”

**Sources:**

- [M. Kwaśnicki (2017), Ten equivalent definitions of the fractional Laplace operator, Fractional Calculus and Applied Analysis 20, 7–51](https://doi.org/10.1515/fca-2017-0002)

### Minimum energy orders boundary currents

**Remember:** Raising every trial energy raises their minimum.

*True by definition.* MSC 35R30 (Inverse problems for PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For a boundary voltage with a finite-energy extension, the boundary quadratic form is the least energy ∫γ\|∇u\|² over all such extensions u, where γ is the conductivity. It equals the usual pairing of the voltage with the outward current, conductivity times the outward normal derivative.

**Problem.** Take two bounded scalar conductivities on a smooth bounded domain, each bounded below by a positive constant. If one conductivity is at least as large almost everywhere, its boundary quadratic form is at least as large for every admissible voltage.

**How the definition helps.** A larger conductivity raises the energy of every extension, so it raises their minimum (our own). The energy principle and integration by parts identify this minimum with the voltage–current pairing, taken weakly when the conductivity is rough.

**Wikipedia:** [Poincaré–Steklov operator](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Steklov_operator). It says: “The mapping of the surface temperature to the surface heat flux is a Poincaré–Steklov operator.”

**Sources:**

- [Bastian Harrach and Marcel Ullrich, Monotonicity-Based Shape Reconstruction in Electrical Impedance Tomography.](https://doi.org/10.1137/120886984)

### A left and a right parametrix of an operator agree modulo smoothing

**Remember:** Modulo smoothing errors, a left inverse meets a right inverse.

*True by definition.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** In a pseudodifferential calculus where smoothing operators form a two-sided ideal, S is a left parametrix of T if ST − I is smoothing, and R is a right parametrix if TR − I is smoothing. They are left and right inverses modulo that ideal.

**Problem.** If a pseudodifferential operator has both a left and a right parametrix, each inverts on both sides up to smoothing errors.

**How the definition helps.** Modulo smoothing operators, S = S(TR) = (ST)R = R, as for ordinary inverses (our own). So S − R is smoothing, and each parametrix works on both sides.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “If S is a left (right) parametrix of T, and T has a right (left) parametrix, then S is also a right (left) parametrix of T.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis, arXiv:2107.12839v1 (2021)](https://arxiv.org/abs/2107.12839v1)

### Symbol sums need no convergence

**Remember:** Match each finite truncation and let the tail drop in order.

*Makes the theorem clean to state or prove.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** A standard symbol of order m satisfies \|∂ₓᵅ∂ξᵝa\| ≤ C(1+\|ξ\|)ᵐ⁻ˡ with l = \|β\|, on each compact position set, with C depending on α, β and the set. Given symbols aⱼ of orders mⱼ decreasing to −∞, a is an asymptotic sum if, for every N, a minus the sum of the terms with j &lt; N has order m<sub>N</sub>. Only each finite truncation must be accurate, and the series need not converge.

**Problem.** Every sequence of standard symbols with orders strictly decreasing to minus infinity has an asymptotic sum, unique up to an error of every negative order.

**How the definition helps.** Multiplying each aⱼ by a cutoff that vanishes on a large enough frequency ball makes the series converge while keeping every truncation accurate (our own). Two asymptotic sums differ by a symbol of every order m<sub>N</sub>, hence of every negative order.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “there exists a symbol (not unique) a ∈ Sᵐ”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Weyl quantization makes adjoints conjugate symbols

**Remember:** A midpoint stays put when input and output swap.

*True by definition.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** Weyl quantization turns a scalar symbol a(x,ξ) on ℝⁿ into the operator with kernel K(x,y) = (2π)⁻ⁿ∫ exp(i(x−y)·ξ)a((x+y)/2,ξ) dξ, read as an oscillatory integral. It evaluates the symbol at the midpoint (x+y)/2, which is symmetric in x and y.

**Problem.** For standard scalar symbols on Euclidean space, taking the formal adjoint in Weyl quantization conjugates the symbol.

**How the definition helps.** The adjoint kernel is the conjugate of K(y,x), and both the conjugation and the swap reverse the phase, while the midpoint stays fixed (our own). What remains is the kernel of the conjugate symbol, checked on smooth rapidly decreasing functions.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “(aʷ(x, hD)u, v) = (u, āʷ(x, hD) v).”

**Sources:** none listed. No primary source with a working link was found.

### Projection gives Calderón identities

**Remember:** Take traces after reconstruction to get a projector.

*True by definition.* MSC 35S15 (Boundary value problems for PDEs with pseudodifferential operators). arXiv math.AP. Level 3: graduate.

**Definition.** For the Laplacian on a smooth bounded domain, the interior Calderón operator takes boundary data (g,h), builds the field Sh − Dg from the single- and double-layer potentials, and returns its interior boundary value and outward normal derivative. On the boundary data of an interior harmonic field it returns the data unchanged, so it is a projection.

**Problem.** Let V denote the single-layer boundary operator and K the average of the two double-layer traces. With K′ the adjoint of K, these operators satisfy KV = VK′.

**How the definition helps.** Green’s representation rebuilds each interior harmonic field from its boundary data, so applying the operator twice equals applying it once (our own). The jump relations give diagonal blocks I/2 − K and I/2 + K′, with V above the diagonal. Comparing the upper-right blocks of the square gives (I/2 − K)V + V(I/2 + K′) = V, hence KV = VK′.

**Wikipedia:** [Calderón projector](https://en.wikipedia.org/wiki/Calder%C3%B3n_projector). It says: “As the Calderón operator is a projector”

**Sources:** none listed. No primary source with a working link was found.

### Invertible mixed derivatives exclude unbounded traces

**Remember:** A full-rank phase cannot collapse a coordinate into a trace.

*Rules out counterexamples.* MSC 35S30 (Fourier integral operators applied to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** A Fourier integral operator acts by Tu(x) = ∫ exp(iΦ(x,ξ)) a(x,ξ) û(ξ) dξ, so the phase Φ says how input frequencies oscillate at each output position. The graph condition requires the matrix of mixed derivatives ∂²Φ/∂x∂ξ to be invertible, so no frequency direction is lost.

**Problem.** A real phase smooth away from zero and homogeneous of degree one defines a bounded operator on square-integrable functions under the graph condition. The amplitude must have standard order zero and compact position support, with the graph condition throughout its closed set of position and frequency directions.

**How the definition helps.** The graph condition stops the phase from collapsing a frequency direction (our own). In two dimensions the phase x₁ξ₁ ignores ξ₂ and gives restriction to the line x₂ = 0, even after an output cutoff, and this restriction is unbounded in square mean (our own). The positive result uses oscillatory estimates for composition with the adjoint.

**Wikipedia:** [Fourier integral operator](https://en.wikipedia.org/wiki/Fourier_integral_operator). It says: “if a is of order zero, it is possible to show that T defines a bounded operator from L² to L².”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Causal support and adjoints force uniqueness

**Remember:** Pair a future-supported solution with a past-supported inverse.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A retarded Green operator G for P inverts P on smooth compactly supported test sections, PGf = GPf = f, and puts Gf in the causal future of the support of f. An advanced one uses the causal past. P is Green hyperbolic when P and its formal adjoint both have advanced and retarded Green operators.

**Problem.** On a globally hyperbolic spacetime, which has no causal loops and has compact causal diamonds, a Green hyperbolic operator has unique advanced and retarded inverses.

**How the definition helps.** The difference w of two retarded responses to one source solves Pw = 0 with support in a causal future (our own). Pairing w with the advanced adjoint response to any test φ meets a compact set, so integration by parts gives ⟨w,φ⟩ = 0. Reversing time gives advanced uniqueness.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “advanced and retarded Green functions of Green hyperbolic differential operator are unique”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes.](https://doi.org/10.1007/s00220-014-2097-7)

### Transverse wave fronts allow restriction

**Remember:** Restriction sums frequencies normal to the submanifold, so those must be tame.

*Rules out counterexamples.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A covector (x,ξ) lies outside the order-s wave front set WFˢ(u) when u has Sobolev regularity of order s at x in direction ξ. Precisely, for some smooth compactly supported χ equal to one near x, the Fourier transform of χu is square-integrable with weight (1+\|η\|²)ˢ on an open cone around ξ. Conormal covectors of a submanifold, those that vanish on its tangent spaces, point in the frequency directions that restriction sums over (our own).

**Problem.** Let a smooth embedded submanifold of positive dimension have codimension c, let s &gt; c/2, and suppose WFˢ(u) contains no conormal covector of it. Then u has a restriction to the submanifold, and its order-(s − c/2) wave front set lies in the tangential parts of WFˢ(u) above it.

**How the definition helps.** Restriction sums the Fourier transform over the conormal directions, and order-s regularity there makes this sum converge when s &gt; c/2 (our own). The cited pullback theorem for the inclusion map gives the stated bound. Line measure in the plane is singular exactly at its conormal covectors, and its smooth approximations diverge on that line (our own).

**Paper or page:** [Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1). It says: “If f has constant rank l ≥ 1, then this is valid when r₂ − r₁ ≥ (n − l)/2 and r₂ &gt; (n − l)/2.”

**Sources:**

- [Stevan Pilipović and Bojan Prangoski, Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1)

### Viscosity solutions survive uniform limits, so monotone numerical schemes converge

**Remember:** Derivatives sit on test functions, so limits of solutions stay solutions.

*Makes the theorem clean to state or prove.* MSC 35D40 (Viscosity solutions to PDEs), 65N12. arXiv math.AP, math.NA. Level 4: research.

**Definition.** A continuous u is a viscosity solution if every C² test function φ touching u from above at x gives F(x,u(x),Dφ(x),D²φ(x)) ≤ 0, and every one touching from below gives ≥ 0. Subsolutions and supersolutions use one test each and need only semicontinuity. Derivatives fall on φ and not on u, so the tests pass to one-sided limits of approximations (our own).

**Problem.** Barles–Souganidis theorem (1991): let the equation have a strong comparison principle. Then a monotone, stable and consistent scheme converges locally uniformly to the viscosity solution.

**How the definition helps.** The upper and lower half-relaxed limits of the stable scheme's solutions are a subsolution and a supersolution, because monotonicity and consistency pass the touching tests to them (our own). Comparison puts the upper limit below the lower limit, and the reverse holds by construction. So the two limits coincide, which gives local uniform convergence.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “Based on their stability properties, Barles and Souganidis obtained a very simple and general proof of convergence of finite difference schemes.”

**Sources:**

- [G. Barles, P. E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations, Asymptotic Analysis 4 (1991) 271–283](https://doi.org/10.3233/ASY-1991-4305)

### Least-action updates cannot increase uniform errors

**Remember:** A minimum cannot amplify a uniform change in its inputs.

*True by definition.* MSC 35F21 (Hamilton-Jacobi equations). arXiv math.AP. Level 4: research.

**Definition.** For continuous starting data on a network of joined edges, the solution at each point and time is a minimum over all paths arriving there. Each path contributes the starting value at its origin plus its cost, which includes time spent at junctions.

**Problem.** For the paper’s network Hamilton–Jacobi evolution, the largest absolute difference between two solutions never exceeds that between their continuous starting values.

**How the definition helps.** Shifting all starting values by at most ε shifts every candidate cost by at most ε, so the minimum moves by at most ε (our own). The substantial theorem identifies this minimum formula with the equation on edges and its junction conditions.

**Paper or page:** [Large Time Behavior of Solutions to Hamilton-Jacobi Equations on Networks](https://arxiv.org/abs/2303.03872v3). It says: “for any φ ∈ C(Γ), t ∈ ℝ⁺ and a ∈ ℝ, S(t)(φ + a) = S(t)φ + a.”

**Sources:**

- [Marco Pozza, Large Time Behavior of Solutions to Hamilton-Jacobi Equations on Networks (2024).](https://arxiv.org/abs/2303.03872v3)

### Cordès coefficients restore Dirichlet uniqueness

**Remember:** Rescale toward the Laplacian until the error is a contraction.

*Rules out counterexamples.* MSC 35J15 (Second-order elliptic equations), 35D35. arXiv math.AP. Level 4: research.

**Definition.** Let A be a measurable symmetric matrix field with eigenvalues between fixed positive bounds. It satisfies the Cordès condition if a positive multiplier γ(x) brings it uniformly near the identity: ‖γ(x)A(x) − I‖ ≤ k &lt; 1 almost everywhere, in the Frobenius norm. After this rescaling the operator is the Laplacian plus an error of relative size at most k (our own).

**Problem.** On a smooth bounded convex domain, prescribe zero boundary values and square-integrable forcing f. Under the Cordès condition, the equation ∑ᵢⱼ Aᵢⱼ ∂ᵢ∂ⱼu = f holds almost everywhere and has a unique solution with square-integrable derivatives through order two.

**How the definition helps.** The rescaled equation Δu = γf − (γA − I):D²u is a contraction on convex domains, by the Miranda–Talenti estimate ‖D²u‖₂ ≤ ‖Δu‖₂ (our own). Without the condition uniqueness fails: on the three-dimensional unit ball, take radial eigenvalue six and tangential eigenvalues one. Then \|x\|²ᐟ³ − 1 is a nonzero solution with zero boundary values and square-integrable Hessian (our own).

**Paper or page:** [A least-squares Galerkin approach to gradient and Hessian recovery for nondivergence-form elliptic equations](https://arxiv.org/abs/1909.00491v2). It says: “satisfies the Cordes condition with λ = 0”

**Sources:**

- [Iain Smears and Endre Süli. Discontinuous Galerkin Finite Element Approximation of Nondivergence Form Elliptic Equations with Cordès Coefficients. 2013.](https://doi.org/10.1137/120899613)

### One distance tests boundary regularity

**Remember:** One capped distance profile traps every continuous datum.

*Makes the theorem clean to state or prove.* MSC 35J67 (Boundary values of solutions to elliptic equations and elliptic systems). arXiv math.AP. Level 4: research.

**Definition.** For the fractional p-Laplace equation on a bounded open set, with order between zero and one and p &gt; 1, the Dirichlet data are prescribed on the whole exterior. A boundary point is regular if, for every bounded continuous exterior datum with a limit at infinity, the solution tends to the datum's value there.

**Problem.** Let the test datum be distance to the boundary point, capped at one. Regularity is equivalent to its energy solution tending to zero as one approaches the point from inside.

**How the definition helps.** Every such datum lies between its value at the point plus or minus ε and plus or minus a large multiple of the capped distance (our own). Comparison passes these bounds to the solutions, so if the distance solution tends to zero, every solution tends to the right value. The cited regularity theorem identifies the energy and Perron solutions.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “where dₓ₀(x) := min {1, \|x − x₀\|}.”

**Sources:**

- [Anders Björn, Jana Björn, and Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3)

### Cone comparison permits disjoint sums

**Remember:** In the sum metric a distance cone splits into two cones.

*Makes the theorem clean to state or prove.* MSC 35J94 (Elliptic equations with infinity-Laplacian), 35D40. arXiv math.AP. Level 4: research.

**Definition.** A distance cone is a function a + b·d(x,z) with vertex z. A function u satisfies two-sided cone comparison if any cone bound on the boundary of a test region also holds inside. Test regions are relatively compact open sets not containing the vertex, and the bound may be ≤ or ≥.

**Problem.** Suppose both metric spaces have shortest paths and compact closed bounded sets, and give their product the sum of the two distances. If continuous u and v satisfy two-sided cone comparison on open domains in the two spaces, then u(x) + v(y) satisfies it on the product.

**How the definition helps.** With the sum metric, a product cone a + b(d(x,z₁) + d(y,z₂)) splits into a cone in x plus a cone in y with the same slope (our own). The cited theorem shows that comparison on each factor then passes to u(x) + v(y). This needs an argument because the product vertex can lie outside a test region while a projection lies inside a slice.

**Paper or page:** [Superposition Property in Disjoint Variables for the Infinity Laplace Equation](https://arxiv.org/abs/2508.17106v2). It says: “Similar results for functions that satisfy comparison with cones from below and from both sides hold.”

**Sources:**

- [Qing Liu, Juan J. Manfredi, Xiaodan Zhou. Superposition Property in Disjoint Variables for the Infinity Laplace Equation. 2508.17106v2](https://arxiv.org/abs/2508.17106v2)

### Energy admissibility prevents spontaneous flow

**Remember:** Zero initial energy leaves no energy for motion.

*Rules out counterexamples.* MSC 35Q30 (Navier-Stokes equations), 35D30. arXiv math.AP. Level 4: research.

**Definition.** A weak flow satisfies the momentum equation after integration against smooth test fields. It is energy-admissible if, with no force, its kinetic energy plus the viscous loss so far never exceeds its initial kinetic energy.

**Problem.** An unforced energy-admissible weak flow that starts from rest has zero velocity almost everywhere at almost every later time.

**How the definition helps.** Starting from rest, the energy inequality bounds two nonnegative quantities by zero, so the velocity vanishes almost everywhere (our own). Without the inequality this fails: for strengthened viscosity on the three-dimensional torus, the cited theorem gives infinitely many weak flows starting from rest.

**Paper or page:** [Non-uniqueness of weak solutions for a logarithmically supercritical hyperdissipative Navier-Stokes system](https://arxiv.org/abs/2406.05853v1). It says: “In particular, there are infinitely many weak solutions with zero initial condition.”

**Sources:**

- [Marco Romito, Francesco Triggiano. Non-uniqueness of weak solutions for a logarithmically supercritical hyperdissipative Navier-Stokes system. 2406.05853v1](https://arxiv.org/abs/2406.05853v1)

### Particle projection gives shared cluster velocity

**Remember:** Projecting onto cluster-constant velocities averages each cluster's free speeds.

*True by definition.* MSC 35Q31 (Euler equations). arXiv math.AP. Level 4: research.

**Definition.** Label particles on a line by cumulative mass, so that label length measures mass. The free velocity is the initial velocity plus the accumulated force per unit mass. The sticky-particle velocity is its mass-weighted orthogonal projection onto functions constant on each cluster of particles at one position.

**Problem.** In the paper’s pressureless Euler flow, each cluster of positive mass moves at the mass average of its members’ velocities before the collision correction.

**How the definition helps.** Orthogonal projection onto functions constant on a set replaces the values there by their mass-weighted average. Orthogonality to the cluster's indicator says that the velocity correction has total zero over the cluster (our own). The work lies in deriving the projection formula from the particle dynamics.

**Paper or page:** [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3), [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3). It says: “V(t) &amp; = \\Proj \_{\\mathscr {H}<sub>X(t)</sub>} U(t)”

**Sources:**

- [José Antonio Carrillo, Sondre Tesdal Galtung, Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems (2025).](https://arxiv.org/abs/2312.04932v3)

### Contractive Airy boundary maps dissipate energy

**Remember:** The boundary map may only shrink the energy flux.

*True by definition.* MSC 35R02 (PDEs on graphs and networks (ramified or polygonal spaces)). arXiv math.AP. Level 4: research.

**Definition.** On a graph made of a loop and half-lines, the Airy operator takes three derivatives along each edge. Its boundary condition is a linear map ℒ from incoming to outgoing endpoint data, each carrying a quadratic form of either sign that records energy flow (our own). ℒ is a contraction for these forms if the outgoing form of ℒv never exceeds the incoming form of v.

**Problem.** The Airy operator A is dissipative exactly when its boundary map ℒ is a contraction for the two forms. Dissipativity means Re⟨Au,u⟩ ≤ 0 for every u in the domain of A.

**How the definition helps.** Integration by parts writes Re⟨Au,u⟩ as a positive multiple of the outgoing form minus the incoming form (our own). So the contraction condition says exactly that energy does not grow. The converse uses the fact that functions on the edges can realize any allowed endpoint data.

**Paper or page:** [Airy and Schrödinger-type equations on looping-edge graphs](https://arxiv.org/abs/2410.11729v3). It says: “Aℒ is dissipative if and only if ℒ is a (𝒞₁,𝒞₀)-contraction.”

**Sources:**

- [Jaime Angulo Pava, Alexander Muñoz, Airy and Schrödinger-type equations on looping-edge graphs (2025).](https://arxiv.org/abs/2410.11729v3)

### Half-space positivity blocks false interior zeros

**Remember:** For a nonlocal equation, the sign outside the domain still counts.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** Let L be the fractional Laplacian of order s in (0, 1), which compares u(x) with u at every other point. For u antisymmetric across a plane, with opposite values at mirror points, the condition is u ≥ 0 on the whole half-space on one side, not only in Ω. Then from any point of that half-space, each positive value is nearer than its negative mirror image (our own).

**Problem.** Let u be antisymmetric and nonnegative on the chosen half-space, and let Ω be open there. Suppose Lu exists pointwise and Lu + cu ≥ 0 in Ω for a real function c. Then u &gt; 0 throughout Ω or u vanishes almost everywhere.

**How the definition helps.** At an interior zero, each positive value outweighs its farther negative mirror image, so Lu is negative there unless u vanishes almost everywhere (our own). This contradicts Lu + cu ≥ 0, since cu is zero at that point. Corollary 1.4 shows that nonnegativity only inside Ω permits an interior zero.

**Paper or page:** [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2), [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2). It says: “is equal to zero at a point in Ω, but is not identically zero in Ω.”

**Sources:**

- [Serena Dipierro, Giorgio Poggesi, Jack Thompson, Enrico Valdinoci, The role of antisymmetric functions in nonlocal equations (2023).](https://arxiv.org/abs/2203.11468v2)

### Perron envelopes preserve order

**Remember:** Higher data leave fewer upper candidates.

*True by definition.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** An upper Perron candidate is a fractional p-superharmonic function in Ω, bounded below, that lies above the data. It must lie above the prescribed values off Ω, and its lower limits at boundary points must lie above the prescribed values there. The upper Perron solution is the pointwise infimum of all candidates.

**Problem.** For bounded continuous exterior data on a bounded domain, increasing the data can only increase the upper Perron solution or leave it unchanged.

**How the definition helps.** Each candidate for the higher data also qualifies for the lower data, so the infimum for the higher data is at least as large. Requiring equality outside destroys this nesting (our own). The cited theorem identifies the two infima for bounded continuous data.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “g₁ ≤ g₂ in Ωᶜ, then Q̄ g₁ ≤ Q̄ g₂ in ℝⁿ.”

**Sources:**

- [Anders Björn, Jana Björn, and Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3)
