### Framed links make the Kauffman bracket an invariant with no correction

**Remember:** Remember the ribbon, and the twist count becomes part of the knot.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A framed knot is a tame knot thickened to an embedded ribbon or solid torus. The framing is the linking number of the ribbon's edge with the knot. A diagram drawn flat on the page gives the blackboard framing.

**Problem.** The Kauffman bracket is an invariant of framed links. Diagrams show the same framed link exactly when modified Reidemeister moves connect them.

**How the definition helps.** Framed equivalence forbids the one move that changes the bracket, so the bracket is invariant almost by definition. The ordinary type I move adds a twist to the ribbon, so it changes the framing. The modified type I move combines two opposite type I moves and keeps the framing. The bracket is unchanged by moves II and III and by the modified move I. Our own remark: this is why quantum invariants of 3-manifolds start from framed links. Kirby calculus, a set of moves on framed links, describes 3-manifolds this way. The work moves into the framed Reidemeister theorem.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial), [Reidemeister move](https://en.wikipedia.org/wiki/Reidemeister_move). It says: “Link diagrams, with blackboard framing, represent equivalent framed links if and only if they are connected by a sequence of (modified) type I, II, and III moves.”

**Sources:**

- [Louis H. Kauffman, An invariant of regular isotopy, Transactions of the American Mathematical Society 318 (1990) 417–471](https://doi.org/10.1090/S0002-9947-1990-0958895-7)

### Moving the whole space keeps knots from coming undone

**Remember:** You must move the space around the knot, not only the knot.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57N37. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Two knots are equivalent if there is an ambient isotopy between them. An ambient isotopy is a continuous family of homeomorphisms of the whole surrounding space. It starts at the identity, and its last member carries one knot onto the other.

**Problem.** Knot theory needs an equivalence under which the trefoil is not the unknot (a plain circle).

**How the definition helps.** Ambient isotopy moves the space together with the knot, so the knotted part cannot be shrunk away. The obvious definition, isotopy, only asks that the knot stay an embedding (a curve that does not cross itself) at every moment. Under isotopy every knot is equivalent to the unknot, because the knotted part can be contracted down to a straight line. Ambient isotopy forbids this, because the contraction is not a homeomorphism of the surrounding space. Ambient isotopy also agrees with equivalence by an orientation-preserving homeomorphism of space. Proving that two particular knots differ still needs invariants (quantities that equivalent knots share).

**Wikipedia:** [Knot theory](https://en.wikipedia.org/wiki/Knot_theory), [Ambient isotopy](https://en.wikipedia.org/wiki/Ambient_isotopy). It says: “However, this definition would make every knot equivalent to the unknot, as the knotted portions can be "contracted" down to a straight line.”

**Sources:** none listed. No primary source with a working link was found.

### Tame knots have finite diagrams, so Reidemeister moves capture equivalence

**Remember:** Finitely many straight pieces mean finitely many crossings.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57M30. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A polygonal knot is a closed curve in space made of finitely many line segments. A knot is tame if it is equivalent to a polygonal knot. Smooth knots are tame.

**Problem.** Reidemeister's theorem is about diagrams of tame knots. Two diagrams show the same knot if and only if a finite sequence of three local moves turns one into the other. A diagram is a projection to the plane with finitely many crossings, each marked over or under.

**How the definition helps.** A polygonal knot has a regular projection with finitely many crossings, so knots become finite combinatorial objects. The Reidemeister moves and invariants defined from diagrams then make sense. Our own remark: a wild knot can have infinitely many crossings in every projection. The Fox–Artin arc is a wild arc whose complement is not simply connected, unlike a straight segment, so wild embeddings can behave very differently. Most of knot theory silently assumes tameness for this reason. What stays hard is the recognition problem, to decide when two diagrams show the same knot.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Wild knot](https://en.wikipedia.org/wiki/Wild_knot), [Wild arc](https://en.wikipedia.org/wiki/Wild_arc). It says: “A tame knot is any knot equivalent to a polygonal knot. Knots which are not tame are called wild, and can have pathological behavior.”

**Sources:**

- [Kurt Reidemeister, Elementare Begründung der Knotentheorie, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927) 24–32](https://doi.org/10.1007/BF02952507)
- [Ralph H. Fox and Emil Artin, Some wild cells and spheres in three-dimensional space, Annals of Mathematics 49 (1948) 979–990](https://doi.org/10.2307/1969408)

### The coordinate torus makes T(p,q) equivalent to T(q,p)

**Remember:** Swapping the two complex coordinates swaps the two winding numbers.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Take coprime positive integers p and q. On the unit sphere in ℂ², define T(p,q) by the curve (exp(ipt), exp(iqt))/√2 for 0 ≤ t &lt; 2π. The other description closes the p-strand braid obtained by repeating the adjacent crossings σ₁ through σₚ₋₁ a total of q times.

**Problem.** The torus knots T(p,q) and T(q,p) are equivalent by an ambient isotopy of the 3-sphere.

**How the definition helps.** The coordinate definition displays the two winding numbers symmetrically, so swapping coordinates exchanges the knots (our own). The swap map belongs to the unitary group, the group of complex linear maps preserving lengths (our own). It is connected to the identity by a path of unitary maps, so it gives a deformation of the entire sphere (our own). The braid descriptions use different numbers of strands and hide this symmetry (our own). The work is showing that closing the stated braid gives the coordinate curve (our own).

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “The (p,q) torus knot is equivalent to the (q,p) torus knot.”

**Sources:** none listed. No primary source with a working link was found.

### Conway's normalization fixes the Alexander polynomial by a skein relation

**Remember:** Fix the unknot and one crossing rule, and the polynomial follows.

*Makes the theorem clean to state or prove.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Alexander polynomial of a knot is defined only up to multiplication by a unit ±tⁿ. Conway's version ∇(z) is normalized so that the unknot has ∇ = 1. It obeys the skein relation ∇(L₊) − ∇(L₋) = z∇(L₀). Here L₊, L₋ and L₀ are diagrams that agree except at one crossing, which is positive, negative or smoothed away.

**Problem.** The Alexander–Conway polynomial of any oriented link can be computed from a diagram by the skein relation alone. It satisfies Δ(t²) = ∇(t − t⁻¹) for the suitably normalized Alexander polynomial.

**How the definition helps.** Choosing one representative of the polynomial removes the ±tⁿ ambiguity, so a linear recursion on crossings becomes possible. Our own sketch of why: changing crossings can always turn a diagram into an unlink, and smoothing lowers the crossing number. So the skein relation and the value on the unknot determine everything by induction. Our own remark: the value on split links is zero, which follows from the relation. This skein approach later gave the Jones and HOMFLY polynomials. What stays hard is to show that the recursion gives a well-defined invariant, which needs the original topological definition.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “John Conway later rediscovered this in a different form and showed that the skein relation together with a choice of value on the unknot was enough to determine the polynomial.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the American Mathematical Society 30 (1928) 275–306](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### Correcting by the writhe turns the Kauffman bracket into the Jones polynomial

**Remember:** Twisting changes the bracket and the writhe together, so they cancel.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket ⟨L⟩ of a link diagram is a Laurent polynomial in A, defined by smoothing each crossing in two ways. The writhe w(L) is the number of positive crossings minus the number of negative crossings of an oriented diagram. The normalized bracket X(L) is ⟨L⟩ multiplied by (−A³) raised to the power −w(L).

**Problem.** X(L) is an invariant of oriented links. After the substitution A = t⁻¹ᐟ⁴, it is the Jones polynomial.

**How the definition helps.** The correction factor is chosen to cancel the only move under which the bracket fails, so invariance follows at once. The bracket is unchanged by Reidemeister moves II and III but gains a factor −A³ or −A⁻³ under move I. The writhe changes by ±1 under move I and not under the others. So the product does not change under any move. This gave a short proof that the Jones polynomial is a knot invariant. The work moves into the bracket's invariance under moves II and III. What stays hard is what the polynomial means topologically, for example whether it detects the unknot.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial). It says: “The bracket polynomial is known to change by a factor of −A±³ under a type I Reidemeister move. The definition of the X polynomial given above is designed to nullify this change”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial, Topology 26 (1987) 395–407](https://doi.org/10.1016/0040-9383(87)90009-7)
- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the American Mathematical Society 12 (1985) 103–111](https://doi.org/10.1090/S0273-0979-1985-15304-2)

### Closed surfaces are classified by Euler characteristic and orientability

**Remember:** Compact, no edge, connected: then Euler characteristic and orientability say everything.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** A closed surface is a surface that is compact and has no boundary. The sphere counts as the connected sum of zero tori. A connected sum glues two surfaces together after you cut a small disc out of each.

**Problem.** The classification of surfaces: every connected closed surface is a sphere with handles or a connected sum of projective planes.

**How the definition helps.** Each condition removes cases that the short list of surfaces cannot handle. Compactness excludes surfaces such as the Loch Ness monster surface (a plane with infinitely many handles) and the sphere with a Cantor set removed. These need a space of ends to classify, which records the ways the surface goes off to infinity. Excluding boundary removes the Möbius strip and the disc, which are handled afterwards by counting boundary circles. Counting the sphere as genus 0 puts it into the same family as the other surfaces, so the Euler characteristic and orientability determine the surface. The hard step that remains is to show that every compact surface can be triangulated.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “In other words, Euler characteristic and orientability completely classify closed surfaces up to homeomorphism.”

**Sources:**

- [C. Thomassen, The Jordan–Schönflies theorem and the classification of surfaces, American Mathematical Monthly 99 (1992) 116–130](https://doi.org/10.2307/2324180)

### Polyhedra whose surface is a manifold are classified by Euler characteristic

**Remember:** If the surface looks like the plane near every point, surface topology applies.

*Rules out counterexamples.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)), 57Q05. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The definition requires the surface of a polyhedron to be a manifold. So each edge lies on exactly two faces, and the faces around each vertex form a single cycle.

**Problem.** Two numbers decide the topological type of a polyhedron's surface: its Euler characteristic χ and whether it is orientable.

**How the definition helps.** The manifold condition lets the classification of closed surfaces apply directly. The condition rules out two cubes that share only one edge, and two cubes that share only one vertex. For example, an orientable polyhedron with χ = 2 must be a topological sphere. The deep part is the classification of surfaces itself; the definition only makes it available.

**Wikipedia:** [Polyhedron](https://en.wikipedia.org/wiki/Polyhedron). It says: “For polyhedra defined in these ways, the classification of manifolds implies that the topological type of the surface is completely determined by the combination of its Euler characteristic and orientability.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients give lens spaces cyclic fundamental groups

**Remember:** The group acting freely on the sphere becomes the fundamental group.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Take p ≥ 2 and q coprime to p. Define L(p;q) as the quotient of the unit sphere in ℂ² by the cyclic action generated by (z, w) ↦ (exp(2πi/p)z, exp(2πiq/p)w). The gluing definition joins two solid tori by identifying their boundary tori.

**Problem.** For every q coprime to p, the fundamental group of L(p;q) is ℤ/pℤ.

**How the definition helps.** The quotient definition supplies a simply connected cover, so one reads the fundamental group from the group of symmetries of the cover (our own). No nonidentity power of the generator can fix a point, because at least one coordinate is nonzero and q is coprime to p (our own). The sphere is simply connected, so it is the universal cover and its covering group is ℤ/pℤ (our own). With the gluing definition, one calculates the fundamental group from the two solid tori and their overlap (our own). The work shifts into identifying the two constructions (our own).

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The fundamental group of all the lens spaces L(p;q₁,…, qₙ) is ℤ/pℤ independent of the qᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients identify lens spaces when q changes sign or inverts

**Remember:** Conjugate one coordinate to negate q, or swap coordinates to invert it.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Take p ≥ 2 and q coprime to p. Define L(p;q) as the quotient of the unit sphere in ℂ² by the cyclic action generated by (z, w) ↦ (exp(2πi/p)z, exp(2πiq/p)w). In the gluing description, one joins two solid tori by identifying their boundary tori.

**Problem.** If q′ ≡ ±q or q′q ≡ ±1 modulo p, then L(p;q) and L(p;q′) are homeomorphic. The homeomorphism may reverse orientation.

**How the definition helps.** The quotient definition makes each homeomorphism a coordinate change that carries orbits to orbits (our own). Complex conjugation in the second coordinate changes the generator for q into the generator for −q (our own). If rq ≡ 1 modulo p, raise the generator to the rth power to get the same cyclic group (our own). Now swapping coordinates gives the generator for r (our own). With the gluing definition one must track changes of coordinates on the boundary tori instead (our own). The hard classification step is the converse, which the source notes does not follow from these symmetries.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “they are "obviously" homeomorphic, as one can easily produce a homeomorphism. It is harder to show that these are the only homeomorphic lens spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Knot complement groups are invariant without checking diagram moves

**Remember:** A homeomorphism of complements gives an isomorphism of knot groups.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The knot group is the fundamental group of the complement of a knot in the 3-sphere. The diagram-based Wirtinger presentation uses one generator for each arc and one relation for each crossing.

**Problem.** Equivalent knots have isomorphic knot groups.

**How the definition helps.** The complement definition makes invariance a direct consequence of how homeomorphisms act on fundamental groups. A homeomorphism that takes one knot to the other restricts to a homeomorphism of their complements. Starting with the diagram presentation, one can instead check the local diagram changes called Reidemeister moves (our own). The work in connecting the two definitions is the van Kampen computation, which assembles the complement group from pieces (our own).

**Wikipedia:** [Knot group](https://en.wikipedia.org/wiki/Knot_group). It says: “Such a homeomorphism restricts onto a homeomorphism of the complements of the knots, and this restricted homeomorphism induces an isomorphism of fundamental groups.”

**Sources:** none listed. No primary source with a working link was found.

### Defining universal covers by a universal property makes them unique

**Remember:** Two objects that map uniquely to everything are uniquely isomorphic.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Fix a connected base B with a base point. Call a connected pointed cover universal if it has exactly one pointed map over B to every connected pointed cover. A pointed map over B commutes with the projections to B and keeps the base points. The usual definition calls a cover universal if it is simply connected, that is, path-connected with every loop contractible.

**Problem.** A pointed universal cover is unique up to a unique isomorphism over the base.

**How the definition helps.** With the universal-property definition, uniqueness is the standard argument for initial objects. The maps in both directions compose to a pointed self-map over B, and the only such map is the identity. The nLab supports the key step: maps between covers over B are unique once the image of one point is fixed. In our own account, the work moves to the lifting criterion, which shows that a simply connected cover has this universal property. That criterion needs a base that is path-connected and locally path-connected.

**nLab:** [universal covering space](https://ncatlab.org/nlab/show/universal+covering+space). It says: “and that these are unique once we specify the image of a single point, which we may freely do (in the given fiber).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Describing covers as coset actions makes the deck group N(H)/H

**Remember:** A deck map is a symmetry of the coset action.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Let G = π₁(B, b) be the fundamental group of the base. Describe a connected cover by the action of G on its fiber over b, which comes from lifting loops. The action is transitive, so the fiber is the set of right cosets Hg of a subgroup H. The geometric definition uses a map that splits into separate copies over small open sets.

**Problem.** Let B be path-connected and locally path-connected, and let H be the image of the fundamental group of a connected cover. Its deck group, the group of self-maps of the cover over B, is isomorphic to N(H)/H. Here the normalizer N(H) is the set of g in G with gHg⁻¹ = H.

**How the definition helps.** With covers as coset actions, a deck map is a bijection of cosets that respects the action, which is pure group theory. In our own account, such a bijection is fixed by the image Hn of the coset H. That image must have the same stabilizer as H, which holds exactly when n is in N(H). Two elements n and n′ give the same bijection exactly when Hn = Hn′, which gives N(H)/H. The work moves to the monodromy correspondence, which turns covers and the maps between them into sets with an action of G. The nLab states that monodromy is a functor from covers to such actions. Hatcher proves the theorem as Proposition 1.39 under the stated conditions, and the extra condition on small loops in the record is not needed.

**nLab:** [category of covering spaces](https://ncatlab.org/nlab/show/category+of+covering+spaces). It says: “For X a topological space then forming monodromy is a functor from the category of covering spaces over X to that of permutation groupoid representations of the fundamental groupoid of X”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3, Proposition 1.39](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Allowing the empty manifold makes it a manifold of every dimension

**Remember:** With no points to check, the empty space passes every local test.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 57N99 (Topological manifolds), 54A05. arXiv math.GT, math.GN. Level 2: later undergraduate.

**Definition.** A topological n-manifold is a Hausdorff space with a countable base of open sets. Each point has a neighbourhood homeomorphic to an open set in ℝⁿ. The empty space has no points, so every condition about points holds.

**Problem.** The empty space is an n-manifold for every n. So the invariance of dimension, which says that a manifold has only one dimension, holds only for nonempty manifolds.

**How the definition helps.** The definition checks conditions at each point, so the empty space satisfies them all. In our own reading, this costs one exception, since 'the dimension of a manifold' needs a nonempty manifold. It pays back elsewhere, which is also our own reading. The boundary of a manifold without boundary is the empty manifold. So 'a boundary has no boundary' needs no special case. Cobordism also needs none: a closed manifold bounds exactly when it is cobordant to the empty manifold. What stays hard is invariance of dimension for nonempty manifolds, which needs Brouwer's invariance of domain; this remark is our own.

**Paper or page:** [Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold), [Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff). It says: “Let T = (∅, {∅}) be the empty topological space. Then T is a topological n-manifold for every n ∈ ℕ.”

**Sources:**

- [ProofWiki, Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold)
- [ProofWiki, Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff)

### Cell counts make Euler characteristic additive for subcomplexes and quotients

**Remember:** Count shared cells once, and count the collapsed subcomplex as one point.

*True by definition.* MSC 57Q05 (General topology of complexes), 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells. Its Euler characteristic χ is the alternating sum of cell counts by dimension. A subcomplex consists of cells together with their attaching boundaries.

**Problem.** For subcomplexes A and B of a finite CW complex, show χ(A ∪ B) = χ(A) + χ(B) − χ(A ∩ B). For a nonempty subcomplex A of X, show χ(X) = χ(A) + χ(X/A) − 1.

**How the definition helps.** The cell-count definition makes both formulas direct because the constructions either share cells or replace cells by one point. In our own proof, count shared cells once in each dimension for the union. The quotient keeps the cells outside A and adds a point in place of A. With the Betti-number definition, one needs an exact sequence whose alternating sum of ranks is zero. The work shifts to proving the cell count equals the alternating sum of Betti numbers. The formula can fail for arbitrary pieces, since a point and its complement have Euler characteristics 1 and 2. Their union is the line, whose Euler characteristic is 1.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If X is a finite CW-complex and A is a subcomplex, then χ(X) = χ(A) + χ(X/A) − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic multiply on products

**Remember:** Cell dimensions add under products, so their alternating signs multiply.

*True by definition.* MSC 57Q05 (General topology of complexes), 55U25. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells. Its Euler characteristic χ adds the counts in even dimensions and subtracts the counts in odd dimensions. This equals the alternating sum of the Betti numbers, the ranks of the homology groups.

**Problem.** For finite CW complexes M and N, show that χ(M × N) = χ(M) · χ(N).

**How the definition helps.** The cell-count definition makes the formula a product because cells in the product are pairs of cells and their dimensions add. In our own proof, the sign for each product cell is the product of the two original signs. The alternating count therefore factors. The Betti-number proof instead uses the Künneth formula, which computes homology of products from the homology of the factors. The work shifts to identifying the cell count with the alternating sum of Betti numbers.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Also, the Euler characteristic of any product space M × N is χ(M × N) = χ(M) · χ(N).”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic scale by the covering degree

**Remember:** Every cell downstairs gives one cell upstairs for each sheet.

*True by definition.* MSC 57Q05 (General topology of complexes), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells, one dimension at a time. Its Euler characteristic χ is the alternating sum of its cell counts. This also equals the alternating sum of its Betti numbers, the ranks of the homology groups.

**Problem.** Show that a k-sheeted cover of a finite CW complex has k times its Euler characteristic.

**How the definition helps.** The cell-count definition makes the formula immediate because each cell lifts once per sheet. In our own proof, lift the map attaching each cell from its closed disk, which is simply connected. The lifted disks attach the cells of the covering space. Every dimension therefore has k times as many cells. The Betti-number definition does not give this count directly because the homology groups need not grow by k. The work shifts to proving that the counts agree with the Betti-number definition.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Similarly, for a k-sheeted covering space M̃ → M, one has χ(M̃) = k · χ(M).”

**Sources:** none listed. No primary source with a working link was found.

### Tangent-map degree makes turning number invariant through immersed curves

**Remember:** Nonzero velocity keeps the unit tangent map defined throughout the deformation.

*True by definition.* MSC 57R42 (Immersions in differential topology), 55M25, 53A04. arXiv math.GT, math.DG. Level 2: later undergraduate.

**Definition.** An immersed plane curve is smooth and its velocity never vanishes. For a closed immersed curve, take the map that sends each point of the parameter circle to the unit velocity. Its degree is the turning number, the signed number of turns of the velocity. An alternative definition divides the total signed curvature by 2π.

**Problem.** Show that turning number stays fixed in a deformation through immersed closed plane curves with continuously varying velocities.

**How the definition helps.** The degree definition gives invariance because a deformation through immersions continuously deforms the unit velocity map. Degree is constant under such a deformation. With the signed-curvature definition, our own comparison is that you must relate the integral to the net change in tangent angle. The work shifts to degree invariance and the agreement of the definitions. The converse is the hard direction of the Whitney–Graustein theorem, which classifies these immersions by turning number.

**Wikipedia:** [Regular homotopy](https://en.wikipedia.org/wiki/Regular_homotopy). It says: “two immersions are regularly homotopic if and only if they have the same turning number – equivalently, total curvature; equivalently, if and only if their Gauss maps have the same degree/winding number.”

**Sources:** none listed. No primary source with a working link was found.

### Dihedral representations make Fox coloring counts link invariants

**Remember:** Fox colorings count maps that send meridians to reflections.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** For n ≥ 3, a Fox n-coloring is a homomorphism from the link complement group to the symmetry group of a regular n-gon. It sends each meridian, a small loop around a strand, to a reflection. In a diagram, the labels are integers modulo n on arcs. Twice the label on the overpassing arc must equal the sum of the labels on the two underpassing arcs.

**Problem.** The number of Fox n-colorings, including the constant colorings, does not depend on the link diagram. In particular, the existence of a nonconstant Fox 3-coloring is a link invariant.

**How the definition helps.** The representation definition counts maps from a group with specified meridians, a pair that a link equivalence preserves (our own). The Wirtinger presentation, which reads the group from the diagram, supplies one meridian generator for each arc (our own). Label i means reflection tsⁱ, where t is a reflection and s rotates through 2π/n. The group relation at a crossing becomes exactly the rule for labels (our own). This correspondence does not require surjectivity, which would discard constant colorings and can discard nonconstant ones for composite n (our own). The work shifts from checking local diagram moves to the Wirtinger presentation and this correspondence (our own).

**Wikipedia:** [Fox n-coloring](https://en.wikipedia.org/wiki/Fox_n-coloring). It says: “Such reflections correspond to elements tsⁱ of the dihedral group, where t is a reflection and s is a generating (2π/n) rotation of the n-gon.”

**Sources:** none listed. No primary source with a working link was found.

### Gauss map degree makes linking number invariant under isotopy

**Remember:** The knots stay apart, so their Gauss map keeps its degree.

*True by definition.* MSC 57K10 (Knot theory), 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Take two disjoint, oriented smooth knots in three-dimensional space. The Gauss map sends a pair of points, one on each knot, to the unit vector from the second to the first. Linking number is its degree, a signed count of preimages taken where the derivative is invertible at each preimage. The diagram definition instead halves the signed crossing count between the knots, with compatible sign conventions.

**Problem.** Show that linking number stays fixed during an isotopy, a motion through disjoint knots.

**How the definition helps.** The degree definition gives invariance because moving disjoint knots continuously deforms their Gauss map. With the diagram definition, one checks each local change that connects diagrams of the same link. The work shifts to proving that degree is invariant under deformation and that the two definitions agree. A generic projection direction counts crossings with the first knot on top. In our own explanation of the half factor, the opposite direction counts the other crossings, and both counts equal the degree.

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “Isotopy invariance of the linking number is automatically obtained as the degree is invariant under homotopic maps. Any other regular value would give the same number, so the linking number doesn't depend on any particular link diagram.”

**Sources:**

- [Ricca, R. L.; Nipoti, B. (2011). Gauss' linking number revisited. Journal of Knot Theory and Its Ramifications 20(10), 1325–1343.](https://doi.org/10.1142/S0218216511009261)

### Knot complement homology makes linking number an integer

**Remember:** A loop in the knot complement represents an integer multiple of the generator.

*True by definition.* MSC 57K10 (Knot theory), 55N10. arXiv math.GT. Level 3: graduate.

**Definition.** Let K be an oriented knot, a smoothly embedded circle in three-dimensional space. The first homology of its complement is ℤ, generated by a small loop that circles K once in the positive direction. The linking number of a disjoint oriented loop L with K is the integer giving the class of L in that group. The diagram definition instead halves the signed count of crossings between K and L.

**Problem.** Show that linking number is an integer. For the diagram definition, this means the signed crossing count between two knots is even.

**How the definition helps.** The homology definition gives an integer because the knot complement has first homology ℤ. The diagram definition needs an argument, which the nLab gives. It separates crossings by which knot passes over the other. Crossing changes and local diagram moves show that the two signed counts agree. Our own explanation of the shift in work is that one must compute the complement homology and match the crossing count.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “We deduce that n₁ − n₂ = 0 in all cases. Hence n₁ = n₂, and the linking number is equal to ½(2n₁) = n₁ = n₂.”

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “More generally, if either of the curves is simple, then the first homology group of its complement is isomorphic to Z. In this case, the linking number is determined by the homology class of the other curve.”

**Sources:** none listed. No primary source with a working link was found.

### Knot genus from orientable surfaces shows the unknot is not a sum

**Remember:** Genus adds under knot sum, so nothing cancels a real knot.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** The genus of a knot is the least genus of a Seifert surface for it. A Seifert surface is a compact, connected, orientable surface whose boundary is the knot. The unknot is the only knot of genus zero, because it bounds a disk.

**Problem.** Knot genus is additive: the genus of K₁ \# K₂ is the genus of K₁ plus the genus of K₂. So a sum of two nontrivial knots is never the unknot.

**How the definition helps.** Genus is a nonnegative integer that adds up, so a nontrivial summand can never be cancelled. Each nontrivial knot has genus at least 1, so any sum of them has genus at least 1 and is knotted. Our own remark: requiring orientable surfaces matters here, because the nonorientable analogue, the crosscap number, is not additive in general. In codimension at least three, two nontrivial knots can add up to an unknot. What stays hard is the inequality that genus does not drop under sum, which needs cut-and-paste of surfaces.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Connected sum](https://en.wikipedia.org/wiki/Connected_sum). It says: “In three dimensions, the unknot cannot be written as the sum of two non-trivial knots. This fact follows from additivity of knot genus”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Orientable Seifert surfaces give every knot a Seifert matrix

**Remember:** Two sides let you push loops off the surface and count linking.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A Seifert surface for an oriented knot or link L is a compact, connected, oriented surface in 3-space. Its boundary is L, with the induced orientation. Orientable means the surface has two sides.

**Problem.** Every tame oriented knot or link has a Seifert surface, built by Seifert's algorithm from a diagram. Its Seifert matrix V is integral, with V − Vᵀ the intersection form of the surface. The Alexander polynomial is det(V − tVᵀ) up to a unit.

**How the definition helps.** Because the surface has two sides, each loop on it can be pushed off in the positive direction. The linking numbers of loops with these push-offs form the Seifert matrix. A Möbius band has only one side, so this push-off is not defined there. Every knot bounds such a surface, so the matrix always exists. Different Seifert surfaces give different matrices, related by moves that do not change the Alexander polynomial or the signature (our own remark on the moves). What stays hard is that Seifert's algorithm need not give a surface of least genus.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface). It says: “The standard Möbius strip has the unknot for a boundary but is not a Seifert surface for the unknot because it is not orientable.”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Oriented knots factor uniquely into prime knots

**Remember:** Knots add as whole numbers multiply, with the unknot as 1.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** The connected sum of two knots cuts each knot open and joins the ends. It uses oriented knots, and it joins them so that the orientations match. A prime knot is a nontrivial knot that is not the sum of two nontrivial knots.

**Problem.** Every knot is a sum of prime knots in exactly one way.

**How the definition helps.** With orientations, the sum is well defined, and knots then factor uniquely. On unoriented knots, the sum is not well defined. Take the pretzel knots P(3,5,7) and P(3,5,9), which are noninvertible (not the same as their reverse). Their four oriented sums give two different unoriented knots. With orientations, knot classes form a commutative monoid with the unknot as identity and unique prime factorization. Leaving the unknot out of the primes keeps the factorization unique, as leaving 1 out of the prime numbers does (our own comparison). That the unknot is not a sum of two nontrivial knots is a real theorem. Its proof uses knot genus or the Mazur swindle.

**Wikipedia:** [Connected sum](https://en.wikipedia.org/wiki/Connected_sum), [Prime knot](https://en.wikipedia.org/wiki/Prime_knot). It says: “Under this operation, oriented knots in 3-space form a commutative monoid with unique prime factorization, which allows us to define what is meant by a prime knot.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced alternating diagrams minimize crossings

**Remember:** A reduced alternating diagram already uses the fewest possible crossings.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A link diagram is alternating if overcrossings and undercrossings alternate as one follows each component. It is reduced if no simple closed curve crosses the diagram only at one crossing and separates its four strands into two pairs.

**Problem.** Every reduced alternating diagram of a knot realizes the knot’s crossing number, the least number of crossings in any diagram.

**How the definition helps.** Reducedness excludes a removable twist that could increase the crossing count, in our own explanation. The Jones polynomial gives a lower bound through its span, the difference between its highest and lowest exponents. For a reduced alternating knot diagram, that span equals its crossing count. In our own example, a circle with one twist is an alternating unknot diagram. Removing the twist gives a diagram with no crossings.

**Wikipedia:** [Tait conjectures](https://en.wikipedia.org/wiki/Tait_conjectures). It says: “a knot diagram is called "reduced" if all the "isthmi", or "nugatory crossings" have been removed.”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987).](https://doi.org/10.1016/0040-9383(87)90009-7)

### Signed crossing counts make linking number symmetric

**Remember:** Swapping the knot names changes neither the crossings nor their signs.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** Take a plane diagram of two disjoint oriented knots. The directions of the two strands and which passes over the other give each crossing a sign. The linking number is half the sum of the signs at crossings between the knots. Another definition counts signed intersections of one knot with an oriented surface bounded by the other.

**Problem.** Show that the linking number is unchanged when the two knots switch roles.

**How the definition helps.** The crossing definition makes symmetry immediate because switching the knot names changes neither the crossing set nor the signs. In our own comparison, the surface definition instead needs a proof that using a surface for either knot gives the same count. The nLab checks that the crossing count survives the local moves between diagrams of the same link. The work also includes showing that the crossing and surface definitions agree.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “The linking number of Cᵢ with Cⱼ where Cᵢ and Cⱼ are distinct components of D, is to be one half of the sum of the signs of the crossings of Cᵢ with Cⱼ”

**Sources:** none listed. No primary source with a working link was found.

### The Alexander covering module gives monic polynomials for fibered knots

**Remember:** A fibered knot turns the Alexander polynomial into a characteristic polynomial.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A knot in the 3-sphere is fibered if its complement is a bundle over the circle, locally a product with a surface. Let F be that surface and g the map that returns F to itself after one circuit. Use H₁ of the infinite cyclic cover as a module on which t acts by shifting sheets. Define the Alexander polynomial to generate the module's presentation ideal, rather than by a determinant from a spanning surface.

**Problem.** For a fibered knot the Alexander polynomial is det(tI − A), up to a factor ±tⁿ. Here A is the action of g on H₁(F; ℤ), with the shift t chosen to match it. This determinant is monic and has constant term ±1.

**How the definition helps.** The covering definition lets the return map present the Alexander module directly (our own). Unwrapping the base circle gives F times a line, so the module is H₁(F; ℤ) with t acting as A (our own). Thus tI − A presents the module, and its determinant gives the polynomial. The leading coefficient is 1, and the constant coefficient is ±1 because A is invertible over ℤ (our own). The key topological step is identifying the unwrapped bundle with the infinite cyclic cover of the knot complement (our own).

**Wikipedia:** [Fibered knot](https://en.wikipedia.org/wiki/Fibered_knot), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial of a fibered knot is monic, i.e. the coefficients of the highest and lowest powers of t are plus or minus 1.”

**Sources:** none listed. No primary source with a working link was found.

### Knot quandle maps make diagram coloring counts invariant

**Remember:** Count maps from the knot quandle instead of checking local diagram moves.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** In a quandle, x ▷ x = x and each fixed right input gives a bijection preserving the operation. The knot quandle uses paths from a basepoint to the knot's boundary torus, with endpoints allowed to slide on the torus. Its operation inserts a small loop around the knot via the second path. A diagram coloring instead assigns quandle elements to arcs using the operation at each crossing.

**Problem.** For any finite quandle Q, the number of Q-colorings does not depend on the oriented knot diagram.

**How the definition helps.** Counting quandle homomorphisms, which preserve the operation, makes the result depend on the knot quandle rather than the diagram. A homeomorphism of oriented knot complements preserves the path construction and the direction of loops around the knot (our own). The work is to establish the diagram presentation, with one generator per arc and one coloring relation per crossing (our own). Thus each assignment satisfying the crossing rules extends to exactly one homomorphism (our own).

**Wikipedia:** [Racks and quandles](https://en.wikipedia.org/wiki/Racks_and_quandles). It says: “Less powerful but more easily computable invariants of knots may be obtained by counting the homomorphisms from the knot quandle to a fixed quandle Q.”

**Sources:**

- [David Joyce, A classifying invariant of knots, the knot quandle, Journal of Pure and Applied Algebra (1982)](https://doi.org/10.1016/0022-4049(82)90077-9)

### Alexander polynomials from covers detect perfect knot commutator subgroups

**Remember:** Alexander polynomial one means the covering module is zero.

*True by definition.* MSC 57K14 (Knot polynomials), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** Let G be the knot complement group and G′ its commutator subgroup, generated by all products aba⁻¹b⁻¹. In the cover X with fundamental group G′, shifting sheets acts as t on H₁(X; ℤ), making it a module over ℤ\[t, t⁻¹\]. The Alexander polynomial generates the zeroth Fitting ideal, the ideal of full-size minors of a square matrix presenting this module.

**Problem.** The Alexander polynomial is a unit, so it can be normalized to 1, exactly when G′ equals its own commutator subgroup.

**How the definition helps.** Unlike a diagram determinant, the covering definition identifies the module with G′ made abelian (our own). The zeroth Fitting ideal lies in the annihilator, the set of scalars that kill the whole module (our own). Hence the ideal is the whole ring exactly when the module is zero (our own). First integral homology is the fundamental group made abelian, which is zero precisely when the group equals its own commutator subgroup (our own). The work lies in showing that the covering module admits a square presentation, so this ideal has a single generator (our own).

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “Since the Alexander ideal is principal, Δₖ(t) = 1 if and only if the commutator subgroup of the knot group is perfect (i.e. equal to its own commutator subgroup).”

**Sources:** none listed. No primary source with a working link was found.

### Seifert matrices multiply Alexander polynomials and add signatures under connected sum

**Remember:** Join the surfaces and the Seifert matrices sit in separate blocks.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** A Seifert surface is a connected oriented surface bounded by a knot. Its Seifert matrix V records linking numbers between basis loops and copies pushed off the surface. Define the Alexander polynomial as det(V − tVᵀ) up to factors ±tⁿ, and the knot signature as the signature of V + Vᵀ. The signature counts positive eigenvalues minus negative ones.

**Problem.** For the connected sum K \# J, the Alexander polynomial is the product, up to a unit ±tⁿ. The knot signature is the sum.

**How the definition helps.** The Seifert matrix definitions turn connected sum into a block diagonal matrix, so the claims follow from linear algebra (our own). Join spanning surfaces for the two knots by a band across a separating sphere (our own). A basis loop from one side has zero linking number with a pushed-off loop from the other (our own). Determinants multiply across blocks, and signatures add (our own). The quoted satellite lemma gives the same blocks for the specific winding-one pattern that ties in K (our own). For the covering definition of the polynomial, one first builds a presentation from a surface (our own). The main work is proving that the surface formulas define knot invariants (our own).

**Paper or page:** [An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2). It says: “If K′ is a satellite of J by K and n is the winding number of the embedding of K in the solid torus, then a Seifert matrix A for K′ is given by the block matrix”

**Sources:**

- [Daniel Carter, An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2)

### The HOMFLY skein definition gives Jones and Conway specializations

**Remember:** Specialize the HOMFLY relation and the unknot value identifies the invariant.

*True by definition.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P equals 1 on the unknot and obeys aP(L₊) − a⁻¹P(L₋) = zP(L₀). The three oriented links agree except at one crossing, where it is positive, negative or smoothed. Earlier definitions used operator algebras for Jones and a diagram matrix for Alexander.

**Problem.** Set a = 1 to obtain the Alexander–Conway polynomial. Set a = s⁻² and z = s − s⁻¹ to obtain the normalized Jones polynomial with parameter t = s².

**How the definition helps.** The skein definition makes each specialization a check of one local relation and one initial value (our own). Applying the relation to a curl fixes the values on unlinks, which are disjoint unknotted circles (our own). By changing crossings until the diagram is an unlink, the relation then determines the invariant using diagrams with fewer crossings (our own). The stated substitutions produce the Conway and Jones relations, with value 1 on the unknot (our own). The work lies in existence of the HOMFLY invariant and in proving that the older polynomials obey their skein relations (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “it generalizes two polynomials previously discovered, the Alexander polynomial and the Jones polynomial, both of which can be obtained by appropriate substitutions from HOMFLY.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The HOMFLY skein definition gives the mirror formula

**Remember:** Mirroring swaps the two crossing terms, just like inverting ℓ.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P equals 1 on the unknot and obeys ℓP(L₊) + ℓ⁻¹P(L₋) + mP(L₀) = 0. The three oriented diagrams differ only at one site, with a positive crossing, a negative crossing or an oriented smoothing. One can also construct P from a trace on a quotient of the braid group algebra.

**Problem.** For the mirror of an oriented link L, the HOMFLY polynomial is P(L) with ℓ replaced by ℓ⁻¹ and m unchanged.

**How the definition helps.** The skein definition reduces the mirror formula to checking one relation and the unknot value (our own). Mirroring swaps positive and negative crossings and commutes with oriented smoothing (our own). Take the polynomial of the mirror and replace ℓ by ℓ⁻¹ (our own). The resulting function obeys the defining relation and still equals 1 on the unknot (our own). Uniqueness from the relation gives the formula, without comparing braid representatives or traces (our own). The work lies in proving the skein relation and the unknot value determine an invariant uniquely (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “Pₖ(ℓ,m) = P₍Mirror Image(K)₎(ℓ⁻¹,m), so the HOMFLY polynomial can often be used to distinguish between two knots of different chirality.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The infinite cyclic cover makes the Alexander polynomial a knot invariant

**Remember:** Equivalent oriented knots have the same covering module.

*True by definition.* MSC 57K14 (Knot polynomials), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** Send a positive meridian of an oriented knot in the 3-sphere to 1 to define a homomorphism from the complement group to ℤ. In the corresponding cover X, a meridian, or small loop around the knot, lifts to a path between successive sheets. The shift t between sheets makes H₁(X; ℤ) a module over the Laurent polynomial ring ℤ\[t, t⁻¹\]. The Alexander polynomial generates the ideal of presentation minors of size equal to the number of module generators.

**Problem.** Equivalent oriented knots have the same Alexander polynomial up to a factor ±tⁿ.

**How the definition helps.** The cover definition makes invariance follow from a homeomorphism of complements that preserves the meridian map (our own). The homeomorphism lifts and commutes with the shift t, so it gives an isomorphism of modules (our own). The ideal depends only on the module, not on its presentation. A Seifert surface, an oriented spanning surface for the knot, gives a square presentation and hence one generator for the ideal (our own). In place of checking invariance for a diagram matrix, one shows that the matrix presents the covering module (our own).

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The transformation t acts on the homology and so we can consider H₁(X) a module over the ring of Laurent polynomials ℤ\[t, t⁻¹\]. This is called the Alexander invariant or Alexander module.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the AMS (1928)](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### The Seifert matrix bounds Alexander degree span by twice knot genus

**Remember:** The size of the Seifert matrix bounds the Alexander degree.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** A Seifert surface is a connected oriented surface bounded by the knot, and its genus g counts its handles. Its first homology has rank 2g. The Seifert matrix V records the linking numbers of basis loops with copies pushed to one side of the surface. Define the Alexander polynomial as det(V − tVᵀ), up to factors ±tⁿ.

**Problem.** The difference between the highest and lowest exponents in a knot's Alexander polynomial is at most twice the knot's least Seifert surface genus.

**How the definition helps.** The Seifert matrix formula bounds the degree by the size of the matrix, which records the surface genus. For a surface of least genus g, each determinant term has at most 2g linear factors. Unlike the covering module definition, this formula gives the bound without first building a presentation from a spanning surface (our own). The work lies in showing that V − tVᵀ presents that module, which also proves independence of the surface (our own).

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial is computed from the Seifert matrix by A(t) = det(V − tV\*), which is a polynomial of degree at most 2g in the indeterminate t.”

**Sources:** none listed. No primary source with a working link was found.

### The Conway skein definition makes its coefficients finite type

**Remember:** Each double point contributes a factor of z.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** The Conway polynomial ∇ equals 1 on the unknot and obeys ∇(L₊) − ∇(L₋) = z∇(L₀). These links agree outside one site, with a positive crossing, a negative crossing or a smoothing there. Extend a knot invariant to a double point by subtracting its negative crossing value from its positive crossing value. It has finite type of order at most n if the extension vanishes on knots with n + 1 double points.

**Problem.** For n ≥ 0, the coefficient of zⁿ in the Conway polynomial is finite type of order at most n.

**How the definition helps.** The skein definition makes the difference at a double point equal to z times the value on the smoothed link (our own). Apply the difference rule at each double point in turn, including on links with more than one component (our own). With n + 1 double points the result has a factor zⁿ⁺¹, so the coefficient of zⁿ is zero (our own). Starting with Alexander's diagram determinant instead, one first has to obtain the Conway skein relation and normalization (our own). The work lies in proving that the skein definition gives a well-defined polynomial on oriented links (our own).

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “The nth coefficient of the Conway polynomial is a Vassiliev invariant of order ≤ n.”

**Sources:**

- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Genus and nested end spaces classify all orientable surfaces

**Remember:** Genus plus the shape of infinity tells you which surface you have.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** An end of a noncompact surface is a way to go to infinity: a consistent choice of an unbounded complementary piece for each compact set. The ends form a space E that is compact and totally disconnected. The ends accumulated by genus, where every neighbourhood holds infinitely many handles, form a closed subset E∞. Here surfaces have no boundary.

**Problem.** Compact surfaces are classified by genus and orientability. Classify noncompact surfaces, such as the plane minus a Cantor set or the surface of infinite genus with one end.

**How the definition helps.** The end space records exactly the information at infinity that genus cannot see. With the pair (E, E∞) the classification becomes one sentence, as in the compact case. For example, infinite-genus surfaces with one end and with two ends differ only in their end spaces (our own example). Kerékjártó stated the result and Richards gave the complete proof in 1963. The work moves into building a homeomorphism from matching end data. The classification is the starting point for big mapping class groups, as in this paper.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “If both Nₕ and Nₚ are finite, then these two numbers, and the topological type of space of ends, classify the surface M up to topological equivalence.”

**Paper or page:** [Conjugacy classes of big mapping class groups](https://arxiv.org/abs/2105.11282). It says: “Let Σ and Σ′ be two orientable surfaces of the same genus. Then Σ and Σ′ are homeomorphic if and only if E∞(Σ) ⊂ E(Σ) and E∞(Σ′) ⊂ E(Σ′) are homeomorphic as nested topological spaces.”

**Sources:**

- [J. Hernández Hernández, M. Hrušák, I. Morales, A. Randecker, M. Sedano, F. Valdez, Conjugacy classes of big mapping class groups, arXiv:2105.11282 (2021)](https://arxiv.org/abs/2105.11282)
- [Ian Richards, On the classification of noncompact surfaces, Trans. Amer. Math. Soc. (1963)](https://doi.org/10.1090/s0002-9947-1963-0143186-0)

### Homeomorphism group components give Birman’s point-pushing exact sequence

**Remember:** Evaluating a homeomorphism at the marked point gives the sequence for forgetting it.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)), 20F36. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Take the group of orientation-preserving homeomorphisms of a closed oriented surface S, with the topology of uniform convergence. Its path components form the mapping class group Mod(S), and the components of the subgroup fixing x form Mod(S, x). One can instead define these groups directly by isotopies, or continuous deformations through the allowed homeomorphisms.

**Problem.** If S has genus at least two, then 1 → π₁(S, x) → Mod(S, x) → Mod(S) → 1 is exact. The left map pushes the marked point around a loop, and the right map forgets the mark.

**How the definition helps.** The component definition makes the maps part of the exact sequence for evaluation at x (our own). Evaluation is a locally trivial bundle whose fiber consists of homeomorphisms fixing x (our own). Its sequence runs from the fundamental group of the homeomorphism group through π₁(S, x) to the two component groups (our own). The identity component of the homeomorphism group is contractible for genus at least two, so the first group vanishes (our own). Since S is connected, the map on component groups is onto (our own). Unlike a direct proof with isotopy classes, this proof uses the bundle theorem and the theorem on the identity component (our own).

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “In words: The mapping class group of a punctured surface is a group extension of the mapping class group of the plain surface by the surface braid group on the set of punctures.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)

### Isotopy classes give the mapping class group its symplectic action

**Remember:** Isotopic maps act alike on homology and preserve oriented intersections.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** For a closed connected oriented surface S, the mapping class group consists of orientation-preserving homeomorphisms up to isotopy, a continuous deformation through homeomorphisms. Another description presents the group by Dehn twists and relations. A Dehn twist makes one full turn in a thin annulus around a closed curve.

**Problem.** The mapping class group of a genus g surface acts on first integral homology by matrices in Sp(2g, ℤ). This is the group of invertible integer matrices preserving the signed intersection pairing of curves.

**How the definition helps.** The isotopy class definition gives an action on homology without checking relations among Dehn twists (our own). A deformation through homeomorphisms is a homotopy, so isotopic maps induce the same homology action (our own). Orientation-preserving homeomorphisms preserve signed intersections, so the matrices preserve the pairing. The group presentation would instead require checking its defining relations on the matrices (our own). The work in connecting those descriptions is proving the Dehn twist presentation (our own). Surjectivity is a separate result obtained by showing that the matrices of twists generate Sp(2g, ℤ).

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “As singular homology is functorial, the mapping class group Mod(S) acts by automorphisms on the first homology group H₁(S).”

**Sources:** none listed. No primary source with a working link was found.

### The torus lattice quotient realizes every matrix in SL₂(ℤ)

**Remember:** A determinant-one integer matrix preserves the lattice and acts on the torus.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** Define the torus as the plane modulo integer translations by vectors in ℤ². One can instead use a product of two circles and work with the two curves given by the circle factors.

**Problem.** The group of isotopy classes of orientation-preserving torus homeomorphisms is isomorphic to SL₂(ℤ), the group of determinant-one integer matrices.

**How the definition helps.** The lattice quotient makes every matrix act by a linear map on the plane that descends to the torus. These maps realize every matrix on first homology and respect multiplication. The two circle curves instead give twist maps, and one must show their matrices generate SL₂(ℤ) to realize all matrices that way (our own). For the isomorphism, the work that remains is to show that an action trivial on homology implies isotopy to the identity (our own). The torus has fundamental group ℤ² and contractible universal cover, so such a map is homotopic to the identity (our own). The theorem that homotopic surface homeomorphisms are isotopic then proves injectivity (our own).

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “It is easy to construct a morphism Φ : SL₂(ℤ) → Mod(𝕋²): every A ∈ SL₂(ℤ) induces a diffeomorphism of 𝕋² via x + ℤ² ↦ Ax + ℤ².”

**Sources:** none listed. No primary source with a working link was found.

### Excluding S³ and fixing summand types makes 3-manifold prime decomposition unique

**Remember:** S³ is the 1 of connected sums, so it is not prime.

*Rules out counterexamples. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** A 3-manifold is prime if it is not S³ and every splitting as a connected sum has an S³ factor. It is irreducible if every embedded 2-sphere bounds a ball. The connected sum M \# N removes a ball from each and glues the two boundary spheres. In the orientable case, the only prime manifold that is not irreducible is S² × S¹.

**Problem.** Kneser and Milnor showed that every compact orientable 3-manifold is a connected sum of primes, unique up to order. We want the same uniqueness in a form that proofs can use.

**How the definition helps.** S³ is the unit for connected sum, so it must be excluded from the primes, as 1 is excluded from the prime numbers. Irreducible pieces are the ones that sphere arguments handle well, and they differ from prime pieces only by copies of S² × S¹. So the decomposition is written as irreducible pieces plus some copies of S² × S¹, as in the quoted theorem. For non-orientable manifolds, S² × S¹ \# N and the twisted S² bundle \# N are homeomorphic when N is non-orientable (our own example). This is why uniqueness needs the convention in the Wikipedia quotation. Xu quotes Wilkes's theorem that the profinite completion of the fundamental group, the limit of its finite quotients, sees the numbers of pieces.

**Wikipedia:** [Prime decomposition of 3-manifolds](https://en.wikipedia.org/wiki/Prime_decomposition_of_3-manifolds). It says: “This sum is unique as long as we specify that each summand is either irreducible or a non-orientable S² bundle over S¹.”

**Paper or page:** [Profinite almost rigidity in 3-manifolds](https://arxiv.org/abs/2410.16002). It says: “with prime decomposition M ≅ M₁ \# ⋯ \# Mₘ \# (S² × S¹)\#ʳ and N ≅ N₁ \# ⋯ \# Nₙ \# (S² × S¹)\#ˢ, where Mᵢ and Nⱼ are irreducible.”

**Sources:**

- [X. Xu, Profinite almost rigidity in 3-manifolds, Adv. Math. 480 (2025) 110505, arXiv:2410.16002](https://arxiv.org/abs/2410.16002)
- [John Milnor, A unique decomposition theorem for 3-manifolds, Amer. J. Math. 84 (1962)](https://doi.org/10.2307/2372800)

### The Poincaré conjecture needs trivial fundamental group, not only sphere homology

**Remember:** Having no holes in homology is not enough; every loop must shrink.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds), 57R60. arXiv math.GT. Level 3: graduate.

**Definition.** The hypothesis of the Poincaré conjecture is that the closed connected 3-manifold has trivial fundamental group. This means that every loop shrinks to a point. Having the homology of a sphere is not enough.

**Problem.** The Poincaré conjecture: every such 3-manifold is homeomorphic to the 3-sphere.

**How the definition helps.** The condition on the fundamental group excludes a known counterexample. Poincaré first claimed that a closed 3-manifold with the homology of a sphere is a sphere. In 1904 he found the counterexample himself. The Poincaré homology sphere has the homology of the sphere, but its fundamental group has 120 elements. He then restated the conjecture with the fundamental group, which excludes this example. The new statement took a century to prove, through Perelman's work on Ricci flow.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture). It says: “This example made it clear that homology is not powerful enough to characterize the topology of a manifold.”

**Sources:**

- [H. Poincaré, Cinquième complément à l'analysis situs, Rend. Circ. Mat. Palermo 18 (1904) 45–110](https://doi.org/10.1007/bf03014091)

### The quaternion quotient gives the Poincaré sphere the homology of S³

**Remember:** A simply connected sphere modulo a perfect group has zero first homology.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** View the 3-sphere as the group of unit quaternions, with multiplication extending complex multiplication. Define the Poincaré sphere as the quotient by left multiplication by the binary icosahedral group. This is the inverse image of the icosahedron's rotation group in the two-to-one map from unit quaternions to rotations of 3-space. Another description glues pairs of opposite faces of a dodecahedron with a twist.

**Problem.** The Poincaré sphere has fundamental group of order 120 and the same integral homology as the 3-sphere.

**How the definition helps.** The quotient definition reveals a universal cover and the group from which first homology is computed (our own). Left multiplication acts freely on the simply connected sphere, so the quotient has fundamental group the binary icosahedral group (our own). The icosahedron has 60 rotations, so their preimage has order 120 (our own). The source identifies the group as perfect, meaning its commutators generate the whole group. Thus making the group abelian gives zero, so first homology vanishes (our own). The closed oriented 3-manifold then has the remaining homology of a sphere by Poincaré duality (our own). The work lies in proving perfectness and identifying this quotient with the face gluing (our own).

**Wikipedia:** [Homology sphere](https://en.wikipedia.org/wiki/Homology_sphere). It says: “In this case, the Poincaré homology sphere is isomorphic to S³/Ĩ where Ĩ is the binary icosahedral group, the perfect double cover of I embedded in S³.”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided incompressible surfaces preserve fundamental groups under inclusion

**Remember:** A two-sided surface without compressing disks keeps its fundamental group.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** Consider a closed connected surface other than a sphere, embedded in the interior of a three-manifold and locally looking like a coordinate plane. A compressing disk meets the surface only in its boundary, a loop that bounds no disk on the surface. The surface is incompressible if it has no compressing disk. It is two-sided if its neighborhood is a product with an open interval.

**Problem.** For such a two-sided incompressible surface, inclusion induces an injection of fundamental groups. A loop that contracts in the ambient manifold already contracts on the surface.

**How the definition helps.** Two-sidedness lets us cut along the surface and apply the loop theorem to either boundary copy, in our own explanation. If inclusion kills a nontrivial loop class, the theorem supplies a compressing disk. The one-sided Klein bottle in the lens space L(4,1) has no compressing disk. Its fundamental group is infinite, while the ambient fundamental group has order four.

**Wikipedia:** [Incompressible surface](https://en.wikipedia.org/wiki/Incompressible_surface). It says: “However, if S is two-sided, the loop theorem implies Kneser's lemma, that if S is incompressible, then it is π₁-injective.”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring spheres in the Euler characteristic gives Thurston's seminorm on homology

**Remember:** Spheres cost nothing, so they cannot drive the complexity down.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K30. arXiv math.GT. Level 3: graduate.

**Definition.** For a compact oriented 3-manifold M and an integer class in its second homology, take the embedded oriented surfaces that represent it. Add up χ₋ = max(0, −χ) over their components and take the least value. Spheres, discs, tori and annuli count zero.

**Problem.** Turn the least complexity of a surface representing a homology class into a norm-like function on H₂(M;ℝ).

**How the definition helps.** With plain −χ, adding small disjoint spheres would push the value down without limit (our own example). Counting only negative Euler characteristic rules this out. Then cut-and-paste of surfaces gives the triangle inequality, and the function is linear on multiples of a class (Thurston; our own summary). Tori still count zero, so the norm can vanish on nonzero classes, and it is only a seminorm. The paper computes the dimension of this null-space for good graph manifolds from the decomposition graph and the genera of the base orbifolds. What stays hard is the shape of the unit ball. For graph manifolds every symmetric rational polygon occurs, but in dimension 3 and higher many rational polyhedra do not.

**Wikipedia:** [Thurston norm](https://en.wikipedia.org/wiki/Thurston_norm). It says: “χ₋(F) = max(0, −χ(F)) is the absolute value of the Euler characteristic for surfaces which are not spheres (and 0 for spheres).”

**Paper or page:** [The Thurston norm of graph manifolds](https://arxiv.org/abs/2412.03437). It says: “The null-space of the Thurston norm on H₂(M;ℝ) has dimension \|Γ\|−χ(Γ)+2∑ᵢ₌₁ⁿ gᵢ, where \|Γ\| is the number of connected components of Γ and χ(Γ) is its Euler characteristic.”

**Sources:**

- [A. V. Cigna, The Thurston norm of graph manifolds, arXiv:2412.03437 (2024)](https://arxiv.org/abs/2412.03437)

### Hyperbolic 3-space quotients make complete hyperbolic manifolds aspherical

**Remember:** A contractible universal cover leaves no higher homotopy groups.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 57M50. arXiv math.GT. Level 3: graduate.

**Definition.** One definition uses a complete Riemannian metric, a smooth rule for lengths and angles, with sectional curvature −1 in every tangent plane. The equivalent definition takes hyperbolic 3-space modulo a discrete group of distance-preserving maps acting freely, so no nonidentity element fixes a point.

**Problem.** A connected complete hyperbolic 3-manifold is aspherical, meaning its homotopy groups above degree one vanish. Its fundamental group has no nonidentity element of finite order.

**How the definition helps.** The quotient definition gives a contractible universal cover, so the higher homotopy groups vanish (our own). A discrete group of isometries of hyperbolic space acts properly discontinuously, so a free action gives a covering (our own). A finite-order isometry fixes a point of hyperbolic space, so the group has no nontrivial finite-order element (our own). Starting from a complete metric requires the space form theorem, which identifies its simply connected cover with hyperbolic 3-space (our own).

**Wikipedia:** [Hyperbolic 3-manifold](https://en.wikipedia.org/wiki/Hyperbolic_3-manifold). It says: “It is generally required that this metric be also complete: in this case the manifold can be realised as a quotient of the 3-dimensional hyperbolic space by a discrete group of isometries (a Kleinian group).”

**Sources:** none listed. No primary source with a working link was found.

### Tetrahedron volumes descend to Bloch groups

**Remember:** Volume sums survive the five-term relation.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 3: graduate.

**Definition.** An ideal tetrahedron has all four vertices at infinity in hyperbolic space. Its shape z is the fourth vertex after moving the first three to 0, ∞, 1 by a fractional linear transformation. Form the rational vector space on shapes, imposing the alternating boundary relation for each ordered set of five distinct vertices. This quotient is the rational pre-Bloch group.

**Problem.** Sending each shape to its signed volume defines a linear map to ℝ. For an oriented complete cusped hyperbolic three-manifold of finite volume, this map sends its Bloch class to its volume.

**How the definition helps.** Geometric additivity verifies the quotient relation without proving a five-term identity for a special function (our own). A flat tetrahedron contributes zero. The Bloch–Wigner dilogarithm is the function D giving this signed volume from the shape. Summing over a triangulation gives the manifold’s volume (our own). The Bloch invariant theorem identifies that sum of shapes with a class independent of the triangulation.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z) = D((z − 1)/z) = D(1/(1 − z)).”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)
- [Fathi Ben Aribi and Ka Ho Wong, The Andersen-Kashaev volume conjecture for FAMED geometric triangulations (2024), ideal tetrahedron volume proposition](https://arxiv.org/abs/2410.10776v1)

### Asking for the fewest tori makes a graph manifold's structure unique

**Remember:** Use as few tori as you can, and the cut is canonical.

*Rules out counterexamples. Confidence: medium.* MSC 57K35 (Other geometric structures on 3-manifolds), 57K30. arXiv math.GT. Level 3: graduate.

**Definition.** A graph manifold is a 3-manifold that can be cut along disjoint embedded tori into Seifert fibred pieces. A Seifert fibred piece is a union of disjoint circles that looks like a circle bundle over a surface, except at finitely many special circles. A graph structure is a choice of such tori and of the fibrations of the pieces.

**Problem.** The cutting tori of a graph manifold are far from unique. Is there a canonical choice, so that the pieces become invariants of the manifold?

**How the definition helps.** Extra tori can always be added, since a vertical torus cuts a Seifert piece into two Seifert pieces (our own example). Requiring the fewest tori rules out these redundant cuts. Waldhausen showed that the minimal structure is then unique, apart from a short list of exceptions. This is the graph manifold case of the JSJ decomposition, the canonical cutting of 3-manifolds along tori (our own remark). The work stays in Waldhausen's proof. Rodau uses the canonical structure to name homology generators of boundary manifolds of line arrangements.

**Paper or page:** [Homology inclusion of complex line arrangements](https://arxiv.org/abs/2501.10558). It says: “Any graph manifold admits a unique graph structure with a minimal number of tori, except for those listed in \[Satz 8.1\].”

**Sources:**

- [A. Rodau, Homology inclusion of complex line arrangements, arXiv:2501.10558 (2025)](https://arxiv.org/abs/2501.10558)

### In the topological category every unimodular form is an intersection form

**Remember:** Drop smoothness, and every unimodular form is some 4-manifold's intersection form.

*Makes the theorem clean to state or prove.* MSC 57K40 (General topology of 4-manifolds), 57K41. arXiv math.GT. Level 3: graduate.

**Definition.** The intersection form of a closed oriented 4-manifold is the pairing on its second homology that counts signed intersections of surfaces. It is unimodular by Poincaré duality. A topological 4-manifold is only required to look locally like ℝ⁴ up to homeomorphism, with no smooth structure. The Kirby–Siebenmann invariant in ℤ/2 vanishes when the manifold has a smooth structure.

**Problem.** Which symmetric unimodular forms over ℤ are intersection forms of closed simply connected 4-manifolds, and does the form decide the manifold?

**How the definition helps.** Working with topological manifolds lets Freedman use constructions that are only topologically standard (our own remark). An example is Casson handles, which are infinite towers of thickened immersed discs. With that choice, every form occurs, and the form with the Kirby–Siebenmann invariant classifies the manifold up to homeomorphism (part 2 of the theorem). For even forms the invariant must equal one eighth of the signature mod 2. The smooth version fails: by Donaldson's theorem, no smooth closed simply connected manifold has the E8 form (our own remark). The hard work moves into Freedman's disc embedding theorem (our own remark). The paper uses the theorem to give an algorithm that decides homeomorphism.

**Paper or page:** [Algorithms in 4-manifold topology](https://arxiv.org/abs/2411.08775). It says: “There exists a closed, oriented, simply connected, topological 4-manifold X whose intersection form is isometric to λ and with Kirby–Siebenmann invariant ks(X)=k ∈ ℤ/2.”

**Sources:**

- [S. Bastl, R. Burke, R. Chatterjee et al., Algorithms in 4-manifold topology, arXiv:2411.08775 (2024)](https://arxiv.org/abs/2411.08775)
- [M. H. Freedman, The topology of four-dimensional manifolds, J. Differential Geom. 17 (1982) 357-453](https://doi.org/10.4310/jdg/1214437136)

### The Wu class definition makes spin intersection forms even

**Remember:** On a spin four-manifold, the class that measures cup squares is zero.

*True by definition.* MSC 57K40 (General topology of 4-manifolds), 57R20, 55S10. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Let M be a closed oriented smooth four-dimensional manifold and work modulo 2 unless stated otherwise. Its second Wu class v₂ satisfies v₂ ⌣ x = Sq²(x) for every degree-two class x, and the operation Sq² squares x. The intersection form pairs two integral degree-two classes by evaluating their product on the oriented manifold. Here spin means that the second Stiefel–Whitney class w₂ of the tangent bundle vanishes.

**Problem.** Show that the intersection form of a closed spin four-manifold is even, meaning every integral class has even self-pairing.

**How the definition helps.** The Wu definition reduces evenness to showing v₂ = 0 because v₂ measures all cup squares modulo 2. Our own derivation uses Wu's theorem, which gives w₂ = v₂ for oriented manifolds. The spin condition then makes every square zero modulo 2, so every integral self-pairing is even. In contrast, the usual definition of w₂ as the obstruction to a spin structure does not mention cup squares. The work is proving Wu's theorem and constructing the Steenrod operations.

**nLab:** [Wu formula](https://ncatlab.org/nlab/show/Wu+formula), [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “The intersection form of a closed spin topological 4-manifold is even.”

**Sources:** none listed. No primary source with a working link was found.

### Locally flat spheres make the Schoenflies theorem true in every dimension

**Remember:** Near each of its points, a locally flat sphere sits like a flat plane.

*Rules out counterexamples.* MSC 57N45 (Flatness and tameness of topological manifolds), 57N50. arXiv math.GT. Level 3: graduate.

**Definition.** An embedded (n − 1)-sphere in the n-sphere is locally flat if the embedding extends to an embedding of a thickened sphere. The thickened sphere is a collar on both sides, that is, the sphere times an interval.

**Problem.** The generalized Schoenflies theorem says that every embedded (n − 1)-sphere in the n-sphere bounds a standard ball on each side.

**How the definition helps.** Local flatness rules out the wild spheres for which the theorem is false. In the plane every Jordan curve is standard. But in three dimensions, Alexander's horned sphere (1924) is a topological sphere whose outside is not simply connected. It fails to be locally flat at a Cantor set of points. Brown (1960), and independently Mazur (1959) with Morse (1960), proved the theorem in every dimension for locally flat spheres, with short proofs by induction. Knots have the same split into tame and wild embeddings (our own remark). The smooth and piecewise-linear versions in dimension 4 are still open.

**Wikipedia:** [Schoenflies problem](https://en.wikipedia.org/wiki/Schoenflies_problem), [Alexander horned sphere](https://en.wikipedia.org/wiki/Alexander_horned_sphere), [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29). It says: “At these Cantor points, the sphere is "wild". This set of wild points is the reason the Schoenflies theorem fails in three dimensions.”

**Sources:**

- [M. Brown, A proof of the generalized Schoenflies theorem, Bull. AMS 66 (1960) 74–76](https://doi.org/10.1090/S0002-9904-1960-10400-4)
- [B. Mazur, On embeddings of spheres, Bull. AMS 65 (1959) 59–65](https://doi.org/10.1090/S0002-9904-1959-10274-3)
- [J. W. Alexander, An example of a simply connected surface bounding a region which is not simply connected, PNAS 10 (1924) 8–10](https://doi.org/10.1073/pnas.10.1.8)

### Mod 2 orientations give Poincaré duality on every closed manifold

**Remember:** Over ℤ/2 every manifold is oriented, so duality never fails.

*Rules out counterexamples.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An orientation of an n-manifold with coefficients in a ring R is a continuous choice of local generators. At each point it picks a generator of the local homology group Hₙ(M, M minus the point; R). With R = ℤ/2 the local group has only one generator, so the choice is forced.

**Problem.** For a closed n-manifold M, the cohomology Hᵏ(M; ℤ/2) is isomorphic to the homology Hₙ₋ₖ(M; ℤ/2) for all k. The real projective plane and the Klein bottle need no special treatment.

**How the definition helps.** Orientation is defined relative to the coefficients, so changing to ℤ/2 removes the obstruction for free. Our own example: with integer coefficients duality fails for the real projective plane. There H₂ with ℤ coefficients is zero, but H⁰ is ℤ, while over ℤ/2 both groups are ℤ/2. Our own remark: this is why Stiefel–Whitney numbers work for every closed manifold. These mod 2 numbers detect whether a manifold is a boundary. What stays hard is integral information, such as torsion, which mod 2 duality cannot see.

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “Poincaré duality holds for any coefficient ring, so long as one has taken an orientation with respect to that coefficient ring; in particular, since every manifold has a unique orientation mod 2, Poincaré duality holds mod 2”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Orientations via local homology make orientability work for topological manifolds

**Remember:** Two generators at each point make a double cover that tests orientability.

*Makes the theorem clean to state or prove.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For an n-manifold M and a point p, the local homology group Hₙ(M, M minus p; ℤ) is ℤ. A local orientation at p is a choice of one of its two generators. An orientation is a choice of local orientations that is locally constant.

**Problem.** Every connected manifold M has an orientation double cover. M is orientable if and only if this cover is disconnected, and if M is not orientable the cover is a connected orientable manifold.

**How the definition helps.** Local homology gives a definition with no derivatives, so topological manifolds get orientations and fundamental classes. The set of local orientations forms a two-sheeted cover of M by construction. A section of this cover is an orientation, so orientability is the question of whether the cover is trivial. Our own remark: since connected double covers of a simply connected space do not exist, every simply connected manifold is orientable. The same definition with another coefficient ring gives orientations relative to that ring. What stays hard is to show that the homological and smooth definitions agree on smooth manifolds.

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “If M is orientable, then M itself is one of these open sets, so O is the disjoint union of two copies of M. If M is non-orientable, however, then O is connected and orientable.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Simple homotopy type separates lens spaces that ordinary homotopy cannot

**Remember:** Lens spaces need torsion, not just homotopy, to be told apart.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** A lens space L(p;q) is the quotient of the 3-sphere by a free action of the cyclic group of order p. The generator rotates the two complex coordinates by angles in ratio 1 to q. Reidemeister torsion is an invariant computed from the cellular chain complex of the universal cover, twisted by the group action. It detects simple homotopy type, not only homotopy type.

**Problem.** L(p;q₁) and L(p;q₂) are homotopy equivalent when q₁q₂ is ± a square mod p. They are homeomorphic only when q₁ is ±q₂ or ±q₂⁻¹ mod p. For example (our own), L(7;1) and L(7;2) are homotopy equivalent but not homeomorphic.

**How the definition helps.** Reidemeister torsion is a finer invariant than homotopy type, so it can see the difference that homotopy groups and homology miss. Lens spaces are the simplest closed manifolds whose homotopy type does not fix their homeomorphism type. Reidemeister classified them up to PL homeomorphism in 1935, and Brody extended this to homeomorphism in 1960. In modern terms, lens spaces are determined by their simple homotopy type. What stays hard is the topological invariance of torsion, which needed Chapman's later theorem in general (our own remark).

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The homeomorphism classification is more subtle, and is given by Reidemeister torsion.”

**Sources:**

- [Kurt Reidemeister, Homotopieringe und Linsenräume, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 11 (1935) 102–109](https://doi.org/10.1007/BF02940717)

### Whitehead torsion extends the h-cobordism theorem to every fundamental group

**Remember:** Not just homotopy, but simple homotopy, makes the cobordism a cylinder.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** An h-cobordism is a compact manifold W whose boundary is two manifolds M and N, such that both inclusions into W are homotopy equivalences. A simple homotopy equivalence is one built from elementary expansions and collapses of cells. Whitehead torsion is an element of the Whitehead group Wh(π₁) that vanishes exactly when a homotopy equivalence is simple.

**Problem.** The s-cobordism theorem applies when W has dimension at least 6. It says that an h-cobordism is a product M × \[0,1\] if and only if its Whitehead torsion vanishes. This holds with no condition on the fundamental group.

**How the definition helps.** Simple homotopy tracks exactly the algebra needed to cancel handles, so the cylinder exists when the torsion is zero. Handles are the standard pieces a manifold is built from. In the simply connected case the Whitehead group is trivial, and Smale's h-cobordism theorem is the special case. For other groups there are h-cobordisms that are not cylinders. Each element of the Whitehead group is realized by some h-cobordism on a given M. What stays hard is to compute Whitehead groups, which are quotients of the algebraic K-group K₁ of the group ring (our own remark).

**Wikipedia:** [h-cobordism](https://en.wikipedia.org/wiki/h-cobordism), [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “If the assumption that M and N are simply connected is dropped, h-cobordisms need not be cylinders; the obstruction is exactly the Whitehead torsion τ (W, M) of the inclusion M ↪︎ W.”

**Sources:**

- [J. H. C. Whitehead, Simple homotopy types, American Journal of Mathematics 72 (1950) 1–57](https://doi.org/10.2307/2372133)
- [Barry Mazur, Differential topology from the point of view of simple homotopy theory, Publications Mathématiques de l'IHÉS 15 (1963) 5–93](https://doi.org/10.1007/BF02684277)

### Asking vertex links to be spheres separates PL manifolds from triangulated ones

**Remember:** Spheres around every vertex mean PL; topology alone is not enough.

*Rules out counterexamples.* MSC 57Q15 (Triangulating manifolds), 57Q25. arXiv math.GT. Level 3: graduate.

**Definition.** The link of a vertex in a simplicial complex is made of the simplices of its star that do not contain it. A combinatorial n-manifold is a simplicial complex in which every vertex link is a PL (piecewise linear) (n−1)-sphere. A triangulated manifold only asks that the whole space be a topological manifold.

**Problem.** The link condition survives subdivision and PL homeomorphism, so it is a property of the PL structure. Pachner's theorem then says that two PL-equivalent combinatorial manifolds are connected by finitely many local Pachner moves.

**How the definition helps.** The link condition is local and is kept by subdivision, so PL manifolds become finite combinatorial objects. It excludes the double suspension of a homology sphere X that is not a sphere, such as the Poincaré sphere (our own detail). By the theorem of Edwards and Cannon (the page cites Edwards), its double suspension is a topological sphere. In the suspended triangulation, the link of a suspension vertex is the single suspension of X, which is not a sphere. So this triangulation of a sphere is not combinatorial, although the sphere itself is a PL manifold. General manifolds stay hard to triangulate. Manolescu showed in 2013 that some manifolds of every dimension from 5 up have none (our own remark).

**Wikipedia:** [Triangulation (topology)](https://en.wikipedia.org/wiki/Triangulation_%28topology%29), [Hauptvermutung](https://en.wikipedia.org/wiki/Hauptvermutung). It says: “Choosing a triangulation t: \|𝒮\| → S²X obtained via the suspension operation on triangulations the resulting simplicial complex is not a PL-manifold, because there is a vertex v such that link(v) is not a n−1 sphere.”

**Sources:**

- [Robert D. Edwards, Suspensions of homology spheres, arXiv:math/0610573 (2006)](https://arxiv.org/abs/math/0610573)

### Acyclic matchings make the discrete Morse complex well defined

**Remember:** Pair cells with cofaces of degree ±1, and never go round in a circle.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q70 (Discrete Morse theory and related ideas in manifold topology), 55U05. arXiv math.AT, math.CO. Level 3: graduate.

**Definition.** An acyclic matching on a finite CW complex pairs some cells a with a cell w(a) of one dimension higher. Each face a must be regular: its attaching degree in w(a) is ±1. The relation 'a is a face of w(a′)' must generate a partial order, so there are no cycles. The cells that are not matched are the critical cells.

**Problem.** A finite CW complex X with an acyclic matching with n critical cells is homotopy equivalent to a CW complex with n cells. The Morse complex, built on the critical cells, has the same integer homology as X.

**How the definition helps.** Each of the two axioms removes one obstacle to writing down the boundary map of the Morse complex. This boundary is a sum over gradient paths between critical cells (chains that alternate between matched pairs and faces). Each path has a multiplicity, which is a product and quotient of attaching degrees. The first axiom makes sure that you only divide by ±1, so the multiplicities are integers. The second axiom makes sure that paths cannot go backwards, so the boundary is well defined. Forman's original theory used discrete Morse functions. The nLab calls the matching form a 'cleaner treatment', and the Forman paper is cited here for the theorems, not for the matching definition.

**nLab:** [discrete Morse theory](https://ncatlab.org/nlab/show/discrete+Morse+theory). It says: “The first axiom of the partial matching guarantees that one only divides by ±1, while the second axiom guarantees that no such path can go "backwards" from c′ up to c.”

**Sources:**

- [Robin Forman, Morse theory for cell complexes, Advances in Mathematics 134 (1998) 90–145](https://doi.org/10.1006/aima.1997.1650)

### A spin structure is a lift through the homotopy fiber of w₂

**Remember:** A spin structure is a chosen trivialization of w₂ of the tangent bundle.

*True by definition. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 55R15. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** The groupoid of spin structures on an oriented manifold X is a homotopy fiber. It is the fiber over the trivial class of the map Map(X, BSO) → Map(X, B²ℤ/2) given by composing with w₂, the second Stiefel–Whitney class. A spin structure on X is a point of this fiber over the classifying map of the tangent bundle. So it is a lift of that map through BSpin → BSO, which is the homotopy fiber of w₂.

**Problem.** An oriented manifold X admits a spin structure exactly when w₂(TX) = 0. If spin structures exist, H¹(X; ℤ/2) classifies them.

**How the definition helps.** With this definition, the existence statement is just the universal property of the homotopy fiber. A lift exists exactly when the composite X → BSO → K(ℤ/2, 2) is null-homotopic, that is, when w₂(TX) = 0. Our own remark: when lifts exist, the space of lifts is a torsor for maps X → K(ℤ/2, 1), so these maps act on it freely and transitively. This gives the classification by H¹(X; ℤ/2). The nLab states the classification with homology H₁(X; C₂) and credits it to Milnor. The real content is that the homotopy fiber of w₂ really is BSpin(n), so this definition agrees with the classical definition by principal Spin(n)-bundles. The nLab also gives a smooth refinement as a lifting bundle gerbe.

**nLab:** [spin structure](https://ncatlab.org/nlab/show/spin+structure). It says: “By construction (the universal property of the homotopy fiber) this is the obstruction to the existence of a lift”

**Sources:**

- [John Milnor, Spin structures on manifolds, L'Enseignement Mathématique 9 (1963) 198–203](https://doi.org/10.5169/seals-38784)
- [Michael K. Murray, Michael A. Singer, Gerbes, Clifford modules and the index theorem, 2003, arXiv:math/0302096](https://arxiv.org/abs/math/0302096)

### Fractional Euler characteristic decides the geometry of every 2-orbifold

**Remember:** Subtract a fraction for each cone point, and the sign decides the geometry.

*Makes the theorem clean to state or prove.* MSC 57R18 (Topology and geometry of orbifolds), 57K20. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** An orbifold is a space locally modelled on ℝⁿ divided by a finite group. For a compact 2-orbifold, χ = χ(X₀) − Σ(1 − 1/nᵢ)/2 − Σ(1 − 1/mᵢ). Here X₀ is the underlying surface, nᵢ are orders of corner reflectors and mᵢ are orders of cone points.

**Problem.** A compact connected 2-orbifold is hyperbolic when χ &lt; 0 and Euclidean when χ = 0. When χ &gt; 0 it is either spherical or bad, which means it has no manifold cover.

**How the definition helps.** A cone point of order m counts as only 1/m of a point. Then the Euler characteristic multiplies by the degree under orbifold covers (our own remark). So an orbifold and its manifold covers have the same sign. Our own remark: the Gauss–Bonnet theorem then ties the sign to the curvature of the geometry. The 17 Euclidean cases are the quotients of the plane by the 17 wallpaper groups. With the ordinary integer Euler characteristic of the underlying surface, no such rule holds: a sphere with three cone points can be hyperbolic. What stays hard is to build the geometric structure, and the bad orbifolds such as the teardrop need separate treatment.

**Wikipedia:** [Orbifold](https://en.wikipedia.org/wiki/Orbifold), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “A 2-dimensional compact connected orbifold has a hyperbolic structure if its Euler characteristic is less than 0, a Euclidean structure if it is 0, and if its Euler characteristic is positive it is either bad or has an elliptic structure”

**Sources:**

- [William P. Thurston, The Geometry and Topology of Three-Manifolds, Princeton lecture notes, 1978–1981, chapter 13](https://library.slmath.org/books/gt3m/)

### Orbifolds as groupoids keep the finite symmetry groups of points

**Remember:** Keep the finite symmetry groups of the points; do not just take the quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R18 (Topology and geometry of orbifolds), 58H05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An orbifold is a proper étale Lie groupoid, up to Morita equivalence. A Lie groupoid is a groupoid whose objects and arrows form manifolds, with smooth structure maps; étale means that the source and target maps are local diffeomorphisms. Morita equivalence is the notion of equivalence under which two groupoids describe the same space. Equivalently, an orbifold is an étale differentiable stack, and locally it looks like the action groupoid ℝⁿ//G of a finite group G acting on ℝⁿ.

**Problem.** Orbifolds should have good maps between them. They should also have the correct invariants, such as orbifold cohomology, the orbifold Euler characteristic and twisted sectors. The underlying quotient space does not see these invariants.

**How the definition helps.** As groupoids, orbifolds keep the isotropy groups (the finite groups that fix each point), so maps and invariants become natural. Satake's definition by charts makes maps between orbifolds hard to define (this is our reading; the nLab lists later work on such maps). Also, the invariants of the underlying topological space are the wrong ones. As groupoids, orbifolds become objects of a bicategory, a 2-category in which composition holds only up to isomorphism. This bicategory is a localization of proper étale groupoids, in which Morita equivalences become invertible (Moerdijk–Pronk). The inertia orbifold, which gives the twisted sectors, is then a natural construction: the nLab describes it as the mapping space from the circle groupoid Bℤ. It still takes a real argument to reconstruct an atlas of charts from a groupoid.

**nLab:** [orbifold](https://ncatlab.org/nlab/show/orbifold). It says: “It has been noticed that the topological invariants of the underlying topological space of an orbifold as a topological space with an orbifold structure are not appropriate, but have to be corrected”

**Sources:**

- [Ieke Moerdijk, Orbifolds as Groupoids: an Introduction, Contemp. Math. 310 (2002) 205–222, arXiv:math/0203100](https://arxiv.org/abs/math/0203100)
- [Ieke Moerdijk, Dorette Pronk, Orbifolds, sheaves and groupoids, K-theory 12 (1997) 3–21](https://doi.org/10.1023/A:1007767628271)

### Chern–Weil forms make the Chern character multiplicative on tensor products

**Remember:** Exponentiate the sum of the two commuting curvatures and take the trace.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** Choose a connection on a complex vector bundle E, a rule for differentiating sections. Its curvature F is a two-form whose values are linear maps of the fibers. The Chern character of E is the de Rham class, the cohomology class of closed forms, of the trace of exp(iF/2π). Another definition writes it as a polynomial in the Chern classes, the basic characteristic classes of complex bundles.

**Problem.** For smooth complex vector bundles E and E′, the Chern character of E ⊗ E′ is the product of their Chern characters.

**How the definition helps.** With the Chern–Weil definition, the identity already holds for the forms that represent the classes. In our own step, the tensor product connection has curvature F ⊗ 1 + 1 ⊗ F′, and these two terms commute. So the exponential splits into a tensor product of two exponentials, and the trace of a tensor product is the product of the traces. In our own comparison, the Chern-class definition needs the splitting principle, which reduces the claim to line bundles. In our own account, Chern–Weil theory carries the work of proving that the class does not depend on the connection and matches the Chern-class formula.

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “and it is multiplicative under the tensor product of vector bundles”

**Sources:** none listed. No primary source with a working link was found.

### Complexification expresses Pontryagin classes of complex bundles through Chern classes

**Remember:** Complexify the underlying real bundle to get the original and its conjugate.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For a real vector bundle F, complexification F ⊗ ℂ extends each fiber from real to complex scalars. Its Chern class c₂ₖ defines the Pontryagin class pₖ(F) = (−1)ᵏc₂ₖ(F ⊗ ℂ). For a complex bundle E, write Ē for the same bundle with multiplication by i replaced by multiplication by −i.

**Problem.** Show that for the real bundle underlying E, the alternating sum 1 − p₁ + p₂ − ⋯ equals c(E)c(Ē). In particular, show p₁ = c₁² − 2c₂.

**How the definition helps.** The complexification definition gives the formula because complexifying the underlying real bundle splits it into E and Ē. The total Chern class c multiplies under direct sums. Conjugation multiplies cᵢ by (−1)ⁱ, so terms of odd index in c(E)c(Ē) cancel in pairs. The terms of even index give the alternating Pontryagin sum and degree four gives p₁ = c₁² − 2c₂. In our own comparison, real curvature formulas do not determine the integral torsion part of the identity. The work relies on the splitting of the complexification and on the Chern class product and conjugation rules.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “This follows from the fact that E⊗ℝℂ ≅ E⊕Ē, the Whitney sum formula, and properties of Chern classes of its complex conjugate bundle.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes Pontryagin classes stable under trivial summands

**Remember:** A trivial real summand becomes a trivial complex summand with Chern class one.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For a real vector bundle E, its complexification E ⊗ ℂ extends each fiber from real to complex scalars. Define pₖ(E) = (−1)ᵏc₂ₖ(E ⊗ ℂ), where c₂ₖ is a Chern class of the complexification. A trivial bundle is a product of the base with a fixed vector space.

**Problem.** Show that adding a trivial real bundle does not change any integral Pontryagin class.

**How the definition helps.** The complexification definition makes stability immediate because a trivial real summand becomes a trivial complex summand. The latter has total Chern class 1, so the Chern class product rule leaves all the classes unchanged. That rule works with integer coefficients. In our own comparison, using the general Pontryagin product rule alone would leave a possible error killed by two. A definition by universal stable classes instead needs their compatibility with each inclusion that adds a trivial line. Here the work rests on the exact Chern class product rule.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “The axiom set above also implies that Pontryagin classes are stable: adding a trivial real bundle does not change p(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes the top Pontryagin class the Euler class squared

**Remember:** Complexification doubles the real bundle, and two orientation signs cancel.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be an oriented real vector bundle of rank 2k. Its Euler class is the pullback of its fiber orientation class to the zero section. The complexification E ⊗ ℂ extends the real scalars in each fiber to complex scalars. Its Chern class c₂ₖ gives pₖ(E) = (−1)ᵏc₂ₖ(E ⊗ ℂ).

**Problem.** Show that the square of the Euler class e(E) is the top Pontryagin class pₖ(E).

**How the definition helps.** Complexification reduces the identity to multiplying Euler classes because its underlying real bundle is E ⊕ E. The Euler class of this sum with the product orientation is e(E)². With the complex orientation it is the top Chern class. The complex order interleaves real and imaginary basis vectors, which changes the product orientation by (−1)ᵏ. This cancels the sign in pₖ. The work rests on the Euler class product rule and the theorem identifying the top Chern class with the Euler class. Our own comparison is that curvature formulas alone give only the real-cohomology identity.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “For E a vector bundle of even rank rank(E) = 2k, the cup product of the Euler class with itself equals the kth Pontryagin class”

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “The Euler class of E is given by the highest dimensional Chern class”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes Chern classes of dual bundles alternate in sign

**Remember:** Duality transposes and negates curvature, and only the negation changes determinant coefficients.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** The fibers of the dual bundle E∗ are the linear functionals on the fibers of E. A connection differentiates sections, and its curvature Ω measures the failure of derivatives to commute. The Chern–Weil definition takes the coefficients of det(I + itΩ/2π) as forms representing the real Chern classes.

**Problem.** Show that the ith real Chern class of the dual bundle is (−1)ⁱ times that of the original bundle.

**How the definition helps.** The curvature definition gives the signs because the dual connection has curvature equal to the negative transpose of Ω. In our own calculation, transposing the matrix preserves its determinant, and negating Ω replaces t by −t. The coefficient of degree i in t thus changes by (−1)ⁱ. The integral proof instead splits the bundle into lines after a pullback that preserves cohomology classes, then computes with their first Chern classes. The work here shifts to proving that the curvature forms represent the real Chern classes for every connection.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class), [Chern–Weil homomorphism](https://en.wikipedia.org/wiki/Chern%E2%80%93Weil_homomorphism). It says: “For the dual bundle E\* of E, cᵢ(E\*) = (−1)ⁱcᵢ(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes positive-degree real Chern classes vanish for flat bundles

**Remember:** Zero curvature leaves only the constant term in the Chern determinant.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** A connection differentiates sections of a smooth complex bundle. Its curvature Ω measures the failure of derivatives to commute. The Chern–Weil definition takes the coefficients of det(I + itΩ/2π) as differential forms that represent the real Chern classes. A flat connection has zero curvature.

**Problem.** Show that every positive-degree real Chern class of a bundle with a flat connection vanishes.

**How the definition helps.** The curvature definition makes vanishing immediate because setting Ω = 0 leaves the determinant equal to 1. Wikipedia uses this for a trivial line bundle, which admits a flat connection. In our own comparison, the integral definition uses the topology of the bundle and does not directly use a connection. The work shifts to proving that the forms represent the real images of the integral classes for every connection. The argument says nothing about integral torsion classes, which map to zero in real cohomology.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “This is evinced by the fact that a trivial bundle always admits a flat connection.”

**Sources:**

- [Chern, S.-S. (1946). Characteristic classes of Hermitian manifolds. Annals of Mathematics 47(1), 85–121.](https://doi.org/10.2307/1969037)

### Defining Stiefel–Whitney numbers cohomologically makes them vanish on boundaries

**Remember:** A class that extends across a filling pairs to zero with its boundary.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R75. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** A Stiefel–Whitney number of a closed n-manifold evaluates a product of Stiefel–Whitney classes of its tangent bundle on the mod 2 fundamental class. The product must have total degree n. Stiefel–Whitney classes are mod 2 cohomology classes of a vector bundle, unchanged by adding a trivial bundle. Stiefel's original definition used the loci where chosen tangent vector fields become dependent.

**Problem.** If M is the boundary of a compact manifold W, then every Stiefel–Whitney number of M is zero.

**How the definition helps.** With the cohomology definition, the theorem follows from two formal facts about the pair (W, M). In our own proof, the tangent bundle of W restricted to M is TM plus a trivial line. So each class of M is the restriction of a class of W. The fundamental class of M maps to zero in W, since it is the boundary of the relative fundamental class of W. So each number, a pairing of a restricted class with that fundamental class, is zero. The work goes into the existence and stability of the classes. This is Pontryagin's theorem, and Thom proved the converse.

**nLab:** [Stiefel-Whitney number](https://ncatlab.org/nlab/show/Stiefel-Whitney+number). It says: “All Stiefel-Whitney numbers of the boundary of a compact smooth manifold vanish.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86 (the converse)](https://doi.org/10.1007/BF02566923)

### Defining the Euler class by the Thom class makes it multiplicative

**Remember:** Multiply the Thom classes first, then restrict to the zero section.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Define the Euler class of an oriented real vector bundle as the pullback of its Thom class along the zero section. The Thom class is the relative cohomology class that restricts to the orientation generator on each fibre. Another definition takes the class dual to the zero set of a section transverse to the zero section.

**Problem.** For oriented real vector bundles E and F over the same base, e(E ⊕ F) = e(E) ⌣ e(F).

**How the definition helps.** With the Thom class definition, the theorem reduces to the product rule for Thom classes. That rule says the Thom class of E ⊕ F is a product of the two Thom classes, since fibre orientations multiply. In our own proof, restricting to the zero section turns this product into the cup product. The work goes into the Thom isomorphism and this product rule. With the zero-set definition, one needs sections whose zero sets meet transversely.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “Euler class takes Whitney sum to cup product”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.6](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the top Chern class as the Euler class makes equality immediate

**Remember:** Start with the real Euler class and use it as the top Chern class.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** A complex vector bundle of rank n has a preferred orientation as a real bundle. The Euler class pulls the fiber orientation class back along the zero section. One construction starts by defining the top Chern class cₙ as this Euler class. For lower classes it pulls back to the space of nonzero bundle vectors, where each vector supplies a nowhere-zero section.

**Problem.** Show that the top Chern class equals the Euler class of the underlying oriented real bundle.

**How the definition helps.** The Euler-class definition makes the equality true by construction. In our own comparison, a definition from a projective-bundle relation or curvature does not build in that equality. The work shifts to extending the top class to lower classes and showing that the result satisfies the Chern class axioms. In particular, one must prove the product rule for direct sums.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “Hence, one simply defines the top Chern class of the bundle to be its Euler class (the Euler class of the underlying real vector bundle) and handles lower Chern classes in an inductive fashion.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The determinant line makes the first Stiefel–Whitney class detect orientability

**Remember:** Orienting a bundle is the same as making its determinant line trivial.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a real vector bundle over a space built from cells. Its determinant line is the top exterior power of E. Real line bundles correspond to classes in H¹ with coefficients modulo 2, and the trivial line corresponds to zero. Define the first Stiefel–Whitney class w₁(E) as the class of the determinant line.

**Problem.** Show that E is orientable exactly when w₁(E) = 0.

**How the definition helps.** The determinant-line definition gives the test because E is orientable exactly when its determinant line is orientable. An orientation on a real line bundle lets you choose a positive unit vector in each fiber, so the line bundle is trivial. The classification of real line bundles sends that trivial line to zero. In our own comparison, a definition by cohomology operations needs a separate proof of this interpretation. The work shifts to classifying real line bundles and proving agreement with the cohomological definition.

**Wikipedia:** [Orientation of a vector bundle](https://en.wikipedia.org/wiki/Orientation_of_a_vector_bundle), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “To give an orientation to a real vector bundle E of rank n is to give an orientation to the (real) determinant bundle det E = ∧ⁿE of E.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The projective-bundle definition gives natural Chern classes that vanish above rank

**Remember:** A unique expansion gives only n coefficients, and pullback preserves the relation.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 14C17. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let E have positive complex rank n over a space built from cells, and let P(E) be the bundle of lines in its fibers. Let a be minus the first Chern class of the line that each point of P(E) represents. By Leray–Hirsch, every cohomology class of P(E) has a unique expansion in 1, a, …, aⁿ⁻¹ with coefficients from the base. The coefficients of −aⁿ in reverse order are c₁(E), …, cₙ(E), and the higher classes are zero.

**Problem.** Show that the classes vanish above rank n and that pulling back the bundle pulls back its Chern classes.

**How the definition helps.** The projective-bundle definition makes both claims direct because the defining expansion has exactly n coefficients and stays unique after pullback. In our own naturality argument, the bundle of lines and its chosen line both pull back with E. The relation therefore pulls back, and uniqueness identifies each new coefficient. The axiomatic approach instead assumes naturality and derives the rank bound by splitting the bundle into lines after a suitable pullback. The work here shifts to proving the unique expansion and showing that the resulting classes satisfy the axioms.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “In particular, one may define the Chern classes of E in the sense of Grothendieck, denoted c₁(E), … cₙ(E) by expanding this way the class −aⁿ, with the relation:”

**Sources:**

- [Grothendieck, A. (1958). La théorie des classes de Chern. Bulletin de la Société Mathématique de France 86, 137–154.](https://doi.org/10.24033/bsmf.1501)

### The total Stiefel–Whitney class makes the Whitney sum rule multiplicative

**Remember:** Include the constant 1 so ordinary multiplication supplies the end terms.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** The Stiefel–Whitney classes wᵢ(E) record topological properties of a real vector bundle in mod 2 cohomology. Set w₀(E) = 1 and collect the classes into the total class w(E) = 1 + w₁(E) + w₂(E) + ⋯.

**Problem.** State the rule for the Stiefel–Whitney classes of a direct sum using total classes.

**How the definition helps.** The total-class definition makes the sum rule a product because the constant 1 includes the two end terms in every positive degree. The result is w(E ⊕ F) = w(E)w(F). Without the constant, the two single-bundle terms would have to be added separately. The work still lies in proving the sum rule. In our own explanation, packing the classes into one product changes the statement, not its proof.

**Wikipedia:** [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “The w₀(E) class contains no information, because it is equal to 1 by definition. Its creation by Whitney was an act of creative notation, allowing the Whitney sum Formula w(E₁ ⊕ E₂) = w(E₁)w(E₂) to be true.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Thom-class Euler classes make self-intersection numbers equal normal Euler numbers

**Remember:** Restricting a submanifold's dual class to itself gives its normal Euler class.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55N45. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Define the Euler class of an oriented vector bundle as the pullback of its Thom class along the zero section. The Thom class restricts to the orientation generator on each fibre. The obstruction definition measures the failure to extend a nowhere-zero section over cells of dimension equal to the rank.

**Problem.** Let M be a closed oriented m-manifold inside a closed oriented 2m-manifold W. The self-intersection number of M equals the Euler class of its normal bundle, evaluated on \[M\].

**How the definition helps.** With the Thom class definition, the dual class of M, restricted to M, is the Euler class by definition. In our own proof, a tubular neighborhood, an open set around M shaped like its normal bundle, identifies the two. Under this identification, the class dual to M is the Thom class of the normal bundle. The self-intersection number evaluates this class, restricted to M, on \[M\]. That restriction is the pullback along the zero section, which is the Euler class. The work goes into the tubular neighborhood theorem and the identification of the dual class with the Thom class.

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “if Y is a compact submanifold, then the Euler class of the normal bundle of Y in X is naturally identified with the self-intersection of Y in X.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom-class Euler classes vanish for bundles with nowhere-zero sections

**Remember:** A section that misses the zero section pulls the relative class back to zero.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let E be an oriented real vector bundle over X, with zero section E₀. Its Thom class u lies in the cohomology of E relative to E ∖ E₀ and restricts to the orientation generator on each fibre. Define the Euler class e(E) as the pullback of u to X along the zero section. Another definition uses obstruction theory, and for even rank a curvature formula gives its real image.

**Problem.** If an oriented real vector bundle has a section that is nowhere zero, its Euler class is zero.

**How the definition helps.** With the Thom class definition, the proof is one homotopy and one exact sequence. In our own proof, a nowhere-zero section s is homotopic to the zero section by the straight-line homotopy ts. So e(E) is also the pullback of u along s. But s maps X into E ∖ E₀, where u restricts to zero by the exact sequence of the pair. The work goes into the Thom isomorphism theorem, which gives u.

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “If E possesses a nowhere-zero section, then e(E) = 0.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.7](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom’s Steenrod-square definition bounds Stiefel–Whitney classes by rank

**Remember:** A square that raises degree by more than the input degree vanishes.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a real vector bundle of rank n over a cell complex, and use mod 2 cohomology. Its Thom class u is the degree-n class that restricts to the generator on each fiber relative to the complement of zero. Multiplication by u after pullback gives the Thom isomorphism Φ from base cohomology to relative bundle cohomology. Define wᵢ(E) = Φ⁻¹(Sqⁱ(u)), where the Steenrod square Sqⁱ raises degree by i.

**Problem.** Show that wᵢ(E) = 0 for i &gt; n and that w₀(E) = 1. Identify wₙ(E) with the mod 2 Euler class.

**How the definition helps.** Thom's definition gives the rank bound because a Steenrod square is zero when its index exceeds the input degree n. The zeroth square is the identity, so w₀(E) = 1. In our own calculation, Sqⁿ(u) is the cup square of u. That square is u times the pullback of its zero-section restriction, which defines the mod 2 Euler class. The axiomatic approach instead derives the rank bound by pulling the bundle back to split it into line bundles. The work shifts to the Thom isomorphism and the construction of Steenrod squares with these properties.

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “We can define the ith Stiefel–Whitney class wᵢ(p) of the vector bundle p: E → B by: wᵢ(p) = Φ⁻¹(Sqⁱ(Φ(1))) = Φ⁻¹(Sqⁱ(u)).”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Wu classes make tangent Stiefel–Whitney classes homotopy invariant

**Remember:** Wu classes use cohomology operations that survive a homotopy equivalence.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Let M be a closed smooth n-manifold, and use cohomology with coefficients modulo 2. The Steenrod squares Sqᵏ are cohomology operations that raise degree by k and commute with pullback. The Wu class vₖ is the unique class with vₖ ⌣ x = Sqᵏ(x) for every x of degree n − k. Poincaré duality gives uniqueness because the cohomology product pairs complementary degrees without a kernel.

**Problem.** Show that a homotopy equivalence between closed smooth manifolds pulls back the Stiefel–Whitney classes of one tangent bundle to those of the other.

**How the definition helps.** The Wu definition makes invariance easy because a homotopy equivalence preserves cup products and commutes with Steenrod squares. It therefore pulls back each Wu class to the unique class satisfying the same rule. Wu's theorem expresses every tangent Stiefel–Whitney class as a sum of Steenrod squares applied to Wu classes. These sums commute with pullback too. In our own comparison, defining the classes from tangent bundles does not give this directly because a homotopy equivalence need not identify those bundles. The substantial work is proving Wu's theorem.

**nLab:** [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “is defined to be the class that "represents" Sqᵏ(−) under the cup product”

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “since the Steenrod operations are invariant under homotopy equivalence, we conclude that the Stiefel–Whitney classes of a manifold are as well.”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Defining flows as ℝ-actions makes each time map a diffeomorphism

**Remember:** Running the action backwards undoes running it forwards.

*True by definition.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG, math.DS. Level 3: graduate.

**Definition.** Define a global flow on M as a smooth action of the additive group ℝ. That is a smooth map φ: ℝ × M → M with φ₀ the identity and φₛ ∘ φₜ = φₛ₊ₜ. Another definition takes, for a vector field, the solution curve through each point, defined for all time.

**Problem.** Each time map φₜ of a global flow is a diffeomorphism, with inverse φ₋ₜ.

**How the definition helps.** With the action definition, φₜ ∘ φ₋ₜ = φ₀ is one case of the group law. In our own proof, both maps are smooth because φ is smooth, so φₜ is a diffeomorphism. With the solution-curve definition, the group law is a theorem. It follows from uniqueness of solutions of ordinary differential equations. Smoothness in time and position needs smooth dependence on initial conditions. That is where the work goes, for a complete vector field.

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “This yields an action of the additive group (ℝ,+) of real numbers on the differentiable manifold X by diffeomorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Defining indices by the Thom class reduces Poincaré–Hopf to Euler class evaluation

**Remember:** Pull the Thom class back along the field, then split it over the zeros.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 57R20, 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Let v be a vector field with isolated zeros on a closed oriented manifold M. View v as a section of the tangent bundle and pull back the Thom class along it. Near each zero this gives a local class, and its integer value is the index of that zero. The usual definition takes the degree of v/\|v\| on a small sphere around the zero.

**Problem.** For a vector field with isolated zeros on a closed oriented manifold, the indices sum to the Euler characteristic.

**How the definition helps.** The Thom class definition turns the index sum into the value of one cohomology class on \[M\]. In our own account, the pullback along v is the Euler class, because v is homotopic to the zero section. It vanishes away from the zeros, so excision splits its value into the local indices. The real work is the theorem that the Euler class of the tangent bundle has value χ(M) on \[M\]. The nLab states that theorem, and Milnor and Stasheff prove it. One must also check that the local index agrees with the sphere degree.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “The Euler class of the tangent bundle of a smooth manifold X, evaluated on its fundamental class, is its Euler characteristic χ\[X\].”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)
- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the bracket as a commutator makes related fields have related brackets

**Remember:** Operators that intertwine with pullback still intertwine after taking commutators.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 17B66. arXiv math.DG. Level 3: graduate.

**Definition.** Treat a vector field as a derivation, a linear operator on smooth functions that obeys the product rule. Define the bracket \[X, Y\] as the commutator XY − YX. Fields X on M and X′ on N are F-related when dF sends X(p) to X′(F(p)) for every point p. Another definition of the bracket differentiates one field along the flow of the other.

**Problem.** Let F: M → N be smooth. If X is F-related to X′ and Y is F-related to Y′, then \[X, Y\] is F-related to \[X′, Y′\].

**How the definition helps.** With commutators, relatedness becomes an operator identity that passes through products. In our own proof, X is F-related to X′ exactly when X(g ∘ F) = (X′g) ∘ F for every smooth function g on N. Applying this twice gives XY(g ∘ F) = (X′Y′g) ∘ F, and the same holds in the other order. Subtracting gives the claim for the brackets. The work goes into the theorem that derivations are the vector fields, and that the commutator equals the flow definition.

**nLab:** [Lie bracket of vector fields](https://ncatlab.org/nlab/show/Lie+bracket+of+vector+fields). It says: “Taking the commutator uv−vu of these derivations produces another derivation”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Lie derivative by flows makes zero derivative mean invariance

**Remember:** The flow law carries a zero derivative at time zero to every time.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG. Level 3: graduate.

**Definition.** Define the Lie derivative of a tensor field T along a vector field X as the derivative at t = 0 of φₜ\*T. Here φₜ is the flow of X, and φₜ\*T is the pullback of T. An algebraic definition sets it to X(f) on functions and the bracket on vector fields, then extends it by the product rule.

**Problem.** Let X be a complete vector field. If the Lie derivative of T along X is zero, then every flow map φₜ preserves T.

**How the definition helps.** With the flow definition, the group law moves the derivative from time zero to any time t. In our own proof, φₜ₊ₛ\*T = φₜ\*(φₛ\*T), so the derivative in t is φₜ\* applied to the Lie derivative. That is zero, so φₜ\*T = T for every t. With the algebraic definition, one must first prove that it equals the flow derivative. The work goes into that comparison and into the existence of flows.

**Wikipedia:** [Lie derivative](https://en.wikipedia.org/wiki/Lie_derivative). It says: “The Lie derivative is the speed with which the tensor field changes under the space deformation caused by the flow.”

**Sources:** none listed. No primary source with a working link was found.

### The outward-boundary condition is what makes Poincaré–Hopf hold on manifolds with boundary

**Remember:** Point outward at the edge, and zeros count the Euler characteristic.

*Rules out counterexamples. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 55M25. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** Let x be an isolated zero of a vector field v. The index of v at x is the degree of the map v/\|v\| from a small sphere around x to the unit sphere. On a manifold with boundary, v is required to point outward along the boundary.

**Problem.** Poincaré–Hopf theorem: for a vector field with isolated zeros on a compact manifold M, the sum of the indices equals the Euler characteristic χ(M). The hairy ball theorem is the case of the 2-sphere.

**How the definition helps.** Fixing the behaviour at the boundary makes the index sum depend only on M. Without the condition, the closed disc carries a constant vector field with no zeros at all, so the sum is 0, but χ(disc) = 1. This counterexample is our own. With v pointing outward, the sum is the degree of a Gauss map, which is a topological invariant. The proof extends the field to a neighbourhood of M in Euclidean space and counts there. Relating the index sum to χ(M) still needs one good vector field, for example the gradient of a Morse function (our own remark).

**Wikipedia:** [Poincaré–Hopf theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Hopf_theorem). It says: “If M has a boundary, then we insist that v be pointing in the outward normal direction along the boundary and have no zeros on the boundary.”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections immediately

**Remember:** Freeze the discarded coordinates to get a local section.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call f: X → Y a submersion when, near each point, some charts make it a projection (x₁, …, xₙ) ↦ (x₁, …, xₘ). The usual definition asks that the derivative be onto at every point. The two agree by the rank theorem, which gives such charts for maps of constant rank.

**Problem.** For each x in X there is a smooth map s near f(x) with f ∘ s the identity and s(f(x)) = x.

**How the definition helps.** With the projection definition, a section is just the map that freezes the discarded coordinates. In our own proof, take charts centred at x and set s(x₁, …, xₘ) = (x₁, …, xₘ, 0, …, 0). With the derivative definition, one must first build the projection charts. The work goes into the rank theorem, which comes from the inverse function theorem.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “In terms of coordinates, the map f is a submersion at a point p : X if and only if there exists a coordinate chart on X near p and a coordinate chart on Y near f(p) relative to which f is the projection f(x₁,…,xₙ) = (x₁,…,xₘ).”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections that detect smoothness

**Remember:** Use a local section to test smoothness downstairs.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p is a submersion if suitable charts near each point turn it into a coordinate projection. The infinitesimal definition asks that the derivative of p be onto at each point.

**Problem.** Let p from M to N be a surjective submersion, and let h be a map from N to a smooth manifold. If h ∘ p is smooth, then h is smooth.

**How the definition helps.** With the local-projection definition, p has smooth local sections, made by fixing the coordinates that p forgets. In our own step, h equals (h ∘ p) ∘ s near a point of N, for such a local section s. So h is smooth near that point. Surjectivity gives every point of N a preimage, so such a section exists near every point. In our own comparison, the derivative definition gives local sections only after the submersion theorem. In our own account, that theorem carries the work.

**Wikipedia:** [Submersion (mathematics)](https://en.wikipedia.org/wiki/Submersion_%28mathematics%29). It says: “the map f in these local coordinates is the standard projection”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections makes them stable under pullback

**Remember:** Pulling back a projection keeps the extra coordinates free.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p is a submersion if suitable charts near each point turn it into a projection that forgets some coordinates. The infinitesimal definition asks that the derivative of p be onto at every point. The submersion theorem, a form of the implicit function theorem, shows that the two definitions agree.

**Problem.** Let p from E to B be a submersion and f from A to B any smooth map. Then the fiber product of all pairs (a, e) with f(a) = p(e) is a smooth manifold. Its projection to A is a submersion.

**How the definition helps.** With the local-projection definition, the fiber product is locally a product. In our own step, over a chart where p is the projection U × ℝᵏ → U, the fiber product is f⁻¹(U) × ℝᵏ. Its projection to A again forgets the ℝᵏ coordinates. In our own comparison, the derivative definition needs transversality and the implicit function theorem to build the fiber product. The nLab states the result but not this proof. In our own account, the work moves to the submersion theorem.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “Moreover, submersions are stable under pullback.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal transversality makes the fibre product of two maps smooth

**Remember:** The diagonal tests equality of two outputs at once.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** Maps f: X → Z and g: Y → Z are transverse when, wherever f(x) = g(y), their derivative images span TZ there. Equivalently, the product map f × g: X × Y → Z × Z is transverse to the diagonal, the set of pairs (z, z).

**Problem.** Let f and g be transverse, and let X, Y and Z have no boundary. Then the set of pairs (x, y) with f(x) = g(y) is a submanifold of X × Y. When it is nonempty, its dimension is dim X + dim Y − dim Z.

**How the definition helps.** The diagonal form reduces the theorem to the preimage theorem for one map and one submanifold. In our own proof, the set of pairs is the preimage of the diagonal under f × g. So it is a submanifold whose codimension is that of the diagonal, which is dim Z. The two forms agree because, by taking differences, directions normal to the diagonal correspond to tangent vectors of Z. The work goes into the preimage theorem, which follows from the rank theorem.

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “the differentials of f and g in these points span the entire tangent space at z”

**Sources:** none listed. No primary source with a working link was found.

### Properness is the condition that makes a submersion a fibre bundle

**Remember:** Proper submersions cannot lose points to infinity, so fibres stay alike.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth map f from M to N is a submersion if its derivative is onto at every point. It is proper if the preimage of every compact set is compact.

**Problem.** Ehresmann's fibration theorem: a surjective proper submersion between manifolds is a locally trivial fibre bundle. All fibres over a connected base are then diffeomorphic.

**How the definition helps.** Properness stops fibres from escaping to infinity, so the local flows used to move one fibre to the next exist for long enough. Without it, take the plane with the origin removed and project to the x-axis. That is a surjective submersion, but the fibre over 0 is two half-lines while the other fibres are whole lines. This example is our own. Our own sketch of the proof: lift vector fields from the base and integrate them; properness makes the flows exist long enough. Thom's isotopy lemmas extend the idea to stratified spaces.

**Wikipedia:** [Ehresmann's lemma](https://en.wikipedia.org/wiki/Ehresmann%27s_lemma). It says: “a proper map (in particular, this condition is always satisfied if M is compact), then it is a locally trivial fibration.”

**Sources:** none listed. No primary source with a working link was found.

### Defining embeddings as homeomorphic immersions makes proper injective immersions embeddings

**Remember:** Properness supplies the topology, and the immersion supplies the derivative.

*True by definition.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call a smooth map an embedding when it is an immersion and a homeomorphism onto its image with the subspace topology. An immersion is a map whose derivative is injective at every point. Another definition asks that the image have slice charts, charts in which it is a coordinate subspace. The map must then be a diffeomorphism onto it.

**Problem.** A proper injective immersion is an embedding with closed image. Proper means that inverse images of compact sets are compact.

**How the definition helps.** With this definition, only a point-set fact remains to check. In our own proof, a proper continuous map into a manifold is closed, because manifolds are locally compact and Hausdorff. A closed continuous injection is a homeomorphism onto its image, and that image is closed. The immersion condition is given. The work goes into the theorem that such embeddings have slice charts, which uses the rank theorem.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “proper injective immersions are equivalently the closed embeddings”

**Sources:** none listed. No primary source with a working link was found.

### Defining injective immersions by jet conditions makes embeddings dense in high dimension

**Remember:** Bad jets and double points vanish when their codimension exceeds the source dimension.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** For a compact manifold M, an embedding into N is the same as an injective immersion. Recast this as two avoidance conditions. The first jet, which records the derivative, must avoid the linear maps that are not injective. The pair of values at two distinct points must avoid the diagonal of N × N.

**Problem.** Let M be a compact manifold of dimension m without boundary, and N a manifold of dimension n &gt; 2m. Then smooth embeddings are dense among smooth maps M → N.

**How the definition helps.** Both conditions say that a jet avoids a fixed set, so the jet transversality theorems apply directly. Avoiding a set is generic when its codimension exceeds the dimension of the source. In our own count, the non-injective derivatives have codimension n − m + 1, which exceeds m when n ≥ 2m. The diagonal has codimension n in N × N, which exceeds 2m, the dimension of the pairs of points. The work goes into jet transversality and multijet transversality, its version for values at several distinct points.

**Wikipedia:** [Whitney embedding theorem](https://en.wikipedia.org/wiki/Whitney_embedding_theorem). It says: “any continuous function from an n-dimensional manifold to an m-dimensional manifold may be approximated by a smooth embedding provided m &gt; 2n”

**Sources:**

- [Hassler Whitney, Differentiable Manifolds (1936), pp. 645–680](https://doi.org/10.2307/1968482)
- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities (1973), Chapter II, Transversality](https://doi.org/10.1007/978-1-4615-7904-5_2)

### Defining normal bundles as quotients gives the exact sequence for nested submanifolds

**Remember:** Successive quotients of tangent spaces fit into a short exact sequence.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Define the normal bundle of a submanifold X in Y as TY restricted to X, modulo TX. Another definition takes perpendicular vectors for a chosen metric.

**Problem.** Let X ⊂ Y ⊂ Z be embedded submanifolds. The normal bundle of X in Y injects into the normal bundle of X in Z. The quotient is the normal bundle of Y in Z, restricted to X.

**How the definition helps.** With quotients, the theorem is the third isomorphism theorem for the vector spaces TX ⊂ TY ⊂ TZ at each point. That theorem says (TZ/TX)/(TY/TX) ≅ TZ/TY. In our own account, the only remaining work is to check that these maps vary smoothly, which slice charts show. With perpendicular vectors, the three bundles depend on the metric, and the maps between them need orthogonal projections.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal bundles as quotients makes transverse preimages pull them back

**Remember:** The derivative, taken modulo tangent directions, carries normals to normals.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Define the normal bundle of a submanifold Z of N as TN restricted to Z, modulo TZ. Another definition takes perpendicular vectors for a chosen metric. A map f: M → N is transverse to Z when, over each point of Z, the image of df and TZ span TN.

**Problem.** Let f: M → N be transverse to Z, and let W be the inverse image of Z. Then the normal bundle of W in M is isomorphic to the pullback by f of the normal bundle of Z.

**How the definition helps.** With quotients, the derivative df itself gives the isomorphism, because df sends TW into TZ. In our own proof, df induces a map from TM/TW to TN/TZ at each point of W. Transversality makes this map onto. It is injective because TW is exactly the set of vectors that df sends into TZ. That formula, and the fact that W is a submanifold, come from the transverse preimage theorem, where the work is. With perpendicular vectors, df does not preserve perpendicularity, so one needs extra projections.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal bundles as tangent quotients makes them independent of metric

**Remember:** A normal direction is a tangent vector up to directions along the submanifold.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Let X be an embedded submanifold of Y. Define its normal bundle as TY restricted to X, modulo TX, fibre by fibre. Another definition takes the vectors perpendicular to TX for a chosen Riemannian metric, a smoothly varying inner product.

**Problem.** For any two Riemannian metrics on Y, the two perpendicular bundles of X are canonically isomorphic.

**How the definition helps.** With the quotient definition no metric appears, so each perpendicular bundle needs only one comparison with the quotient. In our own proof, send each perpendicular vector to its class modulo TX. This is a linear bijection on each fibre, because each class has exactly one perpendicular representative. The map is smooth, so it is a bundle isomorphism. Composing one such map with the inverse of the other gives the canonical isomorphism.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining submanifolds by slice charts makes restricting the target smooth

**Remember:** To read a map into a slice, drop the zero coordinates.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call S ⊂ M an embedded submanifold when each point of S has a chart of M in which S is a coordinate slice. A coordinate slice is the set where the last few coordinates are zero. Another definition starts from an injective immersion that is a homeomorphism onto its image.

**Problem.** Let F: N → M be smooth with image inside an embedded submanifold S. Then F is smooth as a map into S.

**How the definition helps.** With slice charts, the charts of S are the slice charts with the zero coordinates dropped. In our own proof, F is continuous into S because S has the subspace topology. In a slice chart, F into S is F into M followed by dropping the zero coordinates, so it is smooth. The theorem fails for an injective immersion that is not a homeomorphism, such as a figure-eight curve. The work goes into the slice chart theorem, which builds slice charts from the other definition by the rank theorem.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “For each point σ ∈ Σ there is a coordinate chart”

**Sources:** none listed. No primary source with a working link was found.

### Defining field theories as functors makes mapping torus values traces

**Remember:** Closing a cylinder takes the trace of its map.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** A topological field theory Z is a tensor-preserving functor from bordisms to vector spaces. A bordism is a manifold whose boundary is split into an incoming part and an outgoing part, and composition glues them. A state-sum construction instead defines values on closed manifolds by sums over labelled triangulations.

**Problem.** Let f be an orientation-preserving diffeomorphism of a closed manifold Σ. Glue the two ends of Σ × \[0, 1\] by f to get the mapping torus T(f). Then Z(T(f)) is the trace of the linear map Z(f) on Z(Σ).

**How the definition helps.** The functor definition turns gluing the two ends into a trace. The mapping torus is the cylinder of f composed with two bordisms that bend Σ back on itself (our own explanation). These bending bordisms make Z(Σ) and the space of Σ with reversed orientation dual to each other. Applying Z to the composite gives the trace of Z(f) (our own). The work moves into this duality and into identifying the glued manifold with the mapping torus. For f the identity, this gives Z(Σ × S¹) = dim Z(Σ).

**Wikipedia:** [Topological quantum field theory](https://en.wikipedia.org/wiki/Topological_quantum_field_theory). It says: “Z(Σf) = Trace Σ(f)”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Every map between topological field theories is invertible

**Remember:** With duals everywhere, you can run every map of theories backwards.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 18M05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A topological quantum field theory (TQFT) assigns algebraic data to manifolds and cobordisms (manifolds whose boundary is split into an incoming and an outgoing part). A framed n-dimensional TQFT with values in a category 𝒞 is a symmetric monoidal functor from the framed cobordism category Bordₙ to 𝒞. A morphism of TQFTs is a symmetric monoidal natural transformation between two such functors.

**Problem.** What are the morphisms between TQFTs? Are there interesting morphisms that are not invertible?

**How the definition helps.** The nLab reads the answer off from the cobordism hypothesis. It says that the symmetric monoidal functors from the framed cobordism category Bordₙ to 𝒞 form the core of the fully dualizable part of 𝒞. That core is an ∞-groupoid, so every morphism in it is invertible. So two TQFTs are either equivalent or have no morphism at all. A more elementary reason, which is our reading and not on the page, is that every object of the cobordism category has a dual. A monoidal natural transformation between monoidal functors out of a category with duals is always invertible. To get interesting morphisms that are not invertible, you must restrict to subcategories, and this leads to field theories with defects (Schommer-Pries).

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “In particular, any two of them are either equivalent or have no morphism between them.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)

### Functorial field theories have finite-dimensional state spaces through bordism duality

**Remember:** Bent cylinders make a dual, and duals in vector spaces are finite.

*True by definition. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** Let a topological field theory be a tensor-preserving functor Z from oriented bordisms to all vector spaces. A bordism is a manifold whose boundary is split into an incoming part and an outgoing part. Some definitions instead require finite-dimensional values from the start.

**Problem.** Every state space Z(Σ) of such a field theory is finite-dimensional, although the target allows all vector spaces.

**How the definition helps.** The functor definition sends the two bent cylinders on Σ to an evaluation pairing and a coevaluation copairing for Z(Σ) (our own explanation). The coevaluation map sends 1 to a finite sum of tensors vᵢ ⊗ wᵢ. The zigzag identity, which says that pairing after copairing gives the identity, writes every vector of Z(Σ) as a combination of the vᵢ (our own). The work moves into checking that the two bent cylinders compose to a straight cylinder. So the finite dimension in other definitions is a consequence, not an extra condition.

**nLab:** [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “For genuine topological field theories, all spaces of quantum states are finite dimensional”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Quadratic refinements make spin signs multiply

**Remember:** Connected sum puts the two quadratic forms side by side.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 3: graduate.

**Definition.** A spin structure on a closed oriented surface determines a function q on its first homology over the two-element field. It satisfies q(x+y) = q(x)+q(y)+x·y, where the dot counts intersections modulo two. For a symplectic basis of paired cycles aᵢ,bᵢ, the Arf invariant is ∑ᵢ q(aᵢ)q(bᵢ) modulo two. The Arf theory assigns +1 for invariant zero and −1 for invariant one.

**Problem.** The partition sign of the Arf theory multiplies under connected sum formed using disks with their bounding spin structures.

**How the definition helps.** The quadratic description lets a connected sum use the two original bases together. Our own check uses cycles on opposite sides of the joining circle, which have zero intersection. Their contributions to the Arf invariant therefore add modulo two, and their signs multiply. The geometric work identifies spin structures with these refinements and proves compatibility with gluing.

**Wikipedia:** [Arf invariant](https://en.wikipedia.org/wiki/Arf_invariant). It says: “The Arf invariant Arf(q) is defined to be the sum of the Arf invariants of the qᵢ.”

**Sources:**

- [Johnson, Spin Structures and Quadratic forms on Surfaces](https://math.mit.edu/~hrm/palestine/johnson-spin-structures.pdf)
- [Runkel and Szegedy, Topological field theory on r-spin surfaces and the Arf-invariant](https://research-explorer.ista.ac.at/record/10176)

### Sphere lines make connected sums multiply

**Remember:** Cut a ball out and glue two scalar multiples together.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 3: graduate.

**Definition.** Let Z be an oriented n-dimensional topological field theory over a field, with n at least two. Assume the state space of the (n−1)-sphere is one-dimensional and Z(Sⁿ) is nonzero. For a closed oriented n-manifold M, define F(M) = Z(M)/Z(Sⁿ).

**Problem.** For closed connected oriented n-manifolds M and N, the normalized value satisfies F(M \# N) = F(M)F(N).

**How the definition helps.** Dividing by the sphere value absorbs the scalar that appears when two punctured manifolds are glued. Our own calculation uses the two oppositely directed balls as a vector and a functional on the boundary line. Their pairing equals Z(Sⁿ), so both are nonzero. Expressing the punctured manifolds in those bases gives Z(Sⁿ)Z(M \# N) = Z(M)Z(N).

**Paper or page:** [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1). It says: “Z(Sⁿ) Z(M) = Z(M₀) Z(M₁).”

**Sources:**

- [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1)

### Two-dimensional topological field theories are commutative Frobenius algebras

**Remember:** The circle is a Frobenius algebra, so its image is one too.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 18M05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A 2d topological quantum field theory (TQFT) in the sense of Atiyah is a symmetric monoidal functor Z from 2Cob to vector spaces. In 2Cob, the objects are closed oriented 1-manifolds (unions of circles), and the morphisms are oriented surfaces between them (cobordisms). The pair of pants gives a product and a coproduct on the vector space Z(S¹) of the circle. The cup gives a unit, and the cap gives a trace.

**Problem.** Classify the 2-dimensional topological quantum field theories.

**How the definition helps.** A TQFT is a monoidal functor, so to classify TQFTs you only need to describe 2Cob by generators and relations. Abrams proved that 2Cob is the PROP for commutative Frobenius algebras. A PROP is a monoidal category that encodes an algebraic structure, so its monoidal functors are the algebras of that structure. So 2d TQFTs are exactly commutative Frobenius algebras, and the Frobenius law is the relation that sews two pairs of pants together. The cap cobordism forces Z(S¹) to be finite-dimensional. Some theories, such as the A-model and the B-model, exclude the cap, and Calabi–Yau objects describe them instead.

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “The PROP for commutative Frobenius algebras is 2Cob, as noted by many people and formally proved in Abrams (1996).”

**Sources:**

- [Lowell Abrams, Two-dimensional topological quantum field theories and Frobenius algebras, J. Knot Theory Ramifications 5 (1996) 569–587](https://doi.org/10.1142/S0218216596000333)
- [Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories, Cambridge University Press (2004)](http://mat.uab.cat/~kock/TQFT.html)

### Counting homotopy spheres up to h-cobordism makes them a finite group

**Remember:** Group spheres by h-cobordism, and connected sum gives inverses.

*Makes the theorem clean to state or prove.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** A homotopy n-sphere is a closed smooth n-manifold homotopy equivalent to the n-sphere. Two are h-cobordant if together they bound a compact manifold. Each must include into it as a homotopy equivalence. Θₙ is the set of h-cobordism classes, with connected sum as the operation.

**Problem.** Kervaire and Milnor showed that Θₙ is a finite abelian group for every n ≠ 3. For example, Θ₇ has order 28, so there are 28 oriented smooth structures on the 7-sphere.

**How the definition helps.** The h-cobordism relation is coarse enough that every class has an inverse, namely the same sphere with reversed orientation. So the classes form a group, and algebra and homotopy theory can compute it. By Smale's h-cobordism theorem, for n at least 5, h-cobordism is the same as orientation-preserving diffeomorphism. So Θₙ also counts smooth structures on the n-sphere. Kervaire and Milnor related Θₙ to the stable homotopy groups of spheres, which classify maps between spheres of high dimension. What stays hard is computing those stable homotopy groups.

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere). It says: “Provided n ≠ 4, this monoid is a group and is isomorphic to the group Θₙ of h-cobordism classes of oriented homotopy n-spheres, which is finite and abelian.”

**Sources:**

- [Michel A. Kervaire and John W. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Homotopy spheres are the right hypothesis for the higher Poincaré conjecture

**Remember:** In high dimensions, ask for a sphere's homotopy type, not just simple connectivity.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture). arXiv math.GT. Level 3: graduate.

**Definition.** A homotopy n-sphere is a closed n-manifold (compact and without boundary) that is homotopy equivalent to the n-sphere. Homotopy equivalent means that there are maps both ways whose composites can be deformed continuously into the identity maps.

**Problem.** The generalized Poincaré conjecture says that every homotopy n-sphere is homeomorphic to the n-sphere.

**How the definition helps.** In high dimensions, simple connectivity does not pick out the sphere, so the hypothesis asks for more. In dimension 3, simple connectivity is enough, but in dimension 4 and higher some simply connected closed manifolds are not spheres. For example, S² × S² is simply connected but has the wrong second homology (our own example). The homotopy-sphere hypothesis excludes these. With it, Smale proved the conjecture for n ≥ 5 in 1961, and Freedman proved it for n = 4 in 1982. The theorem gives a homeomorphism. It is still open whether every homotopy 4-sphere is diffeomorphic to the 4-sphere.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “A stronger assumption than simply-connectedness is necessary; in dimensions four and higher there are simply-connected, closed manifolds which are not homotopy equivalent to an n-sphere.”

**Sources:**

- [S. Smale, Generalized Poincaré's conjecture in dimensions greater than four, Annals of Mathematics 74 (1961) 391–406](https://doi.org/10.2307/1970239)

### The generalized Poincaré conjecture asks for homeomorphism, not diffeomorphism

**Remember:** Exotic spheres are spheres to a topologist but not to a differential geometer.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R55. arXiv math.GT. Level 3: graduate.

**Definition.** The generalized Poincaré conjecture asks for a homeomorphism to the sphere: a continuous map with a continuous inverse. It does not ask for a diffeomorphism, which must be smooth in both directions.

**Problem.** Every homotopy n-sphere is homeomorphic to the n-sphere. A homotopy n-sphere is a closed n-manifold with the homotopy type of the n-sphere.

**How the definition helps.** Because the conjecture asks only for a homeomorphism, exotic spheres are not counterexamples. In 1956 Milnor found a smooth 7-manifold that is homeomorphic but not diffeomorphic to the 7-sphere. Such a manifold is an exotic sphere. Milnor first thought that it was a counterexample to the generalized Poincaré conjecture. Kervaire and Milnor then counted the exotic spheres, which form a group. The smooth version in dimension 4 is still open.

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “At first, I thought I'd found a counterexample to the generalized Poincaré conjecture in dimension seven. But careful study showed that the manifold really was homeomorphic to S⁷.”

**Sources:**

- [J. Milnor, On manifolds homeomorphic to the 7-sphere, Annals of Mathematics 64 (1956) 399–405](https://doi.org/10.2307/1969983)
- [M. Kervaire and J. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Defining homology by the Morse complex makes critical counts give Euler characteristic

**Remember:** The alternating sum of chain ranks equals the alternating sum of homology ranks.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** The Morse complex of a Morse function has one generator for each critical point, placed in degree equal to its index. The index is the number of negative directions of the matrix of second derivatives. Its homology equals singular homology, which is built from continuous maps of simplices.

**Problem.** For a Morse function on a closed manifold, let cₖ be the number of critical points of index k. Then the alternating sum of the cₖ equals the Euler characteristic.

**How the definition helps.** The Morse complex is a finite chain complex whose ranks are the critical point counts. For any finite chain complex over a field, the alternating sum of chain ranks equals that of homology ranks. In our own proof, this follows from rank–nullity, because the ranks of the boundary maps cancel in pairs. The work goes into the theorem that Morse homology equals singular homology. The TheoremSearch paper states the equality and proves it by Witten's method instead.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “and the equality holds when q = n”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining homology by the Morse complex makes even-index Morse functions perfect

**Remember:** With no odd generators, the Morse differential has nowhere to go.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** The Morse complex of a Morse function has one generator for each critical point, placed in degree equal to its index. The index is the number of negative directions of the matrix of second derivatives. Its homology equals singular homology, which is built from continuous maps of simplices.

**Problem.** Suppose that a Morse function on a closed manifold has only critical points of even index. Then, for each k, the number of critical points of index k equals the k-th Betti number, the dimension of the k-th homology group.

**How the definition helps.** The Morse complex turns the theorem into a count of degrees. In our own proof, the differential lowers degree by one, so it maps even degrees to odd degrees, where there are no generators. So the differential is zero, and homology equals the chain groups. For example, a standard Morse function on complex projective space ℂPⁿ has one critical point in each even index up to 2n. The work goes into building the Morse complex and proving that its homology is singular homology. Milnor's older route gets the same result from a cell structure with one cell for each critical point.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Defining homology by the Morse complex makes the weak Morse inequalities immediate

**Remember:** Homology cannot have more independent classes than the chains it comes from.

*True by definition.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** The Morse complex of a Morse function has one generator for each critical point, placed in degree equal to its index. The index is the number of negative directions of the matrix of second derivatives. Its homology equals singular homology, which is built from continuous maps of simplices.

**Problem.** For a Morse function on a closed manifold, the number of critical points of index k is at least the k-th Betti number. That number is the dimension of the k-th homology group.

**How the definition helps.** In the Morse complex, homology in degree k is a quotient of a subspace of a chain group with one generator per critical point. Over a field, its dimension is therefore at most the number of those generators. Wikipedia makes this point: the inequalities follow by counting generators. The work goes into the theorem that Morse homology equals singular homology. In our own summary, older proofs attach one handle for each critical point, or use Witten's deformation of the Laplace operator on forms.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “From the fact that the Morse homology is isomorphic to the singular homology, the Morse inequalities follow by considering the number of generators”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “Let M be a closed smooth n-dimensional manifold. Suppose f ∈ C∞(M) is a Morse function. Then we have Weak Morse Inequalities: for each 0 ≤ q ≤ n, b<sub>q</sub> ≤ m<sub>q</sub>”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining Morse functions by jet transversality makes them generic

**Remember:** Transversality to the zero-derivative jets is generic, so Morse functions are generic.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58K05, 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** A first jet of a function records the point, the value and the first derivative there. Call f Morse when its first-jet map is transverse to the set of jets with zero derivative. Transverse means that, where they meet, the two tangent spaces together span the whole tangent space. The usual definition asks that the matrix of second derivatives be invertible at each critical point.

**Problem.** On a compact manifold without boundary, Morse functions form an open dense set of smooth functions. Here two functions are close when they and all their derivatives are uniformly close.

**How the definition helps.** With the jet definition, density is a direct case of Thom's jet transversality theorem. That theorem says that maps whose jets are transverse to a fixed submanifold form a dense set. Openness holds because transversality to a closed set is an open condition when the source is compact. In a chart, the zero-derivative jets are cut out by the n partial derivatives. So in our own check, transversality says that their derivative matrix, the Hessian, is invertible. Thus the two definitions agree, and the work goes into the jet transversality theorem.

**nLab:** [Morse function](https://ncatlab.org/nlab/show/Morse+function). It says: “The function f is called a Morse function if every critical point of f is regular”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities (1973), Chapter II, Transversality](https://doi.org/10.1007/978-1-4615-7904-5_2)

### Defining the Morse differential as cellular makes it square to zero

**Remember:** A cellular boundary map squares to zero, so the Morse differential does too.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** The unstable manifold of a critical point is the set of points whose negative gradient lines come out of that point. Take a metric that is Euclidean in Morse coordinates near the critical points. Then these unstable manifolds are the cells of a cell structure, and the Morse differential is its cellular boundary map. The usual definition counts, with signs, the gradient lines between critical points whose indices differ by one.

**Problem.** On a closed manifold, take a Morse function and a metric of that kind whose stable and unstable manifolds meet transversely. Then the Morse differential applied twice gives zero.

**How the definition helps.** With the cellular definition, the theorem is the identity ∂∂ = 0 that holds in every cellular chain complex. The usual proof compactifies the spaces of gradient lines between critical points whose indices differ by two. Their ends are broken lines that cancel in pairs, and showing this needs a gluing theorem. In our own account, the work moves into two theorems. The unstable manifolds must form a cell structure, and its boundary map must equal the signed count. Wikipedia names this cellular comparison as one proof that Morse homology equals singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Requiring nondegenerate critical points makes Morse theory see every change

**Remember:** Critical points must curve, or they may change nothing.

*Rules out counterexamples.* MSC 57R70 (Critical points and critical submanifolds in differential topology). arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A critical point of a smooth function f is a point where its derivative is zero. It is nondegenerate if the Hessian, the matrix of second derivatives, is invertible there. A Morse function has only nondegenerate critical points.

**Problem.** Morse theory says when the sublevel set {f ≤ a} changes. It changes by attaching a cell of dimension k when a passes a critical point of index k. Counting critical points then bounds the Betti numbers (the Morse inequalities).

**How the definition helps.** Nondegeneracy gives the Morse lemma. It says that near each critical point, f is −x₁² − … − xₖ² + xₖ₊₁² + … + xₙ² in suitable coordinates. So the change in topology is a single cell. The counterexample is f(x) = x³ on ℝ: 0 is a critical point, but the sublevel sets do not change as a passes 0. Its Hessian is zero, and a small push x³ + εx removes the point or splits it into two nondegenerate ones. Nondegenerate critical points are isolated, and Morse functions are open and dense, so nothing is lost. The cell-attaching theorem itself still needs gradient flows.

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “One must take care to make the critical points non-degenerate. To see what can pose a problem, let M = ℝ and let f(x) = x³.”

**Sources:**

- [M. Morse, Relations between the critical points of a real function of n independent variables, Transactions of the American Mathematical Society 27 (1925) 345–396](https://doi.org/10.1090/S0002-9947-1925-1501318-X)
- [R. Bott, Lectures on Morse theory, old and new, Bulletin of the American Mathematical Society 7 (1982) 331–358](https://doi.org/10.1090/s0273-0979-1982-15038-8)

### Cobordism, a coarser relation than diffeomorphism, gives a computable classification

**Remember:** Ask what bounds, not what is the same, and Thom computes everything.

*Makes the theorem clean to state or prove.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 55N22. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Two closed n-manifolds are cobordant when together they form the boundary of a compact (n+1)-manifold. The cobordism classes form a group under disjoint union, and a ring under product.

**Problem.** Thom showed that the unoriented cobordism ring is a polynomial ring over ℤ/2. It has one generator in each degree not of the form 2ᵏ − 1. A closed manifold bounds if and only if all its Stiefel–Whitney numbers vanish.

**How the definition helps.** Cobordism forgets enough information that the classes become homotopy groups of a Thom space, which homotopy theory can compute. A Thom space is built from a vector bundle by collapsing everything far from the zero section to one point. Our own remark: classifying manifolds up to diffeomorphism is undecidable in dimension 4 and above. Up to cobordism the answer is complete and explicit. The zero class consists of the manifolds that are boundaries, and M + M = 0 in the unoriented case. Characteristic numbers are cobordism invariants because a boundary has vanishing numbers (Pontryagin). What stays hard is the Thom construction that turns manifolds into maps to a Thom space.

**Wikipedia:** [Cobordism](https://en.wikipedia.org/wiki/Cobordism). It says: “The cobordism class \[M\] ∈ 𝔑ₙ of a closed unoriented n-dimensional manifold M is determined by the Stiefel–Whitney characteristic numbers of M”

**Sources:**

- [René Thom, Quelques propriétés globales des variétés différentiables, Commentarii Mathematici Helvetici 28 (1954) 17–86](https://doi.org/10.1007/BF02566923)

### Defining bordism geometrically makes homotopic maps represent the same class

**Remember:** A homotopy is a bordism on the cylinder.

*True by definition. Confidence: medium.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** An oriented bordism class over X is represented by a closed oriented manifold M with a map f: M → X. Two such maps are bordant when they extend over a compact oriented manifold whose boundary is the first source and the second with reversed orientation. The spectrum definition instead uses stable homotopy groups of a Thom spectrum.

**Problem.** Homotopic maps from the same closed oriented manifold to X represent the same oriented bordism class over X.

**How the definition helps.** With the geometric definition, a homotopy is itself a bordism. In our own proof, a homotopy is a map from the cylinder M × \[0, 1\]. Its oriented boundary is M at one end and M with reversed orientation at the other. With the spectrum definition, a map from a manifold gives a class only through the Pontryagin–Thom construction. That construction turns it into a map to the Thom spectrum. The real work of the geometric theory is elsewhere, in the collar theorem. It gives each boundary a product neighbourhood, so bordisms can be glued and bordism is transitive.

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “Atiyah's geometric model for bordism homology groups defines them as equivalence classes of maps of manifolds.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)

### Multiplicative sequences make genera multiply on manifold products

**Remember:** Products join the formal factors, so their genus values multiply.

*True by definition.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 57R20, 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** Write a manifold's total rational Pontryagin class, a sum of tangent-bundle invariants, as a formal product of factors (1 + zⱼ). Choose a rational formal power series Q with constant term 1. The product of the Q(zⱼ) is symmetric, so it can be expressed in Pontryagin classes. The genus of a closed oriented smooth manifold evaluates the part in its dimension on the manifold's fundamental class.

**Problem.** Show that the genus of a product is the product of the genera. Show that this genus vanishes on oriented boundaries.

**How the definition helps.** A multiplicative sequence makes genus values multiply because the tangent bundle of a product is the sum of the two pulled-back tangent bundles. In our own calculation, the rational Pontryagin product rule joins the two lists of formal factors. Evaluation on the product manifold then multiplies the separate evaluations. Abstractly, a genus is already required to be multiplicative, but that requirement does not prove a formula defines one. The work shifts to the Pontryagin product rule and to showing that Pontryagin numbers vanish on boundaries.

**Wikipedia:** [Genus of a multiplicative sequence](https://en.wikipedia.org/wiki/Genus_of_a_multiplicative_sequence). It says: “The conditions on Φ can be rephrased as saying that Φ is a ring homomorphism from the cobordism ring of manifolds (with additional structure) to another ring.”

**Sources:** none listed. No primary source with a working link was found.

### The fixed points of a proper action form a submanifold

**Remember:** Properness keeps points from escaping, so the action looks linear near each fixed point.

*Rules out counterexamples. Confidence: medium.* MSC 57S15 (Compact Lie groups of differentiable transformations), 57S20, 22F05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An action of a Lie group G on a manifold X is proper if the map G × X → X × X, (g, x) ↦ (g·x, x), is proper. A map is proper when the preimage of every compact set is compact. For a compact group, every smooth action is proper.

**Problem.** For a smooth proper action of G on X, show that the fixed locus Xᴳ is a smooth submanifold. The fixed locus is the set of points x with g·x = x for every g in G.

**How the definition helps.** Properness makes the action linear near each fixed point, and the fixed set of a linear action is a linear subspace. In detail, for a proper action, a fixed point x has a G-invariant tubular neighbourhood that is G-equivariantly diffeomorphic to a linear representation V. Near x, the fixed locus is then the linear subspace Vᴳ, so Xᴳ is a submanifold. Without properness the conclusion can fail. A simple example of our own: let ℝ act on ℝ² by the flow of the bounded vector field g·∂/∂x, with g(x, y) = x²y²/(1 + x²y²). The fixed points are the zeros of g, which form the two axes: a cross, which is not a submanifold. The real work is to show that invariant tubular neighbourhoods exist for proper actions.

**nLab:** [fixed point space](https://ncatlab.org/nlab/show/fixed+point+space). It says: “Let X be a smooth manifold, G a Lie group and ρ : G × X → X a proper action by diffeomorphisms. Then the G-fixed locus Xᴳ ↪︎ X is a smooth submanifold.”

**Sources:**

- [Marja Kankaanrinta, Equivariant collaring, tubular neighbourhood and gluing theorems for proper Lie group actions, Algebraic &amp; Geometric Topology 7 (2007) 1–27](https://doi.org/10.2140/agt.2007.7.1)

### Link-homotopy turns every link into a closed pure braid with algebraic moves

**Remember:** Let each strand cross itself, and only linking between strands remains.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 20F36. arXiv math.GT. Level 4: research.

**Definition.** Milnor's link-homotopy lets each component of a link pass through itself, but never through another component. Up to link-homotopy, pure braids form a group, the homotopy braid group. Partial conjugations are a specific family of conjugation moves on pure braids, defined in the paper.

**Problem.** Classify links up to link-homotopy. Milnor did this for three components (our own remark), and Levine did it for four. Habegger and Lin gave a classification for every number of components, but it is hard to use in practice (our own remark).

**How the definition helps.** Allowing a component to cross itself kills all knotting of single components, so only the way the components link remains (our own remark). Then every link is link-homotopic to the closure of a pure braid (Lemma 4.7). Two homotopic pure braids have link-homotopic closures exactly when partial conjugations relate them (Corollary 4.6). So the classification becomes a question about orbits in one group, following Habegger and Lin (our own remark). Graff builds a faithful linear representation of the homotopy braid group and gives a geometric proof of Levine's 4-component result. He also classifies algebraically split 5-component links. The hard part is to understand the orbits of the partial conjugations.

**Paper or page:** [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539), [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539). It says: “Any n-component link is link-homotopic to the closure of an n-component pure braid.”

**Sources:**

- [E. Graff, On braids and links up to link-homotopy, arXiv:2210.01539 (2023)](https://arxiv.org/abs/2210.01539)
- [Habegger, Lin, The classification of links up to link-homotopy, J. Amer. Math. Soc. (1990)](https://doi.org/10.1090/s0894-0347-1990-1026062-0)

### Slice-torus axioms prove a slice-Bennequin bound for every such invariant at once

**Remember:** Prove it from the axioms once, and every slice-torus invariant obeys.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory), 57K18. arXiv math.GT. Level 4: research.

**Definition.** Following Livingston, a slice-torus invariant is additive and concordance-invariant. It is at most the slice genus, and equals the genus on positive torus knots. The slice genus is the least genus of a smooth surface in the 4-ball with the knot as boundary. The self-linking number sl(β) of a braid is its writhe, the signed crossing count, minus its number of strands.

**Problem.** Bound the self-linking number of braids, and the slice genus of links, by invariants from Floer or Khovanov homology.

**How the definition helps.** The axioms are the properties used in proofs of such bounds, so a bound proved from them holds for all such invariants. The quoted slice-Bennequin inequality is an example. The Milnor conjecture on the slice genus of torus knots also follows at once from the existence of one such invariant (our own remark). The real work moves into building an invariant with these properties, such as τ or s (our own remark). The paper also uses the axioms to characterize positive links with unlinking number 1 or 2.

**Paper or page:** [Slice-torus link invariants, combinatorial invariants, and positivity conditions](https://arxiv.org/abs/2008.06921). It says: “For each braid β representing an ℓ-component link L, and any slice-torus link invariant ν, we have sl(β) ≤ 2ν(L) − ℓ.”

**Sources:**

- [C. Collari, Slice-torus link invariants, combinatorial invariants, and positivity conditions, Bull. London Math. Soc. 53 (2021) 1072-1092, arXiv:2008.06921](https://arxiv.org/abs/2008.06921)

### Knot-type knotoids hold all of classical knot theory inside knotoid theory

**Remember:** Cut a knot open in one region and nothing about it is lost.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A knotoid is an arc diagram on the sphere with two free end points. Moves may never pass a strand across an end point. A knotoid is knot-type when both end points lie in the same region, so that they can be joined without a new crossing. The knotoid spectrum of an open curve in space is the set of knotoids seen in its projections.

**Problem.** Knotoids model open curves. Do they still see classical knots without loss, so that open-curve tools can be checked against knot theory?

**How the definition helps.** Joining the end points of a knot-type knotoid inside their common region gives a well-defined knot (our own summary of Turaev). Turaev, who introduced knotoids, showed that this map is a bijection between knot-type knotoids on the sphere and knots. The quoted corollary uses this: two knots are equivalent exactly when the knot-type knotoids in their spectra are equivalent. The paper also shows that open curves near a knot have this knot-type knotoid as the only knot-type element of their spectrum. What stays hard is the general knotoids, which are not knot-type and carry new information.

**Paper or page:** [On the neighborhood of knots](https://arxiv.org/abs/2410.15593). It says: “Let K₁,K₂ denote the embeddings of two knots in 3-space. K₁ and K₂ are equivalent knots if and only if the knot-type knotoids in their spectra are equivalent.”

**Sources:**

- [On the neighborhood of knots, arXiv:2410.15593 (2024)](https://arxiv.org/abs/2410.15593)

### Kuperberg's minimal surface lets Floer homology be defined for virtual knots

**Remember:** Pick the smallest surface, and stabilization stops being a problem.

*Makes the theorem clean to state or prove.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual knot is a knot in a thickened closed oriented surface, up to isotopy, surface diffeomorphisms and stabilization. Stabilization adds or removes a handle away from the knot. Kauffman and others showed that this matches virtual knot diagrams (Theorem 2.1 in the paper). Kuperberg proved that each virtual knot has a representative of minimal genus, and that it is unique.

**Problem.** An invariant of knots in one thickened surface often changes under stabilization. Then it does not give an invariant of virtual knots. Heegaard Floer homology is a strong knot invariant, built from counts of holomorphic discs.

**How the definition helps.** Kuperberg's theorem gives each virtual knot a canonical surface. Any invariant of knots in thickened surfaces, evaluated there, is a virtual knot invariant. The authors show that their Floer homologies change under stabilization, so the direct route fails. Evaluating on the minimal genus representative avoids this. The hard part is moved into Kuperberg's uniqueness theorem. The paper also shows that the minimal surface can be found by an algorithm (Theorem 10.4).

**Wikipedia:** [Virtual knot](https://en.wikipedia.org/wiki/Virtual_knot). It says: “a virtual knot is a generalization of knots in 3-dimensional Euclidean space, R³, to knots in thickened surfaces Σ × \[0,1\] modulo an equivalence relation called stabilization/destabilization.”

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129), [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “We also propose several constructions of Heegaard Floer homology for knots in thickened surfaces, and give examples why they are not stabilization invariant. However, we can define Floer homology for virtual knots by taking a minimal genus representative.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)
- [Greg Kuperberg, What is a virtual link?, Algebr. Geom. Topol. 3 (2003)](https://doi.org/10.2140/agt.2003.3.587)

### Quandle colorings count surface-links once a generating set of moves is known

**Remember:** Quandle axioms are the moves, so colorings never notice them.

*True by definition. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** A quandle is a set with an operation where x ∗ x = x, right multiplications are bijections, and right self-distributivity holds. The three axioms match the three Reidemeister moves. A coloring of a diagram labels each arc by a quandle element, with the quandle rule at each crossing. A singular marked diagram is a link diagram with extra marked vertices and singular vertices that encodes an immersed surface in 4-space by its cross-sections.

**Problem.** Show that counting quandle colorings gives an invariant of oriented immersed surface-links in 4-space.

**How the definition helps.** A coloring count is unchanged by each move that the quandle axioms respect, and Proposition 7.1 says the axioms are chosen for exactly this. So invariance only needs a list of moves relating any two diagrams of a surface. The main work of the paper is that list: a minimal generating set of moves for immersed surfaces (Theorem 6.1 for oriented diagrams). Once it is known, Corollary 7.2 is a direct check. Here the definition of a quandle carries the invariance, and the topology moves into the theorem on moves.

**Paper or page:** [Minimal generating sets of moves for surfaces immersed in the four-space](https://arxiv.org/abs/2208.08244). It says: “The number of quandle colorings \#ColQ(D) of an oriented singular marked diagram D is an invariant of an oriented surface-link ℒ presented by D”

**Sources:**

- [M. Jabłonowski, Minimal generating sets of moves for surfaces immersed in the four-space, J. Knot Theory Ramifications (2023), arXiv:2208.08244](https://arxiv.org/abs/2208.08244)

### Rack axioms that copy Legendrian Reidemeister moves give an automatic invariant

**Remember:** Write each move into an axiom, and invariance comes free.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 53D10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A rack is a set with an operation whose right multiplications are bijections and which is right self-distributive. These two axioms are the second and third Reidemeister moves. A generalised Legendrian rack adds two maps, u and d, used where an arc passes an up cusp or a down cusp. A front diagram is the projection of a Legendrian link to the (x, z)-plane, which has cusps but no vertical tangents.

**Problem.** Find an algebraic invariant of oriented Legendrian links up to Legendrian isotopy.

**How the definition helps.** The axioms on (u, d) are chosen so that each Legendrian Reidemeister move gives an isomorphic rack, so invariance (Theorem 4.3) is nearly by definition. The real work moves into the theorem, due to Świątkowski (our attribution), that fronts of Legendrian isotopic links are related by those moves (Theorem 2.6). Racks, not quandles, fit here because a Legendrian front has no free first Reidemeister move (our own remark). The invariant distinguishes infinitely many oriented Legendrian unknots and trefoils. The authors also prove that every such rack has a homogeneous representation.

**Paper or page:** [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854), [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854). It says: “A generalised Legendrian rack is a rack equipped with a Legendrian structure, which is a pair of maps encoding the information of Legendrian Reidemeister moves together with up and down cusps in the front diagram of an oriented Legendrian link.”

**Sources:**

- [B. Karmakar, D. Saraf, M. Singh, Generalised Legendrian racks of Legendrian links, J. Topol. Anal. (2025), arXiv:2301.06854](https://arxiv.org/abs/2301.06854)
- [J. Świątkowski, On the isotopy of Legendrian knots, Ann. Global Anal. Geom. 10 (1992) 195-207](https://doi.org/10.1007/bf00136863)

### Virtual diagrams and knots in thickened surfaces define the same virtual knots

**Remember:** Virtual crossings are just the shadow of a handle in the surface.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual link diagram is a planar diagram with ordinary crossings and extra virtual crossings. A virtual crossing is a circled double point, not a real crossing. Diagrams are equal up to Reidemeister moves and moves that slide strands through virtual crossings. The second definition is a link in a thickened closed oriented surface, up to isotopy, surface diffeomorphisms and adding or removing handles.

**Problem.** Show that the combinatorial and the geometric definitions of virtual links give the same objects. Then each definition can be used where it is easier.

**How the definition helps.** Once the two definitions agree, statements about virtual links can be proved with surfaces and checked with diagrams. To get a surface, thicken the diagram and add a handle at each virtual crossing (our own summary). The theorem says that the diagram moves match exactly isotopy, surface diffeomorphisms and handle stabilization. The paper builds spanning surfaces, Seifert matrices and Alexander-type polynomials for knots in thickened surfaces. Through the theorem, one of these polynomials becomes an invariant of virtual knots. The work moves into this theorem, due to Kauffman and to Carter, Kamada and Saito (our own attribution for the second group).

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “Two virtual link diagrams are virtually isotopic if and only if their surface embeddings are equivalent up to isotopy in the thickened surfaces, orientation-preserving diffeomorphisms of the surfaces, and one-handle stabilizations and destabilizations.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)

### Welded diagrams give Milnor invariants an exact diagrammatic meaning

**Remember:** In the welded world, Milnor invariants see exactly one concordance relation.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 4: research.

**Definition.** A string link is a set of disjoint arcs in a cylinder with fixed end points on the top and bottom discs. Welded diagrams are virtual knot diagrams with one more allowed move, which lets an over-arc pass a virtual crossing. Meilhan and Yasuhara defined wq-concordance: welded concordance together with surgery along w-trees of degree at least q (our own summary). A w-tree is a decorated tree in their arrow calculus that acts like an iterated commutator of meridians (our own summary).

**Problem.** Milnor invariants of length at most q see the peripheral system modulo the q-th term of the lower central series (our own summary). The peripheral system is the link group with its meridians and longitudes. Which diagram relation on string links do these invariants detect exactly?

**How the definition helps.** Welded links keep exactly the group and the peripheral system of a diagram, which is what Milnor invariants read (our own summary). So the welded setting has a matching relation: the q-nilpotent peripheral system is complete for wq-concordance (our own summary of the main theorem). Classical string links sit inside welded string links. By our own reading of the abstract, two classical string links have equal Milnor invariants of length at most q exactly when they are wq-concordant. The abstract compares this with the classification up to Cq-concordance by Conant, Schneiderman and Teichner, which stays inside classical links. The work moves into the arrow calculus of welded diagrams.

**Paper or page:** [A diagrammatical characterization of Milnor invariants](https://arxiv.org/abs/2201.01499). It says: “we describe when two string links have equal Milnor invariants of length ≤ q and when a link has trivial Milnor invariants of lenght ≤ q. This will be done through the use of welded knot theory”

**Sources:**

- [B. Colombari, A diagrammatical characterization of Milnor invariants, arXiv:2201.01499 (2022)](https://arxiv.org/abs/2201.01499)

### Welded equivalence is the relation that Satoh's tube map respects

**Remember:** The tubes cannot tell welded-equivalent diagrams apart, so welded is right.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** Satoh's tube map sends a virtual knot diagram to a ribbon torus knot, a knotted torus in 4-space of a simple kind. A virtual diagram may have virtual crossings, which are marked crossings that are not real. Each classical crossing becomes one tube passing through another tube, and virtual crossings are ignored. Welded (w-) equivalence is virtual equivalence plus one extra move, which lets an over-arc slide past a virtual crossing.

**Problem.** Which diagram moves give the same ribbon torus knot under the tube map? The answer tells us which diagram theory models ribbon tori.

**How the definition helps.** The extra welded move is invisible in 4-space, because there the tubes involved can be slid past each other (our own explanation). So the tube map is well defined on welded knots and not only on virtual knots (Theorem 5). The knot group and the knot quandle of the welded diagram equal those of the tube (Theorem 6). The quandle is an algebra on the arcs of a diagram that refines the group. Satoh showed that every ribbon torus knot comes from some diagram (our own remark). Winter extends the map to virtual m-links in higher dimensions. Whether isotopic tubes force welded equivalence is a separate question (our own remark).

**Paper or page:** [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766), [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766). It says: “If K and K′ are w-equivalent, then Tube(K) and Tube(K′) are isotopic through a stable equivalence of ribbon links.”

**Sources:**

- [B. K. Winter, Some generalizations of Satoh's Tube map, arXiv:2103.08766 (2021)](https://arxiv.org/abs/2103.08766)
- [Satoh, Virtual knot presentation of ribbon torus-knots, J. Knot Theory Ramifications (2000)](https://doi.org/10.1142/s0218216500000293)

### A Jones polynomial for open curves agrees with the classical one

**Remember:** Define the polynomial on open diagrams, and closing the ends changes nothing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K14 (Knot polynomials), 57K12. arXiv math.GT. Level 4: research.

**Definition.** A linkoid is a link diagram in which some components are arcs with two free end points instead of closed loops. Barkataki and Panagiotou define its Jones polynomial by a Kauffman bracket state sum, which adds terms over all ways to smooth the crossings. They correct it by the writhe, the signed count of crossings. A linkoid is link-type when each arc can be closed without new crossings.

**Problem.** Polymers and proteins are open curves, but knot invariants such as the Jones polynomial need closed curves. We want a measure of entanglement for open curves that changes continuously and agrees with the Jones polynomial on closed curves.

**How the definition helps.** If the ends can be joined without new crossings, the state sum equals that of the closed link. So agreement with the classical Jones polynomial (Theorem 3.1) is close to built in. For open curves in space, the polynomial is built from the linkoids seen in projections, following Panagiotou and Kauffman. The result is a continuous function of the coordinates of the curve (Proposition 4.1). As the end points come together, it tends to the Jones polynomial of the closed link (Corollary 4.1). The real work is to show that the linkoid polynomial does not change under the moves of linkoid diagrams. An open curve in space can always be untied, so no exact topological invariant exists for it (our own remark).

**Paper or page:** [The Jones polynomial of collections of open curves in 3-space](https://arxiv.org/abs/2205.03474). It says: “show that this is a well-defined single variable polynomial that is a topological invariant, which, for link-type linkoids, it coincides with that of the corresponding link.”

**Sources:**

- [K. Barkataki, E. Panagiotou, The Jones polynomial of collections of open curves in 3-space, arXiv:2205.03474 (2022)](https://arxiv.org/abs/2205.03474)
- [Panagiotou, Kauffman, Knot polynomials of open and closed curves, Proc. R. Soc. A (2020)](https://doi.org/10.1098/rspa.2020.0124)

### The normalized Markov trace gives a link invariant from braids

**Remember:** Trace handles conjugation, and the crossing-count correction handles stabilization.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials), 20F36. arXiv math.GT, math.QA. Level 4: research.

**Definition.** Closing a braid joins its corresponding ends, and Alexander's theorem gives such a description of every oriented link. Send the braid to the Temperley–Lieb algebra, an algebra of planar diagrams with a loop factor δ. For an n-strand braid, multiply the trace of its image by δⁿ⁻¹ and correct for the signed crossing count. The Kauffman bracket instead sums smoothings of a link diagram.

**Problem.** The corrected trace is independent of the braid chosen to close to a given oriented link. After the Jones change of variable it equals the Jones polynomial.

**How the definition helps.** A normalized Markov trace is designed to be unchanged under the moves that preserve braid closures (our own). The trace rule tr(ab) = tr(ba) makes it unchanged under conjugation (our own). Adding a strand and one crossing multiplies the scaled trace by a fixed factor, with reciprocal factors for the two crossing signs (our own). Raise the positive factor to minus the signed crossing count to cancel either change (our own). Markov's theorem says these moves connect all braids with equivalent closures (our own). The remaining work is proving that theorem and constructing the trace with its required rules (our own).

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial). It says: “Take the braid word σ obtained previously from L and compute δⁿ⁻¹ tr ρ(σ) where tr is the Markov trace.”

**Sources:**

- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the AMS (1985)](https://doi.org/10.1090/s0273-0979-1985-15304-2)
- [Vaughan F. R. Jones, Hecke algebra representations of braid groups and link polynomials, Annals of Mathematics (1987)](https://doi.org/10.2307/1971403)

### Topologically slice knots have square determinants

**Remember:** Local flatness makes the determinant of a slice knot a square.

*Rules out counterexamples.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 4: research.

**Definition.** A knot is topologically slice if it bounds an embedded disk in the four-dimensional ball that meets the boundary exactly in the knot. The disk must be locally flat. Near each point, the disk and ball look like a plane in four-dimensional space, using half-spaces at boundary points.

**Problem.** The absolute value of the Alexander polynomial at −1 is a square for every topologically slice knot.

**How the definition helps.** Local flatness rules out a cone singularity and gives the hypothesis of the Fox–Milnor factorization, in our own explanation. This theorem writes the Alexander polynomial as f(t)f(1/t), up to sign and a power of t. At −1 the two factors agree, so the absolute value is a square. In our own counterexample, the trefoil bounds the disk formed by coning it to the ball’s centre. Its determinant is 3, so this disk cannot be locally flat.

**Wikipedia:** [Slice knot](https://en.wikipedia.org/wiki/Slice_knot). It says: “It follows that the knot's determinant (= Δ(−1)) is a square number.”

**Paper or page:** [Seifert forms and slice Euler characteristic of links](https://arxiv.org/abs/2405.14076v1). It says: “If L bounds a locally flat surface in B⁴ with Euler characteristic 1, then there exists F ∈ ℤ\[t\]”

**Sources:** none listed. No primary source with a working link was found.

### Normalization cancels isolated surgery blowups

**Remember:** A new isolated unknot adds its own factor to the denominator.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)), 81T45. arXiv math.QA. Level 4: research.

**Definition.** In the Reshetikhin–Turaev surgery formula, label each component of the framed link by the sum of simple labels weighted by their quantum dimensions. Write u and v for the nonzero evaluations of isolated unknots with framing +1 and −1. Divide the link evaluation by one factor u per positive eigenvalue and one factor v per negative eigenvalue of its linking matrix.

**Problem.** The normalized Reshetikhin–Turaev surgery value is unchanged by adding or removing an isolated unknot of framing +1 or −1.

**How the definition helps.** The normalized evaluation cancels exactly the factor that the unnormalized evaluation gains. An isolated positive unknot multiplies the numerator by u and adds a positive eigenvalue. An isolated negative unknot gives the corresponding factor v. Full surgery invariance also requires the separate handle-slide identity.

**Wikipedia:** [Reshetikhin–Turaev invariant](https://en.wikipedia.org/wiki/Reshetikhin%E2%80%93Turaev_invariant). It says: “the first and second bracket ensure that RTᵣ(Mₗ) is invariant under blowing up/down”

**Sources:**

- [Reshetikhin and Turaev, Invariants of 3-manifolds via link polynomials and quantum groups](https://link.springer.com/article/10.1007/BF01239527)

### Vassiliev’s crossing difference makes top values depend on chord diagrams

**Remember:** An ordinary crossing change introduces a double point beyond the allowed degree.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)). arXiv math.GT. Level 4: research.

**Definition.** At a double point, where two strands meet, extend a knot invariant by v(K×) = v(K₊) − v(K₋). Here the two knots on the right resolve the meeting as crossings of opposite sign. An invariant has degree at most n if this extension vanishes on knots with n + 1 double points. Its chord diagram pairs the two preimages of each meeting on the parameter circle.

**Problem.** For an invariant of degree at most n, its value on a singular knot with n double points depends only on the chord diagram.

**How the definition helps.** The difference definition makes an ordinary crossing change cost one extra double point, whose value is zero (our own). The geometric step identifies two singular knots with the same chord diagram up to ordinary crossing changes and isotopy (our own). They are embeddings of the same graph with matched branches at each double point (our own). One arranges the double-point neighborhoods first, then deforms the connecting arcs while allowing crossings away from those neighborhoods (our own). Unlike the original approach through the space of singular knots, this definition makes the crossing-change calculation explicit (our own).

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “Let v be a Vassiliev invariant of degree ≤ n. Then the value of v on a singular knot with n distinct double points depends only on the chord diagram of the singular knot, and not on the knot itself.”

**Sources:**

- [Dror Bar-Natan, On the Vassiliev knot invariants, Topology (1995)](https://doi.org/10.1016/0040-9383(95)93237-2)
- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Khovanov’s graded chain groups recover the Jones polynomial

**Remember:** Khovanov chain groups replace each circle factor with a graded vector space.

*True by definition.* MSC 57K18 (Homology theories in knot theory (Khovanov, Heegaard-Floer, etc.)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** Each resolution D replaces every crossing by one of two smoothings, leaving k circles. Assign to D a tensor product of k copies of a vector space V with one basis vector in each degree ±1. If r counts 1-smoothings and n₊, n₋ count positive and negative crossings, put this group in degree r − n₋. Increase its internal degrees by r + n₊ − 2n₋.

**Problem.** The graded Euler characteristic of unreduced Khovanov homology equals the Jones state sum normalized to give q + q⁻¹ on the unknot.

**How the definition helps.** The chain groups are defined so that their graded dimensions reproduce the writhe-corrected Kauffman bracket, the diagram state sum for Jones (our own). One circle contributes q + q⁻¹, the sum of q raised to each basis degree (our own). A smoothing contributes the product of its circle factors with the sign from chain degree and the power from the internal shift (our own). The graded Euler characteristic is this alternating sum of graded dimensions, and it is unchanged on passing to homology (our own). The work is defining a differential that preserves internal degree and squares to zero, then proving invariance under the local diagram moves (our own).

**Wikipedia:** [Khovanov homology](https://en.wikipedia.org/wiki/Khovanov_homology). It says: “The graded Euler characteristic of H(L) turns out to be the Jones polynomial of L.”

**Paper or page:** [A quantum algorithm for Khovanov homology](https://arxiv.org/abs/2501.12378v2). It says: “The graded Euler characteristic of C(K) is the unnormalized Jones polynomial of K.”

**Sources:**

- [Mikhail Khovanov, A categorification of the Jones polynomial, Duke Mathematical Journal (2000)](https://doi.org/10.1215/S0012-7094-00-10131-7)

### Using real curves, not isotopy classes, makes graph automorphisms the homeomorphisms

**Remember:** Keep the curves themselves, and the graph's symmetries are all homeomorphisms.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 4: research.

**Definition.** The fine curve graph of a surface has one vertex for each essential simple closed curve, meaning one that bounds no disc. Vertices are actual curves, not isotopy classes of curves. Two vertices are joined by an edge when the curves are disjoint. Bowden, Hensel and Webb introduced it to study groups of homeomorphisms.

**Problem.** Find a graph built from curves whose automorphism group is the full homeomorphism group of the surface. For the ordinary curve graph, whose vertices are isotopy classes, Ivanov's theorem gives only the mapping class group (our own remark).

**How the definition helps.** Because each vertex is a real curve, every homeomorphism moves vertices to vertices and keeps disjointness, so it gives an automorphism with no loss. Isotopy is no longer divided out, so nothing in the homeomorphism group is forgotten. The hard direction is the converse: every automorphism must come from exactly one homeomorphism. Long, Margalit, Pham, Verberne and Yao proved this for closed surfaces of genus at least 2. Le Roux and Wolff extend it to the torus and to more general surfaces, compact or not, orientable or not. Booth, Minahan and Shapiro get the same result for genus at least one with edges for curves that meet in at most one point.

**Paper or page:** [Automorphisms of some variants of fine graphs](https://arxiv.org/abs/2210.05460), [Automorphisms of the fine 1-curve graph](https://arxiv.org/abs/2309.16041). It says: “Later Long, Margalit, Pham, Verberne and Yao proved that for a closed surface of genus g ⩾ 2, the automorphism group of the fine graph is naturally isomorphic to the homeomorphism group of the surface.”

**Sources:**

- [F. Le Roux, M. Wolff, Automorphisms of some variants of fine graphs, Algebr. Geom. Topol. 24 (2024) 4697-4730, arXiv:2210.05460](https://arxiv.org/abs/2210.05460)
- [Long, Margalit, Pham, Verberne, Yao, Automorphisms of the fine curve graph, Trans. Amer. Math. Soc. (2025)](https://doi.org/10.1090/tran/9374)
- [Bowden, Hensel, Webb, Quasi-morphisms on surface diffeomorphism groups, J. Amer. Math. Soc. (2021)](https://doi.org/10.1090/jams/981)

### Homology cobordism turns homology cylinders into one group containing mapping classes

**Remember:** Divide by homology cobordism, and stacked cylinders gain inverses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds), 57R90, 57K20. arXiv math.GT. Level 4: research.

**Definition.** A homology cylinder over a surface Σ is a 3-manifold that looks like Σ × \[0,1\] to homology. It has two copies of Σ in its boundary, and both inclusions are isomorphisms on homology. Stacking two of them gives a third. Two homology cylinders are homology cobordant when they bound a 4-manifold whose inclusions are isomorphisms on homology.

**Problem.** Homology cylinders form only a monoid under stacking. We want one group that holds the mapping class group and the concordance group of string links, to study Johnson homomorphisms and Milnor invariants together. Concordant means joined by disjoint annuli in a 4-dimensional product (our own gloss).

**How the definition helps.** Up to homology cobordism, a cylinder stacked with its upside-down copy is trivial, so inverses exist (our own summary of Garoufalidis and Levine). Mapping classes give homology cylinders through their mapping cylinders. String links give them through their exteriors (our own remark). So both classical groups map into the new group, and their invariants can be extended at once. Song extends Johnson homomorphisms, Milnor invariants and Orr invariants to this group and computes the graded pieces of a combined filtration.

**Paper or page:** [Homology cobordism group of homology cylinders and invariants related to lower central series](https://arxiv.org/abs/2012.13165). It says: “The homology cobordism group of homology cylinders is a generalization of both the mapping class group of surfaces and the string link concordance group.”

**Sources:**

- [M. Song, Homology cobordism group of homology cylinders and invariants related to lower central series, arXiv:2012.13165 (2020)](https://arxiv.org/abs/2012.13165)
- [Garoufalidis, Levine, Tree-level invariants of three-manifolds, Massey products and the Johnson homomorphism, Proc. Sympos. Pure Math. 73 (2005)](https://doi.org/10.1090/pspum/073/2131016)

### Flattened Rogers values give complex volume

**Remember:** Flatten the tetrahedra before adding their Rogers values.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 33B30, 11G55. arXiv math.GT, math.NT. Level 4: research.

**Definition.** A flattening records log z+pπi and −log(1−z)+qπi for a tetrahedron of complex shape z, with integer branch indices p,q. The third edge logarithm makes the sum zero, and opposite edges share a logarithm. A strong flattening cancels signed logarithms around edges and along closed normal paths around each vertex. Such paths cross faces away from edges, and branch shifts must also have even total parity along every closed normal path.

**Problem.** Use an ordered ideal triangulation of an oriented complete finite-volume cusped hyperbolic three-manifold, with tetrahedron shapes from the complete structure and a strong flattening. Sum Li₂(z)+log(z)log(1−z)/2+πi(p log(1−z)+q log z)/2−π²/6 with each tetrahedron’s orientation sign. Modulo π²ℤ, the result equals i times the volume minus the Chern–Simons invariant in Neumann’s convention.

**How the definition helps.** In our own terms, the branch indices let the complex invariant be written as one sum over tetrahedra. In our own terms, the lifted five-term relation respects changes in the decomposition. In our own terms, the work lies in finding strong flattenings and identifying the resulting sum with the Cheeger–Chern–Simons class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “when applied to a fundamental class \[X\] of a hyperbolic 3-manifold according to the above, then it yields its complex volume”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Transfer removes spurious two-torsion

**Remember:** The transfer relation makes the two branch changes independent.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 11G55, 33B30. arXiv math.GT, math.NT. Level 4: research.

**Definition.** Start with symbols \[z,p,q\], where z is a complex tetrahedron shape outside {0,1} and p,q are integer logarithm branch indices. Impose the five-term relations from five tetrahedra whose signed edge logarithms cancel at every edge. Neumann’s extended pre-Bloch group also imposes \[z,p,q\]+\[z,r,s\]=\[z,p,s\]+\[z,r,q\]. This last equality is the transfer relation.

**Problem.** The map from Neumann’s group with only the lifted five-term relations to the extended pre-Bloch group has kernel cyclic of order two. Its generator is \[z,1,1\]+\[z,0,0\]−\[z,1,0\]−\[z,0,1\], independent of z.

**How the definition helps.** In our own terms, the transfer relation kills the mixed difference of the two branch changes. In our own terms, without it the mixed difference at p = q = 1 is a nonzero class of order two. In our own terms, Neumann’s Proposition 7.2 shows all transfer relations generate exactly that class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭ PSL(2,ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Twisted Alexander polynomials detect fibred 3-manifolds where the ordinary one fails

**Remember:** One polynomial can be fooled; all the twisted ones together cannot.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** Let N be a 3-manifold and φ a class in its first cohomology. The twisted Alexander polynomial is built like the Alexander polynomial of the infinite cyclic cover given by φ. But the homology has coefficients twisted by a representation of the fundamental group, for example through a finite group.

**Problem.** When does N fibre over the circle in the direction φ? For a fibred knot, the Alexander polynomial is monic and its degree is twice the genus. These conditions are necessary but not sufficient.

**How the definition helps.** Twisting by all representations through finite groups gives the invariant enough information to see fibring. For an irreducible N, the natural conditions then become both necessary and sufficient. The conditions are that each twisted polynomial is monic and that its degree is fixed by the Thurston norm. The excluded bad case is a non-fibred knot with a monic Alexander polynomial of degree twice its genus (our own remark). What stays hard is the proof of sufficiency, which fills the paper. As a result, S¹ × N carries a symplectic structure only if N fibres over the circle.

**Paper or page:** [Twisted Alexander polynomials detect fibered 3-manifolds](https://arxiv.org/abs/0805.1234). It says: “In this paper we show that the conditions on twisted Alexander polynomials are not only necessary but also sufficient for a 3-manifold to be fibered.”

**Sources:**

- [S. Friedl, S. Vidussi, Twisted Alexander polynomials detect fibered 3-manifolds, Ann. of Math. (2) 173 (2011) 1587-1643, arXiv:0805.1234](https://arxiv.org/abs/0805.1234)

### Antisymmetric classes forget orientation

**Remember:** Reverse orientation and conjugate, and the antisymmetric part stays put.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For an oriented complete cusped hyperbolic three-manifold of finite volume, let β be its rational Bloch invariant. Compute β by adding signed tetrahedron shapes from a triangulation with vertices at infinity. Complex conjugation acts on each shape and hence on β. Set β⁻ equal to half the difference between β and its conjugate.

**Problem.** Reversing the orientation preserves β⁻. This part of the Bloch invariant gives the class for cutting and reassembling polyhedra when reflections are allowed.

**How the definition helps.** Taking the half-difference cancels the two effects of orientation reversal (our own). Reversal changes the sign of the fundamental class and conjugates each shape, taking β to minus its conjugate (our own). Identifying the result with the geometric cutting invariant requires the scissors congruence theorem of Dupont and Sah (our own).

**nLab:** [scissors congruence](https://ncatlab.org/nlab/show/scissors+congruence). It says: “The scissors congruence group 𝒫(X, G) where G is a subgroup of the group of isometries of X, is the free abelian group on symbols \[P\], for all polytopes in X modulo the relations”

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “The element ∑ᵢ\[zᵢ\] of ℬ(ℂ) is independent of the choice of ideal triangulation of M; we denote it by β(M).”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)
- [Walter D. Neumann and Jun Yang, Bloch invariants of hyperbolic 3-manifolds (1999)](https://doi.org/10.1215/S0012-7094-99-09602-3)

### Conjugate volumes classify scissors classes

**Remember:** One volume becomes a vector that tests scissors equivalence.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45, 19F27. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For each manifold, its invariant trace field is generated over ℚ by the squared traces of matrices representing its hyperbolic holonomy. Choose a common number field K containing both trace fields and closed under complex conjugation. Each embedding of K into ℂ sends the manifold’s rational Bloch class to a class with a signed volume. Take one volume per conjugate pair of nonreal embeddings, using the same choices for both manifolds, to form the Borel regulator vector.

**Problem.** Suppose every embedding of K ∩ ℝ into ℂ has real image. Two complete oriented hyperbolic three-manifolds of finite volume are stably scissors congruent exactly when their vectors agree. Stable scissors congruence permits adding the same polyhedron to both manifolds before cutting and reassembling polyhedral pieces.

**How the definition helps.** The vector records the volume at every complex place, so Neumann’s comparison becomes an equality test (our own). His theorem identifies stable scissors congruence with the vector difference coming from a Bloch class over K ∩ ℝ. Borel’s rank theorem gives that totally real field a rational Bloch group of rank zero. Thus the only possible difference is zero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Now the point is that restricted to the Bloch group proper the Borel regulator is injective.”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Extended classes retain Chern–Simons torsion

**Remember:** The torsion forgotten by volume can still change Chern–Simons.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57R20. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The extended complex Bloch group is the third integral homology of PSL(2, ℂ), the group of fractional linear transformations with the discrete topology. Passing to the ordinary Bloch group kills its subgroup ℚ/ℤ of finite-order elements.

**Problem.** The Cheeger–Chern–Simons class assigns an additive complex value modulo π²ℤ to each extended Bloch class. This assignment cannot descend to the ordinary Bloch group.

**How the definition helps.** Keeping the finite-order elements preserves a value that the ordinary quotient loses (our own). Neumann identifies the evaluation with a logarithmic dilogarithm formula. That formula takes the element of order two to π²/2 modulo π²ℤ. Any map through the ordinary group would send that element to zero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “There is a group homomorphism ĉ : H₃(♭PSL(2, ℂ), ℤ) → ℂ/π²ℤ”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Finite volume gives hyperbolic rigidity

**Remember:** Finite volume makes a complete hyperbolic three-manifold rigid.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds). arXiv math.GT. Level 4: research.

**Definition.** A complete hyperbolic manifold has a complete metric of constant sectional curvature −1. A finite-volume hyperbolic manifold also has finite total volume in that metric.

**Problem.** Complete connected hyperbolic three-manifolds without boundary and of finite volume are isometric if their fundamental groups are isomorphic. An isometry preserves all distances.

**How the definition helps.** Finite volume excludes the following family of complete metrics with the same fundamental group, in our own example. Identify points of hyperbolic three-space under the iterates of a translation along a fixed geodesic. Each quotient has infinite volume and fundamental group ℤ. The shortest closed geodesic has the translation length, so different lengths give different metrics up to isometry. Mostow–Prasad rigidity supplies the theorem for finite volume.

**nLab:** [Mostow rigidity theorem](https://ncatlab.org/nlab/show/Mostow+rigidity+theorem). It says: “then this structure is unique up to isometry, and in fact it is uniquely determined already by the fundamental group π₁(Σ).”

**Wikipedia:** [Mostow rigidity theorem](https://en.wikipedia.org/wiki/Mostow_rigidity_theorem). It says: “There is also a rich theory of deformation spaces of hyperbolic structures on infinite volume manifolds in three dimensions.”

**Sources:**

- [Gopal Prasad, Strong rigidity of Q-rank 1 lattices (1973).](https://doi.org/10.1007/bf01418789)

### Five-term relations absorb retriangulation

**Remember:** The two sides of the move are one five-term boundary.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** An ideal tetrahedron has four vertices on the sphere at infinity in hyperbolic space. Its ordered shape z is the fourth vertex after a fractional linear transformation sends the first three to 0, ∞, 1. Form the rational vector space on shape symbols \[z\]. For five distinct ordered vertices, set the alternating sum obtained by deleting each vertex to zero.

**Problem.** A bipyramid with five distinct vertices at infinity splits into either two or three tetrahedra. With the induced vertex orders and orientation signs, both subdivisions give the same sum in this space, the rational pre-Bloch group.

**How the definition helps.** The five-term relation equates the two sums without any volume calculation (our own). The geometric step identifies the two subdivisions with the two sides of the same signed boundary (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “The element ∑ᵢ\[zᵢ\] of ℬ(ℂ) is independent of the choice of ideal triangulation of M”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Flattenings linearize local edge equations

**Remember:** Keep the integer shifts and solve linear equations.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 19E99. arXiv math.GT, math.KT. Level 4: research.

**Definition.** An ideal tetrahedron has four vertices at infinity and a complex shape z determined by their cross-ratio. A flattening assigns logarithms of z, 1/(1−z), and 1−1/z to opposite edge pairs, allowing shifts by multiples of πi. Choose the shifts so the three values sum to zero.

**Problem.** Five distinct ordered points at infinity give five tetrahedra by deleting one point at a time. Flatten any three so their signed logarithms sum to zero at their common edge. Exactly one choice on the remaining two gives zero signed sum at every edge.

**How the definition helps.** Using shifted logarithms turns compatibility around each edge into a linear equation in integers (our own). Neumann solves these equations in Lemma 3.5. The single equation on the first three tetrahedra is sufficient, and the remaining equations determine both missing flattenings.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Holonomy classes scale under covers

**Remember:** A degree counts the copies of the fundamental class.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For a closed oriented hyperbolic three-manifold M, holonomy records how loops act by isometries of hyperbolic space. Push its fundamental class, the homology class representing its orientation, into the third integral homology of the discrete isometry group PSL(2, ℂ). Quotient by the elements of finite order to obtain the ordinary Bloch class β(M).

**Problem.** If N → M is an orientation-preserving covering of degree d between closed oriented hyperbolic three-manifolds with the lifted metric, then β(N) = dβ(M).

**How the definition helps.** Defining β by pushing forward the orientation class makes the covering formula follow from composition (our own). A covering of degree d sends the upstairs orientation class to d copies downstairs. The upstairs holonomy factors through the downstairs holonomy. The Bloch–Wigner theorem identifies the resulting quotient with the usual group defined by tetrahedron symbols (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Log shifts absorb Rogers monodromy

**Remember:** Carry the logarithm shifts with the shape.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 33B30. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The Rogers dilogarithm is R(z) = Li₂(z) + log(z)log(1−z)/2, where Li₂ continues the series ∑ zⁿ/n² from the unit disk. For z outside {0, 1}, record integer shifts p, q for log z and −log(1−z) in units of πi. On these branches use the corrected value R(z) + πi(p log(1−z) + q log z)/2 − π²/6.

**Problem.** The corrected value is single-valued modulo π²ℤ on Neumann’s logarithm cover of ℂ minus 0 and 1.

**How the definition helps.** Recording branch changes lets the corrected formula assign one value modulo π² to each point of the cover (our own). Going counterclockwise around zero increases p by two and leaves a discrepancy of −qπ². Going clockwise around one increases q by two and leaves a discrepancy of pπ². Neumann computes both changes by continuing the dilogarithm around the loops.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “This is called the Cheeger-Simons class.”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Mapping tori explain mutation invariance

**Remember:** The mapping torus changes only the torsion information.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** Holonomy represents loops of a closed oriented hyperbolic three-manifold by isometries in the discrete group PSL(2, ℂ). Send the manifold’s orientation class into the third integral homology of that group. Define its ordinary Bloch class by quotienting out all elements of finite order.

**Problem.** Cut along an essential embedded two-sided surface and reglue by a finite-order isometry of its neighborhood that preserves orientation and sides. This generalized mutation preserves the ordinary Bloch class.

**How the definition helps.** The quotient discards precisely the finite-order difference produced by the cut and regluing (our own). Neumann expresses that difference as the class of the mapping torus, formed by joining the ends of a surface cylinder using the symmetry. A finite cover is a surface times a circle, and its holonomy kills the circle. Its class therefore vanishes, so the original difference has finite order. The Bloch–Wigner theorem compares this homological quotient with the group defined by tetrahedron shapes (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Meridian flattenings remove filling corrections

**Remember:** Flatten the filled meridian before summing tetrahedra.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds). arXiv math.GT. Level 4: research.

**Definition.** Dehn filling replaces a torus end of a three-manifold by a solid torus. A flattening shifts tetrahedron shape logarithms by integer multiples of πi. Require zero signed log sums around edges and along closed normal paths near unfilled ends, and zero parity along every closed normal path. Such paths cross faces away from vertices, and parity counts the signed shifts modulo two.

**Problem.** At each filled end, also require zero log sum along normal loops that contract in the added solid torus. For Neumann’s degree-one triangulation of a hyperbolic filling, these flattenings exist. Their signed tetrahedron sum gives the filled manifold’s extended Bloch class.

**How the definition helps.** A meridian bounds a disk in the added torus, so the new condition absorbs the filling correction into the tetrahedron sum (our own). Transporting the old flattenings through filling leaves a meridian sum of 2πi and requires a separate term for the central geodesic. Neumann’s Theorem 14.7 constructs the adjusted flattenings and identifies their sum with the manifold’s class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Pseudo-Anosov gluing gives hyperbolic bundles

**Remember:** Pseudo-Anosov gluing gives a mapping torus a hyperbolic metric.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57K20. arXiv math.GT. Level 4: research.

**Definition.** A pseudo-Anosov surface map preserves two transverse measured foliations. These divide the surface into curves, with finitely many prong singularities, and measure arcs crossing the curves. The map multiplies one transverse measure by a constant greater than one and the other by its reciprocal.

**Problem.** For a closed oriented surface of genus at least two, the mapping torus of an orientation-preserving pseudo-Anosov map is hyperbolic. A mapping torus glues the two ends of the surface times an interval by the map.

**How the definition helps.** Pseudo-Anosov stretching excludes the identity gluing and its persistent closed curves, in our own explanation. Thurston’s hyperbolization theorem supplies a complete metric of curvature −1 on the mapping torus. In our own counterexample, identity gluing gives a surface times a circle. A noncontractible simple closed curve times the circle gives a subgroup ℤ² in its fundamental group. A closed hyperbolic three-manifold cannot have such a subgroup.

**Paper or page:** [Cusp geometry of fibered 3-manifolds](https://arxiv.org/abs/1108.5748v2). It says: “For every orientation-preserving, pseudo-Anosov homeomorphism φ : F → F, the mapping torus Mφ is a hyperbolic 3–manifold”

**Sources:** none listed. No primary source with a working link was found.

### Relative classes record cusp boundaries

**Remember:** The ideal end contributes a boundary in group homology.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 20J06. arXiv math.GT. Level 4: research.

**Definition.** Truncate the single torus end of a complete oriented hyperbolic three-manifold of finite volume to obtain a compact core with boundary. Its holonomy represents loops in the discrete isometry group G = PSL(2, ℂ). Choose coordinates so boundary loops act by translations in P = (ℂ, +). Map the core’s relative orientation class into H₃(G, P), the integral homology that permits boundaries in P.

**Problem.** For an oriented basis of torus loops with translations a and b, the boundary of this class is a ∧ b. In the figure-eight knot complement this boundary is nonzero, so the class cannot come from absolute homology H₃(G).

**How the definition helps.** Relative homology retains the torus boundary, which an absolute cycle must lose (our own). The boundary map takes the core to its oriented torus. In the second homology of the translation group this torus gives a ∧ b over ℤ. The two translations span a lattice in ℂ, so their exterior product is nonzero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)
- [Christian K. Zickert, The volume and Chern–Simons invariant of a representation (2009)](https://doi.org/10.1215/00127094-2009-058)

### The projective modulus fits mutation

**Remember:** An order-two mutation needs an order-two jump.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57R20. arXiv math.GT. Level 4: research.

**Definition.** For an oriented complete cusped hyperbolic three-manifold of finite volume, the projective Chern–Simons invariant takes real values modulo π². It comes from evaluating a characteristic class on the projective holonomy, the isometries representing loops in the manifold.

**Problem.** Cut along an essential embedded thrice-punctured sphere and reglue by the mutation involution, a symmetry of order two. The invariant changes by π²/2 modulo π². Neither lift of this change modulo 2π² has order two.

**How the definition helps.** The modulus π² allows the jump to have the same order as the mutation (our own). In the larger quotient, doubling either lift gives π² modulo 2π². Neumann proves the mutation formula and exhibits the jump using the two orientations of the Whitehead link complement.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “This is called the Cheeger-Simons class.”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Trace fields fix conjugate volumes

**Remember:** An embedding of the smaller field already fixes the answer.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19F27. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For a complete oriented cusped hyperbolic three-manifold of finite volume, holonomy represents loops by projective complex matrices. Their squared traces, computed using determinant-one representatives, generate the invariant trace field k over ℚ. Represent the rational Bloch invariant, the signed sum of tetrahedron shapes, over k.

**Problem.** Fix an embedding of k into ℂ. Every extension to a field containing k and the shapes gives the same signed volume for the embedded class.

**How the definition helps.** Using a class over k makes agreement of extensions immediate, since they agree on every element of k (our own). In the usual shape formula, individual tetrahedra can require a larger field. The descent theorem places their total class over k. Applying the same volume function to this common image gives the result (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “Moreover, the image of β(M) in ℬ(ℂ) ⊗ ℚ lies in ℬ(k(M)) ⊗ ℚ.”

**Sources:**

- [Dong Uk Lee, Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties (2025), Theorem 2.4.1](https://arxiv.org/abs/2502.11950v1)

### Transfer kills spurious two-torsion

**Remember:** Independent logarithm shifts should have no mixed difference.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** A flattened tetrahedron records its complex shape z and integers p, q that shift two shape logarithms by multiples of πi. The extended pre-Bloch group adds these symbols and imposes the five-tetrahedron relations with matching logarithms around each edge. The transfer relation allows two symbols with the same shape to exchange their second shifts without changing their sum.

**Problem.** In Neumann’s projective extended pre-Bloch group, omitting transfer adds a cyclic summand of order two. Its generator is \[z;1,1\] + \[z;0,0\] − \[z;1,0\] − \[z;0,1\].

**How the definition helps.** Exchanging the second shifts in the first two terms makes the displayed difference zero (our own). Without transfer, the product pq modulo two detects this difference. Neumann proves that it generates exactly the extra summand.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Trisections give every smooth 4-manifold a surface picture, unique up to stabilization

**Remember:** Three simple pieces and their spine hold the whole 4-manifold.

*Makes the theorem clean to state or prove.* MSC 57K40 (General topology of 4-manifolds), 57R65. arXiv math.GT. Level 4: research.

**Definition.** A trisection splits a closed 4-manifold X into three 4-dimensional 1-handlebodies, which are boundary connected sums of copies of S¹ × B³. Each pair of pieces meets in a 3-dimensional handlebody, and all three meet in one closed surface. The spine is the union of the three 3-dimensional handlebodies. Gay and Kirby introduced trisections as a 4-dimensional version of Heegaard splittings.

**Problem.** Describe every smooth closed 4-manifold by data on a surface, and give one move that relates any two descriptions.

**How the definition helps.** By Laudenbach and Poénaru, a 4-dimensional 1-handlebody can be glued on in essentially one way (our own remark). So the 4-manifold is fixed by the spine, and the spine is fixed by three families of curves on the central surface (our own remark). Existence and uniqueness up to stabilization are the 4-dimensional versions of the Heegaard and Reidemeister–Singer theorems. The hard work moves into their proofs, which Gay and Kirby did with Morse 2-functions (our own remark). Lambert-Cole works near the spine of the standard trisection of the complex projective plane to make a symplectic form Kähler near the 2-skeleton.

**Paper or page:** [Constructions of symplectic forms on 4-manifolds](https://arxiv.org/abs/2403.05512). It says: “Let X be a closed, smooth, oriented 4-manifold. Then X admits a trisection, any two trisections of X become ambient isotopic after sufficiently many stabilizations, and X is determined up to diffeomorphism by the spine of any trisection 𝒯.”

**Sources:**

- [P. Lambert-Cole, Constructions of symplectic forms on 4-manifolds, arXiv:2403.05512 (2024)](https://arxiv.org/abs/2403.05512)
- [D. Gay, R. Kirby, Trisecting 4-manifolds, Geom. Topol. 20 (2016) 3097-3132](https://doi.org/10.2140/gt.2016.20.3097)

### Perturbed Seiberg–Witten equations avoid reducible solutions

**Remember:** Perturb the equations so that solutions with zero spinor are impossible.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 58J05. arXiv math.GT, math.DG. Level 4: research.

**Definition.** The perturbed Seiberg–Witten equations add a self-dual 2-form η to the curvature equation. This equation says that the self-dual part F⁺ of the curvature of the connection A equals η plus a term in the spinor. Let Π be the subspace of self-dual forms that are F⁺ for some connection; its codimension is b₊(M), the number of positive eigenvalues of the intersection form on H²(M). One chooses η outside Π.

**Problem.** The Seiberg–Witten moduli space of a compact oriented 4-manifold should be a compact, smooth, oriented manifold. Then its fundamental class gives invariants that do not depend on choices.

**How the definition helps.** A good choice of η rules out the solutions at which the moduli space can be singular. The gauge group does not act freely at solutions with spinor ψ = 0, which are called reducible solutions, so the unperturbed moduli space can have singularities. When b₊(M) ≥ 1 and η is outside Π, a reducible solution would need F⁺ = η, which is impossible. So the perturbed moduli space avoids all singularities and carries a principal U(1)-bundle. When b₊(M) ≥ 2, any two good perturbations are joined by a path, so the invariant does not depend on η. When b₊ = 1, there is a wall-crossing problem. Compactness, and transversality for generic η, are separate theorems.

**nLab:** [Seiberg-Witten moduli space](https://ncatlab.org/nlab/show/Seiberg-Witten+moduli+space). It says: “If b₊(M) ≥ 1, then a perturbation η ∈ Ω₊²(M) ∖ Π ≠ ∅ forces solutions of the perturbed Seiberg-Witten equations with ψ = 0 to fulfill F<sub>A</sub>⁺ = η, which is not possible due to η ∉ Π.”

**Sources:**

- [Simon Donaldson, The Seiberg-Witten equations and 4-manifold topology, Bull. Amer. Math. Soc. 33 (1996) 45–70](https://doi.org/10.1090/S0273-0979-96-00625-8)

### Signed monopole counts survive metric changes

**Remember:** Two solutions can appear together without changing their signed sum.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 53C07. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Fix a spinᶜ structure of expected dimension zero on a closed connected oriented smooth four-manifold. This structure specifies the bundles for the Seiberg–Witten equations. A homology orientation chooses an orientation of the first real cohomology together with a maximal positive subspace of the intersection form. It assigns a sign to each isolated regular solution modulo changes of frame.

**Problem.** If the intersection form has at least two positive directions, the signed count is the same for every generic metric and perturbation.

**How the definition helps.** In our own proof, the signs make the two ends of every oriented interval cancel. Along a generic path between two choices, the solutions form a compact oriented one-manifold with boundary. Its oriented boundary represents the final count minus the initial count. Compactness, regularity and avoidance of solutions with extra symmetries are the analytic inputs.

**Wikipedia:** [Seiberg–Witten invariants](https://en.wikipedia.org/wiki/Seiberg%E2%80%93Witten_invariants). It says: “the number of elements of the moduli space counted with signs.”

**Sources:**

- [Edward Witten, Monopoles and four-manifolds](https://doi.org/10.4310/mrl.1994.v1.n6.a13)

### Smoothness diagonalizes definite intersection forms

**Remember:** A smooth closed four-manifold cannot carry the definite E₈ form.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 57R10. arXiv math.GT. Level 4: research.

**Definition.** A smooth 4-manifold has Euclidean charts with smooth changes of coordinates. A topological 4-manifold only requires continuous changes of coordinates with continuous inverses.

**Problem.** The intersection form counts signed intersections of two-dimensional homology classes. If a closed, oriented, simply connected smooth four-manifold has definite form, some integer basis makes it diagonal. Definite means all nonzero real classes have squares of the same sign.

**How the definition helps.** Smoothness excludes Freedman’s topological E₈ manifold, in our own comparison. Its positive definite form has determinant one and gives only even squares. A positive diagonal integer form of determinant one has only ones on its diagonal, so it represents one. Donaldson’s theorem supplies the diagonal basis in the smooth case through the study of differential equations on the manifold.

**Wikipedia:** [Donaldson's theorem](https://en.wikipedia.org/wiki/Donaldson%27s_theorem). It says: “a definite intersection form of a closed, oriented, smooth manifold of dimension 4 is diagonalizable”

**Sources:**

- [S. K. Donaldson, An application of gauge theory to four-dimensional topology (1983).](https://doi.org/10.4310/jdg/1214437665)

### Every continuum has a compact universal cover

**Remember:** Take the limit of all compact covers, and every continuum gets one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 54F15. arXiv math.AT, math.GN. Level 4: research.

**Definition.** A continuum is a compact, metrizable, connected space. A regular cover is a covering map that comes from the free action of a group. The compact universal cover of a continuum is the inverse limit of all continua that regularly cover it.

**Problem.** A classical universal cover exists only for spaces that are locally path connected and semilocally simply connected. Many continua, such as solenoids, fail these conditions.

**How the definition helps.** Because the cover is defined as a limit over all compact regular covers, it exists for every continuum almost by construction. The paper must still show that these covers form an inverse system and that the limit is metrizable. It then proves uniqueness among generalized universal covers by compactly simply connected continua. A continuum is compactly simply connected when the inverse limit of the deck groups of its finite covers is trivial. So most of the work moves into this uniqueness theorem. The classical universal cover can fail to exist for spaces like the Hawaiian earring (our own).

**Paper or page:** [Every Continuum has a Compact Universal Cover](https://arxiv.org/abs/2109.02152). It says: “We define the compact universal cover of a compact, metrizable connected space (i.e. a continuum) X to be the inverse limit of all continua that regularly cover X.”

**Sources:**

- [Conrad Plaut, Every Continuum has a Compact Universal Cover, arXiv:2109.02152 (2022)](https://arxiv.org/abs/2109.02152)

### Semicoverings form a class closed under composition and 2-out-of-3

**Remember:** Keep only the lifting that covering theory uses; drop even covering of neighbourhoods.

*Rules out counterexamples. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT, math.GN. Level 4: research.

**Definition.** Brazas defines a semicovering map as a local homeomorphism with continuous unique lifting of paths and of homotopies of paths. That means each path and each homotopy of paths lifts in exactly one way, and the lift depends continuously on it. Every covering map is a semicovering.

**Problem.** Suppose f = g ∘ h and two of f, g and h are semicoverings; then the third is a semicovering too. Brazas assumes that the middle space and the base are path connected. In particular, composites of semicoverings stay in the class.

**How the definition helps.** Semicoverings drop the even-covering condition but keep the lifting properties that classical covering theory uses. So a composite of two semicoverings is a semicovering straight from the definition. The even-covering condition says that each point of the base has a neighbourhood whose preimage is a disjoint union of copies of it. Covering maps are not closed under composition. Spanier's example composes a trivial covering with countably infinite fiber with a coproduct of coverings over a countable product of circles. The composite is not locally trivial. Brazas proves the 2-out-of-3 rule when the two lower spaces (the middle space and the base) are path connected. Over locally path-connected, semilocally simply connected bases, coverings are already well behaved.

**nLab:** [covering space](https://ncatlab.org/nlab/show/covering+space). It says: “Semicoverings satisfy the "2 out of 3 rule". I.e,, if f=g h and two of f,g,h are semicoverings , then so is the third. This is not true for covering maps.”

**Sources:**

- [J. Brazas, Semicoverings: a generalization of covering space theory, Homology Homotopy Appl. 14 (2012) 33–63, arXiv:1108.3021](https://arxiv.org/abs/1108.3021)
- [E. Spanier, Algebraic Topology, Springer (first published 1966; DOI record of the 1981 Springer printing), Chapter 2](https://doi.org/10.1007/978-1-4684-9322-1)

### Torsion refined by spin-c structures equals the Seiberg–Witten count

**Remember:** Remove the unit ambiguity, and torsion matches the gauge theory count.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31, 57R15. arXiv math.GT, math.SG. Level 4: research.

**Definition.** Milnor's torsion of a 3-manifold is defined only up to multiplication by a unit ± h, with h in the first homology. Turaev refined it with extra data, Euler structures, which correspond to spin-c structures. The refined torsion is a function on spin-c structures, with only a sign ambiguity left. A spin-c structure is a lift of the tangent bundle's structure group that the Seiberg–Witten equations need.

**Problem.** Compare the Seiberg–Witten invariant of a 3-manifold, which is a function on spin-c structures, with a classical torsion invariant.

**How the definition helps.** To equal a function on spin-c structures, the torsion must itself be such a function, which Turaev's refinement gives (our own explanation). Meng and Taubes showed that the Seiberg–Witten invariant equals Milnor torsion up to the unit ambiguity. Turaev then matched the two as functions on spin-c structures, up to one overall sign (our own attribution). The quoted theorem records this for the Euler characteristic of Wang's monopole Floer homology. The hard work moves into the gauge theory (our own remark).

**Paper or page:** [Monopoles and Landau-Ginzburg Models III: A Gluing Theorem](https://arxiv.org/abs/2010.04318). It says: “is independent of the auxiliary data (gY, gΣ; ω, λ, μ) and is equal to the Minor-Turaev torsion T(Y) up to an overall sign ambiguity.”

**Sources:**

- [D. Wang, Monopoles and Landau-Ginzburg Models III: A Gluing Theorem, arXiv:2010.04318 (2023)](https://arxiv.org/abs/2010.04318)
- [G. Meng, C. H. Taubes, SW = Milnor torsion, Math. Res. Lett. 3 (1996) 661-674](https://doi.org/10.4310/mrl.1996.v3.n5.a8)

### Tree-cotree curl solvers can terminate exactly on collapsible meshes

**Remember:** A collapse order is a successful elimination order.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 65N30, 05C85. arXiv math.NA, math.AT. Level 4: research.

**Definition.** A face of a mesh is free if it lies in exactly one remaining cell of one dimension higher. An elementary collapse removes a free face together with that cell. A mesh is collapsible if elementary collapses reduce it to a single vertex.

**Problem.** Tree-cotree methods find a vector potential, a field whose discrete curl is a given field, by starting from a spanning tree of mesh edges. Take a tetrahedral mesh in ℝ³ with no holes or cavities and a Lipschitz boundary. Some spanning tree makes the method terminate exactly when the mesh is collapsible.

**How the definition helps.** Collapsibility turns a question about the existence of a good starting tree into a known topological property of the mesh. The paper links both conditions to complete acyclic matchings, which pair edges with faces like steps of Gaussian elimination. A collapse sequence gives such a matching, and such a matching gives a tree for which the method terminates. This explains the known termination failures on meshes that are not collapsible.

**Paper or page:** [Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field](https://arxiv.org/abs/2111.04431v1). It says: “This fact gives a topological characterization of well-known termination problems of tree-cotree techniques.”

**Sources:**

- [Silvano Pitassi, Riccardo Ghiloni, Ruben Specogna, Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field, arXiv:2111.04431v1 (2021)](https://arxiv.org/abs/2111.04431v1)

### A string structure is defined as a trivialization of ½p₁

**Remember:** A string structure is a spin structure plus a chosen reason that ½p₁ vanishes.

*True by definition.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 53C27. arXiv math.AT, math.DG. Level 4: research.

**Definition.** The fractional Pontryagin class ½p₁ is a map BSpin(n) → B³U(1), so a degree-4 integral class whose double is the first Pontryagin class p₁. The classifying space BString(n) is the homotopy fiber of this map (the homotopy version of the preimage of a point). A string structure on a spin manifold X is a lift of its classifying map X → BSpin(n) to BString(n).

**Problem.** A spin manifold X has a string structure exactly when ½p₁(X) = 0. The string structures on X form the homotopy fiber of ½p₁ on X.

**How the definition helps.** BString is defined as a homotopy fiber, so the string structures on X form a homotopy fiber too. In detail, the mapping-space functor H(X, −), which takes maps from X, preserves homotopy limits. So the space of string structures on X is the homotopy fiber of ½p₁ on X. So a string structure exists if and only if the class ½p₁(X) is trivial. The real content is elsewhere. It lies in building concrete models of the String group or String 2-group, and in the smooth refinement ½𝐩₁ with connections.

**nLab:** [string structure](https://ncatlab.org/nlab/show/string+structure). It says: “The 2-groupoid of string structure on X is the homotopy fiber of ½𝐩₁<sup>X</sup>”

**Sources:**

- [Timothy Killingback, World-sheet anomalies and loop geometry, Nuclear Physics B 288 (1987) 578–588](https://doi.org/10.1016/0550-3213(87)90229-X)
- [Hisham Sati, Urs Schreiber, Jim Stasheff, Twisted differential String and Fivebrane structures, Comm. Math. Phys. 315 (2012), arXiv:0910.4001](https://arxiv.org/abs/0910.4001)

### In cohesive higher geometry every foliation is simple

**Remember:** Let the leaf space be a stack, and every foliation becomes a submersion.

*True by definition. Confidence: low.* MSC 57R30 (Foliations in differential topology; geometric theory), 18F40, 18N60. arXiv math.DG, math.CT. Level 4: research.

**Definition.** Differential cohesion is an axiomatic setting for differential geometry with higher stacks. In it, a foliation of X is a map X → X//𝒟 onto a higher stack, the leaf space. The map must be a 1-epimorphism (the higher-stack version of a surjection) and a formally smooth morphism (the analogue of a submersion). The leaves are the fibres over the points of the leaf space.

**Problem.** Every foliation should have a smooth leaf space with a submersion onto it. Simple foliations, whose leaves are the fibres of a submersion, have this. Classically the leaf space is typically not Hausdorff and not a manifold.

**How the definition helps.** A smooth higher stack can serve as the leaf space when a manifold cannot, and the quotient map onto it is always a submersion. Classically, only simple foliations come from a submersion onto a manifold. A general leaf space is a bad topological space, and this is one motivation for Connes's noncommutative geometry. The nLab offers this definition as a suggested axiomatization. If you take the quotient as a smooth higher stack, given by the foliation groupoid (a Lie groupoid whose orbits are the leaves), the quotient map is always a formally smooth epimorphism, so every foliation looks simple. For an étale foliation groupoid (one whose source and target maps are local diffeomorphisms), this definition gives back the traditional leaves. For a general Lie groupoid, the leaves can keep isotropy groups that are not discrete.

**nLab:** [foliation](https://ncatlab.org/nlab/show/foliation). It says: “Because the quotient map to the leaf space of a general foliation is always a submersion/formally smooth morphism, just not always onto a manifold, but onto a higher space.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos, 2013, arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Flexible sheaves are defined so that the h-principle follows

**Remember:** If restrictions lift homotopies, true and formal solutions agree up to homotopy.

*True by definition. Confidence: medium.* MSC 57R42 (Immersions in differential topology), 18F20. arXiv math.DG, math.GT. Level 4: research.

**Definition.** A sheaf here assigns to each open set a space of solutions, for example immersions. Gromov calls it flexible when restriction from a larger compact set to a smaller one is a fibration, a map with the homotopy lifting property. The h-principle says that the inclusion of true solutions into formal solutions is a weak homotopy equivalence. A formal solution satisfies only the pointwise, algebraic part of the condition.

**Problem.** Show that a geometric condition, such as being an immersion, has solutions whenever there is no obvious pointwise obstruction. Do this for many conditions at once.

**How the definition helps.** Flexibility isolates the one property that the extension argument needs, so the h-principle follows in one general theorem. The paper reads a flexible sheaf as a fibrant object of a model structure, an object that behaves well in an abstract homotopy theory. The work then moves into reducing concrete problems to flexible sheaves (our own). The main application is the paper's Theorem 0.9: open conditions that diffeomorphisms preserve satisfy the h-principle on open manifolds. An open manifold is one with no closed component. Immersions of an open manifold into another manifold are a special case (our own).

**Paper or page:** [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449), [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449). It says: “Any flexible sheaf on a polyhedron satisfies the parametric h-principle.”

**Sources:**

- [K. Yamazaki, Fibration structure for Gromov h-principle, arXiv:2102.03449 (2022)](https://arxiv.org/abs/2102.03449)
- [M. Gromov, Partial Differential Relations, Springer (1986)](https://doi.org/10.1007/978-3-662-02267-2)

### Counting bundles by groupoid cardinality makes Dijkgraaf–Witten values basepoint-free

**Remember:** Weight each bundle by its symmetries, and no basepoint is needed.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.QA, math.GT. Level 4: research.

**Definition.** For a finite group G and a closed manifold M, consider principal G-bundles on M, which here are G-covering spaces. Define Z(M) as the sum, over isomorphism classes of bundles P, of 1/\|Aut P\|. This sum is the groupoid cardinality of the groupoid of bundles. The based formula instead counts homomorphisms from π₁(M, x) into G and divides by \|G\|.

**Problem.** Let M be a connected closed manifold and G a finite group. The untwisted Dijkgraaf–Witten value of M does not depend on a basepoint. It equals \|Hom(π₁(M, x), G)\| / \|G\| for every basepoint x.

**How the definition helps.** The bundle count never mentions a basepoint, so independence is built in (our own explanation). The work moves into a dictionary between bundles and homomorphisms. Transport around loops turns a bundle into a homomorphism π₁(M, x) → G, and isomorphisms become conjugation by G (our own). The nLab formula \|X\|/\|G\| for the cardinality of an action groupoid then gives the based formula. Freed and Quinn build the finite-group theory from such groupoid counts (our own summary of the source).

**nLab:** [Dijkgraaf-Witten theory](https://ncatlab.org/nlab/show/Dijkgraaf-Witten+theory), [groupoid cardinality](https://ncatlab.org/nlab/show/groupoid+cardinality). It says: “then the cardinality of the action groupoid X//G is \|X\|/\|G\|.”

**Sources:**

- [Robbert Dijkgraaf and Edward Witten, Topological gauge theories and group cohomology (1990)](https://doi.org/10.1007/BF02096988)
- [Daniel Freed and Frank Quinn, Chern-Simons theory with finite gauge group (1993)](https://doi.org/10.1007/BF02096860)

### Derived sewing turns circles into loops

**Remember:** Glue the diagonal to itself to recover all the loops.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** Let X = Spec A be an affine derived symplectic stack, a space described by a commutative differential graded algebra with a symplectic form. In the correspondence theory of Theorem C, gluing means taking a derived fiber product. For affine spaces, its algebra of functions is a derived tensor product.

**Problem.** Use the oriented two-dimensional theory of Theorem C with point value X and the canonical trivialization of its Serre automorphism. This trivialization identifies the full rotation at a point with the identity. The circle value is Spec of the Hochschild chains of A.

**How the definition helps.** Derived gluing computes the intersection of the diagonal with itself and retains its higher homology. Our own affine calculation gives the derived tensor product of A with itself over A ⊗ A. This is the Hochschild chain complex. The construction of the oriented theory proves that the two arcs use those diagonal correspondences.

**Paper or page:** [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2). It says: “Spec HC(A)”

**Sources:**

- [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2)

### Gauge spans compose under sewing

**Remember:** Sew by matching boundary fields up to a chosen gauge isomorphism.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** Fix a finite group G. The gauge groupoid of a manifold has principal G-bundles as objects and bundle isomorphisms as arrows. A bordism gives a span, a pair of restriction maps from its gauge groupoid to those of its boundaries.

**Problem.** For oriented three-dimensional bordisms, the gauge groupoid of a gluing is equivalent to the homotopy pullback of the two bundle groupoids over their common boundary.

**How the definition helps.** The homotopy pullback records two bundles together with an isomorphism between their boundary restrictions. Its arrows are pairs of bundle isomorphisms respecting that match. Bundles glue along the chosen isomorphism, which proves the sewing rule. The cited theorem extends this rule to surfaces and bordisms with labeled defects.

**Paper or page:** [A geometrical description of untwisted Dijkgraaf-Witten TQFT with defects](https://arxiv.org/abs/2410.18049v1). It says: “to a stratified surface Σ with defect data its gauge groupoid”

**Sources:**

- [A geometrical description of untwisted Dijkgraaf-Witten TQFT with defects](https://arxiv.org/abs/2410.18049v1)

### Graded Frobenius structures survive suspension

**Remember:** A degree shift lowers the product degree and raises the coproduct degree.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** In Clivio’s planar construction, a (c,d)-graded Frobenius algebra is a monoidal representation of the graded planar graph bordism category pGCob(c,d). Such a representation assigns operations to graphs and respects disjoint union and gluing, including the signs specified by that category. The product has degree c and the coproduct has degree d.

**Problem.** Let A be a graded abelian group and let ΣA raise every degree by one. Suspension bijects Frobenius structures of degrees (c,d) on A with structures of degrees (c−1,d+1) on ΣA.

**How the definition helps.** The definition lets each operation keep the degree forced by its number of inputs and outputs. Our own check adds one degree per output and subtracts one per input. The cited theorem checks that the induced sign changes also preserve all the relations.

**Paper or page:** [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2). It says: “Giving a (c,d)-graded (commutative or symmetric) Frobenius algebra structure on A := F(∗) ∈ ℤMod• is equivalent to giving a (c−1,d+1)-graded (commutative or symmetric) Frobenius algebra structure on ΣA.”

**Sources:**

- [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2)

### Homotopy fixed points retain orientation choices

**Remember:** A point fixed up to equivalence still needs a choice of how it is fixed.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** Let the rotation group SO(n) act on a space X. A homotopy fixed point is an equivariant map from a contractible free SO(n)-space to X.

**Problem.** Let X be the space of fully dualizable objects in a symmetric monoidal (∞,n)-category. These objects have duals and the successive adjoints needed to evaluate bordisms down to points. Evaluation at a point identifies fully extended oriented n-dimensional field theories with homotopy fixed points for the framing rotation action on X.

**How the definition helps.** A homotopy fixed point records how a point value stays compatible with every change of oriented frame. The oriented cobordism hypothesis proves that these choices suffice to reconstruct the theory on every bordism.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “a homotopy fixed point is not just a property. It is additional structure.”

**Sources:**

- [Lurie, On the Classification of Topological Field Theories](https://people.math.harvard.edu/~lurie/papers/cobordism.pdf)

### Inverting bordisms exposes partition characters

**Remember:** A theory that already inverts every bordism factors through the completion.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** A bordism category has closed manifolds as objects and manifolds between them as arrows. Its groupoid completion formally makes every arrow invertible. An invertible complex field theory assigns a line to each object and an isomorphism to each arrow.

**Problem.** Every such theory factors through the groupoid completion. On the component containing the empty manifold, a character of its automorphism group determines the underlying functor up to isomorphism. For the structured bordism categories of the cited theorem, that group is the cut-and-paste group.

**How the definition helps.** Groupoid completion replaces a list of sewing maps by invertible arrows with a universal factorization property. Our own explanation chooses paths from the empty manifold to all objects in its component. The remaining data form an action on a line, hence a homomorphism to the nonzero complex numbers. The cited theorem identifies the automorphism group. Reconstructing the full theory also requires its tensor structure.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “π₁(‖Bordξₙ₋₁,ₙ‖) ≅ π₁(‖N Cobξₙ₋₁,ₙ‖) ≅ SKK(Cobξₙ₋₁,ₙ) = SKKξₙ.”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Lines turn sewing into scalar multiplication

**Remember:** Gluing four line maps in either pairing gives the same product.

*Rules out counterexamples.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** An invertible complex topological field theory assigns lines to boundaries and invertible linear maps to bordisms, the manifolds joining boundaries. The cut-and-paste group adds closed manifolds by disjoint union. Its exchange relation uses two incoming pieces and two outgoing pieces with the same identified boundary.

**Problem.** The product of the two closed values stays unchanged when the incoming pieces exchange outgoing partners. Thus closed values define a homomorphism from the cut-and-paste group to the nonzero complex numbers.

**How the definition helps.** The boundary line makes the exchange relation an identity between products of scalars. In our own calculation, choose a basis and write the incoming vectors as a,b and the outgoing functionals as c,d. The products (ca)(db) and (da)(cb) agree. The cited proposition proves that these exchanges generate the required relations.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “N₁ ∪ N₁′ + N₂ ∪ N₂′ ∼ N₁ ∪ N₂′ + N₂ ∪ N₁′”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Maslov weights lift projective actions

**Remember:** Record the gluing correction as part of the cylinder.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.GT, math.QA. Level 4: research.

**Definition.** Fix a closed oriented surface and a maximal subspace L of its real first homology on which the intersection pairing vanishes. A weighted mapping cylinder records a mapping class f, an orientation-preserving diffeomorphism up to isotopy, and an integer. Composing (f,m) after (g,n) gives (fg,m+n+μ(L,fL,fgL)). Here μ is the Maslov index, the signature of the form on three subspaces in the Gilmer–Masbaum convention.

**Problem.** For the surface theories of Gilmer and Masbaum, the operators assigned to weighted mapping cylinders form a linear representation of the extended mapping class group.

**How the definition helps.** Including the sewing correction in the group law turns projective composition into ordinary composition. The cocycle identity says that either grouping of three cylinders gives the same weight. The field-theory sewing theorem identifies the corresponding scalar factor in the operators.

**Paper or page:** [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3). It says: “The Maslov index is a 2-cocycle”

**Sources:**

- [Gilmer and Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT](https://doi.org/10.1515/form.2011.143)
- [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3)

### Ordered intervals allow noncommutative products

**Remember:** Without a swap of inputs, a pair of pants need not commute.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** A planar open bordism is a surface drawn between ordered lists of intervals, with boundaries allowed between the input and output intervals. A Frobenius algebra has a unital associative product and a counital coassociative coproduct. Its coproduct commutes with multiplication on the left and on the right.

**Problem.** For a monoidal target C, evaluation on one interval gives an equivalence between monoidal functors from planar open bordisms and Frobenius algebras in C.

**How the definition helps.** Planar gluing keeps the order of inputs, so the classification can include products with ab different from ba. Our own example is the algebra of complex two-by-two matrices with trace pairing given by tracing the product. The proof identifies generators and relations for the planar surfaces.

**Paper or page:** [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2). It says: “Funᵐᵒⁿ(Cob₂ᵖˡᵃⁿᵃʳ,C) → Frob(C)”

**Sources:**

- [Clivio, Graded Frobenius Algebras](https://academic.oup.com/qjmath/article-abstract/76/4/1105/8258596)

### Radical quotients make sewing nondegenerate

**Remember:** Two states agree when every possible gluing gives the same answer.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** Fix a scalar for each diffeomorphism class of closed oriented n-manifolds. For each boundary, form free vector spaces on bordisms into it from the empty boundary and out of it to the empty boundary. Pair basis elements by evaluating the closed manifold obtained by gluing. On each side, quotient by the vectors pairing to zero with the whole opposite space.

**Problem.** The induced pairing has zero left and right radicals. Gluing another bordism gives a well-defined linear map between the quotients.

**How the definition helps.** Taking the quotient builds nondegeneracy into the state spaces. The free spaces can contain distinct combinations with identical evaluations against every test. Our own sewing check uses associativity of gluing to move a bordism across the pairing. This makes the induced maps well defined. A full field theory also requires compatibility with tensor products.

**Paper or page:** [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1). It says: “is nondegenerate.”

**Sources:**

- [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1)
