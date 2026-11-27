### Harmonic functions defined as local real parts survive holomorphic composition

**Remember:** Composing a local real part with a holomorphic map gives another local real part.

*True by definition.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** In the plane, call a real function harmonic if it is the real part of a holomorphic function near each point. The usual definition requires continuous second partial derivatives whose sum is zero.

**Problem.** Let u be harmonic on an open set V, and let φ map an open set U holomorphically into V. Then u∘φ is harmonic on U.

**How the definition helps.** The local real part definition lets us use closure of holomorphic functions under composition. Near φ(z), write u as the real part of a holomorphic function f. Then near z, the composite is the real part of f∘φ. This is our own argument and avoids applying the second-order chain rule to the usual definition. The work moves into the equivalence of the definitions. For harmonic u, the function ∂u/∂x − i∂u/∂y is holomorphic by the Cauchy–Riemann equations. A local primitive of this function has real part u up to a constant.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Conversely, any harmonic function u on an open subset Ω of ℝ² is locally the real part of a holomorphic function.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected domains admit harmonic conjugates

**Remember:** A curl-free field gives one integral value when there are no holes.

*Rules out counterexamples.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a real harmonic function u in the plane, find its conjugate by integrating the field (−∂u/∂y, ∂u/∂x). This gives the imaginary part of a holomorphic function if the integral does not depend on the path. A simply connected domain is connected and every loop in it can shrink to a point.

**Problem.** On a simply connected planar domain, each real harmonic function has a single-valued harmonic conjugate, unique up to a constant.

**How the definition helps.** In our own proof, simple connectivity makes the integral of the rotated gradient independent of the path. Its curl equals the Laplacian of u, which vanishes because u is harmonic. The resulting potential satisfies the equations for a harmonic conjugate, and any two potentials differ by a constant. On an annulus centered at zero, the rotated gradient of log\|z\| integrates to 2π around a counterclockwise circle.

**Wikipedia:** [Harmonic conjugate](https://en.wikipedia.org/wiki/Harmonic_conjugate). It says: “taking a harmonic function u on a simply connected region in ℝ² to its harmonic conjugate v”

**Sources:** none listed. No primary source with a working link was found.

### The real-part Poisson kernel makes Poisson integrals harmonic

**Remember:** Average the holomorphic expression, then take its real part.

*True by definition.* MSC 31A10 (Integral representations, integral operators, integral equations methods in two dimensions), 30E20. arXiv math.CV, math.AP. Level 2: later undergraduate.

**Definition.** For z in the unit disc and ζ on its boundary, define the Poisson kernel as the real part of (ζ + z)/(ζ − z). The usual real formula is (1 − \|z\|²)/\|ζ − z\|².

**Problem.** Let f be real and integrable on the unit circle. Its Poisson integral is the average of the kernel times f over the circle. This integral is harmonic inside the disc.

**How the definition helps.** The real-part formula makes the Poisson integral the real part of one holomorphic function. Move the real part outside the integral, which is valid since f is real. The integral of the complex expression is holomorphic because its power series in z converges uniformly on each smaller closed disc before integration. This is our own argument and avoids computing second partial derivatives of the real kernel. The work goes into justifying the holomorphic integral and identifying the two kernel formulas by multiplying by the conjugate of the denominator.

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “is harmonic in D and has a radial limit that agrees with f almost everywhere on the boundary T of the disc.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing convex functions preserve subharmonicity

**Remember:** A convex increasing function keeps the center below the new average.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 2: later undergraduate.

**Definition.** Define a continuous subharmonic function by requiring its value at each center to be at most its spherical average on every interior ball. The twice differentiable definition uses a nonnegative Laplacian instead.

**Problem.** Composing a continuous subharmonic function with a convex nondecreasing real function gives another subharmonic function.

**How the definition helps.** In our own proof, the average definition lets us apply monotonicity and then Jensen’s inequality. First apply the nondecreasing function to the inequality between the center value and the sphere average. Convexity bounds the function of the average by the average of the function. The work is showing that the average test agrees with comparison against harmonic functions on balls.

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “the values of the subharmonic function are no larger than the values of the harmonic function also inside the ball”

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

### Conformal maps preserve condenser capacity

**Remember:** In the plane, the gradient scale cancels the area scale.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded planar domain with two disjoint smooth boundary curves, take the infimum of the integral of squared gradient length. Use smooth interior functions that extend continuously to the closure, with value zero on one curve and one on the other. This defines condenser capacity without first solving for the equilibrium voltage.

**Problem.** A conformal bijection that extends to a homeomorphism of the closures preserves this capacity.

**How the definition helps.** In our own proof, using the energy infimum makes it enough to transport each test function. Composing with the map multiplies squared gradient length by the squared magnitude of its derivative. This is also the area factor, so changing variables gives equal energies. The inverse map gives the reverse correspondence, and the two infima agree. The work is proving agreement with the charge computed from the harmonic voltage with the prescribed boundary values.

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “a variational characterization: C(Σ, S) is the infimum of the Dirichlet's energy functional”

**Sources:** none listed. No primary source with a working link was found.

### Conformal maps transport harmonic measure

**Remember:** Transport the boundary data and its harmonic average stays the same.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** A harmonic function has Laplacian zero. Define harmonic measure at an interior point as the measure whose average of continuous boundary data gives their harmonic extension there. Another definition uses the distribution of the first exit point of Brownian motion.

**Problem.** Take two bounded planar domains enclosed by simple closed curves. Suppose a conformal bijection extends to a homeomorphism of their closures. The map carries harmonic measure at each interior point to harmonic measure at its image.

**How the definition helps.** The definition tests against continuous data, so our own proof pulls each test function back through the map. Harmonic extension commutes with conformal changes by uniqueness of the boundary problem (our own). The work moves to existence of the representing measure and to harmonicity under conformal changes (our own).

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “determines a probability measure ω(x, D) on ∂D by”

**Paper or page:** [Rational lemniscates and the matching problem](https://arxiv.org/abs/2507.03547v1). It says: “ω(B₁,w,Ω) = ω(B₂,f(w),Ω′) (w ∈ Ω).”

**Sources:** none listed. No primary source with a working link was found.

### Disk averages preserve harmonic measure

**Remember:** A fixed center keeps the boundary average fixed.

*True by definition. Confidence: medium.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.DS. Level 3: graduate.

**Definition.** Take a bounded planar domain enclosed by a simple closed curve. Choose a conformal bijection from the disk that sends its center to p. Its boundary map sends uniform circle probability to a measure called harmonic measure from p. Equivalently, averaging continuous boundary data against this measure gives the value of their harmonic extension at p.

**Problem.** Let a holomorphic self-map of this domain extend continuously to its closure and send boundary to boundary. If it fixes p, it preserves harmonic measure from p.

**How the definition helps.** In our own proof, disk coordinates turn harmonic measure into a circle average. The boundary extension theorem gives a continuous boundary map in both directions. In these coordinates the given map fixes zero. Extend continuous circle data harmonically using the Poisson formula. Composing with the disk map preserves harmonicity and the value at zero. The mean value property therefore gives equal boundary averages before and after composition.

**Paper or page:** [Pesin theory for transcendental maps and applications](https://arxiv.org/abs/2410.19703v2). It says: “the harmonic measure $ \\omega \_U(p,\\cdot ) $ is invariant under $ f $.”

**Sources:**

- [Pesin theory for transcendental maps and applications](https://arxiv.org/abs/2410.19703v2)

### Disk derivatives give conformal radius scaling

**Remember:** Compose the disk map and multiply the derivatives.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Choose a conformal bijection g from the unit disk onto a simply connected planar domain other than the whole plane. Choose g so that g(0) = a. Define the conformal radius at a as \|g′(0)\|.

**Problem.** A conformal bijection f multiplies the conformal radius at a by \|f′(a)\|.

**How the definition helps.** In our own proof, composing g with f gives a disk map for the image domain. The chain rule multiplies its derivative magnitude by \|f′(a)\|. Two choices of g differ by a disk rotation, so both give the same radius. The alternative uses the positive Green function G with logarithmic pole at a and zero boundary values. The work is proving that G(z) + log\|z − a\| tends to the logarithm of the disk derivative magnitude.

**Paper or page:** [Two dimensional potential theory with a view towards vortex motion: Energy, capacity and Green functions](https://arxiv.org/abs/2405.19215v3). It says: “h₀(z) = h̃₀(w) + log \|f′(w)\|”

**Sources:**

- [Two dimensional potential theory with a view towards vortex motion: Energy, capacity and Green functions](https://arxiv.org/abs/2405.19215v3)

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

### Green distance controls capacity

**Remember:** If two Green functions stay close, their constants at infinity stay close.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Take compact planar sets with connected complements. Assume each has a positive harmonic function g outside it that extends continuously by zero across the set. Require g(z) − log\|z\| to have a finite limit at infinity, and define logarithmic capacity as the exponential of minus that limit. Define Γ as the supremum over the plane of the absolute difference between two such functions.

**Problem.** The difference of the logarithms of the two capacities has absolute value at most Γ.

**How the definition helps.** The pointwise bound on the difference also bounds its limit at infinity, in our own argument. In our own account, the work is showing that the constant at infinity gives the same capacity as energy minimization.

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “In particular the logarithmic capacity is continuous on (ℛ, Γ).”

**Sources:** none listed. No primary source with a working link was found.

### Green levels give exact capacities

**Remember:** Raise the Green level and multiply capacity by the exponential of that level.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Let K be compact in the plane with connected complement. Its exterior Green function g is positive and harmonic outside K, and g(z) − log\|z\| has a finite limit at infinity. Assume g extends continuously by zero on K. For ε &gt; 0 define Kε by g ≤ ε, using potential levels instead of ordinary distance.

**Problem.** The logarithmic capacity of Kε equals exp(ε) times the logarithmic capacity of K.

**How the definition helps.** In our own proof, subtracting ε makes the potential vanish on the new boundary. Outside Kε the shifted function remains positive and harmonic. Uniqueness identifies it as the new Green function. Logarithmic capacity equals the exponential of minus the limit of g(z) − log\|z\|, so the shift multiplies capacity by exp(ε).

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “Furthermore, cap(Kε) = exp(−γ + ε).”

**Sources:**

- [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3)

### Harmonic exit measures compose

**Remember:** Exit the inner domain first, then start again from the exit point.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.PR, math.CV. Level 3: graduate.

**Definition.** Start Brownian motion at an interior point x. Define harmonic measure at x as the probability distribution of its first exit point. The analytic definition uses the measure to average prescribed boundary values of a harmonic function.

**Problem.** Start inside the smaller of two bounded planar domains, with its closure inside the larger domain. Average the outer exit distribution using the inner exit point as the new starting point. This gives the outer exit distribution from the original point.

**How the definition helps.** The exit-law definition lets our own proof condition on the first exit from the inner domain. The work moves to the strong Markov theorem and the agreement of the exit law with the analytic measure (our own). The theorem lets Brownian motion restart from its current point at a random stopping time (our own).

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “Harmonic measure is the exit distribution of Brownian motion”

**Paper or page:** [Speeds of Convergence for Petals of Semigroups of Holomorphic Functions](https://arxiv.org/abs/2303.09961v1). It says: “ω(z,E,Ω₂) = ω(z,E,Ω₁) + ∫∂Ω₁∖∂Ω₂ ω(ζ,E,Ω₂) · ω(z,dζ,Ω₁).”

**Sources:** none listed. No primary source with a working link was found.

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

### Kelvin weighting preserves harmonicity

**Remember:** Sphere inversion needs a power of distance to preserve harmonicity.

*Rules out counterexamples.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** For x ≠ 0 in dimension n ≥ 3, sphere inversion sends x to x/\|x\|². The Kelvin transform evaluates u there and multiplies by \|x\| to the power 2 − n. A harmonic function has Laplacian zero.

**Problem.** The Kelvin transform of a harmonic function is harmonic in the inverted domain away from the origin.

**How the definition helps.** The weight makes the extra derivative terms cancel, so only a multiple of the original Laplacian remains (our own). In our own counterexample, unweighted inversion of the first coordinate gives x₁/\|x\|², which is not harmonic when n ≥ 3. The work moves to checking the weighted Laplacian identity by the chain rule (our own).

**Wikipedia:** [Kelvin transform](https://en.wikipedia.org/wiki/Kelvin_transform). It says: “Then a function u is harmonic, subharmonic or superharmonic in D if and only if the Kelvin transform u\*”

**Sources:** none listed. No primary source with a working link was found.

### The harmonic mean value property rules out nonconstant interior maxima

**Remember:** An average equal to the maximum forces the maximum throughout the ball.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP. Level 3: graduate.

**Definition.** Call a continuous function harmonic if its value at each point equals its average over every ball centered there and contained in the domain. The usual definition requires two continuous derivatives and Δu = 0, where Δ sums the pure second derivatives.

**Problem.** If a harmonic function on a connected open set attains its global maximum at an interior point, it is constant.

**How the definition helps.** The mean value definition makes the set of maximum points open, in our own proof. Around any maximum point, take a ball whose average must equal the maximum. Since the function never exceeds that value and is continuous, it equals the maximum throughout the ball. The set of maximum points is also closed by continuity. A connected set cannot split into two nonempty open sets, so the function is constant. The work moves into proving that the mean value property and the differential equation define the same functions.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “If U is connected, this means that f cannot have local maxima or minima, other than the exceptional case where f is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Weak harmonicity survives integral limits

**Remember:** Put the derivatives on the test function before taking the limit.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** Call a locally integrable function weakly harmonic if its integral against Δφ is zero for every smooth, compactly supported φ. Here Δφ is the sum of the pure second derivatives. The classical definition instead takes the second derivatives of the function itself.

**Problem.** A limit in local L¹ of harmonic functions agrees almost everywhere with a harmonic function. Local L¹ convergence means that the integral of the absolute error tends to zero on every compact subset.

**How the definition helps.** In our own proof, the definition puts all derivatives on a fixed test function. Its Laplacian is bounded and vanishes outside a compact set, so local integral convergence preserves the zero integral. Weyl’s lemma gives a smooth harmonic function equal to the limit almost everywhere.

**Wikipedia:** [Weyl's lemma (Laplace equation)](https://en.wikipedia.org/wiki/Weyl%27s_lemma_%28Laplace_equation%29). It says: “every weak solution of Laplace's equation is a smooth solution”

**Sources:** none listed. No primary source with a working link was found.

### Centered ball exits are uniform

**Remember:** A random path from the center treats every direction the same.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions), 60J45. arXiv math.PR, math.AP. Level 3: graduate.

**Definition.** Brownian motion is continuous random motion with independent Gaussian displacements of mean zero and covariance tI over each interval of length t. Define harmonic measure as the distribution of its first exit point from a ball. Equivalently, averaging continuous boundary data against harmonic measure gives the harmonic extension at the starting point.

**Problem.** Harmonic measure from the center of a ball is uniform surface measure on its boundary.

**How the definition helps.** Rotating the path does not change its law, so the exit law is rotation invariant. In our own account, the only rotation invariant probability on the sphere is uniform. The work shifts to identifying Brownian exit averages with solutions of the Dirichlet problem, in our own account.

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “coincides with the normalized surface measure”

**Sources:** none listed. No primary source with a working link was found.

### Heat integration gives positive Green kernels

**Remember:** A discounted sum of positive heat kernels stays positive.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** For the operator 1 − Δ on Euclidean space, define its Green kernel by integrating the heat kernel against exp(−t) from zero to infinity. The heat kernel describes the spread of heat from a unit point source. The usual Green function solves the point-source equation and decays at infinity.

**Problem.** The Green kernel of the negative Laplacian plus 1 on Euclidean space is positive off the diagonal.

**How the definition helps.** The heat integral adds positive values with positive weights, so it gives strict positivity directly (our own). Away from the source, the Gaussian heat kernel decays fast enough near time zero for the integral to converge (our own). The exponential weight controls large times (our own). The work lies in identifying the integral with the inverse of 1 − Δ (our own).

**Paper or page:** [Nonlocal nonlinear diffusion equations. Smoothing effects, Green functions, and functional inequalities](https://arxiv.org/abs/2205.06850v2). It says: “and the Green functions of $-\\mathfrak {L}$ and $I-\\mathfrak {L}$ are respectively given by\\\[  \\mathbb {G}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x)=\\int <sub>0</sub><sup>\\infty</sup> \\mathbb {H}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x,t)\\, \\mathrm{d}t  \\\]and\\\[  \\mathbb {G}\_{I-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x)=\\int <sub>0</sub><sup>\\infty</sup> \\textup{e}<sup>-t</sup>\\mathbb {H}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x,t)\\, \\mathrm{d}t,  \\\]”

**Sources:**

- [Matteo Bonforte and Jørgen Endal, Nonlocal nonlinear diffusion equations. Smoothing effects, Green functions, and functional inequalities (2022), Proposition 7.1](https://arxiv.org/abs/2205.06850v2)

### Inverse operators explain Green symmetry

**Remember:** An inverse keeps the symmetry of the operator it inverts.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** Define the Dirichlet Green kernel as the integral kernel of the inverse of the negative Laplacian with zero boundary values. The point-source definition solves a separate singular equation for each pole.

**Problem.** On a bounded smooth Euclidean domain, the Dirichlet Green function satisfies G(x,y) = G(y,x) for distinct interior points.

**How the definition helps.** The inverse preserves the symmetry of the Laplacian’s inner product pairing, so exchanging two test functions leaves that pairing unchanged (our own). Testing the real kernel gives symmetry almost everywhere (our own). Continuity away from the diagonal gives equality at every distinct pair (our own). The work lies in constructing the inverse and identifying its kernel with the point-source solution (our own).

**Paper or page:** [The Strong Maximum Principle and the Harnack inequality for a class of hypoelliptic divergence-form operators](https://arxiv.org/abs/1407.1669v1). It says: “kε(x,y) = kε(y,x) for every x,y ∈ Ω.”

**Sources:**

- [The Strong Maximum Principle and the Harnack inequality for a class of hypoelliptic divergence-form operators](https://arxiv.org/abs/1407.1669v1)

### Finite energy forbids point charges

**Remember:** A point charge makes the reciprocal distance infinite with positive probability.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** For a compact set in ℝ³, define Newtonian capacity as the reciprocal of the infimum of energy over probability measures on the set. Energy is the average of 1/\|x − y\| for two independent points with that measure. Use zero for the reciprocal of infinite energy.

**Problem.** Every finite-energy probability measure gives each point zero mass. In particular, each singleton has zero Newtonian capacity.

**How the definition helps.** In our own argument, the energy integral detects a point mass through the event that both sampled points equal it. A point of mass m gives that event probability m², and the integrand is infinite there. On a singleton the only probability measure has this form. The work is proving agreement with the alternative definition using a potential held at unit voltage.

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “C(K)=\\left\[\\inf\_\\lambda E(\\lambda)\\right\]<sup>-1</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Riesz potential orders add

**Remember:** Multiply the frequency weights and their orders add.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 44A35. arXiv math.CA. Level 3: graduate.

**Definition.** Use the Fourier convention with exponential exp(−ix · ξ). Define a Riesz potential of order α by multiplying the Fourier transform by \|ξ\| to the power −α. The usual integral in space instead averages against a normalized power of distance.

**Problem.** Take smooth input that decays rapidly along with all its derivatives. Choose positive orders α and β with sum less than the space dimension. Composing their Riesz potentials gives the potential of order α + β.

**How the definition helps.** Multiplication adds the exponents, so two Fourier weights give exactly the weight of the summed order (our own). The sum is below the dimension, making the product locally integrable at zero (our own). Rapid decay controls the integral at large frequencies (our own). Identifying this Fourier formula with the spatial integral requires the Fourier transform of the normalized distance kernel (our own).

**Wikipedia:** [Riesz potential](https://en.wikipedia.org/wiki/Riesz_potential). It says: “Consideration of the Fourier transform reveals that the Riesz potential is a Fourier multiplier.”

**Sources:** none listed. No primary source with a working link was found.

### Boundary values fix Green functions

**Remember:** A point source fixes the singularity, and the boundary fixes the rest.

*Rules out counterexamples.* MSC 31B20 (Boundary value and inverse problems for harmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** On a bounded smooth domain, a Dirichlet Green function solves the negative Laplace equation with a unit point source and zero boundary values. The equation holds against smooth test functions, including at the source. A fundamental solution prescribes only the source.

**Problem.** There is at most one Dirichlet Green function for each fixed interior pole.

**How the definition helps.** Subtracting two candidates cancels both the point source and the boundary values (our own). Weyl’s lemma makes the difference smooth and harmonic because its Laplacian vanishes against every test function (our own). The maximum principle then makes the difference zero everywhere (our own). Without boundary values, adding 1 gives another solution (our own).

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “Green's function that vanishes on the boundary”

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

### Exterior balls supply barriers

**Remember:** Use distance from an outside ball to build a function that vanishes only at contact.

*True by definition.* MSC 31B25 (Boundary behavior of harmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** A barrier at a boundary point is a positive superharmonic function nearby inside the domain. It tends to zero there and stays bounded away from zero outside each smaller neighborhood. A continuous function is superharmonic if its value at each ball center is at least its average over the sphere.

**Problem.** For a bounded domain in ℝ³, an exterior closed ball meeting the closure only at one point makes that point regular. This means harmonic extensions of continuous data tend to the given value there.

**How the definition helps.** In our own proof, the barrier criterion replaces a separate boundary estimate for each choice of continuous data. Write c for the exterior ball’s center and R for its radius. The function 1/R − 1/\|x − c\| is harmonic inside the domain and positive except at contact on the closure. Compactness gives a positive lower bound away from contact. This function and its negative provide upper and lower barriers. The barrier criterion supplies the implication from these inequalities to boundary convergence.

**Paper or page:** [The Wiener criterion for fully nonlinear elliptic equations](https://arxiv.org/abs/2301.00960v1). It says: “there exist an upper barrier and a lower barrier at x₀.”

**Sources:**

- [The Wiener criterion for fully nonlinear elliptic equations](https://arxiv.org/abs/2301.00960v1)

### Disk tests preserve plurisubharmonicity

**Remember:** A holomorphic map sends each test disk to another test disk.

*True by definition.* MSC 31C10 (Pluriharmonic and plurisubharmonic functions). arXiv math.CV. Level 3: graduate.

**Definition.** An upper semicontinuous function has value at least its limiting upper value at each point. Call it plurisubharmonic if every holomorphic map from the unit disk pulls it back to a subharmonic function. This means each value is at most the average on every sufficiently small circle centered there, allowing the constant −∞. The usual test in complex Euclidean space uses only affine complex lines.

**Problem.** Composing a plurisubharmonic function with a holomorphic map gives a plurisubharmonic function, with the identically −∞ case allowed.

**How the definition helps.** Composing the holomorphic map with a test disk gives another test disk, so the circular average inequality follows immediately (our own). Continuity of the map preserves upper semicontinuity (our own). The work lies in proving that the affine-line test implies the disk test (our own).

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic weights cancel along paths

**Remember:** The intermediate harmonic weights cancel along a path.

*True by definition.* MSC 31C20 (Discrete potential theory). arXiv math.PR. Level 3: graduate.

**Definition.** Consider a Markov chain on a countable set with one-step probabilities P(x,y). Choose a finite positive function h whose expected value after one step from x equals h(x). Such a function is harmonic for the chain. Define the transformed transition probability as P(x,y) times h(y)/h(x).

**Problem.** The transformed probabilities define a random walk. Its n-step transitions are the original n-step transitions times the same ratio of final to initial weights.

**How the definition helps.** In our own calculation, the denominator at each intermediate state cancels the preceding numerator. Summing over paths gives the formula for any number of steps. Harmonicity ensures that the probabilities from each state sum to one. This replaces conditioning each path separately when h gives the positive probability of a future event from each state. That interpretation requires proving that conditioning on the event gives the stated one-step probabilities.

**Wikipedia:** [Doob's h-transform](https://en.wikipedia.org/wiki/Doob%27s_h-transform). It says: “the transition probabilities of the transformed process are explicitly given as functions of h”

**Sources:** none listed. No primary source with a working link was found.

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

### Energy projections make balayage nonexpansive

**Remember:** Projecting both charges cannot increase their energy distance.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.CA. Level 4: research.

**Definition.** A positive charge is a positive measure. For order α in dimension n, its Riesz potential integrates distance to the power α − n against the charge. Energy integrates the potential against the charge itself, and the energy distance is the square root of the energy of the difference. Sweeping selects the nearest positive finite-energy charge supported on a given closed set.

**Problem.** Fix a Riesz order greater than zero and at most two in Euclidean dimension n ≥ 3. Sweeping two positive finite-energy charges onto the same closed set cannot increase their energy distance.

**How the definition helps.** Nearest-point projection onto a convex set cannot increase distances in an inner product space (our own). The work lies in proving the nearest charge exists and gives the usual sweeping operation (our own). That operation preserves the original potential on the set apart from subsets supporting no nonzero positive charge of finite energy (our own).

**Paper or page:** [Fractional harmonic measure in minimum Riesz energy problems with external fields](https://arxiv.org/abs/2311.18081v1). It says: “\\\| \\sigma -\\sigma ^A\\\| =\\min <sub>\\mu \\in \\mathcal E'(A)</sub>\\, \\\| \\sigma -\\mu \\\| .”

**Sources:**

- [Fractional harmonic measure in minimum Riesz energy problems with external fields](https://arxiv.org/abs/2311.18081v1)

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

### Countable unions preserve polarity

**Remember:** Countably many sets of zero capacity still have zero capacity.

*True by definition.* MSC 31C15 (Potentials and capacities on other spaces). arXiv math.CV, math.AP. Level 4: research.

**Definition.** On a compact complex manifold with a Hermitian metric, fix an integer m between one and the complex dimension. Local m-polarity means that a local m-subharmonic function equals −∞ on the set without being identically −∞. These functions satisfy positivity tests on the first m powers of their complex second derivatives, interpreted weakly. Equivalently, the set has zero outer Hessian capacity, a size defined using positive measures from bounded test functions.

**Problem.** A countable union of locally m-polar Borel sets is locally m-polar.

**How the definition helps.** The capacity definition allows each set to have an open cover of arbitrarily small capacity (our own). Capacity on open sets takes a supremum over positive test measures, so the capacity of a union never exceeds the sum (our own). Choose open neighborhoods with capacities below ε/2ⁿ and take their union (our own). Every ε &gt; 0 works, so the union has zero outer capacity (our own). Lemma 6.2 supplies the hard equivalence with local m-polarity.

**Paper or page:** [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159v1). It says: “E is a locally m-polar set ⇔ cap′ₘ⁎(E) = 0 ⇔ capₘ⁎(E) = 0.”

**Sources:**

- [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159v1)

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
