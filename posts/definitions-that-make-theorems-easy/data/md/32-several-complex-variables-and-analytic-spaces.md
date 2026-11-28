### Fourier modes give Laurent coefficients

**Remember:** The angular frequency gives the Laurent exponent.

*Makes the theorem clean to state or prove.* MSC 32A05 (Power series, series of functions of several complex variables), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** Let f be holomorphic on a connected domain in (ℂ ∖ {0})ⁿ that is invariant under rotating each coordinate separately, and let α ∈ ℤⁿ. The scaled Fourier coefficient on the torus of radii r is the average over θ of f(r₁exp(iθ₁),…,rₙexp(iθₙ))·exp(−iα·θ), divided by r₁<sup>α₁⋯rₙ^αₙ</sup>.

**Problem.** For a holomorphic function on this domain, the scaled Fourier coefficient is independent of the chosen radii. It equals the corresponding coefficient of the Laurent series, which permits negative integer powers.

**How the definition helps.** On a torus, the Laurent monomial with exponent β has only the angular frequency β, with amplitude its coefficient times r<sup>β</sup> (our own explanation). So the scaled coefficient picks out exactly the coefficient with β = α, at every radius. Convergence of the Laurent series on compact sets justifies integrating term by term.

**Paper or page:** [Power series as Fourier series](https://arxiv.org/abs/2107.04201v2). It says: “there is a continuous linear functional aα : 𝒪(Ω) → ℂ such that the Fourier series of a T ∈ 𝒪(Ω) is of the form”

**Sources:**

- [Debraj Chakrabarti and Anirban Dawn, Power series as Fourier series (2021 preprint)](https://arxiv.org/abs/2107.04201v2)

### Local quotients form meromorphic fields

**Remember:** Use fractions even when a point has no value.

*True by definition.* MSC 32A20 (Meromorphic functions of several complex variables), 32H04. arXiv math.CV. Level 3: graduate.

**Definition.** A meromorphic function is given near each point by a fraction f/g of holomorphic functions, with g not identically zero on any connected neighborhood. Two fractions agree when f₁g₂ = f₂g₁, and the local fractions must agree on overlaps.

**Problem.** The meromorphic functions on a connected complex manifold form a field.

**How the definition helps.** Fractions add, multiply and invert as usual, so the meromorphic functions form a field once nonzero ones have local inverses (our own proof). On a connected manifold the identity theorem keeps the numerator of a nonzero function from vanishing identically near any point, so g/f is a valid fraction. Requiring a map to the Riemann sphere instead would exclude z₁/z₂ at the origin.

**Wikipedia:** [Meromorphic function](https://en.wikipedia.org/wiki/Meromorphic_function). It says: “In several complex variables, a meromorphic function is defined to be locally a quotient of two holomorphic functions.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman coordinates linearize biholomorphisms

**Remember:** The kernel ratio, differentiated, forgets every Jacobian factor.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** Bergman representative coordinates at a point a of a bounded domain take the w̄-gradient at w = a of log(K(z,w)/K(a,w)), where K is the Bergman kernel, and apply the inverse Bergman metric at a. Dividing by K(a,w) and differentiating in w̄ removes the Jacobian factors that a biholomorphism puts into K (our own).

**Problem.** In representative coordinates centered at a and F(a), a holomorphic isomorphism F between bounded domains is locally its derivative dF(a).

**How the definition helps.** Under F the kernel gains a factor J(z)·conj J(w), the ratio cancels the w part, and the w̄-gradient kills the constant J(z)/J(a) (our own calculation). The chain rule leaves a factor from dF(a), which the transformation law of the Bergman metric turns into dF(a) itself. The mixed derivative formula for the metric makes the coordinate map's derivative at a the identity.

**Paper or page:** [Local Rigidity of the Bergman Metric and of the Kähler Carathéodory Metric](https://arxiv.org/abs/2408.09572v2). It says: “the Bergman representative coordinate”

**Sources:**

- [Stefan Bergman, The Kernel Function and Conformal Mapping](https://doi.org/10.1090/surv/005)

### Bergman kernels converge along exhaustions

**Remember:** The diagonal is the biggest squared value a unit function reaches.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman diagonal K(z,z) is the largest value of \|f(z)\|² among holomorphic functions on the domain with L² norm at most one.

**Problem.** If bounded domains increase to a bounded union, their Bergman kernels converge uniformly on compact subsets of the product of the union with itself.

**How the definition helps.** Restricting a test function to a smaller domain keeps it a test function, so the diagonals decrease along the exhaustion (our own proof). Mean-value bounds and Fatou's lemma make a limit of extremal functions a test function on the union, so the diagonals converge to the union's. Cauchy–Schwarz bounds for kernels give compactness on the product, and holomorphy in z and w̄ fixes the kernel by its diagonal.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman kernels follow the Jacobian

**Remember:** A change of variables moves the evaluation kernel with the Jacobian.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman kernel K(·,w) of a domain in ℂⁿ is the square-integrable holomorphic function whose inner product with each such function f gives f(w).

**Problem.** Let F be a biholomorphism between domains in ℂⁿ, and let J be the determinant of its complex derivative. Then the source kernel at z,w equals J(z) times the target kernel at F(z),F(w) times the conjugate of J(w).

**How the definition helps.** The map f ↦ (f ∘ F)·J preserves inner products between the two Bergman spaces, because \|J\|² is the real Jacobian of F (our own proof). Applied to the evaluation identity, it shows that the transformed target kernel evaluates at w on the source. Uniqueness of the evaluating function makes it the source kernel.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions”

**Sources:** none listed. No primary source with a working link was found.

### Circle averaging fixes the origin kernel

**Remember:** On a balanced domain, f(0) is the average of f.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** A domain D in ℂⁿ is balanced if λz ∈ D whenever z ∈ D and \|λ\| ≤ 1. Its Bergman kernel at the origin is the square-integrable holomorphic function whose inner product with each such f gives f(0).

**Problem.** For a bounded balanced domain D, the Bergman kernel with one argument at the origin is the constant 1/Vol(D).

**How the definition helps.** The mean-value property on each disk {λz : \|λ\| ≤ 1} and rotation invariance of volume make f(0) the volume average of f (our own). So evaluation at 0 is the inner product with the constant 1/Vol(D), and uniqueness of the evaluating function gives the formula (our own).

**Paper or page:** [2-proper holomorphic images of classical Cartan domains](https://arxiv.org/abs/2303.11940v4). It says: “Consequently, the Bergman kernel Kᴅ is given by the formula Kᴅ(0,z)=1/Vol(D), z∈D.”

**Sources:**

- [2-proper holomorphic images of classical Cartan domains](https://arxiv.org/abs/2303.11940v4)

### Evaluation gives sharp Bergman bounds

**Remember:** The norm of the evaluation vector is the sharp bound.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32A36. arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space of a domain in ℂⁿ holds the holomorphic functions with finite squared integral. Its kernel vector k at w is the element with ⟨f, k⟩ = f(w) for every f, and K(w,w) = k(w) = ‖k‖² (our own).

**Problem.** Among functions of norm at most one, the largest squared modulus at w equals the kernel value K(w,w).

**How the definition helps.** By Cauchy–Schwarz, \|f(w)\|² = \|⟨f, k⟩\|² ≤ ‖k‖² = K(w,w) whenever ‖f‖ ≤ 1 (our own). The unit vector k/‖k‖ attains the bound, and if k = 0 every value at w vanishes (our own).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Evaluation kernels multiply on products

**Remember:** Evaluating in two variables takes one kernel per factor.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32A36. arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman kernel K(·,w) of a domain in ℂⁿ is the square-integrable holomorphic function whose inner product with each such f gives f(w).

**Problem.** The Bergman kernel of a product of bounded domains is the product of the kernels of the factors.

**How the definition helps.** Evaluation at (w₁,w₂) can be done one variable at a time: pair each slice with the first factor's kernel, then pair the result with the second (our own). The mean-value inequality keeps each slice square-integrable, and Fubini's theorem joins the two pairings into one against K₁·K₂ (our own). Uniqueness of the evaluating function identifies the product as the kernel (our own).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized forms share Cauchy reproduction

**Remember:** Any form normalized against w − z reproduces like the radial one.

*Makes the theorem clean to state or prove.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** A generating form for an interior point z is a smooth field of complex-linear functionals η(w) near the boundary, normalized by η(w)(w − z) = 1. Its Cauchy–Fantappiè kernel is η ∧ (∂̄<sub>w</sub> η)ⁿ⁻¹ / (2πi)ⁿ.

**Problem.** On a bounded smooth domain every such kernel recovers a holomorphic function continuous on the closure by integrating its boundary values.

**How the definition helps.** Straight-line interpolation between η and the Bochner–Martinelli form keeps the normalization, and Stokes' theorem shows the boundary integral does not change along the way (our own argument). The normalization makes the derivatives of the coefficients annihilate w − z, so only n − 1 directions are independent and the top wedge vanishes. The Bochner–Martinelli formula then gives the reproduction.

**Wikipedia:** [Bochner–Martinelli formula](https://en.wikipedia.org/wiki/Bochner%E2%80%93Martinelli_formula). It says: “generalization of the Cauchy integral formula to functions of several complex variables”

**Sources:**

- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Peak powers force Bergman divergence

**Remember:** Peak powers keep value one at p while their norms shrink.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** A peak function at a boundary point p is holomorphic on the domain, continuous on its closure, equal to 1 at p and of modulus less than 1 elsewhere. The Bergman diagonal K(z,z) is the largest \|f(z)\|² among holomorphic f with L² norm at most one.

**Problem.** At a boundary point p with a peak function, K(z,z) tends to infinity as z approaches p from inside.

**How the definition helps.** The powers Fᵏ of a peak function have L² norms tending to zero by dominated convergence, while Fᵏ(z) → 1 as z → p for each fixed k (our own proof). So Fᵏ divided by its norm is a test function whose squared value near p is close to 1/‖Fᵏ‖², which is as large as we like.

**Paper or page:** [Around L¹ (un)boundedness of Bergman and Szegö projections](https://arxiv.org/abs/2104.04009v1). It says: “there exists F ∈ A(D) such that F(z₀)=1 and \|F(z)\|&lt;1 for every z ∈ D̄ ∖ {z₀}.”

**Sources:** none listed. No primary source with a working link was found.

### Smaller domains enlarge Bergman diagonals

**Remember:** A smaller domain gives more functions a norm at most one.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman diagonal K(z,z) is the supremum of \|f(z)\|² over holomorphic functions with volume L² norm at most one.

**Problem.** If U ⊂ V are bounded domains and z lies in U, the Bergman diagonal on U is at least as large as on V.

**How the definition helps.** Restricting a function from V to U keeps it holomorphic and does not raise its norm, so every test function on V gives one on U with the same value at z (our own proof). The supremum over the larger family on U is therefore at least as large.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Unit flux gives Bochner–Martinelli reproduction

**Remember:** Unit flux gives Stokes' theorem the right normalization.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** The Bochner–Martinelli kernel at z comes from the radial field of magnitude \|ζ − z\|<sup>(1−2n)</sup> about z, contracted into Euclidean volume. Keep its part with n holomorphic and n − 1 antiholomorphic differentials, scaled to have integral one over each sphere about z.

**Problem.** For a function holomorphic inside a bounded smooth domain and continuous on its closure, integration against this boundary kernel gives its value at z.

**How the definition helps.** Stokes' theorem moves the boundary integral to a small sphere about z, where unit flux and continuity give f(z) (our own proof). This works because the kernel is closed away from z, and so is its product with a holomorphic f, since each term already contains every dζⱼ. Inner approximating domains handle f that is only continuous on the closure.

**Paper or page:** [Geometric conditions for bounded point evaluations in several complex variables](https://arxiv.org/abs/2507.23688v2). It says: “where w(ζ,z) is the Bochner-Martinelli kernel.”

**Sources:**

- [Bochner, Analytic and Meromorphic Continuation by Means of Green's Formula (1943)](https://doi.org/10.2307/1969103)
- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Berezin averaging fixes holomorphic symbols

**Remember:** Kernel-weighted averages of holomorphic functions return the center value.

*True by definition. Confidence: medium.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Berezin transform at z averages a bounded function over the domain with the weight \|K(w,z)\|²/K(z,z), where K(·,z) is the Bergman kernel vector that gives evaluation at z by inner product.

**Problem.** On a bounded domain the Berezin transform is a contraction in supremum norm and fixes every bounded holomorphic function.

**How the definition helps.** The weight integrates to one because K(z,z) = ‖K(·,z)‖², so the average never exceeds the supremum of \|f\| (our own proof). For bounded holomorphic f, the product fK(·,z) lies in the Bergman space, and reproducing gives ∫ f(w)\|K(w,z)\|² dV(w) = f(z)K(z,z).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman projection integrates square integrable inputs

**Remember:** Project first or pair with the kernel first.

*True by definition. Confidence: medium.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman projection P is the orthogonal projection of L² onto its closed subspace of square-integrable holomorphic functions, where the kernel vector K(·,z) gives evaluation at z by inner product.

**Problem.** On a bounded domain, Pf(z) equals the inner product of f with K(·,z) for every f in L².

**How the definition helps.** Since f − Pf is orthogonal to the holomorphic function K(·,z), Pf(z) = ⟨Pf, K(·,z)⟩ = ⟨f, K(·,z)⟩ (our own proof). Local mean-value estimates make evaluation bounded and the holomorphic subspace closed, so K and P exist.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Square integrability removes hyperplane poles

**Remember:** A simple pole already has infinite squared area integral.

*Rules out counterexamples.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space consists of holomorphic functions whose squared absolute value has finite volume integral. A negative power of a coordinate fails this near the hyperplane where that coordinate vanishes, since ∫\|w\|⁻²ᵏ over a disk about 0 diverges for k ≥ 1 (our own).

**Problem.** On a polydisc with a coordinate hyperplane removed, every Bergman function extends across the hyperplane with the same norm.

**How the definition helps.** Expand f as a Laurent series in the missing coordinate w; circle orthogonality makes each negative power give an infinite radial integral unless its coefficient vanishes (our own proof). The coefficients are holomorphic in the other coordinates, so a nonzero one is nonzero on a set of positive volume. The hyperplane has zero volume, so the extension keeps the norm.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Torus characters separate Laurent monomials

**Remember:** Different Laurent powers respond differently to some coordinate rotation.

*Makes the theorem clean to state or prove.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** A Reinhardt domain is unchanged when each coordinate is rotated separately. Its admissible monomials are the products z<sup>α</sup> of integer powers that are holomorphic and square-integrable on it, and a rotation by θ multiplies z<sup>α</sup> by exp(iα·θ).

**Problem.** On a bounded Reinhardt domain the admissible Laurent monomials form an orthogonal basis of its square-integrable holomorphic functions.

**How the definition helps.** Rotations preserve the inner product and multiply distinct monomials by distinct characters, so distinct monomials are orthogonal (our own explanation). Averaging f against each character extracts its Laurent coefficient, and uniqueness of Laurent expansions shows the monomials span. Square integrability keeps exactly the admissible powers.

**Paper or page:** [Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3). It says: “forms a Banach-space basis of Aᵖ(Ω,λ).”

**Sources:** none listed. No primary source with a working link was found.

### The polydisk maximum needs only its torus

**Remember:** The torus suffices, and each of its points can peak.

*Makes the theorem clean to state or prove.* MSC 32A40 (Boundary behavior of holomorphic functions of several complex variables), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** The Shilov boundary of the closed unit polydisk is the smallest closed set on which every function holomorphic inside and continuous on the closure attains its maximum modulus.

**Problem.** The Shilov boundary of a unit polydisk is the product of its boundary circles. It excludes the boundary faces on which only some coordinates have modulus one.

**How the definition helps.** The maximum principle applied in each coordinate in turn pushes every maximum to the torus, so the torus suffices (our own). For a torus point a, the product of the factors (1 + conj(aⱼ)zⱼ)/2 has modulus one only at a, so no smaller closed set works (our own).

**Wikipedia:** [Shilov boundary](https://en.wikipedia.org/wiki/Shilov_boundary). It says: “the Shilov boundary of a polydisc 𝔻₁×𝔻₂×⋯×𝔻ₖ is the product of the boundaries ∂𝔻₁×∂𝔻₂×⋯×∂𝔻ₖ”

**Sources:** none listed. No primary source with a working link was found.

### Discriminants mark branch loci

**Remember:** A repeated root is precisely where the discriminant vanishes.

*True by definition. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32H35. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The discriminant of a monic polynomial is the product of the squared differences of its roots, so it vanishes exactly when two roots collide. For a Weierstrass polynomial, monic in w with holomorphic lower coefficients vanishing at the base origin, it is a holomorphic function on the base.

**Problem.** Near the origin, a square-free Weierstrass polynomial defines separate holomorphic sheets above exactly those base points where its discriminant is nonzero. Each sheet projects isomorphically onto a neighborhood of the base point.

**How the definition helps.** Where the discriminant is nonzero the roots are simple, and the implicit function theorem gives a holomorphic sheet through each (our own comparison). Where it vanishes, a repeated root gives a fiber point of multiplicity above one, so the sheets do not separate. Symmetry makes the root product a polynomial in the coefficients, matching the determinant formula by the resultant identity.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “The discriminant of a polynomial over a field is zero if and only if the polynomial has a multiple root in some field extension.”

**Sources:** none listed. No primary source with a working link was found.

### Local algebras determine germ maps

**Remember:** The images of the coordinates determine the whole germ map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The local algebra of a complex analytic germ is the ring of convergent power series modulo the equations of the space near the point. A local algebra map is complex-linear, multiplicative, sends 1 to 1, and sends functions vanishing at one point to functions vanishing at the other.

**Problem.** Each local complex algebra map between the local algebras of two complex analytic germs comes from a unique holomorphic map in the reverse direction.

**How the definition helps.** The images of the coordinate functions define a candidate holomorphic map (our own argument). Its pullback agrees with the given map on polynomials, hence modulo every power of the maximal ideal. Krull's intersection theorem turns agreement to all orders into equality, even when nilpotents are present.

**Wikipedia:** [Complex analytic variety](https://en.wikipedia.org/wiki/Complex_analytic_variety). It says: “Morphisms of complex analytic varieties are defined to be morphisms of the underlying locally ringed spaces”

**Sources:** none listed. No primary source with a working link was found.

### Thick intersections govern gluing

**Remember:** Glue modulo the sum of ideals and identify lifts modulo their intersection.

*Rules out counterexamples.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32C15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For closed analytic subspaces with ideals I and J, the union has ideal I ∩ J and the intersection has ideal I + J, which can record tangency. Functions on a subspace are holomorphic functions modulo its ideal.

**Problem.** Holomorphic germs on the union correspond to pairs of germs that agree modulo the ideal of the intersection.

**How the definition helps.** If f and g agree modulo I + J, write f − g = i + j with i ∈ I and j ∈ J; then f − i = g + j restricts to both, uniquely modulo I ∩ J (our own). For y = 0 and y = x², the ideal (y, x²) tells 0 from x, although both vanish at the origin (our own).

**Wikipedia:** [Complex analytic variety](https://en.wikipedia.org/wiki/Complex_analytic_variety). It says: “Define a sheaf of rings on X by letting 𝒪ₓ be the restriction to X of 𝒪ᵤ/(f₁, …, fₖ)”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass norms eliminate coordinates

**Remember:** A zero of g on a fiber makes its multiplication matrix singular.

*True by definition. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Let P be a Weierstrass polynomial in w, monic with lower coefficients holomorphic on the base and vanishing at the origin. Multiplication by a holomorphic germ g on functions modulo P is a linear map over the base, and its determinant is the norm of g.

**Problem.** Near the origin, the projection of the common zero set of P and g onto the remaining coordinates is the zero set of the norm.

**How the definition helps.** At a base point, multiplication by g modulo P is singular exactly when g vanishes at some root of P above that point, even when roots repeat (our own argument). Weierstrass division gives the basis 1, w, …, w<sup>(d−1)</sup>, so the norm is a holomorphic function on the base. It therefore vanishes exactly on the projection of the common zeros.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “where r = r(z,w) is a polynomial of degree &lt; k.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass polynomials give free quotients

**Remember:** Divide by the monic polynomial and keep the short remainder.

*True by definition.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Weierstrass polynomial of degree d in w is monic in w, with lower coefficients that are holomorphic germs in the other variables vanishing at the origin. Because it is monic, one can divide by it as by a monic polynomial, leaving a remainder of degree below d.

**Problem.** Let f be a holomorphic germ whose restriction to the w-axis vanishes to finite order d &gt; 0 at the origin. Modulo multiples of f, the powers of w of degrees zero through d − 1 form a basis over germs in the other variables.

**How the definition helps.** Weierstrass preparation writes f as a Weierstrass polynomial of degree d times a unit, so both generate the same ideal (our own proof). Weierstrass division gives each germ a unique remainder of degree below d. The remainder's coefficients are the unique coordinates in the basis 1, w, …, w<sup>(d−1)</sup>.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “where r = r(z,w) is a polynomial of degree &lt; k.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass preparation makes projections finite

**Remember:** A monic equation keeps a fixed number of roots above the base.

*Makes the theorem clean to state or prove.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A germ f is regular of order d in w when f(0,…,0,w) has a zero of order d at w = 0. A Weierstrass polynomial of degree d is monic in w, with holomorphic lower coefficients vanishing at the base origin, so each nearby fiber has exactly d roots counted with multiplicity.

**Problem.** Near the origin, the zeros of a germ regular of positive order d in w project finitely onto the other coordinates. Each fiber contains d roots counted with multiplicity.

**How the definition helps.** Weierstrass preparation writes f as a Weierstrass polynomial times a function without zeros, so both have the same zeros (our own explanation). After shrinking the base, all d roots stay in a small disk, so the projection has compact preimages of compact sets.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “Then there is a neighborhood of origin such that f is uniquely representable in the form f = P · h where P is a Weierstrass polynomial of degree d of w and h(0) ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded semianalytic sets project subanalytically

**Remember:** Project only bounded pieces, or the image can oscillate forever.

*Rules out counterexamples.* MSC 32B20 (Semi-analytic sets, subanalytic sets, and generalizations), 32B25. arXiv math.AG. Level 3: graduate.

**Definition.** A semianalytic set is locally cut out by finitely many real analytic equations and inequalities. A subanalytic set is locally the projection of a relatively compact semianalytic set, one whose closure is compact.

**Problem.** The linear projection of a relatively compact semianalytic subset of Euclidean space is subanalytic.

**How the definition helps.** The given set is itself a relatively compact semianalytic set that projects onto the image, so the image is subanalytic by definition (our own). Without compact closure, projecting {xz = 1, y = sin z} gives a set meeting the x-axis in the points 1/(kπ), which accumulate at 0 (our own). A subanalytic set meets a line in a locally finite union of points and intervals, so that image is not subanalytic (our own).

**Wikipedia:** [Subanalytic set](https://en.wikipedia.org/wiki/Subanalytic_set). It says: “projections of semianalytic sets are in general not semianalytic.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Semianalytic and subanalytic sets (1988)](https://doi.org/10.1007/bf02699126)

### Global subanalyticity gives finite components

**Remember:** Squeeze space into a cube; stay tame at its walls.

*Rules out counterexamples.* MSC 32B20 (Semi-analytic sets, subanalytic sets, and generalizations), 32B25. arXiv math.AG. Level 3: graduate.

**Definition.** A set in ℝⁿ is globally subanalytic if it stays subanalytic, even at the walls, after x ↦ x/√(1 + x²) squeezes each coordinate into (−1, 1). Subanalytic means locally a projection of a bounded set cut out by finitely many real analytic equations and inequalities.

**Problem.** Every globally subanalytic set has finitely many connected components.

**How the definition helps.** Subanalytic sets have locally finitely many components, so the squeezed set has finitely many near each point of the closed cube (our own). The closed cube is compact, so finitely many such neighborhoods cover it (our own). The integers fail the test, because their squeezed images accumulate at both walls (our own).

**Paper or page:** [On subanalytic geometry](https://arxiv.org/abs/2507.23622v1). It says: “Globally subanalytic sets have only finitely many connected components.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced spaces cannot detect nilpotents

**Remember:** Reduced: no nonzero function has a power equal to zero.

*True by definition. Confidence: medium.* MSC 32C15 (Complex spaces), 32B05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A complex analytic space is reduced if it has no nonzero nilpotent local functions, that is, no nonzero function with a power equal to zero. Its reduction keeps the points and divides each local ring by its nilpotents.

**Problem.** Every holomorphic map from a reduced space to a complex analytic space factors uniquely through the target’s reduction.

**How the definition helps.** A holomorphic map pulls a nilpotent function back to a nilpotent function, which is zero on a reduced source (our own). So pullback kills the nilpotents of the target and factors uniquely through the quotient rings of the reduction (our own). These local factorizations agree on overlaps and glue (our own).

**Wikipedia:** [Analytic space](https://en.wikipedia.org/wiki/Analytic_space). It says: “An analytic space is reduced if every local model for the space is defined by a radical sheaf of ideals.”

**Sources:** none listed. No primary source with a working link was found.

### Universal analytification preserves fiber products

**Remember:** Analytification is defined by maps into it, so limits pass through.

*True by definition.* MSC 32C15 (Complex spaces), 14A15. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** The analytification Xᵃⁿ of a complex scheme X of finite type is its set of complex points with holomorphic local functions. It is fixed by maps into it: for every complex analytic space Z, maps Z → Xᵃⁿ correspond exactly to maps Z → X of locally ringed spaces over ℂ.

**Problem.** Analytification takes a fiber product of complex schemes of finite type to the fiber product of their analytifications.

**How the definition helps.** Both spaces receive the same maps (our own). A map from an analytic space Z to either one is a pair of maps to the two factors that agree over the base. The Yoneda lemma then makes the two spaces canonically isomorphic (our own).

**nLab:** [analytification](https://ncatlab.org/nlab/show/analytification). It says: “For any complex analytic space Z, the morphism of locally ringed spaces Xᵃⁿ → X induces a bijection”

**Sources:** none listed. No primary source with a working link was found.

### Normality lets bounded functions extend

**Remember:** Normal: bounded functions on the smooth part fill in singular points.

*True by definition. Confidence: medium.* MSC 32C20 (Normal analytic spaces), 32D20. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** On a reduced complex space, a weakly holomorphic function is holomorphic on the smooth points and locally bounded near the singular points. The space is normal if every weakly holomorphic germ extends holomorphically across its base point.

**Problem.** On a normal complex space, weakly holomorphic functions extend uniquely as holomorphic functions.

**How the definition helps.** The definition gives a holomorphic extension near each point (our own). Two extensions agree on the dense smooth part, hence everywhere because the space is reduced, so they glue to a unique global extension (our own). The analytic normality criterion makes this extension test equivalent to integrally closed local rings (our own).

**Wikipedia:** [Analytic space](https://en.wikipedia.org/wiki/Analytic_space). It says: “An analytic space is normal if every stalk of the structure sheaf is a normal ring (meaning an integrally closed integral domain).”

**Paper or page:** [Grauert-Riemenschneider multiplier ideal sheaves and the (optimal) Briançon-Skoda number](https://arxiv.org/abs/2104.14047v1). It says: “the sheaf of weakly holomorphic functions on X.”

**Sources:** none listed. No primary source with a working link was found.

### Bott–Chern classes map to both theories

**Remember:** Killed by ∂ and ∂̄, modulo ∂∂̄: closed and exact both ways.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex manifold the exterior derivative splits as d = ∂ + ∂̄. A Bott–Chern class is a form of type (p, q), with p holomorphic and q antiholomorphic differentials, killed by both ∂ and ∂̄. Two such forms give the same class when they differ by ∂∂̄β.

**Problem.** Every Bott–Chern class determines a de Rham class, computed with the full derivative, and a Dolbeault class, computed with ∂̄.

**How the definition helps.** A form killed by ∂ and ∂̄ is killed by d and by ∂̄, so it gives a de Rham class and a Dolbeault class. Changing it by ∂∂̄β changes it by d(∂̄β) and by ∂̄(−∂β), which is zero in both groups (our own).

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “The theory admits canonical morphisms to de Rham and Dolbeault cohomology and to the related Aeppli cohomology.”

**Sources:** none listed. No primary source with a working link was found.

### Cartan generators globalize local equations

**Remember:** Vanishing functions generate 1 off the set, so some is nonzero there.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32E10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The ideal sheaf of a closed analytic subset A consists of the local holomorphic functions that vanish on A. At each point outside A it contains the constant 1 (our own). It is coherent, meaning it has finite local lists of generators and relations.

**Problem.** On a Stein manifold, one that embeds properly in some ℂᴺ, every closed analytic subset is the common zero set of a family of global holomorphic functions.

**How the definition helps.** Cartan’s theorem A gives global functions that generate the ideal sheaf at every point, and all of them vanish on A. At a point outside A they generate 1, so at least one of them is nonzero there (our own argument).

**Paper or page:** [Deformation of nef adjoint canonical line bundles](https://arxiv.org/abs/2510.23967v1). It says: “Then ℱ is globally generated by its sections”

**Sources:** none listed. No primary source with a working link was found.

### Coherent ideals algebraize thickened subspaces

**Remember:** The subspace is its ideal, so the multiplicities travel with it.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32J25, 14F06. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A closed analytic subspace is a coherent ideal sheaf of local holomorphic equations, with functions taken modulo that ideal. So y = 0 and y² = 0 are different subspaces with the same points (our own). Coherent means the equations and their relations have finite local generating lists.

**Problem.** Every closed analytic subspace of a complex projective variety comes from a unique closed algebraic subscheme, even when it has nonzero nilpotent functions.

**How the definition helps.** A subspace is its ideal sheaf, a coherent analytic sheaf, so Serre’s comparison theorem gives a coherent algebraic sheaf with the same analytification. Full faithfulness makes its inclusion into the structure sheaf algebraic, and exactness keeps it injective, so it is an ideal (our own). Exactness also preserves the quotient, which recovers the subspace (our own).

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “For every coherent analytic sheaf 𝒢 on Xₐₙ, there exists a coherent algebraic sheaf ℱ on X such that ℱₐₙ ≃ 𝒢.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)

### Conjugation pairs Bott–Chern groups

**Remember:** Conjugation swaps ∂ and ∂̄, and Bott–Chern treats them alike.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV. Level 3: graduate.

**Definition.** Bott–Chern cohomology of type (p, q), with p holomorphic and q antiholomorphic differentials, takes forms killed by both ∂ and ∂̄, modulo forms ∂∂̄β. Both the condition and the relation treat ∂ and ∂̄ alike, up to sign (our own).

**Problem.** Complex conjugation gives an antilinear isomorphism between Bott–Chern groups of types (p, q) and (q, p).

**How the definition helps.** Complex conjugation sends type (p, q) to (q, p) and swaps ∂ with ∂̄, so it keeps both closure conditions. It sends ∂∂̄β to ∂̄∂β̄ = −∂∂̄β̄, so it keeps the relation too (our own). Conjugation is antilinear and its own inverse, so it is an antilinear isomorphism (our own).

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “Complex conjugation exchanges forms of bidegree (p,q) with forms of bidegree (q,p).”

**Sources:** none listed. No primary source with a working link was found.

### Dolbeault products are wedge products

**Remember:** Multiply Dolbeault classes by wedging their smooth representatives.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32W05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Dolbeault cohomology of a complex manifold takes smooth forms of type (p, q) killed by ∂̄, modulo forms ∂̄γ. Because ∂̄ obeys the graded product rule, a wedge of two ∂̄-closed forms is ∂̄-closed, and it is ∂̄-exact if one factor is (our own).

**Problem.** On a complex manifold, Dolbeault classes compute the sheaf cohomology of holomorphic forms. Under this identification the cup product is the wedge product of forms, with the usual graded signs.

**How the definition helps.** The graded product rule makes the wedge product well defined on classes (our own). The Dolbeault lemma and partitions of unity resolve holomorphic forms by smooth forms, and the wedge product on this resolution computes the cup product (our own).

**nLab:** [Dolbeault theorem](https://ncatlab.org/nlab/show/Dolbeault+theorem). It says: “its Dolbeault cohomology in bi-degree (p,q) is naturally isomorphic to the abelian sheaf cohomology in degree q”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic cohomology receives a Hodge projection

**Remember:** Keep only the part with no holomorphic differentials.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F25. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Hᵏ(X, ℂ) is computed by smooth forms with d, and Hᵏ(X, 𝒪) by (0, k)-forms, those with no holomorphic differential dzⱼ, with ∂̄. Keeping only the (0, k) part of a form turns d into ∂̄, because d of a term with some dzⱼ still contains a dzⱼ (our own).

**Problem.** For a compact Kähler manifold X, including the constant sheaf ℂ into 𝒪 induces the Hodge projection Hᵏ(X,ℂ) → H⁰˒ᵏ(X) ≅ Hᵏ(X,𝒪).

**How the definition helps.** Under the de Rham and Dolbeault theorems, the inclusion of ℂ into 𝒪 becomes the map that keeps only the (0, k) part of a form (our own). This map respects derivatives, as the definition shows (our own). On a compact Kähler manifold, the Hodge decomposition makes it the projection onto the summand H⁰˒ᵏ(X).

**Paper or page:** [Generic vanishing theorem for Fujiki class C](https://arxiv.org/abs/2309.09738v1). It says: “coincides with the projection Hᵏ(X, ℂ) → H⁰˒ᵏ(X) given by the Hodge decomposition”

**Sources:** none listed. No primary source with a working link was found.

### Local presentations preserve pullback coherence

**Remember:** A coherent sheaf is a matrix’s cokernel; pull back the matrix.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A sheaf on a complex analytic space is finitely presented if near each point it is the cokernel of a finite matrix 𝒪ᵖ → 𝒪ⁿ of holomorphic functions. By Oka’s theorem, the coherent sheaves are exactly the finitely presented ones (our own).

**Problem.** Pulling back a coherent analytic sheaf along any holomorphic map of complex analytic spaces gives a coherent sheaf.

**How the definition helps.** Pullback is a tensor product, which preserves cokernels, so the pulled-back sheaf is the cokernel of the matrix with its entries composed with the map (our own argument). That matrix is still finite, so the pullback is finitely presented and hence coherent.

**nLab:** [coherent sheaf](https://ncatlab.org/nlab/show/coherent+sheaf). It says: “finitely presented if there is an exact sequence of the form 𝒪ᵖ → 𝒪ⁿ → ℰ → 0 with p and n finite.”

**Sources:** none listed. No primary source with a working link was found.

### Properness preserves algebraic global sections

**Remember:** Compact means no room for exp: analytic sections are algebraic.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex algebraic variety, separated and of finite type over ℂ, is proper if its complex points form a compact space in the usual topology. Equivalently, its structural map stays closed after every algebraic change of base.

**Problem.** On a proper complex variety, take a coherent algebraic sheaf, one with finitely many local generators and relations. Every global analytic section of its analytification comes from exactly one global algebraic section.

**How the definition helps.** The proper GAGA comparison theorem gives the bijection on global sections. Compactness is needed: on the affine line, exp(z) is a global analytic function with no algebraic counterpart (our own).

**nLab:** [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “Typically GAGA-type theorems hold for proper (compact) varieties, but not for non-proper varieties.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique (1956)](https://doi.org/10.5802/aif.59)

### Properness preserves higher sheaf cohomology

**Remember:** Compact complex points leave no room for infinite Laurent tails.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A complex algebraic variety is proper if its complex points form a compact space in the usual topology.

**Problem.** On a proper complex algebraic variety, analytification preserves every positive-degree cohomology group of a coherent algebraic sheaf.

**How the definition helps.** The comparison theorem for proper varieties gives the isomorphism in every degree. Compactness removes examples like the punctured plane ℂ² ∖ {0}, covered by the sets x ≠ 0 and y ≠ 0 (our own example). There exp(1/(xy)) gives an analytic class with infinitely many terms having both exponents negative, which no algebraic class matches (our own).

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “For every ℱ ∈ Cohₐₗɡ(X), there is an isomorphism H\*(X, ℱ) ≃ H\*(Xₐₙ, ℱₐₙ).”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)
- [Michèle Raynaud, Géométrie algébrique et géométrie analytique, SGA 1, Exposé XII, §4](https://grothendiecksga.com/read/sga1/fr/XII.html)

### Stein overlaps justify Čech cohomology

**Remember:** Stein overlaps have no higher cohomology, so the cover computes everything.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32Q28. arXiv math.CV. Level 3: graduate.

**Definition.** Take an open cover of a complex manifold in which every nonempty finite intersection is Stein, that is, embeds as a closed complex submanifold of some ℂᴺ. By Cartan’s theorem B, a coherent sheaf has no higher cohomology on each such intersection.

**Problem.** For a coherent analytic sheaf, the Čech cohomology of such a cover equals its sheaf cohomology.

**How the definition helps.** Leray’s theorem says that Čech cohomology of a cover computes sheaf cohomology when the sheaf has no higher cohomology on any finite intersection. Cartan’s theorem B gives exactly this vanishing on Stein intersections.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the positive-degree abelian sheaf cohomology with values in any analytic coherent sheaf on any Stein manifold vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Stein vanishing lifts sections

**Remember:** Restrict by setting the subspace’s defining equations equal to zero.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32E10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a closed analytic subspace Y with ideal sheaf I, the restriction of an analytic module F to Y is the quotient F/IF. It fits in the exact sequence 0 → IF → F → F/IF → 0 (our own).

**Problem.** On a Stein manifold, every global section of the restriction of a coherent analytic sheaf to a closed analytic subspace extends to the manifold.

**How the definition helps.** By the long exact cohomology sequence, a global section of F/IF lifts to F when H¹(X, IF) vanishes (our own argument). IF is coherent, so Cartan’s theorem B makes this group vanish on a Stein manifold.

**nLab:** [Cartan theorem B](https://ncatlab.org/nlab/show/Cartan+theorem+B). It says: “On a Stein manifold Σ and for A an analytic coherent sheaf on Σ then all the positive-degree abelian sheaf cohomology groups of Σ with coefficients in A vanish”

**Sources:** none listed. No primary source with a working link was found.

### Analytic polyhedra supply boundary poles

**Remember:** Where \|f\| reaches 1, the reciprocal 1/(f − f(p)) blows up.

*True by definition.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** An analytic polyhedron in an open set D is the set where \|f₁\| &lt; 1, …, \|f<sub>k</sub>\| &lt; 1, for holomorphic f<sub>j</sub> on D, with compact closure inside D. At each boundary point p some \|f<sub>j</sub>(p)\| = 1, so 1/(f<sub>j</sub> − f<sub>j</sub>(p)) is holomorphic inside and blows up at p (our own).

**Problem.** Each connected component of an analytic polyhedron is a domain of holomorphy.

**How the definition helps.** Each boundary point p of a component carries a holomorphic function on the component that is unbounded near p. Our own proof uses these functions to block a common extension across any piece of the boundary.

**Wikipedia:** [Analytic polyhedron](https://en.wikipedia.org/wiki/Analytic_polyhedron). It says: “Every analytic polyhedron is a domain of holomorphy and it is thus pseudo-convex.”

**Sources:** none listed. No primary source with a working link was found.

### Boundary distance handles increasing unions

**Remember:** As domains grow, the negative log of distance falls.

*True by definition.* MSC 32D05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A domain D other than ℂⁿ passes the distance test if −log of the distance to its complement is plurisubharmonic, that is, subharmonic on every complex line. When the domain grows, its distances grow, so −log of the distance falls (our own).

**Problem.** An increasing union of domains of holomorphy in ℂⁿ is a domain of holomorphy.

**How the definition helps.** Domains of holomorphy are exactly the domains that pass the test, and ℂⁿ is one, so it suffices to test a union other than ℂⁿ (our own). Distances increase to the distance for the union, because each closed ball in the union eventually lies in one domain. So −log of the distance decreases to a finite limit, and such limits keep plurisubharmonicity (our own).

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “is an ascending sequence of domains of holomorphy, then their union”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Common extension excludes compact holes

**Remember:** Every function fills the hole, so the hole is a common patch.

*Rules out counterexamples.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain of holomorphy has no common extension patch. Such a patch is a connected open set U, not inside the domain, with a fixed nonempty open part inside the domain. Every holomorphic function on the domain extends from that part to U.

**Problem.** In ℂⁿ with n ≥ 2, deleting a nonempty compact subset from a domain never leaves a domain of holomorphy if the remainder is connected.

**How the definition helps.** By Hartogs’s extension theorem, every holomorphic function on the remainder extends to the original domain. So a small ball around a boundary point of the hole is a common extension patch, which the definition forbids (our own).

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “any function holomorphic on U ∖ K can be analytically continued to U”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic convexity preserves products

**Remember:** A product hull sits inside the product of the factor hulls.

*True by definition.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** The holomorphic hull of a compact set K in a domain D is the set of x ∈ D with \|f(x)\| ≤ max<sub>K</sub> \|f\| for every holomorphic f on D. By the Cartan–Thullen theorem, D is a domain of holomorphy exactly when every compact set has a compact hull (our own).

**Problem.** The product of two domains of holomorphy is a domain of holomorphy.

**How the definition helps.** Functions of one factor alone are holomorphic on the product, so the hull of K lies in the product of the hulls of its two projections. That product is compact and the hull is closed in the product domain, so the hull is compact (our own).

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “Ω₁ × Ω₂ is a domain of holomorphy.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Holomorphic hulls preserve boundary distance

**Remember:** Bounds on all holomorphic functions also bound their derivatives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** The holomorphic hull of a compact set K in a domain D is the set of x in D with \|f(x)\| ≤ max<sub>K</sub> \|f\| for every holomorphic f on D. Derivatives of holomorphic functions are holomorphic, so hull points obey the same bound for every derivative (our own).

**Problem.** In a proper domain of holomorphy, a nonempty compact set and its holomorphic hull have equal distances to the boundary in the maximum norm.

**How the definition helps.** Cauchy estimates on K bound every derivative, and the hull inherits these bounds. So at each hull point every Taylor series converges on the polydisk of radius r, for any r below the distance from K to the boundary. If that polydisk left the domain, every function would extend across the boundary, which a domain of holomorphy forbids (our own).

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “The equivalence of 1, 2, 3 is the Cartan–Thullen theorem.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Logarithmic nonconvexity forces holomorphic extension

**Remember:** A power series converges on a log-convex set, filling every dent.

*Rules out counterexamples.* MSC 32D05 (Domains of holomorphy), 32A05. arXiv math.CV. Level 3: graduate.

**Definition.** A complete Reinhardt domain D contains, with each point z, every point w with \|w<sub>j</sub>\| ≤ \|z<sub>j</sub>\| for all j. Its logarithmic image is the set of vectors (log\|z<sub>1</sub>\|, …, log\|z<sub>n</sub>\|) for points of D with no zero coordinate. A power series about 0 converges absolutely on a set whose logarithmic image is convex (our own).

**Problem.** A complete Reinhardt domain with a nonconvex logarithmic image cannot be a domain of holomorphy.

**How the definition helps.** By Cauchy’s formula on products of circles, every holomorphic function on D is one power series about 0 converging on D. Its convergence set has convex logarithmic image by Hölder’s inequality, so every function extends to the domain over the convex hull (our own). A nonconvex image makes this domain strictly larger, so D is not a domain of holomorphy.

**Wikipedia:** [Function of several complex variables](https://en.wikipedia.org/wiki/Function_of_several_complex_variables). It says: “is a logarithmically convex Reinhardt domain with centre a = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Nonextendable functions are generic

**Remember:** Every patch has a blocker, so most functions block every patch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain of holomorphy D has no common extension across its boundary. For each ball B meeting the boundary and each nonempty open V in B ∩ D, some holomorphic function on D does not extend from V to B.

**Problem.** On a domain of holomorphy, functions with no local holomorphic extension form a dense countable intersection of open sets for uniform convergence on compact subsets.

**How the definition helps.** For each ball and open set, the functions that extend form a proper subspace, because some function does not extend. With countably many rational balls and integer bounds on the extension, each such set is closed with empty interior by Montel’s theorem (our own). Baire’s theorem makes the complement of their union a dense countable intersection of open sets.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “There exists a function holomorphic on Ω that cannot be analytically continued beyond Ω.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Riemann domains allow multiple sheets

**Remember:** Keep the continuation sheet as well as the coordinates.

*Makes the theorem clean to state or prove.* MSC 32D10 (Envelopes of holomorphy), 32D26. arXiv math.CV. Level 3: graduate.

**Definition.** A Riemann domain over ℂⁿ is a connected complex manifold with a holomorphic map to ℂⁿ that is locally biholomorphic. Unlike a subset of ℂⁿ, it can have several points, on different sheets, over the same point of ℂⁿ.

**Problem.** Every domain in ℂⁿ has an envelope of holomorphy, the largest Riemann domain to which all its holomorphic functions continue. This envelope can have several points over the same point of ℂⁿ.

**How the definition helps.** Several sheets let continuations of one function take different values over the same point, so the envelope must be a Riemann domain rather than a subset (our own). Hazra and Porten construct a domain whose envelope has several sheets above a circle. The existence proof glues all continuations into such a space and checks that it is Hausdorff (our own).

**Paper or page:** [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1). It says: “the envelope of holomorphy of D=X+iBᵣ universally covers a circle T⊂ℝ²∖X.”

**Sources:**

- [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1)

### Tube envelopes fill convex hulls

**Remember:** Fix the real base and allow every imaginary displacement.

*Rules out counterexamples.* MSC 32D10 (Envelopes of holomorphy), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** The tube over a connected open set B in ℝⁿ is B + iℝⁿ: all points whose real part lies in B, with any imaginary part.

**Problem.** Every holomorphic function on a tube domain extends to the tube over the convex hull of its real base. This larger tube is its envelope of holomorphy, the largest space of common continuation.

**How the definition helps.** Bochner’s tube theorem extends every holomorphic function on the tube to the tube over the convex hull of B. A convex tube is a domain of holomorphy, so no larger continuation exists (our own). The full imaginary directions matter (our own): Hazra and Porten give a truncated tube whose envelope has several sheets above a circle.

**Wikipedia:** [Bochner's tube theorem](https://en.wikipedia.org/wiki/Bochner%27s_tube_theorem). It says: “every function holomorphic on a tube domain in ℂⁿ can be extended to the convex hull of this domain.”

**Paper or page:** [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1). It says: “the envelope of holomorphy of D=X+iBᵣ universally covers a circle T⊂ℝ²∖X.”

**Sources:**

- [Bochner, Analytic and Meromorphic Continuation by Means of Green’s Formula (1943)](https://doi.org/10.2307/1969103)

### Pseudoconvexity excludes shell extension failures

**Remember:** Fill the domain with compact sublevels of a plurisubharmonic function.

*Rules out counterexamples.* MSC 32D15 (Continuation of analytic objects in several complex variables), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A domain is pseudoconvex if it has a continuous plurisubharmonic exhaustion: a function, subharmonic on every complex line, whose sublevel sets are relatively compact.

**Problem.** In a bounded pseudoconvex domain in ℂⁿ, take a weight exp(−φ) with φ plurisubharmonic. Every holomorphic function on a hyperplane slice that is square-integrable for this weight extends holomorphically with finite weighted norm.

**How the definition helps.** The Ohsawa–Takegoshi theorem solves the weighted ∂̄-equation on the sublevel sets of the exhaustion and gives the extension. Without pseudoconvexity it fails: on the shell 1 &lt; \|z\| &lt; 2 in ℂ², the function 1/z₂ on the slice z₁ = 0 is square-integrable (our own). It cannot extend, because Hartogs’s theorem would fill the hole and make 1/z₂ holomorphic on a disc (our own).

**Paper or page:** [A Hilbert Bundles Description of Complex Brunn-Minkowski Theory](https://arxiv.org/abs/2305.07476v1). It says: “Let Ω be a pseudoconvex domain in ℂⁿ”

**Sources:**

- [T. Ohsawa and K. Takegoshi, On the extension of L² holomorphic functions (1987)](https://doi.org/10.1007/BF01166457)

### Compact support simplifies Hartogs extension

**Remember:** Subtract a compactly supported correction and keep the exterior values.

*Makes the theorem clean to state or prove.* MSC 32D20 (Removable singularities in several complex variables), 32W05. arXiv math.CV. Level 3: graduate.

**Definition.** The first compactly supported Dolbeault group of ℂⁿ consists of smooth compactly supported ∂̄-closed (0,1)-forms ω, modulo ∂̄u for smooth compactly supported u. When it vanishes, every such ω equals ∂̄u for a u that is zero far away (our own).

**Problem.** Let n ≥ 2 and let K be a compact subset of a domain D in ℂⁿ with D ∖ K connected. Every holomorphic function on D ∖ K extends holomorphically to D.

**How the definition helps.** Multiply f by a cutoff χ that is zero near K and one off a compact neighborhood of K; then ω = ∂̄(χf) is a compactly supported closed (0,1)-form (our own). For n ≥ 2 the group vanishes, so ω = ∂̄u with u compactly supported, holomorphic off the support of ω and zero on its unbounded part (our own). Then χf − u is holomorphic on D and equals f on an open set, so it extends f by the identity theorem (our own).

**Wikipedia:** [Hartogs's extension theorem](https://en.wikipedia.org/wiki/Hartogs%27s_extension_theorem). It says: “there exists a smooth and compactly supported function η on ℂⁿ with ∂̄η = ω.”

**Sources:**

- [Ehrenpreis, A new proof and an extension of Hartog’s theorem (1961)](https://doi.org/10.1090/s0002-9904-1961-10661-7)

### Stein acyclicity survives finite maps

**Remember:** Push down the sheaf to test Steinness upstairs.

*True by definition. Confidence: medium.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 3: graduate.

**Definition.** By Cartan’s criterion, a complex space is Stein exactly when every coherent analytic sheaf on it, one with finite local presentations, has zero cohomology in all positive degrees (our own).

**Problem.** The source of a finite holomorphic map to a Stein space is Stein. Here finite means proper with finite fibers.

**How the definition helps.** A finite map has a coherent direct image, by the finite mapping theorem, and no higher direct images, so cohomology upstairs equals cohomology downstairs (our own). Downstairs it vanishes because the target is Stein, so the source passes the test (our own).

**nLab:** [Cartan theorem B](https://ncatlab.org/nlab/show/Cartan+theorem+B). It says: “all the positive-degree abelian sheaf cohomology groups of Σ with coefficients in A vanish”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)

### Tangencies require more than values

**Remember:** Agree modulo I + J, not just at the common points.

*Rules out counterexamples.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 3: graduate.

**Definition.** Two closed analytic subspaces with ideal sheaves I and J meet in the analytic intersection, whose ideal is I + J. Two functions agree on it when their local representatives differ by an element of I + J.

**Problem.** Two holomorphic functions on closed analytic subspaces of a Stein space extend to one global function exactly when their restrictions to the analytic intersection agree.

**How the definition helps.** Agreement modulo I + J is exactly what lets two functions glue to one function on the union, whose ideal is I ∩ J (our own). Cartan’s theorem B then extends that function to the whole Stein space (our own). On y = 0 and y = x², the functions 0 and x agree at the origin but not modulo (y, x²), so they do not glue (our own).

**Paper or page:** [Stein spaces and Stein algebras](https://arxiv.org/abs/2410.05521v1). It says: “Let S be a complex space. Let S₁ and S₂ be closed complex subspaces of S. Set T:=S₁∩S₂. The following diagram of sheaves on S is exact:”

**Sources:**

- [Olivier Benoist, Stein spaces and Stein algebras (2026)](https://doi.org/10.4064/ba260107-1-3)

### Polynomial convexity excludes circle obstructions

**Remember:** Separate each outside point by a polynomial larger there than anywhere inside.

*Rules out counterexamples.* MSC 32E20 (Polynomial convexity, rational convexity, meromorphic convexity in several complex variables), 32E30. arXiv math.CV. Level 3: graduate.

**Definition.** A compact set K in ℂⁿ is polynomially convex if for each point z outside K some polynomial p has \|p(z)\| &gt; max<sub>K</sub> \|p\|.

**Problem.** Every function holomorphic near a polynomially convex compact set in ℂⁿ can be approximated there uniformly by polynomials.

**How the definition helps.** The Oka–Weil theorem gives polynomial approximation on polynomially convex sets (our own). The condition removes the unit circle, whose polynomial hull is the closed disc by the maximum principle (our own). On the circle 1/z is no uniform limit of polynomials, since its integral is 2πi and theirs is zero (our own).

**Wikipedia:** [Oka–Weil theorem](https://en.wikipedia.org/wiki/Oka%E2%80%93Weil_theorem). It says: “every holomorphic function in an open neighborhood of K can be approximated uniformly on K”

**Sources:** none listed. No primary source with a working link was found.

### Retractions preserve extension norms

**Remember:** Compose with the retraction to extend without taking new values.

*Makes the theorem clean to state or prove.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32H02. arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic retract of the bidisk is the image V of a holomorphic map r from the bidisk to itself that fixes each point of V. The set V is relatively polynomially convex when each point of the bidisk outside V has a polynomial whose modulus there exceeds its supremum on V.

**Problem.** Let V be a nonempty relatively polynomially convex subset of the bidisk 𝔻². Every polynomial restricted to V extends to a holomorphic function on 𝔻² with the same supremum norm exactly when V is a holomorphic retract.

**How the definition helps.** If r is a retraction, p ∘ r extends p from V and takes only values that p takes on V, so the norm is unchanged (our own). Agler and McCarthy prove the hard converse, building a retraction from norm-preserving extensions.

**Paper or page:** [Norm Preserving Extensions of Holomorphic Functions Defined on Varieties in ℂⁿ](https://arxiv.org/abs/2204.08517v1). It says: “Let V be a nonempty relatively polynomially convex subset of 𝔻². Every polynomial has a norm preserving extension to 𝔻² if and only if V is a holomorphic retract of 𝔻².”

**Sources:**

- [Agler and McCarthy, Norm preserving extensions of holomorphic functions from subvarieties of the bidisk (2003)](https://doi.org/10.4007/annals.2003.157.289)

### Runge approximation composes

**Remember:** Approximate in the middle space, then in the largest one.

*True by definition.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein open subset U of a Stein space X is Runge in X if holomorphic functions on X approximate every holomorphic function on U. The approximation is uniform on each compact subset of U.

**Problem.** If V is Runge in U and U is Runge in X, then V is Runge in X.

**How the definition helps.** Approximate a function on V by one on U, then that one by one on X, on the same compact set; the errors add (our own).

**Paper or page:** [Étale cohomology of algebraic varieties over Stein compacta](https://arxiv.org/abs/2305.06054v3). It says: “The image of the restriction map 𝒪(S) → 𝒪(Ω) is dense, and Ω is Stein.”

**Sources:**

- [Olivier Benoist, Étale cohomology of algebraic varieties over Stein compacta (2025)](https://doi.org/10.1007/s00222-025-01323-2)

### Runge chains stay Stein

**Remember:** Approximate along the chain so the earlier hulls cannot grow.

*Makes the theorem clean to state or prove.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32Q28, 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein open subset U of a Stein space X is Runge in X if holomorphic functions on X approximate every holomorphic function on U. The approximation is uniform on each compact subset of U.

**Problem.** An increasing countable union of Stein manifolds is Stein if each open inclusion is Runge.

**How the definition helps.** Runge inclusions let a function on one stage be approximated by functions on later stages, and with summable errors the limit is holomorphic on the whole union (our own). So global functions on the union still separate points, and the hull of each compact set stays compact (our own). These two properties characterize Stein manifolds (our own).

**Paper or page:** [Étale cohomology of algebraic varieties over Stein compacta](https://arxiv.org/abs/2305.06054v3). It says: “The image of the restriction map 𝒪(S) → 𝒪(Ω) is dense, and Ω is Stein.”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)
- [Olivier Benoist, Étale cohomology of algebraic varieties over Stein compacta (2025)](https://doi.org/10.1007/s00222-025-01323-2)

### Pseudoconvexity turns the domain of holomorphy problem into a local test

**Remember:** Fill the domain with compact sublevels of a function subharmonic on lines.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32E40 (The Levi problem), 32U05, 32U10. arXiv math.CV. Level 3: graduate.

**Definition.** A domain G in ℂⁿ is pseudoconvex if it has a continuous exhaustion function, one with relatively compact sublevel sets, that is subharmonic on every complex line. This can be checked near each boundary point (our own).

**Problem.** A domain in ℂⁿ is a domain of holomorphy, one carrying a holomorphic function that cannot be continued beyond it, exactly when it is pseudoconvex.

**How the definition helps.** Being a domain of holomorphy is global, while pseudoconvexity is a local test at the boundary. On a domain of holomorphy, −log of the distance to the boundary is plurisubharmonic, which gives the easy direction. The converse is the Levi problem, solved by Oka and later by Hörmander’s L² methods (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity), [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy), [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “Pseudoconvex sets are important, as they allow for classification of domains of holomorphy.”

**Sources:**

- [H. Grauert, On Levi's Problem and the Imbedding of Real-Analytic Manifolds, Annals of Mathematics 68 (1958)](https://doi.org/10.2307/1970257)
- [K. Oka, Sur les fonctions analytiques de plusieurs variables VI. Domaines pseudoconvexes, Tohoku Mathematical Journal 49 (1942)](https://www.nara-wu.ac.jp/aic/gdb/nwugdb/oka/ko_ron/f/n06/p001.html)

### Averaging discs gives convex balls

**Remember:** Put both discs on the same parameter before averaging them.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Lempert function at (x, y) is the least hyperbolic distance from a to b over holomorphic discs f in the domain with f(a) = x and f(b) = y. On a bounded convex domain it equals the Kobayashi distance. Discs into a convex domain can be averaged point by point (our own).

**Problem.** Every Kobayashi ball in a bounded convex domain is Euclidean convex.

**How the definition helps.** Join the center c to two points of the ball by discs f and g that reach them within the radius (our own). Reparametrize so that f(0) = g(0) = c and both reach their endpoints at the same parameter. Then any convex combination of f and g is a disc of the same cost, and Lempert’s theorem turns this into a Kobayashi bound (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Proposition 2.3.46 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)
- [László Lempert, La métrique de Kobayashi et la représentation des domaines sur la boule, Theorem 1 (1981)](https://www.numdam.org/item/BSMF_1981__109__427_0/)

### Bergman length dominates Carathéodory length

**Remember:** Multiply a disc map by the evaluation kernel to test its derivative.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded domain with Bergman kernel K, the Bergman length of a tangent vector v at z is the supremum of \|df(z)v\|/√K(z,z). The supremum runs over holomorphic f of L² norm 1 with f(z) = 0, such as a bounded function vanishing at z times K(·, z), rescaled (our own).

**Problem.** On a bounded domain, Bergman length dominates Carathéodory length, the supremum of \|dh(z)v\| over holomorphic maps h into the unit disc with h(z) = 0.

**How the definition helps.** For a disc map h with h(z) = 0, the function hK(·,z)/√K(z,z) has norm at most 1 and vanishes at z. Its derivative applied to v is dh(z)v·√K(z,z), which gives the bound (our own). That this supremum is the usual metric from log K(z,z) is a separate kernel computation (our own).

**Paper or page:** [Local Rigidity of the Bergman Metric and of the Kähler Carathéodory Metric](https://arxiv.org/abs/2408.09572v2). It says: “BΩ(z, v) ≥ CΩ(z, v)”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory distance ignores analytic holes

**Remember:** If all tests extend across a hole, the supremum does not change.

*Rules out counterexamples.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Carathéodory pseudodistance between two points is the supremum of their hyperbolic distances after mapping by holomorphic maps into the unit disc. These test maps are bounded, so by Riemann’s extension theorem they extend across any proper closed analytic subset (our own).

**Problem.** Removing a proper closed analytic subset from a connected complex manifold leaves the Carathéodory pseudodistance unchanged on the remaining points.

**How the definition helps.** Every test map on the complement extends to the whole manifold, and the maximum principle keeps its values in the open disc (our own). So both spaces have the same tests and the same supremum. A hole that is not analytic can change it: removing \|z₁\| ≤ 1 from ℂ² gives the bounded test 1/z₁.

**Wikipedia:** [Carathéodory metric](https://en.wikipedia.org/wiki/Carath%C3%A9odory_metric). It says: “d(x, y) = sup { ρ(f(x), f(y)) \| f : B → Δ is holomorphic }.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory distance solves two-point interpolation

**Remember:** The largest distance seen by a disc is the interpolation limit.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Carathéodory pseudodistance between two points of a domain is the supremum of the Poincaré (hyperbolic) distance between their images under holomorphic maps into the unit disc.

**Problem.** A holomorphic map can take two distinct domain points to prescribed disc values exactly when their Poincaré distance is at most the source Carathéodory pseudodistance.

**How the definition helps.** By definition no map separates the two points more than the supremum. Montel’s theorem gives a map attaining it, and multiplying it by constants of modulus at most one gives every smaller separation (our own). Disc automorphisms then move the two images to the prescribed values (our own).

**Paper or page:** [Pick interpolation and invariant functions](https://arxiv.org/abs/2309.04796). It says: “For two distinct points $z<sub>1</sub>,z<sub>2</sub>\\in \\Omega $ we have \\begin{align}  \\mathscr {D}\_\\Omega (z<sub>1</sub>,z<sub>2</sub>)=\\mathscr {D}<sub>2</sub>=\\mathbb {D}<sup>2</sup> <sub>c<sup>\*\_\\Omega</sup> (z<sub>1</sub>,z<sub>2</sub>)</sub>. \\end{align}”

**Sources:**

- [Pick interpolation and invariant functions, Theorem 2.3](https://arxiv.org/abs/2309.04796)

### Compactness collapses Carathéodory distance

**Remember:** A target disc sees nothing when every holomorphic function is constant.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Carathéodory pseudodistance between two points is the supremum of their hyperbolic distances after mapping by holomorphic maps into the unit disc. So it sees only bounded holomorphic functions (our own).

**Problem.** On every connected compact complex manifold the Carathéodory pseudodistance vanishes identically, even if the manifold is Kobayashi hyperbolic.

**How the definition helps.** On a connected compact manifold every holomorphic map into the disc is constant, by the maximum modulus principle, so every distance in the supremum is zero. A compact Riemann surface of genus at least two is still Kobayashi hyperbolic, since its universal cover is the disc (our own).

**Wikipedia:** [Carathéodory metric](https://en.wikipedia.org/wiki/Carath%C3%A9odory_metric). It says: “d(x, y) = sup { ρ(f(x), f(y)) \| f : B → Δ is holomorphic }.”

**Sources:** none listed. No primary source with a working link was found.

### Disk chains lift through coverings

**Remember:** A disk lifts once you pick its starting sheet.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32D26. arXiv math.CV. Level 3: graduate.

**Definition.** The Kobayashi pseudodistance from x to y is the infimum of the total cost of chains of holomorphic disks from x to y. Each link is a holomorphic map from the unit disk through two consecutive points, costing the hyperbolic distance between their chosen preimages.

**Problem.** For a holomorphic covering map between connected complex manifolds, fix a lift of the starting point. The Kobayashi distance downstairs equals the infimum of the distances from this lift to all lifts of the endpoint.

**How the definition helps.** Each disk lifts through the covering with the same cost, because the unit disk is simply connected (our own). Lifting link after link turns a chain downstairs into a chain upstairs from the fixed lift to some lift of the endpoint (our own). Projecting a chain upstairs gives a chain downstairs of the same cost, which gives the other inequality (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “A complex space is Kobayashi hyperbolic if and only if its universal covering space is Kobayashi hyperbolic.”

**Sources:** none listed. No primary source with a working link was found.

### Disk chains restore triangle inequalities

**Remember:** Join two chains to get a chain.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** A link is a holomorphic map from the unit disk through two points, costing the hyperbolic distance between their chosen preimages. The Lempert function is the least cost of one link, and the Kobayashi pseudodistance is the least total cost of a finite chain of links.

**Problem.** The Kobayashi pseudodistance always satisfies the triangle inequality. The single disk Lempert function can fail it.

**How the definition helps.** A chain from x to y followed by a chain from y to z is a chain from x to z, so infima obey the triangle inequality (our own). One link cannot always do the work of two, so the Lempert function can fail it (our own). Lempert’s theorem shows that the two agree on bounded convex domains (our own).

**Paper or page:** [Quasi Triangle Inequality for the Lempert function](https://arxiv.org/abs/2503.19754v2). It says: “The (unbounded version of the) Lempert function l<sub>D</sub> on a domain D⊂ℂᵈ does not usually satisfy the triangle inequality”

**Sources:**

- [Quasi Triangle Inequality for the Lempert function](https://arxiv.org/abs/2503.19754v2)
- [Lempert, La métrique de Kobayashi et la représentation des domaines sur la boule (1981)](https://doi.org/10.24033/bsmf.1948)

### One exact distance certifies geodesics

**Remember:** A geodesic disc preserves the hyperbolic distance between every pair of parameters.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic map φ from the unit disc into a domain is a Carathéodory geodesic if it keeps every distance. That is, for all w and z, the Carathéodory distance between φ(w) and φ(z) equals the Poincaré distance between w and z. The Carathéodory distance is the supremum of hyperbolic distances seen through holomorphic maps into the disc, so it is never larger (our own).

**Problem.** A holomorphic disc in a finite-dimensional complex domain is a Carathéodory complex geodesic if it preserves the distance of one distinct pair.

**How the definition helps.** Montel’s theorem gives a disc map f attaining the Carathéodory distance at the given pair (our own). Then f ∘ φ maps the disc to itself and preserves one distance, so Schwarz–Pick makes it an automorphism. So for all w and z, the distance between φ(w) and φ(z) is at least the Poincaré distance between f(φ(w)) and f(φ(z)), which is that between w and z.

**Wikipedia:** [Complex geodesic](https://en.wikipedia.org/wiki/Complex_geodesic). It says: “d(f(w), f(z)) = ρ(w, z) for all points w and z in Δ.”

**Sources:** none listed. No primary source with a working link was found.

### Projective evaluation makes Bergman metrics Kähler

**Remember:** Pull back Fubini–Study along evaluation; pulled-back Kähler forms stay closed.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space consists of the square-integrable holomorphic functions on the domain. The Bergman metric pulls back the Fubini–Study metric along the holomorphic map sending z to the line spanned by evaluation at z, in the projective dual space.

**Problem.** On a bounded domain in ℂⁿ this construction gives a Kähler metric, whose associated two-form is closed.

**How the definition helps.** Pulling back a closed positive form along a holomorphic map keeps it closed, and keeps it positive when the derivative is injective. On a bounded domain, the constant and coordinate functions lie in the Bergman space, so evaluation detects every tangent direction (our own). The norm of evaluation is √K(z,z), so the form has the usual potential log K(z,z) (our own).

**Wikipedia:** [Bergman metric](https://en.wikipedia.org/wiki/Bergman_metric). It says: “The Bergman metric is in fact a positive definite matrix at each point if G is a bounded domain.”

**Sources:**

- [Kobayashi, Geometry of bounded domains (1959)](https://doi.org/10.1090/s0002-9947-1959-0112162-5)

### Tautness gives extremal discs

**Remember:** A fixed center keeps a sequence of almost extremal discs from escaping.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold X is taut if every sequence of holomorphic maps from the unit disc into X has a subsequence that converges locally uniformly or leaves every compact set. The Kobayashi length of a vector v at x is the infimum of \|a\| over discs f with f(0) = x and a f′(0) = v.

**Problem.** On a taut complex manifold every infinitesimal Kobayashi length is realized by a holomorphic disc and a scalar.

**How the definition helps.** Discs with f(0) = x cannot leave every compact set, so tautness gives a locally uniformly convergent subsequence of near-optimal discs. Their scalars are bounded, so they converge too (our own). Cauchy’s formula makes f′(0) converge, so the limit disc and scalar attain the infimum (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi infinitesimal pseudometric is a Finsler pseudometric”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, proof of Proposition 2.3.34 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### The largest disc-contracting distance makes every holomorphic map distance-decreasing

**Remember:** Define the distance by discs, and holomorphic maps never stretch it.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32Q45. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The Kobayashi pseudometric on a complex space X is the largest pseudometric for which every holomorphic map from the unit disc, with its Poincaré metric, into X is distance-decreasing. X is Kobayashi hyperbolic if this pseudometric is a true metric.

**Problem.** Every holomorphic map between complex spaces is distance-decreasing for their Kobayashi pseudometrics. So every holomorphic map from ℂ to a hyperbolic space is constant.

**How the definition helps.** A disc in X followed by a holomorphic map f to Y is a disc in Y. So the pullback of d<sub>Y</sub> along f is a pseudometric on X that discs contract, and maximality gives d<sub>Y</sub>(f(x), f(y)) ≤ d<sub>X</sub>(x, y). The pseudometric of ℂ is zero, because ℂ contains arbitrarily large discs, which gives the second claim.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X such that dₓ(f(x),f(y)) ≤ ρ(x,y), for all holomorphic maps f from the unit disc D to X”

**Sources:**

- [S. Kobayashi, Invariant distances on complex manifolds and holomorphic mappings, Journal of the Mathematical Society of Japan 19 (1967)](https://doi.org/10.2969/jmsj/01940460)

### Weakly vanishing kernels give Bergman completeness

**Remember:** Weakly vanishing unit vectors cannot converge, even as lines.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** On a bounded domain, the Bergman kernel vector k<sub>z</sub> represents evaluation at z on the square-integrable holomorphic functions. The unit vectors k<sub>z</sub>/‖k<sub>z</sub>‖ vanish weakly at the boundary if their inner product with each fixed function tends to zero as z approaches the boundary.

**Problem.** On a bounded domain this weak vanishing makes the Bergman metric complete, so every Cauchy sequence for its distance converges inside.

**How the definition helps.** The Bergman metric pulls back the Fubini–Study metric along z ↦ \[k<sub>z</sub>\], so a Cauchy sequence gives Cauchy lines, which converge in projective Hilbert space (our own). After phase changes the unit vectors converge in norm, which weak vanishing forbids near the boundary (our own). So the sequence stays in a compact set and converges, since the metric induces the usual topology.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Kobayashi, Geometry of bounded domains (1959)](https://doi.org/10.1090/S0002-9947-1959-0112162-5)

### Beltrami graphs expose integrability

**Remember:** The graph is integrable when its tangent brackets stay inside it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A smooth Beltrami differential μ maps antiholomorphic tangent vectors linearly to holomorphic ones. Its graph E, the vectors v + μ(v), proposes new antiholomorphic directions when E and its conjugate are complementary. Then E comes from complex coordinates exactly when brackets of vector fields in E stay in E, by the Newlander–Nirenberg theorem (our own).

**Problem.** When the graph and its conjugate are complementary, the graph comes from local complex coordinates exactly when ∂̄μ + ½\[μ,μ\] = 0.

**How the definition helps.** Writing out the bracket condition for fields v + μ(v) gives one equation for μ: its linear part is ∂̄μ and its quadratic part is ½\[μ,μ\] (our own). The Newlander–Nirenberg theorem supplies coordinates once brackets stay in the graph (our own).

**nLab:** [Maurer-Cartan equation](https://ncatlab.org/nlab/show/Maurer-Cartan+equation). It says: “the solutions in some contexts parametrize infinitesimal deformations”

**Sources:**

- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Brackets detect second-order obstructions

**Remember:** The ε² term must cancel the bracket of the ε term.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A second-order Maurer–Cartan solution is μ = εα + ε²β, where α and β are smooth (0,1)-forms valued in the holomorphic tangent bundle. It satisfies ∂̄μ + ½\[μ,μ\] = 0 modulo ε³, using the bracket extending the vector field bracket.

**Problem.** A first-order solution α extends to second order exactly when \[α,α\] represents zero in the second cohomology of holomorphic vector fields.

**How the definition helps.** The ε coefficient says ∂̄α = 0, and the ε² coefficient says ∂̄β = −½\[α,α\] (our own). Such β exists exactly when \[α,α\] is ∂̄-exact, that is, zero in cohomology (our own). Kodaira–Spencer theory matches these solutions, up to coordinate change, with formal deformations (our own).

**nLab:** [Deligne groupoid](https://ncatlab.org/nlab/show/Deligne+groupoid). It says: “MC(𝔤) = {x ∈ 𝔤¹ \| dx + ½\[x,x\] = 0}”

**Sources:** none listed. No primary source with a working link was found.

### Dual numbers linearize complex deformations

**Remember:** Square-zero parameters turn changes of charts into addition.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A first-order deformation of a complex manifold X glues its charts, extended by the dual numbers ℂ\[ε\]/(ε²), so that setting ε = 0 recovers X. Because ε² = 0, each change of chart is the identity plus ε times a holomorphic vector field (our own).

**Problem.** First-order deformations of a compact complex manifold X, up to isomorphisms respecting that identification, correspond to first cohomology classes of its holomorphic vector fields.

**How the definition helps.** Composing two such chart changes adds their vector fields, because ε² = 0 (our own). Compatibility on triple overlaps makes the vector fields a 1-cocycle, and changing charts adds a coboundary (our own). So isomorphism classes match first cohomology classes of holomorphic vector fields (our own).

**Wikipedia:** [Kodaira–Spencer map](https://en.wikipedia.org/wiki/Kodaira%E2%80%93Spencer_map). It says: “gives this 1-cochain as a 1-cocycle, hence a class”

**Sources:** none listed. No primary source with a working link was found.

### Fixed loci give Enriques deformations

**Remember:** Keep the cover involution by keeping its parameter fixed.

*Makes the theorem clean to state or prove.* MSC 32G05 (Deformations of complex structures). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex Enriques surface Y is the quotient of a K3 surface X by a fixed-point-free involution, a symmetry of order two. The involution acts on the local deformation space of X. Its fixed germ consists of the nearby parameters it preserves, over which the involution survives (our own).

**Problem.** The local deformation space of Y is isomorphic to this fixed germ, and it is smooth.

**How the definition helps.** Deformations of Y are exactly the deformations of X that keep the involution, which are those over the fixed parameters (our own). The deformation space of a K3 surface is smooth, and averaging coordinates makes the involution linear there, so its fixed set is smooth (our own).

**Paper or page:** [Deformations of primitive Enriques varieties](https://arxiv.org/abs/2509.14014v1). It says: “The space Defˡᵗ(Y) ≃ B of locally trivial deformations of Y is smooth”

**Sources:** none listed. No primary source with a working link was found.

### Kodaira–Spencer maps commute with pullback

**Remember:** Changing the base first just changes the input tangent vector.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a smooth proper holomorphic family over a base S, the Kodaira–Spencer map sends a tangent vector of S to a first cohomology class on the fiber. Lift the vector locally to the total space; the differences of lifts on overlaps are holomorphic vector fields forming the cocycle.

**Problem.** After pullback along a holomorphic base map, the Kodaira–Spencer map is the original map composed with the derivative of that base map.

**How the definition helps.** Pullback along g: S′ → S sends a tangent vector w on S′ to dg(w) on S (our own). Lifts of dg(w) give lifts of w on the pulled-back family, so the differences of lifts and the classes are the same (our own).

**Wikipedia:** [Kodaira–Spencer map](https://en.wikipedia.org/wiki/Kodaira%E2%80%93Spencer_map). It says: “which gives a 1-cocycle on M with values in its tangent bundle”

**Sources:**

- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Local triviality removes smoothing directions

**Remember:** Fix each local model and deform only how they fit together.

*Rules out counterexamples. Confidence: medium.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A first-order deformation of X is a flat family over the dual numbers ℂ\[ε\]/(ε²) whose special fiber is identified with X. It is locally trivial when X is covered by open sets over which the family is a product, so only the gluing of these product charts can change.

**Problem.** Locally trivial first-order deformations of X, up to isomorphism respecting the identification, correspond to classes in H¹(X, T<sub>X</sub>), the first cohomology of holomorphic vector fields.

**How the definition helps.** Since each local piece is a product, a deformation is just a new gluing, and gluings are measured by vector fields (our own). Two product charts differ on an overlap by the identity plus ε times a vector field; triple overlaps give a cocycle, and changing charts adds a coboundary (our own). The node deformation xy = ε has no product chart near the node, so it is excluded (our own).

**Paper or page:** [Unobstructedness of deformations for a d-semistable central corank one boundary point](https://arxiv.org/abs/2410.10583v2). It says: “X has a non-locally trivial first order deformation”

**Sources:** none listed. No primary source with a working link was found.

### Normal sequences remove coordinate motion

**Remember:** Motions of X inside space, modulo motions of space itself.

*True by definition. Confidence: medium.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** For a smooth hypersurface X in a complex manifold M, the normal bundle N is T<sub>M</sub> restricted to X modulo T<sub>X</sub>, so it lists the directions in which X can move inside M. The normal sequence is 0 → T<sub>X</sub> → T<sub>M</sub>\|<sub>X</sub> → N → 0. Its connecting map sends each motion of X to the deformation of X it causes, and motions by ambient vector fields cause none.

**Problem.** For a smooth quintic threefold in complex projective four-space, first-order deformations are degree-five polynomials modulo the defining polynomial and its infinitesimal projective coordinate changes.

**How the definition helps.** The definition makes deformations of X equal to motions of X modulo ambient motions, once the connecting map is onto (our own). Here motions are sections of N = 𝒪(5)\|<sub>X</sub>, which are degree-five polynomials modulo f, and ambient motions are infinitesimal coordinate changes (our own). The map is onto because H¹(X, T\_ℙ⁴\|<sub>X</sub>) vanishes, by the Euler sequence (our own).

**Paper or page:** [The Kodaira-Spencer map for minimal toric hypersurfaces](https://arxiv.org/abs/2203.01092v4). It says: “ker(κℙ,𝑓) ≅ Lie Aut(ℙ)”

**Sources:** none listed. No primary source with a working link was found.

### Semiuniversality gives unique base germs

**Remember:** Every deformation is a pullback, with a unique first-order direction.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A versal family of deformations of X₀ induces every nearby deformation by pulling back along some map of base germs. It is semiuniversal when the derivative of that map at the base point is unique, so first-order deformations match tangent vectors of the base one to one.

**Problem.** Any two semiuniversal families of a compact complex manifold have isomorphic base germs, meaning their bases agree after shrinking around the chosen points.

**How the definition helps.** Versality gives base maps both ways, and first-order uniqueness makes their derivatives inverse to each other (our own). A self-map of a germ that is bijective on tangent spaces is an isomorphism, so both composites are isomorphisms (our own).

**Paper or page:** [Calabi-Yau Foliations and Deformations](https://arxiv.org/abs/2412.07566v1). It says: “For any compact complex manifold X₀, there exists a versal family of deformations parametrized by an analytic space germ (R,0).”

**Sources:**

- [M. Kuranishi, On the Locally Complete Families of Complex Analytic Structures](https://doi.org/10.2307/1970211)

### Tangent fields classify pair deformations

**Remember:** Use vector fields tangent to the divisor when changing pair charts.

*True by definition.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** For a smooth hypersurface D in a complex manifold X, logarithmic vector fields are the holomorphic vector fields tangent to D, sending each local function vanishing on D to another such function. They are exactly the infinitesimal coordinate changes that keep D in place.

**Problem.** For a compact pair (X,D), first-order deformations of the pair, up to isomorphisms respecting the identification with (X,D), correspond to first cohomology classes of logarithmic vector fields.

**How the definition helps.** A first-order deformation of the pair glues local product charts by coordinate changes that keep D in place, and these are logarithmic vector fields (our own). Such charts exist because a smooth hypersurface is locally a coordinate hyperplane (our own). Overlaps give cocycles, and changing charts adds coboundaries (our own).

**Paper or page:** [Smoothing Gorenstein toric Fano 3-folds](https://arxiv.org/abs/2412.06500v1). It says: “Ext¹(Ωₓ(log D), 𝒪ₓ) is the tangent space of Def(X, D)”

**Sources:** none listed. No primary source with a working link was found.

### Two-forms identify K3 period derivatives

**Remember:** Record the line of the two-form in one fixed lattice.

*Makes the theorem clean to state or prove.* MSC 32G05 (Deformations of complex structures), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A marking of a K3 surface identifies its second integral cohomology isometrically with one fixed K3 lattice, so periods of all surfaces live in one space. The period is the line in the complexified lattice spanned by the class of the holomorphic two-form ω.

**Problem.** Near each marked K3 surface, the period map identifies its deformation space with an open subset of the period domain. This domain consists of lines ℂω satisfying ω·ω = 0 and ω·ω̄ &gt; 0 for the intersection pairing.

**How the definition helps.** The period map is a local isomorphism because its derivative is bijective and both sides are smooth of dimension 20 (our own). Griffiths’ formula computes the derivative as contraction with ω, which identifies vector fields with one-forms (our own). The deformation space is smooth because H²(X, T<sub>X</sub>) vanishes (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “This is surjective, and a local isomorphism, but not an isomorphism”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Zero obstruction spaces give smooth bases

**Remember:** No room for obstructions means no equations cut the base.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a compact complex manifold X, the Kuranishi base is the zero set, near the origin, of a holomorphic obstruction map from a neighborhood of 0 in H¹(X, T<sub>X</sub>) to H²(X, T<sub>X</sub>). It parametrizes all small deformations of X with no redundant first-order parameters.

**Problem.** If H²(X, T<sub>X</sub>) vanishes, the Kuranishi base is smooth of dimension dim H¹(X, T<sub>X</sub>).

**How the definition helps.** A map into the zero space vanishes everywhere, so its zero set is the whole neighborhood of 0 in H¹ (our own). Kuranishi’s theorem is what replaces the gluing equations for charts by this finite-dimensional map (our own).

**Paper or page:** [Calabi-Yau Foliations and Deformations](https://arxiv.org/abs/2412.07566v1). It says: “If H² = 0, the Kuranishi space is smooth and isomorphic to an open neighborhood of 0 in H¹.”

**Sources:**

- [M. Kuranishi, On the Locally Complete Families of Complex Analytic Structures](https://doi.org/10.2307/1970211)
- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Level markings remove polarized automorphisms

**Remember:** Fixing the n-torsion pins down every finite symmetry once n ≥ 3.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A full level n marking of a principally polarized abelian variety is a basis of its points killed by n, standard for the alternating pairing given by the polarization. An automorphism preserving it acts as the identity on the lattice modulo n.

**Problem.** For n ≥ 3, the identity is the only group automorphism preserving both the polarization and the full level n marking.

**How the definition helps.** An automorphism preserving the polarization has finite order, and preserving the marking makes it congruent to the identity modulo n (our own). By Minkowski’s lemma, a finite-order integer matrix congruent to the identity modulo n ≥ 3 is the identity (our own). At level two, inversion still preserves the marking, since −1 ≡ 1 modulo 2 (our own).

**Wikipedia:** [Level structure (algebraic geometry)](https://en.wikipedia.org/wiki/Level_structure_%28algebraic_geometry%29). It says: “by demanding automorphisms to preserve the level structure”

**Sources:** none listed. No primary source with a working link was found.

### Polarization cuts K3 moduli

**Remember:** Keeping the bundle keeps the two-form perpendicular to its class.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A polarized K3 surface is a K3 surface, a simply connected compact complex surface with a nowhere vanishing holomorphic two-form ω, together with an ample line bundle L. A deformation of the pair carries L along, which is possible exactly when the class of L stays orthogonal to ω (our own).

**Problem.** Near the original pair, the period lines of its deformations fill an open subset of the hyperplane section orthogonal to the bundle’s first Chern class. This local deformation space is smooth of dimension 19.

**How the definition helps.** Orthogonality to the class of L is one linear condition, so it cuts the 20-dimensional local period domain from local Torelli to dimension 19 (our own). The exponential sequence shows the class stays of type (1,1), so L extends, exactly when it is orthogonal to ω (our own). The cut is transverse because the class of L has positive square, and ampleness persists nearby (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “The different 19-dimensional moduli spaces”

**Sources:**

- [D. Huybrechts, Lectures on K3 Surfaces, chapter 6](https://www.math.uni-bonn.de/people/huybrech/K3.html)

### Positive Lagrangians give symmetric periods

**Remember:** A positive Lagrangian is the graph of a symmetric period matrix.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A positive Lagrangian of a symplectic lattice is a half-dimensional complex subspace of its complexification on which the alternating form Q, extended complex-bilinearly, vanishes and iQ(v,v̄) &gt; 0 for every nonzero v.

**Problem.** Marked principally polarized complex tori with this lattice have period space equal to the Siegel upper half-space of symmetric matrices with positive definite imaginary part.

**How the definition helps.** Positivity forces the subspace to be a graph {(v, Zv)} over the first coordinate block, since vectors in the second block have iQ(v,v̄) = 0 (our own). On this graph, Q vanishing means Z is symmetric, and positivity means the imaginary part of Z is positive definite (our own). The Riemann bilinear relations identify these subspaces with marked polarized tori (our own).

**Wikipedia:** [Siegel upper half-space](https://en.wikipedia.org/wiki/Siegel_upper_half-space). It says: “symmetric matrices over the complex numbers whose imaginary part is positive definite”

**Sources:** none listed. No primary source with a working link was found.

### Weight one periods recover tori

**Remember:** The holomorphic one-forms are an eigenspace, so they recover the complex structure.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A marked complex torus is a complex vector space modulo a full lattice with an ordered basis, which fixes the real vector space V spanned by the lattice. Its weight one period W is the space of holomorphic one-forms inside the complexified dual of V. W and its conjugate are the two eigenspaces of the complex structure.

**Problem.** Marked complex tori inducing a fixed orientation correspond to subspaces W complementary to their complex conjugates and inducing that orientation.

**How the definition helps.** A complex structure is determined by its two eigenspaces, so W recovers it by acting as i on W and −i on its conjugate (our own). Dualizing gives back the complex vector space with its marked lattice (our own).

**Paper or page:** [Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847v1). It says: “the space of all complex operators on H¹(M,ℝ) compatible with the orientation.”

**Sources:** none listed. No primary source with a working link was found.

### Hodge flags make periods holomorphic

**Remember:** The filtration varies holomorphically even when its split summands do not.

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The Hodge filtration in degree k is the nested sequence of subspaces Fᵖ of cohomology, where Fᵖ sums the types (a, k−a) with a ≥ p. Unlike the single types, which need complex conjugation to recover (our own), these nested subspaces can vary holomorphically. The local period map records this flag after identifying nearby cohomology groups by parallel transport.

**Problem.** For a smooth projective family over a complex manifold, the local period map varies holomorphically in the space of flags of fixed dimensions.

**How the definition helps.** The flag lies in a complex manifold of flags, so holomorphic dependence has a precise meaning there; the single types vary only smoothly (our own). Griffiths proved that each Fᵖ does vary holomorphically.

**Wikipedia:** [Period mapping](https://en.wikipedia.org/wiki/Period_mapping). It says: “Griffiths proved that the period map is holomorphic.”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Hodge quotients give class equations

**Remember:** A real class is pure (p,p) when it vanishes modulo Fᵖ.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** In cohomology of degree 2p, the filtration step Fᵖ sums the types (a, 2p−a) with a ≥ p, and the quotient by Fᵖ records the other components of a class. A real class lies in Fᵖ exactly when it has only type (p,p), because conjugation swaps the two type indices (our own).

**Problem.** In a smooth projective family, fix a rational cohomology class locally by parallel transport. The points where it has only type (p,p) form a closed complex analytic set in that neighborhood.

**How the definition helps.** Griffiths’ theorem makes Fᵖ vary holomorphically, so the transported class gives a holomorphic section of the quotient bundle (our own). Its zero set is analytic, and by the definition it is exactly where the class has type (p,p) (our own).

**nLab:** [Hodge structure](https://ncatlab.org/nlab/show/Hodge+structure). It says: “Fᵖ H²ᵖ = Hᵖ˒ᵖ(X) ⊕ Hᵖ⁺¹˒ᵖ⁻¹(X) ⊕ ⋯ ⊕ H²ᵖ˒⁰(X).”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Transversality gives integrable Higgs fields

**Remember:** Flatness makes the two-step part of the squared connection vanish.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** In a variation of Hodge structure, differentiating a section by the flat connection lowers its Hodge filtration step by at most one. So the connection induces a map θ from each quotient Fᵖ/Fᵖ⁺¹ to the next quotient, with values in one-forms.

**Problem.** The successive quotients of the Hodge filtration form a holomorphic Higgs bundle. This means θ is a holomorphic one-form with values in linear operators, and its operators in any two directions commute.

**How the definition helps.** On the quotients, θ ∧ θ is exactly the part of the curvature that drops two steps, and flatness makes the curvature zero (our own). Terms that differentiate coefficients die in the quotients, so θ is linear over functions (our own).

**nLab:** [Higgs bundle](https://ncatlab.org/nlab/show/Higgs+bundle). It says: “satisfying the integrability condition Φ ∧ Φ = 0.”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Proper maps have analytic images

**Remember:** Proper maps keep points from escaping as their images converge.

*Rules out counterexamples.* MSC 32H35 (Proper holomorphic mappings, finiteness theorems), 32C25. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A continuous map is proper if the inverse image of each compact set is compact. So no sequence can escape to infinity in the source while its images converge.

**Problem.** The image of a proper holomorphic map of complex analytic spaces is an analytic subset of the target. Such a subset is closed and has local holomorphic defining equations.

**How the definition helps.** Properness stops image points from arising as limits of escaping points, so the image is closed (our own). Projecting the curve xy = 1 to the x-axis is not proper, and its image misses the limit point 0 (our own). Remmert’s theorem then gives local holomorphic equations for the image.

**Paper or page:** [Lipschitz geometry of complex surface germs via inner rates of primary ideals](https://arxiv.org/abs/2407.14265v2). It says: “Let f: X ⟶ Y be a proper holomorphic map. Then f(X) is an analytic set embedded in Y.”

**Sources:**

- [Reinhold Remmert, Holomorphe und meromorphe Abbildungen komplexer Räume (1957)](https://doi.org/10.1007/bf01342886)

### Closed projective analytic sets are algebraic

**Remember:** Analytic and closed up to infinity means algebraic.

*Rules out counterexamples.* MSC 32J25 (Transcendental methods of algebraic geometry (complex-analytic aspects)), 14A10. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A closed analytic subset of complex projective space is a subset that is closed in the whole space, including at infinity, and near each point is the common zero set of holomorphic functions.

**Problem.** A closed complex analytic subset of complex projective space is cut out by homogeneous polynomials.

**How the definition helps.** Closedness in all of projective space is what lets Chow’s theorem produce homogeneous polynomial equations. The graph of y = exp(x) is analytic in ℂ² but satisfies no polynomial equation (our own example). Along the positive real axis, the largest exponential term dominates any nonzero polynomial in x and exp(x) (our own).

**nLab:** [Chow's theorem](https://ncatlab.org/nlab/show/Chow%27s+theorem). It says: “a complex analytic space which is given as a closed subset of a complex projective space is a complex algebraic variety.”

**Sources:**

- [Wei-Liang Chow, On Compact Complex Analytic Varieties (1949)](https://doi.org/10.2307/2372375)

### Kähler Moishezon manifolds are projective

**Remember:** Enough meromorphic functions still need a Kähler metric.

*Rules out counterexamples.* MSC 32J25 (Transcendental methods of algebraic geometry (complex-analytic aspects)). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A connected compact complex manifold of dimension n is Moishezon if it has n algebraically independent meromorphic functions, local quotients of holomorphic functions. A Kähler metric, a Hermitian metric with closed associated two-form, is the one condition still missing for projectivity.

**Problem.** A Moishezon manifold embeds as a closed complex submanifold of projective space exactly when it admits a Kähler metric.

**How the definition helps.** Moishezon’s theorem builds the embedding from the function count and the Kähler metric together. Hironaka’s smooth three-dimensional example has the full count but no projective embedding, so it is not Kähler. Conversely, a projective manifold carries the restricted Kähler metric of projective space (our own).

**Wikipedia:** [Moishezon manifold](https://en.wikipedia.org/wiki/Moishezon_manifold). It says: “a Moishezon manifold is a projective algebraic variety if and only if it admits a Kähler metric.”

**Sources:** none listed. No primary source with a working link was found.

### Bundle connections in conjugate directions integrate on curves

**Remember:** On a curve there is no room for curvature in conjugate directions.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32W05. arXiv math.DG. Level 3: graduate.

**Definition.** A connection in conjugate directions on a smooth complex bundle E is a complex-linear operator D from sections to E-valued (0,1)-forms with D(fs) = (∂̄f)s + fD(s). It gives a holomorphic structure, whose holomorphic sections satisfy Ds = 0, once D² = 0. On a curve D² vanishes automatically, because there are no nonzero (0,2)-forms.

**Problem.** Every smooth complex vector bundle on a complex curve has a unique holomorphic structure compatible with any given connection in conjugate directions.

**How the definition helps.** On a curve the only condition, D² = 0, holds for dimension reasons (our own). The Koszul–Malgrange theorem then supplies local frames with Ds = 0, and their changes of basis are holomorphic (our own).

**nLab:** [Koszul-Malgrange theorem](https://ncatlab.org/nlab/show/Koszul-Malgrange+theorem). It says: “such that ∂̄ₑ ∘ ∂̄ₑ = 0, hence with a compatible Dolbeault operator”

**Sources:** none listed. No primary source with a working link was found.

### Curvature makes tensor products positive

**Remember:** Multiply the local metric weights and add their curvatures.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32Q40. arXiv math.DG. Level 3: graduate.

**Definition.** A holomorphic line bundle is positive if it has a Hermitian metric whose curvature form, multiplied by i, is a positive definite (1,1)-form. Locally that form is −i∂∂̄ log\|e\|² for a holomorphic frame e, so it adds when metrics multiply (our own).

**Problem.** The tensor product of two positive holomorphic line bundles is positive. A line bundle with a positive tensor power is itself positive.

**How the definition helps.** On a tensor product the squared lengths multiply, so the curvature forms add, and a sum of positive forms is positive (our own). On a tensor power Lᵏ, the k-th root of its metric is a metric on L with curvature divided by k (our own).

**nLab:** [positive line bundle](https://ncatlab.org/nlab/show/positive+line+bundle). It says: “A holomorphic line bundle on a complex manifold is called positive if its curvature differential 2-form is, after multiplication with i=√−1, a positive definite (1,1)-form.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential sequence makes first Chern classes add under tensor products

**Remember:** Transition functions multiply, and the connecting map turns their products into sums.

*True by definition.* MSC 32L10 (Sheaves and cohomology of sections of holomorphic vector bundles, general results), 55R40. arXiv math.CV, math.AT. Level 3: graduate.

**Definition.** On a complex manifold M, the exponential sequence 0 → ℤ → 𝒪 → 𝒪\* → 0 sends a holomorphic function f to exp(2πif). The first Chern class c₁ sends a line bundle, a class in the group H¹(M, 𝒪\*), to H²(M, ℤ) by the connecting map, which is a group homomorphism.

**Problem.** The first Chern class turns tensor products of holomorphic line bundles into sums. A line bundle has first Chern class zero exactly when it lies in the image of H¹(M, 𝒪).

**How the definition helps.** Tensor product multiplies transition functions, which is the group law on H¹(M, 𝒪\*), and the connecting map is a homomorphism. Exactness of the long sequence identifies the kernel of c₁ with the image of H¹(M, 𝒪).

**Wikipedia:** [Exponential sheaf sequence](https://en.wikipedia.org/wiki/Exponential_sheaf_sequence). It says: “Here H¹(O<sub>M</sub>\*) can be identified with the Picard group of holomorphic line bundles on M. The connecting homomorphism sends a line bundle to its first Chern class.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier ideals allow singular vanishing

**Remember:** Keep exactly the germs that the weighted norm can see.

*Makes the theorem clean to state or prove.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A singular metric on a holomorphic line bundle measures squared lengths with a local weight exp(−2φ) that may blow up. Its multiplier ideal 𝒥 consists of the local holomorphic functions f with \|f\|² exp(−2φ) integrable near each point, the coefficients this weight allows in square-integrable forms.

**Problem.** On compact Kähler X with Kähler form ω, suppose a singular metric on L has curvature at least εω for some ε &gt; 0. Then Hᑫ(X,K⊗L⊗𝒥) vanishes for q &gt; 0, where K is the bundle of holomorphic top forms.

**How the definition helps.** With this ideal, the cohomology of K⊗L⊗𝒥 is computed by forms square-integrable for the singular weight (our own summary of Nadel’s proof). The curvature bound gives estimates that solve ∂̄u = v for every closed square-integrable form v of positive degree.

**Wikipedia:** [Nadel vanishing theorem](https://en.wikipedia.org/wiki/Nadel_vanishing_theorem). It says: “It generalizes the Kodaira vanishing theorem using singular metrics with (strictly) positive curvature,”

**Sources:**

- [A. M. Nadel, Multiplier ideal sheaves and Kähler-Einstein metrics of positive scalar curvature (1990)](https://annals.math.princeton.edu/1990/132-3/p04)

### Nakano positivity gives vanishing where Griffiths positivity fails

**Remember:** Test curvature on sums of tensors, not only simple tensors.

*Rules out counterexamples.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The curvature of a Hermitian holomorphic bundle E gives, at each point, a Hermitian form on the tensor product of the tangent space with the fiber. E is Nakano positive if this form is positive on every nonzero tensor, and Griffiths positive if only on simple tensors.

**Problem.** On a compact Kähler manifold X, a Nakano-positive bundle E satisfies Hᑫ(X,K⊗E) = 0 for q &gt; 0. Here K is the bundle of holomorphic forms of top degree.

**How the definition helps.** The curvature term in the Bochner–Kodaira identity is evaluated on sums of tensors, so Nakano positivity makes it positive and forces harmonic representatives to vanish. Griffiths positivity is not enough: the tangent bundle of ℙ² is Griffiths positive, but its tensor product with K is the cotangent bundle (our own example). The first cohomology of the cotangent bundle contains the nonzero Kähler class (our own).

**Paper or page:** [Positivity and L² Extension](https://arxiv.org/abs/2508.01753v1). It says: “Griffiths-positive but not 2-positive for k=1”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing extends multiplier subscheme sections

**Remember:** Restrict to the subscheme whose kernel Nadel vanishing kills.

*Makes the theorem clean to state or prove.* MSC 32L20 (Vanishing theorems), 14F18. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The multiplier ideal 𝒥 of a singular metric with local weight exp(−2φ) consists of the holomorphic germs f with \|f\|² exp(−2φ) locally integrable. The multiplier subscheme Z is the subscheme cut out by 𝒥, so the kernel of restriction to Z is exactly the sheaf twisted by 𝒥.

**Problem.** On a compact Kähler manifold X, let a singular metric on L have curvature at least a positive multiple of the Kähler form, with multiplier subscheme Z. Every section of K⊗L on Z extends to X, where K is the bundle of holomorphic top forms.

**How the definition helps.** The obstruction to extending lies in H¹(X, K⊗L⊗𝒥), the next term of the long exact sequence for 0 → 𝒥 → 𝒪 → 𝒪<sub>Z</sub> → 0 twisted by K⊗L (our own). Nadel vanishing kills this group.

**Wikipedia:** [Nadel vanishing theorem](https://en.wikipedia.org/wiki/Nadel_vanishing_theorem). It says: “its zero variety is an analytic set.”

**Sources:**

- [A. M. Nadel, Multiplier ideal sheaves and Kähler-Einstein metrics of positive scalar curvature (1990)](https://annals.math.princeton.edu/1990/132-3/p04)

### Amoeba complements have convex components

**Remember:** Take the zeros with nonzero coordinates, then log each coordinate’s modulus.

*Makes the theorem clean to state or prove.* MSC 32Q02 (Special domains (Reinhardt, Hartogs, circular, tube, etc.) in ℂ<sup>n</sup> and complex manifolds), 32D10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The amoeba of a Laurent polynomial p, one that allows negative powers, is the image of its zeros with all coordinates nonzero under the map taking each coordinate z to log\|z\|. This map turns the absolute value of each monomial into the exponential of a linear function.

**Problem.** Every connected component of the complement of a polynomial amoeba is convex.

**How the definition helps.** Over each complement component, 1/p has one Laurent series, and the set where such a series converges absolutely is convex in logarithmic coordinates by Hölder’s inequality. This convergence region misses the amoeba and contains the component, so it equals the component (our own).

**Wikipedia:** [Amoeba (mathematics)](https://en.wikipedia.org/wiki/Amoeba_%28mathematics%29). It says: “Any connected component of the complement ℝⁿ ∖ 𝒜ₚ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Kähler closedness excludes Hopf obstruction

**Remember:** A closed Kähler form gives one harmonic theory for both complex derivatives.

*Rules out counterexamples. Confidence: medium.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Hermitian metric is Kähler when its associated real two-form is closed. This makes the Laplacians of d, ∂ and ∂̄ agree up to a factor 2, so one set of harmonic forms serves all three.

**Problem.** On a compact Kähler manifold, every exact differential form of pure type equals ∂∂̄u for some form u. Here ∂ and ∂̄ are the two parts of exterior differentiation in complex coordinates.

**How the definition helps.** With one harmonic theory, Hodge theory writes every exact pure-type form as ∂∂̄u. On the Hopf surface, ℂ² ∖ {0} modulo z \~ 2z, the nonzero form i∂∂̄log\|z\|² is exact because ∂̄log\|z\|² descends (our own counterexample). A global potential would be plurisubharmonic on a compact manifold, hence constant by the maximum principle (our own).

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “are closely connected with the ∂∂̄-lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Odd-degree Betti numbers of compact Kähler manifolds are even

**Remember:** In odd degree, each Hodge piece has a distinct conjugate.

*Rules out counterexamples.* MSC 32Q15 (Kähler manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A Hermitian metric is Kähler when its imaginary part, a two-form, is closed. This gives the Hodge decomposition of cohomology into types (p,q), with complex conjugation swapping types (p,q) and (q,p).

**Problem.** A Betti number is the dimension of a cohomology group with complex coefficients. On a compact Kähler manifold, each odd-degree Betti number is even.

**How the definition helps.** In odd degree p + q the types (p,q) and (q,p) are distinct, so conjugation pairs the summands in pairs of equal dimension. A compact Hopf surface has first Betti number one, so it has no Kähler metric (our own example).

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “A simple consequence of Hodge theory is that every odd Betti number b₂ₐ₊₁ of a compact Kähler manifold is even, by Hodge symmetry.”

**Sources:** none listed. No primary source with a working link was found.

### Primitive classes split Kähler cohomology

**Remember:** Primitive means orthogonal to everything wedged with the Kähler form.

*True by definition.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** On a compact Kähler manifold, a harmonic form is primitive when the adjoint of wedging with the Kähler form kills it, that is, when it is orthogonal to every wedge multiple of the Kähler form. A cohomology class is primitive when its harmonic representative is.

**Problem.** Each class of type (p,q) splits uniquely into a primitive class and L applied to a class of type (p−1,q−1), where L wedges with the Kähler form. The two summands are orthogonal for the inner product on harmonic forms.

**How the definition helps.** The adjoint kills exactly the orthogonal complement of the image of L, so harmonic forms split orthogonally into primitive forms and the image of L (our own). The Kähler identities make L and its adjoint preserve harmonic forms, and Hodge theory identifies harmonic forms with classes.

**Paper or page:** [Hodge-Riemann property of Griffiths positive matrices with (1,1)-form entries](https://arxiv.org/abs/2211.11578v3). It says: “H<sup>p,q</sup>(X,\\mathbb{C} )=\\Big (\\{\\omega \\}\\smile H<sup>p-1,q-1</sup>(X,\\mathbb{C} )\\Big )\\oplus P<sup>p,q</sup>(X,\\mathbb{C} )”

**Sources:** none listed. No primary source with a working link was found.

### The Kähler condition makes the Laplacians agree and gives the Hodge decomposition

**Remember:** A closed Kähler form makes the Laplacian respect the (p,q) types.

*Makes the theorem clean to state or prove.* MSC 32Q15 (Kähler manifolds), 53C55, 58A14. arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** A Kähler manifold is a complex manifold with a Hermitian metric whose associated 2-form ω is closed. Equivalently, the complex structure is parallel, and then the de Rham Laplacian preserves the splitting of forms into types (p,q).

**Problem.** On a compact Kähler manifold, the r-th cohomology group with complex coefficients splits. It is the direct sum of the Dolbeault groups of type (p, q) with p + q = r.

**How the definition helps.** The Kähler identities make the de Rham Laplacian twice each Dolbeault Laplacian, so a form is harmonic exactly when each (p,q) part is. Hodge theory gives each class one harmonic representative, so the splitting passes to cohomology. The Hopf surface S¹ × S³ has first Betti number one, so the splitting fails there (our own example).

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “If X is Kähler, the Kähler identities imply these Laplacians are all the same up to a constant”

**Sources:**

- [E. Kähler, Über eine bemerkenswerte Hermitesche Metrik, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 9 (1933) 173–186](https://doi.org/10.1007/BF02940642)

### An exhaustion separates its own sublevels

**Remember:** One plurisubharmonic function separates its whole sublevel from outside points.

*True by definition.* MSC 32Q28 (Stein manifolds), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** For compact K in a complex manifold X, the plurisubharmonic hull of K is the set of points x with u(x) ≤ sup<sub>K</sub> u for every plurisubharmonic function u on X. So a point is outside the hull as soon as one such function is larger there than everywhere on K.

**Problem.** Let ρ be a smooth strictly plurisubharmonic function on a Stein manifold with compact sets {ρ ≤ c} for every real c. Each such set equals its holomorphic hull.

**How the definition helps.** For K = {ρ ≤ c}, the function ρ itself exceeds c at every outside point, so the hull adds nothing (our own). On a Stein manifold this hull equals the holomorphic hull, which gives the result (our own).

**Paper or page:** [The Oka principle for tame families of Stein manifolds](https://arxiv.org/abs/2510.25887v1). It says: “the sublevel set {ρ ≤ c} ⊂ T × X is proper and 𝒥-convex.”

**Sources:**

- [Franc Forstnerič and Álfheiður Sigurðardóttir, The Oka principle for tame families of Stein manifolds (2026)](https://doi.org/10.1090/btran/257)

### Chern classes classify Stein line bundles

**Remember:** Theorem B kills both neighbors of the Chern class map.

*True by definition.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** The analytic Picard group of X is the group of holomorphic line bundles up to isomorphism under tensor product, equal to H¹(X,𝒪\*) for nowhere-zero holomorphic functions 𝒪\*. The exponential sequence makes H¹(X,𝒪) → Pic(X) → H²(X,ℤ) → H²(X,𝒪) exact, with the first Chern class as the middle map (our own).

**Problem.** The first Chern class identifies the analytic Picard group of a Stein manifold X with H²(X, ℤ).

**How the definition helps.** Cartan’s Theorem B makes H¹(X,𝒪) and H²(X,𝒪) vanish on a Stein manifold, so the middle map is a bijection (our own).

**nLab:** [Oka principle](https://ncatlab.org/nlab/show/Oka+principle). It says: “holomorphic line bundles over Stein manifolds are fully classified by their first Chern class”

**Sources:**

- [Kiyosi Oka, Sur les fonctions analytiques de plusieurs variables. III–Deuxième problème de Cousin (1939)](https://doi.org/10.32917/hmj/1558490525)

### Closed submanifolds inherit Stein embeddings

**Remember:** Restrict a closed embedding to a closed submanifold.

*True by definition.* MSC 32Q28 (Stein manifolds), 32Q40. arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is Stein if it admits a holomorphic embedding with closed image in some ℂᴺ.

**Problem.** Every closed complex submanifold of a Stein manifold is Stein.

**How the definition helps.** In our own proof, restricting the embedding leaves its image closed in the same Euclidean space. The embedding theorem of Remmert, Bishop and Narasimhan connects this description with the conditions on holomorphic functions.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “Every closed sub-complex manifold of a Stein manifold is itself Stein.”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic forms compute Stein cohomology

**Remember:** Theorem B lets global holomorphic forms compute the topology.

*Makes the theorem clean to state or prove.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** Holomorphic de Rham cohomology takes the complex of global holomorphic forms with the exterior derivative: closed forms modulo derivatives of global forms. The sheaves of holomorphic forms resolve the constant sheaf ℂ, so this global complex computes ordinary cohomology whenever these sheaves have no higher cohomology (our own).

**Problem.** On a Stein manifold, the cohomology of the complex of global holomorphic forms equals singular cohomology with complex coefficients.

**How the definition helps.** Cartan’s Theorem B gives exactly this vanishing of higher cohomology on a Stein manifold (our own). The resolution is the holomorphic Poincaré lemma: closed holomorphic forms of positive degree have local holomorphic primitives (our own).

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “The holomorphic de Rham cohomology of Stein manifolds coincides with ordinary de Rham cohomology (with complex coefficients).”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)

### On Stein manifolds sheaf cohomology solves the first Cousin problem

**Remember:** Cousin data glue when their difference class in H¹ vanishes.

*Makes the theorem clean to state or prove.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** First Cousin data are meromorphic functions fᵢ on an open cover whose differences fᵢ − fⱼ are holomorphic on overlaps. These differences form a cocycle whose class in H¹(M, 𝒪), for the sheaf 𝒪 of holomorphic functions, is zero exactly when the data have a global solution.

**Problem.** Let meromorphic functions fᵢ on an open cover Uᵢ of a Stein manifold have holomorphic differences on every overlap. There is a global meromorphic function f such that f − fᵢ is holomorphic on every Uᵢ.

**How the definition helps.** A zero class means fᵢ − fⱼ = gᵢ − gⱼ with gᵢ holomorphic on Uᵢ, so f = fᵢ − gᵢ is one global function. Cartan’s Theorem B makes H¹(M, 𝒪) zero on a Stein manifold. On a compact complex torus the problem can fail, since no elliptic function has only one simple pole (our own example).

**Wikipedia:** [Cousin problems](https://en.wikipedia.org/wiki/Cousin_problems), [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “the first Cousin problem is always solvable provided that the first cohomology group H¹(M,O) vanishes. In particular, by Cartan's theorem B, the Cousin problem is always solvable if M is a Stein manifold.”

**Sources:**

- [K. Stein, Analytische Funktionen mehrerer komplexer Veränderlichen zu vorgegebenen Periodizitätsmoduln und das zweite Cousinsche Problem, Mathematische Annalen 123 (1951)](https://doi.org/10.1007/bf02054949)

### Stein exhaustions bound handle dimensions

**Remember:** A positive complex Hessian leaves at most half the directions negative.

*True by definition.* MSC 32Q28 (Stein manifolds), 32Q55. arXiv math.DG. Level 3: graduate.

**Definition.** A complex manifold of dimension n is Stein if it has a smooth exhaustion function (one with compact sublevel sets) with nondegenerate critical points and positive definite complex Hessian. Then the real Hessian is never negative on both v and iv, so it is negative definite only on real subspaces of dimension at most n (our own).

**Problem.** A Stein manifold of complex dimension n has the homotopy type of a space built by attaching balls of real dimension at most n.

**How the definition helps.** Morse theory builds the manifold up to homotopy by attaching, at each critical point, a ball whose dimension is its index (our own). The Hessian condition makes every index at most n, since a real subspace of dimension above n contains some v together with iv (our own).

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “Being a Stein manifold is equivalent to being a (complex) strongly pseudoconvex manifold.”

**Sources:**

- [Grauert, On Levi’s Problem and the Imbedding of Real-Analytic Manifolds (1958)](https://doi.org/10.2307/1970257)
- [Andreotti and Frankel, The Lefschetz Theorem on Hyperplane Sections (1959)](https://doi.org/10.2307/1970034)

### Stein global sections preserve exactness

**Remember:** No first cohomology means local lifts have no global obstruction.

*True by definition.* MSC 32Q28 (Stein manifolds), 32C35. arXiv math.CV. Level 3: graduate.

**Definition.** The cohomological definition calls a complex manifold Stein when every coherent analytic sheaf, one locally given by finitely presented modules over holomorphic functions, has zero cohomology in all positive degrees.

**Problem.** On a Stein manifold, every short exact sequence of coherent analytic sheaves stays exact on global sections. In particular, every global section of the quotient lifts to the middle sheaf.

**How the definition helps.** In the long exact sequence, the obstruction to lifting a global section of the quotient lies in H¹ of the kernel, which this definition makes zero (our own). Cartan’s Theorem B and its converse show that this agrees with the definition by a closed holomorphic embedding in ℂᴺ.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the positive-degree abelian sheaf cohomology with values in any analytic coherent sheaf on any Stein manifold vanishes”

**Wikipedia:** [Cartan's theorems A and B](https://en.wikipedia.org/wiki/Cartan%27s_theorems_A_and_B). It says: “then X is Stein (resp. affine)”

**Sources:** none listed. No primary source with a working link was found.

### Strict Stein exhaustions exclude compact curves

**Remember:** Strict positivity prevents a maximum on a compact complex curve.

*Rules out counterexamples.* MSC 32Q28 (Stein manifolds), 32U10. arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is Stein if it admits a smooth exhaustion function, one with compact sublevel sets, that is strictly plurisubharmonic: its complex Hessian is positive definite everywhere. Its restriction to any complex submanifold is again strictly plurisubharmonic (our own).

**Problem.** A Stein manifold contains no compact complex submanifold of positive dimension.

**How the definition helps.** On a compact submanifold of positive dimension the restricted function would attain a maximum, which a strictly plurisubharmonic function cannot do (our own). Strictness matters: on ℙ¹ × ℂ, the squared modulus of the second coordinate is an exhaustion whose complex Hessian vanishes along every ℙ¹ fiber (our own). Grauert’s theorem matches this definition with the usual one.

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “Being a Stein manifold is equivalent to being a (complex) strongly pseudoconvex manifold.”

**Sources:** none listed. No primary source with a working link was found.

### Integral Kähler classes exclude nonprojective tori

**Remember:** An integral positive form is a positive line bundle in disguise.

*Rules out counterexamples.* MSC 32Q40 (Embedding theorems for complex manifolds), 32J27. arXiv math.DG. Level 3: graduate.

**Definition.** A Hodge metric is a Kähler metric whose Kähler form, the closed positive two-form of the metric, has integer integrals over every integral two-cycle. Integrality lets this form represent the first Chern class of a holomorphic line bundle, which is then positive (our own).

**Problem.** A compact complex manifold embeds holomorphically into projective space exactly when it admits a Hodge metric.

**How the definition helps.** Kodaira’s embedding theorem shows that sections of a high power of this positive bundle embed the manifold in projective space. Conversely, pulling back the normalized Kähler form of projective space gives a Hodge metric (our own). A generic complex torus of dimension at least two is Kähler but has no positive integral class, so it is not projective (our own).

**nLab:** [Hodge manifold](https://ncatlab.org/nlab/show/Hodge+manifold). It says: “A Hodge manifold is a Kähler manifold whose canonical differential 2-form is integral.”

**Wikipedia:** [Kodaira embedding theorem](https://en.wikipedia.org/wiki/Kodaira_embedding_theorem). It says: “there is a complex-analytic embedding of M into complex projective space of some high enough dimension N.”

**Sources:**

- [Kodaira, On Kähler Varieties of Restricted Type (1954)](https://doi.org/10.2307/1969701)

### Compact hyperbolicity survives products

**Remember:** An entire curve in a product has two entire projections.

*True by definition.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds), 32F45. arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is Brody hyperbolic if every holomorphic map from the complex plane into it is constant.

**Problem.** A product of two nonempty compact complex manifolds is Kobayashi hyperbolic exactly when both factors are. Kobayashi hyperbolic means the pseudodistance built from chains of holomorphic discs separates points.

**How the definition helps.** By Brody’s theorem, a compact manifold is Kobayashi hyperbolic exactly when it is Brody hyperbolic (our own). A map from ℂ into a product is constant exactly when both projections are, so the product has a nonconstant entire curve exactly when a factor does (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “Brody's theorem says that a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact Manifolds and Hyperbolicity (1978)](https://doi.org/10.2307/1998216)

### Complete Kobayashi distance gives tautness

**Remember:** Either the discs run off to infinity, or a subsequence converges.

*True by definition.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is taut if every sequence of holomorphic maps from the unit disc into it has a subsequence that either converges uniformly on compact sets or diverges compactly. Diverging compactly means each compact set of the disc is eventually mapped outside each compact set of the manifold.

**Problem.** Every complex manifold whose Kobayashi distance is a complete metric is taut.

**How the definition helps.** Completeness makes closed Kobayashi balls compact, by the Hopf–Rinow theorem for length spaces. If the discs do not diverge, some image points stay in a compact set, and since holomorphic maps shrink Kobayashi distance, each smaller closed disc lands in one compact ball (our own). The Arzelà–Ascoli theorem then gives a subsequence converging uniformly on compact sets.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Theorem 2.3.18 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### Entire curves test compact hyperbolicity

**Remember:** Compactness turns ever faster discs into an entire curve.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is Brody hyperbolic if every holomorphic map from ℂ into it is constant, and Kobayashi hyperbolic if its Kobayashi pseudodistance separates points. That pseudodistance is the infimum of total hyperbolic lengths of chains of holomorphic discs joining the two points.

**Problem.** For compact complex manifolds, Brody hyperbolicity and Kobayashi hyperbolicity agree. The equivalence can fail without compactness.

**How the definition helps.** Brody’s theorem gives the equivalence for compact targets, because discs with unbounded derivatives rescale to a nonconstant entire curve. Without compactness, the union of the unit bidisc and {0 &lt; \|w\| &lt; 1, \|zw\| &lt; 1} has only constant entire curves, by boundedness (our own example). Yet for 0 &lt; a &lt; 1 the discs ζ ↦ (Nζ, ζ(ζ − a/N)/(2N)) join (0,0) to (a,0) at distance tending to zero (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact manifolds in hyperbolicity (1978)](https://doi.org/10.1090/S0002-9947-1978-0470252-3)

### Hyperbolic embeddings remove essential singularities

**Remember:** Separated boundary points cannot share one shrinking image circle.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** Let U be open in a compact complex manifold X. U is hyperbolically embedded if any two distinct points of its closure have neighborhoods whose parts in U are a positive Kobayashi distance apart, the distance built from chains of holomorphic discs in U.

**Problem.** Every holomorphic map from a punctured disc into a hyperbolically embedded U extends across the puncture as a holomorphic map to X.

**How the definition helps.** Small circles around the puncture have Kobayashi diameter tending to zero, and holomorphic maps shrink this distance, so each image circle stays near one closure point (our own). Kiernan’s argument shows that these points have one limit, which gives the extension. Without separation the result fails: exp(1/z) maps into the punctured plane with an essential singularity.

**Paper or page:** [Nevanlinna Pair and Algebraic Hyperbolicity](https://arxiv.org/abs/2102.04624). It says: “If X ∖ D is hyperbolically imbedded in X, then X ∖ D is quantitatively big Picard.”

**Sources:**

- [Nevanlinna Pair and Algebraic Hyperbolicity, Theorem 1.1](https://arxiv.org/abs/2102.04624)
- [Peter Kiernan, Hyperbolically imbedded spaces and the big Picard theorem (1973), Theorem 1](https://doi.org/10.1007/BF01351589)

### Negative Euler characteristic selects disc covers

**Remember:** Negative Euler characteristic leaves only the disc as universal cover.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** Remove r distinct points from a compact connected Riemann surface of genus g. The resulting curve is hyperbolic when its Euler characteristic 2 − 2g − r is negative, that is, when 2g − 2 + r &gt; 0.

**Problem.** A curve of this form is hyperbolic exactly when its universal holomorphic cover is the unit disc.

**How the definition helps.** By uniformization the universal cover is the sphere, the plane or the disc. Quotients of the sphere and the plane are only the sphere, the plane, the punctured plane and tori, all with Euler characteristic at least zero (our own). So negative Euler characteristic leaves exactly the disc (our own).

**nLab:** [hyperbolic curves](https://ncatlab.org/nlab/show/hyperbolic+curves). It says: “We say that X is hyperbolic if 2g−2+r &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform negative curvature gives hyperbolicity

**Remember:** A curvature bound limits how fast every trial disc can move.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The infinitesimal Kobayashi length of a tangent vector v at x is the infimum of 1/r over holomorphic maps f from the unit disc with f(0) = x and f′(0) = rv. A vector is short exactly when some disc moves fast in its direction.

**Problem.** If a Kähler metric has holomorphic sectional curvature bounded above by a negative constant, the Kobayashi distance separates points. If the original metric is complete, so is the Kobayashi distance.

**How the definition helps.** A negative upper bound on curvature gives, by the Ahlfors–Schwarz lemma, a uniform bound on disc derivatives, so Kobayashi length is at least a constant times the metric length. Royden’s theorem turns this length bound into a distance bound, which gives both claims (our own). The plane with metric exp(2\|z\|²)\|dz\|² has negative curvature tending to zero, and its Kobayashi distance vanishes.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “holomorphic sectional curvature bounded above by a negative constant, then X is Kobayashi hyperbolic.”

**Sources:** none listed. No primary source with a working link was found.

### Group actions supply Oka sprays

**Remember:** The derivative of the group action already spans every tangent space.

*Makes the theorem clean to state or prove.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A dominating spray on Y is a holomorphic map s from a holomorphic vector bundle over Y to Y, sending each zero vector over y to y. Its derivative along each fiber at zero must reach every tangent direction at y.

**Problem.** Every complex manifold with a transitive holomorphic action of a complex Lie group has a dominating spray and hence is Oka.

**How the definition helps.** For a transitive action of a complex Lie group G, the map s(y, v) = exp(v)·y on the trivial bundle with fiber the Lie algebra is a spray (our own). Its fiber derivative at zero is the derivative of the orbit map, which is onto because the orbit is all of Y (our own). Gromov’s theorem says a dominating spray makes Y Oka (our own).

**nLab:** [Oka manifold](https://ncatlab.org/nlab/show/Oka+manifold). It says: “Every complex Lie group and every coset space (homogeneous space) of complex Lie groups is an Oka manifold.”

**Sources:**

- [Mikhail Gromov, Oka’s Principle for Holomorphic Sections of Elliptic Bundles (1989)](https://doi.org/10.2307/1990897)

### Holomorphic coverings preserve Oka approximation

**Remember:** Convex test domains have no loops that can switch sheets.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ must be a uniform limit there of holomorphic maps ℂⁿ → Y. Convex sets are simply connected, so these test maps lift through any covering (our own).

**Problem.** For a holomorphic covering between connected complex manifolds, the total space is Oka exactly when the base is Oka.

**How the definition helps.** A test map into the base lifts to the cover; approximate the lift upstairs and project down (our own). Conversely, close approximations downstairs lift on ℂⁿ, starting near the original lift, and converge upstairs on the compact set (our own). Forstnerič’s theorem says the convex test is equivalent to the full Oka property (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “If Y → Z is an Oka map of connected complex manifolds, then Y is an Oka manifold if and only if Z is an Oka manifold.”

**Sources:**

- [Franc Forstnerič, Stein Manifolds and Holomorphic Mappings (2011)](https://doi.org/10.1007/978-3-642-22250-4)
- [Franc Forstnerič, Oka maps (2010)](https://doi.org/10.1016/j.crma.2009.12.004)

### Holomorphic retracts inherit Oka approximation

**Remember:** Approximate upstairs, then return along the retraction.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ must be a uniform limit there of holomorphic maps ℂⁿ → Y. Composing with a holomorphic map keeps such approximations close on the compact set.

**Problem.** A holomorphic retract of an Oka manifold X is Oka. A retract Y has holomorphic maps i from Y to X and r back to Y with r ∘ i equal to the identity.

**How the definition helps.** Approximate i ∘ f by entire maps into X, then apply r, which gives entire maps into Y close to r ∘ i ∘ f = f (our own). The main theorem of Oka theory says the convex test is equivalent to the full Oka principle (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “Furthermore, all these Oka properties are pairwise equivalent.”

**Sources:**

- [Franc Forstnerič, Runge approximation on convex sets implies the Oka property (2006)](https://doi.org/10.4007/annals.2006.163.689)

### Isomorphism bundles give holomorphic uniqueness

**Remember:** An isomorphism is a section with invertible values.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** The isomorphism bundle of two holomorphic vector bundles of equal rank has, at each point, the invertible linear maps between their fibers. A continuous or holomorphic bundle isomorphism is exactly a continuous or holomorphic section of it (our own).

**Problem.** Topologically isomorphic holomorphic vector bundles over a Stein manifold are holomorphically isomorphic.

**How the definition helps.** Each fiber is a copy of the group of invertible complex matrices, which is an Oka manifold (our own). The Oka principle for sections over a Stein manifold deforms a continuous section to a holomorphic one, giving a holomorphic isomorphism (our own).

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the holomorphic and the topological classification of complex vector bundles on X coincide.”

**Sources:**

- [Hans Grauert, Analytische Faserungen über holomorph-vollständigen Räumen (1958)](https://doi.org/10.1007/BF01351803)
- [Mikhail Gromov, Oka’s Principle for Holomorphic Sections of Elliptic Bundles (1989)](https://doi.org/10.2307/1990897)

### Oka interpolation needs continuous extension

**Remember:** First extend continuously, then make the extension holomorphic.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y has the Oka interpolation property if the following holds for every Stein space X and closed complex subvariety A. Every continuous map X → Y holomorphic on A admits a homotopy to a holomorphic map, fixed on A throughout.

**Problem.** A holomorphic map from a closed complex subvariety of a Stein space to an Oka manifold extends holomorphically if it extends continuously.

**How the definition helps.** Interpolation keeps the prescribed values fixed while deforming a continuous extension to a holomorphic one (our own). On the curve zw = 1 in ℂ², projection to z maps the loop \|z\| = 1 once around zero (our own). The loop contracts in ℂ², so this projection cannot extend continuously to ℂ² with values in the punctured plane (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “f: X → Y is a continuous map which is holomorphic on a neighbourhood of K and on X′”

**Sources:**

- [Franc Forstnerič, Stein Manifolds and Holomorphic Mappings (2011)](https://doi.org/10.1007/978-3-642-22250-4)

### Oka products approximate by components

**Remember:** Approximate the components separately, then put them back together.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ must be a uniform limit there of holomorphic maps ℂⁿ → Y. A map into a product is just a pair of maps into the factors.

**Problem.** A finite product of Oka manifolds is Oka.

**How the definition helps.** A test map into a product is a pair of test maps, and pairs of entire approximations approximate the pair (our own). The main theorem says this convex test is equivalent to the Oka principle for maps from Stein spaces (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “A complex manifold Y which enjoys CAP has all Oka properties”

**Sources:**

- [Franc Forstnerič, Runge approximation on convex sets implies the Oka property (2006)](https://doi.org/10.4007/annals.2006.163.689)

### A tensor test for complex structures, by the Newlander–Nirenberg theorem

**Remember:** Zero Nijenhuis tensor means honest holomorphic charts.

*True by definition.* MSC 32Q60 (Almost complex manifolds), 53C15. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** An almost complex structure is a tangent bundle endomorphism J with J² = −Id. Its Nijenhuis tensor N(X,Y) = \[JX,JY\] − J\[JX,Y\] − J\[X,JY\] − \[X,Y\] vanishes exactly when brackets of i-eigenvector fields of J are again i-eigenvector fields. J is integrable when N vanishes everywhere.

**Problem.** A manifold with an almost complex structure J has holomorphic charts in which J is multiplication by i exactly when J is integrable.

**How the definition helps.** Vanishing of N is a condition on J and brackets alone (our own), and the Newlander–Nirenberg theorem builds local holomorphic coordinates from it. Conversely, in complex coordinates the standard J has vanishing N (our own).

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “Since the existence of an integrable almost complex structure is equivalent to the existence of a complex structure, this is sometimes taken as the definition of a complex structure.”

**Sources:**

- [A. Newlander and L. Nirenberg, Complex analytic coordinates in almost complex manifolds, Annals of Mathematics 65 (1957) 391–404](https://doi.org/10.2307/1970051)

### Asphericity rules out sphere bubbles

**Remember:** No symplectic area on spheres means no holomorphic spheres.

*Rules out counterexamples.* MSC 32Q65 (Pseudoholomorphic curves), 53D35. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic manifold (M,ω) is symplectically aspherical when ω integrates to zero over every map of a 2-sphere into M. For tame J, a nonconstant J-holomorphic sphere has positive symplectic area. So such a manifold contains no nonconstant J-holomorphic sphere.

**Problem.** Let M be closed and symplectically aspherical, with ω-tame J. Then every sequence of J-holomorphic maps from one fixed closed Riemann surface, in one homology class, has a smoothly convergent subsequence.

**How the definition helps.** With a fixed domain, Gromov's theorem allows only bubbles as a failure of convergence. Each bubble is a nonconstant J-holomorphic sphere, so asphericity gives it zero area, which taming forbids (our own). Removed counterexample: in CP², the conics xy = εz² split into two lines as ε → 0, one a bubble (our own).

**Wikipedia:** [Gromov's compactness theorem (topology)](https://en.wikipedia.org/wiki/Gromov%27s_compactness_theorem_%28topology%29). It says: “If the complex structures on the curves in the sequence do not vary, only bubbles can occur; nodes can occur only if the complex structures on the domain are allowed to vary.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)

### Compatibility makes energy equal symplectic area

**Remember:** On a holomorphic curve, metric area and symplectic area agree.

*True by definition.* MSC 32Q65 (Pseudoholomorphic curves), 53D45. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** An almost complex structure J squares to −1 on each tangent space. It is compatible with ω when g(v,w) = ω(v,Jw) is a Riemannian metric. A J-holomorphic curve is a map u from a Riemann surface with complex linear differential, and its energy is ½∫\|du\|² in g.

**Problem.** If J is compatible with ω, every closed J-holomorphic curve in the homology class A has energy ω(A). So all such curves in one class share one energy bound, the main hypothesis of Gromov's compactness theorem.

**How the definition helps.** For every map, half of \|du\|² equals u\*ω plus the square of the part of du that is not complex linear (our own). On a J-curve that part vanishes, so the energy is ∫u\*ω, the pairing of \[ω\] with A. Without a taming form, curves in one class need not have bounded energy (our own).

**Wikipedia:** [Gromov's compactness theorem (topology)](https://en.wikipedia.org/wiki/Gromov%27s_compactness_theorem_%28topology%29). It says: “the energy of such a pseudoholomorphic curve is given by the integral of the target symplectic form over the curve, and thus by evaluating the cohomology class of that symplectic form on the homology class of the curve.”

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “Let u:S→X be J-holomorphic, then E(u)=∫<sub>S</sub> u\*ω=∫<sub>S</sub> ‖du‖²\_μ vol<sub>h</sub>. In particular, E(u)≥0 and the equality holds if and only if u is constant.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)
- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Complex orientations make J-curve intersections positive

**Remember:** Complex lines can only cross each other positively.

*Rules out counterexamples.* MSC 32Q65 (Pseudoholomorphic curves), 57K43. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** In an almost complex 4-manifold, each tangent plane of a J-holomorphic curve is a J-complex line, with the orientation given by J. Two different complex lines in ℂ² always meet with sign +1 for the complex orientations.

**Problem.** Two closed J-holomorphic curves in a 4-manifold with no common component meet in finitely many points. Each point adds a positive integer to A·B, so A·B ≥ 0, and A·B = 0 exactly when the curves are disjoint.

**How the definition helps.** At a transverse point, the two J-complex tangent planes span the tangent space with its complex orientation, so the sign is +1 (our own). At tangencies, McDuff and Micallef–White show that J-curves are holomorphic after a C¹ change of coordinates (our own). Removed case: the symplectic planes ℂ×{0} and {(2w, w̄)} in ℂ² meet with sign −1, and no ω-tame J makes both complex (our own).

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255v4). It says: “Then they intersect at only finitely many points and each point contributes positively to the intersection multiplicity \[A\]·\[B\]. Moreover, \[A\]·\[B\]=1 iff the curves intersect transversally at exactly one point, while \[A\]·\[B\]= 0 iff the curves are disjoint.”

**Sources:**

- [D. McDuff, The local behaviour of holomorphic curves in almost complex 4-manifolds, J. Differential Geom. 34 (1991) 143–164](https://doi.org/10.4310/jdg/1214446994)
- [M. Micallef and B. White, The structure of branch points in minimal surfaces and in pseudoholomorphic curves, Ann. of Math. 141 (1995) 35–85](https://doi.org/10.2307/2118627)

### Convexity makes the Cauchy–Riemann index topological

**Remember:** All Cauchy–Riemann operators on one bundle lie on straight lines.

*True by definition.* MSC 32Q65 (Pseudoholomorphic curves), 58J20. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A real linear Cauchy–Riemann operator on a complex bundle E over a Riemann surface has the form ∂̄ + a. Here ∂̄ comes from a holomorphic structure on E, and a is a real linear term with no derivatives. Any two such operators differ by such a term, so they form a convex space.

**Problem.** Every real linear Cauchy–Riemann operator on a complex bundle E of rank n over a closed surface Σ is Fredholm with index n·χ(Σ) + 2c₁(E). For a J-curve of genus g in class A, this gives expected dimension n(2 − 2g) + 2c₁(A).

**How the definition helps.** The Fredholm index stays constant along the straight path between two such operators, so it equals the index of a complex linear ∂̄ (our own). This matters because the linearized operators of J-curves are only real linear, so Riemann–Roch does not apply to them directly (our own). The work moves to the Riemann–Roch theorem, which gives the complex linear index n·χ(Σ) + 2c₁(E) (our own).

**Paper or page:** [Families of relatively exact Lagrangians, free loop spaces and generalised homology](https://arxiv.org/abs/2202.09677v2). It says: “The space of Cauchy-Riemann operators on (E, F) is contractible (and in fact, convex).”

**Sources:**

- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Cylindrical J makes Reeb cylinders holomorphic

**Remember:** J turns the vertical direction into the Reeb direction.

*True by definition. Confidence: medium.* MSC 32Q65 (Pseudoholomorphic curves), 53D42. arXiv math.SG. Level 3: graduate.

**Definition.** Let α be a contact form on M, with Reeb field R and contact planes ξ = ker α. A cylindrical J on the symplectization ℝ × M, with form d(eᵃα), is invariant under translation in ℝ. It sends the ℝ direction ∂ₐ to R, and it preserves ξ, where it is compatible with dα.

**Problem.** For cylindrical J, the trivial cylinder (s,t) ↦ (Ts, γ(Tt)) over every T-periodic Reeb orbit γ is J-holomorphic. Every J-curve u has ∫u\*dα ≥ 0, with equality only when u lies in ℝ times one Reeb trajectory.

**How the definition helps.** J sends ∂ₐ to R, and the trivial cylinder sends ∂ₛ and ∂ₜ to T∂ₐ and TR, so it is J-holomorphic (our own). On ξ, dα is positive on complex lines, and its kernel holds ∂ₐ and R, so u\*dα ≥ 0 (our own). For a general compatible J on ℝ × M, trivial cylinders need not be holomorphic (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The differential counts certain holomorphic curves in the cylinder over the contact manifold, where the trivial examples are the branched coverings of (trivial) cylinders over closed Reeb orbits.”

**Sources:**

- [H. Hofer, Pseudoholomorphic curves in symplectizations with applications to the Weinstein conjecture in dimension three, Invent. Math. 114 (1993) 515–563](https://doi.org/10.1007/BF01232679)

### Exponent above two makes maps continuous

**Remember:** One derivative in Lᵖ, p above two, means continuous.

*Rules out counterexamples. Confidence: medium.* MSC 32Q65 (Pseudoholomorphic curves), 46E35. arXiv math.SG, math.AP. Level 3: graduate.

**Definition.** The analysis uses maps of class W¹ᵖ from a closed surface into M, with p &gt; 2. Such a map and its first weak derivatives lie in Lᵖ. Since p exceeds the surface dimension 2, Morrey's inequality makes every such map continuous.

**Problem.** For p &gt; 2, the W¹ᵖ maps from a closed Riemann surface to M in a fixed homology class form a smooth Banach manifold. With j the complex structure of the surface, u ↦ ½(du + J du j) is a smooth Fredholm section of a Banach bundle.

**How the definition helps.** Continuity lets one build charts from the exponential map, and it gives each map a homology class (our own). The excluded case is p = 2: log log(1/\|z\|) on a small disk has square-integrable derivative but is unbounded near 0 (our own). The Fredholm property then comes from Lᵖ estimates for the Cauchy–Riemann operator (our own).

**Wikipedia:** [Sobolev inequality](https://en.wikipedia.org/wiki/Sobolev_inequality). It says: “if f has k derivatives in Lᵖ and pk&gt;n, then f will be continuous (and actually Hölder continuous with some positive exponent α)”

**Sources:**

- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Regular values define regular J

**Remember:** Regular J are regular values of one Fredholm projection.

*True by definition.* MSC 32Q65 (Pseudoholomorphic curves), 58D27. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** The universal moduli space is the set of pairs (u, J), where J is ω-tame and u is a simple J-holomorphic sphere in class A. J is regular for A when it is a regular value of the projection (u, J) ↦ J.

**Problem.** Regular J form a residual set, one that contains a countable intersection of open dense sets. For each regular J, the simple J-spheres in class A form a smooth manifold of the expected dimension.

**How the definition helps.** The fibre over a regular value of a smooth Fredholm map is a manifold, and the Sard–Smale theorem makes regular values residual (our own). The usual definition asks the linearized operator to be onto at every simple J-sphere, and a lemma shows the two agree (our own). The work went into showing that the universal moduli space is a Banach manifold, using an injective point of each curve (our own).

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255v4). It says: “An almost complex structure is said to be regular for the class A if it is a regular value for the projection π<sub>A</sub>.”

**Sources:**

- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Simple curves give smooth moduli spaces

**Remember:** A simple curve has a sheet that only it covers.

*Rules out counterexamples.* MSC 32Q65 (Pseudoholomorphic curves), 58D27. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A J-holomorphic curve is simple, or somewhere injective, when some point z has du(z) ≠ 0 and is the only point mapped to u(z). Every nonconstant closed J-curve is a simple curve composed with a branched cover of Riemann surfaces.

**Problem.** Take J in a comeagre set, a countable intersection of open dense sets, of ω-tame structures on a closed 2n-manifold. Then the simple J-holomorphic spheres in class A form a smooth manifold of dimension 2n + 2c₁(A).

**How the definition helps.** Near an injective point, a change of J moves one sheet only, so it can reach every direction the linearized operator misses (our own). The Sard–Smale theorem, Sard's theorem for Fredholm maps, then gives regularity for generic J (our own). Multiple covers fail: the double covers of an exceptional sphere in a 4-manifold form a 10-dimensional space, but the formula predicts 8 (our own).

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “For every J∈𝒥reg, the moduli space ℳ̂ˢ(J,A) is a smooth oriented manifold of dimension 2n+2c₁(A), where c₁ denotes the first Chern number of the pullback bundle (u\*TW, J) for a representative u of the class A.”

**Sources:**

- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Taming makes nonconstant J-curves have positive area

**Remember:** Taming means every complex line has positive symplectic area.

*True by definition.* MSC 32Q65 (Pseudoholomorphic curves), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic form ω tames an almost complex structure J when ω(v,Jv) &gt; 0 for every nonzero tangent vector v. So ω is positive on every J-complex line.

**Problem.** If J is ω-tame and a nonconstant closed J-holomorphic curve represents the class A, then ω(A) &gt; 0. So an exact symplectic manifold, where ω = dλ, contains no nonconstant closed J-holomorphic curve.

**How the definition helps.** Where du is nonzero, its image is a J-complex line, so taming makes u\*ω positive there (our own). A nonconstant curve has du ≠ 0 on an open set, so ω(A) = ∫u\*ω &gt; 0 (our own). The usual stronger condition, compatibility, is not needed, since the proof uses only ω(v,Jv) &gt; 0 (our own).

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255v4). It says: “If a homology class A ∈ H₂(M,ℤ) is represented by a nonconstant J-curves for some J ∈ 𝒥ω then ω(A) &gt; 0.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)

### Virtual genus detects embedded J-spheres

**Remember:** Every singular point costs genus that homology can see.

*Makes the theorem clean to state or prove.* MSC 32Q65 (Pseudoholomorphic curves), 57K43. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** Let c₁ be the first Chern class of the complex bundle (TM, J) on an almost complex 4-manifold. The virtual genus of a class A is gᵥ(A) = 1 + (A·A − c₁(A))/2. It is the genus that an embedded J-curve in class A must have.

**Problem.** A somewhere injective J-holomorphic sphere in class A, one that is not a multiple cover, satisfies gᵥ(A) ≥ 0. Equality holds exactly when the sphere is embedded.

**How the definition helps.** For an embedded sphere, TM splits into tangent and normal line bundles, so c₁(A) = 2 + A·A and gᵥ(A) = 0 (our own). Each singular point adds a positive amount to A·A − c₁(A), by the local models of McDuff and Micallef–White (our own). So one number computed from homology detects embeddedness (our own).

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255v4). It says: “Define the virtual genus of A as gᵥ(A) = 1+½(\[A\]·\[A\]− c₁(A)) where c₁(A) = ⟨c₁(TM,J), A⟩. Then gᵥ(A)≥0 with equality if, and only if, the map u is an embedding.”

**Sources:**

- [D. McDuff, The local behaviour of holomorphic curves in almost complex 4-manifolds, J. Differential Geom. 34 (1991) 143–164](https://doi.org/10.4310/jdg/1214446994)
- [M. Micallef and B. White, The structure of branch points in minimal surfaces and in pseudoholomorphic curves, Ann. of Math. 141 (1995) 35–85](https://doi.org/10.2307/2118627)

### Constant Milnor number prevents splitting

**Remember:** The tracked point keeps all the multiplicity, so none is left over.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** At an isolated critical point, the Milnor number is the local degree of the gradient, the map of first partial derivatives. It counts, with positive multiplicities, the critical points that a small perturbation creates near the point.

**Problem.** Suppose a holomorphic family on ℂⁿ has an isolated critical point at zero in every fiber. If its Milnor number there stays constant, no other critical points approach zero.

**How the definition helps.** Degree is conserved in a small ball, and every nearby critical point counts with positive weight (our own). So if zero keeps the full Milnor number, no weight is left for other critical points (our own).

**Paper or page:** [On deformations of isolated singularity functions](https://arxiv.org/abs/2206.10035v1). It says: “has no coalescing of singular (critical) points if and only if it is μ-constant.”

**Sources:**

- [On deformations of isolated singularity functions](https://arxiv.org/abs/2206.10035v1)

### Jacobian algebras multiply Milnor numbers

**Remember:** The Milnor number counts what survives after killing all first derivatives.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** At an isolated critical point, the Milnor number μ is the complex dimension of the Jacobian algebra, the holomorphic germs modulo the ideal generated by the first partial derivatives.

**Problem.** For holomorphic germs f and g with isolated critical points in disjoint variables, μ(f + g) = μ(f)μ(g).

**How the definition helps.** In separate variables, the ideal for f + g is generated by the derivatives of f and the derivatives of g, so the Jacobian algebra of the sum is the tensor product of the two algebras (our own). Dimensions of a tensor product multiply (our own). Milnor’s theorem identifies this dimension with the number of spheres in a nearby smooth fiber (our own).

**Wikipedia:** [Milnor number](https://en.wikipedia.org/wiki/Milnor_number). It says: “introduced μ(f) in geometric terms”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Log resolutions give rational thresholds

**Remember:** Make f a monomial, then integrate one variable at a time.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The complex singularity exponent of a holomorphic germ f at zero is the supremum of real c ≥ 0 for which \|f\|⁻²ᶜ is integrable near zero. A log resolution π is a proper modification from a smooth space, an isomorphism away from the zero set, after which f ∘ π and the Jacobian determinant of π are locally monomials times units in one set of coordinates.

**Problem.** For a nonzero germ vanishing at zero, the exponent is the minimum of (k + 1)/m over the components of the pulled-back zero set whose images contain zero. Here m and k are the vanishing orders along the component of the pulled-back germ and of the Jacobian determinant.

**How the definition helps.** Change of variables along π turns the integral into a product of one-variable integrals of \|y\|²ᵏ⁻²ᶜᵐ (our own). Each factor is integrable exactly when cm &lt; k + 1, and only finitely many components lie over zero (our own). The hard work is the existence of a log resolution (our own).

**Paper or page:** [On diminished multiplier ideal and the termination of flips](https://arxiv.org/abs/2405.11902v4). It says: “is a log resolution of both (X,Δ) and 𝔞 · 𝔮.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Canonical desingularization in characteristic zero by blowing up the maximum strata of a local invariant, 1997](https://doi.org/10.1007/s002220050141)
- [Jean-Pierre Demailly and János Kollár, Semi-continuity of complex singularity exponents and Kähler–Einstein metrics on Fano orbifolds, 2001](https://doi.org/10.1016/s0012-9593(01)01069-2)

### Milnor numbers bound Taylor degrees

**Remember:** Finite Milnor number puts all high Taylor terms among the derivatives.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A germ f is right determined to degree k if every germ with the same Taylor coefficients through degree k becomes f after a local coordinate change. The Milnor number μ is the dimension of the germs modulo the ideal of first derivatives of f; when μ is finite, that ideal contains every monomial of degree μ.

**Problem.** A holomorphic function with an isolated critical point at zero and Milnor number μ is right determined to degree μ + 1.

**How the definition helps.** A finite quotient puts every Taylor term of degree at least μ in the derivative ideal, so coordinate changes can absorb such terms (our own). Terms of degree μ + 2 then lie in the maximal ideal squared times the derivative ideal, which is the hypothesis of the finite determinacy theorem (our own). Without isolation, x² and x² + yᴺ agree through degree N − 1, yet their critical sets have different dimensions (our own).

**Paper or page:** [On Normal Forms of Singular Levi-Flat Real Analytic Hypersurfaces](https://arxiv.org/abs/1003.4999v4). It says: “with Milnor number μ. Then f is right equivalent to”

**Sources:** none listed. No primary source with a working link was found.

### Normalization quotients count branch intersections

**Remember:** Delta counts the functions that the normalization adds to the curve.

*Makes the theorem clean to state or prove.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The delta invariant of a reduced complex curve germ counts the functions its normalization adds: it is the complex dimension of B/O, where O is the local ring and B is its integral closure in its total ring of fractions.

**Problem.** For reduced plane curve germs C and D at the same point with no common branch, δ(C ∪ D) = δ(C) + δ(D) + I(C,D). The intersection multiplicity I(C,D) is the dimension of the ambient local ring modulo the ideal generated by both defining equations.

**How the definition helps.** The ring of C ∪ D sits inside the product of the rings of C and D, which sits inside the normalization, so the dimension adds over two steps (our own). The upper step gives δ(C) + δ(D) (our own). The lower step has quotient the ambient local ring modulo both equations, of dimension I(C,D), by the exact sequence for coprime equations (our own).

**Paper or page:** [Lotuses as computational architectures](https://arxiv.org/abs/2502.17102v1). It says: “δ(A) = ∑<sub>l = 1</sub><sup>r</sup> δ(A<sub>l</sub>) + ∑<sub>l &lt; m</sub> (A<sub>l</sub> · A<sub>m</sub>)<sub>O</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted scaling equates Milnor and Tjurina numbers

**Remember:** Euler’s identity puts f among its own derivatives.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV. Level 3: graduate.

**Definition.** The Tjurina number is the dimension of the germs modulo f and its first derivatives; the Milnor number drops f from that ideal. A polynomial f is weighted homogeneous if positive integer weights wᵢ give all its monomials one degree d, and then d·f = ∑ wᵢ xᵢ ∂f/∂xᵢ (our own).

**Problem.** For a weighted homogeneous holomorphic germ with isolated critical point, the Milnor and Tjurina numbers are equal.

**How the definition helps.** Euler’s identity puts f in the ideal of first derivatives, so adding f to that ideal changes nothing and the two quotients agree (our own). The identity comes from differentiating f(tʷ¹x₁, …, tʷⁿxₙ) = tᵈ f(x) at t = 1 (our own).

**Paper or page:** [On the k-th Milnor and k-th Tjurina Numbers of a Foliation](https://arxiv.org/abs/2510.24868v2). It says: “be an isolated singularity defined by a quasi-homogeneous polynomial f”

**Sources:**

- [Kyoji Saito, Quasihomogene isolierte Singularitäten von Hyperflächen, 1971](https://doi.org/10.1007/bf01405360)

### Tjurina ideals ignore invertible factors

**Remember:** Include the equation, and the extra derivative terms disappear.

*True by definition. Confidence: medium.* MSC 32S10 (Invariants of analytic local rings), 32B05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The Tjurina ideal of a holomorphic equation f is generated by f and all its first partial derivatives. The Tjurina algebra is the local ring of holomorphic germs modulo that ideal.

**Problem.** Multiplying f by a holomorphic function u that is nonzero at the base point preserves the Tjurina ideal and algebra.

**How the definition helps.** The product rule gives ∂(uf) = u ∂f + f ∂u, and both terms lie in the ideal for f because f is itself a generator (our own argument). So the ideal for uf lies in the ideal for f. Applying the same calculation to 1/u gives the reverse inclusion.

**Paper or page:** [Computing Regular Meromorphic Differential Forms via Saito's Logarithmic Residues](https://arxiv.org/abs/2007.09950v4). It says: “where (f, ∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ) is the ideal in 𝒪ₓ,ₒ generated by f”

**Sources:** none listed. No primary source with a working link was found.

### Normal surface links detect smoothness

**Remember:** With no integral fractions missing, a simply connected link means smooth.

*Rules out counterexamples.* MSC 32S25 (Complex surface and hypersurface singularities), 32S05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A complex surface germ is normal if its local ring is a domain that contains every fraction satisfying a monic polynomial over the ring. Its link is its intersection with a small sphere centered at the point.

**Problem.** A normal complex surface germ with simply connected link is smooth.

**How the definition helps.** Mumford’s theorem gives smoothness for normal germs, and normality removes the counterexample below (our own). The image of the injective map (u,v) ↦ (u,v²,v³,uv) is singular, yet its link is a three-sphere (our own). Its local ring misses the fraction v = v³/v², a root of T² − v², so it is not normal (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “the link of x is simply connected if and only if x is a smooth point of W.”

**Sources:**

- [David Mumford, The topology of normal singularities of an algebraic surface and a criterion for simplicity, 1961](https://doi.org/10.1007/bf02698717)

### Embedded resolutions make equations monomial

**Remember:** After resolution, every curve in sight is a coordinate axis.

*Rules out counterexamples.* MSC 32S45 (Modifications; resolution of singularities (complex-analytic aspects)), 32S05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** An embedded resolution of a reduced plane curve germ is a sequence of point blowups after which the strict transform and the exceptional curves together are locally a union of coordinate axes in holomorphic coordinates. In particular, the strict transform is smooth and crosses each exceptional curve transversely.

**Problem.** After an embedded resolution of a reduced plane curve, the pullback of a defining equation is a unit times a coordinate monomial at every point.

**How the definition helps.** The pulled-back equation vanishes exactly on these axes, so dividing by the right powers of the coordinates leaves a nonvanishing factor (our own). One blowup makes the cusp y² = x³ smooth but tangent to the exceptional curve, so smoothness alone is not enough (our own). Embedded resolution removes that tangency too (our own).

**nLab:** [resolution of singularities](https://ncatlab.org/nlab/show/resolution+of+singularities). It says: “which is an isomorphism away from the singular locus.”

**Paper or page:** [The existence of valuative interpolation](https://arxiv.org/abs/2510.22244v1). It says: “simultaneously have only normal crossings.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Canonical desingularization in characteristic zero by blowing up the maximum strata of a local invariant, 1997](https://doi.org/10.1007/s002220050141)

### Conjugation reverses real monodromy

**Remember:** Conjugation runs the monodromy loop backwards.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** The geometric monodromy T, up to deformation through diffeomorphisms, is the return map from transporting a nearby smooth fiber once counterclockwise around zero. For a real equation and a real fiber value, complex conjugation c maps the fiber to itself and reverses the direction of that loop.

**Problem.** For an isolated complex hypersurface singularity given by a real equation, T is the product (T ∘ c) ∘ c. Each factor squares to the identity up to deformation.

**How the definition helps.** Conjugation reverses the loop, so c ∘ T ∘ c = T⁻¹ up to deformation (our own). Then (T ∘ c)² = T ∘ (c ∘ T ∘ c) is the identity, and so is c² (our own). Milnor’s fibration supplies the geometric transport, which the action on homology alone does not specify (our own).

**Paper or page:** [Plane curve singularities via divides](https://arxiv.org/abs/2503.10424v1). It says: “is the composition of two involutions of the fiber Fδ, δ ∈ ℝ, namely”

**Sources:**

- [Plane curve singularities via divides](https://arxiv.org/abs/2503.10424v1)

### Isolation forces middle dimensional spheres

**Remember:** The derivatives vanish together only at the point itself.

*Rules out counterexamples.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic function f with f(0) = 0 has an isolated critical point at zero if its first derivatives vanish together there and nowhere else nearby. Its Milnor fiber is a small nonzero level set inside a small ball, with the ball chosen first.

**Problem.** For such a function on ℂⁿ⁺¹, the Milnor fiber has the homotopy type of finitely many n-spheres joined at one point.

**How the definition helps.** Isolation is the hypothesis of Milnor’s bouquet theorem, which gives this homotopy type (our own). It excludes f = xy on ℂ³, whose critical set is a line and whose fiber is homotopy equivalent to a circle, not a wedge of two-spheres (our own).

**nLab:** [Milnor fiber](https://ncatlab.org/nlab/show/Milnor+fiber). It says: “with an isolated singularity at zero”

**Wikipedia:** [Milnor number](https://en.wikipedia.org/wiki/Milnor_number). It says: “has the same homotopy type as a bouquet”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Transverse boundaries give Milnor bundles

**Remember:** Smooth levels must also cut the boundary sphere cleanly.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** A Milnor tube restricts a holomorphic function near an isolated critical point to a small closed ball over a disk around its critical value. The disk is chosen so that every other level is smooth and meets the boundary sphere transversely. So away from the critical level, the function is a submersion on the ball and on its boundary sphere (our own).

**Problem.** Over the punctured disk, a Milnor tube is a smooth fiber bundle with boundary. Near each nonzero value it is smoothly a product, including along the fiber boundary.

**How the definition helps.** By Ehresmann’s theorem, a proper map that is a submersion on the interior and on the boundary is locally a product, boundary included (our own). The closed ball makes the restriction proper (our own). Milnor’s transversality theorem supplies radii that work together, which an arbitrary ball and disk need not do (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “is a locally trivial fiber bundle with fibers diffeomorphic to the Milnor fiber.”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Duality preserves perverse sheaves

**Remember:** Duality trades the two vanishing bounds.

*True by definition. Confidence: medium.* MSC 32S60 (Stratifications; constructible sheaves; intersection cohomology (complex-analytic aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** Take a bounded sheaf complex on a Whitney-stratified complex space whose cohomology sheaves are locally constant and finite-dimensional on each stratum. It is middle perverse if, on each stratum of complex dimension d, ordinary restriction has no cohomology above degree −d and restriction with supports has none below −d.

**Problem.** Verdier duality, the duality exchanging ordinary restriction and restriction with support, preserves middle perverse sheaves on a complex analytic space.

**How the definition helps.** Duality exchanges the two restrictions, and on a stratum of complex dimension d it sends degree k to −2d − k (our own). This swaps the two sides of −d, so the two vanishing conditions trade places (our own). The exchange identities for Verdier duality do the work.

**Paper or page:** [A note on the support and cosupport conditions for a perverse sheaf](https://arxiv.org/abs/2207.02566v1). It says: “(new support) for all m ≥ 0, for all k &gt; −m, Hᵏ(uₘ\* A•) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Complex tangents make Levi signs intrinsic

**Remember:** Restrict to complex tangents before testing the Hessian.

*True by definition. Confidence: medium.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** The Levi form of a defining function ρ, one that vanishes on the boundary with nonzero gradient and is negative inside, is its complex Hessian ∑ (∂²ρ/∂zⱼ∂z̄ₖ) wⱼ w̄ₖ restricted to complex tangent vectors w, those with ∑ (∂ρ/∂zⱼ) wⱼ = 0.

**Problem.** Whether a smooth boundary has nonnegative Levi form is independent of its defining function.

**How the definition helps.** If two defining functions differ by a smooth positive factor h, the product rule writes the new Hessian as h times the old one plus terms with a factor ρ or ∑ (∂ρ/∂zⱼ) wⱼ (our own). Both factors vanish on the boundary for complex tangent w, so the Levi form is only multiplied by h &gt; 0 (our own). Two defining functions always differ locally by such a factor.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “for every p ∈ ∂G and w in the complex tangent space at p”

**Sources:** none listed. No primary source with a working link was found.

### Exhaustions survive holomorphic inverse images

**Remember:** Pseudoconvex means some disk-test function grows without bound toward the boundary.

*True by definition.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain is pseudoconvex if it has a plurisubharmonic exhaustion, a continuous real function whose sublevel sets {φ ≤ c} are compact and which satisfies the subharmonic mean inequality on holomorphic disks.

**Problem.** For a holomorphic map from a pseudoconvex domain, each component of the inverse image of a pseudoconvex open domain is pseudoconvex.

**How the definition helps.** If φ exhausts the source and ψ exhausts the target, then φ + ψ ∘ F passes the disk test on each component of the inverse image (our own). Both terms are bounded below, so each sublevel set confines points to a compact sublevel of φ and their images to a compact sublevel of ψ (our own). Hence the sum is an exhaustion of the component (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Exhaustions trap disks away from boundaries

**Remember:** Compact sublevels mean bounded values keep points trapped.

*True by definition.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain is pseudoconvex if it has a plurisubharmonic exhaustion, a continuous real function with compact sublevel sets that satisfies the subharmonic mean inequality along holomorphic disks.

**Problem.** In a pseudoconvex domain, all holomorphic disks whose rims lie in a fixed compact subset lie in a single compact subset. The disks take their values in the domain and extend continuously to their rims there.

**How the definition helps.** On each disk, the maximum principle bounds the exhaustion by its maximum on the common compact set of rims. So every disk lies in one compact sublevel set.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “plurisubharmonic functions satisfy the maximum principle”

**Paper or page:** [On Segre-degenerate Levi-flat hypervarieties](https://arxiv.org/abs/2306.07259v2). It says: “Then D lifts to the envelope of holomorphy, that is, any f ∈ 𝒪(Ω) can be analytically continued to a neighborhood of D.”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Exhaustions yield smooth pseudoconvex subdomains

**Remember:** Cut a smooth strict exhaustion at regular values.

*True by definition.* MSC 32T05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A domain in ℂⁿ is pseudoconvex if it has a plurisubharmonic exhaustion, a continuous function with compact sublevel sets that is subharmonic on every complex line. A smooth function is strictly plurisubharmonic if its complex Hessian is positive definite everywhere, so its smooth level sets have positive Levi form.

**Problem.** Every pseudoconvex domain in ℂⁿ is an increasing union of relatively compact domains with smooth strongly pseudoconvex boundaries, on which the complex Hessian of a defining function is positive on nonzero complex tangent vectors.

**How the definition helps.** Cutting a smooth strictly plurisubharmonic exhaustion at a regular value gives a smooth boundary with positive Levi form. The main work is smoothing the continuous exhaustion and adding \|z\|² for strictness, and Sard’s theorem gives arbitrarily large regular values. Taking the components containing a fixed point gives an increasing union that eventually contains every path from that point (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “This is because once we have a φ as in the definition we can actually find a C∞ exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Log radius tests Hartogs pseudoconvexity

**Remember:** The function u is minus the logarithm of the fiber radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T05 (Domains of holomorphy), 32T35. arXiv math.CV. Level 3: graduate.

**Definition.** A complete Hartogs domain over a base domain consists of the pairs (z,w) with z in the base and \|w\| &lt; exp(−u(z)), for a continuous real function u, so u is the negative logarithm of the fiber radius.

**Problem.** Over a pseudoconvex base in ℂⁿ, this domain is pseudoconvex exactly when its negative logarithmic radius u is plurisubharmonic.

**How the definition helps.** At each center (z,0), the fiber radius exp(−u(z)) is the boundary distance in the w direction, so u is minus its logarithm there. Oka’s directional distance theorem makes minus the logarithm of this distance plurisubharmonic on a pseudoconvex domain, so u is plurisubharmonic. Conversely, adding −log(1 − \|w\| exp(u(z))) to a plurisubharmonic exhaustion of the base gives one for the domain, since an increasing convex function of a plurisubharmonic function is plurisubharmonic (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Paper or page:** [Oka tubes in holomorphic line bundles](https://arxiv.org/abs/2310.14871v4). It says: “Then, the (pseudoconcave) Hartogs domain Ω = {(z,t) ∈ ℂⁿ × ℂ: \|t\| &lt; φ(z)} is an Oka domain.”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Pseudoconvex tubes have convex bases

**Remember:** For a tube, complex-line subharmonicity becomes real convexity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A tube consists of all complex points whose real parts lie in a connected open set, its base. When the base is not all of ℝⁿ, the boundary distance at z is the real distance from Re z to the boundary of the base, so it depends only on Re z.

**Problem.** A tube is a domain of holomorphy exactly when its base is convex.

**How the definition helps.** Oka’s boundary distance theorem makes minus the logarithm of the distance plurisubharmonic on a tube of holomorphy, and a plurisubharmonic function of Re z alone is locally convex (our own). Adding \|Re z\|² gives compact sublevels whose components are convex by the local convexity theorem, and the base is their increasing union, so it is convex (our own). Conversely, every tube over a convex base is a domain of holomorphy, including ℂⁿ (our own).

**Wikipedia:** [Tube domain](https://en.wikipedia.org/wiki/Tube_domain). It says: “Tubes over convex sets are domains of holomorphy.”

**Sources:** none listed. No primary source with a working link was found.

### Strict pseudoconvexity excludes boundary disks

**Remember:** Positive curvature in every complex tangent direction leaves no room for disks.

*Rules out counterexamples. Confidence: medium.* MSC 32T15 (Strongly pseudoconvex domains), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A smooth boundary ρ = 0, with ρ negative inside and nonzero gradient, is strongly pseudoconvex if the complex Hessian of ρ is positive on every nonzero complex tangent vector, one that stays tangent after multiplication by i.

**Problem.** The boundary of a strongly pseudoconvex domain contains no nonconstant holomorphic disk, meaning a holomorphic image of the unit disk.

**How the definition helps.** A holomorphic disk h in the boundary makes ρ ∘ h identically zero (our own). At a point where h′ ≠ 0, the vector h′ is complex tangent, and the Laplacian of ρ ∘ h is 4 times the complex Hessian on h′, which is positive (our own). This contradicts the zero Laplacian of the zero function (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “for every p ∈ ∂G and w in the complex tangent space at p”

**Sources:** none listed. No primary source with a working link was found.

### Strong pseudoconvexity bounds boundary values by Neumann energy

**Remember:** Positive Levi curvature makes every tangential boundary value cost energy.

*Makes the theorem clean to state or prove.* MSC 32T15 (Strongly pseudoconvex domains). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** A boundary is strongly pseudoconvex if its defining function ρ, zero on the boundary and negative inside with nonzero gradient, has complex Hessian positive on every nonzero complex tangent vector.

**Problem.** On a smooth bounded strongly pseudoconvex domain, the squared boundary L² norm of a smooth (0,1)-form is bounded by a constant times its ∂̄-Neumann energy. The form must satisfy the adjoint boundary condition, which sets its complex normal coefficient to zero.

**How the definition helps.** The adjoint condition makes the boundary values of the form complex tangent, so strong pseudoconvexity bounds their squared length by a constant times the Levi form, uniformly by compactness of the boundary (our own). The unweighted integration-by-parts identity for the energy bounds the boundary integral of the Levi form by a constant times the energy (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “‖Tϕ\*α‖₁² + ‖Sϕα‖₃²”

**Sources:**

- [J. J. Kohn, Harmonic integrals on strongly pseudo-convex manifolds, I (1963)](https://doi.org/10.2307/1970506)

### The Levi polynomial gives a local holomorphic peak

**Remember:** Split the Taylor expansion into a holomorphic peak and a curvature control.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T15 (Strongly pseudoconvex domains), 32T40. arXiv math.CV. Level 3: graduate.

**Definition.** At a boundary point p, take a real boundary equation ρ that is negative inside with nonzero gradient. Its Levi polynomial P is the holomorphic part of its second-order Taylor expansion, so ρ(z) = 2 Re P(z) + H(z − p) + o(\|z − p\|²), where H is the complex Hessian of ρ at p.

**Problem.** Each point of a C² strongly pseudoconvex boundary has a local holomorphic peak function. It equals one at that point and has modulus below one everywhere else on the nearby closure.

**How the definition helps.** When H is positive definite, the expansion gives Re P &lt; 0 at every other nearby point where ρ ≤ 0, so exp P is a local peak function (our own). Strong pseudoconvexity makes H positive on complex tangents, and replacing ρ by exp(Aρ) − 1 for large A makes it positive in all directions (our own).

**Paper or page:** [A Solution Operator for the ∂̄ Equation in Sobolev Spaces of Negative Index](https://arxiv.org/abs/2111.09245v2). It says: “is strictly plurisubharmonic in a neighborhood ω of bΩ”

**Sources:** none listed. No primary source with a working link was found.

### Disk tests make pullback plurisubharmonic

**Remember:** A holomorphic map sends a test disk to another test disk.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 3: graduate.

**Definition.** A function u from a complex domain to ℝ ∪ {−∞} is plurisubharmonic if it is upper semicontinuous and, for every holomorphic disk φ in the domain, u ∘ φ at the center of each closed subdisk is at most its average on the subdisk’s boundary.

**Problem.** Pullback along a holomorphic map preserves plurisubharmonicity when functions identically equal to −∞ are allowed.

**How the definition helps.** A test disk composed with a holomorphic map is again a test disk, so every test for the pullback is a test for u (our own). Composition with a continuous map also preserves upper semicontinuity. With the alternative definition on straight complex lines, the work is proving that line tests imply all disk tests.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic, where Δ ⊂ ℂ denotes the unit disk.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperconvexity rules out invisible boundaries

**Remember:** A plurisubharmonic exhaustion provides a barrier at every boundary point.

*Rules out counterexamples. Confidence: medium.* MSC 32U10 (Plurisubharmonic exhaustion functions), 32U35, 32W20. arXiv math.CV. Level 3: graduate.

**Definition.** A bounded domain is hyperconvex if it has a negative continuous plurisubharmonic exhaustion, a function whose sublevel sets below each negative value have compact closure inside, so it tends to zero at every boundary point (our own). The Green function with pole a is the largest nonpositive plurisubharmonic function bounded above by log\|z − a\| plus a constant near a.

**Problem.** On a bounded hyperconvex domain, the Green function with an interior pole tends to zero at every boundary point.

**How the definition helps.** A scaled exhaustion near the boundary, pasted by a maximum to a logarithmic function near the pole, is a Green test, so the Green function lies above a function that tends to zero at the boundary (our own). Every Green test is nonpositive, so the limit is zero (our own). In a punctured ball, which is not hyperconvex, tests extend through the puncture, where the Green function stays negative (our own).

**Paper or page:** [Pluricomplex Green Functions on Stein Manifolds and Certain Linear Topological Invariants](https://arxiv.org/abs/2112.13212). It says: “There exists a negative plurisubharmonic function on M that has a relatively compact sublevel set containing ζ₀.”

**Sources:**

- [Jean-Pierre Demailly, Mesures de Monge-Ampère et mesures pluriharmoniques](https://doi.org/10.1007/BF01161920)

### Maxima preserve pseudoconvex intersections

**Remember:** The larger exhaustion keeps points away from both boundaries.

*True by definition.* MSC 32U10 (Plurisubharmonic exhaustion functions), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A domain in ℂⁿ is pseudoconvex if it has a plurisubharmonic exhaustion, a continuous function with compact sublevel sets that satisfies the mean value inequality on every disk in every complex line.

**Problem.** Each connected component of a finite intersection of pseudoconvex domains is pseudoconvex.

**How the definition helps.** The maximum of the exhaustions is continuous and plurisubharmonic, and each of its sublevel sets is an intersection of compact sublevel sets (our own). On each component these sets stay compact, so the maximum is an exhaustion there (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “In other words, a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Current densities make Lelong numbers add

**Remember:** Laplacian masses add before the radius shrinks to zero.

*True by definition.* MSC 32U25 (Lelong numbers), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** For a plurisubharmonic function u, finite somewhere on a domain in ℂⁿ, the Lelong number at a is the limiting density of its Laplacian measure μ: a constant times μ(B(a,r))/r²ⁿ⁻² as r decreases to zero. The constant makes log\|z − a\| have Lelong number one.

**Problem.** For two plurisubharmonic functions, each finite somewhere on the domain, the Lelong number of their sum equals the sum of their Lelong numbers.

**How the definition helps.** The Laplacian of a sum is the sum of the Laplacians, so the ball masses add before the limit is taken (our own). Lelong’s monotonicity formula shows each limit exists, so the limit of the sum is the sum of the limits. The equivalent definition by a lower limit of logarithmic growth does not visibly add, since lower limits need not distribute over sums (our own).

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “Similarly a plurisubharmonic function also has a Lelong number at a point.”

**Sources:**

- [Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter III](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

### Logarithmic growth gives vanishing order

**Remember:** Compare the first nonzero Taylor term with the logarithm of distance.

*True by definition.* MSC 32U25 (Lelong numbers), 32A60. arXiv math.CV. Level 3: graduate.

**Definition.** The Lelong number of a plurisubharmonic function u at a is the lower limit of u(z)/log\|z − a\| as z approaches a.

**Problem.** If a nonzero holomorphic function vanishes to order m at a point, the Lelong number of its logarithmic modulus there is m.

**How the definition helps.** The first nonzero Taylor term gives \|f(z)\| ≤ C\|z − a\|ᵐ near a (our own). Taking logarithms and dividing by log\|z − a\| reverses the inequality and gives a lower limit at least m (our own). Along any line where the leading term does not vanish identically, the ratio tends to m (our own).

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “The Lelong number of a plurisubharmonic function φ at a point x of ℂⁿ is liminf<sub>z→x</sub> φ(z)/log \|z−x\|.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic growth handles Lelong minima

**Remember:** A negative logarithm turns the maximum into a minimum.

*True by definition.* MSC 32U25 (Lelong numbers), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** The Lelong number of a plurisubharmonic function u at a is the lower limit of u(z)/log\|z − a\| as z approaches a. Since log\|z − a\| is negative near a, a larger u gives a smaller ratio.

**Problem.** For plurisubharmonic functions u and v on the same domain, the Lelong number of max(u,v) at each point equals the smaller individual Lelong number.

**How the definition helps.** Dividing by the negative log\|z − a\| turns max(u,v) into the minimum of the two ratios (our own). The lower limit of a minimum of two functions is the minimum of their lower limits (our own).

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “The Lelong number of a plurisubharmonic function φ at a point x of ℂⁿ is liminf<sub>z→x</sub> φ(z)/log \|z−x\|.”

**Sources:**

- [Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter III](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

### Degree scaling bounds polynomial pullbacks

**Remember:** Pull the test back and divide by the degree.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** The extremal function V(E) of a compact set E is the supremum of plurisubharmonic functions u that are nonpositive on E and satisfy u(z) ≤ log\|z\| + C for large \|z\|, with C depending on u.

**Problem.** For a polynomial map h of degree d ≥ 1, V(h(E))(h(w)) ≤ d V(E)(w) at every point w.

**How the definition helps.** If u is a test for h(E), then u ∘ h is plurisubharmonic, nonpositive on E, and grows at most like d log\|w\| + C, because \|h(w)\| grows at most like \|w\|ᵈ (our own). So (u ∘ h)/d is a test for E, and taking the supremum gives the inequality (our own).

**Paper or page:** [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171). It says: “Then, for every w ∈ ℂᵏ, L<sub>h(E)</sub>(h(w)) ≤ d · L<sub>E</sub>(w).”

**Sources:**

- [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171)
- [Józef Siciak, Extremal plurisubharmonic functions in ℂⁿ, Annales Polonici Mathematici 39 (1981), 175–211](https://doi.org/10.4064/ap-39-1-175-211)

### Green envelopes are maximal off-pole

**Remember:** A local improvement would improve the whole envelope.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32W20. arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded hyperconvex domain, one with a negative continuous plurisubharmonic exhaustion, the Green function with pole a is the largest nonpositive plurisubharmonic function bounded above by log\|z − a\| plus a constant near a. Being largest, it cannot be raised on any small ball away from a.

**Problem.** On a bounded hyperconvex domain, the Green function has zero Monge–Ampère measure, the top power of its complex Hessian, away from its pole.

**How the definition helps.** A local raise away from a, pasted in by a maximum, would give a larger admissible function, so the Green function is maximal there (our own). It is locally bounded away from its pole, and Bedford and Taylor show that a locally bounded maximal plurisubharmonic function has zero Monge–Ampère measure.

**Paper or page:** [The pluricomplex Poisson kernel for convex finite type domains](https://arxiv.org/abs/2509.26230). It says: “Then u is maximal if and only if (ddᶜu)ⁿ = 0.”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Jean-Pierre Demailly, Mesures de Monge-Ampère et mesures pluriharmoniques](https://doi.org/10.1007/BF01161920)

### Logarithmic poles make Green functions contract

**Remember:** A holomorphic pullback keeps the logarithmic pole bound.

*True by definition. Confidence: medium.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded complex domain D, the pluricomplex Green function G(z,a) is the supremum of nonpositive plurisubharmonic functions u with u(z) ≤ log\|z − a\| + C near a.

**Problem.** For a holomorphic map F between bounded complex domains D and E, the Green function of E at (F(z),F(a)) never exceeds D’s at (z,a).

**How the definition helps.** Composing a test for E at F(a) with F gives a test for D at a, because F is locally Lipschitz, so log\|F(z) − F(a)\| ≤ log\|z − a\| + C near a (our own). Taking the supremum gives the inequality (our own).

**Paper or page:** [Pluricomplex Green Functions on Stein Manifolds and Certain Linear Topological Invariants](https://arxiv.org/abs/2112.13212). It says: “M possesses a semi-proper pluricomplex Green function with a strict logarithmic pole at ζ₀.”

**Sources:**

- [Maciej Klimek, Invariant pluricomplex Green functions](https://doi.org/10.4064/-31-1-207-226)

### Logarithmic derivatives add zero divisors

**Remember:** The logarithm turns products into sums of zero currents.

*True by definition. Confidence: medium.* MSC 32U40 (Currents), 32A60. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The zero current of a nonzero holomorphic function f integrates test forms over its zero hypersurfaces, each counted with its vanishing order. Locally it equals (i/π)∂∂̄ log\|f\| in the sense of distributions.

**Problem.** On a connected complex manifold, the zero current of a product of two nonzero holomorphic functions equals the sum of their zero currents.

**How the definition helps.** The logarithm turns the product into a sum, log\|fg\| = log\|f\| + log\|g\|, and ∂∂̄ is linear (our own). The local Poincaré–Lelong formula identifies each derivative with the geometric zero current.

**Paper or page:** [Induced Fubini-Study metrics on strictly pseudoconvex CR manifolds and zeros of random CR functions](https://arxiv.org/abs/2401.09143v1). It says: “(\[Div(f)\], ψ) = (i/π) ∫₍G₎ ∂∂̄ log(\|f\|) ∧ ψ”

**Sources:** none listed. No primary source with a working link was found.

### Analytic data avoid Lewy’s obstruction

**Remember:** Analytic forcing has convergent series, so Cauchy–Kovalevskaya applies.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** On the hypersurface Im w = \|z\|² in ℂ², with z = x + iy and t = Re w, the tangential Cauchy–Riemann operator is L = ∂/∂z̄ − iz ∂/∂t. A forcing term f is real analytic if it has a convergent power series in x, y and t near each point.

**Problem.** The equation Lu = f has a local analytic solution for every real analytic f. This fails for general smooth f.

**How the definition helps.** Convergent data let the Cauchy–Kovalevskaya theorem give an analytic solution, since L has coefficient 1/2 on ∂/∂x and so determines that derivative from data on x = 0 (our own). Lewy’s example gives smooth forcing for which no local solution exists.

**Wikipedia:** [Lewy's example](https://en.wikipedia.org/wiki/Lewy%27s_example). It says: “Note that if F is analytic, then the Cauchy–Kovalevskaya theorem implies that there exists a solution.”

**Sources:**

- [Hans Lewy, An Example of a Smooth Linear Partial Differential Equation Without Solution (1957)](https://doi.org/10.2307/1970121)

### Compatible maps pull back solutions

**Remember:** Preserve the allowed directions and the equations pull back.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann structure is a smooth complex subbundle L of the complexified tangent bundle, closed under brackets and meeting its conjugate only at zero; a local solution is a smooth function killed by every local section of L. A smooth map is compatible if its differential carries each source fiber of L into the corresponding target fiber.

**Problem.** Suppose differentials of local target solutions have precisely the antiholomorphic directions as their common kernel. A smooth map is compatible exactly when it pulls all local target solutions back to solutions.

**How the definition helps.** By the chain rule, a pulled-back function f ∘ h is a solution exactly when df kills the image under dh of the source fibers of L. So compatibility makes pullbacks solutions, and the hypothesis on the common kernel of target solutions gives the converse. Finding enough independent local solutions is a separate existence problem.

**Paper or page:** [Regularity of infinitesimal automorphisms of involutive structures](https://arxiv.org/abs/2506.24105). It says: “the function h⁎f = f ∘ h is a solution of 𝒱.”

**Sources:**

- [Bernhard Lamel and Nicholas Braun Rodrigues, Regularity of infinitesimal automorphisms of involutive structures (arXiv:2506.24105v1)](https://arxiv.org/abs/2506.24105)

### Connection uniqueness makes curvature natural

**Remember:** A map preserving the defining data cannot change the canonical connection.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** Let θ be a positive contact form on a strictly pseudoconvex Cauchy–Riemann manifold, J the complex structure on H = ker θ, and T the field with θ(T) = 1 and dθ(T,·) = 0. The Tanaka–Webster connection is the unique connection preserving H, J, dθ and T whose torsion satisfies τ(X,Y) = dθ(X,Y)T and τ(T,JX) = −Jτ(T,X) for X, Y in H.

**Problem.** A diffeomorphism preserving the positive contact form and the complex structure on its kernel preserves the Tanaka–Webster connection and its curvature.

**How the definition helps.** The connection is fixed by θ and J alone, so a diffeomorphism preserving them carries it to a connection meeting the same conditions, which is the connection itself. Curvature, computed from the connection, is then preserved too. The Tanaka–Webster theorem proves existence and uniqueness.

**Paper or page:** [On the second coefficient of the asymptotic expansion of Boutet de Monvel--Sjöstrand](https://arxiv.org/abs/2012.15456). It says: “there exists an unique affine connection, called Tanaka–Webster connection”

**Sources:**

- [S. M. Webster, Pseudo-Hermitian structures on a real hypersurface (1978)](https://doi.org/10.4310/jdg/1214434345)

### Holomorphic maps preserve Segre varieties

**Remember:** Treat z̄ as a free variable w̄, and identities still hold.

*True by definition. Confidence: medium.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A smooth real analytic hypersurface has a real-valued analytic defining function ρ(z,z̄) with nonzero gradient. Its Segre variety Q(w) is the set of nearby z with ρ(z,w̄) = 0, where w̄ replaces z̄ in the power series as an independent variable.

**Problem.** A holomorphic map sending one such hypersurface into another sends each nearby Segre variety into the Segre variety of the image point, locally.

**How the definition helps.** If F maps the source into the target, the target function ρ′(F(z), F̄(z̄)) vanishes where ρ does, so it equals a(z,z̄)ρ(z,z̄) for a real analytic a, since ρ can serve as a coordinate (our own). Replacing z̄ by w̄ in this identity of power series gives ρ′(F(z), F̄(w̄)) = a(z,w̄)ρ(z,w̄) (our own). So ρ(z,w̄) = 0 puts F(z) in the Segre variety of F(w) (our own).

**Paper or page:** [Orthogonal pair and a rigidity problem for Segre maps between hyperquadrics](https://arxiv.org/abs/2109.09340). It says: “A local holomorphic Segre map from ℋⁿ into ℋᴺ is a local orthogonal pair from ℙ¹,ⁿ to ℙ¹,ᴺ.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Real Submanifolds in Complex Space and Their Mappings (1999)](https://doi.org/10.1515/9781400883967)

### Involutivity gives the tangential complex

**Remember:** Brackets stay in the bundle, so the exterior derivative descends.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann structure is a bundle L of complex tangent directions that meets its conjugate only at zero and is involutive, meaning brackets of fields in L stay in L. Tangential forms are complex forms restricted to L, that is, ordinary forms modulo those that vanish on L.

**Problem.** On an involutive Cauchy–Riemann manifold, exterior differentiation defines a differential on tangential forms, and its square vanishes.

**How the definition helps.** Involutivity makes d send forms that vanish on L to forms that vanish on L, by the formula dω(X,Y) = Xω(Y) − Yω(X) − ω(\[X,Y\]) (our own argument). So d descends to tangential forms, and d² = 0 descends with it.

**nLab:** [CR manifold](https://ncatlab.org/nlab/show/CR+manifold). It says: “such that \[L, L\] ⊂ L and L ∩ L̄ = {0}.”

**Sources:** none listed. No primary source with a working link was found.

### Levi flatness gives complex leaves

**Remember:** When mixed brackets stay tangent, the complex planes become leaves.

*Makes the theorem clean to state or prove.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** On a smooth real hypersurface, H is the bundle of tangent vectors whose multiples by i remain tangent. The hypersurface is Levi-flat if the bracket \[X,Ȳ\] of any two smooth tangent fields X, Y of type (1,0) takes values in the complexification of H.

**Problem.** Every smooth Levi-flat hypersurface locally splits into complex hypersurfaces tangent to H.

**How the definition helps.** Levi flatness supplies exactly the mixed brackets that the Frobenius integrability test needs, because brackets within one type already stay tangent (our own). Frobenius gives real leaves tangent to H, and projection onto complex tangent coordinates makes each leaf a graph satisfying the Cauchy–Riemann equations (our own).

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “h(v,w) = (1/2i)\[v,w̄\] mod L ⊕ L̄, v,w ∈ L.”

**Sources:** none listed. No primary source with a working link was found.

### Levi nondegeneracy makes contact planes

**Remember:** Nondegeneracy of the Levi form is nondegeneracy on the contact planes.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** On a smooth real hypersurface in complex space, let H be the complex tangent planes and θ a local real one-form with kernel H. The hypersurface is Levi nondegenerate if dθ on H pairs the (1,0) directions with their conjugates nonsingularly.

**Problem.** Levi nondegeneracy makes H a contact structure, meaning that dθ has zero kernel on H.

**How the definition helps.** Brackets within one type stay in H, so dθ vanishes on two vectors of the same type and only the mixed pairing can detect a kernel (our own argument). Nonsingularity of that pairing makes the kernel of dθ on H zero.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “In the strictly pseudoconvex case this bundle defines a contact structure on M, with α a contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Levi rank survives CR equivalence

**Remember:** The Levi form measures the bracket that escapes the complex tangent space.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** Let L be the bundle of type (1,0) tangent vectors on a smooth real hypersurface. The Levi form pairs v, w in L at p by extending them to sections X, Y of L and taking (1/2i)\[X,Ȳ\] at p modulo L + L̄, so it uses only L and brackets.

**Problem.** A diffeomorphism carrying one hypersurface’s Cauchy–Riemann structure onto another’s preserves the rank of the Levi form.

**How the definition helps.** A diffeomorphism carrying one Cauchy–Riemann structure onto the other carries L, brackets and the quotient by L + L̄, so it carries one Levi form onto the other and keeps its rank (our own argument). The usual complex Hessian test agrees up to a nonzero factor, by the exterior derivative formula for a one-form vanishing on L + L̄.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “h(v,w) = (1/2i)\[v,w̄\] mod L ⊕ L̄, v,w ∈ L.”

**Sources:** none listed. No primary source with a working link was found.

### Polarization makes Segre incidence symmetric

**Remember:** Conjugate the defining equation and exchange the two points.

*True by definition. Confidence: medium.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Take a real-valued analytic defining function ρ(z,z̄) for a real hypersurface and replace z̄ in its series by an independent variable w̄. The Segre variety Q(w) is the set of nearby z with ρ(z,w̄) = 0.

**Problem.** Near the base point, z lies in Q(w) if and only if w lies in Q(z). A point z lies in Q(z) exactly when it lies on the real hypersurface.

**How the definition helps.** Because ρ is real, its series coefficients are conjugate when the two exponent lists are exchanged, so ρ(w,z̄) is the complex conjugate of ρ(z,w̄) (our own). Thus the two incidence equations vanish together. Setting w = z gives ρ(z,z̄) = 0, the hypersurface itself.

**Paper or page:** [Orthogonal pair and a rigidity problem for Segre maps between hyperquadrics](https://arxiv.org/abs/2109.09340). It says: “A local holomorphic Segre map from ℋⁿ into ℋᴺ is a local orthogonal pair from ℙ¹,ⁿ to ℙ¹,ᴺ.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Real Submanifolds in Complex Space and Their Mappings (1999)](https://doi.org/10.1515/9781400883967)

### Zero energy identifies Kohn harmonics

**Remember:** Zero energy means both tangential derivatives vanish.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Let D be the closed tangential Cauchy–Riemann operator on square-integrable forms and D⁎ its Hilbert space adjoint. The Kohn Laplacian □ is the operator of the closed energy form ‖Du‖² + ‖D⁎u‖² on their common domain, so ⟨□u,u⟩ = ‖Du‖² + ‖D⁎u‖².

**Problem.** The Kohn Laplacian has kernel exactly where both D and D⁎ vanish. In degree zero this gives the square-integrable Cauchy–Riemann functions in the domain of D.

**How the definition helps.** For u in the kernel, ⟨□u,u⟩ = 0 makes both squares vanish (our own argument). Conversely, if Du and D⁎u vanish, the energy pairing of u with every other form is zero, and the closed form theorem puts u in the kernel.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “Functions that are annihilated by the Kohn Laplacian are called CR functions.”

**Sources:** none listed. No primary source with a working link was found.

### Zero Webster torsion preserves complex tangents

**Remember:** Webster torsion is how the Reeb flow twists the complex structure.

*Makes the theorem clean to state or prove.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** On a strictly pseudoconvex Cauchy–Riemann manifold with positive contact form θ, let J be the complex structure on ker θ and T the Reeb field, with θ(T) = 1 and dθ(T,·) = 0. Webster torsion is A(X) = τ(T,X), where τ(X,Y) = ∇<sub>X</sub> Y − ∇<sub>Y</sub> X − \[X,Y\] for the Tanaka–Webster connection ∇.

**Problem.** The local flow of T preserves the complex tangent planes and their complex structure exactly when Webster torsion vanishes.

**How the definition helps.** The connection preserves T and J, so the derivative of J along the flow of T is X ↦ −A(JX) + JA(X) (our own calculation). The identity A(JX) = −JA(X) makes this 2JA(X), which vanishes exactly when A does (our own). The defining equations for T already make its flow preserve θ and its kernel.

**Paper or page:** [On the second coefficient of the asymptotic expansion of Boutet de Monvel--Sjöstrand](https://arxiv.org/abs/2012.15456). It says: “τ(T, JU) = −Jτ(T, U)”

**Sources:**

- [S. M. Webster, Pseudo-Hermitian structures on a real hypersurface (1978)](https://doi.org/10.4310/jdg/1214434345)

### Analytic involutivity supplies CR coordinates

**Remember:** Convergent frames extend holomorphically, and holomorphic Frobenius gives coordinates.

*Rules out counterexamples.* MSC 32V30 (Embeddings of CR manifolds), 32V05. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A real analytic Cauchy–Riemann structure is an involutive bundle L of complex tangent directions, meeting its conjugate only at zero, with local bases given by convergent power series, so they extend holomorphically off the manifold.

**Problem.** Every real analytic Cauchy–Riemann manifold embeds locally into complex Euclidean space with its prescribed antiholomorphic directions. Its real tangent spaces span the ambient tangent spaces over ℂ.

**How the definition helps.** Convergence lets a local basis and its bracket identities extend holomorphically to a complexification, where the holomorphic Frobenius theorem gives coordinates killed by the extended directions (our own argument). On the real manifold these coordinates have independent differentials and no nonzero real vector in their common kernel, so they give the embedding. Nirenberg’s smooth counterexample lacks enough local solutions for an embedding.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “Nirenberg constructs a single, non-vanishing complex vector field P”

**Sources:**

- [Louis Nirenberg, On a question of Hans Lewy (1974)](https://doi.org/10.1070/rm1974v029n02abeh003856)

### Definite Levi form forces type two

**Remember:** A definite mixed quadratic term survives every tangent curve.

*Rules out counterexamples. Confidence: medium.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The D’Angelo one-type of a hypersurface ρ = 0 at a point is the supremum, over nonconstant holomorphic curves γ through it, of the order of ρ ∘ γ divided by the order of γ − γ(0). Order means the first nonzero Taylor degree over all components, infinite for a flat function.

**Problem.** A smooth real hypersurface in ℂⁿ, n ≥ 2, has one-type two wherever its Levi form is definite. This form is the complex Hessian of ρ restricted to complex tangent vectors.

**How the definition helps.** For a complex tangent curve of order k, the tᵏt̄ᵏ coefficient of ρ ∘ γ is the Levi form on the leading vector, and definiteness keeps it nonzero, so contact is at most two (our own argument). Nontangent curves have contact one, and a complex tangent line attains two. The indefinite hypersurface Im w = \|z₁\|² − \|z₂\|² contains the line (t,t,0).

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “Δ₁(∂Ωꜰ, 0) = ρꜰ.”

**Sources:**

- [John P. D’Angelo, Real Hypersurfaces, Orders of Contact, and Applications (1982)](https://doi.org/10.2307/2007015)

### Finite type makes real solutions constant

**Remember:** If both tangent directions kill a function, their brackets kill it too.

*Rules out counterexamples. Confidence: medium.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann function has derivative zero along every antiholomorphic tangent field. Finite bracket type means that those fields, their conjugates, and their repeated brackets span all complexified tangent directions at each point.

**Problem.** Every real-valued smooth Cauchy–Riemann function on a connected manifold of finite bracket type is constant.

**How the definition helps.** A real Cauchy–Riemann function is also killed by the conjugate fields, by conjugating the equations (our own argument). Brackets of fields that kill a function kill it too, so finite type makes its differential zero and connectedness makes it constant. On the flat hypersurface Im w = 0 in ℂ², Re w is a nonconstant real solution.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “it is of Bloom-Graham finite type at p”

**Sources:** none listed. No primary source with a working link was found.

### Levi brackets supply the missing direction

**Remember:** One nonzero Levi bracket fills the one missing direction.

*True by definition.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Bracket type at p is the least bracket length at which complex tangent fields, their conjugates and their repeated brackets span the complexified tangent space. On a real hypersurface, the fields of both types span all but one direction, and the Levi form records the mixed brackets \[X,Ȳ\] modulo them.

**Problem.** A real hypersurface has bracket type two at p exactly when its Levi form is nonzero at p.

**How the definition helps.** Brackets within one type stay in the span of the fields, so only mixed brackets can reach the missing direction (our own argument). Type two therefore means some \[X,Ȳ\] at p is nonzero modulo the fields, which is the Levi form being nonzero. The usual complex Hessian version agrees, by differentiating a one-form that vanishes on the complex tangents.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “The Levi form gives the length of the projection of \[v,w̄\] in the T-direction.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized contact ignores curve speed

**Remember:** A branched change of parameter multiplies both orders by the same number.

*True by definition.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** For a smooth hypersurface ρ = 0 and a nonconstant holomorphic curve γ starting on it, normalized contact is the vanishing order of ρ ∘ γ divided by that of γ − γ(0). Order means the first nonzero Taylor degree among all components, with infinity for a flat function.

**Problem.** Precomposing a curve by any nonconstant holomorphic change of parameter fixing zero preserves its normalized contact.

**How the definition helps.** A change of parameter of order k multiplies both orders by k, so their ratio is unchanged (our own argument). Its leading monomial sends distinct exponent pairs to distinct pairs, so leading terms cannot cancel. A flat numerator stays flat.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “Δ₁(M, p) = Δ₁ʳᵉᵍ(M, p) = ρ₁(M,p;(z)).”

**Sources:**

- [John P. D’Angelo, Real Hypersurfaces, Orders of Contact, and Applications (1982)](https://doi.org/10.2307/2007015)

### Pure powers detect finite type

**Remember:** Each coordinate needs a pure power, or its axis lies inside.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Consider the hypersurface Re w + ∑ \|m(z)\|² = 0, summed over finitely many nonconstant monomials m in z; a pure power is one in a single coordinate. Its D’Angelo one-type at zero is the supremum, over holomorphic curves through zero, of the vanishing order of the defining function along the curve divided by the curve’s first nonconstant Taylor degree.

**Problem.** The hypersurface has finite one-type at zero exactly when every z coordinate has a pure power. Its type then equals twice the largest of the least pure exponents for the individual coordinates.

**How the definition helps.** Squares cannot cancel, so a curve’s contact is one if w has least order, and otherwise at most twice the least pure exponent of a least-order z coordinate (our own proof). The coordinate axes attain the stated maximum. A missing pure power puts a whole coordinate axis in the hypersurface, so the type is infinite.

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “F is convenient (i.e., 𝒩₊(F) intersects all axes).”

**Sources:** none listed. No primary source with a working link was found.

### Real analyticity permits holomorphic flattening

**Remember:** Flat complex leaves need analytic transverse dependence to straighten holomorphically.

*Rules out counterexamples.* MSC 32V40 (Real submanifolds in complex manifolds), 32V05. arXiv math.DG. Level 3: graduate.

**Definition.** A real hypersurface is Levi-flat if it is locally foliated by complex hypersurfaces, and real analytic if its local defining equations can be convergent real power series.

**Problem.** A real analytic Levi-flat hypersurface is locally a real hyperplane in holomorphic coordinates.

**How the definition helps.** Analytic Frobenius gives leaf coordinates that depend analytically on the transverse parameter, and their holomorphic extensions straighten the leaves to a hyperplane (our own). The product of complex space with a smooth plane curve that fails real analyticity at a point is Levi-flat (our own). Holomorphic flattening would make that curve real analytic, so analyticity is needed (our own).

**Paper or page:** [Levi-flats in ℂℙⁿ: a survey for nonexperts](https://arxiv.org/abs/2501.15710v2). It says: “If p∈M⊂ℂⁿ is a real analytic Levi flat hypersurface, then there exists a neighbourhood U of p in ℂⁿ and a biholomorphic map”

**Sources:** none listed. No primary source with a working link was found.

### A weaker norm detects Neumann compactness

**Remember:** A small energy term leaves only a compact error.

*Makes the theorem clean to state or prove.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** A compactness estimate gives, for each ε &gt; 0, a constant Cε with ‖u‖² ≤ εQ(u) + Cε‖u‖₋₁² for all u in the common L² domain of ∂̄ and its adjoint, where Q(u) = ‖∂̄u‖² + ‖∂̄\*u‖² is the energy. The weaker norm is the dual norm of the Sobolev space H₀¹, applied to each coefficient.

**Problem.** On a smooth bounded pseudoconvex domain, this estimate in positive form degree implies compactness of the corresponding ∂̄-Neumann inverse. Here pseudoconvexity means nonnegative boundary curvature in complex tangent directions.

**How the definition helps.** The estimate upgrades convergence in the weaker norm to L² convergence along sequences of bounded energy, by applying it to differences and letting ε decrease to zero (our own). Rellich’s compact embedding supplies a subsequence converging in the weaker norm (our own). So the energy inclusion into L² is compact, and the inverse factors through it (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “Assume that for all ε &gt; 0 there exist a Banach space Zε and a compact linear map Kε”

**Sources:** none listed. No primary source with a working link was found.

### A weighted adjoint brings curvature into the energy

**Remember:** The adjoint carries the weight's slope; the energy shows its Hessian.

*Makes the theorem clean to state or prove.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** For a smooth real weight ϕ on a domain in ℂⁿ, the weighted adjoint is the Hilbert adjoint of ∂̄ for the L² inner product with density exp(−ϕ). On smooth compactly supported forms it is the ordinary formal adjoint plus the term ∑ vⱼ ∂ϕ/∂zⱼ, which carries the first derivatives of ϕ (our own).

**Problem.** For smooth compactly supported (0,1)-forms u, the weighted energy is at least the weighted integral of the complex Hessian of ϕ evaluated on u. The energy is the sum of the squared weighted norms of ∂̄u and of the weighted adjoint applied to u.

**How the definition helps.** Commuting the derivatives ∂/∂z̄ₖ past the extra ∂ϕ/∂zⱼ term of the weighted adjoint produces the complex Hessian of ϕ (our own). Integration by parts turns the rest into a sum of squares of weighted derivatives, and compact support removes the boundary terms (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “‖Tϕ\*α‖₁² + ‖Sϕα‖₃²”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Closed data characterize solvable ∂̄ equations

**Remember:** Mixed derivatives must agree before a function can have the prescribed derivatives.

*Rules out counterexamples.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** A smooth (0,1)-form f = ∑ fⱼ dz̄ⱼ proposes the derivatives ∂u/∂z̄ⱼ of an unknown function u. It is ∂̄-closed when ∂fⱼ/∂z̄ₖ = ∂fₖ/∂z̄ⱼ for all j and k, the identities that mixed derivatives of u must satisfy.

**Problem.** On a pseudoconvex domain in ℂⁿ, the equation ∂̄u = f with smooth f has a smooth solution exactly when f is ∂̄-closed.

**How the definition helps.** Closure is necessary because mixed derivatives of a smooth function commute; for example z̄₁ dz̄₂ is not closed in ℂ², so it has no solution (our own). Sufficiency is Hörmander’s L² existence theorem on pseudoconvex domains, and interior regularity makes the solution smooth (our own).

**nLab:** [Dolbeault complex](https://ncatlab.org/nlab/show/Dolbeault+complex). It says: “The Dolbeault complex of X is the chain complex”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Hankel operators as least norm solutions

**Remember:** A Hankel operator is the least-norm solution of a ∂̄ equation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** For a bounded symbol φ, the Bergman Hankel operator sends a square-integrable holomorphic function g to φg minus its orthogonal projection onto the holomorphic functions. When φ is C¹, the output solves ∂̄u = g∂̄φ and is orthogonal to holomorphic functions, so it is the least-norm solution (our own).

**Problem.** On a smooth bounded pseudoconvex domain, compactness of the ∂̄-Neumann inverse on (0,1)-forms makes this Hankel operator compact for every C¹ symbol on the closure.

**How the definition helps.** The Hankel operator is the canonical solution operator ∂̄\*N applied to g∂̄φ, and g ↦ g∂̄φ is bounded (our own). Compactness of N makes ∂̄\*N compact, because ‖∂̄\*Nf‖² ≤ ⟨Nf,f⟩ (our own). A compact operator composed with a bounded one is compact (our own).

**Paper or page:** [Big Hankel operators on Hardy spaces of strongly pseudoconvex domains](https://arxiv.org/abs/2102.03999v1). It says: “Then the Hankel operator H<sub>f</sub>=(I-P<sub>B</sub>)M<sub>f</sub> is bounded”

**Sources:**

- [Mehmet Celik, Sonmez Sahutoglu and Emil J. Straube, A sufficient condition for compactness of Hankel operators](https://doi.org/10.7900/jot.2021apr04.2334)

### Orthogonality separates variables in canonical solutions

**Remember:** Solve in one variable; holomorphic factors in the others ride along.

*True by definition. Confidence: medium.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The canonical solution of ∂̄u = f is the square-integrable solution orthogonal to every square-integrable holomorphic function. It is unique, so any solution with this orthogonality is the canonical one (our own).

**Problem.** On a product of smoothly bounded planar domains, take an L² datum in one variable times a square-integrable holomorphic function of the other variables. Its canonical solution is the one-variable canonical solution times that same function.

**How the definition helps.** The candidate solves the equation because the other factor is holomorphic, so only orthogonality needs checking (our own). By Fubini’s theorem, its inner product with a holomorphic test function integrates one-variable inner products over slices, and each of these is zero (our own).

**Paper or page:** [Uniform estimates for the canonical solution to the ∂̄-equation on product domains](https://arxiv.org/abs/2006.14484v2). It says: “where Tⱼ is the canonical solution operator over Dⱼ.”

**Sources:**

- [Uniform estimates for the canonical solution to the ∂̄-equation on product domains](https://arxiv.org/abs/2006.14484v2)

### Representing the Neumann inverse by the energy inclusion

**Remember:** The Neumann inverse is the energy inclusion times its adjoint.

*True by definition.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** On a bounded pseudoconvex domain, the energy space holds the (0,1)-forms in the domains of both ∂̄ and its Hilbert adjoint ∂̄\*. Its squared norm is Q(u) = ‖∂̄u‖² + ‖∂̄\*u‖². The ∂̄-Neumann inverse N sends an L² form f to the energy-space form Nf with Q(Nf,v) = ⟨f,v⟩ for every v in that space (our own).

**Problem.** On a bounded C⁴ pseudoconvex domain in ℂ², the ∂̄-Neumann inverse on (0,1)-forms is compact exactly when the inclusion J of the energy space into L² is compact.

**How the definition helps.** The defining identity of N says N = JJ\*, where J\* is the adjoint of the inclusion (our own). A Hilbert space operator J is compact exactly when JJ\* is compact (our own). The basic estimate ‖u‖² ≤ C·Q(u) makes J bounded and N well defined (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “or, equivalently, 𝒥 is compact on D²₍₀,₁₎(Ω)”

**Sources:**

- [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2)

### Testing the adjoint detects the normal boundary coefficient

**Remember:** Test functions with free boundary values force the normal coefficient to vanish.

*Rules out counterexamples.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The maximal ∂̄ acts on every L² function u whose distributional ∂̄u is in L², with no boundary condition. A (0,1)-form v in L² is in the adjoint domain when ⟨∂̄u,v⟩ = ⟨u,g⟩ for one L² function g and all such u. So the test functions may have any boundary values (our own).

**Problem.** Let ρ be a defining function of a smooth bounded domain, and let v be a (0,1)-form smooth up to the boundary. Then v is in the adjoint domain exactly when its complex normal coefficient ∑ vⱼ ∂ρ/∂zⱼ vanishes on the boundary.

**How the definition helps.** For smooth u, integration by parts gives ⟨u,g⟩ for the formal adjoint g plus a boundary integral of u times the normal coefficient (our own). Since u may have any boundary values, the test holds exactly when that coefficient vanishes; dz̄₁ on the unit ball fails, with coefficient z̄₁ (our own). Smooth approximation extends this to the whole maximal domain (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “if and only if ∑ⱼ₌₁ⁿ αⱼ(z) ∂ρ/∂zⱼ(z) = 0”

**Sources:**

- [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3)

### The energy definition gives both Neumann boundary conditions

**Remember:** Both the form and its ∂̄ must pass the adjoint test.

*True by definition. Confidence: medium.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** On the forms in the domains of both ∂̄ and ∂̄\*, put Q(u,v) = ⟨∂̄u,∂̄v⟩ + ⟨∂̄\*u,∂̄\*v⟩. The ∂̄-Neumann Laplacian is defined at u when Q(u,v) = ⟨g,v⟩ for one L² form g and every such v, and it sends u to g.

**Problem.** On a smooth bounded domain, take a form smooth up to the boundary. It lies in the domain of this Laplacian exactly when the complex normal contractions of the form and of its ∂̄ derivative both vanish on the boundary.

**How the definition helps.** Membership in the domain of Q is the adjoint boundary condition on u itself (our own). Integrating Q(u,v) by parts leaves one boundary term, the normal contraction of ∂̄u paired with v (our own). Representing Q(u,·) by an L² form forces that term to vanish for all v, which is the same condition on ∂̄u (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “if and only if ∑ⱼ₌₁ⁿ αⱼ(z) ∂ρ/∂zⱼ(z) = 0 for any z ∈ ∂Ω.”

**Sources:**

- [J. J. Kohn, Harmonic integrals on strongly pseudo-convex manifolds, I (1963)](https://doi.org/10.2307/1970506)

### The inverse Hessian measures data for the ∂̄ equation

**Remember:** The Hessian measures tests and its inverse measures data.

*Makes the theorem clean to state or prove.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** Let ϕ be a smooth real weight whose complex Hessian H = (∂²ϕ/∂zⱼ∂z̄ₖ) is positive definite. The squared dual norm of a (0,1)-form f measures it by the inverse Hessian: it is ∫ ⟨H⁻¹f,f⟩ exp(−ϕ) dV. By Cauchy–Schwarz, \|⟨f,α⟩ϕ\|² is at most this times ∫ ⟨Hα,α⟩ exp(−ϕ) dV for every form α (our own).

**Problem.** On a pseudoconvex domain in ℂⁿ, suppose a (0,1)-form f has zero weak antiholomorphic derivative and finite dual norm. Then ∂̄u = f has a solution whose L² norm with weight exp(−ϕ) is at most that dual norm.

**How the definition helps.** Hörmander’s weighted estimate bounds ∫ ⟨Hα,α⟩ exp(−ϕ) by the ∂̄ energy of α, so the Cauchy–Schwarz bound controls ⟨f,α⟩ by ‖∂̄\*α‖ on test forms (our own). Hilbert space duality then gives a solution u with the stated norm (our own).

**Paper or page:** [A bridge connecting convex analysis and complex analysis and L²-estimate of d and ∂̄](https://arxiv.org/abs/2405.08559v2). It says: “we can solve ∂̄u=f with the estimate”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Top degree turns the Neumann problem into the Dirichlet problem

**Remember:** In top degree the normal condition kills the whole trace.

*True by definition. Confidence: medium.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** In top degree a (0,n)-form is one function times dz̄₁∧…∧dz̄ₙ, and its ∂̄ is zero. The ∂̄-Neumann condition asks its complex normal contraction to vanish on the boundary, and since the normal is nonzero, the function itself must vanish there (our own).

**Problem.** On a smooth bounded domain in ℂⁿ, with the forms dz̄ⱼ orthonormal, the top-degree ∂̄-Neumann Laplacian acts on the coefficient as one quarter of the positive Laplacian. Its domain imposes zero boundary values, as for the Dirichlet problem.

**How the definition helps.** With ∂̄u = 0, the energy is ‖∂̄\*u‖² = ∑ ‖∂f/∂zⱼ‖², and for f vanishing on the boundary integration by parts makes this one quarter of ∫\|∇f\|² (our own). So the energy is the Dirichlet energy on the first Sobolev space with zero boundary values, whose operator is the positive Laplacian divided by four (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “then f<sub>norm</sub> ∈ W<sup>1,p</sup><sub>0,(0,q−1)</sub>(Ω)”

**Sources:**

- [J. J. Kohn, Potential theory and several complex variables (1963)](https://www.numdam.org/item/ASNSP_1963_3_17_4_373_0/)

### Boundedness prevents infinite mass

**Remember:** Bound the potential before multiplying it by a current.

*Rules out counterexamples.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** Let u be a locally bounded plurisubharmonic function on a domain in ℂⁿ, that is, upper semicontinuous and subharmonic on every complex line. Its Bedford–Taylor Monge–Ampère measure repeats T ↦ ddᶜ(uT) n times, starting from T = 1. Each step is defined because T is a positive current with measure coefficients, and a bounded Borel function times a measure is a measure (our own).

**Problem.** The resulting measure has finite mass on compact sets and equals the top power of the ordinary complex Hessian wherever u is smooth.

**How the definition helps.** Local boundedness makes each product uT a current with locally finite measure coefficients, and Bedford and Taylor show each step gives a closed positive current (our own). So the final measure has locally finite mass, and wherever u is smooth the product rule gives the ordinary Hessian power (our own). Kiselman’s unbounded example in dimension at least two has infinite smooth Hessian mass in every small ball about zero (our own).

**Paper or page:** [A variational Approach to complex Hessian equations in ℂⁿ](https://arxiv.org/abs/1301.6502). It says: “Then we can define inductively a closed m-positive current”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Zbigniew Błocki, The domain of definition of the complex Monge–Ampère operator, American Journal of Mathematics 128 (2006), 519–530](https://doi.org/10.1353/ajm.2006.0010)

### Current recursion gives exact products

**Remember:** Multiply the current first and differentiate afterward.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** For a locally bounded plurisubharmonic u and a closed positive current T, a differential form with distribution coefficients, Bedford and Taylor define ddᶜu ∧ T as ddᶜ(uT). So a mixed product is ddᶜ of the first potential times the remaining product.

**Problem.** Every mixed product of k such Hessians on a domain in ℂⁿ, with 1 ≤ k ≤ n, equals ddᶜS for some current S.

**How the definition helps.** Take S = u₁ ddᶜu₂ ∧ … ∧ ddᶜuₖ; the recursive definition says the product is ddᶜS (our own). Bedford and Taylor show that each step gives a closed positive current, so S is defined at every stage.

**Paper or page:** [A variational Approach to complex Hessian equations in ℂⁿ](https://arxiv.org/abs/1301.6502). It says: “we can define inductively a closed m-positive current”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)

### Kähler classes fix Monge–Ampère mass

**Remember:** The top power of a closed form integrates to a cohomology number.

*True by definition. Confidence: medium.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** A Kähler form ω is a closed real (1,1)-form with ω(v,Jv) &gt; 0 for every nonzero real tangent vector v. On a compact n-dimensional manifold its Monge–Ampère mass is ∫ ωⁿ, the integral of a closed top form. So the mass depends only on the cohomology class of ωⁿ (our own).

**Problem.** Two Kähler forms in the same cohomology class on a compact complex manifold have equal total Monge–Ampère mass.

**How the definition helps.** If ω′ = ω + dη, then ω′ⁿ − ωⁿ is exact (our own). An exact top form on a compact manifold without boundary integrates to zero by Stokes’ theorem (our own).

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “Since the 2-form ω is closed, it determines an element in de Rham cohomology”

**Sources:** none listed. No primary source with a working link was found.

### Bergman spans test quadrature maps

**Remember:** Quadrature means the constant one is a finite kernel combination.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** The Bergman span is the set of finite linear combinations of Bergman kernel functions and their derivatives, the vectors representing point values and derivatives of square-integrable holomorphic functions. A volume quadrature domain computes every such function’s integral by one fixed finite combination of values and derivatives. Since the integral of f is ⟨f,1⟩, this says the constant 1 lies in the span (our own).

**Problem.** A holomorphic isomorphism between bounded domains has a volume quadrature domain as its image exactly when its complex Jacobian determinant belongs to the source span.

**How the definition helps.** The map f ↦ (f∘φ)·det φ′ is unitary from the target Bergman space to the source one and sends 1 to the Jacobian (our own). By the chain rule it carries the target span onto the source span (our own). So 1 lies in the target span exactly when the Jacobian lies in the source span.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Legg, Quadrature Domains for the Bergman Space in Several Complex Variables (2018)](https://link.springer.com/article/10.1007/s40315-017-0224-0)

### Constant Bergman invariant gives an Einstein metric

**Remember:** Constant ratio of volume to kernel makes Ricci equal minus the metric.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** On a bounded domain with Bergman kernel K, the Bergman metric g is the matrix of mixed complex second derivatives of log K(z,z). The Bergman invariant B = det(g)/K(z,z) compares the metric’s volume density with the kernel, so log det(g) = log B + log K(z,z) (our own).

**Problem.** If B is constant, the Ricci curvature tensor of the Bergman metric equals −g.

**How the definition helps.** The Ricci tensor of g is minus the mixed second derivatives of log det(g) (our own). If B is constant, those of log B vanish, so the Ricci tensor is minus those of log K(z,z), which is −g (our own).

**Paper or page:** [Kähler-Einstein Bergman metrics on pseudoconvex domains of dimension two](https://arxiv.org/abs/2309.10595v2). It says: “if and only if the Bergman invariant function is constant”

**Sources:**

- [Kähler-Einstein Bergman metrics on pseudoconvex domains of dimension two](https://arxiv.org/abs/2309.10595v2)

### Dual evaluation reveals Bergman plurisubharmonicity

**Remember:** Point evaluation is a holomorphic section of the dual bundle.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32U05. arXiv math.CV. Level 4: research.

**Definition.** For a weight exp(−φ), the diagonal Bergman kernel K(z) is the largest \|f(z)\|² among holomorphic f with ∫\|f\|² exp(−φ) ≤ 1. So K(z) is the squared norm of the evaluation functional f ↦ f(z) on the weighted Bergman space.

**Problem.** Let Ω be a bounded pseudoconvex domain and fix z in Ω. If φ(t,z) is smooth and plurisubharmonic in both variables near U×Ω̄, then log Kᵗ(z) is plurisubharmonic in t ∈ U.

**How the definition helps.** Evaluation at z is a holomorphic section of the dual of the bundle of weighted Bergman spaces over U (our own). Its squared norm is Kᵗ(z), and Berndtsson proves the bundle has positive curvature, so the dual has negative curvature (our own). The log norm of a holomorphic section of a negatively curved bundle is plurisubharmonic (our own).

**Paper or page:** [A Hilbert Bundles Description of Complex Brunn-Minkowski Theory](https://arxiv.org/abs/2305.07476v1). It says: “Then for each z∈Ω, the map U∋t↦log Kᵗ(z) is plurisubharmonic.”

**Sources:**

- [B. Berndtsson, Subharmonicity properties of the Bergman kernel and some other functions associated to pseudoconvex domains (2006)](https://doi.org/10.5802/aif.2223)

### Skew correction recovers Szegő projection

**Remember:** Correct a reproducing projection by its failure to be self-adjoint.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV, math.FA. Level 4: research.

**Definition.** The Hardy space is the closure in boundary L² of the boundary values of holomorphic functions. Let S be the orthogonal projection onto it, and C any bounded projection onto it, such as a Cauchy–Fantappiè integral. The Kerzman–Stein operator A = C − C\* measures how far C is from self-adjoint, and A\* = −A.

**Problem.** The orthogonal Szegő projection satisfies S = C(I+A)⁻¹, and the inverse has norm at most one.

**How the definition helps.** Because C and S have the same range, SC = C and SC\* = S, so S(I+A) = C. Since A is skew-adjoint, the real part of ⟨(I+A)x,x⟩ is ‖x‖², so I+A and its adjoint are bounded below by one (our own). Hence I+A is invertible with an inverse of norm at most one (our own).

**Wikipedia:** [Szegő kernel](https://en.wikipedia.org/wiki/Szeg%C5%91_kernel). It says: “a reproducing kernel on a natural Hilbert space”

**Sources:**

- [Kerzman and Stein, The Szegö kernel in terms of Cauchy-Fantappiè kernels (1978)](https://doi.org/10.1215/S0012-7094-78-04513-1)

### Tangent separation prevents Leray poles

**Remember:** A complex tangent plane must miss every interior point.

*Rules out counterexamples.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** A smooth bounded domain is strictly complex linearly convex if each affine complex tangent hyperplane meets the closure only at its point of tangency. The Leray kernel at interior z and boundary point w divides ∂ρ(w) by its pairing with w − z, for a defining function ρ. Tangent separation makes this pairing nonzero (our own).

**Problem.** On such a bounded domain the Leray kernel depends holomorphically on the interior point z and reproduces holomorphic functions continuous on the closure.

**How the definition helps.** Tangent separation keeps the denominator nonzero, and z enters it linearly, so the kernel is holomorphic in z; the Cauchy–Fantappiè formula then reproduces holomorphic functions. Without it, the image of the unit ball under (u,v) ↦ (u, v+u²) is strictly pseudoconvex (our own). But its complex tangent at (0,1) contains interior points (t,1) for small nonzero real t (our own).

**Wikipedia:** [Bochner–Martinelli formula](https://en.wikipedia.org/wiki/Bochner%E2%80%93Martinelli_formula). It says: “generalization of the Cauchy integral formula to functions of several complex variables”

**Sources:**

- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Zero-free kernels give global diastasis

**Remember:** Nonvanishing keeps the logarithm finite even away from the diagonal.

*Rules out counterexamples.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** A bounded domain is Lu Qi-Keng if its Bergman kernel K(z,w) has no zeros. The diastasis log(K(z,z)K(w,w)/\|K(z,w)\|²) is the two-point potential of the Bergman metric, and it is finite exactly where K(z,w) ≠ 0 (our own).

**Problem.** On a Lu Qi-Keng domain the diastasis extends to a finite real analytic function on every pair of points.

**How the definition helps.** The diagonal values are positive and K is real analytic in (z,w), so the diastasis is finite and real analytic wherever K(z,w) ≠ 0 (our own). Nikolov and Zwonek found zeros of K on the symmetrized tridisc, the image of the unit tridisc under the elementary symmetric polynomials.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Nikolov and Zwonek, The Bergman kernel of the symmetrized polydisc in higher dimensions has zeros (2006)](https://link.springer.com/article/10.1007/s00013-006-1801-z)

### Fiber volume encodes Bergman weights

**Remember:** Give each fiber the area that the base point should weigh.

*True by definition.* MSC 32A36 (Bergman spaces of functions in several complex variables), 32A25. arXiv math.CV. Level 4: research.

**Definition.** Over a bounded domain D with a positive, continuous, bounded weight w, the Forelli–Rudin domain puts above each z a disc centered at zero with area w(z). The weighted Bergman space of D measures holomorphic functions by ∫ \|f\|² w dV. For functions that do not depend on the disc variable, the ordinary L² norm on the new domain equals this weighted norm (our own).

**Problem.** The ordinary Bergman kernel of the enlarged domain at (z,0) and (u,0) equals the weighted Bergman kernel at z and u.

**How the definition helps.** So the functions constant along the discs form a subspace isometric to the weighted Bergman space (our own). Averaging over disc rotations projects orthogonally onto that subspace and keeps values at the disc centers (our own). Thus both spaces represent evaluation at (z,0) by the same kernel.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Ligocka, On the Forelli–Rudin construction and weighted Bergman projections (1989)](https://geodesic.mathdoc.fr/articles/10.4064/sm-94-3-257-272/)

### Monomial projections respect the exponent

**Remember:** Use only monomials whose pth powers have finite integral.

*Makes the theorem clean to state or prove.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 4: research.

**Definition.** On a bounded domain invariant under coordinate rotations, with 1 &lt; p &lt; ∞, use only the holomorphic Laurent monomials e of finite Lᵖ norm. The monomial basis projection sends f to ∑ cₑ e with cₑ = ∫ f ē \|e\|ᵖ⁻² / ∫ \|e\|ᵖ, so each coefficient uses the Lᵖ pairing instead of the L² one.

**Problem.** On bounded monomial polyhedra, domains given by independent monomial inequalities, this projection maps Lᵖ boundedly onto its holomorphic subspace for 1 &lt; p &lt; ∞.

**How the definition helps.** Using only Lᵖ monomials with Lᵖ-adapted coefficients keeps outputs inside Lᵖ, and the cited paper proves boundedness by kernel estimates. The ordinary Bergman projection fails: on the triangle \|z₁\| &lt; \|z₂\| &lt; 1 it sends z̄₂ to a nonzero multiple of 1/z₂, which has infinite L⁴ norm (our own).

**Paper or page:** [Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3). It says: “The Monomial Basis Projection is a bounded surjective projection operator”

**Sources:**

- [Chakrabarti and Edholm, Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3)

### Hyperfunctions as boundary values form a flabby sheaf

**Remember:** A hyperfunction is the jump between holomorphic functions above and below.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32A45 (Hyperfunctions). arXiv math.CV. Level 4: research.

**Definition.** A hyperfunction on an open set U ⊂ ℝ is the jump across U of a function holomorphic beside U. Precisely, take a complex neighborhood V with V ∩ ℝ = U; a hyperfunction is a holomorphic function on V ∖ U modulo functions holomorphic on V. This quotient does not depend on V (our own).

**Problem.** Hyperfunctions on the open subsets of ℝ form a flabby sheaf. So every hyperfunction on an open set U extends to a hyperfunction on all of ℝ.

**How the definition helps.** Choosing V = ℂ ∖ (ℝ ∖ U) gives each hyperfunction on U a representative holomorphic on all of ℂ ∖ ℝ (our own). That same function represents a hyperfunction on ℝ restricting to it, so restriction is onto (our own). Independence of V and gluing follow because open subsets of ℂ have no first holomorphic cohomology (our own).

**Wikipedia:** [Hyperfunction](https://en.wikipedia.org/wiki/Hyperfunction). It says: “The obvious restriction maps turn ℬ into a sheaf (which is in fact flabby).”

**Sources:**

- [M. Sato, Cyōkansū no riron (Theory of Hyperfunctions), Sūgaku 10 (1958), no. 1, 1–27](https://doi.org/10.11429/sugaku1947.10.1)

### Logarithmic radii give integer slopes

**Remember:** Off the amoeba, each logarithmic slope counts turns around zero.

*Rules out counterexamples.* MSC 32A60 (Zero sets of holomorphic functions of several complex variables), 11R06. arXiv math.AG. Level 4: research.

**Definition.** The Ronkin function of a nonzero polynomial P averages log\|P\| over the torus of points with fixed log-moduli r = (log\|z₁\|,…,log\|zₙ\|). The amoeba is the set of r whose torus contains a zero of P. Off the amoeba, the derivative in rⱼ is an average of winding numbers of P around the jth circle (our own).

**Problem.** On each connected component of the complement of the amoeba of a nonzero polynomial, its Ronkin function is affine with integral gradient.

**How the definition helps.** By the argument principle, these winding numbers are integers that stay constant as angles and radii move without meeting zeros (our own). So the gradient is a constant integer vector on each component (our own). For 1 + x the Ronkin function is max(0, r), whose slope jumps at the amoeba point 0 (our own).

**Wikipedia:** [Amoeba (mathematics)](https://en.wikipedia.org/wiki/Amoeba_%28mathematics%29). It says: “The Ronkin function is convex and affine on each connected component of the complement of the amoeba of p(z).”

**Paper or page:** [Generalized Mahler measures of Laurent polynomials](https://arxiv.org/abs/2308.04601). It says: “Let $k \\notin \\mathcal{K}\_{\\mathfrak {a}}.$ Then $\\varrho \_{\\mathfrak {a}, k}<sup>j</sup> (x<sub>1</sub>, \\dots , \\widehat{x<sub>j</sub>}, \\dots , x<sub>n</sub>)$ is constant for all $(x<sub>1</sub>, \\dots , \\widehat{x<sub>j</sub>}, \\dots , x<sub>n</sub>) \\in \\mathbb {T}\_{a<sub>1</sub>, \\dots , \\widehat{a<sub>j</sub>}, \\dots , a<sub>n</sub>}<sup>n-1</sup>.$”

**Sources:**

- [Generalized Mahler measures of Laurent polynomials, Proposition 7.2](https://arxiv.org/abs/2308.04601)
- [Amoeba (mathematics), Ronkin function](https://en.wikipedia.org/wiki/Amoeba_(mathematics)#Ronkin_function)

### Principal pullbacks permit integral division

**Remember:** With one generator g, divide the monic equation by powers of g.

*True by definition.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32C20. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A function h is integral over an ideal I if hᵐ + a₁hᵐ⁻¹ + … + aₘ = 0 for some m with each aⱼ in Iʲ. On the normalized blowup, I is locally generated by one function g, so dividing by gᵐ gives a monic equation for h/g (our own).

**Problem.** On a reduced irreducible complex space, let I be a nonzero ideal locally given by finitely many holomorphic generators and relations. Every function integral over I pulls back into the ideal generated by I on its normalized blowup.

**How the definition helps.** After division the coefficients aⱼ/gʲ are holomorphic on the blowup (our own argument). Normality, meaning every fraction satisfying a monic equation over the local ring is holomorphic, makes h/g holomorphic. So h lies in the ideal generated by g.

**Paper or page:** [On Skoda's theorem for Nadel-Lebesgue multiplier ideal sheaves on singular complex spaces and regularity of weak Kähler-Einstein metrics](https://arxiv.org/abs/2301.00094v1). It says: “For every morphism π : X̃ → X satisfying: (i) π is a proper and surjective, (ii) X̃ is a normal complex space”

**Sources:** none listed. No primary source with a working link was found.

### Coherent means nuclear and pseudocompact, so Grauert's theorem becomes two checks

**Remember:** Split coherent into nuclear and pseudocompact, then push each one forward.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32L10. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A complex M of liquid modules is pseudocompact if it has a bounded-above model built from compact projective modules. It is nuclear if every map P → M from a compact P comes from an element of P∨ ⊗ M, where P∨ is the internal dual. Over a compact Stein set, coherent complexes are exactly those that are both (our own).

**Problem.** For a proper map f between complex analytic spaces, the derived pushforward sends complexes with coherent cohomology to complexes with coherent cohomology. In particular, coherent sheaves on a compact complex space have finite-dimensional cohomology.

**How the definition helps.** Since coherence splits into two properties, the theorem reduces to showing that proper pushforward preserves each one (our own). Restriction of scalars over nuclear algebras preserves nuclearity, and proper pushforward equals exceptional pushforward, whose right adjoint preserves bounded sums. Proposition 9.19 and Theorems 12.17–12.18 of the complex notes supply these results.

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics). It says: “to provide new "analysis-free" proofs of the finiteness of coherent cohomology, Serre duality, GAGA, and the Hirzebruch-Riemann-Roch theorem in complex analysis.”

**Sources:**

- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Cohomology matrices expose jumping fibers

**Remember:** Fiber cohomology jumps where matrix ranks drop.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Near each base point, Grauert’s theorem gives a Grauert complex for a flat coherent sheaf: a finite sequence of holomorphic matrices whose consecutive products vanish. Evaluating the matrices at a point gives a complex of vector spaces whose cohomology is the sheaf cohomology of that fiber.

**Problem.** Let a coherent analytic sheaf be flat over the base of a proper holomorphic map. In each degree, the points where fiber cohomology has dimension at least k form a closed analytic set.

**How the definition helps.** Fiber cohomology dimension is the middle dimension minus the ranks of the incoming and outgoing matrices at that point (our own calculation). So dimension at least k means a block diagonal matrix of the two maps has rank at most a fixed number, and its minors give the equations. Grauert’s theorem supplies such a complex on a neighborhood of each point.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “Proper base change also holds in the context of complex manifolds and complex analytic spaces.”

**Sources:**

- [H. Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02684746/)

### Flat families preserve Euler characteristic

**Remember:** Cohomology can jump, but the alternating sum stays fixed.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The fiber Euler characteristic is the alternating sum of the cohomology dimensions of the sheaf on a fiber. Near each base point, a Grauert complex of holomorphic vector bundles computes those groups on every nearby fiber. So the alternating sum can be computed from that complex (our own).

**Problem.** For a proper holomorphic map, the fiber Euler characteristic of a coherent sheaf flat over the base is locally constant.

**How the definition helps.** For a finite complex of vector spaces, the alternating sum of cohomology dimensions equals that of the term dimensions (our own calculation). Each map’s rank appears twice with opposite signs. The bundle ranks are constant near the base point, and Grauert’s theorem supplies the complex there (our own).

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “Proper base change also holds in the context of complex manifolds and complex analytic spaces.”

**Sources:**

- [H. Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02684746/)

### Hypercohomology lifts comparison to complexes

**Remember:** Compare the terms, then let the spectral sequence compare the complex.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The hypercohomology of a bounded complex of sheaves F is the cohomology of the global sections of an injective resolution of F, a quasi-isomorphic bounded-below complex of injective sheaves. A spectral sequence computes it from the cohomology of the individual sheaves, with finitely many terms in each degree (our own).

**Problem.** On a complex projective variety, a bounded complex of coherent algebraic sheaves has the same hypercohomology after extension to holomorphic coefficients.

**How the definition helps.** Serre’s theorem identifies each sheaf’s algebraic and analytic cohomology, and analytification gives a map of hypercohomology spectral sequences (our own explanation). Because the complex is bounded, an isomorphism on the first page gives an isomorphism on the limit (our own).

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “Then the hypercohomology of ℱ• on X is isomorphic to the hypercohomology of its analytification”

**Sources:**

- [Eita Haibara and Taewan Kim, Relative-Hyper GAGA Theorem, Theorem 3.0.1](https://arxiv.org/abs/2409.01481v3)
- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)

### Proper maps preserve sheaf coherence

**Remember:** Properness keeps inverse images of compact sets compact.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The direct image of a sheaf under a holomorphic map assigns to each open set of the target the sections over its inverse image. The map is proper when inverse images of compact sets are compact. Over a point this means a compact source, where coherent cohomology is finite-dimensional (our own).

**Problem.** Under a proper holomorphic map, the direct image of a coherent analytic sheaf, one with finitely many local generators and relations, is coherent.

**How the definition helps.** Properness is the compactness hypothesis in Grauert’s direct image theorem, which gives coherence. Without it the result fails: for ℂ → point, the direct image of the holomorphic functions is 𝒪(ℂ), which is infinite-dimensional (our own). A coherent sheaf on a point is finite-dimensional (our own).

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “the direct image of a coherent sheaf under a proper morphism is coherent”

**Sources:**

- [Hans Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://doi.org/10.1007/bf02684746)

### Hypersurfaces supply poles where points cannot

**Remember:** A local equation supplies a pole where deleting a point does not.

*Rules out counterexamples. Confidence: medium.* MSC 32D05 (Domains of holomorphy), 32D20, 32E10. arXiv math.CV. Level 4: research.

**Definition.** A domain of holomorphy has no boundary patch across which all its holomorphic functions extend from one common open subset. A closed analytic hypersurface is locally the zero set of one holomorphic function h ≢ 0. So 1/h is holomorphic off the hypersurface and has a pole along it (our own).

**Problem.** Removing a closed analytic hypersurface from a domain of holomorphy in ℂⁿ leaves a domain of holomorphy. Removing a point from a ball in dimension at least two can destroy this property.

**How the definition helps.** Near the hypersurface 1/h blocks extension, and the original boundary blocks it elsewhere, so the complement is locally a domain of holomorphy (our own). The solution of the local Levi problem over a Stein domain turns this local property into a global one (our own). A point has no such defining equation, and Hartogs’s theorem extends every function across a puncture in a ball of dimension at least two.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “any function holomorphic on U ∖ K can be analytically continued to U”

**Sources:** none listed. No primary source with a working link was found.

### Bott–Chern vanishing fills pluriharmonic holes

**Remember:** Cut off near the hole, then erase the resulting derivative.

*Makes the theorem clean to state or prove.* MSC 32D15 (Continuation of analytic objects in several complex variables), 32C35. arXiv math.CV. Level 4: research.

**Definition.** Compactly supported Bott–Chern cohomology in degree (1,1) is the space of compactly supported (1,1)-forms killed by both ∂ and ∂̄, modulo ∂∂̄ of compactly supported functions. Its vanishing means each such form is ∂∂̄ψ for a compactly supported function ψ (our own).

**Problem.** Let Ω be a domain in a Stein manifold of complex dimension at least two, and let K ⊂ Ω be compact with Ω ∖ K connected. Every pluriharmonic function on Ω ∖ K extends uniquely to a pluriharmonic function on Ω.

**How the definition helps.** Cut the function u off to zero near K; the ∂∂̄ of the result is a compactly supported closed (1,1)-form, extended by zero to the Stein manifold (our own). The vanishing theorem there writes this form as ∂∂̄ψ with ψ compactly supported (our own). Subtracting ψ gives a pluriharmonic function on Ω that agrees with u on an open part of Ω ∖ K, hence on all of it by connectedness (our own).

**Paper or page:** [Bott-Chern cohomology and the Hartogs extension theorem for pluriharmonic functions](https://arxiv.org/abs/2205.02494v2). It says: “Then every pluriharmonic function on Ω ∖ K has a unique pluriharmonic extension to Ω.”

**Sources:**

- [Xieping Wang, Bott-Chern cohomology and the Hartogs extension theorem for pluriharmonic functions (2024), Theorems 1.1 and 1.2](https://doi.org/10.2422/2036-2145.202205_007)

### Entire equations present Stein subspaces

**Remember:** Global functions on a Stein subspace are entire functions modulo its equations.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV, math.AG. Level 4: research.

**Definition.** An algebra with entire functional calculus lets each entire function of n variables act on n-tuples of its elements; coordinate functions act as projections, and substitution acts by composition. 𝒪(ℂⁿ) is the free such algebra on n generators. So the algebra presented by n generators and equations f₁ = … = fₖ = 0 is 𝒪(ℂⁿ) modulo the ideal they generate (our own).

**Problem.** Let finitely many entire functions on ℂⁿ generate the local defining ideal of a closed complex subspace. Its global holomorphic functions form the quotient of the entire functions by the ideal generated by those equations.

**How the definition helps.** The theorem says the algebra of global functions on the subspace has exactly this presentation (our own). Cartan’s theorem B for the ideal sheaf makes restriction from ℂⁿ onto the subspace surjective, with kernel the global sections of that sheaf (our own). Theorem B for the sheaf of relations among the equations writes each such section as an entire combination of them (our own).

**nLab:** [Stein duality](https://ncatlab.org/nlab/show/Stein+duality). It says: “The equivalence functor sends a Stein space to its EFC-algebra of global sections.”

**Sources:**

- [J. P. Pridham, A differential graded model for derived analytic geometry (2020), Proposition 1.13](https://doi.org/10.1016/j.aim.2019.106922)
- [Alexei Yu. Pirkovskii, Holomorphically finitely generated algebras (2015), Theorem 3.23](https://doi.org/10.4171/jncg/192)

### Relative vanishing needs convexity

**Remember:** A compact set can enclose cohomology that its hull fills.

*Rules out counterexamples.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 4: research.

**Definition.** A compact subset K of a Stein space is holomorphically convex if it equals its holomorphic hull. The hull is the set of points x with \|f(x)\| ≤ max over K of \|f\| for every global holomorphic function f.

**Problem.** For an n-dimensional Stein space and a holomorphically convex compact set K, relative cohomology with constant integer coefficients vanishes in degrees above n.

**How the definition helps.** The condition excludes sets like the unit sphere in ℂ², whose hull is the closed ball (our own). Since ℂ² is contractible and the sphere has H³ = ℤ, the exact sequence of the pair gives relative H⁴ = ℤ, above n = 2 (our own). Benoist proves vanishing above the complex dimension when the compact set equals its hull.

**Paper or page:** [On the Artin vanishing theorem for Stein spaces](https://arxiv.org/abs/2410.04291v2). It says: “Then Hᵏ(S, K, 𝔽) = 0 for k &gt; n.”

**Sources:**

- [Olivier Benoist, On the Artin vanishing theorem for Stein spaces (2025)](https://doi.org/10.1112/blms.70124)

### Stein algebras recover holomorphic maps

**Remember:** Recover a map by pulling back its coordinate functions.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Stein algebra of a Stein space X is the algebra 𝒪(X) of all its holomorphic functions. A holomorphic map f: X → Y gives the pullback homomorphism g ↦ g∘f from 𝒪(Y) to 𝒪(X), reversing direction.

**Problem.** For Stein spaces X and Y, every unital complex algebra homomorphism 𝒪(Y) → 𝒪(X) comes from exactly one holomorphic map X → Y.

**How the definition helps.** Benoist proves that taking global holomorphic functions is an equivalence from Stein spaces to their algebras with arrows reversed. Its full faithfulness is exactly this statement (our own). For X a point, it says every character of 𝒪(Y) is evaluation at one point of Y (our own).

**Paper or page:** [Stein spaces and Stein algebras](https://arxiv.org/abs/2410.05521v1). It says: “is an anti-equivalence of categories.”

**Sources:**

- [Olivier Benoist, Stein spaces and Stein algebras (2026)](https://doi.org/10.4064/ba260107-1-3)

### Tame hulls stay locally bounded

**Remember:** Bound a moving compact set by one fixed compact set locally.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 4: research.

**Definition.** The holomorphic hull of a compact set adds every point where each holomorphic function obeys its maximum modulus bound on that set. Take a continuous family of Stein structures over a locally compact Hausdorff space. It is tame if, for each fixed compact set, the fiberwise hulls above any compact parameter set together form a compact set.

**Problem.** In a tame family, taking the holomorphic hull separately in each fiber preserves properness over the parameters. Properness means that the inverse image of each compact parameter set is compact.

**How the definition helps.** Over a compact parameter neighborhood, a proper set lies inside the neighborhood times one fixed compact set, whose fiberwise hulls contain its own (our own). Tameness makes those larger hulls compact, so the hull is bounded over compact parameter sets (our own). The authors’ lemma also proves closedness, which the bound alone does not give (our own).

**Paper or page:** [The Oka principle for tame families of Stein manifolds](https://arxiv.org/abs/2510.25887v1). It says: “If K ⊂ T × X is proper and 𝒥 is a tame family of Stein structures on X then the hull K̂𝒥 is also proper.”

**Sources:**

- [Franc Forstnerič and Álfheiður Sigurðardóttir, The Oka principle for tame families of Stein manifolds (2026)](https://doi.org/10.1090/btran/257)

### Fefferman measure makes Szegő metrics invariant

**Remember:** An invariant boundary measure gives a kernel whose log Hessian is invariant.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 4: research.

**Definition.** Fefferman measure is a boundary measure on a smooth strictly pseudoconvex domain, built so that holomorphic maps φ change it only by a power of \|det φ′\| (our own). In complex dimension n, it is surface area times a constant times the (n+1)st root of J(ρ), divided by \|∇ρ\|. Here J(ρ) is the absolute determinant of the complex Hessian of a defining function ρ, bordered by its complex gradient, the conjugate gradient and a zero corner.

**Problem.** Let S be the Szegő kernel for Fefferman measure, and give the domain the metric of mixed complex second derivatives of log S(z,z). Holomorphic isomorphisms between smoothly bounded, simply connected, strictly pseudoconvex domains preserve this metric.

**How the definition helps.** Because the measure changes by a power of \|det φ′\|, composition weighted by a holomorphic power of det φ′ is unitary between Hardy spaces (our own). Simple connectivity supplies that holomorphic power (our own). So S(z,z) changes by that holomorphic factor times its conjugate, and the logarithm of this product has zero mixed second derivatives (our own).

**Wikipedia:** [Szegő kernel](https://en.wikipedia.org/wiki/Szeg%C5%91_kernel). It says: “a reproducing kernel on a natural Hilbert space”

**Sources:**

- [David Barrett and Lina Lee, On the Szegő Metric](https://doi.org/10.1007/s12220-012-9329-x)

### Full squeezing identifies the ball

**Remember:** An attained full radius leaves no part of the ball out.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 4: research.

**Definition.** The squeezing function at a point p of a bounded domain measures how much of the unit ball an embedding can fill. It is the supremum of radii r such that some injective holomorphic map into the unit ball sends p to 0 with image containing the ball of radius r, the balls having the domain's dimension.

**Problem.** If the squeezing function equals one anywhere, the domain admits a holomorphic bijection onto the unit ball with holomorphic inverse.

**How the definition helps.** Limits of embeddings and of their inverses show that the supremum is attained (our own). So value one gives an embedding whose image contains every ball of radius less than one, hence the whole ball. An injective holomorphic map between domains of the same dimension has a holomorphic inverse.

**Paper or page:** [d-balanced squeezing function](https://arxiv.org/abs/2103.00526). It says: “then D is biholomoprhically equivalent to Ω.”

**Sources:**

- [d-balanced squeezing function, Corollary 4.6](https://arxiv.org/abs/2103.00526)

### Left inverses transfer disc interpolation

**Remember:** A disc with a left inverse loses no interpolation data.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 4: research.

**Definition.** A Carathéodory complex geodesic is a holomorphic map φ from the unit disc into a domain that preserves Carathéodory distance between every pair of points. Equivalently, it has a holomorphic left inverse, a holomorphic map F from the domain to the disc with F∘φ the identity.

**Problem.** Take finite interpolation data at points of a complex geodesic. They admit a disc-valued holomorphic interpolant on the domain exactly when the same data at the disc parameters admit one on the disc.

**How the definition helps.** A disc interpolant g gives the domain interpolant g∘F, and a domain interpolant G gives the disc interpolant G∘φ. The work lies in obtaining F from distance preservation, using an extremal map and the equality case of Schwarz–Pick (our own).

**Paper or page:** [Pick interpolation and invariant functions](https://arxiv.org/abs/2309.04796). It says: “if and only if φ is a Carathéodory geodesic.”

**Sources:**

- [Pick interpolation and invariant functions, Corollary 2.7](https://arxiv.org/abs/2309.04796)

### Abelian models remove Calabi–Yau obstructions

**Remember:** An equivalent zero bracket leaves no nonlinear lifting equations.

*True by definition.* MSC 32G05 (Deformations of complex structures), 32Q25. arXiv math.AG, math.CV. Level 4: research.

**Definition.** The Kodaira–Spencer algebra is the differential graded Lie algebra of tangent-valued (0,q)-forms that governs deformations of complex structure. It is homotopy abelian if a chain of maps, each pointing either way, preserving differential and bracket and inducing cohomology isomorphisms, connects it to an algebra with zero bracket.

**Problem.** For a smooth complex projective variety with a nowhere vanishing holomorphic volume form, the Kodaira–Spencer algebra is homotopy abelian. Every formal deformation therefore lifts across each small extension of parameter algebras, a surjection with kernel annihilated by the maximal ideal.

**How the definition helps.** With zero bracket, the deformation equation dx + ½\[x,x\] = 0 becomes the linear equation dx = 0, so every solution lifts across a small extension (our own). Iacono and Manetti prove the algebra is homotopy abelian, and deformation functors are invariant under these maps, so the lifting transfers (our own).

**Wikipedia:** [Bogomolov–Tian–Todorov theorem](https://en.wikipedia.org/wiki/Bogomolov%E2%80%93Tian%E2%80%93Todorov_theorem). It says: “Consequently the deformations of X are unobstructed.”

**Sources:**

- [D. Iacono and M. Manetti, An algebraic proof of Bogomolov-Tian-Todorov theorem](https://doi.org/10.1007/978-3-8348-9680-3_5)

### Formality leaves only quadratic equations

**Remember:** A formal deformation algebra has no higher equations to solve.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.AG, math.CV. Level 4: research.

**Definition.** The Kodaira–Spencer algebra describes changes of complex structure using tangent-valued forms, their differential and their bracket. It is formal if maps preserving these operations and inducing cohomology isomorphisms connect it to its cohomology with zero differential.

**Problem.** For a compact complex manifold with formal Kodaira–Spencer algebra, the formal deformation base has only the quadratic equations \[x,x\] = 0. Here x ranges over first cohomology and its bracket lies in second cohomology.

**How the definition helps.** Passing to cohomology removes the differential from the deformation equation dx + ½\[x,x\] = 0 (our own). The comparison theorem identifies the formal deformation bases of the original algebra and its cohomology model (our own).

**nLab:** [Deligne groupoid](https://ncatlab.org/nlab/show/Deligne+groupoid). It says: “MC(𝔤) = {x ∈ 𝔤¹ \| dx + ½\[x,x\] = 0}”

**Sources:**

- [M. Manetti, Kodaira-Spencer formality of products of complex manifolds](https://iris.uniroma1.it/handle/11573/603584)

### Trivial normal products give compatible local smoothings

**Remember:** A trivial smoothing bundle admits a parameter nonzero along the entire crossing.

*Rules out counterexamples. Confidence: medium.* MSC 32G05 (Deformations of complex structures). arXiv math.AG, math.CV. Level 4: research.

**Definition.** Let a compact complex surface have two smooth components meeting transversely along a smooth curve D. The surface is d-semistable if the tensor product of the normal bundles of D in the two components is trivial.

**Problem.** A d-semistable surface of this form admits local first-order smoothing parameters that agree along D and vanish nowhere on D.

**How the definition helps.** In the local smoothing xy = t of the crossing, the parameter t transforms like a section of the product of the two normal bundles (our own). A trivial product has a constant nonzero section, which gives compatible parameters nonzero along all of D (our own). For two planes meeting along a line in projective three-space, the product has degree two, so every section vanishes somewhere (our own).

**Paper or page:** [Unobstructedness of deformations for a d-semistable central corank one boundary point](https://arxiv.org/abs/2410.10583v2). It says: “We have τ¹ₓ = 𝒪ᴅ.”

**Sources:** none listed. No primary source with a working link was found.

### Ample classes exclude period reflections

**Remember:** A reflection in a curve cannot preserve an ample class.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 4: research.

**Definition.** A polarized K3 surface carries a chosen ample class h in second integral cohomology, the first Chern class of a line bundle whose powers embed it in projective space. An ample class has positive intersection with every curve, so no reflection in a smooth rational curve class fixes it (our own).

**Problem.** An integral isometry preserving the period lines and matching the two polarization classes comes from a unique polarized isomorphism between the K3 surfaces.

**How the definition helps.** A Hodge isometry comes from an isomorphism once it maps the ample cone onto the ample cone; otherwise reflections in rational curves get in the way (our own). Matching the ample classes matches the cones, so the strong Torelli theorem gives the unique isomorphism (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “generated by reflections in the set of roots Δ”

**Sources:**

- [D. Burns and M. Rapoport, On the Torelli problem for kählerian K-3 surfaces](https://doi.org/10.24033/asens.1287)

### Birational quotients make periods invertible

**Remember:** Identify inseparable points before asking periods to distinguish them.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Fix a compact simply connected Kähler manifold whose holomorphic two-forms are spanned by one nondegenerate form. Its birational Teichmüller space is the space of such complex structures up to diffeomorphisms isotopic to the identity, with points that have no disjoint open neighborhoods identified.

**Problem.** On each connected component of the birational Teichmüller space, the period map is a diffeomorphism onto the period domain of holomorphic two-form lines.

**How the definition helps.** The period domain has disjoint neighborhoods for distinct lines, so the period map must identify inseparable points (our own). Verbitsky’s global Torelli theorem proves that making these identifications suffices and that the resulting map has a smooth inverse (our own).

**Paper or page:** [Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847v1). It says: “Then Per is a diffeomorphism on each connected component.”

**Sources:**

- [M. Verbitsky, Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847)

### Interior monodromy excludes weight jumps

**Remember:** Use the interior of the cone to read its common weight filtration.

*Rules out counterexamples.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a polarized nilpotent orbit with commuting monodromy logarithms N₁,…,Nᵣ, the monodromy cone consists of their nonnegative real linear combinations. Its relative interior consists of operators admitting such an expression with every coefficient strictly positive.

**Problem.** Every operator in the relative interior gives the same monodromy weight filtration. This filtration places each Jordan chain in weights spaced two apart and centered at the original cohomology weight.

**How the definition helps.** Positive coefficients keep every degenerating direction (our own), and the Cattani–Kaplan theorem proves constancy on the relative interior. For two elliptic curves that each acquire a node, take the direct sum of their first cohomology groups, with N₁ and N₂ acting on separate summands (our own). Every interior N has a lowest weight space with a line from each curve, but N₁ alone gives one line (our own).

**Paper or page:** [Space of nilpotent orbits and extension of period maps (I): The weight 3 Calabi-Yau types](https://arxiv.org/abs/2306.11254v2). It says: “for any N in the relative interior of σ”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotent orbits forget disk coordinates

**Remember:** Changing the coordinate moves the flag inside its orbit.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a polarized variation of Hodge structure with unipotent monodromy T on a punctured disc, put N = log T and t = exp(2πiz). Schmid’s limiting flag is F = lim exp(−zN)Φ(z) as t → 0, for the lifted period flag Φ, and its orbit is all flags exp(cN)F with c complex. A change of coordinate shifts z by a constant in the limit, so it moves F along this orbit (our own).

**Problem.** For a polarized integral variation of Hodge structure on a punctured disc with unipotent monodromy, the orbit of the limiting flag does not depend on the local coordinate.

**How the definition helps.** Replacing t by u(t)t, with u holomorphic and u(0) ≠ 0, shifts z by log u(t)/(2πi), so F becomes exp(−cN)F with c = log(u(0))/(2πi) (our own). That flag lies in the same orbit (our own). Schmid’s nilpotent orbit theorem guarantees the limit exists for polarized integral variations (our own).

**Paper or page:** [On the nilpotent orbit theorem of complex variations of Hodge structure](https://arxiv.org/abs/2203.04266v3). It says: “where a(w) := Ψ(0,w)”

**Sources:**

- [W. Schmid, Variation of Hodge Structure: The Singularities of the Period Mapping](https://doi.org/10.1007/BF01389674)

### Tangential polylogarithm periods give zeta values

**Remember:** At one, drop the logarithm of Li₁; the others give ζ(k).

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations), 14D07, 33B30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The polylogarithms satisfy Li₁(z) = −log(1 − z) and, for k ≥ 2, Liₖ(0) = 0 and dLiₖ = Liₖ₋₁ dz/z. The tangential value at 1 expands each function in the coordinate 1 − z and its logarithm and keeps only the term constant in both.

**Problem.** Transport along the real interval from 0 to 1, with inward tangents at both ends. Then for each k from 2 through n, the tangential value of Liₖ at 1 equals ζ(k) = ∑ j⁻ᵏ.

**How the definition helps.** For k ≥ 2, Liₖ(z) = ∑ zʲ/jᵏ converges at z = 1, so its tangential value is ζ(k) (our own). Only Li₁ diverges at 1, and the regularization drops its logarithm without changing the others (our own). Hain identifies these entries as periods of the limiting mixed Hodge structure.

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950). It says: “has ζ(2),⋯,ζ(n) as periods”

**Sources:**

- [Richard Hain, Classical polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### Unipotent canonical extensions preserve tensors

**Remember:** Two nilpotent residues add to a nilpotent tensor residue.

*Rules out counterexamples. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations), 14D07. arXiv math.AG. Level 4: research.

**Definition.** Deligne’s canonical extension of a regular singular flat bundle across a puncture is the unique logarithmic extension whose residue has eigenvalues with real parts in \[0,1). When the monodromy T is unipotent, meaning T − I is nilpotent, the residue is nilpotent, so all its eigenvalues are zero (our own).

**Problem.** If both bundles have unipotent monodromy, their canonical extensions tensor to the canonical extension of their tensor product.

**How the definition helps.** On the tensor product the residue is R₁ ⊗ 1 + 1 ⊗ R₂, a sum of commuting nilpotents, so it is nilpotent and in the range \[0,1) (our own). Deligne’s uniqueness then identifies the tensor of the extensions as the canonical extension (our own). Without unipotence it fails: residues one half each give tensor residue one, while the canonical extension of the product has residue zero (our own).

**Paper or page:** [Variation of mixed Hodge structure and its applications](https://arxiv.org/abs/2304.00672). It says: “where ˡ(·) stands for the lower canonical extension as before.”

**Sources:**

- [Pierre Deligne, Équations différentielles à points singuliers réguliers (1970)](https://doi.org/10.1007/BFb0061194)

### Untwisting monodromy gives limiting flags

**Remember:** Remove the deck transformation before taking a limit.

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A period flag Φ(z), lifted to z with t = exp(2πiz), changes to TΦ(z) when z goes to z + 1, where T is the monodromy. When T − I is nilpotent, the untwisted flag Ψ(t) = exp(−z log T)Φ(z) is unchanged by z ↦ z + 1, so it is single-valued in t (our own).

**Problem.** For a polarized integral variation of Hodge structure with this monodromy, Ψ extends holomorphically across the puncture. Its limit lies in the flag space cut out by the polarization’s orthogonality equations.

**How the definition helps.** The exponential cancels the monodromy after one turn, so Ψ is a single-valued holomorphic map on the punctured disc (our own). Schmid’s nilpotent orbit theorem proves that it extends across zero, using the integral lattice and the polarization (our own). The limit satisfies the closed orthogonality equations but may fail positivity (our own).

**Paper or page:** [On the nilpotent orbit theorem of complex variations of Hodge structure](https://arxiv.org/abs/2203.04266v3). It says: “Ψ extends holomorphically to Δᵖ⁺ᑫ”

**Sources:**

- [W. Schmid, Variation of Hodge Structure: The Singularities of the Period Mapping](https://doi.org/10.1007/BF01389674)

### Condition R transfers boundary smoothness

**Remember:** If the projection keeps smoothness, holomorphic isomorphisms keep it too.

*Makes the theorem clean to state or prove.* MSC 32H02 (Holomorphic mappings, (holomorphic) embeddings and related questions in several complex variables), 32A36. arXiv math.CV. Level 4: research.

**Definition.** The Bergman projection is the orthogonal projection of L² onto the square-integrable holomorphic functions. A domain satisfies Condition R if this projection maps functions smooth up to the boundary to functions smooth up to the boundary.

**Problem.** Suppose two smooth bounded domains admit continuous functions subharmonic on complex lines with relatively compact sublevel sets. If either satisfies Condition R, every holomorphic isomorphism between them extends smoothly with smooth inverse to their closures.

**How the definition helps.** The Bell–Ligocka theorem shows that Condition R on one domain makes a holomorphic isomorphism extend smoothly to the closures in both directions (our own). Its proof transforms the Bergman projection by Jacobian-weighted composition and uses inputs that vanish to high order at the boundary (our own).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Bell and Ligocka, A simplification and extension of Fefferman's theorem on biholomorphic mappings (1980)](https://link.springer.com/article/10.1007/BF01418930)
- [Bell, Biholomorphic mappings and the ∂̄-problem (1981)](https://annals.math.princeton.edu/1981/114-1/p04)

### Unchanged functions force connected fibers

**Remember:** Disconnected fibers would give extra locally constant holomorphic functions.

*True by definition.* MSC 32H35 (Proper holomorphic mappings, finiteness theorems), 32C35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Stein factorization of a proper holomorphic map f: X → Y is X → Y′ → Y. Here Y′ is the analytic spectrum of the direct image of the holomorphic functions on X. So functions holomorphic on an open set of Y′ are exactly those holomorphic on its inverse image in X (our own).

**Problem.** The first map in Stein factorization has connected fibers.

**How the definition helps.** If a fiber of X → Y′ had two parts, properness would put the inverse image of a small neighborhood inside two disjoint open sets around them (our own). The function equal to 0 on one and 1 on the other is holomorphic, so it comes from Y′, which is impossible at a single point (our own).

**Wikipedia:** [Stein factorization](https://en.wikipedia.org/wiki/Stein_factorization). It says: “Roughly speaking, Stein factorization contracts the connected components of the fibers of a mapping to points.”

**Sources:**

- [Karl Stein, Analytische Zerlegungen komplexer Räume (1956)](https://doi.org/10.1007/BF01343331)

### Dual growth weights need rounding

**Remember:** Dualize the allowed integer orders, not the real weight alone.

*Rules out counterexamples.* MSC 32L05 (Holomorphic bundles and generalizations), 14H60. arXiv math.CV. Level 4: research.

**Definition.** The extension of a line bundle at weight a keeps the holomorphic sections s near the puncture with \|s\| at most C times \|z\| to the power −(a + ε). This must hold for every ε &gt; 0, with C allowed to depend on ε. Pole orders are integers, so two weights give the same extension when they allow the same largest pole order (our own).

**Problem.** Consider a holomorphic line bundle on the punctured disk with an acceptable metric, meaning its curvature is bounded near zero in the hyperbolic metric. Dualizing the extension at weight a gives the extension of the dual at weight 1 − a − ε for all sufficiently small positive ε.

**How the definition helps.** An acceptable metric gives a frame of norm \|z\|ᵇ up to subpower factors, so weight a allows pole order at most ⌊a + b⌋ (our own). The dual frame has norm \|z\|⁻ᵇ, and ⌊1 − a − ε − b⌋ = −⌊a + b⌋ for small ε &gt; 0, matching the dual orders (our own). For the constant metric and a = ½, the naive dual weight −½ forces a zero, while ½ − ε allows constants (our own).

**Paper or page:** [Notes on acceptable bundles](https://arxiv.org/abs/2511.00760v1). It says: “\\left({}\_\\alpha L\\right)<sup>\\vee</sup> ={}<sub>-\\alpha +1-\\varepsilon </sub>\\left(L<sup>\\vee</sup> \\right)”

**Sources:** none listed. No primary source with a working link was found.

### Numerically flat bundles tensor together

**Remember:** Numerically flat means stacked flat unitary layers; layers tensor to layers.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32Q15. arXiv math.CV. Level 4: research.

**Definition.** A holomorphic bundle is numerically flat if it and its dual are nef, meaning the tautological quotient line bundle on its projectivization has a class that is a limit of Kähler classes. Equivalently, it is built from flat unitary layers: a chain of holomorphic subbundles whose successive quotients carry flat connections preserving a Hermitian metric.

**Problem.** The tensor product of two numerically flat bundles on a compact Kähler manifold is numerically flat.

**How the definition helps.** Numerical flatness is the existence of a filtration with flat unitary quotients, so it suffices to filter the tensor product. Filter it by the sum of the two filtration indices (our own). Each quotient is a direct sum of tensor products of flat unitary bundles, hence flat unitary (our own).

**Paper or page:** [Numerical flatness and principal bundles on Fujiki manifolds](https://arxiv.org/abs/2111.15243v1). It says: “the connection on Eᵢ/Eᵢ₋₁ induced by ∇ is unitary for all 1 ≤ i ≤ ℓ.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform curvature opens spectral gaps

**Remember:** One curvature floor ε everywhere gives one energy floor qε.

*Rules out counterexamples. Confidence: medium.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A Hermitian holomorphic bundle E over a Kähler manifold has a uniform Nakano lower bound ε &gt; 0 when, at every point, its curvature form satisfies iΘ(v,v) ≥ ε‖v‖² for every tensor v in (tangent space) ⊗ E. The same ε serves at every point of the manifold.

**Problem.** On a complete Kähler n-fold, this bound puts the spectrum of the bundle-valued ∂̄ Laplacian on square-integrable (n,q)-forms in \[qε,∞) for q &gt; 0.

**How the definition helps.** A floor ε valid at every point gives one global lower bound qε for the energy of every (n,q)-form, which is the spectral bound. In our own argument, the Bochner–Kodaira–Nakano identity counts the curvature once per conjugate index, and completeness passes from compactly supported forms to the operator. Without a positive floor the bound fails: on flat ℂⁿ with the trivial bundle, dilated unit forms have energy tending to zero.

**Paper or page:** [A bridge connecting convex analysis and complex analysis and L²-estimate of d and ∂̄](https://arxiv.org/abs/2405.08559v2). It says: “a holomorphic vector bundle over X with a Nakano positive Hermitian metric”

**Sources:** none listed. No primary source with a working link was found.

### Bounded primitives confine harmonic forms

**Remember:** Bounded β keeps ω exact after wedging with square-integrable forms.

*True by definition.* MSC 32Q15 (Kähler manifolds). arXiv math.DG, math.CV. Level 4: research.

**Definition.** A Kähler form ω has a bounded primitive if ω = dβ for a one-form β of bounded pointwise length. Then for a closed square-integrable form α, β∧α is square-integrable, so ω∧α = d(β∧α) is exact in the square-integrable sense (our own).

**Problem.** Suppose a complete Kähler manifold of complex dimension n has a Kähler form with a bounded primitive. Every square-integrable harmonic form vanishes outside degree n.

**How the definition helps.** For a square-integrable harmonic α, the form ω∧α is harmonic by the Kähler identities and exact with square-integrable primitive (our own). On a complete manifold such a form is zero, so ω∧α = 0. Wedging with ω is injective below degree n, and Hodge star duality handles degrees above n.

**nLab:** [hard Lefschetz theorem](https://ncatlab.org/nlab/show/hard+Lefschetz+theorem). It says: “the operation of forming the wedge product with the symplectic form”

**Sources:**

- [M. Gromov, Kähler hyperbolicity and L²-Hodge theory (1991)](https://doi.org/10.4310/jdg/1214446039)

### Bounded primitives survive branched pullback

**Remember:** Nef class, positive volume, bounded primitive upstairs: all three pull back.

*Makes the theorem clean to state or prove.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A compact Kähler manifold is weakly Kähler hyperbolic if it has a nef real (1,1) class, a limit of Kähler classes, with positive top self-intersection. Some smooth representative of the class lifts to the universal cover as dβ for a bounded one-form β.

**Problem.** Let X map holomorphically onto a weakly Kähler hyperbolic manifold Y, with finite fibers over a dense open set. If X is compact Kähler, it too is weakly Kähler hyperbolic.

**How the definition helps.** The definition asks only for a nef class, not a Kähler form, so the pullback may degenerate where the map branches. In our own proof, the map lifts to universal covers and compactness bounds its derivative, so the bounded one-form pulls back to a bounded one-form. Pullback preserves nefness, and the top self-intersection multiplies by the positive degree.

**Paper or page:** [Weak Kähler hyperbolicity is birational](https://arxiv.org/abs/2406.01734v2). It says: “If Y is weakly Khler hyperbolic, then X is weakly Khler hyperbolic.”

**Sources:**

- [Francesco Bei, Benoît Claudon, Simone Diverio and Stefano Trapani, Weak Kähler hyperbolicity is birational](https://arxiv.org/abs/2406.01734v2)

### Uniform relative K-polystability is exactly the condition for toric extremal metrics

**Remember:** Donaldson's functional beats a fixed fraction of the boundary integral.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14M25. arXiv math.DG, math.AG. Level 4: research.

**Definition.** Uniform relative K-polystability asks for one δ &gt; 0 with L(f) ≥ δ∫∂P f dσ, where L(f) = ∫∂P f dσ − ∫P A f dx is Donaldson's functional on the moment polytope P with lattice measures. Here A is the affine function that makes L vanish on affine functions, and f runs over rational convex piecewise-linear functions normalized to be nonnegative and zero at a fixed interior point (our own).

**Problem.** A polarized toric manifold admits an extremal Kähler metric in its polarization class invariant under its compact torus exactly when it is uniformly relatively K-polystable.

**How the definition helps.** The inequality is a uniform coercivity: L controls the boundary size of every test once affine symmetries are removed (our own). The quoted toric theorem identifies this condition with T-coercivity of the relative K-energy and with an invariant extremal metric.

**Paper or page:** [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386), [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386). It says: “Then the followings are equivalent. (1) (X, L) admits an S-invariant extremal Kähler metric. (2) (X, L) is uniformly relatively K-polystable. (3) The relative K-energy of (X, L) is T-coercive.”

**Sources:**

- [Y. Nitta and S. Saito, A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds, arXiv:2110.10386 (2021)](https://arxiv.org/abs/2110.10386)

### Weighted projective embeddings give orbifolds a stability condition for constant curvature

**Remember:** Every degeneration's orbifold Futaki invariant must be nonnegative.

*Makes the theorem clean to state or prove.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14L24. arXiv math.AG, math.DG. Level 4: research.

**Definition.** A test configuration for a polarized cyclic orbifold is a ℂ\*-equivariant flat degeneration with a relatively ample orbifold line bundle, equal away from zero to the product family with a power of the polarization. The orbifold is K-semistable if every test configuration has orbifold Donaldson–Futaki invariant ≥ 0, an invariant that also records the stabilizer actions (our own).

**Problem.** A cyclic orbifold polarized by an orbi-ample line bundle is K-semistable if its polarization class contains an orbifold Kähler metric of constant scalar curvature.

**How the definition helps.** The orbifold version of Donaldson's theorem gives a nonnegative invariant for every test configuration when the class contains a constant scalar curvature metric. Embedding into weighted projective spaces records the stabilizer actions in the invariant, so the smooth argument carries over (our own).

**Paper or page:** [Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics](https://arxiv.org/abs/0907.5214v2). It says: “We then prove an orbifold version of Donaldson's theorem: the existence of an orbifold Kahler metric of constant scalar curvature implies K-semistability.”

**Sources:**

- [J. Ross, R. P. Thomas, Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics, arXiv:0907.5214 (2009), J.Diff.Geom.88:109-159,2011](https://arxiv.org/abs/0907.5214v2)

### Brody curves make hyperbolicity open

**Remember:** Speed at most one, exactly one at zero.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A normalized Brody curve is a holomorphic map from ℂ whose derivative has norm at most one everywhere and exactly one at zero, in a fixed smooth Hermitian metric. For images in one compact set, the uniform bound makes such curves a compact family, and the value at zero keeps limits nonconstant (our own).

**Problem.** In a holomorphic family given by a proper submersion, the parameters with Kobayashi hyperbolic fibers form an open set. Here preimages of compact sets are compact, the differential is surjective, and hyperbolicity means the intrinsic disc distance separates points.

**How the definition helps.** Brody's theorem says a compact fiber fails to be hyperbolic exactly when it carries a normalized Brody curve, and limits of such curves stay normalized. In our own argument, if nonhyperbolic fibers approach a hyperbolic fiber, properness keeps their Brody curves in a compact set, so a subsequence converges on compact sets. The limit lies in the hyperbolic fiber with derivative norm one at zero, a contradiction.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “hyperbolicity is an open condition (in the Euclidean topology) for families of compact complex spaces.”

**Sources:**

- [Jean-Pierre Demailly, Algebraic criteria for Kobayashi hyperbolic projective varieties and jet differentials, Proposition 1.6 (1997)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/source_files/hyperbolic.pdf)
- [Robert Brody, Compact manifolds in hyperbolicity (1978)](https://doi.org/10.1090/S0002-9947-1978-0470252-3)

### Gromov models extend biholomorphisms

**Remember:** Metric boundary equals Euclidean boundary, so isometries extend to closures.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A bounded domain is a Gromov model domain if its Kobayashi distance, the intrinsic distance built from holomorphic discs, is complete and Gromov hyperbolic, with uniformly thin geodesic triangles. Its Gromov boundary must match the Euclidean one: the identity extends to a homeomorphism from the Gromov compactification, made by adding endpoints of geodesic rays, to the Euclidean closure.

**Problem.** Every holomorphic bijection with holomorphic inverse between bounded Gromov model domains extends to a homeomorphism of their Euclidean closures.

**How the definition helps.** A biholomorphism preserves the Kobayashi distance, so it carries geodesic rays to geodesic rays and extends to a homeomorphism of Gromov compactifications (our own). The defining identification turns this into a homeomorphism of the Euclidean closures.

**Paper or page:** [Local and global visibility and Gromov hyperbolicity of domains with respect to the Kobayashi distance](https://arxiv.org/abs/2201.03070). It says: “Ω₂ is a Gromov model domain if and only if F extends as a homeomorphism”

**Sources:**

- [Local and global visibility and Gromov hyperbolicity of domains with respect to the Kobayashi distance, Theorem 1.4](https://arxiv.org/abs/2201.03070)

### Infinitesimal hyperbolicity bounds curve area

**Remember:** Discs have bounded speed, so curves have area bounded by genus.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A compact complex manifold with a fixed Hermitian metric is infinitesimally hyperbolic if one constant c &gt; 0 gives ‖f′(0)‖ ≤ 1/c for every holomorphic map f from the unit disc. Equivalently, the Kobayashi infinitesimal length of every tangent vector v is at least c‖v‖.

**Problem.** On a compact infinitesimally hyperbolic manifold, every nonconstant holomorphic map from a compact connected surface of genus g has area at most A(2g−2). Here the surface is a Riemann surface, area counts multiplicity, and A depends only on the target metric.

**How the definition helps.** Composing with the universal covering disc, the bound makes the pulled-back target metric at most a fixed multiple of the hyperbolic metric of the surface (our own). Gauss–Bonnet gives hyperbolic area proportional to 2g−2, which bounds the area. Genus zero and one are excluded because the target has no nonconstant holomorphic map from ℂ.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi infinitesimal pseudometric is a Finsler pseudometric”

**Sources:**

- [Jean-Pierre Demailly, Algebraic criteria for Kobayashi hyperbolic projective varieties and jet differentials, Theorem 2.1 (1997)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/source_files/hyperbolic.pdf)

### Kobayashi volume bounds degree

**Remember:** Take the smallest volume density carried from the ball, then integrate.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** The Kobayashi–Eisenman density at a point is the smallest Euclidean volume density carried there by holomorphic maps from the unit ball that send 0 to the point with invertible derivative. Composing a test map with a holomorphic map gives a test map, so holomorphic maps can only decrease this density, and integrating it gives the Kobayashi volume.

**Problem.** Consider a surjective holomorphic map between connected compact Kobayashi hyperbolic manifolds of equal dimension. Its degree times the target Kobayashi volume is at most the source Kobayashi volume.

**How the definition helps.** Composing a test map with the given map shows that the pulled-back target density is at most the source density. At critical points the pulled-back density vanishes. In our own explanation, integration counts each regular target point with its degree, the number of sheets above it.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi–Eisenman pseudo-volume form is an intrinsic measure on a complex n-fold”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Theorem 2.3.41 and its proof (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### Picard hyperbolicity makes curve maps algebraic

**Remember:** Every punctured disc in it closes up in the compactification.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 4: research.

**Definition.** A smooth complex algebraic variety is Picard hyperbolic if, inside a smooth projective compactification, every holomorphic map from the punctured disc into the variety extends holomorphically across the puncture.

**Problem.** Every holomorphic map from a smooth algebraic curve of finite type into a Picard hyperbolic variety is algebraic.

**How the definition helps.** Picard hyperbolicity fills each missing point of the source curve, giving a holomorphic map from the compactified curve into the projective compactification. In our own argument, the comparison theorem between analytic and algebraic maps makes this map algebraic, and restriction gives the original map. Without puncture extension, the exponential map from ℂ to the punctured plane is a nonalgebraic counterexample.

**Paper or page:** [Nevanlinna Pair and Algebraic Hyperbolicity](https://arxiv.org/abs/2102.04624). It says: “Assume that Y⁰ is Picard hyperbolic.”

**Sources:**

- [Nevanlinna Pair and Algebraic Hyperbolicity, Proposition 2.2](https://arxiv.org/abs/2102.04624)

### Visibility separates distinct boundary limits

**Remember:** Paths between distinct boundary points must pass through the middle.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** On a bounded domain with complete Kobayashi distance, the intrinsic distance built from holomorphic discs, visibility means the following. Each pair of distinct boundary points has neighbourhoods and one compact set K such that every shortest path between points of the two neighbourhoods meets K.

**Problem.** In such a visible domain, the Kobayashi distance between sequences approaching distinct Euclidean boundary points tends to infinity.

**How the definition helps.** Each shortest path from z to w passes through the fixed compact set K, so its length is at least the distance from z to K plus the distance from K to w. In our own proof, completeness makes both distances tend to infinity as the points approach the boundary. Without visibility this fails: in the bidisc, (r,0) and (r,½) stay a fixed distance apart as r approaches one.

**Paper or page:** [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications](https://arxiv.org/abs/2111.00549). It says: “then $\\mathsf{k}M(z\\nu ,w\_\\nu ) \\to \\infty $ as $\\nu \\to \\infty $.”

**Sources:**

- [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications, Lemma 3.3](https://arxiv.org/abs/2111.00549)

### Algebraic interpolation connects points rationally

**Remember:** Regular lines through any two points close up into rational curves.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A manifold Y is algebraically Oka-1 if, for every smooth affine curve C, every continuous map C → Y that is holomorphic near a holomorphically convex compact set K and a finite set A is homotopic to regular maps. These regular maps approximate it on K as closely as wanted and match its jets of any prescribed finite order at A.

**Problem.** Every connected projective algebraic Oka-1 manifold is rationally connected. In particular, two distinct points lie on the image of a nonconstant morphism from the projective line.

**How the definition helps.** Algebraic interpolation gives a regular map from the affine line through two prescribed points, starting from a continuous map constant near the two arguments (our own). A regular map to a projective manifold extends across infinity, giving a rational curve through both points (our own). Holomorphic interpolation alone allows maps ℂ → ℙ¹ such as the exponential, with an essential singularity at infinity (our own).

**Paper or page:** [Oka-1 manifolds: New examples and properties](https://arxiv.org/abs/2402.09798v4). It says: “Every projective aOka-1 manifold is rationally connected.”

**Sources:**

- [Franc Forstnerič and Finnur Lárusson, Oka-1 manifolds: New examples and properties (published online 2024)](https://doi.org/10.1007/s00209-024-03649-8)

### Oka curves force Liouville rigidity

**Remember:** Entire curves join any two points, and Liouville flattens them.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** A complex manifold Y is Oka-1 if every continuous map from an open Riemann surface to Y, holomorphic near a compact set K without holes and a closed discrete set A, deforms to holomorphic maps that approximate it on K and match prescribed finite-order jets at A. In particular, any two points of a connected Y lie on one entire curve ℂ → Y (our own).

**Problem.** Every plurisubharmonic function bounded above on a connected Oka-1 manifold is constant.

**How the definition helps.** A bounded-above plurisubharmonic function pulls back along an entire curve to a bounded-above subharmonic function on ℂ, or to −∞, and both are constant (our own). Since an entire curve passes through any two points, the function takes equal values at them (our own). On the unit ball the bounded function ‖z‖² is not constant, so the ball is not Oka-1 (our own).

**Paper or page:** [Oka-1 manifolds](https://arxiv.org/abs/2303.15855v5). It says: “Every Oka-1 manifold is strongly Liouville.”

**Sources:**

- [Antonio Alarcón and Franc Forstnerič, Oka-1 manifolds (2025)](https://doi.org/10.1007/s00209-025-03833-4)

### Oka families preserve homotopy groups

**Remember:** Deform every family to holomorphic maps while fixing its holomorphic subfamily.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** A Stein manifold X and a target Y satisfy the parametric Oka property if every continuous family of maps X → Y, parametrized by a finite polyhedron P and holomorphic on a subpolyhedron Q, deforms with Q fixed into a family of holomorphic maps.

**Problem.** Let X be Stein and Y Oka, and give the maps X → Y the topology of uniform convergence on compact sets. Then inclusion of holomorphic into continuous maps is a bijection on path components and an isomorphism on all homotopy groups at each holomorphic base map.

**How the definition helps.** Sphere families represent homotopy classes and disc families compare them, so deforming these to holomorphic families gives surjectivity and injectivity (our own). Points and intervals give the bijection on path components. The Oka equivalence theorem supplies the parametric property for every Oka target.

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “the inclusion of the space of holomorphic maps X → Y in the space of continuous maps”

**Sources:** none listed. No primary source with a working link was found.

### Oka maps compose and pull back

**Remember:** Oka maps are defined by lifting, and lifting survives composites and pullbacks.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** In Lárusson’s intermediate model structure, an Oka map is a holomorphic map with the right lifting property against every acyclic cofibration. Every commutative square with that cofibration on the left and the map on the right must admit a diagonal filling both triangles.

**Problem.** Composites of Oka maps are Oka. A pullback of an Oka map is Oka whenever the fiber product exists as a complex manifold.

**How the definition helps.** A lift for a composite comes from solving the two lifting problems in succession (our own). A lift for a pullback comes from a lift for the original map and the defining property of the fiber product (our own). Lárusson identifies these abstract lifting tests with the analytic condition on deforming continuous lifts into holomorphic lifts (our own).

**nLab:** [Oka principle](https://ncatlab.org/nlab/show/Oka+principle). It says: “a holomorphic map is a fibration if and only if it is an Oka map.”

**Sources:**

- [Finnur Lárusson, Model structures and the Oka principle (2004)](https://doi.org/10.1016/j.jpaa.2004.02.005)
- [Franc Forstnerič, Oka maps (2010)](https://doi.org/10.1016/j.crma.2009.12.004)

### The convex approximation property gives every form of the Oka principle

**Remember:** Approximate on convex sets, and every Oka principle follows.

*Makes the theorem clean to state or prove.* MSC 32Q56 (Oka principle and Oka manifolds), 32Q28. arXiv math.CV. Level 4: research.

**Definition.** A complex manifold Y has the convex approximation property (CAP) if, for every n ≥ 1 and every compact convex K ⊂ ℂⁿ, every holomorphic map from a neighbourhood of K to Y is a uniform limit on K of holomorphic maps ℂⁿ → Y.

**Problem.** Let X be a Stein space and Y a manifold with CAP. Then every continuous map X → Y is homotopic to a holomorphic map, and the versions with approximation, interpolation and parameters also hold and are all equivalent.

**How the definition helps.** Forstnerič's theorem, quoted above, derives all the global Oka properties from this one local test on convex sets. So, in our own words, a new Oka manifold needs only the convex test. The unit disc lacks CAP, because by Liouville's theorem every holomorphic map from ℂⁿ into it is constant (our own example).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “A complex manifold Y which enjoys CAP has all Oka properties in Def. for maps X → Y from any Stein space X. Furthermore, all these Oka properties are pairwise equivalent.”

**Sources:**

- [Franc Forstnerič, From Stein manifolds to Oka manifolds: the h-principle in complex analysis, arXiv:2509.21197 (2025)](https://arxiv.org/abs/2509.21197v1)
- [Forstnerič, Runge approximation on convex sets implies the Oka property, Annals of Mathematics 163 (2006), 689–707](https://doi.org/10.4007/annals.2006.163.689)

### Asymptotic terms make punctured intersections invariant

**Remember:** Count the meeting points that might escape through the punctures.

*Makes the theorem clean to state or prove.* MSC 32Q65 (Pseudoholomorphic curves), 53D42. arXiv math.SG. Level 4: research.

**Definition.** Punctured J-curves in a symplectization have ends that approach periodic Reeb orbits. Siefring's intersection number of two such curves counts their actual meeting points, plus an asymptotic term for each pair of ends at the same orbit. That term comes from winding numbers of the ends around the orbit.

**Problem.** This intersection number depends only on the relative homotopy classes of the curves. For curves without a common component it is nonnegative, and zero exactly when the curves are disjoint and stay disjoint under homotopy.

**How the definition helps.** During a homotopy, meeting points can escape through punctures, so the plain count jumps (our own). The asymptotic terms record exactly what can escape, so the sum stays constant (our own). Positivity of intersections and winding bounds make each term nonnegative (our own).

**Paper or page:** [Lagrangian Spheres and Cyclic Quotient T-singularities](https://arxiv.org/abs/2509.18976v1). It says: “Then i\_\*(f,g) ≥ 0, where the notation i\_\* indicates either the constrained or unconstrained intersection number. Moreover, equality occurs if, and only if, f and g are disjoint and remain so after homotopy.”

**Sources:**

- [R. Siefring, Intersection theory of punctured pseudoholomorphic curves, Geom. Topol. 15 (2011) 2351–2457](https://doi.org/10.2140/gt.2011.15.2351)

### Complex hypersurfaces meet J-curves positively

**Remember:** Complex hypersurfaces can only be crossed the positive way.

*True by definition.* MSC 32Q65 (Pseudoholomorphic curves), 32Q60. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A codimension-two submanifold D of an almost complex manifold is J-complex when J maps its tangent spaces to themselves. Then its normal direction is a complex line, oriented by J. So a J-curve can only cross D in the positive direction.

**Problem.** A closed J-holomorphic curve u in class A, not contained in a J-complex hypersurface D, meets D in finitely many points. Each point has positive local intersection number, so A·D ≥ 0, with equality only when u misses D.

**How the definition helps.** A complex normal coordinate w along D makes w∘u solve a linear Cauchy–Riemann type equation, since J preserves the tangent spaces of D (our own). So the zeros of w∘u are isolated with positive order, which is the local intersection number (our own). A hypersurface that is only symplectic, not J-complex, can meet J-curves with sign −1 (our own).

**Paper or page:** [Unknottedness of symplectic submanifold fillings](https://arxiv.org/abs/2506.06807v1). It says: “If im u ⊄ Ĥ, then we have u•H = ∑\_(p∈Σ, u(p)∈Ĥ) δ(p,u,H)+∑\_(p∈Γ⁺∪Γ⁻) δ<sub>∞</sub>(p,u,H), where δ(p,u,H)&gt;0 and δ<sub>∞</sub>(p,u,H) ≥ 0.”

**Sources:**

- [K. Cieliebak and K. Mohnke, Symplectic hypersurfaces and transversality in Gromov–Witten theory, J. Symplectic Geom. 5 (2007) 281–356](https://doi.org/10.4310/JSG.2007.v5.n3.a2)

### Convex taming allows symplectic inflation

**Remember:** Adding something nonnegative on complex lines keeps a form taming.

*True by definition. Confidence: medium.* MSC 32Q65 (Pseudoholomorphic curves), 57K43. arXiv math.SG, math.GT. Level 4: research.

**Definition.** Taming, ω(v,Jv) &gt; 0 for v ≠ 0, is a convex condition on the form. If ω tames J and a closed 2-form ρ has ρ(v,Jv) ≥ 0, then ω + tρ tames J for all t ≥ 0. A taming form is nondegenerate, so ω + tρ is symplectic.

**Problem.** Let S be an embedded J-holomorphic sphere with S·S ≥ 0 in a symplectic 4-manifold with compatible J. Then for all t ≥ 0 there are symplectic forms taming J in the class \[ω\] + t·PD(S), where PD means Poincaré dual.

**How the definition helps.** Taming is a convex condition, so adding a closed form that is nonnegative on J-complex lines keeps J tamed (our own). Compatibility is not kept, since (ω + tρ)(·,J·) need not be symmetric (our own). The work went into building such a form ρ, Poincaré dual to S and supported near S (our own).

**Paper or page:** [Packing Integral Tori in Del Pezzo Surfaces](https://arxiv.org/abs/2308.09334v3). It says: “Then there is a family {ωₜ} of symplectic forms on M, with t &lt; ω(S) when S·S = −1, which all tame J and satisfy \[ωₜ\] = \[ω\] +tPD(S)”

**Sources:**

- [F. Lalonde and D. McDuff, The classification of ruled symplectic 4-manifolds, Math. Res. Lett. 3 (1996) 769–778](https://doi.org/10.4310/mrl.1996.v3.n6.a5)

### Square at least −1 gives automatic regularity

**Remember:** A normal bundle of degree at least −1 never obstructs.

*Rules out counterexamples.* MSC 32Q65 (Pseudoholomorphic curves), 57K43. arXiv math.SG, math.GT. Level 4: research.

**Definition.** An embedded J-holomorphic sphere S is regular when its linearized Cauchy–Riemann operator is onto. In a 4-manifold, this depends only on a real Cauchy–Riemann operator on the normal line bundle of S. That bundle has degree S·S.

**Problem.** In a symplectic 4-manifold, every embedded J-holomorphic sphere S with S·S ≥ −1 is regular, for every tame J. So such spheres survive every small change of J.

**How the definition helps.** On a line bundle of degree at least −1 over the sphere, a real Cauchy–Riemann operator is onto (our own). A cokernel element would solve an adjoint equation on a bundle of negative degree, and such solutions vanish (our own). The removed case is S·S = −2: the exceptional curve of the resolved A₁ singularity has 2-dimensional cokernel and disappears for generic J (our own).

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255v4). It says: “If J ∈ J\_ω is integrable and S is an embedded J-holomorphic sphere with self-intersection number \[S\]·\[S\] ≥ −1, then J is regular for the class \[S\]. In dimension 4, the same conclusion holds without the integrability assumption.”

**Sources:**

- [H. Hofer, V. Lizan and J.-C. Sikorav, On genericity for holomorphic curves in four-dimensional almost-complex manifolds, J. Geom. Anal. 7 (1997) 149–159](https://doi.org/10.1007/BF02921708)

### Integral closure preserves Łojasiewicz exponents

**Remember:** Integral closure changes generators but not their least order along an arc.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Łojasiewicz exponent of a holomorphic ideal with an isolated zero is the supremum, over nonconstant analytic arcs through zero, of the ideal's order on the arc divided by the arc's order. The ideal's order on an arc is the least vanishing order of its elements along it, and the arc's order is the least order of its coordinates.

**Problem.** The Łojasiewicz exponent of an ideal I with an isolated zero equals that of its integral closure. The closure consists of all h with hᵏ + a₁hᵏ⁻¹ + … + aₖ = 0 for some aⱼ ∈ Iʲ.

**How the definition helps.** By the arc criterion, h lies in the integral closure exactly when its order on every arc is at least the ideal's order, so each arc's order and each ratio stay fixed (our own). Curve selection identifies the supremum with the least α for which the generator norm is at least a positive constant times \|z\|ᵅ (our own).

**Paper or page:** [Effective Bertini theorem and formulas for multiplicity and the local Łojasiewicz exponent](https://arxiv.org/abs/2106.10924v1). It says: “the Łojasiewicz exponent ℒ₀(f) is given by”

**Sources:**

- [Monique Lejeune-Jalabert and Bernard Teissier, Clôture intégrale des idéaux et équisingularité, 2008](https://doi.org/10.5802/afst.1203)

### Nondegenerate polygons compute Milnor numbers

**Remember:** The polygon counts correctly when no face hides a critical point.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A plane germ is convenient if its Newton polygon, the lower boundary of the convex hull of its exponents plus the positive quadrant, meets both axes. It is Newton nondegenerate if, on each compact face, the sum of its terms has no critical point with both coordinates nonzero.

**Problem.** For a convenient Newton nondegenerate plane germ vanishing at zero, the Milnor number equals twice the area under the polygon minus both intercepts plus one. This number is the dimension of local functions modulo the first derivatives.

**How the definition helps.** Nondegeneracy rules out critical points of face polynomials that the polygon cannot see, and under it Kouchnirenko's theorem gives the area formula (our own). Without it the formula fails: (x+y)² + y³ and x² + y² have the same polygon but Milnor numbers 2 and 1 (our own).

**Paper or page:** [On real algebraic links in the 3-sphere associated with mixed polynomials](https://arxiv.org/abs/2011.11206v4). It says: “with equality holding if and only if q is non-degenerate.”

**Sources:**

- [Anatoli Kouchnirenko, Polyèdres de Newton et nombres de Milnor, 1976](https://doi.org/10.1007/bf01389769)

### Rounded divisors make jumps discrete

**Remember:** The ideal can change only when a rounded coefficient changes.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** Take a resolution on which the ideal pulls back to a monomial ideal, and let m and k be the vanishing orders of the ideal and of the Jacobian along each divisor. The multiplier ideal at c &gt; 0 is the set of functions whose pullbacks vanish to order at least ⌊cm⌋ − k along every divisor, so it depends on c only through the rounded values ⌊cm⌋.

**Problem.** At a point of a complex manifold, the positive numbers where a nonzero holomorphic ideal’s multiplier ideal changes are rational and locally finite.

**How the definition helps.** Each rounded value ⌊cm⌋ stays fixed until cm reaches an integer, which happens only at rational c (our own). Only finitely many divisors lie over a neighbourhood of the point, so only finitely many such values lie in any bounded interval (our own). Change of variables identifies this order test with the usual weighted square-integrability definition (our own).

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [Lawrence Ein, Robert Lazarsfeld, Karen E. Smith and Dror Varolin, Jumping coefficients of multiplier ideals, 2004](https://doi.org/10.1215/s0012-7094-04-12333-4)

### ℚ-factorial germs forbid projective small resolutions

**Remember:** Some positive multiple of every Weil divisor has a local meromorphic equation.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A normal complex germ is ℚ-factorial if some positive multiple of each Weil divisor is cut out by one local meromorphic function. A small resolution is a resolution whose exceptional set contains no divisor, so divisors upstairs and downstairs correspond (our own).

**Problem.** A singular locally ℚ-factorial normal complex germ has no projective small resolution.

**How the definition helps.** Push a relatively ample divisor down, take a multiple with a local equation, and pull back: the result is that multiple of the ample divisor yet has degree zero on every collapsed curve (our own). Projectivity requires positive degree there, a contradiction (our own). The node xy = zw has a projective small resolution and is not ℚ-factorial (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “is locally analytically ℚ-factorial, then X does not admit a small resolution.”

**Sources:** none listed. No primary source with a working link was found.

### Normalization quotients control delta jumps

**Remember:** Delta counts functions on the branch discs that the curve misses.

*Makes the theorem clean to state or prove.* MSC 32S10 (Invariants of analytic local rings), 32S30. arXiv math.AG, math.CV. Level 4: research.

**Definition.** The delta invariant of a reduced curve germ is the dimension of the holomorphic functions on its normalization, one smooth disc per branch, modulo the functions pulled back from the curve. It counts the independent functions that the branch parametrizations miss.

**Problem.** Vary the maps from finitely many pointed disks holomorphically in one parameter, keeping their origins at the marked point, with central maps parametrizing distinct branches once each. Then the delta invariant of the nearby image curves is at most its central value.

**How the definition helps.** The quotient definition makes delta the number of functions on fixed disks missing from the image of the parametrization, and such a count can only drop under small changes (our own). Finiteness and control of the nearby branch parametrizations make this precise, and Proposition 25 of the source supplies the bound.

**Paper or page:** [On Delta for parameterized Curve Singularities](https://arxiv.org/abs/2101.01784v1). It says: “and δℂ(𝒪(Cₛ,0)) ≤ δℂ(𝒪(C₀,0)).”

**Sources:**

- [Gert-Martin Greuel and Gerhard Pfister, On Delta for parameterized Curve Singularities (2021 preprint)](https://arxiv.org/abs/2101.01784v1)

### Simultaneous normalization trivializes marked curves

**Remember:** Trivialize the normalized branches, then glue back their marked points.

*True by definition.* MSC 32S15 (Equisingularity (topological and analytic)), 32S05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A weak simultaneous resolution of a marked family of reduced curves uses one finite map to normalize every fiber, separating its branches into smooth curves. The normalized curves form a flat family, and the marked points above the section form disjoint copies of the base.

**Problem.** Consider a flat family of reduced complex curve germs over a disk, with smooth fibers away from their marked points. A weak simultaneous resolution makes the family locally a topological product respecting the marks.

**How the definition helps.** The resolution separates the branches into smooth curves while recording which points to glue again, and smooth marked branches are local products (our own). Gluing the marked sections fiber by fiber gives the marked product downstairs (our own). The cited theorem also characterizes this situation by constant numerical invariants.

**Paper or page:** [Equinormalizability and topologically triviality of deformations of isolated curve singularities over smooth base spaces](https://arxiv.org/abs/1504.01296v1). It says: “f admits a weak simultaneous resolution”

**Sources:**

- [Equinormalizability and topologically triviality of deformations of isolated curve singularities over smooth base spaces](https://arxiv.org/abs/1504.01296v1)

### Tjurina bases parametrize deformations

**Remember:** One basis vector gives one necessary first-order parameter.

*Makes the theorem clean to state or prove.* MSC 32S30 (Deformations of complex singularities; vanishing cycles), 32B05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Tjurina algebra of a hypersurface equation f is the convergent power series modulo f and its first partial derivatives. It is the space of first-order changes f + εg modulo those made by coordinate changes and multiplication by units, and it is finite-dimensional at an isolated singularity (our own).

**Problem.** At an isolated complex hypersurface singularity, basis representatives gⱼ of its Tjurina algebra give a semiuniversal deformation f + ∑ tⱼgⱼ = 0. Every local deformation comes from this family by changing parameters, and the family uses the fewest possible parameters.

**How the definition helps.** Each basis vector is one first-order direction that coordinate changes and units cannot remove, so no family with fewer parameters can be versal (our own explanation). The analytic versality theorem shows that these directions suffice for actual families.

**Paper or page:** [Grauert's Approximation Theorem in any Characteristic and Applications](https://arxiv.org/abs/2510.21001v2). It says: “is a semiuniversal (respectively versal) deformation of R.”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing cycles yield reduced cohomology

**Remember:** Cone off the constants and only reduced cohomology remains.

*True by definition.* MSC 32S30 (Deformations of complex singularities; vanishing cycles), 32S55. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The unshifted vanishing cycles of a holomorphic function f, with complex coefficients, are the mapping cone of the specialization map from the constant sheaf on the zero fiber to the nearby cycles ψ<sub>f</sub>ℂ. At a point x this map is the inclusion of constants into the cohomology of the Milnor fiber F<sub>x</sub> (our own).

**Problem.** At each point of the zero fiber of a nonconstant holomorphic function on a connected complex manifold, vanishing cycles give the reduced Milnor fiber cohomology. Both sides use complex coefficients and the same degree.

**How the definition helps.** The cone of the inclusion of constants into the cochains of F<sub>x</sub> computes the reduced cohomology of F<sub>x</sub> (our own). The nearby-cycle comparison identifies stalks of ψ<sub>f</sub>ℂ with cochains of the Milnor fiber, and specialization sends a scalar to the constant cochain (our own).

**nLab:** [vanishing cycle](https://ncatlab.org/nlab/show/vanishing+cycle). It says: “Deligne proposed the framework of vanishing and nearby cycle functors.”

**Paper or page:** [Geometric monodromies, mixed Hodge numbers of motivic Milnor fibers and Newton polyhedra](https://arxiv.org/abs/2308.09418v3). It says: “stand for the reduced cohomology groups of Fₓ.”

**Sources:**

- [Pierre Deligne, Le formalisme des cycles évanescents, in SGA 7 II, edited by Pierre Deligne and Nicholas Katz, 1973 (volume DOI)](https://doi.org/10.1007/bfb0060505)

### Bernstein equations continue singular integrals

**Remember:** The functional equation shifts the singular integral to a more convergent one.

*True by definition.* MSC 32S40 (Monodromy; relations with differential equations and D-modules (complex-analytic aspects)), 32S05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Bernstein–Sato polynomial of a nonzero holomorphic germ f is the monic polynomial b(s) of least degree with P(s)fˢ⁺¹ = b(s)fˢ for some holomorphic differential operator P(s) polynomial in s. The equation trades the power fˢ for the more regular power fˢ⁺¹ (our own).

**Problem.** For a nonzero holomorphic germ f, the integral of \|f\|²ˢ against any smooth test density supported compactly near zero extends meromorphically from Re(s) &gt; 0.

**How the definition helps.** The equation and its complex conjugate write b(s)²\|f\|²ˢ as derivatives of the more convergent \|f\|²⁽ˢ⁺¹⁾ (our own). Integrating by parts onto the test density extends the integral one strip to the left, with poles only at shifted roots of b, and iteration continues it everywhere (our own). Existence of the functional equation is the substantive theorem (our own).

**Wikipedia:** [Bernstein–Sato polynomial](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Sato_polynomial). It says: “can be analytically continued to a meromorphic distribution-valued function of s by repeatedly using the functional equation”

**Sources:**

- [Joseph Bernstein, The analytic continuation of generalized functions with respect to a parameter, 1972](https://doi.org/10.1007/bf01077645)

### Crossings contribute no zeta factor

**Remember:** Crossings give torus fibers, and tori have zero Lefschetz numbers.

*Makes the theorem clean to state or prove.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The monodromy zeta function multiplies det(1 − tT) over even fiber cohomology and divides by it over odd cohomology, where T is the return map after one turn around zero. It depends only on the Lefschetz numbers of the powers of T (our own). A log resolution makes the pulled-back function locally a coordinate monomial times a nonvanishing factor.

**Problem.** In A’Campo’s formula each component of multiplicity m contributes (1 − tᵐ) raised to the Euler characteristic of its part above zero outside other components. Intersections of components contribute no factor.

**How the definition helps.** Where two or more components meet, the monomial model's local fiber is homotopic to a union of positive-dimensional tori that the return map translates or permutes, so every Lefschetz number vanishes (our own). On a single component of multiplicity m, the return map cycles m sheets (our own). A'Campo's theorem assembles these local factors using Euler characteristics (our own).

**Paper or page:** [Geometric monodromies, mixed Hodge numbers of motivic Milnor fibers and Newton polyhedra](https://arxiv.org/abs/2308.09418v3). It says: “Then we have ζₕ,₀(j!ℒ)(t)=1.”

**Sources:**

- [Norbert A’Campo, La fonction zêta d’une monodromie, 1975](https://doi.org/10.1007/bf02565748)

### Cyclic covers split Milnor cohomology

**Remember:** The finite cover turns each monodromy eigenspace into local coefficient cohomology.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a reduced homogeneous polynomial Q of degree d &gt; 0, the global Milnor fiber Q = 1 maps onto the projective complement of Q = 0 by sending each point to its line. This map is a d-sheeted covering whose deck group, the d-th roots of unity acting by multiplication, gives the monodromy.

**Problem.** For each character of the roots of unity, its eigenspace in complex fiber cohomology equals the complement cohomology with the corresponding local coefficients. These coefficients are functions on the sheets that transform by that character under pullback.

**How the definition helps.** The cohomology of a finite cover splits by characters of its deck group, each piece being base cohomology with the matching rank-one local coefficients (our own). The fiber meets each line of the complement in exactly d points, so it is such a cover (our own). Homogeneous scaling connects this global model to the nearby fiber inside a small ball (our own).

**nLab:** [Milnor fiber](https://ncatlab.org/nlab/show/Milnor+fiber). It says: “Relation to local systems on the complement of a union of complex hyperplanes”

**Sources:**

- [Daniel Cohen and Alexander Suciu, On Milnor Fibrations of Arrangements, 1995](https://doi.org/10.1112/jlms/51.1.105)

### Vanishing cycles locate Dehn twists

**Remember:** The collapsing circle specifies where to twist.

*Makes the theorem clean to state or prove.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 4: research.

**Definition.** A geometric vanishing cycle is an embedded circle in a smooth complex curve fiber that shrinks to a point in a nearby singular fiber. Curves related by a deformation through embedded circles represent the same cycle.

**Problem.** Around one ordinary node, locally given by xy = t, counterclockwise transport acts by a positive Dehn twist about the geometric vanishing cycle.

**How the definition helps.** The embedded circle specifies the annulus on which to perform the twist (our own). The local model gives one full turn of one boundary relative to the other (our own). For isolated plane curve singularities of fiber genus at least two, the cited lemma gives circles with the same homology class that cannot collapse.

**Paper or page:** [Vanishing arcs for isolated plane curve singularities](https://arxiv.org/abs/2506.04917v1). It says: “that represents the vanishing cycle but such that it is not a geometric vanishing cycle.”

**Sources:**

- [Vanishing arcs for isolated plane curve singularities](https://arxiv.org/abs/2506.04917v1)

### Property P excludes boundary discs

**Remember:** An analytic disc cannot carry arbitrarily curved bounded weights.

*Rules out counterexamples. Confidence: medium.* MSC 32T27 (Geometric and analytic invariants on weakly pseudoconvex boundaries), 32W05. arXiv math.CV, math.AP. Level 4: research.

**Definition.** A boundary has property P in degree one if, for each M &gt; 0, some smooth function with values in \[0,1\] near the boundary has complex Hessian at least M times the identity there.

**Problem.** A smooth bounded pseudoconvex domain with property P in degree one admits no nonconstant holomorphic map from the unit disc into its boundary.

**How the definition helps.** Along a holomorphic disc in the boundary, the pulled-back weight stays in \[0,1\] but has Laplacian at least a fixed multiple of M on a small disc where the map's derivative is bounded below (our own). For large M the circle mean inequality forces the weight to rise by more than one across that disc, a contradiction (our own).

**Paper or page:** [The Levi q-core and Property (P in degree q)](https://arxiv.org/abs/2505.17693v1). It says: “Then M satisfies Property (P<sub>q</sub>)”

**Sources:** none listed. No primary source with a working link was found.

### The Levi core retains complex boundary manifolds

**Remember:** A whole complex boundary manifold survives every deletion.

*True by definition.* MSC 32T27 (Geometric and analytic invariants on weakly pseudoconvex boundaries), 32W05. arXiv math.CV. Level 4: research.

**Definition.** The Levi core is what remains of the Levi kernel, the complex tangent directions where the Levi form vanishes, after repeatedly keeping only directions tangent to the closed support of the current distribution. A direction is tangent to a closed set if it kills every smooth function vanishing on the set, and limit stages take intersections.

**Problem.** On a smooth pseudoconvex boundary, the Levi core contains the holomorphic tangent directions of every positive-dimensional embedded complex submanifold of the boundary.

**How the definition helps.** The deletion rule preserves directions along any such submanifold because the support still contains the whole submanifold (our own). Its directions start in the Levi kernel by pseudoconvexity and the vanishing boundary equation (our own). Induction gives survival through every stage, which membership in the original kernel alone would not show (our own).

**Paper or page:** [The core of the Levi distribution](https://arxiv.org/abs/2109.04763v1). It says: “Let V ⊂ M be an embedded submanifold of positive dimension”

**Sources:**

- [The core of the Levi distribution](https://arxiv.org/abs/2109.04763v1)

### Integrability thresholds give analytic loci

**Remember:** Increase the exponent until the exponential weight stops being locally integrable.

*Makes the theorem clean to state or prove.* MSC 32U05 (Plurisubharmonic functions and generalizations), 14F18. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The complex singularity exponent of a plurisubharmonic function φ (upper semicontinuous and subharmonic on complex lines) at x is the supremum of c ≥ 0 for which exp(−2cφ) is integrable near x.

**Problem.** For each c &gt; 0, the points with exponent at most c form an analytic set. This means holomorphic equations cut out the set locally.

**How the definition helps.** By strong openness, the exponent at x is at most c exactly when exp(−2cφ) is not integrable at x, that is, when the constant 1 is not in the multiplier ideal of cφ (our own). Coherence gives finitely many local holomorphic generators of that ideal, and their common zeros cut out the set.

**Paper or page:** [Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1). It says: “\\{  z \\in \\Omega ; c<sub>z</sub> (\\varphi ) \\leq c \\}  = \\{  z \\in \\Omega ; e<sup>- 2 c \\varphi </sup> \\notin L<sup>1\_{\\emph{loc}</sup>, z} \\}  = \\bigcap \_{f \\in \\bigcup <sub>c' &gt; c</sub> \\mathcal{H}<sub>\\Omega </sub> (c' \\varphi )} f<sup>- 1</sup> (0)”

**Sources:**

- [Bojie He, Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1)
- [Q. Guan and X. Zhou, A proof of Demailly’s strong openness conjecture (2015)](https://doi.org/10.4007/annals.2015.182.2.5)

### Radial reweighting gives concavity

**Remember:** Integrable pairs (t, c) form a convex set; c(t) is its top.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 4: research.

**Definition.** For φ plurisubharmonic near 0 in ℂⁿ (upper semicontinuous, with the disk mean inequality on complex lines) and t &gt; −n, the weighted exponent c(t) is the supremum of c ≥ 0 for which \|z\|²ᵗ exp(−2cφ) is integrable near 0.

**Problem.** The weighted singularity exponent c(t) is nondecreasing and concave on t &gt; −n, allowing the value +∞.

**How the definition helps.** Hölder's inequality makes the geometric mean of two integrable integrands integrable, so the pairs (t, c) with \|z\|²ᵗ exp(−2cφ) integrable form a convex set whose upper boundary is c(t) (our own). Increasing t decreases \|z\|²ᵗ inside the unit ball, so c(t) is nondecreasing.

**Paper or page:** [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238). It says: “is concave and increasing.”

**Sources:**

- [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238)

### Slice comparison puts maxima on boundaries

**Remember:** An affine bound on a slice rules out a strict interior peak.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 4: research.

**Definition.** An upper semicontinuous function on a domain in ℂⁿ is q-plurisubharmonic, for an integer 0 ≤ q &lt; n, if it obeys affine comparison on every complex affine (q + 1)-plane. That is, on each closed ball in such a plane inside the domain, any real affine function above it on the boundary sphere stays above it on the whole ball.

**Problem.** Take a nonempty bounded open set in ℂⁿ and an integer q between zero and n − 1 inclusive. A q-plurisubharmonic function there, upper semicontinuous on the closure, attains its maximum on the boundary.

**How the definition helps.** Affine comparison rules out a strict interior peak even without derivatives. In our own proof, if an interior value beat every boundary value, adding a small multiple of \|z\|² keeps the gap and gives a strict interior maximum. A slightly lowered tangent affine function then lies above the function on a small sphere in a test plane but below it at the center, contradicting comparison.

**Paper or page:** [On rigid q-plurisubharmonic functions and q-pseudoconvex tube domains in ℂⁿ](https://arxiv.org/abs/2510.05009v2). It says: “Then any function $u$ which is upper semi-continuous on $\\overline{\\Omega }$ and $q$-plurisubharmonic on $\\Omega $ fulfills\\\[ \\max \\{ \\psi (z) : z \\in \\overline{\\Omega }\\} = \\max \\{ \\psi (z) : z \\in \\partial \\Omega \\} . \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Complete poles make holes removable

**Remember:** A pole exactly on the hole supplies the cutoff.

*Rules out counterexamples.* MSC 32U30 (Removable sets in pluripotential theory), 32U05. arXiv math.CV. Level 4: research.

**Definition.** A compact set is complete pluripolar if it is exactly the set where one plurisubharmonic function, upper semicontinuous with the disk mean inequality on complex lines, equals −∞, with the function finite somewhere.

**Problem.** In a domain in ℂⁿ with n ≥ 2, every plurisubharmonic function outside a compact complete pluripolar set extends uniquely across it.

**How the definition helps.** The defining function gives the whole hole as one pole set, which supplies cutoff functions in our own account of Wang's proof. Wang uses estimates near that set to extend the complex Hessian and recover a potential. For a sphere, the function equal to one inside and zero outside has no extension, by the maximum principle.

**Paper or page:** [Complete pluripolar sets and removable singularities of plurisubharmonic functions](https://arxiv.org/abs/2210.01416). It says: “Then every psh function on Ω ∖ K admits a unique psh extension to Ω.”

**Sources:**

- [Complete pluripolar sets and removable singularities of plurisubharmonic functions](https://arxiv.org/abs/2210.01416)

### Nonpluripolar constraints bound envelopes

**Remember:** A nonpluripolar constraint keeps every competitor bounded above.

*Rules out counterexamples.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 4: research.

**Definition.** On a compact connected Kähler manifold with form ω, the extremal envelope of a set E is the supremum of ω-potentials, functions that become plurisubharmonic after adding a local potential for ω, that are at most zero on E. E is nonpluripolar if it does not lie locally in the −∞ set of plurisubharmonic functions finite somewhere, and then the constraint on E bounds the family above (our own).

**Problem.** For a nonpluripolar Borel set E, the upper limit of nearby envelope values defines an ω-potential everywhere.

**How the definition helps.** Nonpluripolarity bounds the family above, so the upper-envelope theorem makes its regularized supremum an ω-potential. In our own counterexample on the projective line, a potential with a logarithmic pole at the point E still satisfies the constraint after adding any constant, so the supremum is infinite elsewhere.

**Wikipedia:** [Pluripolar set](https://en.wikipedia.org/wiki/Pluripolar_set). It says: “A pluripolar set is any subset of a complete pluripolar set.”

**Paper or page:** [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171). It says: “If E is not pluripolar, then Vₑ\* ∈ PSH(X,ω).”

**Sources:**

- [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171)

### Open constraints preserve semicontinuity

**Remember:** An open constraint survives taking upper limits.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 4: research.

**Definition.** On a compact connected Kähler manifold with Kähler form ω, the extremal function V of E is the supremum of all ω-potentials, functions that become plurisubharmonic after adding a local potential for ω, that are at most zero on E.

**Problem.** For nonempty open E, V equals its upper semicontinuous regularization, the upper limit of nearby values.

**How the definition helps.** Openness keeps the upper limit at most zero throughout E. In our own proof, the envelope theorem makes the regularized supremum admissible, since the open constraint bounds the family above. It therefore belongs to the original family and cannot exceed its supremum.

**Paper or page:** [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171). It says: “If E is an open subset, then V(E) = V\*(E).”

**Sources:**

- [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171)

### Polar constraints leave corrected envelopes unchanged

**Remember:** A tiny amount of the polar witness enforces the extra constraint.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 31C15. arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler manifold with Kähler form ω, call u admissible if u + h is plurisubharmonic for each smooth local potential h of ω. A polar set lies in the −∞ set of an admissible function that is not identically −∞.

**Problem.** Take the supremum of admissible functions nonpositive on E, then replace each value by the limit of the suprema on shrinking neighborhoods. Adding a polar set to E leaves this corrected supremum unchanged.

**How the definition helps.** A tiny multiple of a polar witness enforces the extra constraint on the polar set while barely changing a competitor (our own). In our own proof, each mixture (1 − ε)u + εw, with w a nonpositive admissible function equal to −∞ on the polar set, satisfies both constraints and tends to u almost everywhere as ε → 0. Submean inequalities recover u from its essential local upper limits, so the corrected envelope for both constraints dominates u, and inclusion gives the reverse.

**Paper or page:** [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159). It says: “Let E ⊂ X and P be a m-polar set. Then, V₍E ∪ P₎⋆ = V₍E₎⋆.”

**Sources:**

- [Polar sets for m-subharmonic functions on compact Hermitian manifolds, Corollary 6.10](https://arxiv.org/abs/2511.01159)

### Nonpluripolar restriction drops divisorial mass

**Remember:** Read the smooth part and leave the divisor mass behind.

*True by definition.* MSC 32U40 (Currents). arXiv math.CV. Level 4: research.

**Definition.** A closed positive (1,1)-current has analytic singularities if its local potentials are c log(∑ \|fⱼ\|²) + h with c &gt; 0, holomorphic fⱼ and smooth h, so it is smooth off the common zero set of the fⱼ. Its nonpluripolar restriction keeps the current off that set and gives the set zero mass.

**Problem.** For a closed positive current of type (1, 1) with analytic singularities, this restriction is its absolutely continuous part. It is again closed and positive.

**How the definition helps.** Off the common zero set the current is smooth, and the set has volume zero, so extension by zero gives exactly the part absolutely continuous with respect to volume (our own). The extension theorem for positive closed currents shows that this part stays closed.

**Paper or page:** [Definitions of the volume of a big cohomology class](https://arxiv.org/abs/2506.09486v1). It says: “If $T$ is a closed positive $(1,1)$-current with analytic singularities along $A\\subset X$, then $T<sub>ac</sub> =1<sub>X\\setminus A</sub>T$.”

**Sources:** none listed. No primary source with a working link was found.

### Pluripolar cutoffs preserve closedness

**Remember:** A defining pole lets cutoffs approach a hole without leaving a boundary term.

*Rules out counterexamples.* MSC 32U40 (Currents), 32U05. arXiv math.CV. Level 4: research.

**Definition.** A closed set is locally complete pluripolar if near every point it is exactly the −∞ set of a plurisubharmonic function finite somewhere there. That function yields cutoffs that approach the set with controlled derivatives (our own).

**Problem.** Consider a closed positive current outside a closed complete pluripolar set, with locally finite mass near that set. Extending its coefficients by zero preserves closedness.

**How the definition helps.** The defining function supplies cutoffs that approach the hole while controlling their derivatives. In our own account, El Mir uses positivity and finite mass to show that no boundary term survives. In ℂ² the standard Kähler form on one side of a real hyperplane acquires a boundary term when extended by zero.

**Wikipedia:** [Skoda–El Mir theorem](https://en.wikipedia.org/wiki/Skoda%E2%80%93El_Mir_theorem). It says: “Then the trivial extension of Θ to X is closed on X.”

**Sources:**

- [Hassine El Mir, Sur le prolongement des courants positifs fermés, Acta Mathematica 153 (1984), 1–45](https://doi.org/10.1007/BF02392374)

### Restricted currents add divisorial coefficients

**Remember:** Restrict both summands to the same hypersurface before adding.

*True by definition.* MSC 32U40 (Currents), 32U25. arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a positive closed (1,1)-current T and an irreducible analytic hypersurface H, restrict each coefficient measure of T to H. The divisorial coefficient of T along H is the unique number a such that this restriction equals a times integration over H.

**Problem.** For two such currents on a complex manifold, their coefficients on any fixed irreducible hypersurface add.

**How the definition helps.** Restriction to H is linear in the current, so the multiples of integration over H add (our own proof). The comparison theorem identifies each multiple with the generic Lelong number, so no density needs to be computed directly.

**Paper or page:** [On the Canonical Bundle Formula and Adjunction for Generalized Kaehler Pairs](https://arxiv.org/abs/2404.12007v1). It says: “χ₍A₎T = ν(T, A)\[A\], where ν(T, A) is the generic Lelong number of T along A.”

**Sources:** none listed. No primary source with a working link was found.

### Green operator separates harmonic forms

**Remember:** Invert away from the kernel and project onto it.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** When the Kohn Laplacian □<sub>b</sub>, the self-adjoint Laplacian of the tangential Cauchy–Riemann complex, has closed range, the complex Green operator inverts it on the orthogonal complement of its kernel and is zero on the kernel. The kernel consists of the harmonic forms.

**Problem.** Applying the Green operator then the Laplacian subtracts the orthogonal projection onto harmonic forms from any square-integrable form. The reverse order gives the same result on the Laplacian’s domain.

**How the definition helps.** On the kernel both compositions give zero, which is the identity minus the projection, and on its orthogonal complement both give the identity (our own argument). The closed range hypothesis makes this partial inverse bounded.

**Paper or page:** [On the singularities of the Szegő kernels on CR orbifolds](https://arxiv.org/abs/2208.03690). It says: “such that N□ᵦ⁽ᵠ⁾ + Π⁽ᵠ⁾ = I on Dom □ᵦ⁽ᵠ⁾”

**Sources:**

- [Andrea Galasso and Chin-Yu Hsiao, On the singularities of the Szegő kernels on CR orbifolds (arXiv:2208.03690v1)](https://arxiv.org/abs/2208.03690)

### Mixed Levi signs remove singularities

**Remember:** Mixed Levi signs give a negative direction for either normal.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** The Levi form of a smooth real hypersurface at a point is the complex Hessian of a defining function on complex tangent directions, the tangent vectors v with iv also tangent. It has mixed signature when it has both a positive and a negative eigenvalue, so each sign of the conormal direction sees a negative eigenvalue (our own).

**Problem.** Where the Levi form has mixed signature, every distribution satisfying the tangential Cauchy–Riemann equations is locally a smooth function.

**How the definition helps.** The tangential equations confine the possible singular directions of a solution to the conormal line, the covectors vanishing on complex tangents (our own deduction). Mixed signature gives a negative eigenvalue for each sign of the conormal, and the cited regularity theorem excludes every such direction. On the sphere, where the Levi form is definite, the boundary value of 1/(1 − z₁) is a singular solution.

**Paper or page:** [Regularity of infinitesimal automorphisms of involutive structures](https://arxiv.org/abs/2506.24105). It says: “the Levi form in σ has one negative eigenvalue”

**Sources:**

- [Bernhard Lamel and Nicholas Braun Rodrigues, Regularity of infinitesimal automorphisms of involutive structures (arXiv:2506.24105v1)](https://arxiv.org/abs/2506.24105)

### Transversality prevents Levi collapse

**Remember:** A nonzero normal factor carries Levi positivity through the map.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A Cauchy–Riemann map between real hypersurfaces carries complex tangents to complex tangents complex-linearly. It is transverse at a point when its derivative sends the real direction outside the complex tangents outside the target's complex tangents, and then it pulls the target Levi form back to a nonzero multiple of the source Levi form (our own).

**Problem.** Suppose the source Levi form is positive definite and the target Levi form is positive semidefinite for suitable defining functions. A twice continuously differentiable Cauchy–Riemann map has injective derivative wherever it is transverse.

**How the definition helps.** Transversality makes the pulled-back target Levi form a nonzero multiple of the definite source form, so no complex tangent vector lies in the kernel of the derivative (our own argument). Transversality also excludes kernel vectors outside the complex tangents. A constant map illustrates failure without transversality.

**Paper or page:** [Regularity of CR maps into uniformly pseudoconvex hypersurfaces and applications to proper holomorphic maps](https://arxiv.org/abs/2302.14016). It says: “Then h is an immersion”

**Sources:**

- [Josef Greilhuber and Bernhard Lamel, Regularity of CR maps into uniformly pseudoconvex hypersurfaces and applications to proper holomorphic maps (arXiv:2302.14016v1)](https://arxiv.org/abs/2302.14016)

### Two-jets determine CR symmetries

**Remember:** Nondegenerate Levi form: two derivatives at one point fix every symmetry.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A real hypersurface is Levi-nondegenerate when the complex Hessian of a defining function, restricted to complex tangent vectors, has zero kernel. This rules out flat directions such as those of Im w = 0, where symmetries can vary freely in higher order (our own).

**Problem.** Two local biholomorphic symmetries of a Levi-nondegenerate real analytic hypersurface in ℂⁿ, n ≥ 2, agree near a fixed point if their two-jets, the values and first and second derivatives, agree there.

**How the definition helps.** The two-jet records all freedom left by the Chern–Moser normal coordinates, and their normalization theorem fixes the higher coefficients once it agrees (our own explanation). On the Levi-flat hypersurface Im w = 0 in ℂ², the symmetry (z,w) ↦ (z + z³, w) shares the identity's two-jet.

**Paper or page:** [New examples of CR submanifolds for the 2-jet determination problem](https://arxiv.org/abs/2506.21221). It says: “is uniquely determined by its 2-jet.”

**Sources:**

- [S. S. Chern and J. K. Moser, Real hypersurfaces in complex manifolds](https://doi.org/10.1007/BF02392146)

### Finite bracket type permits wedge extension

**Remember:** Bracket spanning rules out an independent real parameter with arbitrary boundary data.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32V25. arXiv math.CV, math.DG. Level 4: research.

**Definition.** A real submanifold in complex space is generic when its tangent space spans the ambient space over ℂ at each point. Finite bracket type means that complex tangent fields, their conjugates, and their repeated brackets span the submanifold’s complexified tangent space at the point.

**Problem.** Near a finite bracket type point of a smooth generic submanifold of positive codimension, every smooth solution of the tangential Cauchy–Riemann equations extends holomorphically. The extension occupies a wedge opening along a cone of normal directions.

**How the definition helps.** Bracket generation excludes a free real direction along which solutions could vary arbitrarily, and Tumanov's theorem supplies the wedge extension under it (our own explanation). On Im w = 0, a smooth function of Re w that vanishes for negative and is positive for positive arguments solves the equations. Boundary uniqueness on a half-disc prevents its holomorphic extension into either side.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “it is of Bloom-Graham finite type at p”

**Sources:**

- [A. E. Tumanov, Extension of CR Functions into a Wedge from a Manifold of Finite Type](https://doi.org/10.1070/sm1989v064n01abeh003298)

### Finite contact gives a Sobolev gain

**Remember:** Finite type caps how tangent any complex curve can be.

*Makes the theorem clean to state or prove.* MSC 32V35 (Finite-type conditions on CR manifolds), 32W05. arXiv math.CV, math.AP. Level 4: research.

**Definition.** The D'Angelo one-type at a boundary point p is the supremum, over nonconstant holomorphic curves γ through p, of the vanishing order of ρ ∘ γ divided by the vanishing order of γ − p, for a defining function ρ. A curve with ρ ∘ γ ≡ 0 contributes infinity. Finite type means this supremum is finite, so normalized contact is bounded over all curves at once.

**Problem.** Suppose the boundary is pseudoconvex near p, meaning its complex Hessian is nonnegative on complex tangents for a defining function negative inside. Finite one-type at p gives a local subelliptic estimate for the ∂̄-Neumann problem on (0,1)-forms.

**How the definition helps.** Finite one-type caps normalized contact, excluding the arbitrarily flat curves that obstruct any derivative gain (our own comparison). Catlin's theorem then bounds a squared Sobolev norm of positive order by the energies of ∂̄ and its adjoint plus the squared L² norm, for forms supported near p that satisfy the adjoint boundary condition.

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “∂Ωꜰ is of finite type at 0 (i.e., Δ₁(∂Ωꜰ,0) &lt; ∞)”

**Sources:**

- [David Catlin, Subelliptic Estimates for the ∂̄-Neumann Problem on Pseudoconvex Domains (1987)](https://doi.org/10.2307/1971347)

### Finite nondegeneracy rules out divergence

**Remember:** A finite list of differentiated equations can solve for every missing component.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32V05. arXiv math.CV, math.DG. Level 4: research.

**Definition.** A real analytic hypersurface ρ = 0 in ℂⁿ is finitely nondegenerate at a point if the vector of complex derivatives ∂ρ/∂zⱼ and its repeated derivatives along antiholomorphic tangent fields span ℂⁿ there after finitely many orders. Then finitely many derivatives of a mapping identity give enough equations to solve for every component of the map (our own).

**Problem.** Let an invertible formal map fixing zero carry one real analytic hypersurface germ in ℂⁿ, n ≥ 2, to another, sending one defining equation to the other up to an invertible factor. If the source is finitely nondegenerate at zero, the map converges.

**How the definition helps.** Finite nondegeneracy supplies independent equations for every target coordinate after differentiation of the mapping identity (our own explanation). The convergence theorem of Baouendi, Ebenfelt, and Rothschild turns this rank condition into an actual holomorphic map. On Im w=0 in ℂ², any invertible divergent series in z alone can replace z while w stays fixed.

**Paper or page:** [Complete normal forms for real hypersurfaces in ℂ³ at 2-nondegenerate points of Levi non-uniform rank zero](https://arxiv.org/abs/2310.11785). It says: “Then every origin-preserving formal equivalence map between M and M′ is biholomorphic.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Parametrization of local biholomorphisms of real analytic hypersurfaces (1997)](https://doi.org/10.4310/ajm.1997.v1.n1.a1)

### Smooth curves can miss infinite type

**Remember:** A cusp can lie in the boundary even when smooth curves leave it.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32T25. arXiv math.CV. Level 4: research.

**Definition.** The D'Angelo type at p is the supremum, over nonconstant holomorphic curve germs through p, of their contact order with a local boundary equation divided by their multiplicity, the least vanishing order of their coordinates minus p. Regular type takes the same supremum over curves with nonzero derivative only.

**Problem.** On a smooth bounded pseudoconvex domain, the ∂̄-Neumann problem on (0,1)-forms gains a positive fraction of a derivative locally exactly at finite D’Angelo type points.

**How the definition helps.** Testing singular curves detects contact that regular curves miss, and Catlin's subellipticity theorems tie the all-curve condition to the estimate (our own). At zero, Re w + \|x² − y³\|² = 0 contains the cusp (t³, t², 0), although regular curves have contact at most six (our own). Kamimoto gives an infinite-type example with finite regular type and no single infinitely tangent holomorphic curve.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044v1). It says: “Let n≥2. There exists a smooth pseudoconvex real hypersurface M in ℂⁿ⁺¹ with Δ₁(M,p)=∞ and Δ₁ʳᵉᵍ(M,p)&lt;∞”

**Sources:**

- [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044v1)
- [Catlin, Necessary Conditions for Subellipticity of the ∂̄-Neumann Problem (1983)](https://doi.org/10.2307/2006974)
- [Catlin, Subelliptic Estimates for the ∂̄-Neumann Problem on Pseudoconvex Domains (1987)](https://doi.org/10.2307/1971347)

### Bounded weights with large curvature force compactness

**Remember:** Bound the weight and let its curvature grow.

*Makes the theorem clean to state or prove.* MSC 32W05 (∂̄ and ∂̄-Neumann operators). arXiv math.CV, math.AP. Level 4: research.

**Definition.** A boundary has property P in degree q if, for each M &gt; 0, some smooth function with values in \[0,1\] on a boundary neighbourhood has complex Hessian whose every sum of q eigenvalues is at least M there.

**Problem.** On a smooth bounded pseudoconvex domain in ℂⁿ, property P makes the ∂̄-Neumann inverse compact in degree q, for 1 ≤ q ≤ n. Pseudoconvexity means the boundary has nonnegative curvature along its complex tangents.

**How the definition helps.** Property P puts arbitrarily large curvature into a boundary estimate while keeping the weight bounded (our own). The weighted ∂̄ estimate gives a small boundary contribution, and interior regularity supplies a compact error (our own).

**Paper or page:** [The Levi q-core and Property (Pq)](https://arxiv.org/abs/2505.17693v1). It says: “and hence the ∂̄-Neumann operator N<sub>q</sub> is compact.”

**Sources:**

- [The Levi q-core and Property (Pq)](https://arxiv.org/abs/2505.17693v1)

### Energy primitives give shift identities

**Remember:** Energy is fixed by its value at zero and its derivative.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler n-manifold, the Monge–Ampère energy E is the function on smooth ω-potentials u (those with ω + ddᶜu &gt; 0) with E(0) = 0 whose derivative in each direction h is ∫ h(ω + ddᶜu)ⁿ.

**Problem.** For a smooth ω-potential τ, take ω + ddᶜτ as the new background form. Then the new energy at each admissible φ equals E(φ + τ) − E(τ).

**How the definition helps.** Both sides vanish at φ = 0 and have the same derivative, because φ + τ has the same corrected Hessian ω + ddᶜτ + ddᶜφ. So they agree on the convex space of potentials (our own). The usual sum of mixed products of forms shows that such an energy exists.

**Paper or page:** [Measures of finite energy in pluripotential theory: a synthetic approach](https://arxiv.org/abs/2307.01697). It says: “\\operatorname{E}<sub>\\omega \_\\tau </sub>(\\varphi )=\\operatorname{E}<sub>\\omega </sub>(\\varphi +\\tau )-\\operatorname{E}\_\\omega (\\tau ).”

**Sources:**

- [Robert Berman, Sébastien Boucksom, Vincent Guedj and Ahmed Zeriahi, A variational approach to complex Monge-Ampère equations](https://doi.org/10.1007/s10240-012-0046-6)

### Full mass prevents vacuous domination

**Remember:** A measure that lost its mass cannot test domination.

*Rules out counterexamples.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** An ω-plurisubharmonic potential u on a compact Kähler n-fold has full mass when its nonpluripolar Monge–Ampère measure, the increasing limit of (ω + ddᶜ max(u,−j))ⁿ on {u &gt; −j}, has the largest possible total mass ∫ ωⁿ.

**Problem.** For full mass potentials u and v, if u ≤ v almost everywhere for the measure of v, then u ≤ v everywhere.

**How the definition helps.** Full mass stops the measure of v from losing mass to pole sets, so the test is not empty, and the comparison theorem applies. For our own counterexample, on projective space take v as the logarithm of the Fubini–Study norm of a hyperplane section, normalized so that ω + ddᶜv is integration over the hyperplane. Its nonpluripolar measure is zero, so u = 0 passes the empty test although u ≤ v fails.

**Paper or page:** [Generalized Monge-Ampère capacities](https://arxiv.org/abs/1402.2497). It says: “If u, v ∈ ℰ(X,ω) such that u ≤ v MA(v)-almost everywhere then u ≤ v on X.”

**Sources:**

- [Vincent Guedj and Ahmed Zeriahi, The weighted Monge–Ampère energy of quasiplurisubharmonic functions, Journal of Functional Analysis 250 (2007), 442–482](https://doi.org/10.1016/j.jfa.2007.04.018)

### Homogeneous geodesics make energy affine

**Remember:** Zero product Monge–Ampère measure means zero energy curvature.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** A weak geodesic on a compact Kähler manifold X with form ω is a rotation-invariant potential U on X times an annulus whose corrected Hessian ω + ddᶜU is nonnegative with zero top power. The Monge–Ampère energy has derivative ∫ h(ω + ddᶜu)ⁿ in direction h, so its complex Hessian along the annulus is the integral over X of (ω + ddᶜU)ⁿ⁺¹ (our own).

**Problem.** Along a continuous weak geodesic between bounded potentials, the Monge–Ampère energy is affine in the logarithm of the annulus radius.

**How the definition helps.** The geodesic sets to zero the measure that gives the complex Hessian of the energy along the annulus, so the energy is harmonic there (our own). Rotation invariance then makes it affine in log radius (our own). The work lies in this Hessian formula for bounded continuous potentials.

**nLab:** [Kähler potential](https://ncatlab.org/nlab/show/K%C3%A4hler+potential). It says: “On a Kähler manifold the Kähler form ω can locally be written as ω = √−1 ∂∂̄K”

**Paper or page:** [Geometry and Topology of the space of plurisubharmonic functions](https://arxiv.org/abs/1703.05556). It says: “Let (Φₛ)₀≤ₛ≤₁ be a continuous geodesic. Then s ↦ E(Φₛ) is affine.”

**Sources:**

- [Robert Berman, Sébastien Boucksom, Vincent Guedj and Ahmed Zeriahi, A variational approach to complex Monge-Ampère equations](https://doi.org/10.1007/s10240-012-0046-6)

### Mass bounds extend Monge–Ampère

**Remember:** Bounded mass along the approximations lets the measure survive the limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a bounded hyperconvex domain, one with a negative continuous plurisubharmonic exhaustion, Cegrell’s class consists of the nonpositive plurisubharmonic functions that are, near each point, decreasing limits of bounded plurisubharmonic functions with zero boundary values and uniformly bounded total Monge–Ampère mass.

**Problem.** For a function in Cegrell’s class, these approximations define a unique local Monge–Ampère measure. Their measures converge to it when integrated against continuous functions supported on compact subsets of the neighborhood.

**How the definition helps.** The mass bound lets the measures of the approximations have a limit even where the function is −∞. In our own account, bounded mass gives weak limits along subsequences. Cegrell’s comparison estimates show that every allowed approximation gives the same limit.

**Paper or page:** [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238). It says: “is in the Cegrell’s class ℰ.”

**Sources:**

- [Urban Cegrell, The general definition of the complex Monge–Ampère operator, Annales de l’Institut Fourier 54 (2004), 159–179](https://archive.numdam.org/articles/10.5802/aif.2014/)

### Obstacle envelopes concentrate mass

**Remember:** The largest potential under h cannot rise where h leaves room.

*Makes the theorem clean to state or prove.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** The envelope of a continuous function h on a compact Kähler manifold with form θ is the upper semicontinuous regularization of the supremum of all θ-potentials lying below h. A θ-potential is a function that becomes plurisubharmonic after adding a local potential of θ.

**Problem.** The envelope’s Monge–Ampère measure, the top power of its corrected complex Hessian, assigns zero mass to the open set where the envelope lies below h.

**How the definition helps.** Where the envelope lies strictly below h, a small local increase would still stay below h, so the envelope is locally maximal there (our own explanation). The Bedford–Taylor characterization says a locally bounded maximal potential has zero Monge–Ampère measure.

**Paper or page:** [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339). It says: “Then Pθ(h) ≤ h outside a pluripolar set and ∫\_{ {Pθ(h)&lt;h} } (θ + ddᶜPθ(h))ⁿ = 0.”

**Sources:**

- [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339)

### Plurifine locality handles maxima

**Remember:** Strict inequality carves a plurifine open set where both functions agree.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators), 32U05. arXiv math.CV. Level 4: research.

**Definition.** The plurifine topology is the coarsest topology that makes every plurisubharmonic function continuous, allowing the value −∞. For θ-potentials u and v, functions that become plurisubharmonic after adding a local potential of θ, the set {u &gt; v} is plurifine open.

**Problem.** For θ-potentials u and v, the nonpluripolar Monge–Ampère measures of u and of max(u,v) agree on the set where u &gt; v.

**How the definition helps.** The nonpluripolar measure is local in the plurifine topology, and u equals max(u,v) on the plurifine open set {u &gt; v} (our own argument). Ordinary open sets do not work, because {u &gt; v} need not be open in the usual topology.

**Paper or page:** [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339). It says: “𝟙{u &gt; v} (θ + ddᶜu)ⁿ = 𝟙{u &gt; v} (θ + ddᶜ max(u,v))ⁿ.”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339)
