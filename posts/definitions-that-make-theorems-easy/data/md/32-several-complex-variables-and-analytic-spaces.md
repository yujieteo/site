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

### The polydisk maximum needs only its torus

**Remember:** The torus suffices, and each of its points can peak.

*Makes the theorem clean to state or prove.* MSC 32A40 (Boundary behavior of holomorphic functions of several complex variables), 32Q02. arXiv math.CV. Level 3: graduate.

**Definition.** The unit polydisk is a product of open unit disks. Consider the functions holomorphic inside and continuous on its closure. Their Shilov boundary is the smallest closed subset of the closure where each function attains its maximum modulus.

**Problem.** The Shilov boundary of a unit polydisk is the product of its boundary circles. It excludes the boundary faces on which only some coordinates have modulus one.

**How the definition helps.** The smallest common maximum set expresses exactly which boundary points the whole family needs (our own). Applying the disk maximum principle successively in each coordinate shows that the product of boundary circles suffices (our own). For each chosen circle point a, the factor (1 + āz)/2 has modulus one only at a on the closed disk (our own). Multiplying these factors gives a function attaining its maximum modulus only at the chosen torus point (our own).

**Wikipedia:** [Shilov boundary](https://en.wikipedia.org/wiki/Shilov_boundary). It says: “the Shilov boundary of a polydisc 𝔻₁×𝔻₂×⋯×𝔻ₖ is the product of the boundaries ∂𝔻₁×∂𝔻₂×⋯×∂𝔻ₖ”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass polynomials give free quotients

**Remember:** Divide by the monic polynomial and keep the short remainder.

*True by definition.* MSC 32B05 (Analytic algebras and generalizations, preparation theorems), 32B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A germ records a function near one point, identifying functions that agree on a smaller neighborhood. A Weierstrass polynomial is monic in one variable w. Its lower coefficients are holomorphic germs in the other variables and vanish at the origin.

**Problem.** Let f be a holomorphic germ whose restriction to the w-axis vanishes to finite order d &gt; 0 at the origin. Modulo multiples of f, the powers of w of degrees zero through d − 1 form a basis over germs in the other variables.

**How the definition helps.** In our own proof, representing the equation by a Weierstrass polynomial reduces the basis question to reading off remainder coefficients. Preparation replaces the original holomorphic equation by this polynomial without changing its ideal. Weierstrass division gives existence and uniqueness of the remainder of degree below d. Its coefficients are therefore the unique coordinates in the proposed basis.

**nLab:** [Weierstrass preparation theorem](https://ncatlab.org/nlab/show/Weierstrass+preparation+theorem). It says: “where r = r(z,w) is a polynomial of degree &lt; k.”

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

### Properness preserves algebraic global sections

**Remember:** Compactness rules out the affine line and its nonpolynomial entire functions.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 14F06. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex algebraic variety is proper when its structural map stays closed after every algebraic change of base. Here a variety is separated and has finite type over the complex numbers. Equivalently, its complex points form a compact space in their usual topology.

**Problem.** A coherent algebraic sheaf describes local sections using finitely many generators and relations. On a proper complex variety, every global analytic section of the corresponding analytic sheaf comes from exactly one global algebraic section.

**How the definition helps.** Properness excludes the complex line in our own example. Its global algebraic functions are polynomials, but its analytic functions include the exponential. Serre proved the comparison for projective varieties. The general proper case uses the proper comparison theorem.

**nLab:** [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “Typically GAGA-type theorems hold for proper (compact) varieties, but not for non-proper varieties.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique (1956)](https://doi.org/10.5802/aif.59)

### Stein overlaps justify Čech cohomology

**Remember:** Use overlaps with no higher coherent cohomology.

*Makes the theorem clean to state or prove.* MSC 32C35 (Analytic sheaves and cohomology groups), 32Q28. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold is a complex manifold that embeds as a closed complex submanifold of some complex coordinate space. Choose an open cover in which every nonempty finite intersection is Stein.

**Problem.** A coherent analytic sheaf describes local modules over holomorphic functions with finite local presentations. For such a sheaf, the cohomology computed from this cover and its overlaps equals the intrinsic sheaf cohomology.

**How the definition helps.** Stein intersections make every higher cohomology group on each overlap vanish for the chosen sheaf. Cartan’s theorem B gives this vanishing. Leray’s theorem then identifies the calculation on the cover, called Čech cohomology, with sheaf cohomology.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “the positive-degree abelian sheaf cohomology with values in any analytic coherent sheaf on any Stein manifold vanishes”

**Sources:** none listed. No primary source with a working link was found.

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

### Compact support simplifies Hartogs extension

**Remember:** Subtract a compactly supported correction and keep the exterior values.

*Makes the theorem clean to state or prove.* MSC 32D20 (Removable singularities in several complex variables), 32W05. arXiv math.CV. Level 3: graduate.

**Definition.** The operator ∂̄ differentiates in conjugate complex directions. Its kernel on functions consists of holomorphic functions. The first compactly supported Dolbeault group takes compactly supported forms with one conjugate differential and ∂̄ equal to zero. It identifies two such forms when their difference equals ∂̄ of a compactly supported smooth function.

**Problem.** Let a compact set lie inside a domain in ℂⁿ and have connected complement there. If n≥2, every holomorphic function on that complement extends to the whole domain.

**How the definition helps.** Compactly supported cohomology states exactly when a ∂̄-error has a correction that vanishes far away (our own). Multiply the given holomorphic function by a cutoff that vanishes near the compact set and equals one outside a compact neighborhood of it (our own). For n ≥ 2 the first compactly supported Dolbeault group of ℂⁿ vanishes, so the ∂̄-error has a compactly supported correction (our own). The correction is holomorphic and zero on the unbounded exterior part, so subtracting it gives the extension by the identity theorem (our own).

**Wikipedia:** [Hartogs's extension theorem](https://en.wikipedia.org/wiki/Hartogs%27s_extension_theorem). It says: “there exists a smooth and compactly supported function η on ℂⁿ with ∂̄η = ω.”

**Sources:**

- [Ehrenpreis, A new proof and an extension of Hartog’s theorem (1961)](https://doi.org/10.1090/s0002-9904-1961-10661-7)

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

### The largest disc-contracting distance makes every holomorphic map distance-decreasing

**Remember:** Define the distance by discs, and holomorphic maps never stretch it.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32Q45. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The Kobayashi pseudometric on a complex space X is the largest pseudometric such that every holomorphic map from the unit disc into X is distance-decreasing. Distance on the disc is measured by the Poincaré metric ρ, the hyperbolic distance of the disc. X is Kobayashi hyperbolic if this pseudometric is a true metric.

**Problem.** Every holomorphic map between complex spaces is distance-decreasing for their Kobayashi pseudometrics. So every holomorphic map from ℂ to a hyperbolic space is constant.

**How the definition helps.** A disc mapped into X and then on to Y is a disc mapped into Y, so the distance-decreasing property follows from the definition. The Kobayashi pseudometric of ℂ is zero, because ℂ contains arbitrarily large discs, which gives the second claim. Schwarz's lemma says that the Kobayashi metric on the unit disc is the Poincaré metric. The work moves to showing that particular spaces, such as ℂ minus two points, are hyperbolic.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “the Kobayashi pseudometric dₓ is defined as the largest pseudometric on X such that dₓ(f(x),f(y)) ≤ ρ(x,y), for all holomorphic maps f from the unit disc D to X”

**Sources:**

- [S. Kobayashi, Invariant distances on complex manifolds and holomorphic mappings, Journal of the Mathematical Society of Japan 19 (1967)](https://doi.org/10.2969/jmsj/01940460)

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

### Amoeba complements have convex components

**Remember:** A line segment in log coordinates interpolates radii geometrically.

*Makes the theorem clean to state or prove.* MSC 32Q02 (Special domains (Reinhardt, Hartogs, circular, tube, etc.) in \\(\\mathbb<sup>n\\</sup>) and complex manifolds), 32D10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Laurent polynomial allows negative integer powers of its variables. Its amoeba consists of the coordinatewise logarithms of absolute values of its zeros with all coordinates nonzero.

**Problem.** Every connected component of the complement of a polynomial amoeba is convex.

**How the definition helps.** Logarithms turn the absolute values of monomials into exponentials of linear functions. In our own proof, the reciprocal of the polynomial has one Laurent expansion over each complementary component. Hölder’s inequality makes the region where such a series converges absolutely convex in logarithmic coordinates. This region misses the amoeba, so it equals the component.

**Wikipedia:** [Amoeba (mathematics)](https://en.wikipedia.org/wiki/Amoeba_%28mathematics%29). It says: “Any connected component of the complement ℝⁿ ∖ 𝒜ₚ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Odd-degree Betti numbers of compact Kähler manifolds are even

**Remember:** In odd degree, each Hodge piece has a distinct conjugate.

*Rules out counterexamples.* MSC 32Q15 (Kähler manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** A Hermitian metric gives each complex tangent space an inner product that varies smoothly. It is Kähler when the imaginary part of that inner product gives a closed differential form.

**Problem.** A Betti number is the dimension of a cohomology group with complex coefficients. On a compact Kähler manifold, each odd-degree Betti number is even.

**How the definition helps.** The Kähler condition gives a decomposition in which complex conjugation pairs summands of equal dimension. Hodge theory supplies this decomposition by the numbers p and q of ordinary and conjugate differentials. In odd degree, p + q is odd, so the partner with indices (q, p) is distinct. The Hopf surface shows why the metric matters. It is compact and complex, but its first Betti number is one.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “A simple consequence of Hodge theory is that every odd Betti number b₂ₐ₊₁ of a compact Kähler manifold is even, by Hodge symmetry.”

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

### Closed submanifolds inherit Stein embeddings

**Remember:** Restrict a closed embedding to a closed submanifold.

*True by definition.* MSC 32Q28 (Stein manifolds), 32Q40. arXiv math.CV. Level 3: graduate.

**Definition.** A Stein manifold admits a holomorphic embedding as a closed complex submanifold of complex Euclidean space. The intrinsic definition requires global holomorphic functions to separate points and the holomorphic hull of every compact set to be compact. The hull contains precisely those points where each global holomorphic function stays within its maximum absolute value on the compact set.

**Problem.** Every closed complex submanifold of a Stein manifold is Stein.

**How the definition helps.** In our own proof, restricting the embedding leaves its image closed in the same Euclidean space. The embedding theorem of Remmert, Bishop and Narasimhan connects this description with the conditions on holomorphic functions.

**nLab:** [Stein manifold](https://ncatlab.org/nlab/show/Stein+manifold). It says: “Every closed sub-complex manifold of a Stein manifold is itself Stein.”

**Sources:** none listed. No primary source with a working link was found.

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

### Entire curves test compact hyperbolicity

**Remember:** Compactness lets fast disks give an entire curve.

*Rules out counterexamples.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds). arXiv math.CV. Level 3: graduate.

**Definition.** Brody hyperbolicity rules out nonconstant holomorphic maps from the whole complex plane. Kobayashi hyperbolicity instead requires a distance built from chains of holomorphic disks to separate distinct points.

**Problem.** For compact complex manifolds, Brody hyperbolicity and Kobayashi hyperbolicity agree. The equivalence can fail without compactness.

**How the definition helps.** On a compact target, Brody’s theorem replaces the disk-chain distance test with one test for entire curves. For our own counterexample, take the union of the unit bidisk with the domain 0 &lt; \|w\| &lt; 1, \|zw\| &lt; 1. Every entire curve in it is constant, because w and then z is bounded. For 0 &lt; a &lt; 1 and each positive integer N, the disk ζ ↦ (Nζ, ζ(ζ − a/N)/(2N)) joins (0,0) to (a,0) at parameters 0 and a/N, so the Kobayashi distance between these points is zero.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact manifolds in hyperbolicity (1978)](https://doi.org/10.1090/S0002-9947-1978-0470252-3)

### A tensor test for complex structures, by the Newlander–Nirenberg theorem

**Remember:** Zero Nijenhuis tensor means honest holomorphic charts.

*True by definition.* MSC 32Q60 (Almost complex manifolds), 53C15. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** An almost complex structure on a manifold is a smooth field J of linear maps on tangent spaces with J² = −1. It is integrable if its Nijenhuis tensor, built from J and Lie brackets of vector fields, is zero. A complex manifold has charts to ℂⁿ whose transition maps are holomorphic.

**Problem.** A manifold with an almost complex structure J has holomorphic charts in which J is multiplication by i exactly when J is integrable.

**How the definition helps.** With this definition, checking for a complex structure is a pointwise tensor computation, not the solution of differential equations. The hard analytic work moves into the Newlander–Nirenberg theorem (1957), which builds holomorphic coordinates from the tensor condition. The definition does not make every question easy. It is still unknown whether the 6-sphere, which has an almost complex structure from the octonions, has an integrable one.

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “Since the existence of an integrable almost complex structure is equivalent to the existence of a complex structure, this is sometimes taken as the definition of a complex structure.”

**Sources:**

- [A. Newlander and L. Nirenberg, Complex analytic coordinates in almost complex manifolds, Annals of Mathematics 65 (1957) 391–404](https://doi.org/10.2307/1970051)

### Duality preserves perverse sheaves

**Remember:** Duality trades the two vanishing bounds.

*True by definition. Confidence: medium.* MSC 32S60 (Stratifications; constructible sheaves; intersection cohomology (complex-analytic aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** Choose a decomposition into smooth pieces, called a Whitney stratification, with compatible limiting tangent spaces. Use a bounded complex of sheaves whose cohomology along each piece is locally constant and finite-dimensional over ℂ. On a piece of complex dimension d, middle perversity requires ordinary restriction to have zero cohomology above degree −d. Restriction with support along that piece must have zero cohomology below −d.

**Problem.** Verdier duality, the duality exchanging ordinary restriction and restriction with support, preserves middle perverse sheaves on a complex analytic space.

**How the definition helps.** The two restriction tests exchange places under duality, so their combination gives a symmetric definition. In our own argument, duality on a stratum of complex dimension d sends degree k to −2d − k. This exchanges the two sides of −d. The exchange identities for Verdier duality supply the work.

**Paper or page:** [A note on the support and cosupport conditions for a perverse sheaf](https://arxiv.org/abs/2207.02566v1). It says: “(new support) for all m ≥ 0, for all k &gt; −m, Hᵏ(uₘ\* A•) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Disk tests make pullback plurisubharmonic

**Remember:** A holomorphic map sends a test disk to another test disk.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 3: graduate.

**Definition.** A function is upper semicontinuous if its upper limit at each point never exceeds its value there. Call it plurisubharmonic if it also passes the following test on every holomorphic map from the unit disk. On every closed subdisk, the composite’s center value must not exceed its boundary average. Allow the constant function −∞.

**Problem.** Pullback along a holomorphic map preserves plurisubharmonicity when functions identically equal to −∞ are allowed.

**How the definition helps.** In our own proof, composing a test disk with the given holomorphic map produces another test disk. Composition with a continuous map also preserves upper semicontinuity. The work in the alternative Euclidean definition is proving that tests on straight complex lines imply all disk tests.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic, where Δ ⊂ ℂ denotes the unit disk.”

**Sources:** none listed. No primary source with a working link was found.

### Maxima preserve pseudoconvex intersections

**Remember:** The larger exhaustion keeps points away from both boundaries.

*True by definition.* MSC 32U10 (Plurisubharmonic exhaustion functions), 32T05. arXiv math.CV. Level 3: graduate.

**Definition.** A domain in ℂⁿ is pseudoconvex if it has a continuous plurisubharmonic exhaustion. An exhaustion has compact closed sublevel sets. Plurisubharmonic means that on each complex line the value at a disk center is at most its circular average.

**Problem.** Each connected component of a finite intersection of pseudoconvex domains is pseudoconvex.

**How the definition helps.** Taking the maximum combines the exhaustions into one test for all the boundaries (our own). Its closed sublevel sets are intersections of compact sublevel sets and remain compact on each component (our own). The maximum also satisfies the disk mean inequality (our own). The Levi problem identifies these domains with domains supporting a holomorphic function that cannot extend across any boundary point (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity). It says: “In other words, a domain is pseudoconvex if G has a continuous plurisubharmonic exhaustion function.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic growth gives vanishing order

**Remember:** Compare the first nonzero Taylor term with the logarithm of distance.

*True by definition.* MSC 32U25 (Lelong numbers), 32A60. arXiv math.CV. Level 3: graduate.

**Definition.** A plurisubharmonic function is upper semicontinuous and satisfies the disk mean inequality on complex lines. Its Lelong number at a point is the lower limit of its value divided by the logarithm of distance to that point. For a hypersurface, an alternative measures its local area density, counting multiplicities.

**Problem.** If a nonzero holomorphic function vanishes to order m at a point, the Lelong number of its logarithmic modulus there is m.

**How the definition helps.** The logarithmic definition reads vanishing order directly from the first nonzero Taylor term (our own). If this term has degree m, the modulus is at most a constant times the mth power of distance (our own). Taking logarithms and dividing by the negative logarithm of distance gives a lower limit at least m (our own). Along a line where the leading term is nonzero, the ratio tends to m (our own). The Lelong–Poincaré and density formulas identify the result with the area density of the zero set counted with multiplicity (our own).

**Wikipedia:** [Lelong number](https://en.wikipedia.org/wiki/Lelong_number). It says: “The Lelong number of a plurisubharmonic function φ at a point x of ℂⁿ is liminf<sub>z→x</sub> φ(z)/log \|z−x\|.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic derivatives add zero divisors

**Remember:** The logarithm turns products into sums of zero currents.

*True by definition. Confidence: medium.* MSC 32U40 (Currents), 32A60. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The zero divisor counts the vanishing order on each irreducible hypersurface, a component of complex codimension one. Its current integrates smooth test forms over these components with those multiplicities. Locally the same current is (i/π)∂∂̄ log \|f\|, where derivatives act by integration against derivatives of test forms.

**Problem.** On a connected complex manifold, the zero current of a product of two nonzero holomorphic functions equals the sum of their zero currents.

**How the definition helps.** In our own argument the logarithm changes a product into a sum, and differentiation preserves sums. The local Poincaré–Lelong formula identifies this derivative with the geometric zero current. The quoted theorem gives a version on a domain with boundary.

**Paper or page:** [Induced Fubini-Study metrics on strictly pseudoconvex CR manifolds and zeros of random CR functions](https://arxiv.org/abs/2401.09143v1). It says: “(\[Div(f)\], ψ) = (i/π) ∫₍G₎ ∂∂̄ log(\|f\|) ∧ ψ”

**Sources:** none listed. No primary source with a working link was found.

### Real analyticity permits holomorphic flattening

**Remember:** Flat complex leaves need analytic transverse dependence to straighten holomorphically.

*Rules out counterexamples.* MSC 32V40 (Real submanifolds in complex manifolds), 32V05. arXiv math.DG. Level 3: graduate.

**Definition.** A real hypersurface is a smooth submanifold of real codimension one. It is Levi-flat if locally it splits into complex hypersurfaces that vary smoothly in one real parameter. Real analyticity means that local defining equations can be chosen as convergent real power series.

**Problem.** A real analytic Levi-flat hypersurface is locally a real hyperplane in holomorphic coordinates.

**How the definition helps.** Real analyticity allows the family of complex hypersurfaces to extend holomorphically in its real parameter (our own). Straightening the extended family gives the holomorphic coordinates in the theorem (our own). Take the product of a complex coordinate space with a smooth plane curve that fails to be real analytic at one point (our own). This product is Levi-flat (our own). Holomorphic coordinates flattening it there would give a real analytic defining equation with nonzero derivative for the curve (our own).

**Paper or page:** [Levi-flats in ℂℙⁿ: a survey for nonexperts](https://arxiv.org/abs/2501.15710v2). It says: “If p∈M⊂ℂⁿ is a real analytic Levi flat hypersurface, then there exists a neighbourhood U of p in ℂⁿ and a biholomorphic map”

**Sources:** none listed. No primary source with a working link was found.

### Kähler classes fix Monge–Ampère mass

**Remember:** The top power of a closed form integrates to a cohomology number.

*True by definition. Confidence: medium.* MSC 32W20 (Complex Monge-Ampère operators). arXiv math.CV. Level 3: graduate.

**Definition.** On a complex manifold of dimension n, a Kähler form is a closed positive real form with one ordinary and one conjugate differential. Its smooth Monge–Ampère measure is its n-fold exterior product.

**Problem.** Two Kähler forms in the same cohomology class on a compact complex manifold have equal total Monge–Ampère mass.

**How the definition helps.** Writing the density as an exterior power makes its integral depend only on the cohomology class. In our own proof, closed forms that differ by a derivative represent the same class. Exterior products induce products of classes, so the two top powers also differ by a derivative. Its integral vanishes by Stokes’ theorem. Expanding the exterior power in local coordinates recovers the usual determinant density with the corresponding constant factor.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “Since the 2-form ω is closed, it determines an element in de Rham cohomology”

**Sources:** none listed. No primary source with a working link was found.

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

### Proper maps preserve sheaf coherence

**Remember:** Over a point, coherence means finite dimension.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Call a holomorphic map proper if inverse images of compact sets are compact. The direct image sheaf assigns to each target open set the sections over its inverse image. A coherent analytic sheaf has finitely many local generators and relations.

**Problem.** The direct image of a coherent analytic sheaf under a proper holomorphic map is coherent.

**How the definition helps.** Properness excludes the projection of the whole complex line to a point in our own analytic example. Take the sheaf of holomorphic functions, which assigns those functions to each open set. Its direct image at the point contains all coordinate powers, which are linearly independent. Coherence there would require finite dimension. Grauert’s direct image theorem proves coherence for proper holomorphic maps.

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “the direct image of a coherent sheaf under a proper morphism is coherent”

**Sources:**

- [Hans Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://doi.org/10.1007/bf02684746)

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

### Oka families preserve homotopy groups

**Remember:** Use spheres for representatives and disks for relations.

*True by definition.* MSC 32Q56 (Oka principle and Oka manifolds). arXiv math.CV. Level 4: research.

**Definition.** A Stein manifold admits a closed holomorphic embedding into some complex coordinate space. Use the parametric Oka property for the target. It deforms continuous families of maps into families of holomorphic maps while fixing a specified subfamily already holomorphic.

**Problem.** For maps from a Stein manifold to an Oka target, inclusion of holomorphic maps into continuous maps induces a bijection on path components. At each holomorphic base map, it also induces isomorphisms on all homotopy groups. Both spaces use uniform convergence on compact sets.

**How the definition helps.** The parametric definition tests precisely the families needed to represent and compare homotopy classes. In our own proof, spheres represent classes and disks give deformations to a point with prescribed boundary values. Points and intervals give the corresponding bijection on path components. The Oka equivalence theorem derives the parametric property from approximation of holomorphic maps near compact convex sets.

**Paper or page:** [From Stein manifolds to Oka manifolds: the h-principle in complex analysis](https://arxiv.org/abs/2509.21197v1). It says: “the inclusion of the space of holomorphic maps X → Y in the space of continuous maps”

**Sources:** none listed. No primary source with a working link was found.

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

### Normalization quotients control delta jumps

**Remember:** Count missing functions in the branches, then track that count in families.

*Makes the theorem clean to state or prove.* MSC 32S10 (Invariants of analytic local rings), 32S30. arXiv math.AG, math.CV. Level 4: research.

**Definition.** Consider a reduced complex curve near a point, with no repeated components. Its normalization gives each local branch its own smooth parameter disk. The delta invariant counts the dimension of holomorphic functions on these disks modulo functions pulled back from the curve.

**Problem.** Vary the maps from finitely many pointed disks holomorphically with one parameter, keeping their origins at the marked point. Suppose the central maps parametrize distinct branches, each once. For nearby parameters the delta invariant of the image curve cannot exceed its central value.

**How the definition helps.** In our own explanation, the quotient definition makes delta count independent functions missing from the parametrization. In a family, finiteness and control of the nearby branch parametrizations are essential. Proposition 25 supplies the dimension bound for these quotients.

**Paper or page:** [On Delta for parameterized Curve Singularities](https://arxiv.org/abs/2101.01784v1). It says: “and δℂ(𝒪(Cₛ,0)) ≤ δℂ(𝒪(C₀,0)).”

**Sources:**

- [Gert-Martin Greuel and Gerhard Pfister, On Delta for parameterized Curve Singularities (2021 preprint)](https://arxiv.org/abs/2101.01784v1)

### Paracyclic representations define perverse sheaves on surfaces without derived categories

**Remember:** On a surface, a perverse sheaf is a representation of Milnor disks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32S60 (Stratifications; constructible sheaves; intersection cohomology (complex-analytic aspects)), 14F08. arXiv math.AG, math.AT. Level 4: research.

**Definition.** A Milnor disk of a stratified surface is a closed disk together with a part of its boundary. Dyckerhoff, Kapranov and Soibelman use the Milnor disks of the surface's paracyclic category. A representation is a functor on these disks that satisfies simple gluing conditions.

**Problem.** On a stratified surface, perverse sheaves are equivalent to the representations of the Milnor disks of its paracyclic category.

**How the definition helps.** Only functors on Milnor disks with simple gluing conditions are needed, so perverse sheaves form an abelian category with no derived categories. Usually the abelian structure comes from a theorem about the heart of a t-structure (our own). The key step is purity. A constructible complex is perverse exactly when its relative cohomology on every Milnor disk is zero outside degree 0.

**Paper or page:** [Perverse sheaves on Riemann surfaces as Milnor sheaves](https://arxiv.org/abs/2012.11388v2). It says: “In particular, this perspective yields an intrinsic definition of perverse sheaves as an abelian category without reference to derived categories and t-structures.”

**Sources:**

- [Tobias Dyckerhoff, Mikhail Kapranov, Yan Soibelman, Perverse sheaves on Riemann surfaces as Milnor sheaves, arXiv:2012.11388v2 (2021)](https://arxiv.org/abs/2012.11388v2)

### Slice comparison puts maxima on boundaries

**Remember:** An affine bound on a slice rules out a strict interior peak.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 4: research.

**Definition.** Call an upper semicontinuous function q-plurisubharmonic if it satisfies affine comparison on every complex affine plane of dimension q + 1. Affine comparison means the following. Take a closed ball in a slice of the domain by such a plane. If a real affine function bounds the function above on the boundary of the ball, then that bound holds on the whole ball.

**Problem.** Take a nonempty bounded open set in ℂⁿ and an integer q between zero and n − 1 inclusive. A q-plurisubharmonic function there, upper semicontinuous on the closure, attains its maximum on the boundary.

**How the definition helps.** Affine comparison rules out a strict interior peak even when derivatives do not exist. In our own proof, suppose an interior value exceeds every boundary value, and add a small multiple of \|z\|² without losing the gap. At an interior maximum of the sum, a tangent affine function lies strictly above the original function on small spheres in a test plane. Lowering it slightly contradicts comparison.

**Paper or page:** [On rigid q-plurisubharmonic functions and q-pseudoconvex tube domains in ℂⁿ](https://arxiv.org/abs/2510.05009v2). It says: “Then any function $u$ which is upper semi-continuous on $\\overline{\\Omega }$ and $q$-plurisubharmonic on $\\Omega $ fulfills\\\[ \\max \\{ \\psi (z) : z \\in \\overline{\\Omega }\\} = \\max \\{ \\psi (z) : z \\in \\partial \\Omega \\} . \\\]”

**Sources:** none listed. No primary source with a working link was found.

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

### Restricted currents add divisorial coefficients

**Remember:** Restrict both summands to the same hypersurface before adding.

*True by definition.* MSC 32U40 (Currents), 32U25. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A positive closed current of type (1,1) generalizes a closed differential form with a positive semidefinite matrix of coefficients. Its coefficients can be measures. Restrict those measures to an irreducible analytic hypersurface, a single component of complex codimension one. The restricted current equals a constant times integration over the hypersurface.

**Problem.** For two such currents on a complex manifold, their coefficients on any fixed irreducible hypersurface add.

**How the definition helps.** In our own proof, restriction adds measure coefficients term by term, so the multiples of integration add too. The comparison theorem identifies each multiple with the generic Lelong number, the current’s local density at typical points of the hypersurface. The theorem supplies the constant multiple description, which avoids computing those densities.

**Paper or page:** [On the Canonical Bundle Formula and Adjunction for Generalized Kaehler Pairs](https://arxiv.org/abs/2404.12007v1). It says: “χ₍A₎T = ν(T, A)\[A\], where ν(T, A) is the generic Lelong number of T along A.”

**Sources:** none listed. No primary source with a working link was found.

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
