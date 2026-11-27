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

**Problem.** Homogeneous ideals with the same nonempty projective zero set have the same radical. So projective varieties match homogeneous radical ideals, apart from one exception.

**How the definition helps.** The irrelevant ideal vanishes only at the origin of ℂⁿ⁺¹, and the origin is not a point of projective space (our own). So its projective zero set is empty, the same as for the whole ring (1). Both ideals are radical, so without the exclusion two different radical ideals would have the same zero set. Part (b) of Napkin's theorem shows that these are the only two radical ideals with empty zero set. Removing the irrelevant ideal leaves one ideal for the empty variety and restores the bijection. The real work is the affine Nullstellensatz, applied to the cone over the variety in ℂⁿ⁺¹ (our own).

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

**How the definition helps.** With this definition, the theorem is a change of scalars in two steps. Every field extension K of k′ is also a field extension of k (our own). Then K ⊗ (k′ ⊗ S) over k′ is K ⊗ S over k, which is reduced (our own). With the algebraic closure test, one must instead compare the algebraic closures of k and k′ (our own). The work moves to Stacks Lemma 10.44.4, which shows that the algebraic closure test agrees with this definition. Stacks Lemma 33.6.6 states the result for schemes, in both directions.

**Paper or page:** [Varieties, Lemma 33.6.6.](https://stacks.math.columbia.edu/tag/0384), [Algebra, Lemma 10.44.4.](https://stacks.math.columbia.edu/tag/030V). It says: “In particular, X is geometrically reduced over k if and only if Xₖ′ is geometrically reduced over k′.”

**Sources:** none listed. No primary source with a working link was found.

### For spaces with functions, being a morphism is a local property

**Remember:** A morphism is a map that pulls functions back to functions.

*True by definition. Confidence: medium.* MSC 14A10 (Varieties and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A space with k-valued functions is a space X with a sheaf of k-algebras of k-valued functions on X. A morphism of such spaces is a continuous map f such that every local function φ on the target pulls back to a function φ ∘ f in the structure sheaf of the source.

**Problem.** Define abstract varieties by gluing affine pieces. A map should then be a morphism exactly when it is a morphism on each piece of an open cover.

**How the definition helps.** When the structure sheaf holds actual functions, being a morphism is only a property of the map, and one can check a property locally. For ringed spaces (spaces with a sheaf of rings that need not be functions), a morphism carries extra data, a map of sheaves, and one must glue this data. When the structure sheaf is a sheaf of actual functions, f alone fixes the pullback of functions. So being a morphism is only a property of the continuous map. The locality statement then follows at once. A map f is a morphism if and only if each restriction of f to a map Uᵢ → Vᵢ is one (Gathmann's lecture notes, Lemma 4.6, as cited by the nLab).

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

**How the definition helps.** In algebraic geometry the space is defined as the dual of its ring, so Gelfand duality holds by definition. In topology, both results are real theorems: Gelfand duality needs C\*-algebra theory, and Swan's theorem needs compact Hausdorff spaces. Serre's form of the theorem is still a theorem. It says that locally free sheaves of finite rank on Spec R, the algebraic vector bundles, correspond to finitely generated projective R-modules. But it is stated in the same algebraic language as the definitions. If you allow all modules, not only projective ones, you get quasicoherent sheaves.

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

**Problem.** A closed immersion is defined by local data: a homeomorphism onto a closed set and a surjection of structure sheaves. One wants a test that uses only properties of the morphism as a whole.

**How the definition helps.** A monomorphism is defined by maps into X alone, so with properness it gives a test that needs no structure sheaves (our own). The quoted lemma also gives the variants with unramified and universally injective. Universal closedness cannot be dropped (our own example). The affine line minus the origin, mapped into the affine line, is a monomorphism locally of finite type, but it is not a closed immersion. The hard part is the proof, which shows that a proper monomorphism is finite by Zariski's main theorem (our own summary).

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

**Problem.** For a vector bundle ℰ and a line bundle ℒ, the projective bundles of ℰ and ℰ ⊗ ℒ are canonically isomorphic. The Stacks Project proves a general form for graded algebras whose nth piece is twisted by the nth power of ℒ.

**How the definition helps.** With the quotient definition, the isomorphism is just a bijection between test maps (our own). Send a line quotient Q of ℰ to the quotient Q ⊗ ℒ of ℰ ⊗ ℒ. Tensoring with the dual of ℒ goes back. The real work moves into showing that the relative Proj of the symmetric algebra represents these quotients (our own). The isomorphism does not keep 𝒪(1) fixed, which changes by the pullback of ℒ, as the Stacks lemma records.

**Paper or page:** [Constructions, Lemma 27.20.1](https://stacks.math.columbia.edu/tag/02NC). It says: “There is a canonical isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative normalization by a universal property makes it functorial

**Remember:** Pull back one normalization and the other's universal property gives the map.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 13B22. arXiv math.AG. Level 3: graduate.

**Definition.** Let f from Y to X be a map of schemes. Define the normalization of X in Y as the initial factorization of f through a scheme integral over X. Initial means it maps uniquely to every other such factorization. The usual construction takes the relative spectrum of the functions on Y that satisfy monic polynomials over the functions on X.

**Problem.** Take a commutative square whose vertical maps Y₂ → X₂ and Y₁ → X₁ are quasi-compact and quasi-separated. These are finiteness conditions on a map and on its diagonal. Then a unique map from X′₂ to X′₁ between the normalizations makes the diagram commute.

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

**How the definition helps.** Allowing all rings fills the gaps that the nice objects leave, so the category gets its limits. Nice objects tend to form categories that lack limits and colimits. For example, fiber products of manifolds need not be manifolds, and coproducts of fields are rarely fields. As Deligne says, allowing all rings, including bizarre ones, gives a category of schemes with good properties. The nLab states the general principle; the fiber product of schemes is the standard example and is this record's own illustration, not a claim on the page. The price is that general schemes can be very pathological. The existence of fiber products is still a real construction by gluing (EGA I), not a tautology.

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

**Problem.** Give a geometric meaning to integral ring maps. The going-up theorem makes Spec(B) → Spec(A) closed for integral maps, but closedness alone does not characterize integrality.

**How the definition helps.** Asking for closedness after every base change, not only once, makes the condition strong enough to recover integrality. Plain closedness is too weak (our own example). The map Spec(k\[x\]) → Spec(k) is closed, since the target is a point, but k\[x\] is not integral over k. After base change to the affine line it becomes the projection of the plane to a line. This projection sends the hyperbola xy = 1 onto a set that is not closed. In the other direction, integral maps stay integral after base change and are closed by going up (our own). The remaining work is a ring lemma that tests closedness after adjoining one variable (our own summary).

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.44.7](https://stacks.math.columbia.edu/tag/01WM). It says: “Let f : X → S be a morphism of schemes. The following are equivalent (1) f is integral, and (2) f is affine and universally closed.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01WM (Morphisms, Lemma 29.44.7)](https://stacks.math.columbia.edu/tag/01WM)

### Local maps on stalks make morphisms into Spec A equal ring maps

**Remember:** Maps into Spec A are just ring maps out of A.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 13B10, 18A40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A locally ringed space is a space with a sheaf of rings whose stalks are local rings. A morphism of locally ringed spaces must give local homomorphisms on stalks: it must send the maximal ideal into the maximal ideal.

**Problem.** Show that morphisms from any locally ringed space X to Spec(A) are the same as ring maps A → Γ(X, 𝒪ₓ). This makes Spec a right adjoint to global sections.

**How the definition helps.** The locality condition forces each point of X to go to one prime: the inverse image of the maximal ideal of its stalk. So the map of spaces is fixed by the ring map. Without the condition the bijection fails (our own example). Let R be a discrete valuation ring with fraction field K. As a map of ringed spaces, the point Spec(K) can go to the closed point of Spec(R), with stalk map R → K. This gives the same map on global sections as the usual map to the generic point, so global sections do not fix the morphism. The quoted lemma, which EGA credits to Tate, holds for every locally ringed space X, not only for schemes.

**Paper or page:** [Stacks Project, Schemes, Lemma 26.6.4](https://stacks.math.columbia.edu/tag/01I1). It says: “Let X be a locally ringed space. Let Y be an affine scheme. The map Mor(X, Y) ⟶ Hom(Γ(Y, 𝒪), Γ(X, 𝒪)) which maps f to f♯ (on global sections) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01I1 (Schemes, Lemma 26.6.4)](https://stacks.math.columbia.edu/tag/01I1)

### Proper quasi-finite maps are finite

**Remember:** Finite fibres need properness to give a finite map.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A finite map of schemes has affine preimages of affine opens, with coordinate rings finite as modules over the corresponding base rings. A finite-type map locally uses finitely many algebra generators and has a finite affine cover over each affine open. A quasi-finite map has finite type and finite fibres. A proper map has finite type, has closed diagonal, and takes closed sets to closed sets after every change of base.

**Problem.** A morphism of schemes is finite if and only if it is proper and has finite fibres.

**How the definition helps.** Properness forces the open piece in Zariski’s Main Theorem to be closed as well, in our own explanation. Over each affine open of the base, the theorem factors a separated quasi-finite map through an open subset of a scheme finite over the base. A closed piece of that finite scheme is still finite over the base. In our own example, the punctured line includes into the affine line with finite fibres. Its image omits the origin and is not closed, so the inclusion cannot be finite.

**Paper or page:** [More Morphisms, Lemma 37.44.1.](https://stacks.math.columbia.edu/tag/02LS). It says: “Let f : X → S be a morphism of schemes. The following are equivalent: f is finite, f is proper with finite fibres, f is proper and locally quasi-finite”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-compact, quasi-separated morphisms push quasi-coherent sheaves to quasi-coherent sheaves

**Remember:** Finitely many affines and overlaps keep pushforwards quasi-coherent.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → S is quasi-compact if the preimage of each quasi-compact open is quasi-compact. It is quasi-separated if the diagonal X → X ×ₛ X is quasi-compact. Then two affine opens of X lying over one affine of S meet in a finite union of affines. A quasi-coherent sheaf is one that is locally the sheaf of a module.

**Problem.** Show that the pushforward f⁎ℱ of a quasi-coherent sheaf ℱ is quasi-coherent. This fails for general morphisms.

**How the definition helps.** Over an affine of S, the two conditions give finitely many affines covering X and finitely many affines covering their overlaps. Then sections of f⁎ℱ are the kernel of a map between finite products of modules (our own summary). Localization commutes with finite products and kernels. Without quasi-compactness this fails (our own example). Let X be a disjoint union of infinitely many copies of Spec(ℤ) over S = Spec(ℤ). Then f⁎𝒪ₓ has sections ∏ℤ over S but ∏ℤ\[1/2\] over D(2), and (∏ℤ)\[1/2\] is smaller, since it misses (1/2, 1/4, 1/8, …). So the two conditions are exactly what the finite argument needs.

**Paper or page:** [Stacks Project, Schemes, Lemma 26.24.1](https://stacks.math.columbia.edu/tag/01LC). It says: “Let f : X → S be a morphism of schemes. If f is quasi-compact and quasi-separated then f⁎ transforms quasi-coherent 𝒪ₓ-modules into quasi-coherent 𝒪ₛ-modules.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01LC (Schemes, Lemma 26.24.1)](https://stacks.math.columbia.edu/tag/01LC)

### Separated and proper morphisms use the diagonal in the product of schemes

**Remember:** Separated means Hausdorff, with the product of schemes in place of the product of spaces.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → Y of schemes is separated if the diagonal map from X to the fibre product of X with itself over Y is a closed immersion. Here the fibre product is the product of schemes, and a closed immersion is the scheme version of the inclusion of a closed subset. The morphism f is proper if it is separated, of finite type and universally closed. Universally closed means that each base change of f maps closed sets to closed sets.

**Problem.** Schemes are almost never Hausdorff as topological spaces. Still, one wants analogues of Hausdorff and compact. These analogues should give uniqueness and existence of limits.

**How the definition helps.** The closed-diagonal test, with the product of schemes, gives a useful Hausdorff condition although the spaces are not Hausdorff. One copies the Hausdorff condition (a closed diagonal) but uses the fibre product of schemes, which is not the product of the underlying spaces. So the notion is useful even though the underlying space of a separated scheme is typically not Hausdorff. The valuative criteria then say that limits along valuation rings are unique (separated) or exist and are unique (proper). In terms of maps, this is the unique lifting property against Spec K → Spec A, where A is a valuation ring and K is its fraction field. The criteria themselves are theorems (EGA II 7.2.3 and 7.3.8, due to Chevalley for properness).

**nLab:** [separated morphism of schemes](https://ncatlab.org/nlab/show/separated+morphism+of+schemes), [valuative criterion of separatedness](https://ncatlab.org/nlab/show/valuative+criterion+of+separatedness), [valuative criterion of properness](https://ncatlab.org/nlab/show/valuative+criterion+of+properness), [proper morphism](https://ncatlab.org/nlab/show/proper+morphism). It says: “For example, the underlying topological space of a separated scheme is typically not Hausdorff.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique II: Étude globale élémentaire de quelques classes de morphismes, Publ. Math. IHÉS 8 (1961) 5–222](http://www.numdam.org/item?id=PMIHES_1961__8__5_0)

### Unique generic points match points with irreducible closed sets

**Remember:** One irreducible closed set, one generic point, no more and no fewer.

*True by definition.* MSC 14A15 (Schemes and morphisms), 54D10. arXiv math.AG, math.GN. Level 3: graduate.

**Definition.** A generic point of a topological space is a point whose closure is the whole space. In a scheme, the prime ideal zero of an integral domain is the generic point of its spectrum. Each irreducible closed subset of a scheme is the closure of exactly one point.

**Problem.** A property that holds at almost every point of an irreducible variety should be a statement about one point. In a scheme, the irreducible closed subsets are in one-to-one match with the points.

**How the definition helps.** Because Spec includes a point for every prime ideal, each irreducible closed set has its own point, and that point is unique. So a statement such as "the generic fibre is smooth" is a statement about one fibre. In Weil's older foundations, generic points were points with values in a very large field, and there were very many equally generic points. Zariski wanted them to be unique, and schemes made this so. In topological words, schemes are sober spaces (our own phrasing). The work moves into the short proof that the spectrum of a ring is sober. Our own remark: the hard work that stays is to spread a property from the generic point to an open set, as generic flatness does.

**Wikipedia:** [Generic point](https://en.wikipedia.org/wiki/Generic_point). It says: “Oscar Zariski, a colleague of Weil's at São Paulo just after World War II, always insisted that generic points should be unique.”

**Sources:** none listed. No primary source with a working link was found.

### Universally injective morphisms are those injective on field-valued points

**Remember:** Test injectivity on points with values in fields, not on points.

*True by definition.* MSC 14A15 (Schemes and morphisms), 12F15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → S is universally injective if every base change of f is injective on underlying points. It is radicial if it is injective and each residue field extension is purely inseparable. In characteristic p, purely inseparable means that each element has some pᵏ-th power in the smaller field. In characteristic 0, it means that the extension is trivial.

**Problem.** Plain injectivity on points is not stable under base change. One wants a version that is stable and has a simple test.

**How the definition helps.** Defining the property through all base changes makes stability under base change true by definition. The work moves to the quoted lemma, which gives a test with field-valued points and the residue field condition. Plain injectivity is not enough (our own example): Spec(ℂ) → Spec(ℝ) is a bijection of one-point spaces. Its base change to ℂ is Spec(ℂ ⊗ ℂ) → Spec(ℂ), which has two points over one. The radicial condition rules this out, because ℂ over ℝ is separable, not purely inseparable.

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.10.2](https://stacks.math.columbia.edu/tag/01S4). It says: “The following are equivalent: (1) For every field K the induced map Mor(Spec(K), X) → Mor(Spec(K), S) is injective. (2) The morphism f is universally injective. (3) The morphism f is radicial.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01S4 (Morphisms, Lemma 29.10.2)](https://stacks.math.columbia.edu/tag/01S4)

### Using prime ideals, not maximal ideals, makes Spec a functor

**Remember:** Pull back a prime and you get a prime, so maps go backwards.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13A15. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The spectrum Spec R of a commutative ring R is the set of all prime ideals of R. It has the Zariski topology, whose closed sets are the sets of primes that contain a given ideal. A ring homomorphism f from R to S gives a map from Spec S to Spec R. It sends a prime q to its inverse image under f.

**Problem.** Every ring homomorphism should give a continuous map of spaces in the opposite direction. With this, Spec becomes a functor, and affine schemes are the same as commutative rings with the arrows reversed.

**How the definition helps.** The inverse image of a prime ideal is always prime, so the map on points is defined at once. Maximal ideals do not have this property. Take the inclusion of ℤ in ℚ (our own example). The zero ideal is maximal in ℚ, but its inverse image is the zero ideal of ℤ, which is not maximal. For an affine variety over an algebraically closed field, the maximal ideals are the ordinary points, by the Nullstellensatz. The prime ideals add one more point for each irreducible subvariety that is not a single point. The hard part that stays is the structure sheaf, which must be built so that its ring of global sections is R again.

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

**Problem.** The quotient of a space by a free action of a finite group should always exist. Moduli constructions, such as Hilbert schemes that classify subschemes of a variety, need such quotients.

**How the definition helps.** Algebraic spaces are defined as quotients by étale relations, so the quotient by a free group action is in the class by construction. Schemes are not closed under this. Hironaka's example gives a smooth proper threefold with a free action of a group of order 2. Its quotient is not a scheme. For this threefold, the page says that the Hilbert functor of subschemes is not represented by a scheme. The work moves into Artin's representability theorems, which say when a functor is an algebraic space (our own remark).

**Wikipedia:** [Algebraic space](https://en.wikipedia.org/wiki/Algebraic_space), [Hironaka's example](https://en.wikipedia.org/wiki/Hironaka%27s_example). It says: “the quotient of an algebraic space by a discrete group acting freely is an algebraic space, but the quotient of a scheme by a discrete group acting freely need not be a scheme (even if the group is finite).”

**Sources:**

- [Donald Knutson, Algebraic Spaces, Lecture Notes in Mathematics 203 (1971)](https://doi.org/10.1007/BFb0059750)

### Moduli stacks give fine moduli spaces for objects with automorphisms

**Remember:** A stack remembers the automorphisms that a space would have to forget.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14D22. arXiv math.AG. Level 3: graduate.

**Definition.** A stack is a sheaf of groupoids on schemes: it assigns to each scheme a groupoid (a category in which every map is invertible), and these glue along covers. A moduli stack is a stack whose value on a scheme S is the groupoid of families over S and their isomorphisms. A Deligne–Mumford stack is such a stack with an étale atlas by a scheme and with finite automorphism groups. An étale atlas is a scheme with a surjective étale map onto the stack, so the stack looks locally like that scheme.

**Problem.** Find a universal family for objects that have nontrivial automorphisms, such as elliptic curves. A universal family is one from which every family comes by pullback along a unique map. Its base would be a fine moduli space.

**How the definition helps.** A stack keeps the isomorphisms of the objects as data, so the moduli problem has a fine solution by definition. A scheme cannot do this. If an object has a nontrivial automorphism, one can glue a family that is locally trivial but globally nontrivial. In a subcanonical topology (one in which every representable functor is a sheaf), a representing scheme would classify this family by the trivial map, the same map as the trivial family. So no fine moduli scheme exists; the nLab gives this argument and notes that it needs the subcanonical assumption. The hard work is then to show that the stack is algebraic, that is, that it has an atlas. Deligne and Mumford did this for curves.

**nLab:** [moduli space](https://ncatlab.org/nlab/show/moduli+space), [Deligne-Mumford stack](https://ncatlab.org/nlab/show/Deligne-Mumford+stack), [algebraic stack](https://ncatlab.org/nlab/show/algebraic+stack). It says: “A type of objects that has nontrivial automorphisms cannot have a fine moduli space.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publications Mathématiques de l'IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)

### Quotient stacks remember equivariant cohomology

**Remember:** The quotient stack keeps the stabilisers that the orbit space throws away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14L30, 14F43. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A stack is like a sheaf, but it assigns groupoids instead of sets. Let a group G act on X. The quotient stack \[X/G\] has as objects over U the principal G-bundles P → U with a G-equivariant map P → X. It is the stack that corresponds to the action groupoid (objects are points of X, arrows are elements of G that move one point to another).

**Problem.** Take the quotient of a group action that is not free, without losing information. Its cohomology should then be the equivariant cohomology.

**How the definition helps.** A stack keeps the isomorphisms that record how the quotient was formed, and so it keeps the right cohomology. For a non-free action of a Lie group on a manifold, the quotient may not exist as a manifold. In sheaves of sets the quotient exists, but it has the wrong cohomology. In stacks the quotient keeps those isomorphisms, and its cohomology is the equivariant cohomology of X. If the action is proper with finite stabilisers, the quotient stack is an orbifold. The comparison with equivariant cohomology is a theorem about the stack, not part of the definition.

**nLab:** [derived stack](https://ncatlab.org/nlab/show/derived+stack), [quotient stack](https://ncatlab.org/nlab/show/quotient+stack). It says: “The cohomology of the stack is then indeed the equivariant cohomology of the original manifold.”

**Sources:**

- [Jochen Heinloth, Notes on differentiable stacks, Mathematisches Institut, Seminars, Universität Göttingen (2004–05) 1–32](https://math.nyu.edu/~tschinke/WS04/pdf/heinloth.pdf)

### Nilpotents let tangent vectors be maps from the dual numbers

**Remember:** A tangent vector is a point that remembers one first-order direction.

*True by definition.* MSC 14B10 (Infinitesimal methods in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The Zariski tangent space at a point with maximal ideal 𝔪 is the dual of the vector space 𝔪/𝔪². The dual numbers K\[t\]/(t²) form a ring with a nonzero element t whose square is 0. Their spectrum is one point with one tangent direction.

**Problem.** Tangent spaces should be defined for any scheme, with no embedding in affine space and no derivatives. A morphism of schemes should give a map of tangent spaces automatically.

**How the definition helps.** Because schemes may have nilpotent functions, the dual numbers are a scheme, and a map from it is a point together with a first-order direction. Functoriality is then free, because composing with a morphism sends tangent vectors to tangent vectors. Among varieties without nilpotents this object does not exist, so one must use 𝔪/𝔪² or local equations. Our own remark: the same idea gives deformation theory, where maps from larger nilpotent thickenings give higher-order data. The work moves into one theorem (our own phrasing of the cited exercise). Maps from Spec K\[t\]/(t²) centred at x match the dual of 𝔪/𝔪².

**Wikipedia:** [Zariski tangent space](https://en.wikipedia.org/wiki/Zariski_tangent_space). It says: “morphisms from Spec K\[t\]/(t²) to a scheme X over K correspond to a choice of a rational point x ∈ X(k) and an element of the tangent space at x.”

**Sources:** none listed. No primary source with a working link was found.

### Schlessinger's criterion uses hulls instead of representability

**Remember:** A hull maps onto all deformations and matches them exactly to first order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14D15. arXiv math.AG. Level 3: graduate.

**Definition.** A local Artin algebra is a local ring of finite length, such as k\[ε\]/(ε²). A deformation functor is a functor F from local Artin algebras with residue field k to sets, with F(k) a single point, that behaves well with gluing over fibre products (conditions H1 and H2). The tangent space of F is F(k\[ε\]/(ε²)), the set of first-order deformations. A hull for F is a complete local ring R with a formally smooth map from its represented functor to F that is a bijection on tangent spaces. Formally smooth means that lifts along surjections of Artin algebras always exist.

**Problem.** Decide when a complete local ring controls the local deformations of an object. This must work even though moduli functors are almost never representable.

**How the definition helps.** Schlessinger asks for less than representability, and then a simple test decides the question. He weakens representability to two notions: having a hull and being prorepresentable (represented by a complete local ring). F has a hull if and only if H1, H2 and H3 hold. H3 says that the tangent space is finite-dimensional. F is prorepresentable if and only if H4 holds as well. The node xy = 0 has a hull for its deformations, but its deformation functor is not prorepresentable. Objects with automorphisms are the usual cause of this failure.

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

**Problem.** Smooth morphisms are stable under base change and composition. They should behave like submersions of manifolds.

**How the definition helps.** A lifting property for maps into X transfers at once to the fibre product of X and S′ over S. So base change and composition need no proof. The work moves into the theorem that this lifting definition agrees with the geometric ones, such as flatness with regular geometric fibres. Regularity alone is not enough, because over an imperfect field a regular variety can become singular after a field extension (our own example). The geometric fibres in the definition, or the lifting property, rule this out. The structure theorem says that a smooth map is étale-locally an open piece of affine space over the base. It remains real work, and the page on étale morphisms states it.

**Wikipedia:** [Smooth morphism](https://en.wikipedia.org/wiki/Smooth_morphism), [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “One can define smoothness without reference to geometry.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, quatrième partie, Publications Mathématiques de l'IHÉS 32 (1967)](https://doi.org/10.1007/BF02732123)

### Flatness keeps fibre dimension and Hilbert polynomial constant in families

**Remember:** Flat families do not jump.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14D05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A morphism of schemes is flat if each local ring of the source is a flat module over the local ring of the target. Flatness of a module means that tensor product with it keeps injective maps injective.

**Problem.** For a flat morphism of locally Noetherian schemes, the dimension at a point is the dimension of the base plus the dimension of the fibre. For a flat projective family over a connected base, all fibres have the same Hilbert polynomial, so the same degree and arithmetic genus.

**How the definition helps.** Flatness is the algebraic condition that turns the vague idea of a family that varies continuously into a precise one. It excludes jumps such as the blowup of a point in the plane, where one fibre is a line and the others are points. Conversely, over a reduced connected base, a projective family with constant Hilbert polynomial is flat (our own addition, from standard texts). Flatness is also generic, so under some finiteness conditions every family is flat over a dense open subset of the base. The page calls the resulting flat cohomology a deep theory that is not easy to handle.

**Wikipedia:** [Flat morphism](https://en.wikipedia.org/wiki/Flat_morphism). It says: “Another non-example of a flat morphism is a blowup since a flat morphism necessarily has equi-dimensional fibers.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Open immersions are exactly the universally injective étale morphisms

**Remember:** Étale and injective after every base change means an open subscheme.

*Rules out counterexamples.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism is étale if it is flat, locally of finite presentation, and its fibres are disjoint unions of spectra of finite separable field extensions. It is universally injective if it stays injective on points after every base change. A monomorphism is a morphism that is injective on T-valued points for every scheme T.

**Problem.** An étale morphism that is injective should be an open immersion. Plain injectivity on points is not enough for this.

**How the definition helps.** Asking for injectivity after every base change rules out the bad case at once. The bad case (our own example) is Spec(L) → Spec(K) for a finite separable field extension of degree at least 2. It is étale and a bijection of one-point spaces, but it is not an isomorphism. After base change to L, the one point of Spec(L) has at least two points over it, so the map is not universally injective. The hard part is to show that a flat monomorphism of finite presentation is an open immersion (our own).

**Paper or page:** [Stacks Project, Etale, Theorem 41.14.1](https://stacks.math.columbia.edu/tag/025G). It says: “Let f : X → Y be a morphism of schemes. The following are equivalent: (1) f is an open immersion, (2) f is universally injective and étale, and (3) f is a flat monomorphism, locally of finite presentation.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 025G (Etale, Theorem 41.14.1)](https://stacks.math.columbia.edu/tag/025G)

### The étale topology gives algebraic geometry an inverse function theorem

**Remember:** Étale maps are local isomorphisms once étale maps count as neighbourhoods.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14F20. arXiv math.AG. Level 3: graduate.

**Definition.** An étale morphism is flat, locally of finite presentation and unramified. Unramified means that each fibre is a set of separate simple points. For smooth varieties, it is a map whose differential is an isomorphism at every point. The étale topology uses étale maps in place of open inclusions as its open covers.

**Problem.** A map with invertible differential should be a local isomorphism. In the étale topology, a finite étale map becomes, near each point, a disjoint union of copies of the base.

**How the definition helps.** Étale neighbourhoods are small enough to contain square roots and other algebraic inverses, so maps with invertible differential get local inverses. Zariski open sets are too large for this. The page's example is the projection of the parabola y = x² to the y-axis. It is étale away from the origin, but it has no Zariski-local inverse. This needs a field where 2 is invertible (our own remark). The étale topology then supports étale cohomology and the étale fundamental group, which is where the hard work lies.

**Wikipedia:** [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “However, there is no (Zariski-)local inverse of f, just because the square root is not an algebraic map, not being given by polynomials. However, there is a remedy for this situation, using the étale topology.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Mathematics 224 (1971)](https://doi.org/10.1007/BFb0058656)

### Unique lifts cancel formally unramified maps from formally étale composites

**Remember:** Unique lifts for the composite plus uniqueness below give unique lifts above.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 13B40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An infinitesimal thickening T ⊂ T′ here means an ideal with square zero cuts out T inside T′. A lift extends T → X to T′ → X over a given map T′ → Y. A formally étale map X → Y gives exactly one lift whenever the maps agree on T. A formally unramified map gives at most one.

**Problem.** Let X → Y → Z be maps of schemes. If Y → Z is formally unramified and X → Z is formally étale, then X → Y is formally étale.

**How the definition helps.** The lifting definitions let us solve the problem over Z before checking it over Y. Lift T → X using the given map T′ → Z. The resulting map T′ → Y and the given one agree on T and over Z. Formal unramifiedness forces them to agree. Any second lift over Y would already be a second lift over Z. This is our own account of the proof. The comparison with the classical test using local equations and an invertible derivative matrix requires local finite presentation (Tag 02HM).

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

**How the definition helps.** The lifting definitions reduce the theorem to splitting “exactly one” into existence and uniqueness. The classical smooth and étale tests instead use local equations and their matrices of derivatives. They also impose local finite presentation, meaning finitely many generators and relations on suitable open pieces. The work is in the comparison theorems, which recover smoothness and étaleness from the corresponding lifting tests and that finiteness condition. For unramified maps, the comparison uses local finite type, meaning finitely many generators but not necessarily finitely many relations.

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

**Problem.** A closed immersion adds no new directions, so it should be unramified. Under the EGA definition this fails when the ideal of the closed subscheme is not locally finitely generated.

**How the definition helps.** Every closed immersion is of finite type, and a quotient ring has no relative differentials, so the proof takes two lines (our own). With the EGA definition, the quoted lemma shows that a closed immersion is unramified only when its ideal sheaf is of finite type. An example of the bad case (our own) is Spec(A/I) → Spec(A) with A = k\[x₁, x₂, …\] and I = (x₁, x₂, …). The cost is that results proved by Noetherian approximation must add finite presentation as a hypothesis (our own). Over a locally Noetherian base the two notions agree, so nothing changes there (our own).

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

**How the definition helps.** Allowing non-reduced subschemes gives every flat family a limit, so the parameter space can be projective. When two points of the plane move together, the flat limit is a double point with a tangent direction (our own example). This limit is a non-reduced scheme. If only reduced subvarieties were allowed, such limits would be missing and the space would not be compact. Grothendieck built the space inside a Grassmannian, a space of linear subspaces, using a high degree where all higher cohomology vanishes. The price is that Hilbert schemes can be very singular, even non-reduced at every point of some components.

**Wikipedia:** [Hilbert scheme](https://en.wikipedia.org/wiki/Hilbert_scheme). It says: “H is universal with respect to all flat families of subschemes of X having Hilbert polynomial P.”

**Sources:**

- [Alexander Grothendieck, Techniques de construction et théorèmes d'existence en géométrie algébrique IV, les schémas de Hilbert, Séminaire Bourbaki 6 (1960–1961), exposé 221](http://www.numdam.org/item/SB_1960-1961__6__249_0/)

### Pure motives are the universal target of Weil cohomologies

**Remember:** Motives are varieties cut into pieces by idempotent cycles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives). arXiv math.AG. Level 3: graduate.

**Definition.** A Chow motive is a pair (X, p) of a smooth projective variety X and an idempotent correspondence p: an algebraic cycle (a formal sum of subvarieties) on X × X, taken up to rational equivalence, with p ∘ p = p. Morphisms are correspondences, composed by pullback, intersection and pushforward. Inverting the Lefschetz motive (the piece of the projective line in degree 2) gives the full category of pure Chow motives. Other adequate equivalence relations (relations on cycles that work with pullback, pushforward and intersection) give other categories of pure motives.

**Problem.** The different Weil cohomologies of a variety (ℓ-adic, de Rham, Betti) behave alike. Explain why: find one object through which they all factor.

**How the definition helps.** Correspondences act on every Weil cohomology, so a category built from correspondences is a common source for all of them. The action comes from the cycle class map that each Weil cohomology theory has. So the category whose morphisms are correspondences up to rational equivalence is built so that every Weil cohomology factors through it, uniquely; the nLab states this for Chow motives. This makes "motives are the common reason behind all Weil cohomologies" precise for smooth projective varieties. For coarser relations, such as numerical equivalence, the factorisation is not automatic. The hoped-for properties (an abelian, Tannakian category with the right Hom groups) depend on the standard conjectures and are still open. Mixed motives for general varieties are also still conjectural.

**nLab:** [pure motive](https://ncatlab.org/nlab/show/pure+motive), [motive](https://ncatlab.org/nlab/show/motive), [Chow motive](https://ncatlab.org/nlab/show/Chow+motive). It says: “such that every good cohomology theory factors through the functor M.”

**Sources:**

- [Tony Scholl, Classical motives, in: Motives, Seattle 1991, Proc. Symp. Pure Math. 55 part 1 (1994) 163–187](https://www.dpmms.cam.ac.uk/~ajs1005/preprints/classical_motives.pdf)
- [James S. Milne, Motives — Grothendieck's Dream (2012)](https://www.jmilne.org/math/xnotes/MOT.pdf)

### Rational equivalence makes Chow groups match K-theory rationally

**Remember:** Cycles modulo rational functions are vector bundles after tensoring with ℚ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14C35, 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** An algebraic cycle is a finite integer combination of subvarieties. Two cycles are rationally equivalent if their difference is a sum of divisors of rational functions on subvarieties one dimension higher. The Chow group is cycles modulo rational equivalence.

**Problem.** Let X be a smooth scheme over a field. Then the Chern character, a ring map built from Chern classes, is an isomorphism from K₀(X) to the Chow ring, after tensoring both with ℚ. Here K₀(X), the Grothendieck group, is the group of formal differences of vector bundles; the result is part of Grothendieck–Riemann–Roch.

**How the definition helps.** Rational equivalence is the relation that the Chern character respects, so the comparison with K-theory can be an isomorphism (our own reading). Rational equivalence identifies the fibres over 0 and ∞ of a family over the projective line. Classes in K-theory obey the same rule (our own remark). Coarser relations, such as homological or numerical equivalence, lose information that K-theory keeps (our own remark). In codimension one, the Chow group is the divisor class group. On smooth schemes this equals the Picard group of line bundles. The hard part is the Grothendieck–Riemann–Roch theorem itself.

**Wikipedia:** [Chow group](https://en.wikipedia.org/wiki/Chow_group). It says: “This isomorphism shows the importance of rational equivalence, compared to any other adequate equivalence relation on algebraic cycles.”

**Sources:**

- [Armand Borel, Jean-Pierre Serre, Le théorème de Riemann-Roch, Bulletin de la Société Mathématique de France (1958) 97–136](https://doi.org/10.24033/bsmf.1500)

### Six rules fix the intersection multiplicity of plane curves uniquely

**Remember:** List the rules, and only one number obeys them all.

*True by definition.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14H50. arXiv math.AG. Level 3: graduate.

**Definition.** The intersection multiplicity of plane curves P and Q at a point p is a number Iₚ(P, Q). It is symmetric, and it is infinite exactly when P and Q share a factor that vanishes at p. It is 0 exactly when p is not on both curves, and the axes x and y meet with multiplicity 1 at the origin. It adds over products, Iₚ(P, Q₁Q₂) = Iₚ(P, Q₁) + Iₚ(P, Q₂), and it does not change when P is replaced by P + QR.

**Problem.** There is exactly one function with these properties. It equals the dimension of the local ring of the plane at p divided by the ideal (P, Q).

**How the definition helps.** Defining the multiplicity by its rules makes the agreement of all the usual recipes a consequence of uniqueness. The page names several such recipes, for example the quotient-ring dimension and the count after a small perturbation. They all satisfy the rules, so they must agree. The rules also give an algorithm, because the last rule allows a Euclid-style reduction (our own remark, after Fulton's book, which the page cites). With this multiplicity, Bézout's theorem in the projective plane follows. The hard part that stays is the existence proof, that the local ring quotient satisfies every rule.

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “Although these properties completely characterize intersection multiplicity, in practice it is realised in several different ways.”

**Sources:**

- [William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (Benjamin, 1969; Addison-Wesley reprint 1989, ISBN 0-201-51010-3), chapter 3](http://www.math.lsa.umich.edu/~wfulton/CurveBook.pdf) (link not checked)

### Ampleness through powers can be tested by intersection numbers

**Remember:** Ample is a numerical property; very ample is not.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14C17. arXiv math.AG. Level 3: graduate.

**Definition.** A line bundle is very ample if its sections embed the variety in projective space. It is ample if some positive tensor power is very ample. Two curves are numerically equivalent if every line bundle has the same degree on both. The cone of curves is spanned by the curve classes in the finite-dimensional real space of these equivalence classes.

**Problem.** Kleiman's criterion holds on a projective scheme. It says that a line bundle is ample exactly when it is positive on every nonzero class in the closed cone of curves. So ampleness depends only on the degrees of the bundle on curves.

**How the definition helps.** Ampleness asks only for some power, so it can depend on degrees on curves alone, and Kleiman proved that it does (our own reading). So the ample bundles form an open cone in a finite-dimensional real space. Very ampleness has no such description (our own remark). The closure of the cone is needed. Nagata and Mumford found bundles that are positive on every curve but are not ample. The criterion can fail for proper schemes that are not projective. Proving the numerical criteria is the real work.

**Wikipedia:** [Ample line bundle](https://en.wikipedia.org/wiki/Ample_line_bundle). It says: “An ample line bundle on a projective variety X has positive degree on every curve in X. The converse is not quite true, but there are corrected versions of the converse, the Nakai–Moishezon and Kleiman criteria for ampleness.”

**Sources:**

- [Steven L. Kleiman, Toward a numerical theory of ampleness, Annals of Mathematics 84 (1966) 293–344](https://doi.org/10.2307/1970447)

### Asking relative divisors to be flat lets them restrict to fibres

**Remember:** Flat over the base, so every fibre gets a divisor.

*Rules out counterexamples. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** An effective Cartier divisor on X is a closed subscheme cut out locally by one equation that is not a zero divisor. A relative effective Cartier divisor for a map from X to S is an effective Cartier divisor on X that is also flat over S. Flat is an algebraic condition which says that the fibres vary without jumps.

**Problem.** A family of divisors should restrict, over each point of the base, to a divisor on the fibre. This is needed to build moduli spaces of divisors, such as Hilbert schemes of hypersurfaces.

**How the definition helps.** Flatness keeps the local equation a non-zero-divisor after any base change, so the restriction is again a Cartier divisor. Without flatness this fails. Take the plane mapped to the line by (x, y) ↦ x, and the divisor x = 0 (our own example). That divisor is the whole fibre over 0, so on that fibre its equation is zero and gives no divisor. The page also notes that flatness is what keeps inverse images of Weil divisors in codimension one. What stays hard is to show that families defined in this way have a representing scheme (our own remark).

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

**How the definition helps.** Taking top exterior powers turns the exact sequence of differentials into a product of line bundles. In our own calculation, restriction maps ambient differentials onto differentials along D. Its kernel is the conormal line, the dual of the hypersurface line bundle restricted to D. Moving that factor across gives the formula. The local equation for D identifies the kernel, and Serre duality identifies top forms with the bundle representing duality.

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

**Problem.** A normal variety should have a canonical divisor class, even where it is singular. This class is needed to state adjunction and to run the minimal model programme.

**How the definition helps.** Weil divisors are built only from codimension-one subvarieties, so throwing away a closed set of codimension two does not change them. On a normal variety over a perfect field, the singular set has codimension at least two. So one takes the canonical divisor of the smooth part and extends it uniquely to the whole variety. The resulting class need not be Cartier, and much of the minimal model programme is about when some multiple of it is Cartier. The fact behind this is that normal varieties are regular in codimension one, which Zariski proved for varieties (our own remark).

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

**Problem.** Represent the Picard group of X by a scheme, the Picard scheme.

**How the definition helps.** Dividing by line bundles from T removes the classes that stop the functor from being a sheaf. The naive functor T ↦ Pic(X × T) cannot be representable, because it is not even a sheaf. Take a nontrivial line bundle on T and pull it back to X × T. It becomes trivial on some cover of T, so the restriction map to the cover is not injective. Dividing by f\*Pic(T) and sheafifying removes these classes. Grothendieck then proved representability under conditions such as f projective and flat with geometrically integral fibres. That existence theorem is the hard part.

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

### Deligne–Mumford stacks are exactly the stacks with unramified diagonal

**Remember:** Discrete, reduced stabilizer groups give an étale cover by a scheme.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** An algebraic stack is Deligne–Mumford if some scheme maps onto it by an étale surjective map. The diagonal 𝒳 → 𝒳 × 𝒳 encodes the automorphism groups of objects. Unramified means locally of finite type with zero relative differentials.

**Problem.** Decide whether a moduli stack, such as the stack of stable curves, has an étale cover by a scheme. Building such a cover directly is hard.

**How the definition helps.** The criterion turns the existence of an étale cover into a condition on stabilizer groups that one can check point by point. For stable curves of genus at least 2, Deligne and Mumford showed that automorphism group schemes are finite and reduced (our own summary). So the moduli stack is Deligne–Mumford. 'Reduced' cannot be dropped in characteristic p (our own example). The group scheme μₚ of p-th roots of unity is finite but not reduced there, and its classifying stack is not Deligne–Mumford. The hard part is the direction from unramified diagonal to an étale cover, which needs a slicing argument (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.3 (Characterization of Deligne–Mumford Stacks)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “Let 𝒳 be an algebraic stack. The following are equivalent: (1) the stack 𝒳 is a Deligne–Mumford; (2) the diagonal 𝒳 → 𝒳 × 𝒳 is unramified; and (3) every point of 𝒳 has a discrete and reduced stabilizer group.”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), theorem titled Characterization of Deligne–Mumford Stacks](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [P. Deligne, D. Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/bf02684599)

### Defining the blowup by a universal property makes it intrinsic

**Remember:** The blowup is the first place where the centre becomes a divisor.

*True by definition.* MSC 14E05 (Rational and birational maps), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** Let I be the ideal sheaf of a closed subscheme of X, the sheaf of functions that vanish on it. The blowup of X along it is a morphism π to X such that I generates a locally principal ideal upstairs, given by a non-zero-divisor. Every morphism with this property must factor uniquely through π.

**Problem.** The blowup should not depend on coordinates or on an embedding in projective space. It should be unique and should restrict well to open subsets.

**How the definition helps.** A universal property fixes the object up to unique isomorphism, so independence of all choices is automatic. Classically, blowups were defined with coordinates and then through an embedding, so each such fact needed a separate check. Uniqueness also gives gluing, because the blowup of an open subset is the restriction of the blowup (our own remark). The work moves into existence. It is the Proj, the scheme of a graded algebra, of the sum of all powers of I (our own remark). The exceptional divisor is the subscheme cut out by the ideal that I generates on the blowup.

**Wikipedia:** [Blowing up](https://en.wikipedia.org/wiki/Blowing_up). It says: “From this perspective, a blowup is the universal (in the sense of category theory) way to turn a subvariety into a Cartier divisor.”

**Sources:** none listed. No primary source with a working link was found.

### Asking that local kernels be finitely generated makes coherent sheaves abelian

**Remember:** Coherent means finitely generated, with finitely generated relations on every open set.

*Rules out counterexamples. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18F20. arXiv math.AG. Level 3: graduate.

**Definition.** A sheaf F of O-modules is coherent if it has two properties. First, it is locally finitely generated. Second, take any open set U and any map from Oᵖ to F on U: then the kernel of this map is finitely generated.

**Problem.** On any ringed space, find an abelian category of sheaves with a finiteness condition. It must be closed under kernels, cokernels and extensions.

**How the definition helps.** The kernel condition makes coherence survive kernels, cokernels and extensions, on any ringed space. The naive notion, finitely presented, does not behave well outside noetherian schemes. The nLab notes that even the structure sheaf O can be finitely presented but not coherent. Coherent sheaves add the condition that all local modules of relations are finitely generated. By a basic result of Serre, if two terms of a short exact sequence are coherent, then so is the third, on any ringed space. So coherent sheaves form an abelian category that is closed under extensions. On noetherian schemes, the two notions agree, so you lose nothing there.

**nLab:** [coherent sheaf](https://ncatlab.org/nlab/show/coherent+sheaf). It says: “this is not true on a general scheme or general analytic space; sometimes even the structure sheaf”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955) 197–278](https://doi.org/10.2307/1969915)

### Local presentations make quasi-coherent modules stay quasi-coherent under pullback

**Remember:** Pullback preserves free modules and quotients by images.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A ringed space has a sheaf of rings, which records local functions and how to restrict them. A sheaf of modules over those rings is quasi-coherent if locally it is a quotient of a free module by the image of another. An affine scheme is a scheme defined by one ring. On such a scheme, an alternative definition says the sheaf comes from a module over that ring.

**Problem.** For a map of ringed spaces from X to Y, the pullback to X of a quasi-coherent module on Y is quasi-coherent.

**How the definition helps.** Local presentations make pullback a direct application of how it acts on free modules and quotients. It preserves free modules and cokernels, which are quotients by images. This is our own account of the Stacks result. With the affine definition, one uses the theorem that the ring map A → B makes the pullback correspond to tensoring with B. The comparison theorem says that a local presentation on a scheme gives the sheaf associated to one module on each affine open.

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

**Problem.** Let B be a flat A-algebra, and let X′ and ℱ′ be the base changes to B. Then Hⁱ(X, ℱ) ⊗ B over A is Hⁱ(X′, ℱ′) for every i. The Stacks Project proves this for quasi-compact, quasi-separated X.

**How the definition helps.** With the Čech definition, the proof is short, because the Čech complex for X′ is the complex for X tensored with B (our own). Tensoring with a flat module commutes with taking cohomology of a complex. The real work moves into the theorem that Čech cohomology agrees with derived functor cohomology for quasi-coherent sheaves on separated schemes (our own). That theorem rests on the vanishing of higher cohomology on affine schemes.

**Paper or page:** [Coherent, Lemma 30.5.2](https://stacks.math.columbia.edu/tag/02KH). It says: “Hⁱ(X, ℱ) ⊗ₐ B = Hⁱ(X′, ℱ′).”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955)](https://doi.org/10.2307/1969915)

### The dualizing sheaf extends Serre duality to Cohen–Macaulay schemes

**Remember:** Replace n-forms by the dualizing sheaf, and duality survives mild singularities.

*Makes the theorem clean to state or prove.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 14M05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A Cohen–Macaulay scheme is one whose local rings have as long a regular sequence as their dimension allows. For such a scheme X of pure dimension n over a field, Grothendieck defined a coherent sheaf ω, the dualizing sheaf. On a smooth scheme it is the canonical line bundle of n-forms. On a Cohen–Macaulay subscheme of a smooth scheme Y, it is an Ext sheaf, a derived form of Hom, into the canonical bundle of Y.

**Problem.** Let X be proper and Cohen–Macaulay of pure dimension n. Let E be a coherent sheaf, a sheaf that is locally given by finitely generated modules. Then Hⁱ(X, E) is dual to Extⁿ⁻ⁱ(E, ω), even for singular X such as complete intersections.

**How the definition helps.** The canonical bundle uses differential forms, which behave badly at singular points, so Serre's theorem needs smoothness. The dualizing sheaf is chosen so that duality holds, and on smooth schemes it is the canonical bundle (our own reading). A local complete intersection is cut out locally by as many equations as its codimension. In a smooth Y, its ω is the canonical bundle of Y times the top power of the normal bundle. So ω is a line bundle, which means that the scheme is Gorenstein. For general schemes, duality needs a dualizing complex instead of one sheaf. The work moves into that general form, Grothendieck duality.

**Wikipedia:** [Serre duality](https://en.wikipedia.org/wiki/Serre_duality). It says: “As a first step in generalizing Serre duality, Grothendieck showed that this version works for schemes with mild singularities, Cohen–Macaulay schemes, not just smooth schemes.”

**Sources:**

- [Jean-Pierre Serre, Un théorème de dualité, Commentarii Mathematici Helvetici 29 (1955) 9–26](https://doi.org/10.1007/BF02564268)
- [Robin Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20 (1966)](https://doi.org/10.1007/BFb0080482)

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

**Problem.** Faithfully flat descent should include ordinary gluing along open covers. A naive definition by one faithfully flat quasi-compact map leaves out infinite open covers.

**How the definition helps.** The condition is checked over each affine open, and an affine is quasi-compact, so finitely many members of any open cover already reach it. This makes the quoted lemma short: Zariski, étale, smooth and fppf coverings are all fpqc coverings. A second lemma in the data set (Tag 023Q) says that every representable functor is a sheaf for this topology. So one theorem holds both ordinary gluing and faithfully flat descent. The hard part, descent along one faithfully flat affine map, is Grothendieck's theorem and is not changed by the definition (our own).

**Paper or page:** [Stacks Project, Topologies, Lemma 34.9.7](https://stacks.math.columbia.edu/tag/022C), [Stacks Project, Descent, Lemma 35.13.7](https://stacks.math.columbia.edu/tag/023Q). It says: “Any fppf covering is an fpqc covering, and a fortiori, any syntomic, smooth, étale or Zariski covering is an fpqc covering.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 022C (Topologies, Lemma 34.9.7)](https://stacks.math.columbia.edu/tag/022C)
- [The Stacks Project Authors, The Stacks Project, Tag 023Q (Descent, Lemma 35.13.7)](https://stacks.math.columbia.edu/tag/023Q)

### The Nisnevich topology sits between the Zariski and étale topologies

**Remember:** Étale covers that catch every point without changing its residue field.

*Rules out counterexamples.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** An étale map is a map of schemes that is a local isomorphism in the algebraic sense, like a covering map. A family of étale maps Vᵢ → U is a Nisnevich cover if every field-valued point Spec k → U lifts to some Vᵢ. The lift must have the same residue field as the point.

**Problem.** Find a topology with three properties. Algebraic K-theory satisfies descent in it, that is, K-theory of U can be computed from the pieces of a cover. Its cohomological dimension is at most the Krull dimension, and it still has étale-type excision for neighbourhoods.

**How the definition helps.** The Nisnevich topology keeps the good properties of both the Zariski topology and the étale topology. Algebraic K-theory satisfies Zariski descent, but in general it does not satisfy étale descent. The Zariski topology is too coarse for excision results (results that let you replace X by a small neighbourhood of a closed subset Z). An example is the comparison of X/(X − Z) with the normal bundle. The condition that every point lifts with the same residue field gives both properties at once. The Nisnevich topology is the base of motivic homotopy theory. The descent theorem for K-theory is still a real theorem, by Thomason–Trobaugh and Nisnevich.

**nLab:** [Nisnevich site](https://ncatlab.org/nlab/show/Nisnevich+site), [motivic homotopy theory](https://ncatlab.org/nlab/show/motivic+homotopy+theory). It says: “Algebraic K-theory satisfies descent over the Nisnevich site -- as is true for the Zariski site but not in full generality for the etale site”

**Sources:**

- [Yevsey Nisnevich, The completely decomposed topology on schemes and associated descent spectral sequences in algebraic K-theory, in: Algebraic K-Theory: Connections with Geometry and Topology, NATO ASI Ser. C 279, Kluwer (1989) 241–342](https://doi.org/10.1007/978-94-009-2399-7_11)

### Twisting by roots of unity makes Poincaré duality canonical

**Remember:** Twist by roots of unity, and the orientation of a variety comes for free.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The Tate twist ℤ/n(1) is the group μₙ of n-th roots of unity. The l-adic Tate twist ℤₗ(1) is the inverse limit of the groups of lⁱ-th roots of unity. For a coefficient module A, the twist A(k) is A tensored with the k-th tensor power of this twist group. For negative k, you use the dual of the twist group instead.

**Problem.** l-adic cohomology is a cohomology theory for algebraic varieties with coefficients such as the l-adic integers ℤₗ. In it, Poincaré duality, the Thom isomorphism and the cycle map should hold canonically, with no choice of orientation. They should also be compatible with the action of the Galois group.

**How the definition helps.** The twist supplies a canonical orientation, so you do not have to choose one. As a ℤₗ-module, ℤₗ(1) is isomorphic to ℤₗ, but not canonically, and not as a Galois representation. The group H²(ℙ¹, ℤₗ(1)) is canonically ℤₗ, so ℤₗ(1) is the correct orientation sheaf. So duality statements written with twists are canonical and Galois-equivariant (they commute with the Galois action). The nLab says that the rest follows 'with effort'; the twist makes the statement correct, not the proof short. Grothendieck built the twist into pure motives by inverting the Lefschetz motive (the degree-2 piece of the motive of ℙ¹).

**nLab:** [Tate twist](https://ncatlab.org/nlab/show/Tate+twist). It says: “Tate twists play an important role in cohomology theories with this dual geometric and arithmetic aspect, allowing one to express Poincaré duality canonically, that is, without choosing an orientation of one's geometric object”

**Sources:**

- [P. Deligne, Cohomologie étale (SGA 4½), Lecture Notes in Mathematics 569, Springer (1977)](https://doi.org/10.1007/BFb0091516)

### Weil cohomology gives rationality and the functional equation of zeta functions

**Remember:** Count points as fixed points of Frobenius; the zeta function becomes a ratio of polynomials.

*True by definition.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14G10. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A Weil cohomology theory is a cohomology theory on smooth projective varieties over a field, with coefficients in a field of characteristic 0. It must satisfy a list of axioms. The axioms include finite dimensionality, Poincaré duality, a Künneth formula and a cycle class map (a map that sends each subvariety to a cohomology class). Together they give a Lefschetz fixed point formula.

**Problem.** The Weil conjectures are about the zeta function of a variety over a finite field, a generating function for the numbers of points over the finite extension fields. They say that it is rational and satisfies a functional equation. They also say that its zeros and poles satisfy a Riemann hypothesis.

**How the definition helps.** The axioms let one count points by traces, as in topology, so rationality and the functional equation follow formally. The points of X over the field with qⁿ elements are the fixed points of the n-th power of Frobenius (the map that raises coordinates to the q-th power) on X over the algebraic closure. The Lefschetz trace formula makes each count an alternating sum of traces of Frobenius on cohomology. So the zeta function is an alternating product of characteristic polynomials of Frobenius, and it is rational. Poincaré duality then gives the functional equation. The Riemann hypothesis does not follow formally; Deligne proved it separately. The real content moves into the theorem that ℓ-adic étale cohomology is a Weil cohomology theory.

**nLab:** [Weil cohomology theory](https://ncatlab.org/nlab/show/Weil+cohomology+theory), [Weil conjectures](https://ncatlab.org/nlab/show/Weil+conjectures), [Lefschetz trace formula](https://ncatlab.org/nlab/show/Lefschetz+trace+formula). It says: “It was realized that the all except one of the conjectures (the Riemann hypothesis) would follow formally from the existence of a suitable cohomology theory on algebraic varieties”

**Sources:**

- [James S. Milne, Lectures on Étale Cohomology (course notes)](https://www.jmilne.org/math/CourseNotes/lec.html)

### Étale root-extracting covers make first μₙ-cohomology capture n-torsion line bundles

**Remember:** Extract roots locally to see which line bundles become trivial after n tensor powers.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14C22. arXiv math.AG. Level 3: graduate.

**Definition.** On the étale site, a cover may adjoin an nth root of a unit. So when n is invertible, the nth-power map on the sheaf of units is onto. Its kernel is the sheaf μₙ of nth roots of unity. On the Zariski site, whose covers are open subsets, the nth-power map is not onto in general.

**Problem.** Let n be invertible on a scheme X. Then first étale cohomology with coefficients in μₙ maps onto the line bundles whose nth power is trivial. The kernel is the global units modulo nth powers.

**How the definition helps.** The étale topology makes 1 → μₙ → units → units → 1 exact, so the claim is read off its long exact sequence. Its first terms give global units modulo nth powers, and the next term is the n-torsion in H¹ of the units (our own). The work moves into Hilbert's Theorem 90, which says that étale H¹ of the units is the group of line bundles (our own). Adjoining an nth root of a unit is étale because n is invertible (our own). Zariski cohomology fails here (our own). For X = Spec ℚ and n = 2 it is zero, but ℚ\* modulo squares is not (our own).

**nLab:** [Kummer sequence](https://ncatlab.org/nlab/show/Kummer+sequence). It says: “then if n is invertible over the site then there is a short exact sequence”

**Sources:**

- [James S. Milne, Étale Cohomology, Chapter III (1980)](https://doi.org/10.1515/9781400883981)

### Defining π₁ by unramified Galois extensions makes the function-field Galois map surjective

**Remember:** Restricting automorphisms to a Galois subextension gives a quotient.

*True by definition.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 11R32. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let X be a normal integral scheme with function field K; normal means the local rings are integrally closed. Let M be the union of the finite separable extensions of K in which X is unramified. One may define the étale fundamental group as the Galois group of M over K. Grothendieck's definition uses automorphisms of the functor taking each finite étale cover to its fiber over a geometric point.

**Problem.** The absolute Galois group of K maps onto the étale fundamental group of X, based at a geometric point over the generic point.

**How the definition helps.** With the Galois-group definition, the map is restriction of automorphisms to M, and restriction to a Galois subextension is always onto (our own). With Grothendieck's definition, the Stacks Project proposition must first identify the map with this quotient. That identification recovers each cover as the normalization of X in a finite extension inside M (our own).

**Paper or page:** [Pione, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM). It says: “is identified with the quotient map”

**Sources:**

- [The Stacks Project, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM)

### Constructible sets are exactly what images of morphisms produce

**Remember:** Images of varieties are not varieties, but they are constructible.

*Makes the theorem clean to state or prove.* MSC 14F45 (Topological properties in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A constructible set is a finite union of sets of the form U minus V, where U and V are retrocompact open sets. Retrocompact means that the intersection with every quasi-compact open set is quasi-compact, where quasi-compact means every open cover has a finite subcover. In a Noetherian space, these are the finite unions of locally closed sets.

**Problem.** Chevalley's theorem says that a finitely presented morphism of schemes sends locally constructible sets to locally constructible sets.

**How the definition helps.** The image of a variety need not be open, closed or a variety, so a larger class of sets is needed to state anything. The map (x, y) ↦ (x, xy) of the plane has as image the set where x is not 0, plus the origin. This set is constructible but not locally closed. Constructible sets form the class generated by retrocompact open sets under finite unions and complements, and this class is closed under images. In general schemes the retrocompact condition is needed, and the page says the theorem fails without it. The proof, by induction on dimension with Noether normalization or generic flatness, stays real work (our own remark).

**Wikipedia:** [Constructible set (topology)](https://en.wikipedia.org/wiki/Constructible_set_%28topology%29). It says: “Chevalley's theorem in the generality stated above would fail if the simplified definition of constructible sets (without restricting to retrocompact open sets in the definition) were used.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, première partie, Publications Mathématiques de l'IHÉS 20 (1964), Théorème 1.8.4](https://doi.org/10.1007/BF02684747)

### Products over closed points make arithmetic zeta multiply over pieces

**Remember:** Partition the closed points, and the product splits into matching factors.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 11M41. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let X be a nonempty scheme of finite type over ℤ, such as the space given by finitely many polynomial equations with integer coefficients. A closed point x has a finite residue field, the field of values at that point. Define the arithmetic zeta function as the product of (1 − N(x)⁻ˢ)⁻¹ over closed points x, where N(x) is the field size.

**Problem.** If U is a closed part of X and V is its open complement, then ζ(X, s) = ζ(U, s)ζ(V, s). Also, ζ(X, s) is the product of the zeta functions of the reductions modulo all primes p. Both identities hold when the real part of s exceeds the dimension of X.

**How the definition helps.** The closed-point definition gives both product formulas by partitioning the set of factors. Each closed point belongs to exactly one piece and to exactly one reduction modulo a prime. The work moves into proving absolute convergence in the stated region, which justifies regrouping the infinite product (our own). For a scheme over a finite field, another definition uses counts over its finite extensions. The closed-point definition packages those counts by grouping conjugate points into single factors (our own).

**Wikipedia:** [Arithmetic zeta function](https://en.wikipedia.org/wiki/Arithmetic_zeta_function). It says: “the zeta function of X is the product of the ones of the reduction of X modulo the primes p”

**Sources:** none listed. No primary source with a working link was found.

### Berkovich spectra give p-adic analytic spaces that are locally connected

**Remember:** A Berkovich point measures the size of functions, not just where they vanish.

*Rules out counterexamples.* MSC 14G22 (Rigid analytic geometry), 54D05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The Berkovich spectrum (analytic spectrum) of a normed ring A is the set of all non-zero bounded multiplicative seminorms on A. A seminorm is like a norm, but it can be zero on non-zero elements. The set has the weakest topology for which each map x ↦ \|a\|ₓ, for a in A, is continuous. Here \|a\|ₓ is the size that the point x gives to a.

**Problem.** Build p-adic analytic geometry on actual topological spaces. Domains in ℚₚⁿ with the subspace topology are totally disconnected, so there would be no analytic continuation.

**How the definition helps.** Berkovich changes what a point is, and with the new points the spaces are locally connected. With the p-adic topology, the naive analytic spaces are totally disconnected; this is the problem. Tate's rigid geometry avoids it with a Grothendieck topology (the G-topology, a rule for which covers are allowed) instead of a topological space. Berkovich instead takes multiplicative seminorms as the points. The resulting spaces are well behaved, locally connected and even locally contractible. Local contractibility is a hard theorem; it does not follow from the definition. You get Berkovich spaces by gluing the analytic spectra of affinoid algebras (the p-adic analogues of rings of power series that converge on a closed disc).

**nLab:** [analytic spectrum](https://ncatlab.org/nlab/show/analytic+spectrum), [p-adic number](https://ncatlab.org/nlab/show/p-adic+number), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “Moreover, one may sensibly assign to an p-adic domain a topological space which is well behaved (in particular locally connected and even locally contractible), this is the analytic spectrum construction.”

**Sources:**

- [Vladimir G. Berkovich, Spectral Theory and Analytic Geometry over Non-Archimedean Fields, Mathematical Surveys and Monographs 33, American Mathematical Society (1990)](https://doi.org/10.1090/surv/033)

### Restricting which covers count gives analytic geometry over the p-adic numbers

**Remember:** Change which covers count, and a totally disconnected field gives connected spaces.

*Rules out counterexamples. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A nonarchimedean field K is a field with an absolute value that satisfies \|x + y\| ≤ max(\|x\|, \|y\|), such as ℚₚ. A rigid analytic space over K is glued from affinoid spaces, which are the maximal spectra of quotients of Tate algebras (algebras of convergent power series). The gluing uses a Grothendieck topology (a rule that says which families of sets count as covers) called the G-topology. In the G-topology, only admissible open sets and finite or admissible covers count.

**Problem.** Build analytic geometry over ℚₚ, the p-adic numbers. It must have analytic continuation, coherent sheaves and a working sheaf theory.

**How the definition helps.** Tate changed which covers count, and this makes sheaf theory work again. ℚₚ is totally disconnected, so domains in ℚₚⁿ with the subspace topology are totally disconnected too. The nLab says that the naive approach fails. If all open covers count, then locally constant functions are analytic, and sheaf theory is useless. Tate restricted the covers to the G-topology. Then the closed unit disc behaves as a connected space, and Tate's acyclicity theorem holds (these two facts are standard, from Tate and Conrad, not from the nLab page). Berkovich later gave another fix with honest, locally contractible topological spaces.

**nLab:** [rigid analytic geometry](https://ncatlab.org/nlab/show/rigid+analytic+geometry), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “regarded with their subspace topology, fails, as also all these domains are totally disconnected.”

**Sources:**

- [John Tate, Rigid analytic spaces, Inventiones Mathematicae 12 (1971) 257–289](https://doi.org/10.1007/BF01403307)
- [Brian Conrad, Several approaches to non-archimedean geometry, in: p-adic Geometry, University Lecture Series 45, AMS (2008)](https://math.stanford.edu/~conrad/papers/aws.pdf)

### Stable curves give the Deligne–Mumford compactification of the moduli of curves

**Remember:** Allow nodes so that limits exist; forbid infinite symmetry so the stack stays Deligne–Mumford.

*Rules out counterexamples. Confidence: medium.* MSC 14H10 (Families, moduli of curves (algebraic)), 14D23. arXiv math.AG. Level 3: graduate.

**Definition.** A stable curve of genus g with n marked points is a connected curve with three properties. Its only singularities are nodes (points where two smooth branches cross). Its n marked points are smooth points, and its automorphism group is finite. The stack M̄(g, n) classifies these curves (for 2g − 2 + n &gt; 0).

**Problem.** The moduli stack M(g, n) of smooth curves is not proper (the stack version of not compact). So there is no intersection or integration theory on it. The goal is to prove global facts, such as the irreducibility of M(g).

**How the definition helps.** Nodal curves fill in the missing limits, and finite automorphisms keep the stack well behaved. Admitting nodal curves adds the missing limits of families of curves. Requiring finite automorphisms excludes the unstable cases, which have infinite automorphism groups. The result M̄(g, n) is a smooth proper Deligne–Mumford stack (a stack whose points have finite automorphism groups). Deligne and Mumford proved that M(g) is irreducible by studying this compactification. Proving properness is still real work. For Gromov–Witten theory, Kontsevich's stable maps ask instead that the map, not the curve, has finite automorphisms; the nLab stable map page gives no definition, and in general the resulting stack is proper but not smooth.

**nLab:** [basic ideas of moduli stacks of curves and Gromov-Witten theory](https://ncatlab.org/nlab/show/basic+ideas+of+moduli+stacks+of+curves+and+Gromov-Witten+theory), [Deligne-Mumford compactification](https://ncatlab.org/nlab/show/Deligne-Mumford+compactification), [stable map](https://ncatlab.org/nlab/show/stable+map). It says: “Deligne and Mumford were able to prove many theorems about the ordinary moduli space of curves by studying instead the compactification. For example they were able to prove that M<sub>g</sub>,n is irreducible.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)
- [William Fulton, Rahul Pandharipande, Notes on stable maps and quantum cohomology, 1996, arXiv:alg-geom/9608011](https://arxiv.org/abs/alg-geom/9608011)

### Arithmetic genus makes Riemann–Roch hold on singular Gorenstein curves

**Remember:** Use the genus from cohomology, and singular curves obey Riemann–Roch too.

*Makes the theorem clean to state or prove.* MSC 14H20 (Singularities of curves, local rings), 14C40, 13H10. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The arithmetic genus of a projective curve C over a field is the dimension of the first sheaf cohomology group H¹(C, 𝒪). For a smooth curve it equals the geometric genus, the number of independent holomorphic differentials. A Gorenstein curve is one whose local rings are Gorenstein rings, a mild kind of singularity that every plane curve has.

**Problem.** Riemann–Roch says ℓ(D) − ℓ(K − D) = deg D − g + 1 for divisors D on a curve. For a projective curve over an algebraically closed field whose local rings are Gorenstein, the formula should hold even when the curve has singular points.

**How the definition helps.** The arithmetic genus is defined by cohomology, so it is exactly the number that the cohomological proof of Riemann–Roch produces. The geometric genus counts differentials on the smooth model of the curve and does not see the singular points. A nodal plane cubic has geometric genus 0 and arithmetic genus 1 (our own example). Only the value 1 makes the formula correct. The Gorenstein condition makes the dualizing sheaf a line bundle (our own remark). This sheaf takes the place of the differentials, so a canonical divisor K still exists. On curves that are not Gorenstein one needs more general statements, which the page mentions only briefly.

**Wikipedia:** [Riemann–Roch theorem](https://en.wikipedia.org/wiki/Riemann%E2%80%93Roch_theorem), [Arithmetic genus](https://en.wikipedia.org/wiki/Arithmetic_genus). It says: “the same statement as above holds, provided that the geometric genus as defined above is replaced by the arithmetic genus”

**Sources:**

- [Robin Hartshorne, Generalized divisors on Gorenstein curves and a theorem of Noether, Journal of Mathematics of Kyoto University 26 (1986) 375–386](https://doi.org/10.1215/kjm/1250520873)

### With arithmetic genus, every plane curve has genus (d−1)(d−2)/2

**Remember:** Degree alone fixes the arithmetic genus of a plane curve.

*Rules out counterexamples.* MSC 14H50 (Plane and space curves), 14H20. arXiv math.AG. Level 3: graduate.

**Definition.** The arithmetic genus of a projective curve is the dimension of H¹(C, 𝒪). The geometric genus is the genus of its smooth model. They agree on smooth curves.

**Problem.** An irreducible plane curve of degree d has arithmetic genus (d − 1)(d − 2)/2. With geometric genus the formula has exceptions at every singular curve.

**How the definition helps.** The arithmetic genus depends only on the equation's degree, because it is computed from the cohomology of a degree d hypersurface in the plane. So it cannot see singular points, and the formula has no exceptions. With the geometric genus, the nodal cubic y² = x²(x + 1) gives 0 instead of 1 (our own example). The page gives the correction for the geometric genus. An ordinary singular point of multiplicity r lowers the genus by r(r − 1)/2. The hard part of the classical theory is this correction count, not the formula for the arithmetic genus.

**Wikipedia:** [Genus–degree formula](https://en.wikipedia.org/wiki/Genus%E2%80%93degree_formula). It says: “If the curve is non-singular, then the geometric genus and the arithmetic genus are equal, but if the curve is singular, with only ordinary singularities, then the geometric genus is smaller.”

**Sources:** none listed. No primary source with a working link was found.

### A marked point is part of an elliptic curve

**Remember:** No marked point, no group.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Formally, an elliptic curve over a field K is a smooth projective curve of genus one with a distinguished point defined over K. The point is part of the data.

**Problem.** An elliptic curve is an abelian variety with the marked point as identity. Over a number field its rational points form a finitely generated group (the Mordell–Weil theorem).

**How the definition helps.** The marked point gives the identity, so the group law needs no further choice. A curve of genus one can have no rational point at all. Selmer's curve 3x³ + 4y³ + 5z³ = 0 has genus one and no rational points (our own example). So there is no group of rational points to study. Such a curve is a torsor under its Jacobian, which means the Jacobian, an elliptic curve, acts on it freely and transitively (our own remark). The hard part, deciding whether such a curve has a rational point, stays hard.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “If P has degree four and is square-free this equation again describes a plane curve of genus one; however, it has no natural choice of identity element.”

**Sources:**

- [Ernst S. Selmer, The diophantine equation ax³ + by³ + cz³ = 0, Acta Mathematica 85 (1951) 203–362](https://doi.org/10.1007/BF02395746)

### Elliptic curves as lattice quotients have n² points killed by n

**Remember:** Dividing the lattice by n gives an n by n grid modulo the lattice.

*True by definition.* MSC 14H52 (Elliptic curves), 33E05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over ℂ, describe an elliptic curve as ℂ/Λ, with Λ the integer span of two real-linearly independent complex numbers. In this quotient, numbers differing by an element of Λ represent the same point. The cubic definition uses a nonsingular plane cubic with a distinguished origin and addition by chords and tangents.

**Problem.** For a positive integer n, the points P with nP = 0 form a group isomorphic to (ℤ/nℤ) × (ℤ/nℤ). Thus there are n² such points.

**How the definition helps.** The lattice quotient definition turns nP = 0 into a divisibility test on a representative. The equation holds for the class of z exactly when nz belongs to Λ. In our own computation the coefficients of z in a lattice basis are integer multiples of 1/n, taken modulo integers. This gives two independent coordinates in ℤ/nℤ. A cubic calculation would instead need to control the polynomial equations for multiplication by n. The work moves into identifying the complex cubic and its addition with the lattice quotient.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “This also allows an easy understanding of the torsion points on an elliptic curve: if the lattice Λ is spanned by the fundamental periods ω₁ and ω₂, then the n-torsion points are the (equivalence classes of) points of the form”

**Sources:** none listed. No primary source with a working link was found.

### Excluding singular cubics makes rational points finitely generated

**Remember:** Cusps and nodes give groups too large to be finitely generated.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An elliptic curve y² = x³ + ax + b must be non-singular. When the characteristic is not 2 or 3, this holds exactly when 4a³ + 27b² is not zero.

**Problem.** The Mordell–Weil theorem says that the group of rational points of an elliptic curve over ℚ is finitely generated.

**How the definition helps.** The non-singular condition rules out cubics whose groups are the additive or multiplicative group of ℚ, which are not finitely generated. On the cuspidal cubic y² = x³, the smooth rational points form a group isomorphic to ℚ under addition (our own example). On the nodal cubic y² = x²(x + 1), they form ℚ\* under multiplication (our own example). Neither group is finitely generated. With the condition, the curve has genus one, and over ℂ it is a torus. The proof of Mordell–Weil, with the weak theorem and heights, stays real work.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “The curve is required to be non-singular, which means that the curve has no cusps or self-intersections.”

**Sources:** none listed. No primary source with a working link was found.

### Points as ideal classes make the elliptic curve group law associative

**Remember:** Embed points in a known group, and associativity comes for free.

*True by definition.* MSC 14H52 (Elliptic curves), 13C20. arXiv cs.LO, math.AG. Level 3: graduate.

**Definition.** Let W be a Weierstrass curve over a field F, with coordinate ring F\[W\], the ring of polynomial functions on W. Send each nonsingular affine point (x, y) to the class of the ideal ⟨X − x, Y − y⟩ in the ideal class group Cl(F\[W\]). Send the point at infinity to the trivial class. The ideal class group is the group of invertible fractional ideals modulo principal ones.

**Problem.** The chord-and-tangent rule adds points of an elliptic curve. Associativity of this addition is hard to check by direct algebra, because there are many cases (our own remark).

**How the definition helps.** Points become elements of a group that is already known to be associative, so the group law is inherited. The paper's Lemma 8 shows that the ideals of two points, times a principal ideal, equal the ideal of their sum times another principal ideal. So the map turns addition of points into multiplication of ideal classes. The quoted Lemma 11 says the map is injective, so the axioms of an abelian group carry over from the class group (Proposition 5). The proof works in any characteristic and avoids the Riemann–Roch theorem (our own remark). What stays hard is the injectivity, which needs a computation with norms and degrees (Lemmas 9 and 10).

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

**Problem.** Take a compact Riemann surface X with a point x removed. Which holomorphic vector bundles on X come from unitary representations of the fundamental group of X minus x?

**How the definition helps.** A unitary flat structure forbids subbundles of larger slope, and stability asks for exactly this (our own). A bundle from a unitary representation is semistable (our own). The paper shows that such a bundle is stable exactly when the representation is irreducible. For an excluded case, take a point p and the bundle O(p) ⊕ O(−p) (our own). It has degree 0 but a subbundle of degree 1, so no unitary representation gives it (our own). The converse, that every stable bundle comes from an irreducible unitary representation, is the hard direction. Narasimhan and Seshadri proved it in 1965, and Donaldson later gave a proof by differential geometry.

**Wikipedia:** [Narasimhan–Seshadri theorem](https://en.wikipedia.org/wiki/Narasimhan%E2%80%93Seshadri_theorem). It says: “says that a holomorphic vector bundle over a compact Riemann surface is stable if and only if it comes from an irreducible projective unitary representation of the fundamental group.”

**Paper or page:** [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1), [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1). It says: “If E is a stable holomorphic vector bundle on X of rank n and degree m, then there exists an irreducible representation ρ : π₁(X − x, y) → U(n) … such that E is isomorphic to E(ρ).”

**Sources:**

- [The Narasimhan-Seshadri Theorem revisited, arXiv:2509.24617v1 (2025)](https://arxiv.org/abs/2509.24617v1)
- [M. S. Narasimhan, C. S. Seshadri, Stable and unitary vector bundles on a compact Riemann surface, Annals of Mathematics 82 (1965)](https://doi.org/10.2307/1970710)

### Testing only Higgs-invariant subbundles lets unstable bundles solve Hitchin's equations

**Remember:** Test only the subbundles the Higgs field keeps.

*Rules out counterexamples.* MSC 14H60 (Vector bundles on curves and their moduli), 53C07, 53D30. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A Higgs bundle on a compact Riemann surface is a holomorphic bundle E with a holomorphic map φ from E to E ⊗ K. Here K is the canonical bundle, the bundle of holomorphic one-forms. The Higgs bundle is stable if every φ-invariant proper subbundle has smaller slope. Subbundles that φ does not preserve are not tested.

**Problem.** Hitchin's equations couple the curvature of a unitary connection with the Higgs field. The Chern connection is the unitary connection fixed by the metric and the holomorphic structure. One wants an algebraic test for the existence of solutions, and so a description of the moduli space.

**How the definition helps.** Only φ-invariant subbundles can split off in a solution, so stability need only test those. On a surface of genus at least two, choose a line bundle L with L² = K (our own). The bundle L ⊕ L⁻¹ is unstable, since L has positive degree (our own). Let φ map L isomorphically onto L⁻¹ ⊗ K, which is L again (our own). Then L is not invariant, the Higgs bundle is stable, and Hitchin's solution gives the hyperbolic metric (our own). Polystability again makes the statement an exact equivalence. Solutions also give flat connections, and this correspondence is nonabelian Hodge theory.

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

**Problem.** Show that the group law on an abelian variety is commutative, without putting commutativity into the definition.

**How the definition helps.** Completeness lets the rigidity lemma apply, and the rigidity lemma forces commutativity. Mumford defines an abelian variety by completeness alone, with connectedness built into the word 'variety', and he does not assume commutativity. Connectedness is needed, since a finite non-commutative group is a complete algebraic group. The rigidity lemma for complete varieties then shows that every such group is commutative. Roughly, the lemma says that a map out of a product with a complete variety that is constant on one slice is constant on every slice. Non-complete groups such as GLₙ are not commutative, so completeness is what excludes them. The commutativity is a theorem (the rigidity lemma), not a tautology.

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

**Problem.** Every K-point of an abelian variety, a projective algebraic group, should extend to an R-point of its model. The model should be unique. Its fibre at each prime should give a well-defined reduction of the abelian variety.

**How the definition helps.** Both statements follow at once from the universal property, applied to X = Spec R. The work moves into Néron's existence theorem for abelian varieties. Asking for a smooth model, not a proper one, is what makes it work (our own remark). A proper model of an elliptic curve with bad reduction has a singular fibre at the bad prime (our own remark). The page builds the Néron model from such a model by removing the bad points. The fibre of the Néron model at a prime can be disconnected or a torus. Néron models do not exist for the additive group.

**Wikipedia:** [Néron model](https://en.wikipedia.org/wiki/N%C3%A9ron_model). It says: “If a Néron model exists then it is unique up to unique isomorphism.”

**Sources:**

- [André Néron, Modèles minimaux des variétés abéliennes sur les corps locaux et globaux, Publications Mathématiques de l'IHÉS 21 (1964) 5–128](https://doi.org/10.1007/BF02684271)

### A universal-property Albanese makes an abelian variety its own Albanese

**Remember:** Once the variety is abelian, the identity map already does the job.

*True by definition.* MSC 14K30 (Picard schemes, higher Jacobians), 14K05. arXiv math.AG. Level 3: graduate.

**Definition.** The Albanese variety of a pointed variety X is an abelian variety with a pointed map from X. Every pointed map from X to an abelian variety must factor through it by a unique homomorphism. For smooth projective X one can instead build it as the dual of the Picard variety. The Picard variety is the abelian variety of line bundles algebraically equivalent to zero.

**Problem.** The Albanese variety of an abelian variety, pointed at its identity, is that same abelian variety.

**How the definition helps.** With the universal property, the identity map is the candidate, and one only checks that it is universal. This holds because every pointed map between abelian varieties is a homomorphism (our own). That fact follows from the rigidity lemma (our own). The lemma says that a map out of a product of complete varieties, if constant on one slice, is constant on every parallel slice. With the Picard construction, the claim instead needs biduality, the theorem that the dual of the dual of A is A (our own). For general X, the work goes into proving that the Albanese exists (our own).

**nLab:** [Albanese variety](https://ncatlab.org/nlab/show/Albanese+variety). It says: “Moreover, the Albanese variety of the Albanese variety is the Albanese variety.”

**Sources:**

- [James S. Milne, Abelian Varieties (course notes)](https://www.jmilne.org/math/CourseNotes/AV.pdf)

### The Lazard ring carries the universal formal group law by definition

**Remember:** Free coefficients, only the forced relations: that is the Lazard ring.

*True by definition.* MSC 14L05 (Formal groups, \\(p\\)-divisible groups), 55N22. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A one-dimensional commutative formal group law over a ring is a power series F(x, y) that behaves like a group operation: it is commutative, has a unit and is associative. The Lazard ring L is the commutative ring generated by symbols aᵢⱼ, divided by exactly the polynomial relations that make ℓ(x, y) = Σ aᵢⱼ xⁱ yʲ commutative, unital and associative. So ℓ is a formal group law over L by construction.

**Problem.** There is a ring with a universal one-dimensional commutative formal group law. That is, every formal group law over any ring R is the image of it under exactly one ring map L → R.

**How the definition helps.** L is built from exactly the equations that a formal group law must satisfy, so universality is immediate. A formal group law over R is a choice of coefficients cᵢⱼ in R that satisfy the same polynomial equations. The ring map must send aᵢⱼ to cᵢⱼ. This map is well defined because the relations of L are exactly those equations. The hard content is Lazard's theorem that L is a polynomial ring ℤ\[t₁, t₂, …\]. After that, Quillen's theorem says that L is the coefficient ring of complex cobordism MU (a cohomology theory built from stably complex manifolds).

**nLab:** [formal group](https://ncatlab.org/nlab/show/formal+group), [Lazard ring](https://ncatlab.org/nlab/show/Lazard+ring). It says: “But this is guaranteed by the vary choice of relations imposed in the definition of the Lazard ring.”

**Sources:**

- [Michel Lazard, Sur les groupes de Lie formels à un paramètre, Bulletin de la Société Mathématique de France 83 (1955) 251](https://doi.org/10.24033/bsmf.1462)
- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### As a group scheme, p-torsion always has order p²

**Remember:** Points can vanish, but the order of the group scheme stays p².

*Makes the theorem clean to state or prove.* MSC 14L15 (Group schemes), 14H52. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A group scheme is a scheme with multiplication, unit and inverse morphisms that satisfy the group laws. Its points with values in any ring form a group. A finite flat group scheme has a well-defined order, the rank of its ring of functions as a module.

**Problem.** The p-torsion of an elliptic curve should have order p² in every characteristic, as it does over ℂ. This uniformity is needed to study p-torsion in families.

**How the definition helps.** The order counts with the whole ring of functions, nilpotents included, so it stays constant in flat families. Nilpotents are functions with a power equal to 0. Over an algebraically closed field of characteristic p, a supersingular curve has only the identity as p-torsion point, and an ordinary one has p. The missing points survive as infinitesimal parts of the group scheme. In a family of curves, the page says that the supersingular locus is where the components of the p-torsion merge. In characteristic p, the p-th roots of unity form a single point of order p (our own example). So does the kernel of Frobenius on the additive group (our own example).

**Wikipedia:** [Group scheme](https://en.wikipedia.org/wiki/Group_scheme). It says: “it is a finite flat group scheme of order p² that has either p connected components (if the curve is ordinary) or one connected component (if the curve is supersingular).”

**Sources:** none listed. No primary source with a working link was found.

### Commutative Hopf algebras as group objects make affine group points groups

**Remember:** Maps into a group object always form a group.

*True by definition.* MSC 14L15 (Group schemes), 16T05. arXiv math.QA, math.AG. Level 3: graduate.

**Definition.** Fix a commutative ring k and read a commutative Hopf algebra H as a group object among affine schemes. Affine schemes form the opposite of the category of commutative k-algebras. A group object has multiplication, unit and inverse maps that satisfy the group laws as equations of maps. The comultiplication, counit and antipode of H give these maps with all arrows reversed.

**Problem.** Let H be a commutative Hopf algebra over k and R a commutative k-algebra. The algebra maps H → R form a group. Each algebra map R → R′ induces a group homomorphism.

**How the definition helps.** The group-object definition makes this an instance of a general fact. The maps from any object into a group object form a group, naturally in that object (our own). In the opposite category, these maps are the algebra maps H → R. The work moves into the fact that H ⊗ H is the coproduct of H with itself among commutative algebras. So H ⊗ H plays the role of the product of the scheme with itself, and Δ gives the multiplication (our own explanation). Concretely, the group product of f and g is f ⋆ g = m ∘ (f ⊗ g) ∘ Δ.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A commutative Hopf monoid in a symmetric monoidal category V is the same as a group object in the opposite category CMon(V)ᵒᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Keeping only stable points gives group quotients that are varieties

**Remember:** Throw away the unstable points, and the quotient becomes a variety again.

*Rules out counterexamples. Confidence: medium.* MSC 14L24 (Geometric invariant theory), 14L30. arXiv math.AG. Level 3: graduate.

**Definition.** Let a reductive group (a group such as GLₙ) act on a projective variety, with a linearised ample line bundle L. A linearisation is a lift of the group action to L. A point is semistable if some invariant section of a positive power of L does not vanish at it. A point is stable if it is semistable, its orbit is closed in the semistable locus, and its stabiliser is finite.

**Problem.** Construct moduli spaces as quotients of varieties by group actions. This is needed when the naive orbit space is not a variety.

**How the definition helps.** Removing the unstable points removes the orbits that spoil the quotient, so a good quotient exists. Orbit spaces of group actions are often not separated, because some orbits are not closed and lie in the closure of others. On the semistable points there is a good quotient (a quotient whose functions are exactly the invariant functions), and it is a projective variety. On the stable points this is a geometric quotient: its points are exactly the orbits. The quotient stack of the stable points is close to a variety, for example a Deligne–Mumford stack (an orbifold). For vector bundles, stability in geometric invariant theory matches slope stability, and this is how moduli spaces of bundles are built. The good-quotient statements are Mumford's theorems, and the nLab only summarises them.

**nLab:** [geometric invariant theory](https://ncatlab.org/nlab/show/geometric+invariant+theory). It says: “such that the quotient stack on these is "close" to being represented by another projective variety”

**Sources:**

- [David Mumford, John Fogarty, Frances Kirwan, Geometric Invariant Theory, 3rd edition, Ergebnisse der Mathematik 34, Springer (1994; first edition by Mumford, 1965)](https://doi.org/10.1007/978-3-642-57916-5)

### Polystable orbits are exactly those that meet the moment map's zero set

**Remember:** Closed orbits, not stable ones, are where the moment map vanishes.

*Rules out counterexamples.* MSC 14L24 (Geometric invariant theory), 53D20. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A complex reductive group G, such as GLₙ(ℂ), acts linearly on a projective variety. A point is semistable if 0 is not in the closure of the orbit of a lift to the cone over the variety. It is polystable if that orbit is closed, and stable if it is also of finite stabilizer.

**Problem.** The maximal compact subgroup K of G has a moment map μ, a map whose components generate the K-action as Hamiltonian flows. One wants to match the algebraic quotient by G with the symplectic quotient μ⁻¹(0)/K.

**How the definition helps.** Polystability picks exactly the closed orbits, and these are the orbits where the length of the lifted vector has a minimum, where μ vanishes. Semistable is too weak, as an example shows (our own). Let ℂ\* act on ℙ² with weights 1, −1, 0; the point \[1:0:1\] is semistable, but μ is never zero on its orbit (our own). Stable is too strong, since \[0:0:1\] has stabilizer ℂ\* but its orbit meets μ⁻¹(0) (our own). The quoted theorem adds that the intersection is a single K-orbit. So the GIT quotient of polystable points equals μ⁻¹(0)/K (our own). The Hilbert–Mumford criterion in the same source turns the condition into a test on one-parameter subgroups.

**Paper or page:** [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966), [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966). It says: “A point x∈X is GIT polystable for the G action if and only if G·x intersects μ⁻¹(0). Furthermore, if x is polystable then G·x intersects μ⁻¹(0) is a unique K-orbit.”

**Sources:**

- [J. B. McCarthy, Stability conditions and canonical metrics, arXiv:2302.04966 (2023)](https://arxiv.org/abs/2302.04966)
- [G. Kempf and L. Ness, The length of vectors in representation spaces, Algebraic Geometry, Lecture Notes in Mathematics 732 (1979) 233–243](https://doi.org/10.1007/bfb0066647)

### Normality fills codimension-two holes

**Remember:** On a normal variety, a hole of codimension two hides no poles.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 13B22. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An affine integral variety has a coordinate ring that is a domain. It is normal if that ring contains each fraction satisfying a monic polynomial over the ring.

**Problem.** Remove a closed subset of dimension at least two less than that of a normal affine integral variety. Every regular function on the remainder extends uniquely across the missing set. Regular means locally expressible as a fraction with nonvanishing denominator.

**How the definition helps.** Normality makes it enough to test a fraction along the subsets of codimension one, in our own explanation. These subsets have dimension one less than the variety. The cited intersection theorem says their local rings together detect membership in the coordinate ring. In our own example, take the polynomials in ℚ\[x, y\] with no linear terms. Off the origin, the fractions x³/x² and (xy²)/y² define x wherever their denominators are nonzero. They cover the punctured surface, but x does not belong to its coordinate ring.

**Paper or page:** [Algebra, Lemma 10.157.6.](https://stacks.math.columbia.edu/tag/031T). It says: “R = \\bigcap\\nolimits\_{\\text{height}(\\mathfrak p) = 1} R<sub>\\mathfrak p</sub>”

**Sources:** none listed. No primary source with a working link was found.

### Normality rules out finite birational maps that glue or pinch

**Remember:** A normal variety cannot be simplified by a finite birational map.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 14E05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A variety is normal if each local ring is an integrally closed domain. A domain is integrally closed if each root in its fraction field of a monic polynomial over it lies in the domain. A morphism is birational if it is an isomorphism between dense open subsets.

**Problem.** Zariski's main theorem says that a birational morphism with finite fibres to a normal variety is an isomorphism onto an open subset. A related form says that a normal point has only one branch.

**How the definition helps.** For finite maps, the statement is almost the definition. A finite map is one given locally by a ring extension that is finitely generated as a module. A finite birational map then gives such an extension inside the same fraction field, and an integrally closed ring has none (our own). The page gives two bad cases, the cuspidal and the nodal cubic. The cusp is pinched, and the node glues two points of the line. The real content of Zariski's theorem is for maps with finite fibres that are not finite. Grothendieck later gave a structure theorem for quasi-finite morphisms, which are maps with finite fibres.

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

**How the definition helps.** In the torus, multiplying an equation by a monomial does not change its solutions. This matches the fact that shifting a polytope does not change volumes. In ℂⁿ, multiplying f by x adds the whole hyperplane x = 0 to the solutions (our own example). So no polytope count could be exact there. Bézout's bound, the product of the degrees, is often much larger than the true number for sparse systems. The count is exact only for generic coefficients, as the page says. Our own remark: the proofs use toric compactifications or tropical degenerations.

**Wikipedia:** [Bernstein–Kushnirenko theorem](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Kushnirenko_theorem). It says: “the number of nonzero complex solutions of a system of Laurent polynomial equations f₁ = ⋯ = fₙ = 0 is equal to the mixed volume of the Newton polytopes of such polynomials”

**Sources:**

- [David N. Bernstein, The number of roots of a system of equations, Functional Analysis and Its Applications 9 (1975) 183–185](https://doi.org/10.1007/BF01075595)
- [A. G. Kouchnirenko, Polyèdres de Newton et nombres de Milnor, Inventiones Mathematicae 32 (1976) 1–31](https://doi.org/10.1007/BF01389769)

### Requiring normality makes toric varieties correspond exactly to fans

**Remember:** Normal toric varieties are fans, and fans are normal toric varieties.

*Rules out counterexamples.* MSC 14M25 (Toric varieties, Newton polyhedra, Okounkov bodies). arXiv math.AG. Level 3: graduate.

**Definition.** A toric variety contains an algebraic torus as a dense open set, and the torus action on itself extends to the whole variety. A fan is a set of strongly convex rational polyhedral cones, closed under taking faces, in which two cones meet in a common face. Some authors also require a toric variety to be normal.

**Problem.** Normal toric varieties are in one-to-one match with fans. The variety is smooth when each cone is spanned by part of a lattice basis. It is complete when the fan covers the whole space.

**How the definition helps.** Requiring normality makes the correspondence exact, because the toric variety built from a fan is always normal, as the page says. The reason is that each cone gives a semigroup ring that is integrally closed (our own remark). So a fan cannot give back a non-normal toric variety. The cuspidal cubic y² = x³ contains the torus as the points (t², t³), and the action extends (our own example). But this curve is not normal. The hard work that stays is the classification of fans themselves, for example of smooth complete fans with many rays.

**Wikipedia:** [Toric variety](https://en.wikipedia.org/wiki/Toric_variety). It says: “This correspondence is called the fundamental theorem for toric geometry, and it gives a one-to-one correspondence between normal toric varieties and fans of strongly convex rational cones.”

**Sources:**

- [Michel Demazure, Sous-groupes algébriques de rang maximum du groupe de Cremona, Annales scientifiques de l'École Normale Supérieure 3 (1970) 507–588](https://doi.org/10.24033/asens.1201)
- [G. Kempf, F. Knudsen, D. Mumford, B. Saint-Donat, Toroidal Embeddings I, Lecture Notes in Mathematics 339 (1973)](https://doi.org/10.1007/BFb0070318)

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

**Definition.** Tropicalization replaces each coefficient of a Laurent polynomial by its valuation, and sums and products by minimum and plus. The tropical hypersurface of the result is the set of points where the minimum among its terms is attained at least twice. For a variety in a torus over a valued field, there are three definitions of its tropical variety. They use these hypersurfaces, initial ideals, or the closure of the image of the valuation map.

**Problem.** The fundamental theorem says the three definitions of the tropical variety agree. For a hypersurface, this is Kapranov's theorem. The closure of the valuations of the solutions is exactly the tropical hypersurface.

**How the definition helps.** The "attained twice" definition makes one inclusion obvious. At a solution of f = 0 the terms must cancel, and terms with one strictly smallest valuation cannot cancel. So the valuations of solutions lie in the tropical hypersurface for free. The work moves to the other inclusion, that every tie comes from actual solutions. This needs an algebraically closed field with a nontrivial valuation. For other varieties, the hypersurfaces of a generating set of the ideal can cut out too big a set. A generating set need not be a tropical basis.

**Wikipedia:** [Tropical geometry](https://en.wikipedia.org/wiki/Tropical_geometry). It says: “The equivalence of these definitions is referred to as the Fundamental Theorem of Tropical Geometry.”

**Sources:**

- [Manfred Einsiedler, Mikhail Kapranov, Douglas Lind, Non-archimedean amoebas and tropical varieties, Journal für die reine und angewandte Mathematik 601 (2006) 139–157, arXiv math/0408311](https://arxiv.org/abs/math/0408311)

### If 𝔽₁-modules are pointed sets, K(𝔽₁) is the sphere spectrum

**Remember:** Over 𝔽₁, a vector space is just its basis plus a zero point.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 19D23, 55P42. arXiv math.AG, math.KT. Level 4: research.

**Definition.** This entry uses one proposal for the 'field with one element' 𝔽₁. In it, a finite-dimensional vector space over 𝔽₁ is a pointed finite set (a finite set with one marked point that plays the role of zero). Then GL(n, 𝔽₁) is the symmetric group Σₙ.

**Problem.** A slogan says that algebraic K-theory over 𝔽₁ is stable cohomotopy, the homotopy theory of the sphere spectrum 𝕊. We want to make sense of this slogan.

**How the definition helps.** With this definition, K(𝔽₁) is the K-theory of finite sets, and a known theorem says that this is the sphere spectrum. Algebraic K-theory of a ring is the K-theory of its permutative category of modules (a category with a sum that is associative and unital exactly, and commutative up to coherent isomorphism). With 𝔽₁-modules defined as pointed finite sets, K(𝔽₁) is by definition the K-theory of finite sets. The real content is the Barratt–Priddy–Quillen theorem, in Segal's form. It says that the K-theory of the permutative category of finite sets is the sphere spectrum 𝕊. The page says that this is only one proposal. Connes and Consani use Γ-sets instead, and K(𝔽₁) is still 𝕊 there.

**nLab:** [field with one element](https://ncatlab.org/nlab/show/field+with+one+element), [K-theory of a permutative category](https://ncatlab.org/nlab/show/K-theory+of+a+permutative+category). It says: “With the identification 𝔽₁ Mod ≃ FinSet∗/ from above it follows that the algebraic K-theory over 𝔽₁ is stable cohomotopy”

**Sources:**

- [Chenghao Chu, Oliver Lorscheid, Rekha Santhanam, Sheaves and K-theory for 𝔽₁-schemes, Advances in Mathematics 229 (2012), arXiv:1010.2896](https://arxiv.org/abs/1010.2896)
- [Anton Deitmar, Remarks on zeta functions and K-theory over F1, 2006, arXiv:math/0605429](https://arxiv.org/abs/math/0605429)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Treat Spec A as a locale or ∞-topos, not a topological space

**Remember:** Keep the lattice of opens of Spec A; forget whether it has enough points.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 18F70, 18N60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Regard the spectrum of a commutative ring A as a locale, not as a set of prime ideals with a topology. A locale is a lattice of open sets that need not come from a set of points; here the basic opens U(f), one for each element f of A, generate it. More generally, regard the spectrum as the topos or ∞-topos of sheaves on this locale. A scheme is then a structured ∞-topos that is locally of this form.

**Problem.** Find one definition of the spectrum and of schemes that works without the axiom of choice, in relative situations and for the étale topology. It must still give back ordinary schemes. The 0-truncated, 0-localic schemes in this sense (those whose ∞-topos comes from a locale and whose structure sheaf has ordinary rings) are exactly the ordinary schemes (Lurie, Structured Spaces, Proposition 4.2.9).

**How the definition helps.** In our own reading, the locale keeps all the open sets even when points are missing, so one topos-based definition treats all three cases in one way. Lurie's text, quoted on the nLab, gives three reasons. First, the locale has enough points (enough to tell the open sets apart) exactly when every non-zero commutative ring has a prime ideal, and this needs the axiom of choice. Second, in relative situations the construction can fail to have enough points even with choice, but the locale and its sheaf theory still behave well. Third, a topological space is not enough for the étale topology, because subobjects of the terminal object do not generate étale sheaves. The nLab states the theorem that the 0-truncated, 0-localic case gives back ordinary schemes.

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

### Derived Azumaya algebras realize the whole bigger Brauer group

**Remember:** Take all of H²(𝔾ₘ) as the Brauer group; derived Azumaya algebras realize it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 16H05. arXiv math.AG, math.RA. Level 4: research.

**Definition.** Classically, an Azumaya algebra over a commutative ring R is an R-algebra that has an inverse up to Morita equivalence. Two algebras are Morita equivalent when their categories of modules are equivalent. The Brauer group Br(R) is the group of Morita classes of Azumaya algebras under ⊗. For a connective E∞ ring R (a commutative ring in the homotopical sense, with no homotopy in negative degrees), the Brauer ∞-group Br(R) is the group of invertible R-linear module ∞-categories of the form Mod(A). Antieau and Gepner show that these are given by derived Azumaya algebras modulo Morita equivalence.

**Problem.** Classical Azumaya algebras give only part of the étale cohomology group H²(X, 𝔾ₘ), where 𝔾ₘ is the sheaf of units: at best the torsion part, by Gabber. The goal is an algebraic description of all of H².

**How the definition helps.** The definition makes the Brauer classes a group automatically, with the opposite algebra as the inverse. The link to cohomology is real work: classical Br(R) embeds into the torsion part of étale H²(𝔾ₘ), with equality in many cases by Gabber. The nLab takes all of étale H²(𝔾ₘ) as the actual Brauer group, called the bigger Brauer group. Toën showed that derived Azumaya algebras represent all of it, including the classes that are not torsion. With the derived definition, Antieau and Gepner prove that Azumaya algebras are étale-locally trivial and that Br is an étale sheaf. They also prove that Br is the étale delooping of the Picard sheaf (the sheaf of invertible modules), a clean statement that the classical definition does not give. The proofs need derived algebraic geometry.

**nLab:** [Brauer group](https://ncatlab.org/nlab/show/Brauer+group), [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “as the "actual" Brauer group. This has been called the "bigger Brauer group”

**Sources:**

- [Benjamin Antieau, David Gepner, Brauer groups and étale cohomology in derived algebraic geometry, Geom. Topol. 18 (2014) 1149–1244, arXiv:1210.0290](https://arxiv.org/abs/1210.0290)
- [Bertrand Toën, Derived Azumaya algebras and generators for twisted derived categories, Invent. Math. 189 (2012) 581–652, arXiv:1002.2599](https://arxiv.org/abs/1002.2599)

### Derived intersections give the right intersection count without transversality

**Remember:** Intersect with Tor, not with the tensor product, and the count comes out right.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 14C17. arXiv math.AG. Level 4: research.

**Definition.** In derived algebraic geometry, the intersection of two subschemes is their derived fibre product. Its ring of functions is the derived tensor product of the two structure sheaves (the sheaves of functions on the subschemes). The homotopy groups of this derived ring are the Tor groups.

**Problem.** The intersection number of two subvarieties should equal the product of their cohomology classes. This should hold even when the subvarieties do not meet transversally (that is, when their tangent spaces are not in general position where they meet).

**How the definition helps.** The derived intersection carries the correction for a non-transverse intersection inside it, so the right count comes from the definition. When the intersection is not transverse, the plain tensor product of the structure sheaves gives the wrong count. Serre corrected the count with the alternating sum of the lengths of the Tor groups. The homotopy groups of the derived intersection are exactly these Tor groups, so the derived intersection gives Serre's alternating sum directly. The nLab states the general Bézout statement only as what should hold. The full statement depends on the theory of virtual fundamental classes.

**nLab:** [intersection theory](https://ncatlab.org/nlab/show/intersection+theory), [derived algebraic geometry](https://ncatlab.org/nlab/show/derived+algebraic+geometry), [derived stack](https://ncatlab.org/nlab/show/derived+stack). It says: “the cup product of two virtual fundamental classes of mid-dimensional subspaces equals the fundamental class of their derived intersection”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Hochschild homology is functions on the derived self-intersection of the diagonal

**Remember:** A loop is a point that is equal to itself in a non-trivial way.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 13D03. arXiv math.AG, math.KT. Level 4: research.

**Definition.** The derived loop space ℒX of a space X is the homotopy pullback of the diagonal map X → X × X along itself. In words, it is the intersection of the diagonal with itself, computed in derived geometry.

**Problem.** Give Hochschild homology HH•(A) a geometric meaning, where A is the algebra of functions on X. Through the Hochschild–Kostant–Rosenberg theorem, this also gives a geometric meaning to the differential forms on X.

**How the definition helps.** The derived loop space makes Hochschild homology into functions on a space, because functions on a homotopy pullback form a derived tensor product. So the functions on ℒX are the derived tensor product of A with itself over A ⊗ A, and this is HH•(A). The nLab calls this, to some extent, a tautological dual reformulation. For a plain space, the underived loop space is X itself, so the derived version is essential. There are subtleties, such as putting an algebra structure back on the Hochschild complex. Further results, such as the S¹-invariant functions being closed forms, need real work (Toën–Vezzosi, Ben-Zvi–Nadler).

**nLab:** [derived geometry](https://ncatlab.org/nlab/show/derived+geometry), [derived loop space](https://ncatlab.org/nlab/show/derived+loop+space). It says: “To some extent this is just the tautological dual reformulation of Hochschild homology as the (∞,1)-categorical (derived) tensor product”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, S¹-equivariant simplicial algebras and de Rham theory, 2009, arXiv:0904.3256](https://arxiv.org/abs/0904.3256)
- [David Ben-Zvi, David Nadler, Loop spaces and connections, Journal of Topology 5 (2012), arXiv:1002.3636](https://arxiv.org/abs/1002.3636)

### In K-theory, the virtual class is the class of the structure sheaf

**Remember:** The virtual class of a derived scheme is the derived scheme itself.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 19E08, 14C35. arXiv math.AG, math.KT. Level 4: research.

**Definition.** Let X be a derived scheme, and let t₀X be its underlying classical scheme. Suppose that the homotopy sheaves πᵢ O(X) of its structure sheaf are coherent and are zero for large i. The K-theoretic virtual class is the unique class \[X\] in the G-theory group G₀(t₀X) that maps to the class of the structure sheaf O(X) in G₀(X). G-theory is the K-theory of coherent sheaves, and the class \[X\] equals the alternating sum of the classes of the homotopy sheaves πᵢ O(X).

**Problem.** Find a canonical virtual fundamental class for a derived scheme.

**How the definition helps.** When the moduli space is a derived scheme, the class is tautological: it is just the class of the structure sheaf. The work moves into the dévissage theorem. This theorem says that the map t₀X → X gives an isomorphism on G-theory, so you can move the class to the classical scheme. To get a class in Chow homology, you also need the Grothendieck–Riemann–Roch map and a correction by a Todd class. This step needs extra conditions on the cotangent complex. The nLab takes this account from Toën's 2014 survey.

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class). It says: “In our hearts we all know that the fundamental class should be something tautological”

**Sources:**

- [Bertrand Toën, Derived algebraic geometry, EMS Surveys in Mathematical Sciences 1 (2014) 153–240, arXiv:1401.1044](https://arxiv.org/abs/1401.1044)
- [Bertrand Toën, Higher and derived stacks: a global overview, arXiv:math/0604504](https://arxiv.org/abs/math/0604504)

### Left-exact functors give rings for free, and covers make them local

**Remember:** Left exactness makes the values rings; preserving covers makes them local.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 18N60, 14A15. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A geometry 𝒢 is a small (∞,1)-category with finite limits, an admissibility structure and a topology. The admissibility structure is a chosen class of morphisms that play the role of open embeddings, such as Spec R\[1/r\] → Spec R. A 𝒢-structure on an (∞,1)-topos 𝒳 is a left-exact functor 𝒪 : 𝒢 → 𝒳 (a functor that preserves finite limits). It must send admissible covering families to effective epimorphisms.

**Problem.** We want one notion of structured space that includes sheaves of rings and locally ringed spaces, and their derived versions.

**How the definition helps.** Left exactness alone makes each value a ring, and the cover condition makes the ring local. A commutative ring is the same as a left-exact functor (Ringᶠⁱⁿ)ᵒᵖ → Set. So a left-exact functor into sheaves on X is by definition a sheaf of rings, and no admissibility structure is needed for this. Local rings do need it, because the covers come from the admissibility structure. Take elements rᵢ of R with Σ αᵢ rᵢ = 1, so that the Spec R\[1/rᵢ\] cover Spec R. The functor sends this cover to an epimorphism exactly when, in each stalk, the image of some rᵢ is invertible, and that is the local ring condition. So 'locally ringed' is the cover-preservation axiom. Local morphisms are also defined with the admissible morphisms, and Lurie's DAG V develops the general theory.

**nLab:** [structured (infinity,1)-topos](https://ncatlab.org/nlab/show/structured+%28infinity%2C1%29-topos). It says: “Since rings can be identified with left-exact functors (Ringᶠⁱⁿ)ᵒᵖ → Set, we don't need to impose any admissibility structure in order to recover the notion of a sheaf of rings, since left-exactness is part of the definition of a "structure sheaf.”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, 2009, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Total transforms preserve nodal gluing

**Remember:** Keep the exceptional curve to keep the two branches joined.

*Rules out counterexamples.* MSC 14B05 (Singularities in algebraic geometry), 32S35. arXiv math.AG, math.CV. Level 4: research.

**Definition.** Embed a reduced complex variety in a smooth space. Resolve its ideal without changing the exterior, so its full inverse image consists of smooth hypersurfaces meeting like coordinate planes. Take this inverse image without multiplicities. The strict transform instead takes the closure of the lifted smooth part.

**Problem.** Blow up the origin where two coordinate axes meet, replacing the origin by its projective line of directions. Functions on the reduced full inverse image descend exactly to functions on the original axes.

**How the definition helps.** Keeping the line of directions forces the two branch values to agree at the crossing. In our own example, every regular function on that projective line is constant. Conversely, branch functions agreeing at the crossing extend across the line by that constant. The strict transform separates the branches and allows unequal values. Schwede’s theorem identifies when the full inverse image also recovers the original function sheaf with no higher cohomological corrections.

**Wikipedia:** [Du Bois singularity](https://en.wikipedia.org/wiki/Du_Bois_singularity). It says: “let E be the reduced preimage of X in Z”

**Sources:**

- [Karl Schwede, A simple characterization of Du Bois singularities (2007), Theorem 4.6](https://doi.org/10.1112/S0010437X07003004)

### Formal moduli problems are the same as differential graded Lie algebras

**Remember:** A deformation problem that respects gluing of thickenings is a Lie algebra in disguise.

*Makes the theorem clean to state or prove.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14A30, 17B70. arXiv math.AG, math.AT. Level 4: research.

**Definition.** A formal moduli problem is a functor X from small (Artinian) derived algebras to ∞-groupoids with two conditions. These algebras stand for infinitesimal thickenings of a point. First, X of the point is contractible. Second, X sends pullbacks along small maps to pullbacks.

**Problem.** Prove the folklore principle of Deligne and others: in characteristic 0, a differential graded Lie algebra governs every deformation problem.

**How the definition helps.** The pullback condition makes the folklore principle a theorem. This condition makes first order control the behaviour at every infinitesimal order, and an obstruction theory needs exactly that. With this definition, formal moduli problems over a field of characteristic 0 are equivalent to L∞ algebras, which are the same as differential graded Lie algebras up to homotopy. Pridham and Lurie proved this. In positive characteristic, you need partition Lie algebras instead (Brantner and Mathew).

**nLab:** [formal moduli problem](https://ncatlab.org/nlab/show/formal+moduli+problem). It says: “The clause about pullbacks is what makes the behaviour at arbitrary infinitesimal order be all controlled by that at first order”

**Sources:**

- [Jonathan P. Pridham, Unifying derived deformation theories, Adv. Math. 224 (2010) 772–826, arXiv:0705.0344](https://arxiv.org/abs/0705.0344)

### Formal plumbing identifies boundary neighborhoods in the genus-two moduli space

**Remember:** Write xy = q to track smoothing as well as gluing.

*Makes the theorem clean to state or prove.* MSC 14B20 (Formal neighborhoods in algebraic geometry), 14H10, 14D15. arXiv math.AG. Level 4: research.

**Definition.** Clutching glues two marked points of curves into a node, where two branches cross like xy = 0. Extended clutching uses formal coordinates x and y at the points and the equation xy = q. The parameter q smooths the node to all orders.

**Problem.** Work over ℚ, in the genus-two moduli space, near the boundary divisor of two elliptic curves joined at a node. The abstract states that its infinitesimal neighborhood is canonically that of the zero section in the normal bundle. Theorem 1.2 proves this at every order n after a pull-back, and at first order for genus at least 3.

**How the definition helps.** Extended clutching gives coordinates on all nearby smooth curves, not only on the nodal curve. The abstract says its advantage is control over changes of the formal parameters at the glued points. That control makes the identification canonical. Ordinary clutching is the case q = 0.

**Paper or page:** [Extended clutching construction for the moduli of stable curves](https://arxiv.org/abs/2110.04682v3), [Extended clutching construction for the moduli of stable curves](https://arxiv.org/abs/2110.04682v3). It says: “The advantage of our formal construction is that we can control the effect of changing formal parameters at the marked points that are being glued.”

**Sources:**

- [Alexander Polishchuk, Extended clutching construction for the moduli of stable curves, arXiv:2110.04682 (2024)](https://arxiv.org/abs/2110.04682v3)

### Fixing each cohomology dimension separately gives a moduli space of subschemes

**Remember:** Fix every cohomology dimension separately, not only their alternating sum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C05 (Parametrization (Chow and Hilbert schemes)), 14D22, 14B12. arXiv math.AG. Level 4: research.

**Definition.** The fiber-full scheme parametrizes closed subschemes of projective space whose sheaf cohomology dimensions are prescribed. The data are one function of the twist m for each cohomological degree i. Twisting by m means tensoring with the m-th power of the hyperplane line bundle.

**Problem.** For prescribed cohomology functions, a quasi-projective scheme represents families with exactly those dimensions in every fiber. It is a locally closed subscheme of the Hilbert scheme. This existence theorem is Theorem A of the authors' earlier paper; this paper studies its tangent and obstruction theory.

**How the definition helps.** The definition fixes exactly the data that a family must keep constant, so the moduli problem is precise. The Hilbert polynomial records only the alternating sum of these dimensions. Our own explanation is that it cannot see two adjacent degrees whose dimensions jump by the same amount. The fiber-full scheme separates such families. The earlier paper proves that the space exists. This paper uses it to give conditions for cohomology to stay constant under Gröbner degenerations.

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

**Problem.** Grothendieck wanted the category of pure motives to be a semisimple abelian category, in which every object is a direct sum of simple objects.

**How the definition helps.** With numerical equivalence the category of motives is semisimple, and no other adequate relation gives this. Jannsen proved that with numerical equivalence, and coefficients in a field of characteristic 0, the category of pure motives is abelian and semisimple. He also proved the converse. If the category for an adequate equivalence relation (a relation on cycles that works with pullback, pushforward and intersection) is semisimple abelian, then that relation is numerical equivalence. Numerical equivalence is the coarsest adequate relation. Whether it agrees with homological equivalence (equality of cohomology classes) is still open; it is one of Grothendieck's standard conjectures.

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

**Problem.** Some classes of Harris–Mumford admissible covers lie outside the tautological ring of moduli spaces of curves. How can one compute their intersections with tautological classes?

**How the definition helps.** The larger ring puts these cover classes and the usual classes in one ring where intersections can be computed. The paper gives additive generators for the ring and shows that their intersections can be computed by an algorithm. As an application it computes integrals of Harris–Mumford loci against tautological classes of complementary dimension.

**Paper or page:** [The H-tautological ring](https://arxiv.org/abs/2011.11565v2). It says: “In particular, our new framework includes classes of Harris-Mumford admissible covers on moduli spaces of curves, which are known in some (and speculatively many more) examples to lie outside the usual tautological ring.”

**Sources:**

- [Carl Lian, The H-tautological ring, arXiv:2011.11565 (2021)](https://arxiv.org/abs/2011.11565v2)

### Homogeneity picks out the Bismut–Gillet–Soulé theory of singular Bott–Chern classes

**Remember:** One degree condition removes the freedom of an additive genus.

*Rules out counterexamples. Confidence: medium.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14C40, 58J20. arXiv math.AG, math.DG. Level 4: research.

**Definition.** Take a vector bundle on a closed submanifold and a resolution of it on the ambient manifold. A singular Bott–Chern class is a class of currents that measures how their Chern character forms differ. The paper defines a theory of such classes by axioms. A homogeneous theory adds one more condition, which in our own reading fixes the degrees of a basic class.

**Problem.** The axioms allow many theories of singular Bott–Chern classes. Which one is the theory of Bismut, Gillet and Soulé?

**How the definition helps.** The homogeneity condition removes exactly the freedom that the axioms leave. For algebraic bundles, each transitive theory compatible with the projection formula differs from the homogeneous one by an additive genus (Corollary 9.38). It proves that only one theory is homogeneous (Theorem 9.3), and that it agrees with the theory of Bismut, Gillet and Soulé (Theorem 9.30). Our own reading is that a nonzero genus would add classes of the wrong degree.

**Paper or page:** [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2), [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2), [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2). It says: “We identify the theory defined by Bismut, Gillet and Soule as the only one that satisfies the additional condition of being homogeneous.”

**Sources:**

- [J. I. Burgos Gil, R. Litcanu, Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions, arXiv:0902.0430 (2010), Documenta Math. 15 (2010) 73--176](https://arxiv.org/abs/0902.0430v2)

### The virtual fundamental class always has the expected dimension

**Remember:** The virtual class has the dimension that naive counting predicts.

*Makes the theorem clean to state or prove.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14N35, 14A30. arXiv math.AG. Level 4: research.

**Definition.** A moduli space is a space whose points stand for geometric objects, such as maps from curves. A virtual fundamental class is a homology class on a moduli space that comes from its obstruction theory or its derived structure, not from its actual dimension. An obstruction theory is data that measures how the space fails to be smooth of the expected dimension. The virtual class always lives in the expected dimension.

**Problem.** Define Gromov–Witten invariants, which count curves in a target space. You get them by integrating over moduli spaces of stable maps. But these spaces can have components whose dimension is too large.

**How the definition helps.** The virtual class always has the expected dimension, so you can define the invariants for every target. For example, take the moduli space M̄₁,₀(ℙ², 3) of maps of degree 3 from genus 1 curves to the plane. Its expected dimension is 9, but it has a boundary component of dimension 10. So its ordinary fundamental class is useless for integrating classes of codimension 9. Behrend and Fantechi built the virtual class from a perfect obstruction theory with the intrinsic normal cone. The derived view says that the moduli space is the truncation of a quasi-smooth derived space, which is smooth in a hidden sense. The nLab notes that this hidden smoothness is a heuristic, not a general rule.

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class), [perfect obstruction theory](https://ncatlab.org/nlab/show/perfect+obstruction+theory), [hidden smoothness principle](https://ncatlab.org/nlab/show/hidden+smoothness+principle). It says: “The virtual fundamental class always lives in the expected dimension.”

**Sources:**

- [Maxim Kontsevich, Enumeration of rational curves via torus actions, in: The moduli space of curves, Progr. Math. 129 (1995), arXiv:hep-th/9405035](https://arxiv.org/abs/hep-th/9405035)
- [Kai Behrend, Barbara Fantechi, The intrinsic normal cone, Invent. Math. 128 (1997) 45–88, arXiv:alg-geom/9601010](https://arxiv.org/abs/alg-geom/9601010)

### Defining good moduli spaces by exact invariants gives their geometry for free

**Remember:** Two conditions on pushforward give the main properties of a GIT quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14D22, 14L24. arXiv math.AG. Level 4: research.

**Definition.** A map π from an algebraic stack 𝒳 to an algebraic space X is a good moduli space if three things hold. π is quasi-compact, pushforward along π is exact on quasi-coherent sheaves, and π⁎𝒪 = 𝒪ₓ. Exactness of pushforward is called cohomological affineness. It holds, for example, for the quotient of an affine scheme by a linearly reductive group, where pushforward takes invariants.

**Problem.** Geometric invariant theory (GIT) shows that good quotients are surjective, universally closed, match closed orbits with points, and are universal. One wants these properties for moduli stacks that are not given as global quotients.

**How the definition helps.** The definition keeps only the two properties that the GIT proofs use: invariants are exact, and functions downstairs are the invariant functions (our own reading). From these, the quoted theorem derives surjectivity, universal closedness, the bijection of closed points, and, in the Noetherian case, the universal property. For example (our own), the quotient of the affine line by the multiplicative group acting by scaling has a point as its good moduli space. Its two orbits, {0} and the rest, both map to that point, because their closures meet. What stays hard is to prove that a given stack has a good moduli space (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.9 (good moduli spaces)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “If π : 𝒳 → X is a good moduli space with X quasi-separated, then (1) π is surjective and universally closed; … In particular, π induces a bijection between closed points in 𝒳 and closed points in X”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), main theorem on properties of good moduli spaces](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [J. Alper, Good moduli spaces for Artin stacks, Annales de l'Institut Fourier 63 (2013) 2349–2402](https://doi.org/10.5802/aif.2833)

### Fixed points with chosen isomorphisms give the real points of a stack

**Remember:** Fixed means fixed up to a chosen isomorphism, not fixed on the nose.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14P25, 18N10. arXiv math.AG. Level 4: research.

**Definition.** A groupoid is a category in which every arrow is invertible. An involution is a map whose square is the identity. A fixed object of the involution σ is an object x with an isomorphism φ from x to σ(x) such that σ(φ)∘φ is the identity.

**Problem.** Let 𝒳 be a separated Deligne–Mumford stack of finite type over ℝ, a moduli space whose points may have finite automorphism groups. Complex conjugation gives an involution of its complex groupoid. The isomorphism classes of fixed objects, with the quotient topology, are homeomorphic to the real points of 𝒳 with the real analytic topology.

**How the definition helps.** The fixed groupoid keeps the isomorphism φ, and this is exactly the data needed to descend an object from ℂ to ℝ. Our own example is the classifying stack of the group with two elements. Over ℂ it has one point up to isomorphism. Over ℝ it has two real points, the trivial and the nontrivial double cover. The naive fixed set of the one-point space sees only one of them. The hard part is the comparison of topologies.

**Paper or page:** [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2), [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2). It says: “We prove that when the topological groupoid with involution arises from a Deligne-Mumford stack over ℝ, this fixed locus coincides with the real locus of the stack.”

**Sources:**

- [Emiliano Ambrosi, Olivier de Gaay Fortman, Topological groupoids with involution and real algebraic stacks, arXiv:2504.02760 (2025)](https://arxiv.org/abs/2504.02760v2)

### Regular stacks are those where every bounded coherent complex is perfect

**Remember:** Regular means every coherent complex has a finite resolution by bundles.

*True by definition. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14F08. arXiv math.AG. Level 4: research.

**Definition.** A Noetherian algebraic stack is regular when it has a smooth cover by a regular scheme. A perfect complex is one that is locally a finite complex of vector bundles. The test compares perfect complexes with complexes whose cohomology is bounded and coherent.

**Problem.** Serre showed that a Noetherian local ring is regular exactly when every finitely generated module has a finite free resolution. Does the same test describe regular algebraic stacks?

**How the definition helps.** With the derived test, a statement about perfect complexes is a statement about regularity, with no cover to choose. The paper proves that the cover definition and the derived test agree for decent, quasi-compact, locally Noetherian stacks. This is Serre's theorem moved to stacks, and the work moves into this comparison. With it, the authors prove stacky forms of conjectures of Antieau–Gepner–Heller and Bondal–Van den Bergh, which Neeman proved for schemes. Those forms still need extra hypotheses, such as finite Krull dimension and conditions on the diagonal.

**Paper or page:** [Regularity and bounded t-structures for algebraic stacks](https://arxiv.org/abs/2504.02813v1). It says: “such a stack is regular if and only if all complexes with bounded and coherent cohomology are perfect. This naturally enables us to extend various statements known for schemes to algebraic stacks.”

**Sources:**

- [Timothy De Deyn, Pat Lank, Kabeer Manali Rahul, Fei Peng, Regularity and bounded t-structures for algebraic stacks, arXiv:2504.02813v1 (2025)](https://arxiv.org/abs/2504.02813v1)

### S-equivalence says exactly which semistable bundles the moduli space identifies

**Remember:** Bundles with the same stable pieces land on the same point.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14H60. arXiv math.AG. Level 4: research.

**Definition.** A semistable vector bundle on a curve has a Jordan–Hölder filtration whose quotients are stable bundles of the same slope. Two semistable bundles are S-equivalent when the direct sums of these quotients are isomorphic. Zhang extends the notion to points of any algebraic stack.

**Problem.** The moduli space of semistable bundles has fewer points than there are isomorphism classes of bundles. Which bundles go to the same point?

**How the definition helps.** S-equivalence groups bundles by the same rule that the moduli space uses, so the points of the moduli space become a clean statement. A non-split extension of two stable bundles of the same slope degenerates to their direct sum (our own). So a separated moduli space must give both one point (our own). With S-equivalence, the points of the moduli space are exactly the S-equivalence classes. Zhang defines S-equivalence for points of any algebraic stack, and proves the matching for locally reductive stacks of finite type with an adequate moduli space. He recovers the classical rule for bundles as a corollary and relates the notion to separatedness of the moduli space. The work moves into showing that the stacky definition matches the identification made by the moduli space.

**Paper or page:** [S-equivalence for algebraic stacks](https://arxiv.org/abs/2411.04053v1). It says: “Two semistable vector bundles are identified in the adequate moduli space if and only if they are S-equivalent.”

**Sources:**

- [Xucheng Zhang, S-equivalence for algebraic stacks, arXiv:2411.04053v1 (2024)](https://arxiv.org/abs/2411.04053v1)
- [C. S. Seshadri, Space of unitary vector bundles on a compact Riemann surface, Annals of Mathematics 85 (1967)](https://doi.org/10.2307/1970444)

### Nilpotent singular support makes the geometric Langlands equivalence true

**Remember:** Add exactly the sheaves with nilpotent singular support, and the two sides match.

*Makes the theorem clean to state or prove.* MSC 14D24 (Geometric Langlands program (algebro-geometric aspects)), 14F10, 14D23. arXiv math.AG, math.RT. Level 4: research.

**Definition.** Arinkin and Gaitsgory change one side of the conjecture. They replace quasi-coherent sheaves on the stack Loc of ᴸG-local systems by ind-coherent sheaves whose singular support lies in the global nilpotent cone. Here ᴸG is the Langlands dual group, and the singular support of an ind-coherent sheaf measures how far it is from being quasi-coherent. The new category is slightly larger, and it is defined inside stable ∞-categories.

**Problem.** The geometric Langlands conjecture, now a theorem, asks for an equivalence between two categories. One is sheaves on the moduli stack of ᴸG-local systems on a curve Σ. The other is D-modules (sheaves with an action of differential operators) on the moduli stack BunG(Σ) of G-bundles.

**How the definition helps.** The definition does not make the theorem easy; it makes the statement true. The original form, with plain quasi-coherent sheaves, is false. V. Lafforgue's computations (2009) show that it fails for G = SL₂ and Σ = ℙ¹. The refined category with nilpotent singular support is designed to remove this failure. With it, the conjecture can again be stated as an equivalence. Gaitsgory, Raskin and coauthors gave a proof in 2024–2025 in a series of long papers, and the real work is there.

**nLab:** [geometric Langlands correspondence](https://ncatlab.org/nlab/show/geometric+Langlands+correspondence). It says: “A refined formulation of the conjecture due to Arinkin &amp; Gaitsgory 12, meant to fix this failure, replaces plain quasicoherent sheaves with certain "nilpotent" ind-objects of quasicoherent sheaves”

**Sources:**

- [D. Arinkin, D. Gaitsgory, Singular support of coherent sheaves, and the geometric Langlands conjecture, arXiv:1201.6343 (2012)](https://arxiv.org/abs/1201.6343)
- [D. Gaitsgory, S. Raskin, Proof of the geometric Langlands conjecture I: construction of the functor, arXiv:2405.03599 (2024)](https://arxiv.org/abs/2405.03599)

### Multi-weighted blow-ups improve singularities at every step of resolution

**Remember:** Weight the coordinates to fit the singularity, and every step improves it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14E15 (Global theory and resolution of singularities (algebro-geometric aspects)), 14M25. arXiv math.AG. Level 4: research.

**Definition.** A weighted blow-up gives the coordinates different weights. It replaces the centre by a weighted projective space, so the result is a smooth Artin stack rather than a variety. A multi-weighted blow-up uses several weight vectors at once, in the style of toric geometry.

**Problem.** Resolution of singularities in characteristic zero: make a singular subvariety of a smooth variety smooth by a sequence of blow-ups. In the logarithmic version, the singular locus must also become a simple normal crossings divisor.

**How the definition helps.** Weights let the blow-up match the shape of the singularity, so one step already makes it better. With classical blow-ups, blowing up the worst locus need not improve the singularity (our own). So classical algorithms keep a record of earlier steps (our own). Abramovich, Temkin and Włodarczyk used weighted blow-ups to get an algorithm without such records for embedded resolution. Abramovich and Quek extend this to logarithmic resolution with multi-weighted blow-ups. At the end the singular locus becomes a simple normal crossings divisor. The price is that the ambient spaces are smooth Artin stacks, not varieties.

**Paper or page:** [Logarithmic resolution via multi-weighted blow-ups](https://arxiv.org/abs/2112.06361v3). It says: “at each step we always blow up the worst singular locus of Xᵢ, and witness on Xᵢ₊₁ an immediate improvement in singularities”

**Sources:**

- [Dan Abramovich, Ming Hao Quek, Logarithmic resolution via multi-weighted blow-ups, arXiv:2112.06361v3 (2024), Épijournal de Géométrie Algébrique, Volume 8](https://arxiv.org/abs/2112.06361v3)
- [D. Abramovich, M. Temkin, J. Włodarczyk, Functorial embedded resolution via weighted blowings up, Algebra &amp; Number Theory 18 (2024)](https://doi.org/10.2140/ant.2024.18.1557)

### Generalized pairs make adjunction hold for log canonical centers of any codimension

**Remember:** What the boundary cannot absorb, the nef moduli part carries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14E30 (Minimal model program (Mori theory, extremal rays)), 14B05. arXiv math.AG. Level 4: research.

**Definition.** A pair is a normal variety X with an effective divisor Δ such that the canonical divisor plus Δ is ℝ-Cartier. A log canonical center is the image of a divisor whose discrepancy is −1, the worst value that log canonical singularities allow. A generalized pair adds to the boundary a second part M, the moduli part, which comes from a nef divisor on some birational model.

**Problem.** Adjunction restricts the canonical divisor plus Δ to a subvariety W. It asks whether the pair is log canonical near W exactly when the restricted pair is log canonical. This is classical when W is a divisor.

**How the definition helps.** The extra nef part absorbs what the restriction leaves over, so an adjunction formula always exists. Let Z be the normalization of W. Fujino and Hashizume write the pullback of the canonical divisor plus Δ to Z as a sum. It is the canonical divisor of Z plus a boundary B plus a moduli part M. They prove that the pair is log canonical near W exactly when the generalized pair on Z is generalized log canonical. In codimension two, the moduli part is semi-ample, so an ordinary boundary exists. Semi-ampleness in higher codimension is not claimed.

**Paper or page:** [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2), [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2). It says: “We establish adjunction and inversion of adjunction for log canonical centers of arbitrary codimension in full generality.”

**Sources:**

- [Osamu Fujino, Kenta Hashizume, Adjunction and inversion of adjunction, arXiv:2105.14531v2 (2022)](https://arxiv.org/abs/2105.14531v2)

### Codim-2-saturated surfaces can be rebuilt from their reflexive sheaves

**Remember:** Reflexive sheaves ignore single points, so fill in every missing point first.

*Rules out counterexamples.* MSC 14F06 (Sheaves in algebraic geometry), 14J17. arXiv math.AG. Level 4: research.

**Definition.** A reflexive sheaf is a coherent sheaf that equals its double dual. Take an open embedding of a normal surface X into a normal surface whose complement is a finite set of points. X is codim-2-saturated when every such embedding is an isomorphism.

**Problem.** Can a normal surface be recovered from its category of reflexive sheaves?

**How the definition helps.** Reflexive sheaves cannot see finitely many points, so the definition excludes exactly the surfaces that differ by such points. In our own example, the affine plane and the affine plane without the origin have equivalent categories of reflexive sheaves. The reason is that restriction to an open set with finite complement is an equivalence of categories of reflexive sheaves, as a data-set proposition states. So no reconstruction theorem can hold for all normal surfaces. The paper shows that every normal surface has a canonical codim-2-saturated model, and it rebuilds that model from the category. Surfaces that are proper over their affinisation are codim-2-saturated, but the converse fails. The hard part is categorical: the paper shows that the category is quasi-abelian and introduces weakly localising Serre subcategories.

**Paper or page:** [Reconstruction of a surface from the category of reflexive sheaves](https://arxiv.org/abs/2302.04635v3). It says: “We reconstruct the codim-2-saturated model of a normal surface X from the additive category of reflexive sheaves on X.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Reconstruction of a surface from the category of reflexive sheaves, arXiv:2302.04635v3 (2023)](https://arxiv.org/abs/2302.04635v3)

### Reflexive pullbacks push back unchanged

**Remember:** Take the double dual before pushing back.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 32C35. arXiv math.AG. Level 4: research.

**Definition.** A coherent sheaf describes locally presented modules of sections. Its dual consists of local linear maps into functions. A sheaf is reflexive when the natural map to its double dual is an isomorphism. The reflexive pullback takes the double dual after ordinary pullback.

**Problem.** For a proper birational morphism between normal varieties, pushing forward the reflexive pullback of a coherent reflexive sheaf recovers that sheaf. Birational means the map identifies dense open subsets. Normal means the local rings are integrally closed domains.

**How the definition helps.** Taking the double dual removes sections supported entirely over the exceptional set, where the map fails to be an isomorphism. In our own proof, pullback gives a map from original sections to sections upstairs. Conversely, every section upstairs restricts to a section downstairs away from a subset of codimension at least two. Reflexive sections on a normal variety extend uniquely across such subsets. That extension theorem gives the inverse, since a section of the double dual is determined on a dense open set.

**Paper or page:** [Rational singularities and q-birational morphism](https://arxiv.org/abs/2301.04262v5). It says: “Suppose that $\\mathcal {F}$ is any reflexive sheaf on $X$. Then $\\mathcal {F}\\cong f\_\*(f<sup>\*\\mathcal</sup> {F})<sup>DD</sup>$.”

**Sources:**

- [Donghyeon Kim, Rational singularities and q-birational morphism, Lemma 3.6 (2024 preprint)](https://arxiv.org/abs/2301.04262v5)

### Sheaves on the generic fiber are sheaves on the family modulo torsion

**Remember:** Kill what vanishes at the generic point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18E35, 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Let X be a family over Spec R, where R is a regular ring with fraction field K. The generic fiber is the fiber over K. The Serre quotient of an abelian category by a Serre subcategory makes the objects of that subcategory zero. Here one divides the coherent sheaves on X by the R-torsion sheaves, which vanish on the generic fiber.

**Problem.** Take a smooth separated family over a regular affine base. The paper proves that coherent sheaves on the generic fiber are those on X modulo R-torsion sheaves. As an application, it proves that derived equivalence of generic fibers spreads to an open set of the base.

**How the definition helps.** The quotient describes sheaves on the generic fiber using only sheaves on the whole family. So a statement about the generic fiber can be moved to the family and then to an open set of the base. The paper uses this to prove that derived-equivalent generic fibers give derived-equivalent closed fibers over an open set (Corollary 6.9). Our own explanation is that torsion sheaves are supported over a proper closed subset of the base, so they miss the generic point.

**Paper or page:** [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4), [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4). It says: “For flat proper families of algebraic varieties with a smooth fiber, we describe the abelian category of coherent sheaves on the generic fiber as a Serre quotient.”

**Sources:**

- [Hayato Morimura, Categorical generic fiber, arXiv:2111.00239 (2024)](https://arxiv.org/abs/2111.00239v4)

### The functor of points defines quasicoherent sheaves on stacks

**Remember:** A quasicoherent sheaf is a module for each affine scheme mapping in, glued by tensor products.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 14A20, 14A30. arXiv math.AG. Level 4: research.

**Definition.** Let X be a presheaf or a stack on affine schemes. QC(X) is the limit of the categories Mod(R) over all maps Spec R → X. So a quasicoherent sheaf gives an R-module for each such map. These modules come with compatible isomorphisms under base change (tensor product along ring maps).

**Problem.** Define quasicoherent sheaves on objects that are not ringed spaces, such as stacks, ind-schemes and derived stacks. The definition should agree with the classical one on schemes.

**How the definition helps.** The functor-of-points definition needs only maps from affine schemes, so it applies to any presheaf or stack. The classical definition needs a ringed space. Every ingredient (sheaf, stack, limit of categories) has a higher-categorical version. So the same definition gives derived quasicoherent sheaves. The real content is in descent theorems. They show that this limit agrees with the classical category on schemes, and that it behaves well for flat covers of stacks, as Hollander proves.

**nLab:** [quasicoherent sheaf](https://ncatlab.org/nlab/show/quasicoherent+sheaf). It says: “all notions involved, sheaf, stack, morphism of stacks, have natural, immediate and well understood generalizations to higher category theory.”

**Sources:**

- [Sharon Hollander, Descent for quasi-coherent sheaves on stacks, Algebraic and Geometric Topology 7 (2007) 411–438, arXiv:0708.2475](https://arxiv.org/abs/0708.2475)

### Absorbing singularities leaves a smooth category that survives smoothing

**Remember:** Split off the small singular piece, and the rest deforms like a smooth variety.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14B07. arXiv math.AG. Level 4: research.

**Definition.** An admissible subcategory of a triangulated category is a full subcategory whose inclusion functor has both adjoints. A categorical absorption of singularities of a variety X splits its derived category into two pieces. A small admissible piece carries the singularity, and the rest is smooth and proper as a category.

**Problem.** A projective variety with ordinary double points can be the special fibre of a family whose other fibres are smooth. Which part of its derived category deforms to the smooth fibres?

**How the definition helps.** Once the singular part is split off, the rest is smooth and proper, and such categories behave well in families (our own). Kuznetsov and Shinder construct absorptions for projective varieties with isolated ordinary double points, under suitable assumptions. For any smoothing over a smooth curve, the smooth part extends to a smooth and proper family of subcategories of the fibres. So a part of the derived category of the smooth fibres can be studied on the singular fibre (our own). The construction of absorptions for other singularities is not covered.

**Paper or page:** [Categorical absorptions of singularities and degenerations](https://arxiv.org/abs/2207.06477v5). It says: “We introduce the notion of categorical absorption of singularities: an operation that removes from the derived category of a singular variety a small admissible subcategory responsible for singularity and leaves a smooth and proper category.”

**Sources:**

- [Alexander Kuznetsov, Evgeny Shinder, Categorical absorptions of singularities and degenerations, arXiv:2207.06477v5 (2024), Épijournal de Géométrie Algébrique, special volume in honour of Claire Voisin](https://arxiv.org/abs/2207.06477v5)

### The support property makes Bridgeland stability conditions deform continuously

**Remember:** Keep semistable objects a fixed distance from zero charge.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG. Level 4: research.

**Definition.** A Bridgeland stability condition has a central charge Z, a homomorphism from a lattice of classes to ℂ. It also has a family of semistable objects. The support property asks for a constant C &gt; 0 with this rule. On each semistable object, the absolute value of Z is at least C times a norm of its class.

**Problem.** Bridgeland's deformation theorem, in the form with the support property, says the following. Every small change of the central charge lifts to a nearby stability condition. So the space of such stability conditions is a complex manifold.

**How the definition helps.** The support property keeps the charges of semistable objects away from 0, so a small change of Z cannot make a semistable object's charge vanish. Without such a bound, charges of semistable classes can approach 0, and a small deformation could break the stability condition (our own). Bridgeland's own version, for locally finite conditions, lifts only changes inside a linear subspace (our own). So the support property is the standard condition under which the full deformation theorem holds. Kawatani uses a weaker deformation property from Bridgeland's paper to build a continuous family of glued stability conditions. He then shows that each member of the family satisfies the support property, by specialization. Checking the support property for a given condition is still the hard part.

**Paper or page:** [On a deformation of gluing stability conditions](https://arxiv.org/abs/2107.13367v2). It says: “Here the deformation property is weaker than the support property which is the standard solution for the continuousness.”

**Sources:**

- [Kotaro Kawatani, On a deformation of gluing stability conditions, arXiv:2107.13367v2 (2021)](https://arxiv.org/abs/2107.13367v2)
- [T. Bridgeland, Stability conditions on triangulated categories, Annals of Mathematics 166 (2007)](https://doi.org/10.4007/annals.2007.166.317)

### With crystalline differential operators, D-modules are flat connections in characteristic p

**Remember:** Crystalline operators are just vector fields and functions, with bracket and Leibniz rules.

*True by definition.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 13N10, 14F30. arXiv math.AG. Level 4: research.

**Definition.** Let X be a smooth scheme over a field k, with sheaf of functions O. The sheaf of crystalline differential operators is generated over O by the vector fields. Its only relations are v₁v₂ − v₂v₁ = \[v₁, v₂\] and v·f − f·v = v(f), for vector fields v, v₁, v₂ and functions f. It is the enveloping algebra of the tangent Lie algebroid.

**Problem.** A D-module is a module over a ring D of differential operators. In positive characteristic, one wants D-modules to be the same thing as O-modules with an integrable (flat) connection. This fails for Grothendieck's full ring of differential operators.

**How the definition helps.** The crystalline ring has only the generators and relations that a flat connection uses, so its modules are flat connections by definition. Grothendieck's ring of differential operators in characteristic p contains divided powers such as (1/p!)(d/dt)ᵖ. So its modules carry more than a connection, and an O-coherent module is never D-coherent. A module over the crystalline ring, in contrast, is by definition an O-module with a flat connection. The price is that the ring has a large center and new phenomena such as p-curvature (the failure of the operator of the p-th power of a vector field to equal the p-th power of its operator). Bezrukavnikov, Mirković and Rumynin show that the ring is an Azumaya algebra over its center, that is, locally in the étale topology a matrix algebra over the center.

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

### A tameness condition removes the properness hypothesis for unramified cohomology

**Remember:** On an open variety, forbid wild ramification at infinity.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42, 14C25. arXiv math.AG. Level 4: research.

**Definition.** Suslin homology in degree zero is the group of zero-cycles modulo relations from finite correspondences with the affine line. Unramified cohomology consists of classes on the function field that extend over every codimension-one point. The curve-tame subgroup also requires classes to be tamely ramified at the missing points at infinity of curves on X.

**Problem.** Let X be smooth and geometrically connected over a field k of characteristic p. Suppose degree identifies zeroth Suslin homology with ℤ over every finitely generated extension of k. Then for each i, the curve-tame unramified classes of degree i + 1 with coefficients ℤ/p(i) all come from k.

**How the definition helps.** The tame subgroup excludes classes that are wildly ramified at infinity, so the theorem needs no properness. Our own example is the affine line over k, which satisfies the Suslin hypothesis. The Artin–Schreier class of the cover yᵖ − y = t is unramified on the whole line. It is wildly ramified at infinity and does not come from k. So the theorem fails without tameness. The proof rests on a pairing between Suslin homology and this cohomology, Theorem 5.2 of the paper.

**Paper or page:** [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3), [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3). It says: “We also see that the properness assumption on the variety X can be dropped off by using the Suslin homology together with a certain tame subgroup of the unramified cohomology group.”

**Sources:**

- [Shusuke Otabe, On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles, arXiv:2010.03808 (2022)](https://arxiv.org/abs/2010.03808v3)

### Holonomic étale sheaves, defined without constructibility, turn out to be constructible

**Remember:** Small singular support forces a sheaf to have finitely many strata.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 4: research.

**Definition.** Take a closed conical subset C of the cotangent bundle of a smooth scheme X. A sheaf is micro-supported on C when test maps transversal to C are locally acyclic for it. Beilinson proved that each constructible sheaf has a smallest such C, its singular support, and that it has the dimension of X. Abbes and Saito call any sheaf holonomic when it is micro-supported on some C of dimension at most dim X (our reading).

**Problem.** Beilinson proved that constructible étale sheaves have small singular support, that is, they are holonomic. Is every holonomic sheaf constructible?

**How the definition helps.** The definition does not assume constructibility, so the converse of Beilinson's theorem can be asked at all. Abbes and Saito prove the converse over a perfect field: holonomic étale sheaves are constructible. So a finiteness property follows from a dimension bound in the cotangent bundle. The paper presents this as an étale analogue of Kashiwara's theorem on holonomic D-modules. It also shows that pushforward and pullback keep holonomicity over a perfect field. The work moves into the converse theorem, which needs the perfect base field.

**Paper or page:** [Holonomic étale sheaves are constructible](https://arxiv.org/abs/2410.04677v1). It says: “we introduce the notion of holonomicity for étale sheaves, without assuming a priori constructibility. Over a perfect base field, we establish the converse of Beilinson's result, showing that holonomic sheaves are indeed constructible.”

**Sources:**

- [Ahmed Abbes, Takeshi Saito, Holonomic étale sheaves are constructible, arXiv:2410.04677v1 (2024)](https://arxiv.org/abs/2410.04677v1)
- [A. Beilinson, Constructible sheaves are holonomic, Selecta Mathematica (2016)](https://doi.org/10.1007/s00029-016-0260-z)

### Lisse sheaves as dualizable objects give one theory for all coefficient rings

**Remember:** Lisse means dualizable; constructible means lisse on each stratum.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 4: research.

**Definition.** An object of a monoidal category is dualizable when it has a dual with evaluation and coevaluation maps that satisfy the triangle identities. Hemo, Richarz and Scholbach call a proétale sheaf lisse when it is dualizable. A sheaf is constructible when it is lisse on each piece of some stratification.

**Problem.** Constructible ℓ-adic sheaves had several technical definitions, one for each kind of coefficient ring. Is there one definition that works for all coefficients, even topological or condensed rings?

**How the definition helps.** Dualizability makes sense for any coefficient ring, so one definition covers all cases. For a discrete ring, the lisse objects are exactly the complexes that are pro-étale locally constant with perfect values. The paper shows that its notions reproduce and extend the older approaches to constructible ℓ-adic sheaves. Sheaves that are constructible in this sense satisfy proétale descent. What stays delicate is the t-structure. For a ring Λ, the natural t-structure restricts to perfect complexes exactly when Λ is regular coherent.

**Paper or page:** [Constructible sheaves on schemes](https://arxiv.org/abs/2305.18131v1). It says: “This is accomplished by defining lisse sheaves to be the dualizable objects in the derived infinity-category of proétale sheaves, while constructible sheaves are those that are lisse on a stratification.”

**Sources:**

- [Tamir Hemo, Timo Richarz, Jakob Scholbach, Constructible sheaves on schemes, arXiv:2305.18131v1 (2023)](https://arxiv.org/abs/2305.18131v1)

### Strict local rings are what the étale topos of Spec ℤ classifies

**Remember:** Rewrite 'some root is simple' as 'an ideal contains 1', so the definition becomes geometric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 03G30. arXiv math.AG, math.LO. Level 4: research.

**Definition.** A ring R is separably closed if every monic, unramifiable polynomial p of positive degree has a simple root (a root r with p′(r) invertible). The definition states 'unramifiable' without field extensions. It says that 1 lies in the ideal generated by the non-constant coefficients of the hyperdiscriminant polynomial ∏(1 + p′(sᵢ)x), where the sᵢ are formal roots of p. A strict local ring is a separably closed local ring.

**Problem.** Which theory does the étale topos of Spec ℤ classify? A topos classifies a theory when its points are the models of that theory.

**How the definition helps.** The new definition is geometric, and only a geometric theory can have a classifying topos. A geometric theory uses only finite conjunctions, arbitrary disjunctions and existential quantifiers. The usual definition of a strict Henselian ring speaks about field extensions, so it is not geometric. The nLab reformulates it. In a local ring, 'some tᵢ is invertible' is the same as '1 is in the ideal of the non-constant coefficients of ∏(1 + tᵢx)', and this gives a geometric notion of unramifiable polynomial. With this definition, the étale topos classifies strict local rings, and its points are the strict Henselian rings (Hakim, Wraith). The classification theorem itself is still the main work.

**nLab:** [strict local ring](https://ncatlab.org/nlab/show/strict+local+ring), [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “We need to knead the definition of strict Henselian ring into being geometric.”

**Sources:**

- [Monique Hakim, Topos annelés et schémas relatifs, Ergebnisse der Mathematik 64, Springer (1972)](https://doi.org/10.1007/978-3-662-59155-0)
- [Gavin Wraith, Generic Galois theory of local rings, in: Applications of Sheaves, Lecture Notes in Mathematics 753, Springer (1979)](https://doi.org/10.1007/bfb0061844)

### The pro-étale site makes ℓ-adic coefficients genuine sheaves

**Remember:** Allow pro-finite étale covers, and ℤℓ becomes an honest sheaf.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14B25. arXiv math.AG. Level 4: research.

**Definition.** The pro-étale site of a scheme X has the weakly étale X-schemes as objects. A map is weakly étale when it is flat and its diagonal is also flat. The coverings are fpqc covers (faithfully flat, quasi-compact covers). Pro-étale cohomology is sheaf cohomology on this site.

**Problem.** Define ℓ-adic cohomology Hⁱ(X, ℚℓ) as the sheaf cohomology of an actual sheaf. The usual definition is instead an inverse limit of cohomology with ℤ/ℓⁿ coefficients.

**How the definition helps.** On the pro-étale site, ℚℓ is an actual sheaf, so the definition of ℓ-adic cohomology needs no limit. On the étale site, ℚℓ is not a sheaf whose cohomology gives ℓ-adic cohomology. There one must take a limit of torsion coefficients and then invert ℓ. On the pro-étale site, the ordinary sheaf cohomology of ℚℓ is ℓ-adic cohomology, and one can work with ℓ-adic sheaves in the normal way. The work is in the theory of w-contractible rings (rings over which every faithfully flat weakly étale cover has a section). This theory shows that the site has enough objects on which limits are exact.

**nLab:** [pro-étale site](https://ncatlab.org/nlab/show/pro-%C3%A9tale+site), [ℓ-adic cohomology](https://ncatlab.org/nlab/show/%E2%84%93-adic+cohomology). It says: “This is rectified by passing to pro-étale cohomology.”

**Sources:**

- [Bhargav Bhatt, Peter Scholze, The pro-étale topology for schemes, Astérisque 369 (2015) 99–201, arXiv:1309.1198](https://arxiv.org/abs/1309.1198)

### Weil–étale Euler characteristics give special values of arithmetic L-functions at zero

**Remember:** Put the regulator and the group orders into one Euler characteristic.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14G10. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A ℤ-constructible sheaf on a scheme U is an étale sheaf that is locally constant on each piece of a finite partition of U. Its stalks are finitely generated abelian groups. The Weil–étale complex is a modified étale cohomology complex built for special value formulas. Its Euler characteristic combines orders of finite cohomology groups with a regulator, the determinant of a natural pairing.

**Problem.** Let U be a regular irreducible scheme of finite type over ℤ, of dimension one. By Theorem C, for a ℤ-constructible sheaf F on U, the leading coefficient of L(F, s) at zero is ± its Weil–étale Euler characteristic. The sign is −1 to the rank of the generic stalk, and a second Euler characteristic gives the order of vanishing.

**How the definition helps.** The Euler characteristic is defined to combine group orders and regulators, so the special value formula becomes one equation. In our own words, classical formulas list these factors separately. For an affine arithmetic curve X, Corollary 7.5 gives ζ\*(0) = −hR/ω, a class-number-type formula. Here h is the order of the Chow group of zero-cycles, R a regulator and ω the number of roots of unity. In our own reading, packaging the factors in one complex lets them behave well in exact sequences. The work is to construct the complex and to prove that its Euler characteristic matches the leading coefficient.

**Paper or page:** [Special values of L-functions on regular arithmetic schemes of dimension 1](https://arxiv.org/abs/2108.00811v1). It says: “We then give a formula for the special value at s=0 of the L-function associated to any ℤ-constructible sheaf on U in terms of Euler characteristics of Weil-étale cohomology”

**Sources:**

- [Adrien Morin, Special values of L-functions on regular arithmetic schemes of dimension 1, arXiv:2108.00811v1 (2021)](https://arxiv.org/abs/2108.00811v1)

### Defining periods by integrals over semi-algebraic sets makes them a ring

**Remember:** Multiply periods by taking the product of their domains.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 11J81. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A period, in the sense of Kontsevich and Zagier, is a complex number of a special kind. Its real and imaginary parts are absolutely convergent integrals of rational functions with rational coefficients. The domains of integration are subsets of ℝⁿ cut out by polynomial inequalities with rational coefficients. The paper shows that, equivalently, they are differences of volumes of such sets.

**Problem.** The periods form a subring of the complex numbers that contains the rational numbers.

**How the definition helps.** The allowed domains are closed under products and disjoint unions, so the ring property is nearly built into the definition. A product of two integrals is one integral over the product of the domains, by Fubini's theorem (our own). A sum is one integral over the two domains placed apart in a larger space (our own). Every rational number is the volume of a box, so it is a period (our own). What stays hard is the other direction: no natural constant, such as e, is yet proved not to be a period. The Kontsevich–Zagier conjecture, that all relations between periods come from the rules of calculus, is open.

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

### Derived F-zips exist for every smooth proper map in characteristic p

**Remember:** Keep the complexes when the Hodge–de Rham spectral sequence does not degenerate.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30, 14C30. arXiv math.AG. Level 4: research.

**Definition.** An F-zip is a vector bundle with two filtrations whose graded pieces match after a Frobenius twist. Frobenius raises functions to the p-th power in characteristic p. A derived F-zip uses filtered complexes in place of filtered bundles. The Hodge–de Rham spectral sequence computes de Rham cohomology from the cohomology of the sheaves of differential forms.

**Problem.** Every smooth proper morphism in characteristic p gives a derived F-zip. The paper proves that this derived F-zip is strong exactly when the Hodge–de Rham spectral sequence degenerates and the Hodge sheaves are locally free.

**How the definition helps.** The derived definition needs no degeneration, so the construction works for every smooth proper map. The classical F-zip of de Rham cohomology needs the Hodge–de Rham spectral sequence to degenerate. Some Enriques surfaces in characteristic 2 have a non-degenerate spectral sequence, so the classical theory does not apply to them. In our own words, filtered complexes keep the information that passing to cohomology loses. The cited theorem says exactly when the derived object reduces to a classical one.

**Paper or page:** [Derived F-zips](https://arxiv.org/abs/2208.01517v5), [Derived F-zips](https://arxiv.org/abs/2208.01517v5). It says: “As there are Enriques-surfaces in characteristic 2 with non-degenerate Hodge-de Rham spectral sequence, this gives a new approach, which could previously not be obtained by the classical theory of F-zips.”

**Sources:**

- [Can Yaylali, Derived F-zips, arXiv:2208.01517 (2024), Épijournal de Géométrie Algébrique, Volume 8 (April 11, 2024) epiga:10375](https://arxiv.org/abs/2208.01517v5)

### Building motives by inverting affine-line projections makes M(X × 𝔸¹) ≅ M(X)

**Remember:** Once projections along affine lines are invertible, adding an affine line changes nothing.

*True by definition. Confidence: medium.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C15. arXiv math.AG. Level 4: research.

**Definition.** A sheaf with transfers pulls sections back along finite correspondences, which are multivalued maps, as well as ordinary maps. Take complexes of such sheaves for the Nisnevich topology, which lies between the Zariski and étale topologies. Effective motives come from forcing each projection X × 𝔸¹ → X to become an isomorphism. Voevodsky's other model uses complexes whose cohomology sheaves do not change when one crosses with 𝔸¹.

**Problem.** For a smooth variety X, the projection X × 𝔸¹ → X induces an isomorphism of effective motives.

**How the definition helps.** In the localization definition, this projection is one of the maps made invertible, so the claim holds by definition. In the other model, one must show that the motives of X × 𝔸¹ and X agree after passing to 𝔸¹-invariant complexes (our own). The work moves into the theorem that the two models are equivalent. That theorem uses Voevodsky's results on homotopy-invariant sheaves with transfers (our own).

**Paper or page:** [Integral cohomology of dual boundary complexes is motivic](https://arxiv.org/abs/2408.17301v1). It says: “M(X × 𝔸¹) ≅ M(X)”

**Sources:**

- [Tao Su, Integral cohomology of dual boundary complexes is motivic, Theorem 1.1](https://arxiv.org/abs/2408.17301v1)

### The quadric ∑xᵢyᵢ = z(1−z) gives motivic spheres in every characteristic

**Remember:** Use one integral quadric instead of a model for each characteristic.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14M17. arXiv math.AG, math.AT. Level 4: research.

**Definition.** The quadric Q₂ₙ is the scheme over ℤ given by x₁y₁ + … + xₙyₙ = z(1−z). It has the 𝔸¹-homotopy type of a motivic sphere, a sphere in the homotopy theory of algebraic varieties. The paper shows it is a homogeneous space for the group SO₂ₙ₊₁ over ℤ.

**Problem.** Affine representability says that 𝔸¹-homotopy classes of maps from smooth affine schemes into a space are naive homotopy classes. Can one prove this for motivic spheres in every characteristic, including 2?

**How the definition helps.** One equation over ℤ gives a single model of the sphere that works in every characteristic. The paper shows that Q₂ₙ is a homogeneous space for SO₂ₙ₊₁ over ℤ. That gives affine representability for Q₂ₙ over any field (Theorem 2). Our own explanation is that the usual sphere, a sum of squares equal to 1, is not smooth in characteristic 2. Q₂ₙ is smooth over ℤ.

**Paper or page:** [Affine representability of quadrics revisited](https://arxiv.org/abs/2104.08208v2). It says: “the identification as a homogeneous space allows us to give a characteristic independent affine representability statement for motivic spheres.”

**Sources:**

- [Aravind Asok, Affine representability of quadrics revisited, arXiv:2104.08208 (2022)](https://arxiv.org/abs/2104.08208v2)

### The reciprocity obstruction exactly describes strong approximation on classifying varieties of tori

**Remember:** Test the reciprocity pairing before asking for a rational approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 14G20. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let K be the function field of a curve over a p-adic field. An adelic point of a variety Z is a family of points over all completions of K, integral at almost all places. Strong approximation away from a set S of places asks that rational points be dense in the adelic points without their S components. The reciprocity obstruction pairs adelic points with unramified degree-three cohomology classes of Z with coefficients ℚ/ℤ(2).

**Problem.** Let Z = E/T, where T is a torus and E is a split, semisimple, simply connected group of the paper’s special kind. Fix a nonempty finite set S of places. Theorem 1.3 says the closure of Z(K) in the adelic points away from S is exactly the set of points that pass the reciprocity test.

**How the definition helps.** Defining the obstruction turns the claim that nothing else obstructs into a precise exact sequence of pointed sets. The paper first builds varieties on which strong approximation fails, so some obstruction is needed. The reciprocity obstruction accounts for that failure. The hard direction shows that it is the only obstruction for those varieties and for classifying varieties of tori.

**Paper or page:** [Reciprocity obstruction to strong approximation over p-adic function fields](https://arxiv.org/abs/2307.08515v1). It says: “In other words, the reciprocity obstruction to strong approximation away from S is the only one for Z.”

**Sources:**

- [Haowen Zhang, Reciprocity obstruction to strong approximation over p-adic function fields, arXiv:2307.08515v1 (2023)](https://arxiv.org/abs/2307.08515v1)

### Zariski-constructible sheaves give rigid spaces six functors and perverse sheaves

**Remember:** Stratify by analytic equations, and rigid spaces behave like schemes again.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG. Level 4: research.

**Definition.** A rigid space is an analytic space over a non-archimedean field, such as the p-adic numbers. A Zariski-closed subset is one cut out by analytic equations. An étale sheaf is Zariski-constructible when it is locally constant on each piece of a locally finite stratification by such sets.

**Problem.** On schemes, constructible sheaves are kept by Grothendieck's six operations, and perverse sheaves exist. Which class of sheaves on rigid spaces has the same properties?

**How the definition helps.** Strata cut out by analytic equations behave like strata of schemes, so arguments from algebraic geometry carry over. Bhatt and Hansen first prove generic smoothness for rigid spaces in characteristic zero. For this they introduce generic points of rigid spaces that suit spreading-out arguments, as in scheme theory. With it, the six operations keep Zariski-constructible sheaves with coefficients ℤ/n, under conditions on the maps, such as properness for pushforward. Consequences include dualizing complexes, a perverse t-structure and intersection cohomology. The characteristic zero assumption is essential, since generic smoothness fails in characteristic p (our own).

**Paper or page:** [The six functors for Zariski-constructible sheaves in rigid geometry](https://arxiv.org/abs/2101.09759v2). It says: “As an application, we develop a six functor formalism for Zariski-constructible étale sheaves on characteristic zero rigid spaces. Among other things, this implies that characteristic zero rigid spaces support a well-behaved theory of perverse sheaves.”

**Sources:**

- [Bhargav Bhatt, David Hansen, The six functors for Zariski-constructible sheaves in rigid geometry, arXiv:2101.09759v2 (2021)](https://arxiv.org/abs/2101.09759v2)

### Almost modules make the integral structure sheaf acyclic on perfectoid spaces

**Remember:** Ignore anything that the small ideal kills.

*True by definition. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 18E35, 13C60. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Fix a ring R and a flat ideal I with I² = I. For a perfectoid ring, one takes I generated by all p-power roots of a pseudo-uniformizer ϖ (a topologically nilpotent unit); the nLab page says only that a pseudo-uniformizer generates I. A module M is almost zero if I·M = 0. Almost modules are R-modules modulo almost-zero modules, so a map is an almost isomorphism if I kills its kernel and its cokernel.

**Problem.** On an affinoid perfectoid space, the higher cohomology of the sheaf 𝒪ₓ⁺/π should vanish. Here 𝒪ₓ⁺ is the sheaf of integral functions, those of absolute value at most 1. Then 𝒪⁺/π-coefficients can be used to build cohomology theories, for example Mann's p-adic six-functor formalism and mod-p Poincaré duality.

**How the definition helps.** In almost modules, an almost-zero module counts as zero, so almost vanishing becomes vanishing. Scholze proved that on an affinoid perfectoid space the higher cohomology of 𝒪⁺, and of 𝒪⁺/π, is almost zero, but not zero in general. This step is from Scholze's paper, not from the nLab pages. So in almost modules the sheaf is acyclic (it has no higher cohomology). Mann uses this with solid modules to build a p-adic six-functor formalism. The definition only moves the work: the real content is Scholze's almost-vanishing theorem.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module), [almost module](https://ncatlab.org/nlab/show/almost+module). It says: “The theory of almost modules is necessary in order to make the structure sheaf 𝒪ₓ⁺/π acyclic on affinoid perfectoid spaces”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publ. Math. IHÉS 116 (2012), arXiv:1111.4914](https://arxiv.org/abs/1111.4914)
- [Lucas Mann, A p-adic 6-functor formalism in rigid-analytic geometry, arXiv:2206.02022](https://arxiv.org/abs/2206.02022)

### Perfectoid fields share their Galois group with their tilt

**Remember:** Tilting moves to characteristic p but keeps the Galois group.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 12J25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid field is a complete non-archimedean field with residue characteristic p and a non-discrete rank one valuation, on which Frobenius is onto on O/p. Its tilt K♭ is the fraction field of the limit of O/p under Frobenius. The tilt has characteristic p.

**Problem.** For any perfectoid field K, the absolute Galois groups of K and of its tilt are isomorphic. So a question about a mixed characteristic field becomes one about a characteristic p field.

**How the definition helps.** The definition is what makes tilting work: finite étale algebras over K match those over K♭ one for one. A finite étale map to a field is a finite separable extension, so the Galois groups agree, as the page says. The non-discrete condition rules out fields like ℚₚ itself (our own). Fontaine and Wintenberger proved a special case earlier (our own). Scholze introduced the definitions in 2012. What stays hard is the almost purity theorem.

**Wikipedia:** [Perfectoid space](https://en.wikipedia.org/wiki/Perfectoid_space). It says: “the almost purity theorem implies that for any perfectoid field K the absolute Galois groups of K and K♭ are isomorphic.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publications Mathématiques de l'IHÉS 116 (2012)](https://doi.org/10.1007/s10240-012-0042-x)

### Perfectoid rings let you move étale problems to characteristic p

**Remember:** Perfectoid means Frobenius is surjective enough to move between characteristics 0 and p.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid ring is a complete Tate ring A with these conditions. Its power-bounded elements A° form a bounded set. There is a pseudo-uniformizer ϖ (a topologically nilpotent unit) such that ϖᵖ divides p in A°, and the Frobenius map x ↦ xᵖ from A°/ϖ to A°/ϖᵖ is an isomorphism. A perfectoid space is an adic space that spectra of perfectoid rings cover, and the tilt A♭ is the limit of A under x ↦ xᵖ, made into a ring of characteristic p.

**Problem.** Fontaine and Wintenberger proved that some deeply ramified p-adic fields and their tilts in characteristic p have isomorphic absolute Galois groups. Extend this theorem from fields to rings and spaces.

**How the definition helps.** The perfectoid condition is exactly what makes the tilt R♭ carry as much étale information as R. With it, tilting gives an equivalence between finite étale R-algebras and finite étale R♭-algebras. It also gives an isomorphism between the étale site Xₑₜ of X and the étale site X♭ₑₜ of its tilt. So you can move problems from mixed characteristic to characteristic p. The equivalence is a hard theorem that uses almost mathematics, and it is not a tautology.

**nLab:** [perfectoid space](https://ncatlab.org/nlab/show/perfectoid+space). It says: “this is generalized by the statement that the perfectoid spaces over fields related this way are equivalent.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, arXiv:1111.4914](https://arxiv.org/abs/1111.4914)

### Disconnected curves keep Galois closures inside the theory

**Remember:** Drop connectedness, and Galois closures of curves stay curves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14H30 (Coverings of curves, fundamental group), 14H40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The paper works with curves that need not be connected. They also need not be geometrically connected, that is, connected after extension to an algebraic closure of the base field. The paper deduces the properties of such curves and their Jacobians from the connected case.

**Problem.** Proposition 4.1 states that the quotient X/G of such a curve by a finite group G is again a curve. The Jacobian of a curve is its group of degree-zero divisors up to linear equivalence (our own gloss). On Jacobians, pushforward after pullback is multiplication by \|G\|, and pullback after pushforward is the sum of the actions of G.

**How the definition helps.** Our own reason: a Galois closure of a cover of curves can be disconnected. So, in our own reading, a theory of connected curves cannot even state results about it. The abstract gives this reason for the wider convention. With it, closures and quotients stay in the same class, and Proposition 4.1 holds without case distinctions (our own reading). The paper says it deduces the needed facts from the standard connected case. Our own note: that reduction is the remaining work.

**Paper or page:** [On Galois covers of curves and arithmetic of Jacobians](https://arxiv.org/abs/2407.18258). It says: “it is convenient to work throughout with curves that are not assumed to be geometrically connected (or even connected); such curves arise naturally when taking Galois closures of covers of curves.”

**Sources:**

- [Alexandros Konstantinou, Adam Morgan, On Galois covers of curves and arithmetic of Jacobians, arXiv:2407.18258 (2024)](https://arxiv.org/abs/2407.18258)

### G-normal models give curves with group scheme actions a unique good model

**Remember:** Ask each orbit, not each point, to be cut out by one equation.

*Makes the theorem clean to state or prove.* MSC 14H37 (Automorphisms of curves), 14L15. arXiv math.AG. Level 4: research.

**Definition.** A finite group scheme can be non-reduced, like the group of p-th roots of unity in characteristic p. Brion defines G-normal varieties for actions of such groups. For curves, G-normal means that the orbit of each closed point has an invertible ideal sheaf. That is, the orbit is locally cut out by one function.

**Problem.** Every curve is birational to a unique normal projective curve. With an action of a finite group scheme, the normal projective model need not carry the action. Is there still a unique good model?

**How the definition helps.** G-normality weakens normality to a condition that the action can respect, so a good model exists again. The paper states the bad case: an equivariant projective model always exists, but it need not be normal. With G-normality, every curve with a G-action has a unique projective G-normal model. Also, the quotient of a G-normal variety by G is normal, and a G-normal curve is a local complete intersection. In higher dimension the paper gets a G-normal projective model, but uniqueness is claimed only for curves.

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

**Problem.** The usual group law on an elliptic curve needs a chosen zero point. Is there a structure that does not depend on this choice?

**How the definition helps.** The operation ∗ uses lines only, so it needs no chosen point. Fix any point c, and put x + y = c ∗ (x ∗ y). The paper shows that this is an abelian group law with zero c. Another choice of zero gives an isomorphic group, by an explicit map. The elliptic group can also hold more than the group. A flex point is a point where the tangent meets the curve three times. Without a flex point, the abelian group does not determine the elliptic group.

**Paper or page:** [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1), [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1). It says: “However, that very chord-tangent law allows us to define a rather more obscure algebraic structure, which we call an elliptic group, on the points of an elliptic curve.”

**Sources:**

- [Ilia Pirashvili, Elliptic groups and rings, arXiv:2201.05553v1 (2022)](https://arxiv.org/abs/2201.05553v1)

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

### The stricter definition of irreducible symplectic variety forces half-dimensional Lagrangian fibrations

**Remember:** Demand one generating two-form on every cover branched only in codimension two.

*Rules out counterexamples. Confidence: medium.* MSC 14J42 (Holomorphic symplectic varieties, hyper-Kähler varieties), 14D06. arXiv math.AG, math.SG. Level 4: research.

**Definition.** In the definition of Greb, Kebekus and Peternell, an irreducible symplectic variety is complex projective and normal. It has mild (canonical) singularities and a symplectic form on its smooth part. Consider every finite cover that is étale away from codimension two. On each such cover, the forms defined away from the singular set must be generated by the pulled-back symplectic form.

**Problem.** Let X be an irreducible symplectic variety of dimension 2n. Let X map onto a normal projective B with connected fibres, where 0 &lt; dim B &lt; 2n. Then B has dimension n, and the general fibre is an abelian variety of dimension n.

**How the definition helps.** The abstract says known results give the Fujiki relations, and the newer definition is then imposed for the fibration theorem. Fujiki relations are intersection identities for the generalized Beauville–Bogomolov form, and they control the dimensions. Our own example is the product of three K3 surfaces, each a simply connected surface with a nowhere-zero two-form. The product is symplectic of dimension 6. Projection onto one factor has fibres of dimension 4, not 3. The product fails the form condition already on itself, because it has three independent two-forms.

**Paper or page:** [Fujiki relations and fibrations of irreducible symplectic varieties](https://arxiv.org/abs/1701.09069v3), [Fujiki relations and fibrations of irreducible symplectic varieties](https://arxiv.org/abs/1701.09069v3). It says: “This enables us to study fibrations of these varieties; imposing the newer definition from \[GKP16, Definition 8.16.2\] we show that they behave much like irreducible symplectic manifolds.”

**Sources:**

- [Martin Schwald, Fujiki relations and fibrations of irreducible symplectic varieties, arXiv:1701.09069 (2020), Épijournal de Géométrie Algébrique, Volume 4 (June 19, 2020) epiga:4557](https://arxiv.org/abs/1701.09069v3)
- [Daniel Greb, Stefan Kebekus and Thomas Peternell, Singular spaces with trivial canonical class, Advanced Studies in Pure Mathematics 70](https://doi.org/10.2969/aspm/07010067)

### Qregularity on quadrics gives a simple proof of Knörrer's theorem

**Remember:** Measure sheaves on a quadric with spinor bundles as well as line bundles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14J60 (Vector bundles on surfaces and higher-dimensional varieties, and their moduli), 14J70, 14F17. arXiv math.AG. Level 4: research.

**Definition.** Castelnuovo–Mumford regularity tests vanishing of cohomology of twists of a sheaf by the line bundles O(k) on projective space. On a smooth quadric hypersurface, Ballico and Malaspina also use the spinor bundles, the extra basic bundles of a quadric. A sheaf is m-Qregular when certain cohomology groups of its twists, and of its twists tensored with the spinor bundles, vanish.

**Problem.** A bundle is ACM (arithmetically Cohen–Macaulay) when it has no intermediate cohomology in any twist. Knörrer proved that the ACM bundles on a smooth quadric are the direct sums of line bundles and twisted spinor bundles.

**How the definition helps.** Qregularity puts the spinor bundles into the test, so it matches the cohomology of a quadric. The paper compares Qregularity of a sheaf with the ordinary regularity of its extension by zero to projective space. The second lies between the first and the first plus one. With Qregularity, the authors extend the Evans–Griffith criterion to quadrics. That criterion detects sums of line bundles from the vanishing of some cohomology. Knörrer's characterization then follows as a special case, by a short argument. The known cohomology of the spinor bundles is still needed as input (our own).

**Paper or page:** [Qregularity and an Extension of Evans-Griffiths Criterion to Vector Bundles on Quadrics](https://arxiv.org/abs/0802.0451v1). It says: “We use our notion of Qregularity in order to prove an extension of Evans-Griffiths criterion to vector bundles on Quadrics. In particular we get a new and simple proof of the Knörrer's characterization of ACM bundles.”

**Sources:**

- [Edoardo Ballico, Francesco Malaspina, Qregularity and an Extension of Evans-Griffiths Criterion to Vector Bundles on Quadrics, arXiv:0802.0451v1 (2008)](https://arxiv.org/abs/0802.0451v1)
- [H. Knörrer, Cohen-Macaulay modules on hypersurface singularities I, Inventiones Mathematicae (1987)](https://doi.org/10.1007/bf01405095)

### Right-invariant derivations are determined by their values at the identity

**Remember:** Evaluate at the identity and use translations to recover the rest.

*True by definition.* MSC 14L15 (Group schemes), 17B45, 18M05. arXiv math.RT, math.AG. Level 4: research.

**Definition.** Let G be an affine group scheme over a symmetric tensor category, with coordinate ring O(G) and coproduct Δ, which encodes group multiplication. A map β from X ⊗ O(G) to O(G) is right invariant if it commutes with right translation. The counit η evaluates a function at the identity of G.

**Problem.** A right-invariant map β is recovered from η ∘ β by the formula β = ((η ∘ β) ⊗ 1) ∘ (1 ⊗ Δ). So a right-invariant derivation is determined by its value at the identity.

**How the definition helps.** Right invariance carries the value at the identity to every point, so there is no free choice elsewhere. In our own reading, right invariance is the equation Δ ∘ β = (β ⊗ 1) ∘ (1 ⊗ Δ). Apply η ⊗ 1 to both sides, and the counit law (η ⊗ 1) ∘ Δ = 1 turns the equation into the formula. Showing that the tangent space has the structure of a restricted Lie algebra takes separate work.

**Paper or page:** [Group schemes and their Lie algebras over a symmetric tensor category](https://arxiv.org/abs/2507.02031v1). It says: “If βₓ : X ⊗ O(G) → O(G) is right invariant then βₓ can be recovered from η ∘ βₓ via the formula”

**Sources:**

- [Dave Benson, Julia Pevtsova, Group schemes and their Lie algebras over a symmetric tensor category, arXiv:2507.02031 (2025)](https://arxiv.org/abs/2507.02031v1)

### A scheme structure on cactus varieties compares them with catalecticant equations

**Remember:** Give the cactus variety equations, not only points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14N07 (Secant varieties, tensor rank, varieties of sums of powers), 14C05. arXiv math.AG. Level 4: research.

**Definition.** The r-th cactus variety of X is the closure of the union of linear spans of finite subschemes of X of degree r. The cactus scheme uses relative linear spans of families over bases that may have nilpotent functions. Nilpotents record infinitesimal directions.

**Problem.** Take a Veronese variety of high degree, the image of projective space under all monomials of a fixed degree. Its r-th cactus scheme equals the zero scheme of suitable catalecticant minors outside the (r−1)-th cactus variety. Catalecticant minors are minors of matrices built from the coefficients of a form.

**How the definition helps.** Once the cactus variety is a scheme, the comparison can be an equality of schemes, not only of point sets. Our own explanation is that a set cannot tell an equation from its square. The relative spans over non-reduced bases give the nilpotent structure. The work is to compare these spans with the determinantal equations.

**Paper or page:** [Cactus scheme, catalecticant minors, and scheme theoretic equations](https://arxiv.org/abs/2410.21908v1). It says: “In this article, we equip the cactus variety with a scheme structure, via "relative linear spans" of families of finite schemes over a potentially non-reduced base.”

**Sources:**

- [Jarosław Buczyński, Hanieh Keneshlou, Cactus scheme, catalecticant minors, and scheme theoretic equations, arXiv:2410.21908 (2024)](https://arxiv.org/abs/2410.21908v1)
