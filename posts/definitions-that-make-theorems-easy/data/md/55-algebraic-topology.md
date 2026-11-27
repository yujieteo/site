### Angle-lift winding numbers force complex polynomials to have roots

**Remember:** Lift the angle in turns and count its net change around the loop.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** Define the winding number of a loop avoiding zero as the net change of a continuous angle, measured in turns. Its value is an integer and cannot change during a deformation through loops avoiding zero. The integral definition for piecewise smooth loops divides the integral of dz/z by 2πi.

**Problem.** Every nonconstant complex polynomial has a complex root.

**How the definition helps.** On a sufficiently large circle the leading monomial dominates the lower terms, so removing them continuously preserves winding (our own). The leading monomial winds as many times as the polynomial’s degree (our own). If the polynomial had no root, shrinking the circle would deform its image to a constant loop avoiding zero. Homotopy invariance would then force this positive winding number to equal zero (our own).

**Wikipedia:** [Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra), [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “Now changing R continuously will deform the loop continuously. At some R the winding number must change. But that can only happen if the curve P(R) includes the origin (0,0) for some R.”

**Sources:** none listed. No primary source with a working link was found.

### Angle-lift winding numbers make Rouché’s zero counts agree

**Remember:** Count turns by lifting angles continuously around each boundary loop.

*True by definition.* MSC 55M25 (Degree, winding number), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the winding number of a loop avoiding zero as the net change of a continuous angle, measured in turns. The angle lift makes that integer invariant under deformations avoiding zero. The integral definition instead integrates dw/w along the loop and divides by 2πi.

**Problem.** Let f and g be holomorphic on an open set containing a simple closed piecewise smooth curve C and its interior. If \|g\| &lt; \|f\| on C, then f and f + g have the same number of zeros inside. Count each zero by its order.

**How the definition helps.** The bound \|g\|&lt;\|f\| keeps f+tg nonzero on C for 0≤t≤1 (our own). This deformation preserves winding number by angle lifting (our own). The argument principle identifies winding on the positively oriented boundary with the number of interior zeros counted with multiplicity (our own).

**Wikipedia:** [Rouché's theorem](https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem). It says: “then the person and the dog go around the tree the same number of times.”

**Paper or page:** [Rouché's Theorem](https://proofwiki.org/wiki/Rouché's_Theorem). It says: “Let \|g(z)\| &lt; \|f(z)\| on γ. Then f and f + g have the same number of zeroes in D counted up to multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Defining winding number by lifting the angle makes it homotopy invariant

**Remember:** A continuous integer cannot jump, so a homotopy cannot change it.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** For a loop γ:\[0,1\]→ℂ avoiding a, lift the direction of γ(t)−a to a continuous angle s(t) measured in turns. Its winding number about a is s(1)−s(0), independent of the lift since lifts differ by a constant integer (our own).

**Problem.** If two loops are homotopic through loops that avoid a, they have the same winding number about a.

**How the definition helps.** The covering homotopy theorem lifts the angle continuously across the whole homotopy square (our own). Subtracting the two endpoint angles therefore gives a continuous function of the homotopy parameter (our own). Each loop ends where it began, so this difference is integer-valued and hence constant (our own).

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “wind(γ,a) = s(1) − s(0)”

**Sources:** none listed. No primary source with a working link was found.

### Homology degree turns odd sphere maps into a coincidence test

**Remember:** An odd equator map has odd degree, but an extension forces zero.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 55M20, 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The degree of a sphere map is the integer by which it multiplies the sphere’s top reduced homology group. This definition also works for a continuous map with no derivative.

**Problem.** Every continuous map from the n-sphere to Euclidean n-space agrees at some pair of opposite points when n ≥ 1. Equivalently, no continuous odd map takes the n-sphere into the sphere one dimension lower.

**How the definition helps.** A sphere map that extends over a ball has degree zero because the ball has zero reduced homology (our own). Without an antipodal coincidence, dividing f(x) − f(−x) by its length gives an odd map to the sphere one dimension lower (our own). Its restriction to the equator extends over a hemisphere (our own). The odd-degree theorem says this restriction has odd degree, a contradiction.

**Wikipedia:** [Borsuk–Ulam theorem](https://en.wikipedia.org/wiki/Borsuk%E2%80%93Ulam_theorem). It says: “any odd map Sⁿ⁻¹ → Sⁿ⁻¹ has odd degree”

**Sources:**

- [Karol Borsuk, Drei Sätze über die n-dimensionale euklidische Sphäre, Fundamenta Mathematicae 20 (1933), 177–190](https://doi.org/10.4064/fm-20-1-177-190)

### Lifting the angle makes winding number an integer

**Remember:** A closed path ends a whole number of turns from its starting angle.

*True by definition.* MSC 55M25 (Degree, winding number), 30E20. arXiv math.AT, math.CV. Level 2: later undergraduate.

**Definition.** For a closed path γ in ℂ avoiding a, choose a continuous angle s(t) of γ(t) − a, measured in turns. Its winding number about a is s(1) − s(0).

**Problem.** The winding number of a closed path around a point is an integer.

**How the definition helps.** The angle lift makes integrality immediate because the endpoint and start represent the same direction. Their real angles therefore differ by an integer number of turns. In our own comparison, the integral definition has the same value by differentiating the polar form along a piecewise smooth path. The work is proving that a continuous real angle exists once the starting angle is chosen.

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “all the fibers of p are of the form ρ₀ × (s₀ + ℤ) (so the above expression does not depend on the choice of the starting point). It is an integer because the path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Parity gives a degree even without orientations

**Remember:** Count endpoints in pairs, without signs.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Consider a smooth map between manifolds of equal dimension without boundary, with compact source and connected target. At a regular value, the derivative is invertible at each preimage. The degree modulo two records whether the number of preimages is even or odd.

**Problem.** The degree modulo two is independent of the regular value and stays the same under smooth homotopy. It exists even when the manifolds have no orientation.

**How the definition helps.** The parity of a finite fiber survives a cobordism because each interval has two endpoints (our own). Sard’s theorem gives a nearby value regular for the homotopy and both end maps (our own). Local constancy at regular values transfers the parity back, and an isotopy moving one target point to another gives independence (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “the manifolds need not be orientable”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Signed preimages make boundary extensions have degree zero

**Remember:** A fiber interval contributes one point of each sign.

*True by definition.* MSC 55M25 (Degree, winding number), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a smooth map between oriented manifolds of equal dimension without boundary, assume the source is compact and the target connected. Its degree counts preimages of a regular value with sign +1 or −1 as the derivative preserves or reverses orientation.

**Problem.** Let a smooth map from the oriented boundary of a compact oriented manifold extend smoothly over that manifold. Its degree is zero for a connected oriented target without boundary of the same dimension as the source boundary.

**How the definition helps.** Computing degree by signed preimages instead of top homology turns the calculation into counting interval endpoints (our own). Sard’s theorem supplies a value regular for both maps, whose inverse image under the extension is a compact oriented curve (our own). Its interval endpoints contribute opposite signs under the induced boundary orientation, and its circles contribute none (our own).

**Paper or page:** [Extendability Theorem for Intersection Numbers/Corollary](https://proofwiki.org/wiki/Extendability_Theorem_for_Intersection_Numbers/Corollary). It says: “deg f = 0”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Augmentation makes one suspension formula work in all degrees

**Remember:** Remove the point contribution and suspension shifts every degree alike.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Reduced homology adds a boundary map that sends each point to 1 in a copy of ℤ in degree −1. The suspension takes a cylinder on the space and collapses each end to its own point.

**Problem.** For a nonempty space, suspension shifts reduced homology from degree n to n + 1 for every n ≥ 0. A sphere therefore has reduced homology ℤ in its dimension and zero in other nonnegative degrees.

**How the definition helps.** Reduced homology vanishes on each contractible cone even in degree zero (our own). The complements of the two tips form an open cover, and their overlap deforms onto the original space (our own). The Mayer–Vietoris exact sequence for this cover then gives the degree shift (our own). Starting with two points gives the sphere calculation (our own).

**Wikipedia:** [Mayer–Vietoris sequence](https://en.wikipedia.org/wiki/Mayer%E2%80%93Vietoris_sequence). It says: “with A and B contractible. Also, the intersection A ∩ B is homotopy equivalent to Y.”

**Sources:** none listed. No primary source with a working link was found.

### Cell boundaries turn surface homology into signed edge counts

**Remember:** Opposite traversals cancel, while matching traversals give a two.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 57K20. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Cellular chains use one integer generator per cell in each dimension. For a polygon with paired edges and one vertex, its boundary records each edge traversal with a sign for its direction.

**Problem.** The first integral homology of a connected sum of g ≥ 1 tori is free abelian of rank 2g. For k ≥ 1 projective planes, the connected sum has k − 1 free generators and one summand ℤ/2ℤ.

**How the definition helps.** Cellular chains replace a triangulation by one polygon relation, since every edge begins and ends at the same vertex (our own). In the usual torus sum polygon, each edge appears twice in opposite directions and cancels (our own). For the projective plane sum, the boundary is twice the sum of all edges, and this sum can replace one generator (our own). The polygon descriptions and the cellular homology theorem justify the calculation (our own).

**nLab:** [cellular homology](https://ncatlab.org/nlab/show/cellular+homology). It says: “Cellular homology is a very efficient tool for computing the ordinary homology groups of topological spaces which are CW complexes”

**Sources:** none listed. No primary source with a working link was found.

### Chain homotopy makes homotopic maps agree on homology

**Remember:** On a cycle the difference is a boundary.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A chain map commutes with the boundary operator ∂. Two chain maps are chain homotopic if their difference equals ∂P + P∂ for an operator P that raises degree by one.

**Problem.** Homotopic continuous maps induce the same homomorphism on singular homology. In particular homotopy equivalences induce isomorphisms.

**How the definition helps.** For a cycle z, its boundary ∂z vanishes, so the two images differ by the boundary ∂Pz (our own). Homology identifies cycles whose difference is a boundary (our own). To pass from a continuous deformation to this algebraic formula, the prism construction divides each moving simplex into higher-dimensional simplices (our own).

**Paper or page:** [Homotopic Chain Maps Induce Equal Maps on Homology](https://proofwiki.org/wiki/Homotopic_Chain_Maps_Induce_Equal_Maps_on_Homology). It says: “Then f and g induce equal maps on homology.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous simplices let every continuous map act on homology

**Remember:** Compose each simplex with the map and keep its domain.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A singular simplex in X is any continuous map from a standard simplex to X. Unlike a simplex in a triangulation, its image may overlap itself or collapse.

**Problem.** Every continuous map induces homomorphisms on singular homology. The identity induces the identity, and composition induces composition.

**How the definition helps.** Composing a singular simplex with any continuous map immediately gives another singular simplex (our own). Composition respects faces, so it carries cycles to cycles and boundaries to boundaries (our own). For triangulations the direct construction would require simplicial maps (our own). The comparison theorem identifies simplicial and singular homology on a triangulated space (our own).

**Paper or page:** [Homomorphism of Chain Complexes induces Homomorphism of Homology](https://proofwiki.org/wiki/Homomorphism_of_Chain_Complexes_induces_Homomorphism_of_Homology). It says: “Then for every n, f induces a morphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining relative chains as a quotient makes the exact sequence automatic

**Remember:** A short exact sequence of chains gives a long exact sequence.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a subspace A of X, the relative singular chain complex is C•(X)/C•(A), with boundary induced from X. Its homology is Hₙ(X, A).

**Problem.** Every pair (X, A) has a natural long exact sequence … → Hₙ(A) → Hₙ(X) → Hₙ(X, A) → Hₙ₋₁(A) → …

**How the definition helps.** The quotient gives a short exact sequence of chain complexes with first term C•(A), middle term C•(X), and last term C•(X)/C•(A). The zigzag lemma supplies its natural long exact homology sequence (our own).

**nLab:** [relative homology](https://ncatlab.org/nlab/show/relative+homology). It says: “The cokernel of this inclusion, hence the quotient C•(X)/C•(A) of C•(X) by the image of C•(A) under the inclusion”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.1](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Local homology makes dimension visible at one point

**Remember:** Remove a point to expose the dimension.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Local homology at x means the relative homology of the space paired with the complement of x. Relative chains identify every chain avoiding x with zero.

**Problem.** Homeomorphic nonempty open subsets of Euclidean spaces have the same dimension, which local homology detects at any point.

**How the definition helps.** At a point of an open subset of Euclidean n-space, local homology is ℤ in degree n and zero elsewhere (our own). Excision reduces the calculation to a ball around the point (our own). For positive dimension the punctured ball deforms onto a sphere, and the exact sequence of the pair gives the result (our own). A homeomorphism preserves these groups, so it preserves the dimension (our own).

**Wikipedia:** [Excision theorem](https://en.wikipedia.org/wiki/Excision_theorem). It says: “This follows from the excision theorem, the long exact sequence for the pair”

**Sources:** none listed. No primary source with a working link was found.

### Opposite edge directions turn a surface orientation into a cycle

**Remember:** Orient neighbors oppositely along each shared edge to cancel it.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 57K20. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Orient a triangulated surface by choosing directions around its triangles so adjacent triangles induce opposite directions along their shared edge. Independent choices of directions need not fit together.

**Problem.** For a connected closed triangulated surface, the second integral homology group is ℤ if the surface is orientable and zero otherwise. Here closed means compact and without boundary.

**How the definition helps.** Compatible triangle orientations make every edge cancel in the sum of all triangles (our own). In any cycle, cancellation across an edge forces its two triangle coefficients to have equal magnitudes (our own). Every triangle connects to every other across edges, so a nonzero cycle gives compatible orientations and one common magnitude (our own). There are no three-dimensional chains whose boundaries could remove such a cycle (our own).

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “neighboring edges are pointing in the opposite direction, then this determines an orientation of the surface.”

**Sources:** none listed. No primary source with a working link was found.

### Small singular chains make excision a quotient identity

**Remember:** Keep simplices in one open set so the quotient cancels the other.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For an open cover by U and V, call a singular chain small if each of its simplices lies in U or in V. General singular chains can contain simplices crossing between the two sets.

**Problem.** Suppose open sets U and V cover X. Inclusion of (V, U ∩ V) into (X, U) induces isomorphisms on relative homology, which ignores chains in the second space.

**How the definition helps.** Among small chains, ignoring simplices in U leaves precisely the simplices in V that do not lie entirely in the intersection (our own). This identifies the two relative chain groups and their boundary maps (our own). Repeated subdivision makes each finite chain small, and a chain homotopy shows that this preserves relative homology (our own).

**Wikipedia:** [Excision theorem](https://en.wikipedia.org/wiki/Excision_theorem). It says: “subdivide the simplices in a relative cycle”

**Sources:** none listed. No primary source with a working link was found.

### Sliding onto a subspace gives a homotopy equivalence

**Remember:** A deformation retraction gives a way back and a way to slide back.

*Rules out counterexamples.* MSC 55P10 (Homotopy equivalences in algebraic topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A retraction is a continuous map onto a subspace that fixes its points. A strong deformation retraction continuously moves each point to its image under the retraction while keeping the subspace fixed.

**Problem.** Including a strong deformation retract gives a homotopy equivalence, a map with an inverse up to continuous deformation. It induces an isomorphism on fundamental groups at each base point in the subspace.

**How the definition helps.** The inclusion and retraction compose to the identity one way and deform to it the other way (our own). An ordinary retraction can send a circle to a point and lose its nontrivial fundamental group (our own). The work is finding the deformation and showing that based homotopies induce equal homomorphisms (our own).

**nLab:** [deformation retract](https://ncatlab.org/nlab/show/deformation+retract). It says: “Hence a deformation retract is a (left) homotopy equivalence where one of the two homotopies occuring is in fact an identity.”

**Sources:** none listed. No primary source with a working link was found.

### The mapping cylinder replaces any map by an inclusion

**Remember:** Glue the bottom by the map and leave the top alone.

*True by definition.* MSC 55P10 (Homotopy equivalences in algebraic topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** To form the mapping cylinder of f from X to Y, glue the bottom of X × \[0, 1\] to Y by f. Leave the top as a separate copy of X.

**Problem.** Every continuous map factors through its mapping cylinder as an inclusion followed by a retraction onto its target.

**How the definition helps.** The separate top keeps distinct input points apart even when the original map identifies them (our own). Sliding each vertical segment to its bottom gives a continuous retraction because the slide respects the gluing (our own). The slide fixes the target throughout, so the retraction is a homotopy equivalence (our own).

**nLab:** [mapping cylinder](https://ncatlab.org/nlab/show/mapping+cylinder). It says: “In particular every continuous function factors as a map into its mapping cylinder followed by a deformation retraction.”

**Sources:** none listed. No primary source with a working link was found.

### A group pushout makes disk attachments impose relations

**Remember:** Gluing a disk kills its boundary loop.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A group pushout starts with the free product of two groups, which allows words from both groups. It imposes exactly the relations that identify the two images of each element of a shared source group.

**Problem.** Attaching a disk to a path-connected cell complex adds exactly one relation to its fundamental group. The loop along the disk boundary becomes the identity.

**How the definition helps.** The disk has trivial fundamental group, so the pushout sets its boundary loop equal to the identity (our own). Van Kampen identifies this pushout with the new fundamental group (our own). Apply it to overlapping neighborhoods of the old space and the disk interior whose intersection deforms onto a circle (our own).

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “is a pushout square in Grp.”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing a spanning tree makes a graph group free

**Remember:** Collapse the routes between vertices and keep one loop per leftover edge.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A spanning tree is a connected subgraph without cycles that contains every vertex. Form the quotient graph by identifying the whole tree with one point.

**Problem.** A finite connected graph has free fundamental group with one generator per edge outside a spanning tree. For E edges and V vertices its rank is E − V + 1.

**How the definition helps.** Collapsing the tree leaves one circle for each remaining edge, avoiding relations for the paths between vertices (our own). Before collapse, each generator follows tree paths to and from its chosen edge (our own). Collapsing a contractible cell subcomplex preserves homotopy type (our own). Van Kampen gives a free group on the resulting circles (our own).

**Wikipedia:** [Fundamental group](https://en.wikipedia.org/wiki/Fundamental_group). It says: “the free product of the individual fundamental groups”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing one end turns null homotopies into extensions

**Remember:** A homotopy to a constant can collapse its last time slice.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 55P10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The cone on X is X × \[0, 1\] with all points at time 1 identified. Its base is the copy of X at time 0.

**Problem.** A continuous map from a nonempty space deforms to a constant exactly when it extends continuously over the cone. For a sphere, this means it extends over the ball.

**How the definition helps.** Collapsing the last time slice turns a deformation ending at one point into a map on the cone (our own). The quotient topology makes that map continuous (our own). Conversely, following each vertical segment through an extension gives the required deformation (our own). For a sphere the cone is a ball (our own).

**nLab:** [cone](https://ncatlab.org/nlab/show/cone). It says: “is the space obtained by taking the X-shaped cylinder X × I, where I may be an interval object, and squashing one end down to a point.”

**Sources:** none listed. No primary source with a working link was found.

### Fixing loop endpoints lets concatenation define a group

**Remember:** Hold the endpoints still so loops can multiply.

*Rules out counterexamples.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A based loop starts and ends at a chosen point. Based homotopy deforms one loop into another while keeping both endpoints there. Free homotopy allows the common endpoint to move.

**Problem.** Based homotopy classes of loops form the fundamental group under concatenation, which follows one loop after another.

**How the definition helps.** Fixed endpoints let the two deformations meet at the same point throughout (our own). On two circles joined at a point, write a and b for the trips around the circles (our own). Allowing the base point to move identifies b with aba⁻¹, yet multiplying each by b gives different free loop classes (our own). The group laws follow by changing speed and cancelling a path with its reverse (our own).

**Paper or page:** [Homotopic Paths Implies Homotopic Composition](https://proofwiki.org/wiki/Homotopic_Paths_Implies_Homotopic_Composition). It says: “Then the concatenated paths f₁ ∗ g₁ and f₂ ∗ g₂ are homotopic.”

**Sources:** none listed. No primary source with a working link was found.

### Groupoids reveal every path component

**Remember:** Keep paths between every pair and read off the components.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 01A60. arXiv math.AT, math.HO. Level 2: later undergraduate.

**Definition.** The fundamental group records loops at one chosen point, identifying loops that deform into each other while fixing that point. The fundamental groupoid uses all points and records paths between them, up to deformations that fix both endpoints.

**Problem.** The components of the fundamental groupoid are exactly the path components of the space.

**How the definition helps.** An arrow exists between two points exactly when a path joins them. Thus the groupoid partitions points into precisely the path components.

**nLab:** [fundamental groupoid](https://ncatlab.org/nlab/show/fundamental+groupoid). It says: “The set of connected components of Π₁(X) is precisely the set Π₀(X) of path-components of X.”

**Sources:**

- [Ronald Brown, Groupoids and Van Kampen’s Theorem (1967)](https://doi.org/10.1112/plms/s3-17.3.385)

### Pointwise loop multiplication makes a group’s fundamental group abelian

**Remember:** Multiply at the same time to see why loop order does not matter.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A topological group has continuous multiplication and inversion. For loops at its identity, pointwise multiplication multiplies their values at each time. Concatenation instead traverses one loop and then the other.

**Problem.** The fundamental group of a topological group at its identity is abelian.

**How the definition helps.** Pointwise multiplication respects the two halves of concatenation, so the operations satisfy the interchange law (our own). Both operations on loop classes have the constant class as their identity (our own). The Eckmann–Hilton argument then shows that the two operations agree and commute.

**nLab:** [Eckmann-Hilton argument](https://ncatlab.org/nlab/show/Eckmann-Hilton+argument). It says: “then the two structures actually coincide and the resulting monoid is commutative.”

**Sources:** none listed. No primary source with a working link was found.

### Van Kampen's theorem works for a set of base points

**Remember:** Keep paths between chosen points in every component of each piece and overlap.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 18B40, 57M05. arXiv math.AT, math.CT. Level 2: later undergraduate.

**Definition.** For A ⊆ X, the fundamental groupoid Π₁(X, A) has the points of A as objects. Its arrows from x to y are paths in X from x to y modulo homotopies fixing both endpoints. Composition joins paths.

**Problem.** Suppose X = U ∪ V for open U and V, and A meets every path component of U, V and U ∩ V. Writing G(W) = Π₁(W, A ∩ W), the pushout of G(U) and G(V) over G(U ∩ V) is G(X).

**How the definition helps.** Multiple base points represent disconnected overlaps in a single groupoid. The groupoid van Kampen theorem gives the pushout when the chosen points meet all the specified components (our own).

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “Note that the version of the theorem for fundamental groups does not apply, since U ∩ V is not path-connected.”

**Sources:**

- [Ronald Brown, Groupoids and van Kampen's theorem, Proc. London Math. Soc. (3) 17 (1967) 385–401](https://doi.org/10.1112/plms/s3-17.3.385)
- [Ronald Brown, A. Razak Salleh, A van Kampen theorem for unions of non-connected spaces, Archiv der Mathematik 42 (1984) 85–88](https://doi.org/10.1007/BF01198133)

### Semi-locally simply connected spaces have a full classification of covering spaces

**Remember:** Small loops need not shrink inside U, only somewhere in X.

*Rules out counterexamples.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A space X is semi-locally simply connected if each x has a neighborhood U where every loop based at x contracts in X.

**Problem.** Let X be locally path-connected and semi-locally simply connected. Then covering spaces of X are the same as actions of the fundamental groupoid of X on sets.

**How the definition helps.** Small loops must act trivially for the reconstruction from an action to give evenly covered neighborhoods (our own). The Hawaiian earring fails this test because every neighborhood of its wedge point contains an entire essential circle (our own). The covering classification theorem identifies coverings with their monodromy actions under the stated hypotheses (our own).

**nLab:** [semi-locally simply-connected topological space](https://ncatlab.org/nlab/show/semi-locally+simply-connected+topological+space), [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces), [Hawaiian earring space](https://ncatlab.org/nlab/show/Hawaiian+earring+space). It says: “Semi-local simple connectedness is the crucial condition needed to have a good theory of covering spaces”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics (2008), Thm. 3.3.2](https://doi.org/10.4171/048)
- [Jesper M. Møller, The fundamental group and covering spaces (2011), arXiv:1106.5650](https://arxiv.org/abs/1106.5650)

### A simplicial approximation supplies a straight line homotopy

**Remember:** The star condition keeps each straight segment inside a simplex.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** The open star of a vertex consists of the relative interiors of all simplices containing that vertex. A simplicial approximation chooses target vertices and extends linearly over each simplex. The open star of each chosen vertex must contain the image of the corresponding source star.

**Problem.** The realization of a simplicial approximation is homotopic to the map it approximates. The homotopy fixes every point where the two maps agree.

**How the definition helps.** The star condition puts both images of each point in one simplex, where the straight segment between them stays inside. These segments give a continuous deformation and keep points fixed wherever the images agree. Finding an approximation with this condition can require subdivision (our own).

**nLab:** [simplicial approximation theorem](https://ncatlab.org/nlab/show/simplicial+approximation+theorem). It says: “This makes sense since if f(α) ∈ \|s\|, then \|φ\|(α) ∈ \|s\| and \|s\| is closed under convex combinations.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating face signs make the boundary of a boundary zero

**Remember:** Delete in either order and the signs cancel.

*Rules out counterexamples.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Use integer sums of oriented simplices. The boundary of a positive-dimensional ordered simplex deletes each vertex in turn and adds the resulting faces with signs alternating from plus. A vertex has boundary zero.

**Problem.** The simplicial boundary followed by another boundary is zero. Thus every boundary is a cycle, which means its own boundary is zero.

**How the definition helps.** Each face two dimensions down occurs twice with opposite signs because the first deletion shifts one index (our own). With all signs positive, the second boundary of a triangle would count each vertex twice (our own).

**Wikipedia:** [Simplicial homology](https://en.wikipedia.org/wiki/Simplicial_homology). It says: “we declare that each oriented simplex is equal to the negative of the simplex with the opposite orientation.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Lefschetz number by the diagonal class makes fixed points necessary

**Remember:** A graph can meet the diagonal only at a fixed point.

*True by definition. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For a continuous self-map f of a closed oriented manifold M, intersect its graph with the diagonal algebraically. Equivalently, evaluate the diagonal Thom class pulled back by x ↦ (x, f(x)) on \[M\], using normal orientation from the difference first minus second. This gives the Lefschetz number (our own).

**Problem.** If a continuous map of a closed oriented manifold to itself has nonzero Lefschetz number, then it has a fixed point.

**How the definition helps.** The diagonal class restricts to zero off the diagonal because it comes from relative cohomology (our own). Without a fixed point the graph lies in that complement, so its pullback vanishes (our own). The Lefschetz trace formula identifies the evaluation with the alternating homology trace (our own).

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “as the alternating sum of traces of maps induced on homologies by f”

**Sources:** none listed. No primary source with a working link was found.

### Rational traces define the Lefschetz number and give Brouwer's theorem at once

**Remember:** A nonzero alternating trace forces a fixed point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55M20 (Fixed points and coincidences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** For a continuous self-map f of a compact triangulable space, Λ(f) is the finite sum ∑ₙ (−1)ⁿ tr(Hₙ(f; ℚ)).

**Problem.** If Λ(f) is not zero, then f has a fixed point. For the disk all higher homology vanishes, so Λ(f) = 1 for every map, which gives the Brouwer fixed point theorem.

**How the definition helps.** The Lefschetz fixed point theorem turns a nonzero alternating trace into a fixed point (our own). On a disk only H₀ contributes, and every self-map acts there as the identity, giving trace one (our own).

**Wikipedia:** [Lefschetz fixed-point theorem](https://en.wikipedia.org/wiki/Lefschetz_fixed-point_theorem). It says: “since for compact and triangulable space from some point the homologies are trivial and traces are zeros, this sum is finite and well-defined.”

**Sources:**

- [Solomon Lefschetz, Intersections and transformations of complexes and manifolds, Transactions of the American Mathematical Society 28 (1926) 1–49](https://doi.org/10.1090/S0002-9947-1926-1501331-3)

### Defining degree by relative homology makes it equal the boundary degree

**Remember:** The connecting map sends fundamental classes to fundamental classes of boundaries.

*True by definition. Confidence: medium.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let f be a continuous map between compact connected oriented n-manifolds M and N, taking boundary into boundary. Its degree is the unique integer d with f∗\[M\] = d\[N\] in Hₙ(N, ∂N), using relative fundamental classes.

**Problem.** Suppose that ∂M and ∂N are nonempty and connected. Then f and its restriction ∂M → ∂N have the same degree.

**How the definition helps.** The connecting map carries each relative fundamental class to its oriented boundary class (our own). Naturality therefore gives (f\|∂M)∗\[∂M\] = d\[∂N\], which identifies the two degrees (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “The same definition works for compact manifolds with boundary but then f should send the boundary of X to the boundary of Y.”

**Sources:** none listed. No primary source with a working link was found.

### Defining degree by top homology makes degrees of composites multiply

**Remember:** Induced maps compose, so the integers they multiply by also multiply.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For connected closed oriented n-manifolds X and Y, let \[X\] and \[Y\] denote their integral fundamental classes. The degree of a continuous map f from X to Y is the unique integer d satisfying f∗\[X\] = d\[Y\].

**Problem.** For maps f: X → Y and g: Y → Z of such manifolds, deg(g ∘ f) = deg(g) · deg(f).

**How the definition helps.** Functoriality gives (g ∘ f)∗\[X\] = g∗(deg(f)\[Y\]) = deg(f)deg(g)\[Z\] (our own). The coefficient of \[Z\] is the composite’s degree (our own).

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Defining degree by top homology makes it a homotopy invariant

**Remember:** Homotopic maps induce the same map on homology, so their degrees agree.

*True by definition.* MSC 55M25 (Degree, winding number), 57R19. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For connected closed oriented n-manifolds X and Y, let \[X\] and \[Y\] denote their integral fundamental classes. The degree of a continuous map f from X to Y is the unique integer d satisfying f∗\[X\] = d\[Y\].

**Problem.** Homotopic maps between connected closed oriented manifolds of the same dimension have the same degree.

**How the definition helps.** Homotopic maps induce equal homomorphisms on top homology (our own). They therefore give the same coefficient of \[Y\] in the image of \[X\] (our own).

**nLab:** [degree of a continuous function](https://ncatlab.org/nlab/show/degree+of+a+continuous+function). It says: “Given a continuous map f : X → Y between two such manifolds, the homomorphism f∗ = Hₙ(f) : Hₙ(X) → Hₙ(Y) is therefore specified by the integer n such that f∗\[ω<sub>X</sub>\] = n\[ω<sub>Y</sub>\]. This integer is called the degree of f.”

**Sources:**

- [L. E. J. Brouwer, Über Abbildung von Mannigfaltigkeiten (1911), pp. 97–115](https://doi.org/10.1007/BF01456931)
- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)

### Orienting closed manifolds makes degree an integer and classifies maps to spheres

**Remember:** Fix a generator of top homology, and every map gets an integer.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 55Q05. arXiv math.AT. Level 3: graduate.

**Definition.** For connected closed oriented n-manifolds X and Y, let \[X\] and \[Y\] denote their integral fundamental classes. The degree of a continuous map f from X to Y is the unique integer d satisfying f∗\[X\] = d\[Y\].

**Problem.** For a closed connected oriented n-manifold M with n ≥ 1, two maps to Sⁿ are homotopic exactly when their degrees agree.

**How the definition helps.** Choosing fundamental classes encodes the induced homomorphism by one integer. Homotopy invariance gives one implication, and the Hopf degree theorem gives the converse (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “Poincaré duality implies that the manifold's top homology group is isomorphic to Z. Choosing an orientation means choosing a generator of the top homology group.”

**Sources:**

- [Heinz Hopf, Abbildungsklassen n-dimensionaler Mannigfaltigkeiten, Mathematische Annalen 96 (1927) 209–224](https://doi.org/10.1007/BF01209163)

### Signed preimage counts make nonzero degree guarantee a solution

**Remember:** No preimages means an empty sum, so the degree is zero.

*True by definition.* MSC 55M25 (Degree, winding number), 47H11. arXiv math.AT, math.FA. Level 3: graduate.

**Definition.** Let Ω ⊂ ℝⁿ be bounded and open, and let f take a neighborhood of its closure smoothly into ℝⁿ. For p outside f(∂Ω) regular for f on Ω, the degree sums sign(det Df(x)) over x ∈ Ω with f(x) = p. At other p outside f(∂Ω), use any sufficiently close regular value.

**Problem.** If deg(f, Ω, p) ≠ 0, then the equation f(x) = p has a solution in Ω.

**How the definition helps.** If p has no preimage in Ω, it is regular for the restriction to Ω (our own). Its signed count is the empty sum, hence zero (our own).

**Wikipedia:** [Degree of a continuous mapping](https://en.wikipedia.org/wiki/Degree_of_a_continuous_mapping). It says: “If deg(f, Ω̄, p) ≠ 0, then there exists x ∈ Ω such that f(x) = p.”

**Sources:** none listed. No primary source with a working link was found.

### Čech cohomology makes Alexander duality hold for every compact subset

**Remember:** Measure a wild set by its open covers, and duality returns.

*Rules out counterexamples.* MSC 55N05 (?ech types), 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Reduced Čech cohomology takes the direct limit of reduced simplicial cohomology over open covers ordered by refinement. Each cover gives a nerve whose simplices are finite collections of cover members with nonempty intersection.

**Problem.** Let X be a compact subset of the n-sphere. Alexander duality says the complement's reduced homology in degree q equals the reduced cohomology of X in degree n − q − 1. With Čech cohomology this holds for all compact X, with no local condition.

**How the definition helps.** Čech cohomology captures the neighborhood limit in Alexander duality for compact sets (our own). The planar Warsaw circle has two complementary components in S², so their union has reduced H₀ equal to ℤ (our own). Its singular H¹ vanishes, but its Čech H¹ equals ℤ (our own).

**Wikipedia:** [Alexander duality](https://en.wikipedia.org/wiki/Alexander_duality). It says: “Note that we can drop local contractibility as part of the hypothesis if we use reduced Čech cohomology, which is designed to deal with local pathologies.”

**Sources:**

- [J. W. Alexander, A proof and extension of the Jordan–Brouwer separation theorem, Transactions of the American Mathematical Society 23 (1922) 333–349](https://doi.org/10.1090/S0002-9947-1922-1501206-6)

### Augmented chains give the empty space reduced homology in degree −1

**Remember:** With no points, nothing reaches the extra copy of ℤ.

*True by definition. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U15. arXiv math.AT. Level 3: graduate.

**Definition.** Augment the singular chain complex by placing ℤ in degree −1 and sending each point generator in degree zero to 1. Reduced homology is the homology of this complex.

**Problem.** The empty space has reduced homology ℤ in degree −1 and zero in all other degrees. Every nonempty space has zero reduced homology in degree −1.

**How the definition helps.** The augmented definition makes reduced homology in degree −1 the cokernel of one map, so the answer can be read off. For the empty space, degree 0 is zero, so the cokernel is ℤ. For a nonempty space, the map is onto, so the cokernel is zero. These consequences are our own, and the page gives only the definition.

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

**Definition.** For a manifold M, compactly supported cohomology Hᵏ<sub>c</sub>(M) is the direct limit of Hᵏ(M, M ∖ K) over compact subsets K ordered by inclusion.

**Problem.** For an oriented n-manifold M without boundary, compact or not, Hᵏ with compact support is isomorphic to Hₙ₋ₖ(M). For example (our own), ℝⁿ has compactly supported cohomology ℤ in degree n, matching H₀(ℝⁿ) = ℤ.

**How the definition helps.** Passing to compact supports gives the cohomology groups that Poincaré duality pairs with ordinary homology (our own). For n &gt; 0, ordinary Hⁿ(ℝⁿ) vanishes, while compactly supported Hⁿ<sub>c</sub>(ℝⁿ) and H₀(ℝⁿ) both equal ℤ (our own).

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “In the case where an oriented manifold is not compact, one has to replace homology by Borel–Moore homology”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining cellular boundaries by exact sequences makes them square to zero

**Remember:** Two consecutive maps of an exact sequence compose to zero.

*True by definition.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW complex X with skeleta Xⁿ, put Cₙ = Hₙ(Xⁿ, Xⁿ⁻¹). Its cellular boundary first applies the connecting map into Hₙ₋₁(Xⁿ⁻¹), then the canonical map into Cₙ₋₁.

**Problem.** In the cellular chain complex of a CW complex, dₙ ∘ dₙ₊₁ = 0.

**How the definition helps.** The composite contains consecutive maps Hₙ(Xⁿ) → Hₙ(Xⁿ, Xⁿ⁻¹) → Hₙ₋₁(Xⁿ⁻¹) from the exact sequence of a pair (our own). Their composite is zero by exactness (our own).

**nLab:** [cellular homology](https://ncatlab.org/nlab/show/cellular+homology). It says: “On representative singular chains the morphism iₙ acts as the identity”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §2.2, Cellular Homology](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

### Defining cellular chains by relative homology makes cellular maps act functorially

**Remember:** Maps that preserve skeleta act on the groups between skeleta.

*True by definition. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW complex X with skeleta Xⁿ, put Cₙ(X) = Hₙ(Xⁿ, Xⁿ⁻¹). Its boundary applies the connecting map into Hₙ₋₁(Xⁿ⁻¹), then the canonical map into Cₙ₋₁(X).

**Problem.** A cellular map, one that sends each skeleton into the matching skeleton, induces a chain map of cellular chain complexes. This rule respects composition and identities.

**How the definition helps.** Every cellular map preserves skeleta, so relative homology gives maps between the cellular chain groups (our own). Naturality of both boundary factors makes these maps commute with the differentials (our own). Relative homology respects composition and identities (our own).

**Wikipedia:** [Cellular homology](https://en.wikipedia.org/wiki/Cellular_homology). It says: “Cellular homology is a functor from the category of CW complexes with cellular maps”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Euler characteristic by Betti numbers makes it invariant

**Remember:** Count holes of each dimension, not faces, and the cutting cannot change the answer.

*Makes the theorem clean to state or prove.* MSC 55N10 (Singular homology and cohomology theory), 57Q05. arXiv math.AT. Level 3: graduate.

**Definition.** For a finite CW complex X, its Euler characteristic is ∑ₙ (−1)ⁿ bₙ, where bₙ = dim Hₙ(X; ℚ).

**Problem.** Every bounded three-dimensional convex polyhedron has V − E + F = 2.

**How the definition helps.** The boundary is homeomorphic to S², whose only nonzero Betti numbers are b₀ = b₂ = 1. The Euler–Poincaré formula equates this alternating sum with the boundary’s alternating cell count V − E + F (our own).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “any convex polyhedron is homeomorphic to the three-dimensional ball, so its surface is homeomorphic (hence homotopy equivalent) to the two-dimensional sphere, which has Euler characteristic 2. This explains why the surface of a convex polyhedron has Euler characteristic 2.”

**Sources:** none listed. No primary source with a working link was found.

### Good pairs make the homology of a quotient equal to relative homology

**Remember:** Retract a neighborhood onto the closed subspace before collapsing it.

*Rules out counterexamples. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** A pair (X, A) is a good pair when A is a nonempty closed subspace that is a deformation retract of some neighborhood in X. A deformation retract is a subspace onto which the neighborhood can be continuously shrunk.

**Problem.** For a good pair, the reduced homology of the quotient X/A equals the relative homology Hₙ(X, A). With the disk and its boundary sphere, this gives the homology of all spheres by induction.

**How the definition helps.** A neighborhood retracting onto A lets excision compare the pair with its quotient, giving the good-pair theorem (our own). In \[0,1\], the closed set A = {0} ∪ {1/n ∣ n ≥ 1} admits no such neighborhood (our own). Every neighborhood contains an interval joining 0 to some 1/n, which cannot retract into the totally disconnected A (our own). Its quotient is the Hawaiian earring, whose first homology exceeds the countable relative group (our own).

**Wikipedia:** [Relative homology](https://en.wikipedia.org/wiki/Relative_homology). It says: “In the case that A is a subspace of X fulfilling the mild regularity condition that there exists a neighborhood of A that has A as a deformation retract, then the group H̃ₙ(X/A) is isomorphic to Hₙ(X,A).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Homology groups, not Betti numbers, give invariants of maps

**Remember:** Numbers count holes; groups also say where the holes go under a map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** The integral singular homology group Hₙ(X) consists of singular n-cycles modulo boundaries of singular (n+1)-chains. The map induced by f sends each cycle class to the class obtained by composing its simplices with f (our own).

**Problem.** Integral homology takes continuous maps to homomorphisms and preserves identities and composition. Consequently, for n ≥ 2 the disk Dⁿ has no retraction onto Sⁿ⁻¹ (our own).

**How the definition helps.** Composition on simplices respects faces, identities and composition, so it induces the stated maps on classes (our own). A retraction would factor the identity on Hₙ₋₁(Sⁿ⁻¹) ≅ ℤ through Hₙ₋₁(Dⁿ) = 0 (our own).

**nLab:** [decategorification](https://ncatlab.org/nlab/show/decategorification). It says: “Noether noted that if we work with homology groups rather than Betti numbers, we can solve more problems, because we obtain invariants not only of spaces, but also of maps.”

**Sources:**

- [J. Baez, This Week's Finds in Mathematical Physics (Week 121), 1998](https://math.ucr.edu/home/baez/week121.html)

### Reduced homology gives the point no homology, so wedge sums split

**Remember:** Reduced homology removes the one copy of ℤ in degree 0 that a point gives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 3: graduate.

**Definition.** The reduced singular homology H̃•(X) is the homology of the augmented chain complex … → C₁(X) → C₀(X) → ℤ → 0. The map C₀(X) → ℤ adds up the coefficients of a 0-chain.

**Problem.** Contractible spaces have zero reduced homology in every degree. A wedge of well-pointed spaces has reduced homology equal to the direct sum of the reduced homologies of its summands.

**How the definition helps.** Augmentation makes the homology of a point vanish, and homotopy invariance gives the contractible case (our own). For closed base points whose inclusions are cofibrations, the reduced homology wedge theorem gives the direct sum in every degree (our own).

**nLab:** [reduced homology](https://ncatlab.org/nlab/show/reduced+homology). It says: “For some applications, though, it is convenient to divide out that contribution such as to have the homology of the point be entirely trivial.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Corollary 2.25](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Defining reduced K-theory as a kernel makes it a direct summand

**Remember:** Restriction to a point has a section given by trivial bundles.

*True by definition.* MSC 55N15 (Topological \\(K\\)-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based compact Hausdorff space X, reduced complex K-theory K̃(X) is the kernel of base-point restriction K(X) → K(point) ≅ ℤ.

**Problem.** For a based compact Hausdorff space X, K(X) ≅ K̃(X) ⊕ ℤ.

**How the definition helps.** The constant map from X to the point gives a right inverse to restriction, so the kernel is a direct summand. The nLab proves this splitting from the kernel definition. In the stable-bundle definition, one must first show that the classes form a group (our own). That uses the theorem that every bundle on a compact Hausdorff space is a summand of a trivial bundle.

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “The kernel of this map is called the reduced K-theory group”

**Sources:** none listed. No primary source with a working link was found.

### Karoubi's Clifford-module K-theory makes real Bott periodicity follow from Clifford periodicity

**Remember:** Eight more real Clifford generators add only a matrix factor.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 15A66. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Let Cℓₙ be the real Clifford algebra on n anticommuting generators squaring to +1. For compact Hausdorff X, restrict Cℓₙ₊₁-module bundles to Cℓₙ-module bundles. Karoubi’s degree −n group is π₀ of the homotopy fiber of this restriction on topological K-theory spectra (our own).

**Problem.** Real topological K-theory of compact Hausdorff spaces repeats every eight degrees.

**How the definition helps.** Eightfold Clifford periodicity gives compatible Morita equivalences for both algebras in the restriction functor. They identify the two relative groups eight degrees apart (our own). Karoubi’s comparison theorem identifies these groups with real topological K-theory (our own).

**nLab:** [Karoubi K-theory](https://ncatlab.org/nlab/show/Karoubi+K-theory). It says: “The sequence is periodic up to Morita equivalence”

**Sources:**

- [Max Karoubi, K-Theory: An Introduction (Springer, 1978).](https://doi.org/10.1007/978-3-540-79890-3)

### Over a compact Hausdorff base, K-theory classes are stable classes of bundles

**Remember:** Over a compact Hausdorff space, every bundle has a partner that makes it trivial.

*Rules out counterexamples. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 55R50. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** Topological K-theory K(X) is the Grothendieck group of vector bundles on X. You take isomorphism classes of vector bundles, add them by direct sum, and formally add negatives. Here the base space X is compact Hausdorff.

**Problem.** For a compact Hausdorff space X, every element of K(X) is a formal difference \[E\] − \[trivial bundle\]. Two bundles have the same class in K(X) exactly when they are stably equivalent, that is, isomorphic after adding the same trivial bundle to each.

**How the definition helps.** Over a compact Hausdorff base every bundle F has a complement G with F ⊕ G trivial (our own). Adding G to both terms of \[E\] − \[F\] gives a trivial negative term (our own). Equality in the group completion means equality after adding one common bundle, whose complement makes the addition trivial (our own). On discrete ℕ, fibers of rank n at n have no common finite rank bound and hence no such complement (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “For the most part below we will invoke the assumption that the base topological space X is a compact Hausdorff space. Because then the following statement holds, which is crucial in some places:”

**Sources:**

- [Allen Hatcher, Vector Bundles and K-Theory (online book), Chapter 1](https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html)

### Representing K-theory by maps to ℤ × BU makes it homotopy invariant

**Remember:** A homotopy of input maps gives a homotopy after composition.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory), 55R50. arXiv math.AT. Level 3: graduate.

**Definition.** For a compact Hausdorff space X, let K⁰(X) be the set of homotopy classes of maps from X to ℤ × BU. Here BU classifies complex vector bundles up to adding trivial bundles. The bundle definition uses formal differences \[E\] − \[F\] of complex vector bundles on X.

**Problem.** Homotopic maps f, g : Y → X between compact Hausdorff spaces induce the same pullback map K⁰(X) → K⁰(Y).

**How the definition helps.** Pullback in the representing model means precomposition (our own). For every c from X to ℤ × BU, composing c with a homotopy between f and g identifies their pullbacks (our own). Representability identifies these homotopy classes with bundle K-theory.

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “by homotopy classes of continuous functions into the classifying spaces BO × ℤ and BU × ℤ, respectively”

**Sources:** none listed. No primary source with a working link was found.

### Representing reduced K-theory by based maps makes it split over wedges

**Remember:** A based map out of a wedge is one map from each piece.

*True by definition. Confidence: medium.* MSC 55N15 (Topological \\(K\\)-theory). arXiv math.AT. Level 3: graduate.

**Definition.** For a based finite CW complex X, reduced complex K-theory consists of based homotopy classes of maps X → ℤ × BU, based at zero.

**Problem.** The wedge X ∨ Y joins two based spaces at their base points. Its reduced K-group is the direct sum K̃(X) ⊕ K̃(Y).

**How the definition helps.** A based map or based homotopy on X ∨ Y is exactly a pair of them on X and Y (our own). The group operation is pointwise in ℤ × BU, so this bijection is an isomorphism (our own). The nLab proves the same isomorphism in the bundle model, using retracts and the exact sequence of a pair. The mapping model avoids that, but its agreement with the bundle model is a separate theorem (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “Then there is an isomorphism K̃(X ∨ Y) ≃ K̃(X) ⊕ K̃(Y)”

**Sources:** none listed. No primary source with a working link was found.

### Flat differential classes are homotopy invariant

**Remember:** Without curvature, smooth homotopies cannot change a differential class.

*Rules out counterexamples.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 53C08. arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** A differential cohomology class has a closed differential form called its curvature. The class is flat when this form vanishes.

**Problem.** Smoothly homotopic maps give the same pullback on flat differential classes. They can give different pullbacks on classes with nonzero curvature.

**How the definition helps.** The homotopy formula expresses the endpoint difference using the integral of curvature along the homotopy, which vanishes for flat classes (our own). In ordinary degree one, classes are smooth functions with values in ℝ/ℤ (our own). The function t ↦ t mod ℤ on ℝ distinguishes evaluation at 0 from evaluation at ½ (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “(i.e. flat cohomology) is a homotopy invariant functor.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)
- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Generalized cohomology drops only the dimension axiom

**Remember:** Keep homotopy invariance, exactness and excision; let the point have any coefficients.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** A generalized (Eilenberg–Steenrod) cohomology theory is a functor that satisfies all the Eilenberg–Steenrod axioms except the dimension axiom. The dimension axiom says that the cohomology of a point is zero outside degree 0. So in a generalized theory, the value on a point may be non-zero in many degrees.

**Problem.** Every spectrum gives a generalized cohomology theory, for example K-theory and cobordism. Conversely, by Brown representability, every additive generalized cohomology theory on CW complexes comes from a spectrum.

**How the definition helps.** A spectrum supplies suspension isomorphisms and exact cofiber sequences without requiring its coefficients to vanish outside degree zero (our own). Conversely, Brown representability gives representing spaces for an additive theory on pointed CW complexes, and suspension links them into a spectrum (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “This entry here is concerned with the generalization obtained from the Eilenberg-Steenrod axioms by just discarding the dimension axiom.”

**Sources:**

- [George W. Whitehead, Generalized homology theories, Trans. Amer. Math. Soc. 102 (1962) 227–283](https://doi.org/10.1090/s0002-9947-1962-0137117-6)
- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Suspension-defined connecting maps make cohomology exact in all degrees

**Remember:** Apply three-term exactness to each consecutive triple of the cofiber sequence.

*True by definition. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A reduced cohomology theory here is a graded contravariant functor to abelian groups taking coproducts to products and cofiber triples to middle-exact sequences. It has natural suspension isomorphisms Hⁿ(X) ≅ Hⁿ⁺¹(ΣX). For a cofiber sequence X → Y → Z, the connecting map composes this isomorphism with pullback along Z → ΣX.

**Problem.** In a pointed ∞-category with finite colimits, reduced cohomology sends a cofiber sequence to a long exact sequence. The connecting map from the group of X to the next-degree group of Z uses suspension and the map Z → ΣX.

**How the definition helps.** Each consecutive triple in X → Y → Z → ΣX → ΣY and its suspensions is a cofiber sequence (our own). Three-term exactness therefore gives exactness at each middle group (our own). The suspension isomorphisms identify the resulting maps across degrees with the connecting maps.

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “using that σ is by definition an isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The wedge axiom extends uniqueness of cohomology theories to infinite complexes

**Remember:** An additive theory turns a wedge of spaces into a product of groups.

*Rules out counterexamples. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N40. arXiv math.AT. Level 3: graduate.

**Definition.** The wedge axiom requires restriction to induce Ẽⁿ(∨ᵢ Xᵢ) ≅ ∏ᵢ Ẽⁿ(Xᵢ) for every family of pointed CW complexes and every degree n.

**Problem.** Suppose a suspension-compatible natural transformation between reduced additive cohomology theories is an isomorphism on S⁰ in every degree. It is then an isomorphism on every pointed CW complex.

**How the definition helps.** The wedge axiom extends cellular comparison to arbitrary wedges of spheres and to the telescope of the skeleta (our own). The comparison theorem then extends the coefficient isomorphism to all CW complexes. Without additivity, tensoring integral cohomology with ℚ agrees with rational cohomology on S⁰ but misses unbounded denominators on an infinite wedge of circles (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology), [wedge axiom](https://ncatlab.org/nlab/show/wedge+axiom). It says: “Then φ(X): E(X) → F(X) is an isomorphism for X any CW-complex with a finite number of cells. If both E and F satisfy the wedge axiom, then φ(X) is an isomorphism for X any CW-complex, not necessarily finite.”

**Sources:**

- [John Milnor, On axiomatic homology theory, Pacific Journal of Mathematics 12 (1962) 337–341](https://doi.org/10.2140/pjm.1962.12.337)
- [Samuel Eilenberg, Norman Steenrod, Foundations of Algebraic Topology, Princeton University Press (1952), section III.10 (uniqueness for ordinary theories on finite complexes)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/eilestee.pdf)

### Ω-spectrum cohomology has natural suspension isomorphisms by adjunction

**Remember:** Moving suspension to the representing space turns it into loops.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** An Ω-spectrum has pointed spaces Eₙ linked by weak equivalences Eₙ → ΩEₙ₊₁ for each degree n. Its cohomology of a pointed CW complex X in degree n consists of pointed homotopy classes of maps from X to Eₙ. The axiomatic definition of reduced cohomology instead assumes suspension isomorphisms.

**Problem.** For an Ω-spectrum, the degree n cohomology of X is naturally isomorphic to the degree n + 1 cohomology of its reduced suspension.

**How the definition helps.** Suspension–loop adjunction identifies based maps ΣX → Eₙ₊₁ with based maps X → ΩEₙ₊₁, also on homotopy classes (our own). For a pointed CW domain, the structure equivalence Eₙ → ΩEₙ₊₁ induces a bijection on those classes (our own). Both identifications are natural in X (our own).

**nLab:** [Whitehead-generalized cohomology](https://ncatlab.org/nlab/show/Whitehead-generalized+cohomology). It says: “In (Whitehead 62) it was observed that every spectrum induces a generalized homology theory. The Brown representability theorem (Brown 62) asserts that every generalized (co)homology arises this way”

**Wikipedia:** [Spectrum (topology)](https://en.wikipedia.org/wiki/Spectrum_%28topology%29). It says: “An Ω-spectrum is a spectrum such that the adjoint of the structure map (i.e., the map Xₙ → ΩXₙ₊₁) is a weak equivalence.”

**Sources:**

- [E. H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Complex orientations of a ring spectrum are exactly ring maps from MU

**Remember:** An orientation is one class on ℂℙ∞, and that class is a map from MU.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P43. arXiv math.AT. Level 3: graduate.

**Definition.** A complex orientation of a homotopy commutative ring spectrum E is a class x ∈ Ẽ²(ℂℙ∞) restricting to the suspended unit in Ẽ²(ℂℙ¹).

**Problem.** For a homotopy commutative ring spectrum E, complex orientations of E correspond bijectively to homotopy ring maps MU → E.

**How the definition helps.** A ring map from MU carries its universal orientation to a normalized class on ℂℙ∞ (our own). The universal property of complex cobordism gives the converse via the compatible multiplicative Thom classes determined by that orientation (our own).

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Wikipedia:** [Complex cobordism](https://en.wikipedia.org/wiki/Complex_cobordism). It says: “A complex orientation on an associative commutative ring spectrum E is an element x in E²(ℂℙ∞) whose restriction to E²(ℂℙ¹) is 1, if the latter ring is identified with the coefficient ring of E.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)

### Defining bordism by the Thom spectrum makes its long exact sequence automatic

**Remember:** Spectra give exact sequences before any manifolds are glued.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R75. arXiv math.AT. Level 3: graduate.

**Definition.** For a CW pair (X,A), define oriented bordism in degree n as πₙ(MSO ∧ Σ∞(X₊/A₊)). Here MSO is the oriented Thom spectrum, and the plus signs adjoin base points.

**Problem.** For a cell complex X and a subcomplex A, oriented bordism has a long exact sequence of the pair.

**How the definition helps.** Smashing the suspension spectra of the cofiber sequence A₊ → X₊ → X₊/A₊ with MSO preserves the cofiber sequence (our own). Stable homotopy groups then give the long exact sequence (our own). The Pontryagin–Thom theorem identifies this construction with geometric oriented bordism (our own).

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “A generalized homology theory represented by a Thom spectrum.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86](https://doi.org/10.1007/BF02566923)

### Even ring spectra are always complex orientable, unlike KO

**Remember:** No odd homotopy, no obstruction to orienting.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N15. arXiv math.AT. Level 3: graduate.

**Definition.** A ring spectrum E, an object that represents a cohomology theory with products, is even if its homotopy groups πₖE vanish for every odd k. E is complex orientable if some class in E²(ℂℙ∞) restricts to the unit on ℂℙ¹.

**Problem.** Every even ring spectrum is complex orientable. Real K-theory KO, which has π₁KO = ℤ/2, is not complex orientable.

**How the definition helps.** The unit on ℂℙ¹ extends over each higher even cell because its obstruction lies in an odd coefficient group (our own). Compatible extensions give an orientation on ℂℙ∞ (our own). For KO the attaching Hopf map of the four-cell already carries the unit to the nonzero class in π₁KO (our own).

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “A sufficient condition for this is, evidently, that the reduced E-cohomology of all odd-dimensional spheres vanishes, hence, that the graded E-cohomology ring E• is trivial in odd degrees (an even cohomology theory).”

**Sources:** none listed. No primary source with a working link was found.

### Landweber exactness says when tensoring complex cobordism gives a homology theory

**Remember:** Each vᵢ must act injectively on R modulo the earlier ones.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** Let F be a graded one-dimensional commutative formal group law over R. For each prime p let v₀ = p, and for i ≥ 1 take vᵢ as the coefficient of xᵖⁱ in \[p\]F(x). Landweber exactness requires multiplication by vᵢ on R/(v₀,…,vᵢ₋₁) to be injective for every p and i ≥ 0, starting with R.

**Problem.** For Landweber exact F, the functor X ↦ MU∗(X) ⊗<sub>L</sub> R is a generalized homology theory represented by a spectrum. Here L is the Lazard ring acting through F.

**How the definition helps.** Landweber’s exact functor theorem turns these injection tests into exactness on the cobordism comodules needed for homology (our own). For the additive law over ℤ, v₁ vanishes modulo p, so multiplication by v₁ fails the test (our own). Representability then supplies the spectrum (our own).

**nLab:** [Landweber exact functor theorem](https://ncatlab.org/nlab/show/Landweber+exact+functor+theorem), [Landweber exactness](https://ncatlab.org/nlab/show/Landweber+exactness). It says: “Landweber exactness is a sufficient condition on R for E ≔ MU•(−) ⊗ L R to be indeed a generalized homology theory”

**Sources:**

- [Peter S. Landweber, Homological properties of comodules over MU∗(MU) and BP∗(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### Morava K-theory has a graded field of coefficients, so Künneth always holds

**Remember:** Every nonzero homogeneous coefficient has an inverse.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A graded field is a graded ring in which every nonzero homogeneous element is invertible. At prime p and height n ≥ 1, Morava K-theory has the graded field 𝔽ₚ\[vₙ, vₙ⁻¹\] as coefficients, with \|vₙ\| = 2(pⁿ − 1).

**Problem.** For all spaces X and Y, the K(n)-homology of X × Y is the tensor product over K(n)\* of the K(n)-homologies of X and Y.

**How the definition helps.** Every graded module over a graded field is free (our own). Thus the higher Tor groups in the Künneth spectral sequence vanish, leaving the tensor product via the external product (our own).

**nLab:** [Morava K-theory](https://ncatlab.org/nlab/show/Morava+K-theory). It says: “This ring is a graded field in the sense that every graded module over it is free.”

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “They have Künneth isomorphisms for arbitrary pairs of spaces: that is, for X and Y CW complexes, we have”

**Sources:**

- [D. C. Johnson, W. S. Wilson, BP operations and Morava's extraordinary K-theories, Mathematische Zeitschrift 144 (1975) 55–75](https://doi.org/10.1007/BF01214408)

### One class on ℂP∞ gives a formal group law

**Remember:** A complex orientation is a first Chern class that restricts to 1 on the 2-sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A complex orientation of a homotopy commutative ring spectrum E is a class x ∈ Ẽ²(ℂℙ∞) restricting on ℂℙ¹ to the suspended unit.

**Problem.** Every complex oriented cohomology theory carries a formal group law, from the first Chern class of a tensor product of line bundles. For a homotopy commutative ring spectrum E, complex orientations correspond exactly to ring maps MU → E, so MU is the universal complex oriented theory.

**How the definition helps.** The projective bundle theorem expresses the tensor product’s first Chern class uniquely as a power series in the two classes (our own). Tensor product gives this series the formal group identities (our own). The universal property of MU identifies choices of orientation with homotopy ring maps from MU.

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory), [Milnor-Quillen theorem on MU](https://ncatlab.org/nlab/show/Milnor-Quillen+theorem+on+MU). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Sources:**

- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### p-typical formal group laws make BP a ring summand of p-local MU

**Remember:** Make the universal group law p-typical, and MU splits off BP.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 3: graduate.

**Definition.** Over a torsion-free ℤ₍ₚ₎-algebra R, a one-dimensional commutative formal group law is p-typical if its logarithm over R ⊗ ℚ uses only powers xᵖⁱ.

**Problem.** There is an idempotent ring map ε from MU₍ₚ₎ to itself whose image BP has π\*BP = ℤ₍ₚ₎\[v₁, v₂, …\]. Its formal group law is the universal p-typical one, and MU₍ₚ₎ is a wedge of suspensions of BP.

**How the definition helps.** Cartier’s p-typification fixes p-typical laws, which explains the idempotent on the universal law (our own). Quillen’s splitting theorem realizes this projection on p-local complex cobordism, identifies the polynomial coefficients of BP, and gives the wedge decomposition (our own).

**nLab:** [Brown-Peterson spectrum](https://ncatlab.org/nlab/show/Brown-Peterson+spectrum). It says: “BP is related to p-typical formal groups as MU is to formal groups.”

**Wikipedia:** [Brown–Peterson cohomology](https://en.wikipedia.org/wiki/Brown%E2%80%93Peterson_cohomology). It says: “BP is the universal example of a complex oriented cohomology theory whose associated formal group law is p-typical.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)
- [E. H. Brown, F. P. Peterson, A spectrum whose ℤₚ cohomology is the algebra of reduced pth powers, Topology 5 (1966) 149–154](https://doi.org/10.1016/0040-9383(66)90015-2)

### Cohomology with supports in a closed set depends only near it

**Remember:** A section zero off Z glues with zero, so only near Z matters.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14B15. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a sheaf F of abelian groups on X and closed Z ⊆ X, Γ<sub>Z</sub>(X,F) consists of sections vanishing on X ∖ Z. Its right derived functors are the cohomology groups with support in Z.

**Problem.** For every open U containing Z, restriction induces an isomorphism on cohomology with support in Z for every sheaf of abelian groups on X.

**How the definition helps.** A section on U that vanishes off Z glues with zero on X − Z, so supported sections on X and on U agree. Restriction to an open set keeps injective sheaves injective, so one injective resolution computes both sides (our own summary). For relative cohomology of the pair (X, X − Z) this is excision, which singular cohomology proves by subdividing simplices (our own remark).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “(So cohomology with support in a closed subset Y only depends on the behavior of the space X and the sheaf E near Y.)”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Compactly supported Euler characteristic adds across open and closed pieces

**Remember:** Compact supports make an open piece and its closed complement add correctly.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14P10. arXiv math.AT. Level 3: graduate.

**Definition.** Take a locally compact semialgebraic set, one cut out by finite combinations of polynomial equalities and inequalities. Its compactly supported Euler characteristic is the alternating sum of dimensions of its compactly supported cohomology over ℚ. This cohomology uses classes with support inside compact subsets and agrees with ordinary cohomology on compact spaces.

**Problem.** Let U be an open semialgebraic subset of X with complement Z. Then the compactly supported Euler characteristic of X is the sum of those of U and Z.

**How the definition helps.** Compactly supported cohomology gives a long exact sequence for U, X and Z (our own). Semialgebraic finiteness makes the groups finite-dimensional and zero outside finitely many degrees (our own). Taking alternating dimensions gives χ<sub>c</sub>(X) = χ<sub>c</sub>(U) + χ<sub>c</sub>(Z) (our own).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Euler calculus](https://en.wikipedia.org/wiki/Euler_calculus). It says: “if X is a locally compact space, and one uses Euler characteristics with compact supports, no assumptions on M or N are needed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the exceptional inverse image as an adjoint makes Poincaré duality formal

**Remember:** Make the upper shriek a right adjoint, and duality is the adjunction.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Let p map a locally compact space X of finite dimension to a point, so Rp₍!₎ is compactly supported cohomology. The exceptional inverse image p⁽!⁾ is defined as the right adjoint of Rp₍!₎, on derived categories of sheaves of k-vector spaces.

**Problem.** For an oriented n-manifold X without boundary and a field k, the dual of Hⁱ<sub>c</sub>(X;k) is isomorphic to Hⁿ⁻ⁱ(X;k).

**How the definition helps.** Adjunction identifies Hom(Rp₍!₎k,k\[−i\]) with Hom(k,p⁽!⁾k\[−i\]). Over a field, the first group is the dual of Hⁱ<sub>c</sub>(X;k) (our own). Orientation identifies the dualizing complex p⁽!⁾k with k\[n\], giving Hⁿ⁻ⁱ(X;k) on the right (our own).

**nLab:** [Verdier duality](https://ncatlab.org/nlab/show/Verdier+duality). It says: “The analog of Poincaré duality is then the statement that the abelian sheaf cohomology with coefficients in V is dual to the abelian sheaf cohomology with compact support with coefficients in 𝔻V.”

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “for a continuous map f: X → Y of locally compact Hausdorff spaces, the derived functor of the direct image with compact (or proper) supports Rf₍!₎ has a right adjoint f⁽!⁾ in the derived category of sheaves”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Direct images with proper supports satisfy base change along every map

**Remember:** Keep sections whose support maps properly to the open set downstairs.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let f be continuous between locally compact Hausdorff spaces. On open V, f₍!₎F consists of sections over f⁻¹(V) whose support maps properly to V.

**Problem.** Take a cartesian square of locally compact Hausdorff spaces. For any map f, the base change map g⁻¹Rf₍!₎F → Rf′₍!₎g′⁻¹F is an isomorphism.

**How the definition helps.** Supports that are proper over Y stay proper after base change, so the proper base change argument needs no hypothesis on f (our own summary). The plain direct image fails: for the inclusion f of ℂ minus 0 into ℂ, f∗ℤ has stalk ℤ at 0. Yet the fibre over 0 is empty. Extension by zero has stalk 0 there, which matches the empty fibre.

**nLab:** [direct image with compact support](https://ncatlab.org/nlab/show/direct+image+with+compact+support). It says: “If y∈Y, then the fiber (f₍!₎F)<sub>y</sub> is isomorphic to Γ<sub>c</sub>(f⁻¹y, F\|f⁻¹(y)).”

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “If the map f is not closed, the base change map need not be an isomorphism, as the following example shows”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Disjoint clopen covers make all higher sheaf cohomology of profinite spaces vanish

**Remember:** Disjoint covers have no overlaps, so Čech cochains carry nothing.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N05. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A profinite space is a compact Hausdorff space that is totally disconnected, such as the Cantor set or the p-adic integers. In such a space every open cover is refined by a finite cover by disjoint open and closed sets.

**Problem.** Every abelian sheaf F on a profinite space X has Hⁿ(X, F) = 0 for all n &gt; 0.

**How the definition helps.** A section of a quotient sheaf lifts locally, and every covering by lifting neighborhoods admits a disjoint clopen refinement (our own). Lifts on disjoint pieces glue, so global sections preserve surjections and hence form an exact functor (our own). Its higher derived functors vanish (our own).

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0A3F), [Cohomology](https://stacks.math.columbia.edu/tag/09V2). It says: “Let X be a profinite topological space. Then H<sup>q</sup>(X, ℱ) = 0 for all q &gt; 0 and all abelian sheaves ℱ.”

**Sources:**

- [The Stacks Project, Cohomology of Sheaves, Lemma 20.22.3 (Tag 0A3F)](https://stacks.math.columbia.edu/tag/0A3F)

### Duality through the dualizing complex exchanges direct images and proper direct images

**Remember:** Right adjoints compose, so dualizing complexes pull back to dualizing complexes.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let p map X to a point, and let p⁽!⁾ be the right adjoint of compactly supported cohomology. The dualizing complex of X is ω(X) = p⁽!⁾k. The Verdier dual of a complex F is D(F) = RHom(F, ω(X)), a derived internal Hom.

**Problem.** For a continuous map f between finite-dimensional locally compact Hausdorff spaces, D<sub>Y</sub>(Rf₍!₎F) ≅ Rf∗D<sub>X</sub>(F) for complexes F of sheaves of k-vector spaces in Verdier duality.

**How the definition helps.** Local Verdier duality identifies D<sub>Y</sub>(Rf₍!₎F) with Rf∗RHom(F, f⁽!⁾ω(Y)) (our own). Right adjoints compose, giving f⁽!⁾ω(Y) ≅ ω(X) because the maps to a point compose (our own). Substitution gives Rf∗D<sub>X</sub>(F) (our own).

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “(Intertwining of functors f∗ and f₍!₎). If f is a continuous map from X to Y, then there is an isomorphism D(Rf₍!₎(ℱ)) ≅ Rf∗D(ℱ).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Extension by zero makes injective sheaves flasque, giving Mayer–Vietoris sequences

**Remember:** Injectivity applied to ℤ\[U′\] ⊂ ℤ\[U\] extends every section.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For an open set U, let ℤ\[U\] be the constant sheaf ℤ on U extended by zero to X, so its stalks vanish outside U. It is defined so that sheaf maps ℤ\[U\] → F are the same as sections in F(U).

**Problem.** Let X = U ∪ V with U and V open, and let F be an abelian sheaf. Then there is a long exact sequence 0 → H⁰(X, F) → H⁰(U) ⊕ H⁰(V) → H⁰(U ∩ V) → H¹(X, F) → ⋯.

**How the definition helps.** For open U′ ⊆ U, injectivity extends every map ℤ\[U′\] → I across ℤ\[U′\] ⊆ ℤ\[U\] (our own). Thus restrictions of I are surjective, and the sheaf axiom gives a short exact sequence of sections for the cover (our own). Applying this to an injective resolution and taking the cohomology sequence gives Mayer–Vietoris (our own).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “Namely, let X be a topological space which is a union of two open subsets U and V, and let E be a sheaf on X. Then there is a long exact sequence of abelian groups:”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01EA), [Cohomology](https://stacks.math.columbia.edu/tag/01EB). It says: “Let U′ ⊂ U ⊂ X be open subspaces. For any injective 𝒪<sub>X</sub>-module ℐ the restriction mapping ℐ(U) → ℐ(U′) is surjective.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Fine resolutions by smooth forms identify Dolbeault cohomology with sheaf cohomology

**Remember:** Split the identity into endomorphisms supported inside the members of each locally finite cover.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 32L10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A sheaf is fine if every locally finite open cover admits a family of sheaf endomorphisms summing to the identity. Each endomorphism has support inside its corresponding cover member.

**Problem.** For a complex manifold X, the q-th sheaf cohomology of the sheaf Ωᵖ of holomorphic p-forms equals the q-th Dolbeault cohomology. That is the cohomology of the operator ∂̄ on global smooth forms of type (p, q).

**How the definition helps.** Smooth partitions of unity make the sheaves of smooth (p,q)-forms fine, hence acyclic on a paracompact complex manifold (our own). The local ∂̄-Poincaré lemma gives exactness in positive q, and the degree-zero kernel consists of holomorphic p-forms (our own). The acyclic resolution theorem therefore computes sheaf cohomology from the global Dolbeault complex (our own).

**nLab:** [fine sheaf](https://ncatlab.org/nlab/show/fine+sheaf). It says: “For any fine sheaf J over a paracompact Hausdorff space M, the sheaf cohomology groups of positive degree j are all trivial”

**Wikipedia:** [Dolbeault cohomology](https://en.wikipedia.org/wiki/Dolbeault_cohomology). It says: “If E is a holomorphic vector bundle on a complex manifold X, then one can define likewise a fine resolution of the sheaf 𝒪(E) of holomorphic sections of E, using the Dolbeault operator of E.”

**Sources:**

- [Phillip Griffiths and Joseph Harris, Principles of Algebraic Geometry, Wiley (1978; reprinted 1994)](https://doi.org/10.1002/9781118032527)

### Flasque sheaves are acyclic, so flasque resolutions compute sheaf cohomology

**Remember:** Sections that always extend leave nothing for cohomology to measure.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** An abelian sheaf F is flasque if for every inclusion U ⊆ V of open sets, every section in F(U) extends to F(V).

**Problem.** Every flasque sheaf F has Hⁿ(X, F) = 0 for all n &gt; 0. So any resolution of F by flasque sheaves computes Hⁿ(X, F) from its complex of global sections.

**How the definition helps.** Surjective restrictions let local lifts of a section be glued, so global sections stay exact on short exact sequences that begin with a flasque sheaf. The gluing step uses Zorn's lemma on partial lifts. Then embed F in an injective sheaf, which is flasque, and note that the quotient is flasque too. Induction on the degree then kills all higher cohomology (our own summary of the standard proof).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “A sheaf E on X is called flabby (French: flasque) if every section of E on an open subset of X extends to a section of E on all of X. Flabby sheaves are acyclic.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/09SY). It says: “Let (X, 𝒪<sub>X</sub>) be a ringed space. Any flasque 𝒪<sub>X</sub>-module is acyclic for RΓ(X, −) as well as RΓ(U, −) for any open U of X.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)
- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Leray covers make Čech cohomology of one cover compute sheaf cohomology

**Remember:** If every overlap is acyclic, the overlaps alone compute everything.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N05, 18G40. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Take an open cover of X. In degree p, the Čech complex of a sheaf F is the product of its sections over intersections of p + 1 cover sets. The cover is a Leray cover for F when F has no higher cohomology on any finite intersection of cover sets.

**Problem.** If a cover is a Leray cover for F, then its Čech cohomology with coefficients in F equals Hᵖ(X, F) for every p.

**How the definition helps.** The Čech-to-derived spectral sequence starts from Čech cochains of the presheaves U ↦ Hʲ(U, F) and converges to sheaf cohomology. The Leray condition makes these presheaves zero on every intersection when j &gt; 0. So only the row j = 0 survives, and that row is the Čech complex of F. The work moves into building this spectral sequence (Stacks Lemma 20.11.5).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “Thus Čech cohomology is an approximation to sheaf cohomology using only the sections of E on finite intersections of the open sets Uᵢ.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01ET). It says: “Assume that Hⁱ(Uᵢ₀…ᵢₚ, ℱ) = 0 for all i &gt; 0, all p ≥ 0 and all i₀, …, iₚ ∈ I. Then Ȟᵖ(𝒰, ℱ) = Hᵖ(U, ℱ) as 𝒪<sub>X</sub>(U)-modules.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Local contractibility makes sheaf cohomology agree with singular cohomology

**Remember:** Every neighborhood contains a smaller one that contracts inside the original neighborhood.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A space is weakly locally contractible when each neighbourhood U of a point x contains a smaller neighbourhood V. The inclusion of V into U must be homotopic to a constant map. Sheaf cohomology with coefficients in a group A uses the constant sheaf of locally constant A-valued functions.

**Problem.** For every paracompact Hausdorff weakly locally contractible space and abelian group A, constant-sheaf cohomology agrees with singular cohomology with coefficients in A.

**How the definition helps.** Local contractibility makes the sheafified singular cochains a resolution of the constant sheaf. These sheaves are acyclic on paracompact spaces (our own summary of Bredon's proof). Without the condition they differ in degree 0: on the Cantor set, sheaf H⁰ is the countable group of locally constant integer functions. Singular H⁰ is the group of all integer functions on its points, since each path component is a single point.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “whereas sheaf cohomology H⁰(X,Z<sub>X</sub>) is the group of locally constant functions from X to Z. These are different, for example, when X is the Cantor set.”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### On irreducible spaces constant sheaves are flasque, so their higher cohomology vanishes

**Remember:** Open sets all overlap, so constant sections never need extending.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14F06. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** A topological space is irreducible when it is nonempty and any two nonempty open subsets meet. Then every nonempty open subset is connected. The constant sheaf A assigns to each open set the locally constant functions to A.

**Problem.** If X is irreducible, then Hⁿ(X, A) = 0 for every n &gt; 0 and every abelian group A. This holds, for example, for any irreducible variety with the Zariski topology.

**How the definition helps.** Every nonempty open set of an irreducible space is connected, so the constant sheaf has A(U) = A for nonempty U. Restrictions between nonempty open sets are then the identity, so the sheaf is flasque by definition. Flasque sheaves are acyclic, and that theorem carries the work. On the circle the constant sheaf is not flasque, and H¹(S¹, ℤ) = ℤ (our own example).

**nLab:** [hypercohomology](https://ncatlab.org/nlab/show/hypercohomology). It says: “Note that, in the algebraic category, the cohomology of the constant sheaf ℂ is not the right thing to consider, for constant sheaves on irreducible spaces are flasque, hence acyclic.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/02UW). It says: “Let X be an irreducible topological space. Then Hᵖ(X, A) = 0 for all p &gt; 0 and any abelian group A.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### Partitions of unity make smooth forms soft, which proves de Rham's theorem

**Remember:** Cut off with a bump function, and every form extends.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 58A12. arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** A sheaf on a paracompact Hausdorff space is soft when every section over a closed subset extends to the whole space. Smooth partitions of unity make the sheaf Ωʲ of smooth j-forms on a manifold soft.

**Problem.** For a smooth manifold X, the sheaf cohomology Hʲ(X, ℝ) is isomorphic to de Rham cohomology, the cohomology of the complex of global smooth forms.

**How the definition helps.** Soft sheaves are acyclic on paracompact spaces. So the soft resolution 0 → ℝ → Ω⁰ → Ω¹ → ⋯ computes sheaf cohomology from global forms. The Poincaré lemma, which says closed forms are locally exact, makes this complex a resolution. The work splits into these two facts.

**nLab:** [soft sheaf](https://ncatlab.org/nlab/show/soft+sheaf). It says: “A sheaf F of sets (or of abelian groups) over a paracompact Hausdorff space X is soft if for any closed subset V⊂X, every section of F over V can be extended to the whole X.”

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “By the results above, the sheaves Ω<sub>X</sub>ʲ are soft and therefore acyclic. It follows that the sheaf cohomology of X with real coefficients is isomorphic to the de Rham cohomology of X”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Proper maps make stalks of higher direct images equal fibre cohomology

**Remember:** Closed maps let neighbourhoods of a fibre come from neighbourhoods downstairs.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 54C10. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** A continuous map f : X → Y is proper when it is closed, separated and has quasi-compact fibres. Quasi-compact means compact without the Hausdorff condition, and separated means two distinct points in one fibre have disjoint neighbourhoods in X. Equivalently, f is separated and stays closed after every base change.

**Problem.** For a proper map f, a sheaf F on X and a point y of Y, the stalk of Rⁱf∗F at y is Hⁱ(f⁻¹(y), F). Hence higher direct images commute with every base change Y′ → Y.

**How the definition helps.** Closedness makes inverse images of neighborhoods of y cofinal among neighborhoods of its fiber (our own). The continuity theorem for a quasi-compact fiber with separated points identifies the resulting cohomology limit with fiber cohomology (our own). Properness survives base change, and the fibers agree, so the stalk comparison gives base change.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “the base change map g\* Rʳf∗ℱ → Rʳf′∗g′\*ℱ is an isomorphism.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/09V5), [Cohomology](https://stacks.math.columbia.edu/tag/09V6). It says: “Assume that f is closed, f is separated, and f⁻¹(y) is quasi-compact. Then for E in D⁺(𝒪<sub>X</sub>) we have (Rf∗E)<sub>y</sub> = RΓ(f⁻¹(y), E\|f⁻¹(y)) in D⁺(𝒪\_(Y, y)).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Sheaf cohomology vanishes above covering dimension, which singular cohomology fails

**Remember:** Covers of dimension n leave no room for cohomology above n.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 54F45. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A paracompact Hausdorff space has covering dimension at most n if every open cover has an open refinement of multiplicity at most n + 1. Multiplicity counts how many members contain a given point. The covering dimension is the least such n, when finite.

**Problem.** On a paracompact Hausdorff space of covering dimension n, Hʲ(X, E) = 0 for every j &gt; n and every abelian sheaf E.

**How the definition helps.** By the definition, covers in which each point lies in at most n + 1 sets refine every cover. Their alternating Čech cochains vanish above degree n (our own summary). The work is in the theorem that Čech and sheaf cohomology agree on paracompact Hausdorff spaces. Singular cohomology has no such bound: Barratt and Milnor found a compact subset of ℝ³ with nonzero singular cohomology in infinitely many degrees.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “This does not hold in the same generality for singular cohomology: for example, there is a compact subset of Euclidean space R³ that has nonzero singular cohomology in infinitely many degrees.”

**Sources:**

- [M. G. Barratt and John Milnor, An example of anomalous singular homology, Proceedings of the American Mathematical Society 13 (1962) 293–297](https://doi.org/10.1090/S0002-9939-1962-0137110-9)
- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Skyscraper sheaves of injective groups give abelian sheaves enough injectives

**Remember:** Maps into a skyscraper only see one stalk, and stalks are exact.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** Fix a point x and an abelian group I. The skyscraper sheaf Sky(x, I) has sections I over open sets that contain x, and 0 over the others. It is built so that a sheaf map F → Sky(x, I) is the same as a group map from the stalk Fₓ to I.

**Problem.** Every abelian sheaf F on a topological space embeds in an injective sheaf. One choice is the product over all points x of Sky(x, Iₓ), where Iₓ is an injective group containing Fₓ.

**How the definition helps.** Stalks are exact, so the stalk adjunction makes Sky(x,Iₓ) injective whenever Iₓ is injective (our own). Embed each Fₓ in an injective group Iₓ and take the product of the adjoint sheaf maps (our own). Each germ is detected by its own coordinate, so this map is injective, and products of injectives are injective (our own).

**Wikipedia:** [Injective sheaf](https://en.wikipedia.org/wiki/Injective_sheaf). It says: “The category of abelian sheaves has enough injective objects: this means that any sheaf is a subsheaf of an injective sheaf.”

**Paper or page:** [Injectives](https://stacks.math.columbia.edu/tag/01DG). It says: “Let X be a topological space. The category of abelian sheaves on X has enough injectives. In fact it has functorial injective embeddings.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### The canonical Godement resolution gives long exact sequences with no choices

**Remember:** Discontinuous sections are canonical and exact, so the long sequence comes free.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18G10. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** The Godement sheaf of F assigns to an open set U the product of the stalks Fₓ over all x in U. Its sections are sections of F that need not be continuous. Repeating this on cokernels gives a canonical flasque resolution of F, in which each step is an exact functor of F.

**Problem.** Godement cohomology, the cohomology of global sections of the Godement resolution, equals derived functor cohomology. Each short exact sequence of sheaves gives a natural long exact sequence of these groups.

**How the definition helps.** The Godement functors are exact and involve no choices, so a short exact sequence of sheaves gives one of resolutions. Global sections keep it exact, and the long exact sequence is the usual one for complexes. With injective resolutions one must first show independence of the choice and build compatible resolutions. The work moves into the theorem that flasque sheaves are acyclic, which identifies the two definitions.

**Wikipedia:** [Godement resolution](https://en.wikipedia.org/wiki/Godement_resolution). It says: “This is manifestly well-defined as the resolution is canonically given for any sheaf, and since the functors Gᵏ are exact, the existence of the long exact sequence follows from a simple argument.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0FKS). It says: “functorial in ℱ such that each term f∗f\* … f∗f\*ℱ is a flasque 𝒪<sub>X</sub>-module”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Twisting by the orientation sheaf gives Poincaré duality on non-orientable manifolds

**Remember:** Twist by orientations, and duality needs no orientability.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** For an n-manifold X without boundary, the orientation sheaf over k has local sections given by compatible local orientation classes. It is the sheafification of U ↦ Hₙ(X, X ∖ U; k), with stalk Hₙ(X, X ∖ {x}; k) at x (our own).

**Problem.** For any n-manifold X without boundary and field k, Hʲ(X,o) is dual to compactly supported cohomology in degree n − j.

**How the definition helps.** Verdier duality pairs against the dualizing complex, which on an n-manifold is o shifted by n, so no orientation hypothesis is needed. The untwisted form fails on the real projective plane with rational coefficients (our own example). There H²(ℝP²; ℚ) = 0, but compactly supported H⁰ is ℚ because ℝP² is compact and connected. With the twist, H²(ℝP², o) ≅ ℚ, as duality requires.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “For any manifold X and field k, there is a sheaf o<sub>X</sub> on X, the orientation sheaf, which is locally (but perhaps not globally) isomorphic to the constant sheaf k.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Interleaving distance equals bottleneck distance for pointwise finite-dimensional modules

**Remember:** Shift the modules by ε, and the barcodes move by ε.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 3: graduate.

**Definition.** An ε-interleaving (ε ≥ 0) consists of natural maps V(t) → W(t+ε) and W(t) → V(t+ε) whose shifted composites are the structure maps to t+2ε. Interleaving distance is the infimum of such ε. Bottleneck distance is the infimum matching tolerance, allowing endpoint errors ≤ ε and unmatched intervals of length ≤ 2ε.

**Problem.** For real-indexed pointwise finite-dimensional persistence modules over a field, interleaving distance equals bottleneck distance between their barcodes.

**How the definition helps.** Both distances measure a uniform shift in the parameter (our own). The algebraic stability theorem bounds bottleneck distance by interleaving distance, and interval decomposition converts matchings into the reverse bound (our own). Together these bounds give the isometry theorem.

**Paper or page:** [Intrinsic Bottleneck Distance for Merge Trees](https://arxiv.org/abs/2509.02755). It says: “Then the bottleneck distance between the barcode B arising from V and the barcode B′ of W is equal to the value inf{ε ≥ 0: V and W are ε-interleaved}.”

**Sources:**

- [Intrinsic Bottleneck Distance for Merge Trees, arXiv:2509.02755 (2025)](https://arxiv.org/abs/2509.02755)
- [Ulrich Bauer, Michael Lesnick, Induced matchings of barcodes and the algebraic stability of persistence, Proc. 30th Symposium on Computational Geometry (2014) 355–364](https://doi.org/10.1145/2582112.2582168)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)

### Pointwise finite-dimensional persistence modules always split into intervals

**Remember:** Finite dimension at each parameter is enough to get a barcode.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis), 16G20. arXiv math.AT, math.RT. Level 3: graduate.

**Definition.** A persistence module on S ⊆ ℝ is a functor from the ordered set S to vector spaces over a fixed field. It is pointwise finite-dimensional if every value has finite dimension. An interval module assigns the field on one nonempty order interval and zero elsewhere, with identity maps within the interval.

**Problem.** Every pointwise finite-dimensional persistence module over a subset of the real line is a direct sum of interval modules. The multiset of intervals, called the barcode, is unique.

**How the definition helps.** Finite dimension at each parameter gives the chain conditions in Crawley-Boevey’s interval decomposition theorem (our own). That theorem and uniqueness of the interval multiplicities give the barcode.

**Paper or page:** [The Extended Persistent Homology Transform of manifolds with boundary](https://arxiv.org/abs/2208.14583), [Stabilization of codimension of persistence barcodes](https://arxiv.org/abs/2311.01610). It says: “A pointwise finite dimensional persistence module over any subset of ℝ admits an interval decomposition. … This decomposition is unique up to isomorphism.”

**Sources:**

- [The Extended Persistent Homology Transform of manifolds with boundary, arXiv:2208.14583 (2022)](https://arxiv.org/abs/2208.14583)
- [William Crawley-Boevey, Decomposition of pointwise finite-dimensional persistence modules, J. Algebra Appl. 14 (2015) 1550066](https://doi.org/10.1142/s0219498815500668)

### Intersection cohomology restores Poincaré duality for singular spaces

**Remember:** Chains may meet the singular set only as much as the perversity allows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N33 (Intersection homology and cohomology in algebraic topology), 14F43, 14F08. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a stratified PL pseudomanifold, a perversity p assigns an integer p(k) to each singular codimension k. An allowable i-chain meets each codimension-k stratum in dimension at most i − k + p(k). Intersection chains require this bound for the chain and the corresponding degree-(i−1) bound for its boundary.

**Problem.** On a compact oriented n-dimensional PL pseudomanifold without boundary, field-valued intersection homology pairs complementary degrees perfectly for complementary traditional perversities. On a compact pure-dimensional complex variety, middle perversity is self-complementary on a complex stratification, giving Poincaré duality even when ordinary cohomology lacks it.

**How the definition helps.** Complementary perversities satisfy p(k) + q(k) = k − 2, matching the two incidence bounds in the Goresky–MacPherson duality theorem (our own). Complex strata have even real codimension, where the two middle perversities agree (our own).

**nLab:** [intersection cohomology](https://ncatlab.org/nlab/show/intersection+cohomology), [perverse sheaf](https://ncatlab.org/nlab/show/perverse+sheaf). It says: “While for smooth manifolds there is a Poincaré duality relating singular homology and singular cohomology, this fails for singular spaces.”

**Sources:**

- [Mark Goresky, Robert MacPherson, Intersection homology theory, Topology 19 (1980) 135–162](https://doi.org/10.1016/0040-9383(80)90003-8)
- [Robert MacPherson, Intersection homology and perverse sheaves, lecture notes (1990)](https://faculty.tcu.edu/gfriedman/notes/ih.pdf)

### Locally finite chains make proper maps push Borel–Moore homology forward

**Remember:** Proper maps pull compact sets back to compact sets.

*True by definition.* MSC 55N35 (Other homology theories in algebraic topology), 55P57. arXiv math.AT. Level 3: graduate.

**Definition.** On a locally compact Hausdorff space, a locally finite singular chain is a formal sum of simplices. Each compact set meets only finitely many simplices with nonzero coefficients. Its boundary takes the usual signed faces term by term. The homology of this complex is locally finite singular homology.

**Problem.** A continuous proper map induces a pushforward on Borel–Moore homology in the locally finite chain model. Proper means that every compact set has compact inverse image.

**How the definition helps.** Compose every simplex with f (our own). Only simplices meeting the compact set f⁻¹(K) can produce terms meeting a given compact K, so their number is finite (our own). Composition respects faces and gives a chain map (our own).

**Wikipedia:** [Borel–Moore homology](https://en.wikipedia.org/wiki/Borel%E2%80%93Moore_homology). It says: “the homology of the chain complex of locally finite singular chains”

**Sources:**

- [A. Borel and J. C. Moore, Homology theory for locally compact spaces (1960)](https://doi.org/10.1307/mmj/1028998385)

### The Eilenberg–Steenrod axioms prove Mayer–Vietoris once for every homology theory

**Remember:** Prove a result from the axioms, and every homology theory obeys it.

*Makes the theorem clean to state or prove.* MSC 55N40 (Axioms for homology theory and uniqueness theorems in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** An ordinary homology theory assigns graded abelian groups functorially to pairs of spaces, with natural boundary maps. It satisfies the Eilenberg–Steenrod axioms of homotopy invariance, pair exactness, excision, additivity and dimension.

**Problem.** Every ordinary homology theory gives Mayer–Vietoris for open covers by two sets and computes sphere homology from its coefficient group. With nonzero coefficients, Sⁿ⁻¹ cannot retract from Dⁿ for n ≥ 1, giving Brouwer’s fixed point theorem.

**How the definition helps.** Excision and pair exactness give Mayer–Vietoris (our own). Covering a sphere by two contractible open caps shifts reduced homology to that of their equatorial overlap (our own). Induction gives a nonzero reduced group for the boundary sphere, while the disk has none, ruling out a retraction (our own). A fixed-point-free disk map would give that retraction by radial projection (our own).

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

**Definition.** A lax monoidal functor F has natural maps F(A) ⊗ F(B) → F(A ⊗ B) for every A and B. It also has a map from the target unit to the image of the source unit. These maps satisfy the associativity and unit coherence diagrams.

**Problem.** The homology of a topological monoid with coefficients in a commutative ring is a unital, associative graded ring. The same holds for a space with a multiplication that is associative and unital up to homotopy.

**How the definition helps.** The lax monoidal definition transfers the multiplication and its laws together, so the ring laws need no separate verification. The general result sends a monoid, an object with an associative unital multiplication, to a monoid. Our own application uses that homotopic maps induce the same map on homology, so the laws need hold only up to homotopy. The work moves into constructing the homology cross product and proving that it is natural, associative and unital.

**nLab:** [monoidal functor](https://ncatlab.org/nlab/show/monoidal+functor). It says: “Lax monoidal functors send monoids to monoids”

**Wikipedia:** [Pontryagin product](https://en.wikipedia.org/wiki/Pontryagin_product). It says: “is a product on the homology of a topological space induced by a product on the topological space.”

**Sources:** none listed. No primary source with a working link was found.

### Grading by representations gives equivariant suspension isomorphisms

**Remember:** Grade by representations, so that you can suspend by representation spheres.

*Makes the theorem clean to state or prove.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91, 19A22. arXiv math.AT. Level 3: graduate.

**Definition.** For a compact Lie group G, RO(G) consists of formal differences of finite-dimensional real G-representations, with addition induced by direct sum. The representation sphere Sⱽ is V with one point at infinity fixed by G.

**Problem.** In genuine reduced G-equivariant cohomology, Ẽᴳᵅ(X) ≅ Ẽᴳᵅ⁺ⱽ(Sⱽ ∧ X) for every pointed G-space X, degree α and finite-dimensional real G-representation V. The action on Sⱽ may be nontrivial.

**How the definition helps.** Representation grading supplies the degree α + V. The suspension axiom of a genuine theory identifies suspension by Sⱽ with precisely this degree shift.

**nLab:** [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “this leads one to demand that E• is graded not just by the integers, but by any linear representation V, so that one has equivariant suspension isomorphisms”

**Sources:**

- [J. P. May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### The Borel construction gives free actions the cohomology of their quotient

**Remember:** For a free action, the extra factor EG is contractible.

*True by definition. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55R10. arXiv math.AT. Level 3: graduate.

**Definition.** The Borel construction of a G-space X is (X × EG)/G with the diagonal action. Here EG is the total space of a universal principal G-bundle. Its ordinary cohomology is the Borel equivariant cohomology of X.

**Problem.** Let P → B be a principal G-bundle, so G acts freely on P with quotient B and the map is locally a product. Then the Borel equivariant cohomology of P is the ordinary cohomology of B.

**How the definition helps.** The projection (P × EG)/G → B is the associated fiber bundle with contractible fiber EG (our own). Its homotopy exact sequence makes the projection a weak equivalence, hence an isomorphism on singular cohomology (our own).

**nLab:** [Borel equivariant cohomology](https://ncatlab.org/nlab/show/Borel+equivariant+cohomology). It says: “For X a space and G a group acting on it, then the Borel equivariant cohomology of X is the cohomology of the homotopy quotient X//G.”

**Sources:** none listed. No primary source with a working link was found.

### The path-space test makes Hurewicz cofibrations stable under pushout

**Remember:** A homotopy extension problem becomes a square against path evaluation.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A map A → X is a Hurewicz cofibration if every homotopy on A extends to X from a compatible starting map. In compactly generated spaces, a homotopy with values in Y is a map into the space of paths in Y. Thus A → X must fill squares as the left map against path evaluation at time zero.

**Problem.** In compactly generated spaces, the pushout of a Hurewicz cofibration along any map is a Hurewicz cofibration.

**How the definition helps.** The path-space description makes this a general fact about maps defined by a left lifting test (our own explanation). A square for the pushout restricts to a square for the original map. Its filler then extends over the pushout by the universal property of the pushout.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “A map (continuous function) i : A → X between topological spaces is a Hurewicz cofibration if it satisfies the homotopy extension property for all spaces”

**Sources:**

- [A. Strøm, Note on cofibrations, Mathematica Scandinavica 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### The retraction criterion makes products of cofibrations with spaces cofibrations

**Remember:** Multiply the retraction by the identity on Y.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** For closed A ⊆ X, the criterion requires a continuous retraction from X × \[0,1\] onto X × {0} ∪ A × \[0,1\]. Such a retraction exists exactly when the inclusion has the homotopy extension property.

**Problem.** Let A → X be a closed Hurewicz cofibration in compactly generated spaces. For every compactly generated Y, the product inclusion Y × A → Y × X is a Hurewicz cofibration.

**How the definition helps.** The retraction criterion asks for one map, and the identity of Y times that map is the needed retraction. Compactly generated spaces form a cartesian closed category, so Y × (−) preserves the gluing that builds the subspace. The work moves into the criterion, which says that one retraction gives the homotopy extension property for all targets.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “to yield a retract that exhibits the cofibration property of Y × i.”

**Sources:** none listed. No primary source with a working link was found.

### Weak Hausdorff spaces make every Hurewicz cofibration closed

**Remember:** Every compact Hausdorff test space has closed image.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 54D50. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A space is weak Hausdorff if the image of each map from a compact Hausdorff space into it is closed. Many topologists work in compactly generated weak Hausdorff spaces.

**Problem.** In compactly generated weak Hausdorff spaces, the image of every Hurewicz cofibration is closed. So the retraction and NDR-pair characterizations, proved for closed inclusions, apply to every cofibration.

**How the definition helps.** The point inclusion into the indiscrete two-point space is a cofibration with nonclosed image (our own). Weak Hausdorffness excludes that space because the image of the one-point compact Hausdorff space is not closed (our own). The closed-image theorem for Hurewicz cofibrations then makes the closed-inclusion criteria applicable.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “In the category of weakly Hausdorff compactly generated spaces, the image i(A) of a Hurewicz cofibration is always closed.”

**Sources:**

- [Arne Strøm, Note on cofibrations, Math. Scand. 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### Well-pointed groups make plain and fat realization agree

**Remember:** Include the identity as a closed cofibration.

*True by definition. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 18N50, 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** A topological group is well-pointed if inclusion of its identity element is a closed Hurewicz cofibration, meaning a closed inclusion with the homotopy extension property.

**Problem.** For a well-pointed topological group in compactly generated weak Hausdorff spaces, the plain geometric realization of its nerve is homotopy equivalent to the fat realization. So the plain realization computes the homotopy colimit.

**How the definition helps.** Each degeneracy inserts the identity, taking the product of the identity inclusion with identity maps (our own). Products with a space preserve closed Hurewicz cofibrations here, making the nerve good (our own). Segal’s comparison theorem for good simplicial spaces identifies fat and plain realization up to homotopy equivalence (our own).

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

**Definition.** In a symmetric monoidal category, X has dual D if there are maps D ⊗ X → 1 and 1 → X ⊗ D. Inserting the second map and contracting with the first must give the identity on both X and D. Spanier–Whitehead duality uses smash product and the sphere spectrum as unit.

**Problem.** Atiyah duality identifies the S-dual of Σ∞₊X for a closed smooth manifold X with the Thom spectrum of its stable normal bundle. The trace of the identity on Σ∞₊X equals the Euler characteristic of X.

**How the definition helps.** The duality maps define the trace by coevaluation, interchange of factors and evaluation (our own). Atiyah duality identifies the dual with the Thom spectrum of the virtual negative tangent bundle (our own). The stable Lefschetz trace formula evaluates the identity trace as the Euler characteristic (our own).

**nLab:** [Spanier-Whitehead duality](https://ncatlab.org/nlab/show/Spanier-Whitehead+duality). It says: “Using this one shows that the trace on the identity on Σ<sup>∞</sup>₊X -- its categorical dimension -- is the Euler characteristic of X.”

**Sources:**

- [Albrecht Dold, Dieter Puppe, Duality, trace and transfer, Proceedings of the Steklov Institute of Mathematics 1984, issue 4 (translation of Trudy Mat. Inst. Steklov 154 (1983)); earlier version in Proc. Int. Conf. Geometric Topology, Warsaw 1978, PWN (1980) 81–102](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/doldpup2.pdf)
- [Edwin H. Spanier, J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/S002557930000070X)

### Groupoid models of BG make free loop components classifying spaces of centralizers

**Remember:** Each conjugacy class contributes the classifying space of its centralizer.

*True by definition.* MSC 55P35 (Loop spaces), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** For discrete G, the conjugation groupoid has objects g ∈ G and an arrow labeled h from g to hgh⁻¹ for each h ∈ G. Composition multiplies the labels.

**Problem.** The free loop space of BG, the space of all maps from the circle to BG, has one component for each conjugacy class of G. The component of g is homotopy equivalent to BC(g). Here the centralizer C(g) is the subgroup of elements that commute with g.

**How the definition helps.** The mapping groupoid from the one-object groupoid ℤ to G models free loops in BG (our own). A functor selects the image g of 1, and a natural isomorphism conjugates g. Components are therefore conjugacy classes, and the automorphisms at g form C(g) (our own). Each connected groupoid is equivalent to its one-object automorphism groupoid, giving BC(g) (our own).

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “This shows that the hom-groupoid is the action groupoid of the conjugation action”

**Sources:** none listed. No primary source with a working link was found.

### Defining cofibers as homotopy pushouts makes the second cofiber a suspension

**Remember:** Collapse Y after attaching the cone, and only the suspension remains.

*True by definition.* MSC 55P40 (Suspensions), 55P05. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f: X → Y of pointed spaces, define the homotopy cofiber C(f) as the homotopy pushout of Y ← X → ∗. A homotopy pushout glues along a cylinder on X instead of along X itself. The concrete model attaches the cone on X to Y along f.

**Problem.** Let X and Y be well-pointed, meaning that the inclusion of the base point is a cofibration. Then the homotopy cofiber of the inclusion Y → C(f) is homotopy equivalent to the reduced suspension ΣX.

**How the definition helps.** Pasting the two defining homotopy pushout squares gives another homotopy pushout (our own). Its span is ∗ ← X → ∗, whose pointed homotopy pushout is ΣX.

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “to the terminal object is the suspension object”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.3, cofibration sequences](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Adding infinite spectra makes Brown representability hold in the stable homotopy category

**Remember:** Brown builds the representing object from infinitely many cells, so allow infinite spectra.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** The Spanier–Whitehead category has finite CW complexes and their formal desuspensions as objects. Its maps are homotopy classes of maps after enough suspensions. The stable homotopy category of spectra contains it as the finite spectra, and it also has infinite spectra and arbitrary wedges.

**Problem.** Let h be a contravariant functor from the stable homotopy category to abelian groups. If h turns wedges into products and cofiber sequences into exact sequences, then h(X) ≅ \[X, E\] for some spectrum E.

**How the definition helps.** Brown's construction of the representing object attaches cells infinitely often, so it needs infinite objects and arbitrary wedges, which spectra have (our own). The Spanier–Whitehead category lacks such wedges, and the nLab notes that the theorem fails there. Allowing all spectra makes the statement true and clean. The work is Brown's cell-attachment argument, run once in spectra.

**nLab:** [Spanier-Whitehead category](https://ncatlab.org/nlab/show/Spanier-Whitehead+category). It says: “As a consequence, in particular a Brown representability theorem does not hold in the SW-category.”

**Wikipedia:** [Brown's representability theorem](https://en.wikipedia.org/wiki/Brown%27s_representability_theorem). It says: “A similar statement does, however, hold for spectra instead of CW complexes.”

**Sources:**

- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)

### Dualizable spectra are exactly the finite spectra

**Remember:** Finite is a construction; dualizable and compact are properties, and all three agree.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 18G80. arXiv math.AT. Level 3: graduate.

**Definition.** A spectrum X is dualizable when it has a dual DX with maps DX ∧ X → S and S → X ∧ DX. These maps satisfy the two triangle identities; S is the sphere spectrum, the unit for the smash product. A spectrum X is compact when \[X, −\] takes every wedge of spectra to the direct sum of the groups.

**Problem.** A spectrum is dualizable exactly when it is compact, and both conditions hold exactly for the finite spectra. So finiteness, which depends on a cell structure, becomes a property of the object in the stable homotopy category.

**How the definition helps.** The definitions turn finiteness into an intrinsic property, and one direction is then immediate. Duality gives \[X, Y\] ≅ π₀(DX ∧ Y), and both steps preserve wedges, so dualizable spectra are compact (our own). The sphere is dualizable, and dualizable spectra are closed under cofiber sequences and retracts, so finite spectra are dualizable (our own). A compact spectrum is a retract of a finite stage of its cell filtration, and a separate result makes such retracts finite (our own).

**nLab:** [dualizable object](https://ncatlab.org/nlab/show/dualizable+object). It says: “a spectrum is dualizable in the stable homotopy category with its smash product precisely if it is a finite spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### For orthogonal spectra, naive stable homotopy groups detect stable equivalences

**Remember:** Use orthogonal groups, not symmetric groups, and the naive homotopy groups are right.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55Q10. arXiv math.AT. Level 3: graduate.

**Definition.** An orthogonal spectrum has based O(n)-spaces Xₙ and O(n) × O(m)-equivariant maps Xₙ ∧ Sᵐ → Xₙ₊ₘ for all n,m ≥ 0. The actions use block sum, the maps respect iteration, and the m = 0 map is the identity.

**Problem.** A map of orthogonal spectra is a stable equivalence exactly when it is an isomorphism on the naive stable homotopy groups πₙ(X) = colimₖ πₖ₊ₙ(Xₖ).

**How the definition helps.** For fixed n, the Stiefel manifolds O(q)/O(q − n) become arbitrarily highly connected as q grows (our own). This connectivity underlies the stable equivalence detection theorem for orthogonal spectra (our own). The corresponding symmetric-group quotients are discrete (our own). For free symmetric spectra, λ from F₁S¹ to F₀S⁰ is a stable equivalence that fails the naive group test (our own).

**nLab:** [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum), [Model categories of diagram spectra](https://ncatlab.org/nlab/show/Model+categories+of+diagram+spectra), [semistable symmetric spectrum](https://ncatlab.org/nlab/show/semistable+symmetric+spectrum). It says: “Among the various (now) common models for spectra, this issue is unique to symmetric spectra”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Spanier–Whitehead duality makes Alexander duality a formal consequence

**Remember:** A set and its complement are dual, so homology becomes cohomology.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** A Spanier–Whitehead dual of a spectrum A is a spectrum D with evaluation D ∧ A → S and coevaluation S → A ∧ D. Inserting coevaluation and then applying evaluation must recover the identity on each factor.

**Problem.** Let X be a proper, nonempty compact neighbourhood retract in the sphere Sⁿ. Then H̃ᵢ(Sⁿ ∖ X) ≅ H̃ⁿ⁻ⁱ⁻¹(X) for reduced homology and cohomology (Alexander duality).

**How the definition helps.** Geometric Spanier–Whitehead duality pairs the reduced spectra of X and its spherical complement with shift n − 1 (our own). Applying the integral Eilenberg–MacLane spectrum exchanges reduced homology of the complement with reduced cohomology of X in the complementary degree.

**Wikipedia:** [Spanier–Whitehead duality](https://en.wikipedia.org/wiki/Spanier%E2%80%93Whitehead_duality). It says: “Taking homology and cohomology with respect to an Eilenberg–MacLane spectrum recovers Alexander duality formally.”

**Sources:**

- [Edwin H. Spanier and J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/s002557930000070x)

### Flat ring spectra make the Adams E₂-term an Ext of comodules

**Remember:** If E sees itself flatly, E-homology carries a coaction of E•(E).

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55T15, 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** A homotopy commutative ring spectrum E is flat if E∗E = π∗(E ∧ E) is flat over E∗ = π∗E. Flatness means tensoring with E∗E over E∗ preserves exact sequences of graded modules.

**Problem.** Suppose E is flat and E∗X is projective over E∗. Then (E∗, E∗E) is a Hopf algebroid. The E-Adams spectral sequence for maps X → Y has E₂-term given by comodule Ext from E∗X to E∗Y.

**How the definition helps.** Flatness identifies iterated E-homology with tensor products, giving the Hopf algebroid (E∗, E∗E) and its natural coactions (our own). When E∗X is projective over E∗, the Adams cobar calculation identifies the E₂-term with comodule Ext from E∗X to E∗Y (our own).

**nLab:** [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “the d₁-cohomology of the first page computes the Ext-groups from the E-homology of Y to the E-homology of X, regarded as E•(E)-comodules.”

**Sources:**

- [Douglas Ravenel, A novice's guide to the Adams–Novikov spectral sequence, in Geometric Applications of Homotopy Theory II, Lecture Notes in Mathematics 658, Springer 1978](https://doi.org/10.1007/BFb0068728)

### Modules over the Eilenberg–MacLane ring spectrum HR are chain complexes

**Remember:** HR-modules and chain complexes are the same homotopy theory.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 18G80, 13D09. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For a ring R, its Eilenberg–MacLane ring spectrum HR has π₀HR = R and all other homotopy groups zero. A left HR-module has a unital, coherently associative action HR ∧ M → M.

**Problem.** For every ring R, HR-module spectra and unbounded chain complexes of R-modules have Quillen equivalent model structures. So the homotopy category of HR-modules is the derived category D(R).

**How the definition helps.** The free rank-one module generates each stable theory, and its derived endomorphism spectrum has homotopy only in degree zero (our own). For left modules its degree-zero endomorphism ring is Rᵒᵖ (our own). The Schwede–Shipley Morita theorem therefore identifies the two module theories (our own).

**nLab:** [stable Dold-Kan correspondence](https://ncatlab.org/nlab/show/stable+Dold-Kan+correspondence). It says: “For R any ring (or ringoid, even) there is a Quillen equivalence H R ModSpectra ≃ Ch<sub>•</sub>(R Mod) between a model category of H R-module spectra over the Eilenberg-MacLane spectrum H R and the model structure on unbounded chain complexes”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)
- [Brooke Shipley, HZ-algebra spectra are differential graded algebras, American Journal of Mathematics 129 (2007) 351–379](https://doi.org/10.1353/ajm.2007.0014)

### Segal's condition makes Γ-spaces model infinite loop spaces

**Remember:** Segal maps identify powers, and grouplike components permit repeated delooping.

*Makes the theorem clean to state or prove.* MSC 55P47 (Infinite loop spaces), 55P48, 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** A Γ-space X is a functor from finite pointed sets to spaces. The n projections onto the two-element pointed set each retain one nonbasepoint and collapse the others. X is special if these projections induce weak equivalences X(n) → X(1)ⁿ for all n ≥ 0. It is very special if π₀X(1) under the induced multiplication is a group.

**Problem.** For a special Γ-space X, the maps of finite pointed sets make X(1) a multiplication that is unital, associative and commutative up to coherent homotopy. If X is very special, X presents an infinite loop space (Segal's theorem).

**How the definition helps.** Via the Segal equivalences, fold maps give coherently commutative multiplication (our own). Segal’s recognition theorem gives repeated deloopings when the component monoid is a group (our own).

**nLab:** [Gamma-space](https://ncatlab.org/nlab/show/Gamma-space). It says: “In order for this to be valid, and thus for X to present an infinite loop space, a Γ-space must satisfy the further condition that all the Segal maps … are weak equivalences.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Grouplike Eₖ-algebras are exactly the k-fold loop spaces

**Remember:** k-fold loop spaces are grouplike spaces that multiply in k directions.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** An Eₖ-algebra is a space with an action of the little k-cubes operad. This operad describes the ways to place several small k-dimensional cubes, without overlap, inside one big cube. An Eₖ-algebra is grouplike if its monoid of components π₀ is a group.

**Problem.** A space is a k-fold loop space up to homotopy exactly when it is a grouplike Eₖ-algebra (May 1972).

**How the definition helps.** Disjoint little cubes let a k-fold loop space perform several loops inside one cube (our own). Reversing a loop gives inverses on components (our own). May’s recognition theorem gives the converse for grouplike little-cubes algebras in the homotopy theory of spaces.

**nLab:** [May recognition theorem](https://ncatlab.org/nlab/show/May+recognition+theorem), [little cubes operad](https://ncatlab.org/nlab/show/little+cubes+operad), [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis). It says: “iterated loop spaces as "grouplike" En-algebras in the classical homotopy theory of spaces (∞Grpd)”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer (1972)](https://doi.org/10.1007/BFb0067491)
- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)

### Shape theory sees the Warsaw circle as a circle

**Remember:** Keep the homotopy types of all neighbourhoods and the inclusions between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P55 (Shape theory). arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** Embed the compact metric space X in the Hilbert cube. Its shape is the pro-homotopy type of its open neighbourhoods, with inclusion maps from smaller neighbourhoods to larger ones.

**Problem.** Shape agrees with homotopy type on ANRs. The Warsaw circle has the shape of the circle S¹, although its weak homotopy type sees no circle.

**How the definition helps.** For a compact absolute neighbourhood retract, the neighbourhood system is pro-homotopy equivalent to the space itself (our own explanation). The Warsaw circle has arbitrarily small nested annular neighbourhoods whose inclusions are homotopy equivalences. Its shape is therefore S¹, although its homotopy groups are trivial (our own explanation).

**nLab:** [shape theory](https://ncatlab.org/nlab/show/shape+theory), [Warsaw circle](https://ncatlab.org/nlab/show/Warsaw+circle). It says: “the weak homotopy type fails to give useful information for 'bad' spaces, of which classical examples include the Warsaw Circle”

**Sources:**

- [S. Mardešić, J. Segal, Shapes of compacta and ANR-systems, Fund. Math. 72 (1971) 41–59](https://doi.org/10.4064/fm-72-1-41-59)

### Completion as localization gives every spectrum an arithmetic fracture square

**Remember:** Rationalize at Sℚ and take the product of all prime completions.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** A spectrum Z is E-local if \[Y,Z\] = 0 for every spectrum Y with E ∧ Y ≃ 0. E-localization is the universal map from X to an E-local spectrum. Rationalization uses E = Sℚ, and profinite completion takes the product of the S/p-localizations over all primes p.

**Problem.** For every spectrum X, the square formed by X, its rationalization, its profinite completion and the rationalization of that completion is a homotopy pullback. For spaces the same square needs extra hypotheses, such as nilpotence.

**How the definition helps.** With both corners defined as localizations, the proof reduces to comparing the fibres of two maps. The fibre F of the completion map has S(ℚ/ℤ) ∧ F = 0, so its homotopy groups are ℚ-vector spaces (our own outline). Rationalization is exact and leaves this fibre unchanged, so the rationalized map has the same fibre, with no hypothesis on X (our own outline). The work moves into Bousfield's theorem that S(ℚ/ℤ)-localization is the product of the p-completions.

**nLab:** [fracture theorem](https://ncatlab.org/nlab/show/fracture+theorem). It says: “the arithmetic fracture theorem says that stable homotopy types (and suitably tame plain homotopy types) canonically decompose into their rationalization and their p-completion for all primes p”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Defining p-completion as Moore spectrum localization gives an Ext formula

**Remember:** Complete at p by making maps from S/p-acyclic spectra vanish.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** For a prime p, let S/p be the cofibre of multiplication by p on the sphere spectrum. The p-completion of X is its universal map to a spectrum Z satisfying \[Y,Z\] = 0 whenever S/p ∧ Y ≃ 0.

**Problem.** For every spectrum X, the p-completion of X is the function spectrum F(Σ⁻¹Sℤ/p∞, X), with Sℤ/p∞ the Moore spectrum of the Prüfer group ℤ/p∞. Its homotopy fits into a short exact sequence 0 → Ext(ℤ/p∞, πₙX) → πₙ(completion) → Hom(ℤ/p∞, πₙ₋₁X) → 0.

**How the definition helps.** Bousfield identifies the displayed function spectrum as S/p-local and the natural map into it as an S/p-equivalence. The universal property then identifies the target with the completion. The universal coefficient sequence for maps from a Moore spectrum gives the stated exact sequence (our own explanation).

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “The localization of spectra at the Moore spectrum S𝔽ₚ is given by the mapping spectrum out of S⁻¹ℤ/p<sup>∞</sup>”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Localization at a set of primes works well for nilpotent spaces

**Remember:** Outside T, every power map must admit unique roots.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** Fix a set T of primes. A connected space is nilpotent if π₁ is nilpotent and acts nilpotently on every higher homotopy group. A nilpotent group is T-local if taking the qth power is bijective for every prime q outside T.

**Problem.** For nilpotent CW spaces, locality for ℤ-localized-at-T homology equivalences agrees with T-locality of every homotopy group and with T-locality of every integral homology group. Every such space admits a localization, unique up to homotopy, localizing its homotopy and homology groups.

**How the definition helps.** Homological locality means each localized-homology equivalence induces a bijection on homotopy classes of maps into the space. Sullivan’s nilpotent localization theorem identifies this mapping condition with the two group tests and constructs the localization (our own explanation). Outside the nilpotent setting these definitions can diverge.

**nLab:** [localization of a space](https://ncatlab.org/nlab/show/localization+of+a+space), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “For non-nilpotent spaces, there are multiple inequivalent definitions of localization”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)
- [Emmanuel Dror, A generalization of the Whitehead theorem, Symposium on Algebraic Topology, Lecture Notes in Mathematics 249, Springer (1971) 13–22](https://doi.org/10.1007/BFb0060891)

### Localizing at a subring of ℚ just tensors homotopy groups with it

**Remember:** Localize at a subring of the rationals by tensoring homotopy with it.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P62. arXiv math.AT. Level 3: graduate.

**Definition.** For a unital subring R ⊆ ℚ, let SR be the sphere with all primes invertible in R inverted. A spectrum Z is SR-local if \[Y,Z\] = 0 whenever SR ∧ Y ≃ 0. SR-localization is the universal map to an SR-local spectrum.

**Problem.** For a subring R of ℚ, the SR-localization of every spectrum X is X ∧ SR, and its homotopy groups are πₙX ⊗ R. For R = ℚ this is rationalization, and the rational stable homotopy category is equivalent to graded ℚ-vector spaces.

**How the definition helps.** Smashing with SR inverts exactly those primes on every homotopy group, giving πₙX ⊗ R by filtered colimits (our own outline). The natural map X → X ∧ SR is an SR-equivalence since SR ∧ SR ≃ SR. Its target is local as an SR-module. Serre’s finiteness theorem identifies Sℚ with the rational Eilenberg–Mac Lane spectrum, whose modules correspond to graded rational vector spaces up to equivalence.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “For G a group without torsion, then localization at the Moore spectrum E = SG (in particular p-localization) is smashing”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Restricting to E-local spectra makes every E-equivalence an equivalence

**Remember:** Local spectra cannot tell an E-equivalence from an isomorphism.

*Rules out counterexamples.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a spectrum E, an object that represents a homology theory. A map f of spectra is an E-equivalence when it induces an isomorphism on E-homology. A spectrum X is E-local when every E-equivalence f induces a bijection \[f, X\] on homotopy classes of maps into X.

**Problem.** An E-equivalence between two E-local spectra is an equivalence. Hence the E-localization X → LX, the universal map from X to an E-local spectrum, is unique up to unique equivalence.

**How the definition helps.** The definition of an E-local spectrum is exactly the condition that the Yoneda lemma needs to invert an E-equivalence. For such f from X to Y, \[f, X\] gives a left inverse g, and \[f, Y\] makes g a right inverse (our own outline). Without locality the claim fails: multiplication by 2 on the sphere spectrum is a rational homology isomorphism, not an equivalence (our own example). The work moves into Bousfield's theorem that every spectrum has an E-localization.

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “for every E-equivalence f then \[f,X\]• is an isomorphism;”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Minimal Sullivan models are unique and show the rational homotopy groups

**Remember:** Add generators in degree order, with differentials built from products of earlier generators.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A simply connected minimal Sullivan algebra over ℚ is free graded-commutative on generators of degrees at least two. Its degree-one differential squares to zero and sends each generator to sums of products of at least two earlier generators in a degree-ordered basis.

**Problem.** Finite-type simply connected minimal Sullivan algebras classify simply connected rational homotopy types of finite type up to isomorphism. The degree-n generator space is dual to the nth rational homotopy group.

**How the definition helps.** Minimality makes the model unique up to isomorphism, so invariants can be read straight off it. Any Sullivan model gives the rational homotopy type, but there are many non-isomorphic ones. The deep part is Sullivan's theorem that rational homotopy types of such spaces are equivalent to these algebras.

**nLab:** [Sullivan model](https://ncatlab.org/nlab/show/Sullivan+model). It says: “Conversely, every rational space can be obtained from a dg-algebra and the minimal Sullivan algebras provide convenient representatives that correspond bijectively to rational homotopy types under this correspondence.”

**Sources:**

- [D. Sullivan, Infinitesimal computations in topology, Publications Mathématiques de l'IHÉS 47 (1977)](https://doi.org/10.1007/BF02684341)
- [K. Hess, Rational homotopy theory: a brief introduction, arXiv:math/0604626](https://arxiv.org/abs/math/0604626)

### Rational homotopy theory needs nilpotent spaces of finite type

**Remember:** Require a nilpotent fundamental group, nilpotent higher actions, and finite rational homology in each degree.

*Rules out counterexamples.* MSC 55P62 (Rational homotopy theory), 55P60. arXiv math.AT. Level 3: graduate.

**Definition.** A connected space X is nilpotent if π₁X has a finite central series and acts nilpotently on every πₙX for n ≥ 2. Each such action must preserve a finite filtration from zero to πₙX and act trivially on every successive quotient. Finite rational type means finite-dimensional rational homology in each degree.

**Problem.** For nilpotent spaces of finite rational type, piecewise polynomial forms identify rational homotopy types contravariantly with the corresponding finite-type minimal Sullivan algebras up to isomorphism.

**How the definition helps.** Nontrivial acyclic groups are perfect, so their lower central series never reaches the identity (our own explanation). Nilpotence therefore excludes their classifying spaces, whose rational cohomology agrees with that of a point. Sullivan’s classification theorem gives the equivalence for rational homotopy types in the stated class.

**nLab:** [rational homotopy theory](https://ncatlab.org/nlab/show/rational+homotopy+theory), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “But by Hurewicz theorem asking that all spaces be simply connected precisely makes all "acyclic spaces" be contractible.”

**Sources:**

- [Dennis Sullivan, Infinitesimal computations in topology, Publ. Math. IHÉS 47 (1977) 269–331](https://doi.org/10.1007/BF02684341)
- [A. K. Bousfield, V. K. A. M. Gugenheim, On PL de Rham theory and rational homotopy type, Memoirs of the AMS 179 (1976)](https://doi.org/10.1090/memo/0179)
- [Daniel Quillen, Rational homotopy theory, Annals of Mathematics 90 (1969) 205–295](https://doi.org/10.2307/1970725)

### Brown representability needs connected pointed spaces

**Remember:** Wedges go to products, pushouts go to weak pullbacks, and a representing space exists.

*Makes the theorem clean to state or prove.* MSC 55P65 (Homotopy functors in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A Brown functor is a contravariant pointed-set functor on the homotopy category of connected pointed CW complexes. It takes arbitrary wedges to products. On every homotopy pushout, each pair of elements agreeing on the common domain has a simultaneous lift.

**Problem.** Brown representability says that every Brown functor is representable: F is \[−, Y\], the homotopy classes of maps into some space Y. In particular, a spectrum represents every additive reduced generalized cohomology theory.

**How the definition helps.** Connected pointed CW complexes satisfy Brown’s representability theorem under the wedge and gluing axioms. Freyd and Heller’s nonsplitting example concerns the unpointed homotopy category (our own clarification). Applying representability to the degrees of a reduced cohomology theory gives representing spaces linked by loop equivalences (our own explanation).

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “In particular, there is no Brown representability theorem for functors from the homotopy category of pointed not-necessarily-connected spaces to pointed sets, or for functors from the homotopy category of unpointed spaces to sets.”

**Sources:**

- [Edgar H. Brown, Cohomology theories, Annals of Mathematics 75 (1962) 467–484](https://doi.org/10.2307/1970209)
- [Peter Freyd, Alex Heller, Splitting homotopy idempotents II, J. Pure Appl. Algebra 89 (1993) 93–106](https://doi.org/10.1016/0022-4049(93)90088-b)
- [J. F. Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

### Testing weak equivalences on all fixed points gives Elmendorf's theorem

**Remember:** Test a G-map on every subgroup's fixed points, not only on the whole space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N40. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a compact Lie group G and G-spaces X and Y. A G-map f is a weak G-equivalence if fᴴ is a weak homotopy equivalence for every closed subgroup H ≤ G. The space Xᴴ consists of the points fixed by every element of H.

**Problem.** Elmendorf's theorem says that G-equivariant homotopy theory is equivalent to the homotopy theory of presheaves of spaces on the orbit category of G. The orbit category has the spaces G/H as objects.

**How the definition helps.** The fixed-point presheaf sends G/H to Xᴴ on the topologically enriched orbit category (our own explanation). Its objectwise weak equivalences are exactly the weak G-equivalences. Elmendorf’s theorem supplies the inverse construction up to homotopy.

**nLab:** [Elmendorf's theorem](https://ncatlab.org/nlab/show/Elmendorf%27s+theorem), [fine model structure on topological G-spaces](https://ncatlab.org/nlab/show/fine+model+structure+on+topological+G-spaces). It says: “For general G, Elmendorf's theorem asserts that the fine equivariant model structure is Quillen equivalent to the model category of simplicial presheaves on the orbit category of G.”

**Sources:**

- [A. D. Elmendorf, Systems of fixed point sets, Trans. Amer. Math. Soc. 277 (1983) 275–284](https://doi.org/10.1090/S0002-9947-1983-0690052-0)

### Moore paths have variable length, so they compose strictly

**Remember:** Let each path take as long as it needs, and concatenation is strictly associative.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 55R05, 18F60. arXiv math.AT. Level 3: graduate.

**Definition.** A Moore path in X consists of r ≥ 0 and a continuous map γ from \[0,∞) to X constant on \[r,∞). Compose paths with matching endpoints by running them consecutively and adding their lengths.

**Problem.** Moore paths in a space form a strict category, with strictly associative composition and strict units. The Moore path space factors each map functorially into a trivial Hurewicz cofibration followed by a Hurewicz fibration.

**How the definition helps.** Concatenation places each path at the same time under either bracketing, and inserting a length-zero path changes nothing (our own explanation). The Moore mapping path factorization sends each starting point to the length-zero path and evaluates paths at their endpoints. Barthel and Riehl establish the required Hurewicz cofibration and fibration properties.

**nLab:** [Moore path category](https://ncatlab.org/nlab/show/Moore+path+category), [schedule](https://ncatlab.org/nlab/show/schedule). It says: “The classical Moore path category of a topological space X is a variant on the usual space of paths I → X, but one which yields a strict category (even an internal †-category in Top).”

**Sources:**

- [Tobias Barthel, Emily Riehl, On the construction of functorial factorizations for model categories, Algebr. Geom. Topol. 13 (2013), arXiv:1204.5427](https://arxiv.org/abs/1204.5427)

### The cube definition of homotopy groups makes them abelian from dimension two

**Remember:** Two directions of gluing cubes force one commutative sum.

*True by definition.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes). arXiv math.AT. Level 3: graduate.

**Definition.** For n ≥ 1, πₙ(X) consists of maps \[0,1\]ⁿ → X sending the boundary to the base point, modulo homotopies fixing the boundary. Multiply two classes by placing their cubes side by side along the first coordinate and rescaling.

**Problem.** For n ≥ 2, the homotopy group πₙ(X) is abelian.

**How the definition helps.** Two coordinate directions give two products with the constant map as common unit on homotopy classes (our own explanation). Subdivision into four rectangles gives the interchange law. The Eckmann–Hilton argument then makes the products equal and commutative.

**Wikipedia:** [Homotopy group](https://en.wikipedia.org/wiki/Homotopy_group). It says: “Equivalently, define πₙ(X) to be the group of homotopy classes of maps”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Defining stable homotopy groups as a colimit makes suspension an isomorphism

**Remember:** Suspending first only skips the first term of the sequence.

*True by definition.* MSC 55Q10 (Stable homotopy groups), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a based space X, define πₙˢ(X) as the colimit of πₙ₊ₖ(ΣᵏX) under suspension, starting with k ≥ 0 and n+k ≥ 2. Here Σ denotes reduced suspension.

**Problem.** Suspension gives a natural isomorphism from πₙˢ(X) to πₙ₊₁ˢ(ΣX).

**How the definition helps.** Suspending X and raising n by one gives a cofinal tail of the same sequence (our own explanation). Its colimit is naturally the original colimit.

**nLab:** [homotopy group of a spectrum](https://ncatlab.org/nlab/show/homotopy+group+of+a+spectrum). It says: “Given a pointed topological space X, its stable homotopy groups are the colimit of ordinary homotopy groups of its reduced suspensions”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Chapter 4, Corollary 4.24](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Suspension spectra defined by adjunction give stable homotopy exact sequences

**Remember:** Suspension spectra preserve cofibers, and cofibers in spectra are also fibers.

*True by definition. Confidence: medium.* MSC 55Q10 (Stable homotopy groups), 55P42, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** The suspension spectrum of a pointed space is its image under the left adjoint to the functor taking a spectrum’s zeroth space. Stable homotopy groups of the space are the homotopy groups of its suspension spectrum. The classical version takes the colimit of homotopy groups of successive suspensions, with the degree shifted at each step.

**Problem.** For a pointed CW pair A ⊆ X, the stable homotopy groups of A, X and X/A form a long exact sequence.

**How the definition helps.** The suspension spectrum functor preserves homotopy pushouts because it is a left adjoint on homotopy types (our own explanation). The CW inclusion makes X/A its homotopy cofiber. Applying suspension spectra gives a cofiber sequence, which is also a fiber sequence by stability. Its long exact homotopy sequence gives the claim.

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

**Definition.** For n ≥ 2 and f: S²ⁿ⁻¹ → Sⁿ, attach an oriented 2n-cell along f to form C(f). Let α and β be the integral cohomology generators from the oriented n-sphere and top cell, respectively. Define H(f) by α ∪ α = H(f)β.

**Problem.** Let n ≥ 2 and let g: Sⁿ → Sⁿ have degree d. Then H(g ∘ f) = d² H(f).

**How the definition helps.** The cone map C(f) → C(g ∘ f) uses g on the sphere and the identity on the disk (our own explanation). Its pullback multiplies the lower generator by d and preserves the top generator. Naturality of cup products gives H(g ∘ f)β = (dα) ∪ (dα) = d²H(f)β.

**nLab:** [Hopf invariant](https://ncatlab.org/nlab/show/Hopf+invariant). It says: “there exists an integer HI(f) which expresses the cup product square”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.B, Exercise 1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### The cup-square Hopf invariant vanishes for odd target dimensions

**Remember:** In odd degree, reversing the cup square changes its sign.

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For n &gt; 1, attach an oriented 2n-cell to the oriented n-sphere along φ: S²ⁿ⁻¹ → Sⁿ. Let α and β be the resulting integral cohomology generators in degrees n and 2n. Define h(φ) by α ⌣ α = h(φ)β.

**Problem.** For odd n &gt; 1, every map from the (2n−1)-sphere to the n-sphere has Hopf invariant zero.

**How the definition helps.** In our own short proof, the cup-square definition gives zero because an odd-degree class has a square equal to its own negative. Thus 2h(φ)β = 0, and β generates a copy of ℤ, so h(φ) = 0. The geometric definition instead needs a sign rule for exchanging the two preimages.

**Wikipedia:** [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The integer h(φ) is the Hopf invariant of the map φ.”

**Sources:**

- [Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. Mathematische Annalen 104, 637–665.](https://doi.org/10.1007/BF01457962)

### Defining Toda brackets as sets makes their indeterminacy a coset

**Remember:** Take every choice at once, and the bracket becomes a well-defined coset.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q35. arXiv math.AT. Level 3: graduate.

**Definition.** Take composable based maps f, g and h with gf and hg based nullhomotopic. Postcompose a nullhomotopy of gf with h and precompose one of hg with f. Gluing these cones gives a map SW → Z, and the Toda bracket consists of its homotopy classes over all choices.

**Problem.** For stable maps, the Toda bracket ⟨f, g, h⟩ is a coset of the subgroup h ∘ \[SW, Y\] + \[SX, Z\] ∘ Sf. So it is a well-defined element of the quotient of \[SW, Z\] by that subgroup.

**How the definition helps.** Changing the first nullhomotopy translates the class by h ∘ \[SW,Y\], and changing the second translates it by \[SX,Z\] ∘ Sf. Every such change occurs by gluing in the corresponding suspension map (our own explanation). Stable mapping groups are abelian, so all choices form one coset of the sum.

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

**Definition.** A Serre fibration is a map p: E → B that lifts each homotopy of a disk Dⁿ, given a lift at time 0. In other words, p has the right lifting property against each inclusion Dⁿ × {0} → Dⁿ × \[0,1\]. Another definition asks for the same lifting for every CW complex, a space built by attaching disks along their boundaries.

**Problem.** A Serre fibration lifts every homotopy of a CW complex, once a lift at time 0 is given.

**How the definition helps.** Extend the lift over each skeleton of the CW complex (our own argument). On each cell the prescribed lift covers the bottom and sides of the cylinder. This inclusion is homeomorphic as a pair to the bottom inclusion, so disk lifting extends the lift. The CW topology glues the compatible lifts.

**nLab:** [Serre fibration](https://ncatlab.org/nlab/show/Serre+fibration). It says: “A Serre fibration has the right lifting property against all retracts”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.2](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Schedules glue Hurewicz fibrations over numerable covers

**Remember:** A schedule is a timetable that says which open set a path is in.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55R70. arXiv math.AT. Level 3: graduate.

**Definition.** For a path on \[0,1\], a schedule lists open sets of the cover and successive interval lengths summing to one. The path fits if each positive-length closed interval maps into its assigned set.

**Problem.** Suppose B has a locally finite numerable open cover. If p: Y → B restricts to a Hurewicz fibration over each cover member, then p is a Hurewicz fibration.

**How the definition helps.** A compatible schedule tells us where to switch between local path lifts (our own explanation). Dyer and Eilenberg’s schedule theorem supplies the continuous construction needed to join the local lifting rules. The resulting continuous path-lifting rule gives a Hurewicz fibration.

**nLab:** [schedule](https://ncatlab.org/nlab/show/schedule), [Hurewicz connection](https://ncatlab.org/nlab/show/Hurewicz+connection). It says: “The original motivation for the notion of schedules was to prove the globalisation theorem for (Hurewicz) fibrations.”

**Sources:**

- [Eldon Dyer, Samuel Eilenberg, Globalizing fibrations by schedules, Fundamenta Mathematicae 130 (1988) 125–136](https://doi.org/10.4064/fm-130-2-125-136)

### The homotopy kernel of a homotopy kernel is a loop space

**Remember:** Pull back the point along itself up to homotopy, and you get loops.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P35, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a pointed ∞-category with finite limits, define ker(f) for f: A → B as the pullback A ×<sub>B</sub> \*. Define ΩB as the pullback \* ×<sub>B</sub> \*.

**Problem.** The homotopy kernel of ker(f) → A is equivalent to ΩB. Iteration gives the long fiber sequence … → ΩA → ΩB → ker(f) → A → B.

**How the definition helps.** With homotopy pullbacks, the kernel of a kernel is a loop space, so the sequence never stops. For ordinary kernels, the kernel of a kernel is trivial. Pasting the two homotopy pullback squares gives the outer square that defines ΩB, so the pasting law gives ker(ker(f)) ≃ ΩB. The nLab notes that the loops are reversed in direction.

**nLab:** [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “in contrast to the ordinary kernel of a kernel, which is necessarily trivial, the homotopy kernel of a homotopy kernel is typically far from trivial, but is a loop space object.”

**Sources:**

- [R. M. Switzer, Algebraic Topology — Homotopy and Homology, Springer (1975)](https://doi.org/10.1007/978-3-642-61923-6)

### The path model of homotopy fibers makes fibers over joined points equivalent

**Remember:** Extend the path to move the endpoint of a homotopy fiber.

*True by definition.* MSC 55R05 (Fiber spaces in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** For f: A → B and b ∈ B, the homotopy fiber over b consists of pairs (a,γ). Here γ is a path from f(a) to b, and the pair space has the subspace topology from A times the path space.

**Problem.** If a path joins two points b and b′ of B, then the homotopy fibers over b and b′ are homotopy equivalent.

**How the definition helps.** Appending a path δ from b to b′ moves each pair into the fiber over b′. Appending the reversed path gives a map back (our own argument). Contracting each backtracking segment and reparametrizing gives the two inverse homotopies.

**Wikipedia:** [Homotopy fiber](https://en.wikipedia.org/wiki/Homotopy_fiber). It says: “their homotopy fibers are homotopy equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Numerable bundles let the classification theorems work over every base space

**Remember:** Numerable means the trivializing cover comes with a partition of unity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R10. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An open cover is numerable if it has a subordinate partition of unity. A fibre bundle is numerable if it is locally trivial over a numerable open cover.

**Problem.** Over any base B, homotopy classes of maps B → BG classify isomorphism classes of numerable principal G-bundles. The projection of every numerable fibre bundle is a Hurewicz fibration.

**How the definition helps.** A partition of unity on the trivializing cover supplies the weights used to build the classifying map (our own explanation). Dold’s numerable-cover theorem also glues the local fibrations. Both statements therefore use a hypothesis on the bundle’s cover over an arbitrary base.

**nLab:** [numerable fiber bundle](https://ncatlab.org/nlab/show/numerable+fiber+bundle), [numerable open cover](https://ncatlab.org/nlab/show/numerable+open+cover). It says: “For the theory of fiber bundles to be well-behaved one typically needs to restrict to those that have a local trivialization not just over any open cover but over a numerable open cover”

**Sources:**

- [Albrecht Dold, Partitions of unity in the theory of fibrations, Ann. of Math. 78 (1963) 223–255](https://doi.org/10.2307/1970341)

### The universal first Chern class classifies complex line bundles

**Remember:** An equivalence of the two target spaces identifies line bundles with cohomology classes.

*True by definition.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R40, 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** The universal first Chern class on BU(1) is the integral degree-two generator evaluating to −1 on the complex projective line for the tautological line convention. The first Chern class of a line bundle is its pullback along a classifying map.

**Problem.** For a CW complex X, the first Chern class is a bijection from isomorphism classes of complex line bundles on X to H²(X, ℤ).

**How the definition helps.** Composition with an equivalence gives a bijection on homotopy classes of maps, so the universal definition gives the bijection at once. In our own proof, a map to BU(1) classifies the line bundle and its composite to K(ℤ, 2) represents its class. The work lies in building both classifying spaces and showing that c₁ is an equivalence.

**nLab:** [first Chern class](https://ncatlab.org/nlab/show/first+Chern+class). It says: “As a universal characteristic class, the first Chern class is the weak homotopy equivalence c₁ : BU(1) ≃→ K(ℤ,2).”

**Sources:** none listed. No primary source with a working link was found.

### Defining Thom spaces by compactification turns exterior sums into smash products

**Remember:** One point at infinity turns products into smash products.

*True by definition.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P40. arXiv math.AT. Level 3: graduate.

**Definition.** For a finite-dimensional vector bundle V over a compact Hausdorff base, its Thom space is the one-point compactification of its total space. A neighbourhood of infinity contains the complement of some compact subset.

**Problem.** Let V → X and W → Y be vector bundles over compact Hausdorff bases. Their exterior sum over X × Y has total space V × W. Its Thom space is homeomorphic to the smash product Th(V) ∧ Th(W), which collapses all pairs with a base point to one point.

**How the definition helps.** The product V⁺ × W⁺ contains V × W as an open subspace (our own explanation). Collapsing its complement gives a compact Hausdorff space with one point at infinity. The collapsed complement consists exactly of pairs with a base point, which defines the smash product.

**nLab:** [Thom space](https://ncatlab.org/nlab/show/Thom+space). It says: “For X a compact topological space, Th(V) is a model for the one-point compactification of the total space V.”

**Sources:** none listed. No primary source with a working link was found.

### Naturality identifies characteristic classes with classes on the classifying space

**Remember:** Evaluate a natural class on the universal bundle to recover its defining value.

*True by definition.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** For a topological group G, the universal bundle over BG classifies principal G-bundles over CW complexes by pullback, along maps unique up to homotopy. A characteristic class assigns a cohomology class to each bundle and commutes with pullback.

**Problem.** On CW complexes, degree-k characteristic classes of principal G-bundles with fixed coefficients correspond bijectively to degree-k cohomology classes on BG.

**How the definition helps.** Every bundle comes from the universal bundle by pullback, so one universal value fixes the class. In our own proof, evaluating the class on the universal bundle gives a class on BG. Conversely, pull a class on BG back along each classifying map; homotopy invariance makes this independent of the map. The work is building the universal bundle and proving that it classifies bundles.

**Wikipedia:** [Characteristic class](https://en.wikipedia.org/wiki/Characteristic_class). It says: “Once the cohomology H\*(BG) was calculated, once and for all, the contravariance property of cohomology meant that characteristic classes for the bundle would be defined in H\*(X) in the same dimensions.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Represented cohomology classifies operations by classes on Eilenberg–MacLane spaces

**Remember:** An operation is determined by its value on the universal class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A cohomology operation is a natural rule from one cohomology functor to another. For an abelian group π and n ≥ 1, K(π,n) is a connected space with homotopy group π in degree n and no others. In the represented definition, degree n cohomology with coefficients π consists of homotopy classes of maps to K(π,n).

**Problem.** Let π and G be abelian groups and let n and q be positive. On CW complexes, natural operations from degree n with coefficients π to degree q with coefficients G correspond to degree q classes on K(π,n).

**How the definition helps.** The identity of K(π,n) represents the universal class. Naturality says to pull its image back along the map representing each input class. Conversely, any degree-q class defines an operation by these pullbacks. This is the Yoneda lemma.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “by the Yoneda lemma, (non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Wikipedia:** [Cohomology operation](https://en.wikipedia.org/wiki/Cohomology_operation). It says: “Cohomology of CW complexes is representable by an Eilenberg–MacLane space, so by the Yoneda lemma a cohomology operation of type (n,q,π,G) is given by a homotopy class of maps K(π,n) → K(G,q).”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Representing cohomology by Eilenberg–MacLane spaces makes operations classes on K(G,m)

**Remember:** Evaluate the operation once, on the fundamental class.

*True by definition.* MSC 55S05 (Primary cohomology operations in algebraic topology), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** For abelian G and m &gt; 0, choose a connected CW complex K(G,m) with πₘ ≅ G and all other positive homotopy groups zero. On CW complexes X, homotopy classes of maps X → K(G,m) represent Hᵐ(X;G).

**Problem.** For abelian G and H, natural operations Hᵐ(−;G) → Hⁿ(−;H) on CW complexes correspond to classes in Hⁿ(K(G,m);H). The correspondence sends Θ to Θ(ι), where ι is the universal degree-m class.

**How the definition helps.** With the representing space, this is the Yoneda lemma, which fixes a natural map by its value on the identity map. Each class α is ϕ\*(ι) for a map ϕ: X → K(G, m), so Θ(α) = ϕ\*(Θ(ι)). The work moves to the theorem that maps to K(G, m) represent cohomology. The operations need not be additive.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “(non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Theorem 4.57](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)
- [Allen Hatcher, Algebraic Topology, §4.L, Proposition 4L.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### Admissible sequences of small excess give the cohomology of K(ℤ/2, n)

**Remember:** Excess below n names exactly the free polynomial generators.

*Makes the theorem clean to state or prove.* MSC 55S10 (Steenrod algebra), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A finite sequence I of positive integers is admissible if iⱼ ≥ 2iⱼ₊₁ for every adjacent pair. Its excess is the first term minus the sum of the remaining terms. The empty sequence has excess zero and denotes the identity operation.

**Problem.** For n ≥ 1, let ιₙ be the fundamental mod 2 class on K(ℤ/2,n). Its mod 2 cohomology is polynomial on Sqᴵ(ιₙ) for admissible I of excess less than n.

**How the definition helps.** The instability axioms kill composites of excess greater than n and turn those of excess n into squares (our own explanation). Serre’s spectral sequence computation proves that all remaining admissible composites generate freely, including ιₙ itself.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “where I is an admissible sequence, form a basis (the Serre–Cartan basis) for the mod 2 Steenrod algebra, called the admissible basis.”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Defining squares through the total power makes the Cartan formula multiplicativity

**Remember:** Squares are coefficients of the total power, which is multiplicative.

*True by definition.* MSC 55S10 (Steenrod algebra), 55S05. arXiv math.AT. Level 3: graduate.

**Definition.** For a degree-n mod 2 class a on X, let P(a) be Steenrod’s equivariant external square restricted along the diagonal. In H\*(ℝP∞ × X), define Sqⁱ(a) as the coefficient of xⁿ⁻ⁱ in P(a), where x generates H¹(ℝP∞). A negative exponent has coefficient zero.

**Problem.** The squares defined this way satisfy the Cartan formula: Sqᵏ(a ∪ b) is the sum of Sqⁱ(a) ∪ Sqʲ(b) over i + j = k. They also satisfy Sqⁱ(a) = 0 for i &gt; n and Sqⁿ(a) = a ∪ a.

**How the definition helps.** Steenrod’s total power construction is multiplicative, so comparing coefficients in P(ab) = P(a)P(b) gives the Cartan formula (our own explanation). Negative exponents give zero for i &gt; n. The constant coefficient restricts the external square along the ordinary diagonal, giving Sqⁿ(a) = a ∪ a.

**nLab:** [power operation](https://ncatlab.org/nlab/show/power+operation). It says: “the second (symmetric) power of a ∈ H(X,ℤ₂) is an element in H•(ℝP∞ × X, ℤ₂) ≃ H•(X,ℤ₂)\[x\] and the coefficients of this polynomial in x are the Steenrod operations on a.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the coproduct by Cartan's formula makes the dual Steenrod algebra commutative

**Remember:** The Cartan formula is symmetric, so the dual Steenrod algebra commutes.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** The mod 2 Steenrod algebra A is generated by the stable cohomology operations Sqⁱ. The Cartan coproduct is the algebra map sending Sqᵏ to the sum of Sqⁱ ⊗ Sqʲ over nonnegative i+j=k. Multiplication on the graded dual is dual to this coproduct.

**Problem.** The Steenrod algebra is cocommutative, so the dual Steenrod algebra is a commutative algebra. The Steenrod algebra itself is not commutative, since Sq¹Sq² = Sq³ but Sq²Sq¹ is a different basis element.

**How the definition helps.** Interchanging the tensor factors preserves the defining sum for each generator. Both coproducts are algebra maps, so agreement on the generators proves cocommutativity. Duality then gives commutativity, while the Adem relations distinguish the two compositions in A (our own explanation).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “It is also a Hopf algebra, so that in particular there is a diagonal or comultiplication map ψ: A → A ⊗ A induced by the Cartan formula for the action of the Steenrod algebra on the cup product.”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)

### Making the total square a ring map computes squares on projective space

**Remember:** Sq of x is x plus x², so take powers.

*True by definition.* MSC 55S10 (Steenrod algebra). arXiv math.AT. Level 3: graduate.

**Definition.** On mod 2 cohomology the total square is Sq(a) = ∑ᵢ≥₀ Sqⁱ(a). For a homogeneous class of degree n, instability makes every term above n vanish. The Cartan formula makes Sq multiplicative.

**Problem.** In H\*(ℝP∞; 𝔽₂) = 𝔽₂\[x\], with x in degree 1, the square Sqⁱ(xⁿ) is the binomial coefficient C(n, i) mod 2 times xⁿ⁺ⁱ.

**How the definition helps.** Because the total square is multiplicative, it is fixed by its value on the generator, and the axioms give Sq(x) = x + x². So Sq(xⁿ) = (x + x²)ⁿ, and the binomial theorem gives each Sqⁱ(xⁿ) as the part of degree n + i. The work went into constructing squares that satisfy the Cartan formula and the axioms.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The Cartan relation implies that the total square Sq := Sq⁰ + Sq¹ + Sq² + ⋯ is a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Via Sqⁿ, Hopf invariant one forces n to be 2ᵏ

**Remember:** Odd Hopf invariant means Sqⁿ acts, so n must be 2ᵏ.

*True by definition.* MSC 55S10 (Steenrod algebra), 55Q25. arXiv math.AT. Level 3: graduate.

**Definition.** For n ≥ 2, attach an oriented 2n-cell to Sⁿ along f: S²ⁿ⁻¹ → Sⁿ. With integral generators a and b from the sphere and oriented cell, define H(f) by a ∪ a = H(f)b.

**Problem.** For n ≥ 2, an odd Hopf invariant for f: S²ⁿ⁻¹ → Sⁿ forces n to be a power of two.

**How the definition helps.** An odd Hopf invariant makes Sqⁿ(a) = a² nonzero after reduction modulo two (our own explanation). Unless n is a power of two, the Adem relations express Sqⁿ as sums of composites of smaller positive squares. Each composite starts in degree n and passes through a degree strictly between n and 2n. The cone has no cohomology there.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra), [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The proof uses the fact that each Sqᵏ is decomposable for k which is not a power of 2; that is, such an element is a product of squares of strictly smaller degree.”

**Sources:**

- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)
- [J. F. Adams, On the non-existence of elements of Hopf invariant one, Annals of Mathematics 72 (1960) 20–104](https://doi.org/10.2307/1970147)

### Truncation keeps lower cutoff

**Remember:** Once only lower groups matter, an earlier higher cutoff makes no difference.

*True by definition.* MSC 55S45 (Postnikov systems, \\(k\\)-invariants), 55P15. arXiv math.AT. Level 3: graduate.

**Definition.** Define n-truncation as the universal map from a space to an n-type, a homotopy type with no higher homotopy groups. The usual Postnikov construction instead attaches cells to kill groups above n without changing lower groups.

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

**Definition.** Let F → E → B be a fibre bundle over a connected base, and k a field. The fibre is totally non-homologous to zero when restriction H\*(E; k) → H\*(F; k) is onto. Equivalently, there are classes on E whose restrictions to each fibre form a basis of the fibre's cohomology.

**Problem.** For a fibre bundle over a path-connected CW base, assume restriction onto H\*(F;k) is surjective and each fibre cohomology group is finite-dimensional. For any graded linear section s, the assignment b ⊗ f ↦ p\*(b) ∪ s(f) identifies H\*(B;k) ⊗ H\*(F;k) with H\*(E;k) as H\*(B;k)-modules.

**How the definition helps.** The onto condition rules out fibre classes that a differential could kill, so the spectral sequence must collapse. The Hopf fibration S¹ → S³ → S² shows the need, because H¹(S³) = 0 cannot map onto H¹(S¹) (our own example). Under the condition, the left column of E₂ consists of permanent cycles, and by the Leibniz rule all differentials vanish (our own summary). The H\*(B)-module structure then solves the extension problem, so the module is free.

**nLab:** [Leray-Hirsch theorem](https://ncatlab.org/nlab/show/Leray-Hirsch+theorem). It says: “The Leray-Hirsch theorem states sufficient fiberwise condition for the ordinary cohomology of the total space of a fiber bundle with coefficients in a commutative ring to be free module over the cohomology ring of the base space.”

**Wikipedia:** [Leray–Hirsch theorem](https://en.wikipedia.org/wiki/Leray%E2%80%93Hirsch_theorem). It says: “In other words, if for every p, there exist classes c₁,ₚ, …, cₘₚ,ₚ ∈ Hᵖ(E) that restrict, on each fiber F, to a basis of the cohomology in degree p, the map given below is then an isomorphism of H\*(B) modules.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002)](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

### Derivation differentials compute the cohomology ring of complex projective space

**Remember:** Know d on the generator, and Leibniz gives d on everything.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** A multiplicative cohomological spectral sequence has a bigraded algebra on each page, and taking cohomology induces the next page’s product. For homogeneous x of total degree j, every differential satisfies d(xy) = d(x)y + (−1)ʲx d(y).

**Problem.** The integral cohomology ring of complex projective space is H\*(ℂPⁿ; ℤ) = ℤ\[x\]/(xⁿ⁺¹) with x in degree 2. Letting n grow gives H\*(ℂP∞; ℤ) = ℤ\[x\].

**How the definition helps.** In the Hopf circle bundle over ℂPⁿ, the Serre differential sends the fibre generator to a degree-two class x (our own calculation). The derivation rule makes this differential multiplication by x between the two rows. Vanishing of intermediate cohomology on S²ⁿ⁺¹ forces multiplication by x to be an isomorphism through degree 2n. The base has dimension 2n, and the finite calculations stabilize degreewise for ℂP∞.

**nLab:** [multiplicative spectral sequence](https://ncatlab.org/nlab/show/multiplicative+spectral+sequence). It says: “A spectral sequence is called multiplicative or a spectral ring if there is a bi-graded algebra structure on each page such that the differentials act as graded derivations of total degree 1.”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “We then see that d(ix) = x² by the Leibniz rule telling us that the 4,0 coordinate must be x² since there can be no nontrivial homology until degree 2n + 1.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Killing π₃ with K(ℤ,3) makes π₄ of the 3-sphere a homology group

**Remember:** Take the fibre of the map detecting π₃, then apply Hurewicz.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** The 3-connected cover of S³ is the homotopy fibre X of a map S³ → K(ℤ,3) inducing an isomorphism on π₃. Its fibre over S³ is ΩK(ℤ,3) ≃ ℂP∞.

**Problem.** The fourth homotopy group of the 3-sphere is π₄(S³) ≅ ℤ/2. With the Hopf fibration S¹ → S³ → S², this also gives π₄(S²) ≅ ℤ/2.

**How the definition helps.** The fibre sequence and Hurewicz identify π₄(S³) with H₄(X) (our own outline). In the integral cohomology Serre sequence, 3-connectivity forces d₃(a) = ι for suitable generators. Thus d₃(a²) = 2aι, giving H⁴(X) = 0 and H⁵(X) ≅ ℤ/2. Finite type and universal coefficients give H₄(X) ≅ ℤ/2, and the Hopf fibre sequence identifies π₄(S²) with π₄(S³).

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “But now since we killed off the lower homotopy groups of X (i.e., the groups in degrees less than 4) by using the iterated fibration, we know that H₄(X) = π₄(X) by the Hurewicz theorem”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Local coefficients let the Serre spectral sequence work over any connected base

**Remember:** Loops in the base twist the fibre's cohomology; local coefficients keep track.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N25. arXiv math.AT. Level 3: graduate.

**Definition.** A local coefficient system assigns an abelian group to every point and an isomorphism to each path class relative to its endpoints. It sends constant paths to identities and concatenation to composition. Fibre cohomology in each degree gives such a system by transport.

**Problem.** Every Serre fibration F → E → B over a path-connected base has a spectral sequence from Hᵖ(B; Hᵗ(F)), with local coefficients, to H\*(E). When π₁(B) acts trivially on H\*(F), for example when B is simply connected, the E₂ term is ordinary cohomology.

**How the definition helps.** The local system records how loops in the base act on the fibre's cohomology, so the theorem needs no hypothesis on π₁(B). Without it, the statement must assume that B is simply connected or that the action is trivial. The work goes into Serre's construction, which filters E by the parts over the skeleta of B. Its first page is then the cellular cochain complex of B with the twisted coefficients (our own summary).

**nLab:** [Serre spectral sequence](https://ncatlab.org/nlab/show/Serre+spectral+sequence). It says: “such that the canonical group action of the fundamental group π₁(X) on the ordinary cohomology of the fiber F is trivial (for instance if X is a simply connected topological space)”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “Strictly speaking, what is meant is cohomology with respect to the local coefficient system on B given by the cohomology of the various fibers. Assuming for example, that B is simply connected, this collapses to the usual cohomology.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Orientable fibrations multiply Euler characteristics

**Remember:** Every loop acts trivially on fibre cohomology.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55R20. arXiv math.AT. Level 3: graduate.

**Definition.** A fibration over a path-connected base is orientable over K if transport around every based loop induces the identity on the fibre’s cohomology over K.

**Problem.** If B is path-connected, the fibration is orientable over K and the homology of B and F is finite-dimensional, then χ(E) = χ(F)·χ(B).

**How the definition helps.** Orientability makes E₂ a tensor product, so its Euler characteristic is χ(B)·χ(F). Each differential raises total degree by one, and taking homology of such a differential does not change the Euler characteristic (our own summary). So E∞ has the same value, and E∞ is the associated graded of H\*(E). The work is in the Serre spectral sequence and its E₂ term.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If p: E → B is a fibration with fiber F, with the base B path-connected, and the fibration is orientable over a field K, then the Euler characteristic with coefficients in the field K satisfies the product property”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Serre classes make the Hurewicz theorem hold modulo finite groups

**Remember:** Ignore a map’s kernel and cokernel when both belong to the chosen class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** A Serre class is a family 𝒞 of abelian groups that contains 0 and is closed under subgroups, quotients and extensions. A map is an isomorphism modulo 𝒞 when its kernel and cokernel lie in 𝒞. The finite abelian groups form a Serre class, and so do the finite groups of order prime to p.

**Problem.** For i,n ≥ 1 with i ≠ n, πᵢ(Sⁿ) is finite, except that π₄ₖ₋₁(S²ᵏ) is ℤ plus a finite group. For simply connected X and n ≥ 2, finiteness of every πᵢ(X) below n makes the nth Hurewicz map an isomorphism modulo finite groups.

**How the definition helps.** The finite-group Serre class lets the Hurewicz comparison disregard finite kernels and cokernels (our own explanation). Serre’s spectral sequence argument applies this comparison to successive connected covers of spheres. Finite generation and the rational cohomology calculation for K(ℤ,n) yield the stated exceptional degrees.

**Wikipedia:** [Homotopy groups of spheres](https://en.wikipedia.org/wiki/Homotopy_groups_of_spheres). It says: “Jean-Pierre Serre showed that homotopy groups of spheres are all finite except for those of the form πₙ(Sⁿ) or π₄ₙ₋₁(S²ⁿ) (for positive n), when the group is the product of the infinite cyclic group with a finite abelian group.”

**Sources:**

- [Jean-Pierre Serre, Groupes d'homotopie et classes de groupes abéliens, Annals of Mathematics 58 (1953) 258–294](https://doi.org/10.2307/1969789)

### The Euler class as a transgression gives the Gysin sequence at once

**Remember:** Transgress the oriented fibre generator to get the Euler class.

*True by definition.* MSC 55T10 (Serre spectral sequences), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** For an oriented Sᵏ-bundle with k ≥ 1, choose the integral fibre generator u prescribed by its orientation. Define its Euler class by e = dₖ₊₁(u) in the cohomology Serre spectral sequence.

**Problem.** An oriented Sᵏ-bundle over a path-connected CW base has a long exact integral Gysin sequence. Its terms include Hⁿ(B) → Hⁿ⁺ᵏ⁺¹(B) → Hⁿ⁺ᵏ⁺¹(E) → Hⁿ⁺¹(B). The first arrow cups with e, and the second pulls back along the projection.

**How the definition helps.** The E₂ page has only the two rows q = 0 and q = k, so the single differential dₖ₊₁ joins them. By the Leibniz rule it sends b·u to ±b ∪ e. A spectral sequence with two rows always unrolls into a long exact sequence, and with this definition of e that sequence is the Gysin sequence. The work moves to the theorem that this transgression equals the Euler class defined by the Thom class (our own remark).

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence), [Gysin homomorphism](https://en.wikipedia.org/wiki/Gysin_homomorphism). It says: “We see that the only non-trivial differentials are given on the E₂ᵣ-page and are defined by cupping with the Euler class e(ℰ).”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Transgression as a coboundary makes it commute with Steenrod squares

**Remember:** A transgression pulls back to the connecting image of the fibre class.

*True by definition. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** For a based fibration p with fibre F over b, use mod 2 cohomology. A class x ∈ Hᵗ(F) transgresses to y ∈ Hᵗ⁺¹(B,{b}) if δx = p\*y in Hᵗ⁺¹(E,F). Here δ is the connecting map for (E,F).

**Problem.** If x is transgressive with transgression y, then each Steenrod square Sqⁱx is transgressive with transgression Sqⁱy. This lets Serre compute H\*(K(ℤ/2, n); 𝔽₂) as a polynomial ring on the classes Sqᴵιₙ with I admissible of excess below n.

**How the definition helps.** Steenrod squares are natural for maps of pairs and commute with the coboundary δ. So they preserve the relation δx = p\*(y) term by term (our own summary). The work moves to Serre's theorem that this geometric transgression is the differential of the spectral sequence. With that identification, Borel's theorem on transgressive generators gives the cohomology of the Eilenberg–MacLane spaces.

**nLab:** [transgression](https://ncatlab.org/nlab/show/transgression). It says: “This construction really exhibits transgression as a special case of the connecting homomorphism in cohomology”

**Wikipedia:** [Spectral sequence](https://en.wikipedia.org/wiki/Spectral_sequence). It says: “The transgression is a partially defined map (more precisely, a map from a subobject to a quotient)”

**Sources:**

- [Jean-Pierre Serre, Cohomologie modulo 2 des complexes d'Eilenberg-MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Transgressive exterior generators make classifying space cohomology polynomial

**Remember:** Each exterior generator upstairs transgresses to one polynomial generator downstairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For a simply connected base, a degree-t fibre class is transgressive if it survives to page t+1 of the cohomology Serre spectral sequence. A transgression is any base class representing its dₜ₊₁ image. A simple system consists of classes whose ordered products over finite subsets, including the empty product, form a basis.

**Problem.** Suppose E is contractible, B simply connected, and H\*(F;k) has finite type over a field k with odd-degree transgressive simple generators. Then H\*(B;k) is polynomial on chosen transgressions of those generators. In particular, H\*(BG;ℚ) is polynomial for every compact connected Lie group G.

**How the definition helps.** Borel’s transgression theorem identifies the base generators through their differentials from the fibre (our own explanation). Zeeman’s comparison theorem compares the model calculation with the Serre spectral sequence. Hopf’s theorem and Borel’s transgressive generators apply this calculation to the universal bundle of a compact connected Lie group.

**Wikipedia:** [Zeeman's comparison theorem](https://en.wikipedia.org/wiki/Zeeman%27s_comparison_theorem). It says: “A crucial point is that f is a "ring homomorphism"; this rests on the technical conditions that uᵢ are "transgressive”

**Sources:**

- [Armand Borel, Sur la cohomologie des espaces fibrés principaux et des espaces homogènes de groupes de Lie compacts, Annals of Mathematics 57 (1953) 115–207](https://doi.org/10.2307/1969728)
- [E. C. Zeeman, A proof of the comparison theorem for spectral sequences, Proc. Cambridge Philos. Soc. 53 (1957) 57–62](https://doi.org/10.1017/S0305004100031984)

### The Bockstein spectral sequence reads off orders of p-torsion page by page

**Remember:** The r-th page sees exactly the summands of order pʳ.

*Makes the theorem clean to state or prove.* MSC 55T99 (Spectral sequences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** Fix a prime p and a chain complex C of torsion-free abelian groups. Multiplication by p gives the short exact sequence 0 → C → C → C/pC → 0. Its homology exact couple defines the Bockstein spectral sequence with first page H\_∗(C/pC).

**Problem.** If every Hₙ(C) is finitely generated, E∞ is the torsion-free quotient of integral homology tensored with 𝔽ₚ. Each cyclic summand ℤ/pʳ in Hₙ(C) gives classes in degrees n+1 and n paired by a nonzero dʳ.

**How the definition helps.** In the rth derived couple the integral term is pʳ⁻¹H\_∗(C) (our own explanation). The cyclic summand still contributes its final order-p subgroup there, and the connecting map followed by reduction pairs its two classes. Earlier differentials vanish on that pair, and the next derived couple loses it. Finite generation leaves just the free part modulo p at the limit.

**nLab:** [Bockstein spectral sequence](https://ncatlab.org/nlab/show/Bockstein+spectral+sequence). It says: “The Bockstein spectral sequence is traditionally defined by an exact couple in a way that does not manifestly come from a filtered chain complex.”

**Wikipedia:** [Bockstein spectral sequence](https://en.wikipedia.org/wiki/Bockstein_spectral_sequence). It says: “Letting r → ∞ we thus see E∞ is isomorphic to (free part of H\*(C)) ⊗ ℤ/p.”

**Sources:**

- [William Browder, Torsion in H-spaces, Annals of Mathematics 74 (1961), from page 24](https://doi.org/10.2307/1970305)

### Closure-finiteness and the weak topology put compact sets in finite subcomplexes

**Remember:** Cell closures meet finitely many cells, and closedness is tested on each closure.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** In a CW complex, the closure of every cell meets only finitely many cells. A subset is closed exactly when its intersection with every cell closure is closed there.

**Problem.** Every compact subset of a CW complex lies in a finite subcomplex. Thus a map from a sphere, or a homotopy of such maps, has image in a finite subcomplex.

**How the definition helps.** The weak topology makes any set that picks one point from infinitely many cells closed and discrete, so no compact set contains one. With closure-finiteness, the finitely many cells that a compact set meets grow to a finite subcomplex. Our own example: the Hawaiian earring, split into one point and infinitely many 1-cells, is closure-finite and compact. It meets infinitely many cells, because its topology is not the weak topology.

**Wikipedia:** [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “A compact subspace of a CW complex is always contained in a finite subcomplex.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Restricting to CW complexes makes Whitehead's theorem true

**Remember:** Built from cells, a space is known by its homotopy groups.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A CW complex is a space built by gluing balls (cells) of rising dimension along their boundary spheres. Each cell meets only finitely many other cells in its boundary (closure-finite). A set is closed when it meets each closed cell in a closed set (weak topology).

**Problem.** Whitehead's theorem says that a map between connected CW complexes which gives isomorphisms on all homotopy groups is a homotopy equivalence. A homotopy equivalence is a map with an inverse up to continuous deformation.

**How the definition helps.** The cell structure lets you build an inverse map one cell at a time, so isomorphisms on homotopy groups are enough. The Warsaw circle is the bad case that the restriction excludes. Our own description: it is a closed loop in the plane with one piece that oscillates like sin(1/x). All its homotopy groups vanish, but it is not contractible.

**Wikipedia:** [Whitehead theorem](https://en.wikipedia.org/wiki/Whitehead_theorem), [CW complex](https://en.wikipedia.org/wiki/CW_complex). It says: “For example, the Warsaw circle, a compact subset of the plane, has all homotopy groups zero, but the map from the Warsaw circle to a single point is not a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the American Mathematical Society 55 (1949) 213–245](https://doi.org/10.1090/S0002-9904-1949-09175-9)

### Allowing subdivision lets every continuous map become simplicial up to homotopy

**Remember:** Cut the domain finely enough, and any map becomes simplicial.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 57Q55. arXiv math.AT. Level 3: graduate.

**Definition.** A subdivision triangulates each original simplex compatibly with its faces and leaves the underlying space unchanged. A simplicial map assigns vertices to vertices so the images of each simplex’s vertices span a target simplex, then extends linearly.

**Problem.** Every continuous map between finite simplicial complexes is homotopic to a simplicial map from a subdivision of the domain. As a consequence, the homotopy group πₖ(Sⁿ) is zero when k is less than n.

**How the definition helps.** Repeated barycentric subdivision makes each vertex star small enough for its image to lie in a target vertex star. Choosing these target vertices gives a simplicial approximation homotopic to the original map. For k &lt; n its image misses a point of Sⁿ, whose complement is contractible (our own explanation).

**Wikipedia:** [Simplicial approximation theorem](https://en.wikipedia.org/wiki/Simplicial_approximation_theorem). It says: “In short, the theorem says any continuous map between simplicial complexes is the geometric realization of a simplicial mapping up to homotopy and subdivision.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Building simplicial sets from nondegenerate simplices makes realizations CW complexes

**Remember:** Only simplices that are not repeats add cells.

*True by definition. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55U05. arXiv math.AT. Level 3: graduate.

**Definition.** A simplex of a simplicial set is degenerate if a degeneracy map, which repeats a vertex, sends a lower-dimensional simplex to it. Every simplicial set is built from the empty set by adjoining nondegenerate simplices along their boundaries, step by step.

**Problem.** The geometric realization of a simplicial set is a CW complex with one n-cell for each nondegenerate n-simplex.

**How the definition helps.** Each step attaches Δ\[n\] along its boundary, and realization, a left adjoint, turns this into attaching an n-cell along its boundary sphere. The direct definition glues all simplices, degenerate ones included, at once. The work moves to the Eilenberg–Zilber lemma: each simplex is a degeneracy of exactly one nondegenerate simplex, in exactly one way.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “can be seen as the result of iteratively adjoining nondegenerate n-simplices.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Appendix, Simplicial CW Structures](https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf)

### Defining realization as a colimit-preserving extension makes it left adjoint to Sing

**Remember:** A map out of the gluing is a compatible family of singular simplices.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** Geometric realization is the colimit-preserving extension sending Δ\[n\] to the topological n-simplex and each simplex operator to its affine map. Singular n-simplices of X are continuous maps Δⁿ → X, with simplex operators acting by precomposition.

**Problem.** Continuous maps \|K\| → X correspond naturally to simplicial maps K → Sing X.

**How the definition helps.** A map out of the colimit specifies one continuous map Δⁿ → X per simplex of K, compatibly with simplex operators (our own explanation). These families are precisely simplicial maps K → Sing X, naturally in both variables.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “Geometric realization is the special case of the general notion of nerve and realization that is induced from the standard cosimplicial topological space”

**Sources:** none listed. No primary source with a working link was found.

### Delta-complexes compute the homology of the torus with six simplices

**Remember:** Let faces repeat, and the torus needs only two triangles.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A Δ-complex is the realization of sets of n-simplices with face maps dᵢ satisfying dᵢdⱼ = dⱼ₋₁dᵢ whenever i &lt; j. Realization attaches each ordered simplex along its prescribed faces, allowing identified vertices.

**Problem.** The torus is a Δ-complex with one vertex, three edges and two triangles. Its homology is ℤ in degree 0, ℤ² in degree 1 and ℤ in degree 2.

**How the definition helps.** Cut a square along a diagonal and identify opposite sides to obtain the torus with the stated simplices (our own calculation). All three edges are loops, so their boundaries vanish. Orient the triangles coherently: their boundaries are opposite primitive sums of the three edges. The resulting kernel has rank one and the edge quotient is ℤ², giving the stated homology by the simplicial homology theorem.

**Wikipedia:** [Delta set](https://en.wikipedia.org/wiki/Delta_set). It says: “It is worth highlighting that the minimum number of simplices needed to endow T² with the structure of a simplicial complex is 7 vertices, 21 edges, and 14 2-simplices, for a total of 42 simplices.”

**Sources:**

- [Samuel Eilenberg and J. A. Zilber, Semi-simplicial complexes and singular homology, Annals of Mathematics 51 (1950) 499–513](https://doi.org/10.2307/1969364)
- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Dowker's two complexes from one relation have the same homotopy type

**Remember:** Swap witnesses and vertices without changing the homotopy type.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 05E45. arXiv math.CO, math.AT. Level 3: graduate.

**Definition.** For R ⊆ X × Y, the first Dowker complex consists of finite subsets of X sharing a related element of Y. The second consists of finite subsets of Y sharing a related element of X.

**Problem.** The geometric realizations of the two Dowker complexes of a relation are homotopy equivalent.

**How the definition helps.** Cover the first complex by the full simplices on the nonempty sets of neighbours of individual elements of Y (our own argument). Every nonempty finite intersection is another full simplex and hence contractible. A finite family intersects exactly when its labels share a neighbour in X. Its nerve is therefore the second complex, and the simplicial nerve theorem gives the equivalence.

**Paper or page:** [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1), [Dowker Complexes and filtrations on self-relations](https://arxiv.org/abs/2301.03739v1). It says: “Given a relation on X × Y, we can construct two abstract simplicial complexes called Dowker complexes. The geometric realizations of these simplicial complexes are homotopically equivalent.”

**Sources:**

- [Dominic Desjardins Côté, Dowker Complexes and filtrations on self-relations, arXiv:2301.03739 (2023)](https://arxiv.org/abs/2301.03739v1)
- [Clifford H. Dowker, Homology Groups of Relations, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969768)

### Filling horns makes simplicial homotopy behave as it does for spaces

**Remember:** Every simplex with one face missing can be completed, as in a space.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Kan complex is a simplicial set X in which every horn Λᵏ\[n\] → X extends to a full simplex Δ\[n\] → X. The horn Λᵏ\[n\] is the boundary of the n-simplex with its k-th face removed. This is the extension condition.

**Problem.** For maps into a Kan complex, simplicial homotopy is an equivalence relation. The homotopy groups of a Kan complex can be defined combinatorially, from simplices whose boundary sits at the base point.

**How the definition helps.** Horn fillers supply the compositions that homotopy theory needs. They give the composite of two classes of simplices, and this composite is the group product. For a simplicial set that is not Kan, the nLab uses a Kan fibrant replacement. The real link to spaces is the theorem that these groups agree with those of the geometric realization.

**nLab:** [Kan complex](https://ncatlab.org/nlab/show/Kan+complex), [simplicial homotopy group](https://ncatlab.org/nlab/show/simplicial+homotopy+group), [simplicial homotopy](https://ncatlab.org/nlab/show/simplicial+homotopy). It says: “For such complexes, usually called Kan complexes, homotopy groups may be defined, and, further, the notion of homotopy between maps of an arbitrary semi-simplicial complex into a Kan complex is an equivalence relation.”

**Sources:**

- [Daniel M. Kan, On c.s.s. complexes, American Journal of Mathematics 79 (1957) 449–476](https://doi.org/10.2307/2372558)

### For the décalage, the fibration property is a single horn filler

**Remember:** Shift a simplicial set down one degree to get its paths ending at a vertex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50. arXiv math.AT. Level 3: graduate.

**Definition.** The upper décalage has (Dec₀ X)ₙ = Xₙ₊₁ and retains the face and degeneracy operators indexed 0 through n in degree n. Its projection to X in degree n is the last face dₙ₊₁.

**Problem.** For Kan X, the last face projection Dec₀ X → X is a Kan fibration. The décalage deformation retracts onto its constant vertex simplices. Thus the projection replaces the vertex inclusion X₀ → X by a Kan fibration.

**How the definition helps.** Each lifting problem for the projection specifies all but one face of an (n+1)-simplex, so the Kan condition supplies a lift (our own explanation). The omitted degeneracy gives an extra degeneracy contracting each component onto its terminal vertex. Together these give the claimed fibration replacement.

**nLab:** [decalage](https://ncatlab.org/nlab/show/decalage). It says: “As a result, the décalage construction is often more convenient than forming X<sup>I</sup> ×<sub>X</sub> X<sub>0</sub>.”

**Sources:**

- [Danny Stevenson, Décalage and Kan's simplicial loop group functor, Theory and Applications of Categories 26 (2012) no. 28, 768–787, arXiv:1112.0474](https://arxiv.org/abs/1112.0474)

### Good open covers make the nerve theorem true

**Remember:** A good cover has no holes in its pieces or in their overlaps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 54D20. arXiv math.AT. Level 3: graduate.

**Definition.** A good open cover of a space X is an open cover in which every set is contractible. Every inhabited (nonempty) finite intersection of the sets must also be contractible.

**Problem.** For a good open cover of a paracompact space X, the geometric realization of the nerve is homotopy equivalent to X (the nerve theorem).

**How the definition helps.** If all the pieces and all their overlaps are contractible, the nerve loses no information about their shape. For a general open cover, the nerve forgets the topology of the pieces and their overlaps. Our own example: cover a circle by two arcs that meet in two arcs, and the nerve is an interval. The proof uses partitions of unity.

**nLab:** [nerve theorem](https://ncatlab.org/nlab/show/nerve+theorem), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “The nerve theorem asserts that the homotopy type of a sufficiently nice topological space is encoded in the Čech nerve of a good open cover”

**Sources:**

- [André Weil, Sur les théorèmes de de Rham, Commentarii Mathematici Helvetici 26 (1952) 119–145](https://doi.org/10.1007/bf02564296)
- [Karol Borsuk, On the imbedding of systems of compacta in simplicial complexes, Fundamenta Mathematicae 35 (1948) 217–234](https://doi.org/10.4064/fm-35-1-217-234)

### The homotopy hypothesis is a tautology or a theorem, depending on definitions

**Remember:** Define ∞-groupoids as spaces, and 'they are spaces' says nothing new.

*True by definition.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18N50, 55P15. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** One model takes ∞-groupoids to be spaces with weak homotopy equivalences inverted. Another uses Kan complexes, simplicial sets in which every map from a horn extends to the corresponding simplex.

**Problem.** The homotopy hypothesis says that ∞-groupoids are equivalent to topological spaces up to weak homotopy equivalence. The fundamental ∞-groupoid of a space gives the equivalence.

**How the definition helps.** In the space model the identity functor gives the equivalence by definition. In the Kan model the singular complex represents the fundamental ∞-groupoid. Quillen’s realization–singular complex equivalence gives the theorem for this model.

**nLab:** [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis), [Kan complex](https://ncatlab.org/nlab/show/Kan+complex). It says: “For instance there is some justification for defining an ∞-groupoid to be equivalently a topological space considered modulo weak homotopy equivalence (see at classical model structure on topological spaces). For this definition the homotopy hypothesis is of course a tautology.”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)
- [Simon Henry, Edoardo Lanari, On the homotopy hypothesis in dimension 3, Theory Appl. Categ. 39 (2023) 735–768, arXiv:1905.05625](https://arxiv.org/abs/1905.05625)

### Defining homotopy limits as derived functors makes them homotopy invariant

**Remember:** A derived functor treats weak equivalences as isomorphisms before it computes.

*True by definition.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 18N40, 18A30. arXiv math.AT. Level 3: graduate.

**Definition.** For a fixed diagram shape, invert the natural transformations that are weak equivalences at every object. The homotopy limit is the right derived functor of limit for this localization, and the homotopy colimit is the left derived functor of colimit.

**Problem.** Where the derived functors exist, homotopy limits and colimits send objectwise weak equivalences of diagrams to isomorphisms in the homotopy category.

**How the definition helps.** Objectwise weak equivalences become isomorphisms in the homotopy category of diagrams. Both derived functors preserve those isomorphisms (our own explanation). The work is proving existence and verifying that a chosen construction computes the derived functor.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “The homotopy limit of a functor F : D → C is, if it exists, the image of F under the right derived functor of the limit functor”

**Wikipedia:** [Homotopy colimit and limit](https://en.wikipedia.org/wiki/Homotopy_colimit_and_limit). It says: “if one (or more) of the spaces used to form the pushout is replaced by a weakly equivalent space, the pushout is not guaranteed to stay weakly equivalent. The homotopy pushout rectifies this defect.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Smash products are associative in a convenient category of spaces

**Remember:** Smash is a quotient of a product, and cartesian closed products keep quotients.

*True by definition.* MSC 55U40 (Topological categories, foundations of homotopy theory), 54D50, 18F60. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** In a cartesian closed category of spaces with the indicated quotients, the smash product of pointed A and B is (A × B)/(A ∨ B). The wedge consists of pairs with at least one base point.

**Problem.** In a convenient category of pointed spaces, the smash product is associative: A ∧ (B ∧ C) ≅ (A ∧ B) ∧ C.

**How the definition helps.** Each product functor preserves quotients because it has a right adjoint (our own explanation). Both bracketings therefore collapse the same subspace of the triple product, consisting of triples with a base point. This gives the canonical homeomorphism.

**nLab:** [smash product](https://ncatlab.org/nlab/show/smash+product). It says: “Associativity fails in general for the category Top of all topological spaces; however, it is satisfied for pointed objects in any convenient category of topological spaces, since such a category is cartesian closed.”

**Sources:**

- [Norman Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)

### Bordism holonomy forces integral periods

**Remember:** On a closed bordism, the holonomy difference vanishes and the integral is an integer.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N22. arXiv math.AT. Level 4: research.

**Definition.** A degree-n differential bordism character pairs closed curvature data ω with an additive ℝ/ℤ-valued function h on geometric (n−1)-cycles. For every geometric n-bordism W, require h(∂W) to equal the integral of the Chern–Weil form cw(ω) on W modulo ℤ.

**Problem.** On closed manifolds, these integrals give an integer-valued homomorphism on the bordism group for the chosen tangential structure.

**How the definition helps.** For closed W the boundary is empty, so additivity gives h(∂W) = 0 and the integral is an integer (our own argument). Integration adds under disjoint union. Stokes’ theorem for the closed Chern–Weil form makes the integral zero on boundaries, so it descends to bordism.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270). It says: “induces a ℤ-valued homomorphism cw(ω) : Ω∗ᴳ(X, Y) → ℤ.”

**Sources:**

- [Yamashita and Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT’s, I, Lemma 4.77](https://arxiv.org/abs/2106.09270)

### Circle suspension preserves underlying theory

**Remember:** Reduced circle evaluation shifts down once, and suspension shifts back up.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F, reduced circle evaluation at M is the homotopy fibre of F(S¹ × M) → F(M) over zero. The map restricts to the basepoint slice. Geometric suspension suspends this fibre once.

**Problem.** Geometric suspension preserves the underlying cohomology theory of a differential refinement, obtained by forcing homotopic maps to act alike.

**How the definition helps.** Removing the basepoint contribution leaves a loop in the underlying theory, and the degree shift cancels that loop (our own). Bunke, Nikolaus and Völkl prove that taking the invariant approximation commutes with reduced circle evaluation (our own).

**nLab:** [fiber integration in differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+differential+cohomology). It says: “for integration over circle fibers in (Bunke-Nikolaus-Völkl 13, section 4.5).”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Cofiber curvature gives homotopy formulas

**Remember:** The difference of endpoint restrictions passes through curvature and lands in deformations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on manifolds, curvature data form the cofiber of the natural map from the constant sheaf on F(\*) to F. Deformations form the fiber of F → H(F), where H is the universal homotopy-invariant approximation.

**Problem.** For data on M × \[0,1\], the difference of endpoint restrictions factors naturally through curvature data on the cylinder and then through deformations on M.

**How the definition helps.** The endpoints agree up to homotopy on the constant part, so their difference factors through curvature (our own). They also agree after passage to the invariant approximation, so the result lifts to deformations (our own). Bunke, Nikolaus and Völkl construct compatible homotopies for these two steps in Theorem 3.2 (our own).

**nLab:** [smooth spectrum](https://ncatlab.org/nlab/show/smooth+spectrum). It says: “every smooth spectrum sits in a hexagonal differential cohomology diagram”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Curvature and topology reconstruct smooth spectra

**Remember:** A smooth spectrum glues its curvature data to its underlying topology.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on smooth manifolds, its flat part is the constant sheaf on F(\*). Its curvature target is the homotopy cofiber of the natural map from that sheaf to F.

**Problem.** A smooth spectrum can be reconstructed from its curvature target and its homotopy-invariant approximation. Reconstruction matches their images in the homotopy-invariant approximation of the curvature target, including a path witnessing each match.

**How the definition helps.** Quotienting by the flat part gives both comparison maps the same fiber, which makes their square a homotopy pullback (our own). The approximation forces homotopic maps to act alike and preserves fiber sequences (our own). It therefore leaves the already invariant flat part unchanged (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “where both rows are homotopy fiber sequences.”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Filtering fixes curvature along paths

**Remember:** With no simplex direction, closed curvature cannot change along a simplex.

*Rules out counterexamples. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** The differential function complex describes families of cocycles on a manifold M with a simplex as parameter space. At filtration zero, the closed curvature form vanishes whenever one input points along the simplex.

**Problem.** Curvature is constant on each connected component of the filtration-zero complex. In the unrestricted complex, a path can join distinct curvatures.

**How the definition helps.** The restriction removes all parameter differentials, so closedness forces the remaining coefficients to be constant along the simplex (our own). Without the restriction, the exact form d(tf) on M × \[0,1\] joins zero to df for any nonconstant smooth function f (our own). The function tf modulo integers gives the corresponding family of degree-one differential classes (our own).

**nLab:** [differential function complex](https://ncatlab.org/nlab/show/differential+function+complex). It says: “the sub-simplicial set of differential forms that vanish when evaluated on more than s vector fields tangent to the simplex;”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Hodge pullbacks give generalized Jacobians

**Remember:** Match weighted complexification with filtered forms, keeping a path for each match.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** Let E be connective with finitely generated homotopy groups and rational homotopy concentrated in even degrees. Use the chosen weight-p comparison E → H(π\_∗E ⊗ ℂ), with its de Rham model. The Hodge pullback is its homotopy pullback along the filtered forms, retaining holomorphic degree ≥ p+j in coefficient degree 2j.

**Problem.** On a compact Kähler manifold, degree-2p Hodge-filtered classes map onto precisely the E-classes whose complex images belong to this filtration. The kernel is degree-(2p−1) complexified E-cohomology modulo the sum of the filtered subgroup and the image of E-cohomology.

**How the definition helps.** The matching condition gives the image, while the freedom to choose a matching path gives the kernel one degree lower (our own). The pullback exact sequence computes this quotient (our own). Hodge decomposition for compact Kähler manifolds identifies filtered cohomology with a subgroup of complex cohomology (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “the Hodge-filtered variant pairs instead with the Hodge filtered E• ⊗ ℂ-valued Dolbeault complexes”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### Hodge pullbacks recover Deligne cohomology

**Remember:** Quotienting out the retained forms leaves the Deligne complex.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** On a complex manifold let Ω• be the holomorphic de Rham complex and FᵖΩ• its subcomplex in degrees ≥ p. Take the homotopy pullback of (2πi)ᵖℤ → Ω• ← FᵖΩ• as complexes of sheaves. Its hypercohomology gives the weight-p pullback groups.

**Problem.** For positive integers p, this pullback computes analytic Deligne cohomology in every degree. Its usual defining complex starts with the lattice and continues through holomorphic forms of degrees zero to p−1.

**How the definition helps.** Taking the quotient by the retained forms leaves exactly the degrees below p (our own). The pullback is then the homotopy fiber of the map from the lattice to that quotient, giving the usual Deligne complex (our own). The holomorphic de Rham theorem identifies the full form complex with complex coefficients (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “reproduces the Deligne complex in its original form”

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “An alternative definition of this complex is given as the homotopy limit”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### In a cohesive ∞-topos, every differential cohomology theory has the hexagon

**Remember:** Remove the flat part to obtain curvature, then apply the shape functor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 18N60, 53C08. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a spectrum object E in a cohesive ∞-topos, define its degree-n intrinsic cohomology on X by homotopy classes of maps X → Ω∞ΣⁿE. The flat part of E is its flat coreflection, with its natural map to E. Its curvature target is the cofiber of that map.

**Problem.** Every stable homotopy type in a cohesive ∞-topos sits in a differential cohomology hexagon (Bunke, Nikolaus and Völkl). The hexagon is a diagram of two fibre sequences that link curvature, characteristic class, flat classes and forms.

**How the definition helps.** The counit from the flat part gives one fiber sequence, and applying shape gives its topological counterpart (our own explanation). Naturality relates these sequences and taking fibers supplies the deformation terms of the hexagon. The differential cohomology diagram theorem provides this construction uniformly, including the smooth-spectrum case of Bunke, Nikolaus and Völkl.

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology), [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “It is therefore natural to define differential cohomology to be the intrinsic cohomology of cohesive (∞,1)-toposes.”

**Sources:**

- [Ulrich Bunke, Thomas Nikolaus, Michael Völkl, Differential cohomology theories as sheaves of spectra, J. Homotopy Relat. Struct. 11 (2016) 1–66, arXiv:1311.3188](https://arxiv.org/abs/1311.3188)
- [James Simons, Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology, J. Topology 1 (2008) 45–56, arXiv:math/0701077](https://arxiv.org/abs/math/0701077)
- [M. J. Hopkins, I. M. Singer, Quadratic functions in geometry, topology, and M-theory, J. Differential Geom. 70 (2005) 329–452, arXiv:math/0211216](https://arxiv.org/abs/math/0211216)

### Looping lowers both filtration indices

**Remember:** Looping lowers the cohomology degree and the allowed simplex degree together.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** In the differential function complex, filtration s retains simplices whose curvature form vanishes whenever more than s arguments are tangent to the parameter simplex. Use an Ω-spectrum with compatible real cocycles, so looping its nth space recovers its (n−1)st space up to equivalence.

**Problem.** For n ≥ 1 and s ≥ 0, the degree-(n−1) complex at filtration s is weakly equivalent to loops on degree n at filtration s+1.

**How the definition helps.** A loop adds one parameter direction, which the extra filtration step allows (our own). Hopkins and Singer prove that the comparison induces isomorphisms on all homotopy groups by analyzing the filtered forms (our own).

**nLab:** [differential function complex](https://ncatlab.org/nlab/show/differential+function+complex). It says: “identifying the loop space object (at the canonical base point) of the differential function complex of Eₙ at filtration level s+1 with that differential function complex of Eₙ₋₁ at filtration level s.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Matching classes and curvature lift

**Remember:** Agreement in real cohomology guarantees a path between representatives.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a generalized cohomology theory E, a Hopkins–Singer cocycle records a representative of an E-class and a closed differential form. It also records a path joining their images in the space representing real cohomology with the real coefficients of E.

**Problem.** On a smooth manifold, an E-class and a closed form lift together to a differential E-class whenever their real classes agree.

**How the definition helps.** The definition asks for a path, and equality of real classes puts the two representatives in the same path component (our own). In the cochain description this amounts to finding a real cochain whose coboundary is their difference (our own). The de Rham comparison sends the form to its real representative by integration (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “A standard definition of differential cohomology is in terms of a homotopy pullback of a generalized (Eilenberg-Steenrod) cohomology theory with the complex of differential forms over real cohomology:”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Paths retain flat information

**Remember:** Two zero classes can still be joined by a nontrivial path.

*True by definition. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** The Hopkins–Singer construction pairs a representative of a generalized cohomology class with a closed form. Its homotopy pullback also records a path between their real representatives, which a pullback of groups discards.

**Problem.** Classes with both entries zero form a quotient of degree-(n−1) cohomology with the graded real coefficients of E. The denominator is the real image of E-cohomology in degree n−1.

**How the definition helps.** With both entries zero, a comparison path becomes a loop based at zero (our own). Such loops represent real cohomology one degree lower (our own). The pullback exact sequence identifies loops differing by the real image of an E-class (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “The characterization/construction of differential cohomology via homotopy fiber products (of mapping spectra with differential form data)”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Purity preserves curvature data

**Remember:** Only data that vanish on a point can serve as pure curvature.

*Rules out counterexamples.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A sheaf of spectra P on manifolds is pure if P(\*) is the zero spectrum. Its homotopy-invariant approximation H(P) is universal among maps from P to sheaves invariant under M × \[0,1\] → M.

**Problem.** The homotopy pullback of a pure sheaf P and a constant sheaf over the invariant approximation of P defines a differential theory. Its curvature data recover P.

**How the definition helps.** Removing the constant part preserves this pullback, kills both invariant entries and leaves the pure input P intact (our own). Proposition 3.5 identifies the resulting quotient with the curvature data (our own). If P is nonzero and constant, matching it against zero instead gives zero curvature data (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “♭-anti-modal types are called "pure”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Smooth spectra give Mayer–Vietoris sequences

**Remember:** Glue the spectra first, then take homotopy groups.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N30. arXiv math.AT. Level 4: research.

**Definition.** A smooth spectrum is a contravariant functor F from smooth manifolds to spectra satisfying descent for every open cover. Descent means F(M) is the homotopy limit of the diagram of values on all multiple intersections in the cover’s Čech nerve.

**Problem.** For a cover by two open sets, the homotopy groups form a long exact sequence relating the manifold, the two sets and their intersection.

**How the definition helps.** The sheaf condition already expresses global sections as pairs of local sections with a path matching their restrictions (our own). For spectra, this identifies global sections with the fiber of the difference of restrictions (our own). Taking homotopy groups gives exactness in every degree (our own). A model defined by geometric cocycles must first prove the gluing condition (our own).

**nLab:** [smooth spectrum](https://ncatlab.org/nlab/show/smooth+spectrum). It says: “A sheaf of spectra on the site of all smooth manifolds may be thought of as a spectrum equipped with generalized smooth structure,”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### The curvature fiber gives flat coefficients

**Remember:** For flat classes, take the fiber of realification.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** In degree n, the Hopkins–Singer construction matches E-cohomology with real differential forms and discards form degrees below n, counting coefficient degrees. Curvature sends a differential class to its closed form. A flat class has zero curvature.

**Problem.** On a smooth manifold, flat differential E-classes of degree n form the E-cohomology group with ℝ/ℤ coefficients in degree n−1.

**How the definition helps.** Setting curvature to zero in the defining pullback leaves the fiber of the map from E to its real version (our own). This fiber records a class and a path from its real image to zero (our own). The cutoff leaves no degree-(n−1) form classes, so this fiber computes the kernel (our own). In spectra, the fiber is the degree shift of the quotient defining ℝ/ℤ coefficients (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “Moreover Ê(flat)⁎ = E ℝ/ℤ•⁻¹.”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### The pullback lifts circle integration

**Remember:** Integrate both inputs and carry their comparison along.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A Hopkins–Singer cocycle records a topological cocycle, a closed form and a path matching their real representatives. In degree n the construction discards forms below total degree n.

**Problem.** Integrating around the oriented circle gives a natural map from degree n on S¹ × M to degree n−1 on M. It respects both curvature and the underlying topological class.

**How the definition helps.** Matching paths let circle integration on forms and topological suspension define a single operation on differential classes (our own). The comparison must identify the two operations on real representatives up to a specified homotopy, and integration lowers the form cutoff by one (our own).

**nLab:** [fiber integration in differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+differential+cohomology). It says: “General discussion of fiber integration for Hopkins-Singer coefficients is in (HopkinsSinger, section 4.10) and for integration over circle fibers in (Bunke-Nikolaus-Völkl 13, section 4.5).”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)
- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)

### Bordism corrections preserve curvature

**Remember:** Subtract the derivative of the correcting current to obtain smooth curvature.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A corrected cycle for smooth complex cobordism has a proper cycle map with connection on its stable complex normal bundle. Write T for the pushforward current of its characteristic form. The correction is a current α modulo exact currents such that T − dα is smooth.

**Problem.** Curvature depends only on the smooth complex cobordism class of a corrected cycle.

**How the definition helps.** Stokes’ theorem makes the change in T across a bordism the derivative of its bordism current (our own explanation). The bordism relation changes α by that current modulo exact currents. The two changes therefore cancel in T − dα.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Bordism pushforward uses pullback cycles

**Remember:** Send a character forward by pulling its test cycles back.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A differential bordism character pairs a closed curvature form with an additive ℝ/ℤ-valued function on closed geometric test cycles. For each bordism the value on its boundary equals the weighted curvature integral modulo ℤ. For a properly oriented submersion, evaluate the pushforward on each test cycle by taking its fibre product with the source.

**Problem.** For a proper submersion with compatible geometric orientation, this construction lifts the topological pushforward on the Anderson dual of bordism. This dual theory pairs cohomology classes with bordism cycles.

**How the definition helps.** Fibre products commute with taking the boundary of a test bordism (our own argument). Fibre integration of the weighted curvature therefore gives exactly the boundary value of the pulled-back cycle. The geometric pushforward theorem identifies the underlying operation with the topological Anderson-dual pushforward.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3). It says: “refines the topological pushforward map”

**Sources:**

- [Mayuko Yamashita and Kazuya Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3)

### Eta invariants fit one anomaly character

**Remember:** The eta phase and its local index form belong to one class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A degree-2k differential spin-c bordism character pairs closed curvature data with an additive phase in ℝ/ℤ on closed geometric spin-c (2k−1)-cycles. For every geometric spin-c bordism, its boundary phase equals its curvature integral modulo integers.

**Problem.** For a Hermitian bundle with unitary connection, the reduced eta phase and its local index form represent the spin-c index image in differential Anderson duality.

**How the definition helps.** The Atiyah–Patodi–Singer index theorem gives the character’s boundary rule (our own explanation). Its curvature integrand is the degree-2k part of the Chern character times the Todd form. On a closed cycle the phase is half the sum of the twisted Dirac eta invariant and kernel dimension, modulo integers. Proposition 3.52 identifies this pair with the differential spin-c index image.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2). It says: “((\\mathrm{Ch}(\\nabla ^W)\\otimes \\mathrm{Todd})\|<sub>2k</sub>, \\bar{\\eta }<sub>\\nabla ^W</sub>)= \\Phi \_{\\mathrm{ABS}}(\[W, h<sup>E</sup>, \\nabla ^E, 0\]\\otimes \\gamma \_K).”

**Sources:**

- [Mayuko Yamashita, Differential models for the Anderson dual to bordism theories and invertible QFTs, II](https://arxiv.org/abs/2110.14828v2)

### Eta invariants realize spinᶜ orientations

**Remember:** Pair the local index form with the reduced eta invariant on boundary cycles.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R15, 58J20. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A degree-2k differential spinᶜ bordism character pairs closed curvature data with an additive ℝ/ℤ-valued function on closed geometric spinᶜ (2k−1)-cycles over the base. On the boundary of every geometric bordism, its value is the integral of the corresponding curvature integrand modulo integers.

**Problem.** For a Hermitian bundle with compatible connection, the differential Atiyah–Bott–Shapiro pairing uses the total degree-2k part of the Chern character times the Todd series. Its evaluation is the twisted Dirac operator’s reduced eta invariant, a measure of spectral asymmetry that includes the kernel contribution.

**How the definition helps.** The character describes the pairing by one curvature formula and one rule for evaluating cycles (our own). The index theorem for manifolds with boundary relates these formulas modulo integers (our own). Identifying the resulting character with the pairing requires the differential orientation theorem (our own).

**Wikipedia:** [Atiyah–Bott–Shapiro orientation](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott%E2%80%93Shapiro_orientation). It says: “These represent the Â genus and the Todd genus.”

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2). It says: “(Ch(∇ᵂ) ⊗ Todd)\|₂ₖ”

**Sources:**

- [Mayuko Yamashita, Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2)

### Flat anomaly characters give the extension group

**Remember:** A topologically nontrivial flat phase does not lift to a real character.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Fix a tangential structure, meaning a chosen type of structure on tangent bundles. Let B be the group of closed (n−1)-dimensional backgrounds modulo boundaries with that structure. A flat character assigns additive values in ℝ/ℤ to B.

**Problem.** Flat characters give a subgroup of the degree n topological Anderson dual naturally isomorphic to Ext¹(B, ℤ). This group classifies abelian extensions of B by ℤ.

**How the definition helps.** The character model identifies the kernel of the map from flat characters to topological classes with phases that lift to real characters. In our own derivation, the coefficient sequence ℤ → ℝ → ℝ/ℤ identifies the quotient with Ext¹ because ℝ is divisible. Comparing the character model with the spectrum definition of Anderson duality takes a separate theorem.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3). It says: “\\mathrm{Hom}(\\Omega ^G<sub>n-1</sub>(X, Y), \\mathbb {R})\\to \\mathrm{Hom}(\\Omega ^G<sub>n-1</sub>(X, Y), \\mathbb {R}/\\mathbb {Z}) \\xrightarrow {p} (I\\Omega ^G\_{\\mathrm{dR}})<sup>n</sup>(X, Y)”

**Sources:**

- [Mayuko Yamashita and Kazuya Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFTs, I](https://arxiv.org/abs/2106.09270v3)

### Gerbe isomorphisms transport spinᶜ bordism

**Remember:** Change the twist by tensoring the cycle’s module.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R15. arXiv math.AT, math.DG. Level 4: research.

**Definition.** On a common local cover, a differential stable gerbe isomorphism identifies the two twists by compatible line bundles Kᵢ with connection. Their transition isomorphisms intertwine the gerbe multiplications and connections, and their curvatures account for the difference of the curvings.

**Problem.** A connection-preserving stable isomorphism of gerbes gives an isomorphism between their differential spinᶜ bordism groups. It preserves the maps relating cycles to forms and underlying bordism classes.

**How the definition helps.** Tensoring each local spinor module with the prescribed dual line transports its gluing to the new twist (our own explanation). The Clifford endomorphisms persist, and compatibility with the curvings preserves the corrected characteristic forms. The operation respects boundaries, and tensoring with the inverse isomorphism reverses it.

**Paper or page:** [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1). It says: “If (K, ∇ᴷ) is a differential stable isomorphism of bundle gerbes”

**Sources:**

- [Fei Han and Yuanchu Li, Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1)
- [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map, Proposition 4.7](https://bpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/4/12585/files/2025/11/2510.27286v1.pdf)

### Hodge cobordism gives Abel–Jacobi invariants

**Remember:** A vanished topological class can still leave a comparison class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14C30. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Hodge-filtered complex cobordism matches a complex cobordism cocycle with a closed filtered form by a path between their weighted complex representatives. In coefficient degree 2j, filtration p retains holomorphic degrees ≥ p+j.

**Problem.** On a smooth projective complex variety, a codimension-p algebraic cobordism class that vanishes in topological complex cobordism has an Abel–Jacobi invariant. Its target is complexified cobordism in degree 2p−1 modulo the integral image and the shifted filtration p.

**How the definition helps.** The comparison retains a class in the quotient even when the topological class vanishes (our own). The proof constructs the filtered cycle map from algebraic cobordism and identifies its topologically trivial values with elements of this quotient (our own).

**nLab:** [Center for Quantum and Topological Systems](https://ncatlab.org/nlab/show/Center+for+Quantum+and+Topological+Systems). It says: “This allows us to give a concrete description of an Abel-Jacobi type secondary invariant for topologically trivial cobordism cycles.”

**Sources:**

- [Gereon Quick, An Abel-Jacobi invariant for cobordant cycles (2016)](https://gereonq.folk.ntnu.no/AbelJacobi_Documenta.pdf)
- [Michael J. Hopkins and Gereon Quick, Hodge filtered complex bordism (2015)](https://doi.org/10.1112/jtopol/jtu021)

### Landweber base change preserves differential exactness

**Remember:** Tensor the smooth theory and its structure maps together.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A graded commutative MU\_∗-algebra R is Landweber exact if tensoring over MU\_∗ with R preserves every short exact sequence of graded MU\_∗MU-comodules.

**Problem.** On compact smooth manifolds, tensoring smooth complex cobordism with R gives a multiplicative differential extension of the corresponding cohomology theory when R is Landweber exact.

**How the definition helps.** Tensor the structure maps, including the maps on forms, with the coefficient algebra (our own outline). The Landweber exact base-change theorem for smooth complex cobordism proves the differential extension sequence remains exact on compact manifolds. The coefficient algebra multiplication induces the product.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “By tensoring with a Landweber exact ring, this induces various other differential cohomology theories, such as differential elliptic cohomology.”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Landweber exact vₙ-periodic theories all have the Bousfield class of E(n)

**Remember:** Only the height decides which spectra a Landweber exact theory kills.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P60. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p and a p-local Landweber exact BP\_∗-algebra E\_∗. For n ≥ 1 put Iₙ = (p,v₁,…,vₙ₋₁). The theory is vₙ-periodic if E\_∗/Iₙ is nonzero and vₙ acts invertibly on it.

**Problem.** For every spectrum X, its E-homology vanishes exactly when its K(m)-homology vanishes for every 0 ≤ m ≤ n. Hence E(n), Morava E-theory Eₙ and all such theories give the same localization Lₙ.

**How the definition helps.** The periodicity condition depends only on the height of the formal group, so the Bousfield class depends only on the height. One no longer checks each theory separately. The work moves to Hovey's comparison of E with the Johnson–Wilson theory E(n) through Landweber's filtration of comodules.

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “Let E∗ be Landweber exact and vₙ–periodic. A spectrum is E∗–acyclic if and only if it is K(m)∗–acyclic for 0 ≤ m ≤ n.”

**Sources:**

- [M. Hovey, Bousfield localization functors and Hopkins' chromatic splitting conjecture, Contemporary Mathematics 181 (1995) 225–250](https://doi.org/10.1090/conm/181/02036)
- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### Morava's change of rings turns chromatic Ext groups into group cohomology

**Remember:** At height h, remember the formal group’s automorphisms and its field symmetries.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55T25. arXiv math.AT. Level 4: research.

**Definition.** At a prime p and height h ≥ 1, take the Honda formal group over 𝔽ₚʰ. Its extended stabilizer group 𝔾ₕ combines its automorphisms with Gal(𝔽ₚʰ/𝔽ₚ) by semidirect product. A BP\_∗BP-comodule is Iₕ-nilpotent if each element is killed by some power of Iₕ = (p,v₁,…,vₕ₋₁).

**Problem.** For an Iₕ-nilpotent comodule M, Ext over BP\_∗BP from BP\_∗ to vₕ⁻¹M is continuous 𝔾ₕ-cohomology with coefficients Eₕ\_∗ ⊗BP∗ M.

**How the definition helps.** The stabilizer records the symmetries of the height-h formal group, so it supplies the group acting on the changed coefficients (our own explanation). Morava’s change-of-rings theorem identifies the localized comodule Ext groups with that continuous group cohomology.

**nLab:** [Morava stabilizer group](https://ncatlab.org/nlab/show/Morava+stabilizer+group). It says: “This is called the Morava stabilizer group.”

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “Let M be a BP∗BP-comodule that is Iₕ=(p,v₁,⋯,vₕ₋₁)-nilpotent. Then there is a natural isomorphism”

**Sources:**

- [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality, arXiv:2203.09455](https://arxiv.org/abs/2203.09455)

### The only invariant prime ideals of BP are the height ideals

**Remember:** Prime ideals that survive every coordinate change are the height loci.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p. A homogeneous ideal J of BP\_∗ is invariant if the BP\_∗BP-coaction on BP\_∗ restricts to a coaction on J. Set Iₙ = (p,v₁,…,vₙ₋₁) for n ≥ 1.

**Problem.** At a prime p, the invariant prime ideals of BP\* are 0, the ideals (p, v₁, …, vₙ₋₁) for n ≥ 1, and their union. So Landweber's exactness test needs to check only these ideals.

**How the definition helps.** Invariance asks that an ideal not depend on coordinates, and the height ideals qualify because height does not depend on coordinates. So invariant ideals cut out closed pieces of the moduli stack of p-typical formal groups. The theorem says there are no other primes, so the irreducible closed pieces are the loci of height at least n. Landweber's proof, with the generators vᵢ of Hazewinkel or Araki, carries the work.

**Wikipedia:** [Landweber exact functor theorem](https://en.wikipedia.org/wiki/Landweber_exact_functor_theorem). It says: “the only prime ideals of BP∗ which are invariant under coaction of BP∗BP are the Iₙ = (p,v₁,…, vₙ).”

**Sources:**

- [P. S. Landweber, Homological properties of comodules over MU\*(MU) and BP\*(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### The p-series makes Morava E-theory of BCₚ free of rank pⁿ

**Remember:** Cohomology of BCₚ is power series modulo the p-series.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55R35. arXiv math.AT. Level 4: research.

**Definition.** For a prime p, the p-series of a one-dimensional formal group law F adds its variable to itself p times using F. Over a local ring of residue characteristic p, the special fibre has height n if the reduced p-series starts in degree pⁿ.

**Problem.** For Morava E-theory at height n, Eₙ\*(BCₚ) ≅ Eₙ\*\[\[y\]\]/(\[p\](y)) is free of rank pⁿ over Eₙ\*. Similarly K(n)\*(BCₚ) is K(n)\*\[y\] modulo y to the power pⁿ.

**How the definition helps.** Height is the degree pⁿ of the leading term of \[p\](y), and this degree is exactly the rank. The Gysin sequence gives E\*(BCₚ) as E\*\[\[y\]\] modulo \[p\](y), the Euler class of the p-th tensor power of the universal line bundle (our own outline). Weierstrass preparation then writes \[p\](y) as a unit times a monic polynomial of degree pⁿ. The work moves to the Gysin sequence and to Weierstrass preparation over the complete local ring Eₙ\*.

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022), [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “If A is a finite abelian p-group, then Eₙ\*(BA) is a free Eₙ\*–module of rank \|A\|ⁿ”

**Sources:**

- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### The universal property of the Lubin–Tate ring makes the stabilizer group act

**Remember:** Universal objects are acted on by every symmetry of what they deform.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Fix a finite-height formal group f over a perfect field k of characteristic p. A deformation over a complete local ring with residue field k is a formal group together with an identification of its special fibre with f. The Lubin–Tate ring represents isomorphism classes of deformations, where isomorphisms respect the chosen identification.

**Problem.** The automorphism group of f acts on the Lubin–Tate ring by ring maps. Through the Landweber exact functor theorem it acts on the homology theory given by Morava E-theory Eₙ.

**How the definition helps.** Postcomposing the special-fibre identification with a symmetry of f acts on deformation classes (our own explanation). Representability converts these operations into ring automorphisms, using inverses to pass between right and left actions. Their isomorphisms of universal deformations act on the periodic coefficients, and Landweber’s construction induces the homology operations.

**nLab:** [Lubin-Tate theory](https://ncatlab.org/nlab/show/Lubin-Tate+theory). It says: “The Lubin-Tate formal group f̄ is the universal deformation of f in that for every infinitesimal thickening A of k, f̄ induces a bijection”

**Sources:**

- [P. G. Goerss, M. J. Hopkins, Moduli spaces of commutative ring spectra, in Structured Ring Spectra, Cambridge University Press (2004)](https://doi.org/10.1017/cbo9780511529955.009)

### Transversality allows correction current pullback

**Remember:** Keep singular directions away from the pullback map’s normal directions.

*Rules out counterexamples. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77, 58A25. arXiv math.AT, math.DG. Level 4: research.

**Definition.** For a smooth cycle map f, its normal covectors are nonzero covectors ξ at f(x) with ξ ∘ dfₓ = 0 for some x. Choose a correcting current whose wavefront set lies in these normal covectors.

**Problem.** Every smooth map transverse to the cycle map can pull back the chosen correcting current.

**How the definition helps.** Transversality keeps singular directions away from covectors that annihilate the derivative of the pullback map (our own). The distribution pullback theorem then applies (our own). A step function at its jump illustrates why arbitrary currents lack a canonical restriction (our own). The paper constructs the required representative by changing the current by an exact current.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### q-tame modules keep diagram stability without pointwise finite dimension

**Remember:** Ask for finite rank of maps, not finite dimension of spaces.

*Makes the theorem clean to state or prove.* MSC 55N31 (Persistent homology and applications, topological data analysis). arXiv math.AT. Level 4: research.

**Definition.** A real-indexed persistence module over a field is a family of vector spaces with compatible linear maps for s ≤ t. It is q-tame if the map for every s &lt; t has finite rank.

**Problem.** Two δ-interleaved q-tame persistence modules have persistence diagrams with a δ-matching. So the bottleneck distance between their diagrams is at most δ.

**How the definition helps.** Finite ranks across separated parameters give the off-diagonal counts needed to define the persistence diagram (our own explanation). The algebraic stability theorem for q-tame persistence modules converts a δ-interleaving into the stated δ-matching. This matching bounds the bottleneck distance by definition.

**Paper or page:** [Persistent Stanley–Reisner Theory](https://arxiv.org/abs/2503.23482). It says: “Let 𝕌 and 𝕍 be q-tame persistence modules that are δ-interleaved. Then there exists a δ-matching between the multisets dgm(𝕌) and dgm(𝕍).”

**Sources:**

- [Persistent Stanley–Reisner Theory, arXiv:2503.23482 (2025)](https://arxiv.org/abs/2503.23482)
- [Frédéric Chazal, David Cohen-Steiner, Marc Glisse, Leonidas Guibas, Steve Oudot, Proximity of persistence modules and their diagrams, Proc. 25th Symposium on Computational Geometry (2009) 237–246](https://doi.org/10.1145/1542362.1542407)
- [Frédéric Chazal, Vin de Silva, Marc Glisse, Steve Oudot, Persistence modules, in The Structure and Stability of Persistence Modules, SpringerBriefs in Mathematics (2016) 15–29](https://doi.org/10.1007/978-3-319-42545-0_2)

### Grading Bredon cohomology by representations restores equivariant Poincaré duality

**Remember:** A G-manifold sits inside a representation, so grade by representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** An RO(G)-graded theory has groups indexed by formal differences of finite-dimensional real G-representations. For each representation V, smashing the input with its one-point compactification Sⱽ gives a suspension isomorphism shifting degree by V.

**Problem.** Let G be finite and M a closed smooth G-manifold with a tangent bundle oriented in Bredon cohomology of fixed representation degree V. Equivariant Poincaré duality with the given Mackey functor coefficients exchanges cohomological degree α with homological degree V−α.

**How the definition helps.** The representation grading accommodates the degree V of the equivariant fundamental class (our own explanation). Equivariant Atiyah duality uses the stable normal bundle of an equivariant embedding. The orientation supplies the Thom isomorphism that converts this bundle shift into the displayed representation shift.

**nLab:** [equivariant cohomology](https://ncatlab.org/nlab/show/equivariant+cohomology), [RO(G)-grading](https://ncatlab.org/nlab/show/RO%28G%29-grading). It says: “It would also be nice to have a Poincare duality theorem for G-manifolds, but that fails with these theories. The solution people have come up with is to widen the notion of "looping" and "delooping" and thereby the grading”

**Sources:**

- [J. Peter May et al., Equivariant Homotopy and Cohomology Theory, CBMS Regional Conference Series in Mathematics 91, AMS (1996)](https://doi.org/10.1090/cbms/091)

### Defining stabilization as a limit makes it commute with functor categories

**Remember:** Loops in a functor category are taken pointwise, so stabilize pointwise.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18N60. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let D be an ∞-category with finite limits, and let D∗ be its ∞-category of pointed objects. The stabilization Stab(D) is the limit of the tower ⋯ → D∗ → D∗ whose maps are the loop functor Ω. For D the ∞-category of spaces, Stab(D) is the ∞-category of spectra.

**Problem.** For an ∞-category C and an ∞-category D with finite limits, Stab(Fun(C, D)) is equivalent to Fun(C, Stab(D)). In particular, the stabilization of presheaves of spaces on C is the ∞-category of presheaves of spectra on C.

**How the definition helps.** With stabilization defined as a limit, the theorem says only that limits commute with Fun(C, −). The loop functor on Fun(C, D) is computed objectwise, so its tower is Fun(C, −) applied to the tower for D (our own). The functor Fun(C, −) preserves limits of ∞-categories, so the equivalence follows (our own). With spectra defined by a model category, such as presheaves of Bousfield–Friedlander spectra, the same statement needs a comparison of model structures (our own).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “Its stabilization is equivalent to the functor category into the stabilization of D”

**Sources:**

- [Jacob Lurie, Stable infinity categories, arXiv:math/0608228, Example 10.13](https://arxiv.org/abs/math/0608228) (link not checked)

### Duality over a ring spectrum makes Poincaré duality hold for oriented theories

**Remember:** Atiyah duality plus a Thom isomorphism gives Poincaré duality in any oriented theory.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 55N20. arXiv math.AT. Level 4: research.

**Definition.** For a commutative ring spectrum R, the R-dual of an R-module N is the function module Fᴿ(N,R). An R-orientation of a rank-r normal bundle is a degree-r Thom class restricting to an R-generator on every fibre.

**Problem.** If a closed smooth n-manifold M has an R-orientation of its normal bundle, then the R-dual of R ∧ M₊ is R ∧ Σ⁻ⁿM₊. Taking homotopy groups gives Poincaré duality Rᵏ(M) ≅ Rₙ₋ₖ(M).

**How the definition helps.** Atiyah duality identifies the R-dual with the R-module of the stable normal Thom spectrum (our own explanation). The chosen orientation gives its Thom equivalence after smashing with R, producing the shift by −n. Taking π₋ₖ reads the dual as Rᵏ(M) and the shifted module as Rₙ₋ₖ(M).

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “In that case Th(N X) -- the Thom spectrum of its stable normal bundle is the corresponding dual object.”

**Paper or page:** [Homotopy theory of modules over a commutative S-algebra: some tools and examples](https://arxiv.org/abs/2003.12003). It says: “Suppose that M is a compact closed smooth n-manifold whose normal bundle admits an orientation in R-cohomology. Then R∧M₊ is a stably Spanier-Whitehead self R-module and D<sub>R</sub>(R∧M₊) ∼ R∧Σ⁻ⁿ(M₊).”

**Sources:**

- [Michael F. Atiyah, Thom complexes, Proceedings of the London Mathematical Society (3) 11 (1961) 291–310](https://doi.org/10.1112/plms/s3-11.1.291)
- [Homotopy theory of modules over a commutative S-algebra: some tools and examples, arXiv:2003.12003](https://arxiv.org/abs/2003.12003)

### Excisive-functor spectra give Mayer–Vietoris sequences on finite pointed spaces

**Remember:** The excision axiom turns a pushout into a pullback before taking homotopy groups.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P65. arXiv math.AT. Level 4: research.

**Definition.** A spectrum can be modeled by a functor from finite pointed homotopy types to spaces that sends the point to a contractible space. It must send every homotopy pushout square to a homotopy pullback square.

**Problem.** For a pushout of finite pointed homotopy types, the functor gives a pullback square of values. The associated spectrum-valued functor gives a Mayer–Vietoris long exact sequence of homotopy groups.

**How the definition helps.** Applying excision to the suspension square gives E(X) ≃ ΩE(ΣX), so the values on successive suspensions form a spectrum (our own explanation). Each suspension preserves pushouts, and excision gives a pullback at every level. The assembled pullback of spectra gives the Mayer–Vietoris sequence on homotopy groups.

**nLab:** [excisive (∞,1)-functor](https://ncatlab.org/nlab/show/excisive+%28%E2%88%9E%2C1%29-functor). It says: “then excisive functors that send the point to the point (up to equivalence) are still equivalent to spectra (spectrum objects)”

**Sources:** none listed. No primary source with a working link was found.

### Finite homotopy groups make Brown–Comenetz double duality an equivalence

**Remember:** Pontryagin duality is perfect on finite groups, so the double dual returns.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 4: research.

**Definition.** The Brown–Comenetz dual of a spectrum X is the function spectrum IX = F(X, I), where I is the Brown–Comenetz spectrum. Its homotopy groups are πₙ(IX) ≅ Hom(π₋ₙX, ℚ/ℤ), the Pontryagin duals of the homotopy groups of X. There is a natural double-duality map X → I(IX).

**Problem.** If every stable homotopy group of a spectrum X is finite, then the double-duality map X → I(IX) is an equivalence.

**How the definition helps.** On homotopy groups the double-duality map is the Pontryagin double-dual map A → Hom(Hom(A, ℚ/ℤ), ℚ/ℤ), which is an isomorphism for finite A (our own). For A = ℤ this map goes into the profinite integers ℤ̂ and is not onto (our own). So the Eilenberg–MacLane spectrum Hℤ is not equivalent to its double dual, and the finiteness condition removes this failure (our own). The work is classical Pontryagin duality for finite abelian groups.

**nLab:** [Brown-Comenetz duality](https://ncatlab.org/nlab/show/Brown-Comenetz+duality). It says: “If X is a spectrum whose stable homotopy groups are finite groups, then the natural "double-duality" map X → I\_ℚ/ℤ I\_ℚ/ℤ X (the unit of the corresponding continuation monad) is an equivalence”

**Sources:**

- [Edgar H. Brown and Michael Comenetz, Pontrjagin duality for generalized homology and cohomology theories, American Journal of Mathematics 98 (1976) 1–27](https://doi.org/10.2307/2373610)

### Injectivity of ℚ/ℤ makes the Brown–Comenetz spectrum exist

**Remember:** An injective target keeps exactness, so Brown representability gives the dual spectrum.

*Rules out counterexamples.* MSC 55P42 (Stable homotopy theory, spectra), 55N20. arXiv math.AT. Level 4: research.

**Definition.** An abelian group A is injective if Hom(−, A) sends every short exact sequence to a short exact sequence with arrows reversed (our own).

**Problem.** For an injective group such as ℚ/ℤ, the functor X ↦ Hom(π₀X, ℚ/ℤ) is represented by a spectrum I. Then \[X, ΣⁿI\] ≅ Hom(πₙX, ℚ/ℤ) for every integer n.

**How the definition helps.** The group ℚ/ℤ is divisible and hence injective, so dualizing the homotopy sequence preserves exactness (our own). Wedges give products because homotopy groups take wedges to direct sums (our own). Brown representability gives I, and shifting X gives the stated formula (our own). Multiplication by two on ℤ shows why dualizing into ℤ can lose surjectivity (our own).

**nLab:** [Brown-Comenetz duality](https://ncatlab.org/nlab/show/Brown-Comenetz+duality). It says: “Brown-Comenetz 76 introduced the spectrum I\_ℚ/ℤ which represents the cohomology theory that assigns to a spectrum X the algebraic Pontrjagin duals Hom\_ℤ(π₋⋆X, ℚ/ℤ) of its homotopy groups with respect to ℚ/ℤ.”

**Sources:**

- [Edgar H. Brown and Michael Comenetz, Pontrjagin duality for generalized homology and cohomology theories, American Journal of Mathematics 98 (1976) 1–27](https://doi.org/10.2307/2373610)

### Pre-excisive functors give a symmetric monoidal smash product almost for free

**Remember:** Index by all finite complexes, not just spheres, and smash products come free.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A pre-excisive functor is a pointed, topologically enriched functor from finite pointed CW complexes to pointed spaces. Enrichment means its action on each mapping space is continuous (our own).

**Problem.** Day convolution gives pre-excisive functors a closed symmetric monoidal smash product, with unit the sphere functor 𝕊. Restricting to sequential spectra loses this symmetric monoidal product.

**How the definition helps.** Day’s convolution theorem gives the enriched functor category a closed symmetric monoidal product (our own). Its unit is the functor represented by S⁰, which sends each complex to itself (our own). Sequential spectra lack this indexing category with its smash product (our own).

**nLab:** [model structure on orthogonal spectra](https://ncatlab.org/nlab/show/model+structure+on+orthogonal+spectra), [Introduction to Stable homotopy theory -- 1-2](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-2), [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra). It says: “We consider an almost tautological construction of a pointed topologically enriched category equipped with a closed symmetric monoidal product: the category of pre-excisive functors.”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)

### Spanier–Whitehead duality turns representability of cohomology into representability of homology

**Remember:** Dualize the input, and a homology theory becomes a cohomology theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P25. arXiv math.AT. Level 4: research.

**Definition.** The Spanier–Whitehead dual of a finite spectrum X is the function spectrum F(X, S), where S is the sphere spectrum (our own).

**Problem.** Every reduced generalized homology theory h on finite pointed CW complexes has a representing spectrum E (Adams). Thus hₙ(X) ≅ πₙ(E ∧ X) naturally in finite pointed X.

**How the definition helps.** Through D, the functor Y ↦ h₋ₙ(DY) is a cohomology theory on finite spectra, so homology representability becomes cohomology representability (our own). If that theory is \[−, ΣⁿE\], then hₙ(X) ≅ \[DX, Σ⁻ⁿE\] ≅ πₙ(E ∧ X) for finite X (our own). Plain Brown representability needs infinite wedges, which finite spectra lack, so the nLab's short derivation hides a step (our own). The work moves into Adams' variant of Brown's theorem for functors defined only on finite complexes.

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “But by way of Spanier-Whitehead duality it implies at least over finite CW-complexes that dually every additive generalized homology theory E<sub>•</sub> is representable by a spectrum E”

**Sources:**

- [J. Frank Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

### The loop-tower definition of stabilization makes looping invertible

**Remember:** In a tower of loop objects, moving one place undoes looping.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 18N60. arXiv math.AT. Level 4: research.

**Definition.** For a pointed ∞-category C with finite limits, its stabilization is the limit of the tower with every transition given by Ω. Its objects are sequences with equivalences Xₙ ≃ ΩXₙ₊₁ for every n ≥ 0 (our own).

**Problem.** The loop functor on the stabilization is an equivalence. Its inverse sends X₀, X₁, … to X₁, X₂, ….

**How the definition helps.** Loops act entry by entry because limits in the tower are computed there (our own). The equivalences Xₙ ≃ ΩXₙ₊₁ identify both composites of looping and shifting with the identity (our own).

**nLab:** [stabilization](https://ncatlab.org/nlab/show/stabilization). It says: “The stabilization Stab(C) of C is the (∞,1)-limit (in the (∞,1)-category of (∞,1)-categories) of the tower of applications of the loop space functor”

**Sources:** none listed. No primary source with a working link was found.

### Commutative S-algebras make the smash product the coproduct of E∞ rings

**Remember:** A commutative S-algebra is a commutative monoid under smash product.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A commutative S-algebra is a commutative monoid in S-modules under their smash product. It has a unit and an associative, commutative multiplication satisfying the unit laws (our own).

**Problem.** Let A and B be commutative S-algebras under a commutative S-algebra R. Then A ∧ B over R is their coproduct in commutative R-algebras. For cofibrant inputs it is also the homotopy pushout of E∞ rings.

**How the definition helps.** Maps from A and B to a commutative R-algebra combine uniquely by multiplication into a map from their relative smash product (our own). This gives the coproduct property, and cofibrant R-algebras compute the derived coproduct (our own).

**Wikipedia:** [Highly structured ring spectrum](https://en.wikipedia.org/wiki/Highly_structured_ring_spectrum). It says: “Therefore, is it possible to define A<sub>∞</sub>-ring spectra and E<sub>∞</sub>-ring spectra as (commutative) monoids in the category of S-modules, so called (commutative) S-algebras.”

**Sources:**

- [A. D. Elmendorf, I. Kriz, M. A. Mandell and J. P. May, Rings, Modules, and Algebras in Stable Homotopy Theory, Mathematical Surveys and Monographs 47, American Mathematical Society (1997)](https://doi.org/10.1090/surv/047)

### Defining K-theory of ring spectra through perfect modules makes it Morita invariant

**Remember:** K-theory sees only the module category, so Morita equivalent rings agree.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 19D10. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a ring spectrum R, define K(R) as the algebraic K-theory of Perf(R). This full subcategory of R-modules consists of the compact objects.

**Problem.** If ring spectra R and R′ have equivalent module ∞-categories, then K(R) ≃ K(R′). For example, K(R) ≃ K(End(P)) for each compact generator P of Mod(R), such as Rⁿ with its matrix ring.

**How the definition helps.** An equivalence of module ∞-categories preserves compact objects and therefore restricts to an equivalence of their perfect subcategories (our own). Functoriality of K-theory gives the result, and Schwede–Shipley Morita theory supplies the endomorphism-ring example (our own).

**Wikipedia:** [Module spectrum](https://en.wikipedia.org/wiki/Module_spectrum). It says: “Lurie defines the K-theory of a ring spectrum R to be the K-theory of the ∞-category of perfect modules over R (a perfect module being defined as a compact object in the ∞-category of module spectra).”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geometry &amp; Topology 17 (2013) 733–838](https://doi.org/10.2140/gt.2013.17.733)
- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Defining orientations as trivializations makes universal orientations into ring maps

**Remember:** Trivialize the spherical bundle after extending its units to R, through maps of spectra.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N22, 55R25. arXiv math.AT. Level 4: research.

**Definition.** Let f be a map bg → Σgl₁(S) of connective spectra inducing the spherical bundle on BG. An E∞ R-orientation of f is a null-homotopy of bg → Σgl₁(S) → Σgl₁(R) (our own).

**Problem.** Let G → O be a map of groups that deloops to a map of spectra, as for SO, Spin, String and U. Then E∞ R-orientations correspond to E∞ ring maps from the Thom spectrum MG to R.

**How the definition helps.** The Thom spectrum’s universal property identifies E∞ maps MG → R with trivializations of the induced R-line bundle respecting infinite loop structures (our own). The units adjunction identifies these trivializations with the defining null-homotopies (our own).

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “If here G → GL₁(𝕊) is the Ω<sup>∞</sup>-component of a map of spectra then this σ is a homomorphism of E-∞ rings and in this case there is a bijection between universal orientations and such E∞-ring homomorphisms”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### E₂ Thom spectra make H𝔽ₚ the free E₂ ring with p zero

**Remember:** Extend the loop for one minus p twice multiplicatively, then take its Thom spectrum.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R25. arXiv math.AT. Level 4: research.

**Definition.** For a prime p, let f be the double loop map Ω²S³ → BGL₁(Sₚ^) extending the loop representing 1 − p. Here Sₚ^ denotes the p-complete sphere, and Mf is the colimit of the Sₚ<sup>-lines</sup> classified by f (our own).

**Problem.** This E₂ Thom spectrum is the Eilenberg–MacLane spectrum H𝔽ₚ (Hopkins–Mahowald). Equivalently, H𝔽ₚ is the free E₂ ring over the p-complete sphere on a null-homotopy of p.

**How the definition helps.** The free double loop space on S¹ is Ω²S³ (our own). The Thom universal property identifies maps from Mf with choices of null-homotopy of p in the target. The Hopkins–Mahowald theorem identifies Mf with H𝔽ₚ (our own).

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “For all 𝔼₂-W⁺(k)-algebras A, the mapping space Map\_{Alg<sub>W⁺(k)</sub><sup>𝔼₂</sup>}(M f<sub>k,pu</sub>, A) could be naturally identified with the space of null-homotopies of the composite map W⁺(k) →m<sub>pu</sub> W⁺(k) →η A”

**Sources:**

- [Mark Mahowald, Ring spectra which are Thom complexes, Duke Mathematical Journal 46 (1979) 549–559](https://doi.org/10.1215/S0012-7094-79-04628-3)

### E∞ cochains determine finite type nilpotent spaces up to weak equivalence

**Remember:** Remember the higher homotopies of the cup product, and you remember the space.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P15. arXiv math.AT. Level 4: research.

**Definition.** An E∞ cochain algebra is a cochain complex with an action of a chosen E∞ chain operad (our own). One can use normalized chains on the Barratt–Eccles operad, whose arity-n space is contractible with free symmetric-group action (our own).

**Problem.** Finite type nilpotent spaces X and Y are weakly equivalent if and only if their E∞ cochain algebras over ℤ are quasi-isomorphic (Mandell).

**How the definition helps.** The E∞ structure keeps the Steenrod operations, which cohomology rings forget, so a complete integral invariant becomes possible to state. For example, ΣℂP² and S³ ∨ S⁵ have isomorphic cohomology rings but differ by Sq² (our own). The work went into Mandell's earlier p-adic theorem for E∞ algebras over the algebraic closure of 𝔽ₚ. An arithmetic square then glues the primes and the rational case (our own summary).

**nLab:** [E-infinity algebra](https://ncatlab.org/nlab/show/E-infinity+algebra). It says: “Finite type nilpotent spaces X and Y are weakly homotopy equivalent if and only if the E∞-algebras C<sup>\*</sup>(X,ℤ) and C<sup>\*</sup>(Y,ℤ) are quasi-isomorphic.”

**Sources:**

- [Michael A. Mandell, Cochains and homotopy type, Publications Mathématiques de l'IHÉS 103 (2006) 213–246](https://doi.org/10.1007/s10240-006-0037-6)

### E∞-ring spectra let elliptic cohomology theories glue into tmf

**Remember:** Use commutative ring spectra so compatible local theories have a homotopy limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N34, 18N70. arXiv math.AT, math.AG. Level 4: research.

**Definition.** An E∞-ring spectrum is a commutative algebra object in the symmetric monoidal ∞-category of spectra under smash product (our own).

**Problem.** On the smooth elliptic moduli stack, the presheaf of elliptic cohomology theories on flat charts lifts to a sheaf of E∞-ring spectra. This lift is unique up to homotopy by Goerss–Hopkins–Miller. Its global sections give periodic topological modular forms.

**How the definition helps.** Global sections of a sheaf of E∞-rings are a limit in E∞-rings (our own). Goerss–Hopkins–Miller supplies the sheaf, whose sections over smooth elliptic curves give periodic TMF (our own). Sections over the compactification give Tmf, whose connective cover is tmf (our own).

**nLab:** [A Survey of Elliptic Cohomology - E-infinity rings and derived schemes](https://ncatlab.org/nlab/show/A+Survey+of+Elliptic+Cohomology+-+E-infinity+rings+and+derived+schemes). It says: “To get a single cohomology theory from that we want to take global sections, but there is no good way to say what a global section of a cohomology-theoy valued functor would be.”

**Sources:**

- [Paul G. Goerss, Topological modular forms (after Hopkins, Miller, and Lurie), Séminaire Bourbaki, 2009, arXiv:0910.5130](https://arxiv.org/abs/0910.5130)

### Faithful Galois extensions of ring spectra survive every base change

**Remember:** Faithful means extension to B detects every nonzero module.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)). arXiv math.AT. Level 4: research.

**Definition.** Let A → B be a finite G-Galois extension. It is faithful if B ∧ₐ M ≃ 0 implies M ≃ 0 for every A-module M (our own).

**Problem.** Let A → B be a faithful G-Galois extension and A → A′ any map of E∞ rings. Then A′ → A′ ∧ B over A is again a faithful G-Galois extension.

**How the definition helps.** After extension to B, the Galois product equivalence splits the descent diagram, and dualizability lets extension to B preserve its limit (our own). Faithfulness detects the resulting equivalence before extension, including after base change (our own). Without faithfulness, base change from C∗(BC₂; 𝔽₂) to its Tate ring kills the covering algebra 𝔽₂ (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “G-Galois extensions are stable under dualizable base-change. Faithful G-Galois extensions are stable under arbitrary base-change.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Faithfulness makes Galois descent hold and excludes cochains on BG

**Remember:** Faithful means only the zero module becomes zero after extension to B.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 20C20. arXiv math.AT, math.RT. Level 4: research.

**Definition.** Let A → B be a finite G-Galois extension. It is faithful if B ∧ₐ M ≃ 0 implies M ≃ 0 for every A-module M (our own).

**Problem.** For a faithful G-Galois extension A → B, A-modules are the same as B-modules with a homotopy-coherent semilinear G-action. In symbols, Mod(A) is the homotopy fixed points of G acting on Mod(B).

**How the definition helps.** Faithfulness makes extension to B detect equivalences, as descent requires (our own). Mathew’s descendability theorem gives module descent, and the Galois equivalences identify its diagram with the group action diagram (our own). Cochains on BC₂ over 𝔽₂ fail faithfulness because their nonzero Tate module becomes zero over 𝔽₂ (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If f : R → S is a faithful G-Galois extension of 𝔼<sub>∞</sub>-rings, then we have a natural equivalence of ∞-categories Mod(R) ≃ Mod(S)<sup>hG</sup>.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)
- [Akhil Mathew, The Galois group of a stable homotopy theory, Advances in Mathematics 291 (2016) 403–541](https://doi.org/10.1016/j.aim.2015.12.017)

### Picard spectra let Galois descent compute Picard groups of ring spectra

**Remember:** Make Pic a spectrum, then descend it like any limit.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For an E∞ ring A, pic(A) is the connective spectrum corresponding to the grouplike E∞-space of invertible A-modules and their equivalences (our own). The group operation comes from tensor product over A (our own).

**Problem.** For a faithful finite G-Galois extension A → B, pic(A) is the connective cover of pic(B)ʰᴳ. Under strong convergence, its homotopy fixed-point spectral sequence from Hˢ(G; πₜpic(B)) computes Pic(A) in total degree zero.

**How the definition helps.** The Picard spectrum is a functor of the symmetric monoidal module category that preserves limits, so descent for modules passes straight to Picard spectra. The homotopy fixed-point spectral sequence then applies, as to any homotopy limit. The work went into the descent theorem for modules and into computing differentials, which the source compares with those for A itself. Applied to KO → KU, this method gives Pic(KO) ≅ ℤ/8 (our own summary of Mathew and Stojanoska).

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If A → B is a faithful G-Galois extension of 𝔼<sub>∞</sub>-ring spectra, then there is a natural equivalence of symmetric monoidal ∞-categories: Mod(A) ≃ (Mod(B))<sup>hG</sup>”

**Sources:**

- [Akhil Mathew and Vesna Stojanoska, The Picard group of topological modular forms via descent theory, Geometry &amp; Topology 20 (2016) 3133–3217](https://doi.org/10.2140/gt.2016.20.3133)

### Principal bundles give Galois extensions of cochain ring spectra

**Remember:** Take homotopy fixed points downstairs and split the relative smash into group-indexed copies upstairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R20. arXiv math.AT. Level 4: research.

**Definition.** Let Γ be a finite group acting on a commutative A-algebra B in spectra. The extension is Γ-Galois if A → BʰΓ and B ∧ₐ B → ∏<sub>g∈Γ</sub> B are equivalences (our own). The g-component multiplies the first factor by the g-transformed second factor (our own).

**Problem.** Let P → X be a principal Γ-bundle, with Γ finite and X path-connected. Suppose π₁(X) acts nilpotently on the homology of the fibre, the group ring k\[Γ\]. Then the map of cochain rings F(X₊, k) → F(P₊, k) is a Γ-Galois extension.

**How the definition helps.** The definition asks only for equivalences of cochain spectra, which a covering space supplies even when cohomology rings fail to be Galois (our own). The fixed-point condition holds because Γ acts freely on P with quotient X. The product condition holds because P fibred with itself over X is Γ copies of P. The Eilenberg–Moore theorem, which needs the nilpotence condition, turns this pullback into a smash product (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “Let Γ be a finite discrete group, and P → X a principal Γ-bundle. Suppose that X is path-connected and π<sub>1</sub>(X) acts nilpotently on H\_\*(Γ;k). Then the map of cochain k-algebras F(X\_+,k) → F(P\_+,k) is a Γ-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Profinite Galois extensions make Morava E-theory Galois over the K(n)-local sphere

**Remember:** Build from finite Galois quotients, take their colimit, then localize.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A K(n)-local profinite G-Galois extension is a compatible filtered system of faithful G/U-Galois extensions of A for open normal subgroups U of G (our own). Its target B is the K(n)-localization of their colimit (our own).

**Problem.** The unit map from the K(n)-local sphere to Morava E-theory Eₙ is a K(n)-local profinite Galois extension. The group is the Morava stabilizer group 𝔾ₙ, acting by the Goerss–Hopkins–Miller action.

**How the definition helps.** The definition turns the Devinatz–Hopkins fixed-point spectra into the data of one Galois extension, so their results become a single statement. The work went into the Devinatz–Hopkins construction of homotopy fixed points of Eₙ for closed subgroups of 𝔾ₙ. It also needs their proof that the fixed points of all of 𝔾ₙ form the K(n)-local sphere. In this form, the source computes Picard and Brauer groups by profinite Galois descent.

**Paper or page:** [Picard and Brauer groups of K(n)-local spectra via profinite Galois descent](https://arxiv.org/abs/2306.05393v2). It says: “The unit L<sub>K(h)</sub> 𝕊 → E<sub>h</sub> is a K(h)-local profinite Galois extension for the Goerss-Hopkins-Miller action of 𝔾<sub>h</sub>.”

**Sources:**

- [Ethan S. Devinatz and Michael J. Hopkins, Homotopy fixed point spectra for closed subgroups of the Morava stabilizer groups, Topology 43 (2004) 1–47](https://doi.org/10.1016/S0040-9383(03)00029-6)
- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Ring spectra let one compact generator make a stable category modules

**Remember:** Mapping out preserves sums, and all shifts together detect zero.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55U35, 18G80. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A compact generator P of a stable model category is an object for which \[P, −\] preserves arbitrary coproducts in its homotopy category (our own). For every X, if \[ΣⁿP, X\] vanishes for every integer n, then X is zero there (our own).

**Problem.** Let a stable model category be simplicial, cofibrantly generated and proper, with one compact generator P. Then it is Quillen equivalent to the category of modules over the ring spectrum End(P) (Schwede–Shipley).

**How the definition helps.** Ring spectra let the endomorphisms of P have homotopy in every degree, so the theorem needs no condition on those degrees. Rickard's Morita theory for rings needs a tilting complex, whose graded ring of self-maps lies in degree zero. The work went into Schwede and Shipley's construction of mapping spectra in a model category, which makes End(P) a ring spectrum.

**nLab:** [stable model category](https://ncatlab.org/nlab/show/stable+model+category), [derived Morita equivalence](https://ncatlab.org/nlab/show/derived+Morita+equivalence). It says: “there is just one compact generator P ∈ 𝒞, then there is a one-object Sp-enriched category, hence an A-infinity algebra A, which is the endomorphisms A ≃ End\_𝒞(P), and the stable model category is its category of modules”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Rognes's Galois extensions make KO → KU a Galois extension

**Remember:** Recover the base by fixed points and split the relative smash into group-indexed copies.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N15. arXiv math.AT, math.KT. Level 4: research.

**Definition.** Let a finite group G act on a commutative A-algebra B in spectra. The extension is G-Galois if A → Bʰᴳ and B ∧ₐ B → ∏<sub>g∈G</sub> B are equivalences (our own). The g-component of the second map multiplies after applying g to the first factor (our own).

**Problem.** Complex conjugation makes complex K-theory KU a C₂-Galois extension of real K-theory KO. This holds although π∗KO → π∗KU is not a Galois extension of graded rings.

**How the definition helps.** The definition asks for equivalences of spectra, so it can hold when the map of homotopy rings is far from Galois. A Galois extension of rings is injective, but the Hopf class η in π₁KO maps to zero in π₁KU (our own). The fixed-point condition is the classical fact that conjugation on KU has homotopy fixed points KO. The product condition follows from Wood's theorem that KO smashed with the cofibre of η is KU (our own summary of Rognes).

**Wikipedia:** [G-spectrum](https://en.wikipedia.org/wiki/G-spectrum). It says: “Example: KO → KU is a ℤ./2-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Thom spectra as colimits make n-fold loop maps give Eₙ ring spectra

**Remember:** Take the colimit of the diagram of sphere lines.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R25, 55N22. arXiv math.AT. Level 4: research.

**Definition.** For a map f from a space X to BGL₁(S), its Thom spectrum is the colimit of the associated diagram of sphere lines in spectra. The indexing ∞-groupoid is X (our own).

**Problem.** If f is a map of n-fold loop spaces, then Mf is an Eₙ ring spectrum; infinite loop maps give E∞ ring spectra. In particular MO, MSO, MSpin, MString and MU are E∞ ring spectra.

**How the definition helps.** Smash products commute with colimits, so the Thom spectrum functor from spaces over BGL₁(S) to spectra is symmetric monoidal (our own outline). A symmetric monoidal functor carries Eₙ algebras to Eₙ algebras. The work went into building BGL₁(S) as an infinite loop space and the Thom functor as a functor of ∞-categories. With the classical definition by Thom spaces of vector bundles, Lewis needed a long point-set construction for the E∞ structure (our own).

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “the sufficient condition for a Thom spectrum of an ∞-module bundle (as above) to have an E-∞ ring structure is that it arises as the (∞,1)-colimit of a homomorphism of E-∞ spaces B → A Line (ABG 10, prop.6.21)”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)

### Thom spectrum models make THH of perfectoid rings polynomial

**Remember:** Arrange smash factors in a circle, multiply neighbors, and realize.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 19D55, 14F30. arXiv math.AT, math.KT. Level 4: research.

**Definition.** For an associative ring spectrum A, THH(A) is the geometric realization of its cyclic bar construction (our own). In degree n it has n+1 smash factors A over the sphere, with faces from multiplication and degeneracies from the unit (our own).

**Problem.** For every perfectoid ring R, the p-completed THH(HR) is HR smashed with ΩS³₊. So its homotopy ring is the polynomial ring R\[u\] with u in degree 2, which is Bökstedt's theorem when R = 𝔽ₚ.

**How the definition helps.** THH of a Thom spectrum is again a Thom spectrum over a loop space, so the Thom model reduces THH(HR) to the homology of ΩS³. That homology is polynomial on one class of degree 2. Bökstedt's original proof for 𝔽ₚ instead runs a hard spectral sequence computation with Dyer–Lashof operations (our own). The work went into identifying HR as a Thom spectrum and into comparing absolute THH with THH relative to spherical Witt vectors.

**Wikipedia:** [Topological Hochschild homology](https://en.wikipedia.org/wiki/Topological_Hochschild_homology). It says: “In contrast, the Topological Hochschild Homology ring has the isomorphism THH\_\*(𝔽<sub>p</sub>) = 𝔽<sub>p</sub>\[u\] giving a less pathological theory.”

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “The (absolute) topological Hochschild homology THH(H R)<sub>p</sub><sup>∧</sup> ≃ H R ⊗ Ω S³ as 𝔼₁-ring spectra.”

**Sources:**

- [Andrew J. Blumberg, Ralph L. Cohen and Christian Schlichtkrull, Topological Hochschild homology of Thom spectra and the free loop space, Geometry &amp; Topology 14 (2010) 1165–1242](https://doi.org/10.2140/gt.2010.14.1165)

### Twisted spectra over a connected space are modules over a Thom spectrum

**Remember:** A twist transports spectra around the base, and a twisted spectrum is a section.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R70. arXiv math.AT. Level 4: research.

**Definition.** A twist on B is a map σ from B to BPic(S), the delooping of the space of invertible spectra (our own). A σ-twisted spectrum is a section of the bundle of categories of spectra classified by σ (our own).

**Problem.** For a connected space B with a twist σ, σ-twisted spectra on B are the modules over the Thom spectrum of Ωσ. For the trivial twist, spectra parametrized over B are modules over the spherical group ring Σ∞₊ΩB.

**How the definition helps.** The Thom spectrum of a loop map is a ring spectrum, so it can be an endomorphism ring of a twisted spectrum. The twisted spectrum induced from a point has this endomorphism ring and generates for connected B, so Morita theory applies (our own outline). The work went into identifying this endomorphism ring with the Thom spectrum, which the colimit definition of Thom spectra makes possible (our own).

**Paper or page:** [Twisted Spectra Revisited](https://arxiv.org/abs/2312.07403v2). It says: “Let B be a connected space and consider a haunt σ : B → BPic(𝕊). Then, there is a natural equivalence TwSp(B,σ) ≃ Mod<sub>Th(Ω σ)</sub> of ∞-categories.”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### Cofinal completion changes only components

**Remember:** Adding missing summands can add components without changing higher homotopy.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 19D23. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let A ⊆ B be an inclusion of E∞-monoids that identifies A with a union of components of B (our own). It is cofinal if for every b ∈ π₀B there exists c ∈ π₀B with b+c ∈ π₀A (our own).

**Problem.** After group completion, a cofinal inclusion gives an injection on components and isomorphisms on all higher homotopy groups.

**How the definition helps.** In our own explanation, the complement condition says exactly how addition can move any target component into the source. Lehner’s cofinality theorem proves the assertion about homotopy groups. For our own example, take finitely generated projective modules over a unital ring, with isomorphisms as paths and direct sum as addition. The free modules give a cofinal inclusion because every finitely generated projective module is a direct summand of a finite free module.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “is injective in degree 0 and an isomorphism for i &gt; 0.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Group-like fixed points recognize equivariant V-fold loop spaces

**Remember:** Ask group-like fixed points only where Vᴴ has room to loop.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G and a real G-representation V, an 𝔼ᵥ-algebra is a G-space with operations given by embeddings of V-framed G-disks. It is group-like at a subgroup H when the monoid of components of its H-fixed points is a group. The condition is asked only for subgroups H whose fixed space Vᴴ has dimension at least 1.

**Problem.** An 𝔼ᵥ-algebra A is equivalent to a V-fold loop space exactly when Aᴴ is group-like for every subgroup H with dim Vᴴ ≥ 1. This holds for every V; earlier results needed a trivial summand in V.

**How the definition helps.** The condition asks for group-like fixed points exactly where the fixed points carry a multiplication. The fixed points Aᴴ are algebras over the little-disks operad of dimension dim Vᴴ (our own summary of the abstract). Where Vᴴ is zero, there is no multiplication and no condition to ask (our own). The hard part is the equivariant approximation theorem for all V and all based G-spaces.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “We prove that an 𝔼ᵥ-algebra is equivalent to a V-fold loop space if and only if Aᴴ is group-like for all H such that dim Vᴴ ≥ 1. This generalizes a result by Guillou and May”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups, arXiv:2508.04421 (2025)](https://arxiv.org/abs/2508.04421)
- [Bertrand Guillou, J. Peter May, Equivariant iterated loop space theory and permutative G-categories, Algebr. Geom. Topol. 17 (2017) 3259–3339](https://doi.org/10.2140/agt.2017.17.3259)

### Stable automorphisms recover completion loops

**Remember:** An arrow multiplies its source, then follows a path to its target.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** An Eₙ-monoid is a space with multiplication operations parametrized by configurations of little n-dimensional cubes. Its action category has points as objects. An arrow from x to y gives a multiplier k and a path from kx to y, with higher homotopies retained.

**Problem.** Let X be an Eₙ-monoid with n ≥ 2, and let Xᵍᵖ be its group completion. Then the loop space ΩXᵍᵖ is the colimit, in E₁-groups, of the automorphism groups Aut(x) over the action category.

**How the definition helps.** In our own explanation, the action category specifies how to compare loops at different points. Multiply a loop at x by k and transport it along the chosen path to y. Lehner’s theorem identifies the universal group built from these comparisons with the loops on Xᵍᵖ.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “There is a natural equivalence of E₁-groups ΩXᵍᵖ ≃ colimₓ∈𝐄𝐗 Aut(x) where the colimit is taken in the ∞-category of E₁-groups.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Transfer systems classify N∞ operads up to homotopy

**Remember:** Order subgroups by allowed transfers, and keep that order under conjugation and restriction.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** A transfer system on the subgroups of a finite group G is a conjugation-invariant partial order ≼ refining inclusion (our own). Whenever K ≼ H and L ≤ H, it requires K ∩ L ≼ L (our own).

**Problem.** The homotopy category of G-N∞ operads is equivalent to the lattice of transfer systems on G.

**How the definition helps.** The homotopy type of an N∞ operad depends only on which norms its algebras have, and the transfer system records exactly those norms. So the classification becomes a question about a finite lattice. The theorem is due to Blumberg and Hill and to Rubin. The hard part, that every transfer system comes from an operad, is due to Rubin and to others (our own).

**Paper or page:** [Transfer systems for rank two elementary Abelian groups: characteristic functions and matchstick games](https://arxiv.org/abs/2310.13835). It says: “There is a functor from the category of G-N∞ operads to (the category induced by) the lattice Tr(G) that induces an equivalence between the homotopy category of G-N∞ operads and Tr(G).”

**Sources:**

- [Linus Bao, Christy Hazel, Tia Karkos, Alice Kessler, Austin Nicolas, Kyle Ormsby, Jeremie Park, Cait Schleff, Scotty Tilton, Transfer systems for rank two elementary abelian groups: characteristic functions and matchstick games, Tunisian J. Math. 7 (2025) 167–191, arXiv:2310.13835](https://doi.org/10.2140/tunis.2025.7.167)
- [Andrew J. Blumberg, Michael A. Hill, Operadic multiplications in equivariant spectra, norms, and transfers, Adv. Math. 285 (2015) 658–708](https://doi.org/10.1016/j.aim.2015.07.013)

### Defining invertibility with the K(n)-local smash product gives an algebraic test

**Remember:** Find a partner whose localized smash with X is the localized sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p and height n. A K(n)-local spectrum X is invertible if some K(n)-local Y satisfies L<sub>K</sub>(n)(X ∧ Y) ≃ L<sub>K</sub>(n)S (our own).

**Problem.** A K(n)-local spectrum X is invertible exactly when its completed Morava E-theory is an invertible graded module over Eₙ\*. That theory is the homotopy of the K(n)-localization of Eₙ ∧ X.

**How the definition helps.** The localized smash product defines the inverse on the spectrum side of the criterion (our own). The Hopkins–Mahowald–Sadofsky invertibility criterion detects that inverse using completed Morava E-homology (our own).

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455), [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “The followings are equivalent: X ∈ Sp<sub>K</sub>(h) is invertible. (Eₕ)\*(X) is an invertible graded (Eₕ)\*-module.”

**Sources:**

- [M. J. Hopkins, M. Mahowald and H. Sadofsky, Constructions of elements in Picard groups, Contemporary Mathematics 158 (1994) 89–126](https://doi.org/10.1090/conm/158/01454)

### Finite localizations are smashing because their acyclics are built from compact spectra

**Remember:** Maps out of finite spectra commute with sums, so finite localizations are smashing.

*True by definition.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** For a set A of finite spectra, call Z local if \[ΣᵏF, Z\] = 0 for every F ∈ A and integer k (our own). Finite localization away from A sends each spectrum to its universal local target (our own).

**Problem.** Every finite localization is smashing, that is, smash product with the localized sphere, so it commutes with all homotopy colimits. In particular, finite localization away from the finite spectra on which K(0), …, K(n) vanish is smashing, where K(i) are the Morava K-theories.

**How the definition helps.** Local spectra are defined by the vanishing of maps out of finite spectra, and maps out of a finite spectrum commute with infinite sums. So sums of local spectra are local, the localization preserves sums, and such a localization is smashing (our own outline). For localization at a homology theory, the acyclic spectra need not be built from finite spectra, and smashing can be deep. For Morava E-theory it is a theorem of Hopkins and Ravenel, and p-completion is not smashing at all.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “finite localizations" are smashing”

**Sources:**

- [H. R. Miller, Finite localizations, Boletín de la Sociedad Matemática Mexicana 37 (1992) 383–390](http://hopf.math.purdue.edu/cgi-bin/generate?/MillerH/finite-localization)

### Generalized Moore spectra make K(n)-localization a completion of Lₙ

**Remember:** K(n)-localization is E(n)-localization followed by completion along Moore spectra.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** Fix a prime p and height n ≥ 1, and let Eₙ be Morava E-theory. A generalized Moore spectrum of type n here is a finite p-local spectrum M realizing a quotient Eₙ∗M ≅ Eₙ∗/J (our own). The homogeneous invariant ideal J contains a power of the maximal ideal and is proper (our own).

**Problem.** Write Lₙ for localization at Eₙ. There is a tower of generalized Moore spectra Mⱼ of type n whose ideals intersect in zero. For every spectrum X, its K(n)-localization is the homotopy limit of LₙX ∧ Mⱼ.

**How the definition helps.** With a tower of type n Moore spectra, K(n)-localization becomes a completion of Lₙ, as p-completion is the limit of the spectra X ∧ S/pᵏ. Each LₙX ∧ Mⱼ is K(n)-local, and the map from X to the limit is a K(n)-equivalence (our own summary). This turns many K(n)-local questions into questions about finite spectra of type n. The work moves into the Hovey–Strickland construction of the tower, with compatible multiplications.

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039). It says: “Denote the Bousfield localization at the height n Morava E-theory Eₙ by Lₙ. For any spectrum X, we have a natural equivalence: L<sub>K</sub>(n)X ≃ holimⱼ(LₙX ∧ Mⱼ).”

**Sources:**

- [M. Hovey and N. P. Strickland, Morava K-theories and localisation, Memoirs of the AMS 139 (1999), no. 666](https://doi.org/10.1090/memo/0666)

### Moore spectrum localizations depend only on invertible primes and torsion

**Remember:** Two groups that kill the same spectra give the same localization.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A Moore spectrum SA for an abelian group A is a connective spectrum with integral homology A in degree zero and zero elsewhere (our own). An SA-acyclic spectrum Y satisfies SA ∧ Y ≃ 0. Localization at SA inverts exactly the maps with SA-acyclic cofiber (our own).

**Problem.** The localizations at SA₁ and SA₂ agree exactly when the same primes are invertible in A₁ and A₂ and both or neither are torsion. So each such localization is either localization at a subring of ℚ or completion at a set of primes.

**How the definition helps.** Because the localization depends only on the acyclic spectra, two Moore spectra with the same acyclic spectra give the same localization, with no further check. Bousfield showed that the acyclic spectra of SA depend only on which primes are invertible in A and on whether A is torsion. So an infinite family of localizations collapses to two simple kinds. The work moves into that computation of acyclic spectra.

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “A₁ and A₂ have the same type of acyclicity, meaning that every prime number p is invertible in A₁ precisely if it is in A₂; A₁ is a torsion group precisely if A₂ is.”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Enriched Lie models extend Sullivan theory to all connected spaces

**Remember:** Remember the finite nilpotent quotients and recover the algebra as their inverse limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory), 17B70. arXiv math.AT. Level 4: research.

**Definition.** An enriched differential graded Lie algebra over ℚ carries a directed system of differential ideals ordered by reverse inclusion (our own). Their quotients are finite-dimensional nilpotent differential graded Lie algebras, and the canonical map to their inverse limit is an isomorphism (our own).

**Problem.** Every connected space has a minimal enriched Lie model unique up to isomorphism. An algebraic process connects it to the minimal Sullivan model.

**How the definition helps.** The inverse limit accommodates the completed Lie algebra needed in degree zero for connected spaces (our own). The enriched Lie minimal-model theorem gives existence, uniqueness up to isomorphism, and the comparison with Sullivan models.

**Paper or page:** [Enriched Differential Lie Algebras in Topology](https://arxiv.org/abs/2208.12171). It says: “Each connected space has a unique minimal edgl model, and an algebraic process connects this to the minimal Sullivan model.”

**Sources:**

- [Yves Félix, Steve Halperin, Enriched Differential Lie Algebras in Topology, arXiv:2208.12171 (2022)](https://arxiv.org/abs/2208.12171)

### Away from the group order, geometric fixed points split G-spectra by subgroups

**Remember:** Remove proper isotropy before taking fixed points, retaining the Weyl action.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** For H ≤ G, restrict a genuine G-spectrum to H and kill cells induced from proper subgroups (our own). Taking derived H-fixed points then gives its geometric H-fixed points, with residual N<sub>G</sub>(H)/H-action (our own).

**Problem.** Suppose p does not divide the order of G. Take the functors Φᴴ, one for each conjugacy class of subgroups H. Together they make p-local G-spectra equivalent, as a symmetric monoidal homotopy category, to the product of p-local spectra with a W(H)-action.

**How the definition helps.** Inverting the group order splits the Burnside ring into idempotents indexed by conjugacy classes of subgroups (our own). The geometric fixed-point splitting theorem identifies each idempotent summand with spectra carrying the corresponding Weyl action (our own).

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “For G finite and for rational equivariant stable homotopy theory this becomes”

**Paper or page:** [On the KU<sub>G</sub>-local equivariant sphere](https://arxiv.org/abs/2204.03797). It says: “Let p be a prime not dividing the order of the group G. Then the collection of geometric fixed point functors, as (H) runs over conjugacy classes of subgroups, yields a symmetric monoidal equivalence of categories”

**Sources:**

- [On the KU<sub>G</sub>-local equivariant sphere, arXiv:2204.03797](https://arxiv.org/abs/2204.03797)

### Completing the Burnside ring at its augmentation ideal makes Segal's conjecture true

**Remember:** Complete by keeping compatible residues modulo every power of the augmentation ideal.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22, 55Q55. arXiv math.AT. Level 4: research.

**Definition.** The Burnside ring A(G) of a finite group G has an augmentation to ℤ that sends a G-set to its number of elements. Its kernel I is the augmentation ideal. The completion of A(G) is the inverse limit of the rings A(G)/Iⁿ.

**Problem.** Let G be a finite group, and add a disjoint base point to BG. The inverse limit over skeleta of its stable cohomotopy in degree zero is the I-adic completion of A(G) (Carlsson).

**How the definition helps.** Completion records the augmentation ideal to every order. For C₂ its powers satisfy I² = 2I, giving a 2-adic summand as required by Lin’s calculation (our own). Carlsson’s proof of the Segal conjecture identifies the completion for every finite G (our own).

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “On the right-hand side, the hat denotes the completion of the Burnside ring with respect to its augmentation ideal.”

**Sources:**

- [G. Carlsson, Equivariant stable homotopy and Segal's Burnside ring conjecture, Annals of Mathematics 120 (1984) 189–224](https://doi.org/10.2307/2006940)
- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)

### Equivariant suspensions give group completions

**Remember:** Free algebra then completion is the same free object among loops.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P48. arXiv math.AT. Level 4: research.

**Definition.** Let V be a real representation of a finite group G. A little V-disks algebra A is grouplike if π₀(Aᴴ) is a group whenever dim(Vᴴ) ≥ 1 (our own). Group completion is the universal map to a grouplike little V-disks algebra (our own).

**Problem.** For any based G-space X, the group completion of the free little V-disks algebra on X is equivalent to ΩⱽΣⱽX. Suspension takes the smash product with the one-point compactification of V. Looping takes based maps from that same sphere.

**How the definition helps.** In our own argument, freely adjoining operations and then freely adjoining inverses gives the free grouplike algebra on X. Juran’s recognition theorem identifies grouplike algebras with the appropriate based G-spaces via V-fold looping. Under that equivalence, the suspension and looping adjunction gives ΩⱽΣⱽX the same universal property. Recognition supplies the comparison needed to identify the two constructions.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “exhibits the target as the group completion of the source.”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421)

### Genuine Cₚ-spectra are Borel spectra glued to geometric fixed points through Tate

**Remember:** Tate is the cofiber of the norm from orbits to fixed points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let Cₚ be the cyclic group of order p. A genuine Cₚ-spectrum has an underlying spectrum X with a Cₚ-action, called its Borel part, and it has geometric fixed points Φ. The Tate spectrum of X is the cofibre of the norm map from homotopy orbits to homotopy fixed points.

**Problem.** Genuine Cₚ-spectra are equivalent to triples. A triple is a spectrum X with a Cₚ-action, a spectrum Φ, and a map from Φ to the Tate spectrum of X. The genuine fixed points are the pullback of Φ and the homotopy fixed points of X over the Tate spectrum.

**How the definition helps.** Cₚ has only two orbit types, so the isotropy separation sequence cuts a genuine spectrum into its free part and its geometric fixed points. The Tate spectrum records how the two parts are glued (our own summary). So the gluing data is one map from Φ to the Tate spectrum of X. The work went into proving that this gluing recovers the genuine category.

**nLab:** [G-spectrum](https://ncatlab.org/nlab/show/G-spectrum). It says: “genuine G-spectra admit a simple model which amounts to specifying a spectrum E, a G-action on E, a genuine fixed point spectrum Eᴳ, and a diagram E<sub>hG</sub> → Eᴳ → Eʰᴳ.”

**Sources:**

- [T. Nikolaus and P. Scholze, On topological cyclic homology, Acta Mathematica 221 (2018) 203–409](https://doi.org/10.4310/ACTA.2018.v221.n2.a1)

### Genuine fixed points of a suspension G-spectrum split over conjugacy classes

**Remember:** One summand per orbit type, built from fixed points and Weyl groups.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, a genuine G-spectrum is indexed on all representations of G, so every representation sphere has an inverse. Its fixed point spectrum is the derived functor of taking G-fixed points. For a subgroup H, the Weyl group is W(H) = N(H)/H, where N(H) is the normalizer.

**Problem.** Let G be finite and X a based G-space. The fixed point spectrum of the suspension G-spectrum of X is a wedge over conjugacy classes of subgroups H. The summand for H is the suspension spectrum of the homotopy orbits of Xᴴ under W(H).

**How the definition helps.** Stabilizing over all representations supplies transfers for every orbit type (our own). The tom Dieck splitting theorem identifies each corresponding summand with the suspension spectrum of the Weyl homotopy orbits.

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “The tom Dieck splitting (tom Dieck 75, Lewis-May-Steinberger 86, V.11) gives an explicit description of all the wedge summands appearing in fixed point spectra of equivariant suspension spectra.”

**Sources:**

- [T. tom Dieck, Orbittypen und äquivariante Homologie II, Archiv der Mathematik 26 (1975) 650–662](https://doi.org/10.1007/BF01229795)
- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Genuine stable maps between representation spheres form the Burnside ring

**Remember:** Degrees on all fixed spheres are the marks of a G-set.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, the Burnside ring A(G) is the group completion of finite G-set isomorphism classes under disjoint union (our own). Cartesian product gives its multiplication, and the orbits G/H give an additive basis indexed by conjugacy classes of H (our own).

**Problem.** For every finite group G, the zeroth G-equivariant stable homotopy group of the genuine sphere spectrum is isomorphic to A(G) (Segal).

**How the definition helps.** A stable equivariant self-map of a sphere has a degree on the fixed sphere for each subgroup (our own). These degrees correspond to the fixed-point counts of finite G-sets under Segal’s isomorphism (our own). Segal’s theorem identifies the integral ring, including the relations among those counts (our own).

**nLab:** [equivariant stable cohomotopy](https://ncatlab.org/nlab/show/equivariant+stable+cohomotopy), [Burnside ring](https://ncatlab.org/nlab/show/Burnside+ring). It says: “Let G be a finite group, then its Burnside ring A(G) is isomorphic to the equivariant stable cohomotopy cohomology ring 𝕊<sub>G</sub>(∗) of the point in degree 0.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Geometric fixed points detect nilpotence in the C₂-equivariant stable stems

**Remember:** Check nilpotence twice: underlying and geometric fixed points.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55Q91. arXiv math.AT. Level 4: research.

**Definition.** Let G be the group of order 2. A G-spectrum has two geometric fixed point spectra: the underlying spectrum, and Φᴳ, the fixed points after killing the free part. Both functors to ordinary spectra are symmetric monoidal, unlike genuine fixed points, and together they detect equivalences.

**Problem.** Take an element of the stable homotopy groups of the G-sphere, graded by representations of G. It is nilpotent exactly when its underlying image and its geometric fixed point image are both nilpotent.

**How the definition helps.** Geometric fixed points preserve smash products and colimits, so they preserve the telescope that inverts α (our own). This telescope vanishes exactly when some power of α vanishes (our own). Isotropy separation detects vanishing from the underlying and geometric fixed-point spectra together (our own).

**Paper or page:** [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems](https://arxiv.org/abs/2211.04611). It says: “An element α ∈ π\_⋆<sup>C₂</sup> is nilpotent if and only if both its geometric fixed points Φ<sup>C₂</sup>(α) ∈ π\_\*<sup>s</sup> and its underlying non-equivariant map Φ<sup>e</sup>(α) ∈ π\_\*<sup>s</sup> are nilpotent.”

**Sources:**

- [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems, arXiv:2211.04611](https://arxiv.org/abs/2211.04611)

### Geometric fixed points take suspension spectra to suspension spectra of fixed points

**Remember:** Kill proper isotropy first, and only the fixed space remains.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For finite G, let ẼP be the cofiber of EP₊ → S⁰ for the family P of proper subgroups (our own). Define ΦᴳX as the derived categorical fixed points of ẼP ∧ X (our own).

**Problem.** For every based G-space A, geometric fixed points of its derived suspension G-spectrum give the suspension spectrum of Aᴳ. Geometric fixed points are symmetric monoidal, while categorical fixed points of the sphere have π₀ equal to A(G).

**How the definition helps.** The geometric fixed-point construction kills suspension cells with proper isotropy and sends G-fixed suspension cells to ordinary suspension cells (our own). Its derived strong monoidal comparison gives the smash product formula. For the genuine sphere, categorical fixed points have π₀ equal to A(G) (our own).

**nLab:** [geometric fixed point spectrum](https://ncatlab.org/nlab/show/geometric+fixed+point+spectrum). It says: “The construction of geometric fixed point spectra is essentially uniquely characterized by the property Φᴳ(Σ∞<sub>G</sub> X) ≃ Σ∞(Xᴳ) and the property of being left derived strong monoidal and preserving homotopy colimits.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Homotopy fixed points defined by Kan extension compose in stages

**Remember:** Factoring the map to a point lets us take fixed points twice.

*True by definition. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N60. arXiv math.AT. Level 4: research.

**Definition.** A coherent G-action on a space X is a functor from the one-object groupoid BG to spaces with value X (our own). Its homotopy fixed points are the limit of this functor.

**Problem.** Let H be a normal subgroup of G. The H-homotopy fixed points inherit a coherent G/H-action, whose homotopy fixed points are the G-homotopy fixed points of X.

**How the definition helps.** Right Kan extensions compose along BG → B(G/H) → ∗ (our own). The first extension has value Xʰᴴ because the homotopy fiber is BH, and it supplies the quotient action (our own). Its limit therefore gives Xʰᴳ (our own).

**nLab:** [homotopy fixed point](https://ncatlab.org/nlab/show/homotopy+fixed+point). It says: “Generally, for G an ∞-group and X equipped with an ∞-action, then the homotopy fixed points is the base change along/dependent product over the delooping 𝐁G”

**Sources:** none listed. No primary source with a working link was found.

### Homotopy fixed points make the generalized Sullivan conjecture statable and true

**Remember:** Map equivariantly from a free contractible G-space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55S10. arXiv math.AT. Level 4: research.

**Definition.** For a group G, choose a free contractible G-CW complex EG. The homotopy fixed points of a G-space X form the space of equivariant maps EG → X.

**Problem.** For a finite p-group G acting on a finite G-CW complex X, the natural map (Xᴳ)ₚ<sup>∧</sup> → (Xₚ<sup>∧</sup>)ʰᴳ is a weak equivalence.

**How the definition helps.** The map EG → ∗ turns each fixed point into a constant equivariant map (our own). Applying p-completion gives the comparison in the generalized Sullivan conjecture, proved by Dwyer–Miller–Neisendorfer, Carlsson, and Lannes (our own).

**Wikipedia:** [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “showing that the natural map (Xᴳ)ₚ → F(EG, (X)ₚ)ᴳ is a weak equivalence when the order of G is a power of a prime p”

**Sources:**

- [W. Dwyer, H. Miller and J. Neisendorfer, Fibrewise completion and unstable Adams spectral sequences, Israel Journal of Mathematics 66 (1989) 160–178](https://doi.org/10.1007/BF02765891)
- [G. Carlsson, Equivariant stable homotopy and Sullivan's conjecture, Inventiones Mathematicae 103 (1991) 497–525](https://doi.org/10.1007/BF01239524)
- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Periodic K-theory breaks Tate vanishing

**Remember:** Below one fixed degree, every homotopy group vanishes.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A spectrum X is bounded below if there exists an integer N such that πₖX = 0 for every k &lt; N (our own).

**Problem.** Let a cyclic group of order p² act on a bounded-below spectrum, where p is prime. Take homotopy orbits under the subgroup of order p, then take the Tate spectrum for the quotient group. The result vanishes.

**How the definition helps.** The lower bound excludes periodic complex K-theory, whose even homotopy groups are nonzero in arbitrarily negative degrees (our own). Nikolaus and Scholze prove vanishing under the lower bound in their Tate orbit lemma (our own). They also calculate that periodic complex K-theory with trivial action fails the lemma at every prime (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Prime Tate powers preserve sums

**Remember:** Nonconstant words of prime length have free rotation orbits.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P43. arXiv math.AT. Level 4: research.

**Definition.** For every positive integer m, let Cₘ act on the m-fold smash power of X by cyclically permuting its factors (our own). Define its Tate power as the cofiber of the norm from homotopy orbits to homotopy fixed points (our own).

**Problem.** For prime m this operation preserves finite direct sums. For m = 4 it fails even on the sum of two sphere spectra, the units for the smash product.

**How the definition helps.** At prime length, each nonconstant word in the summands has a free rotation orbit (our own). Free orbits give induced spectra with vanishing Tate construction, leaving just the constant words (our own). At length four the alternating word has stabilizer C₂, so its orbit contributes the C₂-Tate sphere (our own). The Segal conjecture for C₂ implies this contribution is nonzero (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “Tate spectra for cyclic groups play a role in the characterization of cyclotomic spectra.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Smashing with Ẽ𝓕\[N\] identifies G/N-spectra with a localization of G-spectra

**Remember:** An idempotent ring cuts out the G/N-part of G-spectra.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For a normal subgroup N of a finite group G, let 𝓕\[N\] be the family of subgroups that do not contain N. Let Ẽ𝓕\[N\] be the based G-space whose H-fixed points are S⁰ when H contains N and a point otherwise. Its suspension spectrum is an idempotent ring: smashing it with itself gives it back.

**Problem.** Localizing G-spectra at the maps that become equivalences after smashing with Ẽ𝓕\[N\] is a smashing localization, and the local G-spectra are equivalent to G/N-spectra. Under this equivalence, the geometric fixed points for N become extension of scalars along the unit map of this idempotent ring.

**How the definition helps.** Because the ring is idempotent, its modules are exactly the local objects, and base change to it is just smashing. So the geometric fixed point functor for N is automatically symmetric monoidal and preserves colimits (our own summary). The work went into identifying the local G-spectra with G/N-spectra, done by Lewis, May and Steinberger.

**nLab:** [geometric fixed point spectrum](https://ncatlab.org/nlab/show/geometric+fixed+point+spectrum). It says: “is a smashing localization, given by smashing with the equivariant suspension spectrum of Ẽ𝓕\[N\]”

**Paper or page:** [Modular fixed points in equivariant homotopy theory](https://arxiv.org/abs/2506.21413). It says: “In particular, geometric fixed points Φ<sup>H</sup>: Sp<sup>G</sup> → Sp<sup>G//H</sup> under the above equivalence identify with the extension of scalars Sp<sup>G</sup> → Mod<sub>Φ<sub>H</sub>(𝕊)</sub>(Sp<sup>G</sup>) along 𝕊 → Φ<sub>H</sub>(𝕊).”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)
- [Y. Fuhrmann, Modular fixed points in equivariant homotopy theory, arXiv:2506.21413 (2025)](https://arxiv.org/abs/2506.21413)

### The Tate construction states the Segal conjecture for Cₚ as p-completion

**Remember:** Take the cofiber of the norm from homotopy orbits to homotopy fixed points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let a finite group G act on a spectrum X. Its Tate spectrum is the cofiber of the norm from homotopy orbits to homotopy fixed points (our own).

**Problem.** For the cyclic group Cₚ, the unit map from 𝕊 to the Cₚ-Tate spectrum of 𝕊 is a p-completion. This is Lin's theorem for p = 2 and Gunawardena's for odd p, and it is equivalent to the Segal conjecture for Cₚ.

**How the definition helps.** The Tate construction packages the norm comparison into one spectrum (our own). The Tate pullback square for the genuine sphere relates its unit map to the Segal conjecture for Cₚ (our own). Lin and Gunawardena compute this map at two and at odd primes, respectively (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “then the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “The theorem relates the Burnside ring of a finite group G to the stable cohomotopy of the classifying space BG.”

**Sources:**

- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)
- [T. Nikolaus and P. Scholze, On topological cyclic homology, Acta Mathematica 221 (2018) 203–409](https://doi.org/10.4310/ACTA.2018.v221.n2.a1)

### Defining the e-invariant as an Ext class detects the image of J

**Remember:** The e-invariant is the extension class of K-theory of the mapping cone.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q50. arXiv math.AT. Level 4: research.

**Definition.** Represent an odd stable stem class by f from S²ⁿ⁺²ᵐ⁻¹ to S²ⁿ with n and m positive (our own). Reduced complex K-theory of its cone extends K̃⁰(S²ⁿ) by K̃⁰(S²ⁿ⁺²ᵐ), with Adams operations (our own). The complex e-invariant is the image of this extension class under Adams’s identification in ℚ/ℤ (our own).

**Problem.** The e-invariant is a homomorphism from the odd stable stems to ℚ/ℤ, injective on the image of the J-homomorphism at odd primes. So at an odd prime each odd stem is the direct sum of the image of J and the kernel of e.

**How the definition helps.** Defining e(f) as an extension class makes it additive at once, because sums of maps give Baer sums of extensions (our own remark). The extension splits as abelian groups, so only the Adams operations carry information. The splitting off of the image of J needs Adams's computation of e on that image and the Adams conjecture, proved by Quillen and Sullivan. At the prime 2 one needs a real K-theory version of e.

**nLab:** [Adams e-invariant](https://ncatlab.org/nlab/show/Adams+e-invariant). It says: “Thus this short exact sequence defines an element in the Ext group formed in this category”

**Wikipedia:** [J-homomorphism](https://en.wikipedia.org/wiki/J-homomorphism). It says: “The stable homotopy groups πᵣˢ are the direct sum of the (cyclic) image of the J-homomorphism, and the kernel of the Adams e-invariant (Adams 1966), a homomorphism from the stable homotopy groups to ℚ/ℤ.”

**Sources:**

- [J. F. Adams, On the groups J(X) IV, Topology 5 (1966) 21–71](https://doi.org/10.1016/0040-9383(66)90004-8)

### Localizing the sphere at K-theory makes image-of-J orders zeta denominators

**Remember:** Localize the sphere by making every KU-acyclic spectrum map trivially into it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55P60, 55Q50. arXiv math.AT, math.NT. Level 4: research.

**Definition.** The KU-local sphere is the universal KU-local target of the sphere spectrum (our own). A spectrum Z is KU-local if every map Y → Z is null whenever KU ∧ Y ≃ 0 (our own).

**Problem.** For each n ≥ 1, π₂ₙ₋₁ of the KU-local sphere has order the denominator of ζ(1 − n), up to a power of 2. Away from 2, they are the image of the J-homomorphism, which maps homotopy of the orthogonal group to stable homotopy of spheres.

**How the definition helps.** The fibre description makes each odd-degree group of the p-completion a cokernel of an explicit map on ℤₚ, the p-adic integers (our own outline). In degree 2n − 1 the group is ℤₚ modulo gⁿ − 1, which is zero unless p − 1 divides n. Otherwise its order is p times the p-part of n, the p-part of the denominator of ζ(1 − n) = −Bₙ/n (our own remark). The work moves into identifying the p-completion as this fibre, and into Quillen's proof of the Adams conjecture.

**Paper or page:** [Denominators of special values of zeta-functions count KU-local homotopy groups of mod p Moore spectra](https://arxiv.org/abs/2303.09550). It says: “the order \#(π₂ₙ(L<sub>KU</sub> S)) of the 2nth stable homotopy group π₂ₙ(L<sub>KU</sub> S) is a power of 2, and \#(π₂ₙ₋₁(L<sub>KU</sub> S)) = denom(ζ(1−n)) up to multiplication by a power of 2”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)

### Balmer's prime tensor ideals turn the thick subcategory theorem into a space

**Remember:** A prime containing a tensor product must contain a factor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 18G80. arXiv math.AT. Level 4: research.

**Definition.** In an essentially small tensor triangulated category, a prime P is a proper thick tensor ideal satisfying the following condition (our own). For every X,Y with X ⊗ Y ∈ P, either X ∈ P or Y ∈ P (our own). Such primes form the Balmer spectrum, whose closed sets are generated by supports {P ∣ X ∉ P} (our own).

**Problem.** The Balmer spectrum of finite p-local spectra is a chain of points, the subcategories of type at least n for 1 ≤ n ≤ ∞. The closure of each point is the set of points with larger n.

**How the definition helps.** Balmer's theorem matches radical thick tensor ideals with suitable subsets of the spectrum, so a classification of ideals becomes a computation of a space. For finite spectra every thick subcategory is an ideal. The kernel of each K(n)\* is prime because of the Künneth formula for K(n) (our own outline). The work moves to the thick subcategory theorem itself.

**nLab:** [prime spectrum of a symmetric monoidal stable (∞,1)-category](https://ncatlab.org/nlab/show/prime+spectrum+of+a+symmetric+monoidal+stable+%28%E2%88%9E%2C1%29-category). It says: “The prime spectrum of the (∞,1)-category of spectra (p-local and finite) is labeled by the Morava K-theories (Balmer 10, prop. 9.4). This follows from the the thick subcategory theorem.”

**Sources:**

- [P. Balmer, The spectrum of prime ideals in tensor triangulated categories, Journal für die reine und angewandte Mathematik 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [P. Balmer, Spectra, spectra, spectra – tensor triangular spectra versus Zariski spectra of endomorphism rings, Algebraic &amp; Geometric Topology 10 (2010) 1521–1563](https://doi.org/10.2140/agt.2010.10.1521)
- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)

### Because Lₙ is smashing, E(n)-local spectra are modules over LₙS

**Remember:** Smashing localization means smashing every input with the localized sphere.

*True by definition.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A Bousfield localization L is smashing if LX ≃ X ∧ LS for every spectrum X, where S is the sphere spectrum. Lₙ denotes localization with respect to the Johnson–Wilson theory E(n).

**Problem.** Lₙ preserves all homotopy colimits, and Lₙ(X ∧ Y) ≃ LₙX ∧ Y for all spectra X and Y. A spectrum is E(n)-local exactly when it is a module over LₙS up to homotopy.

**How the definition helps.** Once L is smashing, each claim is the formula LX ≃ X ∧ LS together with the fact that X ∧ − preserves colimits. Local objects are then retracts of LS ∧ X, and LS ∧ LS ≃ LS makes LS an idempotent ring. For a general Bousfield localization, defined only by its local objects, these formulas fail, for example for p-completion. The work moves to the Hopkins–Ravenel smash product theorem, which proves that Lₙ is smashing.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “Localization with respect to Morava E-theory is smashing (Hopkins-Ravenel).”

**Sources:**

- [D. C. Ravenel, Nilpotence and periodicity in stable homotopy theory, Annals of Mathematics Studies 128, Princeton University Press (1992)](https://doi.org/10.1515/9781400882489)

### Bousfield classes split E(n)-localization into a K(n) piece and a lower piece

**Remember:** Height n is height n − 1 glued to the K(n)-local part.

*True by definition. Confidence: medium.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** For a spectrum E, E-localization universally inverts maps f such that E ∧ f is an equivalence (our own). Write Lₙ for localization at Johnson–Wilson E(n) and L<sub>K</sub>(n) for localization at Morava K(n) (our own).

**Problem.** For n ≥ 1 and every spectrum X, LₙX is the homotopy pullback of Lₙ₋₁X → Lₙ₋₁L<sub>K</sub>(n)X ← L<sub>K</sub>(n)X.

**How the definition helps.** Ravenel’s Bousfield class calculation detects E(n)-equivalences jointly by E(n−1) and K(n) (our own). Smashing localization at E(n−1) and chromatic orthogonality give K(n) ∧ Lₙ₋₁Y ≃ 0 for every Y (our own). Applying these two equivalence tests to the pullback comparison proves the fracture formula (our own).

**nLab:** [smash product theorem](https://ncatlab.org/nlab/show/smash+product+theorem). It says: “For X a homotopy type/spectrum and for all n, there is a homotopy pullback”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Chromatic convergence needs finite spectra, which excludes mod p homology

**Remember:** Finite spectra are the limit of their chromatic towers; H𝔽ₚ is invisible.

*Rules out counterexamples.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A finite p-local spectrum is a retract of a spectrum built from finitely many shifted p-local sphere cells (our own). Its chromatic tower is the sequence of localizations LₙX at Johnson–Wilson E(n), with maps from height n+1 to n (our own).

**Problem.** For every finite p-local spectrum X, the homotopy limit of its chromatic tower is X. The Eilenberg–MacLane spectrum H𝔽ₚ, which is not finite, has a tower that is zero at every stage.

**How the definition helps.** The finiteness condition removes spectra that no Morava K-theory of finite height can see. H𝔽ₚ is K(m)-acyclic for every finite m, so every LₙH𝔽ₚ is zero and the limit is zero, not H𝔽ₚ (our own example). For finite X the theorem lets one rebuild X from its K(n)-local pieces. The work moves to the proof by Hopkins and Ravenel, which uses the smash product theorem.

**nLab:** [chromatic convergence theorem](https://ncatlab.org/nlab/show/chromatic+convergence+theorem). It says: “The chromatic convergence theorem states mild conditions under which the homotopy limit over this tower is the p-localization”

**Wikipedia:** [Chromatic homotopy theory](https://en.wikipedia.org/wiki/Chromatic_homotopy_theory). It says: “the chromatic convergence theorem states the homotopy limit of the chromatic tower (defined below) of a finite p-local spectrum X is X itself. The theorem was proved by Hopkins and Ravenel.”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)
- [D. C. Ravenel, Nilpotence and periodicity in stable homotopy theory, Annals of Mathematics Studies 128, Princeton University Press (1992)](https://doi.org/10.1515/9781400882489)

### Closure under retracts is needed for the thick subcategory theorem

**Remember:** Keep the summands, or the Euler characteristic splits the ladder.

*Rules out counterexamples. Confidence: medium.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 18G80. arXiv math.AT. Level 4: research.

**Definition.** A thick subcategory is a full triangulated subcategory closed under retracts. Thus whenever it contains X, it contains every direct summand of X.

**Problem.** The thick subcategories of finite p-local spectra are exactly the classes of spectra of type at least n. Without closure under retracts this fails: spectra of even rational Euler characteristic form a triangulated subcategory not on the list.

**How the definition helps.** Even rational Euler characteristic is closed under shifts and cofiber sequences because Euler characteristic is additive (our own). It includes S ∨ S but excludes its retract S, so the resulting subcategory fails thickness (our own). The Hopkins–Smith thick subcategory theorem classifies the subcategories that satisfy the retract condition (our own).

**nLab:** [thick subcategory](https://ncatlab.org/nlab/show/thick+subcategory). It says: “A non-empty full (pre-)triangulated subcategory T is called thick (or épaisse) if it is "closed under direct summands”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Mathematica 105 (1997) 1–27](https://doi.org/10.1023/a:1017932514274)

### Defining vₙ self maps through Morava K-theory makes the periodicity theorem statable

**Remember:** A positive-degree self-map is invertible at one height and nilpotent at every other height.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Fix n ≥ 1 and a finite p-local spectrum X. A vₙ self-map is a map ΣᵏX → X with k &gt; 0 inducing an isomorphism on K(n)-homology (our own). It must act nilpotently on K(m)-homology at every other height m (our own).

**Problem.** Every finite p-local spectrum of type n has a vₙ self map. Given two such maps, some power of one equals some power of the other, so the telescope does not depend on the choice.

**How the definition helps.** Because the definition is a condition on homology, it can be tested for every type n spectrum at once. The spectra that admit a vₙ self map form a thick subcategory, so by the thick subcategory theorem one example of type n is enough. The work moves to building one such example, which Hopkins and Smith do with a vanishing line in an Adams spectral sequence. The uniqueness of powers follows from the nilpotence theorem.

**nLab:** [periodicity theorem](https://ncatlab.org/nlab/show/periodicity+theorem), [telescopic localization](https://ncatlab.org/nlab/show/telescopic+localization). It says: “A vₙ-self-map on a p-local finite spectrum X, for n ≥ 1 is a map f : Σᵏ X ⟶ X such that”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)

### Finite spectra of the same type have the same Bousfield class

**Remember:** Same type, same thick subcategory, same spectra killed.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** The Bousfield class ⟨X⟩ of a spectrum X records which spectra Y satisfy X ∧ Y = 0. Two spectra are Bousfield equivalent when they kill the same spectra.

**Problem.** If F and F′ are finite p-local spectra of the same type n, then ⟨F⟩ = ⟨F′⟩. The classes of type 0, 1, 2, … strictly decrease.

**How the definition helps.** The Bousfield class works because, for fixed Y, the finite spectra F with F ∧ Y = 0 form a thick subcategory (our own). By the thick subcategory theorem, F and F′ generate the same thick subcategory, so each kills Y exactly when the other does. The decrease is strict because K(n−1) kills a type n spectrum but not one of type n − 1. All the work sits in the thick subcategory theorem.

**nLab:** [Bousfield lattice](https://ncatlab.org/nlab/show/Bousfield+lattice), [thick subcategory theorem](https://ncatlab.org/nlab/show/thick+subcategory+theorem). It says: “let the Bousfield class of an object X, denoted ⟨X⟩, be the class { Y∈obj(T): X⊗Y=0}.”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Thick subcategories of finite p-local spectra form a single chain by type

**Remember:** Type at least n means invisible at every lower height.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A thick subcategory is a full triangulated subcategory closed under retracts (our own). A finite p-local spectrum has type at least n if its K(m)-homology vanishes for every finite height m &lt; n (our own). For n = ∞ this requires vanishing at every finite height (our own).

**Problem.** Every thick subcategory of finite p-local spectra is the class of spectra of type at least n, for some n from 0 to ∞.

**How the definition helps.** The type turns each thick subcategory into a single number, so the classification becomes a list. Each class of type at least n is thick, because each K(m)\* has long exact sequences and respects retracts. By a theorem of Ravenel, every K(m) with m ≥ n sees a finite spectrum of type n. The work moves to the nilpotence theorem, which shows that a thick subcategory with one spectrum of type n contains all of them.

**nLab:** [thick subcategory theorem](https://ncatlab.org/nlab/show/thick+subcategory+theorem). It says: “The thick subcategory theorem says that thick subcategories of Spectraᶠⁱⁿₚ are precisely the full subcategories on the spectra of type ≥ n, for some n.”

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “By a theorem of Devinatz–Hopkins–Smith, every thick subcategory of the category of finite p-local spectra is the subcategory of type-n spectra for some n.”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)

### Cartan principal bundles give a clean form of Palais's local triviality theorem

**Remember:** Cartan's condition: dividing one point of a fiber by another is continuous.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 54H15. arXiv math.GN, math.AT. Level 4: research.

**Definition.** Let a locally compact group G act freely and continuously on the right of a completely regular space P (our own). The quotient is a Cartan principal bundle if the division map P ×<sub>P/G</sub> P → G is continuous. It sends each (p,q) to the unique g with p·g = q (our own).

**Problem.** For a free Lie group action on a completely regular space P, the quotient bundle is locally trivial exactly when division is continuous (Palais). In particular this holds for the translation action of a closed Lie subgroup of a Hausdorff topological group.

**How the definition helps.** Palais’s slice theorem turns continuous division for a free Lie group action into local trivializations (our own). Conversely a local trivialization expresses division by continuous group operations (our own). For a closed Lie subgroup of a Hausdorff topological group, division is (p,q) ↦ p⁻¹q (our own).

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle). It says: “Then the quotient map P → P/G is a G-principal bundle -- in that it is locally trivial -- precisely if the division map”

**Sources:**

- [Richard Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)

### Semi-simplicial triangulations of circle bundles have an exact Euler class criterion

**Remember:** Keep the face maps and omit the degeneracy maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 55R15, 18N50. arXiv math.AT, math.GT. Level 4: research.

**Definition.** A semi-simplicial set is a contravariant functor from nonempty finite ordinals and strictly increasing maps to sets (our own). Its n-simplices are the elements assigned to {0,…,n} (our own).

**Problem.** An oriented circle bundle over a finite semi-simplicial base B admits a semi-simplicial triangulation over B exactly under Mnëv’s Euler class criterion. Its integral Euler class must have a simplicial cocycle representative taking only the values zero and one on base triangles.

**How the definition helps.** The looser semi-simplicial notion removes extra combinatorial conditions (our own reading). So the criterion becomes a simple condition on a cocycle with values 0 and 1. For classical simplicial triangulations, the same theorem says that this condition is necessary but not sufficient. The theorem is due to Mnëv, and the paper quotes it as its starting point.

**Paper or page:** [Minimal triangulations of circle bundles](https://arxiv.org/abs/2311.04214). It says: “A circle bundle can be semi-simplicially triangulated over a finite semi-simplicial base B iff its integer Euler class can be represented by a simplicial cocycle having values 0 and 1 on 2-simplices of the base.”

**Sources:**

- [Gaiane Panina, Maksim Turevskii, Minimal triangulations of circle bundles, Funct. Anal. Appl. 59 (2025) 430–439, arXiv:2311.04214](https://arxiv.org/abs/2311.04214)
- [N. Mnëv, Minimal triangulations of circle bundles, circular permutations, and the binary Chern cocycle, J. Math. Sci. 247 (2020) 696–710](https://doi.org/10.1007/s10958-020-04832-y)

### Covering spaces as families of sets make classification follow from 1-truncation

**Remember:** A covering space is a set that varies with the point of X.

*True by definition. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In univalent homotopy type theory, a covering of X is a family assigning a set C(x) to every point x (our own). Its total space consists of pairs (x,c) with c ∈ C(x) (our own).

**Problem.** Covering spaces of X are equivalent to sets with an action of the fundamental groupoid of X (the fundamental theorem of covering spaces).

**How the definition helps.** Set-valued families factor through the fundamental groupoid by the universal property of 1-truncation, since the universe of sets is a 1-type (our own). Transport along paths gives the groupoid action, and such an action defines a family on the groupoid (our own).

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “In homotopy type theory, the fundamental theorem of covering spaces is really just a special case of the universal property of 1-truncation.”

**Sources:**

- [Felix Cherubini, Egbert Rijke, Modal descent, Mathematical Structures in Computer Science (2020), arXiv:2003.09713](https://arxiv.org/abs/2003.09713)

### Define real projective spaces in homotopy type theory with their bundles

**Remember:** Build each projective space and its line bundle in the same step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 03B38, 55P20. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Start with the empty type and its empty family, then take the mapping cone of each current two-point family’s projection (our own). Keep the old family on the base and put a standard pair at the cone point (our own). Glue over each total-space point by the equivalence sending its chosen fiber element to the first standard element (our own).

**Problem.** In homotopy type theory, ℝPⁿ⁺¹ is ℝPⁿ with one (n+1)-cell attached. The colimit ℝP∞ is K(ℤ/2, 1), the space whose only nonzero homotopy group is ℤ/2 in degree 1.

**How the definition helps.** Each step is a mapping cone, so the cell structure is built into the definition. The classical quotient of the n-sphere by the antipodal map does not translate directly to homotopy type theory. The work that remains is to show that the total space of the tautological bundle on ℝPⁿ is the n-sphere. Then ℝP∞ is the type of 2-element types, which is K(ℤ/2, 1).

**nLab:** [The real projective spaces in homotopy type theory](https://ncatlab.org/nlab/show/The+real+projective+spaces+in+homotopy+type+theory). It says: “The classical definition of ℝPⁿ, as the quotient space identifying antipodal points of the n-sphere, does not translate directly to homotopy type theory. Instead, we define ℝPⁿ by induction on n simultaneously with its tautological bundle of 2-element sets.”

**Sources:**

- [Ulrik Buchholtz, Egbert Rijke, The real projective spaces in homotopy type theory, LICS 2017, arXiv:1704.05770](https://arxiv.org/abs/1704.05770)

### Orientations as Thom bundle trivializations give the Thom isomorphism

**Remember:** Trivialize the entire E-module bundle before taking its colimit.

*True by definition. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 55P43, 55N20. arXiv math.AT. Level 4: research.

**Definition.** For a real rank-n bundle V over X and a commutative ring spectrum E, an E-orientation is an equivalence of E-module bundles over X. It identifies E ∧ Sⱽ with the constant bundle of fiber ΣⁿE, where Sⱽ denotes fiberwise one-point compactification.

**Problem.** For an E-oriented bundle, the E-module Thom spectrum is equivalent to ΣⁿE smashed with X with a disjoint base point. This gives the Thom isomorphism in E-cohomology.

**How the definition helps.** Taking colimits preserves the equivalence of bundles (our own). Smashing with E preserves colimits, so the first colimit is the E-module Thom spectrum (our own). The constant bundle has colimit ΣⁿE ∧ Σ∞X₊, giving the cohomological Thom isomorphism (our own).

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “An E-orientation of a vector bundle V → X is a trivialization of the E-module bundle E ∧ Sⱽ”

**Sources:**

- [M. Ando, A. J. Blumberg, D. Gepner, M. J. Hopkins, C. Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### The Euler class sorts surface group representations into connected components

**Remember:** Evaluate the flat circle bundle’s Euler class on the oriented surface.

*Makes the theorem clean to state or prove.* MSC 55R40 (Homology of classifying spaces and characteristic classes in algebraic topology), 57K20. arXiv math.GT, math.DG. Level 4: research.

**Definition.** For a closed oriented surface Σ and a representation ρ of π₁Σ into PSL(2,ℝ), form the associated flat bundle using its circle action (our own). The Euler number of ρ is the Euler class of this bundle evaluated on the fundamental class of Σ (our own).

**Problem.** For a closed oriented surface Σ of genus at least two, the Euler number classifies connected components of its PSL(2,ℝ) representation space (Goldman). The integers that occur are exactly those between χ(Σ) and −χ(Σ), inclusive.

**How the definition helps.** The Euler class is an integer that varies continuously, so it is constant on each component (our own remark). Goldman proved the converse: each value allowed by Milnor–Wood gives exactly one nonempty component. For punctured surfaces, Ryu and Yang also need the signs of the peripheral images. The hard part is to prove that each level set is connected.

**Paper or page:** [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391), [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391). It says: “We show that the connected components are indexed by the relative Euler classes and the signs of the images of the peripheral elements satisfying a generalized Milnor-Wood inequality”

**Sources:**

- [I. Ryu, T. Yang, Connected components of the space of type-preserving representations, arXiv:2507.07391 (2025)](https://arxiv.org/abs/2507.07391)
- [W. M. Goldman, Topological components of spaces of representations, Invent. Math. 93 (1988) 557-607](https://doi.org/10.1007/bf01410200)

### Internally defined equivariant principal bundles restrict to fixed loci

**Remember:** Every pair in one fiber differs by a unique group element, continuously and equivariantly.

*True by definition.* MSC 55R91 (Equivariant fiber spaces and bundles in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** Here an equivariant principal Γ-bundle is a G-map P → X with a compatible right action by a group object Γ in G-spaces (our own). The map (p,γ) ↦ (p,pγ) must identify P × Γ with P ×ₓ P as G-spaces, and fibers may be empty (our own).

**Problem.** Take any subgroup H ⊂ G. Then the H-fixed locus Pᴴ → Xᴴ of an equivariant principal bundle is again an equivariant principal bundle. Its group is Γᴴ, and it is equivariant for the Weyl group N(H)/H, where N(H) is the normalizer of H.

**How the definition helps.** Taking H-fixed points preserves the defining products, pullbacks, and isomorphism (our own). The normalizer acts on the resulting diagram through N(H)/H, and the acting group becomes Γᴴ (our own).

**nLab:** [equivariant bundle](https://ncatlab.org/nlab/show/equivariant+bundle). It says: “serves to make manifest that they have good behaviour under passage to fixed loci”

**Sources:**

- [Hisham Sati, Urs Schreiber, Equivariant principal ∞-bundles, arXiv:2112.13654 (2021), Cambridge University Press (2026)](https://arxiv.org/abs/2112.13654)

### A generating series turns all Adem relations into one symmetry

**Remember:** Swap s and t once, and every Adem relation follows.

*Makes the theorem clean to state or prove.* MSC 55S10 (Steenrod algebra). arXiv math.AT. Level 4: research.

**Definition.** Put all Steenrod squares into one power series P(t) = Sq⁰ + tSq¹ + t²Sq² + ⋯ with coefficients in the Steenrod algebra. The product of two such series is composition of operations. This total operation replaces the infinite list of separate squares.

**Problem.** Take the Adem relations, one for each pair 0 &lt; i &lt; 2j. Together they are equivalent to the single identity P(s² + st)·P(t²) = P(t² + st)·P(s²).

**How the definition helps.** The generating series packs the infinitely many binomial-coefficient relations into one symmetry in the two variables s and t. Expanding both sides and comparing coefficients gives back each Adem relation (our own summary). The work moved into proving this one identity, which Bullett and Macdonald did.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “then the Adem relations are equivalent to P(s²+st)⋅P(t²)=P(t²+st)⋅P(s²)”

**Sources:**

- [S. R. Bullett and I. G. Macdonald, On the Adem relations, Topology 21 (1982) 329–332](https://doi.org/10.1016/0040-9383(82)90015-5)

### Defining Steenrod operations for E∞-algebras proves Adem relations once for all

**Remember:** Form the tensor square, take homotopy orbits under swapping, then multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55S12. arXiv math.AT. Level 4: research.

**Definition.** For an 𝔽₂-chain complex V, D₂(V) is the homotopy quotient of V ⊗ V by the action interchanging its factors (our own). A symmetric multiplication is a chain map D₂(V) → V.

**Problem.** For algebras over the E∞ operad in 𝔽₂-chain complexes, May's operations satisfy a Cartan formula and Adem relations. The Steenrod squares on spaces and the Dyer–Lashof operations on the homology of infinite loop spaces are special cases.

**How the definition helps.** The operations and their relations are proved from the E∞ structure alone, so each theorem holds in every example at once. The Cartan formula comes from comparing the extended square of a tensor product with two extended squares. The Adem relations come from comparing the two ways of iterating the square, through symmetric groups on four letters (our own summary). The work went into the homology of these symmetric groups.

**nLab:** [Steenrod square](https://ncatlab.org/nlab/show/Steenrod+square). It says: “A chain map D₂(V) ⟶ V is called a symmetric multiplication on V (a shadow of an E-infinity algebra structure).”

**Sources:**

- [J. P. May, A general algebraic approach to Steenrod operations, in The Steenrod Algebra and its Applications, Lecture Notes in Mathematics 168, Springer, 1970, 153–231](https://doi.org/10.1007/BFb0058524)

### Dualizing turns indecomposable Steenrod squares into primitives, so Sq²ⁱ generate

**Remember:** Primitives of Milnor's dual are ξ₁ to powers of two, so Sq²ⁱ generate.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 4: research.

**Definition.** For a connected graded augmented algebra A with augmentation ideal I, its space of indecomposables is I/I² (our own). In a Hopf algebra, x is primitive when its coproduct equals x ⊗ 1 + 1 ⊗ x (our own).

**Problem.** The squares of degrees 2ⁱ for i ≥ 0 generate the mod 2 Steenrod algebra. Every positive-degree Sqᵏ with k not a power of two is a sum of products of lower-degree squares.

**How the definition helps.** Degreewise duality identifies indecomposables with the dual of the primitive subspace (our own). Milnor’s coproduct gives a primitive basis consisting of the powers ξ₁²ⁱ, paired with the squares of degrees 2ⁱ. Those squares therefore generate by induction on degree (our own).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The only primitive elements of A∗ for p=2 are the elements of the form ξ₁²ⁱ, and these are dual to the Sq²ⁱ (the only indecomposables of A).”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)
- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)

### Lannes' T, defined as an adjoint, computes cohomology of maps from BV

**Remember:** T is left adjoint to tensoring with H\*(BV), as maps from BV are.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55R35. arXiv math.AT. Level 4: research.

**Definition.** For an elementary abelian p-group V, Lannes’s T-functor on unstable mod p algebras is left adjoint to N ↦ H∗(BV; 𝔽ₚ) ⊗ N (our own).

**Problem.** Suppose H\*(X) and T H\*(X) are of finite type and T H\*(X) is zero in degree 1. Then T H\*(X) is the mod p cohomology of the space of maps from BV to the p-completion of X (Lannes).

**How the definition helps.** The T-adjunction matches the mapping-space adjunction by the cohomology cross product (our own). It supplies the comparison map, and Lannes’s mapping-space theorem proves the comparison under the stated finiteness and degree-one hypotheses (our own).

**Wikipedia:** [Jean Lannes (mathematician)](https://en.wikipedia.org/wiki/Jean_Lannes_%28mathematician%29), [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “He introduced the T-functor on the category of unstable algebra over the Steenrod algebra.”

**Sources:**

- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Reading the dual Steenrod algebra as power series automorphisms gives Milnor's coproduct

**Remember:** Compose two additive power series, and Milnor's coproduct falls out.

*True by definition.* MSC 55S10 (Steenrod algebra), 14L05. arXiv math.AT. Level 4: research.

**Definition.** For a commutative 𝔽₂-algebra R, a strict additive series is f(x) ∈ R\[\[x\]\] with linear term x, constant term zero, and f(x+y)=f(x)+f(y). Its coefficients aᵢ at powers x<sup>(2ⁱ)</sup> give all its terms, with a₀=1 (our own).

**Problem.** The coproduct of the dual Steenrod algebra sends ξₙ to a sum over 0 ≤ i ≤ n. The term for i is (ξₙ₋ᵢ raised to the power 2ⁱ) ⊗ ξᵢ, where ξ₀ = 1.

**How the definition helps.** Evaluate the coproduct on series f and g by forming g(f(x)) in the stated tensor order (our own). Its coefficient at x<sup>(2ⁿ)</sup> is ∑ᵢ aₙ₋ᵢ<sup>(2ⁱ)</sup>bᵢ for 0 ≤ i ≤ n (our own). Milnor’s identification makes these coefficient functions the generators ξᵢ (our own).

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

**Remember:** Conditional convergence asks only that the filtration has zero lim and zero lim¹.

*Makes the theorem clean to state or prove.* MSC 55T05 (General theory of spectral sequences in algebraic topology), 18G40. arXiv math.AT. Level 4: research.

**Definition.** Consider the filtration tower Dˢ of a half-plane exact couple. Conditional convergence to its specified target requires lim Dˢ and lim¹ Dˢ to vanish degreewise as s increases (our own).

**Problem.** For a conditionally convergent half-plane spectral sequence with entering differentials, vanishing of Boardman’s degreewise lim¹ of surviving cycles implies strong convergence. This criterion applies to Adams spectral sequences of this form.

**How the definition helps.** Conditional convergence settles the tower condition (our own). Boardman’s half-plane convergence theorem supplies strong convergence when the derived limit of the surviving cycles also vanishes (our own).

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “that converges conditionally, then sufficient condition that it converges strongly (def.) is that also the lim¹ over its pages vanishes”

**Sources:**

- [J. Michael Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999) 49–84](https://doi.org/10.1090/conm/239/03597)

### Converging to the E-nilpotent completion makes Adams convergence a theorem

**Remember:** Remove successive smash powers of the unit fiber, then take the inverse homotopy limit.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** For a ring spectrum E, let Ē be the fiber of its unit S → E (our own). The E-nilpotent completion of X is the homotopy limit over s of the cofibers of Ē<sup>∧s</sup> ∧ X → X (our own). Each map uses the fiber inclusion in every smash factor (our own).

**Problem.** Bousfield's theorem: let E and X be connective, and let the core of π₀(E) be ℤ/n or ℤ with a set of primes inverted. Then the E-nilpotent completion of X is the E-localization of X, which for E = H𝔽ₚ is the p-completion of X.

**How the definition helps.** The E-Adams spectral sequence comes from the tower that defines the completion, so it converges to that completion by construction, in Boardman's conditional sense. The question of what it computes then becomes the identification of the completion with a localization. The work moves into Bousfield's theorem, which uses the connectivity of X and the arithmetic of π₀(E).

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

**Remember:** Dualize a power-of-two indecomposable square to get its filtration-one class.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55Q25. arXiv math.AT. Level 4: research.

**Definition.** In the mod 2 Adams spectral sequence, hⱼ is the filtration-one class dual to the indecomposable square of degree 2ʲ (our own). Here j ≥ 0 and the stem is 2ʲ − 1 (our own).

**Problem.** Adams's theorem: maps of Hopf invariant one exist only for n = 1, 2, 4 and 8. So ℝⁿ carries a division algebra structure only in these dimensions.

**How the definition helps.** Classes of Adams filtration one are those detected by a single primary operation, so the geometric question becomes whether hⱼ survives the spectral sequence. Adams showed that d₂(hⱼ₊₁) = h₀hⱼ² for j ≥ 3, and this target is nonzero, so hⱼ dies for every j ≥ 4. The work goes into computing that d₂ with secondary cohomology operations.

**nLab:** [Hopf invariant one](https://ncatlab.org/nlab/show/Hopf+invariant+one). It says: “A celebrated theorem due to (Adams 60, introducing and using the Adams spectral sequence) states that maps of Hopf invariant one correspond precisely to the the Hopf constructions on the four normed division algebras”

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “Adams' original use for his spectral sequence was the first proof of the Hopf invariant 1 problem: ℝⁿ admits a division algebra structure only for n = 1, 2, 4, or 8.”

**Sources:**

- [J. F. Adams, On the non-existence of elements of Hopf invariant one, Annals of Mathematics 72 (1960) 20–104](https://doi.org/10.2307/1970147)

### Finite type and connectivity make Adams spectral sequences compute p-adic homotopy

**Remember:** Rational spectra are invisible mod p, so ask for finite generation.

*Rules out counterexamples.* MSC 55T15 (Adams spectral sequences), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A spectrum X is connective when πᵢ(X) = 0 for i &lt; 0. It is of finite type when each πᵢ(X) is a finitely generated abelian group.

**Problem.** Let X be a connective spectrum of finite type, and ℤₚ the p-adic integers. Then the mod p Adams spectral sequence, with E₂ = Ext over the Steenrod algebra of H\*(X; 𝔽ₚ) and 𝔽ₚ, converges to π\*(X) ⊗ ℤₚ.

**How the definition helps.** The finite-type condition rules out spectra whose homotopy mod p cohomology cannot see. For the rational spectrum Hℚ, mod p cohomology is zero, so the E₂ page is zero, yet π₀(Hℚ) = ℚ (our own example). Even for Hℤ the E₂ page is one tower of classes in stem 0, which builds ℤₚ and not ℤ. The work is in Adams's construction and in Bousfield's identification of the target as the p-completion.

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “The classical Adams spectral sequence can be stated for any connective spectrum X of finite type, meaning πᵢ(X)=0 for i &lt; 0 and πᵢ(X) is a finitely generated Abelian group in each degree.”

**Sources:**

- [J. F. Adams, On the structure and applications of the Steenrod algebra, Commentarii Mathematici Helvetici 32 (1958) 180–214](https://doi.org/10.1007/BF02564578)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Morava K-theory Adams spectral sequences converge for every spectrum

**Remember:** Totalize all smash powers of K applied to X.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** For Morava K-theory K at a fixed prime and height, the K-nilpotent completion of X is the totalization of its Amitsur resolution (our own). In degree q this is K<sup>∧</sup>(q+1) ∧ X, with cofaces from the unit and codegeneracies from multiplication (our own).

**Problem.** For every spectrum X, the K(n)-nilpotent completion of X is its K(n)-localization. So the K(n)-based Adams spectral sequence converges conditionally to π\* of the K(n)-localization of X, and completely when X is K(n)-locally dualizable.

**How the definition helps.** Because the completion equals the localization, the convergence statement needs no connectivity or finiteness hypothesis on X. By contrast, Bousfield's theorem for H𝔽ₚ is stated for connective X (our own comparison). The work moves into the proof of the comparison of completion and localization.

**Paper or page:** [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379), [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379). It says: “For any spectrum X, the K-nilpotent completion of X is equivalent to the K-localization of X”

**Sources:**

- [Tobias Barthel and Piotr Pstrągowski, Morava K-theory and Filtrations by Powers, arXiv:2111.06379](https://arxiv.org/abs/2111.06379)

### Replacing mod p cohomology by complex cobordism removes p-completion from Adams

**Remember:** Build the Adams tower using the unit of complex cobordism.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55N22. arXiv math.AT. Level 4: research.

**Definition.** The integral Adams–Novikov spectral sequence of X is the Adams spectral sequence formed from the unit S → MU of complex cobordism (our own). Its tower uses the successive smash powers of the unit fiber smashed with X (our own).

**Problem.** For a connective spectrum X, the Adams–Novikov spectral sequence converges to π\*(X) itself, with no completion at a prime. In particular it converges to the stable homotopy groups of spheres.

**How the definition helps.** The ring π₀(MU) is ℤ, so by Bousfield's theorem the MU-nilpotent completion of a connective spectrum is the spectrum itself. The mod p theory has π₀ = 𝔽ₚ, which is why its Adams spectral sequence sees only the p-completion. The work moves to Novikov's computation of MU\*MU and to the convergence theorem.

**nLab:** [Adams–Novikov spectral sequence](https://ncatlab.org/nlab/show/Adams%E2%80%93Novikov+spectral+sequence), [nilpotent completion of spectra](https://ncatlab.org/nlab/show/nilpotent+completion+of+spectra). It says: “This makes the Adams-Novikov spectral sequence converge to the full homotopy groups of connective spectra, hence in particular to the full stable homotopy groups of spheres”

**Sources:**

- [S. P. Novikov, The methods of algebraic topology from the viewpoint of cobordism theory, Mathematics of the USSR-Izvestiya 1 (1967) 827–913](https://doi.org/10.1070/im1967v001n04abeh000591)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Requiring E∗E flat makes cooperations a Hopf algebroid for Adams spectral sequences

**Remember:** Flat cooperations preserve exact sequences when tensored over the coefficient ring.

*Rules out counterexamples.* MSC 55T15 (Adams spectral sequences), 55S10. arXiv math.AT. Level 4: research.

**Definition.** For a homotopy-commutative ring spectrum E, put R = π∗E and Γ = E∗E. Adams’s flatness condition requires Γ ⊗ᵣ − to preserve every short exact sequence of graded R-modules (our own).

**Problem.** Suppose E∗E is flat over π∗E. Then the second page of the E-based Adams spectral sequence for X is Ext over E∗E from π∗E to E∗X. This holds for E = H𝔽ₚ, MU and KU, but the condition fails for E = Hℤ.

**How the definition helps.** Flatness gives a Künneth isomorphism from E∗(E ∧ X) to E∗E ⊗ E∗X, and this is what makes E∗X a comodule. With that, the first page of the spectral sequence becomes a resolution by comodules, so the second page is an Ext group. Hℤ fails the condition because the integral homology of Hℤ has torsion, so it is not flat over ℤ (our own example). The work went into checking flatness for each E, such as Milnor's theorem for H𝔽ₚ.

**nLab:** [Steenrod algebra](https://ncatlab.org/nlab/show/Steenrod+algebra), [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “The dual 𝔽ₚ Steenrod algebra is a special case of a commutative Hopf algebroid structure canonically induced on the self generalized homology E•(E) of any ring spectrum E for which E• → E•(E) is a flat morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### Synthetic spectra turn Adams differentials into powers of λ

**Remember:** Use sheaves that turn finite sums into products and homology surjections into covers.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P42. arXiv math.AT. Level 4: research.

**Definition.** For mod 2 homology, synthetic spectra are spherical sheaves of spectra on the site of finite mod 2 projective spectra (our own). Covers induce surjections on mod 2 homology, and spherical sheaves take finite sums to products (our own).

**Problem.** For the mod 2 synthetic analogue νX, the synthetic Adams E₂ page is the classical Adams E₂ page tensored with 𝔽₂\[λ\]. Each classical dᵣ(x) = y gives dᵣ(x) = λʳ⁻¹y, and all synthetic differentials follow by λ-linearity.

**How the definition helps.** The synthetic deformation parameter λ records the filtration shift of a classical differential (our own). The Burklund–Hahn–Senger comparison gives the factor λʳ⁻¹ and shows that λ-linearity accounts for all differentials.

**Paper or page:** [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879), [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879). It says: “Given a classical Adams differential dᶜˡᵣ(x)=y, the corresponding synthetic differential is dᵣ(x)=λʳ⁻¹y, which is λ-linear, and all synthetic Adams differentials arise in this way.”

**Sources:**

- [Weinan Lin, Guozhen Wang and Zhouli Xu, On the Last Kervaire Invariant Problem, arXiv:2412.10879](https://arxiv.org/abs/2412.10879)

### A nilpotent action of the fundamental group makes the Eilenberg–Moore sequence converge

**Remember:** Filter the module until the action on every successive quotient is trivial.

*Rules out counterexamples. Confidence: medium.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** A π-module M is nilpotent if it has a finite π-invariant filtration from zero to M with trivial π-action on every successive quotient (our own). Dwyer requires this for the π₁(B)-action on each Hᵢ(F;k).

**Problem.** Dwyer's theorem: let F → E → B be a fibration over a connected base, and k a field. If π₁(B) acts nilpotently on Hᵢ(F; k) for every i, then the Eilenberg–Moore spectral sequence converges strongly to H\*(F; k).

**How the definition helps.** Nilpotence replaces simple connectivity and removes the cases where the spectral sequence computes the wrong answer. Our own counterexample is the path fibration over ℝP∞ with rational coefficients, whose fibre is two points swapped by π₁ = ℤ/2. The E₂ page is Tor of ℚ with ℚ over H\*(ℝP∞; ℚ) = ℚ, which is one-dimensional, but H⁰ of two points is two-dimensional. The work is in Dwyer's convergence argument.

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “refined the convergence results to include spaces for which π₁(B) acts nilpotently on Hᵢ(E<sub>f</sub>) for all i ≥ 0”

**Sources:**

- [W. G. Dwyer, Strong convergence of the Eilenberg–Moore spectral sequence, Topology 13 (1974) 255–265](https://doi.org/10.1016/0040-9383(74)90018-4)

### Tor over the base cohomology turns Künneth into the Eilenberg–Moore spectral sequence

**Remember:** Resolve one module, tensor with the other, then take homology.

*Makes the theorem clean to state or prove.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** For graded modules M and N over a graded commutative algebra A, choose a graded free resolution P of M (our own). Tor over A is the homology of P ⊗ₐ N, graded by resolution degree and internal degree (our own).

**Problem.** Take a fibration pullback P = X ×ᵦ E over simply connected B, with connected spaces of finite k-type. The Eilenberg–Moore spectral sequence runs from Tor over H∗(B;k) of H∗(X;k) and H∗(E;k) to H∗(P;k). For ΩSⁿ with n ≥ 2, its E₂ term has one copy of k in each nonnegative total degree divisible by n−1.

**How the definition helps.** Tor over H\*(B) records both the tensor product and its failure to be exact, so one statement covers products and fibre products. When B is a point, only Tor₀ = ⊗ survives, and the theorem becomes the Künneth formula. The work goes into Eilenberg and Moore's comparison of the cobar construction on singular chains with the chains of the pullback.

**nLab:** [Eilenberg–Moore spectral sequence](https://ncatlab.org/nlab/show/Eilenberg%E2%80%93Moore+spectral+sequence). It says: “it applies without assumption on vanishing of Tor-groups;”

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “This is a generalization insofar as the zeroeth Tor functor is just the tensor product and in the above special case the cohomology of the point B is just the coefficient field k (in degree 0).”

**Sources:**

- [Samuel Eilenberg and John C. Moore, Limits and spectral sequences, Topology 1 (1962) 1–23](https://doi.org/10.1016/0040-9383(62)90093-9)
- [Samuel Eilenberg and John C. Moore, Homology and fibrations I: Coalgebras, cotensor product and its derived functors, Commentarii Mathematici Helvetici 40 (1965) 199–236](https://doi.org/10.1007/BF02564371)

### With connections, cubical groups are Kan and cubical products behave correctly

**Remember:** Connections are extra degeneracies that fold a cube along its diagonal.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 18G45. arXiv math.AT. Level 4: research.

**Definition.** A cubical set with connections is a presheaf on the cube category generated by faces, coordinate deletions, and adjacent-coordinate connections (our own). A connection combines adjacent interval coordinates by maximum, or by minimum in the opposite convention (our own).

**Problem.** Every cubical group with connections is a Kan complex (Tonks). The cube category with connections is a strict test category, so products of cubical sets have the correct homotopy type (Maltsiniotis).

**How the definition helps.** Connections supply fillers for open boxes in cubical groups, as Tonks proves. Without connections, cubical groups can lack such fillers. The product of two representable intervals also has incorrect homotopy type in plain cubical sets (our own). Maltsiniotis proves the strict test category result with connections (our own).

**nLab:** [cubical set](https://ncatlab.org/nlab/show/cubical+set), [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Another reason was that cubical groups were in general not Kan complexes; however cubical groups with connection are Kan complexes.”

**Sources:**

- [A. P. Tonks, Cubical groups which are Kan, J. Pure Appl. Algebra 81 (1992) 83–87](https://doi.org/10.1016/0022-4049(92)90136-4)
- [G. Maltsiniotis, La catégorie cubique avec connexions est une catégorie test stricte, Homology Homotopy Appl. 11 (2009)](https://doi.org/10.4310/hha.2009.v11.n2.a15)

### Connections on cubical sets give the equivalence with crossed complexes

**Remember:** A connection folds a cell into a square with the cell on two adjacent sides.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18G45. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A cubical set with connections is a presheaf on cubes whose coordinate maps include faces, projections, and adjacent-coordinate connections (our own). Pulling back a cube along an adjacent-coordinate maximum or minimum folds it into a cube one dimension higher (our own).

**Problem.** Cubical ω-groupoids with connections are equivalent to crossed complexes (Brown and Higgins). A crossed complex is like a chain complex, with a groupoid at the bottom and groupoid actions above it.

**How the definition helps.** The connection operations supply the thin cells used to fold cubes into the globular pieces of a crossed complex (our own). Brown and Higgins prove that this construction yields the equivalence for cubical ω-groupoids with connections.

**nLab:** [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Such connections on cubical sets were introduced in 1981 by Brown and Higgins in order to obtain the equivalence of their "cubical ∞-groupoids" with crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, On the algebra of cubes, Journal of Pure and Applied Algebra 21 (1981) 233–260](https://doi.org/10.1016/0022-4049(81)90018-9)

### Cogroup generators make equivalences of spectra detectable at one base point

**Remember:** Suspensions are cogroups, so all components of a mapping space look alike.

*Rules out counterexamples.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N60. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a pointed cocomplete ∞-category, take compact objects Sᵢ that generate under colimits (our own). Require the family to contain their suspensions and each Sᵢ to represent a group-valued functor on the homotopy category (our own).

**Problem.** In such an ∞-category, a map f: X → Y is an equivalence when every map \[Sᵢ, X\] → \[Sᵢ, Y\] is a bijection. For spectra, a map is an equivalence exactly when it is an isomorphism on πₙ for every integer n.

**How the definition helps.** The cogroup structure makes each mapping space out of Sᵢ an H-group, so all its components look alike and one base point is enough (nLab). In pointed spaces S⁰ is not a cogroup, so the test can fail when X is not connected (nLab). For example, sending S⁰ into a point plus a disjoint circle passes the test but is not an equivalence (our own). The work is the ordinary Whitehead theorem, applied to the mapping spaces out of each Sᵢ.

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “It is this last condition of testing on all basepoints that the assumed cogroup structure on the S<sub>i</sub> allows to do away with”

**Sources:**

- [Jacob Lurie, Higher Algebra, Section 1.4.1 (the lemma in the proof of Theorem 1.4.1.2)](https://www.math.ias.edu/~lurie/papers/HA.pdf) (link not checked)

### Quillen idempotent monads give the stable model structure on spectra

**Remember:** Preserve weak equivalences, stabilize after one application, and preserve local equivalences under the specified pullbacks.

*Makes the theorem clean to state or prove.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let η: Id → Q coaugment an endofunctor of a right proper model category. Require Q to preserve weak equivalences, and Qηₓ and η<sub>QX</sub> to be weak equivalences for every X (our own). Pullback along fibrations between fibrant objects where η is a weak equivalence must preserve maps that Q sends to weak equivalences (our own).

**Problem.** For such Q, the original cofibrations and the Q-equivalences are part of a model structure (Bousfield–Friedlander). For Q the Ω-spectrification of topological sequential spectra, this is the stable model structure, whose weak equivalences are the stable weak homotopy equivalences.

**How the definition helps.** The definition turns the existence of a localized model structure into three checks on one functor (our own). For sequential spectra these checks are properties of Ω-spectrification, which preserves homotopy pullbacks (our own). The work sits in the general Bousfield–Friedlander theorem, proved once for all such Q.

**nLab:** [Introduction to Stable homotopy theory -- 1-1](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-1). It says: “this establishes the stable model structure on topological sequential spectra”

**Sources:**

- [A. K. Bousfield and E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Test categories make presheaves model homotopy types almost by definition

**Remember:** Test categories with terminal objects by taking elements of the slice-functor presheaf.

*True by definition. Confidence: medium.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P15, 18F20. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A small category A is a weak test category if the following test holds for every small category D with a terminal object (our own). The category of elements of the presheaf a ↦ Fun(A/a,D)₀ must have weakly contractible nerve (our own). Here Fun(A/a,D)₀ denotes the set of functors from the slice to D (our own).

**Problem.** For a weak test category A, localizing presheaves at category-of-elements nerve equivalences gives the homotopy category of small categories localized at nerve equivalences. Thus presheaves on a test category model homotopy types.

**How the definition helps.** The axioms make the comparison with small categories almost automatic: it follows by a short argument (Maltsiniotis, Lemme 1.3.8 and Proposition 1.3.9). The real work moves to two places. One must prove that small categories model homotopy types through nerves, and check that categories such as the simplex category Δ are test categories.

**nLab:** [test category](https://ncatlab.org/nlab/show/test+category), [Pursuing Stacks](https://ncatlab.org/nlab/show/Pursuing+Stacks). It says: “In other words, presheaves over a (weak) test category are models for homotopy types of ∞-groupoids.”

**Sources:**

- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](https://webusers.imj-prg.fr/~georges.maltsiniotis/textes.html)
