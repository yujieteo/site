### Volterra integration limits give uniqueness at every coupling

**Remember:** Past-only integration puts a factorial under each iterate.

*Rules out counterexamples.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** A linear Volterra equation of the second kind on \[0,T\] has the form u(t) = f(t) + λ∫₀ᵗ K(t,s)u(s) ds. The given kernel K weights only times s ≤ t.

**Problem.** On \[0,T\], assume the known function is continuous and K is continuous for 0 ≤ s ≤ t ≤ T. Each scalar λ gives exactly one continuous solution.

**How the definition helps.** The ordered integration times give each power of the integral operator a factorial denominator (our own). Our own proof uses this bound to sum the series for the inverse at every coupling. Our own counterexample is the fixed-limit equation u(x) − ∫₀¹ u(y) dy = 0, which every constant solves.

**Wikipedia:** [Volterra integral equation](https://en.wikipedia.org/wiki/Volterra_integral_equation). It says: “A linear Volterra equation of the second kind is x(t) = f(t) + ∫ₐᵗ K(t,s)x(s) ds.”

**Paper or page:** [The Non-zonal Rossby-Haurwitz Solutions of the 2D Euler Equations on a Rotating Ellipsoid](https://arxiv.org/abs/2310.17854v1). It says: “Then the unique solution g ∈ C(\[−π/2, 0\]) of the Volterra integral equation”

**Sources:** none listed. No primary source with a working link was found.

### Finite-rank Fredholm series terminate

**Remember:** A sampled kernel cannot have more rank than its separated terms.

*True by definition.* MSC 45B05 (Fredholm integral equations). arXiv math.CA. Level 3: graduate.

**Definition.** A kernel K on J×J has separated rank at most r if K(x,y) = ∑ⱼ₌₁ʳ aⱼ(x)bⱼ(y) throughout J×J. In the Fredholm determinant for I−λK, the coefficient of λⁿ is (−1)ⁿ/n! times the integral of det\[K(xᵢ,xⱼ)\] over Jⁿ.

**Problem.** For a continuous separated kernel of rank at most r on a compact interval, the Fredholm determinant is a polynomial of degree at most r.

**How the definition helps.** Each product contributes a matrix of rank at most one, so every coefficient above degree r vanishes (our own). The eigenvalue definition gives another proof by counting nonzero eigenvalues with multiplicity (our own). Fredholm’s solvability theorem identifies what the zeros of this series mean for the integral equation (our own).

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)

### Positive kernels give convergent Mercer expansions

**Remember:** Positive kernels turn the diagonal expansion into a sum of squares.

*Rules out counterexamples.* MSC 45C05 (Eigenvalue problems for integral equations), 45P05. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** Call a continuous symmetric kernel positive definite if every matrix of its values at finitely many points has a nonnegative quadratic form.

**Problem.** On a closed bounded interval, expand a continuous symmetric positive definite kernel in eigenfunctions of its integral operator. The series converges absolutely and uniformly to the kernel.

**How the definition helps.** Positivity makes the diagonal partial sums increase, while the cited indefinite kernel can fail to converge even pointwise. Mercer’s diagonal identity gives their pointwise limit K(x,x) (our own outline). Dini’s theorem gives uniform convergence on the compact interval. Cauchy–Schwarz bounds each absolute off-diagonal tail by the geometric mean of the two diagonal tails.

**Paper or page:** [Extending Mercer's expansion to indefinite and asymmetric kernels](https://arxiv.org/abs/2409.16453v2). It says: “there exists a continuous symmetric indefinite kernel Kₚₜ: \[a, b\] × \[a, b\] → ℝ with a Mercer's expansion that does not converge pointwise.”

**Sources:**

- [Sungwoo Jeong, Alex Townsend. Extending Mercer's expansion to indefinite and asymmetric kernels](https://arxiv.org/abs/2409.16453v2)

### Resolvent kernels handle every forcing

**Remember:** Find one kernel and reuse it for every forcing.

*True by definition.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Write j ∗ u for the integral of j(t − s)u(s) from 0 to t. In the equation u + j ∗ u = g, the known function g may vary. Define one resolvent kernel r by r + j ∗ r = j.

**Problem.** Assume j, r and g are integrable on every interval \[0,T\]. Then g − r ∗ g is the unique locally integrable solution up to equality almost everywhere.

**How the definition helps.** The identity r + j∗r = j cancels the extra terms when composing the two solution rules (our own). Associativity and commutativity of scalar convolution give the same cancellation in both orders. Thus subtracting convolution by r inverts addition of convolution by j.

**Paper or page:** [Comparison between the Cauchy problem and the scattering problem for the Landau damping in the Vlasov-HMF equation](https://arxiv.org/abs/2103.15932v2). It says: “The solution f is then given by f(t) = g(t) − r ∗ g(t).”

**Sources:** none listed. No primary source with a working link was found.

### Finite parts differentiate Cauchy integrals

**Remember:** Differentiate the simple pole to define the squared pole.

*True by definition.* MSC 45E05 (Integral equations with kernels of Cauchy type), 46F10. arXiv math.CA. Level 3: graduate.

**Definition.** For a smooth density f on \[a,b\], integrate f(t)/(t − x) after excluding equal lengths on each side of the interior point x. Call the limit the Cauchy principal value. Define the finite part for the squared denominator as the derivative of that principal value with respect to x.

**Problem.** On the interior of a bounded interval, the derivative equals the limit of the squared-pole cutoff integral after subtracting 2f(x)/ε. Here ε is the length cut out on each side.

**How the definition helps.** Differentiating the cutoff integral gives the squared-pole integral minus (f(x−ε)+f(x+ε))/ε from its moving endpoints (our own). Taylor expansion replaces this endpoint term by 2f(x)/ε with error O(ε). The omitted symmetric principal value equals ∫₀ᵋ (f(x+s)−f(x−s))/s ds. Its derivative is locally O(ε) by smoothness, justifying differentiation of the limit.

**Wikipedia:** [Hadamard regularization](https://en.wikipedia.org/wiki/Hadamard_regularization). It says: “exists, then it may be differentiated with respect to x to obtain the Hadamard finite part integral as follows:”

**Sources:** none listed. No primary source with a working link was found.

### Frequency halves invert Hilbert equations

**Remember:** Divide separately on the two frequency halves.

*True by definition.* MSC 45E05 (Integral equations with kernels of Cauchy type), 44A15. arXiv math.FA. Level 3: graduate.

**Definition.** For f ∈ L²(ℝ), define Hf by multiplying its Fourier transform by −i on positive frequencies and by i on negative frequencies. The multiplier value at zero does not affect the L² function.

**Problem.** Take complex constants a and b and consider aI + bH on square-integrable functions on the line. It is invertible exactly when a − ib and a + ib are both nonzero.

**How the definition helps.** The multiplier definition splits the equation into two scalar equations (our own). When both scalars are nonzero, their reciprocals give a bounded inverse (our own). A zero scalar kills every function supported in frequency on that half-line (our own). The work lies in proving the integral and multiplier definitions agree and that the Fourier transform preserves the norm (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “the phase of the negative frequency components of u(t) by +90°”

**Sources:** none listed. No primary source with a working link was found.

### Total mass fixes Hilbert ambiguity

**Remember:** Prescribe the mass to fix the otherwise invisible arcsine term.

*Rules out counterexamples.* MSC 45E05 (Integral equations with kernels of Cauchy type), 42A50. arXiv math.CA. Level 3: graduate.

**Definition.** On (−1,1), use densities p(t)/√(1 − t²) with polynomial numerator p. Record both the integral of the density and its finite Hilbert transform. The transform integrates the density against 1/(x − t), taking the limit after omitting equal lengths on both sides of x.

**Problem.** Fix an integer n ≥ 0, a real mass m, and a real polynomial g of degree at most n. Exactly one polynomial p of degree at most n+1 gives a density p(t)/√(1−t²) with mass m and finite Hilbert transform g.

**How the definition helps.** Recording the mass determines the constant numerator that the transform cannot detect, since the transform annihilates 1/√(1 − t²). In our own calculation, a monic numerator of degree d ≥ 1 transforms to a polynomial of degree d − 1 with leading coefficient −π. So coefficient comparison determines all nonconstant terms, and the mass fixes the constant, which changes the mass by π times its value.

**Paper or page:** [On the Local Regularity of the Hilbert Transform](https://arxiv.org/abs/2308.11947v3). It says: “p.v. ∫₋₁¹ 1/(√(1−t²) (x−t)) dt = 0 if \|x\|&lt;1,”

**Sources:** none listed. No primary source with a working link was found.

### Sonine pairs invert convolution

**Remember:** One partner undoes the other after one ordinary derivative.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)). arXiv math.CA. Level 3: graduate.

**Definition.** For positive time, convolution of k and h means integrating k(t − s)h(s) from 0 to t. Call the kernels Sonine partners if their convolution equals 1 almost everywhere. The unknown input enters the integral equation through convolution with k.

**Problem.** Assume both kernels and the input are integrable on every interval \[0,T\]. Convolving the output with h and differentiating its absolutely continuous representative recovers the input almost everywhere.

**How the definition helps.** The two kernels combine to ordinary integration, so our own proof ends by differentiating that integral. The work moves to finding a partner and justifying associativity by Fubini's theorem (our own).

**Paper or page:** [Trends, Directions for Further Research, and Some Open Problems of Fractional Calculus](https://arxiv.org/abs/2108.04241v1). It says: “\\begin{equation}   (\\mathbb {D}<sub>(k)</sub>\\,  \\mathbb {I}<sub>(\\kappa )</sub>\\,  f) (t) = f(t),\\  f\\in C<sub>-1</sub>(0,+\\infty ),\\  t&gt;0,\\end{equation}”

**Sources:** none listed. No primary source with a working link was found.

### Squared radii simplify Abel inversion

**Remember:** Two half integrals give one ordinary integral.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 44A15. arXiv math.CA. Level 3: graduate.

**Definition.** Write u = r² and let h(u) be the radial profile at radius √u. In squared distance v, define Ah(v) by integrating h(u)/√(u − v) over u &gt; v. This replaces the radial kernel containing both r and the observation radius.

**Problem.** For smooth compactly supported h, applying A twice gives π times the integral of h over \[v,∞). Differentiating and multiplying by −1/π recovers h(v).

**How the definition helps.** Squaring the radius turns the kernel into a function of one difference (our own). Fubini’s theorem reduces its double application to the beta integral, whose value is π (our own). The remaining work is matching the radial projection to this kernel by the squared-radius change of variable (our own).

**Wikipedia:** [Abel transform](https://en.wikipedia.org/wiki/Abel_transform). It says: “The Abel transform of a function f(r) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Exponential norms contract Volterra iteration

**Remember:** Discount later errors and long histories no longer obstruct contraction.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45D05, 47H09. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On continuous functions on \[0,T\], use the supremum of exp(−at)\|u(t)\|, with a &gt; 0, in place of the usual supremum norm. Define the integral map by adding to f(t) the integral of G(t,s,u(s)) from zero to t.

**Problem.** Assume f and G are continuous and \|G(t,s,v) − G(t,s,w)\| ≤ L\|v − w\| whenever 0 ≤ s ≤ t ≤ T. For a &gt; L, iteration from any continuous input converges geometrically to the unique fixed point.

**How the definition helps.** The exponential weight inserts exp(−a(t−s)) into the error integral (our own). Its integral over 0 ≤ s ≤ t is at most 1/a, giving contraction factor L/a. The weighted norm is equivalent to the complete supremum norm. Banach’s fixed-point theorem gives uniqueness and geometric convergence.

**Wikipedia:** [Banach fixed-point theorem](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem). It says: “the most difficult part is typically to define X properly so that T(X) ⊆ X.”

**Sources:**

- [Mihály Bessenyei and Zsolt Páles. Applications of the Bielecki renorming technique.](https://doi.org/10.1007/s11784-020-00845-x)

### Normalization separates shape from scale

**Remember:** Fix a value to find the shape, then recover the scale.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45M20. arXiv math.FA. Level 3: graduate.

**Definition.** On \[0,1\], let H(u)(x) integrate K(x,y)u(y)ᵏ over 0 ≤ y ≤ 1, with continuous K &gt; 0 and integer k ≥ 2. For positive continuous u with u(0) = 1, set N(u) = H(u)/H(u)(0).

**Problem.** Dividing each positive fixed point of H by its value at zero gives a bijection onto the fixed points of N.

**How the definition helps.** Normalization turns the unknown scale into one positive number. In our own calculation, N(u) = u means H(u) = cu with c = H(u)(0) &gt; 0. Homogeneity gives H(su) = sᵏcu. The equation s⁽ᵏ⁻¹⁾c = 1 determines the unique positive scale that turns u into a fixed point of H.

**Paper or page:** [On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1). It says: “has a nontrivial positive solution iff the Hammerstein’s operator Hₖ has a nontrivial positive fixed point,”

**Sources:** none listed. No primary source with a working link was found.

### Separable kernels give cubic systems

**Remember:** The kernel’s output functions give all the unknowns you need.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45M20. arXiv math.FA. Level 3: graduate.

**Definition.** On \[0,1\], let H(u)(x) integrate K(x,y)u(y)³ over y. Write the continuous kernel as a finite sum of products aⱼ(x)bⱼ(y), using linearly independent functions aⱼ. Represent a candidate fixed point by its coefficients in these functions.

**Problem.** The fixed points correspond exactly to the solutions of a finite system of cubic equations. For positive fixed points, retain the vectors whose reconstructed functions are positive.

**How the definition helps.** The separated kernel puts every fixed point in the span of the independent output functions aⱼ (our own). Writing u = ∑ cᵢaᵢ gives the cubic equations cⱼ = ∫₀¹ bⱼ(y)(∑ cᵢaᵢ(y))³ dy. Conversely, each solution reconstructs a fixed point, whose coordinates are unique by independence.

**Paper or page:** [On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1). It says: “The Hammerstein’s operator H₃ has a nontrivial positive fixed point iff the cubic operator P has a nontrivial positive fixed point,”

**Sources:**

- [I. M. Mavlonov, Kh. N. Khushvaktov, G. P. Arzikulov, F. H. Haydarov. On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1)

### Skew coupling preserves monotonicity

**Remember:** The two cross terms cancel when you test the product operator.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 47H05. arXiv math.FA. Level 3: graduate.

**Definition.** On a real Hilbert space, call F monotone if ⟨F(u) − F(w),u − w⟩ ≥ 0 for every u,w. For maps F and K on this space, introduce v = F(u). Replace u + K(F(u)) = 0 by the zero equation for A(u,v) = (F(u) − v,K(v) + u).

**Problem.** Monotone F and K give a monotone A for the product inner product. Suppose each map M ∈ {F,K} satisfies ⟨M(u)−M(w),u−w⟩ ≥ η<sub>M</sub>‖u−w‖² for every u,w, with η<sub>M</sub> &gt; 0. Then A satisfies the same bound on the product space with constant min{η<sub>F</sub>,η<sub>K</sub>}.

**How the definition helps.** The opposite signs cancel the two cross terms in the pairing for A. In our own calculation, only the original pairings for F and K remain. Their lower bounds add. The remaining task is to solve the product equation using these separate bounds.

**Paper or page:** [Algorithm for equations of Hammerstein type and applications](https://arxiv.org/abs/2112.07117v1). It says: “Then A is a (p, η)-strongly monotone mapping, where η := min{η₁, η₂}.”

**Sources:**

- [M. O. Aibinu, S. C. Thakur, S. Moyo. Algorithm for equations of Hammerstein type and applications](https://arxiv.org/abs/2112.07117v1)

### Quadrature weights preserve convolution composition

**Remember:** Multiply the generating functions and the discrete convolutions compose.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 45E10, 65R20. arXiv math.NA. Level 3: graduate.

**Definition.** Fix a time step h &gt; 0. For a kernel with Laplace transform K analytic near 1/h, expand K((1 − z)/h) in powers of z. Use the coefficients as weights for discrete convolution, which sums weighted past inputs.

**Problem.** Suppose two scalar Laplace transforms are analytic near 1/h. Composing their discrete convolution maps gives the map defined by the product transform.

**How the definition helps.** A common substitution turns the product of two transforms into the product of their weight series. In our own calculation, coefficient multiplication gives exactly the weights for composing the discrete maps. This avoids approximating the two successive integrals independently. Proving accuracy for the underlying integrals requires separate estimates.

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “the Cauchy product of these two power series is defined by a discrete convolution as follows:”

**Sources:**

- [C. Lubich, Convolution quadrature and discretized operational calculus. I (1988)](https://doi.org/10.1007/BF01398686)

### Continuous diagonals recover traces

**Remember:** Continuity pins down the diagonal that integration can otherwise ignore.

*Rules out counterexamples.* MSC 45P05 (Integral operators), 47B10. arXiv math.FA. Level 3: graduate.

**Definition.** A continuous kernel for T on L²(\[a,b\]) is a continuous K on \[a,b\]² satisfying (Tf)(x) = ∫ₐᵇ K(x,y)f(y) dy almost everywhere for every f. The operator is trace class if the sum of its singular values is finite.

**Problem.** For a trace-class integral operator with a continuous kernel, the trace equals ∫ₐᵇ K(x,x) dx.

**How the definition helps.** Continuity makes the diagonal integral a limit of traces of compressions to functions constant on small intervals (our own). Uniform continuity controls the difference between each square average and its diagonal values. The projections approach the identity strongly, so the compressed trace-class operators converge in trace norm. A kernel equal to one only on the diagonal represents zero but has diagonal integral b−a.

**Paper or page:** [Numerical Fredholm determinants for matrix-valued kernels on the real line](https://arxiv.org/abs/2507.22875v1). It says: “Then Tr(𝒦) = ∫ₐᵇ K(x,x) dx.”

**Sources:** none listed. No primary source with a working link was found.

### Schur weights handle divergent rows

**Remember:** Measure each row and column against a weight it can integrate.

*Makes the theorem clean to state or prove.* MSC 45P05 (Integral operators). arXiv math.FA. Level 3: graduate.

**Definition.** For a nonnegative measurable kernel K, Schur weights are strictly positive finite measurable functions p and q satisfying two bounds for finite A,B ≥ 0. Require ∫K(x,y)q(y)dy ≤ Ap(x) for almost every x and ∫K(x,y)p(x)dx ≤ Bq(y) for almost every y.

**Problem.** Integrating K(x,y)f(y) in y defines an operator of norm at most √(AB) on square-integrable functions. For K(x,y) = 1/(x + y) on the positive half-line, choose p(x) = 1/√x and q(y) = 1/√y.

**How the definition helps.** Weights make finite estimates possible even where unweighted row or column integrals diverge (our own). Weighted Cauchy–Schwarz and Tonelli’s theorem prove the bound (our own). The work in the example is evaluating the weighted integral by scaling, which gives A = B = π (our own).

**Wikipedia:** [Schur test](https://en.wikipedia.org/wiki/Schur_test). It says: “Such functions p(x), q(y) are called the Schur test functions.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Actual ranges characterize attained fits

**Remember:** Projecting onto the closure finds the target, not necessarily an input.

*Rules out counterexamples.* MSC 45Q05 (Inverse problems for integral equations), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a bounded integral operator K between Hilbert spaces, write R for its actual range. Define the domain of least-squares inversion as R + R⊥, where R⊥ consists of vectors perpendicular to every output.

**Problem.** A vector u minimizing ‖Ku − f‖ exists exactly when f belongs to this domain.

**How the definition helps.** The actual range condition ensures that some input attains the closest output. In our own proof, project f onto the closure of R; this projection has a preimage exactly when it lies in R. Our own example maps g in L²(\[0,1\]) to its integral from zero to x. Its range is dense, but no output equals the constant one almost everywhere, so the constant one has no least-squares solution.

**Paper or page:** [Fredholm integral equations for function approximation and the training of neural networks](https://arxiv.org/abs/2303.05262v3). It says: “Assume that F ∈ R(𝒢) + R(𝒢)⊥ ⊂ L²(X).”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic penalties stabilize Fredholm inversion

**Remember:** The penalty puts a positive floor under the normal operator.

*Rules out counterexamples.* MSC 45Q05 (Inverse problems for integral equations), 47A52. arXiv math.FA. Level 3: graduate.

**Definition.** Let K be a bounded integral operator between Hilbert spaces. For data f and λ &gt; 0, define the regularized solution as the minimizer of ‖Ku − f‖² + λ‖u‖².

**Problem.** The regularized solution exists uniquely for any data. Its change is at most 1/(2√λ) times the norm of the data change.

**How the definition helps.** Adding λI to K\*K makes the normal operator invertible, even for K = 0, where unregularized minimizers are arbitrary. In our own proof, the normal equation for data difference g and solution difference v gives ‖Kv‖² + λ‖v‖² = Re⟨Kv,g⟩. Completing the square gives λ‖v‖² ≤ ‖g‖²/4.

**Paper or page:** [Moore-Penrose inverse and applications to linear equations](https://arxiv.org/abs/2110.01332v3). It says: “has a unique global minimizer”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero diagonals ensure Abel uniqueness

**Remember:** Keep the diagonal so differentiation can expose the input.

*Rules out counterexamples.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 45D05. arXiv math.FA. Level 4: research.

**Definition.** Fix finite a &lt; b and 0 &lt; β &lt; 1. Require K and its first partial derivative in p to be continuous on a ≤ t ≤ p ≤ b, with K(p,p) always nonzero. The Abel operator integrates K(p,t)f(t)/(p − t)ᵝ from a to p for almost every p.

**Problem.** These integrals determine any square-integrable solution up to equality almost everywhere.

**How the definition helps.** A second integration and one differentiation expose f(p) with a nonzero coefficient proportional to K(p,p). Dividing by that coefficient leaves an equation involving only earlier values, for which the standard uniqueness theorem applies. For our own counterexample, let K(p,t) equal a smooth function of t that vanishes on a subinterval. Every input supported there gives zero data.

**Paper or page:** [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1). It says: “K(p,p) is non-zero, for p ∈ \[a,b\].”

**Sources:**

- [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1)

### Divided differences preserve discrete inversion

**Remember:** Use divided differences of the inverse symbol to undo the discrete convolution.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 45E10, 65R20. arXiv math.NA. Level 4: research.

**Definition.** Take distinct positive nodes x₀,…,xₙ with K nonzero at each node. Start with D(j,j) = K(xⱼ) and set D(i,j) = (D(i,j+1) − D(i−1,j))/(xᵢ − xⱼ) for j &lt; i. Define A(K) as lower triangular with entries (−1)ⁱ⁻ʲ⁺¹D(i,j) for j ≤ i.

**Problem.** The lower triangular matrix for 1/K is the inverse of the matrix for K.

**How the definition helps.** The divided-difference product rule sums over the same splits as triangular matrix multiplication. Our own sign check gives A(K)A(L) = −A(KL). Taking L = 1/K gives the identity because A(1) = −I.

**Paper or page:** [Generalized convolution quadrature based on the trapezoidal rule](https://arxiv.org/abs/2305.11134v1). It says: “the relation φₙ = ∑ⱼ₌₀ⁿ (−1)ⁿ⁻ʲ⁺¹ gⱼ ⟨xⱼ,…,xₙ⟩ 𝒦 can be inverted”

**Sources:**

- [Lehel Banjai, Matteo Ferrari. Generalized convolution quadrature based on the trapezoidal rule](https://arxiv.org/abs/2305.11134v1)

### Iterated collocation transfers a smoothed error bound

**Remember:** The extra integral smooths the collocation error.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 65R20. arXiv math.NA. Level 4: research.

**Definition.** For u = f + Ku on a bounded interval, let P interpolate at nodes with spacing h. First solve v = P(f + Kv) in the interpolation space. Define the improved approximation w = f + Kv by applying the integral operator once more.

**Problem.** Suppose I − KP has uniformly bounded inverses as h decreases. If ‖K(u − Pu)‖∞ ≤ Chᵖ, then the maximum error of w is bounded by a constant times hᵖ.

**How the definition helps.** The last integral puts the interpolation error inside K. In our own calculation, v = Pw gives (I − KP)(u − w) = K(u − Pu). Applying the bounded inverse proves the estimate. The paper obtains an improved rate by bounding the right side for its particular kernels and smooth solutions.

**Paper or page:** [A note on improvement by iteration for the approximate solutions of second kind Fredholm integral equations with Green's kernels](https://arxiv.org/abs/2406.12343v2). It says: “Then ‖φ − φₙᶜ‖∞ = O(h²ʳ⁺¹), ‖φ − φₙˢ‖∞ = O(h²ʳ⁺²).”

**Sources:**

- [Gobinda Rakshit, Shashank K. Shukla, Akshay S. Rane. A note on improvement by iteration for the approximate solutions of second kind Fredholm integral equations with Green's kernels](https://arxiv.org/abs/2406.12343v2)
