### Weak solutions let kinked traveling waves satisfy the transport equation

**Remember:** Move derivatives onto the test function and the traveling wave can have kinks.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35F10. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A test function φ is smooth and has compact support in the time and space variables. A locally integrable u weakly solves ∂ₜu + ∂ₓu = 0 if the integral of u(∂ₜφ + ∂ₓφ) is zero for every φ. A classical solution instead needs derivatives of u itself.

**Problem.** For every locally integrable g on ℝ, the traveling wave u(t, x) = g(x − t) is a weak solution. In particular, \|x − t\| is a solution even though it has a kink at x = t.

**How the definition helps.** The weak definition differentiates only the test function, so the claim holds for any locally integrable profile. In our own proof, the substitution y = x − t turns the integrand into g(y) times the t-derivative of φ(t, y + t) at fixed y. That time integral is zero because φ has compact support. The work moves into the integration-by-parts formula that recovers the classical equation for smooth functions.

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

**Problem.** For smooth bounded initial potentials on the line, the evolved potential u solves ∂u/∂t + (∂u/∂x)²/2 = ν ∂²u/∂x².

**How the definition helps.** The exponential change of variable cancels the squared derivative term, leaving the linear heat equation. In our own calculation, differentiate u = −2ν log v and substitute the heat equation for v. The heat kernel averages positive initial values, so the logarithm exists. The work lies in finding the substitution and solving the linear heat equation.

**Wikipedia:** [Cole–Hopf transformation](https://en.wikipedia.org/wiki/Cole%E2%80%93Hopf_transformation). It says: “it provides an explicit formula for fairly general solutions of the PDE in terms of the initial datum and the heat kernel.”

**Sources:**

- [Julian D. Cole, On a quasi-linear parabolic equation occurring in aerodynamics (1951).](https://doi.org/10.1090/qam/42889)

### Mean-zero normalization makes Neumann solutions unique

**Remember:** Normal derivatives miss constants, so fix the mean.

*Rules out counterexamples.* MSC 35J25 (Boundary value problems for second-order elliptic equations). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Prescribe the derivative perpendicular to the boundary in the outward direction. Also require the solution to have mean zero over the domain.

**Problem.** On a smooth bounded connected domain, prescribe a smooth outward normal derivative whose integral over the boundary is zero. Exactly one function with zero Laplacian and mean zero has that derivative.

**How the definition helps.** Fixing the mean removes the constant shifts that the boundary derivative cannot detect, such as the gap between the solutions 0 and 1 for zero data (our own). Integration by parts gives the difference of two solutions zero gradient (our own). Connectedness makes it constant, and its mean makes it zero. The Neumann existence theorem supplies a solution, from which we subtract its mean.

**Wikipedia:** [Laplace's equation](https://en.wikipedia.org/wiki/Laplace%27s_equation). It says: “For the Neumann problem, uniqueness holds only up to an additive constant.”

**Sources:** none listed. No primary source with a working link was found.

### Wave coordinates split right and left

**Remember:** Zero mixed derivative leaves one function of each coordinate.

*True by definition.* MSC 35L05 (Wave equation). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Fix a constant wave speed c &gt; 0. Use x + ct and x − ct as coordinates. Each stays constant along one family of lines traveled by waves.

**Problem.** Every twice continuously differentiable solution of ∂²u/∂t² = c² ∂²u/∂x² on the whole line has the form F(x + ct) + G(x − ct). This is a sum of two oppositely traveling profiles.

**How the definition helps.** In the moving coordinates, the wave equation says that one mixed derivative vanishes. Integrate once in each coordinate to obtain one profile for each direction. In our own explanation, the work lies in the chain rule that converts the original second derivatives into this mixed derivative.

**Wikipedia:** [D'Alembert's formula](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula). It says: “The general solution of this PDE is u(μ,η) = F(μ) + G(η)”

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

**Definition.** A Green operator for a linear wave operator P sends a smooth, compactly supported function f to a solution of Pu = f. The retarded and advanced operators give solutions supported in the causal future and causal past of the source, the points reachable along causal paths. The causal propagator is their difference, with the retarded operator first.

**Problem.** For a wave operator with both Green operators, the causal propagator sends every smooth compactly supported source to a solution with zero source.

**How the definition helps.** Taking the difference cancels the common source by linearity. Our own comparison starts with the equation Pu = 0 and asks how to construct solutions. The difference formula gives one immediately for each source. The work lies in constructing both Green operators with the stated support.

**nLab:** [causal propagator](https://ncatlab.org/nlab/show/causal+propagator). It says: “If the advanced/retarded Green functions Gₚ± exists, then the difference Gₚ ≔ Gₚ,₊ − Gₚ,₋ is called the causal Green function.”

**Sources:** none listed. No primary source with a working link was found.

### Normal form guarantees analytic existence

**Remember:** Solve for the top time derivative before counting power series coefficients.

*Rules out counterexamples.* MSC 35A10 (Cauchy-Kovalevskaya theorems). arXiv math.AP. Level 3: graduate.

**Definition.** Put an analytic equation of order k in normal form by solving for its pure time derivative of order k. Allow spatial and mixed derivatives of total order at most k, but only lower time orders on the right.

**Problem.** An analytic equation in this normal form has a unique local analytic solution for analytic initial time derivatives through order k minus one.

**How the definition helps.** Solving for the highest time derivative determines each time coefficient from earlier ones. The work lies in proving convergence by bounding the coefficients with a convergent comparison series. Without normal form it fails: the heat equation has a second spatial derivative but only a first time derivative (our own). For initial profile 1/(1 − x), the coefficient of time degree j at x = 0 is (2j)!/j!, so the series has radius of convergence zero.

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

**Definition.** Let B pair vectors in two real Hilbert spaces by a continuous bilinear form. Weak coercivity requires a constant c &gt; 0 such that the supremum of \|B(u,v)\| over unit tests v is at least c‖u‖. Each nonzero test must also pair nontrivially with some trial vector.

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

**Definition.** The wave front set WF(u) of a distribution u consists of points x with covector directions k. A pair (x, k) belongs to it when the Fourier transform of u, localized near x, does not decay rapidly in direction k. It is a subset of the cotangent bundle minus the zero section.

**Problem.** Hörmander’s criterion: the product u · v of two distributions is defined when WF(u) + WF(v) does not meet the zero section. In words, at no point does a direction in one wave front set have its opposite in the other.

**How the definition helps.** The wave front set gives a simple test for when a product of distributions exists, although in general two distributions cannot be multiplied. The product is then the pullback of the tensor product along the diagonal. Without the wave front set there is no clean general statement. This criterion is the basis of the rigorous treatment of products of propagators in perturbative quantum field theory.

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

**Definition.** The wave front set records singular frequency directions of a distribution, a generalized function. Each direction is a covector, a linear functional on tangent vectors. A smooth change of coordinates pulls a covector back by composing it with the derivative.

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

**Definition.** Two-scale convergence tests a sequence against smooth weights φ(x,x/ε), periodic with period one in each fast coordinate. As ε tends to zero, each tested integral converges to the integral of u(x,y)φ(x,y) over position x and the unit cell y.

**Problem.** If a bounded sequence in Lᵖ converges in this two-scale sense, its ordinary weak limit is the cell average of u. Here 1 &lt; p &lt; ∞, and ordinary weak convergence tests integrals against fixed functions in the dual space.

**How the definition helps.** Tests independent of the fast coordinate read the cell average directly. In our own proof, boundedness and approximation extend the identity from smooth tests to all dual tests. The separate compactness theorem gives a two-scale limit along a subsequence of any bounded sequence.

**Paper or page:** [Homogenization of high-contrast composites under differential constraints](https://arxiv.org/abs/2104.11306v2). It says: “If $u\_\\varepsilon \\stackrel{2}{\\rightharpoonup}u$ weakly two-scale in $L<sup>p$</sup>, then $u\_\\varepsilon \\rightharpoonup \\int<sub>Q</sub> u(\\,\\cdot\\,,y)\\mathrm{d}y$ weakly in $L<sup>p</sup>(\\Omega;\\mathbb{R}<sup>N</sup>)$.”

**Sources:**

- [Elisa Davoli, Martin Kružík, Valerio Pagliari. Homogenization of high-contrast composites under differential constraints. 2104.11306v2](https://arxiv.org/abs/2104.11306v2)

### Positive eigenvalues prevent negative responses

**Remember:** Positive energy forces the negative part to vanish.

*Rules out counterexamples.* MSC 35B50 (Maximum principles in context of PDEs), 35J10. arXiv math.AP. Level 3: graduate.

**Definition.** For a real potential V, the energy integrates \|∇u\|² + Vu². The lowest Dirichlet eigenvalue is the infimum of energy divided by squared L² norm over nonzero functions with zero boundary values and square-integrable first derivatives.

**Problem.** On a smooth bounded connected domain, suppose V is bounded and the lowest eigenvalue is positive. Any weak solution of −Δu + Vu = f with nonnegative square-integrable f and nonnegative boundary values is nonnegative almost everywhere.

**How the definition helps.** Positive energy for every nonzero competitor rules out a negative part (our own). Testing the integrated equation with max(−u,0), which vanishes at the boundary, shows that its energy is nonpositive, so it vanishes. At eigenvalue zero, the negative of a positive first eigenfunction is a counterexample with zero forcing and boundary values. Existence of that eigenfunction uses elliptic spectral theory.

**Paper or page:** [Positive solutions of quasilinear elliptic equations with Fuchsian potentials in Wolff class](https://arxiv.org/abs/2204.08061v1). It says: “The weak maximum principle for $Q<sub>p,A,V</sub>$ holds true in ω:”

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

**Problem.** The three-dimensional Navier–Stokes equations have a Leray weak solution for all time, from every initial velocity of finite energy (Leray, 1934).

**How the definition helps.** The weak form asks only for bounds that the energy estimate supplies, so limits of approximate solutions are again solutions (our own). Uniqueness and smoothness of weak solutions remain open, and that is the hard part. The definition thus splits the problem into an easy global existence and an open regularity question.

**Wikipedia:** [Navier–Stokes existence and smoothness](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness). It says: “He also proved the existence of so-called weak solutions to the Navier–Stokes equations, which may not satisfy the equations pointwise but do satisfy them in mean value.”

**Sources:**

- [J. Leray, Sur le mouvement d'un liquide visqueux emplissant l'espace, Acta Mathematica 63 (1934) 193–248](https://doi.org/10.1007/BF02547354)

### The weak formulation lets Lax–Milgram solve Poisson's equation

**Remember:** Test against every v in the same space where you look for u.

*Makes the theorem clean to state or prove.* MSC 35D30 (Weak solutions to PDEs), 35J25, 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** The weak formulation of −Δu = f with u = 0 on the boundary asks for u in the Sobolev space H¹₀(Ω). It requires ∫ ∇u · ∇v = ∫ f v for every v in H¹₀(Ω). H¹₀(Ω) consists of the functions that vanish on the boundary and have square-integrable weak derivatives.

**Problem.** On a bounded domain Ω and for f in L²(Ω), the weak formulation has exactly one solution u in H¹₀(Ω). Its norm is at most a constant times the norm of f.

**How the definition helps.** In H¹₀ the left side is a bounded coercive bilinear form, so the Lax–Milgram theorem gives a unique solution and the bound ‖u‖ ≤ ‖f‖/c. Coercive means that the form of u with itself is at least c‖u‖² for some c &gt; 0. For a symmetric form, as here, this is just the Riesz representation theorem for the inner product given by the form (our own). Showing that the weak solution is classical is a separate regularity question.

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

**Definition.** The upper half-relaxed limit takes the limit superior while the approximation parameter tends to zero and the evaluation point tends to x. The lower limit takes the corresponding limit inferior. Pointwise limits would hold x fixed.

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

**Definition.** A continuous u is a viscosity solution of a degenerate elliptic equation F(x, u, Du, D²u) = 0 if two conditions hold at each point. Every smooth function that touches u from above satisfies F ≤ 0 there, and every one that touches u from below satisfies F ≥ 0 there.

**Problem.** For a large class of Hamilton–Jacobi and fully nonlinear second-order equations, viscosity solutions exist, are unique, and are stable under uniform limits. For example, \|u′\| = 1 on (−1, 1) with u(±1) = 0 has exactly one viscosity solution, 1 − \|x\|.

**How the definition helps.** The viscosity conditions accept some corners and reject others, so only one solution remains. For \|u′\| = 1 on (−1, 1) with u(±1) = 0 there is no classical solution, and many zigzag functions satisfy the equation almost everywhere (our own). The viscosity conditions accept peaks like the corner of 1 − \|x\| at 0 and reject valleys (our own reading). Uniqueness comes from a comparison principle, which for second-order equations was open until Jensen’s proof in 1988.

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution), [Weak solution](https://en.wikipedia.org/wiki/Weak_solution). It says: “The definition allows only for certain kind of singularities, so that existence, uniqueness, and stability under uniform limits, hold for a large class of equations.”

**Sources:**

- [Crandall, M. G.; Lions, P.-L. (1983). Viscosity solutions of Hamilton–Jacobi equations. Transactions of the American Mathematical Society 277(1), 1–42.](https://doi.org/10.1090/S0002-9947-1983-0690039-8)
- [Evans, L. C. (1980). On solving certain nonlinear partial differential equations by accretive operator methods. Israel Journal of Mathematics 36(3), 225–247.](https://doi.org/10.1007/BF02762047)
- [Crandall, M. G.; Ishii, H.; Lions, P.-L. (1992). User's guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society 27(1), 1–67.](https://doi.org/10.1090/S0273-0979-1992-00266-5)

### With distributions, every constant-coefficient operator has a fundamental solution

**Remember:** Solve once for a point source, then convolve to solve for any source.

*Makes the theorem clean to state or prove.* MSC 35E05 (Fundamental solutions to PDEs and systems of PDEs with constant coefficients), 46F10. arXiv math.AP. Level 3: graduate.

**Definition.** A fundamental solution of a linear differential operator P(∂) is a distribution E with P(∂)E = δ. A distribution is a generalized function, defined by how it acts on smooth test functions, and δ gives the value of a test function at 0. In words, E is the response of the operator to a unit point source at the origin.

**Problem.** The Malgrange–Ehrenpreis theorem says that every nonzero linear differential operator with constant coefficients has a fundamental solution. So P(∂)u = f has a solution for every compactly supported distribution f.

**How the definition helps.** Distributions give the equation P(∂)E = δ a meaning, though neither δ nor E need be a function. Ehrenpreis and Malgrange proved the theorem independently in 1954–1956, using the Hahn–Banach theorem. The constant-coefficient condition cannot be dropped. Lewy’s 1957 first-order equation with polynomial coefficients has, for a suitable smooth right-hand side, no solution on any open set.

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

**Definition.** Define the solution by minimizing the integral of the squared gradient among functions with fixed boundary values that stay above the obstacle. The contact set is where the solution equals the obstacle.

**Problem.** Where a continuous minimizer lies strictly above a continuous obstacle, it is harmonic, meaning that its Laplacian vanishes.

**How the definition helps.** Minimization permits a two-sided test wherever the obstacle leaves a gap. On a compact test support in that region, continuity gives a positive minimum gap, so small multiples of the test can be added or subtracted (our own). Differentiating the energy then gives zero for the integral of the dot product of the two gradients. Interior regularity turns this integral identity into the classical Laplace equation.

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

**Definition.** A Lipschitz constant bounds the ratio of change in value to distance between points. An absolutely minimizing extension minimizes that constant on each interior subdomain among functions agreeing on its boundary.

**Problem.** For a bounded Euclidean domain with Lipschitz boundary data, absolute minimizers solve the infinity Laplace equation in the viscosity sense. A function that only minimizes the global Lipschitz constant can fail this equation.

**How the definition helps.** Local minimization tests slopes even where the boundary data leave room for a bump. Prescribe max(x,0) on the boundary of the square (−2,2)² (our own). Add to max(x,0) a nonzero smooth bump with gradient magnitude at most one inside a disk in the left half. The result still has global Lipschitz constant one, but replacing the bump by zero improves the local constant on the disk. The equivalence with viscosity solutions supplies the differential conclusion.

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

**Definition.** To solve the heat equation with absorption at position x and time t, run Brownian motion from x with variance 2t per coordinate, matching Δ in the equation. Take the initial value at the path’s endpoint times the exponential of minus the absorption accumulated along the path. Average over paths.

**Problem.** For smooth bounded nonnegative absorption rates depending on position and common bounded measurable nonnegative initial data, a larger rate gives a smaller or equal solution.

**How the definition helps.** Increasing absorption decreases each path’s weight. Our own comparison multiplies this inequality by the nonnegative initial value and averages over the same paths. The Feynman–Kac theorem identifies that average with the bounded heat solution.

**Wikipedia:** [Feynman–Kac formula](https://en.wikipedia.org/wiki/Feynman%E2%80%93Kac_formula). It says: “the Feynman–Kac formula expresses u(x,t) as a conditional expectation of a certain random variable”

**Sources:**

- [Mark Kac, On distributions of certain Wiener functionals (1949).](https://doi.org/10.1090/S0002-9947-1949-0027960-X)

### Self-adjoint heat kernels are symmetric

**Remember:** Taking the adjoint swaps the two positions in a real heat kernel.

*True by definition. Confidence: medium.* MSC 35K08 (Heat kernel), 35P05. arXiv math.AP. Level 3: graduate.

**Definition.** The heat operator maps an initial temperature to its temperature at time t. Its integral kernel K(t,x,y) weights the contribution from y to x. This defines K through the solution operator instead of starting with heat from a point source.

**Problem.** Take a real, nonnegative, self-adjoint scalar elliptic operator of order two with smooth coefficients on a compact manifold without boundary. For t &gt; 0 its heat kernel satisfies K(t,x,y) = K(t,y,x).

**How the definition helps.** In our own proof, taking the adjoint swaps the variables of a real integral kernel. The spectral theorem makes the heat operator self-adjoint when its generator is self-adjoint. Equality of operators gives equality of kernels almost everywhere. Elliptic heat theory supplies a smooth kernel for positive time, so symmetry holds everywhere.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator:”

**Sources:** none listed. No primary source with a working link was found.

### Minimizing steps pay for movement

**Remember:** Doing nothing is always a candidate and costs no movement.

*True by definition.* MSC 35K55 (Nonlinear parabolic equations). arXiv math.AP. Level 3: graduate.

**Definition.** Advance the density by minimizing its energy plus a movement penalty among admissible densities with the same mass and finite second moment. The penalty is the least total squared transport distance, weighted by the mass moved, divided by twice the positive time step.

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

**Remember:** Characteristics must run into a shock, never out of it.

*Rules out counterexamples.* MSC 35L67 (Shocks and singularities for hyperbolic equations), 35L65, 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A conservation law wₜ + f(w)ₓ = 0 has weak solutions that jump across a curve, and each jump must obey the Rankine–Hugoniot condition on its speed. The Lax entropy condition also demands that the characteristic lines on both sides run into the jump. So the characteristic speeds f′(w) on the two sides lie on opposite sides of the shock speed.

**Problem.** For scalar conservation laws in any dimension with bounded initial data, exactly one weak solution satisfies an entropy condition (Kružkov, 1970). Without it uniqueness fails: for Burgers’ equation with a rising step as data, both a rarefaction fan and a moving jump are weak solutions (our own).

**How the definition helps.** The entropy condition removes the jumps that physics forbids, so only one weak solution is left. For Burgers’ equation, the removed case is a jump up, where characteristics leave the jump (our own). In gas dynamics such a rarefaction shock contradicts the second law of thermodynamics. Kružkov’s proof uses a whole family of entropy inequalities and an L¹ contraction estimate (our own). For systems in several space dimensions, entropy solutions can fail to be unique (our own).

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

**Definition.** Let H¹₀(Ω) be the closure of smooth compactly supported functions in Ω, in the norm that adds the square-integral norms of a function and its first weak derivatives. The k-th eigenvalue is the minimum, over k-dimensional subspaces of H¹₀(Ω), of the largest quotient ∫\|∇u\|²/∫\|u\|² on the subspace. The usual definition solves −Δu = λu with u in H¹₀(Ω).

**Problem.** Let Ω ⊂ Ω′ be nonempty bounded open sets. For every k ≥ 1, the k-th Dirichlet eigenvalue on Ω′ is at most the k-th on Ω.

**How the definition helps.** The variational definition makes domain growth enlarge the set of trial subspaces (our own). Extending a function by zero takes H¹₀(Ω) into H¹₀(Ω′) and preserves both integrals in the quotient. The work moves into the min-max theorem, which identifies these minima with the eigenvalues. Its application uses the compact inclusion of H¹₀ into the square-integrable functions.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “the first eigenvalue λ₁ minimizes the Dirichlet energy.”

**Sources:** none listed. No primary source with a working link was found.

### Variational eigenvalues bound Neumann values by matching Dirichlet values

**Remember:** Free boundaries allow more trial functions, so the eigenvalues cannot go up.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 49R05. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** Let Ω be a bounded Lipschitz domain, and let H¹ consist of square-integrable functions with square-integrable weak first derivatives. The k-th eigenvalue is the minimum, over k-dimensional trial subspaces, of the largest quotient ∫\|∇u\|²/∫\|u\|². Neumann uses subspaces of H¹, and Dirichlet uses subspaces of the closure in H¹ of smooth compactly supported functions.

**Problem.** The k-th Neumann eigenvalue is at most the k-th Dirichlet eigenvalue for each k ≥ 1, counting multiplicities.

**How the definition helps.** Both definitions use the same quotient, and the Neumann problem has more trial subspaces (our own). Minimizing over more subspaces cannot increase the result. The work moves into the min-max theorem and the weak forms of the two boundary conditions. The Lipschitz assumption gives the compact inclusion of H¹ into the square-integrable functions that the eigenvalue characterization needs.

**Wikipedia:** [Dirichlet eigenvalue](https://en.wikipedia.org/wiki/Dirichlet_eigenvalue). It says: “Dirichlet eigenvalues are contrasted with Neumann eigenvalues: eigenvalues for the corresponding Neumann problem.”

**Sources:** none listed. No primary source with a working link was found.

### Variational Schrödinger eigenvalues cannot fall when the potential rises

**Remember:** Raising the potential raises each trial energy and cannot lower any eigenvalue.

*True by definition. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35J10. arXiv math.AP, math.SP. Level 3: graduate.

**Definition.** On a nonempty bounded open set Ω, let V be a bounded real potential. Define the k-th eigenvalue as the minimum, over k-dimensional subspaces of H¹₀(Ω), of the largest value of ∫(\|∇u\|² + V\|u\|²)/∫\|u\|². The differential equation definition asks for a nonzero weak solution of −Δu + Vu = λu with zero boundary values.

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

**Definition.** A weak transport solution satisfies the equation after integration against smooth tests. Integration by parts puts the derivatives on the test function, so the transported density can be rough.

**Problem.** On a torus, let an integrable, divergence-free velocity transport a bounded initial density. Every bounded weak solution preserves its initial mass for almost every time.

**How the definition helps.** A spatially constant test eliminates the transport term in our own proof. The remaining identity says that total mass has zero time derivative and takes its initial value. The paper constructs a solution whose integrals against spatial tests vary continuously, so its identity holds at every time.

**Paper or page:** [Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation](https://arxiv.org/abs/2307.00809v4). It says: “(Conservation of Mass) \\quad \\int\_{\\mathbb{T}<sup>d}</sup> f(\\cdot,t)\\,dx = \\int\_{\\mathbb{T}<sup>d}</sup> f<sub>0</sub>\\,dx .”

**Sources:**

- [Lucas Huysmans, Edriss S. Titi. Non-Uniqueness and Inadmissibility of the Vanishing Viscosity Limit of the Passive Scalar Transport Equation. 2307.00809v4](https://arxiv.org/abs/2307.00809v4)

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

### Exterior data fix fractional extensions

**Remember:** A nonlocal equation can see beyond the boundary.

*Rules out counterexamples.* MSC 35R11 (Fractional partial differential equations), 35J25. arXiv math.AP. Level 3: graduate.

**Definition.** For 0 &lt; s &lt; 1, the integral fractional Laplacian compares a value at x with values at all other points. Its Dirichlet problem prescribes the function everywhere outside the interval. The energy adds squared differences between values at pairs of points, weighted more heavily at shorter distances.

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

**Definition.** A pseudodifferential operator generalizes a differential operator through its Fourier symbol. A parametrix of such an operator T is an inverse up to a smoothing error, an operator that sends distributions to smooth functions. Left and right name the side on which it inverts T.

**Problem.** If a pseudodifferential operator has both a left and a right parametrix, each inverts on both sides up to smoothing errors.

**How the definition helps.** The definition turns the result into the ordinary identity for left and right inverses. In our own words, let S be a left parametrix and R a right parametrix. Then S(TR) = (ST)R gives S = R up to smoothing errors. The work is constructing the parametrices and checking that composition preserves the allowed errors.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “If S is a left (right) parametrix of T, and T has a right (left) parametrix, then S is also a right (left) parametrix of T.”

**Sources:**

- [Shiqi Ma, Lecture notes for pseudodifferential operators and microlocal analysis, arXiv:2107.12839v1 (2021)](https://arxiv.org/abs/2107.12839v1)

### Symbol sums need no convergence

**Remember:** Match each finite truncation and let the tail drop in order.

*Makes the theorem clean to state or prove.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** A symbol of order m weights frequencies with growth bounded by order m, with stronger bounds after frequency differentiation. An asymptotic sum matches each finite sum up to an error of the first omitted order.

**Problem.** Every sequence of standard symbols with orders strictly decreasing to minus infinity has an asymptotic sum, unique up to an error of every negative order.

**How the definition helps.** Matching finite sums allows each new term to change at bounded frequencies without affecting its prescribed order at infinity. In our own explanation, successively larger frequency cutoffs make the modified series converge in the required estimates. Two sums have the same finite approximations, so their difference satisfies every negative-order bound.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “there exists a symbol (not unique) a ∈ Sᵐ”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Weyl quantization makes adjoints conjugate symbols

**Remember:** A midpoint stays put when input and output swap.

*True by definition.* MSC 35S05 (Pseudodifferential operators as generalizations of partial differential operators). arXiv math.AP. Level 3: graduate.

**Definition.** A symbol gives the weight assigned to each frequency at each position. Weyl quantization uses the midpoint between input and output to choose that position. Left quantization uses the output position.

**Problem.** For standard scalar symbols on Euclidean space, taking the formal adjoint in Weyl quantization conjugates the symbol.

**How the definition helps.** In our own explanation, exchanging input and output leaves the midpoint fixed. Conjugation reverses the Fourier phase, and exchanging the positions reverses it again. The remaining step justifies the integral identity on smooth, rapidly decreasing test functions.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “(aʷ(x, hD)u, v) = (u, āʷ(x, hD) v).”

**Sources:** none listed. No primary source with a working link was found.

### Projection gives Calderón identities

**Remember:** Take traces after reconstruction to get a projector.

*True by definition.* MSC 35S15 (Boundary value problems for PDEs with pseudodifferential operators). arXiv math.AP. Level 3: graduate.

**Definition.** On a smooth bounded domain, record a harmonic function’s boundary value and outward normal derivative as a pair. The interior Calderón operator takes a proposed pair, reconstructs a harmonic function by boundary integration, and records its pair.

**Problem.** Let V give the boundary value of the potential of a surface density, and K the averaged boundary value when the kernel uses a normal derivative at the source. With K′ the adjoint of K, these operators satisfy KV = VK′.

**How the definition helps.** Reconstruction followed by taking boundary values gives a projection, so its matrix equals its square. Our own calculation reads the upper-right entry of this identity as V − KV + VK′ = V. This avoids comparing the two composed integral kernels directly. The work lies in Green’s representation formula, which recovers each harmonic function from its boundary pair.

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

**Definition.** A retarded Green operator inverts a differential operator on smooth compactly supported inputs, and each response lies in the causal future of its source. The causal future consists of points reachable at or below light speed, and an advanced operator uses the causal past instead. Green hyperbolicity requires both inverses for the operator and for its formal adjoint.

**Problem.** On a globally hyperbolic spacetime, which has no causal loops and has compact causal diamonds, a Green hyperbolic operator has unique advanced and retarded inverses.

**How the definition helps.** Requiring inverses for the adjoint gives a direct uniqueness test without an equation-specific energy estimate. The difference of two retarded responses to the same source solves the equation with zero source (our own). Pair it with the advanced adjoint inverse of any test function. The supports meet in a compact set, so integration by parts gives zero against the test, and reversing time gives advanced uniqueness.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “advanced and retarded Green functions of Green hyperbolic differential operator are unique”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes.](https://doi.org/10.1007/s00220-014-2097-7)

### Parabolic fundamental solutions defined as operators always exist uniquely

**Remember:** Send an impulse in time without asking for a point source in space.

*Makes the theorem clean to state or prove.* MSC 35A08 (Fundamental solutions to PDEs), 35K90. arXiv math.AP. Level 4: research.

**Definition.** Here a fundamental solution is a family Γ(t, s), for s ≤ t, of bounded operators on the space H of initial data. For each a in H, t ↦ Γ(t, s)a is the weak solution with source δₛ ⊗ a, a point mass at time s with value a. The definition uses operators, not a kernel function of the space variables.

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

**How the definition helps.** The definition already contains an inequality comparing the rough solution with any regular pair of fields (our own). Putting the classical solution in as that pair gives the relative energy inequality of Theorem 2.5. It bounds the squared distance between the two solutions by its value at time zero times an exponential factor, so equal initial data force equality. The real work is to show that such solutions exist, which the paper does for one choice of weight through a discretization.

**Paper or page:** [Analysis and numerical approximation of energy-variational solutions to the Ericksen--Leslie equations](https://arxiv.org/abs/2210.17242v1). It says: “This solution concept is finer than dissipative solutions and satisfies the weak-strong uniqueness property.”

**Sources:**

- [Robert Lasarzik, Maximilian E. V. Reiter, Analysis and numerical approximation of energy-variational solutions to the Ericksen--Leslie equations, arXiv:2210.17242v1 (2022)](https://arxiv.org/abs/2210.17242v1)

### Transverse wave fronts allow restriction

**Remember:** Control frequencies normal to the submanifold before restricting a distribution.

*Rules out counterexamples.* MSC 35A27 (Microlocal methods and methods of sheaf theory and homological algebra applied to PDEs). arXiv math.AP. Level 4: research.

**Definition.** A distribution acts on smooth test functions. Its order-s Sobolev wave front set records where its localized Fourier transform fails a weighted square-integrability test and in which directions. A conormal covector is a nonzero linear function that vanishes on the tangent space of the submanifold.

**Problem.** Let a smooth embedded submanifold have positive dimension and codimension c, the number of missing dimensions. If s &gt; c/2 and the order-s wave front set avoids its conormal covectors, the distribution has a restriction. Its order-(s − c/2) wave front set lies among the tangential restrictions of the original singular covectors over the submanifold.

**How the definition helps.** Excluding conormal directions gives the Fourier control needed in the directions that restriction integrates out (our own). The work lies in the cited continuous extension theorem for pullbacks, applied to the inclusion of the submanifold. Mass spread along a line in the plane shows the need: its singular covectors are normal to the line, and smooth approximations can diverge there (our own).

**Paper or page:** [Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1). It says: “If f has constant rank l ≥ 1, then this is valid when r₂ − r₁ ≥ (n − l)/2 and r₂ &gt; (n − l)/2.”

**Sources:**

- [Stevan Pilipović and Bojan Prangoski, Spaces of distributions with Sobolev wave front in a fixed conic set: compactness, pullback by smooth maps and the compensated compactness theorem](https://arxiv.org/abs/2408.10741v1)

### Viscosity solutions survive uniform limits, so monotone numerical schemes converge

**Remember:** Derivatives sit on test functions, so limits of solutions stay solutions.

*Makes the theorem clean to state or prove.* MSC 35D40 (Viscosity solutions to PDEs), 65N12. arXiv math.AP, math.NA. Level 4: research.

**Definition.** A continuous u is a viscosity subsolution of F(x, u, Du, D²u) = 0 if F ≤ 0 holds wherever a smooth φ touches u from above. In that test the derivatives of φ replace those of u. A supersolution uses functions touching from below and F ≥ 0, and a solution is both.

**Problem.** Barles–Souganidis theorem (1991): let the equation have a strong comparison principle. Then a monotone, stable and consistent scheme converges locally uniformly to the viscosity solution.

**How the definition helps.** The definition asks nothing of the derivatives of u, so it passes to locally uniform limits. It even passes to half-relaxed limits over nearby points and small mesh sizes, so these limits of numerical solutions are a subsolution and a supersolution (our own). The comparison principle then forces the two limits to be equal, which gives convergence (our own). The hard part moves to the comparison principle for each equation.

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

**How the definition helps.** The uniform bound makes the rescaled equation a contraction around the Laplacian (our own). This uses solvability for the Laplacian and the convex-domain estimate bounding second derivatives by the Laplacian in square mean. In our own counterexample on the three-dimensional unit ball, take radial eigenvalue six and tangential eigenvalues one. Then u = ∛(r²) − 1 has zero boundary values, solves the homogeneous equation almost everywhere, and has square-integrable second derivatives, which grow like \|x\| to the power −4/3.

**Paper or page:** [A least-squares Galerkin approach to gradient and Hessian recovery for nondivergence-form elliptic equations](https://arxiv.org/abs/1909.00491v2). It says: “satisfies the Cordes condition with λ = 0”

**Sources:**

- [Iain Smears and Endre Süli. Discontinuous Galerkin Finite Element Approximation of Nondivergence Form Elliptic Equations with Cordès Coefficients. 2013.](https://doi.org/10.1137/120899613)

### One distance tests boundary regularity

**Remember:** One distance profile tests every continuous datum.

*Makes the theorem clean to state or prove.* MSC 35J67 (Boundary values of solutions to elliptic equations and elliptic systems). arXiv math.AP. Level 4: research.

**Definition.** Consider a bounded open set and the fractional p-Laplace equation, with fractional order between zero and one and exponent p greater than one. Its Dirichlet problem prescribes values on the whole exterior. Call a boundary point regular if solutions approach its prescribed value for every bounded continuous exterior datum having a limit at infinity.

**Problem.** Let the test datum be distance to the boundary point, capped at one. Regularity is equivalent to its energy solution tending to zero as one approaches the point from inside.

**How the definition helps.** The capped distance vanishes at the chosen point and stays uniformly positive outside every neighborhood of it. In our own explanation, multiples of this profile and constant shifts bound any bounded datum continuous at the point. Comparison carries the bounds inside. The cited theorem identifies regularity defined using energy solutions with regularity defined by Perron’s method of upper and lower bounds.

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

### A profile is reachable when backward-then-forward evolution returns it

**Remember:** Go back once, then forward, to test whether the profile is reachable.

*Makes the theorem clean to state or prove.* MSC 35L65 (Hyperbolic conservation laws), 35Q93. arXiv math.AP, math.OC. Level 4: research.

**Definition.** A scalar conservation law moves a quantity at a rate set by its flux, and here the flux changes at the point x = 0. A connection (A, B) is a pair of states, one on each side, with equal flux. It selects which jumps at x = 0 are allowed.

**Problem.** Suppose the flux is uniformly convex on each side of x = 0. A bounded profile is reachable at time T exactly when evolving it backward to time 0 and then forward to time T returns it.

**How the definition helps.** The paper uses the same connection to define a backward solution operator. This operator picks one candidate initial profile, so nobody has to search over all initial profiles. Our own observation is that if the round trip returns the profile, then the backward step has already given an initial profile that reaches it. The hard direction is that every reachable profile passes this test.

**Paper or page:** [Backward-forward characterization of attainable set for conservation laws with spatially discontinuous flux](https://arxiv.org/abs/2404.00116v3). It says: “We provide a characterization of A^\[AB\](T) as fixed points of the backward-forward solution operator.”

**Sources:**

- [Fabio Ancona, Luca Talamini, Backward-forward characterization of attainable set for conservation laws with spatially discontinuous flux, arXiv:2404.00116 (2024)](https://arxiv.org/abs/2404.00116v3)

### A negative generalized eigenvalue gives positive entire solutions of Fisher–KPP

**Remember:** The sign of one number decides whether a positive entire solution exists.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 35P15 (Estimates of eigenvalues in context of PDEs), 35K57, 35B08. arXiv math.AP. Level 4: research.

**Definition.** A generalized principal eigenvalue of a parabolic operator P = ∂ₜ − (elliptic part) is defined through the maximum principle. It is an extreme value λ for which some positive φ satisfies an inequality such as Pφ ≥ λφ, so no periodic eigenfunction is needed. The paper’s variants differ in the boundedness and positivity required of φ.

**Problem.** For a Fisher–KPP equation on a bounded C²ᵅ domain, with coefficients that depend on space and time, a bounded entire solution positive on compact sets exists exactly when μ₍b,p₎(ℝ) &lt; 0. Here μ₍b,p₎(ℝ) is the generalized principal eigenvalue of the equation linearised at zero.

**How the definition helps.** The generalized eigenvalue gives one number whose sign can be tested even when the coefficients are not periodic in time. For periodic coefficients the classical periodic principal eigenvalue plays this role, but general time dependence has none (our own comparison). Showing that the sign of the linear quantity controls the nonlinear equation is the main work of the proof.

**Paper or page:** [Generalized principal eigenvalues for parabolic operators in bounded domains](https://arxiv.org/abs/2502.16522v1). It says: “We first show that these eigenvalues hold the key to understanding the large time behavior and entire solutions of heterogeneous Fisher-KPP type equations.”

**Sources:**

- [Henri Berestycki, Grégoire Nadin, Luca Rossi, Generalized principal eigenvalues for parabolic operators in bounded domains, arXiv:2502.16522v1 (2025)](https://arxiv.org/abs/2502.16522v1)

### Energy admissibility prevents spontaneous flow

**Remember:** Zero initial energy leaves no energy for motion.

*Rules out counterexamples.* MSC 35Q30 (Navier-Stokes equations), 35D30. arXiv math.AP. Level 4: research.

**Definition.** A weak flow satisfies the momentum equation after integration against smooth test fields. An energy-admissible flow also bounds its kinetic energy plus accumulated viscous loss by its initial energy when no force acts.

**Problem.** An unforced energy-admissible weak flow that starts from rest has zero velocity almost everywhere at almost every later time.

**How the definition helps.** The energy inequality bounds two nonnegative quantities by zero (our own). Zero kinetic energy forces the velocity to vanish almost everywhere. Without energy admissibility the claim fails: for a model with strengthened viscosity on the three-dimensional torus, the cited theorem gives infinitely many weak flows starting from rest.

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

**Definition.** On a graph made of a loop and half-lines, the Airy operator takes three derivatives along each edge. Boundary conditions are given by a linear map ℒ from incoming to outgoing endpoint data, each carrying a quadratic form that can take either sign. ℒ is a contraction for these forms if the output form of ℒv never exceeds the input form of v.

**Problem.** The Airy operator A with boundary map ℒ is dissipative, meaning Re⟨Au,u⟩ ≤ 0 for every u in its domain, exactly when ℒ is a contraction for the two forms.

**How the definition helps.** The contraction condition is the energy test written on the boundary data. In our own explanation, integration by parts gives the output form minus the input form, up to a positive factor. The converse uses the fact that functions on the edges can realize the allowed endpoint data.

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

**Definition.** Fix 0 &lt; s &lt; 1 and let L be the fractional Laplacian of order s, which compares a function's value with its values everywhere. A function is antisymmetric across a plane if it takes opposite values at mirror points. The key condition is that u ≥ 0 on the whole half-space on one side, not only in the domain.

**Problem.** Let Ω be an open subset of the half-space, and let u be antisymmetric and nonnegative on the half-space. If Lu exists pointwise and Lu + c(x)u ≥ 0 in Ω for a real function c, then u &gt; 0 in Ω or u = 0 almost everywhere.

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

### Perron envelopes preserve order

**Remember:** Higher data leave fewer upper candidates.

*True by definition.* MSC 35R11 (Fractional partial differential equations). arXiv math.AP. Level 4: research.

**Definition.** For the fractional p-Laplace equation, values outside the domain influence the equation inside. Upper Perron candidates are bounded below and dominate local comparison solutions inside. They dominate the exterior data and have boundary lower limits at least as large as the prescribed values. Take their pointwise infimum to define the upper Perron solution.

**Problem.** For bounded continuous exterior data on a bounded domain, increasing the data can only increase the upper Perron solution or leave it unchanged.

**How the definition helps.** Requiring candidates to dominate the data makes their sets nested when the data increase. Taking infima gives the order inequality directly. The alternative definition requires candidates to equal the data outside. Those candidate sets need not be nested. The cited theorem proves that the two infima agree for these data, so the same order inequality holds for both.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “g₁ ≤ g₂ in Ωᶜ, then Q̄ g₁ ≤ Q̄ g₂ in ℝⁿ.”

**Sources:**

- [Anders Björn, Jana Björn, and Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3)
