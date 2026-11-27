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

### Extending by continuity defines the Fourier transform on all of L²

**Remember:** Define it where the integral converges, check it keeps L² norms, extend by continuity.

*Makes the theorem clean to state or prove.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 46E30. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Fourier transform on L²(ℝ) is the unique continuous extension to L² of the Fourier integral defined on L¹ ∩ L².

**Problem.** Plancherel's theorem: the Fourier transform is a unitary map of L²(ℝ) onto itself. This holds even though the Fourier integral of a general L² function need not converge.

**How the definition helps.** The definition never uses the integral where it diverges, so divergence causes no exceptions. For f in L² but not in L¹, the integral ∫ f(x) exp(−2πixξ) dx need not converge. Plancherel showed that on L¹ ∩ L² the transform preserves the L² norm, and L¹ ∩ L² is dense in L². So the transform extends uniquely to an isometry of L², and this extension is unitary; that it is onto needs the inversion formula (our own remark). So the theorem has no exception for functions with a divergent Fourier integral. Pointwise questions remain hard, such as almost-everywhere convergence of the inversion integral (Carleson); our own remark.

**Wikipedia:** [Plancherel theorem](https://en.wikipedia.org/wiki/Plancherel_theorem). It says: “In effect, this makes it possible to speak of Fourier transforms of L² functions.”

**Sources:**

- [Plancherel, M. (1910). Contribution à l'étude de la représentation d'une fonction arbitraire par des intégrales définies. Rendiconti del Circolo Matematico di Palermo 30(1), 289–335.](https://doi.org/10.1007/BF03014877)

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

### The Leray multiplier projects vector fields onto divergence-free fields

**Remember:** Remove the part of the vector that points along its frequency.

*True by definition.* MSC 42B15 (Multipliers for harmonic analysis in several variables), 35Q30, 76D05. arXiv math.AP. Level 3: graduate.

**Definition.** Define the Leray map P on square-integrable vector fields on ℝⁿ by multiplying their Fourier transforms by I − ξξᵀ/\|ξ\|² for ξ ≠ 0. Here I is the identity matrix, and ξξᵀ/\|ξ\|² projects onto the line through ξ. The usual Helmholtz description instead takes the divergence-free part of an orthogonal splitting into divergence-free fields and limits of gradients.

**Problem.** The Leray map is the orthogonal projection onto the fields with zero divergence. It sends ∇φ to zero for every smooth φ of compact support.

**How the definition helps.** The multiplier definition reduces this orthogonal splitting to projection in a finite-dimensional vector space, in our own proof. For each nonzero ξ, the matrix projects onto the vectors perpendicular to ξ. Fourier transformation turns divergence into a scalar multiple of the dot product with ξ, so these are exactly the vectors that give zero divergence. Fourier transforms of gradients are parallel to ξ, so the matrix sends gradients to zero. The work moves into Plancherel’s norm identity, which makes the pointwise orthogonal projection an orthogonal projection of square-integrable fields. This identifies the map with the Helmholtz projection.

**Wikipedia:** [Leray projection](https://en.wikipedia.org/wiki/Leray_projection). It says: “This definition must be understood in the sense of pseudo-differential operators: its matrix valued Fourier multiplier m(ξ) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Riesz transform multipliers recover second derivatives from the Laplacian

**Remember:** Two Riesz transforms recover a second derivative from the Laplacian, up to sign.

*True by definition. Confidence: medium.* MSC 42B20 (Singular and oscillatory integrals (Calderón-Zygmund, etc.)), 35J05. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Define the j-th Riesz transform Rⱼ on square-integrable functions on ℝⁿ by multiplying their Fourier transforms by −iξⱼ/\|ξ\| away from ξ = 0. The usual integral definition uses a kernel proportional to zⱼ divided by \|z\| to the power n + 1. It takes a principal value, the limit that excludes a shrinking ball around the singularity.

**Problem.** For every smooth, rapidly decreasing u, ∂ᵢ∂ⱼu = −RᵢRⱼΔu. The square-integral norm of ∂ᵢ∂ⱼu is at most that of Δu.

**How the definition helps.** The multiplier definition reduces the derivative identity to multiplying three scalar functions of ξ, in our own proof. With the Fourier kernel exp(−ix·ξ), both sides multiply by −ξᵢξⱼ. The multiplier of RᵢRⱼ has absolute value at most one, so Plancherel’s norm identity gives the bound. The work moves into matching the multipliers to the principal value kernels. Bounds with other integrability exponents require separate estimates for these singular integrals.

**Wikipedia:** [Riesz transform](https://en.wikipedia.org/wiki/Riesz_transform). It says: “The Riesz transforms are given by a Fourier multiplier.”

**Sources:**

- [A. P. Calderón and A. Zygmund (1952), On the existence of certain singular integrals, Acta Mathematica](https://doi.org/10.1007/BF02392130)

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

### Defining polynomials by orthogonality makes the three-term recurrence a short argument

**Remember:** Move the factor x across the inner product to the lower degree side.

*True by definition. Confidence: medium.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a positive measure on the real line with infinite support and finite moments. Define pₙ as the monic polynomial of degree n that is orthogonal to all polynomials of lower degree. Monic means the leading coefficient is one. The alternative builds pₙ₊₁ as (x − bₙ)pₙ − aₙpₙ₋₁, with constants bₙ and aₙ &gt; 0.

**Problem.** For these monic orthogonal polynomials, x·pₙ = pₙ₊₁ + bₙpₙ + aₙpₙ₋₁ with constants bₙ and aₙ &gt; 0, where p₋₁ = 0.

**How the definition helps.** With orthogonality as the definition, multiplication by x moves across the inner product. So the inner product of x·pₙ with pₖ equals that of pₙ with x·pₖ, which is zero when k + 1 &lt; n. Hence only three terms of the expansion of x·pₙ survive. With the recurrence as the definition, the recurrence is free but orthogonality is hard. That converse is Favard’s theorem, which Wikipedia names; it builds a positive measure from the recurrence. The proof steps are our own.

**Wikipedia:** [Orthogonal polynomials](https://en.wikipedia.org/wiki/Orthogonal_polynomials). It says: “These recurrence relations are key for deriving properties of orthogonal polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Walsh functions as group characters makes their orthogonality automatic

**Remember:** Translate by a bit that flips the sign of the product.

*True by definition. Confidence: medium.* MSC 42C10 (Fourier series in special orthogonal functions (Legendre polynomials, Walsh functions, etc.)), 43A40. arXiv math.CA. Level 3: graduate.

**Definition.** Let 𝔻 be the group of infinite binary sequences under digitwise addition modulo two, with the product of fair coin measures. Define the Walsh functions as the continuous characters of 𝔻. A character is a homomorphism to the complex numbers of absolute value one. The usual definition on \[0, 1) multiplies Rademacher functions, square waves that equal +1 or −1 according to one binary digit.

**Problem.** Distinct Walsh functions are orthogonal for uniform measure on \[0, 1).

**How the definition helps.** Characters of a compact group are orthogonal by a general translation argument. If χ ≠ ψ, then χψ̄ is a nontrivial character, so some translation multiplies it by a number other than one. The measure does not change under translation, so the integral of χψ̄ is zero. On \[0, 1), the usual proof instead uses the independence of binary digits. The work moves to the identification that Wikipedia describes. The binary expansion carries the product measure to the uniform measure, and it fails to be one-to-one only on a set of measure zero. The translation argument is our own.

**Wikipedia:** [Walsh function](https://en.wikipedia.org/wiki/Walsh_function). It says: “Elements of 𝔻̂ are readily identified with Walsh functions.”

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

### Weak porosity is exactly what makes a distance weight an A₁ weight

**Remember:** Enough room in the holes, and the distance weight stays averaged.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 42B25 (Maximal functions, Littlewood-Paley theory), 28A75. arXiv math.CA. Level 4: research.

**Definition.** A weight w is in the Muckenhoupt class A₁ when the Hardy–Littlewood maximal function of w is at most a constant times w almost everywhere. A set E is porous when every ball contains a hole, a ball that misses E, with a fixed fraction of its radius. Weak porosity is a weaker condition on the holes of E inside each ball. Our own summary, unchecked in the data, is that holes not much smaller than the largest one must fill a fixed fraction of the ball.

**Problem.** For which nonempty sets E ≠ ℝⁿ is the weight dist(x,E)⁻ᵅ in A₁ for some α &gt; 0? Such weights matter because the maximal operator and singular integrals are bounded on the weighted spaces.

**How the definition helps.** Weak porosity asks for exactly as much empty space as the A₁ averages need, so the answer is one equivalence; this reading is our own. Our own summary of the history is that porous sets were known to give A₁ distance weights, but porosity is not necessary. The paper also measures the best exponent α by a number it calls the Muckenhoupt exponent of E. Our own remark is that the proof still takes real work with cube decompositions. The abstract gives a set E in ℝ that is not weakly porous. For each 0 &lt; α &lt; 1, its weight is in every Aₚ with p &gt; 1 but not in A₁. So for the classes Aₚ with p &gt; 1, weak porosity is not the right condition.

**Paper or page:** [Weakly porous sets and Muckenhoupt Aₚ distance functions](https://arxiv.org/abs/2209.06284v2). It says: “As our first main result we show that the distance weight w(x)=dist(x,E)⁻ᵅ belongs to the Muckenhoupt class A₁, for some α&gt;0, if and only if E⊂ℝⁿ is weakly porous.”

**Sources:**

- [Theresa C. Anderson, Juha Lehrbäck, Carlos Mudarra, Antti V. Vähäkangas, Weakly porous sets and Muckenhoupt Aₚ distance functions, arXiv:2209.06284 (2022)](https://arxiv.org/abs/2209.06284v2)
