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

### Dolbeault products are wedge products

**Remember:** Wedge two closed forms to multiply their classes.

*True by definition. Confidence: medium.* MSC 32C35 (Analytic sheaves and cohomology groups), 32W05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A smooth form of type (p,q) has p holomorphic and q antiholomorphic coordinate differentials in each term. The operator ∂̄ differentiates in the antiholomorphic directions. Dolbeault cohomology takes forms killed by ∂̄ modulo forms obtained by applying ∂̄.

**Problem.** On a complex manifold, Dolbeault classes also describe the sheaf cohomology of holomorphic forms, which measures how local data fit together. With the usual graded signs, multiplication in this description corresponds to wedging smooth forms.

**How the definition helps.** In our own argument, smooth representatives make multiplication a wedge product because ∂̄ satisfies the graded product rule. The local Dolbeault lemma and smooth partitions of unity justify computing sheaf cohomology this way. Wedge multiplication on smooth forms extends wedge multiplication on holomorphic forms, giving the product comparison.

**nLab:** [Dolbeault theorem](https://ncatlab.org/nlab/show/Dolbeault+theorem). It says: “its Dolbeault cohomology in bi-degree (p,q) is naturally isomorphic to the abelian sheaf cohomology in degree q”

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

### Pseudoconvexity turns the domain of holomorphy problem into a local test

**Remember:** Domains of holomorphy are exactly the pseudoconvex domains, a local test.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32E40 (The Levi problem), 32U05, 32U10. arXiv math.CV. Level 3: graduate.

**Definition.** A function is plurisubharmonic if it is upper semicontinuous and subharmonic on every complex line. Upper semicontinuous means that its value at each point is at least the lim sup of nearby values. A domain G in ℂⁿ is pseudoconvex if it has a continuous plurisubharmonic exhaustion, a function whose sublevel sets are relatively compact in G. For a domain with C² boundary, this is the same as the Levi condition on the boundary.

**Problem.** A domain of holomorphy is a domain with a holomorphic function that cannot be continued beyond it. The Levi problem asks whether every pseudoconvex domain in ℂⁿ is a domain of holomorphy. The answer is yes, so the two classes are the same (Oka, 1942 to 1953, our own dating).

**How the definition helps.** Being a domain of holomorphy is a global property, but pseudoconvexity can be checked near each boundary point. In one variable every open set is a domain of holomorphy, so no such notion is needed. For n ≥ 2, Hartogs's extension theorem shows that U minus a compact set K is not one, when U minus K is connected. So a geometric test was needed, and plurisubharmonic exhaustions give it. The easy direction is that −log of the distance to the boundary is plurisubharmonic on a domain of holomorphy. The hard direction, from pseudoconvex to domain of holomorphy, was proved by Oka, and later by Hörmander's L² methods (our own).

**Wikipedia:** [Pseudoconvexity](https://en.wikipedia.org/wiki/Pseudoconvexity), [Domain of holomorphy](https://en.wikipedia.org/wiki/Domain_of_holomorphy), [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “Pseudoconvex sets are important, as they allow for classification of domains of holomorphy.”

**Sources:**

- [H. Grauert, On Levi's Problem and the Imbedding of Real-Analytic Manifolds, Annals of Mathematics 68 (1958)](https://doi.org/10.2307/1970257)
- [K. Oka, Sur les fonctions analytiques de plusieurs variables VI. Domaines pseudoconvexes, Tohoku Mathematical Journal 49 (1942)](https://www.nara-wu.ac.jp/aic/gdb/nwugdb/oka/ko_ron/f/n06/p001.html)

### The largest disc-contracting distance makes every holomorphic map distance-decreasing

**Remember:** Define the distance by discs, and holomorphic maps never stretch it.

*True by definition.* MSC 32F45 (Invariant metrics and pseudodistances in several complex variables), 32Q45. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** The Kobayashi pseudometric on a complex space X is the largest pseudometric such that every holomorphic map from the unit disc into X is distance-decreasing. Distance on the disc is measured by the Poincaré metric ρ, the hyperbolic distance of the disc. X is Kobayashi hyperbolic if this pseudometric is a true metric.

**Problem.** Every holomorphic map between complex spaces is distance-decreasing for their Kobayashi pseudometrics. So every holomorphic map from ℂ to a hyperbolic space is constant.

**How the definition helps.** A disc mapped into X and then on to Y is a disc mapped into Y, so the distance-decreasing property follows from the definition. Schwarz's lemma says that the Kobayashi metric on the unit disc is the Poincaré metric. The Kobayashi pseudometric of ℂ is zero, because ℂ contains arbitrarily large discs. The work moves to showing that particular spaces are hyperbolic. For example, ℂ minus two points is hyperbolic, and this gives Picard's theorem. Brody's theorem says that a compact space is hyperbolic exactly when every holomorphic map from ℂ into it is constant.

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

### The exponential sequence makes first Chern classes add under tensor products

**Remember:** Transition functions multiply, and the connecting map turns their products into sums.

*True by definition.* MSC 32L10 (Sheaves and cohomology of sections of holomorphic vector bundles, general results), 55R40. arXiv math.CV, math.AT. Level 3: graduate.

**Definition.** On a complex manifold M, the exponential sends local holomorphic functions to nowhere-zero ones. Every such function has a local logarithm, and logarithms differ by multiples of 2πi. This short exact sequence of sheaves, which track functions and their restrictions, induces a map from line bundles to H²(M, ℤ). Define the first Chern class c₁ to be this map.

**Problem.** Show that the first Chern class turns tensor products of holomorphic line bundles into sums. Determine which bundles have first Chern class zero.

**How the definition helps.** The exponential-sequence definition makes additivity immediate because the connecting map is a group homomorphism. The group law on line bundles is tensor product, which multiplies the functions used to glue their local pieces. Exactness says the kernel is the image of H¹(M, O), where O records local holomorphic functions. In our own comparison, the Euler-class definition needs a separate proof of additivity for complex line bundles. The work shifts to establishing the sequence and proving that its class agrees with the Euler class.

**Wikipedia:** [Exponential sheaf sequence](https://en.wikipedia.org/wiki/Exponential_sheaf_sequence). It says: “Here H¹(O<sub>M</sub>\*) can be identified with the Picard group of holomorphic line bundles on M. The connecting homomorphism sends a line bundle to its first Chern class.”

**Sources:** none listed. No primary source with a working link was found.

### The Kähler condition makes the Laplacians agree and gives the Hodge decomposition

**Remember:** A closed Kähler form ties the metric, complex and symplectic structures together.

*Makes the theorem clean to state or prove.* MSC 32Q15 (Kähler manifolds), 53C55, 58A14. arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** A Kähler manifold is a complex manifold with a Hermitian metric whose associated 2-form ω is closed. Equivalently, the complex structure is parallel for the Levi-Civita connection.

**Problem.** The Hodge decomposition: on a compact Kähler manifold, each cohomology group with complex coefficients splits. The r-th group is the direct sum of the Dolbeault groups of type (p, q) with p + q = r. Dolbeault groups are the cohomology of the complex-differential operator ∂̄.

**How the definition helps.** The Kähler condition gives the Kähler identities, so the de Rham Laplacian is twice each of the two Dolbeault Laplacians. Then a form is harmonic exactly when each of its (p, q) parts is harmonic. Hodge theory gives each cohomology class a unique harmonic representative, so the splitting passes to cohomology. On a general compact complex manifold, the Laplacians differ and the splitting can fail. Our own example is the Hopf surface, which is S¹ × S³ with a complex structure. Its first Betti number is 1, which is odd, so it cannot be Kähler. Every smooth complex projective variety is Kähler, which is why Hodge theory is central to algebraic geometry.

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

**How the definition helps.** Sheaf cohomology rewrites the gluing problem as one obstruction class in H¹(M, O), where O is the sheaf of holomorphic functions. By a long exact sequence, a solution exists as soon as that group is zero. The work moves into Cartan's theorem B. On a Stein manifold, coherent sheaves, which are locally given by finitely many generators and relations, have no cohomology in positive degrees. The Stein conditions exclude compact manifolds, where only constants are holomorphic. On a compact complex torus the problem can fail, since no elliptic function has only one simple pole (our own example).

**Wikipedia:** [Cousin problems](https://en.wikipedia.org/wiki/Cousin_problems), [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “the first Cousin problem is always solvable provided that the first cohomology group H¹(M,O) vanishes. In particular, by Cartan's theorem B, the Cousin problem is always solvable if M is a Stein manifold.”

**Sources:**

- [K. Stein, Analytische Funktionen mehrerer komplexer Veränderlichen zu vorgegebenen Periodizitätsmoduln und das zweite Cousinsche Problem, Mathematische Annalen 123 (1951)](https://doi.org/10.1007/bf02054949)

### Compact hyperbolicity survives products

**Remember:** An entire curve in a product has two entire projections.

*True by definition.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds), 32F45. arXiv math.CV. Level 3: graduate.

**Definition.** Call a complex manifold Brody hyperbolic if every holomorphic map to it from the complex plane is constant. The Kobayashi pseudodistance takes the infimum of lengths of chains of holomorphic disks joining two points, using hyperbolic length within each disk. Kobayashi hyperbolicity means this distance separates points.

**Problem.** A product of two nonempty compact complex manifolds is Kobayashi hyperbolic exactly when both factors are.

**How the definition helps.** A map into a product is constant exactly when both projections are constant, in our own argument. For the converse, our own proof holds a point fixed in the other factor. In our own account, Brody’s theorem links entire curves and the disk distance on compact manifolds.

**Wikipedia:** [Kobayashi metric](https://en.wikipedia.org/wiki/Kobayashi_metric). It says: “Brody's theorem says that a compact complex space X is Kobayashi hyperbolic if and only if every holomorphic map ℂ → X is constant.”

**Sources:**

- [Robert Brody, Compact Manifolds and Hyperbolicity (1978)](https://doi.org/10.2307/1998216)

### A tensor test for complex structures, by the Newlander–Nirenberg theorem

**Remember:** Zero Nijenhuis tensor means honest holomorphic charts.

*True by definition.* MSC 32Q60 (Almost complex manifolds), 53C15. arXiv math.CV, math.DG. Level 3: graduate.

**Definition.** An almost complex structure on a manifold is a smooth field J of linear maps on tangent spaces with J² = −1. It is integrable if its Nijenhuis tensor, built from J and Lie brackets of vector fields, is zero. A complex manifold has charts to ℂⁿ whose transition maps are holomorphic.

**Problem.** Decide whether a manifold with an almost complex structure J is a complex manifold with J as its multiplication by i. To find holomorphic charts, one must solve differential equations. A tensor, in contrast, can be computed pointwise.

**How the definition helps.** If 'complex structure' means 'almost complex structure with zero Nijenhuis tensor', checking it is a local computation. The hard analytic work moves into the Newlander–Nirenberg theorem (1957), which builds holomorphic coordinates from the tensor condition. The definition does not make every question easy. The page notes that it is still unknown whether the 6-sphere, which has an almost complex structure from the octonions, has an integrable one.

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “Since the existence of an integrable almost complex structure is equivalent to the existence of a complex structure, this is sometimes taken as the definition of a complex structure.”

**Sources:**

- [A. Newlander and L. Nirenberg, Complex analytic coordinates in almost complex manifolds, Annals of Mathematics 65 (1957) 391–404](https://doi.org/10.2307/1970051)

### Disk tests make pullback plurisubharmonic

**Remember:** A holomorphic map sends a test disk to another test disk.

*True by definition.* MSC 32U05 (Plurisubharmonic functions and generalizations). arXiv math.CV. Level 3: graduate.

**Definition.** A function is upper semicontinuous if its upper limit at each point never exceeds its value there. Call it plurisubharmonic if it also passes the following test on every holomorphic map from the unit disk. On every closed subdisk, the composite’s center value must not exceed its boundary average. Allow the constant function −∞.

**Problem.** Pullback along a holomorphic map preserves plurisubharmonicity when functions identically equal to −∞ are allowed.

**How the definition helps.** In our own proof, composing a test disk with the given holomorphic map produces another test disk. Composition with a continuous map also preserves upper semicontinuity. The work in the alternative Euclidean definition is proving that tests on straight complex lines imply all disk tests.

**Wikipedia:** [Plurisubharmonic function](https://en.wikipedia.org/wiki/Plurisubharmonic_function). It says: “the function f ∘ φ : Δ → ℝ ∪ {−∞} is subharmonic, where Δ ⊂ ℂ denotes the unit disk.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic derivatives add zero divisors

**Remember:** The logarithm turns products into sums of zero currents.

*True by definition. Confidence: medium.* MSC 32U40 (Currents), 32A60. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The zero divisor counts the vanishing order on each irreducible hypersurface, a component of complex codimension one. Its current integrates smooth test forms over these components with those multiplicities. Locally the same current is (i/π)∂∂̄ log \|f\|, where derivatives act by integration against derivatives of test forms.

**Problem.** On a connected complex manifold, the zero current of a product of two nonzero holomorphic functions equals the sum of their zero currents.

**How the definition helps.** In our own argument the logarithm changes a product into a sum, and differentiation preserves sums. The local Poincaré–Lelong formula identifies this derivative with the geometric zero current. The quoted theorem gives a version on a domain with boundary.

**Paper or page:** [Induced Fubini-Study metrics on strictly pseudoconvex CR manifolds and zeros of random CR functions](https://arxiv.org/abs/2401.09143v1). It says: “(\[Div(f)\], ψ) = (i/π) ∫₍G₎ ∂∂̄ log(\|f\|) ∧ ψ”

**Sources:** none listed. No primary source with a working link was found.

### Hyperfunctions as boundary values form a flabby sheaf

**Remember:** Every hyperfunction on a smaller set extends to the whole line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32A45 (Hyperfunctions). arXiv math.CV. Level 4: research.

**Definition.** Take an open set U of ℝ and a complex neighbourhood of U. A hyperfunction on U is a pair of holomorphic functions on the upper and lower parts of that neighbourhood. Two pairs are equal when they differ by one holomorphic function on the whole neighbourhood. Sato introduced them in 1958, and the page also writes them as a local cohomology group of holomorphic functions.

**Problem.** A sheaf is flabby when every section on an open set extends to the whole space. One wants generalized functions that can be cut and glued freely, and that include distributions of infinite order.

**How the definition helps.** Defining hyperfunctions by holomorphic functions turns flabbiness into a fact about ℂ, whose open sets have no first cohomology for holomorphic functions (our own summary). Distributions are not flabby. On (0, 1), take the sum of the n-th derivatives of the delta functions at the points 1/n (our own example). This is a distribution, but it has no extension to ℝ, because its order grows without bound near 0 (our own example). The page calls hyperfunctions distributions of infinite order, so this obstruction does not arise. The page also says that distributions embed into hyperfunctions. What stays hard is the theory in several variables, which needs more sheaf cohomology.

**Wikipedia:** [Hyperfunction](https://en.wikipedia.org/wiki/Hyperfunction). It says: “The obvious restriction maps turn ℬ into a sheaf (which is in fact flabby).”

**Sources:**

- [M. Sato, Cyōkansū no riron (Theory of Hyperfunctions), Sūgaku 10 (1958), no. 1, 1–27](https://doi.org/10.11429/sugaku1947.10.1)

### Proper maps preserve sheaf coherence

**Remember:** Over a point, coherence means finite dimension.

*Rules out counterexamples.* MSC 32C35 (Analytic sheaves and cohomology groups), 32H35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** Call a holomorphic map proper if inverse images of compact sets are compact. The direct image sheaf assigns to each target open set the sections over its inverse image. A coherent analytic sheaf has finitely many local generators and relations.

**Problem.** The direct image of a coherent analytic sheaf under a proper holomorphic map is coherent.

**How the definition helps.** Properness excludes the projection of the whole complex line to a point in our own analytic example. Take the sheaf of holomorphic functions, which assigns those functions to each open set. Its direct image at the point contains all coordinate powers, which are linearly independent. Coherence there would require finite dimension. Grauert’s direct image theorem proves coherence for proper holomorphic maps.

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “the direct image of a coherent sheaf under a proper morphism is coherent”

**Sources:**

- [Hans Grauert, Ein Theorem der analytischen Garbentheorie und die Modulräume komplexer Strukturen (1960)](https://doi.org/10.1007/bf02684746)

### Unchanged functions force connected fibers

**Remember:** Disconnected fibers would give extra locally constant holomorphic functions.

*True by definition.* MSC 32H35 (Proper holomorphic mappings, finiteness theorems), 32C35. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A fiber is the set of points with the same image. Stein factorization splits a proper holomorphic map into two maps through a new analytic space. Proper means inverse images of compact sets are compact. Construct the intermediate space from the holomorphic functions on inverse images of open sets in the original target.

**Problem.** The first map in Stein factorization has connected fibers.

**How the definition helps.** In our own proof, every holomorphic function over a neighborhood in the intermediate space comes from that neighborhood. If a fiber splits, surround its two closed parts by disjoint open sets. Properness of the first map lets us shrink the neighborhood until these sets cover its inverse image. Assign zero on one part and one on the other. A function from the neighborhood would have a single value on that fiber. The construction theorem supplies the intermediate space and the stated correspondence of functions.

**Wikipedia:** [Stein factorization](https://en.wikipedia.org/wiki/Stein_factorization). It says: “Roughly speaking, Stein factorization contracts the connected components of the fibers of a mapping to points.”

**Sources:**

- [Karl Stein, Analytische Zerlegungen komplexer Räume (1956)](https://doi.org/10.1007/BF01343331)

### A Berkovich boundary gives a compactification on which GAGA holds

**Remember:** Add a valuative boundary, and analytic sheaves can no longer grow wildly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32J05 (Compactification of analytic spaces), 14G22, 14F06. arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a complex algebraic variety X, the analytic space X(ℂ) is compact only when X is proper. Poineau adds at infinity a Berkovich space over ℂ with the trivial absolute value. The result is a canonical compact space X⌝, functorial for proper morphisms.

**Problem.** Serre's GAGA says that for a proper variety, coherent analytic sheaves are the same as coherent algebraic sheaves. For a non-proper variety, can a compactification restore this?

**How the definition helps.** The boundary keeps track of growth at infinity, so coherent sheaves on the compactification are algebraic (our own reading). Without it, GAGA fails. On the affine line, the exponential function is analytic but is not a polynomial (our own). Poineau proves that coherent sheaves on X and on X⌝ form equivalent categories, with the same global sections. The construction keeps properties such as normality, regularity and the Cohen–Macaulay property. The paper calls the theorem partial, and it states it for coherent sheaves and global sections only.

**Paper or page:** [Valuative compactifications of analytic varieties](https://arxiv.org/abs/2503.18643v2), [Valuative compactifications of analytic varieties](https://arxiv.org/abs/2503.18643v2). It says: “We prove a partial GAGA theorem in this setting : there is an equivalence between the categories of coherent sheaves on X and X⌝, and it induces bijections on global sections.”

**Sources:**

- [Jérôme Poineau, Valuative compactifications of analytic varieties, arXiv:2503.18643v2 (2025)](https://arxiv.org/abs/2503.18643v2)

### Uniform relative K-polystability is exactly the condition for toric extremal metrics

**Remember:** Measure stability with a norm, and it matches extremal metrics exactly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14M25. arXiv math.DG, math.AG. Level 4: research.

**Definition.** A polarized manifold is a complex manifold with a chosen positive line bundle L. An extremal Kähler metric is one whose scalar curvature has a holomorphic gradient. K-polystability tests a polarized manifold against degenerations to simpler spaces, using a number called the Donaldson–Futaki invariant. The uniform and relative version asks that this number grow at least like a norm of the degeneration, after removing symmetries.

**Problem.** The Yau–Tian–Donaldson conjecture asks for an algebraic condition that is equivalent to the existence of a canonical Kähler metric. The paper proves a uniform version for polarized toric manifolds, which have a large torus symmetry.

**How the definition helps.** The uniform condition is chosen to match coercivity of the K-energy, so the equivalence can be stated and proved. Coercive means that this energy, whose minima are the metrics, grows at least like a distance. The paper's corollary treats toric Fano manifolds, those whose anticanonical bundle is positive. There, several stability notions are equivalent to the vanishing of the Futaki invariant. All are equivalent to the barycenter of the moment polytope being at the origin. The hardest step, from coercivity to the existence of a metric, rests on earlier existence theorems (our own).

**Paper or page:** [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386), [A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds](https://arxiv.org/abs/2110.10386). It says: “Then the followings are equivalent. (1) (X, L) admits an S-invariant extremal Kähler metric. (2) (X, L) is uniformly relatively K-polystable. (3) The relative K-energy of (X, L) is T-coercive.”

**Sources:**

- [Y. Nitta and S. Saito, A uniform version of the Yau-Tian-Donaldson correspondence for extremal Kähler metrics on polarized toric manifolds, arXiv:2110.10386 (2021)](https://arxiv.org/abs/2110.10386)

### Weighted projective embeddings give orbifolds a stability condition for constant curvature

**Remember:** Weighted coordinates remember the finite groups at singular points.

*Makes the theorem clean to state or prove.* MSC 32Q26 (Notions of stability for complex manifolds), 53C55, 14L24. arXiv math.AG, math.DG. Level 4: research.

**Definition.** An orbifold looks locally like a smooth space divided by a finite group. It is polarized if it carries an ample line bundle. In weighted projective space, the coordinates scale by different powers of one parameter. Embedding an orbifold there gives a notion of K-semistability that sees its finite groups.

**Problem.** Donaldson proved that a constant scalar curvature Kähler metric on a manifold implies K-semistability. Does this hold for orbifolds with cyclic stabilizer groups?

**How the definition helps.** The weighted embedding gives orbifolds a K-semistability notion, so Donaldson’s theorem has an orbifold statement. The paper proves that an orbifold metric of constant scalar curvature implies this K-semistability. With slope stability for orbifolds, this gives an explicit obstruction to such metrics. The abstract says that results of Troyanov, Ghigi–Kollár, Rollin–Singer and others fit this frame. Our own explanation is that ordinary projective embeddings lose the information of the finite groups.

**Paper or page:** [Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics](https://arxiv.org/abs/0907.5214v2). It says: “We then prove an orbifold version of Donaldson's theorem: the existence of an orbifold Kahler metric of constant scalar curvature implies K-semistability.”

**Sources:**

- [J. Ross, R. P. Thomas, Weighted projective embeddings, stability of orbifolds and constant scalar curvature Kähler metrics, arXiv:0907.5214 (2009), J.Diff.Geom.88:109-159,2011](https://arxiv.org/abs/0907.5214v2)

### Visibility gives convex domains the Denjoy–Wolff property

**Remember:** If geodesics must dive inward, orbits cannot drift to two boundary points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 32Q45 (Hyperbolic and Kobayashi hyperbolic manifolds), 32H50. arXiv math.CV, math.DS. Level 4: research.

**Definition.** The Kobayashi distance is a distance on a complex domain that holomorphic maps never increase. A domain has a visibility property when near-geodesics between two different boundary points all pass through one compact set inside it. So such geodesics bend into the interior, as in the hyperbolic disc. Complex visibility and essential visibility are versions of this idea.

**Problem.** The Denjoy–Wolff property says that for every holomorphic self-map without fixed points, all orbits converge to one boundary point. The theorem in the data gives it for some bounded convex domains in ℂᴺ. Their boundary must contain no non-trivial analytic discs, and they must be complex visible or essentially visible.

**How the definition helps.** Visibility stops an orbit from accumulating at two different boundary points. The theorem says this directly: every other limit point of the orbit is non-visible from the first one. Our own reason is that the Kobayashi geodesic between two such points would have to pass through a fixed compact set. Our own example of the failure is the bidisc, which is convex but has discs in its boundary. Take a parabolic automorphism φ of the disc and the map (z, w) ↦ (φ(z), w). Each orbit tends to a boundary point that depends on w. The 2021 paper notes that the proof needs a form of visibility between two of the notions it compares.

**Paper or page:** [Some open questions and conjectures about visibility and iteration in bounded convex domains in ℂᴺ](https://arxiv.org/abs/2507.19967v2), [Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications](https://arxiv.org/abs/2111.00549v2). It says: “In particular, if Ω is complex visible or essentially visible then it enjoys the Denjoy-Wolff property.”

**Sources:**

- [Filippo Bracci, Ahmed Yekta Ökten, Some open questions and conjectures about visibility and iteration in bounded convex domains in ℂᴺ, Complex Anal. Synerg. 11 (2025) Paper No. 23, arXiv:2507.19967](https://doi.org/10.1007/s40627-025-00172-2)
- [Vikramjeet Singh Chandel, Anwoy Maitra, Amar Deep Sarkar, Notions of Visibility with respect to the Kobayashi distance: Comparison and Applications, arXiv:2111.00549 (2021)](https://arxiv.org/abs/2111.00549v2)
- [Bharali, Zimmer, Goldilocks domains, a weak notion of visibility, and applications, Advances in Mathematics 310 (2017), 377–425](https://doi.org/10.1016/j.aim.2017.02.005)

### The convex approximation property gives every form of the Oka principle

**Remember:** Approximate on convex sets, and every Oka principle follows.

*Makes the theorem clean to state or prove.* MSC 32Q56 (Oka principle and Oka manifolds), 32Q28. arXiv math.CV. Level 4: research.

**Definition.** A complex manifold Y has the convex approximation property (CAP) when the following holds for every compact convex set K in ℂⁿ. Every holomorphic map to Y from a neighbourhood of K is a uniform limit on K of holomorphic maps from all of ℂⁿ. Manifolds with this property are called Oka manifolds.

**Problem.** Let X be a Stein space, a complex space with many holomorphic functions, such as a closed complex submanifold of ℂⁿ. For maps from X to a manifold Y with CAP, every continuous map is homotopic to a holomorphic one, also with approximation, interpolation and parameters. All these versions of the Oka principle are equivalent to each other.

**How the definition helps.** CAP is one simple test on convex sets in ℂⁿ, and the quoted theorem derives all the global Oka properties from it. So, in our own words, once Oka manifolds are defined by CAP, a new example needs only this one test. The work moves into that theorem, due to Forstnerič. Our own example of a manifold without CAP is the unit disc. A holomorphic map from ℂⁿ into the disc is constant by Liouville's theorem, so a nonconstant map on a small ball cannot be approximated. The survey also gives a homotopy form. Holomorphic maps from X into an Oka manifold Y form a space weakly homotopy equivalent to the continuous maps.

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

**Definition.** A perverse sheaf is usually a complex of constructible sheaves with support conditions. Such complexes form the heart of a t-structure, the objects that lie in both halves of a chosen splitting of the derived category. Dyckerhoff, Kapranov and Soibelman describe perverse sheaves on a stratified surface as functors on the Milnor disks of the surface's paracyclic category. A Milnor disk is a pair of a closed disk and a part of its boundary.

**Problem.** Constructible sheaves on a stratified space are exactly the representations of the exit-path category. Is there a similar description of perverse sheaves?

**How the definition helps.** Only functors on Milnor disks with simple gluing conditions are needed, so perverse sheaves form an abelian category with no derived categories. Usually the abelian structure comes from a theorem about the heart of a t-structure (our own). The key step is a purity property. A constructible complex is perverse exactly when its relative cohomology on every Milnor disk is zero outside degree 0. These degree-0 groups are the values of the functor. The method is for stratified surfaces only.

**Paper or page:** [Perverse sheaves on Riemann surfaces as Milnor sheaves](https://arxiv.org/abs/2012.11388v2). It says: “In particular, this perspective yields an intrinsic definition of perverse sheaves as an abelian category without reference to derived categories and t-structures.”

**Sources:**

- [Tobias Dyckerhoff, Mikhail Kapranov, Yan Soibelman, Perverse sheaves on Riemann surfaces as Milnor sheaves, arXiv:2012.11388v2 (2021)](https://arxiv.org/abs/2012.11388v2)

### Restricted currents add divisorial coefficients

**Remember:** Restrict both summands to the same hypersurface before adding.

*True by definition.* MSC 32U40 (Currents), 32U25. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A positive closed current of type (1,1) generalizes a closed differential form with a positive semidefinite matrix of coefficients. Its coefficients can be measures. Restrict those measures to an irreducible analytic hypersurface, a single component of complex codimension one. The restricted current equals a constant times integration over the hypersurface.

**Problem.** For two such currents on a complex manifold, their coefficients on any fixed irreducible hypersurface add.

**How the definition helps.** In our own proof, restriction adds measure coefficients term by term, so the multiples of integration add too. The comparison theorem identifies each multiple with the generic Lelong number, the current’s local density at typical points of the hypersurface. The theorem supplies the constant multiple description, which avoids computing those densities.

**Paper or page:** [On the Canonical Bundle Formula and Adjunction for Generalized Kaehler Pairs](https://arxiv.org/abs/2404.12007v1). It says: “χ₍A₎T = ν(T, A)\[A\], where ν(T, A) is the generic Lelong number of T along A.”

**Sources:** none listed. No primary source with a working link was found.
