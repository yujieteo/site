### A Lipschitz condition makes solutions of differential equations unique

**Remember:** Lipschitz bounds the slope of every chord, so solutions cannot split.

*Rules out counterexamples.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations), 26A16. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f(t, y) is Lipschitz in y when there is a constant L with \|f(t, y₁) − f(t, y₂)\| ≤ L\|y₁ − y₂\|. The constant L does not depend on t.

**Problem.** For f continuous in t, the initial value problem y′ = f(t, y), y(t₀) = y₀ has exactly one solution near t₀.

**How the definition helps.** The Lipschitz condition makes the Picard iteration a contraction, and a contraction has exactly one fixed point. Without the condition, uniqueness fails. The equation y′ = a y²ᐟ³ with y(0) = 0 has at least two solutions. One is y = 0. The other is (at/3)³ for t &lt; 0 and 0 for t ≥ 0. The function y²ᐟ³ is not Lipschitz near 0, because its derivative is unbounded there. With the Lipschitz condition, the integral operator of Picard iteration is a contraction on a short time interval, and the Banach fixed-point theorem gives existence and uniqueness. The result stays local: for y′ = 1 + y² with y(0) = 0, the solution tan t exists only for \|t\| &lt; π/2 (our own example).

**Wikipedia:** [Picard–Lindelöf theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem). It says: “The uniqueness theorem does not apply because the derivative of the function f(y) = y²ᐟ³ is not bounded in the neighborhood of y = 0 and therefore it is not Lipschitz continuous, violating the hypothesis of the theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Riccati equations have global solutions on the projective line

**Remember:** Let y pass through infinity and the blow-up becomes an ordinary point.

*Rules out counterexamples.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riccati equation is a first-order equation dy/dt = a₀(t) + a₁(t) y + a₂(t) y². Its solutions may take values in the projective line ℝP¹ or ℂP¹, not only in the line ℝ or ℂ. The projective line is the line with one extra point at infinity.

**Problem.** Solutions should exist for all time. They should depend on the initial value by a fractional linear map y(t) = (f y(0) + g)/(h y(0) + i).

**How the definition helps.** On the projective line, a blow-up only passes through the point at infinity, so the solution does not stop. On the ordinary line a Riccati solution can blow up in finite time; for example, dy/dt = 1 + y² gives y = tan t. On the projective line the point at infinity is an ordinary point. So, when the coefficients are defined and regular for all t, the solutions exist for all time. The flow is then given by the action of PGL(2), the group of fractional linear maps, on the projective line, just as linear equations act by affine maps. The reason is standard but not spelled out on the page. The equation is the projective form of a linear 2 × 2 system, whose solutions always exist for all time.

**nLab:** [Riccati equation](https://ncatlab.org/nlab/show/Riccati+equation). It says: “solutions of Riccati equations can blow up in finite time; however, these solutions become defined for all time if we let y take values in the projective line rather than the affine line”

**Sources:** none listed. No primary source with a working link was found.

### Regular Sturm–Liouville problems have a full basis of eigenfunctions

**Remember:** Finite interval, positive coefficients, one condition per end: pure eigenvalues.

*Rules out counterexamples.* MSC 34B24 (Sturm-Liouville theory), 34B09. arXiv math.CA, math.SP. Level 2: later undergraduate.

**Definition.** A Sturm–Liouville problem is the equation (p y′)′ + q y = −λ w y on an interval. It is regular if the interval \[a, b\] is finite, p, p′, q and w are continuous, and p &gt; 0 and w &gt; 0. It also needs one separated boundary condition at each end: α₁ y(a) + α₂ y′(a) = 0 and β₁ y(b) + β₂ y′(b) = 0.

**Problem.** For a regular problem, the eigenvalues are real, simple and increase to infinity. The normalized eigenfunctions form an orthonormal basis of the weighted L² space on \[a, b\].

**How the definition helps.** The regularity conditions make the inverse of the operator a compact self-adjoint operator, so the spectral theorem for compact operators applies (our own). Separated conditions make each eigenvalue simple, because only one solution up to a constant meets the condition at a (our own). The conditions exclude singular problems. For example, −y″ = λy on the half-line \[0, ∞) with y(0) = 0 has no square-integrable eigenfunctions (our own). Its spectrum is the continuous set \[0, ∞). For singular problems, eigenfunction expansions still exist but they use integrals, as the Fourier transform does. The hard part there is Weyl's theory of the endpoints (our own).

**Wikipedia:** [Sturm–Liouville theory](https://en.wikipedia.org/wiki/Sturm%E2%80%93Liouville_theory). It says: “If the interval is unbounded, or if the coefficients have singularities at the boundary points, one calls L singular. In this case, the spectrum no longer consists of eigenvalues alone and can contain a continuous component.”

**Sources:** none listed. No primary source with a working link was found.

### Asymptotic stability asks for stability as well as attraction

**Remember:** Attracting is not enough; nearby orbits must also stay nearby.

*Rules out counterexamples. Confidence: medium.* MSC 34D20 (Stability of solutions to ordinary differential equations), 37C75. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium is Lyapunov stable if solutions that start near it stay near it for all later time. It is attractive if solutions that start near it converge to it. It is asymptotically stable if it is both stable and attractive.

**Problem.** Lyapunov's direct method says that a strict Lyapunov function near an equilibrium makes it asymptotically stable. Massera's converse theorem says that every asymptotically stable equilibrium of a smooth enough system has such a function (our own).

**How the definition helps.** The stability clause rules out equilibria that attract every orbit only after a large excursion. Hahn's book, which the page cites, gives such examples. In Vinograd's planar system of 1957, all orbits tend to the origin, but some that start very close first go far away (our own). A strict Lyapunov function decreases along orbits, so it traps them in small level sets and forbids this (our own). So without the stability clause, the converse theorem would be false (our own). The hard part is building the Lyapunov function in Massera's theorem.

**Wikipedia:** [Lyapunov stability](https://en.wikipedia.org/wiki/Lyapunov_stability). It says: “There are examples showing that attractivity does not imply asymptotic stability.”

**Sources:**

- [W. Hahn, Stability of Motion, Springer (1967), Section 40](https://doi.org/10.1007/978-3-642-50085-5)
- [J. L. Massera, On Liapounoff's conditions of stability, Annals of Mathematics 50 (1949)](https://doi.org/10.2307/1969558)

### Radially unbounded Lyapunov functions make asymptotic stability global

**Remember:** Level sets must close up, or orbits slide off to infinity.

*Rules out counterexamples. Confidence: medium.* MSC 34D23 (Global stability of solutions to ordinary differential equations), 34D20, 93D30. arXiv math.DS, math.OC. Level 2: later undergraduate.

**Definition.** A function V on ℝⁿ is radially unbounded if V(x) → ∞ whenever ‖x‖ → ∞. Then every sublevel set {V ≤ c} is bounded, and so compact if V is continuous (our own).

**Problem.** Lyapunov's method alone gives stability only near the equilibrium. The Barbashin–Krasovskii theorem asks that V be positive definite, radially unbounded, and strictly decreasing along solutions away from the equilibrium. Then the equilibrium is globally asymptotically stable, so it attracts every starting point.

**How the definition helps.** Radial unboundedness makes each sublevel set of V compact, so a solution that starts in it stays in a compact set. Then the local argument works everywhere. Without it, V can decrease along an orbit that runs off to infinity, because V stays bounded there (our own). The page's example f₂ = r²/(1 + r²) + (x₁ − x₂)², with r² = x₁² + x₂², is positive definite. But along the line x₁ = x₂ it stays below 1. So each sublevel set {f₂ ≤ c} with c ≥ 1 is unbounded, and a solution can escape inside it (our own). The hard part remains finding a suitable V.

**Wikipedia:** [Radially unbounded function](https://en.wikipedia.org/wiki/Radially_unbounded_function), [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function), [LaSalle's invariance principle](https://en.wikipedia.org/wiki/LaSalle%27s_invariance_principle). It says: “are not radially unbounded since along the line x₁ = x₂, the condition is not verified even though the second function is globally positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory solutions let differential equations have discontinuous right-hand sides

**Remember:** Ask for the equation almost everywhere, and recover y with the Lebesgue integral.

*Makes the theorem clean to state or prove.* MSC 34A36 (Discontinuous ordinary differential equations), 34A12. arXiv math.CA. Level 3: graduate.

**Definition.** Take the initial value problem y′ = f(t, y), y(t₀) = y₀. A solution in the extended sense is an absolutely continuous function y that satisfies the equation almost everywhere and satisfies the initial condition. An absolutely continuous function is one that is the Lebesgue integral of its own derivative, up to a constant.

**Problem.** Show that solutions exist for an ordinary differential equation whose right-hand side is measurable in t but not continuous in t.

**How the definition helps.** The extended definition asks for the equation only almost everywhere, so f need not be continuous in t. Take y′ = H(t), where H is the Heaviside step function (0 for t &lt; 0 and 1 for t &gt; 0). The natural answer is the ramp function (0 for t &lt; 0 and t for t ≥ 0), but it is not differentiable at 0, so it is not a classical solution. With the extended definition, the ramp is a solution. Carathéodory's theorem gives existence when f is continuous in y, measurable in t, and bounded by an integrable function. Peano's theorem, for continuous f, becomes a special case. Uniqueness again needs a Lipschitz-type bound, now with an integrable constant k(t).

**Wikipedia:** [Carathéodory's existence theorem](https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_existence_theorem). It says: “This suggests that the idea of a solution be extended to allow for solutions that are not everywhere differentiable, thus motivating the following definition.”

**Sources:** none listed. No primary source with a working link was found.

### Filippov solutions let systems slide along a switching surface

**Remember:** On a switching surface, average the two sides and slide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34A60 (Ordinary differential inclusions), 34A36. arXiv math.CA, math.DS. Level 3: graduate.

**Definition.** Filippov replaces x′ = f(x), for a locally bounded f, by the inclusion x′ ∈ F(x). Here F(x) is the closed convex hull of the values of f near x, ignoring sets of measure zero (our own). A Filippov solution is an absolutely continuous function that satisfies the inclusion at almost every time.

**Problem.** Take x′ = −1 for x &gt; 0 and x′ = 1 for x ≤ 0, with x(0) = 0 (our own). No solution exists, even in Carathéodory's sense, because x cannot leave 0 in either direction and cannot stay there either. Existence theory for inclusions usually assumes that F has closed convex values and depends upper hemicontinuously on x.

**How the definition helps.** At the switching point, the convex hull contains both side values and every average of them, so it contains 0. Then x ≡ 0 is a solution, and the motion slides along the surface (our own). Filippov's construction gives exactly the closed convex values that the existence theorem for inclusions needs (our own). Convexity is the key condition: existence for non-convex F is still an active research area. Uniqueness is not automatic and needs extra conditions (our own).

**Wikipedia:** [Differential inclusion](https://en.wikipedia.org/wiki/Differential_inclusion). It says: “Differential inclusions can be used to understand and suitably interpret discontinuous ordinary differential equations, such as arise for Coulomb friction in mechanical systems and ideal switches in power electronics.”

**Sources:**

- [A. F. Filippov, Differential Equations with Discontinuous Righthand Sides, Kluwer (1988)](https://doi.org/10.1007/978-94-015-7793-9)

### Weyl's limit-point case means no boundary condition is needed

**Remember:** Each limit-circle end needs one boundary condition; limit-point ends need none.

*Makes the theorem clean to state or prove.* MSC 34B24 (Sturm-Liouville theory), 47E05. arXiv math.CA, math.SP. Level 3: graduate.

**Definition.** Take a Sturm–Liouville expression τu = (−(pu′)′ + qu)/r on an interval (a, b) whose endpoints may be singular. At an endpoint in the limit circle case, every solution of τu = λu is square integrable near that endpoint. In the limit point case, for non-real λ, only a one-dimensional space of solutions is. Weyl showed that the case does not depend on λ.

**Problem.** The deficiency indices of the minimal operator are 2, 1 or 0 when both, one or neither endpoint is in the limit circle case. So the operator is self-adjoint with no boundary conditions at all exactly when both endpoints are in the limit point case.

**How the definition helps.** The definition counts the square-integrable solutions at each endpoint, and the theorem shows that this count is the number of boundary conditions needed. Part (i) of the theorem gives the mechanism. In the limit point case, the Wronskian boundary term of any two functions in the maximal domain vanishes. Our own example is τu = −u″ + c x⁻² u on (0, ∞). Its solutions near 0 are powers of x, and 0 is limit point exactly when c ≥ 3/4; this is also our own. Our own remark is that the hard part is Weyl's alternative, that the case is the same for every λ.

**Paper or page:** [The Jacobi operator on (−1,1) and its various m-functions](https://arxiv.org/abs/2307.12164v1), [On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators](https://arxiv.org/abs/2509.07205v1). It says: “In particular, Tₘᵢₙ = Tₘₐₓ is self-adjoint (i.e., Ṫₘᵢₙ is essentially self-adjoint) if and only if τ is in the limit point case at a and b.”

**Sources:**

- [Fritz Gesztesy, Lance L. Littlejohn, Mateusz Piorkowski, Jonathan Stanfill, The Jacobi operator on (−1,1) and its various m-functions, Complex Anal. Oper. Theory 18 (2024) Paper No. 155, arXiv:2307.12164](https://doi.org/10.1007/s11785-024-01576-4)
- [Jussi Behrndt, Fritz Gesztesy, Seppo Hassi, Roger Nichols, Henk de Snoo, On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators, arXiv:2509.07205 (2025)](https://arxiv.org/abs/2509.07205v1)
- [Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/bf01474161)

### Defining singular Schrödinger operators by quadratic forms makes them self-adjoint

**Remember:** Define the operator by its energy, and self-adjointness comes free.

*True by definition.* MSC 34L40 (Particular ordinary differential operators (Dirac, one-dimensional Schrödinger, etc.)), 47B25, 47A07. arXiv math.SP, math.FA. Level 4: research.

**Definition.** The potential q is a real 1-periodic distribution in the Sobolev space H⁻¹, such as a periodic sum of Dirac deltas. H⁻¹ is the dual of H¹, the space of functions with a square-integrable derivative. So −u″ + qu has no direct meaning for most u. The form-sum operator is the self-adjoint operator given by the quadratic form ∫\|u′\|² + ⟨q, \|u\|²⟩ on H¹(ℝ).

**Problem.** For a singular potential, which operator is the Schrödinger operator, and is it self-adjoint? Several definitions exist, such as quasi-differential operators, form sums and limits of smooth potentials.

**How the definition helps.** With the form definition, self-adjointness and a lower bound come from the representation theorem for closed forms that are bounded below. The real step is to show that ⟨q, \|u\|²⟩ is small compared with ∫\|u′\|², so the sum stays closed and bounded below (our own). Proposition 17, quoted from earlier work, states that these form-sum operators are well defined and self-adjoint. Theorem 18, the main work, shows that the quasi-differential operators equal the form-sum operators. In our own gloss, quasi-differential operators rewrite the equation as a first-order system. Corollary 15 shows that the minimal operator, the Friedrichs extension and the maximal operator also coincide. So there is only one self-adjoint realization, and the abstract says all five definitions agree.

**Paper or page:** [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000). It says: “with 1-periodic real-valued singular potentials q(x) ∈ H⁻¹per(ℝ,ℝ) on the Hilbert space L₂(ℝ). We show equivalence of five basic definitions of the operators S(q) and prove that they are self-adjoint.”

**Sources:**

- [V. Mikhailets, V. Molyboga, One-dimensional Schrödinger operators with singular periodic potentials, Methods Funct. Anal. Topology 14 (2008), no. 2, 184–200, arXiv:0805.1000](https://arxiv.org/abs/0805.1000)
