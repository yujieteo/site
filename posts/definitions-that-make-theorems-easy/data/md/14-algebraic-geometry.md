### Adjoining an inverse makes each basic affine open affine

**Remember:** Make nonzero into an equation by asking for an inverse.

*Makes the theorem clean to state or prove.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** A basic open set D(f) of an affine variety X is the set of points where f is nonzero. Adjoining an inverse turns this into an equation (our own): add a variable t and impose ft = 1.

**Problem.** The basic open set D(f) is isomorphic to the affine set of pairs (x,t) with x in X and f(x)t = 1.

**How the definition helps.** The equation ft = 1 holds for some t exactly where f is nonzero, and then t = 1/f(x) (our own). So projection (x, t) ↦ x and its inverse x ↦ (x, 1/f(x)) are regular, since f has no zero on D(f) (our own).

**Paper or page:** [Alg Geom: Quasi Proj, Theorem 5.2. (Distinguished open subsets of affines are affine)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Define W = V(f₁, …, fₘ, y · f − 1) ⊆ 𝔸ⁿ⁺¹ where y is the (n+1)st coordinate of 𝔸ⁿ⁺¹. Then X ≅ W.”

**Sources:** none listed. No primary source with a working link was found.

### Affine charts reduce projective equations to ordinary polynomial equations

**Remember:** Divide by the coordinate you know is nonzero.

*True by definition.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** A projective point is a nonzero coordinate vector up to a nonzero scalar. Its ith affine chart consists of the points with nonzero ith coordinate, which can then be scaled to 1.

**Problem.** The n + 1 affine charts cover every variety in projective n-space. Setting the chosen coordinate to 1 gives ordinary polynomial equations for each piece.

**How the definition helps.** Every point has some nonzero coordinate, so the n + 1 charts cover it, and in chart i it has a unique representative with xᵢ = 1 (our own). Homogeneous equations keep their zeros under rescaling, so setting xᵢ = 1 gives ordinary polynomial equations (our own).

**Wikipedia:** [Projective variety](https://en.wikipedia.org/wiki/Projective_variety). It says: “Thus, X is an algebraic variety covered by (n+1) open affine charts X ∩ Uᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Denominator ideals make regular functions on affine varieties polynomial

**Remember:** A denominator ideal with no common zero contains 1.

*Makes the theorem clean to state or prove.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** Let r be a rational function on an irreducible affine variety. Its denominator ideal is the set of polynomial functions g with gr polynomial, so r is regular at a point exactly when some g in this ideal is nonzero there.

**Problem.** Over an algebraically closed field, a rational function regular everywhere on an irreducible affine variety is a polynomial function. Regular means that at each point it has some denominator that is nonzero there.

**How the definition helps.** If r is regular everywhere, the denominator ideal has no common zero (our own). The weak Nullstellensatz then puts 1 in it, so r = 1·r is polynomial (our own).

**Paper or page:** [Alg Geom: Zariski, Theorem 7.1. (Regular functions on distinguished open sets)](https://venhance.github.io/napkin/Napkin.pdf). It says: “In particular, 𝒪ᵥ(V) = 𝒪ᵥ(D(1)) ≅ ℂ\[V\].”

**Sources:** none listed. No primary source with a working link was found.

### Descending chains give affine algebraic sets finitely many components

**Remember:** If a split kept failing, it would give an endless descending chain.

*Makes the theorem clean to state or prove.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** A space is Noetherian if every descending chain of closed subsets stops changing. A nonempty closed set is irreducible if it is not the union of two proper closed subsets.

**Problem.** Every affine algebraic set is the union of finitely many irreducible components, the maximal irreducible closed subsets.

**How the definition helps.** A closed set that is no finite union of irreducible sets would, by the chain condition, contain a minimal such set, but that set splits into two smaller ones that are finite unions (our own). Affine algebraic sets satisfy the chain condition by Hilbert's basis theorem, since smaller closed sets have larger ideals (our own). Discarding pieces inside others leaves the components (our own).

**nLab:** [noetherian topological space](https://ncatlab.org/nlab/show/noetherian+topological+space). It says: “Every noetherian topological space is a closed union of a finitely many irreducible topological spaces (its irreducible components).”

**Sources:** none listed. No primary source with a working link was found.

### Elimination ideals give the closure of a projection

**Remember:** Keep the equations in the coordinates you keep.

*Makes the theorem clean to state or prove.* MSC 14A10 (Varieties and morphisms), 13P10. arXiv math.AG. Level 2: later undergraduate.

**Definition.** The elimination ideal I ∩ k\[y\] consists of the polynomials in I that involve only the retained coordinates y.

**Problem.** Over an algebraically closed field, the Zariski closure of the projection of V(I) onto the y coordinates, the smallest zero set containing it, is the zero set of I ∩ k\[y\]. Applying this to the graph of a polynomial parametrization gives equations for the closure of its image.

**How the definition helps.** A polynomial in y vanishes on the projection exactly when it vanishes on V(I), and the strong Nullstellensatz then puts a power of it in I ∩ k\[y\] (our own). The projection itself need not be closed, since xy = 1 projects onto the line minus zero (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “the (Zariski closure of) the projection of the algebraic set defined by the ideal I into the Y-subspace is defined by the ideal I ∩ K\[Y\].”

**Sources:** none listed. No primary source with a working link was found.

### Homogenizing the whole ideal removes false points at infinity

**Remember:** At infinity, keep every equation that held before.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** To homogenize a nonzero polynomial of degree d, multiply each term of degree e by z raised to d−e. The homogenized ideal is generated by the homogenizations of all its nonzero polynomials.

**Problem.** The projective closure of an affine algebraic set is the projective zero set of the homogenization of its vanishing ideal.

**How the definition helps.** The homogenized ideal contains every homogeneous polynomial that vanishes on the affine set in the chart z = 1, so it cuts out exactly the closure (our own). Homogenizing generators alone can fail: y and xy − x generate the ideal of the origin, but y and xy − xz vanish at \[1:0:0\] (our own). The full ideal contains x, whose homogenization excludes that point (our own).

**Wikipedia:** [Projective variety](https://en.wikipedia.org/wiki/Projective_variety). It says: “the defining ideal of this closure is the homogeneous ideal”

**Sources:** none listed. No primary source with a working link was found.

### Irreducible spaces are nonempty, so prime radical ideals match irreducible varieties

**Remember:** The whole ring is not prime; the empty set is not irreducible.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms), 13A15. arXiv math.AG, math.AC. Level 2: later undergraduate.

**Definition.** A space is irreducible if it is nonempty and cannot be expressed as a union of two proper closed subsets.

**Problem.** For a radical ideal I of ℂ\[x₁, …, xₙ\], I is prime exactly when its zero set V(I) is irreducible. Here V(I) has the Zariski topology, whose closed sets are the zero sets of ideals.

**How the definition helps.** Nonemptiness matches the rule that a prime ideal is proper, since the whole ring has an empty zero set (our own). For radical I, the Nullstellensatz makes I the ideal of all polynomials that vanish on V(I) (our own). Then ab ∈ I with a, b ∉ I splits V(I) into the proper closed sets V(I) ∩ V(a) and V(I) ∩ V(b), and the converse runs backward (our own).

**Wikipedia:** [Hyperconnected space](https://en.wikipedia.org/wiki/Hyperconnected_space). It says: “However some authors, especially those interested in applications to algebraic geometry, add an explicit condition that an irreducible space must be nonempty.”

**Paper or page:** [An Infinitely Large Napkin: Alg Geom: Affine Var](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let I be a radical ideal, and V = 𝕍(I) a nonempty variety. Then I is prime if and only if V is irreducible.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Leaving out the irrelevant ideal makes the projective Nullstellensatz a bijection

**Remember:** The origin is not a projective point, so its ideal is irrelevant.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms), 13A02, 13A15. arXiv math.AG, math.AC. Level 2: later undergraduate.

**Definition.** The projective zero set of a homogeneous ideal in ℂ\[x₀,…,xₙ\] is the set of lines through the origin on which all its polynomials vanish. The irrelevant ideal (x₀,…,xₙ) vanishes only at the origin, so its projective zero set is empty.

**Problem.** Projective varieties in ℂPⁿ correspond bijectively to the homogeneous radical ideals of ℂ\[x₀, …, xₙ\] other than the irrelevant ideal.

**How the definition helps.** The whole ring and the irrelevant ideal are both radical with empty projective zero set, so removing the irrelevant ideal leaves one ideal for the empty variety (our own). The affine Nullstellensatz, applied to the cone over each variety in ℂⁿ⁺¹, gives the bijection for the rest (our own).

**Paper or page:** [An Infinitely Large Napkin: Alg Geom: Proj Var](https://venhance.github.io/napkin/Napkin.pdf). It says: “Thus there is a natural bijection between: projective varieties in ℂPⁿ, and homogeneous radical ideals of ℂ\[x₀, …, xₙ\] except for the irrelevant ideal.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Polynomial equations make polynomial maps Zariski continuous

**Remember:** To pull back a zero set, substitute in its equations.

*True by definition.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** In the Zariski topology on an affine variety, the closed sets are the common zero sets of polynomial functions.

**Problem.** Every polynomial map between affine varieties is continuous for the Zariski topology.

**How the definition helps.** The inverse image of a zero set is cut out by substituting the map's coordinate polynomials into its equations (our own). The results are still polynomials, so the inverse image is closed (our own).

**nLab:** [Zariski topology](https://ncatlab.org/nlab/show/Zariski+topology). It says: “These subsets are called the Zariski closed subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial functions give the coordinate ring as a quotient

**Remember:** Quotient out exactly what vanishes.

*True by definition.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The coordinate ring of an affine algebraic set X is the ring of polynomial functions on X, where two polynomials count as the same function if they agree at every point of X.

**Problem.** For an affine algebraic set X over a field k, its coordinate ring is the polynomial ring modulo the vanishing ideal I(X).

**How the definition helps.** Two polynomials give the same function on X exactly when their difference lies in I(X), so polynomial functions on X are the classes of the quotient (our own).

**Paper or page:** [Alg Geom: Zariski, Theorem 5.3. (Coordinate rings correspond to ideal)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then ℂ\[V\] ≅ ℂ\[x₁, …, xₙ\] / I.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial functions turn maps of affine varieties into reverse ring maps

**Remember:** To pull a function back, substitute the map.

*Makes the theorem clean to state or prove.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The coordinate ring k\[X\] consists of polynomial functions on the affine variety X over k. A map is polynomial if each output coordinate is a polynomial function.

**Problem.** For affine varieties X and Y over an algebraically closed field k, polynomial maps X → Y correspond to k-algebra maps k\[Y\] → k\[X\].

**How the definition helps.** Substitution along a polynomial map sends each function on Y to a function on X, which gives a k-algebra map (our own). Conversely, a k-algebra map sends the coordinates of Y to functions on X that satisfy the equations of Y, so they define a polynomial map X → Y (our own). The two constructions are inverse because the coordinates generate k\[Y\] (our own).

**nLab:** [affine variety](https://ncatlab.org/nlab/show/affine+variety). It says: “the algebra can be recovered as the coordinate ring of the variety; this correspondence is an equivalence of categories, if the morphisms are properly defined.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial inverses keep a cusp from being an affine line

**Remember:** A polynomial parametrization need not have a polynomial inverse.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms), 14H50. arXiv math.AG. Level 2: later undergraduate.

**Definition.** An affine isomorphism is a polynomial map, one whose coordinates are polynomials, with a polynomial inverse.

**Problem.** Over an algebraically closed field, the map t ↦ (t²,t³) is a polynomial bijection onto the cusp y² = x³. It is not an isomorphism.

**How the definition helps.** An inverse would write t as a polynomial in x = t² and y = t³, but such polynomials have no linear term, so they differ from t on an infinite field (our own). The map is still bijective, since each nonzero cusp point has the unique parameter y/x and the origin has parameter 0 (our own).

**Wikipedia:** [Affine variety](https://en.wikipedia.org/wiki/Affine_variety). It says: “A morphism, or regular map, of affine varieties is a function between affine varieties that is polynomial in each coordinate:”

**Sources:**

- [Miles Reid, Undergraduate Algebraic Geometry, Corollary 4.5 and its example.](https://margalit.droppages.net/classes/math6421Fall2021/Reid.pdf)

### Radical ideals give each affine algebraic set one ideal

**Remember:** Taking powers changes equations, not their zeros.

*Rules out counterexamples.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** An ideal I is radical if f lies in I whenever some power fⁿ lies in I. Such an ideal never separates f from fⁿ, which have the same zeros (our own).

**Problem.** Over an algebraically closed field, affine algebraic sets correspond to radical ideals in the polynomial ring. The correspondence reverses inclusion.

**How the definition helps.** The strong Nullstellensatz says that the polynomials vanishing on V(I) form the radical √I, so each zero set comes from exactly one radical ideal. The ideals (x) and (x²) have the same zeros, but only (x) is radical (our own).

**Paper or page:** [Alg Geom: Affine Var, Theorem 4.4. (Hilbert's Nullstellensatz)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Given an affine variety V = V(I), the set of polynomials which vanish on all points of V is precisely √I.”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing ideals give the smallest closed set containing the points

**Remember:** Use every equation the points satisfy to get their closure.

*True by definition.* MSC 14A10 (Varieties and morphisms). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The vanishing ideal I(S) is the set of all polynomials that are zero at every point of S, that is, every equation that S satisfies.

**Problem.** The Zariski closure of any subset S of affine space is the common zero set of I(S).

**How the definition helps.** Every Zariski closed set containing S is cut out by equations that vanish on S, so it contains V(I(S)) (our own). And V(I(S)) is itself closed and contains S, so it is the smallest such set (our own).

**Paper or page:** [Zero Locus of Vanishing Ideal is Closure](https://proofwiki.org/wiki/Zero_Locus_of_Vanishing_Ideal_is_Closure). It says: “V(I(S)) = S̄”

**Sources:** none listed. No primary source with a working link was found.

### Counting complex points at infinity makes Bézout's count exact

**Remember:** Count every meeting point, at infinity too, by its local dimension.

*Makes the theorem clean to state or prove.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14H50. arXiv math.AG. Level 2: later undergraduate.

**Definition.** At each intersection point P of two complex projective plane curves with no common component, the intersection multiplicity is the dimension over ℂ of the local ring of the plane at P modulo both local equations. Points at infinity and tangencies count with this weight.

**Problem.** For complex projective plane curves of degrees m and n without a common component, the sum of their intersection multiplicities is mn.

**How the definition helps.** Bézout’s theorem says that these weights add up to mn, the product of the degrees (our own). Without complex points, points at infinity and weights, the circle x² + y² = 1 and the line y = 2 would not meet at all (our own).

**Wikipedia:** [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem). It says: “To properly account for all intersection points, it may be necessary to allow complex coordinates and include the points on the infinite line in the projective plane.”

**Sources:**

- [J.-P. Serre, Algèbre locale · multiplicités, Lecture Notes in Mathematics 11, Springer (1965; 3rd edition 1975)](https://doi.org/10.1007/978-3-540-37123-6)

### Birational varieties share a field of rational functions

**Remember:** Shrinking to a nonempty open set does not change rational functions.

*True by definition. Confidence: medium.* MSC 14E05 (Rational and birational maps), 14A10. arXiv math.AG. Level 2: later undergraduate.

**Definition.** A rational function on an irreducible variety is a regular function on some nonempty open set, and two count as equal if they agree on a smaller nonempty open set. Any two nonempty open sets meet, so these functions form a field that does not depend on which open set one uses (our own).

**Problem.** Two irreducible varieties over k are birational if they have isomorphic nonempty open subsets over k. Birational varieties have isomorphic fields of rational functions over k.

**How the definition helps.** An isomorphism between nonempty open subsets pulls regular functions back in both directions, so it identifies the two fields of rational functions (our own). Shrinking to the open subset loses nothing, because each rational function lives on some smaller open set anyway (our own).

**nLab:** [rational function on an affine variety](https://ncatlab.org/nlab/show/rational+function+on+an+affine+variety). It says: “A rational function is any element of the field of fractions of 𝒪(X), that is the function field of the variety.”

**Sources:** none listed. No primary source with a working link was found.

### Graded quotients make the plane Bézout count a dimension calculation

**Remember:** Keep the equations and count what remains in large degrees.

*Makes the theorem clean to state or prove.* MSC 14H50 (Plane and space curves), 14C17. arXiv math.AG. Level 2: later undergraduate.

**Definition.** The Hilbert function of two homogeneous plane curve equations F and G over a field k gives, for each degree d, the dimension over k of the degree-d forms in k\[x,y,z\] modulo the ideal (F,G).

**Problem.** For curves over an algebraically closed field with no common component, this Hilbert function eventually equals the product of their degrees. This number is their total intersection multiplicity.

**How the definition helps.** When F and G have no common factor, multiplication by G is injective modulo F, so each dimension is an alternating sum of monomial counts (our own). In large degrees this sum is a second difference of a quadratic count, which equals mn (our own). The remaining work identifies mn with the sum of local intersection multiplicities (our own).

**Paper or page:** [Alg Geom: Bezout, Theorem 5.5. (Bézout's theorem)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then deg(I + (f)) = k deg I.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping the equation on the curve makes the singularity test valid

**Remember:** Check that the point lies on the curve before checking derivatives.

*Rules out counterexamples.* MSC 14H50 (Plane and space curves). arXiv math.AG. Level 2: later undergraduate.

**Definition.** Take a plane curve equation F with no repeated factor over an algebraically closed field. A point is singular if it lies on the curve and F, written in coordinates centred at that point, has no linear term.

**Problem.** For a homogeneous plane curve equation F, a projective point is singular exactly when F and its three first partial derivatives vanish there.

**How the definition helps.** In the chart z = 1 the linear terms are ∂F/∂x and ∂F/∂y, and Euler’s identity d·F = x∂F/∂x + y∂F/∂y + z∂F/∂z then forces ∂F/∂z = 0 (our own). The condition that the point lies on the curve is needed: in characteristic p all partial derivatives of xᵖ + yzᵖ⁻¹ vanish at \[1:0:0\], which is off the curve (our own).

**Wikipedia:** [Singular point of a curve](https://en.wikipedia.org/wiki/Singular_point_of_a_curve). It says: “The singular points are those points on the curve where both partial derivatives vanish”

**Sources:**

- [William Fulton, Algebraic Curves, §5.1, problem 5.1, and §3.1.](https://www.ms.uky.edu/~sohum/ma561/affgeom/CurveBook.pdf)

### Local quotients let one count all affine intersections at once

**Remember:** Keep both equations and the quotient adds the local counts.

*Makes the theorem clean to state or prove.* MSC 14H50 (Plane and space curves), 14C17. arXiv math.AG. Level 2: later undergraduate.

**Definition.** At a common point P of two plane curves F and G with no common component over an algebraically closed field k, the intersection multiplicity is dim<sub>k</sub> 𝒪<sub>P</sub>/(F,G): the size of the local ring of the plane at P after imposing both equations.

**Problem.** Take two affine plane curves over an algebraically closed field k, with no common component. Their total intersection multiplicity is the dimension of k\[x,y\] modulo their two equations.

**How the definition helps.** The quotient k\[x,y\]/(F,G) is finite dimensional and, by the Chinese remainder theorem, splits into one local quotient 𝒪<sub>P</sub>/(F,G) for each intersection point (our own). Its dimension is therefore the sum of the local multiplicities (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “the dimension is dimension as a k-vector space.”

**Sources:**

- [William Fulton, Algebraic Curves, §3.3, property (9).](https://www.ms.uky.edu/~sohum/ma561/affgeom/CurveBook.pdf)

### Local quotients preserve intersection multiplicity under coordinate changes

**Remember:** The quotient keeps the two equations, not the choice of axes.

*True by definition.* MSC 14H50 (Plane and space curves), 14C17. arXiv math.AG. Level 2: later undergraduate.

**Definition.** At an isolated intersection point P of two affine plane curves over an algebraically closed field k, the intersection multiplicity is the dimension over k of the local ring at P (fractions whose denominators are nonzero at P) modulo both curve equations.

**Problem.** An invertible affine change of coordinates preserves the intersection multiplicity of two plane curves at corresponding isolated intersection points.

**How the definition helps.** An affine coordinate change is a ring isomorphism that carries each equation and each allowed denominator to its partner, so the two quotients are isomorphic and have the same dimension (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “the dimension is dimension as a k-vector space.”

**Sources:**

- [William Fulton, Algebraic Curves, §3.3, Theorem 3.](https://www.ms.uky.edu/~sohum/ma561/affgeom/CurveBook.pdf)

### On a line the local quotient counts the root order

**Remember:** On a line, intersection multiplicity is the usual root multiplicity.

*True by definition.* MSC 14H50 (Plane and space curves), 14C17. arXiv math.AG. Level 2: later undergraduate.

**Definition.** At an isolated intersection point P of two affine plane curves over an algebraically closed field k, the intersection multiplicity is the dimension over k of the local ring at P (fractions whose denominators are nonzero at P) modulo both curve equations.

**Problem.** At an intersection with a line outside the curve’s components, intersection multiplicity equals the root order of the curve equation restricted to the line.

**How the definition helps.** Imposing the line equation leaves one coordinate t, vanishing at the point, and the curve equation becomes tᵐ times a unit, where m is the root order (our own). The quotient then has basis 1, t, …, tᵐ⁻¹, so its dimension is m (our own).

**Wikipedia:** [Algebraic curve](https://en.wikipedia.org/wiki/Algebraic_curve). It says: “The multiplicity of an intersection point is the multiplicity of the corresponding root.”

**Sources:**

- [William Fulton, Algebraic Curves, §3.3, Theorem 3.](https://www.ms.uky.edu/~sohum/ma561/affgeom/CurveBook.pdf)

### The chord rule identifies flexes with points killed by three

**Remember:** A triple tangent means three copies of the point sum to zero.

*True by definition.* MSC 14H52 (Elliptic curves), 14H50. arXiv math.AG. Level 2: later undergraduate.

**Definition.** A flex of a smooth plane cubic is a point where the tangent line meets the cubic with multiplicity three at that point. With a flex O as the identity, any three points on one line sum to O, counted with multiplicity.

**Problem.** A point P on the smooth cubic is a flex if and only if P + P + P = O.

**How the definition helps.** The tangent at P meets the cubic at P, P and a third point R, so P + P + R = O (our own). Thus P + P + P = O exactly when R = P, which says that P is a flex (our own).

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “In the projective plane, each line will intersect a cubic at three points when accounting for multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### The point at infinity gives the chord-tangent rule an identity

**Remember:** Every line meets the cubic three times, so addition always works.

*Makes the theorem clean to state or prove.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 2: later undergraduate.

**Definition.** On the smooth cubic Y²Z = X³ + aXZ² + bZ³ over a field k of characteristic not 2 or 3, the sum of two points is the reflection Y ↦ −Y of the third point where their line meets the cubic, using the tangent for a repeated point.

**Problem.** The chord-tangent rule defines an abelian group with identity O = \[0:1:0\]. The k-rational points form a subgroup.

**How the definition helps.** Bézout gives every line three intersections, and the line through P and O is vertical, so its third point is the reflection of P and P + O = P (our own). Associativity follows by sending P to the divisor class of P − O and using Riemann–Roch (our own). For k-rational points the line, the third point and the reflection are all defined over k (our own).

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “In the projective plane, each line will intersect a cubic at three points when accounting for multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Defining geometric reducedness by all field extensions makes it survive base change

**Remember:** Every extension of the new field also extends the old one.

*True by definition.* MSC 14A05 (Relevant commutative algebra), 13B02. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A k-algebra S is geometrically reduced if K ⊗ₖ S has no nonzero nilpotent element for every field extension K of k.

**Problem.** If S is geometrically reduced over k and k′ is a field extension of k, then k′ ⊗ S is geometrically reduced over k′.

**How the definition helps.** For every field extension K of k′, tensor associativity identifies K ⊗ₖ′ (k′ ⊗ₖ S) with K ⊗ₖ S (our own). This is reduced since K extends k (our own).

**Paper or page:** [Varieties, Lemma 33.6.6.](https://stacks.math.columbia.edu/tag/0384), [Algebra, Lemma 10.44.4.](https://stacks.math.columbia.edu/tag/030V). It says: “In particular, X is geometrically reduced over k if and only if Xₖ′ is geometrically reduced over k′.”

**Sources:** none listed. No primary source with a working link was found.

### For spaces with functions, being a morphism is a local property

**Remember:** A morphism is a map that pulls functions back to functions.

*True by definition. Confidence: medium.* MSC 14A10 (Varieties and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A space with functions is a space carrying a sheaf of k-algebras of k-valued functions. A continuous map f is a morphism if, for every open V of the target, every function φ of the sheaf on V gives a function φ ∘ f of the sheaf on f⁻¹(V).

**Problem.** Let f be a continuous map between spaces with functions, and let open covers Uᵢ and Vᵢ satisfy f(Uᵢ) ⊂ Vᵢ. Then f is a morphism exactly when each restriction Uᵢ → Vᵢ is a morphism.

**How the definition helps.** Membership in a sheaf is a local condition, so φ ∘ f belongs to the sheaf on f⁻¹(V) as soon as it does on each piece Uᵢ ∩ f⁻¹(V) (our own). The restricted morphisms Uᵢ → Vᵢ give exactly this, and the converse holds because restrictions of pullbacks are pullbacks (our own).

**nLab:** [algebraic variety](https://ncatlab.org/nlab/show/algebraic+variety). It says: “The advantage of this notion of morphism between spaces with k-valued functions is that it is a property, rather than additional data (as in a morphism of ringed spaces).”

**Sources:**

- [U. Görtz, T. Wedhorn, Algebraic Geometry I: Schemes, Springer (2020)](https://doi.org/10.1007/978-3-658-30733-2)

### Affine diagonals give affine intersections

**Remember:** Pull the diagonal back to intersect two affine opens.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A scheme X has affine diagonal if the diagonal map X → X × X, x ↦ (x, x), has affine inverse image over every affine open. The inverse image of U × V is U ∩ V.

**Problem.** In a scheme with affine diagonal, any two affine opens have affine intersection.

**How the definition helps.** If U and V are affine, so is U × V, and the diagonal pulls it back to U ∩ V (our own). Without the condition it fails: glue two affine planes along the plane minus its origin, and they meet in the punctured plane, which is not affine (our own).

**Paper or page:** [Coherent, Lemma 30.2.5.](https://stacks.math.columbia.edu/tag/0BDX). It says: “for U, V ⊂ X affine open, the intersection U ∩ V is affine”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the zero ring makes the empty scheme affine

**Remember:** The zero ring has no proper ideals, so its spectrum has no points.

*True by definition.* MSC 14A15 (Schemes and morphisms), 13A99. arXiv math.AG. Level 3: graduate.

**Definition.** An affine scheme is the spectrum of any commutative ring, the zero ring included. Its points are the prime ideals, which by definition are proper.

**Problem.** The empty scheme is affine, because it is the spectrum of the zero ring.

**How the definition helps.** In the zero ring 0 = 1, so every ideal is the whole ring and none is prime (our own). Its spectrum therefore has no points and is the empty scheme (our own).

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring). It says: “The spectrum of the zero ring is the empty scheme.”

**Sources:** none listed. No primary source with a working link was found.

### Closed immersions are exactly the proper monomorphisms of schemes

**Remember:** Closed immersions are proper maps injective on every T-valued point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 18A20. arXiv math.AG. Level 3: graduate.

**Definition.** A monomorphism of schemes is a morphism X → S that is injective on T-valued points for every scheme T. A proper morphism is separated, of finite type and universally closed, meaning closed after every base change.

**Problem.** A morphism of schemes is a closed immersion exactly when it is a proper monomorphism. It is also one exactly when it is proper, unramified and universally injective.

**How the definition helps.** A proper monomorphism has finite fibres, so it is finite, and a finite monomorphism is a closed immersion (our own). For the third condition, an unramified universally injective map has a diagonal that is a surjective open immersion, hence an isomorphism, so the map is a monomorphism (our own).

**Paper or page:** [Stacks Project, Etale, Lemma 41.7.2](https://stacks.math.columbia.edu/tag/04XV). It says: “Let f : X → S be a morphism of schemes. The following are equivalent: (1) f is a closed immersion, (2) f is a proper monomorphism, (3) f is proper, unramified, and universally injective”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 04XV (Etale, Lemma 41.7.2)](https://stacks.math.columbia.edu/tag/04XV)

### Defining a bundle's total space by its symmetric algebra makes points sections

**Remember:** Maps out of the symmetric algebra are determined by its linear generators.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** For a finite-rank locally free sheaf ℰ on S, its total space is the relative spectrum Spec<sub>S</sub> Sym(ℰ∨) of the symmetric algebra on the dual ℰ∨. So maps into it are algebra maps out of Sym(ℰ∨) (our own).

**Problem.** Maps over S from a scheme T to the total space match the global sections of the pullback of ℰ to T.

**How the definition helps.** Algebra maps Sym(f\*ℰ∨) → 𝒪<sub>T</sub> are the same as linear maps f\*ℰ∨ → 𝒪<sub>T</sub>, by the universal property of the symmetric algebra (our own). Since ℰ is finite locally free, these linear maps are the global sections of f\*ℰ (our own).

**nLab:** [relative spectrum](https://ncatlab.org/nlab/show/relative+spectrum). It says: “However, one can construct their total spaces, using the symmetric algebra over the structure sheaf, obtaining a sheaf of algebras and then use the relative spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Defining affine schemes as dual rings makes fiber products tensor products

**Remember:** Reverse the ring maps and a tensor product becomes a fiber product.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Define the category of affine schemes as the opposite of the category of commutative rings, so that each ring map A → B becomes a map Spec B → Spec A.

**Problem.** For ring maps R → A and R → B, the fiber product of Spec A and Spec B over Spec R is Spec(A ⊗<sub>R</sub> B). It is also the fiber product among all locally ringed spaces (Stacks Project).

**How the definition helps.** The pushout of commutative rings is the tensor product, so reversing arrows makes Spec(A ⊗<sub>R</sub> B) the fiber product (our own). Maps from any locally ringed space X to Spec C match ring maps C → Γ(X,𝒪<sub>X</sub>), so the same object is the fiber product there too (our own).

**Paper or page:** [Schemes, Lemma 26.6.7](https://stacks.math.columbia.edu/tag/01I4). It says: “Moreover, the products and fibre products in the category of affine schemes are the same as in the category of locally ringed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining closed immersions by surjective ring maps makes base change immediate

**Remember:** Changing the base changes the coefficients but keeps the equations.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A morphism X → S is a closed immersion if over each affine open Spec R of S it is Spec(R/I) → Spec R for some ideal I, the map given by the quotient R → R/I.

**Problem.** A closed immersion stays a closed immersion after any base change, that is, after pullback along any map into its target.

**How the definition helps.** Over an affine chart, base change along Spec B → Spec R gives B ⊗<sub>R</sub> R/I ≅ B/IB, again a quotient (our own). Being a closed immersion can be checked on an affine cover of the target, so the pullback is a closed immersion (our own).

**Paper or page:** [Morphisms, Lemma 29.2.4](https://stacks.math.columbia.edu/tag/01QR). It says: “The base change of a closed immersion is a closed immersion.”

**Sources:** none listed. No primary source with a working link was found.

### Defining projective bundles by line quotients makes twisting by line bundles harmless

**Remember:** Twist every quotient line by ℒ, and untwist it with the dual.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 14C20. arXiv math.AG. Level 3: graduate.

**Definition.** The projective bundle of a vector bundle ℰ on S represents line quotients: its points over f: T → S are the surjections f\*ℰ → Q onto line bundles, up to isomorphism of quotients.

**Problem.** For a vector bundle ℰ and a line bundle ℒ, the projective bundles of ℰ and ℰ ⊗ ℒ are canonically isomorphic.

**How the definition helps.** Tensoring with f\*ℒ turns a line quotient of f\*ℰ into one of f\*(ℰ ⊗ ℒ), and tensoring with its dual undoes this (our own). The bijection is natural in T, so the two representing schemes are canonically isomorphic (our own).

**Paper or page:** [Constructions, Lemma 27.20.1](https://stacks.math.columbia.edu/tag/02NC). It says: “There is a canonical isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative normalization by a universal property makes it functorial

**Remember:** The normalization is the first integral stop between Y and X.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 13B22. arXiv math.AG. Level 3: graduate.

**Definition.** For a quasi-compact quasi-separated map Y → X, the relative normalization is the initial factorization Y → X′ → X with X′ integral over X. Every other such factorization Y → Z → X receives a unique compatible map X′ → Z.

**Problem.** Take a commutative square with maps Y₂ → Y₁ and X₂ → X₁, and vertical maps Y₂ → X₂ and Y₁ → X₁ that are quasi-compact and quasi-separated. Then a unique map X′₂ → X′₁ between the normalizations makes the diagram commute.

**How the definition helps.** Pull X′₁ back along X₂ → X₁: the result is integral over X₂ and receives Y₂, so the initial property of X′₂ gives the unique map (our own). The real work is proving that the integral closure has this universal property (our own).

**Paper or page:** [Morphisms, Lemma 29.53.5](https://stacks.math.columbia.edu/tag/035J). It says: “Then there exists a unique arrow X′₂ → X′₁ fitting into a commutative diagram”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative spectra by their test maps makes base change automatic

**Remember:** Pulling back in two steps equals pulling back in one step.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** The relative spectrum of a quasi-coherent 𝒪<sub>S</sub>-algebra 𝒜 represents the functor that sends each f: T → S to the set of 𝒪<sub>T</sub>-algebra maps f\*𝒜 → 𝒪<sub>T</sub>.

**Problem.** Let g be a map from S′ to S. The relative spectrum of g\*𝒜 over S′ is the fiber product of S′ with the relative spectrum of 𝒜 over S.

**How the definition helps.** For T over S′, pulling 𝒜 back to S′ and then to T gives the same algebra as pulling it straight back to T, so both sides have the same T-points (our own). The real work is showing that a scheme represents this functor, by gluing affine spectra (our own).

**Paper or page:** [Constructions, Lemma 27.4.1](https://stacks.math.columbia.edu/tag/01LS). It says: “Let F′ be the functor associated to (S′, 𝒜′) above. Then there is a canonical isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining separatedness by a closed diagonal makes agreement loci closed

**Remember:** Two maps agree exactly where the pair lands on the diagonal.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A morphism Y → S is separated if the diagonal Y → Y ×<sub>S</sub> Y is a closed immersion. Then equality of two T-valued points of Y is a closed condition on T (our own).

**Problem.** Let a and b be maps from X to Y over S, with Y separated over S. They agree on a largest closed subscheme Z of X. A map into X factors through Z exactly when its composites with a and b agree.

**How the definition helps.** Z is the pullback of the diagonal along (a,b): X → Y ×<sub>S</sub> Y, and pullbacks of closed immersions are closed immersions (our own). By the pullback property, a map into X factors through Z exactly when its composites with a and b agree (our own).

**Paper or page:** [Schemes, Lemma 26.21.5](https://stacks.math.columbia.edu/tag/01KM). It says: “Moreover, if Y is separated over S, then Z is a closed subscheme.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Weil restriction by points makes it commute with base change

**Remember:** The R-points of a Weil restriction are X-points over L ⊗ R.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** Let L/K be a finite field extension and X a quasi-projective L-variety. Its Weil restriction represents the functor sending each K-algebra R to X(L ⊗<sub>K</sub> R).

**Problem.** Let K′ be an extension of K, and let L′ = L ⊗ K′, a finite K′-algebra that need not be a field. Then the Weil restriction of X, base changed to K′, is the Weil restriction from L′ to K′ of X base changed to L′.

**How the definition helps.** For every K′-algebra R, associativity identifies (L ⊗<sub>K</sub> K′) ⊗<sub>K</sub>′ R with L ⊗<sub>K</sub> R (our own). The two schemes therefore represent naturally isomorphic point functors and are canonically isomorphic (our own).

**Wikipedia:** [Weil restriction](https://en.wikipedia.org/wiki/Weil_restriction). It says: “From the standpoint of sheaves of sets, restriction of scalars is just a pushforward”

**Sources:**

- [Siegfried Bosch, Werner Lütkebohmert and Michel Raynaud, Néron Models, §7.6 (1990)](https://doi.org/10.1007/978-3-642-51438-8)

### Every commutative ring gives a scheme, so schemes form a nice category

**Remember:** Cover the space by spectra, allowing every commutative ring.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 18A35. arXiv math.AG. Level 3: graduate.

**Definition.** A scheme is a locally ringed space covered by open subspaces isomorphic to spectra of commutative rings with their structure sheaves.

**Problem.** Finite limits, for example fiber products, exist in the category of schemes.

**How the definition helps.** Affine fiber products use tensor products, which are again commutative rings (our own). The scheme fiber product theorem glues these affine constructions for general schemes (our own). Together with the terminal scheme Spec ℤ, fiber products give all finite limits (our own).

**nLab:** [dichotomy between nice objects and nice categories](https://ncatlab.org/nlab/show/dichotomy+between+nice+objects+and+nice+categories). It says: “If the decision to let every commutative ring define a scheme gives standing to bizarre schemes, allowing it gives a category of schemes with nice properties”

**Sources:** none listed. No primary source with a working link was found.

### Geometric integrality keeps products integral

**Remember:** One geometrically integral factor keeps the whole product integral.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An affine scheme over a field k is geometrically integral if its coordinate ring S stays an integral domain after tensoring with every field extension K of k.

**Problem.** The product over a field of an integral affine scheme and a geometrically integral affine scheme is integral.

**How the definition helps.** Tensoring over a field preserves injections, so R ⊗ₖ S embeds in K ⊗ₖ S, where R is the domain and K its fraction field (our own). That ring is a domain by geometric integrality (our own). Plain integrality is not enough: ℂ is a domain, but ℂ ⊗\_ℝ ℂ ≅ ℂ × ℂ has zero divisors (our own).

**Paper or page:** [Algebra, Lemma 10.49.3.](https://stacks.math.columbia.edu/tag/0FWF), [Algebra, Lemma 10.49.4.](https://stacks.math.columbia.edu/tag/09P9). It says: “Let k be a field. Let S be a geometrically integral k-algebra. Let R be a k-algebra and an integral domain. Then R ⊗ₖ S is an integral domain.”

**Sources:** none listed. No primary source with a working link was found.

### Integral morphisms are exactly the affine universally closed morphisms

**Remember:** Affine locally, every element satisfies a monic equation over the base.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13B21. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A morphism is integral if it is affine and, over each affine open Spec A of the target, every element of the source ring satisfies a monic polynomial over A. It is universally closed if every base change sends closed sets to closed sets.

**Problem.** A morphism of schemes is integral exactly when it is affine and universally closed.

**How the definition helps.** Integral maps stay integral after base change and are closed by going up, so they are universally closed (our own). Plain closedness is too weak: Spec k\[x\] → Spec k is closed, yet k\[x\] is not integral over k (our own). Its base change to the line projects the hyperbola xy = 1 onto the punctured line, which is not closed.

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.44.7](https://stacks.math.columbia.edu/tag/01WM). It says: “Let f : X → S be a morphism of schemes. The following are equivalent (1) f is integral, and (2) f is affine and universally closed.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01WM (Morphisms, Lemma 29.44.7)](https://stacks.math.columbia.edu/tag/01WM)

### Local maps on stalks make morphisms into Spec A equal ring maps

**Remember:** Local stalk maps recover the image prime by pulling back the maximal ideal.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 13B10, 18A40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A locally ringed space has local rings as stalks. A morphism between two of them must have local stalk maps, which pull the maximal ideal back to the maximal ideal.

**Problem.** For every locally ringed space X, morphisms X → Spec(A) of locally ringed spaces correspond bijectively to ring maps A → Γ(X, 𝒪ₓ). So Spec is right adjoint to global sections.

**How the definition helps.** Given A → Γ(X,𝒪<sub>X</sub>), locality forces each point x to go to the prime of A pulled back from the maximal ideal of its stalk, and localization then fixes the sheaf map (our own). Without locality, the inclusion of a valuation ring V into its fraction field K gives a second ringed-space map Spec K → Spec V, onto the closed point (our own).

**Paper or page:** [Stacks Project, Schemes, Lemma 26.6.4](https://stacks.math.columbia.edu/tag/01I1). It says: “Let X be a locally ringed space. Let Y be an affine scheme. The map Mor(X, Y) ⟶ Hom(Γ(Y, 𝒪), Γ(X, 𝒪)) which maps f to f♯ (on global sections) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01I1 (Schemes, Lemma 26.6.4)](https://stacks.math.columbia.edu/tag/01I1)

### Proper quasi-finite maps are finite

**Remember:** Finite fibres need properness to give a finite map.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A map of schemes is finite if preimages of affine opens are affine, with coordinate rings that are finite modules over the base rings. It is proper if it is separated, of finite type and universally closed.

**Problem.** A morphism of schemes is finite if and only if it is proper and has finite fibres.

**How the definition helps.** Zariski’s Main Theorem factors the map as an open immersion followed by a finite map, and properness makes that open immersion also closed, hence finite (our own). Conversely, finite maps are proper with finite fibres (our own). Properness is needed: the inclusion of the punctured line into the line has finite fibres but is not finite (our own).

**Paper or page:** [More Morphisms, Lemma 37.44.1.](https://stacks.math.columbia.edu/tag/02LS). It says: “Let f : X → S be a morphism of schemes. The following are equivalent: f is finite, f is proper with finite fibres, f is proper and locally quasi-finite”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-compact, quasi-separated morphisms push quasi-coherent sheaves to quasi-coherent sheaves

**Remember:** Finitely many affines and overlaps keep pushforwards quasi-coherent.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism is quasi-compact if every quasi-compact open has quasi-compact inverse image. It is quasi-separated if its diagonal is quasi-compact.

**Problem.** For a quasi-compact quasi-separated morphism f, the direct image f\_\*ℱ of every quasi-coherent sheaf ℱ is quasi-coherent.

**How the definition helps.** Above each affine open, finitely many affines cover the preimage and its overlaps, so sections form a kernel of finite products, which localization preserves (our own). Without these finiteness conditions it fails: for infinitely many disjoint copies of Spec ℤ, the direct image is ∏ℤ (our own). Localizing ∏ℤ at 2 misses the section (1/2ⁿ)ₙ≥₁ over D(2) (our own).

**Paper or page:** [Stacks Project, Schemes, Lemma 26.24.1](https://stacks.math.columbia.edu/tag/01LC). It says: “Let f : X → S be a morphism of schemes. If f is quasi-compact and quasi-separated then f⁎ transforms quasi-coherent 𝒪ₓ-modules into quasi-coherent 𝒪ₛ-modules.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01LC (Schemes, Lemma 26.24.1)](https://stacks.math.columbia.edu/tag/01LC)

### Separated and proper morphisms use the diagonal in the product of schemes

**Remember:** A closed diagonal makes limits unique; universal closedness makes them exist.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A morphism X → Y is separated if its diagonal X → X ×ᵧ X is a closed immersion. It is proper if it is separated, of finite type, and closed after every base change.

**Problem.** For a quasi-separated finite type morphism X → Y, test every valuation ring A with fraction field K and every map Spec K → X over Spec A → Y. The morphism is separated exactly when each such diagram has at most one lift Spec A → X, and proper exactly when it has exactly one.

**How the definition helps.** The valuative criteria (EGA II 7.2.3 and 7.3.8) turn the closed diagonal into uniqueness of limits along valuation rings, and universal closedness into their existence. The diagonal uses the scheme fibre product, not the product of spaces, so it works although separated schemes are typically not Hausdorff.

**nLab:** [separated morphism of schemes](https://ncatlab.org/nlab/show/separated+morphism+of+schemes), [valuative criterion of separatedness](https://ncatlab.org/nlab/show/valuative+criterion+of+separatedness), [valuative criterion of properness](https://ncatlab.org/nlab/show/valuative+criterion+of+properness), [proper morphism](https://ncatlab.org/nlab/show/proper+morphism). It says: “For example, the underlying topological space of a separated scheme is typically not Hausdorff.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique II: Étude globale élémentaire de quelques classes de morphismes, Publ. Math. IHÉS 8 (1961) 5–222](http://www.numdam.org/item?id=PMIHES_1961__8__5_0)

### Unique generic points match points with irreducible closed sets

**Remember:** One irreducible closed set, one generic point, no more and no fewer.

*True by definition.* MSC 14A15 (Schemes and morphisms), 54D10. arXiv math.AG, math.GN. Level 3: graduate.

**Definition.** A generic point of a closed set Z is a point whose closure is all of Z. In Spec A the closure of a prime p is V(p), the primes containing p, so p is the generic point of V(p).

**Problem.** Every irreducible closed subset of a scheme has exactly one generic point. For a constructible locus in an irreducible variety, containing the generic point is equivalent to containing a dense open subset.

**How the definition helps.** An affine open meeting Z meets it in a dense irreducible closed subset V(p), whose unique generic point is p (our own). Any generic point of Z lies in every open set meeting Z, so it lies in this affine open and equals p (our own). The second claim uses that a dense constructible set in an irreducible variety contains a dense open set (our own).

**Wikipedia:** [Generic point](https://en.wikipedia.org/wiki/Generic_point). It says: “Oscar Zariski, a colleague of Weil's at São Paulo just after World War II, always insisted that generic points should be unique.”

**Sources:** none listed. No primary source with a working link was found.

### Universally injective morphisms are those injective on field-valued points

**Remember:** Test injectivity on points with values in fields, not on points.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 12F15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism f : X → S is universally injective if every base change of f is injective on underlying points. It is radicial if it is injective on points and each residue field extension is purely inseparable.

**Problem.** For a morphism of schemes, three conditions are equivalent: it is injective on K-valued points for every field K, it is universally injective, and it is radicial.

**How the definition helps.** A K-valued point of X is a point with an embedding of its residue field into K, so injectivity on all K-points tests both points and residue fields (our own). Each embedding extends in at most one way, for every K, exactly when the residue field extension is purely inseparable (our own). Radicial maps stay radicial under base change, hence universally injective, and base change to Spec K turns universal injectivity into injectivity on K-points (our own).

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.10.2](https://stacks.math.columbia.edu/tag/01S4). It says: “The following are equivalent: (1) For every field K the induced map Mor(Spec(K), X) → Mor(Spec(K), S) is injective. (2) The morphism f is universally injective. (3) The morphism f is radicial.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 01S4 (Morphisms, Lemma 29.10.2)](https://stacks.math.columbia.edu/tag/01S4)

### Using irrelevant modules, not torsion modules, extends Serre's theorem to all gradings

**Remember:** Quotient by modules with zero sheaf, not by modules killed by powers.

*Rules out counterexamples.* MSC 14A15 (Schemes and morphisms), 14A22, 16W50. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** For a commutative Noetherian nonnegatively graded ring A, a finite graded A-module M is irrelevant if its sheaf on Proj A is zero, that is, M\[1/f\] has zero degree-zero part for every homogeneous f of positive degree (our own).

**Problem.** For every commutative noetherian graded ring A, finitely generated graded modules modulo irrelevant modules form a category equivalent to coherent sheaves on Proj A. With torsion modules in place of irrelevant ones, this needs extra hypotheses such as generation in degree one.

**How the definition helps.** Coherent sheaves are the quotient of finite graded modules by the kernel of sheafification, and that kernel is exactly the irrelevant modules (our own). For A = k\[x\] with deg x = 2, the shift A(1) lives in odd degrees even after inverting x, so it sheafifies to zero though no power of x kills it (our own).

**Paper or page:** [Coherent, Proposition 30.15.3](https://stacks.math.columbia.edu/tag/0BXF), [Coherent, Proposition 30.14.4](https://stacks.math.columbia.edu/tag/0BXD). It says: “Let A be a Noetherian graded ring. Set X = Proj(A). The functor M ↦ M̃ induces an equivalence Mod<sup>fg</sup><sub>A</sub>/Mod<sup>fg</sup><sub>A, irrelevant</sub> ⟶ Coh(𝒪<sub>X</sub>)”

**Sources:** none listed. No primary source with a working link was found.

### Using prime ideals, not maximal ideals, makes Spec a functor

**Remember:** Pull back a prime and you get a prime, so maps go backwards.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 13A15. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The spectrum Spec R is the set of prime ideals of a commutative ring R, with closed sets V(I), the primes containing I. A ring map R → S sends each prime of S back to its inverse image, which is again prime.

**Problem.** Every ring homomorphism R → S gives a continuous map Spec S → Spec R. So Spec is a functor that reverses arrows, and with the structure sheaf, affine schemes are commutative rings with the arrows reversed.

**How the definition helps.** Inverse images of primes are prime and compose in reverse order, so Spec reverses arrows (our own). The inverse image of V(I) is V(IS), so the map is continuous (our own). Maximal ideals do not work: under ℤ → ℚ the maximal ideal (0) pulls back to a prime that is not maximal (our own).

**Wikipedia:** [Spectrum of a ring](https://en.wikipedia.org/wiki/Spectrum_of_a_ring). It says: “since the inverse image of a prime ideal by a ring homomorphism is always a prime ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Using the valuative criterion as the definition makes projective space proper

**Remember:** Divide by a coordinate that divides all the others.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms). arXiv math.AG. Level 3: graduate.

**Definition.** A quasi-separated finite type morphism X → S satisfies the valuative criterion if, for every valuation ring R with fraction field K, each S-map Spec K → X over a given Spec R → S extends uniquely to Spec R → X.

**Problem.** Projective n-space over any base scheme S is proper over S.

**How the definition helps.** Dividing the homogeneous coordinates of a K-point by an entry of smallest valuation gives coordinates in R with one entry 1 (our own). This is an extension over Spec R, and any two extensions differ by a unit of R, so it is unique (our own). Projective space is quasi-separated and of finite type over S, so the criterion makes it proper (our own).

**Paper or page:** [Constructions, Lemma 27.13.4](https://stacks.math.columbia.edu/tag/01NH). It says: “satisfies the existence and uniqueness parts of the valuative criterion”

**Sources:** none listed. No primary source with a working link was found.

### Algebraic spaces allow quotients by free finite group actions

**Remember:** Present the quotient by an equivalence relation with étale projections.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14L30. arXiv math.AG. Level 3: graduate.

**Definition.** An algebraic space is the étale-sheaf quotient of a scheme U by an equivalence relation R ⇉ U whose two projections are étale.

**Problem.** The quotient of an algebraic space by a free action of a finite group is an algebraic space. The quotient of a scheme by such an action need not be a scheme.

**How the definition helps.** A free finite group action gives an equivalence relation whose two projections are étale (our own). Pulling the relation back to a scheme atlas gives an étale scheme presentation of the quotient (our own). Hironaka’s free involution gives a quotient outside schemes (our own).

**Wikipedia:** [Algebraic space](https://en.wikipedia.org/wiki/Algebraic_space), [Hironaka's example](https://en.wikipedia.org/wiki/Hironaka%27s_example). It says: “the quotient of an algebraic space by a discrete group acting freely is an algebraic space, but the quotient of a scheme by a discrete group acting freely need not be a scheme (even if the group is finite).”

**Sources:**

- [Donald Knutson, Algebraic Spaces, Lecture Notes in Mathematics 203 (1971)](https://doi.org/10.1007/BFb0059750)

### Moduli stacks give fine moduli spaces for objects with automorphisms

**Remember:** A stack remembers the automorphisms that a space would have to forget.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14D22. arXiv math.AG. Level 3: graduate.

**Definition.** A moduli stack assigns each test scheme the groupoid of families and their isomorphisms, with pullbacks, descent for isomorphisms, and effective descent for families.

**Problem.** A groupoid-valued moduli problem with a nontrivial automorphism, such as that of elliptic curves, has no fine moduli scheme representing the full groupoids. Its moduli stack classifies families over S by maps from S, with isomorphisms between families corresponding to isomorphisms between maps.

**How the definition helps.** A scheme represents discrete groupoids, so it cannot represent a groupoid containing a nonidentity automorphism (our own). The stack retains these arrows, and the groupoid form of Yoneda identifies its S-families with maps from S (our own).

**nLab:** [moduli space](https://ncatlab.org/nlab/show/moduli+space), [Deligne-Mumford stack](https://ncatlab.org/nlab/show/Deligne-Mumford+stack), [algebraic stack](https://ncatlab.org/nlab/show/algebraic+stack). It says: “A type of objects that has nontrivial automorphisms cannot have a fine moduli space.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publications Mathématiques de l'IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)

### Quotient stacks remember equivariant cohomology

**Remember:** The quotient stack keeps the stabilisers that the orbit space throws away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14L30, 14F43. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** For a Lie group G acting on X, the quotient stack \[X/G\] assigns to U principal G-bundles over U with equivariant maps to X. Its arrows are bundle isomorphisms over U commuting with those maps.

**Problem.** Let a Lie group G act on a manifold X, not necessarily freely. The cohomology of the quotient stack \[X/G\] is the equivariant cohomology of X.

**How the definition helps.** The action groupoid presents the quotient stack, so its classifying space computes stack cohomology (our own). The bar construction identifies that space up to homotopy with EG ×<sub>G</sub> X, whose cohomology defines Borel equivariant cohomology (our own).

**nLab:** [derived stack](https://ncatlab.org/nlab/show/derived+stack), [quotient stack](https://ncatlab.org/nlab/show/quotient+stack). It says: “The cohomology of the stack is then indeed the equivariant cohomology of the original manifold.”

**Sources:**

- [Jochen Heinloth, Notes on differentiable stacks, Mathematisches Institut, Seminars, Universität Göttingen (2004–05) 1–32](https://math.nyu.edu/~tschinke/WS04/pdf/heinloth.pdf)

### Nilpotents let tangent vectors be maps from the dual numbers

**Remember:** A tangent vector is a point that remembers one first-order direction.

*True by definition.* MSC 14B10 (Infinitesimal methods in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The tangent space at a K-rational point x is the dual of 𝔪/𝔪², where 𝔪 is the maximal ideal of the local ring at x. The dual numbers K\[ε\]/(ε²) have ε² = 0, so maps from them see 𝔪 only modulo 𝔪².

**Problem.** K-maps from Spec K\[ε\]/(ε²) to a K-scheme X correspond to K-rational points equipped with tangent vectors. Every K-morphism therefore induces maps on tangent spaces at corresponding rational points.

**How the definition helps.** A local K-algebra map to K\[ε\]/(ε²) has the form a ↦ a(x) + ελ(a − a(x)), and it respects products exactly when λ is a functional on 𝔪 that kills 𝔪² (our own). Composition then gives the maps on tangent spaces (our own).

**Wikipedia:** [Zariski tangent space](https://en.wikipedia.org/wiki/Zariski_tangent_space). It says: “morphisms from Spec K\[t\]/(t²) to a scheme X over K correspond to a choice of a rational point x ∈ X(k) and an element of the tangent space at x.”

**Sources:** none listed. No primary source with a working link was found.

### Schlessinger's criterion uses hulls instead of representability

**Remember:** A hull covers all deformations and matches them at first order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14D15. arXiv math.AG. Level 3: graduate.

**Definition.** A hull of a deformation functor F on local Artin k-algebras is a complete Noetherian local k-algebra R with a map Hom(R,−) → F. The map must be formally smooth, lifting along surjections, and bijective on the dual numbers k\[ε\]/(ε²).

**Problem.** A deformation functor F has a hull exactly when H1, H2 and H3 hold, where H3 says that the tangent space is finite-dimensional (Schlessinger). F is prorepresentable exactly when H4 holds as well.

**How the definition helps.** A hull asks only for smooth lifting and a match on tangent spaces, not for a bijection on every Artin algebra (our own). So Schlessinger can give a hull exactly under H1–H3, while full prorepresentability needs the extra uniqueness condition H4 (our own).

**nLab:** [deformation functor](https://ncatlab.org/nlab/show/deformation+functor). It says: “The main theorem of Schlessinger's paper says that (H1), (H2), and (H3) are satisfied if and only if F has a hull.”

**Sources:**

- [Michael Schlessinger, Functors of Artin rings, Transactions of the American Mathematical Society 130 (1968) 208–222](https://doi.org/10.1090/S0002-9947-1968-0217093-3)

### Defining supported cohomology as a mapping fiber makes the localization sequence automatic

**Remember:** A mapping fiber always comes with its long exact sequence.

*True by definition. Confidence: medium.* MSC 14B15 (Local cohomology and algebraic geometry), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** Let Z be closed in X with open complement U, and let ℱ be a sheaf of abelian groups on X. The supported cohomology complex is the mapping fiber of restriction RΓ(X,ℱ) → RΓ(U,ℱ\|U), that is, its cone shifted by −1.

**Problem.** Cohomology with support in Z fits in a long exact sequence with the cohomology of X and of U. In derived terms, the three form a distinguished triangle.

**How the definition helps.** Every mapping fiber sits in a distinguished triangle with the map’s source and target, so the long exact sequence comes for free (our own). The real work is showing that this fiber is the derived functor of sections supported in Z (our own). On an injective sheaf, restriction to U is onto, so the kernel already computes the fiber (our own).

**Paper or page:** [Cohomology, Lemma 20.34.5](https://stacks.math.columbia.edu/tag/0G71). It says: “There is a distinguished triangle”

**Sources:** none listed. No primary source with a working link was found.

### Defining smoothness by lifting makes base change stability automatic

**Remember:** Lift across every affine nilpotent thickening and require local finite presentation.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14B10. arXiv math.AG. Level 3: graduate.

**Definition.** An S-scheme X is smooth if it is locally of finite presentation and lifts along nilpotent thickenings. That is, for every affine S-scheme T and closed subscheme T₀ cut out by a nilpotent ideal, every S-map T₀ → X extends to T.

**Problem.** Smooth morphisms are stable under base change and composition.

**How the definition helps.** After base change, lift the X-component and pair it with the given map to the new base (our own). For a composite, lift first to the intermediate scheme, then over that lift to the source (our own). Local finite presentation is stable under both operations (our own).

**Wikipedia:** [Smooth morphism](https://en.wikipedia.org/wiki/Smooth_morphism), [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “One can define smoothness without reference to geometry.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, quatrième partie, Publications Mathématiques de l'IHÉS 32 (1967)](https://doi.org/10.1007/BF02732123)

### Flatness keeps fibre dimension and Hilbert polynomial constant in families

**Remember:** Flat means tensoring with every stalk keeps injections injective.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14D05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A morphism f from X to S is flat if 𝒪<sub>X</sub>,x is flat over 𝒪<sub>S</sub>,f(x) for every x ∈ X. An A-module is flat if tensoring with it preserves every injection of A-modules.

**Problem.** For flat morphisms of locally Noetherian schemes, the local dimension at x is the base local dimension plus the fibre local dimension. In a flat projective family with fixed relative polarization over a connected locally Noetherian base, all fibres have the same Hilbert polynomial, hence the same degree and arithmetic genus.

**How the definition helps.** The dimension formula for flat local maps gives the first equality (our own). The Hilbert polynomial theorem for projective flat families gives local constancy, and connectedness then gives one polynomial (our own). Its coefficients determine degree and arithmetic genus (our own).

**Wikipedia:** [Flat morphism](https://en.wikipedia.org/wiki/Flat_morphism). It says: “Another non-example of a flat morphism is a blowup since a flat morphism necessarily has equi-dimensional fibers.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Open immersions are exactly the universally injective étale morphisms

**Remember:** Étale and injective after every base change means an open subscheme.

*Rules out counterexamples.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A morphism is étale if it is flat, locally of finite presentation, and its fibres are disjoint unions of spectra of finite separable field extensions. It is universally injective if it stays injective on points after every base change. For an étale map, this rules out residue field extensions of degree above one (our own).

**Problem.** A morphism of schemes is an open immersion exactly when it is étale and universally injective. It is also one exactly when it is a flat monomorphism, locally of finite presentation.

**How the definition helps.** An étale universally injective map has a diagonal that is a surjective open immersion, hence an isomorphism, so it is a monomorphism, injective on T-valued points for every T (our own). A flat monomorphism locally of finite presentation is an open immersion, and every open immersion has all these properties (our own).

**Paper or page:** [Stacks Project, Etale, Theorem 41.14.1](https://stacks.math.columbia.edu/tag/025G). It says: “Let f : X → Y be a morphism of schemes. The following are equivalent: (1) f is an open immersion, (2) f is universally injective and étale, and (3) f is a flat monomorphism, locally of finite presentation.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 025G (Etale, Theorem 41.14.1)](https://stacks.math.columbia.edu/tag/025G)

### The étale topology gives algebraic geometry an inverse function theorem

**Remember:** Étale maps are local isomorphisms once étale maps count as neighbourhoods.

*Makes the theorem clean to state or prove.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14F20. arXiv math.AG. Level 3: graduate.

**Definition.** An étale morphism is flat, unramified and locally of finite presentation. A family of étale maps covers its target in the étale topology if their images together contain every point.

**Problem.** For a morphism between smooth varieties over a field, an invertible differential at a geometric point makes the morphism an étale-local isomorphism there. A finite étale morphism becomes a disjoint union of copies of the base étale-locally.

**How the definition helps.** The differential criterion makes the morphism étale near the chosen point (our own). After pulling an étale morphism back along itself, its diagonal is an open section giving a local inverse (our own). The étale splitting theorem trivializes all sheets of a finite étale map on a common étale cover (our own).

**Wikipedia:** [Étale morphism](https://en.wikipedia.org/wiki/%C3%89tale_morphism). It says: “However, there is no (Zariski-)local inverse of f, just because the square root is not an algebraic map, not being given by polynomials. However, there is a remedy for this situation, using the étale topology.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Mathematics 224 (1971)](https://doi.org/10.1007/BFb0058656)

### Unique lifts cancel formally unramified maps from formally étale composites

**Remember:** Étale means exactly one lift; unramified means at most one.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 13B40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A lifting problem for X → Y gives a square-zero closed immersion T ⊂ T′, a map T → X and a map T′ → Y agreeing on T, and asks for a Y-map T′ → X extending T → X. The map is formally étale if every lifting problem has exactly one solution, and formally unramified if it has at most one.

**Problem.** Let X → Y → Z be maps of schemes. If Y → Z is formally unramified and X → Z is formally étale, then X → Y is formally étale.

**How the definition helps.** Given a problem over Y, compose to Z and use formal étaleness of X → Z to get a lift T′ → X (our own). Its composite T′ → Y agrees with the given one on T and over Z, so formal unramifiedness of Y → Z makes them equal (our own). A second lift over Y would be a second lift over Z, so the lift is unique (our own).

**nLab:** [formally étale morphism](https://ncatlab.org/nlab/show/formally+%C3%A9tale+morphism). It says: “If there exists at most one such extension, it is called a formally unramified morphism. The formally étale morphisms are precisely those that are both formally smooth and formally unramified.”

**Paper or page:** [Spaces More Morphisms, Lemma 76.13.8](https://stacks.math.columbia.edu/tag/04G5). It says: “If b ∘ a is formally étale then a is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 76.13.8, Tag 04G5](https://stacks.math.columbia.edu/tag/04G5)
- [The Stacks Project, Lemma 37.8.9, Tag 02HM](https://stacks.math.columbia.edu/tag/02HM)

### Unique lifts split formal étaleness into formal smoothness and formal unramifiedness

**Remember:** Exactly one lift is at least one lift and at most one lift.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 13B40. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** For every square-zero closed immersion of affine schemes T ⊂ T′, take a Y-map T → X and a compatible map T′ → Y. A lift is a Y-map T′ → X extending the first map. Formal smoothness requires existence, formal unramifiedness requires uniqueness whenever lifts exist, and formal étaleness requires exactly one lift in every diagram.

**Problem.** A map of schemes is formally étale exactly when it is formally smooth and formally unramified.

**How the definition helps.** In each diagram, exactly one lift exists precisely when at least one exists and at most one exists.

**nLab:** [formally étale morphism](https://ncatlab.org/nlab/show/formally+%C3%A9tale+morphism). It says: “If there exists at least one such infinitesimal extension, it is called a formally smooth morphism. If there exists at most one such extension, it is called a formally unramified morphism.”

**Paper or page:** [More Morphisms, Lemma 37.11.4](https://stacks.math.columbia.edu/tag/02HH). It says: “Then f is formally étale if and only if f is formally smooth and formally unramified.”

**Sources:**

- [The Stacks Project, Lemma 37.11.4, Tag 02HH](https://stacks.math.columbia.edu/tag/02HH)
- [The Stacks Project, Lemma 37.8.9, Tag 02HM](https://stacks.math.columbia.edu/tag/02HM)
- [The Stacks Project, Lemma 37.11.7, Tag 02H6](https://stacks.math.columbia.edu/tag/02H6)
- [The Stacks Project, Lemma 37.6.8, Tag 02HE](https://stacks.math.columbia.edu/tag/02HE)

### Unramified with finite type only makes every closed immersion unramified

**Remember:** Finite type and zero differentials suffice, while G-unramified also requires finite presentation.

*True by definition.* MSC 14B25 (Local structure of morphisms in algebraic geometry: étale, flat, etc.), 14A15, 13N05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A scheme morphism is unramified if it is locally of finite type and its sheaf of relative differentials vanishes. A G-unramified morphism also has local finite presentation.

**Problem.** With this definition, every closed immersion is unramified. Under the EGA definition, a closed immersion is unramified only when its ideal sheaf is of finite type.

**How the definition helps.** Locally a closed immersion comes from a quotient A → A/I, which needs no algebra generators and has zero relative differentials (our own). This quotient has finite presentation over A exactly when I is finitely generated.

**Wikipedia:** [Unramified morphism](https://en.wikipedia.org/wiki/Unramified_morphism). It says: “an unramified morphism is a morphism f: X → Y of schemes such that (a) it is locally of finite presentation and (b)”

**Paper or page:** [Stacks Project, Morphisms, Lemma 29.35.8](https://stacks.math.columbia.edu/tag/02GC). It says: “A closed immersion i : Z → X is unramified. It is G-unramified if and only if the associated quasi-coherent sheaf of ideals … is of finite type (as an 𝒪ₓ-module).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 02GC (Morphisms, Lemma 29.35.8)](https://stacks.math.columbia.edu/tag/02GC)
- [M. Raynaud, Anneaux locaux henséliens, Lecture Notes in Mathematics 169, Springer (1970)](https://doi.org/10.1007/bfb0069571)

### Flat subschemes with fixed Hilbert polynomial form the Hilbert functor

**Remember:** Classify flat families of closed subschemes with fixed Hilbert polynomial.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C05 (Parametrization (Chow and Hilbert schemes)), 14D20. arXiv math.AG. Level 3: graduate.

**Definition.** Fix projective space over a field and a polynomial P. The Hilbert functor assigns each base scheme T the flat, finitely presented closed subschemes of projective space over T with fibrewise Hilbert polynomial P.

**Problem.** Grothendieck showed that this functor is represented by a projective scheme. So every flat family of subschemes is pulled back from one universal family.

**How the definition helps.** Grothendieck’s theorem gives a projective scheme H representing the functor, and its identity map corresponds to a universal family. Every flat family over T is then the pullback along its map T → H. Flatness allows nonreduced fibres, such as the double point formed when two points collide (our own example).

**Wikipedia:** [Hilbert scheme](https://en.wikipedia.org/wiki/Hilbert_scheme). It says: “H is universal with respect to all flat families of subschemes of X having Hilbert polynomial P.”

**Sources:**

- [Alexander Grothendieck, Techniques de construction et théorèmes d'existence en géométrie algébrique IV, les schémas de Hilbert, Séminaire Bourbaki 6 (1960–1961), exposé 221](http://www.numdam.org/item/SB_1960-1961__6__249_0/)

### Pure motives are the universal target of Weil cohomologies

**Remember:** A motive is a variety cut into pieces by idempotent correspondences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives). arXiv math.AG. Level 3: graduate.

**Definition.** A rational Chow motive (X,p) is a smooth projective variety X of pure dimension d with a projector p. Here p is a rational Chow class of codimension d on X × X with p ∘ p = p under composition of correspondences. Finite direct sums and integer Tate twists of such pairs are also motives, and maps between motives are correspondences.

**Problem.** Every Weil cohomology of smooth projective varieties factors through rational Chow motives, uniquely up to canonical isomorphism compatibly with its action on correspondences.

**How the definition helps.** Every Weil cohomology lets correspondences act through the cycle class map, so it can send (X,p) to the image of p acting on the cohomology of X (our own). A Tate twist goes to the matching cohomological twist. These rules fix the realization functor up to canonical isomorphism.

**nLab:** [pure motive](https://ncatlab.org/nlab/show/pure+motive), [motive](https://ncatlab.org/nlab/show/motive), [Chow motive](https://ncatlab.org/nlab/show/Chow+motive). It says: “such that every good cohomology theory factors through the functor M.”

**Sources:**

- [Tony Scholl, Classical motives, in: Motives, Seattle 1991, Proc. Symp. Pure Math. 55 part 1 (1994) 163–187](https://www.dpmms.cam.ac.uk/~ajs1005/preprints/classical_motives.pdf)
- [James S. Milne, Motives — Grothendieck's Dream (2012)](https://www.jmilne.org/math/xnotes/MOT.pdf)

### Rational equivalence makes Chow groups match K-theory rationally

**Remember:** Identify cycles differing by sums of divisors of rational functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14C35, 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** The Chow group is algebraic cycles, finite integer sums of subvarieties, modulo rational equivalence. A cycle is rationally equivalent to zero when it is a sum of divisors of rational functions on subvarieties one dimension higher.

**Problem.** For a smooth quasi-projective scheme X over a field, the Chern character identifies K₀(X) ⊗ ℚ with CH\*(X) ⊗ ℚ.

**How the definition helps.** Rational equivalence is the relation K-theory already imposes: the divisor of a function f on W is the leading term of the class of 𝒪<sub>W</sub>/f, which is zero in K₀ (our own). The Chern character, made an isomorphism rationally by Riemann–Roch for smooth X, then gives the identification.

**Wikipedia:** [Chow group](https://en.wikipedia.org/wiki/Chow_group). It says: “This isomorphism shows the importance of rational equivalence, compared to any other adequate equivalence relation on algebraic cycles.”

**Sources:**

- [Armand Borel, Jean-Pierre Serre, Le théorème de Riemann-Roch, Bulletin de la Société Mathématique de France (1958) 97–136](https://doi.org/10.24033/bsmf.1500)

### Ampleness through powers can be tested by intersection numbers

**Remember:** Take effective curves, identify equal degrees, and close their cone.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14C17. arXiv math.AG. Level 3: graduate.

**Definition.** The closed cone of curves of a projective scheme is the closure of the cone spanned by effective curves, in the real space of curve classes. Two curves give the same class when every line bundle has the same degree on them.

**Problem.** On a projective scheme, a line bundle is ample exactly when it is positive on every nonzero class in the closed cone of curves (Kleiman). So ampleness depends only on the degrees of the bundle on curves.

**How the definition helps.** Degree is a linear function on this space, so positivity on the cone depends only on degrees on curves (our own). Kleiman’s criterion says that strict positivity on its nonzero classes is equivalent to ampleness.

**Wikipedia:** [Ample line bundle](https://en.wikipedia.org/wiki/Ample_line_bundle). It says: “An ample line bundle on a projective variety X has positive degree on every curve in X. The converse is not quite true, but there are corrected versions of the converse, the Nakai–Moishezon and Kleiman criteria for ampleness.”

**Sources:**

- [Steven L. Kleiman, Toward a numerical theory of ampleness, Annals of Mathematics 84 (1966) 293–344](https://doi.org/10.2307/1970447)

### Asking relative divisors to be flat lets them restrict to fibres

**Remember:** Flat over the base, so every fibre gets a divisor.

*Rules out counterexamples. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** A relative effective Cartier divisor for X → S is a closed subscheme D of X cut out locally by one non-zero-divisor, such that D is flat over S. Flatness keeps the local equation a non-zero-divisor after any base change.

**Problem.** Let D be a relative effective Cartier divisor for X → S. After any base change S′ → S, the pullback of D is again an effective Cartier divisor, so D restricts to a divisor on each fibre.

**How the definition helps.** Flatness of D keeps the sequence 0 → 𝒪(−D) → 𝒪<sub>X</sub> → 𝒪<sub>D</sub> → 0 exact after base change, so the pulled-back equation is still a non-zero-divisor (our own). Without flatness this fails: over the x-axis, the divisor x = 0 in the plane has equation zero on the fibre over 0 (our own).

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “A relative effective Cartier divisor for X over S is an effective Cartier divisor D on X which is flat over S.”

**Sources:** none listed. No primary source with a working link was found.

### Defining twists as tensor powers of 𝒪(1) makes their degrees add

**Remember:** Twists are powers of 𝒪(1), so exponents add.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** On projective space, define 𝒪(n) as the nth tensor power of the line bundle 𝒪(1), using the dual of 𝒪(1) for negative n.

**Problem.** On projective space, 𝒪(a) ⊗ 𝒪(b) ≅ 𝒪(a + b) for all integers a and b.

**How the definition helps.** Then 𝒪(a) ⊗ 𝒪(b) has a + b factors of 𝒪(1) after cancelling copies of 𝒪(1) against its dual, a tensor inverse because 𝒪(1) is a line bundle (our own). The work moves into the Stacks Project comparison: this tensor power agrees with the graded shift of the polynomial ring when degree-one elements cover the space.

**Wikipedia:** [Coherent sheaf](https://en.wikipedia.org/wiki/Coherent_sheaf). It says: “We can also find that the tensor product of the line bundles 𝒪ₓ(a) ⊗ 𝒪ₓ(b) ≅ 𝒪ₓ(a+b)”

**Paper or page:** [Constructions, Lemma 27.10.3](https://stacks.math.columbia.edu/tag/01MT). It says: “In particular, these maps induce isomorphisms 𝒪ₓ(1)⊗ⁿ ≅ 𝒪ₓ(n)”

**Sources:** none listed. No primary source with a working link was found.

### Defining zero schemes by test maps makes them commute with pullback

**Remember:** A map lands in the zero scheme when it kills the section.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The zero scheme Z(s) of a section s of a line bundle ℒ on X is defined by test maps: a map f into X factors through Z(s) exactly when the pullback f\*s is zero.

**Problem.** Take any map f from Y to X. The zero scheme of f\*s is the fiber product of Y with Z(s) over X.

**How the definition helps.** A map T → Y kills the pullback of f\*s exactly when the composite T → X kills the pullback of s, so both schemes have the same test maps and are equal (our own). The work moves into showing that the local equations of s cut out a closed subscheme with this property, also for test schemes with nilpotents (Stacks Project, Divisors, Lemma 31.14.9).

**Paper or page:** [Divisors, Lemma 31.14.9](https://stacks.math.columbia.edu/tag/02OR). It says: “we have f∗s = 0 in Γ(Y, f∗ℒ) if and only if f factors through Z(s).”

**Sources:** none listed. No primary source with a working link was found.

### Determinants give hypersurface adjunction

**Remember:** Ambient top forms equal top forms of D times the conormal line.

*True by definition.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 32L05. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** The canonical bundle is the line bundle of top-degree holomorphic forms, the determinant of the cotangent bundle. For a smooth hypersurface D, the conormal bundle, functions vanishing on D modulo products of two such, is the line bundle 𝒪(−D) restricted to D.

**Problem.** Let D be a smooth hypersurface in a complex manifold X. Its canonical bundle is the restriction to D of the ambient canonical bundle tensored with the line bundle of D.

**How the definition helps.** Determinants multiply along exact sequences, so the conormal sequence 0 → 𝒪(−D)\|<sub>D</sub> → Ω<sub>X</sub>\|<sub>D</sub> → Ω<sub>D</sub> → 0 gives K<sub>X</sub>\|<sub>D</sub> ≅ 𝒪(−D)\|<sub>D</sub> ⊗ K<sub>D</sub> (our own). Moving the conormal factor across gives K<sub>D</sub> ≅ (K<sub>X</sub> ⊗ 𝒪(D))\|<sub>D</sub>.

**Wikipedia:** [Adjunction formula](https://en.wikipedia.org/wiki/Adjunction_formula). It says: “The conormal bundle I/I² is i\*O(−D), which, combined with the formula above, gives”

**Paper or page:** [Lipschitz geometry of complex surface germs via inner rates of primary ideals](https://arxiv.org/abs/2407.14265v2). It says: “Let S be a complex surface and C ⊂ S be a compact Riemann surface embedded in S.”

**Sources:** none listed. No primary source with a working link was found.

### Factorial schemes make Weil divisors and Cartier divisors the same

**Remember:** Unique factorization gives every codimension-one prime one local equation.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14M05, 14C22. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A Noetherian scheme is locally factorial when every local ring is a unique factorization domain, so every height-one prime is principal. Then each prime divisor, an integral closed subscheme of codimension one, has one local equation, so every Weil divisor is Cartier.

**Problem.** On a locally factorial Noetherian scheme, every Weil divisor is locally principal. So if the scheme is integral and separated, its divisor class group equals its Picard group, which can fail on singular schemes.

**How the definition helps.** In a unique factorization domain each height-one prime has one generator, and a product of powers of these generators is a local equation for any Weil divisor. On an integral separated scheme, Cartier divisors modulo principal ones classify line bundles (our own). On the quadric cone xy = z², the line x = z = 0 is not Cartier (our own).

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “On singular varieties, this property can also fail, and so one has to distinguish between codimension-1 subvarieties and varieties which can locally be defined by one equation.”

**Sources:** none listed. No primary source with a working link was found.

### Removing codimension-two sets keeps divisor classes, so canonical divisors exist

**Remember:** Divisors only see codimension one, so small bad sets do not matter.

*Makes the theorem clean to state or prove.* MSC 14C20 (Divisors, linear systems, invertible sheaves), 14M05. arXiv math.AG. Level 3: graduate.

**Definition.** On a normal variety X, the class group Cl(X) is integer sums of prime divisors, the codimension-one subvarieties, modulo divisors of nonzero rational functions. It sees only codimension-one points and the function field, which do not change when a set of codimension two is removed.

**Problem.** For a closed subset Z of codimension at least two in a normal variety X, restriction identifies Cl(X) with Cl(X − Z). Over a perfect field, the canonical class of the smooth locus therefore extends uniquely to X.

**How the definition helps.** Removing Z of codimension at least two keeps every prime divisor, its local ring and the function field, so restriction is a bijection on divisors and on principal relations (our own). Over a perfect field a normal variety is smooth in codimension one, so the singular locus has codimension at least two and the canonical class extends.

**Wikipedia:** [Divisor (algebraic geometry)](https://en.wikipedia.org/wiki/Divisor_%28algebraic_geometry%29). It says: “If Z has codimension at least 2 in X, then the restriction Cl(X) → Cl(X − Z) is an isomorphism.”

**Sources:**

- [Oscar Zariski, Some results in the arithmetic theory of algebraic varieties, American Journal of Mathematics 61 (1939) 249–294](https://doi.org/10.2307/2371499)

### Treating Cartier divisors as line bundles with sections makes sums tensor products

**Remember:** Multiplying local equations is tensoring their sections.

*True by definition. Confidence: medium.* MSC 14C20 (Divisors, linear systems, invertible sheaves). arXiv math.AG. Level 3: graduate.

**Definition.** View an effective Cartier divisor D as a line bundle 𝒪(D) with a section whose local equations are non-zero-divisors, up to isomorphism preserving the section. The sum D₁ + D₂ is then the tensor product of the bundles, with the product of the sections.

**Problem.** For effective Cartier divisors D₁ and D₂, exactly one isomorphism 𝒪(D₁) ⊗ 𝒪(D₂) ≅ 𝒪(D₁ + D₂) carries their tensor section to the canonical section.

**How the definition helps.** Under this view the tensor product of the two pairs is the pair for D₁ + D₂, which gives the isomorphism (our own). It is unique because a local unit u with u·s = s must be 1, as the local equation s is a non-zero-divisor (our own).

**Paper or page:** [Divisors, Lemma 31.14.4](https://stacks.math.columbia.edu/tag/02OP). It says: “Let D = D₁ + D₂. Then there is a unique isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Properness algebraizes holomorphic line bundles

**Remember:** Proper means compact analytically, and compactness is where GAGA works.

*Rules out counterexamples.* MSC 14C22 (Picard groups), 32L05. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** A complex variety is proper exactly when its analytic space, the same space with holomorphic functions allowed in place of regular ones, is compact.

**Problem.** Every holomorphic line bundle on the analytic space of a proper complex variety comes from an algebraic line bundle. This fails on the product of two punctured complex lines.

**How the definition helps.** Proper GAGA turns holomorphic line bundles on a compact analytic space into algebraic ones. On (ℂ\*)², algebraic line bundles are trivial because the Laurent polynomial ring is factorial (our own). Analytic line bundles there form H²((ℂ\*)², ℤ) ≅ ℤ, by Cartan’s theorem B and the exponential sequence (our own).

**nLab:** [GAGA](https://ncatlab.org/nlab/show/GAGA). It says: “Typically GAGA-type theorems hold for proper (compact) varieties, but not for non-proper varieties.”

**Sources:**

- [Jean-Pierre Serre, Géométrie algébrique et géométrie analytique (1956), Théorèmes 2 and 3](https://doi.org/10.5802/aif.59)

### The relative Picard functor divides out line bundles from the base

**Remember:** Divide out line bundles from the base, because they vanish locally there.

*Rules out counterexamples.* MSC 14C22 (Picard groups), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The relative Picard functor of f: X → S sends an S-scheme T to the line bundles on X<sub>T</sub> = X ×<sub>S</sub> T modulo those pulled back from T, and then sheafifies in the fppf topology.

**Problem.** The functor T ↦ Pic(X<sub>T</sub>) can fail to be a sheaf and hence fail to be representable. For projective flat families of finite presentation with geometrically integral fibres over a locally Noetherian base, the relative Picard functor is representable by a scheme.

**How the definition helps.** When X = S, a nontrivial line bundle on T becomes trivial on a cover, so the naive functor T ↦ Pic(X<sub>T</sub>) breaks the sheaf condition (our own). Dividing out pulled-back bundles and sheafifying removes this failure. Grothendieck’s Picard scheme theorem then gives representability under the stated hypotheses.

**nLab:** [Picard scheme](https://ncatlab.org/nlab/show/Picard+scheme). It says: “has no hope of being representable as it is not even a sheaf.”

**Sources:**

- [Steven L. Kleiman, The Picard scheme, in: Fundamental Algebraic Geometry: Grothendieck's FGA Explained, AMS (2005); arXiv:math/0504020](https://arxiv.org/abs/math/0504020)

### Viewing line bundles as unit torsors makes H¹ of units classify them

**Remember:** First cohomology of the units records how local frames glue.

*True by definition. Confidence: medium.* MSC 14C22 (Picard groups), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** The frame sheaf of a line bundle sends each open set to the bases of the bundle there. It is an 𝒪\*-torsor: it has sections locally, and any two frames on the same open set differ by a unique unit.

**Problem.** Isomorphism classes of line bundles on a scheme X match the elements of H¹(X, 𝒪\*), the first sheaf cohomology of the units. This group is the Picard group of X.

**How the definition helps.** So line bundles are 𝒪\*-torsors, and for any abelian sheaf ℋ, ℋ-torsors up to isomorphism match H¹(X, ℋ) (Stacks Project, Cohomology, Lemma 20.4.3). A torsor gives back its line bundle by gluing copies of 𝒪 along the units, so frames and bundles determine each other (our own).

**Paper or page:** [Cohomology, Lemma 20.4.3](https://stacks.math.columbia.edu/tag/02FQ). It says: “There is a canonical bijection between the set of isomorphism classes of ℋ-torsors and H¹(X, ℋ).”

**Sources:** none listed. No primary source with a working link was found.

### Admissible faces make boundaries square-zero

**Remember:** Test every face, so faces of faces stay allowed.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** A codimension-r cycle on X × Δⁿ, with Δⁿ the algebraic simplex whose coordinates sum to one, is allowed when it meets X × F in codimension at least r for every face F. A face sets some coordinates to zero, and testing all faces, not only the facets, keeps restrictions allowed.

**Problem.** On a smooth variety X over a field, the boundary is the alternating sum of restrictions to the faces of codimension one. It maps allowed cycles to allowed cycles, and applying it twice gives zero.

**How the definition helps.** A face of a face is a face, so the restriction of an allowed cycle to a facet is again allowed, and the boundary stays in the complex. Each double restriction appears twice with opposite signs, so the boundary squared is zero. Our own example: for X a point, the line t₁ + t₂ = 0 in Δ² meets each edge properly but passes through a vertex, so its restriction to the edge t₁ = 0 is not allowed.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “the subgroup generated by closed subvarieties that intersect properly with X × F for each face F of Δᑫ.”

**Sources:**

- [Spencer Bloch, Algebraic cycles and higher K-theory (1986)](https://doi.org/10.1016/0001-8708(86)90081-2)

### Higher Chow groups extend localization

**Remember:** Bound dimension on every face, then take homology of alternating face restrictions.

*Makes the theorem clean to state or prove.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** For a quasi-projective variety X over a field, the higher Chow groups are the homology of Bloch’s chain complex. In degree n it has cycles of dimension r+n on X × Δⁿ meeting each X × F in dimension at most r + dim F, for every simplex face F, with the alternating sum of face restrictions as boundary.

**Problem.** Let Z be closed in X and let U be its complement. The higher Chow groups of Z, X and U form a long exact sequence for each r. Degree zero recovers localization for ordinary Chow groups.

**How the definition helps.** Cycles supported on Z form a subcomplex, so dividing by it gives a long exact sequence in homology (our own). Bloch’s localization theorem says that this quotient computes the higher Chow groups of U. In degree zero the sequence is the ordinary one CH(Z) → CH(X) → CH(U) → 0.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “it yields the long exact sequence for higher Chow groups (called the localization sequence).”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)
- [Spencer Bloch, Algebraic cycles and higher K-theory (1986)](https://doi.org/10.1016/0001-8708(86)90081-2)

### Motivic maps pull higher cycles back

**Remember:** Precompose with the map of motives to pull a class back.

*True by definition.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 3: graduate.

**Definition.** For a smooth variety X over a perfect field, motivic cohomology Hᵖ(X, ℤ(q)) is the group of maps from the motive M(X) to ℤ(q)\[p\]. A comparison theorem identifies this group with the higher Chow group CHᵠ(X, 2q−p).

**Problem.** Every morphism between smooth schemes over a perfect field induces a functorial pullback on higher Chow groups. The pullback preserves codimension and degree.

**How the definition helps.** A morphism X → Y gives a map of motives M(X) → M(Y), and composing with it pulls classes back with p and q unchanged. The comparison theorem moves this pullback to higher Chow groups. Naive pullback of cycles fails (our own): pulling the origin of the line back along its own inclusion gives the whole point, so codimension drops from one to zero.

**Wikipedia:** [Bloch's higher Chow group](https://en.wikipedia.org/wiki/Bloch%27s_higher_Chow_group). It says: “whenever Y is smooth, any map to Y is contravariant.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Opposite filtrations split Hodge–Tate fibers

**Remember:** Opposite weight and Hodge steps pick one lift of each grade.

*True by definition. Confidence: medium.* MSC 14C30 (Transcendental methods, Hodge theory (algebro-geometric aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** A mixed Hodge–Tate structure has an increasing weight filtration W and a decreasing Hodge filtration F, with only even weight quotients. On the quotient of weight 2p, the Hodge step Fᵖ is everything and Fᵖ⁺¹ is zero. Hence the complex subspace W₂ₚ ∩ Fᵖ covers that quotient and meets lower weights only in zero (our own).

**Problem.** Projection maps W₂ₚ ∩ Fᵖ isomorphically onto the weight quotient of weight 2p. These subspaces split the weight filtration over ℂ, and maps of mixed Hodge–Tate structures preserve the splitting.

**How the definition helps.** The two facts in the definition make projection from W₂ₚ ∩ Fᵖ to the weight-2p quotient onto and injective, so these subspaces split W over ℂ (our own). Maps preserve both filtrations, hence each intersection, so they preserve the splitting (our own).

**Wikipedia:** [Mixed Hodge structure](https://en.wikipedia.org/wiki/Mixed_Hodge_structure). It says: “are pure Hodge structures of weight k.”

**Sources:** none listed. No primary source with a working link was found.

### Pure weights stop later differentials

**Remember:** Different pure weights cannot exchange differentials.

*True by definition.* MSC 14C30 (Transcendental methods, Hodge theory (algebro-geometric aspects)). arXiv math.AG. Level 3: graduate.

**Definition.** A pure Hodge structure of weight w is a real vector space whose complexification splits into pieces Hᵃᵇ with a + b = w, swapped by complex conjugation. In a mixed Hodge complex, the nth cohomology of the weight-graded piece m is pure of weight m + n, and a Hodge morphism between pure structures of different weights is zero.

**Problem.** For a mixed Hodge complex, the weight spectral sequence degenerates at page two: every differential from page two onward vanishes.

**How the definition helps.** Deligne shows that the differentials are Hodge morphisms and that E₂ in position (p,q) is pure of weight q. For r ≥ 2, the differential dᵣ goes to a term of weight q + 1 − r, a different weight, so it vanishes and purity persists (our own).

**Paper or page:** [Variation of mixed Hodge structure and its applications](https://arxiv.org/abs/2304.00672). It says: “The spectral sequence associated to (K𝒪, W) degenerates at E₂-terms.”

**Sources:** none listed. No primary source with a working link was found.

### Integral lattices ensure finite monodromy in type (0, 0)

**Remember:** A lattice has finitely many vectors of each length.

*Rules out counterexamples. Confidence: medium.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 32G20. arXiv math.AG. Level 3: graduate.

**Definition.** A polarized integral variation of Hodge structure of type (0, 0) is a local system of rational vector spaces, with one Hodge component, whose monodromy preserves a positive definite form and a full lattice in each fibre.

**Problem.** A polarized integral variation of type (0, 0) on a connected complex manifold has finite monodromy. With rational coefficients alone, the monodromy group can be infinite.

**How the definition helps.** Monodromy then lies in the isometry group of a lattice, which is finite because a lattice has finitely many vectors of each length (our own). Without the lattice it fails: on an elliptic curve, send one loop to the rotation with cosine 3/5 and sine 4/5 and the other to the identity (our own). This rotation preserves the rational form but has infinite order, since its trace 6/5 is not an algebraic integer (our own).

**Paper or page:** [On exact sequences of Hodge theoretic fundamental groups](https://arxiv.org/abs/2503.13307). It says: “Then 𝕍 is of finite monodromy.”

**Sources:** none listed. No primary source with a working link was found.

### Deligne–Mumford stacks are exactly the stacks with unramified diagonal

**Remember:** Discrete, reduced stabilizer groups give an étale cover by a scheme.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** An algebraic stack is Deligne–Mumford if some scheme maps onto it by an étale surjective map. Its diagonal 𝒳 → 𝒳 × 𝒳 records the automorphism groups of objects, so asking it to be unramified asks every stabilizer group to be discrete and reduced.

**Problem.** An algebraic stack is Deligne–Mumford exactly when its diagonal is unramified. Equivalently, the stabilizer at every geometric point is discrete and reduced.

**How the definition helps.** The criterion turns the existence of an étale cover into a check on stabilizer groups, point by point; the hard direction builds the cover by a slicing argument (our own). ‘Reduced’ cannot be dropped: in characteristic p, μₚ is finite but not reduced, and its classifying stack is not Deligne–Mumford (our own example). So the moduli stack of stable curves of genus at least 2, with finite reduced automorphism groups, is Deligne–Mumford (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.3 (Characterization of Deligne–Mumford Stacks)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “Let 𝒳 be an algebraic stack. The following are equivalent: (1) the stack 𝒳 is a Deligne–Mumford; (2) the diagonal 𝒳 → 𝒳 × 𝒳 is unramified; and (3) every point of 𝒳 has a discrete and reduced stabilizer group.”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), theorem titled Characterization of Deligne–Mumford Stacks](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [P. Deligne, D. Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/bf02684599)

### Defining the blowup by a universal property makes it intrinsic

**Remember:** The blowup is the first place where the centre becomes a divisor.

*True by definition.* MSC 14E05 (Rational and birational maps), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** The blowup of X along a closed subscheme with ideal sheaf I is the universal morphism π to X that makes I locally principal, generated by a non-zero-divisor. Every other morphism with this property factors through π in exactly one way.

**Problem.** The blowup of X along a closed subscheme is unique up to unique isomorphism, so it does not depend on coordinates or on an embedding. The blowup of an open subset U is the restriction of the blowup of X over U.

**How the definition helps.** Universal factorization gives inverse maps between any two blowups, unique over X (our own). Whether a test scheme over U makes the ideal invertible does not depend on viewing it over U or over X, so the restriction is the blowup of U (our own).

**Wikipedia:** [Blowing up](https://en.wikipedia.org/wiki/Blowing_up). It says: “From this perspective, a blowup is the universal (in the sense of category theory) way to turn a subvariety into a Cartier divisor.”

**Sources:** none listed. No primary source with a working link was found.

### Asking that local kernels be finitely generated makes coherent sheaves abelian

**Remember:** Every finite list of local sections has finitely generated relations.

*Rules out counterexamples. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18F20. arXiv math.AG. Level 3: graduate.

**Definition.** A sheaf of modules F on a ringed space is coherent if it is locally finitely generated and, for every open U and finite p, every map 𝒪<sub>U</sub>ᵖ → F\|<sub>U</sub> has a locally finitely generated kernel.

**Problem.** On any ringed space, coherent sheaves form an abelian category that is closed under extensions. If two terms of a short exact sequence are coherent, so is the third.

**How the definition helps.** The kernel condition is what survives kernels, cokernels and extensions on any ringed space, so the abelian category and the two-out-of-three property follow (Serre). Finitely presented sheaves lack it outside Noetherian schemes; the nLab notes that even the structure sheaf can fail to be coherent. On Noetherian schemes the two notions agree.

**nLab:** [coherent sheaf](https://ncatlab.org/nlab/show/coherent+sheaf). It says: “this is not true on a general scheme or general analytic space; sometimes even the structure sheaf”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955) 197–278](https://doi.org/10.2307/1969915)

### Local presentations make quasi-coherent modules stay quasi-coherent under pullback

**Remember:** Pullback preserves free modules and quotients by images.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A sheaf of modules on a ringed space is quasi-coherent if locally it is the cokernel of a map between free modules.

**Problem.** For a map of ringed spaces from X to Y, the pullback to X of a quasi-coherent module on Y is quasi-coherent.

**How the definition helps.** Pullback is right exact and sends free modules to free modules, so it sends a local presentation to a local presentation (our own account of the Stacks result).

**Paper or page:** [Modules, Lemma 17.10.4](https://stacks.math.columbia.edu/tag/01BG), [Modules, Lemma 17.16.3](https://stacks.math.columbia.edu/tag/01CC). It says: “The pullback \\(f<sup>\*\\mathcal{G}\\</sup>) of a quasi-coherent \\(\\mathcal{O}<sub>Y</sub>\\)-module is quasi-coherent.”

**Sources:**

- [The Stacks Project, Lemma 17.10.4, Tag 01BG](https://stacks.math.columbia.edu/tag/01BG)
- [The Stacks Project, Lemma 17.16.3, Tag 01CC](https://stacks.math.columbia.edu/tag/01CC)
- [The Stacks Project, Lemma 26.7.3, Tag 01I9](https://stacks.math.columbia.edu/tag/01I9)
- [The Stacks Project, Lemma 26.7.5, Tag 01IB](https://stacks.math.columbia.edu/tag/01IB)

### Čech cochains make cohomology of quasi-coherent sheaves commute with flat base change

**Remember:** Flat tensoring carries cycles and boundaries to the new base.

*True by definition. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 14B25. arXiv math.AG. Level 3: graduate.

**Definition.** For a finite affine cover of a quasi-compact separated scheme, Čech cohomology is the cohomology of the complex of products of sections on intersections of p+1 distinct ordered charts, with the alternating sum of restrictions as differential. Each term uses only sections over affines, which base change tensors with B.

**Problem.** Let B be a flat A-algebra, and let X′ and ℱ′ be the base changes to B. Then Hⁱ(X, ℱ) ⊗ B over A is Hⁱ(X′, ℱ′) for every i.

**How the definition helps.** The Čech complex for X′ is the complex for X tensored with B, and flat tensoring commutes with cohomology (our own). The work moves into the theorem that Čech cohomology equals sheaf cohomology for quasi-coherent sheaves on separated schemes, which rests on vanishing on affines (our own).

**Paper or page:** [Coherent, Lemma 30.5.2](https://stacks.math.columbia.edu/tag/02KH). It says: “Hⁱ(X, ℱ) ⊗ₐ B = Hⁱ(X′, ℱ′).”

**Sources:**

- [Jean-Pierre Serre, Faisceaux algébriques cohérents, Annals of Mathematics 61 (1955)](https://doi.org/10.2307/1969915)

### A full strong exceptional collection makes Dᵇ(X) a derived category of modules

**Remember:** No higher self-extensions, so the endomorphism ring is an ordinary algebra.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 16E35. arXiv math.AG, math.RT. Level 3: graduate.

**Definition.** A full strong exceptional collection is an ordered list E₁,…,Eₘ that generates a k-linear category, with End(Eᵢ) = k, no maps from a later Eⱼ to an earlier Eᵢ, and Hom(Eᵢ, Eⱼ\[t\]) = 0 for all i, j and t ≠ 0. So their sum T has no self-extensions in nonzero degree, and its endomorphisms form an ordinary algebra.

**Problem.** If a smooth projective X over k has a full strong exceptional collection with sum T, then RHom(T,−) identifies Dᵇ(X) with Dᵇ of finitely generated right End(T)-modules. For Beilinson’s collection on ℙⁿ, End(T) is a quiver path algebra with relations.

**How the definition helps.** The sum T generates and has no self-extensions in nonzero degree, so Bondal’s tilting theorem applies (our own). It sends T to the free module End(T) and gives the equivalence.

**nLab:** [exceptional collection](https://ncatlab.org/nlab/show/exceptional+collection). It says: “It is a full exceptional collection if in addition it generates the category.”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “is a strong exceptional collection if in addition, for any ℓ ≠ 0 and any i, j, we have Hom(Eᵢ, Eⱼ\[+ℓ\]) = 0”

**Sources:**

- [A. I. Bondal, Representation of associative algebras and coherent sheaves, Mathematics of the USSR-Izvestiya 34 (1990) 23–42](https://doi.org/10.1070/im1990v034n01abeh000583)
- [A. A. Beilinson, Coherent sheaves on Pⁿ and problems of linear algebra, Functional Analysis and Its Applications 12 (1978) 214–216](https://doi.org/10.1007/bf01681436)

### Fourier–Mukai kernels compose by convolution, so composites stay transforms

**Remember:** Pull, tensor, push, twice, is one pull, tensor, push.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Fourier–Mukai transform with kernel K on X ×<sub>S</sub> Y pulls a complex back from X, tensors it with K, and pushes it forward to Y: M ↦ Rp₂\*(Lp₁\*M ⊗ᴸ K).

**Problem.** Let X,Y,Z be quasi-compact separated schemes over S, with Y flat and X and Z Tor-independent over S. For quasi-coherent derived kernels, the composite transform has a kernel on X ×<sub>S</sub> Z.

**How the definition helps.** Base change and the projection formula merge two pull–tensor–push steps into one on X ×<sub>S</sub> Y ×<sub>S</sub> Z, where pᵢⱼ projects to factors i and j (our own). The composite kernel is Rp₁₃\*(Lp₁₂\*K ⊗ᴸ Lp₂₃\*K′) (our own). The flatness and Tor-independence hypotheses make the base change step valid.

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “Given two kernels K₁ ∈ Dᵇ(X×Y) and K₂ ∈ Dᵇ(Y×Z), the composed functor ΦK₂ ∘ ΦK₁ is also a Fourier-Mukai transform.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.8.3](https://stacks.math.columbia.edu/tag/0FYS). It says: “If X and Z are tor independent over S and Y → S is flat, then Φ<sub>K</sub>′ ∘ Φ<sub>K</sub> = Φ<sub>K</sub>″”

**Sources:**

- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Full exceptional collections make K₀ free, which excludes curves of positive genus

**Remember:** A full exceptional collection is a basis for K₀.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18F30, 18G80. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** A full exceptional collection is an ordered list E₁, …, Eₘ that generates the triangulated category, with no maps of any degree from a later Eⱼ to an earlier Eᵢ. Each Eᵢ is exceptional, Hom(Eᵢ, Eᵢ) = k and Hom(Eᵢ, Eᵢ\[t\]) = 0 for t ≠ 0, so it spans a copy of the derived category of vector spaces, whose K₀ is ℤ.

**Problem.** Let X be smooth projective. If Dᵇ(X) has a full exceptional collection E₁, …, Eₘ, then K₀(X) is the free abelian group on \[E₁\], …, \[Eₘ\]. So a smooth projective complex curve of positive genus has no full exceptional collection.

**How the definition helps.** The collection splits the category into m copies of vector spaces, and K₀ adds over such a splitting, so each piece gives one free generator \[Eᵢ\] (our own). A curve C of positive genus has K₀(C) ≅ ℤ ⊕ Pic(C), which contains the uncountable Jacobian and so is not finitely generated (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “In particular, if X is a smooth projective variety such that Dᵇ(X) has a full exceptional collection E₁,…,Eₘ, then the Grothendieck group of algebraic vector bundles on X is the free abelian group on the classes of these objects”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Kernels make the adjoint of a Fourier–Mukai transform another explicit transform

**Remember:** Adjoin each of pull, tensor, push, and you get a transform back.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Fourier–Mukai transform with kernel K pulls back from X to X × Y, tensors with K, and pushes forward to Y. K is perfect if it is locally a bounded complex of vector bundles, so its dual K∨ = RHom(K, 𝒪) makes tensoring with K∨ adjoint to tensoring with K.

**Problem.** Let Y be flat, proper and Gorenstein over Noetherian S, with relative dualizing complex ω, and X of finite type over S. For a perfect kernel K on X ×<sub>S</sub> Y, the reverse transform with kernel K∨ ⊗ p<sub>Y</sub>\*ω is left adjoint to its transform.

**How the definition helps.** Each of the three steps has a left adjoint, and composing them in reverse order gives pull–tensor–push again (our own). Pullback to X × Y is left adjoint to push forward to Y, and tensoring with K∨ is left adjoint to tensoring with K (our own). Grothendieck duality for the proper projection to X, using the Gorenstein condition, makes push forward twisted by ω left adjoint to pullback from X (our own).

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “Fourier-Mukai transforms always have left and right adjoints, both of which are also kernel transformations.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.8.8](https://stacks.math.columbia.edu/tag/0FYX). It says: “There is a canonical isomorphism Hom<sub>Y</sub>(N, Φ(M)) → Hom<sub>X</sub>(Φ′(N), M) functorial in M”

**Sources:**

- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Resolving the diagonal kernel shows n + 1 line bundles generate Dᵇ(Pⁿ)

**Remember:** Resolve the identity's kernel, and every object resolves the same way.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14N05. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A kernel K on X × X acts on Dᵇ(X) by F ↦ Rp₁\*(K ⊗ᴸ Lp₂\*F), and the structure sheaf of the diagonal acts as the identity. So a resolution of 𝒪\_Δ by kernels E ⊠ G builds every F from copies of E, with coefficients RΓ(F ⊗ G).

**Problem.** On projective space Pⁿ, the line bundles O(−n), …, O(−1), O form a full strong exceptional collection, with no maps between them in nonzero degrees (Beilinson). So every object of Dᵇ(Pⁿ) is built from them by shifts, sums and cones.

**How the definition helps.** Beilinson resolves 𝒪\_Δ on ℙⁿ × ℙⁿ by the kernels 𝒪(−i) ⊠ Ωⁱ(i) for 0 ≤ i ≤ n, so every F is built from the 𝒪(−i), which gives generation (our own). The cohomology of line bundles on ℙⁿ gives the vanishing that makes the collection strong and exceptional (our own).

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “In the derived category Dᵇ(ℙⁿ) the line bundles 𝒪(−n), 𝒪(−n+1), …, 𝒪(−1), 𝒪 form a full strong exceptional collection.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.9.3](https://stacks.math.columbia.edu/tag/0FZ2). It says: “There exists a resolution … → ℰ₂ ⊠ 𝒢₂ → ℰ₁ ⊠ 𝒢₁ → ℰ₀ ⊠ 𝒢₀ → 𝒪\_Δ → 0 where each ℰᵢ and 𝒢ᵢ is a finite locally free 𝒪<sub>X</sub>-module.”

**Sources:**

- [A. A. Beilinson, Coherent sheaves on Pⁿ and problems of linear algebra, Functional Analysis and Its Applications 12 (1978) 214–216](https://doi.org/10.1007/bf01681436)

### The intrinsic Serre functor makes derived equivalent varieties have equal dimension

**Remember:** Equivalences respect Serre functors, and the Serre functor shifts by the dimension.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Serre functor on a k-linear category with finite-dimensional Hom spaces is an autoequivalence S with isomorphisms Hom(A,B) ≅ Hom(B,SA)\*, natural in both objects, where the star is the k-linear dual. It is defined by Hom spaces alone, so every equivalence of categories carries one Serre functor to the other.

**Problem.** If smooth projective varieties X and Y have equivalent bounded derived categories of coherent sheaves, then X and Y have the same dimension.

**How the definition helps.** So an equivalence F from Dᵇ(X) to Dᵇ(Y) commutes with the Serre functors, which Serre duality computes as E ↦ E ⊗ ω\[dim\] (our own). The skyscraper k(x) satisfies S(k(x)) ≅ k(x)\[n\], so P = F(k(x)) satisfies P ⊗ ω<sub>Y</sub>\[m\] ≅ P\[n\] with m = dim Y (our own). Tensoring with a line bundle keeps the degrees where the cohomology sheaves of P live, so n = m (our own).

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “Any autoequivalence F : 𝒜 → 𝒜 commutes with a Serre functor: there is a natural graded isomorphism of functors F ∘ S ⥲ S ∘ F.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### The Serre functor packages Serre duality on a proper Gorenstein scheme

**Remember:** Serre duality for every pair of complexes is one functor.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Serre functor on a triangulated category over a field is an equivalence S with natural isomorphisms Hom(K, L) ≅ Hom(L, S K)\*. On a Gorenstein scheme, one whose local rings have finite injective dimension over themselves, the dualizing complex ω• is locally a shifted line bundle, so tensoring with it is an equivalence on perfect complexes.

**Problem.** Let X be a proper Gorenstein scheme over a field k. Then K ↦ ω• ⊗ K is a Serre functor on perfect complexes, so Hom(K, L) ≅ Hom(L, ω• ⊗ K)\* for all perfect complexes K and L.

**How the definition helps.** The Serre functor packs Serre duality, for every pair of complexes and every degree, into one functor. Grothendieck duality for the map from X to a point supplies ω• and the duality isomorphism, and the Gorenstein condition makes ω• invertible (our own). On a smooth projective variety this functor is E ↦ E ⊗ ω\[n\], as the nLab states.

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “In the derived category of coherent sheaves on a smooth projective variety X, the functor (· ⊗ ω<sub>X</sub>)\[n\] is a Serre functor, in view of Serre-Grothendieck duality, where ω<sub>X</sub> is the canonical sheaf and n is the dimension of X.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.4.1](https://stacks.math.columbia.edu/tag/0FY8). It says: “Then the functor S : D<sub>perf</sub>(𝒪<sub>X</sub>) ⟶ D<sub>perf</sub>(𝒪<sub>X</sub>), K ⟼ S(K) = ω<sub>X•</sub> ⊗ K is a Serre functor.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### The dualizing sheaf extends Serre duality to Cohen–Macaulay schemes

**Remember:** Replace n-forms by the dualizing sheaf, and duality survives mild singularities.

*Makes the theorem clean to state or prove.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 14M05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** For a Cohen–Macaulay scheme X of pure dimension n over a field, the normalized dualizing complex has cohomology only in degree −n, and the dualizing sheaf ω is that one sheaf. On smooth X, ω is the sheaf of top differential forms.

**Problem.** Let X be proper, Cohen–Macaulay and of pure dimension n over a field, with dualizing sheaf ω. For every coherent sheaf E, Hⁱ(X, E) is dual to Extⁿ⁻ⁱ(E, ω), even for singular X such as complete intersections.

**How the definition helps.** Since the dualizing complex is ω\[n\], Grothendieck duality for the proper map to the point gives Hⁱ(X,E)\* ≅ Extⁿ⁻ⁱ(E,ω) in each degree (our own).

**Wikipedia:** [Serre duality](https://en.wikipedia.org/wiki/Serre_duality). It says: “As a first step in generalizing Serre duality, Grothendieck showed that this version works for schemes with mild singularities, Cohen–Macaulay schemes, not just smooth schemes.”

**Sources:**

- [Jean-Pierre Serre, Un théorème de dualité, Commentarii Mathematici Helvetici 29 (1955) 9–26](https://doi.org/10.1007/BF02564268)
- [Robin Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20 (1966)](https://doi.org/10.1007/BFb0080482)

### Coordinate crossings allow small poles

**Remember:** Independent coordinates let each pole face its own integrability test.

*Rules out counterexamples. Confidence: medium.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A divisor ∑ aⱼDⱼ with positive coefficients has simple normal crossings when, near each point, its components are distinct coordinate hyperplanes zⱼ = 0 in suitable local coordinates. Its multiplier ideal consists of the holomorphic f with \|f\|² ∏ⱼ\|zⱼ\|<sup>(−2aⱼ)</sup> locally integrable, a test that splits into one test per coordinate.

**Problem.** A divisor with simple normal crossings has the whole local function ring as its multiplier ideal everywhere exactly when every coefficient is below one.

**How the definition helps.** For f = 1 the integral is a product of one-variable integrals of \|z\|<sup>(−2a)</sup>, each finite exactly when a &lt; 1. Without normal crossings this fails (our own): three lines through the origin of ℂ², each with coefficient ¾, have nontrivial multiplier ideal. After blowing up the origin, the exceptional curve has coefficient 9/4 and Jacobian order 1, and 1 − 9/4 &lt; −1, so the integral diverges.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “measures singularities coming from the fractional parts of D.”

**Sources:** none listed. No primary source with a working link was found.

### Integrability computes resolved multiplier ideals

**Remember:** The change of volume supplies the relative canonical divisor.

*True by definition.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The multiplier ideal of an ideal generated locally by g₁,…,gₘ at c &gt; 0 consists of the holomorphic f with \|f\|²/(∑ⱼ\|gⱼ\|²)ᶜ integrable near each point. An integral can be computed after any change of variables, at the cost of the squared Jacobian.

**Problem.** On a smooth complex variety, resolve the ideal so its pullback has coordinate factors with orders mⱼ. Membership requires ordⱼ(f∘π) + kⱼ ≥ ⌊cmⱼ⌋ along every such divisor, where kⱼ is the vanishing order of the resolution Jacobian.

**How the definition helps.** Changing variables along the resolution multiplies the integrand by the squared Jacobian, so the test becomes one-variable tests along the coordinate divisors (our own). Each converges exactly when ordⱼ(f∘π) + kⱼ − cmⱼ &gt; −1, which for integers is the stated bound. The deep step is the existence of the resolution.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “where the fᵢ are a finite set of local generators of the ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier ideals extend off hypersurfaces

**Remember:** The multiplier condition is exactly the norm condition for extension.

*Makes the theorem clean to state or prove.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** The multiplier ideal 𝒥(φ) of a plurisubharmonic weight φ, an upper semicontinuous function that is subharmonic on complex lines, consists of the local holomorphic f with \|f\|² exp(−2φ) locally integrable. This finite weighted L² norm is the input and the output of the Ohsawa–Takegoshi extension theorem.

**Problem.** On a smooth hypersurface Y where the restricted weight is not identically minus infinity on any component, every multiplier ideal germ extends locally. Its extension belongs to the multiplier ideal on the ambient complex manifold.

**How the definition helps.** Ohsawa–Takegoshi extends a holomorphic function on Y with finite weighted L² norm to one on the ambient manifold with finite norm, so 𝒥(φ\|<sub>Y</sub>) ⊂ 𝒥(φ)\|<sub>Y</sub>. A definition by vanishing orders would instead need comparing resolutions on two different spaces (our own).

**Paper or page:** [Analyticity theorems for parameter-dependent plurisubharmonic functions](https://arxiv.org/abs/2405.07786v1). It says: “\\mathcal{I} (\\varphi \|<sub>Y</sub>) \\subset \\mathcal{I} (\\varphi ) \|<sub>Y</sub> .”

**Sources:**

- [T. Ohsawa and K. Takegoshi, On the extension of L² holomorphic functions (1987)](https://doi.org/10.1007/BF01166457)
- [J.-P. Demailly, L. Ein and R. Lazarsfeld, A subadditivity property of multiplier ideals (2000)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/subaddmult.pdf)

### Compact direct images sum traces

**Remember:** Push a trace function forward by summing it over each fiber.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies). arXiv math.AG. Level 3: graduate.

**Definition.** For a bounded constructible ℓ-adic complex K on a variety over a finite field, with ℓ not the characteristic, the trace function sends each rational point x to the alternating sum of the traces of geometric Frobenius on the stalk cohomology of K at x.

**Problem.** Let f be a morphism of varieties over a finite field and K such a complex on its source. At each rational point y, the trace of Rf!K equals the sum of trace values of K over rational points above y. This holds over every finite extension.

**How the definition helps.** The trace function uses only stalks, and proper base change makes the stalk of Rf!K at y the compactly supported cohomology of the fibre (our own). The Grothendieck trace formula turns the alternating Frobenius trace on that cohomology into the sum of trace values over the rational points of the fibre.

**Wikipedia:** [Grothendieck trace formula](https://en.wikipedia.org/wiki/Grothendieck_trace_formula). It says: “where the cohomology groups are replaced by cohomology with coefficients in the sheaf.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support by zero extension turns excision into a short exact sequence

**Remember:** Extend by zero, and open plus closed gives an exact sequence.

*True by definition. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 3: graduate.

**Definition.** For a torsion étale sheaf F on a separated variety X, define Hⁱ<sub>c</sub>(X,F) = Hⁱ(X̄, j!F), where j: X → X̄ is an open immersion into a proper variety and j! extends by zero. Extension by zero is exact, so short exact sequences of sheaves on X give long exact sequences.

**Problem.** Let Z be a closed subvariety of X with open complement U. For torsion coefficients, compactly supported cohomology of U, X and Z fits into a long exact sequence.

**How the definition helps.** With U open and Z its closed complement, F contains the extension by zero of F restricted to U, with quotient the pushforward of F restricted to Z (our own). Extending by zero to X̄ keeps this exact, and its cohomology gives the long exact sequence. Proper base change shows the groups do not depend on the compactification (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.70.8](https://stacks.math.columbia.edu/tag/095L). It says: “there is a canonical short exact sequence”

**Sources:**

- [The Stacks Project, Lemma 59.70.8](https://stacks.math.columbia.edu/tag/095L)

### Galois cohomology as derived invariants equals étale cohomology of a field

**Remember:** On the étale site of a field, global sections are Galois fixed elements.

*True by definition.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 12G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Galois cohomology of a field K is the right derived functors of G-invariants on discrete G-modules, where G = Gal(Kˢ/K) and discrete means every element has open stabilizer. Taking the stalk at Kˢ makes étale sheaves on K the same as discrete G-modules, with global sections becoming invariants.

**Problem.** For an abelian sheaf on the small étale site of K, étale cohomology equals Galois cohomology of the corresponding discrete G-module.

**How the definition helps.** Both theories derive the same functor under the stalk equivalence of the Stacks Project, so they agree (our own). With continuous cochains, one would need a separate theorem that cochains compute these derived functors (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.59.1](https://stacks.math.columbia.edu/tag/04JQ). It says: “The stalk functor induces an equivalence of categories”

**Sources:**

- [The Stacks Project, Lemma 59.59.1](https://stacks.math.columbia.edu/tag/04JQ)

### Local quasi-compactness in fpqc coverings makes every Zariski covering count

**Remember:** Ask quasi-compactness over each affine, and infinite open covers still count.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 18F20. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** In the Stacks Project, a family {Tᵢ → T} is an fpqc covering if the maps are flat, their images cover T, and each affine open of T is the image of a quasi-compact open of the disjoint union of the Tᵢ. The condition is local over affines of T, so an infinite open cover passes.

**Problem.** With this definition, every Zariski, étale, smooth and fppf covering is an fpqc covering, including infinite open covers. Every representable functor is a sheaf for the fpqc topology.

**How the definition helps.** Flat maps locally of finite presentation are open, so over each affine of T finitely many affine opens of the sources cover it (our own). So Zariski, étale, smooth and fppf covers are fpqc. Faithfully flat descent of morphisms makes every representable functor a sheaf (our own).

**Paper or page:** [Stacks Project, Topologies, Lemma 34.9.7](https://stacks.math.columbia.edu/tag/022C), [Stacks Project, Descent, Lemma 35.13.7](https://stacks.math.columbia.edu/tag/023Q). It says: “Any fppf covering is an fpqc covering, and a fortiori, any syntomic, smooth, étale or Zariski covering is an fpqc covering.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 022C (Topologies, Lemma 34.9.7)](https://stacks.math.columbia.edu/tag/022C)
- [The Stacks Project Authors, The Stacks Project, Tag 023Q (Descent, Lemma 35.13.7)](https://stacks.math.columbia.edu/tag/023Q)

### The Nisnevich topology sits between the Zariski and étale topologies

**Remember:** Étale covers that catch every point without changing its residue field.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** A Nisnevich covering of U is a family of étale maps Vᵢ → U such that every point u of U has a point v above it in some Vᵢ with the same residue field, κ(u) ≅ κ(v).

**Problem.** On finite-dimensional Noetherian schemes, nonconnective K-theory of perfect complexes satisfies Nisnevich and Zariski descent, while étale descent can fail. Nisnevich cohomological dimension is at most the Krull dimension, and Nisnevich neighbourhoods give étale excision.

**How the definition helps.** Each point lifts with no residue field extension, as in a Zariski cover, so the étale neighbourhoods keep the points where excision takes place (our own). The Thomason–Trobaugh descent theorem supplies K-theory descent, and the Nisnevich cohomological dimension theorem supplies the bound.

**nLab:** [Nisnevich site](https://ncatlab.org/nlab/show/Nisnevich+site), [motivic homotopy theory](https://ncatlab.org/nlab/show/motivic+homotopy+theory). It says: “Algebraic K-theory satisfies descent over the Nisnevich site -- as is true for the Zariski site but not in full generality for the etale site”

**Sources:**

- [Yevsey Nisnevich, The completely decomposed topology on schemes and associated descent spectral sequences in algebraic K-theory, in: Algebraic K-Theory: Connections with Geometry and Topology, NATO ASI Ser. C 279, Kluwer (1989) 241–342](https://doi.org/10.1007/978-94-009-2399-7_11)

### Twisting by roots of unity makes Poincaré duality canonical

**Remember:** Twist by roots of unity, and orientations come for free.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over a field of characteristic other than ℓ, the Tate module ℤℓ(1) is the inverse limit of the ℓ-power roots of unity, with its Galois action. The twist A(k) tensors A with k copies of ℤℓ(1), or −k copies of its dual for k &lt; 0, so no generator is chosen.

**Problem.** In ℓ-adic cohomology, Poincaré duality, the Thom isomorphism and the cycle map hold canonically when written with Tate twists, with no choice of orientation. They also commute with the Galois action.

**How the definition helps.** The trace identifies H² of the geometric projective line with coefficients in ℤℓ(1) canonically with ℤℓ, with no choice of a root of unity (our own). Étale duality and purity then give the duality, Thom and cycle class maps, all compatible with the Galois action.

**nLab:** [Tate twist](https://ncatlab.org/nlab/show/Tate+twist). It says: “Tate twists play an important role in cohomology theories with this dual geometric and arithmetic aspect, allowing one to express Poincaré duality canonically, that is, without choosing an orientation of one's geometric object”

**Sources:**

- [P. Deligne, Cohomologie étale (SGA 4½), Lecture Notes in Mathematics 569, Springer (1977)](https://doi.org/10.1007/BFb0091516)

### Weil cohomology gives rationality and the functional equation of zeta functions

**Remember:** Count points as Frobenius fixed points, and zeta becomes a polynomial ratio.

*True by definition.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14G10. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The zeta function of a smooth projective variety X over 𝔽<sub>q</sub> is Z(X,t) = exp(∑ₙ≥₁ \#X(𝔽<sub>qⁿ</sub>)tⁿ/n). A Weil cohomology supplies finite-dimensional graded spaces with cycle classes, Künneth and Poincaré duality, so the Lefschetz formula counts these points as alternating traces of Frobenius powers.

**Problem.** Given a Weil cohomology theory, the zeta function of a smooth projective variety over a finite field is rational and satisfies a functional equation.

**How the definition helps.** Putting the trace formula into the series turns Z into an alternating product of determinants det(1 − tF), one per cohomology degree, hence rational (our own). Poincaré duality pairs the Frobenius eigenvalues in degree i with those in degree 2d − i, which gives the functional equation.

**nLab:** [Weil cohomology theory](https://ncatlab.org/nlab/show/Weil+cohomology+theory), [Weil conjectures](https://ncatlab.org/nlab/show/Weil+conjectures), [Lefschetz trace formula](https://ncatlab.org/nlab/show/Lefschetz+trace+formula). It says: “It was realized that the all except one of the conjectures (the Riemann hypothesis) would follow formally from the existence of a suitable cohomology theory on algebraic varieties”

**Sources:**

- [James S. Milne, Lectures on Étale Cohomology (course notes)](https://www.jmilne.org/math/CourseNotes/lec.html)

### Étale root-extracting covers make first μₙ-cohomology capture n-torsion line bundles

**Remember:** Units have nth roots étale-locally, so μₙ-torsors see n-torsion line bundles.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14C22. arXiv math.AG. Level 3: graduate.

**Definition.** For n invertible on X, μₙ is the étale sheaf of nth roots of unity. Every unit a becomes an nth power on the finite étale cover made by adjoining a root of Tⁿ − a, so taking nth powers is onto on étale units.

**Problem.** Let n be invertible on a scheme X. Then first étale cohomology with coefficients in μₙ maps onto the line bundles whose nth power is trivial. The kernel is the global units modulo nth powers.

**How the definition helps.** So 1 → μₙ → units → units → 1 is exact on the étale site, and its long exact sequence gives global units modulo nth powers, then H¹ of μₙ, then the n-torsion of H¹ of the units (our own). Hilbert’s Theorem 90 makes étale H¹ of the units the group of line bundles (our own). In the Zariski topology this fails: for X = Spec ℚ and n = 2 the group is zero, but ℚ\* modulo squares is not (our own).

**nLab:** [Kummer sequence](https://ncatlab.org/nlab/show/Kummer+sequence). It says: “then if n is invertible over the site then there is a short exact sequence”

**Sources:**

- [James S. Milne, Étale Cohomology, Chapter III (1980)](https://doi.org/10.1515/9781400883981)

### Crystalline cohomology does not depend on the smooth presentation

**Remember:** Any smooth presentation works, because the crystalline site does not see it.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F40. arXiv math.AG. Level 3: graduate.

**Definition.** For X = Spec C over a divided power base S = Spec A, crystalline cohomology is derived global sections on the site Cris(X/S) of divided power thickenings of opens of X compatible with S. This site uses no presentation of C, so any de Rham complex needs to be compared only with it.

**Problem.** Let A be a divided power base over ℤ₍ₚ₎ compatible with the divided powers on (p), and let p be nilpotent on C. Take any smooth A-algebra P′ surjecting onto C, and evaluate the quasi-coherent crystal ℱ on its p-adically completed divided power envelope. The completed divided power de Rham complex of this module computes RΓ(Cris(X/S),ℱ).

**How the definition helps.** Because the cohomology is defined without a presentation, each de Rham complex is compared with it directly, as the Stacks Project does for one presentation (Proposition 64.21.3). Two presentations P′ and P″ compare through P′ ⊗ P″, which is again smooth, and the divided power Poincaré lemma shows the extra variables add no cohomology (our own).

**Paper or page:** [Crystalline, Lemma 64.21.4](https://stacks.math.columbia.edu/tag/07LH). It says: “Then the complex M′ ⊗<sup>∧<sub>D′</sub></sup> Ω\*<sub>D′</sub> computes RΓ(Cris(X/S), ℱ).”

**Sources:**

- [The Stacks Project, Crystalline cohomology, Lemma 64.21.4 (Tag 07LH)](https://stacks.math.columbia.edu/tag/07LH)

### Crystalline Frobenius needs no lift

**Remember:** Use all thickenings so Frobenius acts without choosing a lift.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** For X over 𝔽ₚ, crystalline cohomology over ℤₚ is the derived inverse limit over n of derived global sections of the structure sheaf on the crystalline site over ℤ/pⁿ, which uses all divided power thickenings of opens of X. Because no lift is chosen, every map of 𝔽ₚ-schemes acts on it by pullback.

**Problem.** For a smooth scheme over 𝔽ₚ, absolute Frobenius induces a natural endomorphism on its crystalline cohomology over ℤₚ. No lift of Frobenius on a characteristic-zero model is required.

**How the definition helps.** Absolute Frobenius, raising functions to the pth power, is a map of schemes over 𝔽ₚ, so it acts by pullback (our own explanation). On a smooth lift, the crystalline comparison theorem computes this action through differential forms (our own explanation).

**nLab:** [crystalline cohomology](https://ncatlab.org/nlab/show/crystalline+cohomology). It says: “Crystalline cohomology is the abelian sheaf cohomology with respect to the crystalline site of a scheme.”

**Sources:** none listed. No primary source with a working link was found.

### Divided power envelopes descend through quotients

**Remember:** To kill a relation in an envelope, kill all its divided powers.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG. Level 3: graduate.

**Definition.** Divided powers on an ideal are operations γₙ that obey the rules of xⁿ/n!, even where n! cannot be inverted. The divided power envelope of an ideal J of B is the universal B-algebra in which J lands in a divided power ideal compatible with the base.

**Problem.** Let B′ → B be a surjection of algebras over a divided power base, with kernel K, and let J′ be the inverse image of an ideal J of B that contains the base ideal. Then the envelope of J is the envelope of J′ modulo all γₙ(k) with n ≥ 1 and k in K.

**How the definition helps.** A map out of the envelope of J′ factors through B exactly when it kills K, and respecting divided powers it must then kill every γₙ(k) (our own explanation). The work is showing that these relations suffice for the operations to descend to the quotient (our own argument).

**Paper or page:** [Lemma 64.2.3.](https://stacks.math.columbia.edu/tag/07HB). It says: “where K′ is the ideal generated by the elements γ̄ₙ(k) for n ≥ 1 and k ∈ K.”

**Sources:**

- [The Stacks Project Authors, Lemma 64.2.3.](https://stacks.math.columbia.edu/tag/07HB)

### Divided powers make the Poincaré lemma hold in characteristic p

**Remember:** Every monomial form x⁽ⁿ⁾dx has the primitive x⁽ⁿ⁺¹⁾.

*Rules out counterexamples.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 13N05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The divided power algebra k⟨x⟩ is free over k on symbols x⁽ⁿ⁾, standing for xⁿ/n!, with x⁽ⁿ⁾x⁽ᵐ⁾ = binom(n+m, n) x⁽ⁿ⁺ᵐ⁾. Its differential sends x⁽ⁿ⁾ to x⁽ⁿ⁻¹⁾dx for n ≥ 1 and kills x⁽⁰⁾ = 1, so every x⁽ⁿ⁾dx has the primitive x⁽ⁿ⁺¹⁾.

**Problem.** For every ring k, the divided power de Rham complex of k⟨x⟩ has cohomology k in degree 0 and nothing in degree 1. Over the ordinary polynomial ring 𝔽ₚ\[x\], this fails: xᵖ is a nonconstant closed function and xᵖ⁻¹dx is a closed form with no primitive.

**How the definition helps.** Integration term by term needs no division, so every one-form is exact, and a function is closed only when it is constant. In 𝔽ₚ\[x\], d(xᵖ) = pxᵖ⁻¹dx = 0, and a primitive of xᵖ⁻¹dx would need xᵖ/p (our own example).

**Wikipedia:** [Crystalline cohomology](https://en.wikipedia.org/wiki/Crystalline_cohomology). It says: “in order to prove exactness of the de Rham complex, one needs some sort of Poincaré lemma, whose proof in turn uses integration, and integration requires various divided powers, which exist in characteristic 0 but not always in characteristic p.”

**Sources:**

- [P. Berthelot and A. Ogus, Notes on Crystalline Cohomology, Princeton University Press (1978)](https://doi.org/10.1515/9781400867318)

### The crystal condition gives an integrable connection

**Remember:** A crystal identifies the two pullbacks, and their difference is a derivative.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG. Level 3: graduate.

**Definition.** A crystal on Cris(X/S), the site of divided power thickenings of opens of X, is a sheaf ℱ whose comparison map from the pullback of ℱ on U to ℱ on U′ is an isomorphism for every morphism of thickenings U′ → U. In particular, it identifies the two pullbacks of ℱ to the first-order neighbourhood of the diagonal.

**Problem.** Every crystal in 𝒪X/S-modules on the crystalline site comes with a canonical integrable connection.

**How the definition helps.** Under this identification, the difference of the two pullbacks of a section is its differential, which defines the connection (our own). The identifications agree on triple products, which makes the curvature zero (our own).

**Paper or page:** [Crystalline, Lemma 64.15.1](https://stacks.math.columbia.edu/tag/07J6). It says: “Let ℱ be a crystal in 𝒪<sub>X/S</sub>-modules on Cris(X/S). Then ℱ comes equipped with a canonical integrable connection.”

**Sources:**

- [The Stacks Project, Crystalline cohomology, Lemma 64.15.1 (Tag 07J6)](https://stacks.math.columbia.edu/tag/07J6)

### Defining π₁ by unramified Galois extensions makes the function-field Galois map surjective

**Remember:** Restricting automorphisms to a Galois subextension gives a quotient.

*True by definition.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 11R32. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** For a normal integral scheme X with function field K, let M be the compositum, in a fixed separable closure, of the finite Galois extensions of K in which the normalization of X is finite étale over X. The generic-point description of the étale fundamental group is Gal(M/K), a quotient of Gal(Kˢ/K) by restriction.

**Problem.** The absolute Galois group of K maps onto the étale fundamental group of X, based at a geometric point over the generic point.

**How the definition helps.** Restriction of automorphisms to a Galois subextension is always onto, so the map is surjective (our own). With Grothendieck’s definition, the Stacks Project must first identify the map with this quotient, by recovering each cover as the normalization of X in a finite extension inside M (our own).

**Paper or page:** [Pione, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM). It says: “is identified with the quotient map”

**Sources:**

- [The Stacks Project, Proposition 58.11.3](https://stacks.math.columbia.edu/tag/0BQM)

### Algebraic forms detect irregular periods

**Remember:** An entire integrating factor can erase algebraic classes.

*Rules out counterexamples.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** On the complex affine line, twist by the weight exp(−x³): the twisted derivative is Dg = (g′ − 3x²g) dx, which raises the degree of any nonzero polynomial g by two. Algebraic twisted de Rham cohomology in degree one is polynomial one-forms modulo the forms Dg with g a polynomial.

**Problem.** The form dx is nonzero in algebraic twisted de Rham cohomology. It becomes exact in the complex of entire forms with the same twisted differential.

**How the definition helps.** Since Dg has degree at least 2 for every nonzero polynomial g, dx is not of this form, so its class is nonzero (our own). The entire function g(x) = exp(x³)∫₀ˣ exp(−t³)dt satisfies Dg = dx, as differentiation shows (our own).

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Cohomology rank bounds period equations

**Remember:** Derivatives stay in an r-dimensional space, so r+1 must be dependent.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** The Gauss–Manin connection differentiates relative de Rham classes of a smooth projective family over a curve along a derivation ∂ of the base function field K, with ∇(av)=∂(a)v+a∇v. All derivatives of a class stay in the same r-dimensional K-space, and integrating ∇v over a transported cycle gives the derivative of the period of v.

**Problem.** Fix a nonzero derivation of the base function field and a cohomology degree of rank r. All periods of any given rational section satisfy one nonzero linear differential equation over that field of order at most r.

**How the definition helps.** The section and its first r derivatives lie in one r-dimensional space, so they are linearly dependent over the function field (our own). Integration over transported cycles commutes with the connection, so this one dependence is a differential equation for every period.

**Wikipedia:** [Picard–Fuchs equation](https://en.wikipedia.org/wiki/Picard%E2%80%93Fuchs_equation). It says: “In algebraic geometry, this equation has been shown to be a very special case of a general phenomenon, the Gauss–Manin connection.”

**Sources:**

- [Katz and Oda, On the differentiation of De Rham cohomology classes with respect to parameters](https://doi.org/10.1215/kjm/1250524135)

### Relative classes cancel endpoint terms

**Remember:** Whatever df adds along the path, f subtracts at the endpoints.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A relative de Rham class on a smooth affine curve X over ℚ, relative to a finite set of points D, is a pair (ω, g). Here ω is a regular one-form on X and g is a function on D, and (ω + df, g + f restricted to D) is the same class for every regular function f on X.

**Problem.** For a path chain γ with rational coefficients and endpoints in D, the value ∫γ ω − g(∂γ) depends only on the relative class. Here g(∂γ) sums the signed values of g at the endpoints.

**How the definition helps.** By Stokes’ theorem, adding df changes the integral by f(∂γ), and the change in g removes exactly that amount (our own). The affine relative de Rham theorem says that these explicit pairs compute the relative cohomology group.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “if Y ⊂ X is closed subvariety, we have comp: H•dR(X, Y, 𝕂) ⊗𝕂 ℂ ≅ H•B(X, Y, ℚ) ⊗ℚ ℂ.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Top forms represent relative periods

**Remember:** A top form has nothing left to restrict to the boundary.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** Let X be smooth affine of dimension n over a subfield of ℂ, and D smooth hypersurfaces meeting like coordinate hyperplanes. Relative de Rham cohomology uses regular forms on X that pull back to zero on every component of D. Every n-form qualifies, because each component has dimension n − 1.

**Problem.** Every relative de Rham class in degree n has a representative that is a single regular n-form on X.

**How the definition helps.** Every n-form pulls back to zero on D and is closed because X has dimension n, so it is a degree n cocycle of the relative complex (our own). A local calculation on coordinate hyperplanes shows that this complex computes relative cohomology, and affineness lets global forms do so.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “Each class in the top-degree cohomology group HⁿdR(X,D,𝕂) has a representative in Ωⁿ(X).”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Zero periods force algebraic primitives

**Remember:** On affine varieties, a zero class means a global algebraic primitive.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 3: graduate.

**Definition.** On a smooth affine variety over a field k ⊂ ℂ, algebraic de Rham cohomology uses global algebraic differential forms over k. So a closed form has zero class exactly when it is d of a global algebraic form over k.

**Problem.** Let p ≥ 1. If a closed algebraic p-form integrates to zero over every rational p-cycle of the complex variety, it has an algebraic primitive over k.

**How the definition helps.** Once the class is zero, the affine definition gives a primitive over k. Grothendieck’s comparison theorem and the perfect integration pairing turn zero periods into a zero class over ℂ. Extending scalars from k to ℂ is injective, so the class is already zero over k (our own).

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “Soit X ⊂ 𝔸ⁿ une variété affine lisse. L'intégration induit un accouplement parfait”

**Sources:**

- [Grothendieck, On the de Rham cohomology of algebraic varieties](https://doi.org/10.1007/BF02684807)

### A base point splits torus motives

**Remember:** Each torus coordinate contributes one unit and one Tate twist.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** The motive of 𝔾ₘ over a perfect field splits as ℤ ⊕ ℤ(1)\[1\], where ℤ is the unit summand cut out by the point 1 and ℤ(1)\[1\] is the rest. Here ℤ(j) is the jth tensor power of ℤ(1), and \[1\] is the degree shift.

**Problem.** The split torus with r coordinates is the product of r copies of G. Its motive contains ℤ(j)\[j\] with multiplicity r choose j for 0 ≤ j ≤ r, and these summands exhaust it.

**How the definition helps.** The motive of a product is the tensor product of the motives, so the motive of Gʳ is the rth tensor power of ℤ ⊕ ℤ(1)\[1\] (our own). Each choice of the second summand in j of the r factors gives one copy of ℤ(j)\[j\] (our own).

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “the multiplicative group 𝔾ₘ := 𝔸¹ − {0}”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)
- [Vladimir Voevodsky, Cancellation Theorem (2010)](https://doi.org/10.4171/DMS/5/20)

### Cycle degrees bound motivic cohomology

**Remember:** Motivic degree p is cycle degree 2q − p, never negative.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C25. arXiv math.AG. Level 3: graduate.

**Definition.** Bloch’s cycle complex of a smooth variety X in weight q ≥ 0 has, in degree n ≥ 0, the codimension-q cycles on X × Δⁿ meeting each face X × F in codimension at least q. It has no chains in negative degrees. Motivic cohomology H(p,q) is its homology in degree 2q − p.

**Problem.** For smooth varieties over a field, integral motivic cohomology H(p,q) vanishes when q ≥ 0 and p &gt; 2q.

**How the definition helps.** If p &gt; 2q, then 2q − p is negative, and the complex has no chains there (our own). Voevodsky’s comparison theorem identifies motivic cohomology with this cycle homology.

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “Hᵖ,ᑫ(X,ℤ) = CHᑫ(X,2q−p).”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Derived coefficients retain roots of unity

**Remember:** Derived reduction modulo n keeps what multiplication by n kills.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** Motivic cohomology modulo n tensors the weight-q complex with the two-term complex ℤ → ℤ, multiplication by n, in degrees −1 and 0. This derived reduction keeps the kernel of multiplication by n one degree lower, as well as the cokernel.

**Problem.** For every field k and n ≥ 2, H(0,1) with ℤ/n coefficients is the group of n-th roots of unity in k.

**How the definition helps.** In weight one the complex is the units k\* in degree one, so the reduction puts the kernel of u ↦ uⁿ in degree zero (our own). That kernel is the group of n-th roots of unity. Reducing the integral degree-zero group, which is zero, would lose them (our own).

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “The theories with different coefficients are related by the universal coefficient theorem, as in topology.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Nisnevich squares give motivic excision

**Remember:** Keep the complement unchanged and the square gives excision.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14F20. arXiv math.AG. Level 3: graduate.

**Definition.** A distinguished Nisnevich square covers X by an open U and an étale map V → X that is an isomorphism over the closed complement of U. Precisely, V ×<sub>X</sub> Z → Z is an isomorphism for Z the reduced complement, and W = U ×<sub>X</sub> V.

**Problem.** For every distinguished Nisnevich square, the motives form an exact triangle M(W) → M(U) ⊕ M(V) → M(X) → M(W)\[1\], where \[1\] is the degree shift.

**How the definition helps.** Motives satisfy Nisnevich descent, and such a square is a Nisnevich cover, so the triangle follows. The complement condition excludes U empty with V → X equal to Spec ℂ → Spec ℝ (our own). The triangle would then give M(Spec ℂ) ≅ M(Spec ℝ), which fails after extension to ℂ: two points against one (our own).

**nLab:** [motive](https://ncatlab.org/nlab/show/motive). It says: “whose underlying presheaves on Sm/S are (∞,1)-sheaves for the Nisnevich topology”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### The diagonal gives cup products

**Remember:** Tensor the classes, then pull them back along the diagonal.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C25. arXiv math.AG. Level 3: graduate.

**Definition.** For smooth X over a perfect field, a motivic class of bidegree (p,q) is a map M(X) → ℤ(q)\[p\]. The cup product of two classes is their tensor product precomposed with the diagonal M(X) → M(X) ⊗ M(X).

**Problem.** Motivic cup products are associative. Swapping classes of cohomological degrees p and p′ changes the product by the sign (−1) to the power pp′.

**How the definition helps.** The diagonal is coassociative and symmetric, so both properties pass to the product. Both ways to double the diagonal give x ↦ (x,x,x), which gives associativity. The sign comes from the symmetry of shifted complexes, which gives −1 exactly when both degrees are odd (our own).

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the motivic cohomology groups Hⁱ(X,ℤ(j)) form a bigraded ring for every scheme X of finite type over a field.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Weight one gives units and line bundles

**Remember:** Weight one shifts the units sheaf up one degree.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 3: graduate.

**Definition.** On a smooth variety X over a field, weight-one motivic cohomology is computed by the Zariski sheaf of invertible regular functions placed in degree one. So H(p,1) is the cohomology of the units sheaf in degree p − 1.

**Problem.** The group H(1,1) is the group of global units, and H(2,1) is the group of line bundles up to isomorphism.

**How the definition helps.** Degree p − 1 = 0 gives the global units. Degree one cohomology of the units sheaf classifies line bundles, glued from trivial bundles by unit transition functions (our own). The comparison theorem identifies this model with Voevodsky’s complex built from cycles.

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the shift \[−1\] means that this sheaf is viewed as a complex in degree 1.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Extra terms force holomorphic flatness

**Remember:** One more form in the complex forces the connection to be flat.

*Rules out counterexamples.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 53C08. arXiv math.AG, math.DG. Level 3: graduate.

**Definition.** A degree-two holomorphic Deligne cocycle is a line bundle with connection in local data, up to change of frame: functions gᵢⱼ with gᵢⱼgⱼₖ=gᵢₖ and one-forms Aᵢ with Aⱼ−Aᵢ=dlog(gᵢⱼ). Weight two allows all such data. Weight three adds one more term to the complex, which forces dAᵢ=0 for every i.

**Problem.** Degree-two holomorphic Deligne classes in weight three classify holomorphic line bundles with flat holomorphic connection up to isomorphism. Weight two classifies all holomorphic line bundles with holomorphic connection.

**How the definition helps.** The condition dAᵢ=0 is exactly flatness of the connection (our own). For example, z dw on the trivial line over ℂ² has derivative dz∧dw ≠ 0, so it counts only in weight two (our own). Gluing the frames and connection forms gives the classification (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “using holomorphic differential forms”

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “For q = p = 2, it is the group of isomorphism classes of C×-bundles with connection.”

**Sources:**

- [Helmut Hamm and Lê Dũng Tráng, Picard groups for line bundles with connections, Lemma 1.13.](https://doi.org/10.5427/jsing.2018.18j)

### Finite coefficients erase the Hodge term

**Remember:** Reducing modulo m leaves the lattice and removes the forms.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** The weight-p Deligne complex on a complex manifold is (2πi)ᵖℤ → 𝒪 → Ω¹ → … → Ωᵖ⁻¹, by inclusion and then exterior derivatives. Its reduction modulo m is the cone of multiplication by m, which kills the forms because m is invertible on them.

**Problem.** On a complex manifold, weight p Deligne cohomology with coefficients modulo m equals ordinary cohomology with coefficients (2πi)ᵖℤ modulo m, for p,m ≥ 1.

**How the definition helps.** Every term is torsion-free, so the cone equals the termwise quotient by m (our own). Holomorphic functions and forms are complex vector spaces, so their quotient by m is zero. Only (2πi)ᵖℤ modulo m remains, in degree zero, which gives ordinary cohomology (our own).

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “or of holomorphic forms, respectively”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §1.1](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### The Deligne cone gives the Jacobian kernel

**Remember:** The cone puts the period quotient one degree higher.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** Weight p Deligne cohomology is the cohomology of the cone of Z(p) → Ω•/Fᵖ, shifted by −1, where Z(p)=(2πi)ᵖℤ and Ω•/Fᵖ keeps holomorphic forms of degree below p. The cone gives a long exact sequence linking Deligne, integral and Hodge-quotient cohomology.

**Problem.** On a smooth projective complex variety, degree 2p Deligne cohomology of weight p maps onto the integral classes whose complex images have type (p,p). Its kernel is the intermediate Jacobian: degree 2p−1 complex cohomology modulo Fᵖ and the image of cohomology with Z(p) coefficients.

**How the definition helps.** In the cone’s long exact sequence, the Jacobian quotient comes just before degree 2p Deligne cohomology and integral classes come after it (our own). The holomorphic de Rham theorem and Hodge degeneration identify the cohomology of Ω•/Fᵖ with complex cohomology modulo Fᵖ (our own). Hodge decomposition shows that an integral class dies there exactly when its image has type (p,p), torsion included (our own).

**nLab:** [intermediate Jacobian](https://ncatlab.org/nlab/show/intermediate+Jacobian). It says: “is characterised as being the fiber of a canonical map from (complex analytic) Deligne cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §§2 and 7](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Weight one classifies line bundles

**Remember:** The exponential turns a two-term complex into transition functions.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 3: graduate.

**Definition.** The weight-one Deligne complex on a complex manifold is the inclusion 2πiℤ → 𝒪 in degrees zero and one. The exponential identifies its quotient 𝒪/2πiℤ with the sheaf 𝒪\* of nowhere-zero holomorphic functions.

**Problem.** Degree two Deligne cohomology of weight one classifies holomorphic line bundles up to isomorphism, with addition corresponding to tensor product.

**How the definition helps.** Local logarithms make 0 → 2πiℤ → 𝒪 → 𝒪\* → 0 exact, so the complex equals 𝒪\* in degree one (our own). Degree one classes of 𝒪\* are transition functions that glue line bundles, and products glue tensor products (our own).

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “the group of isomorphism classes of smooth (or holomorphic, depending on the context) principal C×-bundles”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §1.4](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Constructible sets are exactly what images of morphisms produce

**Remember:** Finite unions of open-minus-open pieces, which images of morphisms preserve.

*Makes the theorem clean to state or prove.* MSC 14F45 (Topological properties in algebraic geometry), 14A15. arXiv math.AG. Level 3: graduate.

**Definition.** A constructible set is a finite union of differences U minus V of retrocompact open sets, those whose intersection with every quasi-compact open is quasi-compact. In a Noetherian space, these are the finite unions of locally closed sets.

**Problem.** Chevalley's theorem says that a finitely presented morphism of schemes sends locally constructible sets to locally constructible sets.

**How the definition helps.** Images need finite unions: (x,y) ↦ (x,xy) has image the open set x≠0 plus the origin, which is not locally closed (our own). Chevalley’s theorem shows that these unions are stable under finitely presented images. The general definition needs the opens to be retrocompact.

**Wikipedia:** [Constructible set (topology)](https://en.wikipedia.org/wiki/Constructible_set_%28topology%29). It says: “Chevalley's theorem in the generality stated above would fail if the simplified definition of constructible sets (without restricting to retrocompact open sets in the definition) were used.”

**Sources:**

- [Alexander Grothendieck, Éléments de géométrie algébrique IV, première partie, Publications Mathématiques de l'IHÉS 20 (1964), Théorème 1.8.4](https://doi.org/10.1007/BF02684747)

### Products over closed points make arithmetic zeta multiply over pieces

**Remember:** Partition the closed points, and the product splits into matching factors.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 11M41. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The arithmetic zeta function of a nonempty scheme X of finite type over ℤ is the product, over its closed points x, of (1 − N(x)⁻ˢ)⁻¹. Here N(x) is the size of the finite residue field at x.

**Problem.** If U is a closed part of X and V is its open complement, then ζ(X, s) = ζ(U, s)ζ(V, s). Also, ζ(X, s) is the product of the zeta functions of the reductions modulo all primes p. Both identities hold when the real part of s exceeds the dimension of X.

**How the definition helps.** Each closed point lies in exactly one of U and V, and over exactly one prime p, so both identities regroup the same factors. Regrouping is valid because the product converges absolutely when the real part of s exceeds dim X (our own).

**Wikipedia:** [Arithmetic zeta function](https://en.wikipedia.org/wiki/Arithmetic_zeta_function). It says: “the zeta function of X is the product of the ones of the reduction of X modulo the primes p”

**Sources:** none listed. No primary source with a working link was found.

### Zeta coefficients count symmetric powers

**Remember:** An effective zero-cycle is a multiset of geometric points fixed by Frobenius.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over a finite field, the zeta series counts effective zero-cycles by degree: finite formal sums of closed points with nonnegative multiplicities. A closed point of residue degree e is one Frobenius orbit of e geometric points.

**Problem.** For a quasi-projective variety over a finite field, its nth zeta coefficient counts rational points of its nth symmetric power, which parametrizes unordered n-tuples.

**How the definition helps.** A rational point of the nth symmetric power is an unordered n-tuple of geometric points that Frobenius preserves (our own). Such a multiset has constant multiplicity on each Frobenius orbit, so it is exactly an effective zero-cycle of degree n.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “For X a quasi-projective variety over 𝔽q, Nᵣ(Symⁿ X) = φ(Nᵣ(X), N₂ᵣ(X), …, Nₙᵣ(X))”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### Zeta numerators count Jacobian points

**Remember:** Set t to one, and det(1 − F) counts Frobenius-fixed Jacobian points.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 11G20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** For a smooth projective geometrically connected curve over a field of size q, the zeta numerator is det(1 − tF). Here F is the q-power Frobenius on the ℓ-adic Tate module of the Jacobian tensored with ℚ, for a prime ℓ other than the characteristic.

**Problem.** The value of this numerator at one equals the number of rational points of the Jacobian.

**How the definition helps.** At t = 1 this is det(1 − F), the degree of the isogeny 1 − F of the Jacobian (our own explanation). The differential of 1 − F is the identity, so its degree counts its kernel. That kernel is the set of Frobenius-fixed points, which are the rational points.

**Paper or page:** [The Torelli locus and Newton polygons](https://arxiv.org/abs/2509.00998). It says: “The characteristic polynomial of the Frobenius endomorphism of Jac(C) is P(Jac(C)/𝔽q,T) = T²ᵍL(C/𝔽q,T⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Brauer evaluations constrain rational points

**Remember:** Evaluations of a global point must cancel across all places.

*Makes the theorem clean to state or prove.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 14G05. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** The Brauer–Manin set of a variety over a number field contains the families of local points, one in each completion and integral at almost all primes, that pass every Brauer test. A family passes the test of a Brauer class when the invariants in ℚ/ℤ of its local evaluations sum to zero.

**Problem.** Every rational point gives a family in the Brauer–Manin set. An empty Brauer–Manin set therefore rules out a rational point even when points exist in every completion.

**How the definition helps.** A rational point evaluates each Brauer class to a global class, so global reciprocity makes the local invariants sum to zero (our own). So the family given by a rational point passes every test.

**Paper or page:** [Pullback Method with Applications to Severi-Brauer Fibrations](https://arxiv.org/abs/2410.15125v3). It says: “Moreover, the obstruction is captured by a single Brauer class of order p.”

**Sources:**

- [Pullback Method with Applications to Severi-Brauer Fibrations](https://arxiv.org/abs/2410.15125v3)

### Tate–Shafarevich detects Hasse failures

**Remember:** Keep the torsors that acquire an origin over every completion.

*True by definition.* MSC 14G12 (Hasse principle, weak and strong approximation, Brauer-Manin obstruction), 11G10. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** Let A be an abelian variety over a number field k. An A-torsor is a k-variety with an A-action that becomes A acting on itself by translations over an algebraic closure. The Tate–Shafarevich group consists of the isomorphism classes of A-torsors that have a point over every completion of k.

**Problem.** Every everywhere locally soluble A-torsor has a k-point if and only if the Tate–Shafarevich group of A vanishes.

**How the definition helps.** A k-point serves as an origin, so a torsor has a k-point exactly when it is isomorphic to A, the zero class (our own). So every such torsor has a k-point exactly when the group has no nonzero class.

**Wikipedia:** [Tate–Shafarevich group](https://en.wikipedia.org/wiki/Tate%E2%80%93Shafarevich_group). It says: “the group measures the extent to which the Hasse principle fails to hold for rational equations”

**Sources:**

- [Serge Lang and John Tate, Principal Homogeneous Spaces Over Abelian Varieties (1958)](https://doi.org/10.2307/2372778)

### Connected groups have trivial finite-field torsors

**Remember:** Connected groups cannot hide a torsor from a finite field.

*Rules out counterexamples.* MSC 14G15 (Finite ground fields in algebraic geometry), 14G05. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** A torsor under an algebraic group G over a finite field is a space with a G-action that becomes G acting on itself by translations over an algebraic closure. Here G must be smooth and stay connected over the algebraic closure.

**Problem.** Every torsor under a smooth connected algebraic group over a finite field has a rational point.

**How the definition helps.** For connected G, Lang’s theorem writes every element a as g⁻¹F(g), with F the Frobenius. Pick a geometric point t with F(t) = ta; then tg⁻¹ is fixed by Frobenius, a rational point (our own). Connectedness excludes the constant group of order two, whose torsor from the quadratic extension has no rational point (our own).

**Wikipedia:** [Lang's theorem](https://en.wikipedia.org/wiki/Lang%27s_theorem). It says: “and, consequently, any G-bundle on Spec 𝔽q is isomorphic to the trivial one.”

**Sources:**

- [Serge Lang, Algebraic Groups Over Finite Fields (1956)](https://doi.org/10.2307/2372673)

### Tensor products count Weil restriction points

**Remember:** To count points of a Weil restriction, split the tensor product of fields.

*True by definition.* MSC 14G15 (Finite ground fields in algebraic geometry), 11T30. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The Weil restriction of X from L to k is defined by its points: over a k-algebra R, they are the points of X over R ⊗ₖ L. So counting its points over a field means splitting this tensor product into fields.

**Problem.** Let X be quasi-projective over the degree d extension of 𝔽q. Let M count its points over the extension of 𝔽q of degree lcm(d,n). Over the degree n extension, its Weil restriction to 𝔽q has M raised to the power gcd(d,n) points.

**How the definition helps.** Over the degree n extension of 𝔽q, the tensor product with the degree d field splits into gcd(d,n) copies of the degree lcm(d,n) field (our own). Each factor gives M points, since the embeddings differ only by Frobenius. The representability theorem supplies a variety with this functor of points.

**Wikipedia:** [Weil restriction](https://en.wikipedia.org/wiki/Weil_restriction). It says: “(In particular, the k-rational points of \\operatorname{Res}<sub>L/k</sub>X are the L-rational points of X.)”

**Sources:** none listed. No primary source with a working link was found.

### Group schemes retain supersingular torsion

**Remember:** One geometric point can carry many copies in its coordinate algebra.

*Makes the theorem clean to state or prove.* MSC 14G17 (Positive characteristic ground fields in algebraic geometry), 14H52. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** For an elliptic curve E in characteristic p, the kernel E\[pⁿ\] is the scheme-theoretic fibre of multiplication by pⁿ over the origin, so it records multiplicities. Its length is the dimension of its coordinate algebra, and E is supersingular when E\[p\] has only the origin as a geometric point.

**Problem.** For every positive integer n, this kernel has length p²ⁿ. On a supersingular elliptic curve, it has only one geometric point.

**How the definition helps.** Multiplication by pⁿ has degree p²ⁿ, so its fibre over the origin has length p²ⁿ. On a supersingular curve, a geometric point killed by pⁿ is the origin, by induction from E\[p\]. So one point carries the whole length (our own).

**nLab:** [the Barsotti-Tate group of an abelian variety](https://ncatlab.org/nlab/show/the+Barsotti-Tate+group+of+an+abelian+variety). It says: “Then A(p) := ⋃ⱼ ker pʲ idₐ is a p-divisible group.”

**Wikipedia:** [Supersingular elliptic curve](https://en.wikipedia.org/wiki/Supersingular_elliptic_curve). It says: “an elliptic curve is supersingular if and only if the group of geometric points of order p is trivial.”

**Sources:** none listed. No primary source with a working link was found.

### Berkovich spectra give p-adic analytic spaces that are locally connected

**Remember:** A Berkovich point measures the size of functions, not just where they vanish.

*Makes the theorem clean to state or prove.* MSC 14G22 (Rigid analytic geometry), 54D05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A point of the Berkovich spectrum of a nonarchimedean affinoid algebra A is a bounded multiplicative seminorm on A extending the base absolute value, a way to measure the size of every function. The topology is the weakest one making each evaluation x ↦ \|a\|ₓ continuous.

**Problem.** Smooth Berkovich analytic spaces over ℚₚ are locally contractible and hence locally connected. Domains in ℚₚⁿ with their subspace topology are totally disconnected.

**How the definition helps.** Seminorms can vary continuously, for example the sup norms on discs of growing radius, so the space has paths (our own). Berkovich’s theorem proves that smooth spaces are locally contractible. In ℚₚⁿ, clopen balls separate any two distinct points (our own).

**nLab:** [analytic spectrum](https://ncatlab.org/nlab/show/analytic+spectrum), [p-adic number](https://ncatlab.org/nlab/show/p-adic+number), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “Moreover, one may sensibly assign to an p-adic domain a topological space which is well behaved (in particular locally connected and even locally contractible), this is the analytic spectrum construction.”

**Sources:**

- [Vladimir G. Berkovich, Spectral Theory and Analytic Geometry over Non-Archimedean Fields, Mathematical Surveys and Monographs 33, American Mathematical Society (1990)](https://doi.org/10.1090/surv/033)

### Restricting which covers count gives analytic geometry over the p-adic numbers

**Remember:** Change which covers count, and a totally disconnected field gives connected spaces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A covering of a rigid analytic space is admissible when, after pullback to any affinoid space, finitely many affinoid domains, each inside a member, cover it. This forbids splitting the closed unit disc into the open disc \|T\| &lt; 1 and the circle \|T\| = 1.

**Problem.** In the G-topology, the closed unit disc over ℚₚ behaves as a connected space, and Tate's acyclicity theorem holds. So rigid analytic spaces have analytic continuation, coherent sheaves and a working sheaf theory.

**How the definition helps.** Tate’s acyclicity theorem holds for finite affinoid coverings, so it gives the sheaf property for exactly these covers (our own). An admissible split of the disc into two disjoint pieces would give a nonconstant idempotent in ℚₚ⟨T⟩, which is a domain. The rigid identity theorem gives analytic continuation on irreducible domains (our own).

**nLab:** [rigid analytic geometry](https://ncatlab.org/nlab/show/rigid+analytic+geometry), [Berkovich space](https://ncatlab.org/nlab/show/Berkovich+space). It says: “regarded with their subspace topology, fails, as also all these domains are totally disconnected.”

**Sources:**

- [John Tate, Rigid analytic spaces, Inventiones Mathematicae 12 (1971) 257–289](https://doi.org/10.1007/BF01403307)
- [Brian Conrad, Several approaches to non-archimedean geometry, in: p-adic Geometry, University Lecture Series 45, AMS (2008)](https://math.stanford.edu/~conrad/papers/aws.pdf)

### Finite covers detect Galois

**Remember:** If every cover stays fixed, every algebraic j-invariant stays fixed.

*Makes the theorem clean to state or prove.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** The geometric fundamental group of the thrice-punctured line over ℚ̄, at a fixed geometric base point, is the group of compatible permutations of the fibres of all finite étale covers. A field automorphism acts on it by conjugating the covers.

**Problem.** Every nonidentity automorphism of the algebraic numbers over ℚ acts nontrivially on this fundamental group, even after ignoring conjugation.

**How the definition helps.** An inner action fixes the isomorphism class of every connected cover (our own). By Belyi’s theorem, an elliptic curve whose j-invariant the automorphism moves becomes such a cover after removing finitely many points. Its conjugate cover has a different j-invariant, so it is not isomorphic, and the action is not inner (our own).

**Paper or page:** [Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640). It says: “There is an injection Gal(ℚ) ↪︎ GT̂.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hiroaki Nakamura, Arithmetic and Combinatorics in Galois fundamental groups, §0 (2019)](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/2120-09.pdf)
- [Gennadiĭ Belyĭ, On Galois extensions of a maximal cyclotomic field (1980)](https://doi.org/10.1070/IM1980v014n02ABEH001096)

### Torsion bases remove automorphisms

**Remember:** A full torsion basis prevents any nonidentity change of coordinates.

*Rules out counterexamples.* MSC 14G35 (Modular and Shimura varieties), 11F23. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** A level-N structure on an elliptic curve over ℂ, for N ≥ 3, is an ordered basis of its N-torsion, the points killed by N. Only the identity automorphism of the curve fixes such a basis, so marked curves have no symmetries (our own).

**Problem.** For N ≥ 3, every family of elliptic curves with marked N-torsion bases is the pullback of one universal marked family, along a unique map. The j-line has no such universal family for unmarked curves.

**How the definition helps.** Objects without nonidentity automorphisms can have a universal family, and the full-level moduli theorem constructs it (our own). Without markings, gluing a constant curve to itself by −1 along a connected double cover gives a nonconstant family with constant j (our own). So the j-line carries no universal family.

**nLab:** [modular curve](https://ncatlab.org/nlab/show/modular+curve). It says: “A modular curve is a moduli space of elliptic curves over the complex numbers equipped with level-n structure, for some n ∈ ℕ.”

**Sources:**

- [Nicholas M. Katz and Barry Mazur, Arithmetic Moduli of Elliptic Curves (1985)](https://doi.org/10.1515/9781400881710)

### Arithmetic principal divisors have degree zero

**Remember:** The finite and infinite contributions of a principal divisor cancel.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 11G50. arXiv math.NT, math.AG. Level 3: graduate.

**Definition.** An arithmetic divisor on a number field has an integer at each finite prime, almost all zero, and a conjugation-invariant real number at each complex embedding. Its degree sums the prime coefficients times log of the residue field size, plus the embedding coefficients. A nonzero a gives the principal divisor with coefficients ord\_𝔭(a) and −log\|σ(a)\|.

**Problem.** Every principal arithmetic divisor has degree zero. So the arithmetic degree is well defined on classes of arithmetic divisors.

**How the definition helps.** The product formula makes the finite and infinite terms cancel (our own). The prime terms sum to log\|Norm(a)\|, and the embedding terms sum to −log\|Norm(a)\|.

**nLab:** [arithmetic Chow group](https://ncatlab.org/nlab/show/arithmetic+Chow+group). It says: “pairs consisting of a codimension p subvariety of X together with a Green current for it.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://doi.org/10.1007/bf02699132)

### Forgetting currents recovers Chow groups

**Remember:** Forget the current: relations lift, and a smooth form remains.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An arithmetic cycle of codimension p pairs a cycle Z with a Green current g, a real (p−1,p−1)-current with ddᶜg + δ<sub>Z</sub> smooth, modulo ∂- and ∂̄-exact terms. Arithmetic Chow classes also set to zero each pair (div f, −log\|f\|²) pushed forward from a rational function f on a codimension p−1 subvariety.

**Problem.** On a regular projective arithmetic variety, forgetting the Green current maps arithmetic Chow classes onto ordinary Chow classes. The kernel consists exactly of classes with zero cycle and a smooth form.

**How the definition helps.** The cycle of each principal pair is rationally trivial, so forgetting g is well defined; every cycle has a Green current, so it is onto (our own). In the kernel the cycle is a sum of divisors div f, so subtracting their principal pairs leaves (0, g) with ddᶜg smooth (our own). Analytic regularity makes this g a smooth form modulo the allowed terms (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “\\widetilde{C}<sup>2p-1</sup>(p)\\overset {\\operatorname{a}<sub>C</sub>}{\\longrightarrow } \\operatorname{\\widehat{CH}}<sup>p</sup>(\\mathcal{X},C) \\overset {\\zeta <sub>C</sub>}{\\longrightarrow } \\operatorname{CH}<sup>p</sup>(\\mathcal{X})\\to 0”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Green functions recover line metrics

**Remember:** The logarithmic part gives the divisor, and the smooth part gives the metric.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG. Level 3: graduate.

**Definition.** An arithmetic divisor is a pair (D, g) of a divisor D and a real, conjugation-invariant function g off D, with g + log\|f\|² smooth for every local equation f of D. So exp(−g) behaves like the squared length of a section with divisor D (our own), and pairs (div u, −log\|u\|²) count as zero.

**Problem.** On a smooth projective integral variety over an arithmetic field, the first arithmetic Chern class identifies hermitian line bundles with arithmetic divisor classes.

**How the definition helps.** Give the canonical section of 𝒪(D) squared norm exp(−g); dividing by f gives a local frame with smooth positive squared norm (our own). A principal pair changes the section by u and leaves the metric the same up to isometry (our own). Conversely, a rational section s of a hermitian line bundle gives (div s, −log‖s‖²), and the two constructions are inverse (our own).

**Paper or page:** [Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1). It says: “The assignment (ℒ, ‖·‖) ↦ ĉ₁(ℒ, ‖·‖) defines a group isomorphism”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [Souvik Goswami and Rahul Gupta, Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1)

### Section changes preserve Chern classes

**Remember:** A new section shifts the pair by a principal pair, zero.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A hermitian line bundle has a smooth norm on each complex fibre, compatible with conjugation. Its first arithmetic Chern class is the pair (div s, −log‖s‖²) for a nonzero rational section s. The arithmetic Chow group sets (div u, −log\|u\|²) to zero for each nonzero rational function u.

**Problem.** On a regular integral arithmetic variety, every nonzero rational section of a hermitian line bundle gives the same first arithmetic Chern class.

**How the definition helps.** Replacing s by us adds exactly (div u, −log\|u\|²), which the Chow group sets to zero (our own). The Poincaré–Lelong formula shows that −log‖s‖² is a Green current for div s, so the pair is a valid class (our own).

**Wikipedia:** [Arakelov theory](https://en.wikipedia.org/wiki/Arakelov_theory). It says: “is the quotient of this group by the subgroup generated by certain "trivial" cycles.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)

### Zero mean fixes Green functions

**Remember:** The equation leaves one constant, and the mean fixes it.

*Rules out counterexamples. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Fix a compact connected Riemann surface and a smooth positive area form μ of mass one. The normalized Green function of a divisor D solves the Poisson equation with source deg(D)μ − δ(D), where δ(D) puts each multiplicity of D at its point. It must also have mean zero for μ, which fixes the free additive constant.

**Problem.** Each divisor D has exactly one normalized Green function for μ.

**How the definition helps.** Two solutions differ by a harmonic function, which on a compact connected surface is constant, and zero mean picks one (our own). A solution exists because the source has total mass zero (our own). Without the mean condition, every constant solves the equation for the zero divisor (our own).

**nLab:** [Arakelov geometry](https://ncatlab.org/nlab/show/Arakelov+geometry). It says: “he defined the intersection numbers using the complementary piece at infinity.”

**Sources:**

- [Suren J. Arakelov, Intersection theory of divisors on an arithmetic surface (1974)](https://doi.org/10.1070/IM1974v008n06ABEH002141)

### Residue codes give evaluation duals

**Remember:** The residue theorem turns a dot product into zero.

*True by definition. Confidence: medium.* MSC 14G50 (Applications to coding theory and cryptography of arithmetic geometry), 11T71. arXiv math.AG. Level 3: graduate.

**Definition.** Take a smooth projective geometrically connected curve over a finite field, a sum D of distinct rational points, and a divisor G avoiding them. The evaluation code is the vectors of values at D of f = 0 and of functions with div(f) ≥ −G. The residue code is the vectors of residues at D of ω = 0 and of differentials with div(ω) ≥ G − D.

**Problem.** If 2g − 2 &lt; deg(G) &lt; deg(D), the residue code equals the ordinary dot-product dual of the evaluation code. Here g is the genus of the curve.

**How the definition helps.** For such f and ω, fω has at most simple poles, only at D, so the dot product of their vectors is the sum of all residues of fω (our own). The residue theorem makes this sum zero. In the stated degree range, Riemann–Roch gives dimensions deg(G)+1−g and deg(D)−deg(G)−1+g, which sum to the code length.

**Paper or page:** [Weierstrass Semigroup, Pure Gaps and Codes on Function Fields](https://arxiv.org/abs/2304.02128). It says: “Given the AG codes $C<sub>\\mathcal L</sub>(D, G)$ and $C<sub>\\Omega</sub>(D, G)$ with parameters $\[N, k, d\]$ and $\[N, k<sub>\\Omega</sub>, d<sub>\\Omega</sub>\]$ respectively, we have that if $2g-2&lt;{  deg}(G)&lt;N$, then
$$
k={  deg}(G)+1-g\\quad \\text{and}\\quad d\\geq N-{  deg}(G),
$$
and
$$k<sub>\\Omega</sub>=N-{  deg}(G)-1+g\\quad \\text{and}\\quad d<sub>\\Omega</sub>\\geq {  deg}(G)-(2g-2).
$$”

**Sources:** none listed. No primary source with a working link was found.

### Stability removes blowup models

**Remember:** Every rational component must meet the rest at least three times.

*Rules out counterexamples.* MSC 14H10 (Families, moduli of curves (algebraic)), 14G20. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** A stable model of a curve of genus at least two over a discrete valuation field is a proper flat family over the valuation ring with the curve as generic fibre. Its geometric fibres are connected nodal curves in which every genus-zero component of the normalization contains at least three preimages of nodes.

**Problem.** A smooth projective geometrically connected curve of genus at least two has at most one stable model up to unique isomorphism fixing the original curve.

**How the definition helps.** Blowing up a smooth rational point of the special fibre gives another model, but the new projective line meets the rest only once, so stability excludes it (our own). The uniqueness theorem for stable models handles all other competing models.

**Paper or page:** [Moduli Curves](https://stacks.math.columbia.edu/tag/0E97). It says: “there exists a unique isomorphism X → X′ of models.”

**Sources:** none listed. No primary source with a working link was found.

### Stable curves give the Deligne–Mumford compactification of the moduli of curves

**Remember:** Allow nodes so limits exist; demand finite symmetry.

*Rules out counterexamples. Confidence: medium.* MSC 14H10 (Families, moduli of curves (algebraic)), 14D23. arXiv math.AG. Level 3: graduate.

**Definition.** A stable n-pointed curve of genus g is a proper geometrically connected nodal curve of arithmetic genus g with n distinct smooth marked points and only finitely many automorphisms fixing them. This rules out rational components with fewer than three special points, nodes or markings.

**Problem.** The stack M̄(g, n) of stable curves is a smooth proper Deligne–Mumford stack that contains the stack M(g, n) of smooth curves. Deligne and Mumford used it to prove that M(g) is irreducible.

**How the definition helps.** Allowing nodes lets every family acquire a stable limit, which gives properness, and finite automorphisms give the Deligne–Mumford property (our own). Deformation theory of nodes gives smoothness. Deligne and Mumford then proved M(g) irreducible by studying the compactification.

**nLab:** [basic ideas of moduli stacks of curves and Gromov-Witten theory](https://ncatlab.org/nlab/show/basic+ideas+of+moduli+stacks+of+curves+and+Gromov-Witten+theory), [Deligne-Mumford compactification](https://ncatlab.org/nlab/show/Deligne-Mumford+compactification), [stable map](https://ncatlab.org/nlab/show/stable+map). It says: “Deligne and Mumford were able to prove many theorems about the ordinary moduli space of curves by studying instead the compactification. For example they were able to prove that M<sub>g</sub>,n is irreducible.”

**Sources:**

- [Pierre Deligne, David Mumford, The irreducibility of the space of curves of given genus, Publ. Math. IHÉS 36 (1969) 75–109](https://doi.org/10.1007/BF02684599)
- [William Fulton, Rahul Pandharipande, Notes on stable maps and quantum cohomology, 1996, arXiv:alg-geom/9608011](https://arxiv.org/abs/alg-geom/9608011)

### Arithmetic genus makes Riemann–Roch hold on singular Gorenstein curves

**Remember:** Use the genus from cohomology, and singular curves obey Riemann–Roch too.

*Makes the theorem clean to state or prove.* MSC 14H20 (Singularities of curves, local rings), 14C40, 13H10. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** The arithmetic genus of a projective curve C over a field is 1 − χ(C,𝒪<sub>C</sub>), computed from cohomology rather than from a smooth model. For a geometrically integral curve it equals dim H¹(C,𝒪<sub>C</sub>).

**Problem.** For an integral projective Gorenstein curve over an algebraically closed field and a Cartier divisor D, ℓ(D)−ℓ(K−D)=deg(D)+1−g. Here g is the arithmetic genus and K is a canonical Cartier divisor.

**How the definition helps.** Riemann–Roch for Euler characteristics gives χ(𝒪(D)) = deg(D) + 1 − g with this g, whether or not C is singular. Gorenstein duality identifies the dual of H¹(C,𝒪(D)) with H⁰(C,𝒪(K−D)), which gives the formula (our own).

**Wikipedia:** [Riemann–Roch theorem](https://en.wikipedia.org/wiki/Riemann%E2%80%93Roch_theorem), [Arithmetic genus](https://en.wikipedia.org/wiki/Arithmetic_genus). It says: “the same statement as above holds, provided that the geometric genus as defined above is replaced by the arithmetic genus”

**Sources:**

- [Robin Hartshorne, Generalized divisors on Gorenstein curves and a theorem of Noether, Journal of Mathematics of Kyoto University 26 (1986) 375–386](https://doi.org/10.1215/kjm/1250520873)

### With arithmetic genus, every plane curve has genus (d−1)(d−2)/2

**Remember:** Degree alone fixes the arithmetic genus of a plane curve.

*Rules out counterexamples.* MSC 14H50 (Plane and space curves), 14H20. arXiv math.AG. Level 3: graduate.

**Definition.** For an integral projective curve C over an algebraically closed field, the arithmetic genus is 1 − χ(C,𝒪<sub>C</sub>), so it depends only on the cohomology of the structure sheaf. The geometric genus is the genus of the normalization.

**Problem.** An integral projective plane curve of degree d over an algebraically closed field has arithmetic genus (d−1)(d−2)/2. Its geometric genus is smaller whenever it is singular.

**How the definition helps.** The equation gives 0 → 𝒪(−d) → 𝒪 → 𝒪<sub>C</sub> → 0 on the plane, so χ(𝒪<sub>C</sub>) depends only on d and gives (d−1)(d−2)/2 (our own). At a singular point the normalization’s structure sheaf is strictly larger, and this extra length lowers the geometric genus (our own).

**Wikipedia:** [Genus–degree formula](https://en.wikipedia.org/wiki/Genus%E2%80%93degree_formula). It says: “If the curve is non-singular, then the geometric genus and the arithmetic genus are equal, but if the curve is singular, with only ordinary singularities, then the geometric genus is smaller.”

**Sources:** none listed. No primary source with a working link was found.

### A marked point is part of an elliptic curve

**Remember:** A genus-one curve becomes a group once you mark its origin.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An elliptic curve over K is a smooth projective geometrically integral curve of genus one with a specified K-rational point O.

**Problem.** An elliptic curve is an abelian variety with the marked point as identity. Over a number field its rational points form a finitely generated group (the Mordell–Weil theorem).

**How the definition helps.** The marked point identifies the curve with its Jacobian by P ↦ \[P−O\], giving the group law (our own). Selmer’s genus-one curve 3x³+4y³+5z³=0 has no rational point over ℚ, so it admits no such marking (our own). Mordell–Weil gives finite generation over a number field.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “If P has degree four and is square-free this equation again describes a plane curve of genus one; however, it has no natural choice of identity element.”

**Sources:**

- [Ernst S. Selmer, The diophantine equation ax³ + by³ + cz³ = 0, Acta Mathematica 85 (1951) 203–362](https://doi.org/10.1007/BF02395746)

### Elliptic curves as lattice quotients have n² points killed by n

**Remember:** Points killed by n form an n-by-n grid modulo the lattice.

*True by definition.* MSC 14H52 (Elliptic curves), 33E05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over ℂ, an elliptic curve is ℂ/Λ, where Λ is the integer span of two ℝ-linearly independent complex numbers. A point z is killed by n exactly when nz lies in Λ.

**Problem.** For a positive integer n, the points P with nP = 0 form a group isomorphic to (ℤ/nℤ) × (ℤ/nℤ). Thus there are n² such points.

**How the definition helps.** In a basis of Λ, nz ∈ Λ means both coordinates of z lie in (1/n)ℤ, taken modulo ℤ. This gives two independent coordinates in ℤ/nℤ (our own computation). The real work is identifying the complex cubic with this lattice quotient.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “This also allows an easy understanding of the torsion points on an elliptic curve: if the lattice Λ is spanned by the fundamental periods ω₁ and ω₂, then the n-torsion points are the (equivalence classes of) points of the form”

**Sources:** none listed. No primary source with a working link was found.

### Excluding singular cubics makes rational points finitely generated

**Remember:** Cusps and nodes give groups too large to be finitely generated.

*Rules out counterexamples. Confidence: medium.* MSC 14H52 (Elliptic curves), 11G05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Over a field of characteristic other than 2 and 3, a short Weierstrass curve is the projective closure of y² = x³ + ax + b with origin at infinity. It is nonsingular, free of cusps and nodes, exactly when 4a³ + 27b² ≠ 0.

**Problem.** The Mordell–Weil theorem says that the group of rational points of an elliptic curve over ℚ is finitely generated.

**How the definition helps.** Nonsingularity removes cubics whose smooth points form the additive or multiplicative group of ℚ, which are not finitely generated. On y² = x³ the smooth rational points form ℚ under addition, and on y² = x²(x + 1) they form ℚ\* (our own examples). Mordell–Weil itself still needs the weak theorem and heights.

**Wikipedia:** [Elliptic curve](https://en.wikipedia.org/wiki/Elliptic_curve). It says: “The curve is required to be non-singular, which means that the curve has no cusps or self-intersections.”

**Sources:** none listed. No primary source with a working link was found.

### Points as ideal classes make the elliptic curve group law associative

**Remember:** Embed points in a known group, and associativity comes for free.

*True by definition.* MSC 14H52 (Elliptic curves), 13C20. arXiv cs.LO, math.AG. Level 3: graduate.

**Definition.** Send each affine F-point (x,y) of a Weierstrass elliptic curve to the class of the ideal (X−x, Y−y) in the class group of its affine coordinate ring, invertible fractional ideals modulo principal ones. Send the origin at infinity to the identity class.

**Problem.** The chord-and-tangent addition on the points of a Weierstrass elliptic curve over any field is associative, so the points form an abelian group.

**How the definition helps.** Points become elements of a known abelian group, so the group axioms carry over once the map respects addition and is injective. Lemma 8 of the paper shows that the map turns addition of points into multiplication of classes. The quoted Lemma 11 gives injectivity, by a computation with norms and degrees that works in any characteristic (our own remark).

**Paper or page:** [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic](https://arxiv.org/abs/2302.10640v2), [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic](https://arxiv.org/abs/2302.10640v2). It says: “The function W(F) → Cl(F\[W\]) is injective.”

**Sources:**

- [An Elementary Formal Proof of the Group Law on Weierstrass Elliptic Curves in any Characteristic, arXiv:2302.10640 (2023)](https://arxiv.org/abs/2302.10640v2)

### Translation-defined Weil pairings take values in nth roots of unity

**Remember:** Translate n times and the product of the constant ratios is one.

*True by definition.* MSC 14H52 (Elliptic curves), 14K05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** For n invertible in the field and geometric n-torsion points P and Q, choose F with divisor \[n\]\*((P)−(O)), the pullback of (P)−(O) under multiplication by n. The pairing is the ratio F(X+Q)/F(X), which is constant because translation by Q preserves that pulled-back divisor (our own).

**Problem.** The Weil pairing computed by the translation definition takes values in the nth roots of unity.

**How the definition helps.** Multiplying the ratio over X, X+Q, …, X+(n−1)Q gives F(X+nQ)/F(X), which is the nth power of the constant (our own). Since nQ = O, this equals one (our own).

**Wikipedia:** [Weil pairing](https://en.wikipedia.org/wiki/Weil_pairing). It says: “then by construction G has the same divisor”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III, §8 (2009)](https://doi.org/10.1007/978-0-387-09494-6)

### Stability is exactly what lets a bundle come from a unitary representation

**Remember:** No subbundle may be steeper than the whole bundle.

*Makes the theorem clean to state or prove.* MSC 14H60 (Vector bundles on curves and their moduli), 32L05. arXiv math.AG, math.DG. Level 3: graduate.

**Definition.** The slope of a vector bundle on a curve is its degree divided by its rank. A bundle is stable when every proper nonzero subbundle has strictly smaller slope.

**Problem.** On a compact Riemann surface of positive genus with a fixed point, a rank-n degree-d holomorphic bundle is stable exactly when it comes from an irreducible unitary representation of the punctured surface group. The loop around the point goes to the prescribed scalar for degree d, so the representation descends projectively to the closed surface group.

**How the definition helps.** Narasimhan–Seshadri proves both directions, and the strict slope test is exactly its bundle condition for irreducible representations (our own). In degree zero, 𝒪(p) ⊕ 𝒪(−p) fails the test because it contains a line of positive degree (our own).

**Wikipedia:** [Narasimhan–Seshadri theorem](https://en.wikipedia.org/wiki/Narasimhan%E2%80%93Seshadri_theorem). It says: “says that a holomorphic vector bundle over a compact Riemann surface is stable if and only if it comes from an irreducible projective unitary representation of the fundamental group.”

**Paper or page:** [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1), [The Narasimhan-Seshadri Theorem revisited](https://arxiv.org/abs/2509.24617v1). It says: “If E is a stable holomorphic vector bundle on X of rank n and degree m, then there exists an irreducible representation ρ : π₁(X − x, y) → U(n) … such that E is isomorphic to E(ρ).”

**Sources:**

- [The Narasimhan-Seshadri Theorem revisited, arXiv:2509.24617v1 (2025)](https://arxiv.org/abs/2509.24617v1)
- [M. S. Narasimhan, C. S. Seshadri, Stable and unitary vector bundles on a compact Riemann surface, Annals of Mathematics 82 (1965)](https://doi.org/10.2307/1970710)

### Testing only Higgs-invariant subbundles lets unstable bundles solve Hitchin's equations

**Remember:** Test only the subbundles the Higgs field keeps.

*Rules out counterexamples.* MSC 14H60 (Vector bundles on curves and their moduli), 53C07, 53D30. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A Higgs bundle on a compact Riemann surface is a holomorphic bundle E with a holomorphic map φ: E → E ⊗ K, where K is the canonical bundle. It is stable when every nonzero proper subbundle F with φ(F) ⊂ F ⊗ K has smaller slope, degree over rank, than E. Polystable means a direct sum of stable Higgs bundles of equal slope.

**Problem.** Let (E,φ) be a degree-zero Higgs bundle on a compact Riemann surface. It is polystable exactly when a Hermitian metric solves Hitchin’s equations for its Chern connection and Higgs field.

**How the definition helps.** The Hitchin–Simpson correspondence uses exactly this invariant-subbundle slope test (our own). In genus at least two take L² = K and E = L ⊕ L⁻¹, with φ mapping L isomorphically onto L⁻¹ ⊗ K and killing L⁻¹. The only invariant line subbundle is L⁻¹, of negative degree, so (E,φ) is stable though L destabilizes E (our own).

**Paper or page:** [The Algebraic and Analytic Compactifications of the Hitchin Moduli Space](https://arxiv.org/abs/2304.08198), [The moduli space of solutions to the Extended Bogomolny equations on Σ×ℝ₊](https://arxiv.org/abs/2401.10999). It says: “A Higgs bundle (E,φ) is polystable if and only if there exists a Hermitian metric H such that the corresponding Chern connection A and Higgs field ϕ=φ+φ† solve the Hitchin equations”

**Sources:**

- [S. He, R. Mazzeo, X. Na and R. Wentworth, The Algebraic and Analytic Compactifications of the Hitchin Moduli Space, Moduli 1 (2024) e2](https://arxiv.org/abs/2304.08198)
- [N. J. Hitchin, The Self-Duality Equations on a Riemann Surface, Proceedings of the London Mathematical Society s3-55 (1987)](https://doi.org/10.1112/plms/s3-55.1.59)

### Defining isogeny degree by function fields makes degrees multiply under composition

**Remember:** Compose the maps, then multiply the degrees in the tower of fields.

*True by definition. Confidence: medium.* MSC 14K02 (Isogeny), 14K05. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** An isogeny is a surjective homomorphism of abelian varieties with finite kernel. Its degree is the degree of the function field extension it induces by pullback, which also counts inseparable parts such as Frobenius.

**Problem.** The degree of a composite of isogenies is the product of their degrees, also in positive characteristic.

**How the definition helps.** With field degrees, multiplicativity is the tower law for K(C) ⊂ K(B) ⊂ K(A) (our own). Counting kernel points misses the inseparable degree: the p-power Frobenius of an elliptic curve has degree p but no nonzero kernel points (our own).

**Wikipedia:** [Isogeny](https://en.wikipedia.org/wiki/Isogeny). It says: “The degree of the extension K(A) / im f\* is called degree of isogeny”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III (2009)](https://doi.org/10.1007/978-0-387-09494-6)

### Complete connected algebraic groups are automatically commutative

**Remember:** Complete and connected: the commutator map has nowhere to go.

*Rules out counterexamples.* MSC 14K05 (Algebraic theory of abelian varieties), 14L10. arXiv math.AG. Level 3: graduate.

**Definition.** An abelian variety over an algebraically closed field is a connected smooth algebraic group that is proper (complete) over the field. Properness lets the rigidity lemma apply: a map from X × Y with X complete, constant on one slice, is constant on all parallel slices.

**Problem.** Every complete connected algebraic group over an algebraically closed field is commutative.

**How the definition helps.** The commutator map (x,y) ↦ xyx⁻¹y⁻¹ is constant on the slices x = e and y = e, so rigidity makes it constant, equal to e (our own proof). Finite noncommutative groups show that connectedness is needed, and GL₂ shows that properness is needed (our own examples).

**nLab:** [abelian variety](https://ncatlab.org/nlab/show/abelian+variety). It says: “gives at least two proofs that every complete algebraic group over an algebraically closed field is automatically abelian.”

**Sources:**

- [David Mumford, Abelian varieties, Tata Institute of Fundamental Research Studies in Mathematics 5, Oxford University Press (1970)](https://wstein.org/edu/Fall2003/252/references/mumford-abvar/Mumford-Abelian_Varieties.pdf)

### Defining duals by pulling back line bundles makes duality reverse composition

**Remember:** Pull back bundles in reverse order, and the dual maps follow.

*True by definition.* MSC 14K05 (Algebraic theory of abelian varieties), 14K02. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** For a homomorphism f between abelian varieties, its dual sends each algebraically trivial line bundle class to its pullback along f.

**Problem.** The dual of g ∘ f is the dual of f composed with the dual of g.

**How the definition helps.** Pulling a bundle back along g ∘ f first pulls it back along g and then along f (our own explanation).

**Wikipedia:** [Dual abelian variety](https://en.wikipedia.org/wiki/Dual_abelian_variety). It says: “it is contravariant functorial”

**Sources:**

- [Joseph H. Silverman, The Arithmetic of Elliptic Curves, Chapter III, §6 (2009)](https://doi.org/10.1007/978-0-387-09494-6)
- [James S. Milne, Abelian Varieties, §8](https://www.jmilne.org/math/CourseNotes/AV.pdf)

### Defining Weil restriction by points makes its Tate module an induced module

**Remember:** Each embedding of the larger field supplies one copy of the torsion data.

*True by definition. Confidence: medium.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 11F80. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let A be an abelian variety over a finite separable extension L/K. Its Weil restriction is the variety whose points over each K-algebra R are A(L ⊗<sub>K</sub> R). So over a separable closure its points are one copy of A per K-embedding of L (our own).

**Problem.** For every prime ℓ invertible in K, the Weil restriction has Tate module induced from the absolute Galois representation on Tℓ(A). Its underlying group has one summand isomorphic to Tℓ(A) per K-embedding of L into a separable closure.

**How the definition helps.** Galois permutes these copies, and the stabilizer of one copy acts on it through the usual action on the torsion of A (our own). Taking ℓ-power torsion and inverse limits gives the induced module (our own).

**nLab:** [Tate module](https://ncatlab.org/nlab/show/Tate+module). It says: “of the directed diagram given by kernels of the endomorphisms of A defined by multiplication by pⁿ”

**Sources:**

- [Siegfried Bosch, Werner Lütkebohmert and Michel Raynaud, Néron Models, §7.6 (1990)](https://doi.org/10.1007/978-3-642-51438-8)

### Néron's mapping property makes rational points extend by definition

**Remember:** Define the model by what maps into it, and points extend.

*True by definition.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 14G40. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** Let R be a Dedekind domain with fraction field K. A Néron model N of A/K is a smooth separated finite-type R-scheme with identified generic fibre A satisfying the following property. For every smooth R-scheme X, each K-map X<sub>K</sub> → A extends uniquely to an R-map X → N.

**Problem.** Every K-point of A extends uniquely to an R-point of its Néron model. A Néron model, if it exists, is unique up to unique isomorphism, so its fibre at each prime gives a well-defined reduction of A.

**How the definition helps.** Taking X = Spec R extends points (our own). Taking X to be either model extends the generic identity in both directions. Uniqueness makes the composites identities.

**Wikipedia:** [Néron model](https://en.wikipedia.org/wiki/N%C3%A9ron_model). It says: “If a Néron model exists then it is unique up to unique isomorphism.”

**Sources:**

- [André Néron, Modèles minimaux des variétés abéliennes sur les corps locaux et globaux, Publications Mathématiques de l'IHÉS 21 (1964) 5–128](https://doi.org/10.1007/BF02684271)

### A universal-property Albanese makes an abelian variety its own Albanese

**Remember:** Every pointed map to an abelian variety factors uniquely through the Albanese.

*True by definition.* MSC 14K30 (Picard schemes, higher Jacobians), 14K05. arXiv math.AG. Level 3: graduate.

**Definition.** The Albanese of a pointed variety X is an abelian variety with a pointed morphism a from X. Every pointed morphism from X to an abelian variety factors uniquely through a by a homomorphism.

**Problem.** The Albanese variety of an abelian variety, pointed at its identity, is that same abelian variety.

**How the definition helps.** With the universal property, one only checks that the identity of A is universal. It is, because every pointed map between abelian varieties is a homomorphism, by the rigidity lemma (our own). A Picard construction would instead need biduality, the theorem that the dual of the dual of A is A (our own).

**nLab:** [Albanese variety](https://ncatlab.org/nlab/show/Albanese+variety). It says: “Moreover, the Albanese variety of the Albanese variety is the Albanese variety.”

**Sources:**

- [James S. Milne, Abelian Varieties (course notes)](https://www.jmilne.org/math/CourseNotes/AV.pdf)

### The Lazard ring carries the universal formal group law by definition

**Remember:** Free coefficients, only the forced relations: that is the Lazard ring.

*True by definition.* MSC 14L05 (Formal groups, \\(p\\)-divisible groups), 55N22. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** The Lazard ring L is the polynomial ring on the coefficients aᵢⱼ of a general power series F(x,y) = x+y+∑ᵢ,ⱼ≥₁ aᵢⱼxⁱyʲ, divided by exactly the relations that make F commutative and associative.

**Problem.** Every one-dimensional commutative formal group law over a commutative ring R comes from F by a unique ring map L → R.

**How the definition helps.** A ring map L → R is a choice of values for the aᵢⱼ that obeys exactly these relations, which is a formal group law over R (our own explanation). The map is unique because its values on the aᵢⱼ are the coefficients of the law (our own explanation).

**nLab:** [formal group](https://ncatlab.org/nlab/show/formal+group), [Lazard ring](https://ncatlab.org/nlab/show/Lazard+ring). It says: “But this is guaranteed by the vary choice of relations imposed in the definition of the Lazard ring.”

**Sources:**

- [Michel Lazard, Sur les groupes de Lie formels à un paramètre, Bulletin de la Société Mathématique de France 83 (1955) 251](https://doi.org/10.24033/bsmf.1462)
- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### As a group scheme, p-torsion always has order p²

**Remember:** Count the dimension of the coordinate ring, including nilpotents.

*Makes the theorem clean to state or prove.* MSC 14L15 (Group schemes), 14H52. arXiv math.AG, math.NT. Level 3: graduate.

**Definition.** The order of a finite group scheme over a field k is the dimension over k of its coordinate ring, so it counts nilpotent functions as well as points.

**Problem.** For an elliptic curve E over a field and a prime p, the p-torsion E\[p\] is a finite flat group scheme of order p². This holds in every characteristic, even when E\[p\] has fewer than p² points.

**How the definition helps.** E\[p\] is the kernel of multiplication by p, a finite flat map of degree p², so its coordinate ring has dimension p² (our own). When points are missing, nilpotent functions make up the count (our own).

**Wikipedia:** [Group scheme](https://en.wikipedia.org/wiki/Group_scheme). It says: “it is a finite flat group scheme of order p² that has either p connected components (if the curve is ordinary) or one connected component (if the curve is supersingular).”

**Sources:** none listed. No primary source with a working link was found.

### Commutative Hopf algebras as group objects make affine group points groups

**Remember:** Maps into a group object always form a group.

*True by definition.* MSC 14L15 (Group schemes), 16T05. arXiv math.QA, math.AG. Level 3: graduate.

**Definition.** A commutative Hopf k-algebra is a commutative k-algebra H whose spectrum Spec H is a group object, a scheme with multiplication, identity and inverse morphisms that obey the group axioms.

**Problem.** Let H be a commutative Hopf algebra over k. For each commutative k-algebra R, the algebra maps H → R form a group, naturally in R.

**How the definition helps.** An algebra map H → R is a point of Spec H with values in R, and the group morphisms act on these points (our own). The group axioms are identities of morphisms, so they hold on points, naturally in R (our own).

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A commutative Hopf monoid in a symmetric monoidal category V is the same as a group object in the opposite category CMon(V)ᵒᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Keeping only stable points gives group quotients that are varieties

**Remember:** Invariant sections see semistable points; stable ones have closed orbits, finite stabilisers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14L24 (Geometric invariant theory), 14L30. arXiv math.AG. Level 3: graduate.

**Definition.** For a reductive group acting on a projective variety with a linearised ample line bundle L, a point is semistable if some invariant section of a positive power of L is nonzero there. It is stable if, in addition, its orbit is closed among semistable points and its stabiliser is finite.

**Problem.** Let a reductive group act on a projective variety with a linearised ample line bundle. Then the semistable points have a good quotient that is a projective variety, and on the stable points this quotient is geometric.

**How the definition helps.** The invariant sections serve as homogeneous coordinates of the quotient, so they define it exactly on the semistable points, and Mumford’s theorem makes it a projective variety (our own summary). Closed orbits make each fibre over a stable point a single orbit (our own).

**nLab:** [geometric invariant theory](https://ncatlab.org/nlab/show/geometric+invariant+theory). It says: “such that the quotient stack on these is "close" to being represented by another projective variety”

**Sources:**

- [David Mumford, John Fogarty, Frances Kirwan, Geometric Invariant Theory, 3rd edition, Ergebnisse der Mathematik 34, Springer (1994; first edition by Mumford, 1965)](https://doi.org/10.1007/978-3-642-57916-5)

### Polystable orbits are exactly those that meet the moment map's zero set

**Remember:** Polystable: a lift's orbit is closed, so it has a shortest vector.

*Rules out counterexamples.* MSC 14L24 (Geometric invariant theory), 53D20. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** For a complex reductive group acting on projective space through a representation, a point is polystable if the orbit of a nonzero lift in the vector space is closed.

**Problem.** Use the moment map μ of the linearisation and a Hermitian metric invariant under a maximal compact subgroup K. A projective orbit is polystable exactly when it meets μ⁻¹(0), and the intersection is then one K-orbit.

**How the definition helps.** By Kempf–Ness, the moment map vanishes exactly at the shortest vectors of an orbit, a closed orbit contains such vectors, and they form one K-orbit (our own summary). With weights 1, −1, 0, the orbit of the lift (1,0,1) approaches (0,0,1) without reaching it, so that point is not polystable (our own example).

**Paper or page:** [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966), [Stability conditions and canonical metrics](https://arxiv.org/abs/2302.04966). It says: “A point x∈X is GIT polystable for the G action if and only if G·x intersects μ⁻¹(0). Furthermore, if x is polystable then G·x intersects μ⁻¹(0) is a unique K-orbit.”

**Sources:**

- [J. B. McCarthy, Stability conditions and canonical metrics, arXiv:2302.04966 (2023)](https://arxiv.org/abs/2302.04966)
- [G. Kempf and L. Ness, The length of vectors in representation spaces, Algebraic Geometry, Lecture Notes in Mathematics 732 (1979) 233–243](https://doi.org/10.1007/bfb0066647)

### Normality fills codimension-two holes

**Remember:** On a normal variety, a hole of codimension two hides no poles.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 13B22. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An affine integral variety is normal if its coordinate ring, a domain, contains every fraction that satisfies a monic polynomial over the ring. It follows that a fraction lies in the ring once it has no pole along any irreducible hypersurface (our own).

**Problem.** Remove a closed subset of codimension at least two from a normal affine integral variety. Every regular function on the remainder extends uniquely across the missing set.

**How the definition helps.** Removing a set of codimension two deletes no hypersurface, so a function on the remainder has no pole along any hypersurface and lies in the coordinate ring. In our own example, the polynomials in ℚ\[x, y\] with no linear terms form a ring that is not normal. Off the origin x = x³/x² = xy²/y² is regular, but x is not in the ring.

**Paper or page:** [Algebra, Lemma 10.157.6.](https://stacks.math.columbia.edu/tag/031T). It says: “R = \\bigcap\\nolimits\_{\\text{height}(\\mathfrak p) = 1} R<sub>\\mathfrak p</sub>”

**Sources:** none listed. No primary source with a working link was found.

### Normality rules out finite birational maps that glue or pinch

**Remember:** Every integral fraction is already there, so finite birational covers add nothing.

*Rules out counterexamples.* MSC 14M05 (Varieties defined by ring conditions (factorial, Cohen-Macaulay, seminormal)), 14E05. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** A variety is normal if each local ring is a domain that contains every element of its fraction field integral over it. So a finite birational map onto a normal variety brings no new functions (our own).

**Problem.** A birational morphism with finite fibres between integral varieties over an algebraically closed field is an open immersion if the target is normal. A normal point has only one branch.

**How the definition helps.** Zariski’s main theorem factors the morphism as an open immersion then a finite birational map, which is an isomorphism onto the normal target since its functions are integral (our own). Branches at a point match the points of the normalization above it, so a normal point has one branch (our own). The cusp x² = y³ shows the need: t ↦ (t³, t²) is finite and birational but not an isomorphism.

**Wikipedia:** [Normal scheme](https://en.wikipedia.org/wiki/Normal_scheme), [Zariski's main theorem](https://en.wikipedia.org/wiki/Zariski%27s_main_theorem). It says: “the cuspidal cubic curve X in the affine plane A² defined by x² = y³ is not normal, because there is a finite birational morphism A¹ → X (namely, t maps to (t³, t²)) which is not an isomorphism.”

**Sources:**

- [Oscar Zariski, Foundations of a general theory of birational correspondences, Transactions of the American Mathematical Society 53 (1943) 490–542](https://doi.org/10.1090/S0002-9947-1943-0008468-9)
- [Oscar Zariski, Some results in the arithmetic theory of algebraic varieties, American Journal of Mathematics 61 (1939) 249–294](https://doi.org/10.2307/2371499)

### Plücker coordinates make the Grassmannian a projective variety

**Remember:** A subspace becomes one wedge, up to scale.

*Makes the theorem clean to state or prove.* MSC 14M15 (Grassmannians, Schubert varieties, flag manifolds), 15A75. arXiv math.AG, math.RA. Level 3: graduate.

**Definition.** The Plücker map sends a k-dimensional subspace W of V to the line spanned by w₁ ∧ ⋯ ∧ wₖ, for any basis w₁, …, wₖ of W. A change of basis multiplies this wedge by a nonzero determinant, so the line depends only on W (our own).

**Problem.** The Plücker map is injective, so the Grassmannian is a subset of projective space. Its image is cut out by homogeneous quadratic equations, the Plücker relations, so the Grassmannian is a projective algebraic variety.

**How the definition helps.** The wedge u determines W as the set of v with v ∧ u = 0, so the map is injective (our own). The Plücker relations are quadratic equations that hold exactly for wedges of k vectors.

**Wikipedia:** [Plücker embedding](https://en.wikipedia.org/wiki/Pl%C3%BCcker_embedding), [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “This is an embedding of the Grassmannian into the projectivization ℙ(⋀ᵏ V). The image can be completely characterized as the intersection of a number of quadrics, the Plücker quadrics”

**Sources:** none listed. No primary source with a working link was found.

### Counting roots in the torus makes the Bernstein–Kushnirenko count exact

**Remember:** Leave out the coordinate axes, and polytope volumes count roots exactly.

*Makes the theorem clean to state or prove.* MSC 14M25 (Toric varieties, Newton polyhedra, Okounkov bodies), 52A39. arXiv math.AG, math.MG. Level 3: graduate.

**Definition.** Solutions are counted in the algebraic torus (ℂ∖{0})ⁿ, the points with no coordinate zero. There, multiplying a Laurent polynomial (one that allows negative exponents) by a monomial changes no solution and only translates its Newton polytope, the convex hull of its exponents.

**Problem.** For generic coefficients on fixed supports, n Laurent equations in n variables have as many torus solutions as the mixed volume of their Newton polytopes. Normalize mixed volume so that n copies of one polytope give its volume multiplied by n factorial.

**How the definition helps.** Translation does not change mixed volume, and in the torus multiplication by a monomial does not change solutions, so both sides of the count behave alike (our own). Outside the torus they do not: on the line, multiplying x − 1 by x adds the root zero (our own example). Bernstein’s theorem gives the count for generic coefficients (our own summary).

**Wikipedia:** [Bernstein–Kushnirenko theorem](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Kushnirenko_theorem). It says: “the number of nonzero complex solutions of a system of Laurent polynomial equations f₁ = ⋯ = fₙ = 0 is equal to the mixed volume of the Newton polytopes of such polynomials”

**Sources:**

- [David N. Bernstein, The number of roots of a system of equations, Functional Analysis and Its Applications 9 (1975) 183–185](https://doi.org/10.1007/BF01075595)
- [A. G. Kouchnirenko, Polyèdres de Newton et nombres de Milnor, Inventiones Mathematicae 32 (1976) 1–31](https://doi.org/10.1007/BF01389769)

### Requiring normality makes toric varieties correspond exactly to fans

**Remember:** Normal toric charts are cones, and the cones glue into a fan.

*Rules out counterexamples.* MSC 14M25 (Toric varieties, Newton polyhedra, Okounkov bodies). arXiv math.AG. Level 3: graduate.

**Definition.** A normal toric variety is a normal separated variety that contains a split torus as a dense open subset, with the torus action on itself extending to the variety. Normality makes each torus-invariant affine chart the semigroup ring of the characters in a rational cone (our own). The dual cones, in the cocharacter space, form a fan: finitely many strongly convex rational cones, closed under taking faces, any two meeting in a common face.

**Problem.** For a fixed split torus, fans in its cocharacter lattice classify normal toric varieties up to isomorphism restricting to the identity on the torus.

**How the definition helps.** Without normality the cusp, which has a dense torus, gives a chart from a non-saturated semigroup and no cone (our own). The fundamental theorem of toric geometry recovers the fan from the charts and glues the charts of a fan back into the variety (our own summary).

**Wikipedia:** [Toric variety](https://en.wikipedia.org/wiki/Toric_variety). It says: “This correspondence is called the fundamental theorem for toric geometry, and it gives a one-to-one correspondence between normal toric varieties and fans of strongly convex rational cones.”

**Sources:**

- [Michel Demazure, Sous-groupes algébriques de rang maximum du groupe de Cremona, Annales scientifiques de l'École Normale Supérieure 3 (1970) 507–588](https://doi.org/10.24033/asens.1201)
- [G. Kempf, F. Knudsen, D. Mumford, B. Saint-Donat, Toroidal Embeddings I, Lecture Notes in Mathematics 339 (1973)](https://doi.org/10.1007/BFb0070318)

### Four marks give quantum associativity

**Remember:** Two splittings of the same four marks give two bracketings.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG, math.SG. Level 3: graduate.

**Definition.** The small quantum product a ∗ b on the cohomology of a smooth complex projective variety is defined by its pairings (a ∗ b, c) = ∑\_β qᵝ⟨a,b,c⟩\_β. The sum runs over effective curve classes β, and ⟨a,b,c⟩\_β is a genus-zero three-point Gromov–Witten invariant.

**Problem.** The small quantum product of a smooth complex projective variety is associative.

**How the definition helps.** Paired with a fourth class, each bracketing of a ∗ b ∗ c is a sum of products of two three-point counts, one for a way a four-marked sphere splits into two (our own). The stable four-marked spheres form a projective line, and two of its splitting points have equal cohomology classes, so the two sums agree (our own). The splitting axiom of Gromov–Witten theory identifies each boundary contribution with these products (our own).

**Paper or page:** [Gromov-Witten invariants in family and quantum cohomology](https://arxiv.org/abs/2408.06616v2). It says: “T<sub>i</sub>\*(T<sub>j</sub> \* T<sub>k</sub>)\\  =\\  (T<sub>i</sub> \*T<sub>j</sub>)\*T<sub>k</sub>.”

**Sources:**

- [Gromov-Witten invariants in family and quantum cohomology](https://arxiv.org/abs/2408.06616v2)
- [Fulton and Pandharipande, Notes on stable maps and quantum cohomology](https://doi.org/10.1090/pspum/062.2/1492534)

### Stability removes infinite component symmetries

**Remember:** Finite symmetry: three special points on contracted spheres, one on contracted tori.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG. Level 3: graduate.

**Definition.** A stable map is a map from a connected projective nodal curve with distinct smooth marks that has only finitely many automorphisms, the reparametrizations of the curve that fix each mark and commute with the map.

**Problem.** Stability holds exactly when every contracted genus-zero component has at least three special points and every contracted genus-one component has at least one. Special points are the marks and the preimages of nodes, and a component is contracted when its image is a point.

**How the definition helps.** On a contracted component the map imposes no condition, so its symmetries are those of the curve fixing its special points (our own). Only the identity of a sphere fixes three points, an elliptic curve has finitely many automorphisms fixing one point, and higher genus has finitely many anyway (our own). On a nonconstant component the map itself leaves only finitely many symmetries (our own).

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “The above stability condition is then equivalent to saying that the group of automorphisms of f is finite.”

**Sources:**

- [Fulton and Pandharipande, Notes on stable maps and quantum cohomology](https://doi.org/10.1090/pspum/062.2/1492534)

### Real radical ideals are determined by their real zeros

**Remember:** If a sum of squares belongs, all its unsquared terms belong.

*Rules out counterexamples.* MSC 14P05 (Real algebraic sets), 13A15. arXiv math.AG, math.AC. Level 3: graduate.

**Definition.** An ideal I in ℝ\[x₁,…,xₙ\] is real radical if, for every finite list of polynomials, ∑ⱼ fⱼ² ∈ I implies every fⱼ ∈ I. This is the test that the ideal of a real set always passes, since a sum of real squares is zero only when each square is.

**Problem.** Let I be a real radical ideal in a polynomial ring in finitely many variables over ℝ. Then I consists exactly of the polynomials vanishing on all common real zeros of I.

**How the definition helps.** Every ideal of polynomials vanishing on a real set is therefore real radical, and the real Nullstellensatz gives the converse (our own). The prime ideal (x² + y²) is not real radical: it misses x, although x vanishes at its only real zero (our own example).

**Wikipedia:** [Real radical](https://en.wikipedia.org/wiki/Real_radical). It says: “However, one can recover a similar theorem, the real Nullstellensatz, by using the real radical in place of the (ordinary) radical.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing inequalities makes projections of real algebraic sets stay in the class

**Remember:** Shadows of curves need inequalities to describe them.

*Rules out counterexamples.* MSC 14P10 (Semialgebraic sets and related spaces), 03C64, 03C10. arXiv math.AG, math.LO. Level 3: graduate.

**Definition.** A semialgebraic set in ℝⁿ is a finite union of sets, each defined by finitely many polynomial equations and strict polynomial inequalities.

**Problem.** The Tarski–Seidenberg theorem: the projection of a semialgebraic set is semialgebraic. Equivalently, the theory of real closed fields has quantifier elimination.

**How the definition helps.** Inequalities allow a projection to omit a point. The hyperbola xy = 1 projects onto {x : x² &gt; 0}, which no polynomial equations alone describe in ℝ. Projection amounts to existential quantification, and Tarski’s elimination theorem supplies the general result (our own).

**Wikipedia:** [Tarski–Seidenberg theorem](https://en.wikipedia.org/wiki/Tarski%E2%80%93Seidenberg_theorem). It says: “If we only define sets using polynomial equations and not inequalities then we define algebraic sets rather than semialgebraic sets. For these sets the theorem fails, i.e. projections of algebraic sets need not be algebraic.”

**Sources:**

- [Seidenberg, A. (1954). A new decision method for elementary algebra. Annals of Mathematics 60, 365–374.](https://doi.org/10.2307/1969640)

### The tropical hypersurface is where the minimum is attained twice

**Remember:** Every vanishing polynomial must have a tie for least valuation.

*Makes the theorem clean to state or prove.* MSC 14T10 (Foundations of tropical geometry and relations with algebra), 14T20. arXiv math.AG. Level 3: graduate.

**Definition.** For a Laurent polynomial f = ∑ᵤ aᵤxᵘ, its tropical hypersurface is the set of weights w where the least of the values val(aᵤ)+u·w over nonzero terms is attained at least twice. For a torus subvariety with ideal I, intersect these hypersurfaces over all nonzero f ∈ I.

**Problem.** Over an algebraically closed field with a nontrivial real valuation, this intersection is the closure of the coordinatewise valuations of the variety’s points, and also the set of weights whose initial ideal contains no monomial. For one hypersurface the first equality is Kapranov’s theorem.

**How the definition helps.** At a zero of f, a unique term of least valuation could never cancel (our own). The minimum terms form the initial form, linking ties to initial ideals (our own). The fundamental theorem of tropical geometry identifies both descriptions with the closure of valuation vectors.

**Wikipedia:** [Tropical geometry](https://en.wikipedia.org/wiki/Tropical_geometry). It says: “The equivalence of these definitions is referred to as the Fundamental Theorem of Tropical Geometry.”

**Sources:**

- [Manfred Einsiedler, Mikhail Kapranov, Douglas Lind, Non-archimedean amoebas and tropical varieties, Journal für die reine und angewandte Mathematik 601 (2006) 139–157, arXiv math/0408311](https://arxiv.org/abs/math/0408311)

### If 𝔽₁-modules are pointed sets, K(𝔽₁) is the sphere spectrum

**Remember:** Over 𝔽₁, a vector space is just its basis plus a zero point.

*True by definition. Confidence: medium.* MSC 14A15 (Schemes and morphisms), 19D23, 55P42. arXiv math.AG, math.KT. Level 4: research.

**Definition.** In this model a finite-dimensional 𝔽₁-vector space is a finite pointed set. Its isomorphisms are pointed bijections, and its direct sum joins the two sets at their basepoints.

**Problem.** If finite-dimensional 𝔽₁-vector spaces are pointed finite sets, then the algebraic K-theory K(𝔽₁) is the sphere spectrum 𝕊. So algebraic K-theory over 𝔽₁ is stable cohomotopy.

**How the definition helps.** Deleting the basepoint identifies this symmetric monoidal groupoid with finite sets and bijections under disjoint union (our own). Its group completion gives the sphere spectrum by the Barratt–Priddy–Quillen theorem (our own).

**nLab:** [field with one element](https://ncatlab.org/nlab/show/field+with+one+element), [K-theory of a permutative category](https://ncatlab.org/nlab/show/K-theory+of+a+permutative+category). It says: “With the identification 𝔽₁ Mod ≃ FinSet∗/ from above it follows that the algebraic K-theory over 𝔽₁ is stable cohomotopy”

**Sources:**

- [Chenghao Chu, Oliver Lorscheid, Rekha Santhanam, Sheaves and K-theory for 𝔽₁-schemes, Advances in Mathematics 229 (2012), arXiv:1010.2896](https://arxiv.org/abs/1010.2896)
- [Anton Deitmar, Remarks on zeta functions and K-theory over F1, 2006, arXiv:math/0605429](https://arxiv.org/abs/math/0605429)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Treat Spec A as a locale or ∞-topos, not a topological space

**Remember:** Keep the lattice of opens of Spec A; forget whether it has enough points.

*Makes the theorem clean to state or prove.* MSC 14A15 (Schemes and morphisms), 18F70, 18N60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** The Zariski locale of a commutative ring A keeps only the lattice of open sets of Spec A, without points. It is presented by one basic open D(f) for each f ∈ A, with relations D(0)=0, D(1)=1, D(fg)=D(f)∧D(g) and D(f+g)≤D(f)∨D(g).

**Problem.** This definition of Spec A needs no axiom of choice, works in relative situations and extends to the étale topology. Its 0-truncated, 0-localic schemes are exactly the ordinary schemes (Lurie, Structured Spaces, Proposition 4.2.9).

**How the definition helps.** The presentation uses only ring operations, so it needs no prime ideals and hence no axiom of choice (our own). Replacing locales by structured topoi allows étale charts, and Lurie’s comparison theorem recovers ordinary schemes in the 0-truncated, 0-localic case (our own).

**nLab:** [scheme as a locally affine structured (infinity,1)-topos](https://ncatlab.org/nlab/show/scheme+as+a+locally+affine+structured+%28infinity%2C1%29-topos). It says: “it is in some sense coincidental that Spec A is described by a topological space. What arises more canonically is the lattice of open subsets of Spec A”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces (2009), arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Gluing a formal model to its generic fibre works for algebraic spaces

**Remember:** Glue the rigid generic fibre to an open part of the algebraic generic piece.

*Makes the theorem clean to state or prove.* MSC 14A20 (Generalizations (algebraic spaces, stacks)), 14G22, 14D15. arXiv math.AG. Level 4: research.

**Definition.** Over a complete discrete valuation ring with fraction field K, a separated gluing triple has three parts. The first two are a separated algebraic space U over K and a separated formal algebraic space over the ring, both locally of finite type. The third is an open embedding of the formal space’s rigid generic fibre into the analytification of U.

**Problem.** Over a complete discrete valuation ring, separated gluing triples are equivalent to separated algebraic spaces of locally finite type. Some gluings give an algebraic space that is not a scheme, even when U and the special fibre are projective.

**How the definition helps.** The triple records an algebraic space by its generic part, its formal completion along the special fibre and their overlap, and the gluing theorem rebuilds the space by Nagata compactification and Artin contraction (our own summary). Matsumoto’s examples show that the result can fail to be a scheme even when U and the special fibre are projective.

**Paper or page:** [Beauville-Laszlo gluing of algebraic spaces](https://arxiv.org/abs/2410.20500v1), [Beauville-Laszlo gluing of algebraic spaces](https://arxiv.org/abs/2410.20500v1). It says: “Examples due to Matsumoto imply that the result of such a gluing might be a genuine algebraic space (not a scheme) even if U and the special fiber of 𝔛 are projective.”

**Sources:**

- [Piotr Achinger, Alex Youcis, Beauville-Laszlo gluing of algebraic spaces, arXiv:2410.20500 (2024)](https://arxiv.org/abs/2410.20500v1)

### Derived binomial rings give an integral formula for cohomology of log spaces

**Remember:** Map the coaugmented generators, and the map of derived binomial rings follows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A21 (Logarithmic algebraic geometry, log schemes), 13D03, 14F25. arXiv math.AG, math.AT. Level 4: research.

**Definition.** The free coaugmented derived binomial ring B(C) on a coaugmented complex C is the derived binomial ring generated by C. Maps B(C) → D to any derived binomial ring D correspond naturally to coaugmentation-preserving maps from C to D.

**Problem.** Let X be an fs log complex analytic space, and let π map its Kato–Nakayama space, the space of boundary angles, to X. Then Rπ∗ℤ is the free coaugmented derived binomial ring on the two-term exponential complex from 𝒪 to the group completion of the log structure.

**How the definition helps.** Freeness expresses the integral pushforward using one complex of generators (our own explanation). The integral comparison theorem identifies that free object with the Kato–Nakayama cochains and extends Steenbrink’s rational formula.

**Paper or page:** [Derived binomial rings I: integral Betti cohomology of log schemes](https://arxiv.org/abs/2308.01110v1). It says: “This gives an extension of Steenbrink's formula and its generalization by the second author to ℤ-coefficients.”

**Sources:**

- [Dmitry Kubrak, Georgii Shuklin, Alexander Zakharov, Derived binomial rings I: integral Betti cohomology of log schemes, arXiv:2308.01110 (2023)](https://arxiv.org/abs/2308.01110v1)

### Endomorphism algebras of tilting bundles are Calabi–Yau exactly on Calabi–Yau varieties

**Remember:** The bimodule dual must recover the algebra shifted by its dimension.

*True by definition. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16E35, 14J32. arXiv math.AG, math.RA. Level 4: research.

**Definition.** An algebra A over a field is d-Calabi–Yau if A is perfect as a module over A ⊗ Aᵒᵖ and its bimodule dual RHom<sub>A⊗Aᵒᵖ</sub>(A, A ⊗ Aᵒᵖ) is isomorphic to A\[−d\] as a bimodule complex.

**Problem.** Let X be a smooth connected variety of dimension d, projective over an affine variety, with a tilting generator ℰ. Then End ℰ is Calabi–Yau of dimension d exactly when the canonical sheaf of X is trivial.

**How the definition helps.** Under tilting, A corresponds to the diagonal structure sheaf, and its bimodule dual corresponds to the shifted inverse canonical bundle on the diagonal (our own). Thus the required isomorphism amounts to triviality of the canonical bundle, as in Ginzburg’s Proposition 3.3.1.

**nLab:** [Calabi-Yau algebra](https://ncatlab.org/nlab/show/Calabi-Yau+algebra). It says: “Then End ℰ is a Calabi-Yau algebra of dimension d precisely if X is a Calabi-Yau manifold of dimension d.”

**Sources:**

- [V. Ginzburg, Calabi–Yau algebras, arXiv:math/0612139](https://arxiv.org/abs/math/0612139)

### Every noncommutative projective line is the ordinary projective line

**Remember:** Quantum planes are twists of k\[x,y\], so their projective lines agree.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16S38. arXiv math.RA, math.AG. Level 4: research.

**Definition.** A noncommutative projective line is the category QGr A of graded A-modules modulo torsion modules, with the image πA of A. Here A is an Artin–Schelter regular algebra of global dimension 2 generated in degree one.

**Problem.** Over an algebraically closed field, every noncommutative projective line is equivalent to ℙ¹ with its structure sheaf. This includes the quantum planes k⟨x,y⟩/(xy−qyx) for q ≠ 0 and the Jordan plane k⟨x,y⟩/(xy−yx−x²).

**How the definition helps.** The dimension-two classification identifies each coordinate algebra as a Zhang twist of k\[x,y\] (our own). Twisting preserves the graded module category, torsion modules and the distinguished free module (our own). Serre’s equivalence therefore identifies the quotient pair with sheaves on ℙ¹ and their structure sheaf (our own).

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “We analyse this automorphism groupoid, showing that in dimension 1 it is connected, so that every noncommutative ℙ¹ is isomorphic to commutative ℙ¹.”

**Sources:**

- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)
- [J. J. Zhang, Twisted graded algebras and equivalences of graded categories, Proceedings of the London Mathematical Society s3-72 (1996) 281–311](https://doi.org/10.1112/plms/s3-72.2.281)
- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics 66 (1987) 171–216](https://doi.org/10.1016/0001-8708(87)90034-X)

### Keeping the structure object and shift lets Artin–Zhang recover the graded ring

**Remember:** Remember the structure sheaf and its twists, and the ring comes back.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16W50. arXiv math.AG, math.RA. Level 4: research.

**Definition.** A projective triple (C,O,s) consists of a k-linear abelian category C, an object O and an autoequivalence s. Its coordinate ring has degree-n piece Hom(O,sⁿO) for n ≥ 0, with multiplication by shifted composition.

**Problem.** For connected noetherian Artin–Schelter regular A of dimension at least two, the coordinate ring of (QGr A, πA, shift) recovers A. If (C,O,s) is ample, C and O are noetherian and each Hom(O,M) is finite over End(O), then C is equivalent to qgr of its coordinate ring.

**How the definition helps.** The triple supplies both the graded pieces and their multiplication (our own). For connected noetherian Artin–Schelter regular A of dimension at least two, the first two local cohomology groups vanish, giving the stated identification (our own). Artin–Zhang reconstruction gives the categorical equivalence (our own).

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383), [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “The graded endomorphism algebra of πA in QGr A, GrEnd(πA) = ⨁<sub>n∈ℤ</sub> Hom<sub>QGr A</sub>(πA,(πA)(n)) is isomorphic as graded k-algebras to A.”

**Sources:**

- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)
- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)

### Quasi-free algebras have smooth representation schemes in every dimension

**Remember:** Lifting through all nilpotent extensions includes lifting through matrix rings.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16E40. arXiv math.RA, math.AG. Level 4: research.

**Definition.** An associative algebra A over a field k is quasi-free if every k-algebra map A → E/N lifts to E, for every associative k-algebra E and every nilpotent two-sided ideal N.

**Problem.** If A is finitely generated and quasi-free, then for each n the scheme Repₙ(A) of n-dimensional representations is smooth. This scheme sends a commutative ring C to the algebra maps from A to the matrix ring Mₙ(C).

**How the definition helps.** For every square-zero ideal J of a commutative k-algebra C, reduction of matrices has square-zero kernel Mₙ(J) (our own). Quasi-freeness thus lifts each representation over C/J to one over C (our own). Finite generation makes the representation scheme finite type over k, so the infinitesimal criterion gives smoothness (our own).

**nLab:** [quasi-free algebra](https://ncatlab.org/nlab/show/quasi-free+algebra), [Kontsevich-Rosenberg principle](https://ncatlab.org/nlab/show/Kontsevich-Rosenberg+principle). It says: “However most commutative formally smooth algebras are not formally smooth in the associative noncommutative sense.”

**Wikipedia:** [Quasi-free algebra](https://en.wikipedia.org/wiki/Quasi-free_algebra). It says: “In particular, a polynomial ring over a field is quasi-free if and only if the number of variables is at most one.”

**Sources:**

- [J. Cuntz and D. Quillen, Algebra extensions and nonsingularity, Journal of the American Mathematical Society 8 (1995) 251–289](https://doi.org/10.1090/s0894-0347-1995-1303029-0)
- [M. Kontsevich and A. L. Rosenberg, Noncommutative smooth spaces, The Gelfand Mathematical Seminars 1996–1999, Birkhäuser (2000) 85–108](https://doi.org/10.1007/978-1-4612-1340-6_5)

### Schematic algebras let noncommutative Proj be glued from Ore localizations

**Remember:** Enough Ore localizations give noncommutative charts, and Serre's theorem follows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16P40. arXiv math.RA, math.AG. Level 4: research.

**Definition.** A connected graded noetherian algebra R is schematic if finitely many Ore localizations cover it, as affine charts cover Proj. Precisely, there are finitely many homogeneous left Ore sets meeting R₊ such that one element from each set always generates a left ideal containing a power of R₊.

**Problem.** For a schematic algebra R, coherent sheaves on the noncommutative site of its Ore localizations form a category equivalent to Proj R. Here Proj R means finitely generated graded modules modulo torsion modules.

**How the definition helps.** The covering condition detects torsion by simultaneous vanishing on all the charts (our own). The Serre–Artin–Zhang–Verevkin theorem identifies the resulting quotient category with coherent sheaves.

**Paper or page:** [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings](https://arxiv.org/abs/2301.07815), [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings](https://arxiv.org/abs/2301.07815). It says: “(Serre-Artin-Zhang-Verevkin theorem). The category of coherent sheaves is equivalent to Proj(R).”

**Sources:**

- [F. Van Oystaeyen and L. Willaert, Grothendieck topology, coherent sheaves and Serre's theorem for schematic algebras, Journal of Pure and Applied Algebra 104 (1995) 109–122](https://doi.org/10.1016/0022-4049(94)00118-3)
- [Noncommutative scheme theory and the Serre-Artin-Zhang-Verevkin theorem for semi-graded rings, arXiv:2301.07815](https://arxiv.org/abs/2301.07815)

### Taking Serre's theorem as the definition of Proj makes truncation harmless

**Remember:** Finite-dimensional differences are torsion, so qgr cannot see them.

*True by definition.* MSC 14A22 (Noncommutative algebraic geometry), 16W50, 14A15. arXiv math.AG, math.RA. Level 4: research.

**Definition.** For a noetherian connected graded algebra A over a field k (A₀ = k, not necessarily commutative), Artin and Zhang define qgr A as finitely generated graded modules modulo torsion modules. A module is torsion when each element is killed by the part of A in degrees at least n, for some n.

**Problem.** Two finitely generated graded A-modules that agree in all large degrees become isomorphic in qgr A. In particular, a module M and each truncation M≥n give the same object.

**How the definition helps.** The quotient inverts the inclusion of each high-degree truncation because its cokernel is torsion (our own). Modules with isomorphic high-degree truncations therefore become isomorphic (our own).

**nLab:** [noncommutative algebraic geometry](https://ncatlab.org/nlab/show/noncommutative+algebraic+geometry). It says: “Serre's theorem on Proj of a graded ring is taken as a definition in the noncommutative case: quasicoherent sheaves over a Proj of a graded ring is the category of graded modules modulo the modules of finite length.”

**Paper or page:** [Coherent, Proposition 30.14.4](https://stacks.math.columbia.edu/tag/0BXD). It says: “Set X = Proj(A). The functor M ↦ M̃ induces an equivalence Mod<sup>fg</sup><sub>A</sub>/Mod<sup>fg</sup><sub>A, torsion</sub> ⟶ Coh(𝒪<sub>X</sub>)”

**Sources:**

- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)

### Tilting bundles on crepant resolutions give noncommutative crepant resolutions

**Remember:** Read a crepant resolution through a tilting bundle to get a noncommutative one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 14E15, 16S38. arXiv math.AG, math.RA. Level 4: research.

**Definition.** A noncommutative crepant resolution of a normal noetherian Gorenstein domain R is an algebra End<sub>R</sub>(M), for a nonzero finitely generated reflexive module M, that has finite global dimension and is maximal Cohen–Macaulay over R.

**Problem.** Let R be a normal Gorenstein domain, and let Y → Spec R be a projective crepant resolution with a tilting bundle 𝒯. Then End 𝒯 is a noncommutative crepant resolution of R, derived equivalent to Y.

**How the definition helps.** Tilting identifies the derived categories, and smoothness gives finite global dimension (our own). Crepancy and duality give the Cohen–Macaulay condition (our own). The tilting-bundle theorem identifies the algebra with the endomorphisms of the reflexive pushforward.

**Paper or page:** [Mutations of noncommutative crepant resolutions in geometric invariant theory](https://arxiv.org/abs/2310.11057), [Non-commutative crepant resolutions, an overview](https://arxiv.org/abs/2207.09703). It says: “Let R be a normal Gorenstein algebra and f : 𝔜 → Spec R is a stacky crepant resolution. Assume that 𝔜 admits a tilting bundle 𝒯. Then the reflexive R-module f♯𝒯 gives an NCCR of Y”

**Sources:**

- [M. Van den Bergh, Non-commutative crepant resolutions, in The Legacy of Niels Henrik Abel, Springer (2004) 749–770](https://doi.org/10.1007/978-3-642-18908-1_26)

### Twisted homogeneous coordinate rings carry Serre's theorem to an automorphism twist

**Remember:** Twist the multiplication by σ, and Serre's theorem still holds.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A22 (Noncommutative algebraic geometry), 16S38, 16W50. arXiv math.AG, math.RA. Level 4: research.

**Definition.** For a line bundle L and automorphism σ of a projective k-scheme X, the twisted homogeneous coordinate ring has degree-n piece the sections of Lₙ = L ⊗ σ\*L ⊗ ⋯ ⊗ (σⁿ⁻¹)\*L. A degree-m section a and a degree-n section b multiply to a ⊗ (σᵐ)\*b. L is σ-ample if, for each coherent F and every i &gt; 0, Hⁱ(X, F ⊗ Lₙ) vanishes for all large n.

**Problem.** For σ-ample L, the twisted section ring B is noetherian and qgr B is equivalent to coherent sheaves on X. For a three-dimensional elliptic Sklyanin algebra S, a central element g annihilates the point modules and S/gS is the corresponding twisted section ring.

**How the definition helps.** Twisted multiplication identifies the section spaces as the graded pieces of a ring (our own). Twisted Serre vanishing supplies the hypothesis of Artin–Van den Bergh’s equivalence (our own). The elliptic quotient is the Artin–Tate–Van den Bergh description of the three-dimensional Sklyanin algebra (our own).

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “then there exists an element g ∈ S which annihilates all point modules i.e. Mg = 0 for all point modules M of S.”

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “Let ℒ be an ample line bundle on a projective scheme X. Then Γ̄<sub>h</sub> defines an equivalence of categories between QCoh(X) and QGr B.”

**Sources:**

- [M. Artin and M. Van den Bergh, Twisted homogeneous coordinate rings, Journal of Algebra 133 (1990)](https://doi.org/10.1016/0021-8693(90)90269-t)
- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)

### Derived Azumaya algebras realize the whole bigger Brauer group

**Remember:** A derived Azumaya algebra has a module category invertible under tensor product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 16H05. arXiv math.AG, math.RA. Level 4: research.

**Definition.** A derived Azumaya algebra over a connective E∞ ring R is an R-algebra A whose module ∞-category is invertible under the tensor product of R-linear ∞-categories. Such algebras modulo Morita equivalence form the derived Brauer group.

**Problem.** For a quasi-compact, quasi-separated scheme X, every class in étale H²(X, 𝔾ₘ) is represented by a derived Azumaya algebra, including the non-torsion classes (Toën). Classical Azumaya algebras give at most the torsion part.

**How the definition helps.** Invertibility under tensor product gives a Brauer group of derived Morita classes (our own). Toën’s derived representability theorem realizes each étale H² class on a quasi-compact, quasi-separated scheme in that group (our own). Classical Azumaya classes are torsion (our own).

**nLab:** [Brauer group](https://ncatlab.org/nlab/show/Brauer+group), [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “as the "actual" Brauer group. This has been called the "bigger Brauer group”

**Sources:**

- [Benjamin Antieau, David Gepner, Brauer groups and étale cohomology in derived algebraic geometry, Geom. Topol. 18 (2014) 1149–1244, arXiv:1210.0290](https://arxiv.org/abs/1210.0290)
- [Bertrand Toën, Derived Azumaya algebras and generators for twisted derived categories, Invent. Math. 189 (2012) 581–652, arXiv:1002.2599](https://arxiv.org/abs/1002.2599)

### Derived intersections give the right intersection count without transversality

**Remember:** Intersect with Tor, not with the tensor product, and the count comes out right.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 14C17. arXiv math.AG. Level 4: research.

**Definition.** In derived geometry, two subschemes intersect in their derived fibre product, whose functions are the derived tensor product of their structure sheaves. Its homotopy groups are the Tor groups, so the higher Tor terms that correct the naive count are built in.

**Problem.** Let complementary-dimensional subvarieties of a smooth complex projective variety meet in finitely many points. The sum of their local alternating Tor lengths equals the degree of the product of their cohomology classes.

**How the definition helps.** The derived tensor product has the local Tor modules as its homotopy groups (our own). Its Euler characteristic is therefore the alternating length in Serre’s intersection formula (our own). Compatibility of the cycle class map with products identifies the resulting degree with the cohomological degree (our own).

**nLab:** [intersection theory](https://ncatlab.org/nlab/show/intersection+theory), [derived algebraic geometry](https://ncatlab.org/nlab/show/derived+algebraic+geometry), [derived stack](https://ncatlab.org/nlab/show/derived+stack). It says: “the cup product of two virtual fundamental classes of mid-dimensional subspaces equals the fundamental class of their derived intersection”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Hochschild homology is functions on the derived self-intersection of the diagonal

**Remember:** Intersect the diagonal with itself using the derived fibre product.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 13D03. arXiv math.AG, math.KT. Level 4: research.

**Definition.** For affine X over a field k, its derived loop space is the derived self-intersection of the diagonal X → X ×ₖ X.

**Problem.** For X = Spec A over a field k, the functions on its derived loop space give the Hochschild chains of A over k.

**How the definition helps.** Affine derived fibre products give derived tensor products of coordinate rings (our own). For X = Spec A, both diagonal maps correspond to multiplication A ⊗ₖ A → A. Their derived tensor product is the Hochschild chain complex of A over k.

**nLab:** [derived geometry](https://ncatlab.org/nlab/show/derived+geometry), [derived loop space](https://ncatlab.org/nlab/show/derived+loop+space). It says: “To some extent this is just the tautological dual reformulation of Hochschild homology as the (∞,1)-categorical (derived) tensor product”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, S¹-equivariant simplicial algebras and de Rham theory, 2009, arXiv:0904.3256](https://arxiv.org/abs/0904.3256)
- [David Ben-Zvi, David Nadler, Loop spaces and connections, Journal of Topology 5 (2012), arXiv:1002.3636](https://arxiv.org/abs/1002.3636)

### In K-theory, the virtual class is the class of the structure sheaf

**Remember:** The virtual class of a derived scheme is the derived scheme itself.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 19E08, 14C35. arXiv math.AG, math.KT. Level 4: research.

**Definition.** For a derived scheme X with bounded coherent structure sheaf, its K-theoretic virtual class is the inverse image of \[𝒪<sub>X</sub>\] under dévissage G₀(t₀X) ≅ G₀(X).

**Problem.** If the homotopy sheaves πᵢ𝒪<sub>X</sub> are coherent and vanish for large i, exactly one class in G₀(t₀X) maps to \[𝒪<sub>X</sub>\]. It equals ∑ᵢ (−1)ⁱ\[πᵢ𝒪<sub>X</sub>\].

**How the definition helps.** Dévissage gives uniqueness, and the finite Postnikov filtration gives the formula (our own). Each layer is the corresponding homotopy sheaf shifted by its index, producing the alternating signs (our own).

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class). It says: “In our hearts we all know that the fundamental class should be something tautological”

**Sources:**

- [Bertrand Toën, Derived algebraic geometry, EMS Surveys in Mathematical Sciences 1 (2014) 153–240, arXiv:1401.1044](https://arxiv.org/abs/1401.1044)
- [Bertrand Toën, Higher and derived stacks: a global overview, arXiv:math/0604504](https://arxiv.org/abs/math/0604504)

### Keeping the tensor product lets perfect complexes recover the scheme

**Remember:** A prime tensor ideal contains a product only if it contains a factor.

*Rules out counterexamples.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 14F08, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** The points of the Balmer spectrum of perfect complexes are the prime tensor ideals, the proper thick tensor ideals P such that a ⊗ b ∈ P forces a ∈ P or b ∈ P. Its closed sets are generated by the supports {P : a ∉ P} of perfect complexes a.

**Problem.** For a noetherian scheme X, Spc of the perfect complexes on X is homeomorphic to X. With its natural structure sheaf it is isomorphic to X as a scheme.

**How the definition helps.** Thomason’s classification of thick tensor ideals by supports makes the prime ones the points of X, and Balmer recovers the structure sheaf from localized categories (our own). Without the tensor product this fails: Mukai’s equivalence identifies the derived categories of an abelian variety and its dual, which need not be isomorphic (our own).

**nLab:** [spectrum of a tensor triangulated category](https://ncatlab.org/nlab/show/spectrum+of+a+tensor+triangulated+category). It says: “If one restricts to perfect complexes then often the variety may be reconstructed from the spectrum of its category of coherent sheaves.”

**Sources:**

- [Paul Balmer, Presheaves of triangulated categories and reconstruction of schemes, Math. Ann. 324 (2002) 557–580](https://doi.org/10.1007/s00208-002-0353-1)
- [Shigeru Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Math. J. 81 (1981) 153–175](https://doi.org/10.1017/s002776300001922x)
- [Alexei Bondal and Dmitri Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Math. 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)

### Left-exact functors give rings for free, and covers make them local

**Remember:** Left exactness makes the values rings; preserving covers makes them local.

*True by definition. Confidence: medium.* MSC 14A30 (Fundamental constructions in algebraic geometry involving higher and derived categories (homotopical algebraic geometry, derived algebraic geometry, etc.)), 18N60, 14A15. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A Zariski structure on X is a finite-limit-preserving functor from the opposite category of finitely presented commutative rings to sheaves of sets on X. For every finite family generating the unit ideal, the basic opens must map to a jointly surjective family, so locally one element is invertible.

**Problem.** For the Zariski geometry of commutative rings, finite-limit-preserving functors to sheaves of sets on X correspond to sheaves of rings. Imposing the covering condition gives exactly those ring sheaves whose stalks are local rings.

**How the definition helps.** Finite-limit preservation gives a sheaf of rings. Joint surjectivity means that whenever finitely many elements generate the unit ideal in a stalk, one is invertible (our own). The empty cover of the zero ring excludes zero stalks, completing the local ring criterion (our own).

**nLab:** [structured (infinity,1)-topos](https://ncatlab.org/nlab/show/structured+%28infinity%2C1%29-topos). It says: “Since rings can be identified with left-exact functors (Ringᶠⁱⁿ)ᵒᵖ → Set, we don't need to impose any admissibility structure in order to recover the notion of a sheaf of rings, since left-exactness is part of the definition of a "structure sheaf.”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry V: Structured Spaces, 2009, arXiv:0905.0459](https://arxiv.org/abs/0905.0459)

### Smooth hypersurfaces have contractible matrix factorizations

**Remember:** Differentiate the square to find a homotopy.

*Rules out counterexamples. Confidence: medium.* MSC 14B05 (Singularities in algebraic geometry), 81T30. arXiv math.AG. Level 4: research.

**Definition.** For a nonzero complex polynomial W, a finite free matrix factorization consists of even and odd free polynomial modules of finite rank. A polynomial operator d exchanges the two modules and satisfies d² = W·1. Call the factorization contractible if some operator h exchanging the modules satisfies dh + hd = 1.

**Problem.** If the hypersurface defined by W is smooth as a scheme, every finite free matrix factorization of W is contractible.

**How the definition helps.** Smoothness makes W and its partial derivatives generate the unit ideal, and each is null-homotopic: ∂d is a homotopy for ∂W, and d/2 is one for W (our own). Combining these homotopies with the polynomial coefficients that express 1 gives a contraction (our own). For W = x², which is not smooth, the factorization with both maps x is not contractible at zero (our own).

**nLab:** [matrix factorization](https://ncatlab.org/nlab/show/matrix+factorization). It says: “For example, matrix factorization categories are related to derived categories of singularities.”

**Sources:**

- [Orlov, Triangulated categories of singularities and equivalences between Landau-Ginzburg models](https://doi.org/10.1070/sm2006v197n12abeh003824)

### Total transforms preserve nodal gluing

**Remember:** Keep the exceptional curve to keep the two branches joined.

*Rules out counterexamples.* MSC 14B05 (Singularities in algebraic geometry), 32S35. arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a blow-up π and a closed subscheme X, the reduced total transform is the entire inverse image π⁻¹(X) with its reduced scheme structure.

**Problem.** Let X be the union of the two coordinate axes in the plane, and blow up the origin. Then the functions on the reduced total transform push forward to exactly the functions on X.

**How the definition helps.** The exceptional projective line meets both strict transforms, and every regular function on that line is constant (our own example). Thus the branch values at the origin agree. Conversely, matching branch functions extend by their common value along the exceptional line, exactly the gluing rule for X (our own).

**Wikipedia:** [Du Bois singularity](https://en.wikipedia.org/wiki/Du_Bois_singularity). It says: “let E be the reduced preimage of X in Z”

**Sources:**

- [Karl Schwede, A simple characterization of Du Bois singularities (2007), Theorem 4.6](https://doi.org/10.1112/S0010437X07003004)

### Formal moduli problems are the same as differential graded Lie algebras

**Remember:** A deformation problem that respects gluing of thickenings is a Lie algebra in disguise.

*Makes the theorem clean to state or prove.* MSC 14B12 (Local deformation theory, Artin approximation, etc.), 14A30, 17B70. arXiv math.AG, math.AT. Level 4: research.

**Definition.** Over a field k, a formal moduli problem is a functor F from augmented connective derived Artinian k-algebras with residue field k to spaces. It takes k to a contractible space and preserves pullbacks A ×<sub>B</sub> C whenever π₀(A) → π₀(B) is surjective.

**Problem.** Over a field of characteristic zero, formal moduli problems are equivalent to differential graded Lie algebras. Thus a differential graded Lie algebra governs each deformation functor satisfying the formal moduli conditions.

**How the definition helps.** Pullback preservation links values on successive infinitesimal extensions. The Pridham–Lurie theorem identifies functors satisfying this condition and the point condition with differential graded Lie algebras in characteristic zero (our own).

**nLab:** [formal moduli problem](https://ncatlab.org/nlab/show/formal+moduli+problem). It says: “The clause about pullbacks is what makes the behaviour at arbitrary infinitesimal order be all controlled by that at first order”

**Sources:**

- [Jonathan P. Pridham, Unifying derived deformation theories, Adv. Math. 224 (2010) 772–826, arXiv:0705.0344](https://arxiv.org/abs/0705.0344)

### Fixing each cohomology dimension separately gives a moduli space of subschemes

**Remember:** Fix every cohomology dimension separately, not only their alternating sum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C05 (Parametrization (Chow and Hilbert schemes)), 14D22, 14B12. arXiv math.AG. Level 4: research.

**Definition.** A fibre-full family is a flat family of closed subschemes of projective space, with projection π, in which every cohomology dimension is fixed. For all i and m, Rⁱπ∗𝒪(m) is locally free of the given rank hᵢ(m) and commutes with base change.

**Problem.** For fixed cohomology functions, a quasi-projective scheme represents fibre-full families with the prescribed dimensions. It is locally closed in the Hilbert scheme.

**How the definition helps.** These ranks distinguish changes in adjacent degrees that cancel in the Hilbert polynomial (our own). The fibre-full representability theorem realizes these simultaneous conditions on the Hilbert scheme (our own).

**Paper or page:** [A local study of the fiber-full scheme](https://arxiv.org/abs/2202.06652v4), [A local study of the fiber-full scheme](https://arxiv.org/abs/2202.06652v4). It says: “We study some of the local properties of the fiber-full scheme, which is a fine moduli space that generalizes the Hilbert scheme by parametrizing closed subschemes with prescribed cohomological data.”

**Sources:**

- [Yairon Cid-Ruiz and Ritvik Ramkumar, A local study of the fiber-full scheme, arXiv:2202.06652 (2022)](https://arxiv.org/abs/2202.06652v4)
- [Yairon Cid-Ruiz and Ritvik Ramkumar, The fiber-full scheme, Journal of Pure and Applied Algebra (2025)](https://doi.org/10.1016/j.jpaa.2025.108045)

### Logarithmic Chow rings prove multi-fold double ramification cycles are tautological

**Remember:** Multiply ramification classes on a common blow-up of the boundary.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14H10, 14C17. arXiv math.AG. Level 4: research.

**Definition.** The logarithmic Chow ring is the direct limit of Chow rings over logarithmic blow-ups, with pullback as transition map. To multiply two classes, pull their representatives to any common refinement and multiply there.

**Problem.** For degree-zero line bundles L₁,…,Lᵣ on the universal stable curve, the r-fold double ramification cycle lies in the tautological Chow ring.

**How the definition helps.** A common refinement allows the logarithmic double ramification classes to be multiplied before pushforward (our own). The logarithmic tautological ring contains the factors and is closed under products (our own). The pushforward theorem puts the resulting multiple ramification cycle in the ordinary tautological ring (our own).

**Paper or page:** [Logarithmic intersections of double ramification cycles](https://arxiv.org/abs/2104.11450v1), [Logarithmic intersections of double ramification cycles](https://arxiv.org/abs/2104.11450v1). It says: “We describe a theory of logarithmic Chow rings and tautological subrings for logarithmically smooth algebraic stacks, via a generalisation of the notion of piecewise-polynomial functions.”

**Sources:**

- [David Holmes, Rosa Schwarz, Logarithmic intersections of double ramification cycles, arXiv:2104.11450 (2021)](https://arxiv.org/abs/2104.11450v1)

### Numerical equivalence makes the category of motives semisimple

**Remember:** Numerically equivalent cycles have identical intersection degrees against every complementary cycle.

*Makes the theorem clean to state or prove.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14C25. arXiv math.AG. Level 4: research.

**Definition.** Cycles of the same dimension on a smooth projective variety are numerically equivalent if their intersection degrees agree against every complementary-dimensional cycle.

**Problem.** With coefficients in a field of characteristic 0, numerical motives form a semisimple abelian category (Jannsen). Conversely, numerical equivalence is the only adequate relation whose motives form a semisimple abelian category.

**How the definition helps.** The intersection pairing detects exactly the correspondences that disappear in numerical motives (our own). Jannsen’s semisimplicity theorem proves both the semisimplicity statement and its converse for adequate relations.

**nLab:** [numerical motive](https://ncatlab.org/nlab/show/numerical+motive), [pure motive](https://ncatlab.org/nlab/show/pure+motive). It says: “numerical equivalence is precisely the only adequate equivalence relation relation that gives the category of pure motives this property.”

**Sources:**

- [Uwe Jannsen, Motives, numerical equivalence, and semi-simplicity, Inventiones Mathematicae 107 (1992) 447–452](https://epub.uni-regensburg.de/26642/)

### Pairing against tautological classes splits every cycle class on abelian-variety moduli

**Remember:** Match every tautological pairing to find the tautological part.

*True by definition.* MSC 14C15 ((Equivariant) Chow groups and rings; motives), 14K10, 14C17. arXiv math.AG. Level 4: research.

**Definition.** Tautological classes on the moduli space 𝒜 of principally polarized abelian varieties are generated by the Chern classes of the Hodge bundle. The pairing of a cycle with a tautological class integrates their product times the top Chern class of the Hodge bundle over a compactification. The tautological projection is the tautological class with the same pairings.

**Problem.** Every cycle class with rational coefficients on 𝒜 decomposes canonically as a tautological part plus a part that pairs to zero with every tautological class.

**How the definition helps.** The decomposition is orthogonal projection onto the tautological ring, which works because the pairing is nondegenerate there (our own). The new result is that the top Chern class of the Hodge bundle vanishes on the boundary of every toroidal compactification, so the pairing does not depend on the compactification.

**Paper or page:** [Tautological projection for cycles on the moduli space of abelian varieties](https://arxiv.org/abs/2401.15768v4), [Tautological projection for cycles on the moduli space of abelian varieties](https://arxiv.org/abs/2401.15768v4). It says: “every cycle class decomposes canonically as a sum of a tautological and a non-tautological part.”

**Sources:**

- [Samir Canning, Sam Molcho, Dragos Oprea, Rahul Pandharipande, Tautological projection for cycles on the moduli space of abelian varieties, arXiv:2401.15768 (2025)](https://arxiv.org/abs/2401.15768v4)

### Shifts change Bott–Chern signs

**Remember:** Swap even and odd, and the secondary class changes sign.

*True by definition.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14G40. arXiv math.AG. Level 4: research.

**Definition.** The secondary Chern character of a bounded exact hermitian holomorphic complex is a class of forms modulo ∂- and ∂̄-exact terms. Its ddᶜ is the alternating sum of the Chern character forms, with the chosen sign convention. The assignment commutes with pullbacks and vanishes on orthogonally split complexes.

**Problem.** Shifting a bounded exact complex of hermitian holomorphic bundles by one degree negates its secondary Chern character. Shifting by two degrees preserves it.

**How the definition helps.** The axioms determine the shifted class without repeating the integral construction (our own). One shift reverses the signed sum while preserving pullback compatibility and orthogonal splitting (our own). The negative of the original class therefore satisfies all three axioms, and the uniqueness theorem identifies it with the shifted class (our own).

**Paper or page:** [Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2). It says: “\\widetilde {\\phi }(\\overline {E}<sub>\\ast </sub>\[k\])=(-1)<sup>k</sup>\\widetilde {\\phi }(\\overline {E}<sub>\\ast </sub>).”

**Sources:**

- [J. I. Burgos Gil and R. Litcanu, Singular Bott-Chern classes and the arithmetic Grothendieck-Riemann-Roch theorem for closed immersions](https://arxiv.org/abs/0902.0430v2)

### The virtual fundamental class always has the expected dimension

**Remember:** The virtual class has the dimension that naive counting predicts.

*Makes the theorem clean to state or prove.* MSC 14C17 (Intersection theory, characteristic classes, intersection multiplicities in algebraic geometry), 14N35, 14A30. arXiv math.AG. Level 4: research.

**Definition.** For a perfect obstruction theory of amplitude \[−1,0\], place the intrinsic normal cone inside the vector bundle stack given by the obstruction theory and intersect it with the zero section. The result, the virtual fundamental class, lies in the degree given by the virtual rank, the expected dimension.

**Problem.** Fix a smooth complex projective target and stable maps with prescribed genus, markings and curve class. Their moduli stack carries a virtual class of expected dimension. Integration against it defines Gromov–Witten invariants even when components exceed that dimension.

**How the definition helps.** Intersection with the zero section lands in the Chow group of the virtual rank, whatever the actual dimension of the space (our own). The Behrend–Fantechi construction applies to the standard obstruction theory of stable maps to a smooth projective target, and properness allows integration (our own).

**nLab:** [virtual fundamental class](https://ncatlab.org/nlab/show/virtual+fundamental+class), [perfect obstruction theory](https://ncatlab.org/nlab/show/perfect+obstruction+theory), [hidden smoothness principle](https://ncatlab.org/nlab/show/hidden+smoothness+principle). It says: “The virtual fundamental class always lives in the expected dimension.”

**Sources:**

- [Maxim Kontsevich, Enumeration of rational curves via torus actions, in: The moduli space of curves, Progr. Math. 129 (1995), arXiv:hep-th/9405035](https://arxiv.org/abs/hep-th/9405035)
- [Kai Behrend, Barbara Fantechi, The intrinsic normal cone, Invent. Math. 128 (1997) 45–88, arXiv:alg-geom/9601010](https://arxiv.org/abs/alg-geom/9601010)

### Normalized cycles let regulator cuts vary

**Remember:** One boundary face means one list of cuts survives.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 19F27. arXiv math.AG. Level 4: research.

**Definition.** A normalized cubical cycle meets all faces properly and restricts to zero on each codimension-one face except possibly the last infinity face. Li requires proper intersection with the rotated cut intersections on every face for every allowed angle list. For some ε&gt;0, these lists satisfy 0&lt;θ₁&lt;ε and 0&lt;θⱼ₊₁&lt;exp(−1/θⱼ) at each subsequent step.

**Problem.** For a smooth quasi-projective variety over a subfield of ℂ, these cycles give Li's integral regulator, a map from higher Chow groups to Deligne cohomology.

**How the definition helps.** Only the last face contributes to the boundary, so its cut list is obtained by deleting the last angle (our own). Li’s exhaustion and regulator comparison theorems turn the compatible chain maps into an integral regulator (our own).

**Paper or page:** [Integral Regulators for Higher Chow Complexes](https://arxiv.org/abs/1805.04646), [Integral Regulators for Higher Chow Complexes](https://arxiv.org/abs/1805.04646). It says: “is a morphism of complexes.”

**Sources:**

- [Muxi Li, Integral Regulators for Higher Chow Complexes (2018)](https://arxiv.org/abs/1805.04646)

### Reduced modulus recovers Suslin homology

**Remember:** Repeated boundary points can retain a derivative as well as a value.

*Rules out counterexamples.* MSC 14C25 (Algebraic cycles), 14F42. arXiv math.AG. Level 4: research.

**Definition.** Let D be a nonzero effective divisor on a smooth projective curve C over a perfect field. The modulus Chow group is the group of zero-cycles outside D modulo divisors of rational functions congruent to one along D. For each point appearing with multiplicity m in D, this congruence requires ord(f−1) ≥ m there.

**Problem.** If every multiplicity of D is one, this group equals the zeroth Suslin homology of C − D. The equality can fail when a multiplicity exceeds one.

**How the definition helps.** With multiplicity one, the modulus condition tests only values at the missing points, which is exactly the relation in Suslin’s calculation for curves. If the point at infinity on the projective line over ℚ is doubled, the condition also fixes a first derivative, and an extra copy of ℚ appears in the modulus group (our own example). The affine line has zeroth Suslin homology only ℤ, since Suslin homology is invariant under the affine line (our own).

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

**Remember:** Homogeneous analytic torsion is the correction theory whose additive genus is zero.

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

**Definition.** For metrized projective maps f and g, give the relative tangent complex of g ∘ f the hermitian structure induced by the tangent triangle. This makes T<sub>f</sub> → T\_(g ∘ f) → f\*T<sub>g</sub> a tight distinguished triangle.

**Problem.** For composable metrized projective maps of regular arithmetic varieties, the relative arithmetic Todd classes multiply in the rational arithmetic Chow ring. The first factor is the class of the first map, and the second is its pullback of the next map’s class.

**How the definition helps.** Using the induced metric puts the tangent complexes in a tight triangle, one whose metrics introduce no secondary correction (our own). An independently chosen metric on the composite would require accounting for its discrepancy (our own). Multiplicativity then follows from the Todd class theorem for tight triangles (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Td̂(ḡ ∘ f̄) = f⁎Td̂(ḡ) · Td̂(f̄)”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Hodge cosets classify path torsors

**Remember:** Compare the Frobenius point with any Hodge point.

*Makes the theorem clean to state or prove.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** In Kim’s classification, an admissible right U-torsor T has a distinguished Frobenius-fixed point p and a Hodge reduction F⁰T under F⁰U. Its comparison class is uF⁰U, where h = pu for any K-point h of F⁰T.

**Problem.** Let U be the unipotent de Rham group of a pointed smooth proper curve with good reduction over a p-adic field K. The K-isomorphism classes of admissible torsors correspond bijectively to U(K)/F⁰U(K).

**How the definition helps.** Replacing h by hf for f ∈ F⁰U replaces u by uf, so the left coset is intrinsic (our own). Kim’s torsor classification proves that these cosets exhaust the isomorphism classes without repetition (our own).

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “the map T ↦ \[T\] defines a bijection”

**Sources:**

- [Minhyong Kim, The Unipotent Albanese Map and Selmer Varieties for Curves (2009)](https://doi.org/10.2977/prims/1234361156)

### Polylogarithm quotients simplify puncture monodromy

**Remember:** One puncture acts only on the generator.

*True by definition.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 33B30. arXiv math.AG. Level 4: research.

**Definition.** Use the completed rational group algebra of the thrice-punctured sphere, based tangentially at 0 toward 1. Write a,b for positive loops around 0,1 and J for the augmentation ideal. At level n ≥ 1, quotient by the right ideal generated by a−1, J(b−1) and Jⁿ.

**Problem.** In this quotient, right multiplication by a fixes the class of 1. Right multiplication by b − 1 has rank at most one and square zero.

**How the definition helps.** Every element is a scalar plus an element of J, and J(b − 1) is zero in the quotient, so multiplication by b − 1 sees only the scalar (our own). The image is at most one-dimensional, and b − 1 lies in J, so a second multiplication lands in the zero set J(b − 1); also a − 1 is zero, so a fixes the class of 1 (our own). Hain’s comparison theorem identifies this model with the system of classical polylogarithms (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950). It says: “The polylogarithm variation ℳ⁽ⁿ⁾ is the quotient of the variation of mixed Hodge structure”

**Sources:**

- [Richard Hain, Classical polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### The elliptic Hodge subgroup is additive

**Remember:** Hodge degree zero leaves just one letter.

*True by definition.* MSC 14D07 (Variation of Hodge structures (algebro-geometric aspects)), 14F35. arXiv math.AG. Level 4: research.

**Definition.** In the once-punctured elliptic series model over a characteristic-zero field, formal loops are group-like noncommutative series in A,B with constant term one. The coproduct sends each letter X to X ⊗ 1 + 1 ⊗ X. The zeroth Hodge subgroup consists of series containing no word with A.

**Problem.** In this model the formal loops in the zeroth Hodge step form the additive group. The parameter c corresponds to exp(cB).

**How the definition helps.** A group-like series with no word containing A involves only B, so it is f(B) with f(x + y) = f(x)f(y) by the coproduct (our own). In characteristic zero the logarithm of f is additive, hence linear, so f = exp(cB) (our own). Matching this word rule to the geometric Hodge filtration uses the elliptic connection theorem (our own).

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “\\text{words }w \\text{ in }A, B \\text{ s.t. }\\mathrm{deg}<sub>A</sub>w\\leq -j”

**Sources:**

- [Ben Moore, The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171)

### Defining good moduli spaces by exact invariants gives their geometry for free

**Remember:** Exact pushforward that keeps every function: a stack behaves like a quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14D22, 14L24. arXiv math.AG. Level 4: research.

**Definition.** A good moduli space is a map π : 𝒳 → X from an algebraic stack to an algebraic space that behaves like taking invariants. Precisely, π is quasi-compact, π∗ is exact on quasi-coherent sheaves, and 𝒪<sub>X</sub> → π∗𝒪\_𝒳 is an isomorphism.

**Problem.** Let π : 𝒳 → X be a good moduli space with X quasi-separated. Then π is surjective and universally closed, and it gives a bijection between the closed points of 𝒳 and of X. If 𝒳 is Noetherian, π is also universal for maps to algebraic spaces.

**How the definition helps.** Exactness makes images of closed substacks closed and keeps disjoint closed substacks apart, which gives universal closedness and the bijection on closed points (our own). Alper’s good moduli space theorem derives these properties and the universal property from these conditions (our own).

**Paper or page:** [J. Alper, Stacks and Moduli, Theorem 2.9 (good moduli spaces)](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “If π : 𝒳 → X is a good moduli space with X quasi-separated, then (1) π is surjective and universally closed; … In particular, π induces a bijection between closed points in 𝒳 and closed points in X”

**Sources:**

- [J. Alper, Stacks and Moduli (lecture notes), main theorem on properties of good moduli spaces](https://sites.math.washington.edu//~jarod/moduli.pdf)
- [J. Alper, Good moduli spaces for Artin stacks, Annales de l'Institut Fourier 63 (2013) 2349–2402](https://doi.org/10.5802/aif.2833)

### Fixed points with chosen isomorphisms give the real points of a stack

**Remember:** Fixed means fixed up to a chosen isomorphism, not fixed on the nose.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14P25, 18N10. arXiv math.AG. Level 4: research.

**Definition.** A fixed object of a groupoid with involution σ is an object x with a chosen isomorphism φ : x → σ(x) satisfying σ(φ)φ = id<sub>x</sub>. A map (x,φ) → (y,ψ) is an arrow u with ψu = σ(u)φ.

**Problem.** Let 𝒳 be a separated Deligne–Mumford stack of finite type over ℝ, and let complex conjugation act on its complex groupoid. Then the isomorphism classes of fixed objects, with the quotient topology, are homeomorphic to the real points of 𝒳 with the real analytic topology.

**How the definition helps.** A pair (x,φ) is exactly descent data from ℂ to ℝ, so a fixed object is a real point (our own). For the classifying stack of a group of order two, one complex point has two real forms, which fixing on the nose would merge (our own). The cited fixed-locus theorem identifies the topologies.

**Paper or page:** [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2), [Topological groupoids with involution and real algebraic stacks](https://arxiv.org/abs/2504.02760v2). It says: “We prove that when the topological groupoid with involution arises from a Deligne-Mumford stack over ℝ, this fixed locus coincides with the real locus of the stack.”

**Sources:**

- [Emiliano Ambrosi, Olivier de Gaay Fortman, Topological groupoids with involution and real algebraic stacks, arXiv:2504.02760 (2025)](https://arxiv.org/abs/2504.02760v2)

### Regular stacks are those where every bounded coherent complex is perfect

**Remember:** Regular means every coherent sheaf has a finite vector bundle resolution.

*True by definition. Confidence: medium.* MSC 14D23 (Stacks and moduli problems), 14F08. arXiv math.AG. Level 4: research.

**Definition.** A Noetherian algebraic stack is regular when it has a smooth cover by a regular scheme. By Serre’s theorem, this means every coherent sheaf on the cover is locally resolved by a finite complex of vector bundles, so it is perfect.

**Problem.** A decent, quasi-compact, locally Noetherian algebraic stack is regular exactly when every complex with bounded coherent cohomology is perfect. This is Serre’s regularity theorem moved from local rings to stacks.

**How the definition helps.** Perfectness is local for the smooth topology, so on a regular cover Serre’s theorem makes bounded coherent complexes perfect (our own). The converse needs the authors’ comparison of the cover definition with this derived test. With it they prove stacky forms of conjectures of Antieau–Gepner–Heller and Bondal–Van den Bergh.

**Paper or page:** [Regularity and bounded t-structures for algebraic stacks](https://arxiv.org/abs/2504.02813v1). It says: “such a stack is regular if and only if all complexes with bounded and coherent cohomology are perfect. This naturally enables us to extend various statements known for schemes to algebraic stacks.”

**Sources:**

- [Timothy De Deyn, Pat Lank, Kabeer Manali Rahul, Fei Peng, Regularity and bounded t-structures for algebraic stacks, arXiv:2504.02813v1 (2025)](https://arxiv.org/abs/2504.02813v1)

### S-equivalence says exactly which semistable bundles the moduli space identifies

**Remember:** Bundles with the same stable pieces land on the same point.

*Makes the theorem clean to state or prove.* MSC 14D23 (Stacks and moduli problems), 14H60. arXiv math.AG. Level 4: research.

**Definition.** Semistable bundles are S-equivalent when the direct sums of their stable Jordan–Hölder factors, their polystable bundles, are isomorphic. Each bundle degenerates to its polystable bundle along a filtration, a map from \[𝔸¹/𝔾ₘ\]. For stacks, points are quasi-S-equivalent when filtrations degenerate them to isomorphic associated graded points.

**Problem.** Geometric points representing semistable bundles on a smooth projective curve have the same moduli image exactly when they are S-equivalent. For locally reductive stacks of finite type with adequate moduli space, the corresponding criterion is quasi-S-equivalence.

**How the definition helps.** A filtration joins a point to its associated graded point, so the moduli map gives both the same image (our own). For bundles the associated graded point is the polystable bundle from Jordan–Hölder (our own). Zhang’s comparison theorem supplies the converse for locally reductive stacks (our own).

**Paper or page:** [S-equivalence for algebraic stacks](https://arxiv.org/abs/2411.04053v1). It says: “Two semistable vector bundles are identified in the adequate moduli space if and only if they are S-equivalent.”

**Sources:**

- [Xucheng Zhang, S-equivalence for algebraic stacks, arXiv:2411.04053v1 (2024)](https://arxiv.org/abs/2411.04053v1)
- [C. S. Seshadri, Space of unitary vector bundles on a compact Riemann surface, Annals of Mathematics 85 (1967)](https://doi.org/10.2307/1970444)

### Nilpotent singular support makes the geometric Langlands equivalence true

**Remember:** Add only sheaves with nilpotent singular support, and the sides match.

*Makes the theorem clean to state or prove.* MSC 14D24 (Geometric Langlands program (algebro-geometric aspects)), 14F10, 14D23. arXiv math.AG, math.RT. Level 4: research.

**Definition.** The nilpotent spectral category consists of ind-coherent sheaves on the derived stack of Langlands-dual de Rham local systems whose singular support lies in the global nilpotent cone. Singular support measures how far a sheaf is from quasi-coherent, so this adds to quasi-coherent sheaves only the nilpotent directions.

**Problem.** Fix a connected reductive group and a smooth projective complex curve. The de Rham geometric Langlands equivalence identifies the half-canonically twisted D-modules on the bundle stack with the nilpotent spectral category.

**How the definition helps.** Quasi-coherent sheaves alone are too few, as Lafforgue’s example with SL₂ on ℙ¹ shows (our own summary). Nilpotent singular support adds exactly the objects the automorphic side needs (our own). The proof of the geometric Langlands conjecture gives the equivalence (our own).

**nLab:** [geometric Langlands correspondence](https://ncatlab.org/nlab/show/geometric+Langlands+correspondence). It says: “A refined formulation of the conjecture due to Arinkin &amp; Gaitsgory 12, meant to fix this failure, replaces plain quasicoherent sheaves with certain "nilpotent" ind-objects of quasicoherent sheaves”

**Sources:**

- [D. Arinkin, D. Gaitsgory, Singular support of coherent sheaves, and the geometric Langlands conjecture, arXiv:1201.6343 (2012)](https://arxiv.org/abs/1201.6343)
- [D. Gaitsgory, S. Raskin, Proof of the geometric Langlands conjecture I: construction of the functor, arXiv:2405.03599 (2024)](https://arxiv.org/abs/2405.03599)

### Generalized pairs make adjunction hold for log canonical centers of any codimension

**Remember:** Restricting to a center leaves a boundary plus a nef moduli part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14E30 (Minimal model program (Mori theory, extremal rays)), 14B05. arXiv math.AG. Level 4: research.

**Definition.** A generalized pair on a normal variety Z is a boundary B plus a nef part M, pushed forward from a nef ℝ-Cartier divisor on a higher model, with K<sub>Z</sub>+B+M ℝ-Cartier. Adjunction to a log canonical center with normalization ν : Z → W gives such a pair, ν\*(K<sub>X</sub>+Δ) ∼ℝ K<sub>Z</sub>+B+M (our own). It is generalized log canonical when, pulled back with the nef data to every higher model, all boundary coefficients are at most one.

**Problem.** Let W be a log canonical center of a pair (X, Δ), of any codimension, with normalization Z. Then (X, Δ) is log canonical near W exactly when the induced generalized pair on Z is generalized log canonical (Fujino–Hashizume).

**How the definition helps.** Adjunction to a center of high codimension produces the nef moduli part M, which a plain boundary cannot record (our own). Fujino–Hashizume prove that generalized log canonicity of this pair matches log canonicity of (X, Δ) near W.

**Paper or page:** [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2), [Adjunction and inversion of adjunction](https://arxiv.org/abs/2105.14531v2). It says: “We establish adjunction and inversion of adjunction for log canonical centers of arbitrary codimension in full generality.”

**Sources:**

- [Osamu Fujino, Kenta Hashizume, Adjunction and inversion of adjunction, arXiv:2105.14531v2 (2022)](https://arxiv.org/abs/2105.14531v2)

### Adequate modules repair the failure of quasi-coherent modules on big sites

**Remember:** Make kernels part of the definition, then divide by the parasites.

*Rules out counterexamples. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18E10. arXiv math.AG, math.CT. Level 4: research.

**Definition.** An adequate module on the big site of S is, locally on S, the kernel of a map between modules T ↦ Γ(T, f\*F) induced by quasi-coherent sheaves F. It is parasitic when it vanishes on every flat S-scheme.

**Problem.** Adequate modules on the big site form an abelian category, and the inclusion into all 𝒪-modules is exact. Quasi-coherent sheaves on S are the Serre quotient of adequate modules by parasitic ones.

**How the definition helps.** Quasi-coherent modules on the big site are not closed under kernels, because base change is not exact (our own). Multiplication by p over ℤ has a kernel that vanishes on flat schemes but not over 𝔽ₚ, so it is parasitic (our own). The theorem on adequate functors gives the exact abelian category and identifies the quotient by parasitic modules with quasi-coherent sheaves.

**Paper or page:** [Adequate, Lemma 46.5.11](https://stacks.math.columbia.edu/tag/06VQ), [Adequate, Lemma 46.6.2](https://stacks.math.columbia.edu/tag/06ZN). It says: “The subcategory 𝒞 ⊂ Adeq(𝒪) of parasitic adequate modules is a Serre subcategory. Moreover, the functor v induces an equivalence of categories Adeq(𝒪) / 𝒞 = QCoh(𝒪<sub>S</sub>).”

**Sources:** none listed. No primary source with a working link was found.

### Codim-2-saturated surfaces can be rebuilt from their reflexive sheaves

**Remember:** Reflexive sheaves ignore single points, so fill in every missing point first.

*Rules out counterexamples.* MSC 14F06 (Sheaves in algebraic geometry), 14J17. arXiv math.AG. Level 4: research.

**Definition.** A normal surface X is codim-2-saturated when every open embedding of X into a normal surface with finite complement is an isomorphism. Reflexive sheaves, those equal to their double dual, cannot see finitely many points, so this removes the only ambiguity they leave.

**Problem.** Every normal surface has a canonical codim-2-saturated model. This model can be rebuilt from the category of reflexive sheaves on the surface.

**How the definition helps.** Reflexive sheaves extend uniquely across finitely many points, so the definition removes exactly the surfaces they cannot tell apart. In our own example, the affine plane with and without the origin have equivalent categories of reflexive sheaves. The proof shows that the category is quasi-abelian and uses weakly localising Serre subcategories.

**Paper or page:** [Reconstruction of a surface from the category of reflexive sheaves](https://arxiv.org/abs/2302.04635v3). It says: “We reconstruct the codim-2-saturated model of a normal surface X from the additive category of reflexive sheaves on X.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Reconstruction of a surface from the category of reflexive sheaves, arXiv:2302.04635v3 (2023)](https://arxiv.org/abs/2302.04635v3)

### Reflexive pullbacks push back unchanged

**Remember:** Take the double dual before pushing back.

*True by definition.* MSC 14F06 (Sheaves in algebraic geometry), 32C35. arXiv math.AG. Level 4: research.

**Definition.** The reflexive pullback of a sheaf is the double dual of its ordinary pullback. A reflexive sheaf, one equal to its double dual, on a normal variety is determined by its sections off any closed set of codimension at least two.

**Problem.** Let f be a proper birational morphism between normal varieties and F a reflexive coherent sheaf on the target. Then the pushforward along f of the reflexive pullback of F is F.

**How the definition helps.** Off a closed set Z of codimension at least two in the target, f is an isomorphism, so the two sheaves agree there (our own). Sections of the pushforward over U then sit between F(U) and F(U minus Z) (our own). Reflexivity makes these two equal, so the pushforward is F (our own).

**Paper or page:** [Rational singularities and q-birational morphism](https://arxiv.org/abs/2301.04262v5). It says: “Suppose that $\\mathcal {F}$ is any reflexive sheaf on $X$. Then $\\mathcal {F}\\cong f\_\*(f<sup>\*\\mathcal</sup> {F})<sup>DD</sup>$.”

**Sources:**

- [Donghyeon Kim, Rational singularities and q-birational morphism, Lemma 3.6 (2024 preprint)](https://arxiv.org/abs/2301.04262v5)

### Sheaves on the generic fiber are sheaves on the family modulo torsion

**Remember:** Kill what vanishes at the generic point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 18E35, 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a finite-type family over a noetherian integral domain R, an R-torsion coherent sheaf is one whose restriction to the generic fibre vanishes. The Serre quotient by these sheaves inverts maps with R-torsion kernel and cokernel.

**Problem.** For a smooth separated finite-type family over a regular noetherian domain R, coherent sheaves on the generic fibre form the Serre quotient by R-torsion sheaves.

**How the definition helps.** Restriction to the generic fibre kills exactly the R-torsion sheaves (our own). Coherent localization extends generic sheaves and morphisms after clearing denominators, giving the equivalence with the Serre quotient (our own).

**Paper or page:** [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4), [Categorical generic fiber](https://arxiv.org/abs/2111.00239v4). It says: “For flat proper families of algebraic varieties with a smooth fiber, we describe the abelian category of coherent sheaves on the generic fiber as a Serre quotient.”

**Sources:**

- [Hayato Morimura, Categorical generic fiber, arXiv:2111.00239 (2024)](https://arxiv.org/abs/2111.00239v4)

### The functor of points defines quasicoherent sheaves on stacks

**Remember:** Assign modules on affines and identify each base change with its pullback.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F06 (Sheaves in algebraic geometry), 14A20, 14A30. arXiv math.AG. Level 4: research.

**Definition.** For a presheaf X on affines, QC(X) is the limit of module categories over all maps Spec R → X, using extension of scalars. An object assigns an R-module M<sub>R</sub> to each such map, with coherent identifications S ⊗<sub>R</sub> M<sub>R</sub> ≃ M<sub>S</sub> under each base change R → S.

**Problem.** This definition of QC(X) makes sense for any presheaf or stack, including ind-schemes and derived stacks. For a scheme, it agrees with the classical category of quasicoherent sheaves.

**How the definition helps.** The definition uses only maps from affine schemes, so it applies to any presheaf or stack, and each ingredient has a derived version. Descent theorems do the real work. They show that the limit agrees with the classical category on schemes and behaves well for flat covers of stacks (Hollander).

**nLab:** [quasicoherent sheaf](https://ncatlab.org/nlab/show/quasicoherent+sheaf). It says: “all notions involved, sheaf, stack, morphism of stacks, have natural, immediate and well understood generalizations to higher category theory.”

**Sources:**

- [Sharon Hollander, Descent for quasi-coherent sheaves on stacks, Algebraic and Geometric Topology 7 (2007) 411–438, arXiv:0708.2475](https://arxiv.org/abs/0708.2475)

### A shift Serre functor makes Calabi–Yau semiorthogonal decompositions trivial

**Remember:** When the Serre functor is a shift, one-way orthogonality becomes two-way.

*True by definition.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80, 14J32. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A semiorthogonal decomposition ⟨A,B⟩ consists of full triangulated subcategories satisfying Hom(b,a)=0 for every b ∈ B and a ∈ A. Each object x must fit into a triangle b → x → a → b\[1\] with b ∈ B and a ∈ A.

**Problem.** Let X be a connected smooth projective variety of dimension n with trivial canonical bundle. Then every semiorthogonal decomposition ⟨A, B⟩ of Dᵇ(X) has A = 0 or B = 0.

**How the definition helps.** Triviality of the canonical bundle makes the Serre functor the shift \[n\] (our own). Serre duality gives Hom(a,b) ≅ Hom(b,a\[n\])\* = 0, since A contains a\[n\] (our own). The decomposition is therefore orthogonal, and connectedness excludes a nontrivial orthogonal decomposition.

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “for an (irreducible) smooth projective variety X over a field, the bounded derived category Dᵇ(X) of coherent sheaves never has a nontrivial orthogonal decomposition”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### An ample or anti-ample canonical bundle leaves only the standard autoequivalences

**Remember:** Autoequivalences must permute points and line bundles, so they come from geometry.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Point objects and invertible objects are defined from the triangulated structure and the Serre functor S alone. A point object P has S(P) ≅ P\[n\], End(P) = k and Hom(P,P\[i\]) = 0 for i &lt; 0. An invertible object L has, for each point object P, exactly one i with Hom(L,P\[i\]) nonzero, and that space has dimension one.

**Problem.** Let X be a connected smooth projective variety over an algebraically closed field k with ample or anti-ample canonical bundle. Every k-linear exact autoequivalence of Dᵇ(X) is a composite of pullback by an automorphism, tensor with a line bundle and a shift, so their group is (Pic(X) ⋊ Aut(X)) × ℤ.

**How the definition helps.** Ample or anti-ample canonical bundle identifies point objects with shifted skyscrapers and invertible objects with shifted line bundles. These intrinsic tests are preserved by k-linear equivalences (our own). Bondal–Orlov reconstruction identifies the residual equivalence after removing the shift and line bundle twist with pullback by an automorphism (our own).

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “If all point objects of Dᵇ(X), for a smooth projective variety X, are translations of skyscraper sheaves of closed points, then all invertible objects of Dᵇ(X) are translations of invertible sheaves on X.”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “One nice application of the proof of this theorem is the identification of autoequivalences of the derived category of a smooth projective variety with ample (anti-)canonical sheaf.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)

### Composing kernels reduces Mukai's equivalence to cohomology of the Poincaré bundle

**Remember:** Convolve the Poincaré bundle with itself and get the antidiagonal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14K05, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** The Fourier–Mukai transform S sends F on A to Rp₂∗(p₁\*F ⊗ P), where P is the normalized Poincaré bundle on A × Â, whose restriction to A × {ξ} is the line bundle ξ. The reverse transform Ŝ uses P with its factors exchanged.

**Problem.** The composite of S and Ŝ is (−1)\* \[−g\], the pullback by x ↦ −x followed by a shift by −g. In particular S is an equivalence from Dᵇ(A) to Dᵇ(Â) (Mukai).

**How the definition helps.** The composite is a transform whose kernel at (a,b) computes the cohomology of the line bundle on Â given by a+b (our own). A nontrivial algebraically trivial line bundle has no cohomology, so the kernel lives on the antidiagonal (our own). Mukai’s calculation identifies it with the antidiagonal’s structure sheaf shifted by −g (our own).

**Wikipedia:** [Fourier–Mukai transform](https://en.wikipedia.org/wiki/Fourier%E2%80%93Mukai_transform). It says: “The Fourier–Mukai transformation is nearly involutive”

**Sources:**

- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### Defining mutations as projections keeps exceptional pairs exceptional

**Remember:** Mutate by projecting away from E, and the pair stays exceptional.

*True by definition. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** An exceptional pair (E,F) has RHom(E,E) = RHom(F,F) = k and RHom(F,E) = 0. Its left mutation L<sub>E</sub>(F) is the cone of evaluation RHom(E,F) ⊗ E → F, which removes from F exactly the part that E sees.

**Problem.** If (E, F) is an exceptional pair, then (L(F), E) is again an exceptional pair, and it generates the same subcategory as (E, F). Repeating mutations along a full exceptional collection gives an action of the braid group on such collections.

**How the definition helps.** Applying RHom(E,−) to the defining triangle gives RHom(E, L<sub>E</sub>(F)) = 0, and the other two checks follow the same way (our own). The triangle recovers either pair from the other, so they generate the same subcategory (our own). The braid action uses the braid relations theorem for mutations (our own).

**Paper or page:** [Full exceptional collections on Fano threefolds and groups generated by spherical twists on K3 surfaces](https://arxiv.org/abs/2412.06023). It says: “Then the action of the semidirect product B₄ ⋌ ℤ⁴ by mutations and shifts on the set of full exceptional collections in 𝒟ᵇ(X) is transitive and free.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### Point objects let Dᵇ(X) determine X with ample or anti-ample ω

**Remember:** Points are defined inside the category, so equivalences must match points.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a smooth projective n-fold with Serre functor S, a point object P satisfies S(P) ≅ P\[n\], End(P) is a field, and Hom(P,P\[i\])=0 for i&lt;0.

**Problem.** Let X and Y be smooth projective varieties over an algebraically closed field k, with canonical bundle of X ample or anti-ample. A k-linear exact equivalence Dᵇ(X) ≃ Dᵇ(Y) implies X ≅ Y.

**How the definition helps.** The intrinsic test identifies shifted skyscraper sheaves when the canonical bundle or its inverse is ample. Bondal–Orlov reconstruct the section ring using the Serre functor or its inverse, choosing the ample direction (our own). Taking Proj recovers the variety (our own).

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “Bondal and Orlov show how to reconstruct a smooth variety from its derived category of coherent sheaves when its canonical sheaf is ample or anti-ample, using only the graded structure (i.e. the translation functor).”

**Wikipedia:** [Derived noncommutative algebraic geometry](https://en.wikipedia.org/wiki/Derived_noncommutative_algebraic_geometry). It says: “Since an abelian variety is generally not isomorphic to its dual, there are derived equivalent derived categories without isomorphic underlying varieties.”

**Sources:**

- [A. Bondal and D. Orlov, Reconstruction of a variety from the derived category and groups of autoequivalences, Compositio Mathematica 125 (2001) 327–344](https://doi.org/10.1023/A:1002470302976)
- [S. Mukai, Duality between D(X) and D(X̂) with its application to Picard sheaves, Nagoya Mathematical Journal 81 (1981) 153–175](https://doi.org/10.1017/S002776300001922X)

### Spanning classes reduce full faithfulness to Ext groups between skyscraper sheaves

**Remember:** Check a functor on points, and it is checked everywhere.

*Makes the theorem clean to state or prove.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A spanning class Ω in a triangulated category detects zero objects from both sides. If Hom(ω,X\[i\]) = 0 for all ω ∈ Ω and all integers i, or if Hom(X,ω\[i\]) = 0 for all of them, then X = 0.

**Problem.** Let F : Perf(X) → Perf(Y) be a k-linear exact functor between proper k-schemes, with X regular. It is fully faithful exactly when it induces isomorphisms on every Ext group between every pair of closed-point skyscrapers.

**How the definition helps.** Regularity makes the closed-point skyscrapers perfect, and they form a spanning class (our own). Representability for the proper regular source gives the adjoints of the k-linear functor (our own). Bridgeland’s criterion then tests full faithfulness on that spanning class (our own).

**nLab:** [Bondal-Orlov reconstruction theorem](https://ncatlab.org/nlab/show/Bondal-Orlov+reconstruction+theorem). It says: “But {𝒪<sub>y</sub> : y ∈ Y} form a spanning class of Dᵇ(Y) which implies that P = 0.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.11.5](https://stacks.math.columbia.edu/tag/0G25). It says: “Assume X is regular. Then a k-linear exact functor F : D<sub>perf</sub>(𝒪<sub>X</sub>) → D<sub>perf</sub>(𝒪<sub>Y</sub>) is fully faithful if and only if for any closed points x, x′ ∈ X the maps”

**Sources:**

- [T. Bridgeland, Equivalences of triangulated categories and Fourier–Mukai transforms, Bulletin of the London Mathematical Society 31 (1999) 25–34](https://doi.org/10.1112/s0024609398004998)

### The spherical condition makes a twist an autoequivalence, unlike exceptional objects

**Remember:** Spheres twist the category; exceptional objects collapse under the same twist.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Let S be the Serre functor of the derived category of a smooth projective n-fold, with n&gt;0. A spherical object E satisfies S(E)≅E\[n\] and has one-dimensional self-Ext in degrees zero and n only, with all other degrees zero. Its twist sends F to the functorial cone of the evaluation RHom(E,F) ⊗ E → F.

**Problem.** For a spherical object E, the twist T is an exact autoequivalence of D (Seidel and Thomas). The same cone built from an exceptional object E is not an equivalence, because it sends E to zero.

**How the definition helps.** The two self-Ext groups give T(E) ≅ E\[1−n\], and the twist acts identically on E⊥ (our own). Seidel–Thomas prove equivalence by checking the twist on the spanning class formed by E and E⊥ (our own). For exceptional E, evaluation at E is an isomorphism, so the cone vanishes (our own).

**Paper or page:** [Invariant stability conditions on local P¹ × P¹ (after Del Monte-Longhi)](https://arxiv.org/abs/2404.05232), [Number of full exceptional collections modulo spherical twists for elliptic orbifolds](https://arxiv.org/abs/2311.11110). It says: “Let S be a spherical object in 𝒟. Then Tw<sub>S</sub> is an exact autoequivalence of 𝒟.”

**Sources:**

- [P. Seidel and R. Thomas, Braid group actions on derived categories of coherent sheaves, Duke Mathematical Journal 108 (2001) 37–108](https://doi.org/10.1215/s0012-7094-01-10812-0)

### The support property makes Bridgeland stability conditions deform continuously

**Remember:** One positive lower bound controls charge divided by class size for every semistable object.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 18G80. arXiv math.AG. Level 4: research.

**Definition.** The support property says that semistable objects cannot have small central charge compared with the size of their class. Precisely, for a norm on the real span of the finite-rank charge lattice, some C &gt; 0 satisfies \|Z(v(E))\| ≥ C‖v(E)‖ for every nonzero semistable object E.

**Problem.** Every small enough change of the central charge lifts to a nearby stability condition with the support property. So the space of such stability conditions is a complex manifold (Bridgeland’s deformation theorem).

**How the definition helps.** A perturbation of operator norm below C keeps every formerly semistable class away from zero charge relative to its norm (our own). Bridgeland’s deformation theorem supplies the nearby slicing and gives local complex coordinates through the central charge (our own).

**Paper or page:** [On a deformation of gluing stability conditions](https://arxiv.org/abs/2107.13367v2). It says: “Here the deformation property is weaker than the support property which is the standard solution for the continuousness.”

**Sources:**

- [Kotaro Kawatani, On a deformation of gluing stability conditions, arXiv:2107.13367v2 (2021)](https://arxiv.org/abs/2107.13367v2)
- [T. Bridgeland, Stability conditions on triangulated categories, Annals of Mathematics 166 (2007)](https://doi.org/10.4007/annals.2007.166.317)

### Thomason filtrations classify compactly generated tensor t-structures

**Remember:** One Thomason subset per degree describes a tensor t-structure.

*True by definition. Confidence: medium.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14A30, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A Thomason filtration of X assigns to each integer i a Thomason subset φ(i), a union of closed sets with quasi-compact open complements, with φ(i) ⊇ φ(i+1). A tensor aisle is a t-structure aisle closed under derived tensor with every complex that has no positive cohomology.

**Problem.** For a noetherian scheme X, compactly generated tensor t-structures on D(Qcoh X) correspond to Thomason filtrations of X. The filtration φ gives the aisle of complexes whose i-th cohomology sheaf has support in φ(i).

**How the definition helps.** Tensor closure makes support compatible with membership in a compactly generated aisle (our own). The tensor t-structure classification identifies the aisle by the supports of its cohomology sheaves in each degree. Its proof reduces to the affine classification by locality of compact generation (our own).

**Paper or page:** [Compactly generated tensor t-structures on the derived category of a Noetherian scheme](https://arxiv.org/abs/2204.05015). It says: “Let X be a Noetherian scheme. There is a one-to-one correspondence between Thomᶠⁱˡ(X) and Aisleᶜᵖ⊗(X).”

**Sources:**

- [Compactly generated tensor t-structures on the derived category of a Noetherian scheme, arXiv:2204.05015 (2022)](https://arxiv.org/abs/2204.05015)

### Thomason's classification needs tensor ideals, as the projective line shows

**Remember:** Support sees tensor ideals; on ℙ¹ it cannot see thick subcategories.

*Rules out counterexamples.* MSC 14F08 (Derived categories of sheaves, dg categories, and related constructions in algebraic geometry), 14A30, 18G80. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A thick subcategory of perfect complexes is a full triangulated subcategory closed under direct summands. It is a tensor ideal if it is also closed under tensoring with every perfect complex. The support of a complex is the set of points where its cohomology sheaves are not zero.

**Problem.** For a quasi-compact quasi-separated scheme X, taking the union of supports bijects thick tensor ideals of perfect complexes with Thomason subsets. These subsets are unions of closed sets with quasi-compact open complements.

**How the definition helps.** Closure under tensoring makes a thick subcategory depend only on supports, and Thomason’s classification proves this (our own). Without it the bijection fails: on ℙ¹ the thick subcategory generated by 𝒪 has full support but omits 𝒪(1) (our own example).

**Paper or page:** [Thick subcategories on weighted projective curves and nilpotent representations of quivers](https://arxiv.org/abs/2407.01207). It says: “Assume that 𝕏 is a weighted projective line: that is, X≅ℙ¹. Then any admissible subcategory 𝒯 ⊂ Dᵇ(coh 𝕏) is generated by an exceptional collection.”

**Sources:**

- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)

### With crystalline differential operators, D-modules are flat connections in characteristic p

**Remember:** Crystalline operators are just vector fields and functions, with bracket and Leibniz rules.

*True by definition.* MSC 14F10 (Differentials and other special sheaves; D-modules; Bernstein-Sato ideals and polynomials), 13N10, 14F30. arXiv math.AG. Level 4: research.

**Definition.** On a smooth k-scheme, crystalline differential operators form the enveloping algebra of the tangent Lie algebroid. It is generated by functions and vector fields, respecting their module structure, with commutators \[v,f\]=v(f) and \[v,w\] equal to the Lie bracket.

**Problem.** On a smooth scheme over a field of any characteristic, modules over crystalline differential operators are exactly the O-modules with a flat connection. For Grothendieck's full ring of differential operators this fails in characteristic p.

**How the definition helps.** An action of vector fields satisfying the function commutator is a connection, and the bracket relation is flatness. Conversely, these relations extend the action uniquely to the enveloping algebra. Grothendieck’s differential operators in positive characteristic also impose higher divided-power data (our own).

**nLab:** [D-module](https://ncatlab.org/nlab/show/D-module), [crystalline differential operator](https://ncatlab.org/nlab/show/crystalline+differential+operator). It says: “In contrast, modules over the ring of crystalline differential operators are tautologically O<sub>X</sub>-modules equipped with an integrable connection.”

**Sources:**

- [Roman Bezrukavnikov, Ivan Mirković, Dmitriy Rumynin, Localization of modules for a semisimple Lie algebra in prime characteristic, Annals of Mathematics 167 (2008), arXiv:math/0205144](https://arxiv.org/abs/math/0205144)

### Bounded changes preserve multiplier ideals

**Remember:** Bound the weight difference to bound each integrand by a multiple of the other.

*True by definition.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.AG, math.CV. Level 4: research.

**Definition.** For a holomorphic ideal with nonzero local generators f₁,…,fᵣ, take the weight φ = (c/2) log(Σ \|fⱼ\|²), with c positive. Its multiplier ideal consists of local holomorphic functions h for which \|h\|² exp(−2φ) has finite integral nearby.

**Problem.** Two such weights give the same multiplier ideal if they differ by bounded amounts locally, including near their common set of infinite values.

**How the definition helps.** If two weights differ by at most C, their exponential factors differ by a factor between exp(−2C) and exp(2C), so the same functions are integrable (our own proof). The common zero set of the generators has measure zero, so it does not affect the integrals.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “is locally integrable, where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [Andrew Nadel, Multiplier ideal sheaves and existence of Kähler–Einstein metrics of positive scalar curvature (1989)](https://doi.org/10.1073/pnas.86.19.7299)

### Diagonal restriction gives multiplier subadditivity

**Remember:** Separate the weights before you restrict to the diagonal.

*Makes the theorem clean to state or prove.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 4: research.

**Definition.** A plurisubharmonic weight is upper semicontinuous and subharmonic along complex lines in local coordinates. Its multiplier ideal 𝒥(φ) collects local holomorphic functions f for which \|f\|² exp(−2φ) is locally integrable.

**Problem.** For two such weights on a complex manifold, 𝒥(φ+ψ) is contained in the product ideal 𝒥(φ)𝒥(ψ).

**How the definition helps.** On X × X, the weight φ(x)+ψ(y) has multiplier ideal equal to the product of the two ideals (our own summary). On the diagonal this weight becomes φ+ψ, and the Ohsawa–Takegoshi restriction theorem gives the inclusion.

**Wikipedia:** [Multiplier ideal](https://en.wikipedia.org/wiki/Multiplier_ideal). It says: “is locally integrable, where the fᵢ are a finite set of local generators of the ideal.”

**Sources:**

- [J.-P. Demailly, L. Ein and R. Lazarsfeld, A subadditivity property of multiplier ideals (2000)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/subaddmult.pdf)

### Generic slices preserve multiplier ideals

**Remember:** One inclusion comes from slicing and the other from extension.

*Makes the theorem clean to state or prove.* MSC 14F18 (Multiplier ideals), 32U05. arXiv math.CV, math.AG. Level 4: research.

**Definition.** A quasi-plurisubharmonic weight φ is locally the sum of a smooth function and a plurisubharmonic function. Its multiplier ideal consists of holomorphic germs f for which \|f\|² exp(−2φ) is locally integrable.

**Problem.** On a positive-dimensional smooth complex projective variety, a general member H of a base-point-free linear system satisfies 𝒥(φ\|<sub>H</sub>) = 𝒥(φ)\|<sub>H</sub>. The exceptional members lie in a pluripolar subset of the parameter space.

**How the definition helps.** Fubini’s theorem gives one inclusion for almost every member, and weighted Ohsawa–Takegoshi extension gives the other (our own summary). Xia’s analytic Bertini theorem improves “almost every” to “outside a pluripolar set”.

**Paper or page:** [Analytic Bertini theorem](https://arxiv.org/abs/2110.14971v2). It says: “Then there is a pluripolar subset Σ ⊆ Λ”

**Sources:**

- [Mingchen Xia, Analytic Bertini theorem](https://arxiv.org/abs/2110.14971v2)

### Newton polyhedra compute multiplier ideals

**Remember:** Add one to each exponent, then test the interior of cP.

*True by definition.* MSC 14F18 (Multiplier ideals). arXiv math.CV, math.AG. Level 4: research.

**Definition.** The Newton polyhedron P of a nonzero monomial ideal is the convex hull of the exponents of its monomials. For generators gⱼ, its multiplier ideal at c &gt; 0 consists of holomorphic germs f with \|f\|²/(∑ⱼ\|gⱼ\|²)ᶜ locally integrable.

**Problem.** For a monomial ideal in complex affine space, its multiplier ideal at c is generated by monomials xᵛ with v+(1,…,1) inside cP. Here “inside” excludes the boundary.

**How the definition helps.** In logarithmic coordinates, \|xᵛ\|²/(∑ⱼ\|gⱼ\|²)ᶜ is integrable exactly when v+(1,…,1) lies in the interior of cP, the extra one coming from the volume element (our own calculation). The torus symmetry in each coordinate splits the test into separate monomials, so the ideal is monomial (our own).

**Paper or page:** [Multiplicities of Jumping Numbers](https://arxiv.org/abs/2102.07080v3). It says: “denotes the interior of the scaled Newton polyhedron P(c·𝔞).”

**Sources:**

- [J. A. Howald, Multiplier ideals of monomial ideals (2001)](https://doi.org/10.1090/S0002-9947-01-02720-9)

### A tameness condition removes the properness hypothesis for unramified cohomology

**Remember:** On an open variety, forbid wild ramification at infinity.

*Rules out counterexamples. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F42, 14C25. arXiv math.AG. Level 4: research.

**Definition.** An unramified class extends over each codimension-one point of X. It is curve-tame when, after any finitely generated field extension, its pullback to every normal curve over X is tamely ramified at the curve’s missing points at infinity.

**Problem.** Let X be smooth and geometrically connected over a field k of characteristic p. Suppose degree identifies zeroth Suslin homology with ℤ over every finitely generated extension of k. Then for each i, the curve-tame unramified classes of degree i + 1 with coefficients ℤ/p(i) all come from k.

**How the definition helps.** Curve-tameness ensures the evaluation pairing descends to Suslin homology (our own summary of Theorem 5.2). Universal degree-one generation lets that pairing recover each class from the base field (our own). On the affine line, yᵖ−y=t is unramified but wild at infinity, so it fails the extra test (our own).

**Paper or page:** [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3), [On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles](https://arxiv.org/abs/2010.03808v3). It says: “We also see that the properness assumption on the variety X can be dropped off by using the Suslin homology together with a certain tame subgroup of the unramified cohomology group.”

**Sources:**

- [Shusuke Otabe, On the mod p unramified cohomology of varieties having universally trivial Chow group of zero-cycles, arXiv:2010.03808 (2022)](https://arxiv.org/abs/2010.03808v3)

### Linear phases isolate zero fibers

**Remember:** A nonzero linear phase kills the whole fiber.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 11T23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a rank-r vector bundle E with section s in characteristic p, define g on E∨ by g(x,y)=y(s(x)). The phase coefficients are g\*ℒψ for the Artin–Schreier sheaf of a nontrivial additive character ψ of 𝔽ₚ.

**Problem.** Work over the algebraic closure with ℓ-adic coefficients for a prime ℓ different from p. Let Z be the zero locus of s and give Z constant coefficients. Its degree-j compactly supported cohomology is isomorphic to degree-(j + 2r) compactly supported cohomology of the dual bundle with the phase coefficients.

**How the definition helps.** A nonzero linear phase has vanishing compactly supported fibre cohomology (our own). Over Z the coefficients are constant, and the vector bundle trace gives one Tate-twisted copy in degree 2r (our own). Base change and extension by zero give the stated comparison as vector spaces over the algebraic closure (our own).

**Paper or page:** [Betti number bounds for varieties and exponential sums](https://arxiv.org/abs/2501.12623). It says: “In the situation above, we have an isomorphism of ℚ̄ℓ vector spaces Hʲ𝚌(V; ℚ̄ℓ) ≃ Hʲ⁺²ʳ𝚌(E∨; g∗ℒψ).”

**Sources:**

- [Betti number bounds for varieties and exponential sums](https://arxiv.org/abs/2501.12623)

### Lisse sheaves as dualizable objects give one theory for all coefficient rings

**Remember:** Lisse means dualizable; constructible means lisse on each stratum.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14F06. arXiv math.AG. Level 4: research.

**Definition.** A complex of proétale sheaves of modules is lisse if it has a tensor dual with evaluation and coevaluation satisfying the triangle identities. It is constructible if, on every affine open, some finite stratification by constructible locally closed subschemes makes its restrictions lisse.

**Problem.** This single definition of lisse and constructible sheaves works for every coefficient ring, including topological and condensed rings. It reproduces and extends the older definitions of constructible ℓ-adic sheaves.

**How the definition helps.** Tensor duality and restriction to strata make sense for condensed coefficient rings, including those arising from topological rings (our own). The comparison theorems of Hemo, Richarz and Scholbach recover the classical constructible ℓ-adic categories in their usual setting (our own).

**Paper or page:** [Constructible sheaves on schemes](https://arxiv.org/abs/2305.18131v1). It says: “This is accomplished by defining lisse sheaves to be the dualizable objects in the derived infinity-category of proétale sheaves, while constructible sheaves are those that are lisse on a stratification.”

**Sources:**

- [Tamir Hemo, Timo Richarz, Jakob Scholbach, Constructible sheaves on schemes, arXiv:2305.18131v1 (2023)](https://arxiv.org/abs/2305.18131v1)

### Strict local rings are what the étale topos of Spec ℤ classifies

**Remember:** Say “some root is simple” as “these coefficients generate 1”.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 03G30. arXiv math.AG, math.LO. Level 4: research.

**Definition.** A strict local ring is a local ring in which every unramifiable monic polynomial of positive degree has a simple root, a root r with p′(r) invertible. Here p is unramifiable when the nonconstant coefficients of ∏ᵢ(1+p′(sᵢ)x), over its formal roots sᵢ, generate the unit ideal.

**Problem.** The étale topos of Spec ℤ classifies strict local rings. So its points are the strict Henselian local rings (Hakim, Wraith).

**How the definition helps.** Both conditions, generating the unit ideal and having a root with invertible derivative, are geometric formulas, so strict local rings form a geometric theory (our own). The Hakim–Wraith theorem identifies its classifying topos with the étale topos of Spec ℤ (our own).

**nLab:** [strict local ring](https://ncatlab.org/nlab/show/strict+local+ring), [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “We need to knead the definition of strict Henselian ring into being geometric.”

**Sources:**

- [Monique Hakim, Topos annelés et schémas relatifs, Ergebnisse der Mathematik 64, Springer (1972)](https://doi.org/10.1007/978-3-662-59155-0)
- [Gavin Wraith, Generic Galois theory of local rings, in: Applications of Sheaves, Lecture Notes in Mathematics 753, Springer (1979)](https://doi.org/10.1007/bfb0061844)

### The pro-étale site makes ℓ-adic coefficients genuine sheaves

**Remember:** Allow pro-finite étale covers, and ℤℓ becomes an honest sheaf.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 14B25. arXiv math.AG. Level 4: research.

**Definition.** The pro-étale site of X has weakly étale X-schemes, those flat with flat diagonal, and fpqc covering families. On it, ℤℓ = lim ℤ/ℓⁿ is a genuine sheaf, and ℚℓ = ℤℓ\[1/ℓ\].

**Problem.** For a quasi-compact quasi-separated scheme X, ℓ-adic cohomology with rational coefficients is the sheaf cohomology of ℚℓ on its pro-étale site. This computes it directly from one coefficient sheaf.

**How the definition helps.** The pro-étale site admits enough weakly contractible affines for the inverse system of coefficient sheaves to compute the derived limit (our own). The pro-étale comparison theorem identifies the resulting sheaf cohomology with ℓ-adic cohomology (our own).

**nLab:** [pro-étale site](https://ncatlab.org/nlab/show/pro-%C3%A9tale+site), [ℓ-adic cohomology](https://ncatlab.org/nlab/show/%E2%84%93-adic+cohomology). It says: “This is rectified by passing to pro-étale cohomology.”

**Sources:**

- [Bhargav Bhatt, Peter Scholze, The pro-étale topology for schemes, Astérisque 369 (2015) 99–201, arXiv:1309.1198](https://arxiv.org/abs/1309.1198)

### Trace mean squares detect irreducibility

**Remember:** The largest limiting mean square counts geometric endomorphisms.

*Makes the theorem clean to state or prove.* MSC 14F20 (Étale and other Grothendieck topologies and (co)homologies), 11T23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The trace mean square of F is the limit superior of q⁻ⁿ∑ₓ\|tr(Frobₓ on Fₓ)\|², summed over x ∈ U(𝔽\_(qⁿ)). Here F is a weight-zero lisse ℚ̄ℓ-sheaf of positive rank on a nonempty open U ⊆ 𝔸¹ over 𝔽<sub>q</sub>, with ℓ prime to q and a fixed complex embedding.

**Problem.** This limit superior equals the dimension of the endomorphisms of F over the algebraic closure of 𝔽<sub>q</sub>. It equals one exactly when F is geometrically irreducible.

**How the definition helps.** By purity, \|tr(Frobₓ)\|² is the Frobenius trace on End(F) (our own). The trace formula and Deligne’s bound reduce the mean to the trace on geometric endomorphisms, whose eigenvalues have modulus one, so the limit superior counts them (our own). Geometric semisimplicity and Schur’s lemma turn dimension one into irreducibility (our own).

**Wikipedia:** [Grothendieck trace formula](https://en.wikipedia.org/wiki/Grothendieck_trace_formula). It says: “Taking logarithmic derivatives of both formal power series produces a statement on sums of traces for each finite field extension E of the base field k:”

**Sources:**

- [Fouvry, Kowalski, Michel and Sawin, Lectures on applied ℓ-adic cohomology](https://people.math.ethz.ch/~kowalski/applied-ell-adic.pdf)
- [Deligne, La conjecture de Weil II](https://www.numdam.org/item/PMIHES_1980__52__137_0/)

### A single chart turns Cartier–Witt sheaves into modules with one operator

**Remember:** One infinitesimal symmetry of the chart gives one operator Θ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Over R = ℤₚ\[\[λ\]\]/(λⁿ), a module with operator is an R-module complex M with a ℤₚ-linear operator Θ satisfying Θ(λx) = λx + λΘ(x). Liu’s chart ρ turns a sheaf on WCartₙ into such a pair, with Θ the derivative of the chart’s infinitesimal automorphism.

**Problem.** For n ≤ p, ℰ ↦ (ρ\*ℰ, Θ) is fully faithful, with image the ℤₚ-complete objects on which Θᵖ − Θ is locally nilpotent modulo p. Cohomology on WCartₙ is the fibre of Θ.

**How the definition helps.** The operator records infinitesimal descent along Liu’s chart, so cohomology is the fibre of Θ (our own). For 1 ≤ n ≤ p, Liu’s comparison theorem identifies the essential image by the stated nilpotence and completeness conditions (our own).

**Paper or page:** [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051). It says: “Let n≤p, then for any ℰ∈𝒟(WCart<sub>n</sub>), the natural morphism RΓ(WCart<sub>n</sub>, ℰ)→ρ<sup>\*ℰ</sup> induces a canonical identification RΓ(WCart<sub>n</sub>, ℰ)=fib(ρ<sup>\*ℰ</sup> →Θ\_ℰ ρ<sup>\*ℰ</sup>).”

**Sources:**

- [Zeyu Liu, On the prismatization of 𝒪K beyond the Hodge-Tate locus, preprint (2024), arXiv:2409.02051](https://arxiv.org/abs/2409.02051)
- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)

### A weakly final object turns prismatic cohomology into a Čech complex

**Remember:** One weakly final object and products give a Čech complex.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 18F10. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An object X is weakly final if every object Y admits a map Y → X.

**Problem.** In a category with finite nonempty products and a weakly final X, the Čech complex ℱ(X) → ℱ(X × X) → ⋯ computes presheaf cohomology. So the prismatic cohomology of a smooth algebra is an explicit complex of rings.

**How the definition helps.** At Y the Čech nerve consists of tuples of maps Y → X. Choosing one such map contracts the augmented nerve by prepending it to every tuple (our own argument). The resulting resolution by representables computes presheaf cohomology. In the prismatic application the products come from prismatic envelopes (our own summary).

**Paper or page:** [Overconvergent prismatic cohomology](https://arxiv.org/abs/2308.09423), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024). It says: “Assume there exists a weakly final object X∈𝒞, i.e. Hom(X,Y)≠0 for all Y∈𝒞. Then RΓ(𝒞,ℱ) is computed by the chain complex (the totalisation of) attached to ℱ(X)→ℱ(X×X)⇉ℱ(X×X×X)”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [Overconvergent prismatic cohomology, arXiv preprint 2308.09423 (2023)](https://arxiv.org/abs/2308.09423)

### Ainf-cohomology agrees with étale cohomology after inverting μ

**Remember:** Décalage only rescales by powers of μ, so inverting μ undoes it.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Fix the integers 𝒪 of a complete algebraically closed extension of ℚₚ, and put μ = \[ε\] − 1 in Ainf = W(𝒪♭), with ε a compatible system of primitive p-power roots of unity. The relative Ainf complex AΩ is the décalage Lη(μ) of the derived pushforward of the pro-étale sheaf 𝔸inf along the relative period map. Décalage becomes an isomorphism once μ is inverted, so it changes nothing there.

**Problem.** Let f be a proper smooth map of flat p-adic formal schemes locally of finite type over 𝒪. After inverting μ, relative Ainf-cohomology identifies with relative p-adic étale cohomology of the generic fibers derived-tensored with the base period sheaf 𝔸inf\[1/μ\].

**How the definition helps.** Inverting μ removes the décalage and leaves the pro-étale pushforward of 𝔸inf. Relative primitive comparison identifies this with étale cohomology tensored with 𝔸inf, up to modules killed by W(𝔪♭). That ideal contains μ, so inverting μ kills those modules (our own explanation).

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “Let 𝔛 and 𝔜 be flat p-adic formal schemes locally of finite type over 𝒪, and let f : 𝔛 → 𝔜 be a proper smooth morphism. Then RΓ<sub>A<sub>inf</sub></sub>(𝔛/𝔜) ⊗ᴸ<sub>A<sub>inf</sub></sub> A<sub>inf</sub>\[1/μ\] ≅ RΓ<sub>A<sub>inf</sub></sub>(𝔛/𝔜)<sup>∧</sup> ⊗ᴸ<sub>A<sub>inf</sub></sub> A<sub>inf</sub>\[1/μ\] ≅ Rf<sub>η, proét\*</sub>Ẑ<sub>p</sub> ⊗ᴸ<sub>Ẑ<sub>p</sub></sub> 𝔸<sub>inf,Y</sub>\[1/μ\]”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Crystalline prisms make the crystalline comparison a statement about one complex

**Remember:** In a crystalline prism, p generates the prism ideal.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A crystalline prism is a pair (A,(p)) where A is a p-adically complete, p-torsion-free δ-ring. Since A has no p-torsion, the ideal (p) has divided powers, so A is a base for crystalline cohomology of A/p-algebras (our own).

**Problem.** Let (A, (p)) be a crystalline prism and R a smooth A/p-algebra. The completed Frobenius pullback of the prismatic cohomology of R is the crystalline cohomology of R over A, compatibly with Frobenius.

**How the definition helps.** Both theories use the same base A, because (p) has canonical divided powers (our own explanation). The crystalline comparison theorem identifies their complexes after completed Frobenius pullback.

**nLab:** [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “Let A,(p) be a bounded prism and let R be a smooth A/p-algebra. There exists a canonical isomorphism φ<sub>A</sub><sup>\*Δ<sub>R</sup>/A</sub><sup>∧</sup> ≅ RΓ<sub>crys</sub>(R/A) in D(A), compatible with the action of Frobenius on both sides.”

**Paper or page:** [Comparison of prismatic cohomology and derived de Rham cohomology](https://arxiv.org/abs/2012.14064). It says: “Let (A,I,γ) be a bounded PD prism. Then for any p-completely smooth A/I-algebra R, there is a natural isomorphism in CAlg(A): RΓ\_Δ(R/A) ⊗̂<sub>A,φ<sub>A</sub></sub> A ≅ RΓ<sub>crys</sub>(R/(A,I,γ)),”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Li and T. Liu, Comparison of prismatic cohomology and derived de Rham cohomology, arXiv preprint 2012.14064](https://arxiv.org/abs/2012.14064)

### Décalage along ζₚ − 1 turns Hodge–Tate cohomology into twisted differential forms

**Remember:** Décalage along ζₚ − 1 turns pro-étale cohomology into twisted forms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The relative Hodge–Tate complex Ω̃ is Lη(ζₚ − 1)Rν∗Ô⁺, the décalage along ζₚ − 1 of the integral completed structure sheaf pushed along the relative pro-étale period map ν. Here ζₚ is a primitive pth root of unity.

**Problem.** Let 𝒪 be the integers of a complete algebraically closed extension of ℚₚ, and let 𝔛 → 𝔜 be smooth over 𝒪. For each i ≥ 0, Hⁱ(Ω̃) almost identifies with the pulled-back relative i-forms twisted by {−i}. This identification is exact when 𝔜 is locally of finite type over 𝒪.

**How the definition helps.** Décalage removes the part of cohomology killed by ζₚ − 1 and rescales degree i, which gives the twist {−i} (our own explanation). The relative Hodge–Tate comparison, using Faltings’s local computation, identifies the result with differential forms.

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Cohomology](https://stacks.math.columbia.edu/tag/0F8N). It says: “induces an Ô⁺ᵃ<sub>D</sub>-module identification q\*Ωⁱ<sub>𝔛/𝔜</sub>{−i}ᵃ → Hⁱ(Ω̃<sub>𝔛/𝔜</sub>)ᵃ, for every i ≥ 0. If in addition 𝔜 is locally of finite type over 𝒪, then the almost can be dropped.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Décalage along μ turns perfectoid torus cohomology into the q-de Rham complex

**Remember:** Fractional exponents give μ-torsion, and décalage along μ deletes it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Décalage along μ keeps in degree i the elements divisible by μⁱ whose differential is divisible by μⁱ⁺¹: (ημK)ⁱ = {x ∈ μⁱKⁱ : dx ∈ μⁱ⁺¹Kⁱ⁺¹} for K without μ-torsion. Lη(μ) applies this to a torsion-free model, with μ = \[ε\] − 1 for compatible primitive p-power roots of unity ε.

**Problem.** For a small smooth algebra R with torus coordinates, Lη(μ) of continuous ℤₚᵈ-cohomology of Ainf(R∞), over the tower R∞ of p-power coordinate roots, is the q-de Rham complex of the coordinate lift of R. Locally this complex maps to Ainf-cohomology with cone cohomology killed by W(𝔪♭).

**How the definition helps.** Décalage kills the fractional-exponent summands because μ kills their cohomology (our own explanation). On integral exponents it divides each Koszul operator γᵢ − 1 by μ, giving the q-differentials. Almost purity enters the comparison with the pro-étale complex (our own summary).

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “such that the cohomology groups of Cone(Lη\_μ(e)) are killed by W(𝔪♭) ⊂ A<sub>inf</sub>. Moreover if (R<sub>∞</sub>\[1/p\])° = R<sub>∞</sub>, then this morphism is an isomorphism.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Décalage is multiplicative, which gives the Frobenius structure on Ainf-cohomology

**Remember:** Décalage along fg is décalage along g, then along f.

*True by definition. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 13D09. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a complex M without f-torsion, the décalage ηf M is the subcomplex of M\[1/f\] of elements x ∈ fⁱMⁱ with dx ∈ fⁱ⁺¹Mⁱ⁺¹. Ainf-cohomology is AΩ = Lη(μ)Rν∗Ainf, the décalage along μ = \[ε\] − 1 of the pro-étale period sheaf Ainf = W(𝒪♭) pushed to the Zariski site.

**Problem.** If fg is a nonzerodivisor on every term of M, then ηf ηg M = ηfg M. So the Frobenius φ of Ainf gives an isomorphism from the Frobenius twist of AΩ onto Lη(ξ̃) AΩ, where ξ̃ = φ(μ)/μ.

**How the definition helps.** Applying both divisibility tests requires x ∈ (fg)ⁱMⁱ and dx ∈ (fg)ⁱ⁺¹Mⁱ⁺¹. These are exactly the tests for ηfg. Frobenius carries μ to μξ̃, so the same identity gives the asserted Frobenius isomorphism (our own argument).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7U). It says: “Let M• be a complex of A-modules such that fg is a nonzerodivisor on all Mⁱ. Then η<sub>f</sub>η<sub>gM•</sub> = η<sub>fgM•</sub>.”

**Sources:**

- [The Stacks Project, Tag 0F7U](https://stacks.math.columbia.edu/tag/0F7U)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Filtered prismatization turns the Nygaard filtration into a pushforward

**Remember:** A filtration is a sheaf on 𝔸¹/𝔾ₘ, so push forward.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Under the Rees equivalence, a filtered complex is the same as a quasi-coherent complex on 𝔸¹/𝔾ₘ, the line modulo scaling. The corresponding graded module has Filⁿ in degree n, and the coordinate acts by the filtration maps (our own description).

**Problem.** Let X be a bounded, p-quasisyntomic, quasi-compact and quasi-separated p-adic formal scheme. Pushing the structure sheaf of its filtered prismatization along its map to 𝔸¹/𝔾ₘ gives Nygaard-filtered absolute prismatic cohomology.

**How the definition helps.** Because 𝔸¹/𝔾ₘ stores a filtration as a sheaf, the Nygaard filtration can be the pushforward of one structure sheaf. Functoriality and multiplicativity then come from pushforward (our own). Hauck’s theorem identifies this pushforward with Nygaard-filtered prismatic cohomology.

**nLab:** [prismatization](https://ncatlab.org/nlab/show/prismatization). It says: “The filtered prismatization of X is the stack X<sup>𝒩</sup> over ℤ<sub>p</sub><sup>𝒩</sup> obtained via transmutation from 𝔾<sub>a</sub><sup>𝒩→ℤ<sub>p</sub>^𝒩</sup>”

**Paper or page:** [An arithmetic étale-crystalline comparison with coefficients in crystalline local systems](https://arxiv.org/abs/2505.03294), [An arithmetic étale-crystalline comparison with coefficients in crystalline local systems](https://arxiv.org/abs/2505.03294). It says: “Let X be a bounded p-adic formal scheme. Assume that X is p-quasisyntomic and qcqs. Then t<sub>X</sub>,\* 𝒪<sub>X</sub><sup>N</sup> identifies with Fil<sup>•<sub>N</sub></sup> RΓ\_Δ(X) in 𝒟𝓕̂(ℤ<sub>p</sub>) under the Rees equivalence.”

**Sources:**

- [M. Hauck, An arithmetic étale-crystalline comparison with coefficients in crystalline local systems, preprint (2025), arXiv:2505.03294](https://arxiv.org/abs/2505.03294)
- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)

### Frobenius perfection is universal

**Remember:** First invert Frobenius, then complete so maps still land in prisms.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a prism (A,I) with Frobenius φ, form the direct limit of A → A → ⋯ using φ at every step. Its derived (p,I)-completion, with the extended ideal I, is the perfection of (A,I).

**Problem.** Every map from a prism to a perfect prism factors uniquely through its perfection.

**How the definition helps.** The colimit makes Frobenius invertible, and the substantive theorem shows the completion is a perfect prism. A map to a perfect prism B extends at stage n by composing with the nth inverse power of B’s Frobenius, and these extensions are forced (our own argument). Completeness of B extends the common map to the completion (our own argument).

**Paper or page:** [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105v4). It says: “Moreover, it is the universal perfect prism over (A, I).”

**Sources:**

- [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105v4)
- [Bhargav Bhatt and Peter Scholze, Prisms and Prismatic Cohomology (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Hodge–Tate crystals over p-adic integers have cohomology in degrees 0 and 1

**Remember:** One operator θ, so cohomology is the two-term complex of θ.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11S25. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A Hodge–Tate crystal on 𝒪 assigns a finite projective A/I-module to each prism (A,I) over 𝒪, with base-change isomorphisms compatible with composition. Its value M on a Breuil–Kisin prism carries one operator θ, which records all the gluing data (our own summary).

**Problem.** Let 𝒪 be the integers of a finite extension of ℚₚ. For a Hodge–Tate crystal with Breuil–Kisin pair (M,θ), the complex M → M with differential θ computes prismatic cohomology in degrees zero and one. Vector bundle crystals with full prismatic coefficients also have vanishing cohomology above degree one.

**How the definition helps.** On the self-products of the Breuil–Kisin prism the gluing data reduce to θ, so cohomology is the cone of θ and lives in degrees zero and one (our own summary). The vanishing above degree one for full prismatic coefficients is a separate theorem in the same paper.

**Paper or page:** [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024), [Hodge--Tate prismatic crystals and Sen theory](https://arxiv.org/abs/2311.07024). It says: “Let 𝕄 ∈ Vect((𝒪<sub>K</sub>)\_Δ,\*, 𝒪\_Δ) (a such object is called a crystal). Then H<sup>i</sup>((𝒪<sub>K</sub>)\_Δ, 𝕄) = 0, ∀ i ≥ 2”

**Sources:**

- [H. Gao, Y. Min and Y. Wang, Hodge–Tate prismatic crystals and Sen theory, preprint (2023), arXiv:2311.07024](https://arxiv.org/abs/2311.07024)

### Laurent F-crystals are étale ℤₚ-local systems on the generic fibre

**Remember:** Invert I, keep Frobenius invertible, and you get étale local systems.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11F80, 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A Laurent F-crystal on X assigns each prism (A,I) over X a finite projective module over the p-adic completion of A\[1/I\]. It supplies compatible base-change isomorphisms and an isomorphism from the Frobenius pullback to the module.

**Problem.** Laurent F-crystals on X are equivalent to ℤₚ-local systems on the adic generic fibre of X. These are étale sheaves of finite free ℤₚ-modules, a family version of Galois representations.

**How the definition helps.** The Frobenius isomorphism makes the module an étale φ-module, and étale φ-modules over Witt rings are local systems (our own). On a perfect prism the completed A\[1/I\] is such a Witt ring, and Katz’s Artin–Schreier–Witt theory gives the match (our own). Bhatt–Scholze reduce the general case to perfect prisms (our own summary).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φq,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let X be a bounded formal scheme adic over Spf ℤ<sub>p</sub> with adic generic fiber X\_η. Then there is an equivalence Vect(X\_Δ, 𝒪\_Δ\[1/ℐ\]<sup>∧\_</sup>(p))<sup>φ = 1</sup> ≃ Loc\_ℤ<sub>p</sub>(X\_η).”

**Sources:**

- [B. Bhatt and P. Scholze, Prismatic F-crystals and crystalline Galois representations, Cambridge Journal of Mathematics 11 (2023)](https://doi.org/10.4310/cjm.2023.v11.n2.a3)

### Locally filtered free F-crystals are exactly vector bundles on the syntomification

**Remember:** F-gauges are F-crystals whose Nygaard filtration has a local basis.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11F80. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prismatic F-crystal is locally filtered free if its Nygaard-filtered Frobenius pullback locally splits as a finite sum of shifted filtered free lines. For the prism (A,I), the standard line has filtration Iⁿ for n ≥ 0 and A for n &lt; 0 (our own gloss).

**Problem.** For a base formal W-scheme 𝔛, forgetting is a bi-exact equivalence from F-gauges to locally filtered free prismatic F-crystals, so both directions keep exact sequences exact. Effective F-crystals of height at most p − 2 are automatically locally filtered free.

**How the definition helps.** The condition asks the Nygaard filtration to have a local basis, which is the extra structure an F-gauge records. The height bound p − 2 lets Imai, Kato and Youcis check this condition directly (Proposition 3.3).

**Paper or page:** [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282). It says: “The equivalence R\_𝔛: 𝐕𝐞𝐜𝐭(𝔛<sup>syn</sup>) ⥲ 𝐕𝐞𝐜𝐭<sup>φ,lff</sup>(𝔛\_Δ) given by the forgetful functor is bi-exact.”

**Sources:**

- [N. Imai, H. Kato and A. Youcis, An integral analogue of Fontaine's crystalline functor, preprint (2025), arXiv:2504.16282](https://arxiv.org/abs/2504.16282)

### One Ainf-cohomology shows étale torsion is at most crystalline torsion

**Remember:** One décalage complex specializes to both étale and crystalline cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14F20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Ainf-cohomology of a smooth proper formal scheme over 𝒪 is RΓ(Lη(μ)Rν∗𝔸inf), one complex that specializes both to étale and to crystalline cohomology. Here 𝒪 is the valuation ring of a complete algebraically closed extension of ℚₚ, and μ comes from compatible primitive p-power roots of unity.

**Problem.** Let 𝒳 be a smooth proper formal scheme over the integers of a p-adic field K, with perfect residue field k. The torsion in étale Hⁱ of the geometric generic fibre has length at most that of the torsion in crystalline Hⁱ(𝒳k/W(k)).

**How the definition helps.** Inverting μ gives étale cohomology tensored with Ainf\[1/μ\], and base change to W(k̄) gives crystalline cohomology, so both come from one module. Its cohomology groups are Breuil–Kisin–Fargues modules, whose torsion can only grow at the closed point (our own summary of Bhatt–Morrow–Scholze). The étale and crystalline comparison theorems for RΓ(Ainf) do the work.

**Paper or page:** [Bounding crystalline torsion from étale torsion](https://arxiv.org/abs/2506.13543). It says: “There is an inequality length(Hⁱ\_ét(𝒳<sub>K</sub>̄, ℤ<sub>p</sub>)<sub>tors</sub>) ≤ length(Hⁱ<sub>crys</sub>(𝒳<sub>k</sub>/W(k))<sub>tors</sub>). In particular, if Hⁱ<sub>crys</sub>(𝒳<sub>k</sub>/W(k))<sub>tors</sub> = 0, then Hⁱ\_ét(𝒳<sub>K</sub>̄, ℤ<sub>p</sub>)<sub>tors</sub> = 0.”

**Sources:**

- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)
- [Bounding crystalline torsion from étale torsion, arXiv:2506.13543 (2025)](https://arxiv.org/abs/2506.13543)

### Overconvergence gives the affine line primitives

**Remember:** Extra radius absorbs the denominators from integration.

*Rules out counterexamples. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 11S80. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A p-adic power series is overconvergent when it converges on some disc of radius greater than one, not only on the closed unit disc. Monsky–Washnitzer cohomology of the affine line over 𝔽ₚ uses such series over ℚₚ, so its first group is overconvergent forms f(x) dx modulo derivatives.

**Problem.** Every overconvergent one-form in one variable over ℚₚ has an overconvergent primitive. Thus the first Monsky–Washnitzer cohomology of the affine line over 𝔽ₚ vanishes.

**How the definition helps.** Integration divides the coefficient of xⁿ⁻¹ by n, which multiplies its size by at most n, and any smaller radius still above one absorbs that growth (our own proof). On the closed unit disc alone this fails. Coefficients pᵏ in degrees p²ᵏ − 1 integrate to p⁻ᵏ, which do not tend to zero (our own example).

**nLab:** [Monsky-Washnitzer cohomology](https://ncatlab.org/nlab/show/Monsky-Washnitzer+cohomology). It says: “Monsky-Washnitzer cohomology is a cohomology theory for affine algebraic schemes over fields of positive characteristic.”

**Sources:**

- [Paul Monsky and Gerard Washnitzer, Formal Cohomology I (1968)](https://doi.org/10.2307/1970571)

### Prismatic cohomology preserves derived pushouts

**Remember:** A left adjoint carries a derived pushout to a derived pushout.

*True by definition.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology). arXiv math.AG, math.NT. Level 4: research.

**Definition.** Fix a bounded prism (A,I). Derived prismatic cohomology of a derived A/I-algebra R is the universal derived (p,I)-complete δ-algebra P over A with a map R → P ⊗ᴸ<sub>A</sub> A/I, so it is left adjoint to reduction modulo I.

**Problem.** The derived prismatic construction sends pushouts of derived A/I-algebras to pushouts of complete derived δ-rings over A.

**How the definition helps.** A left adjoint preserves all colimits, pushouts included (our own proof). The comparison theorem identifies this construction on p-complete animated algebras, that is derived commutative rings, with Bhatt and Scholze’s derived prismatic cohomology.

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447v1). It says: “is left adjoint to $- \\otimes <sub>A</sub> \\overline{A}$.”

**Sources:**

- [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447v1)

### Prismatic Dieudonné crystals classify p-divisible groups over quasi-syntomic rings

**Remember:** One crystal on all prisms replaces many Dieudonné theories.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14L05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prismatic Dieudonné crystal assigns a finite projective A-module M to every prism (A,I) over R, compatibly with base change. Its linearized Frobenius φ∗M → M becomes invertible after inverting I and has cokernel killed by I.

**Problem.** For quasi-syntomic R, sending a p-divisible group to its prismatic Dieudonné crystal is contravariant and fully faithful, meaning bijective on maps. It is an anti-equivalence, an equivalence that reverses arrows, when R has a quasi-syntomic cover by a perfectoid ring.

**How the definition helps.** One definition works over every quasi-syntomic base, so one theorem covers bases that earlier Dieudonné theories treated one at a time. Over perfectoid rings its value at Fontaine’s prism agrees with the Scholze–Weinstein and Lau modules. The Anschütz–Le Bras proof descends from quasiregular semiperfectoid rings (our own summary).

**Wikipedia:** [Dieudonné module](https://en.wikipedia.org/wiki/Dieudonn%C3%A9_module). It says: “Very recently, the notion of prismatic cohomology (due to Bhatt and Scholze) has been used by Anschütz-Le Bras, Madapusi-Mondal, and Mondal to obtain generalisations of the notion of Dieudonné crystal in mixed characteristic.”

**Paper or page:** [The prismatic realization functor for Shimura varieties of abelian type](https://arxiv.org/abs/2310.08472), [An integral analogue of Fontaine's crystalline functor](https://arxiv.org/abs/2504.16282). It says: “The functor ℳ\_Δ defines a contravariant fully faithful embedding ℳ\_Δ: 𝐁𝐓<sub>p</sub>(R) → 𝐕𝐞𝐜𝐭<sup>φ\_</sup>\[0,1\](R\_Δ), which is an anti-equivalence if R admits a quasi-syntomic cover R → R̃ with R̃ perfectoid.”

**Sources:**

- [J. Anschütz and A.-C. Le Bras, Prismatic Dieudonné theory, Forum of Mathematics, Pi 11 (2023) e2](https://doi.org/10.1017/fmp.2022.22)

### Quasiregular semiperfectoid rings give prismatic sites a final object

**Remember:** For quasiregular semiperfectoid rings, prismatic cohomology is just one prism.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14G45. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A quasiregular semiperfectoid ring is a p-complete quasisyntomic ring R that receives a map from a perfectoid ring and has Frobenius surjective on R/p. Quasisyntomic means bounded p-power torsion and L(R/ℤₚ) ⊗ᴸ<sub>R</sub> R/p of Tor amplitude in degrees −1 and 0.

**Problem.** Let (A, I) be a perfect prism and R a quasiregular semiperfectoid A/I-algebra. Then the prismatic cohomology Δ(R/A) is a ring in degree 0. It is a prism over (A, I), and it is the final object of the prismatic site of R.

**How the definition helps.** Bhatt and Scholze construct a universal prism over R and identify its ring with discrete relative prismatic cohomology (Proposition 7.10). Universality gives finality because arrows in the prismatic site reverse prism maps (our own explanation).

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447). It says: “Then Δ<sub>R</sub>/A is discrete and naturally admits the structure of a prism over (A,I). Moreover, it is the final object in the relative (or absolute) prismatic site of R.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Sheaves on the Cartier–Witt stack are prismatic crystals

**Remember:** Each prism is a point of the stack, so sheaves are crystals.

*Makes the theorem clean to state or prove.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14D23, 14A30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A prismatic crystal of complexes on X assigns a derived (p,I)-complete A-complex to each prism (A,I) over X. Each prism map identifies the target complex with completed derived base change of the source, coherently under composition.

**Problem.** Quasi-coherent complexes on the prismatization of X are the same as prismatic crystals on X. The same holds over A/Iⁿ, for the closed part cut out by Iⁿ.

**How the definition helps.** Restriction of a quasi-coherent complex to prism charts gives exactly these compatible base changes (our own explanation). Bhatt–Lurie flat descent proves that the charts recover the complex, also after reduction modulo Iⁿ.

**nLab:** [prismatization](https://ncatlab.org/nlab/show/prismatization), [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “When X is quasi-syntomic, one can identify the ∞-category of crystals of (p,I\_Δ)-complete complexes on (X\_Δ,𝒪\_Δ) with the derived ∞-category of quasi-coherent sheaves on WCart<sub>X</sub>”

**Paper or page:** [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051), [On the prismatization of 𝒪K beyond the Hodge-Tate locus](https://arxiv.org/abs/2409.02051). It says: “Assume that X is a quasi-syntomic p-adic formal scheme, then there is an equivalence 𝒟<sub>qc</sub>(X<sub>n</sub><sup>Δ</sup>) ⥲ lim\_(A, I)∈X\_Δ 𝒟̂(A/I<sup>n</sup>) =: 𝒟<sub>crys</sub>(X\_Δ, 𝒪\_Δ/ℐ\_Δ<sup>n</sup>) of symmetric monoidal stable ∞-categories.”

**Sources:**

- [B. Bhatt and J. Lurie, Absolute prismatic cohomology, preprint (2022), arXiv:2201.06120](https://arxiv.org/abs/2201.06120)
- [V. Drinfeld, Prismatization, Selecta Mathematica (2024)](https://doi.org/10.1007/s00029-024-00937-3)
- [B. Bhatt, Algebraic geometry in mixed characteristic, preprint (2021), arXiv:2112.12010](https://arxiv.org/abs/2112.12010)

### Syntomic cohomology is the fiber of canonical minus Frobenius

**Remember:** Syntomic cohomology: degree-zero sections where both routes to M\[1/t\] agree.

*True by definition. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 19D55. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Over 𝔽ₚ, a perfect prismatic F-gauge is a perfect graded complex M over ℤₚ\[t,u\]/(tu − p), with t of degree −1 and u of degree 1, plus a Frobenius identification of the degree-zero parts of M\[1/u\] and M\[1/t\]. Its syntomic cohomology is its sections on the glued stack, which compare M⁰ along two routes into M\[1/t\]⁰: invert t, or invert u and apply Frobenius (our own description).

**Problem.** For such a gauge M, syntomic cohomology is the fiber of the difference of two maps from M⁰ to M\[1/t\]⁰. The first localizes at t, and the second localizes at u and applies the Frobenius identification.

**How the definition helps.** Sections on a stack glued from two pieces form the homotopy equalizer of the two restriction maps. In a stable category this equalizer is the fiber of the difference of the two maps (our own explanation).

**Paper or page:** [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367). It says: “the syntomic cohomology of a given M ∈ F-Gauge<sup>perf\_Δ</sup> is computed by RΓ<sub>syn</sub>(M) = fib(M⁰ —(t<sup>∞</sup> − φ∘u<sup>∞</sup>)→ M\[1/t\])”

**Sources:**

- [Logan Hyslop, Special Values without Semi-Simplicity Via K-Theory, arXiv:2404.18367 (2025)](https://arxiv.org/abs/2404.18367)

### Truncated Barsotti–Tate groups are bundles on the syntomification

**Remember:** Weights zero and one on the syntomic stack give truncated p-divisible groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F30 (\\(p\\)-adic cohomology, crystalline cohomology), 14L05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An F-gauge on X is a vector bundle on its syntomification Xˢʸⁿ, one stack that holds Dieudonné-type data over every base. Modulo pⁿ, it has weights in {0,1} if its Hodge–Tate graded restriction vanishes in every other weight (our own description).

**Problem.** Under the base hypotheses of Theorem C, for every n ≥ 1, level-n Barsotti–Tate groups correspond to vector bundles on Xˢʸⁿ modulo pⁿ. The bundles have Hodge–Tate weights in {0,1}, and the equivalence respects Cartier duality.

**How the definition helps.** The weights 0 and 1 match the two Hodge–Tate weights of a p-divisible group, so these bundles are the right linear data (our own). The group attached to a bundle M has as points over C the truncated syntomic cohomology of C with coefficients in M. Theorem C of the paper shows that this functor is represented by a truncated Barsotti–Tate group.

**Paper or page:** [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups](https://arxiv.org/abs/2412.10226), [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups](https://arxiv.org/abs/2412.10226). It says: “Then there is a canonical equivalence of categories 𝒢ₙ : Vect<sub>0,1</sub>(X<sup>syn</sup> ⊗ ℤ/pⁿℤ) ≃→ BTₙ(X) compatible with Cartier duality.”

**Sources:**

- [An algebraicity conjecture of Drinfeld and the moduli of p-divisible groups, arXiv:2412.10226](https://arxiv.org/abs/2412.10226)

### Augmentation powers bound integral length

**Remember:** Each factor γ − 1 eats at least one form.

*Makes the theorem clean to state or prove.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 58A12. arXiv math.AG. Level 4: research.

**Definition.** Fix a base point on a smooth complex algebraic curve and take the real group algebra of its fundamental group. Its augmentation ideal J is spanned by the differences γ − 1 of a loop and the constant loop, and Jˢ⁺¹ is spanned by the products of s + 1 such differences (our own).

**Problem.** Every deformation-invariant linear combination of iterated integrals of length at most s (at most s one-forms integrated in order along the loop) vanishes on Jˢ⁺¹. So it defines a linear functional on the quotient of the group algebra by Jˢ⁺¹.

**How the definition helps.** Chen’s formula splits an integral of r forms over a product of loops into consecutive blocks of forms, one block per factor (our own). Each factor γ − 1 cancels the empty block, so it needs at least one form (our own). So s forms cannot supply s + 1 factors, and the integral vanishes on Jˢ⁺¹ (our own).

**Paper or page:** [Higher order modular forms and mixed Hodge theory](https://arxiv.org/abs/0909.0714). It says: “⟨∫ ω₁ … ωᵣ, ∏ᵢ₌₁ˢ (αᵢ − 1)⟩ = { ∏ᵢ₌₁ˢ ∫αⱼ ωⱼ if r = s; 0 if r &lt; s }.”

**Sources:**

- [Kuo-Tsai Chen, Iterated integrals, fundamental groups and covering spaces (1975)](https://doi.org/10.1090/S0002-9947-1975-0377960-0)

### Length two detects puncture commutators

**Remember:** Ordered integrals notice which puncture is circled first.

*Makes the theorem clean to state or prove.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry), 58A12. arXiv math.AG. Level 4: research.

**Definition.** On ℂ minus 0 and 1, the ordered integral of α = dz/(2πiz) then β = dz/(2πi(z − 1)) along a path integrates α at an earlier time and β at a later time. Take positive based loops a and b around 0 and 1, each with zero winding around the other puncture.

**Problem.** The ordered integral on the loop aba⁻¹b⁻¹ equals one, although every ordinary integral of a closed one-form on that loop vanishes.

**How the definition helps.** Chen’s formula I(uv) = I(u) + I(v) + A(u)B(v), with A and B the single integrals of α and β, makes the ordered integral depend on order. On the commutator the terms leave A(a)B(b) − A(b)B(a) = 1 (our own calculation). Ordinary closed-form integrals are additive, so they vanish on commutators.

**Paper or page:** [Higher order modular forms and mixed Hodge theory](https://arxiv.org/abs/0909.0714). It says: “⟨∫ ω₁ … ωᵣ, ∏ᵢ₌₁ˢ (αᵢ − 1)⟩ = { ∏ᵢ₌₁ˢ ∫αⱼ ωⱼ if r = s; 0 if r &lt; s }.”

**Sources:**

- [Kuo-Tsai Chen, Iterated integrals, fundamental groups and covering spaces (1975)](https://doi.org/10.1090/S0002-9947-1975-0377960-0)

### One connection gives all unipotent transports

**Remember:** Carry the marked vector once and map it to every bundle.

*True by definition.* MSC 14F35 (Homotopy theory and fundamental groups in algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** A universal pointed unipotent connection is a pro-object U with a vector e at the base point. For every vector v at the base point of any unipotent connection V, one filtered by subconnections with trivial quotients, exactly one connection map U → V sends e to v.

**Problem.** Transporting the universal marked vector determines transport of every starting vector in every unipotent connection on the curve.

**How the definition helps.** A connection map commutes with transport along every path, so transporting e and mapping it to V gives the transport of v (our own). The substantive theorem identifies the explicit elliptic Knizhnik–Zamolodchikov–Bernard equation, marked by 1, with this universal object.

**Paper or page:** [The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171). It says: “represents the universal unipotent pointed connection on X.”

**Sources:**

- [Ben Moore, The de Rham period map for punctured elliptic curves and the KZB equation](https://arxiv.org/abs/2306.02171)

### Ainf-cohomology specializes to de Rham cohomology at q equal to 1

**Remember:** Set q = 1 in the q-de Rham complex and you get de Rham.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The relative AΩ complex applies Lη(μ) to the derived direct image of the pro-étale Ainf sheaf, where μ = q − 1 and q = \[ε\] for compatible primitive p-power roots of unity ε. In a torus coordinate T it is locally a q-de Rham complex, whose q-derivative sends Tⁿ to \[n\]q Tⁿ⁻¹ with \[n\]q = 1 + q + ⋯ + qⁿ⁻¹.

**Problem.** Let 𝔛 → 𝔜 be a smooth map of p-adic formal schemes over 𝒪, the integers of a complete algebraically closed extension of ℚₚ. Derived base change of AΩ along θ gives the relative de Rham complex up to modules killed by the maximal ideal of 𝒪. When 𝔜 is locally of finite type over 𝒪, the comparison is exact.

**How the definition helps.** Fontaine’s map θ sends q to one, so \[n\]q specializes to n and the q-derivative becomes ordinary differentiation (our own calculation). Gaisin–Koshikawa’s de Rham comparison supplies the local model and the required derived base change.

**Paper or page:** [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983), [Relative $A<sub>\\rm inf</sub>$-cohomology](https://arxiv.org/abs/2206.07983). It says: “There is a morphism in D(D, 𝒪) q\*Ω•<sub>𝔛/𝔜</sub> → AΩ<sub>𝔛/𝔜</sub> ⊗ᴸ<sub>A<sub>inf</sub>, θ</sub> 𝒪. whose image in D(D, 𝒪ᵃ) is an almost isomorphism.”

**Sources:**

- [Ildar Gaisin and Teruhisa Koshikawa, Relative Ainf-cohomology, arXiv:2206.07983 (2022)](https://arxiv.org/abs/2206.07983)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Defining periods by integrals over semi-algebraic sets makes them a ring

**Remember:** Multiply periods by taking the product of their domains.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 11J81. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A complex number is a period if each of its real and imaginary parts is an absolutely convergent integral of a rational function over ℚ. Each integration domain must be a semialgebraic subset of some ℝⁿ defined over ℚ.

**Problem.** The periods form a subring of the complex numbers that contains the rational numbers.

**How the definition helps.** Real periods are exactly the differences of volumes of bounded semialgebraic sets defined over ℚ, so it suffices to add and multiply volumes. A product of domains multiplies volumes by Fubini, and a disjoint union adds them after padding dimensions with unit intervals (our own argument). Rationals are lengths of intervals, and the usual complex arithmetic formulas then give closure for complex periods.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Sums and products of periods remain periods, so that the periods form a ring”

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1), [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “Les périodes forment un sous-anneau de celui des nombres complexes contenant les nombres rationnels.”

**Sources:**

- [Une introduction aux périodes, arXiv:2210.03407v1 (2022)](https://arxiv.org/abs/2210.03407v1)
- [M. Kontsevich, D. Zagier, Periods, in Mathematics Unlimited – 2001 and Beyond, Springer (2001)](https://doi.org/10.1007/978-3-642-56478-9_39)

### Derived de Rham cohomology is the largest filtered divided power thickening

**Remember:** Every filtered divided power thickening maps to the universal one over A.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 13D03, 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** A universal filtered divided power thickening of A is a terminal one: every filtered derived divided power R-algebra thickening A has a contractible space of filtration-preserving divided power maps to it over A.

**Problem.** For a derived commutative algebra A over R, derived de Rham cohomology with its Hodge filtration is the largest filtered divided power thickening of A. For a smooth map R → A it agrees with the classical de Rham complex.

**How the definition helps.** A terminal object is unique up to unique equivalence, so derived de Rham cohomology defined this way needs no choices. The older definition, due to Illusie, uses a chosen resolution of A (our own explanation). The abstract says the approach recovers Illusie’s derived de Rham cohomology.

**Paper or page:** [Divided Powers and Derived De Rham Cohomology](https://arxiv.org/abs/2405.05153v2). It says: “together with the Hodge filtration on it, in terms of the universal property as the largest filtered divided power thickening of A.”

**Sources:**

- [Kirill Magidson, Divided Powers and Derived De Rham Cohomology, arXiv:2405.05153 (2024)](https://arxiv.org/abs/2405.05153v2)

### Derived de Rham cohomology makes the prismatic de Rham comparison functorial

**Remember:** Derived de Rham works for every algebra, even the quotient A/I.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Derived de Rham cohomology dR(B/A) extends the de Rham complex to every A-algebra B, including non-smooth ones such as A/I. It resolves B by simplicial polynomial A-algebras, applies the de Rham complex degreewise, realizes the result, and takes its derived p-completion.

**Problem.** Let (A, I) be a bounded prism and X a smooth proper formal scheme over A/I. The Frobenius twist of prismatic cohomology of X, tensored with dR((A/I)/A), is dR(X/A).

**How the definition helps.** Because dR is defined for the quotient map A → A/I, it can serve as the coefficient algebra of the comparison. After Frobenius pullback, prismatic cohomology tensored with this algebra gives dR(X/A), functorially in X (our own explanation).

**Paper or page:** [Comparison of prismatic cohomology and derived de Rham cohomology](https://arxiv.org/abs/2012.14064). It says: “Let (A,I) be a bounded prism, and let X be a smooth proper (p-adic) formal scheme over Spf(A/I). Then we have a functorial isomorphism RΓ\_Δ(X/A) ⊗ᴸ<sub>A, φ<sub>A</sub></sub> A ⊗ᴸ<sub>A</sub> dR<sup>∧<sub></sup>(A/I)/A</sub> ≅ RΓ(X, dR<sup>∧<sub>−</sup>/A</sub>),”

**Sources:**

- [Shizhang Li and Tong Liu, Comparison of prismatic cohomology and derived de Rham cohomology, arXiv:2012.14064 (2022)](https://arxiv.org/abs/2012.14064)

### Derived F-zips exist for every smooth proper map in characteristic p

**Remember:** Filter the de Rham complex itself, not its cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14F30, 14C30. arXiv math.AG. Level 4: research.

**Definition.** A derived F-zip in characteristic p is a perfect complex with a finite descending and a finite ascending filtration by perfect complexes. For each index it has an equivalence from the Frobenius pullback of the descending graded piece to the ascending graded piece.

**Problem.** Every smooth proper morphism in characteristic p gives a derived F-zip. This derived F-zip is strong exactly when the Hodge–de Rham spectral sequence degenerates and the Hodge sheaves are locally free.

**How the definition helps.** The de Rham complex carries the Hodge and conjugate filtrations at the level of complexes, before taking cohomology. The Cartier isomorphism identifies their graded pieces after Frobenius pullback (our own explanation). The strongness criterion then tests degeneration and local freeness on cohomology.

**Paper or page:** [Derived F-zips](https://arxiv.org/abs/2208.01517v5), [Derived F-zips](https://arxiv.org/abs/2208.01517v5). It says: “As there are Enriques-surfaces in characteristic 2 with non-degenerate Hodge-de Rham spectral sequence, this gives a new approach, which could previously not be obtained by the classical theory of F-zips.”

**Sources:**

- [Can Yaylali, Derived F-zips, arXiv:2208.01517 (2024), Épijournal de Géométrie Algébrique, Volume 8 (April 11, 2024) epiga:10375](https://arxiv.org/abs/2208.01517v5)

### Middle cohomology inherits perfect duality

**Remember:** Passing to the image removes exactly the pairing kernels.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** On a smooth projective complex curve minus finitely many points, take a vector bundle with a flat algebraic connection. Its middle de Rham cohomology is the image of compactly supported cohomology in ordinary cohomology.

**Problem.** Middle cohomology in degree one pairs perfectly with middle cohomology of the dual connection. A perfect pairing identifies either space with the linear dual of the other.

**How the definition helps.** Taking the image removes exactly the classes that pair to zero with everything on the other side (our own linear algebra argument). Duality pairs compactly supported cohomology of a connection with ordinary cohomology of its dual, and the maps that forget supports are transposes for these pairings. Their kernels are the classes divided out, so the pairing on images is perfect (our own).

**Paper or page:** [Quadratic relations between periods of connections](https://arxiv.org/abs/2005.11525v4). It says: “These pairings are non-degenerate and their matrices satisfy the following relations”

**Sources:**

- [Javier Fresán, Claude Sabbah, Jeng-Daw Yu, Quadratic relations between periods of connections](https://arxiv.org/abs/2005.11525v4)

### Period pairings make Bessel matrices invertible

**Remember:** Perfect pairings have invertible matrices, and Bessel moments form one.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG. Level 4: research.

**Definition.** For a connection whose de Rham cohomology and rapid decay homology are paired perfectly by integration, the period matrix records the integral of each basis form over each basis cycle.

**Problem.** Fix k ≥ 1 and put n = ⌊(k − 1)/2⌋. The matrix indexed by 0 ≤ b,j ≤ n with entries ∫₀∞ I₀(t)ᵇ K₀(t)ᵏ⁻ᵇ t²ʲ dt is invertible. Here I₀ and K₀ are the order-zero modified Bessel functions.

**How the definition helps.** The matrix of a perfect pairing is invertible in any bases. Corollary 26 identifies the Bessel matrix with this period matrix up to nonzero row and column factors, which keep it invertible (our own). The substantive work is finding the bases and computing the integrals.

**Paper or page:** [On the Periods of Twisted Moments of the Kloosterman Connection](https://arxiv.org/abs/2306.15216v2). It says: “Moreover, P is invertible.”

**Sources:**

- [Ping-Hsun Chuang, Jeng-Daw Yu, On the Periods of Twisted Moments of the Kloosterman Connection](https://arxiv.org/abs/2306.15216v2)

### Period torsors give Galois coactions

**Remember:** Compose comparisons with symmetries to act on periods.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15, 18M25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The period torsor is the scheme of tensor-natural isomorphisms from the de Rham to the Betti fiber functor on a neutral Tannakian category of motives over ℚ. The Betti motivic Galois group, the tensor-natural automorphisms of the Betti functor, acts on it by composition.

**Problem.** The algebra of formal periods has a coaction, an algebra map describing how its functions change under Betti symmetries.

**How the definition helps.** A Betti symmetry acts on every comparison by composition, and evaluating a function after this action gives the coaction (our own argument). Associativity of composition gives its composition law. The torsor theorem identifies this function algebra with formal periods given by geometric generators and relations.

**nLab:** [motivic Galois group](https://ncatlab.org/nlab/show/motivic+Galois+group). It says: “We show that the spectrum of Kontsevich's algebra of formal periods is a torsor under the motivic Galois group for mixed motives over the rational numbers.”

**Paper or page:** [Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2). It says: “The scheme Spec ℙ̃(k) is naturally a torsor for the motivic Galois group Gₘₒₜ(k, γ) base-changed to k.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)
- [Ben Bakker, Jacob Tsimerman, Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2)

### Rapid decay recovers missing periods

**Remember:** Paths may run to infinity, but only where the weight dies.

*Makes the theorem clean to state or prove.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 4: research.

**Definition.** On a smooth complex affine curve with a regular function f, rapid decay homology uses paths that may run off to the points at infinity. They may end there only in directions where the weight exp(−f) tends to zero faster than every power of the local distance.

**Problem.** The complex affine line has zero ordinary first homology. For f(x) = x², its rapid decay homology contains a class with nonzero integral.

**How the definition helps.** Rapid decay admits both ends of the real axis, so this unbounded path becomes a cycle. In our own example, integrating exp(−x²) dx along it gives √π. The rapid decay pairing theorem makes this value depend only on the class, so the cycle represents a nonzero class.

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Tate inversion extends the period algebra

**Remember:** Invert the Tate line, and its period 2πi gets inverted.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The full category of Nori motives over ℚ is the tensor localization of effective Nori motives at the Tate line. This line has period 2πi, obtained by integrating dz/z around the positive unit circle.

**Problem.** The numerical period algebra of all Nori motives over ℚ is the effective period algebra with 1/(2πi) adjoined.

**How the definition helps.** Tensor products multiply periods, so inverting the Tate line inverts its period 2πi. Every full motive is an effective one tensored with an inverse power of the Tate line, so its periods are effective periods divided by powers of 2πi (our own calculation). Nori’s theorem shows that this construction gives a category with duals.

**Paper or page:** [Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2). It says: “by inverting ℋ¹ι(𝔾ₘ, {1}) is a rigid tensor category with fiber functor Hι.”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)
- [Ben Bakker, Jacob Tsimerman, Functional Transcendence of Periods and the Geometric André–Grothendieck Period Conjecture](https://arxiv.org/abs/2208.05182v2)

### Tensor comparisons multiply motivic periods

**Remember:** Tensor the vectors and the functionals to multiply their periods.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry), 14C15, 18M25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A motivic period of an object M is the function that sends each tensor-natural comparison T from de Rham to Betti realization, after scalar extension, to λ(Tv). Here v is a de Rham vector of M and λ is a Betti linear functional on M.

**Problem.** Multiplying two motivic periods gives the period of the tensor product, with vector v ⊗ w and functional λ ⊗ μ.

**How the definition helps.** In our own calculation, T sends v ⊗ w to Tv ⊗ Tw, so applying λ ⊗ μ multiplies the two values. Proposition 5.22 identifies these functions with motivic periods presented by symbols and relations.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “𝒫ᵐ is isomorphic to the space of regular functions on the affine ℚ-scheme Isom⊗(ωdR, ωB).”

**Sources:**

- [Huber and Müller-Stach, Periods and Nori Motives](https://link.springer.com/book/10.1007/978-3-319-50926-6)

### Twisted exactness kills weighted integrals

**Remember:** Differentiate the exponential weight as well as the form.

*True by definition.* MSC 14F40 (de Rham cohomology and algebraic geometry). arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a regular function f on a smooth complex affine variety, the twisted derivative Dω = dω − df ∧ ω is the one with exp(−f)Dω = d(exp(−f)ω) (our own calculation). A rapid decay cycle may approach infinity only where exp(−f) decays faster than every power of the distance to the boundary.

**Problem.** The weighted integral of a twisted exact form on a rapid decay cycle is zero. Ordinary exactness cannot replace twisted exactness because dx integrates to √π with weight exp(−x²) on the real line.

**How the definition helps.** The weighted integral of Dω is the integral of an exact form, so Stokes’ theorem gives zero. On a rapid decay cycle the boundary term vanishes, because the weight beats the growth of every algebraic form (our own).

**Paper or page:** [Une introduction aux périodes](https://arxiv.org/abs/2210.03407v1). It says: “L'intégration induit un accouplement parfait”

**Sources:**

- [Hien and Roucairol, Integral representations for solutions of exponential Gauß-Manin systems](https://doi.org/10.24033/bsmf.2564)

### Building motives by inverting affine-line projections makes M(X × 𝔸¹) ≅ M(X)

**Remember:** Invert the affine-line projections, and adding an affine line changes nothing.

*True by definition. Confidence: medium.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C15. arXiv math.AG. Level 4: research.

**Definition.** Over the given base field, form the derived category of Nisnevich sheaves with transfers. Effective motives arise by localizing at the maps induced by X × 𝔸¹ → X for all smooth X.

**Problem.** For a smooth variety X, the projection X × 𝔸¹ → X induces an isomorphism of effective motives.

**How the definition helps.** The projection is one of the maps made invertible, so the isomorphism holds by definition. The work moves into the theorem that this model is equivalent to the one built from 𝔸¹-invariant complexes. That theorem uses Voevodsky’s results on homotopy-invariant sheaves with transfers (our own).

**Paper or page:** [Integral cohomology of dual boundary complexes is motivic](https://arxiv.org/abs/2408.17301v1). It says: “M(X × 𝔸¹) ≅ M(X)”

**Sources:**

- [Tao Su, Integral cohomology of dual boundary complexes is motivic, Theorem 1.1](https://arxiv.org/abs/2408.17301v1)

### Closure under sums gives Tate approximation

**Remember:** Allow arbitrary sums so each motive has a universal Tate approximation.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** The localizing category of mixed Tate motives is the smallest subcategory of rational motives that contains the Tate motives ℚ(n) for every integer n and is closed under shifts, cones and arbitrary direct sums.

**Problem.** Over a perfect field, each rational motive M receives a universal map T → M from a mixed Tate motive. Every map from a mixed Tate motive to M factors uniquely through it.

**How the definition helps.** Closure under arbitrary sums, with the compact generators ℚ(n), lets Brown representability apply. For each motive M, the functor Hom(−,M) on mixed Tate motives is cohomological and sends sums to products, so a Tate motive T represents it (our own argument). The representing map T → M is the universal one.

**nLab:** [mixed Tate motive](https://ncatlab.org/nlab/show/mixed+Tate+motive). It says: “it follows from a theorem of Amnon Neeman that the inclusion admits a right adjoint.”

**Sources:**

- [Burt Totaro, Adjoint functors on the derived category of motives (2018)](https://doi.org/10.1017/S1474748016000104)

### Dual motives give Poincaré duality

**Remember:** A motive’s dual is itself, twisted down by its dimension.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14C15. arXiv math.AG. Level 4: research.

**Definition.** For a smooth projective variety X of pure dimension d over a perfect field, with motive M, motivic cohomology Hᵖ˒ᑫ(X) is Hom(M,ℤ(q)\[p\]) and motivic homology Hₚ˒ᑫ(X) is Hom(ℤ(q)\[p\],M). The motive M is dualizable, with dual M(−d)\[−2d\].

**Problem.** If X has pure dimension d, motivic cohomology H(p,q) is canonically isomorphic to motivic homology in degree 2d − p and weight d − q.

**How the definition helps.** Dualizing turns a map M → ℤ(q)\[p\] into a map ℤ(−q)\[−p\] → M(−d)\[−2d\]. Twisting by d and shifting by 2d gives a map ℤ(d−q)\[2d−p\] → M (our own deduction).

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “there is a Poincaré duality isomorphism”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Proper motives agree with compact supports

**Remember:** Properness makes the quasi-finite cycle projections finite.

*Rules out counterexamples.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** For smooth integral U, finite correspondences to X are integral combinations of integral closed subschemes of U × X finite and surjective over U. For compact supports, use integral closed subschemes dominant and quasi-finite over U.

**Problem.** For proper smooth X, the inclusion of finite correspondences induces an isomorphism from the ordinary motive to the compactly supported motive.

**How the definition helps.** Properness of X makes each projection from such a closed subscheme proper. A proper quasi-finite morphism is finite, and a proper dominant morphism is surjective. The two cycle groups therefore agree on every test variety (our own argument).

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “the two are isomorphic if X is proper over k.”

**Sources:**

- [Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture Notes on Motivic Cohomology (2006)](https://www.claymath.org/library/monographs/cmim02.pdf)

### Stabilization makes Tate twists cancel

**Remember:** Invert the Tate object and tensoring by it becomes reversible.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Stable motives are formed from effective motives by formally making the Tate twist invertible, where the twist tensors with ℤ(1) and ℤ(1)\[2\] is the reduced motive of the projective line.

**Problem.** Tensoring both source and target with ℤ(1) preserves all groups of maps between stable motives.

**How the definition helps.** In stable motives, tensoring by ℤ(1) has an inverse, so it is a bijection on every group of maps. Voevodsky’s cancellation theorem proves the harder fact that passing to stable motives preserves the groups of maps between effective motives.

**nLab:** [motive](https://ncatlab.org/nlab/show/motive). It says: “at the Tate motive ℤ(1)\[2\].”

**Sources:**

- [Vladimir Voevodsky, Cancellation Theorem (2010)](https://doi.org/10.4171/DMS/5/20)

### The Kummer pair gives an extension

**Remember:** Kummer motive: the loop class plus a path between two points.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 11G55. arXiv math.AG, math.KT. Level 4: research.

**Definition.** Over S = ℙ¹ℤ ∖ {0,1,∞} with coordinate z, the Kummer motive is the cohomological motive of 𝔾ₘ over S relative to the two sections t = 1 and t = 1/z, shifted by one.

**Problem.** The Kummer motive is an extension of the weight −1 Tate object ℚ(−1) by the unit ℚ(0) in the abelian category of mixed Tate motives.

**How the definition helps.** The nested-pair sequence first takes cohomology relative to t = 1, giving ℚ(−1) after the shift. Adding the disjoint section t = 1/z contributes one copy of ℚ(0) as the kernel (our own explanation).

**Paper or page:** [A construction of the polylogarithm motive](https://arxiv.org/abs/2305.00789). It says: “The Kummer motive 𝒦 belongs to the subcategory MT(S) and fits into a short exact sequence”

**Sources:**

- [Clément Dupont and Javier Fresán, A construction of the polylogarithm motive (2025)](https://arxiv.org/abs/2305.00789)

### The quadric ∑xᵢyᵢ = z(1−z) gives motivic spheres in every characteristic

**Remember:** Use one integral quadric instead of a model for each characteristic.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14M17. arXiv math.AG, math.AT. Level 4: research.

**Definition.** For each n ≥ 1, Q₂ₙ is the affine quadric ∑ᵢ₌₁ⁿ xᵢyᵢ = z(1 − z) in (2n + 1)-space over ℤ. It is smooth over ℤ and a homogeneous space for SO₂ₙ₊₁ over ℤ.

**Problem.** Over every field, including fields of characteristic 2, Q₂ₙ satisfies affine representability (Theorem 2). That is, 𝔸¹-homotopy classes of maps from a smooth affine scheme into Q₂ₙ are naive homotopy classes.

**How the definition helps.** The same equation is smooth in every characteristic, unlike a sum of squares equal to 1, which is singular in characteristic 2 (our own explanation). The paper’s identification of Q₂ₙ as a homogeneous space for SO₂ₙ₊₁ then gives affine representability.

**Paper or page:** [Affine representability of quadrics revisited](https://arxiv.org/abs/2104.08208v2). It says: “the identification as a homogeneous space allows us to give a characteristic independent affine representability statement for motivic spheres.”

**Sources:**

- [Aravind Asok, Affine representability of quadrics revisited, arXiv:2104.08208 (2022)](https://arxiv.org/abs/2104.08208v2)

### The Tate heart classifies motivic extensions

**Remember:** An extension in the heart is a degree-one map in the derived category.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 19E15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** For rational Tate motives over S, the mixed Tate heart is the abelian category of objects lying in both halves of the motivic t-structure, that is, in motivic cohomological degree zero.

**Problem.** Let S be a nonempty open subscheme of the spectrum of the integers of a number field. For each integer n, rational motivic cohomology H¹(S,ℚ(n)) classifies extensions of ℚ(0) by ℚ(n) in the mixed Tate heart.

**How the definition helps.** In the heart of any t-structure, extensions of A by B correspond bijectively to maps A → B\[1\] in the triangulated category. With A = ℚ(0) and B = ℚ(n), these maps form rational motivic cohomology H¹(S,ℚ(n)) by definition (our own deduction).

**Paper or page:** [Mixed Artin-Tate motives over number rings](https://arxiv.org/abs/1003.1267). It says: “Both categories enjoy a non-degenerate t-structure called motivic t-structure.”

**Sources:**

- [Jakob Scholbach, Mixed Artin-Tate motives over number rings](https://arxiv.org/abs/1003.1267)

### Truncation measures the étale defect

**Remember:** Keep the discarded étale degrees to measure what motivic cohomology misses.

*Makes the theorem clean to state or prove.* MSC 14F42 (Motivic cohomology; motivic homotopy theory), 14F20. arXiv math.AG. Level 4: research.

**Definition.** Push étale cohomology with μₘ⊗ⁿ coefficients to the Zariski site of X, giving K = Rε∗μₘ⊗ⁿ. Cut K at degree n: τ≤ₙK keeps its cohomology sheaves up to degree n, τ&gt;ₙK keeps those above, and τ≤ₙK → K → τ&gt;ₙK is a triangle.

**Problem.** Let X be smooth over a perfect field, with m invertible there and n ≥ 0. Mod-m weight-n cohomology fits in a long exact sequence: motivic in degree i, étale motivic in degree i, refined unramified in degree i with index i − n − 1, motivic in degree i + 1.

**How the definition helps.** Hypercohomology takes the truncation triangle to a long exact sequence. Beilinson–Lichtenbaum identifies the lower truncation with the motivic complex. Alexandrou and Schreieder identify the upper term with refined unramified cohomology, interpreted as zero at negative indices.

**Paper or page:** [Truncated pushforwards and refined unramified cohomology](https://arxiv.org/abs/2406.07092). It says: “Then there is a natural long exact sequence”

**Sources:**

- [Theodosis Alexandrou and Stefan Schreieder, Truncated pushforwards and refined unramified cohomology](https://arxiv.org/abs/2406.07092)
- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ coefficients (2011)](https://annals.math.princeton.edu/2011/174-1/p11)

### Étale truncation locates the comparison range

**Remember:** Keep étale cohomology sheaves up to the weight.

*True by definition.* MSC 14F42 (Motivic cohomology; motivic homotopy theory). arXiv math.AG. Level 4: research.

**Definition.** Push étale cohomology with μℓ⊗ʲ coefficients to the Zariski site of X, giving K = Rε∗μℓ⊗ʲ. Its truncation τ≤ⱼK keeps exactly the cohomology sheaves of K in degrees up to j and none above.

**Problem.** Let X be smooth over a field, with ℓ a prime invertible there and j ≥ 0. In weight j the mod-ℓ motivic-to-étale cycle map is bijective through degree j and injective in degree j + 1.

**How the definition helps.** The cone of τ≤ⱼK → K has cohomology sheaves only above degree j, so its hypercohomology vanishes through degree j. The long exact sequence then gives bijections through degree j and an injection in degree j + 1. Beilinson–Lichtenbaum identifies τ≤ⱼK with the mod-ℓ motivic complex, so this map is the cycle map (our own deduction).

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology). It says: “is an isomorphism for all j ≥ i and is injective for all j ≥ i − 1.”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ coefficients (2011)](https://annals.math.princeton.edu/2011/174-1/p11)

### Atlas cochains retain stabilizer characters

**Remember:** Keep the overlaps to keep the stabilizers.

*Rules out counterexamples. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14D23. arXiv math.AG. Level 4: research.

**Definition.** For a finite group G acting on a point, cohomology of the classifying stack is computed on its atlas nerve, which has Gⁿ in degree n, so its cochains are the group cochains of G. Its faces drop an end entry or multiply neighbouring entries, and its degeneracies insert the identity.

**Problem.** For the classifying stack of the complex m-th roots of unity, degree two integral Deligne–Beilinson cohomology of weight one is ℤ/m. The ordinary point has zero in that degree and weight.

**How the definition helps.** Overlap cochains compute group cohomology, which keeps the symmetry group that the ordinary point forgets (our own). Averaging over the group kills positive-degree complex cohomology, so what remains in degree two and weight one is H²(μₘ,ℤ) = ℤ/m (our own). The descent theorem justifies computing on these overlaps (our own).

**Paper or page:** [Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1). It says: “Let 𝒳 be a Deligne-Mumford stack of finite type over ℂ. Then there is an exact sequence”

**Sources:**

- [Zhiyuan Li and Xun Zhang, Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1)

### Correspondences commute with Abel–Jacobi

**Remember:** Apply the correspondence before or after taking the Deligne class.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14C25. arXiv math.AG. Level 4: research.

**Definition.** For a cycle with zero integral cohomology class, its Abel–Jacobi invariant is its Deligne cycle class in the intermediate Jacobian, a complex torus. A correspondence is a cycle on a product acting by pullback, product with the cycle, and pushforward.

**Problem.** Between smooth projective complex varieties, applying a correspondence of degree r before taking the Abel–Jacobi invariant gives the same result as applying it afterwards. The target uses codimension p+r for an input of codimension p.

**How the definition helps.** The Abel–Jacobi invariant is a Deligne cycle class, and Deligne cycle classes respect pullback, products and pushforward, the three steps of a correspondence (our own). This replaces a comparison of integrals on bounding chains (our own). Identifying the Deligne class with Griffiths’s invariant still uses the comparison theorem (our own).

**Paper or page:** [Vanishing criteria for Ceresa cycles](https://arxiv.org/abs/2406.03891v2). It says: “Moreover for every α ∈ CHᵖ(X)ₕₒₘ, γ∗(AJₓᵖ(α)) = AJʏᵖ⁺ʳ(γ∗(α)).”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §7](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Jef Laga and Ari Shnidman, Vanishing criteria for Ceresa cycles](https://arxiv.org/abs/2406.03891v2)

### Deligne cycle classes recover Abel–Jacobi

**Remember:** When the ordinary class vanishes, the Deligne lift is the Abel–Jacobi class.

*Makes the theorem clean to state or prove.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)), 14C25. arXiv math.AG. Level 4: research.

**Definition.** For a smooth projective complex variety X, the pth intermediate Jacobian is H²ᵖ⁻¹(X,ℂ) modulo FᵖH²ᵖ⁻¹(X,ℂ) and the image of H²ᵖ⁻¹(X,ℤ(p)). The Deligne exact sequence identifies this quotient with the kernel of the integral class map in degree 2p and weight p.

**Problem.** For cycles whose integral cohomology class vanishes, the Deligne cycle class in the intermediate Jacobian equals Griffiths’s Abel–Jacobi invariant.

**How the definition helps.** A zero integral class puts the Deligne lift directly in the intermediate Jacobian. Griffiths instead integrates forms over a chain bounded by the cycle (our own). The comparison of the two answers is Esnault and Viehweg’s Theorem 7.11.

**nLab:** [Abel-Jacobi map](https://ncatlab.org/nlab/show/Abel-Jacobi+map). It says: “this induces a map from cycles to intermediate Jacobians. This is the Abel-Jacobi map”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §7, comparison with the Abel–Jacobi map](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Deligne duality shifts degree by one

**Remember:** Dualizing the comparison swaps its terms and shifts degree.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** In weight p, the real Deligne complex is the homotopy fiber of the comparison FᵖΩ• → C•(X,ℂ/ℝ(p)). Here Fᵖ uses forms of holomorphic degree at least p and ℝ(p) = (2πi)ᵖℝ.

**Problem.** On a smooth projective complex variety of dimension d, degree n real Deligne cohomology of weight p is dual to degree 2d−n+1 of weight d−p+1.

**How the definition helps.** Dualizing the cone exchanges its terms, so the cochain placed one degree lower accounts for the extra degree (our own). Poincaré duality pairs complementary ordinary degrees (our own). The annihilator of the p-th holomorphic filtration step is step d−p+1 in the dual degree (our own).

**Paper or page:** [Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1). It says: “Let X be a proper complex algebraic manifold, equidimensional of dimension d. Then there is a perfect duality”

**Sources:**

- [J. I. Burgos Gil, Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1)

### High twists remove filtered cochains

**Remember:** Below the Hodge cutoff, only the shifted real part remains.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Take a smooth projective compactification of X with normal crossings boundary D. Real Deligne–Beilinson cohomology of weight p is the cohomology of the homotopy fiber of FᵖΩ•(log D) → complex cochains modulo ℝ(p), with ℝ(p) = (2πi)ᵖℝ, and FᵖΩ•(log D) has nothing below degree p.

**Problem.** On a smooth complex quasi-projective variety, take n &lt; p. Degree n real Deligne–Beilinson cohomology of weight p equals ordinary degree n−1 cohomology with coefficients ℝ(p−1).

**How the definition helps.** Below degree p only the shifted quotient term contributes, so degree n gives degree n − 1 cohomology with coefficients ℂ/ℝ(p) ≅ ℝ(p−1) (our own). Replacing the logarithmic de Rham complex by ordinary complex cochains uses the de Rham comparison theorem (our own).

**Paper or page:** [The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3). It says: “Then it defines a class in Deligne cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §§2.14–2.16](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)
- [Thu Ha Trieu, The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3)

### Hodge extensions yield two-step exactness

**Remember:** Only Hodge classes and one layer of extensions survive.

*True by definition. Confidence: medium.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Rational absolute Hodge cohomology is derived maps from the weight-zero line ℚ(0) into the variety’s cochains with their mixed Hodge structure: weight and Hodge filtrations, with a pure Hodge decomposition on each weight quotient. A twist by p lowers both Hodge indices by p.

**Problem.** In degree n, rational absolute Hodge cohomology surjects onto filtration-preserving maps from ℚ(0) to the twisted degree n cohomology of a complex algebraic variety. Its kernel classifies extensions with quotient ℚ(0) and subobject the twisted degree n−1 cohomology.

**How the definition helps.** Rational mixed Hodge structures have no extensions beyond degree one, so derived maps split into ordinary maps and single extensions (our own). This gives the two-step sequence, with Hodge classes in degree n and extensions from degree n − 1 (our own).

**Paper or page:** [Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2). It says: “then we recover the absolute Hodge cohomology groups of Beilinson”

**Sources:**

- [Alexander Beilinson, Notes on absolute Hodge cohomology](https://doi.org/10.1090/conm/055.1/862628)
- [Raphaël Ruimy and Swann Tubach, Nori motives (and mixed Hodge modules) with integral coefficients](https://arxiv.org/abs/2407.01462v2)

### Hyperplane powers split Deligne cohomology

**Remember:** Split both sides of the comparison with the same hyperplane class.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** Let π: ℙ(E) → X be the bundle of one-dimensional quotients of the fibers of a rank-r bundle E. Its hyperplane class h = c₁ᴰ(𝒪(1)) is the Deligne first Chern class of the tautological quotient line, and summand j is the image of α ↦ hʲ ∪ π∗α (our own description).

**Problem.** Over a smooth complex quasi-projective variety, the projective bundle of a rank r vector bundle has r summands in Deligne–Beilinson degree n and weight p. Pullback followed by multiplication by hʲ identifies summand j with base cohomology in degree n−2j and weight p−j, for 0 ≤ j &lt; r.

**How the definition helps.** The same hyperplane powers split both inputs to the cone and respect the comparison map (our own). The ordinary and filtered projective bundle formulas supply the splittings (our own). Compatibility of the Deligne product transfers them to the cone exact sequence (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “It is a morphism of complexes, so it induces a cup product in Deligne cohomology.”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, Proposition 8.5](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Jacobian classes have square zero

**Remember:** Two pure comparison terms have nothing to multiply.

*True by definition.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** In weight p, the integral Deligne complex is the homotopy fiber of the difference map from ℤ(p)-cochains and Fᵖ forms to complex cochains, so a degree-n element carries a comparison cochain of degree n − 1. Intermediate Jacobian classes are those represented by a comparison cochain alone (our own).

**Problem.** On a smooth projective complex variety, the intermediate Jacobians form an ideal in the integral Deligne ring restricted to degrees twice the weights. Every product of two elements of this ideal vanishes.

**How the definition helps.** In the Deligne product a comparison cochain multiplies only the other two components, so two pure comparison representatives multiply to zero (our own). The cone sequence identifies these classes with the kernel of the map to ordinary cohomology (our own). Comparing this product with the product on truncated holomorphic complexes takes a separate argument (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “It is a morphism of complexes, so it induces a cup product in Deligne cohomology.”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, §3 and Proposition 7.10](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Logarithmic classes select algebraic units

**Remember:** Logarithmic differentials allow zeros and poles but not essential singularities.

*Rules out counterexamples.* MSC 14F43 (Other algebro-geometric (co)homologies (e.g., intersection, equivariant, Lawson, Deligne (co)homologies)). arXiv math.AG. Level 4: research.

**Definition.** For a smooth compactification with normal crossings boundary D, logarithmic one-forms are locally generated by regular one-forms and dzᵢ/zᵢ for local equations of D. In weight one, Deligne–Beilinson cohomology compares integral ℤ(1)-cochains with logarithmic forms starting in degree one.

**Problem.** For a smooth complex quasi-projective variety, degree one integral Deligne–Beilinson cohomology of weight one is the group of invertible regular functions.

**How the definition helps.** Among nowhere-zero holomorphic functions f, the logarithmic condition keeps those whose df/f has only logarithmic poles along D, and these are the algebraic units (our own). On the affine line, exp(z) fails because dz has a double pole at infinity (our own). Esnault and Viehweg prove the test by extending such functions meromorphically across the boundary.

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

**Definition.** For Z closed in X, cohomology with support in Z uses the homotopy fiber of restriction from X to X ∖ Z. Applying this construction to the weight-p Deligne complex defines supported Deligne cohomology.

**Problem.** Let Z be the support of a pure codimension-p cycle on a smooth projective complex variety. The cycle’s integral and filtered fundamental classes lift together to a unique supported Deligne class in degree 2p and weight p.

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

**Definition.** Given an étale atlas U → 𝒳, its Čech nerve has the (k + 1)-fold fiber product of U over 𝒳 in degree k. A natural map of étale complexes gives compatible maps on all these products and hence on their totalizations (our own description).

**Problem.** For a smooth finite-type Deligne–Mumford stack over ℂ, rational codimension p cycles modulo rational equivalence map to degree 2p Deligne–Beilinson cohomology of weight p. On smooth schemes this gives Bloch’s cycle class map.

**How the definition helps.** A single map of complexes on étale covers acts on the cohomology obtained by gluing over the stack (our own). This replaces constructing classes separately on each stack (our own). The comparison theorems identify the source with rational Chow groups and the target with Deligne–Beilinson cohomology (our own).

**Paper or page:** [Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1). It says: “If 𝒳 is a smooth scheme, the cycle class map clᴰᴮ agrees with the Deligne-Beilinson cycle class map defined in”

**Sources:**

- [Zhiyuan Li and Xun Zhang, Deligne-Beilinson cohomology of the universal K3 surface](https://arxiv.org/abs/2201.02367v1)

### Witt Frobenius handles field extensions

**Remember:** Witt Frobenius keeps only point counts over degrees divisible by r.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a variety over a finite field with zeta series Z, the nth ghost coordinate, the coefficient of tⁿ in tZ′/Z, counts points over the degree-n extension. The rth Witt Frobenius makes old ghost coordinate rn the new coordinate n.

**Problem.** For each positive integer r, the rth Witt Frobenius gives the zeta series after extending the base field by degree r.

**How the definition helps.** A degree-n extension of the degree-r field is the degree-rn extension of the original field, so the shifted coordinates are exactly the new point counts (our own explanation). The Witt construction realizes this shift on integral series, where the ghost coordinates determine the series.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “Moreover, the Frobenius operator Frᵣ on W(ℤ) corresponds to base change”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### Witt multiplication matches variety products

**Remember:** Multiply point counts to multiply zeta functions in the Witt ring.

*True by definition.* MSC 14G10 (Zeta functions and related questions in algebraic geometry (e.g., Birch-Swinnerton-Dyer conjecture)), 14G15. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a variety over a finite field with zeta series Z, the nth ghost coordinate, the coefficient of tⁿ in tZ′/Z, counts points over the degree-n extension. Witt multiplication of integral series with constant term one multiplies ghost coordinates term by term.

**Problem.** The zeta function of a product of varieties over a finite field is the Witt product of their zeta functions.

**How the definition helps.** A point of a product is a pair of points, so point counts multiply over every extension (our own explanation). Witt multiplication multiplies exactly these ghost coordinates, so it gives the product variety’s zeta series. Constructing this multiplication on integral series takes work, and there the ghost coordinates determine the series.

**Paper or page:** [A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479). It says: “For X and Y ∈ Var(𝔽q), the zeta function X ×𝔽q Y is given by the Witt product”

**Sources:**

- [Jonathan Huang, A MacDonald formula for zeta functions of varieties over finite fields](https://arxiv.org/abs/1707.03479)

### Dualizable solid modules are perfect complexes, so vector bundles glue

**Remember:** Dualizability is formal, so it glues whenever the module categories glue.

*True by definition. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F06, 46S10. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A solid module M is dualizable if some solid module N admits maps 𝟙 → M ⊗ N and N ⊗ M → 𝟙. Inserting the first map and applying the second must give the identity on both M and N, in their respective triangle identities.

**Problem.** For every Huber pair (A, A⁺), the dualizable solid modules are exactly the perfect complexes over A. So perfect complexes and vector bundles glue on adic spaces, which recovers and slightly generalizes the gluing results of Kedlaya and Liu.

**How the definition helps.** The dual and the two structure maps glue by descent for solid modules. The triangle identities can be checked locally (our own argument). Theorem 14.9 identifies dualizable objects with perfect complexes, and Remark 14.10 gives the vector bundle case.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module). It says: “Using the notion of adic spaces, we can glue together solid modules”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)

### Zariski-constructible sheaves give rigid spaces six functors and perverse sheaves

**Remember:** Cut into locally closed analytic strata with finite locally constant stalks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14G22 (Rigid analytic geometry), 14F20. arXiv math.AG. Level 4: research.

**Definition.** A sheaf of ℤ/n-modules on the étale site of a rigid space is Zariski-constructible if it admits a locally finite Zariski stratification. On every locally closed stratum its restriction must be locally constant with finite stalks.

**Problem.** On rigid spaces over a non-archimedean field of characteristic zero, the six operations keep Zariski-constructible sheaves with coefficients ℤ/n. This needs conditions on the maps, such as properness for pushforward, and it gives a perverse t-structure (Bhatt–Hansen).

**How the definition helps.** One stratification condition defines the coefficient category on every rigid space involved. Bhatt and Hansen prove the preservation results for the applicable morphisms and construct the perverse t-structure (our own summary).

**Paper or page:** [The six functors for Zariski-constructible sheaves in rigid geometry](https://arxiv.org/abs/2101.09759v2). It says: “As an application, we develop a six functor formalism for Zariski-constructible étale sheaves on characteristic zero rigid spaces. Among other things, this implies that characteristic zero rigid spaces support a well-behaved theory of perverse sheaves.”

**Sources:**

- [Bhargav Bhatt, David Hansen, The six functors for Zariski-constructible sheaves in rigid geometry, arXiv:2101.09759v2 (2021)](https://arxiv.org/abs/2101.09759v2)

### Arithmetic restriction selects Galois-finite functions

**Remember:** Finite span under both actions is the condition for arithmetic extension.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** For a topological group H, a representative function is a continuous ℚₚ-valued function whose left translates span a finite-dimensional space. For a Galois action on H, a function is Galois-finite if its Galois translates also span a finite-dimensional space.

**Problem.** Use the arithmetic fundamental group of ℙ¹ ∖ {0,1,∞} over a number field, split by a rational tangential base point. A geometric representative function extends to an arithmetic representative function exactly when it is Galois-finite.

**How the definition helps.** Restriction of a matrix coefficient has finite Galois span because conjugation acts on its finite-dimensional coefficient space. Conversely, extend a Galois-finite function by ignoring the Galois coordinate of the semidirect product. The translation spans of a basis of its Galois orbit span contain all translates of the extension (our own proof).

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “is finite-dimensional”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Associators differ by one symmetry

**Remember:** Compose one comparison with the inverse of the other.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.AG, math.NT. Level 4: research.

**Definition.** In the operad description, a normalized associator is an object-fixing isomorphism from completed parenthesized braids to completed parenthesized chord diagrams preserving the prescribed normalized crossing. It must respect all operad compositions and the symmetric group actions.

**Problem.** Over a characteristic-zero field, any two normalized associators differ by exactly one graded Grothendieck–Teichmüller symmetry of scale one.

**How the definition helps.** Two isomorphisms with the same source and target differ by exactly one automorphism of the target: compose the second with the inverse of the first (our own explanation). This automorphism preserves the prescribed crossing. Bar-Natan identifies these isomorphisms with solutions of the associator equations and these automorphisms with the scale-one group.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “This acts freely on the set of Drinfeld associators.”

**Sources:**

- [Dror Bar-Natan, On associators and the Grothendieck–Teichmüller group I (1998)](https://www.math.toronto.edu/drorbn/papers/GT1/GT1.pdf)

### Cover cycles give Ihara’s scalar

**Remember:** The boundary kernel has one basis vector, the lifted commutator.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** In the pro-ℓ abelian cover tower of the three-punctured line, put u = γ₀ − 1 and v = γ₁ − 1 for the deck generators γ₀ and γ₁. Cycles are the pairs (A,B) over ℤℓ\[\[u,v\]\] with uA + vB = 0, and the reduced Gassner cocycle is the scalar of the semilinear Galois action on the generator (−v,u).

**Problem.** In the basis given by the lifted loop commutator, the reduced Gassner cocycle equals Ihara’s power series.

**How the definition helps.** Since u and v are relatively prime, uA + vB = 0 forces (A,B) to be a multiple of (−v,u), so the action is one scalar (our own calculation). Kodani, Morishita and Terashima identify (−v,u) with the lifted loop commutator and compute its scalar as Ihara’s power series.

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Cyclic coordinates give Ihara’s cocycle

**Remember:** One basis vector turns composition of Galois actions into a cocycle.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 4: research.

**Definition.** Abelianize the closed commutator subgroup of the pro-ℓ fundamental group of the projective line minus 0, 1 and ∞, based at the tangent from 0 toward 1. This module is free over the completed group ring of the abelianized group, with basis the commutator c of the loops around 0 and 1.

**Problem.** For Galois elements σ and τ, define b(σ) by σ(c) = b(σ)c. Then b(στ) = b(σ)σ(b(τ)), so b is a cocycle.

**How the definition helps.** Freeness on one basis vector makes the coefficient b(σ) unique. Applying σ to τ(c) = b(τ)c changes both the coefficient and the basis vector, giving σ(b(τ))b(σ)c (our own calculation). The substantive result is that the commutator is a free basis over the completed group ring.

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hiroaki Nakamura, Arithmetic and Combinatorics in Galois fundamental groups, §0 (2019)](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/2120-09.pdf)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Genus-zero gluing composes symmetries

**Remember:** Compose gluing symmetries as maps, not as pairs of parameters.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.AG, math.NT. Level 4: research.

**Definition.** An object-fixing endomorphism of the profinite genus-zero surface operad gives a continuous endofunctor on each profinite groupoid, acting identically on objects. These functors must preserve identities, permutations and every gluing operation (our own description).

**Problem.** Multiplication in the profinite Grothendieck–Teichmüller group becomes composition of symmetries of this genus-zero system.

**How the definition helps.** In the gluing model, associativity follows from composition of maps. Our own comparison is with Drinfeld’s description by pairs satisfying equations, where multiplication has a separate formula. Proposition 4.26 identifies the two descriptions.

**Paper or page:** [Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640). It says: “There is an isomorphism GT̂ ≅ End₀(Ŝ₀).”

**Sources:**

- [Olivia Borghi and Marcy Robertson, Lecture Notes on Modular Infinity Operads and Grothendieck-Teichmueller Theory](https://arxiv.org/abs/2210.13640)

### Ihara’s series specializes to Jacobi sums

**Remember:** One power series scales the commutator; characters turn it into Jacobi sums.

*Makes the theorem clean to state or prove.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 11L05. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Ihara’s series B(σ) is the scalar by which a Galois element σ multiplies the basic loop commutator c in the pro-ℓ commutator module of the three-punctured line. It is a power series in ℤℓ\[\[u,v\]\], where the two standard loops act as 1 + u and 1 + v.

**Problem.** Let ℓ be an odd prime, m a power of ℓ, ζ a primitive mth root of unity, and σ the arithmetic Frobenius at a prime of ℚ(ζ) away from ℓ. If a, b and a + b are nonzero modulo m and a or b is prime to ℓ, then B(σ) at (ζᵃ − 1, ζᵇ − 1) is the corresponding Jacobi sum.

**How the definition helps.** Setting u = ζᵃ − 1 and v = ζᵇ − 1 makes the two loops act by ζᵃ and ζᵇ, so it picks out one character part of the commutator module. That part is a piece of Fermat curve homology, where Weil’s theorem says Frobenius acts by the Jacobi sum (our own summary of Ihara’s argument).

**Wikipedia:** [Iwasawa algebra](https://en.wikipedia.org/wiki/Iwasawa_algebra). It says: “More precisely, Λ(G) is the inverse limit of the group rings Zₚ(G/H) as H runs through the open normal subgroups of G.”

**Sources:**

- [Yasutaka Ihara, Profinite braid groups, Galois representations and complex multiplications (1986)](https://annals.math.princeton.edu/1986/123-1/p03)
- [Hisatoshi Kodani, Masanori Morishita and Yuji Terashima, Arithmetic Topology in Ihara Theory (2017)](https://ems.press/journals/prims/articles/15057)

### Open subgroups admit zero extension

**Remember:** Finite spans under translation and Galois survive extension by zero.

*True by definition.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)), 14F35. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A representative function on a geometric fundamental group is a continuous ℚₚ-valued function whose translates span a finite-dimensional space. It is Galois-finite if its Galois conjugates also span a finite-dimensional space.

**Problem.** Take a finite unbranched cover of geometrically connected smooth curves over a number field, with compatible rational base points. Every Galois-finite representative function on the cover’s group extends to one on the base curve’s group.

**How the definition helps.** The cover identifies its group with an open subgroup of finite index that Galois preserves, so extension by zero keeps both spans finite (our own proof). Each of the finitely many cosets adds one translated copy of the original span.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “If (X,x) → (Y,y) is a finite etale cover of K-schemes equipped with base points”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Quadratic terms detect nonzero braiding

**Remember:** The xy coefficient is the hexagon parameter squared over 24.

*Rules out counterexamples.* MSC 14G32 (Universal profinite groups (relationship to moduli spaces, projective and moduli towers, Galois theory)). arXiv math.NT, math.AG. Level 4: research.

**Definition.** Over an algebraically closed field of characteristic zero, take series Φ in the completed free algebra on primitive x, y that are group-like (constant term one and ΔΦ = Φ ⊗ Φ) and satisfy Drinfeld’s pentagon. Keep those whose coefficient c of the word xy is nonzero.

**Problem.** Each retained series satisfies Drinfeld’s two hexagon equations, which express compatibility with exchanging inputs, for a nonzero parameter unique up to sign.

**How the definition helps.** Furusho proves that the pentagon implies both hexagons for a parameter μ with μ² = 24c, so c ≠ 0 gives μ ≠ 0, unique up to sign. Our own example Φ = 1 satisfies the pentagon but allows only μ = 0.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “The set of "0-associators" is what is called the Grothendieck-Teichmueller group.”

**Sources:**

- [Hidekazu Furusho, Pentagon and hexagon equations (2010)](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n1-p13-p.pdf)

### Bott–Chern forms restore character additivity

**Remember:** Put the failure of additivity into the relations.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 19E08. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Arithmetic K₀ is generated by hermitian vector bundles and classes of differential forms. For each exact sequence of hermitian bundles A → B → C, it imposes \[A\] − \[B\] + \[C\] = a(η), where a(η) is the class of the secondary Bott–Chern form η that measures how the Chern character forms fail to add (our own).

**Problem.** On a regular projective arithmetic variety, the arithmetic Chern character gives a group homomorphism from arithmetic K-theory to rational arithmetic Chow groups.

**How the definition helps.** The arithmetic Chern character of an exact sequence fails to add by exactly the Bott–Chern form η, which the relation already contains (our own). So the character respects every relation and is a homomorphism (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “φ̂(ℱ∗) − φ̂(𝒢∗) + φ̂(ℋ∗) = a(φ̃(τ̄))”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Compatible wavefront bounds permit current products

**Remember:** Products exist when no singular direction meets its opposite.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A wavefront bound for a current, a generalized differential form, is a closed cone of nonzero covectors, invariant under complex conjugation, that contains every direction in which the current is singular. Two bounds S and T are compatible if, at each point, no covector in S has its negative in T.

**Problem.** On a regular arithmetic variety, compatible bounds S and T give a product of arithmetic Chow classes with rational coefficients. Its bound is S ∪ T ∪ (S + T), where addition pairs covectors at the same point.

**How the definition helps.** Compatibility rules out opposite singular directions that could cancel, so the product theorem for distributions applies (our own). A point mass has opposite singular directions and has no canonical square (our own). The arithmetic theorem also checks that the product respects the cycle relations (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Moreover, if S ∩ (−S′) = ∅, there is a graded bilinear map”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Currents make proper pushforwards compose

**Remember:** Push a test form back twice to push its current forward twice.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** Arithmetic Chow groups with current coefficients pair cycles with currents, generalized differential forms defined by their action on smooth test forms. The direct image of a current under a proper map f acts on a test form ω by acting on f\*ω, so it exists even when a smooth input gives a singular output.

**Problem.** For composable proper maps between regular arithmetic varieties, successive direct images of arithmetic Chow classes with current coefficients equal the direct image along the composite.

**How the definition helps.** For a composite g ∘ f, the direct image tests (g ∘ f)\*ω = f\*g\*ω, which is what two successive direct images test (our own). The arithmetic theorem also checks the cycle relations and controls the singular directions of the result (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “Furthermore, the relation (g ∘ f)∗ = g∗ ∘ f∗ is satisfied.”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Deligne classes determine compatible lifts

**Remember:** Curvature carries the cycle’s class; shifting the Green current moves within it.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** The curvature of a codimension-p arithmetic cycle (Z,g) is the smooth form ω = δ<sub>Z</sub> + ddᶜg, where δ<sub>Z</sub> integrates over Z and g is a Green current. So ω has the Deligne class of Z, and adding a smooth form η to g changes ω by the exact form ddᶜη (our own).

**Problem.** On a regular projective arithmetic variety, consider a Chow class and a closed real Deligne form of matching degree. They admit a common arithmetic lift exactly when their Deligne classes agree.

**How the definition helps.** The curvature always has the class of the cycle, so agreement of classes is necessary (our own). Conversely, a closed form in that class differs from ω by some ddᶜη, and replacing g by g + η reaches it (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “CHᵖ(𝒳) ⊕ ZC²ᵖ(p) ⟶ H²ᵖ(C∗(p)) ⟶ 0”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### Exact terms make Green products commute

**Remember:** Swapping the factors changes only terms killed in the Green quotient.

*True by definition.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a cycle of codimension p, the Green term of a Green current is its class modulo currents ∂u + ∂̄v, with u of bidegree (p−2,p−1) and v of bidegree (p−1,p−2).

**Problem.** For properly intersecting cycles on a smooth projective variety over an arithmetic field, the two orders of the Green star product agree modulo these derivatives.

**How the definition helps.** Swapping the two factors in the star product changes the result only by terms ∂u + ∂̄v, which the quotient discards (our own). On representatives the formula treats the factors unequally, so commutativity holds only in the quotient (our own). The analytic work uses logarithmic representatives to justify integration by parts (our own).

**nLab:** [arithmetic Chow group](https://ncatlab.org/nlab/show/arithmetic+Chow+group). It says: “pairs consisting of a codimension p subvariety of X together with a Green current for it.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)

### Green products multiply curvatures

**Remember:** The cycle term cancels, leaving the product of the two curvature forms.

*True by definition. Confidence: medium.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG. Level 4: research.

**Definition.** A Green current g<sub>Z</sub> for Z has smooth curvature ω<sub>Z</sub> = ddᶜg<sub>Z</sub> + δ<sub>Z</sub>, where δ<sub>Z</sub> denotes integration over Z. For properly intersecting cycles and admissible representatives, the star product is g<sub>Z</sub> ∗ g<sub>W</sub> = g<sub>Z</sub> δ<sub>W</sub> + ω<sub>Z</sub> g<sub>W</sub>.

**Problem.** For properly intersecting cycles on a smooth projective variety over an arithmetic field, the Green star product multiplies their curvature forms.

**How the definition helps.** Applying ddᶜ gives (ω<sub>Z</sub> − δ<sub>Z</sub>)δ<sub>W</sub> + ω<sub>Z</sub>(ω<sub>W</sub> − δ<sub>W</sub>). The mixed terms cancel, and adding δ<sub>Z⋅W</sub> leaves ω<sub>Z</sub>ω<sub>W</sub> (our own calculation). The intersection theorem justifies this computation with logarithmic representatives.

**Paper or page:** [Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1). It says: “Assume that the cycles α and β intersect properly.”

**Sources:**

- [Henri Gillet and Christophe Soulé, Arithmetic intersection theory (1990)](https://www.numdam.org/item/PMIHES_1990__72__93_0/)
- [Souvik Goswami and Rahul Gupta, Arithmetic Cycles with Modulus](https://arxiv.org/abs/2501.03408v1)

### Self-dual torsion lifts Grothendieck duality

**Remember:** Choose torsion that obeys the same duality as the complexes.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 58J52. arXiv math.AG. Level 4: research.

**Definition.** An arithmetic complex is a complex of bundles with metrics, together with a differential form or current. A theory of analytic torsion assigns to each metrized projective map a correction for how the direct image of such complexes depends on the metrics. It is self-dual if dualizing, with the relative dualizing twist and the sign on forms, turns each correction into the correction of the dual.

**Problem.** For a metrized projective map between smooth complex varieties, self-dual torsion makes arithmetic duality commute with direct image up to natural isomorphism. On the source one tensors the dual with the relative dualizing complex, which accounts for duality along the fibers.

**How the definition helps.** Self-duality gives the same metric correction on both sides of Grothendieck’s duality isomorphism, so that isomorphism lifts to arithmetic complexes (our own).

**Paper or page:** [Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2). It says: “Let T be a self-dual theory of generalized analytic torsion classes.”

**Sources:**

- [J. I. Burgos Gil, G. Freixas i Montplet and R. Litcanu, Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2)

### Smooth curvature detects ordinary classes

**Remember:** Ordinary classes are exactly those with smooth curvature.

*Makes the theorem clean to state or prove.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** The curvature of an arithmetic cycle (Z,g) with current coefficients is ω = ddᶜg + δ<sub>Z</sub>, where δ<sub>Z</sub> integrates over Z; ordinary cycles have smooth curvature. Its singular class is ω modulo smooth forms, which vanishes exactly when the curvature is smooth.

**Problem.** Suppose an arithmetic variety has projective generic fiber, the variety obtained over the base field of fractions. Ordinary arithmetic Chow homology embeds in the version with currents, with image exactly the classes whose curvature vanishes modulo smooth forms.

**How the definition helps.** Ordinary classes have smooth curvature, so they land in the stated image (our own). The comparison theorem proves injectivity and gives every class with smooth curvature an ordinary representative (our own).

**Paper or page:** [Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1). It says: “denotes the subspace of currents that can be represented by smooth differential forms.”

**Sources:**

- [J. I. Burgos Gil, Semipurity of tempered Deligne cohomology](https://arxiv.org/abs/1011.3714v1)

### Tight triangles multiply Todd classes

**Remember:** Tight triangles carry the cone metric, so no secondary correction appears.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights), 14C17. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A metrized distinguished triangle is tight if the metric on its third complex agrees with the metric induced on the cone of its first arrow, up to a tight isomorphism. A tight isomorphism is one whose hermitian cone is meager, so it carries no secondary characteristic classes (our own).

**Problem.** On a regular arithmetic variety, the rational arithmetic Todd class of the middle complex in a tight triangle equals the product for the outer complexes.

**How the definition helps.** Tightness makes the Bott–Chern secondary class of the triangle vanish, and that class is the only correction to multiplicativity of Todd classes (our own). Even an identity map between lines carries a secondary class if the two norms differ (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “In particular, if τ̄ is tightly distinguished, the equality”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)
- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Răzvan Lițcanu, Hermitian structures on the derived category of coherent sheaves](https://perso.pages.math.cnrs.fr/users/gerard.freixas/Articles/Burgos-Freixas-Litcanu-JMPA.pdf)

### Wavefront bounds permit arithmetic pullbacks

**Remember:** A pullback cannot collapse a permitted singular direction.

*Rules out counterexamples.* MSC 14G40 (Arithmetic varieties and schemes; Arakelov theory; heights). arXiv math.AG, math.NT. Level 4: research.

**Definition.** In arithmetic Chow groups with current coefficients, a closed cone S of nonzero covectors, invariant under complex conjugation, bounds the directions in which a current may be singular. A map f is transverse to S if its derivative pulls no covector in S back to zero.

**Problem.** A transverse map between regular arithmetic varieties pulls arithmetic Chow classes with bound S back to classes bounded by the pulled-back cone.

**How the definition helps.** Transversality means f kills no permitted singular direction, so the pullback theorem for distributions applies (our own). Restricting a point mass to its own point fails this test, since it would need a point value (our own). The arithmetic theorem then checks the cycle relations (our own).

**Paper or page:** [The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1). It says: “If $N<sub>f</sub>\\cap S=\\emptyset $, then there is a pull-back morphism”

**Sources:**

- [José Ignacio Burgos Gil, Gerard Freixas i Montplet and Razvan Litcanu, The arithmetic Grothendieck-Riemann-Roch theorem for general projective morphisms](https://arxiv.org/abs/1211.1783v1)

### A principal kernel of θ makes perfectoid rings of characteristic p perfect

**Remember:** In characteristic p, the principal θ-kernel is p, forcing perfection.

*Rules out counterexamples. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 13A35. arXiv math.AG, math.AC. Level 4: research.

**Definition.** A ring R is integral perfectoid if it is π-adically complete for some π with πᵖ dividing p, Frobenius is surjective on R/p, and the kernel of Fontaine’s map θ from W(R♭) to R is principal. Here R♭ is the inverse limit of R/p under Frobenius.

**Problem.** A ring of characteristic p is integral perfectoid if and only if it is perfect.

**How the definition helps.** In characteristic p the kernel of θ contains p, and a principal kernel is then generated by p, so R = W(R♭)/p = R♭ is perfect (our own). Without this condition, adjoining all p-power roots of x to 𝔽ₚ\[x\] and killing x gives a semiperfect ring with nilpotents (our own example). Conversely, a perfect R is its own tilt, and W(R) → R has kernel (p).

**nLab:** [perfect ring](https://ncatlab.org/nlab/show/perfect+ring). It says: “A ring R of characteristic p is said to be perfect if the Frobenius map φ: R → R is an isomorphism. If instead φ is merely assumed to be surjective, R is said to be semiperfect.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)
- [B. Bhatt, M. Morrow and P. Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS 128 (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Almost modules make the integral structure sheaf acyclic on perfectoid spaces

**Remember:** Ignore anything that the small ideal kills.

*True by definition. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 18E35, 13C60. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Over the valuation ring 𝒪<sub>K</sub> of a perfectoid field K, with maximal ideal 𝔪, almost modules treat every module killed by 𝔪 as zero. Formally, they are the quotient of 𝒪<sub>K</sub>-modules by these almost zero modules.

**Problem.** For an affinoid perfectoid space over K and a pseudo-uniformizer π of K, every positive-degree cohomology group of 𝒪⁺/π vanishes in almost modules.

**How the definition helps.** Scholze’s almost vanishing theorem says 𝔪 kills each higher cohomology group of 𝒪⁺/π on an affinoid perfectoid space, and the quotient sends such groups to zero (our own explanation).

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module), [almost module](https://ncatlab.org/nlab/show/almost+module). It says: “The theory of almost modules is necessary in order to make the structure sheaf 𝒪ₓ⁺/π acyclic on affinoid perfectoid spaces”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publ. Math. IHÉS 116 (2012), arXiv:1111.4914](https://arxiv.org/abs/1111.4914)
- [Lucas Mann, A p-adic 6-functor formalism in rigid-analytic geometry, arXiv:2206.02022](https://arxiv.org/abs/2206.02022)

### As diamonds, a perfectoid space and its tilt are the same

**Remember:** A diamond sees X only through untilts of characteristic p spaces.

*True by definition.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The diamond X♢ of an analytic adic space X over ℤₚ is the functor on characteristic-p perfectoid spaces T that sends T to the set of untilts U of T with a map U → X, up to isomorphism.

**Problem.** For a perfectoid space X, the diamond X♢ is represented by the tilt X♭. For any analytic adic space X over ℤₚ, the diamond has the same underlying space and the same étale site as X.

**How the definition helps.** When X is perfectoid, tilting turns a map U → X from an untilt of T into a map T → X♭, so X♭ represents X♢ (our own argument). For general X, Scholze’s comparison theorem identifies the underlying spaces and étale sites.

**Paper or page:** [On the Unipotent p-adic Simpson Correspondence](https://arxiv.org/abs/2403.04565). It says: “The associated diamond functor preserves étaleness, and induces an equivalence of (finite) étale sites X\_ét ≅ X♢\_ét, X<sub>f</sub>ét ≅ X♢<sub>f</sub>ét.”

**Sources:**

- [P. Scholze, Étale cohomology of diamonds (2020)](https://doi.org/10.2139/ssrn.3542189)

### Building the Fargues–Fontaine curve from Witt vectors makes untilts into points

**Remember:** Each untilt is a point; Frobenius glues its twists.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22, 11S20. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let C be an algebraically closed perfectoid field of characteristic p, and choose ϖ with 0 &lt; \|ϖ\| &lt; 1. Let Y be the part of Spa W(𝒪<sub>C</sub>) where neither p nor \[ϖ\] vanishes, so that each characteristic-0 untilt of C gives a point of Y through Fontaine’s map θ. The analytic Fargues–Fontaine curve is Y modulo the powers of Witt Frobenius.

**Problem.** The closed points of the Fargues–Fontaine curve correspond to the untilts of C of characteristic 0, up to Frobenius. The residue field at each point is the corresponding untilt.

**How the definition helps.** Each untilt gives a surjection θ onto its valuation ring, whose kernel defines a point of Y, and Frobenius moves it to the point of the Frobenius-twisted untilt (our own explanation). Fargues and Fontaine’s classification of closed points gives the converse and identifies the residue fields.

**nLab:** [Fargues-Fontaine curve](https://ncatlab.org/nlab/show/Fargues-Fontaine+curve). It says: “The Fargues-Fontaine curve X<sub>C</sub> is a complete algebraic curve whose closed points parametrize the untilts of C. Such an untilt may be recovered as the residue field of the corresponding point.”

**Sources:**

- [L. Fargues and J.-M. Fontaine, Courbes et fibrés vectoriels en théorie de Hodge p-adique, Astérisque 406 (2018)](https://doi.org/10.24033/ast.1056)

### Frobenius descent identifies sections with eigenvectors

**Remember:** A twist turns a fixed-section condition into an eigenvalue condition.

*True by definition. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14F30. arXiv math.AG, math.NT. Level 4: research.

**Definition.** The analytic Fargues–Fontaine curve is a period space Y modulo its Frobenius automorphism φ. The twist of degree n is the line bundle made by gluing the trivial bundle on Y along Frobenius orbits through the action p⁻ⁿφ, so a section is a function f with p⁻ⁿφ(f) = f (our own).

**Problem.** Global sections of the twist n on the analytic Fargues–Fontaine curve are functions f on Y that satisfy φ(f) = pⁿf.

**How the definition helps.** A global section is a function on Y fixed by the gluing action p⁻ⁿφ, and p⁻ⁿφ(f) = f says φ(f) = pⁿf (our own explanation). The work lies in constructing Y and descending the bundle to the quotient (our own).

**nLab:** [Fargues-Fontaine curve](https://ncatlab.org/nlab/show/Fargues-Fontaine+curve). It says: “The (relative) Fargues-Fontaine curve $X<sub>S</sub>$ is then defined to be $Y<sub>S</sub>/\\phi<sub>S</sub><sup>{\\mathbb{Z}}$</sup>, where $\\phi<sub>S</sub>$ is the Frobenius on $S$.”

**Sources:** none listed. No primary source with a working link was found.

### Perfect prisms are the same thing as integral perfectoid rings

**Remember:** A perfect prism is Witt vectors of a tilt, cut by θ.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14F30, 13F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfect prism is a δ-ring A with bijective Frobenius φ, with a Cartier divisor ideal I such that p ∈ I + φ(I)A and A is derived (p,I)-complete. Bijective Frobenius makes A the Witt vectors of the perfect ring A/p.

**Problem.** The functor (A, I) ↦ A/I is an equivalence from perfect prisms to integral perfectoid rings. Its inverse sends R to the Witt vectors W(R♭) of the tilt, with the ideal ker θ.

**How the definition helps.** Since A = W(A/p) with A/p perfect, the quotient A/I is perfectoid with tilt A/p, and I is the kernel of θ. Bhatt and Scholze prove that the two constructions are inverse (our own summary).

**nLab:** [prismatic cohomology](https://ncatlab.org/nlab/show/prismatic+cohomology). It says: “A prism (A,I) is perfect if A is perfect. The category of perfect prisms is equivalent to the category of integral perfectoid rings”

**Paper or page:** [Galois representations, (φ, Γ)-modules and prismatic F-crystals](https://arxiv.org/abs/2104.12105). It says: “The category of perfect prisms is equivalent to the category of integral perfectoid rings. The equivalence functors are (A,I) → A/I, and R → (W(R♭), Ker(θ)).”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022)](https://doi.org/10.4007/annals.2022.196.3.5)

### Perfectoid fields share their Galois group with their tilt

**Remember:** Tilt by taking Frobenius roots modulo p; Galois groups stay the same.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 12J25. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid field K is a complete nonarchimedean field with nondiscrete rank-one valuation and residue characteristic p. Frobenius must be surjective on 𝒪<sub>K</sub>/p. Its tilt is the fraction field of the inverse limit of 𝒪<sub>K</sub>/p along Frobenius.

**Problem.** For any perfectoid field K, the absolute Galois groups of K and of its tilt are isomorphic. So a question about a mixed characteristic field becomes one about a characteristic p field.

**How the definition helps.** Scholze’s tilting theorem, proved with almost purity, identifies finite étale algebras over K and over K♭. Choosing compatible geometric points then identifies their absolute Galois groups (our own argument).

**Wikipedia:** [Perfectoid space](https://en.wikipedia.org/wiki/Perfectoid_space). It says: “the almost purity theorem implies that for any perfectoid field K the absolute Galois groups of K and K♭ are isomorphic.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, Publications Mathématiques de l'IHÉS 116 (2012)](https://doi.org/10.1007/s10240-012-0042-x)

### Perfectoid rings are stably uniform, so their adic spectra are sheafy

**Remember:** Every rational localization stays uniform, so the presheaf glues.

*Rules out counterexamples.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A Tate ring A is uniform if its power-bounded elements form a bounded subset. A Huber pair (A,A⁺) is stably uniform if A and every rational localization of it are uniform.

**Problem.** For a perfectoid Huber pair (A,A⁺), the structure presheaf on Spa(A,A⁺) is a sheaf. Its positive-degree Čech cohomology vanishes for rational covers of rational opens.

**How the definition helps.** The acyclicity theorem for stably uniform Tate rings gives sheafiness, and perfectoid pairs are stably uniform because rational localizations of perfectoid rings stay perfectoid. The nonsheafy examples of Buzzard and Verberkmoes fail stable uniformity (our own summary).

**Paper or page:** [Adic spaces](https://arxiv.org/abs/2405.06435), [Adic spaces](https://arxiv.org/abs/2405.06435), [Adic spaces](https://arxiv.org/abs/2405.06435). It says: “Every perfectoid Huber pair (A,A⁺) is sheafy and the structure sheaf is acyclic.”

**Sources:**

- [K. Buzzard and A. Verberkmoes, Stably uniform affinoids are sheafy, Journal für die reine und angewandte Mathematik (2016)](https://doi.org/10.1515/crelle-2015-0089)
- [P. Scholze, Perfectoid spaces, Publications Mathématiques de l'IHÉS 116 (2012)](https://doi.org/10.1007/s10240-012-0042-x)

### Perfectoid rings let you move étale problems to characteristic p

**Remember:** Uniformity and Frobenius modulo a pseudo-uniformizer define a perfectoid Tate ring.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A perfectoid ring is a complete Tate ring A whose power-bounded elements A° form a bounded set. It has a pseudo-uniformizer ϖ with ϖᵖ dividing p in A°, such that Frobenius from A°/ϖ to A°/ϖᵖ is an isomorphism. Its tilt A♭ is the limit of A under x ↦ xᵖ, made into a ring of characteristic p.

**Problem.** For a perfectoid ring R, tilting gives an equivalence between finite étale R-algebras and finite étale R♭-algebras. For a perfectoid space X, it gives an equivalence between the étale sites of X and of its tilt X♭.

**How the definition helps.** Scholze’s tilting theorem, proved with almost purity, identifies finite étale algebras over R and R♭, and the étale sites of X and X♭. Since the tilt has characteristic p, étale questions move there (our own summary).

**nLab:** [perfectoid space](https://ncatlab.org/nlab/show/perfectoid+space). It says: “this is generalized by the statement that the perfectoid spaces over fields related this way are equivalent.”

**Sources:**

- [Peter Scholze, Perfectoid spaces, arXiv:1111.4914](https://arxiv.org/abs/1111.4914)

### Requiring 𝔪² = 𝔪 makes almost zero modules a Serre subcategory

**Remember:** Two ideal factors in an extension collapse to one when 𝔪² equals 𝔪.

*Rules out counterexamples.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 13D99, 18E35. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Fix a commutative ring V and an ideal 𝔪 with 𝔪² = 𝔪. A V-module M is almost zero if 𝔪M = 0. Almost modules form the quotient by the almost zero modules.

**Problem.** In a basic setup, the almost zero modules form a Serre subcategory, closed under submodules, quotients and extensions. So the category of almost modules is an abelian quotient category with a tensor product.

**How the definition helps.** For an extension of almost zero modules, 𝔪 sends the middle module into the submodule, so 𝔪² = 𝔪 kills it. With 𝔪 = (p), the extension ℤ/p² of ℤ/p by itself fails this test (our own example). Annihilation passes to submodules, quotients and tensor products with arbitrary modules, giving the stated quotient and tensor product (our own argument).

**nLab:** [almost scheme](https://ncatlab.org/nlab/show/almost+scheme), [almost module](https://ncatlab.org/nlab/show/almost+module). It says: “One starts with a "basic setup" consisting of a fixed commutative unital ("base") ring V containing an ideal I such that I² = I.”

**Sources:**

- [O. Gabber and L. Ramero, Almost Ring Theory, Lecture Notes in Mathematics 1800, Springer (2003)](https://doi.org/10.1007/b10047)

### Restricting to absolutely weakly normal schemes makes the diamond functor fully faithful

**Remember:** Diamonds cannot see a cusp, so cusps must be excluded.

*Rules out counterexamples. Confidence: medium.* MSC 14G45 (Perfectoid spaces and mixed characteristic), 14G22, 14B05. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A reduced scheme X is absolutely weakly normal if every universal homeomorphism Y → X from a reduced scheme, a map that stays a homeomorphism after every base change, is an isomorphism. For formal schemes, ask this of the coordinate rings of affine formal charts.

**Problem.** Let O be the integers of a p-adic field. The diamond functor into v-sheaves over Spd O is fully faithful on flat, separated, absolutely weakly normal formal schemes topologically of finite type over O.

**How the definition helps.** Diamonds cannot tell apart two schemes joined by a universal homeomorphism, such as a cusp and its normalization (our own example). Absolute weak normality removes such pairs, and the quoted full-faithfulness theorem recovers morphisms on what remains.

**Paper or page:** [On the p-adic theory of local models](https://arxiv.org/abs/2201.01234), [On the p-adic theory of local models](https://arxiv.org/abs/2201.01234), [Morphisms, Lemma 29.47.7.](https://stacks.math.columbia.edu/tag/0EUS). It says: “The functor X ↦ X♢ from the category of absolute weakly normal formal schemes flat, separated and topologically of finite type over O, to v-sheaves over Spd O is fully faithful.”

**Sources:**

- [J. Anschütz, I. Gleason, J. Lourenço and T. Richarz, On the p-adic theory of local models (arXiv 2201.01234)](https://arxiv.org/abs/2201.01234)

### Tilted line bundles encode tensor roots

**Remember:** A tilted unit is a tower of pth roots.

*Makes the theorem clean to state or prove.* MSC 14G45 (Perfectoid spaces and mixed characteristic). arXiv math.AG, math.NT. Level 4: research.

**Definition.** On a perfectoid space X, a unit of the tilt over an open set is the same as a sequence of units u₀, u₁, … on that open set of X with each uᵢ equal to the pth power of uᵢ₊₁ (our own description).

**Problem.** Suppose the ring of global functions of the perfectoid space X is itself perfectoid. The Picard group of its tilt is the group of sequences of line bundle classes on X linked by pth tensor power.

**How the definition helps.** Applied to gluing functions, this turns a line bundle on the tilt into a sequence of line bundles on X, each the pth tensor power of the next (our own explanation). The converse needs the perfectoid hypothesis on global functions to produce compatible gluing data (our own explanation).

**Paper or page:** [Untilting Line Bundles on Perfectoid Spaces](https://arxiv.org/abs/2102.04354v3). It says: “Then θ : Pic X♭ → lim Pic X is an isomorphism.”

**Sources:**

- [Untilting Line Bundles on Perfectoid Spaces](https://arxiv.org/abs/2102.04354v3)

### Even stabilizers preserve Weil pairings

**Remember:** Odd stabilizers at nonseparating nodes break the two-torsion pairing.

*Rules out counterexamples.* MSC 14H10 (Families, moduli of curves (algebraic)), 14H40. arXiv math.AG. Level 4: research.

**Definition.** On a balanced tame twisted curve, the even-order condition asks that every nonseparating node, one whose partial normalization stays connected, have a cyclic stabilizer of even order.

**Problem.** Consider a proper connected balanced tame twisted curve without markings over an algebraically closed field of characteristic different from two. The Weil pairing on its two-torsion line bundles is nondegenerate exactly when the even-order condition holds.

**How the definition helps.** Proposition 5.9 shows that an odd stabilizer at a nonseparating node is exactly what makes the Weil pairing degenerate. Gluing two distinct points of a smooth connected projective curve gives such a node with trivial stabilizer (our own example).

**Paper or page:** [Weil pairing on twisted curves](https://arxiv.org/abs/2310.09012v1). It says: “The Weil pairing on 𝒳 is non-degenerate if and only if the stabilizers of the non-separating nodes are of even order”

**Sources:**

- [Weil pairing on twisted curves](https://arxiv.org/abs/2310.09012v1)

### Disconnected curves keep Galois closures inside the theory

**Remember:** Drop connectedness, and Galois closures of curves stay curves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14H30 (Coverings of curves, fundamental group), 14H40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Over a field of characteristic zero, a curve here is a smooth proper scheme of pure dimension one that need not be connected, even after extension to an algebraic closure (our own).

**Problem.** Let a finite group G act on a curve X, freely on a dense open subset; then X/G is again a curve. On Jacobians, pushforward after pullback multiplies by \|G\|, and pullback after pushforward sums the actions of G.

**How the definition helps.** Allowing several components keeps Galois closures inside the class of curves, so one statement covers the case where G permutes the components (our own). The paper reduces to the connected case, where the norm and pullback identities apply.

**Paper or page:** [On Galois covers of curves and arithmetic of Jacobians](https://arxiv.org/abs/2407.18258). It says: “it is convenient to work throughout with curves that are not assumed to be geometrically connected (or even connected); such curves arise naturally when taking Galois closures of covers of curves.”

**Sources:**

- [Alexandros Konstantinou, Adam Morgan, On Galois covers of curves and arithmetic of Jacobians, arXiv:2407.18258 (2024)](https://arxiv.org/abs/2407.18258)

### Leading terms lift tangential points

**Remember:** A ramified map acts on tangent directions by its first nonzero term.

*Rules out counterexamples.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let f be a finite nonconstant map between smooth curves over a field of characteristic zero, with local coordinates u at a rational point x and t at f(x). If t ∘ f begins with auᵉ, then f acts on tangents by this leading term, sending the tangent coordinate v to avᵉ.

**Problem.** Every nonzero tangent at f(x) lifts at x after a finite extension of the ground field.

**How the definition helps.** Lifting a tangent w means solving avᵉ = w, which needs only one adjoined root (our own explanation). The ordinary derivative fails: for t = u² at zero, it sends every tangent to zero.

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “there exists a tangential base point xᵥ defined over a finite Kummer extension of F”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Reduced pole orders determine genus

**Remember:** Reduce the poles before reading the ramification from their orders.

*Rules out counterexamples.* MSC 14H30 (Coverings of curves, fundamental group), 11G20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** An Artin–Schreier cover of the line in characteristic p has equation yᵖ − y = f(x), and replacing y by y + h changes f by hᵖ − h. The equation is reduced if, over the algebraic closure, every pole of f has order prime to p; then each pole order m is the ramification jump there (our own).

**Problem.** For a connected degree p cover of the projective line in this form, its genus satisfies 2g = (p − 1)(∑(m + 1) − 2). Sum over the geometric poles of order m.

**How the definition helps.** Once each pole order m is the ramification jump, the ramification theorem gives each pole a contribution (p − 1)(m + 1) to the Riemann–Hurwitz formula (our own explanation). For example, in odd characteristic xᵖ + x² reduces to x + x² by subtracting xᵖ − x, so the jump at infinity is two (our own).

**Paper or page:** [A Mass Formula For Artin--Schreier Curves Over Finite Fields](https://arxiv.org/abs/2203.10187). It says: “Let π be an Artin–Schreier cover with equation yᵖ − y = u(x)”

**Sources:** none listed. No primary source with a working link was found.

### Tangential fibers keep unramified sheets

**Remember:** A nonzero tangent picks a coordinate to first order at the puncture.

*Makes the theorem clean to state or prove.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG, math.NT. Level 4: research.

**Definition.** A tangential base point at a rational point x of a smooth connected curve over a field of characteristic zero is a nonzero tangent vector v at x. It picks sheets of covers of the punctured curve by compatible roots of a local coordinate with derivative one along v, as if x were still there.

**Problem.** Removing x gives a surjection from the fundamental group based at the tangent to the fundamental group of C based at x. These groups describe symmetries of finite unbranched algebraic covers.

**How the definition helps.** The tangent gives a base point on the punctured curve whose sheets match those at x for every cover that extends across x (Petrov). Surjectivity follows because a connected covering curve stays connected after removing finitely many points (our own explanation).

**Paper or page:** [Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301). It says: “the geometric fibers of U at x and of U\|C∖x at xᵥ are canonically identified.”

**Sources:**

- [Alexander Petrov, Universality of the Galois action on the fundamental group of ℙ¹ ∖ {0,1,∞}](https://arxiv.org/abs/2109.09301)

### Tangents make puncture filling canonical

**Remember:** Use a tangent to recover a fiber at the missing point.

*Makes the theorem clean to state or prove.* MSC 14H30 (Coverings of curves, fundamental group), 14F35. arXiv math.AG. Level 4: research.

**Definition.** Let x be a rational point on a smooth geometrically connected curve over a characteristic-zero field k, with a nonzero rational tangent v at x. For a parameter t with dt(v) = 1, the tangential fiber is the set of lifts of the cover over the union of k̄((t¹⁄ⁿ)) for n ≥ 1, a stand-in for the missing fiber at x.

**Problem.** After extending scalars to an algebraic closure, filling x gives a canonical surjection from the punctured curve’s étale fundamental group to that of C. These groups act on the sheets of all finite étale covers.

**How the definition helps.** For every cover extending across x, the tangential fiber agrees with the ordinary fiber at x. Each connected cover of C stays connected after deleting the points above x, so the induced map of groups is surjective (our own).

**Paper or page:** [Universality of the Galois action on the fundamental group of $\\mathbb{P}<sup>1\\setminus\\{0</sup>,1,\\infty\\}$](https://arxiv.org/abs/2109.09301). It says: “the geometric fibers of U at x and of U\|C∖x at xᵥ are canonically identified.”

**Sources:**

- [Pierre Deligne, Le groupe fondamental de la droite projective moins trois points (1989)](https://doi.org/10.1007/978-1-4613-9649-9_3)

### G-normal models give curves with group scheme actions a unique good model

**Remember:** Ask each orbit, not each point, to be cut out by one equation.

*Makes the theorem clean to state or prove.* MSC 14H37 (Automorphisms of curves), 14L15. arXiv math.AG. Level 4: research.

**Definition.** For a finite group scheme G acting on an integral curve, G-normality means each closed point's scheme-theoretic orbit has an invertible ideal sheaf.

**Problem.** Every curve with an action of a finite group scheme G has a unique projective G-normal model. A normal projective model with the action need not exist.

**How the definition helps.** The orbit condition allows a projective model to retain the action even when ordinary normalization loses it (our own). Brion's equivariant model and G-normalization theorems give existence and uniqueness up to equivariant isomorphism over the original function field (our own).

**Paper or page:** [Actions of finite group schemes on curves](https://arxiv.org/abs/2207.08209v2). It says: “Every action of a finite group scheme G on a variety admits a projective equivariant model, but not necessarily a normal one. As a remedy, we introduce and explore the notion of G-normalization.”

**Sources:**

- [Michel Brion, Actions of finite group schemes on curves, arXiv:2207.08209v2 (2024)](https://arxiv.org/abs/2207.08209v2)

### The chord rule gives elliptic curves a structure without a chosen zero

**Remember:** The third point on a chord defines the operation.

*Makes the theorem clean to state or prove.* MSC 14H52 (Elliptic curves), 08A02. arXiv math.AG, math.RA. Level 4: research.

**Definition.** An elliptic group abstracts the chord rule, where x ∗ y is the third point on the line through x and y. It is a set with a commutative operation ∗ such that x ∗ (x ∗ y) = y and x ∗ (y ∗ (z ∗ w)) = w ∗ (y ∗ (z ∗ x)) for all x, y, z, w.

**Problem.** Choose any element c of an elliptic group. The operation x + y = c ∗ (x ∗ y) makes it an abelian group with zero c. Different choices of c give isomorphic groups.

**How the definition helps.** The elliptic group axioms give commutativity, identity c, and inverse (c ∗ c) ∗ x for the stated sum (our own). The four-variable identity gives associativity by swapping x and z in x ∗ (c ∗ (y ∗ z)) (our own). The map x ↦ c ∗ (d ∗ x) changes zero from c to d (our own).

**Paper or page:** [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1), [Elliptic groups and rings](https://arxiv.org/abs/2201.05553v1). It says: “However, that very chord-tangent law allows us to define a rather more obscure algebraic structure, which we call an elliptic group, on the points of an elliptic curve.”

**Sources:**

- [Ilia Pirashvili, Elliptic groups and rings, arXiv:2201.05553v1 (2022)](https://arxiv.org/abs/2201.05553v1)

### Framed trees give unique polynomials

**Remember:** Two marked vertices remove the two choices in an affine coordinate.

*Rules out counterexamples.* MSC 14H57 (Dessins d'enfants theory). arXiv math.AG, math.NT. Level 4: research.

**Definition.** A tree dessin is a plane tree whose black and white vertices alternate along edges, drawn by a polynomial that sends black vertices to 0 and white vertices to 1. A frame marks one black and one white vertex, which fixes the two free constants of an affine change of variable.

**Problem.** Each framed tree determines exactly one complex polynomial whose finite critical values lie in {0,1} and whose marked vertices have coordinates 0 and 1.

**How the definition helps.** The tree fixes its polynomial up to an affine change of variable z ↦ az + b, and placing the two marked vertices at 0 and 1 fixes a and b (our own explanation). Without marks, B(z) = 3z² − 2z³ and B(−z/2) represent the same tree.

**Paper or page:** [Three arithmetic sites](https://arxiv.org/abs/2003.01387). It says: “Every framed tree dessin T is isomorphic to the framed tree dessin D(B) of a unique (!) dynamical Belyi polynomial B.”

**Sources:**

- [Lieven Le Bruyn, Three arithmetic sites](https://arxiv.org/abs/2003.01387)

### Parabolic slope gives Harder–Narasimhan strata for bundles with weighted flags

**Remember:** Count the flag weights in the slope.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14H60 (Vector bundles on curves and their moduli), 14D23. arXiv math.AG. Level 4: research.

**Definition.** A parabolic bundle is a vector bundle with, at each marked point, a decreasing flag in the fiber whose successive quotients carry strictly increasing weights in \[0,1). Its parabolic slope is the degree plus the sum of each weight times its quotient dimension, all divided by rank.

**Problem.** Fix the parabolic weights. The Harder–Narasimhan filtration has semistable successive quotients of strictly decreasing parabolic slopes. Bundles of each fixed Harder–Narasimhan type form a locally closed substack of the moduli stack.

**How the definition helps.** Parabolic slope builds the filtration and its types, so the strata can be stated; ordinary slope ignores the flags (our own). The abstract bases the stratification on this notion of Mehta and Seshadri. The work is to show that the strata are locally closed substacks.

**Paper or page:** [Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles](https://arxiv.org/abs/2101.08871v3), [Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles](https://arxiv.org/abs/2101.08871v3). It says: “For every set of parabolic weights, we construct a Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles on a curve. It is based on the notion of parabolic slope, introduced by Mehta and Seshadri.”

**Sources:**

- [Andres Fernandez Herrero, Harder-Narasimhan stratification for the moduli stack of parabolic vector bundles, arXiv:2101.08871 (2021)](https://arxiv.org/abs/2101.08871v3)
- [V. B. Mehta and C. S. Seshadri, Moduli of vector bundles on curves with parabolic structures, Mathematische Annalen (1980)](https://doi.org/10.1007/BF01420526)

### Saturation recovers torsion sections

**Remember:** A section is torsion when a multiple of its class lands in T.

*True by definition.* MSC 14J27 (Elliptic surfaces, elliptic or Calabi-Yau fibrations), 14J28. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let T be the subgroup of the Néron–Severi group generated by the zero section and every fiber component of a projective complex elliptic K3 surface. Its saturation consists of all classes D such that mD belongs to T for some positive integer m.

**Problem.** The sections of finite order form a group isomorphic to the saturation of T modulo T.

**How the definition helps.** Shioda’s theorem identifies the group of sections with Néron–Severi classes modulo T. A class in that quotient has finite order exactly when a positive multiple lies in T, that is, when it lies in the saturation (our own explanation).

**Paper or page:** [Elliptic fibrations on toric K3 hypersurfaces and mirror symmetry derived from Fano polytopes](https://arxiv.org/abs/2208.01465v2). It says: “Let MW(π, O)ₜₒᵣ be the torsion part of MW(π, O). Then, MW(π, O)ₜₒᵣ ≃ T̂/T.”

**Sources:** none listed. No primary source with a working link was found.

### Trivial lattices reveal section rank

**Remember:** Remove the zero section and fiber classes to count independent sections.

*Makes the theorem clean to state or prove.* MSC 14J27 (Elliptic surfaces, elliptic or Calabi-Yau fibrations), 14J28. arXiv math.AG, math.NT. Level 4: research.

**Definition.** For a projective complex elliptic K3 surface with a zero section, the trivial lattice is the subgroup of the Néron–Severi group, divisor classes modulo algebraic equivalence, generated by the zero section and all fiber components.

**Problem.** The group of sections has rank equal to the rank of the divisor class group modulo algebraic equivalence minus the trivial lattice rank.

**How the definition helps.** Shioda’s theorem identifies the group of sections with the Néron–Severi group modulo the trivial lattice, so taking ranks gives the formula. The map restricts a divisor to the generic fiber and subtracts its degree times the zero section (our own explanation).

**Paper or page:** [Elliptic fibrations on toric K3 hypersurfaces and mirror symmetry derived from Fano polytopes](https://arxiv.org/abs/2208.01465v2). It says: “There is an isomorphism MW(π, O) ≃ NS(S)/T of groups.”

**Sources:** none listed. No primary source with a working link was found.

### Néron models survive smooth pullback

**Remember:** Smooth tests over the new base are smooth tests over the old one.

*True by definition.* MSC 14K15 (Arithmetic ground fields for abelian varieties), 14G20. arXiv math.AG, math.NT. Level 4: research.

**Definition.** Let U be schematically dense in S and let X be smooth over U. A Néron model is a smooth separated S-space N with an identification of its restriction over U with X. For every smooth S-space Y, every U-map Yᵤ → X extends uniquely to an S-map Y → N.

**Problem.** Let N be the Néron model over S of a smooth space over U, and let S′ → S be smooth. Then the pullback of N to S′ is the Néron model over S′ of the pulled-back space.

**How the definition helps.** The original extension property applies because every smooth S′-space is smooth over S (our own). Pair the unique extension to N with the structure map to S′. This gives the unique extension to the fiber product.

**Paper or page:** [Néron models of Jacobians over bases of arbitrary dimension](https://arxiv.org/abs/2103.06917v3). It says: “If X is the Néron model of Xᵤ, then X′ is the Néron model of Xᵤ′.”

**Sources:**

- [Néron models of Jacobians over bases of arbitrary dimension](https://arxiv.org/abs/2103.06917v3)

### Right-invariant derivations are determined by their values at the identity

**Remember:** Evaluate at the identity and use translations to recover the rest.

*True by definition.* MSC 14L15 (Group schemes), 17B45, 18M05. arXiv math.RT, math.AG. Level 4: research.

**Definition.** Let G be an affine group scheme over a symmetric tensor category, with coordinate ring O(G), coproduct Δ and counit η, which evaluates at the identity. A map β from X ⊗ O(G) to O(G) is right invariant if it commutes with right translation: Δ ∘ β = (β ⊗ 1) ∘ (1 ⊗ Δ).

**Problem.** A right-invariant map β is recovered from η ∘ β by the formula β = ((η ∘ β) ⊗ 1) ∘ (1 ⊗ Δ). So a right-invariant derivation is determined by its value at the identity.

**How the definition helps.** Apply η ⊗ 1 to the invariance equation, and the counit law (η ⊗ 1) ∘ Δ = 1 turns it into the formula (our own reading). The restricted Lie algebra structure on the tangent space takes separate work.

**Paper or page:** [Group schemes and their Lie algebras over a symmetric tensor category](https://arxiv.org/abs/2507.02031v1). It says: “If βₓ : X ⊗ O(G) → O(G) is right invariant then βₓ can be recovered from η ∘ βₓ via the formula”

**Sources:**

- [Dave Benson, Julia Pevtsova, Group schemes and their Lie algebras over a symmetric tensor category, arXiv:2507.02031 (2025)](https://arxiv.org/abs/2507.02031v1)

### The dot action centered at −ρ makes Bott's theorem one formula

**Remember:** Shift by ρ, reflect, shift back: that weight carries the cohomology.

*Makes the theorem clean to state or prove.* MSC 14M15 (Grassmannians, Schubert varieties, flag manifolds), 22E46, 17B56. arXiv math.RT, math.AG. Level 4: research.

**Definition.** Let G be a complex semisimple group with Borel subgroup B and Weyl group W. The dot action of W on weights is w·λ = w(λ+ρ) − ρ, where ρ is half the sum of the positive roots. It is the usual reflection action moved so that its center is −ρ.

**Problem.** For integral λ, take L(λ) on G/B associated to the character −λ of B. If λ+ρ lies on a reflecting wall, all cohomology vanishes. Otherwise only degree ℓ(w) contributes, giving the dual irreducible module of highest weight w·λ, where w uniquely makes w·λ dominant.

**How the definition helps.** With the dot action, the two cases become one test: either a dot reflection fixes λ, or one Weyl element moves λ by the dot action to a dominant weight. Without it, the statement needs a list of shifted chambers. Bott’s computation, or Demazure’s short proof, supplies the cohomology.

**Wikipedia:** [Borel–Weil–Bott theorem](https://en.wikipedia.org/wiki/Borel%E2%80%93Weil%E2%80%93Bott_theorem). It says: “For any integral weight λ and w in the Weyl group W, we set w\*λ := w(λ+ρ)−ρ, where ρ denotes the half-sum of positive roots of G.”

**Sources:**

- [R. Bott, Homogeneous vector bundles, Ann. of Math. 66 (1957) 203–248](https://doi.org/10.2307/1969996)

### A scheme structure on cactus varieties compares them with catalecticant equations

**Remember:** Take spans in families, including families over bases with nilpotents.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 14N07 (Secant varieties, tensor rank, varieties of sums of powers), 14C05. arXiv math.AG. Level 4: research.

**Definition.** For projective X, consider all finite flat families of degree-r subschemes of X, allowing arbitrary base schemes. The r-th cactus scheme is the scheme-theoretic closure of the union of their relative linear spans in the ambient projective space (our own).

**Problem.** Take a Veronese variety of high degree, the image of projective space under all monomials of a fixed degree. Outside the (r−1)-th cactus variety, its r-th cactus scheme equals the zero scheme of suitable catalecticant minors, minors of matrices built from the coefficients of a form.

**How the definition helps.** Once the cactus variety is a scheme, the comparison can be an equality of schemes, since a set cannot tell an equation from its square (our own). The relative spans over non-reduced bases give the nilpotent structure. The work is to compare these spans with the determinantal equations.

**Paper or page:** [Cactus scheme, catalecticant minors, and scheme theoretic equations](https://arxiv.org/abs/2410.21908v1). It says: “In this article, we equip the cactus variety with a scheme structure, via "relative linear spans" of families of finite schemes over a potentially non-reduced base.”

**Sources:**

- [Jarosław Buczyński, Hanieh Keneshlou, Cactus scheme, catalecticant minors, and scheme theoretic equations, arXiv:2410.21908 (2024)](https://arxiv.org/abs/2410.21908v1)

### Central differences give genus recursions

**Remember:** Shift t both ways by λ/2π; odd derivatives cancel.

*True by definition.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** For the resolved conifold, the total space of two copies of the degree minus one line bundle over the projective line, let Fᵍ(t) generate the positive-degree genus-g curve counts, with degree d weighted by exp(2πidt). The free energy puts all genera in one series, the sum of λ²ᵍ⁻²Fᵍ(t) over g ≥ 0.

**Problem.** Put D = (1/2π)d/dt. For g ≥ 1, the sum over 1 ≤ j ≤ g + 1 of D²ʲFᵍ⁺¹⁻ʲ divided by (2j)! equals zero.

**How the definition helps.** The difference equation for the resolved conifold shifts t by ±λ/(2π) in the free energy, and adding the two shifts cancels the odd derivatives (our own). Collecting the terms of order λ²ᵍ gives the stated sum, since only the second derivative involves genus g (our own).

**Paper or page:** [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2). It says: “For every g ≥ 1 the difference equation gives a recursive differential equation”

**Sources:**

- [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2)

### Convexity removes genus-zero bundle obstructions

**Remember:** When first cohomology vanishes, sections make an ordinary bundle.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)). arXiv math.AG. Level 4: research.

**Definition.** A vector bundle E on X is convex if H¹(C, f\*E) = 0 for every genus-zero stable map f from C, a map from a marked nodal curve with finitely many symmetries. Then the spaces H⁰(C, f\*E) form a vector bundle over the moduli space of maps (our own).

**Problem.** Let a regular section of a convex bundle E on a smooth complex projective variety X cut out a smooth locus Y of expected codimension. Fix the marks and ambient curve class in genus zero. The sum of pushed-forward virtual cycles from Y equals the ambient virtual cycle capped with the top Chern class of the bundle of sections.

**How the definition helps.** The given section of E induces a section of this bundle that vanishes exactly on maps into Y, so the virtual zero locus theorem gives the top Chern class formula (our own). Without convexity, the identity map of the projective line has H¹(ℙ¹, O(−2)) ≠ 0 (our own).

**Paper or page:** [Quantum Lefschetz without curves](https://arxiv.org/abs/2403.01011v1). It says: “When the complex is a single bundle we recover results of Kim-Kresch-Pantev.”

**Sources:**

- [Coates and Givental, Quantum Riemann–Roch, Lefschetz and Serre](https://doi.org/10.4007/annals.2007.165.15)

### Degree-zero division matches stable pairs

**Remember:** Divide out freely moving points before comparing curve counts.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** The reduced Donaldson–Thomas series is the full series divided by its degree-zero series, which counts only points. The denominator has constant coefficient one.

**Problem.** Let X be a toric Calabi–Yau three-orbifold with transverse type A singularities, and restrict to curve classes whose generic stabilizer representations are multiples of the regular representation. Then the reduced Donaldson–Thomas series equals the stable-pair series.

**How the definition helps.** Division removes the factor from points that move freely, which stable pairs never count, so both sides count only curves (our own). The proof compares normalized local series at torus fixed points and glues their contributions (our own).

**Paper or page:** [The orbifold DT/PT vertex correspondence](https://arxiv.org/abs/2302.02342v4). It says: “DT′ₘᵣ(𝒳) = PTₘᵣ(𝒳).”

**Sources:**

- [The orbifold DT/PT vertex correspondence](https://arxiv.org/abs/2302.02342v4)
- [Maulik, Nekrasov, Okounkov and Pandharipande, Gromov–Witten theory and Donaldson–Thomas theory, I](https://doi.org/10.1112/s0010437x06002302)

### Logarithmic types split degeneration counts

**Remember:** Keep contact orders to split a limiting count by type.

*Makes the theorem clean to state or prove.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 53D45. arXiv math.AG. Level 4: research.

**Definition.** The type of a logarithmic map records its decorated graph: domain components, target strata, curve classes and contact orders along branches. A type is rigid if, with the base length fixed to one, it has exactly one tropical realization, one compatible choice of vertex positions and nonnegative edge lengths (our own).

**Problem.** Fix the genus, marks and curve class. The virtual class of maps to the central fiber, the cycle that gives the expected counts, equals the sum over rigid types of their pushed-forward virtual classes with positive rational weights.

**How the definition helps.** Each limiting map has a type, and the rigid types index the terms of the sum (our own). The degeneration formula supplies the weights and proves the equality of cycles.

**Paper or page:** [Gromov-Witten theory, degenerations, and the tautological ring](https://arxiv.org/abs/2510.04779v1). It says: “The constant mγ is a positive rational number.”

**Sources:**

- [Gromov-Witten theory, degenerations, and the tautological ring](https://arxiv.org/abs/2510.04779v1)

### Multiple covers isolate primitive counts

**Remember:** Li₃ packs a curve with all its multiple covers.

*True by definition.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 81T30. arXiv math.AG. Level 4: research.

**Definition.** Let F(q) be the positive-degree genus-zero curve series of the resolved conifold. Its genus-zero Gopakumar–Vafa numbers n<sub>d</sub> are the coefficients in F(q) = ∑<sub>d≥1</sub> n<sub>d</sub> Li₃(qᵈ), where Li₃(z) = ∑<sub>k≥1</sub> zᵏ/k³.

**Problem.** For the resolved conifold, the genus-zero Gopakumar–Vafa number is one in degree one and zero in every higher degree.

**How the definition helps.** The genus-zero series is exactly Li₃(q), so n₁ = 1 and every other n<sub>d</sub> = 0 (our own). The coefficients are unique because Li₃(qᵈ) starts in degree d with coefficient 1 (our own). The work goes into the multiple-cover computation for maps to the exceptional curve (our own).

**Paper or page:** [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2). It says: “F̃₀(t) = Li₃(q).”

**Sources:**

- [Aspinwall and Morrison, Topological field theory and rational curves](https://doi.org/10.1007/bf02096768)
- [Intrinsic non-perturbative topological strings](https://arxiv.org/abs/2102.07776v2)

### Purity excludes isolated stable-pair points

**Remember:** Any points a stable pair records must lie on its curve.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)). arXiv math.AG. Level 4: research.

**Definition.** On a smooth projective threefold, a stable pair consists of a coherent sheaf F supported on a curve and a section s. Require that the section generate F except at finitely many points. Also require purity, meaning that F contains no nonzero subsheaf supported on finitely many points.

**Problem.** The local functions killing s form the same ideal as the local functions killing all of F. Thus the section defines the full support curve, including its scheme structure.

**How the definition helps.** If a local function kills s, its image on F is a subsheaf supported where s fails to generate F (our own). Purity makes that finite subsheaf zero, and every function killing F also kills s (our own). Without purity, appending a skyscraper sheaf at an isolated point enlarges the support while leaving the section unchanged (our own).

**Paper or page:** [Explicit formulae for rank zero DT invariants and the OSV conjecture](https://arxiv.org/abs/2203.10617v1). It says: “$F$ is a \\emph {pure} 1-dimensional sheaf, and $s \\colon \\mathcal O \_X \\rightarrow F$ has zero-dimensional cokernel.”

**Sources:**

- [Pandharipande and Thomas, Curve counting via stable pairs in the derived category](https://doi.org/10.1007/s00222-009-0203-9)

### Representable maps exclude extra stabilizers

**Remember:** The source cannot carry more symmetry than its image.

*Rules out counterexamples.* MSC 14N35 (Gromov-Witten invariants, quantum cohomology, Gopakumar-Vafa invariants, Donaldson-Thomas invariants (algebro-geometric aspects)), 14D23. arXiv math.AG. Level 4: research.

**Definition.** A map of orbifolds is representable if it maps each point’s symmetry group injectively into the symmetry group of its image. Curve counts in an orbifold use representable maps from twisted curves, curves with finite symmetry groups at marks and nodes.

**Problem.** A representable map from a twisted curve to an ordinary scheme has trivial symmetry groups at every mark and node.

**How the definition helps.** Injectivity forces each domain group to be trivial because a scheme has trivial point symmetry groups (our own). Without representability, one can put a cyclic symmetry group of any order at a mark of a three-marked sphere mapping to a point (our own).

**Paper or page:** [Intrinsic mirror symmetry and Frobenius structure theorem via Gromov-Witten theory of root stacks](https://arxiv.org/abs/2403.05376v1). It says: “We further require the top horizontal morphism to be representable.”

**Sources:**

- [Abramovich, Graber and Vistoli, Gromov-Witten theory of Deligne-Mumford stacks](https://doi.org/10.1353/ajm.0.0017)

### Extra coordinates descend exponential periods

**Remember:** Record an algebraic coefficient as an extra coordinate.

*True by definition.* MSC 14P10 (Semialgebraic sets and related spaces), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A naive exponential period over k ⊂ ℂ is an integral of exp(−f)ω over a semialgebraic chain G in complex affine space of any dimension, with all data defined over k. Precisely, G is oriented, closed and defined over k ∩ ℝ, f and ω are k-rational and regular on G with deg ω = dimℝ G, f\|G is proper, Im f is bounded and Re f is bounded below.

**Problem.** Let k ⊂ ℂ be algebraic over its real subfield. Then replacing k by its algebraic closure in ℂ does not change the set of naive exponential periods.

**How the definition helps.** Since any ambient dimension is allowed, an extra coordinate can carry a coefficient from a finite extension of k. One algebraic element generates the finitely many coefficients, and real polynomial conditions on its real and imaginary parts cut out its chosen root. This is our own summary of the descent in Lemma 6.6.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)

### Strips exclude divergent exponential integrals

**Remember:** Properness in a strip forces decay at infinity.

*Rules out counterexamples.* MSC 14P10 (Semialgebraic sets and related spaces), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A naive exponential period is an integral of exp(−f)ω over an oriented closed ℚ-semialgebraic domain G in complex affine space, with f and ω ℚ-rational and regular on G and deg ω = dimℝ G. It requires f\|G to be proper with values in a half-strip: Im f bounded and Re f bounded below.

**Problem.** Every such integral of exp(−f)ω converges absolutely. Without the phase bound, the imaginary axis with f(z)=z and ω=dz meets the other conditions but gives a divergent absolute integral.

**How the definition helps.** In a half-strip, properness forces Re f to grow as points escape to infinity, so exp(−f) decays. The convergence proof bounds the algebraic growth of ω and extends the weighted form to the boundary of a compact space. In our own counterexample, \|exp(−z)\| = 1 on the whole imaginary axis.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Permitting the integrand Q to be the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)
