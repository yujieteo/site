### Angle-lift winding numbers force complex polynomials to have roots

**Remember:** A large loop winds many times, while a constant loop winds zero times.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** Define the winding number of a loop avoiding zero as the net change of a continuous angle, measured in turns. Its value is an integer and cannot change during a deformation through loops avoiding zero. The integral definition for piecewise smooth loops divides the integral of dz/z by 2πi.

**Problem.** Every nonconstant complex polynomial has a complex root.

**How the definition helps.** The angle-lift definition lets us compare winding numbers by deforming the image loops instead of integrating. Suppose a degree n polynomial has no root, and shrink the radius of a circle centered at zero until it is a point. Its image then deforms through loops avoiding zero, so its winding number must stay fixed. For large radius, the leading term dominates the rest. Our own detail is that scaling the lower terms to zero preserves nonvanishing on that large circle, so its image winds n times. The image at radius zero is constant and winds zero times. The work goes into angle lifting, which proves invariance and gives the winding number of the leading monomial.

**Wikipedia:** [Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra), [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “Now changing R continuously will deform the loop continuously. At some R the winding number must change. But that can only happen if the curve P(R) includes the origin (0,0) for some R.”

**Sources:** none listed. No primary source with a working link was found.

### Angle-lift winding numbers make Rouché’s zero counts agree

**Remember:** The perturbation is too small for the deformation to hit zero.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the winding number of a loop avoiding zero as the net change of a continuous angle, measured in turns. The angle lift makes that integer invariant under deformations avoiding zero. The integral definition instead integrates dw/w along the loop and divides by 2πi.

**Problem.** Let f and g be holomorphic on an open set containing a simple closed piecewise smooth curve C and its interior. If \|g\| &lt; \|f\| on C, then f and f + g have the same number of zeros inside. Count each zero by its order.

**How the definition helps.** The angle-lift definition reduces equality of the winding numbers to finding a deformation that avoids zero. The straight-line family f + tg never vanishes on C for 0 ≤ t ≤ 1. The argument principle identifies each zero count with the winding number of the corresponding image of the positively oriented boundary. The real work is that principle and the agreement of winding by angles with winding by integration. The angle-lift comparison is our own explanation of the article’s geometric proof.

**Wikipedia:** [Rouché's theorem](https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem). It says: “then the person and the dog go around the tree the same number of times.”

**Paper or page:** [Rouché's Theorem](https://proofwiki.org/wiki/Rouché's_Theorem). It says: “Let \|g(z)\| &lt; \|f(z)\| on γ. Then f and f + g have the same number of zeroes in D counted up to multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Defining winding number by lifting the angle makes it homotopy invariant

**Remember:** A continuous integer cannot jump, so a homotopy cannot change it.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** Write a loop around a in polar form, with a continuous angle s(t) measured in turns. Such a lift exists by the lifting property of the covering map from the line to the circle. Define the winding number as s(1) − s(0). The integral definition instead takes (1/2πi) ∮ dz/(z − a) along a piecewise smooth loop.

**Problem.** If two loops are homotopic through loops that avoid a, they have the same winding number about a.

**How the definition helps.** With the lifting definition, the winding number is a continuous function of the loop with integer values. In our own proof, view the homotopy as a map from a square and lift its angle on the whole square. Then s(1) − s(0) varies continuously with the homotopy parameter, and so it is constant. The work goes into the homotopy lifting property of covering spaces. With the integral definition, the loops must be piecewise smooth, and one needs Cauchy's theorem.

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “wind(γ,a) = s(1) − s(0)”

**Sources:** none listed. No primary source with a working link was found.

### Lifting the angle makes winding number an integer

**Remember:** A closed path ends a whole number of turns from its starting angle.

*True by definition.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** Let γ be a closed path in the plane that avoids a point a. Choose a continuous real angle s along γ about a, measured in full turns. The winding number is s(1) − s(0). For a piecewise smooth path, another definition is the integral (1/2πi)∮ dz/(z − a).

**Problem.** Show that the winding number of a closed path around a point is an integer.

**How the definition helps.** The angle lift makes integrality immediate because the endpoint and start represent the same direction. Their real angles therefore differ by an integer number of turns. In our own comparison, the integral definition has the same value by differentiating the polar form along a piecewise smooth path. The work is proving that a continuous real angle exists once the starting angle is chosen.

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “all the fibers of p are of the form ρ₀ × (s₀ + ℤ) (so the above expression does not depend on the choice of the starting point). It is an integer because the path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative chains as a quotient makes the exact sequence automatic

**Remember:** A short exact sequence of chains gives a long exact sequence.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a space X and a subspace A, define the relative chain complex as the quotient C•(X)/C•(A) of singular chain complexes. Relative homology Hₙ(X, A) is the homology of this quotient. A different definition takes the reduced homology of the quotient space X/A. The two agree only for good pairs, where A is closed and is a deformation retract of a neighborhood.

**Problem.** Every pair (X, A) has a natural long exact sequence … → Hₙ(A) → Hₙ(X) → Hₙ(X, A) → Hₙ₋₁(A) → …

**How the definition helps.** The quotient definition gives a short exact sequence 0 → C•(A) → C•(X) → C•(X)/C•(A) → 0 of chain complexes. The nLab defines relative chains as this quotient, the cokernel of the inclusion. In our own account, the long exact sequence then follows from a general algebraic lemma, sometimes called the zigzag lemma. That lemma builds a connecting map for any short exact sequence of chain complexes. With the quotient-space definition, exactness would need a good pair and excision. So the work moves into the zigzag lemma, which is pure algebra.

**nLab:** [relative homology](https://ncatlab.org/nlab/show/relative+homology). It says: “The cokernel of this inclusion, hence the quotient C•(X)/C•(A) of C•(X) by the image of C•(A) under the inclusion”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.1](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Groupoids reveal every path component

**Remember:** Keep paths between every pair and read off the components.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 01A60. arXiv math.AT, math.HO. Level 2: later undergraduate.

**Definition.** The fundamental group records loops at one chosen point, identifying loops that deform into each other while fixing that point. The fundamental groupoid uses all points and records paths between them, up to deformations that fix both endpoints.

**Problem.** The components of the fundamental groupoid are exactly the path components of the space.

**How the definition helps.** Keeping paths between all points makes a groupoid component exactly a set of points connected by paths. In our own comparison, a group at one point cannot see paths in the other components. To define composition, one must show that joining paths gives an associative operation on deformation classes. Brown used several base points in his 1967 version of van Kampen’s theorem, which computes paths in a union from its pieces.

**nLab:** [fundamental groupoid](https://ncatlab.org/nlab/show/fundamental+groupoid). It says: “The set of connected components of Π₁(X) is precisely the set Π₀(X) of path-components of X.”

**Sources:**

- [Ronald Brown, Groupoids and Van Kampen’s Theorem (1967)](https://doi.org/10.1112/plms/s3-17.3.385)

### Van Kampen's theorem works for a set of base points

**Remember:** Take a base point in each piece, so that no piece is left out.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 18B40, 57M05. arXiv math.AT, math.CT. Level 2: later undergraduate.

**Definition.** Let X be a space and X₀ a set of points of X. The fundamental groupoid Π₁(X, X₀) is a groupoid (a category in which every morphism is invertible) with the points of X₀ as objects. Its morphisms are homotopy classes of paths between points of X₀. It is the full subgroupoid of the fundamental groupoid Π₁(X) on the objects in X₀.

**Problem.** Compute the fundamental group of a union U ∪ V when U ∩ V is not path-connected. An example is the circle as a union of two arcs.

**How the definition helps.** With several base points, the theorem no longer needs U ∩ V to be path-connected. The classical van Kampen theorem for groups needs this, so it does not apply to the circle covered by two arcs. Choose a set of base points that meets every path component of U, V and U ∩ V. Then Π₁ takes the cover to a strict pushout of groupoids. For the circle with two base points, this pushout gives π₁(S¹) ≅ ℤ directly. The nLab notes that the groupoid theorem does not reduce to a theorem about groups.

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “Note that the version of the theorem for fundamental groups does not apply, since U ∩ V is not path-connected.”

**Sources:**

- [Ronald Brown, Groupoids and van Kampen's theorem, Proc. London Math. Soc. (3) 17 (1967) 385–401](https://doi.org/10.1112/plms/s3-17.3.385)
- [Ronald Brown, A. Razak Salleh, A van Kampen theorem for unions of non-connected spaces, Archiv der Mathematik 42 (1984) 85–88](https://doi.org/10.1007/BF01198133)

### Semi-locally simply connected spaces have a full classification of covering spaces

**Remember:** Small loops need not shrink inside U, only somewhere in X.

*Rules out counterexamples.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A space X is semi-locally simply connected if every point has a neighbourhood U with this property: every loop in U can be contracted in X. The contraction may leave U. In other words, the map π₁(U, x) → π₁(X, x) is trivial.

**Problem.** Prove the fundamental theorem of covering spaces. Let X be locally path-connected and semi-locally simply connected. Then covering spaces of X are the same as actions of the fundamental groupoid of X on sets.

**How the definition helps.** In our own reading of the nLab proof, the condition is used at one point only, to give the rebuilt covering space the right topology. With these hypotheses, two functors are inverse to each other. One takes a covering to its monodromy action, which says how paths move the points of the fibers. The other rebuilds a covering from an action. The rest of the nLab proof is mostly unwinding of definitions. The Hawaiian earring (circles of radius 1/n that all touch at one point) fails the condition, because every neighbourhood of its wedge point holds loops that are not contractible. The condition is weaker than local simple connectivity, so the theorem covers more spaces; for example, the cone on the Hawaiian earring satisfies it.

**nLab:** [semi-locally simply-connected topological space](https://ncatlab.org/nlab/show/semi-locally+simply-connected+topological+space), [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces), [Hawaiian earring space](https://ncatlab.org/nlab/show/Hawaiian+earring+space). It says: “Semi-local simple connectedness is the crucial condition needed to have a good theory of covering spaces”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics (2008), Thm. 3.3.2](https://doi.org/10.4171/048)
- [Jesper M. Møller, The fundamental group and covering spaces (2011), arXiv:1106.5650](https://arxiv.org/abs/1106.5650)

### Defining the Lefschetz number by the diagonal class makes fixed points necessary

**Remember:** A graph can meet the diagonal only at a fixed point.

*True by definition. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** On a closed oriented manifold M, let U be the diagonal class, the cohomology class of M × M dual to the diagonal. Define the Lefschetz number of f: M → M by pulling U back along the graph map x ↦ (x, f(x)) and evaluating on \[M\]. The usual definition is the alternating sum of the traces of f on rational homology.

**Problem.** If a continuous map of a closed oriented manifold to itself has nonzero Lefschetz number, then it has a fixed point.

**How the definition helps.** With the diagonal-class definition, the theorem is a statement about where U lives. In our own proof, U comes from cohomology relative to the complement of the diagonal, so it restricts to zero there. If f has no fixed point, the graph map lands in that complement, and the pullback of U is zero. The work goes into the Lefschetz trace formula, which shows that this number equals the alternating sum of traces. That formula uses Poincaré duality and the Künneth formula, which computes the cohomology of M × M from that of M, with careful sign conventions.

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “as the alternating sum of traces of maps induced on homologies by f”

**Sources:** none listed. No primary source with a working link was found.

### Rational traces define the Lefschetz number and give Brouwer's theorem at once

**Remember:** A nonzero alternating trace forces a fixed point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** Let f map a compact triangulable space X to itself. The Lefschetz number Λ(f) is the alternating sum over n of the traces of f acting on Hₙ(X; ℚ). Rational coefficients make each homology group a vector space, so traces exist. Compactness makes the sum finite.

**Problem.** If Λ(f) is not zero, then f has a fixed point. For the disk all higher homology vanishes, so Λ(f) = 1 for every map, which gives the Brouwer fixed point theorem.

**How the definition helps.** The Lefschetz number depends only on homology, so it is a homotopy invariant and is easy to compute. The proof first treats simplicial maps, where the trace on chains counts simplices sent to themselves. Then the simplicial approximation theorem extends it to continuous maps. For a map homotopic to the identity, Λ(f) is the Euler characteristic. So if the Euler characteristic is not zero, such a map has a fixed point. The theorem extends to compact absolute neighborhood retracts, such as compact manifolds. What stays hard is the converse, since Λ(f) = 0 does not mean f has no fixed point.

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “since for compact and triangulable space from some point the homologies are trivial and traces are zeros, this sum is finite and well-defined.”

**Sources:**

- [Solomon Lefschetz, Intersections and transformations of complexes and manifolds, Transactions of the American Mathematical Society 28 (1926) 1–49](https://doi.org/10.1090/S0002-9947-1926-1501331-3)

### Defining degree by relative homology makes it equal the boundary degree

**Remember:** The connecting map sends fundamental classes to fundamental classes of boundaries.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let f map M to N and ∂M into ∂N, for compact connected oriented n-manifolds with boundary. Relative homology Hₙ(M, ∂M), which treats chains in the boundary as zero, is ℤ, generated by the fundamental class \[M\]. Define the degree d of f by f∗\[M\] = d\[N\]. The smooth definition counts the inverse images of an interior regular value with signs.

**Problem.** Suppose that ∂M and ∂N are nonempty and connected. Then f and its restriction ∂M → ∂N have the same degree.

**How the definition helps.** With relative homology, the theorem follows from naturality of the connecting map ∂ in the exact sequence of the pair. In our own proof, ∂ sends \[M\] to the fundamental class of ∂M, and \[N\] to that of ∂N. Naturality then gives that the restriction of f sends \[∂M\] to d\[∂N\]. The work goes into the fact that ∂ takes fundamental classes to fundamental classes of the boundary. With the signed count, one must relate regular values inside N to regular values on ∂N, which takes a separate argument.

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “The same definition works for compact manifolds with boundary but then f should send the boundary of X to the boundary of Y.”

**Sources:** none listed. No primary source with a working link was found.

### Defining degree by top homology makes degrees of composites multiply

**Remember:** Induced maps compose, so the integers they multiply by also multiply.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let X and Y be connected closed oriented manifolds of the same dimension n. Their top homology groups are copies of ℤ, generated by the fundamental classes \[X\] and \[Y\]. The degree of f: X → Y is the integer d with f∗\[X\] = d\[Y\], where f∗ is the induced map on homology. The smooth definition instead counts, with orientation signs, the points over a regular value, a point whose preimages all have invertible derivative.

**Problem.** For maps f: X → Y and g: Y → Z of such manifolds, deg(g ∘ f) = deg(g) · deg(f).

**How the definition helps.** With the homology definition, the theorem is functoriality of homology, (g ∘ f)∗ = g∗ ∘ f∗. In our own proof, this gives (g ∘ f)∗\[X\] = deg(g) · deg(f) · \[Z\]. With the signed count, one must choose a common regular value of g and g ∘ f. Then the chain rule matches the signs. The work goes into the theorem that the two definitions agree. The nLab derives that agreement from excision, a basic property of homology.

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Defining degree by top homology makes it a homotopy invariant

**Remember:** Homotopic maps induce the same map on homology, so their degrees agree.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let X and Y be connected closed oriented manifolds of the same dimension n. Their top homology groups are copies of ℤ, generated by the fundamental classes \[X\] and \[Y\]. The degree of f: X → Y is the integer d with f∗\[X\] = d\[Y\], where f∗ is the induced map on homology. The smooth definition instead counts, with orientation signs, the points over a regular value, a point whose preimages all have invertible derivative.

**Problem.** Homotopic maps between connected closed oriented manifolds of the same dimension have the same degree.

**How the definition helps.** With the homology definition, the theorem is homotopy invariance of homology in the top degree. This one-line proof is our own. With the signed count over a regular value, Milnor needs a separate argument. He shows that the inverse image of a regular value under a homotopy is a compact curve whose ends cancel in pairs. The work goes into the theorem that the two definitions agree, which the nLab derives from excision.

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [L. E. J. Brouwer, Über Abbildung von Mannigfaltigkeiten (1911), pp. 97–115](https://doi.org/10.1007/BF01456931)
- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Orienting closed manifolds makes degree an integer and classifies maps to spheres

**Remember:** Fix a generator of top homology, and every map gets an integer.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 55Q05. arXiv math.AT. Level 3: graduate.

**Definition.** For a closed, connected, oriented m-manifold X, an orientation is a chosen generator \[X\] of the top homology group, which is ℤ. The degree of a map f from X to Y is the integer d such that the induced map sends \[X\] to d times \[Y\].

**Problem.** Let M be a closed, connected, oriented n-manifold. Hopf's theorem says that two maps from M to the n-sphere are homotopic if and only if they have the same degree. This theorem comes from Hopf's paper, not from the page.

**How the definition helps.** Choosing a generator turns the induced map on top homology into multiplication by a well-defined integer. Without an orientation the integer is only defined up to sign, and for a nonorientable manifold the top integral homology is zero. Then only the degree mod 2 exists. The degree is also a signed count of preimages at a regular value, which makes it easy to compute. What stays hard is Hopf's converse, that equal degree gives a homotopy.

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “Poincaré duality implies that the manifold's top homology group is isomorphic to Z. Choosing an orientation means choosing a generator of the top homology group.”

**Sources:**

- [Heinz Hopf, Abbildungsklassen n-dimensionaler Mannigfaltigkeiten, Mathematische Annalen 96 (1927) 209–224](https://doi.org/10.1007/BF01209163)

### Signed preimage counts make nonzero degree guarantee a solution

**Remember:** No preimages means an empty sum, so the degree is zero.

*True by definition.* MSC 55M25 (Degree, winding number), 47H11. arXiv math.AT, math.FA. Level 3: graduate.

**Definition.** Let Ω be a bounded open set in ℝⁿ and f a smooth map on a neighborhood of its closure. Choose p outside the image of the boundary. If p is a regular value, meaning the derivative is invertible at every preimage, the degree sums the signs of those determinants. Otherwise use the degree at a sufficiently close regular value.

**Problem.** If deg(f, Ω, p) ≠ 0, then the equation f(x) = p has a solution in Ω.

**How the definition helps.** The signed count gives the existence result because it is zero if the equation has no solutions. In that case p is a regular value, since there are no preimages at which the derivative could fail. For a smooth boundary, an alternative definition computes degree from the map pointing from p to the boundary values of f. In our own comparison, that definition needs a separate extension argument to make the degree vanish. The work shifts to proving that the nearby regular value gives a well-defined degree and that the boundary definition agrees.

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “If deg(f, Ω̄, p) ≠ 0, then there exists x ∈ Ω such that f(x) = p.”

**Sources:** none listed. No primary source with a working link was found.

### Čech cohomology makes Alexander duality hold for every compact subset

**Remember:** Measure a wild set by its open covers, and duality returns.

*Rules out counterexamples.* MSC 55N05 (?ech types), 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Čech cohomology is computed from the nerves of open covers, and then passes to a limit over finer covers. It agrees with singular cohomology on nice spaces such as CW complexes, but differs on wild ones.

**Problem.** Let X be a compact subset of the n-sphere. Alexander duality says the complement's reduced homology in degree q equals the reduced cohomology of X in degree n − q − 1. With Čech cohomology this holds for all compact X, with no local condition.

**How the definition helps.** Čech cohomology sees X through its open neighborhoods, which are the sets the complement actually touches, so duality needs no regularity. Our own example is the Warsaw circle, a topologist's sine curve closed up by an arc. In the 2-sphere it separates the sphere into two pieces. So the complement has two path components and its reduced H₀ is ℤ. The singular H¹ of the Warsaw circle is zero, so singular duality fails. Its Čech H¹ is ℤ, which matches. What stays hard is computing Čech groups for complicated sets.

**Wikipedia:** [Alexander duality](https://en.wikipedia.org/wiki/Alexander_duality). It says: “Note that we can drop local contractibility as part of the hypothesis if we use reduced Čech cohomology, which is designed to deal with local pathologies.”

**Sources:**

- [J. W. Alexander, A proof and extension of the Jordan–Brouwer separation theorem, Transactions of the American Mathematical Society 23 (1922) 333–349](https://doi.org/10.1090/S0002-9947-1922-1501206-6)

### Augmented chains give the empty space reduced homology in degree −1

**Remember:** With no points, nothing reaches the extra copy of ℤ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 3: graduate.

**Definition.** The singular chain complex of a space is built from maps of simplices into the space. The augmented complex adds a copy of ℤ in degree −1. The map from degree 0 sends each point to 1. Reduced homology is the homology of this augmented complex.

**Problem.** The empty space has reduced homology ℤ in degree −1 and zero in all other degrees. Every nonempty space has zero reduced homology in degree −1.

**How the definition helps.** The augmented definition makes reduced homology in degree −1 the cokernel of one map, so the answer can be read off. For the empty space, degree 0 is zero, so the cokernel is ℤ. For a nonempty space, the map is onto, so the cokernel is zero. Another common definition uses homology relative to a base point, which the empty space does not have. Take the suspension of a space to be its join with two points, so the empty space has two points as suspension. The suspension isomorphism, which raises reduced homology by one degree, then also holds for the empty space. These consequences are our own, and the page gives only the definition.

**nLab:** [reduced homology](https://ncatlab.org/nlab/show/reduced+homology). It says: “is the chain homology of the augmented chain complex”

**Sources:** none listed. No primary source with a working link was found.

### Cellular chains show that a CW complex without n-cells has zero Hₙ

**Remember:** No cells in a degree means no chains in that degree.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** Cellular homology uses a chain complex with one free generator for each n-cell in degree n. Singular homology uses one generator for every continuous map from a standard simplex, so its chain groups are huge in every degree.

**Problem.** If a CW complex X has no cells of dimension n, with n ≥ 1, then the singular homology group Hₙ(X) is zero.

**How the definition helps.** The cellular chain group in degree n is zero, so its homology in degree n is zero. Wikipedia states that the cellular chain group in degree n is free with one generator for each n-cell. The work moves into the theorem that cellular homology agrees with singular homology. In our own account, that proof uses the exact sequences of successive skeleta and the fact that Hₖ(Xⁿ, Xⁿ⁻¹) is zero for k ≠ n.

**Wikipedia:** [Cellular homology](https://en.wikipedia.org/wiki/Cellular_homology). It says: “is free abelian, with generators that can be identified with the n-cells of X”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.2, Cellular Homology](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Compact supports make Poincaré duality hold on noncompact manifolds

**Remember:** On open manifolds, pair compact support with ordinary theory.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory), 55M05, 57N65. arXiv math.AT. Level 3: graduate.

**Definition.** Cohomology with compact support uses only cochains that vanish outside a compact set. Borel–Moore homology allows locally finite infinite chains. Each is the right partner for ordinary homology or cohomology on an open manifold.

**Problem.** For an oriented n-manifold M without boundary, compact or not, Hᵏ with compact support is isomorphic to Hₙ₋ₖ(M). For example (our own), ℝⁿ has compactly supported cohomology ℤ in degree n, matching H₀(ℝⁿ) = ℤ.

**How the definition helps.** Compact support treats the ends of the manifold the way homology does, so the two sides balance. Our own example: ordinary duality fails on ℝⁿ, since Hⁿ(ℝⁿ) is zero while H₀(ℝⁿ) is ℤ. With compact support Hⁿ becomes ℤ, which matches. Our own remark: the proof glues local duality on small open sets with Mayer–Vietoris. This works because compact supports behave well under open inclusions. What stays hard is the passage to the limit over compact sets in that proof.

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “In the case where an oriented manifold is not compact, one has to replace homology by Borel–Moore homology”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining cellular boundaries by exact sequences makes them square to zero

**Remember:** Two consecutive maps of an exact sequence compose to zero.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW complex X, the n-skeleton Xⁿ is the union of all cells of dimension at most n. Set Cₙ = Hₙ(Xⁿ, Xⁿ⁻¹). Define the boundary dₙ: Cₙ → Cₙ₋₁ as the connecting map to Hₙ₋₁(Xⁿ⁻¹), followed by the map to Hₙ₋₁(Xⁿ⁻¹, Xⁿ⁻²). An explicit definition gives dₙ as a matrix of degrees of attaching maps.

**Problem.** In the cellular chain complex of a CW complex, dₙ ∘ dₙ₊₁ = 0.

**How the definition helps.** With this definition, dₙ ∘ dₙ₊₁ contains two consecutive maps of one exact sequence, so it is zero. In our own account, these are the maps Hₙ(Xⁿ) → Hₙ(Xⁿ, Xⁿ⁻¹) → Hₙ₋₁(Xⁿ⁻¹), from the exact sequence of the pair (Xⁿ, Xⁿ⁻¹). The nLab gives a related one-line proof: on singular chains the composite acts as the singular boundary applied twice, which is zero. With degree matrices, the identity d² = 0 is not clear without a comparison. The work moves to the cellular boundary formula, which shows that the two definitions agree.

**nLab:** [cellular homology](https://ncatlab.org/nlab/show/cellular+homology). It says: “On representative singular chains the morphism iₙ acts as the identity”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.2, Cellular Homology](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Defining cellular chains by relative homology makes cellular maps act functorially

**Remember:** Maps that preserve skeleta act on the groups between skeleta.

*True by definition. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** Define cellular chains by Cₙ(X) = Hₙ(Xⁿ, Xⁿ⁻¹), with the boundary built from connecting maps. Here the n-skeleton Xⁿ is the union of the cells of dimension at most n. A coordinate definition uses the cells as a basis and matrices of degrees of attaching maps.

**Problem.** A cellular map, one that sends each skeleton into the matching skeleton, induces a chain map of cellular chain complexes. This rule respects composition and identities.

**How the definition helps.** With the relative-homology definition, a cellular map gives maps of pairs (Xⁿ, Xⁿ⁻¹) → (Yⁿ, Yⁿ⁻¹), and relative homology is already a functor. Wikipedia states that cellular homology is a functor on CW complexes with cellular maps and gives this map of pairs. In our own account, the induced maps commute with the boundary because connecting maps are natural. With the coordinate definition, the induced map is a matrix of degrees, and the chain-map property needs a separate check. The work moves to matching the relative groups and the induced maps with these coordinates.

**Wikipedia:** [Cellular homology](https://en.wikipedia.org/wiki/Cellular_homology). It says: “Cellular homology is a functor from the category of CW complexes with cellular maps”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Euler characteristic by Betti numbers makes it invariant

**Remember:** Count holes of each dimension, not faces, and the cutting cannot change the answer.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory), 57Q05. arXiv math.AT. Level 3: graduate.

**Definition.** The Betti numbers of a space are the ranks of its homology groups. The Euler characteristic χ of a space is their alternating sum b₀ − b₁ + b₂ − …. For a finite cell complex, this equals the alternating count of cells k₀ − k₁ + k₂ − ….

**Problem.** Every convex polyhedron has V − E + F = 2, whatever its shape and number of faces.

**How the definition helps.** With the homological definition, χ is a homotopy invariant, because homology is. The surface of a convex polyhedron is homeomorphic to the sphere. So its χ equals χ(S²) = 2, for every such polyhedron at once. Euler's formula then becomes one value of an invariant. The same definition gives χ = 0 for toroidal polyhedra and χ = 1 for projective polyhedra. The hard part moves into homology theory. We must prove that homology is invariant and that the cell count gives the same number as the Betti numbers.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “any convex polyhedron is homeomorphic to the three-dimensional ball, so its surface is homeomorphic (hence homotopy equivalent) to the two-dimensional sphere, which has Euler characteristic 2. This explains why the surface of a convex polyhedron has Euler characteristic 2.”

**Sources:** none listed. No primary source with a working link was found.

### Good pairs make the homology of a quotient equal to relative homology

**Remember:** Collapse a nicely placed subspace, and relative homology becomes ordinary homology.

*Rules out counterexamples. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** A pair (X, A) is a good pair when A is a nonempty closed subspace that is a deformation retract of some neighborhood in X. A deformation retract is a subspace onto which the neighborhood can be continuously shrunk.

**Problem.** For a good pair, the reduced homology of the quotient X/A equals the relative homology Hₙ(X, A). With the disk and its boundary sphere, this gives the homology of all spheres by induction.

**How the definition helps.** The collar neighborhood lets excision move the problem away from A, so the quotient and the pair see the same homology. Our own example of the bad case: take X = \[0,1\] and A = {0} ∪ {1/n}. The quotient X/A is the Hawaiian earring, a shrinking sequence of circles that touch at one point. Its first homology is much larger than H₁(X, A), which is a countable direct sum of copies of ℤ. The condition fails because no neighborhood of A deformation retracts onto A. CW pairs are always good pairs, which covers most uses. Quotients by badly embedded sets stay hard to compute.

**Wikipedia:** [Relative homology](https://en.wikipedia.org/wiki/Relative_homology). It says: “In the case that A is a subspace of X fulfilling the mild regularity condition that there exists a neighborhood of A that has A as a deformation retract, then the group H̃ₙ(X/A) is isomorphic to Hₙ(X,A).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Homology groups, not Betti numbers, give invariants of maps

**Remember:** Numbers count holes; groups also say where the holes go under a map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** The homology of a space X is a sequence of groups Hₙ(X). The Betti numbers are only the numbers bₙ(X) = dim Hₙ(X;ℚ), the dimensions of the rational homology. A continuous map f: X → Y gives homomorphisms Hₙ(f): Hₙ(X) → Hₙ(Y).

**Problem.** Prove statements about maps, not only about spaces, in algebraic topology. Our own example is the Brouwer fixed-point theorem. A retraction Dⁿ → Sⁿ⁻¹ (a map that is the identity on the sphere) would make the identity of Hₙ₋₁(Sⁿ⁻¹) ≅ ℤ factor through Hₙ₋₁(Dⁿ) = 0, which is impossible.

**How the definition helps.** Groups keep the maps, and numbers forget them. A Betti number is the dimension of a vector space, and taking the dimension forgets maps. Noether's emphasis on homology groups keeps the maps, so one can state and use functoriality: maps of spaces give maps of groups. Betti numbers alone cannot express the Brouwer argument. Baez presents this as a case of categorification (replacing numbers by richer structures that have maps between them). His text, quoted on the nLab, says that the history is more complicated than this parable.

**nLab:** [decategorification](https://ncatlab.org/nlab/show/decategorification). It says: “Noether noted that if we work with homology groups rather than Betti numbers, we can solve more problems, because we obtain invariants not only of spaces, but also of maps.”

**Sources:**

- [J. Baez, This Week's Finds in Mathematical Physics (Week 121), 1998](https://math.ucr.edu/home/baez/week121.html)

### Reduced homology gives the point no homology, so wedge sums split

**Remember:** Reduced homology removes the one copy of ℤ in degree 0 that a point gives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 3: graduate.

**Definition.** The reduced singular homology H̃•(X) is the homology of the augmented chain complex … → C₁(X) → C₀(X) → ℤ → 0. The map C₀(X) → ℤ adds up the coefficients of a 0-chain.

**Problem.** State cleanly that contractible spaces have no homology. Also state cleanly that the homology of a wedge sum is the direct sum of the homologies of its pieces.

**How the definition helps.** Reduced homology removes exactly the ℤ in degree 0 that forces exceptions in ordinary homology. Ordinary homology of a point is ℤ in degree 0, so statements about points, spheres and wedges need an exception in degree 0. For non-empty X, H₀(X) ≅ H̃₀(X) ⊕ ℤ, and Hₙ = H̃ₙ for n ≥ 1. So H̃ of a contractible space is zero in all degrees. Also, the map ⊕ᵢ H̃ₙ(Xᵢ) → H̃ₙ(∨ᵢ Xᵢ) is an isomorphism for all n, with no special case. This needs good base points: Hatcher assumes that each base point has a neighbourhood that deformation retracts onto it, and the nLab leaves this condition out. Reduced homology also equals relative homology with respect to a base point.

**nLab:** [reduced homology](https://ncatlab.org/nlab/show/reduced+homology). It says: “For some applications, though, it is convenient to divide out that contribution such as to have the homology of the point be entirely trivial.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Corollary 2.25](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining reduced K-theory as a kernel makes it a direct summand

**Remember:** Restriction to a point has a section given by trivial bundles.

*True by definition.* MSC 55N15 (Topological \\(K\\)-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based compact Hausdorff space X, define K̃(X) as the kernel of restriction K(X) → K(point) ≅ ℤ to the base point. Another definition uses bundles up to adding trivial bundles. There E equals F when E ⊕ ℂᵐ ≅ F ⊕ ℂⁿ for some m and n.

**Problem.** For a based compact Hausdorff space X, K(X) ≅ K̃(X) ⊕ ℤ.

**How the definition helps.** The constant map from X to the point gives a right inverse to restriction, so the kernel is a direct summand. The nLab proves this splitting from the kernel definition. In the stable-bundle definition, one must first show that the classes form a group (our own). That uses the theorem that every bundle on a compact Hausdorff space is a summand of a trivial bundle.

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “The kernel of this map is called the reduced K-theory group”

**Sources:** none listed. No primary source with a working link was found.

### Karoubi's Clifford-module K-theory makes real Bott periodicity follow from Clifford periodicity

**Remember:** Eight more real Clifford generators add only a matrix factor.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 15A66. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** The Clifford algebra Cℓₙ is generated by n anticommuting elements whose squares are fixed signs. Karoubi defines real K-groups of a compact Hausdorff space from bundles of graded Cℓₙ-modules. Roughly, a module gives the zero class when it extends to a Cℓₙ₊₁-module. The usual definition builds the degrees by suspending the space.

**Problem.** Real topological K-theory of compact Hausdorff spaces repeats every eight degrees.

**How the definition helps.** Cℓₙ₊₈ is Cℓₙ tensored with the 16 × 16 real matrices, so its modules match those of Cℓₙ. This matching of module categories is Morita equivalence, so Karoubi's groups repeat every eight degrees (our own). The nLab states that the Clifford sequence is periodic up to Morita equivalence. The work moves to Karoubi's theorem that his groups agree with the suspension groups (our own). That comparison is as deep as Bott periodicity itself (our own).

**nLab:** [Karoubi K-theory](https://ncatlab.org/nlab/show/Karoubi+K-theory). It says: “The sequence is periodic up to Morita equivalence”

**Sources:**

- [Max Karoubi, K-Theory: An Introduction (Springer, 1978).](https://doi.org/10.1007/978-3-540-79890-3)

### Over a compact Hausdorff base, K-theory classes are stable classes of bundles

**Remember:** Over a compact Hausdorff space, every bundle has a partner that makes it trivial.

*Rules out counterexamples. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 55R50. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** Topological K-theory K(X) is the Grothendieck group of vector bundles on X. You take isomorphism classes of vector bundles, add them by direct sum, and formally add negatives. Here the base space X is compact Hausdorff.

**Problem.** Every element of K(X) should be a formal difference \[E\] − \[trivial bundle\]. The classes of actual bundles in K(X) should be exactly the stable equivalence classes of bundles. (Two bundles are stably equivalent when they become isomorphic after you add the same trivial bundle to each.)

**How the definition helps.** Over a compact Hausdorff base, every bundle has a complement, and this lets you move the whole negative part into a trivial bundle. The lemma says: every vector bundle E has a bundle Ẽ such that E ⊕ Ẽ is trivial. With the lemma, you rewrite a difference \[E₊\] − \[E₋\] as \[E₊ ⊕ Ẽ₋\] − \[trivial\], and the classes of actual bundles in K(X) are then exactly the stable equivalence classes. The nLab calls the lemma crucial. It uses the lemma again to make reduced K-theory a direct summand of K(X). The nLab gives no counterexample for a non-compact base. Our own example: on the discrete space ℕ, take the bundle with fibre ℝⁿ over the point n; its rank has no bound, so it is not a summand of any trivial bundle of finite rank.

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “For the most part below we will invoke the assumption that the base topological space X is a compact Hausdorff space. Because then the following statement holds, which is crucial in some places:”

**Sources:**

- [Allen Hatcher, Vector Bundles and K-Theory (online book), Chapter 1](https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html)

### Representing K-theory by maps to ℤ × BU makes it homotopy invariant

**Remember:** A homotopy of input maps gives a homotopy after composition.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 55R50. arXiv math.AT. Level 3: graduate.

**Definition.** For a compact Hausdorff space X, let K⁰(X) be the set of homotopy classes of maps from X to ℤ × BU. Here BU classifies complex vector bundles up to adding trivial bundles. The bundle definition uses formal differences \[E\] − \[F\] of complex vector bundles on X.

**Problem.** Homotopic maps f, g : Y → X between compact Hausdorff spaces induce the same pullback map K⁰(X) → K⁰(Y).

**How the definition helps.** In this model pullback is composition, so homotopic maps give homotopic composites (our own). A homotopy f ≃ g gives c ∘ f ≃ c ∘ g for every map c to ℤ × BU. In the bundle definition, one must prove that homotopic maps pull back isomorphic bundles over a compact base (our own). The nLab states that the bundle groups are represented by maps into BU × ℤ. That theorem holds the work, and its proof itself uses homotopy invariance of pulled-back bundles (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “by homotopy classes of continuous functions into the classifying spaces BO × ℤ and BU × ℤ, respectively”

**Sources:** none listed. No primary source with a working link was found.

### Representing reduced K-theory by based maps makes it split over wedges

**Remember:** A based map out of a wedge is one map from each piece.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based finite CW complex X, let K̃(X) be the based homotopy classes of maps from X to ℤ × BU. This space classifies stable complex vector bundles. The bundle definition takes formal differences of bundles whose rank at the base point is zero.

**Problem.** The wedge X ∨ Y joins two based spaces at their base points. Its reduced K-group is the direct sum K̃(X) ⊕ K̃(Y).

**How the definition helps.** A based map or based homotopy on X ∨ Y is exactly a pair of them on X and Y (our own). The group operation is pointwise in ℤ × BU, so this bijection is an isomorphism (our own). The nLab proves the same isomorphism in the bundle model, using retracts and the exact sequence of a pair. The mapping model avoids that, but its agreement with the bundle model is a separate theorem (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “Then there is an isomorphism K̃(X ∨ Y) ≃ K̃(X) ⊕ K̃(Y)”

**Sources:** none listed. No primary source with a working link was found.

### Generalized cohomology drops only the dimension axiom

**Remember:** Keep homotopy invariance, exactness and excision; let the point have any coefficients.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** A generalized (Eilenberg–Steenrod) cohomology theory is a functor that satisfies all the Eilenberg–Steenrod axioms except the dimension axiom. The dimension axiom says that the cohomology of a point is zero outside degree 0. So in a generalized theory, the value on a point may be non-zero in many degrees.

**Problem.** State that K-theory, cobordism and other spectra give cohomology theories, and that every such theory comes from a spectrum. (A spectrum is a sequence of pointed spaces Eₙ with maps from the suspension of each Eₙ to the next one.)

**How the definition helps.** Dropping only the dimension axiom lets in many new examples, and each of them still comes from a spectrum. With the dimension axiom, an additive theory on CW complexes is ordinary cohomology with the coefficient group of the point, so no new examples appear. Without it, G. W. Whitehead observed that every spectrum gives an example, such as K-theory and cobordism. Brown representability then gives the converse: a spectrum represents every such theory. The match is not perfect. Because of phantom maps, maps of cohomology theories need not come from unique maps of spectra. (A phantom map is a non-zero map of spectra that is zero on every finite CW complex.)

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “This entry here is concerned with the generalization obtained from the Eilenberg-Steenrod axioms by just discarding the dimension axiom.”

**Sources:**

- [George W. Whitehead, Generalized homology theories, Trans. Amer. Math. Soc. 102 (1962) 227–283](https://doi.org/10.1090/s0002-9947-1962-0137117-6)
- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Suspension-defined connecting maps make cohomology exact in all degrees

**Remember:** Apply three-term exactness to each consecutive triple of the cofiber sequence.

*True by definition. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A reduced cohomology theory assigns graded groups contravariantly, meaning that maps act in reverse. It sends coproducts to products and has a suspension isomorphism from degree n on X to degree n + 1 on ΣX. It sends each cofiber sequence X → Y → Z to a sequence exact at the group for Y. Here the cofiber Z is the pushout of X → Y along the map to zero.

**Problem.** In a pointed ∞-category with finite colimits, reduced cohomology sends a cofiber sequence to a long exact sequence. The connecting map from the group of X to the next-degree group of Z uses suspension and the map Z → ΣX.

**How the definition helps.** The suspension definition of the connecting map makes each part of the long sequence an instance of three-term exactness. The cofiber sequence continues as Y → Z → ΣX → ΣY, and each consecutive triple is again a cofiber sequence (our own explanation). Applying cohomology gives exactness at each middle group. The suspension isomorphism rewrites the groups of the suspensions as shifted groups of the original objects. In the axioms for pairs, the boundary and long exactness are extra data and an axiom. In the cofiber formulation, the work lies in proving the rotation of the cofiber sequences.

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “using that σ is by definition an isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The wedge axiom extends uniqueness of cohomology theories to infinite complexes

**Remember:** An additive theory turns a wedge of spaces into a product of groups.

*Rules out counterexamples. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** A reduced generalized cohomology theory Ẽ (one that satisfies the Eilenberg–Steenrod axioms except perhaps the dimension axiom) is additive if it satisfies the wedge axiom. The wedge axiom says: for every set of pointed CW complexes Xᵢ, the map Ẽ(∨ᵢ Xᵢ) → ∏ᵢ Ẽ(Xᵢ) is an isomorphism. In words, the theory takes a wedge sum to the product of its values on the pieces.

**Problem.** Take a natural transformation of cohomology theories that is an isomorphism on the 0-sphere S⁰. Then it is an isomorphism on all CW complexes.

**How the definition helps.** The wedge axiom is what carries the isomorphism from finite complexes to infinite ones. Without the wedge axiom, the nLab states the isomorphism only on CW complexes with finitely many cells. If both theories satisfy the wedge axiom, the isomorphism holds on every CW complex. Our own counterexample without the axiom (not from the nLab) compares E(X) = H\*(X; ℤ) ⊗ ℚ with H\*(X; ℚ). Tensoring with ℚ is exact, so E is a cohomology theory, and the map is an isomorphism on S⁰. But on an infinite wedge of circles, (∏ℤ) ⊗ ℚ is smaller than ∏ℚ, because E fails the wedge axiom. The general proof uses the finite case together with the Atiyah–Hirzebruch spectral sequence, or a direct argument (Switzer, Kochman).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [wedge axiom](https://ncatlab.org/nlab/show/wedge+axiom). It says: “Then φ(X): E(X) → F(X) is an isomorphism for X any CW-complex with a finite number of cells. If both E and F satisfy the wedge axiom, then φ(X) is an isomorphism for X any CW-complex, not necessarily finite.”

**Sources:**

- [John Milnor, On axiomatic homology theory, Pacific Journal of Mathematics 12 (1962) 337–341](https://doi.org/10.2140/pjm.1962.12.337)
- [Samuel Eilenberg, Norman Steenrod, Foundations of Algebraic Topology, Princeton University Press (1952), section III.10 (uniqueness for ordinary theories on finite complexes)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/eilestee.pdf)

### Ω-spectrum cohomology has natural suspension isomorphisms by adjunction

**Remember:** Moving suspension to the representing space turns it into loops.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** An Ω-spectrum has pointed spaces Eₙ linked by weak equivalences Eₙ → ΩEₙ₊₁ for each degree n. Its cohomology of a pointed CW complex X in degree n consists of pointed homotopy classes of maps from X to Eₙ. The axiomatic definition of reduced cohomology instead assumes suspension isomorphisms.

**Problem.** For an Ω-spectrum, the degree n cohomology of X is naturally isomorphic to the degree n + 1 cohomology of its reduced suspension.

**How the definition helps.** The Ω-spectrum definition gives suspension invariance by moving suspension from the source to loops on the target (our own summary). Maps from the suspension of X to Eₙ₊₁ correspond to maps from X to ΩEₙ₊₁. The weak equivalence Eₙ → ΩEₙ₊₁ gives the same pointed homotopy classes on a CW domain. The group operation comes from writing the target as a double loop space up to equivalence. The converse, which represents axiomatic cohomology by a spectrum, is Brown’s representability theorem.

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “In (Whitehead 62) it was observed that every spectrum induces a generalized homology theory. The Brown representability theorem (Brown 62) asserts that every generalized (co)homology arises this way”

**Wikipedia:** [Spectrum (topology)](https://en.wikipedia.org/wiki/Spectrum_%28topology%29). It says: “An Ω-spectrum is a spectrum such that the adjoint of the structure map (i.e., the map Xₙ → ΩXₙ₊₁) is a weak equivalence.”

**Sources:**

- [E. H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Defining bordism by the Thom spectrum makes its long exact sequence automatic

**Remember:** Spectra give exact sequences before any manifolds are glued.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R75. arXiv math.AT. Level 3: graduate.

**Definition.** Define the oriented bordism homology of a pair (X, A) as the stable homotopy groups of MSO ∧ (X/A). Stable homotopy groups are homotopy groups taken after enough suspensions that they stop changing. Here MSO is the Thom spectrum of the universal oriented vector bundles, and ∧ is its smash product with the quotient space X/A. The geometric definition uses oriented manifolds with boundary mapped into X, with the boundary sent into A.

**Problem.** For a cell complex X and a subcomplex A, oriented bordism has a long exact sequence of the pair.

**How the definition helps.** With the spectrum definition, exactness is a general property of stable homotopy. In our own proof, A → X → X/A is a cofibre sequence, which stable homotopy turns into a long exact sequence. Smashing with MSO keeps it a cofibre sequence, so oriented bordism inherits the long exact sequence. The work goes into the Pontryagin–Thom theorem, which identifies these groups with geometric bordism. It also identifies the connecting map with taking the boundary of a manifold. With the geometric definition, exactness needs cutting and gluing manifolds along collars, which are product neighbourhoods of the boundary.

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “A generalized homology theory represented by a Thom spectrum.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86](https://doi.org/10.1007/BF02566923)

### Landweber exactness says when tensoring complex cobordism gives a homology theory

**Remember:** Each vᵢ must act injectively on R modulo the earlier ones.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A formal group law (a power series F(x, y) that behaves like a group law) over a graded ring R is classified by a ring map from the Lazard ring L ≅ MU•(∗) to R, where MU is complex cobordism. The formal group law is Landweber exact if, for every prime p, the elements v₀ = p, v₁, v₂, … form a regular sequence on R. Here vᵢ is the coefficient of x to the power pⁱ in the p-series \[p\](x), the formal sum of x with itself p times. Regular sequence means that each vᵢ acts injectively on R modulo the earlier ones.

**Problem.** Decide when the functor X ↦ MU•(X) ⊗ R, with the tensor product over L, is a generalized homology theory. A spectrum then represents it.

**How the definition helps.** Landweber exactness is the regularity condition that makes the tensor product keep the needed exact sequences. Tensoring is not exact in general, so this functor can fail the exactness axiom of a homology theory, and then no spectrum represents it. The Landweber exact functor theorem says that, under this condition, the functor is a homology theory. For example, the additive formal group law is Landweber exact over R only if R contains ℚ. So ordinary integral homology does not arise this way. The hard part is Landweber's theorem on comodules over MU•MU. The definition isolates exactly what that theorem needs.

**nLab:** [Landweber exact functor theorem](https://ncatlab.org/nlab/show/Landweber+exact+functor+theorem), [Landweber exactness](https://ncatlab.org/nlab/show/Landweber+exactness). It says: “Landweber exactness is a sufficient condition on R for E ≔ MU•(−) ⊗ L R to be indeed a generalized homology theory”

**Sources:**

- [Peter S. Landweber, Homological properties of comodules over MU∗(MU) and BP∗(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### One class on ℂP∞ gives a formal group law

**Remember:** A complex orientation is a first Chern class that restricts to 1 on the 2-sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a multiplicative cohomology theory (a cohomology theory with products). A complex orientation of E is a class c₁ in the reduced group Ẽ²(BU(1)), where BU(1) ≃ ℂP∞. Its pullback along the inclusion i : S² = ℂP¹ → ℂP∞ must be the unit 1 in Ẽ²(S²) ≅ π₀(E). E is complex orientable if such a class exists.

**Problem.** Attach a formal group law (a power series F(x, y) that behaves like the addition of a group) to every complex oriented cohomology theory. Show that complex cobordism MU is the universal complex oriented theory.

**How the definition helps.** This minimal definition asks for one class on one space, and that class already gives the rest. It gives Thom classes for all complex line bundles and Chern classes for all complex vector bundles. It gives a formal group law from the first Chern class of a tensor product of line bundles. For a homotopy commutative ring spectrum E, complex orientations correspond exactly to ring maps MU → E. The deep part is Quillen's theorem that the formal group law of MU is universal, so that π•(MU) is the Lazard ring (the ring that carries the universal formal group law). The bijection does not lift to E∞ ring maps. Ando showed that not every complex orientation gives an H∞ ring map out of MU.

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory), [Milnor-Quillen theorem on MU](https://ncatlab.org/nlab/show/Milnor-Quillen+theorem+on+MU). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Sources:**

- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### Compactly supported Euler characteristic adds across open and closed pieces

**Remember:** Compact supports make an open piece and its closed complement add correctly.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14P10. arXiv math.AT. Level 3: graduate.

**Definition.** Take a locally compact semialgebraic set, one cut out by finite combinations of polynomial equalities and inequalities. Its compactly supported Euler characteristic is the alternating sum of dimensions of its compactly supported cohomology over ℚ. This cohomology uses classes with support inside compact subsets and agrees with ordinary cohomology on compact spaces.

**Problem.** Let U be an open semialgebraic subset of X with complement Z. Show that the compactly supported Euler characteristic of X is the sum of those of U and Z.

**How the definition helps.** The compact-support definition makes the sum rule easy because its cohomology gives a long exact sequence for an open set and its closed complement. In our own proof, the groups are finite-dimensional and vanish in high degrees, so the alternating sum along the exact sequence is zero. Ordinary Euler characteristic fails on the line split into one point and two open half-lines. It gives 1 for the line but 1 + 2 for the pieces. Compact supports give −1 for the line and 1 − 2 for the pieces. The work shifts to proving the exact sequence and the finiteness of the groups.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Euler calculus](https://en.wikipedia.org/wiki/Euler_calculus). It says: “if X is a locally compact space, and one uses Euler characteristics with compact supports, no assumptions on M or N are needed.”

**Sources:** none listed. No primary source with a working link was found.

### Interleaving distance equals bottleneck distance for pointwise finite-dimensional modules

**Remember:** Shift the modules by ε, and the barcodes move by ε.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 3: graduate.

**Definition.** Persistence modules V and W are ε-interleaved when they have maps V → W and W → V that raise the parameter by ε. The two composites must equal the internal maps of V and W from t to t+2ε. The bottleneck distance between two barcodes is the least ε that admits a partial matching of their intervals as follows. Matched endpoints move by at most ε, and unmatched intervals have length at most 2ε.

**Problem.** For pointwise finite-dimensional persistence modules, the interleaving distance equals the bottleneck distance between their barcodes. This is the isometry theorem.

**How the definition helps.** The interleaving definition uses only maps of modules, so stability under small changes of the data follows by functoriality (our own). The isometry theorem then shows that this algebraic distance equals the combinatorial distance on barcodes. Thus a stability result for barcodes reduces to building one interleaving (our own). The hard direction is algebraic stability, which turns an ε-interleaving into an ε-matching of barcodes. Chazal and others proved it first, and Bauer and Lesnick gave a direct proof by induced matchings. The converse, from a matching to an interleaving, is easy (our own).

**Paper or page:** [Intrinsic Bottleneck Distance for Merge Trees](https://arxiv.org/abs/2509.02755). It says: “Then the bottleneck distance between the barcode B arising from V and the barcode B′ of W is equal to the value inf{ε ≥ 0: V and W are ε-interleaved}.”

**Sources:**

- [Intrinsic Bottleneck Distance for Merge Trees, arXiv:2509.02755 (2025)](https://arxiv.org/abs/2509.02755)
- [Ulrich Bauer, Michael Lesnick, Induced matchings of barcodes and the algebraic stability of persistence, Proc. 30th Symposium on Computational Geometry (2014) 355–364](https://doi.org/10.1145/2582112.2582168)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)

### Pointwise finite-dimensional persistence modules always split into intervals

**Remember:** Finite dimension at each parameter is enough to get a barcode.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis), 16G20. arXiv math.AT, math.RT. Level 3: graduate.

**Definition.** A persistence module is a family of vector spaces indexed by real numbers, with a linear map from each space to every later one. It is pointwise finite-dimensional when each of its vector spaces has finite dimension. An interval module is the field on one interval of parameters and zero elsewhere, with identity maps inside the interval.

**Problem.** Every pointwise finite-dimensional persistence module over a subset of the real line is a direct sum of interval modules. The multiset of intervals, called the barcode, is unique.

**How the definition helps.** The condition asks only for finite dimension at each parameter. So it holds, for example, for the homology of a filtration of a finite simplicial complex, and each such module gets a barcode (our own). Earlier results covered finitely generated modules, or modules indexed by the integers (our own). Without pointwise finite dimension, a module need not split into intervals (our own). The hard part is Crawley-Boevey's proof, which uses functorial filtrations.

**Paper or page:** [The Extended Persistent Homology Transform of manifolds with boundary](https://arxiv.org/abs/2208.14583), [Stabilization of codimension of persistence barcodes](https://arxiv.org/abs/2311.01610). It says: “A pointwise finite dimensional persistence module over any subset of ℝ admits an interval decomposition. … This decomposition is unique up to isomorphism.”

**Sources:**

- [The Extended Persistent Homology Transform of manifolds with boundary, arXiv:2208.14583 (2022)](https://arxiv.org/abs/2208.14583)
- [William Crawley-Boevey, Decomposition of pointwise finite-dimensional persistence modules, J. Algebra Appl. 14 (2015) 1550066](https://doi.org/10.1142/s0219498815500668)

### Intersection cohomology restores Poincaré duality for singular spaces

**Remember:** Chains may meet the singular set only as much as the perversity allows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N33 (Intersection homology and cohomology in algebraic topology), 14F43, 14F08. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** A stratified space is a space divided into pieces called strata, and the singular strata hold its singular points. Intersection homology of a stratified space uses only the chains that meet each singular stratum in at most a controlled excess dimension. A function called the perversity sets this control. Perverse sheaves are complexes of constructible sheaves (sheaves that are locally constant on each stratum) that generalise the intersection complexes.

**Problem.** Prove Poincaré duality, and the Lefschetz and Hodge theorems, for singular varieties. Ordinary cohomology does not satisfy duality for these varieties.

**How the definition helps.** Intersection cohomology uses only chains that meet the singular set in a controlled way, and this restores duality. The nLab says that Poincaré duality fails for singular spaces, and that intersection cohomology repairs duality by taking the codimension of the singular strata into account. The nLab also says that two special perversities give ordinary homology and ordinary cohomology. The details are standard and not on the page (our summary): Goresky and MacPherson proved that on a compact oriented pseudomanifold (roughly, a space that is a manifold outside a singular set of codimension at least 2), the theories for complementary perversities are dual. So the middle perversity is self-dual over a field. Later theorems, such as the hard Lefschetz theorem and the decomposition theorem for intersection cohomology, are stated in terms of perverse sheaves and are hard.

**nLab:** [intersection cohomology](https://ncatlab.org/nlab/show/intersection+cohomology), [perverse sheaf](https://ncatlab.org/nlab/show/perverse+sheaf). It says: “While for smooth manifolds there is a Poincaré duality relating singular homology and singular cohomology, this fails for singular spaces.”

**Sources:**

- [Mark Goresky, Robert MacPherson, Intersection homology theory, Topology 19 (1980) 135–162](https://doi.org/10.1016/0040-9383(80)90003-8)
- [Robert MacPherson, Intersection homology and perverse sheaves, lecture notes (1990)](https://faculty.tcu.edu/gfriedman/notes/ih.pdf)

### Locally finite chains make proper maps push Borel–Moore homology forward

**Remember:** Proper maps pull compact sets back to compact sets.

*True by definition.* MSC 55N35 (Other homology theories in algebraic topology), 55P57. arXiv math.AT. Level 3: graduate.

**Definition.** Borel–Moore homology can be defined with locally finite singular chains. These are formal infinite sums of singular simplices in which only finitely many simplices with nonzero coefficient meet each compact set. The original definition uses sheaf cohomology with compact supports, which builds global data from local data on open sets. The two agree on locally compact spaces that are locally contractible, σ-compact and finite-dimensional.

**Problem.** A proper map f: X → Y induces a pushforward from the Borel–Moore homology of X to that of Y. A map is proper if the inverse image of each compact set is compact.

**How the definition helps.** In the chain model, the pushforward sends Σ a(σ) σ to Σ a(σ) (f ∘ σ), and properness keeps this sum locally finite. In our own account, a simplex f ∘ σ meets a compact set K only if σ meets f⁻¹(K), which is compact. So only finitely many terms meet K. The formula commutes with taking faces, so it gives a chain map. Wikipedia states that Borel–Moore homology is covariant for proper maps. The work moves into the theorem that the chain model agrees with the sheaf definition on these spaces.

**Wikipedia:** [Borel–Moore homology](https://en.wikipedia.org/wiki/Borel%E2%80%93Moore_homology). It says: “the homology of the chain complex of locally finite singular chains”

**Sources:**

- [A. Borel and J. C. Moore, Homology theory for locally compact spaces (1960)](https://doi.org/10.1307/mmj/1028998385)

### The Eilenberg–Steenrod axioms prove Mayer–Vietoris once for every homology theory

**Remember:** Prove a result from the axioms, and every homology theory obeys it.

*Makes the theorem clean to state or prove.* MSC 55N40 (Axioms for homology theory and uniqueness theorems in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A homology theory is a sequence of functors from pairs of spaces to abelian groups, with a boundary map. It must satisfy homotopy invariance, the long exact sequence of a pair, excision, additivity and the dimension axiom. Excision says that you can cut out a small set from the subspace without changing relative homology.

**Problem.** The Mayer–Vietoris sequence and the homology of spheres hold for every homology theory. From these, the sphere Sⁿ⁻¹ is not a retract of the disk Dⁿ, which gives the Brouwer fixed point theorem.

**How the definition helps.** The axioms list only the properties that proofs actually use, so one proof covers singular, cellular and simplicial homology at once. Mayer–Vietoris follows from excision and the exact sequence of a pair (our own remark). The homology of spheres follows from the axioms by induction (our own remark). Eilenberg and Steenrod also showed that the axioms fix homology uniquely on finite CW complexes (our own remark). What stays hard is to build a theory that satisfies the axioms; for singular homology, excision is the hard step.

**Wikipedia:** [Eilenberg–Steenrod axioms](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Steenrod_axioms). It says: “The axiomatic approach, which was developed in 1945, allows one to prove results, such as the Mayer–Vietoris sequence, that are common to all homology theories satisfying the axioms.”

**Sources:**

- [Samuel Eilenberg and Norman E. Steenrod, Axiomatic approach to homology theory, Proceedings of the National Academy of Sciences 31 (1945) 117–120](https://doi.org/10.1073/pnas.31.4.117)

### Cup-product intersection forms are symmetric in even and skew in odd degree

**Remember:** Swapping two classes of degree n costs the sign (−1)ⁿ.

*True by definition.* MSC 55N45 (Products and intersections in homology and cohomology), 57N65. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** On a closed oriented manifold M of dimension 2n, define the intersection form on Hⁿ(M) by (a, b) ↦ ⟨a ⌣ b, \[M\]⟩. This evaluates the cup product on the fundamental class. The geometric definition counts, with signs, the intersection points of transverse submanifolds that represent the dual homology classes.

**Problem.** The intersection form is symmetric when n is even and skew-symmetric when n is odd.

**How the definition helps.** With the cup product definition, the theorem is graded commutativity of the cup product. In our own proof, for classes of degree n, it gives a ⌣ b = (−1)ⁿ b ⌣ a. The sign is (−1) raised to n², which equals (−1)ⁿ. Wikipedia states the definition and the same symmetry rule. With signed intersection counts, one must compare orientations at each point in both orders. The work goes into Poincaré duality, which shows that transverse intersections represent the cup product.

**Wikipedia:** [Intersection theory](https://en.wikipedia.org/wiki/Intersection_theory). It says: “by the evaluation of the cup product on the fundamental class”

**Sources:** none listed. No primary source with a working link was found.

### Lax monoidal homology turns space multiplication into a ring

**Remember:** The lax monoidal laws carry the unit and associativity into homology.

*True by definition. Confidence: medium.* MSC 55N45 (Products and intersections in homology and cohomology), 18M05. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A lax monoidal functor F has maps F(A) ⊗ F(B) → F(A ⊗ B) and a map from the target unit to F of the source unit. These maps respect associativity and units. Our own application uses the cross product to give homology this structure. The usual direct construction composes the cross product with the map induced by the space's multiplication.

**Problem.** The homology of a topological monoid with coefficients in a commutative ring is a unital, associative graded ring. The same holds for a space with a multiplication that is associative and unital up to homotopy.

**How the definition helps.** The lax monoidal definition transfers the multiplication and its laws together, so the ring laws need no separate verification. The general result sends a monoid, an object with an associative unital multiplication, to a monoid. Our own application uses that homotopic maps induce the same map on homology, so the laws need hold only up to homotopy. The work moves into constructing the homology cross product and proving that it is natural, associative and unital.

**nLab:** [monoidal functor](https://ncatlab.org/nlab/show/monoidal+functor). It says: “Lax monoidal functors send monoids to monoids”

**Wikipedia:** [Pontryagin product](https://en.wikipedia.org/wiki/Pontryagin_product). It says: “is a product on the homology of a topological space induced by a product on the topological space.”

**Sources:** none listed. No primary source with a working link was found.

### Grading by representations gives equivariant suspension isomorphisms

**Remember:** Grade by representations, so that you can suspend by representation spheres.

*Makes the theorem clean to state or prove.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91, 19A22. arXiv math.AT. Level 3: graduate.

**Definition.** A genuine G-equivariant cohomology theory (a cohomology theory for spaces with an action of the group G) has degrees that are not only integers but also real representations V of G. So its degrees form the additive group of the representation ring RO(G), whose elements are formal differences of representations. A shift of degree by V matches the smash product with the representation sphere Sⱽ. The representation sphere Sⱽ is the one-point compactification of V.

**Problem.** The equivariant suspension isomorphism should hold for every real representation V of G. It says that the smash product of a G-space X with the representation sphere Sⱽ shifts the cohomology of X by the degree V. This should hold also when G acts nontrivially on the sphere.

**How the definition helps.** Grading by representations gives a degree V to shift by, so the theorem can be stated at all. With only integer grading, the suspension isomorphism can be stated only for spheres on which G acts trivially. Grading by RO(G) gives the isomorphism Eᴳ•(X) ≅ Eᴳ•⁺ⱽ(Sⱽ ∧ X). In words, the cohomology of X in each degree equals the cohomology of Sⱽ ∧ X in that degree plus V. This isomorphism is part of what makes a theory genuine. The nLab adds, quoting May, that the most intrinsic grading is by the Picard group (the group of invertible objects) of the stable G-homotopy category. But RO(G) is much more convenient.

**nLab:** [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “this leads one to demand that E• is graded not just by the integers, but by any linear representation V, so that one has equivariant suspension isomorphisms”

**Sources:**

- [J. P. May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### The Borel construction gives free actions the cohomology of their quotient

**Remember:** For a free action, the extra factor EG is contractible.

*True by definition. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55R10. arXiv math.AT. Level 3: graduate.

**Definition.** For a group G acting on a space X, the Borel construction is the orbit space (X × EG)/G, where G acts on both factors. Here EG is a contractible space on which G acts freely. Borel equivariant cohomology is the ordinary cohomology of this space. More abstract definitions take the homotopy quotient X//G, a gluing that keeps track of the action up to homotopy.

**Problem.** Let P → B be a principal G-bundle, so G acts freely on P with quotient B and the map is locally a product. Then the Borel equivariant cohomology of P is the ordinary cohomology of B.

**How the definition helps.** In the Borel construction, the map (P × EG)/G → P/G = B has fiber EG, which is contractible. In our own account, this map is a fiber bundle because P → B is locally a product. Its long exact sequence of homotopy groups shows that it is a weak homotopy equivalence, a map that induces isomorphisms on all homotopy groups. Weak homotopy equivalences induce isomorphisms on singular cohomology. The nLab defines Borel cohomology as the cohomology of the homotopy quotient, so the work moves to showing that the Borel construction models that quotient.

**nLab:** [Borel equivariant cohomology](https://ncatlab.org/nlab/show/Borel+equivariant+cohomology). It says: “For X a space and G a group acting on it, then the Borel equivariant cohomology of X is the cohomology of the homotopy quotient X//G.”

**Sources:** none listed. No primary source with a working link was found.

### The path-space test makes Hurewicz cofibrations stable under pushout

**Remember:** A homotopy extension problem becomes a square against path evaluation.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A map A → X is a Hurewicz cofibration if every homotopy on A extends to X from a compatible starting map. In compactly generated spaces, a homotopy with values in Y is a map into the space of paths in Y. Thus A → X must fill squares as the left map against path evaluation at time zero.

**Problem.** In compactly generated spaces, the pushout of a Hurewicz cofibration along any map is a Hurewicz cofibration.

**How the definition helps.** The path lifting description makes this a general fact about maps defined by left lifting tests (our own explanation). A square for the pushout restricts to one for the original map. Its filler extends by the defining property of the pushout. For a closed inclusion, the direct cylinder test instead asks for a retraction onto the union of X × {0} and A × \[0,1\]. To get that retraction, take the union as the target of the homotopy extension test.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “A map (continuous function) i : A → X between topological spaces is a Hurewicz cofibration if it satisfies the homotopy extension property for all spaces”

**Sources:**

- [A. Strøm, Note on cofibrations, Mathematica Scandinavica 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### The retraction criterion makes products of cofibrations with spaces cofibrations

**Remember:** Multiply the retraction by the identity on Y.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** A Hurewicz cofibration is an inclusion A → X with the homotopy extension property. That is, a homotopy on A extends to X once its start on X is given. For a closed inclusion, an equivalent criterion asks that X × {0} ∪ A × \[0,1\] be a retract of the cylinder X × \[0,1\]. A retraction onto a subspace is a map onto it that fixes each of its points.

**Problem.** Let A → X be a closed Hurewicz cofibration of compactly generated spaces, and let Y be compactly generated. Then Y × A → Y × X is a Hurewicz cofibration. Here a space is compactly generated if maps from compact Hausdorff spaces detect its closed sets, and products carry the matching topology.

**How the definition helps.** The retraction criterion asks for one map, and the identity of Y times that map is the needed retraction. The nLab proves the result this way, extending the retraction as a constant function in Y. Compactly generated spaces form a cartesian closed category, so Y × (−) preserves the gluing that builds the subspace. The work moves into the criterion, which says that one retraction gives the homotopy extension property for all targets. In our own account, the criterion holds because composing with the retraction extends any homotopy.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “to yield a retract that exhibits the cofibration property of Y × i.”

**Sources:** none listed. No primary source with a working link was found.

### Weak Hausdorff spaces make every Hurewicz cofibration closed

**Remember:** In weak Hausdorff spaces, every cofibration has a closed image.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 54D50. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A map i : A → X is a Hurewicz cofibration if it has the homotopy extension property for all target spaces. That is, a map on X and a homotopy of its restriction to A always extend to a homotopy on X. Many topologists work in the category of compactly generated weak Hausdorff spaces. In it, every space satisfies a mild separation condition: the image of each map from a compact Hausdorff space is closed.

**Problem.** The two standard characterizations of cofibrations are proved only for closed inclusions. One is a retraction of X × \[0,1\] onto X × {0} ∪ A × \[0,1\], and the other is a neighbourhood deformation retract (an NDR pair). You want to use them for every cofibration.

**How the definition helps.** The separation condition rules out cofibrations whose image is not closed. In Top, the category of all topological spaces, a cofibration need not have closed image. Strøm's counterexample is the inclusion of a point into a two-point space with the codiscrete topology (only the empty set and the whole space are open). In compactly generated weak Hausdorff spaces, and in Hausdorff spaces, the image of every Hurewicz cofibration is closed. So the characterizations for closed inclusions apply to all cofibrations. The work of proving those characterizations (Strøm's work) still remains.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “In the category of weakly Hausdorff compactly generated spaces, the image i(A) of a Hurewicz cofibration is always closed.”

**Sources:**

- [Arne Strøm, Note on cofibrations, Math. Scand. 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### Well-pointed groups make plain and fat realization agree

**Remember:** The base point sits in the space as nicely as a cofibration can.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 18N50, 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** A pointed space (X, x) is well-pointed if the inclusion {x} → X of the base point is a closed Hurewicz cofibration (an inclusion with the homotopy extension property). A topological group is well-pointed if it is well-pointed at its neutral element.

**Problem.** Classifying-space theory needs the plain geometric realization of a simplicial space, such as the nerve of a group, to compute the homotopy colimit.

**How the definition helps.** Well-pointedness makes the nerve a good simplicial space, and for good simplicial spaces the plain realization computes the homotopy colimit. Take a well-pointed group in compactly generated weak Hausdorff spaces. The nerve of its delooping groupoid is then a good simplicial space: its degeneracy maps are closed cofibrations. For a good simplicial space, the map from the fat realization to the plain realization is a homotopy equivalence (Segal 1974, Proposition A.1). The fat realization (which glues along face maps only, not degeneracies) models the homotopy colimit. The real work is in that theorem on good simplicial spaces. The page names no explicit counterexample for groups that are not well-pointed.

**nLab:** [well-pointed topological space](https://ncatlab.org/nlab/show/well-pointed+topological+space). It says: “These facts explain the key role of well-pointedness in classifying space-theory, where it ensures that plain topological realization of simplicial topological spaces coincides, up to weak homotopy equivalence, with fat geometric realization”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics, 2008](https://doi.org/10.4171/048)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312, appendix A](https://doi.org/10.1016/0040-9383(74)90022-6)

### Defining weak homotopy type by zigzags makes it an equivalence relation

**Remember:** Same homotopy type means joined by a zigzag, not by one arrow.

*True by definition.* MSC 55P15 (Classification of homotopy type), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A weak homotopy equivalence is a map that induces isomorphisms on all homotopy groups. Two spaces X and Y have the same weak homotopy type if a zigzag X ← · → · ← … → Y of weak homotopy equivalences joins them. Equivalently, X and Y become isomorphic in the homotopy category Ho(Top), where weak homotopy equivalences are made invertible.

**Problem.** Make "X and Y have the same weak homotopy type" an equivalence relation.

**How the definition helps.** A zigzag can be read backwards, so the relation is symmetric by definition. The relation "there is a weak homotopy equivalence X → Y" is reflexive and transitive, but it is not symmetric. The counterexample is the circle S¹ and the pseudocircle 𝕊, a space with four points. A weak homotopy equivalence S¹ → 𝕊 exists, but every map 𝕊 → S¹ is trivial on π₁. With zigzags, the circle and the pseudocircle have the same weak homotopy type. To compute with zigzags, one then needs a model structure or CW approximation.

**nLab:** [weak homotopy equivalence](https://ncatlab.org/nlab/show/weak+homotopy+equivalence). It says: “There is a continuous function S¹ → 𝕊 which is a weak homotopy equivalence, hence in particular π₁(𝕊) ≃ ℤ. But every continuous map the other way round has to induce the trivial map on π₁.”

**Sources:**

- [Michael C. McCord, Singular homology groups and homotopy groups of finite topological spaces, Duke Math. J. 33 (1966) 465–474](https://doi.org/10.1215/S0012-7094-66-03352-7)

### Spanier–Whitehead duality is monoidal duality in the stable homotopy category

**Remember:** The S-dual of a spectrum is its dual object for the smash product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P25 (Spanier-Whitehead duality), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** Spectra are the objects of stable homotopy theory, and the smash product is their tensor product. In a symmetric monoidal category with unit 1, an object X is dualizable if it has a dual object DX with maps DX ⊗ X → 1 and 1 → X ⊗ DX that satisfy the two triangle identities. Spanier–Whitehead duality (S-duality) is this duality in the stable homotopy category, with the smash product as the tensor product. So the S-dual of a spectrum X is its dual object DX for the smash product.

**Problem.** Express Atiyah duality, and show that the Euler characteristic of a closed manifold is a categorical trace.

**How the definition helps.** Because S-duality is ordinary monoidal duality, the general notions of trace and dimension apply to spectra. Spanier and Whitehead introduced the duality in the 1950s. The nLab says that the reading as ordinary monoidal duality in the stable homotopy category is apparently due to Dold and Puppe. With this definition, Atiyah duality says this: for a closed smooth manifold X, the dual of the suspension spectrum Σ∞₊X (the spectrum of X with a disjoint base point added) is the Thom spectrum of the stable normal bundle of X. The trace of the identity on Σ∞₊X is its categorical dimension, and it is the Euler characteristic of X. The geometric content is in identifying the dual as a Thom spectrum.

**nLab:** [Spanier-Whitehead duality](https://ncatlab.org/nlab/show/Spanier-Whitehead+duality). It says: “Using this one shows that the trace on the identity on Σ<sup>∞</sup>₊X -- its categorical dimension -- is the Euler characteristic of X.”

**Sources:**

- [Albrecht Dold, Dieter Puppe, Duality, trace and transfer, Proceedings of the Steklov Institute of Mathematics 1984, issue 4 (translation of Trudy Mat. Inst. Steklov 154 (1983)); earlier version in Proc. Int. Conf. Geometric Topology, Warsaw 1978, PWN (1980) 81–102](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/doldpup2.pdf)
- [Edwin H. Spanier, J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/S002557930000070X)

### Groupoid models of BG make free loop components classifying spaces of centralizers

**Remember:** Each conjugacy class contributes the classifying space of its centralizer.

*True by definition.* MSC 55P35 (Loop spaces), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** For a discrete group G, model the classifying space BG by the groupoid with one object and arrow group G. Model the circle in the same way by the integers ℤ. Maps from the circle to BG then form a groupoid of functors, which is the action groupoid of G acting on itself by conjugation. The usual definition takes all continuous maps from the circle to a CW model of BG.

**Problem.** The free loop space of BG, the space of all maps from the circle to BG, has one component for each conjugacy class of G. The component of g is homotopy equivalent to BC(g). Here the centralizer C(g) is the subgroup of elements that commute with g.

**How the definition helps.** With the groupoid model, the free loop space is the conjugation action groupoid, so its parts can be read off. The nLab computes this action groupoid. In our own account, the components are the orbits, which are the conjugacy classes. The automorphisms of g are the h with h⁻¹gh = g, and they form C(g). A connected groupoid with automorphism group C(g) models BC(g). The work moves to the fact that groupoids model spaces with no homotopy groups above degree one. In this model, mapping spaces become groupoids of functors.

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “This shows that the hom-groupoid is the action groupoid of the conjugation action”

**Sources:** none listed. No primary source with a working link was found.

### Defining cofibers as homotopy pushouts makes the second cofiber a suspension

**Remember:** Collapse Y after attaching the cone, and only the suspension remains.

*True by definition.* MSC 55P40 (Suspensions), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f: X → Y of pointed spaces, define the homotopy cofiber C(f) as the homotopy pushout of Y ← X → ∗. A homotopy pushout glues along a cylinder on X instead of along X itself. The concrete model attaches the cone on X to Y along f.

**Problem.** Let X and Y be well-pointed, meaning that the inclusion of the base point is a cofibration. Then the homotopy cofiber of the inclusion Y → C(f) is homotopy equivalent to the reduced suspension ΣX.

**How the definition helps.** With homotopy pushouts as the definition, two homotopy pushout squares pasted together form one homotopy pushout. In our own account, the second square glues a point to C(f) along Y. The pasted square is then the homotopy pushout of ∗ ← X → ∗, which is the suspension of X. The nLab states that the mapping cone of the map X → ∗ is the suspension. The work moves to the pasting law for homotopy pushouts and to showing that the concrete cone model computes the homotopy pushout.

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “to the terminal object is the suspension object”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.3, cofibration sequences](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### For orthogonal spectra, naive stable homotopy groups detect stable equivalences

**Remember:** Use orthogonal groups, not symmetric groups, and the naive homotopy groups are right.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55Q10. arXiv math.AT. Level 3: graduate.

**Definition.** A spectrum is a sequence of pointed spaces Xₙ with structure maps from the suspension of Xₙ to Xₙ₊₁. An orthogonal spectrum is a spectrum where the orthogonal group O(n) acts on each Xₙ, and the structure maps are compatible with these actions. A symmetric spectrum is the same, with the symmetric group Σₙ in place of O(n).

**Problem.** The stable equivalences of spectra should be exactly the maps that give isomorphisms on the naive stable homotopy groups. The naive stable homotopy group πₙ(X) is the colimit over k of the groups πₖ₊ₙ(Xₖ).

**How the definition helps.** For orthogonal spectra, the naive groups work, because the quotients O(q)/O(q − n) of orthogonal groups become highly connected for large q. The quotients Σ(q)/Σ(q − n) of symmetric groups do not. So for symmetric spectra, the naive stable homotopy groups are not correct in homotopy theory. The counterexample is the canonical map λ from F₁S¹ to F₀S⁰, between free symmetric spectra. It is a stable equivalence, but it is not an isomorphism on the naive stable homotopy groups. So for a symmetric spectrum, you must first replace it by a semistable one. The cost is that orthogonal spectra need topological spaces, and they have no version with simplicial sets.

**nLab:** [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum), [Model categories of diagram spectra](https://ncatlab.org/nlab/show/Model+categories+of+diagram+spectra), [semistable symmetric spectrum](https://ncatlab.org/nlab/show/semistable+symmetric+spectrum). It says: “Among the various (now) common models for spectra, this issue is unique to symmetric spectra”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Flat ring spectra make the Adams E₂-term an Ext of comodules

**Remember:** If E sees itself flatly, E-homology carries a coaction of E•(E).

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55T15, 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a homotopy commutative ring spectrum. Its coefficient ring is π•(E), its homotopy groups. Its self-homology E•(E) is the E-homology of E itself. E is flat if E•(E) is a flat module over π•(E).

**Problem.** The E-Adams spectral sequence computes maps from X to Y. We want its second page, the E₂-term, in terms of algebra alone.

**How the definition helps.** Flatness gives the isomorphism E•(E) ⊗ E•(X) ≅ π•(E ∧ E ∧ X), and this turns E-homology into algebra with a good Ext. Because of this isomorphism, E•(E) is a Hopf algebroid (a generalization of a Hopf algebra with two unit maps from π•(E)), and each E•(X) is a comodule over it. These comodules form an abelian category with enough injectives. So the E₂-term is Ext over E•(E) from E•(X) to E•(Y). The nLab theorem also needs E•(X) to be a projective π•(E)-module. The nLab lists the sphere spectrum, H𝔽ₚ (Steenrod algebra), MO, MU, MSp, KO and KU as flat. Convergence of the spectral sequence is a separate question.

**nLab:** [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “the d₁-cohomology of the first page computes the Ext-groups from the E-homology of Y to the E-homology of X, regarded as E•(E)-comodules.”

**Sources:**

- [Douglas Ravenel, A novice's guide to the Adams–Novikov spectral sequence, in Geometric Applications of Homotopy Theory II, Lecture Notes in Mathematics 658, Springer 1978](https://doi.org/10.1007/BFb0068728)

### Segal's condition makes Γ-spaces model infinite loop spaces

**Remember:** X(n) must really be the n-fold product of X(1), up to homotopy.

*Rules out counterexamples.* MSC 55P47 (Infinite loop spaces), 55P48, 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** A Γ-space is a functor X from finite pointed sets to spaces. It is special if X(0) is contractible and every Segal map X(n) → X(1) × … × X(1) is a weak equivalence. The Segal map is built from the n maps that keep one point and collapse the others. It is very special if, in addition, the monoid π₀X(1) is a group.

**Problem.** We want a model of E∞-spaces and of infinite loop spaces (connective spectra) in which the multiplication and its delooping are easy to write down. An E∞-space is a space with a multiplication that is commutative up to all higher homotopies.

**How the definition helps.** The Segal condition turns X(n) into the n-fold product of X(1), and that gives the multiplication. A bare functor on finite pointed sets carries no product structure, so X(n) need not have anything to do with powers of X(1). The Segal condition forces X(n) to be a model of the n-fold product. Then the maps between finite pointed sets give a multiplication on X(1) that is unital, associative and commutative up to coherent homotopy. With the group condition added, Segal's theorem says that the Γ-space presents an infinite loop space. Delooping is then a short formula: a homotopy colimit of a simplicial object. The real content is Segal's theorem; the definition makes it possible to state it.

**nLab:** [Gamma-space](https://ncatlab.org/nlab/show/Gamma-space). It says: “In order for this to be valid, and thus for X to present an infinite loop space, a Γ-space must satisfy the further condition that all the Segal maps … are weak equivalences.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Grouplike Eₖ-algebras are exactly the k-fold loop spaces

**Remember:** k-fold loop spaces are grouplike spaces that multiply in k directions.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** An Eₖ-algebra is a space with an action of the little k-cubes operad. This operad describes the ways to place several small k-dimensional cubes, without overlap, inside one big cube. An Eₖ-algebra is grouplike if its monoid of components π₀ is a group.

**Problem.** Find which spaces are k-fold loop spaces Ωᵏ X, up to homotopy.

**How the definition helps.** The little cubes operad encodes exactly the operations that a k-fold loop space has. So the answer can be stated as: grouplike Eₖ-spaces are k-fold loop spaces (May 1972). The grouplike condition is needed. A non-grouplike monoid can also be delooped, but its delooping recovers it only up to group completion. In any ∞-topos, Lurie proves the same statement as an equivalence between Eₖ-groups (grouplike Eₖ-algebras) and pointed (k−1)-connected objects.

**nLab:** [May recognition theorem](https://ncatlab.org/nlab/show/May+recognition+theorem), [little cubes operad](https://ncatlab.org/nlab/show/little+cubes+operad), [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis). It says: “iterated loop spaces as "grouplike" En-algebras in the classical homotopy theory of spaces (∞Grpd)”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer (1972)](https://doi.org/10.1007/BFb0067491)
- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)

### Shape theory sees the Warsaw circle as a circle

**Remember:** Shape is the homotopy type seen through ever finer blurry glasses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P55 (Shape theory). arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** The shape of a compact metric space X is its system of neighbourhoods, or of nerves of open covers. You regard this system, up to homotopy, as a pro-object (an inverse system) of nice spaces, such as ANRs (absolute neighbourhood retracts) or polyhedra. Shape maps are compatible families of maps between these approximations.

**Problem.** Find a homotopy invariant of 'bad' compact spaces that agrees with the homotopy type on nice spaces. It should let you state results such as Chapman's complement theorem.

**How the definition helps.** Shape sees the Warsaw circle (a topologist's sine curve closed up by an arc) as a circle, because its small neighbourhoods are circles up to homotopy. The Warsaw circle has two path components and trivial π₁. A map from the two-point space S⁰ to it is a weak homotopy equivalence, so weak homotopy type sees no circle. Its small neighbourhoods in the plane are almost annuli, each with the homotopy type of a circle, and the inclusions between them are homotopy equivalences. So its shape is the shape of S¹, and shape agrees with homotopy type on ANRs. Chapman's complement theorem uses shape: compacta in the pseudo-interior of the Hilbert cube have the same shape exactly when their complements are homeomorphic. That theorem itself is a hard result.

**nLab:** [shape theory](https://ncatlab.org/nlab/show/shape+theory), [Warsaw circle](https://ncatlab.org/nlab/show/Warsaw+circle). It says: “the weak homotopy type fails to give useful information for 'bad' spaces, of which classical examples include the Warsaw Circle”

**Sources:**

- [S. Mardešić, J. Segal, Shapes of compacta and ANR-systems, Fund. Math. 72 (1971) 41–59](https://doi.org/10.4064/fm-72-1-41-59)

### Localization at a set of primes works well for nilpotent spaces

**Remember:** On nilpotent spaces, localizing homotopy groups and localizing homology are the same thing.

*Rules out counterexamples.* MSC 55P60 (Localization and completion in homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A connected space is nilpotent if π₁ is a nilpotent group (repeated commutators become trivial after finitely many steps) and acts nilpotently on each higher homotopy group πₙ (the action becomes trivial after finitely many steps of a filtration). Let T be a set of primes. A nilpotent space is T-local if it satisfies any one of three conditions: a homology condition, local homotopy groups, or local homology groups. For nilpotent spaces the three conditions are equivalent, and an abelian group is T-local when multiplication by each prime outside T is a bijection.

**Problem.** Localize a space at a set of primes, as one localizes ℤ. The result should be unique. It should also be computable from homotopy groups or from homology.

**How the definition helps.** For nilpotent spaces the natural definitions agree, so the theory is well defined. For these spaces, the three characterizations of T-local spaces agree, and the T-localization exists and is unique up to homotopy. It localizes each homotopy group and each homology group. For spaces that are not nilpotent, the nLab lists several inequivalent definitions (Bousfield, Bousfield–Kan, Casacuberta–Peschke). Then Sullivan's homotopy-group and homology characterizations are no longer equivalent. It is also not clear that the corresponding localizations exist. So nilpotence is the condition that makes the theory well defined.

**nLab:** [localization of a space](https://ncatlab.org/nlab/show/localization+of+a+space), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “For non-nilpotent spaces, there are multiple inequivalent definitions of localization”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)
- [Emmanuel Dror, A generalization of the Whitehead theorem, Symposium on Algebraic Topology, Lecture Notes in Mathematics 249, Springer (1971) 13–22](https://doi.org/10.1007/BFb0060891)

### Minimal Sullivan models are unique and show the rational homotopy groups

**Remember:** Minimal: add generators one at a time, in order of degree, none wasted.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A Sullivan algebra is a free graded-commutative algebra ∧V with a differential. Graded-commutative means xy = ±yx, with the sign given by the degrees. Here V has a well-ordered basis, and the differential of each basis element lies in the subalgebra generated by earlier basis elements. The algebra is minimal when, in addition, an earlier generator never has higher degree than a later one; for simply connected spaces, this is the same as saying that the differential has no linear part.

**Problem.** Find one representative for each rational homotopy type of simply connected spaces of finite type. A rational homotopy type is a homotopy type up to maps that are isomorphisms on rational homotopy groups. The rational homotopy groups should be easy to read off from the representative.

**How the definition helps.** Minimality makes the model unique up to isomorphism, so you can read invariants straight off it. Any Sullivan model gives the rational homotopy type, but there are many non-isomorphic Sullivan models. Minimal Sullivan algebras correspond bijectively to rational homotopy types. The generators of the minimal model then match the rational homotopy groups, dually. The deep part is Sullivan's theorem that rational homotopy types of such spaces are equivalent to these algebras.

**nLab:** [Sullivan model](https://ncatlab.org/nlab/show/Sullivan+model). It says: “Conversely, every rational space can be obtained from a dg-algebra and the minimal Sullivan algebras provide convenient representatives that correspond bijectively to rational homotopy types under this correspondence.”

**Sources:**

- [D. Sullivan, Infinitesimal computations in topology, Publications Mathématiques de l'IHÉS 47 (1977)](https://doi.org/10.1007/BF02684341)
- [K. Hess, Rational homotopy theory: a brief introduction, arXiv:math/0604626](https://arxiv.org/abs/math/0604626)

### Rational homotopy theory needs nilpotent spaces of finite type

**Remember:** Sullivan models see cohomology, so π₁ must not hide behind trivial cohomology.

*Rules out counterexamples.* MSC 55P62 (Rational homotopy theory), 55P60. arXiv math.AT. Level 3: graduate.

**Definition.** A group is nilpotent if repeated commutators become trivial after finitely many steps. A connected space is nilpotent if its fundamental group is nilpotent and acts nilpotently on the higher homotopy groups: each higher homotopy group has a finite chain of subgroups, and π₁ acts trivially on each successive quotient. Simply connected spaces are nilpotent. A space is of finite type if its rational homology is finite-dimensional in each degree.

**Problem.** Sullivan's theorem says that piecewise polynomial differential forms give an equivalence between rational homotopy types and minimal Sullivan algebras. A Sullivan algebra is a free graded-commutative differential algebra over ℚ of a special form, and it serves as the algebraic model of a space.

**How the definition helps.** The conditions exclude spaces that cohomology cannot see. The excluded counterexamples are the classifying spaces BΓ of acyclic groups Γ, that is, groups with the homology of the trivial group. These spaces have the rational cohomology of a point, so their Sullivan algebras cannot be told apart from those of a contractible space. But BΓ is not contractible, because π₁(BΓ) ≅ Γ. If the space is simply connected, the Hurewicz theorem makes such an acyclic space contractible. The nLab states the equivalence itself for rational nilpotent spaces of finite type, following Bousfield and Gugenheim.

**nLab:** [rational homotopy theory](https://ncatlab.org/nlab/show/rational+homotopy+theory), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “But by Hurewicz theorem asking that all spaces be simply connected precisely makes all "acyclic spaces" be contractible.”

**Sources:**

- [Dennis Sullivan, Infinitesimal computations in topology, Publ. Math. IHÉS 47 (1977) 269–331](https://doi.org/10.1007/BF02684341)
- [A. K. Bousfield, V. K. A. M. Gugenheim, On PL de Rham theory and rational homotopy type, Memoirs of the AMS 179 (1976)](https://doi.org/10.1090/memo/0179)
- [Daniel Quillen, Rational homotopy theory, Annals of Mathematics 90 (1969) 205–295](https://doi.org/10.2307/1970725)

### Brown representability needs connected pointed spaces

**Remember:** Wedges go to products, pushouts go to weak pullbacks, and a representing space exists.

*Rules out counterexamples.* MSC 55P65 (Homotopy functors in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A Brown functor is a contravariant functor F from the homotopy category of connected pointed CW complexes to pointed sets. It must send wedge sums to products. It must also send homotopy pushouts to weak pullbacks; this is the Mayer–Vietoris axiom. (A weak pullback has the existence part of the pullback property, but not the uniqueness part.)

**Problem.** Brown representability says that every Brown functor is representable: F is \[−, Y\], the homotopy classes of maps into some space Y. In particular, a spectrum represents every additive reduced generalized cohomology theory.

**How the definition helps.** The restriction to connected pointed spaces is what makes the theorem true. Without it, the theorem is false for both pointed and unpointed spaces. Freyd and Heller showed that an endomorphism of the classifying space of Thompson's group F does not split in the homotopy category of spaces (it does not factor as a map onto a retract followed by the inclusion of that retract). A retract of a representable functor that splits this endomorphism satisfies the Brown conditions, but it is not representable. A second example of Heller fails for reasons of cardinality. With the restriction, the theorem holds. But its proof is still a real construction that attaches cells.

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “In particular, there is no Brown representability theorem for functors from the homotopy category of pointed not-necessarily-connected spaces to pointed sets, or for functors from the homotopy category of unpointed spaces to sets.”

**Sources:**

- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)
- [Peter Freyd, Alex Heller, Splitting homotopy idempotents II, J. Pure Appl. Algebra 89 (1993) 93–106](https://doi.org/10.1016/0022-4049(93)90088-b)
- [J. F. Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

### Testing weak equivalences on all fixed points gives Elmendorf's theorem

**Remember:** Test a G-map on every subgroup's fixed points, not only on the whole space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N40. arXiv math.AT. Level 3: graduate.

**Definition.** A G-equivariant map f : X → Y is a weak G-homotopy equivalence if, for every closed subgroup H of G, the map fᴴ : Xᴴ → Yᴴ is a weak homotopy equivalence. Here Xᴴ is the fixed-point space, the points of X that every element of H fixes. This notion is finer than the Borel notion, which asks only that f itself is a weak homotopy equivalence.

**Problem.** Elmendorf's theorem says that G-equivariant homotopy theory is equivalent to the homotopy theory of presheaves of spaces on the orbit category of G. The orbit category has the spaces G/H as objects.

**How the definition helps.** The fine definition makes the fixed-point functor reflect weak equivalences by definition. The fixed-point functor sends X to the presheaf G/H ↦ Xᴴ. With the fine definition, a map is a weak equivalence exactly when its presheaf map is an objectwise weak equivalence. With the coarse Borel weak equivalences, the homotopy theory is instead that of spaces over BG, and no such statement holds. The real content of Elmendorf's theorem is the construction of an inverse functor. This functor rebuilds a G-space from any system of fixed-point data.

**nLab:** [Elmendorf's theorem](https://ncatlab.org/nlab/show/Elmendorf%27s+theorem), [fine model structure on topological G-spaces](https://ncatlab.org/nlab/show/fine+model+structure+on+topological+G-spaces). It says: “For general G, Elmendorf's theorem asserts that the fine equivariant model structure is Quillen equivalent to the model category of simplicial presheaves on the orbit category of G.”

**Sources:**

- [A. D. Elmendorf, Systems of fixed point sets, Trans. Amer. Math. Soc. 277 (1983) 275–284](https://doi.org/10.1090/S0002-9947-1983-0690052-0)

### Moore paths have variable length, so they compose strictly

**Remember:** Let each path take as long as it needs, and concatenation is strictly associative.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 55R05, 18F60. arXiv math.AT. Level 3: graduate.

**Definition.** A Moore path in X is a path γ together with a length r ≥ 0, where γ is constant after time r. Two Moore paths compose by running one after the other, and their lengths add. The constant path of length 0 is the identity.

**Problem.** Paths in a space should form a strict category, with strictly associative composition and strict units. Also, the path-space factorization of a map should be functorial, and it should give an algebraic description of Hurewicz fibrations (maps with the homotopy lifting property for all spaces).

**How the definition helps.** Variable lengths remove the need to reparametrize, so composition is strictly associative. Ordinary paths on \[0,1\] compose only up to a homotopy that reparametrizes them. With variable length, concatenation is strictly associative and the length-0 path is a strict unit. So the Moore paths form a strict internal category (a category object in spaces), and even a †-category, where † reverses each path. Barthel and Riehl use the Moore mapping path space to factor each map functorially into a trivial Hurewicz cofibration followed by a Hurewicz fibration. They show that a map is a Hurewicz fibration exactly when it is an algebra for the pointed endofunctor R of this factorization.

**nLab:** [Moore path category](https://ncatlab.org/nlab/show/Moore+path+category), [schedule](https://ncatlab.org/nlab/show/schedule). It says: “The classical Moore path category of a topological space X is a variant on the usual space of paths I → X, but one which yields a strict category (even an internal †-category in Top).”

**Sources:**

- [Tobias Barthel, Emily Riehl, On the construction of functorial factorizations for model categories, Algebr. Geom. Topol. 13 (2013), arXiv:1204.5427](https://arxiv.org/abs/1204.5427)

### The cube definition of homotopy groups makes them abelian from dimension two

**Remember:** Two directions of gluing cubes force one commutative sum.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 3: graduate.

**Definition.** Define πₙ(X) with maps from the cube \[0,1\]ⁿ to X that send the whole boundary to the base point. Two maps are in the same class if one deforms into the other while the boundary stays at the base point. Add two classes by placing their cubes side by side along one coordinate. The usual sphere definition uses based maps from the n-sphere, and its sum needs a map that pinches the sphere.

**Problem.** For n ≥ 2, the homotopy group πₙ(X) is abelian.

**How the definition helps.** With cubes, the sum can be formed along any of n directions, and for n ≥ 2 this freedom forces commutativity. Wikipedia gives the cube definition and states that πₙ is abelian for n ≥ 2, by the Eckmann–Hilton argument. In our own account, sums along two directions satisfy the interchange law, because a square split into four parts can be read in two orders. The Eckmann–Hilton argument says that two operations with a shared unit and this law are equal and commutative. The work moves to checking that the sum is well defined on classes and has the constant map as unit. A short further argument shows that the cube and sphere definitions give the same group, by collapsing the boundary of the cube to a point.

**Wikipedia:** [Homotopy group](https://en.wikipedia.org/wiki/Homotopy_group). It says: “Equivalently, define πₙ(X) to be the group of homotopy classes of maps”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Defining stable homotopy groups as a colimit makes suspension an isomorphism

**Remember:** Suspending first only skips the first term of the sequence.

*True by definition.* MSC 55Q10 (Stable homotopy groups), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a based space X, the stable homotopy group πₙˢ(X) is the colimit of the groups πₙ₊ₖ(ΣᵏX) under suspension, where Σ is reduced suspension. In this colimit, two classes are equal if they become equal after enough suspensions. For a CW complex, one can instead use a single group πₙ₊ₖ(ΣᵏX) with k large enough.

**Problem.** Suspension gives a natural isomorphism from πₙˢ(X) to πₙ₊₁ˢ(ΣX).

**How the definition helps.** With the colimit definition, the sequence for ΣX is the sequence for X without its first term. Dropping a first term does not change a colimit. The nLab gives this colimit definition. In our own account, the k-th term for ΣX is πₙ₊₁₊ₖ(Σᵏ⁺¹X), which is the (k+1)-th term for X. With the single-group definition, the result needs the Freudenthal suspension theorem. Hatcher proves it and states the case of spheres as Corollary 4.24. The work moves into Freudenthal's theorem, which shows that the single-group and colimit definitions agree.

**nLab:** [homotopy group of a spectrum](https://ncatlab.org/nlab/show/homotopy+group+of+a+spectrum). It says: “Given a pointed topological space X, its stable homotopy groups are the colimit of ordinary homotopy groups of its reduced suspensions”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Chapter 4, Corollary 4.24](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Suspension spectra defined by adjunction give stable homotopy exact sequences

**Remember:** Suspension spectra preserve cofibers, and cofibers in spectra are also fibers.

*True by definition. Confidence: medium.* MSC 55Q10 (Stable homotopy groups), 55P42, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** The suspension spectrum of a pointed space is its image under the left adjoint to the functor taking a spectrum’s zeroth space. Stable homotopy groups of the space are the homotopy groups of its suspension spectrum. The classical version takes the colimit of homotopy groups of successive suspensions, with the degree shifted at each step.

**Problem.** For a pointed CW pair A ⊆ X, the stable homotopy groups of A, X and X/A form a long exact sequence.

**How the definition helps.** The adjoint definition sends the pushout that forms X/A straight to a pushout of spectra. This gives a cofiber sequence, one in which the third term is the quotient in the homotopy sense. In spectra it is also a fiber sequence, so the usual long exact homotopy sequence applies (our own explanation). The main work is proving that spectra form a stable category and that the suspension spectrum gives the classical colimit groups. The direct classical proof instead uses homotopy excision after enough suspensions.

**nLab:** [stabilization](https://ncatlab.org/nlab/show/stabilization). It says: “Under mild conditions, notably when C is a presentable (∞,1)-category, this functor has a left adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Defining Whitehead products by attaching maps makes them obstructions to extension

**Remember:** The attaching map is the only obstruction to filling the top cell.

*True by definition.* MSC 55Q15 (Whitehead products and generalizations), 55S36. arXiv math.AT. Level 3: graduate.

**Definition.** The product Sᵐ × Sⁿ is the wedge Sᵐ ∨ Sⁿ with one cell of dimension m + n attached by a map w. The wedge is the two spheres joined at their base points. For based maps f and g from these spheres to X, the Whitehead product \[f, g\] is the class of (f ∨ g) ∘ w. Another definition, the Samelson product, uses a commutator of maps into the loop space.

**Problem.** For m, n ≥ 1, the map f ∨ g on the wedge extends to Sᵐ × Sⁿ exactly when \[f, g\] = 0.

**How the definition helps.** With this definition, the claim is a basic fact: a map extends over an attached cell exactly when it kills the attaching map. That is, its composite with the attaching map is nullhomotopic, which means it deforms to a constant map. The nLab gives the attaching map that builds the product from the wedge. In our own account, an extension over the top cell is a map from the disk that extends (f ∨ g) ∘ w. Such a map is a nullhomotopy. The work moves to identifying the attaching map w and to comparing this definition with the Samelson product.

**nLab:** [Whitehead product](https://ncatlab.org/nlab/show/Whitehead+product). It says: “as the result of a cell attachment to the wedge sum”

**Sources:** none listed. No primary source with a working link was found.

### Cup-product Hopf invariants scale by d² under degree-d target maps

**Remember:** Scaling the lower generator by d scales its square by d².

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f: S²ⁿ⁻¹ → Sⁿ, form the mapping cone C(f) by attaching a 2n-dimensional disk to Sⁿ along f. Its cohomology has generators α in degree n and β in degree 2n. The Hopf invariant H(f) is the integer with α ∪ α = H(f) β, where ∪ is the cup product. The geometric definition is the linking number of the inverse images of two regular values.

**Problem.** Let n ≥ 2 and let g: Sⁿ → Sⁿ have degree d. Then H(g ∘ f) = d² H(f).

**How the definition helps.** With the cup-product definition, g induces a map of mapping cones C(f) → C(g ∘ f) whose action on cohomology is simple. In our own account, this map is g on Sⁿ and the identity on the disk. So it sends the degree-n generator to dα and the degree-2n generator to β. Cup products are natural, so (dα) ∪ (dα) = H(g ∘ f) β, which gives H(g ∘ f) = d² H(f). Hatcher sets this formula as an exercise in §4.B. The work moves to comparing the cup-product definition with the linking-number definition.

**nLab:** [Hopf invariant](https://ncatlab.org/nlab/show/Hopf+invariant). It says: “there exists an integer HI(f) which expresses the cup product square”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.B, Exercise 1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### The cup-square Hopf invariant vanishes for odd target dimensions

**Remember:** In odd degree, reversing the cup square changes its sign.

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For n &gt; 1, attach a 2n-dimensional disk to the n-sphere along the map φ from the (2n−1)-sphere. The resulting space has integral cohomology generators α in degree n and β in degree 2n, with β fixed by the disk orientation. The Hopf invariant h(φ) is the integer such that α ⌣ α = h(φ)β, where ⌣ is the cohomology product. The geometric definition links the preimages of two regular values of a smooth representative.

**Problem.** Show that the Hopf invariant of φ is zero when the target sphere has odd dimension.

**How the definition helps.** In our own short proof, the cup-square definition gives zero because an odd-degree class has a square equal to its own negative. Thus 2h(φ)β = 0. The group generated by β is ℤ, so h(φ) = 0. The geometric definition instead needs a sign rule for exchanging the two preimages. The work shifts to computing the cohomology groups and proving that the cup-square and linking definitions agree.

**Wikipedia:** [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The integer h(φ) is the Hopf invariant of the map φ.”

**Sources:**

- [Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. Mathematische Annalen 104, 637–665.](https://doi.org/10.1007/BF01457962)

### Defining homotopy fibers as pullbacks makes base change preserve them

**Remember:** Pulling back to a point in two steps gives the same fiber.

*True by definition.* MSC 55R05 (Fiber spaces in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** Define the homotopy fiber of g: C → D over a point d as the homotopy pullback of g along the inclusion of d. A homotopy pullback of two maps is the space of pairs of points with a path between their images. In homotopy type theory this is the type of a point and a path, written fib. Another construction replaces g by a fibration and takes its ordinary fiber.

**Problem.** Suppose a square with maps f: A → B, g: C → D and h: B → D is a homotopy pullback. Then for each b in B, the homotopy fiber of f over b is equivalent to the homotopy fiber of g over h(b).

**How the definition helps.** With fibers defined as pullbacks, the claim is the pasting law: two pullback squares placed side by side form a pullback square. The fiber of f over b is the pullback along b, and pasting it to the given square gives the pullback of g along h(b). The HoTT book states the result as a lemma, and the nLab uses the pasting law for homotopy pullbacks in the same way. The work moves into the pasting law and, for spaces, into the comparison with fibration replacement.

**nLab:** [homotopy pullback](https://ncatlab.org/nlab/show/homotopy+pullback). It says: “which implies the claim by the pasting law for (homotopy) pullbacks.”

**Paper or page:** [Lemma 7.8.](https://hott.github.io/book/hott-online-82-g578b85c.pdf). It says: “is a pullback square and let b : B. Then fib<sub>f</sub>(b) ≃ fib<sub>g</sub>(h(b)).”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory, Chapter 7](https://hott.github.io/book/hott-online-82-g578b85c.pdf)

### Defining Serre fibrations by disk lifting gives lifting for all CW complexes

**Remember:** Lift one disk at a time.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** A Serre fibration is a map p: E → B that lifts each homotopy of a disk Dⁿ, given a lift at time 0. In other words, p has the right lifting property against each inclusion Dⁿ × {0} → Dⁿ × \[0,1\]. Another definition asks for the same lifting for every CW complex, a space built by attaching disks along their boundaries.

**Problem.** A Serre fibration lifts every homotopy of a CW complex, once a lift at time 0 is given.

**How the definition helps.** With the disk definition, the result follows from general facts about lifting properties. The nLab proves, by closure properties of lifting, that a Serre fibration lifts against all retracts of cell complexes built from these inclusions. The maps that p lifts against are closed under gluing, under composing in a sequence, and under retracts. In our own account, for a CW complex X the inclusion X × {0} → X × \[0,1\] is such a relative cell complex. Each cell Dⁿ × \[0,1\] is attached along Dⁿ × {0} ∪ ∂Dⁿ × \[0,1\]. That pair is homeomorphic to the pair (Dⁿ × \[0,1\], Dⁿ × {0}). The work moves into the closure properties and this homeomorphism.

**nLab:** [Serre fibration](https://ncatlab.org/nlab/show/Serre+fibration). It says: “A Serre fibration has the right lifting property against all retracts”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.2](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Schedules glue Hurewicz fibrations over numerable covers

**Remember:** A schedule is a timetable that says which open set a path is in.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55R70. arXiv math.AT. Level 3: graduate.

**Definition.** A schedule is a finite list of pairs (label, length), where each label names an open set of a cover. A path fits a schedule if it spends each successive time interval inside the named open set. A Hurewicz connection for p : E → B is a continuous rule that lifts every path in B, once one gives a starting point in E.

**Problem.** Prove the globalisation theorem. Let B have a locally finite cover by numerable open sets (open sets that come from a partition of unity). If p : Y → B restricts to a Hurewicz fibration (a map with the homotopy lifting property for all spaces) over each set of the cover, then p itself is a Hurewicz fibration.

**How the definition helps.** A continuous timetable for each path lets one join the local path lifts piece by piece. The schedule theorem of Dyer and Eilenberg says that one can choose, continuously over all paths, how to cut a path into pieces that each lie in one open set of the cover. A map is a Hurewicz fibration exactly when it has a Hurewicz connection. With such a timetable, one applies the local connections piece by piece to get a global connection. The hard work is the schedule theorem itself, which uses the locally finite numerable cover.

**nLab:** [schedule](https://ncatlab.org/nlab/show/schedule), [Hurewicz connection](https://ncatlab.org/nlab/show/Hurewicz+connection). It says: “The original motivation for the notion of schedules was to prove the globalisation theorem for (Hurewicz) fibrations.”

**Sources:**

- [Eldon Dyer, Samuel Eilenberg, Globalizing fibrations by schedules, Fundamenta Mathematicae 130 (1988) 125–136](https://doi.org/10.4064/fm-130-2-125-136)

### The homotopy kernel of a homotopy kernel is a loop space

**Remember:** Pull back the point along itself up to homotopy, and you get loops.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P35, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** An (∞,1)-category is a category in which morphisms have homotopies between them, these homotopies have homotopies, and so on. In such a category, the homotopy fiber of a map f : A → B is the homotopy pullback of the point \* → B along f. (A homotopy pullback is a pullback whose square commutes only up to a chosen homotopy.) Another name for the homotopy fiber is the homotopy kernel, written ker(f). The loop space ΩB is the homotopy fiber of the map \* → B.

**Problem.** Every map f : A → B should continue to the left in a long fiber sequence … → ΩA → ΩB → ker(f) → A → B. This sequence gives the long exact sequence of homotopy groups.

**How the definition helps.** With homotopy pullbacks, the kernel of a kernel is a loop space, so the sequence never stops. For ordinary kernels, the kernel of a kernel is trivial, so short exact sequences stop. With the homotopy pullback as the definition, you compute the homotopy kernel of ker(f) → A by pasting two homotopy pullback squares side by side. The outer rectangle is the square that defines ΩB. So the pasting law gives ker(ker(f)) ≃ ΩB, and repeating this step gives the long sequence. The pasting law says: if the right square is a homotopy pullback, then the left square is one exactly when the outer rectangle is one. The nLab notes one subtlety: ker(ker(f)) is ΩB only up to a reversal of the direction of the loops. The real input is the pasting law for homotopy pullbacks.

**nLab:** [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “in contrast to the ordinary kernel of a kernel, which is necessarily trivial, the homotopy kernel of a homotopy kernel is typically far from trivial, but is a loop space object.”

**Sources:**

- [R. M. Switzer, Algebraic Topology — Homotopy and Homology, Springer (1975)](https://doi.org/10.1007/978-3-642-61923-6)

### The path model of homotopy fibers makes fibers over joined points equivalent

**Remember:** Extend the path to move the endpoint of a homotopy fiber.

*True by definition.* MSC 55R05 (Fiber spaces in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f: A → B and a point b of B, the homotopy fiber over b is the space of pairs (a, γ). Here a is a point of A, and γ is a path in B from f(a) to b. The other definition first replaces f by a fibration, a map with the homotopy lifting property, and then takes its ordinary fiber over b.

**Problem.** If a path joins two points b and b′ of B, then the homotopy fibers over b and b′ are homotopy equivalent.

**How the definition helps.** In the path model, a path δ from b to b′ acts directly, because we can append δ to the end of each path γ. Wikipedia gives this pair model and states the result as a consequence of the definition. In our own account, appending the reverse of δ gives a map back. A path followed by its reverse deforms to a constant path, so the two maps are inverse up to homotopy. For a general fibration, the same result needs the homotopy lifting property to move fibers along δ. The work moves to showing that the fiber of every fibration that replaces f is homotopy equivalent to the pair model.

**Wikipedia:** [Homotopy fiber](https://en.wikipedia.org/wiki/Homotopy_fiber). It says: “their homotopy fibers are homotopy equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Numerable bundles let the classification theorems work over every base space

**Remember:** Numerable means the trivializing cover comes with a partition of unity.

*Rules out counterexamples. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R10. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An open cover is numerable if it has a subordinate partition of unity. A fibre bundle is numerable if it is locally trivial over a numerable open cover.

**Problem.** Show that classifying spaces classify bundles over any base space. Also show that bundle projections are Hurewicz fibrations (maps with the homotopy lifting property for all spaces) over any base space.

**How the definition helps.** Dold's condition asks for a partition of unity only where the proofs use one. The usual proofs assume a paracompact base, where every open cover is numerable. Dold asks for a partition of unity only on the cover that trivializes the bundle, not on every open cover of the base. With this condition, the theorems hold for numerable bundles over any space. The nLab notes that the results generalize only to numerable bundles, not to all bundles. It names no specific counterexample.

**nLab:** [numerable fiber bundle](https://ncatlab.org/nlab/show/numerable+fiber+bundle), [numerable open cover](https://ncatlab.org/nlab/show/numerable+open+cover). It says: “For the theory of fiber bundles to be well-behaved one typically needs to restrict to those that have a local trivialization not just over any open cover but over a numerable open cover”

**Sources:**

- [Albrecht Dold, Partitions of unity in the theory of fibrations, Ann. of Math. 78 (1963) 223–255](https://doi.org/10.2307/1970341)

### The universal first Chern class classifies complex line bundles

**Remember:** An equivalence of the two target spaces identifies line bundles with cohomology classes.

*True by definition.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R40, 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** Infinite complex projective space BU(1) classifies complex line bundles by pullback of its universal line bundle. The space K(ℤ, 2) represents integral cohomology in degree two, so its maps represent those cohomology classes up to deformation. The universal first Chern class is the equivalence from BU(1) to K(ℤ, 2) with the sign fixed by the universal line bundle.

**Problem.** Show that the first Chern class identifies complex line bundles on a CW complex X with H²(X, ℤ).

**How the definition helps.** The universal definition gives a bijection because composition with an equivalence gives a bijection on homotopy classes of maps. In our own proof, a map to BU(1) classifies the line bundle and its composite to K(ℤ, 2) represents its class. The Euler-class definition instead needs a proof that its universal Euler class corresponds to the same map. The work lies in building both classifying spaces and showing that the universal first Chern class gives the equivalence. One uses the circle bundle over BU(1) with contractible total space to compute its homotopy groups.

**nLab:** [first Chern class](https://ncatlab.org/nlab/show/first+Chern+class). It says: “As a universal characteristic class, the first Chern class is the weak homotopy equivalence c₁ : BU(1) ≃→ K(ℤ,2).”

**Sources:** none listed. No primary source with a working link was found.

### Defining Thom spaces by compactification turns exterior sums into smash products

**Remember:** One point at infinity turns products into smash products.

*True by definition.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a vector bundle V over a compact Hausdorff base, define the Thom space Th(V) as the one-point compactification of the total space V. This adds one point at infinity. The disk model instead takes the unit disk bundle and collapses the unit sphere bundle to one point, which needs a choice of inner product.

**Problem.** Let V → X and W → Y be vector bundles over compact Hausdorff bases. Their exterior sum over X × Y has total space V × W. Its Thom space is homeomorphic to the smash product Th(V) ∧ Th(W), which collapses all pairs with a base point to one point.

**How the definition helps.** With the compactification definition, the claim is the general fact (V × W)⁺ ≅ V⁺ ∧ W⁺, where ⁺ adds a point at infinity. In our own account, a pair in V⁺ × W⁺ lies at infinity exactly when one of its coordinates is the point at infinity. Collapsing those pairs gives the smash product. This holds for all locally compact Hausdorff spaces. The nLab states that Th(V) models the one-point compactification for compact bases. The work moves to comparing the disk model with the compactification, by rescaling each fiber radially.

**nLab:** [Thom space](https://ncatlab.org/nlab/show/Thom+space). It says: “For X a compact topological space, Th(V) is a model for the one-point compactification of the total space V.”

**Sources:** none listed. No primary source with a working link was found.

### Naturality identifies characteristic classes with classes on the classifying space

**Remember:** Evaluate a natural class on the universal bundle to recover its defining value.

*True by definition.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a topological group G, and use a cell complex BG that classifies its principal bundles. A principal G-bundle has fibers on which G acts freely and transitively. Over spaces built from cells, all such bundles are pullbacks of the universal bundle over BG, along maps unique up to homotopy. A characteristic class assigns a cohomology class to each bundle and commutes with pullback.

**Problem.** Show that degree-k characteristic classes correspond to degree-k cohomology classes on BG, with fixed coefficients.

**How the definition helps.** The naturality definition makes one universal value sufficient because every bundle comes from the universal bundle by pullback. In our own proof, evaluate the characteristic class on that bundle to get a class on BG. Conversely, pull any class on BG back along each bundle's classifying map. Homotopy invariance makes the result independent of the choice of map. Unlike axioms for individual families of classes, this definition classifies all natural assignments at once. The work is building the universal bundle and proving that it classifies bundles.

**Wikipedia:** [Characteristic class](https://en.wikipedia.org/wiki/Characteristic_class). It says: “Once the cohomology H\*(BG) was calculated, once and for all, the contravariance property of cohomology meant that characteristic classes for the bundle would be defined in H\*(X) in the same dimensions.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Represented cohomology classifies operations by classes on Eilenberg–MacLane spaces

**Remember:** An operation is determined by its value on the universal class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A cohomology operation is a natural rule from one cohomology functor to another. For an abelian group π and n ≥ 1, K(π,n) is a connected space with homotopy group π in degree n and no others. In the represented definition, degree n cohomology with coefficients π consists of homotopy classes of maps to K(π,n).

**Problem.** Let π and G be abelian groups and let n and q be positive. On CW complexes, natural operations from degree n with coefficients π to degree q with coefficients G correspond to degree q classes on K(π,n).

**How the definition helps.** The represented definition gives each operation by evaluating it on the identity map of K(π,n), which is the universal class. Naturality gives its value on every other class by pulling back along the map representing that class. This is the Yoneda lemma. With the singular cochain definition, the work is proving representability and then computing the cohomology of the representing space. Serre’s mod 2 computation is an example of the latter step.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “by the Yoneda lemma, (non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Wikipedia:** [Cohomology operation](https://en.wikipedia.org/wiki/Cohomology_operation). It says: “Cohomology of CW complexes is representable by an Eilenberg–MacLane space, so by the Yoneda lemma a cohomology operation of type (n,q,π,G) is given by a homotopy class of maps K(π,n) → K(G,q).”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Representing cohomology by Eilenberg–MacLane spaces makes operations classes on K(G,m)

**Remember:** Evaluate the operation once, on the fundamental class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW complex X and m &gt; 0, represent Hᵐ(X; G) as the set of homotopy classes of maps X → K(G, m). Here K(G, m) is an Eilenberg–MacLane space, a space whose only nonzero homotopy group is G in degree m. The cochain definition uses cocycles modulo coboundaries instead.

**Problem.** Cohomology operations Hᵐ(−; G) → Hⁿ(−; H), meaning natural maps, correspond exactly to classes in Hⁿ(K(G, m); H). The correspondence sends an operation Θ to Θ(ι), where ι is the fundamental class of K(G, m).

**How the definition helps.** With the representing space, this is the Yoneda lemma, which fixes a natural map by its value on the identity map. The nLab states the bijection by the Yoneda lemma. Hatcher proves it as Proposition 4L.1, using CW approximation to reduce to CW complexes. Each class α is ϕ\*(ι) for a map ϕ: X → K(G, m), so Θ(α) = ϕ\*(Θ(ι)). Conversely, a class in Hⁿ(K(G, m); H) is a map to K(H, n), and composing with it gives an operation. The work moves to Theorem 4.57, which shows that maps to K(G, m) represent cohomology. The operations need not be additive.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “(non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Theorem 4.57](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)
- [Allen Hatcher, Algebraic Topology, §4.L, Proposition 4L.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### Truncation keeps lower cutoff

**Remember:** Once only lower groups matter, an earlier higher cutoff makes no difference.

*True by definition.* MSC 55S45 (Postnikov systems, \\(k\\)-invariants), 55P15. arXiv math.AT. Level 3: graduate.

**Definition.** Define n-truncation as the universal map from a space to an n-type, a homotopy type with no higher homotopy groups. The usual Postnikov construction instead attaches cells to kill groups above n without changing lower groups.

**Problem.** Truncating first at one nonnegative degree and then at another is equivalent to truncating once at the lower degree.

**How the definition helps.** In our own words, every type at the lower cutoff satisfies the higher cutoff too. In our own words, test maps to all types at the lower cutoff and apply the universal property twice. In our own account, the work moves to proving the universal property for the Postnikov construction.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “Under mild conditions there is for each n a universal way to send an arbitrary object A to its n-truncation”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Example 4.16 and §4.3, Postnikov Towers](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Closure-finiteness and the weak topology put compact sets in finite subcomplexes

**Remember:** C and W keep every compact set inside finitely many cells.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** In a CW complex, the boundary of each cell meets only finitely many cells (closure-finiteness). A subset is closed if and only if it meets each closed cell in a closed set (weak topology). The name CW stands for these two conditions.

**Problem.** Every compact subset of a CW complex lies in a finite subcomplex. So a map from a sphere, or a homotopy, only sees finitely many cells.

**How the definition helps.** The weak topology makes any set that picks one point from infinitely many cells closed and discrete, so it cannot lie in a compact set. With closure-finiteness, the finite set of cells that a compact set meets grows to a finite subcomplex. Our own example: the Hawaiian earring is a shrinking sequence of circles in the plane that touch at one point. Split into one point and infinitely many 1-cells, it is closure-finite and compact but meets infinitely many cells. This is because its topology is not the weak topology. Our own remark: this result lets homotopy groups of a CW complex be computed from its finite subcomplexes. What stays hard is the topology of products, which need not be a CW topology without extra conditions.

**Wikipedia:** [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “A compact subspace of a CW complex is always contained in a finite subcomplex.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Restricting to CW complexes makes Whitehead's theorem true

**Remember:** Built from cells, a space is known by its homotopy groups.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A CW complex is a space built by gluing balls (cells) of rising dimension along their boundary spheres. Each cell meets only finitely many other cells in its boundary (closure-finite). A set is closed when it meets each closed cell in a closed set (weak topology).

**Problem.** Whitehead's theorem says that a map between connected CW complexes which gives isomorphisms on all homotopy groups is a homotopy equivalence. A homotopy equivalence is a map with an inverse up to continuous deformation.

**How the definition helps.** The cell structure lets you build an inverse map one cell at a time, so isomorphisms on homotopy groups are enough. The Warsaw circle is the bad case that the restriction excludes. Our own description: it is a closed loop in the plane with one piece that oscillates like the curve sin(1/x). No continuous loop can go around it, so all its homotopy groups vanish, but it is not contractible. The theorem holds for every space homotopy equivalent to a CW complex (our own remark). Whitehead introduced CW complexes and proved this theorem in his 1949 papers. What stays hard is to know whether a given space has the homotopy type of a CW complex.

**Wikipedia:** [Whitehead theorem](https://en.wikipedia.org/wiki/Whitehead_theorem), [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “For example, the Warsaw circle, a compact subset of the plane, has all homotopy groups zero, but the map from the Warsaw circle to a single point is not a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Allowing subdivision lets every continuous map become simplicial up to homotopy

**Remember:** Cut the domain finely enough, and any map becomes simplicial.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 57Q55. arXiv math.AT. Level 3: graduate.

**Definition.** A simplicial map sends each vertex to a vertex and is linear on each simplex. A subdivision of a simplicial complex cuts its simplices into smaller simplices without changing the space. The theorem allows the domain to be subdivided before you look for a simplicial map.

**Problem.** Every continuous map between finite simplicial complexes is homotopic to a simplicial map from a subdivision of the domain. As a consequence, the homotopy group πₖ(Sⁿ) is zero when k is less than n.

**How the definition helps.** Subdivision makes the simplices of the domain as small as needed, so each one can be sent near a single vertex. Without subdivision the statement is false, since a map from a coarse complex can wrap around many simplices. Then the star of each vertex lands inside the star of a vertex of the target, the union of the open simplices that contain it. A map from Sᵏ to Sⁿ with k &lt; n becomes a simplicial map. For dimension reasons it misses a point, so it is homotopic to a constant map. What stays hard is to choose the subdivision, which depends on the map and not only on the spaces.

**Wikipedia:** [Simplicial approximation theorem](https://en.wikipedia.org/wiki/Simplicial_approximation_theorem). It says: “In short, the theorem says any continuous map between simplicial complexes is the geometric realization of a simplicial mapping up to homotopy and subdivision.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Building simplicial sets from nondegenerate simplices makes realizations CW complexes

**Remember:** Only simplices that are not repeats add cells.

*True by definition. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** A simplex of a simplicial set is degenerate if it comes from a lower-dimensional simplex by a degeneracy map, which repeats a vertex. The nLab notes that every monomorphism of simplicial sets, such as ∅ → K, is built by adjoining nondegenerate simplices step by step. Realization sends each such step to a gluing and sends Δ\[n\] to the disk Δⁿ. The direct definition glues all simplices, degenerate ones included, at once.

**Problem.** The geometric realization of a simplicial set is a CW complex with one n-cell for each nondegenerate n-simplex.

**How the definition helps.** Each step of the build attaches Δ\[n\] along its boundary, and realization turns this into attaching an n-cell along its boundary sphere. In our own account, realization keeps these gluings because it is a left adjoint. Hatcher builds the same cell structure directly, by first collapsing the degenerate simplices. The work moves to the Eilenberg–Zilber lemma, which says that each simplex is a degeneracy of exactly one nondegenerate simplex, in exactly one way. Hatcher proves this uniqueness in the same appendix.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “can be seen as the result of iteratively adjoining nondegenerate n-simplices.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Appendix, Simplicial CW Structures](https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf)

### Defining realization as a colimit-preserving extension makes it left adjoint to Sing

**Remember:** A map out of the gluing is a compatible family of singular simplices.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** Define the geometric realization \|K\| of a simplicial set K as the colimit-preserving extension of one rule. The rule sends the standard simplicial set Δ\[n\] to the topological simplex Δⁿ. The usual textbook definition glues one topological n-simplex for each n-simplex of K, with identifications from the face and degeneracy maps. The singular simplicial set Sing X has the continuous maps Δⁿ → X as its n-simplices.

**Problem.** Continuous maps \|K\| → X correspond naturally to simplicial maps K → Sing X.

**How the definition helps.** With the colimit definition, the adjunction is a formal case of the general nerve and realization construction, as the nLab states. In our own account, both sides are a family of maps Δⁿ → X, one for each simplex of K, that respects faces and degeneracies. With the concrete gluing as the definition, one must check that the quotient topology turns such families into continuous maps. The work moves to showing that the concrete gluing computes the colimit, which is what the quotient topology is for.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “Geometric realization is the special case of the general notion of nerve and realization that is induced from the standard cosimplicial topological space”

**Sources:** none listed. No primary source with a working link was found.

### Delta-complexes compute the homology of the torus with six simplices

**Remember:** Let faces repeat, and the torus needs only two triangles.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A Δ-complex is a space glued from simplices along face maps that obey the usual composition rule. Its combinatorial data is a Δ-set, also called a semi-simplicial set. Unlike a simplicial complex, a simplex need not be determined by its vertices. Two edges may share both end points, and one edge may have both ends at the same vertex.

**Problem.** Compute the homology groups of the torus by hand. The answer is ℤ in degree 0, ℤ² in degree 1 and ℤ in degree 2.

**How the definition helps.** Allowing repeated vertices shrinks the number of simplices, so the chain complex is small enough to compute by hand. The torus gets one vertex, three edges and two triangles, six simplices in total. A true simplicial complex for the torus needs at least 42 simplices. Simplicial homology works the same way for Δ-complexes, so nothing is lost. What stays hard is to prove that this homology agrees with singular homology, which is a separate theorem.

**Wikipedia:** [Delta set](https://en.wikipedia.org/wiki/Delta_set). It says: “It is worth highlighting that the minimum number of simplices needed to endow T² with the structure of a simplicial complex is 7 vertices, 21 edges, and 14 2-simplices, for a total of 42 simplices.”

**Sources:**

- [Samuel Eilenberg and J. A. Zilber, Semi-simplicial complexes and singular homology, Annals of Mathematics 51 (1950) 499–513](https://doi.org/10.2307/1969364)
- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Dowker's two complexes from one relation have the same homotopy type

**Remember:** Swap witnesses and vertices without changing the homotopy type.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 05E45. arXiv math.CO, math.AT. Level 3: graduate.

**Definition.** Let R be a relation between sets X and Y. The first Dowker complex has as faces the finite subsets of X whose members all relate to one common element of Y. The second complex swaps the roles of X and Y. A simplicial complex is a family of finite sets, called faces, closed under taking subsets.

**Problem.** The geometric realizations of the two Dowker complexes are homotopy equivalent. So they have the same shape up to continuous deformation.

**How the definition helps.** The common-partner rule makes each complex the nerve of a cover of the other, so the nerve theorem applies. In our own finite-case proof, cover the first complex by one simplex for each related y in Y, spanned by the elements related to y. A nonempty intersection of these simplices is again a simplex, so it is contractible. The nerve of a cover records which sets of members meet, and here that is exactly the second complex. The real work is in the nerve theorem, which says such a cover has the homotopy type of its nerve.

**Paper or page:** [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1), [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1). It says: “Given a relation on X × Y, we can construct two abstract simplicial complexes called Dowker complexes. The geometric realizations of these simplicial complexes are homotopically equivalent.”

**Sources:**

- [Dominic Desjardins Côté, Dowker Complexes and filtrations on self-relations, arXiv:2301.03739 (2023)](https://arxiv.org/abs/2301.03739v1)
- [Clifford H. Dowker, Homology Groups of Relations, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969768)

### Filling horns makes simplicial homotopy behave as it does for spaces

**Remember:** Every simplex with one face missing can be completed, as in a space.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Kan complex is a simplicial set X in which every horn Λᵏ\[n\] → X extends to a full simplex Δ\[n\] → X. The horn Λᵏ\[n\] is the boundary of the n-simplex with its k-th face removed. This is the extension condition.

**Problem.** Define homotopy groups of a simplicial set, and homotopy between simplicial maps, in a purely combinatorial way. They should behave as they do for spaces.

**How the definition helps.** Horn fillers supply the compositions that homotopy theory needs. For maps into a Kan complex, simplicial homotopy is an equivalence relation. Homotopy groups can be defined as classes of simplices whose boundary sits at the base point. The horn fillers give the composite of two such classes, and this composite is the group product. For a simplicial set that is not Kan, the nLab defines its homotopy groups as those of a Kan fibrant replacement (a Kan complex that it maps into by a weak equivalence). The real link to spaces is the theorem that these groups agree with the homotopy groups of the geometric realization.

**nLab:** [Kan complex](https://ncatlab.org/nlab/show/Kan+complex), [simplicial homotopy group](https://ncatlab.org/nlab/show/simplicial+homotopy+group), [simplicial homotopy](https://ncatlab.org/nlab/show/simplicial+homotopy). It says: “For such complexes, usually called Kan complexes, homotopy groups may be defined, and, further, the notion of homotopy between maps of an arbitrary semi-simplicial complex into a Kan complex is an equivalence relation.”

**Sources:**

- [Daniel M. Kan, On c.s.s. complexes, American Journal of Mathematics 79 (1957) 449–476](https://doi.org/10.2307/2372558)

### For the décalage, the fibration property is a single horn filler

**Remember:** Shift a simplicial set down one degree to get its paths ending at a vertex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT. Level 3: graduate.

**Definition.** The décalage Dec₀ X of a simplicial set X is X with its last face and degeneracy maps removed and the degrees shifted down by one. So the n-simplices of Dec₀ X are the (n+1)-simplices of X. An n-simplex of Dec₀ X is a map to X from the cone Δ\[n\] ⋆ Δ\[0\] = Δ\[n+1\]. Here ⋆ is the join, which adds one new vertex joined to every simplex.

**Problem.** For a Kan complex X, replace the inclusion of the vertices X₀ → X by a Kan fibration. A Kan complex is a simplicial set in which every horn (a simplex with one face and its interior missing) has a filler, and a Kan fibration is the relative version of this.

**How the definition helps.** A lifting problem for the décalage is a single horn-filling problem in X, and a Kan complex can solve it. The last face map Dec₀ X → X is a Kan fibration when X is a Kan complex, and Dec₀ X deformation retracts onto the discrete set X₀. The cone Δ\[n\] ⋆ Δ\[0\] is just Δ\[n+1\]. So a horn-lifting problem against Dec₀ X → X is the same as filling one (n+1)-dimensional horn in X. The usual path space, the pullback of Xᴵ → X along X₀ → X, uses a larger cone made from the cylinder Δ\[n\] × Δ\[1\]. That the décalage proof is shorter is our reading; the nLab says only that the décalage is "often more convenient".

**nLab:** [decalage](https://ncatlab.org/nlab/show/decalage). It says: “As a result, the décalage construction is often more convenient than forming X<sup>I</sup> ×<sub>X</sub> X<sub>0</sub>.”

**Sources:**

- [Danny Stevenson, Décalage and Kan's simplicial loop group functor, Theory and Applications of Categories 26 (2012) no. 28, 768–787, arXiv:1112.0474](https://arxiv.org/abs/1112.0474)

### Good open covers make the nerve theorem true

**Remember:** A good cover has no holes in its pieces or in their overlaps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 54D20. arXiv math.AT. Level 3: graduate.

**Definition.** A good open cover of a space X is an open cover in which every set is contractible. Every inhabited (nonempty) finite intersection of the sets must also be contractible.

**Problem.** The homotopy type of a paracompact space should be the geometric realization of the nerve of an open cover, at least for a suitable kind of cover. The nerve is the simplicial set with one simplex for each nonempty finite intersection of the sets.

**How the definition helps.** If all the pieces and all their overlaps are contractible, the nerve loses no information about their shape. With this condition the nerve theorem holds: the realization of the nerve is homotopy equivalent to X. The proof uses partitions of unity. For a general open cover, the nerve forgets the topology of the pieces and of their overlaps, so the statement needs the condition. Our own example: cover a circle by two arcs that meet in two arcs, and the nerve is an interval. Good covers exist on paracompact smooth manifolds, which is a separate result (de Rham, Weil).

**nLab:** [nerve theorem](https://ncatlab.org/nlab/show/nerve+theorem), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “The nerve theorem asserts that the homotopy type of a sufficiently nice topological space is encoded in the Čech nerve of a good open cover”

**Sources:**

- [André Weil, Sur les théorèmes de de Rham, Commentarii Mathematici Helvetici 26 (1952) 119–145](https://doi.org/10.1007/bf02564296)
- [Karol Borsuk, On the imbedding of systems of compacta in simplicial complexes, Fundamenta Mathematicae 35 (1948) 217–234](https://doi.org/10.4064/fm-35-1-217-234)

### The homotopy hypothesis is a tautology or a theorem, depending on definitions

**Remember:** Define ∞-groupoids as spaces, and 'they are spaces' says nothing new.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50, 55P15. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** One option defines an ∞-groupoid as a topological space, taken up to weak homotopy equivalence. A second option defines an ∞-groupoid as a Kan complex. A Kan complex is a simplicial set in which every horn has a filler. A horn is the boundary of a simplex with one face removed, and a filler extends it to the full simplex.

**Problem.** The homotopy hypothesis says that ∞-groupoids are equivalent to topological spaces up to weak homotopy equivalence. The fundamental ∞-groupoid of a space gives the equivalence.

**How the definition helps.** The definition decides whether the hypothesis is a tautology, a theorem or an open problem. If an ∞-groupoid is by definition a space up to weak homotopy equivalence, the hypothesis is a tautology. With Kan complexes, the hypothesis becomes Quillen's theorem that geometric realization and the singular complex give a Quillen equivalence (an equivalence of homotopy theories) between topological spaces and simplicial sets. The nLab calls this proof non-trivial but fairly tractable, and algebraic Kan complexes also have a proof. For other algebraic definitions, such as Trimble ∞-groupoids, the nLab says it is unclear how to prove the hypothesis. For Grothendieck ∞-groupoids, Henry and Lanari reduced it to a conjecture. That conjecture is proved only up to dimension 3.

**nLab:** [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis), [Kan complex](https://ncatlab.org/nlab/show/Kan+complex). It says: “For instance there is some justification for defining an ∞-groupoid to be equivalently a topological space considered modulo weak homotopy equivalence (see at classical model structure on topological spaces). For this definition the homotopy hypothesis is of course a tautology.”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)
- [Simon Henry, Edoardo Lanari, On the homotopy hypothesis in dimension 3, Theory Appl. Categ. 39 (2023) 735–768, arXiv:1905.05625](https://arxiv.org/abs/1905.05625)

### Defining homotopy limits as derived functors makes them homotopy invariant

**Remember:** A derived functor treats weak equivalences as isomorphisms before it computes.

*True by definition.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 18N40, 18A30. arXiv math.AT. Level 3: graduate.

**Definition.** The homotopy category formally turns weak equivalences into isomorphisms. For diagrams, a weak equivalence means a map that is a weak equivalence at every entry. The homotopy limit is the right derived functor of the ordinary limit, taken with respect to these weak equivalences. Unlike the ordinary limit, this derived functor acts on homotopy categories.

**Problem.** Where the derived functors exist, homotopy limits and colimits send weak equivalences of diagrams to isomorphisms in the homotopy category. Ordinary pushouts can fail this test. Gluing two disks along their common boundary gives a sphere, but replacing both disks by points gives a point (our own example).

**How the definition helps.** The derived definition makes invariance automatic because the input maps are already isomorphisms in the domain. A functor preserves isomorphisms. An explicit construction, such as the double mapping cylinder for a homotopy pushout, needs its own invariance proof. The work moves into proving the derived functor exists and that an explicit construction computes it.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “The homotopy limit of a functor F : D → C is, if it exists, the image of F under the right derived functor of the limit functor”

**Wikipedia:** [Homotopy colimit and limit](https://en.wikipedia.org/wiki/Homotopy_colimit_and_limit). It says: “if one (or more) of the spaces used to form the pushout is replaced by a weakly equivalent space, the pushout is not guaranteed to stay weakly equivalent. The homotopy pushout rectifies this defect.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Smash products are associative in a convenient category of spaces

**Remember:** Smash is a quotient of a product, and cartesian closed products keep quotients.

*Rules out counterexamples.* MSC 55U40 (Topological categories, foundations of homotopy theory), 54D50, 18F60. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** For pointed spaces A and B, the smash product A ∧ B is the quotient (A × B)/(A ∨ B). It is the product with the wedge A × {b₀} ∪ {a₀} × B collapsed to one point. A convenient category of spaces, such as compactly generated spaces, is one that is cartesian closed. That means every pair of spaces has a mapping space with the exponential law.

**Problem.** The smash product is associative: A ∧ (B ∧ C) ≅ (A ∧ B) ∧ C.

**How the definition helps.** In a cartesian closed category, A ∧ (−) is a left adjoint, so it keeps quotients, and associativity follows. In the category Top of all spaces, the natural map A ∧ (B ∧ C) → (A ∧ B) ∧ C is a homeomorphism only under extra conditions. For example, it is a homeomorphism when A and C are locally compact Hausdorff; in general associativity fails. In a cartesian closed category of pointed spaces, A ∧ (−) preserves the quotient that defines B ∧ C, so associativity holds for all objects. The cost is that products and quotients must be taken in the convenient category, so they can differ from those in Top. The nLab page does not name an explicit counterexample in Top.

**nLab:** [smash product](https://ncatlab.org/nlab/show/smash+product). It says: “Associativity fails in general for the category Top of all topological spaces; however, it is satisfied for pointed objects in any convenient category of topological spaces, since such a category is cartesian closed.”

**Sources:**

- [Norman Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)

### Three axioms give the properties of topological complexity and its relatives

**Remember:** Prove three axioms once, and every variant inherits all the properties.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55M30 (Lyusternik-Shnirel'man category of a space, topological complexity à la Farber, topological robotics (topological aspects)), 55S40. arXiv math.AT. Level 4: research.

**Definition.** The sectional category of a map is the least number of open sets, minus one, that cover the base with local sections. Topological complexity of a space is the sectional category of its path fibration, and it measures motion planning. The paper builds all these invariants from three simple axioms. It also defines a lifting category, which has all three invariants as special cases.

**Problem.** Sectional category, topological complexity and homotopic distance have many variants: pointed, fibrewise, equivariant, or algebraic. Each variant needs the same basic properties proved again.

**How the definition helps.** With the lifting category defined by three axioms, a property proved from the axioms holds for every variant at once. The paper says the other properties then follow without further topology. The work moves into checking the three axioms for each variant (our own).

**Paper or page:** [Axiomatic Sectional category, Topological complexity, and Homotopic distance](https://arxiv.org/abs/2503.06969). It says: “Many of the properties of sectional category, topological complexity and homotopic distance are in fact derived from a small number of basic properties, which, once established, lead to all the others without further recourse to topology.”

**Sources:**

- [Jean-Paul Doeraene, Mohammed El Haouari, Axiomatic Sectional category, Topological complexity, and Homotopic distance, arXiv:2503.06969 (2025)](https://arxiv.org/abs/2503.06969)

### Weaker pseudocycles represent exactly the Borel–Moore homology

**Remember:** Weaken pseudocycles, and they match Borel–Moore homology exactly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 57R95. arXiv math.AT, math.SG. Level 4: research.

**Definition.** A pseudocycle is a smooth map from a manifold whose limit set at infinity is small. The limit set must have dimension at least two less than the manifold. Borel–Moore homology is homology built from locally finite chains, so it suits noncompact spaces. The paper weakens the conditions on pseudocycles and on their equivalence.

**Problem.** Find geometric objects that represent all Borel–Moore homology classes of a manifold. Each class should come from exactly one equivalence class of these objects.

**How the definition helps.** The weaker conditions let pseudocycles be noncompact, so they match the locally finite chains of Borel–Moore homology (our own reading). With them, a natural isomorphism to Borel–Moore homology can be stated. Pseudocycles are used in symplectic topology to count curves, so this gives a geometric home for such counts on noncompact spaces (our own). The work moves into the construction of the natural isomorphism.

**Paper or page:** [Pseudocycles for Borel-Moore Homology](https://arxiv.org/abs/2209.10036). It says: “We define weaker versions of the standard notions of pseudocycle and pseudocycle equivalence and then describe a natural isomorphism between the set of equivalence classes of these weaker pseudocycles and the Borel-Moore homology.”

**Sources:**

- [Spencer Cattalani, Aleksey Zinger, Pseudocycles for Borel-Moore Homology, arXiv:2209.10036 (2022)](https://arxiv.org/abs/2209.10036)

### In a cohesive ∞-topos, every differential cohomology theory has the hexagon

**Remember:** Cohesion builds the hexagon in for you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 18N60, 53C08. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Differential cohomology combines a topological cohomology class with differential-form data, such as the curvature of a connection. Here it is defined as the intrinsic cohomology of stable homotopy types in a cohesive (∞,1)-topos. A cohesive topos is a setting for homotopy theory where each object also has a smooth structure, for example sheaves of spectra on the site of smooth manifolds. Two operations of cohesion, the shape modality and the flat modality, give the maps to the underlying topological classes and to the flat classes.

**Problem.** Every differential cohomology theory, such as Deligne cohomology, Cheeger–Simons characters and differential K-theory, should fit in the differential cohomology hexagon. The hexagon is a diagram of two fibre sequences that link curvature, characteristic class, flat classes and forms. The different models of each theory should also agree.

**How the definition helps.** With this definition, the hexagon is a general theorem and not a separate fact for each theory. Mathematicians first saw the hexagon case by case: Simons and Sullivan found it for ordinary differential cohomology and for differential K-theory. Bunke, Nikolaus and Völkl showed that every stable homotopy type in a cohesive ∞-topos sits in such a hexagon. Simons and Sullivan also showed that, for ordinary differential cohomology, the exact sequences determine the theory up to a unique isomorphism, so all models agree. The content is in these theorems, and the definition only makes them uniform.

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology), [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “It is therefore natural to define differential cohomology to be the intrinsic cohomology of cohesive (∞,1)-toposes.”

**Sources:**

- [Ulrich Bunke, Thomas Nikolaus, Michael Völkl, Differential cohomology theories as sheaves of spectra, J. Homotopy Relat. Struct. 11 (2016) 1–66, arXiv:1311.3188](https://arxiv.org/abs/1311.3188)
- [James Simons, Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology, J. Topology 1 (2008) 45–56, arXiv:math/0701077](https://arxiv.org/abs/math/0701077)
- [M. J. Hopkins, I. M. Singer, Quadratic functions in geometry, topology, and M-theory, J. Differential Geom. 70 (2005) 329–452, arXiv:math/0211216](https://arxiv.org/abs/math/0211216)

### Ephemeral modules are exactly those at interleaving distance zero

**Remember:** Modules that die instantly are invisible to the interleaving distance.

*True by definition. Confidence: medium.* MSC 55N31 (Persistent homology and applications, topological data analysis), 06B35. arXiv math.AT, math.GN. Level 4: research.

**Definition.** A persistence module over a continuous poset is ephemeral when its map from x to y is zero whenever x is way below y. In a continuous poset, x is way below y when every directed set with a join above y has an element above x. Scott sheaves are sheaves for the Scott topology. Its open sets are the upward-closed sets U such that every directed set whose join lies in U meets U.

**Problem.** Suppose the family of translations that defines the interleaving distance satisfies three conditions from the paper. Then the distance from a module M to the zero module is zero exactly when M is ephemeral. For Scott sheaves, the distance to zero is zero only for the zero sheaf.

**How the definition helps.** An ephemeral module is defined so that every shift kills it, so its interleaving distance to zero is zero almost by definition (our own). The paper shows that the quotient by ephemeral modules is equivalent to the category of Scott sheaves. On Scott sheaves, the distance to zero then detects the zero sheaf. So the work moves into that equivalence of categories. The interleaving distance is otherwise only an extended pseudometric on modules (our own).

**Paper or page:** [Ephemeral Modules and Scott Sheaves on a Continuous Poset](https://arxiv.org/abs/2411.16235). It says: “dₐ(M, 0) = 0 if and only if M is ephemeral; dσ(ℱ, 0) = 0 if and only if ℱ = 0”

**Sources:**

- [Manu Harsu, Eero Hyry, Ephemeral Modules and Scott Sheaves on a Continuous Poset, arXiv:2411.16235 (2024)](https://arxiv.org/abs/2411.16235)

### Möbius homology makes the persistence diagram an Euler characteristic

**Remember:** The persistence diagram is the shadow of a homology theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N31 (Persistent homology and applications, topological data analysis), 06A07. arXiv math.AT, math.CO. Level 4: research.

**Definition.** Möbius homology is a homology theory for representations of a finite poset in an abelian category. Its Euler characteristic, the alternating sum of the ranks of its groups, equals the Möbius inversion of the dimension function of the representation.

**Problem.** Over a general finite poset, a persistence module need not split into intervals. So the persistence diagram needs a definition that still works and still has structure.

**How the definition helps.** With the diagram defined by Möbius inversion, it becomes the Euler characteristic of a homology theory, so it gains extra homological structure. The paper then proves a homological version of Rota's Galois connection theorem and uses it to get results on diagrams. Over general posets, modules can be indecomposable without being intervals, so the barcode approach fails (our own). The Euler characteristic can lose information, so the homology groups can give a finer invariant (our own).

**Paper or page:** [Möbius Homology](https://arxiv.org/abs/2307.01040). It says: “We prove that, under a suitable definition, the persistence diagram arises as an Euler characteristic over a poset of intervals, and thus Möbius homology provides a categorification of the persistence diagram.”

**Sources:**

- [Amit Patel, Primoz Skraba, Möbius Homology, arXiv:2307.01040 (2025)](https://arxiv.org/abs/2307.01040)

### q-tame modules keep diagram stability without pointwise finite dimension

**Remember:** Ask for finite rank of maps, not finite dimension of spaces.

*Rules out counterexamples.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 4: research.

**Definition.** A persistence module is q-tame when every map from one parameter s to a strictly later parameter t has finite rank. The vector spaces themselves may be infinite-dimensional.

**Problem.** Two δ-interleaved q-tame persistence modules have persistence diagrams with a δ-matching. So the bottleneck distance between their diagrams is at most δ.

**How the definition helps.** Finite ranks are all that a persistence diagram uses, so the q-tame condition is exactly enough to define the diagram and prove stability. It includes the persistent homology of every compact metric space under the Vietoris–Rips and Čech constructions, where the spaces can be infinite-dimensional (our own). It excludes modules with an infinite-rank map, which have no diagram with finite multiplicities (our own). The proof of the matching still needs the interpolation argument of Chazal and others.

**Paper or page:** [Persistent Stanley–Reisner Theory](https://arxiv.org/abs/2503.23482). It says: “Let 𝕌 and 𝕍 be q-tame persistence modules that are δ-interleaved. Then there exists a δ-matching between the multisets dgm(𝕌) and dgm(𝕍).”

**Sources:**

- [Persistent Stanley–Reisner Theory, arXiv:2503.23482 (2025)](https://arxiv.org/abs/2503.23482)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)
- [Frédéric Chazal, Vin de Silva, Marc Glisse, Steve Oudot, Persistence modules, in The Structure and Stability of Persistence Modules, SpringerBriefs in Mathematics (2016) 15–29](https://doi.org/10.1007/978-3-319-42545-0_2)

### A new cup product lets synthetic cohomology be formally a graded ring

**Remember:** A better cup product turns a stuck proof into a formalised ring.

*Makes the theorem clean to state or prove.* MSC 55N45 (Products and intersections in homology and cohomology), 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In homotopy type theory, the cohomology of a type A in degree n is built from maps from A into the Eilenberg–MacLane type K(G,n). Homotopic maps count as the same class. The cup product is a map K(G,n) × K(G,m) → K(G,n+m). The paper gives a new definition of this map that is easier to compute with.

**Problem.** Show in a proof assistant that the cohomology groups, with the cup product, form a graded commutative ring. This means associativity, unit laws and graded commutativity.

**How the definition helps.** The new cup product is easier to compute with, so the ring laws become checkable (our own reading). The abstract says that the new definitions greatly simplify many earlier proofs. This lets the full set of ring axioms be formalised, for the first time according to the paper. Earlier definitions made the proofs of graded commutativity and associativity very long (our own). The hard work moves into the theory of the Eilenberg–MacLane types (our own).

**Paper or page:** [Computational Synthetic Cohomology Theory in Homotopy Type Theory](https://arxiv.org/abs/2401.16336). It says: “the new definition of the cup product allows us to give the first complete formalisation of the axioms needed to turn the cohomology groups into a graded commutative ring.”

**Sources:**

- [Axel Ljungström, Anders Mörtberg, Computational Synthetic Cohomology Theory in Homotopy Type Theory, Math. Struct. Comp. Sci. 35 (2025) e16, arXiv:2401.16336](https://doi.org/10.1017/s0960129525000131)

### Grading Bredon cohomology by representations restores equivariant Poincaré duality

**Remember:** A G-manifold sits inside a representation, so grade by representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** Let G be a group that acts on spaces. An RO(G)-graded cohomology theory on G-spaces has groups Hᵅ(X; A) for every formal difference α of finite-dimensional real representations of G. It uses loop spaces Ωⱽ = Map(Sⱽ, −), where Sⱽ is the representation sphere, the one-point extension of the representation V. It does not use only the loop spaces Ωⁿ of ordinary spheres.

**Problem.** Prove a Poincaré duality theorem for G-manifolds. Also explain the unexpected torsion in integer-graded Bredon cohomology (ordinary cohomology for spaces with a G-action).

**How the definition helps.** The duality shift for a G-manifold is a representation, not a number, so the theorem needs grading by representations. With integer grading, Bredon cohomology shows torsion in odd places, and Poincaré duality for G-manifolds fails. A Bredon theory extends to an RO(G)-graded one exactly when its coefficient system extends to a Mackey functor (a coefficient system that also has transfer maps). A G-manifold M embeds in a representation V, usually not a trivial one. Thom space arguments then give a duality isomorphism that shifts dimension by an element α of RO(G). This α is usually not an integer, so one cannot state the theorem without the wider grading. The cost is that RO(G)-graded Bredon cohomology is hard to compute, and the nLab notes that α is apparently not even uniquely determined by M.

**nLab:** [equivariant cohomology](https://ncatlab.org/nlab/show/equivariant+cohomology), [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “It would also be nice to have a Poincare duality theorem for G-manifolds, but that fails with these theories. The solution people have come up with is to widen the notion of "looping" and "delooping" and thereby the grading”

**Sources:**

- [J. Peter May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### Excisive-functor spectra give Mayer–Vietoris sequences on finite pointed spaces

**Remember:** The excision axiom turns a pushout into a pullback before taking homotopy groups.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P65. arXiv math.AT. Level 4: research.

**Definition.** A functor is excisive if it sends pushout squares to pullback squares. It is reduced if it sends the point to the point. One definition of a spectrum is a reduced excisive functor from finite pointed homotopy types to spaces. The classical definition instead uses a sequence of spaces with structure maps.

**Problem.** For a pushout of finite pointed homotopy types, the functor gives a pullback square of values. The associated spectrum-valued functor gives a Mayer–Vietoris long exact sequence of homotopy groups.

**How the definition helps.** The excisive definition directly gives a pullback square at every suspension of the inputs (our own explanation). The suspension square itself gives E(X) ≃ ΩE(ΣX). Thus the values on iterated suspensions of X are the spaces of a spectrum. They assemble the pullbacks into a pullback of spectra. Its long exact homotopy sequence is the Mayer–Vietoris sequence. The work lies in proving that excisive functors and the usual spectra give equivalent categories.

**nLab:** [excisive (∞,1)-functor](https://ncatlab.org/nlab/show/excisive+%28%E2%88%9E%2C1%29-functor). It says: “then excisive functors that send the point to the point (up to equivalence) are still equivalent to spectra (spectrum objects)”

**Sources:** none listed. No primary source with a working link was found.

### New categories of spectra get around Lewis's no-go theorem

**Remember:** Change the point-set model of spectra until smash product is honestly symmetric monoidal.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A spectrum is the basic object of stable homotopy theory: a sequence of spaces linked by suspension maps. A symmetric monoidal model category of spectra is a model category whose homotopy category is the stable homotopy category. Its smash product (the tensor product of spectra) must be associative, unital and commutative up to coherent isomorphism already at the point-set level. S-modules, symmetric spectra and orthogonal spectra are examples.

**Problem.** Find a category of spectra with a strictly symmetric monoidal smash product. Then A∞ and E∞ ring spectra (whose multiplication is associative, or commutative, up to all higher homotopies) are just monoids and commutative monoids.

**How the definition helps.** In these categories an E∞ ring spectrum is simply a commutative monoid, because the monoidal structure absorbs the higher coherent homotopies that an E∞ operad used to supply. Lewis proved in 1991 that no symmetric monoidal category of spectra can model the stable homotopy category and also meet a couple of other natural requirements. In the 1990s, new definitions dropped one or another of these requirements: S-modules (EKMM), then symmetric and orthogonal spectra. S-modules show the step most directly. An S-module is an 𝕃-spectrum E (a coordinate-free spectrum with an action of the linear isometries monad 𝕃) for which the unit map S ∧ E → E is an isomorphism. On 𝕃-spectra the smash product is associative up to isomorphism but unital only up to weak equivalence, so keeping only the objects on which the unit map is an isomorphism makes unitality hold by definition. The price is a more complex point-set definition, and the real work is to show that each new category still models the stable homotopy category with a good model structure. All these models are symmetric-monoidally Quillen equivalent.

**nLab:** [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra), [S-module](https://ncatlab.org/nlab/show/S-module), [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum). It says: “Moreover, in all of these cases, the monoidal structure on the model category 𝒮 absorbs all the higher coherent homotopies that used to be supplied by the action of an A∞ or E∞ operad.”

**Sources:**

- [L. Gaunce Lewis, Jr., Is there a convenient category of spectra?, Journal of Pure and Applied Algebra 73 (1991) 233–246](https://doi.org/10.1016/0022-4049(91)90030-6)
- [A. Elmendorf, I. Kriz, M. Mandell, J. P. May, Rings, Modules, and Algebras in Stable Homotopy Theory, AMS Mathematical Surveys and Monographs 47 (1997)](https://doi.org/10.1090/surv/047)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Pre-excisive functors give a symmetric monoidal smash product almost for free

**Remember:** Index by all finite complexes, not just spheres, and smash products come free.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A pre-excisive functor is a pointed, topologically enriched functor from finite pointed CW complexes to pointed spaces. Topologically enriched means that the functor is continuous on spaces of maps. The smash product of two such functors is their Day convolution, the product on functors that the smash product of spaces induces. Its unit is the sphere functor 𝕊, the inclusion of finite complexes into all spaces.

**Problem.** Give a closed symmetric monoidal smash product of spectra, and explain why sequential spectra do not have one. Closed means that the product has a matching internal function object.

**How the definition helps.** On pre-excisive functors, Day convolution gives a closed symmetric monoidal product almost tautologically. Restricting to sequential spectra breaks the symmetric monoidal product. This shows why sequential spectra have no functorial smash product. Orthogonal and symmetric spectra lie between the two extremes. They are still concrete, but they keep the product inherited from pre-excisive functors. The hard part that remains is to give these categories stable model structures that model the stable homotopy category. (A model structure is the extra data that lets you do homotopy theory in a category.)

**nLab:** [model structure on orthogonal spectra](https://ncatlab.org/nlab/show/model+structure+on+orthogonal+spectra), [Introduction to Stable homotopy theory -- 1-2](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-2), [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra). It says: “We consider an almost tautological construction of a pointed topologically enriched category equipped with a closed symmetric monoidal product: the category of pre-excisive functors.”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)

### The loop-tower definition of stabilization makes looping invertible

**Remember:** In a tower of loop objects, moving one place undoes looping.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 18N60. arXiv math.AT. Level 4: research.

**Definition.** Let C be a pointed ∞-category with finite limits. Its loop functor Ω takes the pullback of the two maps from the zero object to an object. The stabilization is the limit of the tower of copies of C with transition functor Ω. An object is a sequence X₀, X₁, … with equivalences Xₙ ≃ ΩXₙ₊₁.

**Problem.** The loop functor on the stabilization is an equivalence. Its inverse sends X₀, X₁, … to X₁, X₂, ….

**How the definition helps.** The tower definition makes shifting inverse to looping because the structure equivalences identify each entry with the loops on the next. Limits, and hence loop objects, are computed at each entry (our own explanation). The structure equivalences identify both composites with the identity. In the sequential spectrum model for spaces, the adjoints of the structure maps need not be equivalences before replacement. The work lies in proving that this tower presents the classical theory of spectra.

**nLab:** [stabilization](https://ncatlab.org/nlab/show/stabilization). It says: “The stabilization Stab(C) of C is the (∞,1)-limit (in the (∞,1)-category of (∞,1)-categories) of the tower of applications of the loop space functor”

**Sources:** none listed. No primary source with a working link was found.

### A general notion of unramified map computes THH of number rings

**Remember:** Define ramification homotopically, and THH of number rings follows directly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 13D03, 14B25. arXiv math.AT, math.KT. Level 4: research.

**Definition.** The paper defines unramified and totally ramified maps for commutative rings, schemes, ring spectra and derived schemes. Ring spectra are the homotopy-theory version of rings. Topological Hochschild homology, THH, is a version of Hochschild homology taken over the sphere spectrum instead of the integers.

**Problem.** Compute THH(R) for the ring of integers R of a number field. The paper shows that THH(R) is a cofiber of an explicit map, which gives a long exact sequence.

**How the definition helps.** The new definition works in homotopy theory, so it can be fed directly into THH, and the calculation needs no computational techniques. The work moves into the proof that the new notion agrees with classical ramification for rings of integers. The paper also gets a descent method for THH along composites of unramified and totally ramified extensions. Earlier computations of THH of number rings used heavier computational tools (our own).

**Paper or page:** [Ramification and descent in homotopy theory and derived algebraic geometry](https://arxiv.org/abs/2112.14568). It says: “We prove that the definition is equivalent to the classical definition in the case of rings of integers in number fields. The new definition leads directly (without computational techniques) to a calculation of topological Hochschild homology for rings of integers.”

**Sources:**

- [John D. Berman, Ramification and descent in homotopy theory and derived algebraic geometry, arXiv:2112.14568 (2021)](https://arxiv.org/abs/2112.14568)

### E∞-ring spectra let elliptic cohomology theories glue into tmf

**Remember:** Cohomology theories cannot be glued, but the spectra behind them can.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N34, 18N70. arXiv math.AT, math.AG. Level 4: research.

**Definition.** A spectrum is the object that represents a cohomology theory. An E∞-ring spectrum is a spectrum with a multiplication that is commutative up to all higher coherent homotopies. E∞-ring spectra form an (∞,1)-category with good limits. The category of multiplicative cohomology theories does not have such limits.

**Problem.** Each flat elliptic curve Spec R → M₁,₁ gives an elliptic cohomology theory, where M₁,₁ is the moduli stack of elliptic curves. One wants a single universal theory, given as the global sections of this family.

**How the definition helps.** E∞-ring spectra live in a setting with limits, so gluing makes sense there. Cohomology theories, as functors, lack the limits needed for gluing, so 'a sheaf of cohomology theories' has no meaning. Lifting the presheaf to E∞-ring spectra puts it in an (∞,1)-category where sheaves and global sections are defined. The global sections of the lifted sheaf give tmf\[Δ⁻¹\], topological modular forms with the discriminant Δ inverted. The same construction over the Deligne–Mumford compactification gives the spectrum Tmf, and tmf is its connective cover. The definition only makes this possible to state. The hard part is the Goerss–Hopkins–Miller theorem, which says that the lift exists and is unique up to homotopy.

**nLab:** [A Survey of Elliptic Cohomology - E-infinity rings and derived schemes](https://ncatlab.org/nlab/show/A+Survey+of+Elliptic+Cohomology+-+E-infinity+rings+and+derived+schemes). It says: “To get a single cohomology theory from that we want to take global sections, but there is no good way to say what a global section of a cohomology-theoy valued functor would be.”

**Sources:**

- [Paul G. Goerss, Topological modular forms (after Hopkins, Miller, and Lurie), Séminaire Bourbaki, 2009, arXiv:0910.5130](https://arxiv.org/abs/0910.5130)

### Group-like fixed points recognize equivariant V-fold loop spaces

**Remember:** Ask group-like fixed points only where Vᴴ has room to loop.

*Rules out counterexamples.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G and a real G-representation V, an 𝔼ᵥ-algebra is a G-space with operations given by embeddings of V-framed G-disks. It is group-like at a subgroup H when the monoid of components of its H-fixed points is a group. The condition is asked only for subgroups H whose fixed space Vᴴ has dimension at least 1.

**Problem.** When is an 𝔼ᵥ-algebra the V-fold loop space of a G-space? Earlier results needed V to contain a trivial summand.

**How the definition helps.** The condition asks for group-like fixed points exactly where the fixed points carry a multiplication, so the theorem holds for every representation V. The fixed points Aᴴ are algebras over the little-disks operad of dimension dim Vᴴ (our own summary of the abstract). Where Vᴴ is zero, there is no multiplication and no condition to ask (our own). The hard part is the equivariant approximation theorem for all V and all based G-spaces. This is the equivariant form of the non-equivariant theorem that grouplike Eₖ-algebras are k-fold loop spaces.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “We prove that an 𝔼ᵥ-algebra is equivalent to a V-fold loop space if and only if Aᴴ is group-like for all H such that dim Vᴴ ≥ 1. This generalizes a result by Guillou and May”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups, arXiv:2508.04421 (2025)](https://arxiv.org/abs/2508.04421)
- [Bertrand Guillou, J. Peter May, Equivariant iterated loop space theory and permutative G-categories, Algebr. Geom. Topol. 17 (2017) 3259–3339](https://doi.org/10.2140/agt.2017.17.3259)

### Right Com-modules make two filtrations of TQ agree easily

**Remember:** Write both filtrations as circle products, and they agree.

*True by definition. Confidence: medium.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P43. arXiv math.AT. Level 4: research.

**Definition.** A right Com-module is a symmetric sequence of spectra with a right action of the commutative operad. The circle product of such a module with a nonunital commutative ring spectrum gives a new spectrum. Topological André–Quillen homology TQ is one such construction.

**Problem.** Two filtrations of TQ(I), built from I and the spaces of the Lie cooperad, appear in the literature. Do they agree?

**How the definition helps.** Both filtrations come from one natural filtration of right Com-modules, so their agreement follows from comparing the modules, not the spectra (our own). The paper says its setting makes the proof easy. The hard part is to express each construction as a derived circle product with the right module (our own).

**Paper or page:** [Applications of the circle product with a right Com-module to the theory of commutative ring spectra](https://arxiv.org/abs/2410.05104). It says: “There are two versions of this in the literature -- by the author and by Behrens and Rezk -- and our setting here makes it easy to prove that these agree.”

**Sources:**

- [Nicholas J. Kuhn, Applications of the circle product with a right Com-module to the theory of commutative ring spectra, arXiv:2410.05104 (2024)](https://arxiv.org/abs/2410.05104)

### Transfer systems classify N∞ operads up to homotopy

**Remember:** Up to homotopy, an N∞ operad is just its list of norms.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, an N∞ operad is a G-operad whose algebras are commutative up to coherent homotopy. Its algebras also have some norm maps, which are multiplicative transfers. A transfer system is a partial order on the subgroups of G that refines inclusion and is closed under conjugation and restriction.

**Problem.** Classify N∞ operads up to homotopy. A priori, they form a large homotopy category.

**How the definition helps.** The homotopy type of an N∞ operad depends only on which norms its algebras have, and the transfer system records exactly those norms. So the classification becomes a question about a finite lattice. The paper then studies transfer systems for the groups Cₚ × Cₚ, the rank two elementary abelian groups. The theorem is due to Blumberg and Hill and to Rubin. The hard part, that every transfer system comes from an operad, is due to Rubin and to others (our own).

**Paper or page:** [Transfer systems for rank two elementary Abelian groups: characteristic functions and matchstick games](https://arxiv.org/abs/2310.13835). It says: “There is a functor from the category of G-N∞ operads to (the category induced by) the lattice Tr(G) that induces an equivalence between the homotopy category of G-N∞ operads and Tr(G).”

**Sources:**

- [Linus Bao, Christy Hazel, Tia Karkos, Alice Kessler, Austin Nicolas, Kyle Ormsby, Jeremie Park, Cait Schleff, Scotty Tilton, Transfer systems for rank two elementary abelian groups: characteristic functions and matchstick games, Tunisian J. Math. 7 (2025) 167–191, arXiv:2310.13835](https://doi.org/10.2140/tunis.2025.7.167)
- [Andrew J. Blumberg, Michael A. Hill, Operadic multiplications in equivariant spectra, norms, and transfers, Adv. Math. 285 (2015) 658–708](https://doi.org/10.1016/j.aim.2015.07.013)

### Continuous cohomology gives a direct real homotopy theory

**Remember:** Remember that ℝ is a topological ring, not only an abelian group.

*Rules out counterexamples. Confidence: medium.* MSC 55P60 (Localization and completion in homotopy theory), 55P62, 55N30. arXiv math.AT. Level 4: research.

**Definition.** Brown and Szczarba make two replacements. They replace plain real cohomology by continuous real cohomology, which uses the topology of ℝ. They also replace plain differential graded commutative algebras over ℝ by topological algebras.

**Problem.** One wants a direct real homotopy theory, built like the Postnikov-tower construction of rational homotopy theory (which builds a space one homotopy group at a time). But the usual PL de Rham adjunction over ℝ does not model localization at ℝ. This adjunction links spaces and commutative differential graded algebras through polynomial differential forms on simplices.

**How the definition helps.** The new definition lets the theory see the topology of ℝ, which the standard construction ignores. Over ℚ, the PL de Rham adjunction models rationalization, but for other fields k it fails. Algebraically, k is not a solid ring (a ring R for which the multiplication R ⊗ R → R is an isomorphism, as for ℚ). So tensoring homotopy groups with k twice is in general not the same as tensoring once (in our own words: k ⊗ k is not k). Topologically, the standard adjunction ignores the topology of ℝ. Brown and Szczarba build this topology into the definition through continuous cohomology, and so get a direct real homotopy theory, not a formal tensoring of the rational theory with ℝ. This record follows the nLab summary and its quoted review; the details of the construction are in the original papers.

**nLab:** [real homotopy theory](https://ncatlab.org/nlab/show/real+homotopy+theory). It says: “the real numbers k = ℝ are naturally a topological ring, whose topology, however, is ignored in the standard Quillen adjunction between simplicial sets and connective dgc-algebras over the real numbers.”

**Sources:**

- [Edgar H. Brown, Robert H. Szczarba, Continuous cohomology and real homotopy type, Trans. Amer. Math. Soc. 311 (1989) 57–106](https://doi.org/10.1090/S0002-9947-1989-0929667-6)
- [Edgar H. Brown, Robert H. Szczarba, Real and rational homotopy theory, chapter 17 of Handbook of Algebraic Topology, Elsevier (1995) 867–915](https://doi.org/10.1016/B978-044481779-2/50018-3)

### Enriched Lie models extend Sullivan theory to all connected spaces

**Remember:** Enrich the Lie model, and the simply connected condition goes away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory), 17B70. arXiv math.AT. Level 4: research.

**Definition.** An enriched differential graded Lie algebra is, roughly, a differential graded Lie algebra that is an inverse limit of finite-dimensional nilpotent ones. The category of these algebras has a homotopy theory like the one Sullivan built for commutative differential graded algebras.

**Problem.** Many results of rational homotopy theory were proved only for simply connected spaces. The aim is to extend them to all path connected spaces.

**How the definition helps.** Every connected space has a unique minimal model of this kind, so the theorems can be stated for all connected spaces. The paper says the interplay with Sullivan models extends results previously known only for simply connected spaces. The work moves into the construction of the homotopy theory of these algebras. The fundamental group is still seen only through its Malcev completion (our own).

**Paper or page:** [Enriched Differential Lie Algebras in Topology](https://arxiv.org/abs/2208.12171). It says: “Each connected space has a unique minimal edgl model, and an algebraic process connects this to the minimal Sullivan model.”

**Sources:**

- [Yves Félix, Steve Halperin, Enriched Differential Lie Algebras in Topology, arXiv:2208.12171 (2022)](https://arxiv.org/abs/2208.12171)

### Homotopy fixed points defined by Kan extension compose in stages

**Remember:** Factoring the map to a point lets us take fixed points twice.

*True by definition. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N60. arXiv math.AT. Level 4: research.

**Definition.** A coherent action of a discrete group G on X is a functor from BG, the one-object groupoid with maps G, to spaces. Its homotopy fixed points are the limit of this functor. Equivalently, take the right Kan extension to a point, the universal extension obtained by limits. A classical model is the space of G-equivariant maps to X from a free contractible G-space.

**Problem.** Let H be a normal subgroup of G. The H-homotopy fixed points inherit a coherent G/H-action, whose homotopy fixed points are the G-homotopy fixed points of X.

**How the definition helps.** Right Kan extensions compose, so factoring BG → point turns the definition into a two-stage calculation (our own explanation). First extend from BG to B(G/H). The fiber of this map over the unique object is BH, so the extension has the H-homotopy fixed points there. The extension also supplies the coherent quotient action. Taking its limit gives the full G-homotopy fixed points. The work lies in the fiber calculation and in comparing the Kan extension with the classical space of equivariant maps.

**nLab:** [homotopy fixed point](https://ncatlab.org/nlab/show/homotopy+fixed+point). It says: “Generally, for G an ∞-group and X equipped with an ∞-action, then the homotopy fixed points is the base change along/dependent product over the delooping 𝐁G”

**Sources:** none listed. No primary source with a working link was found.

### Cartan principal bundles give a clean form of Palais's local triviality theorem

**Remember:** Cartan's condition: dividing one point of a fiber by another is continuous.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 54H15. arXiv math.GN, math.AT. Level 4: research.

**Definition.** Let a locally compact group G act freely on a completely regular space P. The quotient map P → P/G is a Cartan principal bundle if the division map is continuous. The division map goes from the pairs (p, q) in the same fiber to G, and sends (p, q) to the unique g with q = p·g. The definition does not ask for local triviality.

**Problem.** When is the quotient map P → P/G of a free action a locally trivial principal bundle, that is, a product U × G over small open sets U? For example, is G → G/H one for every closed Lie subgroup H of a topological group G?

**How the definition helps.** The Cartan condition is exactly what Palais's theorem needs, so the theorem has a clean statement. Let a Lie group G act freely on a completely regular space P. Then the quotient map is locally trivial exactly when the division map is continuous. A corollary is that P → P/G is a locally trivial principal bundle for every closed Lie subgroup G of a topological group P. The Lie condition matters. Karube's example, an infinite product of circles divided by the product of their order-2 subgroups, has no local sections. The hard part is Palais's slice theorem, not the definition.

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle). It says: “Then the quotient map P → P/G is a G-principal bundle -- in that it is locally trivial -- precisely if the division map”

**Sources:**

- [Richard Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)

### Semi-simplicial triangulations of circle bundles have an exact Euler class criterion

**Remember:** Allow semi-simplicial triangulations, and the Euler class criterion becomes exact.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 55R15, 18N50. arXiv math.AT, math.GT. Level 4: research.

**Definition.** A semi-simplicial set is like a simplicial complex, but a simplex need not be determined by its vertices. Several simplices may share the same vertices. The Euler class of a circle bundle is a degree-two cohomology class that measures its twisting.

**Problem.** Which circle bundles over a triangulated base can be triangulated over that base? The answer should be a condition on the Euler class.

**How the definition helps.** The looser semi-simplicial notion removes extra combinatorial conditions (our own reading). So the criterion becomes a simple condition on a cocycle with values 0 and 1. For classical simplicial triangulations, the same theorem says that this condition is necessary but not sufficient. The theorem is due to Mnëv, and the paper quotes it as its starting point.

**Paper or page:** [Minimal triangulations of circle bundles](https://arxiv.org/abs/2311.04214). It says: “A circle bundle can be semi-simplicially triangulated over a finite semi-simplicial base B iff its integer Euler class can be represented by a simplicial cocycle having values 0 and 1 on 2-simplices of the base.”

**Sources:**

- [Gaiane Panina, Maksim Turevskii, Minimal triangulations of circle bundles, Funct. Anal. Appl. 59 (2025) 430–439, arXiv:2311.04214](https://arxiv.org/abs/2311.04214)
- [N. Mnëv, Minimal triangulations of circle bundles, circular permutations, and the binary Chern cocycle, J. Math. Sci. 247 (2020) 696–710](https://doi.org/10.1007/s10958-020-04832-y)

### Covering spaces as families of sets make classification follow from 1-truncation

**Remember:** A covering space is a set that varies with the point of X.

*True by definition. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In homotopy type theory, a covering space of a type X is a type family C : X → Sets. Here Sets is the type of sets, so C gives a set C(x) for each point x of X. The usual bundle is the first projection from the dependent sum type Σ (x : X), C(x) to X. This dependent sum is the type of pairs (x, c) with c in C(x).

**Problem.** Prove the fundamental theorem of covering spaces. It says that covering spaces of X are equivalent to sets with an action of the fundamental groupoid of X.

**How the definition helps.** With this definition, the theorem is a special case of a general fact about 1-truncation. The 1-truncation ‖X‖₁ of X keeps the points and paths of X and forgets all higher structure, so it is the fundamental groupoid of X. Sets is a 1-type (a type whose identity types are sets), so by the universal property of 1-truncation, maps X → Sets are the same as maps ‖X‖₁ → Sets. In classical topology, the theorem needs X to be locally path-connected and semi-locally simply connected. The classical proof also builds a topology on the reconstructed covering space. In the type-theoretic version, this work moves into the definition of covering space. To get back the topological statement, one uses the shape modality of cohesive homotopy type theory (Cherubini and Rijke).

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “In homotopy type theory, the fundamental theorem of covering spaces is really just a special case of the universal property of 1-truncation.”

**Sources:**

- [Felix Cherubini, Egbert Rijke, Modal descent, Mathematical Structures in Computer Science (2020), arXiv:2003.09713](https://arxiv.org/abs/2003.09713)

### Define real projective spaces in homotopy type theory with their bundles

**Remember:** Build each projective space and its line bundle in the same step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 03B38, 55P20. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Define ℝPⁿ and its tautological bundle of 2-element sets together, by induction on n. ℝP⁻¹ is the empty type. ℝPⁿ⁺¹ is the mapping cone (the space made by attaching a cone along a map) of the projection of the tautological bundle on ℝPⁿ. Univalence, the rule that equivalent types are equal, then gives the bundle on ℝPⁿ⁺¹.

**Problem.** Construct the real projective spaces in homotopy type theory. Show that ℝPⁿ⁺¹ is ℝPⁿ with one (n+1)-cell attached. Show that ℝP∞ is K(ℤ/2, 1), the space whose only nonzero homotopy group is ℤ/2 in degree 1.

**How the definition helps.** Each step is a mapping cone, so the cell structure is built into the definition. The classical definition, the quotient of the n-sphere by the antipodal map, does not translate directly to homotopy type theory. Defining the space together with its bundle makes the inductive step a mapping cone. The work that remains is to show that the total space of the tautological bundle on ℝPⁿ is the n-sphere. Then ℝP∞, the colimit, is the type of 2-element types. This type classifies 0-sphere bundles, and it is K(ℤ/2, 1).

**nLab:** [The real projective spaces in homotopy type theory](https://ncatlab.org/nlab/show/The+real+projective+spaces+in+homotopy+type+theory). It says: “The classical definition of ℝPⁿ, as the quotient space identifying antipodal points of the n-sphere, does not translate directly to homotopy type theory. Instead, we define ℝPⁿ by induction on n simultaneously with its tautological bundle of 2-element sets.”

**Sources:**

- [Ulrik Buchholtz, Egbert Rijke, The real projective spaces in homotopy type theory, LICS 2017, arXiv:1704.05770](https://arxiv.org/abs/1704.05770)

### Orientations as Thom bundle trivializations give the Thom isomorphism

**Remember:** A trivialization on each fiber gives an equivalence after taking colimits.

*True by definition. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P43, 55N20. arXiv math.AT. Level 4: research.

**Definition.** Let E be a commutative ring spectrum, which is a ring object in spectra. A rank n vector bundle V over a CW complex X gives a sphere bundle by taking the one-point compactification of each fiber. Smashing those spheres with E gives a bundle of E-modules, the spectrum version of modules over a ring. An E-orientation is a trivialization of that bundle with constant fiber ΣⁿE, the n-fold suspension of E.

**Problem.** For an E-oriented bundle, the E-module Thom spectrum is equivalent to ΣⁿE smashed with X with a disjoint base point. This gives the Thom isomorphism in E-cohomology.

**How the definition helps.** A trivialization identifies the bundles before taking their colimits, so it also identifies the colimits (our own explanation). The Thom spectrum is the colimit of the sphere bundle in spectra, and smashing with E preserves colimits. The colimit of the constant module bundle is ΣⁿE smashed with X with a disjoint base point. The classical definition uses a Thom class, a cohomology class that restricts to a unit on each fiber after shifting the degree by n. The work is proving that such classes correspond to trivializations.

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “An E-orientation of a vector bundle V → X is a trivialization of the E-module bundle E ∧ Sⱽ”

**Sources:**

- [M. Ando, A. J. Blumberg, D. Gepner, M. J. Hopkins, C. Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### The Euler class sorts surface group representations into connected components

**Remember:** One integer, bounded by Milnor–Wood, names each component of representations.

*Makes the theorem clean to state or prove.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 57K20. arXiv math.GT, math.DG. Level 4: research.

**Definition.** PSL(2,ℝ) acts on the circle. So a representation of a closed oriented surface group into PSL(2,ℝ) gives a flat circle bundle over the surface. Its Euler class e is the integer Euler number of that bundle, and Milnor–Wood says χ(Σ) ⩽ e ⩽ −χ(Σ). For punctured surfaces a relative Euler class plays the same role.

**Problem.** How many connected components does the space of representations of a surface group into PSL(2,ℝ) have, and how can one tell them apart?

**How the definition helps.** The Euler class is an integer that varies continuously, so it is constant on each component (our own remark). Goldman proved the converse: each value allowed by Milnor–Wood gives exactly one nonempty connected component. The paper quotes a version of this as Theorem 2.1. For a closed surface of genus g ⩾ 2 this gives 4g − 3 components (our own remark). Ryu and Yang treat type-preserving representations of punctured surfaces. There they also need the signs of the peripheral images, and punctured spheres have extra totally non-hyperbolic components. The hard part is to prove that each level set is connected.

**Paper or page:** [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391), [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391). It says: “We show that the connected components are indexed by the relative Euler classes and the signs of the images of the peripheral elements satisfying a generalized Milnor-Wood inequality”

**Sources:**

- [I. Ryu, T. Yang, Connected components of the space of type-preserving representations, arXiv:2507.07391 (2025)](https://arxiv.org/abs/2507.07391)
- [W. M. Goldman, Topological components of spaces of representations, Invent. Math. 93 (1988) 557-607](https://doi.org/10.1007/bf01410200)

### The Gauss–Manin connection comes from a fiberwise mapping space

**Remember:** Fiberwise cohomology is components of maps to the classifying space, so it is a covering.

*True by definition. Confidence: medium.* MSC 55R70 (Fibrewise topology), 55N20. arXiv math.AT. Level 4: research.

**Definition.** Take a cohomology theory with a classifying space A, so that cohomology classes are homotopy classes of maps into A. Take a fiber bundle X → B. Form the fiberwise mapping space from X into B × A over B, and reduce each fiber to its set of connected components. Over each point b this set is the cohomology of the fiber over b, and the result is a covering space of B.

**Problem.** The cohomology groups of the fibers of a fiber bundle form a local system, that is, they carry a flat connection, the Gauss–Manin connection. This should hold also for twisted, generalized and non-abelian cohomology theories.

**How the definition helps.** The bundle of fiber cohomology groups is a covering space by construction, and a covering space is already a flat connection. Classically, one builds the Gauss–Manin connection from local trivializations, or from de Rham theory in the smooth case. When cohomology is homotopy classes of maps into a classifying space, the bundle of fiber cohomology groups is directly the fiberwise 0-truncation (the set of components in each fiber) of a fiberwise mapping space. After a fibrant replacement (a replacement by an equivalent fibration), such a truncation is a covering space. Over a suitably nice base (locally path-connected and semi-locally simply connected), a covering space is the same as a local system, that is, a flat connection. The same argument works for any theory with a classifying space, and it reads naturally in homotopy type theory. The nLab calls the argument non-standard, and notes that this simple case still covers the hypergeometric solutions of the Knizhnik–Zamolodchikov equation.

**nLab:** [Gauss-Manin connection](https://ncatlab.org/nlab/show/Gauss-Manin+connection). It says: “In fact, in that formal language the following construction of the Gauss-Manin connection for twisted cohomology on fibers of a fiber bundle is so simple that it becomes essentially a tautology.”

**Sources:**

- [David Jaz Myers, Hisham Sati, Urs Schreiber, Topological Quantum Gates in Homotopy Type Theory, Comm. Math. Phys. (2024), arXiv:2303.02382](https://arxiv.org/abs/2303.02382)

### Internally defined equivariant principal bundles restrict to fixed loci

**Remember:** An equivariant bundle is an ordinary bundle with every part living in G-spaces.

*True by definition.* MSC 55R91 (Equivariant fiber spaces and bundles in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** A G-space is a topological space with an action of the group G. A G-equivariant principal bundle is a principal bundle internal to the category of topological G-spaces: all its spaces and maps are G-spaces and G-maps. So the structure group Γ is a group object in G-spaces, which means that G may act on Γ. Such a bundle is the same as a bundle with an action of the semidirect product Γ ⋊ G.

**Problem.** Take any subgroup H ⊂ G. Then the H-fixed locus Pᴴ → Xᴴ of an equivariant principal bundle is again an equivariant principal bundle. Its group is Γᴴ, and it is equivariant for the Weyl group N(H)/H, where N(H) is the normalizer of H.

**How the definition helps.** The internal definition uses only limits, and taking fixed points preserves limits, so the whole structure passes to fixed loci at once. Taking H-fixed points is a right adjoint functor, so it preserves all limits, in particular products and fiber products. The internal definition uses only such limits: a group object, an action and the principality condition. To keep the definition limit-only, the nLab does not ask that the base is the quotient of the total space, and it allows empty bundles. Empty bundles often appear as fixed loci. The nLab shows that the internal definition agrees with tom Dieck's explicit one through the semidirect product Γ ⋊ G. The harder questions, such as local triviality and classification, are left to later work.

**nLab:** [equivariant bundle](https://ncatlab.org/nlab/show/equivariant+bundle). It says: “serves to make manifest that they have good behaviour under passage to fixed loci”

**Sources:**

- [Hisham Sati, Urs Schreiber, Equivariant principal ∞-bundles, arXiv:2112.13654 (2021), Cambridge University Press (2026)](https://arxiv.org/abs/2112.13654)

### Conditional convergence gives a usable notion of convergence for spectral sequences

**Remember:** Conditional convergence asks only that the filtration has zero lim and zero lim¹.

*Makes the theorem clean to state or prove.* MSC 55T05 (General theory of spectral sequences in algebraic topology), 18G40. arXiv math.AT. Level 4: research.

**Definition.** A spectral sequence can come from an unrolled exact couple: a sequence of maps … → D² → D¹ → D⁰ together with exact sequences that connect them to the pages. The spectral sequence converges conditionally to D⁰ when this filtration is complete: the limit of the Dˢ is 0, and lim¹ of the Dˢ is 0. Here lim¹ is the first derived functor of the limit; it measures how far the limit fails to be exact. This is a condition on the target filtration only, not on the pages.

**Problem.** Give a usable notion of convergence for spectral sequences that are not in the first or third quadrant, such as Adams spectral sequences. Also give a test for strong convergence.

**How the definition helps.** Boardman splits convergence into two parts, and only one part depends on the pages. The first part, conditional convergence, is a condition that you can check in practice. The second part is one extra condition on the pages. His theorem says that a conditionally convergent spectral sequence converges strongly when lim¹ of the pages vanishes. This lets you state convergence theorems for half-plane spectral sequences. An example is the E-Adams spectral sequence, which in general converges only conditionally, to the E-nilpotent completion.

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “that converges conditionally, then sufficient condition that it converges strongly (def.) is that also the lim¹ over its pages vanishes”

**Sources:**

- [J. Michael Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999) 49–84](https://doi.org/10.1090/conm/239/03597)

### With connections, cubical groups are Kan and cubical products behave correctly

**Remember:** Connections are extra degeneracies that fold a cube along its diagonal.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 18G45. arXiv math.AT. Level 4: research.

**Definition.** A cubical set is like a simplicial set, but it is built from cubes instead of simplices. A cubical set with connections has extra degeneracy maps Γ, called connections. A connection makes an n-cube into an (n+1)-cube by folding, like the maps (s,t) ↦ max(s,t) or (s,t) ↦ min(s,t) on the square. Brown and Higgins added them.

**Problem.** Show that every cubical group is a Kan complex (every horn in it has a filler). Also show that geometric realization sends products of cubical sets to products of the right homotopy type.

**How the definition helps.** Connections supply the extra structure that two later theorems use. Plain cubical sets fail both claims: cubical groups need not be Kan, and the realization of the product I × I of cubical sets has non-trivial homotopy groups. So that realization is not the contractible square. These failures were one reason that people gave up Kan's cubical approach for simplicial sets. With connections, Tonks proved that cubical groups are Kan. Maltsiniotis proved that the cube category with connections is a strict test category, so products have the correct homotopy type. A strict test category is a category of shapes whose presheaves model homotopy types and respect products. The real content is in those two theorems.

**nLab:** [cubical set](https://ncatlab.org/nlab/show/cubical+set), [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Another reason was that cubical groups were in general not Kan complexes; however cubical groups with connection are Kan complexes.”

**Sources:**

- [A. P. Tonks, Cubical groups which are Kan, J. Pure Appl. Algebra 81 (1992) 83–87](https://doi.org/10.1016/0022-4049(92)90136-4)
- [G. Maltsiniotis, La catégorie cubique avec connexions est une catégorie test stricte, Homology Homotopy Appl. 11 (2009)](https://doi.org/10.4310/hha.2009.v11.n2.a15)

### Connections on cubical sets give the equivalence with crossed complexes

**Remember:** A connection folds a cell into a square with the cell on two adjacent sides.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18G45. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A cubical set has connections if it has extra (n+1)-cells besides the degenerate ones. For each n-cell f : a → b, such a cell has f on two adjacent sides of its boundary and degenerate cells (identities) on the other two. Connections are extra operations of the same kind as degeneracies.

**Problem.** Brown and Higgins wanted an equivalence between cubical ∞-groupoids and crossed complexes. A crossed complex is an algebraic structure like a chain complex, with a groupoid at the bottom and groupoid actions above it. They also wanted a usable notion of a commutative n-shell, that is, a commuting cube.

**How the definition helps.** Connections supply the 'thin' cells that a cubical set needs for this equivalence. Plain cubical sets have only the degeneracies, which repeat a cell along a new direction. Connections add cells that fold a cell onto two adjacent sides. The nLab says they are also needed for the notion of a commutative n-shell. With connections, Brown and Higgins proved that cubical ω-groupoids with connections are equivalent to crossed complexes. In dimension 2 the same idea gives the Brown–Spencer equivalence of crossed modules (a group homomorphism with a compatible action) with edge-symmetric double groupoids with connection.

**nLab:** [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Such connections on cubical sets were introduced in 1981 by Brown and Higgins in order to obtain the equivalence of their "cubical ∞-groupoids" with crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, On the algebra of cubes, Journal of Pure and Applied Algebra 21 (1981) 233–260](https://doi.org/10.1016/0022-4049(81)90018-9)

### Test categories make presheaves model homotopy types almost by definition

**Remember:** A test category is a shape whose presheaves see all homotopy types.

*True by definition. Confidence: medium.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P15, 18F20. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let A be a small category. A presheaf on A is aspherical if the nerve of its category of elements is contractible (the nerve is the simplicial set whose n-simplices are strings of n composable arrows). A is a weak test category if, for every category D with a terminal object, the presheaf a ↦ Hom(A/a, D) is aspherical; here A/a is the slice category of objects over a. A is a test category if A itself has a contractible nerve and every slice A/a is a weak test category.

**Problem.** Find which shape categories, such as simplices, cubes or cells, have presheaf categories that model all homotopy types.

**How the definition helps.** The axioms make the comparison with categories almost automatic. For a weak test category A, the comparison with Cat, the category of small categories, gives an equivalence Ho(A-Set) ≅ Ho(Cat). Here A-Set is the category of presheaves on A, and Ho means that weak equivalences are inverted. This follows by a short argument (Maltsiniotis, Lemme 1.3.8 and Proposition 1.3.9), so presheaves on a test category model homotopy types almost by definition. The real work moves to two places: proving that Cat models homotopy types through nerves, and checking that particular categories, such as the simplex category Δ, are test categories. Cisinski later built the model structure on presheaves over a test category.

**nLab:** [test category](https://ncatlab.org/nlab/show/test+category), [Pursuing Stacks](https://ncatlab.org/nlab/show/Pursuing+Stacks). It says: “In other words, presheaves over a (weak) test category are models for homotopy types of ∞-groupoids.”

**Sources:**

- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](https://webusers.imj-prg.fr/~georges.maltsiniotis/textes.html)
