### Weak solutions let kinked traveling waves satisfy the transport equation

**Remember:** Move derivatives onto the test function and the traveling wave can have kinks.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35F10. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A test function φ is smooth and has compact support in the time and space variables. A locally integrable u weakly solves ∂ₜu + ∂ₓu = 0 if the integral of u(∂ₜφ + ∂ₓφ) is zero for every φ. A classical solution instead needs derivatives of u itself.

**Problem.** For every locally integrable g on ℝ, the traveling wave u(t, x) = g(x − t) is a weak solution. In particular, \|x − t\| is a solution even though it has a kink at x = t.

**How the definition helps.** The weak definition lets us state the claim for any locally integrable profile because it differentiates only the test function. In our own proof, substitute y = x − t. The integrand becomes g(y) times the time derivative of φ(t, y + t) with y fixed. The time integral is zero because φ has compact support. The work moves into the integration-by-parts formula that recovers the classical equation for smooth functions.

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

### Exponentiation turns nonlinear evolution into heat

**Remember:** Evolve the exponential by heat, then take the logarithm.

*True by definition.* MSC 35F21 (Hamilton-Jacobi equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** For ν &gt; 0, evolve the exponential of minus the initial potential divided by 2ν by the linear heat equation. Define the evolved potential as −2ν times the logarithm of that heat solution.

**Problem.** For smooth bounded initial potentials on the line, this prescription solves ∂u/∂t + \|∂u/∂x\|² ÷ 2 = ν ∂²u/∂x².

**How the definition helps.** The exponential change of variable cancels the squared derivative term, leaving the linear heat equation. In our own calculation, differentiate u = −2ν log v and substitute the heat equation for v. The heat kernel averages positive initial values, so the logarithm exists. The work lies in finding the substitution and solving the linear heat equation.

**Wikipedia:** [Cole–Hopf transformation](https://en.wikipedia.org/wiki/Cole%E2%80%93Hopf_transformation). It says: “it provides an explicit formula for fairly general solutions of the PDE in terms of the initial datum and the heat kernel.”

**Sources:**

- [Julian D. Cole, On a quasi-linear parabolic equation occurring in aerodynamics (1951).](https://doi.org/10.1090/qam/42889)

### Mean-zero normalization makes Neumann solutions unique

**Remember:** Normal derivatives miss constants, so fix the mean.

*Rules out counterexamples.* MSC 35J25 (Boundary value problems for second-order elliptic equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Prescribe the derivative perpendicular to the boundary in the outward direction. Also require the solution to have mean zero over the domain.

**Problem.** On a smooth bounded connected domain, prescribe a smooth outward normal derivative whose integral over the boundary is zero. Exactly one function with zero Laplacian and mean zero has that derivative.

**How the definition helps.** Fixing the mean removes the constant shifts that the boundary derivative cannot detect. In our own example, zero and one both have zero boundary derivative. In our own proof, integration by parts shows that the difference of two solutions has zero gradient. Connectedness makes it constant, and its mean makes it zero. The Neumann existence theorem supplies a solution, from which we subtract its mean.

**Wikipedia:** [Laplace's equation](https://en.wikipedia.org/wiki/Laplace%27s_equation). It says: “For the Neumann problem, uniqueness holds only up to an additive constant.”

**Sources:** none listed. No primary source with a working link was found.

### Wave coordinates split right and left

**Remember:** Zero mixed derivative leaves one function of each coordinate.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Fix a constant wave speed c &gt; 0. Use x + ct and x − ct as coordinates. Each stays constant along one family of lines traveled by waves.

**Problem.** Every twice continuously differentiable solution of ∂²u/∂t² = c² ∂²u/∂x² on the whole line splits into two oppositely traveling profiles.

**How the definition helps.** In the moving coordinates, the wave equation says that one mixed derivative vanishes. Integrate once in each coordinate to obtain one profile for each direction. In our own explanation, the work lies in the chain rule that converts the original second derivatives into this mixed derivative.

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The general solution of this PDE is u(μ,η) = F(μ) + G(η)”

**Sources:** none listed. No primary source with a working link was found.

### Fundamental solutions solve forced equations by convolution

**Remember:** Solve once for a point source, then convolve with the data.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** Let P be a nonzero linear differential operator with constant coefficients. A fundamental solution is a distribution E with PE = δ, where δ evaluates a test function at zero. A distribution is a continuous linear functional on smooth test functions of compact support. The classical Newtonian potential for the Laplacian instead starts with an explicit integral kernel.

**Problem.** If f is a distribution with compact support, the convolution u = E ∗ f satisfies Pu = f as distributions.

**How the definition helps.** The defining equation PE = δ gives the convolution identity P(E ∗ f) = (PE) ∗ f = f, in our own proof. Derivatives pass to the first factor, and δ is the identity for convolution. The work moves into proving these rules and into the Malgrange–Ehrenpreis theorem, which supplies E for every such P. Our own comparison is with proving Poisson’s equation by differentiating the Newtonian potential directly near its singularity.

**Wikipedia:** [Fundamental solution](https://en.wikipedia.org/wiki/Fundamental_solution). It says: “Once the fundamental solution is found, it is straightforward to find a solution of the original equation, through convolution of the fundamental solution and the desired right hand side.”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** The wave front set WF(u) of a distribution u is the set of points x with covector directions k such that the Fourier transform of u, localized near x, does not decay rapidly in direction k. So it records where u is singular and in which directions. It is a subset of the cotangent bundle minus the zero section.

**Problem.** When is the product u · v of two distributions defined?

**How the definition helps.** The wave front set gives a simple test for when a product of distributions exists. In general, two distributions cannot be multiplied. Hörmander's criterion says that the product exists when WF(u) + WF(v) does not meet the zero section. In words: at no point does a direction in one wave front set have its opposite in the other. The product is then the pullback of the tensor product along the diagonal. Without the wave front set there is no clean general statement. This criterion is the basis of the rigorous treatment of products of propagators in perturbative quantum field theory.

**nLab:** [product of distributions](https://ncatlab.org/nlab/show/product+of+distributions), [Hörmander's criterion](https://ncatlab.org/nlab/show/H%C3%B6rmander%27s+criterion). It says: “the condition that the product of two distributions is well defined is that for each wave vector direction in the wave front set of one of the two distributions, the opposite direction must not be an element”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I, Acta Mathematica 127 (1971) 79–183](https://doi.org/10.1007/BF02392052)

### Principal symbols turn composition into multiplication

**Remember:** Every derivative that hits a coefficient lowers the order on the input.

*True by definition. Confidence: medium.* MSC 35A30 (Geometric theory, characteristics, transformations in context of PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** For a linear differential operator with smooth coefficients, write the coefficients to the left of the derivatives. Replace each coordinate derivative by a corresponding variable to form a polynomial, the full symbol. The sum of the terms of highest degree is the principal symbol.

**Problem.** For operators of orders m and n, the degree m + n part of the composition symbol equals the product of the principal symbols.

**How the definition helps.** Keeping only the specified degree discards every product-rule term in which a derivative hits a coefficient. In our own proof, only derivatives acting on the input contribute to degree m + n. The full symbols require extra terms for differentiated coefficients. A separate coordinate-change argument identifies the leading polynomial intrinsically.

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “the principal symbol is the highest degree homogeneous component of the symbol.”

**Sources:** none listed. No primary source with a working link was found.

### Closing the test space lets a harmonic function test itself

**Remember:** Close the test space to let the unknown test itself.

*True by definition.* MSC 35D30 (Weak solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Start with smooth real functions compactly supported in a bounded open set. Measure the squared norm by integrating the function’s square plus its gradient’s squared length. Completing this space defines the zero-boundary Sobolev space.

**Problem.** Suppose u belongs to this space and the integral of ∇u · ∇φ vanishes for each smooth compactly supported φ. Then u vanishes almost everywhere.

**How the definition helps.** The closure definition supplies test functions converging to u together with their gradients. In our own proof, the integral passes to the limit and gives zero for the squared gradient integral. Poincaré’s inequality bounds the squared integral of u by a constant times that gradient integral. On domains with locally Lipschitz boundary graphs, the trace theorem identifies this closure with functions having zero boundary values.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “trace-zero functions in W¹˒ᵖ(Ω) can be approximated by smooth functions with compact support.”

**Sources:** none listed. No primary source with a working link was found.

### Leray's weak solutions give global existence for the Navier–Stokes equations

**Remember:** Ask only what the energy controls, and solutions exist for all time.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35Q30, 35A01. arXiv math.AP. Level 3: graduate.

**Definition.** A Leray weak solution is a divergence-free velocity field with finite energy and a square-integrable gradient. It satisfies the equations after integration against smooth divergence-free test fields. It also obeys an energy inequality (our own).

**Problem.** Leray proved in 1934 that the three-dimensional Navier–Stokes equations have a weak solution for all time, from every initial velocity of finite energy. Whether smooth solutions exist for all time is open, and it is a Millennium Prize problem.

**How the definition helps.** The weak form asks only for bounds that the energy estimate supplies, so limits of approximate solutions are again solutions (our own). So Leray could prove in 1934 that weak solutions exist for all time and for all finite-energy data. Their uniqueness and smoothness remain open, and that is the hard part. The definition thus splits the problem into an easy global existence and an open regularity question.

**Wikipedia:** [Navier–Stokes existence and smoothness](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness). It says: “He also proved the existence of so-called weak solutions to the Navier–Stokes equations, which may not satisfy the equations pointwise but do satisfy them in mean value.”

**Sources:**

- [J. Leray, Sur le mouvement d'un liquide visqueux emplissant l'espace, Acta Mathematica 63 (1934) 193–248](https://doi.org/10.1007/BF02547354)

### The weak formulation lets Lax–Milgram solve Poisson's equation

**Remember:** Test against every v in the same space where you look for u.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J25, 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** The weak formulation of −Δu = f, with u = 0 on the boundary, asks for u in the Sobolev space H¹₀(Ω) with ∫ ∇u · ∇v = ∫ f v for every v in H¹₀(Ω). H¹₀(Ω) is the space of functions that vanish on the boundary and have square-integrable weak derivatives. A weak derivative is a derivative defined through integration by parts against smooth test functions.

**Problem.** We want existence and uniqueness of a solution of Poisson's equation with zero boundary values. We also want an estimate of the solution in terms of f.

**How the definition helps.** In H¹₀ the problem fits the Lax–Milgram theorem exactly, so the theorem gives the solution at once. In this space the left side is a bounded and coercive bilinear form; coercive means that the form of u with itself is at least c‖u‖² for some c &gt; 0. So the Lax–Milgram theorem (1954) gives a unique solution and the bound ‖u‖ ≤ ‖f‖/c. Our own remark: for a symmetric form, as here, the result is just the Riesz representation theorem for the inner product given by the form. The article shows that the same theorem covers a finite linear system. The choice of space does the work: its elements vanish on the boundary and have square-integrable weak derivatives, which is exactly what the weak equation needs. Showing that the weak solution is a classical solution is a separate regularity question.

**Wikipedia:** [Weak formulation](https://en.wikipedia.org/wiki/Weak_formulation), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The appropriate space to satisfy these requirements is the Sobolev space H¹₀(Ω) of functions with weak derivatives in L²(Ω) and with zero boundary conditions”

**Sources:**

- [P. D. Lax and A. N. Milgram, Parabolic equations, in Contributions to the Theory of Partial Differential Equations, Annals of Mathematics Studies 33, Princeton University Press (1954), 167–190](https://doi.org/10.1515/9781400882182-010)

### Weak solutions and Weyl's lemma split existence from regularity

**Remember:** A weak solution satisfies the equation after the derivatives move onto test functions.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J05. arXiv math.AP. Level 3: graduate.

**Definition.** A weak solution of Lu = 0 is a locally integrable function u with ∫ u · L\*φ = 0 for every test function φ. A test function is a smooth function that is 0 outside a compact set. L\* is the formal adjoint of L, which you get by integrating by parts.

**Problem.** Show existence and regularity for elliptic equations. In particular, show that weak solutions of Laplace's equation are smooth harmonic functions.

**How the definition helps.** Weak solutions let you find a solution first and prove that it is smooth later. Weak solutions, for example of the Dirichlet problem, are easier to find by Hilbert-space methods, because u does not need derivatives (our own remark). Weyl's lemma then says that every weak solution of Laplace's equation equals a smooth solution after a change on a set of measure zero. So the problem splits into easy existence and a separate regularity theorem. The regularity step does not always work: the wave equation has weak solutions that are not smooth. Hypoellipticity is the name for operators where the regularity step works.

**Wikipedia:** [Weyl's lemma (Laplace equation)](https://en.wikipedia.org/wiki/Weyl%27s_lemma_%28Laplace_equation%29), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution), [Hypoelliptic operator](https://en.wikipedia.org/wiki/Hypoelliptic_operator). It says: “Weyl's lemma, named after Hermann Weyl, states that every weak solution of Laplace's equation is a smooth solution.”

**Sources:**

- [Weyl, H. (1940). The method of orthogonal projection in potential theory. Duke Mathematical Journal 7, 411–444.](https://doi.org/10.1215/S0012-7094-40-00725-6)

### Touching tests preserve maxima of subsolutions

**Remember:** A test above the maximum is above whichever branch it touches.

*True by definition.* MSC 35D40 (Viscosity solutions to PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Require that the value of u at each point bounds the upper limit of nearby values. Test u with twice continuously differentiable functions that equal it at the point and lie above it nearby. For a viscosity subsolution, each test must give a nonpositive value in the differential equation there.

**Problem.** Consider a second-order equation whose left side cannot increase when a positive semidefinite matrix is added to the matrix of second derivatives. The maximum of two viscosity subsolutions of this equation is again a viscosity subsolution.

**How the definition helps.** A test touching the maximum from above also touches a branch attaining that maximum. In our own proof, the branch supplies the required inequality, and the maximum retains the upper-limit bound. The maximum can have a corner even when both branches are smooth. Testing smooth functions from above avoids differentiating that corner. The matrix condition ensures the test definition agrees with the pointwise inequality for smooth functions.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “if for any point x₀ ∈ Ω and any C² function φ such that φ(x₀) = u(x₀) and φ ≥ u in a neighborhood of x₀”

**Sources:** none listed. No primary source with a working link was found.

### Viscosity solutions make nonsmooth solutions unique

**Remember:** Test the equation only on smooth functions that touch u from above or from below.

*Rules out counterexamples.* MSC 35D40 (Viscosity solutions to PDEs), 35F21, 35J60. arXiv math.AP. Level 3: graduate.

**Definition.** Let F(x, u, Du, D²u) = 0 be a degenerate elliptic equation. A continuous function u is a viscosity solution if, at each point, two conditions hold. Every smooth function that touches u from above satisfies F ≤ 0 there. Every smooth function that touches u from below satisfies F ≥ 0 there.

**Problem.** Existence, uniqueness and stability under uniform limits for nonsmooth solutions of first-order Hamilton–Jacobi equations and of fully nonlinear second-order equations.

**How the definition helps.** The viscosity conditions accept some corners and reject others, so only one solution remains. Our own remark: take \|u′\| = 1, written as \|u′\| − 1 = 0, on (−1, 1) with u(±1) = 0. There is no classical solution, and many zigzag functions satisfy the equation almost everywhere, so such solutions are not unique. Our own reading: the viscosity conditions accept peak-shaped corners, like the corner of 1 − \|x\| at 0, and reject valley-shaped ones. The article states that 1 − \|x\| is the unique viscosity solution. It is also the limit of the vanishing-viscosity problems. Uniqueness comes from a comparison principle, which for second-order equations was open until Jensen's proof in 1988.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The definition allows only for certain kind of singularities, so that existence, uniqueness, and stability under uniform limits, hold for a large class of equations.”

**Sources:**

- [Crandall, M. G.; Lions, P.-L. (1983). Viscosity solutions of Hamilton–Jacobi equations. Transactions of the American Mathematical Society 277(1), 1–42.](https://doi.org/10.1090/S0002-9947-1983-0690039-8)
- [Evans, L. C. (1980). On solving certain nonlinear partial differential equations by accretive operator methods. Israel Journal of Mathematics 36(3), 225–247.](https://doi.org/10.1007/BF02762047)
- [Crandall, M. G.; Ishii, H.; Lions, P.-L. (1992). User's guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society 27(1), 1–67.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### With distributions, every constant-coefficient operator has a fundamental solution

**Remember:** Solve once for a point source, then convolve to solve for any source.

*Makes the theorem clean to state or prove.* MSC 35E05 (Fundamental solutions to PDEs and systems of PDEs with constant coefficients), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** A fundamental solution (Green's function) of a linear differential operator P(∂) is a distribution E with P(∂)E = δ, the Dirac delta. A distribution is a generalized function, defined by how it acts on smooth test functions. The Dirac delta is the distribution that gives the value of a test function at 0. In words, E is the response of the operator to a unit point source at the origin.

**Problem.** The Malgrange–Ehrenpreis theorem says that every nonzero linear differential operator with constant coefficients has a fundamental solution. So P(∂)u = f has a solution for every compactly supported distribution f.

**How the definition helps.** Distributions give the equation P(∂)E = δ a meaning, so the theorem can be stated at all. δ is not a function, and fundamental solutions are often not functions either. With distributions, Ehrenpreis and Malgrange proved the theorem independently in 1954–1956. Their proofs used the Hahn–Banach theorem, and explicit proofs came later. The constant-coefficient condition cannot be dropped. Lewy's 1957 example is a first-order equation with polynomial coefficients. For a suitable smooth right-hand side, it has no solution on any open set.

**Wikipedia:** [Malgrange–Ehrenpreis theorem](https://en.wikipedia.org/wiki/Malgrange%E2%80%93Ehrenpreis_theorem), [Lewy's example](https://en.wikipedia.org/wiki/Lewy%27s_example). It says: “It states that every non-zero linear differential operator with constant coefficients has a Green's function.”

**Sources:**

- [Ehrenpreis, L. (1954). Solution of some problems of division. Part I. Division by a polynomial of derivation. American Journal of Mathematics 76(4), 883–903.](https://doi.org/10.2307/2372662)
- [Malgrange, B. (1956). Existence et approximation des solutions des équations aux dérivées partielles et des équations de convolution. Annales de l'Institut Fourier 6, 271–355.](https://doi.org/10.5802/aif.65)
- [Lewy, H. (1957). An example of a smooth linear partial differential equation without solution. Annals of Mathematics 66(1), 155–158.](https://doi.org/10.2307/1970121)

### Transport along paths preserves every average

**Remember:** Keep the values and the volume, and every average stays fixed.

*True by definition.* MSC 35F05 (Linear first-order PDEs). arXiv math.AP. Level 3: graduate.

**Definition.** Define a scalar transported by an invertible volume-preserving flow by copying its initial value along each particle path. A weak solution instead tests the equation against smooth functions and moves derivatives onto those functions.

**Problem.** On a periodic domain, the spatial integral of any measurable function of the transported scalar stays constant whenever its initial integral exists and is finite.

**How the definition helps.** Each particle keeps its scalar value, and the flow preserves volume. Changing variables to the starting positions proves conservation in our own argument. For a single shear on the two-dimensional torus, the paper identifies every space-time integrable weak solution on the shear interval with this path description.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “In particular, f is a renormalised weak solution”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi, Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation (2025).](https://arxiv.org/abs/2307.00809v4)

### Outgoing waves make Helmholtz solutions unique

**Remember:** Outgoing waves satisfy a derivative condition that standing waves fail.

*Rules out counterexamples.* MSC 35J05 (Laplace operator, Helmholtz equation (reduced wave equation), Poisson equation). arXiv math.AP. Level 3: graduate.

**Definition.** Fix a positive wave number k in three dimensions, and let r denote distance from the origin. A solution radiates outward if r(∂u/∂r − iku) → 0 uniformly in direction. Here i is the imaginary unit.

**Problem.** Outside a bounded smooth obstacle with connected exterior, two radiating solutions of Δu + k²u = 0 with the same boundary values agree.

**How the definition helps.** The radiation condition rules out standing waves with zero boundary values. Outside a ball of radius a, sin(k(r − a))/r gives such a wave in our own example. In our own proof, integrate by parts and use the radiation condition. The integral of the squared magnitude of the difference then tends to zero on distant spheres. Rellich’s uniqueness theorem then forces the difference to vanish.

**Wikipedia:** [Sommerfeld radiation condition](https://en.wikipedia.org/wiki/Sommerfeld_radiation_condition). It says: “The Sommerfeld radiation condition is used to solve uniquely the Helmholtz equation.”

**Sources:** none listed. No primary source with a working link was found.

### An obstacle minimizer is harmonic off contact

**Remember:** Where there is room to move both ways, the Laplacian vanishes.

*True by definition.* MSC 35J86 (Unilateral problems for linear elliptic equations and variational inequalities with linear elliptic operators). arXiv math.AP. Level 3: graduate.

**Definition.** Define the solution by minimizing the integral of the squared gradient among functions with fixed boundary values that stay above the obstacle. The contact set is where the solution equals the obstacle.

**Problem.** Where a continuous minimizer lies strictly above a continuous obstacle, it is harmonic, meaning that its Laplacian vanishes.

**How the definition helps.** Minimization permits a two-sided test wherever the obstacle leaves a gap. On each compact test support in that region, continuity gives a positive minimum gap in our own argument. Adding or subtracting a sufficiently small multiple of the test therefore respects the obstacle. Differentiating the energy gives zero for the integral of the two gradients’ dot product. Interior regularity turns this integral identity into the classical Laplace equation.

**Wikipedia:** [Obstacle problem](https://en.wikipedia.org/wiki/Obstacle_problem). It says: “A variational argument shows that, away from the contact set, the solution to the obstacle problem is harmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Convexity picks one Monge–Ampère branch

**Remember:** A positive determinant alone does not make a function convex.

*Rules out counterexamples.* MSC 35J96 (Monge-Ampère equations). arXiv math.AP. Level 3: graduate.

**Definition.** Prescribe the determinant of the matrix of second derivatives and the values on the boundary. Select the convex solutions, whose matrices of second derivatives are positive semidefinite.

**Problem.** On a bounded convex domain, suppose two convex solutions are twice continuously differentiable inside and continuous up to the boundary. They agree if their determinants equal the same positive function and their boundary values agree.

**How the definition helps.** Convexity and the positive determinant make both matrices positive definite, allowing a maximum principle. In our own proof, differentiate the determinant along the line segment joining the two matrices. Averaging the resulting positive definite coefficient matrices gives a linear elliptic equation for the difference. Its maximum principle gives uniqueness. On the unit disk, both signs of (\|x\|² − 1)/2 give determinant one and zero boundary values in our own example.

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

**Definition.** To solve the heat equation with absorption at position x and time t, start a diffusion path at x. Use Brownian motion with variance 2t per coordinate at time t, corresponding to Δ in the equation. Sample the initial value at the path’s endpoint and multiply by the exponential of minus the absorption accumulated along the path. Average over paths.

**Problem.** For smooth bounded nonnegative absorption rates depending on position and common bounded measurable nonnegative initial data, a larger rate gives a smaller or equal solution.

**How the definition helps.** Increasing absorption decreases each path’s weight. Our own comparison multiplies this inequality by the nonnegative initial value and averages over the same paths. The Feynman–Kac theorem identifies that average with the bounded heat solution.

**Wikipedia:** [Feynman–Kac formula](https://en.wikipedia.org/wiki/Feynman%E2%80%93Kac_formula). It says: “the Feynman–Kac formula expresses u(x,t) as a conditional expectation of a certain random variable”

**Sources:**

- [Mark Kac, On distributions of certain Wiener functionals (1949).](https://doi.org/10.1090/S0002-9947-1949-0027960-X)

### Minimizing steps pay for movement

**Remember:** Doing nothing is always a candidate and costs no movement.

*True by definition.* MSC 35K55 (Nonlinear parabolic equations). arXiv math.AP. Level 3: graduate.

**Definition.** Advance the density by minimizing its energy plus a movement penalty among admissible densities with the same mass and finite second moment. The penalty is the least total squared transport distance, weighted by the mass moved, divided by twice the positive time step.

**Problem.** In the paper’s aggregation and diffusion scheme, suppose the initial density has finite energy and each step attains its minimum. The sum of movement penalties cannot exceed the energy lost from the initial to the final density.

**How the definition helps.** The old density competes in the same minimization and pays zero movement penalty. Comparing the minimum with that candidate bounds each penalty by the energy lost in that step. Summing cancels all intermediate energies in our own derivation. The work lies in proving minimizers exist and their limit solves the evolution equation as the time step tends to zero.

**Paper or page:** [Nonlinear aggregation-diffusion equations with Riesz potentials](https://arxiv.org/abs/2205.13520v1). It says: “\\mathcal F<sub>s</sub>\[\\rho \_\\tau ^k\]+\\frac1{2\\tau }\\sum <sub>h=1</sub><sup>k</sup> W<sub>2</sub><sup>2</sup>(\\rho \_\\tau ^h,\\rho \_\\tau <sup>h-1</sup>)\\le \\mathcal F<sub>s</sub>\[\\rho ^0\]”

**Sources:**

- [Yanghong Huang, Edoardo Mainini, Juan Luis Vázquez, Bruno Volzone, Nonlinear aggregation-diffusion equations with Riesz potentials (2022).](https://arxiv.org/abs/2205.13520v1)

### Relabeling curves preserves curvature motion

**Remember:** An increasing relabeling leaves the unit normal unchanged.

*True by definition.* MSC 35K93 (Quasilinear parabolic equations with mean curvature operator). arXiv math.AP. Level 3: graduate.

**Definition.** Describe the moving surface as the zero set of a smooth function u of position and time. Where ∇u is nonzero, its unit normal is n = ∇u/\|∇u\|. The mean curvature equation for u is ∂u/∂t = \|∇u\| div n, where divergence sums the coordinate derivatives of the corresponding components.

**Problem.** Where ∇u is nonzero, replacing u by h(u) preserves the equation for every smooth h with positive derivative. If h(0) = 0, it also preserves the moving surface.

**How the definition helps.** An increasing relabeling preserves the unit normal and multiplies both sides of the equation by the same positive derivative. This proves invariance by the chain rule in our own argument. The work lies in deriving the scalar equation from motion by curvature. Extending it through zero gradients requires a separate definition of solution.

**Wikipedia:** [Level-set method](https://en.wikipedia.org/wiki/Level-set_method). It says: “The boundary of the shape is then the zero-level set of φ”

**Sources:**

- [Stanley Osher and James A. Sethian, Fronts propagating with curvature-dependent speed: Algorithms based on Hamilton-Jacobi formulations (1988).](https://doi.org/10.1016/0021-9991(88)90002-2)

### The entropy condition picks the one physical shock solution

**Remember:** Characteristics must run into a shock, never out of it.

*Rules out counterexamples.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 35L65, 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A conservation law wₜ + f(w)ₓ = 0 has weak solutions that jump across a curve. Each jump must obey the Rankine–Hugoniot condition on its speed. The Lax entropy condition also demands that the characteristic lines on both sides run into the jump. The characteristic speeds f′(w) on the two sides must lie on opposite sides of the shock speed.

**Problem.** Weak solutions alone are not unique. For Burgers' equation with a rising step as data, both a smooth fan (a rarefaction wave) and a moving jump are weak solutions (our own). With an entropy condition the solution is unique, and for scalar laws in any dimension Kružkov proved this in 1970.

**How the definition helps.** The entropy condition removes the jumps that physics forbids, so only one weak solution is left. For Burgers' equation, the removed case is a jump up, where characteristics leave the jump (our own). The page notes that in gas dynamics such a rarefaction shock contradicts the second law of thermodynamics. The hard part is the uniqueness proof. For scalar laws, Kružkov used a whole family of entropy inequalities and an L¹ contraction estimate (our own). For systems in several space dimensions, entropy solutions can fail to be unique (our own).

**Wikipedia:** [Rankine–Hugoniot conditions](https://en.wikipedia.org/wiki/Rankine%E2%80%93Hugoniot_conditions). It says: “a requirement for a unique single-valued solution is that the solution should satisfy the admissibility condition or entropy condition.”

**Sources:**

- [P. D. Lax, Hyperbolic systems of conservation laws II, Communications on Pure and Applied Mathematics 10 (1957) 537–566](https://doi.org/10.1002/cpa.3160100406)
- [S. N. Kružkov, First order quasilinear equations in several independent variables, Mathematics of the USSR-Sbornik 10 (1970) 217–243](https://doi.org/10.1070/SM1970v010n02ABEH002156)

### Weak conservation determines shock speed

**Remember:** Across a shock, the flux jump pays for the moving state jump.

*Makes the theorem clean to state or prove.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 76L05. arXiv math.AP, physics.flu-dyn. Level 3: graduate.

**Definition.** A weak solution satisfies the conservation equation after integration against every smooth test function of compact support. Integration by parts places the derivatives on the test function, so the state may jump.

**Problem.** Suppose a bounded weak solution of a one-dimensional conservation law jumps across a smooth moving interface and is smooth up to each side. The interface speed times the state jump equals the flux jump.

**How the definition helps.** In our own proof, the weak equation puts the entire mismatch at the interface into one boundary term. Integration by parts on both sides gives the flux jump minus the interface speed times the state jump. Both jumps mean right value minus left value. The term vanishes for every test function, so its coefficient is zero.

**Paper or page:** [One Dimensional Hyperbolic Conservation Laws: Past and Future](https://arxiv.org/abs/2310.16707v1). It says: “Then the left and right states u⁻, u⁺ and the speed λ satisfy the Rankine-Hugoniot equations”

**Sources:**

- [Alberto Bressan, One Dimensional Hyperbolic Conservation Laws: Past and Future.](https://arxiv.org/abs/2310.16707v1)

### Variational Dirichlet eigenvalues cannot rise when the domain grows

**Remember:** A larger domain offers more trial functions and can only lower the eigenvalues.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** Use the norm that sums the square-integral norms of a function and its first weak derivatives. Let H¹₀(Ω) be the closure of smooth functions of compact support in Ω in this norm. Define the k-th eigenvalue by minimizing the largest quotient ∫ \|∇u\|² / ∫ \|u\|² for nonzero u in each k-dimensional subspace of H¹₀(Ω). The usual definition solves −Δu = λu, with zero boundary values understood by taking u in H¹₀(Ω).

**Problem.** Let Ω ⊂ Ω′ be nonempty bounded open sets. For every k ≥ 1, the k-th Dirichlet eigenvalue on Ω′ is at most the k-th on Ω.

**How the definition helps.** The variational definition makes domain growth enlarge the set of trial subspaces, in our own proof. Extending a function by zero takes H¹₀(Ω) into H¹₀(Ω′) and preserves both integrals in the quotient. Every trial subspace for Ω then gives the same value for Ω′. The work moves into the min-max theorem, which identifies these minima with the eigenvalues. Its application uses the compact inclusion of H¹₀ into the space of square-integrable functions.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “the first eigenvalue λ₁ minimizes the Dirichlet energy.”

**Sources:** none listed. No primary source with a working link was found.

### Variational eigenvalues bound Neumann values by matching Dirichlet values

**Remember:** Free boundaries allow more trial functions, so the eigenvalues cannot go up.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** Let Ω be a bounded domain that locally lies on one side of a boundary graph with bounded difference quotients. Let H¹ consist of square-integrable functions whose weak first derivatives are square-integrable. For each k, minimize the largest quotient ∫ \|∇u\|² / ∫ \|u\|² for nonzero u in each k-dimensional trial subspace. Neumann uses trial subspaces in H¹, while Dirichlet uses the closure in H¹ of smooth functions of compact support.

**Problem.** The k-th Neumann eigenvalue is at most the k-th Dirichlet eigenvalue for each k ≥ 1, counting multiplicities.

**How the definition helps.** The variational definitions give both eigenvalues the same quotient and give the Neumann problem more trial subspaces, in our own proof. Minimizing over more subspaces cannot increase the result. The usual differential equation definitions impose zero normal derivative for Neumann and zero boundary values for Dirichlet. The work moves into the min-max theorem and placing each boundary condition in its weak form by integration by parts. The Lipschitz assumption gives compact inclusion of H¹ into the square-integrable functions, as needed for the eigenvalue characterization.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “Dirichlet eigenvalues are contrasted with Neumann eigenvalues: eigenvalues for the corresponding Neumann problem.”

**Sources:** none listed. No primary source with a working link was found.

### Variational Schrödinger eigenvalues cannot fall when the potential rises

**Remember:** Raising the potential raises each trial energy and cannot lower any eigenvalue.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35J10. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** On a nonempty bounded open set Ω, let V be a bounded real potential, the coefficient in the term Vu. Let H¹₀(Ω) be the closure of smooth functions of compact support in the norm of the function and its first derivatives. Define the k-th eigenvalue by minimizing, over k-dimensional subspaces of H¹₀(Ω), the largest value of ∫ (\|∇u\|² + V\|u\|²) divided by ∫ \|u\|². The differential equation definition asks for a nonzero solution of −Δu + Vu = λu with zero boundary values in the weak sense.

**Problem.** Let V and W be bounded real potentials with V ≤ W almost everywhere. Then each Dirichlet eigenvalue for V is at most the matching eigenvalue for W.

**How the definition helps.** The variational definition turns pointwise order of the potentials into order of every trial quotient, in our own proof. Taking the maximum on each subspace and then the minimum over subspaces preserves that order. The work moves into proving that these extrema give the differential operator’s eigenvalues. Unlike the matrix version, this uses compact inclusion of the trial space into the square-integrable functions to obtain a discrete list of eigenvalues.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The min-max theorem also applies to (possibly unbounded) self-adjoint operators.”

**Sources:** none listed. No primary source with a working link was found.

### The Hodge star makes vacuum Maxwell equations conformally invariant

**Remember:** In four dimensions the star on 2-forms ignores metric rescaling.

*True by definition. Confidence: medium.* MSC 35Q61 (Maxwell equations), 58A10, 78A25. arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** Write the vacuum Maxwell equations as dF = 0 and d⋆F = 0. The exterior derivative d does not use a metric. The Hodge star ⋆ uses the metric and a fixed orientation to turn a 2-form into another 2-form in four dimensions.

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

**Definition.** A pseudodifferential operator generalizes a differential operator through its Fourier symbol. A parametrix of such an operator T is an inverse up to a smoothing error, an operator that sends distributions to smooth functions. Left and right name the side on which it inverts T.

**Problem.** If a pseudodifferential operator has both a left and a right parametrix, each inverts on both sides up to smoothing errors.

**How the definition helps.** The definition turns the result into the ordinary identity for left and right inverses. In our own words, let S be a left parametrix and R a right parametrix. Then S(TR) = (ST)R gives S = R up to smoothing errors. The work is constructing the parametrices and checking that composition preserves the allowed errors.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “If S is a left (right) parametrix of T, and T has a right (left) parametrix, then S is also a right (left) parametrix of T.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis, arXiv:2107.12839v1 (2021)](https://arxiv.org/abs/2107.12839v1)

### Causal support and adjoints force uniqueness

**Remember:** Pair a future-supported solution with a past-supported inverse.

*True by definition.* MSC 35A08 (Fundamental solutions to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A retarded Green operator inverts a differential operator on smooth compactly supported inputs and confines each response to the source’s causal future. The causal future consists of points reachable at or below light speed. An advanced operator uses the causal past. Green hyperbolicity requires both inverses for the operator and its formal adjoint, obtained by integration by parts.

**Problem.** On a globally hyperbolic spacetime, a Green hyperbolic operator has unique advanced and retarded inverses. Global hyperbolicity rules out causal loops and makes causal diamonds compact.

**How the definition helps.** Requiring inverses for the adjoint gives a direct test for uniqueness without an equation-specific energy estimate. In our own proof, subtract two retarded responses to the same compact source. Their difference solves the equation with zero source. Apply the advanced adjoint inverse to an arbitrary smooth compactly supported test function. Its support meets the difference’s support in a compact set, so integration by parts gives zero against the original test. Reversing time gives advanced uniqueness.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “advanced and retarded Green functions of Green hyperbolic differential operator are unique”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes.](https://doi.org/10.1007/s00220-014-2097-7)

### Parabolic fundamental solutions defined as operators always exist uniquely

**Remember:** Send an impulse in time without asking for a point source in space.

*Makes the theorem clean to state or prove.* MSC 35A08 (Fundamental solutions to PDEs), 35K90. arXiv math.AP. Level 4: research.

**Definition.** Here a fundamental solution is a family Γ(t, s) of bounded operators on the space of initial data H, for s ≤ t. For each a in H, the curve t ↦ Γ(t, s)a is the weak solution with source δₛ ⊗ a. This source is a point mass at time s with value a. The definition uses operators, not a kernel function of the space variables.

**Problem.** Under the paper's assumptions on the time-dependent elliptic part, the parabolic operator has exactly one fundamental solution. It equals the family that evolves initial data when the source is zero, and it represents all weak solutions.

**How the definition helps.** Because the definition asks for operators only, the theorem can be stated without first proving that a kernel exists. In our own reading, this is why the result holds for rough coefficients and degenerate cases. The work is in the variational estimates and the time continuity of weak solutions.

**Paper or page:** [Fundamental solutions for parabolic equations and systems: universal existence, uniqueness, representation](https://arxiv.org/abs/2412.18436v3). It says: “it is shown to always coincide with the associated evolution family for the initial value problem with zero source and it yields representation of all weak solutions.”

**Sources:**

- [Pascal Auscher, Khalid Baadi, Fundamental solutions for parabolic equations and systems: universal existence, uniqueness, representation, arXiv:2412.18436 (2025), Journal of Mathematical Analysis and Applications, 552(1):129806, 2025](https://arxiv.org/abs/2412.18436v3)

### Energy-variational solutions build in the comparison behind weak–strong uniqueness

**Remember:** Put the comparison with regular fields into the definition of solution.

*True by definition. Confidence: medium.* MSC 35A15 (Variational methods applied to PDEs), 35Q35, 76A15. arXiv math.NA, math.AP. Level 4: research.

**Definition.** The Ericksen–Leslie equations model a flowing liquid crystal by a velocity field v and a field d of unit director vectors. An energy-variational solution carries an extra energy function E(t) beside v and d. It must satisfy one inequality that compares it with every sufficiently regular pair of test fields.

**Problem.** Theorem 2.5 takes an energy-variational solution whose initial energy equals the energy of its initial data. If a classical solution with the stated regularity has the same initial data, the two agree on its interval of existence.

**How the definition helps.** The definition already contains an inequality that compares the rough solution with any regular pair of fields (our own). Putting the classical solution in as that pair gives the relative energy inequality of Theorem 2.5. Its left side measures the squared distance between the two solutions. Its right side is that distance at time zero times an exponential factor, so equal initial data force equality later. The real work is to show that such solutions exist, which the paper does for one choice of weight through a discretization.

**Paper or page:** [Analysis and numerical approximation of energy-variational solutions to the Ericksen--Leslie equations](https://arxiv.org/abs/2210.17242v1). It says: “This solution concept is finer than dissipative solutions and satisfies the weak-strong uniqueness property.”

**Sources:**

- [Robert Lasarzik, Maximilian E. V. Reiter, Analysis and numerical approximation of energy-variational solutions to the Ericksen--Leslie equations, arXiv:2210.17242v1 (2022)](https://arxiv.org/abs/2210.17242v1)

### Viscosity solutions survive uniform limits, so monotone numerical schemes converge

**Remember:** Derivatives sit on test functions, so limits of solutions stay solutions.

*Makes the theorem clean to state or prove.* MSC 35D40 (Viscosity solutions to PDEs), 65N12. arXiv math.AP, math.NA. Level 4: research.

**Definition.** Take a continuous function u and the equation F(x, u, Du, D²u) = 0. Then u is a viscosity subsolution if F ≤ 0 holds wherever a smooth φ touches u from above. Here the derivatives of φ replace those of u. A supersolution uses smooth functions that touch from below, and F ≥ 0, and a solution is both.

**Problem.** Barles–Souganidis theorem (1991): let the equation have a strong comparison principle. Then a monotone, stable and consistent scheme converges locally uniformly to the viscosity solution.

**How the definition helps.** The definition asks nothing of the derivatives of u, so it passes to locally uniform limits. It even passes to half-relaxed limits, the upper and lower limits taken over nearby points and small mesh sizes. So these limits of the numerical solutions are a subsolution and a supersolution, with no regularity estimates (our own). The comparison principle then forces the two limits to be equal, which gives convergence (our own). The hard part moves to the comparison principle for each equation.

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

### A profile is reachable when backward-then-forward evolution returns it

**Remember:** Go back once, then forward, to test whether the profile is reachable.

*Makes the theorem clean to state or prove.* MSC 35L65 (Hyperbolic conservation laws), 35Q93. arXiv math.AP, math.OC. Level 4: research.

**Definition.** A scalar conservation law moves a quantity at a rate set by its flux. Here the flux changes at the point x = 0. A connection (A, B) is a pair of states, one on each side, with equal flux. It selects which jumps at x = 0 are allowed.

**Problem.** Suppose the flux is uniformly convex on each side of x = 0. A bounded profile is reachable at time T exactly when evolving it backward to time 0 and then forward to time T returns it.

**How the definition helps.** The paper uses the same connection to define a backward solution operator. This operator picks one candidate initial profile, so nobody has to search over all initial profiles. Our own observation is that if the round trip returns the profile, then the backward step has already given an initial profile that reaches it. The hard direction is that every reachable profile passes this test.

**Paper or page:** [Backward-forward characterization of attainable set for conservation laws with spatially discontinuous flux](https://arxiv.org/abs/2404.00116v3). It says: “We provide a characterization of A^\[AB\](T) as fixed points of the backward-forward solution operator.”

**Sources:**

- [Fabio Ancona, Luca Talamini, Backward-forward characterization of attainable set for conservation laws with spatially discontinuous flux, arXiv:2404.00116 (2024)](https://arxiv.org/abs/2404.00116v3)

### A negative generalized eigenvalue gives positive entire solutions of Fisher–KPP

**Remember:** The sign of one number decides whether a positive entire solution exists.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35K57, 35B08. arXiv math.AP. Level 4: research.

**Definition.** A generalized principal eigenvalue of a parabolic operator P = ∂ₜ − (elliptic part) is defined through the maximum principle. It is an extreme value λ for which a positive function φ satisfies an inequality such as Pφ ≥ λφ. No time-independent or time-periodic eigenfunction is needed. The paper uses several variants, which differ in the boundedness and positivity required of φ.

**Problem.** The Fisher–KPP equation models growth with diffusion, with coefficients that depend on space and time. Take a bounded C²ᵅ domain and all times t ∈ ℝ. A bounded entire solution, defined for all past and future times and positive on compact sets, exists exactly when μ₍b,p₎(ℝ) &lt; 0.

**How the definition helps.** The generalized eigenvalue gives one number whose sign can be tested even when the coefficients are not periodic in time. For periodic coefficients the classical periodic principal eigenvalue plays this role, but general time dependence has none. This comparison is our own. Here μ₍b,p₎(ℝ) is the eigenvalue of the equation linearised at the zero solution. The quote says these eigenvalues are the key to entire solutions and large-time behaviour. Showing that the sign of the linear quantity controls the nonlinear equation is the main work of the proof.

**Paper or page:** [Generalized principal eigenvalues for parabolic operators in bounded domains](https://arxiv.org/abs/2502.16522v1). It says: “We first show that these eigenvalues hold the key to understanding the large time behavior and entire solutions of heterogeneous Fisher-KPP type equations.”

**Sources:**

- [Henri Berestycki, Grégoire Nadin, Luca Rossi, Generalized principal eigenvalues for parabolic operators in bounded domains, arXiv:2502.16522v1 (2025)](https://arxiv.org/abs/2502.16522v1)

### Particle projection gives shared cluster velocity

**Remember:** Project onto cluster velocities to average the free speeds.

*True by definition.* MSC 35Q31 (Euler equations). arXiv math.AP. Level 4: research.

**Definition.** Label particles on a line by cumulative mass, so label length measures mass. For particles that stick after collisions, start with each initial velocity and add the accumulated force per unit mass. Project these velocities orthogonally, using mass as the integration measure, onto functions constant on each cluster of particles at the same position.

**Problem.** In the paper’s pressureless Euler flow, each cluster of positive mass moves at the mass average of its members’ velocities before the collision correction.

**How the definition helps.** Projection onto constants replaces all velocities in a cluster by their average. In our own argument, orthogonality to the cluster’s indicator says that the total velocity correction there is zero. The work lies in deriving the projection formula from the particle dynamics.

**Paper or page:** [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3), [Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems](https://arxiv.org/abs/2312.04932v3). It says: “V(t) &amp; = \\Proj \_{\\mathscr {H}<sub>X(t)</sub>} U(t)”

**Sources:**

- [José Antonio Carrillo, Sondre Tesdal Galtung, Equivalence of entropy solutions and gradient flows for pressureless 1D Euler systems (2025).](https://arxiv.org/abs/2312.04932v3)

### A gauge-invariant boundary condition gives unique continuation for anti-de Sitter waves

**Remember:** Test the boundary region without making the answer depend on a gauge.

*Rules out counterexamples. Confidence: medium.* MSC 35Q75 (PDEs in connection with relativity and gravitational theory), 35B60, 53C50. arXiv math.AP, gr-qc. Level 4: research.

**Definition.** An asymptotically anti-de Sitter spacetime has a conformal boundary, which one describes in a chosen gauge, that is, a choice of boundary coordinates and rescaling. The generalized null convexity condition is a geometric inequality on a region of this boundary, tested along lightlike directions.

**Problem.** For the wave equations in the paper, solutions vanishing near an eligible boundary region that satisfies the condition vanish nearby inside the spacetime. Whether a region satisfies the condition does not depend on the gauge.

**How the definition helps.** The condition is gauge invariant, so the theorem's hypothesis is a property of the geometry and not of a chosen description. The paper proves this invariance as a separate proposition. When the condition fails, light rays near the boundary exist and give counterexamples to unique continuation. In our own words, the condition is not the proof; the paper still needs a Carleman estimate, a weighted inequality for the wave operator.

**Paper or page:** [A gauge-invariant unique continuation criterion for waves in asymptotically Anti-de Sitter spacetimes](https://arxiv.org/abs/2201.06010v2). It says: “we connect the failure of our generalized null convexity criterion to the existence of certain null geodesics near the conformal boundary. These geodesics can be used to construct counterexamples to unique continuation.”

**Sources:**

- [Athanasios Chatzikaleas, Arick Shao, A gauge-invariant unique continuation criterion for waves in asymptotically Anti-de Sitter spacetimes, arXiv:2201.06010v2 (2022)](https://arxiv.org/abs/2201.06010v2)

### Contractive Airy boundary maps dissipate energy

**Remember:** Compare incoming and outgoing boundary forms to check energy loss.

*True by definition.* MSC 35R02 (PDEs on graphs and networks (ramified or polygonal spaces)). arXiv math.AP. Level 4: research.

**Definition.** The Airy operator differentiates three times along each edge of a graph. At the junction of a loop and half-lines, collect endpoint values and their first two derivatives into two vectors. Prescribe the allowed traces, or endpoint data, by a linear map between these vectors. Each trace space has a quadratic form that can take either sign.

**Problem.** The resulting operator A satisfies Re⟨Au,u⟩ ≤ 0 for every allowed u exactly when the output form never exceeds the input form.

**How the definition helps.** The boundary map turns the energy test for an entire function into one inequality on its traces. In our own explanation, integration by parts gives the output form minus the input form, up to a positive factor. The converse uses the fact that functions on the edges can realize the allowed traces.

**Paper or page:** [Airy and Schrödinger-type equations on looping-edge graphs](https://arxiv.org/abs/2410.11729v3). It says: “Aℒ is dissipative if and only if ℒ is a (𝒞₁,𝒞₀)-contraction.”

**Sources:**

- [Jaime Angulo Pava, Alexander Muñoz, Airy and Schrödinger-type equations on looping-edge graphs (2025).](https://arxiv.org/abs/2410.11729v3)

### Harnack inequalities hold for every function satisfying nonlocal energy estimates

**Remember:** Keep the energy inequalities and drop the equation.

*Makes the theorem clean to state or prove.* MSC 35R09 (Integro-partial differential equations), 35B45. arXiv math.AP. Level 4: research.

**Definition.** A nonlocal parabolic De Giorgi class is a class of functions defined by local energy inequalities, not by an equation. The inequalities hold at every level k and control u − k above the level and k − u below it. They contain a tail term, because a nonlocal equation lets values far away affect the region.

**Problem.** Let u be in the class and nonnegative in a space-time cylinder. Then the supremum of u on an earlier cylinder is at most C times the infimum on a later cylinder plus a tail. The tail measures the negative part of u outside the ball.

**How the definition helps.** The class keeps only the energy estimates that the proof uses, so the theorem holds regardless of any equation. The paper says this shows that earlier Harnack results of Kassmann and Weidner are structural. Our own explanation is that the tail term accounts for negative values far from the cylinder. Turning level-by-level estimates into the Harnack bound is the hard work.

**Paper or page:** [Nonlocal parabolic De Giorgi classes](https://arxiv.org/abs/2508.16247v2). It says: “The results are new even for the linear case, thereby showing that the recent achievements of Kassmann and Weidner (Duke Math. J., 2024) are structural properties, valid regardless of any equation.”

**Sources:**

- [Simone Ciani, Kenta Nakamura, Nonlocal parabolic De Giorgi classes, arXiv:2508.16247 (2025)](https://arxiv.org/abs/2508.16247v2)

### Half-space positivity blocks false interior zeros

**Remember:** For a nonlocal equation, the sign outside the domain still counts.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** Fix 0 &lt; s &lt; 1. Write L for the fractional Laplacian, which compares a function’s value with values everywhere, giving nearby points greater weight. Require opposite values at mirror points across a plane and nonnegative values throughout one half-space.

**Problem.** Let Ω be an open subset of that half-space. Suppose Lu exists pointwise there and Lu + c(x)u ≥ 0 for a real function c. Then u is positive throughout Ω or zero almost everywhere in the whole space.

**How the definition helps.** Nonnegativity on the whole half-space gives every reflected pair the same sign in our own proof. At an interior zero, a positive value contributes more than its more distant negative reflection. The integral is therefore negative unless u vanishes almost everywhere. Corollary 1.4 shows that requiring nonnegativity only inside the open subset permits an interior zero.

**Paper or page:** [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2), [The role of antisymmetric functions in nonlocal equations](https://arxiv.org/abs/2203.11468v2). It says: “is equal to zero at a point in Ω, but is not identically zero in Ω.”

**Sources:**

- [Serena Dipierro, Giorgio Poggesi, Jack Thompson, Enrico Valdinoci, The role of antisymmetric functions in nonlocal equations (2023).](https://arxiv.org/abs/2203.11468v2)

### Normalized fractional p-Laplacians on hyperbolic space tend to the p-Laplacian

**Remember:** Fix the constant first, and the limit is exactly the p-Laplacian.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 35R11 (Fractional partial differential equations), 58J05. arXiv math.AP. Level 4: research.

**Definition.** Let 0 &lt; s &lt; 1 and p &gt; 1. The fractional p-Laplacian of order s integrates \|u(x) − u(ξ)\|ᵖ⁻² (u(x) − u(ξ)) against a kernel of the hyperbolic distance. The paper gives three equivalent formulas, each with an explicit normalizing constant. They use a singular integral, the heat flow and an extension in one more dimension.

**Problem.** Take a bounded function u on hyperbolic space with bounded continuous second derivatives. At a point where the gradient of u is not zero, the fractional p-Laplacian tends to the ordinary p-Laplacian as s tends to 1.

**How the definition helps.** The explicit constant fixes the scale of the operator, so the limit statement can say equal to the p-Laplacian rather than a multiple of it. In our own explanation, without the constant the kernel integral blows up as s tends to 1, so the operator has no useful limit. The proof still needs limits of the kernel integrals near and far from the point, which the paper proves in separate lemmas.

**Paper or page:** [The fractional p-Laplacian on hyperbolic spaces](https://arxiv.org/abs/2210.07029v2). It says: “The explicit values of the constants enable us to study the convergence of the fractional p-Laplacian to the p-Laplacian as s → 1⁻.”

**Sources:**

- [Jongmyeong Kim, Minhyun Kim, Ki-Ahm Lee, The fractional p-Laplacian on hyperbolic spaces, arXiv:2210.07029 (2025)](https://arxiv.org/abs/2210.07029v2)
