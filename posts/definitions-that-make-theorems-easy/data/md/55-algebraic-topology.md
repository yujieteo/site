### Angle-lift winding numbers force complex polynomials to have roots

**Remember:** Count the net turns of the angle; whole turns cannot jump.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a loop that avoids 0 is the net number of turns made by a continuous choice of its angle. It is an integer, so it cannot change while the loop deforms without touching 0.

**Problem.** Every nonconstant complex polynomial has a complex root.

**How the definition helps.** Suppose p has no root, and let the radius R of a circle shrink from large to 0 (our own). The image of the circle never touches 0, so its winding number stays fixed. For large R the leading term gives winding number equal to the degree, but at R = 0 the constant loop gives 0 (our own).

**Wikipedia:** [Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra), [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “Now changing R continuously will deform the loop continuously. At some R the winding number must change. But that can only happen if the curve P(R) includes the origin (0,0) for some R.”

**Sources:** none listed. No primary source with a working link was found.

### Angle-lift winding numbers make Rouché’s zero counts agree

**Remember:** A dog on a short leash circles the tree equally often.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a loop that avoids 0 is the net number of turns made by a continuous choice of its angle. It is an integer, so it stays fixed while the loop deforms without touching 0.

**Problem.** Let f and g be holomorphic on an open set containing a simple closed piecewise smooth curve C and its interior. If \|g\| &lt; \|f\| on C, then f and f + g have the same number of zeros inside C, counted with multiplicity.

**How the definition helps.** The bound \|g\| &lt; \|f\| keeps f + tg nonzero on C for 0 ≤ t ≤ 1 (our own). So the images of C under f and f + g have the same winding number around 0 (our own). The argument principle says that this winding number counts the zeros inside C with multiplicity (our own).

**Wikipedia:** [Rouché's theorem](https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem). It says: “then the person and the dog go around the tree the same number of times.”

**Paper or page:** [Rouché's Theorem](https://proofwiki.org/wiki/Rouché's_Theorem). It says: “Let \|g(z)\| &lt; \|f(z)\| on γ. Then f and f + g have the same number of zeroes in D counted up to multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Defining winding number by lifting the angle makes it homotopy invariant

**Remember:** A continuous integer cannot jump, so a homotopy cannot change it.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** For a loop γ avoiding a point a, choose a continuous angle s(t) of γ(t) − a, measured in turns. The winding number about a is s(1) − s(0). It is an integer because the loop is closed, and two choices of angle differ by a constant, so it does not depend on the choice (our own).

**Problem.** If two loops are homotopic through loops that avoid a, they have the same winding number about a.

**How the definition helps.** The covering homotopy theorem lifts the angle continuously over the whole homotopy (our own). The winding number then depends continuously on the homotopy parameter and takes only integer values, so it is constant (our own).

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “wind(γ,a) = s(1) − s(0)”

**Sources:** none listed. No primary source with a working link was found.

### Homology degree turns odd sphere maps into a coincidence test

**Remember:** An odd equator map has odd degree, but an extension forces zero.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 55M20, 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The degree of a continuous map from a sphere to itself is the integer by which it multiplies the top reduced homology group ℤ. A sphere map that extends over the ball has degree zero, because the ball has zero reduced homology (our own).

**Problem.** Every continuous map from the n-sphere to Euclidean n-space agrees at some pair of opposite points when n ≥ 1. Equivalently, no continuous odd map takes the n-sphere into the sphere one dimension lower.

**How the definition helps.** If f(x) ≠ f(−x) for every x, then (f(x) − f(−x)) / \|f(x) − f(−x)\| is an odd map to the sphere one dimension lower (our own). Its restriction to the equator extends over a hemisphere, so it has degree zero (our own). The odd-degree theorem says that this odd restriction has odd degree, a contradiction.

**Wikipedia:** [Borsuk–Ulam theorem](https://en.wikipedia.org/wiki/Borsuk%E2%80%93Ulam_theorem). It says: “any odd map Sⁿ⁻¹ → Sⁿ⁻¹ has odd degree”

**Sources:**

- [Karol Borsuk, Drei Sätze über die n-dimensionale euklidische Sphäre, Fundamenta Mathematicae 20 (1933), 177–190](https://doi.org/10.4064/fm-20-1-177-190)

### Lifting the angle makes winding number an integer

**Remember:** A closed path ends a whole number of turns from its starting angle.

*True by definition.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** For a closed path γ in ℂ avoiding a, choose a continuous angle s(t) of γ(t) − a, measured in turns. Its winding number about a is s(1) − s(0), where s(1) and s(0) name the same direction because γ(1) = γ(0).

**Problem.** The winding number of a closed path around a point is an integer.

**How the definition helps.** Two angles of the same direction differ by a whole number of turns, so s(1) − s(0) is an integer. The only work is the existence of a continuous angle, which is path lifting for the covering of the circle by ℝ (our own).

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “all the fibers of p are of the form ρ₀ × (s₀ + ℤ) (so the above expression does not depend on the choice of the starting point). It is an integer because the path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Parity gives a degree even without orientations

**Remember:** Count preimages only up to parity, so no signs are needed.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Take a smooth map from a compact manifold to a connected manifold of the same dimension, both without boundary. Its degree modulo two is the parity of the number of preimages of a regular value, a point at whose preimages the derivative is invertible. The count uses no signs, so it needs no orientation.

**Problem.** The degree modulo two is independent of the regular value and stays the same under smooth homotopy. It exists even when the manifolds have no orientation.

**How the definition helps.** Near a regular value of both end maps, Sard’s theorem gives one also regular for the homotopy, with the same parities by local constancy (our own). Its preimage is a compact curve whose arcs each have two ends, so both end maps give the same parity (our own). An isotopy of the target moving one regular value to another gives independence of the value (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “the manifolds need not be orientable”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Signed preimages make boundary extensions have degree zero

**Remember:** Count preimages with signs, and an arc's two ends cancel.

*True by definition.* MSC 55M25 (Degree, winding number), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Take a smooth map between oriented manifolds of the same dimension without boundary, with compact source and connected target. Its degree counts the preimages of a regular value, each with sign +1 if the derivative preserves orientation and −1 if it reverses it.

**Problem.** Let W be a compact oriented manifold, and let N be a connected oriented manifold without boundary with dim N = dim ∂W. A smooth map from ∂W to N that extends smoothly over W has degree zero.

**How the definition helps.** Over a value regular for the map and its extension, the preimage under the extension is a compact oriented curve in W (our own). Each arc meets ∂W in two points of opposite sign, and closed loops do not meet ∂W, so the signed count is zero (our own). Sard’s theorem supplies such a regular value (our own).

**Paper or page:** [Extendability Theorem for Intersection Numbers/Corollary](https://proofwiki.org/wiki/Extendability_Theorem_for_Intersection_Numbers/Corollary). It says: “deg f = 0”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Augmentation makes one suspension formula work in all degrees

**Remember:** Reduced homology gives a point nothing, so cones vanish in every degree.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Reduced homology extends the singular chain complex by ℤ in degree −1, sending each point to 1. Then every contractible space, a cone included, has zero reduced homology in every degree (our own). The suspension of X collapses each end of X × \[0, 1\] to its own point, so it is two cones glued along X.

**Problem.** For a nonempty space, suspension shifts reduced homology from degree n to n + 1 for every n ≥ 0. So a sphere has reduced homology ℤ in its dimension and zero in other nonnegative degrees.

**How the definition helps.** The complements of the two tips are open cones with zero reduced homology, and their overlap deforms onto X (our own). The Mayer–Vietoris sequence in reduced homology then gives the shift, with no exception in degree zero (our own). Starting with two points gives the sphere calculation (our own).

**Wikipedia:** [Mayer–Vietoris sequence](https://en.wikipedia.org/wiki/Mayer%E2%80%93Vietoris_sequence). It says: “with A and B contractible. Also, the intersection A ∩ B is homotopy equivalent to Y.”

**Sources:** none listed. No primary source with a working link was found.

### Cell boundaries turn surface homology into signed edge counts

**Remember:** Read the polygon's edge word, with signs for direction.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 57K20. arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a surface built from one polygon with paired edges and one vertex, cellular chains have one integer generator per edge and one for the face. Each edge has boundary zero (our own), and the face's boundary adds each edge once per traversal, with sign −1 when it is traversed backwards.

**Problem.** The first integral homology of a connected sum of g ≥ 1 tori is free abelian of rank 2g. For k ≥ 1 projective planes, the connected sum has first homology ℤᵏ⁻¹ ⊕ ℤ/2ℤ.

**How the definition helps.** By the cellular homology theorem, H₁ is the free abelian group on the edges modulo the face's boundary (our own). For the torus sum each edge occurs once in each direction, so the boundary is zero and H₁ = ℤ²ᵍ (our own). For the projective plane sum the boundary is twice the sum of all edges, and that sum can replace one generator (our own).

**nLab:** [cellular homology](https://ncatlab.org/nlab/show/cellular+homology). It says: “Cellular homology is a very efficient tool for computing the ordinary homology groups of topological spaces which are CW complexes”

**Sources:** none listed. No primary source with a working link was found.

### Chain homotopy makes homotopic maps agree on homology

**Remember:** On a cycle the difference is a boundary.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Two chain maps f and g are chain homotopic if f − g = ∂P + P∂ for some maps P that raise degree by one. On a cycle z this gives f(z) − g(z) = ∂(Pz), a boundary (our own).

**Problem.** Homotopic continuous maps induce the same homomorphism on singular homology. In particular homotopy equivalences induce isomorphisms.

**How the definition helps.** Homology identifies cycles that differ by a boundary, so chain homotopic maps agree on homology (our own). The prism construction turns a homotopy of continuous maps into a chain homotopy of the induced singular chain maps (our own).

**Paper or page:** [Homotopic Chain Maps Induce Equal Maps on Homology](https://proofwiki.org/wiki/Homotopic_Chain_Maps_Induce_Equal_Maps_on_Homology). It says: “Then f and g induce equal maps on homology.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous simplices let every continuous map act on homology

**Remember:** Compose each simplex with the map and keep its domain.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A singular simplex in X is any continuous map from a standard simplex into X, with no condition that it be injective or fit a triangulation. So composing it with a continuous map from X to Y always gives a singular simplex in Y (our own).

**Problem.** Every continuous map induces homomorphisms on singular homology. The identity induces the identity, and composition induces composition.

**How the definition helps.** Composition with a map commutes with taking faces, so it is a chain map and acts on homology (our own). Composing with the identity, or with two maps in turn, gives the identity and the composite (our own).

**Paper or page:** [Homomorphism of Chain Complexes induces Homomorphism of Homology](https://proofwiki.org/wiki/Homomorphism_of_Chain_Complexes_induces_Homomorphism_of_Homology). It says: “Then for every n, f induces a morphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative chains as a quotient makes the exact sequence automatic

**Remember:** A short exact sequence of chains gives a long exact sequence.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a subspace A of X, the relative singular chain complex C•(X, A) is the quotient C•(X)/C•(A), with boundary induced from X, and its homology is Hₙ(X, A). So 0 → C•(A) → C•(X) → C•(X, A) → 0 is a short exact sequence of chain complexes.

**Problem.** Every pair (X, A) has a natural long exact sequence … → Hₙ(A) → Hₙ(X) → Hₙ(X, A) → Hₙ₋₁(A) → …

**How the definition helps.** The zigzag lemma turns every short exact sequence of chain complexes into a natural long exact homology sequence (our own).

**nLab:** [relative homology](https://ncatlab.org/nlab/show/relative+homology). It says: “The cokernel of this inclusion, hence the quotient C•(X)/C•(A) of C•(X) by the image of C•(A) under the inclusion”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.1](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Local homology makes dimension visible at one point

**Remember:** Remove a point to expose the dimension.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** The local homology of X at a point x is the relative homology Hₙ(X, X ∖ {x}). It sees only the space near x (our own), because chains that avoid x count as zero.

**Problem.** Homeomorphic nonempty open subsets of Euclidean spaces have the same dimension, which local homology detects at any point.

**How the definition helps.** At a point of an open subset of ℝⁿ, excision reduces local homology to a ball, where it is ℤ in degree n and zero elsewhere (our own). A homeomorphism preserves local homology, so it preserves n (our own).

**Wikipedia:** [Excision theorem](https://en.wikipedia.org/wiki/Excision_theorem). It says: “This follows from the excision theorem, the long exact sequence for the pair”

**Sources:** none listed. No primary source with a working link was found.

### Opposite edge directions turn a surface orientation into a cycle

**Remember:** Orient neighbors oppositely along each shared edge to cancel it.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 57K20. arXiv math.AT. Level 2: later undergraduate.

**Definition.** An orientation of a triangulated surface chooses a direction around each triangle so that two triangles sharing an edge run along it in opposite directions. Then the sum of all the oriented triangles has zero boundary (our own).

**Problem.** For a connected closed triangulated surface, the second integral homology group is ℤ if the surface is orientable and zero otherwise. Here closed means compact and without boundary.

**How the definition helps.** Compatible orientations make the sum of all triangles a cycle (our own). In any 2-cycle the two triangles at an edge have coefficients of equal size, so by connectedness a nonzero cycle is a multiple of such a sum (our own). There are no 3-chains, so H₂ is the group of 2-cycles (our own).

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “neighboring edges are pointing in the opposite direction, then this determines an orientation of the surface.”

**Sources:** none listed. No primary source with a working link was found.

### Small singular chains make excision a quotient identity

**Remember:** Keep simplices in one open set so the quotient cancels the other.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For open sets U and V covering X, a singular chain is small if each of its simplices lies in U or in V. Modulo chains in U, a small chain keeps only its simplices in V but not in U ∩ V (our own). Those form exactly a chain of the pair (V, U ∩ V) (our own).

**Problem.** Suppose open sets U and V cover X. Then the inclusion of (V, U ∩ V) into (X, U) induces isomorphisms on relative homology.

**How the definition helps.** On small chains the two relative chain complexes are equal, since both have the simplices in V but not in U as a basis (our own). Repeated subdivision makes every chain small, and a chain homotopy shows that this does not change homology (our own).

**Wikipedia:** [Excision theorem](https://en.wikipedia.org/wiki/Excision_theorem). It says: “subdivide the simplices in a relative cycle”

**Sources:** none listed. No primary source with a working link was found.

### Sliding onto a subspace gives a homotopy equivalence

**Remember:** A deformation retraction gives a way back and a way to slide back.

*Rules out counterexamples.* MSC 55P10 (Homotopy equivalences in algebraic topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A strong deformation retraction of X onto a subspace A is a continuous motion that slides every point of X into A while every point of A stays fixed. Its final map is a retraction, a map onto A that fixes A.

**Problem.** Including a strong deformation retract gives a homotopy equivalence, a map with an inverse up to continuous deformation. It induces an isomorphism on fundamental groups at each base point in the subspace.

**How the definition helps.** The retraction after the inclusion is the identity of A, and the inclusion after the retraction moves to the identity of X by the motion (our own). An ordinary retraction is not enough: a circle retracts onto a point but has nontrivial fundamental group (our own). The motion fixes A, so the homotopy is based at each point of A (our own).

**nLab:** [deformation retract](https://ncatlab.org/nlab/show/deformation+retract). It says: “Hence a deformation retract is a (left) homotopy equivalence where one of the two homotopies occuring is in fact an identity.”

**Sources:** none listed. No primary source with a working link was found.

### The mapping cylinder replaces any map by an inclusion

**Remember:** Glue the bottom by the map and leave the top alone.

*True by definition.* MSC 55P10 (Homotopy equivalences in algebraic topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** The mapping cylinder of f from X to Y glues the bottom end of X × \[0, 1\] to Y by f. Its top end stays a free copy of X. Sliding each vertical segment down to its bottom retracts the cylinder onto Y (our own).

**Problem.** Every continuous map factors through its mapping cylinder as an inclusion followed by a retraction onto its target.

**How the definition helps.** Including X as the top and then sliding down gives f, so f factors as an inclusion followed by a retraction (our own). The slide fixes Y throughout, so the retraction is a homotopy equivalence (our own).

**nLab:** [mapping cylinder](https://ncatlab.org/nlab/show/mapping+cylinder). It says: “In particular every continuous function factors as a map into its mapping cylinder followed by a deformation retraction.”

**Sources:** none listed. No primary source with a working link was found.

### A group pushout makes disk attachments impose relations

**Remember:** Gluing a disk kills its boundary loop.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** The pushout of groups G and H over a group K is the free product of G and H, whose elements are words in both. It adds one relation for each element of K: its image in G equals its image in H.

**Problem.** Attaching a disk to a path-connected cell complex adds exactly one relation to its fundamental group. The loop along the disk boundary becomes the identity.

**How the definition helps.** Van Kampen's theorem says that the new fundamental group is the pushout of the old group and the disk's group over the group of a circle (our own). The disk's group is trivial, so the only effect is the relation that kills the boundary loop (our own).

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “is a pushout square in Grp.”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing a spanning tree makes a graph group free

**Remember:** Collapse the routes between vertices and keep one loop per leftover edge.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A spanning tree of a connected graph is a connected subgraph without cycles that contains every vertex. It is contractible, and collapsing it to a point leaves a wedge of circles, one for each edge outside the tree (our own).

**Problem.** A finite connected graph has free fundamental group with one generator per edge outside a spanning tree. For E edges and V vertices its rank is E − V + 1.

**How the definition helps.** Collapsing a contractible subcomplex keeps the homotopy type, and a wedge of circles has free fundamental group with one generator per circle (our own). A tree on V vertices has V − 1 edges, so E − V + 1 edges remain (our own).

**Wikipedia:** [Fundamental group](https://en.wikipedia.org/wiki/Fundamental_group). It says: “the free product of the individual fundamental groups”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing one end turns null homotopies into extensions

**Remember:** A homotopy to a constant can collapse its last time slice.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 55P10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The cone on X is X × \[0, 1\] with the top end X × {1} collapsed to one point, and its base is X × {0}. A map on the cone is the same as a deformation of its base map that ends at a constant (our own).

**Problem.** A continuous map from a nonempty space deforms to a constant exactly when it extends continuously over the cone. For a sphere, this means it extends over the ball.

**How the definition helps.** Reading the cone's second coordinate as time matches null homotopies with extensions over the cone, and the quotient topology makes both directions continuous (our own). The cone on a sphere is a ball (our own).

**nLab:** [cone](https://ncatlab.org/nlab/show/cone). It says: “is the space obtained by taking the X-shaped cylinder X × I, where I may be an interval object, and squashing one end down to a point.”

**Sources:** none listed. No primary source with a working link was found.

### Fixing loop endpoints lets concatenation define a group

**Remember:** Hold the endpoints still so loops can multiply.

*Rules out counterexamples.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A based homotopy of loops at a point x deforms one loop into another while both ends stay at x throughout. So two such deformations can run end to end at every moment, and joining loops respects them (our own).

**Problem.** Based homotopy classes of loops form the fundamental group under concatenation, which follows one loop after another.

**How the definition helps.** Fixed ends make concatenation well defined on based classes (our own). With a moving base point, b and aba⁻¹ on a wedge of two circles become equal, yet b·b and aba⁻¹·b do not (our own). The group laws follow by changing speed and cancelling a loop with its reverse (our own).

**Paper or page:** [Homotopic Paths Implies Homotopic Composition](https://proofwiki.org/wiki/Homotopic_Paths_Implies_Homotopic_Composition). It says: “Then the concatenated paths f₁ ∗ g₁ and f₂ ∗ g₂ are homotopic.”

**Sources:** none listed. No primary source with a working link was found.

### Groupoids reveal every path component

**Remember:** Keep paths between every pair of points, and components appear.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 01A60. arXiv math.AT, math.HO. Level 2: later undergraduate.

**Definition.** The fundamental groupoid of X has every point of X as an object. Its arrows from x to y are the paths from x to y, up to deformations fixing both ends.

**Problem.** The components of the fundamental groupoid are exactly the path components of the space.

**How the definition helps.** Two points lie in one component of the groupoid exactly when an arrow joins them, which means exactly when a path joins them.

**nLab:** [fundamental groupoid](https://ncatlab.org/nlab/show/fundamental+groupoid). It says: “The set of connected components of Π₁(X) is precisely the set Π₀(X) of path-components of X.”

**Sources:**

- [Ronald Brown, Groupoids and Van Kampen’s Theorem (1967)](https://doi.org/10.1112/plms/s3-17.3.385)

### Pointwise loop multiplication makes a group’s fundamental group abelian

**Remember:** Multiply at the same time to see why loop order does not matter.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** In a topological group, loops at the identity can be multiplied pointwise, (αβ)(t) = α(t)β(t), as well as concatenated. The pointwise product of two concatenations is the concatenation of the pointwise products, and on homotopy classes both operations have the constant class as unit (our own).

**Problem.** The fundamental group of a topological group at its identity is abelian.

**How the definition helps.** By the Eckmann–Hilton argument, two operations with a common unit that satisfy this interchange law agree and are commutative.

**nLab:** [Eckmann-Hilton argument](https://ncatlab.org/nlab/show/Eckmann-Hilton+argument). It says: “then the two structures actually coincide and the resulting monoid is commutative.”

**Sources:** none listed. No primary source with a working link was found.

### Van Kampen's theorem works for a set of base points

**Remember:** Choose base points in every component of each piece and overlap.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 18B40, 57M05. arXiv math.AT, math.CT. Level 2: later undergraduate.

**Definition.** For a set A of points of X, the fundamental groupoid Π₁(X, A) keeps only the paths that start and end in A, up to homotopy fixing both ends. With points of A in every component, one groupoid can describe a space whose pieces overlap in several components.

**Problem.** Suppose X = U ∪ V for open U and V, and A meets every path component of U, V and U ∩ V. Writing G(W) = Π₁(W, A ∩ W), the pushout of G(U) and G(V) over G(U ∩ V) is G(X).

**How the definition helps.** A single base point cannot reach every component of a disconnected overlap U ∩ V, but a set of base points can (our own). The groupoid van Kampen theorem gives the pushout when A meets every path component of U, V and U ∩ V (our own).

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “Note that the version of the theorem for fundamental groups does not apply, since U ∩ V is not path-connected.”

**Sources:**

- [Ronald Brown, Groupoids and van Kampen's theorem, Proc. London Math. Soc. (3) 17 (1967) 385–401](https://doi.org/10.1112/plms/s3-17.3.385)
- [Ronald Brown, A. Razak Salleh, A van Kampen theorem for unions of non-connected spaces, Archiv der Mathematik 42 (1984) 85–88](https://doi.org/10.1007/BF01198133)

### Semi-locally simply connected spaces have a full classification of covering spaces

**Remember:** Small loops need not shrink inside U, only somewhere in X.

*Rules out counterexamples.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A space X is semi-locally simply connected if each point x has a neighborhood U whose loops at x all shrink to a point in X, possibly leaving U. So small loops act trivially in any action of the fundamental groupoid (our own).

**Problem.** Let X be locally path-connected and semi-locally simply connected. Then covering spaces of X are the same as actions of the fundamental groupoid of X on sets.

**How the definition helps.** Small loops acting trivially is what lets a set with a groupoid action be rebuilt into a covering with evenly covered neighborhoods (our own). The Hawaiian earring fails the condition, since every neighborhood of its wedge point contains a whole essential circle (our own).

**nLab:** [semi-locally simply-connected topological space](https://ncatlab.org/nlab/show/semi-locally+simply-connected+topological+space), [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces), [Hawaiian earring space](https://ncatlab.org/nlab/show/Hawaiian+earring+space). It says: “Semi-local simple connectedness is the crucial condition needed to have a good theory of covering spaces”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics (2008), Thm. 3.3.2](https://doi.org/10.4171/048)
- [Jesper M. Møller, The fundamental group and covering spaces (2011), arXiv:1106.5650](https://arxiv.org/abs/1106.5650)

### A simplicial approximation supplies a straight line homotopy

**Remember:** The star condition keeps each straight segment inside a simplex.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A simplicial approximation to a continuous map f sends vertices to vertices and extends linearly over each simplex. It must map stars into stars: f sends the open star of each vertex v, the union of open simplices containing v, into the open star of v's image. So for every point, its images under f and the approximation lie in one common simplex.

**Problem.** The realization of a simplicial approximation is homotopic to the map it approximates. The homotopy fixes every point where the two maps agree.

**How the definition helps.** Each simplex is convex, so the straight segment between the two images stays inside it. These segments give a continuous deformation that fixes every point where the two maps agree.

**nLab:** [simplicial approximation theorem](https://ncatlab.org/nlab/show/simplicial+approximation+theorem). It says: “This makes sense since if f(α) ∈ \|s\|, then \|φ\|(α) ∈ \|s\| and \|s\| is closed under convex combinations.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating face signs make the boundary of a boundary zero

**Remember:** Delete in either order and the signs cancel.

*Rules out counterexamples.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The boundary of an ordered simplex v₀…vₙ with n ≥ 1 is the sum of its faces, the face that omits vᵢ having sign (−1)ⁱ. A vertex has boundary zero.

**Problem.** The simplicial boundary followed by another boundary is zero. Thus every boundary is a cycle, which means its own boundary is zero.

**How the definition helps.** Omitting vᵢ then vⱼ gives the same face as the other order, but with opposite sign, because the first omission shifts the later index (our own). With all signs positive, the second boundary of a triangle would count each vertex twice (our own).

**Wikipedia:** [Simplicial homology](https://en.wikipedia.org/wiki/Simplicial_homology). It says: “we declare that each oriented simplex is equal to the negative of the simplex with the opposite orientation.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Lefschetz number by the diagonal class makes fixed points necessary

**Remember:** A graph can meet the diagonal only at a fixed point.

*True by definition. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For a continuous self-map f of a closed oriented manifold M, the Lefschetz number counts with signs where the graph of f meets the diagonal. The graph meets the diagonal only at fixed points (our own). Precisely, pull back the diagonal's Thom class, oriented by first coordinate minus second, along x ↦ (x, f(x)), and evaluate on \[M\] (our own).

**Problem.** If a continuous map of a closed oriented manifold to itself has nonzero Lefschetz number, then it has a fixed point.

**How the definition helps.** The Thom class restricts to zero away from the diagonal, so if f has no fixed point the pullback is zero (our own). The Lefschetz trace formula equates this number with the alternating sum of homology traces (our own).

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “as the alternating sum of traces of maps induced on homologies by f”

**Sources:** none listed. No primary source with a working link was found.

### Rational traces define the Lefschetz number and give Brouwer's theorem at once

**Remember:** A nonzero alternating trace forces a fixed point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** For a continuous self-map f of a compact triangulable space, the Lefschetz number Λ(f) is the alternating sum of the traces of f on rational homology. In symbols, Λ(f) = ∑ₙ (−1)ⁿ tr(Hₙ(f; ℚ)), a finite sum because the homology vanishes above some degree.

**Problem.** If Λ(f) is not zero, then f has a fixed point. For the disk all higher homology vanishes, so Λ(f) = 1 for every map, which gives the Brouwer fixed point theorem.

**How the definition helps.** The Lefschetz fixed point theorem turns a nonzero alternating trace into a fixed point (our own). On a disk only H₀ contributes, and every self-map acts there as the identity, giving trace one (our own).

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “since for compact and triangulable space from some point the homologies are trivial and traces are zeros, this sum is finite and well-defined.”

**Sources:**

- [Solomon Lefschetz, Intersections and transformations of complexes and manifolds, Transactions of the American Mathematical Society 28 (1926) 1–49](https://doi.org/10.1090/S0002-9947-1926-1501331-3)

### Defining degree by relative homology makes it equal the boundary degree

**Remember:** The connecting map sends fundamental classes to fundamental classes of boundaries.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let f be a continuous map between compact connected oriented n-manifolds M and N that sends ∂M into ∂N. Its degree is the integer d with f∗\[M\] = d\[N\] in Hₙ(N, ∂N), for the relative fundamental classes \[M\] and \[N\]. The connecting map sends these classes to the fundamental classes of the boundaries (our own).

**Problem.** Suppose that ∂M and ∂N are nonempty and connected. Then f and its restriction ∂M → ∂N have the same degree.

**How the definition helps.** The connecting map commutes with f, so (f\|∂M)∗\[∂M\] = d\[∂N\] (our own). This says that the restriction to the boundary also has degree d (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “The same definition works for compact manifolds with boundary but then f should send the boundary of X to the boundary of Y.”

**Sources:** none listed. No primary source with a working link was found.

### Defining degree by top homology makes degrees of composites multiply

**Remember:** Induced maps compose, so the integers they multiply by also multiply.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For connected closed oriented n-manifolds X and Y, the degree of a continuous map f from X to Y is the integer d by which f∗ multiplies top homology. In symbols, f∗\[X\] = d\[Y\] for the fundamental classes \[X\] and \[Y\].

**Problem.** For maps f: X → Y and g: Y → Z of such manifolds, deg(g ∘ f) = deg(g) · deg(f).

**How the definition helps.** Functoriality gives (g ∘ f)∗\[X\] = g∗(deg(f)\[Y\]) = deg(f)deg(g)\[Z\], and the coefficient of \[Z\] is the degree of g ∘ f (our own).

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Defining degree by top homology makes it a homotopy invariant

**Remember:** Degree is the multiplier on top homology, which homotopy cannot change.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For connected closed oriented n-manifolds X and Y, the degree of a continuous map f from X to Y is the integer d by which f∗ multiplies top homology. In symbols, f∗\[X\] = d\[Y\] for the fundamental classes \[X\] and \[Y\].

**Problem.** Homotopic maps between connected closed oriented manifolds of the same dimension have the same degree.

**How the definition helps.** Homotopic maps induce the same map on homology, so they send \[X\] to the same multiple of \[Y\] (our own).

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [L. E. J. Brouwer, Über Abbildung von Mannigfaltigkeiten (1911), pp. 97–115](https://doi.org/10.1007/BF01456931)
- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Orienting closed manifolds makes degree an integer and classifies maps to spheres

**Remember:** Fix a generator of top homology, and every map gets an integer.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 55Q05. arXiv math.AT. Level 3: graduate.

**Definition.** Orienting a connected closed n-manifold chooses a generator of its top homology group ℤ, its fundamental class. For such manifolds X and Y, the degree of a continuous map f from X to Y is the integer d with f∗\[X\] = d\[Y\].

**Problem.** For a closed connected oriented n-manifold M with n ≥ 1, two maps to Sⁿ are homotopic exactly when their degrees agree.

**How the definition helps.** Homotopic maps induce the same map on homology, so they have equal degrees (our own). The Hopf degree theorem gives the converse (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “Poincaré duality implies that the manifold's top homology group is isomorphic to Z. Choosing an orientation means choosing a generator of the top homology group.”

**Sources:**

- [Heinz Hopf, Abbildungsklassen n-dimensionaler Mannigfaltigkeiten, Mathematische Annalen 96 (1927) 209–224](https://doi.org/10.1007/BF01209163)

### Signed preimage counts make nonzero degree guarantee a solution

**Remember:** No preimages means an empty sum, so the degree is zero.

*True by definition.* MSC 55M25 (Degree, winding number), 47H11. arXiv math.AT, math.FA. Level 3: graduate.

**Definition.** Let Ω ⊂ ℝⁿ be bounded and open, and let f be smooth on a neighborhood of its closure. For a regular value p outside f(∂Ω), deg(f, Ω, p) counts the solutions of f(x) = p in Ω, each with the sign of det Df(x). For other p outside f(∂Ω), use any sufficiently close regular value.

**Problem.** If deg(f, Ω, p) ≠ 0, then the equation f(x) = p has a solution in Ω.

**How the definition helps.** If f(x) = p has no solution in Ω, then p is a regular value and the signed count is an empty sum, which is zero (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “If deg(f, Ω̄, p) ≠ 0, then there exists x ∈ Ω such that f(x) = p.”

**Sources:** none listed. No primary source with a working link was found.

### Čech cohomology makes Alexander duality hold for every compact subset

**Remember:** Measure a wild set by its open covers, and duality returns.

*Rules out counterexamples.* MSC 55N05 (?ech types), 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Reduced Čech cohomology is the direct limit, over open covers ordered by refinement, of the reduced simplicial cohomology of their nerves. The nerve of a cover has a simplex for each finite family of members with a common point. For a compact subset of a sphere, it equals the limit of the cohomology of the set's open neighborhoods (our own).

**Problem.** For every compact subset X of the n-sphere, the complement's reduced homology in degree q equals the reduced Čech cohomology of X in degree n − q − 1. No local condition on X is needed.

**How the definition helps.** Alexander duality computes the complement through shrinking neighborhoods of X, and Čech cohomology is the limit of their cohomology (our own). The Warsaw circle splits S² into two components, so its complement has reduced H₀ = ℤ (our own). Its Čech H¹ is ℤ, but its singular H¹ is zero (our own).

**Wikipedia:** [Alexander duality](https://en.wikipedia.org/wiki/Alexander_duality). It says: “Note that we can drop local contractibility as part of the hypothesis if we use reduced Čech cohomology, which is designed to deal with local pathologies.”

**Sources:**

- [J. W. Alexander, A proof and extension of the Jordan–Brouwer separation theorem, Transactions of the American Mathematical Society 23 (1922) 333–349](https://doi.org/10.1090/S0002-9947-1922-1501206-6)

### Augmented chains give the empty space reduced homology in degree −1

**Remember:** With no points, nothing reaches the extra copy of ℤ.

*True by definition. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 3: graduate.

**Definition.** Reduced homology is the homology of the singular chain complex extended by ℤ in degree −1, where each point, as a 0-chain, maps to 1. So reduced homology in degree −1 is ℤ modulo the image of the 0-chains.

**Problem.** The empty space has reduced homology ℤ in degree −1 and zero in all other degrees. Every nonempty space has zero reduced homology in degree −1.

**How the definition helps.** The empty space has no chains at all, so the image is zero, giving ℤ in degree −1 and zero elsewhere (our own). For a nonempty space a single point already maps onto ℤ, so degree −1 gives zero (our own).

**nLab:** [reduced homology](https://ncatlab.org/nlab/show/reduced+homology). It says: “is the chain homology of the augmented chain complex”

**Sources:** none listed. No primary source with a working link was found.

### Cellular chains show that a CW complex without n-cells has zero Hₙ

**Remember:** No cells in a degree means no chains in that degree.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** The integral cellular chain group of a CW complex in degree n is the free abelian group on its n-cells.

**Problem.** If a CW complex X has no cells of dimension n, with n ≥ 1, then the singular homology group Hₙ(X) is zero.

**How the definition helps.** With no n-cells the cellular chain group is zero, so its degree-n homology vanishes (our own). The cellular homology theorem identifies this group with singular homology (our own).

**Wikipedia:** [Cellular homology](https://en.wikipedia.org/wiki/Cellular_homology). It says: “is free abelian, with generators that can be identified with the n-cells of X”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.2, Cellular Homology](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Compact supports make Poincaré duality hold on noncompact manifolds

**Remember:** On open manifolds, pair compact support with ordinary theory.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory), 55M05, 57N65. arXiv math.AT. Level 3: graduate.

**Definition.** For a manifold M, compactly supported cohomology Hᵏ<sub>c</sub>(M) is the direct limit of Hᵏ(M, M ∖ K) over compact subsets K, ordered by inclusion. It keeps only the classes that vanish away from some compact set.

**Problem.** For an oriented n-manifold M without boundary, compact or not, Hᵏ<sub>c</sub>(M) is isomorphic to Hₙ₋ₖ(M).

**How the definition helps.** A noncompact M has no fundamental class, only one in Hₙ(M, M ∖ K) for each compact K (our own). Capping with these classes defines the duality map exactly on the limit over K (our own). For n &gt; 0, ordinary Hⁿ(ℝⁿ) is zero, but Hⁿ<sub>c</sub>(ℝⁿ) = ℤ matches H₀(ℝⁿ) = ℤ (our own).

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “In the case where an oriented manifold is not compact, one has to replace homology by Borel–Moore homology”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining cellular boundaries by exact sequences makes them square to zero

**Remember:** Two consecutive maps of an exact sequence compose to zero.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** The cellular chain group Cₙ of a CW complex X is Hₙ(Xⁿ, Xⁿ⁻¹), the homology of the n-skeleton relative to the (n − 1)-skeleton. The boundary is the connecting map into Hₙ₋₁(Xⁿ⁻¹) followed by the map into Hₙ₋₁(Xⁿ⁻¹, Xⁿ⁻²), both maps from exact sequences of pairs.

**Problem.** In the cellular chain complex of a CW complex, dₙ ∘ dₙ₊₁ = 0.

**How the definition helps.** In dₙ ∘ dₙ₊₁ the middle maps Hₙ(Xⁿ) → Hₙ(Xⁿ, Xⁿ⁻¹) → Hₙ₋₁(Xⁿ⁻¹) are consecutive in the exact sequence of the pair, so they compose to zero (our own).

**nLab:** [cellular homology](https://ncatlab.org/nlab/show/cellular+homology). It says: “On representative singular chains the morphism iₙ acts as the identity”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.2, Cellular Homology](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Defining cellular chains by relative homology makes cellular maps act functorially

**Remember:** Maps that preserve skeleta act on the groups between skeleta.

*True by definition. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** The cellular chain group Cₙ(X) of a CW complex X is Hₙ(Xⁿ, Xⁿ⁻¹), the homology of each skeleton relative to the one below. Its boundary is the connecting map into Hₙ₋₁(Xⁿ⁻¹) followed by the map into Cₙ₋₁(X), so every ingredient is a natural map of pairs of skeleta (our own).

**Problem.** A cellular map, one that sends each skeleton into the matching skeleton, induces a chain map of cellular chain complexes. This rule respects composition and identities.

**How the definition helps.** A cellular map sends each pair (Xⁿ, Xⁿ⁻¹) into the matching pair, so it acts on each Cₙ (our own). Both boundary maps are natural, so this action commutes with the boundary, and relative homology respects composition and identities (our own).

**Wikipedia:** [Cellular homology](https://en.wikipedia.org/wiki/Cellular_homology). It says: “Cellular homology is a functor from the category of CW complexes with cellular maps”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Euler characteristic by Betti numbers makes it invariant

**Remember:** Count holes, not faces, and the cutting cannot change the answer.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory), 57Q05. arXiv math.AT. Level 3: graduate.

**Definition.** The Euler characteristic of a finite CW complex X is ∑ₙ (−1)ⁿ bₙ, where the Betti number bₙ = dim Hₙ(X; ℚ) counts the n-dimensional holes. Betti numbers depend only on the space, not on how it is cut into cells (our own).

**Problem.** Every bounded three-dimensional convex polyhedron has V − E + F = 2.

**How the definition helps.** The surface of a convex polyhedron is homeomorphic to S², whose Betti numbers b₀ = b₂ = 1 and b₁ = 0 give 2. The Euler–Poincaré formula equates this sum with the cell count V − E + F of the surface (our own).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “any convex polyhedron is homeomorphic to the three-dimensional ball, so its surface is homeomorphic (hence homotopy equivalent) to the two-dimensional sphere, which has Euler characteristic 2. This explains why the surface of a convex polyhedron has Euler characteristic 2.”

**Sources:** none listed. No primary source with a working link was found.

### Good pairs make the homology of a quotient equal to relative homology

**Remember:** Retract a neighborhood onto the closed subspace before collapsing it.

*Rules out counterexamples. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** A pair (X, A) is good when A is a nonempty closed subspace with a neighborhood that slides continuously onto A, that is, has A as a deformation retract.

**Problem.** For a good pair, the reduced homology of the quotient X/A equals the relative homology Hₙ(X, A). With the disk and its boundary sphere, this gives the homology of all spheres by induction.

**How the definition helps.** A neighborhood that slides onto A lets excision identify Hₙ(X, A) with the reduced homology of X/A (our own). In \[0, 1\], the closed set A = {0} ∪ {1/n ∣ n ≥ 1} has no such neighborhood: each contains an interval joining 0 to some 1/n, which cannot slide into the totally disconnected A (our own). Its quotient is the Hawaiian earring, whose first homology is uncountable, while the relative group is countable (our own).

**Wikipedia:** [Relative homology](https://en.wikipedia.org/wiki/Relative_homology). It says: “In the case that A is a subspace of X fulfilling the mild regularity condition that there exists a neighborhood of A that has A as a deformation retract, then the group H̃ₙ(X/A) is isomorphic to Hₙ(X,A).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Homology groups, not Betti numbers, give invariants of maps

**Remember:** Numbers count holes; groups also track where a map sends them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** The integral singular homology group Hₙ(X) is the group of n-cycles modulo boundaries. A continuous map f acts on it by composing each simplex with f. So homology gives a homomorphism for each map, not only a number for each space (our own).

**Problem.** Integral homology takes continuous maps to homomorphisms and preserves identities and composition. Consequently, for n ≥ 2 the disk Dⁿ has no retraction onto Sⁿ⁻¹ (our own).

**How the definition helps.** Composition respects faces, identities and composites, so the induced maps are functorial (our own). A retraction of Dⁿ onto Sⁿ⁻¹ would factor the identity of Hₙ₋₁(Sⁿ⁻¹) ≅ ℤ through Hₙ₋₁(Dⁿ) = 0 (our own).

**nLab:** [decategorification](https://ncatlab.org/nlab/show/decategorification). It says: “Noether noted that if we work with homology groups rather than Betti numbers, we can solve more problems, because we obtain invariants not only of spaces, but also of maps.”

**Sources:**

- [J. Baez, This Week's Finds in Mathematical Physics (Week 121), 1998](https://math.ucr.edu/home/baez/week121.html)

### Reduced homology gives the point no homology, so wedge sums split

**Remember:** Reduced homology deletes the point's copy of ℤ in degree zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 3: graduate.

**Definition.** Reduced singular homology H̃•(X) adds ℤ in degree −1 to the singular chain complex, with each 0-chain sent to the sum of its coefficients. This removes the one ℤ that a point gives in degree zero, so a point has zero reduced homology.

**Problem.** Contractible spaces have zero reduced homology in every degree. A wedge of well-pointed spaces has reduced homology equal to the direct sum of the reduced homologies of its summands.

**How the definition helps.** Homotopy invariance passes this from the point to every contractible space (our own). For well-pointed spaces, whose base point inclusions are cofibrations, the reduced homology wedge theorem gives the direct sum in every degree (our own).

**nLab:** [reduced homology](https://ncatlab.org/nlab/show/reduced+homology). It says: “For some applications, though, it is convenient to divide out that contribution such as to have the homology of the point be entirely trivial.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Corollary 2.25](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining reduced K-theory as a kernel makes it a direct summand

**Remember:** Restriction to a point has a section given by trivial bundles.

*True by definition.* MSC 55N15 (Topological K-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based compact Hausdorff space X, reduced complex K-theory K̃(X) is the kernel of restriction to the base point, K(X) → K(point) ≅ ℤ. Pulling back along the constant map from X to the point splits this restriction.

**Problem.** For a based compact Hausdorff space X, K(X) ≅ K̃(X) ⊕ ℤ.

**How the definition helps.** A restriction with a right inverse is onto, and its kernel is a direct summand. The constant map gives that right inverse, because the base point followed by the constant map is the identity of the point (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “The kernel of this map is called the reduced K-theory group”

**Sources:** none listed. No primary source with a working link was found.

### Karoubi's Clifford-module K-theory makes real Bott periodicity follow from Clifford periodicity

**Remember:** Eight more real Clifford generators add only a matrix factor.

*True by definition. Confidence: medium.* MSC 55N15 (Topological K-theory), 15A66. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Let Cℓₙ be the real Clifford algebra on n anticommuting generators with square +1. Karoubi’s degree −n group of X is built only from restricting Cℓₙ₊₁-module bundles on X to Cℓₙ-module bundles. Precisely, it is π₀ of the homotopy fiber of this restriction on topological K-theory spectra (our own).

**Problem.** Real topological K-theory of compact Hausdorff spaces repeats every eight degrees.

**How the definition helps.** Cℓₙ₊₈ is the 16 × 16 matrix algebra over Cℓₙ, so it gives the same module bundles up to Morita equivalence, compatibly with restriction. Thus the groups in degrees −n and −n − 8 agree (our own). Karoubi’s comparison theorem identifies these groups with real topological K-theory (our own).

**nLab:** [Karoubi K-theory](https://ncatlab.org/nlab/show/Karoubi+K-theory). It says: “The sequence is periodic up to Morita equivalence”

**Sources:**

- [Max Karoubi, K-Theory: An Introduction (Springer, 1978).](https://doi.org/10.1007/978-3-540-79890-3)

### Over a compact Hausdorff base, K-theory classes are stable classes of bundles

**Remember:** Every bundle on a compact base has a partner making it trivial.

*Rules out counterexamples. Confidence: medium.* MSC 55N15 (Topological K-theory), 55R50. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** Topological K-theory K(X) of a compact Hausdorff space X is the Grothendieck group of isomorphism classes of vector bundles under direct sum, whose elements are formal differences \[E\] − \[F\]. Over such a base every bundle F has a complement G with F ⊕ G trivial (our own), so any negative term can be traded for a trivial one.

**Problem.** For a compact Hausdorff space X, every element of K(X) is a formal difference \[E\] − \[trivial bundle\]. Two bundles have the same class in K(X) exactly when they are stably equivalent, that is, isomorphic after adding the same trivial bundle to each.

**How the definition helps.** Adding the complement G to both terms turns \[E\] − \[F\] into \[E ⊕ G\] − \[trivial\] (our own). Equality in the group completion means isomorphism after adding a common bundle, and that bundle's complement makes the added bundle trivial (our own). On the noncompact discrete space ℕ, a bundle with fibre rank n at n has no complement, so the statement fails (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “For the most part below we will invoke the assumption that the base topological space X is a compact Hausdorff space. Because then the following statement holds, which is crucial in some places:”

**Sources:**

- [Allen Hatcher, Vector Bundles and K-Theory (online book), Chapter 1](https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html)

### Representing K-theory by maps to ℤ × BU makes it homotopy invariant

**Remember:** K-classes are maps to ℤ × BU, so homotopies pass through.

*True by definition. Confidence: medium.* MSC 55N15 (Topological K-theory), 55R50. arXiv math.AT. Level 3: graduate.

**Definition.** For a compact Hausdorff space X, K⁰(X) is the set of homotopy classes of maps from X to ℤ × BU, the space that classifies complex bundles up to adding trivial ones. Pulling a class back along f : Y → X is composing its map with f.

**Problem.** Homotopic maps f, g : Y → X between compact Hausdorff spaces induce the same pullback map K⁰(X) → K⁰(Y).

**How the definition helps.** A homotopy from f to g, composed with a map c : X → ℤ × BU, is a homotopy from c∘f to c∘g (our own). So f and g pull back every class to the same class (our own). Representability identifies these homotopy classes with bundle K-theory.

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “by homotopy classes of continuous functions into the classifying spaces BO × ℤ and BU × ℤ, respectively”

**Sources:** none listed. No primary source with a working link was found.

### Representing reduced K-theory by based maps makes it split over wedges

**Remember:** A based map out of a wedge is one map from each piece.

*True by definition. Confidence: medium.* MSC 55N15 (Topological K-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based finite CW complex X, reduced complex K-theory K̃(X) is the group of based homotopy classes of maps X → ℤ × BU that send the base point to zero. The group operation is pointwise in ℤ × BU.

**Problem.** The wedge X ∨ Y joins two based spaces at their base points. Its reduced K-group is the direct sum K̃(X) ⊕ K̃(Y).

**How the definition helps.** A based map or based homotopy out of X ∨ Y is exactly a pair of them out of X and Y (our own). The operation is pointwise, so this bijection is a group isomorphism (our own). That this mapping model agrees with the bundle model is a separate theorem (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “Then there is an isomorphism K̃(X ∨ Y) ≃ K̃(X) ⊕ K̃(Y)”

**Sources:** none listed. No primary source with a working link was found.

### Flat differential classes are homotopy invariant

**Remember:** Flat means zero curvature, so homotopies have nothing to integrate.

*Rules out counterexamples.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 53C08. arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** A differential cohomology class x has a curvature R(x), a closed differential form. For a smooth homotopy H from f₀ to f₁, the difference f₁\*x − f₀\*x comes from the integral of H\*R(x) along the interval (our own). The class is flat when R(x) = 0.

**Problem.** Smoothly homotopic maps give the same pullback on flat differential classes. They can give different pullbacks on classes with nonzero curvature.

**How the definition helps.** For a flat class that integral is zero, so the two pullbacks agree (our own). In degree one, classes are smooth functions to ℝ/ℤ, with curvature their derivative (our own). The function t ↦ t mod ℤ on ℝ is not flat, and its pullbacks along the homotopic constant maps to 0 and to ½ differ (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “(i.e. flat cohomology) is a homotopy invariant functor.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)
- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Generalized cohomology drops only the dimension axiom

**Remember:** Keep homotopy invariance, exactness and excision; let the point have any coefficients.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** A generalized cohomology theory is a functor that satisfies the Eilenberg–Steenrod axioms of homotopy invariance, exactness and excision, but not the dimension axiom. So the cohomology of a point may be non-zero in degrees other than 0.

**Problem.** Every spectrum gives a generalized cohomology theory, for example K-theory and cobordism. Conversely, by Brown representability, every additive generalized cohomology theory on CW complexes comes from a spectrum.

**How the definition helps.** A spectrum gives suspension isomorphisms and exact cofiber sequences, but nothing forces its coefficients to vanish outside degree 0 (our own). Conversely, Brown representability gives a representing space in each degree for an additive theory on pointed CW complexes, and suspension links them into a spectrum (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “This entry here is concerned with the generalization obtained from the Eilenberg-Steenrod axioms by just discarding the dimension axiom.”

**Sources:**

- [George W. Whitehead, Generalized homology theories, Trans. Amer. Math. Soc. 102 (1962) 227–283](https://doi.org/10.1090/s0002-9947-1962-0137117-6)
- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Suspension-defined connecting maps make cohomology exact in all degrees

**Remember:** Middle exactness on every cofiber triple, and suspension shifts degree.

*True by definition. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A reduced cohomology theory is a graded functor to abelian groups that sends coproducts to products and each cofiber sequence X → Y → Z to a sequence exact in the middle. It has natural suspension isomorphisms Hⁿ(X) ≅ Hⁿ⁺¹(ΣX), and the connecting map is this isomorphism followed by pullback along Z → ΣX.

**Problem.** In a pointed ∞-category with finite colimits, reduced cohomology sends a cofiber sequence to a long exact sequence. The connecting map from the group of X to the next-degree group of Z uses suspension and the map Z → ΣX.

**How the definition helps.** Each consecutive triple of X → Y → Z → ΣX → ΣY → ⋯ is a cofiber sequence, so middle exactness holds at every term (our own). The suspension isomorphisms turn the maps out of the groups of ΣX into the connecting maps, so the pieces join into one long exact sequence.

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “using that σ is by definition an isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The wedge axiom extends uniqueness of cohomology theories to infinite complexes

**Remember:** An additive theory turns a wedge of spaces into a product of groups.

*Rules out counterexamples. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** A reduced cohomology theory satisfies the wedge axiom if, for every family of pointed CW complexes Xᵢ and every degree n, restriction gives Ẽⁿ(∨ᵢ Xᵢ) ≅ ∏ᵢ Ẽⁿ(Xᵢ). So its value on an infinite wedge of spheres is fixed by its value on each sphere.

**Problem.** Suppose a suspension-compatible natural transformation between reduced additive cohomology theories is an isomorphism on S⁰ in every degree. It is then an isomorphism on every pointed CW complex.

**How the definition helps.** The wedge axiom extends the finite comparison to infinite wedges of spheres and to the telescope of the skeleta (our own). The comparison theorem then gives an isomorphism on every CW complex. Without the axiom it fails: H\*(−; ℤ) ⊗ ℚ agrees with rational cohomology on S⁰ but not on an infinite wedge of circles (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [wedge axiom](https://ncatlab.org/nlab/show/wedge+axiom). It says: “Then φ(X): E(X) → F(X) is an isomorphism for X any CW-complex with a finite number of cells. If both E and F satisfy the wedge axiom, then φ(X) is an isomorphism for X any CW-complex, not necessarily finite.”

**Sources:**

- [John Milnor, On axiomatic homology theory, Pacific Journal of Mathematics 12 (1962) 337–341](https://doi.org/10.2140/pjm.1962.12.337)
- [Samuel Eilenberg, Norman Steenrod, Foundations of Algebraic Topology, Princeton University Press (1952), section III.10 (uniqueness for ordinary theories on finite complexes)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/eilestee.pdf)

### Ω-spectrum cohomology has natural suspension isomorphisms by adjunction

**Remember:** Each space is the loop space of the next.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** An Ω-spectrum is a sequence of pointed spaces Eₙ with weak equivalences Eₙ → ΩEₙ₊₁ to the loop space of the next one. Its degree n cohomology of a pointed CW complex X is the set of pointed homotopy classes of maps X → Eₙ.

**Problem.** For an Ω-spectrum, the degree n cohomology of X is naturally isomorphic to the degree n + 1 cohomology of its reduced suspension.

**How the definition helps.** Suspension–loop adjunction turns pointed maps ΣX → Eₙ₊₁ into pointed maps X → ΩEₙ₊₁, also on homotopy classes (our own). Since X is a CW complex, the weak equivalence Eₙ → ΩEₙ₊₁ gives a bijection on these classes, naturally in X (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “In (Whitehead 62) it was observed that every spectrum induces a generalized homology theory. The Brown representability theorem (Brown 62) asserts that every generalized (co)homology arises this way”

**Wikipedia:** [Spectrum (topology)](https://en.wikipedia.org/wiki/Spectrum_%28topology%29). It says: “An Ω-spectrum is a spectrum such that the adjoint of the structure map (i.e., the map Xₙ → ΩXₙ₊₁) is a weak equivalence.”

**Sources:**

- [E. H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Complex orientations of a ring spectrum are exactly ring maps from MU

**Remember:** One normalized class on ℂℙ∞ is one ring map from MU.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P43. arXiv math.AT. Level 3: graduate.

**Definition.** A complex orientation of a homotopy commutative ring spectrum E is a class x ∈ Ẽ²(ℂℙ∞), a universal first Chern class for E (our own), whose restriction to ℂℙ¹ is the suspended unit.

**Problem.** For a homotopy commutative ring spectrum E, complex orientations of E correspond bijectively to homotopy ring maps MU → E.

**How the definition helps.** MU carries a universal orientation, and a ring map MU → E sends it to an orientation of E (our own). Conversely, an orientation gives compatible multiplicative Thom classes, which the universal property of MU assembles into a ring map (our own).

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Wikipedia:** [Complex cobordism](https://en.wikipedia.org/wiki/Complex_cobordism). It says: “A complex orientation on an associative commutative ring spectrum E is an element x in E²(ℂℙ∞) whose restriction to E²(ℂℙ¹) is 1, if the latter ring is identified with the coefficient ring of E.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)

### Defining bordism by the Thom spectrum makes its long exact sequence automatic

**Remember:** Bordism is homotopy of MSO smashed with X, and smash keeps cofibers.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R75. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW pair (X, A), oriented bordism in degree n is defined as the stable homotopy group πₙ(MSO ∧ Σ∞(X₊/A₊)), where MSO is the oriented Thom spectrum and the plus signs add base points. Smashing with MSO keeps cofiber sequences (our own).

**Problem.** For a cell complex X and a subcomplex A, oriented bordism has a long exact sequence of the pair.

**How the definition helps.** Smashing the cofiber sequence A₊ → X₊ → X₊/A₊ with MSO gives a cofiber sequence of spectra, and its homotopy groups form a long exact sequence (our own). The Pontryagin–Thom theorem identifies this construction with geometric oriented bordism (our own).

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “A generalized homology theory represented by a Thom spectrum.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86](https://doi.org/10.1007/BF02566923)

### Even ring spectra are always complex orientable, unlike KO

**Remember:** No odd homotopy, no obstruction to orienting.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N15. arXiv math.AT. Level 3: graduate.

**Definition.** A ring spectrum E is even if its homotopy groups πₖE vanish for every odd k. It is complex orientable if the unit class on ℂℙ¹ extends to a class in E²(ℂℙ∞), and ℂℙ∞ is built from ℂℙ¹ by adding cells of even dimension only.

**Problem.** Every even ring spectrum is complex orientable. Real K-theory KO, which has π₁KO = ℤ/2, is not complex orientable.

**How the definition helps.** Extending over a cell of dimension 2m meets an obstruction in π₂ₘ₋₃E, an odd homotopy group, which is zero for even E (our own). Compatible extensions give an orientation on ℂℙ∞ (our own). For KO, the Hopf map that attaches the 4-cell sends the unit to the nonzero element of π₁KO (our own).

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “A sufficient condition for this is, evidently, that the reduced E-cohomology of all odd-dimensional spheres vanishes, hence, that the graded E-cohomology ring E• is trivial in odd degrees (an even cohomology theory).”

**Sources:** none listed. No primary source with a working link was found.

### Landweber exactness says when tensoring complex cobordism gives a homology theory

**Remember:** Each vᵢ must act injectively on R modulo the earlier ones.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A graded one-dimensional commutative formal group law F over R is Landweber exact if, for every prime p, multiplication by p on R and by each vᵢ on R/(p, v₁, …, vᵢ₋₁) is injective. Here vᵢ, for i ≥ 1, is the coefficient of xᵖⁱ in the p-series \[p\]F(x).

**Problem.** For Landweber exact F, the functor X ↦ MU∗(X) ⊗<sub>L</sub> R is a generalized homology theory represented by a spectrum. Here L is the Lazard ring acting through F.

**How the definition helps.** Landweber’s exact functor theorem says these injectivity tests make tensoring with R exact on MU-homology, so exact sequences of homology survive (our own). Brown representability then supplies the spectrum (our own). The additive law over ℤ fails, since its v₁ is 0 modulo p (our own).

**nLab:** [Landweber exact functor theorem](https://ncatlab.org/nlab/show/Landweber+exact+functor+theorem), [Landweber exactness](https://ncatlab.org/nlab/show/Landweber+exactness). It says: “Landweber exactness is a sufficient condition on R for E ≔ MU•(−) ⊗ L R to be indeed a generalized homology theory”

**Sources:**

- [Peter S. Landweber, Homological properties of comodules over MU∗(MU) and BP∗(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### Morava K-theory has a graded field of coefficients, so Künneth always holds

**Remember:** Coefficients form a graded field, so every module is free.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** Morava K-theory K(n), at a prime p and height n ≥ 1, has coefficients 𝔽ₚ\[vₙ, vₙ⁻¹\] with \|vₙ\| = 2(pⁿ − 1). This ring is a graded field: every nonzero homogeneous element is invertible, so every graded module over it is free (our own).

**Problem.** For all spaces X and Y, the K(n)-homology of X × Y is the tensor product over K(n)\* of the K(n)-homologies of X and Y.

**How the definition helps.** Free modules have no higher Tor groups, so the Künneth spectral sequence collapses to the tensor product given by the external product (our own).

**nLab:** [Morava K-theory](https://ncatlab.org/nlab/show/Morava+K-theory). It says: “This ring is a graded field in the sense that every graded module over it is free.”

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “They have Künneth isomorphisms for arbitrary pairs of spaces: that is, for X and Y CW complexes, we have”

**Sources:**

- [D. C. Johnson, W. S. Wilson, BP operations and Morava's extraordinary K-theories, Mathematische Zeitschrift 144 (1975) 55–75](https://doi.org/10.1007/BF01214408)

### One class on ℂP∞ gives a formal group law

**Remember:** An orientation is a first Chern class equal to 1 on S².

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A complex orientation of a homotopy commutative ring spectrum E is a class x ∈ Ẽ²(ℂℙ∞) that restricts on ℂℙ¹ to the suspended unit. It acts as a first Chern class, and Ẽ\*(ℂℙ∞ × ℂℙ∞) is then power series in its two copies x₁ and x₂ (our own).

**Problem.** Every complex oriented cohomology theory carries a formal group law, from the first Chern class of a tensor product of line bundles. For a homotopy commutative ring spectrum E, complex orientations correspond exactly to ring maps MU → E, so MU is the universal complex oriented theory.

**How the definition helps.** The class of the tensor product of the two universal line bundles is therefore a power series F(x₁, x₂), and the laws of tensor product make it a formal group law (our own). The universal property of MU identifies orientations with homotopy ring maps from MU.

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory), [Milnor-Quillen theorem on MU](https://ncatlab.org/nlab/show/Milnor-Quillen+theorem+on+MU). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Sources:**

- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### p-typical formal group laws make BP a ring summand of p-local MU

**Remember:** Make the universal group law p-typical, and MU splits off BP.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 3: graduate.

**Definition.** Over a torsion-free ℤ₍ₚ₎-algebra R, a one-dimensional commutative formal group law is p-typical if its logarithm over R ⊗ ℚ uses only powers xᵖⁱ. Cartier’s p-typification turns every such law into an isomorphic p-typical one and fixes p-typical laws (our own).

**Problem.** There is an idempotent ring map ε from MU₍ₚ₎ to itself whose image BP has π\*BP = ℤ₍ₚ₎\[v₁, v₂, …\]. Its formal group law is the universal p-typical one, and MU₍ₚ₎ is a wedge of suspensions of BP.

**How the definition helps.** So p-typification is an idempotent on the universal law, and Quillen realized it as an idempotent ring map ε of MU₍ₚ₎ (our own). Quillen’s splitting theorem then gives BP its polynomial coefficients, its universal p-typical law and the wedge decomposition (our own).

**nLab:** [Brown-Peterson spectrum](https://ncatlab.org/nlab/show/Brown-Peterson+spectrum). It says: “BP is related to p-typical formal groups as MU is to formal groups.”

**Wikipedia:** [Brown–Peterson cohomology](https://en.wikipedia.org/wiki/Brown%E2%80%93Peterson_cohomology). It says: “BP is the universal example of a complex oriented cohomology theory whose associated formal group law is p-typical.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)
- [E. H. Brown, F. P. Peterson, A spectrum whose ℤₚ cohomology is the algebra of reduced pth powers, Topology 5 (1966) 149–154](https://doi.org/10.1016/0040-9383(66)90015-2)

### Cohomology with supports in a closed set depends only near it

**Remember:** Sections vanishing off Z glue with zero, so only near Z matters.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14B15. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a sheaf F of abelian groups on X and closed Z ⊆ X, Γ<sub>Z</sub>(X, F) consists of the sections that vanish on X ∖ Z, and its right derived functors are cohomology with support in Z. Such a section is the same as a section over any open U ⊇ Z that vanishes off Z, since it glues with zero on X ∖ Z.

**Problem.** For every open U containing Z, restriction induces an isomorphism on cohomology with support in Z for every sheaf of abelian groups on X.

**How the definition helps.** So Γ<sub>Z</sub>(X, −) and Γ<sub>Z</sub>(U, −) are the same functor up to restriction. Restriction to an open set keeps injective sheaves injective, so one injective resolution computes both derived functors (our own summary).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “(So cohomology with support in a closed subset Y only depends on the behavior of the space X and the sheaf E near Y.)”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Compactly supported Euler characteristic adds across open and closed pieces

**Remember:** Compact supports make an open piece and its closed complement add correctly.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14P10. arXiv math.AT. Level 3: graduate.

**Definition.** For a locally compact semialgebraic set, one built from finitely many polynomial equations and inequalities, χ<sub>c</sub> is the alternating sum of dimensions of its compactly supported cohomology over ℚ. Compact supports put an open subset U, its closed complement Z and the whole set X into one long exact sequence (our own).

**Problem.** Let U be an open semialgebraic subset of X with complement Z. Then the compactly supported Euler characteristic of X is the sum of those of U and Z.

**How the definition helps.** Alternating sums of dimensions add along a long exact sequence of finite-dimensional groups (our own). Semialgebraic finiteness makes the groups finite-dimensional and zero outside finitely many degrees (our own).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Euler calculus](https://en.wikipedia.org/wiki/Euler_calculus). It says: “if X is a locally compact space, and one uses Euler characteristics with compact supports, no assumptions on M or N are needed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the exceptional inverse image as an adjoint makes Poincaré duality formal

**Remember:** Make the upper shriek a right adjoint, and duality is the adjunction.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Let p map a finite-dimensional locally compact Hausdorff space X to a point, so Rp₍!₎ is compactly supported cohomology. The exceptional inverse image p⁽!⁾ is defined as the right adjoint of Rp₍!₎ on derived categories of sheaves of k-vector spaces.

**Problem.** For an oriented n-manifold X without boundary and a field k, the dual of Hⁱ<sub>c</sub>(X;k) is isomorphic to Hⁿ⁻ⁱ(X;k).

**How the definition helps.** Adjunction identifies Hom(Rp₍!₎k, k\[−i\]) with Hom(k, p⁽!⁾k\[−i\]). Over a field the first group is the dual of Hⁱ<sub>c</sub>(X;k) (our own). On an oriented n-manifold p⁽!⁾k ≅ k\[n\], so the second group is Hⁿ⁻ⁱ(X;k) (our own).

**nLab:** [Verdier duality](https://ncatlab.org/nlab/show/Verdier+duality). It says: “The analog of Poincaré duality is then the statement that the abelian sheaf cohomology with coefficients in V is dual to the abelian sheaf cohomology with compact support with coefficients in 𝔻V.”

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “for a continuous map f: X → Y of locally compact Hausdorff spaces, the derived functor of the direct image with compact (or proper) supports Rf₍!₎ has a right adjoint f⁽!⁾ in the derived category of sheaves”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Direct images with proper supports satisfy base change along every map

**Remember:** Keep sections whose support maps properly to the open set downstairs.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let f be a continuous map between locally compact Hausdorff spaces. On an open V, f₍!₎F consists of the sections over f⁻¹(V) whose support maps properly to V, so its stalk at y is the compactly supported sections on the fibre f⁻¹(y).

**Problem.** Take a cartesian square of locally compact Hausdorff spaces. For any map f, the base change map g⁻¹Rf₍!₎F → Rf′₍!₎g′⁻¹F is an isomorphism.

**How the definition helps.** Proper support stays proper after base change, and the stalk sees only the fibre, so the proper base change argument needs no hypothesis on f (our own summary). The plain direct image fails: for the inclusion f of ℂ ∖ {0} into ℂ, f∗ℤ has stalk ℤ at 0, though the fibre over 0 is empty. Extension by zero has stalk 0 there, which matches the empty fibre.

**nLab:** [direct image with compact support](https://ncatlab.org/nlab/show/direct+image+with+compact+support). It says: “If y∈Y, then the fiber (f₍!₎F)<sub>y</sub> is isomorphic to Γ<sub>c</sub>(f⁻¹y, F\|f⁻¹(y)).”

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “If the map f is not closed, the base change map need not be an isomorphism, as the following example shows”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Disjoint clopen covers make all higher sheaf cohomology of profinite spaces vanish

**Remember:** Disjoint clopen covers have no overlaps, so local lifts always glue.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N05. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A profinite space is a compact Hausdorff space that is totally disconnected, such as the Cantor set or the p-adic integers. Every open cover of it has a finite refinement by disjoint sets that are both open and closed, so pieces never overlap.

**Problem.** Every abelian sheaf F on a profinite space X has Hⁿ(X, F) = 0 for all n &gt; 0.

**How the definition helps.** On disjoint clopen pieces, local lifts of a section to a quotient sheaf glue with no compatibility check, so global sections keep surjections surjective (our own). Hence global sections form an exact functor, and its higher derived functors vanish (our own).

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0A3F), [Cohomology](https://stacks.math.columbia.edu/tag/09V2). It says: “Let X be a profinite topological space. Then H<sup>q</sup>(X, ℱ) = 0 for all q &gt; 0 and all abelian sheaves ℱ.”

**Sources:**

- [The Stacks Project, Cohomology of Sheaves, Lemma 20.22.3 (Tag 0A3F)](https://stacks.math.columbia.edu/tag/0A3F)

### Duality through the dualizing complex exchanges direct images and proper direct images

**Remember:** Right adjoints compose, so dualizing complexes pull back to dualizing complexes.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let p map X to a point and let p⁽!⁾ be the right adjoint of compactly supported cohomology. The dualizing complex is ω(X) = p⁽!⁾k, and the Verdier dual of F is D(F) = RHom(F, ω(X)). Because right adjoints compose, f⁽!⁾ω(Y) ≅ ω(X) for every map f : X → Y (our own).

**Problem.** For a continuous map f between finite-dimensional locally compact Hausdorff spaces, D<sub>Y</sub>(Rf₍!₎F) ≅ Rf∗D<sub>X</sub>(F) for complexes F of sheaves of k-vector spaces in Verdier duality.

**How the definition helps.** Local Verdier duality identifies D<sub>Y</sub>(Rf₍!₎F) with Rf∗RHom(F, f⁽!⁾ω(Y)) (our own). Substituting f⁽!⁾ω(Y) ≅ ω(X) gives Rf∗D<sub>X</sub>(F) (our own).

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “(Intertwining of functors f∗ and f₍!₎). If f is a continuous map from X to Y, then there is an isomorphism D(Rf₍!₎(ℱ)) ≅ Rf∗D(ℱ).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Extension by zero makes injective sheaves flasque, giving Mayer–Vietoris sequences

**Remember:** Maps from ℤ\[U\] are sections over U, so injectives extend sections.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For an open set U, ℤ\[U\] is the constant sheaf ℤ on U extended by zero to X. Sheaf maps ℤ\[U\] → F are the same as sections in F(U), and ℤ\[U′\] ⊆ ℤ\[U\] when U′ ⊆ U.

**Problem.** Let X = U ∪ V with U and V open, and let F be an abelian sheaf. Then there is a long exact sequence 0 → H⁰(X, F) → H⁰(U) ⊕ H⁰(V) → H⁰(U ∩ V) → H¹(X, F) → ⋯.

**How the definition helps.** An injective sheaf I extends every map ℤ\[U′\] → I across ℤ\[U′\] ⊆ ℤ\[U\], so its restriction maps are surjective (our own). With this surjectivity, the sheaf axiom gives a short exact sequence of sections of I over X, U ⊕ V and U ∩ V (our own). Applying this to an injective resolution of F and taking cohomology gives Mayer–Vietoris (our own).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “Namely, let X be a topological space which is a union of two open subsets U and V, and let E be a sheaf on X. Then there is a long exact sequence of abelian groups:”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01EA), [Cohomology](https://stacks.math.columbia.edu/tag/01EB). It says: “Let U′ ⊂ U ⊂ X be open subspaces. For any injective 𝒪<sub>X</sub>-module ℐ the restriction mapping ℐ(U) → ℐ(U′) is surjective.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Fine resolutions by smooth forms identify Dolbeault cohomology with sheaf cohomology

**Remember:** Partitions of unity split the identity, killing higher cohomology.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 32L10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A sheaf is fine if, for every locally finite open cover, the identity splits as a sum of sheaf endomorphisms, each supported inside one member of the cover. Smooth partitions of unity make the sheaves of smooth (p, q)-forms fine (our own).

**Problem.** For a complex manifold X, the q-th sheaf cohomology of the sheaf Ωᵖ of holomorphic p-forms equals the q-th Dolbeault cohomology. That is the cohomology of the operator ∂̄ on global smooth forms of type (p, q).

**How the definition helps.** Fine sheaves have no higher cohomology on a paracompact space, so a fine resolution computes sheaf cohomology from global sections. The local ∂̄-Poincaré lemma makes the smooth (p, q)-forms, with ∂̄ in q, a resolution of Ωᵖ (our own). Its global sections form the Dolbeault complex (our own).

**nLab:** [fine sheaf](https://ncatlab.org/nlab/show/fine+sheaf). It says: “For any fine sheaf J over a paracompact Hausdorff space M, the sheaf cohomology groups of positive degree j are all trivial”

**Wikipedia:** [Dolbeault cohomology](https://en.wikipedia.org/wiki/Dolbeault_cohomology). It says: “If E is a holomorphic vector bundle on a complex manifold X, then one can define likewise a fine resolution of the sheaf 𝒪(E) of holomorphic sections of E, using the Dolbeault operator of E.”

**Sources:**

- [Phillip Griffiths and Joseph Harris, Principles of Algebraic Geometry, Wiley (1978; reprinted 1994)](https://doi.org/10.1002/9781118032527)

### Flasque sheaves are acyclic, so flasque resolutions compute sheaf cohomology

**Remember:** Sections that always extend leave nothing for cohomology to measure.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** An abelian sheaf F is flasque if every section over an open set extends to every larger open set, so all restriction maps are surjective.

**Problem.** Every flasque sheaf F has Hⁿ(X, F) = 0 for all n &gt; 0. So any resolution of F by flasque sheaves computes Hⁿ(X, F) from its complex of global sections.

**How the definition helps.** Surjective restrictions let local lifts of a section be glued, with Zorn's lemma, so global sections stay exact on short exact sequences that begin with a flasque sheaf. Embed F in an injective sheaf, which is flasque, and the quotient is flasque too. Induction on the degree then kills all higher cohomology (our own summary of the standard proof).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “A sheaf E on X is called flabby (French: flasque) if every section of E on an open subset of X extends to a section of E on all of X. Flabby sheaves are acyclic.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/09SY). It says: “Let (X, 𝒪<sub>X</sub>) be a ringed space. Any flasque 𝒪<sub>X</sub>-module is acyclic for RΓ(X, −) as well as RΓ(U, −) for any open U of X.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)
- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Leray covers make Čech cohomology of one cover compute sheaf cohomology

**Remember:** If every overlap is acyclic, the overlaps alone compute everything.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N05, 18G40. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** An open cover is a Leray cover for a sheaf F when F has no higher cohomology on any finite intersection of cover sets. Its Čech complex uses only the sections of F over these intersections.

**Problem.** If a cover is a Leray cover for F, then its Čech cohomology with coefficients in F equals Hᵖ(X, F) for every p.

**How the definition helps.** The Čech-to-derived spectral sequence starts from Čech cochains of the presheaves U ↦ Hʲ(U, F) and converges to sheaf cohomology. The Leray condition makes these presheaves zero on every intersection when j &gt; 0, so only the row j = 0, the Čech complex of F, survives.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “Thus Čech cohomology is an approximation to sheaf cohomology using only the sections of E on finite intersections of the open sets Uᵢ.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01ET). It says: “Assume that Hⁱ(Uᵢ₀…ᵢₚ, ℱ) = 0 for all i &gt; 0, all p ≥ 0 and all i₀, …, iₚ ∈ I. Then Ȟᵖ(𝒰, ℱ) = Hᵖ(U, ℱ) as 𝒪<sub>X</sub>(U)-modules.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Local contractibility makes sheaf cohomology agree with singular cohomology

**Remember:** Every neighborhood contains a smaller one that contracts inside the original neighborhood.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A space is weakly locally contractible when every neighbourhood U of a point contains a smaller neighbourhood V whose inclusion into U is homotopic to a constant map. So, locally, singular cochains see only constant coefficients, as the constant sheaf does (our own).

**Problem.** For every paracompact Hausdorff weakly locally contractible space and abelian group A, constant-sheaf cohomology agrees with singular cohomology with coefficients in A.

**How the definition helps.** Local contractibility makes the sheafified singular cochains a resolution of the constant sheaf A, and these sheaves are acyclic on paracompact spaces (our own summary of Bredon's proof). Without the condition the two differ in degree 0. On the Cantor set, sheaf H⁰ is the countable group of locally constant integer functions, but singular H⁰ is all integer functions on its points.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “whereas sheaf cohomology H⁰(X,Z<sub>X</sub>) is the group of locally constant functions from X to Z. These are different, for example, when X is the Cantor set.”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### On irreducible spaces constant sheaves are flasque, so their higher cohomology vanishes

**Remember:** All open sets overlap, so constant sections extend everywhere.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14F06. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A topological space is irreducible when it is nonempty and any two nonempty open subsets meet. Then every nonempty open set is connected, so the constant sheaf A has A(U) = A and every restriction between nonempty open sets is the identity.

**Problem.** If X is irreducible, then Hⁿ(X, A) = 0 for every n &gt; 0 and every abelian group A. This holds, for example, for any irreducible variety with the Zariski topology.

**How the definition helps.** So the constant sheaf is flasque, and flasque sheaves have no higher cohomology. On the circle the constant sheaf is not flasque, and H¹(S¹, ℤ) = ℤ (our own example).

**nLab:** [hypercohomology](https://ncatlab.org/nlab/show/hypercohomology). It says: “Note that, in the algebraic category, the cohomology of the constant sheaf ℂ is not the right thing to consider, for constant sheaves on irreducible spaces are flasque, hence acyclic.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/02UW). It says: “Let X be an irreducible topological space. Then Hᵖ(X, A) = 0 for all p &gt; 0 and any abelian group A.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### Partitions of unity make smooth forms soft, which proves de Rham's theorem

**Remember:** Cut off with a bump function, and every form extends.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 58A12. arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** A sheaf on a paracompact Hausdorff space is soft when every section over a closed subset extends to the whole space. Soft sheaves have no higher cohomology, and smooth partitions of unity make the sheaf Ωʲ of smooth j-forms on a manifold soft.

**Problem.** For a smooth manifold X, the sheaf cohomology Hʲ(X, ℝ) is isomorphic to de Rham cohomology, the cohomology of the complex of global smooth forms.

**How the definition helps.** The Poincaré lemma, which says closed forms are locally exact, makes 0 → ℝ → Ω⁰ → Ω¹ → ⋯ a soft resolution of ℝ. A soft resolution computes sheaf cohomology from global sections, and here those form the de Rham complex.

**nLab:** [soft sheaf](https://ncatlab.org/nlab/show/soft+sheaf). It says: “A sheaf F of sets (or of abelian groups) over a paracompact Hausdorff space X is soft if for any closed subset V⊂X, every section of F over V can be extended to the whole X.”

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “By the results above, the sheaves Ω<sub>X</sub>ʲ are soft and therefore acyclic. It follows that the sheaf cohomology of X with real coefficients is isomorphic to the de Rham cohomology of X”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Proper maps make stalks of higher direct images equal fibre cohomology

**Remember:** Closed maps let neighbourhoods of a fibre come from neighbourhoods downstairs.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 54C10. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** A continuous map f : X → Y is proper when it is closed, has quasi-compact fibres, and is separated: two distinct points of one fibre have disjoint neighbourhoods in X. Closedness makes the sets f⁻¹(W), for neighbourhoods W of y, cofinal among neighbourhoods of the fibre f⁻¹(y) (our own).

**Problem.** For a proper map f, a sheaf F on X and a point y of Y, the stalk of Rⁱf∗F at y is Hⁱ(f⁻¹(y), F). Hence higher direct images commute with every base change Y′ → Y.

**How the definition helps.** So the stalk of Rⁱf∗F at y is the limit of cohomology over neighbourhoods of the fibre (our own). For a quasi-compact fibre with separated points, that limit is the cohomology of the fibre itself (our own). Properness survives base change and the fibres stay the same, so base change follows.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “the base change map g\* Rʳf∗ℱ → Rʳf′∗g′\*ℱ is an isomorphism.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/09V5), [Cohomology](https://stacks.math.columbia.edu/tag/09V6). It says: “Assume that f is closed, f is separated, and f⁻¹(y) is quasi-compact. Then for E in D⁺(𝒪<sub>X</sub>) we have (Rf∗E)<sub>y</sub> = RΓ(f⁻¹(y), E\|f⁻¹(y)) in D⁺(𝒪\_(Y, y)).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Sheaf cohomology vanishes above covering dimension, which singular cohomology fails

**Remember:** Covers of dimension n leave no room for cohomology above n.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 54F45. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A paracompact Hausdorff space has covering dimension at most n if every open cover has an open refinement in which each point lies in at most n + 1 sets. Its covering dimension is the least such n.

**Problem.** On a paracompact Hausdorff space of covering dimension n, Hʲ(X, E) = 0 for every j &gt; n and every abelian sheaf E.

**How the definition helps.** On such a refinement, an alternating Čech cochain of degree above n needs n + 2 sets with a common point, so it vanishes (our own summary). Čech and sheaf cohomology agree on paracompact Hausdorff spaces, and that theorem carries the work. Singular cohomology has no such bound: Barratt and Milnor found a compact subset of ℝ³ with nonzero singular cohomology in infinitely many degrees.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “This does not hold in the same generality for singular cohomology: for example, there is a compact subset of Euclidean space R³ that has nonzero singular cohomology in infinitely many degrees.”

**Sources:**

- [M. G. Barratt and John Milnor, An example of anomalous singular homology, Proceedings of the American Mathematical Society 13 (1962) 293–297](https://doi.org/10.1090/S0002-9939-1962-0137110-9)
- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Skyscraper sheaves of injective groups give abelian sheaves enough injectives

**Remember:** Maps into a skyscraper only see one stalk, and stalks are exact.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For a point x and an abelian group I, the skyscraper sheaf Sky(x, I) has sections I over open sets that contain x and 0 over the others. Sheaf maps F → Sky(x, I) are the same as group maps from the stalk Fₓ to I.

**Problem.** Every abelian sheaf F on a topological space embeds in an injective sheaf. One choice is the product over all points x of Sky(x, Iₓ), where Iₓ is an injective group containing Fₓ.

**How the definition helps.** Stalks are exact, so this adjunction makes Sky(x, I) injective whenever I is injective (our own). Embedding each Fₓ in an injective group Iₓ gives a map from F to the product of the Sky(x, Iₓ), and it is injective because each germ shows in its own coordinate (our own). Products of injectives are injective (our own).

**Wikipedia:** [Injective sheaf](https://en.wikipedia.org/wiki/Injective_sheaf). It says: “The category of abelian sheaves has enough injective objects: this means that any sheaf is a subsheaf of an injective sheaf.”

**Paper or page:** [Injectives](https://stacks.math.columbia.edu/tag/01DG). It says: “Let X be a topological space. The category of abelian sheaves on X has enough injectives. In fact it has functorial injective embeddings.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### The canonical Godement resolution gives long exact sequences with no choices

**Remember:** Discontinuous sections are canonical and exact, so the long sequence comes free.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18G10. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** The Godement sheaf of F assigns to an open set U the product of the stalks Fₓ over x in U, that is, sections of F that need not be continuous. Repeating this on cokernels gives a canonical flasque resolution of F, and each step is an exact functor of F.

**Problem.** Godement cohomology, the cohomology of global sections of the Godement resolution, equals derived functor cohomology. Each short exact sequence of sheaves gives a natural long exact sequence of these groups.

**How the definition helps.** The construction is exact and needs no choices, so a short exact sequence of sheaves gives a short exact sequence of resolutions, and global sections ∏ₓ Fₓ keep it exact. The long exact sequence is then the usual one for complexes. The resolution is flasque, and flasque sheaves are acyclic, so these groups equal derived functor cohomology.

**Wikipedia:** [Godement resolution](https://en.wikipedia.org/wiki/Godement_resolution). It says: “This is manifestly well-defined as the resolution is canonically given for any sheaf, and since the functors Gᵏ are exact, the existence of the long exact sequence follows from a simple argument.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0FKS). It says: “functorial in ℱ such that each term f∗f\* … f∗f\*ℱ is a flasque 𝒪<sub>X</sub>-module”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Twisting by the orientation sheaf gives Poincaré duality on non-orientable manifolds

**Remember:** Twist by orientations, and duality needs no orientability.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** For an n-manifold X without boundary and a field k, the orientation sheaf o has stalk Hₙ(X, X ∖ {x}; k) at x, the local orientations at x. It is locally isomorphic to the constant sheaf k, and o shifted by n is the dualizing complex of X (our own).

**Problem.** For any n-manifold X without boundary and field k, Hʲ(X,o) is dual to compactly supported cohomology in degree n − j.

**How the definition helps.** Verdier duality pairs cohomology with coefficients in the dualizing complex against compactly supported cohomology, so no orientation is needed. Without the twist it fails on ℝP² over ℚ: H²(ℝP²; ℚ) = 0, but compactly supported H⁰ is ℚ (our own example). With the twist, H²(ℝP², o) ≅ ℚ, as duality requires.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “For any manifold X and field k, there is a sheaf o<sub>X</sub> on X, the orientation sheaf, which is locally (but perhaps not globally) isomorphic to the constant sheaf k.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Interleaving distance equals bottleneck distance for pointwise finite-dimensional modules

**Remember:** Shift the modules by ε, and the barcodes move by ε.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 3: graduate.

**Definition.** Persistence modules V and W are ε-interleaved if there are natural maps V(t) → W(t + ε) and W(t) → V(t + ε) whose composites are the structure maps from t to t + 2ε. Interleaving distance is the infimum of such ε. Bottleneck distance is the infimum of ε for which a matching of the barcodes moves matched endpoints by at most ε and leaves unmatched only intervals of length at most 2ε.

**Problem.** For real-indexed pointwise finite-dimensional persistence modules over a field, interleaving distance equals bottleneck distance between their barcodes.

**How the definition helps.** Both distances measure a shift of ε in the parameter (our own). The algebraic stability theorem bounds bottleneck distance by interleaving distance, and an ε-matching of interval summands builds an ε-interleaving for the reverse bound (our own).

**Paper or page:** [Intrinsic Bottleneck Distance for Merge Trees](https://arxiv.org/abs/2509.02755). It says: “Then the bottleneck distance between the barcode B arising from V and the barcode B′ of W is equal to the value inf{ε ≥ 0: V and W are ε-interleaved}.”

**Sources:**

- [Intrinsic Bottleneck Distance for Merge Trees, arXiv:2509.02755 (2025)](https://arxiv.org/abs/2509.02755)
- [Ulrich Bauer, Michael Lesnick, Induced matchings of barcodes and the algebraic stability of persistence, Proc. 30th Symposium on Computational Geometry (2014) 355–364](https://doi.org/10.1145/2582112.2582168)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)

### Pointwise finite-dimensional persistence modules always split into intervals

**Remember:** Finite dimension at each parameter is enough to get a barcode.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis), 16G20. arXiv math.AT, math.RT. Level 3: graduate.

**Definition.** A persistence module on S ⊆ ℝ is a functor from the ordered set S to vector spaces over a fixed field, and it is pointwise finite-dimensional if every value is finite-dimensional. An interval module is the field on one nonempty interval of S and zero elsewhere, with identity maps inside the interval.

**Problem.** Every pointwise finite-dimensional persistence module over a subset of the real line is a direct sum of interval modules. The multiset of intervals, called the barcode, is unique.

**How the definition helps.** Finite dimension at each parameter gives the chain conditions that Crawley-Boevey's theorem needs to split the module into interval modules (our own). Uniqueness of the interval multiplicities makes the barcode well defined.

**Paper or page:** [The Extended Persistent Homology Transform of manifolds with boundary](https://arxiv.org/abs/2208.14583), [Stabilization of codimension of persistence barcodes](https://arxiv.org/abs/2311.01610). It says: “A pointwise finite dimensional persistence module over any subset of ℝ admits an interval decomposition. … This decomposition is unique up to isomorphism.”

**Sources:**

- [The Extended Persistent Homology Transform of manifolds with boundary, arXiv:2208.14583 (2022)](https://arxiv.org/abs/2208.14583)
- [William Crawley-Boevey, Decomposition of pointwise finite-dimensional persistence modules, J. Algebra Appl. 14 (2015) 1550066](https://doi.org/10.1142/s0219498815500668)

### Intersection cohomology restores Poincaré duality for singular spaces

**Remember:** Chains meet the singular set only as much as perversity allows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N33 (Intersection homology and cohomology in algebraic topology), 14F43, 14F08. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** On a stratified PL pseudomanifold, a perversity p gives an integer p(k) for each singular codimension k. An intersection i-chain meets each codimension-k stratum in dimension at most i − k + p(k), and its boundary obeys the same bound with i − 1 in place of i.

**Problem.** On a compact oriented n-dimensional PL pseudomanifold without boundary, field-valued intersection homology pairs complementary degrees perfectly for complementary traditional perversities. On a compact pure-dimensional complex variety, middle perversity is self-complementary on a complex stratification, giving Poincaré duality even when ordinary cohomology lacks it.

**How the definition helps.** Complementary perversities satisfy p(k) + q(k) = k − 2, which matches the two incidence bounds in the Goresky–MacPherson duality theorem (our own). Complex strata have even real codimension, where the two middle perversities agree, so middle perversity is its own complement (our own).

**nLab:** [intersection cohomology](https://ncatlab.org/nlab/show/intersection+cohomology), [perverse sheaf](https://ncatlab.org/nlab/show/perverse+sheaf). It says: “While for smooth manifolds there is a Poincaré duality relating singular homology and singular cohomology, this fails for singular spaces.”

**Sources:**

- [Mark Goresky, Robert MacPherson, Intersection homology theory, Topology 19 (1980) 135–162](https://doi.org/10.1016/0040-9383(80)90003-8)
- [Robert MacPherson, Intersection homology and perverse sheaves, lecture notes (1990)](https://faculty.tcu.edu/gfriedman/notes/ih.pdf)

### Locally finite chains make proper maps push Borel–Moore homology forward

**Remember:** Infinite chains, but only finitely many simplices meet each compact set.

*True by definition.* MSC 55N35 (Other homology theories in algebraic topology), 55P57. arXiv math.AT. Level 3: graduate.

**Definition.** On a locally compact Hausdorff space, a locally finite singular chain is a possibly infinite formal sum of simplices in which each compact set meets only finitely many simplices with nonzero coefficient. The boundary is taken term by term, and the homology of these chains is Borel–Moore homology.

**Problem.** A continuous proper map induces a pushforward on Borel–Moore homology in the locally finite chain model. Proper means that every compact set has compact inverse image.

**How the definition helps.** Compose every simplex with f (our own). A simplex whose image meets a compact set K itself meets the compact set f⁻¹(K), so only finitely many terms meet K (our own). Composition respects faces, so this is a chain map (our own).

**Wikipedia:** [Borel–Moore homology](https://en.wikipedia.org/wiki/Borel%E2%80%93Moore_homology). It says: “the homology of the chain complex of locally finite singular chains”

**Sources:**

- [A. Borel and J. C. Moore, Homology theory for locally compact spaces (1960)](https://doi.org/10.1307/mmj/1028998385)

### The Eilenberg–Steenrod axioms prove Mayer–Vietoris once for every homology theory

**Remember:** Prove a result from the axioms, and every homology theory obeys it.

*Makes the theorem clean to state or prove.* MSC 55N40 (Axioms for homology theory and uniqueness theorems in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** An ordinary homology theory assigns graded abelian groups functorially to pairs of spaces, with natural boundary maps. It satisfies the Eilenberg–Steenrod axioms: homotopy invariance, exactness for pairs, excision, additivity and dimension, so any proof from the axioms holds in every such theory.

**Problem.** Every ordinary homology theory gives Mayer–Vietoris for open covers by two sets and computes sphere homology from its coefficient group. With nonzero coefficients, Sⁿ⁻¹ cannot retract from Dⁿ for n ≥ 1, giving Brouwer’s fixed point theorem.

**How the definition helps.** Excision and exactness give Mayer–Vietoris, and covering a sphere by two contractible caps shifts reduced homology down to the equator (our own). Induction then gives H̃ₙ₋₁(Sⁿ⁻¹) ≠ 0 with nonzero coefficients, while H̃ₙ₋₁(Dⁿ) = 0, so no retraction Dⁿ → Sⁿ⁻¹ exists (our own). A fixed-point-free map of the disk would give such a retraction by radial projection (our own).

**Wikipedia:** [Eilenberg–Steenrod axioms](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Steenrod_axioms). It says: “The axiomatic approach, which was developed in 1945, allows one to prove results, such as the Mayer–Vietoris sequence, that are common to all homology theories satisfying the axioms.”

**Sources:**

- [Samuel Eilenberg and Norman E. Steenrod, Axiomatic approach to homology theory, Proceedings of the National Academy of Sciences 31 (1945) 117–120](https://doi.org/10.1073/pnas.31.4.117)

### Cup-product intersection forms are symmetric in even and skew in odd degree

**Remember:** Swapping two classes of degree n costs the sign (−1)ⁿ.

*True by definition.* MSC 55N45 (Products and intersections in homology and cohomology), 57N65. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For a closed oriented 2n-manifold M, the intersection form pairs integral classes a,b ∈ Hⁿ(M) by evaluating a ⌣ b on \[M\].

**Problem.** The intersection form is symmetric when n is even and skew-symmetric when n is odd.

**How the definition helps.** Graded commutativity gives a ⌣ b = (−1)ⁿ² b ⌣ a for classes of degree n (our own). Evaluating on \[M\] preserves the sign, and n² has the same parity as n (our own).

**Wikipedia:** [Intersection theory](https://en.wikipedia.org/wiki/Intersection_theory). It says: “by the evaluation of the cup product on the fundamental class”

**Sources:** none listed. No primary source with a working link was found.

### Lax monoidal homology turns space multiplication into a ring

**Remember:** The lax monoidal laws carry the unit and associativity into homology.

*True by definition. Confidence: medium.* MSC 55N45 (Products and intersections in homology and cohomology), 18M05. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A lax monoidal functor F has natural maps F(A) ⊗ F(B) → F(A ⊗ B) and a map from the unit to F of the unit, satisfying the associativity and unit coherence diagrams. These diagrams are what carry a monoid in the source to a monoid in the target.

**Problem.** The homology of a topological monoid with coefficients in a commutative ring is a unital, associative graded ring. The same holds for a space with a multiplication that is associative and unital up to homotopy.

**How the definition helps.** Homology with the cross product is lax monoidal, so it carries the monoid's multiplication and its laws to a graded ring. Homotopic maps induce the same map on homology, so the laws need hold only up to homotopy (our own). The work lies in showing that the cross product is natural, associative and unital.

**nLab:** [monoidal functor](https://ncatlab.org/nlab/show/monoidal+functor). It says: “Lax monoidal functors send monoids to monoids”

**Wikipedia:** [Pontryagin product](https://en.wikipedia.org/wiki/Pontryagin_product). It says: “is a product on the homology of a topological space induced by a product on the topological space.”

**Sources:** none listed. No primary source with a working link was found.

### Equivariant formality makes fixed points carry all the Betti numbers

**Remember:** Formal means equivariant cohomology is free over the polynomial ring.

*Rules out counterexamples. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 53D20. arXiv math.SG, math.AT. Level 3: graduate.

**Definition.** A torus action on M is equivariantly formal when its rational equivariant cohomology is a free module over the polynomial ring H(BT). Equivalently, it is isomorphic as a module to H(M) tensored with H(BT).

**Problem.** For an equivariantly formal torus action on a compact manifold, the total rational Betti number of the fixed point set equals that of M. Compact Hamiltonian torus actions are equivariantly formal, so this holds for them.

**How the definition helps.** By localization, equivariant cohomology has module rank equal to the total Betti number of the fixed set; freeness makes it that of M (our own). Freeness excludes the circle rotating one factor of the 2-torus, which has no fixed points (our own). Its equivariant cohomology is that of the quotient circle, a torsion module (our own).

**Paper or page:** [Equivariant formality in complex-oriented theories](https://arxiv.org/abs/2405.05821). It says: “Let (M,ω) be a compact symplectic manifold equipped with a Hamiltonian G-action. Then M is equivariantly formal over any ℚ-algebra R.”

**Sources:** none listed. No primary source with a working link was found.

### Grading by representations gives equivariant suspension isomorphisms

**Remember:** Grade by representations, so that you can suspend by representation spheres.

*Makes the theorem clean to state or prove.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91, 19A22. arXiv math.AT. Level 3: graduate.

**Definition.** For a compact Lie group G, RO(G) is the group of formal differences of finite-dimensional real G-representations, added by direct sum. Grading by RO(G) gives a degree shift by each representation V, to match suspension by the representation sphere Sⱽ, the one-point compactification of V.

**Problem.** In genuine reduced G-equivariant cohomology, Ẽᴳᵅ(X) ≅ Ẽᴳᵅ⁺ⱽ(Sⱽ ∧ X) for every pointed G-space X, degree α and finite-dimensional real G-representation V. The action on Sⱽ may be nontrivial.

**How the definition helps.** The suspension axiom of a genuine theory says that suspension by Sⱽ is an isomorphism shifting degree by V. Grading by RO(G) is what makes the degree α + V exist.

**nLab:** [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “this leads one to demand that E• is graded not just by the integers, but by any linear representation V, so that one has equivariant suspension isomorphisms”

**Sources:**

- [J. P. May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### The Borel construction gives free actions the cohomology of their quotient

**Remember:** Multiply by contractible EG before taking the quotient.

*True by definition. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55R10. arXiv math.AT. Level 3: graduate.

**Definition.** The Borel construction of a G-space X is (X × EG)/G with the diagonal action, where EG is a contractible space with a free G-action. Borel equivariant cohomology of X is the ordinary cohomology of this space.

**Problem.** Let P → B be a principal G-bundle, so G acts freely on P with quotient B and the map is locally a product. Then the Borel equivariant cohomology of P is the ordinary cohomology of B.

**How the definition helps.** For a free action, the projection (P × EG)/G → B is a fibre bundle with contractible fibre EG (our own). So the projection is a weak equivalence and an isomorphism on singular cohomology (our own).

**nLab:** [Borel equivariant cohomology](https://ncatlab.org/nlab/show/Borel+equivariant+cohomology). It says: “For X a space and G a group acting on it, then the Borel equivariant cohomology of X is the cohomology of the homotopy quotient X//G.”

**Sources:** none listed. No primary source with a working link was found.

### Viewing equivariant cohomology as a module makes localization to fixed points statable

**Remember:** Equivariant cohomology carries polynomial coefficients, so torsion can be thrown away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 53D20. arXiv math.AT, math.SG. Level 3: graduate.

**Definition.** For a torus T, rational equivariant cohomology is a module over the polynomial ring H(BT), the equivariant cohomology of a point. This lets one discard torsion, the classes killed by some nonzero polynomial.

**Problem.** Let a torus act on a compact manifold M with fixed point set F. Restriction from M to F has torsion kernel and cokernel, so it becomes an isomorphism after inverting the nonzero polynomials.

**How the definition helps.** The statement needs a coefficient ring that can be localized, and ordinary cohomology offers nothing to invert (our own). Away from F every stabilizer is a proper subgroup, and there are finitely many, so one nonzero polynomial kills the equivariant cohomology there (our own). Integrating the inverse map gives the Atiyah–Bott–Berline–Vergne formula (our own).

**Wikipedia:** [Localization formula for equivariant cohomology](https://en.wikipedia.org/wiki/Localization_formula_for_equivariant_cohomology). It says: “The localization theorem states that the equivariant cohomology can be recovered, up to torsion elements, from the equivariant cohomology of the fixed point subset.”

**Sources:**

- [M. F. Atiyah and R. Bott, The moment map and equivariant cohomology, Topology 23 (1984) 1–28](https://doi.org/10.1016/0040-9383(84)90021-1)

### The path-space test makes Hurewicz cofibrations stable under pushout

**Remember:** A homotopy extension problem becomes a square against path evaluation.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A map A → X is a Hurewicz cofibration if it has the homotopy extension property for every space Y. In compactly generated spaces a homotopy into Y is a map into the path space of Y, so this is a left lifting property against evaluation at time zero.

**Problem.** In compactly generated spaces, the pushout of a Hurewicz cofibration along any map is a Hurewicz cofibration.

**How the definition helps.** Maps defined by a left lifting property are always stable under pushout (our own explanation). A lifting square for the pushout restricts to one for the original map, and its filler extends over the pushout by the pushout's universal property.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “A map (continuous function) i : A → X between topological spaces is a Hurewicz cofibration if it satisfies the homotopy extension property for all spaces”

**Sources:**

- [A. Strøm, Note on cofibrations, Mathematica Scandinavica 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### The retraction criterion makes products of cofibrations with spaces cofibrations

**Remember:** Multiply the retraction by the identity on Y.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** A closed inclusion A ⊆ X is a Hurewicz cofibration exactly when X × \[0,1\] retracts onto X × {0} ∪ A × \[0,1\]. So one map, the retraction, witnesses the homotopy extension property for all targets.

**Problem.** Let A → X be a closed Hurewicz cofibration in compactly generated spaces. For every compactly generated Y, the product inclusion Y × A → Y × X is a Hurewicz cofibration.

**How the definition helps.** The identity of Y times that retraction is a retraction of Y × X × \[0,1\] onto Y × (X × {0} ∪ A × \[0,1\]) (our own). Compactly generated spaces form a cartesian closed category, so Y × (−) preserves the gluing that builds this subspace.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “to yield a retract that exhibits the cofibration property of Y × i.”

**Sources:** none listed. No primary source with a working link was found.

### Weak Hausdorff spaces make every Hurewicz cofibration closed

**Remember:** Every compact Hausdorff test space has closed image.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 54D50. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A space is weak Hausdorff if every map from a compact Hausdorff space into it has closed image. In particular every point is closed, which rules out spaces such as the indiscrete two-point space (our own).

**Problem.** In compactly generated weak Hausdorff spaces, the image of every Hurewicz cofibration is closed. So the retraction and NDR-pair characterizations, proved for closed inclusions, apply to every cofibration.

**How the definition helps.** The closed-image theorem holds in compactly generated weak Hausdorff spaces, so the closed-inclusion criteria apply to every cofibration. The condition is needed: the point inclusion into the indiscrete two-point space is a cofibration with nonclosed image (our own).

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “In the category of weakly Hausdorff compactly generated spaces, the image i(A) of a Hurewicz cofibration is always closed.”

**Sources:**

- [Arne Strøm, Note on cofibrations, Math. Scand. 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### Well-pointed groups make plain and fat realization agree

**Remember:** Include the identity as a closed cofibration.

*True by definition. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 18N50, 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** A topological group is well-pointed if the inclusion of its identity element is a closed Hurewicz cofibration, a closed inclusion with the homotopy extension property. Each degeneracy of its nerve inserts the identity, so well-pointedness controls all degeneracies (our own).

**Problem.** For a well-pointed topological group in compactly generated weak Hausdorff spaces, the plain geometric realization of its nerve is homotopy equivalent to the fat realization. So the plain realization computes the homotopy colimit.

**How the definition helps.** Products with a space preserve closed Hurewicz cofibrations here, so every degeneracy is a closed cofibration and the nerve is good (our own). Segal's comparison theorem for good simplicial spaces then identifies fat and plain realization up to homotopy equivalence (our own).

**nLab:** [well-pointed topological space](https://ncatlab.org/nlab/show/well-pointed+topological+space). It says: “These facts explain the key role of well-pointedness in classifying space-theory, where it ensures that plain topological realization of simplicial topological spaces coincides, up to weak homotopy equivalence, with fat geometric realization”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics, 2008](https://doi.org/10.4171/048)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312, appendix A](https://doi.org/10.1016/0040-9383(74)90022-6)

### Defining weak homotopy type by zigzags makes it an equivalence relation

**Remember:** Join spaces by weak equivalences pointing either way.

*True by definition.* MSC 55P15 (Classification of homotopy type), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A weak homotopy equivalence induces a bijection on path components and isomorphisms on every positive homotopy group at every base point. Two spaces have the same weak homotopy type if a finite zigzag of weak homotopy equivalences joins them.

**Problem.** The relation "X and Y have the same weak homotopy type" is an equivalence relation.

**How the definition helps.** Identity maps give reflexivity, reversing the list of arrows gives symmetry, and joining lists gives transitivity (our own).

**nLab:** [weak homotopy equivalence](https://ncatlab.org/nlab/show/weak+homotopy+equivalence). It says: “There is a continuous function S¹ → 𝕊 which is a weak homotopy equivalence, hence in particular π₁(𝕊) ≃ ℤ. But every continuous map the other way round has to induce the trivial map on π₁.”

**Sources:**

- [Michael C. McCord, Singular homology groups and homotopy groups of finite topological spaces, Duke Math. J. 33 (1966) 465–474](https://doi.org/10.1215/S0012-7094-66-03352-7)

### Spanier–Whitehead duality is monoidal duality in the stable homotopy category

**Remember:** The S-dual of a spectrum is its dual object for the smash product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P25 (Spanier-Whitehead duality), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** In a symmetric monoidal category, a dual of X is an object D with maps D ⊗ X → 1 and 1 → X ⊗ D whose two zigzag composites are the identities of X and D. Spanier–Whitehead duality is this duality for the smash product of spectra, with the sphere spectrum as unit. The trace of a map is coevaluation, then the map with a swap of factors, then evaluation (our own).

**Problem.** Atiyah duality identifies the S-dual of Σ∞₊X for a closed smooth manifold X with the Thom spectrum of its stable normal bundle. The trace of the identity on Σ∞₊X equals the Euler characteristic of X.

**How the definition helps.** Atiyah duality identifies the dual of Σ∞₊X with the Thom spectrum of the stable normal bundle (our own). The stable Lefschetz trace formula evaluates the trace of the identity as the Euler characteristic (our own).

**nLab:** [Spanier-Whitehead duality](https://ncatlab.org/nlab/show/Spanier-Whitehead+duality). It says: “Using this one shows that the trace on the identity on Σ<sup>∞</sup>₊X -- its categorical dimension -- is the Euler characteristic of X.”

**Sources:**

- [Albrecht Dold, Dieter Puppe, Duality, trace and transfer, Proceedings of the Steklov Institute of Mathematics 1984, issue 4 (translation of Trudy Mat. Inst. Steklov 154 (1983)); earlier version in Proc. Int. Conf. Geometric Topology, Warsaw 1978, PWN (1980) 81–102](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/doldpup2.pdf)
- [Edwin H. Spanier, J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/S002557930000070X)

### Groupoid models of BG make free loop components classifying spaces of centralizers

**Remember:** Each conjugacy class contributes the classifying space of its centralizer.

*True by definition.* MSC 55P35 (Loop spaces), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** For a discrete group G, the conjugation groupoid has the elements g of G as objects and an arrow h from g to hgh⁻¹ for each h, composed by multiplying labels. It is the groupoid of functors from ℤ to G and their natural isomorphisms, which models free loops in BG (our own).

**Problem.** The free loop space of BG, the space of all maps from the circle to BG, has one component for each conjugacy class of G. The component of g is homotopy equivalent to BC(g). Here the centralizer C(g) is the subgroup of elements that commute with g.

**How the definition helps.** Its connected components are the conjugacy classes, and the arrows from g to itself form the centralizer C(g) (our own). A connected groupoid is equivalent to the automorphism group of one object, so each component has classifying space BC(g) (our own).

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “This shows that the hom-groupoid is the action groupoid of the conjugation action”

**Sources:** none listed. No primary source with a working link was found.

### Defining cofibers as homotopy pushouts makes the second cofiber a suspension

**Remember:** Collapse Y after attaching the cone, and only the suspension remains.

*True by definition.* MSC 55P40 (Suspensions), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f : X → Y of pointed spaces, the homotopy cofiber C(f) is the homotopy pushout of Y ← X → ∗; concretely, attach the cone on X to Y along f. Two homotopy pushout squares placed side by side form a homotopy pushout (our own).

**Problem.** Let X and Y be well-pointed, meaning that the inclusion of the base point is a cofibration. Then the homotopy cofiber of the inclusion Y → C(f) is homotopy equivalent to the reduced suspension ΣX.

**How the definition helps.** Pasting the square for C(f) with the square for the cofiber of Y → C(f) gives a homotopy pushout of ∗ ← X → ∗ (our own). That pointed homotopy pushout is the reduced suspension ΣX.

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “to the terminal object is the suspension object”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.3, cofibration sequences](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Adding infinite spectra makes Brown representability hold in the stable homotopy category

**Remember:** Brown attaches infinitely many cells, so allow infinite spectra.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** The stable homotopy category of spectra enlarges the Spanier–Whitehead category of finite CW complexes and their formal desuspensions. It adds infinite spectra, so every family of spectra, even an infinite one, has a wedge.

**Problem.** Let h be a contravariant functor from the stable homotopy category to abelian groups. If h turns wedges into products and cofiber sequences into exact sequences, then h(X) ≅ \[X, E\] for some spectrum E.

**How the definition helps.** Brown's proof builds the representing spectrum E by attaching cells infinitely often, so it needs infinite spectra and arbitrary wedges (our own). The Spanier–Whitehead category lacks these wedges, and the nLab notes that the theorem fails there.

**nLab:** [Spanier-Whitehead category](https://ncatlab.org/nlab/show/Spanier-Whitehead+category). It says: “As a consequence, in particular a Brown representability theorem does not hold in the SW-category.”

**Wikipedia:** [Brown's representability theorem](https://en.wikipedia.org/wiki/Brown%27s_representability_theorem). It says: “A similar statement does, however, hold for spectra instead of CW complexes.”

**Sources:**

- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Dualizable spectra are exactly the finite spectra

**Remember:** Finite means having a dual means maps out commute with wedges.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 18G80. arXiv math.AT. Level 3: graduate.

**Definition.** A spectrum X is dualizable when it has a dual DX, with maps DX ∧ X → S and S → X ∧ DX for the sphere spectrum S that satisfy the two triangle identities. It is compact when maps out of it, \[X, −\], turn every wedge of spectra into the direct sum of the groups.

**Problem.** A spectrum is dualizable exactly when it is compact, and both conditions hold exactly for the finite spectra. So finiteness, which depends on a cell structure, becomes a property of the object in the stable homotopy category.

**How the definition helps.** Duality turns maps out of X into smashing with DX, which commutes with wedges, so dualizable spectra are compact (our own). Finite spectra are dualizable, because the sphere is and duals survive cofibre sequences and retracts (our own). A compact spectrum is a retract of a finite stage of its cell filtration, and such a retract is finite (our own).

**nLab:** [dualizable object](https://ncatlab.org/nlab/show/dualizable+object). It says: “a spectrum is dualizable in the stable homotopy category with its smash product precisely if it is a finite spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### For orthogonal spectra, naive stable homotopy groups detect stable equivalences

**Remember:** Continuous O(n) symmetries, unlike discrete permutations, keep the naive homotopy groups honest.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55Q10. arXiv math.AT. Level 3: graduate.

**Definition.** An orthogonal spectrum is a sequence of based spaces Xₙ with structure maps Xₙ ∧ Sᵐ → Xₙ₊ₘ, where each Xₙ has a continuous action of the orthogonal group O(n), not only of a discrete symmetric group. The structure maps are O(n) × O(m)-equivariant for the block-sum action, respect iteration, and are the identity for m = 0.

**Problem.** A map of orthogonal spectra is a stable equivalence exactly when it is an isomorphism on the naive stable homotopy groups πₙ(X) = colimₖ πₖ₊ₙ(Xₖ).

**How the definition helps.** The quotients O(q)/O(q − n) are Stiefel manifolds that become highly connected as q grows, and this makes the naive groups detect stable equivalences (our own). For symmetric spectra the matching quotients of symmetric groups are discrete (our own). There the map λ from F₁S¹ to F₀S⁰ is a stable equivalence that the naive groups miss (our own).

**nLab:** [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum), [Model categories of diagram spectra](https://ncatlab.org/nlab/show/Model+categories+of+diagram+spectra), [semistable symmetric spectrum](https://ncatlab.org/nlab/show/semistable+symmetric+spectrum). It says: “Among the various (now) common models for spectra, this issue is unique to symmetric spectra”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Spanier–Whitehead duality makes Alexander duality a formal consequence

**Remember:** A set and its complement are dual, so homology becomes cohomology.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** A Spanier–Whitehead dual of a spectrum A is a spectrum D with maps D ∧ A → S and S → A ∧ D for the sphere spectrum S that satisfy the two triangle identities. For a compact neighbourhood retract X in Sⁿ, the reduced spectrum of Sⁿ ∖ X, shifted by n − 1, is a dual of that of X (our own).

**Problem.** Let X be a proper, nonempty compact neighbourhood retract in the sphere Sⁿ. Then H̃ᵢ(Sⁿ ∖ X) ≅ H̃ⁿ⁻ⁱ⁻¹(X) for reduced homology and cohomology (Alexander duality).

**How the definition helps.** Homology with coefficients in a spectrum turns into cohomology of its dual, so applying the integral Eilenberg–MacLane spectrum gives Alexander duality. The shift n − 1 produces the complementary degree n − i − 1 (our own).

**Wikipedia:** [Spanier–Whitehead duality](https://en.wikipedia.org/wiki/Spanier%E2%80%93Whitehead_duality). It says: “Taking homology and cohomology with respect to an Eilenberg–MacLane spectrum recovers Alexander duality formally.”

**Sources:**

- [Edwin H. Spanier and J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/s002557930000070x)

### Flat ring spectra make the Adams E₂-term an Ext of comodules

**Remember:** If E∗E is flat, E-homology carries a coaction of E∗E.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55T15, 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** A homotopy commutative ring spectrum E is flat when E∗E = π∗(E ∧ E) is a flat module over E∗ = π∗E. Then E∗(E ∧ X) ≅ E∗E ⊗ E∗X over E∗, and this gives each E∗X a coaction of E∗E (our own).

**Problem.** Suppose E is flat and E∗X is projective over E∗. Then (E∗, E∗E) is a Hopf algebroid. The E-Adams spectral sequence for maps X → Y has E₂-term given by comodule Ext from E∗X to E∗Y.

**How the definition helps.** Flatness turns iterated E-homology into iterated tensor products, so (E∗, E∗E) is a Hopf algebroid and each E∗X is a comodule (our own). When E∗X is projective over E∗, the Adams cobar complex computes comodule Ext from E∗X to E∗Y (our own).

**nLab:** [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “the d₁-cohomology of the first page computes the Ext-groups from the E-homology of Y to the E-homology of X, regarded as E•(E)-comodules.”

**Sources:**

- [Douglas Ravenel, A novice's guide to the Adams–Novikov spectral sequence, in Geometric Applications of Homotopy Theory II, Lecture Notes in Mathematics 658, Springer 1978](https://doi.org/10.1007/BFb0068728)

### Modules over the Eilenberg–MacLane ring spectrum HR are chain complexes

**Remember:** Homotopy only in degree zero, so HR-modules are chain complexes.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 18G80, 13D09. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For a ring R, the Eilenberg–MacLane ring spectrum HR has π₀HR = R and no other homotopy groups. A left HR-module is a spectrum M with a unital, coherently associative action HR ∧ M → M.

**Problem.** For every ring R, HR-module spectra and unbounded chain complexes of R-modules have Quillen equivalent model structures. So the homotopy category of HR-modules is the derived category D(R).

**How the definition helps.** Both theories are stable and generated by one free module whose derived endomorphisms have homotopy only in degree zero, equal to Rᵒᵖ for left modules (our own). The Schwede–Shipley Morita theorem then identifies the two module theories (our own).

**nLab:** [stable Dold-Kan correspondence](https://ncatlab.org/nlab/show/stable+Dold-Kan+correspondence). It says: “For R any ring (or ringoid, even) there is a Quillen equivalence H R ModSpectra ≃ Ch<sub>•</sub>(R Mod) between a model category of H R-module spectra over the Eilenberg-MacLane spectrum H R and the model structure on unbounded chain complexes”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)
- [Brooke Shipley, HZ-algebra spectra are differential graded algebras, American Journal of Mathematics 129 (2007) 351–379](https://doi.org/10.1353/ajm.2007.0014)

### Segal's condition makes Γ-spaces model infinite loop spaces

**Remember:** X of n points is n copies of X of one point.

*Makes the theorem clean to state or prove.* MSC 55P47 (Infinite loop spaces), 55P48, 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** A Γ-space X is a functor from finite pointed sets to spaces. It is special when the n collapse maps from n points to one point, each keeping one point, give weak equivalences X(n) → X(1)ⁿ for all n ≥ 0. It is very special when, in addition, π₀X(1) is a group under the induced multiplication.

**Problem.** For a special Γ-space X, the maps of finite pointed sets give X(1) a multiplication that is unital, associative and commutative up to coherent homotopy. If X is very special, X presents an infinite loop space (Segal's theorem).

**How the definition helps.** The fold map from n points to one point, read through X(n) ≃ X(1)ⁿ, gives a multiplication that is coherently commutative (our own). Segal's recognition theorem deloops X(1) repeatedly when its components form a group (our own).

**nLab:** [Gamma-space](https://ncatlab.org/nlab/show/Gamma-space). It says: “In order for this to be valid, and thus for X to present an infinite loop space, a Γ-space must satisfy the further condition that all the Segal maps … are weak equivalences.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Grouplike Eₖ-algebras are exactly the k-fold loop spaces

**Remember:** Loops in a k-cube multiply in any arrangement of small cubes.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** An Eₖ-algebra is a space with a multiplication for every arrangement of disjoint small k-dimensional cubes inside one big cube, that is, an action of the little k-cubes operad. It is grouplike when its components π₀ form a group.

**Problem.** A space is a k-fold loop space up to homotopy exactly when it is a grouplike Eₖ-algebra (May 1972).

**How the definition helps.** A k-fold loop space consists of maps from a k-cube that send its boundary to the base point. So loops can run inside the small cubes, and reversing a loop gives inverses (our own). May's recognition theorem gives the converse for grouplike Eₖ-algebras in spaces.

**nLab:** [May recognition theorem](https://ncatlab.org/nlab/show/May+recognition+theorem), [little cubes operad](https://ncatlab.org/nlab/show/little+cubes+operad), [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis). It says: “iterated loop spaces as "grouplike" En-algebras in the classical homotopy theory of spaces (∞Grpd)”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer (1972)](https://doi.org/10.1007/BFb0067491)
- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)

### Shape theory sees the Warsaw circle as a circle

**Remember:** See a space through its thickenings, which close up its gaps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P55 (Shape theory). arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** Embed the compact metric space X in the Hilbert cube. Its shape is the system of homotopy types of its open neighbourhoods, linked by the inclusions of smaller into larger ones, taken as a pro-homotopy type.

**Problem.** Shape agrees with homotopy type on ANRs. The Warsaw circle has the shape of the circle S¹, although its weak homotopy type sees no circle.

**How the definition helps.** Shape sees only neighbourhoods, and the Warsaw circle has arbitrarily small nested annular neighbourhoods whose inclusions are homotopy equivalences, so its shape is S¹ (our own explanation). For a compact absolute neighbourhood retract, the neighbourhood system is pro-homotopy equivalent to the space itself (our own explanation).

**nLab:** [shape theory](https://ncatlab.org/nlab/show/shape+theory), [Warsaw circle](https://ncatlab.org/nlab/show/Warsaw+circle). It says: “the weak homotopy type fails to give useful information for 'bad' spaces, of which classical examples include the Warsaw Circle”

**Sources:**

- [S. Mardešić, J. Segal, Shapes of compacta and ANR-systems, Fund. Math. 72 (1971) 41–59](https://doi.org/10.4064/fm-72-1-41-59)

### Completion as localization gives every spectrum an arithmetic fracture square

**Remember:** Rationalize at Sℚ and take the product of all prime completions.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** Rationalization is localization at the rational sphere Sℚ, and profinite completion is the product over all primes p of localizations at the mod-p Moore spectrum S/p. Here localization at E is the universal map from X to a spectrum Z with \[Y, Z\] = 0 whenever E ∧ Y ≃ 0.

**Problem.** For every spectrum X, the square formed by X, its rationalization, its profinite completion and the rationalization of that completion is a homotopy pullback. For spaces the same square needs extra hypotheses, such as nilpotence.

**How the definition helps.** Because both corners are localizations, the square is a pullback once the completion map and its rationalization have the same fibre. That fibre is S(ℚ/ℤ)-acyclic, so it is rational and rationalization leaves it unchanged, for every X (our own outline). The work is Bousfield's theorem that S(ℚ/ℤ)-localization is the product of the p-completions.

**nLab:** [fracture theorem](https://ncatlab.org/nlab/show/fracture+theorem). It says: “the arithmetic fracture theorem says that stable homotopy types (and suitably tame plain homotopy types) canonically decompose into their rationalization and their p-completion for all primes p”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Defining p-completion as Moore spectrum localization gives an Ext formula

**Remember:** Complete at p by making maps from S/p-acyclic spectra vanish.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** For a prime p, let S/p be the mod-p Moore spectrum, the cofibre of multiplication by p on the sphere spectrum. The p-completion of X is its universal map to a spectrum Z that S/p-acyclic spectra cannot see: \[Y, Z\] = 0 whenever S/p ∧ Y ≃ 0.

**Problem.** For every spectrum X, the p-completion of X is the function spectrum F(Σ⁻¹Sℤ/p∞, X), with Sℤ/p∞ the Moore spectrum of the Prüfer group ℤ/p∞. Its homotopy fits into a short exact sequence 0 → Ext(ℤ/p∞, πₙX) → πₙ(completion) → Hom(ℤ/p∞, πₙ₋₁X) → 0.

**How the definition helps.** Bousfield shows that F(Σ⁻¹Sℤ/p∞, X) is S/p-local and that X maps to it by an S/p-equivalence, so the universal property makes it the completion. The universal coefficient sequence for maps out of a Moore spectrum then gives the exact sequence (our own explanation).

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “The localization of spectra at the Moore spectrum S𝔽ₚ is given by the mapping spectrum out of S⁻¹ℤ/p<sup>∞</sup>”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Localization at a set of primes works well for nilpotent spaces

**Remember:** Abelian layers, each with unique qth roots for primes outside T.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** Fix a set T of primes; a nilpotent group is T-local when x ↦ x<sup>q</sup> is a bijection for every prime q outside T. A connected space is nilpotent when π₁ is nilpotent and acts nilpotently on each higher πₙ, so its Postnikov tower refines into layers with abelian fibres (our own).

**Problem.** For a nilpotent CW space, three conditions agree: being local for homology equivalences with ℤ localized at T, having T-local homotopy groups, and having T-local integral homology groups. Every such space has a localization, unique up to homotopy, that localizes its homotopy and homology groups.

**How the definition helps.** Nilpotence lets one localize the space one abelian layer at a time, and the three tests agree layer by layer (our own explanation). Sullivan's nilpotent localization theorem makes this precise and builds the localization. Outside nilpotent spaces these definitions can differ, as the nLab notes.

**nLab:** [localization of a space](https://ncatlab.org/nlab/show/localization+of+a+space), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “For non-nilpotent spaces, there are multiple inequivalent definitions of localization”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)
- [Emmanuel Dror, A generalization of the Whitehead theorem, Symposium on Algebraic Topology, Lecture Notes in Mathematics 249, Springer (1971) 13–22](https://doi.org/10.1007/BFb0060891)

### Localizing at a subring of ℚ just tensors homotopy groups with it

**Remember:** Inverting primes in the sphere inverts them in every homotopy group.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P62. arXiv math.AT. Level 3: graduate.

**Definition.** For a unital subring R ⊆ ℚ, let SR be the sphere spectrum with the primes invertible in R inverted. SR-localization is the universal map from X to a spectrum Z with \[Y, Z\] = 0 whenever SR ∧ Y ≃ 0.

**Problem.** For a subring R of ℚ, the SR-localization of every spectrum X is X ∧ SR, and its homotopy groups are πₙX ⊗ R. For R = ℚ this is rationalization, and the rational stable homotopy category is equivalent to graded ℚ-vector spaces.

**How the definition helps.** Smashing with SR inverts the same primes on every homotopy group, so πₙ(X ∧ SR) = πₙX ⊗ R by filtered colimits (our own outline). The map X → X ∧ SR is an SR-equivalence since SR ∧ SR ≃ SR, and its target is an SR-module, hence SR-local. For R = ℚ, Serre's finiteness theorem makes Sℚ the rational Eilenberg–MacLane spectrum, whose modules are graded rational vector spaces.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “For G a group without torsion, then localization at the Moore spectrum E = SG (in particular p-localization) is smashing”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Restricting to E-local spectra makes every E-equivalence an equivalence

**Remember:** Local spectra cannot tell an E-equivalence from an isomorphism.

*Rules out counterexamples.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a spectrum E. A map f is an E-equivalence when it is an isomorphism on E-homology, and a spectrum X is E-local when every E-equivalence f induces a bijection \[f, X\] on homotopy classes of maps into X.

**Problem.** An E-equivalence between two E-local spectra is an equivalence. Hence the E-localization X → LX, the universal map from X to an E-local spectrum, is unique up to unique equivalence.

**How the definition helps.** An E-local spectrum cannot tell an E-equivalence from an isomorphism, so the Yoneda lemma inverts an E-equivalence between local spectra. For f from X to Y, \[f, X\] gives a left inverse g, and \[f, Y\] makes g a right inverse (our own outline). Without locality the claim fails: multiplication by 2 on the sphere spectrum is a rational isomorphism but not an equivalence (our own example).

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “for every E-equivalence f then \[f,X\]• is an isomorphism;”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Minimal Sullivan models are unique and show the rational homotopy groups

**Remember:** Differentials only make products, so the generators are the homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A simply connected minimal Sullivan algebra over ℚ is a free graded-commutative algebra on generators of degree at least 2, with a differential of degree +1 that squares to zero. The differential sends each generator to sums of products of at least two earlier generators, so it has no linear part.

**Problem.** Finite-type simply connected minimal Sullivan algebras classify simply connected rational homotopy types of finite type up to isomorphism. The degree-n generator space is dual to the nth rational homotopy group.

**How the definition helps.** With no linear part in the differential, a quasi-isomorphism between minimal algebras is an isomorphism, so the model is unique and its generators are invariants. Any Sullivan model gives the rational homotopy type, but non-minimal ones are far from unique. The deep part is Sullivan's theorem that these algebras model rational homotopy types.

**nLab:** [Sullivan model](https://ncatlab.org/nlab/show/Sullivan+model). It says: “Conversely, every rational space can be obtained from a dg-algebra and the minimal Sullivan algebras provide convenient representatives that correspond bijectively to rational homotopy types under this correspondence.”

**Sources:**

- [D. Sullivan, Infinitesimal computations in topology, Publications Mathématiques de l'IHÉS 47 (1977)](https://doi.org/10.1007/BF02684341)
- [K. Hess, Rational homotopy theory: a brief introduction, arXiv:math/0604626](https://arxiv.org/abs/math/0604626)

### Rational homotopy theory needs nilpotent spaces of finite type

**Remember:** Nilpotence bars acyclic spaces that forms would mistake for a point.

*Rules out counterexamples.* MSC 55P62 (Rational homotopy theory), 55P60. arXiv math.AT. Level 3: graduate.

**Definition.** A connected space X is nilpotent when π₁X is a nilpotent group and acts nilpotently on each higher πₙX, so the action is trivial on the quotients of some finite filtration of πₙX. It has finite rational type when its rational homology is finite-dimensional in each degree.

**Problem.** For nilpotent spaces of finite rational type, piecewise polynomial forms identify rational homotopy types contravariantly with the corresponding finite-type minimal Sullivan algebras up to isomorphism.

**How the definition helps.** Nilpotence excludes classifying spaces of nontrivial acyclic groups, whose rational cohomology agrees with that of a point (our own explanation). Such groups are perfect, so their lower central series never reaches the identity (our own explanation). Sullivan's classification theorem then gives the equivalence on the stated class.

**nLab:** [rational homotopy theory](https://ncatlab.org/nlab/show/rational+homotopy+theory), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “But by Hurewicz theorem asking that all spaces be simply connected precisely makes all "acyclic spaces" be contractible.”

**Sources:**

- [Dennis Sullivan, Infinitesimal computations in topology, Publ. Math. IHÉS 47 (1977) 269–331](https://doi.org/10.1007/BF02684341)
- [A. K. Bousfield, V. K. A. M. Gugenheim, On PL de Rham theory and rational homotopy type, Memoirs of the AMS 179 (1976)](https://doi.org/10.1090/memo/0179)
- [Daniel Quillen, Rational homotopy theory, Annals of Mathematics 90 (1969) 205–295](https://doi.org/10.2307/1970725)

### Brown representability needs connected pointed spaces

**Remember:** Wedges to products, pushouts to weak pullbacks, on connected pointed spaces.

*Makes the theorem clean to state or prove.* MSC 55P65 (Homotopy functors in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A Brown functor is a contravariant functor from the homotopy category of connected pointed CW complexes to pointed sets that turns arbitrary wedges into products. On every homotopy pushout, two elements that agree on the common part must both come from one element on the pushout.

**Problem.** Brown representability says that every Brown functor is representable: F is \[−, Y\], the homotopy classes of maps into some space Y. In particular, a spectrum represents every additive reduced generalized cohomology theory.

**How the definition helps.** Brown's cell-by-cell construction of Y works on connected pointed CW complexes, and the nLab notes that the theorem fails for pointed non-connected or for unpointed spaces. Freyd and Heller's nonsplitting example concerns the unpointed homotopy category (our own clarification). Applying the theorem in each degree of a reduced cohomology theory gives spaces linked by loop equivalences, a spectrum (our own explanation).

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “In particular, there is no Brown representability theorem for functors from the homotopy category of pointed not-necessarily-connected spaces to pointed sets, or for functors from the homotopy category of unpointed spaces to sets.”

**Sources:**

- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)
- [Peter Freyd, Alex Heller, Splitting homotopy idempotents II, J. Pure Appl. Algebra 89 (1993) 93–106](https://doi.org/10.1016/0022-4049(93)90088-b)
- [J. F. Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

### Testing weak equivalences on all fixed points gives Elmendorf's theorem

**Remember:** Test a G-map on the fixed points of every subgroup.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N40. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a compact Lie group G. A G-map f is a weak G-equivalence when, for every closed subgroup H, its restriction fᴴ to the points fixed by H is a weak homotopy equivalence. These fixed points Xᴴ are the G-maps from G/H to X, so they form a presheaf on the orbits G/H (our own).

**Problem.** Elmendorf's theorem says that G-equivariant homotopy theory is equivalent to the homotopy theory of presheaves of spaces on the orbit category of G. The orbit category has the spaces G/H as objects.

**How the definition helps.** The fixed-point presheaf lives on the orbit category, and its objectwise weak equivalences are exactly the weak G-equivalences (our own explanation). Elmendorf's theorem supplies the inverse construction up to homotopy.

**nLab:** [Elmendorf's theorem](https://ncatlab.org/nlab/show/Elmendorf%27s+theorem), [fine model structure on topological G-spaces](https://ncatlab.org/nlab/show/fine+model+structure+on+topological+G-spaces). It says: “For general G, Elmendorf's theorem asserts that the fine equivariant model structure is Quillen equivalent to the model category of simplicial presheaves on the orbit category of G.”

**Sources:**

- [A. D. Elmendorf, Systems of fixed point sets, Trans. Amer. Math. Soc. 277 (1983) 275–284](https://doi.org/10.1090/S0002-9947-1983-0690052-0)

### Moore paths have variable length, so they compose strictly

**Remember:** Let each path keep its own length, and lengths just add.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 55R05, 18F60. arXiv math.AT. Level 3: graduate.

**Definition.** A Moore path in X is a path with its own length r ≥ 0: a map γ from \[0,∞) to X that is constant on \[r,∞). Compose two paths with matching endpoints by running one after the other and adding their lengths.

**Problem.** Moore paths in a space form a strict category, with strictly associative composition and strict units. The Moore path space factors each map functorially into a trivial Hurewicz cofibration followed by a Hurewicz fibration.

**How the definition helps.** Concatenation places each path at the same time under either bracketing, and inserting a length-zero path changes nothing (our own explanation). The Moore mapping path factorization sends each starting point to the length-zero path and evaluates paths at their endpoints. Barthel and Riehl establish the required Hurewicz cofibration and fibration properties.

**nLab:** [Moore path category](https://ncatlab.org/nlab/show/Moore+path+category), [schedule](https://ncatlab.org/nlab/show/schedule). It says: “The classical Moore path category of a topological space X is a variant on the usual space of paths I → X, but one which yields a strict category (even an internal †-category in Top).”

**Sources:**

- [Tobias Barthel, Emily Riehl, On the construction of functorial factorizations for model categories, Algebr. Geom. Topol. 13 (2013), arXiv:1204.5427](https://arxiv.org/abs/1204.5427)

### The cube definition of homotopy groups makes them abelian from dimension two

**Remember:** Two directions of gluing cubes force one commutative sum.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 3: graduate.

**Definition.** For n ≥ 1, πₙ(X) is the set of homotopy classes of maps from the cube \[0,1\]ⁿ to X that send the boundary to the base point, using homotopies that fix the boundary. Multiply two classes by placing their cubes side by side along a coordinate; when n ≥ 2 there are at least two coordinates to choose from.

**Problem.** For n ≥ 2, the homotopy group πₙ(X) is abelian.

**How the definition helps.** The two coordinate directions give two products with the same unit, the constant map (our own explanation). Splitting a cube into four rectangles gives the interchange law, so the Eckmann–Hilton argument makes the products equal and commutative.

**Wikipedia:** [Homotopy group](https://en.wikipedia.org/wiki/Homotopy_group). It says: “Equivalently, define πₙ(X) to be the group of homotopy classes of maps”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Defining stable homotopy groups as a colimit makes suspension an isomorphism

**Remember:** Suspending first only skips the first term of the sequence.

*True by definition.* MSC 55Q10 (Stable homotopy groups), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a based space X, the stable homotopy group πₙˢ(X) is the colimit of πₙ₊ₖ(ΣᵏX) under reduced suspension, over the k ≥ 0 with n + k ≥ 2.

**Problem.** Suspension gives a natural isomorphism from πₙˢ(X) to πₙ₊₁ˢ(ΣX).

**How the definition helps.** Suspending X and raising n by one gives a cofinal tail of the same sequence (our own explanation). Its colimit is naturally the original colimit.

**nLab:** [homotopy group of a spectrum](https://ncatlab.org/nlab/show/homotopy+group+of+a+spectrum). It says: “Given a pointed topological space X, its stable homotopy groups are the colimit of ordinary homotopy groups of its reduced suspensions”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Chapter 4, Corollary 4.24](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Suspension spectra defined by adjunction give stable homotopy exact sequences

**Remember:** Suspension spectra preserve cofibers, and cofibers in spectra are also fibers.

*True by definition. Confidence: medium.* MSC 55Q10 (Stable homotopy groups), 55P42, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** The suspension spectrum functor sends a pointed space to a spectrum and is left adjoint to taking a spectrum's zeroth space, so it preserves homotopy cofibre sequences. The stable homotopy groups of the space are the homotopy groups of its suspension spectrum.

**Problem.** For a pointed CW pair A ⊆ X, the stable homotopy groups of A, X and X/A form a long exact sequence.

**How the definition helps.** As a left adjoint, the suspension spectrum functor turns the cofibre sequence A → X → X/A of the CW pair into a cofibre sequence of spectra (our own explanation). In spectra every cofibre sequence is also a fibre sequence, so its homotopy groups form a long exact sequence.

**nLab:** [stabilization](https://ncatlab.org/nlab/show/stabilization). It says: “Under mild conditions, notably when C is a presentable (∞,1)-category, this functor has a left adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Defining Whitehead products by attaching maps makes them obstructions to extension

**Remember:** The attaching map is the only obstruction to filling the top cell.

*True by definition.* MSC 55Q15 (Whitehead products and generalizations), 55S36. arXiv math.AT. Level 3: graduate.

**Definition.** The product Sᵐ × Sⁿ is the wedge Sᵐ ∨ Sⁿ with one cell of dimension m + n attached by a map w. For based maps f and g from these spheres to X, the Whitehead product \[f, g\] is the class of (f ∨ g) ∘ w.

**Problem.** For m, n ≥ 1, the map f ∨ g on the wedge extends to Sᵐ × Sⁿ exactly when \[f, g\] = 0.

**How the definition helps.** An extension must fill the top disk along (f ∨ g) ∘ w (our own explanation). Such a filling is exactly a nullhomotopy of the composite, whose class is the Whitehead product.

**nLab:** [Whitehead product](https://ncatlab.org/nlab/show/Whitehead+product). It says: “as the result of a cell attachment to the wedge sum”

**Sources:** none listed. No primary source with a working link was found.

### Cup-product Hopf invariants scale by d² under degree-d target maps

**Remember:** Scaling the lower generator by d scales its square by d².

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For n ≥ 2 and f: S²ⁿ⁻¹ → Sⁿ, attach an oriented 2n-cell to Sⁿ along f to form C(f). The Hopf invariant H(f) is the integer with α ∪ α = H(f)β. Here α and β are the integral cohomology generators of C(f) in degrees n and 2n given by the oriented sphere and the oriented cell.

**Problem.** Let n ≥ 2 and let g: Sⁿ → Sⁿ have degree d. Then H(g ∘ f) = d² H(f).

**How the definition helps.** The cone map C(f) → C(g ∘ f) uses g on the sphere and the identity on the disk (our own explanation). Its pullback multiplies the lower generator by d and preserves the top generator. Naturality of cup products gives H(g ∘ f)β = (dα) ∪ (dα) = d²H(f)β.

**nLab:** [Hopf invariant](https://ncatlab.org/nlab/show/Hopf+invariant). It says: “there exists an integer HI(f) which expresses the cup product square”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.B, Exercise 1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### The cup-square Hopf invariant vanishes for odd target dimensions

**Remember:** In odd degree, reversing the cup square changes its sign.

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For n &gt; 1 and φ: S²ⁿ⁻¹ → Sⁿ, attach an oriented 2n-cell to Sⁿ along φ. The Hopf invariant h(φ) is the integer with α ⌣ α = h(φ)β, where α and β generate the integral cohomology in degrees n and 2n.

**Problem.** For odd n &gt; 1, every map from the (2n−1)-sphere to the n-sphere has Hopf invariant zero.

**How the definition helps.** An odd-degree class α satisfies α ⌣ α = −α ⌣ α by graded commutativity, so 2h(φ)β = 0 (our own proof). Since β generates a copy of ℤ, h(φ) = 0.

**Wikipedia:** [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The integer h(φ) is the Hopf invariant of the map φ.”

**Sources:**

- [Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. Mathematische Annalen 104, 637–665.](https://doi.org/10.1007/BF01457962)

### Defining Toda brackets as sets makes their indeterminacy a coset

**Remember:** Take every choice at once, and the bracket becomes a well-defined coset.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q35. arXiv math.AT. Level 3: graduate.

**Definition.** Take composable based maps f: W → X, g: X → Y and h: Y → Z with gf and hg nullhomotopic, and choose a based nullhomotopy of each. Gluing h applied to the first with the second precomposed with f gives a map SW → Z. The Toda bracket ⟨f, g, h⟩ is the set of all such homotopy classes, over all choices.

**Problem.** For stable maps, the Toda bracket ⟨f, g, h⟩ is a coset of the subgroup h ∘ \[SW, Y\] + \[SX, Z\] ∘ Sf. So it is a well-defined element of the quotient of \[SW, Z\] by that subgroup.

**How the definition helps.** Because the bracket collects all choices, a change of choice only moves the class. Changing the nullhomotopy of gf adds exactly the elements of h ∘ \[SW, Y\], and changing that of hg adds exactly those of \[SX, Z\] ∘ Sf (our own explanation). Stable mapping groups are abelian, so all choices form one coset of the sum.

**Wikipedia:** [Toda bracket](https://en.wikipedia.org/wiki/Toda_bracket). It says: “Changing these maps changes the Toda bracket by adding elements of h \[SW,Y\] and \[SX,Z\]C<sub>f</sub>.”

**Sources:**

- [H. Toda, Composition Methods in Homotopy Groups of Spheres, Annals of Mathematics Studies 49, Princeton University Press, 1962](https://doi.org/10.1515/9781400882625)

### Defining homotopy fibers as pullbacks makes base change preserve them

**Remember:** Pulling back to a point in two steps gives the same fiber.

*True by definition.* MSC 55R05 (Fiber spaces in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** For g: C → D and d ∈ D, the homotopy fiber over d is the homotopy pullback of C → D ← {d}. Its points are pairs (c,γ) with γ a path from g(c) to d.

**Problem.** Suppose a square with maps f: A → B, g: C → D and h: B → D is a homotopy pullback. Then for each b in B, the homotopy fiber of f over b is equivalent to the homotopy fiber of g over h(b).

**How the definition helps.** Pasting the pullback over b to the given homotopy pullback computes the homotopy pullback over h(b). The homotopy pullback pasting law therefore identifies the two fibers.

**nLab:** [homotopy pullback](https://ncatlab.org/nlab/show/homotopy+pullback). It says: “which implies the claim by the pasting law for (homotopy) pullbacks.”

**Paper or page:** [Lemma 7.8.](https://hott.github.io/book/hott-online-82-g578b85c.pdf). It says: “is a pullback square and let b : B. Then fib<sub>f</sub>(b) ≃ fib<sub>g</sub>(h(b)).”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory, Chapter 7](https://hott.github.io/book/hott-online-82-g578b85c.pdf)

### Defining Serre fibrations by disk lifting gives lifting for all CW complexes

**Remember:** Lift one disk at a time.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** A Serre fibration is a map p: E → B that lifts homotopies of disks: every homotopy Dⁿ × \[0,1\] → B lifts to E once a lift at time 0 is given.

**Problem.** A Serre fibration lifts every homotopy of a CW complex, once a lift at time 0 is given.

**How the definition helps.** A CW complex is built from disks, so extend the lift one skeleton at a time (our own argument). On each cell the lift is given on the bottom and sides of the cylinder, a pair homeomorphic to the bottom alone, so disk lifting extends it. The CW topology glues the compatible lifts.

**nLab:** [Serre fibration](https://ncatlab.org/nlab/show/Serre+fibration). It says: “A Serre fibration has the right lifting property against all retracts”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.2](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Schedules glue Hurewicz fibrations over numerable covers

**Remember:** A timetable says which open set the path is in, and when.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55R70. arXiv math.AT. Level 3: graduate.

**Definition.** Fix an open cover of B. A schedule for a path on \[0,1\] splits \[0,1\] into successive closed intervals and assigns an open set of the cover to each. The path fits it when each interval of positive length maps into its assigned set.

**Problem.** Suppose B has a locally finite numerable open cover. If p: Y → B restricts to a Hurewicz fibration over each cover member, then p is a Hurewicz fibration.

**How the definition helps.** A schedule tells a path when to switch from one local lift to the next, so the local fibrations can be chained along it (our own explanation). Dyer and Eilenberg's schedule theorem makes this choice continuous in the path, which gives a global lifting rule.

**nLab:** [schedule](https://ncatlab.org/nlab/show/schedule), [Hurewicz connection](https://ncatlab.org/nlab/show/Hurewicz+connection). It says: “The original motivation for the notion of schedules was to prove the globalisation theorem for (Hurewicz) fibrations.”

**Sources:**

- [Eldon Dyer, Samuel Eilenberg, Globalizing fibrations by schedules, Fundamenta Mathematicae 130 (1988) 125–136](https://doi.org/10.4064/fm-130-2-125-136)

### The homotopy kernel of a homotopy kernel is a loop space

**Remember:** Pulling the point back along itself gives loops, not nothing.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P35, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a pointed ∞-category with finite limits, the kernel of f: A → B is the homotopy pullback ker(f) = A ×<sub>B</sub> \*. The loop object ΩB is the base point pulled back along itself, \* ×<sub>B</sub> \*.

**Problem.** The homotopy kernel of ker(f) → A is equivalent to ΩB. Iteration gives the long fiber sequence … → ΩA → ΩB → ker(f) → A → B.

**How the definition helps.** Pasting the two pullback squares shows that the kernel of ker(f) → A is \* ×<sub>B</sub> \*, which is ΩB by definition. An ordinary kernel of a kernel is trivial, but a homotopy pullback of the point along itself gives loops. The nLab notes that the loops come out reversed.

**nLab:** [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “in contrast to the ordinary kernel of a kernel, which is necessarily trivial, the homotopy kernel of a homotopy kernel is typically far from trivial, but is a loop space object.”

**Sources:**

- [R. M. Switzer, Algebraic Topology — Homotopy and Homology, Springer (1975)](https://doi.org/10.1007/978-3-642-61923-6)

### The path model of homotopy fibers makes fibers over joined points equivalent

**Remember:** Extend the path to move the endpoint of a homotopy fiber.

*True by definition.* MSC 55R05 (Fiber spaces in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** For f: A → B and b ∈ B, the homotopy fiber over b is the space of pairs (a, γ) with γ a path from f(a) to b. It has the subspace topology from A times the path space of B.

**Problem.** If a path joins two points b and b′ of B, then the homotopy fibers over b and b′ are homotopy equivalent.

**How the definition helps.** Appending a path δ from b to b′ moves each pair into the fiber over b′, and appending the reversed path gives a map back (our own argument). Contracting each backtracking segment and reparametrizing gives the two inverse homotopies.

**Wikipedia:** [Homotopy fiber](https://en.wikipedia.org/wiki/Homotopy_fiber). It says: “their homotopy fibers are homotopy equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Numerable bundles let the classification theorems work over every base space

**Remember:** Numerable means the trivializing cover comes with a partition of unity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R10. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An open cover is numerable when it has a subordinate partition of unity. A fibre bundle is numerable when it is trivial over each set of some numerable open cover.

**Problem.** Over any base B, homotopy classes of maps B → BG classify isomorphism classes of numerable principal G-bundles. The projection of every numerable fibre bundle is a Hurewicz fibration.

**How the definition helps.** A partition of unity on the trivializing cover gives the weights to build the classifying map B → BG (our own explanation). Dold's theorem on numerable covers glues the local fibrations into a global Hurewicz fibration.

**nLab:** [numerable fiber bundle](https://ncatlab.org/nlab/show/numerable+fiber+bundle), [numerable open cover](https://ncatlab.org/nlab/show/numerable+open+cover). It says: “For the theory of fiber bundles to be well-behaved one typically needs to restrict to those that have a local trivialization not just over any open cover but over a numerable open cover”

**Sources:**

- [Albrecht Dold, Partitions of unity in the theory of fibrations, Ann. of Math. 78 (1963) 223–255](https://doi.org/10.2307/1970341)

### The universal first Chern class classifies complex line bundles

**Remember:** BU(1) is K(ℤ,2), so line bundles are degree-two classes.

*True by definition.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R40, 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** The universal first Chern class is the generator of H²(BU(1); ℤ) with value −1 on ℂP¹ for the tautological line, and as a map BU(1) → K(ℤ,2) it is a weak equivalence. The first Chern class of a line bundle is the pullback of this class along a classifying map.

**Problem.** For a CW complex X, the first Chern class is a bijection from isomorphism classes of complex line bundles on X to H²(X, ℤ).

**How the definition helps.** Line bundles on X are maps X → BU(1) up to homotopy, and classes in H²(X; ℤ) are maps X → K(ℤ,2), so composing with the equivalence c₁ is a bijection (our own proof). The work lies in building both classifying spaces and showing that c₁ is an equivalence.

**nLab:** [first Chern class](https://ncatlab.org/nlab/show/first+Chern+class). It says: “As a universal characteristic class, the first Chern class is the weak homotopy equivalence c₁ : BU(1) ≃→ K(ℤ,2).”

**Sources:** none listed. No primary source with a working link was found.

### Defining Thom spaces by compactification turns exterior sums into smash products

**Remember:** One point at infinity turns products into smash products.

*True by definition.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a finite-dimensional vector bundle V over a compact Hausdorff base, its Thom space Th(V) is the one-point compactification of the total space: V with one point at infinity added.

**Problem.** Let V → X and W → Y be vector bundles over compact Hausdorff bases. The Thom space of their exterior sum over X × Y, whose total space is V × W, is homeomorphic to Th(V) ∧ Th(W).

**How the definition helps.** The product V⁺ × W⁺ contains V × W as an open subspace (our own explanation). Collapsing its complement gives a compact Hausdorff space with one point at infinity. The collapsed complement consists exactly of pairs with a base point, which defines the smash product.

**nLab:** [Thom space](https://ncatlab.org/nlab/show/Thom+space). It says: “For X a compact topological space, Th(V) is a model for the one-point compactification of the total space V.”

**Sources:** none listed. No primary source with a working link was found.

### Naturality identifies characteristic classes with classes on the classifying space

**Remember:** A natural class is fixed by its value on the universal bundle.

*True by definition.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** For a topological group G, the universal bundle over BG classifies principal G-bundles over CW complexes by pullback, along maps unique up to homotopy. A characteristic class assigns a cohomology class to each bundle and commutes with pullback.

**Problem.** On CW complexes, degree-k characteristic classes of principal G-bundles with fixed coefficients correspond bijectively to degree-k cohomology classes on BG.

**How the definition helps.** Every bundle is a pullback of the universal bundle, so naturality fixes a characteristic class by its value there, a class on BG. Conversely, pulling a class on BG back along classifying maps defines a characteristic class, and homotopy invariance makes it independent of the map (our own proof). The work is building the universal bundle and proving that it classifies bundles.

**Wikipedia:** [Characteristic class](https://en.wikipedia.org/wiki/Characteristic_class). It says: “Once the cohomology H\*(BG) was calculated, once and for all, the contravariance property of cohomology meant that characteristic classes for the bundle would be defined in H\*(X) in the same dimensions.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Represented cohomology classifies operations by classes on Eilenberg–MacLane spaces

**Remember:** An operation is determined by its value on the universal class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A cohomology operation is a natural map from one cohomology functor to another. Here degree n cohomology with coefficients π is represented: it is homotopy classes of maps to K(π,n), the space whose only homotopy group is π in degree n.

**Problem.** Let π and G be abelian groups and let n and q be positive. On CW complexes, natural operations from degree n with coefficients π to degree q with coefficients G correspond to degree q classes on K(π,n).

**How the definition helps.** This is the Yoneda lemma: a natural operation is fixed by its value on the universal class, the identity map of K(π,n). Every input class is a pullback of the universal class, so naturality sends it to the pullback of that value, and any degree q class on K(π,n) defines an operation this way.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “by the Yoneda lemma, (non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Wikipedia:** [Cohomology operation](https://en.wikipedia.org/wiki/Cohomology_operation). It says: “Cohomology of CW complexes is representable by an Eilenberg–MacLane space, so by the Yoneda lemma a cohomology operation of type (n,q,π,G) is given by a homotopy class of maps K(π,n) → K(G,q).”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Representing cohomology by Eilenberg–MacLane spaces makes operations classes on K(G,m)

**Remember:** Evaluate the operation once, on the fundamental class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** For abelian G and m &gt; 0, let K(G,m) be a connected CW complex whose only nonzero homotopy group is πₘ ≅ G. On CW complexes X, homotopy classes of maps X → K(G,m) are the classes in Hᵐ(X;G), and the identity map of K(G,m) gives the universal class ι.

**Problem.** For abelian G and H, natural operations Hᵐ(−;G) → Hⁿ(−;H) on CW complexes correspond to classes in Hⁿ(K(G,m);H). The correspondence sends Θ to Θ(ι), where ι is the universal degree-m class.

**How the definition helps.** With a representing space, the Yoneda lemma fixes a natural operation by its value on the universal class ι. Each class α is ϕ\*(ι) for a map ϕ: X → K(G,m), so Θ(α) = ϕ\*(Θ(ι)), and the operations need not be additive. The work moves to the theorem that maps to K(G,m) represent cohomology.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “(non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Theorem 4.57](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)
- [Allen Hatcher, Algebraic Topology, §4.L, Proposition 4L.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### Admissible sequences of small excess give the cohomology of K(ℤ/2, n)

**Remember:** Excess below n names exactly the free polynomial generators.

*Makes the theorem clean to state or prove.* MSC 55S10 (Steenrod algebra), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A finite sequence I of positive integers is admissible when each term is at least twice the next. Its excess is the first term minus the sum of the others, and the empty sequence stands for the identity, with excess zero. By instability, Sqᴵ(ιₙ) is zero when the excess exceeds n and a square when it equals n (our own).

**Problem.** For n ≥ 1, let ιₙ be the fundamental mod 2 class on K(ℤ/2,n). Its mod 2 cohomology is polynomial on Sqᴵ(ιₙ) for admissible I of excess less than n.

**How the definition helps.** Instability removes the composites of excess above n and makes those of excess n into squares (our own explanation). Serre's spectral sequence computation shows that the remaining admissible composites, including ιₙ itself, are free polynomial generators.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “where I is an admissible sequence, form a basis (the Serre–Cartan basis) for the mod 2 Steenrod algebra, called the admissible basis.”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Defining squares through the total power makes the Cartan formula multiplicativity

**Remember:** Squares are coefficients of the total power, which is multiplicative.

*True by definition.* MSC 55S10 (Steenrod algebra), 55S05. arXiv math.AT. Level 3: graduate.

**Definition.** For a degree-n mod 2 class a on X, Steenrod's equivariant square restricted along the diagonal gives a total power P(a) in H\*(ℝP∞ × X) = H\*(X)\[x\], with x of degree 1. Define Sqⁱ(a) as the coefficient of xⁿ⁻ⁱ in P(a), so Sqⁱ(a) = 0 when n − i is negative.

**Problem.** The squares defined this way satisfy the Cartan formula: Sqᵏ(a ∪ b) is the sum of Sqⁱ(a) ∪ Sqʲ(b) over i + j = k. They also satisfy Sqⁱ(a) = 0 for i &gt; n and Sqⁿ(a) = a ∪ a.

**How the definition helps.** Steenrod’s total power construction is multiplicative, so comparing coefficients in P(ab) = P(a)P(b) gives the Cartan formula (our own explanation). Negative exponents give zero for i &gt; n. The constant coefficient restricts the external square along the ordinary diagonal, giving Sqⁿ(a) = a ∪ a.

**nLab:** [power operation](https://ncatlab.org/nlab/show/power+operation). It says: “the second (symmetric) power of a ∈ H(X,ℤ₂) is an element in H•(ℝP∞ × X, ℤ₂) ≃ H•(X,ℤ₂)\[x\] and the coefficients of this polynomial in x are the Steenrod operations on a.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the coproduct by Cartan's formula makes the dual Steenrod algebra commutative

**Remember:** The Cartan formula is symmetric, so the dual Steenrod algebra commutes.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** The mod 2 Steenrod algebra A has the Cartan coproduct, the algebra map that sends each Sqᵏ to the symmetric sum of Sqⁱ ⊗ Sqʲ over i + j = k. The dual Steenrod algebra takes its product from the dual of this coproduct.

**Problem.** The Steenrod algebra is cocommutative, so the dual Steenrod algebra is a commutative algebra. The Steenrod algebra itself is not commutative, since Sq¹Sq² = Sq³ but Sq²Sq¹ is a different basis element.

**How the definition helps.** Swapping the tensor factors fixes the defining sum for each Sqᵏ, and both coproducts are algebra maps, so they agree everywhere. Duality then makes the dual algebra commutative, while the Adem relations tell the two compositions in A apart (our own explanation).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “It is also a Hopf algebra, so that in particular there is a diagonal or comultiplication map ψ: A → A ⊗ A induced by the Cartan formula for the action of the Steenrod algebra on the cup product.”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)

### Making the total square a ring map computes squares on projective space

**Remember:** Sq of x is x plus x², so take powers.

*True by definition.* MSC 55S10 (Steenrod algebra). arXiv math.AT. Level 3: graduate.

**Definition.** The total square Sq(a) = ∑ᵢ Sqⁱ(a) on mod 2 cohomology is a finite sum, because Sqⁱ(a) vanishes when i exceeds the degree of a. The Cartan formula makes Sq a ring map.

**Problem.** In H\*(ℝP∞; 𝔽₂) = 𝔽₂\[x\], with x in degree 1, the square Sqⁱ(xⁿ) is the binomial coefficient C(n, i) mod 2 times xⁿ⁺ⁱ.

**How the definition helps.** A ring map is fixed by its value on the generator, and the axioms give Sq(x) = x + x². So Sq(xⁿ) = (x + x²)ⁿ, and the binomial theorem gives Sqⁱ(xⁿ) as the part of degree n + i.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The Cartan relation implies that the total square Sq := Sq⁰ + Sq¹ + Sq² + ⋯ is a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Via Sqⁿ, Hopf invariant one forces n to be 2ᵏ

**Remember:** Odd Hopf invariant means Sqⁿ acts, so n must be 2ᵏ.

*True by definition.* MSC 55S10 (Steenrod algebra), 55Q25. arXiv math.AT. Level 3: graduate.

**Definition.** For n ≥ 2, attach an oriented 2n-cell to Sⁿ along f: S²ⁿ⁻¹ → Sⁿ. The Hopf invariant H(f) is the integer with a ∪ a = H(f)b, where a and b generate the integral cohomology in degrees n and 2n. Modulo 2, a ∪ a is Sqⁿ(a), so H(f) is odd exactly when Sqⁿ is nonzero on the cone.

**Problem.** For n ≥ 2, an odd Hopf invariant for f: S²ⁿ⁻¹ → Sⁿ forces n to be a power of two.

**How the definition helps.** If n is not a power of two, the Adem relations write Sqⁿ as a sum of composites of smaller positive squares. Each composite passes through a degree strictly between n and 2n, where the cone has no cohomology, so Sqⁿ(a) = 0 and H(f) is even (our own explanation).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra), [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The proof uses the fact that each Sqᵏ is decomposable for k which is not a power of 2; that is, such an element is a product of squares of strictly smaller degree.”

**Sources:**

- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)
- [J. F. Adams, On the non-existence of elements of Hopf invariant one, Annals of Mathematics 72 (1960) 20–104](https://doi.org/10.2307/1970147)

### Truncation keeps lower cutoff

**Remember:** Once only lower groups matter, an earlier higher cutoff makes no difference.

*True by definition.* MSC 55S45 (Postnikov systems, k-invariants), 55P15. arXiv math.AT. Level 3: graduate.

**Definition.** The n-truncation of a space is its universal map to an n-type, a space with no homotopy groups above degree n: every map to an n-type factors through it, uniquely up to homotopy.

**Problem.** Truncating first at one nonnegative degree and then at another is equivalent to truncating once at the lower degree.

**How the definition helps.** If the lower cutoff comes second, test maps into lower types and apply the two universal properties (our own argument). If it comes first, the result already satisfies the higher cutoff, so the second truncation fixes it.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “Under mild conditions there is for each n a universal way to send an arbitrary object A to its n-truncation”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Example 4.16 and §4.3, Postnikov Towers](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### A contractible path space forces the homology of loops on a sphere

**Remember:** Contract every based path by shortening it toward its starting point.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** The path space PX of a pointed space X is the space of paths that start at the base point. Evaluating a path at its end point is a fibration PX → X whose fibre is the loop space ΩX. The space PX is contractible, because each path can be shrunk back along itself.

**Problem.** For n ≥ 1 and i ≥ 0, Hᵢ(ΩSⁿ⁺¹;ℤ) ≅ ℤ if n divides i and is zero otherwise.

**How the definition helps.** Contractibility leaves only the degree-zero corner at the limit of the homology Serre spectral sequence. Its two columns force dₙ₊₁ to identify Hⱼ(ΩSⁿ⁺¹) with Hⱼ₊ₙ(ΩSⁿ⁺¹) for every j ≥ 0 (our own explanation). The bottom row starts with ℤ, and degrees strictly between zero and n have no incoming differential.

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “However, since the path space is contractible, we know that by the time the sequence gets to E∞, everything becomes 0 except for the group at p = q = 0.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Classes restricting to a fibre basis make the Serre spectral sequence collapse

**Remember:** Classes on the whole space that restrict to a fibre basis cannot be killed.

*Rules out counterexamples.* MSC 55T10 (Serre spectral sequences), 55R20. arXiv math.AT. Level 3: graduate.

**Definition.** Let F → E → B be a fibre bundle over a connected base, with coefficients in a field k. The fibre is totally non-homologous to zero when restriction H\*(E; k) → H\*(F; k) is onto, that is, some classes on E restrict on each fibre to a basis of its cohomology.

**Problem.** For a fibre bundle over a path-connected CW base, assume restriction onto H\*(F;k) is surjective and each fibre cohomology group is finite-dimensional. For any graded linear section s, the assignment b ⊗ f ↦ p\*(b) ∪ s(f) identifies H\*(B;k) ⊗ H\*(F;k) with H\*(E;k) as H\*(B;k)-modules.

**How the definition helps.** Classes on E that restrict to a fibre basis are permanent cycles, so by the Leibniz rule every differential vanishes and the spectral sequence collapses (our own summary). The H\*(B)-module structure then solves the extension problem, so H\*(E) is free over H\*(B). The Hopf fibration S¹ → S³ → S² shows the need, because H¹(S³) = 0 cannot map onto H¹(S¹) (our own example).

**nLab:** [Leray-Hirsch theorem](https://ncatlab.org/nlab/show/Leray-Hirsch+theorem). It says: “The Leray-Hirsch theorem states sufficient fiberwise condition for the ordinary cohomology of the total space of a fiber bundle with coefficients in a commutative ring to be free module over the cohomology ring of the base space.”

**Wikipedia:** [Leray–Hirsch theorem](https://en.wikipedia.org/wiki/Leray%E2%80%93Hirsch_theorem). It says: “In other words, if for every p, there exist classes c₁,ₚ, …, cₘₚ,ₚ ∈ Hᵖ(E) that restrict, on each fiber F, to a basis of the cohomology in degree p, the map given below is then an isomorphism of H\*(B) modules.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002)](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

### Derivation differentials compute the cohomology ring of complex projective space

**Remember:** Know d on the generator, and Leibniz gives d on everything.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** A multiplicative cohomological spectral sequence has a bigraded algebra on each page, with product induced from the previous page. Each differential is a derivation: d(xy) = d(x)y + (−1)ʲx d(y) for x of total degree j.

**Problem.** The integral cohomology ring of complex projective space is H\*(ℂPⁿ; ℤ) = ℤ\[x\]/(xⁿ⁺¹) with x in degree 2. Letting n grow gives H\*(ℂP∞; ℤ) = ℤ\[x\].

**How the definition helps.** Because differentials are derivations, the differential that sends the fibre generator of the circle bundle S¹ → S²ⁿ⁺¹ → ℂPⁿ to x acts as multiplication by x (our own calculation). The sphere has no cohomology in degrees 1 to 2n, so multiplication by x is an isomorphism up to degree 2n, and xⁿ⁺¹ = 0 since ℂPⁿ has dimension 2n. The finite calculations stabilize degreewise for ℂP∞.

**nLab:** [multiplicative spectral sequence](https://ncatlab.org/nlab/show/multiplicative+spectral+sequence). It says: “A spectral sequence is called multiplicative or a spectral ring if there is a bi-graded algebra structure on each page such that the differentials act as graded derivations of total degree 1.”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “We then see that d(ix) = x² by the Leibniz rule telling us that the 4,0 coordinate must be x² since there can be no nontrivial homology until degree 2n + 1.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Killing π₃ with K(ℤ,3) makes π₄ of the 3-sphere a homology group

**Remember:** Take the fibre of the map detecting π₃, then apply Hurewicz.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** The 3-connected cover of S³ is the homotopy fibre X of a map S³ → K(ℤ,3) that is an isomorphism on π₃, so X keeps the higher homotopy groups of S³ and loses π₃. It fibres over S³ with fibre ΩK(ℤ,3) ≃ ℂP∞.

**Problem.** The fourth homotopy group of the 3-sphere is π₄(S³) ≅ ℤ/2. With the Hopf fibration S¹ → S³ → S², this also gives π₄(S²) ≅ ℤ/2.

**How the definition helps.** X is 3-connected with π₄(X) = π₄(S³), so Hurewicz turns π₄(S³) into H₄(X) (our own outline). In the Serre sequence of ℂP∞ → X → S³, 3-connectivity forces d₃(a) = ι, so d₃(a²) = 2aι, H⁴(X) = 0 and H⁵(X) ≅ ℤ/2. Universal coefficients give H₄(X) ≅ ℤ/2, and the Hopf fibration identifies π₄(S²) with π₄(S³).

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “But now since we killed off the lower homotopy groups of X (i.e., the groups in degrees less than 4) by using the iterated fibration, we know that H₄(X) = π₄(X) by the Hurewicz theorem”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Local coefficients let the Serre spectral sequence work over any connected base

**Remember:** Loops in the base twist the fibre's cohomology; local coefficients keep track.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N25. arXiv math.AT. Level 3: graduate.

**Definition.** A local coefficient system on B assigns an abelian group to each point and an isomorphism to each homotopy class of paths, compatibly with constant paths and concatenation. The fibre cohomology Hᵗ(F) forms one by transport along paths, so it records how loops in the base act on the fibre.

**Problem.** Every Serre fibration F → E → B over a path-connected base has a spectral sequence from Hᵖ(B; Hᵗ(F)), with local coefficients, to H\*(E). When π₁(B) acts trivially on H\*(F), for example when B is simply connected, the E₂ term is ordinary cohomology.

**How the definition helps.** The twisted coefficients absorb the action of π₁(B), so the theorem needs no hypothesis on it. Serre's construction filters E by the parts over the skeleta of B, and its first page is the cellular cochain complex of B with these coefficients (our own summary). When the action is trivial, the coefficients are constant and E₂ is ordinary cohomology.

**nLab:** [Serre spectral sequence](https://ncatlab.org/nlab/show/Serre+spectral+sequence). It says: “such that the canonical group action of the fundamental group π₁(X) on the ordinary cohomology of the fiber F is trivial (for instance if X is a simply connected topological space)”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “Strictly speaking, what is meant is cohomology with respect to the local coefficient system on B given by the cohomology of the various fibers. Assuming for example, that B is simply connected, this collapses to the usual cohomology.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Orientable fibrations multiply Euler characteristics

**Remember:** Every loop acts trivially on fibre cohomology.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55R20. arXiv math.AT. Level 3: graduate.

**Definition.** A fibration over a path-connected base is orientable over a field K when moving the fibre around any loop in the base acts as the identity on its cohomology over K.

**Problem.** If B is path-connected, the fibration is orientable over K and the homology of B and F is finite-dimensional, then χ(E) = χ(F)·χ(B).

**How the definition helps.** Orientability makes E₂ = H\*(B) ⊗ H\*(F), so its Euler characteristic is χ(B)·χ(F). Taking homology does not change the Euler characteristic, so E∞ has the same value (our own summary). E∞ is the associated graded of H\*(E), so χ(E) = χ(B)·χ(F).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If p: E → B is a fibration with fiber F, with the base B path-connected, and the fibration is orientable over a field K, then the Euler characteristic with coefficients in the field K satisfies the product property”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Serre classes make the Hurewicz theorem hold modulo finite groups

**Remember:** Count finite groups as zero, and Hurewicz still holds.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** A Serre class is a family 𝒞 of abelian groups that contains 0 and is closed under subgroups, quotients and extensions, such as the finite abelian groups. A map is an isomorphism modulo 𝒞 when its kernel and cokernel lie in 𝒞, so groups in 𝒞 count as zero.

**Problem.** For i,n ≥ 1 with i ≠ n, πᵢ(Sⁿ) is finite, except that π₄ₖ₋₁(S²ᵏ) is ℤ plus a finite group. For simply connected X and n ≥ 2, finiteness of every πᵢ(X) below n makes the nth Hurewicz map an isomorphism modulo finite groups.

**How the definition helps.** With finite groups counted as zero, the Hurewicz argument goes through while ignoring finite kernels and cokernels (our own explanation). Serre's spectral sequence argument applies this to successive connected covers of spheres. Finite generation and the rational cohomology of K(ℤ,n) then give the exceptional degrees.

**Wikipedia:** [Homotopy groups of spheres](https://en.wikipedia.org/wiki/Homotopy_groups_of_spheres). It says: “Jean-Pierre Serre showed that homotopy groups of spheres are all finite except for those of the form πₙ(Sⁿ) or π₄ₙ₋₁(S²ⁿ) (for positive n), when the group is the product of the infinite cyclic group with a finite abelian group.”

**Sources:**

- [Jean-Pierre Serre, Groupes d'homotopie et classes de groupes abéliens, Annals of Mathematics 58 (1953) 258–294](https://doi.org/10.2307/1969789)

### The Euler class as a transgression gives the Gysin sequence at once

**Remember:** The Euler class is where the one differential sends the fibre class.

*True by definition.* MSC 55T10 (Serre spectral sequences), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** For an oriented Sᵏ-bundle with k ≥ 1, the Euler class e is the image of the orientation's fibre generator u under the differential dₖ₊₁ of the cohomology Serre spectral sequence. The E₂ page has only the rows q = 0 and q = k, so this one differential carries all the information.

**Problem.** An oriented Sᵏ-bundle over a path-connected CW base has a long exact integral Gysin sequence. Its terms include Hⁿ(B) → Hⁿ⁺ᵏ⁺¹(B) → Hⁿ⁺ᵏ⁺¹(E) → Hⁿ⁺¹(B). The first arrow cups with e, and the second pulls back along the projection.

**How the definition helps.** A spectral sequence with only two rows unrolls into a long exact sequence. By the Leibniz rule dₖ₊₁(b·u) = ±b ∪ e, so the connecting map is cup with e, and the sequence is the Gysin sequence. That this e equals the Euler class defined by the Thom class is a separate theorem (our own remark).

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence), [Gysin homomorphism](https://en.wikipedia.org/wiki/Gysin_homomorphism). It says: “We see that the only non-trivial differentials are given on the E₂ᵣ-page and are defined by cupping with the Euler class e(ℰ).”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Transgression as a coboundary makes it commute with Steenrod squares

**Remember:** Transgression is coboundary then pullback, and squares commute with both.

*True by definition. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Over 𝔽₂, a fibre class x ∈ Hᵗ(F) of a based fibration p transgresses to y ∈ Hᵗ⁺¹(B,{b}) when its coboundary δx in Hᵗ⁺¹(E,F) is pulled back from the base, δx = p\*y. So transgression is built only from the coboundary δ and the pullback p\*, and Steenrod squares commute with both.

**Problem.** If x transgresses to y, then each Steenrod square Sqⁱx transgresses to Sqⁱy. With this, Serre computes H\*(K(ℤ/2, n); 𝔽₂) as a polynomial ring on the classes Sqᴵιₙ with I admissible of excess below n.

**How the definition helps.** Apply Sqⁱ to δx = p\*y: since Sqⁱ commutes with δ and with p\*, it gives δ(Sqⁱx) = p\*(Sqⁱy) (our own summary). Serre's theorem that this transgression is the differential of the spectral sequence, with Borel's theorem on transgressive generators, then gives the cohomology of the Eilenberg–MacLane spaces.

**nLab:** [transgression](https://ncatlab.org/nlab/show/transgression). It says: “This construction really exhibits transgression as a special case of the connecting homomorphism in cohomology”

**Wikipedia:** [Spectral sequence](https://en.wikipedia.org/wiki/Spectral_sequence). It says: “The transgression is a partially defined map (more precisely, a map from a subobject to a quotient)”

**Sources:**

- [Jean-Pierre Serre, Cohomologie modulo 2 des complexes d'Eilenberg-MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Transgressive exterior generators make classifying space cohomology polynomial

**Remember:** Each exterior generator upstairs transgresses to one polynomial generator downstairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** A fibre class of degree t is transgressive when it survives to page t+1 of the cohomology Serre spectral sequence, so its only possible differential jumps straight to the base row; a base class representing that image is a transgression. A simple system of generators is a set of classes whose ordered products over finite subsets, the empty product included, form a basis.

**Problem.** Suppose E is contractible, B simply connected, and H\*(F;k) has finite type over a field k with odd-degree transgressive simple generators. Then H\*(B;k) is polynomial on chosen transgressions of those generators. In particular, H\*(BG;ℚ) is polynomial for every compact connected Lie group G.

**How the definition helps.** Each generator jumps straight to the base row, so the spectral sequence matches a model in which each exterior generator kills one polynomial generator (our own explanation). Zeeman's comparison theorem makes this comparison rigorous, which gives Borel's transgression theorem. For a compact connected Lie group, Hopf's theorem gives odd exterior generators of H\*(G;ℚ), and they transgress in the universal bundle.

**Wikipedia:** [Zeeman's comparison theorem](https://en.wikipedia.org/wiki/Zeeman%27s_comparison_theorem). It says: “A crucial point is that f is a "ring homomorphism"; this rests on the technical conditions that uᵢ are "transgressive”

**Sources:**

- [Armand Borel, Sur la cohomologie des espaces fibrés principaux et des espaces homogènes de groupes de Lie compacts, Annals of Mathematics 57 (1953) 115–207](https://doi.org/10.2307/1969728)
- [E. C. Zeeman, A proof of the comparison theorem for spectral sequences, Proc. Cambridge Philos. Soc. 53 (1957) 57–62](https://doi.org/10.1017/S0305004100031984)

### The Bockstein spectral sequence reads off orders of p-torsion page by page

**Remember:** Divide the boundary by pʳ: the r-th differential finds ℤ/pʳ summands.

*Makes the theorem clean to state or prove.* MSC 55T99 (Spectral sequences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a prime p and a chain complex C of torsion-free abelian groups. The Bockstein spectral sequence starts at E¹ = H\_∗(C/pC), and its rth differential dʳ takes a chain c with ∂c divisible by pʳ to the class of ∂c/pʳ modulo p. It comes from the exact couple of 0 → C → C → C/pC → 0, with the first map multiplication by p.

**Problem.** If every Hₙ(C) is finitely generated, E∞ is the torsion-free quotient of integral homology tensored with 𝔽ₚ. Each cyclic summand ℤ/pʳ in Hₙ(C) gives classes in degrees n+1 and n paired by a nonzero dʳ.

**How the definition helps.** A summand ℤ/pʳ generated by z, with pʳz = ∂c, gives a mod-p cycle c in degree n+1 with dʳ\[c\] = \[z\] ≠ 0, and earlier differentials vanish on this pair (our own explanation). After page r the pair is gone. A free summand meets no differential, so with finite generation E∞ is the free part tensored with 𝔽ₚ.

**nLab:** [Bockstein spectral sequence](https://ncatlab.org/nlab/show/Bockstein+spectral+sequence). It says: “The Bockstein spectral sequence is traditionally defined by an exact couple in a way that does not manifestly come from a filtered chain complex.”

**Wikipedia:** [Bockstein spectral sequence](https://en.wikipedia.org/wiki/Bockstein_spectral_sequence). It says: “Letting r → ∞ we thus see E∞ is isomorphic to (free part of H\*(C)) ⊗ ℤ/p.”

**Sources:**

- [William Browder, Torsion in H-spaces, Annals of Mathematics 74 (1961), from page 24](https://doi.org/10.2307/1970305)

### Closure-finiteness and the weak topology put compact sets in finite subcomplexes

**Remember:** One point per cell makes a discrete closed set, never compact.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** In a CW complex, the closure of every cell meets only finitely many cells (closure-finite). A set is closed exactly when it meets every cell closure in a closed set (weak topology), so a set with at most one point in each cell is closed and discrete.

**Problem.** Every compact subset of a CW complex lies in a finite subcomplex. Thus a map from a sphere, or a homotopy of such maps, has image in a finite subcomplex.

**How the definition helps.** A compact set therefore meets only finitely many cells, since one point from each of infinitely many cells would be an infinite closed discrete subset. By closure-finiteness, each of these cells lies in a finite subcomplex, and their union is a finite subcomplex. Our own example: the Hawaiian earring with infinitely many 1-cells is compact and closure-finite, but lacks the weak topology and meets infinitely many cells.

**Wikipedia:** [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “A compact subspace of a CW complex is always contained in a finite subcomplex.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Restricting to CW complexes makes Whitehead's theorem true

**Remember:** Built from cells, a space is known by its homotopy groups.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A CW complex is a space built by gluing balls (cells) of rising dimension along their boundary spheres. Each cell closure meets only finitely many cells, and a set is closed when it meets each closed cell in a closed set. So maps and homotopies can be built on it one cell at a time, and each step needs only homotopy groups.

**Problem.** A map between connected CW complexes that induces isomorphisms on all homotopy groups is a homotopy equivalence (Whitehead's theorem). That is, it has an inverse up to homotopy.

**How the definition helps.** Built one cell at a time, the obstruction at each cell lies in a relative homotopy group, and the isomorphisms make it vanish (our own). The Warsaw circle shows that the restriction is needed: all its homotopy groups vanish, but it is not contractible. Our own description: it is a closed loop in the plane with one piece that oscillates like sin(1/x).

**Wikipedia:** [Whitehead theorem](https://en.wikipedia.org/wiki/Whitehead_theorem), [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “For example, the Warsaw circle, a compact subset of the plane, has all homotopy groups zero, but the map from the Warsaw circle to a single point is not a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Allowing subdivision lets every continuous map become simplicial up to homotopy

**Remember:** Cut the domain finely enough, and any map becomes simplicial.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 57Q55. arXiv math.AT. Level 3: graduate.

**Definition.** A subdivision cuts each simplex into smaller simplices, compatibly on faces, without changing the space. A simplicial map sends vertices to vertices and extends linearly from each simplex onto a target simplex. After enough barycentric subdivisions of the domain, a continuous map f sends the open star of each vertex into the open star of some target vertex (our own).

**Problem.** Every continuous map between finite simplicial complexes is homotopic to a simplicial map from a subdivision of the domain. As a consequence, the homotopy group πₖ(Sⁿ) is zero when k is less than n.

**How the definition helps.** Send each vertex v to a target vertex w with f(star v) ⊆ star w. This gives a simplicial map g, and f(x) and g(x) lie in one closed simplex, so a straight-line homotopy joins them. For k &lt; n, a simplicial map Sᵏ → Sⁿ misses a point of Sⁿ, whose complement is contractible (our own explanation).

**Wikipedia:** [Simplicial approximation theorem](https://en.wikipedia.org/wiki/Simplicial_approximation_theorem). It says: “In short, the theorem says any continuous map between simplicial complexes is the geometric realization of a simplicial mapping up to homotopy and subdivision.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Building simplicial sets from nondegenerate simplices makes realizations CW complexes

**Remember:** Only simplices that are not repeats add cells.

*True by definition. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** A simplex of a simplicial set is nondegenerate if no degeneracy map, which repeats a vertex, produces it from a lower simplex. Every simplicial set is built from the empty set by attaching one Δ\[n\] along its boundary ∂Δ\[n\] for each nondegenerate n-simplex, in order of rising n.

**Problem.** The geometric realization of a simplicial set is a CW complex with one n-cell for each nondegenerate n-simplex.

**How the definition helps.** Realization is a left adjoint, so it keeps these attachments and turns each attached Δ\[n\] into an n-cell attached along its boundary sphere. The attaching description rests on the Eilenberg–Zilber lemma: each simplex is a degeneracy of exactly one nondegenerate simplex, in exactly one way.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “can be seen as the result of iteratively adjoining nondegenerate n-simplices.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Appendix, Simplicial CW Structures](https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf)

### Defining realization as a colimit-preserving extension makes it left adjoint to Sing

**Remember:** A map out of a gluing is one map per piece.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** Geometric realization \|K\| glues one topological n-simplex Δⁿ for each n-simplex of K, along the affine maps given by the simplex operators. Formally, it is the colimit-preserving functor that sends Δ\[n\] to Δⁿ. Sing X is the simplicial set whose n-simplices are the continuous maps Δⁿ → X.

**Problem.** Continuous maps \|K\| → X correspond naturally to simplicial maps K → Sing X.

**How the definition helps.** A map out of a gluing is one map per piece, agreeing on the glue: here a continuous map Δⁿ → X for each simplex of K, compatible with the simplex operators (our own explanation). Such a family is exactly a simplicial map K → Sing X, naturally in K and X.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “Geometric realization is the special case of the general notion of nerve and realization that is induced from the standard cosimplicial topological space”

**Sources:** none listed. No primary source with a working link was found.

### Delta-complexes compute the homology of the torus with six simplices

**Remember:** Let faces repeat, and the torus needs only two triangles.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A Δ-complex is a space glued from ordered simplices along their faces, where faces of one simplex may be glued to each other, so vertices and edges may repeat. Formally, it is a family of sets of n-simplices with face maps dᵢ that satisfy dᵢdⱼ = dⱼ₋₁dᵢ whenever i &lt; j.

**Problem.** The torus is a Δ-complex with one vertex, three edges and two triangles. Its homology is ℤ in degree 0, ℤ² in degree 1 and ℤ in degree 2.

**How the definition helps.** Cut a square along a diagonal and glue opposite sides: this gives one vertex, three edges a, b, c and two triangles (our own calculation). Every edge is a loop, so its boundary is zero, and both triangles have boundary a + b − c. So their difference spans H₂ = ℤ, and H₁ = ℤ³/ℤ(a + b − c) = ℤ².

**Wikipedia:** [Delta set](https://en.wikipedia.org/wiki/Delta_set). It says: “It is worth highlighting that the minimum number of simplices needed to endow T² with the structure of a simplicial complex is 7 vertices, 21 edges, and 14 2-simplices, for a total of 42 simplices.”

**Sources:**

- [Samuel Eilenberg and J. A. Zilber, Semi-simplicial complexes and singular homology, Annals of Mathematics 51 (1950) 499–513](https://doi.org/10.2307/1969364)
- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Dowker's two complexes from one relation have the same homotopy type

**Remember:** Each y spans one full simplex, and their nerve swaps the sides.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 05E45. arXiv math.CO, math.AT. Level 3: graduate.

**Definition.** A relation R ⊆ X × Y gives two Dowker complexes. In the first, a finite subset of X is a simplex when it lies in the neighbour set of some y ∈ Y, so the complex is a union of one full simplex for each y. The second swaps the roles of X and Y.

**Problem.** The geometric realizations of the two Dowker complexes of a relation are homotopy equivalent.

**How the definition helps.** The full simplices on the nonempty neighbour sets cover the first complex, and any finite family of them meets in the full simplex on the common neighbours, which is contractible (our own argument). A family meets exactly when its elements of Y share a neighbour in X, so its nerve is the second complex. The nerve theorem for simplicial complexes gives the equivalence.

**Paper or page:** [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1), [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1). It says: “Given a relation on X × Y, we can construct two abstract simplicial complexes called Dowker complexes. The geometric realizations of these simplicial complexes are homotopically equivalent.”

**Sources:**

- [Dominic Desjardins Côté, Dowker Complexes and filtrations on self-relations, arXiv:2301.03739 (2023)](https://arxiv.org/abs/2301.03739v1)
- [Clifford H. Dowker, Homology Groups of Relations, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969768)

### Filling horns makes simplicial homotopy behave as it does for spaces

**Remember:** Any simplex missing one face can be completed, as in a space.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Kan complex is a simplicial set X in which every horn has a filler: each map Λᵏ\[n\] → X, from the boundary of Δ\[n\] without its k-th face, extends to Δ\[n\]. The filler supplies the missing face, which serves as a composite of the given faces, as paths compose in a space.

**Problem.** For maps into a Kan complex, simplicial homotopy is an equivalence relation. The homotopy groups of a Kan complex can be defined combinatorially, from simplices whose boundary sits at the base point.

**How the definition helps.** Horn fillers compose homotopies and invert them, so homotopy is symmetric and transitive (our own summary). Fillers in higher dimensions show that these composites are well defined, and the same composite is the group product (our own summary). That these groups agree with those of the geometric realization is a further theorem.

**nLab:** [Kan complex](https://ncatlab.org/nlab/show/Kan+complex), [simplicial homotopy group](https://ncatlab.org/nlab/show/simplicial+homotopy+group), [simplicial homotopy](https://ncatlab.org/nlab/show/simplicial+homotopy). It says: “For such complexes, usually called Kan complexes, homotopy groups may be defined, and, further, the notion of homotopy between maps of an arbitrary semi-simplicial complex into a Kan complex is an equivalence relation.”

**Sources:**

- [Daniel M. Kan, On c.s.s. complexes, American Journal of Mathematics 79 (1957) 449–476](https://doi.org/10.2307/2372558)

### For the décalage, the fibration property is a single horn filler

**Remember:** Décalage adds a last vertex, so lifting fills one horn.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT. Level 3: graduate.

**Definition.** The upper décalage Dec₀ X shifts X down one degree: its n-simplices are the (n+1)-simplices of X, with the last face and the last degeneracy forgotten. Equivalently, a map K → Dec₀ X is a map into X from K joined with one extra last vertex, and the projection Dec₀ X → X is the forgotten last face.

**Problem.** For Kan X, the last face projection Dec₀ X → X is a Kan fibration. The décalage deformation retracts onto its constant vertex simplices. Thus the projection replaces the vertex inclusion X₀ → X by a Kan fibration.

**How the definition helps.** A lifting problem from Λᵏ\[n\] → Δ\[n\] against the projection is then a map Λᵏ\[n+1\] → X, so one Kan filler solves it (our own explanation). The forgotten last degeneracy is an extra degeneracy that contracts each component onto its last vertex. So Dec₀ X deformation retracts onto its vertices, and the projection replaces X₀ → X by a Kan fibration.

**nLab:** [decalage](https://ncatlab.org/nlab/show/decalage). It says: “As a result, the décalage construction is often more convenient than forming X<sup>I</sup> ×<sub>X</sub> X<sub>0</sub>.”

**Sources:**

- [Danny Stevenson, Décalage and Kan's simplicial loop group functor, Theory and Applications of Categories 26 (2012) no. 28, 768–787, arXiv:1112.0474](https://arxiv.org/abs/1112.0474)

### Good open covers make the nerve theorem true

**Remember:** A good cover has no holes in pieces or overlaps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 54D20. arXiv math.AT. Level 3: graduate.

**Definition.** A good open cover of a space X is an open cover in which every set, and every nonempty finite intersection of sets, is contractible. So each piece and each overlap is a point up to homotopy, and a point is all that the nerve records for it.

**Problem.** For a good open cover of a paracompact space X, the geometric realization of the nerve is homotopy equivalent to X (the nerve theorem).

**How the definition helps.** The nerve replaces each piece and each overlap by a point, so it loses nothing when they are contractible. Partitions of unity on the paracompact space give a map to the nerve, and contractibility makes it an equivalence. Our own example: two arcs that cover a circle meet in two arcs, and the nerve is an interval, not a circle.

**nLab:** [nerve theorem](https://ncatlab.org/nlab/show/nerve+theorem), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “The nerve theorem asserts that the homotopy type of a sufficiently nice topological space is encoded in the Čech nerve of a good open cover”

**Sources:**

- [André Weil, Sur les théorèmes de de Rham, Commentarii Mathematici Helvetici 26 (1952) 119–145](https://doi.org/10.1007/bf02564296)
- [Karol Borsuk, On the imbedding of systems of compacta in simplicial complexes, Fundamenta Mathematicae 35 (1948) 217–234](https://doi.org/10.4064/fm-35-1-217-234)

### The homotopy hypothesis is a tautology or a theorem, depending on definitions

**Remember:** Define ∞-groupoids as spaces, and 'they are spaces' says nothing new.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50, 55P15. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** One model defines an ∞-groupoid to be a topological space, with weak homotopy equivalences inverted. Another defines it to be a Kan complex, a simplicial set in which every horn extends to a full simplex.

**Problem.** The homotopy hypothesis says that ∞-groupoids are equivalent to topological spaces up to weak homotopy equivalence. The fundamental ∞-groupoid of a space gives the equivalence.

**How the definition helps.** In the space model the hypothesis is a tautology, because the fundamental ∞-groupoid of a space is the space itself. In the Kan model the fundamental ∞-groupoid is the singular complex, and Quillen's equivalence between realization and the singular complex proves the hypothesis.

**nLab:** [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis), [Kan complex](https://ncatlab.org/nlab/show/Kan+complex). It says: “For instance there is some justification for defining an ∞-groupoid to be equivalently a topological space considered modulo weak homotopy equivalence (see at classical model structure on topological spaces). For this definition the homotopy hypothesis is of course a tautology.”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)
- [Simon Henry, Edoardo Lanari, On the homotopy hypothesis in dimension 3, Theory Appl. Categ. 39 (2023) 735–768, arXiv:1905.05625](https://arxiv.org/abs/1905.05625)

### Defining homotopy limits as derived functors makes them homotopy invariant

**Remember:** A derived functor treats weak equivalences as isomorphisms before it computes.

*True by definition.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 18N40, 18A30. arXiv math.AT. Level 3: graduate.

**Definition.** The homotopy limit of a diagram is the right derived functor of the limit, taken after inverting the objectwise weak equivalences of diagrams. The homotopy colimit is the left derived functor of colimit, and both are defined on the homotopy category, where weak equivalences are already isomorphisms.

**Problem.** Where the derived functors exist, homotopy limits and colimits send objectwise weak equivalences of diagrams to isomorphisms in the homotopy category.

**How the definition helps.** An objectwise weak equivalence is an isomorphism in the homotopy category of diagrams, and every functor sends isomorphisms to isomorphisms (our own explanation). The work is proving existence and showing that a chosen construction, such as the homotopy pushout, computes the derived functor.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “The homotopy limit of a functor F : D → C is, if it exists, the image of F under the right derived functor of the limit functor”

**Wikipedia:** [Homotopy colimit and limit](https://en.wikipedia.org/wiki/Homotopy_colimit_and_limit). It says: “if one (or more) of the spaces used to form the pushout is replaced by a weakly equivalent space, the pushout is not guaranteed to stay weakly equivalent. The homotopy pushout rectifies this defect.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Smash products are associative in a convenient category of spaces

**Remember:** Products keep quotients, so both bracketings are one quotient of A×B×C.

*True by definition.* MSC 55U40 (Topological categories, foundations of homotopy theory), 54D50, 18F60. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** In a cartesian closed category of spaces, the smash product A ∧ B of pointed spaces is the quotient (A × B)/(A ∨ B), which collapses the pairs with at least one base point. Cartesian closure gives each product functor a right adjoint, so products keep quotient maps (our own explanation).

**Problem.** In a convenient category of pointed spaces, the smash product is associative: A ∧ (B ∧ C) ≅ (A ∧ B) ∧ C.

**How the definition helps.** Since products keep quotients, both A ∧ (B ∧ C) and (A ∧ B) ∧ C are quotients of A × B × C (our own explanation). Both collapse the same set, the triples with at least one base point. So the canonical bijection is a homeomorphism.

**nLab:** [smash product](https://ncatlab.org/nlab/show/smash+product). It says: “Associativity fails in general for the category Top of all topological spaces; however, it is satisfied for pointed objects in any convenient category of topological spaces, since such a category is cartesian closed.”

**Sources:**

- [Norman Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)

### Bordism holonomy forces integral periods

**Remember:** Empty boundary, zero holonomy, so the curvature integral is an integer.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N22. arXiv math.AT. Level 4: research.

**Definition.** A degree-n differential bordism character is closed curvature data ω together with an additive ℝ/ℤ-valued holonomy h on geometric (n−1)-cycles. Its rule is that the holonomy of a boundary is the curvature integral: for every geometric n-bordism W, h(∂W) is the integral of the Chern–Weil form cw(ω) over W modulo ℤ.

**Problem.** On closed manifolds, these integrals give an integer-valued homomorphism on the bordism group for the chosen tangential structure.

**How the definition helps.** A closed W has empty boundary, so the additive h gives 0 = h(∂W), and the integral is an integer (our own argument). Integration adds under disjoint union, and by Stokes' theorem the closed form integrates to zero on boundaries, so the map descends to bordism.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270). It says: “induces a ℤ-valued homomorphism cw(ω) : Ω∗ᴳ(X, Y) → ℤ.”

**Sources:**

- [Yamashita and Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT’s, I, Lemma 4.77](https://arxiv.org/abs/2106.09270)

### Circle suspension preserves underlying theory

**Remember:** Reduced circle evaluation shifts down once, and suspension shifts back up.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on manifolds, reduced circle evaluation at M is the homotopy fibre of the restriction F(S¹ × M) → F(M) to a basepoint slice. Geometric suspension suspends this fibre once.

**Problem.** Geometric suspension preserves the underlying cohomology theory of a differential refinement, obtained by forcing homotopic maps to act alike.

**How the definition helps.** On a homotopy-invariant sheaf, the reduced circle part is the loop space of the theory, and suspension undoes that loop (our own). Bunke, Nikolaus and Völkl prove that the homotopy-invariant approximation commutes with reduced circle evaluation (our own), so the same holds for the underlying theory of F.

**nLab:** [fiber integration in differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+differential+cohomology). It says: “for integration over circle fibers in (Bunke-Nikolaus-Völkl 13, section 4.5).”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Cofiber curvature gives homotopy formulas

**Remember:** Endpoints agree on the homotopy-invariant parts, so their difference is curvature.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on manifolds, curvature data are what remain after removing the constant part: the cofiber of the map from the constant sheaf on F(\*) to F. Deformations are what the homotopy-invariant approximation H(F) loses: the fiber of F → H(F).

**Problem.** For data on M × \[0,1\], the difference of endpoint restrictions factors naturally through curvature data on the cylinder and then through deformations on M.

**How the definition helps.** The constant sheaf and H(F) are homotopy invariant, so the two endpoint restrictions agree on them up to homotopy (our own). So their difference factors through curvature data, and it lifts to deformations (our own). Bunke, Nikolaus and Völkl construct compatible homotopies for these two steps in Theorem 3.2 (our own).

**nLab:** [smooth spectrum](https://ncatlab.org/nlab/show/smooth+spectrum). It says: “every smooth spectrum sits in a hexagonal differential cohomology diagram”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Curvature and topology reconstruct smooth spectra

**Remember:** A smooth spectrum glues its curvature data to its underlying topology.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on smooth manifolds, the flat part is the constant sheaf on F(\*), and the curvature target is the homotopy cofiber of the natural map from the flat part to F. So the map from F to its curvature target has the flat part as its fiber (our own).

**Problem.** A smooth spectrum can be reconstructed from its curvature target and its homotopy-invariant approximation. Reconstruction matches their images in the homotopy-invariant approximation of the curvature target, including a path witnessing each match.

**How the definition helps.** The homotopy-invariant approximation keeps fiber sequences and leaves the already invariant flat part unchanged, so its map to the approximated curvature target also has the flat part as fiber (our own). A square of spectra whose two parallel maps have the same fiber is a homotopy pullback (our own). Reconstruction is this pullback.

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “where both rows are homotopy fiber sequences.”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Filtering fixes curvature along paths

**Remember:** With no simplex direction, closed curvature cannot change along a simplex.

*Rules out counterexamples. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** The differential function complex is a simplicial set whose simplices are families of cocycles on a manifold M with a simplex as parameter space. At filtration zero, the closed curvature form must vanish whenever one input points along the simplex, so it has no component in the parameter directions.

**Problem.** Curvature is constant on each connected component of the filtration-zero complex. In the unrestricted complex, a path can join distinct curvatures.

**How the definition helps.** A closed form on M × Δᵏ with no parameter components has coefficients constant in the parameters, because their parameter derivatives appear in its exterior derivative (our own). Without the restriction, the exact form d(tf) on M × \[0,1\] joins zero to df for any nonconstant smooth function f (our own). The function tf modulo integers gives the matching family of degree-one differential classes (our own).

**nLab:** [differential function complex](https://ncatlab.org/nlab/show/differential+function+complex). It says: “the sub-simplicial set of differential forms that vanish when evaluated on more than s vector fields tangent to the simplex;”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Hodge pullbacks give generalized Jacobians

**Remember:** The matching path, one degree lower, is the Jacobian.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** Let E be connective with finitely generated homotopy groups and rational homotopy only in even degrees. Its weight-p Hodge pullback is the homotopy pullback that matches an E-cocycle with a Hodge-filtered complex form by a path between their complex images, for the chosen weight-p comparison E → H(π\_∗E ⊗ ℂ). A form is filtered when, in coefficient degree 2j, it has holomorphic degree ≥ p+j.

**Problem.** On a compact Kähler manifold, degree-2p Hodge-filtered classes map onto precisely the E-classes whose complex images belong to this filtration. The kernel is degree-(2p−1) complexified E-cohomology modulo the sum of the filtered subgroup and the image of E-cohomology.

**How the definition helps.** A class needs matching complex images, which gives the image (our own). The choice of matching path is a complex class one degree lower, counted modulo the filtered part and the image of E-cohomology, and this gives the kernel (our own). Hodge decomposition on a compact Kähler manifold makes filtered cohomology a subgroup of complex cohomology, so the pullback exact sequence gives exactly these groups (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “the Hodge-filtered variant pairs instead with the Hodge filtered E• ⊗ ℂ-valued Dolbeault complexes”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### Hodge pullbacks recover Deligne cohomology

**Remember:** Quotienting out the retained forms leaves the Deligne complex.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** On a complex manifold, the weight-p Hodge pullback is the homotopy pullback of the lattice (2πi)ᵖℤ and the truncated holomorphic de Rham complex FᵖΩ• (forms of degree ≥ p) over the full complex Ω•. Since FᵖΩ• is a subcomplex, this is the homotopy fiber of the map from the lattice to the quotient, the forms of degree below p (our own).

**Problem.** For positive integers p, this pullback computes analytic Deligne cohomology in every degree. Its usual defining complex starts with the lattice and continues through holomorphic forms of degrees zero to p−1.

**How the definition helps.** The quotient Ω•/FᵖΩ• is the complex of holomorphic forms of degrees 0 to p−1 (our own). So the pullback is the homotopy fiber of the map from (2πi)ᵖℤ to 𝒪 → Ω¹ → ⋯ → Ωᵖ⁻¹, which is the usual Deligne complex (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “reproduces the Deligne complex in its original form”

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “An alternative definition of this complex is given as the homotopy limit”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### In a cohesive ∞-topos, every differential cohomology theory has the hexagon

**Remember:** Remove the flat part to obtain curvature, then apply the shape functor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 18N60, 53C08. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a cohesive ∞-topos, differential cohomology is defined as intrinsic cohomology: degree-n cohomology of X with coefficients in a spectrum object E is homotopy classes of maps X → Ω∞ΣⁿE. The hexagon comes from E itself, through the natural map from its flat part to E, whose cofiber is the curvature target.

**Problem.** Every stable homotopy type in a cohesive ∞-topos sits in a differential cohomology hexagon (Bunke, Nikolaus and Völkl). The hexagon is a diagram of two fibre sequences that link curvature, characteristic class, flat classes and forms.

**How the definition helps.** The map from the flat part gives one fiber sequence, and applying the shape functor gives its topological counterpart (our own explanation). Naturality links these two sequences, and their fibers give the remaining terms of the hexagon. The differential cohomology diagram theorem does this for every stable homotopy type, including the smooth spectra of Bunke, Nikolaus and Völkl.

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology), [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “It is therefore natural to define differential cohomology to be the intrinsic cohomology of cohesive (∞,1)-toposes.”

**Sources:**

- [Ulrich Bunke, Thomas Nikolaus, Michael Völkl, Differential cohomology theories as sheaves of spectra, J. Homotopy Relat. Struct. 11 (2016) 1–66, arXiv:1311.3188](https://arxiv.org/abs/1311.3188)
- [James Simons, Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology, J. Topology 1 (2008) 45–56, arXiv:math/0701077](https://arxiv.org/abs/math/0701077)
- [M. J. Hopkins, I. M. Singer, Quadratic functions in geometry, topology, and M-theory, J. Differential Geom. 70 (2005) 329–452, arXiv:math/0211216](https://arxiv.org/abs/math/0211216)

### Looping lowers both filtration indices

**Remember:** Looping lowers the cohomology degree and the allowed simplex degree together.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** In the differential function complex at filtration s, a simplex's curvature form may take at most s inputs along the parameter simplex. A loop adds one parameter direction, so looping uses up one filtration step. Here E is an Ω-spectrum with compatible real cocycles, so looping its nth space gives its (n−1)st space up to equivalence.

**Problem.** For n ≥ 1 and s ≥ 0, the degree-(n−1) complex at filtration s is weakly equivalent to loops on degree n at filtration s+1.

**How the definition helps.** A loop is a 1-simplex with both ends at the base point, so its curvature uses one more parameter direction, which filtration s+1 allows (our own). Hopkins and Singer prove that the comparison map is an isomorphism on all homotopy groups by an analysis of the filtered forms (our own).

**nLab:** [differential function complex](https://ncatlab.org/nlab/show/differential+function+complex). It says: “identifying the loop space object (at the canonical base point) of the differential function complex of Eₙ at filtration level s+1 with that differential function complex of Eₙ₋₁ at filtration level s.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Matching classes and curvature lift

**Remember:** Agreement in real cohomology guarantees a path between representatives.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a cohomology theory E, a Hopkins–Singer differential cocycle is a triple: a cocycle for an E-class, a closed differential form, and a path joining their images in the space that represents real cohomology with the real coefficients of E.

**Problem.** On a smooth manifold, an E-class and a closed form lift together to a differential E-class whenever their real classes agree.

**How the definition helps.** Equal real classes put the two real representatives in the same path component, so a joining path exists (our own). In cochain terms, the path is a real cochain whose coboundary is their difference (our own). The form enters through the de Rham map, which sends it to a real cochain by integration (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “A standard definition of differential cohomology is in terms of a homotopy pullback of a generalized (Eilenberg-Steenrod) cohomology theory with the complex of differential forms over real cohomology:”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Paths retain flat information

**Remember:** Two zero classes can still be joined by a nontrivial path.

*True by definition. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A Hopkins–Singer differential class is an E-cocycle and a closed form, together with a path between their real representatives. A pullback of groups would keep only the pair, but this homotopy pullback also keeps the path.

**Problem.** Classes with both entries zero form a quotient of degree-(n−1) cohomology with the graded real coefficients of E. The denominator is the real image of E-cohomology in degree n−1.

**How the definition helps.** With both entries zero, the path becomes a loop at zero, and such loops are real cohomology one degree lower (our own). The exact sequence of the pullback identifies two loops that differ by the real image of an E-class of degree n−1 (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “The characterization/construction of differential cohomology via homotopy fiber products (of mapping spectra with differential form data)”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Purity preserves curvature data

**Remember:** Only data that vanish on a point can serve as pure curvature.

*Rules out counterexamples.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A sheaf of spectra P on manifolds is pure if its value on a point is zero, P(\*) ≃ 0, so it has no constant part. Its homotopy-invariant approximation H(P) is the universal map from P to a sheaf that is invariant under M × \[0,1\] → M.

**Problem.** The homotopy pullback of a pure sheaf P and a constant sheaf over the invariant approximation of P defines a differential theory. Its curvature data recover P.

**How the definition helps.** Removing the constant part preserves the pullback and kills both homotopy-invariant entries, while the pure input P has no constant part to lose (our own). So the curvature data, which Proposition 3.5 identifies with this quotient, are P (our own). For a nonzero constant P, the same construction gives zero curvature data instead (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “♭-anti-modal types are called "pure”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Smooth spectra give Mayer–Vietoris sequences

**Remember:** Glue the spectra first, then take homotopy groups.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N30. arXiv math.AT. Level 4: research.

**Definition.** A smooth spectrum is a contravariant functor F from smooth manifolds to spectra with descent: for every open cover, F(M) is the homotopy limit of its values on all multiple intersections. For a cover by U and V, this says F(M) is the homotopy pullback of F(U) and F(V) over F(U ∩ V) (our own).

**Problem.** For a cover by two open sets, the homotopy groups form a long exact sequence relating the manifold, the two sets and their intersection.

**How the definition helps.** In spectra this pullback makes F(M) the fiber of the difference of restrictions F(U) ⊕ F(V) → F(U ∩ V) (our own). A fiber sequence of spectra gives a long exact sequence of homotopy groups (our own). A model built from geometric cocycles must first prove descent (our own).

**nLab:** [smooth spectrum](https://ncatlab.org/nlab/show/smooth+spectrum). It says: “A sheaf of spectra on the site of all smooth manifolds may be thought of as a spectrum equipped with generalized smooth structure,”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### The curvature fiber gives flat coefficients

**Remember:** A flat class is an E-class with its real image trivialized.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** In degree n, the Hopkins–Singer construction matches an E-cocycle with a closed real form by a path between their real images, and it keeps only forms of total degree at least n. A flat class is one whose curvature form is zero.

**Problem.** On a smooth manifold, flat differential E-classes of degree n form the E-cohomology group with ℝ/ℤ coefficients in degree n−1.

**How the definition helps.** With zero curvature, a class is an E-cocycle with a path from its real image to zero, a point of the fiber of the map from E to E with real coefficients (our own). The degree cutoff leaves no forms of degree n−1 to change this (our own). That fiber is the degree shift of the cofiber that defines ℝ/ℤ coefficients, so flat classes form E-cohomology with ℝ/ℤ coefficients in degree n−1 (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “Moreover Ê(flat)⁎ = E ℝ/ℤ•⁻¹.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### The pullback lifts circle integration

**Remember:** Integrate both inputs and carry their comparison along.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A Hopkins–Singer cocycle in degree n is a topological cocycle, a closed form of total degree at least n, and a path that matches their real representatives. Each of the first two entries has its own circle integration, so a map on cocycles needs only a compatible way to integrate the path.

**Problem.** Integrating around the oriented circle gives a natural map from degree n on S¹ × M to degree n−1 on M. It respects both curvature and the underlying topological class.

**How the definition helps.** Integrate the form over the circle, suspend the topological cocycle, and carry the path along through the homotopy that compares these two operations on real representatives (our own). Circle integration lowers form degree by one, which matches the cutoff in degree n−1 (our own).

**nLab:** [fiber integration in differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+differential+cohomology). It says: “General discussion of fiber integration for Hopkins-Singer coefficients is in (HopkinsSinger, section 4.10) and for integration over circle fibers in (Bunke-Nikolaus-Völkl 13, section 4.5).”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)
- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Bordism corrections preserve curvature

**Remember:** Subtract the derivative of the correcting current to obtain smooth curvature.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A corrected cycle for smooth complex cobordism is a proper cycle map with a connection on its stable complex normal bundle, together with a correction current α modulo exact currents. The pushforward current T of its characteristic form need not be smooth, and α is chosen so that the curvature T − dα is smooth.

**Problem.** Curvature depends only on the smooth complex cobordism class of a corrected cycle.

**How the definition helps.** Across a bordism, Stokes' theorem changes T by the derivative of the bordism current, and the bordism relation changes α by that same current (our own explanation). The two changes cancel in T − dα.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Bordism pushforward uses pullback cycles

**Remember:** Send a character forward by pulling its test cycles back.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A differential bordism character is a closed curvature form with an additive ℝ/ℤ-valued function on closed geometric test cycles, whose value on a boundary is the weighted curvature integral modulo ℤ. Along a proper oriented submersion, the pushforward evaluates a character on a test cycle by pulling the cycle back, that is, taking its fibre product with the source.

**Problem.** For a proper submersion with compatible geometric orientation, this construction lifts the topological pushforward on the Anderson dual of bordism, the theory that pairs cohomology classes with bordism cycles.

**How the definition helps.** Pulling back commutes with taking boundaries of test bordisms, and fibre integration of the curvature matches the boundary rule (our own argument). So the pushforward is again a character. The geometric pushforward theorem identifies its underlying map with the topological Anderson-dual pushforward.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3). It says: “refines the topological pushforward map”

**Sources:**

- [Mayuko Yamashita and Kazuya Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3)

### Eta invariants fit one anomaly character

**Remember:** The eta phase and its local index form belong to one class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A degree-2k differential spin-c bordism character is closed curvature data with an additive phase in ℝ/ℤ on closed geometric spin-c (2k−1)-cycles. Its rule is that on the boundary of every geometric spin-c bordism, the phase equals the curvature integral modulo integers.

**Problem.** For a Hermitian bundle with unitary connection, the reduced eta phase and its local index form represent the spin-c index image in differential Anderson duality.

**How the definition helps.** The Atiyah–Patodi–Singer index theorem gives exactly this rule for the curvature form, the degree-2k part of the Chern character times the Todd form, and the reduced eta phase (our own explanation). On a closed cycle the phase is half the sum of the twisted Dirac eta invariant and the kernel dimension, modulo integers. Proposition 3.52 identifies this pair with the differential spin-c index image.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2). It says: “((\\mathrm{Ch}(\\nabla ^W)\\otimes \\mathrm{Todd})\|<sub>2k</sub>, \\bar{\\eta }<sub>\\nabla ^W</sub>)= \\Phi \_{\\mathrm{ABS}}(\[W, h<sup>E</sup>, \\nabla ^E, 0\]\\otimes \\gamma \_K).”

**Sources:**

- [Mayuko Yamashita, Differential models for the Anderson dual to bordism theories and invertible QFTs, II](https://arxiv.org/abs/2110.14828v2)

### Eta invariants realize spinᶜ orientations

**Remember:** Local index form for curvature, reduced eta for phase.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R15, 58J20. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A degree-2k differential spinᶜ bordism character is closed curvature data with an additive ℝ/ℤ-valued phase on closed geometric spinᶜ (2k−1)-cycles over the base. Its rule is that on the boundary of every geometric bordism, the phase equals the curvature integral modulo integers.

**Problem.** For a Hermitian bundle with compatible connection, the differential Atiyah–Bott–Shapiro pairing uses the total degree-2k part of the Chern character times the Todd series. Its evaluation is the twisted Dirac operator’s reduced eta invariant, a measure of spectral asymmetry that includes the kernel contribution.

**How the definition helps.** The index theorem for manifolds with boundary shows that the local index form and the reduced eta invariant obey this rule modulo integers (our own). So they form a character (our own). Identifying it with the differential Atiyah–Bott–Shapiro pairing takes the differential orientation theorem (our own).

**Wikipedia:** [Atiyah–Bott–Shapiro orientation](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott%E2%80%93Shapiro_orientation). It says: “These represent the Â genus and the Todd genus.”

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2). It says: “(Ch(∇ᵂ) ⊗ Todd)\|₂ₖ”

**Sources:**

- [Mayuko Yamashita, Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2)

### Flat anomaly characters give the extension group

**Remember:** Flat phases modulo real lifts form the Ext group.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Fix a tangential structure, and let B be the bordism group of closed (n−1)-dimensional backgrounds with that structure. A flat character is an additive map B → ℝ/ℤ, and it is trivial in topology when it lifts to a map B → ℝ.

**Problem.** Flat characters give a subgroup of the degree n topological Anderson dual naturally isomorphic to Ext¹(B, ℤ). This group classifies abelian extensions of B by ℤ.

**How the definition helps.** The flat characters modulo those that lift to ℝ are Hom(B, ℝ/ℤ) modulo the image of Hom(B, ℝ) (our own derivation). Since ℝ is divisible, the sequence ℤ → ℝ → ℝ/ℤ identifies this quotient with Ext¹(B, ℤ). Comparing the character model with the spectrum definition of Anderson duality takes a separate theorem.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3). It says: “\\mathrm{Hom}(\\Omega ^G<sub>n-1</sub>(X, Y), \\mathbb {R})\\to \\mathrm{Hom}(\\Omega ^G<sub>n-1</sub>(X, Y), \\mathbb {R}/\\mathbb {Z}) \\xrightarrow {p} (I\\Omega ^G\_{\\mathrm{dR}})<sup>n</sup>(X, Y)”

**Sources:**

- [Mayuko Yamashita and Kazuya Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFTs, I](https://arxiv.org/abs/2106.09270v3)

### Gerbe isomorphisms transport spinᶜ bordism

**Remember:** Change the twist by tensoring the cycle’s module.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R15. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A differential stable isomorphism of bundle gerbes is a family of local line bundles Kᵢ with connection, whose transition maps match the gerbe multiplications and connections. Their curvatures account for the difference of the curvings, so tensoring with Kᵢ turns a module twisted by one gerbe into one twisted by the other (our own).

**Problem.** A connection-preserving stable isomorphism of gerbes gives an isomorphism between their differential spinᶜ bordism groups. It preserves the maps relating cycles to forms and underlying bordism classes.

**How the definition helps.** Tensoring each local spinor module of a cycle with the dual line bundle makes its gluing fit the new twist (our own explanation). The Clifford action survives, and the curving condition keeps the corrected characteristic forms, so the maps to forms and to bordism classes are kept. The operation respects boundaries, and the inverse isomorphism reverses it.

**Paper or page:** [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1). It says: “If (K, ∇ᴷ) is a differential stable isomorphism of bundle gerbes”

**Sources:**

- [Fei Han and Yuanchu Li, Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1)
- [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map, Proposition 4.7](https://bpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/4/12585/files/2025/11/2510.27286v1.pdf)

### Hodge cobordism gives Abel–Jacobi invariants

**Remember:** A vanished topological class can still leave a comparison class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14C30. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Hodge-filtered complex cobordism matches a complex cobordism cocycle with a closed filtered form by a path between their weighted complex images. In coefficient degree 2j, filtration p keeps holomorphic degrees ≥ p+j. When the topological class vanishes, the path survives as a class one degree lower (our own).

**Problem.** On a smooth projective complex variety, a codimension-p algebraic cobordism class that vanishes in topological complex cobordism has an Abel–Jacobi invariant. Its target is complexified cobordism in degree 2p−1 modulo the integral image and the shifted filtration p.

**How the definition helps.** For a topologically trivial cycle only the path is left, and it gives a class in the stated quotient (our own). The proof builds the filtered cycle map from algebraic cobordism and identifies its topologically trivial values with elements of this quotient (our own).

**nLab:** [Center for Quantum and Topological Systems](https://ncatlab.org/nlab/show/Center+for+Quantum+and+Topological+Systems). It says: “This allows us to give a concrete description of an Abel-Jacobi type secondary invariant for topologically trivial cobordism cycles.”

**Sources:**

- [Gereon Quick, An Abel-Jacobi invariant for cobordant cycles (2016)](https://gereonq.folk.ntnu.no/AbelJacobi_Documenta.pdf)
- [Michael J. Hopkins and Gereon Quick, Hodge filtered complex bordism (2015)](https://doi.org/10.1112/jtopol/jtu021)

### Landweber base change preserves differential exactness

**Remember:** Tensor the smooth theory and its structure maps together.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A graded commutative MU\_∗-algebra R is Landweber exact if tensoring over MU\_∗ with R preserves every short exact sequence of graded MU\_∗MU-comodules.

**Problem.** On compact smooth manifolds, tensoring smooth complex cobordism with R gives a multiplicative differential extension of the corresponding cohomology theory when R is Landweber exact.

**How the definition helps.** Because R is Landweber exact, tensoring every structure map of smooth complex cobordism with R, including the maps on forms, keeps the differential extension sequence exact (our own outline). The Landweber exact base-change theorem for smooth complex cobordism proves this on compact manifolds. The multiplication of R gives the product.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “By tensoring with a Landweber exact ring, this induces various other differential cohomology theories, such as differential elliptic cohomology.”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Landweber exact vₙ-periodic theories all have the Bousfield class of E(n)

**Remember:** Only the height decides which spectra a Landweber exact theory kills.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P60. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p and a p-local Landweber exact BP\_∗-algebra E\_∗, and put Iₙ = (p, v₁, …, vₙ₋₁) for n ≥ 1. The theory is vₙ-periodic when E\_∗/Iₙ is nonzero and vₙ acts invertibly on it, so its formal group reaches height n but no greater height.

**Problem.** For every spectrum X, its E-homology vanishes exactly when its K(m)-homology vanishes for every 0 ≤ m ≤ n. Hence E(n), Morava E-theory Eₙ and all such theories give the same localization Lₙ.

**How the definition helps.** By Landweber's filtration of comodules, the acyclic spectra of a Landweber exact theory depend only on which heights its formal group reaches (our own summary of Hovey's argument). Every vₙ-periodic theory reaches exactly the heights 0 to n, like E(n). So all these theories have the Bousfield class of E(n).

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “Let E∗ be Landweber exact and vₙ–periodic. A spectrum is E∗–acyclic if and only if it is K(m)∗–acyclic for 0 ≤ m ≤ n.”

**Sources:**

- [M. Hovey, Bousfield localization functors and Hopkins' chromatic splitting conjecture, Contemporary Mathematics 181 (1995) 225–250](https://doi.org/10.1090/conm/181/02036)
- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### Morava's change of rings turns chromatic Ext groups into group cohomology

**Remember:** At height exactly h, all formal groups look alike; only symmetries remain.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55T25. arXiv math.AT. Level 4: research.

**Definition.** At a prime p and height h ≥ 1, the extended stabilizer group 𝔾ₕ is the group of symmetries of the Honda formal group over 𝔽ₚʰ. It combines the formal group's automorphisms with Gal(𝔽ₚʰ/𝔽ₚ) by semidirect product. A BP\_∗BP-comodule is Iₕ-nilpotent if a power of Iₕ = (p, v₁, …, vₕ₋₁) kills each element.

**Problem.** For an Iₕ-nilpotent comodule M, Ext over BP\_∗BP from BP\_∗ to vₕ⁻¹M is continuous 𝔾ₕ-cohomology with coefficients Eₕ\_∗ ⊗BP∗ M.

**How the definition helps.** After inverting vₕ, an Iₕ-nilpotent comodule lives where the formal group has height exactly h, and there every formal group is locally the Honda one (our own explanation). So only its symmetry group 𝔾ₕ is left. Morava's change-of-rings theorem makes this precise.

**nLab:** [Morava stabilizer group](https://ncatlab.org/nlab/show/Morava+stabilizer+group). It says: “This is called the Morava stabilizer group.”

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “Let M be a BP∗BP-comodule that is Iₕ=(p,v₁,⋯,vₕ₋₁)-nilpotent. Then there is a natural isomorphism”

**Sources:**

- [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality, arXiv:2203.09455](https://arxiv.org/abs/2203.09455)

### The only invariant prime ideals of BP are the height ideals

**Remember:** Prime ideals that survive every coordinate change are the height loci.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p. A homogeneous ideal of BP\_∗ is invariant if the BP\_∗BP-coaction maps it into itself, which means it does not depend on the choice of coordinate on the formal group (our own gloss). Set Iₙ = (p, v₁, …, vₙ₋₁) for n ≥ 1, the ideal that cuts out height at least n.

**Problem.** At a prime p, the invariant prime ideals of BP\* are 0, the ideals (p, v₁, …, vₙ₋₁) for n ≥ 1, and their union. So Landweber's exactness test needs to check only these ideals.

**How the definition helps.** Over an algebraically closed field, formal groups are classified by height (Lazard), so a closed set that every coordinate change preserves is cut out by height conditions (our own explanation). The irreducible ones are the loci of height at least n. Landweber's proof makes this algebraic, using the generators vᵢ of Hazewinkel or Araki.

**Wikipedia:** [Landweber exact functor theorem](https://en.wikipedia.org/wiki/Landweber_exact_functor_theorem). It says: “the only prime ideals of BP∗ which are invariant under coaction of BP∗BP are the Iₙ = (p,v₁,…, vₙ).”

**Sources:**

- [P. S. Landweber, Homological properties of comodules over MU\*(MU) and BP\*(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### The p-series makes Morava E-theory of BCₚ free of rank pⁿ

**Remember:** Cohomology of BCₚ is power series modulo the p-series.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55R35. arXiv math.AT. Level 4: research.

**Definition.** The p-series \[p\](y) of a one-dimensional formal group law adds the variable y to itself p times with the group law. Over a complete local ring of residue characteristic p, the formal group has height n when \[p\](y), reduced to the residue field, starts in degree pⁿ.

**Problem.** For Morava E-theory at height n, Eₙ\*(BCₚ) ≅ Eₙ\*\[\[y\]\]/(\[p\](y)) is free of rank pⁿ over Eₙ\*. Similarly K(n)\*(BCₚ) is K(n)\*\[y\] modulo y to the power pⁿ.

**How the definition helps.** The Gysin sequence gives E\*(BCₚ) as E\*\[\[y\]\] modulo \[p\](y), the Euler class of the p-th tensor power of the universal line bundle (our own outline). Weierstrass preparation writes \[p\](y) as a unit times a monic polynomial of degree pⁿ, the height degree. So the quotient is free of rank pⁿ, and for K(n), where \[p\](y) is a unit times y to the power pⁿ, it is the truncated polynomial ring.

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022), [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “If A is a finite abelian p-group, then Eₙ\*(BA) is a free Eₙ\*–module of rank \|A\|ⁿ”

**Sources:**

- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### The universal property of the Lubin–Tate ring makes the stabilizer group act

**Remember:** Universal objects are acted on by every symmetry of what they deform.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Fix a finite-height formal group f over a perfect field k of characteristic p. A deformation of f over a complete local ring with residue field k is a formal group there with an identification of its special fibre with f. The Lubin–Tate ring represents deformations up to isomorphisms that respect this identification, so a symmetry of f acts on it by changing the identification.

**Problem.** The automorphism group of f acts on the Lubin–Tate ring by ring maps. Through the Landweber exact functor theorem it acts on the homology theory given by Morava E-theory Eₙ.

**How the definition helps.** Composing the identification with a symmetry of f acts on deformation classes, naturally in the ring (our own explanation). Representability turns these operations into ring automorphisms, with inverses to turn a right action into a left one. The action lifts to the universal deformation, so Landweber's construction turns it into operations on Eₙ.

**nLab:** [Lubin-Tate theory](https://ncatlab.org/nlab/show/Lubin-Tate+theory). It says: “The Lubin-Tate formal group f̄ is the universal deformation of f in that for every infinitesimal thickening A of k, f̄ induces a bijection”

**Sources:**

- [P. G. Goerss, M. J. Hopkins, Moduli spaces of commutative ring spectra, in Structured Ring Spectra, Cambridge University Press (2004)](https://doi.org/10.1017/cbo9780511529955.009)

### Transversality allows correction current pullback

**Remember:** Keep singular directions away from the pullback map’s normal directions.

*Rules out counterexamples. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77, 58A25. arXiv math.AT, math.DG. Level 4: research.

**Definition.** For a smooth cycle map f, the normal covectors are the nonzero covectors ξ at a point f(x) with ξ ∘ dfₓ = 0. Choose the correcting current so that its wavefront set, the directions in which it is singular, lies in these normal covectors.

**Problem.** Every smooth map transverse to the cycle map can pull back the chosen correcting current.

**How the definition helps.** If g is transverse to f, no nonzero covector annihilates both dg and df, so the wavefront set misses the normal covectors of g (our own). Hörmander's pullback theorem for distributions then defines the pullback (our own). The paper finds such a current by changing a given one by an exact current.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### q-tame modules keep diagram stability without pointwise finite dimension

**Remember:** Ask for finite rank of maps, not finite dimension of spaces.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 4: research.

**Definition.** A real-indexed persistence module over a field is a family of vector spaces with compatible linear maps for s ≤ t. It is q-tame if the map for every s &lt; t has finite rank, even when the spaces themselves are infinite-dimensional.

**Problem.** Two δ-interleaved q-tame persistence modules have persistence diagrams with a δ-matching. So the bottleneck distance between their diagrams is at most δ.

**How the definition helps.** The persistence diagram counts bars by ranks of maps between separated parameters, so finite ranks are all it needs (our own explanation). The algebraic stability theorem for q-tame modules then turns a δ-interleaving into a δ-matching. This matching bounds the bottleneck distance by δ by definition.

**Paper or page:** [Persistent Stanley–Reisner Theory](https://arxiv.org/abs/2503.23482). It says: “Let 𝕌 and 𝕍 be q-tame persistence modules that are δ-interleaved. Then there exists a δ-matching between the multisets dgm(𝕌) and dgm(𝕍).”

**Sources:**

- [Persistent Stanley–Reisner Theory, arXiv:2503.23482 (2025)](https://arxiv.org/abs/2503.23482)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)
- [Frédéric Chazal, Vin de Silva, Marc Glisse, Steve Oudot, Persistence modules, in The Structure and Stability of Persistence Modules, SpringerBriefs in Mathematics (2016) 15–29](https://doi.org/10.1007/978-3-319-42545-0_2)

### Grading Bredon cohomology by representations restores equivariant Poincaré duality

**Remember:** A G-manifold sits inside a representation, so grade by representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** An RO(G)-graded cohomology theory has groups indexed by formal differences of finite-dimensional real G-representations, not just by integers. Smashing with Sⱽ, the one-point compactification of a representation V, shifts degree by V. So a G-manifold can have a fundamental class in a representation degree (our own).

**Problem.** Let G be finite and M a closed smooth G-manifold with a tangent bundle oriented in Bredon cohomology of fixed representation degree V. Equivariant Poincaré duality with the given Mackey functor coefficients exchanges cohomological degree α with homological degree V−α.

**How the definition helps.** The equivariant fundamental class of M has degree V, so only a representation grading can hold it (our own explanation). Equivariant Atiyah duality uses the stable normal bundle of an equivariant embedding. The orientation gives a Thom isomorphism that turns this bundle shift into the shift by V.

**nLab:** [equivariant cohomology](https://ncatlab.org/nlab/show/equivariant+cohomology), [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “It would also be nice to have a Poincare duality theorem for G-manifolds, but that fails with these theories. The solution people have come up with is to widen the notion of "looping" and "delooping" and thereby the grading”

**Sources:**

- [J. Peter May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### The GKM condition turns equivariant cohomology into polynomials on a graph

**Remember:** Fixed points are vertices, invariant spheres are edges, weights are labels.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 53D20, 14M15. arXiv math.AT, math.SG. Level 4: research.

**Definition.** A torus action on a compact manifold is GKM when it is equivariantly formal, with finitely many fixed points and pairwise independent weights at each. Then the points with a codimension-one stabilizer lie on invariant 2-spheres, each joining two fixed points. These spheres are the edges of a graph on the fixed points.

**Problem.** For a GKM action, rational equivariant cohomology is the ring of tuples of polynomials, one per fixed point, with the right divisibility across edges. Across each edge, the difference must be divisible by that edge's weight.

**How the definition helps.** By localization, formality makes restriction to the fixed points injective, and the Chang–Skjelbred lemma cuts out the image using the one-dimensional orbits (our own). Pairwise independent weights make those orbits a union of 2-spheres with two fixed points each, so the condition becomes one divisibility per edge (our own). The work went into localization and the Chang–Skjelbred lemma; the GKM condition makes their output combinatorial (our own).

**Wikipedia:** [GKM variety](https://en.wikipedia.org/wiki/GKM_variety). It says: “The torus action of a GKM variety must be skeletal: both the set of fixed points of the action, and the number of one-dimensional orbits of the action, must be finite.”

**Sources:**

- [M. Goresky, R. Kottwitz and R. MacPherson, Equivariant cohomology, Koszul duality, and the localization theorem, Inventiones Mathematicae 131 (1998) 25–83](https://doi.org/10.1007/s002220050197)

### Defining stabilization as a limit makes it commute with functor categories

**Remember:** Loops in a functor category are taken pointwise, so stabilize pointwise.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18N60. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For an ∞-category D with finite limits, the stabilization Stab(D) is the limit of the tower ⋯ → D∗ → D∗ of pointed objects under the loop functor Ω. For spaces this gives spectra, sequences of pointed spaces each the loop space of the next.

**Problem.** For an ∞-category C and an ∞-category D with finite limits, Stab(Fun(C, D)) is equivalent to Fun(C, Stab(D)). In particular, the stabilization of presheaves of spaces on C is the ∞-category of presheaves of spectra on C.

**How the definition helps.** Loops in Fun(C, D) are computed objectwise, so the tower for Fun(C, D) is Fun(C, −) applied to the tower for D (our own). Fun(C, −) preserves limits of ∞-categories, so the equivalence follows (our own). If spectra are defined by a model category instead, the same statement needs a comparison of model structures (our own).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “Its stabilization is equivalent to the functor category into the stabilization of D”

**Sources:**

- [Jacob Lurie, Stable infinity categories, arXiv:math/0608228, Example 10.13](https://arxiv.org/abs/math/0608228) (link not checked)

### Duality over a ring spectrum makes Poincaré duality hold for oriented theories

**Remember:** Atiyah duality plus a Thom isomorphism equals Poincaré duality.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 55N20. arXiv math.AT. Level 4: research.

**Definition.** For a commutative ring spectrum R, the R-dual of an R-module N is the function module Fᴿ(N, R). An R-orientation of a rank-r bundle is a degree-r Thom class that restricts to an R-generator on every fibre. It gives a Thom isomorphism: R smashed with the Thom spectrum is R smashed with the base, shifted by r.

**Problem.** If a closed smooth n-manifold M has an R-orientation of its normal bundle, then the R-dual of R ∧ M₊ is R ∧ Σ⁻ⁿM₊. Taking homotopy groups gives Poincaré duality Rᵏ(M) ≅ Rₙ₋ₖ(M).

**How the definition helps.** Atiyah duality identifies the R-dual of R ∧ M₊ with R smashed with the Thom spectrum of the stable normal bundle (our own explanation). The orientation's Thom isomorphism turns this into R ∧ Σ⁻ⁿM₊. Taking π₋ₖ gives Rᵏ(M) ≅ Rₙ₋ₖ(M).

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “In that case Th(N X) -- the Thom spectrum of its stable normal bundle is the corresponding dual object.”

**Paper or page:** [Homotopy theory of modules over a commutative S-algebra: some tools and examples](https://arxiv.org/abs/2003.12003). It says: “Suppose that M is a compact closed smooth n-manifold whose normal bundle admits an orientation in R-cohomology. Then R∧M₊ is a stably Spanier-Whitehead self R-module and D<sub>R</sub>(R∧M₊) ∼ R∧Σ⁻ⁿ(M₊).”

**Sources:**

- [Michael F. Atiyah, Thom complexes, Proceedings of the London Mathematical Society (3) 11 (1961) 291–310](https://doi.org/10.1112/plms/s3-11.1.291)
- [Homotopy theory of modules over a commutative S-algebra: some tools and examples, arXiv:2003.12003](https://arxiv.org/abs/2003.12003)

### Excisive-functor spectra give Mayer–Vietoris sequences on finite pointed spaces

**Remember:** Excisive: pushouts of inputs become pullbacks of values.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P65. arXiv math.AT. Level 4: research.

**Definition.** A spectrum can be modeled by an excisive functor from finite pointed homotopy types to spaces. It sends the point to a contractible space and every homotopy pushout square to a homotopy pullback square.

**Problem.** For a pushout of finite pointed homotopy types, the functor gives a pullback square of values. The associated spectrum-valued functor gives a Mayer–Vietoris long exact sequence of homotopy groups.

**How the definition helps.** The theorem is the excision condition itself: a pushout of inputs becomes a pullback of values. Excision on the suspension square gives E(X) ≃ ΩE(ΣX), so the values on successive suspensions form a spectrum (our own explanation). A pullback square of spectra gives a Mayer–Vietoris long exact sequence of homotopy groups.

**nLab:** [excisive (∞,1)-functor](https://ncatlab.org/nlab/show/excisive+%28%E2%88%9E%2C1%29-functor). It says: “then excisive functors that send the point to the point (up to equivalence) are still equivalent to spectra (spectrum objects)”

**Sources:** none listed. No primary source with a working link was found.

### Finite homotopy groups make Brown–Comenetz double duality an equivalence

**Remember:** Dualize twice into ℚ/ℤ, and finite groups come back unchanged.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 4: research.

**Definition.** The Brown–Comenetz dual of a spectrum X is IX = F(X, I), where I is the Brown–Comenetz spectrum. Its homotopy groups are the Pontryagin duals πₙ(IX) ≅ Hom(π₋ₙX, ℚ/ℤ). The natural double-duality map X → I(IX) acts on each homotopy group as the double-dual map A → Hom(Hom(A, ℚ/ℤ), ℚ/ℤ) (our own).

**Problem.** If every stable homotopy group of a spectrum X is finite, then the double-duality map X → I(IX) is an equivalence.

**How the definition helps.** A finite abelian group equals its Pontryagin double dual, so the map is an isomorphism on every homotopy group (our own). For A = ℤ the double dual is the profinite integers ℤ̂, so Hℤ is not its own double dual (our own).

**nLab:** [Brown-Comenetz duality](https://ncatlab.org/nlab/show/Brown-Comenetz+duality). It says: “If X is a spectrum whose stable homotopy groups are finite groups, then the natural "double-duality" map X → I\_ℚ/ℤ I\_ℚ/ℤ X (the unit of the corresponding continuation monad) is an equivalence”

**Sources:**

- [Edgar H. Brown and Michael Comenetz, Pontrjagin duality for generalized homology and cohomology theories, American Journal of Mathematics 98 (1976) 1–27](https://doi.org/10.2307/2373610)

### Injectivity of ℚ/ℤ makes the Brown–Comenetz spectrum exist

**Remember:** An injective target keeps exactness, so dualizing homotopy gives a cohomology theory.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 4: research.

**Definition.** An abelian group A is injective if Hom(−, A) turns every short exact sequence into a short exact sequence with arrows reversed (our own). For example, ℚ/ℤ is injective because it is divisible (our own).

**Problem.** For an injective group such as ℚ/ℤ, the functor X ↦ Hom(π₀X, ℚ/ℤ) is represented by a spectrum I. Then \[X, ΣⁿI\] ≅ Hom(πₙX, ℚ/ℤ) for every integer n.

**How the definition helps.** Because ℚ/ℤ is injective, X ↦ Hom(π₀X, ℚ/ℤ) turns cofibre sequences into exact sequences and wedges into products, so Brown representability gives I (our own). Shifting X gives the formula for every n (our own). Dualizing into ℤ fails: multiplication by two on ℤ is injective, but its dual is not onto (our own).

**nLab:** [Brown-Comenetz duality](https://ncatlab.org/nlab/show/Brown-Comenetz+duality). It says: “Brown-Comenetz 76 introduced the spectrum I\_ℚ/ℤ which represents the cohomology theory that assigns to a spectrum X the algebraic Pontrjagin duals Hom\_ℤ(π₋⋆X, ℚ/ℤ) of its homotopy groups with respect to ℚ/ℤ.”

**Sources:**

- [Edgar H. Brown and Michael Comenetz, Pontrjagin duality for generalized homology and cohomology theories, American Journal of Mathematics 98 (1976) 1–27](https://doi.org/10.2307/2373610)

### Pre-excisive functors give a symmetric monoidal smash product almost for free

**Remember:** Index by all finite complexes, and their smash product comes along.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A pre-excisive functor is a pointed functor from finite pointed CW complexes to pointed spaces, continuous on mapping spaces (our own). Unlike a sequential spectrum, it is indexed by a category with its own smash product (our own).

**Problem.** Day convolution gives pre-excisive functors a closed symmetric monoidal smash product, with unit the sphere functor 𝕊. Restricting to sequential spectra loses this symmetric monoidal product.

**How the definition helps.** The indexing category has a symmetric monoidal smash product, so Day convolution extends it to the functors (our own). The unit is the functor represented by S⁰, which sends each complex to itself, so it is the sphere functor 𝕊 (our own). Sequential spectra are indexed by the natural numbers with only shifts, so they get no such product (our own).

**nLab:** [model structure on orthogonal spectra](https://ncatlab.org/nlab/show/model+structure+on+orthogonal+spectra), [Introduction to Stable homotopy theory -- 1-2](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-2), [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra). It says: “We consider an almost tautological construction of a pointed topologically enriched category equipped with a closed symmetric monoidal product: the category of pre-excisive functors.”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)

### Spanier–Whitehead duality turns representability of cohomology into representability of homology

**Remember:** Dualize the input, and a homology theory becomes a cohomology theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P25. arXiv math.AT. Level 4: research.

**Definition.** The Spanier–Whitehead dual DX of a finite spectrum X is the function spectrum F(X, S) into the sphere spectrum S. It reverses maps and satisfies D(DX) ≃ X, so homology of X becomes cohomology of DX (our own).

**Problem.** Every reduced generalized homology theory h on finite pointed CW complexes has a representing spectrum E (Adams). Thus hₙ(X) ≅ πₙ(E ∧ X) naturally in finite pointed X.

**How the definition helps.** Through D, the functor Y ↦ h₋ₙ(DY) is a cohomology theory on finite spectra, so homology representability becomes cohomology representability (our own). If that theory is \[−, ΣⁿE\], then hₙ(X) ≅ \[DX, Σ⁻ⁿE\] ≅ πₙ(E ∧ X) for finite X (our own). Plain Brown representability needs infinite wedges, so this step uses Adams' variant for functors defined only on finite complexes (our own).

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “But by way of Spanier-Whitehead duality it implies at least over finite CW-complexes that dually every additive generalized homology theory E<sub>•</sub> is representable by a spectrum E”

**Sources:**

- [J. Frank Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

### The loop-tower definition of stabilization makes looping invertible

**Remember:** Each entry is the loops of the next, so shifting undoes looping.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 18N60. arXiv math.AT. Level 4: research.

**Definition.** The stabilization of a pointed ∞-category C with finite limits is the limit of the tower ⋯ → C → C in which every map is Ω. So an object is a sequence X₀, X₁, … with equivalences Xₙ ≃ ΩXₙ₊₁ for all n ≥ 0 (our own).

**Problem.** The loop functor on the stabilization is an equivalence. Its inverse sends X₀, X₁, … to X₁, X₂, ….

**How the definition helps.** Loops act entry by entry, so looping the shifted sequence X₁, X₂, … gives ΩX₁, ΩX₂, … (our own). The defining equivalences identify this with X₀, X₁, …, and the other composite works the same way (our own).

**nLab:** [stabilization](https://ncatlab.org/nlab/show/stabilization). It says: “The stabilization Stab(C) of C is the (∞,1)-limit (in the (∞,1)-category of (∞,1)-categories) of the tower of applications of the loop space functor”

**Sources:** none listed. No primary source with a working link was found.

### Commutative S-algebras make the smash product the coproduct of E∞ rings

**Remember:** Commutative monoids: multiply the two images together, so smash is coproduct.

*True by definition.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A commutative S-algebra is a commutative monoid in S-modules under smash product: a unit and an associative, commutative multiplication (our own gloss).

**Problem.** For commutative S-algebras A and B under a commutative S-algebra R, the smash product A ∧ B over R is their coproduct in commutative R-algebras. For cofibrant inputs it is also the homotopy pushout of E∞ rings.

**How the definition helps.** Among commutative monoids, the monoidal product is the coproduct (our own). Maps from A and B to a commutative R-algebra C combine uniquely into A ∧ B → C ∧ C → C, all over R (our own). Cofibrant inputs make this point-set coproduct compute the derived one (our own).

**Wikipedia:** [Highly structured ring spectrum](https://en.wikipedia.org/wiki/Highly_structured_ring_spectrum). It says: “Therefore, is it possible to define A<sub>∞</sub>-ring spectra and E<sub>∞</sub>-ring spectra as (commutative) monoids in the category of S-modules, so called (commutative) S-algebras.”

**Sources:**

- [A. D. Elmendorf, I. Kriz, M. A. Mandell and J. P. May, Rings, Modules, and Algebras in Stable Homotopy Theory, Mathematical Surveys and Monographs 47, American Mathematical Society (1997)](https://doi.org/10.1090/surv/047)

### Defining K-theory of ring spectra through perfect modules makes it Morita invariant

**Remember:** K-theory reads only compact modules, so equal module categories agree.

*True by definition.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 19D10. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a ring spectrum R, K(R) is the algebraic K-theory of Perf(R), the compact objects of the ∞-category of R-modules. It depends only on the module ∞-category, because compactness is defined inside it (our own).

**Problem.** If ring spectra R and R′ have equivalent module ∞-categories, then K(R) ≃ K(R′). For example, K(R) ≃ K(End(P)) for each compact generator P of Mod(R), such as Rⁿ with its matrix ring.

**How the definition helps.** An equivalence of module ∞-categories preserves compact objects, so it restricts to Perf(R) ≃ Perf(R′) and the K-theories agree (our own). Schwede–Shipley Morita theory identifies Mod(R) with modules over End(P) for a compact generator P, which gives the example (our own).

**Wikipedia:** [Module spectrum](https://en.wikipedia.org/wiki/Module_spectrum). It says: “Lurie defines the K-theory of a ring spectrum R to be the K-theory of the ∞-category of perfect modules over R (a perfect module being defined as a compact object in the ∞-category of module spectra).”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geometry &amp; Topology 17 (2013) 733–838](https://doi.org/10.2140/gt.2013.17.733)
- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Defining orientations as trivializations makes universal orientations into ring maps

**Remember:** Orient by trivializing the bundle's units in R, as spectrum maps.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55N22, 55R25. arXiv math.AT. Level 4: research.

**Definition.** Let f, a map of connective spectra from bg to Σgl₁(S), classify a spherical bundle on BG. An E∞ R-orientation of f is a null-homotopy of its composite with Σgl₁(S) → Σgl₁(R) (our own). It trivializes the induced R-line bundle as a map of spectra (our own).

**Problem.** Let G → O be a map of groups that deloops to a map of spectra, as for SO, Spin, String and U. Then E∞ R-orientations correspond to E∞ ring maps from the Thom spectrum MG to R.

**How the definition helps.** The Thom spectrum MG is universal among E∞ rings with such a trivialization, so E∞ maps MG → R are exactly these null-homotopies (our own). The adjunction between E∞ rings and their unit spectra gl₁ turns trivializations into the defining null-homotopies (our own).

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “If here G → GL₁(𝕊) is the Ω<sup>∞</sup>-component of a map of spectra then this σ is a homomorphism of E-∞ rings and in this case there is a bijection between universal orientations and such E∞-ring homomorphisms”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### E₂ Thom spectra make H𝔽ₚ the free E₂ ring with p zero

**Remember:** Freely kill p as an E₂ ring, and 𝔽ₚ appears.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55R25. arXiv math.AT. Level 4: research.

**Definition.** For a prime p, let f from Ω²S³ to BGL₁ of the p-complete sphere Sₚ^ extend the loop 1 − p as a double loop map. Its Thom spectrum Mf is the colimit of the Sₚ<sup>-lines</sup> that f classifies (our own). E₂ maps out of Mf are null-homotopies of p in the target (our own).

**Problem.** This E₂ Thom spectrum is the Eilenberg–MacLane spectrum H𝔽ₚ (Hopkins–Mahowald). Equivalently, H𝔽ₚ is the free E₂ ring over the p-complete sphere on a null-homotopy of p.

**How the definition helps.** Ω²S³ is the free double loop space on S¹, so f is the free E₂ extension of the loop 1 − p (our own). The Thom universal property then makes Mf the free E₂ ring with p null-homotopic, and Hopkins–Mahowald identify Mf with H𝔽ₚ (our own).

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “For all 𝔼₂-W⁺(k)-algebras A, the mapping space Map\_{Alg<sub>W⁺(k)</sub><sup>𝔼₂</sup>}(M f<sub>k,pu</sub>, A) could be naturally identified with the space of null-homotopies of the composite map W⁺(k) →m<sub>pu</sub> W⁺(k) →η A”

**Sources:**

- [Mark Mahowald, Ring spectra which are Thom complexes, Duke Mathematical Journal 46 (1979) 549–559](https://doi.org/10.1215/S0012-7094-79-04628-3)

### E∞ cochains determine finite type nilpotent spaces up to weak equivalence

**Remember:** Keep the cup product's higher homotopies, and you keep the space.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55P15. arXiv math.AT. Level 4: research.

**Definition.** An E∞ cochain algebra is a cochain complex with an action of an E∞ operad (our own). The action keeps all higher homotopies for the commutativity of the cup product, and so the Steenrod operations (our own).

**Problem.** Finite type nilpotent spaces X and Y are weakly equivalent if and only if their E∞ cochain algebras over ℤ are quasi-isomorphic (Mandell).

**How the definition helps.** The E∞ structure keeps the Steenrod operations that the cohomology ring forgets, so a complete integral invariant becomes possible to state. For example, ΣℂP² and S³ ∨ S⁵ have isomorphic cohomology rings but differ by Sq² (our own). Mandell deduces the theorem from his p-adic version over the algebraic closure of 𝔽ₚ and an arithmetic square (our own summary).

**nLab:** [E-infinity algebra](https://ncatlab.org/nlab/show/E-infinity+algebra). It says: “Finite type nilpotent spaces X and Y are weakly homotopy equivalent if and only if the E∞-algebras C<sup>\*</sup>(X,ℤ) and C<sup>\*</sup>(Y,ℤ) are quasi-isomorphic.”

**Sources:**

- [Michael A. Mandell, Cochains and homotopy type, Publications Mathématiques de l'IHÉS 103 (2006) 213–246](https://doi.org/10.1007/s10240-006-0037-6)

### E∞-ring spectra let elliptic cohomology theories glue into tmf

**Remember:** Use commutative ring spectra so compatible local theories have a homotopy limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55N34, 18N70. arXiv math.AT, math.AG. Level 4: research.

**Definition.** An E∞-ring spectrum is a commutative algebra in the ∞-category of spectra under smash product, with commutativity holding up to all higher homotopies (our own). Unlike cohomology theories, such rings have homotopy limits, so a sheaf of them has global sections (our own).

**Problem.** On the smooth elliptic moduli stack, the presheaf of elliptic cohomology theories on flat charts lifts to a sheaf of E∞-ring spectra, unique up to homotopy (Goerss–Hopkins–Miller). Its global sections give periodic topological modular forms.

**How the definition helps.** Global sections of a sheaf of E∞-rings are a homotopy limit in E∞-rings, which a diagram of mere cohomology theories lacks (our own). Goerss–Hopkins–Miller lift the elliptic theories to such a sheaf, and its global sections are periodic TMF (our own).

**nLab:** [A Survey of Elliptic Cohomology - E-infinity rings and derived schemes](https://ncatlab.org/nlab/show/A+Survey+of+Elliptic+Cohomology+-+E-infinity+rings+and+derived+schemes). It says: “To get a single cohomology theory from that we want to take global sections, but there is no good way to say what a global section of a cohomology-theoy valued functor would be.”

**Sources:**

- [Paul G. Goerss, Topological modular forms (after Hopkins, Miller, and Lurie), Séminaire Bourbaki, 2009, arXiv:0910.5130](https://arxiv.org/abs/0910.5130)

### Faithful Galois extensions of ring spectra survive every base change

**Remember:** Faithful: extension to B kills no nonzero module.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)). arXiv math.AT. Level 4: research.

**Definition.** A finite G-Galois extension A → B is faithful if extension to B kills no nonzero module (our own). That is, B ∧ₐ M ≃ 0 implies M ≃ 0 for every A-module M (our own).

**Problem.** Let A → B be a faithful G-Galois extension and A → A′ any map of E∞ rings. Then A′ → A′ ∧ B over A is again a faithful G-Galois extension.

**How the definition helps.** Faithfulness lets one check the Galois conditions after extension to B, where the splitting B ∧ₐ B ≃ ∏B makes them hold (our own). Faithfulness itself survives base change, so this check also works for A′ → A′ ∧ B over A (our own). Without it, base change from C∗(BC₂; 𝔽₂) to its Tate ring kills the covering algebra 𝔽₂ (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “G-Galois extensions are stable under dualizable base-change. Faithful G-Galois extensions are stable under arbitrary base-change.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Faithfulness makes Galois descent hold and excludes cochains on BG

**Remember:** Faithful means only the zero module becomes zero after extension to B.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 20C20. arXiv math.AT, math.RT. Level 4: research.

**Definition.** A finite G-Galois extension A → B is faithful if extension to B kills no nonzero module (our own). That is, B ∧ₐ M ≃ 0 implies M ≃ 0 for every A-module M (our own).

**Problem.** For a faithful G-Galois extension A → B, A-modules are the same as B-modules with a homotopy-coherent semilinear G-action. In symbols, Mod(A) is the homotopy fixed points of G acting on Mod(B).

**How the definition helps.** Faithfulness makes extension to B detect equivalences, which is what descent needs (our own). Mathew's descendability theorem then gives module descent, and the Galois equivalences turn its diagram into the G-action diagram (our own). Cochains on BC₂ over 𝔽₂ fail: their Tate module is nonzero but becomes zero over 𝔽₂ (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If f : R → S is a faithful G-Galois extension of 𝔼<sub>∞</sub>-rings, then we have a natural equivalence of ∞-categories Mod(R) ≃ Mod(S)<sup>hG</sup>.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)
- [Akhil Mathew, The Galois group of a stable homotopy theory, Advances in Mathematics 291 (2016) 403–541](https://doi.org/10.1016/j.aim.2015.12.017)

### Picard spectra let Galois descent compute Picard groups of ring spectra

**Remember:** Make Pic a spectrum, then descend it like any limit.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For an E∞ ring A, the Picard spectrum pic(A) is the connective spectrum of invertible A-modules and their equivalences, added by tensor product (our own). Taking it commutes with limits of symmetric monoidal module categories (our own).

**Problem.** For a faithful finite G-Galois extension A → B, pic(A) is the connective cover of pic(B)ʰᴳ. Under strong convergence, its homotopy fixed-point spectral sequence from Hˢ(G; πₜpic(B)) computes Pic(A) in total degree zero.

**How the definition helps.** Galois descent gives Mod(A) ≃ Mod(B)ʰᴳ, and pic preserves this limit, so pic(A) is the connective cover of pic(B)ʰᴳ (our own). The homotopy fixed-point spectral sequence of this limit then computes Pic(A) in total degree zero. For KO → KU this gives Pic(KO) ≅ ℤ/8 (our own summary of Mathew and Stojanoska).

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If A → B is a faithful G-Galois extension of 𝔼<sub>∞</sub>-ring spectra, then there is a natural equivalence of symmetric monoidal ∞-categories: Mod(A) ≃ (Mod(B))<sup>hG</sup>”

**Sources:**

- [Akhil Mathew and Vesna Stojanoska, The Picard group of topological modular forms via descent theory, Geometry &amp; Topology 20 (2016) 3133–3217](https://doi.org/10.2140/gt.2016.20.3133)

### Principal bundles give Galois extensions of cochain ring spectra

**Remember:** Fixed points recover the base; B ∧ₐ B splits into Γ copies.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55R20. arXiv math.AT. Level 4: research.

**Definition.** Let a finite group Γ act on a commutative A-algebra B in spectra. B is Γ-Galois over A if A → BʰΓ is an equivalence and B ∧ₐ B splits as Γ copies of B (our own). The map to the copy for g multiplies the first factor by g applied to the second (our own).

**Problem.** Let P → X be a principal Γ-bundle, with Γ finite, X path-connected, and π₁(X) acting nilpotently on k\[Γ\], the homology of the fibre. Then the map of cochain rings F(X₊, k) → F(P₊, k) is a Γ-Galois extension.

**How the definition helps.** Both conditions concern spectra, so a covering space supplies them even when cohomology rings are not Galois (our own). Γ acts freely on P over X, giving the fixed points, and P ×<sub>X</sub> P is Γ copies of P, giving the product. The Eilenberg–Moore theorem, which needs the nilpotence hypothesis, turns that fibre product into a smash product of cochains (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “Let Γ be a finite discrete group, and P → X a principal Γ-bundle. Suppose that X is path-connected and π<sub>1</sub>(X) acts nilpotently on H\_\*(Γ;k). Then the map of cochain k-algebras F(X\_+,k) → F(P\_+,k) is a Γ-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Profinite Galois extensions make Morava E-theory Galois over the K(n)-local sphere

**Remember:** Build from finite Galois quotients, take their colimit, then localize.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A K(n)-local profinite G-Galois extension of A is a compatible system of faithful G/U-Galois extensions of A, one for each open normal subgroup U (our own). Its target B is the K(n)-localization of their colimit (our own).

**Problem.** The unit map from the K(n)-local sphere to Morava E-theory Eₙ is a K(n)-local profinite Galois extension. The group is the Morava stabilizer group 𝔾ₙ, acting by the Goerss–Hopkins–Miller action.

**How the definition helps.** The definition makes the Devinatz–Hopkins fixed-point spectra the finite stages of one Galois extension, so their results become a single statement (our own). The work is the Devinatz–Hopkins construction of homotopy fixed points of Eₙ for closed subgroups of 𝔾ₙ. It also needs their proof that the fixed points of all of 𝔾ₙ form the K(n)-local sphere.

**Paper or page:** [Picard and Brauer groups of K(n)-local spectra via profinite Galois descent](https://arxiv.org/abs/2306.05393v2). It says: “The unit L<sub>K(h)</sub> 𝕊 → E<sub>h</sub> is a K(h)-local profinite Galois extension for the Goerss-Hopkins-Miller action of 𝔾<sub>h</sub>.”

**Sources:**

- [Ethan S. Devinatz and Michael J. Hopkins, Homotopy fixed point spectra for closed subgroups of the Morava stabilizer groups, Topology 43 (2004) 1–47](https://doi.org/10.1016/S0040-9383(03)00029-6)
- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Ring spectra let one compact generator make a stable category modules

**Remember:** Mapping out preserves sums, and all shifts together detect zero.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55U35, 18G80. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An object P of a stable model category is a compact generator if \[P, −\] on the homotopy category preserves arbitrary coproducts (our own). It must also detect zero: X ≃ 0 whenever \[ΣⁿP, X\] = 0 for all integers n (our own). Its self-maps in all degrees form a ring spectrum End(P) (our own).

**Problem.** Let a stable model category be simplicial, cofibrantly generated and proper, with one compact generator P. Then it is Quillen equivalent to the category of modules over the ring spectrum End(P) (Schwede–Shipley).

**How the definition helps.** Ring spectra let End(P) have homotopy in every degree, so mapping out of P lands in End(P)-modules with no condition on those degrees (our own). Rickard's Morita theory for rings instead needs a tilting complex, whose self-maps lie only in degree zero. The work went into Schwede and Shipley's construction of mapping spectra in a model category.

**nLab:** [stable model category](https://ncatlab.org/nlab/show/stable+model+category), [derived Morita equivalence](https://ncatlab.org/nlab/show/derived+Morita+equivalence). It says: “there is just one compact generator P ∈ 𝒞, then there is a one-object Sp-enriched category, hence an A-infinity algebra A, which is the endomorphisms A ≃ End\_𝒞(P), and the stable model category is its category of modules”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Rognes's Galois extensions make KO → KU a Galois extension

**Remember:** Fixed points recover the base; B ∧ₐ B splits into G copies.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55N15. arXiv math.AT, math.KT. Level 4: research.

**Definition.** Let a finite group G act on a commutative A-algebra B in spectra. B is G-Galois over A if A → Bʰᴳ is an equivalence and B ∧ₐ B splits as G copies of B (our own). The map to the copy for g multiplies the first factor by g applied to the second (our own).

**Problem.** Complex conjugation makes complex K-theory KU a C₂-Galois extension of real K-theory KO. This holds although π∗KO → π∗KU is not a Galois extension of graded rings.

**How the definition helps.** The definition asks for equivalences of spectra, so it can hold when the map of homotopy rings is far from Galois. A Galois extension of rings is injective, but the Hopf class η in π₁KO maps to zero in π₁KU (our own). The fixed points are KU<sup>hC₂</sup> ≃ KO, and the product condition follows from Wood's theorem KO ∧ Cη ≃ KU (our own summary of Rognes).

**Wikipedia:** [G-spectrum](https://en.wikipedia.org/wiki/G-spectrum). It says: “Example: KO → KU is a ℤ./2-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Thom spectra as colimits make n-fold loop maps give Eₙ ring spectra

**Remember:** Glue sphere lines by a colimit; colimits respect smash, so structure transfers.

*True by definition.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55R25, 55N22. arXiv math.AT. Level 4: research.

**Definition.** For a map f from a space X to BGL₁(S), the Thom spectrum Mf is the colimit over X of the sphere lines that f classifies (our own). Smash products commute with colimits, so this construction turns products of maps into smash products (our own).

**Problem.** If f is a map of n-fold loop spaces, then Mf is an Eₙ ring spectrum; infinite loop maps give E∞ ring spectra. In particular MO, MSO, MSpin, MString and MU are E∞ ring spectra.

**How the definition helps.** So the Thom functor from spaces over BGL₁(S) is symmetric monoidal, and such a functor carries Eₙ algebras to Eₙ algebras (our own outline). An n-fold loop map is an Eₙ algebra over BGL₁(S), so Mf is an Eₙ ring (our own). With the classical definition by Thom spaces, Lewis needed a long point-set construction for the E∞ structure (our own).

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “the sufficient condition for a Thom spectrum of an ∞-module bundle (as above) to have an E-∞ ring structure is that it arises as the (∞,1)-colimit of a homomorphism of E-∞ spaces B → A Line (ABG 10, prop.6.21)”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)

### Thom spectrum models make THH of perfectoid rings polynomial

**Remember:** Write HR as a Thom spectrum, and THH becomes loop-space homology.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 19D55, 14F30. arXiv math.AT, math.KT. Level 4: research.

**Definition.** For an associative ring spectrum A, THH(A) is the realization of the cyclic bar construction, with n+1 copies of A smashed around a circle in degree n (our own). When A is the Thom spectrum of a loop map, THH(A) is again a Thom spectrum, over a free loop space (our own).

**Problem.** For every perfectoid ring R, the p-completed THH(HR) is HR smashed with ΩS³₊. So its homotopy ring is the polynomial ring R\[u\] with u in degree 2, which is Bökstedt's theorem when R = 𝔽ₚ.

**How the definition helps.** Writing HR as a Thom spectrum makes THH(HR) a Thom spectrum too, which reduces it to HR smashed with ΩS³₊ (our own outline). The homology of ΩS³ is polynomial on one class of degree 2, which gives R\[u\]. Bökstedt's original proof for 𝔽ₚ needed a hard spectral sequence computation with Dyer–Lashof operations (our own).

**Wikipedia:** [Topological Hochschild homology](https://en.wikipedia.org/wiki/Topological_Hochschild_homology). It says: “In contrast, the Topological Hochschild Homology ring has the isomorphism THH\_\*(𝔽<sub>p</sub>) = 𝔽<sub>p</sub>\[u\] giving a less pathological theory.”

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “The (absolute) topological Hochschild homology THH(H R)<sub>p</sub><sup>∧</sup> ≃ H R ⊗ Ω S³ as 𝔼₁-ring spectra.”

**Sources:**

- [Andrew J. Blumberg, Ralph L. Cohen and Christian Schlichtkrull, Topological Hochschild homology of Thom spectra and the free loop space, Geometry &amp; Topology 14 (2010) 1165–1242](https://doi.org/10.2140/gt.2010.14.1165)

### Twisted spectra over a connected space are modules over a Thom spectrum

**Remember:** A twisted spectrum is a section of spectra transported around B.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (E<sub>∞</sub>, A<sub>∞</sub>, ring spectra, etc.)), 55R70. arXiv math.AT. Level 4: research.

**Definition.** A twist on B is a map σ from B to BPic(S), the delooping of the space Pic(S) of invertible spectra (our own). A σ-twisted spectrum is a section of the bundle of ∞-categories of spectra that σ classifies (our own).

**Problem.** For a connected space B with a twist σ, σ-twisted spectra on B are the modules over the Thom spectrum of Ωσ. For the trivial twist, spectra parametrized over B are modules over the spherical group ring Σ∞₊ΩB.

**How the definition helps.** For connected B, the twisted spectrum induced from a point generates, so Morita theory makes twisted spectra modules over its endomorphism ring (our own outline). That endomorphism ring is the Thom spectrum of the loop map Ωσ from ΩB to Pic(S) (our own). For the trivial twist this ring is Σ∞₊ΩB (our own).

**Paper or page:** [Twisted Spectra Revisited](https://arxiv.org/abs/2312.07403v2). It says: “Let B be a connected space and consider a haunt σ : B → BPic(𝕊). Then, there is a natural equivalence TwSp(B,σ) ≃ Mod<sub>Th(Ω σ)</sub> of ∞-categories.”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### Cofinal completion changes only components

**Remember:** Every component can be topped up into A by adding something.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 19D23. arXiv math.KT, math.AT. Level 4: research.

**Definition.** An inclusion A ⊆ B of E∞-monoids onto a union of components is cofinal if every component of B can be added into A (our own). That is, for each b ∈ π₀B some c ∈ π₀B has b + c ∈ π₀A (our own).

**Problem.** After group completion, a cofinal inclusion gives an injection on components and isomorphisms on all higher homotopy groups.

**How the definition helps.** Each component of B lands in A after adding something, so group completion adds no new homotopy above degree zero (our own). Lehner's cofinality theorem proves this. For example, free modules are cofinal among finitely generated projective modules, since each projective is a summand of a free one (our own).

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “is injective in degree 0 and an isomorphism for i &gt; 0.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Group-like fixed points recognize equivariant V-fold loop spaces

**Remember:** Ask group-like fixed points only where Vᴴ has room to loop.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G and a real G-representation V, an 𝔼ᵥ-algebra is a G-space with multiplications given by embeddings of V-framed G-disks. When dim Vᴴ ≥ 1 its fixed points Aᴴ inherit a multiplication, and A is group-like at H if π₀(Aᴴ) is then a group (our own).

**Problem.** An 𝔼ᵥ-algebra A is equivalent to a V-fold loop space exactly when Aᴴ is group-like for every subgroup H with dim Vᴴ ≥ 1. This holds for every V; earlier results needed a trivial summand in V.

**How the definition helps.** A loop space is group-like in each direction it can loop, so a V-fold loop space has group-like Aᴴ exactly where Vᴴ is nonzero (our own). Where Vᴴ is zero, Aᴴ has no multiplication and no condition is asked (our own). The hard part is the equivariant approximation theorem for all V and all based G-spaces.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “We prove that an 𝔼ᵥ-algebra is equivalent to a V-fold loop space if and only if Aᴴ is group-like for all H such that dim Vᴴ ≥ 1. This generalizes a result by Guillou and May”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups, arXiv:2508.04421 (2025)](https://arxiv.org/abs/2508.04421)
- [Bertrand Guillou, J. Peter May, Equivariant iterated loop space theory and permutative G-categories, Algebr. Geom. Topol. 17 (2017) 3259–3339](https://doi.org/10.2140/agt.2017.17.3259)

### Stable automorphisms recover completion loops

**Remember:** An arrow multiplies its source, then follows a path to its target.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** An Eₙ-monoid is a space with multiplications parametrized by configurations of little n-cubes. Its action category has the points as objects. An arrow from x to y is a multiplier k with a path from kx to y, with higher homotopies kept.

**Problem.** Let X be an Eₙ-monoid with n ≥ 2, and let Xᵍᵖ be its group completion. Then the loop space ΩXᵍᵖ is the colimit, in E₁-groups, of the automorphism groups Aut(x) over the action category.

**How the definition helps.** Each arrow compares a loop at x with one at y: multiply by k, then transport along the path (our own). Lehner's theorem identifies the universal group built from these comparisons with ΩXᵍᵖ.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “There is a natural equivalence of E₁-groups ΩXᵍᵖ ≃ colimₓ∈𝐄𝐗 Aut(x) where the colimit is taken in the ∞-category of E₁-groups.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Transfer systems classify N∞ operads up to homotopy

**Remember:** Order subgroups by allowed transfers, closed under conjugation and restriction.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** A transfer system on a finite group G is a partial order ≼ on subgroups, read as allowed transfers, that refines inclusion and is conjugation invariant (our own). It is closed under restriction: K ≼ H and L ≤ H give K ∩ L ≼ L (our own).

**Problem.** The homotopy category of G-N∞ operads is equivalent to the lattice of transfer systems on G.

**How the definition helps.** Up to homotopy an N∞ operad is determined by which norms its algebras have, and a transfer system records exactly those norms (our own). Blumberg and Hill set up this comparison. The hard part, that every transfer system comes from an operad, is due to Rubin and to others (our own).

**Paper or page:** [Transfer systems for rank two elementary Abelian groups: characteristic functions and matchstick games](https://arxiv.org/abs/2310.13835). It says: “There is a functor from the category of G-N∞ operads to (the category induced by) the lattice Tr(G) that induces an equivalence between the homotopy category of G-N∞ operads and Tr(G).”

**Sources:**

- [Linus Bao, Christy Hazel, Tia Karkos, Alice Kessler, Austin Nicolas, Kyle Ormsby, Jeremie Park, Cait Schleff, Scotty Tilton, Transfer systems for rank two elementary abelian groups: characteristic functions and matchstick games, Tunisian J. Math. 7 (2025) 167–191, arXiv:2310.13835](https://doi.org/10.2140/tunis.2025.7.167)
- [Andrew J. Blumberg, Michael A. Hill, Operadic multiplications in equivariant spectra, norms, and transfers, Adv. Math. 285 (2015) 658–708](https://doi.org/10.1016/j.aim.2015.07.013)

### Defining invertibility with the K(n)-local smash product gives an algebraic test

**Remember:** Invertible: some partner smashes with X to the local sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p and height n. A K(n)-local spectrum X is invertible if it has an inverse for the K(n)-local smash product: some K(n)-local Y has L<sub>K</sub>(n)(X ∧ Y) ≃ L<sub>K</sub>(n)S (our own).

**Problem.** A K(n)-local spectrum X is invertible exactly when its completed Morava E-theory is an invertible graded module over Eₙ\*. That theory is the homotopy of the K(n)-localization of Eₙ ∧ X.

**How the definition helps.** The definition uses the K(n)-local smash product, the product that completed Morava E-theory sees, so invertibility can be tested in E-theory (our own). The Hopkins–Mahowald–Sadofsky criterion shows the test works in both directions (our own).

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455), [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “The followings are equivalent: X ∈ Sp<sub>K</sub>(h) is invertible. (Eₕ)\*(X) is an invertible graded (Eₕ)\*-module.”

**Sources:**

- [M. J. Hopkins, M. Mahowald and H. Sadofsky, Constructions of elements in Picard groups, Contemporary Mathematics 158 (1994) 89–126](https://doi.org/10.1090/conm/158/01454)

### Finite localizations are smashing because their acyclics are built from compact spectra

**Remember:** Locality is tested by finite spectra, which commute with sums.

*True by definition.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** For a set A of finite spectra, call a spectrum Z local if no suspension of a member of A maps nontrivially to Z (our own). That is, \[ΣᵏF, Z\] = 0 for all F ∈ A and integers k. Finite localization away from A sends each spectrum to its universal local target (our own).

**Problem.** Every finite localization is smashing, that is, smash product with the localized sphere, so it commutes with all homotopy colimits. In particular, finite localization away from the finite spectra on which K(0), …, K(n) vanish is smashing, where K(i) are the Morava K-theories.

**How the definition helps.** Maps out of a finite spectrum commute with infinite sums, so sums of local spectra are local (our own outline). So the localization preserves sums and hence is smashing (our own outline). For a homology theory the acyclics need not come from finite spectra: p-completion is not smashing, and for Morava E-theory smashing is the deep Hopkins–Ravenel theorem.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “finite localizations" are smashing”

**Sources:**

- [H. R. Miller, Finite localizations, Boletín de la Sociedad Matemática Mexicana 37 (1992) 383–390](http://hopf.math.purdue.edu/cgi-bin/generate?/MillerH/finite-localization)

### Generalized Moore spectra make K(n)-localization a completion of Lₙ

**Remember:** K(n)-localization is E(n)-localization followed by completion along Moore spectra.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** For a prime p and height n ≥ 1, a generalized Moore spectrum of type n is a finite p-local spectrum M with Eₙ∗M ≅ Eₙ∗/J (our own). Here J is a proper homogeneous invariant ideal that contains a power of the maximal ideal (our own). M plays for K(n)-localization the role that S/pᵏ plays for p-completion (our own).

**Problem.** With Lₙ the localization at Eₙ, there is a tower of generalized Moore spectra Mⱼ of type n whose ideals intersect in zero. For every spectrum X, its K(n)-localization is the homotopy limit of LₙX ∧ Mⱼ.

**How the definition helps.** A tower of such spectra with ideals shrinking to zero makes K(n)-localization a completion of Lₙ, as p-completion is a limit of X ∧ S/pᵏ. Each LₙX ∧ Mⱼ is K(n)-local, and the map from X to the limit is a K(n)-equivalence (our own summary). The tower, with compatible multiplications, is due to Hovey and Strickland.

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039). It says: “Denote the Bousfield localization at the height n Morava E-theory Eₙ by Lₙ. For any spectrum X, we have a natural equivalence: L<sub>K</sub>(n)X ≃ holimⱼ(LₙX ∧ Mⱼ).”

**Sources:**

- [M. Hovey and N. P. Strickland, Morava K-theories and localisation, Memoirs of the AMS 139 (1999), no. 666](https://doi.org/10.1090/memo/0666)

### Moore spectrum localizations depend only on invertible primes and torsion

**Remember:** Two groups that kill the same spectra give the same localization.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A Moore spectrum SA of an abelian group A is a connective spectrum with integral homology A in degree zero and zero elsewhere (our own). Localization at SA inverts exactly the maps whose cofiber Y has SA ∧ Y ≃ 0, so it depends only on which spectra SA kills (our own).

**Problem.** The localizations at SA₁ and SA₂ agree exactly when the same primes are invertible in A₁ and A₂ and both or neither are torsion. So each such localization is either localization at a subring of ℚ or completion at a set of primes.

**How the definition helps.** Because the localization depends only on the acyclic spectra, two Moore spectra with the same acyclics give the same localization. Bousfield showed that the acyclics of SA depend only on which primes are invertible in A and on whether A is torsion. The work is that computation of acyclic spectra.

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “A₁ and A₂ have the same type of acyclicity, meaning that every prime number p is invertible in A₁ precisely if it is in A₂; A₁ is a torsion group precisely if A₂ is.”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Enriched Lie models extend Sullivan theory to all connected spaces

**Remember:** The algebra is the inverse limit of finite nilpotent quotients.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory), 17B70. arXiv math.AT. Level 4: research.

**Definition.** An enriched differential graded Lie algebra over ℚ equals the inverse limit of its quotients by a directed system of differential ideals (our own). Each of these quotients is finite-dimensional and nilpotent (our own).

**Problem.** Every connected space has a minimal enriched Lie model unique up to isomorphism. An algebraic process connects it to the minimal Sullivan model.

**How the definition helps.** An inverse limit of finite-dimensional nilpotent quotients can hold the completed Lie algebra that a connected space needs in degree zero, whatever its fundamental group (our own). The enriched Lie minimal-model theorem gives existence, uniqueness up to isomorphism, and the comparison with Sullivan models.

**Paper or page:** [Enriched Differential Lie Algebras in Topology](https://arxiv.org/abs/2208.12171). It says: “Each connected space has a unique minimal edgl model, and an algebraic process connects this to the minimal Sullivan model.”

**Sources:**

- [Yves Félix, Steve Halperin, Enriched Differential Lie Algebras in Topology, arXiv:2208.12171 (2022)](https://arxiv.org/abs/2208.12171)

### Away from the group order, geometric fixed points split G-spectra by subgroups

**Remember:** Remove proper isotropy before taking fixed points, retaining the Weyl action.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** To form the geometric H-fixed points ΦᴴX of a genuine G-spectrum X, restrict to H, kill cells induced from proper subgroups, and take derived H-fixed points (our own). They carry a residual action of the Weyl group W(H) = N<sub>G</sub>(H)/H (our own).

**Problem.** If p does not divide the order of G, the functors Φᴴ, one per conjugacy class of subgroups H, together give a symmetric monoidal equivalence of homotopy categories. It goes from p-local G-spectra to the product over H of p-local spectra with a W(H)-action.

**How the definition helps.** Inverting the group order splits the Burnside ring into idempotents, one per conjugacy class of subgroups, and these split every p-local G-spectrum (our own). On the summand for H, Φᴴ is an equivalence onto spectra with a W(H)-action (our own).

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “For G finite and for rational equivariant stable homotopy theory this becomes”

**Paper or page:** [On the KU<sub>G</sub>-local equivariant sphere](https://arxiv.org/abs/2204.03797). It says: “Let p be a prime not dividing the order of the group G. Then the collection of geometric fixed point functors, as (H) runs over conjugacy classes of subgroups, yields a symmetric monoidal equivalence of categories”

**Sources:**

- [On the KU<sub>G</sub>-local equivariant sphere, arXiv:2204.03797](https://arxiv.org/abs/2204.03797)

### Completing the Burnside ring at its augmentation ideal makes Segal's conjecture true

**Remember:** Complete by keeping compatible residues modulo every power of the augmentation ideal.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22, 55Q55. arXiv math.AT. Level 4: research.

**Definition.** The Burnside ring A(G) of a finite group G has an augmentation ideal I, the kernel of the map to ℤ that counts the elements of a G-set. Its I-adic completion is the inverse limit of the rings A(G)/Iⁿ.

**Problem.** Let G be a finite group, and add a disjoint base point to BG. The inverse limit over skeleta of its stable cohomotopy in degree zero is the I-adic completion of A(G) (Carlsson).

**How the definition helps.** The ideal I acts nilpotently on the stable cohomotopy of each finite skeleton of BG, so the limit sees at most the I-adic completion (our own). Carlsson's proof of the Segal conjecture shows that it sees exactly the completion (our own). For C₂, I² = 2I, so completion gives a 2-adic summand, matching Lin's calculation (our own).

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “On the right-hand side, the hat denotes the completion of the Burnside ring with respect to its augmentation ideal.”

**Sources:**

- [G. Carlsson, Equivariant stable homotopy and Segal's Burnside ring conjecture, Annals of Mathematics 120 (1984) 189–224](https://doi.org/10.2307/2006940)
- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)

### Equivariant suspensions give group completions

**Remember:** Free algebra, then inverses, equals loops on the suspension.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P48. arXiv math.AT. Level 4: research.

**Definition.** Let V be a real representation of a finite group G. A little V-disks algebra A is grouplike if π₀(Aᴴ) is a group whenever dim Vᴴ ≥ 1 (our own). Group completion is the universal map to a grouplike algebra (our own).

**Problem.** For any based G-space X, the group completion of the free little V-disks algebra on X is equivalent to ΩⱽΣⱽX. Here Σⱽ smashes with the one-point compactification Sⱽ of V, and Ωⱽ takes based maps from Sⱽ.

**How the definition helps.** Both sides are the free grouplike algebra on X (our own). Freely adding operations and then inverses gives the left side this property. Juran's recognition theorem and the suspension–loop adjunction give ΩⱽΣⱽX the same universal property (our own).

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “exhibits the target as the group completion of the source.”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421)

### Genuine Cₚ-spectra are Borel spectra glued to geometric fixed points through Tate

**Remember:** Free part plus geometric fixed points, glued along a map to Tate.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let Cₚ be the cyclic group of order p. A genuine Cₚ-spectrum has two parts: its underlying spectrum X with a Cₚ-action, and its geometric fixed points Φ. The Tate spectrum of X, the cofibre of the norm from homotopy orbits to homotopy fixed points, is where the two parts are glued (our own).

**Problem.** Genuine Cₚ-spectra are equivalent to triples: a spectrum X with a Cₚ-action, a spectrum Φ, and a map from Φ to the Tate spectrum of X. The genuine fixed points are the pullback of Φ and the homotopy fixed points of X over the Tate spectrum.

**How the definition helps.** Cₚ has only two orbit types, so isotropy separation cuts a genuine spectrum into its free part and Φ (our own summary). The two parts meet in the Tate spectrum, so the gluing is one map from Φ to the Tate spectrum of X (our own summary). The work went into proving that this gluing recovers the genuine category.

**nLab:** [G-spectrum](https://ncatlab.org/nlab/show/G-spectrum). It says: “genuine G-spectra admit a simple model which amounts to specifying a spectrum E, a G-action on E, a genuine fixed point spectrum Eᴳ, and a diagram E<sub>hG</sub> → Eᴳ → Eʰᴳ.”

**Sources:**

- [T. Nikolaus and P. Scholze, On topological cyclic homology, Acta Mathematica 221 (2018) 203–409](https://doi.org/10.4310/ACTA.2018.v221.n2.a1)

### Genuine fixed points of a suspension G-spectrum split over conjugacy classes

**Remember:** Index on every representation, and every orbit gets a transfer.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A genuine G-spectrum, for a finite group G, is indexed on all representations, so every representation sphere is invertible (our own). This gives a transfer for every orbit G/H (our own). Its fixed point spectrum is the derived G-fixed points, and the Weyl group of H is W(H) = N(H)/H.

**Problem.** For finite G and a based G-space X, the fixed point spectrum of the suspension G-spectrum of X is a wedge over conjugacy classes of subgroups H. The summand for H is the suspension spectrum of the homotopy orbits of Xᴴ under W(H).

**How the definition helps.** Each conjugacy class of subgroups H contributes a summand through its transfer, built from Xᴴ and its residual W(H)-action (our own). The tom Dieck splitting theorem identifies that summand with the suspension spectrum of the homotopy orbits of Xᴴ under W(H).

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “The tom Dieck splitting (tom Dieck 75, Lewis-May-Steinberger 86, V.11) gives an explicit description of all the wedge summands appearing in fixed point spectra of equivariant suspension spectra.”

**Sources:**

- [T. tom Dieck, Orbittypen und äquivariante Homologie II, Archiv der Mathematik 26 (1975) 650–662](https://doi.org/10.1007/BF01229795)
- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Genuine stable maps between representation spheres form the Burnside ring

**Remember:** Degrees on all fixed spheres are the marks of a G-set.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** The Burnside ring A(G) of a finite group G is the group completion of isomorphism classes of finite G-sets under disjoint union, with product from cartesian product (our own). A G-set is determined by its marks, the numbers of points fixed by each subgroup (our own).

**Problem.** For every finite group G, the zeroth G-equivariant stable homotopy group of the genuine sphere spectrum is isomorphic to A(G) (Segal).

**How the definition helps.** A stable self-map of the G-sphere has a degree on each fixed sphere, just as a G-set has one mark per subgroup (our own). Segal's theorem shows that these degrees satisfy exactly the relations among marks, so the group is A(G) (our own).

**nLab:** [equivariant stable cohomotopy](https://ncatlab.org/nlab/show/equivariant+stable+cohomotopy), [Burnside ring](https://ncatlab.org/nlab/show/Burnside+ring). It says: “Let G be a finite group, then its Burnside ring A(G) is isomorphic to the equivariant stable cohomotopy cohomology ring 𝕊<sub>G</sub>(∗) of the point in degree 0.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Geometric fixed points detect nilpotence in the C₂-equivariant stable stems

**Remember:** Check nilpotence twice: underlying and geometric fixed points.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55Q91. arXiv math.AT. Level 4: research.

**Definition.** Let G be the group of order 2. A G-spectrum has two geometric fixed point spectra: the underlying spectrum, and Φᴳ, the fixed points after killing the free part. Both functors to ordinary spectra are symmetric monoidal, unlike genuine fixed points, and together they detect equivalences.

**Problem.** Take an element of the stable homotopy groups of the G-sphere, graded by representations of G. It is nilpotent exactly when its underlying image and its geometric fixed point image are both nilpotent.

**How the definition helps.** An element α is nilpotent exactly when the telescope that inverts α vanishes (our own). Both functors preserve smash products and colimits, so they carry this telescope to the telescopes of the images, and together they detect its vanishing (our own).

**Paper or page:** [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems](https://arxiv.org/abs/2211.04611). It says: “An element α ∈ π\_⋆<sup>C₂</sup> is nilpotent if and only if both its geometric fixed points Φ<sup>C₂</sup>(α) ∈ π\_\*<sup>s</sup> and its underlying non-equivariant map Φ<sup>e</sup>(α) ∈ π\_\*<sup>s</sup> are nilpotent.”

**Sources:**

- [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems, arXiv:2211.04611](https://arxiv.org/abs/2211.04611)

### Geometric fixed points take suspension spectra to suspension spectra of fixed points

**Remember:** Kill proper isotropy first, and only the fixed space remains.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For finite G, ΦᴳX is formed by killing all cells of X with proper isotropy, by smashing with ẼP, and then taking derived categorical fixed points (our own). Here ẼP is the cofiber of EP₊ → S⁰ for the family P of proper subgroups (our own).

**Problem.** For every based G-space A, geometric fixed points of its derived suspension G-spectrum give the suspension spectrum of Aᴳ. Geometric fixed points are symmetric monoidal, while categorical fixed points of the sphere have π₀ equal to A(G).

**How the definition helps.** Smashing with ẼP kills suspension cells with proper isotropy, and the remaining G-fixed cells become ordinary suspension cells of Aᴳ (our own). The functor is strong monoidal after deriving, which gives the smash product formula. Categorical fixed points instead keep the transfers, so for the sphere their π₀ is A(G) (our own).

**nLab:** [geometric fixed point spectrum](https://ncatlab.org/nlab/show/geometric+fixed+point+spectrum). It says: “The construction of geometric fixed point spectra is essentially uniquely characterized by the property Φᴳ(Σ∞<sub>G</sub> X) ≃ Σ∞(Xᴳ) and the property of being left derived strong monoidal and preserving homotopy colimits.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Homotopy fixed points defined by Kan extension compose in stages

**Remember:** A limit over BG can be taken in two stages.

*True by definition. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N60. arXiv math.AT. Level 4: research.

**Definition.** A coherent G-action on a space X is a functor from BG, the one-object groupoid with automorphisms G, to spaces with value X (our own). Its homotopy fixed points are the limit of this functor, that is, the right Kan extension along BG → ∗.

**Problem.** Let H be a normal subgroup of G. The H-homotopy fixed points inherit a coherent G/H-action, whose homotopy fixed points are the G-homotopy fixed points of X.

**How the definition helps.** Kan extensions compose, so the limit along BG → ∗ is the extension along BG → B(G/H) followed by the limit along B(G/H) → ∗ (our own). The first stage has value Xʰᴴ, since the fibre of BG → B(G/H) is BH, and it carries the G/H-action (our own).

**nLab:** [homotopy fixed point](https://ncatlab.org/nlab/show/homotopy+fixed+point). It says: “Generally, for G an ∞-group and X equipped with an ∞-action, then the homotopy fixed points is the base change along/dependent product over the delooping 𝐁G”

**Sources:** none listed. No primary source with a working link was found.

### Homotopy fixed points make the generalized Sullivan conjecture statable and true

**Remember:** Map equivariantly from a free contractible G-space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55S10. arXiv math.AT. Level 4: research.

**Definition.** For a group G, choose a free contractible G-CW complex EG. The homotopy fixed points Xʰᴳ are the space of equivariant maps EG → X. Each actual fixed point gives a constant map, so Xᴳ maps to Xʰᴳ (our own).

**Problem.** For a finite p-group G acting on a finite G-CW complex X, the natural map (Xᴳ)ₚ<sup>∧</sup> → (Xₚ<sup>∧</sup>)ʰᴳ is a weak equivalence.

**How the definition helps.** The definition gives the fixed points a homotopy-invariant target, so the comparison (Xᴳ)ₚ<sup>∧</sup> → (Xₚ<sup>∧</sup>)ʰᴳ makes sense (our own). That it is an equivalence is the generalized Sullivan conjecture, proved by Dwyer–Miller–Neisendorfer, Carlsson and Lannes (our own).

**Wikipedia:** [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “showing that the natural map (Xᴳ)ₚ → F(EG, (X)ₚ)ᴳ is a weak equivalence when the order of G is a power of a prime p”

**Sources:**

- [W. Dwyer, H. Miller and J. Neisendorfer, Fibrewise completion and unstable Adams spectral sequences, Israel Journal of Mathematics 66 (1989) 160–178](https://doi.org/10.1007/BF02765891)
- [G. Carlsson, Equivariant stable homotopy and Sullivan's conjecture, Inventiones Mathematicae 103 (1991) 497–525](https://doi.org/10.1007/BF01239524)
- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Periodic K-theory breaks Tate vanishing

**Remember:** Below one fixed degree, every homotopy group vanishes.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A spectrum X is bounded below if its homotopy groups vanish below some degree N: πₖX = 0 for every k &lt; N (our own).

**Problem.** Let a cyclic group of order p², for a prime p, act on a bounded-below spectrum. Taking homotopy orbits under the subgroup of order p, and then the Tate spectrum for the quotient group, gives zero.

**How the definition helps.** The lower bound excludes periodic complex K-theory, whose homotopy is nonzero in arbitrarily negative degrees (our own). With trivial action, that spectrum fails the vanishing at every prime (our own). Under the bound, vanishing is Nikolaus and Scholze's Tate orbit lemma (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Prime Tate powers preserve sums

**Remember:** Nonconstant words of prime length have free rotation orbits.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P43. arXiv math.AT. Level 4: research.

**Definition.** For each positive integer m, let Cₘ permute the factors of the m-fold smash power of X (our own). The Tate power of X is its Tate spectrum, the cofiber of the norm from homotopy orbits to homotopy fixed points (our own). For a sum X ∨ Y, the smash power splits into words of length m in X and Y, which Cₘ rotates (our own).

**Problem.** For prime m this operation preserves finite direct sums. For m = 4 it fails even on the sum of two sphere spectra, the units for the smash product.

**How the definition helps.** For prime m, every nonconstant word has a free rotation orbit, and free orbits have zero Tate construction, so only the two constant words remain (our own). For m = 4 the word XYXY has stabilizer C₂, so it contributes a C₂-Tate sphere (our own). The Segal conjecture for C₂ shows that this sphere is nonzero (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “Tate spectra for cyclic groups play a role in the characterization of cyclotomic spectra.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Smashing with Ẽ𝓕\[N\] identifies G/N-spectra with a localization of G-spectra

**Remember:** An idempotent ring cuts out the G/N-part of G-spectra.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For a normal subgroup N of a finite group G, let Ẽ𝓕\[N\] be the based G-space whose H-fixed points are S⁰ when H contains N and a point otherwise. Here 𝓕\[N\] is the family of subgroups that do not contain N. Its suspension spectrum is an idempotent ring: smashing it with itself gives it back.

**Problem.** Localizing G-spectra at the maps that become equivalences after smashing with Ẽ𝓕\[N\] is a smashing localization, and the local G-spectra are equivalent to G/N-spectra. Under this equivalence, the geometric fixed points for N become extension of scalars along the unit map of this idempotent ring.

**How the definition helps.** Because the ring is idempotent, its modules are exactly the local objects, and base change to it is just smashing with it. So the geometric fixed points for N are symmetric monoidal and preserve colimits (our own summary). The identification of the local G-spectra with G/N-spectra is due to Lewis, May and Steinberger.

**nLab:** [geometric fixed point spectrum](https://ncatlab.org/nlab/show/geometric+fixed+point+spectrum). It says: “is a smashing localization, given by smashing with the equivariant suspension spectrum of Ẽ𝓕\[N\]”

**Paper or page:** [Modular fixed points in equivariant homotopy theory](https://arxiv.org/abs/2506.21413). It says: “In particular, geometric fixed points Φ<sup>H</sup>: Sp<sup>G</sup> → Sp<sup>G//H</sup> under the above equivalence identify with the extension of scalars Sp<sup>G</sup> → Mod<sub>Φ<sub>H</sub>(𝕊)</sub>(Sp<sup>G</sup>) along 𝕊 → Φ<sub>H</sub>(𝕊).”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)
- [Y. Fuhrmann, Modular fixed points in equivariant homotopy theory, arXiv:2506.21413 (2025)](https://arxiv.org/abs/2506.21413)

### The Tate construction states the Segal conjecture for Cₚ as p-completion

**Remember:** Tate measures how far the norm is from an equivalence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let a finite group G act on a spectrum X. Its Tate spectrum is the cofiber of the norm from homotopy orbits to homotopy fixed points, so it measures how far the norm is from an equivalence (our own).

**Problem.** For the cyclic group Cₚ, the unit map from 𝕊 to the Cₚ-Tate spectrum of 𝕊 is a p-completion. This is Lin's theorem for p = 2 and Gunawardena's for odd p, and it is equivalent to the Segal conjecture for Cₚ.

**How the definition helps.** The Cₚ-fixed points of the genuine sphere are the pullback of the geometric fixed points 𝕊 and the homotopy fixed points 𝕊ʰᶜᵖ over 𝕊ᵗᶜᵖ (our own). So the Segal conjecture for Cₚ becomes a statement about the map 𝕊 → 𝕊ᵗᶜᵖ (our own). Lin and Gunawardena compute that this map is p-completion, for p = 2 and for odd p (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “then the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “The theorem relates the Burnside ring of a finite group G to the stable cohomotopy of the classifying space BG.”

**Sources:**

- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)
- [T. Nikolaus and P. Scholze, On topological cyclic homology, Acta Mathematica 221 (2018) 203–409](https://doi.org/10.4310/ACTA.2018.v221.n2.a1)

### Defining the e-invariant as an Ext class detects the image of J

**Remember:** The e-invariant is the extension class of K-theory of the mapping cone.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q50. arXiv math.AT. Level 4: research.

**Definition.** Represent an odd stable stem class by f from S²ⁿ⁺²ᵐ⁻¹ to S²ⁿ, with n and m positive (our own). Its mapping cone has K-theory extending K̃⁰(S²ⁿ) by K̃⁰(S²ⁿ⁺²ᵐ), compatibly with Adams operations (our own). The e-invariant is this extension class, read in ℚ/ℤ by Adams's identification (our own).

**Problem.** The e-invariant is a homomorphism from the odd stable stems to ℚ/ℤ, injective on the image of the J-homomorphism at odd primes. So at an odd prime each odd stem is the direct sum of the image of J and the kernel of e.

**How the definition helps.** Defining e(f) as an extension class makes it additive at once, because sums of maps give Baer sums of extensions (our own remark). The extension splits as abelian groups, so only the Adams operations carry information. Splitting off the image of J needs Adams's computation of e on it and the Adams conjecture, proved by Quillen and Sullivan.

**nLab:** [Adams e-invariant](https://ncatlab.org/nlab/show/Adams+e-invariant). It says: “Thus this short exact sequence defines an element in the Ext group formed in this category”

**Wikipedia:** [J-homomorphism](https://en.wikipedia.org/wiki/J-homomorphism). It says: “The stable homotopy groups πᵣˢ are the direct sum of the (cyclic) image of the J-homomorphism, and the kernel of the Adams e-invariant (Adams 1966), a homomorphism from the stable homotopy groups to ℚ/ℤ.”

**Sources:**

- [J. F. Adams, On the groups J(X) IV, Topology 5 (1966) 21–71](https://doi.org/10.1016/0040-9383(66)90004-8)

### Localizing the sphere at K-theory makes image-of-J orders zeta denominators

**Remember:** At odd p, the p-complete KU-local sphere is KU's ψᵍ-fixed points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55P60, 55Q50. arXiv math.AT, math.NT. Level 4: research.

**Definition.** The KU-local sphere is the universal map from the sphere spectrum to a KU-local spectrum (our own). A spectrum is KU-local if it receives only null maps from spectra Y with KU ∧ Y ≃ 0 (our own). At an odd prime p, its p-completion is the fibre of ψᵍ − 1 on p-complete KU, for g generating ℤₚ<sup>×</sup> topologically (our own).

**Problem.** For each n ≥ 1, π₂ₙ₋₁ of the KU-local sphere has order the denominator of ζ(1 − n), up to a power of 2. Away from 2, they are the image of the J-homomorphism, which maps homotopy of the orthogonal group to stable homotopy of spheres.

**How the definition helps.** So π₂ₙ₋₁ of the p-completion is the cokernel of gⁿ − 1 on ℤₚ, which is zero unless p − 1 divides n (our own outline). Otherwise its order is p times the p-part of n, the p-part of the denominator of ζ(1 − n) = −Bₙ/n (our own remark). The fibre description and its link to the image of J rest on Adams operations and on Quillen's proof of the Adams conjecture.

**Paper or page:** [Denominators of special values of zeta-functions count KU-local homotopy groups of mod p Moore spectra](https://arxiv.org/abs/2303.09550). It says: “the order \#(π₂ₙ(L<sub>KU</sub> S)) of the 2nth stable homotopy group π₂ₙ(L<sub>KU</sub> S) is a power of 2, and \#(π₂ₙ₋₁(L<sub>KU</sub> S)) = denom(ζ(1−n)) up to multiplication by a power of 2”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)

### Balmer's prime tensor ideals turn the thick subcategory theorem into a space

**Remember:** A prime containing a tensor product must contain a factor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q51 (v<sub>n</sub>-periodicity), 18G80. arXiv math.AT. Level 4: research.

**Definition.** A prime in an essentially small tensor triangulated category is a proper thick tensor ideal P that contains a factor of each product it contains (our own). That is, X ⊗ Y ∈ P forces X ∈ P or Y ∈ P (our own). The primes form the Balmer spectrum, with closed sets generated by the supports {P ∣ X ∉ P} (our own).

**Problem.** The Balmer spectrum of finite p-local spectra is a chain of points, the subcategories of type at least n for 1 ≤ n ≤ ∞. The closure of each point is the set of points with larger n.

**How the definition helps.** Balmer's theorem matches radical thick tensor ideals with suitable subsets of the spectrum, so classifying ideals becomes computing a space. For finite p-local spectra the thick subcategory theorem lists the ideals, and each kernel of K(n)\* is prime by the Künneth formula for K(n) (our own outline).

**nLab:** [prime spectrum of a symmetric monoidal stable (∞,1)-category](https://ncatlab.org/nlab/show/prime+spectrum+of+a+symmetric+monoidal+stable+%28%E2%88%9E%2C1%29-category). It says: “The prime spectrum of the (∞,1)-category of spectra (p-local and finite) is labeled by the Morava K-theories (Balmer 10, prop. 9.4). This follows from the the thick subcategory theorem.”

**Sources:**

- [P. Balmer, The spectrum of prime ideals in tensor triangulated categories, Journal für die reine und angewandte Mathematik 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [P. Balmer, Spectra, spectra, spectra – tensor triangular spectra versus Zariski spectra of endomorphism rings, Algebraic &amp; Geometric Topology 10 (2010) 1521–1563](https://doi.org/10.2140/agt.2010.10.1521)
- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)

### Because Lₙ is smashing, E(n)-local spectra are modules over LₙS

**Remember:** Smashing localization means smashing every input with the localized sphere.

*True by definition.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A Bousfield localization L is smashing if it is smashing with the localized sphere: LX ≃ X ∧ LS for every spectrum X. Lₙ is localization at Johnson–Wilson theory E(n).

**Problem.** Lₙ preserves all homotopy colimits, and Lₙ(X ∧ Y) ≃ LₙX ∧ Y for all spectra X and Y. A spectrum is E(n)-local exactly when it is a module over LₙS up to homotopy.

**How the definition helps.** Once Lₙ is smashing, each claim follows from LX ≃ X ∧ LS, because X ∧ − preserves colimits. Also LS ∧ LS ≃ LS makes LS an idempotent ring, whose modules are the local objects; p-completion, which is not smashing, fails these formulas. That Lₙ is smashing is the Hopkins–Ravenel smash product theorem.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “Localization with respect to Morava E-theory is smashing (Hopkins-Ravenel).”

**Sources:**

- [D. C. Ravenel, Nilpotence and periodicity in stable homotopy theory, Annals of Mathematics Studies 128, Princeton University Press (1992)](https://doi.org/10.1515/9781400882489)

### Bousfield classes split E(n)-localization into a K(n) piece and a lower piece

**Remember:** An E(n)-equivalence is an E(n−1)-equivalence that is also a K(n)-equivalence.

*True by definition. Confidence: medium.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** E-localization universally inverts the maps f with E ∧ f an equivalence; Lₙ localizes at Johnson–Wilson E(n) and L<sub>K</sub>(n) at Morava K(n) (our own). E(n) has the Bousfield class of E(n−1) ∨ K(n) (our own). So a map is an E(n)-equivalence exactly when it is both an E(n−1)- and a K(n)-equivalence (our own).

**Problem.** For n ≥ 1 and every spectrum X, LₙX is the homotopy pullback of Lₙ₋₁X → Lₙ₋₁L<sub>K</sub>(n)X ← L<sub>K</sub>(n)X.

**How the definition helps.** By that Bousfield class identity, it suffices to check the pullback comparison after smashing with E(n−1) and with K(n) (our own). After K(n), the Lₙ₋₁ corners vanish, because Lₙ₋₁ is smashing and K(n) ∧ Lₙ₋₁S ≃ 0 (our own). After E(n−1), the map L<sub>K</sub>(n)X → Lₙ₋₁L<sub>K</sub>(n)X becomes an equivalence, so the square is a pullback (our own).

**nLab:** [smash product theorem](https://ncatlab.org/nlab/show/smash+product+theorem). It says: “For X a homotopy type/spectrum and for all n, there is a homotopy pullback”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Chromatic convergence needs finite spectra, which excludes mod p homology

**Remember:** Finite spectra are seen by finite heights; H𝔽ₚ by none.

*Rules out counterexamples.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A finite p-local spectrum is one built, up to retracts, from finitely many shifted p-local sphere cells (our own). Its chromatic tower is the sequence of localizations LₙX at Johnson–Wilson E(n), which see only heights up to n, with maps from height n+1 to n (our own).

**Problem.** For every finite p-local spectrum X, the homotopy limit of its chromatic tower is X. The Eilenberg–MacLane spectrum H𝔽ₚ, which is not finite, has a tower that is zero at every stage.

**How the definition helps.** Finiteness removes spectra that no Morava K-theory of finite height can see. H𝔽ₚ is K(m)-acyclic for every finite m, so every LₙH𝔽ₚ is zero and the limit is zero, not H𝔽ₚ (our own example). For finite X the theorem is due to Hopkins and Ravenel, whose proof uses the smash product theorem.

**nLab:** [chromatic convergence theorem](https://ncatlab.org/nlab/show/chromatic+convergence+theorem). It says: “The chromatic convergence theorem states mild conditions under which the homotopy limit over this tower is the p-localization”

**Wikipedia:** [Chromatic homotopy theory](https://en.wikipedia.org/wiki/Chromatic_homotopy_theory). It says: “the chromatic convergence theorem states the homotopy limit of the chromatic tower (defined below) of a finite p-local spectrum X is X itself. The theorem was proved by Hopkins and Ravenel.”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)
- [D. C. Ravenel, Nilpotence and periodicity in stable homotopy theory, Annals of Mathematics Studies 128, Princeton University Press (1992)](https://doi.org/10.1515/9781400882489)

### Closure under retracts is needed for the thick subcategory theorem

**Remember:** Thick means you keep every summand of what you contain.

*Rules out counterexamples. Confidence: medium.* MSC 55Q51 (v<sub>n</sub>-periodicity), 18G80. arXiv math.AT. Level 4: research.

**Definition.** A thick subcategory is a full triangulated subcategory closed under retracts, so it contains every direct summand of each of its objects.

**Problem.** The thick subcategories of finite p-local spectra are exactly the classes of spectra of type at least n. Without closure under retracts this fails: spectra of even rational Euler characteristic form a triangulated subcategory not on the list.

**How the definition helps.** The Hopkins–Smith theorem classifies only the subcategories that contain all summands (our own). Even rational Euler characteristic is closed under shifts and cofiber sequences, because Euler characteristic is additive (our own). It contains S ∨ S but not its summand S, so it is not thick (our own).

**nLab:** [thick subcategory](https://ncatlab.org/nlab/show/thick+subcategory). It says: “A non-empty full (pre-)triangulated subcategory T is called thick (or épaisse) if it is "closed under direct summands”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Mathematica 105 (1997) 1–27](https://doi.org/10.1023/a:1017932514274)

### Defining vₙ self maps through Morava K-theory makes the periodicity theorem statable

**Remember:** Invertible at height n, nilpotent at every other height.

*Makes the theorem clean to state or prove.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For n ≥ 1, a vₙ self-map of a finite p-local spectrum X is a map ΣᵏX → X with k &gt; 0 that is an isomorphism on K(n)-homology and nilpotent on K(m)-homology for every m ≠ n (our own).

**Problem.** Every finite p-local spectrum of type n has a vₙ self map. Given two such maps, some power of one equals some power of the other, so the telescope does not depend on the choice.

**How the definition helps.** Because the definition is a condition on Morava K-theory homology, the spectra that admit a vₙ self-map form a thick subcategory. So by the thick subcategory theorem one example of type n is enough, and Hopkins and Smith build one with a vanishing line in an Adams spectral sequence. The uniqueness of powers follows from the nilpotence theorem.

**nLab:** [periodicity theorem](https://ncatlab.org/nlab/show/periodicity+theorem), [telescopic localization](https://ncatlab.org/nlab/show/telescopic+localization). It says: “A vₙ-self-map on a p-local finite spectrum X, for n ≥ 1 is a map f : Σᵏ X ⟶ X such that”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)

### Finite spectra of the same type have the same Bousfield class

**Remember:** A spectrum's Bousfield class is the set of spectra it kills.

*Makes the theorem clean to state or prove.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** The Bousfield class ⟨X⟩ of a spectrum X is the class of spectra Y that X kills, meaning X ∧ Y = 0. For a fixed Y, the finite spectra that kill Y form a thick subcategory, since smashing with Y keeps cofiber sequences and retracts (our own).

**Problem.** If F and F′ are finite p-local spectra of the same type n, then ⟨F⟩ = ⟨F′⟩. The classes of type 0, 1, 2, … strictly decrease.

**How the definition helps.** By the thick subcategory theorem, finite F and F′ of the same type generate the same thick subcategory, so each kills Y exactly when the other does. The decrease is strict because K(n−1) kills a type n spectrum but not one of type n − 1.

**nLab:** [Bousfield lattice](https://ncatlab.org/nlab/show/Bousfield+lattice), [thick subcategory theorem](https://ncatlab.org/nlab/show/thick+subcategory+theorem). It says: “let the Bousfield class of an object X, denoted ⟨X⟩, be the class { Y∈obj(T): X⊗Y=0}.”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Thick subcategories of finite p-local spectra form a single chain by type

**Remember:** Type at least n means invisible at every lower height.

*Makes the theorem clean to state or prove.* MSC 55Q51 (v<sub>n</sub>-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A finite p-local spectrum X has type at least n when every Morava K-theory below height n is blind to it: the K(m)-homology of X vanishes for all finite m &lt; n (our own). Each such class is thick, a full triangulated subcategory closed under retracts (our own).

**Problem.** Every thick subcategory of finite p-local spectra is the class of spectra of type at least n, for some n from 0 to ∞.

**How the definition helps.** The type turns each thick subcategory into one number, so the classification becomes a list. Each class is thick because each K(m)-homology has long exact sequences and respects retracts. The nilpotence theorem does the work: a thick subcategory with one spectrum of type n contains all of them.

**nLab:** [thick subcategory theorem](https://ncatlab.org/nlab/show/thick+subcategory+theorem). It says: “The thick subcategory theorem says that thick subcategories of Spectraᶠⁱⁿₚ are precisely the full subcategories on the spectra of type ≥ n, for some n.”

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “By a theorem of Devinatz–Hopkins–Smith, every thick subcategory of the category of finite p-local spectra is the subcategory of type-n spectra for some n.”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)

### Cartan principal bundles give a clean form of Palais's local triviality theorem

**Remember:** Dividing one point of an orbit by another is continuous.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 54H15. arXiv math.GN, math.AT. Level 4: research.

**Definition.** A free continuous right action of a locally compact group G on a completely regular space P is a Cartan principal bundle when division is continuous (our own). Division is the map P ×<sub>P/G</sub> P → G sending each pair (p,q) in one orbit to the unique g with p·g = q (our own).

**Problem.** For a free Lie group action on a completely regular space P, the quotient bundle is locally trivial exactly when division is continuous (Palais). In particular this holds for the translation action of a closed Lie subgroup of a Hausdorff topological group.

**How the definition helps.** Palais’s slice theorem turns continuous division for a free Lie group action into local trivializations (our own). Conversely a local trivialization expresses division by continuous group operations (our own). For a closed Lie subgroup of a Hausdorff topological group, division is (p,q) ↦ p⁻¹q (our own).

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle). It says: “Then the quotient map P → P/G is a G-principal bundle -- in that it is locally trivial -- precisely if the division map”

**Sources:**

- [Richard Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)

### Semi-simplicial triangulations of circle bundles have an exact Euler class criterion

**Remember:** Keep the face maps and omit the degeneracy maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 55R15, 18N50. arXiv math.AT, math.GT. Level 4: research.

**Definition.** A semi-simplicial set is a simplicial set without degeneracies: sets of n-simplices joined only by face maps, that is, a contravariant functor from nonempty finite ordinals and strictly increasing maps to sets (our own). Unlike a simplicial complex, a simplex may repeat a vertex and several simplices may share the same boundary, so more triangulations exist (our own).

**Problem.** An oriented circle bundle over a finite semi-simplicial base B admits a semi-simplicial triangulation over B exactly under Mnëv’s Euler class criterion. Its integral Euler class must have a simplicial cocycle representative taking only the values zero and one on base triangles.

**How the definition helps.** The looser notion admits more triangulations, so the criterion reduces to a cocycle with values 0 and 1 (our own reading). For classical simplicial triangulations the same condition is necessary but not sufficient. The theorem is due to Mnëv.

**Paper or page:** [Minimal triangulations of circle bundles](https://arxiv.org/abs/2311.04214). It says: “A circle bundle can be semi-simplicially triangulated over a finite semi-simplicial base B iff its integer Euler class can be represented by a simplicial cocycle having values 0 and 1 on 2-simplices of the base.”

**Sources:**

- [Gaiane Panina, Maksim Turevskii, Minimal triangulations of circle bundles, Funct. Anal. Appl. 59 (2025) 430–439, arXiv:2311.04214](https://arxiv.org/abs/2311.04214)
- [N. Mnëv, Minimal triangulations of circle bundles, circular permutations, and the binary Chern cocycle, J. Math. Sci. 247 (2020) 696–710](https://doi.org/10.1007/s10958-020-04832-y)

### Covering spaces as families of sets make classification follow from 1-truncation

**Remember:** A covering space is a set that varies with the point of X.

*True by definition. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In univalent homotopy type theory, a covering of X is a family of sets C(x) over the points x of X, with total space the pairs (x,c) with c ∈ C(x) (our own). Because sets form a 1-type, such a family sees only points and paths up to homotopy, that is, the fundamental groupoid (our own).

**Problem.** Covering spaces of X are equivalent to sets with an action of the fundamental groupoid of X (the fundamental theorem of covering spaces).

**How the definition helps.** Set-valued families factor through the fundamental groupoid by the universal property of 1-truncation, since the universe of sets is a 1-type (our own). Transport along paths gives the groupoid action, and such an action defines a family on the groupoid (our own).

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “In homotopy type theory, the fundamental theorem of covering spaces is really just a special case of the universal property of 1-truncation.”

**Sources:**

- [Felix Cherubini, Egbert Rijke, Modal descent, Mathematical Structures in Computer Science (2020), arXiv:2003.09713](https://arxiv.org/abs/2003.09713)

### Define real projective spaces in homotopy type theory with their bundles

**Remember:** Build each projective space and its line bundle in the same step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 03B38, 55P20. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Define ℝPⁿ by induction together with its tautological bundle of 2-element sets, starting from the empty type (our own). ℝPⁿ⁺¹ is the mapping cone of the bundle's projection onto ℝPⁿ, and the new bundle is the old one on ℝPⁿ and a standard pair at the cone point (our own). Over each point e of a fiber, the glue identifies that fiber with the standard pair by sending e to its first element (our own).

**Problem.** In homotopy type theory, ℝPⁿ⁺¹ is ℝPⁿ with one (n+1)-cell attached. The colimit ℝP∞ is K(ℤ/2, 1), the space whose only nonzero homotopy group is ℤ/2 in degree 1.

**How the definition helps.** Each step is a mapping cone, so the cell attachment is built into the definition. The work left is to show that the total space of the bundle over ℝPⁿ is the n-sphere. Then ℝP∞ is the type of 2-element types, which is K(ℤ/2, 1).

**nLab:** [The real projective spaces in homotopy type theory](https://ncatlab.org/nlab/show/The+real+projective+spaces+in+homotopy+type+theory). It says: “The classical definition of ℝPⁿ, as the quotient space identifying antipodal points of the n-sphere, does not translate directly to homotopy type theory. Instead, we define ℝPⁿ by induction on n simultaneously with its tautological bundle of 2-element sets.”

**Sources:**

- [Ulrik Buchholtz, Egbert Rijke, The real projective spaces in homotopy type theory, LICS 2017, arXiv:1704.05770](https://arxiv.org/abs/1704.05770)

### Orientations as Thom bundle trivializations give the Thom isomorphism

**Remember:** Trivialize the entire E-module bundle before taking its colimit.

*True by definition. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P43, 55N20. arXiv math.AT. Level 4: research.

**Definition.** For a commutative ring spectrum E, an E-orientation of a real rank-n bundle V over X is a trivialization of the E-module bundle E ∧ Sⱽ, where Sⱽ is the fiberwise one-point compactification. That is, an equivalence over X with the constant bundle of fiber ΣⁿE.

**Problem.** For an E-oriented bundle, the E-module Thom spectrum is equivalent to ΣⁿE smashed with X with a disjoint base point. This gives the Thom isomorphism in E-cohomology.

**How the definition helps.** The Thom spectrum is the colimit of the bundle Sⱽ, and an equivalence of bundles gives an equivalence of their colimits (our own). Smashing with E preserves colimits, so one side is the E-module Thom spectrum and the other is ΣⁿE ∧ Σ∞X₊ (our own).

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “An E-orientation of a vector bundle V → X is a trivialization of the E-module bundle E ∧ Sⱽ”

**Sources:**

- [M. Ando, A. J. Blumberg, D. Gepner, M. J. Hopkins, C. Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### The Euler class sorts surface group representations into connected components

**Remember:** Evaluate the flat circle bundle’s Euler class on the oriented surface.

*Makes the theorem clean to state or prove.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 57K20. arXiv math.GT, math.DG. Level 4: research.

**Definition.** For a closed oriented surface Σ, the Euler number of a representation ρ of π₁Σ into PSL(2,ℝ) is the Euler class of the flat circle bundle that ρ defines, evaluated on the fundamental class of Σ (our own). It is an integer that depends continuously on ρ (our own).

**Problem.** For a closed oriented surface Σ of genus at least two, the Euler number classifies connected components of its PSL(2,ℝ) representation space (Goldman). The integers that occur are exactly those between χ(Σ) and −χ(Σ), inclusive.

**How the definition helps.** A continuous integer is constant on each connected component (our own remark). Goldman proved the converse: each value allowed by the Milnor–Wood inequality gives exactly one nonempty component, and the hard part is that each level set is connected. For punctured surfaces, Ryu and Yang also need the signs of the peripheral images.

**Paper or page:** [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391), [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391). It says: “We show that the connected components are indexed by the relative Euler classes and the signs of the images of the peripheral elements satisfying a generalized Milnor-Wood inequality”

**Sources:**

- [I. Ryu, T. Yang, Connected components of the space of type-preserving representations, arXiv:2507.07391 (2025)](https://arxiv.org/abs/2507.07391)
- [W. M. Goldman, Topological components of spaces of representations, Invent. Math. 93 (1988) 557-607](https://doi.org/10.1007/bf01410200)

### Internally defined equivariant principal bundles restrict to fixed loci

**Remember:** Principal is one isomorphism of G-spaces, which fixed points keep.

*True by definition.* MSC 55R91 (Equivariant fiber spaces and bundles in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** An equivariant principal Γ-bundle, defined inside G-spaces, is a G-map P → X with a right action of a group object Γ in G-spaces such that (p,γ) ↦ (p,pγ) is a G-isomorphism P × Γ ≅ P ×ₓ P; fibers may be empty (our own). It uses only products, pullbacks and isomorphisms, which taking H-fixed points preserves (our own).

**Problem.** Take any subgroup H ⊂ G. Then the H-fixed locus Pᴴ → Xᴴ of an equivariant principal bundle is again an equivariant principal bundle. Its group is Γᴴ, and it is equivariant for the Weyl group N(H)/H, where N(H) is the normalizer of H.

**How the definition helps.** Taking H-fixed points carries the defining isomorphism to one for Pᴴ → Xᴴ, with group Γᴴ (our own). The normalizer N(H) acts on the fixed points and H acts trivially, so the result is N(H)/H-equivariant (our own).

**nLab:** [equivariant bundle](https://ncatlab.org/nlab/show/equivariant+bundle). It says: “serves to make manifest that they have good behaviour under passage to fixed loci”

**Sources:**

- [Hisham Sati, Urs Schreiber, Equivariant principal ∞-bundles, arXiv:2112.13654 (2021), Cambridge University Press (2026)](https://arxiv.org/abs/2112.13654)

### A generating series turns all Adem relations into one symmetry

**Remember:** Swap s and t once, and every Adem relation follows.

*Makes the theorem clean to state or prove.* MSC 55S10 (Steenrod algebra). arXiv math.AT. Level 4: research.

**Definition.** Put all Steenrod squares into one power series P(t) = Sq⁰ + tSq¹ + t²Sq² + ⋯ with coefficients in the Steenrod algebra, where products of series compose the operations.

**Problem.** Take the Adem relations, one for each pair 0 &lt; i &lt; 2j. Together they are equivalent to the single identity P(s² + st)·P(t²) = P(t² + st)·P(s²).

**How the definition helps.** Comparing coefficients of each monomial in s and t on both sides gives back each Adem relation, so one identity carries them all (our own summary). Bullett and Macdonald found and proved this identity.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “then the Adem relations are equivalent to P(s²+st)⋅P(t²)=P(t²+st)⋅P(s²)”

**Sources:**

- [S. R. Bullett and I. G. Macdonald, On the Adem relations, Topology 21 (1982) 329–332](https://doi.org/10.1016/0040-9383(82)90015-5)

### Defining Steenrod operations for E∞-algebras proves Adem relations once for all

**Remember:** Form the tensor square, take homotopy orbits under swapping, then multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55S12. arXiv math.AT. Level 4: research.

**Definition.** For an 𝔽₂-chain complex V, the extended square D₂(V) is the homotopy quotient of V ⊗ V by the swap of factors (our own). A symmetric multiplication is a chain map D₂(V) → V, and May's operations are its values on the homology classes of D₂(V) built from x ⊗ x (our own).

**Problem.** For algebras over the E∞ operad in 𝔽₂-chain complexes, May's operations satisfy a Cartan formula and Adem relations. The Steenrod squares on spaces and the Dyer–Lashof operations on the homology of infinite loop spaces are special cases.

**How the definition helps.** The operations and their relations are proved from the E∞ structure alone, so they hold in every example at once. The Cartan formula compares the extended square of a tensor product with two extended squares. The Adem relations compare the two ways of iterating the square, through symmetric groups on four letters (our own summary).

**nLab:** [Steenrod square](https://ncatlab.org/nlab/show/Steenrod+square). It says: “A chain map D₂(V) ⟶ V is called a symmetric multiplication on V (a shadow of an E-infinity algebra structure).”

**Sources:**

- [J. P. May, A general algebraic approach to Steenrod operations, in The Steenrod Algebra and its Applications, Lecture Notes in Mathematics 168, Springer, 1970, 153–231](https://doi.org/10.1007/BFb0058524)

### Dualizing turns indecomposable Steenrod squares into primitives, so Sq²ⁱ generate

**Remember:** Indecomposables of A are dual to primitives of its dual.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 4: research.

**Definition.** The indecomposables of the Steenrod algebra are its elements modulo sums of products of lower-degree elements, the quotient I/I² of the augmentation ideal I (our own). Under duality they pair with the primitives of the dual Hopf algebra, the x whose coproduct is x ⊗ 1 + 1 ⊗ x (our own).

**Problem.** The squares of degrees 2ⁱ for i ≥ 0 generate the mod 2 Steenrod algebra. Every positive-degree Sqᵏ with k not a power of two is a sum of products of lower-degree squares.

**How the definition helps.** Generators are needed exactly in the degrees of indecomposables, and these are dual to primitives (our own). In Milnor's dual algebra the primitives are the powers ξ₁<sup>(2ⁱ)</sup>, which pair with the squares Sq<sup>(2ⁱ)</sup>. So these squares generate, by induction on degree (our own).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The only primitive elements of A∗ for p=2 are the elements of the form ξ₁²ⁱ, and these are dual to the Sq²ⁱ (the only indecomposables of A).”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)
- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)

### Lannes' T, defined as an adjoint, computes cohomology of maps from BV

**Remember:** T is left adjoint to tensoring with H\*(BV), as maps from BV are.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55R35. arXiv math.AT. Level 4: research.

**Definition.** For an elementary abelian p-group V, Lannes's T-functor on unstable mod p algebras is left adjoint to tensoring with H\*(BV; 𝔽ₚ) (our own). It mirrors how maps BV × Y → X match maps from Y to the space of maps from BV to X (our own).

**Problem.** Suppose H\*(X) and T H\*(X) are of finite type and T H\*(X) is zero in degree 1. Then T H\*(X) is the mod p cohomology of the space of maps from BV to the p-completion of X (Lannes).

**How the definition helps.** The T-adjunction matches the mapping-space adjunction through the cohomology cross product, which gives a comparison map (our own). Lannes's theorem proves this map an isomorphism under the stated finiteness and degree-one hypotheses (our own).

**Wikipedia:** [Jean Lannes (mathematician)](https://en.wikipedia.org/wiki/Jean_Lannes_%28mathematician%29), [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “He introduced the T-functor on the category of unstable algebra over the Steenrod algebra.”

**Sources:**

- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Reading the dual Steenrod algebra as power series automorphisms gives Milnor's coproduct

**Remember:** Compose two additive power series, and Milnor's coproduct falls out.

*True by definition.* MSC 55S10 (Steenrod algebra), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Maps from the dual Steenrod algebra to a commutative 𝔽₂-algebra R are the additive power series f(x) = x + a₁x² + a₂x⁴ + ⋯ over R, those with f(x+y) = f(x) + f(y) (our own). The generator ξᵢ reads off the coefficient aᵢ of x<sup>(2ⁱ)</sup>, and the coproduct is composition of series (our own).

**Problem.** The coproduct of the dual Steenrod algebra sends ξₙ to a sum over 0 ≤ i ≤ n. The term for i is (ξₙ₋ᵢ raised to the power 2ⁱ) ⊗ ξᵢ, where ξ₀ = 1.

**How the definition helps.** In g(f(x)), the coefficient of x<sup>(2ⁿ)</sup> is ∑ aₙ₋ᵢ<sup>(2ⁱ)</sup>bᵢ over 0 ≤ i ≤ n, which is the coproduct formula in the stated tensor order (our own). Milnor's identification makes these coefficient functions the generators ξᵢ (our own).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “For example, if p=2 then the dual Steenrod algebra is the group scheme of automorphisms of the 1-dimensional additive formal group scheme x+y that are the identity to first order.”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)

### The finite subalgebra A(1) reduces the Adams spectral sequence for ko

**Remember:** Induce the trivial module from the subalgebra generated by Sq¹ and Sq².

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55T15. arXiv math.AT. Level 4: research.

**Definition.** A(1) is the sub-Hopf algebra of the mod 2 Steenrod algebra A generated by Sq¹ and Sq²; it has dimension 8. The quotient A//A(1) is the A-module induced from the trivial A(1)-module 𝔽₂, that is, A tensored over A(1) with 𝔽₂.

**Problem.** The mod 2 cohomology of connective real K-theory ko is A//A(1). So the second page of its Adams spectral sequence is Ext over the finite algebra A(1) of 𝔽₂ with itself.

**How the definition helps.** Stong’s calculation identifies the cohomology of ko as the induced module A ⊗<sub>A(1)</sub> 𝔽₂ (our own). Freeness of A over A(1) gives the change-of-rings isomorphism on Ext (our own).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “These algebras are significant because they can be used to simplify many Adams spectral sequence computations, such as for π∗(ko), and π∗(tmf).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional convergence gives a usable notion of convergence for spectral sequences

**Remember:** Conditional convergence: the filtration has zero lim and zero lim¹.

*Makes the theorem clean to state or prove.* MSC 55T05 (General theory of spectral sequences in algebraic topology), 18G40. arXiv math.AT. Level 4: research.

**Definition.** A half-plane spectral sequence converges conditionally to its specified target when its filtration tower Dˢ leaves nothing at the bottom: lim Dˢ and lim¹ Dˢ vanish degreewise as s increases (our own).

**Problem.** For a conditionally convergent half-plane spectral sequence with entering differentials, vanishing of Boardman’s degreewise lim¹ of surviving cycles implies strong convergence. This criterion applies to Adams spectral sequences of this form.

**How the definition helps.** Conditional convergence settles the tower, so only the spectral sequence itself remains to check (our own). Boardman's half-plane theorem then gives strong convergence when the derived limit of the surviving cycles also vanishes (our own).

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “that converges conditionally, then sufficient condition that it converges strongly (def.) is that also the lim¹ over its pages vanishes”

**Sources:**

- [J. Michael Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999) 49–84](https://doi.org/10.1090/conm/239/03597)

### Converging to the E-nilpotent completion makes Adams convergence a theorem

**Remember:** Kill ever higher powers of the unit fiber, then take limits.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** For a ring spectrum E with unit fiber Ē → S, the E-nilpotent completion of X is what remains after removing ever higher smash powers of Ē (our own). It is the homotopy limit over s of the cofibers of Ē<sup>∧s</sup> ∧ X → X, where each map uses the fiber inclusion in every factor (our own).

**Problem.** Bousfield's theorem: let E and X be connective, and let the core of π₀(E) be ℤ/n or ℤ with a set of primes inverted. Then the E-nilpotent completion of X is the E-localization of X, which for E = H𝔽ₚ is the p-completion of X.

**How the definition helps.** The E-Adams spectral sequence comes from the tower that defines the completion, so it converges to that completion by construction, in Boardman's conditional sense. What it computes then reduces to identifying the completion with a localization, which Bousfield's theorem does using the connectivity of X and the arithmetic of π₀(E).

**nLab:** [nilpotent completion of spectra](https://ncatlab.org/nlab/show/nilpotent+completion+of+spectra), [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “The E-Adams spectral sequence induced by the given Adams tower conditionally converges to the E-nilpotent completion.”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Defining Adams filtration by factorization makes it add under composition

**Remember:** Filtrations add because factorizations concatenate.

*True by definition. Confidence: medium.* MSC 55T15 (Adams spectral sequences), 55Q45. arXiv math.AT. Level 4: research.

**Definition.** A stable map has mod p Adams filtration at least s if it factors into s maps inducing zero on mod p cohomology (our own).

**Problem.** Composing maps of Adams filtrations at least s and t gives a map of filtration at least s+t. Composition on the stable stems therefore induces multiplication on E∞.

**How the definition helps.** Concatenating factorizations gives s+t maps, each zero on mod p cohomology (our own). Composition therefore respects the Adams filtration and induces multiplication on its associated graded group, identified here with E∞ (our own).

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “For X of finite type, E∞ is a bigraded group associated with a filtration of π\*(X) ⊗ ℤₚ (the p-adic integers)”

**Sources:**

- [J. F. Adams, On the structure and applications of the Steenrod algebra, Commentarii Mathematici Helvetici 32 (1958) 180–214](https://doi.org/10.1007/BF02564578)

### Ext¹ classes turn the Hopf invariant one problem into one differential

**Remember:** hⱼ survives exactly when a Hopf invariant one map exists.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55Q25. arXiv math.AT. Level 4: research.

**Definition.** In the mod 2 Adams spectral sequence, hⱼ (j ≥ 0) is the class in filtration one and stem 2ʲ − 1 dual to the indecomposable square Sq<sup>(2ʲ)</sup> (our own). A map of Hopf invariant one in that stem exists exactly when hⱼ survives to E∞ (our own).

**Problem.** Adams's theorem: maps of Hopf invariant one exist only for n = 1, 2, 4 and 8. So ℝⁿ carries a division algebra structure only in these dimensions.

**How the definition helps.** The geometric question becomes whether each hⱼ survives the spectral sequence. Adams showed d₂(hⱼ₊₁) = h₀hⱼ² for j ≥ 3, and this target is nonzero, so hⱼ dies for every j ≥ 4. Computing that d₂ needs secondary cohomology operations.

**nLab:** [Hopf invariant one](https://ncatlab.org/nlab/show/Hopf+invariant+one). It says: “A celebrated theorem due to (Adams 60, introducing and using the Adams spectral sequence) states that maps of Hopf invariant one correspond precisely to the the Hopf constructions on the four normed division algebras”

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “Adams' original use for his spectral sequence was the first proof of the Hopf invariant 1 problem: ℝⁿ admits a division algebra structure only for n = 1, 2, 4, or 8.”

**Sources:**

- [J. F. Adams, On the non-existence of elements of Hopf invariant one, Annals of Mathematics 72 (1960) 20–104](https://doi.org/10.2307/1970147)

### Finite type and connectivity make Adams spectral sequences compute p-adic homotopy

**Remember:** Nothing below degree zero, finitely generated in every degree.

*Rules out counterexamples.* MSC 55T15 (Adams spectral sequences), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A spectrum X is connective when πᵢ(X) = 0 for i &lt; 0. It is of finite type when each πᵢ(X) is a finitely generated abelian group.

**Problem.** Let X be a connective spectrum of finite type, and ℤₚ the p-adic integers. Then the mod p Adams spectral sequence, with E₂ = Ext over the Steenrod algebra of H\*(X; 𝔽ₚ) and 𝔽ₚ, converges to π\*(X) ⊗ ℤₚ.

**How the definition helps.** Finite type rules out homotopy that mod p cohomology cannot see. For the rational spectrum Hℚ, mod p cohomology is zero, so the E₂ page is zero, yet π₀(Hℚ) = ℚ (our own example). The theorem is Adams's, and Bousfield identified the target as the p-completion.

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “The classical Adams spectral sequence can be stated for any connective spectrum X of finite type, meaning πᵢ(X)=0 for i &lt; 0 and πᵢ(X) is a finitely generated Abelian group in each degree.”

**Sources:**

- [J. F. Adams, On the structure and applications of the Steenrod algebra, Commentarii Mathematici Helvetici 32 (1958) 180–214](https://doi.org/10.1007/BF02564578)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Morava K-theory Adams spectral sequences converge for every spectrum

**Remember:** Totalize all smash powers of K applied to X.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** For Morava K-theory K at a fixed prime and height, the K-nilpotent completion of X is the totalization of its Amitsur resolution: the cosimplicial spectrum K<sup>∧</sup>(q+1) ∧ X, with cofaces from the unit and codegeneracies from multiplication (our own).

**Problem.** For every spectrum X, the K(n)-nilpotent completion of X is its K(n)-localization. So the K(n)-based Adams spectral sequence converges conditionally to π\* of the K(n)-localization of X, and completely when X is K(n)-locally dualizable.

**How the definition helps.** Since the completion equals the localization for every X, convergence needs no connectivity or finiteness hypothesis on X. Bousfield's theorem for H𝔽ₚ, by contrast, is stated for connective X (our own comparison).

**Paper or page:** [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379), [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379). It says: “For any spectrum X, the K-nilpotent completion of X is equivalent to the K-localization of X”

**Sources:**

- [Tobias Barthel and Piotr Pstrągowski, Morava K-theory and Filtrations by Powers, arXiv:2111.06379](https://arxiv.org/abs/2111.06379)

### Replacing mod p cohomology by complex cobordism removes p-completion from Adams

**Remember:** Use complex cobordism, whose π₀ is ℤ, not 𝔽ₚ.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55N22. arXiv math.AT. Level 4: research.

**Definition.** The integral Adams–Novikov spectral sequence of X is the Adams spectral sequence built from the unit S → MU of complex cobordism, whose π₀ is ℤ rather than 𝔽ₚ (our own). Its tower smashes X with successive smash powers of the unit fiber (our own).

**Problem.** For a connective spectrum X, the Adams–Novikov spectral sequence converges to π\*(X) itself, with no completion at a prime. In particular it converges to the stable homotopy groups of spheres.

**How the definition helps.** Since π₀(MU) = ℤ, Bousfield's theorem makes the MU-nilpotent completion of a connective spectrum the spectrum itself. Mod p cohomology has π₀ = 𝔽ₚ, which is why its Adams spectral sequence sees only the p-completion. The rest is Novikov's computation of MU\*MU.

**nLab:** [Adams–Novikov spectral sequence](https://ncatlab.org/nlab/show/Adams%E2%80%93Novikov+spectral+sequence), [nilpotent completion of spectra](https://ncatlab.org/nlab/show/nilpotent+completion+of+spectra). It says: “This makes the Adams-Novikov spectral sequence converge to the full homotopy groups of connective spectra, hence in particular to the full stable homotopy groups of spheres”

**Sources:**

- [S. P. Novikov, The methods of algebraic topology from the viewpoint of cobordism theory, Mathematics of the USSR-Izvestiya 1 (1967) 827–913](https://doi.org/10.1070/im1967v001n04abeh000591)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Requiring E∗E flat makes cooperations a Hopf algebroid for Adams spectral sequences

**Remember:** Flat cooperations split E∗(E ∧ X), making homology a comodule.

*Rules out counterexamples.* MSC 55T15 (Adams spectral sequences), 55S10. arXiv math.AT. Level 4: research.

**Definition.** For a homotopy-commutative ring spectrum E, Adams's condition asks that the cooperations E∗E be flat over the coefficients π∗E: tensoring with E∗E over π∗E keeps every short exact sequence of graded modules exact (our own). Then E∗(E ∧ X) splits as E∗E ⊗ E∗X, so each E∗X is a comodule (our own).

**Problem.** Suppose E∗E is flat over π∗E. Then the second page of the E-based Adams spectral sequence for X is Ext over E∗E from π∗E to E∗X. This holds for E = H𝔽ₚ, MU and KU, but the condition fails for E = Hℤ.

**How the definition helps.** Flatness gives the Künneth splitting, which makes the first page a resolution by comodules, so the second page is an Ext group. Hℤ fails because the integral homology of Hℤ has torsion, so it is not flat over ℤ (our own example). For H𝔽ₚ flatness is automatic over a field, and Milnor computed the comodule structure.

**nLab:** [Steenrod algebra](https://ncatlab.org/nlab/show/Steenrod+algebra), [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “The dual 𝔽ₚ Steenrod algebra is a special case of a commutative Hopf algebroid structure canonically induced on the self generalized homology E•(E) of any ring spectrum E for which E• → E•(E) is a flat morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### Synthetic spectra turn Adams differentials into powers of λ

**Remember:** Sheaves on finite spectra, with λ remembering Adams filtration.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Mod 2 synthetic spectra are sheaves of spectra on finite mod 2 projective spectra that take finite sums to products, where covers are maps onto in mod 2 homology (our own). They carry a deformation parameter λ that records Adams filtration (our own).

**Problem.** For the mod 2 synthetic analogue νX, the synthetic Adams E₂ page is the classical Adams E₂ page tensored with 𝔽₂\[λ\]. Each classical dᵣ(x) = y gives dᵣ(x) = λʳ⁻¹y, and all synthetic differentials follow by λ-linearity.

**How the definition helps.** λ records the filtration jump of a classical differential, so a dᵣ appears with the factor λʳ⁻¹ (our own). The Burklund–Hahn–Senger comparison proves this and shows that λ-linearity gives all synthetic differentials.

**Paper or page:** [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879), [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879). It says: “Given a classical Adams differential dᶜˡᵣ(x)=y, the corresponding synthetic differential is dᵣ(x)=λʳ⁻¹y, which is λ-linear, and all synthetic Adams differentials arise in this way.”

**Sources:**

- [Weinan Lin, Guozhen Wang and Zhouli Xu, On the Last Kervaire Invariant Problem, arXiv:2412.10879](https://arxiv.org/abs/2412.10879)

### A nilpotent action of the fundamental group makes the Eilenberg–Moore sequence converge

**Remember:** Filter the module until the action on every successive quotient is trivial.

*Rules out counterexamples. Confidence: medium.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** A π-module M is nilpotent when π acts trivially on each layer of some finite π-invariant filtration 0 = M₀ ⊂ ⋯ ⊂ Mₙ = M, so M is built from trivial modules by finitely many extensions (our own).

**Problem.** Dwyer's theorem: let F → E → B be a fibration over a connected base, and k a field. If π₁(B) acts nilpotently on Hᵢ(F; k) for every i, then the Eilenberg–Moore spectral sequence converges strongly to H\*(F; k).

**How the definition helps.** Nilpotence replaces simple connectivity and removes the cases where the spectral sequence computes the wrong answer. Our own counterexample is the path fibration over ℝP∞ with rational coefficients, whose fibre is two points swapped by π₁ = ℤ/2. There E₂ is Tor of ℚ with ℚ over H\*(ℝP∞; ℚ) = ℚ, which is one-dimensional, but H⁰ of two points is two-dimensional.

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “refined the convergence results to include spaces for which π₁(B) acts nilpotently on Hᵢ(E<sub>f</sub>) for all i ≥ 0”

**Sources:**

- [W. G. Dwyer, Strong convergence of the Eilenberg–Moore spectral sequence, Topology 13 (1974) 255–265](https://doi.org/10.1016/0040-9383(74)90018-4)

### Tor over the base cohomology turns Künneth into the Eilenberg–Moore spectral sequence

**Remember:** Resolve one module, tensor with the other, then take homology.

*Makes the theorem clean to state or prove.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** Tor over a graded commutative algebra A measures the tensor product together with its failure to be exact (our own). Resolve M by free A-modules P and take the homology of P ⊗ₐ N, graded by resolution degree and internal degree; Tor₀ is M ⊗ₐ N (our own).

**Problem.** For a fibration pullback P = X ×ᵦ E over simply connected B, with connected spaces of finite k-type, the Eilenberg–Moore spectral sequence runs from Tor over H∗(B;k) of H∗(X;k) and H∗(E;k) to H∗(P;k). For ΩSⁿ with n ≥ 2, its E₂ term has one copy of k in each nonnegative total degree divisible by n−1.

**How the definition helps.** Tor₀ is the tensor product, so when B is a point only Tor₀ survives and the theorem becomes the Künneth formula. The higher Tor groups correct for the failure of exactness, so no vanishing of Tor is assumed. The work is Eilenberg and Moore's comparison of the cobar construction on singular chains with the chains of the pullback.

**nLab:** [Eilenberg–Moore spectral sequence](https://ncatlab.org/nlab/show/Eilenberg%E2%80%93Moore+spectral+sequence). It says: “it applies without assumption on vanishing of Tor-groups;”

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “This is a generalization insofar as the zeroeth Tor functor is just the tensor product and in the above special case the cohomology of the point B is just the coefficient field k (in degree 0).”

**Sources:**

- [Samuel Eilenberg and John C. Moore, Limits and spectral sequences, Topology 1 (1962) 1–23](https://doi.org/10.1016/0040-9383(62)90093-9)
- [Samuel Eilenberg and John C. Moore, Homology and fibrations I: Coalgebras, cotensor product and its derived functors, Commentarii Mathematici Helvetici 40 (1965) 199–236](https://doi.org/10.1007/BF02564371)

### With connections, cubical groups are Kan and cubical products behave correctly

**Remember:** Connections are extra degeneracies that fold a cube along its diagonal.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 18G45. arXiv math.AT. Level 4: research.

**Definition.** A cubical set with connections has extra degeneracies, called connections, that fold an n-cube into an (n+1)-cube by combining two adjacent coordinates by maximum or minimum (our own). Formally it is a presheaf on the cube category generated by faces, coordinate deletions and these connections (our own).

**Problem.** Every cubical group with connections is a Kan complex (Tonks). The cube category with connections is a strict test category, so products of cubical sets have the correct homotopy type (Maltsiniotis).

**How the definition helps.** Connections give fillers for open boxes in cubical groups, as Tonks proves; without them, cubical groups can lack such fillers. In plain cubical sets the product of two intervals also has the wrong homotopy type (our own). Maltsiniotis proves the strict test category result with connections (our own).

**nLab:** [cubical set](https://ncatlab.org/nlab/show/cubical+set), [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Another reason was that cubical groups were in general not Kan complexes; however cubical groups with connection are Kan complexes.”

**Sources:**

- [A. P. Tonks, Cubical groups which are Kan, J. Pure Appl. Algebra 81 (1992) 83–87](https://doi.org/10.1016/0022-4049(92)90136-4)
- [G. Maltsiniotis, La catégorie cubique avec connexions est une catégorie test stricte, Homology Homotopy Appl. 11 (2009)](https://doi.org/10.4310/hha.2009.v11.n2.a15)

### Connections on cubical sets give the equivalence with crossed complexes

**Remember:** A connection folds a cell onto two adjacent sides of a square.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18G45. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A cubical set with connections has extra degeneracies that fold a cube into one of the next dimension, by pulling back along the maximum or minimum of two adjacent coordinates (our own). Formally it is a presheaf on cubes whose maps include faces, projections and these connections (our own).

**Problem.** Cubical ω-groupoids with connections are equivalent to crossed complexes (Brown and Higgins). A crossed complex is like a chain complex, with a groupoid at the bottom and groupoid actions above it.

**How the definition helps.** The connections supply the thin cells used to fold cubes into the globular pieces of a crossed complex (our own). Brown and Higgins prove that this folding gives the equivalence for cubical ω-groupoids with connections.

**nLab:** [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Such connections on cubical sets were introduced in 1981 by Brown and Higgins in order to obtain the equivalence of their "cubical ∞-groupoids" with crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, On the algebra of cubes, Journal of Pure and Applied Algebra 21 (1981) 233–260](https://doi.org/10.1016/0022-4049(81)90018-9)

### Cogroup generators make equivalences of spectra detectable at one base point

**Remember:** Cogroup generators make all components of a mapping space alike.

*Rules out counterexamples.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N60. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a pointed cocomplete ∞-category, take a family of compact objects Sᵢ that generates under colimits, contains the suspension of each member, and consists of cogroups, so each \[Sᵢ, −\] is group-valued (our own).

**Problem.** In such an ∞-category, a map f: X → Y is an equivalence when every map \[Sᵢ, X\] → \[Sᵢ, Y\] is a bijection. For spectra, a map is an equivalence exactly when it is an isomorphism on πₙ for every integer n.

**How the definition helps.** The cogroup structure makes each mapping space out of Sᵢ an H-group, so all its components look alike and one base point is enough (nLab). In pointed spaces S⁰ is not a cogroup, so the test can fail for X not connected (nLab). For example, the inclusion of S⁰ into a point plus a disjoint circle passes the test but is not an equivalence (our own).

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “It is this last condition of testing on all basepoints that the assumed cogroup structure on the S<sub>i</sub> allows to do away with”

**Sources:**

- [Jacob Lurie, Higher Algebra, Section 1.4.1 (the lemma in the proof of Theorem 1.4.1.2)](https://www.math.ias.edu/~lurie/papers/HA.pdf) (link not checked)

### Quillen idempotent monads give the stable model structure on spectra

**Remember:** Q keeps equivalences, is idempotent, and survives the specified pullbacks.

*Makes the theorem clean to state or prove.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** On a right proper model category, take a coaugmented endofunctor η: Id → Q that preserves weak equivalences and is idempotent up to weak equivalence, meaning Qηₓ and η<sub>QX</sub> are weak equivalences for every X (our own). Pullback along fibrations between fibrant objects where η is a weak equivalence must preserve maps that Q sends to weak equivalences (our own).

**Problem.** For such Q, the original cofibrations and the Q-equivalences are part of a model structure (Bousfield–Friedlander). For Q the Ω-spectrification of topological sequential spectra, this is the stable model structure, whose weak equivalences are the stable weak homotopy equivalences.

**How the definition helps.** The definition turns building a localized model structure into three checks on one functor (our own). For sequential spectra these are properties of Ω-spectrification, which preserves homotopy pullbacks (our own). The general Bousfield–Friedlander theorem, proved once for all such Q, does the rest.

**nLab:** [Introduction to Stable homotopy theory -- 1-1](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-1). It says: “this establishes the stable model structure on topological sequential spectra”

**Sources:**

- [A. K. Bousfield and E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Test categories make presheaves model homotopy types almost by definition

**Remember:** Contractible categories must stay contractible as presheaves on A.

*True by definition. Confidence: medium.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P15, 18F20. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A small category A is a weak test category when, for every small category D with a terminal object, the presheaf sending a to the set of functors A/a → D has a category of elements with weakly contractible nerve (our own). Such D are contractible, so the test asks that presheaves on A keep them contractible (our own).

**Problem.** For a weak test category A, localizing presheaves at category-of-elements nerve equivalences gives the homotopy category of small categories localized at nerve equivalences. Thus presheaves on a test category model homotopy types.

**How the definition helps.** The test is exactly what the comparison with small categories needs, so the theorem follows by a short argument (Maltsiniotis, Lemme 1.3.8 and Proposition 1.3.9). The real work is proving that small categories model homotopy types through nerves, and checking that categories such as Δ are test categories.

**nLab:** [test category](https://ncatlab.org/nlab/show/test+category), [Pursuing Stacks](https://ncatlab.org/nlab/show/Pursuing+Stacks). It says: “In other words, presheaves over a (weak) test category are models for homotopy types of ∞-groupoids.”

**Sources:**

- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](https://webusers.imj-prg.fr/~georges.maltsiniotis/textes.html)
