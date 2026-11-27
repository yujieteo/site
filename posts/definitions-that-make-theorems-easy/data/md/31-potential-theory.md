### Harmonic functions defined as local real parts survive holomorphic composition

**Remember:** Composing a local real part with a holomorphic map gives another local real part.

*True by definition.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** In the plane, call a real function harmonic if it is the real part of a holomorphic function near each point. The usual definition requires continuous second partial derivatives whose sum is zero.

**Problem.** Let u be harmonic on an open set V, and let φ map an open set U holomorphically into V. Then u∘φ is harmonic on U.

**How the definition helps.** The local real part definition lets us use closure of holomorphic functions under composition. Near φ(z), write u as the real part of a holomorphic function f. Then near z, the composite is the real part of f∘φ. This is our own argument and avoids applying the second-order chain rule to the usual definition. The work moves into the equivalence of the definitions. For harmonic u, the function ∂u/∂x − i∂u/∂y is holomorphic by the Cauchy–Riemann equations. A local primitive of this function has real part u up to a constant.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Conversely, any harmonic function u on an open subset Ω of ℝ² is locally the real part of a holomorphic function.”

**Sources:** none listed. No primary source with a working link was found.

### The real-part Poisson kernel makes Poisson integrals harmonic

**Remember:** Average the holomorphic expression, then take its real part.

*True by definition.* MSC 31A10 (Integral representations, integral operators, integral equations methods in two dimensions), 30E20. arXiv math.CV, math.AP. Level 2: later undergraduate.

**Definition.** For z in the unit disc and ζ on its boundary, define the Poisson kernel as the real part of (ζ + z)/(ζ − z). The usual real formula is (1 − \|z\|²)/\|ζ − z\|².

**Problem.** Let f be real and integrable on the unit circle. Its Poisson integral is the average of the kernel times f over the circle. This integral is harmonic inside the disc.

**How the definition helps.** The real-part formula makes the Poisson integral the real part of one holomorphic function. Move the real part outside the integral, which is valid since f is real. The integral of the complex expression is holomorphic because its power series in z converges uniformly on each smaller closed disc before integration. This is our own argument and avoids computing second partial derivatives of the real kernel. The work goes into justifying the holomorphic integral and identifying the two kernel formulas by multiplying by the conjugate of the denominator.

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “is harmonic in D and has a radial limit that agrees with f almost everywhere on the boundary T of the disc.”

**Sources:** none listed. No primary source with a working link was found.

### The harmonic mean value definition survives locally uniform limits

**Remember:** Averages pass to uniform limits without taking derivatives.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 31A05. arXiv math.AP, math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous real function on an open set harmonic if it has the mean value property. Its value at each point equals its average over each sphere centered there whose closed ball lies in the set. The usual definition requires continuous second partial derivatives whose sum is zero.

**Problem.** If harmonic functions converge uniformly on every compact subset of an open set, the limit is harmonic.

**How the definition helps.** The mean value definition lets the limit pass directly through each average. The sphere in any one test is compact, so convergence there is uniform. The limit is continuous by local uniform convergence. The work goes into the equivalence of definitions. Our own summary is that averaging with smooth weights that depend only on radius makes the function smooth. Applying the property to the second-order Taylor expansion then shows that the second partial derivatives sum to zero. Conversely, the divergence theorem shows that zero sum makes the sphere average constant as the radius increases.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “The uniform limit of a convergent sequence of harmonic functions is still harmonic. This is true because every continuous function satisfying the mean value property is harmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the value −∞ makes log\|f\| subharmonic

**Remember:** Subharmonic functions may drop to minus infinity, so log\|f\| qualifies.

*Makes the theorem clean to state or prove.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions), 30H10. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** A function φ on a domain, with values in ℝ ∪ {−∞}, is subharmonic if it is upper semicontinuous and satisfies a comparison test. Upper semicontinuous means that its value at each point is at least the lim sup of nearby values. The test works on each closed ball in the domain. If a harmonic function h is at least φ on the boundary sphere, then h is at least φ inside.

**Problem.** For a holomorphic function f, the function log\|f\| is subharmonic. So \|f\|ᵅ is subharmonic for every α &gt; 0, which is used for the Hardy spaces Hᵖ with 0 &lt; p &lt; 1. These are spaces of holomorphic functions on the disc with bounded p-th means on circles.

**How the definition helps.** Upper semicontinuity and the value −∞ are exactly what log\|f\| needs at the zeros of f. Away from the zeros, log\|f\| is harmonic (our own remark). At a zero it tends to −∞, so a definition with real values or with continuity would exclude it. With the wider definition, log\|f\| has the maximum principle and the sub-mean-value property everywhere. This is how Jensen's formula and the Riesz representation of subharmonic functions enter complex analysis (our own). The identically −∞ function is then also subharmonic, and some authors exclude it by definition.

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “If f is a holomorphic function, then φ(z) = log\|f(z)\| is a subharmonic function if we define the value of φ(z) at the zeros of f to be −∞.”

**Sources:**

- [F. Riesz, Sur les fonctions subharmoniques et leur rapport à la théorie du potentiel, Acta Mathematica 48 (1926)](https://doi.org/10.1007/bf02565338)

### Extremal length distinguishes annuli with different radius ratios

**Remember:** Extremal length reads the annulus radius ratio without classifying its conformal maps.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions), 30C75. arXiv math.CV. Level 3: graduate.

**Definition.** To define the extremal length of a curve family, assign the domain a nonnegative measurable weight ρ with 0 &lt; ∫ρ² dA &lt; ∞. The weighted length of a curve is the line integral of ρ along it. For each weight take the infimum of these lengths, square it, and divide by ∫ρ² dA. The extremal length is the supremum of these quotients over all such weights.

**Problem.** Let 0 &lt; r &lt; R &lt; ∞ and 0 &lt; r′ &lt; R′ &lt; ∞. Suppose there is a holomorphic bijection with holomorphic inverse between r &lt; \|z\| &lt; R and r′ &lt; \|z\| &lt; R′. Then R/r = R′/r′.

**How the definition helps.** The weighted-length definition makes extremal length invariant under a conformal map, so we can compare annuli by computing one number for each. Under change of variables, multiplying the pulled-back weight by the absolute value of the derivative preserves weighted lengths and areas. Our own detail is to use curves tending to radius r at one end and R at the other. A bijection of open annuli with a continuous inverse sends this family to the corresponding family, possibly swapping the ends. The extremal length of these curves is log(R/r)/(2π). The work is to prove this value, using 1/\|z\| for the lower bound and Cauchy–Schwarz on radial segments for the upper bound. This avoids classifying maps between annuli by lifting them to strips via the exponential map.

**Wikipedia:** [Extremal length](https://en.wikipedia.org/wiki/Extremal_length), [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “EL(Γ) = log(r₂/r₁)/(2π).”

**Paper or page:** [Invariance of Extremal Length under Conformal Mappings](https://proofwiki.org/wiki/Invariance_of_Extremal_Length_under_Conformal_Mappings). It says: “Then Γ and Γ′ have the same extremal length”

**Sources:**

- [L. Ahlfors and A. Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129](https://doi.org/10.1007/BF02392634)

### Transfinite diameter makes logarithmic capacity monotone and proportional under scaling

**Remember:** More space allows more points to spread out, and scaling changes every distance equally.

*True by definition. Confidence: medium.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions), 30C85. arXiv math.CV. Level 3: graduate.

**Definition.** For compact nonempty K in the plane, let dₙ(K) be the largest geometric mean of distances between n ≥ 2 points, allowing repetition. The transfinite diameter is the limit of dₙ(K) as n grows. An alternative definition of logarithmic capacity uses probability measures on K and their average pairwise logarithmic interaction.

**Problem.** If K is contained in L, its logarithmic capacity is at most that of L. The capacity of aK + b is \|a\| times the capacity of K.

**How the definition helps.** The transfinite diameter definition makes both rules hold for each finite point configuration before taking the limit. For monotonicity, every choice of points in K is also a choice in L. The map z ↦ az + b multiplies all pairwise distances by \|a\|, so it scales each maximum by \|a\|. For a = 0 the image is a singleton with capacity zero. This is our own deduction and does not require any probability measures. The work goes into Fekete’s limit theorem and the equivalence of transfinite diameter with logarithmic capacity.

**Wikipedia:** [Conformal radius](https://en.wikipedia.org/wiki/Conformal_radius). It says: “In other words, dₙ(D) is the supremum of the geometric mean of pairwise distances of n points in D.”

**Sources:**

- [M. Fekete, Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten, Mathematische Zeitschrift 17 (1923), 228–249](https://doi.org/10.1007/BF01504345)

### Harmonic comparison preserves subharmonicity under decreasing limits

**Remember:** A boundary bound for the limit eventually bounds the sequence with a margin.

*True by definition. Confidence: medium.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP, math.CV. Level 3: graduate.

**Definition.** An upper semicontinuous function φ has open sets of the form {φ &lt; a} for real a. Call φ subharmonic if it is not identically −∞ and satisfies harmonic comparison on each closed ball in its domain. This means φ ≤ h on the boundary implies φ ≤ h inside for every continuous h with Δh = 0 inside. For twice continuously differentiable φ, the comparison condition is equivalent to Δφ ≥ 0, where Δ sums the pure second derivatives.

**Problem.** On a connected open set, a pointwise decreasing sequence of subharmonic functions has a subharmonic limit unless that limit is identically −∞.

**How the definition helps.** Harmonic comparison passes to decreasing limits because a small margin makes any boundary bound hold uniformly there, in our own proof. A pointwise infimum of upper semicontinuous functions is upper semicontinuous. Suppose the limit lies below h on the boundary of a ball. For any ε &gt; 0 the sets where φₖ &lt; h + ε are open, increasing, and cover the compact boundary. One such set covers the whole boundary, so comparison puts that term and the limit below h + ε inside. Let ε tend to zero to get comparison with h. The work moves into identifying comparison with Δφ ≥ 0 in the smooth case, since a decreasing limit need not have classical derivatives.

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “The limit of a decreasing sequence of subharmonic functions is subharmonic (or identically equal to −∞).”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic comparison preserves subharmonicity under pointwise maxima

**Remember:** If both functions stay below each harmonic bound, so does their maximum.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP, math.CV. Level 3: graduate.

**Definition.** An upper semicontinuous function φ has open sets of the form {φ &lt; a} for every real a. Call such a function subharmonic if it passes the following comparison on each closed ball in its domain. If φ ≤ h on the boundary for a continuous h with Δh = 0 inside, then φ ≤ h inside. For twice continuously differentiable φ, this is equivalent to Δφ ≥ 0, where Δ sums the pure second derivatives.

**Problem.** The pointwise maximum of two subharmonic functions is subharmonic.

**How the definition helps.** Harmonic comparison lets us prove the rule by checking each function separately, in our own proof. If their maximum lies below h on the boundary, then each function does too. Comparison puts each below h inside, so their maximum lies below h there as well. The maximum is upper semicontinuous because its strict sublevel sets are intersections of the two open sublevel sets. A maximum can have a kink, so the condition on classical derivatives cannot test it directly. The work moves into proving equivalence for smooth functions using the maximum principle.

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “The pointwise maximum of two subharmonic functions is subharmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic mean values force bounded harmonic functions on ℝⁿ to be constant

**Remember:** Two huge balls nearly coincide, so their averages nearly agree.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35J05. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average over every ball centered there and contained in the domain. The usual definition requires two continuous derivatives and Δu = 0, where Δ sums the pure second derivatives.

**Problem.** A bounded harmonic function on all of ℝⁿ is constant.

**How the definition helps.** The mean value definition lets Nelson compare two function values by comparing the volumes of two overlapping balls. Take balls of the same radius around any two fixed points. As the radius grows, the fraction that lies in only one ball tends to zero. Boundedness makes the difference of their averages tend to zero, while each average equals the value at its center. The work moves into deriving the mean value property from Δu = 0 and proving the converse, our own comparison of the two definitions.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Given two points, choose two balls with the given points as centers and of equal radius.”

**Sources:**

- [E. Nelson (1961), A proof of Liouville's theorem, Proceedings of the American Mathematical Society 12, 995](https://doi.org/10.1090/S0002-9939-1961-0259149-4)

### Harmonic mean values give Harnack’s inequality by comparing nested balls

**Remember:** For a nonnegative function, a smaller ball has no more integral.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35J05. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average over every ball centered there and contained in the domain. The usual definition requires two continuous derivatives and Δu = 0, where Δ sums the pure second derivatives.

**Problem.** Let V be a nonempty connected open set with compact closure inside a domain Ω. For every nonnegative harmonic u on Ω, Harnack’s inequality supᵥ u ≤ C infᵥ u holds with C depending only on V and Ω.

**How the definition helps.** The mean value definition turns the comparison of two values into a comparison of integrals over nested balls, in our own proof. Choose r &gt; 0 so that all radius-3r balls with centers in V lie inside Ω. If x and y in V are within 2r, then the radius-r ball at y lies inside the radius-3r ball at x. Nonnegativity and the volume ratio give u(y) ≤ 3ⁿu(x). Cover V by finitely many radius-r balls with centers in V, which is possible because its closure is compact. Connectedness links the centers through overlapping balls, so iterating gives a bound independent of x and y. The work moves into proving the mean value property equivalent to Δu = 0.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Then for every non-negative harmonic function u, Harnack's inequality supᵥ u ≤ C infᵥ u holds for some constant C that depends only on V and Ω.”

**Sources:** none listed. No primary source with a working link was found.

### The harmonic mean value property rules out nonconstant interior maxima

**Remember:** An average equal to the maximum forces the maximum throughout the ball.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP. Level 3: graduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average over every ball centered there and contained in the domain. The usual definition requires two continuous derivatives and Δu = 0, where Δ sums the pure second derivatives.

**Problem.** If a harmonic function on a connected open set attains its global maximum at an interior point, it is constant.

**How the definition helps.** The mean value definition makes the set of maximum points open, in our own proof. Around any maximum point, take a ball whose average must equal the maximum. Since the function never exceeds that value and is continuous, it equals the maximum throughout the ball. The set of maximum points is also closed by continuity. A connected set cannot split into two nonempty open sets, so the function is constant. The work moves into proving that the mean value property and the differential equation define the same functions.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “If U is connected, this means that f cannot have local maxima or minima, other than the exceptional case where f is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Perron's solution always exists, and regular points control the boundary

**Remember:** Perron always gives a harmonic function; regular points get the right boundary values.

*Makes the theorem clean to state or prove.* MSC 31B20 (Boundary value and inverse problems for harmonic functions in higher dimensions), 31B15. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** For a bounded domain and continuous boundary data φ, consider all subharmonic functions v with v ≤ φ on the boundary. The Perron solution is their pointwise supremum. A boundary point y is regular if it has a barrier. A barrier is a superharmonic function (the negative of a subharmonic one) that is 0 at y and positive elsewhere.

**Problem.** For every bounded domain and every continuous boundary data, the Perron solution is harmonic. It takes the prescribed value at each regular boundary point. Wiener's criterion decides which points are regular in terms of capacity, a measure of the size of a set for potential theory.

**How the definition helps.** The Perron definition separates existence from boundary behaviour, so existence holds for every domain and only the boundary question stays. The classical Dirichlet problem has no solution for some domains. Lebesgue's spine of 1912 is a thin cusp pointing into a domain in three dimensions. Its tip is not a regular point (our own wording). The punctured disc is another example (our own): its centre is not regular. With the split, these become statements about irregular points, not failures of existence. The hard part moves to Wiener's criterion, which decides regularity by a series of capacities.

**Wikipedia:** [Perron method](https://en.wikipedia.org/wiki/Perron_method), [Lebesgue spine](https://en.wikipedia.org/wiki/Lebesgue_spine). It says: “The Perron solution u(x) is always harmonic; however, the values it takes on the boundary may not be the same as the desired boundary values φ(x).”

**Sources:**

- [O. Perron, Eine neue Behandlung der ersten Randwertaufgabe für Δu = 0, Mathematische Zeitschrift 18 (1923)](https://doi.org/10.1007/BF01192395)
- [N. Wiener, The Dirichlet Problem, Journal of Mathematics and Physics 3 (1924)](https://doi.org/10.1002/sapm192433127)

### Dirichlet forms are exactly the energies whose flows keep values in \[0,1\]

**Remember:** An energy that respects clipping gives a flow that respects bounds.

*Makes the theorem clean to state or prove.* MSC 31C25 (Dirichlet forms), 60J46, 47D07. arXiv math.AP, math.PR. Level 3: graduate.

**Definition.** A symmetric Dirichlet form is a closed quadratic energy that does not increase when values are clipped to the interval \[0, 1\]. Here closed means that the form's domain is complete in the energy norm. A sub-Markovian semigroup is a time evolution that sends functions with values in \[0, 1\] to functions with values in \[0, 1\].

**Problem.** Take a symmetric closed coercive form on L². The form has the clipping property exactly when the semigroup that it generates is sub-Markovian.

**How the definition helps.** The definition converts the desired bound on an entire time evolution into one test on its energy. Our own explanation is that clipping cannot hurt either the energy or the squared distance to data already in range. The link between the clipping test and the flow still has to be proved.

**Paper or page:** [Equivalence of Sobolev norms with respect to weighted Gaussian measures](https://arxiv.org/abs/2009.13875v3). It says: “(ℰ,D(ℰ)) is a Dirichlet form on L²(E,μ). (S(t))ₜ≥₀ is a sub-Markovian semigroup on L²(E,μ).”

**Sources:**

- [Davide Addona, Equivalence of Sobolev norms with respect to weighted Gaussian measures, arXiv:2009.13875v3 (2023)](https://arxiv.org/abs/2009.13875v3)
- [A. Beurling, J. Deny, Dirichlet Spaces, Proc. Natl. Acad. Sci. USA 45(2) (1959) 208–215](https://doi.org/10.1073/pnas.45.2.208)

### Neumann capacity measures the effect of releasing a small Dirichlet patch

**Remember:** Measure a patch by the change it makes, not by its area.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 35J25. arXiv math.AP. Level 4: research.

**Definition.** Consider the conductivity equation div(γ∇u) = 0. One part of the boundary has zero voltage (a Dirichlet condition) and the rest has zero flux (a Neumann condition). Neumann capacity e(ω) is a number attached to a small patch ω of the zero-voltage part. By Lemma 4.1 of the paper, it is comparable to the squared H¹ norm of the solution of an auxiliary problem posed on ω.

**Problem.** Work in dimension two or three. Switch a patch ω from zero voltage to zero flux, keeping it away from the zero-flux boundary. If e(ω) tends to zero, then along a subsequence the interior voltage changes by e(ω) times an explicit term, plus a smaller error.

**How the definition helps.** Neumann capacity is chosen to be the size of the first correction, so the expansion can use e(ω) as the small parameter. For the reverse switch, from flux to voltage, the ordinary harmonic capacity plays this role. The hard part is to show that the correction converges along a subsequence to a nontrivial limit distribution.

**Paper or page:** [Small perturbations in the type of boundary conditions for an elliptic operator](https://arxiv.org/abs/2106.07407v1). It says: “we introduce a notion of “Neumann capacity” to handle the latter.”

**Sources:**

- [Eric Bonnetier, Charles Dapogny, Michael S. Vogelius, Small perturbations in the type of boundary conditions for an elliptic operator, arXiv:2106.07407 (2021)](https://arxiv.org/abs/2106.07407v1)

### Weighting an elliptic equation by distance gives harmonic measure on thin sets

**Remember:** Raise conductivity near a thin boundary so the boundary can affect solutions.

*Makes the theorem clean to state or prove.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 35J70. arXiv math.AP. Level 4: research.

**Definition.** Let Γ ⊂ ℝⁿ be Ahlfors regular of dimension d &lt; n − 1. This means a ball of radius r centered on Γ meets it in measure about rᵈ, and d need not be an integer. Take L = −div A∇ off Γ, with the ellipticity bounds of A comparable to dist(·, Γ) to the power d + 1 − n. Harmonic measure at x is the measure on Γ whose integral of boundary data gives the solution at x.

**Problem.** For such an operator, harmonic measure exists on Γ. It is doubling: doubling the radius of a boundary ball multiplies its mass by at most a fixed factor. It also satisfies change-of-pole formulas and a comparison principle.

**How the definition helps.** Because d + 1 − n &lt; 0, the weight grows near Γ, and this lets solutions feel a boundary of high codimension. Our own comparison is the ordinary Laplacian in ℝ³ outside one point. There, bounded harmonic functions extend across the point, so the point carries no harmonic measure. The paper still proves trace theorems, a maximum principle, Harnack and Hölder estimates, and Green function bounds before it defines harmonic measure.

**Paper or page:** [Elliptic theory for sets with higher co-dimensional boundaries](https://arxiv.org/abs/1702.05503v3). It says: “The aim of this manuscript is to develop a version of elliptic theory, associated to a linear PDE, which ultimately yields a notion analogous to that of the harmonic measure, for sets of codimension higher than 1.”

**Sources:**

- [Guy R. David, Joseph Feneuil, Svitlana Mayboroda, Elliptic theory for sets with higher co-dimensional boundaries, arXiv:1702.05503 (2023)](https://arxiv.org/abs/1702.05503v3)

### Irreducibility makes the ground state of a positive form unique and positive

**Remember:** One connected piece gives one positive ground state.

*Rules out counterexamples. Confidence: medium.* MSC 31C25 (Dirichlet forms), 47A07, 47D07. arXiv math.FA, math.SP. Level 4: research.

**Definition.** A closed quadratic form on L² is the energy q(u) = ‖√A u‖² of a self-adjoint operator A ≥ 0, with semigroup e⁻ᵗᴬ. The form satisfies the first Beurling–Deny criterion if q(\|u\|) ≤ q(u) for every u, so the semigroup keeps positive functions positive. The form is irreducible if no measurable set B, with B and its complement both of positive measure, splits it. Splitting means that the semigroup maps all functions on B to functions on B alone.

**Problem.** The kernel of a form is the set of u with q(u) = 0, the ground states. When is it at most one line, spanned by a function that is positive everywhere? The paper shows: whenever the form is irreducible and satisfies the first Beurling–Deny criterion.

**How the definition helps.** Irreducibility excludes the split case, in which the form is a sum of forms on disjoint pieces. In our own example, take the energy ∫\|u′\|² on two disjoint intervals, with no boundary condition. It vanishes on the indicator of each interval, so its kernel is two-dimensional. Positivity preservation lets one replace a ground state u by \|u\|. Irreducibility then forces it to be positive everywhere. So two ground states cannot be orthogonal (our own account of the Perron–Frobenius argument). This is a Perron–Frobenius theorem for forms.

**Paper or page:** [(Weak) Hardy and Poincaré inequalities and criticality theory](https://arxiv.org/abs/2108.11681v1). It says: “let q be an irreducible closed quadratic form on Lᵖ(X,μ) satisfying the first Beurling-Deny criterion. Then ker q is at most one-dimensional and if ker q≠{0}, there exists a strictly positive h∈Lᵖ(X,μ) such that ker q=ℝh.”

**Sources:**

- [Marcel Schmidt, (Weak) Hardy and Poincaré inequalities and criticality theory, arXiv:2108.11681 (2021), Springer Proc. Math. Stat. (2022) 421–459](https://arxiv.org/abs/2108.11681v1)

### Changing exterior data on a capacity-zero set leaves the Perron solution unchanged

**Remember:** Sets of zero capacity are invisible to the solution.

*Makes the theorem clean to state or prove.* MSC 31C45 (Other generalizations (nonlinear potential theory, etc.)), 35R11, 35J66. arXiv math.AP. Level 4: research.

**Definition.** The paper studies nonlocal equations of fractional p-Laplace type, where data are prescribed on the whole exterior Ωᶜ of the domain Ω. The Sobolev capacity C₍s,p₎(E) measures how large a set E is for the fractional Sobolev space. The upper Perron solution is the infimum of the superharmonic functions that lie above the data outside Ω. The paper's new definition of Perron solutions accepts any exterior data g with values in \[−∞, ∞\].

**Problem.** Let g be continuous on ℝⁿ and lie in the paper's Sobolev-type space for Ω. Let h be zero outside a set E with C₍s,p₎(E) = 0. Then the upper and lower Perron solutions of g + h agree, and P(g + h) = Pg in Ω.

**How the definition helps.** The new Perron definition accepts arbitrary exterior data, so the perturbation h may take any values on E, even ±∞. Without it, P(g + h) would not be defined for such h. For Sobolev solutions the invariance is nearly free: a set of zero capacity has zero volume, so g + h and g are the same Sobolev function. This explanation is our own. The real work is the theorem that Sobolev and Perron solutions coincide, which carries the invariance over to Perron solutions. The quote says that the invariance follows from that coincidence. Theorem 1.4 gives the same result for bounded continuous data with a limit at infinity.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “This also implies invariance of the Perron solutions under perturbations on sets of zero fractional capacity.”

**Sources:**

- [Anders Björn, Jana Björn, Minhyun Kim, Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems, arXiv:2406.05994v3 (2025)](https://arxiv.org/abs/2406.05994v3)
