### Volterra integration limits give uniqueness at every coupling

**Remember:** Past-only integration puts a factorial under each iterate.

*Rules out counterexamples.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** A linear Volterra equation of the second kind on \[0,T\] is u(t) = f(t) + λ∫₀ᵗ K(t,s)u(s) ds, so the integral at time t uses only past times s ≤ t. Hence the nth power of the integral operator integrates over ordered times s₁ ≤ … ≤ sₙ ≤ t and is bounded by (Mt)ⁿ/n!, with M the maximum of \|K\| (our own).

**Problem.** On \[0,T\], assume the known function is continuous and K is continuous for 0 ≤ s ≤ t ≤ T. Each scalar λ gives exactly one continuous solution.

**How the definition helps.** The factorial bound makes the series ∑ λⁿVⁿ converge for every λ, where V is the integral operator, and its sum inverts I − λV (our own). For contrast, the fixed-limit equation u(x) − ∫₀¹ u(y) dy = 0 has every constant as a solution (our own).

**Wikipedia:** [Volterra integral equation](https://en.wikipedia.org/wiki/Volterra_integral_equation). It says: “A linear Volterra equation of the second kind is x(t) = f(t) + ∫ₐᵗ K(t,s)x(s) ds.”

**Paper or page:** [The Non-zonal Rossby-Haurwitz Solutions of the 2D Euler Equations on a Rotating Ellipsoid](https://arxiv.org/abs/2310.17854v1). It says: “Then the unique solution g ∈ C(\[−π/2, 0\]) of the Volterra integral equation”

**Sources:** none listed. No primary source with a working link was found.

### Finite-rank Fredholm series terminate

**Remember:** Rank r matrices have zero determinant beyond size r.

*True by definition.* MSC 45B05 (Fredholm integral equations). arXiv math.CA. Level 3: graduate.

**Definition.** A kernel K on J×J has separated rank at most r if K(x,y) = ∑ⱼ₌₁ʳ aⱼ(x)bⱼ(y) throughout J×J, so each matrix \[K(xᵢ,xⱼ)\] has rank at most r (our own). The Fredholm determinant of I − λK has λⁿ coefficient (−1)ⁿ/n! times the integral of det\[K(xᵢ,xⱼ)\] over Jⁿ.

**Problem.** For a continuous separated kernel of rank at most r on a compact interval, the Fredholm determinant is a polynomial of degree at most r.

**How the definition helps.** For n &gt; r the n×n matrix has rank at most r, so its determinant is zero and the series stops at degree r (our own). Fredholm’s theorem says the zeros of this polynomial are the values of λ where the integral equation loses unique solvability (our own).

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)

### Positive kernels give convergent Mercer expansions

**Remember:** Positive kernels turn the diagonal expansion into a sum of squares.

*Rules out counterexamples.* MSC 45C05 (Eigenvalue problems for integral equations), 45P05. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A continuous symmetric kernel K is positive definite if every matrix \[K(xᵢ,xⱼ)\] at finitely many points is positive semidefinite. Then its integral operator has nonnegative eigenvalues λₙ, so the diagonal partial sums of ∑ λₙφₙ(x)² increase with the number of terms (our own).

**Problem.** On a closed bounded interval, expand a continuous symmetric positive definite kernel in eigenfunctions of its integral operator. The series converges absolutely and uniformly to the kernel.

**How the definition helps.** The increasing diagonal partial sums converge to K(x,x) (our own outline), and Dini’s theorem makes this uniform on the compact interval. Cauchy–Schwarz bounds each off-diagonal tail by the geometric mean of two diagonal tails. The quoted indefinite kernel shows that without positivity the expansion can fail to converge even pointwise.

**Paper or page:** [Extending Mercer's expansion to indefinite and asymmetric kernels](https://arxiv.org/abs/2409.16453v2). It says: “there exists a continuous symmetric indefinite kernel Kₚₜ: \[a, b\] × \[a, b\] → ℝ with a Mercer's expansion that does not converge pointwise.”

**Sources:**

- [Sungwoo Jeong, Alex Townsend. Extending Mercer's expansion to indefinite and asymmetric kernels](https://arxiv.org/abs/2409.16453v2)

### Resolvent kernels handle every forcing

**Remember:** Find one kernel and reuse it for every forcing.

*True by definition.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** For the equation u + j ∗ u = g, with (j ∗ u)(t) = ∫₀ᵗ j(t − s)u(s) ds, a resolvent kernel is a function r with r + j ∗ r = j. It does not depend on g, so one convolution with r solves the equation for every g.

**Problem.** Assume j, r and g are integrable on every interval \[0,T\]. Then g − r ∗ g is the unique locally integrable solution up to equality almost everywhere.

**How the definition helps.** The identity j ∗ r = j − r shows both that g − r ∗ g solves the equation and that any solution u has j ∗ u = r ∗ g (our own). Both steps use only that convolution is associative and commutative.

**Paper or page:** [Comparison between the Cauchy problem and the scattering problem for the Landau damping in the Vlasov-HMF equation](https://arxiv.org/abs/2103.15932v2). It says: “The solution f is then given by f(t) = g(t) − r ∗ g(t).”

**Sources:** none listed. No primary source with a working link was found.

### Finite parts differentiate Cauchy integrals

**Remember:** Differentiate the simple pole to define the squared pole.

*True by definition.* MSC 45E05 (Integral equations with kernels of Cauchy type), 46F10. arXiv math.CA. Level 3: graduate.

**Definition.** For a smooth density f on \[a,b\] and an interior point x, the Cauchy principal value integrates f(t)/(t − x) outside (x − ε, x + ε) and lets ε decrease to zero. The Hadamard finite part with the squared denominator (t − x)² is the x-derivative of that principal value.

**Problem.** On the interior of \[a,b\], this derivative equals the limit, as ε decreases to zero, of the integral of f(t)/(t − x)² outside (x − ε, x + ε) minus 2f(x)/ε.

**How the definition helps.** Differentiating the cutoff integral in x gives the squared-pole cutoff integral minus the endpoint term (f(x − ε) + f(x + ε))/ε, which is 2f(x)/ε + O(ε) by Taylor expansion (our own). Smoothness makes these derivatives converge locally uniformly in x, so the limit may be differentiated (our own).

**Wikipedia:** [Hadamard regularization](https://en.wikipedia.org/wiki/Hadamard_regularization). It says: “exists, then it may be differentiated with respect to x to obtain the Hadamard finite part integral as follows:”

**Sources:** none listed. No primary source with a working link was found.

### Frequency halves invert Hilbert equations

**Remember:** Divide separately on the two frequency halves.

*True by definition.* MSC 45E05 (Integral equations with kernels of Cauchy type), 44A15. arXiv math.FA. Level 3: graduate.

**Definition.** The Hilbert transform H on L²(ℝ) multiplies the Fourier transform by −i on positive frequencies and by i on negative frequencies. So aI + bH multiplies by a − ib on the positive half and by a + ib on the negative half (our own).

**Problem.** Take complex constants a and b and consider aI + bH on square-integrable functions on the line. It is invertible exactly when a − ib and a + ib are both nonzero.

**How the definition helps.** aI + bH is multiplication by one scalar on each frequency half, so it has a bounded inverse when both scalars are nonzero (our own). If one scalar is zero, the operator kills every function whose Fourier transform lives on that half-line (our own). The Fourier transform keeps the L² norm, so this multiplier picture is exact (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “the phase of the negative frequency components of u(t) by +90°”

**Sources:** none listed. No primary source with a working link was found.

### Total mass fixes Hilbert ambiguity

**Remember:** Prescribe the mass to fix the otherwise invisible arcsine term.

*Rules out counterexamples.* MSC 45E05 (Integral equations with kernels of Cauchy type), 42A50. arXiv math.CA. Level 3: graduate.

**Definition.** On (−1,1), use densities p(t)/√(1 − t²) with p a polynomial, and record both their total mass and their finite Hilbert transform, the principal value of the integral of the density against 1/(x − t). The mass is needed because the transform of 1/√(1 − t²) is zero.

**Problem.** Fix an integer n ≥ 0, a real mass m, and a real polynomial g of degree at most n. Exactly one polynomial p of degree at most n+1 gives a density p(t)/√(1−t²) with mass m and finite Hilbert transform g.

**How the definition helps.** In our own calculation, the transform sends a monic numerator of degree d ≥ 1 to a polynomial of degree d − 1 with leading coefficient −π. So g fixes every nonconstant coefficient of p, and the mass fixes the constant c, which adds πc to the mass.

**Paper or page:** [On the Local Regularity of the Hilbert Transform](https://arxiv.org/abs/2308.11947v3). It says: “p.v. ∫₋₁¹ 1/(√(1−t²) (x−t)) dt = 0 if \|x\|&lt;1,”

**Sources:** none listed. No primary source with a working link was found.

### Sonine pairs invert convolution

**Remember:** Partners convolve to 1, so together they just integrate.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)). arXiv math.CA. Level 3: graduate.

**Definition.** Kernels k and h on (0,∞) are Sonine partners if k ∗ h = 1 almost everywhere, where (k ∗ h)(t) = ∫₀ᵗ k(t − s)h(s) ds. Then convolving with k and then with h is the same as integrating from 0 to t.

**Problem.** Suppose k, h and an input f are integrable on every interval \[0,T\], and the output is k ∗ f. Then differentiating the absolutely continuous representative of h ∗ (k ∗ f) recovers f almost everywhere.

**How the definition helps.** Associativity, justified by Fubini’s theorem, gives h ∗ (k ∗ f) = 1 ∗ f, the integral of f from 0 to t (our own). The Lebesgue differentiation theorem then returns f almost everywhere (our own).

**Paper or page:** [Trends, Directions for Further Research, and Some Open Problems of Fractional Calculus](https://arxiv.org/abs/2108.04241v1). It says: “\\begin{equation}   (\\mathbb {D}<sub>(k)</sub>\\,  \\mathbb {I}<sub>(\\kappa )</sub>\\,  f) (t) = f(t),\\  f\\in C<sub>-1</sub>(0,+\\infty ),\\  t&gt;0,\\end{equation}”

**Sources:** none listed. No primary source with a working link was found.

### Squared radii simplify Abel inversion

**Remember:** Two half integrals give one ordinary integral.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 44A15. arXiv math.CA. Level 3: graduate.

**Definition.** Write a radial profile h as a function of the squared radius u = r². Its Abel transform is Ah(v) = ∫ᵥ<sup>∞</sup> h(u)/√(u − v) du, a kernel that depends only on the difference u − v.

**Problem.** For smooth compactly supported h, applying A twice gives π times the integral of h over \[v,∞). Differentiating and multiplying by −1/π recovers h(v).

**How the definition helps.** By Fubini’s theorem, applying A twice gives the kernel ∫ dσ/√(σ(s − σ)) over 0 &lt; σ &lt; s, a beta integral equal to π (our own). So A²h(v) = π∫ᵥ<sup>∞</sup> h(u) du, and differentiating recovers h (our own). The squared-radius change of variable matches this kernel to the usual radial projection (our own).

**Wikipedia:** [Abel transform](https://en.wikipedia.org/wiki/Abel_transform). It says: “The Abel transform of a function f(r) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Exponential norms contract Volterra iteration

**Remember:** Discount later errors and long histories no longer obstruct contraction.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45D05, 47H09. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On continuous functions on \[0,T\], replace the supremum norm by the weighted norm sup exp(−at)\|u(t)\|, with a &gt; 0, which discounts later times. For the map Φ(u)(t) = f(t) + ∫₀ᵗ G(t,s,u(s)) ds, the weight turns a past error into an integral of exp(−a(t − s)), which is at most 1/a.

**Problem.** Assume f and G are continuous and \|G(t,s,v) − G(t,s,w)\| ≤ L\|v − w\| whenever 0 ≤ s ≤ t ≤ T. If a &gt; L, iterating Φ from any continuous function converges geometrically to its unique fixed point.

**How the definition helps.** The Lipschitz bound and the factor 1/a make Φ a contraction with factor L/a &lt; 1 in the weighted norm (our own). This norm is equivalent to the supremum norm, so the space is complete, and Banach’s fixed-point theorem applies.

**Wikipedia:** [Banach fixed-point theorem](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem). It says: “the most difficult part is typically to define X properly so that T(X) ⊆ X.”

**Sources:**

- [Mihály Bessenyei and Zsolt Páles. Applications of the Bielecki renorming technique.](https://doi.org/10.1007/s11784-020-00845-x)

### Normalization separates shape from scale

**Remember:** Fix a value to find the shape, then recover the scale.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45M20. arXiv math.FA. Level 3: graduate.

**Definition.** On \[0,1\], let H(u)(x) = ∫₀¹ K(x,y)u(y)ᵏ dy, with K continuous and positive and k ≥ 2 an integer, so H(su) = sᵏH(u) for s &gt; 0. For positive continuous u with u(0) = 1, set N(u) = H(u)/H(u)(0), which keeps the shape of H(u) and fixes its value at zero.

**Problem.** Dividing each positive fixed point of H by its value at zero gives a bijection onto the fixed points of N.

**How the definition helps.** A fixed point u of N satisfies H(u) = cu with c = H(u)(0) &gt; 0 (our own). By homogeneity, su is a fixed point of H exactly when sᵏ⁻¹c = 1, which has one positive solution s.

**Paper or page:** [On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1). It says: “has a nontrivial positive solution iff the Hammerstein’s operator Hₖ has a nontrivial positive fixed point,”

**Sources:** none listed. No primary source with a working link was found.

### Separable kernels give cubic systems

**Remember:** Outputs lie in the span of the aⱼ, so solve for coefficients.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 45M20. arXiv math.FA. Level 3: graduate.

**Definition.** On \[0,1\], let H(u)(x) = ∫₀¹ K(x,y)u(y)³ dy, with a continuous kernel K(x,y) = ∑ⱼ aⱼ(x)bⱼ(y), a finite sum with linearly independent aⱼ. Every output of H lies in the span of the aⱼ, so each fixed point is u = ∑ cᵢaᵢ for a unique coefficient vector c (our own).

**Problem.** The fixed points correspond exactly to the solutions of a finite system of cubic equations. For positive fixed points, retain the vectors whose reconstructed functions are positive.

**How the definition helps.** Substituting u = ∑ cᵢaᵢ into u = H(u) gives cⱼ = ∫₀¹ bⱼ(y)(∑ᵢ cᵢaᵢ(y))³ dy, a cubic system (our own). Each solution rebuilds a fixed point, and linear independence makes the coefficients unique.

**Paper or page:** [On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1). It says: “The Hammerstein’s operator H₃ has a nontrivial positive fixed point iff the cubic operator P has a nontrivial positive fixed point,”

**Sources:**

- [I. M. Mavlonov, Kh. N. Khushvaktov, G. P. Arzikulov, F. H. Haydarov. On positive fixed points of operator of Hammerstein type with degenerate kernel and Gibbs Measures](https://arxiv.org/abs/2306.08496v1)

### Skew coupling preserves monotonicity

**Remember:** The two cross terms cancel when you test the product operator.

*True by definition.* MSC 45G10 (Other nonlinear integral equations), 47H05. arXiv math.FA. Level 3: graduate.

**Definition.** Call F monotone on a real Hilbert space if ⟨F(u) − F(w), u − w⟩ ≥ 0 for all u, w. To solve u + K(F(u)) = 0, set v = F(u) and seek zeros of A(u,v) = (F(u) − v, K(v) + u) on the product space. The coupling terms −v and +u have opposite signs, so they cancel when A is paired with a difference of points (our own).

**Problem.** Monotone F and K give a monotone A for the product inner product. If also ⟨M(u) − M(w), u − w⟩ ≥ η<sub>M</sub>‖u − w‖² for M = F and M = K, with η<sub>M</sub> &gt; 0, then A satisfies the same bound with constant min{η<sub>F</sub>, η<sub>K</sub>}.

**How the definition helps.** After the cross terms cancel, only the pairings for F and K remain (our own). Their lower bounds add to η<sub>F</sub>‖u − u′‖² + η<sub>K</sub>‖v − v′‖², which is at least min{η<sub>F</sub>, η<sub>K</sub>} times the squared product norm.

**Paper or page:** [Algorithm for equations of Hammerstein type and applications](https://arxiv.org/abs/2112.07117v1). It says: “Then A is a (p, η)-strongly monotone mapping, where η := min{η₁, η₂}.”

**Sources:**

- [M. O. Aibinu, S. C. Thakur, S. Moyo. Algorithm for equations of Hammerstein type and applications](https://arxiv.org/abs/2112.07117v1)

### Quadrature weights preserve convolution composition

**Remember:** Multiply the generating functions and the discrete convolutions compose.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 45E10, 65R20. arXiv math.NA. Level 3: graduate.

**Definition.** Fix a time step h &gt; 0. For a kernel whose Laplace transform K is analytic near 1/h, expand K((1 − z)/h) in powers of z and use the coefficients as weights for discrete convolution, which sums weighted past inputs. The weights are a power series built from K by one fixed substitution, so a product of transforms gives the product of weight series.

**Problem.** Suppose two scalar Laplace transforms are analytic near 1/h. Composing their discrete convolution maps gives the map defined by the product transform.

**How the definition helps.** Composing two discrete convolutions multiplies their weight power series, and by the common substitution that product is the series of the product transform (our own). Accuracy for the underlying integrals needs separate estimates.

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “the Cauchy product of these two power series is defined by a discrete convolution as follows:”

**Sources:**

- [C. Lubich, Convolution quadrature and discretized operational calculus. I (1988)](https://doi.org/10.1007/BF01398686)

### Continuous diagonals recover traces

**Remember:** Continuity pins down the diagonal that integration can otherwise ignore.

*Rules out counterexamples.* MSC 45P05 (Integral operators), 47B10. arXiv math.FA. Level 3: graduate.

**Definition.** A continuous kernel for an operator T on L²(\[a,b\]) is a continuous function K on \[a,b\]² with (Tf)(x) = ∫ₐᵇ K(x,y)f(y) dy almost everywhere, for every f. Continuity fixes K on the diagonal x = y, a set of measure zero that a merely measurable kernel could change freely.

**Problem.** For a trace-class integral operator, one whose singular values have a finite sum, with a continuous kernel, the trace equals ∫ₐᵇ K(x,x) dx.

**How the definition helps.** Averaging K over small squares along the diagonal gives traces of compressions of T to step functions, and uniform continuity makes these averages approach ∫ K(x,x) dx (our own). These compressions converge to T in trace norm, so their traces converge to the trace of T. The kernel equal to 1 on the diagonal and 0 elsewhere represents the zero operator but has diagonal integral b − a.

**Paper or page:** [Numerical Fredholm determinants for matrix-valued kernels on the real line](https://arxiv.org/abs/2507.22875v1). It says: “Then Tr(𝒦) = ∫ₐᵇ K(x,x) dx.”

**Sources:** none listed. No primary source with a working link was found.

### Schur weights handle divergent rows

**Remember:** Measure each row and column against a weight it can integrate.

*Makes the theorem clean to state or prove.* MSC 45P05 (Integral operators). arXiv math.FA. Level 3: graduate.

**Definition.** For a nonnegative measurable kernel K, Schur weights are strictly positive finite measurable functions p and q that K maps below multiples of each other. That is, ∫ K(x,y)q(y) dy ≤ Ap(x) for almost every x and ∫ K(x,y)p(x) dx ≤ Bq(y) for almost every y, with finite A, B ≥ 0.

**Problem.** Integrating K(x,y)f(y) in y defines an operator of norm at most √(AB) on square-integrable functions. For K(x,y) = 1/(x + y) on the positive half-line, choose p(x) = 1/√x and q(y) = 1/√y.

**How the definition helps.** Weights give finite bounds even when the unweighted row integrals diverge, as for 1/(x + y) (our own). Weighted Cauchy–Schwarz and Tonelli’s theorem bound the operator norm by √(AB) (our own). For 1/(x + y), scaling reduces the weighted integral to ∫₀<sup>∞</sup> dt/(√t(1 + t)) = π, so A = B = π (our own).

**Wikipedia:** [Schur test](https://en.wikipedia.org/wiki/Schur_test). It says: “Such functions p(x), q(y) are called the Schur test functions.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Actual ranges characterize attained fits

**Remember:** Projecting onto the closure finds the target, not necessarily an input.

*Rules out counterexamples.* MSC 45Q05 (Inverse problems for integral equations), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a bounded operator K between Hilbert spaces, let R be its actual range, not its closure, and let R⊥ be the vectors perpendicular to every output. The least-squares domain is R + R⊥, which holds f exactly when the projection of f onto the closure of R is an actual output (our own).

**Problem.** A vector u minimizing ‖Ku − f‖ exists exactly when f belongs to this domain.

**How the definition helps.** The projection is the closest point of the closure of R to f, so a minimizer exists exactly when the projection is an output (our own). Our own example is integration from 0 to x on L²(\[0,1\]). Its range is dense, but the constant 1 is not an output, so f = 1 has no least-squares solution.

**Paper or page:** [Fredholm integral equations for function approximation and the training of neural networks](https://arxiv.org/abs/2303.05262v3). It says: “Assume that F ∈ R(𝒢) + R(𝒢)⊥ ⊂ L²(X).”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic penalties stabilize Fredholm inversion

**Remember:** The penalty puts a positive floor under the normal operator.

*Rules out counterexamples.* MSC 45Q05 (Inverse problems for integral equations), 47A52. arXiv math.FA. Level 3: graduate.

**Definition.** For a bounded operator K between Hilbert spaces, data f and λ &gt; 0, the regularized solution minimizes ‖Ku − f‖² + λ‖u‖². The penalty adds λI to the normal operator K\*K, so the normal operator is at least λ and hence invertible.

**Problem.** The regularized solution exists uniquely for any data. Its change is at most 1/(2√λ) times the norm of the data change.

**How the definition helps.** The minimizer solves (K\*K + λI)u = K\*f, which has exactly one solution even for K = 0, where unregularized minimizers are arbitrary (our own). For a data change g and solution change v, this gives ‖Kv‖² + λ‖v‖² = Re⟨Kv,g⟩ ≤ ‖Kv‖‖g‖ (our own). Completing the square gives λ‖v‖² ≤ ‖g‖²/4.

**Paper or page:** [Moore-Penrose inverse and applications to linear equations](https://arxiv.org/abs/2110.01332v3). It says: “has a unique global minimizer”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero diagonals ensure Abel uniqueness

**Remember:** Keep the diagonal so differentiation can expose the input.

*Rules out counterexamples.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 45D05. arXiv math.FA. Level 4: research.

**Definition.** Fix finite a &lt; b and 0 &lt; β &lt; 1. The Abel operator sends f to ∫ₐᵖ K(p,t)f(t)/(p − t)ᵝ dt for almost every p, where K and ∂K/∂p are continuous on a ≤ t ≤ p ≤ b and K(p,p) is never zero. The nonzero diagonal means that near t = p the operator is a nonzero multiple of the pure Abel integral (our own).

**Problem.** These integrals determine any square-integrable solution up to equality almost everywhere.

**How the definition helps.** Applying a second Abel integral and differentiating once gives f(p) times a nonzero multiple of K(p,p), plus an integral of earlier values. Dividing by that multiple gives a Volterra equation of the second kind, whose solution is unique. For contrast, if K(p,t) is a smooth function of t that vanishes on a subinterval, every input supported there gives zero data (our own).

**Paper or page:** [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1). It says: “K(p,p) is non-zero, for p ∈ \[a,b\].”

**Sources:**

- [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1)

### Divided differences preserve discrete inversion

**Remember:** Divided differences multiply like triangular matrices, so inverses match.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 45E10, 65R20. arXiv math.NA. Level 4: research.

**Definition.** Take distinct positive nodes x₀,…,xₙ with K nonzero at each node. Let D(i,j) be the divided difference of K over the nodes xⱼ,…,xᵢ, and let A(K) be the lower triangular matrix with entries (−1)ⁱ⁻ʲ⁺¹D(i,j) for j ≤ i. The product rule for divided differences sums over the same splits of nodes as triangular matrix multiplication.

**Problem.** The lower triangular matrix for 1/K is the inverse of the matrix for K.

**How the definition helps.** In our own sign check, the product rule gives A(K)A(L) = −A(KL). Taking L = 1/K and using A(1) = −I gives A(K)A(1/K) = I.

**Paper or page:** [Generalized convolution quadrature based on the trapezoidal rule](https://arxiv.org/abs/2305.11134v1). It says: “the relation φₙ = ∑ⱼ₌₀ⁿ (−1)ⁿ⁻ʲ⁺¹ gⱼ ⟨xⱼ,…,xₙ⟩ 𝒦 can be inverted”

**Sources:**

- [Lehel Banjai, Matteo Ferrari. Generalized convolution quadrature based on the trapezoidal rule](https://arxiv.org/abs/2305.11134v1)

### Iterated collocation transfers a smoothed error bound

**Remember:** The extra integral smooths the collocation error.

*True by definition.* MSC 45L05 (Theoretical approximation of solutions to integral equations), 65R20. arXiv math.NA. Level 4: research.

**Definition.** For u = f + Ku on a bounded interval, let P interpolate at nodes with spacing h, and let v solve the collocation equation v = P(f + Kv). The iterated approximation w = f + Kv applies the integral operator once more, so its error u − w = K(u − v) passes through the smoothing operator K.

**Problem.** Suppose I − KP has uniformly bounded inverses as h decreases. If ‖K(u − Pu)‖∞ ≤ Chᵖ, then the maximum error of w is bounded by a constant times hᵖ.

**How the definition helps.** Since v = Pw, the error satisfies (I − KP)(u − w) = K(u − Pu) (our own). The uniformly bounded inverse turns the bound Chᵖ on the right into a bound of the same order on u − w. The paper gets its improved rates by bounding K(u − Pu) for its kernels and smooth solutions.

**Paper or page:** [A note on improvement by iteration for the approximate solutions of second kind Fredholm integral equations with Green's kernels](https://arxiv.org/abs/2406.12343v2). It says: “Then ‖φ − φₙᶜ‖∞ = O(h²ʳ⁺¹), ‖φ − φₙˢ‖∞ = O(h²ʳ⁺²).”

**Sources:**

- [Gobinda Rakshit, Shashank K. Shukla, Akshay S. Rane. A note on improvement by iteration for the approximate solutions of second kind Fredholm integral equations with Green's kernels](https://arxiv.org/abs/2406.12343v2)
