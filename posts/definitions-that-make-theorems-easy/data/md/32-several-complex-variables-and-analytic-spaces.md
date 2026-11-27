### Fourier modes give Laurent coefficients

**Remember:** The angular frequency gives the Laurent exponent.

*Makes the theorem clean to state or prove.* MSC 32A05 (Power series, series of functions of several complex variables), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** Consider a connected open set of complex tuples with nonzero coordinates that allows independent rotations of each coordinate. Fixing all coordinate radii gives a torus. Take the angular Fourier coefficient at an integer frequency vector and divide by the product of the radii raised to those frequencies.

**Problem.** For a holomorphic function on this domain, the scaled Fourier coefficient is independent of the chosen radii. It equals the corresponding coefficient of the Laurent series, which permits negative integer powers.

**How the definition helps.** In our own explanation, each Laurent monomial contributes to exactly one angular frequency on the torus. Dividing by its radial factor leaves just its coefficient. The Laurent expansion theorem supplies convergence on compact subsets, which justifies taking Fourier coefficients term by term.

**Paper or page:** [Power series as Fourier series](https://arxiv.org/abs/2107.04201v2). It says: “there is a continuous linear functional aα : 𝒪(Ω) → ℂ such that the Fourier series of a T ∈ 𝒪(Ω) is of the form”

**Sources:**

- [Debraj Chakrabarti and Anirban Dawn, Power series as Fourier series (2021 preprint)](https://arxiv.org/abs/2107.04201v2)

### Local quotients form meromorphic fields

**Remember:** Use fractions even when a point has no value.

*True by definition.* MSC 32A20 (Meromorphic functions of several complex variables), 32H04. arXiv math.CV. Level 3: graduate.

**Definition.** A meromorphic function has compatible local expressions as quotients of holomorphic functions. On each connected neighborhood the denominator must not vanish identically. Two fractions agree when their cross products agree.

**Problem.** The meromorphic functions on a connected complex manifold form a field.

**How the definition helps.** In our own proof, local fractions support the usual field operations. The identity theorem ensures that a nonzero function has a numerator that vanishes identically on no open neighborhood. Its reciprocal therefore exists locally, and these reciprocals agree wherever their neighborhoods overlap. Requiring an everywhere defined map to the complex plane with infinity added would exclude z₁/z₂ at the origin.

**Wikipedia:** [Meromorphic function](https://en.wikipedia.org/wiki/Meromorphic_function). It says: “In several complex variables, a meromorphic function is defined to be locally a quotient of two holomorphic functions.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman coordinates linearize biholomorphisms

**Remember:** Differentiate the kernel ratio to remove the Jacobian factors.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** Bergman representative coordinates center at a point a of a bounded domain with Bergman kernel K. Take the gradient in w̄ of log(K(z,w)/K(a,w)) at w=a, then apply the inverse Bergman metric at a.

**Problem.** In representative coordinates centered at a and F(a), a holomorphic isomorphism F between bounded domains is locally its derivative dF(a).

**How the definition helps.** The kernel ratio cancels the Jacobian factor depending on w, and differentiation removes the factor depending only on z. In our own calculation, the metric transformation law converts the remaining derivative factor into dF(a). The coordinate map has derivative equal to the identity at a by the mixed derivative formula for the Bergman metric.

**Paper or page:** [Local Rigidity of the Bergman Metric and of the Kähler Carathéodory Metric](https://arxiv.org/abs/2408.09572v2). It says: “the Bergman representative coordinate”

**Sources:**

- [Stefan Bergman, The Kernel Function and Conformal Mapping](https://doi.org/10.1090/surv/005)

### Bergman kernels converge along exhaustions

**Remember:** Extremal functions have locally convergent subsequences on an exhaustion.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman diagonal K(z,z) is the largest value of \|f(z)\|² among holomorphic functions of volume L² norm at most one.

**Problem.** If bounded domains increase to a bounded union, their Bergman kernels converge uniformly on compact subsets of the product of the union with itself.

**How the definition helps.** The extremal definition compares successive domains by restriction, without choosing compatible bases. In our own proof, local mean-value bounds give a locally convergent subsequence of maximizing functions at each fixed point. Fatou’s lemma bounds the limit’s norm by one, giving equality of the limiting diagonals. Kernel Cauchy–Schwarz bounds give local compactness on the product, and holomorphic dependence on z and w̄ gives uniqueness from diagonal values.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman kernels follow the Jacobian

**Remember:** A change of variables moves the evaluation kernel with the Jacobian.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex Euclidean domain, consider the square integrable holomorphic functions with their usual integral inner product. The Bergman kernel at w is the unique function whose inner product with f gives f(w). One can also construct it by summing products over an orthonormal basis.

**Problem.** Let F map one complex Euclidean domain onto another holomorphically with a holomorphic inverse. The source kernel at z,w equals the target kernel at F(z),F(w) times J(z) times the conjugate of J(w). Here J is the determinant of the complex derivative of F.

**How the definition helps.** In our own proof, the evaluation identity determines the changed kernel without transforming a basis sum. Composing with F and multiplying by J preserves inner products by change of variables. Boundedness of point evaluation and the Hilbert space representation theorem justify the kernel description.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions”

**Sources:** none listed. No primary source with a working link was found.

### Circle averaging fixes the origin kernel

**Remember:** Circle averaging leaves only the constant term.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** A domain D in ℂⁿ is balanced if λz belongs to D whenever z belongs to D and \|λ\|≤1. The Bergman kernel represents point evaluation by an inner product on square-integrable holomorphic functions, using ordinary volume.

**Problem.** For a bounded balanced domain D, the Bergman kernel with one argument at the origin is the constant 1/Vol(D).

**How the definition helps.** Defining the kernel by evaluation lets us identify it at zero without summing an orthonormal basis (our own). For each z, the disk mean-value formula averages f(λz) over \|λ\|=1 to give f(0) (our own). Rotations preserve both D and volume, so integrating this identity gives the volume average of f as f(0) (our own). The unique vector representing this average is the constant reciprocal of the volume (our own).

**Paper or page:** [2-proper holomorphic images of classical Cartan domains](https://arxiv.org/abs/2303.11940v4). It says: “Consequently, the Bergman kernel Kᴅ is given by the formula Kᴅ(0,z)=1/Vol(D), z∈D.”

**Sources:**

- [2-proper holomorphic images of classical Cartan domains](https://arxiv.org/abs/2303.11940v4)

### Evaluation gives sharp Bergman bounds

**Remember:** The norm of the evaluation vector is the sharp bound.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32A36. arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space on a domain in ℂⁿ consists of holomorphic functions with finite squared integral against volume. Its kernel vector k at w satisfies ⟨f,k⟩ = f(w) for every function f in that space. Another definition expands the kernel in an orthonormal basis.

**Problem.** Among functions of norm at most one, the largest squared modulus at w equals the kernel value K(w,w).

**How the definition helps.** Representing evaluation by a vector turns the sharp bound into its squared norm (our own). Cauchy–Schwarz gives the bound, and a unit vector in the kernel vector’s direction attains it (our own). If the kernel vector is zero, every value vanishes (our own). Evaluating the vector at w gives K(w,w) (our own). The mean-value inequality makes evaluation bounded, and Hilbert space representation supplies the vector used in the basis expansion (our own).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Evaluation kernels multiply on products

**Remember:** Evaluating in two variables takes one kernel per factor.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32A36. arXiv math.CV. Level 3: graduate.

**Definition.** On a domain in ℂⁿ, the Bergman kernel represents evaluation of square-integrable holomorphic functions by an inner product using ordinary volume. The equivalent basis formula sums products of values of orthonormal basis functions.

**Problem.** The Bergman kernel of a product of bounded domains is the product of the kernels of the factors.

**How the definition helps.** Defining the kernel by evaluation lets one evaluate in each variable separately without constructing a product basis (our own). The mean-value inequality in one factor bounds the squared integral on each fixed slice by a constant times the full squared integral (our own). Each factor kernel therefore evaluates the corresponding slice (our own). Fubini’s theorem combines the two integrals, and uniqueness of the evaluation vector identifies the product kernel (our own).

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized forms share Cauchy reproduction

**Remember:** Keep the normalization and change the kernel without changing reproduction.

*Makes the theorem clean to state or prove.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** For an interior point z, a generating form η assigns complex-linear functionals smoothly near the boundary and satisfies η(w)(w−z)=1. Its Cauchy–Fantappiè kernel is η wedged with n−1 copies of its antiholomorphic derivative in w, divided by (2πi)ⁿ.

**Problem.** On a bounded smooth domain every such kernel recovers a holomorphic function continuous on the closure by integrating its boundary values.

**How the definition helps.** The normalization survives straight-line interpolation between any generating form and the radial Bochner–Martinelli form. In our own argument, derivatives of the coefficients in antiholomorphic and interpolation directions annihilate w−z. Only n−1 such coefficient directions are independent, so the top wedge vanishes. Stokes’ theorem along the interpolation gives the same integral as the radial formula.

**Wikipedia:** [Bochner–Martinelli formula](https://en.wikipedia.org/wiki/Bochner%E2%80%93Martinelli_formula). It says: “generalization of the Cauchy integral formula to functions of several complex variables”

**Sources:**

- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Peak powers force Bergman divergence

**Remember:** Peak powers retain their boundary value as their volume norms shrink.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** A peak function is holomorphic on a bounded domain and continuous on its closure. It equals one at p and has modulus less than one everywhere else. The Bergman diagonal K(z,z) is the supremum of \|f(z)\|² over holomorphic functions of volume L² norm at most one.

**Problem.** At a boundary point p with a peak function, K(z,z) tends to infinity as z approaches p from inside.

**How the definition helps.** Peak powers give explicit tests in the extremal formula for the diagonal. In our own proof, dominated convergence sends their squared norms to zero, while each fixed power tends to one at p. Dividing by its norm gives an arbitrarily large lower bound near p. The kernel representation of evaluation identifies this extremal formula with the usual diagonal.

**Paper or page:** [Around L¹ (un)boundedness of Bergman and Szegö projections](https://arxiv.org/abs/2104.04009v1). It says: “there exists F ∈ A(D) such that F(z₀)=1 and \|F(z)\|&lt;1 for every z ∈ D̄ ∖ {z₀}.”

**Sources:** none listed. No primary source with a working link was found.

### Smaller domains enlarge Bergman diagonals

**Remember:** A smaller domain gives more functions a norm at most one.

*True by definition. Confidence: medium.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman diagonal K(z,z) is the supremum of \|f(z)\|² over holomorphic functions with volume L² norm at most one.

**Problem.** If U ⊂ V are bounded domains and z lies in U, the Bergman diagonal on U is at least as large as on V.

**How the definition helps.** Restriction can only decrease the norm, so every candidate on V supplies a candidate on U. Our own proof uses this supremum in place of a sum over a basis. The two formulas agree because the kernel vector represents evaluation in the Hilbert space.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Unit flux gives Bochner–Martinelli reproduction

**Remember:** Unit flux gives Stokes' theorem the right normalization.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 3: graduate.

**Definition.** The Bochner–Martinelli kernel comes from the radial field centered at z with magnitude \|ζ−z\|¹⁻²ⁿ. Contract it into Euclidean volume and retain the part with n holomorphic and n−1 antiholomorphic differentials. Normalize its integral over a sphere centered at z to one.

**Problem.** For a function holomorphic inside a bounded smooth domain and continuous on its closure, integration against this boundary kernel gives its value at z.

**How the definition helps.** Unit flux turns the integral over a shrinking sphere into evaluation at its center. In our own proof, differentiation shows the kernel is closed away from z. Multiplication by a holomorphic function preserves closedness because each term already contains every holomorphic differential. Stokes’ theorem on inner approximating domains then equates the boundary and sphere integrals.

**Paper or page:** [Geometric conditions for bounded point evaluations in several complex variables](https://arxiv.org/abs/2507.23688v2). It says: “where w(ζ,z) is the Bochner-Martinelli kernel.”

**Sources:**

- [Bochner, Analytic and Meromorphic Continuation by Means of Green's Formula (1943)](https://doi.org/10.2307/1969103)
- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Berezin averaging fixes holomorphic symbols

**Remember:** A kernel vector averages its holomorphic multiplier to the value at its center.

*True by definition. Confidence: medium.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman kernel vector K(·,z) represents evaluation by an inner product on square-integrable holomorphic functions. The Berezin transform averages a bounded function against the volume density \|K(w,z)\|²/K(z,z).

**Problem.** On a bounded domain the Berezin transform is a contraction in supremum norm and fixes every bounded holomorphic function.

**How the definition helps.** The density integrates to one because K(z,z) is the squared norm of the kernel vector. In our own proof, evaluation of the holomorphic product fK(·,z) gives f(z)K(z,z). This reproducing identity explains why the kernel-weighted average returns the center value. This replaces the operator definition, which pairs multiplication by f with the normalized evaluation vector.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Bergman projection integrates square integrable inputs

**Remember:** Project first or pair with the kernel first.

*True by definition. Confidence: medium.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman projection P is the orthogonal projection from the space of square-integrable functions onto the square-integrable holomorphic functions. The kernel vector K(·,z) represents evaluation at z by an inner product.

**Problem.** On a bounded domain, Pf(z) equals the inner product of f with K(·,z) for every f in L².

**How the definition helps.** The discarded part f − Pf is orthogonal to the kernel vector. Our own proof therefore recovers the integral formula from the orthogonal projection. Local mean-value estimates give bounded evaluations and show that the holomorphic subspace is closed.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Square integrability removes hyperplane poles

**Remember:** A simple pole already has infinite squared area integral.

*Rules out counterexamples.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space consists of holomorphic functions whose squared absolute value has finite volume integral.

**Problem.** On a polydisc with a coordinate hyperplane removed, every Bergman function extends across the hyperplane with the same norm.

**How the definition helps.** Square integrability excludes every negative Laurent power in the missing coordinate. In our own proof, circle orthogonality makes each negative power contribute an infinite radial integral wherever its coefficient is nonzero. The coefficients depend holomorphically on the other coordinates, so a nonzero coefficient would give divergence on a set of positive volume. The hyperplane has zero volume, so extension preserves the norm.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Torus characters separate Laurent monomials

**Remember:** Different Laurent powers respond differently to some coordinate rotation.

*Makes the theorem clean to state or prove.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** A Reinhardt domain admits independent rotations of its complex coordinates. Its admissible Laurent monomials are products of integer powers of the coordinates that are holomorphic and square-integrable on the domain.

**Problem.** On a bounded Reinhardt domain the admissible Laurent monomials form an orthogonal basis of its square-integrable holomorphic functions.

**How the definition helps.** Admissibility selects exactly the powers that can appear, including negative powers where the domain allows them. In our own explanation, averaging over rotations extracts each Laurent coefficient. Distinct powers are orthogonal by rotation invariance, and uniqueness of Laurent expansions proves completeness.

**Paper or page:** [Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3). It says: “forms a Banach-space basis of Aᵖ(Ω,λ).”

**Sources:** none listed. No primary source with a working link was found.

### The polydisk maximum needs only its torus

**Remember:** The torus suffices, and each of its points can peak.

*Makes the theorem clean to state or prove.* MSC 32A40 (Boundary behavior of holomorphic functions of several complex variables), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** The unit polydisk is a product of open unit disks. Consider the functions holomorphic inside and continuous on its closure. Their Shilov boundary is the smallest closed subset of the closure where each function attains its maximum modulus.

**Problem.** The Shilov boundary of a unit polydisk is the product of its boundary circles. It excludes the boundary faces on which only some coordinates have modulus one.

**How the definition helps.** The smallest common maximum set expresses exactly which boundary points the whole family needs (our own). Applying the disk maximum principle successively in each coordinate shows that the product of boundary circles suffices (our own). For each chosen circle point a, the factor (1 + āz)/2 has modulus one only at a on the closed disk (our own). Multiplying these factors gives a function attaining its maximum modulus only at the chosen torus point (our own).

**Wikipedia:** [Shilov boundary](https://en.wikipedia.org/wiki/Shilov_boundary). It says: “the Shilov boundary of a polydisc 𝔻₁×𝔻₂×⋯×𝔻ₖ is the product of the boundaries ∂𝔻₁×∂𝔻₂×⋯×∂𝔻ₖ”

**Sources:** none listed. No primary source with a working link was found.

### Discriminants mark branch loci

**Remember:** A repeated root is precisely where the discriminant vanishes.

*True by definition. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32H35. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The discriminant of a monic polynomial is the product of squared differences over all pairs of roots. A Weierstrass polynomial is monic in one variable, with holomorphic lower coefficients that vanish at the base origin.

**Problem.** Near the origin, a square-free Weierstrass polynomial defines separate holomorphic sheets above exactly those base points where its discriminant is nonzero. Each sheet projects isomorphically onto a neighborhood of the base point.

**How the definition helps.** The root product detects collisions directly and agrees with the usual determinant formula by the resultant identity (our own comparison). Symmetry makes the product a holomorphic function of the coefficients. The implicit function theorem separates simple roots, and a repeated root gives a fiber with multiplicity.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “The discriminant of a polynomial over a field is zero if and only if the polynomial has a multiple root in some field extension.”

**Sources:** none listed. No primary source with a working link was found.

### Local algebras determine germ maps

**Remember:** The images of the coordinates determine the whole germ map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The local algebra of a complex analytic germ consists of convergent power series modulo the equations defining the space near the point. A local complex algebra map preserves complex scalars and sends functions vanishing at one point to functions vanishing at the other.

**Problem.** Each local complex algebra map between the local algebras of two complex analytic germs comes from a unique holomorphic map in the reverse direction.

**How the definition helps.** The local algebra records the coordinates and their equations, so the images of the coordinates specify the candidate map (our own argument). Polynomial substitution agrees with the given algebra map after truncation at every degree. Krull’s intersection theorem says that agreement to all orders implies equality, even when the local algebra contains nilpotents.

**Wikipedia:** [Complex analytic variety](https://en.wikipedia.org/wiki/Complex_analytic_variety). It says: “Morphisms of complex analytic varieties are defined to be morphisms of the underlying locally ringed spaces”

**Sources:** none listed. No primary source with a working link was found.

### Thick intersections govern gluing

**Remember:** Tangency forces agreement of derivatives as well as values.

*Rules out counterexamples.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32C15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For closed analytic subspaces with ideals I and J, their union has ideal I ∩ J and their intersection has ideal I + J. Functions on either space are holomorphic functions modulo its ideal.

**Problem.** Holomorphic germs on the union correspond to pairs of germs that agree modulo the ideal of the intersection.

**How the definition helps.** The sum I + J records exactly when two local representatives have a common lift (our own argument). The curves y = 0 and y = x² intersect along the ideal (y, x²). The functions 0 and x agree at the origin but differ modulo that ideal.

**Wikipedia:** [Complex analytic variety](https://en.wikipedia.org/wiki/Complex_analytic_variety). It says: “Define a sheaf of rings on X by letting 𝒪ₓ be the restriction to X of 𝒪ᵤ/(f₁, …, fₖ)”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass norms eliminate coordinates

**Remember:** A zero of g on a fiber makes its multiplication matrix singular.

*True by definition. Confidence: medium.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Weierstrass polynomial P is monic in w, with holomorphic lower coefficients vanishing at the base origin. Modulo P, multiplication by a holomorphic germ g is a linear map over functions in the remaining coordinates. Its determinant is the norm of g.

**Problem.** Near the origin, the projection of the common zero set of P and g onto the remaining coordinates is the zero set of the norm.

**How the definition helps.** Defining the norm by a determinant replaces a search through all roots with a single equation on the base (our own argument). Weierstrass division supplies a basis consisting of powers of w below the degree of P. At each base point, multiplication is invertible exactly when g vanishes at no root, even when roots repeat.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “where r = r(z,w) is a polynomial of degree &lt; k.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass polynomials give free quotients

**Remember:** Divide by the monic polynomial and keep the short remainder.

*True by definition.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A germ records a function near one point, identifying functions that agree on a smaller neighborhood. A Weierstrass polynomial is monic in one variable w. Its lower coefficients are holomorphic germs in the other variables and vanish at the origin.

**Problem.** Let f be a holomorphic germ whose restriction to the w-axis vanishes to finite order d &gt; 0 at the origin. Modulo multiples of f, the powers of w of degrees zero through d − 1 form a basis over germs in the other variables.

**How the definition helps.** In our own proof, representing the equation by a Weierstrass polynomial reduces the basis question to reading off remainder coefficients. Preparation replaces the original holomorphic equation by this polynomial without changing its ideal. Weierstrass division gives existence and uniqueness of the remainder of degree below d. Its coefficients are therefore the unique coordinates in the proposed basis.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “where r = r(z,w) is a polynomial of degree &lt; k.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass preparation makes projections finite

**Remember:** A monic equation keeps a fixed number of roots above the base.

*Makes the theorem clean to state or prove.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A holomorphic germ describes a function near the origin. It is regular of order d in w when its restriction to the w-axis has a zero of order d. A Weierstrass polynomial is monic in w, with holomorphic lower coefficients that vanish at the base origin.

**Problem.** Near the origin, the zeros of a germ regular of positive order d in w project finitely onto the other coordinates. Each fiber contains d roots counted with multiplicity.

**How the definition helps.** The monic polynomial gives one equation of fixed degree for all nearby fibers (our own explanation). Weierstrass preparation writes the germ as that polynomial times a function without zeros. After shrinking the base, all roots stay inside a smaller disk, so the projection has compact inverse images of compact sets.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “Then there is a neighborhood of origin such that f is uniquely representable in the form f = P · h where P is a Weierstrass polynomial of degree d of w and h(0) ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded semianalytic sets project subanalytically

**Remember:** Project a bounded analytic description without losing its local form.

*Rules out counterexamples.* MSC 32B20 (Semi-analytic sets, subanalytic sets, and generalizations), 32B25. arXiv math.AG. Level 3: graduate.

**Definition.** A semianalytic set is locally described by finite combinations of real analytic equations and inequalities. A subanalytic set is locally the projection of such a set with compact closure in the ambient space.

**Problem.** The linear projection of a relatively compact semianalytic subset of Euclidean space is subanalytic.

**How the definition helps.** Compact closure excludes the escaping coordinate in our own example. Project the set xz = 1, y = sin z onto the xy-plane. Its intersection with the x-axis contains isolated points accumulating at zero. Intersections with a line preserve subanalyticity, and subanalytic subsets of a line are locally finite unions of points and intervals.

**Wikipedia:** [Subanalytic set](https://en.wikipedia.org/wiki/Subanalytic_set). It says: “projections of semianalytic sets are in general not semianalytic.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Semianalytic and subanalytic sets (1988)](https://doi.org/10.1007/bf02699126)

### Global subanalyticity gives finite components

**Remember:** Test at infinity too, or disconnected pieces can escape there.

*Rules out counterexamples.* MSC 32B20 (Semi-analytic sets, subanalytic sets, and generalizations), 32B25. arXiv math.AG. Level 3: graduate.

**Definition.** A subanalytic set is locally a projection of a relatively compact set described by finite combinations of real analytic equations and inequalities. Here relatively compact means that the closure is compact. Call a set globally subanalytic if applying x ↦ x/√(1 + x²) in each coordinate gives a subanalytic set throughout the ambient Euclidean space.

**Problem.** Every globally subanalytic set has finitely many connected components.

**How the definition helps.** The definition tests the boundary of the cube, so compactness turns local finiteness into finiteness in our own proof. Each point of the closed cube has a neighborhood meeting only finitely many components, by local finiteness for subanalytic sets. Finitely many such neighborhoods cover the cube. The integers illustrate the extra condition. They are locally subanalytic on the line, but their compressed images accumulate at both endpoints in isolated points.

**Paper or page:** [On subanalytic geometry](https://arxiv.org/abs/2507.23622v1). It says: “Globally subanalytic sets have only finitely many connected components.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced spaces cannot detect nilpotents

**Remember:** A map from a reduced space kills every nilpotent function.

*True by definition. Confidence: medium.* MSC 32C15 (Complex spaces), 32B05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A nilpotent local function has a positive power equal to zero. A reduced analytic space has no nonzero nilpotent local functions. The reduction keeps the points and divides each local ring by its nilpotents. In local equations this replaces the defining ideal by its radical, which contains all functions having a power in the ideal.

**Problem.** Every holomorphic map from a reduced space to a complex analytic space factors uniquely through the target’s reduction.

**How the definition helps.** In our own proof, pulling back a nilpotent to a reduced source gives zero, so pullback factors uniquely through the quotient rings. These local factorizations agree on overlaps. The analytic construction shows that taking radicals gives another analytic space with the same points.

**Wikipedia:** [Analytic space](https://en.wikipedia.org/wiki/Analytic_space). It says: “An analytic space is reduced if every local model for the space is defined by a radical sheaf of ideals.”

**Sources:** none listed. No primary source with a working link was found.

### Universal analytification preserves fiber products

**Remember:** Test maps into a fiber product are pairs that agree.

*True by definition.* MSC 32C15 (Complex spaces), 14A15. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex scheme of finite type is locally described by finitely many polynomial coordinates and equations, with its rings of local functions. Its analytification uses holomorphic local functions on the complex points. Equivalently, every map from an analytic space to the scheme that respects complex scalars and local rings factors uniquely through the analytification.

**Problem.** Analytification takes a fiber product of complex schemes of finite type to the analytic fiber product. A fiber product consists of pairs that have the same image in the base.

**How the definition helps.** In our own proof, a map into either candidate for the fiber product specifies two analytic maps agreeing over the base. The universal property identifies these pairs for every analytic test space, so the candidates are canonically isomorphic. The comparison with the concrete construction on complex points carries the analytic work.

**nLab:** [analytification](https://ncatlab.org/nlab/show/analytification). It says: “For any complex analytic space Z, the morphism of locally ringed spaces Xᵃⁿ → X induces a bijection”

**Sources:** none listed. No primary source with a working link was found.

### Normality lets bounded functions extend

**Remember:** The missing parameter on a cusp explains why normality matters.

*True by definition. Confidence: medium.* MSC 32C20 (Normal analytic spaces), 32D20. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Call a function weakly holomorphic if it is holomorphic on the smooth part and locally bounded near the remaining points. A reduced complex space has no nonzero local function whose power vanishes. The extension definition calls such a space normal when every weakly holomorphic function extends locally across the remaining points.

**Problem.** On a normal complex space, weakly holomorphic functions extend uniquely as holomorphic functions.

**How the definition helps.** In our own proof, normality supplies local extensions, which agree on overlaps because the smooth part is dense and the space is reduced. The analytic normality criterion identifies this test with integral closure of each local ring. That means the ring is a domain containing every fraction that solves a monic polynomial equation over it. On the cusp y² = x³, the bounded parameter y/x cannot extend. Every local holomorphic function there has a power series in t² and t³, with no linear term.

**Wikipedia:** [Analytic space](https://en.wikipedia.org/wiki/Analytic_space). It says: “An analytic space is normal if every stalk of the structure sheaf is a normal ring (meaning an integrally closed integral domain).”

**Paper or page:** [Grauert-Riemenschneider multiplier ideal sheaves and the (optimal) Briançon-Skoda number](https://arxiv.org/abs/2104.14047v1). It says: “the sheaf of weakly holomorphic functions on X.”

**Sources:** none listed. No primary source with a working link was found.

### Bott–Chern classes map to both theories

**Remember:** Closed in both directions means closed for their sum.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex manifold, the exterior derivative splits into two operators, ∂ and ∂̄. Bott–Chern cohomology uses forms of fixed type killed by both operators, modulo forms of the shape ∂∂̄β. Type counts ordinary and conjugate differentials separately.

**Problem.** Every Bott–Chern class determines a de Rham class, computed with the full derivative, and a Dolbeault class, computed with ∂̄.

**How the definition helps.** The two closure conditions make the same form represent a class for either ∂̄ or the full derivative. In our own argument, ∂∂̄β equals the full derivative of ∂̄β and also equals −∂̄∂β. Thus changing representatives adds a derivative in both target groups. The stronger claim that the first map is injective on compact Kähler manifolds uses the ∂∂̄ lemma.

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “The theory admits canonical morphisms to de Rham and Dolbeault cohomology and to the related Aeppli cohomology.”

**Sources:** none listed. No primary source with a working link was found.

### Cartan generators globalize local equations

**Remember:** Generate the local ideal at every point using global functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32E10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The vanishing ideal sheaf of a closed analytic subset consists of local holomorphic functions that vanish on that subset. Its local generators and relations are finite, a property called coherence.

**Problem.** Every closed analytic subset of a Stein manifold is the common zero set of a family of global holomorphic functions. A Stein manifold admits a proper holomorphic embedding into complex affine space.

**How the definition helps.** Outside the subset, the vanishing ideal contains 1, so any family generating this ideal must detect every outside point (our own argument). Cartan’s theorem A supplies global functions that generate the ideal locally. At least one must be nonzero at each outside point.

**Paper or page:** [Deformation of nef adjoint canonical line bundles](https://arxiv.org/abs/2510.23967v1). It says: “Then ℱ is globally generated by its sections”

**Sources:** none listed. No primary source with a working link was found.

### Coherent ideals algebraize thickened subspaces

**Remember:** Algebraize the ideal, and the quotient keeps the multiplicities.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32J25, 14F06. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A closed analytic subspace is specified by an ideal sheaf, a collection of local holomorphic equations compatible with restriction. Its functions are local holomorphic functions modulo that ideal. Coherence means the equations and their relations locally admit finite lists of generators.

**Problem.** Every closed analytic subspace of a complex projective variety comes from a unique closed algebraic subscheme. This includes subspaces with nonzero functions whose powers vanish.

**How the definition helps.** The ideal remembers which functions vanish in the quotient, even when two ideals give the same set of points (our own explanation). Serre’s comparison recovers the algebraic ideal together with its inclusion into the functions on the variety. Exactness preserves the quotient, which recovers the subspace.

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “For every coherent analytic sheaf 𝒢 on Xₐₙ, there exists a coherent algebraic sheaf ℱ on X such that ℱₐₙ ≃ 𝒢.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)

### Conjugation pairs Bott–Chern groups

**Remember:** Conjugation swaps the operators but keeps both conditions.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex manifold, write ∂ and ∂̄ for the two parts of the exterior derivative. A form of type (p, q) has p ordinary and q conjugate differentials. Bott–Chern cohomology takes forms of each type killed by both operators, modulo forms of the shape ∂∂̄β.

**Problem.** Complex conjugation gives an antilinear isomorphism between Bott–Chern groups of types (p, q) and (q, p).

**How the definition helps.** Requiring both derivatives to vanish makes the condition survive complex conjugation, which interchanges the derivatives. In our own argument, reversing their order changes the sign of their composite and preserves its image. Conjugating twice gives the identity, and conjugation acts on scalars by complex conjugation. Dolbeault cohomology uses only ∂̄, so this argument does not give the same symmetry there. On compact Kähler manifolds the corresponding Dolbeault symmetry follows from Hodge theory.

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “Complex conjugation exchanges forms of bidegree (p,q) with forms of bidegree (q,p).”

**Sources:** none listed. No primary source with a working link was found.

### Dolbeault products are wedge products

**Remember:** Wedge two closed forms to multiply their classes.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32W05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A smooth form of type (p,q) has p holomorphic and q antiholomorphic coordinate differentials in each term. The operator ∂̄ differentiates in the antiholomorphic directions. Dolbeault cohomology takes forms killed by ∂̄ modulo forms obtained by applying ∂̄.

**Problem.** On a complex manifold, Dolbeault classes also describe the sheaf cohomology of holomorphic forms, which measures how local data fit together. With the usual graded signs, multiplication in this description corresponds to wedging smooth forms.

**How the definition helps.** In our own argument, smooth representatives make multiplication a wedge product because ∂̄ satisfies the graded product rule. The local Dolbeault lemma and smooth partitions of unity justify computing sheaf cohomology this way. Wedge multiplication on smooth forms extends wedge multiplication on holomorphic forms, giving the product comparison.

**nLab:** [Dolbeault theorem](https://ncatlab.org/nlab/show/Dolbeault+theorem). It says: “its Dolbeault cohomology in bi-degree (p,q) is naturally isomorphic to the abelian sheaf cohomology in degree q”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic cohomology receives a Hodge projection

**Remember:** Forget the components with a holomorphic differential.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F25. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** On a complex manifold X, de Rham cohomology Hᵏ(X, ℂ) is computed from all smooth forms with the full derivative d. The cohomology Hᵏ(X, 𝒪) of holomorphic functions is computed from forms of type (0, k) with ∂̄, by the Dolbeault theorem.

**Problem.** Let X be a compact Kähler manifold. Include the constants into the holomorphic functions. The induced map Hᵏ(X, ℂ) → Hᵏ(X, 𝒪) is the Hodge projection onto H⁰˒ᵏ(X).

**How the definition helps.** The two descriptions by differential forms turn the inclusion of constants into a projection in every degree. In our own calculation, discard each term that contains a holomorphic differential dzⱼ. Differentiating a discarded term cannot remove that differential, so the projection respects derivatives. Hodge decomposition identifies the resulting map with projection onto a direct summand.

**Paper or page:** [Generic vanishing theorem for Fujiki class C](https://arxiv.org/abs/2309.09738v1). It says: “coincides with the projection Hᵏ(X, ℂ) → H⁰˒ᵏ(X) given by the Hodge decomposition”

**Sources:** none listed. No primary source with a working link was found.

### Local presentations preserve pullback coherence

**Remember:** Pull back the matrix, and it still has finitely many entries.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** On a complex analytic space, a finitely presented sheaf has finitely many local generators and relations on a neighborhood of each point. A matrix of holomorphic functions records the relations.

**Problem.** Pulling back a coherent analytic sheaf along any holomorphic map of complex analytic spaces gives a coherent sheaf.

**How the definition helps.** The matrix pulls back entry by entry and still presents the new sheaf (our own argument). Tensor products preserve quotients, which justifies pulling back a presentation this way. Oka’s coherence theorem makes finite presentation equivalent here to the usual requirement that relations among any finite list have finitely many local generators.

**nLab:** [coherent sheaf](https://ncatlab.org/nlab/show/coherent+sheaf). It says: “finitely presented if there is an exact sequence of the form 𝒪ᵖ → 𝒪ⁿ → ℰ → 0 with p and n finite.”

**Sources:** none listed. No primary source with a working link was found.

### Properness preserves algebraic global sections

**Remember:** Compactness rules out the affine line and its nonpolynomial entire functions.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex algebraic variety is proper when its structural map stays closed after every algebraic change of base. Here a variety is separated and has finite type over the complex numbers. Equivalently, its complex points form a compact space in their usual topology.

**Problem.** A coherent algebraic sheaf describes local sections using finitely many generators and relations. On a proper complex variety, every global analytic section of the corresponding analytic sheaf comes from exactly one global algebraic section.

**How the definition helps.** Properness excludes the complex line in our own example. Its global algebraic functions are polynomials, but its analytic functions include the exponential. Serre proved the comparison for projective varieties. The general proper case uses the proper comparison theorem.

**nLab:** [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “Typically GAGA-type theorems hold for proper (compact) varieties, but not for non-proper varieties.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique (1956)](https://doi.org/10.5802/aif.59)

### Properness preserves higher sheaf cohomology

**Remember:** Properness lets algebraic and holomorphic sheaf cohomology agree.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A complex algebraic variety is proper when its complex points form a compact space in the usual topology. Analytification allows holomorphic coefficients in the local generators and relations of a coherent algebraic sheaf. A coherent sheaf describes local sections using finitely many generators and finitely generated relations.

**Problem.** On a proper complex algebraic variety, analytification preserves every positive-degree cohomology group of a coherent algebraic sheaf.

**How the definition helps.** Properness excludes noncompact examples where analytic cohomology detects infinite Laurent tails (our own example). On the punctured affine plane, exp(1/(xy)) represents a class on the overlap of the two coordinate open sets. Infinitely many terms have both exponents negative, which algebraic representatives and corrections from either open set cannot reproduce. Raynaud’s comparison theorem proves agreement in the proper case.

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “For every ℱ ∈ Cohₐₗɡ(X), there is an isomorphism H\*(X, ℱ) ≃ H\*(Xₐₙ, ℱₐₙ).”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)
- [Michèle Raynaud, Géométrie algébrique et géométrie analytique, SGA 1, Exposé XII, §4](https://grothendiecksga.com/read/sga1/fr/XII.html)

### Stein overlaps justify Čech cohomology

**Remember:** Use overlaps with no higher coherent cohomology.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32Q28. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold is a complex manifold that embeds as a closed complex submanifold of some complex coordinate space. Choose an open cover in which every nonempty finite intersection is Stein.

**Problem.** A coherent analytic sheaf describes local modules over holomorphic functions with finite local presentations. For such a sheaf, the cohomology computed from this cover and its overlaps equals the intrinsic sheaf cohomology.

**How the definition helps.** Stein intersections make every higher cohomology group on each overlap vanish for the chosen sheaf. Cartan’s theorem B gives this vanishing. Leray’s theorem then identifies the calculation on the cover, called Čech cohomology, with sheaf cohomology.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the positive-degree abelian sheaf cohomology with values in any analytic coherent sheaf on any Stein manifold vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Stein vanishing lifts sections

**Remember:** The first cohomology of the kernel contains the obstruction to extension.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32E10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Restricting a sheaf to a closed analytic subspace means taking a quotient by the local equations of that subspace times the sheaf. A coherent analytic sheaf has finitely many local generators and finitely generated local relations. A Stein manifold admits a proper holomorphic embedding into complex affine space.

**Problem.** On a Stein manifold, every global section of the restriction of a coherent analytic sheaf to a closed analytic subspace extends to the manifold.

**How the definition helps.** The quotient identifies the kernel whose first cohomology contains the obstruction to lifting a section (our own argument). This kernel is coherent, so Cartan’s theorem B makes its first cohomology vanish.

**nLab:** [Cartan theorem B](https://ncatlab.org/nlab/show/Cartan+theorem+B). It says: “On a Stein manifold Σ and for A an analytic coherent sheaf on Σ then all the positive-degree abelian sheaf cohomology groups of Σ with coefficients in A vanish”

**Sources:** none listed. No primary source with a working link was found.

### Analytic polyhedra supply boundary poles

**Remember:** At a tight inequality, a reciprocal supplies a pole.

*Rules out counterexamples.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** An analytic polyhedron in an open set D consists of the points satisfying finitely many inequalities \|f\| &lt; 1 for holomorphic functions on D. Its closure must be compact and contained in D.

**Problem.** Each connected component of an analytic polyhedron is a domain of holomorphy.

**How the definition helps.** An equality \|f(p)\| = 1 at each boundary point p gives a holomorphic function 1/(f − f(p)) on the component. It becomes unbounded on approach to p. Our own proof uses these reciprocals to obstruct extension across each boundary patch.

**Wikipedia:** [Analytic polyhedron](https://en.wikipedia.org/wiki/Analytic_polyhedron). It says: “Every analytic polyhedron is a domain of holomorphy and it is thus pseudo-convex.”

**Sources:** none listed. No primary source with a working link was found.

### Boundary distance handles increasing unions

**Remember:** As domains grow, the negative log of distance falls.

*True by definition.* MSC 32D05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A proper domain passes the boundary distance test when the negative logarithm of distance to its complement is plurisubharmonic. This means its restriction to each complex line satisfies the subharmonic mean inequality.

**Problem.** An increasing union of domains of holomorphy in ℂⁿ is a domain of holomorphy.

**How the definition helps.** Boundary distances increase to the distance for the union because each closed ball inside the union eventually lies in one domain. Their negative logarithms decrease, and a finite decreasing limit preserves the mean inequality locally. Our own proof uses the equivalence between the distance test and holomorphic nonextension. The whole space is already a domain of holomorphy.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “is an ascending sequence of domains of holomorphy, then their union”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Common extension excludes compact holes

**Remember:** A hole filled by every function gives a common extension patch.

*Rules out counterexamples.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain of holomorphy has no common extension patch. Such a patch is a connected open set crossing the boundary where every holomorphic function extends from the same nonempty open part of the domain.

**Problem.** In ℂⁿ with n ≥ 2, deleting a nonempty compact subset from a domain never leaves a domain of holomorphy if the remainder is connected.

**How the definition helps.** A filled hole supplies exactly the common extension patch that the definition forbids. Hartogs’s extension theorem does the analytic work. Every holomorphic function on the remainder extends to the original domain.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “any function holomorphic on U ∖ K can be analytically continued to U”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic convexity preserves products

**Remember:** Test each coordinate with functions from its own factor.

*True by definition.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** The holomorphic hull of K consists of points where \|f\| ≤ the maximum of \|f\| on K for every holomorphic function f on the domain.

**Problem.** The product of two domains of holomorphy is a domain of holomorphy.

**How the definition helps.** Testing each coordinate separately puts the hull of a compact set inside the product of the two projected sets’ hulls. Both hulls are compact, and the product hull is closed. Our own proof uses the Cartan–Thullen theorem, which identifies domains of holomorphy with domains where compact sets have compact holomorphic hulls.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “Ω₁ × Ω₂ is a domain of holomorphy.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Holomorphic hulls preserve boundary distance

**Remember:** Bounds on all holomorphic functions also bound their derivatives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** The holomorphic hull of a compact set K collects the points where every holomorphic function on the domain satisfies its maximum modulus bound on K.

**Problem.** In a proper domain of holomorphy, a nonempty compact set and its holomorphic hull have equal distances to the boundary in the maximum norm.

**How the definition helps.** The hull tests every Taylor coefficient because each derivative of a holomorphic function is again holomorphic. Cauchy’s estimates on equal polydisks around K therefore give each hull point the same guaranteed Taylor radius. Our own argument uses holomorphic nonextension to rule out a common Taylor radius larger than a hull point’s boundary distance.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “The equivalence of 1, 2, 3 is the Cartan–Thullen theorem.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Logarithmic nonconvexity forces holomorphic extension

**Remember:** A Taylor series fills every gap between allowed log radii.

*Rules out counterexamples.* MSC 32D05 (Domains of holomorphy), 32A05. arXiv math.CV. Level 3: graduate.

**Definition.** A complete Reinhardt domain contains every point obtained by decreasing or preserving each coordinate modulus of any point in the domain. Its logarithmic image records the logarithms of all coordinate moduli at points with no zero coordinate.

**Problem.** A complete Reinhardt domain with a nonconvex logarithmic image cannot be a domain of holomorphy.

**How the definition helps.** A gap in the logarithmic image leaves room for every holomorphic function to extend by its Taylor series. Completeness gives one series about zero throughout the domain by Cauchy’s formula on products of circles. In our own proof, Hölder’s inequality extends absolute convergence to the convex hull of the open logarithmic image.

**Wikipedia:** [Function of several complex variables](https://en.wikipedia.org/wiki/Function_of_several_complex_variables). It says: “is a logarithmically convex Reinhardt domain with centre a = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Nonextendable functions are generic

**Remember:** One obstructing function per patch is enough for a generic global obstruction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32D05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A domain of holomorphy admits no common extension across a boundary ball from the same nonempty open subset of its overlap with the domain.

**Problem.** On a domain of holomorphy, functions with no local holomorphic extension form a dense countable intersection of open sets for uniform convergence on compact subsets.

**How the definition helps.** Each extension patch has an obstructing function, so functions extending on that patch form a proper linear subspace. Our own proof uses countably many pairs of rational balls and integer bounds on extension size. Montel’s compactness theorem makes each bounded extension test closed, and the proper subspace gives it empty interior. Baire’s theorem then gives the stated conclusion.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “There exists a function holomorphic on Ω that cannot be analytically continued beyond Ω.”

**Sources:**

- [Henri Cartan and Peter Thullen, Zur Theorie der Singularitäten der Funktionen mehrerer komplexen Veränderlichen, Mathematische Annalen 106 (1932), 617–647.](https://doi.org/10.1007/BF01455905)

### Riemann domains allow multiple sheets

**Remember:** Keep the continuation sheet as well as the coordinates.

*Makes the theorem clean to state or prove.* MSC 32D10 (Envelopes of holomorphy), 32D26. arXiv math.CV. Level 3: graduate.

**Definition.** A Riemann domain over ℂⁿ is a connected complex manifold with a projection that is locally a holomorphic coordinate map. Unlike a subset of ℂⁿ, it can have distinct points with the same projected coordinates.

**Problem.** Every domain in ℂⁿ has an envelope of holomorphy, the largest common continuation space for all its holomorphic functions. Its projection to ℂⁿ can take different points to the same coordinates.

**How the definition helps.** Distinct sheets let continuations take different values at the same coordinates (our own). Hazra and Porten construct a domain whose envelope has several sheets above a circle. The existence theorem must still construct the common continuation space and show that distinct points have disjoint neighborhoods (our own).

**Paper or page:** [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1). It says: “the envelope of holomorphy of D=X+iBᵣ universally covers a circle T⊂ℝ²∖X.”

**Sources:**

- [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1)

### Tube envelopes fill convex hulls

**Remember:** Fill the real convex hull and leave the imaginary directions free.

*Rules out counterexamples.* MSC 32D10 (Envelopes of holomorphy), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** A tube domain consists of the points whose real parts lie in a given connected open set. Its imaginary parts range over all of ℝⁿ. A truncated tube allows only a limited set of imaginary parts.

**Problem.** Every holomorphic function on a tube domain extends to the tube over the convex hull of its real base. This larger tube is its envelope of holomorphy, the largest space of common continuation.

**How the definition helps.** Allowing every imaginary displacement excludes truncated tubes whose continuations need several sheets over the same coordinates (our own). Bochner proves extension to the convex hull for a full tube. Convex domains admit holomorphic functions singular at each chosen boundary point, so no larger common continuation is possible (our own). Hazra and Porten give a truncated tube whose envelope has several sheets above a circle.

**Wikipedia:** [Bochner's tube theorem](https://en.wikipedia.org/wiki/Bochner%27s_tube_theorem). It says: “every function holomorphic on a tube domain in ℂⁿ can be extended to the convex hull of this domain.”

**Paper or page:** [Truncated tube domains with multi-sheeted envelope](https://arxiv.org/abs/2306.00441v1). It says: “the envelope of holomorphy of D=X+iBᵣ universally covers a circle T⊂ℝ²∖X.”

**Sources:**

- [Bochner, Analytic and Meromorphic Continuation by Means of Green’s Formula (1943)](https://doi.org/10.2307/1969103)

### Pseudoconvexity excludes shell extension failures

**Remember:** A square-integrable slice need not extend across a shell.

*Rules out counterexamples.* MSC 32D15 (Continuation of analytic objects in several complex variables), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A domain is pseudoconvex if it admits a continuous plurisubharmonic exhaustion. An exhaustion has relatively compact sublevel sets, and plurisubharmonic means subharmonic on complex lines.

**Problem.** In a bounded pseudoconvex domain in ℂⁿ, every weighted square-integrable holomorphic function on a hyperplane slice extends with finite weighted norm. The weight is exp(−φ) for a plurisubharmonic function φ.

**How the definition helps.** The exhaustion supplies domains for the weighted differential estimates in the Ohsawa–Takegoshi extension theorem. Our own counterexample slices the shell 1 &lt; \|z\| &lt; 2 in ℂ² by a coordinate line. The reciprocal coordinate has finite squared integral on the annulus. Hartogs extension would fill the shell and give a holomorphic function on a disc agreeing with that reciprocal.

**Paper or page:** [A Hilbert Bundles Description of Complex Brunn-Minkowski Theory](https://arxiv.org/abs/2305.07476v1). It says: “Let Ω be a pseudoconvex domain in ℂⁿ”

**Sources:**

- [T. Ohsawa and K. Takegoshi, On the extension of L² holomorphic functions (1987)](https://doi.org/10.1007/BF01166457)

### Compact support simplifies Hartogs extension

**Remember:** Subtract a compactly supported correction and keep the exterior values.

*Makes the theorem clean to state or prove.* MSC 32D20 (Removable singularities in several complex variables), 32W05. arXiv math.CV. Level 3: graduate.

**Definition.** The operator ∂̄ differentiates in conjugate complex directions. Its kernel on functions consists of holomorphic functions. The first compactly supported Dolbeault group takes compactly supported forms with one conjugate differential and ∂̄ equal to zero. It identifies two such forms when their difference equals ∂̄ of a compactly supported smooth function.

**Problem.** Let a compact set lie inside a domain in ℂⁿ and have connected complement there. If n≥2, every holomorphic function on that complement extends to the whole domain.

**How the definition helps.** Compactly supported cohomology states exactly when a ∂̄-error has a correction that vanishes far away (our own). Multiply the given holomorphic function by a cutoff that vanishes near the compact set and equals one outside a compact neighborhood of it (our own). For n ≥ 2 the first compactly supported Dolbeault group of ℂⁿ vanishes, so the ∂̄-error has a compactly supported correction (our own). The correction is holomorphic and zero on the unbounded exterior part, so subtracting it gives the extension by the identity theorem (our own).

**Wikipedia:** [Hartogs's extension theorem](https://en.wikipedia.org/wiki/Hartogs%27s_extension_theorem). It says: “there exists a smooth and compactly supported function η on ℂⁿ with ∂̄η = ω.”

**Sources:**

- [Ehrenpreis, A new proof and an extension of Hartog’s theorem (1961)](https://doi.org/10.1090/s0002-9904-1961-10661-7)

### Stein acyclicity survives finite maps

**Remember:** Push down the sheaf to test Steinness upstairs.

*True by definition. Confidence: medium.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 3: graduate.

**Definition.** One can define a Stein space by the vanishing of positive-degree cohomology for every coherent analytic sheaf. Such a sheaf describes local holomorphic sections with finitely many local generators and locally finitely generated relations among any finite list of sections.

**Problem.** The source of a finite holomorphic map to a Stein space is Stein. Here finite means proper with finite fibers.

**How the definition helps.** The vanishing test moves downstairs because a finite map preserves the cohomology of a sheaf under direct image (our own). The direct image records sections over inverse images of open sets, and the finite mapping theorem preserves coherence (our own). Cartan’s criterion identifies this test with the geometric definition using holomorphic functions (our own).

**nLab:** [Cartan theorem B](https://ncatlab.org/nlab/show/Cartan+theorem+B). It says: “all the positive-degree abelian sheaf cohomology groups of Σ with coefficients in A vanish”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)

### Tangencies require more than values

**Remember:** Match both functions on the intersection with its full analytic structure.

*Rules out counterexamples.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 3: graduate.

**Definition.** A closed analytic subspace has an ideal of local holomorphic equations. If two subspaces have ideals I and J, their analytic intersection has ideal I + J. Functions agree on this intersection when their local representatives differ by an element of I + J.

**Problem.** Two holomorphic functions on closed analytic subspaces of a Stein space extend to one global function exactly when their restrictions to the analytic intersection agree.

**How the definition helps.** Agreement modulo I + J is exactly the condition for two functions to give one function on the union (our own). Cartan’s Theorem B extends that function from the closed union to the whole Stein space (our own). On y = 0 and y = x², the functions 0 and x agree at the origin (our own). They differ on the analytic intersection because x is nonzero modulo (y, x²) (our own).

**Paper or page:** [Stein spaces and Stein algebras](https://arxiv.org/abs/2410.05521v1). It says: “Let S be a complex space. Let S₁ and S₂ be closed complex subspaces of S. Set T:=S₁∩S₂. The following diagram of sheaves on S is exact:”

**Sources:**

- [Olivier Benoist, Stein spaces and Stein algebras (2026)](https://doi.org/10.4064/ba260107-1-3)

### Polynomial convexity excludes circle obstructions

**Remember:** Polynomials cannot see the hole inside a circle.

*Rules out counterexamples.* MSC 32E20 (Polynomial convexity, rational convexity, meromorphic convexity in several complex variables), 32E30. arXiv math.CV. Level 3: graduate.

**Definition.** A compact set is polynomially convex if each outside point can be separated by a polynomial. Separation means the absolute value at that point exceeds the maximum on the compact set.

**Problem.** Every function holomorphic near a polynomially convex compact set in ℂⁿ can be approximated there uniformly by polynomials.

**How the definition helps.** Polynomial separation excludes the circle obstruction because the maximum principle bounds every polynomial inside the circle by its boundary maximum (our own). On the unit circle in a coordinate line, the reciprocal coordinate is holomorphic nearby (our own). Its contour integral is 2πi, whereas every polynomial integrates to zero there (our own). Uniform convergence would preserve these integrals (our own). The Oka–Weil theorem proves that polynomial separation suffices for approximation (our own).

**Wikipedia:** [Oka–Weil theorem](https://en.wikipedia.org/wiki/Oka%E2%80%93Weil_theorem). It says: “every holomorphic function in an open neighborhood of K can be approximated uniformly on K”

**Sources:** none listed. No primary source with a working link was found.

### Retractions preserve extension norms

**Remember:** Compose with the retraction to extend without taking new values.

*True by definition.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32H02. arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic retraction maps a domain holomorphically onto a subset and fixes each point there. Its image is a retract. Relative polynomial convexity means each outside point in the domain admits a polynomial whose modulus there exceeds its supremum on the subset.

**Problem.** Let V be a nonempty relatively polynomially convex subset of the bidisk, the product of two unit disks. Every polynomial restricted to V extends holomorphically to the bidisk with unchanged supremum norm exactly when V is a holomorphic retract.

**How the definition helps.** The retraction gives one extension formula for every bounded holomorphic function on V (our own). Composition with the retraction preserves every value and introduces no others (our own). Agler and McCarthy prove the difficult converse, which constructs a retraction from the existence of polynomial extensions.

**Paper or page:** [Norm Preserving Extensions of Holomorphic Functions Defined on Varieties in ℂⁿ](https://arxiv.org/abs/2204.08517v1). It says: “Let V be a nonempty relatively polynomially convex subset of 𝔻². Every polynomial has a norm preserving extension to 𝔻² if and only if V is a holomorphic retract of 𝔻².”

**Sources:**

- [Agler and McCarthy, Norm preserving extensions of holomorphic functions from subvarieties of the bidisk (2003)](https://doi.org/10.4007/annals.2003.157.289)

### Runge approximation composes

**Remember:** Approximate in the middle space, then in the largest one.

*True by definition.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein open subset U of a Stein space X is Runge in X if global holomorphic functions on X approximate those on U. Approximation means uniform approximation on each compact subset of U.

**Problem.** If V is Runge in U and U is Runge in X, then V is Runge in X.

**How the definition helps.** Two successive approximations on the same compact set give one approximation, since their errors add (our own). The equivalent geometric test compares the points where every holomorphic function obeys its maximum bound on that compact set (our own). Oka–Weil approximation establishes the equivalence (our own).

**Paper or page:** [Étale cohomology of algebraic varieties over Stein compacta](https://arxiv.org/abs/2305.06054v3). It says: “The image of the restriction map 𝒪(S) → 𝒪(Ω) is dense, and Ω is Stein.”

**Sources:**

- [Olivier Benoist, Étale cohomology of algebraic varieties over Stein compacta (2025)](https://doi.org/10.1007/s00222-025-01323-2)

### Runge chains stay Stein

**Remember:** Approximate along the chain so the earlier hulls cannot grow.

*Makes the theorem clean to state or prove.* MSC 32E30 (Holomorphic, polynomial and rational approximation, and interpolation in several complex variables; Runge pairs), 32Q28, 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein open subset U of a Stein space X is Runge in X if global holomorphic functions on X approximate those on U. Approximation means uniform approximation on each compact subset of U.

**Problem.** An increasing countable union of Stein manifolds is Stein if each open inclusion is Runge.

**How the definition helps.** The Runge condition lets each stage approximate the previous one on progressively larger compact sets (our own). Choosing summable errors gives a holomorphic limit throughout the union and allows approximation on every earlier stage (our own). Consequently global functions still separate points, and the holomorphic hull of each compact set stays compact (our own). These two properties characterize Stein manifolds (our own).

**Paper or page:** [Étale cohomology of algebraic varieties over Stein compacta](https://arxiv.org/abs/2305.06054v3). It says: “The image of the restriction map 𝒪(S) → 𝒪(Ω) is dense, and Ω is Stein.”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)
- [Olivier Benoist, Étale cohomology of algebraic varieties over Stein compacta (2025)](https://doi.org/10.1007/s00222-025-01323-2)

### Pseudoconvexity turns the domain of holomorphy problem into a local test

**Remember:** Domains of holomorphy are exactly the pseudoconvex domains, a local test.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32E40 (The Levi problem), 32U05, 32U10. arXiv math.CV. Level 3: graduate.

**Definition.** A function is plurisubharmonic if it is upper semicontinuous and subharmonic on every complex line. A domain G in ℂⁿ is pseudoconvex if it has a continuous plurisubharmonic exhaustion, a function whose sublevel sets are relatively compact in G. For a domain with C² boundary, this is the same as the Levi condition on the boundary.

**Problem.** A domain of holomorphy is a domain with a holomorphic function that cannot be continued beyond it. A domain in ℂⁿ is a domain of holomorphy exactly when it is pseudoconvex.

**How the definition helps.** Being a domain of holomorphy is a global property, but pseudoconvexity can be checked near each boundary point. For n ≥ 2, Hartogs's extension theorem shows that some domains are not domains of holomorphy, so a geometric test is needed. The easy direction is that −log of the distance to the boundary is plurisubharmonic on a domain of holomorphy. The hard direction, the Levi problem, was proved by Oka, and later by Hörmander's L² methods (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity), [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy), [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “Pseudoconvex sets are important, as they allow for classification of domains of holomorphy.”

**Sources:**

- [H. Grauert, On Levi's Problem and the Imbedding of Real-Analytic Manifolds, Annals of Mathematics 68 (1958)](https://doi.org/10.2307/1970257)
- [K. Oka, Sur les fonctions analytiques de plusieurs variables VI. Domaines pseudoconvexes, Tohoku Mathematical Journal 49 (1942)](https://www.nara-wu.ac.jp/aic/gdb/nwugdb/oka/ko_ron/f/n06/p001.html)

### Averaging discs gives convex balls

**Remember:** Put both discs on the same parameter before averaging them.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Lempert function is the infimum of hyperbolic distances between two unit-disc parameters that a holomorphic disc sends to the prescribed points. The Kobayashi distance allows chains of such discs and adds their distances.

**Problem.** Every Kobayashi ball in a bounded convex domain is Euclidean convex.

**How the definition helps.** Single discs can be averaged point by point because the domain is convex. In our own proof, two trial discs start at the ball center and reach their endpoints at parameters within the required hyperbolic radius. Rescale and rotate the discs to reach both endpoints at the same parameter, then take any convex combination. Lempert’s theorem identifies the single-disc infimum with the Kobayashi distance on bounded convex domains.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Proposition 2.3.46 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)
- [László Lempert, La métrique de Kobayashi et la représentation des domaines sur la boule, Theorem 1 (1981)](https://www.numdam.org/item/BSMF_1981__109__427_0/)

### Bergman length dominates Carathéodory length

**Remember:** Multiply a disc map by the evaluation kernel to test its derivative.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded domain let K be the Bergman kernel, which represents evaluation by an L² inner product. The Bergman length of v at z is the supremum of \|df(z)v\|/√K(z,z) over unit-norm holomorphic functions vanishing at z.

**Problem.** Bergman length dominates Carathéodory length, the supremum of \|dh(z)v\| over holomorphic maps into the unit disc satisfying h(z)=0.

**How the definition helps.** Each disc map h gives the Bergman test function hK(·,z)/√K(z,z), of norm at most one. Its derivative gives exactly the proposed lower bound in our own proof. Differentiating the kernel and projecting away its evaluation vector identifies the supremum with the usual metric from log K(z,z).

**Paper or page:** [Local Rigidity of the Bergman Metric and of the Kähler Carathéodory Metric](https://arxiv.org/abs/2408.09572v2). It says: “BΩ(z, v) ≥ CΩ(z, v)”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory distance ignores analytic holes

**Remember:** If all tests extend across a hole, the supremum does not change.

*Rules out counterexamples.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Carathéodory pseudodistance is the supremum of the hyperbolic distances measured by holomorphic maps to the unit disc. An analytic subset is locally the common zero set of holomorphic functions.

**Problem.** Removing a proper closed analytic subset from a connected complex manifold leaves the Carathéodory pseudodistance unchanged on the remaining points.

**How the definition helps.** Every disc-valued test on the complement extends across the analytic subset, so removing it preserves the entire set of tests. In our own proof, boundedness gives holomorphic extension by the Riemann extension theorem, and the maximum modulus principle keeps the values inside the disc. For a different kind of hole, removing \|z₁\| ≤ 1 from ℂ² creates the nonconstant test 1/z₁.

**Wikipedia:** [Carathéodory metric](https://en.wikipedia.org/wiki/Carath%C3%A9odory_metric). It says: “d(x, y) = sup { ρ(f(x), f(y)) \| f : B → Δ is holomorphic }.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory distance solves two-point interpolation

**Remember:** The largest distance seen by a disc is the interpolation limit.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Poincaré distance is the hyperbolic distance on the unit disc. The Carathéodory pseudodistance between two domain points is the supremum of their image distances under holomorphic maps into the disc.

**Problem.** A holomorphic map can take two distinct domain points to prescribed disc values exactly when their Poincaré distance is at most the source Carathéodory pseudodistance.

**How the definition helps.** The defining supremum gives the largest possible separation of the prescribed values. In our own proof, disc symmetries send the first value to zero, and Montel’s compactness theorem gives a maximizing map. Multiplying this map by a constant of modulus at most one realizes every smaller separation. Disc symmetries then give the prescribed values.

**Paper or page:** [Pick interpolation and invariant functions](https://arxiv.org/abs/2309.04796). It says: “For two distinct points $z<sub>1</sub>,z<sub>2</sub>\\in \\Omega $ we have \\begin{align}  \\mathscr {D}\_\\Omega (z<sub>1</sub>,z<sub>2</sub>)=\\mathscr {D}<sub>2</sub>=\\mathbb {D}<sup>2</sup> <sub>c<sup>\*\_\\Omega</sup> (z<sub>1</sub>,z<sub>2</sub>)</sub>. \\end{align}”

**Sources:**

- [Pick interpolation and invariant functions, Theorem 2.3](https://arxiv.org/abs/2309.04796)

### Compactness collapses Carathéodory distance

**Remember:** A target disc sees nothing when every holomorphic function is constant.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Carathéodory pseudodistance is the supremum of hyperbolic distances measured by holomorphic maps into the unit disc. The Kobayashi pseudodistance measures the least total hyperbolic length of chains of holomorphic discs joining the points.

**Problem.** On every connected compact complex manifold the Carathéodory pseudodistance vanishes identically, even if the manifold is Kobayashi hyperbolic.

**How the definition helps.** On a compact connected manifold, every test into the disc is constant by the maximum modulus principle. Every distance in the defining supremum is therefore zero. Our own comparison uses a compact Riemann surface of genus at least two, whose disc cover gives a genuine Kobayashi distance.

**Wikipedia:** [Carathéodory metric](https://en.wikipedia.org/wiki/Carath%C3%A9odory_metric). It says: “d(x, y) = sup { ρ(f(x), f(y)) \| f : B → Δ is holomorphic }.”

**Sources:** none listed. No primary source with a working link was found.

### Disk chains lift through coverings

**Remember:** A disk lifts once you pick its starting sheet.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32D26. arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic disk is a holomorphic map from the unit disk. A chain joins successive points using such disks and charges the hyperbolic distance between the chosen preimages on each disk. The Kobayashi pseudodistance is the infimum of the total costs and can vanish between distinct points.

**Problem.** Consider a holomorphic covering between connected complex manifolds, locally a collection of disjoint copies of the base. Fix a lift of the starting point. The distance downstairs equals the infimum of distances from this lift to all lifts of the endpoint.

**How the definition helps.** The chain definition lets each disk lift with its original cost because the unit disk is simply connected (our own). Starting each lift where the previous one ends gives a chain upstairs (our own). Projecting any chain back down also preserves its cost, giving the opposite inequality (our own).

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “A complex space is Kobayashi hyperbolic if and only if its universal covering space is Kobayashi hyperbolic.”

**Sources:** none listed. No primary source with a working link was found.

### Disk chains restore triangle inequalities

**Remember:** Join two chains to get a chain.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic disk maps the unit disk holomorphically into the domain. A link joins two images at a cost equal to the hyperbolic distance between their chosen preimages. The Lempert function takes the infimum for one link. The Kobayashi pseudodistance allows any finite chain and takes the infimum of total costs.

**Problem.** The Kobayashi pseudodistance always satisfies the triangle inequality. The single disk Lempert function can fail it.

**How the definition helps.** Chains can be joined at a common endpoint, which gives the triangle inequality by taking infima (our own). A single disk need not realize the cost of two successive links (our own). Lempert’s theorem shows that the single-disk and chain formulas agree on bounded convex domains (our own).

**Paper or page:** [Quasi Triangle Inequality for the Lempert function](https://arxiv.org/abs/2503.19754v2). It says: “The (unbounded version of the) Lempert function l<sub>D</sub> on a domain D⊂ℂᵈ does not usually satisfy the triangle inequality”

**Sources:**

- [Quasi Triangle Inequality for the Lempert function](https://arxiv.org/abs/2503.19754v2)
- [Lempert, La métrique de Kobayashi et la représentation des domaines sur la boule (1981)](https://doi.org/10.24033/bsmf.1948)

### One exact distance certifies geodesics

**Remember:** One exact pair forces every pair to be exact.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** The Poincaré distance is the hyperbolic distance on the unit disc. The Carathéodory pseudodistance is the supremum of the distances measured by holomorphic maps into that disc. A Carathéodory geodesic is a holomorphic map from the disc that preserves all these distances.

**Problem.** A holomorphic disc in a finite-dimensional complex domain is a Carathéodory complex geodesic if it preserves the distance of one distinct pair.

**How the definition helps.** A maximizing map turns one exact pair into equality in the Schwarz–Pick inequality on the disc. In our own proof, we normalize a maximizing sequence at the first point and use Montel’s compactness theorem to obtain a maximizer. Its composition with the given disc preserves one distance, so Schwarz–Pick makes the composition an isometry. This forces the original disc to preserve every distance.

**Wikipedia:** [Complex geodesic](https://en.wikipedia.org/wiki/Complex_geodesic). It says: “d(f(w), f(z)) = ρ(w, z) for all points w and z in Δ.”

**Sources:** none listed. No primary source with a working link was found.

### Projective evaluation makes Bergman metrics Kähler

**Remember:** Evaluation lines pull back a metric with a closed form.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 3: graduate.

**Definition.** The Bergman space consists of the square-integrable holomorphic functions. Send each point to the line spanned by evaluation there in the dual space. Measure tangent vectors by mapping them into this space of lines with its standard Fubini–Study metric.

**Problem.** On a bounded domain in ℂⁿ this construction gives a Kähler metric, whose associated two-form is closed.

**How the definition helps.** Pullback by a holomorphic map with injective derivative preserves positivity and closedness of the metric form. In our own argument, the constant and coordinate functions show that evaluation detects every tangent direction. The squared norm of evaluation is K(z,z), so the pullback has the usual Bergman potential log K(z,z).

**Wikipedia:** [Bergman metric](https://en.wikipedia.org/wiki/Bergman_metric). It says: “The Bergman metric is in fact a positive definite matrix at each point if G is a bounded domain.”

**Sources:**

- [Kobayashi, Geometry of bounded domains (1959)](https://doi.org/10.1090/s0002-9947-1959-0112162-5)

### Tautness gives extremal discs

**Remember:** A fixed center keeps a sequence of almost extremal discs from escaping.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold is taut if every sequence of holomorphic unit discs has a subsequence that converges uniformly on compact sets or escapes. Escape means the images of each compact source set eventually miss each compact target set. The infinitesimal Kobayashi length of v at x is the infimum of \|a\| over discs satisfying f(0) = x and a f′(0) = v.

**Problem.** On a taut complex manifold every infinitesimal Kobayashi length is realized by a holomorphic disc and a scalar.

**How the definition helps.** The fixed center prevents discs approaching the infimum from escaping, so tautness supplies a limiting disc. In our own explanation, the bounded scalars also have a convergent subsequence. Cauchy’s formula gives convergence of derivatives at zero, so the limiting disc and scalar attain the infimum.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi infinitesimal pseudometric is a Finsler pseudometric”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, proof of Proposition 2.3.34 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### The largest disc-contracting distance makes every holomorphic map distance-decreasing

**Remember:** Define the distance by discs, and holomorphic maps never stretch it.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32Q45. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The Kobayashi pseudometric on a complex space X is the largest pseudometric such that every holomorphic map from the unit disc into X is distance-decreasing. Distance on the disc is measured by the Poincaré metric ρ, the hyperbolic distance of the disc. X is Kobayashi hyperbolic if this pseudometric is a true metric.

**Problem.** Every holomorphic map between complex spaces is distance-decreasing for their Kobayashi pseudometrics. So every holomorphic map from ℂ to a hyperbolic space is constant.

**How the definition helps.** A disc mapped into X and then on to Y is a disc mapped into Y, so the distance-decreasing property follows from the definition. The Kobayashi pseudometric of ℂ is zero, because ℂ contains arbitrarily large discs, which gives the second claim. Schwarz's lemma says that the Kobayashi metric on the unit disc is the Poincaré metric. The work moves to showing that particular spaces, such as ℂ minus two points, are hyperbolic.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X such that dₓ(f(x),f(y)) ≤ ρ(x,y), for all holomorphic maps f from the unit disc D to X”

**Sources:**

- [S. Kobayashi, Invariant distances on complex manifolds and holomorphic mappings, Journal of the Mathematical Society of Japan 19 (1967)](https://doi.org/10.2969/jmsj/01940460)

### Weakly vanishing kernels give Bergman completeness

**Remember:** A sequence of evaluation lines cannot converge if its unit vectors vanish weakly.

*Rules out counterexamples.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV, math.FA. Level 3: graduate.

**Definition.** The Bergman kernel vector represents evaluation by an inner product on the square-integrable holomorphic functions. The normalized kernel vectors vanish weakly at the boundary if their inner products with each fixed function tend to zero there.

**Problem.** On a bounded domain this weak vanishing makes the Bergman metric complete, so every Cauchy sequence for its distance converges inside.

**How the definition helps.** Weak vanishing rules out convergence of the corresponding lines in projective Hilbert space. In our own argument, the projective description of the Bergman metric sends each Cauchy sequence to Cauchy lines. Those lines converge, so their unit representatives converge in norm after phase adjustment. This excludes a boundary subsequence, and an interior limit point gives convergence because the metric induces the usual topology.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Kobayashi, Geometry of bounded domains (1959)](https://doi.org/10.1090/S0002-9947-1959-0112162-5)

### Beltrami graphs expose integrability

**Remember:** The graph is integrable when its tangent brackets stay inside it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Complex coordinates split complexified tangent vectors into holomorphic and antiholomorphic directions. A Beltrami differential μ maps the antiholomorphic directions smoothly and complex-linearly into the holomorphic directions. Its graph consists of vectors v + μ(v) and specifies the new antiholomorphic directions for small μ.

**Problem.** The graph comes from local complex coordinates exactly when ∂̄μ + ½\[μ,μ\] = 0.

**How the definition helps.** Closure of the graph under vector field brackets gives one equation for μ (our own). Its linear term differentiates μ in antiholomorphic directions, and its quadratic term brackets the holomorphic corrections (our own). The Newlander–Nirenberg theorem supplies coordinates once brackets stay in the graph (our own).

**nLab:** [Maurer-Cartan equation](https://ncatlab.org/nlab/show/Maurer-Cartan+equation). It says: “the solutions in some contexts parametrize infinitesimal deformations”

**Sources:**

- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Brackets detect second-order obstructions

**Remember:** The quadratic bracket is the price of extending one more order.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The Maurer–Cartan description encodes a formal change of complex coordinates by a tangent-valued form μ satisfying ∂̄μ + ½\[μ,μ\] = 0. Here ∂̄ differentiates in antiholomorphic directions, and the bracket extends the bracket of vector fields. To second order write μ = εα + ε²β and discard powers above two.

**Problem.** A first-order solution α extends to second order exactly when \[α,α\] represents zero in the second cohomology of holomorphic vector fields.

**How the definition helps.** The quadratic coefficient gives the single equation ∂̄β = −½\[α,α\] (our own). It has a solution precisely when the right side represents zero in cohomology (our own). Kodaira–Spencer theory identifies solutions up to coordinate changes with formal deformations (our own).

**nLab:** [Deligne groupoid](https://ncatlab.org/nlab/show/Deligne+groupoid). It says: “MC(𝔤) = {x ∈ 𝔤¹ \| dx + ½\[x,x\] = 0}”

**Sources:** none listed. No primary source with a working link was found.

### Dual numbers linearize complex deformations

**Remember:** Square-zero parameters turn changes of charts into addition.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The dual numbers form the ring ℂ\[ε\]/(ε²), whose elements have the form a + bε. A first-order deformation of a complex manifold X glues products of its coordinate charts with this infinitesimal parameter space. The gluing must recover the original charts and their transitions at ε = 0.

**Problem.** First-order deformations of a compact complex manifold X, up to isomorphisms respecting that identification, correspond to first cohomology classes of its holomorphic vector fields.

**How the definition helps.** Square-zero multiplication turns composition of infinitesimal chart changes into addition of vector fields (our own). Compatibility on triple overlaps gives a cocycle, and changing charts adds a coboundary, precisely the equivalence in first cohomology (our own). Smoothness of X supplies the local product charts (our own).

**Wikipedia:** [Kodaira–Spencer map](https://en.wikipedia.org/wiki/Kodaira%E2%80%93Spencer_map). It says: “gives this 1-cochain as a 1-cocycle, hence a class”

**Sources:** none listed. No primary source with a working link was found.

### Fixed loci give Enriques deformations

**Remember:** Keep the cover involution by keeping its parameter fixed.

*Makes the theorem clean to state or prove.* MSC 32G05 (Deformations of complex structures). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex Enriques surface is the quotient of a K3 surface by a fixed-point-free involution, a symmetry of order two. The involution acts on the local deformation space of the cover. Its fixed germ consists of the parameters near the original surface that the involution preserves.

**Problem.** The local deformation space of the Enriques surface is isomorphic to this fixed germ and is smooth.

**How the definition helps.** The fixed parameters specify exactly which fibers retain the involution (our own). The covering theorem identifies deformations of the quotient with these parameters (our own). Averaging coordinates makes the involution linear on the smooth deformation base of the cover, so its fixed space is smooth (our own).

**Paper or page:** [Deformations of primitive Enriques varieties](https://arxiv.org/abs/2509.14014v1). It says: “The space Defˡᵗ(Y) ≃ B of locally trivial deformations of Y is smooth”

**Sources:** none listed. No primary source with a working link was found.

### Kodaira–Spencer maps commute with pullback

**Remember:** Changing the base first just changes the input tangent vector.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a smooth proper holomorphic family, the Kodaira–Spencer map measures how a fiber changes along a base tangent vector. Lift the vector locally to the total space and subtract the lifts on overlaps. These differences define a first cohomology class of holomorphic vector fields on the fiber.

**Problem.** After pullback along a holomorphic base map, the Kodaira–Spencer map is the original map composed with the derivative of that base map.

**How the definition helps.** The differences of lifts compute the connecting map of the tangent sequence, which respects maps between families (our own). Pullback sends the new base vector to its derivative in the original base (our own). This avoids differentiating the pulled-back chart transitions individually (our own).

**Wikipedia:** [Kodaira–Spencer map](https://en.wikipedia.org/wiki/Kodaira%E2%80%93Spencer_map). It says: “which gives a 1-cocycle on M with values in its tangent bundle”

**Sources:**

- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Local triviality removes smoothing directions

**Remember:** Fix each local model and deform only how they fit together.

*Rules out counterexamples. Confidence: medium.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A first-order deformation of a complex space X has parameter ε with ε² = 0 and an identification of the fiber at zero with X. It is locally trivial if each point has a neighborhood where the family is a product respecting that identification.

**Problem.** Locally trivial first-order deformations up to isomorphism respecting the identification correspond to first cohomology classes of the sheaf of holomorphic vector fields on X.

**How the definition helps.** Product charts can change on overlaps only by the identity plus ε times a derivation, a linear operator satisfying the product rule (our own). Triple overlaps give the cocycle condition, and changing charts adds exactly a coboundary (our own). The node deformation xy = ε changes the local equation and gives no such product chart (our own).

**Paper or page:** [Unobstructedness of deformations for a d-semistable central corank one boundary point](https://arxiv.org/abs/2410.10583v2). It says: “X has a non-locally trivial first order deformation”

**Sources:** none listed. No primary source with a working link was found.

### Normal sequences remove coordinate motion

**Remember:** The normal sequence separates moving equations from changing the manifold.

*True by definition. Confidence: medium.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** For a smooth hypersurface, the normal sequence relates tangent fields on the hypersurface, ambient tangent fields along it and normal motions. Its connecting map sends a normal motion to the first cohomology class measuring the failure of local ambient lifts to agree.

**Problem.** For a smooth quintic threefold in complex projective four-space, first-order deformations are degree-five polynomials modulo the defining polynomial and its infinitesimal projective coordinate changes.

**How the definition helps.** Exactness makes ambient tangent fields precisely the normal motions with zero intrinsic deformation class (our own). Projective-space cohomology shows that these fields extend globally and that the connecting map reaches every intrinsic deformation class (our own). Comparing local lifts with chart changes identifies this connecting map with the usual deformation map (our own).

**Paper or page:** [The Kodaira-Spencer map for minimal toric hypersurfaces](https://arxiv.org/abs/2203.01092v4). It says: “ker(κℙ,𝑓) ≅ Lie Aut(ℙ)”

**Sources:** none listed. No primary source with a working link was found.

### Semiuniversality gives unique base germs

**Remember:** All families factor locally, and the minimal base is unique.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A versal family induces every nearby deformation of its central fiber by a change of parameters. A semiuniversal family also induces each first-order deformation from a unique tangent vector at the base point.

**Problem.** Any two semiuniversal families of a compact complex manifold have isomorphic base germs, meaning their bases agree after shrinking around the chosen points.

**How the definition helps.** Versality gives comparison maps both ways, and first-order uniqueness makes their derivatives inverse (our own). Each composite is an analytic self-map with invertible derivative on the tangent space, hence an isomorphism of germs (our own). Kuranishi’s theorem constructs the family from changes of complex charts (our own).

**Paper or page:** [Calabi-Yau Foliations and Deformations](https://arxiv.org/abs/2412.07566v1). It says: “For any compact complex manifold X₀, there exists a versal family of deformations parametrized by an analytic space germ (R,0).”

**Sources:**

- [M. Kuranishi, On the Locally Complete Families of Complex Analytic Structures](https://doi.org/10.2307/1970211)

### Tangent fields classify pair deformations

**Remember:** Use vector fields tangent to the divisor when changing pair charts.

*True by definition.* MSC 32G05 (Deformations of complex structures), 14B12. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** For a smooth complex manifold X with a smooth hypersurface D, logarithmic vector fields are holomorphic vector fields tangent to D. Equivalently, they send each local function vanishing on D to another such function.

**Problem.** For a compact pair (X,D), first-order deformations fixing the central identification correspond to first cohomology classes of logarithmic vector fields. Isomorphisms must respect that identification.

**How the definition helps.** Infinitesimal chart changes preserving the hypersurface have precisely logarithmic vector fields as their linear terms (our own). Straightening a smooth hypersurface gives local product charts for the pair (our own). Their overlap conditions give cocycles, and changing the charts adds coboundaries (our own).

**Paper or page:** [Smoothing Gorenstein toric Fano 3-folds](https://arxiv.org/abs/2412.06500v1). It says: “Ext¹(Ωₓ(log D), 𝒪ₓ) is the tangent space of Def(X, D)”

**Sources:** none listed. No primary source with a working link was found.

### Two-forms identify K3 period derivatives

**Remember:** Contraction with the two-form makes the period differential invertible.

*Makes the theorem clean to state or prove.* MSC 32G05 (Deformations of complex structures), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A K3 surface is a simply connected compact complex surface with a nowhere vanishing holomorphic two-form. A marking identifies its second integral cohomology with a fixed lattice. The period is the line spanned by the form in the complexified lattice.

**Problem.** Near each marked K3 surface, the period map identifies its deformation space with an open subset of the period domain. This domain consists of lines ℂω satisfying ω·ω = 0 and ω·ω̄ &gt; 0 for the intersection pairing.

**How the definition helps.** The period line gives one geometric object whose derivative detects every first-order deformation (our own). Griffiths’ formula computes that derivative by contraction with the two-form, which identifies vector fields with one-forms (our own). The deformation space is smooth because the second cohomology of its tangent sheaf vanishes (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “This is surjective, and a local isomorphism, but not an isomorphism”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Zero obstruction spaces give smooth bases

**Remember:** No obstruction space means no local equations.

*True by definition.* MSC 32G05 (Deformations of complex structures). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a compact complex manifold X, let H¹ and H² denote cohomology of its holomorphic vector fields. The Kuranishi obstruction map is a holomorphic map from a neighborhood of zero in H¹ to H². Its zeros near the origin form the Kuranishi base, which describes all small deformations with no redundant first-order parameters.

**Problem.** If H² vanishes, the Kuranishi base is smooth of dimension dim H¹.

**How the definition helps.** A map to the zero space vanishes everywhere, so its zeros fill the neighborhood (our own). Kuranishi’s theorem replaces the equations for gluing local charts with this finite-dimensional map (our own).

**Paper or page:** [Calabi-Yau Foliations and Deformations](https://arxiv.org/abs/2412.07566v1). It says: “If H² = 0, the Kuranishi space is smooth and isomorphic to an open neighborhood of 0 in H¹.”

**Sources:**

- [M. Kuranishi, On the Locally Complete Families of Complex Analytic Structures](https://doi.org/10.2307/1970211)
- [K. Kodaira, Complex Manifolds and Deformation of Complex Structures](https://doi.org/10.1007/b138372)

### Level markings remove polarized automorphisms

**Remember:** At level three or higher, inversion cannot hide in the marking.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A principally polarized complex abelian variety is a projective complex torus with a polarization giving a perfect alternating pairing on its lattice. A full level n marking chooses a basis of the points killed by multiplication by n with the standard alternating pairing.

**Problem.** For n ≥ 3, the identity is the only group automorphism preserving both the polarization and the full level n marking.

**How the definition helps.** Preserving the basis forces the automorphism to act as the identity modulo n on the lattice (our own). Inversion still acts trivially at level two (our own). Polarization makes the automorphism group finite, and Minkowski’s lemma excludes nonidentity finite-order integral matrices congruent to the identity at level n ≥ 3 (our own).

**Wikipedia:** [Level structure (algebraic geometry)](https://en.wikipedia.org/wiki/Level_structure_%28algebraic_geometry%29). It says: “by demanding automorphisms to preserve the level structure”

**Sources:** none listed. No primary source with a working link was found.

### Polarization cuts K3 moduli

**Remember:** A fixed polarization class cuts the period domain by one hyperplane.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A polarized K3 surface is a simply connected compact complex surface with a nowhere vanishing holomorphic two-form and a chosen ample line bundle. An ample bundle has a power giving a projective embedding. A deformation of the pair extends the line bundle along with the surface.

**Problem.** Near the original pair, the period lines of its deformations fill an open subset of the hyperplane section orthogonal to the bundle’s first Chern class. This local deformation space is smooth of dimension 19.

**How the definition helps.** The bundle extends precisely when its class stays perpendicular to the holomorphic two-form (our own). The exponential sequence for holomorphic functions gives this extension criterion, and ampleness persists nearby (our own). Local Torelli supplies period coordinates in dimension twenty, and the positive square of the polarization makes the hyperplane cut transverse (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “The different 19-dimensional moduli spaces”

**Sources:**

- [D. Huybrechts, Lectures on K3 Surfaces, chapter 6](https://www.math.uni-bonn.de/people/huybrech/K3.html)

### Positive Lagrangians give symmetric periods

**Remember:** A positive Lagrangian is the graph of a symmetric period matrix.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** Fix a lattice with a basis in which its alternating form Q has the standard symplectic matrix. A positive Lagrangian is a complex subspace of half the dimension on which Q vanishes and iQ(v,v̄) is positive for nonzero v.

**Problem.** Marked principally polarized complex tori with this lattice have period space equal to the Siegel upper half-space of symmetric matrices with positive definite imaginary part.

**How the definition helps.** Positivity makes the subspace a graph over the first coordinate block because any vector in the second block pairs trivially with its conjugate (our own). Writing this graph as (v,Zv), the vanishing of Q gives symmetry of Z and positivity makes its imaginary part positive definite (our own). The Riemann bilinear relations identify these subspaces with marked polarized tori (our own).

**Wikipedia:** [Siegel upper half-space](https://en.wikipedia.org/wiki/Siegel_upper_half-space). It says: “symmetric matrices over the complex numbers whose imaginary part is positive definite”

**Sources:** none listed. No primary source with a working link was found.

### Weight one periods recover tori

**Remember:** The holomorphic one-forms recover the complex structure on the lattice.

*True by definition.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A marked complex torus is a quotient of a complex vector space by a lattice with a chosen basis. Its weight one period is the space W of holomorphic one-forms inside the complex dual of the marked real vector space.

**Problem.** Marked complex tori inducing a fixed orientation correspond to subspaces W complementary to their complex conjugates and inducing that orientation.

**How the definition helps.** The two subspaces recover the complex structure on the dual by multiplying W by i and its conjugate by −i (our own). Dualizing recovers the original vector space with its complex structure and marked lattice (our own). The broader theorem uses the Albanese map, obtained by integrating holomorphic one-forms, to recognize Kähler structures on smooth tori (our own).

**Paper or page:** [Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847v1). It says: “the space of all complex operators on H¹(M,ℝ) compatible with the orientation.”

**Sources:** none listed. No primary source with a working link was found.

### Hodge flags make periods holomorphic

**Remember:** The filtration varies holomorphically even when its split summands do not.

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** In degree k, the Hodge filtration groups cohomology classes by the types of differential forms representing them. Its step Fᵖ sums the types (a, k−a) with a ≥ p. The local period map records these nested subspaces, called a flag, after identifying nearby cohomology groups by parallel transport.

**Problem.** For a smooth projective family over a complex manifold, the local period map varies holomorphically in the space of flags of fixed dimensions.

**How the definition helps.** The filtration gives a complex space of flags in which holomorphic dependence has a precise meaning (our own). Recovering the individual type spaces from the flag uses complex conjugation (our own). Griffiths proved the substantive result that the filtration steps vary holomorphically.

**Wikipedia:** [Period mapping](https://en.wikipedia.org/wiki/Period_mapping). It says: “Griffiths proved that the period map is holomorphic.”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Hodge quotients give class equations

**Remember:** A real class lies in the middle when its Hodge quotient vanishes.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** In cohomology of degree 2p, the Hodge filtration step Fᵖ sums all form types (a, 2p−a) with a ≥ p. The quotient by Fᵖ records the remaining components of a class.

**Problem.** In a smooth projective family, fix a rational cohomology class locally by parallel transport. The points where it has only type (p,p) form a closed complex analytic set in that neighborhood.

**How the definition helps.** The quotient turns the type condition into the vanishing of one holomorphic section (our own). A rational class equals its conjugate, and conjugation interchanges the two type indices (our own). Membership in Fᵖ therefore forces both indices to equal p (our own). Griffiths’ theorem makes Fᵖ holomorphic, so the quotient section gives local holomorphic equations (our own).

**nLab:** [Hodge structure](https://ncatlab.org/nlab/show/Hodge+structure). It says: “Fᵖ H²ᵖ = Hᵖ˒ᵖ(X) ⊕ Hᵖ⁺¹˒ᵖ⁻¹(X) ⊕ ⋯ ⊕ H²ᵖ˒⁰(X).”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Transversality gives integrable Higgs fields

**Remember:** Flatness makes the two-step part of the squared connection vanish.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** In a variation of Hodge structure, the cohomology spaces carry nested holomorphic subspaces called the Hodge filtration. Differentiating a section by the flat connection, the rule for parallel transport, lowers its filtration step by at most one. On the direct sum of successive quotients, let θ be the map induced by this one-step drop.

**Problem.** These quotients form a holomorphic Higgs bundle. This means θ is a holomorphic one-form with values in linear operators, and its operators in any two directions commute.

**How the definition helps.** Passing to successive quotients makes the commutator exactly the two-step part of the curvature (our own). In a local splitting of the filtration, one would instead track several components of the connection (our own). Terms differentiating scalar coefficients disappear in the quotient, and flatness means the curvature vanishes (our own). Griffiths proved the filtration bound for smooth projective families.

**nLab:** [Higgs bundle](https://ncatlab.org/nlab/show/Higgs+bundle). It says: “satisfying the integrability condition Φ ∧ Φ = 0.”

**Sources:**

- [P. A. Griffiths, Periods of Integrals on Algebraic Manifolds, II: Local Study of the Period Mapping](https://doi.org/10.2307/2373485)

### Proper maps have analytic images

**Remember:** Proper maps keep points from escaping as their images converge.

*Rules out counterexamples.* MSC 32H35 (Proper holomorphic mappings, finiteness theorems), 32C25. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A map is proper if the inverse image of each compact set is compact.

**Problem.** The image of a proper holomorphic map of complex analytic spaces is an analytic subset of the target. Such a subset is closed and has local holomorphic defining equations.

**How the definition helps.** Properness prevents escape over compact sets, excluding the projection in our own example. Project the curve xy = 1 onto the x-axis. Its image approaches zero but omits it. Remmert’s theorem supplies the local equations for a proper image.

**Paper or page:** [Lipschitz geometry of complex surface germs via inner rates of primary ideals](https://arxiv.org/abs/2407.14265v2). It says: “Let f: X ⟶ Y be a proper holomorphic map. Then f(X) is an analytic set embedded in Y.”

**Sources:**

- [Reinhold Remmert, Holomorphe und meromorphe Abbildungen komplexer Räume (1957)](https://doi.org/10.1007/bf01342886)

### Closed projective analytic sets are algebraic

**Remember:** Projective space forces a closed analytic set to be algebraic.

*Rules out counterexamples.* MSC 32J25 (Transcendental methods of algebraic geometry (complex-analytic aspects)), 14A10. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A closed projective analytic set is a closed subset of complex projective space described locally by holomorphic equations. Projective space adds the possible directions at infinity to affine space.

**Problem.** A closed complex analytic subset of complex projective space is cut out by homogeneous polynomials.

**How the definition helps.** The projective hypothesis excludes our own affine counterexample, the graph of the exponential function. The graph has the holomorphic equation y = exp(x). Substituting exp(x) into a nonzero polynomial gives a sum of exponentials with polynomial coefficients. Along the positive real axis the term with largest exponent dominates, so the polynomial cannot vanish on the graph. Chow’s theorem supplies homogeneous polynomial equations in projective space.

**nLab:** [Chow's theorem](https://ncatlab.org/nlab/show/Chow%27s+theorem). It says: “a complex analytic space which is given as a closed subset of a complex projective space is a complex algebraic variety.”

**Sources:**

- [Wei-Liang Chow, On Compact Complex Analytic Varieties (1949)](https://doi.org/10.2307/2372375)

### Kähler Moishezon manifolds are projective

**Remember:** Enough meromorphic functions still need a Kähler metric.

*Rules out counterexamples.* MSC 32J25 (Transcendental methods of algebraic geometry (complex-analytic aspects)). arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A connected compact complex manifold is Moishezon if it has as many algebraically independent meromorphic functions as its complex dimension. Meromorphic functions are locally quotients of holomorphic functions. A Kähler metric is a Hermitian metric whose associated two-form is closed.

**Problem.** A Moishezon manifold embeds as a closed complex submanifold of projective space exactly when it admits a Kähler metric.

**How the definition helps.** Counting independent meromorphic functions narrows the projectivity question to a single metric condition. The Kähler hypothesis excludes Hironaka’s smooth three-dimensional example, which meets the function count but has no projective embedding. Moishezon’s theorem supplies the difficult implication from the function count and the metric to an embedding. In our own argument for the converse, restrict the standard Kähler metric from projective space.

**Wikipedia:** [Moishezon manifold](https://en.wikipedia.org/wiki/Moishezon_manifold). It says: “a Moishezon manifold is a projective algebraic variety if and only if it admits a Kähler metric.”

**Sources:** none listed. No primary source with a working link was found.

### Bundle connections in conjugate directions integrate on curves

**Remember:** On a curve there is no room for two conjugate directions.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32W05. arXiv math.DG. Level 3: graduate.

**Definition.** A connection in conjugate directions differentiates smooth bundle sections in those directions and obeys the product rule. Its square measures curvature in pairs of conjugate directions. When the square vanishes, the operator defines a holomorphic structure, usually described by local frames with holomorphic changes of basis.

**Problem.** Every smooth complex vector bundle on a complex curve has a unique holomorphic structure compatible with any given connection in conjugate directions.

**How the definition helps.** The operator description needs only its square to vanish, and alternating forms in two conjugate directions vanish in complex dimension one (our own). The Koszul–Malgrange theorem supplies local frames killed by the operator. Their changes of basis are holomorphic (our own).

**nLab:** [Koszul-Malgrange theorem](https://ncatlab.org/nlab/show/Koszul-Malgrange+theorem). It says: “such that ∂̄ₑ ∘ ∂̄ₑ = 0, hence with a compatible Dolbeault operator”

**Sources:** none listed. No primary source with a working link was found.

### Curvature makes tensor products positive

**Remember:** Multiply the local metric weights and add their curvatures.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32Q40. arXiv math.DG. Level 3: graduate.

**Definition.** A holomorphic line bundle is positive if it has a Hermitian metric whose curvature form, multiplied by i, is a positive definite (1,1)-form.

**Problem.** The tensor product of two positive holomorphic line bundles is positive. A line bundle with a positive tensor power is itself positive.

**How the definition helps.** Curvature adds under tensor products because local squared norms multiply and curvature differentiates their logarithms (our own). The sum of positive curvature forms stays positive (our own). Taking the positive root of squared norms on a tensor power divides curvature by the exponent (our own). Kodaira’s theorem relates this test to ampleness on compact complex manifolds.

**nLab:** [positive line bundle](https://ncatlab.org/nlab/show/positive+line+bundle). It says: “A holomorphic line bundle on a complex manifold is called positive if its curvature differential 2-form is, after multiplication with i=√−1, a positive definite (1,1)-form.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential sequence makes first Chern classes add under tensor products

**Remember:** Transition functions multiply, and the connecting map turns their products into sums.

*True by definition.* MSC 32L10 (Sheaves and cohomology of sections of holomorphic vector bundles, general results), 55R40. arXiv math.CV, math.AT. Level 3: graduate.

**Definition.** On a complex manifold M, the exponential sequence 0 → ℤ → 𝒪 → 𝒪\* → 0 sends a holomorphic function f to exp(2πif). Holomorphic line bundles are classes in H¹(M, 𝒪\*). Define the first Chern class c₁ as the connecting map H¹(M, 𝒪\*) → H²(M, ℤ).

**Problem.** The first Chern class turns tensor products of holomorphic line bundles into sums. A line bundle has first Chern class zero exactly when it lies in the image of H¹(M, 𝒪).

**How the definition helps.** The exponential-sequence definition makes additivity immediate because the connecting map is a group homomorphism. Tensor product of line bundles multiplies their transition functions, which is the group law on H¹(M, 𝒪\*). Exactness of the long sequence identifies the kernel of c₁ with the image of H¹(M, 𝒪). The work shifts to proving that this class agrees with the topological Euler class (our own comparison).

**Wikipedia:** [Exponential sheaf sequence](https://en.wikipedia.org/wiki/Exponential_sheaf_sequence). It says: “Here H¹(O<sub>M</sub>\*) can be identified with the Picard group of holomorphic line bundles on M. The connecting homomorphism sends a line bundle to its first Chern class.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier ideals allow singular vanishing

**Remember:** Keep exactly the germs that the weighted norm can see.

*Makes the theorem clean to state or prove.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A singular metric on a holomorphic line bundle measures squared lengths locally with a weight exp(−2φ). Its multiplier ideal 𝒥 consists of local holomorphic functions f for which \|f\|² exp(−2φ) has finite integral near each point.

**Problem.** On compact Kähler X with Kähler form ω, suppose a singular metric on L has curvature at least εω for some ε &gt; 0. Then Hᑫ(X,K⊗L⊗𝒥) vanishes for q &gt; 0, where K is the bundle of holomorphic top forms.

**How the definition helps.** The ideal specifies exactly which coefficients have the finite norm needed to solve the weighted differential equation. In our own summary, Nadel’s proof identifies sheaf cohomology with a complex of square-integrable forms. Curvature estimates solve the equation ∂̄u = v for closed forms v of positive degree.

**Wikipedia:** [Nadel vanishing theorem](https://en.wikipedia.org/wiki/Nadel_vanishing_theorem). It says: “It generalizes the Kodaira vanishing theorem using singular metrics with (strictly) positive curvature,”

**Sources:**

- [A. M. Nadel, Multiplier ideal sheaves and Kähler-Einstein metrics of positive scalar curvature (1990)](https://annals.math.princeton.edu/1990/132-3/p04)

### Nakano positivity gives vanishing where Griffiths positivity fails

**Remember:** Test curvature on sums of tensors, not only simple tensors.

*Rules out counterexamples.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Curvature of a Hermitian holomorphic bundle defines a Hermitian form on the tensor product of tangent space and fiber. Nakano positivity requires positivity on every nonzero tensor. Griffiths positivity tests only individual products of a tangent vector and a fiber vector.

**Problem.** On a compact Kähler manifold X, a Nakano-positive bundle E satisfies Hᑫ(X,K⊗E) = 0 for q &gt; 0. Here K is the bundle of holomorphic forms of top degree.

**How the definition helps.** Testing sums of tensors makes the curvature term positive in the Bochner–Kodaira energy identity. That identity forces every harmonic representative of these cohomology groups to vanish. Our own example uses the Griffiths-positive tangent bundle of the complex projective plane. Tensoring it with K gives the cotangent bundle, whose first cohomology contains the nonzero Kähler class.

**Paper or page:** [Positivity and L² Extension](https://arxiv.org/abs/2508.01753v1). It says: “Griffiths-positive but not 2-positive for k=1”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing extends multiplier subscheme sections

**Remember:** Take the quotient whose kernel Nadel vanishing controls.

*Makes the theorem clean to state or prove.* MSC 32L20 (Vanishing theorems), 14F18. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a singular line metric, the multiplier ideal 𝒥 consists of local holomorphic functions whose squared lengths have finite integral. Its multiplier subscheme Z has function sheaf 𝒪/𝒥, so functions on Z retain information modulo the full ideal.

**Problem.** On a compact Kähler manifold X, suppose the curvature of a singular metric on L dominates a positive multiple of the Kähler form. Every section of K⊗L on Z extends to X, where K is the holomorphic top-form bundle.

**How the definition helps.** The quotient by the full ideal makes the kernel of restriction precisely the sheaf whose cohomology Nadel vanishing controls. In our own argument, the exact cohomology sequence places the obstruction to extension in H¹(X,K⊗L⊗𝒥). Nadel vanishing kills this group.

**Wikipedia:** [Nadel vanishing theorem](https://en.wikipedia.org/wiki/Nadel_vanishing_theorem). It says: “its zero variety is an analytic set.”

**Sources:**

- [A. M. Nadel, Multiplier ideal sheaves and Kähler-Einstein metrics of positive scalar curvature (1990)](https://annals.math.princeton.edu/1990/132-3/p04)

### Amoeba complements have convex components

**Remember:** A line segment in log coordinates interpolates radii geometrically.

*Makes the theorem clean to state or prove.* MSC 32Q02 (Special domains (Reinhardt, Hartogs, circular, tube, etc.) in \\(\\mathbb<sup>n\\</sup>) and complex manifolds), 32D10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Laurent polynomial allows negative integer powers of its variables. Its amoeba consists of the coordinatewise logarithms of absolute values of its zeros with all coordinates nonzero.

**Problem.** Every connected component of the complement of a polynomial amoeba is convex.

**How the definition helps.** Logarithms turn the absolute values of monomials into exponentials of linear functions. In our own proof, the reciprocal of the polynomial has one Laurent expansion over each complementary component. Hölder’s inequality makes the region where such a series converges absolutely convex in logarithmic coordinates. This region misses the amoeba, so it equals the component.

**Wikipedia:** [Amoeba (mathematics)](https://en.wikipedia.org/wiki/Amoeba_%28mathematics%29). It says: “Any connected component of the complement ℝⁿ ∖ 𝒜ₚ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Kähler closedness excludes Hopf obstruction

**Remember:** Closedness lets a single harmonic theory control both complex derivatives.

*Rules out counterexamples. Confidence: medium.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Hermitian metric measures lengths compatibly with the complex structure. It is Kähler when its associated real two-form is closed.

**Problem.** On a compact Kähler manifold, every exact differential form of pure type equals ∂∂̄u for some form u. Here ∂ and ∂̄ are the two parts of exterior differentiation in complex coordinates.

**How the definition helps.** Closedness gives the Kähler identities, which link the Laplacians for the two complex derivatives and yield the result through Hodge theory. Our own counterexample identifies z with 2z in punctured complex two-space to form a compact Hopf surface. The nonzero form i∂∂̄log\|z\|² descends with a global primitive because dilation changes the logarithm only by a constant. A global real potential would be subharmonic on every complex curve and hence constant by the maximum principle.

**Wikipedia:** [Bott–Chern cohomology](https://en.wikipedia.org/wiki/Bott%E2%80%93Chern_cohomology). It says: “are closely connected with the ∂∂̄-lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Odd-degree Betti numbers of compact Kähler manifolds are even

**Remember:** In odd degree, each Hodge piece has a distinct conjugate.

*Rules out counterexamples.* MSC 32Q15 (Kähler manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A Hermitian metric gives each complex tangent space an inner product that varies smoothly. It is Kähler when the imaginary part of that inner product gives a closed differential form.

**Problem.** A Betti number is the dimension of a cohomology group with complex coefficients. On a compact Kähler manifold, each odd-degree Betti number is even.

**How the definition helps.** The Kähler condition gives a decomposition in which complex conjugation pairs summands of equal dimension. Hodge theory supplies this decomposition by the numbers p and q of ordinary and conjugate differentials. In odd degree, p + q is odd, so the partner with indices (q, p) is distinct. The Hopf surface shows why the metric matters. It is compact and complex, but its first Betti number is one.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “A simple consequence of Hodge theory is that every odd Betti number b₂ₐ₊₁ of a compact Kähler manifold is even, by Hodge symmetry.”

**Sources:** none listed. No primary source with a working link was found.

### Primitive classes split Kähler cohomology

**Remember:** The adjoint turns primitive into orthogonal to wedge multiples.

*True by definition.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** For a compact Kähler manifold, let L wedge a form with its Kähler form. A harmonic form is primitive when the adjoint of L kills it. A cohomology class is primitive when its harmonic representative is primitive.

**Problem.** Each class of type (p,q) splits uniquely into a primitive class and L applied to a class of type (p−1,q−1). The two summands are orthogonal for the inner product on harmonic forms.

**How the definition helps.** The adjoint definition identifies primitive forms as the orthogonal complement of the image of L. Our own argument replaces the test by repeated wedge powers with this single orthogonality test. The Kähler identities ensure that L and its adjoint preserve harmonic forms. Hodge theory identifies these forms with cohomology classes.

**Paper or page:** [Hodge-Riemann property of Griffiths positive matrices with (1,1)-form entries](https://arxiv.org/abs/2211.11578v3). It says: “H<sup>p,q</sup>(X,\\mathbb{C} )=\\Big (\\{\\omega \\}\\smile H<sup>p-1,q-1</sup>(X,\\mathbb{C} )\\Big )\\oplus P<sup>p,q</sup>(X,\\mathbb{C} )”

**Sources:** none listed. No primary source with a working link was found.

### The Kähler condition makes the Laplacians agree and gives the Hodge decomposition

**Remember:** A closed Kähler form ties the metric, complex and symplectic structures together.

*Makes the theorem clean to state or prove.* MSC 32Q15 (Kähler manifolds), 53C55, 58A14. arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** A Kähler manifold is a complex manifold with a Hermitian metric whose associated 2-form ω is closed. Equivalently, the complex structure is parallel for the Levi-Civita connection.

**Problem.** On a compact Kähler manifold, the r-th cohomology group with complex coefficients splits. It is the direct sum of the Dolbeault groups of type (p, q) with p + q = r.

**How the definition helps.** The Kähler condition gives the Kähler identities, so the de Rham Laplacian is twice each Dolbeault Laplacian. Then a form is harmonic exactly when each of its (p, q) parts is harmonic. Hodge theory gives each class a unique harmonic representative, so the splitting passes to cohomology. On a general compact complex manifold the splitting can fail, as on the Hopf surface S¹ × S³ with first Betti number 1 (our own example).

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “If X is Kähler, the Kähler identities imply these Laplacians are all the same up to a constant”

**Sources:**

- [E. Kähler, Über eine bemerkenswerte Hermitesche Metrik, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 9 (1933) 173–186](https://doi.org/10.1007/BF02940642)

### An exhaustion separates its own sublevels

**Remember:** One plurisubharmonic function separates its whole sublevel from outside points.

*True by definition.* MSC 32Q28 (Stein manifolds), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** The holomorphic hull of K consists of points where every global holomorphic function obeys its maximum modulus bound on K. The plurisubharmonic hull instead tests upper bounds for functions satisfying the subharmonic mean inequality along holomorphic discs. On a Stein manifold the two hulls agree for compact K.

**Problem.** Let ρ be a smooth strictly plurisubharmonic function on a Stein manifold with compact sets {ρ ≤ c} for every real c. Each such set equals its holomorphic hull.

**How the definition helps.** The exhaustion ρ itself exceeds c at every point outside the sublevel, so its plurisubharmonic hull adds nothing (our own). The theorem identifying the two hulls on Stein manifolds then gives holomorphic convexity (our own).

**Paper or page:** [The Oka principle for tame families of Stein manifolds](https://arxiv.org/abs/2510.25887v1). It says: “the sublevel set {ρ ≤ c} ⊂ T × X is proper and 𝒥-convex.”

**Sources:**

- [Franc Forstnerič and Álfheiður Sigurðardóttir, The Oka principle for tame families of Stein manifolds (2026)](https://doi.org/10.1090/btran/257)

### Chern classes classify Stein line bundles

**Remember:** Taking local logarithms leaves an integer class.

*True by definition.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** The analytic Picard group classifies holomorphic line bundles, which are locally products with a complex line. Equivalently, it records nowhere-zero holomorphic transition functions on overlaps, up to changes of local frames. This describes the first sheaf cohomology group of nowhere-zero holomorphic functions.

**Problem.** The first Chern class identifies the analytic Picard group of a Stein manifold X with H²(X, ℤ).

**How the definition helps.** Using transition functions turns the first Chern class into the obstruction to choosing compatible local logarithms (our own). The exponential sequence expresses this obstruction as a map to integer cohomology in degree two (our own). Cartan’s Theorem B makes the neighboring holomorphic function cohomology groups in degrees one and two vanish, so the map is bijective (our own).

**nLab:** [Oka principle](https://ncatlab.org/nlab/show/Oka+principle). It says: “holomorphic line bundles over Stein manifolds are fully classified by their first Chern class”

**Sources:**

- [Kiyosi Oka, Sur les fonctions analytiques de plusieurs variables. III–Deuxième problème de Cousin (1939)](https://doi.org/10.32917/hmj/1558490525)

### Closed submanifolds inherit Stein embeddings

**Remember:** Restrict a closed embedding to a closed submanifold.

*True by definition.* MSC 32Q28 (Stein manifolds), 32Q40. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold admits a holomorphic embedding as a closed complex submanifold of complex Euclidean space. The intrinsic definition requires global holomorphic functions to separate points and the holomorphic hull of every compact set to be compact. The hull contains precisely those points where each global holomorphic function stays within its maximum absolute value on the compact set.

**Problem.** Every closed complex submanifold of a Stein manifold is Stein.

**How the definition helps.** In our own proof, restricting the embedding leaves its image closed in the same Euclidean space. The embedding theorem of Remmert, Bishop and Narasimhan connects this description with the conditions on holomorphic functions.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “Every closed sub-complex manifold of a Stein manifold is itself Stein.”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic forms compute Stein cohomology

**Remember:** On Stein manifolds, holomorphic forms already compute cohomology.

*Makes the theorem clean to state or prove.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** Global holomorphic de Rham cohomology uses differential forms whose coefficients are holomorphic in local coordinates. In each degree it takes forms with zero exterior derivative modulo derivatives of global holomorphic forms.

**Problem.** On a Stein manifold, the cohomology of the complex of global holomorphic forms equals singular cohomology with complex coefficients.

**How the definition helps.** Using global forms gives one complex whose cohomology can be compared directly with the topology of the manifold (our own). The holomorphic Poincaré lemma says that closed holomorphic forms of positive degree have local primitives (our own). Cartan’s Theorem B removes higher sheaf cohomology of the forms, so this local calculation gives the global comparison (our own).

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “The holomorphic de Rham cohomology of Stein manifolds coincides with ordinary de Rham cohomology (with complex coefficients).”

**Sources:**

- [Hans Grauert and Reinhold Remmert, Theory of Stein Spaces (2004)](https://doi.org/10.1007/978-3-642-18921-0)

### On Stein manifolds sheaf cohomology solves the first Cousin problem

**Remember:** Stein means enough holomorphic functions, so prescribed poles always glue together.

*Makes the theorem clean to state or prove.* MSC 32Q28 (Stein manifolds), 32E10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold is a complex manifold with two properties. It is holomorphically convex: the hull of each compact set, defined by bounds on all global holomorphic functions, is compact. It is holomorphically separable: global holomorphic functions separate points.

**Problem.** The first Cousin problem gives meromorphic functions fᵢ on open sets Uᵢ, with each fᵢ − fⱼ holomorphic on the overlap. It asks for one global meromorphic f with f − fᵢ holomorphic on each Uᵢ. On a Stein manifold this problem always has a solution.

**How the definition helps.** Sheaf cohomology rewrites the gluing problem as one obstruction class in H¹(M, 𝒪), where 𝒪 is the sheaf of holomorphic functions. A solution exists as soon as that group is zero. The work moves into Cartan's theorem B, which gives this vanishing on a Stein manifold. On a compact complex torus the problem can fail, since no elliptic function has only one simple pole (our own example).

**Wikipedia:** [Cousin problems](https://en.wikipedia.org/wiki/Cousin_problems), [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “the first Cousin problem is always solvable provided that the first cohomology group H¹(M,O) vanishes. In particular, by Cartan's theorem B, the Cousin problem is always solvable if M is a Stein manifold.”

**Sources:**

- [K. Stein, Analytische Funktionen mehrerer komplexer Veränderlichen zu vorgegebenen Periodizitätsmoduln und das zweite Cousinsche Problem, Mathematische Annalen 123 (1951)](https://doi.org/10.1007/bf02054949)

### Stein exhaustions bound handle dimensions

**Remember:** A positive complex Hessian leaves at most half the directions negative.

*True by definition.* MSC 32Q28 (Stein manifolds), 32Q55. arXiv math.DG. Level 3: graduate.

**Definition.** A Stein manifold admits a smooth real exhaustion with positive complex Hessian, the matrix of mixed complex and conjugate derivatives. An exhaustion has compact sublevel sets. Another definition requires a closed holomorphic embedding in complex Euclidean space.

**Problem.** A Stein manifold of complex dimension n has the homotopy type of a space built by attaching balls of real dimension at most n.

**How the definition helps.** The exhaustion definition gives a Morse function whose positive complex Hessian bounds the indices of its critical points (our own). The real Hessian cannot be negative on both a vector and its complex rotation (our own). A real subspace of dimension above n meets its complex rotation, so each index is at most n (our own). Morse theory then attaches one ball of that dimension at each critical point (our own).

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “Being a Stein manifold is equivalent to being a (complex) strongly pseudoconvex manifold.”

**Sources:**

- [Grauert, On Levi’s Problem and the Imbedding of Real-Analytic Manifolds (1958)](https://doi.org/10.2307/1970257)
- [Andreotti and Frankel, The Lefschetz Theorem on Hyperplane Sections (1959)](https://doi.org/10.2307/1970034)

### Stein global sections preserve exactness

**Remember:** No first cohomology means local lifts have no global obstruction.

*True by definition.* MSC 32Q28 (Stein manifolds), 32C35. arXiv math.CV. Level 3: graduate.

**Definition.** A coherent analytic sheaf describes local modules over holomorphic functions with finite local presentations. The cohomological definition calls a complex manifold Stein when every such sheaf has zero cohomology in all positive degrees.

**Problem.** On a Stein manifold, every short exact sequence of coherent analytic sheaves stays exact on global sections. In particular, every global section of the quotient lifts to the middle sheaf.

**How the definition helps.** The cohomological definition kills the obstruction to lifting a global section. In our own argument, the long exact sequence places that obstruction in the first cohomology group of the kernel. The geometric definition asks for a closed holomorphic embedding into complex coordinate space. Cartan’s theorem B gives vanishing from the geometric condition, and the converse uses the cohomological criterion for Stein manifolds.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the positive-degree abelian sheaf cohomology with values in any analytic coherent sheaf on any Stein manifold vanishes”

**Wikipedia:** [Cartan's theorems A and B](https://en.wikipedia.org/wiki/Cartan%27s_theorems_A_and_B). It says: “then X is Stein (resp. affine)”

**Sources:** none listed. No primary source with a working link was found.

### Strict Stein exhaustions exclude compact curves

**Remember:** Strict positivity prevents a maximum on a compact complex curve.

*Rules out counterexamples.* MSC 32Q28 (Stein manifolds), 32U10. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold admits a smooth exhaustion, a real function with compact closed sublevel sets, whose complex Hessian is positive definite. The complex Hessian is the matrix of mixed complex and conjugate second derivatives. Such an exhaustion is strictly plurisubharmonic. A plurisubharmonic exhaustion can have zero eigenvalues.

**Problem.** A Stein manifold contains no compact complex submanifold of positive dimension.

**How the definition helps.** Strict positivity passes to each complex submanifold and rules out an interior maximum there in positive dimension (our own). A compact submanifold must have a maximum, giving the contradiction (our own). On the product of the complex projective line with ℂ, squared modulus of the ℂ coordinate gives a plurisubharmonic exhaustion (our own). Its complex Hessian vanishes along each compact projective line (our own). Grauert’s theorem supplies the strict exhaustion characterization of Stein manifolds.

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “Being a Stein manifold is equivalent to being a (complex) strongly pseudoconvex manifold.”

**Sources:** none listed. No primary source with a working link was found.

### Integral Kähler classes exclude nonprojective tori

**Remember:** Projective embeddings pull back an integral positive form.

*Rules out counterexamples.* MSC 32Q40 (Embedding theorems for complex manifolds), 32J27. arXiv math.DG. Level 3: graduate.

**Definition.** A Kähler form is a closed real two-form compatible with the complex structure that gives a positive Hermitian metric. A Hodge metric is a Kähler metric whose form has integer integrals over every integral two-cycle, a closed oriented chain with integer coefficients.

**Problem.** A compact complex manifold embeds holomorphically into projective space exactly when it admits a Hodge metric.

**How the definition helps.** Integral periods let the positive form represent the first Chern class, the degree-two characteristic class of a holomorphic line bundle (our own). Kodaira proves that sections of a sufficiently high tensor power give an embedding in projective space. Conversely, pulling back the normalized projective Kähler form gives a positive form with integral periods (our own). A generic complex torus of dimension at least two admits Kähler forms but no nonzero integral class represented by such a form (our own).

**nLab:** [Hodge manifold](https://ncatlab.org/nlab/show/Hodge+manifold). It says: “A Hodge manifold is a Kähler manifold whose canonical differential 2-form is integral.”

**Wikipedia:** [Kodaira embedding theorem](https://en.wikipedia.org/wiki/Kodaira_embedding_theorem). It says: “there is a complex-analytic embedding of M into complex projective space of some high enough dimension N.”

**Sources:**

- [Kodaira, On Kähler Varieties of Restricted Type (1954)](https://doi.org/10.2307/1969701)

### Compact hyperbolicity survives products

**Remember:** An entire curve in a product has two entire projections.

*True by definition.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds), 32F45. arXiv math.CV. Level 3: graduate.

**Definition.** Call a complex manifold Brody hyperbolic if every holomorphic map to it from the complex plane is constant. The Kobayashi pseudodistance takes the infimum of lengths of chains of holomorphic disks joining two points, using hyperbolic length within each disk. Kobayashi hyperbolicity means this distance separates points.

**Problem.** A product of two nonempty compact complex manifolds is Kobayashi hyperbolic exactly when both factors are.

**How the definition helps.** A map into a product is constant exactly when both projections are constant, in our own argument. For the converse, our own proof holds a point fixed in the other factor. In our own account, Brody’s theorem links entire curves and the disk distance on compact manifolds.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “Brody's theorem says that a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact Manifolds and Hyperbolicity (1978)](https://doi.org/10.2307/1998216)

### Complete Kobayashi distance gives tautness

**Remember:** One point in a compact set keeps each smaller disc in a compact ball.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** The Kobayashi pseudodistance measures the least total hyperbolic length of chains of holomorphic discs. Complete hyperbolicity means it is a complete metric. Tautness requires each disc sequence to have a subsequence converging locally uniformly or eventually sending each compact set outside every compact target set.

**Problem.** Every complete Kobayashi hyperbolic complex manifold is taut.

**How the definition helps.** Completeness makes closed Kobayashi balls compact by the Hopf–Rinow theorem for length spaces. In our own explanation, discs that fail to escape have a subsequence taking some points of a fixed compact set into another compact set. Distance contraction then confines their images on every smaller closed disc to a compact ball. The Arzelà–Ascoli theorem gives a subsequence converging uniformly on compact sets.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Theorem 2.3.18 (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### Entire curves test compact hyperbolicity

**Remember:** Compactness lets fast disks give an entire curve.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** Brody hyperbolicity rules out nonconstant holomorphic maps from the whole complex plane. Kobayashi hyperbolicity instead requires a distance built from chains of holomorphic disks to separate distinct points.

**Problem.** For compact complex manifolds, Brody hyperbolicity and Kobayashi hyperbolicity agree. The equivalence can fail without compactness.

**How the definition helps.** On a compact target, Brody’s theorem replaces the disk-chain distance test with one test for entire curves. For our own counterexample, take the union of the unit bidisk with the domain 0 &lt; \|w\| &lt; 1, \|zw\| &lt; 1. Every entire curve in it is constant, because w and then z is bounded. For 0 &lt; a &lt; 1 and each positive integer N, the disk ζ ↦ (Nζ, ζ(ζ − a/N)/(2N)) joins (0,0) to (a,0) at parameters 0 and a/N, so the Kobayashi distance between these points is zero.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact manifolds in hyperbolicity (1978)](https://doi.org/10.1090/S0002-9947-1978-0470252-3)

### Hyperbolic embeddings remove essential singularities

**Remember:** Boundary separation forces each shrinking circle to concentrate near one point.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** The Kobayashi pseudodistance measures the least total hyperbolic length of chains of holomorphic discs joining two points. Let U be open in a compact complex manifold X. It is hyperbolically embedded if distinct closure points have neighborhoods whose intersections with U have positive Kobayashi distance from each other.

**Problem.** Every holomorphic map from a punctured disc into a hyperbolically embedded U extends across the puncture as a holomorphic map to X.

**How the definition helps.** Positive separation prevents one small image circle from approaching two distinct closure points. In our own explanation, holomorphic maps decrease Kobayashi distances, and circles around the puncture have diameters tending to zero in the punctured disc. Kiernan’s extension argument rules out different limits along different circles. Without separation, exp(1/z) maps into the punctured plane and has an essential singularity.

**Paper or page:** [Nevanlinna Pair and Algebraic Hyperbolicity](https://arxiv.org/abs/2102.04624). It says: “If X ∖ D is hyperbolically imbedded in X, then X ∖ D is quantitatively big Picard.”

**Sources:**

- [Nevanlinna Pair and Algebraic Hyperbolicity, Theorem 1.1](https://arxiv.org/abs/2102.04624)
- [Peter Kiernan, Hyperbolically imbedded spaces and the big Picard theorem (1973), Theorem 1](https://doi.org/10.1007/BF01351589)

### Negative Euler characteristic selects disc covers

**Remember:** Count handles and punctures to tell whether the universal cover is a disc.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** Remove r distinct points from a compact connected Riemann surface of genus g, its number of handles. The resulting curve is called hyperbolic when 2g − 2 + r is positive.

**Problem.** A curve of this form is hyperbolic exactly when its universal holomorphic cover is the unit disc.

**How the definition helps.** The numerical test excludes the curves covered by the sphere or the plane. In our own proof, uniformization leaves only the sphere, plane, and disc as possible covers. The sphere covers only itself, and every fixed-point-free holomorphic symmetry of the plane is a translation. The possible plane quotients are the plane, the punctured plane, and compact tori, all with nonnegative Euler characteristic.

**nLab:** [hyperbolic curves](https://ncatlab.org/nlab/show/hyperbolic+curves). It says: “We say that X is hyperbolic if 2g−2+r &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform negative curvature gives hyperbolicity

**Remember:** A curvature bound limits how fast every trial disc can move.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The infinitesimal Kobayashi length of a nonzero tangent vector is the reciprocal of the supremum of its multiples realized as unit-disc derivatives. Holomorphic sectional curvature measures curvature in each complex tangent line. A Kähler metric is a Hermitian metric whose associated two-form is closed.

**Problem.** If a Kähler metric has holomorphic sectional curvature bounded above by a negative constant, the Kobayashi distance separates points. If the original metric is complete, so is the Kobayashi distance.

**How the definition helps.** A uniform curvature bound limits all disc derivatives, giving a positive lower bound for Kobayashi length relative to the original norm. In our own argument, the Ahlfors–Schwarz lemma supplies that derivative estimate, and Royden’s theorem converts the length bound into a distance bound. The plane with metric exp(2\|z\|²)\|dz\|² has negative curvature approaching zero, yet its Kobayashi distance vanishes.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “holomorphic sectional curvature bounded above by a negative constant, then X is Kobayashi hyperbolic.”

**Sources:** none listed. No primary source with a working link was found.

### Group actions supply Oka sprays

**Remember:** The derivative of the group action already spans every tangent space.

*Makes the theorem clean to state or prove.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A dominating spray on a complex manifold Y is a holomorphic map from a vector bundle over Y back to Y. It sends the zero vector over each point to that point. Differentiating along the fiber there must give every tangent direction.

**Problem.** Every complex manifold with a transitive holomorphic action of a complex Lie group has a dominating spray and hence is Oka.

**How the definition helps.** A dominating spray asks for exactly the tangent directions produced by a transitive action (our own). For a Lie algebra vector v and a point y, the map sending (y,v) to exp(v) acting on y gives the spray (our own). Its derivative in v covers the tangent space because the orbit is the whole manifold (our own). Gromov’s theorem turns the spray into the Oka approximation property (our own).

**nLab:** [Oka manifold](https://ncatlab.org/nlab/show/Oka+manifold). It says: “Every complex Lie group and every coset space (homogeneous space) of complex Lie groups is an Oka manifold.”

**Sources:**

- [Mikhail Gromov, Oka’s Principle for Holomorphic Sections of Elliptic Bundles (1989)](https://doi.org/10.2307/1990897)

### Holomorphic coverings preserve Oka approximation

**Remember:** Convex test domains have no loops that can switch sheets.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ admits uniform approximation there by holomorphic maps on all of ℂⁿ.

**Problem.** For a holomorphic covering between connected complex manifolds, the total space is Oka exactly when the base is Oka.

**How the definition helps.** Convex neighborhoods are simply connected, so a test map into the base lifts after choosing one sheet (our own). Approximate this lift upstairs and project to obtain approximations downstairs (our own). Conversely, sufficiently close approximations downstairs lift on ℂⁿ, and choosing nearby starting values gives uniform convergence upstairs on the compact set (our own). Forstnerič’s theorem identifies the convex test with the full Oka property (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “If Y → Z is an Oka map of connected complex manifolds, then Y is an Oka manifold if and only if Z is an Oka manifold.”

**Sources:**

- [Franc Forstnerič, Stein Manifolds and Holomorphic Mappings (2011)](https://doi.org/10.1007/978-3-642-22250-4)
- [Franc Forstnerič, Oka maps (2010)](https://doi.org/10.1016/j.crma.2009.12.004)

### Holomorphic retracts inherit Oka approximation

**Remember:** Approximate upstairs, then return along the retraction.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ admits uniform approximation there by holomorphic maps on all of ℂⁿ.

**Problem.** A holomorphic retract of an Oka manifold X is Oka. A retract Y has holomorphic maps i from Y to X and r back to Y with r ∘ i equal to the identity.

**How the definition helps.** The retraction sends entire approximations of i ∘ f to entire approximations of f, without changing the limiting map (our own). The hard theorem equates convex approximation with the full Oka principle (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “Furthermore, all these Oka properties are pairwise equivalent.”

**Sources:**

- [Franc Forstnerič, Runge approximation on convex sets implies the Oka property (2006)](https://doi.org/10.4007/annals.2006.163.689)

### Isomorphism bundles give holomorphic uniqueness

**Remember:** An isomorphism is a section with invertible values.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** The isomorphism bundle of two equal-rank holomorphic vector bundles collects the invertible linear maps between their fibers at each point. A section chooses one such map at every point.

**Problem.** Topologically isomorphic holomorphic vector bundles over a Stein manifold are holomorphically isomorphic.

**How the definition helps.** Passing to the isomorphism bundle makes a continuous bundle isomorphism exactly a continuous section (our own). Its fibers are copies of the group of invertible complex matrices, which is an Oka manifold (our own). The Oka principle for sections over Stein manifolds deforms the section to a holomorphic one, giving a holomorphic isomorphism (our own).

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the holomorphic and the topological classification of complex vector bundles on X coincide.”

**Sources:**

- [Hans Grauert, Analytische Faserungen über holomorph-vollständigen Räumen (1958)](https://doi.org/10.1007/BF01351803)
- [Mikhail Gromov, Oka’s Principle for Holomorphic Sections of Elliptic Bundles (1989)](https://doi.org/10.2307/1990897)

### Oka interpolation needs continuous extension

**Remember:** First extend continuously, then make the extension holomorphic.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** In the interpolation definition of an Oka manifold, a continuous map from a Stein space can be deformed to a holomorphic map. If it already is holomorphic on a closed complex subvariety, the deformation may fix it there.

**Problem.** A holomorphic map from a closed complex subvariety of a Stein space to an Oka manifold extends holomorphically if it extends continuously.

**How the definition helps.** Interpolation keeps the prescribed values fixed while deforming a continuous extension to a holomorphic one (our own). On the curve zw = 1 in ℂ², projection to z maps the loop \|z\| = 1 once around zero (our own). The loop contracts in ℂ², so this projection cannot extend continuously to ℂ² with values in the punctured plane (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “f: X → Y is a continuous map which is holomorphic on a neighbourhood of K and on X′”

**Sources:**

- [Franc Forstnerič, Stein Manifolds and Holomorphic Mappings (2011)](https://doi.org/10.1007/978-3-642-22250-4)

### Oka products approximate by components

**Remember:** Approximate the components separately, then put them back together.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A complex manifold Y is Oka if it passes the convex approximation test in every dimension n. Each holomorphic map into Y defined near a compact convex set in ℂⁿ admits uniform approximation there by holomorphic maps on all of ℂⁿ.

**Problem.** A finite product of Oka manifolds is Oka.

**How the definition helps.** The convex test splits into independent approximation problems for the component maps (our own). The main theorem establishes that this single test is equivalent to the Oka principle for maps from Stein spaces (our own).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “A complex manifold Y which enjoys CAP has all Oka properties”

**Sources:**

- [Franc Forstnerič, Runge approximation on convex sets implies the Oka property (2006)](https://doi.org/10.4007/annals.2006.163.689)

### A tensor test for complex structures, by the Newlander–Nirenberg theorem

**Remember:** Zero Nijenhuis tensor means honest holomorphic charts.

*True by definition.* MSC 32Q60 (Almost complex manifolds), 53C15. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** An almost complex structure on a manifold is a smooth field J of linear maps on tangent spaces with J² = −1. It is integrable if its Nijenhuis tensor, built from J and Lie brackets of vector fields, is zero. A complex manifold has charts to ℂⁿ whose transition maps are holomorphic.

**Problem.** A manifold with an almost complex structure J has holomorphic charts in which J is multiplication by i exactly when J is integrable.

**How the definition helps.** With this definition, checking for a complex structure is a pointwise tensor computation, not the solution of differential equations. The hard analytic work moves into the Newlander–Nirenberg theorem (1957), which builds holomorphic coordinates from the tensor condition. The definition does not make every question easy. It is still unknown whether the 6-sphere, which has an almost complex structure from the octonions, has an integrable one.

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “Since the existence of an integrable almost complex structure is equivalent to the existence of a complex structure, this is sometimes taken as the definition of a complex structure.”

**Sources:**

- [A. Newlander and L. Nirenberg, Complex analytic coordinates in almost complex manifolds, Annals of Mathematics 65 (1957) 391–404](https://doi.org/10.2307/1970051)

### Constant Milnor number prevents splitting

**Remember:** The tracked point uses the full multiplicity, leaving none for other points.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** At an isolated critical point, the Milnor number is the local degree of the gradient, the map formed by the first derivatives. This degree counts preimages of a nearby regular value with their complex multiplicities.

**Problem.** Suppose a holomorphic family on ℂⁿ has an isolated critical point at zero in every fiber. If its Milnor number there stays constant, no other critical points approach zero.

**How the definition helps.** Local degree counts critical points with positive weights, so a point retaining the full degree leaves none for another point (our own). Conservation of degree keeps the total fixed in a small ball (our own). Milnor’s comparison theorem connects this count to the number of spheres in the nearby fiber (our own).

**Paper or page:** [On deformations of isolated singularity functions](https://arxiv.org/abs/2206.10035v1). It says: “has no coalescing of singular (critical) points if and only if it is μ-constant.”

**Sources:**

- [On deformations of isolated singularity functions](https://arxiv.org/abs/2206.10035v1)

### Jacobian algebras multiply Milnor numbers

**Remember:** Separate variables turn the Jacobian algebra into a tensor product.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** At an isolated critical point, the Jacobian algebra consists of holomorphic functions near the point modulo the ideal generated by the first derivatives. Its complex dimension is the algebraic Milnor number μ.

**Problem.** For holomorphic germs f and g with isolated critical points in disjoint variables, μ(f + g) = μ(f)μ(g).

**How the definition helps.** Separate variables make the Jacobian algebra of the sum the tensor product of the two finite-dimensional algebras (our own). Dimensions therefore multiply (our own). Milnor’s theorem identifies this dimension with the geometric count of spheres in a nearby smooth fiber (our own).

**Wikipedia:** [Milnor number](https://en.wikipedia.org/wiki/Milnor_number). It says: “introduced μ(f) in geometric terms”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Log resolutions give rational thresholds

**Remember:** After resolution each divisor gives one elementary integrability bound.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A log resolution is a proper change of space, invertible off the zero set, that makes f locally a coordinate monomial times a nonvanishing function. Its exceptional components and the transformed zero set lie along coordinate hyperplanes. The complex singularity exponent is the supremum of c for which \|f\|⁻²ᶜ is integrable near zero.

**Problem.** For a nonzero germ vanishing at zero, the exponent is the smallest ratio (k + 1)/m among components mapping over zero with m positive. Here m and k count vanishing orders of the pulled-back function and the Jacobian determinant along that component.

**How the definition helps.** The log resolution replaces the integral by products of one-variable radial integrals (our own). The radial power is integrable exactly when cm &lt; k + 1, so finitely many integer pairs give the threshold (our own). The hard work is the existence of a log resolution (our own).

**Paper or page:** [On diminished multiplier ideal and the termination of flips](https://arxiv.org/abs/2405.11902v4). It says: “is a log resolution of both (X,Δ) and 𝔞 · 𝔮.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Canonical desingularization in characteristic zero by blowing up the maximum strata of a local invariant, 1997](https://doi.org/10.1007/s002220050141)
- [Jean-Pierre Demailly and János Kollár, Semi-continuity of complex singularity exponents and Kähler–Einstein metrics on Fano orbifolds, 2001](https://doi.org/10.1016/s0012-9593(01)01069-2)

### Milnor numbers bound Taylor degrees

**Remember:** A finite Jacobian quotient limits how much of the Taylor series matters.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The Milnor number μ is the dimension of the ring of holomorphic functions near zero modulo the first derivatives of f. A function is right determined to degree k if every function with the same Taylor coefficients through degree k differs by a local coordinate change.

**Problem.** A holomorphic function with an isolated critical point at zero and Milnor number μ is right determined to degree μ + 1.

**How the definition helps.** Isolation gives a finite quotient, so every term of degree at least μ belongs to the derivative ideal (our own). The finite determinacy theorem turns this containment into the stated coordinate change (our own). Without isolation, x² and x² + yᴺ agree through degree N − 1, yet their critical sets have different dimensions (our own).

**Paper or page:** [On Normal Forms of Singular Levi-Flat Real Analytic Hypersurfaces](https://arxiv.org/abs/1003.4999v4). It says: “with Milnor number μ. Then f is right equivalent to”

**Sources:** none listed. No primary source with a working link was found.

### Normalization quotients count branch intersections

**Remember:** Count the defects of the branches and the cost of gluing them.

*Makes the theorem clean to state or prove.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Normalizing a reduced complex curve separates its branches into smooth curves. Its delta invariant δ is the dimension of functions on the normalization modulo functions coming from the original curve.

**Problem.** For plane curve germs C and D with no common branch, δ(C ∪ D) = δ(C) + δ(D) + I(C,D). The intersection multiplicity I(C,D) is the dimension of local functions modulo the two equations.

**How the definition helps.** The quotient counts missing functions in two stages, first on each curve and then where the curves meet (our own). Passing to the separate normalizations gives δ(C) + δ(D) (our own). A pair of functions glues exactly when its difference vanishes modulo both equations together, giving the extra dimension I(C,D) (our own).

**Paper or page:** [Lotuses as computational architectures](https://arxiv.org/abs/2502.17102v1). It says: “δ(A) = ∑<sub>l = 1</sub><sup>r</sup> δ(A<sub>l</sub>) + ∑<sub>l &lt; m</sub> (A<sub>l</sub> · A<sub>m</sub>)<sub>O</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted scaling equates Milnor and Tjurina numbers

**Remember:** Euler’s identity makes the extra Tjurina relation redundant.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV. Level 3: graduate.

**Definition.** A polynomial is weighted homogeneous if positive integer weights give all its monomials the same degree. At an isolated critical point, the Milnor number is the dimension of local holomorphic functions modulo the first derivatives. The Tjurina number also imposes the equation f = 0 in this quotient.

**Problem.** For a weighted homogeneous holomorphic germ with isolated critical point, the Milnor and Tjurina numbers are equal.

**How the definition helps.** The quotient definition of the Milnor number lets us compare two ideals directly, bypassing the geometric count of spheres (our own). Differentiating weighted scaling expresses the degree times f as a sum of coordinate multiples of its derivatives (our own). Thus imposing f changes nothing (our own). Milnor’s theorem identifies the quotient dimension with the sphere count (our own).

**Paper or page:** [On the k-th Milnor and k-th Tjurina Numbers of a Foliation](https://arxiv.org/abs/2510.24868v2). It says: “be an isolated singularity defined by a quasi-homogeneous polynomial f”

**Sources:**

- [Kyoji Saito, Quasihomogene isolierte Singularitäten von Hyperflächen, 1971](https://doi.org/10.1007/bf01405360)

### Tjurina ideals ignore invertible factors

**Remember:** Include the equation, and the extra derivative terms disappear.

*True by definition. Confidence: medium.* MSC 32S10 (Invariants of analytic local rings), 32B05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The Tjurina ideal of a holomorphic equation f is generated by f and all its first partial derivatives. The Tjurina algebra is the local ring of holomorphic germs modulo that ideal.

**Problem.** Multiplying f by a holomorphic function u that is nonzero at the base point preserves the Tjurina ideal and algebra.

**How the definition helps.** Including f absorbs the extra term f ∂u in the product rule, which the derivatives alone need not absorb (our own argument). Thus the generators for uf belong to the ideal for f. Applying the same calculation to 1/u gives the reverse inclusion.

**Paper or page:** [Computing Regular Meromorphic Differential Forms via Saito's Logarithmic Residues](https://arxiv.org/abs/2007.09950v4). It says: “where (f, ∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ) is the ideal in 𝒪ₓ,ₒ generated by f”

**Sources:** none listed. No primary source with a working link was found.

### Normal surface links detect smoothness

**Remember:** A simply connected link detects a smooth surface only with normality.

*Rules out counterexamples.* MSC 32S25 (Complex surface and hypersurface singularities), 32S05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A complex surface is normal if its local rings are domains containing every fraction that satisfies a monic polynomial over the ring. Its link at a point is the intersection with a sufficiently small sphere centered there.

**Problem.** A normal complex surface germ with simply connected link is smooth.

**How the definition helps.** Normality excludes the singular image of (u,v) ↦ (u,v²,v³,uv), whose local ring omits the integral fraction v (our own). The map is injective, and the image norm increases along each parameter ray, giving a three-sphere as link (our own). Mumford’s theorem supplies the smoothness criterion for normal surfaces (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “the link of x is simply connected if and only if x is a smooth point of W.”

**Sources:**

- [David Mumford, The topology of normal singularities of an algebraic surface and a criterion for simplicity, 1961](https://doi.org/10.1007/bf02698717)

### Embedded resolutions make equations monomial

**Remember:** A smooth strict transform can still touch an exceptional curve.

*Rules out counterexamples.* MSC 32S45 (Modifications; resolution of singularities (complex-analytic aspects)), 32S05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** An embedded resolution of a plane curve uses blowups, which replace points by their tangent directions. The resulting curve together with every exceptional curve must locally be a union of distinct coordinate axes.

**Problem.** After an embedded resolution of a reduced plane curve, the pullback of a defining equation is a unit times a coordinate monomial at every point.

**How the definition helps.** The coordinate axes account for every zero of the pulled-back equation, leaving a nonvanishing factor after division by their powers (our own). One blowup makes the cusp y² = x³ smooth but tangent to the exceptional curve (our own). Embedded resolution removes that tangency as well (our own).

**nLab:** [resolution of singularities](https://ncatlab.org/nlab/show/resolution+of+singularities). It says: “which is an isomorphism away from the singular locus.”

**Paper or page:** [The existence of valuative interpolation](https://arxiv.org/abs/2510.22244v1). It says: “simultaneously have only normal crossings.”

**Sources:**

- [Edward Bierstone and Pierre D. Milman, Canonical desingularization in characteristic zero by blowing up the maximum strata of a local invariant, 1997](https://doi.org/10.1007/s002220050141)

### Conjugation reverses real monodromy

**Remember:** Conjugation reverses the loop that defines the return map.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** The geometric monodromy is the return map T obtained by transporting a nearby smooth fiber once around zero counterclockwise. Maps related by a continuous deformation through diffeomorphisms define the same class. For a real equation and a real fiber value, complex conjugation restricts to a map c of the fiber.

**Problem.** For an isolated complex hypersurface singularity given by a real equation, T is the product (T ∘ c) ∘ c. Each factor squares to the identity up to deformation.

**How the definition helps.** Geometric transport follows an oriented loop, so conjugating the transport gives transport around the reversed loop (our own). Hence c ∘ T ∘ c = T⁻¹ up to deformation, and both factors square to the identity (our own). Milnor’s fibration supplies the geometric transport behind this symmetry, which the homology action alone does not specify (our own).

**Paper or page:** [Plane curve singularities via divides](https://arxiv.org/abs/2503.10424v1). It says: “is the composition of two involutions of the fiber Fδ, δ ∈ ℝ, namely”

**Sources:**

- [Plane curve singularities via divides](https://arxiv.org/abs/2503.10424v1)

### Isolation forces middle dimensional spheres

**Remember:** An isolated critical point keeps the vanishing homology in the middle.

*Rules out counterexamples.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic function has an isolated critical point at zero if all first derivatives vanish there and have no other common zero nearby. For f(0) = 0, its Milnor fiber is a small nonzero level inside a sufficiently small ball, with the ball chosen first.

**Problem.** For such a function on ℂⁿ⁺¹, the Milnor fiber has the homotopy type of finitely many n-spheres joined at one point.

**How the definition helps.** Isolation excludes xy on ℂ³, whose critical line gives a fiber homotopy equivalent to a circle (our own). That fiber is not a wedge of two-spheres (our own). Milnor’s bouquet theorem supplies the claimed homotopy type when the critical point is isolated (our own).

**nLab:** [Milnor fiber](https://ncatlab.org/nlab/show/Milnor+fiber). It says: “with an isolated singularity at zero”

**Wikipedia:** [Milnor number](https://en.wikipedia.org/wiki/Milnor_number). It says: “has the same homotopy type as a bouquet”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Transverse boundaries give Milnor bundles

**Remember:** Check the sphere as well as the interior to get a bundle.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 3: graduate.

**Definition.** A Milnor tube restricts a holomorphic function near an isolated critical point to a small closed ball and a disk around its critical value. Choose the disk so every other level is smooth and meets the boundary sphere transversely. This means their tangent spaces together span the ambient space.

**Problem.** Over the punctured disk, a Milnor tube is a smooth fiber bundle with boundary. Near each nonzero value it is smoothly a product, including along the fiber boundary.

**How the definition helps.** The closed ball makes the restricted map proper, and the boundary condition gives full derivative rank even on the sphere (our own). Ehresmann’s theorem then gives local products, including their boundaries (our own). An arbitrary ball and disk need not work together (our own). Milnor’s transversality theorem supplies compatible radii (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “is a locally trivial fiber bundle with fibers diffeomorphic to the Milnor fiber.”

**Sources:**

- [John Milnor, Singular Points of Complex Hypersurfaces, 1968](https://doi.org/10.1515/9781400881819)

### Duality preserves perverse sheaves

**Remember:** Duality trades the two vanishing bounds.

*True by definition. Confidence: medium.* MSC 32S60 (Stratifications; constructible sheaves; intersection cohomology (complex-analytic aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** Choose a decomposition into smooth pieces, called a Whitney stratification, with compatible limiting tangent spaces. Use a bounded complex of sheaves whose cohomology along each piece is locally constant and finite-dimensional over ℂ. On a piece of complex dimension d, middle perversity requires ordinary restriction to have zero cohomology above degree −d. Restriction with support along that piece must have zero cohomology below −d.

**Problem.** Verdier duality, the duality exchanging ordinary restriction and restriction with support, preserves middle perverse sheaves on a complex analytic space.

**How the definition helps.** The two restriction tests exchange places under duality, so their combination gives a symmetric definition. In our own argument, duality on a stratum of complex dimension d sends degree k to −2d − k. This exchanges the two sides of −d. The exchange identities for Verdier duality supply the work.

**Paper or page:** [A note on the support and cosupport conditions for a perverse sheaf](https://arxiv.org/abs/2207.02566v1). It says: “(new support) for all m ≥ 0, for all k &gt; −m, Hᵏ(uₘ\* A•) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Complex tangents make Levi signs intrinsic

**Remember:** Restrict to complex tangents before testing the Hessian.

*True by definition. Confidence: medium.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A smooth defining function vanishes on the boundary with nonzero gradient and is negative inside. Its Levi form restricts the matrix of mixed complex second derivatives to tangent vectors that remain tangent after multiplication by i.

**Problem.** Whether a smooth boundary has nonnegative Levi form is independent of its defining function.

**How the definition helps.** Testing only complex tangent vectors removes the terms that could change the sign of the full matrix of second derivatives. Two smooth defining functions differ locally by a smooth positive factor. In our own product rule calculation, each derivative of that factor multiplies the vanishing defining function or a vanishing tangential derivative. Only the positive factor times the original Levi form remains.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “for every p ∈ ∂G and w in the complex tangent space at p”

**Sources:** none listed. No primary source with a working link was found.

### Exhaustions survive holomorphic inverse images

**Remember:** Add the source exhaustion to the exhaustion pulled back from the target.

*True by definition.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A plurisubharmonic exhaustion is a continuous real function with compact closed sublevels that satisfies the subharmonic mean inequality on holomorphic disks. A domain with such a function is pseudoconvex.

**Problem.** For a holomorphic map from a pseudoconvex domain, each component of the inverse image of a pseudoconvex open domain is pseudoconvex.

**How the definition helps.** Adding the source exhaustion to the target exhaustion composed with the map gives a function that passes the disk test. Both terms are bounded below, so a closed sublevel confines the points and their images to compact subsets of their respective domains. Our own proof uses the exhaustion criterion in place of boundary tests.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Exhaustions trap disks away from boundaries

**Remember:** A bound on disk rims is a bound on whole disks.

*True by definition.* MSC 32T05 (Domains of holomorphy). arXiv math.CV. Level 3: graduate.

**Definition.** A plurisubharmonic exhaustion is a continuous real function with compact closed sublevel sets that satisfies the subharmonic mean inequality along holomorphic disks. A domain admitting such a function is pseudoconvex.

**Problem.** In a pseudoconvex domain, all holomorphic disks whose rims lie in a fixed compact subset lie in a single compact subset. The disks take their values in the domain and extend continuously to their rims there.

**How the definition helps.** The maximum principle bounds the exhaustion on every disk by its maximum on the common compact set of rims. The corresponding closed sublevel contains all the disks. Our own proof uses the exhaustion criterion for pseudoconvexity in place of holomorphic nonextension.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “plurisubharmonic functions satisfy the maximum principle”

**Paper or page:** [On Segre-degenerate Levi-flat hypervarieties](https://arxiv.org/abs/2306.07259v2). It says: “Then D lifts to the envelope of holomorphy, that is, any f ∈ 𝒪(Ω) can be analytically continued to a neighborhood of D.”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Exhaustions yield smooth pseudoconvex subdomains

**Remember:** Cut a smooth strict exhaustion at regular values.

*True by definition.* MSC 32T05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A pseudoconvex domain has a continuous plurisubharmonic exhaustion, a function with compact closed sublevels that satisfies the mean inequality along complex lines. A smooth exhaustion is strictly plurisubharmonic if its matrix of mixed complex second derivatives is positive definite.

**Problem.** Every pseudoconvex domain in ℂⁿ is an increasing union of relatively compact domains with smooth strongly pseudoconvex boundaries. On these boundaries the complex second derivative matrix is positive on nonzero complex tangent vectors.

**How the definition helps.** Cutting a smooth strict exhaustion at a regular value gives a smooth boundary with positive complex curvature. The main work is replacing the continuous exhaustion by a smooth plurisubharmonic one, then adding \|z\|² for strictness. Sard’s theorem gives arbitrarily large regular values, where the gradient stays nonzero on the level. Our own construction takes the components containing a fixed point, which eventually contain every path from that point.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “This is because once we have a φ as in the definition we can actually find a C∞ exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Log radius tests Hartogs pseudoconvexity

**Remember:** In the fiber direction, distance at the center equals the radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T05 (Domains of holomorphy), 32T35. arXiv math.CV. Level 3: graduate.

**Definition.** A complete Hartogs domain consists of pairs (z,w) with z in a base domain and \|w\| &lt; exp(−u(z)) for a continuous real function u. Plurisubharmonic functions satisfy the subharmonic mean inequality on complex lines.

**Problem.** Over a pseudoconvex base in ℂⁿ, this domain is pseudoconvex exactly when its negative logarithmic radius u is plurisubharmonic.

**How the definition helps.** The distance from each disk center to its rim gives the radius in one fixed complex direction. Oka’s directional distance theorem makes its negative logarithm plurisubharmonic on the centers of a pseudoconvex domain. Conversely, add −log(1 − \|w\| exp(u(z))) to a plurisubharmonic exhaustion of the base, a function with compact closed sublevels. In our own construction, increasing convex composition preserves plurisubharmonicity, and the added term diverges at the rim.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Paper or page:** [Oka tubes in holomorphic line bundles](https://arxiv.org/abs/2310.14871v4). It says: “Then, the (pseudoconcave) Hartogs domain Ω = {(z,t) ∈ ℂⁿ × ℂ: \|t\| &lt; φ(z)} is an Oka domain.”

**Sources:**

- [Kiyoshi Oka, Sur les fonctions analytiques de plusieurs variables IX. Domaines finis sans point critique intérieur, Japanese Journal of Mathematics 23 (1953), 97–155.](https://doi.org/10.4099/jjm1924.23.0_97)

### Pseudoconvex tubes have convex bases

**Remember:** For a tube, complex-line subharmonicity becomes real convexity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T05 (Domains of holomorphy), 32E40. arXiv math.CV. Level 3: graduate.

**Definition.** A tube consists of all complex points whose real parts lie in a given connected open set, its base. On a proper tube, boundary distance equals the real distance from the base point to the base boundary.

**Problem.** A tube is a domain of holomorphy exactly when its base is convex.

**How the definition helps.** On a tube, the negative logarithm of boundary distance depends only on real parts, so plurisubharmonicity gives local convexity on the base. Adding the squared norm gives a real function with compact closed sublevels. Their connected components are closed and locally convex, hence convex by the local convexity theorem. Our own proof puts each path in one such component, while the converse follows because every convex tube is a domain of holomorphy.

**Wikipedia:** [Tube domain](https://en.wikipedia.org/wiki/Tube_domain). It says: “Tubes over convex sets are domains of holomorphy.”

**Sources:** none listed. No primary source with a working link was found.

### Strict pseudoconvexity excludes boundary disks

**Remember:** A boundary disk would have zero curvature in its complex tangent direction.

*Rules out counterexamples. Confidence: medium.* MSC 32T15 (Strongly pseudoconvex domains), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A smooth boundary is strongly pseudoconvex if its defining function has positive complex Hessian on each nonzero complex tangent vector. The function vanishes on the boundary with nonzero gradient and is negative inside. A tangent vector is complex tangent if multiplying it by i preserves tangency.

**Problem.** The boundary of a strongly pseudoconvex domain contains no nonconstant holomorphic disk, meaning a holomorphic image of the unit disk.

**How the definition helps.** A disk in the boundary makes the defining function identically zero along the disk. At a point with nonzero derivative, the chain rule gives a positive Laplacian by strong pseudoconvexity. Our own argument uses the contradiction with the zero Laplacian of a constant function.

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “for every p ∈ ∂G and w in the complex tangent space at p”

**Sources:** none listed. No primary source with a working link was found.

### Strong pseudoconvexity bounds boundary values by Neumann energy

**Remember:** Positive tangential curvature makes the boundary term a trace bound.

*Makes the theorem clean to state or prove.* MSC 32T15 (Strongly pseudoconvex domains). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** A boundary equation vanishes on the boundary, is negative inside, and has nonzero boundary gradient. Strong pseudoconvexity means its matrix of mixed complex second derivatives is positive on every nonzero complex tangent vector.

**Problem.** On a smooth bounded strongly pseudoconvex domain, the squared boundary L² norm of a smooth (0,1)-form is bounded by a constant times its ∂̄-Neumann energy. The form must satisfy the adjoint boundary condition, which sets its complex normal coefficient to zero.

**How the definition helps.** Tangential positivity controls every surviving boundary coefficient because the adjoint condition eliminates the normal one (our own). Compactness of the boundary makes the positive lower bound uniform (our own). The unweighted integration-by-parts identity bounds the resulting boundary integral by the energy (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “‖Tϕ\*α‖₁² + ‖Sϕα‖₃²”

**Sources:**

- [J. J. Kohn, Harmonic integrals on strongly pseudo-convex manifolds, I (1963)](https://doi.org/10.2307/1970506)

### The Levi polynomial gives a local holomorphic peak

**Remember:** The Levi polynomial separates holomorphic terms from the curvature that controls their real part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32T15 (Strongly pseudoconvex domains), 32T40. arXiv math.CV. Level 3: graduate.

**Definition.** At a boundary point p, take a real boundary equation ρ that is negative inside and has nonzero gradient. Its Levi polynomial collects the holomorphic linear and quadratic terms of its Taylor expansion about p, with zero constant term.

**Problem.** Each point of a C² strongly pseudoconvex boundary has a local holomorphic peak function. It equals one at that point and has modulus below one everywhere else on the nearby closure.

**How the definition helps.** The Levi polynomial collects the holomorphic terms while leaving the positive complex Hessian to control their real part (our own). Strong pseudoconvexity gives positivity on complex tangents, and changing the boundary equation supplies positivity in all directions (our own). Taylor’s formula then gives negative real part away from p on the nearby closure, so exponentiation produces the peak (our own).

**Paper or page:** [A Solution Operator for the ∂̄ Equation in Sobolev Spaces of Negative Index](https://arxiv.org/abs/2111.09245v2). It says: “is strictly plurisubharmonic in a neighborhood ω of bΩ”

**Sources:** none listed. No primary source with a working link was found.

### Disk tests make pullback plurisubharmonic

**Remember:** A holomorphic map sends a test disk to another test disk.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 3: graduate.

**Definition.** A function is upper semicontinuous if its upper limit at each point never exceeds its value there. Call it plurisubharmonic if it also passes the following test on every holomorphic map from the unit disk. On every closed subdisk, the composite’s center value must not exceed its boundary average. Allow the constant function −∞.

**Problem.** Pullback along a holomorphic map preserves plurisubharmonicity when functions identically equal to −∞ are allowed.

**How the definition helps.** In our own proof, composing a test disk with the given holomorphic map produces another test disk. Composition with a continuous map also preserves upper semicontinuity. The work in the alternative Euclidean definition is proving that tests on straight complex lines imply all disk tests.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic, where Δ ⊂ ℂ denotes the unit disk.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperconvexity rules out invisible boundaries

**Remember:** A plurisubharmonic exhaustion provides a barrier at every boundary point.

*Rules out counterexamples. Confidence: medium.* MSC 32U10 (Plurisubharmonic exhaustion functions), 32U35, 32W20. arXiv math.CV. Level 3: graduate.

**Definition.** A bounded domain is hyperconvex if it has a negative continuous plurisubharmonic function whose negative sublevel sets have compact closure inside. Plurisubharmonic functions are upper semicontinuous and satisfy the disk mean inequality on complex lines. The Green function with pole a is the largest nonpositive such function bounded above near a by log\|z − a\| plus a constant.

**Problem.** On a bounded hyperconvex domain, the Green function with an interior pole tends to zero at every boundary point.

**How the definition helps.** The exhaustion tends to zero at the boundary and gives a lower bound there after scaling and pasting to a logarithmic pole. In our own comparison, deleting the center of a ball leaves its Green function unchanged for a pole elsewhere. Bounded-above tests extend across the puncture, where the ball’s Green function is strictly negative.

**Paper or page:** [Pluricomplex Green Functions on Stein Manifolds and Certain Linear Topological Invariants](https://arxiv.org/abs/2112.13212). It says: “There exists a negative plurisubharmonic function on M that has a relatively compact sublevel set containing ζ₀.”

**Sources:**

- [Jean-Pierre Demailly, Mesures de Monge-Ampère et mesures pluriharmoniques](https://doi.org/10.1007/BF01161920)

### Maxima preserve pseudoconvex intersections

**Remember:** The larger exhaustion keeps points away from both boundaries.

*True by definition.* MSC 32U10 (Plurisubharmonic exhaustion functions), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A domain in ℂⁿ is pseudoconvex if it has a continuous plurisubharmonic exhaustion. An exhaustion has compact closed sublevel sets. Plurisubharmonic means that on each complex line the value at a disk center is at most its circular average.

**Problem.** Each connected component of a finite intersection of pseudoconvex domains is pseudoconvex.

**How the definition helps.** Taking the maximum combines the exhaustions into one test for all the boundaries (our own). Its closed sublevel sets are intersections of compact sublevel sets and remain compact on each component (our own). The maximum also satisfies the disk mean inequality (our own). The Levi problem identifies these domains with domains supporting a holomorphic function that cannot extend across any boundary point (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “In other words, a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Current densities make Lelong numbers add

**Remember:** Hessian masses add before the radius goes to zero.

*True by definition.* MSC 32U25 (Lelong numbers), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** For a plurisubharmonic function u, its distributional Laplacian is a positive measure μ. The Lelong number at a is the limiting ratio μ(B(a,r))/r²ⁿ⁻² as r decreases to zero, times a dimensional constant. Choose the constant so that log\|z − a\| has Lelong number one.

**Problem.** For two plurisubharmonic functions, each finite somewhere on the domain, the Lelong number of their sum equals the sum of their Lelong numbers.

**How the definition helps.** The density definition adds the two ball masses before taking the limit. In our own comparison, the equivalent logarithmic definition involves a lower limit, which generally does not distribute over sums. Lelong’s monotonicity formula gives existence of the density, and the growth theorem identifies it with logarithmic growth.

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “Similarly a plurisubharmonic function also has a Lelong number at a point.”

**Sources:**

- [Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter III](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

### Logarithmic growth gives vanishing order

**Remember:** Compare the first nonzero Taylor term with the logarithm of distance.

*True by definition.* MSC 32U25 (Lelong numbers), 32A60. arXiv math.CV. Level 3: graduate.

**Definition.** A plurisubharmonic function is upper semicontinuous and satisfies the disk mean inequality on complex lines. Its Lelong number at a point is the lower limit of its value divided by the logarithm of distance to that point. For a hypersurface, an alternative measures its local area density, counting multiplicities.

**Problem.** If a nonzero holomorphic function vanishes to order m at a point, the Lelong number of its logarithmic modulus there is m.

**How the definition helps.** The logarithmic definition reads vanishing order directly from the first nonzero Taylor term (our own). If this term has degree m, the modulus is at most a constant times the mth power of distance (our own). Taking logarithms and dividing by the negative logarithm of distance gives a lower limit at least m (our own). Along a line where the leading term is nonzero, the ratio tends to m (our own). The Lelong–Poincaré and density formulas identify the result with the area density of the zero set counted with multiplicity (our own).

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “The Lelong number of a plurisubharmonic function φ at a point x of ℂⁿ is liminf<sub>z→x</sub> φ(z)/log \|z−x\|.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic growth handles Lelong minima

**Remember:** A negative logarithm turns the maximum into a minimum.

*True by definition.* MSC 32U25 (Lelong numbers), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** For an upper semicontinuous function u satisfying the disk mean inequality on complex lines, its Lelong number at a measures logarithmic growth. It equals the lower limit of u(z)/log\|z − a\| as z approaches a.

**Problem.** The Lelong number of max(u,v) equals the smaller of the two Lelong numbers at the same point.

**How the definition helps.** The growth definition divides by a negative logarithm, turning the pointwise maximum into a minimum. In our own proof, taking the lower limit commutes with a minimum of two functions. The equivalence with the alternative definition by densities of Laplacian measures requires the growth theorem.

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “The Lelong number of a plurisubharmonic function φ at a point x of ℂⁿ is liminf<sub>z→x</sub> φ(z)/log \|z−x\|.”

**Sources:**

- [Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter III](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

### Degree scaling bounds polynomial pullbacks

**Remember:** Pull the test back and divide by the degree.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** The extremal function V(E) of a compact set E is the supremum of plurisubharmonic functions u that are nonpositive on E. Such functions are upper semicontinuous and satisfy the disk mean inequality on each complex line. The tests must also satisfy u(z) ≤ log\|z\| + C for large \|z\|, with C depending on u.

**Problem.** For a polynomial map h of degree d ≥ 1, V(h(E))(h(w)) ≤ d V(E)(w) at every point w.

**How the definition helps.** In our own proof, composing a target test with h multiplies its logarithmic growth bound by at most d. Dividing by d therefore gives a source test. Siciak’s theorem identifies this supremum with the alternative one formed from logarithms of polynomials.

**Paper or page:** [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171). It says: “Then, for every w ∈ ℂᵏ, L<sub>h(E)</sub>(h(w)) ≤ d · L<sub>E</sub>(w).”

**Sources:**

- [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171)
- [Józef Siciak, Extremal plurisubharmonic functions in ℂⁿ, Annales Polonici Mathematici 39 (1981), 175–211](https://doi.org/10.4064/ap-39-1-175-211)

### Green envelopes are maximal off-pole

**Remember:** A local improvement would improve the whole envelope.

*True by definition.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32W20. arXiv math.CV. Level 3: graduate.

**Definition.** A bounded domain is hyperconvex if it admits a negative continuous plurisubharmonic function whose negative sublevel sets have compact closure inside. Plurisubharmonic functions satisfy the disk mean inequality on complex lines and are upper semicontinuous. The Green function with pole a is the largest nonpositive such function bounded above near a by log\|z − a\| plus a constant.

**Problem.** On a bounded hyperconvex domain, the Green function has zero Monge–Ampère measure, the top power of its complex Hessian, away from its pole.

**How the definition helps.** The largest admissible function cannot be raised locally away from its pole. In our own proof, taking a maximum pastes any local improvement respecting the boundary values into a global competitor. The Green function is locally bounded away from its pole. Bedford and Taylor identify this comparison property with the zero-measure equation.

**Paper or page:** [The pluricomplex Poisson kernel for convex finite type domains](https://arxiv.org/abs/2509.26230). It says: “Then u is maximal if and only if (ddᶜu)ⁿ = 0.”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Jean-Pierre Demailly, Mesures de Monge-Ampère et mesures pluriharmoniques](https://doi.org/10.1007/BF01161920)

### Logarithmic poles make Green functions contract

**Remember:** A holomorphic pullback keeps the logarithmic pole bound.

*True by definition. Confidence: medium.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 3: graduate.

**Definition.** On a bounded complex domain D, the pluricomplex Green function G(z,a) is the supremum of nonpositive plurisubharmonic tests u(z). These upper semicontinuous functions satisfy the disk mean inequality on complex lines and obey u(z) ≤ log\|z − a\| + C near a.

**Problem.** For a holomorphic map F between bounded complex domains D and E, the Green function of E at (F(z),F(a)) never exceeds D’s at (z,a).

**How the definition helps.** The logarithmic bound survives composition because F is locally Lipschitz at a. In our own proof, each target test pulls back to a source test or to the constant −∞. Taking the supremum gives the inequality. Identifying this envelope with the alternative formula using holomorphic disks is a separate theorem.

**Paper or page:** [Pluricomplex Green Functions on Stein Manifolds and Certain Linear Topological Invariants](https://arxiv.org/abs/2112.13212). It says: “M possesses a semi-proper pluricomplex Green function with a strict logarithmic pole at ζ₀.”

**Sources:**

- [Maciej Klimek, Invariant pluricomplex Green functions](https://doi.org/10.4064/-31-1-207-226)

### Logarithmic derivatives add zero divisors

**Remember:** The logarithm turns products into sums of zero currents.

*True by definition. Confidence: medium.* MSC 32U40 (Currents), 32A60. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The zero divisor counts the vanishing order on each irreducible hypersurface, a component of complex codimension one. Its current integrates smooth test forms over these components with those multiplicities. Locally the same current is (i/π)∂∂̄ log \|f\|, where derivatives act by integration against derivatives of test forms.

**Problem.** On a connected complex manifold, the zero current of a product of two nonzero holomorphic functions equals the sum of their zero currents.

**How the definition helps.** In our own argument the logarithm changes a product into a sum, and differentiation preserves sums. The local Poincaré–Lelong formula identifies this derivative with the geometric zero current. The quoted theorem gives a version on a domain with boundary.

**Paper or page:** [Induced Fubini-Study metrics on strictly pseudoconvex CR manifolds and zeros of random CR functions](https://arxiv.org/abs/2401.09143v1). It says: “(\[Div(f)\], ψ) = (i/π) ∫₍G₎ ∂∂̄ log(\|f\|) ∧ ψ”

**Sources:** none listed. No primary source with a working link was found.

### Analytic data avoid Lewy’s obstruction

**Remember:** Analytic forcing lets a noncharacteristic real slice determine a local solution.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** On Im w=\|z\|² write z=x+iy and t=Re w. The tangential Cauchy–Riemann equation uses L=∂/∂z̄−iz∂/∂t, where ∂/∂z̄=(∂/∂x+i∂/∂y)/2. A real analytic forcing term f has a convergent power series in x, y, and t near each point.

**Problem.** The equation Lu = f has a local analytic solution for every real analytic f. This fails for general smooth f.

**How the definition helps.** Convergence of the forcing series allows the Cauchy–Kovalevskaya theorem to produce an analytic solution. In our own coordinate check, the coefficient of ∂/∂x is 1/2, so the equation determines that derivative from data along x=0. Lewy’s example gives smooth forcing for which no local solution exists.

**Wikipedia:** [Lewy's example](https://en.wikipedia.org/wiki/Lewy%27s_example). It says: “Note that if F is analytic, then the Cauchy–Kovalevskaya theorem implies that there exists a solution.”

**Sources:**

- [Hans Lewy, An Example of a Smooth Linear Partial Differential Equation Without Solution (1957)](https://doi.org/10.2307/1970121)

### Compatible maps pull back solutions

**Remember:** Preserve the allowed directions and the equations pull back.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann structure specifies antiholomorphic tangent directions, the directions that differentiate every local solution to zero. A map is compatible if its derivative carries those directions into the corresponding target directions.

**Problem.** Suppose differentials of local target solutions have precisely the antiholomorphic directions as their common kernel. A smooth map is compatible exactly when it pulls all local target solutions back to solutions.

**How the definition helps.** The chain rule translates the test on functions into the test on tangent directions. Target solutions detect every failure of compatibility because their differentials have the specified common kernel. Finding enough independent local solutions is the separate existence problem.

**Paper or page:** [Regularity of infinitesimal automorphisms of involutive structures](https://arxiv.org/abs/2506.24105). It says: “the function h⁎f = f ∘ h is a solution of 𝒱.”

**Sources:**

- [Bernhard Lamel and Nicholas Braun Rodrigues, Regularity of infinitesimal automorphisms of involutive structures (arXiv:2506.24105v1)](https://arxiv.org/abs/2506.24105)

### Connection uniqueness makes curvature natural

**Remember:** A map preserving the defining data cannot change the canonical connection.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** On a strictly pseudoconvex Cauchy–Riemann manifold, let θ be a positive contact form and J the complex structure on H=ker θ. The Tanaka–Webster connection preserves H, J, dθ, and the field T specified by θ(T)=1 and dθ(T,·)=0. Its torsion τ, antisymmetrized covariant differentiation minus the bracket, satisfies τ(X,Y)=dθ(X,Y)T and τ(T,JX)=−Jτ(T,X) for X,Y in H.

**Problem.** A diffeomorphism preserving the positive contact form and the complex structure on its kernel preserves the Tanaka–Webster connection and its curvature.

**How the definition helps.** The defining conditions determine one connection, so our own proof avoids transforming its coordinate coefficients. Pullback preserves every condition, and uniqueness identifies the pulled-back connection with the original one. Curvature then agrees because it is computed from the connection. The Tanaka–Webster theorem proves existence and uniqueness.

**Paper or page:** [On the second coefficient of the asymptotic expansion of Boutet de Monvel--Sjöstrand](https://arxiv.org/abs/2012.15456). It says: “there exists an unique affine connection, called Tanaka–Webster connection”

**Sources:**

- [S. M. Webster, Pseudo-Hermitian structures on a real hypersurface (1978)](https://doi.org/10.4310/jdg/1214434345)

### Holomorphic maps preserve Segre varieties

**Remember:** A mapping identity on the real hypersurface lifts to its complexified equation.

*True by definition. Confidence: medium.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A smooth real analytic hypersurface has a real-valued analytic defining function ρ with nonzero gradient. Treat the conjugate variables in its power series as independent. The Segre variety Q(w) consists of nearby z satisfying ρ(z,w̄)=0.

**Problem.** A holomorphic map sending one such hypersurface into another sends each nearby Segre variety into the Segre variety of the image point, locally.

**How the definition helps.** Our own proof uses the polarized equation to turn preservation of real points into preservation of Segre varieties. The analytic implicit function theorem makes the source defining function a real coordinate. Since the target defining function composed with the map vanishes on the source, it contains that coordinate as a factor. Polarizing this factorization proves the inclusion.

**Paper or page:** [Orthogonal pair and a rigidity problem for Segre maps between hyperquadrics](https://arxiv.org/abs/2109.09340). It says: “A local holomorphic Segre map from ℋⁿ into ℋᴺ is a local orthogonal pair from ℙ¹,ⁿ to ℙ¹,ᴺ.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Real Submanifolds in Complex Space and Their Mappings (1999)](https://doi.org/10.1515/9781400883967)

### Involutivity gives the tangential complex

**Remember:** Brackets stay in the bundle, so the exterior derivative descends.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann structure selects complex tangent directions L that meet their conjugates only at zero. Involutivity means that brackets of vector fields in L stay in L. Tangential forms record the values of ordinary complex forms on L.

**Problem.** On an involutive Cauchy–Riemann manifold, exterior differentiation defines a differential on tangential forms, and its square vanishes.

**How the definition helps.** Bracket closure makes exterior differentiation preserve forms that vanish on L, by the exterior derivative formula (our own argument). Thus two extensions of a tangential form give the same tangential derivative. This construction inherits d² = 0 without a second differentiation in local coordinates.

**nLab:** [CR manifold](https://ncatlab.org/nlab/show/CR+manifold). It says: “such that \[L, L\] ⊂ L and L ∩ L̄ = {0}.”

**Sources:** none listed. No primary source with a working link was found.

### Levi flatness gives complex leaves

**Remember:** When mixed brackets stay tangent, the complex planes become leaves.

*Makes the theorem clean to state or prove.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** On a real hypersurface in complex space, the complex tangent planes H consist of tangent vectors whose multiples by i are tangent. Levi flatness means that brackets of holomorphic tangent fields with their conjugate-type partners stay in the complexification of H.

**Problem.** Every smooth Levi-flat hypersurface locally splits into complex hypersurfaces tangent to H.

**How the definition helps.** Our own argument uses Levi flatness to supply exactly the mixed brackets in the Frobenius integrability test. Brackets within each complex type already stay tangent. Frobenius gives real leaves, and projection onto complex tangent coordinates expresses each leaf as a graph satisfying the Cauchy–Riemann equations.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “h(v,w) = (1/2i)\[v,w̄\] mod L ⊕ L̄, v,w ∈ L.”

**Sources:** none listed. No primary source with a working link was found.

### Levi nondegeneracy makes contact planes

**Remember:** Nondegeneracy of the Levi form is nondegeneracy on the contact planes.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** On a smooth real hypersurface in complex space, the complex tangent planes H consist of tangent vectors whose multiples by i are tangent. Choose a local real one-form θ with kernel H. Levi nondegeneracy means that dθ has a nonsingular pairing between the holomorphic tangent directions and their conjugates.

**Problem.** Levi nondegeneracy makes H a contact structure, meaning that dθ has zero kernel on H.

**How the definition helps.** Our own argument uses bracket closure within each complex type to make both same-type blocks of dθ vanish. The mixed blocks therefore detect its entire kernel. This bracket calculation connects the usual complex Hessian test to the contact condition.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “In the strictly pseudoconvex case this bundle defines a contact structure on M, with α a contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Levi rank survives CR equivalence

**Remember:** The Levi form measures the bracket that escapes the complex tangent space.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** A Cauchy–Riemann structure specifies a bundle L of complex tangent directions. Its Levi form takes the bracket of X in L with the conjugate of Y in L and divides by 2i. It keeps only the class modulo L and its conjugate.

**Problem.** A diffeomorphism carrying one hypersurface’s Cauchy–Riemann structure onto another’s preserves the rank of the Levi form.

**How the definition helps.** The bracket definition makes the rank intrinsic because a diffeomorphism transports both brackets and quotient spaces (our own argument). To compare with the complex Hessian of a defining function, differentiate its complex normal one-form on tangent fields. The exterior derivative formula recovers the bracket pairing up to a nonzero scalar.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “h(v,w) = (1/2i)\[v,w̄\] mod L ⊕ L̄, v,w ∈ L.”

**Sources:** none listed. No primary source with a working link was found.

### Polarization makes Segre incidence symmetric

**Remember:** Conjugate the defining equation and exchange the two points.

*True by definition. Confidence: medium.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Take a real-valued analytic defining function ρ for a hypersurface in complex space. In its convergent series, replace the conjugate coordinate z̄ by an independent variable. The Segre variety Q(w) consists of nearby z satisfying ρ(z,w̄)=0.

**Problem.** Near the base point, z lies in Q(w) if and only if w lies in Q(z). A point z lies in Q(z) exactly when it lies on the real hypersurface.

**How the definition helps.** Our own proof uses the polarized equation to replace two incidence tests by one. The real values of the original function make its power series coefficients conjugate when the two exponent lists are exchanged. Thus ρ(z,w̄) and ρ(w,z̄) are conjugates. Setting w=z recovers the original hypersurface.

**Paper or page:** [Orthogonal pair and a rigidity problem for Segre maps between hyperquadrics](https://arxiv.org/abs/2109.09340). It says: “A local holomorphic Segre map from ℋⁿ into ℋᴺ is a local orthogonal pair from ℙ¹,ⁿ to ℙ¹,ᴺ.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Real Submanifolds in Complex Space and Their Mappings (1999)](https://doi.org/10.1515/9781400883967)

### Zero energy identifies Kohn harmonics

**Remember:** Zero energy means both tangential derivatives vanish.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Let D differentiate square-integrable forms along the antiholomorphic tangent directions of a Cauchy–Riemann manifold, using a closed operator domain. Write D⁎ for its Hilbert space adjoint. The Kohn Laplacian is the operator associated with the closed energy form ‖Du‖² + ‖D⁎u‖² on their common domain.

**Problem.** The Kohn Laplacian has kernel exactly where both D and D⁎ vanish. In degree zero this gives the square-integrable Cauchy–Riemann functions in the domain of D.

**How the definition helps.** The energy definition replaces a second-order kernel equation with a sum of squares (our own argument). Testing a kernel element against itself makes both squares vanish. Conversely, both derivatives vanishing makes every energy pairing zero. The closed form theorem identifies this test with membership in the operator kernel.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “Functions that are annihilated by the Kohn Laplacian are called CR functions.”

**Sources:** none listed. No primary source with a working link was found.

### Zero Webster torsion preserves complex tangents

**Remember:** Webster torsion measures the change of the complex structure along the Reeb flow.

*Makes the theorem clean to state or prove.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** On a strictly pseudoconvex Cauchy–Riemann manifold, choose a positive contact form θ whose kernel carries the complex structure J. The Reeb field T satisfies θ(T)=1 and dθ(T,·)=0. Webster torsion is A(X)=τ(T,X), where τ measures the difference between antisymmetrized Tanaka–Webster covariant differentiation and the vector field bracket.

**Problem.** The local flow of T preserves the complex tangent planes and their complex structure exactly when Webster torsion vanishes.

**How the definition helps.** Webster torsion isolates the term left when we differentiate J along the flow (our own calculation). The connection preserves T and J, so the derivative on X equals −A(JX)+JA(X). The torsion identity A(JX)=−JA(X) makes this derivative 2JA(X). The defining equations for T already imply that its flow preserves θ and its kernel.

**Paper or page:** [On the second coefficient of the asymptotic expansion of Boutet de Monvel--Sjöstrand](https://arxiv.org/abs/2012.15456). It says: “τ(T, JU) = −Jτ(T, U)”

**Sources:**

- [S. M. Webster, Pseudo-Hermitian structures on a real hypersurface (1978)](https://doi.org/10.4310/jdg/1214434345)

### Analytic involutivity supplies CR coordinates

**Remember:** Complexify an analytic frame and integrate the resulting holomorphic distribution.

*Rules out counterexamples.* MSC 32V30 (Embeddings of CR manifolds), 32V05. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A real analytic Cauchy–Riemann structure specifies complex tangent directions L with local bases given by convergent real power series. Brackets of fields in L stay in L, and L meets its conjugate only at zero.

**Problem.** Every real analytic Cauchy–Riemann manifold embeds locally into complex Euclidean space with its prescribed antiholomorphic directions. Its real tangent spaces span the ambient tangent spaces over ℂ.

**How the definition helps.** Convergence lets us extend a local basis and its bracket identities holomorphically to independent complex coordinates (our own argument). The holomorphic Frobenius theorem gives coordinate functions whose differentials have precisely the extended directions as common kernel. On the real manifold this kernel contains no nonzero real vector, and the complex differentials remain independent. Nirenberg’s smooth counterexample lacks enough local solutions for an embedding.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “Nirenberg constructs a single, non-vanishing complex vector field P”

**Sources:**

- [Louis Nirenberg, On a question of Hans Lewy (1974)](https://doi.org/10.1070/rm1974v029n02abeh003856)

### Definite Levi form forces type two

**Remember:** A definite mixed quadratic term survives every tangent curve.

*Rules out counterexamples. Confidence: medium.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** For a smooth hypersurface ρ = 0, D’Angelo one-type is the supremum of normalized contact orders over nonconstant holomorphic curves through the point. Each normalized order divides the first nonzero Taylor degree of ρ along the curve by the curve’s first nonconstant degree. A flat composition has infinite order.

**Problem.** A smooth real hypersurface in ℂⁿ, n ≥ 2, has one-type two wherever its Levi form is definite. This form is the complex Hessian of ρ restricted to complex tangent vectors.

**How the definition helps.** Definiteness prevents cancellation of the first mixed term (our own argument). For a curve of order k with tangent leading vector v, the coefficient of tᵏt̄ᵏ is the Levi form evaluated on v. Nontangent curves have normalized contact one, and a complex tangent line attains two. The indefinite hypersurface Im w = \|z₁\|² − \|z₂\|² contains the line (t,t,0).

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “Δ₁(∂Ωꜰ, 0) = ρꜰ.”

**Sources:**

- [John P. D’Angelo, Real Hypersurfaces, Orders of Contact, and Applications (1982)](https://doi.org/10.2307/2007015)

### Finite type makes real solutions constant

**Remember:** If both tangent directions kill a function, their brackets kill it too.

*Rules out counterexamples. Confidence: medium.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** A Cauchy–Riemann function has derivative zero along every antiholomorphic tangent field. Finite bracket type means that those fields, their conjugates, and their repeated brackets span all complexified tangent directions at each point.

**Problem.** Every real-valued smooth Cauchy–Riemann function on a connected manifold of finite bracket type is constant.

**How the definition helps.** Finite bracket type forces the differential to vanish once the function is real (our own argument). Conjugation shows that the conjugate fields also kill the function, and brackets of fields that kill a function kill it too. On the flat hypersurface Im w = 0 in ℂ², Re w gives a nonconstant real solution.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “it is of Bloom-Graham finite type at p”

**Sources:** none listed. No primary source with a working link was found.

### Levi brackets supply the missing direction

**Remember:** One nonzero Levi bracket fills the one missing direction.

*True by definition.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Bracket type counts the shortest length needed for complex tangent fields, their conjugates, and their repeated brackets together to span the complexified tangent space. On a real hypersurface, the Levi form records mixed brackets modulo the fields of both types.

**Problem.** A real hypersurface has bracket type two at p exactly when its Levi form is nonzero at p.

**How the definition helps.** Our own argument uses the bracket description of the Levi form to test the only missing direction. The original fields span a hyperplane, and brackets within each type stay there. Thus one nonzero mixed bracket in the quotient suffices. The comparison with the usual complex Hessian follows by differentiating a one-form that annihilates the complex tangents.

**Wikipedia:** [CR manifold](https://en.wikipedia.org/wiki/CR_manifold). It says: “The Levi form gives the length of the projection of \[v,w̄\] in the T-direction.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized contact ignores curve speed

**Remember:** A branched change of parameter multiplies both orders by the same number.

*True by definition.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** For a smooth hypersurface ρ=0, normalized contact divides the vanishing order of ρ ∘ γ by that of γ−γ(0). Here γ is a nonconstant holomorphic curve starting on the hypersurface. Order means the first nonzero Taylor degree among all components, with infinity for a flat function.

**Problem.** Precomposing a curve by any nonconstant holomorphic change of parameter fixing zero preserves its normalized contact.

**How the definition helps.** Our own argument divides out the factor that a branched parameter introduces into raw contact. A parameter of order k multiplies each finite order by k, since its leading monomial preserves distinct exponent pairs. A flat numerator stays flat.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “Δ₁(M, p) = Δ₁ʳᵉᵍ(M, p) = ρ₁(M,p;(z)).”

**Sources:**

- [John P. D’Angelo, Real Hypersurfaces, Orders of Contact, and Applications (1982)](https://doi.org/10.2307/2007015)

### Pure powers detect finite type

**Remember:** Pure powers bound every curve, and the coordinate axes attain the worst bound.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds). arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** Consider the hypersurface Re w + ∑ \|m(z)\|² = 0, where the m are finitely many nonconstant monomials. A pure power uses only one z coordinate. D’Angelo one-type takes the supremum of vanishing order along holomorphic curves through zero divided by the curve’s first nonconstant Taylor degree.

**Problem.** The hypersurface has finite one-type at zero exactly when every z coordinate has a pure power. Its type then equals twice the largest of the least pure exponents for the individual coordinates.

**How the definition helps.** Pure powers bound contact on every curve because the first mixed terms in a sum of squares cannot cancel (our own proof). If w has smallest vanishing order, the linear term gives contact one. Otherwise a least-order z coordinate’s pure power bounds normalized contact. The coordinate axes attain the stated maximum, and a missing pure power puts an entire axis in the hypersurface.

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “F is convenient (i.e., 𝒩₊(F) intersects all axes).”

**Sources:** none listed. No primary source with a working link was found.

### Real analyticity permits holomorphic flattening

**Remember:** Flat complex leaves need analytic transverse dependence to straighten holomorphically.

*Rules out counterexamples.* MSC 32V40 (Real submanifolds in complex manifolds), 32V05. arXiv math.DG. Level 3: graduate.

**Definition.** A real hypersurface is a smooth submanifold of real codimension one. It is Levi-flat if locally it splits into complex hypersurfaces that vary smoothly in one real parameter. Real analyticity means that local defining equations can be chosen as convergent real power series.

**Problem.** A real analytic Levi-flat hypersurface is locally a real hyperplane in holomorphic coordinates.

**How the definition helps.** Real analyticity allows the family of complex hypersurfaces to extend holomorphically in its real parameter (our own). Straightening the extended family gives the holomorphic coordinates in the theorem (our own). Take the product of a complex coordinate space with a smooth plane curve that fails to be real analytic at one point (our own). This product is Levi-flat (our own). Holomorphic coordinates flattening it there would give a real analytic defining equation with nonzero derivative for the curve (our own).

**Paper or page:** [Levi-flats in ℂℙⁿ: a survey for nonexperts](https://arxiv.org/abs/2501.15710v2). It says: “If p∈M⊂ℂⁿ is a real analytic Levi flat hypersurface, then there exists a neighbourhood U of p in ℂⁿ and a biholomorphic map”

**Sources:** none listed. No primary source with a working link was found.

### A weaker norm detects Neumann compactness

**Remember:** A small energy term leaves only a compact error.

*Makes the theorem clean to state or prove.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** Write Q(u) for the sum of squared L² norms of the antiholomorphic derivative ∂̄u and its Hilbert adjoint derivative ∂̄\*u. A compactness estimate bounds ‖u‖² by εQ(u) + Cε‖u‖₋₁² throughout their common domain, for each ε &gt; 0. The weaker norm ‖·‖₋₁ tests against functions with one square-integrable derivative and zero boundary values.

**Problem.** On a smooth bounded pseudoconvex domain, this estimate in positive form degree implies compactness of the corresponding ∂̄-Neumann inverse. Here pseudoconvexity means nonnegative boundary curvature in complex tangent directions.

**How the definition helps.** The estimate upgrades convergence in the weaker norm to L² convergence along sequences with bounded energy (our own). Apply it to differences and then let ε decrease to zero (our own). Rellich’s compact embedding supplies the subsequence, and factoring the inverse through the energy inclusion gives compactness (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “Assume that for all ε &gt; 0 there exist a Banach space Zε and a compact linear map Kε”

**Sources:** none listed. No primary source with a working link was found.

### A weighted adjoint brings curvature into the energy

**Remember:** Change the weight, and the adjoint supplies its derivative.

*Makes the theorem clean to state or prove.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** Weight the L² inner product by exp(−ϕ), where ϕ is a smooth real function on a domain in ℂⁿ. The weighted adjoint of the antiholomorphic derivative ∂̄ moves that derivative across this inner product.

**Problem.** For smooth compactly supported (0,1)-forms, the weighted ∂̄ energy dominates the weighted integral of the complex Hessian of ϕ evaluated on the form. The energy adds the squared weighted norms of the derivative and its weighted adjoint.

**How the definition helps.** Moving the weight through the ordinary adjoint introduces first derivatives of ϕ (our own). Integration by parts differentiates them again, giving the complex Hessian, the matrix of mixed complex second derivatives (our own). The remaining interior term is a sum of squares, and compact support removes the boundary term (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “‖Tϕ\*α‖₁² + ‖Sϕα‖₃²”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Closed data characterize solvable ∂̄ equations

**Remember:** Mixed derivatives must agree before a function can have the prescribed derivatives.

*Rules out counterexamples.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** A smooth (0,1)-form f lists the proposed antiholomorphic derivatives of a function. It is ∂̄-closed when ∂̄f = 0, meaning its mixed antiholomorphic derivatives agree in either order.

**Problem.** On a pseudoconvex domain in ℂⁿ, the equation ∂̄u = f has a smooth solution exactly when f is ∂̄-closed. Pseudoconvex domains admit exhaustions by functions that satisfy the submean inequality on each complex line.

**How the definition helps.** Closure collects all the necessary mixed derivative identities into one condition (our own). For example, z̄₁ d z̄₂ fails this test in ℂ² (our own). Hörmander’s existence theorem supplies a weak solution on a pseudoconvex domain, and interior regularity makes it smooth (our own).

**nLab:** [Dolbeault complex](https://ncatlab.org/nlab/show/Dolbeault+complex). It says: “The Dolbeault complex of X is the chain complex”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Hankel operators as least norm solutions

**Remember:** A Hankel operator solves a ∂̄ equation with holomorphic input.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** For a bounded symbol φ, the Bergman Hankel operator sends a square-integrable holomorphic function g to φg minus its orthogonal projection onto the holomorphic functions.

**Problem.** On a smooth bounded pseudoconvex domain, compactness of the ∂̄-Neumann inverse on (0,1)-forms makes this Hankel operator compact for every C¹ symbol on the closure.

**How the definition helps.** Subtracting the projection picks the solution of ∂̄u = g∂̄φ perpendicular to all holomorphic functions (our own). This replaces a direct compactness test on products by a bounded multiplication followed by the least norm solution operator (our own). Compactness of the Neumann inverse implies compactness of that solution operator through its energy estimate (our own).

**Paper or page:** [Big Hankel operators on Hardy spaces of strongly pseudoconvex domains](https://arxiv.org/abs/2102.03999v1). It says: “Then the Hankel operator H<sub>f</sub>=(I-P<sub>B</sub>)M<sub>f</sub> is bounded”

**Sources:**

- [Mehmet Celik, Sonmez Sahutoglu and Emil J. Straube, A sufficient condition for compactness of Hankel operators](https://doi.org/10.7900/jot.2021apr04.2334)

### Orthogonality separates variables in canonical solutions

**Remember:** Solve on one factor and keep the other factors holomorphic.

*True by definition. Confidence: medium.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The canonical solution of ∂̄u = f is the square-integrable solution perpendicular to all square-integrable holomorphic functions. Here ∂̄ takes derivatives in the conjugate complex coordinates.

**Problem.** On a product of smoothly bounded planar domains, suppose a one-factor L² datum is multiplied by square-integrable holomorphic functions on the other factors. Its canonical solution is the one-factor canonical solution times those same functions.

**How the definition helps.** Orthogonality on each slice proves the product formula without evaluating the full solution operator (our own). Differentiation gives the required datum because the other factors are holomorphic (our own). Fubini’s theorem reduces orthogonality against a holomorphic test function to the one-factor condition (our own).

**Paper or page:** [Uniform estimates for the canonical solution to the ∂̄-equation on product domains](https://arxiv.org/abs/2006.14484v2). It says: “where Tⱼ is the canonical solution operator over Dⱼ.”

**Sources:**

- [Uniform estimates for the canonical solution to the ∂̄-equation on product domains](https://arxiv.org/abs/2006.14484v2)

### Representing the Neumann inverse by the energy inclusion

**Remember:** The inverse is compact exactly when bounded energy gives compactness.

*True by definition.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** For a square-integrable differential form u, its ∂̄ energy adds the squared norms of its antiholomorphic derivative ∂̄u and its Hilbert adjoint derivative ∂̄\*u. The energy space consists of forms in both operator domains, with norm equal to the square root of this energy.

**Problem.** On a bounded C⁴ pseudoconvex domain in ℂ², the ∂̄-Neumann inverse on (0,1)-forms is compact exactly when the energy inclusion into L² is compact. Here pseudoconvexity means nonnegative boundary curvature in complex tangent directions.

**How the definition helps.** The energy inner product represents the inverse as JJ\*, where J includes the energy space into L² (our own). This replaces testing solutions of the boundary equation directly (our own). The basic L² estimate justifies the representation, and a Hilbert space operator J is compact exactly when JJ\* is (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “or, equivalently, 𝒥 is compact on D²₍₀,₁₎(Ω)”

**Sources:**

- [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2)

### Testing the adjoint detects the normal boundary coefficient

**Remember:** Testing up to the boundary forces the normal coefficient to vanish.

*Rules out counterexamples.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The maximal antiholomorphic derivative ∂̄ acts on every square-integrable function whose weak ∂̄ derivative is also square integrable. Its Hilbert adjoint tests against that entire domain.

**Problem.** On a smooth bounded domain, a smooth (0,1)-form up to the boundary belongs to the adjoint domain exactly when its complex normal coefficient vanishes there.

**How the definition helps.** Testing against functions with boundary values exposes the normal coefficient in integration by parts (our own). Interior tests alone would admit the constant form d z̄₁ on the unit ball (our own). Smooth approximation extends the integration formula to the maximal domain (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “if and only if ∑ⱼ₌₁ⁿ αⱼ(z) ∂ρ/∂zⱼ(z) = 0”

**Sources:**

- [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3)

### The energy definition gives both Neumann boundary conditions

**Remember:** The form and its ∂̄ derivative must both pass the adjoint test.

*True by definition. Confidence: medium.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The ∂̄-Neumann energy pairs antiholomorphic derivatives and their Hilbert adjoint derivatives in L². Its Laplacian acts on energy-domain forms whose energy pairing with every test form equals an L² inner product with one fixed form.

**Problem.** On a smooth bounded domain, a form smooth up to the boundary belongs to this Laplacian’s domain exactly when two complex normal contractions vanish there. The contractions are those of the form and its antiholomorphic derivative.

**How the definition helps.** The energy domain enforces the adjoint condition on the form before integration by parts begins (our own). Representing the pairing by an L² form enforces the same condition on its derivative (our own). The representation theorem for closed energy forms thus recovers both classical boundary conditions (our own).

**Paper or page:** [∂̄ Sobolev-type inequality and an improved L²-estimate of ∂̄ on bounded strictly pseudoconvex domains](https://arxiv.org/abs/2401.15597v3). It says: “if and only if ∑ⱼ₌₁ⁿ αⱼ(z) ∂ρ/∂zⱼ(z) = 0 for any z ∈ ∂Ω.”

**Sources:**

- [J. J. Kohn, Harmonic integrals on strongly pseudo-convex manifolds, I (1963)](https://doi.org/10.2307/1970506)

### The inverse Hessian measures data for the ∂̄ equation

**Remember:** The Hessian measures tests and its inverse measures data.

*Makes the theorem clean to state or prove.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** For a smooth real weight ϕ, let H be its positive definite matrix of mixed complex second derivatives. The squared dual norm of a coefficient vector f integrates its quadratic form for H⁻¹ against exp(−ϕ) times volume.

**Problem.** On a pseudoconvex domain in ℂⁿ, suppose a (0,1)-form f has zero weak antiholomorphic derivative and finite dual norm. Then ∂̄u = f has a solution whose L² norm with weight exp(−ϕ) is at most that dual norm.

**How the definition helps.** The inverse matrix gives exactly the Cauchy–Schwarz bound paired with the curvature matrix in the energy estimate (our own). Hörmander’s weighted estimate and Hilbert space duality turn this bound into a solution (our own).

**Paper or page:** [A bridge connecting convex analysis and complex analysis and L²-estimate of d and ∂̄](https://arxiv.org/abs/2405.08559v2). It says: “we can solve ∂̄u=f with the estimate”

**Sources:**

- [Lars Hörmander, L² estimates and existence theorems for the ∂̄ operator (1965)](https://doi.org/10.1007/BF02391775)

### Top degree turns the Neumann problem into the Dirichlet problem

**Remember:** In top degree the normal condition kills the whole trace.

*True by definition. Confidence: medium.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 3: graduate.

**Definition.** The ∂̄-Neumann energy adds the squared norms of the maximal antiholomorphic derivative and its Hilbert adjoint. In top degree a form has one coefficient, and the adjoint boundary condition sets its complex normal contraction to zero.

**Problem.** On a smooth bounded domain in ℂⁿ, the top-degree ∂̄-Neumann Laplacian acts on that coefficient as one quarter of the positive Dirichlet Laplacian. Here the coordinate forms d z̄ⱼ are orthonormal, and Dirichlet means zero boundary values.

**How the definition helps.** The normal contraction vanishes exactly when the single coefficient vanishes, since the boundary normal is nonzero (our own). The outgoing derivative vanishes in top degree, and integration by parts makes the energy one quarter of the scalar gradient energy (our own). Closing this energy identifies its domain with the first Sobolev space with zero boundary values (our own).

**Paper or page:** [On compactness and Lᵖ-regularity in the ∂̄-Neumann problem](https://arxiv.org/abs/2009.13391v2). It says: “then f<sub>norm</sub> ∈ W<sup>1,p</sup><sub>0,(0,q−1)</sub>(Ω)”

**Sources:**

- [J. J. Kohn, Potential theory and several complex variables (1963)](https://www.numdam.org/item/ASNSP_1963_3_17_4_373_0/)

### Boundedness prevents infinite mass

**Remember:** Bound the potential before multiplying it by a current.

*Rules out counterexamples.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** Plurisubharmonic functions are upper semicontinuous and satisfy the disk mean inequality on complex lines. Bedford and Taylor construct the Monge–Ampère measure of a locally bounded such function u by repeatedly applying T ↦ ddᶜ(uT), starting with 1. Here ddᶜ takes the complex Hessian, and each intermediate generalized form T has measure coefficients.

**Problem.** The resulting measure has finite mass on compact sets and equals the top power of the ordinary complex Hessian wherever u is smooth.

**How the definition helps.** Local boundedness lets u multiply the measure coefficients at every step of the recursion. In our own account, Kiselman’s example shows what can fail near zero in dimension n ≥ 2. Multiply \|z₂\|² + ⋯ + \|zₙ\|² − 1 by the positive nth root of −log\|z₁\|. Even off the plane z₁ = 0, the smooth density has infinite integral in every small ball about zero.

**Paper or page:** [A variational Approach to complex Hessian equations in ℂⁿ](https://arxiv.org/abs/1301.6502). It says: “Then we can define inductively a closed m-positive current”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Zbigniew Błocki, The domain of definition of the complex Monge–Ampère operator, American Journal of Mathematics 128 (2006), 519–530](https://doi.org/10.1353/ajm.2006.0010)

### Current recursion gives exact products

**Remember:** Multiply the current first and differentiate afterward.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** For a locally bounded plurisubharmonic function u, the complex Hessian ddᶜu is a positive differential form with distribution coefficients. Such a generalized form is called a current. For a closed positive current T, Bedford and Taylor define the product ddᶜu ∧ T by differentiating uT with ddᶜ.

**Problem.** Every mixed product of k such Hessians on a domain in ℂⁿ, with 1 ≤ k ≤ n, equals ddᶜS for some current S.

**How the definition helps.** The recursive definition displays the primitive S as the first potential times the remaining product. In our own comparison, multiplying smooth Hessian matrices does not display this primitive. Bedford and Taylor justify the recursion and prove symmetry for locally bounded potentials.

**Paper or page:** [A variational Approach to complex Hessian equations in ℂⁿ](https://arxiv.org/abs/1301.6502). It says: “we can define inductively a closed m-positive current”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)

### Kähler classes fix Monge–Ampère mass

**Remember:** The top power of a closed form integrates to a cohomology number.

*True by definition. Confidence: medium.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex manifold of dimension n, a Kähler form is a closed positive real form with one ordinary and one conjugate differential. Its smooth Monge–Ampère measure is its n-fold exterior product.

**Problem.** Two Kähler forms in the same cohomology class on a compact complex manifold have equal total Monge–Ampère mass.

**How the definition helps.** Writing the density as an exterior power makes its integral depend only on the cohomology class. In our own proof, closed forms that differ by a derivative represent the same class. Exterior products induce products of classes, so the two top powers also differ by a derivative. Its integral vanishes by Stokes’ theorem. Expanding the exterior power in local coordinates recovers the usual determinant density with the corresponding constant factor.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “Since the 2-form ω is closed, it determines an element in de Rham cohomology”

**Sources:** none listed. No primary source with a working link was found.

### Bergman spans test quadrature maps

**Remember:** Weighted composition sends the constant function to the Jacobian determinant.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** The Bergman span is the finite linear span of vectors representing values and holomorphic derivatives by inner products on square-integrable holomorphic functions. A volume quadrature domain computes every such function’s integral by a fixed finite sum of its values and derivatives.

**Problem.** A holomorphic isomorphism between bounded domains has a volume quadrature domain as its image exactly when its complex Jacobian determinant belongs to the source span.

**How the definition helps.** The constant function one represents integration, so a quadrature identity says precisely that one belongs to the span. In our own argument, composition weighted by the Jacobian preserves inner products and sends one to the Jacobian. The chain rule for the map and its inverse shows that this operation carries one span onto the other.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Legg, Quadrature Domains for the Bergman Space in Several Complex Variables (2018)](https://link.springer.com/article/10.1007/s40315-017-0224-0)

### Constant Bergman invariant gives an Einstein metric

**Remember:** Dividing by the kernel removes one Hessian from the Ricci equation.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** On a bounded domain, the Bergman metric matrix g consists of the mixed complex second derivatives of log K(z,z), where K is the Bergman kernel. The Bergman invariant is B = det(g)/K(z,z).

**Problem.** If B is constant, the Ricci curvature tensor of the Bergman metric equals −g.

**How the definition helps.** Constancy makes log det(g) and log K(z,z) differ by a constant. In our own calculation their mixed second derivatives agree, and the Ricci tensor is minus the matrix of those derivatives. The kernel transformation law shows that B is independent of the choice of holomorphic coordinates.

**Paper or page:** [Kähler-Einstein Bergman metrics on pseudoconvex domains of dimension two](https://arxiv.org/abs/2309.10595v2). It says: “if and only if the Bergman invariant function is constant”

**Sources:**

- [Kähler-Einstein Bergman metrics on pseudoconvex domains of dimension two](https://arxiv.org/abs/2309.10595v2)

### Dual evaluation reveals Bergman plurisubharmonicity

**Remember:** Treat point evaluation as a holomorphic functional on each fiber.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)), 32U05. arXiv math.CV. Level 4: research.

**Definition.** For weight exp(−φ), the diagonal Bergman kernel K(z) is the largest \|f(z)\|² among holomorphic functions with weighted squared integral at most one. Thus K(z) measures the squared norm of evaluation at z. A plurisubharmonic function is upper semicontinuous and subharmonic on complex lines.

**Problem.** Fix z in a bounded pseudoconvex domain Ω, which admits a plurisubharmonic function with relatively compact sublevel sets. For smooth jointly plurisubharmonic φ(t,z) near U×Ω̄, log Kᵗ(z) is plurisubharmonic on the parameter domain U.

**How the definition helps.** The evaluation definition turns kernel variation into variation of the norm of one holomorphic functional. Our own comparison replaces differentiating a sum over an orthonormal basis with a curvature theorem for the weighted spaces. Berndtsson proves the curvature sign that makes the logarithm subharmonic on every complex parameter line.

**Paper or page:** [A Hilbert Bundles Description of Complex Brunn-Minkowski Theory](https://arxiv.org/abs/2305.07476v1). It says: “Then for each z∈Ω, the map U∋t↦log Kᵗ(z) is plurisubharmonic.”

**Sources:**

- [B. Berndtsson, Subharmonicity properties of the Bergman kernel and some other functions associated to pseudoconvex domains (2006)](https://doi.org/10.5802/aif.2223)

### Skew correction recovers Szegő projection

**Remember:** Correct a reproducing projection by its failure to be self-adjoint.

*True by definition.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV, math.FA. Level 4: research.

**Definition.** The Hardy space is the L² boundary closure of holomorphic traces, and S is its orthogonal projection. For a bounded Cauchy–Fantappiè projection C onto the same space, the Kerzman–Stein operator is the difference A = C − C\* from its adjoint.

**Problem.** The orthogonal Szegő projection satisfies S = C(I+A)⁻¹, and the inverse has norm at most one.

**How the definition helps.** Their common range gives SC=C and SC\*=S, hence S(I+A)=C. In our own algebra, skew-adjointness gives a lower bound of one for both I+A and its adjoint, hence invertibility. This recovers the orthogonal projection from a boundary integral projection whose construction requires separate estimates.

**Wikipedia:** [Szegő kernel](https://en.wikipedia.org/wiki/Szeg%C5%91_kernel). It says: “a reproducing kernel on a natural Hilbert space”

**Sources:**

- [Kerzman and Stein, The Szegö kernel in terms of Cauchy-Fantappiè kernels (1978)](https://doi.org/10.1215/S0012-7094-78-04513-1)

### Tangent separation prevents Leray poles

**Remember:** A complex tangent plane must miss every interior point.

*Rules out counterexamples.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** A smooth domain is strictly complex linearly convex if each affine complex tangent plane meets the closure only at its point of tangency. Choose a smooth function ρ that vanishes on the boundary and has nonzero gradient there. The Leray kernel uses the normalized complex differential ∂ρ(w) divided by its value on w−z.

**Problem.** On such a bounded domain the Leray kernel depends holomorphically on the interior point z and reproduces holomorphic functions continuous on the closure.

**How the definition helps.** Tangent separation makes the denominator nonzero, and its dependence on z is holomorphic. The normalized form then gives the Cauchy–Fantappiè integral formula. In our own example, the image of the unit ball under (u,v) ↦ (u,v+u²) still has strictly pseudoconvex boundary. Its complex tangent at (0,1) contains interior points (t,1) for small nonzero real t.

**Wikipedia:** [Bochner–Martinelli formula](https://en.wikipedia.org/wiki/Bochner%E2%80%93Martinelli_formula). It says: “generalization of the Cauchy integral formula to functions of several complex variables”

**Sources:**

- [Lanzani and Stein, Cauchy-type integrals in several complex variables (2013)](https://link.springer.com/article/10.1007/s13373-013-0038-y)

### Zero-free kernels give global diastasis

**Remember:** Nonvanishing keeps the logarithm finite even away from the diagonal.

*Rules out counterexamples.* MSC 32A25 (Integral representations; canonical kernels (Szeg?, Bergman, etc.)). arXiv math.CV. Level 4: research.

**Definition.** A bounded domain is Lu Qi-Keng if its Bergman kernel K never vanishes on a pair of points. The diastasis is a local potential for the metric in two variables, given by log(K(z,z)K(w,w)/\|K(z,w)\|²).

**Problem.** On a Lu Qi-Keng domain the diastasis extends to a finite real analytic function on every pair of points.

**How the definition helps.** The zero-free condition keeps the denominator positive everywhere. In our own argument, the diagonal factors are positive because constants belong to the Bergman space, and the kernel is analytic in z and w̄. Nikolov and Zwonek found zeros on the symmetrized tridisc, the image of the unit tridisc under the elementary symmetric polynomials.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Nikolov and Zwonek, The Bergman kernel of the symmetrized polydisc in higher dimensions has zeros (2006)](https://link.springer.com/article/10.1007/s00013-006-1801-z)

### Fiber volume encodes Bergman weights

**Remember:** Give each fiber the area that the base point should weigh.

*True by definition.* MSC 32A36 (Bergman spaces of functions in several complex variables), 32A25. arXiv math.CV. Level 4: research.

**Definition.** The Forelli–Rudin construction puts a disc centered at zero with area w(z) above each point z of a bounded domain. Here w is positive, continuous, and bounded. The weighted Bergman space uses w times ordinary volume to measure squared norms of holomorphic functions.

**Problem.** The ordinary Bergman kernel of the enlarged domain at (z,0) and (u,0) equals the weighted Bergman kernel at z and u.

**How the definition helps.** Integrating along each disc turns ordinary volume into the prescribed weight for functions constant along the discs. In our own argument, averaging over disc rotations projects orthogonally onto those functions and preserves their values at the centers. Thus both spaces represent evaluation there by the same kernel.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Ligocka, On the Forelli–Rudin construction and weighted Bergman projections (1989)](https://geodesic.mathdoc.fr/articles/10.4064/sm-94-3-257-272/)

### Monomial projections respect the exponent

**Remember:** Use only monomials whose pth powers have finite integral.

*Rules out counterexamples.* MSC 32A36 (Bergman spaces of functions in several complex variables). arXiv math.CV, math.FA. Level 4: research.

**Definition.** On a bounded domain invariant under separate coordinate rotations, the monomial basis projection uses the Laurent monomials e with finite Lᵖ norm. Its coefficient for e is the integral of f times ē\|e\|ᵖ⁻² divided by the integral of \|e\|ᵖ.

**Problem.** On bounded monomial polyhedra, domains given by independent monomial inequalities, this projection maps Lᵖ boundedly onto its holomorphic subspace for 1 &lt; p &lt; ∞.

**How the definition helps.** Choosing powers at exponent p excludes singular monomials outside Lᵖ. The cited paper proves boundedness by kernel estimates. In our own example, the ordinary Bergman projection sends z̄₂ to a nonzero multiple of 1/z₂ on the triangle \|z₁\| &lt; \|z₂\| &lt; 1. This output has infinite L⁴ norm.

**Paper or page:** [Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3). It says: “The Monomial Basis Projection is a bounded surjective projection operator”

**Sources:**

- [Chakrabarti and Edholm, Projections onto Lᵖ-Bergman spaces of Reinhardt Domains](https://arxiv.org/abs/2303.10005v3)

### Hyperfunctions as boundary values form a flabby sheaf

**Remember:** Every hyperfunction on a smaller set extends to the whole line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32A45 (Hyperfunctions). arXiv math.CV. Level 4: research.

**Definition.** Take an open set U of ℝ and a complex neighbourhood of U. A hyperfunction on U is a pair of holomorphic functions on the upper and lower parts of that neighbourhood. Two pairs are equal when they differ by one holomorphic function on the whole neighbourhood.

**Problem.** Hyperfunctions on the open subsets of ℝ form a flabby sheaf. So every hyperfunction on an open set U extends to a hyperfunction on all of ℝ.

**How the definition helps.** Defining hyperfunctions by holomorphic functions turns flabbiness into a fact about ℂ, whose open sets have no first cohomology for holomorphic functions (our own summary). Distributions are not flabby (our own example). On (0, 1), take the sum of the n-th derivatives of the delta functions at the points 1/n. It has no extension to ℝ, because its order grows without bound near 0 (our own example).

**Wikipedia:** [Hyperfunction](https://en.wikipedia.org/wiki/Hyperfunction). It says: “The obvious restriction maps turn ℬ into a sheaf (which is in fact flabby).”

**Sources:**

- [M. Sato, Cyōkansū no riron (Theory of Hyperfunctions), Sūgaku 10 (1958), no. 1, 1–27](https://doi.org/10.11429/sugaku1947.10.1)

### Logarithmic radii give integer slopes

**Remember:** Off the amoeba, each logarithmic slope counts turns around zero.

*Rules out counterexamples.* MSC 32A60 (Zero sets of holomorphic functions of several complex variables), 11R06. arXiv math.AG. Level 4: research.

**Definition.** For a nonzero complex polynomial P, fix the logarithms r of the coordinate moduli and let each angle vary independently. The Ronkin function averages log\|P\| over these angles with uniform probability. The amoeba consists of those vectors r for which some choice of angles gives P = 0.

**Problem.** On each connected component of the complement of the amoeba of a nonzero polynomial, its Ronkin function is affine with integral gradient.

**How the definition helps.** In our own argument, using logarithmic radii turns each derivative outside the amoeba into a winding number. This integer counts turns around zero as one coordinate travels around its circle with the others fixed. The argument principle gives the derivative after averaging over that coordinate. The integer varies continuously with the remaining angles and radii, so it stays constant on each component. For example, 1 + x gives max(0,r), with a change of slope at zero.

**Wikipedia:** [Amoeba (mathematics)](https://en.wikipedia.org/wiki/Amoeba_%28mathematics%29). It says: “The Ronkin function is convex and affine on each connected component of the complement of the amoeba of p(z).”

**Paper or page:** [Generalized Mahler measures of Laurent polynomials](https://arxiv.org/abs/2308.04601). It says: “Let $k \\notin \\mathcal{K}\_{\\mathfrak {a}}.$ Then $\\varrho \_{\\mathfrak {a}, k}<sup>j</sup> (x<sub>1</sub>, \\dots , \\widehat{x<sub>j</sub>}, \\dots , x<sub>n</sub>)$ is constant for all $(x<sub>1</sub>, \\dots , \\widehat{x<sub>j</sub>}, \\dots , x<sub>n</sub>) \\in \\mathbb {T}\_{a<sub>1</sub>, \\dots , \\widehat{a<sub>j</sub>}, \\dots , a<sub>n</sub>}<sup>n-1</sup>.$”

**Sources:**

- [Generalized Mahler measures of Laurent polynomials, Proposition 7.2](https://arxiv.org/abs/2308.04601)
- [Amoeba (mathematics), Ronkin function](https://en.wikipedia.org/wiki/Amoeba_(mathematics)#Ronkin_function)

### Principal pullbacks permit integral division

**Remember:** Once the ideal has one generator, divide the monic equation by its powers.

*True by definition.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32C20. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A function is integral over I if it solves a monic equation whose jth coefficient after the leading term belongs to Iʲ. The normalized blowup makes I locally principal on a normal space. Here normality means every fraction satisfying a monic equation over the local ring belongs to that ring.

**Problem.** On a reduced irreducible complex space, let I be a nonzero ideal locally given by finitely many holomorphic generators and relations. Every function integral over I pulls back into the ideal generated by I on its normalized blowup.

**How the definition helps.** Using a monic equation instead of analytic growth bounds lets us divide by powers of one local generator (our own argument). The resulting quotient satisfies a monic equation over the new local ring. Normality makes the quotient holomorphic, so the function belongs to the extended ideal.

**Paper or page:** [On Skoda's theorem for Nadel-Lebesgue multiplier ideal sheaves on singular complex spaces and regularity of weak Kähler-Einstein metrics](https://arxiv.org/abs/2301.00094v1). It says: “For every morphism π : X̃ → X satisfying: (i) π is a proper and surjective, (ii) X̃ is a normal complex space”

**Sources:** none listed. No primary source with a working link was found.

### Coherent means nuclear and pseudocompact, so Grauert's theorem becomes two checks

**Remember:** Split coherent into nuclear and pseudocompact, then push each one forward.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32L10. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A complex of liquid modules is pseudocompact if it is a complex of compact projectives bounded to the right. It is nuclear if every map into it from a compact object is trace-class, that is, comes from an element of a tensor product. On a compact Stein set, complexes from coherent analytic sheaves are exactly the nuclear pseudocompact ones.

**Problem.** For a proper map f between complex analytic spaces, the derived pushforward sends complexes with coherent cohomology to complexes with coherent cohomology. In particular, coherent sheaves on a compact complex space have finite-dimensional cohomology.

**How the definition helps.** Coherence splits into two conditions, and the pushforward preserves each one for its own soft reason (Proposition 9.19 and Theorem 12.18 of the complex notes). Nuclearity survives because forgetful functors from modules over nuclear algebras preserve it. Pseudocompactness survives because the pushforward equals f₍!₎ for proper f, whose right adjoint commutes with bounded sums (Theorem 12.17). Classical proofs of Grauert's theorem need hard analytic estimates (our own); here the work moves into Proposition 9.19 and Theorem 12.17.

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics). It says: “to provide new "analysis-free" proofs of the finiteness of coherent cohomology, Serre duality, GAGA, and the Hirzebruch-Riemann-Roch theorem in complex analysis.”

**Sources:**

- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Cohomology matrices expose jumping fibers

**Remember:** Fiber cohomology jumps where matrix ranks drop.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A Grauert complex is a finite sequence of local holomorphic matrices whose consecutive maps compose to zero. Evaluating it at a base point gives a complex whose cohomology equals the sheaf cohomology on that fiber. Flatness means tensoring with each sheaf stalk preserves exact sequences over the corresponding base stalk.

**Problem.** Suppose a coherent analytic sheaf is flat over the base of a proper holomorphic map. In each degree, the points where fiber cohomology has dimension at least k form a closed analytic set.

**How the definition helps.** The matrices express a cohomology dimension bound as a rank condition (our own calculation). Subtract the incoming and outgoing ranks from the middle dimension. Their sum is the rank of a block diagonal matrix, whose minors give the required equations. Grauert’s theorem supplies a single complex throughout a neighborhood.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “Proper base change also holds in the context of complex manifolds and complex analytic spaces.”

**Sources:**

- [H. Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02684746/)

### Comparing categorified locales makes GAGA follow from the valuative criterion

**Remember:** Proper means valuations have unique centres, so the two locales agree.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06, 32J25. arXiv math.AG, math.CV. Level 4: research.

**Definition.** A locale is a space given only by its lattice of open sets. Clausen and Scholze attach a locale to a symmetric monoidal stable ∞-category; its closed subsets come from idempotent algebras. Analytification sends liquid quasi-coherent sheaves on a finite type ℂ-scheme X to those on its analytic space.

**Problem.** For every proper finite type ℂ-scheme X, analytification is an equivalence between the algebraic and the analytic categories of liquid quasi-coherent sheaves. On coherent sheaves this gives Serre's GAGA theorem.

**How the definition helps.** Both categories are compared as categorified locales, so the equivalence reduces to a bijection on points, which are valuations. The valuative criterion for properness says exactly that this map is a bijection (our own reading of the complex notes, Theorems 6.10 and 7.2). Serre's proof instead computes the cohomology of coherent sheaves on projective space (our own). The work moves into building the locales and into finding coherent sheaves inside the liquid categories (Theorem 13.10).

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics), [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “to provide new "analysis-free" proofs of the finiteness of coherent cohomology, Serre duality, GAGA, and the Hirzebruch-Riemann-Roch theorem in complex analysis.”

**Sources:**

- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Flat families preserve Euler characteristic

**Remember:** Cohomology can jump, but the alternating sum stays fixed.

*True by definition.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Euler characteristic of a sheaf on a compact complex space is the alternating sum of its cohomology dimensions. A Grauert complex is a finite complex of holomorphic vector bundles whose evaluations compute those groups on nearby fibers.

**Problem.** For a proper holomorphic map, the fiber Euler characteristic of a coherent sheaf flat over the base is locally constant. Flatness means tensoring with the sheaf stalk preserves exact sequences over the corresponding base stalk.

**How the definition helps.** Computing the alternating sum from the complex replaces changing cohomology dimensions with fixed bundle ranks (our own calculation). Each differential contributes its rank twice with opposite signs. Grauert’s theorem supplies the complex over a whole neighborhood.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “Proper base change also holds in the context of complex manifolds and complex analytic spaces.”

**Sources:**

- [H. Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02684746/)

### Hypercohomology lifts comparison to complexes

**Remember:** Compare the terms, then let the spectral sequence compare the complex.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Hypercohomology measures a complex of sheaves as a whole. One computes it by resolving the individual sheaves, taking global sections, and combining the resolution maps with the original differentials.

**Problem.** On a complex projective variety, a bounded complex of coherent algebraic sheaves has the same hypercohomology after extension to holomorphic coefficients.

**How the definition helps.** The combined complex lets one compare individual sheaves first (our own explanation). Serre’s theorem identifies each sheaf’s algebraic and analytic cohomology. The hypercohomology spectral sequence assembles those groups in stages, with only finitely many pieces in each degree. Comparison at each stage therefore identifies the final groups.

**Paper or page:** [Relative-Hyper GAGA Theorem](https://arxiv.org/abs/2409.01481v3). It says: “Then the hypercohomology of ℱ• on X is isomorphic to the hypercohomology of its analytification”

**Sources:**

- [Eita Haibara and Taewan Kim, Relative-Hyper GAGA Theorem, Theorem 3.0.1](https://arxiv.org/abs/2409.01481v3)
- [J.-P. Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 1–3](https://www.numdam.org/item/AIF_1956__6__1_0/)

### Proper maps preserve sheaf coherence

**Remember:** Over a point, coherence means finite dimension.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Call a holomorphic map proper if inverse images of compact sets are compact. The direct image sheaf assigns to each target open set the sections over its inverse image. A coherent analytic sheaf has finitely many local generators and relations.

**Problem.** The direct image of a coherent analytic sheaf under a proper holomorphic map is coherent.

**How the definition helps.** Properness excludes the projection of the whole complex line to a point in our own analytic example. Take the sheaf of holomorphic functions, which assigns those functions to each open set. Its direct image at the point contains all coordinate powers, which are linearly independent. Coherence there would require finite dimension. Grauert’s direct image theorem proves coherence for proper holomorphic maps.

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “the direct image of a coherent sheaf under a proper morphism is coherent”

**Sources:**

- [Hans Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://doi.org/10.1007/bf02684746)

### Hypersurfaces supply poles where points cannot

**Remember:** A local equation supplies a pole where deleting a point does not.

*Rules out counterexamples. Confidence: medium.* MSC 32D05 (Domains of holomorphy), 32D20, 32E10. arXiv math.CV. Level 4: research.

**Definition.** A closed analytic hypersurface is locally the zero set of one holomorphic function that is not identically zero. A domain of holomorphy has no boundary patch across which all holomorphic functions extend from the same open subset.

**Problem.** Removing a closed analytic hypersurface from a domain of holomorphy in ℂⁿ leaves a domain of holomorphy. Removing a point from a ball in dimension at least two can destroy this property.

**How the definition helps.** A local defining equation supplies a reciprocal with a pole along the deleted hypersurface. Inside a small ball, this reciprocal obstructs extension at the hypersurface, and the sphere already obstructs extension at the ball boundary. Our own proof uses the local Levi theorem over a Stein domain to pass from these local domains of holomorphy to the whole complement. Hartogs’s theorem fills the puncture in the ball example.

**Wikipedia:** [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy). It says: “any function holomorphic on U ∖ K can be analytically continued to U”

**Sources:** none listed. No primary source with a working link was found.

### Bott–Chern vanishing fills pluriharmonic holes

**Remember:** Cut off near the hole, then erase the resulting derivative.

*Makes the theorem clean to state or prove.* MSC 32D15 (Continuation of analytic objects in several complex variables), 32C35. arXiv math.CV. Level 4: research.

**Definition.** On a complex manifold, ∂ and ∂̄ are the two parts of the exterior derivative. Consider compactly supported forms with one ordinary and one conjugate differential, killed by both operators. Their Bott–Chern group identifies forms differing by ∂∂̄ of a compactly supported function.

**Problem.** Let Ω be a domain in a Stein manifold of complex dimension at least two. Let K be a compact subset of Ω with Ω ∖ K connected. Every pluriharmonic function on Ω ∖ K extends uniquely to a pluriharmonic function on Ω.

**How the definition helps.** The quotient measures exactly the error that a compactly supported correcting function can cancel. In our own account, cut the function off near K and take ∂∂̄, which gives a compactly supported error form. The paper’s vanishing theorem gives a compactly supported function with exactly that ∂∂̄. Subtracting it gives the extension, which agrees with the original function by continuation from an open set where the correction vanishes.

**Paper or page:** [Bott-Chern cohomology and the Hartogs extension theorem for pluriharmonic functions](https://arxiv.org/abs/2205.02494v2). It says: “Then every pluriharmonic function on Ω ∖ K has a unique pluriharmonic extension to Ω.”

**Sources:**

- [Xieping Wang, Bott-Chern cohomology and the Hartogs extension theorem for pluriharmonic functions (2024), Theorems 1.1 and 1.2](https://doi.org/10.2422/2036-2145.202205_007)

### Entire equations present Stein subspaces

**Remember:** Entire equations belong in the algebra that represents their zero space.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV, math.AG. Level 4: research.

**Definition.** An algebra with entire functional calculus has an operation for every entire function in finitely many variables. The operations respect composition. A presentation by generators and relations may therefore use entire equations instead of polynomial equations.

**Problem.** Let finitely many entire functions on ℂⁿ generate the local defining ideal of a closed complex subspace. Its global holomorphic functions form the quotient of the entire functions by the ideal generated by those equations.

**How the definition helps.** Allowing entire functions as operations makes analytic equations into algebraic relations in a presentation. An entire function is holomorphic on all of its complex coordinate space. In our own account, the local equations specify the function sheaf of the subspace, including multiplicities. Cartan’s theorem B shows that every global section lifts and that every global relation is an entire linear combination of the equations. Stein duality identifies this quotient with the algebra representing the subspace.

**nLab:** [Stein duality](https://ncatlab.org/nlab/show/Stein+duality). It says: “The equivalence functor sends a Stein space to its EFC-algebra of global sections.”

**Sources:**

- [J. P. Pridham, A differential graded model for derived analytic geometry (2020), Proposition 1.13](https://doi.org/10.1016/j.aim.2019.106922)
- [Alexei Yu. Pirkovskii, Holomorphically finitely generated algebras (2015), Theorem 3.23](https://doi.org/10.4171/jncg/192)

### Relative vanishing needs convexity

**Remember:** A compact set can enclose cohomology that its hull fills.

*Rules out counterexamples.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 4: research.

**Definition.** A compact subset of a Stein space is holomorphically convex if it contains its holomorphic hull. The hull consists of all points where no global holomorphic function exceeds its maximum modulus on the compact set.

**Problem.** For an n-dimensional Stein space and a holomorphically convex compact set K, relative cohomology with constant integer coefficients vanishes in degrees above n.

**How the definition helps.** The hull condition excludes compact sets such as the unit sphere in ℂ², whose hull fills the ball (our own). The sphere has integer cohomology ℤ in degree three, while ℂ² is contractible (our own). The exact sequence of the pair therefore gives relative cohomology ℤ in degree four (our own). Benoist proves vanishing above the complex dimension when the compact set equals its hull.

**Paper or page:** [On the Artin vanishing theorem for Stein spaces](https://arxiv.org/abs/2410.04291v2). It says: “Then Hᵏ(S, K, 𝔽) = 0 for k &gt; n.”

**Sources:**

- [Olivier Benoist, On the Artin vanishing theorem for Stein spaces (2025)](https://doi.org/10.1112/blms.70124)

### Stein algebras recover holomorphic maps

**Remember:** Recover a map by pulling back its coordinate functions.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Stein algebra of a Stein space X is the complex algebra 𝒪(X) of all holomorphic functions defined on X. Composition with a holomorphic map pulls functions back and reverses the direction of the map.

**Problem.** For Stein spaces X and Y, every unital complex algebra homomorphism 𝒪(Y) → 𝒪(X) comes from exactly one holomorphic map X → Y.

**How the definition helps.** Keeping multiplication and addition lets one state a geometric mapping theorem entirely in terms of global functions (our own). Benoist proves that taking global functions gives an equivalence with all arrows reversed. The equivalence supplies both existence and uniqueness (our own).

**Paper or page:** [Stein spaces and Stein algebras](https://arxiv.org/abs/2410.05521v1). It says: “is an anti-equivalence of categories.”

**Sources:**

- [Olivier Benoist, Stein spaces and Stein algebras (2026)](https://doi.org/10.4064/ba260107-1-3)

### Tame hulls stay locally bounded

**Remember:** Bound a moving compact set by one fixed compact set locally.

*Makes the theorem clean to state or prove.* MSC 32E10 (Stein spaces). arXiv math.CV. Level 4: research.

**Definition.** The holomorphic hull adds points where every holomorphic function obeys its maximum modulus bound on a compact set. For a continuous family of Stein structures over a locally compact Hausdorff space, tameness has a compactness test. For each fixed compact set, the pairs of parameters and hull points above any compact parameter set must form a compact set.

**Problem.** In a tame family, taking the holomorphic hull separately in each fiber preserves properness over the parameters. Properness means that the inverse image of each compact parameter set is compact.

**How the definition helps.** Tameness supplies one compact bound for all moving hulls above a compact parameter neighborhood (our own). Indeed, the moving sets there project into one fixed compact set, whose hulls contain theirs (our own). The authors’ lemma also establishes closedness, which the compact bound alone does not imply (our own).

**Paper or page:** [The Oka principle for tame families of Stein manifolds](https://arxiv.org/abs/2510.25887v1). It says: “If K ⊂ T × X is proper and 𝒥 is a tame family of Stein structures on X then the hull K̂𝒥 is also proper.”

**Sources:**

- [Franc Forstnerič and Álfheiður Sigurðardóttir, The Oka principle for tame families of Stein manifolds (2026)](https://doi.org/10.1090/btran/257)

### Fefferman measure makes Szegő metrics invariant

**Remember:** The logarithm turns the Jacobian factor into a term whose mixed derivatives vanish.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32A25. arXiv math.CV. Level 4: research.

**Definition.** Fefferman measure weights surface area on a smooth strictly pseudoconvex boundary, where a defining function ρ has positive complex Hessian on complex tangents. Border that Hessian with the complex gradient, its adjoint, and a zero corner. In complex dimension n, the weight is the (n+1)st root of the absolute determinant divided by \|∇ρ\|, up to a dimensional constant.

**Problem.** For Fefferman measure, take the mixed complex second derivatives of the logarithm of the Szegő kernel diagonal. Holomorphic isomorphisms between smoothly bounded simply connected strictly pseudoconvex domains preserve this metric.

**How the definition helps.** Fefferman measure changes by a power of the absolute Jacobian, allowing a holomorphic weight to preserve boundary inner products. For the boundary space of square-integrable holomorphic traces, simple connectivity gives the holomorphic power of the nonvanishing Jacobian. The resulting kernel diagonals differ by a Jacobian factor whose logarithm has zero mixed complex second derivatives.

**Wikipedia:** [Szegő kernel](https://en.wikipedia.org/wiki/Szeg%C5%91_kernel). It says: “a reproducing kernel on a natural Hilbert space”

**Sources:**

- [David Barrett and Lina Lee, On the Szegő Metric](https://doi.org/10.1007/s12220-012-9329-x)

### Full squeezing identifies the ball

**Remember:** An attained full radius leaves no part of the ball out.

*Makes the theorem clean to state or prove.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 4: research.

**Definition.** Embed a bounded complex domain holomorphically into the unit ball of the same dimension, sending a chosen point to zero. The squeezing function there is the supremum of radii of centered balls contained in such images.

**Problem.** If the squeezing function equals one anywhere, the domain admits a holomorphic bijection onto the unit ball with holomorphic inverse.

**How the definition helps.** An embedding that attains radius one covers the whole ball. In our own explanation, the essential step is the attainment theorem for bounded domains. Its proof takes limits of embeddings and their inverses.

**Paper or page:** [d-balanced squeezing function](https://arxiv.org/abs/2103.00526). It says: “then D is biholomoprhically equivalent to Ω.”

**Sources:**

- [d-balanced squeezing function, Corollary 4.6](https://arxiv.org/abs/2103.00526)

### Left inverses transfer disc interpolation

**Remember:** A disc with a left inverse loses no interpolation data.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables). arXiv math.CV. Level 4: research.

**Definition.** A complex geodesic preserves distance from the unit disc into a domain, measured there by holomorphic maps back to the disc. Equivalently, it has a holomorphic left inverse, a map back to the disc whose composition with the geodesic is the identity.

**Problem.** Finite data on a complex geodesic admit a disc-valued holomorphic interpolant on the domain exactly when their parameters admit one on the disc.

**How the definition helps.** The left inverse extends any interpolating function from the disc to the domain by composition. Composing in the other direction restricts a domain interpolant to the disc. In our own argument, the work lies in obtaining the left inverse from distance preservation using a maximizing map and Schwarz–Pick equality.

**Paper or page:** [Pick interpolation and invariant functions](https://arxiv.org/abs/2309.04796). It says: “if and only if φ is a Carathéodory geodesic.”

**Sources:**

- [Pick interpolation and invariant functions, Corollary 2.7](https://arxiv.org/abs/2309.04796)

### Abelian models remove Calabi–Yau obstructions

**Remember:** An equivalent zero bracket leaves no nonlinear lifting equations.

*True by definition.* MSC 32G05 (Deformations of complex structures), 32Q25. arXiv math.AG, math.CV. Level 4: research.

**Definition.** The Kodaira–Spencer algebra describes changes of complex structure using tangent-valued forms, a differential and a bracket. Homotopy abelian means that a chain of maps connects this algebra to one with zero bracket. Each map may point either way and must preserve both operations and induce an isomorphism on cohomology.

**Problem.** For a smooth complex projective variety with a nowhere vanishing holomorphic volume form, the Kodaira–Spencer algebra is homotopy abelian. Every formal deformation therefore lifts across each small extension of parameter algebras, a surjection with kernel annihilated by the maximal ideal.

**How the definition helps.** In the zero-bracket model, the deformation equation is linear, so each closed coefficient can multiply any lift of its parameter (our own). Iacono and Manetti prove that such a model exists, and invariance under cohomology equivalences transfers the lifting result (our own).

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

**Definition.** Suppose two smooth components of a compact complex surface meet transversely along a smooth curve D. The surface is d-semistable if the product of their two normal line bundles along D is trivial. Each normal line records the direction transverse to D in its component.

**Problem.** A d-semistable surface of this form admits local first-order smoothing parameters that agree along D and vanish nowhere on D.

**How the definition helps.** In the crossing equation xy = t, the smoothing parameter transforms as the product of the two normal directions (our own). A trivial product bundle has a constant nonzero section (our own). For two projective planes meeting along a line in projective three-space, the product has degree two, so every section has a zero (our own). Lifting compatible local parameters to a global deformation requires a separate argument (our own).

**Paper or page:** [Unobstructedness of deformations for a d-semistable central corank one boundary point](https://arxiv.org/abs/2410.10583v2). It says: “We have τ¹ₓ = 𝒪ᴅ.”

**Sources:** none listed. No primary source with a working link was found.

### Ample classes exclude period reflections

**Remember:** A reflection in a curve cannot preserve an ample class.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.AG, math.CV. Level 4: research.

**Definition.** A polarized K3 surface carries a chosen ample line bundle, one whose high powers embed the surface in projective space. Its first Chern class records the polarization in second integral cohomology.

**Problem.** An integral isometry preserving the period lines and matching the two polarization classes comes from a unique polarized isomorphism between the K3 surfaces.

**How the definition helps.** The polarization picks out the chamber of positive classes containing the ample classes (our own). Reflection in a smooth rational curve preserves the period line but sends the curve class to its negative (our own). The strong Torelli theorem realizes the isometry once it matches the chambers (our own).

**Wikipedia:** [K3 surface](https://en.wikipedia.org/wiki/K3_surface). It says: “generated by reflections in the set of roots Δ”

**Sources:**

- [D. Burns and M. Rapoport, On the Torelli problem for kählerian K-3 surfaces](https://doi.org/10.24033/asens.1287)

### Birational quotients make periods invertible

**Remember:** Identify inseparable points before asking periods to distinguish them.

*Rules out counterexamples.* MSC 32G13 (Complex-analytic moduli problems), 32G20. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Fix a simply connected compact Kähler manifold whose holomorphic two-forms are spanned by one everywhere nondegenerate form. Its Teichmüller space parametrizes complex structures of this kind up to diffeomorphisms continuously deformable to the identity. Its birational Teichmüller space identifies points that have no disjoint open neighborhoods.

**Problem.** On each connected component of the birational Teichmüller space, the period map is a diffeomorphism onto the period domain of holomorphic two-form lines.

**How the definition helps.** The period domain has disjoint neighborhoods for distinct lines, so the period map must identify inseparable points (our own). Verbitsky’s global Torelli theorem proves that making these identifications suffices and that the resulting map has a smooth inverse (our own).

**Paper or page:** [Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847v1). It says: “Then Per is a diffeomorphism on each connected component.”

**Sources:**

- [M. Verbitsky, Teichmuller spaces, ergodic theory and global Torelli theorem](https://arxiv.org/abs/1404.3847)

### Interior monodromy excludes weight jumps

**Remember:** Use the interior of the cone to read its common weight filtration.

*Rules out counterexamples.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a polarized nilpotent orbit, commuting operators with vanishing powers generate a cone by nonnegative linear combinations. Their exponentials translate a fixed flag of nested subspaces into flags satisfying the Hodge polarization conditions for all sufficiently large imaginary parameters. The relative interior consists of sums with a strictly positive coefficient for every generator.

**Problem.** Every operator in the relative interior gives the same monodromy weight filtration. This filtration places each Jordan chain in weights spaced two apart and centered at the original cohomology weight.

**How the definition helps.** Positive coefficients retain every degenerating direction, which can matter even for two independent families of elliptic curves (our own). Let each curve develop a node, a point where two branches cross, and take the direct sum of their first cohomology groups (our own). The lowest weight space receives a line from each curve in its relative interior, but only one line on a boundary ray (our own). The Cattani–Kaplan theorem proves constancy throughout the relative interior.

**Paper or page:** [Space of nilpotent orbits and extension of period maps (I): The weight 3 Calabi-Yau types](https://arxiv.org/abs/2306.11254v2). It says: “for any N in the relative interior of σ”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotent orbits forget disk coordinates

**Remember:** Changing the coordinate moves the flag inside its orbit.

*True by definition. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.AG, math.CV. Level 4: research.

**Definition.** The period flag Φ(z) records nested cohomology subspaces above t = exp(2πiz). If transport T around zero has T−I nilpotent, meaning some power vanishes, the corrected flag exp(−z log T)Φ(z) has a limit F at zero. Its orbit consists of all flags exp(c log T)F for complex c.

**Problem.** For a polarized integral variation on a punctured disk with this transport, the orbit of the limiting flag is independent of the local coordinate.

**How the definition helps.** The orbit absorbs the translation that changes an individual limiting flag (our own). Replacing t by u(t)t, with u holomorphic and u(0) nonzero, multiplies F by exp(−cN), where c = log(u(0))/(2πi) (our own). Schmid’s theorem gives the limit for periods with an integral lattice and a fixed pairing satisfying the Hodge positivity conditions (our own).

**Paper or page:** [On the nilpotent orbit theorem of complex variations of Hodge structure](https://arxiv.org/abs/2203.04266v3). It says: “where a(w) := Ψ(0,w)”

**Sources:**

- [W. Schmid, Variation of Hodge Structure: The Singularities of the Period Mapping](https://doi.org/10.1007/BF01389674)

### Tangential polylogarithm periods give zeta values

**Remember:** At one, only the first coordinate needs its logarithm removed.

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations), 14D07, 33B30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Consider the polylogarithms as solutions of a differential system on the line. Li₁ has differential dz/(1 − z), and for k ≥ 2, Liₖ has differential Liₖ₋₁ dz/z, all vanishing at 0. At a singular endpoint, a tangential value uses the approach direction to fix the logarithm and removes the resulting logarithmic factor.

**Problem.** Transport the solution along the real interval from 0 to 1, with inward tangent vectors at both endpoints. Then the tangential values at 1 of Li₂ through Liₙ are ζ(2) through ζ(n), where ζ(k) is the sum of the reciprocal kth powers of the positive integers.

**How the definition helps.** The tangential value defines the whole endpoint vector even though its first varying entry diverges (our own). Near 1 only the first differential equation has a pole, and its residue correction affects only f₁ (our own). For k ≥ 2 the power series for fₖ sums zʲ/jᵏ over positive j, giving ζ(k) at one (our own). Hain identifies these entries as periods, the comparison numbers for the limiting Hodge structure.

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950). It says: “has ζ(2),⋯,ζ(n) as periods”

**Sources:**

- [Richard Hain, Classical polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### Unipotent canonical extensions preserve tensors

**Remember:** Two nilpotent residues add to a nilpotent tensor residue.

*Rules out counterexamples. Confidence: medium.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations), 14D07. arXiv math.AG. Level 4: research.

**Definition.** Consider a flat bundle from a variation of Hodge structure on a punctured disk. A flat bundle transports vectors along paths, and transport around the puncture is its monodromy. Deligne’s canonical extension allows a simple pole and requires the pole coefficient, called the residue, to have eigenvalues with real parts in \[0, 1). Unipotent monodromy means that the loop operator minus the identity is nilpotent, so some power vanishes.

**Problem.** If both bundles have unipotent monodromy, their canonical extensions tensor to the canonical extension of their tensor product.

**How the definition helps.** Unipotence keeps the tensor residue within the defining range because both individual residues are nilpotent (our own). On the tensor product they act on separate factors, so they commute and their sum is nilpotent (our own). Deligne’s uniqueness theorem identifies the resulting extension (our own). Two rank-one bundles with residues one half each give tensor residue one, while the canonical extension of their product has residue zero (our own).

**Paper or page:** [Variation of mixed Hodge structure and its applications](https://arxiv.org/abs/2304.00672). It says: “where ˡ(·) stands for the lower canonical extension as before.”

**Sources:**

- [Pierre Deligne, Équations différentielles à points singuliers réguliers (1970)](https://doi.org/10.1007/BFb0061194)

### Untwisting monodromy gives limiting flags

**Remember:** Remove the deck transformation before taking a limit.

*Makes the theorem clean to state or prove.* MSC 32G20 (Period matrices, variation of Hodge structure; degenerations). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A period flag Φ(z) records nested cohomology subspaces above the punctured disk with coordinate t = exp(2πiz). One turn sends Φ(z) to TΦ(z), where T is the transport around the puncture. When T−I is nilpotent, some power vanishes, and the untwisted flag is Ψ(t) = exp(−z log T)Φ(z).

**Problem.** For a polarized integral variation of Hodge structure with this monodromy, Ψ extends holomorphically across the puncture. Its limit lies in the flag space defined by the polarization’s orthogonality equations.

**How the definition helps.** The exponential cancels the change of flag after one turn, giving a single-valued map (our own). Here the cohomology has an integral lattice and a fixed pairing, the polarization, that imposes orthogonality and positivity (our own). The nilpotent orbit theorem proves the extension across zero, where positivity can fail (our own).

**Paper or page:** [On the nilpotent orbit theorem of complex variations of Hodge structure](https://arxiv.org/abs/2203.04266v3). It says: “Ψ extends holomorphically to Δᵖ⁺ᑫ”

**Sources:**

- [W. Schmid, Variation of Hodge Structure: The Singularities of the Period Mapping](https://doi.org/10.1007/BF01389674)

### Condition R transfers boundary smoothness

**Remember:** Check smoothness of the projection before studying the boundary map.

*Makes the theorem clean to state or prove.* MSC 32H02 (Holomorphic mappings, (holomorphic) embeddings and related questions in several complex variables), 32A36. arXiv math.CV. Level 4: research.

**Definition.** The Bergman projection is orthogonal projection in volume L² onto the holomorphic functions. A domain satisfies Condition R if this projection preserves smoothness up to the boundary.

**Problem.** Suppose two smooth bounded domains admit continuous functions subharmonic on complex lines with relatively compact sublevel sets. If either satisfies Condition R, every holomorphic isomorphism between them extends smoothly with smooth inverse to their closures.

**How the definition helps.** Condition R states the boundary regularity hypothesis entirely through one domain’s projection. In our own summary, the proof constructs inputs vanishing to high order without changing their projections. It then uses the projection on Jacobian-weighted coordinates to recover boundary regularity of the map.

**nLab:** [Bergman kernel](https://ncatlab.org/nlab/show/Bergman+kernel). It says: “The Bergman kernel is the reproducing kernel for the Hilbert space of square integrable holomorphic functions in a domain in ℂⁿ.”

**Sources:**

- [Bell and Ligocka, A simplification and extension of Fefferman's theorem on biholomorphic mappings (1980)](https://link.springer.com/article/10.1007/BF01418930)
- [Bell, Biholomorphic mappings and the ∂̄-problem (1981)](https://annals.math.princeton.edu/1981/114-1/p04)

### Unchanged functions force connected fibers

**Remember:** Disconnected fibers would give extra locally constant holomorphic functions.

*True by definition.* MSC 32H35 (Proper holomorphic mappings, finiteness theorems), 32C35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A fiber is the set of points with the same image. Stein factorization splits a proper holomorphic map into two maps through a new analytic space. Proper means inverse images of compact sets are compact. Construct the intermediate space from the holomorphic functions on inverse images of open sets in the original target.

**Problem.** The first map in Stein factorization has connected fibers.

**How the definition helps.** In our own proof, every holomorphic function over a neighborhood in the intermediate space comes from that neighborhood. If a fiber splits, properness lets us surround its two closed parts by disjoint open sets that cover the inverse image of a small neighborhood. The function equal to zero on one part and one on the other would then come from the neighborhood, so it would be constant on the fiber. The construction theorem supplies the intermediate space and this correspondence of functions.

**Wikipedia:** [Stein factorization](https://en.wikipedia.org/wiki/Stein_factorization). It says: “Roughly speaking, Stein factorization contracts the connected components of the fibers of a mapping to points.”

**Sources:**

- [Karl Stein, Analytische Zerlegungen komplexer Räume (1956)](https://doi.org/10.1007/BF01343331)

### A Berkovich boundary gives a compactification on which GAGA holds

**Remember:** Add a valuative boundary, and analytic sheaves can no longer grow wildly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32J05 (Compactification of analytic spaces), 14G22, 14F06. arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a complex algebraic variety X, the analytic space X(ℂ) is compact only when X is proper. Poineau adds at infinity a Berkovich space over ℂ with the trivial absolute value. The result is a canonical compact space X⌝, functorial for proper morphisms.

**Problem.** For a complex algebraic variety X, coherent sheaves on X and on its compactification X⌝ form equivalent categories. The equivalence gives bijections on global sections, which is a partial GAGA theorem.

**How the definition helps.** The boundary keeps track of growth at infinity, so coherent sheaves on the compactification are algebraic (our own reading). Without it, GAGA fails. On the affine line, the exponential function is analytic but is not a polynomial (our own). The paper calls the theorem partial, because it treats only coherent sheaves and global sections.

**Paper or page:** [Valuative compactifications of analytic varieties](https://arxiv.org/abs/2503.18643v2), [Valuative compactifications of analytic varieties](https://arxiv.org/abs/2503.18643v2). It says: “We prove a partial GAGA theorem in this setting : there is an equivalence between the categories of coherent sheaves on X and X⌝, and it induces bijections on global sections.”

**Sources:**

- [Jérôme Poineau, Valuative compactifications of analytic varieties, arXiv:2503.18643v2 (2025)](https://arxiv.org/abs/2503.18643v2)

### Dual growth weights need rounding

**Remember:** Dualize the allowed integer orders, not the real weight alone.

*Rules out counterexamples.* MSC 32L05 (Holomorphic bundles and generalizations), 14H60. arXiv math.CV. Level 4: research.

**Definition.** At weight a, keep holomorphic sections whose norm near the puncture is bounded by C times \|z\| to the power −(a + ε). Require this for every positive ε, allowing C to depend on ε.

**Problem.** Consider a holomorphic line bundle on the punctured disk with an acceptable metric, meaning its curvature is bounded near zero in the hyperbolic metric. Dualizing the extension at weight a gives the extension of the dual at weight 1 − a − ε for all sufficiently small positive ε.

**How the definition helps.** The growth definition detects integer pole orders, which explains the correction when dualizing a weight. In our own example, give the trivial line its constant metric. At weight one-half, the bound allows exactly the sections without poles, and their dual again allows constants, whereas weight minus one-half requires a zero. The corrected weight just below one-half gives exactly the required extension.

**Paper or page:** [Notes on acceptable bundles](https://arxiv.org/abs/2511.00760v1). It says: “\\left({}\_\\alpha L\\right)<sup>\\vee</sup> ={}<sub>-\\alpha +1-\\varepsilon </sub>\\left(L<sup>\\vee</sup> \\right)”

**Sources:** none listed. No primary source with a working link was found.

### Numerically flat bundles tensor together

**Remember:** Tensor the filtrations, then tensor their flat unitary pieces.

*True by definition.* MSC 32L05 (Holomorphic bundles and generalizations), 32Q15. arXiv math.CV. Level 4: research.

**Definition.** A holomorphic bundle is numerically flat if its tautological quotient line bundle and the corresponding line bundle for its dual have nef classes. A nef class is a limit of Kähler classes on the projective bundle parametrizing one-dimensional quotients. Equivalently here, the bundle has a chain of holomorphic subbundles whose successive quotients admit flat connections preserving inner products.

**Problem.** The tensor product of two numerically flat bundles on a compact Kähler manifold is numerically flat.

**How the definition helps.** The chain description reduces tensoring bundles to tensoring their flat quotient pieces. In our own proof, group the tensor products of the two chains by the sum of their indices. Each resulting quotient is a direct sum of tensor products of old quotients. Tensor products and direct sums preserve flat connections and their inner products. The filtration theorem supplies the equivalence with the original positivity test.

**Paper or page:** [Numerical flatness and principal bundles on Fujiki manifolds](https://arxiv.org/abs/2111.15243v1). It says: “the connection on Eᵢ/Eᵢ₋₁ induced by ∇ is unitary for all 1 ≤ i ≤ ℓ.”

**Sources:** none listed. No primary source with a working link was found.

### Liquid quasi-coherent sheaves give Serre duality on non-compact complex manifolds

**Remember:** Keep the non-Hausdorff part of cohomology, and duality needs no Hausdorff assumption.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32L10 (Sheaves and cohomology of sections of holomorphic vector bundles, general results), 32C35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a map f of complex analytic spaces, Clausen and Scholze define a compactly supported pushforward f₍!₎ on liquid quasi-coherent sheaves, with right adjoint f⁽!⁾. Compactly supported cohomology is then a liquid vector space, not a topological one.

**Problem.** For a smooth map f of relative dimension d, f⁽!⁾M ≅ f\*M ⊗ Ωᵈ\[d\], where Ωᵈ is the sheaf of relative d-forms. Let X be a complex manifold, compact or not, and M coherent. Then each Hⁱ(X, M∨ ⊗ Ωᵈ) is an extension of the dual of compactly supported cohomology by an Ext¹ term.

**How the definition helps.** Compactly supported cohomology is kept as a condensed space, so its non-Hausdorff part survives as the Ext¹ term. Classical Serre duality on a non-compact manifold needs these groups to be Hausdorff, which fails in examples (our own). Here each group is a quotient of duals of nuclear Fréchet spaces, so Ext into ℂ vanishes above degree 1. The work goes into constructing f₍!₎ for non-proper maps (our own reading of the complex notes, Theorem 13.6 and the text after it).

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics), [Serre duality](https://ncatlab.org/nlab/show/Serre+duality). It says: “to provide new "analysis-free" proofs of the finiteness of coherent cohomology, Serre duality, GAGA, and the Hirzebruch-Riemann-Roch theorem in complex analysis.”

**Sources:**

- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Uniform curvature opens spectral gaps

**Remember:** The same curvature floor controls forms across the whole manifold.

*Rules out counterexamples. Confidence: medium.* MSC 32L20 (Vanishing theorems), 32Q15. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A holomorphic bundle with a Hermitian metric has a uniform Nakano lower bound ε &gt; 0 when its curvature bounds every tangent–fiber tensor from below. The curvature form on each tensor v must have value at least ε‖v‖², using the bundle and base metrics.

**Problem.** On a complete Kähler n-fold, this bound puts the spectrum of the bundle-valued ∂̄ Laplacian on square-integrable (n,q)-forms in \[qε,∞) for q &gt; 0.

**How the definition helps.** The same positive bound at every point gives one lower bound for the total energy. In our own argument, the Bochner–Kodaira identity counts the curvature contribution once for each of the q conjugate indices. Completeness extends the energy inequality from compactly supported forms to the operator. On flat complex space with the trivial bundle, dilations give unit forms with energy tending to zero.

**Paper or page:** [A bridge connecting convex analysis and complex analysis and L²-estimate of d and ∂̄](https://arxiv.org/abs/2405.08559v2). It says: “a holomorphic vector bundle over X with a Nakano positive Hermitian metric”

**Sources:** none listed. No primary source with a working link was found.

### Bounded primitives confine harmonic forms

**Remember:** A bounded primitive makes wedging exact even in square-integrable cohomology.

*True by definition.* MSC 32Q15 (Kähler manifolds). arXiv math.DG, math.CV. Level 4: research.

**Definition.** A Kähler form ω has a bounded primitive if ω = dβ for a one-form β of bounded pointwise length. Ordinary exactness allows β to grow without bound.

**Problem.** Suppose a complete Kähler manifold of complex dimension n has a Kähler form with a bounded primitive. Every square-integrable harmonic form vanishes outside degree n.

**How the definition helps.** The bound keeps β∧α square-integrable whenever the harmonic form α is square-integrable. In our own summary, ω∧α is then an exact form with square-integrable primitive, and the Kähler identities make it harmonic. Integration by parts on the complete manifold forces it to vanish. Wedging with ω is injective below degree n, and Hodge star duality handles higher degrees.

**nLab:** [hard Lefschetz theorem](https://ncatlab.org/nlab/show/hard+Lefschetz+theorem). It says: “the operation of forming the wedge product with the symplectic form”

**Sources:**

- [M. Gromov, Kähler hyperbolicity and L²-Hodge theory (1991)](https://doi.org/10.4310/jdg/1214446039)

### Bounded primitives survive branched pullback

**Remember:** Lift the map and pull back the bounded primitive.

*Makes the theorem clean to state or prove.* MSC 32Q15 (Kähler manifolds). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A compact Kähler manifold is weakly Kähler hyperbolic if it has a nef real (1,1) class with positive top self-intersection. Nef means the class is a limit of Kähler classes. Some smooth representative must pull back on the universal cover to the exterior derivative of a bounded one-form.

**Problem.** Let X map holomorphically onto a weakly Kähler hyperbolic manifold Y, with finite fibers over a dense open set. If X is compact Kähler, it too is weakly Kähler hyperbolic.

**How the definition helps.** Testing a cohomology class allows the pulled-back form to degenerate where the map branches. In our own proof, compactness bounds the derivative, so the lifted map pulls the bounded one-form back to a bounded one-form. Pullback preserves nefness, and top self-intersection multiplies by the positive degree of the map.

**Paper or page:** [Weak Kähler hyperbolicity is birational](https://arxiv.org/abs/2406.01734v2). It says: “If Y is weakly Khler hyperbolic, then X is weakly Khler hyperbolic.”

**Sources:**

- [Francesco Bei, Benoît Claudon, Simone Diverio and Stefano Trapani, Weak Kähler hyperbolicity is birational](https://arxiv.org/abs/2406.01734v2)

### Uniform relative K-polystability is exactly the condition for toric extremal metrics

**Remember:** Measure stability with a norm, and it matches extremal metrics exactly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14M25. arXiv math.DG, math.AG. Level 4: research.

**Definition.** A polarized manifold is a complex manifold with a chosen positive line bundle L. An extremal Kähler metric is one whose scalar curvature has a holomorphic gradient. K-polystability tests a polarized manifold against degenerations to simpler spaces, using a number called the Donaldson–Futaki invariant. The uniform and relative version asks that this number grow at least like a norm of the degeneration, after removing symmetries.

**Problem.** A polarized toric manifold (X, L) admits an S-invariant extremal Kähler metric exactly when it is uniformly relatively K-polystable. This is a uniform version of the Yau–Tian–Donaldson conjecture for toric manifolds.

**How the definition helps.** The uniform condition is chosen to match coercivity of the K-energy, so the equivalence can be stated and proved. Coercive means that this energy, whose minima are the extremal metrics, grows at least like a distance. For toric Fano manifolds, the paper's corollary shows that several stability notions are equivalent to the barycenter of the moment polytope being at the origin. The hardest step, from coercivity to the existence of a metric, rests on earlier existence theorems (our own).

**Paper or page:** [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386), [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386). It says: “Then the followings are equivalent. (1) (X, L) admits an S-invariant extremal Kähler metric. (2) (X, L) is uniformly relatively K-polystable. (3) The relative K-energy of (X, L) is T-coercive.”

**Sources:**

- [Y. Nitta and S. Saito, A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds, arXiv:2110.10386 (2021)](https://arxiv.org/abs/2110.10386)

### Weighted projective embeddings give orbifolds a stability condition for constant curvature

**Remember:** Weighted coordinates remember the finite groups at singular points.

*Makes the theorem clean to state or prove.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14L24. arXiv math.AG, math.DG. Level 4: research.

**Definition.** An orbifold looks locally like a smooth space divided by a finite group. It is polarized if it carries an ample line bundle. In weighted projective space, the coordinates scale by different powers of one parameter. Embedding an orbifold there gives a notion of K-semistability that sees its finite groups.

**Problem.** A polarized orbifold with cyclic stabilizer groups that carries an orbifold Kähler metric of constant scalar curvature is K-semistable. Here K-semistability is the notion given by weighted projective embeddings.

**How the definition helps.** The weighted embedding gives orbifolds a K-semistability notion, so Donaldson’s theorem for manifolds has an orbifold statement. With slope stability for orbifolds, this gives an explicit obstruction to such metrics. Our own explanation is that ordinary projective embeddings lose the information of the finite groups.

**Paper or page:** [Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics](https://arxiv.org/abs/0907.5214v2). It says: “We then prove an orbifold version of Donaldson's theorem: the existence of an orbifold Kahler metric of constant scalar curvature implies K-semistability.”

**Sources:**

- [J. Ross, R. P. Thomas, Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics, arXiv:0907.5214 (2009), J.Diff.Geom.88:109-159,2011](https://arxiv.org/abs/0907.5214v2)

### Brody curves make hyperbolicity open

**Remember:** The derivative bound gives compactness, and normalization keeps the limit nonconstant.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A normalized Brody curve is a holomorphic map from the complex plane whose derivative has norm at most one everywhere and norm one at zero. A smooth Hermitian metric supplies these norms.

**Problem.** In a holomorphic family given by a proper submersion, the parameters with Kobayashi hyperbolic fibers form an open set. Here preimages of compact sets are compact, the differential is surjective, and hyperbolicity means the intrinsic disc distance separates points.

**How the definition helps.** The derivative bound gives compactness, and normalization keeps a limit curve nonconstant. In our own explanation, Brody’s theorem supplies normalized curves on any sequence of nonhyperbolic fibers approaching a hyperbolic fiber. Properness confines their images to a compact set, so a subsequence converges on compact sets into the limiting fiber. Its derivative still has norm one at zero, contradicting hyperbolicity.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “hyperbolicity is an open condition (in the Euclidean topology) for families of compact complex spaces.”

**Sources:**

- [Jean-Pierre Demailly, Algebraic criteria for Kobayashi hyperbolic projective varieties and jet differentials, Proposition 1.6 (1997)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/source_files/hyperbolic.pdf)
- [Robert Brody, Compact manifolds in hyperbolicity (1978)](https://doi.org/10.1090/S0002-9947-1978-0470252-3)

### Gromov models extend biholomorphisms

**Remember:** Match both closures to their metric boundaries to extend the map.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A bounded Gromov model domain has a complete Kobayashi distance, the intrinsic distance measured by chains of holomorphic discs. Its shortest-path triangles are uniformly thin, meaning each side stays within a fixed distance of the other two. Adding endpoints of geodesic rays gives a compactification that the identity identifies homeomorphically with the Euclidean closure.

**Problem.** Every holomorphic bijection with holomorphic inverse between bounded Gromov model domains extends to a homeomorphism of their Euclidean closures.

**How the definition helps.** The defining identification turns a Euclidean boundary point into an endpoint of metric rays. In our own explanation, the holomorphic bijection preserves the Kobayashi distance and therefore carries rays and their endpoints to rays and their endpoints. The induced homeomorphism of metric compactifications gives the required extension.

**Paper or page:** [Local and global visibility and Gromov hyperbolicity of domains with respect to the Kobayashi distance](https://arxiv.org/abs/2201.03070). It says: “Ω₂ is a Gromov model domain if and only if F extends as a homeomorphism”

**Sources:**

- [Local and global visibility and Gromov hyperbolicity of domains with respect to the Kobayashi distance, Theorem 1.4](https://arxiv.org/abs/2201.03070)

### Infinitesimal hyperbolicity bounds curve area

**Remember:** Disc contraction turns ambient area into a genus bound.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** For a nonzero tangent vector v, its infinitesimal Kobayashi length is the reciprocal of the supremum of scales r realized by unit-disc derivatives r v. On a compact manifold, infinitesimal hyperbolicity means these lengths dominate a fixed positive multiple of a smooth Hermitian norm.

**Problem.** On a compact infinitesimally hyperbolic manifold, every nonconstant holomorphic map from a compact connected surface of genus g has area at most A(2g−2). Here the surface is a Riemann surface, area counts multiplicity, and A depends only on the target metric.

**How the definition helps.** The lower bound on tangent lengths turns disc contraction into an upper bound on the area measured by the target metric. In our own argument, uniformization excludes genus zero and one because the target admits no nonconstant holomorphic map from the plane. For higher genus, the disc cover bounds the pulled-back metric by a fixed multiple of the hyperbolic metric. Gauss–Bonnet gives hyperbolic area proportional to 2g−2.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi infinitesimal pseudometric is a Finsler pseudometric”

**Sources:**

- [Jean-Pierre Demailly, Algebraic criteria for Kobayashi hyperbolic projective varieties and jet differentials, Theorem 2.1 (1997)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/source_files/hyperbolic.pdf)

### Kobayashi volume bounds degree

**Remember:** Each sheet contributes the target volume.

*Makes the theorem clean to state or prove.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** Use holomorphic maps from the unit ball that send zero to a chosen manifold point and have invertible derivative there. The Kobayashi–Eisenman density is the infimum of the Euclidean volume densities carried to that point by these derivatives. Integrating this density gives the Kobayashi volume.

**Problem.** Consider a surjective holomorphic map between connected compact Kobayashi hyperbolic manifolds of equal dimension. Its degree times the target Kobayashi volume is at most the source Kobayashi volume.

**How the definition helps.** Composing a test map with the given map shows that the pulled-back target density is at most the source density. At critical points the pulled-back density vanishes. In our own explanation, integration counts each regular target point with its degree, the number of sheets above it.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “The Kobayashi–Eisenman pseudo-volume form is an intrinsic measure on a complex n-fold”

**Sources:**

- [Marco Abate, Iteration Theory of Holomorphic Maps on Taut Manifolds, Theorem 2.3.41 and its proof (1989)](https://people.dm.unipi.it/abate/libri/libriric/files/IterationThTautMan2-3.pdf)

### Picard hyperbolicity makes curve maps algebraic

**Remember:** Fill finitely many punctures, then use projectivity to recover algebraicity.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 4: research.

**Definition.** Fix a smooth projective compactification of a smooth complex algebraic variety, so the variety sits inside a smooth projective variety as a dense open subset. It is Picard hyperbolic if every holomorphic map from a punctured disc into the open subset extends across the puncture into the compactification.

**Problem.** Every holomorphic map from a smooth algebraic curve of finite type into a Picard hyperbolic variety is algebraic.

**How the definition helps.** Picard hyperbolicity fills each missing point of the source curve in the target compactification. In our own argument, this produces a holomorphic map between projective varieties, which the algebraic and analytic comparison theorem makes algebraic. Restriction gives the original map. Without puncture extension, the exponential map from the complex line to the punctured plane is a holomorphic counterexample.

**Paper or page:** [Nevanlinna Pair and Algebraic Hyperbolicity](https://arxiv.org/abs/2102.04624). It says: “Assume that Y⁰ is Picard hyperbolic.”

**Sources:**

- [Nevanlinna Pair and Algebraic Hyperbolicity, Proposition 2.2](https://arxiv.org/abs/2102.04624)

### Visibility gives convex domains the Denjoy–Wolff property

**Remember:** If geodesics must dive inward, orbits cannot drift to two boundary points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds), 32H50. arXiv math.CV, math.DS. Level 4: research.

**Definition.** The Kobayashi distance is a distance on a complex domain that holomorphic maps never increase. A domain has a visibility property when near-geodesics between two different boundary points all pass through one compact set inside it. So such geodesics bend into the interior, as in the hyperbolic disc. Complex visibility and essential visibility are versions of this idea.

**Problem.** Let D be a bounded convex domain in ℂᴺ whose boundary contains no non-trivial analytic disc, and suppose D is complex visible or essentially visible. Then for every holomorphic self-map of D without fixed points, all orbits converge to one boundary point.

**How the definition helps.** Visibility stops an orbit from accumulating at two different boundary points. Our own reason is that the Kobayashi geodesic between two such points would have to pass through a fixed compact set. The bidisc shows the failure, since it is convex but has discs in its boundary (our own example). For a parabolic disc automorphism φ, the orbits of (z, w) ↦ (φ(z), w) tend to a boundary point that depends on w.

**Paper or page:** [Some open questions and conjectures about visibility and iteration in bounded convex domains in ℂᴺ](https://arxiv.org/abs/2507.19967v2), [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications](https://arxiv.org/abs/2111.00549v2). It says: “In particular, if Ω is complex visible or essentially visible then it enjoys the Denjoy-Wolff property.”

**Sources:**

- [Filippo Bracci, Ahmed Yekta Ökten, Some open questions and conjectures about visibility and iteration in bounded convex domains in ℂᴺ, Complex Anal. Synerg. 11 (2025) Paper No. 23, arXiv:2507.19967](https://doi.org/10.1007/s40627-025-00172-2)
- [Vikramjeet Singh Chandel, Anwoy Maitra, Amar Deep Sarkar, Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications, arXiv:2111.00549 (2021)](https://arxiv.org/abs/2111.00549v2)
- [Bharali, Zimmer, Goldilocks domains, a weak notion of visibility, and applications, Advances in Mathematics 310 (2017), 377–425](https://doi.org/10.1016/j.aim.2017.02.005)

### Visibility separates distinct boundary limits

**Remember:** Passing through a compact set costs more as both endpoints escape.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV, math.DG. Level 4: research.

**Definition.** On a bounded domain, the Kobayashi distance measures the least total hyperbolic length of chains of holomorphic discs. Assume this distance is complete. Visibility means each pair of distinct boundary points has neighborhoods such that every shortest path joining them inside the domain meets one fixed compact set.

**Problem.** In such a visible domain, the Kobayashi distance between sequences approaching distinct Euclidean boundary points tends to infinity.

**How the definition helps.** Visibility forces each shortest path through a fixed compact set, even as its endpoints approach distinct boundary points. In our own proof, completeness makes closed metric balls compact, so the distance from either endpoint to that set tends to infinity. Without visibility, the bidisc points (r,0) and (r,½) stay a fixed distance apart as r approaches one.

**Paper or page:** [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications](https://arxiv.org/abs/2111.00549). It says: “then $\\mathsf{k}M(z\\nu ,w\_\\nu ) \\to \\infty $ as $\\nu \\to \\infty $.”

**Sources:**

- [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications, Lemma 3.3](https://arxiv.org/abs/2111.00549)

### Algebraic interpolation connects points rationally

**Remember:** Interpolate two points on the affine line, then add infinity.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV, math.AG. Level 4: research.

**Definition.** An algebraically Oka-1 manifold permits approximation and interpolation of continuous maps from smooth affine algebraic curves by homotopic regular maps. Regular maps are algebraic everywhere on the source. On holomorphically convex compact sets where the initial map is holomorphic nearby, approximation is uniform and interpolation matches finite derivatives at finitely many points.

**Problem.** Every connected projective algebraic Oka-1 manifold is rationally connected. In particular, two distinct points lie on the image of a nonconstant morphism from the projective line.

**How the definition helps.** Algebraic interpolation produces a regular map from the affine line with two prescribed values, using a continuous map constant near the interpolation points (our own). A regular map to a projective manifold extends across infinity on the projective line (our own). Holomorphic interpolation alone permits the exponential map to the projective line, which has an essential singularity at infinity (our own).

**Paper or page:** [Oka-1 manifolds: New examples and properties](https://arxiv.org/abs/2402.09798v4). It says: “Every projective aOka-1 manifold is rationally connected.”

**Sources:**

- [Franc Forstnerič and Finnur Lárusson, Oka-1 manifolds: New examples and properties (published online 2024)](https://doi.org/10.1007/s00209-024-03649-8)

### Oka curves force Liouville rigidity

**Remember:** Pass an entire curve through two points and test the function there.

*Rules out counterexamples.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** An Oka-1 manifold allows continuous maps from open Riemann surfaces to deform to holomorphic maps with approximation and interpolation. Approximation preserves values to any chosen accuracy on compact sets whose complements have no relatively compact components. Interpolation matches prescribed finite derivatives at closed discrete points, assuming the initial map is holomorphic near both sets.

**Problem.** Every plurisubharmonic function bounded above on a connected Oka-1 manifold is constant. Such functions restrict to subharmonic functions or identically minus infinity along holomorphic curves.

**How the definition helps.** Interpolation gives a holomorphic map from ℂ through any two target points (our own). Start with a continuous map that is constant near two chosen arguments and joins their prescribed values along a path (our own). A bounded-above subharmonic function on ℂ is constant, so the two target values of the plurisubharmonic function agree (our own). On the unit ball the squared norm violates this conclusion (our own).

**Paper or page:** [Oka-1 manifolds](https://arxiv.org/abs/2303.15855v5). It says: “Every Oka-1 manifold is strongly Liouville.”

**Sources:**

- [Antonio Alarcón and Franc Forstnerič, Oka-1 manifolds (2025)](https://doi.org/10.1007/s00209-025-03833-4)

### Oka families preserve homotopy groups

**Remember:** Use spheres for representatives and disks for relations.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** A Stein manifold admits a closed holomorphic embedding into some complex coordinate space. Use the parametric Oka property for the target. It deforms continuous families of maps into families of holomorphic maps while fixing a specified subfamily already holomorphic.

**Problem.** For maps from a Stein manifold to an Oka target, inclusion of holomorphic maps into continuous maps induces a bijection on path components. At each holomorphic base map, it also induces isomorphisms on all homotopy groups. Both spaces use uniform convergence on compact sets.

**How the definition helps.** The parametric definition tests precisely the families needed to represent and compare homotopy classes. In our own proof, spheres represent classes and disks give deformations to a point with prescribed boundary values. Points and intervals give the corresponding bijection on path components. The Oka equivalence theorem derives the parametric property from approximation of holomorphic maps near compact convex sets.

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “the inclusion of the space of holomorphic maps X → Y in the space of continuous maps”

**Sources:** none listed. No primary source with a working link was found.

### Oka maps compose and pull back

**Remember:** Use the same lifting rules before and after changing the base.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** In Lárusson’s model for holomorphic maps, an Oka map is a fibration between complex manifolds. A fibration passes prescribed lifting tests that fill compatible diagrams of maps.

**Problem.** Composites of Oka maps are Oka. A pullback of an Oka map is Oka whenever the fiber product exists as a complex manifold.

**How the definition helps.** A lift for a composite comes from solving the two lifting problems in succession (our own). A lift for a pullback comes from a lift for the original map and the defining property of the fiber product (our own). Lárusson identifies these abstract lifting tests with the analytic condition on deforming continuous lifts into holomorphic lifts (our own).

**nLab:** [Oka principle](https://ncatlab.org/nlab/show/Oka+principle). It says: “a holomorphic map is a fibration if and only if it is an Oka map.”

**Sources:**

- [Finnur Lárusson, Model structures and the Oka principle (2004)](https://doi.org/10.1016/j.jpaa.2004.02.005)
- [Franc Forstnerič, Oka maps (2010)](https://doi.org/10.1016/j.crma.2009.12.004)

### The convex approximation property gives every form of the Oka principle

**Remember:** Approximate on convex sets, and every Oka principle follows.

*Makes the theorem clean to state or prove.* MSC 32Q56 (Oka principle and Oka manifolds), 32Q28. arXiv math.CV. Level 4: research.

**Definition.** A complex manifold Y has the convex approximation property (CAP) when the following holds for every compact convex set K in ℂⁿ. Every holomorphic map to Y from a neighbourhood of K is a uniform limit on K of holomorphic maps from all of ℂⁿ. Manifolds with this property are called Oka manifolds.

**Problem.** Let X be a Stein space and Y a manifold with CAP. Then every continuous map from X to Y is homotopic to a holomorphic map. The versions of this Oka principle with approximation, interpolation and parameters also hold, and they are all equivalent to each other.

**How the definition helps.** CAP is one simple test on convex sets in ℂⁿ, and the quoted theorem derives all the global Oka properties from it. So, in our own words, a new example of an Oka manifold needs only this one test. The work moves into that theorem, due to Forstnerič. The unit disc lacks CAP, because by Liouville's theorem every holomorphic map from ℂⁿ into it is constant (our own example).

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “A complex manifold Y which enjoys CAP has all Oka properties in Def. for maps X → Y from any Stein space X. Furthermore, all these Oka properties are pairwise equivalent.”

**Sources:**

- [Franc Forstnerič, From Stein manifolds to Oka manifolds: the h-principle in complex analysis, arXiv:2509.21197 (2025)](https://arxiv.org/abs/2509.21197v1)
- [Forstnerič, Runge approximation on convex sets implies the Oka property, Annals of Mathematics 163 (2006), 689–707](https://doi.org/10.4007/annals.2006.163.689)

### Integral closure preserves Łojasiewicz exponents

**Remember:** Integral closure changes generators but not their least order along an arc.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a holomorphic ideal with an isolated zero, measure its order on an analytic arc by the least vanishing order of its generators. Divide this by the least order of the arc coordinates. The Łojasiewicz exponent is the supremum of these ratios over nonconstant arcs through zero.

**Problem.** The Łojasiewicz exponent stays fixed on passing to the integral closure. This closure adds solutions of monic equations whose j-th coefficient after the leading term belongs to the j-th ideal power.

**How the definition helps.** The arc criterion says that integral closure preserves the least order on each arc (our own). Every ratio in the supremum therefore stays fixed (our own). Curve selection identifies this supremum with the least α for which the generator norm is at least a positive constant times \|z\|ᵅ (our own).

**Paper or page:** [Effective Bertini theorem and formulas for multiplicity and the local Łojasiewicz exponent](https://arxiv.org/abs/2106.10924v1). It says: “the Łojasiewicz exponent ℒ₀(f) is given by”

**Sources:**

- [Monique Lejeune-Jalabert and Bernard Teissier, Clôture intégrale des idéaux et équisingularité, 2008](https://doi.org/10.5802/afst.1203)

### Nondegenerate polygons compute Milnor numbers

**Remember:** The polygon counts correctly when no face hides a critical point.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Newton polygon is the lower boundary of the convex hull of all exponent pairs of nonzero terms plus the nonnegative quadrant. A plane germ is convenient if this boundary meets both axes. It is Newton nondegenerate if, on each compact face, the sum of its terms has no critical point with both coordinates nonzero.

**Problem.** For a convenient Newton nondegenerate plane germ vanishing at zero, the Milnor number equals twice the area under the polygon minus both intercepts plus one. This number is the dimension of local functions modulo the first derivatives.

**How the definition helps.** Nondegeneracy rules out critical points of face polynomials that the polygon alone cannot detect (our own). The germs (x+y)² + y³ and x² + y² have the same polygon but Milnor numbers 2 and 1 respectively (our own). Kouchnirenko’s theorem gives the area formula under the face condition (our own).

**Paper or page:** [On real algebraic links in the 3-sphere associated with mixed polynomials](https://arxiv.org/abs/2011.11206v4). It says: “with equality holding if and only if q is non-degenerate.”

**Sources:**

- [Anatoli Kouchnirenko, Polyèdres de Newton et nombres de Milnor, 1976](https://doi.org/10.1007/bf01389769)

### Rounded divisors make jumps discrete

**Remember:** The ideal can change only when a rounded coefficient changes.

*True by definition.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** Resolve a nonzero holomorphic ideal so its pullback is locally generated by a monomial in coordinates. Along each coordinate divisor, let m be the ideal’s vanishing order and k the Jacobian determinant’s order. The multiplier ideal at c consists of functions whose pullbacks vanish to order at least ⌊cm⌋ − k along each divisor.

**Problem.** At a point of a complex manifold, the positive numbers where a nonzero holomorphic ideal’s multiplier ideal changes are rational and locally finite.

**How the definition helps.** Each rounded order stays fixed until cm reaches an integer (our own). Finitely many divisors occur locally, so only finitely many such rational values occur in any bounded interval (our own). Change of variables identifies this order test with the usual weighted square-integrability definition (our own).

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [Lawrence Ein, Robert Lazarsfeld, Karen E. Smith and Dror Varolin, Jumping coefficients of multiplier ideals, 2004](https://doi.org/10.1215/s0012-7094-04-12333-4)

### ℚ-factorial germs forbid projective small resolutions

**Remember:** A divisor pulled back from the base has degree zero on a collapsed curve.

*Rules out counterexamples.* MSC 32S05 (Local complex singularities). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A normal complex germ is ℚ-factorial if a positive multiple of each divisor has one local meromorphic equation. A small resolution replaces the singularity by a smooth space without collapsing any divisor.

**Problem.** A singular locally ℚ-factorial normal complex germ has no projective small resolution.

**How the definition helps.** Smallness lets a relatively ample divisor descend as a divisor, and ℚ-factoriality gives a multiple with a local equation downstairs (our own). Pulling it back recovers that multiple, which then has degree zero on each collapsed curve (our own). Projectivity requires a positive degree there (our own). The node xy = zw admits a projective small resolution and fails ℚ-factoriality (our own).

**Paper or page:** [On isolated hypersurface singularities: algebra-geometric and symplectic aspects](https://arxiv.org/abs/2405.03475v1). It says: “is locally analytically ℚ-factorial, then X does not admit a small resolution.”

**Sources:** none listed. No primary source with a working link was found.

### Normalization quotients control delta jumps

**Remember:** Count missing functions in the branches, then track that count in families.

*Makes the theorem clean to state or prove.* MSC 32S10 (Invariants of analytic local rings), 32S30. arXiv math.AG, math.CV. Level 4: research.

**Definition.** Consider a reduced complex curve near a point, with no repeated components. Its normalization gives each local branch its own smooth parameter disk. The delta invariant counts the dimension of holomorphic functions on these disks modulo functions pulled back from the curve.

**Problem.** Vary the maps from finitely many pointed disks holomorphically with one parameter, keeping their origins at the marked point. Suppose the central maps parametrize distinct branches, each once. For nearby parameters the delta invariant of the image curve cannot exceed its central value.

**How the definition helps.** In our own explanation, the quotient definition makes delta count independent functions missing from the parametrization. In a family, finiteness and control of the nearby branch parametrizations are essential. Proposition 25 supplies the dimension bound for these quotients.

**Paper or page:** [On Delta for parameterized Curve Singularities](https://arxiv.org/abs/2101.01784v1). It says: “and δℂ(𝒪(Cₛ,0)) ≤ δℂ(𝒪(C₀,0)).”

**Sources:**

- [Gert-Martin Greuel and Gerhard Pfister, On Delta for parameterized Curve Singularities (2021 preprint)](https://arxiv.org/abs/2101.01784v1)

### Simultaneous normalization trivializes marked curves

**Remember:** Trivialize the normalized branches, then glue back their marked points.

*True by definition.* MSC 32S15 (Equisingularity (topological and analytic)), 32S05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A weak simultaneous resolution of a marked family of reduced curves uses one finite map to normalize every fiber, separating its branches into smooth curves. The normalized curves form a flat family, and the marked points above the section form disjoint copies of the base.

**Problem.** Consider a flat family of reduced complex curve germs over a disk, with smooth fibers away from their marked points. A weak simultaneous resolution makes the family locally a topological product respecting the marks.

**How the definition helps.** The resolution separates the branches while tracking precisely which points to identify again (our own). Locally the smooth normalized branches are products with marked sections (our own). Gluing these sections fiber by fiber gives the marked product downstairs (our own). The cited theorem also characterizes this situation by constant numerical invariants.

**Paper or page:** [Equinormalizability and topologically triviality of deformations of isolated curve singularities over smooth base spaces](https://arxiv.org/abs/1504.01296v1). It says: “f admits a weak simultaneous resolution”

**Sources:**

- [Equinormalizability and topologically triviality of deformations of isolated curve singularities over smooth base spaces](https://arxiv.org/abs/1504.01296v1)

### Tjurina bases parametrize deformations

**Remember:** One basis vector gives one necessary first-order parameter.

*Makes the theorem clean to state or prove.* MSC 32S30 (Deformations of complex singularities; vanishing cycles), 32B05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a hypersurface equation f, the Tjurina algebra consists of convergent power series modulo f and its first derivatives. At an isolated singularity this algebra has finite dimension.

**Problem.** At an isolated complex hypersurface singularity, basis representatives gⱼ of its Tjurina algebra give a semiuniversal deformation f + ∑ tⱼgⱼ = 0. Every local deformation comes from this family by changing parameters, and the family uses the fewest possible parameters.

**How the definition helps.** The quotient removes exactly the first-order changes caused by coordinate changes and multiplication by invertible functions (our own explanation). A basis leaves one parameter per independent direction. The analytic versality theorem shows that these directions suffice for actual families.

**Paper or page:** [Grauert's Approximation Theorem in any Characteristic and Applications](https://arxiv.org/abs/2510.21001v2). It says: “is a semiuniversal (respectively versal) deformation of R.”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing cycles yield reduced cohomology

**Remember:** The cone removes the classes that were already present at the central point.

*True by definition.* MSC 32S30 (Deformations of complex singularities; vanishing cycles), 32S55. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Nearby cycles record cochains on nearby fibers of a holomorphic function. Unshifted vanishing cycles form the mapping cone of the map from central to nearby cochains. This cone records which cohomology classes the map gains or loses.

**Problem.** At each point of the zero fiber of a nonconstant holomorphic function on a connected complex manifold, vanishing cycles give the reduced Milnor fiber cohomology. Both sides use complex coefficients and the same degree.

**How the definition helps.** The cone of the constant-class map computes reduced cohomology (our own). The nearby-cycle comparison identifies local nearby cochains with cochains of the Milnor fiber (our own). Under this comparison the specialization map sends a scalar to the constant cochain with that value (our own).

**nLab:** [vanishing cycle](https://ncatlab.org/nlab/show/vanishing+cycle). It says: “Deligne proposed the framework of vanishing and nearby cycle functors.”

**Paper or page:** [Geometric monodromies, mixed Hodge numbers of motivic Milnor fibers and Newton polyhedra](https://arxiv.org/abs/2308.09418v3). It says: “stand for the reduced cohomology groups of Fₓ.”

**Sources:**

- [Pierre Deligne, Le formalisme des cycles évanescents, in SGA 7 II, edited by Pierre Deligne and Nicholas Katz, 1973 (volume DOI)](https://doi.org/10.1007/bfb0060505)

### Bernstein equations continue singular integrals

**Remember:** The functional equation shifts the singular integral to a more convergent one.

*True by definition.* MSC 32S40 (Monodromy; relations with differential equations and \\(D\\)-modules (complex-analytic aspects)), 32S05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Bernstein–Sato polynomial of f is the monic polynomial b of least degree that permits a functional equation. A differential operator with polynomial dependence on s must send fˢ⁺¹ to b(s)fˢ.

**Problem.** For a nonzero holomorphic germ f, the integral of \|f\|²ˢ against any smooth test density supported compactly near zero extends meromorphically from Re(s) &gt; 0.

**How the definition helps.** The functional equation expresses a polynomial multiple of \|f\|²ˢ using derivatives of the more convergent power \|f\|²⁽ˢ⁺¹⁾ (our own). Apply the equation and its coefficient conjugate, keeping s unchanged, then integrate by parts onto the test density (our own). Iteration replaces a direct analysis of the singular integral by continuation one strip at a time (our own). Existence of the functional equation is the substantive theorem (our own).

**Wikipedia:** [Bernstein–Sato polynomial](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Sato_polynomial). It says: “can be analytically continued to a meromorphic distribution-valued function of s by repeatedly using the functional equation”

**Sources:**

- [Joseph Bernstein, The analytic continuation of generalized functions with respect to a parameter, 1972](https://doi.org/10.1007/bf01077645)

### Crossings contribute no zeta factor

**Remember:** At a crossing the local fiber has circles, so its Lefschetz contributions cancel.

*Makes the theorem clean to state or prove.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A log resolution makes the pulled-back function a coordinate monomial times a nonvanishing factor. Monodromy is the return map T after one turn around zero. Its zeta function multiplies det(1 − tT) on even fiber cohomology and divides by the corresponding factors on odd cohomology.

**Problem.** In A’Campo’s formula each component of multiplicity m contributes (1 − tᵐ) raised to the Euler characteristic of its part above zero outside other components. Intersections of components contribute no factor.

**How the definition helps.** The monomial model gives a finite union of positive-dimensional tori up to homotopy wherever two or more components meet (our own). Each return permutes tori or translates them, so the alternating traces cancel there (our own). On a single component the return cycles m sheets (our own). A’Campo’s theorem assembles these local factors using Euler characteristics (our own).

**Paper or page:** [Geometric monodromies, mixed Hodge numbers of motivic Milnor fibers and Newton polyhedra](https://arxiv.org/abs/2308.09418v3). It says: “Then we have ζₕ,₀(j!ℒ)(t)=1.”

**Sources:**

- [Norbert A’Campo, La fonction zêta d’une monodromie, 1975](https://doi.org/10.1007/bf02565748)

### Cyclic covers split Milnor cohomology

**Remember:** The finite cover turns each monodromy eigenspace into local coefficient cohomology.

*True by definition.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV, math.AG. Level 4: research.

**Definition.** For a reduced homogeneous polynomial Q of degree d &gt; 0, the global Milnor fiber is the level Q = 1. Sending each point to its complex line maps this fiber to the projective complement of Q = 0. Multiplication by d-th roots of unity permutes the sheets.

**Problem.** For each character of the roots of unity, its eigenspace in complex fiber cohomology equals the complement cohomology with the corresponding local coefficients. These coefficients are functions on the sheets that transform by that character under pullback.

**How the definition helps.** The global level meets each line of the complement in exactly d points, exhibiting the fiber as a finite cover (our own). Functions on the sheets split by characters, and this splitting passes to cohomology (our own). Homogeneous scaling connects this global model to the nearby fiber inside a small ball (our own).

**nLab:** [Milnor fiber](https://ncatlab.org/nlab/show/Milnor+fiber). It says: “Relation to local systems on the complement of a union of complex hyperplanes”

**Sources:**

- [Daniel Cohen and Alexander Suciu, On Milnor Fibrations of Arrangements, 1995](https://doi.org/10.1112/jlms/51.1.105)

### Vanishing cycles locate Dehn twists

**Remember:** The collapsing circle specifies where to twist.

*Rules out counterexamples.* MSC 32S55 (Milnor fibration; relations with knot theory). arXiv math.CV. Level 4: research.

**Definition.** A geometric vanishing cycle is an embedded circle in a smooth complex curve fiber that shrinks to a point in a nearby singular fiber. Curves related by a deformation through embedded circles represent the same cycle.

**Problem.** Around one ordinary node, locally given by xy = t, counterclockwise transport acts by a positive Dehn twist about the geometric vanishing cycle.

**How the definition helps.** The embedded circle specifies the annulus on which to perform the twist (our own). The local model gives one full turn of one boundary relative to the other (our own). For isolated plane curve singularities of fiber genus at least two, the cited lemma gives circles with the same homology class that cannot collapse.

**Paper or page:** [Vanishing arcs for isolated plane curve singularities](https://arxiv.org/abs/2506.04917v1). It says: “that represents the vanishing cycle but such that it is not a geometric vanishing cycle.”

**Sources:**

- [Vanishing arcs for isolated plane curve singularities](https://arxiv.org/abs/2506.04917v1)

### Paracyclic representations define perverse sheaves on surfaces without derived categories

**Remember:** On a surface, a perverse sheaf is a representation of Milnor disks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32S60 (Stratifications; constructible sheaves; intersection cohomology (complex-analytic aspects)), 14F08. arXiv math.AG, math.AT. Level 4: research.

**Definition.** A Milnor disk of a stratified surface is a closed disk together with a part of its boundary. Dyckerhoff, Kapranov and Soibelman use the Milnor disks of the surface's paracyclic category. A representation is a functor on these disks that satisfies simple gluing conditions.

**Problem.** On a stratified surface, perverse sheaves are equivalent to the representations of the Milnor disks of its paracyclic category.

**How the definition helps.** Only functors on Milnor disks with simple gluing conditions are needed, so perverse sheaves form an abelian category with no derived categories. Usually the abelian structure comes from a theorem about the heart of a t-structure (our own). The key step is purity. A constructible complex is perverse exactly when its relative cohomology on every Milnor disk is zero outside degree 0.

**Paper or page:** [Perverse sheaves on Riemann surfaces as Milnor sheaves](https://arxiv.org/abs/2012.11388v2). It says: “In particular, this perspective yields an intrinsic definition of perverse sheaves as an abelian category without reference to derived categories and t-structures.”

**Sources:**

- [Tobias Dyckerhoff, Mikhail Kapranov, Yan Soibelman, Perverse sheaves on Riemann surfaces as Milnor sheaves, arXiv:2012.11388v2 (2021)](https://arxiv.org/abs/2012.11388v2)

### Property P excludes boundary discs

**Remember:** An analytic disc cannot carry arbitrarily curved bounded weights.

*Rules out counterexamples. Confidence: medium.* MSC 32T27 (Geometric and analytic invariants on weakly pseudoconvex boundaries), 32W05. arXiv math.CV, math.AP. Level 4: research.

**Definition.** A boundary has property P in degree one if each M &gt; 0 admits a smooth weight between zero and one on a boundary neighborhood. Its matrix of mixed complex second derivatives must dominate M times the identity there.

**Problem.** A smooth bounded pseudoconvex domain with property P in degree one admits no nonconstant holomorphic map from the unit disc into its boundary.

**How the definition helps.** Pulling the bounded weight back to a small disc makes its Laplacian arbitrarily large throughout that disc (our own). Choose the disc where the derivative of the map stays bounded away from zero (our own). The circle mean inequality then forces an increase larger than one, contradicting the bound on the weight (our own).

**Paper or page:** [The Levi q-core and Property (P in degree q)](https://arxiv.org/abs/2505.17693v1). It says: “Then M satisfies Property (P<sub>q</sub>)”

**Sources:** none listed. No primary source with a working link was found.

### The Levi core retains complex boundary manifolds

**Remember:** A whole complex boundary manifold survives every deletion.

*Makes the theorem clean to state or prove.* MSC 32T27 (Geometric and analytic invariants on weakly pseudoconvex boundaries), 32W05. arXiv math.CV. Level 4: research.

**Definition.** Start with the kernel of the Levi form, the complex Hessian of a boundary equation restricted to complex tangent directions. At each step retain only directions tangent to the closed support, the closure of points with nonzero directions. Tangents annihilate smooth functions vanishing on the support, and intersection at limit stages gives the eventual stable distribution called the Levi core.

**Problem.** On a smooth pseudoconvex boundary, the Levi core contains the holomorphic tangent directions of every positive-dimensional embedded complex submanifold of the boundary.

**How the definition helps.** The deletion rule preserves directions along any such submanifold because the support still contains the whole submanifold (our own). Its directions start in the Levi kernel by pseudoconvexity and the vanishing boundary equation (our own). Induction gives survival through every stage, which membership in the original kernel alone would not show (our own).

**Paper or page:** [The core of the Levi distribution](https://arxiv.org/abs/2109.04763v1). It says: “Let V ⊂ M be an embedded submanifold of positive dimension”

**Sources:**

- [The core of the Levi distribution](https://arxiv.org/abs/2109.04763v1)

### Integrability thresholds give analytic loci

**Remember:** Strong openness turns a threshold into one ideal’s zero set.

*Makes the theorem clean to state or prove.* MSC 32U05 (Plurisubharmonic functions and generalizations), 14F18. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Let φ be upper semicontinuous and subharmonic on complex lines in local coordinates. Its complex singularity exponent at x is the supremum of c ≥ 0 for which exp(−2cφ) is integrable near x.

**Problem.** For each c &gt; 0, the points with exponent at most c form an analytic set. This means holomorphic equations cut out the set locally.

**How the definition helps.** The exponent puts all local integrability tests on one numerical scale. In our own explanation, strong openness rules out integrability at a finite endpoint. The constant function then fails the multiplier ideal test precisely on the stated set. Coherence supplies finitely many local holomorphic generators of the ideal, whose common zeros give the equations.

**Paper or page:** [Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1). It says: “\\{  z \\in \\Omega ; c<sub>z</sub> (\\varphi ) \\leq c \\}  = \\{  z \\in \\Omega ; e<sup>- 2 c \\varphi </sup> \\notin L<sup>1\_{\\emph{loc}</sup>, z} \\}  = \\bigcap \_{f \\in \\bigcup <sub>c' &gt; c</sub> \\mathcal{H}<sub>\\Omega </sub> (c' \\varphi )} f<sup>- 1</sup> (0)”

**Sources:**

- [Bojie He, Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1)
- [Q. Guan and X. Zhou, A proof of Demailly’s strong openness conjecture (2015)](https://doi.org/10.4007/annals.2015.182.2.5)

### Radial reweighting gives concavity

**Remember:** Geometric means of integrable weights are integrable by Hölder’s inequality.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 4: research.

**Definition.** Let φ be plurisubharmonic near zero in ℂⁿ, meaning it is upper semicontinuous and satisfies the disk mean inequality on complex lines. For t &gt; −n, its weighted singularity exponent c(t) is the supremum of c ≥ 0 for which \|z\|²ᵗ exp(−2cφ) is locally integrable at zero.

**Problem.** The weighted singularity exponent c(t) is nondecreasing and concave on t &gt; −n, allowing the value +∞.

**How the definition helps.** The integrability definition makes c(t) the upper boundary of a convex set of exponent pairs. In our own proof, interpolation takes geometric means of two integrands, so Hölder’s inequality gives convexity. Increasing t decreases the integrand inside the unit ball. The alternative description by decay of weighted sublevel volumes requires integrating over the levels of φ.

**Paper or page:** [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238). It says: “is concave and increasing.”

**Sources:**

- [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238)

### Slice comparison puts maxima on boundaries

**Remember:** An affine bound on a slice rules out a strict interior peak.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 4: research.

**Definition.** Call an upper semicontinuous function q-plurisubharmonic if it satisfies affine comparison on every complex affine plane of dimension q + 1. Affine comparison means the following. Take a closed ball in a slice of the domain by such a plane. If a real affine function bounds the function above on the boundary of the ball, then that bound holds on the whole ball.

**Problem.** Take a nonempty bounded open set in ℂⁿ and an integer q between zero and n − 1 inclusive. A q-plurisubharmonic function there, upper semicontinuous on the closure, attains its maximum on the boundary.

**How the definition helps.** Affine comparison rules out a strict interior peak even when derivatives do not exist. In our own proof, suppose an interior value exceeds every boundary value, and add a small multiple of \|z\|² without losing the gap. At an interior maximum of the sum, a tangent affine function lies strictly above the original function on small spheres in a test plane. Lowering it slightly contradicts comparison.

**Paper or page:** [On rigid q-plurisubharmonic functions and q-pseudoconvex tube domains in ℂⁿ](https://arxiv.org/abs/2510.05009v2). It says: “Then any function $u$ which is upper semi-continuous on $\\overline{\\Omega }$ and $q$-plurisubharmonic on $\\Omega $ fulfills\\\[ \\max \\{ \\psi (z) : z \\in \\overline{\\Omega }\\} = \\max \\{ \\psi (z) : z \\in \\partial \\Omega \\} . \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Complete poles make holes removable

**Remember:** A pole exactly on the hole supplies the cutoff.

*Rules out counterexamples.* MSC 32U30 (Removable sets in pluripotential theory), 32U05. arXiv math.CV. Level 4: research.

**Definition.** A plurisubharmonic function is upper semicontinuous and satisfies the disk mean inequality on every complex line. A complete pluripolar set is exactly the set where one such function equals −∞, with the function finite somewhere.

**Problem.** In a domain in ℂⁿ with n ≥ 2, every plurisubharmonic function outside a compact complete pluripolar set extends uniquely across it.

**How the definition helps.** The defining function singles out the entire hole with one pole set, giving cutoff functions in our own account of Wang’s proof. Wang uses estimates near that set to extend the complex Hessian and recover a potential. For an arbitrary compact hole, take a sphere and assign one inside and zero outside. The maximum principle prevents an extension.

**Paper or page:** [Complete pluripolar sets and removable singularities of plurisubharmonic functions](https://arxiv.org/abs/2210.01416). It says: “Then every psh function on Ω ∖ K admits a unique psh extension to Ω.”

**Sources:**

- [Complete pluripolar sets and removable singularities of plurisubharmonic functions](https://arxiv.org/abs/2210.01416)

### Nonpluripolar constraints bound envelopes

**Remember:** A constraint at a logarithmic pole cannot control the rest of the envelope.

*Rules out counterexamples.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 4: research.

**Definition.** A pluripolar set lies locally where a plurisubharmonic function finite somewhere takes the value −∞. On a compact connected Kähler manifold with form ω, an ω-potential becomes plurisubharmonic after adding a local potential for ω. The extremal envelope of E is the supremum of ω-potentials bounded above by zero on E.

**Problem.** For a nonpluripolar Borel set E, the upper limit of nearby envelope values defines an ω-potential everywhere.

**How the definition helps.** Nonpluripolarity bounds the family above, so the upper-envelope theorem gives an ω-potential. In our own counterexample, a potential on the projective line has a logarithmic pole at one point. Adding any constant preserves the constraint there and sends the supremum to infinity everywhere else.

**Wikipedia:** [Pluripolar set](https://en.wikipedia.org/wiki/Pluripolar_set). It says: “A pluripolar set is any subset of a complete pluripolar set.”

**Paper or page:** [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171). It says: “If E is not pluripolar, then Vₑ\* ∈ PSH(X,ω).”

**Sources:**

- [Regularity of the Siciak-Zaharjuta extremal function on compact Kähler manifolds](https://arxiv.org/abs/2305.04171)

### Open constraints preserve semicontinuity

**Remember:** An open constraint survives taking upper limits.

*Rules out counterexamples.* MSC 32U35 (Plurisubharmonic extremal functions, pluricomplex Green functions), 32U05. arXiv math.CV. Level 4: research.

**Definition.** On a compact connected Kähler manifold, fix its positive closed form ω. An admissible potential becomes plurisubharmonic after adding a local potential for ω, so it obeys the complex-line disk mean inequality after that addition. The extremal function V of E is the supremum of admissible potentials bounded above by zero on E.

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

**How the definition helps.** Our own proof uses the defining polar function to enforce every added constraint at once. Shift it to be nonpositive and mix any competitor with a small positive proportion of it. The mixture stays admissible and equals −∞ on the polar set. As the proportion shrinks, the mixtures recover the competitor outside a set of measure zero, and the corrected supremum ignores such sets.

**Paper or page:** [Polar sets for m-subharmonic functions on compact Hermitian manifolds](https://arxiv.org/abs/2511.01159). It says: “Let E ⊂ X and P be a m-polar set. Then, V₍E ∪ P₎⋆ = V₍E₎⋆.”

**Sources:**

- [Polar sets for m-subharmonic functions on compact Hermitian manifolds, Corollary 6.10](https://arxiv.org/abs/2511.01159)

### Nonpluripolar restriction drops divisorial mass

**Remember:** Read the smooth part and leave the divisor mass behind.

*True by definition.* MSC 32U40 (Currents). arXiv math.CV. Level 4: research.

**Definition.** A current is a differential form with distribution coefficients. A positive current of type (1, 1) has measure coefficients and pairs nonnegatively with positive test forms of complementary degree. Analytic singularities come from local potentials with logarithms of sums of squared absolute values of holomorphic functions, up to smooth terms. Restrict the current off their common zero set and extend its coefficients by zero.

**Problem.** For a closed positive current of type (1, 1) with analytic singularities, this restriction is its absolutely continuous part. It is again closed and positive.

**How the definition helps.** Restriction separates smooth coefficients from mass concentrated on the singular set. In our own argument, the current is smooth off that set, and the set has ordinary volume zero. Extension by zero therefore gives exactly the part absolutely continuous with respect to volume. The extension theorem for positive closed currents supplies the separate conclusion that this part remains closed.

**Paper or page:** [Definitions of the volume of a big cohomology class](https://arxiv.org/abs/2506.09486v1). It says: “If $T$ is a closed positive $(1,1)$-current with analytic singularities along $A\\subset X$, then $T<sub>ac</sub> =1<sub>X\\setminus A</sub>T$.”

**Sources:** none listed. No primary source with a working link was found.

### Pluripolar cutoffs preserve closedness

**Remember:** A defining pole lets cutoffs approach a hole without leaving a boundary term.

*Rules out counterexamples.* MSC 32U40 (Currents), 32U05. arXiv math.CV. Level 4: research.

**Definition.** A closed complete pluripolar set is a closed set locally equal to the −∞ set of a plurisubharmonic function finite somewhere. Such a function is upper semicontinuous and obeys the disk mean inequality on complex lines. A positive current is a generalized differential form with measure coefficients, and it is closed when its distributional exterior derivative vanishes.

**Problem.** Consider a closed positive current outside a closed complete pluripolar set, with locally finite mass near that set. Extending its coefficients by zero preserves closedness.

**How the definition helps.** The defining function supplies cutoffs that approach the hole while controlling their derivatives. In our own account, El Mir uses positivity and finite mass to show that no boundary term survives. In ℂ² the standard Kähler form on one side of a real hyperplane acquires a boundary term when extended by zero.

**Wikipedia:** [Skoda–El Mir theorem](https://en.wikipedia.org/wiki/Skoda%E2%80%93El_Mir_theorem). It says: “Then the trivial extension of Θ to X is closed on X.”

**Sources:**

- [Hassine El Mir, Sur le prolongement des courants positifs fermés, Acta Mathematica 153 (1984), 1–45](https://doi.org/10.1007/BF02392374)

### Restricted currents add divisorial coefficients

**Remember:** Restrict both summands to the same hypersurface before adding.

*True by definition.* MSC 32U40 (Currents), 32U25. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A positive closed current of type (1,1) generalizes a closed differential form with a positive semidefinite matrix of coefficients. Its coefficients can be measures. Restrict those measures to an irreducible analytic hypersurface, a single component of complex codimension one. The restricted current equals a constant times integration over the hypersurface.

**Problem.** For two such currents on a complex manifold, their coefficients on any fixed irreducible hypersurface add.

**How the definition helps.** In our own proof, restriction adds measure coefficients term by term, so the multiples of integration add too. The comparison theorem identifies each multiple with the generic Lelong number, the current’s local density at typical points of the hypersurface. The theorem supplies the constant multiple description, which avoids computing those densities.

**Paper or page:** [On the Canonical Bundle Formula and Adjunction for Generalized Kaehler Pairs](https://arxiv.org/abs/2404.12007v1). It says: “χ₍A₎T = ν(T, A)\[A\], where ν(T, A) is the generic Lelong number of T along A.”

**Sources:** none listed. No primary source with a working link was found.

### Green operator separates harmonic forms

**Remember:** Invert away from the kernel and project onto it.

*True by definition.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** The Kohn Laplacian is the self-adjoint operator measuring energy in the tangential Cauchy–Riemann equations. Its kernel consists of harmonic forms. When the range is closed, the complex Green operator inverts the Laplacian on the orthogonal complement of this kernel and vanishes on the kernel.

**Problem.** Applying the Green operator then the Laplacian subtracts the orthogonal projection onto harmonic forms from any square-integrable form. The reverse order gives the same result on the Laplacian’s domain.

**How the definition helps.** The partial inverse handles the kernel by discarding exactly the component that the Laplacian cannot recover (our own argument). On its orthogonal complement both compositions act as the identity. The closed range hypothesis ensures that this inverse is bounded.

**Paper or page:** [On the singularities of the Szegő kernels on CR orbifolds](https://arxiv.org/abs/2208.03690). It says: “such that N□ᵦ⁽ᵠ⁾ + Π⁽ᵠ⁾ = I on Dom □ᵦ⁽ᵠ⁾”

**Sources:**

- [Andrea Galasso and Chin-Yu Hsiao, On the singularities of the Szegő kernels on CR orbifolds (arXiv:2208.03690v1)](https://arxiv.org/abs/2208.03690)

### Mixed Levi signs remove singularities

**Remember:** Mixed Levi signs give a negative direction for either normal.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** At a point of a smooth real hypersurface in complex space, complex tangents are tangent vectors whose multiples by i remain tangent. The scalar Levi form is the complex Hessian of a defining function restricted to these directions. Mixed signature means it has both positive and negative eigenvalues.

**Problem.** Where the Levi form has mixed signature, every distribution satisfying the tangential Cauchy–Riemann equations is locally a smooth function.

**How the definition helps.** Mixed signature supplies a negative eigenvalue for either sign of a covector annihilating the complex tangents (our own deduction). The tangential equations confine possible singular directions to that covector line. The cited regularity theorem excludes each direction with a negative eigenvalue, exhausting the line. On the sphere the boundary value of 1/(1 − z₁) gives a singular solution.

**Paper or page:** [Regularity of infinitesimal automorphisms of involutive structures](https://arxiv.org/abs/2506.24105). It says: “the Levi form in σ has one negative eigenvalue”

**Sources:**

- [Bernhard Lamel and Nicholas Braun Rodrigues, Regularity of infinitesimal automorphisms of involutive structures (arXiv:2506.24105v1)](https://arxiv.org/abs/2506.24105)

### Transversality prevents Levi collapse

**Remember:** A nonzero normal factor carries Levi positivity through the map.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** A Cauchy–Riemann map preserves complex tangent directions and their complex structure. Between hypersurfaces it is transverse when its derivative acts nontrivially on the real tangent lines left after quotienting by complex tangents. The Levi form measures complex second derivatives of a defining function along complex tangents.

**Problem.** Suppose the source Levi form is positive definite and the target Levi form is positive semidefinite for suitable defining functions. A twice continuously differentiable Cauchy–Riemann map has injective derivative wherever it is transverse.

**How the definition helps.** Transversality makes the pulled-back target Levi form a nonzero multiple of the source form (our own argument). Definiteness therefore excludes a kernel on the complex tangents, and transversality excludes all remaining kernel vectors. A constant map illustrates failure without transversality.

**Paper or page:** [Regularity of CR maps into uniformly pseudoconvex hypersurfaces and applications to proper holomorphic maps](https://arxiv.org/abs/2302.14016). It says: “Then h is an immersion”

**Sources:**

- [Josef Greilhuber and Bernhard Lamel, Regularity of CR maps into uniformly pseudoconvex hypersurfaces and applications to proper holomorphic maps (arXiv:2302.14016v1)](https://arxiv.org/abs/2302.14016)

### Two-jets determine CR symmetries

**Remember:** After normalization, only the quadric’s second-order freedom remains.

*Rules out counterexamples.* MSC 32V05 (CR structures, CR operators, and generalizations). arXiv math.CV, math.DG. Level 4: research.

**Definition.** The two-jet of a holomorphic map at a point records its value and all first and second derivatives there. A hypersurface is Levi-nondegenerate when the complex Hessian of a defining function has zero kernel on complex tangent vectors.

**Problem.** Two local biholomorphic symmetries of a Levi-nondegenerate real analytic hypersurface in ℂⁿ, n ≥ 2, agree near a fixed point if their two-jets agree there.

**How the definition helps.** The two-jet records all freedom left by the Chern–Moser choice of coordinates (our own explanation). Their normalization theorem fixes the higher coefficients once these initial parameters agree. The flat hypersurface Im w=0 in ℂ² allows the symmetry (z,w) ↦ (z+z³,w), which shares the identity’s two-jet.

**Paper or page:** [New examples of CR submanifolds for the 2-jet determination problem](https://arxiv.org/abs/2506.21221). It says: “is uniquely determined by its 2-jet.”

**Sources:**

- [S. S. Chern and J. K. Moser, Real hypersurfaces in complex manifolds](https://doi.org/10.1007/BF02392146)

### Finite bracket type permits wedge extension

**Remember:** Bracket spanning rules out an independent real parameter with arbitrary boundary data.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32V25. arXiv math.CV, math.DG. Level 4: research.

**Definition.** A real submanifold in complex space is generic when its tangent space spans the ambient space over ℂ at each point. Finite bracket type means that complex tangent fields, their conjugates, and their repeated brackets span the submanifold’s complexified tangent space at the point.

**Problem.** Near a finite bracket type point of a smooth generic submanifold of positive codimension, every smooth solution of the tangential Cauchy–Riemann equations extends holomorphically. The extension occupies a wedge opening along a cone of normal directions.

**How the definition helps.** Bracket generation excludes a free real parameter on which solutions could depend arbitrarily (our own explanation). On Im w = 0, a smooth function of Re w can vanish for negative arguments and be positive for positive arguments. Boundary uniqueness on a half-disc prevents holomorphic extension across that transition into either side. Tumanov’s theorem supplies the extension under the bracket condition.

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044). It says: “it is of Bloom-Graham finite type at p”

**Sources:**

- [A. E. Tumanov, Extension of CR Functions into a Wedge from a Manifold of Finite Type](https://doi.org/10.1070/sm1989v064n01abeh003298)

### Finite contact gives a Sobolev gain

**Remember:** Finite type gives a uniform ceiling on how flat complex curves can be.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32W05. arXiv math.CV, math.AP. Level 4: research.

**Definition.** D’Angelo one-type measures contact between a smooth boundary ρ = 0 and nonconstant holomorphic curves γ through a boundary point p. It takes the supremum of the vanishing order of ρ ∘ γ divided by the smallest vanishing order among the coordinates of γ − p. A flat composition contributes infinity.

**Problem.** Suppose the boundary is pseudoconvex near p, meaning its complex Hessian is nonnegative on complex tangents for a defining function negative inside. Finite one-type at p gives a local subelliptic estimate for the ∂̄-Neumann problem on (0,1)-forms.

**How the definition helps.** Finite one-type puts a uniform bound on normalized contact, excluding the arbitrarily flat curves that obstruct derivative gain (our own comparison). Catlin bounds a squared Sobolev norm of positive order by the energies of ∂̄ and its adjoint plus the squared L² norm. The estimate applies to forms supported near p that satisfy the adjoint boundary condition.

**Paper or page:** [The asymptotic behavior of the Bergman kernel on pseudoconvex model domains](https://arxiv.org/abs/2308.08249). It says: “∂Ωꜰ is of finite type at 0 (i.e., Δ₁(∂Ωꜰ,0) &lt; ∞)”

**Sources:**

- [David Catlin, Subelliptic Estimates for the ∂̄-Neumann Problem on Pseudoconvex Domains (1987)](https://doi.org/10.2307/1971347)

### Finite nondegeneracy rules out divergence

**Remember:** A finite list of differentiated equations can solve for every missing component.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32V05. arXiv math.CV, math.DG. Level 4: research.

**Definition.** For a smooth real analytic hypersurface ρ=0 in ℂⁿ, form the vector of complex derivatives ∂ρ/∂zⱼ. Finite nondegeneracy at a point means that this vector and its repeated derivatives along antiholomorphic tangent fields span ℂⁿ there after finitely many orders.

**Problem.** Consider an invertible formal series map fixing zero and carrying one real analytic hypersurface equation onto another up to an invertible factor. If the source is finitely nondegenerate there, the series converges.

**How the definition helps.** Finite nondegeneracy supplies independent equations for every target coordinate after differentiation of the mapping identity (our own explanation). The convergence theorem of Baouendi, Ebenfelt, and Rothschild turns this rank condition into an actual holomorphic map. On Im w=0 in ℂ², any invertible divergent series in z alone can replace z while w stays fixed.

**Paper or page:** [Complete normal forms for real hypersurfaces in ℂ³ at 2-nondegenerate points of Levi non-uniform rank zero](https://arxiv.org/abs/2310.11785). It says: “Then every origin-preserving formal equivalence map between M and M′ is biholomorphic.”

**Sources:**

- [M. S. Baouendi, P. Ebenfelt, and L. P. Rothschild, Parametrization of local biholomorphisms of real analytic hypersurfaces (1997)](https://doi.org/10.4310/ajm.1997.v1.n1.a1)

### Smooth curves can miss infinite type

**Remember:** A cusp can lie in the boundary even when smooth curves leave it.

*Rules out counterexamples.* MSC 32V35 (Finite-type conditions on CR manifolds), 32T25. arXiv math.CV. Level 4: research.

**Definition.** At a smooth boundary point, test each nonconstant holomorphic curve through the point. Divide the vanishing order of a local boundary equation along the curve by the least vanishing order of its coordinate differences. D’Angelo type is the supremum of these ratios. Regular type considers only curves with nonzero derivative.

**Problem.** Let Ω be a smooth bounded pseudoconvex domain. The ∂̄-Neumann problem for forms with one conjugate differential satisfies a local estimate that gains a positive fraction of a derivative. This holds exactly at boundary points of finite D’Angelo type.

**How the definition helps.** Testing curves with zero derivative detects contact that regular curves miss (our own). The boundary Re w + \|x² − y³\|² = 0 contains the singular curve (t³, t², 0), while every regular curve has contact at most six there (our own). In complex dimension at least three, Kamimoto gives an infinite-type example with finite regular type and no single infinitely tangent holomorphic curve. Catlin proves the connection with the boundary estimate (our own).

**Paper or page:** [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044v1). It says: “Let n≥2. There exists a smooth pseudoconvex real hypersurface M in ℂⁿ⁺¹ with Δ₁(M,p)=∞ and Δ₁ʳᵉᵍ(M,p)&lt;∞”

**Sources:**

- [On holomorphic curves tangent to real hypersurfaces of infinite type](https://arxiv.org/abs/2011.05044v1)
- [Catlin, Necessary Conditions for Subellipticity of the ∂̄-Neumann Problem (1983)](https://doi.org/10.2307/2006974)
- [Catlin, Subelliptic Estimates for the ∂̄-Neumann Problem on Pseudoconvex Domains (1987)](https://doi.org/10.2307/1971347)

### Bounded weights with large curvature force compactness

**Remember:** Bound the weight and let its curvature grow.

*Makes the theorem clean to state or prove.* MSC 32W05 (\\(\\overline\\partial\\) and \\(\\overline\\partial\\)-Neumann operators). arXiv math.CV, math.AP. Level 4: research.

**Definition.** The complex Hessian is the matrix of mixed derivatives in complex coordinates and their conjugates. A boundary has property P in degree q if each M &gt; 0 admits a smooth weight between zero and one on some boundary neighborhood. Everywhere there, each sum of q eigenvalues chosen by distinct indices of its complex Hessian must be at least M.

**Problem.** On a smooth bounded pseudoconvex domain in ℂⁿ, property P makes the ∂̄-Neumann inverse compact in degree q, for 1 ≤ q ≤ n. Pseudoconvexity means the boundary has nonnegative curvature along its complex tangents.

**How the definition helps.** Property P puts arbitrarily large curvature into a boundary estimate while keeping the weight bounded (our own). The weighted ∂̄ estimate gives a small boundary contribution, and interior regularity supplies a compact error (our own).

**Paper or page:** [The Levi q-core and Property (Pq)](https://arxiv.org/abs/2505.17693v1). It says: “and hence the ∂̄-Neumann operator N<sub>q</sub> is compact.”

**Sources:**

- [The Levi q-core and Property (Pq)](https://arxiv.org/abs/2505.17693v1)

### Energy primitives give shift identities

**Remember:** Move the zero potential and subtract its old energy.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler manifold of dimension n, a smooth potential u for the positive closed form ω satisfies ω + ddᶜu &gt; 0. Here ddᶜu is its complex Hessian. Define the energy by E(0) = 0 and require its derivative in direction h to equal ∫ h(ω + ddᶜu)ⁿ.

**Problem.** For a smooth ω-potential τ, use ω + ddᶜτ as the new background. The new energy at each admissible φ equals the old energy at φ + τ minus the old energy at τ.

**How the definition helps.** Defining energy by its derivative makes translation preserve the derivative, since both sides use the same corrected Hessian. In our own proof, the energies differ by a constant on the convex space of potentials. Evaluation at zero fixes this constant. The usual formula summing products of forms proves that an energy with this derivative exists.

**Paper or page:** [Measures of finite energy in pluripotential theory: a synthetic approach](https://arxiv.org/abs/2307.01697). It says: “\\operatorname{E}<sub>\\omega \_\\tau </sub>(\\varphi )=\\operatorname{E}<sub>\\omega </sub>(\\varphi +\\tau )-\\operatorname{E}\_\\omega (\\tau ).”

**Sources:**

- [Robert Berman, Sébastien Boucksom, Vincent Guedj and Ahmed Zeriahi, A variational approach to complex Monge-Ampère equations](https://doi.org/10.1007/s10240-012-0046-6)

### Full mass prevents vacuous domination

**Remember:** A measure that lost its mass cannot test domination.

*Rules out counterexamples.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler manifold of dimension n, a potential u for its positive closed form ω has nonnegative corrected complex Hessian ω + ddᶜu. Its nonpluripolar Monge–Ampère measure takes the top power by truncating u and discarding mass where u equals −∞. The full mass class consists of potentials whose measure has total mass ∫ ωⁿ.

**Problem.** For full mass potentials u and v, if u ≤ v almost everywhere for the measure of v, then u ≤ v everywhere.

**How the definition helps.** Full mass rules out an empty test in which the measure of v vanishes. For our own example, take the Fubini–Study form on projective space and the logarithm of a hyperplane section’s Fubini–Study norm. With matching curvature normalization, its corrected Hessian lives entirely on the hyperplane, so its nonpluripolar measure vanishes. The zero potential passes this vacuous test despite exceeding v, while the full mass case follows from the comparison theorem.

**Paper or page:** [Generalized Monge-Ampère capacities](https://arxiv.org/abs/1402.2497). It says: “If u, v ∈ ℰ(X,ω) such that u ≤ v MA(v)-almost everywhere then u ≤ v on X.”

**Sources:**

- [Vincent Guedj and Ahmed Zeriahi, The weighted Monge–Ampère energy of quasiplurisubharmonic functions, Journal of Functional Analysis 250 (2007), 442–482](https://doi.org/10.1016/j.jfa.2007.04.018)

### Homogeneous geodesics make energy affine

**Remember:** Zero product Monge–Ampère measure means zero energy curvature.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler manifold with form ω, a weak geodesic is a rotation-invariant potential U on the product with an annulus. Its corrected complex Hessian, the pulled-back form ω plus ddᶜU, is nonnegative and has vanishing top power. Monge–Ampère energy varies in direction h by the integral of h against the top Hessian power on each slice.

**Problem.** Along a continuous weak geodesic between bounded potentials, the Monge–Ampère energy is affine in the logarithm of the annulus radius.

**How the definition helps.** The product definition sets to zero the very measure whose integral gives the complex Hessian of the energy. In our own proof, the energy is therefore harmonic on the annulus, and rotation invariance makes it affine in log radius. The work lies in the energy variation formula for weak potentials and the correspondence with the smooth geodesic equation.

**nLab:** [Kähler potential](https://ncatlab.org/nlab/show/K%C3%A4hler+potential). It says: “On a Kähler manifold the Kähler form ω can locally be written as ω = √−1 ∂∂̄K”

**Paper or page:** [Geometry and Topology of the space of plurisubharmonic functions](https://arxiv.org/abs/1703.05556). It says: “Let (Φₛ)₀≤ₛ≤₁ be a continuous geodesic. Then s ↦ E(Φₛ) is affine.”

**Sources:**

- [Robert Berman, Sébastien Boucksom, Vincent Guedj and Ahmed Zeriahi, A variational approach to complex Monge-Ampère equations](https://doi.org/10.1007/s10240-012-0046-6)

### Mass bounds extend Monge–Ampère

**Remember:** Control the mass before passing to a local decreasing limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** A bounded hyperconvex domain admits a negative continuous plurisubharmonic exhaustion, a function whose negative sublevel sets have compact closure inside. Cegrell’s class consists of nonpositive plurisubharmonic functions that locally are decreasing limits of bounded global plurisubharmonic tests tending to zero at the boundary. Each local approximation must have uniformly bounded total Monge–Ampère mass, the integral of the top power of the complex Hessian.

**Problem.** For a function in Cegrell’s class, these approximations define a unique local Monge–Ampère measure. Their measures converge to it when integrated against continuous functions supported on compact subsets of the neighborhood.

**How the definition helps.** The class supplies bounded approximations and controls their masses even when the limit takes the value −∞. In our own account, the mass bound gives subsequential limits on compact subsets. Cegrell’s comparison estimates prove that every allowed approximation gives the same limit.

**Paper or page:** [Singularity invariants of plurisubharmonic functions and complex spaces](https://arxiv.org/abs/2304.02238). It says: “is in the Cegrell’s class ℰ.”

**Sources:**

- [Urban Cegrell, The general definition of the complex Monge–Ampère operator, Annales de l’Institut Fourier 54 (2004), 159–179](https://archive.numdam.org/articles/10.5802/aif.2014/)

### Obstacle envelopes concentrate mass

**Remember:** Where the obstacle leaves room, a local improvement is forbidden by the envelope.

*Makes the theorem clean to state or prove.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 4: research.

**Definition.** On a compact Kähler manifold with form θ, a θ-potential becomes plurisubharmonic after adding a local potential for θ. The envelope of a continuous function h is the upper limit of nearby values of the supremum over θ-potentials bounded above by h.

**Problem.** The envelope’s Monge–Ampère measure, the top power of its corrected complex Hessian, assigns zero mass to the open set where the envelope lies below h.

**How the definition helps.** The envelope is already the largest admissible potential, so no local replacement below the obstacle can raise it. In our own explanation, continuity preserves the bound by h when taking upper limits. The substantive step constructs local replacements and identifies local maximality with vanishing Monge–Ampère measure.

**Paper or page:** [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339). It says: “Then Pθ(h) ≤ h outside a pluripolar set and ∫\_{ {Pθ(h)&lt;h} } (θ + ddᶜPθ(h))ⁿ = 0.”

**Sources:**

- [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339)

### Plurifine locality handles maxima

**Remember:** Make strict comparison sets open and use locality there.

*True by definition.* MSC 32W20 (Complex Monge-Ampère operators), 32U05. arXiv math.CV. Level 4: research.

**Definition.** Plurisubharmonic functions are upper semicontinuous functions satisfying the disk mean inequality on every complex line. The plurifine topology is the coarsest topology making all such local functions continuous, allowing the value −∞. A potential for a smooth closed real form θ of type (1,1) becomes plurisubharmonic after adding a local potential for θ.

**Problem.** Where one θ-potential u exceeds another v, u and max(u,v) have the same nonpluripolar Monge–Ampère measure. This measure takes the top power of the corrected complex Hessian by truncation and omits mass on pole sets.

**How the definition helps.** The plurifine topology makes the strict comparison set open, and the two functions agree there. Our own argument applies the locality theorem in that topology. Ordinary open sets can miss points of strict comparison.

**Paper or page:** [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339). It says: “𝟙{u &gt; v} (θ + ddᶜu)ⁿ = 𝟙{u &gt; v} (θ + ddᶜ max(u,v))ⁿ.”

**Sources:**

- [Eric Bedford and B. A. Taylor, A new capacity for plurisubharmonic functions, Acta Mathematica 149 (1982), 1–40](https://doi.org/10.1007/BF02392348)
- [Monge-Ampère equations with prescribed singularities on compact Hermitian manifolds](https://arxiv.org/abs/2511.02339)
