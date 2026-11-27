### Even reflection cancels sines

**Remember:** Even reflection keeps cosines and cancels sines.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Extend an integrable function on \[0,L\] to \[−L,L\] by reflection across zero. Use this even extension instead of choosing arbitrary values on the negative half.

**Problem.** The reflected function has zero sine coefficients. Its cosine coefficients are twice the corresponding half-interval integral divided by L.

**How the definition helps.** In our own proof, even reflection makes each sine integrand odd and each cosine integrand even. Our own explanation puts any pointwise reconstruction work into the ordinary Fourier convergence theorem for the extended function.

**Paper or page:** [Fourier Series for Even Function over Symmetric Range](https://proofwiki.org/wiki/Fourier_Series_for_Even_Function_over_Symmetric_Range). It says: “Let f(x) be an even real function defined on the interval (−λ, λ).”

**Sources:** none listed. No primary source with a working link was found.

### Summable coefficients ensure uniform convergence

**Remember:** Every exponential has modulus one, so the same tail bound works everywhere.

*Rules out counterexamples.* MSC 42A20 (Convergence and absolute convergence of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Wiener algebra on the circle consists of continuous complex functions whose Fourier coefficients have a finite sum of absolute values.

**Problem.** A continuous circle function in the Wiener algebra has a uniformly convergent Fourier series. Its sum is the original function.

**How the definition helps.** An absolute coefficient tail bounds the Fourier series tail uniformly (our own). Fourier uniqueness identifies the sum, since termwise integration recovers the same coefficients (our own). The requirement excludes du Bois-Reymond's continuous function whose Fourier series diverges at a point (our own).

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series). It says: “If f is continuous and its Fourier coefficients are absolutely summable, then the Fourier series converges uniformly.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fejér kernel as a square makes it nonnegative

**Remember:** A squared absolute value cannot be negative.

*True by definition.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the nth Fejér kernel as 1/n times \|1 + exp(ix) + ⋯ + exp(i(n − 1)x)\|². The usual definition is the average of the first n Dirichlet kernels. The kth Dirichlet kernel is the sum of exp(ijx) over integers j from −k to k.

**Problem.** Each Fejér kernel is nonnegative everywhere, and its average over one period is one.

**How the definition helps.** As a squared absolute value divided by n, the kernel is nonnegative with no calculation. Its average is one because the exponentials are orthogonal, so the average of the square is n. From the average of Dirichlet kernels, nonnegativity usually needs the closed formula (1/n)(sin(nx/2)/sin(x/2))². The work moves to showing that the square equals that average. Expanding the square gives n − \|j\| pairs of frequencies with difference j, and this matches the average. These proof steps are our own; Wikipedia states only that the kernel is a positive summability kernel.

**Wikipedia:** [Fejér kernel](https://en.wikipedia.org/wiki/Fej%C3%A9r_kernel). It says: “The Fejér kernel is a positive summability kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Poisson kernel by Fourier coefficients makes radii multiply

**Remember:** Convolution multiplies Fourier coefficients, so the radii multiply.

*True by definition.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; r &lt; 1, define the circle Poisson kernel Pᵣ by its Fourier coefficients, r raised to \|k\| at frequency k. The usual definition is the formula (1 − r²)/(1 − 2r cos θ + r²).

**Problem.** For 0 &lt; r, s &lt; 1, the convolution of Pᵣ and Pₛ over the circle, with normalized measure, is the kernel at radius rs.

**How the definition helps.** Convolution turns into multiplication of Fourier coefficients, as the Wikipedia text says. So the coefficients of the convolution are r raised to \|k\| times s raised to \|k\|, which are the coefficients at radius rs. With the rational formula, the same identity needs a hard integral. The work moves to showing that the coefficient definition gives the rational formula. Summing the two geometric series over positive and negative frequencies does this. The last three steps are our own.

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “After the Fourier transform, convolution with Pᵣ(θ) becomes multiplication by the sequence”

**Sources:** none listed. No primary source with a working link was found.

### Poisson smoothing recovers continuous functions

**Remember:** Poisson averaging keeps its mass while narrowing to the starting point.

*Rules out counterexamples.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An Abel mean of a Fourier series multiplies its coefficient at frequency k by r to the power \|k\|, with 0 &lt; r &lt; 1. This replaces a fixed frequency cutoff by a smooth reduction of all high frequencies.

**Problem.** The Abel means of every continuous circle function converge to it uniformly as r tends to one.

**How the definition helps.** The Abel weights turn the Fourier sum into a weighted average of translates using the Poisson kernel (our own). Summing the geometric series shows that the weights are positive, have total mass one, and concentrate near zero (our own). Uniform continuity controls the nearby translates, and the remaining weight tends to zero (our own). Under ordinary frequency truncation, a continuous function can have a Fourier series that diverges at a point (our own).

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “the functions Pᵣ(θ) form an approximate unit in the convolution algebra L¹(T).”

**Sources:** none listed. No primary source with a working link was found.

### Band limits make sampling injective

**Remember:** Samples are Fourier coefficients of the spectrum on one frequency interval.

*Rules out counterexamples.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 94A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A square-integrable signal is bandlimited to a given interval if its Fourier transform vanishes off that interval. Use the continuous representative obtained by inverse Fourier integration over the interval.

**Problem.** If the transform is supported in \[−½,½\], the signal is uniquely determined by its values at the integers.

**How the definition helps.** In our own explanation, the support condition makes the samples into Fourier coefficients on a single interval. Completeness of the Fourier basis does the reconstruction work in our own explanation. Our own counterexample starts with a nonzero bandlimited signal and multiplies it by exp(2πit). In our own example this shifts the spectrum but leaves every sample at integer t unchanged.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “Then f can be reconstructed from its samples on ℤ by the formula”

**Sources:**

- [C. E. Shannon, Communication in the Presence of Noise (1949)](https://doi.org/10.1109/jrproc.1949.232969)

### Integrable transforms invert absolutely

**Remember:** Both integrals are ordinary absolute integrals when both functions are integrable.

*Rules out counterexamples.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On ℝ, take functions f with finite integral of \|f\| whose Fourier transforms also have finite integral of their absolute value.

**Problem.** An integrable function with integrable Fourier transform equals its absolutely convergent inverse transform almost everywhere. Equality holds wherever the original function is continuous.

**How the definition helps.** Absolute integrability of the transform bounds the inverse integral because its exponential kernel has modulus one (our own). For the indicator of \[−1,1\], the transform is sin(2πξ)/(πξ), whose absolute value has infinite integral (our own). Fourier inversion identifies the resulting continuous function with the original function almost everywhere (our own).

**Wikipedia:** [Fourier inversion theorem](https://en.wikipedia.org/wiki/Fourier_inversion_theorem). It says: “Furthermore, we assume that the Fourier transform is also integrable.”

**Sources:** none listed. No primary source with a working link was found.

### Periodization gives Poisson summation

**Remember:** Fold the line into one period, then read its Fourier coefficients.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42A16. arXiv math.CA. Level 2: later undergraduate.

**Definition.** To periodize f, add all its integer translates. The resulting sum has period one whenever it converges absolutely.

**Problem.** Suppose f and all its derivatives decay faster than every inverse power at infinity. Use the Fourier kernel exp(−2πixξ). Then the sums of f and its Fourier transform over the integers agree.

**How the definition helps.** Periodization makes the Fourier coefficients equal the transform values at the integers. In our own proof, integrating each translate over one period covers the real line once. Evaluating the Fourier series at zero gives the two sums. Decay justifies interchanging summation and integration and ensures absolute convergence of the Fourier series. This replaces a direct comparison of the sums.

**Wikipedia:** [Poisson summation formula](https://en.wikipedia.org/wiki/Poisson_summation_formula). It says: “the Fourier series coefficients of \\(s<sub>P</sub>(x)\\) are \\(\\frac{1}{P} S\\left(\\frac{k}{P}\\right)\\)”

**Paper or page:** [Poisson Summation Formula](https://proofwiki.org/wiki/Poisson_Summation_Formula). It says: “Then: ∑ₙ∈ℤ f(n) = ∑ₘ∈ℤ f̂(m)”

**Sources:** none listed. No primary source with a working link was found.

### Dirichlet convolution makes convergence local

**Remember:** Away from the point, only a fast oscillation remains in the kernel.

*True by definition.* MSC 42A63 (Uniqueness of trigonometric expansions, uniqueness of Fourier expansions, Riemann theory, localization). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Dirichlet kernel is the sum of the complex exponentials at integer frequencies from −n to n. Instead of computing separate Fourier coefficients, integrate the function against a translate of this kernel using normalized circle measure.

**Problem.** If two integrable circle functions agree near a point, the difference of their Fourier partial sums tends to zero at that point.

**How the definition helps.** The kernel formula puts the vanishing difference and all frequency dependence in one integral (our own). In the shift variable t, the difference vanishes near zero, where the denominator sin(t/2) could vanish (our own). Dividing by that denominator therefore leaves an integrable function on \[−π,π\] (our own). The numerator oscillates at frequency n + ½ (our own). The Riemann–Lebesgue lemma says that integrating an integrable function against these increasingly rapid oscillations gives a limit of zero (our own).

**Wikipedia:** [Dirichlet kernel](https://en.wikipedia.org/wiki/Dirichlet_kernel). It says: “The convolution of Dₙ(x) with any function f of period 2π is the nth-degree Fourier series approximation to f”

**Sources:** none listed. No primary source with a working link was found.

### Projections give Fourier slices

**Remember:** The projected coordinate is the only coordinate the Fourier kernel reads.

*True by definition.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 44A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integrable function on the plane, define its projection density by integrating along lines perpendicular to the projection axis. Equivalently, project the measure that has the original function as its density.

**Problem.** The one-dimensional Fourier transform of the projection density is the restriction of the two-dimensional transform to the projection axis.

**How the definition helps.** The image-measure definition turns the projected transform directly into an integral over the plane. In our own proof, a Fourier exponential pointing along the projection axis depends only on the projected coordinate. Fubini’s theorem shows that the image measure has the usual line-integral density. This gives the slice identity for every direction.

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “Take that same function, but do a two-dimensional Fourier transform first, and then slice the function through its origin, parallel to the projection line.”

**Sources:** none listed. No primary source with a working link was found.

### Parseval frames reconstruct directly

**Remember:** If taking coefficients preserves lengths, its adjoint puts the vector back.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.FA. Level 2: later undergraduate.

**Definition.** In a Hilbert space, the coefficients of a vector are its inner products with the family members. For a frame, the sum of their absolute squares lies between two fixed positive multiples of the squared norm. For a Parseval frame, this sum equals the squared norm.

**Problem.** Every vector is the norm-convergent sum of its Parseval frame coefficients times the corresponding frame vectors.

**How the definition helps.** The Parseval identity makes the coefficient map preserve lengths, so its adjoint recovers the vector. In our own proof, polarization expresses inner products through squared norms and shows that the coefficient map preserves inner products. Its adjoint sums the coefficients times the frame vectors. For general frames, reconstruction also requires inverting the operator obtained by taking coefficients and then summing.

**Paper or page:** [Hilbert space models and Blaschke frames](https://arxiv.org/abs/2510.18816v2). It says: “is a Parseval frame and the frame operator is the identity operator on ℋ.”

**Sources:** none listed. No primary source with a working link was found.

### Zero moments cancel polynomials

**Remember:** Cancel each power and every polynomial built from those powers disappears.

*Rules out counterexamples.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A compactly supported wavelet has M vanishing moments if its integral against each power of degree zero through M − 1 vanishes.

**Problem.** Every translate and dilation of this wavelet has zero integral against each polynomial of degree less than M.

**How the definition helps.** The moment conditions cancel each term of the polynomial after a change of variables. In our own proof, a shift and a nonzero change of scale preserve polynomial degree. Our own counterexample for M = 2 is the Haar wavelet. It equals one on \[0,½), minus one on \[½,1), and zero elsewhere. Its integral vanishes, but its integral against t equals −¼.

**Wikipedia:** [Wavelet](https://en.wikipedia.org/wiki/Wavelet). It says: “to be a continuous function with a higher number M of vanishing moments”

**Sources:** none listed. No primary source with a working link was found.

### Frequency plateaus give near-best approximation

**Remember:** Keep the low modes exactly while smoothing away the higher ones.

*True by definition. Confidence: medium.* MSC 42A10 (Trigonometric approximation), 42A24. arXiv math.CA. Level 3: graduate.

**Definition.** For an integer n ≥ 1, define the de la Vallée Poussin mean by averaging Fourier partial sums of orders n through 2n − 1. Each partial sum keeps the waves whose frequency indices have magnitude at most its order. A Fejér mean averages all partial sums starting at order zero.

**Problem.** For a continuous periodic function, the uniform error is at most four times the best uniform error among trigonometric polynomials of degree at most n.

**How the definition helps.** Starting the average at n makes every term reproduce all trigonometric polynomials of degree at most n in our own proof. Unlike a single Fourier partial sum, this average also has uniformly bounded norm. It equals twice the Fejér mean of order 2n − 1 minus the Fejér mean of order n − 1. Positivity and unit mass of the Fejér kernels give each mean norm one, hence the difference has norm at most three. Subtracting a best approximating polynomial now gives the error factor four.

**Paper or page:** [Weighted norm inequalities in Lebesgue spaces with Muckenhoupt weights and some applications to operators](https://arxiv.org/abs/1709.02928v5), [Weighted norm inequalities in Lebesgue spaces with Muckenhoupt weights and some applications to operators](https://arxiv.org/abs/1709.02928v5). It says: “Fₙ(f,·) := 1/(n+1){S₀(·,f)+S₁(·,f)+...+Sₙ(·,f)}”

**Sources:** none listed. No primary source with a working link was found.

### Wiener reciprocals retain summable coefficients

**Remember:** In the Wiener algebra, the only tests for invertibility are point evaluations.

*Makes the theorem clean to state or prove.* MSC 42A20 (Convergence and absolute convergence of Fourier and trigonometric series), 46J10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Wiener algebra consists of continuous functions on the circle whose Fourier coefficients are absolutely summable. Multiplication is pointwise, and the norm sums the absolute values of the coefficients. This norm makes the algebra complete.

**Problem.** A function in the Wiener algebra has its reciprocal in that algebra if it is nowhere zero on the circle.

**How the definition helps.** The algebra definition turns reciprocal closure into a test for invertibility. In our own explanation, a character is a nonzero multiplicative linear functional on the algebra. A general theorem for complete commutative normed algebras says that an element is invertible exactly when every character takes a nonzero value there. The circle coordinate and its inverse both have norm one, so each character sends the coordinate to a point on the circle. Finite Fourier sums are dense, and characters are continuous. Thus every character evaluates at its corresponding point.

**Wikipedia:** [Wiener algebra](https://en.wikipedia.org/wiki/Wiener_algebra). It says: “if f has absolutely convergent Fourier series and is never zero, then its reciprocal 1/f also has an absolutely convergent Fourier series.”

**Sources:**

- [N. Wiener, Tauberian Theorems (1932)](https://doi.org/10.2307/1968102)
- [D. J. Newman, Shorter Notes: A Simple Proof of Wiener’s 1/f Theorem (1975)](https://doi.org/10.2307/2040730)

### Adjoint synthesis inverts the short-time Fourier transform

**Remember:** The adjoint of an isometry is its left inverse.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42C20. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a window, a square-integrable function on the real line with norm one. Analysis multiplies the signal by each translated, conjugated window and takes the Fourier transform of each product. Define synthesis as the adjoint of analysis, so pairing a signal with synthesized data equals pairing its analysis with those data.

**Problem.** Synthesis with the same unit window recovers every square-integrable input from its short-time Fourier transform.

**How the definition helps.** With synthesis defined by the adjoint, our own proof reduces reconstruction to preservation of inner products. The short-time Fourier orthogonality theorem gives exactly that identity for a unit window. The usual reconstruction integral adds translated and frequency-shifted windows against the measured coefficients. Our own comparison pairs this integral with a test signal to identify it with the adjoint.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “Then we have for all f ∈ L²(ℝᵈ) f = 1/⟨g̃, g⟩ ∬ℝ²ᵈ Vg f(x, ω) Mω Tx g̃ d(x, ω).”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Extending by continuity defines the Fourier transform on all of L²

**Remember:** Define it where the integral converges, check it keeps L² norms, extend by continuity.

*Makes the theorem clean to state or prove.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 46E30. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Fourier transform on L²(ℝ) is the unique continuous extension to L² of the Fourier integral defined on L¹ ∩ L².

**Problem.** Plancherel's theorem: the Fourier transform is a unitary map of L²(ℝ) onto itself. This holds even though the Fourier integral of a general L² function need not converge.

**How the definition helps.** The definition never uses the integral where it diverges, so divergence causes no exceptions. For f in L² but not in L¹, the integral ∫ f(x) exp(−2πixξ) dx need not converge. Plancherel showed that on L¹ ∩ L² the transform preserves the L² norm, and L¹ ∩ L² is dense in L². So the transform extends uniquely to an isometry of L², and this extension is unitary; that it is onto needs the inversion formula (our own remark). So the theorem has no exception for functions with a divergent Fourier integral. Pointwise questions remain hard, such as almost-everywhere convergence of the inversion integral (Carleson); our own remark.

**Wikipedia:** [Plancherel theorem](https://en.wikipedia.org/wiki/Plancherel_theorem). It says: “In effect, this makes it possible to speak of Fourier transforms of L² functions.”

**Sources:**

- [Plancherel, M. (1910). Contribution à l'étude de la représentation d'une fonction arbitraire par des intégrales définies. Rendiconti del Circolo Matematico di Palermo 30(1), 289–335.](https://doi.org/10.1007/BF03014877)

### Interior support prevents Fourier aliasing

**Remember:** Keep support away from the seam to test nonperiodic waves.

*Rules out counterexamples. Confidence: medium.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a closed interval strictly inside (−½, ½) and consider finite positive measures supported there. The Fourier transform integrates the wave exp(−2πixξ) against the measure. At integer frequencies these waves take the same values at points one unit apart.

**Problem.** For positive finite measures with uniformly bounded masses and this support, convergence at integer frequencies implies convergence at every real frequency. If the endpoints are allowed, this fails.

**How the definition helps.** In our own corrected theorem the gap at the endpoints lets each real-frequency wave extend from the support to a continuous function of period one. Trigonometric polynomials approximate that extension uniformly. Their integrals converge by the integer-frequency hypothesis, and the common mass bound controls the approximation error. Alternating unit masses at −½ and ½ agree at every integer frequency but alternate between opposite values at frequency ½.

**Paper or page:** [Sharpness of the Mockenhaupt-Mitsis-Bak-Seeger Fourier restriction theorem in all dimensions](https://arxiv.org/abs/2505.19526v1). It says: “If (ν̂ₖ(s)) converges for each s ∈ ℤᵈ, then (ν̂ₖ(ξ)) converges for each ξ ∈ ℝᵈ.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier symbols give Laurent norms

**Remember:** The largest multiplier value gives the operator norm.

*True by definition.* MSC 42A45 (Multipliers in one variable harmonic analysis), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** For a continuous function m on the circle, define its Laurent operator on square-summable sequences indexed by the integers. Form the Fourier series, multiply by m, then take Fourier coefficients again. In sequence coordinates this amounts to convolution with the Fourier coefficients of m.

**Problem.** The operator norm on square-summable sequences equals the supremum of \|m\|.

**How the definition helps.** Our own proof uses Fourier coordinates to turn convolution into multiplication, whose norm is at most the maximum of \|m\|. Testing on indicators of short arcs near a maximum gives the reverse inequality. Parseval’s identity and completeness justify the change of coordinates.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “‖L(m)‖ₒₚ = ‖m‖∞”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Tapered cutoffs give integrable kernels

**Remember:** Taper the band edge to replace the nonintegrable sinc tail.

*Rules out counterexamples.* MSC 42A45 (Multipliers in one variable harmonic analysis), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** To form a Bochner–Riesz mean on the line, multiply the Fourier transform by a frequency cutoff and transform back. At frequency ξ the cutoff is the positive part of 1 − (ξ/R)² raised to the power δ, with R and δ positive.

**Problem.** These Bochner–Riesz means are uniformly bounded on L¹ as R varies. The sharp interval cutoff does not give a bounded L¹ operator.

**How the definition helps.** In our own proof, tapering the cutoff makes its inverse Fourier transform integrable. The Fourier decay estimate for that kernel carries the work. Changing R rescales the kernel without changing its integral norm, so convolution gives a uniform bound. An abrupt cutoff gives a multiple of sin(x)/x after rescaling. Testing on unit-mass bumps concentrating at zero would force this kernel to be integrable by Fatou’s lemma.

**Wikipedia:** [Bochner–Riesz mean](https://en.wikipedia.org/wiki/Bochner%E2%80%93Riesz_mean). It says: “may be written as convolution operators, where the convolution kernel is an approximate identity.”

**Sources:** none listed. No primary source with a working link was found.

### The Hilbert transform multiplier squares to minus one

**Remember:** Two quarter turns make a half turn and negate the function.

*True by definition.* MSC 42A50 (Conjugate functions, conjugate series, singular integrals), 42B10. arXiv math.CA. Level 3: graduate.

**Definition.** On square-integrable functions, define the Hilbert transform H by multiplying the Fourier transform by −i at positive frequencies and by i at negative frequencies. The value at frequency zero does not matter because a single point has measure zero. The usual integral definition uses the kernel 1/(πt) and takes a principal value, the limit with a symmetric gap around the singularity.

**Problem.** For every square-integrable u on the real line, H(H(u)) = −u. The inverse of H is therefore −H.

**How the definition helps.** The multiplier definition turns H applied twice into squaring either i or −i, both of which give −1. Our own comparison is with the principal value integral, where a second application brings in two singular kernels. The work moves into computing the Fourier transform of the principal value kernel to show that the two definitions agree.

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “The signal is negated; i.e., H(H(u)) = −u”

**Sources:**

- [M. Riesz (1928), Sur les fonctions conjuguées, Mathematische Zeitschrift](https://doi.org/10.1007/BF01171098)

### The Bohr compactification turns almost periodic means into Haar integrals

**Remember:** On a compact group, translation invariant integration gives the mean.

*True by definition. Confidence: medium.* MSC 42A75 (Classical almost periodic functions, mean periodic functions), 43A60, 28C10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** A function on ℝ is uniformly almost periodic if it is a uniform limit of finite sums of waves a·exp(iλx), with real λ. Equivalently, it is the restriction of a continuous function on the Bohr compactification bℝ. This is a compact group with a continuous homomorphism from ℝ whose image is dense.

**Problem.** For a uniformly almost periodic function, the averages over \[−T, T\] converge as T tends to infinity. Their limit is translation invariant and equals the integral of the extension to bℝ.

**How the definition helps.** The compactification lets us define the mean as an integral with respect to Haar probability measure, the translation invariant probability measure on bℝ (our own). Translation invariance then follows from the measure itself (our own). To compare with interval averages, first check a single wave (our own). Both the averages in the limit and the integral give 0 for λ ≠ 0 and 1 for λ = 0 (our own). Both operations have norm at most 1, so uniform approximation gives the equality for all these functions (our own). The work lies in the identification with continuous functions on bℝ and the existence of Haar measure.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “The space of uniform almost periodic functions on G can be identified with the space of all continuous functions on the Bohr compactification of G.”

**Sources:**

- [H. Bohr, Zur Theorie der fast periodischen Funktionen I, Acta Mathematica 45 (1925)](https://doi.org/10.1007/BF02395468)

### Uniform trigonometric approximation makes almost periodic functions an algebra

**Remember:** Uniform limits preserve the algebra operations on bounded functions.

*True by definition.* MSC 42A75 (Classical almost periodic functions, mean periodic functions), 43A60. arXiv math.CA. Level 3: graduate.

**Definition.** A function on ℝ is uniformly almost periodic when finite sums of waves a·exp(iλx), with real λ, approximate it uniformly. The other definition uses ε-almost periods, shifts T with \|f(t + T) − f(t)\| &lt; ε for every t. For every ε &gt; 0, it requires every interval of some fixed length to contain such a shift.

**Problem.** Sums, products and uniform limits of uniformly almost periodic functions remain uniformly almost periodic.

**How the definition helps.** The approximation definition makes this class the uniform closure of an algebra. Finite sums of waves are closed under sums and products because multiplying two waves adds their frequencies (our own). For bounded functions those operations pass to uniform limits (our own). With the shift definition, even proving closure under sums requires finding common almost periods (our own). The work moved to Bohr’s theorem that the approximation and shift definitions agree.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “Bohr (1925) defined the uniformly almost-periodic functions as the closure of the trigonometric polynomials with respect to the uniform norm”

**Sources:**

- [H. Bohr, Zur Theorie der fast periodischen Funktionen I, Acta Mathematica 45 (1925)](https://doi.org/10.1007/BF02395468)

### Continuity excludes Bochner counterexamples

**Remember:** Finite measures cannot transform into a spike at one point.

*Rules out counterexamples.* MSC 42A82 (Positive definite functions in one variable harmonic analysis), 43A35. arXiv math.FA. Level 3: graduate.

**Definition.** Require a positive definite function on ℝ to be continuous at zero. Positive definiteness alone only requires the matrices with entries f(xᵢ − xⱼ) to be positive semidefinite. A positive semidefinite matrix gives a nonnegative quadratic form.

**Problem.** A positive definite function on ℝ continuous at zero is the Fourier transform of a finite positive measure.

**How the definition helps.** Continuity at zero excludes the function equal to one at zero and zero elsewhere (our own). Grouping equal inputs shows that its test matrices have positive semidefinite all-ones blocks (our own). Every finite measure has a continuous transform by dominated convergence (our own). For positive definite functions, the matrix test gives \|f(x+h)−f(x)\|² ≤ 2f(0)(f(0)−Re f(h)), so continuity at zero suffices (our own). Bochner’s theorem then gives the measure.

**Wikipedia:** [Positive-definite function](https://en.wikipedia.org/wiki/Positive-definite_function). It says: “any continuous positive-definite function on the real line is the Fourier transform of a (positive) measure.”

**Sources:**

- [Salomon Bochner, Monotone Funktionen, Stieltjessche Integrale und harmonische Analyse (1933)](https://doi.org/10.1007/bf01452844)

### Alternation makes symplectic transforms involutive

**Remember:** Swapping the inputs negates the phase, so the forward kernel is the inverse.

*True by definition.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 3: graduate.

**Definition.** On ℝ²ᵈ use Lebesgue measure and replace the ordinary Fourier dot product by σ((x,ξ),(y,η)) = ξ·y − x·η. The symplectic Fourier transform integrates against exp(−2πiσ). Swapping the two arguments reverses the sign of σ.

**Problem.** Applying the symplectic Fourier transform twice gives the original function in square-integral norm.

**How the definition helps.** Swapping the arguments and conjugating the exponential leaves this kernel unchanged (our own). The inverse of a unitary integral transform uses that swapped, conjugated kernel (our own). Ordinary Plancherel and a rotation preserving Lebesgue measure give unitarity on square-integrable functions (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “The symplectic Fourier transform is unitary and involutive”

**Sources:** none listed. No primary source with a working link was found.

### Small tails force large supports

**Remember:** Small tails mean that cutting twice preserves most of the signal.

*Makes the theorem clean to state or prove.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 3: graduate.

**Definition.** A square-integrable signal is ε-concentrated on a measurable set if its norm outside the set is at most ε times its total norm. Use Lebesgue measure on ℝᵈ and the Fourier kernel exp(−2πix·ξ).

**Problem.** Take a unit signal with tail norm ε off T and Fourier tail norm δ off Ω. If ε + δ ≤ 1, then \|T\|\|Ω\| is at least (1 − ε − δ)².

**How the definition helps.** Concentration bounds the combined error of cutting in space and then in frequency by ε + δ (our own). Thus the twice-cut unit signal has norm at least 1 − ε − δ (our own). The restricted Fourier kernel has modulus one on Ω × T and vanishes elsewhere (our own). Cauchy–Schwarz bounds its operator norm by its square-integral norm, √(\|T\|\|Ω\|) (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “Let f ∈ L²(ℝᵈ) (not the zero-function) be εₜ-concentrated on T ⊂ ℝᵈ”

**Sources:**

- [David L. Donoho and Philip B. Stark, Uncertainty Principles and Signal Recovery (1989)](https://doi.org/10.1137/0149053)

### The Leray multiplier projects vector fields onto divergence-free fields

**Remember:** Remove the part of the vector that points along its frequency.

*True by definition.* MSC 42B15 (Multipliers for harmonic analysis in several variables), 35Q30, 76D05. arXiv math.AP. Level 3: graduate.

**Definition.** Define the Leray map P on square-integrable vector fields on ℝⁿ by multiplying their Fourier transforms by I − ξξᵀ/\|ξ\|² for ξ ≠ 0. Here I is the identity matrix, and ξξᵀ/\|ξ\|² projects onto the line through ξ. The usual Helmholtz description instead takes the divergence-free part of an orthogonal splitting into divergence-free fields and limits of gradients.

**Problem.** The Leray map is the orthogonal projection onto the fields with zero divergence. It sends ∇φ to zero for every smooth φ of compact support.

**How the definition helps.** The multiplier definition reduces this orthogonal splitting to projection in a finite-dimensional vector space, in our own proof. For each nonzero ξ, the matrix projects onto the vectors perpendicular to ξ. Fourier transformation turns divergence into a scalar multiple of the dot product with ξ, so these are exactly the vectors that give zero divergence. Fourier transforms of gradients are parallel to ξ, so the matrix sends gradients to zero. The work moves into Plancherel’s norm identity, which makes the pointwise orthogonal projection an orthogonal projection of square-integrable fields. This identifies the map with the Helmholtz projection.

**Wikipedia:** [Leray projection](https://en.wikipedia.org/wiki/Leray_projection). It says: “This definition must be understood in the sense of pseudo-differential operators: its matrix valued Fourier multiplier m(ξ) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Cube averages give singular-integral cancellation

**Remember:** Remove the cube average to leave a remainder with integral zero.

*True by definition.* MSC 42B20 (Singular and oscillatory integrals (Calderón-Zygmund, etc.)), 42B25. arXiv math.CA. Level 3: graduate.

**Definition.** For an integrable function f, select the largest cubes in a grid of successive bisections where the average of \|f\| exceeds a fixed positive threshold. On each selected cube replace f by its average. Define the remainder for that cube as the difference there and zero outside.

**Problem.** Each bad part has integral zero. Away from its cube, a singular integral can subtract the kernel value at the cube center without changing its output.

**How the definition helps.** Replacing f by its average makes each remainder integrate to zero in our own proof. Keeping the original function on the cube would generally leave a nonzero integral. For a point outside the cube, the kernel value at the cube center is constant in the integration variable. Subtracting it therefore leaves the integral against the remainder unchanged. The remaining work is to control the selected cubes and estimate the resulting kernel difference.

**Wikipedia:** [Calderón–Zygmund lemma](https://en.wikipedia.org/wiki/Calder%C3%B3n%E2%80%93Zygmund_lemma). It says: “has the beneficial property that its average value is zero on each of these cubes.”

**Paper or page:** [Twisted bilinear spherical maximal functions](https://arxiv.org/abs/2410.17583v1). It says: “∫ over Qᵢ,ᵧ hᵢ(x,y) dx = 0”

**Sources:**

- [Alberto P. Calderón and Antoni Zygmund, On the existence of certain singular integrals (1952)](https://doi.org/10.1007/bf02392130)

### Riesz transform multipliers recover second derivatives from the Laplacian

**Remember:** Two Riesz transforms recover a second derivative from the Laplacian, up to sign.

*True by definition. Confidence: medium.* MSC 42B20 (Singular and oscillatory integrals (Calderón-Zygmund, etc.)), 35J05. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Define the j-th Riesz transform Rⱼ on square-integrable functions on ℝⁿ by multiplying their Fourier transforms by −iξⱼ/\|ξ\| away from ξ = 0. The usual integral definition uses a kernel proportional to zⱼ divided by \|z\| to the power n + 1. It takes a principal value, the limit that excludes a shrinking ball around the singularity.

**Problem.** For every smooth, rapidly decreasing u, ∂ᵢ∂ⱼu = −RᵢRⱼΔu. The square-integral norm of ∂ᵢ∂ⱼu is at most that of Δu.

**How the definition helps.** The multiplier definition reduces the derivative identity to multiplying three scalar functions of ξ, in our own proof. With the Fourier kernel exp(−ix·ξ), both sides multiply by −ξᵢξⱼ. The multiplier of RᵢRⱼ has absolute value at most one, so Plancherel’s norm identity gives the bound. The work moves into matching the multipliers to the principal value kernels. Bounds with other integrability exponents require separate estimates for these singular integrals.

**Wikipedia:** [Riesz transform](https://en.wikipedia.org/wiki/Riesz_transform). It says: “The Riesz transforms are given by a Fourier multiplier.”

**Sources:**

- [A. P. Calderón and A. Zygmund (1952), On the existence of certain singular integrals, Acta Mathematica](https://doi.org/10.1007/BF02392130)

### Disjoint bands preserve energy

**Remember:** Every frequency contributes to exactly one squared term.

*True by definition.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** For a square-integrable function on ℝᵈ, use a Fourier transform that preserves the square-integral norm. Partition nonzero frequencies into rings with radii from 2ʲ inclusive to 2ʲ⁺¹ exclusive, for every integer j. Invert the transform separately on each ring, setting it to zero elsewhere. The square function is the square root of the sum of the squared magnitudes of these pieces.

**Problem.** The square-integral norm of this square function equals the square-integral norm of the original signal.

**How the definition helps.** Disjoint rings count each nonzero frequency exactly once when the squared norms are added (our own). Plancherel’s theorem identifies the squared norm of each piece with the integral of squared Fourier magnitude on its ring (our own). Integration commutes with the nonnegative sum, and the single omitted frequency has measure zero (our own). With overlapping smooth weights, the same identity requires their squared magnitudes to sum to one almost everywhere (our own).

**Wikipedia:** [Littlewood–Paley theory](https://en.wikipedia.org/wiki/Littlewood%E2%80%93Paley_theory). It says: “this gives a so-called "dyadic decomposition" of f”

**Sources:** none listed. No primary source with a working link was found.

### Dual weights preserve Muckenhoupt bounds

**Remember:** Swap the two weights and raise the old test to q/p.

*True by definition.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** Fix 1 &lt; p &lt; ∞ and let 1/p + 1/q = 1. A weight w is a positive, locally integrable function. Set v = w⁻ᑫ⁄ᵖ. The Muckenhoupt constant of w is the supremum over balls of average(w) times average(v) raised to p/q.

**Problem.** The weight w passes the test at p exactly when v passes at q. The best constant for v is the best constant for w raised to q/p.

**How the definition helps.** The ball test makes duality a swap of averages in our own proof. Raising each product to q/p gives the test at q for v because its dual weight is w. Taking suprema gives the formula for the best constants. The weighted maximal theorem identifies the ball test with boundedness of the operator taking the supremum of local averages on weighted Lᵖ.

**Wikipedia:** [Muckenhoupt weights](https://en.wikipedia.org/wiki/Muckenhoupt_weights). It says: “(1/\|B\| ∫ over B ω(x) dx)(1/\|B\| ∫ over B ω(x)⁻ᑫ⁄ᵖ dx)ᵖ⁄ᑫ ≤ C &lt; ∞”

**Sources:**

- [Benjamin Muckenhoupt, Weighted norm inequalities for the Hardy maximal function (1972)](https://doi.org/10.1090/S0002-9947-1972-0293384-6)

### Maximal control extends pointwise convergence

**Remember:** Control every error at once, then approximate by a dense class.

*Makes the theorem clean to state or prove.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** For a sequence of linear operators on integrable functions, form a maximal operator by taking the supremum of their absolute outputs at each point. A weak L¹ bound means the measure above each threshold λ &gt; 0 is at most C‖f‖₁/λ, with one constant C for every input.

**Problem.** Suppose the operators converge to their inputs almost everywhere on a dense subset of L¹. If the maximal operator has a weak L¹ bound, convergence holds almost everywhere on all of L¹.

**How the definition helps.** In our own proof the supremum controls the error from replacing the input by a nearby function for every operator at once. Choose a nearby input from the dense set where convergence holds. The weak bound controls the maximal output of their difference, and Markov’s inequality controls the difference itself. As the integral norm of the difference tends to zero, the measure of every set with persistent positive error vanishes.

**Paper or page:** [Bounded operators on Martingale Hardy spaces](https://arxiv.org/abs/2201.12134v3). It says: “then Tₙf → f, a.e. for every f ∈ L₁(Gₘ).”

**Sources:**

- [Bounded operators on Martingale Hardy spaces](https://arxiv.org/abs/2201.12134v3)

### Nested cubes give sharp bounds

**Remember:** Sum the largest cubes that still exceed the threshold.

*True by definition. Confidence: medium.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** Fix the grid of half-open dyadic cubes in Euclidean space, obtained at each scale by bisecting every side. At each point take the supremum of the averages of \|f\| over grid cubes containing it. This defines the dyadic maximal function.

**Problem.** For integrable f and λ &gt; 0, the volume where the dyadic maximal function exceeds λ is at most ‖f‖₁/λ. The constant one is sharp.

**How the definition helps.** In our own proof the grid replaces the covering estimate for arbitrary cubes because two grid cubes that meet are nested. For integrable f, averages over sufficiently large cubes fall below any fixed positive threshold. The largest cubes exceeding that threshold therefore cover the exceptional set without overlap. Summing their integrals gives the bound with constant one. The indicator of one grid cube shows sharpness as the threshold approaches one from below.

**Paper or page:** [Muckenhoupt-type weights and the intrinsic structure in Bessel Setting](https://arxiv.org/abs/2304.07986v3), [An alternative approach to sharp L¹ estimates for the dyadic maximal operator](https://arxiv.org/abs/2104.03585v2). It says: “The dyadic maximal function is of weak (1,1)”

**Sources:** none listed. No primary source with a working link was found.

### The Muckenhoupt condition is exactly what weighted maximal function bounds need

**Remember:** Test the maximal inequality on one cube and you get Aₚ.

*Makes the theorem clean to state or prove.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A weight is a positive locally integrable function w. Let a(Q) be the average of w over a cube Q, and let b(Q) be the average of w to the power −1/(p − 1). For 1 &lt; p &lt; ∞, w is in Aₚ if a(Q) times b(Q) to the power p − 1 is bounded over all cubes. The class A₁ asks that a(Q) ≤ C w(x) for almost every x in Q.

**Problem.** The Hardy–Littlewood maximal operator M sends f to the largest average of \|f\| over cubes that contain the point. A weak type (p, p) bound says that the set where Mf &gt; λ has w-measure at most C/λᵖ times ∫\|f\|ᵖ w. The theorem says that M has this bound exactly when w is in Aₚ.

**How the definition helps.** The Aₚ condition comes from testing the maximal inequality on one function that lives on one cube. So it is necessary almost by construction (our own remark). The theorem says that this one-cube test is also enough, so a hard inequality becomes a simple condition on averages. The condition sorts even simple weights. For p &gt; 1, the power weight \|x\|ᵃ on ℝⁿ is in Aₚ exactly when −n &lt; a &lt; n(p − 1) (our own remark). For the weak bound, sufficiency follows from Hölder's inequality and a covering lemma (our own remark). For p &gt; 1, Muckenhoupt also proved the strong bound, which needs more work.

**Paper or page:** [Weighted weak (1,1) estimate for non-commutative square function](https://arxiv.org/abs/2410.00987v3). It says: “For 1≤p&lt;∞, the weak type (p,p) inequality … is true if and only if w satisfies the Muckenhoupt's Aₚ condition.”

**Sources:**

- [Weighted weak (1,1) estimate for non-commutative square function, arXiv:2410.00987 (2024)](https://arxiv.org/abs/2410.00987v3)
- [B. Muckenhoupt, Weighted norm inequalities for the Hardy maximal function, Trans. Amer. Math. Soc. 165 (1972), p. 207](https://doi.org/10.1090/s0002-9947-1972-0293384-6)

### Atom cancellation makes Hilbert transforms integrable

**Remember:** Zero mean cancels the nonintegrable tail.

*Rules out counterexamples.* MSC 42B30 (\\(H<sup>p\\</sup>)-spaces), 42A50. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** An atom is supported on an interval I, has absolute value at most 1/\|I\|, and has integral zero. Here \|I\| is the interval length. The atomic Hardy space H¹ consists of sums of atoms with absolutely summable coefficients. Its norm is the infimum of the coefficient sums in absolute value over all such representations.

**Problem.** The Hilbert transform uses the kernel 1/(πx), omitting a symmetric interval around its singularity and taking a limit. It maps H¹ boundedly into the integrable functions on the line.

**How the definition helps.** The zero integral lets us subtract a constant from the kernel when testing it against an atom. In our own proof, this improves decay far from the interval from inverse distance to inverse distance squared. The square-integrable bound handles points near the interval. Together these bounds give a uniform integral estimate per atom, which absolute summability extends to the whole space. Our own counterexample is the indicator of \[0,1\], whose transform decays only like 1/\|x\|. The atomic decomposition theorem identifies this space with the Hardy space defined using maximal averages.

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “When 0 &lt; p ≤ 1, any element f of Hᵖ has an atomic decomposition as a convergent infinite combination of Hᵖ-atoms,”

**Sources:** none listed. No primary source with a working link was found.

### Hardy atoms force zero mean

**Remember:** Mean zero survives any sum that converges in the integral norm.

*Rules out counterexamples.* MSC 42B30 (\\(H<sup>p\\</sup>)-spaces). arXiv math.CA. Level 3: graduate.

**Definition.** A real Hardy space atom vanishes outside a ball in Euclidean space and has integral zero. Its magnitude is at most one divided by the ball’s volume. Define H¹ by sums of atoms with absolutely summable coefficients, taking limits in the integral norm.

**Problem.** Every function in real H¹ on Euclidean space has integral zero. The indicator of the unit ball is integrable but is not in H¹.

**How the definition helps.** In our own proof the atomic definition builds zero integral into every summand. Each atom has integral norm at most one, so the series converges in that norm and integration preserves the limit. The atomic decomposition theorem identifies this space with the usual definition using the supremum of smoothed values across scales.

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “any element f of Hᵖ has an atomic decomposition as a convergent infinite combination of Hᵖ-atoms”

**Sources:**

- [Robert Latter, A characterization of Hᵖ(ℝⁿ) in terms of atoms (1978)](https://doi.org/10.4064/sm-62-1-93-101)

### Adjacent averages detect hidden oscillation

**Remember:** Two neighboring grid intervals catch what one grid interval misses.

*Rules out counterexamples.* MSC 42B35 (Function spaces arising in harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** For a locally integrable function, bounded mean oscillation means that its average absolute deviation from its mean stays uniformly bounded over all bounded intervals. The dyadic test uses only intervals \[k2ʲ,(k+1)2ʲ) for integers j and k. Also bound the difference of the means on any adjacent grid intervals of equal length.

**Problem.** On ℝ, the dyadic deviation bound together with the adjacent mean bound implies bounded mean oscillation over all intervals.

**How the definition helps.** The adjacent mean bound controls the gap when an interval crosses a grid boundary (our own). Choose the smallest grid length at least as long as the interval, then cover it by two neighboring grid intervals (our own). Their combined length is at most four times the original length (our own). Compare with the mean on the first grid interval, using both bounds, then with the original interval’s mean (our own). The function equal to log x for x &gt; 0 and zero elsewhere passes the dyadic test. Its means on opposite sides of zero differ without bound as the intervals shrink (our own).

**Wikipedia:** [Bounded mean oscillation](https://en.wikipedia.org/wiki/Bounded_mean_oscillation). It says: “is a function that is in dyadic BMO but not in BMO.”

**Sources:**

- [Fritz John and Louis Nirenberg, On functions of bounded mean oscillation (1961)](https://doi.org/10.1002/cpa.3160140317)

### Defining polynomials by orthogonality makes the three-term recurrence a short argument

**Remember:** Move the factor x across the inner product to the lower degree side.

*True by definition. Confidence: medium.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a positive measure on the real line with infinite support and finite moments. Define pₙ as the monic polynomial of degree n that is orthogonal to all polynomials of lower degree. Monic means the leading coefficient is one. The alternative builds pₙ₊₁ as (x − bₙ)pₙ − aₙpₙ₋₁, with constants bₙ and aₙ &gt; 0.

**Problem.** For these monic orthogonal polynomials, x·pₙ = pₙ₊₁ + bₙpₙ + aₙpₙ₋₁ with constants bₙ and aₙ &gt; 0, where p₋₁ = 0.

**How the definition helps.** With orthogonality as the definition, multiplication by x moves across the inner product. So the inner product of x·pₙ with pₖ equals that of pₙ with x·pₖ, which is zero when k + 1 &lt; n. Hence only three terms of the expansion of x·pₙ survive. With the recurrence as the definition, the recurrence is free but orthogonality is hard. That converse is Favard’s theorem, which Wikipedia names; it builds a positive measure from the recurrence. The proof steps are our own.

**Wikipedia:** [Orthogonal polynomials](https://en.wikipedia.org/wiki/Orthogonal_polynomials). It says: “These recurrence relations are key for deriving properties of orthogonal polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi matrices supply orthogonality measures

**Remember:** The recurrence carries the first coordinate to every other coordinate.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 47B36. arXiv math.CA. Level 3: graduate.

**Definition.** Take a self-adjoint operator J on square-summable sequences whose matrix has three diagonals and positive entries just above and below the main diagonal. Its spectral measure at the first coordinate vector e assigns each set the squared length of the spectral projection of e onto that set.

**Problem.** Start the three-term polynomial recurrence from the rows of J with constant polynomial one. Its polynomials form an orthonormal basis for square-integrable functions of the spectral measure.

**How the definition helps.** The spectral measure turns integrals of polynomial products into inner products of vectors, without guessing an integration weight. In our own argument, applying the successive recurrence polynomials of J to e gives the successive coordinate vectors. They form an orthonormal basis. The work lies in choosing a self-adjoint realization and applying the spectral theorem to this basis.

**Paper or page:** [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1). It says: “The polynomials Pₙ(λ) are orthogonal and normalized in the spaces L²(ℝ; dρ<sub>J</sub>)”

**Sources:**

- [D. R. Yafaev. Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1)

### Matched weights simplify Hilbert recurrences

**Remember:** Match the weights so orthogonality erases every positive-degree mean.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 45E05. arXiv math.CA, math.NA. Level 3: graduate.

**Definition.** On \[−1,1\], form orthonormal polynomials for a weight w given by powers of the two endpoint distances, both exponents greater than −1. At an interior point t, integrate each polynomial against w(x)/(x − t). Take the limit after excluding equal lengths on both sides of t.

**Problem.** From degree one onward, the transformed polynomials follow the same homogeneous three-term recurrence as the original polynomials.

**How the definition helps.** Matching the weights makes the extra term in the transformed recurrence vanish for every positive degree. The paper gives this term as a constant times the weighted integral of the polynomial. Our own observation is that this integral vanishes by orthogonality to constants. An independently chosen transform weight need not cancel the term.

**Paper or page:** [Filtered integration rules for finite Hilbert transforms](https://arxiv.org/abs/2109.10634v1). It says: “satisfy the following three-term recurrence relation”

**Sources:**

- [D. Occorsio, M. G. Russo, W. Themistoclakis. Filtered integration rules for finite Hilbert transforms](https://arxiv.org/abs/2109.10634v1)

### Positive weights force simple roots

**Remember:** Multiply by the factors at sign changes and use positivity.

*Rules out counterexamples.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** Take a positive measure on the real line with infinite support and finite integrals of all absolute powers. The support consists of points whose every neighborhood has positive measure. A monic real polynomial P of degree n is orthogonal if the integral of PQ vanishes for every polynomial Q of smaller degree.

**Problem.** P has n distinct simple roots in the interior of the smallest interval containing the support.

**How the definition helps.** In our own proof, positivity makes a polynomial of constant sign have nonzero integral unless it vanishes throughout the support. Form Q by multiplying one linear factor for each interior root where P changes sign. Then PQ has constant sign throughout the interval and vanishes at only finitely many points. If Q had degree below n, orthogonality would force its product with P to have zero integral. Thus P has n sign changes and every root is simple. In our own example, weights 1, −4, 1 at −1, 0, 1 make x² + 1 orthogonal to both 1 and x.

**Wikipedia:** [Orthogonal polynomials](https://en.wikipedia.org/wiki/Orthogonal_polynomials). It says: “If the measure dα is supported on an interval \[a,b\], all the zeros of Pₙ lie in \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Raising operators give Fourier eigenfunctions

**Remember:** Each raising step multiplies the Fourier eigenvalue by −i.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** Start with the Gaussian x ↦ exp(−πx²). Repeatedly apply the raising operator h ↦ xh − h′/(2π) to obtain successive Hermite functions up to constant factors. Another definition multiplies the Gaussian by polynomials orthogonal for its squared weight.

**Problem.** With exponential kernel exp(−2πixξ), the Hermite function of degree n has Fourier eigenvalue (−i)ⁿ.

**How the definition helps.** The Fourier transform moves past the raising operator at the cost of a factor −i (our own). The Gaussian transforms to itself, so induction gives the eigenvalues (our own). The Gaussian transform formula and the rules for Fourier transforms of multiplication and differentiation do the work (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “The Hermite functions are eigenfunctions of the Fourier transform”

**Sources:** none listed. No primary source with a working link was found.

### Defining Walsh functions as group characters makes their orthogonality automatic

**Remember:** Translate by a bit that flips the sign of the product.

*True by definition. Confidence: medium.* MSC 42C10 (Fourier series in special orthogonal functions (Legendre polynomials, Walsh functions, etc.)), 43A40. arXiv math.CA. Level 3: graduate.

**Definition.** Let 𝔻 be the group of infinite binary sequences under digitwise addition modulo two, with the product of fair coin measures. Define the Walsh functions as the continuous characters of 𝔻. A character is a homomorphism to the complex numbers of absolute value one. The usual definition on \[0, 1) multiplies Rademacher functions, square waves that equal +1 or −1 according to one binary digit.

**Problem.** Distinct Walsh functions are orthogonal for uniform measure on \[0, 1).

**How the definition helps.** Characters of a compact group are orthogonal by a general translation argument. If χ ≠ ψ, then χψ̄ is a nontrivial character, so some translation multiplies it by a number other than one. The measure does not change under translation, so the integral of χψ̄ is zero. On \[0, 1), the usual proof instead uses the independence of binary digits. The work moves to the identification that Wikipedia describes. The binary expansion carries the product measure to the uniform measure, and it fails to be one-to-one only on a set of measure zero. The translation argument is our own.

**Wikipedia:** [Walsh function](https://en.wikipedia.org/wiki/Walsh_function). It says: “Elements of 𝔻̂ are readily identified with Walsh functions.”

**Sources:** none listed. No primary source with a working link was found.

### Canonical duals keep Gabor shifts

**Remember:** The inverse frame operator commutes with every lattice shift.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.FA. Level 3: graduate.

**Definition.** Translate one window and shift its frequency using a regular grid of time and frequency parameters. These functions form a Gabor frame if their squared coefficient magnitudes sum to between fixed positive multiples of each signal’s squared norm. The frame operator takes inner products with the frame vectors and sums those coefficients times the same vectors. Applying its inverse to each vector gives the canonical dual.

**Problem.** The canonical dual of a lattice Gabor frame is another Gabor frame on the same lattice.

**How the definition helps.** Choosing the inverse frame operator gives the dual window directly from the original window. In our own proof, each grid shift permutes the frame vectors up to complex factors of magnitude one. Those factors cancel in the frame operator, so both it and its inverse commute with every grid shift. Frame bounds guarantee the inverse exists. This avoids solving separate reconstruction equations for an unknown dual window.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “there exists a dual window g̃ ∈ L²(ℝᵈ) such that the canonical dual frame of 𝒢(g, ℒ) is 𝒢(g̃, ℒ).”

**Sources:** none listed. No primary source with a working link was found.

### Real phase retrieval works exactly when every split leaves a spanning part

**Remember:** Split measurements by sign agreement and let the spanning side settle the answer.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 94A12. arXiv cs.LG, math.FA. Level 3: graduate.

**Definition.** A real measurement family has the complement property if every split into two parts leaves at least one part spanning the whole space. Phase retrieval asks whether absolute inner products determine a vector up to its overall sign.

**Problem.** A finite real measurement family recovers every vector up to sign exactly when it has the complement property.

**How the definition helps.** The complement property prevents two different vectors from agreeing in magnitude without agreeing up to sign. Our own proof sketch splits measurements by whether the inner products agree or are opposite. If neither part spans, our own counterexample construction adds and subtracts nonzero vectors orthogonal to the two parts.

**Paper or page:** [Optimal lower Lipschitz bounds for ReLU layers, saturation, and phase retrieval](https://arxiv.org/abs/2502.09898v1). It says: “For any J ⊆ I, either (φᵢ)ᵢ∈J or (φᵢ)ᵢ∈Jᶜ is a frame for ℝⁿ.”

**Sources:**

- [Daniel Freeman, Daniel Haider, Optimal lower Lipschitz bounds for ReLU layers, saturation, and phase retrieval, arXiv:2502.09898v1 (2025)](https://arxiv.org/abs/2502.09898v1)
- [Radu Balan, Pete Casazza, Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3), 345–356 (2006)](https://doi.org/10.1016/j.acha.2005.07.001)

### Short windows flatten spectral energy

**Remember:** Nonoverlapping window translates kill the nonconstant Fourier coefficients.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** Let g be a square-integrable function on the line and P a positive frequency spacing. Use Fourier waves exp(−2πixξ). Define periodized spectral energy at y by summing \|ĝ(y + nP)\|² over all integers n. Require g to vanish outside an interval of length at most 1/P.

**Problem.** The periodized energy equals ‖g‖₂²/P almost everywhere. This can fail for longer windows.

**How the definition helps.** In our own proof the support length prevents overlap with any translate by a nonzero integer multiple of 1/P, apart from endpoints. By Plancherel, the Fourier coefficients of the periodized energy are the corresponding inner products divided by P. Only the constant coefficient survives, and Fourier uniqueness gives the identity. For P = 1, the indicator of \[0,2\] overlaps its translate by one, giving our own counterexample.

**Paper or page:** [Frequency-dependent stability for Gabor frames](https://arxiv.org/abs/2410.01681v2). It says: “∑ₙ \|ĝ(y + Pn)\|² = (1/P) ‖g‖₂².”

**Sources:**

- [Frequency-dependent stability for Gabor frames](https://arxiv.org/abs/2410.01681v2)

### Zak zeros prevent Gabor frames

**Remember:** At critical spacing, a Zak zero kills the lower bound.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42C40. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** Start with a square-integrable window g on the line. Translate it by integers and multiply by exponentials exp(2πint) for integer n. These functions form a Gabor frame if their squared coefficient magnitudes sum to between fixed positive multiples of each signal’s squared norm. The Zak transform takes the Fourier series of the sequence g(x − k) over integers k.

**Problem.** On the integer time and frequency lattice, a continuous Zak transform with a zero cannot give a Gabor frame. In particular, a Gaussian window fails on this lattice.

**How the definition helps.** The Zak transform turns the frame test into upper and lower bounds on the magnitude of one function. The cited criterion requires these bounds almost everywhere. In our own explanation, continuity makes that magnitude arbitrarily small on neighborhoods of positive area around a zero. The criterion uses the norm-preserving Zak transform and the Fourier basis on the unit square. For the Gaussian, terms indexed by k and 1 − k cancel at (½,½) in our own example.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “0 &lt; a ≤ \|Zg(x,ω)\| ≤ b &lt; ∞”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility gives wavelet reconstruction

**Remember:** An admissible wavelet gives every nonzero frequency the same total weight.

*Rules out counterexamples.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** Let ψ be a nonzero real square-integrable function on the line, and let ψ̂ denote its Fourier transform. Call ψ admissible if the integral of \|ψ̂(ω)\|²/\|ω\| over the line is finite.

**Problem.** Take inner products with translated, positively dilated copies of ψ, normalized to preserve their norms. Weight translation b and scale a by db da/a². For admissible ψ, the adjoint of this coefficient map recovers the signal up to a fixed positive factor.

**How the definition helps.** Admissibility gives each nonzero frequency the same finite weight when all positive scales are combined. In our own proof, Plancherel’s theorem preserves squared norms under the Fourier transform in the translation variable. Changing scale gives one half of the admissibility integral because ψ is real. The resulting norm identity gives reconstruction by the adjoint. Our own counterexample is a Gaussian, whose Fourier transform stays positive near zero, making the integral diverge.

**Wikipedia:** [Continuous wavelet transform](https://en.wikipedia.org/wiki/Continuous_wavelet_transform). It says: “A wavelet whose admissible constant satisfies \\(0&lt;C\_\\psi&lt;\\infty\\) is called an admissible wavelet.”

**Sources:**

- [A. Grossmann and J. Morlet, Decomposition of Hardy Functions into Square Integrable Wavelets of Constant Shape (1984)](https://doi.org/10.1137/0515056)

### Orthogonal details build wavelet bases

**Remember:** Each detail space contains exactly what the coarser space missed.

*True by definition.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** In a multiresolution analysis, nested closed spaces describe successively finer approximations. Their union is dense and their intersection contains only zero. The detail space at each scale contains the vectors in the next finer space perpendicular to the entire coarse space.

**Problem.** Putting together orthonormal bases of all detail spaces gives an orthonormal basis of the full space.

**How the definition helps.** Choosing orthogonal differences makes bases from different scales automatically perpendicular. In our own proof, splitting each fine space into its coarse and detail parts gives the decomposition across finitely many scales. Convergence of the projections at both ends gives completeness. Constructing wavelets that span each detail space still requires a separate argument.

**Paper or page:** [A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets](https://arxiv.org/abs/2405.04220v1). It says: “forms an orthonormal basis of L²(G).”

**Sources:**

- [S. G. Mallat, A theory for multiresolution signal decomposition: the wavelet representation (1989)](https://doi.org/10.1109/34.192463)

### Smoothing counts approximate additive relations

**Remember:** A short interval cannot distinguish nearly equal sums.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 42A05 (Trigonometric polynomials, inequalities, extremal problems), 11B30. arXiv math.CA, math.NT. Level 4: research.

**Definition.** Let W be a finite set of real times and let η &gt; 0. Its additive energy at scale η counts ordered quadruples in W with \|a+b−c−d\| ≤ η. Unlike exact additive energy, this count includes nearly equal sums.

**Problem.** Put P(v) = ∑ exp(iav), summing over a in W. On any interval of length H &gt; 0, the integral of \|P(v)\|⁴ is at most CH times the energy at scale 1/H. The constant C is absolute.

**How the definition helps.** The tolerance counts exactly the frequency differences that a suitably chosen weight can retain. Our own proof bounds the interval indicator by a translated and scaled multiple of (sin x/x)². Its Fourier transform vanishes outside \[−1/H,1/H\] and has magnitude at most CH. Expanding the fourth power now gives the bound by counting ordered quadruples. The cited paper uses a related energy estimate for large values of Dirichlet polynomials.

**Paper or page:** [New large value estimates for Dirichlet polynomials](https://arxiv.org/abs/2405.20552). It says: “\|R(v)\|⁴ dv ⪅ E(W).”

**Sources:**

- [Larry Guth, James Maynard, New large value estimates for Dirichlet polynomials](https://arxiv.org/abs/2405.20552)

### Fourier decay gives positive-volume sumsets

**Remember:** Two copies of the Fourier decay give a square-integrable convolution transform.

*Rules out counterexamples. Confidence: medium.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 28A80. arXiv math.CA. Level 4: research.

**Definition.** The Fourier dimension of a compact subset of the line is the supremum of exponents s in \[0,1\] satisfying this test. Some probability measure supported on the set has Fourier transform bounded in magnitude by C times (1 + \|ξ\|) raised to −s/2.

**Problem.** If a compact set has Fourier dimension greater than one half, the set of all sums of two of its points has positive length.

**How the definition helps.** In our own proof the definition supplies enough decay for the fourth power of the transform to be integrable. The distribution of the sum of two independent samples has Fourier transform equal to the square of the original transform. Plancherel’s theorem therefore gives this sum a square-integrable density. Its support must have positive length because the density has integral one. Our own counterexample for Hausdorff dimension, which measures size by covers at small scales, uses base-nine digits zero through three. Its dimension is log(4)/log(9), yet sums use only seven digits and lie in a set of length zero.

**Paper or page:** [Fourier Dimension and Translation Invariant Linear Equations](https://arxiv.org/abs/2411.06302v1). It says: “Let E ⊂ \[0,1\] be a closed set and μ be a probability measure supported on E satisfying \|μ̂(ξ)\| ≤ C (1+\|ξ\|)⁻ᵝ for some finite positive constant C and β &gt; 1/4.”

**Sources:** none listed. No primary source with a working link was found.

### Tile counts give lattice spectra

**Remember:** Count translates on one cell, then read the count through Fourier coefficients.

*Makes the theorem clean to state or prove.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42B05. arXiv math.CA. Level 4: research.

**Definition.** A full-rank lattice consists of the integer combinations of a basis of Euclidean space. Its dual consists of frequencies whose exponential waves have every lattice vector as a period. The dual is a spectrum for a set when these waves form an orthogonal basis for square-integrable functions there. The set tiles by the lattice when its translates cover almost every point exactly once.

**Problem.** A measurable set of finite positive volume tiles by a lattice exactly when its dual lattice is a spectrum.

**How the definition helps.** Our own proof uses the dual frequencies because they read the overlap count on one lattice cell as a Fourier series. Orthogonality makes every nonconstant coefficient vanish, so the count is constant almost everywhere. Completeness rules out multiple coverage because periodic waves take identical values on overlapping copies. Conversely, a tile gives one representative per point of the cell almost everywhere, so the cell’s Fourier basis transfers to the tile.

**Paper or page:** [Orthogonal Fourier Analysis on Domains](https://arxiv.org/abs/2408.15361v3). It says: “Then E tiles ℝᵈ when translated by the lattice L if and only if the dual lattice L\* of L is a spectrum of E.”

**Sources:**

- [Bent Fuglede, Commuting self-adjoint partial differential operators and a group theoretic problem (1974)](https://doi.org/10.1016/0022-1236(74)90072-x)

### Weak porosity is exactly what makes a distance weight an A₁ weight

**Remember:** Enough room in the holes, and the distance weight stays averaged.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 42B25 (Maximal functions, Littlewood-Paley theory), 28A75. arXiv math.CA. Level 4: research.

**Definition.** A weight w is in the Muckenhoupt class A₁ when the Hardy–Littlewood maximal function of w is at most a constant times w almost everywhere. A set E is porous when every ball contains a hole, a ball that misses E, with a fixed fraction of its radius. Weak porosity is a weaker condition on the holes of E inside each ball. Our own summary, unchecked in the data, is that holes not much smaller than the largest one must fill a fixed fraction of the ball.

**Problem.** For which nonempty sets E ≠ ℝⁿ is the weight dist(x,E)⁻ᵅ in A₁ for some α &gt; 0? Such weights matter because the maximal operator and singular integrals are bounded on the weighted spaces.

**How the definition helps.** Weak porosity asks for exactly as much empty space as the A₁ averages need, so the answer is one equivalence; this reading is our own. Our own summary of the history is that porous sets were known to give A₁ distance weights, but porosity is not necessary. The paper also measures the best exponent α by a number it calls the Muckenhoupt exponent of E. Our own remark is that the proof still takes real work with cube decompositions. The abstract gives a set E in ℝ that is not weakly porous. For each 0 &lt; α &lt; 1, its weight is in every Aₚ with p &gt; 1 but not in A₁. So for the classes Aₚ with p &gt; 1, weak porosity is not the right condition.

**Paper or page:** [Weakly porous sets and Muckenhoupt Aₚ distance functions](https://arxiv.org/abs/2209.06284v2). It says: “As our first main result we show that the distance weight w(x)=dist(x,E)⁻ᵅ belongs to the Muckenhoupt class A₁, for some α&gt;0, if and only if E⊂ℝⁿ is weakly porous.”

**Sources:**

- [Theresa C. Anderson, Juha Lehrbäck, Carlos Mudarra, Antti V. Vähäkangas, Weakly porous sets and Muckenhoupt Aₚ distance functions, arXiv:2209.06284 (2022)](https://arxiv.org/abs/2209.06284v2)

### Gaussian modulation norms survive Fourier transformation

**Remember:** Fourier rotation preserves a common exponent and a self-transforming window.

*True by definition.* MSC 42B35 (Function spaces arising in harmonic analysis), 42A38. arXiv math.CA. Level 4: research.

**Definition.** Use the Fourier transform with waves exp(−2πix·ξ), and take the window g(x) = exp(−π\|x\|²). Multiply the signal by each translated window and take the Fourier transform of each product. Define the modulation norm as one Lᵖ norm over all positions and frequencies together.

**Problem.** Fourier transformation preserves this norm for 1 ≤ p ≤ ∞ on Schwartz functions. These smooth functions and all their derivatives decay faster than every inverse power.

**How the definition helps.** Our own proof uses a Gaussian because Fourier transformation leaves this window unchanged. The cited transform identity exchanges position and frequency, reverses one sign, and introduces a factor of magnitude one. Our own calculation now uses invariance of one integral norm under that change of variables. With separate position and frequency exponents, exchanging the axes need not preserve the norm.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “If p = q, then Mᵖ˒ᑫ(ℝᵈ) is invariant under the Fourier transform.”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Irrational angles determine signals up to phase

**Remember:** Two reflections make a rotation, and an irrational rotation is dense.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42A38. arXiv math.CA. Level 4: research.

**Definition.** For a signal on the line, multiply by a translate of the Gaussian exp(−πx²) and take the Fourier transform with waves exp(−2πixξ). Record the magnitude on two lines in the position and frequency plane. Take the horizontal axis as the first line and choose the second at an irrational multiple of π.

**Problem.** Two square-integrable signals with identical measurements differ only by a constant factor of magnitude one. This can fail at rational multiples of π.

**How the definition helps.** In our own proof, reflecting across the two measurement lines gives a rotation whose powers are dense among all rotations. The Bargmann transform represents each signal by a function analytic on the complex plane and converts the measurements to magnitudes with a known factor. If either transform vanishes identically, agreement on a line forces both to vanish. Otherwise reflection across either line sends the quotient of the transforms to its conjugate reciprocal, wherever defined. Composing the reflections leaves the quotient invariant, forcing it to be constant with magnitude one. At angle π/m for a positive integer m, the polynomials zᵐ + i and zᵐ − i give our own counterexample through the Bargmann correspondence.

**Paper or page:** [Phase retrieval of entire functions and its implications for Gabor phase retrieval](https://arxiv.org/abs/2202.03733v5). It says: “Then, there exists an α ∈ ℝ such that f = eⁱᵅ g.”

**Sources:**

- [Phase retrieval of entire functions and its implications for Gabor phase retrieval](https://arxiv.org/abs/2202.03733v5)

### Metaplectic operators preserve Gabor frame bounds

**Remember:** Transform the window and the grid together to keep the bounds.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.CA. Level 4: research.

**Definition.** A Gabor frame measures a signal by pairing it with translated and frequency-shifted copies of a window on a grid. Frame bounds compare the sum of squared measurements with the squared signal norm from above and below. A symplectic map is a linear change of position and frequency that preserves the pairing x·η − y·ξ of points (x,ξ) and (y,η). A metaplectic operator implements such a map by carrying each window shift to the corresponding transformed shift, up to phase.

**Problem.** Applying a metaplectic operator to the window and its symplectic map to the grid preserves both frame bounds.

**How the definition helps.** Our own proof uses the defining shift identity to identify every new frame vector with a unitary image, up to phase. Taking absolute values removes the phase. Moving the unitary operator across the inner product then gives the old bounds for a signal of equal norm. The construction of a unitary implementing each symplectic map carries the work. This avoids estimating the transformed measurements one by one.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “In this case, both systems possess the same frame bounds.”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Frequency tiles give wavelet bases

**Remember:** Scaling partitions the frequencies and folding supplies a basis within each tile.

*Makes the theorem clean to state or prove.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems), 43A70. arXiv math.CA, math.FA. Level 4: research.

**Definition.** On a Vilenkin group, digit strings add without carries. Choose one frequency set for each nonzero digit and take its indicator’s inverse Fourier transform as a wavelet. All digit shifts of all the sets together must cover frequency space once, except on a set of measure zero. Each individual set must also split into pieces that discrete digit translations rearrange into the standard frequency cell.

**Problem.** The frequency sets satisfy these two conditions exactly when the associated wavelet translates and dilates form an orthonormal basis.

**How the definition helps.** The tiling description separates orthogonality between scales from completeness within each frequency set. In our own explanation, shifting digit positions changes scale, and disjoint sets give perpendicular functions. Rearranging each set into one cell transfers the cell’s orthonormal basis of group characters, the homomorphisms to the unit circle. Plancherel’s theorem transfers the basis back to the original group. The cited characterization proves the converse as well.

**Paper or page:** [A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets](https://arxiv.org/abs/2405.04220v1). It says: “Then Ω is a wavelet set if and only if both of the following conditions hold true:”

**Sources:**

- [J. Liu and C. Zhang, A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets (2024)](https://arxiv.org/abs/2405.04220v1)

### Matching grids cancel wavelet moments

**Remember:** Matching moments cancel when the fine grid subtracts the coarse grid.

*True by definition.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems), 41A10. arXiv math.NA. Level 4: research.

**Definition.** Start with n coarse Chebyshev nodes, the cosine images of equally spaced angle midpoints in \[0, π\]. The corresponding grid of 3n nodes includes every coarse node. At each new node, start with its fine-grid basis polynomial and subtract a linear combination of fine-grid basis polynomials at the coarse nodes. Use as coefficients the coarse interpolation basis evaluated at that new node.

**Problem.** Fix an integer filter width m with 1 ≤ m &lt; n. Every resulting polynomial has zero integral against each monomial through degree n − m with weight 1/√(1 − x²) on (−1, 1).

**How the definition helps.** Subtraction cancels the two contributions to each integral (our own). Each fine basis polynomial integrates against the monomial to the same constant times its value at the corresponding node (our own). Coarse interpolation reproduces the monomial at the new node, so the subtracted terms sum to the first contribution (our own). The work lies in proving these identities for the filtered interpolation bases (our own). This construction replaces separate equations for each vanishing integral (our own).

**Paper or page:** [A free parameter depending family of polynomial wavelets on a compact interval](https://arxiv.org/abs/2503.12397v1). It says: “the first n − m moments of the interpolating wavelets ψₙ,ₖᵐ are zero”

**Sources:**

- [A free parameter depending family of polynomial wavelets on a compact interval](https://arxiv.org/abs/2503.12397v1)
