### Irreducible spaces are nonempty, so prime radical ideals match irreducible varieties

**Remember:** The whole ring is not prime; the empty set is not irreducible.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms), 13A15. arXiv math.AG, math.AC. Level 2: later undergraduate.

**Definition.** A topological space is irreducible if it is not the union of two proper closed subsets; algebraic geometers also ask it to be nonempty. An ideal I is prime if it is not the whole ring and ab in I implies a in I or b in I. An ideal is radical if fⁿ in I implies f in I.

**Problem.** For a radical ideal I of ℂ\[x₁, …, xₙ\], I is prime exactly when its zero set V(I) is irreducible. Here V(I) has the Zariski topology, whose closed sets are the zero sets of ideals.

**How the definition helps.** Both definitions leave out the same trivial case, so the match has no exception. The whole ring (1) is radical but not prime, and its zero set is empty (our own). Wikipedia notes that the empty set is irreducible if one reads the plain definition literally. Then (1) would be a counterexample, so Napkin asks for a nonempty variety. With the convention that irreducible spaces are nonempty, the statement holds for every radical ideal (our own). The real work is the Nullstellensatz, which matches radical ideals with varieties in the first place (our own).

**Wikipedia:** [Hyperconnected space](https://en.wikipedia.org/wiki/Hyperconnected_space). It says: “However some authors, especially those interested in applications to algebraic geometry, add an explicit condition that an irreducible space must be nonempty.”

**Paper or page:** [An Infinitely Large Napkin: Alg Geom: Affine Var](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let I be a radical ideal, and V = 𝕍(I) a nonempty variety. Then I is prime if and only if V is irreducible.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Leaving out the irrelevant ideal makes the projective Nullstellensatz a bijection

**Remember:** The origin is not a projective point, so its ideal is irrelevant.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms), 13A02, 13A15. arXiv math.AG, math.AC. Level 2: later undergraduate.

**Definition.** A point of complex projective space ℂPⁿ is a line through the origin in ℂⁿ⁺¹. If a homogeneous polynomial vanishes at one nonzero point of a line through the origin, it vanishes on the whole line. So homogeneous ideals have zero sets in ℂPⁿ. The irrelevant ideal is (x₀, x₁, …, xₙ), the ideal of all polynomials with no constant term.

**Problem.** Projective varieties in ℂPⁿ correspond bijectively to the homogeneous radical ideals of ℂ\[x₀, …, xₙ\] other than the irrelevant ideal.

**How the definition helps.** The irrelevant ideal vanishes only at the origin of ℂⁿ⁺¹, and the origin is not a point of projective space (our own). So its projective zero set is empty, the same as for the whole ring (1), and both ideals are radical. Removing the irrelevant ideal leaves one ideal for the empty variety and restores the bijection. The real work is the affine Nullstellensatz, applied to the cone over the variety in ℂⁿ⁺¹ (our own).

**Paper or page:** [An Infinitely Large Napkin: Alg Geom: Proj Var](https://venhance.github.io/napkin/Napkin.pdf). It says: “Thus there is a natural bijection between: projective varieties in ℂPⁿ, and homogeneous radical ideals of ℂ\[x₀, …, xₙ\] except for the irrelevant ideal.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Counting complex points at infinity makes Bézout's count exact

**Remember:** Count complex points, points at infinity, and tangencies twice, and you always get mn.

*Makes the theorem clean to state or prove.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14H50. arXiv math.AG. Level 2: later undergraduate.

**Definition.** Count the intersection points of two plane curves in the complex projective plane. This plane adds points at infinity to the complex plane, so that parallel lines meet. Count each point with its intersection multiplicity, which is 1 where the curves cross cleanly and larger where they touch.

**Problem.** Bézout's theorem: two plane curves of degrees m and n with no common component meet in exactly mn points.

**How the definition helps.** Counting this way puts back every point that the real picture misses, so the count is always exact. In the real affine plane, the count is only an upper bound. For example, two circles meet in at most two real points, but Bézout predicts four. The two missing points are the complex points (1 : i : 0) and (1 : −i : 0) at infinity, which lie on every circle. Parallel lines meet at infinity, and a tangent line meets a conic in a point of multiplicity two. The article says that a precise definition of multiplicity came only in the twentieth century, and that Serre's algebraic definition in 1958 gave a proof over any algebraically closed field.

**Wikipedia:** [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem). It says: “To properly account for all intersection points, it may be necessary to allow complex coordinates and include the points on the infinite line in the projective plane.”

**Sources:**

- [J.-P. Serre, Algèbre locale · multiplicités, Lecture Notes in Mathematics 11, Springer (1965; 3rd edition 1975)](https://doi.org/10.1007/978-3-540-37123-6)

### The point at infinity gives the chord-tangent rule an identity

**Remember:** Every line meets the cubic three times, so addition always works.

*Makes the theorem clean to state or prove.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 2: later undergraduate.

**Definition.** An elliptic curve in Weierstrass form is the curve y² = x³ + ax + b in the projective plane. It has one point at infinity, called O. To add P and Q, take the third point R where the line through P and Q meets the curve. Then reflect R in the x-axis.

**Problem.** The chord-tangent rule defines an abelian group on the points of the curve, with O as identity. Rational points form a subgroup, because a line through two rational points has rational coefficients.

**How the definition helps.** In the projective plane, every line meets the cubic exactly three times when tangency is counted, so the third point always exists. In the affine plane, vertical lines meet the curve only twice. The point at infinity is where they meet the third time, and it becomes the identity. Tangent lines handle P = Q, because tangency counts as a double meeting. The hard part that stays is associativity, which needs a real proof, for example by the Cayley–Bacharach theorem or by Riemann–Roch (our own remark).

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “In the projective plane, each line will intersect a cubic at three points when accounting for multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Defining geometric reducedness by all field extensions makes it survive base change

**Remember:** An extension of the new field is already an extension of the original field.

*True by definition.* MSC 14A05 (Relevant commutative algebra), 13B02. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An algebra is reduced if it has no nonzero nilpotent elements. Call a k-algebra S geometrically reduced if K ⊗ S is reduced for every field extension K of k. Stacks Lemma 10.44.4 lists this as one of its equivalent conditions. Another common definition tests only an algebraic closure of k.

**Problem.** If S is geometrically reduced over k and k′ is a field extension of k, then k′ ⊗ S is geometrically reduced over k′.

**How the definition helps.** With this definition, the theorem is a change of scalars in two steps. Every field extension K of k′ is also a field extension of k, and K ⊗ (k′ ⊗ S) over k′ is K ⊗ S over k, which is reduced (our own). With the algebraic closure test, one must instead compare the algebraic closures of k and k′ (our own). The work moves to Stacks Lemma 10.44.4, which shows that the algebraic closure test agrees with this definition.

**Paper or page:** [Varieties, Lemma 33.6.6.](https://stacks.math.columbia.edu/tag/0384), [Algebra, Lemma 10.44.4.](https://stacks.math.columbia.edu/tag/030V). It says: “In particular, X is geometrically reduced over k if and only if Xₖ′ is geometrically reduced over k′.”

**Sources:** none listed. No primary source with a working link was found.

### For spaces with functions, being a morphism is a local property

**Remember:** A morphism is a map that pulls functions back to functions.

*True by definition. Confidence: medium.* MSC 14A10 (Varieties and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A space with k-valued functions is a space X with a sheaf of k-algebras of k-valued functions on X. A morphism of such spaces is a continuous map f such that every local function φ on the target pulls back to a function φ ∘ f in the structure sheaf of the source.

**Problem.** Let f be a continuous map between spaces with functions, and let open covers Uᵢ and Vᵢ satisfy f(Uᵢ) ⊂ Vᵢ. Then f is a morphism exactly when each restriction Uᵢ → Vᵢ is a morphism.

**How the definition helps.** When the structure sheaf holds actual functions, f alone fixes the pullback of functions. So being a morphism is a property of the map, and a property can be checked locally. For ringed spaces, a morphism carries extra data, a map of sheaves, and one must glue this data. The statement is Lemma 4.6 of Gathmann's lecture notes, as cited by the nLab.

**nLab:** [algebraic variety](https://ncatlab.org/nlab/show/algebraic+variety). It says: “The advantage of this notion of morphism between spaces with k-valued functions is that it is a property, rather than additional data (as in a morphism of ringed spaces).”

**Sources:**

- [U. Görtz, T. Wedhorn, Algebraic Geometry I: Schemes, Springer (2020)](https://doi.org/10.1007/978-3-658-30733-2)

### Affine diagonals give affine intersections

**Remember:** Pull the diagonal back to intersect two affine opens.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** An affine scheme is the spectrum of one ring. A scheme has affine diagonal if the map x ↦ (x, x) has affine inverse images of affine opens.

**Problem.** In a scheme with affine diagonal, any two affine opens have affine intersection.

**How the definition helps.** The diagonal has U ∩ V as the inverse image of U × V, in our own explanation. The product of two affine opens is affine, so the condition applies. For our own counterexample, glue two affine planes along the plane minus its origin. Their intersection has the same polynomial functions as the whole plane but lacks the origin, so it cannot be affine.

**Paper or page:** [Coherent, Lemma 30.2.5.](https://stacks.math.columbia.edu/tag/0BDX). It says: “for U, V ⊂ X affine open, the intersection U ∩ V is affine”

**Sources:** none listed. No primary source with a working link was found.

### Affine schemes as duals of rings make Gelfand duality a definition

**Remember:** Define the space by its ring, and the bundle by its module of sections.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 13C10, 46L05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** In algebraic geometry, an affine scheme is by definition the formal dual Spec R of a commutative ring R. Formal dual means an object of the opposite category, so maps Spec R → Spec S are ring maps S → R. A vector bundle on Spec R is identified with its module of sections over R.

**Problem.** Gelfand duality says that spaces correspond to their algebras of functions. The Serre–Swan theorem says that vector bundles correspond to finitely generated projective modules.

**How the definition helps.** In algebraic geometry the space is defined as the dual of its ring, so Gelfand duality holds by definition. In topology both results are real theorems: Gelfand duality needs C\*-algebra theory, and Swan's theorem needs compact Hausdorff spaces. Serre's form is still a theorem: locally free sheaves of finite rank on Spec R correspond to finitely generated projective R-modules. But it is stated in the same algebraic language as the definitions.

**nLab:** [module](https://ncatlab.org/nlab/show/module), [Serre-Swan theorem](https://ncatlab.org/nlab/show/Serre-Swan+theorem). It says: “notably in algebraic geometry Gelfand duality is taken to "hold by definition" in that an algebraic variety is essentially by definition the formal dual of a given ring”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955) 197–278](https://doi.org/10.2307/1969915)
- [Richard G. Swan, Vector bundles and projective modules, Trans. AMS 105 (1962) 264–277](https://doi.org/10.1090/S0002-9947-1962-0143225-6)

### Allowing the zero ring makes the empty scheme affine

**Remember:** The zero ring has no proper ideals, so its spectrum has no points.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13A99. arXiv math.AG. Level 3: graduate.

**Definition.** A scheme is a space built by gluing spectra, and an affine scheme is a single spectrum. The spectrum of a commutative ring is a space whose points are its prime ideals. A prime ideal must be proper, so it does not contain 1. Rings may have 0 = 1, so the zero ring counts as a ring.

**Problem.** The empty scheme is affine, because it is the spectrum of the zero ring.

**How the definition helps.** Allowing the zero ring gives the empty scheme a ring, so the empty scheme is affine with no special case. In the zero ring every ideal contains 1 = 0, so there are no prime ideals and the spectrum is empty. If rings had to satisfy 0 ≠ 1, the empty scheme would not be affine. The category of affine schemes would then also have no initial object, one with exactly one map to every object, our own observation. The page states the fact and cites Hartshorne, page 80.

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring). It says: “The spectrum of the zero ring is the empty scheme.”

**Sources:** none listed. No primary source with a working link was found.

### Closed immersions are exactly the proper monomorphisms of schemes

**Remember:** Proper plus injective on all points gives a closed subscheme.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 18A20. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism is proper if it is separated, of finite type and universally closed, which means closed after every base change. A monomorphism is a morphism that is injective on T-valued points for every scheme T; this is a property of the functor of points. A closed immersion identifies X with a closed subscheme of S.

**Problem.** A morphism of schemes is a closed immersion exactly when it is a proper monomorphism. It is also one exactly when it is proper, unramified and universally injective.

**How the definition helps.** A monomorphism is defined by maps into X alone, so with properness it gives a test that needs no structure sheaves (our own). Universal closedness cannot be dropped (our own example). The affine line minus the origin, mapped into the affine line, is a monomorphism locally of finite type, but it is not a closed immersion. The hard part is the proof, which shows that a proper monomorphism is finite by Zariski's main theorem (our own summary).

**Paper or page:** [Stacks Project, Etale, Lemma 41.7.2](https://stacks.math.columbia.edu/tag/04XV). It says: “Let f : X → S be a morphism of schemes. The following are equivalent: (1) f is a closed immersion, (2) f is a proper monomorphism, (3) f is proper, unramified, and universally injective”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 04XV (Etale, Lemma 41.7.2)](https://stacks.math.columbia.edu/tag/04XV)

### Defining a bundle's total space by its symmetric algebra makes points sections

**Remember:** Maps out of the symmetric algebra are determined by its linear generators.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** Let ℰ be a locally free sheaf of finite rank on S, with dual sheaf ℰ∨. Define the total space as the relative spectrum of the symmetric algebra of ℰ∨. The relative spectrum glues the spectra of algebras over affine charts of S. The usual construction glues copies of affine space using linear changes of basis.

**Problem.** Maps over S from a scheme T to the total space match the global sections of the pullback of ℰ to T.

**How the definition helps.** With this definition, the theorem follows from two universal properties (our own). A map from T to a relative spectrum is an algebra map from the pulled back algebra to the functions on T. An algebra map out of a symmetric algebra is a linear map out of its generators, here the pullback of ℰ∨. Since ℰ has finite rank, such a linear map is a section of the pullback of ℰ (our own). The real work moves into the universal property of the relative spectrum and its agreement with the glued affine spaces (our own).

**nLab:** [relative spectrum](https://ncatlab.org/nlab/show/relative+spectrum). It says: “However, one can construct their total spaces, using the symmetric algebra over the structure sheaf, obtaining a sheaf of algebras and then use the relative spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Defining affine schemes as dual rings makes fiber products tensor products

**Remember:** Reverse the ring maps and a tensor product becomes a fiber product.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Define the category of affine schemes as the category of commutative rings with all arrows reversed. The usual definition builds Spec A as a space of prime ideals with a sheaf of local rings.

**Problem.** Take ring maps R → A and R → B. The fiber product of Spec A and Spec B over Spec R is the spectrum of A ⊗ B over R. The Stacks Project shows that it is also the fiber product among all locally ringed spaces.

**How the definition helps.** With the dual definition the theorem is immediate, because the tensor product is the pushout of commutative rings (our own). Reversing the arrows turns this pushout into a fiber product. The real work moves into one comparison theorem. Maps from a locally ringed space X into Spec A match ring maps from A to the functions on X (Stacks Project, Schemes, Lemma 26.6.4). That theorem makes the dual definition agree with the space definition (our own).

**Paper or page:** [Schemes, Lemma 26.6.7](https://stacks.math.columbia.edu/tag/01I4). It says: “Moreover, the products and fibre products in the category of affine schemes are the same as in the category of locally ringed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining closed immersions by surjective ring maps makes base change immediate

**Remember:** Changing the base changes the coefficients but keeps the equations.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Call a map of schemes a closed immersion if each affine open Spec R of the target has preimage Spec(R∕I) for an ideal I. The Stacks Project instead asks for a homeomorphism onto a closed subset and a surjective map of sheaves of functions, with a locally generated kernel.

**Problem.** A closed immersion stays a closed immersion after any base change, that is, after pullback along any map into its target.

**How the definition helps.** With the ring definition, the proof is one line, because B ⊗ (R∕I) is B∕IB for any R-algebra B (our own). So the pullback over Spec B is Spec(B∕IB). The real work moves into two theorems. One shows that the ring condition needs checking on only one affine cover (our own). The other shows that it agrees with the locally ringed space definition (our own).

**Paper or page:** [Morphisms, Lemma 29.2.4](https://stacks.math.columbia.edu/tag/01QR). It says: “The base change of a closed immersion is a closed immersion.”

**Sources:** none listed. No primary source with a working link was found.

### Defining projective bundles by line quotients makes twisting by line bundles harmless

**Remember:** Twist every quotient line by ℒ, and untwist it with the dual.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 14C20. arXiv math.AG. Level 3: graduate.

**Definition.** Let ℰ be a vector bundle on S. Define its projective bundle by test maps. A map from T is a line bundle quotient of the pullback of ℰ to T. The graded construction takes the relative Proj of the symmetric algebra of ℰ. This glues the projective spectra of graded algebras over affine charts.

**Problem.** For a vector bundle ℰ and a line bundle ℒ, the projective bundles of ℰ and ℰ ⊗ ℒ are canonically isomorphic.

**How the definition helps.** With the quotient definition, the isomorphism is just a bijection between test maps (our own). Send a line quotient Q of ℰ to the quotient Q ⊗ ℒ of ℰ ⊗ ℒ. Tensoring with the dual of ℒ goes back. The real work moves into showing that the relative Proj of the symmetric algebra represents these quotients (our own). The isomorphism does not keep 𝒪(1) fixed, which changes by the pullback of ℒ, as the Stacks lemma records.

**Paper or page:** [Constructions, Lemma 27.20.1](https://stacks.math.columbia.edu/tag/02NC). It says: “There is a canonical isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative normalization by a universal property makes it functorial

**Remember:** Pull back one normalization and the other's universal property gives the map.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 13B22. arXiv math.AG. Level 3: graduate.

**Definition.** Let f from Y to X be a map of schemes. Define the normalization of X in Y as the initial factorization of f through a scheme integral over X. Initial means it maps uniquely to every other such factorization. The usual construction takes the relative spectrum of the functions on Y that satisfy monic polynomials over the functions on X.

**Problem.** Take a commutative square with maps Y₂ → Y₁ and X₂ → X₁, and vertical maps Y₂ → X₂ and Y₁ → X₁ that are quasi-compact and quasi-separated. Then a unique map X′₂ → X′₁ between the normalizations makes the diagram commute.

**How the definition helps.** With the universal definition, functoriality follows from the universal property alone (our own). Pull back X′₁ along X₂ → X₁. The result is still integral over X₂, and Y₂ maps into it, so the initial property gives the map (our own). The real work moves into proving that the integral closure construction has this universal property for quasi-compact, quasi-separated maps (our own).

**Paper or page:** [Morphisms, Lemma 29.53.5](https://stacks.math.columbia.edu/tag/035J). It says: “Then there exists a unique arrow X′₂ → X′₁ fitting into a commutative diagram”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative spectra by their test maps makes base change automatic

**Remember:** Pulling back in two steps equals pulling back in one step.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Let 𝒜 be a quasi-coherent algebra on a scheme S, meaning a sheaf of algebras that comes from algebras on affine charts. Define its relative spectrum by its test maps. A test map from T is a map T → S with an algebra map from the pullback of 𝒜 to the functions on T. The usual construction glues the spectra of the algebras over affine charts of S.

**Problem.** Let g be a map from S′ to S. The relative spectrum of g\*𝒜 over S′ is the fiber product of S′ with the relative spectrum of 𝒜 over S.

**How the definition helps.** With the test-map definition, both sides have the same test maps (our own). Pulling 𝒜 back to S′ and then to T gives the same algebra as pulling it straight back to T. The Stacks Project states the result as an isomorphism of the two rules on test schemes. The real work moves into showing that the glued affine spectra have exactly these test maps, so that a scheme represents the rule (our own).

**Paper or page:** [Constructions, Lemma 27.4.1](https://stacks.math.columbia.edu/tag/01LS). It says: “Let F′ be the functor associated to (S′, 𝒜′) above. Then there is a canonical isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining separatedness by a closed diagonal makes agreement loci closed

**Remember:** Two maps agree exactly where the pair lands on the diagonal.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Call a map X → S separated if its diagonal from X to X ×ₛ X is a closed immersion. Another test, the valuative criterion, asks that maps from the fraction field of a valuation ring extend uniquely to the ring. A valuation ring is a domain in which, of any two nonzero elements, one divides the other.

**Problem.** Let a and b be maps from X to Y over S, with Y separated over S. They agree on a largest closed subscheme Z of X. A map into X factors through Z exactly when its composites with a and b agree.

**How the definition helps.** The diagonal definition makes Z the preimage of the diagonal under the map (a, b) from X to Y ×ₛ Y (our own). Closed immersions survive pullback, so Z is closed. The Stacks Project shows that Z is always locally closed, and closed when Y is separated. The analogue for spaces is that a space is Hausdorff exactly when its diagonal is closed (our own). The valuative test needs the diagonal to be quasi-compact, and comparing the two tests is the work of the valuative criterion (our own).

**Paper or page:** [Schemes, Lemma 26.21.5](https://stacks.math.columbia.edu/tag/01KM). It says: “Moreover, if Y is separated over S, then Z is a closed subscheme.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Weil restriction by points makes it commute with base change

**Remember:** On test rings, both base changes give points over the same tensor product.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Let L be a finite extension of a field K, and X a quasi-projective variety over L. Its Weil restriction is the variety over K whose points over each K-algebra R are the points of X over L ⊗ R. For affine X one can instead expand each equation in a K-basis of L.

**Problem.** Let K′ be an extension of K, and let L′ = L ⊗ K′, a finite K′-algebra that need not be a field. Then the Weil restriction of X, base changed to K′, is the Weil restriction from L′ to K′ of X base changed to L′.

**How the definition helps.** With the point-wise definition, both sides have the same points over every K′-algebra R. A variety is determined by these points, so the two sides are isomorphic. By associativity of tensor products, both are the points of X over L ⊗ R (our own). The work is to show that a variety represents the point functor, which uses that X is quasi-projective (our own). With expanded equations, one would have to track how the basis and the equations change (our own).

**Wikipedia:** [Weil restriction](https://en.wikipedia.org/wiki/Weil_restriction). It says: “From the standpoint of sheaves of sets, restriction of scalars is just a pushforward”

**Sources:**

- [Siegfried Bosch, Werner Lütkebohmert and Michel Raynaud, Néron Models, §7.6 (1990)](https://doi.org/10.1007/978-3-642-51438-8)

### Every commutative ring gives a scheme, so schemes form a nice category

**Remember:** Admit the bizarre objects, and the category stops having holes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 18A35. arXiv math.AG. Level 3: graduate.

**Definition.** Grothendieck lets every commutative ring R define an affine scheme Spec R. He puts no conditions on R, such as finite type (finitely generated over a base), reducedness (no nilpotent elements) or a field of definition. Schemes are glued from these affine schemes.

**Problem.** Finite limits, for example fiber products, exist in the category of schemes.

**How the definition helps.** Allowing all rings fills the gaps that the nice objects leave, so the category gets its limits. Nice objects tend to form categories that lack limits; for example, fiber products of manifolds need not be manifolds. The nLab states the general principle, and the fiber product of schemes is our own illustration. The price is that general schemes can be pathological, and fiber products still need a real construction by gluing (EGA I).

**nLab:** [dichotomy between nice objects and nice categories](https://ncatlab.org/nlab/show/dichotomy+between+nice+objects+and+nice+categories). It says: “If the decision to let every commutative ring define a scheme gives standing to bizarre schemes, allowing it gives a category of schemes with nice properties”

**Sources:** none listed. No primary source with a working link was found.

### Geometric integrality keeps products integral

**Remember:** One geometrically integral factor keeps the whole product integral.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An affine scheme is the space described by one coordinate ring. It is integral when that ring is an integral domain. It is geometrically integral over a field when the ring stays a domain after every extension of the field.

**Problem.** The product over a field of an integral affine scheme and a geometrically integral affine scheme is integral.

**How the definition helps.** Geometric integrality keeps the second coordinate ring a domain over the fraction field of the first, in our own proof. Tensoring over a field preserves injections, so the product ring embeds in that domain. In our own example, ℂ is a domain, but ℂ ⊗ℝ ℂ is isomorphic to ℂ × ℂ and has zero divisors.

**Paper or page:** [Algebra, Lemma 10.49.3.](https://stacks.math.columbia.edu/tag/0FWF), [Algebra, Lemma 10.49.4.](https://stacks.math.columbia.edu/tag/09P9). It says: “Let k be a field. Let S be a geometrically integral k-algebra. Let R be a k-algebra and an integral domain. Then R ⊗ₖ S is an integral domain.”

**Sources:** none listed. No primary source with a working link was found.

### Integral morphisms are exactly the affine universally closed morphisms

**Remember:** Integral means affine and closed after every base change.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13B21. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A morphism f : X → S is integral if it is affine and integral over each affine open. That is, over each affine open Spec(A) of S, the ring of functions on the preimage is integral over A. A morphism is universally closed if every base change of it is a closed map.

**Problem.** A morphism of schemes is integral exactly when it is affine and universally closed.

**How the definition helps.** Asking for closedness after every base change makes the condition strong enough to recover integrality. Plain closedness is too weak: Spec(k\[x\]) → Spec(k) is closed, but k\[x\] is not integral over k (our own example). After base change to the affine line it becomes the projection of the plane to a line, which sends the hyperbola xy = 1 onto a set that is not closed. Integral maps stay integral after base change and are closed by going up, and the remaining work is a ring lemma (our own summary).

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.44.7](https://stacks.math.columbia.edu/tag/01WM). It says: “Let f : X → S be a morphism of schemes. The following are equivalent (1) f is integral, and (2) f is affine and universally closed.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01WM (Morphisms, Lemma 29.44.7)](https://stacks.math.columbia.edu/tag/01WM)

### Local maps on stalks make morphisms into Spec A equal ring maps

**Remember:** Maps into Spec A are just ring maps out of A.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 13B10, 18A40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A locally ringed space is a space with a sheaf of rings whose stalks are local rings. A morphism of locally ringed spaces must give local homomorphisms on stalks: it must send the maximal ideal into the maximal ideal.

**Problem.** For every locally ringed space X, morphisms X → Spec(A) of locally ringed spaces correspond bijectively to ring maps A → Γ(X, 𝒪ₓ). So Spec is right adjoint to global sections.

**How the definition helps.** The locality condition forces each point of X to go to one prime, the inverse image of the maximal ideal of its stalk. So the ring map fixes the map of spaces. Without the condition the bijection fails (our own example): for a discrete valuation ring R with fraction field K, the point Spec(K) can go to the closed point of Spec(R), with stalk map R → K. This gives the same map on global sections as the usual map to the generic point.

**Paper or page:** [Stacks Project, Schemes, Lemma 26.6.4](https://stacks.math.columbia.edu/tag/01I1). It says: “Let X be a locally ringed space. Let Y be an affine scheme. The map Mor(X, Y) ⟶ Hom(Γ(Y, 𝒪), Γ(X, 𝒪)) which maps f to f♯ (on global sections) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01I1 (Schemes, Lemma 26.6.4)](https://stacks.math.columbia.edu/tag/01I1)

### Proper quasi-finite maps are finite

**Remember:** Finite fibres need properness to give a finite map.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A map of schemes is finite if preimages of affine opens are affine, with coordinate rings that are finite modules over the base rings. It is proper if it is separated, of finite type and universally closed.

**Problem.** A morphism of schemes is finite if and only if it is proper and has finite fibres.

**How the definition helps.** Properness forces the open piece in Zariski’s Main Theorem to be closed as well, in our own explanation. Over each affine open of the base, the theorem factors a separated quasi-finite map through an open subset of a scheme finite over the base. A closed piece of that finite scheme is still finite over the base. In our own example, the punctured line includes into the affine line with finite fibres. Its image omits the origin and is not closed, so the inclusion cannot be finite.

**Paper or page:** [More Morphisms, Lemma 37.44.1.](https://stacks.math.columbia.edu/tag/02LS). It says: “Let f : X → S be a morphism of schemes. The following are equivalent: f is finite, f is proper with finite fibres, f is proper and locally quasi-finite”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-compact, quasi-separated morphisms push quasi-coherent sheaves to quasi-coherent sheaves

**Remember:** Finitely many affines and overlaps keep pushforwards quasi-coherent.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → S is quasi-compact if the preimage of each quasi-compact open is quasi-compact. It is quasi-separated if the diagonal X → X ×ₛ X is quasi-compact. Then two affine opens of X lying over one affine of S meet in a finite union of affines. A quasi-coherent sheaf is one that is locally the sheaf of a module.

**Problem.** If f : X → S is quasi-compact and quasi-separated, then the pushforward f⁎ℱ of every quasi-coherent sheaf ℱ is quasi-coherent.

**How the definition helps.** Over an affine of S, the two conditions give finitely many affines covering X and finitely many affines covering their overlaps. Then sections of f⁎ℱ are the kernel of a map between finite products of modules, and localization commutes with finite products and kernels (our own summary). Without quasi-compactness this fails (our own example). For X a disjoint union of infinitely many copies of Spec(ℤ) over Spec(ℤ), f⁎𝒪ₓ has sections ∏ℤ, but (∏ℤ)\[1/2\] misses (1/2, 1/4, 1/8, …) in ∏ℤ\[1/2\].

**Paper or page:** [Stacks Project, Schemes, Lemma 26.24.1](https://stacks.math.columbia.edu/tag/01LC). It says: “Let f : X → S be a morphism of schemes. If f is quasi-compact and quasi-separated then f⁎ transforms quasi-coherent 𝒪ₓ-modules into quasi-coherent 𝒪ₛ-modules.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01LC (Schemes, Lemma 26.24.1)](https://stacks.math.columbia.edu/tag/01LC)

### Separated and proper morphisms use the diagonal in the product of schemes

**Remember:** Separated means Hausdorff, with the product of schemes in place of the product of spaces.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → Y of schemes is separated if the diagonal map from X to the fibre product of X with itself over Y is a closed immersion. Here the fibre product is the product of schemes, and a closed immersion is the scheme version of the inclusion of a closed subset. The morphism f is proper if it is separated, of finite type and universally closed. Universally closed means that each base change of f maps closed sets to closed sets.

**Problem.** Let f : X → Y be quasi-separated and of finite type, and let A be a valuation ring with fraction field K. Then f is separated exactly when each map Spec K → X over Spec A → Y has at most one lift Spec A → X. It is proper exactly when that lift always exists and is unique.

**How the definition helps.** The closed-diagonal test copies the Hausdorff condition but uses the fibre product of schemes, which is not the product of the underlying spaces. So the notion is useful even though the underlying space of a separated scheme is typically not Hausdorff. The valuative criteria then turn separated and proper into uniqueness and existence of limits along valuation rings. The criteria themselves are theorems (EGA II 7.2.3 and 7.3.8, due to Chevalley for properness).

**nLab:** [separated morphism of schemes](https://ncatlab.org/nlab/show/separated+morphism+of+schemes), [valuative criterion of separatedness](https://ncatlab.org/nlab/show/valuative+criterion+of+separatedness), [valuative criterion of properness](https://ncatlab.org/nlab/show/valuative+criterion+of+properness), [proper morphism](https://ncatlab.org/nlab/show/proper+morphism). It says: “For example, the underlying topological space of a separated scheme is typically not Hausdorff.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique II: Étude globale élémentaire de quelques classes de morphismes, Publ. Math. IHÉS 8 (1961) 5–222](http://www.numdam.org/item?id=PMIHES_1961__8__5_0)

### Unique generic points match points with irreducible closed sets

**Remember:** One irreducible closed set, one generic point, no more and no fewer.

*True by definition.* MSC 14A15 (Schemes and morphisms), 54D10. arXiv math.AG, math.GN. Level 3: graduate.

**Definition.** A generic point of a topological space is a point whose closure is the whole space. The spectrum of a ring has one point for each prime ideal. For an integral domain, the prime ideal zero is the generic point of its spectrum.

**Problem.** In a scheme, each irreducible closed subset is the closure of exactly one point, its generic point. So a property that holds at almost every point of an irreducible variety becomes a statement about one point.

**How the definition helps.** Because Spec includes a point for every prime ideal, each irreducible closed set has its own point, and that point is unique. In Weil's older foundations, there were very many equally generic points with values in a very large field. Zariski wanted them to be unique, and schemes made this so. The work moves into the short proof that the spectrum of a ring is sober, and into spreading a property from the generic point to an open set (our own remark).

**Wikipedia:** [Generic point](https://en.wikipedia.org/wiki/Generic_point). It says: “Oscar Zariski, a colleague of Weil's at São Paulo just after World War II, always insisted that generic points should be unique.”

**Sources:** none listed. No primary source with a working link was found.

### Universally injective morphisms are those injective on field-valued points

**Remember:** Test injectivity on points with values in fields, not on points.

*True by definition.* MSC 14A15 (Schemes and morphisms), 12F15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → S is universally injective if every base change of f is injective on underlying points. It is radicial if it is injective on points and each residue field extension is purely inseparable.

**Problem.** For a morphism of schemes, three conditions are equivalent: it is injective on K-valued points for every field K, it is universally injective, and it is radicial.

**How the definition helps.** Defining the property through all base changes makes stability under base change true by definition. The work moves to the quoted lemma, which gives a test with field-valued points and residue fields. Plain injectivity is not enough (our own example): Spec(ℂ) → Spec(ℝ) is a bijection of one-point spaces, but its base change to ℂ has two points over one. The radicial condition rules this out, because ℂ over ℝ is separable, not purely inseparable.

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.10.2](https://stacks.math.columbia.edu/tag/01S4). It says: “The following are equivalent: (1) For every field K the induced map Mor(Spec(K), X) → Mor(Spec(K), S) is injective. (2) The morphism f is universally injective. (3) The morphism f is radicial.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01S4 (Morphisms, Lemma 29.10.2)](https://stacks.math.columbia.edu/tag/01S4)

### Using irrelevant modules, not torsion modules, extends Serre's theorem to all gradings

**Remember:** Quotient by modules with zero sheaf, not by modules killed by powers.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 14A22, 16W50. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** Let A be a commutative noetherian graded ring A₀ ⊕ A₁ ⊕ ⋯, with Proj A its projective scheme. Call a finitely generated graded A-module M irrelevant when its sheaf M̃ on Proj A is zero (our own phrasing). Every torsion module is irrelevant, but the converse can fail.

**Problem.** For every commutative noetherian graded ring A, finitely generated graded modules modulo irrelevant modules form a category equivalent to coherent sheaves on Proj A. With torsion modules in place of irrelevant ones, this needs extra hypotheses such as generation in degree one.

**How the definition helps.** The functor M ↦ M̃ kills exactly the irrelevant modules, so they are the right class to divide by. Torsion fails for A = k\[x\] with x in degree 2 and M = A(1), the module A shifted by one degree (our own example). Then M sits in odd degrees, so M̃ = 0, but x acts injectively, so M is not torsion. When A is generated in degree one the two classes agree, and Artin and Zhang copy that form (our own).

**Paper or page:** [Coherent, Proposition 30.15.3](https://stacks.math.columbia.edu/tag/0BXF), [Coherent, Proposition 30.14.4](https://stacks.math.columbia.edu/tag/0BXD). It says: “Let A be a Noetherian graded ring. Set X = Proj(A). The functor M ↦ M̃ induces an equivalence Mod<sup>fg</sup><sub>A</sub>/Mod<sup>fg</sup><sub>A, irrelevant</sub> ⟶ Coh(𝒪<sub>X</sub>)”

**Sources:** none listed. No primary source with a working link was found.

### Using prime ideals, not maximal ideals, makes Spec a functor

**Remember:** Pull back a prime and you get a prime, so maps go backwards.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13A15. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The spectrum Spec R of a commutative ring R is the set of all prime ideals of R. It has the Zariski topology, whose closed sets are the sets of primes that contain a given ideal. A ring homomorphism f from R to S gives a map from Spec S to Spec R. It sends a prime q to its inverse image under f.

**Problem.** Every ring homomorphism R → S gives a continuous map Spec S → Spec R. So Spec is a functor that reverses arrows, and with the structure sheaf, affine schemes are commutative rings with the arrows reversed.

**How the definition helps.** The inverse image of a prime ideal is always prime, so the map on points is defined at once. Maximal ideals do not have this property (our own example). Under the inclusion of ℤ in ℚ, the zero ideal is maximal in ℚ, but its inverse image, the zero ideal of ℤ, is not maximal. The hard part that stays is the structure sheaf, which must be built so that its ring of global sections is R again.

**Wikipedia:** [Spectrum of a ring](https://en.wikipedia.org/wiki/Spectrum_of_a_ring). It says: “since the inverse image of a prime ideal by a ring homomorphism is always a prime ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Using the valuative criterion as the definition makes projective space proper

**Remember:** Divide by a coordinate that divides all the others.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** For quasi-separated maps of finite type, take the valuative criterion as the working definition of properness. A valuation ring R is a domain in which, of any two nonzero elements, one divides the other. The criterion asks that each map from its fraction field K extend uniquely to R over the base. The usual definition asks for a closed diagonal and closed images after every base change.

**Problem.** Projective n-space over any base scheme S is proper over S.

**How the definition helps.** With the valuative definition, properness becomes a short computation with coordinates. A K-point is a tuple of coordinates up to scaling. Divide by a coordinate that divides all the others in R, so every entry lies in R and one equals 1 (our own). Any two such tuples differ by a unit of R, so the extension is unique (our own). The usual definition would need elimination theory to show closed images (our own). The real work moves into the valuative criterion, which makes the two definitions agree (our own).

**Paper or page:** [Constructions, Lemma 27.13.4](https://stacks.math.columbia.edu/tag/01NH). It says: “satisfies the existence and uniqueness parts of the valuative criterion”

**Sources:** none listed. No primary source with a working link was found.

### Algebraic spaces allow quotients by free finite group actions

**Remember:** Glue with étale maps, and free quotients always exist.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14L30. arXiv math.AG. Level 3: graduate.

**Definition.** An algebraic space is a quotient of a scheme by an étale equivalence relation. An étale map is one that is a local isomorphism in the algebraic sense, like a covering map. Some authors also require the space to be quasi-separated, a mild finiteness condition.

**Problem.** The quotient of an algebraic space by a free action of a finite group is an algebraic space. The quotient of a scheme by such an action need not be a scheme.

**How the definition helps.** Algebraic spaces are defined as quotients by étale relations, so the quotient by a free group action is in the class by construction. Hironaka's example is a smooth proper threefold with a free action of a group of order 2 whose quotient is not a scheme. For this threefold, the page says that the Hilbert functor of subschemes is not represented by a scheme. The work moves into Artin's representability theorems, which say when a functor is an algebraic space (our own remark).

**Wikipedia:** [Algebraic space](https://en.wikipedia.org/wiki/Algebraic_space), [Hironaka's example](https://en.wikipedia.org/wiki/Hironaka%27s_example). It says: “the quotient of an algebraic space by a discrete group acting freely is an algebraic space, but the quotient of a scheme by a discrete group acting freely need not be a scheme (even if the group is finite).”

**Sources:**

- [Donald Knutson, Algebraic Spaces, Lecture Notes in Mathematics 203 (1971)](https://doi.org/10.1007/BFb0059750)

### Moduli stacks give fine moduli spaces for objects with automorphisms

**Remember:** A stack remembers the automorphisms that a space would have to forget.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14D22. arXiv math.AG. Level 3: graduate.

**Definition.** A stack is a sheaf of groupoids on schemes: it assigns to each scheme a groupoid, and these glue along covers. A moduli stack assigns to a scheme S the groupoid of families over S and their isomorphisms. It is a Deligne–Mumford stack if it has an étale atlas by a scheme and finite automorphism groups.

**Problem.** A type of objects with nontrivial automorphisms, such as elliptic curves, has no fine moduli scheme. Its moduli stack is still fine: families over S are the same as maps from S to the stack.

**How the definition helps.** A stack keeps the isomorphisms of the objects as data, so the moduli problem has a fine solution by definition. A scheme cannot do this: with a nontrivial automorphism, one can glue a family that is locally trivial but globally nontrivial. In a subcanonical topology, a representing scheme would classify it by the same map as the trivial family. The hard work is to show that the stack is algebraic, that is, that it has an atlas, which Deligne and Mumford did for curves.

**nLab:** [moduli space](https://ncatlab.org/nlab/show/moduli+space), [Deligne-Mumford stack](https://ncatlab.org/nlab/show/Deligne-Mumford+stack), [algebraic stack](https://ncatlab.org/nlab/show/algebraic+stack). It says: “A type of objects that has nontrivial automorphisms cannot have a fine moduli space.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publications Mathématiques de l'IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)

### Quotient stacks remember equivariant cohomology

**Remember:** The quotient stack keeps the stabilisers that the orbit space throws away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14L30, 14F43. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A stack is like a sheaf, but it assigns groupoids instead of sets. Let a group G act on X. The quotient stack \[X/G\] has as objects over U the principal G-bundles P → U with a G-equivariant map P → X. It is the stack that corresponds to the action groupoid (objects are points of X, arrows are elements of G that move one point to another).

**Problem.** Let a Lie group G act on a manifold X, not necessarily freely. The cohomology of the quotient stack \[X/G\] is the equivariant cohomology of X.

**How the definition helps.** A stack keeps the isomorphisms that record how the quotient was formed, so it keeps the right cohomology. For a non-free action, the quotient may not exist as a manifold. In sheaves of sets the quotient exists, but it has the wrong cohomology. The comparison with equivariant cohomology is a theorem about the stack, not part of the definition.

**nLab:** [derived stack](https://ncatlab.org/nlab/show/derived+stack), [quotient stack](https://ncatlab.org/nlab/show/quotient+stack). It says: “The cohomology of the stack is then indeed the equivariant cohomology of the original manifold.”

**Sources:**

- [Jochen Heinloth, Notes on differentiable stacks, Mathematisches Institut, Seminars, Universität Göttingen (2004–05) 1–32](https://math.nyu.edu/~tschinke/WS04/pdf/heinloth.pdf)

### Nilpotents let tangent vectors be maps from the dual numbers

**Remember:** A tangent vector is a point that remembers one first-order direction.

*True by definition.* MSC 14B10 (Infinitesimal methods in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The Zariski tangent space at a point with maximal ideal 𝔪 is the dual of the vector space 𝔪/𝔪². The dual numbers K\[t\]/(t²) form a ring with a nonzero element t whose square is 0. Their spectrum is one point with one tangent direction.

**Problem.** For a scheme X over a field K, maps Spec K\[t\]/(t²) → X correspond to a rational point x with an element of the dual of 𝔪/𝔪² at x. So every morphism of schemes gives maps of tangent spaces, with no embedding needed.

**How the definition helps.** Because schemes may have nilpotent functions, the dual numbers are a scheme, and a map from it is a point together with a first-order direction. Functoriality is then free, because composing with a morphism sends tangent vectors to tangent vectors. Among varieties without nilpotents this object does not exist, so one must use 𝔪/𝔪² or local equations. The work moves into matching such maps with the dual of 𝔪/𝔪² (our own phrasing of the cited exercise).

**Wikipedia:** [Zariski tangent space](https://en.wikipedia.org/wiki/Zariski_tangent_space). It says: “morphisms from Spec K\[t\]/(t²) to a scheme X over K correspond to a choice of a rational point x ∈ X(k) and an element of the tangent space at x.”

**Sources:** none listed. No primary source with a working link was found.

### Schlessinger's criterion uses hulls instead of representability

**Remember:** A hull maps onto all deformations and matches them exactly to first order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14D15. arXiv math.AG. Level 3: graduate.

**Definition.** A deformation functor F goes from local Artin algebras with residue field k to sets, with F(k) a single point and good behaviour on fibre products (conditions H1 and H2). Its tangent space is F(k\[ε\]/(ε²)). A hull for F is a complete local ring R with a formally smooth map from its represented functor to F that is a bijection on tangent spaces.

**Problem.** A deformation functor F has a hull exactly when H1, H2 and H3 hold, where H3 says that the tangent space is finite-dimensional (Schlessinger). F is prorepresentable exactly when H4 holds as well.

**How the definition helps.** Schlessinger asks for less than representability, and then a simple test decides the question. Moduli functors are almost never representable, but many have hulls. The node xy = 0 has a hull for its deformations, but its deformation functor is not prorepresentable. Objects with automorphisms are the usual cause of this failure.

**nLab:** [deformation functor](https://ncatlab.org/nlab/show/deformation+functor). It says: “The main theorem of Schlessinger's paper says that (H1), (H2), and (H3) are satisfied if and only if F has a hull.”

**Sources:**

- [Michael Schlessinger, Functors of Artin rings, Transactions of the American Mathematical Society 130 (1968) 208–222](https://doi.org/10.1090/S0002-9947-1968-0217093-3)

### Defining supported cohomology as a mapping fiber makes the localization sequence automatic

**Remember:** A mapping fiber always comes with its long exact sequence.

*True by definition. Confidence: medium.* MSC 14B15 (Local cohomology and algebraic geometry), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** Let Z be a closed subset of a space X, with open complement U. Define cohomology with support in Z through the mapping fiber of restriction from the cohomology complex of X to that of U. The mapping fiber is a complex that measures what the restriction loses. The usual definition derives the functor of sections supported in Z, meaning sections that vanish on U.

**Problem.** Cohomology with support in Z fits in a long exact sequence with the cohomology of X and of U. In derived terms, the three form a distinguished triangle.

**How the definition helps.** With the fiber definition, the sequence is the one that every mapping fiber has, so nothing needs proof (our own). The real work moves into showing that the fiber agrees with the derived functor of supported sections (our own). On an injective sheaf, restriction to U is onto, so the plain kernel already computes the fiber (our own).

**Paper or page:** [Cohomology, Lemma 20.34.5](https://stacks.math.columbia.edu/tag/0G71). It says: “There is a distinguished triangle”

**Sources:** none listed. No primary source with a working link was found.

### Defining smoothness by lifting makes base change stability automatic

**Remember:** Smooth means infinitesimal paths can always be extended.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14B10. arXiv math.AG. Level 3: graduate.

**Definition.** Let T be affine over S, and let T₀ be cut out of T by a nilpotent ideal. A scheme X over S is formally smooth if every map from T₀ to X extends to T. A morphism is smooth if it is formally smooth and locally of finite presentation. Equivalently, it is flat and locally of finite presentation, with regular geometric fibres.

**Problem.** Smooth morphisms are stable under base change and composition.

**How the definition helps.** A lifting property for maps into X transfers at once to the fibre product of X and S′ over S, so base change and composition need no proof. The work moves into the theorem that this lifting definition agrees with the geometric ones, such as flatness with regular geometric fibres. Regular fibres alone are not enough, because over an imperfect field a regular variety can become singular after a field extension (our own example). The structure theorem, that a smooth map is étale-locally an open piece of affine space, remains real work.

**Wikipedia:** [Smooth morphism](https://en.wikipedia.org/wiki/Smooth_morphism), [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “One can define smoothness without reference to geometry.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, quatrième partie, Publications Mathématiques de l'IHÉS 32 (1967)](https://doi.org/10.1007/BF02732123)

### Flatness keeps fibre dimension and Hilbert polynomial constant in families

**Remember:** Flat families do not jump.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14D05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A morphism of schemes is flat if each local ring of the source is a flat module over the local ring of the target. Flatness of a module means that tensor product with it keeps injective maps injective.

**Problem.** For a flat morphism of locally Noetherian schemes, the dimension at a point is the dimension of the base plus the dimension of the fibre. For a flat projective family over a connected base, all fibres have the same Hilbert polynomial, so the same degree and arithmetic genus.

**How the definition helps.** Flatness turns the vague idea of a family that varies continuously into a precise algebraic condition. It excludes jumps such as the blowup of a point in the plane, where one fibre is a line and the others are points. Conversely, over a reduced connected base, a projective family with constant Hilbert polynomial is flat (our own addition, from standard texts).

**Wikipedia:** [Flat morphism](https://en.wikipedia.org/wiki/Flat_morphism). It says: “Another non-example of a flat morphism is a blowup since a flat morphism necessarily has equi-dimensional fibers.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Open immersions are exactly the universally injective étale morphisms

**Remember:** Étale and injective after every base change means an open subscheme.

*Rules out counterexamples.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism is étale if it is flat, locally of finite presentation, and its fibres are disjoint unions of spectra of finite separable field extensions. It is universally injective if it stays injective on points after every base change. A monomorphism is a morphism that is injective on T-valued points for every scheme T.

**Problem.** A morphism of schemes is an open immersion exactly when it is étale and universally injective. It is also one exactly when it is a flat monomorphism, locally of finite presentation.

**How the definition helps.** Asking for injectivity after every base change rules out the bad case at once. The bad case (our own example) is Spec(L) → Spec(K) for a finite separable field extension of degree at least 2. It is étale and a bijection of one-point spaces, but it is not an isomorphism. After base change to L, the one point of Spec(L) has at least two points over it, so the map is not universally injective. The hard part is to show that a flat monomorphism of finite presentation is an open immersion (our own).

**Paper or page:** [Stacks Project, Etale, Theorem 41.14.1](https://stacks.math.columbia.edu/tag/025G). It says: “Let f : X → Y be a morphism of schemes. The following are equivalent: (1) f is an open immersion, (2) f is universally injective and étale, and (3) f is a flat monomorphism, locally of finite presentation.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 025G (Etale, Theorem 41.14.1)](https://stacks.math.columbia.edu/tag/025G)

### The étale topology gives algebraic geometry an inverse function theorem

**Remember:** Étale maps are local isomorphisms once étale maps count as neighbourhoods.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14F20. arXiv math.AG. Level 3: graduate.

**Definition.** An étale morphism is flat, locally of finite presentation and unramified. Unramified means that each fibre is a set of separate simple points. For smooth varieties, it is a map whose differential is an isomorphism at every point. The étale topology uses étale maps in place of open inclusions as its open covers.

**Problem.** In the étale topology, a map with invertible differential is a local isomorphism. A finite étale map becomes, near each point, a disjoint union of copies of the base.

**How the definition helps.** Étale neighbourhoods are small enough to contain square roots and other algebraic inverses, so maps with invertible differential get local inverses. Zariski open sets are too large for this. The projection of the parabola y = x² to the y-axis is étale away from the origin when 2 is invertible, but it has no Zariski-local inverse. The étale topology then supports étale cohomology and the étale fundamental group, which is where the hard work lies.

**Wikipedia:** [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “However, there is no (Zariski-)local inverse of f, just because the square root is not an algebraic map, not being given by polynomials. However, there is a remedy for this situation, using the étale topology.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Mathematics 224 (1971)](https://doi.org/10.1007/BFb0058656)

### Unique lifts cancel formally unramified maps from formally étale composites

**Remember:** Unique lifts for the composite plus uniqueness below give unique lifts above.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 13B40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An infinitesimal thickening T ⊂ T′ here means an ideal with square zero cuts out T inside T′. A lift extends T → X to T′ → X over a given map T′ → Y. A formally étale map X → Y gives exactly one lift whenever the maps agree on T. A formally unramified map gives at most one.

**Problem.** Let X → Y → Z be maps of schemes. If Y → Z is formally unramified and X → Z is formally étale, then X → Y is formally étale.

**How the definition helps.** The lifting definitions let us solve the problem over Z before checking it over Y. Lift T → X using the given map T′ → Z. The resulting map T′ → Y and the given one agree on T and over Z, so formal unramifiedness forces them to agree. Any second lift over Y would already be a second lift over Z (our own account of the proof).

**nLab:** [formally étale morphism](https://ncatlab.org/nlab/show/formally+%C3%A9tale+morphism). It says: “If there exists at most one such extension, it is called a formally unramified morphism. The formally étale morphisms are precisely those that are both formally smooth and formally unramified.”

**Paper or page:** [Spaces More Morphisms, Lemma 76.13.8](https://stacks.math.columbia.edu/tag/04G5). It says: “If b ∘ a is formally étale then a is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 76.13.8, Tag 04G5](https://stacks.math.columbia.edu/tag/04G5)
- [The Stacks Project, Lemma 37.8.9, Tag 02HM](https://stacks.math.columbia.edu/tag/02HM)

### Unique lifts split formal étaleness into formal smoothness and formal unramifiedness

**Remember:** Exactly one lift is at least one lift and at most one lift.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 13B40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A lift extends a map across an enlargement of its source by an ideal whose square is zero. It must agree with the given map to the target. For affine sources, the schemes that come from single rings, formal smoothness requires at least one lift and formal unramifiedness at most one. Formal étaleness requires exactly one.

**Problem.** A map of schemes is formally étale exactly when it is formally smooth and formally unramified.

**How the definition helps.** The lifting definitions reduce the theorem to splitting “exactly one” into existence and uniqueness. The classical smooth and étale tests instead use local equations and their matrices of derivatives. The work is in the comparison theorems, which recover smoothness and étaleness from the lifting tests together with local finite presentation.

**nLab:** [formally étale morphism](https://ncatlab.org/nlab/show/formally+%C3%A9tale+morphism). It says: “If there exists at least one such infinitesimal extension, it is called a formally smooth morphism. If there exists at most one such extension, it is called a formally unramified morphism.”

**Paper or page:** [More Morphisms, Lemma 37.11.4](https://stacks.math.columbia.edu/tag/02HH). It says: “Then f is formally étale if and only if f is formally smooth and formally unramified.”

**Sources:**

- [The Stacks Project, Lemma 37.11.4, Tag 02HH](https://stacks.math.columbia.edu/tag/02HH)
- [The Stacks Project, Lemma 37.8.9, Tag 02HM](https://stacks.math.columbia.edu/tag/02HM)
- [The Stacks Project, Lemma 37.11.7, Tag 02H6](https://stacks.math.columbia.edu/tag/02H6)
- [The Stacks Project, Lemma 37.6.8, Tag 02HE](https://stacks.math.columbia.edu/tag/02HE)

### Unramified with finite type only makes every closed immersion unramified

**Remember:** Drop finite presentation, and every closed immersion becomes unramified.

*Rules out counterexamples.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14A15, 13N05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The Stacks Project follows Raynaud. It calls a morphism of schemes unramified if it is locally of finite type and has zero relative differentials. EGA also asks for local finite presentation, and the Stacks Project calls that stronger notion G-unramified. Finite presentation means a quotient of a polynomial ring in finitely many variables by a finitely generated ideal.

**Problem.** With this definition, every closed immersion is unramified. Under the EGA definition, a closed immersion is unramified only when its ideal sheaf is of finite type.

**How the definition helps.** Every closed immersion is of finite type, and a quotient ring has no relative differentials, so the proof takes two lines (our own). An example of the bad case for EGA (our own) is Spec(A/I) → Spec(A) with A = k\[x₁, x₂, …\] and I = (x₁, x₂, …). The cost is that results proved by Noetherian approximation must add finite presentation as a hypothesis (our own). Over a locally Noetherian base the two notions agree (our own).

**Wikipedia:** [Unramified morphism](https://en.wikipedia.org/wiki/Unramified_morphism). It says: “an unramified morphism is a morphism f: X → Y of schemes such that (a) it is locally of finite presentation and (b)”

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.35.8](https://stacks.math.columbia.edu/tag/02GC). It says: “A closed immersion i : Z → X is unramified. It is G-unramified if and only if the associated quasi-coherent sheaf of ideals … is of finite type (as an 𝒪ₓ-module).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 02GC (Morphisms, Lemma 29.35.8)](https://stacks.math.columbia.edu/tag/02GC)
- [M. Raynaud, Anneaux locaux henséliens, Lecture Notes in Mathematics 169, Springer (1970)](https://doi.org/10.1007/bfb0069571)

### Hilbert schemes exist because subschemes may carry nilpotents

**Remember:** Let two points collide and keep the direction they came from.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C05 (Parametrization (Chow and Hilbert schemes)), 14D20. arXiv math.AG. Level 3: graduate.

**Definition.** The Hilbert scheme of projective space parametrizes closed subschemes with a fixed Hilbert polynomial, a polynomial that records their dimension, degree and genus. Its points over a base T are the closed subschemes of projective space over T that are flat over T. Flat means that the subschemes vary without jumps. Subschemes may be non-reduced, which means their rings of functions may contain nilpotents.

**Problem.** Grothendieck showed that this functor is represented by a projective scheme. So every flat family of subschemes is pulled back from one universal family.

**How the definition helps.** Allowing non-reduced subschemes gives every flat family a limit, so the parameter space can be projective. When two points of the plane move together, the flat limit is a non-reduced double point with a tangent direction (our own example). If only reduced subvarieties were allowed, such limits would be missing and the space would not be compact. The price is that Hilbert schemes can be very singular, even non-reduced at every point of some components.

**Wikipedia:** [Hilbert scheme](https://en.wikipedia.org/wiki/Hilbert_scheme). It says: “H is universal with respect to all flat families of subschemes of X having Hilbert polynomial P.”

**Sources:**

- [Alexander Grothendieck, Techniques de construction et théorèmes d'existence en géométrie algébrique IV, les schémas de Hilbert, Séminaire Bourbaki 6 (1960–1961), exposé 221](http://www.numdam.org/item/SB_1960-1961__6__249_0/)

### Pure motives are the universal target of Weil cohomologies

**Remember:** Motives are varieties cut into pieces by idempotent cycles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives). arXiv math.AG. Level 3: graduate.

**Definition.** A Chow motive is a pair (X, p) of a smooth projective variety X and an idempotent correspondence p: an algebraic cycle (a formal sum of subvarieties) on X × X, taken up to rational equivalence, with p ∘ p = p. Morphisms are correspondences, composed by pullback, intersection and pushforward. Inverting the Lefschetz motive (the piece of the projective line in degree 2) gives the full category of pure Chow motives. Other adequate equivalence relations (relations on cycles that work with pullback, pushforward and intersection) give other categories of pure motives.

**Problem.** Every Weil cohomology of smooth projective varieties, such as ℓ-adic, de Rham or Betti cohomology, factors uniquely through the category of Chow motives.

**How the definition helps.** Correspondences act on every Weil cohomology through its cycle class map, so a category built from correspondences is a common source for all of them. The nLab states the factorisation for Chow motives. For coarser relations, such as numerical equivalence, the factorisation is not automatic. The hoped-for properties, such as an abelian Tannakian category with the right Hom groups, depend on the standard conjectures and are still open.

**nLab:** [pure motive](https://ncatlab.org/nlab/show/pure+motive), [motive](https://ncatlab.org/nlab/show/motive), [Chow motive](https://ncatlab.org/nlab/show/Chow+motive). It says: “such that every good cohomology theory factors through the functor M.”

**Sources:**

- [Tony Scholl, Classical motives, in: Motives, Seattle 1991, Proc. Symp. Pure Math. 55 part 1 (1994) 163–187](https://www.dpmms.cam.ac.uk/~ajs1005/preprints/classical_motives.pdf)
- [James S. Milne, Motives — Grothendieck's Dream (2012)](https://www.jmilne.org/math/xnotes/MOT.pdf)

### Rational equivalence makes Chow groups match K-theory rationally

**Remember:** Cycles modulo rational functions are vector bundles after tensoring with ℚ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14C35, 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** An algebraic cycle is a finite integer combination of subvarieties. Two cycles are rationally equivalent if their difference is a sum of divisors of rational functions on subvarieties one dimension higher. The Chow group is cycles modulo rational equivalence.

**Problem.** For a smooth scheme X over a field, the Chern character is an isomorphism from K₀(X) ⊗ ℚ, built from vector bundles, to the Chow ring of X tensored with ℚ.

**How the definition helps.** Rational equivalence is the relation that the Chern character respects, so the comparison with K-theory can be an isomorphism (our own reading). Rational equivalence identifies the fibres over 0 and ∞ of a family over the projective line, and classes in K-theory obey the same rule (our own remark). Coarser relations, such as homological or numerical equivalence, lose information that K-theory keeps (our own remark). The hard part is the Grothendieck–Riemann–Roch theorem itself.

**Wikipedia:** [Chow group](https://en.wikipedia.org/wiki/Chow_group). It says: “This isomorphism shows the importance of rational equivalence, compared to any other adequate equivalence relation on algebraic cycles.”

**Sources:**

- [Armand Borel, Jean-Pierre Serre, Le théorème de Riemann-Roch, Bulletin de la Société Mathématique de France (1958) 97–136](https://doi.org/10.24033/bsmf.1500)

### Six rules fix the intersection multiplicity of plane curves uniquely

**Remember:** List the rules, and only one number obeys them all.

*True by definition.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14H50. arXiv math.AG. Level 3: graduate.

**Definition.** The intersection multiplicity of plane curves P and Q at a point p is a number Iₚ(P, Q). It is symmetric, and it is infinite exactly when P and Q share a factor that vanishes at p. It is 0 exactly when p is not on both curves, and the axes x and y meet with multiplicity 1 at the origin. It adds over products, Iₚ(P, Q₁Q₂) = Iₚ(P, Q₁) + Iₚ(P, Q₂), and it does not change when P is replaced by P + QR.

**Problem.** There is exactly one function with these properties. It equals the dimension of the local ring of the plane at p divided by the ideal (P, Q).

**How the definition helps.** Defining the multiplicity by its rules makes the agreement of all the usual recipes a consequence of uniqueness. The page names several recipes, such as the quotient-ring dimension and the count after a small perturbation, and they all satisfy the rules. The last rule also allows a Euclid-style reduction, so the rules give an algorithm (our own remark, after Fulton's book). The hard part that stays is the existence proof, that the local ring quotient satisfies every rule.

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “Although these properties completely characterize intersection multiplicity, in practice it is realised in several different ways.”

**Sources:**

- [William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (Benjamin, 1969; Addison-Wesley reprint 1989, ISBN 0-201-51010-3), chapter 3](http://www.math.lsa.umich.edu/~wfulton/CurveBook.pdf) (link not checked)

### Ampleness through powers can be tested by intersection numbers

**Remember:** Ample is a numerical property; very ample is not.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14C17. arXiv math.AG. Level 3: graduate.

**Definition.** A line bundle is very ample if its sections embed the variety in projective space. It is ample if some positive tensor power is very ample. Two curves are numerically equivalent if every line bundle has the same degree on both. The cone of curves is spanned by the curve classes in the finite-dimensional real space of these equivalence classes.

**Problem.** On a projective scheme, a line bundle is ample exactly when it is positive on every nonzero class in the closed cone of curves (Kleiman). So ampleness depends only on the degrees of the bundle on curves.

**How the definition helps.** Ampleness asks only for some power, so it can depend on degrees on curves alone, and Kleiman proved that it does (our own reading). Very ampleness has no such description (our own remark). The closure of the cone is needed: Nagata and Mumford found bundles that are positive on every curve but are not ample. The criterion can fail for proper schemes that are not projective.

**Wikipedia:** [Ample line bundle](https://en.wikipedia.org/wiki/Ample_line_bundle). It says: “An ample line bundle on a projective variety X has positive degree on every curve in X. The converse is not quite true, but there are corrected versions of the converse, the Nakai–Moishezon and Kleiman criteria for ampleness.”

**Sources:**

- [Steven L. Kleiman, Toward a numerical theory of ampleness, Annals of Mathematics 84 (1966) 293–344](https://doi.org/10.2307/1970447)

### Asking relative divisors to be flat lets them restrict to fibres

**Remember:** Flat over the base, so every fibre gets a divisor.

*Rules out counterexamples. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** An effective Cartier divisor on X is a closed subscheme cut out locally by one equation that is not a zero divisor. A relative effective Cartier divisor for a map from X to S is an effective Cartier divisor on X that is also flat over S. Flat is an algebraic condition which says that the fibres vary without jumps.

**Problem.** Let D be a relative effective Cartier divisor for X → S. After any base change S′ → S, the pullback of D is again an effective Cartier divisor, so D restricts to a divisor on each fibre.

**How the definition helps.** Flatness keeps the local equation a non-zero-divisor after any base change, so the restriction is again a Cartier divisor. Without flatness this fails (our own example). For the plane mapped to the line by (x, y) ↦ x, the divisor x = 0 is the whole fibre over 0, so on that fibre its equation is zero. What stays hard is to show that families defined in this way have a representing scheme (our own remark).

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “A relative effective Cartier divisor for X over S is an effective Cartier divisor D on X which is flat over S.”

**Sources:** none listed. No primary source with a working link was found.

### Defining twists as tensor powers of 𝒪(1) makes their degrees add

**Remember:** Tensoring powers of one line bundle adds their exponents.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** On projective space, define 𝒪(n) as the nth tensor power of the line bundle 𝒪(1), using its dual for negative n. The graded description instead builds 𝒪(n) from the polynomial ring with its degrees shifted by n.

**Problem.** On projective space, 𝒪(a) ⊗ 𝒪(b) ≅ 𝒪(a + b) for all integers a and b.

**How the definition helps.** With the tensor power definition, the formula is the rule for adding exponents, after cancelling copies of 𝒪(1) against its dual (our own). This needs 𝒪(1) to be a line bundle, so that its dual is a tensor inverse. The real work moves into a comparison theorem. The Stacks Project shows that the nth tensor power of 𝒪(1) agrees with the graded shift when degree one elements cover the space.

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “We can also find that the tensor product of the line bundles 𝒪ₓ(a) ⊗ 𝒪ₓ(b) ≅ 𝒪ₓ(a+b)”

**Paper or page:** [Constructions, Lemma 27.10.3](https://stacks.math.columbia.edu/tag/01MT). It says: “In particular, these maps induce isomorphisms 𝒪ₓ(1)⊗ⁿ ≅ 𝒪ₓ(n)”

**Sources:** none listed. No primary source with a working link was found.

### Defining zero schemes by test maps makes them commute with pullback

**Remember:** A test map sees the same zero condition before or after base change.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** Let s be a section of a line bundle ℒ on X. Define its zero scheme Z(s) by test maps: a map f into X factors through Z(s) exactly when f\*s is zero. The usual definition cuts out Z(s) by the ideal of local equations of s.

**Problem.** Take any map f from Y to X. The zero scheme of f\*s is the fiber product of Y with Z(s) over X.

**How the definition helps.** With the test-map definition, both schemes have the same test maps, so they are equal (our own). A map from T to Y kills the pullback of f\*s exactly when the composite to X kills the pullback of s. The real work moves into showing that the local equations define a closed subscheme with this property (Stacks Project, Divisors, Lemma 31.14.9). This must hold even for test schemes with nilpotents, nonzero elements with a power equal to zero.

**Paper or page:** [Divisors, Lemma 31.14.9](https://stacks.math.columbia.edu/tag/02OR). It says: “we have f∗s = 0 in Γ(Y, f∗ℒ) if and only if f factors through Z(s).”

**Sources:** none listed. No primary source with a working link was found.

### Determinants give hypersurface adjunction

**Remember:** Take the determinant, then move the conormal factor across.

*True by definition.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 32L05. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** The canonical line bundle consists of holomorphic differential forms of top degree. The conormal bundle of a smooth hypersurface records functions vanishing on it, modulo products of two vanishing functions.

**Problem.** Let D be a smooth hypersurface in a complex manifold X. Its canonical bundle is the restriction to D of the ambient canonical bundle tensored with the line bundle of D.

**How the definition helps.** Taking top exterior powers turns the exact sequence of differentials into a product of line bundles. In our own calculation, restriction maps ambient differentials onto differentials along D, with kernel the conormal line. The local equation of D identifies the conormal line with the dual of the line bundle of D restricted to D. Moving that factor across gives the formula.

**Wikipedia:** [Adjunction formula](https://en.wikipedia.org/wiki/Adjunction_formula). It says: “The conormal bundle I/I² is i\*O(−D), which, combined with the formula above, gives”

**Paper or page:** [Lipschitz geometry of complex surface germs via inner rates of primary ideals](https://arxiv.org/abs/2407.14265v2). It says: “Let S be a complex surface and C ⊂ S be a compact Riemann surface embedded in S.”

**Sources:** none listed. No primary source with a working link was found.

### Factorial schemes make Weil divisors and Cartier divisors the same

**Remember:** Two kinds of divisor, one meaning wherever local rings factor uniquely.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14M05, 14C22. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A Weil divisor is a formal sum with integer coefficients of irreducible closed subsets of codimension one. A Cartier divisor is given locally by one rational function, up to units. A Noetherian scheme is factorial if all its local rings are unique factorization domains; every regular scheme is factorial.

**Problem.** On a factorial scheme every Weil divisor is locally principal. If the scheme is also integral and separated, the divisor class group equals the Picard group of line bundles. On a singular scheme the two groups can differ.

**How the definition helps.** Having two definitions lets one state exactly when the classical identification of divisors and line bundles holds. In a unique factorization domain, every height-one prime is principal, so each codimension-one subvariety is cut out locally by one equation. On the quadric cone xy = z², the line x = z = 0 is not principal near the origin. Only twice that line is Cartier, and the class group of the cone is ℤ/2. The hard part that stays is to prove that regular local rings are unique factorization domains (the Auslander–Buchsbaum theorem, our own remark).

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “On singular varieties, this property can also fail, and so one has to distinguish between codimension-1 subvarieties and varieties which can locally be defined by one equation.”

**Sources:** none listed. No primary source with a working link was found.

### Removing codimension-two sets keeps divisor classes, so canonical divisors exist

**Remember:** Divisors only see codimension one, so small bad sets do not matter.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14M05. arXiv math.AG. Level 3: graduate.

**Definition.** The Weil divisor class group Cl(X) is the group of Weil divisors modulo principal divisors. A normal variety is one whose local rings are integrally closed domains. The canonical divisor of a smooth variety is the divisor of a nonzero rational differential form of top degree.

**Problem.** If Z has codimension at least 2 in X, restriction gives an isomorphism Cl(X) → Cl(X − Z). So a normal variety over a perfect field has a canonical divisor class, the canonical divisor of its smooth part extended uniquely.

**How the definition helps.** Weil divisors are built only from codimension-one subvarieties, so throwing away a closed set of codimension two does not change them. On a normal variety the singular set has codimension at least two, because normal varieties are regular in codimension one (Zariski, our own remark). The resulting class need not be Cartier, and much of the minimal model programme is about when some multiple of it is Cartier.

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “If Z has codimension at least 2 in X, then the restriction Cl(X) → Cl(X − Z) is an isomorphism.”

**Sources:**

- [Oscar Zariski, Some results in the arithmetic theory of algebraic varieties, American Journal of Mathematics 61 (1939) 249–294](https://doi.org/10.2307/2371499)

### Treating Cartier divisors as line bundles with sections makes sums tensor products

**Remember:** Multiplying local equations is tensoring their sections.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves). arXiv math.AG. Level 3: graduate.

**Definition.** Describe an effective Cartier divisor by a pair (ℒ, s), up to isomorphism. Here ℒ is a line bundle and s is a section whose local equations are not zero divisors. Add two pairs by tensoring the bundles and the sections. The Stacks Project instead uses the ideal sheaf, adds divisors by multiplying ideals, and takes 𝒪(D) to be the inverse of the ideal.

**Problem.** For effective Cartier divisors D₁ and D₂ there is a unique isomorphism 𝒪(D₁) ⊗ 𝒪(D₂) ≅ 𝒪(D₁ + D₂). It sends the tensor product of the canonical sections to the canonical section of the sum.

**How the definition helps.** With the pair definition, the sum is the tensor product, so the isomorphism holds by definition (our own). The real work moves into a correspondence between pairs and divisors (our own). It sends a pair to the zero scheme of its section. The Stacks Project shows this is a divisor exactly when the section is regular (Divisors, Lemma 31.14.9). One must also recover the pair from the divisor, up to isomorphism (our own).

**Paper or page:** [Divisors, Lemma 31.14.4](https://stacks.math.columbia.edu/tag/02OP). It says: “Let D = D₁ + D₂. Then there is a unique isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Properness algebraizes holomorphic line bundles

**Remember:** Without properness, holomorphic line bundles can outnumber algebraic ones.

*Rules out counterexamples.* MSC 14C22 (Picard groups), 32L05. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** Analytification takes a complex algebraic variety and allows holomorphic functions in place of regular algebraic functions. A complex variety is proper precisely when its associated analytic space is compact.

**Problem.** Every holomorphic line bundle on the analytic space of a proper complex variety comes from an algebraic line bundle. This fails on the product of two punctured complex lines.

**How the definition helps.** Properness excludes examples where the analytic space admits extra line bundles. The comparison theorem for coherent sheaves gives algebraization, first for projective varieties and then more generally for proper varieties. Our own example is the product of two punctured complex lines. Its Laurent polynomial ring has unique factorization, so every algebraic line bundle is trivial. Analytically, Cartan’s vanishing theorem and the exponential sequence classify line bundles by second integral cohomology. The space retracts onto a two-dimensional torus, whose second integral cohomology is ℤ.

**nLab:** [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “Typically GAGA-type theorems hold for proper (compact) varieties, but not for non-proper varieties.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 2 and 3](https://doi.org/10.5802/aif.59)

### The relative Picard functor divides out line bundles from the base

**Remember:** Divide out line bundles from the base, because they vanish locally there.

*Rules out counterexamples.* MSC 14C22 (Picard groups), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** Let f : X → S be a morphism of schemes. The relative Picard functor sends an S-scheme T to Pic(X × T)/f\*Pic(T). This is the group of line bundles on X × T modulo those pulled back from T. The functor is then sheafified (made into a sheaf, so that local data glue) in the étale or fppf topology.

**Problem.** The naive functor T ↦ Pic(X × T) is not even a sheaf, so it cannot be represented. Grothendieck proved that the relative Picard functor is represented by a scheme, under conditions such as f projective and flat with geometrically integral fibres.

**How the definition helps.** Dividing by line bundles from T removes the classes that stop the functor from being a sheaf. A nontrivial line bundle on T, pulled back to X × T, becomes trivial on some cover of T. So the restriction map to the cover is not injective. Dividing by f\*Pic(T) and sheafifying removes these classes, and Grothendieck's existence theorem is the hard part.

**nLab:** [Picard scheme](https://ncatlab.org/nlab/show/Picard+scheme). It says: “has no hope of being representable as it is not even a sheaf.”

**Sources:**

- [Steven L. Kleiman, The Picard scheme, in: Fundamental Algebraic Geometry: Grothendieck's FGA Explained, AMS (2005); arXiv:math/0504020](https://arxiv.org/abs/math/0504020)

### Viewing line bundles as unit torsors makes H¹ of units classify them

**Remember:** First cohomology of the units records how local frames glue.

*True by definition. Confidence: medium.* MSC 14C22 (Picard groups), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** Describe a line bundle by its sheaf of local frames, the local choices of one basis element. Any two frames over an open set differ by a unique unit, so this sheaf is a torsor for the sheaf of units 𝒪\*. A torsor is a sheaf with a free and transitive group action that has sections locally. The usual description is a locally free sheaf of rank one.

**Problem.** Isomorphism classes of line bundles on a scheme X match the elements of H¹(X, 𝒪\*), the first sheaf cohomology of the units. This group is the Picard group of X.

**How the definition helps.** With the torsor description, the theorem is a special case of a general fact. For any abelian sheaf ℋ, isomorphism classes of ℋ-torsors match H¹(X, ℋ) (Stacks Project, Cohomology, Lemma 20.4.3). The real work moves into that general fact and into checking that frames and line bundles determine each other (our own). From a torsor one recovers the line bundle by gluing copies of 𝒪 along the units (our own).

**Paper or page:** [Cohomology, Lemma 20.4.3](https://stacks.math.columbia.edu/tag/02FQ). It says: “There is a canonical bijection between the set of isomorphism classes of ℋ-torsors and H¹(X, ℋ).”

**Sources:** none listed. No primary source with a working link was found.

### Admissible faces make boundaries square-zero

**Remember:** Check all faces so that every face of a face is still allowed.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** Bloch's cycle complex in degree n uses cycles on X × Δⁿ, where Δⁿ is the algebraic simplex with coordinates of sum one. A face of Δⁿ sets some coordinates to zero. A subvariety of codimension r is allowed if it meets X × F in codimension at least r there, for every face F.

**Problem.** On a smooth variety X over a field, the boundary is the alternating sum of restrictions to the faces of codimension one. It maps allowed cycles to allowed cycles, and applying it twice gives zero.

**How the definition helps.** Checking every face lets each restricted cycle satisfy the same rule on smaller faces, so the boundary stays inside the complex. The face identities give each double restriction twice with opposite signs. Our own example: with X a point, the line t₁ + t₂ = 0 in Δ² meets every edge properly but contains the vertex where t₁ and t₂ vanish. So its restriction to the edge t₁ = 0 fails the rule.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “the subgroup generated by closed subvarieties that intersect properly with X × F for each face F of Δᑫ.”

**Sources:**

- [Spencer Bloch, Algebraic cycles and higher K-theory (1986)](https://doi.org/10.1016/0001-8708(86)90081-2)

### Higher Chow groups extend localization

**Remember:** Taking homology turns localization into a long sequence.

*Makes the theorem clean to state or prove.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** Let X be a quasi-projective variety over a field and fix an integer r. In degree n, take integer combinations of subvarieties of dimension r + n in X × Δⁿ. Each must meet every simplex face in at most the expected dimension. Alternating face restrictions give a complex whose homology groups are the higher Chow groups.

**Problem.** Let Z be closed in X and let U be its complement. The higher Chow groups of Z, X and U form a long exact sequence for each r. Degree zero recovers localization for ordinary Chow groups.

**How the definition helps.** The chain complex adds groups in positive degrees, so localization has connecting maps beyond ordinary Chow groups. Our own explanation starts with the subcomplex of cycles supported on Z. Dividing by this subcomplex gives a short exact sequence of complexes and hence a long exact sequence in homology. Bloch’s localization theorem proves that restricting this quotient to U induces an isomorphism on homology.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “it yields the long exact sequence for higher Chow groups (called the localization sequence).”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)
- [Spencer Bloch, Algebraic cycles and higher K-theory (1986)](https://doi.org/10.1016/0001-8708(86)90081-2)

### Motivic maps pull higher cycles back

**Remember:** Precompose with the map of motives to pull a class back.

*True by definition.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** For X smooth over a perfect field, write higher Chow groups as maps in the motivic category. A class of degree p and weight q is a map from the motive M(X) to ℤ(q) shifted by p. The rule X ↦ M(X) is a functor. Bloch's original description uses subvarieties meeting all simplex faces in the expected dimension.

**Problem.** Every morphism between smooth schemes over a perfect field induces a functorial pullback on higher Chow groups. The pullback preserves codimension and degree.

**How the definition helps.** Writing classes as maps makes pullback composition with the map of motives. Naive pullback of cycles fails (our own example). Pulling the origin of the affine line back along its own inclusion gives the whole point, so codimension drops from one to zero. The comparison theorem identifies the map groups with higher Chow groups, while the direct cycle construction must move representatives before intersecting.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “whenever Y is smooth, any map to Y is contravariant.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Opposite filtrations split Hodge–Tate fibers

**Remember:** Opposite weight and Hodge steps pick one lift of each grade.

*True by definition. Confidence: medium.* MSC 14C30 (Transcendental methods, Hodge theory (algebro-geometric aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** A mixed Hodge–Tate structure has an increasing weight filtration W and a decreasing Hodge filtration F, with only even weight quotients. On the quotient of weight 2p, the Hodge filtration is everything at step p and zero at step p + 1. The key subspace is the complex intersection W₂ₚ ∩ Fᵖ.

**Problem.** Projection maps W₂ₚ ∩ Fᵖ isomorphically onto the weight quotient of weight 2p. These subspaces split the weight filtration over ℂ, and maps of mixed Hodge–Tate structures preserve the splitting.

**How the definition helps.** Intersecting the two steps selects one lift of each quotient vector without choosing complements (our own). By the definition of the induced filtration, the intersection maps onto the quotient because its induced pth Hodge step is the whole quotient (our own). Its kernel vanishes because every lower weight has zero pth step (our own). Maps preserve both filtrations and hence each intersection (our own).

**Wikipedia:** [Mixed Hodge structure](https://en.wikipedia.org/wiki/Mixed_Hodge_structure). It says: “are pure Hodge structures of weight k.”

**Sources:** none listed. No primary source with a working link was found.

### Pure weights stop later differentials

**Remember:** Different pure weights cannot exchange differentials.

*True by definition.* MSC 14C30 (Transcendental methods, Hodge theory (algebro-geometric aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** A real mixed Hodge complex has two filtrations, nested sequences of subspaces called weight and Hodge steps. Its defining conditions require each weight quotient numbered m to have pure cohomology of weight m + n in degree n. Purity means the two indices of every Hodge component have that sum.

**Problem.** For a mixed Hodge complex, the weight spectral sequence degenerates at page two: every differential from page two onward vanishes.

**How the definition helps.** The purity condition gives the source and target of each later differential different weights (our own). On the first page, position (p, q) has weight q, and the first differential keeps q (our own). On page r the differential lands at second index q + 1 − r, and it is a map of Hodge structures (our own). A map between pure Hodge structures of different weights vanishes (our own).

**Paper or page:** [Variation of mixed Hodge structure and its applications](https://arxiv.org/abs/2304.00672). It says: “The spectral sequence associated to (K𝒪, W) degenerates at E₂-terms.”

**Sources:** none listed. No primary source with a working link was found.

### Integral lattices ensure finite monodromy in type (0, 0)

**Remember:** A compact isometry group meets a lattice group in finitely many points.

*Rules out counterexamples. Confidence: medium.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 32G20. arXiv math.AG. Level 3: graduate.

**Definition.** A variation of Hodge structure of type (0, 0) is a local system of rational vector spaces with one Hodge component. A polarization gives a positive definite symmetric form preserved by monodromy. An integral structure gives a full lattice in each fiber, also preserved by monodromy.

**Problem.** A polarized integral variation of type (0, 0) on a connected complex manifold has finite monodromy. With rational coefficients alone, the monodromy group can be infinite.

**How the definition helps.** The lattice gives only finitely many possible images for each basis vector of a given norm (our own). A linear map is determined by those images, so only finitely many loop actions occur (our own). On an elliptic curve let one generating loop act by rotation with cosine 3/5 and sine 4/5, and the other by the identity (our own). This preserves the rational Euclidean form (our own). A finite-order matrix has algebraic-integer trace, whereas this rotation has trace 6/5 (our own).

**Paper or page:** [On exact sequences of Hodge theoretic fundamental groups](https://arxiv.org/abs/2503.13307). It says: “Then 𝕍 is of finite monodromy.”

**Sources:** none listed. No primary source with a working link was found.

### Deligne–Mumford stacks are exactly the stacks with unramified diagonal

**Remember:** Discrete, reduced stabilizer groups give an étale cover by a scheme.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** An algebraic stack is Deligne–Mumford if some scheme maps onto it by an étale surjective map. The diagonal 𝒳 → 𝒳 × 𝒳 encodes the automorphism groups of objects. Unramified means locally of finite type with zero relative differentials.

**Problem.** An algebraic stack is Deligne–Mumford exactly when its diagonal is unramified. This holds exactly when every point has a discrete and reduced stabilizer group.

**How the definition helps.** The criterion turns the existence of an étale cover into a condition on stabilizer groups that one can check point by point. For stable curves of genus at least 2, automorphism group schemes are finite and reduced, so the moduli stack is Deligne–Mumford (our own summary). 'Reduced' cannot be dropped: in characteristic p, μₚ is finite but not reduced, and its classifying stack is not Deligne–Mumford (our own example). The hard part is the direction from unramified diagonal to an étale cover, which needs a slicing argument (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.3 (Characterization of Deligne–Mumford Stacks)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “Let 𝒳 be an algebraic stack. The following are equivalent: (1) the stack 𝒳 is a Deligne–Mumford; (2) the diagonal 𝒳 → 𝒳 × 𝒳 is unramified; and (3) every point of 𝒳 has a discrete and reduced stabilizer group.”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), theorem titled Characterization of Deligne–Mumford Stacks](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [P. Deligne, D. Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/bf02684599)

### Defining the blowup by a universal property makes it intrinsic

**Remember:** The blowup is the first place where the centre becomes a divisor.

*True by definition.* MSC 14E05 (Rational and birational maps), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** Let I be the ideal sheaf of a closed subscheme of X, the sheaf of functions that vanish on it. The blowup of X along it is a morphism π to X such that I generates a locally principal ideal upstairs, given by a non-zero-divisor. Every morphism with this property must factor uniquely through π.

**Problem.** The blowup of X along a closed subscheme is unique up to unique isomorphism, so it does not depend on coordinates or on an embedding. The blowup of an open subset U is the restriction of the blowup of X over U.

**How the definition helps.** A universal property fixes the object up to unique isomorphism, so independence of all choices is automatic. Classically, blowups were defined with coordinates or through an embedding, so each such fact needed a separate check. The work moves into existence: the blowup is the Proj of the sum of all powers of I (our own remark).

**Wikipedia:** [Blowing up](https://en.wikipedia.org/wiki/Blowing_up). It says: “From this perspective, a blowup is the universal (in the sense of category theory) way to turn a subvariety into a Cartier divisor.”

**Sources:** none listed. No primary source with a working link was found.

### Asking that local kernels be finitely generated makes coherent sheaves abelian

**Remember:** Coherent means finitely generated, with finitely generated relations on every open set.

*Rules out counterexamples. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18F20. arXiv math.AG. Level 3: graduate.

**Definition.** A sheaf F of O-modules is coherent if it has two properties. First, it is locally finitely generated. Second, take any open set U and any map from Oᵖ to F on U: then the kernel of this map is finitely generated.

**Problem.** On any ringed space, coherent sheaves form an abelian category that is closed under extensions. If two terms of a short exact sequence are coherent, so is the third.

**How the definition helps.** The kernel condition makes coherence survive kernels, cokernels and extensions, on any ringed space. The naive notion, finitely presented, does not behave well outside Noetherian schemes; the nLab notes that even the structure sheaf can be finitely presented but not coherent. The two-out-of-three property is a basic result of Serre. On Noetherian schemes the two notions agree, so nothing is lost there.

**nLab:** [coherent sheaf](https://ncatlab.org/nlab/show/coherent+sheaf). It says: “this is not true on a general scheme or general analytic space; sometimes even the structure sheaf”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955) 197–278](https://doi.org/10.2307/1969915)

### Local presentations make quasi-coherent modules stay quasi-coherent under pullback

**Remember:** Pullback preserves free modules and quotients by images.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A sheaf of modules on a ringed space is quasi-coherent if locally it is the cokernel of a map between free modules. On an affine scheme, an alternative definition says the sheaf comes from a module over the ring.

**Problem.** For a map of ringed spaces from X to Y, the pullback to X of a quasi-coherent module on Y is quasi-coherent.

**How the definition helps.** Local presentations make pullback a direct application of how it acts on free modules and quotients. Pullback preserves free modules and cokernels (our own account of the Stacks result). With the affine definition, one needs the theorem that pullback along a ring map A → B corresponds to tensoring with B.

**Paper or page:** [Modules, Lemma 17.10.4](https://stacks.math.columbia.edu/tag/01BG), [Modules, Lemma 17.16.3](https://stacks.math.columbia.edu/tag/01CC). It says: “The pullback \\(f<sup>\*\\mathcal{G}\\</sup>) of a quasi-coherent \\(\\mathcal{O}<sub>Y</sub>\\)-module is quasi-coherent.”

**Sources:**

- [The Stacks Project, Lemma 17.10.4, Tag 01BG](https://stacks.math.columbia.edu/tag/01BG)
- [The Stacks Project, Lemma 17.16.3, Tag 01CC](https://stacks.math.columbia.edu/tag/01CC)
- [The Stacks Project, Lemma 26.7.3, Tag 01I9](https://stacks.math.columbia.edu/tag/01I9)
- [The Stacks Project, Lemma 26.7.5, Tag 01IB](https://stacks.math.columbia.edu/tag/01IB)

### Čech cochains make cohomology of quasi-coherent sheaves commute with flat base change

**Remember:** Flat tensoring carries cycles and boundaries to the new base.

*True by definition. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** Let X be a quasi-compact separated scheme over a ring A, and ℱ a quasi-coherent sheaf, one that comes from modules on affine charts. Compute cohomology with the Čech complex of a finite affine cover, built from sections over intersections of charts. Serre's 1955 paper defined cohomology this way. The usual modern definition derives the global sections functor.

**Problem.** Let B be a flat A-algebra, and let X′ and ℱ′ be the base changes to B. Then Hⁱ(X, ℱ) ⊗ B over A is Hⁱ(X′, ℱ′) for every i.

**How the definition helps.** With the Čech definition, the proof is short, because the Čech complex for X′ is the complex for X tensored with B (our own). Tensoring with a flat module commutes with taking cohomology of a complex. The real work moves into the theorem that Čech cohomology agrees with derived functor cohomology for quasi-coherent sheaves on separated schemes (our own). That theorem rests on the vanishing of higher cohomology on affine schemes.

**Paper or page:** [Coherent, Lemma 30.5.2](https://stacks.math.columbia.edu/tag/02KH). It says: “Hⁱ(X, ℱ) ⊗ₐ B = Hⁱ(X′, ℱ′).”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955)](https://doi.org/10.2307/1969915)

### A full strong exceptional collection makes Dᵇ(X) a derived category of modules

**Remember:** No higher self-extensions, so the endomorphism ring is an ordinary algebra.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 16E35. arXiv math.AG, math.RT. Level 3: graduate.

**Definition.** A full exceptional collection is a generating list E₁, …, Eₘ of objects with Hom(Eᵢ, Eᵢ) = k and no self-maps of nonzero degree. It also has no maps from Eⱼ to Eᵢ\[t\] for i &lt; j. It is strong if also Hom(Eᵢ, Eⱼ\[t\]) = 0 for all i, j and every t ≠ 0. Let T be the sum of the Eᵢ, and let A = End(T), a finite-dimensional algebra.

**Problem.** Let X be smooth projective, and let Dᵇ(X) have a full strong exceptional collection with sum T. Then RHom(T, −) is an equivalence from Dᵇ(X) to the bounded derived category of finitely generated right A-modules (Bondal). For Beilinson's collection on Pⁿ, A is the path algebra of a quiver with relations.

**How the definition helps.** Strongness puts every endomorphism of T in degree 0, so RHom(T, −) sends T to the free module A and is fully faithful on T (our own). Full faithfulness then spreads to everything T generates, and fullness makes the functor essentially surjective (our own). Without strongness the endomorphisms of T have other degrees, and one needs a dg algebra (our own). The input is a proof that the collection is full, such as Beilinson's theorem.

**nLab:** [exceptional collection](https://ncatlab.org/nlab/show/exceptional+collection). It says: “It is a full exceptional collection if in addition it generates the category.”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “is a strong exceptional collection if in addition, for any ℓ ≠ 0 and any i, j, we have Hom(Eᵢ, Eⱼ\[+ℓ\]) = 0”

**Sources:**

- [A. I. Bondal, Representation of associative algebras and coherent sheaves, Mathematics of the USSR-Izvestiya 34 (1990) 23–42](https://doi.org/10.1070/im1990v034n01abeh000583)
- [A. A. Beilinson, Coherent sheaves on Pⁿ and problems of linear algebra, Functional Analysis and Its Applications 12 (1978) 214–216](https://doi.org/10.1007/bf01681436)

### Fourier–Mukai kernels compose by convolution, so composites stay transforms

**Remember:** Pull, tensor, push, twice, is one pull, tensor, push.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Fourier–Mukai transform from X to Y pulls a complex back to X × Y, tensors it with a fixed complex K, and pushes forward to Y. The complex K is the kernel. All three operations are derived functors.

**Problem.** Over a base S, take kernels K on X × Y and K′ on Y × Z. Assume that Y is flat and that X and Z are tor independent, so their derived fibre product has no higher Tor terms. Then the composite of their transforms is again a transform, with an explicit kernel on X × Z.

**How the definition helps.** Both functors are pull–tensor–push, so flat base change and the projection formula move the middle push forward past the next pullback (our own). The composite then becomes one pull–tensor–push through X × Y × Z, with kernel the push forward of the tensor product of the pullbacks of K and K′. The flatness and tor-independence conditions are what base change needs, and base change carries the work. As a result, a question about composites of transforms becomes a question about one complex on a product.

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “Given two kernels K₁ ∈ Dᵇ(X×Y) and K₂ ∈ Dᵇ(Y×Z), the composed functor ΦK₂ ∘ ΦK₁ is also a Fourier-Mukai transform.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.8.3](https://stacks.math.columbia.edu/tag/0FYS). It says: “If X and Z are tor independent over S and Y → S is flat, then Φ<sub>K</sub>′ ∘ Φ<sub>K</sub> = Φ<sub>K</sub>″”

**Sources:**

- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Full exceptional collections make K₀ free, which excludes curves of positive genus

**Remember:** A full exceptional collection is a basis for K₀.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18F30, 18G80. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** An object E is exceptional if Hom(E, E) = k and Hom(E, E\[t\]) = 0 for t ≠ 0. An exceptional collection is a list of exceptional objects E₁, …, Eₘ with Hom(Eⱼ, Eᵢ\[t\]) = 0 for all i &lt; j and all t. It is full if the Eᵢ generate the whole triangulated category. Each Eᵢ generates a copy of the derived category of finite-dimensional vector spaces, whose K₀ is ℤ.

**Problem.** Let X be smooth projective. If Dᵇ(X) has a full exceptional collection E₁, …, Eₘ, then K₀(X) is the free abelian group on \[E₁\], …, \[Eₘ\]. So a smooth projective complex curve of positive genus has no full exceptional collection.

**How the definition helps.** A full exceptional collection splits Dᵇ(X) into m copies of the derived category of vector spaces, so K₀ splits into m copies of ℤ. The splitting of K₀ along a semiorthogonal decomposition carries the work. For a curve C of genus g ≥ 1, K₀(C) is ℤ ⊕ Pic(C), and Pic(C) contains the Jacobian, an uncountable group (our own). So K₀(C) is not finitely generated, and no full exceptional collection exists (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “In particular, if X is a smooth projective variety such that Dᵇ(X) has a full exceptional collection E₁,…,Eₘ, then the Grothendieck group of algebraic vector bundles on X is the free abelian group on the classes of these objects”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Kernels make the adjoint of a Fourier–Mukai transform another explicit transform

**Remember:** Adjoin each of pull, tensor, push, and you get a transform back.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Fourier–Mukai transform pulls back to X × Y, tensors with a kernel K, and pushes forward to Y. The kernel K is perfect if it is locally a bounded complex of vector bundles. Its dual K∨ is the complex of maps from K to the structure sheaf.

**Problem.** Let Y be flat, proper and Gorenstein over a Noetherian base S, with relative dualizing complex ω, and let X be of finite type over S. Let K be a perfect kernel on X × Y. Then the transform from Y to X with kernel K∨ ⊗ ω is left adjoint to the transform with kernel K.

**How the definition helps.** Each step of pull–tensor–push has a known left adjoint, and composing them gives pull–tensor–push again (our own). Pullback is left adjoint to push forward, and tensoring with K∨ is left adjoint to tensoring with K (our own). The left adjoint of pullback from X is push forward twisted by ω (our own). That step is Grothendieck duality for the proper projection X × Y → X, which carries the work and needs the Gorenstein condition.

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “Fourier-Mukai transforms always have left and right adjoints, both of which are also kernel transformations.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.8.8](https://stacks.math.columbia.edu/tag/0FYX). It says: “There is a canonical isomorphism Hom<sub>Y</sub>(N, Φ(M)) → Hom<sub>X</sub>(Φ′(N), M) functorial in M”

**Sources:**

- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Resolving the diagonal kernel shows n + 1 line bundles generate Dᵇ(Pⁿ)

**Remember:** Resolve the identity's kernel, and every object resolves the same way.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14N05. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** The Fourier–Mukai transform with kernel K on X × X pulls F back from the second factor, tensors with K, and pushes forward to the first factor. The structure sheaf of the diagonal, used as a kernel, gives the identity functor. The kernel E ⊠ G, built from E on the first factor and G on the second, sends F to E ⊗ RΓ(F ⊗ G).

**Problem.** On projective space Pⁿ, the line bundles O(−n), …, O(−1), O form a full strong exceptional collection (Beilinson). Strong means that there are no maps between them in nonzero degrees. So every object of Dᵇ(Pⁿ) is built from them by shifts, sums and cones.

**How the definition helps.** Every object F is its own transform by the diagonal kernel, so a resolution of that kernel by kernels E ⊠ G resolves F (our own). Each transform with kernel E ⊠ G is a sum of shifts of E, where RΓ means global sections, so these E generate (our own). On Pⁿ, Beilinson's resolution of the diagonal by the terms O(−i) ⊠ Ωⁱ(i) carries the work. Here Ωⁱ is the sheaf of i-forms, and exceptionality is a separate cohomology computation.

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “In the derived category Dᵇ(ℙⁿ) the line bundles 𝒪(−n), 𝒪(−n+1), …, 𝒪(−1), 𝒪 form a full strong exceptional collection.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.9.3](https://stacks.math.columbia.edu/tag/0FZ2). It says: “There exists a resolution … → ℰ₂ ⊠ 𝒢₂ → ℰ₁ ⊠ 𝒢₁ → ℰ₀ ⊠ 𝒢₀ → 𝒪\_Δ → 0 where each ℰᵢ and 𝒢ᵢ is a finite locally free 𝒪<sub>X</sub>-module.”

**Sources:**

- [A. A. Beilinson, Coherent sheaves on Pⁿ and problems of linear algebra, Functional Analysis and Its Applications 12 (1978) 214–216](https://doi.org/10.1007/bf01681436)

### The intrinsic Serre functor makes derived equivalent varieties have equal dimension

**Remember:** Equivalences respect Serre functors, and the Serre functor shifts by the dimension.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Serre functor S is defined from Hom spaces alone, by natural isomorphisms Hom(X, Y) ≅ Hom(Y, S X)\*, where \* is the dual space. So every exact equivalence carries a Serre functor to a Serre functor. Let Dᵇ(X) be the bounded derived category of coherent sheaves, whose objects are bounded complexes of sheaves up to quasi-isomorphism. For a smooth projective variety X of dimension n, its Serre functor is E ↦ E ⊗ ω\[n\], with ω the canonical line bundle.

**Problem.** If smooth projective varieties X and Y have equivalent bounded derived categories of coherent sheaves, then X and Y have the same dimension.

**How the definition helps.** Because the Serre functor depends only on the category, an equivalence F from Dᵇ(X) to Dᵇ(Y) commutes with the two Serre functors (our own). Serre duality carries the work: it makes the Serre functor E ↦ E ⊗ ω\[n\], which is the shift \[n\] on a skyscraper sheaf k(x). So P = F(k(x)) satisfies P ⊗ ω\[m\] ≅ P\[n\], with m = dim Y and ω the canonical bundle of Y (our own). Tensoring with a line bundle keeps the degrees of the cohomology sheaves of P, so n = m (our own).

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “Any autoequivalence F : 𝒜 → 𝒜 commutes with a Serre functor: there is a natural graded isomorphism of functors F ∘ S ⥲ S ∘ F.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### The Serre functor packages Serre duality on a proper Gorenstein scheme

**Remember:** Serre duality for every pair of complexes is one functor.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Serre functor on a triangulated category over a field is an equivalence S with natural isomorphisms Hom(K, L) ≅ Hom(L, S K)\*. A scheme is Gorenstein if its local rings have finite injective dimension over themselves. Then its dualizing complex ω•, the complex that gives Grothendieck duality, is locally a line bundle placed in one degree.

**Problem.** Let X be a proper Gorenstein scheme over a field k. Then K ↦ ω• ⊗ K is a Serre functor on perfect complexes on X, which are locally bounded complexes of vector bundles. So Hom(K, L) ≅ Hom(L, ω• ⊗ K)\* for all perfect complexes K and L.

**How the definition helps.** The Serre functor turns the many forms of Serre duality, one for each pair of sheaves and each degree, into one statement about one functor. The work is Grothendieck duality for the map from X to a point, which supplies ω• and the duality isomorphism. The Gorenstein condition makes ω• invertible, so tensoring with it keeps complexes perfect and is an equivalence (our own). For a smooth projective variety this functor is E ↦ E ⊗ ω\[n\], as the nLab states.

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “In the derived category of coherent sheaves on a smooth projective variety X, the functor (· ⊗ ω<sub>X</sub>)\[n\] is a Serre functor, in view of Serre-Grothendieck duality, where ω<sub>X</sub> is the canonical sheaf and n is the dimension of X.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.4.1](https://stacks.math.columbia.edu/tag/0FY8). It says: “Then the functor S : D<sub>perf</sub>(𝒪<sub>X</sub>) ⟶ D<sub>perf</sub>(𝒪<sub>X</sub>), K ⟼ S(K) = ω<sub>X•</sub> ⊗ K is a Serre functor.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### The dualizing sheaf extends Serre duality to Cohen–Macaulay schemes

**Remember:** Replace n-forms by the dualizing sheaf, and duality survives mild singularities.

*Makes the theorem clean to state or prove.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 14M05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A Cohen–Macaulay scheme is one whose local rings have as long a regular sequence as their dimension allows. For such a scheme X of pure dimension n over a field, Grothendieck defined a coherent sheaf ω, the dualizing sheaf. On a smooth scheme it is the canonical line bundle of n-forms. On a Cohen–Macaulay subscheme of a smooth scheme Y, it is an Ext sheaf, a derived form of Hom, into the canonical bundle of Y.

**Problem.** Let X be proper, Cohen–Macaulay and of pure dimension n over a field, with dualizing sheaf ω. For every coherent sheaf E, Hⁱ(X, E) is dual to Extⁿ⁻ⁱ(E, ω), even for singular X such as complete intersections.

**How the definition helps.** The canonical bundle uses differential forms, which behave badly at singular points, so Serre's theorem needs smoothness. The dualizing sheaf is chosen so that duality holds, and on smooth schemes it is the canonical bundle (our own reading). For a local complete intersection in a smooth Y, ω is the canonical bundle of Y times the top power of the normal bundle, a line bundle. For general schemes, duality needs a dualizing complex, and the work moves into Grothendieck duality.

**Wikipedia:** [Serre duality](https://en.wikipedia.org/wiki/Serre_duality). It says: “As a first step in generalizing Serre duality, Grothendieck showed that this version works for schemes with mild singularities, Cohen–Macaulay schemes, not just smooth schemes.”

**Sources:**

- [Jean-Pierre Serre, Un théorème de dualité, Commentarii Mathematici Helvetici 29 (1955) 9–26](https://doi.org/10.1007/BF02564268)
- [Robin Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20 (1966)](https://doi.org/10.1007/BFb0080482)

### Coordinate crossings allow small poles

**Remember:** Independent coordinates let each pole face its own integrability test.

*Rules out counterexamples. Confidence: medium.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A divisor has simple normal crossings when its components through each point are smooth and become distinct coordinate hyperplanes in suitable local coordinates. For positive coefficients aⱼ, form the product of the factors \|zⱼ\| raised to −2aⱼ. The multiplier ideal tests local integrability of \|f\|² times this product.

**Problem.** A divisor with simple normal crossings has the whole local function ring as its multiplier ideal everywhere exactly when every coefficient is below one.

**How the definition helps.** Coordinate hyperplanes separate the integral of the constant function into one-variable factors, each finite precisely below one. Our own counterexample uses three lines through the origin in the complex plane of dimension two, each with coefficient ¾. Blowing up the origin produces order 9/4 in the weighted divisor and order one in the Jacobian. The resulting one-variable integral diverges.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “measures singularities coming from the fractional parts of D.”

**Sources:** none listed. No primary source with a working link was found.

### Integrability computes resolved multiplier ideals

**Remember:** The change of volume supplies the relative canonical divisor.

*True by definition.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a nonzero ideal generated locally by g₁,…,gₘ, its multiplier ideal at c &gt; 0 tests a holomorphic function f by integration. It requires \|f\|²/(∑ⱼ\|gⱼ\|²)ᶜ to have finite integral near each point.

**Problem.** On a smooth complex variety, resolve the ideal so its pullback has coordinate factors with orders mⱼ. Membership requires ordⱼ(f∘π) + kⱼ ≥ ⌊cmⱼ⌋ along every such divisor, where kⱼ is the vanishing order of the resolution Jacobian.

**How the definition helps.** The integral definition turns the divisor formula into separate tests in one complex variable. In our own calculation, changing variables adds the squared Jacobian to the numerator. Each radial integral converges exactly when its exponent exceeds −1, giving the stated integer bound. Constructing the resolution is the deep step.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “where the fᵢ are a finite set of local generators of the ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier ideals extend off hypersurfaces

**Remember:** The multiplier condition is exactly the norm condition for extension.

*True by definition.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A plurisubharmonic weight φ is an upper semicontinuous function that is subharmonic on complex lines in local coordinates. Its multiplier ideal 𝒥(φ) consists of local holomorphic functions f with \|f\|² exp(−2φ) locally integrable.

**Problem.** On a smooth hypersurface Y where the restricted weight is not identically minus infinity on any component, every multiplier ideal germ extends locally. Its extension belongs to the multiplier ideal on the ambient complex manifold.

**How the definition helps.** The integral definition gives exactly the hypothesis and conclusion of the weighted holomorphic extension theorem. In our own explanation, a definition using vanishing orders would require comparing resolutions on two different spaces. The Ohsawa–Takegoshi theorem supplies the extension with finite integral.

**Paper or page:** [Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1). It says: “\\mathcal{I} (\\varphi \|<sub>Y</sub>) \\subset \\mathcal{I} (\\varphi ) \|<sub>Y</sub> .”

**Sources:**

- [T. Ohsawa and K. Takegoshi, On the extension of L² holomorphic functions (1987)](https://doi.org/10.1007/BF01166457)
- [J.-P. Demailly, L. Ein and R. Lazarsfeld, A subadditivity property of multiplier ideals (2000)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/subaddmult.pdf)

### Compact direct images sum traces

**Remember:** Push a trace function forward by summing it over each fiber.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies). arXiv math.AG. Level 3: graduate.

**Definition.** Let f map one variety over a finite field to another, and let K be a bounded constructible complex of ℓ-adic sheaves on the source, with ℓ different from the characteristic. Its trace function sends a rational point to the alternating sum of the Frobenius traces on the stalks of K there.

**Problem.** At every rational point y of the target, the trace function of the compactly supported direct image Rf!K equals the sum of the trace function of K over the rational points above y. The same holds over every finite extension.

**How the definition helps.** The compactly supported direct image collects the cohomology with compact supports of each fiber into one complex on the target. Our own explanation uses the base change theorem to identify its value at y with that fiber cohomology. The Grothendieck trace formula then converts its alternating trace into the required sum.

**Wikipedia:** [Grothendieck trace formula](https://en.wikipedia.org/wiki/Grothendieck_trace_formula). It says: “where the cohomology groups are replaced by cohomology with coefficients in the sheaf.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support by zero extension turns excision into a short exact sequence

**Remember:** Extend by zero to turn an open and its complement into an exact sequence.

*True by definition. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** Let X be a separated variety, and embed it as an open subset of a proper variety X̄, the algebraic analogue of a compact space. For a torsion sheaf F on X, one whose sections are killed by nonzero integers, extend F by zero to X̄. Compactly supported étale cohomology of F is the étale cohomology of this extension on X̄.

**Problem.** Let Z be a closed subvariety of X with open complement U. For torsion coefficients, compactly supported cohomology of U, X and Z fits into a long exact sequence.

**How the definition helps.** With this definition, excision is the long exact sequence of a short exact sequence of sheaves on X̄. The Stacks Project lemma gives 0 → j!j⁻¹F → F → i\*i⁻¹F → 0 on X, where j and i include U and Z. Extending by zero to X̄ keeps it exact and gives the zero extensions from U, X and Z (our own). In topology one can use sections with compact support instead, but that has no good étale analogue (our own). The work lies in proving independence of the compactification, by proper base change (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.70.8](https://stacks.math.columbia.edu/tag/095L). It says: “there is a canonical short exact sequence”

**Sources:**

- [The Stacks Project, Lemma 59.70.8](https://stacks.math.columbia.edu/tag/095L)

### Galois cohomology as derived invariants equals étale cohomology of a field

**Remember:** On the étale site of a field, global sections are Galois fixed elements.

*True by definition.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 12G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let K be a field with separable closure Kˢ, and G the group of automorphisms of Kˢ over K. Define Galois cohomology as the derived functors of taking G-fixed elements of discrete G-modules. A module is discrete when each element is fixed by some open subgroup. Galois cohomology can also be defined by continuous cochains, which are functions on tuples of group elements.

**Problem.** For a sheaf on the étale site of a field, étale cohomology equals Galois cohomology of the corresponding module.

**How the definition helps.** With the derived-functor definition, both theories derive the same functor, so they agree at once. The Stacks Project lemma shows that taking stalks is an equivalence from étale sheaves on the field to discrete G-modules. Under it, global sections become G-fixed elements (our own). With continuous cochains, one needs a separate theorem that cochains compute these derived functors (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.59.1](https://stacks.math.columbia.edu/tag/04JQ). It says: “The stalk functor induces an equivalence of categories”

**Sources:**

- [The Stacks Project, Lemma 59.59.1](https://stacks.math.columbia.edu/tag/04JQ)

### Local quasi-compactness in fpqc coverings makes every Zariski covering count

**Remember:** Ask quasi-compactness over each affine, and infinite open covers still count.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 18F20. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** In the Stacks Project, a family {Tᵢ → T} is an fpqc covering if each map is flat and the images cover T. Also, each affine open of T must be the image of a quasi-compact open of the disjoint union of the Tᵢ. The name abbreviates the French 'fidèlement plat quasi-compact', which means faithfully flat and quasi-compact.

**Problem.** With this definition, every Zariski, étale, smooth and fppf covering is an fpqc covering, including infinite open covers. Every representable functor is a sheaf for the fpqc topology.

**How the definition helps.** The condition is checked over each affine open, and an affine is quasi-compact, so finitely many members of any open cover already reach it. So one theorem covers both ordinary gluing and faithfully flat descent. A naive definition by one faithfully flat quasi-compact map would leave out infinite open covers. The hard part, descent along one faithfully flat affine map, is Grothendieck's theorem and is not changed by the definition (our own).

**Paper or page:** [Stacks Project, Topologies, Lemma 34.9.7](https://stacks.math.columbia.edu/tag/022C), [Stacks Project, Descent, Lemma 35.13.7](https://stacks.math.columbia.edu/tag/023Q). It says: “Any fppf covering is an fpqc covering, and a fortiori, any syntomic, smooth, étale or Zariski covering is an fpqc covering.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 022C (Topologies, Lemma 34.9.7)](https://stacks.math.columbia.edu/tag/022C)
- [The Stacks Project Authors, The Stacks Project, Tag 023Q (Descent, Lemma 35.13.7)](https://stacks.math.columbia.edu/tag/023Q)

### The Nisnevich topology sits between the Zariski and étale topologies

**Remember:** Étale covers that catch every point without changing its residue field.

*Rules out counterexamples.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** An étale map is a map of schemes that is a local isomorphism in the algebraic sense, like a covering map. A family of étale maps Vᵢ → U is a Nisnevich cover if every field-valued point Spec k → U lifts to some Vᵢ. The lift must have the same residue field as the point.

**Problem.** Algebraic K-theory satisfies descent in the Nisnevich topology, as in the Zariski topology but not in general in the étale topology. The Nisnevich topology has cohomological dimension at most the Krull dimension and étale-type excision for neighbourhoods.

**How the definition helps.** Lifting every point with the same residue field keeps Zariski-type descent while allowing étale neighbourhoods. Algebraic K-theory satisfies Zariski descent, but in general not étale descent. The Zariski topology is too coarse for excision results, such as comparing X/(X − Z) with the normal bundle of Z. The descent theorem for K-theory is still a real theorem, by Thomason–Trobaugh and Nisnevich.

**nLab:** [Nisnevich site](https://ncatlab.org/nlab/show/Nisnevich+site), [motivic homotopy theory](https://ncatlab.org/nlab/show/motivic+homotopy+theory). It says: “Algebraic K-theory satisfies descent over the Nisnevich site -- as is true for the Zariski site but not in full generality for the etale site”

**Sources:**

- [Yevsey Nisnevich, The completely decomposed topology on schemes and associated descent spectral sequences in algebraic K-theory, in: Algebraic K-Theory: Connections with Geometry and Topology, NATO ASI Ser. C 279, Kluwer (1989) 241–342](https://doi.org/10.1007/978-94-009-2399-7_11)

### Twisting by roots of unity makes Poincaré duality canonical

**Remember:** Twist by roots of unity, and the orientation of a variety comes for free.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The Tate twist ℤ/n(1) is the group μₙ of n-th roots of unity. The l-adic Tate twist ℤₗ(1) is the inverse limit of the groups of lⁱ-th roots of unity. For a coefficient module A, the twist A(k) is A tensored with the k-th tensor power of this twist group. For negative k, you use the dual of the twist group instead.

**Problem.** In ℓ-adic cohomology, Poincaré duality, the Thom isomorphism and the cycle map hold canonically when written with Tate twists, with no choice of orientation. They also commute with the Galois action.

**How the definition helps.** The twist supplies a canonical orientation, so you do not have to choose one. As a ℤₗ-module, ℤₗ(1) is isomorphic to ℤₗ, but not canonically, and not as a Galois representation. The group H²(ℙ¹, ℤₗ(1)) is canonically ℤₗ, so ℤₗ(1) is the correct orientation sheaf. The nLab says that the rest follows 'with effort'; the twist makes the statement correct, not the proof short.

**nLab:** [Tate twist](https://ncatlab.org/nlab/show/Tate+twist). It says: “Tate twists play an important role in cohomology theories with this dual geometric and arithmetic aspect, allowing one to express Poincaré duality canonically, that is, without choosing an orientation of one's geometric object”

**Sources:**

- [P. Deligne, Cohomologie étale (SGA 4½), Lecture Notes in Mathematics 569, Springer (1977)](https://doi.org/10.1007/BFb0091516)

### Weil cohomology gives rationality and the functional equation of zeta functions

**Remember:** Count points as fixed points of Frobenius; the zeta function becomes a ratio of polynomials.

*True by definition.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14G10. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A Weil cohomology theory is a cohomology theory on smooth projective varieties over a field, with coefficients in a field of characteristic 0. It must satisfy a list of axioms. The axioms include finite dimensionality, Poincaré duality, a Künneth formula and a cycle class map (a map that sends each subvariety to a cohomology class). Together they give a Lefschetz fixed point formula.

**Problem.** Given a Weil cohomology theory, the zeta function of a smooth projective variety over a finite field is rational and satisfies a functional equation.

**How the definition helps.** The axioms let one count points by traces, as in topology, so rationality and the functional equation follow formally. The points over the field with qⁿ elements are the fixed points of the n-th power of Frobenius, and the Lefschetz formula makes each count an alternating sum of traces. So the zeta function is an alternating product of characteristic polynomials, and Poincaré duality gives the functional equation. The Riemann hypothesis does not follow formally, and the real content moves into proving that ℓ-adic cohomology is a Weil cohomology.

**nLab:** [Weil cohomology theory](https://ncatlab.org/nlab/show/Weil+cohomology+theory), [Weil conjectures](https://ncatlab.org/nlab/show/Weil+conjectures), [Lefschetz trace formula](https://ncatlab.org/nlab/show/Lefschetz+trace+formula). It says: “It was realized that the all except one of the conjectures (the Riemann hypothesis) would follow formally from the existence of a suitable cohomology theory on algebraic varieties”

**Sources:**

- [James S. Milne, Lectures on Étale Cohomology (course notes)](https://www.jmilne.org/math/CourseNotes/lec.html)

### Étale root-extracting covers make first μₙ-cohomology capture n-torsion line bundles

**Remember:** Extract roots locally to see which line bundles become trivial after n tensor powers.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14C22. arXiv math.AG. Level 3: graduate.

**Definition.** On the étale site, a cover may adjoin an nth root of a unit. So when n is invertible, the nth-power map on the sheaf of units is onto. Its kernel is the sheaf μₙ of nth roots of unity. On the Zariski site, whose covers are open subsets, the nth-power map is not onto in general.

**Problem.** Let n be invertible on a scheme X. Then first étale cohomology with coefficients in μₙ maps onto the line bundles whose nth power is trivial. The kernel is the global units modulo nth powers.

**How the definition helps.** The étale topology makes 1 → μₙ → units → units → 1 exact, so the claim is read off its long exact sequence (our own). Its terms give global units modulo nth powers, then H¹ of μₙ, then the n-torsion in H¹ of the units. The work moves into Hilbert's Theorem 90, which says that étale H¹ of the units is the group of line bundles (our own). Zariski cohomology fails here: for X = Spec ℚ and n = 2 it is zero, but ℚ\* modulo squares is not (our own).

**nLab:** [Kummer sequence](https://ncatlab.org/nlab/show/Kummer+sequence). It says: “then if n is invertible over the site then there is a short exact sequence”

**Sources:**

- [James S. Milne, Étale Cohomology, Chapter III (1980)](https://doi.org/10.1515/9781400883981)

### Crystalline cohomology does not depend on the smooth presentation

**Remember:** Any smooth presentation works, because the crystalline site does not see it.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F40. arXiv math.AG. Level 3: graduate.

**Definition.** Crystalline cohomology RΓ(Cris(X/S), ℱ) is the cohomology of a sheaf on the crystalline site, whose objects are divided power thickenings of open parts of X. It is defined with no choice of embedding or presentation. Take X = Spec C over a divided power base A, and a smooth A-algebra P′ with a surjection onto C. This gives a completed divided power envelope D′ and a module M′ with integrable connection.

**Problem.** Let ℱ be a crystal in quasi-coherent modules on Cris(X/S), with X affine. For every smooth A-algebra P′ with a surjection onto C, the completed de Rham complex of M′ over D′ computes RΓ(Cris(X/S), ℱ).

**How the definition helps.** Since the crystalline cohomology is defined without a presentation, each de Rham complex only has to be compared with it, not with the others. The Stacks Project first proves the comparison for one presentation in Proposition 64.21.3. Two presentations P′ and P″ can be compared through P′ ⊗ P″, which is again smooth (our own). The divided power Poincaré lemma shows that the extra variables add no cohomology (our own).

**Paper or page:** [Crystalline, Lemma 64.21.4](https://stacks.math.columbia.edu/tag/07LH). It says: “Then the complex M′ ⊗<sup>∧<sub>D′</sub></sup> Ω\*<sub>D′</sub> computes RΓ(Cris(X/S), ℱ).”

**Sources:**

- [The Stacks Project, Crystalline cohomology, Lemma 64.21.4 (Tag 07LH)](https://stacks.math.columbia.edu/tag/07LH)

### Crystalline Frobenius needs no lift

**Remember:** Use all thickenings so Frobenius acts without choosing a lift.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A thickening presents a scheme inside a larger scheme by an ideal of functions that vanish on it. Divided powers on that ideal obey the identities for xⁿ/n!, even when division by n! is impossible. Crystalline cohomology uses compatible local data on such thickenings, with their divided powers, over the chosen base.

**Problem.** For a smooth scheme over 𝔽ₚ, absolute Frobenius induces a natural endomorphism on its crystalline cohomology over ℤₚ. No lift of Frobenius on a characteristic-zero model is required.

**How the definition helps.** Using all thickenings gives pullback for maps of the original scheme (our own explanation). In characteristic p, raising functions to the pth power defines the absolute Frobenius map. Over 𝔽ₚ it fixes the base, so its pullback acts on crystalline cohomology. Computing this action through differential forms on a smooth lift uses the crystalline comparison theorem (our own explanation).

**nLab:** [crystalline cohomology](https://ncatlab.org/nlab/show/crystalline+cohomology). It says: “Crystalline cohomology is the abelian sheaf cohomology with respect to the crystalline site of a scheme.”

**Sources:** none listed. No primary source with a working link was found.

### Divided power envelopes descend through quotients

**Remember:** To kill a relation in an envelope, kill all its divided powers.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG. Level 3: graduate.

**Definition.** Divided powers on an ideal are operations γₙ that obey the identities for xⁿ/n!, even when division by n! is impossible. The divided power envelope of an ideal J of B is the universal B-algebra in which J lands in a divided power ideal compatible with the base. Every such map from B factors uniquely through it.

**Problem.** Let B′ → B be a surjection of algebras over a divided power base, with kernel K. Let J be an ideal of B containing the base divided power ideal, and J′ its inverse image in B′. Then the envelope of J is the envelope of J′ modulo all γₙ(k) with n ≥ 1 and k in K.

**How the definition helps.** The universal property identifies which relations to impose without computing a presentation (our own explanation). A map factors through the quotient ring exactly when it kills the kernel of B′ → B. Respecting divided powers then forces it to kill every positive divided power of each kernel element. The work is proving these relations allow the operations to descend to the quotient envelope (our own argument).

**Paper or page:** [Lemma 64.2.3.](https://stacks.math.columbia.edu/tag/07HB). It says: “where K′ is the ideal generated by the elements γ̄ₙ(k) for n ≥ 1 and k ∈ K.”

**Sources:**

- [The Stacks Project Authors, Lemma 64.2.3.](https://stacks.math.columbia.edu/tag/07HB)

### Divided powers make the Poincaré lemma hold in characteristic p

**Remember:** Every monomial form x⁽ⁿ⁾dx has the primitive x⁽ⁿ⁺¹⁾.

*Rules out counterexamples.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 13N05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The divided power polynomial ring k⟨x⟩ over a ring k has a basis of symbols x⁽ⁿ⁾, meant as xⁿ/n!, with x⁽ⁿ⁾x⁽ᵐ⁾ = ((n+m)!/(n!m!)) x⁽ⁿ⁺ᵐ⁾. Its derivation sends x⁽ⁿ⁾ to x⁽ⁿ⁻¹⁾ dx.

**Problem.** For every ring k, the divided power de Rham complex of k⟨x⟩ has cohomology k in degree 0 and nothing in degree 1. Over the ordinary polynomial ring 𝔽ₚ\[x\], this fails: xᵖ is a nonconstant closed function and xᵖ⁻¹dx is a closed form with no primitive.

**How the definition helps.** Each basis form x⁽ⁿ⁾dx has the primitive x⁽ⁿ⁺¹⁾, so integration needs no division by n + 1. In 𝔽ₚ\[x\], a primitive of xᵖ⁻¹dx would need xᵖ/p, and d(xᵖ) = pxᵖ⁻¹dx = 0 (our own example). This is why crystalline cohomology uses thickenings with divided powers.

**Wikipedia:** [Crystalline cohomology](https://en.wikipedia.org/wiki/Crystalline_cohomology). It says: “in order to prove exactness of the de Rham complex, one needs some sort of Poincaré lemma, whose proof in turn uses integration, and integration requires various divided powers, which exist in characteristic 0 but not always in characteristic p.”

**Sources:**

- [P. Berthelot and A. Ogus, Notes on Crystalline Cohomology, Princeton University Press (1978)](https://doi.org/10.1515/9781400867318)

### The crystal condition gives an integrable connection

**Remember:** Two pullbacks being equal is a connection; three is integrability.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG. Level 3: graduate.

**Definition.** A crystal in 𝒪X/S-modules is a sheaf ℱ on the crystalline site Cris(X/S), whose objects are divided power thickenings of open parts of X. Take a morphism from a thickening U′ to a thickening U. Then the comparison map from the pullback of ℱ on U to ℱ on U′ must be an isomorphism.

**Problem.** Every crystal in 𝒪X/S-modules on the crystalline site comes with a canonical integrable connection.

**How the definition helps.** The connection is read off from the crystal condition, so no separate data is needed. On the first-order divided power neighbourhood of the diagonal, the crystal condition identifies the two pullbacks of ℱ. Their difference is a map ℱ → ℱ ⊗ Ω¹, and the triple product gives integrability (our own). The usual definition takes the connection as extra data, and the work moves into the converse, that a suitably nilpotent integrable connection gives a crystal.

**Paper or page:** [Crystalline, Lemma 64.15.1](https://stacks.math.columbia.edu/tag/07J6). It says: “Let ℱ be a crystal in 𝒪<sub>X/S</sub>-modules on Cris(X/S). Then ℱ comes equipped with a canonical integrable connection.”

**Sources:**

- [The Stacks Project, Crystalline cohomology, Lemma 64.15.1 (Tag 07J6)](https://stacks.math.columbia.edu/tag/07J6)

### Defining π₁ by unramified Galois extensions makes the function-field Galois map surjective

**Remember:** Restricting automorphisms to a Galois subextension gives a quotient.

*True by definition.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 11R32. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let X be a normal integral scheme with function field K; normal means the local rings are integrally closed. Let M be the union of the finite separable extensions of K in which X is unramified. One may define the étale fundamental group as the Galois group of M over K. Grothendieck's definition uses automorphisms of the functor taking each finite étale cover to its fiber over a geometric point.

**Problem.** The absolute Galois group of K maps onto the étale fundamental group of X, based at a geometric point over the generic point.

**How the definition helps.** With the Galois-group definition, the map is restriction of automorphisms to M, and restriction to a Galois subextension is always onto (our own). With Grothendieck's definition, the Stacks Project proposition must first identify the map with this quotient. That identification recovers each cover as the normalization of X in a finite extension inside M (our own).

**Paper or page:** [Pione, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM). It says: “is identified with the quotient map”

**Sources:**

- [The Stacks Project, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM)

### Algebraic forms detect irregular periods

**Remember:** An entire integrating factor can erase algebraic classes.

*Rules out counterexamples.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** On the complex affine line, for the weight exp(−x³), define the twisted derivative by Dg = (g′ − 3x²g) dx. Algebraic twisted de Rham cohomology in degree one consists of polynomial one-forms modulo derivatives Dg of polynomials.

**Problem.** The form dx is nonzero in algebraic twisted de Rham cohomology. It becomes exact in the complex of entire forms with the same twisted differential.

**How the definition helps.** Restricting the coefficients to polynomials excludes the entire primitive that would erase the class of dx. In our own calculation, Dg has coefficient of degree deg(g) + 2 for every nonzero polynomial g. For entire functions, integrate exp(−x³) from zero to x and multiply the result by exp(x³). This gives an entire g with Dg = dx. The rapid decay pairing theorem detects the surviving algebraic class by integration.

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Cohomology rank bounds period equations

**Remember:** Differentiate classes and use their finite rank.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** Consider a smooth projective family over a smooth complex algebraic curve with local parameter t. In a fixed degree, relative de Rham cohomology records differential forms on the fibers modulo exact forms. The Gauss–Manin connection differentiates these classes as t varies. Under comparison with topology, it differentiates their integrals over cycles carried continuously between nearby fibers.

**Problem.** Suppose this cohomology has rank r. All periods of a given rational section satisfy one nonzero linear differential equation over the function field of the curve, of order at most r.

**How the definition helps.** Differentiating the cohomology class puts all derivatives in one r-dimensional space, instead of requiring separate calculations for each integral. In our own argument, the section and its first r derivatives are linearly dependent over the function field. Compatibility of the connection with integration turns this dependence into the same equation for every transported cycle.

**Wikipedia:** [Picard–Fuchs equation](https://en.wikipedia.org/wiki/Picard%E2%80%93Fuchs_equation). It says: “In algebraic geometry, this equation has been shown to be a very special case of a general phenomenon, the Gauss–Manin connection.”

**Sources:**

- [Katz and Oda, On the differentiation of De Rham cohomology classes with respect to parameters](https://doi.org/10.1215/kjm/1250524135)

### Relative classes cancel endpoint terms

**Remember:** Subtract the endpoint values when the path has endpoints.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** On a smooth affine curve X over ℚ, let D be a finite reduced set of points. Represent a relative de Rham class by a regular one-form ω on X and a function g on D. For each regular function f on X, identify (ω, g) with (ω + df, g + f restricted to D).

**Problem.** For a path chain γ with rational coefficients and endpoints in D, the value ∫γ ω − g(∂γ) depends only on the relative classes. Here g(∂γ) sums the signed endpoint values.

**How the definition helps.** In our own calculation, the endpoint function cancels the change in the integral when we add df. Stokes’ theorem kills boundaries because ω is closed, and paths contained in D contribute zero. The affine relative de Rham theorem replaces the abstract cohomology group by these explicit pairs.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “if Y ⊂ X is closed subvariety, we have comp: H•dR(X, Y, 𝕂) ⊗𝕂 ℂ ≅ H•B(X, Y, ℚ) ⊗ℚ ℂ.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Top forms represent relative periods

**Remember:** Top forms suffice even when the cycle has a boundary.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** Let X be a smooth affine variety of dimension n over a subfield of ℂ. Let D consist of smooth hypersurfaces that locally meet like coordinate hyperplanes. Compute relative de Rham cohomology using regular forms on X whose pullbacks to every component of D vanish.

**Problem.** Every relative de Rham class in degree n has a representative that is a single regular n-form on X.

**How the definition helps.** Every n-form restricts to zero on each component of dimension n − 1, so the relative complex contains all top forms. In our own argument, these forms are closed because X has dimension n. The comparison with the complex using forms on all boundary intersections uses a local calculation with forms on coordinate hyperplanes. Affineness then lets global forms compute cohomology.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “Each class in the top-degree cohomology group HⁿdR(X,D,𝕂) has a representative in Ωⁿ(X).”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Zero periods force algebraic primitives

**Remember:** A closed algebraic form with no periods is already exact.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** On a smooth affine variety over a field k ⊂ ℂ, compute de Rham cohomology using global algebraic differential forms. A closed form has derivative zero. Its cohomology class is zero exactly when it is the derivative of a global algebraic form over k.

**Problem.** Let p ≥ 1. If a closed algebraic p-form integrates to zero over every rational p-cycle of the complex variety, it has an algebraic primitive over k.

**How the definition helps.** The global algebraic definition turns a zero class directly into an algebraic primitive over k. Integration usually tests exactness among smooth complex forms. Grothendieck’s comparison theorem shows that these integrals also detect algebraic de Rham classes after extension to ℂ. In our own deduction, extending scalars preserves nonzero vectors, so the class already vanishes over k. Affineness justifies computing this class with global forms.

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “Soit X ⊂ 𝔸ⁿ une variété affine lisse. L'intégration induit un accouplement parfait”

**Sources:**

- [Grothendieck, On the de Rham cohomology of algebraic varieties](https://doi.org/10.1007/BF02684807)

### A base point splits torus motives

**Remember:** Split off the unit in each coordinate of a split torus.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** Let G be the multiplicative group, the affine line with zero removed, over a perfect field. The point 1 gives a map from the unit motive ℤ to the motive M(G). Define ℤ(1)\[1\] as the reduced motive, the quotient by this base-point summand. Here \[1\] shifts degree by one, and higher Tate objects ℤ(j) are tensor powers of ℤ(1).

**Problem.** The split torus with r coordinates is the product of r copies of G. Its motive contains ℤ(j)\[j\] with multiplicity r choose j for 0 ≤ j ≤ r, and these summands exhaust it.

**How the definition helps.** The map to a point retracts the base-point inclusion, giving M(G) as the sum of ℤ and ℤ(1)\[1\]. Our own deduction tensors r copies of this splitting. Choosing the second summand in j factors gives one copy of ℤ(j)\[j\]. The product theorem identifies this tensor product with the motive of the torus. The alternative projective-line description needs a comparison identifying its reduced motive with ℤ(1)\[2\].

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “the multiplicative group 𝔾ₘ := 𝔸¹ − {0}”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)
- [Vladimir Voevodsky, Cancellation Theorem (2010)](https://doi.org/10.4171/DMS/5/20)

### Cycle degrees bound motivic cohomology

**Remember:** No chains in negative degrees means no motivic cohomology above twice the weight.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C25. arXiv math.AG. Level 3: graduate.

**Definition.** Fix a smooth variety X over a field and a weight q ≥ 0. In degree n ≥ 0, take integer combinations of codimension-q subvarieties of X times the algebraic n-simplex. Their intersections with each face must still have codimension at least q there. Alternating face restrictions give Bloch’s complex, whose homology in degree 2q − p models motivic cohomology H(p,q).

**Problem.** For smooth varieties over a field, integral motivic cohomology H(p,q) vanishes when q ≥ 0 and p &gt; 2q.

**How the definition helps.** Our own deduction uses the absence of chains in negative degrees. If p exceeds 2q, the required homology degree is negative. Voevodsky’s comparison theorem identifies this cycle calculation with the alternative definition using complexes of sheaves.

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “Hᵖ,ᑫ(X,ℤ) = CHᑫ(X,2q−p).”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Derived coefficients retain roots of unity

**Remember:** Reducing the complex keeps the kernel of the power map.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** To compute motivic cohomology modulo n, replace ℤ/n by two copies of ℤ in degrees −1 and 0. Multiplication by n connects them. Tensor this complex with the integral coefficients for the chosen weight.

**Problem.** For every field k and n ≥ 2, H(0,1) with ℤ/n coefficients is the group of n-th roots of unity in k.

**How the definition helps.** Reducing the complex keeps the kernel of multiplication by n one degree below the units. The weight-one comparison theorem identifies the integral coefficient complex with invertible functions placed in degree one. Our own calculation over a field therefore gives the n-th power map on its nonzero elements. Its kernel consists of the n-th roots of unity. Over ℂ these roots survive even though the integral degree-zero group vanishes.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “The theories with different coefficients are related by the universal coefficient theorem, as in topology.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Nisnevich squares give motivic excision

**Remember:** Keep the complement unchanged and the square gives excision.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14F20. arXiv math.AG. Level 3: graduate.

**Definition.** Choose an open subset U of a smooth variety X over a field and an étale map V → X, an algebraic local isomorphism. Require V to agree with X over the closed complement after discarding nilpotent functions there. Write W for the inverse image of U in V. These four spaces form a distinguished Nisnevich square, one of the squares used to impose gluing on motives.

**Problem.** Writing M for the motive of a space, gluing gives an exact triangle M(W) → M(U) ⊕ M(V) → M(X) → M(W)\[1\]. The last term shifts M(W) by one degree.

**How the definition helps.** The complement condition makes this a gluing square, so the motive of X is the derived quotient of the two pieces by their overlap. Our own example drops that condition, taking U empty and extending the real field to the complex field. After base change to ℂ, the proposed cover has two points over one point. The triangle would identify two copies of the unit motive with one. Proving that the cycle construction satisfies this gluing rule is a separate descent theorem.

**nLab:** [motive](https://ncatlab.org/nlab/show/motive). It says: “whose underlying presheaves on Sm/S are (∞,1)-sheaves for the Nisnevich topology”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### The diagonal gives cup products

**Remember:** Tensor the classes, then pull them back along the diagonal.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C25. arXiv math.AG. Level 3: graduate.

**Definition.** For a smooth variety X over a perfect field, its motive M(X) represents its algebraic cohomology. Represent a class of weight q and degree p by a map to the coefficient object ℤ(q) shifted by p. Tensor two such maps and compose with the map induced by the diagonal from X to X × X. This defines their cup product.

**Problem.** Motivic cup products are associative and commute with sign (−1) to the power pp′ for classes of cohomological degrees p and p′.

**How the definition helps.** Repeating the diagonal sends x to (x,x,x) in either order, so the two ways to multiply three classes agree. Exchanging the factors also preserves the diagonal. Our own sign calculation uses the symmetry of shifted complexes, which contributes a minus sign precisely when both degrees are odd. The comparison with intersections of algebraic cycles requires a theorem allowing the cycles to move.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the motivic cohomology groups Hⁱ(X,ℤ(j)) form a bigraded ring for every scheme X of finite type over a field.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Weight one gives units and line bundles

**Remember:** Weight one shifts the units sheaf up one degree.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** On a smooth variety X over a field, a unit is a regular function with a regular multiplicative inverse. Units on open sets form a sheaf, meaning compatible local functions glue uniquely. In weight one, use this sheaf as a complex concentrated in degree one. Its cohomology on X in degree p gives motivic cohomology H(p,1).

**Problem.** The group H(1,1) is the group of global units, and H(2,1) is the group of line bundles up to isomorphism.

**How the definition helps.** The one-term model makes H(p,1) ordinary cohomology of the units sheaf in degree p − 1. Degree zero gives global units. Our own explanation of degree one uses the transition functions that glue trivial line bundles together. The comparison theorem identifies this model with Voevodsky’s complex built from algebraic cycles.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the shift \[−1\] means that this sheaf is viewed as a complex in degree 1.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Extra terms force holomorphic flatness

**Remember:** Keeping the next form forces the connection form to be closed.

*Rules out counterexamples.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 53C08. arXiv math.AG, math.DG. Level 3: graduate.

**Definition.** In weight two, a holomorphic Deligne cocycle for a line bundle uses holomorphic frame changes and local holomorphic connection forms. Weight three adds the exterior derivative from one-forms to two-forms.

**Problem.** Degree-two holomorphic Deligne classes in weight three classify holomorphic line bundles with flat holomorphic connection up to isomorphism. Weight two classifies all holomorphic line bundles with holomorphic connection.

**How the definition helps.** The extra derivative forces each local connection form to be closed, exactly the flatness condition (our own). On the trivial line over ℂ², the form z dw has nonzero derivative dz∧dw and therefore works only in weight two (our own). Gluing the local frames and connections gives the classification (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “using holomorphic differential forms”

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “For q = p = 2, it is the group of isomorphism classes of C×-bundles with connection.”

**Sources:**

- [Helmut Hamm and Lê Dũng Tráng, Picard groups for line bundles with connections, Lemma 1.13.](https://doi.org/10.5427/jsing.2018.18j)

### Finite coefficients erase the Hodge term

**Remember:** Reducing modulo m leaves the lattice and removes the forms.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** The weight p analytic Deligne complex starts with the constants (2πi)ᵖℤ, followed by holomorphic functions and forms through degree p−1. Its cohomology accounts for gluing local sections. Reduction with finite coefficients takes the cone of multiplication by m on this complex.

**Problem.** On a complex manifold, weight p Deligne cohomology with coefficients modulo m equals ordinary cohomology with coefficients (2πi)ᵖℤ modulo m, for p,m ≥ 1.

**How the definition helps.** Using the truncated holomorphic complex makes reduction termwise because all its terms are flat over ℤ (our own). Multiplication by m is invertible on forms, including functions, so only the constants survive (our own). Comparison with the cone definition uses the holomorphic de Rham theorem (our own).

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “or of holomorphic forms, respectively”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §1.1](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### The Deligne cone gives the Jacobian kernel

**Remember:** The cone puts the period quotient one degree higher.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** The Deligne cone compares integral cochains scaled by (2πi)ᵖ with complex differential forms modulo Fᵖ. The Hodge filtration step Fᵖ keeps forms with at least p holomorphic factors. A cocycle records both an integral cochain and a witness that its image is a boundary.

**Problem.** On a smooth projective complex variety, degree 2p Deligne cohomology of weight p maps onto integral classes whose complex images have type (p,p). Its kernel is the intermediate Jacobian, the degree 2p−1 complex cohomology modulo Fᵖ and the image of scaled integral cohomology.

**How the definition helps.** The cone places the quotient defining the Jacobian directly in its exact sequence (our own). Passing from the truncated holomorphic complex to the cone uses the de Rham comparison theorem (our own). Hodge decomposition identifies the image in degree 2p, including integral torsion (our own).

**nLab:** [intermediate Jacobian](https://ncatlab.org/nlab/show/intermediate+Jacobian). It says: “is characterised as being the fiber of a canonical map from (complex analytic) Deligne cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §§2 and 7](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Weight one classifies line bundles

**Remember:** The exponential turns a two-term complex into transition functions.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** On a complex manifold, the weight one Deligne complex includes the constants 2πiℤ into the holomorphic functions. They sit in degrees zero and one. Deligne cohomology combines this complex with the gluing of local sections.

**Problem.** Degree two Deligne cohomology of weight one classifies holomorphic line bundles up to isomorphism, with addition corresponding to tensor product.

**How the definition helps.** Exponentiation replaces the two terms by nowhere-zero holomorphic functions in degree one without changing cohomology (our own). Local logarithms prove this replacement works (our own). Degree one classes of those functions give the transition functions that glue a line bundle (our own).

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “the group of isomorphism classes of smooth (or holomorphic, depending on the context) principal C×-bundles”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §1.4](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Constructible sets are exactly what images of morphisms produce

**Remember:** Images of varieties are not varieties, but they are constructible.

*Makes the theorem clean to state or prove.* MSC 14F45 (Topological properties in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A constructible set is a finite union of sets of the form U minus V, where U and V are retrocompact open sets. Retrocompact means that the intersection with every quasi-compact open set is quasi-compact, where quasi-compact means every open cover has a finite subcover. In a Noetherian space, these are the finite unions of locally closed sets.

**Problem.** Chevalley's theorem says that a finitely presented morphism of schemes sends locally constructible sets to locally constructible sets.

**How the definition helps.** The image of a variety need not be open, closed or a variety, so a larger class of sets is needed to state anything. The map (x, y) ↦ (x, xy) of the plane has as image the set where x is not 0, plus the origin, which is constructible but not locally closed. In general schemes the retrocompact condition is needed, and the page says the theorem fails without it. The proof, by induction on dimension with Noether normalization or generic flatness, stays real work (our own remark).

**Wikipedia:** [Constructible set (topology)](https://en.wikipedia.org/wiki/Constructible_set_%28topology%29). It says: “Chevalley's theorem in the generality stated above would fail if the simplified definition of constructible sets (without restricting to retrocompact open sets in the definition) were used.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, première partie, Publications Mathématiques de l'IHÉS 20 (1964), Théorème 1.8.4](https://doi.org/10.1007/BF02684747)

### Products over closed points make arithmetic zeta multiply over pieces

**Remember:** Partition the closed points, and the product splits into matching factors.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 11M41. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let X be a nonempty scheme of finite type over ℤ, such as the space given by finitely many polynomial equations with integer coefficients. A closed point x has a finite residue field, the field of values at that point. Define the arithmetic zeta function as the product of (1 − N(x)⁻ˢ)⁻¹ over closed points x, where N(x) is the field size.

**Problem.** If U is a closed part of X and V is its open complement, then ζ(X, s) = ζ(U, s)ζ(V, s). Also, ζ(X, s) is the product of the zeta functions of the reductions modulo all primes p. Both identities hold when the real part of s exceeds the dimension of X.

**How the definition helps.** The closed-point definition gives both product formulas by partitioning the set of factors. Each closed point belongs to exactly one piece and to exactly one reduction modulo a prime. The work moves into proving absolute convergence in the stated region, which justifies regrouping the infinite product (our own).

**Wikipedia:** [Arithmetic zeta function](https://en.wikipedia.org/wiki/Arithmetic_zeta_function). It says: “the zeta function of X is the product of the ones of the reduction of X modulo the primes p”

**Sources:** none listed. No primary source with a working link was found.

### Zeta coefficients count symmetric powers

**Remember:** An effective zero-cycle is a multiset of geometric points fixed by Frobenius.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over a finite field, a closed point corresponds to an orbit of geometric points under Frobenius, the map raising coordinates to the field size. An effective zero-cycle assigns nonnegative multiplicities to finitely many closed points. Its degree counts geometric points with multiplicities. Define the zeta series by counting these cycles by degree.

**Problem.** For a quasi-projective variety over a finite field, its nth zeta coefficient counts rational points of its nth symmetric power, which parametrizes unordered n-tuples.

**How the definition helps.** In our own explanation, a rational unordered tuple is precisely a multiset that Frobenius preserves. Multiplicities are constant on each orbit, so such tuples correspond to effective zero-cycles of degree n. The symmetric power realizes unordered tuples as a quotient by permutations. Grouping extension point counts by Frobenius orbits recovers the usual exponential formula for the zeta series.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “For X a quasi-projective variety over 𝔽q, Nᵣ(Symⁿ X) = φ(Nᵣ(X), N₂ᵣ(X), …, Nₙᵣ(X))”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### Zeta numerators count Jacobian points

**Remember:** At one, the zeta numerator counts rational divisor classes of degree zero.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 11G20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Take a smooth projective geometrically connected curve over a field of size q. Let F be the q-power Frobenius acting on the ℓ-adic Tate module of its Jacobian, for a prime ℓ different from the characteristic. The zeta numerator is det(1 − tF) on this module tensored with ℚ.

**Problem.** The value of this numerator at one equals the number of rational points of the Jacobian.

**How the definition helps.** Setting t equal to one gives det(1 − F), which the degree theorem identifies with the degree of the map 1 − F on the Jacobian (our own explanation). The differential of 1 − F is the identity, so its degree counts the points of its kernel. That kernel is exactly the set of rational points of the Jacobian. The cited comparison connects this numerator with the zeta function defined by counting points on the curve.

**Paper or page:** [The Torelli locus and Newton polygons](https://arxiv.org/abs/2509.00998). It says: “The characteristic polynomial of the Frobenius endomorphism of Jac(C) is P(Jac(C)/𝔽q,T) = T²ᵍL(C/𝔽q,T⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Brauer evaluations constrain rational points

**Remember:** Evaluations of a global point must cancel across all places.

*Makes the theorem clean to state or prove.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 14G05. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** For a variety over a number field, consider a point in each completion, with integral coordinates outside finitely many primes on a fixed integral model. A Brauer class assigns each local point a class of algebras with a numerical invariant in ℚ/ℤ. The Brauer–Manin set keeps exactly the families for which these invariants sum to zero for every Brauer class.

**Problem.** Every rational point gives a family in the Brauer–Manin set. An empty Brauer–Manin set therefore rules out a rational point even when points exist in every completion.

**How the definition helps.** The sum tests whether all local evaluations could come from one global point, in our own explanation. At a global point each local evaluation comes from the same algebra class over the number field. Global reciprocity says its local invariants sum to zero. The cited theorem gives examples for each odd prime p over number fields containing a primitive pth root of unity. In those examples a single class of order p obstructs rational points.

**Paper or page:** [Pullback Method with Applications to Severi-Brauer Fibrations](https://arxiv.org/abs/2410.15125v3). It says: “Moreover, the obstruction is captured by a single Brauer class of order p.”

**Sources:**

- [Pullback Method with Applications to Severi-Brauer Fibrations](https://arxiv.org/abs/2410.15125v3)

### Tate–Shafarevich detects Hasse failures

**Remember:** Keep the torsors that acquire an origin over every completion.

*True by definition.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 11G10. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** An abelian variety is a projective algebraic group. A torsor for it becomes a copy of the group acting by translations after extending the field. The Tate–Shafarevich group of the variety consists of torsor classes with points in every completion of the number field. These completions include real or complex fields at infinity and local fields at finite primes.

**Problem.** Every torsor with points in all completions has a point over the number field exactly when the Tate–Shafarevich group vanishes.

**How the definition helps.** The group collects exactly the torsors that pass every local test. A point over the number field supplies an origin and identifies the torsor with the group acting on itself. This is the zero class. Our own comparison uses the cohomological definition, which takes the kernel of restriction to all completions. The theorem classifying torsors by Galois cohomology identifies that kernel with the geometric description.

**Wikipedia:** [Tate–Shafarevich group](https://en.wikipedia.org/wiki/Tate%E2%80%93Shafarevich_group). It says: “the group measures the extent to which the Hasse principle fails to hold for rational equations”

**Sources:**

- [Serge Lang and John Tate, Principal Homogeneous Spaces Over Abelian Varieties (1958)](https://doi.org/10.2307/2372778)

### Connected groups have trivial finite-field torsors

**Remember:** Connected groups cannot hide a torsor from a finite field.

*Rules out counterexamples.* MSC 14G15 (Finite ground fields in algebraic geometry), 14G05. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** A torsor for an algebraic group is a space that becomes a copy of the group acting by translations over an algebraic closure. Over a finite field, require the group to be smooth and to remain connected over the algebraic closure.

**Problem.** Every torsor under a smooth connected algebraic group over a finite field has a rational point.

**How the definition helps.** Connectedness rules out torsors like the quadratic field extension, in our own explanation. That extension gives a torsor for the disconnected group of order two and has no point over the base field. For a smooth connected group, Lang’s theorem says every group element over the algebraic closure has the form g⁻¹F(g). Here F raises coordinates to the field size. This formula lets us translate a torsor point to one fixed by F, hence defined over the finite field.

**Wikipedia:** [Lang's theorem](https://en.wikipedia.org/wiki/Lang%27s_theorem). It says: “and, consequently, any G-bundle on Spec 𝔽q is isomorphic to the trivial one.”

**Sources:**

- [Serge Lang, Algebraic Groups Over Finite Fields (1956)](https://doi.org/10.2307/2372673)

### Tensor products count Weil restriction points

**Remember:** To count points of a Weil restriction, split the tensor product of fields.

*True by definition.* MSC 14G15 (Finite ground fields in algebraic geometry), 11T30. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Define Weil restriction of X from a field extension L to k by the functor of points. On a k-algebra R, its points are the points of X over R ⊗ₖ L. This replaces writing equations in a chosen basis of L over k.

**Problem.** Let X be quasi-projective over the degree d extension of 𝔽q. Let M count its points over the extension of 𝔽q of degree lcm(d,n). Over the degree n extension, its Weil restriction to 𝔽q has M raised to the power gcd(d,n) points.

**How the definition helps.** In our own deduction, the functor gives the desired count as soon as the tensor product splits into fields. The tensor product has gcd(d,n) factors, each of degree lcm(d,n) over the base field. Their embeddings of the defining field differ by Frobenius, so all factors give equal counts. The representability theorem supplies a variety with this prescribed functor of points.

**Wikipedia:** [Weil restriction](https://en.wikipedia.org/wiki/Weil_restriction). It says: “(In particular, the k-rational points of \\operatorname{Res}<sub>L/k</sub>X are the L-rational points of X.)”

**Sources:** none listed. No primary source with a working link was found.

### Group schemes retain supersingular torsion

**Remember:** One geometric point can carry many copies in its coordinate algebra.

*Makes the theorem clean to state or prove.* MSC 14G17 (Positive characteristic ground fields in algebraic geometry), 14H52. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** For an elliptic curve in characteristic p, define the kernel of multiplication by pⁿ using its equations, including any repeated solutions. This finite group scheme has length equal to the vector space dimension of its coordinate algebra. Call the curve supersingular if the origin is its only geometric point killed by p. Geometric points use coordinates in an algebraic closure.

**Problem.** For every positive integer n, this kernel has length p²ⁿ. On a supersingular elliptic curve, it has only one geometric point.

**How the definition helps.** The group scheme records multiplicities, so one geometric point can account for the entire length, in our own explanation. The degree theorem says multiplication by pⁿ has degree p²ⁿ and every fiber has that length. On a supersingular curve, a point killed by pⁿ must already be the origin, by repeatedly using the assertion for p.

**nLab:** [the Barsotti-Tate group of an abelian variety](https://ncatlab.org/nlab/show/the+Barsotti-Tate+group+of+an+abelian+variety). It says: “Then A(p) := ⋃ⱼ ker pʲ idₐ is a p-divisible group.”

**Wikipedia:** [Supersingular elliptic curve](https://en.wikipedia.org/wiki/Supersingular_elliptic_curve). It says: “an elliptic curve is supersingular if and only if the group of geometric points of order p is trivial.”

**Sources:** none listed. No primary source with a working link was found.

### Berkovich spectra give p-adic analytic spaces that are locally connected

**Remember:** A Berkovich point measures the size of functions, not just where they vanish.

*Rules out counterexamples.* MSC 14G22 (Rigid analytic geometry), 54D05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The Berkovich spectrum (analytic spectrum) of a normed ring A is the set of all non-zero bounded multiplicative seminorms on A. A seminorm is like a norm, but it can be zero on non-zero elements. The set has the weakest topology for which each map x ↦ \|a\|ₓ, for a in A, is continuous. Here \|a\|ₓ is the size that the point x gives to a.

**Problem.** Berkovich spaces, glued from the analytic spectra of affinoid algebras, are locally connected and even locally contractible. By contrast, domains in ℚₚⁿ with the subspace topology are totally disconnected.

**How the definition helps.** Berkovich changes what a point is, and with the new points the spaces are locally connected. With the p-adic topology, the naive analytic spaces are totally disconnected, so there is no analytic continuation. Tate's rigid geometry avoids this with a Grothendieck topology instead of a topological space. Local contractibility is a hard theorem; it does not follow from the definition.

**nLab:** [analytic spectrum](https://ncatlab.org/nlab/show/analytic+spectrum), [p-adic number](https://ncatlab.org/nlab/show/p-adic+number), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “Moreover, one may sensibly assign to an p-adic domain a topological space which is well behaved (in particular locally connected and even locally contractible), this is the analytic spectrum construction.”

**Sources:**

- [Vladimir G. Berkovich, Spectral Theory and Analytic Geometry over Non-Archimedean Fields, Mathematical Surveys and Monographs 33, American Mathematical Society (1990)](https://doi.org/10.1090/surv/033)

### Restricting which covers count gives analytic geometry over the p-adic numbers

**Remember:** Change which covers count, and a totally disconnected field gives connected spaces.

*Rules out counterexamples. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A rigid analytic space over a nonarchimedean field K, such as ℚₚ, is glued from affinoid spaces, the maximal spectra of quotients of Tate algebras of convergent power series. The gluing uses the G-topology, a Grothendieck topology in which only admissible open sets and admissible covers count.

**Problem.** In the G-topology, the closed unit disc over ℚₚ behaves as a connected space, and Tate's acyclicity theorem holds. So rigid analytic spaces have analytic continuation, coherent sheaves and a working sheaf theory.

**How the definition helps.** Tate changed which covers count, and this makes sheaf theory work again. ℚₚ is totally disconnected, so if all open covers count, locally constant functions are analytic and sheaf theory is useless. The connectedness of the disc and Tate's acyclicity theorem are standard facts, from Tate and Conrad, not from the nLab page. Berkovich later gave another fix with honest, locally contractible topological spaces.

**nLab:** [rigid analytic geometry](https://ncatlab.org/nlab/show/rigid+analytic+geometry), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “regarded with their subspace topology, fails, as also all these domains are totally disconnected.”

**Sources:**

- [John Tate, Rigid analytic spaces, Inventiones Mathematicae 12 (1971) 257–289](https://doi.org/10.1007/BF01403307)
- [Brian Conrad, Several approaches to non-archimedean geometry, in: p-adic Geometry, University Lecture Series 45, AMS (2008)](https://math.stanford.edu/~conrad/papers/aws.pdf)

### Finite covers detect Galois

**Remember:** If every cover stays fixed, every algebraic j-invariant stays fixed.

*Makes the theorem clean to state or prove.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** For the projective line minus 0, 1 and ∞ over the algebraic numbers, the geometric fundamental group classifies finite unbranched algebraic covers. Connected covers correspond to open subgroups up to conjugation.

**Problem.** Every nonidentity automorphism of the algebraic numbers over ℚ acts nontrivially on this fundamental group, even after ignoring conjugation.

**How the definition helps.** The cover description lets one moved curve detect a nontrivial action on the group. In our own argument, choose an algebraic number moved by the automorphism. Take an elliptic curve with that number as its j-invariant, the number classifying it over the algebraic numbers. Belyi’s theorem supplies a map branched only at 0, 1 and ∞. Isomorphic punctured covers would have isomorphic smooth compactifications, contradicting the different j-invariants.

**Paper or page:** [Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640). It says: “There is an injection Gal(ℚ) ↪︎ GT̂.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hiroaki Nakamura, Arithmetic and Combinatorics in Galois fundamental groups, §0 (2019)](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/2120-09.pdf)
- [Gennadiĭ Belyĭ, On Galois extensions of a maximal cyclotomic field (1980)](https://doi.org/10.1070/IM1980v014n02ABEH001096)

### Torsion bases remove automorphisms

**Remember:** A full torsion basis prevents any nonidentity change of coordinates.

*Rules out counterexamples.* MSC 14G35 (Modular and Shimura varieties), 11F23. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** Over ℂ, mark each elliptic curve with an ordered basis of its N-torsion, the points killed by N, for N ≥ 3. The j-invariant alone records the isomorphism class of a single unmarked curve.

**Problem.** For N ≥ 3, every family of elliptic curves with marked N-torsion bases is the pullback of one universal marked family, along a unique map. The j-line has no such universal family for unmarked curves.

**How the definition helps.** Every automorphism preserving the marking fixes the entire torsion basis and must be the identity (our own). Without markings, one can glue a constant family along a connected double cover using negation (our own). For a curve with only the automorphisms ±1, this gives a nonconstant twist with constant j (our own). Constructing the parameter curve and its universal family still requires the full-level moduli theorem (our own).

**nLab:** [modular curve](https://ncatlab.org/nlab/show/modular+curve). It says: “A modular curve is a moduli space of elliptic curves over the complex numbers equipped with level-n structure, for some n ∈ ℕ.”

**Sources:**

- [Nicholas M. Katz and Barry Mazur, Arithmetic Moduli of Elliptic Curves (1985)](https://doi.org/10.1515/9781400881710)

### Arithmetic principal divisors have degree zero

**Remember:** The finite and infinite contributions of a principal divisor cancel.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 11G50. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** For the ring of integers of a number field, an arithmetic divisor assigns integer coefficients to finite primes and real coefficients to embeddings into ℂ. Only finitely many prime coefficients are nonzero, and conjugate embeddings have equal coefficients. Its degree sums each prime coefficient times the logarithm of its residue field size, then adds all embedding coefficients. A nonzero element a gives a principal divisor with prime coefficients its orders of vanishing and embedding coefficients −log\|σ(a)\| for each embedding σ.

**Problem.** Every principal arithmetic divisor has degree zero. So the arithmetic degree is well defined on classes of arithmetic divisors.

**How the definition helps.** Including the embedding coefficients makes their sum cancel the degree of the finite divisor, in our own explanation. Counting finite primes alone gives the logarithm of the absolute field norm of a. The product formula identifies that number with the sum of log\|σ(a)\| over all embeddings. Each complex conjugate pair contributes twice. The resulting degree therefore depends only on the divisor class.

**nLab:** [arithmetic Chow group](https://ncatlab.org/nlab/show/arithmetic+Chow+group). It says: “pairs consisting of a codimension p subvariety of X together with a Green current for it.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://doi.org/10.1007/bf02699132)

### Forgetting currents recovers Chow groups

**Remember:** Lift rational relations to erase the cycle while keeping its remaining Green data.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An ordinary Chow class records an algebraic cycle, a formal sum of subvarieties, modulo divisors of rational functions on subvarieties. An arithmetic Chow class also records a Green current, a generalized differential form that compensates for integration along the cycle. Its relations lift each ordinary divisor relation by attaching the corresponding logarithm.

**Problem.** On a regular projective arithmetic variety, forgetting the Green current maps arithmetic Chow classes onto ordinary Chow classes. The kernel consists exactly of classes with zero cycle and a smooth form.

**How the definition helps.** Lifting the ordinary divisor relations lets us subtract them from an arithmetic representative until its cycle is zero (our own). Existence of Green currents gives surjectivity (our own). Analytic regularity replaces the remaining current by a smooth form modulo the derivatives allowed in the group (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “\\widetilde{C}<sup>2p-1</sup>(p)\\overset {\\operatorname{a}<sub>C</sub>}{\\longrightarrow } \\operatorname{\\widehat{CH}}<sup>p</sup>(\\mathcal{X},C) \\overset {\\zeta <sub>C</sub>}{\\longrightarrow } \\operatorname{CH}<sup>p</sup>(\\mathcal{X})\\to 0”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Green functions recover line metrics

**Remember:** The logarithmic part gives the divisor, and the smooth part gives the metric.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG. Level 3: graduate.

**Definition.** An arithmetic divisor pairs a divisor D, a formal sum of hypersurfaces, with a conjugation-invariant real function g off D. If f is a local equation for D, then g + log \|f\|² must extend smoothly. The first arithmetic Chow group identifies pairs differing by (div(u), −log \|u\|²) for a nonzero rational function u.

**Problem.** On a smooth projective integral variety over an arithmetic field, the first arithmetic Chern class identifies hermitian line bundles with arithmetic divisor classes.

**How the definition helps.** The logarithmic condition turns the singular function into a smooth metric in each local frame (our own). In the line bundle of D, give its canonical rational section squared norm exp(−g) (our own). Dividing the section by f gives a local frame with smooth positive squared norm exp(−g − log \|f\|²) (our own). Principal pairs change the rational section and preserve the resulting metric up to isometry (our own).

**Paper or page:** [Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1). It says: “The assignment (ℒ, ‖·‖) ↦ ĉ₁(ℒ, ‖·‖) defines a group isomorphism”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [Souvik Goswami and Rahul Gupta, Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1)

### Section changes preserve Chern classes

**Remember:** Record both the divisor and the norm of the section.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A hermitian line bundle assigns a smoothly varying norm to each complex fiber, compatibly with conjugation. Its first arithmetic Chern class records a rational section’s divisor of zeros and poles and its negative log squared norm. The arithmetic Chow group sets (div(u), −log \|u\|²) equal to zero for every nonzero rational function u.

**Problem.** On a regular integral arithmetic variety, every nonzero rational section of a hermitian line bundle gives the same first arithmetic Chern class.

**How the definition helps.** The quotient removes exactly the change that a new section introduces (our own). Multiplying a section by u adds div(u) to the divisor and subtracts log \|u\|² from the second entry (our own). The Poincaré–Lelong formula shows that the second entry has the singularities required by the first (our own).

**Wikipedia:** [Arakelov theory](https://en.wikipedia.org/wiki/Arakelov_theory). It says: “is the quotient of this group by the subgroup generated by certain "trivial" cycles.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)

### Zero mean fixes Green functions

**Remember:** The equation leaves one constant, and the mean fixes it.

*Rules out counterexamples. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A divisor D on a compact connected Riemann surface specifies point masses δ(D) of total integer weight deg(D). Choose a smooth positive area form μ of mass one. The normalized Green function has mean zero for μ and solves the Poisson equation with source deg(D)μ − δ(D).

**Problem.** Each divisor D has exactly one normalized Green function for μ.

**How the definition helps.** The mean condition removes the only freedom in solving the equation, an additive constant (our own). Without it, every constant solves the equation for the zero divisor (our own). Existence follows from the Poisson equation on a compact surface because the source has total mass zero (our own).

**nLab:** [Arakelov geometry](https://ncatlab.org/nlab/show/Arakelov+geometry). It says: “he defined the intersection numbers using the complementary piece at infinity.”

**Sources:**

- [Suren J. Arakelov, Intersection theory of divisors on an arithmetic surface (1974)](https://doi.org/10.1070/IM1974v008n06ABEH002141)

### Residue codes give evaluation duals

**Remember:** The residue theorem turns a dot product into zero.

*True by definition. Confidence: medium.* MSC 14G50 (Applications to coding theory and cryptography of arithmetic geometry), 11T71. arXiv math.AG. Level 3: graduate.

**Definition.** On a smooth projective geometrically connected curve over a finite field, let D sum distinct rational points outside a divisor G. The evaluation code reads functions f at those points when div(f) + G is nonnegative. The residue code reads residues of differentials ω for which div(ω) is at least G − D. Here div lists zero and pole orders, and the residue reads the coefficient of the inverse local parameter in a differential.

**Problem.** If 2g − 2 &lt; deg(G) &lt; deg(D), the residue code equals the ordinary dot-product dual of the evaluation code. Here g is the genus of the curve.

**How the definition helps.** In our own explanation, the residue description turns each dot product into a sum of residues of the differential fω. At each evaluation point, the residue of fω equals the value of f times the residue of ω. The product has no poles elsewhere. The residue theorem makes their sum zero. Riemann–Roch gives complementary dimensions, so the residue code fills the entire orthogonal complement. The quoted theorem gives the dimensions in the indicated degree range.

**Paper or page:** [Weierstrass Semigroup, Pure Gaps and Codes on Function Fields](https://arxiv.org/abs/2304.02128). It says: “Given the AG codes $C<sub>\\mathcal L</sub>(D, G)$ and $C<sub>\\Omega</sub>(D, G)$ with parameters $\[N, k, d\]$ and $\[N, k<sub>\\Omega</sub>, d<sub>\\Omega</sub>\]$ respectively, we have that if $2g-2&lt;{  deg}(G)&lt;N$, then
$$
k={  deg}(G)+1-g\\quad \\text{and}\\quad d\\geq N-{  deg}(G),
$$
and
$$k<sub>\\Omega</sub>=N-{  deg}(G)-1+g\\quad \\text{and}\\quad d<sub>\\Omega</sub>\\geq {  deg}(G)-(2g-2).
$$”

**Sources:** none listed. No primary source with a working link was found.

### Stability removes blowup models

**Remember:** Extra rational components with too few branches do not survive stabilization.

*Rules out counterexamples.* MSC 14H10 (Families, moduli of curves (algebraic)), 14G20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A model extends a curve from the fraction field of a discrete valuation ring to a proper flat family over the ring. Such a ring measures orders of vanishing in integer steps. For genus at least two, stability requires connected fibers with at most ordinary crossings. On each geometric fiber, every component of genus zero after normalization must contain at least three branches above crossings.

**Problem.** A smooth projective geometrically connected curve of genus at least two has at most one stable model up to unique isomorphism fixing the original curve.

**How the definition helps.** Stability excludes the extra models obtained by blowing up a smooth point of the special fiber, in our own explanation. For example, blowing up a rational smooth point inserts a projective line that meets the rest of the fiber only once. The new family still has only ordinary crossings, but this line violates stability. The uniqueness theorem for stable models handles all possible competing models.

**Paper or page:** [Moduli Curves](https://stacks.math.columbia.edu/tag/0E97). It says: “there exists a unique isomorphism X → X′ of models.”

**Sources:** none listed. No primary source with a working link was found.

### Stable curves give the Deligne–Mumford compactification of the moduli of curves

**Remember:** Allow nodes so that limits exist; forbid infinite symmetry so the stack stays Deligne–Mumford.

*Rules out counterexamples. Confidence: medium.* MSC 14H10 (Families, moduli of curves (algebraic)), 14D23. arXiv math.AG. Level 3: graduate.

**Definition.** A stable curve of genus g with n marked points is a connected curve with three properties. Its only singularities are nodes (points where two smooth branches cross). Its n marked points are smooth points, and its automorphism group is finite. The stack M̄(g, n) classifies these curves (for 2g − 2 + n &gt; 0).

**Problem.** The stack M̄(g, n) of stable curves is a smooth proper Deligne–Mumford stack that contains the stack M(g, n) of smooth curves. Deligne and Mumford used it to prove that M(g) is irreducible.

**How the definition helps.** Nodal curves fill in the missing limits of families, so the stack becomes proper. Requiring finite automorphisms excludes the unstable cases, which have infinite automorphism groups, so the stack stays Deligne–Mumford. Proving properness is still real work. Kontsevich's stable maps instead ask the map to have finite automorphisms, and their stack is proper but in general not smooth.

**nLab:** [basic ideas of moduli stacks of curves and Gromov-Witten theory](https://ncatlab.org/nlab/show/basic+ideas+of+moduli+stacks+of+curves+and+Gromov-Witten+theory), [Deligne-Mumford compactification](https://ncatlab.org/nlab/show/Deligne-Mumford+compactification), [stable map](https://ncatlab.org/nlab/show/stable+map). It says: “Deligne and Mumford were able to prove many theorems about the ordinary moduli space of curves by studying instead the compactification. For example they were able to prove that M<sub>g</sub>,n is irreducible.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)
- [William Fulton, Rahul Pandharipande, Notes on stable maps and quantum cohomology, 1996, arXiv:alg-geom/9608011](https://arxiv.org/abs/alg-geom/9608011)

### Arithmetic genus makes Riemann–Roch hold on singular Gorenstein curves

**Remember:** Use the genus from cohomology, and singular curves obey Riemann–Roch too.

*Makes the theorem clean to state or prove.* MSC 14H20 (Singularities of curves, local rings), 14C40, 13H10. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The arithmetic genus of a projective curve C over a field is the dimension of the first sheaf cohomology group H¹(C, 𝒪). For a smooth curve it equals the geometric genus, the number of independent holomorphic differentials. A Gorenstein curve is one whose local rings are Gorenstein rings, a mild kind of singularity that every plane curve has.

**Problem.** For a projective Gorenstein curve over an algebraically closed field, Riemann–Roch ℓ(D) − ℓ(K − D) = deg D − g + 1 holds with g the arithmetic genus, even when the curve has singular points.

**How the definition helps.** The arithmetic genus is defined by cohomology, so it is exactly the number that the cohomological proof of Riemann–Roch produces. The geometric genus does not see the singular points: a nodal plane cubic has geometric genus 0 and arithmetic genus 1, and only 1 makes the formula correct (our own example). The Gorenstein condition makes the dualizing sheaf a line bundle, so a canonical divisor K still exists (our own remark).

**Wikipedia:** [Riemann–Roch theorem](https://en.wikipedia.org/wiki/Riemann%E2%80%93Roch_theorem), [Arithmetic genus](https://en.wikipedia.org/wiki/Arithmetic_genus). It says: “the same statement as above holds, provided that the geometric genus as defined above is replaced by the arithmetic genus”

**Sources:**

- [Robin Hartshorne, Generalized divisors on Gorenstein curves and a theorem of Noether, Journal of Mathematics of Kyoto University 26 (1986) 375–386](https://doi.org/10.1215/kjm/1250520873)

### With arithmetic genus, every plane curve has genus (d−1)(d−2)/2

**Remember:** Degree alone fixes the arithmetic genus of a plane curve.

*Rules out counterexamples.* MSC 14H50 (Plane and space curves), 14H20. arXiv math.AG. Level 3: graduate.

**Definition.** The arithmetic genus of a projective curve is the dimension of H¹(C, 𝒪). The geometric genus is the genus of its smooth model. They agree on smooth curves.

**Problem.** An irreducible plane curve of degree d has arithmetic genus (d − 1)(d − 2)/2. With geometric genus the formula has exceptions at every singular curve.

**How the definition helps.** The arithmetic genus is computed from the cohomology of a degree d hypersurface in the plane, so it depends only on d and cannot see singular points. With the geometric genus, the nodal cubic y² = x²(x + 1) gives 0 instead of 1 (our own example). The page gives the correction: an ordinary singular point of multiplicity r lowers the geometric genus by r(r − 1)/2. The hard part of the classical theory is this correction count.

**Wikipedia:** [Genus–degree formula](https://en.wikipedia.org/wiki/Genus%E2%80%93degree_formula). It says: “If the curve is non-singular, then the geometric genus and the arithmetic genus are equal, but if the curve is singular, with only ordinary singularities, then the geometric genus is smaller.”

**Sources:** none listed. No primary source with a working link was found.

### A marked point is part of an elliptic curve

**Remember:** No marked point, no group.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Formally, an elliptic curve over a field K is a smooth projective curve of genus one with a distinguished point defined over K. The point is part of the data.

**Problem.** An elliptic curve is an abelian variety with the marked point as identity. Over a number field its rational points form a finitely generated group (the Mordell–Weil theorem).

**How the definition helps.** The marked point gives the identity, so the group law needs no further choice. A curve of genus one can have no rational point at all (our own example). Selmer's curve 3x³ + 4y³ + 5z³ = 0 has genus one and no rational points, so there is no group of rational points to study. Such a curve is a torsor under its Jacobian, an elliptic curve, and deciding whether it has a rational point stays hard (our own remark).

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “If P has degree four and is square-free this equation again describes a plane curve of genus one; however, it has no natural choice of identity element.”

**Sources:**

- [Ernst S. Selmer, The diophantine equation ax³ + by³ + cz³ = 0, Acta Mathematica 85 (1951) 203–362](https://doi.org/10.1007/BF02395746)

### Elliptic curves as lattice quotients have n² points killed by n

**Remember:** Dividing the lattice by n gives an n by n grid modulo the lattice.

*True by definition.* MSC 14H52 (Elliptic curves), 33E05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over ℂ, describe an elliptic curve as ℂ/Λ, with Λ the integer span of two real-linearly independent complex numbers. In this quotient, numbers differing by an element of Λ represent the same point. The cubic definition uses a nonsingular plane cubic with a distinguished origin and addition by chords and tangents.

**Problem.** For a positive integer n, the points P with nP = 0 form a group isomorphic to (ℤ/nℤ) × (ℤ/nℤ). Thus there are n² such points.

**How the definition helps.** The lattice quotient definition turns nP = 0 into a divisibility test: the class of z is killed by n exactly when nz lies in Λ. In a lattice basis, z then has coordinates in (1/n)ℤ modulo ℤ, which gives two independent coordinates in ℤ/nℤ (our own computation). A cubic calculation would instead need to control the polynomial equations for multiplication by n. The work moves into identifying the complex cubic and its addition with the lattice quotient.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “This also allows an easy understanding of the torsion points on an elliptic curve: if the lattice Λ is spanned by the fundamental periods ω₁ and ω₂, then the n-torsion points are the (equivalence classes of) points of the form”

**Sources:** none listed. No primary source with a working link was found.

### Excluding singular cubics makes rational points finitely generated

**Remember:** Cusps and nodes give groups too large to be finitely generated.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An elliptic curve y² = x³ + ax + b must be non-singular. When the characteristic is not 2 or 3, this holds exactly when 4a³ + 27b² is not zero.

**Problem.** The Mordell–Weil theorem says that the group of rational points of an elliptic curve over ℚ is finitely generated.

**How the definition helps.** The non-singular condition rules out cubics whose groups are the additive or multiplicative group of ℚ, which are not finitely generated. On the cuspidal cubic y² = x³, the smooth rational points form a group isomorphic to ℚ under addition (our own example). On the nodal cubic y² = x²(x + 1), they form ℚ\* under multiplication (our own example). The proof of Mordell–Weil, with the weak theorem and heights, stays real work.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “The curve is required to be non-singular, which means that the curve has no cusps or self-intersections.”

**Sources:** none listed. No primary source with a working link was found.

### Points as ideal classes make the elliptic curve group law associative

**Remember:** Embed points in a known group, and associativity comes for free.

*True by definition.* MSC 14H52 (Elliptic curves), 13C20. arXiv cs.LO, math.AG. Level 3: graduate.

**Definition.** Let W be a Weierstrass curve over a field F, with coordinate ring F\[W\], the ring of polynomial functions on W. Send each nonsingular affine point (x, y) to the class of the ideal ⟨X − x, Y − y⟩ in the ideal class group Cl(F\[W\]). Send the point at infinity to the trivial class. The ideal class group is the group of invertible fractional ideals modulo principal ones.

**Problem.** The chord-and-tangent addition on the points of a Weierstrass elliptic curve over any field is associative, so the points form an abelian group.

**How the definition helps.** Points become elements of a group that is already known to be associative, so the group law is inherited. The paper's Lemma 8 shows that the map turns addition of points into multiplication of ideal classes. The quoted Lemma 11 says that the map is injective, so the abelian group axioms carry over from the class group. The proof works in any characteristic and avoids Riemann–Roch, and what stays hard is the injectivity, a computation with norms and degrees (our own remark).

**Paper or page:** [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic](https://arxiv.org/abs/2302.10640v2), [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic](https://arxiv.org/abs/2302.10640v2). It says: “The function W(F) → Cl(F\[W\]) is injective.”

**Sources:**

- [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic, arXiv:2302.10640 (2023)](https://arxiv.org/abs/2302.10640v2)

### Translation-defined Weil pairings take values in nth roots of unity

**Remember:** Translate n times and the product of the constant ratios is one.

*True by definition.* MSC 14H52 (Elliptic curves), 14K05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let n be invertible in the field, and let P and Q be points with nP = nQ = 0. Choose a function F with simple zeros at the points P + kQ and simple poles at the points kQ, for k modulo n. Then F(X + Q)/F(X) is a constant w(P, Q). Another definition evaluates two functions on two divisors and takes a ratio.

**Problem.** The Weil pairing computed by the translation definition takes values in the nth roots of unity.

**How the definition helps.** With the translation definition, the root-of-unity property is a telescoping product. Each translation by Q multiplies F by the same constant w (our own). So n translations multiply F by wⁿ (our own). Since nQ = 0, n translations return F to itself, so wⁿ = 1. With the divisor-ratio definition, wⁿ = 1 needs Weil reciprocity, a theorem about evaluating functions on divisors (our own). The work goes into showing that the two definitions agree (our own).

**Wikipedia:** [Weil pairing](https://en.wikipedia.org/wiki/Weil_pairing). It says: “then by construction G has the same divisor”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III, §8 (2009)](https://doi.org/10.1007/978-0-387-09494-6)

### Stability is exactly what lets a bundle come from a unitary representation

**Remember:** No subbundle may be steeper than the whole bundle.

*Rules out counterexamples.* MSC 14H60 (Vector bundles on curves and their moduli), 32L05. arXiv math.AG, math.DG. Level 3: graduate.

**Definition.** The slope of a vector bundle on a curve is its degree divided by its rank. A bundle is stable when every proper nonzero subbundle has strictly smaller slope. It is semistable when every such subbundle has slope at most that of the bundle.

**Problem.** A holomorphic vector bundle on a compact Riemann surface is stable exactly when it comes from an irreducible projective unitary representation of the fundamental group (Narasimhan–Seshadri).

**How the definition helps.** A unitary flat structure forbids subbundles of larger slope, and stability asks for exactly this (our own). A bundle from a unitary representation is semistable, and the paper shows that it is stable exactly when the representation is irreducible. For an excluded case, O(p) ⊕ O(−p) has degree 0 but a subbundle of degree 1, so no unitary representation gives it (our own). The converse is the hard direction, proved by Narasimhan and Seshadri in 1965 and later by Donaldson with differential geometry.

**Wikipedia:** [Narasimhan–Seshadri theorem](https://en.wikipedia.org/wiki/Narasimhan%E2%80%93Seshadri_theorem). It says: “says that a holomorphic vector bundle over a compact Riemann surface is stable if and only if it comes from an irreducible projective unitary representation of the fundamental group.”

**Paper or page:** [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1), [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1). It says: “If E is a stable holomorphic vector bundle on X of rank n and degree m, then there exists an irreducible representation ρ : π₁(X − x, y) → U(n) … such that E is isomorphic to E(ρ).”

**Sources:**

- [The Narasimhan-Seshadri Theorem revisited, arXiv:2509.24617v1 (2025)](https://arxiv.org/abs/2509.24617v1)
- [M. S. Narasimhan, C. S. Seshadri, Stable and unitary vector bundles on a compact Riemann surface, Annals of Mathematics 82 (1965)](https://doi.org/10.2307/1970710)

### Testing only Higgs-invariant subbundles lets unstable bundles solve Hitchin's equations

**Remember:** Test only the subbundles the Higgs field keeps.

*Rules out counterexamples.* MSC 14H60 (Vector bundles on curves and their moduli), 53C07, 53D30. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A Higgs bundle on a compact Riemann surface is a holomorphic bundle E with a holomorphic map φ from E to E ⊗ K, where K is the canonical bundle. It is stable if every φ-invariant proper subbundle has smaller slope; subbundles that φ does not preserve are not tested. It is polystable if it is a direct sum of stable Higgs bundles of the same slope.

**Problem.** A Higgs bundle (E, φ) is polystable exactly when E has a Hermitian metric whose Chern connection, together with the Higgs field, solves Hitchin's equations.

**How the definition helps.** Only φ-invariant subbundles can split off in a solution, so stability need only test those. On a surface of genus at least two, take L with L² = K; then L ⊕ L⁻¹ is unstable, since L has positive degree (our own). Let φ map L isomorphically onto L⁻¹ ⊗ K, which is L again (our own). Then L is not invariant, the Higgs bundle is stable, and Hitchin's solution gives the hyperbolic metric (our own).

**Paper or page:** [The Algebraic and Analytic Compactifications of the Hitchin Moduli Space](https://arxiv.org/abs/2304.08198), [The moduli space of solutions to the Extended Bogomolny equations on Σ×ℝ₊](https://arxiv.org/abs/2401.10999). It says: “A Higgs bundle (E,φ) is polystable if and only if there exists a Hermitian metric H such that the corresponding Chern connection A and Higgs field ϕ=φ+φ† solve the Hitchin equations”

**Sources:**

- [S. He, R. Mazzeo, X. Na and R. Wentworth, The Algebraic and Analytic Compactifications of the Hitchin Moduli Space, Moduli 1 (2024) e2](https://arxiv.org/abs/2304.08198)
- [N. J. Hitchin, The Self-Duality Equations on a Riemann Surface, Proceedings of the London Mathematical Society s3-55 (1987)](https://doi.org/10.1112/plms/s3-55.1.59)

### Defining isogeny degree by function fields makes degrees multiply under composition

**Remember:** Compose the maps, then multiply the degrees in the tower of fields.

*True by definition. Confidence: medium.* MSC 14K02 (Isogeny), 14K05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An isogeny is a surjective homomorphism of abelian varieties with finite kernel. Its degree is the degree of the extension of function fields that it induces by pullback. Counting points in the kernel gives only the separable degree, which misses inseparable maps such as Frobenius.

**Problem.** The degree of a composite of isogenies is the product of their degrees, also in positive characteristic.

**How the definition helps.** With the field definition, multiplicativity is the tower law for the fields K(C) ⊂ K(B) ⊂ K(A) (our own). A kernel count also multiplies, but it equals the degree only for separable isogenies (our own). For example, the p-power Frobenius of an elliptic curve has degree p and no nonzero kernel points (our own). To use the order of the kernel group scheme instead, one must first prove that it equals the field degree (our own).

**Wikipedia:** [Isogeny](https://en.wikipedia.org/wiki/Isogeny). It says: “The degree of the extension K(A) / im f\* is called degree of isogeny”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III (2009)](https://doi.org/10.1007/978-0-387-09494-6)

### Complete connected algebraic groups are automatically commutative

**Remember:** Completeness and connectedness force commutativity for algebraic groups.

*Rules out counterexamples.* MSC 14K05 (Algebraic theory of abelian varieties), 14L10. arXiv math.AG. Level 3: graduate.

**Definition.** An abelian variety over an algebraically closed field is a complete connected algebraic group. Complete means proper, which is the algebraic analogue of compact. For Mumford a variety is irreducible, so connectedness is part of the definition.

**Problem.** Every complete connected algebraic group over an algebraically closed field is commutative.

**How the definition helps.** Completeness lets the rigidity lemma apply, and the rigidity lemma forces commutativity. Roughly, the lemma says that a map out of a product with a complete variety that is constant on one slice is constant on every slice. Connectedness is needed, since a finite non-commutative group is a complete algebraic group. Non-complete groups such as GLₙ are not commutative, so completeness is what excludes them.

**nLab:** [abelian variety](https://ncatlab.org/nlab/show/abelian+variety). It says: “gives at least two proofs that every complete algebraic group over an algebraically closed field is automatically abelian.”

**Sources:**

- [David Mumford, Abelian varieties, Tata Institute of Fundamental Research Studies in Mathematics 5, Oxford University Press (1970)](https://wstein.org/edu/Fall2003/252/references/mumford-abvar/Mumford-Abelian_Varieties.pdf)

### Defining duals by pulling back line bundles makes duality reverse composition

**Remember:** Pull back bundles in reverse order, and the dual maps follow.

*True by definition.* MSC 14K05 (Algebraic theory of abelian varieties), 14K02. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The dual abelian variety parametrizes line bundles that are algebraically equivalent to the trivial bundle. The dual of a homomorphism f pulls these line bundles back along f. For elliptic curves, Silverman defines the dual of φ as the isogeny ψ with ψ ∘ φ equal to multiplication by deg φ.

**Problem.** The dual of g ∘ f is the dual of f composed with the dual of g.

**How the definition helps.** With the pullback definition, the claim is contravariance of pullback, since (g ∘ f)\* = f\* ∘ g\*. The work lies in showing that an abelian variety represents these line bundles (our own). With Silverman's definition, one checks that the reverse composite of duals composes with g ∘ f to give multiplication by deg(g ∘ f) (our own). Uniqueness of the dual then gives the claim (our own). That the two definitions agree for elliptic curves is a separate theorem (our own).

**Wikipedia:** [Dual abelian variety](https://en.wikipedia.org/wiki/Dual_abelian_variety). It says: “it is contravariant functorial”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III, §6 (2009)](https://doi.org/10.1007/978-0-387-09494-6)
- [James S. Milne, Abelian Varieties, §8](https://www.jmilne.org/math/CourseNotes/AV.pdf)

### Defining Weil restriction by points makes its Tate module an induced module

**Remember:** Each embedding of the larger field supplies one copy of the torsion data.

*True by definition. Confidence: medium.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 11F80. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let L be a finite separable extension of a field K, and A an abelian variety over L. Its Weil restriction is the variety over K whose points over a K-algebra R are the points of A over L ⊗ R. The ℓ-adic Tate module collects compatible systems of points killed by ℓⁿ, for ℓ prime to the characteristic. Expanding the equations of A in a basis of L gives the same variety but hides this description.

**Problem.** The Tate module of the Weil restriction of A is the Galois module induced from the Galois group of L to that of K. As a group, it is a sum of copies of the Tate module of A, one for each embedding of L.

**How the definition helps.** The point-wise definition makes the torsion points of the Weil restriction the torsion points of A over L ⊗ Kˢ (our own). Here Kˢ is a separable closure of K. Since L is separable, L ⊗ Kˢ is a product of copies of Kˢ, one for each embedding of L (our own). Galois permutes these copies exactly as in an induced module (our own). Taking the limit over n gives the Tate module statement (our own). The work is the theorem that a variety represents this point functor (our own).

**nLab:** [Tate module](https://ncatlab.org/nlab/show/Tate+module). It says: “of the directed diagram given by kernels of the endomorphisms of A defined by multiplication by pⁿ”

**Sources:**

- [Siegfried Bosch, Werner Lütkebohmert and Michel Raynaud, Néron Models, §7.6 (1990)](https://doi.org/10.1007/978-3-642-51438-8)

### Néron's mapping property makes rational points extend by definition

**Remember:** Define the model by what maps into it, and points extend.

*True by definition.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 14G40. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let R be a Dedekind domain, such as the integers or a ring of p-adic integers, with fraction field K. A Néron model of a smooth separated K-scheme A is a smooth separated R-scheme whose fibre over K is A. Let X be any smooth separated R-scheme. Then every K-morphism from the fibre of X over K to A must extend uniquely to an R-morphism from X.

**Problem.** Every K-point of A extends uniquely to an R-point of its Néron model. A Néron model, if it exists, is unique up to unique isomorphism, so its fibre at each prime gives a well-defined reduction of A.

**How the definition helps.** Both statements follow at once from the universal property; for points, apply it to X = Spec R. The work moves into Néron's existence theorem for abelian varieties. Asking for a smooth model, not a proper one, is what makes it work, since a proper model of an elliptic curve with bad reduction has a singular fibre at the bad prime (our own remark). Néron models do not exist for the additive group.

**Wikipedia:** [Néron model](https://en.wikipedia.org/wiki/N%C3%A9ron_model). It says: “If a Néron model exists then it is unique up to unique isomorphism.”

**Sources:**

- [André Néron, Modèles minimaux des variétés abéliennes sur les corps locaux et globaux, Publications Mathématiques de l'IHÉS 21 (1964) 5–128](https://doi.org/10.1007/BF02684271)

### A universal-property Albanese makes an abelian variety its own Albanese

**Remember:** Once the variety is abelian, the identity map already does the job.

*True by definition.* MSC 14K30 (Picard schemes, higher Jacobians), 14K05. arXiv math.AG. Level 3: graduate.

**Definition.** The Albanese variety of a pointed variety X is an abelian variety with a pointed map from X. Every pointed map from X to an abelian variety must factor through it by a unique homomorphism. For smooth projective X one can instead build it as the dual of the Picard variety. The Picard variety is the abelian variety of line bundles algebraically equivalent to zero.

**Problem.** The Albanese variety of an abelian variety, pointed at its identity, is that same abelian variety.

**How the definition helps.** With the universal property, the identity map is the candidate, and one only checks that it is universal. This holds because every pointed map between abelian varieties is a homomorphism, by the rigidity lemma (our own). With the Picard construction, the claim instead needs biduality, the theorem that the dual of the dual of A is A (our own). For general X, the work goes into proving that the Albanese exists (our own).

**nLab:** [Albanese variety](https://ncatlab.org/nlab/show/Albanese+variety). It says: “Moreover, the Albanese variety of the Albanese variety is the Albanese variety.”

**Sources:**

- [James S. Milne, Abelian Varieties (course notes)](https://www.jmilne.org/math/CourseNotes/AV.pdf)

### The Lazard ring carries the universal formal group law by definition

**Remember:** Free coefficients, only the forced relations: that is the Lazard ring.

*True by definition.* MSC 14L05 (Formal groups, \\(p\\)-divisible groups), 55N22. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A one-dimensional commutative formal group law over a ring is a power series F(x, y) that behaves like a group operation: it is commutative, has a unit and is associative. The Lazard ring L is the commutative ring generated by symbols aᵢⱼ, divided by exactly the polynomial relations that make ℓ(x, y) = Σ aᵢⱼ xⁱ yʲ commutative, unital and associative. So ℓ is a formal group law over L by construction.

**Problem.** The Lazard ring L carries a universal one-dimensional commutative formal group law. That is, every formal group law over any ring R is the image of ℓ under exactly one ring map L → R.

**How the definition helps.** L is built from exactly the equations that a formal group law must satisfy, so universality is immediate. A formal group law over R is a choice of coefficients cᵢⱼ in R that satisfy those equations, so sending aᵢⱼ to cᵢⱼ gives a well-defined ring map, and the only one. The hard content is Lazard's theorem that L is a polynomial ring ℤ\[t₁, t₂, …\]. Quillen's theorem then says that L is the coefficient ring of complex cobordism MU.

**nLab:** [formal group](https://ncatlab.org/nlab/show/formal+group), [Lazard ring](https://ncatlab.org/nlab/show/Lazard+ring). It says: “But this is guaranteed by the vary choice of relations imposed in the definition of the Lazard ring.”

**Sources:**

- [Michel Lazard, Sur les groupes de Lie formels à un paramètre, Bulletin de la Société Mathématique de France 83 (1955) 251](https://doi.org/10.24033/bsmf.1462)
- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### As a group scheme, p-torsion always has order p²

**Remember:** Points can vanish, but the order of the group scheme stays p².

*Makes the theorem clean to state or prove.* MSC 14L15 (Group schemes), 14H52. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A group scheme is a scheme with multiplication, unit and inverse morphisms that satisfy the group laws. A finite flat group scheme has an order, the rank of its ring of functions as a module.

**Problem.** For an elliptic curve E over a field and a prime p, the p-torsion E\[p\] is a finite flat group scheme of order p². This holds in every characteristic, even when E\[p\] has fewer than p² points.

**How the definition helps.** The order counts the whole ring of functions, nilpotent functions included, so it stays constant in flat families. Over an algebraically closed field of characteristic p, a supersingular curve has only the identity as p-torsion point, and an ordinary curve has p. The missing points survive as infinitesimal parts of the group scheme. In characteristic p, the p-th roots of unity form a single point of order p (our own example).

**Wikipedia:** [Group scheme](https://en.wikipedia.org/wiki/Group_scheme). It says: “it is a finite flat group scheme of order p² that has either p connected components (if the curve is ordinary) or one connected component (if the curve is supersingular).”

**Sources:** none listed. No primary source with a working link was found.

### Commutative Hopf algebras as group objects make affine group points groups

**Remember:** Maps into a group object always form a group.

*True by definition.* MSC 14L15 (Group schemes), 16T05. arXiv math.QA, math.AG. Level 3: graduate.

**Definition.** Read a commutative Hopf algebra H over a commutative ring k as a group object among affine k-schemes, the opposite of the category of commutative k-algebras. Its comultiplication, counit and antipode give the multiplication, unit and inverse, with all arrows reversed.

**Problem.** Let H be a commutative Hopf algebra over k. For each commutative k-algebra R, the algebra maps H → R form a group, naturally in R.

**How the definition helps.** The maps from any object into a group object form a group, naturally in that object (our own). In the opposite category, these maps are the algebra maps H → R. The work moves into the fact that H ⊗ H is the coproduct of H with itself among commutative algebras, so Δ gives the multiplication (our own explanation). Concretely, the product of f and g is f ⋆ g = m ∘ (f ⊗ g) ∘ Δ.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A commutative Hopf monoid in a symmetric monoidal category V is the same as a group object in the opposite category CMon(V)ᵒᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Keeping only stable points gives group quotients that are varieties

**Remember:** Throw away the unstable points, and the quotient becomes a variety again.

*Rules out counterexamples. Confidence: medium.* MSC 14L24 (Geometric invariant theory), 14L30. arXiv math.AG. Level 3: graduate.

**Definition.** Let a reductive group (a group such as GLₙ) act on a projective variety, with a linearised ample line bundle L. A linearisation is a lift of the group action to L. A point is semistable if some invariant section of a positive power of L does not vanish at it. A point is stable if it is semistable, its orbit is closed in the semistable locus, and its stabiliser is finite.

**Problem.** Let a reductive group act on a projective variety with a linearised ample line bundle. Then the semistable points have a good quotient that is a projective variety, and on the stable points this quotient is geometric.

**How the definition helps.** Removing the unstable points removes the orbits that spoil the quotient. Naive orbit spaces are often not separated, because some orbits are not closed and lie in the closure of others. A good quotient is one whose functions are exactly the invariant functions, and a geometric quotient is one whose points are exactly the orbits. The good-quotient statements are Mumford's theorems, and the nLab only summarises them.

**nLab:** [geometric invariant theory](https://ncatlab.org/nlab/show/geometric+invariant+theory). It says: “such that the quotient stack on these is "close" to being represented by another projective variety”

**Sources:**

- [David Mumford, John Fogarty, Frances Kirwan, Geometric Invariant Theory, 3rd edition, Ergebnisse der Mathematik 34, Springer (1994; first edition by Mumford, 1965)](https://doi.org/10.1007/978-3-642-57916-5)

### Polystable orbits are exactly those that meet the moment map's zero set

**Remember:** Closed orbits, not stable ones, are where the moment map vanishes.

*Rules out counterexamples.* MSC 14L24 (Geometric invariant theory), 53D20. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A complex reductive group G, such as GLₙ(ℂ), acts linearly on a projective variety. A point is semistable if 0 is not in the closure of the orbit of a lift to the cone over the variety. It is polystable if that orbit is closed, and stable if it is also of finite stabilizer.

**Problem.** Let K be a maximal compact subgroup of G, with moment map μ. Then an orbit of G is polystable exactly when it meets μ⁻¹(0), and it then meets μ⁻¹(0) in a single K-orbit.

**How the definition helps.** Polystability picks exactly the closed orbits, and these are the orbits on which the length of the lifted vector has a minimum, where μ vanishes. Semistable is too weak (our own example): let ℂ\* act on ℙ² with weights 1, −1, 0; the point \[1:0:1\] is semistable, but μ is never zero on its orbit. Stable is too strong (our own example): \[0:0:1\] has stabilizer ℂ\*, but its orbit meets μ⁻¹(0). So the GIT quotient of the polystable points equals μ⁻¹(0)/K (our own).

**Paper or page:** [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966), [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966). It says: “A point x∈X is GIT polystable for the G action if and only if G·x intersects μ⁻¹(0). Furthermore, if x is polystable then G·x intersects μ⁻¹(0) is a unique K-orbit.”

**Sources:**

- [J. B. McCarthy, Stability conditions and canonical metrics, arXiv:2302.04966 (2023)](https://arxiv.org/abs/2302.04966)
- [G. Kempf and L. Ness, The length of vectors in representation spaces, Algebraic Geometry, Lecture Notes in Mathematics 732 (1979) 233–243](https://doi.org/10.1007/bfb0066647)

### Normality fills codimension-two holes

**Remember:** On a normal variety, a hole of codimension two hides no poles.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 13B22. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An affine integral variety has a coordinate ring that is a domain. It is normal if that ring contains each fraction satisfying a monic polynomial over the ring.

**Problem.** Remove a closed subset of codimension at least two from a normal affine integral variety. Every regular function on the remainder extends uniquely across the missing set.

**How the definition helps.** Normality makes it enough to test a fraction along the subsets of codimension one (our own explanation). The cited intersection theorem says that the local rings at these subsets together detect membership in the coordinate ring. In our own example, take the polynomials in ℚ\[x, y\] with no linear terms, a ring that is not normal. Off the origin, x³/x² and xy²/y² define the function x, but x is not in the ring.

**Paper or page:** [Algebra, Lemma 10.157.6.](https://stacks.math.columbia.edu/tag/031T). It says: “R = \\bigcap\\nolimits\_{\\text{height}(\\mathfrak p) = 1} R<sub>\\mathfrak p</sub>”

**Sources:** none listed. No primary source with a working link was found.

### Normality rules out finite birational maps that glue or pinch

**Remember:** A normal variety cannot be simplified by a finite birational map.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 14E05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A variety is normal if each local ring is an integrally closed domain. A domain is integrally closed if each root in its fraction field of a monic polynomial over it lies in the domain. A morphism is birational if it is an isomorphism between dense open subsets.

**Problem.** Zariski's main theorem says that a birational morphism with finite fibres to a normal variety is an isomorphism onto an open subset. A related form says that a normal point has only one branch.

**How the definition helps.** For finite maps, the statement is almost the definition. A finite birational map gives a ring extension, finitely generated as a module, inside the same fraction field, and an integrally closed ring has no proper such extension (our own). The page gives two bad cases: the cuspidal cubic is pinched, and the nodal cubic glues two points of the line. The real content of Zariski's theorem is for maps with finite fibres that are not finite.

**Wikipedia:** [Normal scheme](https://en.wikipedia.org/wiki/Normal_scheme), [Zariski's main theorem](https://en.wikipedia.org/wiki/Zariski%27s_main_theorem). It says: “the cuspidal cubic curve X in the affine plane A² defined by x² = y³ is not normal, because there is a finite birational morphism A¹ → X (namely, t maps to (t³, t²)) which is not an isomorphism.”

**Sources:**

- [Oscar Zariski, Foundations of a general theory of birational correspondences, Transactions of the American Mathematical Society 53 (1943) 490–542](https://doi.org/10.1090/S0002-9947-1943-0008468-9)
- [Oscar Zariski, Some results in the arithmetic theory of algebraic varieties, American Journal of Mathematics 61 (1939) 249–294](https://doi.org/10.2307/2371499)

### Plücker coordinates make the Grassmannian a projective variety

**Remember:** A subspace becomes one wedge, up to scale.

*Makes the theorem clean to state or prove.* MSC 14M15 (Grassmannians, Schubert varieties, flag manifolds), 15A75. arXiv math.AG, math.RA. Level 3: graduate.

**Definition.** The Grassmannian Gr(k, V) is the set of k-dimensional subspaces of V. The Plücker map sends a subspace W with basis w₁, …, wₖ to the line through w₁ ∧ ⋯ ∧ wₖ.

**Problem.** The Plücker map is injective, so the Grassmannian is a subset of projective space. Its image is cut out by homogeneous quadratic equations, the Plücker relations, so the Grassmannian is a projective algebraic variety.

**How the definition helps.** The wedge of a basis changes only by the determinant of the change of basis, so a subspace gives a well-defined point in projective space. Different subspaces give different points, since W is recovered as the vectors whose wedge with the point is zero (our own). This turns a set of subspaces into a set of points that equations can describe. Plücker first used it for lines in three-dimensional space, whose image is the Klein quadric. What stays hard is proving that the quadratic Plücker relations cut out exactly the decomposable wedges.

**Wikipedia:** [Plücker embedding](https://en.wikipedia.org/wiki/Pl%C3%BCcker_embedding), [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “This is an embedding of the Grassmannian into the projectivization ℙ(⋀ᵏ V). The image can be completely characterized as the intersection of a number of quadrics, the Plücker quadrics”

**Sources:** none listed. No primary source with a working link was found.

### Counting roots in the torus makes the Bernstein–Kushnirenko count exact

**Remember:** Leave out the coordinate axes, and polytope volumes count roots exactly.

*Makes the theorem clean to state or prove.* MSC 14M25 (Toric varieties, Newton polyhedra, Okounkov bodies), 52A39. arXiv math.AG, math.MG. Level 3: graduate.

**Definition.** A Laurent polynomial may have negative exponents. Its Newton polytope is the convex hull of its exponent vectors. The algebraic torus is the set of points in ℂⁿ with all coordinates nonzero.

**Problem.** Take n Laurent polynomials in n unknowns, with generic coefficients for their given exponents. Then the number of solutions in the torus equals the mixed volume of their Newton polytopes. Here the mixed volume is scaled so that n copies of one polytope give n! times its volume.

**How the definition helps.** In the torus, multiplying an equation by a monomial does not change its solutions, just as shifting a polytope does not change volumes. In ℂⁿ, multiplying f by x adds the whole hyperplane x = 0 to the solutions, so no polytope count could be exact there (our own example). Bézout's bound, the product of the degrees, is often much larger than the true number for sparse systems. Our own remark: the proofs use toric compactifications or tropical degenerations.

**Wikipedia:** [Bernstein–Kushnirenko theorem](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Kushnirenko_theorem). It says: “the number of nonzero complex solutions of a system of Laurent polynomial equations f₁ = ⋯ = fₙ = 0 is equal to the mixed volume of the Newton polytopes of such polynomials”

**Sources:**

- [David N. Bernstein, The number of roots of a system of equations, Functional Analysis and Its Applications 9 (1975) 183–185](https://doi.org/10.1007/BF01075595)
- [A. G. Kouchnirenko, Polyèdres de Newton et nombres de Milnor, Inventiones Mathematicae 32 (1976) 1–31](https://doi.org/10.1007/BF01389769)

### Requiring normality makes toric varieties correspond exactly to fans

**Remember:** Normal toric varieties are fans, and fans are normal toric varieties.

*Rules out counterexamples.* MSC 14M25 (Toric varieties, Newton polyhedra, Okounkov bodies). arXiv math.AG. Level 3: graduate.

**Definition.** A toric variety contains an algebraic torus as a dense open set, and the torus action on itself extends to the whole variety. A fan is a set of strongly convex rational polyhedral cones, closed under taking faces, in which two cones meet in a common face. Some authors also require a toric variety to be normal.

**Problem.** Normal toric varieties are in one-to-one match with fans.

**How the definition helps.** The toric variety built from a fan is always normal, as the page says, so requiring normality makes the correspondence exact. Each cone gives a semigroup ring that is integrally closed (our own remark). The cuspidal cubic y² = x³ contains the torus as the points (t², t³), and the action extends, but this curve is not normal (our own example). The hard work that stays is the classification of fans themselves.

**Wikipedia:** [Toric variety](https://en.wikipedia.org/wiki/Toric_variety). It says: “This correspondence is called the fundamental theorem for toric geometry, and it gives a one-to-one correspondence between normal toric varieties and fans of strongly convex rational cones.”

**Sources:**

- [Michel Demazure, Sous-groupes algébriques de rang maximum du groupe de Cremona, Annales scientifiques de l'École Normale Supérieure 3 (1970) 507–588](https://doi.org/10.24033/asens.1201)
- [G. Kempf, F. Knudsen, D. Mumford, B. Saint-Donat, Toroidal Embeddings I, Lecture Notes in Mathematics 339 (1973)](https://doi.org/10.1007/BFb0070318)

### Four marks give quantum associativity

**Remember:** Two splittings of the same four marks give two bracketings.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG, math.SG. Level 3: graduate.

**Definition.** On a smooth complex projective variety, the small quantum product a ∗ b is the class whose intersection pairing with each class c is a sum over curve classes β. The term for β is the genus-zero three-point Gromov–Witten invariant ⟨a, b, c⟩\_β times a formal weight, and the weights multiply when the curve classes add.

**Problem.** The small quantum product of a smooth complex projective variety is associative.

**How the definition helps.** The three-point definition lets one state the four-point splitting identity as associativity (our own). Each bracketing gives the contribution from one way a four-marked sphere splits into two spheres (our own). The parameter space of stable four-marked spheres is a projective line, where the two boundary points have equal cohomology classes (our own). The splitting theorem identifies each boundary contribution with the corresponding pair of three-point counts (our own).

**Paper or page:** [Gromov-Witten invariants in family and quantum cohomology](https://arxiv.org/abs/2408.06616v2). It says: “T<sub>i</sub>\*(T<sub>j</sub> \* T<sub>k</sub>)\\  =\\  (T<sub>i</sub> \*T<sub>j</sub>)\*T<sub>k</sub>.”

**Sources:**

- [Gromov-Witten invariants in family and quantum cohomology](https://arxiv.org/abs/2408.06616v2)
- [Fulton and Pandharipande, Notes on stable maps and quantum cohomology](https://doi.org/10.1090/pspum/062.2/1492534)

### Stability removes infinite component symmetries

**Remember:** Three special points fix a contracted sphere.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG. Level 3: graduate.

**Definition.** Consider a map from a connected projective marked complex curve whose only singularities are nodes, where two branches cross. Marks are distinct smooth points. Call the map stable if only finitely many domain symmetries preserve it and every mark. On each smooth component obtained by separating the branches, count the marks and branches at nodes as special points.

**Problem.** Stability holds exactly when every contracted genus-zero component has at least three special points and every contracted genus-one component has at least one. A component is contracted when its image is a point.

**How the definition helps.** The special points rule out infinite symmetry groups on contracted components. A sphere with one attaching point still has infinitely many symmetries fixing that point (our own). Three points fix a sphere, and one point removes translations of a genus-one curve (our own). Higher-genus smooth curves already have finite symmetry groups (our own). On a nonconstant component, symmetries act faithfully on the finite function field extension over its image (our own).

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “The above stability condition is then equivalent to saying that the group of automorphisms of f is finite.”

**Sources:**

- [Fulton and Pandharipande, Notes on stable maps and quantum cohomology](https://doi.org/10.1090/pspum/062.2/1492534)

### Real radical ideals are determined by their real zeros

**Remember:** A real radical ideal contains every polynomial that vanishes on its real zeros.

*Rules out counterexamples.* MSC 14P05 (Real algebraic sets), 13A15. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An ideal is radical if it contains f whenever it contains a positive power of f. A real radical ideal satisfies a stronger test. Whenever a sum of polynomial squares belongs to the ideal, each polynomial in that sum must itself belong before squaring.

**Problem.** Let I be a real radical ideal in a polynomial ring in finitely many variables over ℝ. Then I consists exactly of the polynomials vanishing on all common real zeros of I.

**How the definition helps.** The extra condition captures a rule obeyed by real zeros, in our own explanation. When a sum of real squares vanishes at a point, every term vanishes there. The real Nullstellensatz proves this condition suffices for a radical ideal to contain every polynomial vanishing on its real zeros. In our own example, the prime ideal (x² + y²) in ℝ\[x, y\] is radical. Its only real zero is the origin, but the ideal contains neither x nor y.

**Wikipedia:** [Real radical](https://en.wikipedia.org/wiki/Real_radical). It says: “However, one can recover a similar theorem, the real Nullstellensatz, by using the real radical in place of the (ordinary) radical.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing inequalities makes projections of real algebraic sets stay in the class

**Remember:** Shadows of curves need inequalities to describe them.

*Rules out counterexamples.* MSC 14P10 (Semialgebraic sets and related spaces), 03C64, 03C10. arXiv math.AG, math.LO. Level 3: graduate.

**Definition.** A semialgebraic set in ℝⁿ is a finite union of sets, each defined by finitely many polynomial equations and strict polynomial inequalities.

**Problem.** The Tarski–Seidenberg theorem: the projection of a semialgebraic set is semialgebraic. Equivalently, the theory of real closed fields has quantifier elimination.

**How the definition helps.** Projection is an existential quantifier, and its result needs inequalities, so a class with inequalities can be closed under projection. The counterexample is the hyperbola xy = 1. It projects to the set x ≠ 0, which is semialgebraic but not algebraic. The same example works over the complex numbers, where one uses ≠ to get quasialgebraic sets. What stays hard is the elimination itself, which Tarski did with a generalized Sturm's theorem (our own).

**Wikipedia:** [Tarski–Seidenberg theorem](https://en.wikipedia.org/wiki/Tarski%E2%80%93Seidenberg_theorem). It says: “If we only define sets using polynomial equations and not inequalities then we define algebraic sets rather than semialgebraic sets. For these sets the theorem fails, i.e. projections of algebraic sets need not be algebraic.”

**Sources:**

- [Seidenberg, A. (1954). A new decision method for elementary algebra. Annals of Mathematics 60, 365–374.](https://doi.org/10.2307/1969640)

### The tropical hypersurface is where the minimum is attained twice

**Remember:** To cancel, the smallest terms must tie; the theorem says ties suffice.

*True by definition.* MSC 14T10 (Foundations of tropical geometry and relations with algebra), 14T20. arXiv math.AG. Level 3: graduate.

**Definition.** Tropicalization replaces each coefficient of a Laurent polynomial by its valuation, and sums and products by minimum and plus. The tropical hypersurface is the set of points where the minimum among the terms is attained at least twice. A variety in a torus over a valued field has three candidate tropical varieties: from these hypersurfaces, from initial ideals, or from the closure of the image of the valuation map.

**Problem.** Over an algebraically closed field with a nontrivial valuation, the three definitions of the tropical variety agree. For a hypersurface this is Kapranov's theorem: the closure of the valuations of the solutions is exactly the tropical hypersurface.

**How the definition helps.** The 'attained twice' definition makes one inclusion obvious. At a solution of f = 0 the terms must cancel, and terms with one strictly smallest valuation cannot cancel. The work moves to the other inclusion, that every tie comes from actual solutions. For other varieties, the hypersurfaces of a generating set of the ideal can cut out too big a set, since a generating set need not be a tropical basis.

**Wikipedia:** [Tropical geometry](https://en.wikipedia.org/wiki/Tropical_geometry). It says: “The equivalence of these definitions is referred to as the Fundamental Theorem of Tropical Geometry.”

**Sources:**

- [Manfred Einsiedler, Mikhail Kapranov, Douglas Lind, Non-archimedean amoebas and tropical varieties, Journal für die reine und angewandte Mathematik 601 (2006) 139–157, arXiv math/0408311](https://arxiv.org/abs/math/0408311)

### If 𝔽₁-modules are pointed sets, K(𝔽₁) is the sphere spectrum

**Remember:** Over 𝔽₁, a vector space is just its basis plus a zero point.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 19D23, 55P42. arXiv math.AG, math.KT. Level 4: research.

**Definition.** This entry uses one proposal for the 'field with one element' 𝔽₁. In it, a finite-dimensional vector space over 𝔽₁ is a pointed finite set (a finite set with one marked point that plays the role of zero). Then GL(n, 𝔽₁) is the symmetric group Σₙ.

**Problem.** If finite-dimensional 𝔽₁-vector spaces are pointed finite sets, then the algebraic K-theory K(𝔽₁) is the sphere spectrum 𝕊. So algebraic K-theory over 𝔽₁ is stable cohomotopy.

**How the definition helps.** With this definition, K(𝔽₁) is by definition the K-theory of the permutative category of finite sets. The real content is the Barratt–Priddy–Quillen theorem, in Segal's form, which says that this K-theory is 𝕊. The page says that this is only one proposal. Connes and Consani use Γ-sets instead, and K(𝔽₁) is still 𝕊 there.

**nLab:** [field with one element](https://ncatlab.org/nlab/show/field+with+one+element), [K-theory of a permutative category](https://ncatlab.org/nlab/show/K-theory+of+a+permutative+category). It says: “With the identification 𝔽₁ Mod ≃ FinSet∗/ from above it follows that the algebraic K-theory over 𝔽₁ is stable cohomotopy”

**Sources:**

- [Chenghao Chu, Oliver Lorscheid, Rekha Santhanam, Sheaves and K-theory for 𝔽₁-schemes, Advances in Mathematics 229 (2012), arXiv:1010.2896](https://arxiv.org/abs/1010.2896)
- [Anton Deitmar, Remarks on zeta functions and K-theory over F1, 2006, arXiv:math/0605429](https://arxiv.org/abs/math/0605429)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Treat Spec A as a locale or ∞-topos, not a topological space

**Remember:** Keep the lattice of opens of Spec A; forget whether it has enough points.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 18F70, 18N60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Regard the spectrum of a commutative ring A as a locale, a lattice of opens that need not come from points. The basic opens U(f), for f in A, generate it. More generally, regard it as the ∞-topos of sheaves on this locale, and a scheme as a structured ∞-topos that is locally of this form.

**Problem.** This definition of Spec A needs no axiom of choice, works in relative situations and extends to the étale topology. Its 0-truncated, 0-localic schemes are exactly the ordinary schemes (Lurie, Structured Spaces, Proposition 4.2.9).

**How the definition helps.** The locale keeps all the open sets even when points are missing, so one definition covers all three cases (our own reading). The locale has enough points exactly when every non-zero commutative ring has a prime ideal, and this needs the axiom of choice. In relative situations the construction can lack enough points even with choice, but its sheaf theory still behaves well. For the étale topology a space is not enough, because subobjects of the terminal object do not generate étale sheaves.

**nLab:** [scheme as a locally affine structured (infinity,1)-topos](https://ncatlab.org/nlab/show/scheme+as+a+locally+affine+structured+%28infinity%2C1%29-topos). It says: “it is in some sense coincidental that Spec A is described by a topological space. What arises more canonically is the lattice of open subsets of Spec A”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces (2009), arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Gluing a formal model to its generic fibre works for algebraic spaces

**Remember:** Glue in algebraic spaces when schemes do not suffice.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14G22, 14D15. arXiv math.AG. Level 4: research.

**Definition.** An algebraic space is a quotient of a scheme by an étale equivalence relation, where étale means locally isomorphic in the algebraic sense. Let 𝒪 be a complete discrete valuation ring with fraction field K. A gluing triple has an algebraic space U over K and a formal algebraic space 𝔛 over 𝒪. It also has an open immersion of the rigid generic fibre of 𝔛 into the analytic space of U.

**Problem.** Over a complete discrete valuation ring, separated gluing triples are equivalent to separated algebraic spaces of locally finite type. Some gluings give an algebraic space that is not a scheme, even when U and the special fibre are projective.

**How the definition helps.** Algebraic spaces form a large enough category for every gluing triple to have a result, so the equivalence holds. Matsumoto's examples show that schemes are not enough. The abstract says the proof combines Nagata compactification for algebraic spaces with Artin's contraction theorem.

**Paper or page:** [Beauville-Laszlo gluing of algebraic spaces](https://arxiv.org/abs/2410.20500v1), [Beauville-Laszlo gluing of algebraic spaces](https://arxiv.org/abs/2410.20500v1). It says: “Examples due to Matsumoto imply that the result of such a gluing might be a genuine algebraic space (not a scheme) even if U and the special fiber of 𝔛 are projective.”

**Sources:**

- [Piotr Achinger, Alex Youcis, Beauville-Laszlo gluing of algebraic spaces, arXiv:2410.20500 (2024)](https://arxiv.org/abs/2410.20500v1)

### Derived binomial rings give an integral formula for cohomology of log spaces

**Remember:** Binomial operations let integral cochains have a free description.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A21 (Logarithmic algebraic geometry, log schemes), 13D03, 14F25. arXiv math.AG, math.AT. Level 4: research.

**Definition.** A binomial ring is a ring without additive torsion that contains x(x−1)…(x−n+1)/n! for every element x and every n. Derived binomial rings are the homotopy version, and integral singular cochains form one. A log structure records the functions that may vanish along a boundary, and fs is its standard finiteness condition.

**Problem.** Let X be an fs log complex analytic space, and let π map its Kato–Nakayama space, the space of boundary angles, to X. Then the derived pushforward of the constant sheaf ℤ along π is the free coaugmented derived binomial ring on the two-term exponential complex. That complex maps 𝒪 to the group completion of the log structure.

**How the definition helps.** Integral cochains are naturally a derived binomial ring, so a free binomial ring is the right integral model. Steenbrink's formula describes this pushforward with rational coefficients. The abstract says this result extends that formula to ℤ. The work is to compute free derived binomial rings and identify them with cochains.

**Paper or page:** [Derived binomial rings I: integral Betti cohomology of log schemes](https://arxiv.org/abs/2308.01110v1). It says: “This gives an extension of Steenbrink's formula and its generalization by the second author to ℤ-coefficients.”

**Sources:**

- [Dmitry Kubrak, Georgii Shuklin, Alexander Zakharov, Derived binomial rings I: integral Betti cohomology of log schemes, arXiv:2308.01110 (2023)](https://arxiv.org/abs/2308.01110v1)

### Counting twist equivalences, not automorphisms, removes the rigidity of quantum projective spaces

**Remember:** Symmetries of a noncommutative space live in a groupoid, not a group.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16W50. arXiv math.RA, math.AG. Level 4: research.

**Definition.** Cooney and Grabowski define a groupoid whose objects are noncommutative projective spaces (QGr A, πA) of a fixed dimension. A morphism is an equivalence of the categories QGr that respects πA and its shifts. By Zhang's theorem, morphisms correspond to Zhang twists relating the coordinate algebras, and the point scheme E is the scheme of point modules.

**Problem.** For a geometric noncommutative ℙⁿ with point scheme E, its automorphism group in the groupoid is the group of automorphisms of E that extend to ℙⁿ. By contrast, for q not a root of unity, the quantum ℙⁿ algebra has only (k\*)ⁿ⁺¹ as automorphisms, or k ⋉ (k\*)³ when n = 2.

**How the definition helps.** Non-isomorphic algebras can give the same space, so algebra isomorphisms are too strict, and the groupoid counts every way two algebras define one space. Zhang's theorem identifies these ways with twists. The point scheme of Artin, Tate and Van den Bergh then describes the twists geometrically. The work went into Mori's description of twists through the point scheme, which Cooney and Grabowski use.

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383), [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “noncommutative spaces (or equivalently their coordinate algebras) have very few automorphisms by comparison with their commutative counterparts.”

**Sources:**

- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)
- [J. J. Zhang, Twisted graded algebras and equivalences of graded categories, Proceedings of the London Mathematical Society s3-72 (1996) 281–311](https://doi.org/10.1112/plms/s3-72.2.281)

### Endomorphism algebras of tilting bundles are Calabi–Yau exactly on Calabi–Yau varieties

**Remember:** The bimodule dual of A is the inverse canonical sheaf in disguise.

*True by definition. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16E35, 14J32. arXiv math.AG, math.RA. Level 4: research.

**Definition.** An algebra A is homologically smooth when A is a perfect complex of A-bimodules. Ginzburg calls a smooth A Calabi–Yau of dimension d when its bimodule dual RHom(A, A ⊗ Aᵒᵖ) is A placed in degree d. A tilting generator on a variety X is a complex with no higher self-extensions that generates the derived category.

**Problem.** Let X be a smooth connected variety of dimension d, projective over an affine variety, with a tilting generator ℰ. Then End ℰ is Calabi–Yau of dimension d exactly when the canonical sheaf of X is trivial.

**How the definition helps.** The Calabi–Yau condition uses only bimodules and derived Hom, so it moves across the derived equivalence between X and End ℰ (our own summary). A definition through a Serre functor would need finite-dimensional Hom spaces, which fail when X is not projective. On X × X the bimodule A becomes the structure sheaf of the diagonal, whose dual is the inverse canonical sheaf there, shifted (our own). So the dual is a shift of A exactly when the canonical sheaf is trivial; Ginzburg proves this as Proposition 3.3.1.

**nLab:** [Calabi-Yau algebra](https://ncatlab.org/nlab/show/Calabi-Yau+algebra). It says: “Then End ℰ is a Calabi-Yau algebra of dimension d precisely if X is a Calabi-Yau manifold of dimension d.”

**Sources:**

- [V. Ginzburg, Calabi–Yau algebras, arXiv:math/0612139](https://arxiv.org/abs/math/0612139)

### Every noncommutative projective line is the ordinary projective line

**Remember:** Quantum planes are twists of k\[x,y\], so their projective lines agree.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16S38. arXiv math.RA, math.AG. Level 4: research.

**Definition.** A noncommutative projective line is the pair (QGr A, πA), where A is an Artin–Schelter regular algebra of global dimension 2 generated in degree one. Here QGr A is the category of graded A-modules modulo torsion modules, and πA is the image of A.

**Problem.** Over an algebraically closed field, every noncommutative projective line is equivalent to the ordinary ℙ¹ with its structure sheaf. This includes the quantum planes k⟨x,y⟩/(xy − qyx) and the Jordan plane k⟨x,y⟩/(xy − yx − x²).

**How the definition helps.** QGr A depends only on the graded module category of A, and each such A is a Zhang twist of k\[x,y\] (our own check). With σ(x) = x, the twist by σ(y) = qy gives the quantum plane and σ(y) = y + x gives the Jordan plane (our own). So (QGr A, πA) is (QGr k\[x,y\], πk\[x,y\]), which Serre's theorem identifies with sheaves on ℙ¹. Defined as algebras, quantum planes with different q would be different spaces; the classification of regular algebras of dimension 2 does the remaining work.

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “We analyse this automorphism groupoid, showing that in dimension 1 it is connected, so that every noncommutative ℙ¹ is isomorphic to commutative ℙ¹.”

**Sources:**

- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)
- [J. J. Zhang, Twisted graded algebras and equivalences of graded categories, Proceedings of the London Mathematical Society s3-72 (1996) 281–311](https://doi.org/10.1112/plms/s3-72.2.281)
- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics 66 (1987) 171–216](https://doi.org/10.1016/0001-8708(87)90034-X)

### Keeping the structure object and shift lets Artin–Zhang recover the graded ring

**Remember:** Remember the structure sheaf and its twists, and the ring comes back.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16W50. arXiv math.AG, math.RA. Level 4: research.

**Definition.** Artin and Zhang define a noncommutative projective scheme as a triple (C, O, s). Here C is an abelian category, O is an object playing the structure sheaf, and s is an autoequivalence playing the twist by 𝒪(1). For a graded algebra A the triple is (QGr A, πA, shift).

**Problem.** Let A be noetherian Artin–Schelter regular of dimension at least 2, a noncommutative analogue of a polynomial ring. Then (QGr A, πA, shift) gives back A as ⨁ Hom(πA, πA(n)), and any ample triple with suitable finiteness is QGr of its ring ⨁ Hom(O, sⁿO).

**How the definition helps.** The triple keeps exactly the data from which a homogeneous coordinate ring is built, so reconstruction can be stated for any abelian category. Ampleness copies two facts from Serre's theorem (our own summary). Every object is a quotient of sums of the s⁻ⁿO, and surjections stay surjective on Hom from s⁻ⁿO for large n. For regular A, Hom(πA, πA(n)) = Aₙ because the first two local cohomology groups of A vanish (our own); Artin and Zhang prove the general equivalence.

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383), [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “The graded endomorphism algebra of πA in QGr A, GrEnd(πA) = ⨁<sub>n∈ℤ</sub> Hom<sub>QGr A</sub>(πA,(πA)(n)) is isomorphic as graded k-algebras to A.”

**Sources:**

- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)
- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)

### Linear reductivity is exactly what makes skew group rings resolve quotient singularities

**Remember:** Replace 'order prime to p' by 'linearly reductive', and Auslander's theorem survives.

*Rules out counterexamples. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S35, 14B05. arXiv math.AG, math.RA. Level 4: research.

**Definition.** A finite group scheme G over a field k is linearly reductive when all its representations are semisimple. A finite group is linearly reductive exactly when the characteristic of k does not divide its order, and μₚ is linearly reductive in characteristic p. The skew group ring S∗G is S ⊗ kG with G acting on S, where kG is the dual of the coordinate ring of G.

**Problem.** Let a finite group scheme G act on S = k\[\[x₁, …, xₙ\]\] under Liedtke and Yasuda's assumptions, with invariant ring R. Then S∗G has finite global dimension exactly when G is linearly reductive, and then End of S over R is a noncommutative crepant resolution.

**How the definition helps.** Linear reductivity is what Auslander's averaging argument needs, so the theorem covers group schemes such as μₚ with no extra case (our own summary). The excluded case is any action of a group such as ℤ/p in characteristic p, whose group algebra is not semisimple (our own reading). For such an action S∗G has infinite global dimension, so it cannot be a resolution. The work went into Liedtke and Yasuda's study of purity and F-regularity.

**Paper or page:** [Non-commutative resolutions of linearly reductive quotient singularities](https://arxiv.org/abs/2304.14711), [Non-commutative resolutions of linearly reductive quotient singularities](https://arxiv.org/abs/2304.14711). It says: “The following are equivalent: R is a pure subring of S. R is strongly F-regular. G is linearly reductive. S\*G has finite global dimension.”

**Sources:**

- [C. Liedtke and T. Yasuda, Non-commutative resolutions of linearly reductive quotient singularities, Quarterly Journal of Mathematics 75 (2024) 969–985; arXiv:2304.14711](https://arxiv.org/abs/2304.14711)
- [M. Auslander, On the purity of the branch locus, American Journal of Mathematics 84 (1962) 116–125](https://doi.org/10.2307/2372807)

### Quasi-free algebras have smooth representation schemes in every dimension

**Remember:** Lifting through all nilpotent extensions includes lifting through matrix rings.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16E40. arXiv math.RA, math.AG. Level 4: research.

**Definition.** An associative algebra A is quasi-free, in the sense of Cuntz and Quillen, when every algebra map from A to E/N lifts to E. Here E is any associative algebra and N is a nilpotent ideal. Free algebras and path algebras of quivers are quasi-free.

**Problem.** If A is finitely generated and quasi-free, then for each n the scheme Repₙ(A) of n-dimensional representations is smooth. This scheme sends a commutative ring C to the algebra maps from A to the matrix ring Mₙ(C).

**How the definition helps.** The definition lifts maps into every associative algebra, including matrix rings, so it contains the lifting criterion for smoothness of Repₙ(A) (our own summary). That criterion asks that points over C/J lift to C for every square-zero ideal J, and Mₙ(J) is a square-zero ideal of Mₙ(C). The commutative notion is not enough: Repₙ(k\[x,y\]) is the scheme of commuting pairs of matrices, singular for n ≥ 2 (our own example). The work went into Cuntz and Quillen's equivalent forms of the definition, which make examples checkable.

**nLab:** [quasi-free algebra](https://ncatlab.org/nlab/show/quasi-free+algebra), [Kontsevich-Rosenberg principle](https://ncatlab.org/nlab/show/Kontsevich-Rosenberg+principle). It says: “However most commutative formally smooth algebras are not formally smooth in the associative noncommutative sense.”

**Wikipedia:** [Quasi-free algebra](https://en.wikipedia.org/wiki/Quasi-free_algebra). It says: “In particular, a polynomial ring over a field is quasi-free if and only if the number of variables is at most one.”

**Sources:**

- [J. Cuntz and D. Quillen, Algebra extensions and nonsingularity, Journal of the American Mathematical Society 8 (1995) 251–289](https://doi.org/10.1090/s0894-0347-1995-1303029-0)
- [M. Kontsevich and A. L. Rosenberg, Noncommutative smooth spaces, The Gelfand Mathematical Seminars 1996–1999, Birkhäuser (2000) 85–108](https://doi.org/10.1007/978-1-4612-1340-6_5)

### Schematic algebras let noncommutative Proj be glued from Ore localizations

**Remember:** Enough Ore localizations give noncommutative charts, and Serre's theorem follows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16P40. arXiv math.RA, math.AG. Level 4: research.

**Definition.** An Ore set in a ring is a multiplicative set at which one-sided fractions can be formed. Van Oystaeyen and Willaert call a connected graded noetherian algebra R schematic when it has finitely many homogeneous Ore sets, each meeting the positive part R₊. Also, each choice of one element from every set must generate a left ideal containing a power of R₊.

**Problem.** For a schematic algebra R, coherent sheaves on the noncommutative site of its Ore localizations form a category equivalent to Proj R. Here Proj R means finitely generated graded modules modulo torsion modules.

**How the definition helps.** The schematic condition is the noncommutative form of the open cover of Proj by the sets D₊(f), so sheaves and modules can be compared. Under it a module is torsion exactly when all its localizations vanish (our own summary). So the kernel of sheafification is the torsion class, as in Serre's proof (our own). The work went into building a Grothendieck topology from the Ore sets.

**Paper or page:** [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings](https://arxiv.org/abs/2301.07815), [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings](https://arxiv.org/abs/2301.07815). It says: “(Serre-Artin-Zhang-Verevkin theorem). The category of coherent sheaves is equivalent to Proj(R).”

**Sources:**

- [F. Van Oystaeyen and L. Willaert, Grothendieck topology, coherent sheaves and Serre's theorem for schematic algebras, Journal of Pure and Applied Algebra 104 (1995) 109–122](https://doi.org/10.1016/0022-4049(94)00118-3)
- [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings, arXiv:2301.07815](https://arxiv.org/abs/2301.07815)

### Taking Serre's theorem as the definition of Proj makes truncation harmless

**Remember:** Finite-dimensional differences are torsion, so qgr cannot see them.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16W50, 14A15. arXiv math.AG, math.RA. Level 4: research.

**Definition.** Let A be a noetherian connected graded algebra over a field k, so A₀ = k, not necessarily commutative. A graded module is torsion when each element is killed by A≥n, the part of A in degrees at least n, for some n. Artin and Zhang define qgr A as finitely generated graded modules modulo torsion modules, and call it the noncommutative projective scheme of A.

**Problem.** Two finitely generated graded A-modules that agree in all large degrees become isomorphic in qgr A. In particular, a module M and each truncation M≥n give the same object.

**How the definition helps.** The quotient by torsion modules inverts every map whose kernel and cokernel are torsion. The inclusion of M≥n into M has zero kernel and a finite-dimensional cokernel, which is torsion, so the claim holds by construction. With the sheaf definition of Proj, one must instead check that M and M≥n give the same sheaf on each standard open set. The work went into Serre's theorem, which identifies qgr A with coherent sheaves on Proj A when A is commutative and generated in degree one.

**nLab:** [noncommutative algebraic geometry](https://ncatlab.org/nlab/show/noncommutative+algebraic+geometry). It says: “Serre's theorem on Proj of a graded ring is taken as a definition in the noncommutative case: quasicoherent sheaves over a Proj of a graded ring is the category of graded modules modulo the modules of finite length.”

**Paper or page:** [Coherent, Proposition 30.14.4](https://stacks.math.columbia.edu/tag/0BXD). It says: “Set X = Proj(A). The functor M ↦ M̃ induces an equivalence Mod<sup>fg</sup><sub>A</sub>/Mod<sup>fg</sup><sub>A, torsion</sub> ⟶ Coh(𝒪<sub>X</sub>)”

**Sources:**

- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)

### Tilting bundles on crepant resolutions give noncommutative crepant resolutions

**Remember:** Read a crepant resolution through a tilting bundle to get a noncommutative one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 14E15, 16S38. arXiv math.AG, math.RA. Level 4: research.

**Definition.** Let R be a normal Gorenstein domain and M a nonzero reflexive R-module with endomorphism ring Λ. Van den Bergh calls Λ a noncommutative crepant resolution of R when Λ has finite global dimension and is maximal Cohen–Macaulay over R, the algebraic form of crepancy. A tilting bundle is a vector bundle with no higher self-extensions that generates the derived category.

**Problem.** Let R be a normal Gorenstein domain, and let Y → Spec R be a projective crepant resolution with a tilting bundle 𝒯. Then End 𝒯 is a noncommutative crepant resolution of R, derived equivalent to Y.

**How the definition helps.** Each condition is what the crepant resolution gives after tilting, so the noncommutative statement matches the geometric one. Finite global dimension comes from the smoothness of Y through the derived equivalence. The Cohen–Macaulay condition comes from crepancy and Grothendieck duality (our own summary). The work went into finding tilting bundles, which Van den Bergh did when the fibres have dimension at most one.

**Paper or page:** [Mutations of noncommutative crepant resolutions in geometric invariant theory](https://arxiv.org/abs/2310.11057), [Non-commutative crepant resolutions, an overview](https://arxiv.org/abs/2207.09703). It says: “Let R be a normal Gorenstein algebra and f : 𝔜 → Spec R is a stacky crepant resolution. Assume that 𝔜 admits a tilting bundle 𝒯. Then the reflexive R-module f♯𝒯 gives an NCCR of Y”

**Sources:**

- [M. Van den Bergh, Non-commutative crepant resolutions, in The Legacy of Niels Henrik Abel, Springer (2004) 749–770](https://doi.org/10.1007/978-3-642-18908-1_26)

### Twisted homogeneous coordinate rings carry Serre's theorem to an automorphism twist

**Remember:** Twist the multiplication by σ, and Serre's theorem still holds.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16W50. arXiv math.AG, math.RA. Level 4: research.

**Definition.** Put ℒₙ = ℒ ⊗ σ\*ℒ ⊗ ⋯ ⊗ (σⁿ⁻¹)\*ℒ for a line bundle ℒ on a projective scheme X with automorphism σ. The twisted homogeneous coordinate ring B(X, ℒ, σ) is the sum of the global sections of all ℒₙ, with a product twisted by σ. The bundle ℒ is σ-ample when the higher cohomology of ℱ ⊗ ℒₙ vanishes for each coherent ℱ and all large n.

**Problem.** If ℒ is σ-ample, then B(X, ℒ, σ) is noetherian and its category qgr is equivalent to coherent sheaves on X. For a Sklyanin algebra S with point modules on an elliptic curve E, a central element g kills them, and S/gS is such a ring.

**How the definition helps.** σ-ampleness is the form of Serre vanishing that Serre's proof needs, so the proof works with ℒₙ in place of ℒⁿ (our own summary). With σ the identity, ℒₙ is ℒⁿ and σ-ampleness is ordinary ampleness. The identification of S/gS with a ring B(E, ℒ, σ) is our own summary of Artin, Tate and Van den Bergh. The work went into Artin and Van den Bergh's criterion for σ-ampleness, which on a curve holds for every ample ℒ.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “then there exists an element g ∈ S which annihilates all point modules i.e. Mg = 0 for all point modules M of S.”

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “Let ℒ be an ample line bundle on a projective scheme X. Then Γ̄<sub>h</sub> defines an equivalence of categories between QCoh(X) and QGr B.”

**Sources:**

- [M. Artin and M. Van den Bergh, Twisted homogeneous coordinate rings, Journal of Algebra 133 (1990)](https://doi.org/10.1016/0021-8693(90)90269-t)
- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)

### Defining open immersions and proper maps by adjoints gives compactifications for free

**Remember:** Every !-able map factors canonically as proper then open.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 18F20, 14G22. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A map of analytic rings from A to B is an open immersion if pullback has a fully faithful D(A)-linear left adjoint. It is proper if B carries the analytic ring structure induced from A. It is !-able if B with the induced structure maps to B by an open immersion.

**Problem.** With these classes, A ↦ D(A) is a six-functor formalism on analytic rings, and it extends to analytic stacks. For example, ℤ■ → ℤ\[T\]■ factors as a proper map to (ℤ\[T\], ℤ)■ followed by an open immersion.

**How the definition helps.** Every !-able map comes with its own factorization into a proper map and an open immersion, so no compactification has to be built. In étale and coherent theory, f₍!₎ needs Nagata's compactification theorem or an analogue, usually the hardest step (our own). Scholze notes that this step comes for free here (our own reading of the six-functor notes, Definition 9.16 and the text after it). The work moves into the construction of analytic rings and the extension to analytic stacks.

**Wikipedia:** [Six operations](https://en.wikipedia.org/wiki/Six_operations). It says: “One says that f ∈ E is D-ètale if f<sup>!</sup> ≅ f<sup>\*</sup>.”

**Sources:**

- [Peter Scholze, Six-Functor Formalisms, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/SixFunctors.pdf)

### Derived Azumaya algebras realize the whole bigger Brauer group

**Remember:** Take all of H²(𝔾ₘ) as the Brauer group; derived Azumaya algebras realize it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 16H05. arXiv math.AG, math.RA. Level 4: research.

**Definition.** A derived Azumaya algebra over a connective E∞ ring R is an R-algebra A whose module ∞-category Mod(A) is invertible among R-linear module ∞-categories. The Brauer group is the group of such algebras modulo Morita equivalence, under ⊗. Classical Azumaya algebras are the ordinary algebras with this property.

**Problem.** For a quasi-compact, quasi-separated scheme X, every class in étale H²(X, 𝔾ₘ) is represented by a derived Azumaya algebra, including the non-torsion classes (Toën). Classical Azumaya algebras give at most the torsion part.

**How the definition helps.** The definition makes Brauer classes a group automatically, with the opposite algebra as the inverse. Classical Br(R) embeds into the torsion part of étale H²(𝔾ₘ), with equality in many cases by Gabber. With the derived definition, Antieau and Gepner prove that Br is an étale sheaf and the étale delooping of the Picard sheaf. The proofs need derived algebraic geometry.

**nLab:** [Brauer group](https://ncatlab.org/nlab/show/Brauer+group), [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “as the "actual" Brauer group. This has been called the "bigger Brauer group”

**Sources:**

- [Benjamin Antieau, David Gepner, Brauer groups and étale cohomology in derived algebraic geometry, Geom. Topol. 18 (2014) 1149–1244, arXiv:1210.0290](https://arxiv.org/abs/1210.0290)
- [Bertrand Toën, Derived Azumaya algebras and generators for twisted derived categories, Invent. Math. 189 (2012) 581–652, arXiv:1002.2599](https://arxiv.org/abs/1002.2599)

### Derived intersections give the right intersection count without transversality

**Remember:** Intersect with Tor, not with the tensor product, and the count comes out right.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 14C17. arXiv math.AG. Level 4: research.

**Definition.** In derived algebraic geometry, the intersection of two subschemes is their derived fibre product. Its ring of functions is the derived tensor product of the two structure sheaves (the sheaves of functions on the subschemes). The homotopy groups of this derived ring are the Tor groups.

**Problem.** Let V and W be subvarieties of complementary dimension in a smooth projective variety that meet in finitely many points. Then the sum over these points of the alternating sums ∑ (−1)ⁱ length Torᵢ, Serre's multiplicities, equals the degree of the product of their cohomology classes.

**How the definition helps.** The derived intersection carries the correction for a non-transverse intersection inside it. Its homotopy groups are exactly the Tor groups, so its length is Serre's alternating sum. The plain tensor product of the structure sheaves gives the wrong count when the intersection is not transverse. For intersections of excess dimension, the nLab states the general statement only as what should hold, since it depends on virtual fundamental classes.

**nLab:** [intersection theory](https://ncatlab.org/nlab/show/intersection+theory), [derived algebraic geometry](https://ncatlab.org/nlab/show/derived+algebraic+geometry), [derived stack](https://ncatlab.org/nlab/show/derived+stack). It says: “the cup product of two virtual fundamental classes of mid-dimensional subspaces equals the fundamental class of their derived intersection”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Hochschild homology is functions on the derived self-intersection of the diagonal

**Remember:** A loop is a point that is equal to itself in a non-trivial way.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 13D03. arXiv math.AG, math.KT. Level 4: research.

**Definition.** The derived loop space ℒX of a space X is the homotopy pullback of the diagonal map X → X × X along itself. In words, it is the intersection of the diagonal with itself, computed in derived geometry.

**Problem.** Let A be the algebra of functions on X. Then the functions on the derived loop space ℒX are the Hochschild homology HH•(A).

**How the definition helps.** Functions on a homotopy pullback form a derived tensor product. So the functions on ℒX are the derived tensor product of A with itself over A ⊗ A, which is HH•(A), and the nLab calls this, to some extent, a tautological reformulation. The underived self-intersection of the diagonal is X itself, so the derived version is essential. Further results, such as the Hochschild–Kostant–Rosenberg link to differential forms, need real work (Toën–Vezzosi, Ben-Zvi–Nadler).

**nLab:** [derived geometry](https://ncatlab.org/nlab/show/derived+geometry), [derived loop space](https://ncatlab.org/nlab/show/derived+loop+space). It says: “To some extent this is just the tautological dual reformulation of Hochschild homology as the (∞,1)-categorical (derived) tensor product”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, S¹-equivariant simplicial algebras and de Rham theory, 2009, arXiv:0904.3256](https://arxiv.org/abs/0904.3256)
- [David Ben-Zvi, David Nadler, Loop spaces and connections, Journal of Topology 5 (2012), arXiv:1002.3636](https://arxiv.org/abs/1002.3636)

### In K-theory, the virtual class is the class of the structure sheaf

**Remember:** The virtual class of a derived scheme is the derived scheme itself.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 19E08, 14C35. arXiv math.AG, math.KT. Level 4: research.

**Definition.** The K-theoretic virtual class of a derived scheme X is the class of its structure sheaf O(X) in G-theory, the K-theory of coherent sheaves. It is moved to the underlying classical scheme t₀X.

**Problem.** Let X be a derived scheme whose homotopy sheaves πᵢ O(X) are coherent and zero for large i. Then there is a unique class \[X\] in G₀(t₀X) that maps to the class of O(X) in G₀(X), and \[X\] = ∑ (−1)ⁱ \[πᵢ O(X)\].

**How the definition helps.** When the moduli space is a derived scheme, the virtual class is just the class of the structure sheaf. The work moves into the dévissage theorem, which says that t₀X → X gives an isomorphism on G-theory. To get a class in Chow homology, you also need the Grothendieck–Riemann–Roch map and a Todd class correction. This step needs extra conditions on the cotangent complex.

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class). It says: “In our hearts we all know that the fundamental class should be something tautological”

**Sources:**

- [Bertrand Toën, Derived algebraic geometry, EMS Surveys in Mathematical Sciences 1 (2014) 153–240, arXiv:1401.1044](https://arxiv.org/abs/1401.1044)
- [Bertrand Toën, Higher and derived stacks: a global overview, arXiv:math/0604504](https://arxiv.org/abs/math/0604504)

### Keeping the tensor product lets perfect complexes recover the scheme

**Remember:** Triangles alone can confuse varieties; triangles with tensor never do.

*Rules out counterexamples.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 14F08, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** The Balmer spectrum of perfect complexes on X uses the tensor product of complexes as well as the triangulated structure. Bondal and Orlov instead use only the triangulated category of bounded complexes of coherent sheaves.

**Problem.** For a noetherian scheme X, Spc of the perfect complexes on X is homeomorphic to X. With its natural structure sheaf it is isomorphic to X as a scheme.

**How the definition helps.** Keeping ⊗ excludes Mukai's example, an abelian variety and its dual with equivalent derived categories that need not be isomorphic. The equivalence does not respect ⊗, so it gives no map of Balmer spectra (our own remark). Bondal and Orlov need an ample or anti-ample canonical sheaf, and an abelian variety has a trivial one (our own remark). With ⊗ kept, the work goes into Thomason's classification of tensor ideals.

**nLab:** [spectrum of a tensor triangulated category](https://ncatlab.org/nlab/show/spectrum+of+a+tensor+triangulated+category). It says: “If one restricts to perfect complexes then often the variety may be reconstructed from the spectrum of its category of coherent sheaves.”

**Sources:**

- [Paul Balmer, Presheaves of triangulated categories and reconstruction of schemes, Math. Ann. 324 (2002) 557–580](https://doi.org/10.1007/s00208-002-0353-1)
- [Shigeru Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Math. J. 81 (1981) 153–175](https://doi.org/10.1017/s002776300001922x)
- [Alexei Bondal and Dmitri Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Math. 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)

### Left-exact functors give rings for free, and covers make them local

**Remember:** Left exactness makes the values rings; preserving covers makes them local.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 18N60, 14A15. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A geometry 𝒢 is a small (∞,1)-category with finite limits, an admissibility structure and a topology. The admissibility structure is a chosen class of morphisms that play the role of open embeddings, such as Spec R\[1/r\] → Spec R. A 𝒢-structure on an (∞,1)-topos 𝒳 is a left-exact functor 𝒪 : 𝒢 → 𝒳 (a functor that preserves finite limits). It must send admissible covering families to effective epimorphisms.

**Problem.** Take the geometry of commutative rings with Zariski covers. Then a structure on the topos of sheaves on a space X is exactly a sheaf of local rings on X, and without the cover condition it is a sheaf of rings.

**How the definition helps.** Left exactness alone makes each value a ring, and the cover condition makes the ring local. A commutative ring is the same as a left-exact functor (Ringᶠⁱⁿ)ᵒᵖ → Set, so a left-exact functor into sheaves on X is a sheaf of rings. If Σ αᵢ rᵢ = 1, the Spec R\[1/rᵢ\] cover Spec R. The functor sends this cover to an epimorphism exactly when, in each stalk, some rᵢ is invertible, and that is the local ring condition.

**nLab:** [structured (infinity,1)-topos](https://ncatlab.org/nlab/show/structured+%28infinity%2C1%29-topos). It says: “Since rings can be identified with left-exact functors (Ringᶠⁱⁿ)ᵒᵖ → Set, we don't need to impose any admissibility structure in order to recover the notion of a sheaf of rings, since left-exactness is part of the definition of a "structure sheaf.”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, 2009, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Smooth hypersurfaces have contractible matrix factorizations

**Remember:** Differentiate the square to find a homotopy.

*Rules out counterexamples. Confidence: medium.* MSC 14B05 (Singularities in algebraic geometry), 81T30. arXiv math.AG. Level 4: research.

**Definition.** For a nonzero complex polynomial W, a finite free matrix factorization consists of even and odd free polynomial modules of finite rank. A polynomial operator d exchanges the two modules and satisfies d² = W·1. Call the factorization contractible if some operator h exchanging the modules satisfies dh + hd = 1.

**Problem.** If the hypersurface defined by W is smooth as a scheme, every finite free matrix factorization of W is contractible.

**How the definition helps.** Smoothness excludes a common zero of W and all its partial derivatives (our own). Differentiating d² = W·1 gives d(∂d) + (∂d)d = (∂W)·1 for each partial derivative ∂, and h = d/2 gives dh + hd = W·1 (our own). The Nullstellensatz writes 1 as a polynomial combination of W and its derivatives, and the same combination of these operators gives the required h (our own). For W = x², take both maps equal to x; evaluating at zero shows that no such h exists (our own).

**nLab:** [matrix factorization](https://ncatlab.org/nlab/show/matrix+factorization). It says: “For example, matrix factorization categories are related to derived categories of singularities.”

**Sources:**

- [Orlov, Triangulated categories of singularities and equivalences between Landau-Ginzburg models](https://doi.org/10.1070/sm2006v197n12abeh003824)

### Total transforms preserve nodal gluing

**Remember:** Keep the exceptional curve to keep the two branches joined.

*Rules out counterexamples.* MSC 14B05 (Singularities in algebraic geometry), 32S35. arXiv math.AG, math.CV. Level 4: research.

**Definition.** Take a log resolution of a reduced variety X in a smooth space. It is an isomorphism away from X, and the full inverse image of X is a divisor with simple normal crossings. The reduced total transform is this inverse image without multiplicities, and the strict transform keeps only the closure of the inverse image of the smooth part of X.

**Problem.** Let X be the union of the two coordinate axes in the plane, and blow up the origin. Then the functions on the reduced total transform push forward to exactly the functions on X.

**How the definition helps.** Keeping the line of directions forces the two branch values to agree at the crossing. In our own example, every regular function on that projective line is constant. Conversely, branch functions agreeing at the crossing extend across the line by that constant. The strict transform separates the branches and allows unequal values. Schwede’s theorem identifies when the full inverse image also recovers the original function sheaf with no higher cohomological corrections.

**Wikipedia:** [Du Bois singularity](https://en.wikipedia.org/wiki/Du_Bois_singularity). It says: “let E be the reduced preimage of X in Z”

**Sources:**

- [Karl Schwede, A simple characterization of Du Bois singularities (2007), Theorem 4.6](https://doi.org/10.1112/S0010437X07003004)

### Formal moduli problems are the same as differential graded Lie algebras

**Remember:** A deformation problem that respects gluing of thickenings is a Lie algebra in disguise.

*Makes the theorem clean to state or prove.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14A30, 17B70. arXiv math.AG, math.AT. Level 4: research.

**Definition.** A formal moduli problem is a functor X from small (Artinian) derived algebras to ∞-groupoids with two conditions. These algebras stand for infinitesimal thickenings of a point. First, X of the point is contractible. Second, X sends pullbacks along small maps to pullbacks.

**Problem.** Over a field of characteristic 0, formal moduli problems are equivalent to differential graded Lie algebras (Pridham, Lurie). So a differential graded Lie algebra governs every deformation problem, as Deligne's folklore principle says.

**How the definition helps.** The pullback condition makes the folklore principle a theorem. It makes first order control the behaviour at every infinitesimal order, and an obstruction theory needs exactly that. Up to homotopy, L∞ algebras are the same as differential graded Lie algebras. In positive characteristic, you need partition Lie algebras instead (Brantner and Mathew).

**nLab:** [formal moduli problem](https://ncatlab.org/nlab/show/formal+moduli+problem). It says: “The clause about pullbacks is what makes the behaviour at arbitrary infinitesimal order be all controlled by that at first order”

**Sources:**

- [Jonathan P. Pridham, Unifying derived deformation theories, Adv. Math. 224 (2010) 772–826, arXiv:0705.0344](https://arxiv.org/abs/0705.0344)

### Formal plumbing identifies boundary neighborhoods in the genus-two moduli space

**Remember:** Write xy = q to track smoothing as well as gluing.

*Makes the theorem clean to state or prove.* MSC 14B20 (Formal neighborhoods in algebraic geometry), 14H10, 14D15. arXiv math.AG. Level 4: research.

**Definition.** Clutching glues two marked points of curves into a node, where two branches cross like xy = 0. Extended clutching uses formal coordinates x and y at the points and the equation xy = q. The parameter q smooths the node to all orders.

**Problem.** Over ℚ, in the moduli space of genus-two curves, take the boundary divisor of two elliptic curves joined at a node. After a pull-back, its n-th order neighborhood is canonically that of the zero section in its normal bundle, for every n (Theorem 1.2).

**How the definition helps.** Extended clutching gives coordinates on all nearby smooth curves, not only on the nodal curve. The abstract says its advantage is control over changes of the formal parameters at the glued points. That control makes the identification canonical. Ordinary clutching is the case q = 0.

**Paper or page:** [Extended clutching construction for the moduli of stable curves](https://arxiv.org/abs/2110.04682v3), [Extended clutching construction for the moduli of stable curves](https://arxiv.org/abs/2110.04682v3). It says: “The advantage of our formal construction is that we can control the effect of changing formal parameters at the marked points that are being glued.”

**Sources:**

- [Alexander Polishchuk, Extended clutching construction for the moduli of stable curves, arXiv:2110.04682 (2024)](https://arxiv.org/abs/2110.04682v3)

### Fixing each cohomology dimension separately gives a moduli space of subschemes

**Remember:** Fix every cohomology dimension separately, not only their alternating sum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C05 (Parametrization (Chow and Hilbert schemes)), 14D22, 14B12. arXiv math.AG. Level 4: research.

**Definition.** The fiber-full scheme parametrizes closed subschemes of projective space whose sheaf cohomology dimensions are prescribed. The data are one function of the twist m for each cohomological degree i. Twisting by m means tensoring with the m-th power of the hyperplane line bundle.

**Problem.** For prescribed cohomology functions, a quasi-projective scheme represents the families of subschemes with exactly those cohomology dimensions in every fiber. It is a locally closed subscheme of the Hilbert scheme.

**How the definition helps.** The definition fixes exactly the data that a family must keep constant, so the moduli problem is precise. The Hilbert polynomial records only the alternating sum of these dimensions. In our own explanation, it cannot see two adjacent degrees whose dimensions jump by the same amount. The fiber-full scheme separates such families.

**Paper or page:** [A local study of the fiber-full scheme](https://arxiv.org/abs/2202.06652v4), [A local study of the fiber-full scheme](https://arxiv.org/abs/2202.06652v4). It says: “We study some of the local properties of the fiber-full scheme, which is a fine moduli space that generalizes the Hilbert scheme by parametrizing closed subschemes with prescribed cohomological data.”

**Sources:**

- [Yairon Cid-Ruiz and Ritvik Ramkumar, A local study of the fiber-full scheme, arXiv:2202.06652 (2022)](https://arxiv.org/abs/2202.06652v4)
- [Yairon Cid-Ruiz and Ritvik Ramkumar, The fiber-full scheme, Journal of Pure and Applied Algebra (2025)](https://doi.org/10.1016/j.jpaa.2025.108045)

### Logarithmic Chow rings prove multi-fold double ramification cycles are tautological

**Remember:** Multiply ramification classes on a common blow-up of the boundary.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14H10, 14C17. arXiv math.AG. Level 4: research.

**Definition.** A double ramification cycle marks curves on which a given line bundle of degree zero becomes trivial. The logarithmic Chow ring is the limit of Chow rings over all blow-ups along the boundary. Two classes can be multiplied after pulling both back to a common blow-up.

**Problem.** Let L₁, …, Lᵣ be line bundles on the universal curve over the moduli space of stable curves. Then their r-fold double ramification cycle lies in the tautological subring of the Chow ring. That subring is generated by standard classes such as boundary strata and ψ-classes.

**How the definition helps.** The logarithmic Chow ring gives the r conditions one ring in which to multiply. The abstract says the theory comes from a generalization of piecewise-polynomial functions. Our own explanation is that each single double ramification cycle needs its own blow-up, and the limit ring holds them all. Our own reading is that the r-fold cycle is then a product of tautological classes. The work is to show that logarithmic tautological classes push back to tautological classes.

**Paper or page:** [Logarithmic intersections of double ramification cycles](https://arxiv.org/abs/2104.11450v1), [Logarithmic intersections of double ramification cycles](https://arxiv.org/abs/2104.11450v1). It says: “We describe a theory of logarithmic Chow rings and tautological subrings for logarithmically smooth algebraic stacks, via a generalisation of the notion of piecewise-polynomial functions.”

**Sources:**

- [David Holmes, Rosa Schwarz, Logarithmic intersections of double ramification cycles, arXiv:2104.11450 (2021)](https://arxiv.org/abs/2104.11450v1)

### Numerical equivalence makes the category of motives semisimple

**Remember:** Numerical equivalence keeps only what intersection numbers can see.

*Rules out counterexamples.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14C25. arXiv math.AG. Level 4: research.

**Definition.** Two algebraic cycles (formal sums of subvarieties) are numerically equivalent when they have the same intersection number with every cycle of complementary dimension. Numerical motives are the pure motives built with this equivalence relation.

**Problem.** With coefficients in a field of characteristic 0, numerical motives form a semisimple abelian category (Jannsen). Conversely, numerical equivalence is the only adequate relation whose motives form a semisimple abelian category.

**How the definition helps.** Numerical equivalence is the coarsest adequate relation, and it kills exactly what intersection numbers cannot see. An adequate relation is one that works with pullback, pushforward and intersection. Whether numerical equivalence agrees with homological equivalence is still open; it is one of Grothendieck's standard conjectures.

**nLab:** [numerical motive](https://ncatlab.org/nlab/show/numerical+motive), [pure motive](https://ncatlab.org/nlab/show/pure+motive). It says: “numerical equivalence is precisely the only adequate equivalence relation relation that gives the category of pure motives this property.”

**Sources:**

- [Uwe Jannsen, Motives, numerical equivalence, and semi-simplicity, Inventiones Mathematicae 107 (1992) 447–452](https://epub.uni-regensburg.de/26642/)

### Pairing against tautological classes splits every cycle class on abelian-variety moduli

**Remember:** Match every tautological pairing to find the tautological part.

*True by definition.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14K10, 14C17. arXiv math.AG. Level 4: research.

**Definition.** Tautological classes on the moduli space 𝒜 of principally polarized abelian varieties are generated by the Chern classes of the Hodge bundle. The pairing of a cycle with a tautological class integrates their product times the top Chern class of the Hodge bundle over a compactification. The tautological projection is the tautological class with the same pairings.

**Problem.** Every cycle class with rational coefficients on 𝒜 decomposes canonically as a tautological part plus a part that pairs to zero with every tautological class.

**How the definition helps.** Once the pairing is defined, the decomposition holds by definition. In our own words, this is orthogonal projection, which works because the pairing is nondegenerate on the tautological ring. The abstract says the main new result is that the top Hodge class vanishes on the boundary of every toroidal compactification. That vanishing makes the pairing independent of the chosen extension to the boundary.

**Paper or page:** [Tautological projection for cycles on the moduli space of abelian varieties](https://arxiv.org/abs/2401.15768v4), [Tautological projection for cycles on the moduli space of abelian varieties](https://arxiv.org/abs/2401.15768v4). It says: “every cycle class decomposes canonically as a sum of a tautological and a non-tautological part.”

**Sources:**

- [Samir Canning, Sam Molcho, Dragos Oprea, Rahul Pandharipande, Tautological projection for cycles on the moduli space of abelian varieties, arXiv:2401.15768 (2025)](https://arxiv.org/abs/2401.15768v4)

### The H-tautological ring holds admissible-cover classes outside the usual tautological ring

**Remember:** Remember intermediate quotients to reach classes the old ring misses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14H10, 14H30. arXiv math.AG. Level 4: research.

**Definition.** An admissible cover is a finite map of nodal curves that sends nodes to nodes, with equal branching on the two sides of each node. The H-tautological ring is built from moduli spaces of admissible Galois covers. Its new operations, restriction and corestriction, remember intermediate quotients of a cover.

**Problem.** The classes of Harris–Mumford admissible covers lie in the H-tautological ring, even those outside the tautological ring. Their intersections with tautological classes can be computed by an algorithm.

**How the definition helps.** The larger ring puts these cover classes and the usual classes in one ring where intersections can be computed. The paper gives additive generators for the ring and computes their intersections by an algorithm. As an application, it computes integrals of Harris–Mumford loci against tautological classes of complementary dimension.

**Paper or page:** [The H-tautological ring](https://arxiv.org/abs/2011.11565v2). It says: “In particular, our new framework includes classes of Harris-Mumford admissible covers on moduli spaces of curves, which are known in some (and speculatively many more) examples to lie outside the usual tautological ring.”

**Sources:**

- [Carl Lian, The H-tautological ring, arXiv:2011.11565 (2021)](https://arxiv.org/abs/2011.11565v2)

### Homogeneity picks out the Bismut–Gillet–Soulé theory of singular Bott–Chern classes

**Remember:** One degree condition removes the freedom of an additive genus.

*Rules out counterexamples. Confidence: medium.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14C40, 58J20. arXiv math.AG, math.DG. Level 4: research.

**Definition.** Take a vector bundle on a closed submanifold and a resolution of it on the ambient manifold. A singular Bott–Chern class is a class of currents that measures how their Chern character forms differ. The paper defines a theory of such classes by axioms. A homogeneous theory adds one more condition, which in our own reading fixes the degrees of a basic class.

**Problem.** Among the theories of singular Bott–Chern classes that satisfy the axioms, exactly one is homogeneous (Theorem 9.3). It is the theory of Bismut, Gillet and Soulé (Theorem 9.30).

**How the definition helps.** The homogeneity condition removes exactly the freedom that the axioms leave. For algebraic bundles, each transitive theory compatible with the projection formula differs from the homogeneous one by an additive genus (Corollary 9.38). In our own reading, a nonzero genus would add classes of the wrong degree.

**Paper or page:** [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2), [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2), [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2). It says: “We identify the theory defined by Bismut, Gillet and Soule as the only one that satisfies the additional condition of being homogeneous.”

**Sources:**

- [J. I. Burgos Gil, R. Litcanu, Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions, arXiv:0902.0430 (2010), Documenta Math. 15 (2010) 73--176](https://arxiv.org/abs/0902.0430v2)

### Shifts change Bott–Chern signs

**Remember:** Swap even and odd, and the secondary class changes sign.

*True by definition.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14G40. arXiv math.AG. Level 4: research.

**Definition.** The secondary Chern character of an exact complex of hermitian bundles is a differential form class measuring its metric discrepancy. Its differential gives the signed sum of the Chern character forms of the terms, with opposite signs in even and odd degrees. Pullbacks preserve the class, and orthogonally split exact complexes have class zero.

**Problem.** Shifting a bounded exact complex of hermitian holomorphic bundles by one degree negates its secondary Chern character. Shifting by two degrees preserves it.

**How the definition helps.** The axioms determine the shifted class without repeating the integral construction (our own). One shift reverses the signed sum while preserving pullback compatibility and orthogonal splitting (our own). The negative of the original class therefore satisfies all three axioms, and the uniqueness theorem identifies it with the shifted class (our own).

**Paper or page:** [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2). It says: “\\widetilde {\\phi }(\\overline {E}<sub>\\ast </sub>\[k\])=(-1)<sup>k</sup>\\widetilde {\\phi }(\\overline {E}<sub>\\ast </sub>).”

**Sources:**

- [J. I. Burgos Gil and R. Litcanu, Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2)

### The virtual fundamental class always has the expected dimension

**Remember:** The virtual class has the dimension that naive counting predicts.

*Makes the theorem clean to state or prove.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14N35, 14A30. arXiv math.AG. Level 4: research.

**Definition.** An obstruction theory on a moduli space measures how the space fails to be smooth of the expected dimension. A virtual fundamental class is a homology class built from this theory or from a derived structure, not from the actual dimension of the space.

**Problem.** The moduli space of stable maps to a target has a virtual fundamental class of the expected dimension, even when some components are too large. So Gromov–Witten invariants, integrals over this class, are defined for every target.

**How the definition helps.** The virtual class always has the expected dimension, so the invariants are defined for every target. For example, maps of degree 3 from genus 1 curves to ℙ² have expected dimension 9, but the space has a boundary component of dimension 10. Behrend and Fantechi built the virtual class from a perfect obstruction theory with the intrinsic normal cone. The derived view says that the moduli space is the truncation of a quasi-smooth derived space, but the nLab notes that this is a heuristic.

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class), [perfect obstruction theory](https://ncatlab.org/nlab/show/perfect+obstruction+theory), [hidden smoothness principle](https://ncatlab.org/nlab/show/hidden+smoothness+principle). It says: “The virtual fundamental class always lives in the expected dimension.”

**Sources:**

- [Maxim Kontsevich, Enumeration of rational curves via torus actions, in: The moduli space of curves, Progr. Math. 129 (1995), arXiv:hep-th/9405035](https://arxiv.org/abs/hep-th/9405035)
- [Kai Behrend, Barbara Fantechi, The intrinsic normal cone, Invent. Math. 128 (1997) 45–88, arXiv:alg-geom/9601010](https://arxiv.org/abs/alg-geom/9601010)

### Normalized cycles let regulator cuts vary

**Remember:** One boundary face means one list of cuts survives.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 19F27. arXiv math.AG. Level 4: research.

**Definition.** A normalized cycle on products of ℙ¹ minus 1 has zero restriction to every face except possibly the last ∞ face. Li also requires the cycles to meet the branch cuts of logarithms properly, for every small rotation of the cuts. The rotation angles may be chosen independently, each smaller than exp(−1 divided by the preceding angle).

**Problem.** For a smooth quasi-projective variety over a subfield of ℂ, these cycles give Li's integral regulator, a map from higher Chow groups to Deligne cohomology.

**How the definition helps.** Normalization leaves just one boundary face, so taking the boundary drops only the last rotation angle. In our own explanation, the same shorter list of angles then works throughout the boundary formula. Li gives a cycle over ℚ(i) for which rotating all cuts together never suffices. He proves that the independently rotated complexes exhaust the normalized cycles as the angle bounds shrink.

**Paper or page:** [Integral Regulators for Higher Chow Complexes](https://arxiv.org/abs/1805.04646), [Integral Regulators for Higher Chow Complexes](https://arxiv.org/abs/1805.04646). It says: “is a morphism of complexes.”

**Sources:**

- [Muxi Li, Integral Regulators for Higher Chow Complexes (2018)](https://arxiv.org/abs/1805.04646)

### Reduced modulus recovers Suslin homology

**Remember:** Repeated boundary points can retain a derivative as well as a value.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 4: research.

**Definition.** Let C be a smooth projective curve over a perfect field and D a nonzero effective divisor on C. The Chow group of zero-cycles with modulus D is the group of zero-cycles on C − D modulo the divisors of rational functions f ≡ 1 modulo D.

**Problem.** If every multiplicity of D is one, this group equals the zeroth Suslin homology of C − D. The equality can fail when a multiplicity exceeds one.

**How the definition helps.** With multiplicity one, the modulus tests only the values at the missing points, exactly the boundary condition in Suslin’s curve calculation. Our own example doubles the point at infinity on the projective line over ℚ. Requiring a function to equal one through first order leaves an extra additive copy of ℚ in the modulus group. The affine line has zeroth Suslin homology ℤ because Suslin homology is invariant under products with the affine line.

**nLab:** [Chow groups with modulus](https://ncatlab.org/nlab/show/Chow+groups+with+modulus). It says: “Chow groups with modulus are a non-homotopy invariant variant of Chow groups.”

**Sources:**

- [Kay Rülling and Takao Yamazaki, Suslin homology of relative curves with modulus (2016)](https://doi.org/10.1112/jlms/jdw006)
- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Jacobians measure Hodge splitting failure

**Remember:** Subtract an integral lift from a Hodge lift.

*True by definition.* MSC 14C30 (Transcendental methods, Hodge theory (algebro-geometric aspects)), 14F43. arXiv math.AG. Level 4: research.

**Definition.** For a torsion-free integral Hodge structure H of weight minus one, its Jacobian is its complex vector space modulo two subgroups. These are the integral lattice and F⁰, the sum of components whose first Hodge index is nonnegative.

**Problem.** For a smooth projective complex variety, take H from degree 2p−1 integral cohomology by removing torsion and lowering both Hodge indices by p. The intermediate Jacobian classifies mixed Hodge extensions with subobject H and quotient the weight-zero line ℤ(0).

**How the definition helps.** Two lifts of 1, one integral and one in F⁰, differ by an element of the complex space of H (our own). Changing lifts adds exactly the two subgroups in the Jacobian quotient (our own). Carlson’s inverse construction recovers the extension filtration from this difference (our own).

**nLab:** [Abel-Jacobi map](https://ncatlab.org/nlab/show/Abel-Jacobi+map). It says: “By a theorem of Carlson, the Jacobian is identified with the following group of extensions in the abelian category of mixed Hodge structures”

**Sources:**

- [James Carlson, The geometry of the extension class of a mixed Hodge structure](https://doi.org/10.1090/pspum/046.2/927981)

### Homogeneous torsion removes genus corrections

**Remember:** Change the torsion in pushforward and the extra genus disappears.

*True by definition.* MSC 14C40 (Riemann-Roch theorems), 14G40. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Analytic torsion supplies a metric correction when sending a complex of vector bundles forward along a projective map. Such correction theories are classified by a real power series called their additive genus. Homogeneous torsion is the theory corresponding to the zero series.

**Problem.** For metrized projective maps of regular arithmetic varieties, homogeneous torsion gives the arithmetic Riemann–Roch identity in rational arithmetic Chow groups with currents. The Chern character of the direct image equals the direct image of the Chern character multiplied first by the relative Todd class.

**How the definition helps.** The general formula has an extra term linear in the genus, which vanishes identically for homogeneous torsion (our own). The classification of torsion theories and the general arithmetic Riemann–Roch theorem supply the substantive steps (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “satisfies an exact Grothendieck-Riemann-Roch type formula:”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)
- [Burgos Gil, Freixas i Montplet and Lițcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms, Corollary 6.4](https://www.numdam.org/item/AFST_2014_6_23_3_513_0/)

### Relative Todd classes compose

**Remember:** Compose with the tangent triangle to multiply the two Todd classes.

*True by definition.* MSC 14C40 (Riemann-Roch theorems), 14G40. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A metrized projective map carries metric data on its relative tangent complex, which records tangent directions along the map. For a composite, use the metric induced by the exact triangle relating the two relative tangent complexes to the composite’s complex.

**Problem.** For composable metrized projective maps of regular arithmetic varieties, the relative arithmetic Todd classes multiply in the rational arithmetic Chow ring. The first factor is the class of the first map, and the second is its pullback of the next map’s class.

**How the definition helps.** Using the induced metric puts the tangent complexes in a tight triangle, one whose metrics introduce no secondary correction (our own). An independently chosen metric on the composite would require accounting for its discrepancy (our own). Multiplicativity then follows from the Todd class theorem for tight triangles (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Td̂(ḡ ∘ f̄) = f⁎Td̂(ḡ) · Td̂(f̄)”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Todd correction cancels normal metrics

**Remember:** The Todd term cancels the dependence on the auxiliary normal metric.

*True by definition.* MSC 14C40 (Riemann-Roch theorems), 14G40. arXiv math.AG. Level 4: research.

**Definition.** For a closed embedding of complex manifolds, a singular Bott–Chern class compares a bundle on the submanifold with a metrized resolution on the ambient manifold. It uses an auxiliary metric on the normal bundle, which records directions transverse to the submanifold. The covariant class adds the secondary inverse Todd correction from the tangent sequence, weighted by the Chern character and Todd form before pushforward.

**Problem.** With the remaining metric data fixed, the covariant singular Bott–Chern class is independent of the metric on the normal bundle.

**How the definition helps.** The added Todd correction changes by exactly the negative of the change in the original class (our own). The metric variation formulas for the two terms establish this cancellation (our own).

**Paper or page:** [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2). It says: “does not depend on the choice of the metric on $N<sub>Y/X</sub>$.”

**Sources:**

- [J. I. Burgos Gil and R. Litcanu, Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2)

### Hodge cosets classify path torsors

**Remember:** Compare the Frobenius point with any Hodge point.

*Makes the theorem clean to state or prove.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** For a pointed smooth proper curve with good reduction over a p-adic field K, let U be its de Rham group of unipotent paths. Good reduction means the curve has a smooth proper model over the valuation ring. A right torsor for U is a space on which U acts freely and transitively. In Kim’s admissible torsors, Frobenius fixes a unique point, and the zeroth Hodge step supplies a smaller torsor under the subgroup F⁰U.

**Problem.** Over K, the isomorphism classes of admissible torsors correspond bijectively to left cosets of F⁰U in U.

**How the definition helps.** The coset removes the choice of a point in the smaller torsor while recording its position relative to the Frobenius point (our own). Frobenius is the arithmetic symmetry coming from the residue field (our own). Choose a K-point h in the smaller torsor and write the fixed point as hu (our own). Replacing h by hf replaces u by f⁻¹u, leaving its left coset unchanged (our own). Kim’s classification proves that these cosets give all admissible torsors up to isomorphism.

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “the map T ↦ \[T\] defines a bijection”

**Sources:**

- [Minhyong Kim, The Unipotent Albanese Map and Selmer Varieties for Curves (2009)](https://doi.org/10.2977/prims/1234361156)

### Polylogarithm quotients simplify puncture monodromy

**Remember:** One puncture acts only on the generator.

*True by definition.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 33B30. arXiv math.AG. Level 4: research.

**Definition.** The polylogarithm quotient is a quotient of the completed rational group algebra of loops on the sphere minus 0, 1 and ∞, based at 0 in the direction of 1. Let a and b be counterclockwise loops around 0 and 1, and let J be the ideal of sums whose coefficients add to zero. Divide by the right ideal generated by a − 1, J(b − 1) and the nth power of J.

**Problem.** In this quotient, right multiplication by a fixes the class of 1. Right multiplication by b − 1 has rank at most one and square zero.

**How the definition helps.** The quotient converts continuation of polylogarithms around a puncture into multiplication subject to explicit relations (our own). Every element is a scalar plus an element of J, and J(b − 1) vanishes in the quotient (our own). Thus only the scalar can contribute to the image, and a second multiplication kills that image (our own). Hain’s comparison theorem identifies this loop model with the system defined by classical polylogarithms (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950). It says: “The polylogarithm variation ℳ⁽ⁿ⁾ is the quotient of the variation of mixed Hodge structure”

**Sources:**

- [Richard Hain, Classical polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### The elliptic Hodge subgroup is additive

**Remember:** Hodge degree zero leaves just one letter.

*True by definition.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 14F35. arXiv math.AG. Level 4: research.

**Definition.** In the series model for a once-punctured elliptic curve, formal loops are series in two noncommuting letters A and B with constant term one. Their coproduct, which substitutes X ⊗ 1 + 1 ⊗ X for each letter X, equals their tensor square. The Hodge filtration groups series by the allowed number of letters A. Its zeroth step allows none.

**Problem.** In this model the formal loops in the zeroth Hodge step form the additive group. The parameter c corresponds to exp(cB).

**How the definition helps.** Counting letters reduces membership in the Hodge subgroup to a one-variable equation (our own). A remaining series f satisfies f(x + y) = f(x)f(y) for commuting variables x and y (our own). Its formal logarithm is additive and hence linear in characteristic zero (our own). Identifying the geometric Hodge filtration with this word-counting rule requires the elliptic connection theorem (our own).

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “\\text{words }w \\text{ in }A, B \\text{ s.t. }\\mathrm{deg}<sub>A</sub>w\\leq -j”

**Sources:**

- [Ben Moore, The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171)

### Defining good moduli spaces by exact invariants gives their geometry for free

**Remember:** Two conditions on pushforward give the main properties of a GIT quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14D22, 14L24. arXiv math.AG. Level 4: research.

**Definition.** A map π from an algebraic stack 𝒳 to an algebraic space X is a good moduli space if three things hold. π is quasi-compact, pushforward along π is exact on quasi-coherent sheaves, and π⁎𝒪 = 𝒪ₓ. Exactness of pushforward is called cohomological affineness. It holds, for example, for the quotient of an affine scheme by a linearly reductive group, where pushforward takes invariants.

**Problem.** Let π : 𝒳 → X be a good moduli space with X quasi-separated. Then π is surjective and universally closed, and it gives a bijection between the closed points of 𝒳 and of X. If 𝒳 is Noetherian, π is also universal for maps to algebraic spaces.

**How the definition helps.** The definition keeps only the two properties that the GIT proofs use: invariants are exact, and functions downstairs are the invariant functions (our own reading). For example (our own), the quotient of the affine line by scaling has a point as its good moduli space. Its two orbits, {0} and the rest, both map to that point, because their closures meet. What stays hard is to prove that a given stack has a good moduli space (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.9 (good moduli spaces)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “If π : 𝒳 → X is a good moduli space with X quasi-separated, then (1) π is surjective and universally closed; … In particular, π induces a bijection between closed points in 𝒳 and closed points in X”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), main theorem on properties of good moduli spaces](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [J. Alper, Good moduli spaces for Artin stacks, Annales de l'Institut Fourier 63 (2013) 2349–2402](https://doi.org/10.5802/aif.2833)

### Fixed points with chosen isomorphisms give the real points of a stack

**Remember:** Fixed means fixed up to a chosen isomorphism, not fixed on the nose.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14P25, 18N10. arXiv math.AG. Level 4: research.

**Definition.** A groupoid is a category in which every arrow is invertible. An involution is a map whose square is the identity. A fixed object of the involution σ is an object x with an isomorphism φ from x to σ(x) such that σ(φ)∘φ is the identity.

**Problem.** Let 𝒳 be a separated Deligne–Mumford stack of finite type over ℝ, and let complex conjugation act on its complex groupoid. Then the isomorphism classes of fixed objects, with the quotient topology, are homeomorphic to the real points of 𝒳 with the real analytic topology.

**How the definition helps.** The fixed groupoid keeps the isomorphism φ, and this is exactly the data needed to descend an object from ℂ to ℝ. Our own example is the classifying stack of the group with two elements. Over ℂ it has one point up to isomorphism, but over ℝ it has two real points, and the naive fixed set sees only one. The hard part is the comparison of topologies.

**Paper or page:** [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2), [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2). It says: “We prove that when the topological groupoid with involution arises from a Deligne-Mumford stack over ℝ, this fixed locus coincides with the real locus of the stack.”

**Sources:**

- [Emiliano Ambrosi, Olivier de Gaay Fortman, Topological groupoids with involution and real algebraic stacks, arXiv:2504.02760 (2025)](https://arxiv.org/abs/2504.02760v2)

### Regular stacks are those where every bounded coherent complex is perfect

**Remember:** Regular means every coherent complex has a finite resolution by bundles.

*True by definition. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14F08. arXiv math.AG. Level 4: research.

**Definition.** A Noetherian algebraic stack is regular when it has a smooth cover by a regular scheme. A perfect complex is one that is locally a finite complex of vector bundles. The test compares perfect complexes with complexes whose cohomology is bounded and coherent.

**Problem.** A decent, quasi-compact, locally Noetherian algebraic stack is regular exactly when every complex with bounded coherent cohomology is perfect. This is Serre's regularity theorem moved from local rings to stacks.

**How the definition helps.** With the derived test, a statement about perfect complexes is a statement about regularity, with no cover to choose. The work moves into the comparison of the cover definition with the derived test. With it, the authors prove stacky forms of conjectures of Antieau–Gepner–Heller and Bondal–Van den Bergh, which Neeman proved for schemes. Those forms still need extra hypotheses, such as finite Krull dimension.

**Paper or page:** [Regularity and bounded t-structures for algebraic stacks](https://arxiv.org/abs/2504.02813v1). It says: “such a stack is regular if and only if all complexes with bounded and coherent cohomology are perfect. This naturally enables us to extend various statements known for schemes to algebraic stacks.”

**Sources:**

- [Timothy De Deyn, Pat Lank, Kabeer Manali Rahul, Fei Peng, Regularity and bounded t-structures for algebraic stacks, arXiv:2504.02813v1 (2025)](https://arxiv.org/abs/2504.02813v1)

### S-equivalence says exactly which semistable bundles the moduli space identifies

**Remember:** Bundles with the same stable pieces land on the same point.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14H60. arXiv math.AG. Level 4: research.

**Definition.** A semistable vector bundle on a curve has a Jordan–Hölder filtration whose quotients are stable bundles of the same slope. Two semistable bundles are S-equivalent when the direct sums of these quotients are isomorphic. Zhang extends the notion to points of any algebraic stack.

**Problem.** Two semistable bundles on a curve give the same point of the moduli space exactly when they are S-equivalent. Zhang proves the same for points of a locally reductive stack of finite type with an adequate moduli space.

**How the definition helps.** S-equivalence groups bundles by the same rule that the moduli space uses. A non-split extension of two stable bundles of the same slope degenerates to their direct sum (our own). So a separated moduli space must give both one point (our own). The work moves into showing that the stacky definition matches the identification made by the moduli space.

**Paper or page:** [S-equivalence for algebraic stacks](https://arxiv.org/abs/2411.04053v1). It says: “Two semistable vector bundles are identified in the adequate moduli space if and only if they are S-equivalent.”

**Sources:**

- [Xucheng Zhang, S-equivalence for algebraic stacks, arXiv:2411.04053v1 (2024)](https://arxiv.org/abs/2411.04053v1)
- [C. S. Seshadri, Space of unitary vector bundles on a compact Riemann surface, Annals of Mathematics 85 (1967)](https://doi.org/10.2307/1970444)

### Nilpotent singular support makes the geometric Langlands equivalence true

**Remember:** Add exactly the sheaves with nilpotent singular support, and the two sides match.

*Makes the theorem clean to state or prove.* MSC 14D24 (Geometric Langlands program (algebro-geometric aspects)), 14F10, 14D23. arXiv math.AG, math.RT. Level 4: research.

**Definition.** Arinkin and Gaitsgory change one side of the conjecture. They replace quasi-coherent sheaves on the stack Loc of ᴸG-local systems by ind-coherent sheaves whose singular support lies in the global nilpotent cone. Here ᴸG is the Langlands dual group, and the singular support of an ind-coherent sheaf measures how far it is from being quasi-coherent. The new category is slightly larger, and it is defined inside stable ∞-categories.

**Problem.** For a reductive group G and a smooth projective curve Σ, D-modules on BunG(Σ) are equivalent to ind-coherent sheaves on the stack of ᴸG-local systems with nilpotent singular support. This is the geometric Langlands theorem.

**How the definition helps.** The definition does not make the theorem easy; it makes the statement true. The original form, with plain quasi-coherent sheaves, is false. V. Lafforgue's computations (2009) show that it fails for G = SL₂ and Σ = ℙ¹. Gaitsgory, Raskin and coauthors gave a proof in 2024–2025 in a series of long papers, and the real work is there.

**nLab:** [geometric Langlands correspondence](https://ncatlab.org/nlab/show/geometric+Langlands+correspondence). It says: “A refined formulation of the conjecture due to Arinkin &amp; Gaitsgory 12, meant to fix this failure, replaces plain quasicoherent sheaves with certain "nilpotent" ind-objects of quasicoherent sheaves”

**Sources:**

- [D. Arinkin, D. Gaitsgory, Singular support of coherent sheaves, and the geometric Langlands conjecture, arXiv:1201.6343 (2012)](https://arxiv.org/abs/1201.6343)
- [D. Gaitsgory, S. Raskin, Proof of the geometric Langlands conjecture I: construction of the functor, arXiv:2405.03599 (2024)](https://arxiv.org/abs/2405.03599)

### Multi-weighted blow-ups improve singularities at every step of resolution

**Remember:** Weight the coordinates to fit the singularity, and every step improves it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14E15 (Global theory and resolution of singularities (algebro-geometric aspects)), 14M25. arXiv math.AG. Level 4: research.

**Definition.** A weighted blow-up gives the coordinates different weights. It replaces the centre by a weighted projective space, so the result is a smooth Artin stack rather than a variety. A multi-weighted blow-up uses several weight vectors at once, in the style of toric geometry.

**Problem.** In characteristic zero, a sequence of multi-weighted blow-ups resolves a subvariety of a smooth variety, so that the singular locus becomes a simple normal crossings divisor. Each blow-up improves the singularity, so no record of earlier steps is needed.

**How the definition helps.** Weights let the blow-up match the shape of the singularity, so one step already makes it better. With classical blow-ups, blowing up the worst locus need not improve the singularity, so classical algorithms keep a record of earlier steps (our own). Abramovich, Temkin and Włodarczyk did this with weighted blow-ups for embedded resolution, and Abramovich and Quek extend it to logarithmic resolution. The price is that the ambient spaces are smooth Artin stacks, not varieties.

**Paper or page:** [Logarithmic resolution via multi-weighted blow-ups](https://arxiv.org/abs/2112.06361v3). It says: “at each step we always blow up the worst singular locus of Xᵢ, and witness on Xᵢ₊₁ an immediate improvement in singularities”

**Sources:**

- [Dan Abramovich, Ming Hao Quek, Logarithmic resolution via multi-weighted blow-ups, arXiv:2112.06361v3 (2024), Épijournal de Géométrie Algébrique, Volume 8](https://arxiv.org/abs/2112.06361v3)
- [D. Abramovich, M. Temkin, J. Włodarczyk, Functorial embedded resolution via weighted blowings up, Algebra &amp; Number Theory 18 (2024)](https://doi.org/10.2140/ant.2024.18.1557)

### Generalized pairs make adjunction hold for log canonical centers of any codimension

**Remember:** What the boundary cannot absorb, the nef moduli part carries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14E30 (Minimal model program (Mori theory, extremal rays)), 14B05. arXiv math.AG. Level 4: research.

**Definition.** A pair is a normal variety X with an effective divisor Δ such that the canonical divisor plus Δ is ℝ-Cartier. A log canonical center is the image of a divisor whose discrepancy is −1, the worst value that log canonical singularities allow. A generalized pair adds to the boundary a second part M, the moduli part, which comes from a nef divisor on some birational model.

**Problem.** Let W be a log canonical center of a pair (X, Δ), of any codimension, with normalization Z. Then (X, Δ) is log canonical near W exactly when the induced generalized pair on Z is generalized log canonical (Fujino–Hashizume).

**How the definition helps.** The extra nef part absorbs what the restriction leaves over, so an adjunction formula always exists. Fujino and Hashizume write the pullback of K<sub>X</sub> + Δ to Z as the canonical divisor of Z plus a boundary B plus a moduli part M. In codimension two, the moduli part is semi-ample, so an ordinary boundary exists. Adjunction is classical when W is a divisor.

**Paper or page:** [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2), [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2). It says: “We establish adjunction and inversion of adjunction for log canonical centers of arbitrary codimension in full generality.”

**Sources:**

- [Osamu Fujino, Kenta Hashizume, Adjunction and inversion of adjunction, arXiv:2105.14531v2 (2022)](https://arxiv.org/abs/2105.14531v2)

### Adequate modules repair the failure of quasi-coherent modules on big sites

**Remember:** Make kernels part of the definition, then divide by the parasites.

*Rules out counterexamples. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18E10. arXiv math.AG, math.CT. Level 4: research.

**Definition.** On the big site of schemes over S, a module gives a value on every S-scheme T, not only on open sets. An adequate module is locally the kernel of a map between modules of the form T ↦ Γ(T, pullback of a quasi-coherent module). A parasitic module is one that vanishes on every T that is flat over S.

**Problem.** Adequate modules on the big site form an abelian category, and the inclusion into all 𝒪-modules is exact. Quasi-coherent sheaves on S are the Serre quotient of adequate modules by parasitic ones.

**How the definition helps.** Adequate modules are defined to include kernels of maps between quasi-coherent modules, so the kernel problem disappears. Over Spec ℤ, multiplication by p on 𝒪 has kernel 𝔽ₚ on Spec 𝔽ₚ but zero on Spec ℤ, so the kernel is not quasi-coherent (our own). That kernel is parasitic, and dividing by parasitic modules recovers quasi-coherent sheaves on S. The work is in Stacks' study of adequate functors on algebras.

**Paper or page:** [Adequate, Lemma 46.5.11](https://stacks.math.columbia.edu/tag/06VQ), [Adequate, Lemma 46.6.2](https://stacks.math.columbia.edu/tag/06ZN). It says: “The subcategory 𝒞 ⊂ Adeq(𝒪) of parasitic adequate modules is a Serre subcategory. Moreover, the functor v induces an equivalence of categories Adeq(𝒪) / 𝒞 = QCoh(𝒪<sub>S</sub>).”

**Sources:** none listed. No primary source with a working link was found.

### Codim-2-saturated surfaces can be rebuilt from their reflexive sheaves

**Remember:** Reflexive sheaves ignore single points, so fill in every missing point first.

*Rules out counterexamples.* MSC 14F06 (Sheaves in algebraic geometry), 14J17. arXiv math.AG. Level 4: research.

**Definition.** A reflexive sheaf is a coherent sheaf that equals its double dual. Take an open embedding of a normal surface X into a normal surface whose complement is a finite set of points. X is codim-2-saturated when every such embedding is an isomorphism.

**Problem.** Every normal surface has a canonical codim-2-saturated model. This model can be rebuilt from the category of reflexive sheaves on the surface.

**How the definition helps.** Reflexive sheaves cannot see finitely many points, so the definition excludes exactly the surfaces that differ by such points. In our own example, the affine plane and the affine plane without the origin have equivalent categories of reflexive sheaves. So no reconstruction theorem can hold for all normal surfaces. The hard part is categorical: the paper shows that the category is quasi-abelian and introduces weakly localising Serre subcategories.

**Paper or page:** [Reconstruction of a surface from the category of reflexive sheaves](https://arxiv.org/abs/2302.04635v3). It says: “We reconstruct the codim-2-saturated model of a normal surface X from the additive category of reflexive sheaves on X.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Reconstruction of a surface from the category of reflexive sheaves, arXiv:2302.04635v3 (2023)](https://arxiv.org/abs/2302.04635v3)

### Reflexive pullbacks push back unchanged

**Remember:** Take the double dual before pushing back.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 32C35. arXiv math.AG. Level 4: research.

**Definition.** A coherent sheaf is reflexive when the natural map to its double dual is an isomorphism. The reflexive pullback of a sheaf is the double dual of its ordinary pullback.

**Problem.** Let f be a proper birational morphism between normal varieties and F a reflexive coherent sheaf on the target. Then the pushforward along f of the reflexive pullback of F is F.

**How the definition helps.** Taking the double dual removes sections supported entirely over the exceptional set, where the map fails to be an isomorphism. In our own proof, pullback gives a map from original sections to sections upstairs. Conversely, every section upstairs restricts to a section downstairs away from a subset of codimension at least two. Reflexive sections on a normal variety extend uniquely across such subsets. That extension theorem gives the inverse, since a section of the double dual is determined on a dense open set.

**Paper or page:** [Rational singularities and q-birational morphism](https://arxiv.org/abs/2301.04262v5). It says: “Suppose that $\\mathcal {F}$ is any reflexive sheaf on $X$. Then $\\mathcal {F}\\cong f\_\*(f<sup>\*\\mathcal</sup> {F})<sup>DD</sup>$.”

**Sources:**

- [Donghyeon Kim, Rational singularities and q-birational morphism, Lemma 3.6 (2024 preprint)](https://arxiv.org/abs/2301.04262v5)

### Sheaves on the generic fiber are sheaves on the family modulo torsion

**Remember:** Kill what vanishes at the generic point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18E35, 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Let X be a family over Spec R, where R is a regular ring with fraction field K. The generic fiber is the fiber over K. The Serre quotient of an abelian category by a Serre subcategory makes the objects of that subcategory zero. Here one divides the coherent sheaves on X by the R-torsion sheaves, which vanish on the generic fiber.

**Problem.** Let X be a smooth separated family over a regular affine base Spec R. Then coherent sheaves on the generic fiber are equivalent to coherent sheaves on X modulo the R-torsion sheaves.

**How the definition helps.** The quotient describes sheaves on the generic fiber using only sheaves on the whole family. So a statement about the generic fiber can be moved to the family and then to an open set of the base. The paper uses this to prove that derived-equivalent generic fibers give derived-equivalent closed fibers over an open set (Corollary 6.9). Our own explanation is that torsion sheaves are supported over a proper closed subset of the base, so they miss the generic point.

**Paper or page:** [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4), [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4). It says: “For flat proper families of algebraic varieties with a smooth fiber, we describe the abelian category of coherent sheaves on the generic fiber as a Serre quotient.”

**Sources:**

- [Hayato Morimura, Categorical generic fiber, arXiv:2111.00239 (2024)](https://arxiv.org/abs/2111.00239v4)

### Solid localizations along dimension make Beilinson–Parshin adeles a fracture cube

**Remember:** Adeles are vertices of a cube of solid localizations.

*True by definition. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 11R56. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let A be a ring of finite type over ℤ. For each k, the six functors for solid modules give an idempotent localization Lₖ that keeps the part of a module in dimension k. Composing these along chains of dimensions gives the vertices of a cube of functors, the fracture cube.

**Problem.** Each vertex of the fracture cube, applied to A, is an iterated product of completed localizations over chains of primes, a Beilinson–Parshin adele ring. For A = ℤ, solid ℤ-modules are glued from modules over ℚ, over the product of all ℤₚ, and over the finite adeles.

**How the definition helps.** The adeles appear as values of idempotent localization functors, so the adelic resolution follows from formal properties of those functors. Classically, Beilinson and Parshin define adeles by iterated limits and colimits over flags, and the resolution needs a direct calculation (our own). The work moves into computing each vertex on A, which uses that completion commutes with solid tensor products.

**Paper or page:** [Beilinson-Parshin adeles via solid algebraic geometry](https://arxiv.org/abs/2403.08472), [Beilinson-Parshin adeles via solid algebraic geometry](https://arxiv.org/abs/2403.08472). It says: “The vertices of the cube are given by Beilinson-Parshin adeles. Specifically, each vertex is a continuous endofunctor that is additionally right t-exact and preserves right t-bounded products and completions”

**Sources:**

- [Christopher Brav, Grigorii Konovalov, Beilinson-Parshin adeles via solid algebraic geometry, arXiv:2403.08472](https://arxiv.org/abs/2403.08472)

### The functor of points defines quasicoherent sheaves on stacks

**Remember:** A quasicoherent sheaf is a module for each affine scheme mapping in, glued by tensor products.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 14A20, 14A30. arXiv math.AG. Level 4: research.

**Definition.** Let X be a presheaf or a stack on affine schemes. QC(X) is the limit of the categories Mod(R) over all maps Spec R → X. So a quasicoherent sheaf gives an R-module for each such map. These modules come with compatible isomorphisms under base change (tensor product along ring maps).

**Problem.** This definition of QC(X) makes sense for any presheaf or stack, including ind-schemes and derived stacks. For a scheme, it agrees with the classical category of quasicoherent sheaves.

**How the definition helps.** The functor-of-points definition needs only maps from affine schemes, so it applies to any presheaf or stack. Every ingredient has a higher-categorical version, so the same definition gives derived quasicoherent sheaves. The real content is in descent theorems. They show that the limit agrees with the classical category on schemes and behaves well for flat covers of stacks, as Hollander proves.

**nLab:** [quasicoherent sheaf](https://ncatlab.org/nlab/show/quasicoherent+sheaf). It says: “all notions involved, sheaf, stack, morphism of stacks, have natural, immediate and well understood generalizations to higher category theory.”

**Sources:**

- [Sharon Hollander, Descent for quasi-coherent sheaves on stacks, Algebraic and Geometric Topology 7 (2007) 411–438, arXiv:0708.2475](https://arxiv.org/abs/0708.2475)

### A shift Serre functor makes Calabi–Yau semiorthogonal decompositions trivial

**Remember:** When the Serre functor is a shift, one-way orthogonality becomes two-way.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14J32. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A semiorthogonal decomposition D = ⟨A, B⟩ of a triangulated category is a pair of full triangulated subcategories that generate D. It asks for Hom(b, a) = 0 for all b in B and a in A, so the vanishing goes one way only. An orthogonal decomposition asks for it both ways.

**Problem.** Let X be a connected smooth projective variety of dimension n with trivial canonical bundle. Then every semiorthogonal decomposition ⟨A, B⟩ of Dᵇ(X) has A = 0 or B = 0.

**How the definition helps.** Here the Serre functor S, with Hom(a, b) ≅ Hom(b, S a)\*, is the shift \[n\], which turns one-way vanishing into two-way vanishing. Indeed Hom(a, b) ≅ Hom(b, a\[n\])\* = 0, so the decomposition is orthogonal (our own). The work then lies in the theorem that Dᵇ(X) of a connected variety has no nontrivial orthogonal decomposition. Wikipedia states this Calabi–Yau case as an example of Kuznetsov's result for a base-point-free canonical bundle, which needs more work.

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “for an (irreducible) smooth projective variety X over a field, the bounded derived category Dᵇ(X) of coherent sheaves never has a nontrivial orthogonal decomposition”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### Absorbing singularities leaves a smooth category that survives smoothing

**Remember:** Split off the small singular piece, and the rest deforms like a smooth variety.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14B07. arXiv math.AG. Level 4: research.

**Definition.** An admissible subcategory of a triangulated category is a full subcategory whose inclusion functor has both adjoints. A categorical absorption of singularities of a variety X splits its derived category into two pieces. A small admissible piece carries the singularity, and the rest is smooth and proper as a category.

**Problem.** Under suitable assumptions, a projective variety with isolated ordinary double points has a categorical absorption of singularities. Then for any smoothing over a smooth curve, the smooth part extends to a smooth and proper family of subcategories of the fibres (Kuznetsov–Shinder).

**How the definition helps.** Once the singular part is split off, the rest is smooth and proper, and such categories behave well in families (our own). So a part of the derived category of the smooth fibres can be studied on the singular fibre (our own).

**Paper or page:** [Categorical absorptions of singularities and degenerations](https://arxiv.org/abs/2207.06477v5). It says: “We introduce the notion of categorical absorption of singularities: an operation that removes from the derived category of a singular variety a small admissible subcategory responsible for singularity and leaves a smooth and proper category.”

**Sources:**

- [Alexander Kuznetsov, Evgeny Shinder, Categorical absorptions of singularities and degenerations, arXiv:2207.06477v5 (2024), Épijournal de Géométrie Algébrique, special volume in honour of Claire Voisin](https://arxiv.org/abs/2207.06477v5)

### An ample or anti-ample canonical bundle leaves only the standard autoequivalences

**Remember:** Autoequivalences must permute points and line bundles, so they come from geometry.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A point object of Dᵇ(X) is an object P with S(P) ≅ P\[n\], Hom(P, P\[i\]) = 0 for i &lt; 0, and Hom(P, P) a field. Here S is the Serre functor and n = dim X. An invertible object is an object L with an integer s such that, for every point object P, Hom(L, P\[s\]) = Hom(P, P) and Hom(L, P\[i\]) = 0 for i ≠ s. When ω is ample or anti-ample, point objects are shifted skyscrapers and invertible objects are shifted line bundles.

**Problem.** Let the canonical bundle of X be ample or anti-ample. Then every exact autoequivalence of Dᵇ(X) composes pullback by an automorphism, tensoring with a line bundle, and a shift. So the group of autoequivalences is (Pic(X) ⋊ Aut(X)) × ℤ (Bondal and Orlov).

**How the definition helps.** An autoequivalence preserves point objects and invertible objects, and the condition on ω identifies these with skyscrapers and line bundles. After a shift and a twist, it fixes the structure sheaf and sends skyscrapers to skyscrapers, so it comes from an automorphism (our own summary). Without the condition there are more autoequivalences. On an elliptic curve the Poincaré-bundle transform sends a skyscraper sheaf to a line bundle, which no standard autoequivalence does (our own).

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “If all point objects of Dᵇ(X), for a smooth projective variety X, are translations of skyscraper sheaves of closed points, then all invertible objects of Dᵇ(X) are translations of invertible sheaves on X.”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “One nice application of the proof of this theorem is the identification of autoequivalences of the derived category of a smooth projective variety with ample (anti-)canonical sheaf.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)

### Composing kernels reduces Mukai's equivalence to cohomology of the Poincaré bundle

**Remember:** Convolve the Poincaré bundle with itself and get the antidiagonal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14K05, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For an abelian variety A of dimension g, the dual Â parametrizes line bundles of degree zero on A. The Poincaré bundle P on A × Â is the line bundle whose restriction to A × {ξ} is the line bundle that ξ names. The transform S with kernel P goes from Dᵇ(A) to Dᵇ(Â), and Ŝ is the transform back.

**Problem.** The composite of S and Ŝ is (−1)\* \[−g\], the pullback by x ↦ −x followed by a shift by −g. In particular S is an equivalence from Dᵇ(A) to Dᵇ(Â) (Mukai).

**How the definition helps.** Kernels compose by convolution, so the composite has as kernel a push forward of a tensor product of two copies of P (our own). Over a point (a, b) of A × A, this sees the cohomology of the line bundle that a + b names on Â (our own). A nontrivial such line bundle has no cohomology, so the kernel lives on the antidiagonal, the set of pairs (a, −a). A duality computation, which carries the work, identifies it with the structure sheaf of the antidiagonal shifted by −g (our own summary of Mukai).

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “The Fourier–Mukai transformation is nearly involutive”

**Sources:**

- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Defining mutations as projections keeps exceptional pairs exceptional

**Remember:** Mutate by projecting away from E, and the pair stays exceptional.

*True by definition. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** An object E is exceptional if Hom(E, E) = k and Hom(E, E\[t\]) = 0 for t ≠ 0. An exceptional pair (E, F) is a pair of exceptional objects with Hom(F, E\[t\]) = 0 for all t. The left mutation L(F) is the cone of the evaluation map ⊕ Hom(E, F\[t\]) ⊗ E\[−t\] → F. So L(F) is the projection of F onto E⊥ in the decomposition ⟨E⊥, ⟨E⟩⟩.

**Problem.** If (E, F) is an exceptional pair, then (L(F), E) is again an exceptional pair, and it generates the same subcategory as (E, F). Repeating mutations along a full exceptional collection gives an action of the braid group on such collections.

**How the definition helps.** Because L(F) is the projection onto E⊥, the vanishing Hom(E, L(F)\[t\]) = 0 holds by construction (our own). Applying Hom(−, L(F)) and Hom(F, −) to the defining triangle gives Hom(L(F), L(F)\[t\]) ≅ Hom(F, F\[t\]), so L(F) is exceptional (our own). The braid relations among mutations need a separate check. Nordskova and Van den Bergh show that this action with shifts is transitive and free for threefolds with a full exceptional collection of four vector bundles.

**Paper or page:** [Full exceptional collections on Fano threefolds and groups generated by spherical twists on K3 surfaces](https://arxiv.org/abs/2412.06023). It says: “Then the action of the semidirect product B₄ ⋌ ℤ⁴ by mutations and shifts on the set of full exceptional collections in 𝒟ᵇ(X) is transitive and free.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### Point objects let Dᵇ(X) determine X with ample or anti-ample ω

**Remember:** Points are defined inside the category, so equivalences must match points.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Let X be smooth projective of dimension n, and let S be the Serre functor of Dᵇ(X), with Hom(E, F) ≅ Hom(F, S E)\*. A point object is an object P with S(P) ≅ P\[n\], Hom(P, P\[i\]) = 0 for i &lt; 0, and Hom(P, P) a field. These conditions use only the triangulated structure, so every exact equivalence preserves point objects. The canonical bundle ω is ample if a power of it embeds X in projective space, and anti-ample if its dual is ample.

**Problem.** Let X be smooth projective with ω ample or anti-ample. If Dᵇ(X) is equivalent to Dᵇ(Y) for a smooth projective Y, then X ≅ Y (Bondal and Orlov).

**How the definition helps.** Point objects are defined by the triangulated structure alone, so an equivalence from Dᵇ(X) to Dᵇ(Y) must match point objects. Ampleness makes the point objects of X the shifted skyscraper sheaves, so the equivalence matches points (our own summary of Bondal and Orlov). The Serre functor then recovers the ring of sections of the powers of ω, and X is Proj of this ring (our own summary). Without ampleness this fails, since Mukai's transform gives Dᵇ(A) ≅ Dᵇ(Â) for an abelian variety A and its dual Â, often not isomorphic.

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “Bondal and Orlov show how to reconstruct a smooth variety from its derived category of coherent sheaves when its canonical sheaf is ample or anti-ample, using only the graded structure (i.e. the translation functor).”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “Since an abelian variety is generally not isomorphic to its dual, there are derived equivalent derived categories without isomorphic underlying varieties.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)
- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)

### Spanning classes reduce full faithfulness to Ext groups between skyscraper sheaves

**Remember:** Check a functor on points, and it is checked everywhere.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A spanning class Ω in a triangulated category is a set of objects that detects zero from both sides. So X = 0 if Hom(ω, X\[i\]) = 0 for all ω in Ω and all i. Also X = 0 if Hom(X\[i\], ω) = 0 for all such ω and i. On a smooth projective variety, the skyscraper sheaves k(x) of closed points form a spanning class.

**Problem.** Let X and Y be proper over a field k, with X regular, and let F be an exact functor between their categories of perfect complexes. Then F is fully faithful exactly when it is bijective on Ext groups between skyscraper sheaves. That is, Extⁱ(k(x), k(x′)) → Extⁱ(F k(x), F k(x′)) is an isomorphism for all closed points x, x′ and all i.

**How the definition helps.** By Bridgeland's criterion, an exact functor with both adjoints is fully faithful once it is fully faithful on a spanning class (our own summary). The criterion carries the work, using both adjoints to pass from the spanning class to all objects. Regularity of X gives the adjoints and makes each skyscraper sheaf a perfect complex (our own). So a condition on all pairs of complexes becomes a condition on pairs of points.

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “But {𝒪<sub>y</sub> : y ∈ Y} form a spanning class of Dᵇ(Y) which implies that P = 0.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.11.5](https://stacks.math.columbia.edu/tag/0G25). It says: “Assume X is regular. Then a k-linear exact functor F : D<sub>perf</sub>(𝒪<sub>X</sub>) → D<sub>perf</sub>(𝒪<sub>Y</sub>) is fully faithful if and only if for any closed points x, x′ ∈ X the maps”

**Sources:**

- [T. Bridgeland, Equivalences of triangulated categories and Fourier–Mukai transforms, Bulletin of the London Mathematical Society 31 (1999) 25–34](https://doi.org/10.1112/s0024609398004998)

### The spherical condition makes a twist an autoequivalence, unlike exceptional objects

**Remember:** Spheres twist the category; exceptional objects collapse under the same twist.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Let D be the bounded derived category of a smooth projective variety of dimension n, with Serre functor S, so that Hom(X, Y) ≅ Hom(Y, S X)\*. An object E is spherical if S(E) ≅ E\[n\] and Hom(E, E\[p\]) is k for p = 0 and p = n and zero otherwise. Its twist T sends X to the cone of the evaluation map ⊕ Hom(E, X\[p\]) ⊗ E\[−p\] → X. As a functor, T is an integral transform (Fourier–Mukai transform) whose kernel on the product is the cone of E∨ ⊠ E → O(diagonal).

**Problem.** For a spherical object E, the twist T is an exact autoequivalence of D (Seidel and Thomas). The same cone built from an exceptional object E is not an equivalence, because it sends E to zero.

**How the definition helps.** The graded Hom of a sphere makes T(E) ≅ E\[1 − n\], while T fixes every object of E⊥ (our own). Since S(E) ≅ E\[n\], the objects E and E⊥ form a spanning class (our own summary of Seidel and Thomas). Bridgeland's criterion for equivalences then carries the work. For an exceptional E, the map Hom(E, E) ⊗ E → E is an isomorphism, so T(E) = 0 (our own).

**Paper or page:** [Invariant stability conditions on local P¹ × P¹ (after Del Monte-Longhi)](https://arxiv.org/abs/2404.05232), [Number of full exceptional collections modulo spherical twists for elliptic orbifolds](https://arxiv.org/abs/2311.11110). It says: “Let S be a spherical object in 𝒟. Then Tw<sub>S</sub> is an exact autoequivalence of 𝒟.”

**Sources:**

- [P. Seidel and R. Thomas, Braid group actions on derived categories of coherent sheaves, Duke Mathematical Journal 108 (2001) 37–108](https://doi.org/10.1215/s0012-7094-01-10812-0)

### The support property makes Bridgeland stability conditions deform continuously

**Remember:** Keep semistable objects a fixed distance from zero charge.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG. Level 4: research.

**Definition.** A Bridgeland stability condition has a central charge Z, a homomorphism from a lattice of classes to ℂ. It also has a family of semistable objects. The support property asks for a constant C &gt; 0 with this rule. On each semistable object, the absolute value of Z is at least C times a norm of its class.

**Problem.** Bridgeland's deformation theorem, in the form with the support property, says the following. Every small change of the central charge lifts to a nearby stability condition. So the space of such stability conditions is a complex manifold.

**How the definition helps.** The support property keeps the charges of semistable objects away from 0, so a small change of Z cannot make a semistable object's charge vanish. Without such a bound, charges of semistable classes can approach 0, and a small deformation could break the stability condition (our own). Bridgeland's own version, for locally finite conditions, lifts only changes inside a linear subspace (our own). Checking the support property for a given condition is still the hard part.

**Paper or page:** [On a deformation of gluing stability conditions](https://arxiv.org/abs/2107.13367v2). It says: “Here the deformation property is weaker than the support property which is the standard solution for the continuousness.”

**Sources:**

- [Kotaro Kawatani, On a deformation of gluing stability conditions, arXiv:2107.13367v2 (2021)](https://arxiv.org/abs/2107.13367v2)
- [T. Bridgeland, Stability conditions on triangulated categories, Annals of Mathematics 166 (2007)](https://doi.org/10.4007/annals.2007.166.317)

### Thomason filtrations classify compactly generated tensor t-structures

**Remember:** One Thomason subset per degree describes a tensor t-structure.

*True by definition. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14A30, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A t-structure on D(Qcoh X) is given by its aisle, a subcategory that plays the role of complexes in degrees at most 0. It is a tensor t-structure if the aisle is closed under tensoring with complexes in degrees at most 0. A Thomason filtration is a sequence φ(i) of Thomason subsets of X with φ(i) ⊇ φ(i+1). The rival is a general t-structure, such as the one on ℙ¹ whose heart is the Kronecker quiver's representations.

**Problem.** For a noetherian scheme X, compactly generated tensor t-structures on D(Qcoh X) correspond to Thomason filtrations of X. The filtration φ gives the aisle of complexes whose i-th cohomology sheaf has support in φ(i).

**How the definition helps.** The tensor condition lets support decide membership in the aisle degree by degree, so Thomason's classification gives one subset per degree (our own summary). Without it, the Kronecker t-structure on ℙ¹ has no such description (our own example). The work moves into showing that compact generation is local on X (our own summary). That reduces the claim to the affine case of Alonso, Jeremías and Saorín.

**Paper or page:** [Compactly generated tensor t-structures on the derived category of a Noetherian scheme](https://arxiv.org/abs/2204.05015). It says: “Let X be a Noetherian scheme. There is a one-to-one correspondence between Thomᶠⁱˡ(X) and Aisleᶜᵖ⊗(X).”

**Sources:**

- [Compactly generated tensor t-structures on the derived category of a Noetherian scheme, arXiv:2204.05015 (2022)](https://arxiv.org/abs/2204.05015)

### Thomason's classification needs tensor ideals, as the projective line shows

**Remember:** Support sees tensor ideals; on ℙ¹ it cannot see thick subcategories.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14A30, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A thick subcategory of perfect complexes is a full triangulated subcategory closed under direct summands. It is a tensor ideal if it is also closed under tensoring with every perfect complex. The support of a complex is the set of points where its cohomology sheaves are not zero.

**Problem.** Let X be a quasi-compact quasi-separated scheme. Send each thick tensor ideal of perfect complexes to the union of the supports of its objects. This is a bijection onto the Thomason subsets of X.

**How the definition helps.** Asking for closure under ⊗ excludes the thick subcategory generated by the line bundle 𝒪 on ℙ¹. The quote shows that admissible subcategories on ℙ¹ come from exceptional collections, and ⟨𝒪⟩ is one of these. It contains 𝒪, whose support is all of ℙ¹, but not 𝒪(1), so support cannot tell it from the whole category (our own example). It is not a tensor ideal, since 𝒪⊗𝒪(1) = 𝒪(1) (our own example).

**Paper or page:** [Thick subcategories on weighted projective curves and nilpotent representations of quivers](https://arxiv.org/abs/2407.01207). It says: “Assume that 𝕏 is a weighted projective line: that is, X≅ℙ¹. Then any admissible subcategory 𝒯 ⊂ Dᵇ(coh 𝕏) is generated by an exceptional collection.”

**Sources:**

- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)

### With crystalline differential operators, D-modules are flat connections in characteristic p

**Remember:** Crystalline operators are just vector fields and functions, with bracket and Leibniz rules.

*True by definition.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 13N10, 14F30. arXiv math.AG. Level 4: research.

**Definition.** Let X be a smooth scheme over a field k, with sheaf of functions O. The sheaf of crystalline differential operators is generated over O by the vector fields. Its only relations are v₁v₂ − v₂v₁ = \[v₁, v₂\] and v·f − f·v = v(f), for vector fields v, v₁, v₂ and functions f. It is the enveloping algebra of the tangent Lie algebroid.

**Problem.** On a smooth scheme over a field of any characteristic, modules over crystalline differential operators are exactly the O-modules with a flat connection. For Grothendieck's full ring of differential operators this fails in characteristic p.

**How the definition helps.** The crystalline ring has only the generators and relations that a flat connection uses, so its modules are flat connections by definition. Grothendieck's ring in characteristic p contains divided powers such as (1/p!)(d/dt)ᵖ, so its modules carry more than a connection. The price is that the crystalline ring has a large center and p-curvature. Bezrukavnikov, Mirković and Rumynin show that it is an Azumaya algebra over its center.

**nLab:** [D-module](https://ncatlab.org/nlab/show/D-module), [crystalline differential operator](https://ncatlab.org/nlab/show/crystalline+differential+operator). It says: “In contrast, modules over the ring of crystalline differential operators are tautologically O<sub>X</sub>-modules equipped with an integrable connection.”

**Sources:**

- [Roman Bezrukavnikov, Ivan Mirković, Dmitriy Rumynin, Localization of modules for a semisimple Lie algebra in prime characteristic, Annals of Mathematics 167 (2008), arXiv:math/0205144](https://arxiv.org/abs/math/0205144)

### Bounded changes preserve multiplier ideals

**Remember:** Multiplying an integrand by bounded positive factors does not change convergence.

*True by definition.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a holomorphic ideal with nonzero local generators f₁,…,fᵣ, take the weight φ = (c/2) log(Σ \|fⱼ\|²), with c positive. Its multiplier ideal consists of local holomorphic functions h for which \|h\|² exp(−2φ) has finite integral nearby.

**Problem.** Two such weights give the same multiplier ideal if they differ by bounded amounts locally, including near their common set of infinite values.

**How the definition helps.** In our own proof, a uniform bound on the weight difference bounds the ratio of exponential factors above and below by positive constants. Their common zero locus for the generators has measure zero and does not affect the integrals. The alternative algebraic construction resolves the zero set until it looks locally like coordinate hyperplanes. Change of variables on this resolution connects its formula with local integrability.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “is locally integrable, where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [Andrew Nadel, Multiplier ideal sheaves and existence of Kähler–Einstein metrics of positive scalar curvature (1989)](https://doi.org/10.1073/pnas.86.19.7299)

### Diagonal restriction gives multiplier subadditivity

**Remember:** Separate the weights before you restrict to the diagonal.

*Makes the theorem clean to state or prove.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A plurisubharmonic weight is upper semicontinuous and subharmonic along complex lines in local coordinates. Its multiplier ideal 𝒥(φ) collects local holomorphic functions f for which \|f\|² exp(−2φ) is locally integrable.

**Problem.** For two such weights on a complex manifold, 𝒥(φ+ψ) is contained in the product ideal 𝒥(φ)𝒥(ψ).

**How the definition helps.** The ideals express a relation between three integrability tests as one inclusion. Our own summary puts the two weights on separate factors of a product space. The product formula separates the two ideals there. The restriction theorem on the diagonal gives the inclusion because the two weights add there.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “is locally integrable, where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [J.-P. Demailly, L. Ein and R. Lazarsfeld, A subadditivity property of multiplier ideals (2000)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/subaddmult.pdf)

### Generic slices preserve multiplier ideals

**Remember:** One inclusion comes from slicing and the other from extension.

*Makes the theorem clean to state or prove.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A weight φ is locally a sum of a smooth function and an upper semicontinuous function subharmonic on complex lines. Its multiplier ideal consists of germs f with \|f\|² exp(−2φ) locally integrable. A base-point-free linear system is a projective family of divisors with no common point.

**Problem.** On a smooth complex projective variety of positive dimension, restricting the multiplier ideal to a general member gives the ideal of the restricted weight. Exceptional members form at most a pluripolar set, locally contained where a nontrivial plurisubharmonic function equals minus infinity.

**How the definition helps.** The two ideals distinguish restricting integrable functions from testing integrability after restriction. In our own summary, Fubini’s theorem restricts local generators for almost every member, while weighted extension gives the reverse inclusion. Xia’s analytic Bertini theorem supplies the stronger pluripolar bound.

**Paper or page:** [Analytic Bertini theorem](https://arxiv.org/abs/2110.14971v2). It says: “Then there is a pluripolar subset Σ ⊆ Λ”

**Sources:**

- [Mingchen Xia, Analytic Bertini theorem](https://arxiv.org/abs/2110.14971v2)

### Newton polyhedra compute multiplier ideals

**Remember:** Volume adds one to each exponent before the interior test.

*True by definition.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Newton polyhedron P of a nonzero monomial ideal is the convex hull of all its monomial exponents. For generators gⱼ, its multiplier ideal at c &gt; 0 consists of holomorphic germs f with \|f\|²/(∑ⱼ\|gⱼ\|²)ᶜ locally integrable.

**Problem.** For a monomial ideal in complex affine space, its multiplier ideal at c is generated by monomials xᵛ with v+(1,…,1) inside cP. Here “inside” excludes the boundary.

**How the definition helps.** The integral definition replaces a resolution of singularities with an exponential decay test in logarithmic coordinates. In our own calculation, the volume element shifts each exponent by one. Convergence requires strict decay along every nonzero ray in the nonnegative orthant, exactly the interior condition. Orthogonality under coordinate rotations reduces the test to individual monomials.

**Paper or page:** [Multiplicities of Jumping Numbers](https://arxiv.org/abs/2102.07080v3). It says: “denotes the interior of the scaled Newton polyhedron P(c·𝔞).”

**Sources:**

- [J. A. Howald, Multiplier ideals of monomial ideals (2001)](https://doi.org/10.1090/S0002-9947-01-02720-9)

### A tameness condition removes the properness hypothesis for unramified cohomology

**Remember:** On an open variety, forbid wild ramification at infinity.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42, 14C25. arXiv math.AG. Level 4: research.

**Definition.** Suslin homology in degree zero is the group of zero-cycles modulo relations from finite correspondences with the affine line. Unramified cohomology consists of classes on the function field that extend over every codimension-one point. The curve-tame subgroup also requires classes to be tamely ramified at the missing points at infinity of curves on X.

**Problem.** Let X be smooth and geometrically connected over a field k of characteristic p. Suppose degree identifies zeroth Suslin homology with ℤ over every finitely generated extension of k. Then for each i, the curve-tame unramified classes of degree i + 1 with coefficients ℤ/p(i) all come from k.

**How the definition helps.** The tame subgroup excludes classes that are wildly ramified at infinity, so the theorem needs no properness. Our own example is the affine line over k, which satisfies the Suslin hypothesis. The Artin–Schreier class of yᵖ − y = t is unramified on the line but wildly ramified at infinity, and it does not come from k. The proof rests on a pairing between Suslin homology and this cohomology (Theorem 5.2).

**Paper or page:** [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3), [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3). It says: “We also see that the properness assumption on the variety X can be dropped off by using the Suslin homology together with a certain tame subgroup of the unramified cohomology group.”

**Sources:**

- [Shusuke Otabe, On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles, arXiv:2010.03808 (2022)](https://arxiv.org/abs/2010.03808v3)

### Holonomic étale sheaves, defined without constructibility, turn out to be constructible

**Remember:** Small singular support forces a sheaf to have finitely many strata.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 4: research.

**Definition.** Take a closed conical subset C of the cotangent bundle of a smooth scheme X. A sheaf is micro-supported on C when test maps transversal to C are locally acyclic for it. Abbes and Saito call a sheaf holonomic when it is micro-supported on some C of dimension at most dim X (our reading).

**Problem.** Over a perfect field, every holonomic étale sheaf is constructible (Abbes–Saito). This is the converse of Beilinson's theorem that constructible sheaves have singular support of dimension dim X.

**How the definition helps.** The definition does not assume constructibility, so the converse of Beilinson's theorem can be stated at all. So a finiteness property follows from a dimension bound in the cotangent bundle. The paper presents this as an étale analogue of Kashiwara's theorem on holonomic D-modules. It also shows that pushforward and pullback keep holonomicity over a perfect field.

**Paper or page:** [Holonomic étale sheaves are constructible](https://arxiv.org/abs/2410.04677v1). It says: “we introduce the notion of holonomicity for étale sheaves, without assuming a priori constructibility. Over a perfect base field, we establish the converse of Beilinson's result, showing that holonomic sheaves are indeed constructible.”

**Sources:**

- [Ahmed Abbes, Takeshi Saito, Holonomic étale sheaves are constructible, arXiv:2410.04677v1 (2024)](https://arxiv.org/abs/2410.04677v1)
- [A. Beilinson, Constructible sheaves are holonomic, Selecta Mathematica (2016)](https://doi.org/10.1007/s00029-016-0260-z)

### Linear phases isolate zero fibers

**Remember:** A nonzero linear phase kills the whole fiber.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 11T23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let E be a family of r-dimensional vector spaces over a variety X in characteristic p. A section s picks a vector in every fiber. On the family of dual spaces define g(x,y) = y(s(x)), where y is a linear functional. Use a nontrivial additive character of 𝔽ₚ to attach a one-dimensional coefficient system to this phase.

**Problem.** Work over the algebraic closure with ℓ-adic coefficients for a prime ℓ different from p. Let Z be the zero locus of s and give Z constant coefficients. Its degree-j compactly supported cohomology is isomorphic to degree-(j + 2r) compactly supported cohomology of the dual bundle with the phase coefficients.

**How the definition helps.** The chosen phase makes each fiber contribute according to whether its selected vector vanishes. Our own explanation uses the vanishing theorem for the coefficient system of a nonzero linear phase. At a zero of s the coefficients become constant, and the affine fiber contributes only in degree 2r. Base change gives the stated identification of vector spaces.

**Paper or page:** [Betti number bounds for varieties and exponential sums](https://arxiv.org/abs/2501.12623). It says: “In the situation above, we have an isomorphism of ℚ̄ℓ vector spaces Hʲ𝚌(V; ℚ̄ℓ) ≃ Hʲ⁺²ʳ𝚌(E∨; g∗ℒψ).”

**Sources:**

- [Betti number bounds for varieties and exponential sums](https://arxiv.org/abs/2501.12623)

### Lisse sheaves as dualizable objects give one theory for all coefficient rings

**Remember:** Lisse means dualizable; constructible means lisse on each stratum.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 4: research.

**Definition.** An object of a monoidal category is dualizable when it has a dual with evaluation and coevaluation maps that satisfy the triangle identities. Hemo, Richarz and Scholbach call a proétale sheaf lisse when it is dualizable. A sheaf is constructible when it is lisse on each piece of some stratification.

**Problem.** This single definition of lisse and constructible sheaves works for every coefficient ring, including topological and condensed rings. It reproduces and extends the older definitions of constructible ℓ-adic sheaves.

**How the definition helps.** Dualizability makes sense for any coefficient ring, so one definition covers all cases. For a discrete ring, the lisse objects are exactly the pro-étale locally constant complexes with perfect values. What stays delicate is the t-structure. For a ring Λ, the natural t-structure restricts to perfect complexes exactly when Λ is regular coherent.

**Paper or page:** [Constructible sheaves on schemes](https://arxiv.org/abs/2305.18131v1). It says: “This is accomplished by defining lisse sheaves to be the dualizable objects in the derived infinity-category of proétale sheaves, while constructible sheaves are those that are lisse on a stratification.”

**Sources:**

- [Tamir Hemo, Timo Richarz, Jakob Scholbach, Constructible sheaves on schemes, arXiv:2305.18131v1 (2023)](https://arxiv.org/abs/2305.18131v1)

### Strict local rings are what the étale topos of Spec ℤ classifies

**Remember:** Rewrite 'some root is simple' as 'an ideal contains 1', so the definition becomes geometric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 03G30. arXiv math.AG, math.LO. Level 4: research.

**Definition.** A monic polynomial p is unramifiable when 1 lies in the ideal of the non-constant coefficients of ∏(1 + p′(sᵢ)x), where the sᵢ are the formal roots of p. A strict local ring is a local ring in which every unramifiable p of positive degree has a simple root, a root r with p′(r) invertible.

**Problem.** The étale topos of Spec ℤ classifies strict local rings. So its points are the strict Henselian local rings (Hakim, Wraith).

**How the definition helps.** The new definition is geometric, and only a geometric theory can have a classifying topos. The usual definition of a strict Henselian ring speaks about field extensions, so it is not geometric. In a local ring, 'some tᵢ is invertible' is the same as '1 is in the ideal of the non-constant coefficients of ∏(1 + tᵢx)'. The classification theorem itself is still the main work.

**nLab:** [strict local ring](https://ncatlab.org/nlab/show/strict+local+ring), [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “We need to knead the definition of strict Henselian ring into being geometric.”

**Sources:**

- [Monique Hakim, Topos annelés et schémas relatifs, Ergebnisse der Mathematik 64, Springer (1972)](https://doi.org/10.1007/978-3-662-59155-0)
- [Gavin Wraith, Generic Galois theory of local rings, in: Applications of Sheaves, Lecture Notes in Mathematics 753, Springer (1979)](https://doi.org/10.1007/bfb0061844)

### The pro-étale site makes ℓ-adic coefficients genuine sheaves

**Remember:** Allow pro-finite étale covers, and ℤℓ becomes an honest sheaf.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14B25. arXiv math.AG. Level 4: research.

**Definition.** The pro-étale site of a scheme X has the weakly étale X-schemes as objects. A map is weakly étale when it is flat and its diagonal is also flat. The coverings are fpqc covers (faithfully flat, quasi-compact covers). Pro-étale cohomology is sheaf cohomology on this site.

**Problem.** For a quasi-compact, quasi-separated scheme X, ℚℓ is an actual sheaf on the pro-étale site, and its sheaf cohomology Hⁱ(X, ℚℓ) is ℓ-adic cohomology. No limit over ℤ/ℓⁿ coefficients is needed.

**How the definition helps.** On the étale site, ℚℓ is not a sheaf whose cohomology gives ℓ-adic cohomology. There one must take a limit of torsion coefficients and then invert ℓ. The work is in the theory of w-contractible rings, over which every faithfully flat weakly étale cover has a section. This theory shows that the site has enough objects on which limits are exact.

**nLab:** [pro-étale site](https://ncatlab.org/nlab/show/pro-%C3%A9tale+site), [ℓ-adic cohomology](https://ncatlab.org/nlab/show/%E2%84%93-adic+cohomology). It says: “This is rectified by passing to pro-étale cohomology.”

**Sources:**

- [Bhargav Bhatt, Peter Scholze, The pro-étale topology for schemes, Astérisque 369 (2015) 99–201, arXiv:1309.1198](https://arxiv.org/abs/1309.1198)

### Trace mean squares detect irreducibility

**Remember:** The largest limiting mean square counts geometric endomorphisms.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 11T23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Take a nonzero locally constant ℓ-adic system F on a nonempty open subset U of the affine line over 𝔽𝓆, with ℓ prime to q. Assume weight zero, so all pointwise Frobenius eigenvalues have complex modulus one. Over each degree-n extension, sum the squared absolute Frobenius traces over points of U and divide by qⁿ. Take the limit superior as n increases.

**Problem.** This limit superior equals the dimension of the linear maps from F to itself that commute with all geometric symmetries. It equals one exactly when F has no proper nonzero subspace stable under those symmetries.

**How the definition helps.** The limit superior recovers every geometric endomorphism even when Frobenius permutes them and individual averages oscillate. Our own explanation turns the squared trace into the trace on the system of linear endomorphisms. The trace formula and Deligne’s bound leave only the geometric endomorphism contribution in the limit, with an error tending to zero. The finitely many remaining eigenvalues have modulus one, and some common sequence of powers approaches one for them all. Geometric semisimplicity splits the system into irreducible pieces, so Schur’s lemma gives the last assertion.

**Wikipedia:** [Grothendieck trace formula](https://en.wikipedia.org/wiki/Grothendieck_trace_formula). It says: “Taking logarithmic derivatives of both formal power series produces a statement on sums of traces for each finite field extension E of the base field k:”

**Sources:**

- [Fouvry, Kowalski, Michel and Sawin, Lectures on applied ℓ-adic cohomology](https://people.math.ethz.ch/~kowalski/applied-ell-adic.pdf)
- [Deligne, La conjecture de Weil II](https://www.numdam.org/item/PMIHES_1980__52__137_0/)

### Weil–étale Euler characteristics give special values of arithmetic L-functions at zero

**Remember:** Put the regulator and the group orders into one Euler characteristic.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14G10. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A ℤ-constructible sheaf on a scheme U is an étale sheaf that is locally constant on each piece of a finite partition of U. Its stalks are finitely generated abelian groups. The Weil–étale complex is a modified étale cohomology complex built for special value formulas. Its Euler characteristic combines orders of finite cohomology groups with a regulator, the determinant of a natural pairing.

**Problem.** Let U be a regular irreducible scheme of finite type over ℤ, of dimension one, and F a ℤ-constructible sheaf on U. Then the leading coefficient of L(F, s) at s = 0 is ± the Weil–étale Euler characteristic of F (Theorem C).

**How the definition helps.** The Euler characteristic is defined to combine group orders and regulators, so the special value formula becomes one equation. Classical formulas list these factors separately (our own words). For an affine arithmetic curve, Corollary 7.5 gives ζ\*(0) = −hR/ω, a class-number-type formula. The work is to construct the complex and to prove that its Euler characteristic matches the leading coefficient.

**Paper or page:** [Special values of L-functions on regular arithmetic schemes of dimension 1](https://arxiv.org/abs/2108.00811v1). It says: “We then give a formula for the special value at s=0 of the L-function associated to any ℤ-constructible sheaf on U in terms of Euler characteristics of Weil-étale cohomology”

**Sources:**

- [Adrien Morin, Special values of L-functions on regular arithmetic schemes of dimension 1, arXiv:2108.00811v1 (2021)](https://arxiv.org/abs/2108.00811v1)

### A single chart turns Cartier–Witt sheaves into modules with one operator

**Remember:** One infinitesimal symmetry of the chart gives one operator Θ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The Cartier–Witt stack WCart is the prismatization of Spf ℤₚ, and its sheaves are prismatic crystals over ℤₚ. Its closed part WCartₙ is cut out by Iⁿ, where I is the ideal of the universal prism. Zeyu Liu uses a chart ρ from Spf ℤₚ\[\[λ\]\]/λⁿ and an automorphism of ρ over the dual numbers. Its derivative is an operator Θ on ρ\*ℰ with Θ(λⁱx) = iλⁱx + λⁱΘ(x).

**Problem.** For n ≤ p, sending ℰ to (ρ\*ℰ, Θ) is fully faithful, meaning it is bijective on maps. Its image is the ℤₚ-complete objects on which Θᵖ − Θ is locally nilpotent modulo p. Cohomology on WCartₙ is the fibre of Θ.

**How the definition helps.** The chart has one infinitesimal symmetry, so descent data reduce to the single operator Θ (our own summary). For n = 1, let 𝔽 have p² elements, and let Θ multiply W(𝔽) by a Teichmüller root of unity of order p² − 1 (our own). Modulo p, Θᵖ − Θ is then multiplication by a non-zero element of 𝔽, so the condition excludes it. The work went into building the automorphism of ρ, which needs n ≤ p.

**Paper or page:** [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051). It says: “Let n≤p, then for any ℰ∈𝒟(WCart<sub>n</sub>), the natural morphism RΓ(WCart<sub>n</sub>, ℰ)→ρ<sup>\*ℰ</sup> induces a canonical identification RΓ(WCart<sub>n</sub>, ℰ)=fib(ρ<sup>\*ℰ</sup> →Θ\_ℰ ρ<sup>\*ℰ</sup>).”

**Sources:**

- [Zeyu Liu, On the prismatization of 𝒪K beyond the Hodge-Tate locus, preprint (2024), arXiv:2409.02051](https://arxiv.org/abs/2409.02051)
- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)

### A weakly final object turns prismatic cohomology into a Čech complex

**Remember:** One weakly final object and products give a Čech complex.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 18F10. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An object X of a category is weakly final when every object Y has at least one map Y → X. Maps in the prismatic site are prism maps in the opposite direction, so here X is a prism that maps to every prism over R. The site uses the indiscrete topology, so its cohomology is the cohomology of a presheaf on a category.

**Problem.** In a category with finite nonempty products and a weakly final X, the Čech complex ℱ(X) → ℱ(X × X) → ⋯ computes presheaf cohomology. So the prismatic cohomology of a smooth algebra is an explicit complex of rings.

**How the definition helps.** Weak finality makes the Čech nerve of X a resolution of the terminal presheaf, so no covering families are needed. A final object would give the cohomology as ℱ(X) at once, but the prismatic site of a smooth algebra usually has none (our own remark). The quoted lemma writes the condition with arrows read as prism maps (our own reading). The work moves into building X and its self-products, which are prismatic envelopes of polynomial δ-algebras (our own summary).

**Paper or page:** [Overconvergent prismatic cohomology](https://arxiv.org/abs/2308.09423), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024). It says: “Assume there exists a weakly final object X∈𝒞, i.e. Hom(X,Y)≠0 for all Y∈𝒞. Then RΓ(𝒞,ℱ) is computed by the chain complex (the totalisation of) attached to ℱ(X)→ℱ(X×X)⇉ℱ(X×X×X)”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [Overconvergent prismatic cohomology, arXiv preprint 2308.09423 (2023)](https://arxiv.org/abs/2308.09423)

### Ainf-cohomology agrees with étale cohomology after inverting μ

**Remember:** Décalage only rescales by powers of μ, so inverting μ undoes it.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Fontaine's ring Ainf = W(𝒪♭) is built from the ring of integers 𝒪 of a complete algebraically closed field C. Ainf-cohomology is AΩ = Lη(μ) Rν∗Ainf, the décalage along μ = \[ε\] − 1 of the pushforward of the pro-étale sheaf Ainf. Here ε is a compatible system of p-power roots of unity, and Gaisin and Koshikawa use the same definition for a smooth map.

**Problem.** Let f : 𝔛 → 𝔜 be a proper smooth map of flat p-adic formal schemes, locally of finite type over 𝒪. After inverting μ, relative Ainf-cohomology is the relative p-adic étale cohomology of the generic fibres, tensored with the sheaf Ainf on 𝔜 with μ inverted.

**How the definition helps.** AΩ is defined from the étale side, so after inverting μ only the décalage must be undone, and inverting μ undoes it. In degree i the décalage lies between μⁱ⁺¹ and μⁱ times the original terms (Lemma 3.10 of Gaisin–Koshikawa). The rest is a relative primitive comparison theorem, true up to modules killed by W(𝔪♭) = ker(Ainf → W(k)), which contains μ (our own). A definition by the q-de Rham complex would instead make this comparison hard and the de Rham comparison easy (our own).

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “Let 𝔛 and 𝔜 be flat p-adic formal schemes locally of finite type over 𝒪, and let f : 𝔛 → 𝔜 be a proper smooth morphism. Then RΓ<sub>A<sub>inf</sub></sub>(𝔛/𝔜) ⊗ᴸ<sub>A<sub>inf</sub></sub> A<sub>inf</sub>\[1/μ\] ≅ RΓ<sub>A<sub>inf</sub></sub>(𝔛/𝔜)<sup>∧</sup> ⊗ᴸ<sub>A<sub>inf</sub></sub> A<sub>inf</sub>\[1/μ\] ≅ Rf<sub>η, proét\*</sub>Ẑ<sub>p</sub> ⊗ᴸ<sub>Ẑ<sub>p</sub></sub> 𝔸<sub>inf,Y</sub>\[1/μ\]”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Breuil–Kisin Frobenius structure bounds crystalline torsion by étale torsion

**Remember:** A Frobenius with F∘V = Eⁱ limits how much u-torsion appears.

*Rules out counterexamples. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let K be discretely valued with perfect residue field k and ramification index e, and let C be the completion of K̄. Breuil–Kisin prismatic cohomology lives over 𝔖 = W(k)\[\[u\]\], a ring with a Frobenius lift, with E an Eisenstein polynomial of degree e. Each cohomology group 𝔐ⁱ has maps F from its Frobenius twist to 𝔐ⁱ and V back, with F∘V = V∘F = Eⁱ.

**Problem.** Let 𝒳 be a smooth proper formal scheme over the integers of K, and let i &gt; 0. If pᵐ kills the torsion of étale Hⁱ(𝒳C, Zₚ), then pᵐ⁺ᶜ kills that of crystalline Hⁱ(𝒳k/W(k)), where c depends only on e and i.

**How the definition helps.** F and V exclude modules with large u-power torsion, which the étale side cannot see but the crystalline side, where u goes to 0, can. For 𝔖/(u, pᴺ), V must land in uᵖ⁻¹ times the Frobenius twist, which F kills, so Eⁱ = F∘V is zero (our own check). Since Eⁱ acts there as pⁱ times a unit, this forces N ≤ i. For cohomology, F and V force p to a power bounded by e and i to kill the u-power torsion (source, Theorem 4.3).

**Paper or page:** [Bounding crystalline torsion from étale torsion](https://arxiv.org/abs/2506.13543). It says: “There exists a constant c(e, i) depending only on ramification index e and cohomological degree i &gt; 0, such that if the Hⁱ\_ét(𝒳<sub>C</sub>, ℤ<sub>p</sub>)<sub>tors</sub> is annihilated by pᵐ, then the Hⁱ<sub>crys</sub>(𝒳<sub>k</sub>/W)<sub>tors</sub> is annihilated by p<sup>m+c</sup>.”

**Sources:**

- [Bounding crystalline torsion from étale torsion, arXiv:2506.13543 (2025)](https://arxiv.org/abs/2506.13543)

### Crystalline prisms make the crystalline comparison a statement about one complex

**Remember:** Over a crystalline prism, Frobenius-twisted prismatic cohomology is crystalline cohomology.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prism is a δ-ring A with an ideal I such that A is complete for p and I, I defines a Cartier divisor, and p ∈ I + φ(I)A. A crystalline prism is a prism with I = (p), so A has no p-torsion and A/p has characteristic p. Then (p) has canonical divided powers pⁿ/n!, so crystalline cohomology over A makes sense.

**Problem.** Let (A, (p)) be a crystalline prism and R a smooth A/p-algebra. The completed Frobenius pullback of the prismatic cohomology of R is the crystalline cohomology of R over A, compatibly with Frobenius.

**How the definition helps.** With I = (p), prismatic and crystalline cohomology live over the same ring A, so one can compare them directly. Both sides are computed by Čech–Alexander complexes, and the Frobenius-twisted prismatic envelopes in them are divided power envelopes (our own summary). A δ-structure forces this: adjoining φ(f)/p adjoins fᵖ/p, and then all divided powers of f (our own sketch). Li and Liu extend the comparison to prisms whose ideal I carries divided powers.

**nLab:** [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “Let A,(p) be a bounded prism and let R be a smooth A/p-algebra. There exists a canonical isomorphism φ<sub>A</sub><sup>\*Δ<sub>R</sup>/A</sub><sup>∧</sup> ≅ RΓ<sub>crys</sub>(R/A) in D(A), compatible with the action of Frobenius on both sides.”

**Paper or page:** [Comparison of prismatic cohomology and derived de Rham cohomology](https://arxiv.org/abs/2012.14064). It says: “Let (A,I,γ) be a bounded PD prism. Then for any p-completely smooth A/I-algebra R, there is a natural isomorphism in CAlg(A): RΓ\_Δ(R/A) ⊗̂<sub>A,φ<sub>A</sub></sub> A ≅ RΓ<sub>crys</sub>(R/(A,I,γ)),”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Li and T. Liu, Comparison of prismatic cohomology and derived de Rham cohomology, arXiv preprint 2012.14064](https://arxiv.org/abs/2012.14064)

### Décalage along ζₚ − 1 turns Hodge–Tate cohomology into twisted differential forms

**Remember:** Décalage removes the junk torsion, leaving differential forms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The Hodge–Tate complex is Ω̃ = Lη(ζₚ − 1) Rν∗Ô⁺. It is the décalage along ζₚ − 1 of the pushforward of the completed integral structure sheaf. Here {−i} is the Breuil–Kisin–Fargues twist, a free rank-one module that agrees with the Tate twist (−i) after inverting p (our own gloss).

**Problem.** For a smooth map 𝔛 → 𝔜 of formal schemes over 𝒪, Hⁱ(Ω̃) is canonically the i-forms twisted by {−i}, up to almost zero modules. These are modules killed by the maximal ideal of 𝒪, and the error vanishes when 𝔜 is locally of finite type.

**How the definition helps.** Décalage along ζₚ − 1 deletes exactly the part of Hⁱ(Rν∗Ô⁺) killed by ζₚ − 1, which is the unwanted part. Faltings' local computation shows that Hⁱ(Rν∗Ô⁺) is almost a twist of the i-forms plus such torsion (our own summary). Décalage along I tensors the torsion-free part of Hⁱ with the i-th power of I (Stacks Lemma 20.55.5), and {−i} absorbs it. The work moves into Faltings' computation, while Theorem 5.2 of Gaisin–Koshikawa links Ω̃ to AΩ.

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Cohomology](https://stacks.math.columbia.edu/tag/0F8N). It says: “induces an Ô⁺ᵃ<sub>D</sub>-module identification q\*Ωⁱ<sub>𝔛/𝔜</sub>{−i}ᵃ → Hⁱ(Ω̃<sub>𝔛/𝔜</sub>)ᵃ, for every i ≥ 0. If in addition 𝔜 is locally of finite type over 𝒪, then the almost can be dropped.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Décalage along μ turns perfectoid torus cohomology into the q-de Rham complex

**Remember:** Fractional exponents give μ-torsion, and décalage along μ deletes it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let R be a small smooth algebra with coordinates, and R∞ the perfectoid algebra got by adjoining all p-power roots of the coordinates. The group Zₚᵈ acts on Ainf(R∞), and the q-de Rham complex is the Koszul complex of the q-derivatives in the coordinates. W(𝔪♭) is the kernel of the map Ainf → W(k).

**Problem.** Locally, Lη(μ) of the continuous group cohomology of Zₚᵈ acting on Ainf(R∞) maps to Ainf-cohomology, with a cone whose cohomology is killed by W(𝔪♭). This décalage of group cohomology is the q-de Rham complex of the lift of R to Ainf.

**How the definition helps.** Décalage along μ makes acyclic every summand whose cohomology is killed by μ. The group cohomology splits by exponent, and each non-integral exponent gives such a summand (our own). On the integral exponents, the Koszul complex of the operators γᵢ − 1, divided by μ, is the q-de Rham complex (our own, following Bhatt–Morrow–Scholze). The work moves into the almost purity theorem, which makes the edge map from group cohomology an isomorphism up to W(𝔪♭).

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “such that the cohomology groups of Cone(Lη\_μ(e)) are killed by W(𝔪♭) ⊂ A<sub>inf</sub>. Moreover if (R<sub>∞</sub>\[1/p\])° = R<sub>∞</sub>, then this morphism is an isomorphism.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Décalage is multiplicative, which gives the Frobenius structure on Ainf-cohomology

**Remember:** Décalage along fg is décalage along g, then along f.

*True by definition. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 13D09. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a complex M whose terms have no f-torsion, the décalage ηf M is the subcomplex {x ∈ fⁱMⁱ : dx ∈ fⁱ⁺¹Mⁱ⁺¹} of M\[1/f\]. Ainf-cohomology is AΩ = Lη(μ) Rν∗Ainf, the décalage along μ of the sheaf Ainf pushed from the pro-étale to the Zariski site. Here Ainf = W(𝒪♭) is Fontaine's period ring, and μ = \[ε\] − 1 for a compatible system ε of p-power roots of unity.

**Problem.** If fg is a nonzerodivisor on every term of M, then ηf ηg M = ηfg M. So the Frobenius φ of Ainf gives an isomorphism from the Frobenius twist of AΩ onto Lη(ξ̃) AΩ, where ξ̃ = φ(μ)/μ.

**How the definition helps.** Because décalage is multiplicative, the Frobenius structure on AΩ follows from its definition, with no local coordinates. The Frobenius φ is an automorphism of Ainf and of the sheaf Ainf, and φ(μ) = μ·ξ̃. So the Frobenius twist of Lη(μ) Rν∗Ainf is Lη(φ(μ)) Rν∗Ainf, which is Lη(ξ̃) AΩ (our own summary of the argument). A definition by local q-de Rham complexes would need a Frobenius built in coordinates and checked to be independent of them (our own).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7U). It says: “Let M• be a complex of A-modules such that fg is a nonzerodivisor on all Mⁱ. Then η<sub>f</sub>η<sub>gM•</sub> = η<sub>fgM•</sub>.”

**Sources:**

- [The Stacks Project, Tag 0F7U](https://stacks.math.columbia.edu/tag/0F7U)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Filtered prismatization turns the Nygaard filtration into a pushforward

**Remember:** A filtration is a sheaf on 𝔸¹/𝔾ₘ, so push forward.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let X be a p-adic formal scheme. Its filtered prismatization, built from filtered Cartier–Witt divisors, is a stack with a map t to 𝔸¹/𝔾ₘ, the quotient of the affine line by scaling. Quasi-coherent sheaves on 𝔸¹/𝔾ₘ are filtered complexes, by the Rees construction. The Nygaard filtration is a filtration on absolute prismatic cohomology, the cohomology over all prisms of X, defined using Frobenius (our own gloss).

**Problem.** Let X be bounded, p-quasisyntomic, quasi-compact and quasi-separated. Pushing the structure sheaf of its filtered prismatization along t gives its Nygaard-filtered absolute prismatic cohomology.

**How the definition helps.** The map to 𝔸¹/𝔾ₘ stores a filtration as a sheaf, so the Nygaard filtration becomes the pushforward of one structure sheaf. Functoriality and multiplicativity of the filtration then come from pushforward (our own). The work went into identifying this pushforward, which Hauck states as a theorem.

**nLab:** [prismatization](https://ncatlab.org/nlab/show/prismatization). It says: “The filtered prismatization of X is the stack X<sup>𝒩</sup> over ℤ<sub>p</sub><sup>𝒩</sup> obtained via transmutation from 𝔾<sub>a</sub><sup>𝒩→ℤ<sub>p</sub>^𝒩</sup>”

**Paper or page:** [An arithmetic étale-crystalline comparison with coefficients in crystalline local systems](https://arxiv.org/abs/2505.03294), [An arithmetic étale-crystalline comparison with coefficients in crystalline local systems](https://arxiv.org/abs/2505.03294). It says: “Let X be a bounded p-adic formal scheme. Assume that X is p-quasisyntomic and qcqs. Then t<sub>X</sub>,\* 𝒪<sub>X</sub><sup>N</sup> identifies with Fil<sup>•<sub>N</sub></sup> RΓ\_Δ(X) in 𝒟𝓕̂(ℤ<sub>p</sub>) under the Rees equivalence.”

**Sources:**

- [M. Hauck, An arithmetic étale-crystalline comparison with coefficients in crystalline local systems, preprint (2025), arXiv:2505.03294](https://arxiv.org/abs/2505.03294)
- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)

### Frobenius perfection is universal

**Remember:** First invert Frobenius, then complete so maps still land in prisms.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prism has a Frobenius lift φ from δ-operations and a locally principal ideal I generated locally by a nonzero divisor. It is derived complete at (p, I) and satisfies p ∈ I + φ(I)A. It is perfect when φ is invertible. Define its perfection by completing the direct limit along φ at (p, I).

**Problem.** Every map from a prism to a perfect prism factors uniquely through its perfection.

**How the definition helps.** The direct limit makes Frobenius invertible and forces the map to every perfect target (our own explanation). At stage n, compose the original map with the nth inverse power of the target Frobenius. These maps agree along the system, and completeness extends their common map to the completion (our own argument). The substantive theorem proves that this completed ring and its extended ideal form a perfect prism.

**Paper or page:** [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105v4). It says: “Moreover, it is the universal perfect prism over (A, I).”

**Sources:**

- [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105v4)
- [Bhargav Bhatt and Peter Scholze, Prisms and Prismatic Cohomology (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Hodge–Tate crystals over p-adic integers have cohomology in degrees 0 and 1

**Remember:** One operator θ, so cohomology is the two-term complex of θ.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11S25. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let 𝒪 be the integers of a finite extension of ℚₚ. A Hodge–Tate crystal gives a finite projective A/I-module on each prism (A, I) over 𝒪, compatibly with base change. Gao, Min and Wang evaluate it at the Breuil–Kisin prism. This gives an 𝒪-module M and an endomorphism θ with a smallness condition.

**Problem.** For a Hodge–Tate crystal with pair (M, θ), prismatic cohomology is the complex M → M given by θ, so it vanishes above degree 1. Crystals with full prismatic coefficients also have no cohomology above degree 1.

**How the definition helps.** The gluing data along the Breuil–Kisin prism reduce to one operator, so cohomology is the cone of one map. Theorem 4.5 states this two-term complex, and Theorem 1.11 states the vanishing for full coefficients. The work went into computing the self-products of the Breuil–Kisin prism, where the gluing data become one operator (our own summary).

**Paper or page:** [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024). It says: “Let 𝕄 ∈ Vect((𝒪<sub>K</sub>)\_Δ,\*, 𝒪\_Δ) (a such object is called a crystal). Then H<sup>i</sup>((𝒪<sub>K</sub>)\_Δ, 𝕄) = 0, ∀ i ≥ 2”

**Sources:**

- [H. Gao, Y. Min and Y. Wang, Hodge–Tate prismatic crystals and Sen theory, preprint (2023), arXiv:2311.07024](https://arxiv.org/abs/2311.07024)

### Laurent F-crystals are étale ℤₚ-local systems on the generic fibre

**Remember:** Invert I, keep Frobenius invertible, and you get étale local systems.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11F80, 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let X be a bounded p-adic formal scheme. A prism (A, I) of X is a ring A with a Frobenius lift and an ideal I, with a map from Spf(A/I) to X. A Laurent F-crystal gives, on each prism, a finite projective module over A\[1/I\] completed at p, compatible with base change. Its Frobenius is semilinear with invertible linearization.

**Problem.** Laurent F-crystals on X are equivalent to ℤₚ-local systems on the adic generic fibre of X. These are étale sheaves of finite free ℤₚ-modules, a family version of Galois representations.

**How the definition helps.** The definition uses every prism and no tower or coordinates, so it makes sense for every bounded X. On a perfect prism, the completed A\[1/I\] is the Witt vector ring of a perfect ring of characteristic p (our own). There, Katz's Artin–Schreier–Witt theory matches étale φ-modules with local systems (our own). The work went into the Bhatt–Scholze proof, which reduces to perfect prisms (our own summary).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φq,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let X be a bounded formal scheme adic over Spf ℤ<sub>p</sub> with adic generic fiber X\_η. Then there is an equivalence Vect(X\_Δ, 𝒪\_Δ\[1/ℐ\]<sup>∧\_</sup>(p))<sup>φ = 1</sup> ≃ Loc\_ℤ<sub>p</sub>(X\_η).”

**Sources:**

- [B. Bhatt and P. Scholze, Prismatic F-crystals and crystalline Galois representations, Cambridge Journal of Mathematics 11 (2023)](https://doi.org/10.4310/cjm.2023.v11.n2.a3)

### Locally filtered free F-crystals are exactly vector bundles on the syntomification

**Remember:** F-gauges are F-crystals whose Nygaard filtration has a local basis.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11F80. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let W be the Witt vectors of a perfect field, and 𝔛 a base formal W-scheme, a class of smooth formal schemes (our own reading). A prismatic F-crystal gives a module with Frobenius on each prism (A, I) of 𝔛, a ring with a Frobenius lift and an ideal. It is locally filtered free when its Nygaard filtration, by where Frobenius lands in powers of I, is locally free (our own gloss). The syntomification is a stack of Drinfeld and of Bhatt and Lurie, whose vector bundles are F-gauges.

**Problem.** For a base formal W-scheme 𝔛, forgetting is an equivalence from F-gauges to locally filtered free prismatic F-crystals. It is bi-exact, meaning that it and its inverse keep exact sequences exact. Effective F-crystals of height at most p − 2 are automatically locally filtered free.

**How the definition helps.** The condition asks the Nygaard filtration to have a local basis, which is the extra structure an F-gauge records. So F-gauges become an explicit condition on crystals. The height bound p − 2 lets Imai, Kato and Youcis check this condition directly (Proposition 3.3).

**Paper or page:** [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282). It says: “The equivalence R\_𝔛: 𝐕𝐞𝐜𝐭(𝔛<sup>syn</sup>) ⥲ 𝐕𝐞𝐜𝐭<sup>φ,lff</sup>(𝔛\_Δ) given by the forgetful functor is bi-exact.”

**Sources:**

- [N. Imai, H. Kato and A. Youcis, An integral analogue of Fontaine's crystalline functor, preprint (2025), arXiv:2504.16282](https://arxiv.org/abs/2504.16282)

### One Ainf-cohomology shows étale torsion is at most crystalline torsion

**Remember:** Torsion can only grow from the étale end to the crystalline end.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let C be a complete algebraically closed field, such as the completion of K̄, with ring of integers 𝒪. For a smooth proper formal scheme over 𝒪, Ainf-cohomology RΓ(Ainf) is RΓ(Lη(μ) Rν∗Ainf), a perfect complex over Fontaine's ring Ainf. Its cohomology groups are Breuil–Kisin–Fargues modules: finitely presented Ainf-modules with a Frobenius that become free after inverting p.

**Problem.** Let 𝒳 be a smooth proper formal scheme over the integers of a p-adic field K, with perfect residue field k. The torsion in étale Hⁱ of the geometric generic fibre has length at most that of the torsion in crystalline Hⁱ(𝒳k/W(k)).

**How the definition helps.** After base change to 𝒪, one object RΓ(Ainf) specializes to both cohomologies, so the inequality concerns one module. Inverting μ gives étale cohomology tensored with Ainf\[1/μ\], and base change to W(k̄) gives crystalline cohomology. For a Breuil–Kisin–Fargues module, the torsion length can only grow at the closed point (our own summary of Bhatt–Morrow–Scholze). The work moves into the étale and crystalline comparison theorems for RΓ(Ainf).

**Paper or page:** [Bounding crystalline torsion from étale torsion](https://arxiv.org/abs/2506.13543). It says: “There is an inequality length(Hⁱ\_ét(𝒳<sub>K</sub>̄, ℤ<sub>p</sub>)<sub>tors</sub>) ≤ length(Hⁱ<sub>crys</sub>(𝒳<sub>k</sub>/W(k))<sub>tors</sub>). In particular, if Hⁱ<sub>crys</sub>(𝒳<sub>k</sub>/W(k))<sub>tors</sub> = 0, then Hⁱ\_ét(𝒳<sub>K</sub>̄, ℤ<sub>p</sub>)<sub>tors</sub> = 0.”

**Sources:**

- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)
- [Bounding crystalline torsion from étale torsion, arXiv:2506.13543 (2025)](https://arxiv.org/abs/2506.13543)

### Overconvergence gives the affine line primitives

**Remember:** Extra radius absorbs the denominators from integration.

*Rules out counterexamples. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11S80. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A p-adic power series is overconvergent on the closed unit disc if it converges on a disc of radius greater than one. For the affine line over 𝔽ₚ, Monsky–Washnitzer cohomology uses these series over ℚₚ and their differentials. Its first group consists of forms f(x) dx modulo derivatives of overconvergent functions.

**Problem.** Every overconvergent one-form in one variable over ℚₚ has an overconvergent primitive. Thus the first Monsky–Washnitzer cohomology of the affine line over 𝔽ₚ vanishes.

**How the definition helps.** Extra radius pays for the denominators introduced by integration (our own proof). Dividing the coefficient of degree n − 1 by n raises its p-adic absolute value by at most a factor n, and shrinking the radius slightly absorbs that factor. On the closed unit disc alone, take the series with coefficient pᵏ in degree p²ᵏ − 1 for k ≥ 1 (our own example). Its coefficients tend to zero, but integration gives coefficients p⁻ᵏ, so it has no convergent primitive there.

**nLab:** [Monsky-Washnitzer cohomology](https://ncatlab.org/nlab/show/Monsky-Washnitzer+cohomology). It says: “Monsky-Washnitzer cohomology is a cohomology theory for affine algebraic schemes over fields of positive characteristic.”

**Sources:**

- [Paul Monsky and Gerard Washnitzer, Formal Cohomology I (1968)](https://doi.org/10.2307/1970571)

### Prismatic cohomology preserves derived pushouts

**Remember:** A left adjoint carries a derived pushout to a derived pushout.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 4: research.

**Definition.** Fix a bounded prism (A, I). The derived prismatic construction sends a derived A/I-algebra R to the universal complete derived δ-ring P over A with a map from R to P modulo I. A δ-structure records a lift of the p-th power map.

**Problem.** The derived prismatic construction sends pushouts of derived A/I-algebras to pushouts of complete derived δ-rings over A.

**How the definition helps.** The universal mapping property describes maps out of either construction by the same pair of compatible maps (our own proof). This gives the pushout formula directly. The comparison theorem identifies the result on p-complete animated algebras with Bhatt and Scholze’s derived prismatic cohomology. Animated algebras here are derived commutative rings modeled by simplicial commutative rings.

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447v1). It says: “is left adjoint to $- \\otimes <sub>A</sub> \\overline{A}$.”

**Sources:**

- [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447v1)

### Prismatic Dieudonné crystals classify p-divisible groups over quasi-syntomic rings

**Remember:** One crystal on all prisms replaces many Dieudonné theories.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14L05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A p-divisible group is a direct system of finite flat group schemes, like the p-power torsion of an abelian variety. A prism (A, I) is a ring with a Frobenius lift and an ideal I. A prismatic Dieudonné crystal gives a module with Frobenius on each prism over R, with linearized Frobenius cokernel killed by I. R is quasi-syntomic, a condition that holds for smooth algebras and perfectoid rings (our own gloss).

**Problem.** For quasi-syntomic R, sending a p-divisible group to its prismatic Dieudonné crystal is contravariant and fully faithful, meaning bijective on maps. It is an anti-equivalence, an equivalence that reverses arrows, when R has a quasi-syntomic cover by a perfectoid ring.

**How the definition helps.** One definition works over every quasi-syntomic base, so one theorem covers bases that earlier Dieudonné theories treated one at a time. Over perfectoid rings its value at Fontaine's prism agrees with the Scholze–Weinstein and Lau modules. The work went into the Anschütz–Le Bras proof, which descends from quasiregular semiperfectoid rings (our own summary).

**Wikipedia:** [Dieudonné module](https://en.wikipedia.org/wiki/Dieudonn%C3%A9_module). It says: “Very recently, the notion of prismatic cohomology (due to Bhatt and Scholze) has been used by Anschütz-Le Bras, Madapusi-Mondal, and Mondal to obtain generalisations of the notion of Dieudonné crystal in mixed characteristic.”

**Paper or page:** [The prismatic realization functor for Shimura varieties of abelian type](https://arxiv.org/abs/2310.08472), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282). It says: “The functor ℳ\_Δ defines a contravariant fully faithful embedding ℳ\_Δ: 𝐁𝐓<sub>p</sub>(R) → 𝐕𝐞𝐜𝐭<sup>φ\_</sup>\[0,1\](R\_Δ), which is an anti-equivalence if R admits a quasi-syntomic cover R → R̃ with R̃ perfectoid.”

**Sources:**

- [J. Anschütz and A.-C. Le Bras, Prismatic Dieudonné theory, Forum of Mathematics, Pi 11 (2023) e2](https://doi.org/10.1017/fmp.2022.22)

### Quasiregular semiperfectoid rings give prismatic sites a final object

**Remember:** For quasiregular semiperfectoid rings, prismatic cohomology is just one prism.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A ring R is quasiregular semiperfectoid if it is p-complete with bounded p-power torsion, receives a map from a perfectoid ring, and has R/p semiperfect. Also its cotangent complex over ℤₚ (the derived module of differentials) must be, after p-completion, a flat module placed in degree −1. Examples are quotients of perfectoid rings by regular sequences, such as the ring of integers of an algebraically closed perfectoid field modulo p.

**Problem.** Let (A, I) be a perfect prism and R a quasiregular semiperfectoid A/I-algebra. Then the prismatic cohomology Δ(R/A) is a ring in degree 0. It is a prism over (A, I), and it is the final object of the prismatic site of R.

**How the definition helps.** On a site with a final object, a sheaf's cohomology is its value there, so prismatic cohomology becomes the single ring Δ(R/A). The conditions on R make Δ(R/A)/I a flat module in degree 0, and this forces Δ(R/A) to be discrete (our own summary). The work goes into the Hodge–Tate comparison and the construction of prismatic envelopes, in Bhatt and Scholze's Proposition 7.10. Every quasisyntomic ring has a cover by such rings, so prismatic cohomology of other rings is computed by descent from them.

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447). It says: “Then Δ<sub>R</sub>/A is discrete and naturally admits the structure of a prism over (A,I). Moreover, it is the final object in the relative (or absolute) prismatic site of R.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Sheaves on the Cartier–Witt stack are prismatic crystals

**Remember:** Each prism is a point of the stack, so sheaves are crystals.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23, 14A30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let X be a quasi-syntomic p-adic formal scheme, a mild flatness condition (our own gloss). On a ring R with p nilpotent, a Cartier–Witt divisor is an invertible W(R)-module I with a map to W(R), subject to two conditions. The prismatization of X, due to Drinfeld and to Bhatt and Lurie, sends R to such divisors with a map from Spec W(R)/I to X. A prismatic crystal is a compatible family of complete complexes over A, for all prisms (A, I) of X.

**Problem.** Quasi-coherent complexes on the prismatization of X are the same as prismatic crystals on X. The same holds over A/Iⁿ, for the closed part cut out by Iⁿ.

**How the definition helps.** Each prism of X is a point of the prismatization, so a sheaf on it is a crystal almost by definition. A prism (A, I) gives a ring map from A to W(A), and I pulls back to a Cartier–Witt divisor (our own). So a sheaf restricts to a compatible family of modules over the prisms, which is a crystal on the prismatic site. The work went into the converse, a flat descent result of Bhatt and Lurie for quasi-syntomic X (our own summary).

**nLab:** [prismatization](https://ncatlab.org/nlab/show/prismatization), [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “When X is quasi-syntomic, one can identify the ∞-category of crystals of (p,I\_Δ)-complete complexes on (X\_Δ,𝒪\_Δ) with the derived ∞-category of quasi-coherent sheaves on WCart<sub>X</sub>”

**Paper or page:** [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051). It says: “Assume that X is a quasi-syntomic p-adic formal scheme, then there is an equivalence 𝒟<sub>qc</sub>(X<sub>n</sub><sup>Δ</sup>) ⥲ lim\_(A, I)∈X\_Δ 𝒟̂(A/I<sup>n</sup>) =: 𝒟<sub>crys</sub>(X\_Δ, 𝒪\_Δ/ℐ\_Δ<sup>n</sup>) of symmetric monoidal stable ∞-categories.”

**Sources:**

- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)
- [V. Drinfeld, Prismatization, Selecta Mathematica (2024)](https://doi.org/10.1007/s00029-024-00937-3)
- [B. Bhatt, Algebraic geometry in mixed characteristic, preprint (2021), arXiv:2112.12010](https://arxiv.org/abs/2112.12010)

### Syntomic cohomology is the fiber of canonical minus Frobenius

**Remember:** Syntomic cohomology: degree-zero piece, compared by inclusion and by Frobenius.

*True by definition. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 19D55. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Over 𝔽p, a perfect prismatic F-gauge M is a graded module with pieces Mⁱ. It has two operators t and u that move the degree. Inverting t gives M\[1/t\], inverting u gives M\[1/u\], and a Frobenius φ identifies M\[1/u\] with M\[1/t\]. Syntomic cohomology is cohomology on the syntomification, the stack whose sheaves are F-gauges.

**Problem.** For a perfect prismatic F-gauge M, the syntomic cohomology RΓsyn(M) is the fiber of a map from M⁰ to M\[1/t\]. This map is the canonical map to M\[1/t\] minus φ applied after the canonical map to M\[1/u\].

**How the definition helps.** The syntomification is glued from the filtered prismatization along two maps, so its global sections are the fiber of canonical map minus Frobenius for every F-gauge (our own summary). For the Breuil–Kisin twist, M⁰ is the n-th Nygaard piece and M\[1/t\] is prismatic cohomology. Then the formula gives the syntomic complex ℤp(n), which Bhatt, Morrow and Scholze defined directly as such a fiber (our own). The work moves into identifying cohomology of the filtered prismatization with Nygaard-filtered prismatic cohomology (our own).

**Paper or page:** [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367). It says: “the syntomic cohomology of a given M ∈ F-Gauge<sup>perf\_Δ</sup> is computed by RΓ<sub>syn</sub>(M) = fib(M⁰ —(t<sup>∞</sup> − φ∘u<sup>∞</sup>)→ M\[1/t\])”

**Sources:**

- [Logan Hyslop, Special Values without Semi-Simplicity Via K-Theory, arXiv:2404.18367 (2025)](https://arxiv.org/abs/2404.18367)

### Truncated Barsotti–Tate groups are bundles on the syntomification

**Remember:** Weights zero and one on the syntomic stack give truncated p-divisible groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14L05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The syntomification Xˢʸⁿ of a p-adic formal scheme X is a stack built by Drinfeld and by Bhatt and Lurie. Its vector bundles are called F-gauges, and its cohomology is syntomic cohomology. A bundle has Hodge–Tate weights, integers read off from its restriction to a special locus (our own summary). An n-truncated Barsotti–Tate group is a finite flat group scheme that behaves like the pⁿ-torsion of a p-divisible group.

**Problem.** Let X be one of the p-adic formal schemes treated in the paper. Then n-truncated Barsotti–Tate groups over X are equivalent to vector bundles on Xˢʸⁿ ⊗ ℤ/pⁿ with Hodge–Tate weights 0 and 1. The equivalence is compatible with Cartier duality.

**How the definition helps.** The stack Xˢʸⁿ gives one category in which Dieudonné-type data live for every n and every base. The group attached to a bundle M is explicit: its points over C are truncated syntomic cohomology of C with coefficients in M. So the work moves into showing that this functor is represented by a truncated Barsotti–Tate group, which is Theorem C of the paper. The weights 0 and 1 match the two Hodge–Tate weights of p-divisible groups (our own).

**Paper or page:** [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups](https://arxiv.org/abs/2412.10226), [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups](https://arxiv.org/abs/2412.10226). It says: “Then there is a canonical equivalence of categories 𝒢ₙ : Vect<sub>0,1</sub>(X<sup>syn</sup> ⊗ ℤ/pⁿℤ) ≃→ BTₙ(X) compatible with Cartier duality.”

**Sources:**

- [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups, arXiv:2412.10226](https://arxiv.org/abs/2412.10226)

### Augmentation powers bound integral length

**Remember:** Each augmentation factor takes one letter to detect.

*Makes the theorem clean to state or prove.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 58A12. arXiv math.AG. Level 4: research.

**Definition.** Take loops based at one point on a smooth complex algebraic curve, identifying loops related by a deformation fixing that point. Form their real group algebra, whose multiplication joins loops. The augmentation ideal J consists of sums whose coefficients add to zero. Quotient by its power of order s + 1.

**Problem.** Every deformation-invariant linear combination of iterated integrals of length at most s defines a linear functional on this quotient. Length counts the one-forms integrated in order along the loop.

**How the definition helps.** The quotient states a common bound for all loop tests of length at most s (our own). The ideal J is spanned by differences γ − 1, where 1 denotes the constant loop (our own). Chen’s composition formula assigns consecutive blocks of forms to the factors of a product (our own). Subtracting the constant loop cancels every empty block, so s forms cannot supply s + 1 factors (our own).

**Paper or page:** [Higher order modular forms and mixed Hodge theory](https://arxiv.org/abs/0909.0714). It says: “⟨∫ ω₁ … ωᵣ, ∏ᵢ₌₁ˢ (αᵢ − 1)⟩ = { ∏ᵢ₌₁ˢ ∫αⱼ ωⱼ if r = s; 0 if r &lt; s }.”

**Sources:**

- [Kuo-Tsai Chen, Iterated integrals, fundamental groups and covering spaces (1975)](https://doi.org/10.1090/S0002-9947-1975-0377960-0)

### Length two detects puncture commutators

**Remember:** Two letters can tell which puncture comes first.

*Makes the theorem clean to state or prove.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 58A12. arXiv math.AG. Level 4: research.

**Definition.** On the complex plane minus 0 and 1, measure winding with α = dz/(2πiz) and β = dz/(2πi(z − 1)). Integrate α then β over increasing times on one path. Choose positive based loops a and b around their respective punctures, each with zero winding around the other.

**Problem.** The ordered integral on the loop aba⁻¹b⁻¹ equals one, although every ordinary integral of a closed one-form on that loop vanishes.

**How the definition helps.** Keeping the order of two measurements detects a commutator that ordinary winding integrals miss (our own). Extended linearly, Chen's product formula gives one on (a − 1)(b − 1), and zero on (b − 1)(a − 1) and on all products of three loop differences (our own). Modulo those triple products, the commutator minus one equals the difference of the two ordered products (our own). The integral depends only on the loop class because α and β are closed and α ∧ β = 0 on a complex curve (our own).

**Paper or page:** [Higher order modular forms and mixed Hodge theory](https://arxiv.org/abs/0909.0714). It says: “⟨∫ ω₁ … ωᵣ, ∏ᵢ₌₁ˢ (αᵢ − 1)⟩ = { ∏ᵢ₌₁ˢ ∫αⱼ ωⱼ if r = s; 0 if r &lt; s }.”

**Sources:**

- [Kuo-Tsai Chen, Iterated integrals, fundamental groups and covering spaces (1975)](https://doi.org/10.1090/S0002-9947-1975-0377960-0)

### One connection gives all unipotent transports

**Remember:** Carry the marked vector once and map it to every bundle.

*True by definition.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** On a once-punctured elliptic curve, a flat connection transports vectors along paths and respects deformations fixing their ends. A unipotent connection has a filtration whose successive quotients are trivial connections. The universal pointed connection is an inverse system of such connections with a marked vector at the base point. Every vector there in any unipotent connection is the image of the marked vector under a unique map respecting the connections.

**Problem.** Transporting the universal marked vector determines transport of every starting vector in every unipotent connection on the curve.

**How the definition helps.** Universality replaces a separate transport calculation in each bundle with the image of one transported vector (our own). A map respecting connections commutes with transport along every path (our own). The substantive theorem identifies the explicit elliptic Knizhnik–Zamolodchikov–Bernard equation, marked by 1, with this universal object.

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “represents the universal unipotent pointed connection on X.”

**Sources:**

- [Ben Moore, The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171)

### Ainf-cohomology specializes to de Rham cohomology at q equal to 1

**Remember:** Set q = 1 in the q-de Rham complex and you get de Rham.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Ainf-cohomology is AΩ = Lη(μ) Rν∗Ainf, with μ = q − 1 where q = \[ε\]. Fontaine's map θ from Ainf onto 𝒪 sends q to 1. Locally, with coordinates, AΩ is the q-de Rham complex, whose differential is the q-derivative (f(qT) − f(T))/(qT − T).

**Problem.** For a smooth map 𝔛 → 𝔜 of formal schemes over 𝒪, AΩ tensored along θ is the de Rham complex, up to almost zero modules. These are modules killed by the maximal ideal of 𝒪, and the error vanishes when 𝔜 is locally of finite type.

**How the definition helps.** The q-de Rham complex deforms the de Rham complex in a variable q, so setting q = 1 gives the de Rham complex. The map θ sends q to 1 and each q-derivative to the ordinary derivative (our own). The work moves into the identification of AΩ with the q-de Rham complex (Theorem 1.3 of Gaisin–Koshikawa). It also moves into a base change step, because Lη(μ) does not commute with tensoring along θ in general (our own).

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “There is a morphism in D(D, 𝒪) q\*Ω•<sub>𝔛/𝔜</sub> → AΩ<sub>𝔛/𝔜</sub> ⊗ᴸ<sub>A<sub>inf</sub>, θ</sub> 𝒪. whose image in D(D, 𝒪ᵃ) is an almost isomorphism.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Defining periods by integrals over semi-algebraic sets makes them a ring

**Remember:** Multiply periods by taking the product of their domains.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 11J81. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A period, in the sense of Kontsevich and Zagier, is a complex number of a special kind. Its real and imaginary parts are absolutely convergent integrals of rational functions with rational coefficients. The domains of integration are subsets of ℝⁿ cut out by polynomial inequalities with rational coefficients. The paper shows that, equivalently, they are differences of volumes of such sets.

**Problem.** The periods form a subring of the complex numbers that contains the rational numbers.

**How the definition helps.** The allowed domains are closed under products and disjoint unions, so the ring property is nearly built into the definition. A product of two integrals is one integral over the product of the domains, by Fubini's theorem (our own). A sum is one integral over the two domains placed apart, and every rational number is the volume of a box (our own). What stays hard is the other direction: no natural constant, such as e, is yet proved not to be a period.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Sums and products of periods remain periods, so that the periods form a ring”

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1), [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “Les périodes forment un sous-anneau de celui des nombres complexes contenant les nombres rationnels.”

**Sources:**

- [Une introduction aux périodes, arXiv:2210.03407v1 (2022)](https://arxiv.org/abs/2210.03407v1)
- [M. Kontsevich, D. Zagier, Periods, in Mathematics Unlimited – 2001 and Beyond, Springer (2001)](https://doi.org/10.1007/978-3-642-56478-9_39)

### Derived de Rham cohomology is the largest filtered divided power thickening

**Remember:** Describe de Rham cohomology by a universal property, not a resolution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 13D03, 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** A divided power structure on an ideal gives operations γₙ that behave like xⁿ/n!. A filtered divided power thickening of A is a filtered algebra mapping onto A with such operations on the kernel. Derived algebras are simplicial or homotopy versions of commutative algebras.

**Problem.** For a derived commutative algebra A over R, derived de Rham cohomology with its Hodge filtration is the largest filtered divided power thickening of A. For a smooth map R → A it agrees with the classical de Rham complex.

**How the definition helps.** With derived divided power algebras defined, derived de Rham cohomology gets a characterization by a universal property. Our own explanation is that the older definition, due to Illusie, uses a chosen resolution of A. A universal property determines the object up to unique equivalence, so no choice of resolution enters. The abstract says the approach recovers Illusie's derived de Rham cohomology.

**Paper or page:** [Divided Powers and Derived De Rham Cohomology](https://arxiv.org/abs/2405.05153v2). It says: “together with the Hodge filtration on it, in terms of the universal property as the largest filtered divided power thickening of A.”

**Sources:**

- [Kirill Magidson, Divided Powers and Derived De Rham Cohomology, arXiv:2405.05153 (2024)](https://arxiv.org/abs/2405.05153v2)

### Derived de Rham cohomology makes the prismatic de Rham comparison functorial

**Remember:** Derived de Rham works for every algebra, even the quotient A/I.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Derived de Rham cohomology over A extends the de Rham complex from polynomial A-algebras to all A-algebras by resolving with polynomial algebras, then completes p-adically. It needs no smoothness, and we write dR(B/A) for it. A prism (A, I) is a ring A with a Frobenius lift and a special ideal I, and prismatic cohomology is defined over A/I.

**Problem.** Let (A, I) be a bounded prism and X a smooth proper formal scheme over A/I. The Frobenius twist of prismatic cohomology of X, tensored with dR((A/I)/A), is dR(X/A).

**How the definition helps.** Derived de Rham cohomology is defined for every algebra, so the theorem can use it for A/I over A, which is not smooth. Classical de Rham cohomology needs a smooth algebra or a smooth lift, and A → A/I is a quotient map. Here dR((A/I)/A) plays the role of a divided-power envelope of I (our own gloss). The general definition also allows descent from large quasisyntomic algebras, where both sides sit in degree 0 (our own summary of the strategy).

**Paper or page:** [Comparison of prismatic cohomology and derived de Rham cohomology](https://arxiv.org/abs/2012.14064). It says: “Let (A,I) be a bounded prism, and let X be a smooth proper (p-adic) formal scheme over Spf(A/I). Then we have a functorial isomorphism RΓ\_Δ(X/A) ⊗ᴸ<sub>A, φ<sub>A</sub></sub> A ⊗ᴸ<sub>A</sub> dR<sup>∧<sub></sup>(A/I)/A</sub> ≅ RΓ(X, dR<sup>∧<sub>−</sup>/A</sub>),”

**Sources:**

- [Shizhang Li and Tong Liu, Comparison of prismatic cohomology and derived de Rham cohomology, arXiv:2012.14064 (2022)](https://arxiv.org/abs/2012.14064)

### Derived F-zips exist for every smooth proper map in characteristic p

**Remember:** Keep the complexes when the Hodge–de Rham spectral sequence does not degenerate.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30, 14C30. arXiv math.AG. Level 4: research.

**Definition.** An F-zip is a vector bundle with two filtrations whose graded pieces match after a Frobenius twist. Frobenius raises functions to the p-th power in characteristic p. A derived F-zip uses filtered complexes in place of filtered bundles. The Hodge–de Rham spectral sequence computes de Rham cohomology from the cohomology of the sheaves of differential forms.

**Problem.** Every smooth proper morphism in characteristic p gives a derived F-zip. This derived F-zip is strong exactly when the Hodge–de Rham spectral sequence degenerates and the Hodge sheaves are locally free.

**How the definition helps.** The derived definition needs no degeneration, so the construction works for every smooth proper map. The classical F-zip of de Rham cohomology needs the Hodge–de Rham spectral sequence to degenerate. Some Enriques surfaces in characteristic 2 have a non-degenerate spectral sequence, so the classical theory does not apply to them. In our own words, filtered complexes keep the information that passing to cohomology loses. The cited theorem says exactly when the derived object reduces to a classical one.

**Paper or page:** [Derived F-zips](https://arxiv.org/abs/2208.01517v5), [Derived F-zips](https://arxiv.org/abs/2208.01517v5). It says: “As there are Enriques-surfaces in characteristic 2 with non-degenerate Hodge-de Rham spectral sequence, this gives a new approach, which could previously not be obtained by the classical theory of F-zips.”

**Sources:**

- [Can Yaylali, Derived F-zips, arXiv:2208.01517 (2024), Épijournal de Géométrie Algébrique, Volume 8 (April 11, 2024) epiga:10375](https://arxiv.org/abs/2208.01517v5)

### Middle cohomology inherits perfect duality

**Remember:** Passing to the image removes exactly the pairing kernels.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** On a smooth projective complex curve, remove finitely many points. Take a vector bundle with a flat algebraic connection, a rule for differentiating sections with zero curvature. Define middle de Rham cohomology as the image of compactly supported cohomology in ordinary cohomology.

**Problem.** Middle cohomology in degree one pairs perfectly with middle cohomology of the dual connection. A perfect pairing identifies either space with the linear dual of the other.

**How the definition helps.** Taking the image removes precisely the classes that pair to zero with everything on the other side. Duality first pairs compactly supported cohomology of either connection with ordinary cohomology of its dual. The maps that forget supports are transposes for those pairings. In our own linear algebra argument, their kernels are exactly the classes one must divide out to obtain a perfect pairing.

**Paper or page:** [Quadratic relations between periods of connections](https://arxiv.org/abs/2005.11525v4). It says: “These pairings are non-degenerate and their matrices satisfy the following relations”

**Sources:**

- [Javier Fresán, Claude Sabbah, Jeng-Daw Yu, Quadratic relations between periods of connections](https://arxiv.org/abs/2005.11525v4)

### Period pairings make Bessel matrices invertible

**Remember:** Recognize the Bessel matrix as a comparison matrix.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** The period matrix of the degree-k symmetric power of the Kloosterman differential system, with a square-root twist, records the integrals of basis differential forms over basis cycles. The cycles have coefficients that decay rapidly at infinity.

**Problem.** For k ≥ 1 and n = ⌊(k − 1)/2⌋, the matrix with entries ∫₀∞ I₀(t)ᵇ K₀(t)ᵏ⁻ᵇ t²ʲ dt, for 0 ≤ b, j ≤ n, is invertible. Here I₀ and K₀ are the order-zero modified Bessel functions.

**How the definition helps.** Writing the integrals as a period matrix reduces invertibility to a perfect pairing, one that detects every nonzero vector on either side. Corollary 26 identifies the Bessel matrix with this matrix up to nonzero row and column factors. In our own argument, these factors preserve invertibility. Finding the bases and computing the integrals supply the substantive comparison.

**Paper or page:** [On the Periods of Twisted Moments of the Kloosterman Connection](https://arxiv.org/abs/2306.15216v2). It says: “Moreover, P is invertible.”

**Sources:**

- [Ping-Hsun Chuang, Jeng-Daw Yu, On the Periods of Twisted Moments of the Kloosterman Connection](https://arxiv.org/abs/2306.15216v2)

### Period torsors give Galois coactions

**Remember:** Compose comparisons with symmetries to act on periods.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15, 18M25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For motives over ℚ, de Rham realization uses differential forms and Betti realization uses rational topological cohomology. The period torsor parametrizes comparisons between these realizations that preserve all maps and tensor products. The Betti motivic Galois group consists of symmetries of Betti realization preserving the same operations.

**Problem.** The algebra of formal periods has a coaction, an algebra map describing how its functions change under Betti symmetries.

**How the definition helps.** In our own argument, a Betti symmetry acts on every comparison by composition. Evaluating a function on the resulting comparison gives the coaction. Associativity gives its composition law. The torsor theorem identifies this function algebra with formal periods originally given by geometric generators and relations.

**nLab:** [motivic Galois group](https://ncatlab.org/nlab/show/motivic+Galois+group). It says: “We show that the spectrum of Kontsevich's algebra of formal periods is a torsor under the motivic Galois group for mixed motives over the rational numbers.”

**Paper or page:** [Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2). It says: “The scheme Spec ℙ̃(k) is naturally a torsor for the motivic Galois group Gₘₒₜ(k, γ) base-changed to k.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)
- [Ben Bakker, Jacob Tsimerman, Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2)

### Rapid decay recovers missing periods

**Remember:** Use paths to infinity, but only where the coefficient dies.

*Makes the theorem clean to state or prove.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 4: research.

**Definition.** On a smooth complex affine curve, weight integrals by exp(−f) for a regular function f. Complete the curve by adding points at infinity. Rapid decay homology allows paths to end there in directions where the weight tends to zero faster than every power of the local distance.

**Problem.** The complex affine line has zero ordinary first homology. For f(x) = x², its rapid decay homology contains a class with nonzero integral.

**How the definition helps.** Rapid decay admits both ends of the real axis, so this unbounded path becomes a cycle. In our own example, integrating exp(−x²) dx along it gives √π. The rapid decay pairing theorem makes this value depend only on the class, so the cycle represents a nonzero class.

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Sen operator semisimplicity splits the diffracted Hodge complex up to degree p

**Remember:** Eigenvalues −i separate the pieces, and at i = p semisimplicity must do it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Bhatt and Lurie attach to a p-adic formal scheme X its diffracted Hodge complex, with an endomorphism Θ called the Sen operator. Its conjugate filtration has i-th graded piece LΩⁱ\[−i\], built from the cotangent complex, which is Ωⁱ\[−i\] for smooth X. Θ acts on that piece as −i, and Fil p denotes step p of the filtration.

**Problem.** Let X be a smooth formal scheme over W(k), with k perfect of characteristic p and special fibre X₀. If Θ is semisimple on Fil p of the de Rham complex of X₀, then Fil p splits as ⊕ LΩⁱ\[−i\] over i ≤ p.

**How the definition helps.** With Θ, the obstruction to splitting becomes a property of one operator, namely whether it is semisimple. For i &lt; p the values −i are distinct modulo p, so eigenvalues alone split the pieces (our own summary, after Bhatt and Lurie). At i = p the value −p equals 0 modulo p, so semisimplicity is the extra condition needed. Petrov also gives a variety with a lift over W₂(k) whose Sen operator is not semisimple (his Corollary 1.4).

**Paper or page:** [Non-decomposability of the de Rham complex and non-semisimplicity of the Sen operator](https://arxiv.org/abs/2302.11389), [Non-decomposability of the de Rham complex and non-semisimplicity of the Sen operator](https://arxiv.org/abs/2302.11389), [Non-decomposability of the de Rham complex and non-semisimplicity of the Sen operator](https://arxiv.org/abs/2302.11389). It says: “If the Sen operator on Fil<sub>conj</sub><sup>p</sup> dR<sub>X₀</sub> is semi-simple then there exists a decomposition (Fil<sub>conj</sub><sup>p</sup> Ω<sup>DHod<sub>X</sub></sup>, Θ<sub>X</sub>) ≃ ⊕<sub>i=0</sub><sup>p</sup> (LΩⁱ<sub>X</sub>\[−i\], −i)”

**Sources:**

- [Alexander Petrov, Non-decomposability of the de Rham complex and non-semisimplicity of the Sen operator, arXiv:2302.11389 (2025)](https://arxiv.org/abs/2302.11389)

### Tate inversion extends the period algebra

**Remember:** Invert the Tate line to invert its comparison.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Effective Nori motives package the cohomology of algebraic varieties and their subvarieties before one allows inverse twists. The Tate line is the one-dimensional first cohomology of the punctured affine line relative to the point 1. Its period is 2πi, the integral of dz/z around zero. Define the full category by adjoining a tensor inverse to this line.

**Problem.** The numerical period algebra of all Nori motives over ℚ is the effective period algebra with 1/(2πi) adjoined.

**How the definition helps.** Adjoining the inverse line turns its period into a reciprocal because tensor products multiply comparison coefficients. In our own calculation, tensoring an effective object with inverse powers divides its coefficients by powers of 2πi. Every full motive arises this way. Nori’s theorem supplies the result that this construction gives a category with duals.

**Paper or page:** [Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2). It says: “by inverting ℋ¹ι(𝔾ₘ, {1}) is a rigid tensor category with fiber functor Hι.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)
- [Ben Bakker, Jacob Tsimerman, Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2)

### Tensor comparisons multiply motivic periods

**Remember:** Tensor the vectors and the functionals to multiply their periods.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15, 18M25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A realization assigns vector spaces to geometric objects. De Rham realization uses differential forms, and Betti realization uses topological cohomology. A tensor comparison T identifies the two assignments while preserving maps and tensor products. For a de Rham vector v and a Betti linear functional λ, define their motivic period as the function T ↦ λ(Tv).

**Problem.** Multiplying two motivic periods gives the period of the tensor product, with vector v ⊗ w and functional λ ⊗ μ.

**How the definition helps.** In our own calculation, T sends v ⊗ w to Tv ⊗ Tw, so applying λ ⊗ μ multiplies the two values. Proposition 5.22 identifies these functions with motivic periods presented by symbols and relations.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “𝒫ᵐ is isomorphic to the space of regular functions on the affine ℚ-scheme Isom⊗(ωdR, ωB).”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Twisted exactness kills weighted integrals

**Remember:** Differentiate the exponential weight as well as the form.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let f be a regular function on a smooth complex affine variety. For integrals weighted by exp(−f), define the twisted derivative of a form ω as Dω = dω − df ∧ ω. A rapid decay cycle may approach infinity where the weight decays faster than every power of the distance to the boundary.

**Problem.** The weighted integral of a twisted exact form on a rapid decay cycle is zero. Ordinary exactness cannot replace twisted exactness because dx integrates to √π with weight exp(−x²) on the real line.

**How the definition helps.** The twisted derivative includes the term from differentiating the weight. Our own calculation gives exp(−f)Dω = d(exp(−f)ω). Stokes’ theorem gives zero on a rapid decay cycle because decay removes the boundary term for algebraic forms. The comparison theorem proves the stronger result that the pairing detects every nonzero class.

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Building motives by inverting affine-line projections makes M(X × 𝔸¹) ≅ M(X)

**Remember:** Once projections along affine lines are invertible, adding an affine line changes nothing.

*True by definition. Confidence: medium.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C15. arXiv math.AG. Level 4: research.

**Definition.** A sheaf with transfers pulls sections back along finite correspondences, which are multivalued maps, as well as ordinary maps. Take complexes of such sheaves for the Nisnevich topology, which lies between the Zariski and étale topologies. Effective motives come from forcing each projection X × 𝔸¹ → X to become an isomorphism. Voevodsky's other model uses complexes whose cohomology sheaves do not change when one crosses with 𝔸¹.

**Problem.** For a smooth variety X, the projection X × 𝔸¹ → X induces an isomorphism of effective motives.

**How the definition helps.** In the localization definition, this projection is one of the maps made invertible, so the claim holds by definition. In the other model, one must show that the motives of X × 𝔸¹ and X agree after passing to 𝔸¹-invariant complexes (our own). The work moves into the theorem that the two models are equivalent. That theorem uses Voevodsky's results on homotopy-invariant sheaves with transfers (our own).

**Paper or page:** [Integral cohomology of dual boundary complexes is motivic](https://arxiv.org/abs/2408.17301v1). It says: “M(X × 𝔸¹) ≅ M(X)”

**Sources:**

- [Tao Su, Integral cohomology of dual boundary complexes is motivic, Theorem 1.1](https://arxiv.org/abs/2408.17301v1)

### Closure under sums gives Tate approximation

**Remember:** Allow arbitrary sums so each motive has a universal Tate approximation.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Start with the rational motives ℚ(n), the basic coefficient objects in each integer weight n. Generate a subcategory by allowing shifts of degree, cones that encode maps, and arbitrary direct sums. This is the localizing category of mixed Tate motives.

**Problem.** Over a perfect field, each rational motive M receives a universal map T → M from a mixed Tate motive. Every map from a mixed Tate motive to M factors uniquely through it.

**How the definition helps.** Allowing arbitrary sums gives a category to which Brown’s representability theorem applies. Its Tate generators are compact, meaning maps from them commute with arbitrary direct sums. Our own explanation fixes M and considers maps into M from mixed Tate motives. This functor takes sums to products and exact triangles to long exact sequences. Brown’s theorem represents it by T, giving the required universal map.

**nLab:** [mixed Tate motive](https://ncatlab.org/nlab/show/mixed+Tate+motive). It says: “it follows from a theorem of Amnon Neeman that the inclusion admits a right adjoint.”

**Sources:**

- [Burt Totaro, Adjoint functors on the derived category of motives (2018)](https://doi.org/10.1017/S1474748016000104)

### Dual motives give Poincaré duality

**Remember:** Dualize the motive to reverse its cohomology arrows.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C15. arXiv math.AG. Level 4: research.

**Definition.** Let X be smooth and projective of pure dimension d over a perfect field. Its motive M(X) is an object representing its algebraic cohomology. Write ℤ(q)\[p\] for the coefficient object of weight q shifted by p degrees. Define cohomology H(p,q) by maps from M(X) to ℤ(q)\[p\], and homology by maps in the reverse direction.

**Problem.** If X has pure dimension d, motivic cohomology H(p,q) is canonically isomorphic to motivic homology in degree 2d − p and weight d − q.

**How the definition helps.** Defining both groups by maps turns the degree change into a calculation with dual objects. Our own deduction uses the duality theorem for smooth projective varieties. It identifies the dual of M(X) with M(X) tensored with ℤ(−d)\[−2d\]. Dualizing a map reverses its direction and changes the indices as claimed. A proof using cycles instead needs the geometric pairing defined by the diagonal.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “there is a Poincaré duality isomorphism”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Finite coefficients make motivic base change between algebraically closed fields fully faithful

**Remember:** Mod n, enlarging an algebraically closed field adds no new motivic maps.

*Rules out counterexamples. Confidence: medium.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 19E15, 55P42. arXiv math.AG, math.KT. Level 4: research.

**Definition.** The stable motivic homotopy category SH(F) of Morel and Voevodsky is the homotopy theory of spectra over F in which the affine line is contractible. Its mod-n version SH(F, ℤ/n) computes maps with ℤ/n coefficients.

**Problem.** For an extension E/F of algebraically closed fields of characteristic zero, the base change functor SH(F, ℤ/n) → SH(E, ℤ/n) is fully faithful. This extends Suslin rigidity from K-theory to all motivic spectra.

**How the definition helps.** Finite coefficients remove the divisible groups, such as the unit group Fˣ, that separate two algebraically closed fields. With integer coefficients the functor is not full (our own). Maps from the sphere spectrum to its suspension by the multiplicative group 𝔾ₘ form the group Fˣ here (our own). The map Fˣ → Eˣ is not onto when E is larger (our own). Mod n, only Fˣ/n = 0 and the n-th roots of unity remain, and these agree (our own).

**Wikipedia:** [Rigidity (K-theory)](https://en.wikipedia.org/wiki/Rigidity_%28K-theory%29). It says: “show that the base change functor for the mod-n stable A¹-homotopy category SH(F, ℤ/n) → SH(E, ℤ/n) is fully faithful”

**Sources:**

- [O. Röndigs and P. A. Østvær, Rigidity in motivic homotopy theory, Mathematische Annalen 341 (2008) 651–675](https://doi.org/10.1007/s00208-008-0208-5)

### Proper motives agree with compact supports

**Remember:** Properness makes the quasi-finite cycle projections finite.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Fix a smooth variety X over a field of characteristic zero. To build its motive, test against smooth integral varieties U using closed irreducible reduced subvarieties of U × X. Their projections to U must be finite and surjective. For the compactly supported motive, allow dominant projections with finite fibers, so their images need only be dense.

**Problem.** For proper smooth X, the inclusion of finite correspondences induces an isomorphism from the ordinary motive to the compactly supported motive.

**How the definition helps.** Properness of X makes each projection from a closed subvariety of U × X proper over U. A proper map with finite fibers is finite, and its dense image is closed. Thus both constructions start with exactly the same generators. Our own contrasting example is the affine line. Its ordinary motive equals the motive of a point, while its compactly supported motive equals the reduced motive of the projective line.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the two are isomorphic if X is proper over k.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Stabilization makes Tate twists cancel

**Remember:** Invert the Tate object and tensoring by it becomes reversible.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Effective motives allow positive Tate twists, which tensor an object with the weight-one coefficient object ℤ(1). Shifting ℤ(1) by two degrees gives the motive of the projective line modulo the summand contributed by its base point. Define stable motives by formally making the Tate twist invertible.

**Problem.** Tensoring both source and target with ℤ(1) preserves all groups of maps between stable motives.

**How the definition helps.** An inverse twist undoes a simultaneous twist of both objects and therefore of every map between them. Our own comparison concerns the effective category, where an inverse twist is unavailable. Voevodsky’s cancellation theorem proves that passing to stable motives preserves the groups of maps between effective motives.

**nLab:** [motive](https://ncatlab.org/nlab/show/motive). It says: “at the Tate motive ℤ(1)\[2\].”

**Sources:**

- [Vladimir Voevodsky, Cancellation Theorem (2010)](https://doi.org/10.4171/DMS/5/20)

### The Kummer pair gives an extension

**Remember:** Use two sections, then remove one to see the extension.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 11G55. arXiv math.AG, math.KT. Level 4: research.

**Definition.** Work on the projective line over ℤ with 0, 1 and ∞ removed, and call its coordinate z. In the multiplicative group with coordinate t, mark the two disjoint sections t = 1 and tz = 1. Take the relative cohomological motive, which computes cohomology relative to these sections together. Shift it by one degree to obtain the Kummer motive.

**Problem.** The Kummer motive is an extension of the weight −1 Tate object ℚ(−1) by the unit ℚ(0) in the abelian category of mixed Tate motives.

**How the definition helps.** Using relative cohomology makes the two sections contribute in separate steps of one exact sequence. Our own explanation first takes the multiplicative group relative to its unit section. After the shift, this gives the Tate coefficient object ℚ(−1). The other section supplies the subobject ℚ(0). The exact sequence for nested pairs gives the extension directly, while an alternative approach computes an extension group.

**Paper or page:** [A construction of the polylogarithm motive](https://arxiv.org/abs/2305.00789). It says: “The Kummer motive 𝒦 belongs to the subcategory MT(S) and fits into a short exact sequence”

**Sources:**

- [Clément Dupont and Javier Fresán, A construction of the polylogarithm motive (2025)](https://arxiv.org/abs/2305.00789)

### The quadric ∑xᵢyᵢ = z(1−z) gives motivic spheres in every characteristic

**Remember:** Use one integral quadric instead of a model for each characteristic.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14M17. arXiv math.AG, math.AT. Level 4: research.

**Definition.** The quadric Q₂ₙ is the scheme over ℤ given by x₁y₁ + … + xₙyₙ = z(1 − z). It has the 𝔸¹-homotopy type of a motivic sphere, a sphere in the homotopy theory of algebraic varieties, and it is smooth over ℤ.

**Problem.** Over every field, including fields of characteristic 2, Q₂ₙ satisfies affine representability (Theorem 2). That is, 𝔸¹-homotopy classes of maps from a smooth affine scheme into Q₂ₙ are naive homotopy classes.

**How the definition helps.** One equation over ℤ gives a single model of the sphere that works in every characteristic. The paper shows that Q₂ₙ is a homogeneous space for SO₂ₙ₊₁ over ℤ, and this gives affine representability. In our own explanation, the usual sphere, a sum of squares equal to 1, is not smooth in characteristic 2.

**Paper or page:** [Affine representability of quadrics revisited](https://arxiv.org/abs/2104.08208v2). It says: “the identification as a homogeneous space allows us to give a characteristic independent affine representability statement for motivic spheres.”

**Sources:**

- [Aravind Asok, Affine representability of quadrics revisited, arXiv:2104.08208 (2022)](https://arxiv.org/abs/2104.08208v2)

### The Tate heart classifies motivic extensions

**Remember:** An extension in the heart is a degree-one map in the derived category.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 19E15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** Let S be a nonempty open part of the spectrum of the ring of integers of a number field. Start with the category generated by the rational Tate motives ℚ(n), the coefficient objects of integer weight n. A motivic t-structure gives objects in this category cohomological degrees. Its heart, the objects concentrated in degree zero, is the abelian category of mixed Tate motives.

**Problem.** For any integer n, extensions of ℚ(0) by ℚ(n) in mixed Tate motives over S are classified by H(1,n) with rational coefficients.

**How the definition helps.** The heart supplies a category where one can ask for short exact sequences of Tate motives. Such a sequence has a connecting map from its quotient to its subobject shifted by one degree. This gives a bijection between extension classes and these maps. Our own deduction identifies the maps from ℚ(0) to ℚ(n)\[1\] with motivic cohomology. Scholbach constructs the required t-structure over S.

**Paper or page:** [Mixed Artin-Tate motives over number rings](https://arxiv.org/abs/1003.1267). It says: “Both categories enjoy a non-degenerate t-structure called motivic t-structure.”

**Sources:**

- [Jakob Scholbach, Mixed Artin-Tate motives over number rings](https://arxiv.org/abs/1003.1267)

### Truncation measures the étale defect

**Remember:** Keep the discarded étale degrees to measure what motivic cohomology misses.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14F20. arXiv math.AG. Level 4: research.

**Definition.** Let X be smooth over a perfect field and let m be invertible there. Push étale cohomology modulo m in weight n forward to a complex of Zariski sheaves on X. Cut this complex into its part through degree n and its part above degree n.

**Problem.** The map from mod-m motivic cohomology to étale motivic cohomology fits into a long exact sequence. After étale motivic cohomology in degree i comes refined unramified cohomology in degree i and index i − n − 1. The next term is motivic cohomology in degree i + 1.

**How the definition helps.** The two truncations give one long exact sequence relating the two cohomology theories. The Beilinson–Lichtenbaum theorem identifies the lower part with motivic cohomology. Alexandrou and Schreieder identify the upper part with refined unramified cohomology. At index j ≥ 0 this records classes near all points of codimension at most j that extend across points of codimension j + 1. Negative indices give zero.

**Paper or page:** [Truncated pushforwards and refined unramified cohomology](https://arxiv.org/abs/2406.07092). It says: “Then there is a natural long exact sequence”

**Sources:**

- [Theodosis Alexandrou and Stefan Schreieder, Truncated pushforwards and refined unramified cohomology](https://arxiv.org/abs/2406.07092)
- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ coefficients (2011)](https://annals.math.princeton.edu/2011/174-1/p11)

### Étale truncation locates the comparison range

**Remember:** Keep étale cohomology sheaves up to the weight.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Let X be smooth over a field and ℓ a prime different from its characteristic. Push étale cohomology with coefficients in the j-th tensor power of the ℓ-th roots of unity forward to a complex of Zariski sheaves on X. Truncate it by keeping its cohomology sheaves only through degree j.

**Problem.** For j ≥ 0 the cycle map from motivic to étale cohomology is an isomorphism through degree j and injective in degree j + 1.

**How the definition helps.** Discarding degrees above j leaves comparison unchanged through degree j and allows a kernel only after degree j + 1. This follows from the long exact cohomology sequence. The Beilinson–Lichtenbaum theorem identifies the truncated complex with the alternative motivic complex built from cycles. Our own example uses the real field, ℓ = 2 and weight zero. Complex conjugation gives a nonzero étale class in degree one, where motivic cohomology vanishes.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “is an isomorphism for all j ≥ i and is injective for all j ≥ i − 1.”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ coefficients (2011)](https://annals.math.princeton.edu/2011/174-1/p11)

### Atlas cochains retain stabilizer characters

**Remember:** Keep the overlaps to keep the stabilizers.

*Rules out counterexamples. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14D23. arXiv math.AG. Level 4: research.

**Definition.** A classifying stack remembers a group as the symmetries of a point. Its atlas nerve records strings of group elements as successive overlaps of the point with itself. Integral Deligne–Beilinson cohomology compares integral cochains on these overlaps with differential forms filtered by holomorphic degree.

**Problem.** For the classifying stack of the complex m-th roots of unity, degree two integral Deligne–Beilinson cohomology of weight one is ℤ/m. The ordinary point has zero in that degree and weight.

**How the definition helps.** The overlap cochains compute group cohomology, so they retain the symmetry group that disappears on the ordinary point (our own). Averaging over the group kills positive-degree complex cohomology, leaving its degree two integral cohomology ℤ/m (our own). The descent theorem justifies computing on these overlaps (our own).

**Paper or page:** [Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1). It says: “Let 𝒳 be a Deligne-Mumford stack of finite type over ℂ. Then there is an exact sequence”

**Sources:**

- [Zhiyuan Li and Xun Zhang, Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1)

### Correspondences commute with Abel–Jacobi

**Remember:** Apply the correspondence before or after taking the Deligne class.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14C25. arXiv math.AG. Level 4: research.

**Definition.** For a cycle with zero integral cohomology class, its Abel–Jacobi invariant is its Deligne cycle class in the intermediate Jacobian, a complex torus. A correspondence is a cycle on a product acting by pullback, product with the cycle, and pushforward.

**Problem.** Between smooth projective complex varieties, applying a correspondence of degree r before taking the Abel–Jacobi invariant gives the same result as applying it afterwards. The target uses codimension p+r for an input of codimension p.

**How the definition helps.** The Deligne cycle class respects each operation that defines the correspondence (our own). This replaces a comparison of integrals on bounding chains by the product and pushforward theorems for cycle classes (our own). Identifying the result with Griffiths’s invariant still uses the comparison theorem (our own).

**Paper or page:** [Vanishing criteria for Ceresa cycles](https://arxiv.org/abs/2406.03891v2). It says: “Moreover for every α ∈ CHᵖ(X)ₕₒₘ, γ∗(AJₓᵖ(α)) = AJʏᵖ⁺ʳ(γ∗(α)).”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §7](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Jef Laga and Ari Shnidman, Vanishing criteria for Ceresa cycles](https://arxiv.org/abs/2406.03891v2)

### Deligne cycle classes recover Abel–Jacobi

**Remember:** When the ordinary class vanishes, the Deligne lift is the Abel–Jacobi class.

*Makes the theorem clean to state or prove.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14C25. arXiv math.AG. Level 4: research.

**Definition.** The Deligne cycle class records the integral class of an algebraic cycle together with its class from filtered differential forms. On a smooth projective complex variety, the kernel of the map forgetting the forms is a complex torus called the intermediate Jacobian.

**Problem.** For cycles whose integral cohomology class vanishes, the Deligne cycle class in the intermediate Jacobian equals Griffiths’s Abel–Jacobi invariant.

**How the definition helps.** A zero integral class puts the Deligne lift directly in the intermediate Jacobian. Griffiths instead integrates forms over a chain bounded by the cycle (our own). The comparison of the two answers is Esnault and Viehweg’s Theorem 7.11.

**nLab:** [Abel-Jacobi map](https://ncatlab.org/nlab/show/Abel-Jacobi+map). It says: “this induces a map from cycles to intermediate Jacobians. This is the Abel-Jacobi map”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §7, comparison with the Abel–Jacobi map](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Deligne duality shifts degree by one

**Remember:** Dualizing the comparison swaps its terms and shifts degree.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** The real Deligne cone compares forms of holomorphic degree at least p with complex cochains modulo the line (2πi)ᵖℝ. It records a filtered cochain together with a cochain one degree lower witnessing agreement in the quotient.

**Problem.** On a smooth projective complex variety of dimension d, degree n real Deligne cohomology of weight p is dual to degree 2d−n+1 of weight d−p+1.

**How the definition helps.** Dualizing the cone exchanges its terms, so the cochain placed one degree lower accounts for the extra degree (our own). Poincaré duality pairs complementary ordinary degrees (our own). The annihilator of the p-th holomorphic filtration step is step d−p+1 in the dual degree (our own).

**Paper or page:** [Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1). It says: “Let X be a proper complex algebraic manifold, equidimensional of dimension d. Then there is a perfect duality”

**Sources:**

- [J. I. Burgos Gil, Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1)

### High twists remove filtered cochains

**Remember:** Below the Hodge cutoff, only the shifted real part remains.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** The real Deligne cone compares forms of holomorphic degree at least p with complex cochains modulo the line ℝ(p) = (2πi)ᵖℝ. Projection identifies this quotient line with ℝ(p−1). The shift in the cone places quotient cochains one degree higher.

**Problem.** On a smooth complex quasi-projective variety, take n &lt; p. Degree n real Deligne–Beilinson cohomology of weight p equals ordinary degree n−1 cohomology with coefficients ℝ(p−1).

**How the definition helps.** In the cone, filtered forms start in degree p, so only the shifted quotient contributes below p (our own). Replacing the logarithmic de Rham complex by ordinary complex cochains uses the de Rham comparison theorem (our own).

**Paper or page:** [The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3). It says: “Then it defines a class in Deligne cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §§2.14–2.16](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Thu Ha Trieu, The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3)

### Hodge extensions yield two-step exactness

**Remember:** Only Hodge classes and one layer of extensions survive.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** A rational mixed Hodge structure carries filtrations by weight and holomorphic degree, with a pure Hodge decomposition on each weight quotient. Absolute Hodge cohomology takes derived maps from the weight-zero line ℚ(0) into the variety’s cochain complex with these filtrations. A twist by p lowers both Hodge indices by p.

**Problem.** In degree n, rational absolute Hodge cohomology surjects onto filtration-preserving maps from ℚ(0) to the twisted degree n cohomology of a complex algebraic variety. Its kernel classifies extensions with quotient ℚ(0) and subobject the twisted degree n−1 cohomology.

**How the definition helps.** Derived maps organize the calculation by extension degree (our own). Rational mixed Hodge structures have no higher extensions beyond degree one (our own). Thus only ordinary maps and single extensions remain, avoiding an explicit calculation with filtered cochains (our own).

**Paper or page:** [Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2). It says: “then we recover the absolute Hodge cohomology groups of Beilinson”

**Sources:**

- [Alexander Beilinson, Notes on absolute Hodge cohomology](https://doi.org/10.1090/conm/055.1/862628)
- [Raphaël Ruimy and Swann Tubach, Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2)

### Hyperplane powers split Deligne cohomology

**Remember:** Split both sides of the comparison with the same hyperplane class.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** The integral Deligne–Beilinson cone compares integral cochains with forms filtered by holomorphic degree. On the bundle of one-dimensional quotients of a vector bundle, h denotes the Deligne first Chern class of the tautological quotient line.

**Problem.** Over a smooth complex quasi-projective variety, the projective bundle of a rank r vector bundle has r summands in Deligne–Beilinson degree n and weight p. Pullback followed by multiplication by hʲ identifies summand j with base cohomology in degree n−2j and weight p−j, for 0 ≤ j &lt; r.

**How the definition helps.** The same hyperplane powers split both inputs to the cone and respect the comparison map (our own). The ordinary and filtered projective bundle formulas supply the splittings (our own). Compatibility of the Deligne product transfers them to the cone exact sequence (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “It is a morphism of complexes, so it induces a cup product in Deligne cohomology.”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, Proposition 8.5](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Jacobian classes have square zero

**Remember:** Two pure comparison terms have nothing to multiply.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** A Deligne cochain in the cone model records an integral cochain, a filtered differential form, and a cochain comparing them. The product formula pairs a comparison cochain only with an integral cochain or a filtered form.

**Problem.** On a smooth projective complex variety, the intermediate Jacobians form an ideal in the integral Deligne ring restricted to degrees twice the weights. Every product of two elements of this ideal vanishes.

**How the definition helps.** A Jacobian class has a representative with only a comparison cochain, so two such representatives multiply to zero (our own). The cone sequence identifies these classes with the kernel of the map to ordinary cohomology (our own). Comparing this product with the product on truncated holomorphic complexes takes a separate argument (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “It is a morphism of complexes, so it induces a cup product in Deligne cohomology.”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §3 and Proposition 7.10](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Logarithmic classes select algebraic units

**Remember:** Logarithmic differentials allow zeros and poles but not essential singularities.

*Rules out counterexamples.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Choose a smooth projective compactification whose boundary locally consists of coordinate hyperplanes. Deligne–Beilinson cohomology compares integral cochains with differential forms that allow logarithmic poles there. These forms use factors dz/z along boundary coordinates z.

**Problem.** For a smooth complex quasi-projective variety, degree one integral Deligne–Beilinson cohomology of weight one is the group of invertible regular functions.

**How the definition helps.** The logarithmic pole condition picks out algebraic units among nowhere-zero holomorphic functions f (our own). It requires df/f to have only logarithmic poles at the boundary (our own). On the affine line, exp(z) fails because dz has a double pole at infinity (our own). Esnault and Viehweg prove the test by extending functions meromorphically across the boundary.

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “a cohomology theory for algebraic varieties”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §§2.12–2.13](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Odd Deligne groups recover higher Brauer groups

**Remember:** A missing odd Betti group leaves a period quotient.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Cohomology of K3 type in degree 2p has types (p−1,p+1), (p,p), and (p+1,p−1), with both outer pieces one-dimensional. Its higher analytic Brauer group is the first piece modulo the projection of integral cohomology. The Deligne cone compares integral cochains with complex forms modulo holomorphic degrees at least p.

**Problem.** Suppose a smooth projective complex variety has K3 type in degree 2p and zero integral cohomology in degrees 2p−1 and 2p+1. Its degree 2p+1 integral Deligne cohomology of weight p equals the higher analytic Brauer group in degree 2p.

**How the definition helps.** The cone exact sequence leaves just the degree 2p quotient because the next integral group vanishes (our own). Hodge decomposition removes the two types with first index at least p (our own). Dividing the remaining line by projected periods recovers the analytic Brauer description (our own).

**Paper or page:** [Twists of intermediate Jacobian fibrations](https://arxiv.org/abs/2411.01953v2). It says: “is a Hodge structure of K3 type. Then we have canonical isomorphisms”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §2](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Yajnaseni Dutta, Dominique Mattei and Evgeny Shinder, Twists of intermediate Jacobian fibrations](https://arxiv.org/abs/2411.01953v2)

### Supported Deligne lifts are unique

**Remember:** Keep the support until the lift is unique.

*Rules out counterexamples.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14C25. arXiv math.AG. Level 4: research.

**Definition.** Deligne cohomology with support compares integral cochains and filtered differential forms relative to the complement of a closed set. Relative cochains record a class together with data trivializing its restriction to that complement.

**Problem.** On a smooth projective complex variety, let Z be the support of a cycle of pure codimension p. Its integral and filtered fundamental classes lift together to a unique supported Deligne class of degree 2p and weight p.

**How the definition helps.** Keeping the support kills the degree 2p−1 complex cohomology that measures ambiguity in the lift (our own). This vanishing uses the real codimension bound, and existence uses agreement of the two fundamental classes over ℂ (our own). Without support, a point on an elliptic curve has a whole Jacobian of possible lifts (our own).

**nLab:** [Abel-Jacobi map](https://ncatlab.org/nlab/show/Abel-Jacobi+map). It says: “the refinement to Deligne cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §7.1](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Weak Hodge cochains recover Deligne cohomology

**Remember:** Forget weights and retain the real and filtered comparison.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** A weak Hodge complex compares real cochains with complex cochains filtered by holomorphic degree. Weak Hodge cohomology takes derived maps from the real line of type (0,0) into this comparison. It forgets the weight filtration.

**Problem.** For a smooth projective complex variety, weak Hodge cohomology of its real Hodge complex agrees with real Deligne cohomology in every degree and twist.

**How the definition helps.** A derived map gives real and filtered cochains together with a cochain witnessing their agreement (our own). These are precisely the three entries of the Deligne cone (our own). The de Rham comparison identifies the complex of forms used here with complex cochains (our own).

**Paper or page:** [Special L-values of geometric motives](https://arxiv.org/abs/1003.1215v3). It says: “Weak Hodge cohomology identifies with Deligne cohomology”

**Sources:**

- [Alexander Beilinson, Notes on absolute Hodge cohomology](https://doi.org/10.1090/conm/055.1/862628)
- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §2](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Jakob Scholbach, Special L-values of geometric motives](https://arxiv.org/abs/1003.1215v3)

### Weights reject the torus top class

**Remember:** Meeting the Hodge cutoff does not make a class weight zero.

*Rules out counterexamples. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Rational absolute Hodge cohomology takes derived maps from the weight-zero rational line into cochains carrying weight and Hodge filtrations. A twist by one lowers each Hodge index by one and the weight by two. Deligne–Beilinson cohomology imposes the Hodge cutoff alone.

**Problem.** For the algebraic torus (ℂ∖{0})², rational absolute Hodge cohomology vanishes in degree two and weight one. Rational Deligne–Beilinson cohomology in that degree and weight has dimension one.

**How the definition helps.** Preserving weights excludes the top class because its twisted weight is two (our own). Its original type (2,2) passes the Deligne cutoff requiring first index at least one (our own). Twisted first cohomology has only type (0,0), so it supplies neither an extension nor a Deligne quotient (our own).

**Paper or page:** [Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2). It says: “then we recover the absolute Hodge cohomology groups of Beilinson”

**Sources:**

- [Alexander Beilinson, Notes on absolute Hodge cohomology](https://doi.org/10.1090/conm/055.1/862628)
- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §2](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Raphaël Ruimy and Swann Tubach, Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2)

### Étale cycle maps extend to stacks

**Remember:** A map of étale complexes still acts on an atlas.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 19E15, 14D23. arXiv math.AG, math.KT. Level 4: research.

**Definition.** The rational regulator is a map of complexes from algebraic cycles to Deligne–Beilinson cochains. Both complexes admit gluing for étale covers, which are locally isomorphisms in complex analytic coordinates. A Deligne–Mumford stack admits such a cover by a scheme.

**Problem.** For a smooth finite-type Deligne–Mumford stack over ℂ, rational codimension p cycles modulo rational equivalence map to degree 2p Deligne–Beilinson cohomology of weight p. On smooth schemes this gives Bloch’s cycle class map.

**How the definition helps.** A single map of complexes on étale covers acts on the cohomology obtained by gluing over the stack (our own). This replaces constructing classes separately on each stack (our own). The comparison theorems identify the source with rational Chow groups and the target with Deligne–Beilinson cohomology (our own).

**Paper or page:** [Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1). It says: “If 𝒳 is a smooth scheme, the cycle class map clᴰᴮ agrees with the Deligne-Beilinson cycle class map defined in”

**Sources:**

- [Zhiyuan Li and Xun Zhang, Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1)

### Arithmetic circle modules give zeta values without semisimplicity

**Remember:** Define the Euler characteristic through K₀, and semisimplicity is no longer needed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14F30, 11G25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An arithmetic C(S¹,R)-module is a module over the cochains on the circle with coefficients in a Dedekind ring R, with finiteness conditions. The circle gives an operator e of degree one with e² = 0. In the application, e is cup product with the Frobenius class in H¹ of 𝔽p (our own). Hyslop computes K₀ of this category and defines a multiplicative Euler characteristic χ(A,e) through it.

**Problem.** For a smooth proper 𝔽p-scheme X and any integer n, the leading term of ζ(X,s) at s = n is ±χ(X,ℤ̂(n),e) times Milne's correction factor. Here the p-part of χ uses syntomic cohomology ℤp(n). Milne proved this assuming Tate's semisimplicity conjecture.

**How the definition helps.** The K₀ definition always gives a number, so the formula can be stated without semisimplicity. The classical Euler characteristic needs the cohomology of e on H∗ to be finite, and without semisimplicity that can fail (our own summary). The new Euler characteristic agrees with the classical one when the classical one is defined. The work moves into lifting syntomic cohomology of F-gauges and ℓ-adic cohomology to arithmetic modules.

**Paper or page:** [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367), [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367). It says: “Let X be a smooth proper 𝔽p-scheme. Then, for any integer n, we have that ζ(X,s) ∼ ±χ(X,ℤ̂(n),e)p<sup>χ(X,𝒪<sub>X</sub>,n)</sup>(1−p<sup>n−s</sup>)<sup>−ρₙ</sup> as s → n.”

**Sources:**

- [Logan Hyslop, Special Values without Semi-Simplicity Via K-Theory, arXiv:2404.18367 (2025)](https://arxiv.org/abs/2404.18367)

### Witt Frobenius handles field extensions

**Remember:** Witt Frobenius keeps the point counts from extensions of degrees divisible by r.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a variety over a finite field, let Z be its zeta series. Its nth ghost coordinate is the coefficient of tⁿ in tZ′/Z and counts points over the extension of degree n. On integral series with constant term one, the rth Witt Frobenius takes coordinate rn as its new coordinate n.

**Problem.** For each positive integer r, the rth Witt Frobenius gives the zeta series after extending the base field by degree r.

**How the definition helps.** In our own explanation, the coordinate shift reads the required point counts directly from the original series. An extension of degree n over the new field has degree rn over the original field. The Witt construction realizes this shift on integral series, where all the coordinates together determine the series.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “Moreover, the Frobenius operator Frᵣ on W(ℤ) corresponds to base change”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### Witt multiplication matches variety products

**Remember:** Multiply point counts to multiply zeta functions in the Witt ring.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a variety over a finite field, its zeta series Z has integer coefficients and constant term one. Its nth ghost coordinate, the coefficient of tⁿ in tZ′/Z, counts points over the extension of degree n. Define Witt multiplication of series by multiplying their ghost coordinates term by term.

**Problem.** The zeta function of a product of varieties over a finite field is the Witt product of their zeta functions.

**How the definition helps.** In our own explanation, a point of a product is a pair, so its two point counts multiply in every extension. Witt multiplication therefore gives the product variety’s zeta series directly. Constructing this multiplication on integral series takes work. There the ghost coordinates determine the series uniquely.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “For X and Y ∈ Var(𝔽q), the zeta function X ×𝔽q Y is given by the Witt product”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### The reciprocity obstruction exactly describes strong approximation on classifying varieties of tori

**Remember:** Test the reciprocity pairing before asking for a rational approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 14G20. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let K be the function field of a curve over a p-adic field. An adelic point of a variety Z is a family of points over all completions of K, integral at almost all places. Strong approximation away from a set S of places asks that rational points be dense in the adelic points without their S components. The reciprocity obstruction pairs adelic points with unramified degree-three cohomology classes of Z with coefficients ℚ/ℤ(2).

**Problem.** Let Z = E/T, where T is a torus in a split, semisimple, simply connected group E of the paper's special kind. For a nonempty finite set S of places, the closure of Z(K) in the adelic points away from S is exactly the set that passes the reciprocity test.

**How the definition helps.** Defining the obstruction turns the claim that nothing else obstructs into a precise exact sequence of pointed sets. The paper first builds varieties on which strong approximation fails, so some obstruction is needed. The reciprocity obstruction accounts for that failure. The hard direction shows that it is the only obstruction for those varieties and for classifying varieties of tori.

**Paper or page:** [Reciprocity obstruction to strong approximation over p-adic function fields](https://arxiv.org/abs/2307.08515v1). It says: “In other words, the reciprocity obstruction to strong approximation away from S is the only one for Z.”

**Sources:**

- [Haowen Zhang, Reciprocity obstruction to strong approximation over p-adic function fields, arXiv:2307.08515v1 (2023)](https://arxiv.org/abs/2307.08515v1)

### Dualizable solid modules are perfect complexes, so vector bundles glue

**Remember:** Dualizability is formal, so it glues whenever the module categories glue.

*True by definition. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F06, 46S10. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A Huber pair (A, A⁺) is a Huber ring A, a standard kind of topological ring, with a chosen open subring A⁺ of bounded elements. It defines an affinoid adic space. It has a category of solid modules, and an object is dualizable if it has a dual for the solid tensor product.

**Problem.** For every Huber pair (A, A⁺), the dualizable solid modules are exactly the perfect complexes over A. So perfect complexes and vector bundles glue on adic spaces, which recovers and slightly generalizes the gluing results of Kedlaya and Liu.

**How the definition helps.** Dualizability is defined by the tensor structure alone, so it descends once the whole module categories descend. Descent for solid modules is formal (Proposition 12.18 of the analytic notes), and dualizable objects descend with them. Kedlaya and Liu proved the gluing with explicit estimates on Banach modules (our own). Here the work moves into Theorem 14.9, which identifies dualizable solid modules with perfect complexes; Remark 14.10 adds vector bundles.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module). It says: “Using the notion of adic spaces, we can glue together solid modules”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)

### Solid almost modules give rigid spaces mod p Poincaré duality

**Remember:** Pass from 𝔽ₚ-sheaves to almost modules, where solid six functors exist.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Almost mathematics treats a module killed by the maximal ideal of the ring of integers as zero. Mann's solid almost O⁺/π-modules are solid modules over the integral structure sheaf modulo a small element π, up to almost zero modules.

**Problem.** Let K be algebraically closed of characteristic 0 with residue characteristic p. For a proper smooth rigid-analytic variety X of dimension d over K, cup product pairs Hⁱ(X, 𝔽ₚ) and H²ᵈ⁻ⁱ(X, 𝔽ₚ) perfectly into 𝔽ₚ(−d).

**How the definition helps.** Solid almost modules carry a six-functor formalism, so Poincaré duality becomes a computation of f⁽!⁾ for a smooth map, as in ℓ-adic theory. With p equal to the residue characteristic, étale 𝔽ₚ-sheaves alone give no usable f⁽!⁾ on non-proper spaces (our own). Almost mathematics is needed to make 𝒪⁺/π acyclic on affinoid perfectoid spaces, as the nLab page notes. The work is in Mann's construction of the formalism and of the trace map; Zavyalov proved the same duality earlier by other methods.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module), [six operations](https://ncatlab.org/nlab/show/six+operations). It says: “In Mann22, Mann combines the theory of solid modules with the theory of almost modules to construct the derived ∞-category (in the sense of 1.3.2 of LurieHA) 𝒟□ᵃ(𝒪ₓ⁺/π) of solid 𝒪ₓ⁺/π almost modules and with it the six operations on rigid analytic spaces, in order to prove the following "mod p" version of Poincare duality”

**Sources:**

- [Lucas Mann, A p-adic 6-functor formalism in rigid-analytic geometry, arXiv:2206.02022](https://arxiv.org/abs/2206.02022)
- [Bogdan Zavyalov, Mod-p Poincaré duality in p-adic analytic geometry, arXiv:2111.01830](https://arxiv.org/abs/2111.01830)

### Zariski-constructible sheaves give rigid spaces six functors and perverse sheaves

**Remember:** Stratify by analytic equations, and rigid spaces behave like schemes again.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG. Level 4: research.

**Definition.** A rigid space is an analytic space over a non-archimedean field, such as the p-adic numbers. A Zariski-closed subset is one cut out by analytic equations. An étale sheaf is Zariski-constructible when it is locally constant on each piece of a locally finite stratification by such sets.

**Problem.** On rigid spaces over a non-archimedean field of characteristic zero, the six operations keep Zariski-constructible sheaves with coefficients ℤ/n. This needs conditions on the maps, such as properness for pushforward, and it gives a perverse t-structure (Bhatt–Hansen).

**How the definition helps.** Strata cut out by analytic equations behave like strata of schemes, so arguments from algebraic geometry carry over. Bhatt and Hansen first prove generic smoothness for rigid spaces in characteristic zero, using generic points that suit spreading-out arguments. The characteristic zero assumption is essential, since generic smoothness fails in characteristic p (our own).

**Paper or page:** [The six functors for Zariski-constructible sheaves in rigid geometry](https://arxiv.org/abs/2101.09759v2). It says: “As an application, we develop a six functor formalism for Zariski-constructible étale sheaves on characteristic zero rigid spaces. Among other things, this implies that characteristic zero rigid spaces support a well-behaved theory of perverse sheaves.”

**Sources:**

- [Bhargav Bhatt, David Hansen, The six functors for Zariski-constructible sheaves in rigid geometry, arXiv:2101.09759v2 (2021)](https://arxiv.org/abs/2101.09759v2)

### Arithmetic restriction selects Galois-finite functions

**Remember:** Finite span under both actions is the condition for arithmetic extension.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Use the arithmetic fundamental group of the projective line minus 0, 1 and ∞ over a number field. Its geometric subgroup classifies covers after extending the field to its algebraic closure. A rational tangent at 0 gives a Galois action on that subgroup. Call a continuous ℚₚ-valued function representative if its translates span a finite-dimensional space.

**Problem.** The representative functions on the geometric group that extend to arithmetic representative functions are exactly those whose Galois translates span a finite-dimensional space.

**How the definition helps.** Our own proof uses functions with finite translation span in place of the abstract coordinate ring. Restriction keeps the Galois span finite, because representative functions are matrix coefficients of finite-dimensional representations. Conversely, the tangent splits the arithmetic group into the geometric subgroup and a Galois factor, and one extends the function by ignoring the Galois factor. The translation spans of a basis of its finite Galois span give a finite-dimensional space that contains all translates of the extension.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “is finite-dimensional”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Associators differ by one symmetry

**Remember:** Compose one comparison with the inverse of the other.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A normalized associator encodes how to change parentheses in a braid calculation while keeping a prescribed two-strand crossing. Describe it by an isomorphism from completed parenthesized braids to completed chord diagrams, which encode infinitesimal crossings. Require the isomorphism to fix objects and respect inserting one diagram or braid into another.

**Problem.** Over a characteristic-zero field, any two normalized associators differ by exactly one graded Grothendieck–Teichmüller symmetry of scale one.

**How the definition helps.** Two isomorphisms with the same source and target differ by exactly one target automorphism. In our own explanation, composing the second with the inverse of the first produces that automorphism. It preserves the prescribed crossing. Bar-Natan identifies these maps with solutions of the associator equations and the target symmetries with the scale-one group.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “This acts freely on the set of Drinfeld associators.”

**Sources:**

- [Dror Bar-Natan, On associators and the Grothendieck–Teichmüller group I (1998)](https://www.math.toronto.edu/drorbn/papers/GT1/GT1.pdf)

### Cover cycles give Ihara’s scalar

**Remember:** The boundary kernel has one basis vector, the lifted commutator.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Fix a prime ℓ and use the tower of abelian covers of the three-punctured projective line with covering groups of ℓ-power order. Write the two covering transformations around 0 and 1 as 1 + u and 1 + v. In completed chains, the boundary sends a pair (A,B) to uA + vB. The reduced Gassner cocycle records the Galois action on cycles in the basis (−v,u).

**Problem.** In the basis given by the lifted loop commutator, the reduced Gassner cocycle equals Ihara’s power series.

**How the definition helps.** The two descriptions give the same scalar once the cycle (−v,u) is identified with the lifted commutator. In our own calculation, uA + vB = 0 forces (A,B) to be a multiple of (−v,u), since u and v are relatively prime. Kodani, Morishita and Terashima compute the two edge coefficients of the lifted commutator and compare the actions.

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Cyclic coordinates give Ihara’s cocycle

**Remember:** One basis vector turns composition of Galois actions into a cocycle.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 4: research.

**Definition.** Take the pro-ℓ geometric fundamental group of the projective line minus 0, 1 and ∞, based at the tangent from 0 toward 1. Abelianize its closed commutator subgroup. This module is free over the completed group ring of the abelianized group, with basis the loop commutator c around 0 and 1.

**Problem.** For Galois elements σ and τ, define b(σ) by σ(c) = b(σ)c. Then b(στ) = b(σ)σ(b(τ)), so b is a cocycle.

**How the definition helps.** Our own explanation reads b from the action on one basis vector, replacing a calculation with the power series coefficients. Acting on b(τ)c by σ changes both the coefficient and the basis vector. The substantive result identifies the commutator as a free basis over the completed group ring.

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hiroaki Nakamura, Arithmetic and Combinatorics in Galois fundamental groups, §0 (2019)](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/2120-09.pdf)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Genus-zero gluing composes symmetries

**Remember:** Compose gluing symmetries as maps, not as pairs of parameters.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.AG, math.NT. Level 4: research.

**Definition.** Model a sphere with boundary circles by its symmetries up to continuous deformation, keeping its boundary markings. Gluing marked circles gives operations on these models. Pass to their finite quotients together, and use continuous symmetries fixing objects and respecting gluing.

**Problem.** Multiplication in the profinite Grothendieck–Teichmüller group becomes composition of symmetries of this genus-zero system.

**How the definition helps.** In the gluing model, associativity follows from composition of maps. Our own comparison is with Drinfeld’s description by pairs satisfying equations, where multiplication has a separate formula. Proposition 4.26 identifies the two descriptions.

**Paper or page:** [Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640). It says: “There is an isomorphism GT̂ ≅ End₀(Ŝ₀).”

**Sources:**

- [Olivia Borghi and Marcy Robertson, Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640)

### Ihara’s series specializes to Jacobi sums

**Remember:** Finite characters extract Jacobi sums from one power series.

*Makes the theorem clean to state or prove.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 11L05. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Fix an odd prime ℓ and put m = ℓⁿ with n positive. Ihara’s series records how Galois acts on the loop commutator throughout the tower of Fermat curves of ℓ-power degree. A character sends each of the two covering transformations to an mth root of unity.

**Problem.** Let σ be an arithmetic Frobenius at a prime of ℚ(ζ) away from ℓ, where ζ is a primitive mth root of unity. If a, b and a + b are nonzero modulo m, and a or b is prime to ℓ, then σ's series at (ζᵃ − 1, ζᵇ − 1) is the Jacobi sum.

**How the definition helps.** The completed group ring combines all finite character evaluations in one series. In our own explanation, the chosen character selects one part of the Fermat curve's homology. The Jacobi sum adds χ(x)ᵃχ(y)ᵇ over nonzero residues with x + y = −1, where χ raises a residue to the power (q − 1)/m and q is the residue field size. Ihara uses Weil's theorem on Fermat curves to identify this sum with the scalar on that part.

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Open subgroups admit zero extension

**Remember:** The point makes the open subgroup stable under Galois.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Take a finite unbranched algebraic cover of geometrically connected smooth curves over a number field, with compatible rational base points. A representative function is a continuous ℚₚ-valued function on a geometric fundamental group whose translates span a finite-dimensional space. Call it Galois-finite if its Galois conjugates also span a finite-dimensional space.

**Problem.** Every Galois-finite representative function on the covering curve’s group extends to one on the base curve’s group.

**How the definition helps.** Our own proof uses representative functions in place of abstract coordinate rings so that extension by zero makes sense. The covering correspondence identifies the smaller group with an open subgroup stable under Galois. Extension by zero therefore preserves the dimension of the Galois span. There are finitely many cosets, each contributing a translated copy of the original finite translation span.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “If (X,x) → (Y,y) is a finite etale cover of K-schemes equipped with base points”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Quadratic terms detect nonzero braiding

**Remember:** The xy coefficient tells whether the hexagons have a nonzero parameter.

*Rules out counterexamples.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 4: research.

**Definition.** Over an algebraically closed field of characteristic zero, take a formal series Φ in two noncommuting letters x and y with constant term one. Require it to be group-like, meaning Φ evaluated on the sums of the two tensor copies equals Φ ⊗ Φ. Impose Drinfeld’s pentagon equation, which compares ways of regrouping four inputs. Keep the solutions whose xy coefficient is nonzero.

**Problem.** Each retained solution satisfies Drinfeld’s two hexagon equations, which express compatibility with exchanging inputs, for a nonzero parameter unique up to sign.

**How the definition helps.** The coefficient test excludes exactly the solutions that need parameter zero. Furusho proves that the pentagon implies the hexagons and that the parameter squared equals 24 times the xy coefficient. Our own example is Φ = 1, which satisfies the pentagon but admits only parameter zero.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “The set of "0-associators" is what is called the Grothendieck-Teichmueller group.”

**Sources:**

- [Hidekazu Furusho, Pentagon and hexagon equations (2010)](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n1-p13-p.pdf)

### Bott–Chern forms restore character additivity

**Remember:** Put the failure of additivity into the relations.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 19E08. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An arithmetic K-group records vector bundles with smooth metrics and also classes of differential forms. For an exact sequence with subbundle A, middle bundle B and quotient C, it imposes \[A\] − \[B\] + \[C\] = a(η). Here η is the Bott–Chern form measuring the metric discrepancy, and a inserts a form as a class.

**Problem.** On a regular projective arithmetic variety, the arithmetic Chern character gives a group homomorphism from arithmetic K-theory to rational arithmetic Chow groups.

**How the definition helps.** The defining relation accounts for the discrepancy that would obstruct additivity under the ordinary relation \[B\] = \[A\] + \[C\] (our own). The characteristic-class theorem identifies the discrepancy in the target with the very same Bott–Chern form (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “φ̂(ℱ∗) − φ̂(𝒢∗) + φ̂(ℋ∗) = a(φ̃(τ̄))”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Compatible wavefront bounds permit current products

**Remember:** Opposite singular directions can cancel and make a product undefined.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A wavefront bound for a current, a generalized differential form, specifies which nonzero covectors may carry singularities. For arithmetic Chow groups, the bound is a closed cone invariant under complex conjugation. Two bounds are compatible if they contain no opposite covectors at the same point.

**Problem.** On a regular arithmetic variety, compatible bounds S and T give a product of arithmetic Chow classes with rational coefficients. Its bound is S ∪ T ∪ (S + T), where addition pairs covectors at the same point.

**How the definition helps.** Compatibility excludes cancellation of opposite singular directions, so the distribution product theorem applies (our own). A point mass has opposite singular directions and has no canonical square as a distribution (our own). Passing to arithmetic classes also requires proving that the product respects the cycle relations (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Moreover, if S ∩ (−S′) = ∅, there is a graded bilinear map”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Currents make proper pushforwards compose

**Remember:** Push a test form back twice to push its current forward twice.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A current is a generalized differential form that acts on smooth test forms. For a proper map, its direct image evaluates a test form by first pulling that form back. Arithmetic Chow groups with current coefficients allow this direct image even when a smooth input acquires singularities.

**Problem.** For composable proper maps between regular arithmetic varieties, successive direct images of arithmetic Chow classes with current coefficients equal the direct image along the composite.

**How the definition helps.** Allowing currents keeps both direct images defined, and testing against a form reduces their composition to two successive pullbacks (our own). Algebraic cycles already satisfy the composition rule (our own). The arithmetic theorem also checks the cycle relations and controls the singular directions of the result (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Furthermore, the relation (g ∘ f)∗ = g∗ ∘ f∗ is satisfied.”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Deligne classes determine compatible lifts

**Remember:** A curvature form can vary without changing the class it represents.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** The curvature of an arithmetic cycle adds integration along its cycle to the complex second derivative of its Green current. A Green current is a generalized differential form chosen to make this sum smooth. Real Deligne cohomology identifies closed forms in the relevant complex when their difference is a differential.

**Problem.** On a regular projective arithmetic variety, consider a Chow class and a closed real Deligne form of matching degree. They admit a common arithmetic lift exactly when their Deligne classes agree.

**How the definition helps.** Curvature turns the lifting problem into a comparison between the class of the form and the class of the cycle (our own). Once a Green current exists, changing its form component adds a differential to the curvature (our own). Exactness shows that this accounts for every compatible pair (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “CHᵖ(𝒳) ⊕ ZC²ᵖ(p) ⟶ H²ᵖ(C∗(p)) ⟶ 0”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Exact terms make Green products commute

**Remember:** Swapping the factors changes only terms killed in the Green quotient.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A Green current is a generalized differential form that compensates for integration along an algebraic cycle. Its star product with another Green current combines restriction to the second cycle with a term involving the first curvature. Arithmetic Chow classes identify Green terms differing by sums of derivatives under ∂ and ∂̄, the two complex parts of differentiation.

**Problem.** For properly intersecting cycles on a smooth projective variety over an arithmetic field, the two orders of the Green star product agree modulo these derivatives.

**How the definition helps.** The quotient discards the derivative terms that exchanging the two factors introduces (our own). The usual formula on representatives treats the factors differently, so commutativity there would be too strong (our own). The analytic work uses representatives with logarithmic singularities to justify integration by parts along the intersection (our own).

**nLab:** [arithmetic Chow group](https://ncatlab.org/nlab/show/arithmetic+Chow+group). It says: “pairs consisting of a codimension p subvariety of X together with a Green current for it.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)

### Green products multiply curvatures

**Remember:** The cycle term cancels, leaving the product of the two curvature forms.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG. Level 4: research.

**Definition.** A Green current g for a cycle Z has curvature ω, the smooth sum of its complex second derivative and integration along Z. For cycles Z and W meeting in the expected codimension, the Green star product adds two terms. They are the restriction of g integrated along W and the product of ω with the Green current for W.

**Problem.** For properly intersecting cycles on a smooth projective variety over an arithmetic field, the Green star product multiplies their curvature forms.

**How the definition helps.** The second term cancels the extra contribution from differentiating the restriction term (our own). Multiplying the two Green currents directly would miss this cancellation (our own). The analytic work justifies restricting representatives with logarithmic singularities and identifies the remaining cycle contribution with integration over the intersection (our own).

**Paper or page:** [Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1). It says: “Assume that the cycles α and β intersect properly.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [Souvik Goswami and Rahul Gupta, Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1)

### Self-dual torsion lifts Grothendieck duality

**Remember:** Choose torsion that obeys the same duality as the complexes.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 58J52. arXiv math.AG. Level 4: research.

**Definition.** An arithmetic complex records a complex of bundles with metrics and an additional differential form or current. Analytic torsion corrects its direct image for the choice of metrics. A torsion theory is self-dual when dualizing these data, including the relative dualizing twist and the sign on forms, preserves its correction rule.

**Problem.** For a metrized projective map between smooth complex varieties, self-dual torsion makes arithmetic duality commute with direct image up to natural isomorphism. On the source one tensors the dual with the relative dualizing complex, which accounts for duality along the fibers.

**How the definition helps.** Self-duality gives the same metric correction on both sides of the ordinary duality isomorphism (our own). Grothendieck duality supplies that underlying isomorphism, and the torsion comparison proves it respects the extra arithmetic data (our own).

**Paper or page:** [Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2). It says: “Let T be a self-dual theory of generalized analytic torsion classes.”

**Sources:**

- [J. I. Burgos Gil, G. Freixas i Montplet and R. Litcanu, Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2)

### Smooth curvature detects ordinary classes

**Remember:** Allow currents first, then detect the smooth subgroup by curvature.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** An arithmetic cycle has a curvature current, a generalized form obtained by adding integration over the cycle to a derivative of its Green term. Arithmetic Chow homology with currents permits singular curvature. Its curvature modulo smooth forms records only the singular part.

**Problem.** Suppose an arithmetic variety has projective generic fiber, the variety obtained over the base field of fractions. Ordinary arithmetic Chow homology embeds in the version with currents, with image exactly the classes whose curvature vanishes modulo smooth forms.

**How the definition helps.** Taking curvature modulo smooth forms expresses the entire obstruction to an ordinary representative in one class (our own). The comparison theorem proves injectivity and shows that smooth curvature suffices to recover such a representative (our own).

**Paper or page:** [Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1). It says: “denotes the subspace of currents that can be represented by smooth differential forms.”

**Sources:**

- [J. I. Burgos Gil, Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1)

### Tight triangles multiply Todd classes

**Remember:** An orthogonal cancellation carries no secondary metric defect.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 14C17. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A mapping cone combines a map of complexes into one complex that represents its quotient in the derived category. A tight triangle equips this cone with the metric induced from the first two complexes, up to tight isomorphism. Tight isomorphisms ignore metric changes generated by orthogonally split cancellations and by pairing an exact complex with its shift.

**Problem.** On a regular arithmetic variety, the rational arithmetic Todd class of the middle complex in a tight triangle equals the product for the outer complexes.

**How the definition helps.** Tightness forces the secondary class measuring the discrepancy between the two sides to vanish (our own). Even an identity map between lines can have a metric discrepancy if their norms differ (our own). The multiplicative characteristic-class theorem identifies precisely which correction to discard (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “In particular, if τ̄ is tightly distinguished, the equality”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Răzvan Lițcanu, Hermitian structures on the derived category of coherent sheaves](https://perso.pages.math.cnrs.fr/users/gerard.freixas/Articles/Burgos-Freixas-Litcanu-JMPA.pdf)

### Wavefront bounds permit arithmetic pullbacks

**Remember:** A pullback cannot collapse a permitted singular direction.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A wavefront set records the nonzero covectors, or directional linear functionals, along which a generalized form fails to be smooth. In an arithmetic Chow group with current coefficients, a closed cone S bounds the permitted singular directions and respects complex conjugation. A map is transverse to S if its derivative pulls no covector in S back to zero.

**Problem.** A transverse map between regular arithmetic varieties pulls arithmetic Chow classes with bound S back to classes bounded by the pulled-back cone.

**How the definition helps.** Transversality excludes the directions that prevent a distribution from having a well-defined restriction (our own). For example, restricting a point mass to its own point would require assigning it a point value (our own). The distribution pullback theorem constructs the restriction, and the arithmetic theorem checks that it respects the cycle relations (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “If $N<sub>f</sub>\\cap S=\\emptyset $, then there is a pull-back morphism”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### A principal kernel of θ makes perfectoid rings of characteristic p perfect

**Remember:** Surjective Frobenius alone allows semiperfect rings; principal θ-kernel rules them out.

*Rules out counterexamples. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 13A35. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Bhatt and Scholze call a ring R integral perfectoid if three things hold. R is π-adically complete for some π with πᵖ dividing p. Frobenius is surjective on R/p. The kernel of Fontaine's map θ from W(R♭) onto R is principal, where W(R♭) is the Witt vector ring of the tilt.

**Problem.** A ring of characteristic p is integral perfectoid if and only if it is perfect.

**How the definition helps.** The principal-kernel condition removes the semiperfect rings that are not perfect. Take R to be 𝔽ₚ\[x\] with all p-power roots of x adjoined, modulo x (our own example). This R has surjective Frobenius, but the p-th root of x is nonzero and its p-th power is 0. Its tilt maps onto R with kernel generated by t, the sequence of p-power roots of x. So ker θ is generated by p and the Teichmüller lift \[t\], and this ideal is not principal (our own). For a perfect ring R we have R♭ = R and ker θ = (p), so the condition holds.

**nLab:** [perfect ring](https://ncatlab.org/nlab/show/perfect+ring). It says: “A ring R of characteristic p is said to be perfect if the Frobenius map φ: R → R is an isomorphism. If instead φ is merely assumed to be surjective, R is said to be semiperfect.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)
- [B. Bhatt, M. Morrow and P. Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS 128 (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Almost modules make the integral structure sheaf acyclic on perfectoid spaces

**Remember:** Ignore anything that the small ideal kills.

*True by definition. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 18E35, 13C60. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Fix a ring R and a flat ideal I with I² = I. For a perfectoid ring, one takes I generated by all p-power roots of a pseudo-uniformizer; the nLab page says only that a pseudo-uniformizer generates I. A module M is almost zero if I·M = 0, and almost modules are R-modules modulo almost-zero modules.

**Problem.** On an affinoid perfectoid space, the higher cohomology of 𝒪ₓ⁺/π vanishes in almost modules. Here 𝒪ₓ⁺ is the sheaf of functions of absolute value at most 1.

**How the definition helps.** In almost modules, an almost-zero module counts as zero, so almost vanishing becomes vanishing. Scholze proved that the higher cohomology of 𝒪⁺, and of 𝒪⁺/π, is almost zero, but not zero in general; this step is from Scholze's paper, not from the nLab pages. Mann uses this with solid modules to build a p-adic six-functor formalism. The definition only moves the work: the real content is Scholze's almost-vanishing theorem.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module), [almost module](https://ncatlab.org/nlab/show/almost+module). It says: “The theory of almost modules is necessary in order to make the structure sheaf 𝒪ₓ⁺/π acyclic on affinoid perfectoid spaces”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publ. Math. IHÉS 116 (2012), arXiv:1111.4914](https://arxiv.org/abs/1111.4914)
- [Lucas Mann, A p-adic 6-functor formalism in rigid-analytic geometry, arXiv:2206.02022](https://arxiv.org/abs/2206.02022)

### As diamonds, a perfectoid space and its tilt are the same

**Remember:** Diamonds only see characteristic p test objects, so tilting changes nothing.

*True by definition.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let X be an analytic adic space over ℤₚ. Its diamond X♢ is a functor on perfectoid spaces T of characteristic p. It sends T to the set, up to isomorphism, of untilts T♯ of T with a map T♯ → X. An untilt of T is a perfectoid space whose tilt is identified with T.

**Problem.** For a perfectoid space X, the diamond X♢ is represented by the tilt X♭. For any analytic adic space X over ℤₚ, the diamond has the same underlying space and the same étale site as X.

**How the definition helps.** By the tilting equivalence, an untilt of T with a map to X is the same as a map from T to X♭. So X♢ = X♭ for perfectoid X (our own summary). Without diamonds one only has an equivalence of categories between spaces over X and over X♭. With diamonds, X and its tilt give literally the same object. For a general X one covers X by perfectoid spaces. The claims about the underlying space and the étale site then follow from the perfectoid case. The work goes into the tilting equivalence and Scholze's theory of v-sheaves.

**Paper or page:** [On the Unipotent p-adic Simpson Correspondence](https://arxiv.org/abs/2403.04565). It says: “The associated diamond functor preserves étaleness, and induces an equivalence of (finite) étale sites X\_ét ≅ X♢\_ét, X<sub>f</sub>ét ≅ X♢<sub>f</sub>ét.”

**Sources:**

- [P. Scholze, Étale cohomology of diamonds (2020)](https://doi.org/10.2139/ssrn.3542189)

### Building the Fargues–Fontaine curve from Witt vectors makes untilts into points

**Remember:** Each untilt is a quotient of W(𝒪), hence a point of the curve.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22, 11S20. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let C be an algebraically closed perfectoid field of characteristic p with ring of integers 𝒪. Fix ϖ in C with 0 &lt; \|ϖ\| &lt; 1. Let Y be the part of Spa W(𝒪) where p and the Teichmüller lift \[ϖ\] are invertible. The Fargues–Fontaine curve is the quotient of Y by the Frobenius φ, or the Proj of the graded ring of Frobenius eigenvectors.

**Problem.** The closed points of the Fargues–Fontaine curve correspond to the untilts of C of characteristic 0, up to Frobenius. The residue field at each point is the corresponding untilt.

**How the definition helps.** An untilt C♯ of C gives the surjection θ from W(𝒪) to the ring of integers of C♯. By construction of the curve, the kernel of θ is a point of Y. Dividing by Frobenius identifies untilts that differ by a Frobenius twist (our own summary). The work goes into the converse. Fargues and Fontaine show that every closed point comes from such a kernel. Their proof uses a Weierstrass-type factorization of elements of W(𝒪).

**nLab:** [Fargues-Fontaine curve](https://ncatlab.org/nlab/show/Fargues-Fontaine+curve). It says: “The Fargues-Fontaine curve X<sub>C</sub> is a complete algebraic curve whose closed points parametrize the untilts of C. Such an untilt may be recovered as the residue field of the corresponding point.”

**Sources:**

- [L. Fargues and J.-M. Fontaine, Courbes et fibrés vectoriels en théorie de Hodge p-adique, Astérisque 406 (2018)](https://doi.org/10.24033/ast.1056)

### Frobenius descent identifies sections with eigenvectors

**Remember:** A twist turns a fixed-section condition into an eigenvalue condition.

*True by definition. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14F30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The analytic Fargues–Fontaine curve over ℚₚ identifies points of a period space Y along orbits of its Frobenius automorphism φ. A line bundle looks locally like one copy of the ring of functions. For integer n, define the twist of degree n by gluing the trivial line bundle along these orbits with action p⁻ⁿφ.

**Problem.** Global sections of the twist n on the analytic Fargues–Fontaine curve are functions f on Y that satisfy φ(f) = pⁿf.

**How the definition helps.** Gluing along the orbit makes a global section exactly a function fixed by the specified action (our own explanation). Its equation p⁻ⁿφ(f) = f gives the eigenvalue immediately. In the algebraic construction, the eigenvectors instead form the graded ring used to construct the curve. The work here lies in constructing the period space and descending the bundle to its quotient (our own comparison).

**nLab:** [Fargues-Fontaine curve](https://ncatlab.org/nlab/show/Fargues-Fontaine+curve). It says: “The (relative) Fargues-Fontaine curve $X<sub>S</sub>$ is then defined to be $Y<sub>S</sub>/\\phi<sub>S</sub><sup>{\\mathbb{Z}}$</sup>, where $\\phi<sub>S</sub>$ is the Frobenius on $S$.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclear modules give ℓ-adic sheaves on v-stacks descent and six functors

**Remember:** Nuclear coefficients glue in the v-topology, so ℚℓ-sheaves get six functors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14F20, 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A small v-stack is a sheaf on perfectoid spaces for the v-topology, whose covers are, roughly, surjective maps. A solid ℓ-adic sheaf is nuclear if every map into it from a compact object is trace-class. Trace-class means the map comes from an element of a tensor product. Coefficients Λ can be ℤℓ, ℚℓ or the algebraic closure of ℚℓ.

**Problem.** For every nuclear ℤℓ-algebra Λ, nuclear Λ-modules form a v-sheaf of ∞-categories on small v-stacks, with a full six-functor formalism. For discrete Λ, they are exactly the étale sheaves.

**How the definition helps.** Nuclearity keeps exactly the solid sheaves that étale sheaves control, so the theory can satisfy v-descent and glue on any small v-stack (our own summary). Before this, no satisfying six-functor formalism with ℚℓ coefficients was known, as Mann's abstract states. The work is in Mann's proof of v-descent and in describing nuclear sheaves as colimits of basic nuclear ones.

**Paper or page:** [The 6-Functor Formalism for ℤℓ- and ℚℓ-Sheaves on Diamonds](https://arxiv.org/abs/2209.08135), [The 6-Functor Formalism for ℤℓ- and ℚℓ-Sheaves on Diamonds](https://arxiv.org/abs/2209.08135). It says: “The ∞-category of nuclear Λ-modules is stable under pullback and satisfies v-descent.”

**Sources:**

- [Lucas Mann, The 6-Functor Formalism for ℤℓ- and ℚℓ-Sheaves on Diamonds, arXiv:2209.08135](https://arxiv.org/abs/2209.08135)

### Perfect prisms are the same thing as integral perfectoid rings

**Remember:** A perfect prism is a perfectoid ring together with its Witt vector thickening.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14F30, 13F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prism is a pair (A, I): A is a δ-ring, a ring with a Frobenius lift φ, and I is an ideal locally generated by one non-zero-divisor. A is complete for (p) + I, p lies in I + φ(I)A, and the prism is perfect when φ is bijective. A ring R is integral perfectoid if it is π-complete for some π with πᵖ dividing p, and Frobenius is onto on R/p. Also the kernel of Fontaine's map θ, from the Witt vectors W(R♭) of the tilt onto R, must be principal.

**Problem.** The functor (A, I) ↦ A/I is an equivalence from perfect prisms to integral perfectoid rings. Its inverse sends R to the Witt vectors W(R♭) of the tilt, with the ideal ker θ.

**How the definition helps.** With prisms defined, Fontaine's ring W(R♭) and the kernel of θ become one object, so his construction becomes an equivalence of categories. The condition that ker θ is principal is exactly what makes (W(R♭), ker θ) a prism. The work goes into two facts in Bhatt and Scholze (our own summary). First, in a perfect prism the ideal I is generated by one distinguished element. Second, a perfect p-complete δ-ring is the Witt vectors of its reduction modulo p.

**nLab:** [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “A prism (A,I) is perfect if A is perfect. The category of perfect prisms is equivalent to the category of integral perfectoid rings”

**Paper or page:** [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105). It says: “The category of perfect prisms is equivalent to the category of integral perfectoid rings. The equivalence functors are (A,I) → A/I, and R → (W(R♭), Ker(θ)).”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Perfectoid fields share their Galois group with their tilt

**Remember:** Tilting moves to characteristic p but keeps the Galois group.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 12J25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid field is a complete non-archimedean field with residue characteristic p and a non-discrete rank one valuation, on which Frobenius is onto on O/p. Its tilt K♭ is the fraction field of the limit of O/p under Frobenius. The tilt has characteristic p.

**Problem.** For any perfectoid field K, the absolute Galois groups of K and of its tilt are isomorphic. So a question about a mixed characteristic field becomes one about a characteristic p field.

**How the definition helps.** The definition is what makes tilting work: finite étale algebras over K match those over K♭ one for one. A finite étale algebra over a field is a product of finite separable extensions, so the Galois groups agree, as the page says. The non-discrete condition rules out fields like ℚₚ itself (our own). What stays hard is the almost purity theorem.

**Wikipedia:** [Perfectoid space](https://en.wikipedia.org/wiki/Perfectoid_space). It says: “the almost purity theorem implies that for any perfectoid field K the absolute Galois groups of K and K♭ are isomorphic.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publications Mathématiques de l'IHÉS 116 (2012)](https://doi.org/10.1007/s10240-012-0042-x)

### Perfectoid rings are stably uniform, so their adic spectra are sheafy

**Remember:** Perfectoid survives rational localization, so uniformity does too, and sheafiness follows.

*Rules out counterexamples.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A Tate ring is a topological ring with a unit ϖ whose powers tend to 0. It is uniform if its power-bounded elements, those whose powers stay bounded, form a bounded subring A°. It is stably uniform if every rational localization (the ring on a basic open set of Spa(A, A⁺)) is uniform. A perfectoid Tate ring is complete and uniform, with ϖᵖ dividing p in A° and Frobenius bijective from A°/ϖ to A°/ϖᵖ.

**Problem.** Every perfectoid Huber pair is sheafy: the structure presheaf on Spa(A, A⁺) is a sheaf, and it has no higher Čech cohomology.

**How the definition helps.** Stable uniformity removes the Huber rings whose structure presheaf is not a sheaf, and perfectoid rings are stably uniform. They are, because rational localizations of perfectoid rings are perfectoid. Such bad rings exist: Buzzard and Verberkmoes give explicit examples. The work goes into two theorems. Scholze proved the localization fact for perfectoid algebras. Buzzard and Verberkmoes showed that stably uniform Huber pairs are sheafy.

**Paper or page:** [Adic spaces](https://arxiv.org/abs/2405.06435), [Adic spaces](https://arxiv.org/abs/2405.06435), [Adic spaces](https://arxiv.org/abs/2405.06435). It says: “Every perfectoid Huber pair (A,A⁺) is sheafy and the structure sheaf is acyclic.”

**Sources:**

- [K. Buzzard and A. Verberkmoes, Stably uniform affinoids are sheafy, Journal für die reine und angewandte Mathematik (2016)](https://doi.org/10.1515/crelle-2015-0089)
- [P. Scholze, Perfectoid spaces, Publications Mathématiques de l'IHÉS 116 (2012)](https://doi.org/10.1007/s10240-012-0042-x)

### Perfectoid rings let you move étale problems to characteristic p

**Remember:** Perfectoid means Frobenius is surjective enough to move between characteristics 0 and p.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid ring is a complete Tate ring A whose power-bounded elements A° form a bounded set. It has a pseudo-uniformizer ϖ with ϖᵖ dividing p in A°, such that Frobenius from A°/ϖ to A°/ϖᵖ is an isomorphism. Its tilt A♭ is the limit of A under x ↦ xᵖ, made into a ring of characteristic p.

**Problem.** For a perfectoid ring R, tilting gives an equivalence between finite étale R-algebras and finite étale R♭-algebras. For a perfectoid space X, it gives an equivalence between the étale sites of X and of its tilt X♭.

**How the definition helps.** The perfectoid condition is exactly what makes the tilt carry as much étale information as R. So you can move étale problems from mixed characteristic to characteristic p. This extends the theorem of Fontaine and Wintenberger on deeply ramified fields. The equivalence is a hard theorem that uses almost mathematics, and it is not a tautology.

**nLab:** [perfectoid space](https://ncatlab.org/nlab/show/perfectoid+space). It says: “this is generalized by the statement that the perfectoid spaces over fields related this way are equivalent.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, arXiv:1111.4914](https://arxiv.org/abs/1111.4914)

### Requiring 𝔪² = 𝔪 makes almost zero modules a Serre subcategory

**Remember:** Two ideal factors in an extension collapse to one when 𝔪² equals 𝔪.

*Rules out counterexamples.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 13D99, 18E35. arXiv math.AG, math.AC. Level 4: research.

**Definition.** A basic setup for almost mathematics is a ring V with an ideal 𝔪 such that 𝔪² = 𝔪, usually with 𝔪 ⊗ 𝔪 flat. A V-module M is almost zero if 𝔪M = 0. Almost modules are V-modules modulo the almost zero ones.

**Problem.** In a basic setup, the almost zero modules form a Serre subcategory, closed under submodules, quotients and extensions. So the category of almost modules is an abelian quotient category with a tensor product.

**How the definition helps.** If M is an extension of N by L and 𝔪 kills both, then 𝔪² kills M, and 𝔪² = 𝔪 gives 𝔪M = 0. Without the idempotent condition this fails, for example over ℤₚ with 𝔪 = (p) (our own example). There ℤ/p² is an extension of ℤ/p by ℤ/p. Both ends are killed by p, but ℤ/p² is not. For the valuation ring of a perfectoid field, 𝔪 is generated by all pⁿ-th roots of a pseudo-uniformizer, so 𝔪² = 𝔪 holds (our own).

**nLab:** [almost scheme](https://ncatlab.org/nlab/show/almost+scheme), [almost module](https://ncatlab.org/nlab/show/almost+module). It says: “One starts with a "basic setup" consisting of a fixed commutative unital ("base") ring V containing an ideal I such that I² = I.”

**Sources:**

- [O. Gabber and L. Ramero, Almost Ring Theory, Lecture Notes in Mathematics 1800, Springer (2003)](https://doi.org/10.1007/b10047)

### Restricting to absolutely weakly normal schemes makes the diamond functor fully faithful

**Remember:** Diamonds cannot see a cusp, so cusps must be excluded.

*Rules out counterexamples. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22, 14B05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A universal homeomorphism is a map of schemes that stays a homeomorphism after every base change. For every scheme X, the universal homeomorphisms Y → X have an initial object, the absolute weak normalization of X. X is absolutely weakly normal if it equals its absolute weak normalization. O is the ring of integers of a p-adic field, and the diamond X♢ is a sheaf on perfectoid spaces of characteristic p.

**Problem.** The functor X ↦ X♢ is fully faithful on flat, separated, absolutely weakly normal formal schemes topologically of finite type over O. Its target is the category of v-sheaves over Spd O.

**How the definition helps.** The condition removes schemes that differ from another scheme only by a universal homeomorphism, which diamonds cannot detect. For example, take the cuspidal cubic y²z = x³ over O and its normalization, the projective line over O (our own example). The normalization map is a universal homeomorphism, and the projective line is absolutely weakly normal, so it is the absolute weak normalization (our own). Proposition 2.18 of the same paper says that a proper flat scheme and its absolute weak normalization have the same diamond. So the two schemes have isomorphic diamonds but are not isomorphic. The work goes into showing that, on absolutely weakly normal schemes, maps of diamonds come from maps of schemes.

**Paper or page:** [On the p-adic theory of local models](https://arxiv.org/abs/2201.01234), [On the p-adic theory of local models](https://arxiv.org/abs/2201.01234), [Morphisms, Lemma 29.47.7.](https://stacks.math.columbia.edu/tag/0EUS). It says: “The functor X ↦ X♢ from the category of absolute weakly normal formal schemes flat, separated and topologically of finite type over O, to v-sheaves over Spd O is fully faithful.”

**Sources:**

- [J. Anschütz, I. Gleason, J. Lourenço and T. Richarz, On the p-adic theory of local models (arXiv 2201.01234)](https://arxiv.org/abs/2201.01234)

### Tilted line bundles encode tensor roots

**Remember:** A single bundle is only the first term of an untilting tower.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A line bundle looks locally like one copy of the ring of functions. Its isomorphism class belongs to the Picard group, whose multiplication is tensor product. Tilting a perfectoid space X gives a characteristic-p space whose invertible functions correspond locally to sequences of invertible functions on X. Each function is the pth power of the next.

**Problem.** Suppose the ring of global functions of the perfectoid space X is itself perfectoid. The Picard group of its tilt is the group of sequences of line bundle classes on X linked by pth tensor power.

**How the definition helps.** The description of tilted functions turns each gluing function for a line bundle into a sequence (our own explanation). Its coordinates glue line bundles on X whose classes satisfy the required tensor relations. The hard direction starts with classes and produces compatible gluing data. The perfectoid hypothesis on global functions removes the obstruction to doing this (our own explanation).

**Paper or page:** [Untilting Line Bundles on Perfectoid Spaces](https://arxiv.org/abs/2102.04354v3). It says: “Then θ : Pic X♭ → lim Pic X is an isomorphism.”

**Sources:**

- [Untilting Line Bundles on Perfectoid Spaces](https://arxiv.org/abs/2102.04354v3)

### Even stabilizers preserve Weil pairings

**Remember:** Give each non-separating node an even stabilizer to retain the pairing.

*Rules out counterexamples.* MSC 14H10 (Families, moduli of curves (algebraic)), 14H40. arXiv math.AG. Level 4: research.

**Definition.** A twisted curve can have a finite cyclic symmetry group at an ordinary crossing, called a node. Consider proper connected twisted curves without marked points over an algebraically closed field of characteristic different from two. At a node the group acts by inverse factors on the branches, and its order is prime to the characteristic. Require even order whenever separating the branches leaves the curve connected.

**Problem.** The Weil pairing pairs line bundles whose tensor squares are trivial. It detects every nontrivial such bundle exactly when the even-order condition holds.

**How the definition helps.** The parity condition excludes precisely the crossings that cause degeneracy, by Proposition 5.9. For our own example, identify two distinct points of a smooth projective curve to form one ordinary node. Separating its branches recovers the connected original curve. Give this node the trivial stabilizer, of order one. The criterion then says the pairing degenerates.

**Paper or page:** [Weil pairing on twisted curves](https://arxiv.org/abs/2310.09012v1). It says: “The Weil pairing on 𝒳 is non-degenerate if and only if the stabilizers of the non-separating nodes are of even order”

**Sources:**

- [Weil pairing on twisted curves](https://arxiv.org/abs/2310.09012v1)

### Regularized transport gives the pentagon

**Remember:** A flat connection gives the same transport around either side of the pentagon.

*True by definition. Confidence: medium.* MSC 14H10 (Families, moduli of curves (algebraic)), 14F35. arXiv math.AG. Level 4: research.

**Definition.** The Knizhnik–Zamolodchikov equation transports formal series along the interval from 0 to 1. Its coefficients have simple poles at both ends. At each end, factor out the exponential of the pole coefficient times the logarithm of the distance. The associator compares the two solutions normalized this way.

**Problem.** In the pentagon of ways to group four ordered factors, composing associators along the two-edge route gives the same map as the three-edge route.

**How the definition helps.** Defining the associator by transport turns the pentagon equation for its coefficients into equality of transport along two paths (our own). The geometric proof uses the moduli space of five marked points on a sphere, where the five boundary edges describe successive collisions (our own). Flatness gives path independence inside the real pentagon (our own). One must also identify the normalized transports along its boundary with the five substitutions into the associator (our own).

**Paper or page:** [A gentle introduction to Drinfel'd associators](https://arxiv.org/abs/2304.07012). It says: “The Pentagon Equation (\\ref{EqPentDefPentagonEquation}) for the Drinfel’d associator holds.”

**Sources:** none listed. No primary source with a working link was found.

### Disconnected curves keep Galois closures inside the theory

**Remember:** Drop connectedness, and Galois closures of curves stay curves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14H30 (Coverings of curves, fundamental group), 14H40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** In this paper, a curve need not be connected. It also need not be geometrically connected, that is, connected after extension to an algebraic closure of the base field.

**Problem.** For a finite group G acting on such a curve X, the quotient X/G is again a curve (Proposition 4.1). On Jacobians, pushforward after pullback is multiplication by \|G\|, and pullback after pushforward is the sum of the actions of G.

**How the definition helps.** Galois closures of covers of curves can be disconnected, as the abstract says. So a theory of connected curves cannot even state results about them (our own reading). With the wider convention, closures and quotients stay in the same class (our own reading). The paper deduces the needed facts from the standard connected case.

**Paper or page:** [On Galois covers of curves and arithmetic of Jacobians](https://arxiv.org/abs/2407.18258). It says: “it is convenient to work throughout with curves that are not assumed to be geometrically connected (or even connected); such curves arise naturally when taking Galois closures of covers of curves.”

**Sources:**

- [Alexandros Konstantinou, Adam Morgan, On Galois covers of curves and arithmetic of Jacobians, arXiv:2407.18258 (2024)](https://arxiv.org/abs/2407.18258)

### Leading terms lift tangential points

**Remember:** A ramified map acts on tangent directions by its first nonzero term.

*Rules out counterexamples.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let f be a finite nonconstant map between smooth curves over a field of characteristic zero. Choose local coordinates u and t vanishing at a rational point x and its image. If t ∘ f begins with auᵉ, send the tangent coordinate v to avᵉ.

**Problem.** Every nonzero tangent at f(x) lifts at x after a finite extension of the ground field.

**How the definition helps.** Our own explanation uses the first nonzero term to reduce lifting a tangent w to solving avᵉ = w. Adjoining one root suffices. For t = u² at zero, the ordinary derivative sends every tangent to zero. Changing either coordinate rescales both sides by the corresponding tangent transformation.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “there exists a tangential base point xᵥ defined over a finite Kummer extension of F”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Reduced pole orders determine genus

**Remember:** Reduce the poles before reading the ramification from their orders.

*Rules out counterexamples.* MSC 14H30 (Coverings of curves, fundamental group), 11G20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** In characteristic p, an Artin–Schreier cover of the line has an equation yᵖ − y = f(x). Translating y by h(x) changes f by hᵖ − h. Over the algebraic closure, choose a reduced equation, meaning that every pole order is prime to p.

**Problem.** For a connected degree p cover of the projective line in this form, its genus satisfies 2g = (p − 1)(∑(m + 1) − 2). Sum over the geometric poles of order m.

**How the definition helps.** In our own explanation, reduction makes each pole order m equal to the local ramification jump, the index where the ramification group changes. For our own example in odd characteristic, xᵖ + x² reduces to x + x² by subtracting xᵖ − x. The jump at infinity is two. The ramification theorem gives each pole a contribution of (p − 1)(m + 1) in the Riemann–Hurwitz genus formula.

**Paper or page:** [A Mass Formula For Artin--Schreier Curves Over Finite Fields](https://arxiv.org/abs/2203.10187). It says: “Let π be an Artin–Schreier cover with equation yᵖ − y = u(x)”

**Sources:** none listed. No primary source with a working link was found.

### Tangential fibers keep unramified sheets

**Remember:** An unramified cover has the same sheets at the point and just outside it.

*Makes the theorem clean to state or prove.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let x be a rational point on a smooth connected curve C over a field of characteristic zero. A tangential base point specifies a nonzero tangent vector at x. It selects sheets near x using compatible roots of a local coordinate with derivative one along that vector.

**Problem.** Removing x gives a surjection from the fundamental group based at the tangent to the fundamental group of C based at x. These groups describe symmetries of finite unbranched algebraic covers.

**How the definition helps.** The tangent specifies a base point on the punctured curve that can still be compared with x. Petrov identifies the sheets there with the sheets at x whenever the cover extends across x. In our own explanation, surjectivity also uses the fact that removing finitely many points leaves a connected smooth covering curve connected.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “the geometric fibers of U at x and of U\|C∖x at xᵥ are canonically identified.”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Tangents make puncture filling canonical

**Remember:** Use a tangent to recover a fiber at the missing point.

*Makes the theorem clean to state or prove.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG. Level 4: research.

**Definition.** Take a smooth geometrically connected curve C over a field of characteristic zero. Choose a rational point x and a nonzero rational tangent v there. A finite étale cover is a finite algebraic cover without branching. The tangential base point reads its sheets near x using fractional power series in a local coordinate whose derivative sends v to 1.

**Problem.** After extending scalars to an algebraic closure, filling x gives a canonical surjection from the punctured curve’s étale fundamental group to that of C. These groups act on the sheets of all finite étale covers.

**How the definition helps.** The tangent selects a fiber on the punctured curve that agrees with the ordinary fiber for every cover extending across x. Each connected cover of C stays connected after deleting the points above x (our own). The correspondence between connected covers and transitive finite group actions then gives surjectivity (our own).

**Paper or page:** [Universality of the Galois action on the fundamental group of $\\mathbb{P}<sup>1\\setminus\\{0</sup>,1,\\infty\\}$](https://arxiv.org/abs/2109.09301). It says: “the geometric fibers of U at x and of U\|C∖x at xᵥ are canonically identified.”

**Sources:**

- [Pierre Deligne, Le groupe fondamental de la droite projective moins trois points (1989)](https://doi.org/10.1007/978-1-4613-9649-9_3)

### G-normal models give curves with group scheme actions a unique good model

**Remember:** Ask each orbit, not each point, to be cut out by one equation.

*Makes the theorem clean to state or prove.* MSC 14H37 (Automorphisms of curves), 14L15. arXiv math.AG. Level 4: research.

**Definition.** A finite group scheme can be non-reduced, like the group of p-th roots of unity in characteristic p. Brion defines G-normal varieties for actions of such groups. For curves, G-normal means that the orbit of each closed point has an invertible ideal sheaf. That is, the orbit is locally cut out by one function.

**Problem.** Every curve with an action of a finite group scheme G has a unique projective G-normal model. A normal projective model with the action need not exist.

**How the definition helps.** G-normality weakens normality to a condition that the action can respect, so a good model exists again. The paper notes that an equivariant projective model always exists, but it need not be normal. The quotient of a G-normal variety by G is normal, and a G-normal curve is a local complete intersection. In higher dimension the paper gets a G-normal projective model, but uniqueness is claimed only for curves.

**Paper or page:** [Actions of finite group schemes on curves](https://arxiv.org/abs/2207.08209v2). It says: “Every action of a finite group scheme G on a variety admits a projective equivariant model, but not necessarily a normal one. As a remedy, we introduce and explore the notion of G-normalization.”

**Sources:**

- [Michel Brion, Actions of finite group schemes on curves, arXiv:2207.08209v2 (2024)](https://arxiv.org/abs/2207.08209v2)

### Limit linear series on elliptic chains prove Farkas's theta-characteristic conjecture

**Remember:** Build the sections one elliptic curve at a time.

*Makes the theorem clean to state or prove.* MSC 14H51 (Special divisors on curves (gonality, Brill-Noether theory)), 14D06. arXiv math.AG. Level 4: research.

**Definition.** A theta characteristic is a square root of the canonical line bundle of a curve. A linear series is a space of sections of a line bundle. A limit linear series on a chain of curves gives a series on each component, with matching vanishing orders at the nodes.

**Problem.** Let g ≥ (r + 2)(r + 1)/2. Consider genus-g curves with a theta characteristic that has at least r + 1 sections, with the same parity as r + 1. Their locus is non-empty and has a component of the expected codimension r(r + 1)/2.

**How the definition helps.** Limit linear series turn an existence question on smooth curves into a choice on a chain of elliptic curves. The abstract calls the resulting proof simple. Our own explanation is that the matching conditions reduce the choices to vanishing orders at each node. Our own addition is that smoothing results for limit linear series then give the smooth curves.

**Paper or page:** [Some reducible and irreducible Brill-Noether loci](https://arxiv.org/abs/2503.16255v1), [Some reducible and irreducible Brill-Noether loci](https://arxiv.org/abs/2503.16255v1). It says: “We investigate limit linear series on chains of elliptic curves, giving a simple proof of a conjecture of Farkas stating the existence of curves with a theta-characteristic with a given number of sections for the expected range of genera.”

**Sources:**

- [Richard Haburcak, Montserrat Teixidor i Bigas, Some reducible and irreducible Brill-Noether loci, arXiv:2503.16255 (2025)](https://arxiv.org/abs/2503.16255v1)

### The chord rule gives elliptic curves a structure without a chosen zero

**Remember:** Lines give the structure; a chosen point only decides which point is zero.

*Makes the theorem clean to state or prove.* MSC 14H52 (Elliptic curves), 08A02. arXiv math.AG, math.RA. Level 4: research.

**Definition.** On a plane cubic curve, x ∗ y is the third point where the line through x and y meets the curve. If x = y, the line is the tangent line. An elliptic group is a set with an operation ∗ that obeys the rules of this operation, as axioms. For example, any abelian group A with a fixed element a gives one by x ∗ y = a − x − y.

**Problem.** In an elliptic group, for any element c, the rule x + y = c ∗ (x ∗ y) is an abelian group law with zero c. Different choices of c give isomorphic groups.

**How the definition helps.** The operation ∗ uses lines only, so it needs no chosen point. The paper gives an explicit isomorphism between the groups for two choices of zero. The elliptic group can also hold more than the group. If the curve has no flex point, a point where the tangent meets the curve three times, the abelian group does not determine the elliptic group.

**Paper or page:** [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1), [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1). It says: “However, that very chord-tangent law allows us to define a rather more obscure algebraic structure, which we call an elliptic group, on the points of an elliptic curve.”

**Sources:**

- [Ilia Pirashvili, Elliptic groups and rings, arXiv:2201.05553v1 (2022)](https://arxiv.org/abs/2201.05553v1)

### Framed trees give unique polynomials

**Remember:** Two marked vertices remove the two choices in an affine coordinate.

*Rules out counterexamples.* MSC 14H57 (Dessins d'enfants theory). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A tree dessin is a plane tree whose black and white vertices alternate along edges. A frame marks one black vertex and one white vertex. The polynomial representing the tree sends black vertices to zero and white vertices to one.

**Problem.** Each framed tree determines exactly one complex polynomial whose finite critical values lie in {0,1} and whose marked vertices have coordinates 0 and 1.

**How the definition helps.** Our own explanation uses the two marks to fix the affine coordinate uniquely. The tree correspondence first gives a polynomial up to an affine change of variable. Without the marks, B(z) = 3z² − 2z³ and B(−z/2) represent the same tree. Both polynomials fix 0 and 1.

**Paper or page:** [Three arithmetic sites](https://arxiv.org/abs/2003.01387). It says: “Every framed tree dessin T is isomorphic to the framed tree dessin D(B) of a unique (!) dynamical Belyi polynomial B.”

**Sources:**

- [Lieven Le Bruyn, Three arithmetic sites](https://arxiv.org/abs/2003.01387)

### Parabolic slope gives Harder–Narasimhan strata for bundles with weighted flags

**Remember:** Count the flag weights in the slope.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14H60 (Vector bundles on curves and their moduli), 14D23. arXiv math.AG. Level 4: research.

**Definition.** A parabolic bundle on a curve is a vector bundle with flags of subspaces in the fibres at marked points. Each step of a flag has a weight. Parabolic degree is the ordinary degree plus the weights counted with multiplicity. Parabolic slope is parabolic degree divided by rank.

**Problem.** Fix any weights. The Harder–Narasimhan type of a parabolic bundle lists the slopes of the pieces in its canonical filtration by subbundles of decreasing slope. The bundles of a given type form a locally closed substack of the moduli stack.

**How the definition helps.** Parabolic slope gives the filtration used to define the types, so the strata can be stated at all. The abstract says the stratification is based on this notion of Mehta and Seshadri. Our own explanation is that ordinary slope ignores the flags, so it cannot sort parabolic bundles by their flags. The work is to show that the strata are substacks, not only sets of points.

**Paper or page:** [Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles](https://arxiv.org/abs/2101.08871v3), [Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles](https://arxiv.org/abs/2101.08871v3). It says: “For every set of parabolic weights, we construct a Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles on a curve. It is based on the notion of parabolic slope, introduced by Mehta and Seshadri.”

**Sources:**

- [Andres Fernandez Herrero, Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles, arXiv:2101.08871 (2021)](https://arxiv.org/abs/2101.08871v3)
- [V. B. Mehta and C. S. Seshadri, Moduli of vector bundles on curves with parabolic structures, Mathematische Annalen (1980)](https://doi.org/10.1007/BF01420526)

### Global topological recursion makes analyticity in families of spectral curves provable

**Remember:** Use the global formula when branch points move or merge.

*Makes the theorem clean to state or prove.* MSC 14H81 (Relationships between algebraic curves and physics), 14H70. arXiv math.AG, math-ph. Level 4: research.

**Definition.** Topological recursion builds a family of differential forms from a spectral curve, a curve with a branched map x to a base. The local rule takes residues at ramification points, where x is not locally one-to-one. The global rule is a single formula over the whole curve that does not treat each ramification point separately.

**Problem.** For globally admissible families of spectral curves, the forms produced by topological recursion depend analytically on the parameter. So taking limits commutes with the recursion along such families.

**How the definition helps.** The global formula does not single out individual ramification points, so it can stay meaningful when those points collide in the family. The abstract says that the global version makes analyticity and limits easier to study. Our own explanation is that the local formula changes form when the ramification structure changes at the limit. The authors must prove that the global and local formulas agree under their conditions.

**Paper or page:** [Taking limits in topological recursion](https://arxiv.org/abs/2309.01654v2), [Taking limits in topological recursion](https://arxiv.org/abs/2309.01654v2). It says: “To tackle this question, we formalise the notion of global topological recursion and provide sufficient conditions for its equivalence with local topological recursion. The global version facilitates the study of analyticity and limits.”

**Sources:**

- [Gaëtan Borot, Vincent Bouchard, Nitin Kumar Chidambaram, Reinier Kramer, Sergey Shadrin, Taking limits in topological recursion, arXiv:2309.01654 (2025)](https://arxiv.org/abs/2309.01654v2)

### Saturation recovers torsion sections

**Remember:** A section is torsion when a multiple of its class lands in T.

*True by definition.* MSC 14J27 (Elliptic surfaces, elliptic or Calabi-Yau fibrations), 14J28. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Take a projective complex K3 surface, a simply connected surface with a nowhere vanishing holomorphic two-form. Suppose it fibers in elliptic curves and has a section choosing their origins. Among divisor classes modulo deformation in connected algebraic families, let T be generated by the zero section and all fiber components. Its saturation contains exactly the classes with a positive integer multiple in T.

**Problem.** The sections of finite order form a group isomorphic to the saturation of T modulo T.

**How the definition helps.** Saturation turns finite order in a quotient into a membership test before taking the quotient, in our own explanation. Shioda identifies the group of sections with divisor classes modulo T. A class in that quotient has finite order precisely when a positive multiple belongs to T. Thus the saturation gives the answer without computing addition of sections.

**Paper or page:** [Elliptic fibrations on toric K3 hypersurfaces and mirror symmetry derived from Fano polytopes](https://arxiv.org/abs/2208.01465v2). It says: “Let MW(π, O)ₜₒᵣ be the torsion part of MW(π, O). Then, MW(π, O)ₜₒᵣ ≃ T̂/T.”

**Sources:** none listed. No primary source with a working link was found.

### Trivial lattices reveal section rank

**Remember:** Remove the zero section and fiber classes to count independent sections.

*Makes the theorem clean to state or prove.* MSC 14J27 (Elliptic surfaces, elliptic or Calabi-Yau fibrations), 14J28. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Take a projective complex K3 surface, a simply connected surface with a nowhere vanishing holomorphic two-form. Assume its general fibers are elliptic curves and a section chooses their origins. Identify divisors up to algebraic equivalence, which allows deformation in connected algebraic families. The zero section and all fiber components generate a subgroup of these classes called the trivial lattice.

**Problem.** The group of sections has rank equal to the rank of the divisor class group modulo algebraic equivalence minus the trivial lattice rank.

**How the definition helps.** The trivial lattice collects the classes that disappear when divisors are converted into sections, in our own explanation. Restrict a divisor to the generic fiber and subtract its degree times the chosen origin. Shioda’s theorem identifies the resulting quotient group with the sections. Taking ranks gives the formula.

**Paper or page:** [Elliptic fibrations on toric K3 hypersurfaces and mirror symmetry derived from Fano polytopes](https://arxiv.org/abs/2208.01465v2). It says: “There is an isomorphism MW(π, O) ≃ NS(S)/T of groups.”

**Sources:** none listed. No primary source with a working link was found.

### The stricter definition of irreducible symplectic variety forces half-dimensional Lagrangian fibrations

**Remember:** Demand one generating two-form on every cover branched only in codimension two.

*Rules out counterexamples. Confidence: medium.* MSC 14J42 (Holomorphic symplectic varieties, hyper-Kähler varieties), 14D06. arXiv math.AG, math.SG. Level 4: research.

**Definition.** In the definition of Greb, Kebekus and Peternell, an irreducible symplectic variety is complex projective and normal. It has mild (canonical) singularities and a symplectic form on its smooth part. Consider every finite cover that is étale away from codimension two. On each such cover, the forms defined away from the singular set must be generated by the pulled-back symplectic form.

**Problem.** Let X be an irreducible symplectic variety of dimension 2n. Let X map onto a normal projective B with connected fibres, where 0 &lt; dim B &lt; 2n. Then B has dimension n, and the general fibre is an abelian variety of dimension n.

**How the definition helps.** The form condition on every such cover rules out varieties with several independent two-forms, and the Fujiki relations then fix the dimensions (our own reading of the abstract). Fujiki relations are intersection identities for the generalized Beauville–Bogomolov form. Our own example is the product of three K3 surfaces, which is symplectic of dimension 6. Projection onto one factor has fibres of dimension 4, not 3, and the product fails the form condition because it has three independent two-forms.

**Paper or page:** [Fujiki relations and fibrations of irreducible symplectic varieties](https://arxiv.org/abs/1701.09069v3), [Fujiki relations and fibrations of irreducible symplectic varieties](https://arxiv.org/abs/1701.09069v3). It says: “This enables us to study fibrations of these varieties; imposing the newer definition from \[GKP16, Definition 8.16.2\] we show that they behave much like irreducible symplectic manifolds.”

**Sources:**

- [Martin Schwald, Fujiki relations and fibrations of irreducible symplectic varieties, arXiv:1701.09069 (2020), Épijournal de Géométrie Algébrique, Volume 4 (June 19, 2020) epiga:4557](https://arxiv.org/abs/1701.09069v3)
- [Daniel Greb, Stefan Kebekus and Thomas Peternell, Singular spaces with trivial canonical class, Advanced Studies in Pure Mathematics 70](https://doi.org/10.2969/aspm/07010067)

### Qregularity on quadrics gives a simple proof of Knörrer's theorem

**Remember:** Measure sheaves on a quadric with spinor bundles as well as line bundles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14J60 (Vector bundles on surfaces and higher-dimensional varieties, and their moduli), 14J70, 14F17. arXiv math.AG. Level 4: research.

**Definition.** Castelnuovo–Mumford regularity tests vanishing of cohomology of twists of a sheaf by the line bundles O(k) on projective space. On a smooth quadric hypersurface, Ballico and Malaspina also use the spinor bundles, the extra basic bundles of a quadric. A sheaf is m-Qregular when certain cohomology groups of its twists, and of its twists tensored with the spinor bundles, vanish.

**Problem.** On a smooth quadric hypersurface, a vector bundle with no intermediate cohomology in any twist is a direct sum of line bundles and twisted spinor bundles (Knörrer).

**How the definition helps.** Qregularity puts the spinor bundles into the test, so it matches the cohomology of a quadric. With Qregularity, the authors extend the Evans–Griffith criterion, which detects sums of line bundles from the vanishing of some cohomology, to quadrics. Knörrer's characterization then follows as a special case by a short argument. The known cohomology of the spinor bundles is still needed as input (our own).

**Paper or page:** [Qregularity and an Extension of Evans-Griffiths Criterion to Vector Bundles on Quadrics](https://arxiv.org/abs/0802.0451v1). It says: “We use our notion of Qregularity in order to prove an extension of Evans-Griffiths criterion to vector bundles on Quadrics. In particular we get a new and simple proof of the Knörrer's characterization of ACM bundles.”

**Sources:**

- [Edoardo Ballico, Francesco Malaspina, Qregularity and an Extension of Evans-Griffiths Criterion to Vector Bundles on Quadrics, arXiv:0802.0451v1 (2008)](https://arxiv.org/abs/0802.0451v1)
- [H. Knörrer, Cohen-Macaulay modules on hypersurface singularities I, Inventiones Mathematicae (1987)](https://doi.org/10.1007/bf01405095)

### Néron models survive smooth pullback

**Remember:** Smooth tests over the new base are smooth tests over the old one.

*True by definition.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 14G20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Start with a smooth space over a dense open part U of a base S. Assume functions on S are determined by their restrictions to U. A Néron model extends the space smoothly over S and separates distinct limits. For every smooth family over S, each map from its restriction over U extends uniquely to the model.

**Problem.** Let N be the Néron model over S of a smooth space over U, and let S′ → S be smooth. Then the pullback of N to S′ is the Néron model over S′ of the pulled-back space.

**How the definition helps.** The extension property lets us test the new model without constructing it again, in our own explanation. A smooth family over the new base is smooth over S because smooth maps compose. Extend its map using the original model, then pair the extension with the map to the new base. Uniqueness follows from uniqueness over S. Constructing a model with the extension property remains a separate existence problem.

**Paper or page:** [Néron models of Jacobians over bases of arbitrary dimension](https://arxiv.org/abs/2103.06917v3). It says: “If X is the Néron model of Xᵤ, then X′ is the Néron model of Xᵤ′.”

**Sources:**

- [Néron models of Jacobians over bases of arbitrary dimension](https://arxiv.org/abs/2103.06917v3)

### Right-invariant derivations are determined by their values at the identity

**Remember:** Evaluate at the identity and use translations to recover the rest.

*True by definition.* MSC 14L15 (Group schemes), 17B45, 18M05. arXiv math.RT, math.AG. Level 4: research.

**Definition.** Let G be an affine group scheme over a symmetric tensor category, with coordinate ring O(G) and coproduct Δ, which encodes group multiplication. A map β from X ⊗ O(G) to O(G) is right invariant if it commutes with right translation. The counit η evaluates a function at the identity of G.

**Problem.** A right-invariant map β is recovered from η ∘ β by the formula β = ((η ∘ β) ⊗ 1) ∘ (1 ⊗ Δ). So a right-invariant derivation is determined by its value at the identity.

**How the definition helps.** Right invariance carries the value at the identity to every point, so there is no free choice elsewhere. In our own reading, right invariance is the equation Δ ∘ β = (β ⊗ 1) ∘ (1 ⊗ Δ). Apply η ⊗ 1 to both sides, and the counit law (η ⊗ 1) ∘ Δ = 1 turns the equation into the formula. Showing that the tangent space has the structure of a restricted Lie algebra takes separate work.

**Paper or page:** [Group schemes and their Lie algebras over a symmetric tensor category](https://arxiv.org/abs/2507.02031v1). It says: “If βₓ : X ⊗ O(G) → O(G) is right invariant then βₓ can be recovered from η ∘ βₓ via the formula”

**Sources:**

- [Dave Benson, Julia Pevtsova, Group schemes and their Lie algebras over a symmetric tensor category, arXiv:2507.02031 (2025)](https://arxiv.org/abs/2507.02031v1)

### The dot action centered at −ρ makes Bott's theorem one formula

**Remember:** Shift by ρ, reflect, shift back: that weight carries the cohomology.

*Makes the theorem clean to state or prove.* MSC 14M15 (Grassmannians, Schubert varieties, flag manifolds), 22E46, 17B56. arXiv math.RT, math.AG. Level 4: research.

**Definition.** Let G be a complex semisimple group with Borel subgroup B and Weyl group W. The dot action of W on weights is w·λ = w(λ+ρ) − ρ, where ρ is half the sum of the positive roots. It is the usual reflection action moved so that its center is −ρ.

**Problem.** Let L(λ) be the line bundle on G/B of an integral weight λ; if λ+ρ lies on a reflecting wall, all its cohomology vanishes. Otherwise, with w the unique element making w·λ dominant, only degree ℓ(w) has cohomology, dual to the irreducible module of highest weight w·λ (Bott).

**How the definition helps.** With the dot action, the two cases become one test: either a dot reflection fixes λ, or one dot move makes it dominant. Without it, the statement needs a list of shifted chambers. The work went into Bott's computation of the sheaf cohomology, or into Demazure's later short proof.

**Wikipedia:** [Borel–Weil–Bott theorem](https://en.wikipedia.org/wiki/Borel%E2%80%93Weil%E2%80%93Bott_theorem). It says: “For any integral weight λ and w in the Weyl group W, we set w\*λ := w(λ+ρ)−ρ, where ρ denotes the half-sum of positive roots of G.”

**Sources:**

- [R. Bott, Homogeneous vector bundles, Ann. of Math. 66 (1957) 203–248](https://doi.org/10.2307/1969996)

### A scheme structure on cactus varieties compares them with catalecticant equations

**Remember:** Give the cactus variety equations, not only points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14N07 (Secant varieties, tensor rank, varieties of sums of powers), 14C05. arXiv math.AG. Level 4: research.

**Definition.** The r-th cactus variety of X is the closure of the union of linear spans of finite subschemes of X of degree r. The cactus scheme uses relative linear spans of families over bases that may have nilpotent functions. Nilpotents record infinitesimal directions.

**Problem.** Take a Veronese variety of high degree, the image of projective space under all monomials of a fixed degree. Its r-th cactus scheme equals the zero scheme of suitable catalecticant minors outside the (r−1)-th cactus variety. Catalecticant minors are minors of matrices built from the coefficients of a form.

**How the definition helps.** Once the cactus variety is a scheme, the comparison can be an equality of schemes, not only of point sets. Our own explanation is that a set cannot tell an equation from its square. The relative spans over non-reduced bases give the nilpotent structure. The work is to compare these spans with the determinantal equations.

**Paper or page:** [Cactus scheme, catalecticant minors, and scheme theoretic equations](https://arxiv.org/abs/2410.21908v1). It says: “In this article, we equip the cactus variety with a scheme structure, via "relative linear spans" of families of finite schemes over a potentially non-reduced base.”

**Sources:**

- [Jarosław Buczyński, Hanieh Keneshlou, Cactus scheme, catalecticant minors, and scheme theoretic equations, arXiv:2410.21908 (2024)](https://arxiv.org/abs/2410.21908v1)

### Central differences give genus recursions

**Remember:** A symmetric shift connects each genus to the earlier ones.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** The resolved conifold is the total space of two copies of the degree minus one line bundle over the projective line. Let Fᵍ(t) generate its positive-degree genus-g curve counts, with degree d weighted by exp(2πidt). Form the free energy by summing λ²ᵍ⁻²Fᵍ(t) over all genera g ≥ 0.

**Problem.** Put D = (1/2π)d/dt. For g ≥ 1, the sum over 1 ≤ j ≤ g + 1 of D²ʲFᵍ⁺¹⁻ʲ divided by (2j)! equals zero.

**How the definition helps.** Combining the genera in one series turns a symmetric shift in t into a recursion (our own). Adding the shifts by λ/(2π) and −λ/(2π) cancels the odd derivatives (our own). At order λ²ᵍ only the second derivative involves genus g (our own). The difference equation for the resolved conifold supplies the substantive theorem.

**Paper or page:** [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2). It says: “For every g ≥ 1 the difference equation gives a recursive differential equation”

**Sources:**

- [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2)

### Convexity removes genus-zero bundle obstructions

**Remember:** When first cohomology vanishes, sections make an ordinary bundle.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)). arXiv math.AG. Level 4: research.

**Definition.** A stable map is a map from a marked nodal curve with finitely many symmetries preserving the marks and map. Call a vector bundle E convex if every genus-zero stable map f from C has H¹(C, f\*E) = 0. This cohomology group measures obstructions to extending sections of the pulled-back bundle.

**Problem.** Let a regular section of a convex bundle E on a smooth complex projective variety X cut out a smooth locus Y of expected codimension. Fix the marks and ambient curve class in genus zero. The sum of pushed-forward virtual cycles from Y equals the ambient virtual cycle capped with the top Chern class of the bundle of sections.

**How the definition helps.** Convexity makes the spaces of sections form a vector bundle on the space of maps (our own). Its fiber at f is H⁰(C, f\*E) (our own). The induced section vanishes exactly on maps into Y (our own). Without convexity the obstruction group can survive, as it does for the degree minus two line bundle on the projective line (our own). A virtual cycle corrects for excess dimension, and the virtual zero locus theorem gives the asserted intersection formula (our own).

**Paper or page:** [Quantum Lefschetz without curves](https://arxiv.org/abs/2403.01011v1). It says: “When the complex is a single bundle we recover results of Kim-Kresch-Pantev.”

**Sources:**

- [Coates and Givental, Quantum Riemann–Roch, Lefschetz and Serre](https://doi.org/10.4007/annals.2007.165.15)

### Degree-zero division matches stable pairs

**Remember:** Divide out freely moving points before comparing curve counts.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** Donaldson–Thomas theory counts curves that may carry extra points, using intersection classes that correct for excess dimension. Divide the generating series by its points-only series to define the reduced series. The denominator has constant term one. A stable pair consists of a curve sheaf without point-supported subsheaves and a section generating it away from finitely many points.

**Problem.** Let X be a toric Calabi–Yau three-orbifold with transverse type A singularities, locally cyclic quotients with opposite weights across the singular curve. Restrict to curve classes whose generic stabilizer representations are multiples of the regular representation. Then the reduced Donaldson–Thomas series equals the stable-pair series.

**How the definition helps.** Division removes the points-only factor before the two curve series are compared (our own). The stabilizer is the local symmetry group, and its regular representation permutes a basis indexed by its elements (our own). The proof compares normalized local series at torus fixed points and glues their contributions (our own).

**Paper or page:** [The orbifold DT/PT vertex correspondence](https://arxiv.org/abs/2302.02342v4). It says: “DT′ₘᵣ(𝒳) = PTₘᵣ(𝒳).”

**Sources:**

- [The orbifold DT/PT vertex correspondence](https://arxiv.org/abs/2302.02342v4)
- [Maulik, Nekrasov, Okounkov and Pandharipande, Gromov–Witten theory and Donaldson–Thomas theory, I](https://doi.org/10.1112/s0010437x06002302)

### Logarithmic types split degeneration counts

**Remember:** Keep contact orders to split a limiting count by type.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG. Level 4: research.

**Definition.** Consider a projective degeneration over a smooth curve whose smooth central components meet like coordinate hyperplanes. A logarithmic stable map records how a limiting curve meets those components. Its type records the graph of domain components, their target strata, their curve classes and the contact orders along branches. A rigid type has no continuous freedom in its limiting graph once the base parameter is fixed.

**Problem.** Fix the genus, marks and curve class. The virtual class of maps to the central fiber equals the sum of the pushed-forward virtual classes for rigid types, with positive rational weights. A virtual class is the cycle that gives the expected intersection counts.

**How the definition helps.** The type records exactly which limiting maps contribute to each term (our own). The degeneration formula supplies the weights and proves the equality of cycles. Intersecting that equality with incidence conditions gives the corresponding numerical formula (our own).

**Paper or page:** [Gromov-Witten theory, degenerations, and the tautological ring](https://arxiv.org/abs/2510.04779v1). It says: “The constant mγ is a positive rational number.”

**Sources:**

- [Gromov-Witten theory, degenerations, and the tautological ring](https://arxiv.org/abs/2510.04779v1)

### Multiple covers isolate primitive counts

**Remember:** One multiple-cover series can record infinitely many degrees.

*True by definition.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** The resolved conifold is the total space of two degree minus one line bundles on the projective line, taken in direct sum. Write its positive-degree genus-zero curve series as a sum of multiple-cover series, one for each degree d ≥ 1. The degree-d series has coefficient 1/k³ in degree kd for each positive integer k and zero elsewhere. The coefficient multiplying that series is the degree-d genus-zero Gopakumar–Vafa number.

**Problem.** For the resolved conifold, the genus-zero Gopakumar–Vafa number is one in degree one and zero in every higher degree.

**How the definition helps.** The whole genus-zero curve series is one basis element, the trilogarithm (our own). Each basis element starts with coefficient 1 in its own degree, so the coefficients are unique (our own). The work goes into the multiple-cover computation for maps to the exceptional rational curve (our own).

**Paper or page:** [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2). It says: “F̃₀(t) = Li₃(q).”

**Sources:**

- [Aspinwall and Morrison, Topological field theory and rational curves](https://doi.org/10.1007/bf02096768)
- [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2)

### Purity excludes isolated stable-pair points

**Remember:** Any points a stable pair records must lie on its curve.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)). arXiv math.AG. Level 4: research.

**Definition.** On a smooth projective threefold, a stable pair consists of a coherent sheaf F supported on a curve and a section s. Require that the section generate F except at finitely many points. Also require purity, meaning that F contains no nonzero subsheaf supported on finitely many points.

**Problem.** The local functions killing s form the same ideal as the local functions killing all of F. Thus the section defines the full support curve, including its scheme structure.

**How the definition helps.** Purity forces a function killing the section to kill the entire sheaf (our own). Multiplying F by that function gives a subsheaf supported where the section fails to generate F (our own). That finite support forces the subsheaf to vanish (our own). Conversely, every function killing F kills its section (our own). An ideal sheaf can instead describe a curve together with an isolated point (our own).

**Paper or page:** [Explicit formulae for rank zero DT invariants and the OSV conjecture](https://arxiv.org/abs/2203.10617v1). It says: “$F$ is a \\emph {pure} 1-dimensional sheaf, and $s \\colon \\mathcal O \_X \\rightarrow F$ has zero-dimensional cokernel.”

**Sources:**

- [Pandharipande and Thomas, Curve counting via stable pairs in the derived category](https://doi.org/10.1007/s00222-009-0203-9)

### Representable maps exclude extra stabilizers

**Remember:** The source cannot carry more symmetry than its image.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 14D23. arXiv math.AG. Level 4: research.

**Definition.** A twisted curve can have finite symmetry groups at marks and nodes. For a map between complex orbifolds, representability means that it injects every point’s symmetry group into the symmetry group at its image. Require this condition on the maps used to count curves in an orbifold.

**Problem.** A representable map from a twisted curve to an ordinary scheme has trivial symmetry groups at every mark and node.

**How the definition helps.** Injectivity forces each domain group to be trivial because a scheme has trivial point symmetry groups (our own). Without representability, one can put a cyclic symmetry group of any order at a mark of a three-marked sphere mapping to a point (our own).

**Paper or page:** [Intrinsic mirror symmetry and Frobenius structure theorem via Gromov-Witten theory of root stacks](https://arxiv.org/abs/2403.05376v1). It says: “We further require the top horizontal morphism to be representable.”

**Sources:**

- [Abramovich, Graber and Vistoli, Gromov-Witten theory of Deligne-Mumford stacks](https://doi.org/10.1353/ajm.0.0017)

### Extra coordinates descend exponential periods

**Remember:** Record an algebraic coefficient as an extra coordinate.

*True by definition.* MSC 14P10 (Semialgebraic sets and related spaces), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A naive exponential period over a subfield k of ℂ is an integral of exp(−f)ω over a closed set G, cut out by real polynomial conditions over the real subfield of k. G may lie in an affine space of any dimension, and f and ω are rational over k, regular on G, with ω of degree the real dimension of G. Also, f has compact preimages of compact sets, bounded imaginary part, and real part bounded below.

**Problem.** Let k ⊂ ℂ be algebraic over its real subfield. Then replacing k by its algebraic closure in ℂ does not change the set of naive exponential periods.

**How the definition helps.** Allowing any ambient dimension lets an extra coordinate encode coefficients from a finite extension. Only finitely many coefficients occur, and one algebraic element generates their extension. Real polynomial conditions cut out its chosen complex root by its real and imaginary parts. This is our own summary of the descent in Lemma 6.6.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)

### Strips exclude divergent exponential integrals

**Remember:** Properness in a strip forces decay at infinity.

*Rules out counterexamples.* MSC 14P10 (Semialgebraic sets and related spaces), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** An exponential period integral is the integral of exp(−f)ω over an oriented closed set G in complex affine space, cut out by real polynomial conditions over ℚ. Here f and ω are rational over ℚ and regular on G, and ω has degree equal to the real dimension of G. Also, f has compact preimages of compact sets on G, bounded imaginary part, and real part bounded below.

**Problem.** Every such integral of exp(−f)ω converges absolutely. Without the phase bound, the imaginary axis with f(z)=z and ω=dz meets the other conditions but gives a divergent absolute integral.

**How the definition helps.** The strip and compact-preimage condition force the real part of f to grow along any sequence escaping to infinity. In our own counterexample, the weight has absolute value one everywhere on the imaginary axis. The convergence proof bounds algebraic growth and extends the weighted form to the boundary of a compact space.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Permitting the integrand Q to be the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)
