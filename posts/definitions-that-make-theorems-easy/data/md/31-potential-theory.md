### Harmonic functions defined as local real parts survive holomorphic composition

**Remember:** Harmonic means locally the real part of something holomorphic.

*True by definition.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Here a real function on a plane open set is harmonic if, near each point, it is the real part of a holomorphic function. This agrees with the usual definition by a vanishing Laplacian.

**Problem.** Let u be harmonic on an open set V, and let φ map an open set U holomorphically into V. Then u∘φ is harmonic on U.

**How the definition helps.** Composition keeps the local real-part form (our own). Near φ(z) write u = Re f with f holomorphic, and then u∘φ = Re(f∘φ) near z (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Conversely, any harmonic function u on an open subset Ω of ℝ² is locally the real part of a holomorphic function.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected domains admit harmonic conjugates

**Remember:** A conjugate is a potential for the rotated, curl-free gradient.

*Rules out counterexamples.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A harmonic conjugate of a real harmonic function u on a planar domain is a real function v with u + iv holomorphic. Equivalently, v is a potential for the rotated gradient (−∂u/∂y, ∂u/∂x), a field whose curl is Δu = 0 (our own).

**Problem.** On a simply connected planar domain, each real harmonic function has a single-valued harmonic conjugate, unique up to a constant.

**How the definition helps.** On a simply connected domain a curl-free field has path-independent integrals, so it has a potential v, unique up to a constant (our own). On an annulus around zero this fails for log\|z\|: its rotated gradient integrates to 2π around a counterclockwise circle (our own).

**Wikipedia:** [Harmonic conjugate](https://en.wikipedia.org/wiki/Harmonic_conjugate). It says: “taking a harmonic function u on a simply connected region in ℝ² to its harmonic conjugate v”

**Sources:** none listed. No primary source with a working link was found.

### The real-part Poisson kernel makes Poisson integrals harmonic

**Remember:** Average the holomorphic expression, then take its real part.

*True by definition.* MSC 31A10 (Integral representations, integral operators, integral equations methods in two dimensions), 30E20. arXiv math.CV, math.AP. Level 2: later undergraduate.

**Definition.** For z in the disc and ζ on the circle, the Poisson kernel is the real part of (ζ + z)/(ζ − z), which is holomorphic in z. It equals (1 − \|z\|²)/\|ζ − z\|².

**Problem.** Let f be real and integrable on the unit circle. Its Poisson integral, the circle average of the kernel times f, is harmonic inside the disc.

**How the definition helps.** For real f, the Poisson integral is the real part of the circle average of (ζ + z)/(ζ − z) times f (our own). That average is holomorphic, because the kernel's power series in z converges uniformly on smaller closed disks and integrates termwise (our own). Real parts of holomorphic functions are harmonic.

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “is harmonic in D and has a radial limit that agrees with f almost everywhere on the boundary T of the disc.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing convex functions preserve subharmonicity

**Remember:** A convex increasing function keeps the center below the new average.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 2: later undergraduate.

**Definition.** A continuous function is subharmonic if its value at each point is at most its average over each sphere about that point whose closed ball lies in the domain.

**Problem.** Composing a continuous subharmonic function with a convex nondecreasing real function gives another subharmonic function.

**How the definition helps.** Apply the nondecreasing function to the inequality between the center value and the sphere average (our own). Jensen's inequality, from convexity, bounds the function of the average by the average of the function (our own). The work is in showing that this average test agrees with comparison against harmonic functions.

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “the values of the subharmonic function are no larger than the values of the harmonic function also inside the ball”

**Sources:** none listed. No primary source with a working link was found.

### The harmonic mean value definition survives locally uniform limits

**Remember:** Averages pass to uniform limits without taking derivatives.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 31A05. arXiv math.AP, math.CV. Level 2: later undergraduate.

**Definition.** Here a continuous real function on an open set is harmonic if it equals its own sphere averages. That is, its value at each point is its average over every sphere centered there whose closed ball lies in the set.

**Problem.** If harmonic functions converge uniformly on every compact subset of an open set, the limit is harmonic.

**How the definition helps.** Each test uses one compact sphere, where the convergence is uniform, so the averages pass to the limit, and the limit is continuous. The work goes into the equivalence of definitions. In our own summary, averaging with radial smooth weights makes the function smooth, and Taylor expansion shows its Laplacian is zero.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “The uniform limit of a convergent sequence of harmonic functions is still harmonic. This is true because every continuous function satisfying the mean value property is harmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the value −∞ makes log\|f\| subharmonic

**Remember:** Subharmonic functions may drop to minus infinity, so log\|f\| qualifies.

*Makes the theorem clean to state or prove.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions), 30H10. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** A subharmonic function φ maps a domain to ℝ ∪ {−∞}, so −∞ is an allowed value. It is upper semicontinuous, and on every closed interior ball, φ ≤ h on the boundary implies φ ≤ h inside, for each continuous h harmonic inside.

**Problem.** For a holomorphic function f, the function log\|f\| is subharmonic. So \|f\|ᵅ is subharmonic for every α &gt; 0.

**How the definition helps.** The value −∞ makes log\|f\| upper semicontinuous at zeros and gives the local circle mean inequality there automatically (our own). Elsewhere log\|f\| is locally harmonic, so it satisfies the local mean test everywhere (our own). Applying the increasing convex function t ↦ exp(αt) preserves the inequality by Jensen’s inequality, with exp(−∞) = 0 (our own).

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “If f is a holomorphic function, then φ(z) = log\|f(z)\| is a subharmonic function if we define the value of φ(z) at the zeros of f to be −∞.”

**Sources:**

- [F. Riesz, Sur les fonctions subharmoniques et leur rapport à la théorie du potentiel, Acta Mathematica 48 (1926)](https://doi.org/10.1007/bf02565338)

### Harmonic replacements find the least majorant

**Remember:** Harmonic replacements increase toward the smallest harmonic upper bound.

*True by definition.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** Take a continuous subharmonic u on the unit disk and a closed disk inside it. Its harmonic replacement there is continuous on the closed disk, equals u on the circle and is harmonic inside. By comparison it lies above u and below every harmonic majorant of u (our own).

**Problem.** If a continuous subharmonic function on the unit disk has any harmonic upper bound, it has a least harmonic upper bound.

**How the definition helps.** On concentric disks growing to the unit disk, comparison makes successive replacements increase on their common domain (our own). They stay below any harmonic majorant, so Harnack's convergence theorem gives a harmonic limit (our own). The same bounds make that limit the least majorant (our own).

**Paper or page:** [Boundary exceptional sets for radial limits of superharmonic functions on non-positively curved Harmonic manifolds of purely exponential volume growth](https://arxiv.org/abs/2309.05661). It says: “f has a least harmonic majorant on X.”

**Sources:** none listed. No primary source with a working link was found.

### Upper limits repair subharmonic envelopes

**Remember:** Take the upper limit nearby to fill a downward hole.

*True by definition.* MSC 31A05 (Harmonic, subharmonic, superharmonic functions in two dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** The upper regularization v⋆ replaces each value of v by its upper limit nearby. So v⋆(z) is the limit, as r shrinks to 0, of the supremum of v on the disk of radius r about z. Here v is the supremum of a sequence of subharmonic functions on a planar domain, uniformly bounded above on each compact subset.

**Problem.** The upper regularization v⋆ of this supremum is subharmonic.

**How the definition helps.** Regularization makes v⋆ upper semicontinuous and keeps every continuous upper bound (our own). On a closed interior disk, a continuous harmonic h above v⋆ on the circle lies above each original function there, hence inside (our own). So v ≤ h inside, and continuity of h carries this bound to v⋆, giving the comparison test (our own).

**Paper or page:** [Viscosity solutions to complex Hessian equations](https://arxiv.org/abs/1209.5343). It says: “where v⋆ is the upper semicontinuous regularization of v.”

**Sources:** none listed. No primary source with a working link was found.

### Boundary measures represent positive harmonic functions

**Remember:** A boundary point mass can carry all the harmonic mass.

*Makes the theorem clean to state or prove.* MSC 31A10 (Integral representations, integral operators, integral equations methods in two dimensions), 30E20. arXiv math.CV. Level 3: graduate.

**Definition.** The Poisson integral of a finite positive measure μ on the unit circle is the harmonic function ∫ (1 − \|z\|²)/\|ζ − z\|² dμ(ζ) on the disk. Measures, unlike functions, include point masses, whose Poisson integrals have radial limit zero almost everywhere (our own).

**Problem.** Every positive harmonic function on the disk is the Poisson integral of a unique finite positive boundary measure. For holomorphic functions with positive real part, that measure determines the function up to an imaginary constant.

**How the definition helps.** The Poisson representation theorem gives existence and uniqueness of the measure, and point masses show that integrable boundary functions would not suffice (our own). Holomorphic functions with the same real part on the disk differ by an imaginary constant (our own).

**Wikipedia:** [Positive harmonic function](https://en.wikipedia.org/wiki/Positive_harmonic_function). It says: “a positive harmonic function on the unit disc in the complex numbers is characterized as the Poisson integral of a finite positive measure on the circle.”

**Sources:** none listed. No primary source with a working link was found.

### Conformal maps preserve condenser capacity

**Remember:** Capacity is the least energy of a 0-to-1 test function.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Condenser capacity is the infimum of the Dirichlet energy ∫\|∇u\|² dA over test functions u, with no equilibrium voltage solved first. A test function is smooth inside, extends continuously to the closure, and equals 0 on one boundary curve and 1 on the other. The domain is bounded and planar, with two disjoint smooth boundary curves.

**Problem.** A conformal bijection that extends to a homeomorphism of the closures preserves this capacity.

**How the definition helps.** Composing a test function with the map multiplies \|∇u\|² by \|f′\|², which is also the area factor, so energies are equal (our own). The map and its inverse match the test functions, so the two infima agree (our own).

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “a variational characterization: C(Σ, S) is the infimum of the Dirichlet's energy functional”

**Sources:** none listed. No primary source with a working link was found.

### Conformal maps transport harmonic measure

**Remember:** Transport the boundary data and its harmonic average stays the same.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Harmonic measure at an interior point x is the boundary measure that averages continuous boundary data to the value at x of their harmonic extension.

**Problem.** Take two bounded planar domains enclosed by simple closed curves, and a conformal bijection that extends to a homeomorphism of their closures. It carries harmonic measure at each interior point to harmonic measure at its image.

**How the definition helps.** Pull each continuous boundary function back through the map (our own). Composing with a conformal map keeps harmonicity, so by uniqueness the harmonic extension pulls back too (our own). So the two measures give the same averages of all test functions, and they agree (our own).

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “determines a probability measure ω(x, D) on ∂D by”

**Paper or page:** [Rational lemniscates and the matching problem](https://arxiv.org/abs/2507.03547v1). It says: “ω(B₁,w,Ω) = ω(B₂,f(w),Ω′) (w ∈ Ω).”

**Sources:** none listed. No primary source with a working link was found.

### Disk averages preserve harmonic measure

**Remember:** A fixed center keeps the boundary average fixed.

*True by definition. Confidence: medium.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.DS. Level 3: graduate.

**Definition.** Harmonic measure from p on a Jordan domain is the boundary probability measure whose integral of continuous data gives their harmonic extension at p. Equivalently, it is the image of uniform circle measure under a conformal map from the disk sending 0 to p.

**Problem.** Let f be a holomorphic self-map of a Jordan domain that extends continuously to the closure and sends boundary to boundary. If f fixes p, then f preserves harmonic measure from p.

**How the definition helps.** In disk coordinates, harmonic measure from p is the circle average, and the map fixes zero and extends continuously to the circle (our own). Composing the Poisson extension of circle data with it keeps harmonicity and the value at zero (our own). The mean value property then gives equal circle averages before and after composition (our own).

**Paper or page:** [Pesin theory for transcendental maps and applications](https://arxiv.org/abs/2410.19703v2). It says: “the harmonic measure $ \\omega \_U(p,\\cdot ) $ is invariant under $ f $.”

**Sources:**

- [Pesin theory for transcendental maps and applications](https://arxiv.org/abs/2410.19703v2)

### Disk derivatives give conformal radius scaling

**Remember:** Conformal radius is the stretch at zero of the disk map.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Let g be a conformal bijection from the unit disk onto a simply connected planar domain other than the plane, with g(0) = a. The conformal radius of the domain at a is \|g′(0)\|.

**Problem.** A conformal bijection f from such a domain onto another multiplies the conformal radius by \|f′(a)\|, from the point a to the point f(a).

**How the definition helps.** Then f∘g is such a disk map for the image domain at f(a), and the chain rule gives \|(f∘g)′(0)\| = \|f′(a)\|\|g′(0)\| (our own). Two choices of g differ by a disk rotation, so the radius does not depend on the choice (our own).

**Paper or page:** [Two dimensional potential theory with a view towards vortex motion: Energy, capacity and Green functions](https://arxiv.org/abs/2405.19215v3). It says: “h₀(z) = h̃₀(w) + log \|f′(w)\|”

**Sources:**

- [Two dimensional potential theory with a view towards vortex motion: Energy, capacity and Green functions](https://arxiv.org/abs/2405.19215v3)

### Extremal length distinguishes annuli with different radius ratios

**Remember:** Maximize squared shortest weighted length divided by weighted area.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions), 30C75. arXiv math.CV. Level 3: graduate.

**Definition.** Extremal length compares how long the curves of a family Γ must be with the area used: it is the supremum of L(ρ)²/A(ρ) over weights ρ. Here ρ ≥ 0 is Borel with area A(ρ) = ∫ρ² dA finite and positive, and L(ρ) is the infimum over γ ∈ Γ of ∫\_γ ρ ds. Pulling a weight back by a conformal map f and multiplying by \|f′\| keeps L and A, so extremal length is conformally invariant (our own).

**Problem.** Let 0 &lt; r &lt; R &lt; ∞ and 0 &lt; r′ &lt; R′ &lt; ∞. If a holomorphic bijection with holomorphic inverse joins the annuli r &lt; \|z\| &lt; R and r′ &lt; \|z\| &lt; R′, then R/r = R′/r′.

**How the definition helps.** The map carries the curves joining one annulus's boundary circles to those of the other, so invariance makes their extremal lengths equal (our own detail). For the annulus r &lt; \|z\| &lt; R this family has extremal length log(R/r)/(2π), so the ratios agree. This avoids classifying maps between annuli.

**Wikipedia:** [Extremal length](https://en.wikipedia.org/wiki/Extremal_length), [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “EL(Γ) = log(r₂/r₁)/(2π).”

**Paper or page:** [Invariance of Extremal Length under Conformal Mappings](https://proofwiki.org/wiki/Invariance_of_Extremal_Length_under_Conformal_Mappings). It says: “Then Γ and Γ′ have the same extremal length”

**Sources:**

- [L. Ahlfors and A. Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129](https://doi.org/10.1007/BF02392634)

### Green averages decrease with radius

**Remember:** Average the Green function around circles centered at the pole.

*Makes the theorem clean to state or prove.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** For a bounded planar domain D containing 0, let G be its positive Green function with pole 0, set to zero outside D. Its circular average at radius r &gt; 0 is the average of G(reⁱᶿ) over 0 ≤ θ &lt; 2π. This average is a convex function of log r, and it is zero once the circle lies outside D.

**Problem.** The circular average of the Green function is nonincreasing as the radius increases.

**How the definition helps.** A nonnegative convex function that is eventually zero cannot increase, so the average is nonincreasing (our own). Convexity in log r comes from the circle mean inequality for smooth domains. It passes to D along a smooth exhaustion, where Green functions increase to G, by monotone convergence (our own).

**Paper or page:** [On the Hardy number and the Bergman number of a planar domain](https://arxiv.org/abs/2504.04207). It says: “ψ₍D₎ is a convex function of log r, 0 &lt; r &lt; +∞.”

**Sources:**

- [On the Hardy number and the Bergman number of a planar domain, Lemma 3.1](https://arxiv.org/abs/2504.04207)

### Green distance controls capacity

**Remember:** Capacity is the constant at infinity in the Green function.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Take a compact planar set K with connected complement, whose Green function g with pole at infinity extends continuously by zero on K. Its logarithmic capacity is read from the constant at infinity: g(z) = log\|z\| − log cap(K) + o(1) as z → ∞. For two such sets, Γ is the supremum over the plane of the absolute difference of their extended Green functions.

**Problem.** The logarithms of the capacities of two such sets differ by at most Γ.

**How the definition helps.** The difference of the two Green functions tends to log cap(K₂) − log cap(K₁) at infinity, and it is bounded by Γ everywhere (our own argument). The work is showing that this constant gives the same capacity as energy minimization (our own).

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “In particular the logarithmic capacity is continuous on (ℛ, Γ).”

**Sources:** none listed. No primary source with a working link was found.

### Green levels give exact capacities

**Remember:** Fatten K to where the Green function reaches ε.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CV. Level 3: graduate.

**Definition.** Take a compact planar set K with connected complement, whose Green function g with pole at infinity extends continuously by zero on K. Its logarithmic capacity is read from the constant at infinity: g(z) = log\|z\| − log cap(K) + o(1) as z → ∞. For ε &gt; 0, the Green sublevel set Kε consists of all z with g(z) ≤ ε.

**Problem.** The logarithmic capacity of Kε equals exp(ε) times the logarithmic capacity of K.

**How the definition helps.** Then g − ε is zero on the boundary of Kε and positive harmonic outside, so it is the Green function of Kε by uniqueness (our own). Its constant at infinity drops by ε, so the capacity is multiplied by exp(ε) (our own).

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “Furthermore, cap(Kε) = exp(−γ + ε).”

**Sources:**

- [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3)

### Harmonic exit measures compose

**Remember:** Harmonic measure is where Brownian motion first leaves the domain.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.PR, math.CV. Level 3: graduate.

**Definition.** Harmonic measure of a domain at an interior point x is the distribution of the point where Brownian motion started at x first leaves the domain.

**Problem.** Let U and V be bounded planar domains with the closure of U inside V, and let x be in U. Then the exit distribution from V, started at x, averages the exit distributions from V started at the first exit point y from U.

**How the definition helps.** A path from x must leave U before it leaves V, so condition on its first exit point y from U (our own). The strong Markov theorem lets Brownian motion restart afresh from y at that random time, which gives the average (our own). The work is in that theorem and in matching the exit law with the analytic measure (our own).

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “Harmonic measure is the exit distribution of Brownian motion”

**Paper or page:** [Speeds of Convergence for Petals of Semigroups of Holomorphic Functions](https://arxiv.org/abs/2303.09961v1). It says: “ω(z,E,Ω₂) = ω(z,E,Ω₁) + ∫∂Ω₁∖∂Ω₂ ω(ζ,E,Ω₂) · ω(z,dζ,Ω₁).”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic measures share null sets

**Remember:** Harmonic measure averages boundary data into the solution's value at x.

*True by definition.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** On a bounded smooth planar domain, solve Laplace's equation with continuous boundary data. Harmonic measure at x is the boundary probability measure whose integral of the data gives that solution at x.

**Problem.** In a connected domain of this kind, harmonic measures at any two interior points assign zero to the same boundary sets.

**How the definition helps.** Harnack's inequality bounds a nonnegative solution at one point by a fixed multiple of its value at the other. Through the integral definition, this compares the two measures on nonnegative continuous data. Our own argument transfers both bounds from continuous tests to all boundary sets.

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “This is a consequence of Harnack's inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Transfinite diameter makes logarithmic capacity monotone and proportional under scaling

**Remember:** Spread n points of K as far apart as possible.

*True by definition. Confidence: medium.* MSC 31A15 (Potentials and capacity, harmonic measure, extremal length and related notions in two dimensions), 30C85. arXiv math.CV. Level 3: graduate.

**Definition.** For compact nonempty K in the plane, let dₙ(K) be the largest geometric mean of the pairwise distances of n points of K. The transfinite diameter of K is the limit of dₙ(K) as n grows, and it equals the logarithmic capacity.

**Problem.** If K is contained in L, its logarithmic capacity is at most that of L. The capacity of aK + b is \|a\| times the capacity of K.

**How the definition helps.** Both rules already hold for each dₙ, before the limit. Every choice of points in K is a choice in L, and z ↦ az + b multiplies every pairwise distance by \|a\| (our own deduction). The work goes into Fekete's limit theorem and the equality of transfinite diameter with the energy definition of capacity.

**Wikipedia:** [Conformal radius](https://en.wikipedia.org/wiki/Conformal_radius). It says: “In other words, dₙ(D) is the supremum of the geometric mean of pairwise distances of n points in D.”

**Sources:**

- [M. Fekete, Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten, Mathematische Zeitschrift 17 (1923), 228–249](https://doi.org/10.1007/BF01504345)

### Harmonic comparison preserves subharmonicity under decreasing limits

**Remember:** Subharmonic: below every harmonic function that bounds it on a sphere.

*True by definition. Confidence: medium.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP, math.CV. Level 3: graduate.

**Definition.** A function φ is subharmonic if it is upper semicontinuous, not identically −∞, and obeys harmonic comparison on each closed ball in the domain. That is, φ ≤ h on the boundary implies φ ≤ h inside, for every continuous h harmonic inside. For twice continuously differentiable φ, this is equivalent to Δφ ≥ 0.

**Problem.** On a connected open set, a pointwise decreasing sequence of subharmonic functions has a subharmonic limit unless that limit is identically −∞.

**How the definition helps.** The limit is upper semicontinuous, so suppose it is ≤ h on a test ball's boundary and fix ε &gt; 0 (our own). Compactness puts the whole boundary inside one of the increasing open sets {φₖ &lt; h + ε}. Comparison bounds that φₖ, hence the limit, by h + ε inside, and ε is arbitrary (our own).

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “The limit of a decreasing sequence of subharmonic functions is subharmonic (or identically equal to −∞).”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic comparison preserves subharmonicity under pointwise maxima

**Remember:** If both functions stay below each harmonic bound, so does their maximum.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP, math.CV. Level 3: graduate.

**Definition.** A function φ is subharmonic if it is upper semicontinuous and obeys harmonic comparison on each closed ball in the domain. That is, φ ≤ h on the boundary implies φ ≤ h inside, for every continuous h harmonic inside. For twice continuously differentiable φ, this is equivalent to Δφ ≥ 0.

**Problem.** The pointwise maximum of two subharmonic functions is subharmonic.

**How the definition helps.** If the maximum is ≤ h on a ball's boundary, each function is, so each is ≤ h inside, and so is the maximum (our own proof). The test Δφ ≥ 0 cannot check a maximum directly, because a maximum can have a kink. Upper semicontinuity also passes to the maximum (our own).

**Wikipedia:** [Subharmonic function](https://en.wikipedia.org/wiki/Subharmonic_function). It says: “The pointwise maximum of two subharmonic functions is subharmonic.”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic mean values force bounded harmonic functions on ℝⁿ to be constant

**Remember:** Every harmonic value is the average over any ball around it.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35J05. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Here a continuous real function is harmonic if, on every closed ball in its open domain, the volume average equals the value at the center.

**Problem.** A bounded harmonic function on all of ℝⁿ is constant.

**How the definition helps.** Values are ball averages, so Nelson compares two values through two equal balls around the two points. As the radius grows, the part lying in only one ball becomes a vanishing fraction of the volume. Boundedness then makes the two averages, which are the two values, differ by an amount tending to zero.

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Given two points, choose two balls with the given points as centers and of equal radius.”

**Sources:**

- [E. Nelson (1961), A proof of Liouville's theorem, Proceedings of the American Mathematical Society 12, 995](https://doi.org/10.1090/S0002-9939-1961-0259149-4)

### Harmonic mean values give Harnack’s inequality by comparing nested balls

**Remember:** A value is its ball average, so nested balls compare values.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35J05. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** Here a continuous real function is harmonic if, on every closed ball in its open domain, the volume average equals the value at the center.

**Problem.** Let V be a nonempty connected open set with compact closure inside a domain Ω. For every nonnegative harmonic u on Ω, Harnack’s inequality supᵥ u ≤ C infᵥ u holds with C depending only on V and Ω.

**How the definition helps.** For u ≥ 0 and \|x − y\| &lt; 2r, the r-ball about y lies in the 3r-ball about x, so u(y) ≤ 3ⁿu(x) (our own). Choose r &gt; 0 so that 3r-balls centered on the compact closure of V lie in Ω. A finite cover of V by r-balls with connected overlap graph chains these bounds into one constant C (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “Then for every non-negative harmonic function u, Harnack's inequality supᵥ u ≤ C infᵥ u holds for some constant C that depends only on V and Ω.”

**Sources:** none listed. No primary source with a working link was found.

### Kelvin weighting preserves harmonicity

**Remember:** Sphere inversion needs a power of distance to preserve harmonicity.

*Rules out counterexamples.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** For x ≠ 0 in dimension n ≥ 3, the Kelvin transform u\* composes u with sphere inversion x ↦ x/\|x\|² and multiplies by the weight \|x\|²⁻ⁿ. This weight makes Δu\*(x) = \|x\|⁻ⁿ⁻² (Δu)(x/\|x\|²) (our own).

**Problem.** The Kelvin transform of a harmonic function is harmonic in the inverted domain away from the origin.

**How the definition helps.** By that identity, Δu = 0 gives Δu\* = 0 away from the origin (our own). Without the weight it fails: inverting x₁ gives x₁/\|x\|², which is not harmonic when n ≥ 3 (our own). The identity itself is a chain-rule computation (our own).

**Wikipedia:** [Kelvin transform](https://en.wikipedia.org/wiki/Kelvin_transform). It says: “Then a function u is harmonic, subharmonic or superharmonic in D if and only if the Kelvin transform u\*”

**Sources:** none listed. No primary source with a working link was found.

### Smaller singularities allow harmonic extension

**Remember:** Growth smaller than a harmonic pole leaves no singularity behind.

*Rules out counterexamples.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** In ℝⁿ with n ≥ 3, the harmonic pole at a point a is \|x − a\|²⁻ⁿ. A function has smaller growth than the pole at a if its ratio to the pole tends to zero as x tends to a.

**Problem.** Let n ≥ 3. A harmonic function on a punctured ball with smaller growth than the pole at the puncture extends to a harmonic function on the whole ball.

**How the definition helps.** Smaller growth excludes the pole itself and lets ε times the pole dominate f near the puncture, for every ε &gt; 0 (our own). Let h be the harmonic function on a smaller ball with the values of f on its sphere (our own). On annuli around the puncture the maximum principle gives \|f − h\| ≤ ε·\|x − a\|²⁻ⁿ, so letting ε → 0 gives f = h (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “then f extends to a harmonic function on Ω”

**Sources:** none listed. No primary source with a working link was found.

### The harmonic mean value property rules out nonconstant interior maxima

**Remember:** A value is its ball average, so it cannot beat the ball.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions), 35B50. arXiv math.AP. Level 3: graduate.

**Definition.** Here a continuous real function is harmonic if, on every closed ball in its open domain, the volume average equals the value at the center.

**Problem.** If a harmonic function on a connected open set attains its global maximum at an interior point, it is constant.

**How the definition helps.** At a maximum point the ball average equals the maximum, so by continuity u is maximal on the whole ball (our own). So the maximum set is open, and it is closed by continuity, so connectedness makes it the whole domain (our own).

**Wikipedia:** [Harmonic function](https://en.wikipedia.org/wiki/Harmonic_function). It says: “If U is connected, this means that f cannot have local maxima or minima, other than the exceptional case where f is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Weak harmonicity survives integral limits

**Remember:** Put the derivatives on the test function before taking the limit.

*True by definition.* MSC 31B05 (Harmonic, subharmonic, superharmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** A locally integrable function u is weakly harmonic if ∫ u Δφ = 0 for every smooth compactly supported φ. So all derivatives sit on the test function, never on u.

**Problem.** A limit in local L¹ of harmonic functions agrees almost everywhere with a harmonic function. Local L¹ convergence means that the integral of the absolute error tends to zero on every compact subset.

**How the definition helps.** For a fixed test function, Δφ is bounded with compact support, so local L¹ convergence keeps ∫ uₖΔφ = 0 in the limit (our own). Weyl's lemma then gives a smooth harmonic function equal to the limit almost everywhere.

**Wikipedia:** [Weyl's lemma (Laplace equation)](https://en.wikipedia.org/wiki/Weyl%27s_lemma_%28Laplace_equation%29). It says: “every weak solution of Laplace's equation is a smooth solution”

**Sources:** none listed. No primary source with a working link was found.

### Centered ball exits are uniform

**Remember:** A path from the center favors no direction, so exits are uniform.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions), 60J45. arXiv math.PR, math.AP. Level 3: graduate.

**Definition.** Harmonic measure from a point x of a ball is the law of the first point where Brownian motion started at x leaves the ball. Brownian motion is continuous random motion with independent mean-zero Gaussian increments of covariance tI, so rotations about x do not change its law (our own).

**Problem.** Harmonic measure from the center of a ball is uniform surface measure on its boundary.

**How the definition helps.** Rotations about the center fix the ball and the law of the path, so the exit law is rotation invariant (our own). The only rotation-invariant probability on the sphere is normalized surface measure (our own).

**Wikipedia:** [Harmonic measure](https://en.wikipedia.org/wiki/Harmonic_measure). It says: “coincides with the normalized surface measure”

**Sources:** none listed. No primary source with a working link was found.

### Heat integration gives positive Green kernels

**Remember:** A weighted sum of positive heat densities is positive.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** The Green kernel of 1 − Δ on ℝⁿ is the heat kernel summed over all times with weight e⁻ᵗ: G(x,y) = ∫₀<sup>∞</sup> e⁻ᵗ Hₜ(x,y) dt. The heat kernel Hₜ(x,y) is the positive Gaussian density of heat at x at time t from a unit source at y.

**Problem.** The Green kernel of the negative Laplacian plus 1 on Euclidean space is positive off the diagonal.

**How the definition helps.** The integrand is positive for every t &gt; 0, so the integral is positive (our own). The weight e⁻ᵗ gives convergence at large times, and Gaussian decay gives convergence near t = 0 off the diagonal (our own). The integral inverts 1 − Δ because (1 − Δ)⁻¹ is the Laplace transform at 1 of the heat semigroup (our own).

**Paper or page:** [Nonlocal nonlinear diffusion equations. Smoothing effects, Green functions, and functional inequalities](https://arxiv.org/abs/2205.06850v2). It says: “and the Green functions of $-\\mathfrak {L}$ and $I-\\mathfrak {L}$ are respectively given by\\\[  \\mathbb {G}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x)=\\int <sub>0</sub><sup>\\infty</sup> \\mathbb {H}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x,t)\\, \\mathrm{d}t  \\\]and\\\[  \\mathbb {G}\_{I-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x)=\\int <sub>0</sub><sup>\\infty</sup> \\textup{e}<sup>-t</sup>\\mathbb {H}\_{-\\mathfrak {L}}<sup>x<sub>0</sub></sup>(x,t)\\, \\mathrm{d}t,  \\\]”

**Sources:**

- [Matteo Bonforte and Jørgen Endal, Nonlocal nonlinear diffusion equations. Smoothing effects, Green functions, and functional inequalities (2022), Proposition 7.1](https://arxiv.org/abs/2205.06850v2)

### Inverse operators explain Green symmetry

**Remember:** The inverse of a symmetric operator has a symmetric kernel.

*True by definition.* MSC 31B10 (Integral representations, integral operators, integral equations methods in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** The Dirichlet Green kernel is the integral kernel of the inverse of −Δ with zero boundary values. This inverse is self-adjoint, because −Δ with zero boundary values is symmetric: ∫(−Δu)v = ∫u(−Δv) (our own).

**Problem.** On a bounded smooth Euclidean domain, the Dirichlet Green function satisfies G(x,y) = G(y,x) for distinct interior points.

**How the definition helps.** The real kernel of a self-adjoint integral operator satisfies G(x,y) = G(y,x) almost everywhere (our own). Continuity of G away from the diagonal gives equality at every distinct pair (our own). The work is to identify this kernel with the point-source Green function (our own).

**Paper or page:** [The Strong Maximum Principle and the Harnack inequality for a class of hypoelliptic divergence-form operators](https://arxiv.org/abs/1407.1669v1). It says: “kε(x,y) = kε(y,x) for every x,y ∈ Ω.”

**Sources:**

- [The Strong Maximum Principle and the Harnack inequality for a class of hypoelliptic divergence-form operators](https://arxiv.org/abs/1407.1669v1)

### Cutoff sorting proves capacity subadditivity

**Remember:** Max covers the union, min the intersection, total energy unchanged.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** The relative p-capacity of a compact set K in a bounded open set Ω, for 1 &lt; p &lt; ∞, is the infimum of the energies ∫\_Ω \|∇u\|ᵖ of test functions for K. A test function is a compactly supported Lipschitz function on Ω with u ≥ 1 near K.

**Problem.** Take two compact sets in a domain and 1 &lt; p &lt; ∞. The capacity of their union plus the capacity of their intersection cannot exceed their combined capacities.

**How the definition helps.** If u tests E₁ and v tests E₂, then max(u,v) tests the union and min(u,v) tests the intersection (our own). Almost everywhere the pair max, min has the same gradients as the pair u, v, so the two energies have the same total (our own). Taking infima gives the inequality.

**Paper or page:** [Condenser capacities and capacitary potentials for unbounded sets, and global p-harmonic Green functions on metric spaces](https://arxiv.org/abs/2310.05702v2). It says: “capₚ(E₁ ∪ E₂,Ω) + capₚ(E₁ ∩ E₂,Ω) ≤ capₚ(E₁,Ω) + capₚ(E₂,Ω).”

**Sources:**

- [Anders Björn, Jana Björn. Condenser capacities and capacitary potentials for unbounded sets, and global p-harmonic Green functions on metric spaces. 2310.05702v2](https://arxiv.org/abs/2310.05702v2)

### Filling preserves condenser capacity

**Remember:** Filling the inside with ones only removes gradient energy.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 46E35. arXiv math.AP. Level 3: graduate.

**Definition.** The relative p-capacity of a compact set in a bounded open set Ω is the infimum of the energies ∫\_Ω \|∇u\|ᵖ of smooth cutoffs for the set. A cutoff is a smooth function with compact support in Ω that equals 1 near the set.

**Problem.** For 1 &lt; p &lt; ∞, a compact set inside a bounded open region has the same relative p-capacity as its boundary.

**How the definition helps.** Every cutoff for F is a cutoff for ∂F, which gives one inequality (our own). Conversely, a cutoff for ∂F stays smooth and loses energy when it is set to 1 on all of F, and then it is a cutoff for F (our own).

**Paper or page:** [Condenser capacities and capacitary potentials for unbounded sets, and global p-harmonic Green functions on metric spaces](https://arxiv.org/abs/2310.05702v2). It says: “If F is a bounded closed set and F ⊂ Ω, then capₚ(F,Ω) = capₚ(∂F,Ω).”

**Sources:**

- [Anders Björn, Jana Björn. Condenser capacities and capacitary potentials for unbounded sets, and global p-harmonic Green functions on metric spaces. 2310.05702v2](https://arxiv.org/abs/2310.05702v2)

### Finite energy forbids point charges

**Remember:** Two draws can land on one atom, where 1/distance is infinite.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** The energy of a probability measure λ on a compact set in ℝ³ is the average of 1/\|x − y\| over two independent points drawn from λ. Newtonian capacity is 1 over the least energy of such measures, and 0 when every energy is infinite.

**Problem.** Every finite-energy probability measure gives each point zero mass. In particular, each singleton has zero Newtonian capacity.

**How the definition helps.** If λ gives a point mass m &gt; 0, the two points coincide with probability at least m², and the integrand is infinite there (our own). So finite energy forces zero mass at every point. A singleton carries only the unit point mass, so its least energy is infinite and its capacity is zero (our own).

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “C(K)=\\left\[\\inf\_\\lambda E(\\lambda)\\right\]<sup>-1</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Riesz potential orders add

**Remember:** Multiply the frequency weights and their orders add.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 44A35. arXiv math.CA. Level 3: graduate.

**Definition.** The Riesz potential of order α multiplies the Fourier transform by the weight \|ξ\|⁻ᵅ, with the Fourier convention exp(−ix · ξ).

**Problem.** Take smooth input that decays rapidly along with all its derivatives. Choose positive orders α and β with sum less than the space dimension. Composing their Riesz potentials gives the potential of order α + β.

**How the definition helps.** The weights multiply as \|ξ\|⁻ᵅ · \|ξ\|⁻ᵝ = \|ξ\|⁻⁽ᵅ⁺ᵝ⁾, the weight of order α + β (our own). Since α + β is below the dimension, the product is locally integrable at zero, and rapid decay controls large frequencies (our own). Matching this with the spatial integral uses the Fourier transform of a power of distance (our own).

**Wikipedia:** [Riesz potential](https://en.wikipedia.org/wiki/Riesz_potential). It says: “Consideration of the Fourier transform reveals that the Riesz potential is a Fourier multiplier.”

**Sources:** none listed. No primary source with a working link was found.

### Variational capacity is strongly subadditive

**Remember:** Split two energy tests into their pointwise maximum and minimum.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** For compact K ⊂ ℝⁿ with n ≥ 3, Newtonian capacity in the variational normalization is the infimum of the energies ∫\|∇u\|² of test functions for K. A test function is a compactly supported Lipschitz function with u ≥ 1 near K.

**Problem.** The capacities of the union and intersection of two compact sets in dimension at least three sum to at most the sum of their capacities.

**How the definition helps.** If u tests one set and v tests the other, max(u,v) tests the union and min(u,v) tests the intersection (our own). Where u and v change order their gradients swap places, so the two energies keep the same total (our own). Taking infima gives the inequality.

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “The characterization of the capacity of a set as the minimum of an energy functional achieving particular boundary values”

**Sources:** none listed. No primary source with a working link was found.

### Zero capacity makes holes removable

**Remember:** A cheap cutoff hides the hole from every test.

*True by definition. Confidence: medium.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions), 35D30. arXiv math.AP. Level 3: graduate.

**Definition.** A compact set in a ball has zero relative capacity if cutoffs can hide it at arbitrarily small cost. A cutoff φ is smooth, equals 1 near the set and 0 near the sphere, and its cost is ∫\|∇φ\|².

**Problem.** Let u and its weak first derivatives be square-integrable on the ball. If u is weakly harmonic outside a compact set of zero relative capacity, then u is weakly harmonic on the whole ball.

**How the definition helps.** Multiplying a test function by 1 − φ gives a test function that avoids the set (our own). As ∫\|∇φ\|² → 0, the Poincaré inequality sends φ and ∇φ to zero in L², so the weak equation for the modified tests passes to the limit (our own).

**Wikipedia:** [Capacity of a set](https://en.wikipedia.org/wiki/Capacity_of_a_set). It says: “The condenser capacity also has a variational characterization”

**Sources:** none listed. No primary source with a working link was found.

### Boundary values fix Green functions

**Remember:** A point source fixes the singularity, and the boundary fixes the rest.

*Rules out counterexamples.* MSC 31B20 (Boundary value and inverse problems for harmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** A Dirichlet Green function with pole y on a bounded smooth domain solves −ΔG = δ<sub>y</sub> against smooth test functions, including at y, and has zero boundary values.

**Problem.** There is at most one Dirichlet Green function for each fixed interior pole.

**How the definition helps.** The difference of two candidates has no point source and zero boundary values (our own). Weyl's lemma makes it smooth and harmonic, and the maximum principle makes it zero (our own). Without boundary values, adding 1 gives another solution (our own).

**Wikipedia:** [Green's identities](https://en.wikipedia.org/wiki/Green%27s_identities). It says: “Green's function that vanishes on the boundary”

**Sources:** none listed. No primary source with a working link was found.

### Energy minimization forces Dirichlet uniqueness

**Remember:** Two different minimizers would have a midpoint with lower energy.

*True by definition.* MSC 31B20 (Boundary value and inverse problems for harmonic functions in higher dimensions). arXiv math.CA. Level 3: graduate.

**Definition.** The Dirichlet energy of u ∈ H¹(Ω) is ½∫\_Ω \|∇u\|², and it is strictly convex in ∇u. For given boundary data, a minimizer has those boundary values as traces and the least energy among all such functions (our own).

**Problem.** On a bounded smooth connected domain, the harmonic function with given smooth boundary values is unique.

**How the definition helps.** Integration by parts shows that harmonic functions with the given boundary values are exactly the minimizers (our own). The midpoint of two minimizers has strictly lower energy unless their gradients agree almost everywhere (our own). Equal gradients on a connected domain and equal boundary values make the two functions equal (our own).

**Wikipedia:** [Dirichlet energy](https://en.wikipedia.org/wiki/Dirichlet_energy). It says: “finding a function u that satisfies the boundary conditions and has minimal Dirichlet energy.”

**Sources:** none listed. No primary source with a working link was found.

### Perron's solution always exists, and regular points control the boundary

**Remember:** Take the highest subharmonic function that stays under the data.

*Makes the theorem clean to state or prove.* MSC 31B20 (Boundary value and inverse problems for harmonic functions in higher dimensions), 31B15. arXiv math.AP, math.CA. Level 3: graduate.

**Definition.** The Perron solution of continuous data φ on the boundary of a bounded domain is the pointwise supremum of all subharmonic v that stay below φ at the boundary, meaning limsup<sub>x→y</sub> v(x) ≤ φ(y) at every boundary point y. A boundary point is regular if the Perron solution tends to φ there for every continuous φ (our own).

**Problem.** For every bounded domain and all continuous boundary data, the Perron solution is harmonic. It takes the prescribed value at each regular boundary point.

**How the definition helps.** Perron's theorem shows that this supremum is always harmonic inside, even where no classical solution exists (our own). Regularity is exactly convergence at the boundary point, so the boundary claim holds by definition (our own).

**Wikipedia:** [Perron method](https://en.wikipedia.org/wiki/Perron_method), [Lebesgue spine](https://en.wikipedia.org/wiki/Lebesgue_spine). It says: “The Perron solution u(x) is always harmonic; however, the values it takes on the boundary may not be the same as the desired boundary values φ(x).”

**Sources:**

- [O. Perron, Eine neue Behandlung der ersten Randwertaufgabe für Δu = 0, Mathematische Zeitschrift 18 (1923)](https://doi.org/10.1007/BF01192395)
- [N. Wiener, The Dirichlet Problem, Journal of Mathematics and Physics 3 (1924)](https://doi.org/10.1002/sapm192433127)

### Exterior balls supply barriers

**Remember:** The outside ball's potential touches zero only at contact.

*True by definition.* MSC 31B25 (Boundary behavior of harmonic functions in higher dimensions). arXiv math.AP. Level 3: graduate.

**Definition.** A barrier at a boundary point y is a positive superharmonic function on the domain near y, one whose value at each center is at least its sphere averages. It tends to 0 at y and stays bounded away from 0 outside each neighborhood of y.

**Problem.** For a bounded domain in ℝ³, an exterior closed ball meeting the closure only at one point makes that point regular. This means harmonic extensions of continuous data tend to the given value there.

**How the definition helps.** For an exterior ball with center c and radius R, the function 1/R − 1/\|x − c\| is a barrier, so the barrier criterion gives regularity (our own). It is harmonic away from c, and on the closure it is zero only at the contact point (our own). Compactness of the closure keeps it bounded away from zero outside each neighborhood of contact (our own).

**Paper or page:** [The Wiener criterion for fully nonlinear elliptic equations](https://arxiv.org/abs/2301.00960v1). It says: “there exist an upper barrier and a lower barrier at x₀.”

**Sources:**

- [The Wiener criterion for fully nonlinear elliptic equations](https://arxiv.org/abs/2301.00960v1)

### Disk tests preserve plurisubharmonicity

**Remember:** A holomorphic map sends each test disk to another test disk.

*True by definition.* MSC 31C10 (Pluriharmonic and plurisubharmonic functions). arXiv math.CV. Level 3: graduate.

**Definition.** An upper semicontinuous function u with values in ℝ ∪ {−∞} is plurisubharmonic if u ∘ φ is subharmonic or identically −∞ for every holomorphic disk φ, a holomorphic map from the unit disk into the domain of u.

**Problem.** Composing a plurisubharmonic function with a holomorphic map gives a plurisubharmonic function, with the identically −∞ case allowed.

**How the definition helps.** If F is holomorphic and φ is a holomorphic disk, then F ∘ φ is again a holomorphic disk, so (u ∘ F) ∘ φ is subharmonic (our own). Continuity of F keeps u ∘ F upper semicontinuous (our own). The work lies in proving that the test on complex lines implies the test on all disks (our own).

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic”

**Sources:** none listed. No primary source with a working link was found.

### Smoothing preserves plurisubharmonic disk tests

**Remember:** An average of functions that pass the disk test passes it.

*True by definition.* MSC 31C10 (Pluriharmonic and plurisubharmonic functions). arXiv math.CV. Level 3: graduate.

**Definition.** A function u with values in ℝ ∪ {−∞} is plurisubharmonic on a complex domain if it is upper semicontinuous and passes every line-disk test. The test asks that on each closed disk in a complex line inside the domain, the value at the center is at most the average over the boundary circle.

**Problem.** Smoothing a plurisubharmonic function that is not identically minus infinity preserves plurisubharmonicity wherever the averaging neighborhood fits inside its connected domain.

**How the definition helps.** The smoothing is a positively weighted average of translates of u, and each translate passes the disk tests, so the average passes them too (our own). Local integrability lets the averages be interchanged, and convolution with a smooth weight makes the result continuous (our own).

**Paper or page:** [Viscosity solutions to complex Hessian equations](https://arxiv.org/abs/1209.5343). It says: “If u is m-subharmonic in Ω then the standard regularization u ⋆ χε is also m-subharmonic in Ωε”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic weights cancel along paths

**Remember:** The intermediate harmonic weights cancel along a path.

*True by definition.* MSC 31C20 (Discrete potential theory). arXiv math.PR. Level 3: graduate.

**Definition.** A harmonic weight h for a Markov chain with transitions P is a finite positive function equal to its own one-step average: ∑ᵧ P(x,y)h(y) = h(x). The h-transform reweights each step by the ratio of weights: P(x,y)h(y)/h(x).

**Problem.** The transformed probabilities define a random walk. Its n-step transitions are the original n-step transitions times the same ratio of final to initial weights.

**How the definition helps.** Harmonicity makes each transformed row sum to one (our own). Along a path the intermediate weights cancel, leaving the original path probability times h(end)/h(start) (our own). Summing over the n-step paths between two states gives the transition formula (our own).

**Wikipedia:** [Doob's h-transform](https://en.wikipedia.org/wiki/Doob%27s_h-transform). It says: “the transition probabilities of the transformed process are explicitly given as functions of h”

**Sources:** none listed. No primary source with a working link was found.

### Dirichlet forms are exactly the energies whose flows keep values in \[0,1\]

**Remember:** An energy that respects clipping gives a flow that respects bounds.

*Makes the theorem clean to state or prove.* MSC 31C25 (Dirichlet forms), 60J46, 47D07. arXiv math.AP, math.PR. Level 3: graduate.

**Definition.** On real L², a symmetric Dirichlet form is a densely defined, closed, nonnegative symmetric form with the following clipping property. For every domain element u, clipping its values to \[0,1\] gives another domain element with no greater energy.

**Problem.** Take a symmetric closed coercive form on L². The form has the clipping property exactly when the semigroup that it generates is sub-Markovian.

**How the definition helps.** Clipping combines the lower and upper bounds in one energy test (our own). The Beurling–Deny criterion equates this test with preservation of \[0,1\] by every operator in the generated semigroup (our own).

**Paper or page:** [Equivalence of Sobolev norms with respect to weighted Gaussian measures](https://arxiv.org/abs/2009.13875v3). It says: “(ℰ,D(ℰ)) is a Dirichlet form on L²(E,μ). (S(t))ₜ≥₀ is a sub-Markovian semigroup on L²(E,μ).”

**Sources:**

- [Davide Addona, Equivalence of Sobolev norms with respect to weighted Gaussian measures, arXiv:2009.13875v3 (2023)](https://arxiv.org/abs/2009.13875v3)
- [A. Beurling, J. Deny, Dirichlet Spaces, Proc. Natl. Acad. Sci. USA 45(2) (1959) 208–215](https://doi.org/10.1073/pnas.45.2.208)

### Green ratios give compact Martin coordinates

**Remember:** Divide by the base point's visits, and every coordinate stays bounded.

*True by definition.* MSC 31C35 (Martin boundary theory). arXiv math.PR. Level 3: graduate.

**Definition.** For an irreducible transient Markov chain, let G(x,y) be the expected number of visits to y from x, counting time zero. The Martin kernel K(x,y) = G(x,y)/G(o,y) compares visits from x with visits from a fixed base state o.

**Problem.** For a countable state space, every sequence of target states has a subsequence along which the Martin kernels converge at every starting state.

**How the definition helps.** For each x, one bound holds for the ratio at every target y (our own proof). If p &gt; 0 is the probability of reaching x from o, restarting at the first visit to x gives G(o,y) ≥ pG(x,y), so 0 ≤ K(x,y) ≤ 1/p. A diagonal argument over the countably many states gives the subsequence.

**Wikipedia:** [Poisson boundary](https://en.wikipedia.org/wiki/Poisson_boundary). It says: “The embedding y ↦ Kₒ(·, y) has a relatively compact image for the topology of pointwise convergence”

**Sources:** none listed. No primary source with a working link was found.

### Energy projections make balayage nonexpansive

**Remember:** Projecting both charges cannot increase their energy distance.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.CA. Level 4: research.

**Definition.** For 0 &lt; α ≤ 2 &lt; n, Riesz energy with kernel \|x − y\|<sup>(α−n)</sup> is an inner product on finite-energy charges, and the energy distance is the norm of a difference. The sweep of a positive finite-energy charge onto a closed set is the nearest positive finite-energy charge supported there.

**Problem.** Fix a Riesz order greater than zero and at most two in Euclidean dimension n ≥ 3. Sweeping two positive finite-energy charges onto the same closed set cannot increase their energy distance.

**How the definition helps.** Positive charges on the set form a convex cone, and nearest-point projection onto a convex set never increases distance in an inner product space (our own). The work lies in proving that the nearest charge exists and equals the usual sweep (our own).

**Paper or page:** [Fractional harmonic measure in minimum Riesz energy problems with external fields](https://arxiv.org/abs/2311.18081v1). It says: “\\\| \\sigma -\\sigma ^A\\\| =\\min <sub>\\mu \\in \\mathcal E'(A)</sub>\\, \\\| \\sigma -\\mu \\\| .”

**Sources:**

- [Fractional harmonic measure in minimum Riesz energy problems with external fields](https://arxiv.org/abs/2311.18081v1)

### Nested sweeps equal direct sweeping

**Remember:** Once the potential matches on a set, it also matches on every subset.

*True by definition.* MSC 31B15 (Potentials and capacities, extremal length and related notions in higher dimensions). arXiv math.CA. Level 4: research.

**Definition.** Take 0 &lt; α ≤ 2 with α &lt; n. The sweep of a positive finite-energy measure μ onto a compact set K is the positive finite-energy measure on K whose α-Riesz potential equals that of μ on K, except on a zero-capacity set, one that carries no nonzero positive finite-energy measure.

**Problem.** For any positive finite-energy measure, sweeping onto nested compact sets gives the same result as sweeping directly onto the smaller set.

**How the definition helps.** Sweeping onto a larger set L keeps μ's potential on L, hence on K, and sweeping next onto K keeps it on K, each time outside a zero-capacity set (our own). The union of the two exceptional sets has zero capacity, so both results are measures on K with μ's potential there (our own). Uniqueness of the sweep makes them equal (our own).

**Paper or page:** [Fractional harmonic measure in minimum Riesz energy problems with external fields](https://arxiv.org/abs/2311.18081). It says: “U⁽σᴬ⁾ = U⁽σ⁾ n.e. on A.”

**Sources:**

- [Fractional harmonic measure in minimum Riesz energy problems with external fields, Theorem 3.1](https://arxiv.org/abs/2311.18081)

### Countable unions preserve polarity

**Remember:** Polar means zero capacity, and zero capacities add to zero.

*True by definition.* MSC 31C15 (Potentials and capacities on other spaces). arXiv math.CV, math.AP. Level 4: research.

**Definition.** On a compact Hermitian manifold of dimension n, with 1 ≤ m ≤ n, a set is locally m-polar if each point has a connected neighborhood U where the set lies in {u = −∞} for some m-subharmonic u on U, not identically −∞. Equivalently, by Lemma 6.2, the set has outer m-capacity zero.

**Problem.** A countable union of locally m-polar Borel sets is locally m-polar.

**How the definition helps.** Outer capacity is countably subadditive, so a countable union of capacity-zero sets has capacity zero (our own). Cover the kth set by an open set of capacity below ε/2ᵏ; since capacity of open sets is a supremum over test measures, the union of the covers has capacity below ε (our own). Lemma 6.2 supplies the hard equivalence between local m-polarity and zero capacity.

**Paper or page:** [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159v1). It says: “E is a locally m-polar set ⇔ cap′ₘ⁎(E) = 0 ⇔ capₘ⁎(E) = 0.”

**Sources:**

- [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159v1)

### Dual energy is convex under mixtures

**Remember:** A supremum of affine functions of the measure is convex.

*True by definition.* MSC 31C15 (Potentials and capacities on other spaces). arXiv math.CV. Level 4: research.

**Definition.** The dual energy of a probability measure μ on a compact Kähler manifold of complex dimension n with Kähler form ω is a supremum of affine functions of μ: J(μ) = sup\_φ (E(φ) − ∫φ dμ). Here φ runs over smooth functions with ωφ = ω + ddᶜφ ≥ 0, and E(φ) = ∑<sub>j=0</sub>ⁿ ∫φ ωφʲ ∧ ωⁿ⁻ʲ / ((n+1)V) with V = ∫ωⁿ (our own).

**Problem.** The dual energy is convex under mixtures of probability measures. Under weak convergence, meaning convergence of integrals of continuous functions, its value at the limit cannot exceed the lower limit of the energies.

**How the definition helps.** Each test φ gives a function of μ that is affine and continuous under weak convergence (our own). A supremum of such functions is convex, and its strict upper level sets are unions of open sets, which gives lower semicontinuity (our own).

**Paper or page:** [Measures of finite energy in pluripotential theory: a synthetic approach](https://arxiv.org/abs/2307.01697). It says: “the functional Jω(·,ψ) : ℳ → \[0,+∞\] is convex and weakly lsc”

**Sources:**

- [Sébastien Boucksom and Mattias Jonsson, Measures of finite energy in pluripotential theory: a synthetic approach, Proposition 2.2](https://arxiv.org/abs/2307.01697)

### Irreducibility makes the ground state of a positive form unique and positive

**Remember:** One connected piece gives one positive ground state.

*Rules out counterexamples. Confidence: medium.* MSC 31C25 (Dirichlet forms), 47A07, 47D07. arXiv math.FA, math.SP. Level 4: research.

**Definition.** A closed form q on real L² is irreducible if its semigroup Tₜ splits the space along no set: L²(B) is invariant under every Tₜ only when B is null or conull. Here q is densely defined, nonnegative and symmetric, and the first Beurling–Deny criterion, \|u\| in the domain with q(\|u\|) ≤ q(u), makes Tₜ preserve positivity.

**Problem.** Let q be an irreducible closed form that satisfies the first Beurling–Deny criterion. Then its kernel, the set of u with q(u) = 0, is at most one-dimensional. If the kernel is nonzero, it is spanned by a strictly positive function.

**How the definition helps.** For an irreducible positivity-preserving semigroup, the lowest eigenvalue, when it exists, is simple with an eigenfunction strictly positive almost everywhere (our own). Since q ≥ 0, a nonzero kernel is the eigenspace of the lowest eigenvalue 0 (our own). Two disjoint Neumann intervals show why irreducibility is needed: each carries its own constant (our own).

**Paper or page:** [(Weak) Hardy and Poincaré inequalities and criticality theory](https://arxiv.org/abs/2108.11681v1). It says: “let q be an irreducible closed quadratic form on Lᵖ(X,μ) satisfying the first Beurling-Deny criterion. Then ker q is at most one-dimensional and if ker q≠{0}, there exists a strictly positive h∈Lᵖ(X,μ) such that ker q=ℝh.”

**Sources:**

- [Marcel Schmidt, (Weak) Hardy and Poincaré inequalities and criticality theory, arXiv:2108.11681 (2021), Springer Proc. Math. Stat. (2022) 421–459](https://arxiv.org/abs/2108.11681v1)

### Essential limits fix point values

**Remember:** Ignore null sets before taking the lower limit.

*True by definition.* MSC 31C45 (Other generalizations (nonlinear potential theory, etc.)), 35B65. arXiv math.AP. Level 4: research.

**Definition.** The lower essential limit of u at x is the limit of the essential infimum of u on shrinking balls about x, where the essential infimum is the largest lower bound valid off a null set. It picks a point value for a function known only almost everywhere.

**Problem.** For the nonlocal operators under discussion, two superharmonic functions in Ω that agree almost everywhere on ℝⁿ agree at every point of Ω.

**How the definition helps.** Changing u on a null set changes no essential infimum, so functions equal almost everywhere have the same lower essential limit at every point (our own). The cited theorem does the hard part: each superharmonic function equals its lower essential limit at every point of Ω.

**Paper or page:** [Supersolutions and superharmonic functions for nonlocal operators with Orlicz growth](https://arxiv.org/abs/2311.01246v1). It says: “In particular, infᴅ u = ess infᴅ u for any open set D ⋐ Ω.”

**Sources:**

- [Minhyun Kim, Se-Chan Lee. Supersolutions and superharmonic functions for nonlocal operators with Orlicz growth. 2311.01246v1](https://arxiv.org/abs/2311.01246v1)

### One datum tests boundary regularity

**Remember:** One capped distance controls every continuous boundary datum.

*True by definition.* MSC 31C45 (Other generalizations (nonlinear potential theory, etc.)), 35R11. arXiv math.AP. Level 4: research.

**Definition.** For the fractional p-Laplacian with 0 &lt; s &lt; 1 and 1 &lt; p &lt; ∞ on a bounded domain, x₀ is regular if the upper Perron solution tends to g(x₀) for every bounded exterior datum g continuous at x₀. The capped distance d(x) = min(1, \|x − x₀\|) controls every such g: for each ε &gt; 0 some C gives \|g − g(x₀)\| ≤ ε + C·d (our own).

**Problem.** A boundary point x₀ is regular exactly when the upper Perron solution for the capped distance d tends to zero at x₀.

**How the definition helps.** Comparison and the scaling of the operator carry the bound g ≤ g(x₀) + ε + C·d, and the matching lower bound, over to the Perron solutions (our own argument). So if the solution for d tends to zero, every solution tends to its value g(x₀). The converse holds because d is itself such a datum.

**Paper or page:** [Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems](https://arxiv.org/abs/2406.05994v3). It says: “dₓ₀(x) := min {1, \|x−x₀\|}.”

**Sources:**

- [Anders Björn, Jana Björn, Minhyun Kim. Perron solutions and boundary regularity for nonlocal nonlinear Dirichlet problems. 2406.05994v3](https://arxiv.org/abs/2406.05994v3)

### Wiener regularity ignores kernel choice

**Remember:** The capacity test never looks at the kernel.

*True by definition.* MSC 31C45 (Other generalizations (nonlinear potential theory, etc.)), 35R11. arXiv math.AP. Level 4: research.

**Definition.** The Wiener test at a boundary point a asks that the capacities of the complement near a add up to infinity: ∫₀¹ (cᵣ/rⁿ⁻ˢᵖ)<sup>(1/(p−1))</sup> dr/r = ∞. Here cᵣ is the least energy ∬ \|u(x)−u(y)\|ᵖ/\|x−y\|ⁿ⁺ˢᵖ dx dy of a smooth cutoff supported in B(a,2r) with u ≥ 1 near B̄(a,r) ∖ Ω. The test uses only the domain, n, s and p, never the kernel.

**Problem.** Fix a bounded domain in dimension n, an order 0 &lt; s &lt; 1, and 1 &lt; p &lt; ∞. Symmetric kernels bounded above and below by positive multiples of \|x−y\|<sup>(−(n+sp))</sup> have the same regular points, where solutions attain their continuous boundary values.

**How the definition helps.** The Wiener theorem says that, for each such kernel, a point is regular exactly when the test holds, so regularity cannot depend on the kernel (our own reading). Proving that theorem carries the work.

**Paper or page:** [The Wiener criterion for nonlocal Dirichlet problems](https://arxiv.org/abs/2203.16815v1), [The Wiener criterion for nonlocal Dirichlet problems](https://arxiv.org/abs/2203.16815v1). It says: “The regularity of a boundary point depends only on n, s, and p, not on the operator ℒ itself.”

**Sources:**

- [Minhyun Kim, Ki-Ahm Lee, Se-Chan Lee. The Wiener criterion for nonlocal Dirichlet problems. 2203.16815v1](https://arxiv.org/abs/2203.16815v1)
